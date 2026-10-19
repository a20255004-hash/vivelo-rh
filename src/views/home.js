/* Bienvenida (nombre de invitado), recorrido de Coco y portada con las tres puertas. */
import { $, $$, esc, toast } from "../core/util.js";
import { S, save, hasProgress } from "../core/store.js";
import { register, go, render } from "../core/router.js";
import { C, sim, KIND, VERIFIED } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { coco } from "../brand/coco.js";
import { mark, SLOGAN, DESCRIPTOR } from "../brand/logo.js";
import { narr, bindNarr } from "../core/narrator.js";
import * as P from "../engine/profile.js";
import { syncTools } from "./shell.js";
import { say } from "./guide.js";

const TOUR = [
  { mood: "feliz", t: "Soy Coco, un ronsoco explorador", d: "Los ronsocos somos los animales más sociables del mundo: nos llevamos bien con casi todos y mantenemos la calma en el conflicto. Por eso me encanta Recursos Humanos. Te acompañaré sin estorbarte." },
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
  <section class="welcome">
    <div class="stack-lg">
      <span class="eyebrow">${DESCRIPTOR}</span>
      <h1>${SLOGAN.replace("antes de elegirlo", `<span class="accent">antes de elegirlo</span>`)}</h1>
      <p class="muted" style="font-size:1.1rem;max-width:56ch">VÍVELO RH es un laboratorio para explorar el mundo de Recursos Humanos por dentro: entras a puestos reales del Perú, resuelves lo que pasa en su día a día y descubres qué especialidades encajan contigo.</p>
      <div class="grid g3">
        <div class="card plain stack" style="gap:6px">${icon("sims")}<b>Vive jornadas</b><span class="small muted">Correos, chats y urgencias de ${C.sims.length} puestos, de practicante a HRBP.</span></div>
        <div class="card plain stack" style="gap:6px">${icon("bulb")}<b>Aprende el criterio</b><span class="small muted">Cómo lo piensa y razona una profesional, en cada decisión.</span></div>
        <div class="card plain stack" style="gap:6px">${icon("brujula")}<b>Descubre tu lugar</b><span class="small muted">Una brújula que se basa en lo que sentiste, no en tus aciertos.</span></div>
      </div>
      <div class="coco-inline">${coco("feliz", { size: 120, cls: "anim enter" })}<div class="say"><b>¡Hola! Soy Coco.</b> Te acompañaré en este viaje. Antes de empezar, ¿cómo te llamo?</div></div>
      ${narr("intro", C.media.scripts.intro, { title: "Escucha a Coco" })}
    </div>
    <form class="namecard" data-name autocomplete="off">
      <span class="hole" aria-hidden="true"></span><div class="band" aria-hidden="true"></div>
      <div class="row" style="justify-content:space-between">${mark(46, false)}<span class="tag sim">Fotocheck de invitado</span></div>
      <div class="field"><label for="nm">¿Cómo te llamamos?</label><input type="text" id="nm" name="nm" maxlength="40" required placeholder="Tu nombre o apodo" autocomplete="given-name"></div>
      <button type="submit" class="btn brand lg">Entrar como invitado ${icon("arrow")}</button>
      <p class="xs muted">Solo te pedimos un nombre para saludarte. Tu progreso se guarda <b>únicamente en este navegador</b>, sin cuentas ni contraseñas. Puedes exportar un respaldo desde «Mis datos».</p>
      ${S.migratedFrom ? `<div class="callout ok small">${icon("check")}<span>Encontramos tu progreso de la versión anterior (${esc(S.migratedFrom)}) y lo conservamos.</span></div>` : ""}
    </form>
  </section>
  <section class="hero compact">${scene("oficina")}<div class="hero-in"><div class="copy"><span class="eyebrow">Hecho para el Perú</span><h2>Sector privado y público, pymes, grandes empresas y municipalidades</h2><p class="muted">Normativa peruana verificada al ${VERIFIED}: RMV de S/ 1,230, feriados 2026, régimen CAS, SERVIR, SUNAFIL. Todo caso es una simulación: lo dice siempre.</p></div></div></section>`,
  mount(root){
    bindNarr(root);
    $("[data-name]", root).addEventListener("submit", e => {
      e.preventDefault();
      const v = $("#nm", root).value.trim().replace(/\s+/g, " ").slice(0, 40);
      if (!v) { $("#nm", root).focus(); return; }
      S.state.profile.name = v; S.state.profile.createdAt = S.state.profile.createdAt || Date.now(); save(); syncTools();
      render();
    });
    setTimeout(() => { const i = $("#nm", root); if (i) i.focus({ preventScroll: true }); }, 300);
  } };
}

function tour(){
  const i = Math.min(S.state.seen.tourStep || 0, TOUR.length - 1);
  const s = TOUR[i];
  const n = esc(S.state.profile.name.split(" ")[0]);
  return { section: "inicio", docTitle: "Recorrido", html: `
  <section class="hero compact">${scene("viaje")}<div class="hero-in"><div class="copy"><span class="eyebrow">Recorrido de bienvenida · ${i + 1} de ${TOUR.length}</span><h1>¡Hola, ${n}! Te muestro la plataforma</h1><p class="muted">Dura un minuto. Puedes saltarlo y volver a verlo desde «Mis datos».</p></div></div></section>
  <section class="tour">${coco(s.mood, { size: 150, cls: "anim enter" })}<div class="stack-lg"><div class="dots" aria-hidden="true">${TOUR.map((_, k) => `<i class="${k <= i ? "on" : ""}"></i>`).join("")}</div><h2>${esc(s.t)}</h2><p style="font-size:1.06rem">${esc(s.d)}</p>
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
  return { section: "inicio", docTitle: "Inicio", html: `
  <section class="hero">${scene("oficina")}<div class="hero-in"><div class="copy"><span class="eyebrow">${DESCRIPTOR}</span><h1>${greet}, ${n}.<br><span style="color:var(--brand-ink)">¿Por dónde entramos hoy?</span></h1><p class="muted" style="font-size:1.08rem">${progress ? "Tu progreso está guardado en este navegador. Puedes seguir donde lo dejaste o abrir una puerta nueva." : "Te propongo un viaje guiado por el mundo de Recursos Humanos. Si prefieres, entra directo a un puesto."}</p></div><div class="coco-slot">${coco(progress ? "feliz" : "curioso", { size: 150, cls: "anim enter" })}</div></div></section>
  <section class="doors" aria-label="Cómo empezar">
    <a class="door primary" href="#viaje"><div class="art">${scene("viaje")}</div><span class="eyebrow" style="color:inherit;opacity:.85">Recomendado</span><h2 style="color:inherit">Hacer un viaje</h2><p class="muted">Cinco estaciones: las familias de RR.HH., un puesto, tu primera mañana de trabajo, tu camino y tu brújula.</p>${st.journey.started ? `<div class="bar" style="background:rgba(255,255,255,.25);border:0"><i style="width:${jDone / jTot * 100}%;background:var(--sun)"></i></div>` : ""}<span class="go">${st.journey.started ? (jDone >= jTot ? "Ver mi viaje" : "Seguir el viaje") : "Empezar el viaje"} ${icon("arrow")}</span></a>
    <a class="door" href="#sims"><div class="art">${scene("almacen")}</div><span class="eyebrow">Para quien no quiere esperar</span><h2>Probar un puesto ya</h2><p class="muted">${C.sims.length} jornadas: practicante, planillas, selección, HRBP, relaciones laborales, municipalidad y casos urgentes.</p><span class="go">Elegir una jornada ${icon("arrow")}</span></a>
    ${cont ? `<a class="door" href="${cont.h}" data-cont><div class="art">${scene("brujula")}</div><span class="badge chip ok">Progreso guardado</span><span class="eyebrow">Continuar</span><h2>Mi recorrido</h2><p class="muted">${esc(cont.t)}</p><span class="go">Continuar ${icon("arrow")}</span></a>`
      : `<div class="door" style="cursor:default"><div class="art">${scene("brujula")}</div><span class="eyebrow">Continuar</span><h2>Mi recorrido</h2><p class="muted">Aquí aparecerá tu progreso cuando empieces. Se guarda solo en este navegador.</p><span class="go muted">Aún sin progreso</span></div>`}
  </section>
  <section class="bento" aria-label="Lo que hay dentro">
    <a class="tile w4 t2 dark" href="#medios" style="padding:0;overflow:hidden"><video src="${v.src}" poster="${v.poster}" muted playsinline preload="none" style="width:100%;height:100%;object-fit:cover;display:block;min-height:260px" aria-hidden="true" tabindex="-1" data-autoplay></video><span style="position:absolute;left:18px;bottom:16px;right:18px;display:grid;gap:6px;text-shadow:0 2px 12px rgba(0,0,0,.5)"><span class="chip sun" style="justify-self:start">${icon("film")}Video · ${v.mins}</span><b style="font-family:var(--f-display);font-size:1.4rem;color:#fff">${esc(v.n)}</b><span class="small" style="color:#E9E4FF">Míralo con subtítulos en Audio y video</span></span></a>
    <div class="tile w2"><span class="eyebrow">Tu avance</span><div class="row" style="gap:18px"><div><span class="bignum">${Object.keys(st.runs).length}</span><span class="small muted"> / ${C.sims.length} jornadas</span></div><div><span class="bignum">${exp}</span><span class="small muted"> / ${C.areas.length} áreas</span></div></div><a class="small" href="#brujula">Ver mi brújula →</a></div>
    <div class="tile w2 sun"><span class="eyebrow">Siguiente paso sugerido</span>${route[0] ? `<b>${esc(route[0].t)}</b><span class="small muted">${esc(route[0].why)}</span><a class="btn sm" href="${route[0].h}" style="justify-self:start" data-r0>Ir ${icon("arrow")}</a>` : `<span class="small">Recorriste todo. Repite jornadas para confirmar tus preferencias.</span>`}</div>
    <a class="tile w2" href="#mapa">${scene("viaje")}<span class="eyebrow">Mapa</span><h3>${C.areas.length} especialidades en 5 familias</h3><span class="small muted">Conexiones, tareas, herramientas y carrera.</span></a>
    <a class="tile w2" href="#academia">${scene("academia")}<span class="eyebrow">Academia</span><h3>${C.concepts.length} conceptos en dos niveles</h3><span class="small muted">Con diagramas, demostraciones y errores frecuentes.</span></a>
    <a class="tile w2" href="#taller">${scene("taller")}<span class="eyebrow">Taller</span><h3>${C.tools.length} tareas reales</h3><span class="small muted">Boletas, legajos, matrices, encuestas.</span></a>
    <a class="tile w2 dark" href="#retos">${scene("retos")}<span class="eyebrow" style="color:#C7C0DD">Retos</span><h3>Tres niveles de desafíos</h3><span class="small muted">Asociar, ordenar, calcular, interpretar documentos.</span></a>
    <a class="tile w2 mint" href="#sectores"><span class="eyebrow">Público y privado</span><h3>Dos mundos que no funcionan igual</h3><span class="small muted">SERVIR, regímenes 276, 728, CAS y Servicio Civil.</span></a>
    <a class="tile w2 spark" href="#cargos"><span class="eyebrow">Cargos</span><h3>${C.roles.length} puestos, de practicante a jefatura</h3><span class="small muted">Un día típico, el lado B y dilemas por nivel.</span></a>
  </section>
  <div class="callout">${icon("info")}<span>Todo lo que vivas aquí es una <b>simulación</b> construida a partir de prácticas profesionales habituales: organizaciones, personas y datos son ficticios. Las normas citadas son reales y están en <a href="#fuentes">Fuentes</a>. Es una herramienta formativa, no asesoría legal.</span></div>`,
  mount(root){
    const vid = $("[data-autoplay]", root);
    if (vid && !matchMedia("(prefers-reduced-motion: reduce)").matches) { vid.preload = "auto"; vid.loop = true; vid.play().catch(() => {}); }
    const r0 = $("[data-r0]", root); if (r0 && route[0] && route[0].pre) r0.addEventListener("click", () => { route[0].pre(); save(); });
  } };
}
