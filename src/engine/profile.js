/* Brújula vocacional: combina lo que la persona sintió al experimentar (más peso), cómo decide
   y lo que declara. Los aciertos y errores NO miden vocación: solo alimentan "habilidades por
   desarrollar". Lógica portada de la versión original y ampliada con el Viaje y los Retos. */
import { S } from "../core/store.js";
import { C, sim, tool, task, trait, concept } from "../content/index.js";
import { esc, clamp } from "../core/util.js";

export const SKILL = {
  entrevistar:{n:"Entrevista por competencias", c:"entrevista"}, analizar:{n:"Análisis de indicadores", c:"rotacion"}, redactar:{n:"Redacción profesional", c:null},
  normativa:{n:"Aplicación de normativa laboral", c:"regimenes"}, negociar:{n:"Negociación con jefes y candidatos", c:"hrbp"}, mediar:{n:"Manejo de conflictos", c:"despido"},
  documentos:{n:"Gestión documental", c:"planilla"}, calcular:{n:"Cálculo de remuneraciones", c:"beneficios"}, disenar:{n:"Diseño de programas", c:"dnc"},
  presentar:{n:"Presentar con datos a la dirección", c:"analytics"}, atender:{n:"Atención de consultas", c:"beneficios"}, investigar:{n:"Investigación de hechos", c:"hostigamiento"},
  planificar:{n:"Priorización por plazos y riesgos", c:null}, coordinar:{n:"Coordinación con otras áreas", c:null}, ensenar:{n:"Facilitación", c:"dnc"}
};

export const allRuns = () => Object.entries(S.state.runs).flatMap(([id, rs]) => rs.map(r => Object.assign({ sim: id }, r)));
export const decisions = () => allRuns().reduce((s, r) => s + r.log.length, 0);
export function traits(){
  const t = {}; C.traits.forEach(x => t[x.id] = 0);
  allRuns().forEach(r => r.log.forEach(l => Object.entries(l.sig || {}).forEach(([k, v]) => { t[k] = (t[k] || 0) + v; })));
  return t;
}
function cos(a, b){
  const ids = C.traits.map(t => t.id);
  const xa = ids.map(id => Math.max(0, a[id] || 0)), xb = ids.map(id => b[id] || 0);
  const ma = xa.reduce((s, v) => s + v, 0) / ids.length, mb = xb.reduce((s, v) => s + v, 0) / ids.length;
  let d = 0, na = 0, nb = 0;
  ids.forEach((_, i) => { const x = xa[i] - ma, y = xb[i] - mb; d += x * y; na += x * x; nb += y * y; });
  return na && nb ? (d / Math.sqrt(na * nb) + 1) / 2 : .5;
}
function reflFor(areaId){
  return S.state.refl.map(r => { const src = r.kind === "sim" ? sim(r.ref) : tool(r.ref); return src && src.areas.includes(areaId) ? { r, src, w: src.areas[0] === areaId ? 1 : .6 } : null; }).filter(Boolean);
}

export function fit(area){
  const ev = [], parts = [];
  const refs = reflFor(area.id);
  let nExp = 0;
  const rep = new Set(S.state.refl.flatMap(r => r.repeat || [])), avo = new Set(S.state.refl.flatMap(r => r.avoid || []));
  const repHit = area.tags.filter(t => rep.has(t)), avoHit = area.tags.filter(t => avo.has(t));
  if (refs.length) {
    let sw = 0, sv = 0;
    refs.forEach(({ r, src, w }) => { const v = (r.enjoy - 1) / 4 * .5 + (r.see - 1) / 4 * .5; sv += v * w; sw += w; nExp++; ev.push(`${r.kind === "sim" ? "Simulación" : "Taller"} «${esc(src.title || src.n)}»: disfrute ${r.enjoy}/5, te ves haciéndolo ${r.see}/5.`); });
    let exp = clamp(sv / sw + repHit.length * .05 - avoHit.length * .07, 0, 1);
    if (repHit.length) ev.push("Marcaste que repetirías: " + repHit.map(t => task(t).n.toLowerCase()).join(", ") + ".");
    if (avoHit.length) ev.push("Marcaste que preferirías evitar: " + avoHit.map(t => task(t).n.toLowerCase()).join(", ") + ".");
    parts.push([exp, .55]);
  } else if (repHit.length || avoHit.length) {
    parts.push([clamp(.5 + repHit.length * .12 - avoHit.length * .15, 0, 1), .2]);
    if (repHit.length) ev.push("En otras experiencias marcaste que repetirías tareas que esta área usa: " + repHit.map(t => task(t).n.toLowerCase()).join(", ") + ".");
    if (avoHit.length) ev.push("En otras experiencias marcaste que evitarías tareas que esta área usa: " + avoHit.map(t => task(t).n.toLowerCase()).join(", ") + ".");
  }
  let obs = null;
  if (decisions() >= 6) {
    const tr = traits(); obs = cos(tr, area.tr);
    parts.push([obs, .25]);
    const top = C.traits.filter(x => (area.tr[x.id] || 0) >= 2).sort((a, b) => (tr[b.id] || 0) - (tr[a.id] || 0)).slice(0, 2).filter(x => tr[x.id] > 0);
    if (top.length) ev.push(`Tus decisiones muestran afinidad con ${top.map(x => x.n.toLowerCase()).join(" y ")}, que esta área exige.`);
  }
  const d = S.state.declared[area.id];
  if (d) { parts.push([{ atrae: 1, neutral: .5, no: 0 }[d], .2]); ev.push({ atrae: "Declaraste que te atrae.", neutral: "Declaraste que no lo tienes claro.", no: "Declaraste que no te atrae." }[d]); }
  const fam = S.state.journey.family;
  if (fam && fam === area.c && !d) ev.push("En tu viaje elegiste su familia como la que más curiosidad te daba.");
  const read = C.concepts.filter(c => c.areas.includes(area.id) && S.state.concepts[c.id]).length;
  if (read) ev.push(`Estudiaste ${read} concepto${read > 1 ? "s" : ""} de esta área en la Academia.`);
  const sw = parts.reduce((s, p) => s + p[1], 0);
  let score = sw ? parts.reduce((s, p) => s + p[0] * p[1], 0) / sw : null;
  const status = nExp ? "exp" : d ? "decl" : obs != null ? "inf" : "none";
  if (score != null && !nExp) score = .5 + (score - .5) * .6;
  const conf = Math.min(4, nExp * 2 + (obs != null ? 1 : 0) + (d ? 1 : 0));
  return { area, score, status, conf, ev, nExp, obs, decl: d };
}
export const all = () => C.areas.map(fit);
export const STATUS = { exp: ["st", "Experimentada"], decl: ["", "Solo declarada"], inf: ["", "Inferida de tus decisiones"], none: ["", "Sin explorar"] };

export function skills(){
  const c = {};
  allRuns().forEach(r => r.log.forEach(l => { if (l.q !== "buena") (l.tags || []).forEach(t => { c[t] = (c[t] || 0) + (l.q === "riesgosa" ? 2 : 1); }); }));
  Object.entries(S.state.tools).forEach(([id, r]) => { const t = tool(id); if (t && r.best < 70) (t.tags || []).forEach(x => { c[x] = (c[x] || 0) + 1; }); });
  return Object.entries(c).filter(([t]) => SKILL[t]).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([t, n]) => ({ t, n, s: SKILL[t] }));
}

/* Siguientes pasos explicables. */
export function route(){
  const out = [];
  const st = S.state;
  Object.keys(st.active).forEach(id => { const s = sim(id); if (s) out.push({ h: "#sim." + id, t: "Continúa: " + s.title, why: "Tienes esta experiencia a medio camino.", ic: "sims" }); });
  if (!st.journey.started) out.push({ h: "#viaje", t: "Haz el viaje por el mundo de RR.HH.", why: "Una ruta guiada de cinco estaciones para empezar sin perderte.", ic: "viaje" });
  else if (st.journey.done.length < C.journey.stations.length) out.push({ h: "#viaje", t: "Retoma tu viaje: estación " + (st.journey.done.length + 1) + " de " + C.journey.stations.length, why: "Lo dejaste a medio camino; tu avance está guardado.", ic: "viaje" });
  const done = new Set(Object.keys(st.runs));
  const pendRefl = [...done].find(id => !st.refl.some(r => r.kind === "sim" && r.ref === id));
  if (pendRefl && sim(pendRefl)) out.push({ h: "#sim." + pendRefl, t: "Registra cómo te sentiste en «" + sim(pendRefl).title + "»", why: "Sin tu registro, la brújula no puede usar esa experiencia.", pre: () => { st.debrief = pendRefl; }, ic: "brujula" });
  if (!done.size && !st.active.practicante) out.push({ h: "#sim.practicante", t: "Vive tu primera mañana como practicante", why: "Nueve minutos para sentir el oficio por dentro.", ic: "sims" });
  const hasPub = [...done].some(id => sim(id) && sim(id).sector === "publico");
  if (done.size && !hasPub) out.push({ h: "#sim.municipal", t: "Prueba el sector público: un día en una municipalidad", why: "Aún no has experimentado cómo se trabaja RR.HH. en el Estado.", ic: "sectores" });
  const hasBig = [...done].some(id => sim(id) && sim(id).orgType === "gra");
  if (done.size && !hasBig) out.push({ h: "#sim.feriados", t: "Siente una gran empresa: planillas en una corporación de consumo masivo", why: "Tickets, SLA, SAP y feriados: otra escala de trabajo.", ic: "sims" });
  const fits = all();
  fits.filter(f => f.status !== "exp" && f.score != null && f.score >= .6).sort((a, b) => b.score - a.score).slice(0, 2).forEach(f => {
    const s = C.sims.find(x => x.areas[0] === f.area.id && !done.has(x.id)) || C.sims.find(x => x.areas.includes(f.area.id) && !done.has(x.id));
    const tl = C.tools.find(x => x.areas.includes(f.area.id) && !st.tools[x.id]);
    if (s) out.push({ h: "#sim." + s.id, t: "Experimenta " + f.area.n.toLowerCase() + ": " + s.title, why: "Tus señales apuntan a esta área, pero aún no la has vivido.", ic: "sims" });
    else if (tl) out.push({ h: "#tool." + tl.id, t: "Practica " + f.area.n.toLowerCase() + ": " + tl.n, why: "Tus señales apuntan a esta área, pero aún no la has practicado.", ic: "taller" });
  });
  const sk = skills()[0];
  if (sk && sk.s.c && !st.concepts[sk.s.c] && concept(sk.s.c)) out.push({ h: "#concepto." + sk.s.c, t: "Refuerza: " + concept(sk.s.c).n, why: "Es la habilidad donde más decisiones discutibles tomaste: " + sk.s.n.toLowerCase() + ".", ic: "academia" });
  C.sims.filter(s => !done.has(s.id) && !st.active[s.id]).slice(0, 2).forEach(s => out.push({ h: "#sim." + s.id, t: s.title, why: "Una experiencia que aún no vives.", ic: "sims" }));
  const tl = C.tools.find(x => !st.tools[x.id]); if (tl) out.push({ h: "#tool." + tl.id, t: "Taller: " + tl.n, why: "Practica una tarea concreta del oficio.", ic: "taller" });
  if (!Object.keys(st.challenges).length) out.push({ h: "#retos", t: "Pon a prueba lo que sabes en Retos", why: "Cuestionarios cortos con explicación en cada respuesta.", ic: "retos" });
  if (!Object.keys(st.declared).length) out.push({ h: "#brujula", t: "Marca qué áreas te atraen hoy", why: "Así podremos comparar lo que declaras con lo que experimentas.", ic: "brujula" });
  const seen = new Set(); return out.filter(o => { if (seen.has(o.h)) return false; seen.add(o.h); return true; });
}

export function radar(tr, compare){
  const ids = C.traits.map(t => t.id), n = ids.length, cx = 170, cy = 150, R = 100;
  const max = Math.max(1, ...ids.map(id => Math.max(0, tr[id])));
  const pt = (i, r) => [cx + r * Math.sin(2 * Math.PI * i / n), cy - r * Math.cos(2 * Math.PI * i / n)];
  let g = "";
  [.25, .5, .75, 1].forEach(f => { g += `<polygon points="${ids.map((_, i) => pt(i, R * f).join(",")).join(" ")}" fill="none" stroke="var(--line-2)"/>`; });
  ids.forEach((id, i) => { const [x, y] = pt(i, R); g += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--line-2)"/>`; const [lx, ly] = pt(i, R + 22); g += `<text x="${lx}" y="${ly + 3}" text-anchor="${lx < cx - 8 ? "end" : lx > cx + 8 ? "start" : "middle"}">${trait(id).n.replace("Tolerancia a presión", "Presión").replace("Orden y procedimiento", "Procedimiento").replace("Visión estratégica", "Estrategia").replace("Criterio normativo", "Normativa")}</text>`; });
  const poly = ids.map((id, i) => pt(i, R * Math.max(0, tr[id]) / max).join(",")).join(" ");
  const cmp = compare ? `<polygon points="${ids.map((id, i) => pt(i, R * (compare[id] || 0) / 3).join(",")).join(" ")}" fill="none" stroke="var(--spark)" stroke-width="2" stroke-dasharray="5 4"/>` : "";
  return `<svg class="radar" viewBox="0 0 340 300" width="100%" style="max-width:420px" role="img" aria-label="Radar de tu forma de decidir">${g}${cmp}<polygon points="${poly}" fill="color-mix(in srgb, var(--brand) 25%, transparent)" stroke="var(--brand)" stroke-width="2.5"/>${ids.map((id, i) => { const [x, y] = pt(i, R * Math.max(0, tr[id]) / max); return `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--brand)"/>`; }).join("")}</svg>`;
}
