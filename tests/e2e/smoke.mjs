// Prueba de humo: recorre todas las secciones, detecta errores de consola y toma capturas.
// Uso: node tests/e2e/smoke.mjs [url] [carpeta-capturas]
import { createRequire } from "module";
const require = createRequire(import.meta.url);
let pw; try { pw = require("playwright"); } catch (e) { pw = require(require("child_process").execSync("npm root -g").toString().trim() + "/playwright"); }
const BASE = process.argv[2] || "http://localhost:8080/";
const OUT = process.argv[3] || null;
const ROUTES = ["inicio", "viaje", "sims", "sim.seleccion", "mapa", "area.nomina", "cargos", "cargo.hrbp", "academia", "concepto.feriados", "concepto.planilla", "taller", "tool.boleta", "tool.cvs", "retos", "reto.r-planilla", "sectores", "brujula", "medios", "fuentes", "perfil"];
const _b = 0; const browser = await pw.chromium.launch({ executablePath: process.env.CHROME || undefined });
const errors = [];
async function run(viewport, theme, tag){
  const ctx = await browser.newContext({ viewport, colorScheme: theme });
  const page = await ctx.newPage(); page.setDefaultTimeout(8000);
  await ctx.addInitScript(() => { const o = localStorage.getItem("vivelo-rh:v2"); });
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
  // juega cada jornada completa eligiendo la primera opción disponible
  const sims = tag === "desktop" ? ["practicante","seleccion","planillas","feriados","hrbp","campana","discriminacion","relaciones","capacitacion","semana","municipal","concursocas"] : ["practicante"];
  for (const id of sims) {
    await page.evaluate(h => { location.hash = h; }, "sim." + id);
    await page.waitForSelector("[data-start]"); await page.click("[data-start]");
    let guard = 0;
    try { while (guard++ < 60) {
      await page.waitForTimeout(120);
      if (await page.$("#reflbox")) break;
      if (OUT && id === "practicante" && [1, 4, 9].includes(guard)) await page.screenshot({ path: `${OUT}/${tag}-play${guard}.png` });
      if (await page.$("[data-next]:not([disabled])")) { await page.click("[data-next]"); await page.waitForTimeout(450); continue; }
      const ask = await page.$("[data-ask]:not([disabled])"); if (ask && guard % 3 === 0) { await ask.click(); continue; }
      if (await page.$("[data-choice]")) { await page.click("[data-choice]"); await page.click("[data-confirm]"); continue; }
      const pk = await page.$$("[data-pick]"); if (pk.length) { for (let i = 0; i < pk.length; i++) { const c = await page.$("[data-confirm]:not([disabled])"); if (c) break; await (await page.$$("[data-pick]"))[i].click(); } const c = await page.$("[data-confirm]:not([disabled])"); if (c) { await c.click(); continue; } }
      if (await page.$("[data-bud]:not([disabled])")) { await page.click("[data-bud]:not([disabled])"); await page.click("[data-confirm]"); continue; }
      if (await page.$("[data-flag]")) { await page.click("[data-flag]"); await page.click("[data-confirm]"); continue; }
      const ta = await page.$("[data-write]"); if (ta) { await ta.fill(Array(130).fill("texto").join(" ")); await page.click("[data-review]"); await page.click("[data-confirm]"); continue; }
      const cl = await page.$$("[data-calc]"); if (cl.length) { for (const i of cl) await i.fill("1"); await page.click("[data-confirm]"); continue; }
      if (await page.$("[data-mv]")) { await page.click("[data-confirm]"); continue; }
    } } catch (e) { errors.push(`[${tag}] ${id}: ${e.message.split("\n")[0]} en ${await page.evaluate(() => location.hash + " · " + (document.querySelector(".msg h2,.msg-head b")||{}).textContent)}`); }
    if (!(await page.$("#reflbox"))) errors.push(`[${tag}] la jornada ${id} no llegó al informe`);
    else { await page.click('[data-rate="enjoy"][data-v="4"]'); await page.click('[data-rate="see"][data-v="3"]'); await page.click("[data-saverefl]"); }
  }
  if (OUT) await page.screenshot({ path: `${OUT}/${tag}-debrief.png`, fullPage: true });
  // talleres y retos
  for (const t of ["cvs","preguntas","induccion","bandeja","rotacion","clima","legajo","boleta","presupuesto","comunicado"]) { await page.evaluate(h => { location.hash = h; }, "tool." + t); await page.waitForTimeout(300); if (!(await page.$("#toolbox *"))) errors.push(`[${tag}] taller ${t} vacío`); }
  for (const r of ["brujula", "viaje", "perfil"]) { await page.evaluate(h => { location.hash = h; }, r); await page.waitForTimeout(300); }
  await ctx.close();
}
await run({ width: 1366, height: 860 }, "light", "desktop");
await run({ width: 390, height: 844 }, "dark", "mobile");
await browser.close();
if (errors.length) { console.log(errors.join("\n")); process.exit(1); }
console.log("smoke OK");
