// Prueba de humo: recorre todas las secciones, detecta errores de consola y toma capturas.
// Uso: node tests/e2e/smoke.mjs [url] [carpeta-capturas]
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let pw; try { pw = require("playwright"); } catch (e) { pw = require(require("child_process").execSync("npm root -g").toString().trim() + "/playwright"); }
const BASE = process.argv[2] || "http://localhost:8080/";
const OUT = process.argv[3] || null;
const ROUTES = ["inicio", "viaje", "sims", "sim.seleccion", "mapa", "area.nomina", "cargos", "cargo.hrbp", "academia", "concepto.feriados", "concepto.planilla", "taller", "tool.boleta", "tool.cvs", "retos", "reto.r-planilla", "sectores", "brujula", "medios", "fuentes", "perfil"];
const browser = await pw.chromium.launch({ executablePath: process.env.CHROME || undefined });
const errors = [];
async function run(viewport, theme, tag){
  const ctx = await browser.newContext({ viewport, colorScheme: theme });
  const page = await ctx.newPage();
  page.on("pageerror", e => errors.push(`[${tag}] pageerror: ${e.message}`));
  page.on("console", m => { if (m.type() === "error" && !/fonts\.g|net::ERR|Failed to load resource/.test(m.text())) errors.push(`[${tag}] console: ${m.text()}`); });
  await page.goto(BASE + "#inicio");
  await page.waitForSelector("[data-name]");
  if (OUT) await page.screenshot({ path: `${OUT}/${tag}-welcome.png`, fullPage: true });
  await page.fill("#nm", "Ana");
  await page.click("[data-name] button[type=submit]");
  await page.waitForSelector(".tour");
  await page.click('[data-t="skip"]');
  for (const r of ROUTES) {
    await page.evaluate(h => { location.hash = h; }, r);
    await page.waitForTimeout(350);
    const h1 = await page.$("#view h1, #view h2");
    if (!h1) errors.push(`[${tag}] sin título en #${r}`);
    if (OUT && (tag === "desktop" || ["inicio", "sim.seleccion", "brujula", "mapa"].includes(r))) await page.screenshot({ path: `${OUT}/${tag}-${r}.png`, fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 2) errors.push(`[${tag}] desborde horizontal de ${overflow}px en #${r}`);
  }
  // juega la primera jornada completa con la primera opción disponible
  await page.evaluate(() => { location.hash = "sim.practicante"; });
  await page.waitForSelector("[data-start]"); await page.click("[data-start]");
  for (let k = 0; k < 20; k++) {
    await page.waitForTimeout(250);
    if (await page.$("#reflbox")) break;
    if (OUT && [1, 4, 9].includes(k)) await page.screenshot({ path: `${OUT}/${tag}-play${k}.png`, fullPage: true });
    if (await page.$("[data-next]")) { await page.click("[data-next]"); continue; }
    const ch = await page.$("[data-choice]"); if (ch) { await ch.click(); await page.click("[data-confirm]"); continue; }
    const pk = await page.$$("[data-pick]"); if (pk.length) { const min = 3; for (let i = 0; i < Math.min(min, pk.length); i++) await (await page.$$("[data-pick]"))[i].click(); const c = await page.$("[data-confirm]:not([disabled])"); if (c) { await c.click(); continue; } }
    const fl = await page.$("[data-flag]"); if (fl) { await fl.click(); await page.click("[data-confirm]"); continue; }
    const ta = await page.$("[data-write]"); if (ta) { await ta.fill("Hola, te convocamos a la entrevista para el puesto de motorizado el miércoles 21 a las 9:00 en el centro de distribución de Ate. Trae tu DNI y licencia. Por favor confirma tu asistencia respondiendo este correo. Cualquier consulta escríbenos aquí. Saludos cordiales del equipo."); await page.click("[data-review]"); await page.click("[data-confirm]"); continue; }
    const cl = await page.$$("[data-calc]"); if (cl.length) { for (const i of cl) await i.fill("1"); await page.click("[data-confirm]"); continue; }
    const od = await page.$("[data-mv]"); if (od) { await page.click("[data-confirm]"); continue; }
  }
  if (!(await page.$("#reflbox"))) errors.push(`[${tag}] la jornada practicante no llegó al informe`);
  if (OUT) await page.screenshot({ path: `${OUT}/${tag}-debrief.png`, fullPage: true });
  await ctx.close();
}
await run({ width: 1366, height: 860 }, "light", "desktop");
await run({ width: 390, height: 844 }, "dark", "mobile");
await browser.close();
if (errors.length) { console.log(errors.join("\n")); process.exit(1); }
console.log("smoke OK");
