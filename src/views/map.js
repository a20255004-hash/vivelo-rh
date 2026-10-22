/* Mapa de especialidades: constelación interactiva, comparador visual y ficha de cada área. */
import { $, $$, esc } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register, render } from "../core/router.js";
import { C, area, cluster } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { art, kusi3dImg } from "../brand/art.js";
import { avatar } from "../brand/people.js";
import { areaChip } from "./sims.js";
import { lensSeg, lensBody, bindLens } from "./lens.js";
import { viz, FAM_ART, TASK_IC, toolIcon, dayIcon, radar, tweenRadar, reveal, extSlot, bindExt, videosRelated, videoCards } from "./diagrams.js";

const W = 1100, H = 830, CX = 550, CY = 420;
function layout(){
  const pos = {};
  const k = C.clusters.length;
  C.clusters.forEach((c, i) => {
    const ang = -Math.PI / 2 + i * 2 * Math.PI / k;
    const cx = CX + Math.cos(ang) * 350, cy = CY + Math.sin(ang) * 255;
    pos["c:" + c.id] = [cx, cy];
    const as = C.areas.filter(a => a.c === c.id);
    as.forEach((a, j) => { const t = -Math.PI / 2 + j * 2 * Math.PI / as.length + i * .4; pos[a.id] = [cx + Math.cos(t) * 92, cy + Math.sin(t) * 78]; });
  });
  return pos;
}
function constellation(ctx){
  const pos = layout();
  const edges = new Set(); let es = "";
  C.areas.forEach(a => a.links.forEach(l => { if (!area(l)) return; const key = [a.id, l].sort().join("|"); if (edges.has(key)) return; edges.add(key); const [x1, y1] = pos[a.id], [x2, y2] = pos[l]; es += `<path class="edge" data-e="${a.id} ${l}" d="M${x1} ${y1} Q${(x1 + x2) / 2 + (y2 - y1) * .12} ${(y1 + y2) / 2 - (x2 - x1) * .12} ${x2} ${y2}" fill="none"/>`; }));
  const fam = C.clusters.map(c => { const [x, y] = pos["c:" + c.id]; return `<g><ellipse cx="${x}" cy="${y}" rx="150" ry="132" fill="${c.color}" opacity=".07"/><text class="fam-label" x="${x}" y="${y < CY ? y - 140 : y + 152}" text-anchor="middle" fill="${c.color}">${esc(c.n)}</text></g>`; }).join("");
  const nodes = C.areas.map(a => { const [x, y] = pos[a.id]; const c = cluster(a.c); const pr = a.exists[ctx][0]; const r = 7 + pr * 2.4; const words = a.n.split(" "); const half = Math.ceil(words.length / 2); const l1 = words.length > 2 ? words.slice(0, half).join(" ") : a.n, l2 = words.length > 2 ? words.slice(half).join(" ") : ""; return `<a href="#area.${a.id}" class="node" data-area="${a.id}" aria-label="${esc(a.n)} · presencia ${pr} de 3 en este tipo de organización"><circle class="dot" cx="${x}" cy="${y}" r="${r}" fill="${c.color}" stroke="var(--card)" stroke-width="3"/><text x="${x}" y="${y + r + 14}" text-anchor="middle"><tspan x="${x}">${esc(l1)}</tspan>${l2 ? `<tspan x="${x}" dy="13">${esc(l2)}</tspan>` : ""}</text></a>`; }).join("");
  return `<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="Constelación de especialidades de RR.HH.">${fam}${es}${nodes}</svg>`;
}

/* ---------- utilidades visuales ---------- */
const famArt = c => FAM_ART[c] || "oficina";
const areaScene = a => { const s = C.sims.find(x => x.areas[0] === a.id) || C.sims.find(x => x.areas.includes(a.id)); return s ? s.scene : famArt(a.c); };
const taskName = t => (C.tasks.find(x => x.id === t) || { n: t }).n;
const rolesOf = a => C.roles.filter(r => r.areas.includes(a.id)).sort((x, y) => (y.areas[0] === a.id) - (x.areas[0] === a.id));
const roleAv = (r, size = 54) => avatar(r.n, { s: (r.id.length * 7) % 6, g: r.id.length % 2 ? "f" : "m", c: r.id.length % 10, age: r.lvl === "senior" ? "adulto" : "joven", gl: r.lvl === "senior" }, { size, decorative: true });
const CTX_IC = { peq: "inicio", med: "cargos", gra: "sistema", pub: "sectores" };
const affinity = (a, b) => Math.round(100 * (1 - C.traits.reduce((s, t) => s + Math.abs((a.tr[t.id] || 0) - (b.tr[t.id] || 0)), 0) / (3 * C.traits.length)));
const DIMS = [["rasgos", "Rasgos", "brujula"], ["tareas", "Tareas y herramientas", "taller"], ["dia", "Un día", "clock"], ["presencia", "Dónde existe", "sectores"], ["carrera", "Carrera", "up"]];

/* ciclo de vida del trabajador → especialidades (agrupación orientativa) */
const LIFE = [
  ["Planificar", "¿Cuántas personas necesitamos?", "calendar", ["planificacion", "estrategica"], "corporativo"],
  ["Atraer y seleccionar", "¿Quién entra?", "eye", ["atraccion", "marca", "reclutamiento", "practicas"], "reunion"],
  ["Incorporar", "¿Cómo empieza?", "door", ["onboarding", "legajos"], "oficina"],
  ["Administrar y pagar", "¿Está todo en regla?", "calc", ["adm-personal", "nomina", "laboral"], "boleta"],
  ["Desarrollar", "¿Cómo crece?", "academia", ["capacitacion", "desempeno", "sucesion", "do"], "academia"],
  ["Cuidar y retener", "¿Por qué se queda?", "shield", ["clima", "bienestar", "compensaciones", "experiencia", "sst", "cultura", "dei"], "balanza"],
  ["Desvincular", "¿Cómo se va?", "flag", ["relaciones", "laboral", "legajos"], "oficina"]
];
const SUB_IC = ["calendar", "mapa", "user", "flag", "calc", "academia", "reunion"];

let lastTr = null; // valores del radar previo para animar el cambio

/* ---------- comparador ---------- */
function slotCard(a, k, active){
  const c = cluster(a.c);
  return `<button type="button" class="mp-slot" data-slot="${k}" aria-pressed="${active}" style="--cc:${c.color}" aria-label="Especialidad ${k === "A" ? "1" : "2"}: ${esc(a.n)}. ${active ? "Seleccionada para cambiar" : "Pulsa para cambiarla"}">
    <span class="mp-slot-img">${art(areaScene(a), { sq: true, decorative: true })}</span>
    <span class="mp-slot-copy"><span class="mp-slot-k">${k === "A" ? "1" : "2"}</span><span class="eyebrow">${esc(c.n)}</span><b>${esc(a.n)}</b><span class="xs muted">${active ? "Elige abajo para cambiarla" : "Pulsa para cambiarla"}</span></span></button>`;
}
function stage(dim, a, b){
  const ca = cluster(a.c), cb = cluster(b.c);
  const st = `style="--ca:${ca.color};--cb:${cb.color}"`;
  if (dim === "tareas"){
    const ta = new Set(a.tags), tb = new Set(b.tags);
    const onlyA = a.tags.filter(t => !tb.has(t)), both = a.tags.filter(t => tb.has(t)), onlyB = b.tags.filter(t => !ta.has(t));
    const chip = t => `<span class="mp-task">${icon(TASK_IC[t] || "check")}${esc(taskName(t))}</span>`;
    const toolsB = new Set(b.tools.map(x => x.toLowerCase())), toolsA = new Set(a.tools.map(x => x.toLowerCase()));
    const tools = (arr, other) => arr.map(t => `<li class="${other.has(t.toLowerCase()) ? "sh" : ""}">${icon(toolIcon(t))}<span>${esc(t)}</span></li>`).join("");
    const linked = a.links.includes(b.id) || b.links.includes(a.id);
    return `<div class="mp-stage-in" ${st}>
      <div class="mp-venn" role="group" aria-label="Diagrama de Venn de tareas: ${onlyA.length} propias de ${esc(a.n)}, ${both.length} compartidas, ${onlyB.length} propias de ${esc(b.n)}">
        <span class="mp-circ a" aria-hidden="true"></span><span class="mp-circ b" aria-hidden="true"></span>
        <div class="mp-vcol a"><span class="eyebrow">Solo ${esc(a.n)}</span>${onlyA.map(chip).join("") || `<span class="xs muted">—</span>`}</div>
        <div class="mp-vcol both"><span class="eyebrow">Comparten</span>${both.map(chip).join("") || `<span class="xs muted">Ninguna tarea en común</span>`}</div>
        <div class="mp-vcol b"><span class="eyebrow">Solo ${esc(b.n)}</span>${onlyB.map(chip).join("") || `<span class="xs muted">—</span>`}</div>
      </div>
      <div class="callout ${linked ? "ok" : ""}">${icon(linked ? "link" : "info")}<span>${linked ? `<b>Trabajan de la mano:</b> en el mapa, ${esc(a.n)} y ${esc(b.n)} están conectadas directamente.` : `No están conectadas directamente en el mapa: se relacionan a través de otras áreas.`}</span></div>
      <div class="mp-tools"><div><span class="eyebrow">Herramientas · ${esc(a.n)}</span><ul>${tools(a.tools, toolsB)}</ul></div><div><span class="eyebrow">Herramientas · ${esc(b.n)}</span><ul>${tools(b.tools, toolsA)}</ul></div></div>
    </div>`;
  }
  if (dim === "dia"){
    const lane = (x, c) => { const r = rolesOf(x)[0]; if (!r) return `<div class="mp-lane"><span class="muted small">Sin cargo de ejemplo.</span></div>`; return `<div class="mp-lane" style="--cc:${c.color}"><a class="mp-lane-h" href="#cargo.${r.id}">${roleAv(r, 48)}<span><span class="eyebrow">Un día como</span><b>${esc(r.n)}</b></span></a><ol class="mp-day">${r.day.map(([h, t]) => `<li><span class="mp-day-ic">${icon(dayIcon(t))}</span><span class="mp-day-h">${esc(h)}</span><span>${esc(t)}</span></li>`).join("")}</ol></div>`; };
    return `<div class="mp-stage-in" ${st}><div class="mp-lanes">${lane(a, ca)}${lane(b, cb)}</div><p class="xs muted">Jornada típica de un cargo representativo de cada especialidad (personajes y horarios ilustrativos). Ábrelo para ver el cargo completo.</p></div>`;
  }
  if (dim === "presencia"){
    return `<div class="mp-stage-in mp-pres" ${st}>${C.contexts.map(cx => { const ea = a.exists[cx.id], eb = b.exists[cx.id]; return `<div class="mp-pres-row"><span class="mp-pres-ic">${icon(CTX_IC[cx.id] || "cargos")}</span><div class="mp-pres-body"><b>${esc(cx.n)}</b><div class="mp-pbar" role="img" aria-label="${esc(a.n)}: ${ea[0]} de 3; ${esc(b.n)}: ${eb[0]} de 3"><i class="a" style="--w:${ea[0] / 3 * 100}%"></i><i class="b" style="--w:${eb[0] / 3 * 100}%"></i></div><div class="mp-pres-txt"><span class="small"><i class="dot a"></i>${esc(ea[1])}</span><span class="small"><i class="dot b"></i>${esc(eb[1])}</span></div></div></div>`; }).join("")}</div>`;
  }
  if (dim === "carrera"){
    const stairs = (x, c) => `<div class="mp-stairs" style="--cc:${c.color}"><span class="eyebrow">${esc(x.n)}</span><ol>${x.career.map((s, i) => `<li style="--i:${i}"><span class="n">${i + 1}</span><span>${esc(s)}</span></li>`).join("")}</ol></div>`;
    return `<div class="mp-stage-in" ${st}><div class="mp-stairs-wrap">${stairs(a, ca)}${stairs(b, cb)}</div><p class="xs muted">Ruta típica de crecimiento: de un puesto de entrada a uno de mayor responsabilidad.</p></div>`;
  }
  // rasgos
  const diffs = C.traits.map(t => [t, (a.tr[t.id] || 0) - (b.tr[t.id] || 0)]).sort((x, y) => Math.abs(y[1]) - Math.abs(x[1]));
  const top = diffs[0];
  return `<div class="mp-stage-in mp-rasgos" ${st}>
    <div class="mp-radar">${radar(C.traits, [{ v: a.tr, color: ca.color }, { v: b.tr, color: cb.color }], `Radar de rasgos: ${a.n} frente a ${b.n}`)}<div class="legend"><span><i style="background:${ca.color}"></i>${esc(a.n)}</span><span><i class="dash" style="border-color:${cb.color}"></i>${esc(b.n)}</span></div></div>
    <div class="mp-bars">${C.traits.map(t => { const va = a.tr[t.id] || 0, vb = b.tr[t.id] || 0; return `<div class="mp-bar-row"><span class="small">${esc(t.n)}</span><div class="mp-bar2" role="img" aria-label="${esc(t.n)}: ${esc(a.n)} ${va} de 3; ${esc(b.n)} ${vb} de 3"><i class="a" style="--w:${va / 3 * 100}%"></i><i class="b" style="--w:${vb / 3 * 100}%"></i></div></div>`; }).join("")}
      ${top && top[1] ? `<div class="callout sun">${icon("bulb")}<span><b>La mayor diferencia:</b> ${esc(top[0].n.toLowerCase())}. ${esc(top[1] > 0 ? a.n : b.n)} lo exige más (${Math.max(a.tr[top[0].id] || 0, b.tr[top[0].id] || 0)} de 3).</span></div>` : ""}
      <p class="xs muted">Estimación orientativa (0 a 3) del peso de cada rasgo en el trabajo diario.</p></div>
  </div>`;
}
function compareBlock(){
  const a = area(S.state.prefs.cmpA) || area("reclutamiento"), b = area(S.state.prefs.cmpB) || area("nomina");
  const slot = S.state.prefs.cmpSlot === "B" ? "B" : "A";
  const dim = DIMS.some(d => d[0] === S.state.prefs.cmpDim) ? S.state.prefs.cmpDim : "rasgos";
  const cur = slot === "A" ? a : b, other = slot === "A" ? b : a;
  const af = affinity(a, b);
  return `<div class="mp-duel">${slotCard(a, "A", slot === "A")}
    <div class="mp-vs"><span class="mp-vs-t" aria-hidden="true">vs.</span><div class="mp-match" role="img" aria-label="Coincidencia de rasgos: ${af}%"><svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="none" stroke="var(--line)" stroke-width="6"/><circle class="mp-ring" cx="40" cy="40" r="34" fill="none" stroke="var(--brand)" stroke-width="6" stroke-linecap="round" pathLength="100" stroke-dasharray="${af} 100" transform="rotate(-90 40 40)"/></svg><b class="numeral">${af}%</b></div><span class="xs muted">rasgos en común</span><button type="button" class="btn ghost sm" data-swap aria-label="Intercambiar las dos especialidades">⇄ Intercambiar</button></div>
    ${slotCard(b, "B", slot === "B")}</div>
  <div class="mp-palette" role="group" aria-label="Elige la especialidad ${slot === "A" ? "1" : "2"}">
    ${C.clusters.map(c => `<div class="mp-fam" style="--cc:${c.color}"><span class="mp-fam-h"><i aria-hidden="true"></i>${esc(c.n)}</span><div class="mp-fam-chips">${C.areas.filter(x => x.c === c.id).map(x => `<button type="button" class="mp-pa ${x.id === a.id ? "is-a" : ""} ${x.id === b.id ? "is-b" : ""}" data-pa="${x.id}" aria-pressed="${x.id === cur.id}" ${x.id === other.id ? `aria-label="${esc(x.n)} (ya elegida como la otra especialidad)"` : ""}>${esc(x.n)}${x.id === a.id ? `<span class="mk" aria-hidden="true">1</span>` : ""}${x.id === b.id ? `<span class="mk" aria-hidden="true">2</span>` : ""}</button>`).join("")}</div></div>`).join("")}
  </div>
  <div class="mp-dims" role="group" aria-label="Qué comparar">${DIMS.map(([id, n, ic]) => `<button type="button" data-dim="${id}" aria-pressed="${dim === id}">${icon(ic)}<span>${n}</span></button>`).join("")}</div>
  <div class="mp-stage" id="cmpStage" aria-live="polite">${stage(dim, a, b)}</div>`;
}
function bindCompare(root){
  const box = $("#cmp", root); if (!box) return;
  const redraw = focusSel => {
    const prevTr = lastTr;
    box.innerHTML = compareBlock();
    const a = area(S.state.prefs.cmpA) || area("reclutamiento"), b = area(S.state.prefs.cmpB) || area("nomina");
    lastTr = [a.tr, b.tr];
    const svg = $(".radar", box); if (svg && prevTr) tweenRadar(svg, C.traits, prevTr, lastTr);
    wire();
    if (focusSel) { const f = $(focusSel, box); if (f) f.focus({ preventScroll: true }); }
  };
  const wire = () => {
    $$("[data-slot]", box).forEach(s => s.addEventListener("click", () => { S.state.prefs.cmpSlot = s.dataset.slot; save(); redraw(`[data-slot="${s.dataset.slot}"]`); }));
    $$("[data-pa]", box).forEach(p => p.addEventListener("click", () => {
      const slot = S.state.prefs.cmpSlot === "B" ? "B" : "A", k = "cmp" + slot, o = "cmp" + (slot === "A" ? "B" : "A");
      if ((S.state.prefs[o] || (slot === "A" ? "nomina" : "reclutamiento")) === p.dataset.pa) { S.state.prefs[o] = S.state.prefs[k] || (slot === "A" ? "reclutamiento" : "nomina"); }
      S.state.prefs[k] = p.dataset.pa; save(); redraw(`[data-pa="${p.dataset.pa}"]`);
    }));
    const sw = $("[data-swap]", box); if (sw) sw.addEventListener("click", () => { const A = S.state.prefs.cmpA || "reclutamiento", B = S.state.prefs.cmpB || "nomina"; S.state.prefs.cmpA = B; S.state.prefs.cmpB = A; save(); redraw("[data-swap]"); });
    $$("[data-dim]", box).forEach(d => d.addEventListener("click", () => { S.state.prefs.cmpDim = d.dataset.dim; save(); redraw(`[data-dim="${d.dataset.dim}"]`); }));
  };
  const a = area(S.state.prefs.cmpA) || area("reclutamiento"), b = area(S.state.prefs.cmpB) || area("nomina");
  lastTr = [a.tr, b.tr];
  wire();
}

/* ---------- ciclo de vida y subsistemas ---------- */
function lifeBlock(){
  const cur = Math.min(+(S.state.prefs.mpLife || 0), LIFE.length - 1);
  return `<div class="mp-life rv" role="group" aria-label="Etapas del ciclo de vida del trabajador">
    <div class="mp-life-track">${LIFE.map(([n, q, ic], i) => `<button type="button" class="mp-life-st" data-life="${i}" aria-pressed="${i === cur}" style="--i:${i}"><span class="mp-life-ic">${icon(ic)}</span><span class="mp-life-n">${String(i + 1).padStart(2, "0")}</span><b>${esc(n)}</b><span class="xs muted">${esc(q)}</span></button>`).join("")}</div>
    <div class="mp-life-panel" id="lifePanel" aria-live="polite">${lifePanel(cur)}</div></div>`;
}
function lifePanel(i){
  const [n, q, ic, ids, sc] = LIFE[i];
  return `<div class="mp-life-img">${art(sc, { sq: true, decorative: true })}</div><div class="stack"><span class="eyebrow">Etapa ${i + 1} de ${LIFE.length}</span><h3>${esc(n)} <span class="muted" style="font-weight:400">· ${esc(q)}</span></h3><p class="small muted">Especialidades que más intervienen en esta etapa <span class="tag ped">Agrupación orientativa</span></p><div class="row">${ids.filter(area).map(x => areaChip(x)).join("")}</div></div>`;
}
function subsysBlock(){
  const n = C.subsistemas.length, cx = 260, cy = 210, R = 160;
  const nodes = C.subsistemas.map((s, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R; return `<g class="mp-hub-n" data-subn="${i}"><line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--line-2)" stroke-width="1.5" stroke-dasharray="4 5"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="30" fill="var(--card)" stroke="var(--brass)" stroke-width="1.5"/><text x="${x.toFixed(1)}" y="${(y + 7).toFixed(1)}" text-anchor="middle" font-family="var(--f-display)" font-size="20" font-style="italic" fill="var(--ink)">${String.fromCharCode(97 + i)})</text></g>`; }).join("");
  return `<div class="mp-subsys rv"><svg class="mp-hub" viewBox="0 0 520 420" role="img" aria-label="SERVIR como ente rector al centro de los siete subsistemas de gestión de recursos humanos"><circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--line)" stroke-width="1"/>${nodes}<circle cx="${cx}" cy="${cy}" r="62" fill="var(--ink)"/><text x="${cx}" y="${cy - 2}" text-anchor="middle" font-family="var(--f-display)" font-size="22" fill="var(--paper)">SERVIR</text><text x="${cx}" y="${cy + 20}" text-anchor="middle" font-size="11" letter-spacing="2" fill="var(--paper)">ENTE RECTOR</text></svg>
    <ol class="mp-sub-list">${C.subsistemas.map((s, i) => `<li data-sub="${i}" tabindex="0"><span class="mp-sub-ic">${icon(SUB_IC[i] || "doc")}</span><span><b class="n">Subsistema ${String.fromCharCode(97 + i)})</b><b>${esc(s.n)}</b><span class="small muted">${esc(s.d)}</span></span></li>`).join("")}</ol></div>`;
}

register("mapa", () => {
  const ctx = S.state.prefs.ctx || "med";
  const cx = C.contexts.find(x => x.id === ctx);
  return { section: "mapa", docTitle: "Mapa de especialidades", html: `
  <section class="hero compact">${art("reunion")}<div class="hero-in"><div class="copy"><span class="eyebrow">Mapa de especialidades</span><h1>RR.HH. son muchos trabajos que se tocan</h1><p class="muted">${C.areas.length} especialidades en cinco familias. Pasa el cursor (o el foco) por un área para ver con cuáles se conecta; ábrela para conocer sus tareas, herramientas, entregables y carrera.</p></div><div class="coco-slot">${kusi3dImg("curioso", { size: 150, decorative: true })}</div></div></section>
  <div class="mp-fams">${C.clusters.map(c => `<div class="mp-famcard" style="--cc:${c.color}">${art(famArt(c.id), { sq: true, decorative: true })}<span><b>${esc(c.n)}</b><span class="xs muted">${C.areas.filter(a => a.c === c.id).length} especialidades · ${esc(c.d)}</span></span></div>`).join("")}</div>
  <div class="stack"><span class="eyebrow">Tipo de organización</span><div class="seg" role="group" aria-label="Tipo de organización">${C.contexts.map(c => `<button type="button" data-ctx="${c.id}" aria-pressed="${c.id === ctx}">${c.n}</button>`).join("")}</div><p class="small muted">${esc(cx.d)} El tamaño de cada punto indica cuánto pesa el área en este contexto.</p></div>
  <div class="constellation" id="const">${constellation(ctx)}</div>
  <div id="peek" aria-live="polite"></div>
  <section class="mp-cmp stack-lg" aria-labelledby="cmp-h"><div class="sec-head"><div class="stack"><span class="eyebrow">Comparador interactivo</span><h2 id="cmp-h">Compara dos especialidades</h2></div><p>Elige dos áreas y cambia de lente: rasgos que exige cada una, tareas que comparten, cómo es un día, dónde existe y hacia dónde crece.</p></div>
    <div id="cmp" class="stack-lg">${compareBlock()}</div>
  </section>
  <section class="stack-lg"><div class="sec-head"><div class="stack"><span class="eyebrow">Ciclo de vida del trabajador</span><h2>El recorrido de una persona por la organización</h2></div><p>Las especialidades se ordenan alrededor de ese ciclo: cada etapa depende de la anterior. Elige una etapa para ver qué áreas intervienen.</p></div>${lifeBlock()}</section>
  <section class="stack-lg"><div class="sec-head"><div class="stack"><span class="eyebrow">Sector público</span><h2>En el Estado: los siete subsistemas</h2></div><p>El D.Leg. 1023 organiza la gestión de recursos humanos del Estado en subsistemas, con SERVIR como ente rector.</p></div>${subsysBlock()}</section>
  <section class="stack"><span class="eyebrow">${icon("film")} Para verlo en movimiento</span>${videoCards(videosRelated(["#mapa"]))}</section>`,
  mount(root){
    $$("[data-ctx]", root).forEach(b => b.addEventListener("click", () => { S.state.prefs.ctx = b.dataset.ctx; save(); render(true); }));
    bindCompare(root);
    $$("[data-life]", root).forEach(b => b.addEventListener("click", () => { const i = +b.dataset.life; S.state.prefs.mpLife = i; save(); $$("[data-life]", root).forEach(x => x.setAttribute("aria-pressed", String(+x.dataset.life === i))); $("#lifePanel", root).innerHTML = lifePanel(i); }));
    const hub = (i, on) => { const n = $(`.mp-hub-n[data-subn="${i}"]`, root); if (n) n.classList.toggle("on", on); };
    $$("[data-sub]", root).forEach(li => { ["mouseenter", "focus"].forEach(ev => li.addEventListener(ev, () => hub(li.dataset.sub, true))); ["mouseleave", "blur"].forEach(ev => li.addEventListener(ev, () => hub(li.dataset.sub, false))); });
    reveal(root);
    const box = $("#const", root), peek = $("#peek", root);
    const hi = id => {
      const a = area(id); box.classList.add("focus");
      $$(".node", box).forEach(n => { n.classList.toggle("sel", n.dataset.area === id); n.classList.toggle("on", a.links.includes(n.dataset.area)); });
      $$(".edge", box).forEach(e => e.classList.toggle("on", e.dataset.e.split(" ").includes(id)));
      const c = cluster(a.c), ex = a.exists[S.state.prefs.ctx || "med"];
      peek.innerHTML = `<div class="area-panel" style="--cc:${c.color}"><div class="row between"><div><span class="eyebrow">${esc(c.n)}</span><h3>${esc(a.n)}</h3></div><a class="btn sm" href="#area.${a.id}">Abrir ficha ${icon("arrow")}</a></div><p>${a.simple}</p><div class="grid g3 small"><div><b>Entrega</b><br>${a.delivers.slice(0, 3).map(esc).join(" · ")}</div><div><b>Trabaja con</b><br>${a.with.slice(0, 3).map(esc).join(" · ")}</div><div><b>En este contexto</b><br>${esc(ex[1])}</div></div><div class="row">${a.links.map(l => areaChip(l)).join("")}</div></div>`;
    };
    const clear = () => { box.classList.remove("focus"); $$(".node,.edge", box).forEach(n => n.classList.remove("sel", "on")); };
    $$(".node", box).forEach(n => { n.addEventListener("mouseenter", () => hi(n.dataset.area)); n.addEventListener("focus", () => hi(n.dataset.area)); });
    box.addEventListener("mouseleave", clear);
  } };
});

/* ---------- ficha de un área ---------- */
function egoNet(a){
  const c = cluster(a.c), n = a.links.length, cx = 260, cy = 150, R = 118;
  const nodes = a.links.filter(area).map((l, i) => { const b = area(l), cb = cluster(b.c), ang = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + Math.cos(ang) * R * 1.55, y = cy + Math.sin(ang) * R; const words = b.n.split(" "); const l1 = words.slice(0, 2).join(" "), l2 = words.slice(2).join(" "); return `<a href="#area.${b.id}" aria-label="${esc(b.n)}"><line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${cb.color}" stroke-width="1.5" opacity=".55"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="11" fill="${cb.color}" stroke="var(--card)" stroke-width="3"/><text x="${x.toFixed(1)}" y="${(y + 27).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)"><tspan x="${x.toFixed(1)}">${esc(l1)}</tspan>${l2 ? `<tspan x="${x.toFixed(1)}" dy="13">${esc(l2)}</tspan>` : ""}</text></a>`; }).join("");
  return `<svg class="mp-ego" viewBox="0 -10 520 330" role="group" aria-label="Especialidades conectadas con ${esc(a.n)}">${nodes}<circle cx="${cx}" cy="${cy}" r="34" fill="${c.color}"/><circle cx="${cx}" cy="${cy}" r="44" fill="none" stroke="${c.color}" stroke-width="1" opacity=".5"/><text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="var(--f-display)" font-size="13" font-style="italic" fill="var(--card)">esta área</text></svg>`;
}

register("area", id => {
  const a = area(id);
  if (!a) return { title: "Área no encontrada", html: `<div class="empty">Vuelve al <a href="#mapa">mapa</a>.</div>` };
  const c = cluster(a.c);
  const sims = C.sims.filter(s => s.areas.includes(a.id)), tools = C.tools.filter(t => t.areas.includes(a.id)), cons = C.concepts.filter(x => x.areas.includes(a.id)), roles = rolesOf(a);
  const d = S.state.declared[a.id];
  const ctx = S.state.prefs.ctx || "med";
  const hashes = ["#area." + a.id].concat(cons.map(x => "#concepto." + x.id), sims.map(s => "#sim." + s.id), tools.map(t => "#tool." + t.id));
  let vids = videosRelated(hashes); if (!vids.length) vids = videosRelated(["#mapa"]).filter(v => v.id === "familias");
  return { section: "mapa", docTitle: a.n, html: `
  <section class="mp-ahero" style="--cc:${c.color}"><div class="mp-ahero-copy"><span class="eyebrow">${esc(c.n)} · ${esc(a.sub)}</span><h1>${esc(a.n)}</h1><div class="row"><a class="btn ghost sm" href="#mapa">${icon("back")}Mapa</a>${lensSeg()}</div>
    <div class="mp-facts"><div><b class="numeral">${a.tags.length}</b><span>tareas clave</span></div><div><b class="numeral">${a.tools.length}</b><span>herramientas</span></div><div><b class="numeral">${roles.length}</b><span>cargos</span></div><div><b class="numeral">${a.exists[ctx][0]}<small>/3</small></b><span>presencia · ${esc(C.contexts.find(x => x.id === ctx).n.toLowerCase())}</span></div></div></div>
    <figure class="mp-ahero-img">${art(areaScene(a), { eager: true })}<figcaption class="xs">Ilustración 3D original</figcaption></figure></section>
  <div class="grid g2 mp-lens">${lensBody(`<p>${a.simple}</p>`, `<p>${a.tech}</p>`)}</div>
  <section class="stack rv"><span class="eyebrow">${icon("taller")} Tareas del día a día</span><div class="mp-icongrid">${a.tags.map(t => `<div class="mp-ic-tile"><span class="mp-ic">${icon(TASK_IC[t] || "check")}</span><b>${esc(taskName(t))}</b></div>`).join("")}</div></section>
  <div class="mp-area-grid rv">
    <section class="mp-panel g-tools"><span class="eyebrow">${icon("taller")} Herramientas</span><ul class="mp-iclist">${a.tools.map(t => `<li>${icon(toolIcon(t))}<span>${esc(t)}</span></li>`).join("")}</ul></section>
    <section class="mp-panel g-docs"><span class="eyebrow">${icon("doc")} Entregables</span><div class="mp-docs">${a.delivers.map(x => `<div class="mp-doc"><span class="mp-doc-fold" aria-hidden="true"></span>${icon("doc")}<span>${esc(x)}</span></div>`).join("")}</div></section>
    <section class="mp-panel g-with"><span class="eyebrow">${icon("presencial")} Trabaja con</span><div class="mp-with">${a.with.map(w => `<div>${avatar(w, {}, { size: 40, decorative: true })}<span class="small">${esc(w)}</span></div>`).join("")}</div></section>
    <section class="mp-panel g-radar"><span class="eyebrow">${icon("brujula")} Lo que exige de ti</span><div class="mp-radar solo">${radar(C.traits, [{ v: a.tr, color: c.color }], `Rasgos que exige ${a.n}`)}</div><p class="xs muted">Estimación orientativa (0 a 3) del peso de cada rasgo en el trabajo diario.</p></section>
  </div>
  <section class="mp-panel rv"><span class="eyebrow">${icon("academia")} Conocimientos clave</span><div class="row">${a.know.map(k => `<span class="mp-know">${icon("check")}${esc(k)}</span>`).join("")}</div></section>
  <section class="stack-lg rv"><div class="sec-head"><div class="stack"><span class="eyebrow">Ruta de carrera</span><h2>Niveles de responsabilidad</h2></div><p>Cómo suele crecer alguien en esta especialidad, de su primer puesto a uno de mayor responsabilidad.</p></div>
    <div class="mp-career" style="--cc:${c.color}"><ol class="mp-path">${a.career.map((x, i) => `<li style="--i:${i}"><span class="n">${i + 1}</span><b>${esc(x)}</b></li>`).join("")}</ol>
    <div class="mp-lv">${[["Entrada", a.lv.e, "door"], ["Intermedio", a.lv.i, "up"], ["Mayor responsabilidad", a.lv.s, "star"]].map(([n, t, ic], i) => `<div style="--h:${i * 36}px"><span class="mp-lv-ic">${icon(ic)}</span><b>${n}</b><span class="small muted">${esc(t)}</span></div>`).join("")}</div></div></section>
  ${roles.length ? `<section class="stack rv"><span class="eyebrow">${icon("cargos")} Cargos donde se ejerce</span><div class="mp-roles">${roles.slice(0, 8).map(r => `<a class="mp-role" href="#cargo.${r.id}">${roleAv(r, 64)}<span><b>${esc(r.n)}</b><span class="xs muted">${esc(r.mission)}</span></span></a>`).join("")}</div></section>` : ""}
  <div class="grid g2">
    <section class="mp-panel stack"><span class="eyebrow">${icon("sectores")} Cómo existe según la organización</span>${C.contexts.map(cx => { const e = a.exists[cx.id]; return `<div class="mp-ctx ${cx.id === ctx ? "cur" : ""}"><span class="mp-pres-ic">${icon(CTX_IC[cx.id] || "cargos")}</span><div class="stack" style="gap:4px"><div class="row between"><b class="small">${cx.n}</b><span class="mp-dots" aria-label="Presencia ${e[0]} de 3">${[1, 2, 3].map(k => `<i class="${k <= e[0] ? "on" : ""}" style="--cc:${c.color}"></i>`).join("")}</span></div><span class="small muted">${esc(e[1])}</span></div></div>`; }).join("")}</section>
    <section class="mp-panel stack"><span class="eyebrow">${icon("mapa")} Se conecta con</span>${egoNet(a)}<div class="row">${a.links.map(l => areaChip(l)).join("")}</div></section>
  </div>
  <section class="stack rv"><span class="eyebrow">${icon("sims")} Para experimentarla</span>
    ${sims.length ? `<div class="mp-sims">${sims.map(s => `<a class="mp-sim" href="#sim.${s.id}"><span class="mp-sim-img">${art(s.scene, { sq: true, decorative: true })}</span><span class="mp-sim-copy"><span class="eyebrow">Jornada</span><b>${esc(s.title)}</b></span></a>`).join("")}</div>` : `<p class="small muted">Aún sin jornada propia. Prueba sus dilemas en <a href="#cargos">Cargos</a>.</p>`}
    ${tools.length || cons.length ? `<div class="mp-more">${tools.map(t => `<a class="mp-more-card" href="#tool.${t.id}"><span class="mp-ic">${icon("taller")}</span><span><span class="eyebrow">Taller</span><b>${esc(t.n)}</b></span></a>`).join("")}${cons.map(x => `<a class="mp-more-card con" href="#concepto.${x.id}"><span class="mp-mini-viz" aria-hidden="true">${viz(x.viz)}</span><span><span class="eyebrow">Academia</span><b>${esc(x.n)}</b></span></a>`).join("")}</div>` : ""}
  </section>
  ${vids.length ? `<section class="stack"><span class="eyebrow">${icon("film")} Videos relacionados</span>${videoCards(vids)}</section>` : ""}
  ${extSlot([a.id])}
  <section class="card stack mp-declare"><div class="row between"><h3>Hoy, esta área…</h3>${kusi3dImg(d === "atrae" ? "celebra" : d === "no" ? "pensando" : "curioso", { size: 72, decorative: true })}</div><div class="togs">${[["atrae","yes","Me atrae"],["neutral","neu","No lo tengo claro"],["no","no","No me atrae"]].map(([v, cl, l]) => `<button type="button" class="${cl}" data-dec="${v}" aria-pressed="${d === v}">${l}</button>`).join("")}</div><p class="small muted">Es una declaración, no un veredicto. Tu brújula la compara con lo que experimentes.</p></section>`,
  mount(root){ bindLens(root); bindExt(root); reveal(root); $$("[data-dec]", root).forEach(b => b.addEventListener("click", () => { if (S.state.declared[a.id] === b.dataset.dec) delete S.state.declared[a.id]; else S.state.declared[a.id] = b.dataset.dec; save(); render(true); })); } };
});
