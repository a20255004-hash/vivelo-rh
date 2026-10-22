/* Taller: tareas reales del oficio con datos ficticios. Lógica portada de la versión original
   (matriz de CV, preguntas, inducción, rotación, clima, legajo, boleta) y conectada al motor nuevo. */
import { $, $$, esc, clamp, money, toast } from "../core/util.js";
import { S, save, reset } from "../core/store.js";
import { register, render } from "../core/router.js";
import { emit } from "../core/bus.js";
import { C, tool as getTool, area, cluster } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg } from "../brand/art.js";
import { avatar } from "../brand/people.js";
import { coco } from "../brand/coco.js";
import * as N from "../engine/nodes.js";
import * as PY from "../engine/payroll.js";
import { ratingRow, bindRatings, areaChip } from "./sims.js";

const mem = {};
const M = id => (mem[id] = mem[id] || {});
const qOf = s => s >= 80 ? "buena" : s >= 55 ? "aceptable" : "riesgosa";
const KINDS = {};

/* La boleta se valida contra el motor de cálculo (una sola fuente de verdad). */
function boletaExpected(t){
  const d = t.data, r = PY.boleta({ basico: d.basico, hijos: d.hijos, he: [2, 2, 2] });
  const map = { af: r.af, he: r.he, bruto: r.bruto, onp: r.onp, neto: r.neto, ess: r.essalud };
  return t.fields.map(f => Object.assign({}, f, { v: map[f.id] != null ? map[f.id] : f.v }));
}

register("taller", () => ({ section: "taller", docTitle: "Taller", html: `
  <section class="hero compact">${art("taller")}<div class="hero-in"><div class="copy"><span class="eyebrow">Taller · trabajar, no solo leer</span><h1>Manos a la obra</h1><p class="muted">Tareas reales del oficio con datos ficticios: matrices de selección, boletas, legajos, encuestas, planes de inducción. Equivócate, mira por qué y vuelve a intentarlo.</p></div><div class="coco-slot">${coco("animo", { size: 120, cls: "anim", label: false })}</div></div></section>
  <div class="bench">${C.tools.map(t => { const r = S.state.tools[t.id]; const c = cluster(area(t.areas[0]).c); return `<a class="tool-card" href="#tool.${t.id}" style="--cc:${c.color}">${r ? `<span class="score chip ${N.qChip[r.q]}">Mejor: ${r.best}/100</span>` : ""}<span class="eyebrow">≈ ${t.mins} min</span><h3 style="padding-right:96px">${esc(t.n)}</h3><p class="small">${esc(t.d)}</p><div class="row" style="gap:6px">${t.areas.slice(0, 2).map(a => areaChip(a, false)).join("")}</div></a>`; }).join("")}</div>` }));

register("tool", id => {
  const t = getTool(id);
  if (!t) return { title: "Herramienta no encontrada", html: `<div class="empty">Vuelve al <a href="#taller">Taller</a>.</div>` };
  const r = S.state.tools[id];
  return { section: "taller", docTitle: t.n, html: `
  <section class="hero compact">${art("taller")}<div class="hero-in"><div class="copy"><span class="eyebrow">Taller · ${t.areas.map(a => esc(area(a).n)).join(" · ")}</span><h1>${esc(t.n)}</h1><p class="muted">${esc(t.d)}</p><div class="row"><a class="btn ghost sm" href="#taller">${icon("back")}Taller</a>${r ? `<span class="chip">Intentos: ${r.attempts} · Mejor puntaje: ${r.best}/100</span><span data-resetbox><button type="button" class="btn ghost sm" data-reset>${icon("trash")}Borrar mi historial aquí</button></span>` : ""}</div></div></div></section>
  <div id="toolbox"></div>`,
  mount(root){
    const box = $("#toolbox", root); const draw = () => KINDS[t.kind](box, t, draw); draw();
    const rb = $("[data-resetbox]", root);
    if (rb) $("[data-reset]", rb).addEventListener("click", () => { reset.tool(t.id); mem[t.id] = null; toast("Historial de la herramienta borrado"); render(true); });
  } };
});

function finishTool(box, t, score, q, feedback, restart){
  const r = S.state.tools[t.id] = S.state.tools[t.id] || { attempts: 0, best: 0 };
  r.attempts++; r.best = Math.max(r.best, score); r.last = score; r.q = q; r.at = Date.now();
  save(); emit("tool:finish", { tool: t, score });
  const form = { enjoy: 0, see: 0 };
  const res = document.createElement("section");
  res.className = "stack-lg";
  res.innerHTML = `<div class="card stack lift"><div class="scoreline"><span class="big">${score}</span><span class="muted">/ 100</span><span class="chip ${N.qChip[q]}">${N.qLabel[q].replace("Decisión", "Resultado")}</span></div><p class="small muted">El puntaje compara tu trabajo con el criterio de una profesional con experiencia. Mide práctica, no talento.</p>${feedback}<div class="row"><button type="button" class="btn ghost" data-retry>${icon("replay")}Intentar de nuevo</button><a class="btn ghost" href="#taller">Otra herramienta</a></div></div>
  <div class="card stack" id="treflbox"><span class="eyebrow">Bitácora rápida</span><div class="field"><span class="lbl" id="tl-e">¿Disfrutaste esta tarea?</span>${ratingRow("enjoy", 0, "tl-e")}</div><div class="field"><span class="lbl" id="tl-s">¿Te gustaría que esta tarea fuera parte de tu trabajo?</span>${ratingRow("see", 0, "tl-s")}</div><div class="row"><button type="button" class="btn brand" data-tsave disabled>Guardar</button></div></div>`;
  box.appendChild(res);
  res.scrollIntoView({ behavior: "smooth", block: "start" });
  $("[data-retry]", res).addEventListener("click", restart);
  const rb = $("#treflbox", res);
  bindRatings(rb, form, () => { $("[data-tsave]", rb).disabled = !(form.enjoy && form.see); });
  $("[data-tsave]", rb).addEventListener("click", () => {
    S.state.refl.push({ at: Date.now(), kind: "tool", ref: t.id, enjoy: form.enjoy, see: form.see, energy: 0, repeat: form.enjoy >= 4 ? t.tags.slice(0, 1) : [], avoid: form.enjoy <= 2 ? t.tags.slice(0, 1) : [], note: "" });
    save(); rb.innerHTML = `<span class="eyebrow">Bitácora rápida</span><p class="small">Guardado: disfrute ${form.enjoy}/5 · te gustaría hacerlo ${form.see}/5. Alimenta tu <a href="#brujula">brújula</a>.</p>`;
  });
}
/* ---------- matriz de CV ---------- */
KINDS.cvs = function(box, t){
  const s = M(t.id);
  if (!s.crit) { s.crit = {}; s.w = {}; s.sc = {}; s.done = false; }
  const chosen = t.criteria.filter(c => s.crit[c.id]);
  const totals = {}; t.cvs.forEach(cv => { totals[cv.id] = chosen.reduce((sum, c) => sum + (s.sc[c.id + cv.id] || 0) * (s.w[c.id] || 1), 0); });
  const complete = chosen.length >= 3 && chosen.every(c => t.cvs.every(cv => s.sc[c.id + cv.id]));
  const rank = t.cvs.slice().sort((a, b) => totals[b.id] - totals[a.id]);
  box.innerHTML = `<div class="stack-lg">
    <div class="callout">${t.vacancy}</div>
    <div class="cvs">${t.cvs.map(cv => `<div class="cv"><b>${esc(cv.n)}</b>${cv.lines.map(l => `<span>${esc(l)}</span>`).join("")}</div>`).join("")}</div>
    <section class="card stack"><h3>1 · Elige tus criterios y su peso</h3><p class="small muted">Marca al menos tres. Peso 1 = complementario · 3 = decisivo.</p>
      <div class="table-wrap"><table class="mx"><thead><tr><th>Usar</th><th>Criterio</th><th>Peso</th></tr></thead><tbody>${t.criteria.map(c => `<tr><td><input type="checkbox" id="cr-${c.id}" data-crit="${c.id}" ${s.crit[c.id] ? "checked" : ""} ${s.done ? "disabled" : ""}></td><td><label for="cr-${c.id}">${esc(c.n)}</label></td><td><select data-w="${c.id}" ${!s.crit[c.id] || s.done ? "disabled" : ""} aria-label="Peso de ${esc(c.n)}">${[1,2,3].map(v => `<option value="${v}" ${(s.w[c.id] || 1) === v ? "selected" : ""}>${v}</option>`).join("")}</select></td></tr>`).join("")}</tbody></table></div></section>
    <section class="card stack"><h3>2 · Puntúa cada CV (1 a 5)</h3>${chosen.length ? `<div class="table-wrap"><table class="mx"><thead><tr><th>Criterio (peso)</th>${t.cvs.map(cv => `<th>${esc(cv.n)}</th>`).join("")}</tr></thead><tbody>${chosen.map(c => `<tr><td>${esc(c.n)} <span class="pill-k">×${s.w[c.id] || 1}</span></td>${t.cvs.map(cv => `<td><select data-sc="${c.id + cv.id}" ${s.done ? "disabled" : ""} aria-label="${esc(c.n)} de ${esc(cv.n)}"><option value="">–</option>${[1,2,3,4,5].map(v => `<option ${s.sc[c.id + cv.id] === v ? "selected" : ""}>${v}</option>`).join("")}</select></td>`).join("")}</tr>`).join("")}<tr><td><b>Total ponderado</b></td>${t.cvs.map(cv => `<td class="num"><b>${totals[cv.id]}</b></td>`).join("")}</tr></tbody></table></div><p class="small">Tu ranking actual: ${rank.map((cv, i) => `<b>${i + 1}.</b> ${esc(cv.n)}`).join(" · ")}</p>` : `<div class="empty">Elige criterios en el paso 1 para armar la matriz.</div>`}
    ${s.done ? "" : `<div class="row"><button type="button" class="btn brand" data-eval ${complete ? "" : "disabled"}>Evaluar mi matriz</button>${complete ? "" : `<span class="small muted">Completa todas las celdas (mínimo tres criterios).</span>`}</div>`}</section></div>`;
  $$("[data-crit]", box).forEach(c => c.addEventListener("change", () => { s.crit[c.dataset.crit] = c.checked; KINDS.cvs(box, t); }));
  $$("[data-w]", box).forEach(c => c.addEventListener("change", () => { s.w[c.dataset.w] = +c.value; KINDS.cvs(box, t); }));
  $$("[data-sc]", box).forEach(c => c.addEventListener("change", () => { s.sc[c.dataset.sc] = +c.value || 0; KINDS.cvs(box, t); }));
  const ev = $("[data-eval]", box);
  if (ev) ev.addEventListener("click", () => {
    s.done = true; KINDS.cvs(box, t);
    let score = 100; const notes = [];
    chosen.filter(c => !c.ok).forEach(c => { score -= 30; notes.push(`<div class="callout bad"><b>${esc(c.n)}:</b> ${esc(c.why)}</div>`); });
    ["exp","excel","com"].forEach(k => { if (!s.crit[k]) { score -= 10; notes.push(`<div class="callout warn">No usaste <b>${esc(t.criteria.find(c => c.id === k).n)}</b>, que el puesto exige directamente.</div>`); } });
    const diffs = [];
    chosen.filter(c => c.ok).forEach(c => t.cvs.forEach(cv => { const u = s.sc[c.id + cv.id], x = cv.x[c.id]; if (Math.abs(u - x) >= 2) diffs.push(`<li>${esc(cv.n)} en <b>${esc(c.n.toLowerCase())}</b>: pusiste ${u}; la evidencia del CV sugiere ${x}.</li>`); }));
    score -= Math.min(30, diffs.length * 4);
    const myTop = rank[0].id;
    if (!t.expertRank.slice(0, 2).includes(myTop)) { score -= 15; notes.push(`<div class="callout warn">Tu primer lugar (${esc(rank[0].n)}) no coincide con los dos mejores según la evidencia.</div>`); }
    score = clamp(score, 0, 100);
    const fb = `<div class="stack">${notes.join("")}${diffs.length ? `<div><span class="label">Puntajes que se alejan de la evidencia</span><ul class="small">${diffs.join("")}</ul></div>` : `<p class="small">Tus puntajes son coherentes con la evidencia de cada CV.</p>`}<div><span class="label">Ranking de referencia</span><p class="small">${t.expertRank.map((id, i) => `<b>${i + 1}.</b> ${esc(t.cvs.find(c => c.id === id).n)}`).join(" · ")}</p></div><div class="pro"><span class="label">Cómo lo razona una profesional</span><p>${t.lesson}</p></div></div>`;
    finishTool(box, t, score, qOf(score), fb, () => { mem[t.id] = null; KINDS.cvs(box, t); });
  });
};

/* ---------- preguntas de entrevista ---------- */
KINDS.preguntas = function(box, t){
  const s = M(t.id);
  if (!s.ans) { s.ans = {}; s.own = ""; s.done = false; }
  const all = t.items.every((_, i) => s.ans[i]);
  const words = (s.own.trim().match(/\S+/g) || []).length;
  box.innerHTML = `<div class="stack-lg"><section class="card stack"><h3>1 · Clasifica cada pregunta</h3><div class="stack">${t.items.map((it, i) => `<div class="check-item ${s.done ? (s.ans[i] === it.a ? "ok" : "bad") : ""}" style="flex-direction:column;cursor:default"><span>«${esc(it.q)}»</span><div class="togs">${t.cats.map(c => `<button type="button" class="neu" data-cat="${i}" data-v="${c.id}" aria-pressed="${s.ans[i] === c.id}" ${s.done ? "disabled" : ""}>${esc(c.n)}</button>`).join("")}</div>${s.done ? `<span class="small">${s.ans[i] === it.a ? "Correcto." : `Era: <b>${esc(t.cats.find(c => c.id === it.a).n)}</b>.`} ${esc(it.why)}</span>` : ""}</div>`).join("")}</div></section>
  <section class="card stack"><h3>2 · Escribe tu propia pregunta conductual</h3><p class="small">Competencia: <b>${esc(t.own.comp)}</b>.</p><textarea id="ownq" style="min-height:80px" ${s.done ? "readonly" : ""} placeholder="Cuéntame de una vez en que…">${esc(s.own)}</textarea>${s.done ? "" : `<div class="row"><button type="button" class="btn brand" data-eval ${all && words >= 8 ? "" : "disabled"}>Evaluar</button><span class="small muted">${all ? "" : "Clasifica las doce preguntas. "}${words >= 8 ? "" : "Escribe tu pregunta (mínimo 8 palabras)."}</span></div>`}</section></div>`;
  $$("[data-cat]", box).forEach(b => b.addEventListener("click", () => { s.ans[b.dataset.cat] = b.dataset.v; KINDS.preguntas(box, t); }));
  const ta = $("#ownq", box); if (ta && !s.done) ta.addEventListener("input", () => { s.own = ta.value; const w = (s.own.trim().match(/\S+/g) || []).length; const ev = $("[data-eval]", box); if (ev) ev.disabled = !(all && w >= 8); });
  const ev = $("[data-eval]", box);
  if (ev) ev.addEventListener("click", () => {
    s.done = true; KINDS.preguntas(box, t);
    const ok = t.items.filter((it, i) => s.ans[i] === it.a).length;
    const prohibMiss = t.items.filter((it, i) => it.a === "prohib" && s.ans[i] !== "prohib").length;
    const det = t.own.rubric.map(r => r.kw.every(k => new RegExp(k, "i").test(s.own)));
    const okOwn = det.filter(Boolean).length;
    let score = Math.round(ok / t.items.length * 75 + okOwn / det.length * 25) - prohibMiss * 10;
    score = clamp(score, 0, 100);
    const fb = `<div class="stack small"><p>Clasificaste bien <b>${ok} de ${t.items.length}</b> preguntas.${prohibMiss ? ` <span style="color:var(--bad)">No identificaste ${prohibMiss} pregunta(s) discriminatoria(s): es lo más importante de reconocer.</span>` : ""}</p><span class="label">Tu pregunta</span>${t.own.rubric.map((r, i) => `<div><span class="chip ${det[i] ? "ok" : "warn"}">${det[i] ? "Cumple" : "Revisar"}</span> ${esc(r.label)}</div>`).join("")}<div class="pro"><span class="label">Un modelo posible</span><p>${esc(t.own.model)}</p></div></div>`;
    finishTool(box, t, score, qOf(score), fb, () => { mem[t.id] = null; KINDS.preguntas(box, t); });
  });
};

/* ---------- plan de inducción ---------- */
KINDS.kanban = function(box, t){
  const s = M(t.id);
  if (!s.pos) { s.pos = {}; s.done = false; }
  const cols = [{id:"", n:"Por ubicar"}].concat(t.cols);
  const placed = t.items.filter(i => s.pos[i.id]).length;
  box.innerHTML = `<div class="stack-lg"><p class="small muted">Elige para cada actividad el momento en que debe ocurrir. ${placed}/${t.items.length} ubicadas.</p><div class="kanban" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr))">${cols.map(c => { const its = t.items.filter(i => (s.pos[i.id] || "") === c.id); if (c.id === "" && !its.length) return ""; return `<div class="kcol"><h4>${esc(c.n)} (${its.length})</h4>${its.map(i => { const ok = s.done ? i.a.includes(s.pos[i.id]) : null; return `<div class="kcard ${ok === true ? "ok" : ok === false ? "bad" : ""}"><span>${esc(i.n)}</span>${s.done ? `<span class="small muted">${ok ? "Bien ubicada." : `Mejor en: ${i.a.map(x => t.cols.find(c => c.id === x).n).join(" o ")}.`} ${esc(i.why)}</span>` : `<select data-pos="${i.id}" aria-label="Momento para ${esc(i.n)}"><option value="">Elegir momento…</option>${t.cols.map(c2 => `<option value="${c2.id}" ${s.pos[i.id] === c2.id ? "selected" : ""}>${esc(c2.n)}</option>`).join("")}</select>`}</div>`; }).join("")}</div>`; }).join("")}</div>${s.done ? "" : `<div class="row"><button type="button" class="btn brand" data-eval ${placed === t.items.length ? "" : "disabled"}>Evaluar mi plan</button></div>`}</div>`;
  $$("[data-pos]", box).forEach(sel => sel.addEventListener("change", () => { s.pos[sel.dataset.pos] = sel.value; KINDS.kanban(box, t); }));
  const ev = $("[data-eval]", box);
  if (ev) ev.addEventListener("click", () => {
    s.done = true; KINDS.kanban(box, t);
    const ok = t.items.filter(i => i.a.includes(s.pos[i.id])).length;
    const critMiss = t.critical.filter(id => !t.items.find(i => i.id === id).a.includes(s.pos[id]));
    let score = Math.round(ok / t.items.length * 100) - critMiss.length * 8;
    score = clamp(score, 0, 100);
    const q = critMiss.length ? (score >= 55 ? "aceptable" : "riesgosa") : qOf(score);
    const fb = `<div class="stack small"><p>Ubicaste bien <b>${ok} de ${t.items.length}</b> actividades.</p>${critMiss.length ? `<div class="callout bad">Actividades críticas fuera de lugar: ${critMiss.map(id => esc(t.items.find(i => i.id === id).n)).join("; ")}. Tienen implicancias legales o de seguridad.</div>` : `<div class="callout ok">Las actividades con implicancias legales y de seguridad quedaron en su momento correcto.</div>`}<div class="pro"><span class="label">Cómo lo razona una profesional</span><p>Lo que depende de la ley (alta, SST, periodo de prueba) tiene fecha fija. Lo demás se ordena pensando en la experiencia del nuevo: que el primer día no espere, que la primera semana aprenda haciendo con alguien y que el seguimiento llegue antes de que decida irse.</p></div></div>`;
    finishTool(box, t, score, q, fb, () => { mem[t.id] = null; KINDS.kanban(box, t); });
  });
};

/* ---------- herramientas basadas en el motor de nodos ---------- */
KINDS.node = function(box, t){
  const node = t.node;
  const s = M(t.id);
  const draw = () => {
    box.innerHTML = `<div class="stack-lg">${N.head(node, {})}<div>${N.interaction(node, {answered:s.res || null})}</div><div id="tres"></div></div>`;
    if (!s.res) N.bind(box, node, {}, (res) => {
      s.res = res; draw();
      $("#tres", box).innerHTML = N.outcome(res, {nofx:true, open:true});
      finishTool(box, t, res.score, res.q, "", () => { mem[t.id] = null; N.resetTmp(node.id); KINDS.node(box, t); });
    }, draw);
  };
  draw();
};

/* ---------- rotación y ausentismo ---------- */
KINDS.rotacion = function(box, t){
  const s = M(t.id);
  if (!s.v) { s.v = {}; s.done = false; }
  const D = t.areasData;
  const months = ["Ene","Feb","Mar","Abr","May","Jun"];
  const colors = ["var(--c-atraer)","var(--c-cuidar)","var(--c-desarrollar)"];
  const W = 560, H = 210, pl = 34, pb = 26, pt = 10, maxV = 5;
  const gw = (W - pl - 10) / 6, bw = gw / 4;
  let bars = "";
  months.forEach((m, mi) => { D.forEach((a, ai) => { const v = a.sal[mi]; const h = v / maxV * (H - pb - pt); bars += `<rect x="${pl + mi * gw + bw * .5 + ai * bw}" y="${H - pb - h}" width="${bw - 2}" height="${h}" fill="${colors[ai]}" rx="1.5"><title>${a.n} · ${m}: ${v}</title></rect>`; }); bars += `<text x="${pl + mi * gw + gw / 2}" y="${H - 8}" text-anchor="middle">${m}</text>`; });
  let grid = ""; for (let v = 0; v <= maxV; v++) { const y = H - pb - v / maxV * (H - pb - pt); grid += `<line x1="${pl}" x2="${W - 6}" y1="${y}" y2="${y}" stroke="var(--rule)" stroke-width="1"/><text x="${pl - 6}" y="${y + 3}" text-anchor="end">${v}</text>`; }
  const qs = [
    {id:"q1", n:"Rotación semestral de toda la empresa (%)", v:22.0, why:"Promedio de trabajadores = (100 + 100) ÷ 2 = 100. Salidas = 22. Rotación = 22 ÷ 100 × 100 = 22%."},
    {id:"q2", n:"Rotación semestral de Operaciones (%)", v:27.1, why:"Promedio = (60 + 58) ÷ 2 = 59. Salidas = 16. Rotación = 16 ÷ 59 × 100 = 27.1%."},
    {id:"q3", n:"Ausentismo de Operaciones en el semestre (%)", v:6.0, why:`Días programados = 59 × ${t.days} = 8,850. Días perdidos = 531. Ausentismo = 531 ÷ 8,850 × 100 = 6.0%.`}];
  const concl = ["Operaciones concentra la rotación voluntaria y el ausentismo: hay que investigar sus condiciones (turnos, liderazgo, carga) antes de decidir acciones.","Hay que subir los sueldos de toda la empresa.","Una rotación semestral de 22% es baja y no requiere acción.","Conviene despedir a quienes más faltan para bajar el ausentismo."];
  box.innerHTML = `<div class="stack-lg">
   <section class="card stack"><span class="label">Distribuidora ficticia · primer semestre</span><div class="table-wrap"><table><thead><tr><th>Área</th><th class="num">Al 1 ene</th><th class="num">Al 30 jun</th><th class="num">Salidas</th><th class="num">Voluntarias</th><th class="num">Días perdidos por ausencias</th></tr></thead><tbody>${D.map(a => `<tr><td>${a.n}</td><td class="num">${a.ini}</td><td class="num">${a.fin}</td><td class="num">${a.sal.reduce((x, y) => x + y, 0)}</td><td class="num">${a.vol}</td><td class="num">${a.perd}</td></tr>`).join("")}</tbody></table></div><p class="small muted">Días laborables del semestre por trabajador: ${t.days}.</p>
   <div class="legend">${D.map((a, i) => `<span><i style="background:${colors[i]}"></i>${a.n}</span>`).join("")}</div>
   <div style="overflow-x:auto"><svg class="chart" viewBox="0 0 ${W} ${H}" width="100%" style="min-width:420px" role="img" aria-label="Salidas por mes y área">${grid}${bars}</svg></div><p class="small muted">Salidas por mes y área.</p></section>
   <section class="card stack"><h3>Calcula</h3>${qs.map(q => { const v = s.v[q.id]; const ok = s.done ? Math.abs((+v) - q.v) <= .5 : null; return `<div class="field"><label for="${q.id}">${q.n}</label><input type="number" step="0.1" inputmode="decimal" id="${q.id}" data-v="${q.id}" value="${v != null ? esc(v) : ""}" ${s.done ? "readonly" : ""} style="max-width:160px">${s.done ? `<span class="small"><span class="chip ${ok ? "ok" : "bad"}">${ok ? "Correcto" : "Revisar: " + q.v + "%"}</span> ${q.why}</span>` : ""}</div>`; }).join("")}
   <div class="field"><label>¿Qué conclusión es más defendible?</label><div class="choices">${concl.map((c, i) => `<button type="button" class="choice" data-c="${i}" aria-pressed="${s.c === i}" ${s.done ? "disabled" : ""}><span class="k">${"ABCD"[i]}</span><span>${esc(c)}</span></button>`).join("")}</div></div>
   ${s.done ? "" : `<div class="row"><button type="button" class="btn brand" data-eval>Revisar mis cálculos</button></div>`}</section></div>`;
  $$("[data-v]", box).forEach(i => i.addEventListener("input", () => { s.v[i.dataset.v] = i.value; }));
  $$("[data-c]", box).forEach(b => b.addEventListener("click", () => { s.c = +b.dataset.c; $$("[data-c]", box).forEach(x => x.setAttribute("aria-pressed", String(x === b))); }));
  const ev = $("[data-eval]", box);
  if (ev) ev.addEventListener("click", () => {
    if (qs.some(q => s.v[q.id] === undefined || s.v[q.id] === "") || s.c == null) { toast("Completa los tres cálculos y elige una conclusión."); return; }
    s.done = true; KINDS.rotacion(box, t);
    const ok = qs.filter(q => Math.abs((+s.v[q.id]) - q.v) <= .5).length;
    const score = Math.round(ok / 3 * 70 + (s.c === 0 ? 30 : 0));
    const fb = `<div class="stack small"><p>Cálculos correctos: <b>${ok} de 3</b>. Conclusión: ${s.c === 0 ? "<b>defendible</b>." : "<b>no se sostiene con los datos</b>."}</p><div class="pro"><span class="label">Cómo lo razona una profesional</span><p>El número total esconde el problema. Operaciones tiene 16 de las 22 salidas, 13 de ellas voluntarias, y triplica el ausentismo de Administración. Antes de proponer soluciones, se investiga qué pasa ahí: entrevistas de salida, horarios, supervisores. Un analista que solo reporta el 22% no ayudó a decidir nada.</p></div></div>`;
    finishTool(box, t, score, qOf(score), fb, () => { mem[t.id] = null; KINDS.rotacion(box, t); });
  });
};

/* ---------- clima ---------- */
KINDS.clima = function(box, t){
  const s = M(t.id);
  if (!s.a) { s.a = {}; s.done = false; }
  const cell = v => { const p = clamp((v - 2) / 2.2, 0, 1); return `background:color-mix(in srgb, var(--bad) ${Math.round((1 - p) * 55)}%, color-mix(in srgb, var(--ok) ${Math.round(p * 45)}%, var(--sheet)))`; };
  box.innerHTML = `<div class="stack-lg"><section class="card stack"><span class="label">Empresa de transporte interprovincial (ficticia) · escala 1 a 5</span><div class="table-wrap"><table><thead><tr><th>Dimensión</th>${t.areasC.map(a => `<th class="num">${a.n} (${a.nn})</th>`).join("")}</tr></thead><tbody>${t.dimsC.map((d, di) => `<tr><td>${d}</td>${t.vals.map(row => `<td class="num" style="${cell(row[di])}">${row[di].toFixed(1)}</td>`).join("")}</tr>`).join("")}<tr><td><b>Participación</b></td>${t.areasC.map(a => `<td class="num"><b>${a.part}%</b></td>`).join("")}</tr></tbody></table></div></section>
  ${t.qs.map((q, qi) => `<section class="card stack"><h3>${qi + 1} · ${esc(q.q)}</h3><div class="choices">${q.o.map((o, oi) => `<button type="button" class="choice" data-q="${qi}" data-o="${oi}" aria-pressed="${s.a[qi] === oi}" ${s.done ? "disabled" : ""}><span class="k">${"ABCD"[oi]}</span><span>${esc(o)}</span></button>`).join("")}</div>${s.done ? `<p class="small"><span class="chip ${s.a[qi] === q.a ? "ok" : "bad"}">${s.a[qi] === q.a ? "Correcto" : "Revisar"}</span> ${esc(q.why)}</p>` : ""}</section>`).join("")}
  ${s.done ? "" : `<div class="row"><button type="button" class="btn brand" data-eval>Evaluar</button></div>`}</div>`;
  $$("[data-q]", box).forEach(b => b.addEventListener("click", () => { s.a[b.dataset.q] = +b.dataset.o; $$(`[data-q="${b.dataset.q}"]`, box).forEach(x => x.setAttribute("aria-pressed", String(x === b))); }));
  const ev = $("[data-eval]", box);
  if (ev) ev.addEventListener("click", () => {
    if (t.qs.some((_, i) => s.a[i] == null)) { toast("Responde las tres preguntas."); return; }
    s.done = true; KINDS.clima(box, t);
    const ok = t.qs.filter((q, i) => s.a[i] === q.a).length;
    const score = Math.round(ok / t.qs.length * 100);
    finishTool(box, t, score, qOf(score), `<div class="pro small"><span class="label">Cómo lo razona una profesional</span><p>Primero se pregunta si el dato es confiable (participación, tamaño del grupo); luego se busca dónde el problema es más fuerte y accionable; y al final se propone algo concreto que se pueda medir otra vez.</p></div>`, () => { mem[t.id] = null; KINDS.clima(box, t); });
  });
};

/* ---------- legajo ---------- */
KINDS.legajo = function(box, t){
  const s = M(t.id);
  if (!s.m) { s.m = {}; s.done = false; }
  box.innerHTML = `<div class="stack-lg"><div class="doc" data-folio="Legajo">${t.worker}</div><p class="small">Marca los documentos que tienen un problema que debe corregirse antes de la inspección.</p><div class="stack">${t.docs.map(d => { const cls = s.done ? (!!s.m[d.id] === d.bad ? "ok" : d.bad ? "miss" : "bad") : ""; return `<label class="check-item ${cls}"><input type="checkbox" data-doc="${d.id}" ${s.m[d.id] ? "checked" : ""} ${s.done ? "disabled" : ""}><span><b>${esc(d.n)}</b> · <span class="muted">${esc(d.det)}</span>${s.done ? `<br><span class="small">${d.bad ? "<b>Tiene problema.</b> " : "<b>Sin problema.</b> "}${esc(d.why)}</span>` : ""}</span></label>`; }).join("")}</div>${s.done ? "" : `<div class="row"><button type="button" class="btn brand" data-eval>Terminar revisión</button></div>`}</div>`;
  $$("[data-doc]", box).forEach(c => c.addEventListener("change", () => { s.m[c.dataset.doc] = c.checked; }));
  const ev = $("[data-eval]", box);
  if (ev) ev.addEventListener("click", () => {
    s.done = true; KINDS.legajo(box, t);
    const ok = t.docs.filter(d => !!s.m[d.id] === d.bad).length;
    const score = Math.round(ok / t.docs.length * 100);
    finishTool(box, t, score, qOf(score), `<div class="pro small"><span class="label">Cómo lo razona una profesional</span><p>Un legajo se revisa con tres preguntas: ¿está todo lo que la ley exige?, ¿cada documento es válido (vigente, firmado, con fecha coherente)?, ¿hay algo que no debería estar (datos sensibles sin finalidad)? Lo tercero es lo que más se olvida.</p></div>`, () => { mem[t.id] = null; KINDS.legajo(box, t); });
  });
};

/* ---------- boleta ---------- */
KINDS.boleta = function(box, t){
  const s = M(t.id);
  if (!s.v) { s.v = {}; s.done = false; }
  box.innerHTML = `<div class="stack-lg"><div class="doc" data-folio="Datos"><h4>Datos del trabajador (ficticio) · octubre 2026</h4><dl class="kv"><dt>Remuneración básica</dt><dd>${money(t.data.basico)}</dd><dt>Hijos menores de edad</dt><dd>Sí</dd><dt>Horas extras</dt><dd>6 horas (2 horas en 3 días distintos)</dd><dt>Sistema pensionario</dt><dd>ONP (13%)</dd><dt>RMV vigente</dt><dd>S/ 1,230 (D.S. 015-2026-TR)</dd></dl><p class="small muted">Valor hora = remuneración ordinaria (básico + asignación familiar) ÷ 30 ÷ 8. Redondea a dos decimales. Este trabajador no tiene retención de quinta categoría.</p><div class="callout warn small">${icon("info")}<span><b>Corrección respecto de la versión original:</b> antes el ejercicio calculaba las horas extras solo con el básico. La asignación familiar forma parte de la remuneración ordinaria y, por tanto, de la base del valor hora.</span></div></div>
  <section class="card stack">${boletaExpected(t).map(f => { const v = s.v[f.id]; const ok = s.done ? Math.abs((+v) - f.v) <= .06 : null; return `<div class="field"><label for="b-${f.id}">${esc(f.n)} (S/)</label><input type="number" step="0.01" inputmode="decimal" id="b-${f.id}" data-b="${f.id}" value="${v != null ? esc(v) : ""}" ${s.done ? "readonly" : ""} style="max-width:180px">${s.done ? `<span class="small"><span class="chip ${ok ? "ok" : "bad"}">${ok ? "Correcto" : "Revisar: " + money(f.v)}</span> ${esc(f.why)}</span>` : ""}</div>`; }).join("")}${s.done ? "" : `<div class="row"><button type="button" class="btn brand" data-eval>Revisar mi boleta</button></div>`}</section></div>`;
  $$("[data-b]", box).forEach(i => i.addEventListener("input", () => { s.v[i.dataset.b] = i.value; }));
  const ev = $("[data-eval]", box);
  if (ev) ev.addEventListener("click", () => {
    if (boletaExpected(t).some(f => s.v[f.id] === undefined || s.v[f.id] === "")) { toast("Completa todos los montos."); return; }
    s.done = true; KINDS.boleta(box, t);
    const ok = boletaExpected(t).filter(f => Math.abs((+s.v[f.id]) - f.v) <= .06).length;
    const score = Math.round(ok / boletaExpected(t).length * 100);
    finishTool(box, t, score, qOf(score), `<div class="pro small"><span class="label">Cómo lo razona una profesional</span><p>El orden importa: primero todos los ingresos remunerativos, luego los descuentos del trabajador sobre ese total, y aparte los aportes que paga el empleador. El error más común es descontar EsSalud al trabajador o olvidar actualizar la asignación familiar cuando cambia la RMV.</p></div>`, () => { mem[t.id] = null; KINDS.boleta(box, t); });
  });
};
