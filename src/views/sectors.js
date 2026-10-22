/* Público y privado: comparación visual por dimensión, el mismo problema en dos recorridos,
   organizador de regímenes, cronograma CAS, cómo se ingresa y recursos para reforzar. */
import { $, $$, esc } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register } from "../core/router.js";
import { C, VERIFIED, sim } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { art, kusi3dImg } from "../brand/art.js";
import { avatar } from "../brand/people.js";
import { videoFor } from "./videocard.js";
import { reveal, extSlot, bindExt } from "./diagrams.js";

const EXTRA = [
  { n: "Remuneraciones", pri: "La empresa fija sueldos dentro de la ley (RMV, igualdad salarial) y del mercado.", pub: "Fijadas por norma y escalas por régimen; un aumento requiere sustento legal y presupuestal." },
  { n: "Desvinculación", pri: "Despido con causa y procedimiento, o indemnización por despido arbitrario; mutuo disenso.", pub: "Causales y procedimientos por régimen (PAD de la Ley 30057, término de contrato CAS por causales); control posterior." },
  { n: "Control", pri: "Auditoría interna o externa y SUNAFIL.", pub: "Además: Órgano de Control Institucional, Contraloría y transparencia (acceso a la información pública)." },
  { n: "Capacitación", pri: "Plan según presupuesto y prioridades del negocio.", pub: "Plan de Desarrollo de las Personas (PDP) bajo lineamientos de SERVIR y con presupuesto anual." }
];
const DIM_IC = ["flag", "gear", "door", "doc", "clock", "calc", "reunion", "scale", "star", "warn", "paper", "back", "eye", "academia"];
const REG_IC = { "728": "cargos", "276": "sectores", "1057": "doc", "30057": "star" };
const ENT_IC = ["sectores", "mapa", "inicio", "shield"];
const ING_IC = ["user", "calc", "doc", "correo", "chat", "check"];
const SIZE_N = [1, 3, 6];

/* cronograma CAS: se lee del propio texto de sectors.js para no duplicar cifras */
function casSchedule(){
  const r = C.sectors.regimenes.find(x => x.code === "1057");
  const out = [];
  const re = /(\d+)%[^,;)]*?(?:en|desde)\s(\d{4})/g; let m;
  while ((m = re.exec(r ? r.ben : ""))) out.push([+m[2], +m[1]]);
  return out.length >= 3 ? out : [[2026, 10], [2027, 20], [2028, 30], [2029, 50], [2030, 100]];
}

function dimPanel(all, i){
  const d = all[i];
  return `<div class="sc-dpanel" aria-live="polite"><article class="sc-side pri"><span class="sc-side-h">${icon("cargos")}Empresa privada</span><b class="sc-dn">${esc(d.n)}</b><p>${esc(d.pri)}</p></article><span class="sc-dvs" aria-hidden="true">${icon(DIM_IC[i] || "info")}</span><article class="sc-side pub"><span class="sc-side-h">${icon("sectores")}Entidad pública</span><b class="sc-dn">${esc(d.n)}</b><p>${esc(d.pub)}</p></article></div>`;
}
function lanes(cs){
  const lane = (cls, h, ic, steps) => `<div class="sc-lane ${cls}"><span class="sc-lane-h">${icon(ic)}${h}<span class="xs">${steps.length} pasos</span></span><ol>${steps.map(([d, t], i) => `<li style="--i:${i}"><span class="sc-node">${i + 1}</span><span class="sc-when">${esc(d)}</span><span class="small">${esc(t)}</span></li>`).join("")}</ol></div>`;
  return `${lane("pri", "Empresa privada", "cargos", cs.pri)}${lane("pub", "Entidad pública", "sectores", cs.pub)}<div class="callout">${icon("bulb")}<span>${esc(cs.lesson)}</span></div>`;
}
function regPanel(r){
  return `<div class="sc-reg-detail" aria-live="polite"><div class="sc-reg-big"><span class="code">${esc(r.code)}</span>${icon(REG_IC[r.code] || "doc")}</div><div class="stack"><h3>${esc(r.n)}</h3><div class="sc-reg-rows"><div>${icon("user")}<span><b>Quiénes</b>${esc(r.who)}</span></div><div>${icon("door")}<span><b>Cómo se ingresa</b>${esc(r.in)}</span></div><div>${icon("calc")}<span><b>Beneficios</b>${esc(r.ben)}</span></div><div>${icon("info")}<span><b>Nota</b>${esc(r.note)}</span></div></div></div></div>`;
}
function casYear(sched, y){
  const p = (sched.find(x => x[0] === y) || sched[sched.length - 1])[1];
  return `<b class="numeral">${p}%</b><span>de la remuneración mensual por gratificación en <b>${y}</b>${p === 100 ? " (pago completo)" : ""}</span>`;
}

register("sectores", () => {
  const Sx = C.sectors;
  const all = Sx.dims.concat(EXTRA);
  const di = Math.min(+(S.state.prefs.scDim || 0), all.length - 1);
  const ci = Math.min(+(S.state.prefs.case || 0), Sx.cases.length - 1), cs = Sx.cases[ci];
  const ri = Math.min(+(S.state.prefs.scReg ?? 2), Sx.regimenes.length - 1);
  const sched = casSchedule();
  const yr = sched.some(x => x[0] === +S.state.prefs.scYear) ? +S.state.prefs.scYear : sched[0][0];
  const conc = (C.media.capsules.find(k => k.id === "concurso") || { steps: [] }).steps;
  const urg = Sx.cases.find(c => /vacante/i.test(c.n)) || Sx.cases[1];
  const vivelo = [["municipal", "Un día en una municipalidad"], ["concursocas", "Caso urgente en un hospital"], ["feriados", "Gran empresa privada"]].map(([id, l]) => [sim(id), l]).filter(x => x[0]);
  return { section: "sectores", docTitle: "Público y privado", html: `
  <section class="hero">${art("sectores")}<div class="hero-in"><div class="copy"><span class="eyebrow">Público y privado</span><h1>Dos mundos que no funcionan igual</h1><p class="muted">En una empresa, RR.HH. busca que el negocio tenga el talento que necesita. En el Estado, busca que la entidad tenga servidores idóneos elegidos por mérito y gestionados conforme a ley. Las diferencias empiezan ahí.</p></div><div class="coco-slot">${kusi3dImg("pensando", { size: 150, decorative: true })}</div></div></section>

  <section class="stack-lg"><div class="sec-head"><div class="stack"><span class="eyebrow">Lado a lado</span><h2>Elige una dimensión y compara</h2></div><p>${all.length} dimensiones en las que cambia el trabajo de RR.HH. según el sector.</p></div>
    <div class="sc-duo"><figure class="sc-pic pri">${art("corporativo", { decorative: true })}<figcaption>${icon("cargos")}<b>Empresa privada</b><span class="xs">Velocidad, autonomía, mercado</span></figcaption></figure><figure class="sc-pic pub">${art("municipalidad", { decorative: true })}<figcaption>${icon("sectores")}<b>Entidad pública</b><span class="xs">Mérito, legalidad, presupuesto</span></figcaption></figure></div>
    <div class="sc-dims" role="group" aria-label="Dimensión a comparar">${all.map((d, i) => `<button type="button" data-dimx="${i}" aria-pressed="${i === di}">${icon(DIM_IC[i] || "info")}<span>${esc(d.n)}</span></button>`).join("")}</div>
    <div id="dimPanel">${dimPanel(all, di)}</div>
    <details class="sc-all"><summary>Ver las ${all.length} dimensiones en una tabla</summary><div class="table-wrap"><table><thead><tr><th>Dimensión</th><th>Empresa privada</th><th>Entidad pública</th></tr></thead><tbody>${all.map(d => `<tr><td><b>${esc(d.n)}</b></td><td class="small">${esc(d.pri)}</td><td class="small">${esc(d.pub)}</td></tr>`).join("")}</tbody></table></div></details>
  </section>

  <section class="stack-lg"><div class="sec-head"><div class="stack"><span class="eyebrow">Cómo se ingresa</span><h2>A una empresa y al Estado</h2></div><p>En el privado, la empresa elige su método (sin discriminar). En el Estado, el ingreso es por concurso público de méritos, salvo cargos de confianza.</p></div>
    <div class="sc-ing rv">
      <div class="sc-ing-col pri"><span class="sc-side-h">${icon("cargos")}Empresa · «${esc(urg.n.toLowerCase())}»</span><ol class="sc-flow">${urg.pri.map(([d, t], i) => `<li style="--i:${i}"><span class="sc-fic">${icon(["user", "correo", "chat", "check"][i] || "check")}</span><span><span class="sc-when">${esc(d)}</span><span class="small">${esc(t)}</span></span></li>`).join("")}</ol></div>
      <div class="sc-ing-col pub"><span class="sc-side-h">${icon("sectores")}Estado · concurso CAS</span><ol class="sc-flow">${conc.map((s, i) => `<li style="--i:${i}"><span class="sc-fic">${icon(ING_IC[i] || "check")}</span><span><span class="sc-when">${i + 1} · ${esc(s.k)}</span><span class="small">${esc(s.t)}</span></span></li>`).join("")}</ol></div>
    </div>
    <div class="sc-ruler rv" role="img" aria-label="En el caso de ejemplo, la empresa cubre la vacante hacia el día 20 y la entidad pública hacia la semana 5"><div class="sc-rl pri"><span class="small"><b>Empresa</b> · ${esc(urg.pri[urg.pri.length - 1][0])}</span><span class="sc-rbar" style="--w:${20 / 35 * 100}%"></span></div><div class="sc-rl pub"><span class="small"><b>Estado</b> · ${esc(urg.pub[urg.pub.length - 1][0])}</span><span class="sc-rbar" style="--w:100%"></span></div><span class="xs muted">Plazos del caso «${esc(urg.n)}» <span class="tag ped">Ejemplo pedagógico</span></span></div>
    ${videoFor("#sectores")}
  </section>

  <section class="stack-lg"><div class="sec-head"><div class="stack"><span class="eyebrow">El mismo problema</span><h2>Dos recorridos</h2></div><p>Elige un caso y mira cuántos pasos exige en cada sector.</p></div>
    <div class="seg" role="group" aria-label="Elegir caso">${Sx.cases.map((c, i) => `<button type="button" data-case="${i}" aria-pressed="${i === ci}">${esc(c.n)}</button>`).join("")}</div>
    <div class="sc-lanes" id="lanes">${lanes(cs)}</div></section>

  <section class="stack-lg"><div class="sec-head"><div class="stack"><span class="eyebrow">Organizador</span><h2>Los regímenes laborales del Estado</h2></div><p>En una misma entidad pueden convivir los cuatro. Cada regla de RR.HH. (vacaciones, beneficios, sanciones, ingreso) depende del régimen de la persona. Estado al ${VERIFIED}.</p></div>
    <div class="sc-regs" role="group" aria-label="Elige un régimen">${Sx.regimenes.map((r, i) => `<button type="button" class="sc-reg" data-reg="${i}" aria-pressed="${i === ri}"><span class="code">${esc(r.code)}</span><b>${esc(r.n)}</b><span class="xs muted">${esc(r.who)}</span></button>`).join("")}</div>
    <div id="regPanel">${regPanel(Sx.regimenes[ri])}</div>
    <div class="callout warn">${icon("info")}<span><b>Distingue siempre:</b> <span class="tag norm">Normativa vigente</span> lo que dice la norma; <span class="tag ped">Ejemplo pedagógico</span> cómo se ilustra aquí; <span class="tag sim">Simulación</span> los casos ficticios. Si una regla depende del régimen o de la entidad, se indica. No es asesoría legal.</span></div></section>

  <section class="sc-cas stack-lg rv"><div class="sec-head"><div class="stack"><span class="eyebrow">CAS · Ley 32563</span><h2>Gratificaciones CAS: implementación progresiva</h2></div><p>Según el cronograma difundido del D.S. 142-2026-EF, el porcentaje de la remuneración que se paga como gratificación sube cada año hasta el pago completo.</p></div>
    <div class="sc-cas-in"><div class="sc-cas-chart" role="img" aria-label="Cronograma: ${sched.map(([y, p]) => `${y}, ${p}%`).join("; ")}">${sched.map(([y, p]) => `<button type="button" class="sc-col ${y === yr ? "on" : ""}" data-year="${y}" aria-pressed="${y === yr}" aria-label="${y}: ${p}%" style="--h:${p}%"><span class="sc-col-v">${p}%</span><span class="sc-col-bar"></span><span class="sc-col-y">${y}</span></button>`).join("")}</div>
      <div class="sc-cas-side"><label class="small" for="casYear">Desliza el año</label><input type="range" id="casYear" min="0" max="${sched.length - 1}" step="1" value="${sched.findIndex(x => x[0] === yr)}" aria-valuetext="${yr}"><div class="sc-cas-out" id="casOut" aria-live="polite">${casYear(sched, yr)}</div>${kusi3dImg("animo", { size: 96, decorative: true })}</div></div>
    <div class="callout warn">${icon("warn")}<span>También se reconoce la CTS al término del vínculo. Hay una demanda admitida contra la gradualidad: verifica el estado vigente antes de aplicar. <span class="tag norm">Normativa vigente al ${VERIFIED}</span></span></div></section>

  <div class="sc-bento">
    <section class="sc-tile servir"><span class="sc-tile-ic">${icon("shield")}</span><h3>SERVIR: el ente rector</h3><p class="small">La Autoridad Nacional del Servicio Civil (D.Leg. 1023) dirige el Sistema Administrativo de Gestión de Recursos Humanos: emite directivas, publica informes técnicos que orientan a las oficinas de RR.HH., resuelve controversias en el Tribunal del Servicio Civil y conduce el tránsito a la Ley 30057.</p><a class="small" href="https://www.gob.pe/institucion/servir/campa%C3%B1as/5332-proceso-de-transito-a-la-ley-del-servicio-civil" target="_blank" rel="noopener">SERVIR: tránsito a la Ley del Servicio Civil</a></section>
    <section class="sc-tile"><h3>Tipos de entidad</h3><div class="sc-ents">${Sx.entities.map((e, i) => `<div class="sc-ent"><span class="sc-ent-ic">${icon(ENT_IC[i] || "sectores")}</span><span><b>${esc(e.n)}</b><span class="small muted">${esc(e.d)}</span></span></div>`).join("")}</div></section>
    <section class="sc-tile"><h3>Y dentro del sector privado</h3><div class="sc-sizes">${Sx.privSizes.map((e, i) => `<div class="sc-size"><span class="sc-crowd" aria-hidden="true">${Array.from({ length: SIZE_N[i] || 1 }, (_, k) => avatar(e.n + k, {}, { size: 30, decorative: true })).join("")}</span><b>Empresa ${esc(e.n.toLowerCase())}</b><span class="small muted">${esc(e.d)}</span></div>`).join("")}</div></section>
    <section class="sc-tile vivelo"><h3>Vívelo</h3><p class="small">La mejor forma de sentir la diferencia es pasar un día en cada lado.</p><div class="mp-sims">${vivelo.map(([s, l]) => `<a class="mp-sim" href="#sim.${s.id}"><span class="mp-sim-img">${art(s.scene, { sq: true, decorative: true })}</span><span class="mp-sim-copy"><span class="eyebrow">${s.sector === "publico" ? "Sector público" : "Sector privado"}</span><b>${esc(l)}</b></span></a>`).join("")}</div></section>
  </div>
  ${extSlot(["sectores", "cas", "servir", "sunafil"], "Para reforzar: videos oficiales")}`,
  mount(root){
    reveal(root); bindExt(root);
    const press = (sel, v, attr) => $$(sel, root).forEach(b => b.setAttribute("aria-pressed", String(b.dataset[attr] === String(v))));
    $$("[data-dimx]", root).forEach(b => b.addEventListener("click", () => { const i = +b.dataset.dimx; S.state.prefs.scDim = i; save(); press("[data-dimx]", i, "dimx"); $("#dimPanel", root).innerHTML = dimPanel(all, i); }));
    $$("[data-case]", root).forEach(b => b.addEventListener("click", () => { const i = +b.dataset.case; S.state.prefs.case = i; save(); press("[data-case]", i, "case"); $("#lanes", root).innerHTML = lanes(Sx.cases[i]); }));
    $$("[data-reg]", root).forEach(b => b.addEventListener("click", () => { const i = +b.dataset.reg; S.state.prefs.scReg = i; save(); press("[data-reg]", i, "reg"); $("#regPanel", root).innerHTML = regPanel(Sx.regimenes[i]); }));
    const rng = $("#casYear", root), out = $("#casOut", root);
    const setY = y => { S.state.prefs.scYear = y; save(); out.innerHTML = casYear(sched, y); rng.value = sched.findIndex(x => x[0] === y); rng.setAttribute("aria-valuetext", String(y)); $$("[data-year]", root).forEach(b => { const on = +b.dataset.year === y; b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on)); }); };
    rng.addEventListener("input", () => setY(sched[+rng.value][0]));
    $$("[data-year]", root).forEach(b => b.addEventListener("click", () => setY(+b.dataset.year)));
  } };
});
