// Genera los videos explicativos de VÍVELO RH a partir del sistema de diseño del propio sitio.
// Uso: node scripts/make-video.mjs [id|id1,id2|all] [--posters]   (npm run video  →  all)
//      --posters: solo regenera pósteres y subtítulos (sin volver a codificar el video).
// Cada guion vive en scripts/video/videos/<id>.js; la página scripts/video/index.html lo compone y
// se captura cuadro a cuadro con Playwright (Chromium). ffmpeg codifica H.264 (yuv420p, +faststart).
// Salidas en assets/video/: <id>.mp4 (+ <id>.webm VP9 de respaldo), <id>-poster.jpg, <id>-poster.webp y <id>-subtitulos.txt
// (WebVTT guardado como .txt porque algunos hostings estáticos no sirven .vtt).
// Los videos no tienen voz ni música: son animaciones con texto en pantalla y subtítulos.
// Requisitos: Playwright (local o global; CHROME=/ruta/a/chrome opcional) y ffmpeg/ffprobe.
import { createRequire } from "module";
import { mkdirSync, rmSync, writeFileSync, statSync } from "fs";
import { execSync, spawn } from "child_process";
import { tmpdir } from "os";
import { join } from "path";
import { IDS } from "./video/videos/index.js";
import { vtt } from "./video/vtt.js";

const require = createRequire(import.meta.url);
let pw; try { pw = require("playwright"); } catch (e) { pw = require(execSync("npm root -g").toString().trim() + "/playwright"); }

const FPS = 24, W = 1280, H = 720, CRF = 24, OUT = "assets/video";
const POSTERS_ONLY = process.argv.includes("--posters");
const arg = process.argv.slice(2).find(x => !x.startsWith("--")) || "all";
const ids = arg === "all" ? IDS : arg.split(",");
for (const id of ids) if (!IDS.includes(id)) { console.error(`Video desconocido: ${id}. Opciones: ${IDS.join(", ")}, all`); process.exit(1); }
mkdirSync(OUT, { recursive: true });

// Servidor estático propio en un puerto libre (no depende de que `npm start` esté corriendo).
const PORT = 8000 + Math.floor(Math.random() * 900);
const srv = spawn(process.execPath, ["scripts/serve.mjs", String(PORT)], { stdio: "ignore" });
const base = `http://localhost:${PORT}`;
for (let i = 0; i < 50; i++) { try { const r = await fetch(base + "/scripts/video/index.html"); if (r.ok) break; } catch (e) {} await new Promise(r => setTimeout(r, 100)); }

const browser = await pw.chromium.launch({ executablePath: process.env.CHROME || undefined });
const kb = f => Math.round(statSync(f).size / 1024);
try {
  for (const id of ids) {
    const video = (await import(`./video/videos/${id}.js`)).default;
    const tmp = join(tmpdir(), `vivelo-frames-${id}`);
    rmSync(tmp, { recursive: true, force: true }); mkdirSync(tmp, { recursive: true });
    const page = await browser.newPage({ viewport: { width: W, height: H }, colorScheme: "light", deviceScaleFactor: 1 });
    const errors = []; page.on("pageerror", e => errors.push(e.message)); page.on("console", m => m.type() === "error" && errors.push(m.text()));
    await page.goto(`${base}/scripts/video/index.html?v=${id}`);
    await page.waitForFunction(() => window.ready === true, null, { timeout: 30000 });
    if (errors.length) throw new Error(`Errores en la página de ${id}: ${errors.join(" | ")}`);
    const N = POSTERS_ONLY ? 0 : Math.round(video.duration * FPS);
    const t0 = Date.now();
    for (let i = 0; i < N; i++) {
      await page.evaluate(t => window.setTime(t), i / FPS);
      await page.screenshot({ path: join(tmp, `f${String(i).padStart(5, "0")}.png`), type: "png" });
      if (i % (FPS * 5) === 0) process.stdout.write(`\r${id}: ${i}/${N} cuadros`);
    }
    if (N) process.stdout.write(`\r${id}: ${N}/${N} cuadros en ${Math.round((Date.now() - t0) / 1000)} s\n`);
    await page.evaluate(t => window.setTime(t), video.poster ?? video.duration / 3);
    const posterPng = join(tmp, "poster.png");
    await page.screenshot({ path: posterPng, type: "png" });
    await page.close();

    const mp4 = `${OUT}/${id}.mp4`;
    if (N) execSync(`ffmpeg -y -loglevel error -framerate ${FPS} -i ${tmp}/f%05d.png -c:v libx264 -preset slow -crf ${CRF} -tune animation -pix_fmt yuv420p -r ${FPS} -g ${FPS * 4} -movflags +faststart -an ${mp4}`);
    // Alternativa VP9/WebM para navegadores sin decodificador H.264 (p. ej., algunos Chromium de código abierto).
    if (N) execSync(`ffmpeg -y -loglevel error -framerate ${FPS} -i ${tmp}/f%05d.png -c:v libvpx-vp9 -crf 38 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 -pix_fmt yuv420p -r ${FPS} -g ${FPS * 4} -an ${OUT}/${id}.webm`);
    execSync(`ffmpeg -y -loglevel error -i ${posterPng} -q:v 4 ${OUT}/${id}-poster.jpg`);
    execSync(`ffmpeg -y -loglevel error -i ${posterPng} -c:v libwebp -quality 80 ${OUT}/${id}-poster.webp`);
    writeFileSync(`${OUT}/${id}-subtitulos.txt`, vtt(video));
    rmSync(tmp, { recursive: true, force: true });
    const secs = +execSync(`ffprobe -v error -show_entries format=duration -of csv=p=0 ${mp4}`).toString();
    console.log(`  ${mp4}: ${secs.toFixed(1)} s · ${kb(mp4)} KB (webm ${kb(`${OUT}/${id}.webm`)} KB) · póster ${kb(`${OUT}/${id}-poster.jpg`)} KB (jpg) / ${kb(`${OUT}/${id}-poster.webp`)} KB (webp)`);
  }
} finally {
  await browser.close();
  srv.kill();
}
