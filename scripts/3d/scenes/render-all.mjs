// Renderiza los dioramas 3D a WebP: node scripts/3d/scenes/render-all.mjs [nombre ...]
// Requiere el servidor: node scripts/serve.mjs 8094  (o PORT=xxxx)
import { createRequire } from "module";
import { execSync, execFileSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { tmpdir } from "os";

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, "..", "..", "..");
const out = join(repo, "assets", "3d", "scenes");
const tmp = join(tmpdir(), "vivelo-3d");
mkdirSync(out, { recursive: true }); mkdirSync(tmp, { recursive: true });
const require = createRequire(import.meta.url);
const { chromium } = require(execSync("npm root -g").toString().trim() + "/playwright");
const port = process.env.PORT || 8094;

export const ALL = ["oficina", "reunion", "almacen", "municipalidad", "planta", "agro", "hospital", "retail",
  "cooperativa", "corporativo", "academia", "mineria", "brujula", "balanza", "boleta"];
const names = process.argv.slice(2).length ? process.argv.slice(2) : ALL;

const browser = await chromium.launch({
  executablePath: process.env.CHROME || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
page.on("console", m => { if (m.type() === "error") console.error("  [page]", m.text()); });
for (const name of names) {
  for (const [suffix, W, H] of [["", 3200, 2000], ["-sq", 1600, 1600]]) {
    const t0 = Date.now();
    await page.goto(`http://localhost:${port}/scripts/3d/scenes/render.html?scene=${name}&w=${W}&h=${H}`);
    await page.waitForFunction(() => window.__ready || window.__err, null, { timeout: 300000 });
    const err = await page.evaluate(() => window.__err);
    if (err) { console.error(name, err); continue; }
    const url = await page.evaluate(() => window.__png);
    const png = join(tmp, `${name}${suffix}.png`);
    writeFileSync(png, Buffer.from(url.split(",")[1], "base64"));
    const res = execFileSync("python3", [join(here, "finish.py"), png, join(out, `${name}${suffix}.webp`), suffix ? "800x800" : "1600x1000", suffix ? "90" : "180"]).toString().trim();
    console.log(`${name}${suffix}: ${res} (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
  }
}
await browser.close();
