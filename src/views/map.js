/* Mapa de especialidades: constelación interactiva, comparador y ficha de cada área. */
import { $, $$, esc } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register, render } from "../core/router.js";
import { C, area, cluster } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg } from "../brand/art.js";
import { coco } from "../brand/coco.js";
import { areaChip } from "./sims.js";
import { lensSeg, lensBody, bindLens } from "./lens.js";

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

register("mapa", () => {
  const ctx = S.state.prefs.ctx || "med";
  const cx = C.contexts.find(x => x.id === ctx);
  const a1 = S.state.prefs.cmpA || "reclutamiento", a2 = S.state.prefs.cmpB || "nomina";
  return { section: "mapa", docTitle: "Mapa de especialidades", html: `
  <section class="hero compact">${art("viaje")}<div class="hero-in"><div class="copy"><span class="eyebrow">Mapa de especialidades</span><h1>RR.HH. son muchos trabajos que se tocan</h1><p class="muted">${C.areas.length} especialidades en cinco familias. Pasa el cursor (o el foco) por un área para ver con cuáles se conecta; ábrela para conocer sus tareas, herramientas, entregables y carrera.</p></div><div class="coco-slot">${coco("curioso", { size: 120, cls: "anim", label: false })}</div></div></section>
  <div class="stack"><span class="eyebrow">Tipo de organización</span><div class="seg" role="group" aria-label="Tipo de organización">${C.contexts.map(c => `<button type="button" data-ctx="${c.id}" aria-pressed="${c.id === ctx}">${c.n}</button>`).join("")}</div><p class="small muted">${esc(cx.d)} El tamaño de cada punto indica cuánto pesa el área en este contexto.</p></div>
  <div class="constellation" id="const">${constellation(ctx)}</div>
  <div id="peek" aria-live="polite"></div>
  <section class="stack-lg"><div class="stack"><h2>Compara dos especialidades</h2><p class="small muted">Rasgos que exige cada una, presencia según el tipo de organización y ruta de carrera.</p></div>
    <div class="row"><select data-cmp="A" aria-label="Primera especialidad" style="width:auto">${C.areas.map(a => `<option value="${a.id}" ${a.id === a1 ? "selected" : ""}>${esc(a.n)}</option>`).join("")}</select><span class="muted">vs.</span><select data-cmp="B" aria-label="Segunda especialidad" style="width:auto">${C.areas.map(a => `<option value="${a.id}" ${a.id === a2 ? "selected" : ""}>${esc(a.n)}</option>`).join("")}</select></div>
    ${compare(area(a1), area(a2))}
  </section>
  <section class="card stack"><h2>El recorrido de una persona por la organización</h2><p class="small muted">Las especialidades se ordenan alrededor del ciclo de vida del trabajador: cada etapa depende de la anterior.</p><div class="ladder">${[["Planificar","¿Cuántas personas necesitamos?"],["Atraer y seleccionar","¿Quién entra?"],["Incorporar","¿Cómo empieza?"],["Administrar y pagar","¿Está todo en regla?"],["Desarrollar","¿Cómo crece?"],["Cuidar y retener","¿Por qué se queda?"],["Desvincular","¿Cómo se va?"]].map(([a, b], i, arr) => `<span title="${b}"><b>${a}</b></span>${i < arr.length - 1 ? "<i>→</i>" : ""}`).join("")}</div></section>
  <section class="stack-lg"><div class="stack"><h2>En el Estado: los siete subsistemas</h2><p class="small muted">El D.Leg. 1023 organiza la gestión de recursos humanos del Estado en subsistemas, con SERVIR como ente rector.</p></div><div class="subsys">${C.subsistemas.map((s, i) => `<div><b class="n">Subsistema ${String.fromCharCode(97 + i)})</b><b>${esc(s.n)}</b><span class="muted">${esc(s.d)}</span></div>`).join("")}</div></section>`,
  mount(root){
    $$("[data-ctx]", root).forEach(b => b.addEventListener("click", () => { S.state.prefs.ctx = b.dataset.ctx; save(); render(true); }));
    $$("[data-cmp]", root).forEach(s => s.addEventListener("change", () => { S.state.prefs["cmp" + s.dataset.cmp] = s.value; save(); render(true); }));
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

function compare(a, b){
  if (!a || !b) return "";
  const ca = cluster(a.c), cb = cluster(b.c);
  return `<div class="card stack"><div class="cmp"><div class="stack"><b style="color:${ca.color};font-family:var(--f-display);font-size:1.15rem">${esc(a.n)}</b><span class="small muted">${a.simple}</span></div><div class="stack"><b style="color:${cb.color};font-family:var(--f-display);font-size:1.15rem">${esc(b.n)}</b><span class="small muted">${b.simple}</span></div></div>
  <div class="stack"><span class="eyebrow">Lo que exige de ti (0 a 3)</span>${C.traits.map(t => `<div class="trait-row"><span>${esc(t.n)}</span><div class="dual-bar" aria-label="${esc(a.n)}: ${a.tr[t.id] || 0}; ${esc(b.n)}: ${b.tr[t.id] || 0}"><i style="width:${(a.tr[t.id] || 0) / 3 * 100}%;background:${ca.color}"></i><i style="width:${(b.tr[t.id] || 0) / 3 * 100}%;background:${cb.color}"></i></div></div>`).join("")}<div class="legend"><span><i style="background:${ca.color}"></i>${esc(a.n)}</span><span><i style="background:${cb.color}"></i>${esc(b.n)} (barra delgada)</span></div></div>
  <div class="table-wrap"><table><thead><tr><th>Tipo de organización</th><th>${esc(a.n)}</th><th>${esc(b.n)}</th></tr></thead><tbody>${C.contexts.map(cx => `<tr><td><b>${esc(cx.n)}</b></td><td>${"●".repeat(a.exists[cx.id][0])}${"○".repeat(3 - a.exists[cx.id][0])} <span class="small muted">${esc(a.exists[cx.id][1])}</span></td><td>${"●".repeat(b.exists[cx.id][0])}${"○".repeat(3 - b.exists[cx.id][0])} <span class="small muted">${esc(b.exists[cx.id][1])}</span></td></tr>`).join("")}<tr><td><b>Ruta de carrera</b></td><td class="small">${a.career.map(esc).join(" → ")}</td><td class="small">${b.career.map(esc).join(" → ")}</td></tr><tr><td><b>Herramientas</b></td><td class="small">${a.tools.map(esc).join(" · ")}</td><td class="small">${b.tools.map(esc).join(" · ")}</td></tr></tbody></table></div></div>`;
}

register("area", id => {
  const a = area(id);
  if (!a) return { title: "Área no encontrada", html: `<div class="empty">Vuelve al <a href="#mapa">mapa</a>.</div>` };
  const c = cluster(a.c);
  const sims = C.sims.filter(s => s.areas.includes(a.id)), tools = C.tools.filter(t => t.areas.includes(a.id)), cons = C.concepts.filter(x => x.areas.includes(a.id)), roles = C.roles.filter(r => r.areas.includes(a.id));
  const list = arr => `<ul style="margin:0;padding-left:1.1rem;display:grid;gap:4px">${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  const d = S.state.declared[a.id];
  return { section: "mapa", docTitle: a.n, html: `
  <section class="hero compact" style="--cc:${c.color}">${art(sims[0] ? sims[0].scene : "oficina")}<div class="hero-in"><div class="copy"><span class="eyebrow" style="color:${c.color}">${esc(c.n)} · ${esc(a.sub)}</span><h1>${esc(a.n)}</h1><div class="row"><a class="btn ghost sm" href="#mapa">${icon("back")}Mapa</a>${lensSeg()}</div></div></div></section>
  <div class="grid g2" style="border-top:8px solid ${c.color};padding-top:16px;border-radius:4px">${lensBody(`<p>${a.simple}</p>`, `<p>${a.tech}</p>`)}</div>
  <div class="bento">
    <section class="tile w2"><span class="eyebrow">${icon("doc")} Entregables</span>${list(a.delivers)}</section>
    <section class="tile w2"><span class="eyebrow">${icon("taller")} Herramientas</span>${list(a.tools)}</section>
    <section class="tile w2"><span class="eyebrow">${icon("presencial")} Trabaja con</span>${list(a.with)}</section>
    <section class="tile w3 tint"><span class="eyebrow">Conocimientos clave</span>${list(a.know)}<span class="eyebrow" style="margin-top:6px">Tareas del día a día</span><div class="row">${a.tags.map(t => `<span class="chip">${esc((C.tasks.find(x => x.id === t) || { n: t }).n)}</span>`).join("")}</div></section>
    <section class="tile w3"><span class="eyebrow">Lo que exige de ti</span>${C.traits.map(t => `<div class="gauge" style="grid-template-columns:150px minmax(0,1fr)"><span class="small">${t.n}</span><div class="bar"><i style="width:${(a.tr[t.id] || 0) / 3 * 100}%;background:${c.color}"></i></div></div>`).join("")}<p class="xs muted">Estimación orientativa del peso de cada rasgo en el trabajo diario.</p></section>
  </div>
  <section class="stack"><h2>Niveles de responsabilidad</h2><div class="lvl"><div><b>Entrada</b><span>${esc(a.lv.e)}</span></div><div><b>Intermedio</b><span>${esc(a.lv.i)}</span></div><div><b>Mayor responsabilidad</b><span>${esc(a.lv.s)}</span></div></div><div class="ladder" style="margin-top:6px"><span class="eyebrow" style="background:none">Ruta típica</span>${a.career.map((x, i) => `<span>${esc(x)}</span>${i < a.career.length - 1 ? "<i>→</i>" : ""}`).join("")}</div></section>
  <div class="grid g2">
    <section class="card stack"><h3>Cómo existe según la organización</h3>${C.contexts.map(cx => { const e = a.exists[cx.id]; return `<div class="stack" style="gap:4px"><div class="row between"><b class="small">${cx.n}</b><span class="presence" style="--cc:${c.color};width:70px"><i style="width:${e[0] / 3 * 100}%"></i></span></div><span class="small muted">${esc(e[1])}</span></div>`; }).join("")}</section>
    <section class="card stack"><h3>Se conecta con</h3><div class="row">${a.links.map(l => areaChip(l)).join("")}</div><h3 style="margin-top:8px">Para experimentarla</h3><div class="stack small"><span class="eyebrow">Jornadas</span>${sims.length ? sims.map(s => `<a href="#sim.${s.id}">${esc(s.title)}</a>`).join("") : `<span class="muted">Aún sin jornada propia. Prueba sus dilemas en Cargos.</span>`}<span class="eyebrow">Taller</span>${tools.length ? tools.map(t => `<a href="#tool.${t.id}">${esc(t.n)}</a>`).join("") : `<span class="muted">Sin herramienta específica todavía.</span>`}<span class="eyebrow">Academia y cargos</span>${cons.map(x => `<a href="#concepto.${x.id}">${esc(x.n)}</a>`).join("")}${roles.map(r => `<a href="#cargo.${r.id}">Cargo: ${esc(r.n)}</a>`).join("")}</div></section>
  </div>
  <section class="card stack"><h3>Hoy, esta área…</h3><div class="togs">${[["atrae","yes","Me atrae"],["neutral","neu","No lo tengo claro"],["no","no","No me atrae"]].map(([v, cl, l]) => `<button type="button" class="${cl}" data-dec="${v}" aria-pressed="${d === v}">${l}</button>`).join("")}</div><p class="small muted">Es una declaración, no un veredicto. Tu brújula la compara con lo que experimentes.</p></section>`,
  mount(root){ bindLens(root); $$("[data-dec]", root).forEach(b => b.addEventListener("click", () => { if (S.state.declared[a.id] === b.dataset.dec) delete S.state.declared[a.id]; else S.state.declared[a.id] = b.dataset.dec; save(); render(true); })); } };
});
