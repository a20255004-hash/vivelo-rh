// Renderiza a Kusi (PNG transparentes por estado de ánimo, hero y video "hola").
//   node scripts/3d/render-kusi.mjs            -> todo
//   node scripts/3d/render-kusi.mjs stills      -> solo PNG/WebP
//   node scripts/3d/render-kusi.mjs video       -> solo video
//   node scripts/3d/render-kusi.mjs preview feliz hero   -> una vista rápida a /tmp-ish
// Requisitos: Playwright global, Chromium en /opt/pw-browsers, ffmpeg, python3 + PIL.
import { spawn, execFileSync } from "child_process";
import { mkdirSync, writeFileSync, rmSync, existsSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const out = join(root, "assets", "3d", "kusi");
const PORT = +(process.env.KUSI_PORT || 8093);
const MOODS = ["neutral", "feliz", "curioso", "sorpresa", "preocupado", "triste", "indignado", "pensando", "animo", "celebra"];
const SS = 2; // supermuestreo

const gRoot = execFileSync("npm", ["root", "-g"]).toString().trim();
const { chromium } = createRequire(import.meta.url)(join(gRoot, "playwright"));
const CHROME = process.env.CHROME || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

async function ensureServer() {
  try { await fetch(`http://localhost:${PORT}/scripts/3d/render.html`); return null; } catch {}
  const p = spawn(process.execPath, [join(root, "scripts", "serve.mjs"), String(PORT)], { stdio: "ignore" });
  for (let i = 0; i < 50; i++) { await new Promise((r) => setTimeout(r, 100)); try { await fetch(`http://localhost:${PORT}/`); return p; } catch {} }
  throw new Error("no arrancó el servidor");
}

const py = (code, ...args) => execFileSync("python3", ["-c", code, ...args], { stdio: "inherit" });
const DOWN = `
import sys
from PIL import Image
src, dst, size = sys.argv[1], sys.argv[2], int(sys.argv[3])
im = Image.open(src).convert("RGBA")
# premultiplicar para reducir sin halos
import numpy as np
a = np.asarray(im).astype(np.float32)/255.0
rgb = a[...,:3]*a[...,3:4]
pm = Image.fromarray((np.concatenate([rgb, a[...,3:4]], -1)*255).round().astype('uint8'), 'RGBA')
pm = pm.resize((size, size), Image.LANCZOS)
b = np.asarray(pm).astype(np.float32)/255.0
al = b[...,3:4]
col = np.where(al > 1e-4, b[...,:3]/np.maximum(al,1e-4), 0)
res = Image.fromarray((np.clip(np.concatenate([col, al], -1),0,1)*255).round().astype('uint8'), 'RGBA')
res.save(dst + ".webp", "WEBP", quality=90, method=6)
# PNG: paleta con libimagequant (pip install imagequant) hasta quedar <= 250 KB
import io, os
LIMIT = 250 * 1024
try:
    import imagequant
    best = None
    for mq in (95, 90, 85, 80, 75, 70):
        q = imagequant.quantize_pil_image(res, dithering_level=1.0, max_quality=mq, min_quality=0)
        buf = io.BytesIO(); q.save(buf, "PNG", optimize=True); best = buf.getvalue()
        if len(best) <= LIMIT: break
    open(dst + ".png", "wb").write(best)
except ImportError:
    print("  (aviso: sin 'imagequant'; PNG truecolor sin cuantizar)")
    res.save(dst + ".png", optimize=True)
`;

async function main() {
  const what = process.argv[2] || "all";
  const server = await ensureServer();
  const browser = await chromium.launch({ executablePath: CHROME, args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
  const page = await browser.newPage();
  page.on("console", (m) => { if (m.type() === "error") console.error("[page]", m.text()); });
  page.on("pageerror", (e) => console.error("[pageerror]", e.message));
  await page.goto(`http://localhost:${PORT}/scripts/3d/render.html`);
  await page.waitForFunction(() => window.kusiReady === true, null, { timeout: 60000 });
  const tmp = join(root, "assets", "3d", "kusi", ".tmp"); mkdirSync(tmp, { recursive: true });
  const save = (dataUrl, file) => writeFileSync(file, Buffer.from(dataUrl.split(",")[1], "base64"));

  if (what === "preview") {
    const mood = process.argv[3] || "feliz", view = process.argv[4] || "front", size = +(process.argv[5] || 768);
    const url = await page.evaluate((o) => window.renderKusi(o), { mood, view, size, bg: process.env.BG || null });
    const f = process.env.OUT || join(tmp, `preview-${mood}-${view}.png`); save(url, f); console.log(f);
  }

  if (what === "sheet") {
    const files = [];
    for (const m of MOODS) { const url = await page.evaluate((o) => window.renderKusi(o), { mood: m, view: process.argv[3] || "front", size: 512 }); const f = join(tmp, `sheet-${m}.png`); save(url, f); files.push(f); }
    execFileSync("montage", [...files, "-tile", "5x2", "-geometry", "320x320+4+4", "-background", "#F5F0E8", join(tmp, "sheet.png")]);
    console.log(join(tmp, "sheet.png"));
  }

  if (what === "all" || what === "stills") {
    const jobs = MOODS.map((m) => ({ mood: m, view: "front", size: 1024, name: `kusi-${m}` }));
    jobs.push({ mood: "feliz", view: "hero", size: 1600, name: "kusi-hero" });
    for (const j of jobs) {
      const t0 = Date.now();
      const url = await page.evaluate((o) => window.renderKusi(o), { mood: j.mood, view: j.view, size: j.size * SS });
      const raw = join(tmp, j.name + "-raw.png"); save(url, raw);
      py(DOWN, raw, join(out, j.name), String(j.size));
      console.log(`${j.name}: ${(statSync(join(out, j.name + ".png")).size / 1024).toFixed(0)} KB png, ${(statSync(join(out, j.name + ".webp")).size / 1024).toFixed(0)} KB webp (${Date.now() - t0} ms)`);
    }
  }

  if (what === "all" || what === "video") {
    const fdir = join(tmp, "frames"); rmSync(fdir, { recursive: true, force: true }); mkdirSync(fdir, { recursive: true });
    const FPS = 24, DUR = 7.5, N = Math.round(FPS * DUR);
    for (let i = 0; i < N; i++) {
      const url = await page.evaluate((o) => window.holaFrame(o), { t: i / FPS, size: 1080 });
      save(url, join(fdir, `f${String(i).padStart(4, "0")}.png`));
      if (i % 24 === 0) console.log(`frame ${i}/${N}`);
    }
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(fdir, "f%04d.png"), "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "slow", "-crf", "20", "-movflags", "+faststart", join(out, "kusi-hola.mp4")], { stdio: "inherit" });
    // póster: fotograma del saltito feliz
    const posterUrl = await page.evaluate((o) => window.holaFrame(o), { t: 5.0, size: 1080 });
    const pr = join(tmp, "poster.png"); save(posterUrl, pr);
    py(`import sys\nfrom PIL import Image\nim=Image.open(sys.argv[1]).convert('RGB')\nim.save(sys.argv[2], optimize=True)\nim.save(sys.argv[3], 'WEBP', quality=86)`, pr, join(out, "kusi-hola-poster.png"), join(out, "kusi-hola-poster.webp"));
    console.log("video:", (statSync(join(out, "kusi-hola.mp4")).size / 1024).toFixed(0), "KB");
  }
  await browser.close();
  if (["all", "stills", "video"].includes(what)) rmSync(tmp, { recursive: true, force: true });
  if (server) server.kill();
}
main().catch((e) => { console.error(e); process.exit(1); });
