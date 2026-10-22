/* Bienvenida (nombre de invitado), recorrido de Kusi y portada con las tres puertas. */
import { $, $$, esc, toast } from "../core/util.js";
import { S, save, hasProgress } from "../core/store.js";
import { register, go, render } from "../core/router.js";
import { C, sim, KIND, VERIFIED } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg, has3d } from "../brand/art.js";
import { coco } from "../brand/coco.js";
import { mark, SLOGAN, DESCRIPTOR } from "../brand/logo.js";
import { narr, bindNarr } from "../core/narrator.js";
import { playBrand } from "../core/sound.js";
import * as P from "../engine/profile.js";
import { syncTools } from "./shell.js";
import { say } from "./guide.js";

const PLACES = [
  ["oficina", "Oficina de RR.HH. · pyme", "planillas", "Planillas, contratos y un error en el banco."],
  ["almacen", "Almacén logístico", "seleccion", "Cubrir una vacante con el jefe apurado."],
  ["planta", "Planta industrial", "relaciones", "Sindicato, horas extras y una sanción."],
  ["agro", "Fundo agroexportador · Ica", "discriminacion", "Un caso urgente de maltrato en campaña."],
  ["retail", "Tienda en campaña navideña", "campana", "Contratar a cientos en una semana."],
  ["hospital", "Hospital público", "concursocas", "Un error en los resultados de un concurso CAS."],
  ["municipalidad", "Municipalidad distrital", "municipal", "Régimen CAS, SERVIR y una queja grave."],
  ["cooperativa", "Cooperativa de ahorro y crédito", "capacitacion", "Un plan de capacitación con poco presupuesto."],
  ["reunion", "Sala de reuniones · multinacional", "hrbp", "Ser socia del gerente sin perder a las personas."],
  ["corporativo", "Piso corporativo · Lima", "feriados", "Planillas de una gran empresa con feriados."]
];

const TOUR = [
  { mood: "feliz", t: "Soy Kusi, una alpaca bebé", d: "En quechua, «kusi» quiere decir alegre. Las alpacas vivimos en grupo, nos cuidamos entre todas y nos comunicamos con calma: por eso me encanta Recursos Humanos. Te acompañaré sin estorbarte." },
  { mood: "curioso", t: "Jornadas: vives el trabajo", d: "Un día, una semana o un caso urgente en un puesto real: correos, chats, llamadas, documentos con errores y jefes con prisa. Decides y ves las consecuencias." },
  { mood: "pensando", t: "Cómo lo piensa una profesional", d: "Después de cada decisión verás el razonamiento de alguien con experiencia: buenas prácticas, riesgos, obligaciones y lo que falta averiguar." },
  { mood: "animo", t: "Mapa, Academia, Taller y Retos", d: "Explora especialidades y cómo se conectan, aprende cada concepto en versión sencilla y profesional, practica tareas reales y ponte a prueba." },
  { mood: "celebra", t: "Tu brújula y tu progreso", d: "Registro lo que viviste, lo que te atrae y lo que aún no conoces. Todo se guarda en este navegador; puedes exportar un respaldo cuando quieras." }
];

register("inicio", () => {
  const st = S.state;
  if (!st.profile.name) return welcome();
  if (!st.profile.tourDone) return tour();
  return home();
});

function welcome(){
  return { section: "inicio", docTitle: "Bienvenida", html: `
  <section class="lux-hero" aria-labelledby="w-title">
    <div class="media" aria-hidden="true">${scene("corporativo")}</div><div class="light" aria-hidden="true"></div>
    <div class="lux-hero-in">
      <div class="copy">
        <span class="eyebrow">${DESCRIPTOR}</span>
        <h1 id="w-title" data-split>Vive el trabajo <em>antes de elegirlo.</em></h1>
        <p class="lead">Un laboratorio para entrar por dentro al mundo de Recursos Humanos del Perú: ocupas un puesto, resuelves su día a día y descubres qué especialidades son para ti.</p>
      </div>
      <form class="namecard" data-name autocomplete="off">
        <span class="hole" aria-hidden="true"></span><div class="band" aria-hidden="true"></div>
        <div class="row" style="justify-content:space-between">${mark(42, false)}<span class="tag sim">Fotocheck de invitado</span></div>
        <div class="field"><label for="nm">¿Cómo te llamamos?</label><input type="text" id="nm" name="nm" maxlength="40" required placeholder="Tu nombre o apodo" autocomplete="given-name"></div>
        <button type="submit" class="btn ivory lg">Entrar como invitado ${icon("arrow")}</button>
        <p class="xs muted">Solo pedimos un nombre para saludarte. Tu progreso se guarda <b>únicamente en este navegador</b>, sin cuentas ni contraseñas.</p>
        ${S.migratedFrom ? `<div class="callout ok small">${icon("check")}<span>Encontramos tu progreso de la versión anterior (${esc(S.migratedFrom)}) y lo conservamos.</span></div>` : ""}
      </form>
      <div class="meta" aria-label="Lo que encontrarás">
        <span><b>${C.sims.length}</b>Jornadas</span><span><b>${C.roles.length}</b>Cargos</span><span><b>${C.areas.length}</b>Especialidades</span><span><b>${C.concepts.length}</b>Conceptos</span>
      </div>
    </div>
    <span class="scroll-cue" aria-hidden="true">Descubrir</span>
  </section>
  <section class="sec-head"><h2 data-split>Tres maneras de <em>aprender el oficio</em></h2><p>Nada de diapositivas: correos, chats, llamadas y documentos con errores. Decides, ves las consecuencias y lees cómo lo piensa una profesional.</p></section>
  <section class="figures" aria-label="Pilares">
    <div><span>I · Vivir</span><h3>Jornadas reales</h3><p class="small muted">Un día, una semana o un caso urgente en ${C.sims.length} puestos, de practicante a HRBP.</p></div>
    <div><span>II · Comprender</span><h3>El criterio profesional</h3><p class="small muted">Después de cada decisión, el razonamiento paso a paso: buenas prácticas, riesgos y normas.</p></div>
    <div><span>III · Elegir</span><h3>Tu brújula</h3><p class="small muted">Pesa lo que sentiste al experimentar, no tus aciertos. Equivocarse no dice nada de tu vocación.</p></div>
    <div><span>IV · Practicar</span><h3>Taller y retos</h3><p class="small muted">Boletas, matrices, concursos y desafíos por niveles, con explicación en cada respuesta.</p></div>
  </section>
  <section class="quote"><div class="kusi-pair"><div class="kusi-live" data-kusi3d title="Mueve el cursor: Kusi te sigue con la mirada">${kusi3dImg("feliz", { size: 360 })}</div></div><p class="xs muted" style="margin-top:-8px">Mueve el cursor: Kusi te sigue con la mirada.</p><blockquote>«Soy Kusi, una alpaca. Las alpacas vivimos en manada y nos cuidamos entre todas: <em>por eso me encanta Recursos Humanos.</em>»</blockquote><cite>Tu guía · puedes silenciarla cuando quieras</cite>${narr("intro", C.media.scripts.intro, { title: "Escucha a Kusi" })}</section>
  <section class="hero compact">${art("oficina")}<div class="hero-in"><div class="copy"><span class="eyebrow">Hecho para el Perú</span><h2>Sector privado y público, pymes, corporaciones y municipalidades</h2><p class="muted">Normativa peruana verificada al ${VERIFIED}: RMV de S/ 1,230, feriados 2026, régimen CAS, SERVIR, SUNAFIL. Todo caso es una simulación y lo dice siempre.</p></div></div></section>`,
  mount(root){
    bindNarr(root);
    $("[data-name]", root).addEventListener("submit", e => {
      e.preventDefault();
      const v = $("#nm", root).value.trim().replace(/\s+/g, " ").slice(0, 40);
      if (!v) { $("#nm", root).focus(); return; }
      S.state.profile.name = v; S.state.profile.createdAt = S.state.profile.createdAt || Date.now(); save(); syncTools(); playBrand();
      render();
    });
    setTimeout(() => { const i = $("#nm", root); if (i && innerWidth > 900) i.focus({ preventScroll: true }); }, 900);
    const live = $("[data-kusi3d]", root);
    if (live) import("../brand/kusi3d.js").then(m => m.mountKusi3D(live, { mood: "feliz", fallbackSrc: "assets/3d/kusi/kusi-feliz.webp" })).catch(() => {});
  } };
}

function tour(){
  const i = Math.min(S.state.seen.tourStep || 0, TOUR.length - 1);
  const s = TOUR[i];
  const n = esc(S.state.profile.name.split(" ")[0]);
  return { section: "inicio", docTitle: "Recorrido", html: `
  <section class="hero compact">${art("viaje")}<div class="hero-in"><div class="copy"><span class="eyebrow">Recorrido de bienvenida · ${i + 1} de ${TOUR.length}</span><h1>¡Hola, ${n}! Te muestro la plataforma</h1><p class="muted">Dura un minuto. Puedes saltarlo y volver a verlo desde «Mis datos».</p></div></div></section>
  <section class="tour">${kusi3dImg(s.mood, { size: 220, eager: true, cls: "enter" })}<div class="stack-lg"><div class="dots" aria-hidden="true">${TOUR.map((_, k) => `<i class="${k <= i ? "on" : ""}"></i>`).join("")}</div><h2>${esc(s.t)}</h2><p style="font-size:1.06rem">${esc(s.d)}</p>
    ${i === 0 ? narr("tour", C.media.scripts.tour, { title: "Escuchar el recorrido completo" }) : ""}
    <div class="row">${i > 0 ? `<button type="button" class="btn ghost" data-t="prev">${icon("back")}Atrás</button>` : ""}<button type="button" class="btn brand" data-t="next">${i === TOUR.length - 1 ? "¡Empecemos!" : "Siguiente"} ${icon("arrow")}</button><button type="button" class="btn ghost" data-t="skip">Saltar recorrido</button></div></div></section>`,
  mount(root){
    bindNarr(root);
    $$("[data-t]", root).forEach(b => b.addEventListener("click", () => {
      const a = b.dataset.t;
      if (a === "prev") S.state.seen.tourStep = Math.max(0, i - 1);
      if (a === "next" && i < TOUR.length - 1) S.state.seen.tourStep = i + 1;
      if (a === "skip" || (a === "next" && i === TOUR.length - 1)) { S.state.profile.tourDone = true; S.state.seen.tourStep = 0; }
      save(); render(true);
      const h = $("#view h2"); if (h) h.setAttribute("tabindex", "-1"), h.focus();
    }));
  } };
}

function home(){
  const st = S.state;
  const n = esc(st.profile.name.split(" ")[0]);
  const act = Object.keys(st.active).filter(id => sim(id));
  const progress = hasProgress();
  const route = P.route().slice(0, 4);
  const exp = P.all().filter(f => f.status === "exp").length;
  const jDone = st.journey.done.length, jTot = C.journey.stations.length;
  const cont = act.length ? { h: "#sim." + act[0], t: "Continuar «" + sim(act[0]).title + "»" } : st.journey.started && jDone < jTot ? { h: "#viaje", t: `Retomar el viaje (estación ${jDone + 1} de ${jTot})` } : progress ? { h: route[0] ? route[0].h : "#brujula", t: route[0] ? route[0].t : "Ver mi brújula" } : null;
  const v = C.media.video[0];
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Buenos días" : hour < 19 ? "Buenas tardes" : "Buenas noches";
  const roles = C.roles.map(r => `<a href="#cargo.${r.id}">${esc(r.n)}</a>`).join("");
  return { section: "inicio", docTitle: "Inicio", html: `
  <section class="lux-hero" aria-labelledby="h-title">
    <div class="media" aria-hidden="true">${scene("oficina")}</div><div class="light" aria-hidden="true"></div>
    <div class="lux-hero-in">
      <div class="copy">
        <span class="eyebrow">${greet} · ${DESCRIPTOR}</span>
        <h1 id="h-title" data-split>¿Por dónde entramos hoy, <em>${n}?</em></h1>
        <p class="lead">${progress ? "Tu progreso está guardado en este navegador. Sigue donde lo dejaste o abre una puerta nueva." : "Te propongo un viaje guiado por las cinco familias de Recursos Humanos. Si prefieres, entra directo a un puesto."}</p>
        <div class="ctas"><a class="btn ivory lg" href="${cont ? cont.h : "#viaje"}">${cont ? "Continuar" : "Hacer el viaje"} ${icon("arrow")}</a><a class="btn line-ivory lg" href="#sims">Probar un puesto</a></div>
      </div>
      <div class="aside">${kusi3dImg(progress ? "feliz" : "curioso", { size: 320, eager: true, cls: "hero-kusi" })}<p>${cont ? esc(cont.t) + "." : "Kusi te acompaña sin estorbar. Puedes silenciarla cuando quieras."}</p></div>
      <div class="meta" aria-label="Lo que hay dentro"><span><b>${C.sims.length}</b>Jornadas</span><span><b>${C.roles.length}</b>Cargos</span><span><b>${C.areas.length}</b>Especialidades</span><span><b>${C.tools.length}</b>Tareas de taller</span></div>
    </div>
    <span class="scroll-cue" aria-hidden="true">Explorar</span>
  </section>

  <section class="stack-lg" aria-label="Cómo empezar">
    <div class="sec-head"><h2 data-split>Tres puertas, <em>un mismo oficio</em></h2><p>Elige cómo quieres entrar. Todo lo que hagas se guarda en este navegador y alimenta tu brújula.</p></div>
    <nav class="index">
      <a class="index-row" href="#viaje"><span class="no">01</span><h2>Hacer un viaje</h2><p>Cinco estaciones: las familias de RR.HH., un puesto, tu primera mañana, tu camino y tu brújula.</p><span class="go">${icon("arrow")}</span><span class="peek" aria-hidden="true">${art("viaje")}</span>${st.journey.started ? `<span class="prog" aria-label="Avance del viaje ${jDone} de ${jTot}"><i style="width:${jDone / jTot * 100}%"></i></span>` : ""}</a>
      <a class="index-row" href="#sims"><span class="no">02</span><h2>Probar un puesto</h2><p>${C.sims.length} jornadas con correos, WhatsApp, llamadas y giros: planillas, selección, HRBP, sector público y casos urgentes.</p><span class="go">${icon("arrow")}</span><span class="peek" aria-hidden="true">${art("almacen")}</span></a>
      ${cont ? `<a class="index-row" href="${cont.h}" data-cont><span class="no">03</span><h2>Mi recorrido</h2><p>${esc(cont.t)}</p><span class="go">${icon("arrow")}</span><span class="peek" aria-hidden="true">${art("brujula")}</span></a>`
        : `<div class="index-row static"><span class="no">03</span><h2 style="color:var(--ink-3)">Mi recorrido</h2><p>Aquí aparecerá tu progreso cuando empieces. Se guarda solo en este navegador.</p><span class="go" style="opacity:.4">${icon("clock")}</span></div>`}
    </nav>
  </section>

  <section class="stack-lg" aria-label="Lugares de trabajo">
    <div class="sec-head"><h2 data-split>Dónde trabaja <em>Recursos Humanos</em></h2><p>Oficinas, almacenes, plantas, fundos, hospitales y municipalidades. Cada lugar tiene su jornada: entra y vívela. <span class="small muted">Ilustraciones 3D originales; lugares ficticios.</span></p></div>
    <div class="places bleed" role="list">${PLACES.filter(([k]) => has3d(k)).map(([k, t, simId, d]) => { const x = sim(simId); return `<a class="place" role="listitem" href="#sim.${simId}">${art(k, { sq: true })}<span class="place-cap"><span class="eyebrow">${esc(t)}</span><b>${esc(x ? x.title : "")}</b><span class="small muted">${esc(d)}</span></span></a>`; }).join("")}</div>
  </section>

  <section class="stack-lg" aria-label="Cargos">
    <div class="sec-head"><h2 data-split>${C.roles.length} cargos, <em>de practicante a dirección</em></h2><p>Cada puesto con su día típico hora por hora, lo difícil que nadie cuenta, sus indicadores y dilemas reales. <a class="textlink" href="#cargos">Ver todos ${icon("arrow")}</a></p></div>
    <div class="marquee bleed" aria-label="Lista de cargos"><div class="marquee-track">${roles}<span aria-hidden="true" style="display:contents">${roles.replace(/<a /g, '<a tabindex="-1" ')}</span></div></div>
  </section>

  <section class="stack-lg" aria-label="Tu avance">
    <div class="sec-head"><h2 data-split>Tu avance, <em>${n}</em></h2><p>${progress ? "Lo que ya viviste en la plataforma." : "Aún no empiezas: estos contadores se llenarán con lo que vivas."} <a class="textlink" href="#brujula">Mi brújula ${icon("arrow")}</a></p></div>
    <div class="figures">
      <div><span class="numeral" data-count="${Object.keys(st.runs).length}">${Object.keys(st.runs).length}</span><span>de ${C.sims.length} jornadas</span></div>
      <div><span class="numeral" data-count="${exp}">${exp}</span><span>de ${C.areas.length} áreas exploradas</span></div>
      <div><span class="numeral" data-count="${Object.keys(st.challenges).length}">${Object.keys(st.challenges).length}</span><span>retos resueltos</span></div>
      <div><span class="numeral" data-count="${(st.saved || []).length}">${(st.saved || []).length}</span><span>razonamientos guardados</span></div>
    </div>
    ${route[0] ? `<div class="callout sun">${icon("brujula")}<span><b>Siguiente paso sugerido:</b> ${esc(route[0].t)}. <span class="muted">${esc(route[0].why)}</span> <a href="${route[0].h}" data-r0>Ir</a></span></div>` : ""}
  </section>

  <section class="bento" aria-label="Lo que hay dentro">
    <a class="tile w4 t2 dark" href="#medios" style="padding:0;overflow:hidden"><video src="${v.src}" poster="${v.poster}" muted playsinline preload="none" style="width:100%;height:100%;object-fit:cover;display:block;min-height:300px;filter:saturate(.6) sepia(.1)" aria-hidden="true" tabindex="-1" data-autoplay></video><span style="position:absolute;left:clamp(20px,3vw,34px);bottom:clamp(18px,3vw,30px);right:20px;display:grid;gap:8px;text-shadow:0 2px 16px rgba(0,0,0,.6)"><span class="eyebrow" style="color:#E2D9CC">${icon("film")} Video · ${v.mins}</span><b style="font-family:var(--f-display);font-weight:400;font-size:clamp(1.6rem,1.2rem + 1.4vw,2.6rem);line-height:1.05;color:#F5F0E8">${esc(v.n)}</b><span class="small" style="color:#D4CBBD">Con subtítulos en Audio y video</span></span></a>
    <a class="tile w2" href="#mapa">${art("viaje")}<span class="eyebrow">Mapa</span><h3>${C.areas.length} especialidades en 5 familias</h3><span class="small muted">Conexiones, tareas, herramientas y carrera.</span></a>
    <a class="tile w2" href="#academia">${art("academia")}<span class="eyebrow">Academia</span><h3>${C.concepts.length} conceptos en dos niveles</h3><span class="small muted">Diagramas, demostraciones y errores frecuentes.</span></a>
    <a class="tile w2" href="#taller">${art("taller")}<span class="eyebrow">Taller</span><h3>${C.tools.length} tareas reales</h3><span class="small muted">Boletas, legajos, matrices, encuestas.</span></a>
    <a class="tile w2 dark" href="#retos">${art("retos")}<span class="eyebrow">Retos</span><h3>Tres niveles de desafío</h3><span class="small muted">Asociar, ordenar, calcular, interpretar documentos.</span></a>
    <a class="tile w2" href="#sectores"><span class="eyebrow">Público y privado</span><h3>Dos mundos que no funcionan igual</h3><span class="small muted">SERVIR, regímenes 276, 728, CAS y Servicio Civil.</span></a>
  </section>

  <section class="quote"><blockquote>«Cada decisión de personas es, al final, <em>una decisión sobre la vida de alguien.</em>»</blockquote><cite>Principio de VÍVELO RH</cite></section>

  <div class="callout">${icon("info")}<span>Todo lo que vivas aquí es una <b>simulación</b> construida a partir de prácticas profesionales habituales: organizaciones, personas y datos son ficticios. Las normas citadas son reales y están en <a href="#fuentes">Fuentes</a>. Es una herramienta formativa, no asesoría legal.</span></div>`,
  mount(root){
    const vid = $("[data-autoplay]", root);
    if (vid && !matchMedia("(prefers-reduced-motion: reduce)").matches) { vid.preload = "auto"; vid.loop = true; vid.play().catch(() => {}); }
    const r0 = $("[data-r0]", root); if (r0 && route[0] && route[0].pre) r0.addEventListener("click", () => { route[0].pre(); save(); });
  } };
}
