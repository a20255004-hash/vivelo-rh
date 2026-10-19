// Genera assets/video/bienvenida.mp4 (+ póster y subtítulos) renderizando la animación cuadro a cuadro.
// Requiere: servidor local en :8080 (npm start), Playwright (Chromium) y ffmpeg.
import { createRequire } from "module";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { DURATION, vtt } from "./video/timeline.js";
const require = createRequire(import.meta.url);
let pw; try { pw = require("playwright"); } catch (e) { pw = require(execSync("npm root -g").toString().trim() + "/playwright"); }
const FPS = 20, tmp = "/tmp/vivelo-frames";
rmSync(tmp, { recursive: true, force: true }); mkdirSync(tmp, { recursive: true }); mkdirSync("assets/video", { recursive: true });
const b = await pw.chromium.launch({ executablePath: process.env.CHROME || undefined });
const p = await b.newPage({ viewport: { width: 1280, height: 720 }, colorScheme: "light" });
await p.goto("http://localhost:8080/scripts/video/index.html"); await p.evaluate(() => window.ready); await p.waitForTimeout(800);
const N = DURATION * FPS;
for (let i = 0; i < N; i++) { await p.evaluate(t => window.setTime(t), i / FPS); await p.screenshot({ path: `${tmp}/f${String(i).padStart(5, "0")}.jpg`, type: "jpeg", quality: 88 }); }
await p.evaluate(t => window.setTime(t), 7); await p.screenshot({ path: "assets/video/bienvenida-poster.png" });
await b.close();
execSync(`ffmpeg -y -loglevel error -framerate ${FPS} -i ${tmp}/f%05d.jpg -c:v libx264 -pix_fmt yuv420p -crf 30 -preset slow -movflags +faststart -vf "fps=${FPS}" assets/video/bienvenida.mp4`);
// WebVTT guardado como .txt: algunos hostings estáticos no sirven .vtt; la vista lo convierte en pista.
writeFileSync("assets/video/bienvenida-subtitulos.txt", vtt());
rmSync(tmp, { recursive: true, force: true });
console.log("Video listo: assets/video/bienvenida.mp4");
