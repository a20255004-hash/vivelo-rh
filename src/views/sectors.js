/* Público y privado: comparación profunda, el mismo problema en dos recorridos y regímenes. */
import { $$, esc } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register, render } from "../core/router.js";
import { C, VERIFIED } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg } from "../brand/art.js";
import { coco } from "../brand/coco.js";

const EXTRA = [
  { n: "Remuneraciones", pri: "La empresa fija sueldos dentro de la ley (RMV, igualdad salarial) y del mercado.", pub: "Fijadas por norma y escalas por régimen; un aumento requiere sustento legal y presupuestal." },
  { n: "Desvinculación", pri: "Despido con causa y procedimiento, o indemnización por despido arbitrario; mutuo disenso.", pub: "Causales y procedimientos por régimen (PAD de la Ley 30057, término de contrato CAS por causales); control posterior." },
  { n: "Control", pri: "Auditoría interna o externa y SUNAFIL.", pub: "Además: Órgano de Control Institucional, Contraloría y transparencia (acceso a la información pública)." },
  { n: "Capacitación", pri: "Plan según presupuesto y prioridades del negocio.", pub: "Plan de Desarrollo de las Personas (PDP) bajo lineamientos de SERVIR y con presupuesto anual." }
];

register("sectores", () => {
  const Sx = C.sectors;
  const ci = Math.min(+(S.state.prefs.case || 0), Sx.cases.length - 1), cs = Sx.cases[ci];
  return { section: "sectores", docTitle: "Público y privado", html: `
  <section class="hero">${art("sectores")}<div class="hero-in"><div class="copy"><span class="eyebrow">Público y privado</span><h1>Dos mundos que no funcionan igual</h1><p class="muted">En una empresa, RR.HH. busca que el negocio tenga el talento que necesita. En el Estado, busca que la entidad tenga servidores idóneos elegidos por mérito y gestionados conforme a ley. Las diferencias empiezan ahí.</p></div><div class="coco-slot">${coco("pensando", { size: 120, cls: "anim", label: false })}</div></div></section>
  <section class="stack-lg"><h2>Lado a lado</h2><div class="versus">
    <div class="side-col pri"><h3>${icon("cargos")}Empresa privada</h3>${Sx.dims.concat(EXTRA).map(d => `<div class="small"><b>${esc(d.n)}.</b> ${esc(d.pri)}</div>`).join("")}</div>
    <div class="side-col pub"><h3>${icon("sectores")}Entidad pública</h3>${Sx.dims.concat(EXTRA).map(d => `<div class="small"><b>${esc(d.n)}.</b> ${esc(d.pub)}</div>`).join("")}</div>
  </div></section>
  <section class="stack-lg"><div class="stack"><h2>El mismo problema, dos recorridos</h2><div class="seg" role="group" aria-label="Elegir caso">${Sx.cases.map((c, i) => `<button type="button" data-case="${i}" aria-pressed="${i === ci}">${esc(c.n)}</button>`).join("")}</div></div>
    <div class="versus"><div class="side-col pri"><h3>${icon("cargos")}Empresa privada</h3><div class="flow">${cs.pri.map(([d, t]) => `<div><span class="d">${esc(d)}</span><span>${esc(t)}</span></div>`).join("")}</div></div><div class="side-col pub"><h3>${icon("sectores")}Entidad pública</h3><div class="flow">${cs.pub.map(([d, t]) => `<div><span class="d">${esc(d)}</span><span>${esc(t)}</span></div>`).join("")}</div></div></div>
    <div class="callout">${icon("bulb")}<span>${esc(cs.lesson)}</span></div></section>
  <section class="stack-lg"><div class="stack"><h2>Los regímenes laborales del Estado</h2><p class="small muted">En una misma entidad pueden convivir los cuatro. Cada regla de RR.HH. (vacaciones, beneficios, sanciones, ingreso) depende del régimen de la persona. Estado al ${VERIFIED}.</p></div><div class="grid g4">${Sx.regimenes.map(r => `<div class="regimen"><span class="code">${r.code}</span><b>${esc(r.n)}</b><span class="small"><b>Quiénes:</b> ${esc(r.who)}</span><span class="small"><b>Ingreso:</b> ${esc(r.in)}</span><span class="small"><b>Beneficios:</b> ${esc(r.ben)}</span><span class="xs muted">${esc(r.note)}</span></div>`).join("")}</div>
    <div class="callout warn">${icon("info")}<span><b>Distingue siempre:</b> <span class="tag norm">Normativa vigente</span> lo que dice la norma; <span class="tag ped">Ejemplo pedagógico</span> cómo se ilustra aquí; <span class="tag sim">Simulación</span> los casos ficticios. Si una regla depende del régimen o de la entidad, se indica. No es asesoría legal.</span></div></section>
  <div class="bento">
    <section class="tile w3"><h3>SERVIR: el ente rector</h3><p class="small">La Autoridad Nacional del Servicio Civil (D.Leg. 1023) dirige el Sistema Administrativo de Gestión de Recursos Humanos: emite directivas, publica informes técnicos que orientan a las oficinas de RR.HH., resuelve controversias en el Tribunal del Servicio Civil y conduce el tránsito a la Ley 30057.</p><a class="small" href="https://www.gob.pe/institucion/servir/campa%C3%B1as/5332-proceso-de-transito-a-la-ley-del-servicio-civil" target="_blank" rel="noopener">SERVIR: tránsito a la Ley del Servicio Civil</a></section>
    <section class="tile w3"><h3>Tipos de entidad</h3>${Sx.entities.map(e => `<div class="small"><b>${esc(e.n)}.</b> ${esc(e.d)}</div>`).join("")}</section>
    <section class="tile w3 tint"><h3>Y dentro del sector privado</h3>${Sx.privSizes.map(e => `<div class="small"><b>Empresa ${esc(e.n.toLowerCase())}.</b> ${esc(e.d)}</div>`).join("")}</section>
    <section class="tile w3 sun"><h3>Vívelo</h3><p class="small">La mejor forma de sentir la diferencia es pasar un día en cada lado.</p><div class="row"><a class="btn sm" href="#sim.municipal">Un día en una municipalidad</a><a class="btn ghost sm" href="#sim.concursocas">Caso urgente en un hospital</a><a class="btn ghost sm" href="#sim.feriados">Gran empresa privada</a></div></section>
  </div>`,
  mount(root){ $$("[data-case]", root).forEach(b => b.addEventListener("click", () => { S.state.prefs.case = +b.dataset.case; save(); render(true); })); } };
});
