/* Empresas que inspiran: organizaciones reales con reconocimientos públicos a su gestión de personas.
   Rutas: #empresas (atlas, mapa, diagramas y fichas) y #empresa.<id> (análisis de cada organización).
   Datos en src/content/empresas.js; cada afirmación lleva su fuente. Sin logotipos ni fotos: monograma + diorama 3D. */
import { $, $$, esc } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register } from "../core/router.js";
import { icon } from "../brand/icons.js";
import { art, kusi3dImg } from "../brand/art.js";
import { empresas as E, empresa as getEmp, AREAS, RECOG } from "../content/empresas.js";

const LIST = E.list;
const AREA_IDS = Object.keys(AREAS);

/* ---------- íconos propios (mismo trazo que brand/icons.js) ---------- */
const P = {
  banco: '<path d="M3 9.5 12 4l9 5.5"/><path d="M5.5 10.5v7M9.8 10.5v7M14.2 10.5v7M18.5 10.5v7M3 20h18"/>',
  agro: '<path d="M12 21v-9"/><path d="M12 12c0-4 3-7 7-7 0 4-3 7-7 7z"/><path d="M12 15.5c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z"/>',
  pico: '<path d="M4 16a8 8 0 0 1 16 0"/><path d="M2.5 16h19v2.5h-19z"/><path d="M12 8v4.5M8.6 9.2l1 3.3M15.4 9.2l-1 3.3"/>',
  carrito: '<circle cx="9" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/><path d="M3 4h2.5l2.2 11h10.6l2-7.5H7"/>',
  corazon: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/>',
  personas: '<circle cx="8" cy="8" r="2.6"/><circle cx="16.5" cy="9" r="2.2"/><path d="M3.5 19c.6-3.4 2.4-5.2 4.5-5.2s3.9 1.8 4.5 5.2M13 18.5c.4-2.6 1.8-4 3.5-4s3.1 1.4 3.5 4"/>',
  curva: '<path d="M4 4v16h16"/><path d="m7.5 15 3.8-4 3 3 5-6"/><path d="M16 8h3.3v3.3"/>',
  medalla: '<circle cx="12" cy="15" r="5"/><path d="M8.6 3h6.8l-2.2 7.2M8.6 3l2.2 7.2"/><path d="m12 12.6.8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2z"/>'
};
const ic = (n, cls) => P[n] ? `<svg class="ic ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${P[n]}</svg>` : icon(n, cls);

const AREA_IC = { capacitacion: "academia", bienestar: "corazon", liderazgo: "flag", diversidad: "personas", desempeno: "curva", tecnologia: "sistema", experiencia: "sparkle", comunidad: "inicio", atraccion: "door" };
const SECTOR_IC = { banco: "banco", agro: "agro", engranaje: "gear", pico: "pico", carrito: "carrito", auricular: "headphones", estado: "sectores" };
const RECOG_IC = { gptw: "star", merco: "retos", abe: "medalla", mtpe: "scale", otro: "mapa" };
/* preguntas de reflexión por tipo de práctica (análisis pedagógico de VÍVELO RH) */
const ASK = {
  capacitacion: "Si tuvieras que diseñar una mentoría en tu primera empresa, ¿quién enseñaría a quién y cómo sabrías que funcionó?",
  bienestar: "¿Qué beneficio resolvería un problema real de tu equipo y cuál solo se vería bien en una presentación?",
  liderazgo: "¿Qué tres conductas observables definirían a un buen jefe en tu organización ideal?",
  diversidad: "¿Qué grupo queda fuera hoy de tus procesos de selección sin que nadie lo haya decidido a propósito?",
  desempeno: "¿Cómo combinarías metas claras con conversaciones de seguimiento que no se sientan como un examen?",
  tecnologia: "¿Qué dato de su propio desempeño le gustaría ver a un trabajador cada semana, y cuál le generaría ansiedad?",
  experiencia: "Dibuja el primer día de un trabajador nuevo: ¿en qué momento se siente bienvenido y en cuál, perdido?",
  comunidad: "¿Cómo medirías que un programa llega a las familias y no solo al trabajador?",
  atraccion: "¿Qué tendría que vivir un practicante para recomendar tu empresa a sus compañeros de clase?"
};

const areasOf = e => [...new Set(e.practices.map(p => p.area))];
const counts = () => AREA_IDS.map(a => ({ a, n: LIST.filter(e => areasOf(e).includes(a)).length })).sort((x, y) => y.n - x.n || AREA_IDS.indexOf(x.a) - AREA_IDS.indexOf(y.a));
const host = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
const ext = (u, label) => `<a class="emp-src-link" href="${esc(u)}" target="_blank" rel="noopener">${label || "Fuente"} <span class="sr-only">(se abre en una pestaña nueva)</span>${icon("ext")}</a>`;
const mono = (e, cls = "") => `<span class="emp-mono t-${e.tone} ${cls}" aria-hidden="true">${esc(e.mono)}</span>`;
const areaChip = a => `<span class="chip emp-achip">${ic(AREA_IC[a])}${esc(AREAS[a].s)}</span>`;
const allSources = e => { const m = new Map(); e.recognitions.concat(e.practices).forEach(x => { if (!m.has(x.url)) m.set(x.url, x.name || x.t); }); return [...m]; };
const totalSources = () => new Set(LIST.flatMap(e => allSources(e).map(([u]) => u)).concat(E.sources.map(s => s.u))).size;

/* ---------- mapa del Perú (contorno simplificado, proyección equirectangular) ---------- */
const W = 545, H = 760;
const px = lng => (lng + 81.8) * 40, py = lat => -lat * 40 + 12;
const PERU = [[-3.39,-80.3],[-3.5,-80.2],[-3.43,-80],[-3.8,-80.15],[-4.05,-80.45],[-4.38,-80.33],[-4.4,-79.95],[-4.48,-79.62],[-4.95,-79.42],[-5,-79.05],[-4.55,-78.75],[-4.25,-78.6],[-3.65,-78.4],[-3.3,-78.2],[-2.95,-77.85],[-2.6,-76.65],[-2.2,-76.1],[-1.55,-75.55],[-0.95,-75.4],[-0.55,-75.4],[-0.1,-75.2],[-0.2,-74.85],[-0.55,-74.4],[-1,-73.7],[-1.3,-73.3],[-1.8,-73.05],[-2.2,-72.4],[-2.4,-71.8],[-2.35,-71.3],[-2.2,-70.8],[-2.7,-70.3],[-3.2,-70.7],[-3.85,-70.4],[-4.2,-69.95],[-4.6,-70.2],[-5.1,-70.8],[-5.6,-71.8],[-6.3,-72.6],[-7.1,-73.7],[-7.5,-73.95],[-8.2,-74],[-8.8,-73.4],[-9.4,-73.2],[-9.8,-72.4],[-10,-71.4],[-10,-70.6],[-11,-70.55],[-10.95,-69.6],[-11.3,-69.2],[-12.5,-68.7],[-13.2,-68.9],[-14.2,-69.2],[-14.9,-69.3],[-15.4,-69.25],[-15.95,-69],[-16.25,-68.85],[-16.7,-69.3],[-17.3,-69.55],[-17.55,-69.5],[-18,-69.9],[-18.35,-70.38],[-17.95,-70.9],[-17.65,-71.36],[-17.2,-71.9],[-16.95,-72.3],[-16.62,-72.7],[-16.2,-73.5],[-15.85,-74.25],[-15.5,-74.8],[-15.35,-75.15],[-14.8,-75.6],[-14.25,-76],[-13.85,-76.3],[-13.4,-76.25],[-13.08,-76.4],[-12.5,-76.75],[-12.05,-77.15],[-11.5,-77.35],[-11.1,-77.6],[-10.6,-77.9],[-10.07,-78.17],[-9.5,-78.4],[-9.08,-78.6],[-8.6,-78.8],[-8.1,-79.05],[-7.7,-79.4],[-7.4,-79.57],[-6.95,-79.8],[-6.7,-79.95],[-6.3,-80.4],[-5.9,-80.95],[-5.8,-81.1],[-5.45,-80.9],[-5.1,-81.12],[-4.68,-81.33],[-4.25,-81.2],[-4.1,-81.05],[-3.75,-80.75],[-3.55,-80.45]];
const PERU_D = "M" + PERU.map(([la, lo]) => `${px(lo).toFixed(1)} ${py(la).toFixed(1)}`).join("L") + "Z";
const LIMA = [px(-77.043), py(-12.046)];

/* posiciones de los puntos: las sedes en Lima se abren en abanico sobre el océano, unidas a la ciudad por un hilo */
function layout(){
  const lima = LIST.filter(e => e.city === "Lima");
  const pos = {};
  const a0 = 110, a1 = 222, r = 132;
  lima.forEach((e, i) => {
    const t = (a0 + (a1 - a0) * (lima.length > 1 ? i / (lima.length - 1) : .5)) * Math.PI / 180;
    pos[e.id] = { x: LIMA[0] + r * Math.cos(t), y: LIMA[1] + r * Math.sin(t), lima: true };
  });
  LIST.filter(e => e.city !== "Lima").forEach(e => { pos[e.id] = { x: px(e.coords[1]), y: py(e.coords[0]) }; });
  return pos;
}
const POS = layout();

function mapSvg(focusId){
  const grat = [];
  for (let lo = -80; lo <= -68; lo += 4) grat.push(`<path d="M${px(lo)} 0V${H}"/>`);
  for (let la = -2; la >= -18; la -= 4) grat.push(`<path d="M0 ${py(la)}H${W}"/>`);
  const lines = LIST.filter(e => POS[e.id].lima).map(e => `<path class="lead" data-for="${e.id}" d="M${LIMA[0]} ${LIMA[1]}L${POS[e.id].x.toFixed(1)} ${POS[e.id].y.toFixed(1)}"/>`).join("");
  const others = LIST.filter(e => !POS[e.id].lima).map(e => `<circle class="halo" data-for="${e.id}" cx="${POS[e.id].x.toFixed(1)}" cy="${POS[e.id].y.toFixed(1)}" r="20"/>`).join("");
  const label = (x, y, t, cls = "") => `<text x="${x}" y="${y}" class="${cls}">${t}</text>`;
  return `<svg class="atlas-svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="atlas-svg-t">
    <title id="atlas-svg-t">Mapa del Perú con la ubicación aproximada de las organizaciones</title>
    <defs><pattern id="emp-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V7" class="hatch"/></pattern></defs>
    <g class="grat">${grat.join("")}</g>
    ${focusId ? "" : `<g class="wave"><path d="M20 610c18-6 30 6 48 0s30 6 48 0"/><path d="M34 660c18-6 30 6 48 0s30 6 48 0"/><path d="M58 300c18-6 30 6 48 0s30 6 48 0"/></g>`}
    <path class="land" d="${PERU_D}"/><path class="land-hatch" d="${PERU_D}"/>
    <ellipse class="lake" cx="${px(-69.45)}" cy="${py(-15.8)}" rx="15" ry="8" transform="rotate(-38 ${px(-69.45)} ${py(-15.8)})"/>
    ${label(40, 480, "OCÉANO PACÍFICO", "sea")}
    ${label(px(-79.6), py(-1.6), "ECUADOR", "ctry")}${label(px(-72.6), py(-0.9), "COLOMBIA", "ctry")}${label(px(-71.2), py(-6.2), "BRASIL", "ctry")}${label(px(-69.6), py(-12.6), "BOLIVIA", "ctry")}${label(px(-70.6), py(-18.9) - 2, "CHILE", "ctry")}
    ${label(px(-74.2), py(-5.6), "Amazonía", "zone")}${label(px(-74.6), py(-13.3), "Andes", "zone")}
    ${lines}${others}
    <circle class="city" cx="${LIMA[0]}" cy="${LIMA[1]}" r="5"/>${label(LIMA[0] + 10, LIMA[1] + 4, "Lima", "cityname")}
    ${focusId && !POS[focusId].lima ? "" : ""}
  </svg>`;
}

function pin(e){
  const p = POS[e.id];
  return `<a class="pin" href="#empresa.${e.id}" data-id="${e.id}" data-areas="${areasOf(e).join(" ")}" style="left:${(p.x / W * 100).toFixed(2)}%;top:${(p.y / H * 100).toFixed(2)}%" aria-label="${esc(e.n)} · ${esc(e.sector)} · ${esc(e.city)}. Ver análisis">${mono(e)}</a>`;
}

function cardPreview(e){
  if (!e) return `<div class="atlas-empty">${kusi3dImg("curioso", { size: 120, decorative: true })}<p><b>Explora el mapa.</b> Pasa el cursor o navega con <kbd>Tab</kbd> por los puntos para ver cada organización. Las sedes en Lima se abren en abanico sobre el océano.</p></div>`;
  return `<div class="atlas-pv">
    <div class="row" style="gap:14px;flex-wrap:nowrap">${mono(e, "lg")}<div class="stack" style="gap:2px"><span class="eyebrow">${ic(SECTOR_IC[e.sectorIcon])}${esc(e.sector)}</span><h3>${esc(e.n)}</h3></div></div>
    <p class="small muted">${icon("pin")} ${esc(e.region)}</p>
    <ul class="pv-rec">${e.recognitions.map(r => `<li>${ic(RECOG_IC[r.k])}<span><b>${esc(RECOG[r.k].n)} · ${r.year}</b> ${esc(r.name)}</span></li>`).join("")}</ul>
    <div class="row" style="gap:6px">${areasOf(e).map(areaChip).join("")}</div>
    <a class="btn ghost sm" href="#empresa.${e.id}">Ver análisis ${icon("arrow")}</a>
  </div>`;
}

function card(e){
  return `<article class="emp-card" data-id="${e.id}" data-areas="${areasOf(e).join(" ")}">
    <a class="emp-card-a" href="#empresa.${e.id}" aria-label="${esc(e.n)}: ver análisis">
      <figure class="emp-art">${art(e.scene, { sq: true, decorative: true })}${mono(e, "lg")}<span class="emp-sector-ic" aria-hidden="true">${ic(SECTOR_IC[e.sectorIcon])}</span></figure>
      <div class="emp-card-b">
        <span class="eyebrow">${esc(e.sector)}</span>
        <h3>${esc(e.n)}</h3>
        <p class="xs muted emp-where">${icon("pin")} ${esc(e.region)}</p>
        <ul class="emp-rec">${e.recognitions.map(r => `<li><span class="yr">${r.year}</span><span>${esc(RECOG[r.k].n)}</span></li>`).join("")}</ul>
        <div class="row emp-chips">${areasOf(e).map(areaChip).join("")}</div>
        <span class="emp-more">Ver análisis ${icon("arrow")}</span>
      </div>
    </a>
  </article>`;
}

function bars(){
  const c = counts(), max = LIST.length;
  return `<figure class="emp-fig emp-bars"><figcaption><span class="eyebrow">Diagrama 1</span><b>¿Cuántas organizaciones aplican cada tipo de práctica?</b><span class="xs muted">Cuenta las prácticas documentadas en esta selección (${LIST.length} organizaciones). Toca una barra para filtrar.</span></figcaption>
    <ol class="bar-list">${c.map(({ a, n }) => `<li><button type="button" class="bar-row" data-f="${a}" aria-pressed="false"><span class="bar-lab">${ic(AREA_IC[a])}${esc(AREAS[a].n)}</span><span class="bar-track" aria-hidden="true"><i style="--w:${(n / max * 100).toFixed(1)}%"></i></span><span class="bar-n"><b>${n}</b><span class="sr-only"> de ${max} organizaciones</span><span aria-hidden="true">/${max}</span></span></button></li>`).join("")}</ol>
  </figure>`;
}

function matrix(){
  const order = counts().map(x => x.a);
  return `<figure class="emp-fig emp-matrix"><figcaption><span class="eyebrow">Diagrama 2</span><b>Quién hace qué</b><span class="xs muted">Cada punto es un tipo de práctica documentado; el tamaño crece si hay más de una práctica del mismo tipo.</span></figcaption>
    <div class="mx-grid" role="table" aria-label="Organizaciones por tipo de práctica" style="--cols:${order.length}">
      <div class="mx-row mx-head" role="row"><span role="columnheader" class="mx-name"><span class="sr-only">Organización</span></span>${order.map(a => `<span role="columnheader" class="mx-h" title="${esc(AREAS[a].n)}">${ic(AREA_IC[a])}<span class="sr-only">${esc(AREAS[a].n)}</span></span>`).join("")}</div>
      ${LIST.map(e => `<div class="mx-row" role="row" data-id="${e.id}" data-areas="${areasOf(e).join(" ")}"><span role="rowheader" class="mx-name"><a href="#empresa.${e.id}">${esc(e.n)}</a></span>${order.map(a => { const n = e.practices.filter(p => p.area === a).length; return `<span role="cell" class="mx-c" data-a="${a}">${n ? `<i class="dot n${Math.min(n, 2)}" aria-hidden="true"></i><span class="sr-only">${n} ${n > 1 ? "prácticas" : "práctica"} de ${esc(AREAS[a].s)}</span>` : `<span class="sr-only">sin práctica documentada de ${esc(AREAS[a].s)}</span>`}</span>`; }).join("")}</div>`).join("")}
    </div>
    <ul class="mx-legend xs muted">${order.map(a => `<li>${ic(AREA_IC[a])}${esc(AREAS[a].s)}</li>`).join("")}</ul>
  </figure>`;
}

function filterBar(f){
  const c = Object.fromEntries(counts().map(x => [x.a, x.n]));
  return `<div class="emp-filter" role="group" aria-label="Filtrar por tipo de práctica">
    <button type="button" class="fchip" data-f="" aria-pressed="${!f}">Todas <span>${LIST.length}</span></button>
    ${AREA_IDS.filter(a => c[a]).map(a => `<button type="button" class="fchip" data-f="${a}" aria-pressed="${f === a}">${ic(AREA_IC[a])}${esc(AREAS[a].s)} <span>${c[a]}</span></button>`).join("")}
  </div>`;
}

/* ---------- #empresas ---------- */
register("empresas", () => {
  const f = AREAS[S.state.prefs.empf] ? S.state.prefs.empf : "";
  const nRec = LIST.reduce((s, e) => s + e.recognitions.length, 0), nPr = LIST.reduce((s, e) => s + e.practices.length, 0);
  const top = counts().slice(0, 2).map(x => AREAS[x.a].n.toLowerCase());
  const regions = new Set(LIST.map(e => e.city)).size;
  return { section: "empresas", docTitle: "Empresas que inspiran", html: `
  <section class="hero emp-hero">${art("corporativo", { eager: true })}<div class="hero-in"><div class="copy">
    <span class="eyebrow">Empresas que inspiran · casos reales</span>
    <h1>Dónde las personas <em>crecen</em></h1>
    <p class="lead">${LIST.length} organizaciones que operan en el Perú y que fueron reconocidas por cómo gestionan a su gente. Qué hacen, cómo lo hacen y qué puedes aprender de cada una, con la fuente de cada dato.</p>
    <dl class="emp-stats"><div><dt>Organizaciones</dt><dd>${LIST.length}</dd></div><div><dt>Reconocimientos</dt><dd>${nRec}</dd></div><div><dt>Prácticas</dt><dd>${nPr}</dd></div><div><dt>Fuentes</dt><dd>${totalSources()}</dd></div></dl>
  </div></div></section>

  <div class="callout sun emp-disc">${icon("info")}<span><b>A diferencia de las Jornadas, aquí todo es real y viene de fuentes públicas.</b> ${esc(E.disclaimer)} <a href="#emp-fuentes">Ver fuentes generales</a>.</span></div>

  <section class="emp-sec" aria-labelledby="atlas-h">
    <header class="sec-head"><h2 id="atlas-h">Un mapa de <em>buenas prácticas</em></h2><p>De la costa norte agroexportadora al sur financiero y a la sierra minera: ${regions} zonas del país. Filtra por tipo de práctica y observa qué organizaciones la aplican.</p></header>
    ${filterBar(f)}
    <p class="sr-only" aria-live="polite" data-live></p>
    <div class="atlas">
      <div class="atlas-map">${mapSvg()}${LIST.map(pin).join("")}</div>
      <aside class="atlas-card card" aria-live="polite" data-pv>${cardPreview(null)}</aside>
    </div>
  </section>

  <section class="emp-sec" aria-labelledby="common-h">
    <header class="sec-head"><h2 id="common-h">Qué tienen <em>en común</em></h2><p>Lo que más se repite en esta selección: ${esc(top[0])} y ${esc(top[1])}. Ninguna organización destaca por una sola cosa: combinan varias prácticas que se refuerzan entre sí.</p></header>
    <div class="emp-common">${bars()}${matrix()}</div>
    <div class="emp-kusi">${kusi3dImg("pensando", { size: 132, decorative: true })}<p><span class="tag ped">Análisis pedagógico</span> Los rankings premian la <b>coherencia</b>: un beneficio aislado no mueve el clima, pero un sistema que forma, cuida, reconoce y mide sí. Cuando estudies un caso, busca la conexión entre prácticas, no la práctica estrella.</p></div>
  </section>

  <section class="emp-sec" aria-labelledby="cards-h">
    <header class="sec-head"><h2 id="cards-h">${LIST.length} organizaciones, <em>${LIST.length} lecciones</em></h2><p>Cada ficha resume reconocimientos y prácticas documentadas. Las imágenes son dioramas 3D originales de VÍVELO RH que representan el sector, no las instalaciones de la empresa.</p></header>
    <div class="emp-cards">${LIST.map(card).join("")}</div>
  </section>

  <section class="emp-sec card emp-sources" id="emp-fuentes" aria-labelledby="src-h">
    <h2 id="src-h">Fuentes generales</h2>
    <p class="small muted">Consultadas el ${esc(E.consulted)}. Cada ficha incluye además sus propias fuentes. Qué mide cada reconocimiento:</p>
    <dl class="emp-recdefs">${Object.entries(RECOG).filter(([k]) => k !== "otro").map(([k, r]) => `<div>${ic(RECOG_IC[k])}<dt>${esc(r.n)}</dt><dd class="small muted">${esc(r.d)}</dd></div>`).join("")}</dl>
    <ul class="emp-srclist">${E.sources.map(s => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}<span class="sr-only"> (se abre en una pestaña nueva)</span></a> <span class="xs muted">${esc(host(s.u))}</span></li>`).join("")}</ul>
  </section>`,
  mount(root){ mountIndex(root, f); } };
});

function mountIndex(root, f0){
  const pv = $("[data-pv]", root), live = $("[data-live]", root);
  let cur = f0;
  const show = id => { pv.innerHTML = cardPreview(getEmp(id)); $$(".pin", root).forEach(p => p.classList.toggle("on", p.dataset.id === id)); $$(".lead,.halo", root).forEach(l => l.classList.toggle("on", l.dataset.for === id)); };
  $$(".pin", root).forEach(p => { p.addEventListener("mouseenter", () => show(p.dataset.id)); p.addEventListener("focus", () => show(p.dataset.id)); });
  const apply = (f, announce) => {
    cur = f;
    const has = el => !f || (el.dataset.areas || "").split(" ").includes(f);
    $$(".pin,.emp-card,.mx-row[data-id]", root).forEach(el => el.classList.toggle("dim", !has(el)));
    $$(".lead,.halo", root).forEach(l => l.classList.toggle("dim", !!f && !(getEmp(l.dataset.for) && areasOf(getEmp(l.dataset.for)).includes(f))));
    $$(".mx-c", root).forEach(c => c.classList.toggle("hl", !!f && c.dataset.a === f));
    $$("[data-f]", root).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.f === f)));
    if (announce) { const n = LIST.filter(e => !f || areasOf(e).includes(f)).length; live.textContent = f ? `${n} organizaciones con prácticas de ${AREAS[f].n}` : `Mostrando las ${LIST.length} organizaciones`; }
    try { S.state.prefs.empf = f; save(); } catch (e) { /* sin almacenamiento: el filtro funciona igual */ }
  };
  $$("[data-f]", root).forEach(b => b.addEventListener("click", () => { const f = b.dataset.f; apply(cur === f && b.classList.contains("bar-row") ? "" : f, true); if (b.classList.contains("bar-row")) $(".emp-filter", root).scrollIntoView({ behavior: "smooth", block: "nearest" }); }));
  apply(f0, false);
}

/* ---------- #empresa.<id> ---------- */
register("empresa", id => {
  const e = getEmp(id);
  if (!e) return { section: "empresas", docTitle: "Organización no encontrada", html: `<div class="empty"><b>No encontramos esa organización.</b><a href="#empresas">Volver a Empresas que inspiran</a></div>` };
  const i = LIST.indexOf(e), prev = LIST[(i - 1 + LIST.length) % LIST.length], next = LIST[(i + 1) % LIST.length];
  const ar = areasOf(e);
  const kin = LIST.filter(x => x !== e && areasOf(x).some(a => ar.includes(a))).slice(0, 4);
  const src = allSources(e);
  const askA = ar[0];
  return { section: "empresas", docTitle: e.n + " · Empresas que inspiran", html: `
  <nav class="emp-crumb" aria-label="Ruta"><a href="#empresas">${icon("back")} Empresas que inspiran</a><span aria-hidden="true">/</span><span>${esc(e.n)}</span></nav>

  <section class="hero emp-dhero">${art(e.scene, { eager: true })}<div class="hero-in"><div class="copy">
    <div class="row" style="gap:18px;flex-wrap:nowrap">${mono(e, "xl")}<span class="eyebrow">${ic(SECTOR_IC[e.sectorIcon])}${esc(e.sector)}</span></div>
    <h1>${esc(e.n)}</h1>
    <p class="muted">${icon("pin")} ${esc(e.region)}</p>
    <div class="row" style="gap:6px">${ar.map(areaChip).join("")}</div>
  </div></div></section>

  <section class="emp-sec" aria-labelledby="rec-h">
    <header class="sec-head"><h2 id="rec-h">Reconocida <em>por</em></h2><p>${e.recognitions.length} ${e.recognitions.length > 1 ? "reconocimientos" : "reconocimiento"} documentado${e.recognitions.length > 1 ? "s" : ""}. Haz clic en «Fuente» para leer la nota original.</p></header>
    <ul class="emp-medals">${e.recognitions.map(r => `<li class="medal">
      <span class="medal-ic">${ic(RECOG_IC[r.k])}</span>
      <span class="medal-yr numeral">${r.year}</span>
      <div class="stack" style="gap:6px"><b>${esc(RECOG[r.k].n)}</b><span class="small">${esc(r.name)}</span><span class="xs muted">${esc(RECOG[r.k].d)}</span>${ext(r.url, "Fuente · " + esc(host(r.url)))}</div>
    </li>`).join("")}</ul>
  </section>

  <section class="emp-sec" aria-labelledby="pr-h">
    <header class="sec-head"><h2 id="pr-h">Cómo potencia <em>a su gente</em></h2><p>Prácticas descritas en fuentes públicas, con redacción prudente: es lo que la fuente dice, no una auditoría de VÍVELO RH.</p></header>
    <ol class="emp-tl">${e.practices.map((p, k) => `<li class="tl-i a-${p.area}">
      <span class="tl-node" aria-hidden="true">${ic(AREA_IC[p.area])}</span>
      <article class="tl-card card">
        <div class="row between"><span class="chip emp-achip">${ic(AREA_IC[p.area])}${esc(AREAS[p.area].n)}</span><span class="xs muted">Práctica ${k + 1} de ${e.practices.length}</span></div>
        <h3>${esc(p.t)}</h3>
        <p>${esc(p.d)}</p>
        ${ext(p.url, "Fuente · " + esc(host(p.url)))}
      </article>
    </li>`).join("")}</ol>
  </section>

  <section class="emp-learn" aria-labelledby="learn-h">
    <div class="learn-k">${kusi3dImg("pensando", { size: 200, decorative: true })}</div>
    <div class="stack-lg">
      <span class="tag ped">Análisis pedagógico de VÍVELO RH</span>
      <h2 id="learn-h">Qué puedes <em>aprender</em></h2>
      <p class="lead">${esc(e.learn)}</p>
      <div class="learn-q">${icon("question")}<p><b>Para pensar:</b> ${esc(ASK[askA])}</p></div>
    </div>
  </section>

  ${kin.length ? `<section class="emp-sec" aria-labelledby="kin-h"><header class="sec-head"><h2 id="kin-h">Compárala <em>con</em></h2><p>Organizaciones de esta selección que comparten al menos un tipo de práctica.</p></header>
    <div class="emp-kin">${kin.map(x => `<a class="kin" href="#empresa.${x.id}">${mono(x)}<span><b>${esc(x.n)}</b><span class="xs muted">${esc(x.sector)}</span><span class="xs">${areasOf(x).filter(a => ar.includes(a)).map(a => esc(AREAS[a].s)).join(" · ")}</span></span>${icon("arrow")}</a>`).join("")}</div></section>` : ""}

  <section class="emp-sec card emp-sources" aria-labelledby="dsrc-h">
    <h2 id="dsrc-h">Fuentes de esta ficha</h2>
    <p class="small muted">Consultadas el ${esc(E.consulted)}. ${esc(E.disclaimer)}</p>
    <ol class="emp-srclist">${src.map(([u, t]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}<span class="sr-only"> (se abre en una pestaña nueva)</span></a> <span class="xs muted">${esc(host(u))}</span></li>`).join("")}</ol>
  </section>

  <nav class="emp-pn" aria-label="Otras organizaciones">
    <a href="#empresa.${prev.id}" class="pn">${icon("back")}<span><span class="xs muted">Anterior</span><b>${esc(prev.n)}</b></span></a>
    <a href="#empresas" class="pn mid">${ic("mapa")}<span><b>Ver todas</b></span></a>
    <a href="#empresa.${next.id}" class="pn nx"><span><span class="xs muted">Siguiente</span><b>${esc(next.n)}</b></span>${icon("arrow")}</a>
  </nav>` };
});
