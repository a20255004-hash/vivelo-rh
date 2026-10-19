// Servidor estático mínimo, sin dependencias: node scripts/serve.mjs [puerto]
import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { extname, join, normalize } from "path";
const root = new URL("..", import.meta.url).pathname;
const port = +(process.argv[2] || process.env.PORT || 8080);
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".mp4": "video/mp4", ".vtt": "text/vtt; charset=utf-8", ".json": "application/json", ".mp3": "audio/mpeg", ".webm": "video/webm" };
createServer(async (req, res) => {
  try {
    let p = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
    if (p.endsWith("/")) p += "index.html";
    const f = join(root, p);
    if (!f.startsWith(root)) throw 0;
    const s = await stat(f);
    const data = await readFile(f);
    res.writeHead(200, { "Content-Type": TYPES[extname(f)] || "application/octet-stream", "Content-Length": s.size, "Cache-Control": "no-cache" });
    res.end(data);
  } catch (e) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); res.end("No encontrado"); }
}).listen(port, () => console.log(`VÍVELO RH en http://localhost:${port}/`));
