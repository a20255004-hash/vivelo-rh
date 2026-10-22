/* Diagramas, mapas y organizadores visuales de la Academia (SVG originales, legibles en ambos temas). */
import { esc } from "../core/util.js";
import { holidays } from "../content/holidays.js";

const COLS = ["var(--c-atraer)", "var(--c-desarrollar)", "var(--c-admin)", "var(--c-cuidar)", "var(--c-estrategia)", "var(--spark)", "var(--mint)"];
const wrap = (t, n = 16) => { const w = String(t).split(" "); const lines = []; let cur = ""; w.forEach(x => { if ((cur + " " + x).trim().length > n) { lines.push(cur.trim()); cur = x; } else cur += " " + x; }); if (cur.trim()) lines.push(cur.trim()); return lines; };
const tspans = (x, y, t, n, lh = 15) => wrap(t, n).map((l, i) => `<tspan x="${x}" y="${y + i * lh}">${esc(l)}</tspan>`).join("");
const svg = (w, h, inner, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`;

export function flow(steps, label){
  const n = steps.length, W = 920, bw = (W - 20) / n;
  return svg(W, 170, steps.map(([k, d], i) => { const x = 10 + i * bw, c = COLS[i % COLS.length]; return `<g><path d="M${x} 20 h${bw - 18} l16 40 l-16 40 h-${bw - 18} ${i ? "l16 -40z" : "z"}" fill="${c}" opacity=".16" stroke="${c}" stroke-width="2"/><text x="${x + bw / 2 + 2}" y="54" text-anchor="middle" font-weight="800" font-size="14" fill="${c}">${esc(k)}</text><text font-size="12" fill="var(--ink-2)" text-anchor="middle">${tspans(x + bw / 2, 124, d, Math.max(12, Math.floor(bw / 7.5)))}</text></g>`; }).join(""), label);
}
export function cycle(steps, label, center = ""){
  const n = steps.length, R = 120, cx = 460, cy = 170;
  return svg(920, 340, `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--line-2)" stroke-width="3" stroke-dasharray="6 8"/>${center ? `<text x="${cx}" y="${cy + 6}" text-anchor="middle" font-weight="800" font-size="18" fill="var(--brand-ink)">${esc(center)}</text>` : ""}${steps.map(([k, d], i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R, c = COLS[i % COLS.length]; const tx = cx + Math.cos(a) * (R + 120), ty = cy + Math.sin(a) * (R + 50); return `<circle cx="${x}" cy="${y}" r="26" fill="${c}"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-weight="800" fill="#fff" font-size="14">${i + 1}</text><text x="${tx}" y="${ty - 6}" text-anchor="middle" font-weight="800" font-size="13" fill="${c}">${esc(k)}</text><text text-anchor="middle" font-size="11.5" fill="var(--ink-2)">${tspans(tx, ty + 10, d, 24, 13)}</text>`; }).join("")}`, label);
}
export function pyramid(levels, label){
  const n = levels.length, H = 70;
  return svg(920, n * H + 20, levels.map(([k, d], i) => { const w = 260 + (i) * 120, x = 300 - w / 2 + 160, y = 10 + i * H, c = COLS[i % COLS.length]; return `<path d="M${x + 22} ${y} h${w - 44} l22 ${H - 8} h-${w} z" fill="${c}" opacity=".85"/><text x="${x + w / 2}" y="${y + 38}" text-anchor="middle" font-weight="800" fill="#fff" font-size="14">${esc(k)}</text><text x="${x + w + 40}" y="${y + 30}" font-size="12.5" fill="var(--ink-2)">${tspans(x + w + 40, y + 30, d, 40, 14)}</text>`; }).reverse().join(""), label);
}
export function boxes(items, label, cols = 4){
  const W = 920, bw = (W - (cols + 1) * 12) / cols, rows = Math.ceil(items.length / cols), bh = 150;
  return svg(W, rows * (bh + 12) + 12, items.map(([k, d, big], i) => { const x = 12 + (i % cols) * (bw + 12), y = 12 + Math.floor(i / cols) * (bh + 12), c = COLS[i % COLS.length]; return `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="18" fill="${c}" opacity=".12" stroke="${c}" stroke-width="2"/>${big ? `<text x="${x + 16}" y="${y + 42}" font-weight="900" font-size="30" fill="${c}">${esc(big)}</text>` : ""}<text x="${x + 16}" y="${y + (big ? 68 : 34)}" font-weight="800" font-size="14" fill="var(--ink)">${esc(k)}</text><text font-size="12" fill="var(--ink-2)">${tspans(x + 16, y + (big ? 90 : 56), d, Math.floor(bw / 7.2), 14)}</text>`; }).join(""), label);
}
function calendar(){
  const months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Set","Oct","Nov","Dic"];
  const pays = { 4: ["CTS", "var(--c-desarrollar)"], 6: ["Grati + 9%", "var(--spark)"], 10: ["CTS", "var(--c-desarrollar)"], 11: ["Grati + 9%", "var(--spark)"] };
  return svg(920, 190, months.map((m, i) => { const x = 14 + i * 75, p = pays[i]; return `<rect x="${x}" y="40" width="66" height="70" rx="12" fill="${p ? p[1] : "var(--paper-2)"}" opacity="${p ? .9 : 1}"/><text x="${x + 33}" y="80" text-anchor="middle" font-weight="800" font-size="15" fill="${p ? "#fff" : "var(--ink-2)"}">${m}</text>${p ? `<text x="${x + 33}" y="138" text-anchor="middle" font-size="12" font-weight="700" fill="${p[1]}">${p[0]}</text>` : ""}`; }).join("") + `<text x="14" y="24" font-size="13" fill="var(--ink-2)">Asignación familiar: todos los meses (10% de la RMV = S/ 123) · Vacaciones: 30 días por año completo</text><text x="14" y="175" font-size="12" fill="var(--ink-3)">CTS: depósitos en mayo y noviembre (primera quincena). Gratificaciones: julio y diciembre (primera quincena).</text>`, "Calendario de beneficios sociales del régimen privado");
}
function feriadosCal(){
  const list = holidays.list; const months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Set","Oct","Nov","Dic"];
  return svg(920, 200, months.map((m, i) => { const x = 14 + i * 75; const hs = list.filter(h => +h.d.slice(5, 7) === i + 1); return `<rect x="${x}" y="20" width="66" height="150" rx="12" fill="var(--paper-2)"/><text x="${x + 33}" y="44" text-anchor="middle" font-weight="800" font-size="14" fill="var(--ink-2)">${m}</text>${hs.map((h, k) => `<circle cx="${x + 33}" cy="${74 + k * 34}" r="15" fill="var(--spark)"/><text x="${x + 33}" y="${79 + k * 34}" text-anchor="middle" font-weight="800" font-size="13" fill="#fff">${+h.d.slice(8)}</text>`).join("")}`; }).join(""), "Calendario de los 16 feriados nacionales del Perú en 2026");
}
function banda(){
  return svg(920, 170, `<rect x="120" y="70" width="680" height="30" rx="15" fill="var(--paper-2)"/><rect x="220" y="70" width="480" height="30" rx="15" fill="var(--c-cuidar)" opacity=".75"/><line x1="460" y1="56" x2="460" y2="114" stroke="var(--ink)" stroke-width="3"/><text x="220" y="135" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink-2)">Mínimo S/ 3,200</text><text x="460" y="135" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Punto medio S/ 3,550 (compa-ratio 1.00)</text><text x="700" y="135" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink-2)">Máximo S/ 3,900</text><text x="460" y="40" text-anchor="middle" font-size="13" fill="var(--ink-2)">Compa-ratio = sueldo ÷ punto medio de la banda</text>`, "Banda salarial con mínimo, punto medio y máximo");
}
function boleta(){
  const rows = [["Remuneración básica", "1,500.00", "in"], ["Asignación familiar (10% RMV)", "123.00", "in"], ["Horas extras (6 h al 25%)", "50.72", "in"], ["Total ingresos", "1,673.72", "tot"], ["ONP (13%)", "−217.58", "out"], ["Neto a pagar", "1,456.14", "net"], ["EsSalud 9% (lo paga el empleador)", "150.63", "emp"]];
  return svg(920, 300, `<rect x="160" y="10" width="600" height="280" rx="10" fill="var(--card)" stroke="var(--line-2)"/><text x="190" y="40" font-family="var(--f-mono)" font-size="13" fill="var(--ink-3)">BOLETA DE PAGO · OCTUBRE 2026 · EJEMPLO</text>${rows.map(([k, v, t], i) => { const y = 74 + i * 32; const c = { in: "var(--ink)", tot: "var(--brand-ink)", out: "var(--bad)", net: "var(--ok)", emp: "var(--ink-3)" }[t]; return `${t === "tot" || t === "net" ? `<line x1="190" y1="${y - 20}" x2="730" y2="${y - 20}" stroke="var(--line-2)"/>` : ""}<text x="190" y="${y}" font-size="14" font-weight="${t === "in" ? 500 : 800}" fill="${c}">${esc(k)}</text><text x="730" y="${y}" text-anchor="end" font-family="var(--f-mono)" font-size="14" font-weight="700" fill="${c}">${v}</text>`; }).join("")}`, "Anatomía de una boleta de pago");
}
function sst(){
  return svg(920, 160, `<line x1="80" y1="80" x2="840" y2="80" stroke="var(--line-2)" stroke-width="6" stroke-linecap="round"/><circle cx="380" cy="80" r="14" fill="var(--spark)"/><text x="380" y="50" text-anchor="middle" font-weight="800" font-size="14" fill="var(--spark-ink)">20 trabajadores</text><text x="220" y="120" text-anchor="middle" font-size="13" fill="var(--ink-2)">Menos de 20: Supervisor de SST</text><text x="620" y="120" text-anchor="middle" font-size="13" fill="var(--ink-2)">20 o más: Comité de SST paritario + Reglamento Interno de SST</text><text x="460" y="150" text-anchor="middle" font-size="12" fill="var(--ink-3)">Siempre: al menos 4 capacitaciones al año dentro de la jornada, registros y exámenes médicos ocupacionales</text>`, "Umbral de 20 trabajadores para el Comité de SST");
}

export const VIZ = {
  onboarding: () => flow([["Pre-ingreso","Documentos, equipo y accesos listos"],["Día 1","Alta en T-Registro, SST, bienvenida"],["Semana 1","Inducción al puesto y mentor"],["Mes 1","Primer seguimiento formal"],["Día 60–90","Fin del periodo de prueba"]], "Línea de tiempo del onboarding"),
  perfil: () => boxes([["Misión","Para qué existe el puesto"],["Funciones","5 a 7 principales"],["Requisitos","Verificables y relacionados con el puesto"],["Competencias","Con conductas observables"]], "Partes de un perfil de puesto"),
  star: () => boxes([["Situación","¿Qué pasaba y dónde?","S"],["Tarea","¿Qué te tocaba resolver?","T"],["Acción","¿Qué hiciste tú, exactamente?","A"],["Resultado","¿Qué pasó y qué aprendiste?","R"]], "Método STAR"),
  boleta, beneficios: calendar, feriados: feriadosCal, banda, sst,
  rotacion: () => boxes([["Salidas del periodo","Renuncias, despidos, no renovaciones","18"],["Promedio de trabajadores","(Inicio + fin) ÷ 2","45"],["Rotación","Salidas ÷ promedio × 100","40%"],["Desagrega","Temprana, voluntaria, por área","↓"]], "Cómo se calcula la rotación"),
  ausentismo: () => boxes([["Días perdidos","Por ausencias en el periodo","33"],["Días programados","Trabajadores × días laborables","660"],["Ausentismo","Perdidos ÷ programados × 100","5%"],["Análisis agregado","Los datos de salud son sensibles","🔒"]], "Cómo se calcula el ausentismo"),
  clima: () => boxes([["Clima","El estado de ánimo de hoy: trato, claridad, reconocimiento. Cambia en meses."],["Cultura","La personalidad de la organización: lo que de verdad se premia y se tolera. Cambia en años."],["Se mide con","Encuestas por dimensión, participación y anonimato"],["Se mueve con","Planes de acción por área y nueva medición"]], "Clima frente a cultura", 2),
  ciclo: () => cycle([["Planificar","Metas claras desde el inicio"],["Seguir","Al menos una reunión formal"],["Evaluar","Con evidencia y calibración"],["Mejorar","Plan de mejora o desarrollo"]], "Ciclo de gestión del rendimiento", "Rendimiento"),
  kirkpatrick: () => pyramid([["4 · Resultados","¿Cambió el indicador del negocio?"],["3 · Conducta","¿Lo aplican en el trabajo?"],["2 · Aprendizaje","¿Aprendieron?"],["1 · Reacción","¿Les gustó?"]], "Modelo de Kirkpatrick"),
  despido: () => flow([["Hecho","Acta, pruebas y testigos"],["Imputación","Carta con hechos y causal"],["Descargo","Plazo ≥ 6 días naturales"],["Decisión","Despido motivado o archivo"]], "Procedimiento de despido por falta grave"),
  hostigamiento: () => flow([["Día 0","Recibir, escuchar, informar derechos"],["≤ 3 días hábiles","Medidas de protección"],["Derivar","Comité (privado) o Secretaría Técnica (público)"],["Investigar","Descargos, pruebas, informe"],["Decidir","Sanción o archivo motivado"]], "Procedimiento ante una queja de hostigamiento sexual"),
  regimenes: () => boxes([["Carrera administrativa","Nombrados; régimen en extinción progresiva","276"],["Actividad privada","Obreros municipales y algunas entidades","728"],["CAS","El régimen con más servidores","1057"],["Servicio Civil","Régimen único al que se transita","30057"]], "Regímenes laborales del Estado"),
  concurso: () => flow([["Perfil","Requerimiento del área"],["Presupuesto","Certificación y AIRHSP"],["Bases","Requisitos y puntajes"],["Publicidad","Talento Perú y portal"],["Evaluación","Curricular, entrevista, bonificaciones"],["Contrato","Resultados y firma"]], "Etapas de un concurso CAS"),
  pad: () => flow([["Reporte","Llega a la Secretaría Técnica"],["Precalificación","Informe de la Secretaría Técnica"],["Instrucción","Órgano instructor y descargos"],["Sanción","Órgano sancionador; apelación"]], "Procedimiento administrativo disciplinario"),
  pilares: () => boxes([["HR Business Partners","Socios de cada negocio: diagnostican y priorizan"],["Centros de expertise","Talento, compensaciones, relaciones laborales"],["Servicios compartidos","Planilla y administración a escala"]], "Modelo de tres pilares", 3),
  analytics: () => cycle([["Pregunta","¿Qué decisión queremos mejorar?"],["Datos","Planilla, asistencia, encuestas"],["Limpieza","El 70% del tiempo"],["Análisis","Descriptivo o predictivo"],["Decisión","Una acción por indicador"]], "Ciclo de people analytics", "Datos con ética"),
  modales: () => boxes([["Regla general","El contrato indeterminado"],["Excepción","Contrato sujeto a modalidad, por escrito"],["Requisito clave","Causa objetiva concreta y temporal"],["Si falla","Se desnaturaliza: pasa a indeterminado"]], "Contratos sujetos a modalidad"),
  igualdad: () => boxes([["Sí se evalúa","Experiencia, conocimientos, competencias, requisitos legales del puesto"],["No se evalúa","Sexo, edad, origen, idioma, religión, embarazo, apariencia"],["Ajustes razonables","Para personas con discapacidad"],["Si pasa","Proteger, investigar, reparar, prevenir"]], "Igualdad y no discriminación")
};
export const viz = key => (VIZ[key] ? VIZ[key]() : "");

/* ---------- Organizadores interactivos compartidos (Mapa, Academia, Sectores) ---------- */
import { icon } from "../brand/icons.js";
import { reducedMotion } from "../core/util.js";

/* imagen 3D representativa de cada familia de especialidades */
export const FAM_ART = { atraer: "reunion", admin: "boleta", desarrollar: "academia", cuidar: "balanza", estrategia: "corporativo" };

/* íconos por tarea, herramienta y momento del día (heurística visual, no dato normativo) */
export const TASK_IC = { entrevistar: "chat", analizar: "brujula", redactar: "correo", normativa: "scale", negociar: "reunion", mediar: "presencial", documentos: "doc", calcular: "calc", disenar: "sparkle", presentar: "sims", atender: "llamada", investigar: "eye", planificar: "calendar", coordinar: "link", ensenar: "academia" };
export function toolIcon(t){
  const s = String(t).toLowerCase();
  if (/excel|hoja|calcul|planilla|plame|tabla/.test(s)) return "calc";
  if (/encuesta|test|prueba|psicom|cuestion/.test(s)) return "question";
  if (/sistema|software|ats|hris|t-registro|portal|plataforma|linkedin|app|erp|sap|power|tablero|dashboard|lms|aula/.test(s)) return "sistema";
  if (/guía|guia|manual|reglamento|norma|ley|directiva|formato|plantilla|contrato|matriz|perfil|política|politica|registro|legajo|expediente|informe/.test(s)) return "doc";
  if (/calendario|cronograma|plan\b/.test(s)) return "calendar";
  if (/entrevista|focus|reuni|comité|comite|mesa/.test(s)) return "reunion";
  return "taller";
}
export function dayIcon(t){
  const s = String(t).toLowerCase();
  if (/whatsapp/.test(s)) return "whatsapp";
  if (/correo|mail|bandeja/.test(s)) return "correo";
  if (/llam|teléfono|telefono/.test(s)) return "llamada";
  if (/entrevist/.test(s)) return "chat";
  if (/reuni|comité|comite|mesa|presenta|sindicato|gerencia|jefe/.test(s)) return "reunion";
  if (/planilla|calcul|excel|boleta|presupuesto|indicador|dato|reporte|tablero/.test(s)) return "calc";
  if (/archiv|foli|document|legajo|expediente|informe|redact|contrato|carta|resoluci/.test(s)) return "doc";
  if (/capacit|inducci|taller|charla|curso|facilit/.test(s)) return "academia";
  if (/visita|recorr|campo|planta|sede|inspecci/.test(s)) return "presencial";
  if (/sistema|registro|base|t-registro|plataforma/.test(s)) return "sistema";
  return "clock";
}

/* Radar de rasgos: series = [{ v:{id:0..3}, color, name }] */
export function radarPts(traits, v, R = 120, cx = 180, cy = 170){
  return traits.map((t, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / traits.length, r = R * ((v[t.id] || 0) / 3); return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; });
}
const ptsStr = p => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
export function radar(traits, series, label){
  const R = 120, cx = 180, cy = 170, n = traits.length;
  const rings = [1, 2, 3].map(k => `<polygon points="${ptsStr(traits.map((t, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * R * k / 3, cy + Math.sin(a) * R * k / 3]; }))}" fill="none" stroke="var(--line-2)" stroke-width="1" ${k < 3 ? 'stroke-dasharray="3 5"' : ""}/>`).join("");
  const axes = traits.map((t, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R, lx = cx + Math.cos(a) * (R + 22), ly = cy + Math.sin(a) * (R + 18); const anchor = Math.abs(Math.cos(a)) < .2 ? "middle" : Math.cos(a) > 0 ? "start" : "end"; return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--line)" stroke-width="1"/><text x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" text-anchor="${anchor}" font-size="11.5" font-weight="600" fill="var(--ink-2)">${esc(t.n)}</text>`; }).join("");
  const polys = series.map((s, k) => `<polygon class="rd-poly" data-rs="${k}" points="${ptsStr(radarPts(traits, s.v, R, cx, cy))}" fill="${s.color}" fill-opacity=".18" stroke="${s.color}" stroke-width="2.5" stroke-linejoin="round" ${k ? 'stroke-dasharray="7 4"' : ""}/>` + radarPts(traits, s.v, R, cx, cy).map(([x, y], i) => `<circle class="rd-dot" data-rs="${k}" data-ri="${i}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="${s.color}" stroke="var(--card)" stroke-width="1.5"/>`).join("")).join("");
  return `<svg class="radar" viewBox="-40 0 440 340" role="img" aria-label="${esc(label)}">${rings}${axes}${polys}</svg>`;
}
/* anima los polígonos del radar desde valores previos (respeta reduced-motion) */
export function tweenRadar(svgEl, traits, from, to){
  if (!svgEl) return;
  const set = (k, pts) => { const p = svgEl.querySelector(`.rd-poly[data-rs="${k}"]`); if (p) p.setAttribute("points", ptsStr(pts)); svgEl.querySelectorAll(`.rd-dot[data-rs="${k}"]`).forEach(c => { const q = pts[+c.dataset.ri]; c.setAttribute("cx", q[0].toFixed(1)); c.setAttribute("cy", q[1].toFixed(1)); }); };
  if (reducedMotion() || !from) return;
  const A = from.map(v => radarPts(traits, v)), B = to.map(v => radarPts(traits, v));
  const t0 = performance.now(), D = 650, ease = x => 1 - Math.pow(1 - x, 3);
  const step = now => { const t = Math.min(1, (now - t0) / D), e = ease(t); B.forEach((b, k) => { const a = A[k] || b; set(k, b.map(([x, y], i) => [a[i][0] + (x - a[i][0]) * e, a[i][1] + (y - a[i][1]) * e])); }); if (t < 1 && svgEl.isConnected) requestAnimationFrame(step); };
  B.forEach((b, k) => set(k, A[k] || b));
  requestAnimationFrame(step);
}

/* Revela elementos .rv al entrar en pantalla */
export function reveal(root){
  const els = root.querySelectorAll(".rv");
  if (!els.length) return;
  if (reducedMotion() || typeof IntersectionObserver !== "function") { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
  els.forEach(e => io.observe(e));
}

/* Recursos externos curados (YouTube oficial): se cargan de forma defensiva */
let RP = null;
export const recursos = () => (RP || (RP = import("../content/recursos.js").then(m => ((m.recursos && m.recursos.items) || m.default?.items || [])).catch(() => [])));
export const extSlot = (topics, title = "Para reforzar fuera de VÍVELO RH") => `<section class="ext-slot stack" data-ext="${esc(topics.join(" "))}" data-ext-title="${esc(title)}" hidden aria-label="${esc(title)}"></section>`;
export function bindExt(root){
  root.querySelectorAll("[data-ext]").forEach(box => {
    const want = box.dataset.ext.split(" ").filter(Boolean);
    recursos().then(items => {
      if (!box.isConnected) return;
      const hits = (items || []).filter(it => it && /^https:\/\//.test(it.url || "") && (it.topics || []).some(t => want.includes(t))).slice(0, 6);
      if (!hits.length) return;
      box.innerHTML = `<div class="row between"><span class="eyebrow">${icon("link")} ${esc(box.dataset.extTitle)}</span><span class="xs muted">Enlaces externos · se abren en una pestaña nueva</span></div><div class="ext-grid">${hits.map(it => `<a class="ext-card" href="${esc(it.url)}" target="_blank" rel="noopener noreferrer"><span class="ext-ic" aria-hidden="true">${icon(it.kind === "web" || it.kind === "doc" ? "doc" : "play")}</span><span class="ext-copy"><span class="eyebrow">Para reforzar · ${it.kind === "web" || it.kind === "doc" ? "recurso externo" : "video externo"}</span><b>${esc(it.t)}</b>${it.by ? `<span class="xs muted">${esc(it.by)}</span>` : ""}${it.d ? `<span class="small muted">${esc(it.d)}</span>` : ""}</span><span class="ext-go" aria-hidden="true">${icon("arrow")}</span><span class="sr-only"> (abre un sitio externo en una pestaña nueva)</span></a>`).join("")}</div>`;
      box.hidden = false;
    });
  });
}

/* Videos propios relacionados con varias rutas (sin duplicados) y fila de pósteres */
import { C as CC } from "../content/index.js";
export const videosRelated = hashes => (CC.media.video || []).filter(v => v.status === "listo" && (v.related || []).some(h => hashes.includes(h)));
export function videoCards(vs){
  if (!vs.length) return "";
  return `<div class="vid-row">${vs.map(v => `<a class="vid-card" href="#medios.v-${v.id}"><span class="vid-media"><img src="${v.posterWebp || v.poster}" alt="" loading="lazy" decoding="async" width="1280" height="720"><span class="vid-play" aria-hidden="true">${icon("play")}</span><span class="vid-dur">${esc(v.mins)}</span></span><span class="vid-copy"><b>${esc(v.n)}</b><span class="xs muted">${esc(v.d || "")}</span></span></a>`).join("")}</div>`;
}
