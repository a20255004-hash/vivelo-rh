/* Audio y video: video animado real con subtítulos, cápsulas animadas narrables y estado honesto
   de cada recurso (listo / voz sintética / pendiente de grabación humana). */
import { $, $$, esc } from "../core/util.js";
import { register } from "../core/router.js";
import { C } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg } from "../brand/art.js";
import { coco } from "../brand/coco.js";
import { narr, bindNarr, ttsAvailable, stopNarr } from "../core/narrator.js";

const STATUS = { listo: ["ready", "Listo"], sintetica: ["synth", "Voz sintética del navegador"], grabado: ["ready", "Grabación humana"], pendiente: ["pend", "Pendiente de grabación humana"] };
const MOOD = ["curioso", "pensando", "feliz", "preocupado", "animo", "celebra"];

/* ---------- videoteca ---------- */
// Etiqueta legible de un enlace relacionado (#concepto.x, #sim.x, #tool.x o una sección).
const SECTION = { mapa: "Mapa de especialidades", viaje: "Tu viaje", cargos: "Cargos", sectores: "Público y privado", academia: "Academia", taller: "Taller" };
function relLabel(h){
  const [k, id] = h.replace(/^#/, "").split(".");
  if (k === "concepto") { const c = C.concepts.find(x => x.id === id); return c && ["academia", "Academia: " + c.n]; }
  if (k === "sim") { const x = C.sims.find(y => y.id === id); return x && ["sims", "Jornada: " + x.title]; }
  if (k === "tool") { const x = C.tools.find(y => y.id === id); return x && ["taller", "Taller: " + x.n]; }
  return SECTION[k] && ["arrow", SECTION[k]];
}
const related = v => (v.related || []).map(h => [h, relLabel(h)]).filter(([, l]) => l).map(([h, [ic, l]]) => `<a class="chip" href="${h}">${icon(ic)}${esc(l)}</a>`).join("");
const poster = (v, cls = "") => `<picture>${v.posterWebp ? `<source srcset="${v.posterWebp}" type="image/webp">` : ""}<img class="${cls}" src="${v.poster}" alt="" width="1280" height="720" loading="lazy" decoding="async"></picture>`;
const featInfo = (v, i, n) => `<div class="row between" style="gap:10px 16px;flex-wrap:wrap"><span class="eyebrow">Video ${i + 1} de ${n} · ${esc(v.mins)}</span><span class="row" style="gap:8px"><span class="status-pill ${STATUS[v.status][0]}">${icon("check")}${STATUS[v.status][1]}</span><span class="chip">Con subtítulos</span></span></div>
  <h2 data-vt tabindex="-1">${esc(v.n)}</h2><p class="muted" style="margin:0;max-width:62ch">${esc(v.d)}</p>${v.related && v.related.length ? `<div class="row" style="gap:8px;flex-wrap:wrap"><span class="small muted">Ponlo en práctica:</span>${related(v)}</div>` : ""}`;
const VT_CSS = `<style>
.vt-feat{display:grid;gap:18px}
.vt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:22px}
.vt-card{all:unset;box-sizing:border-box;display:grid;gap:10px;align-content:start;cursor:pointer;border-radius:var(--r);min-width:0}
.vt-card:focus-visible{outline:2px solid var(--brand);outline-offset:4px}
.vt-thumb{position:relative;display:block;aspect-ratio:16/9;border-radius:var(--r);overflow:hidden;background:var(--paper-2);border:1px solid var(--line)}
.vt-thumb img{display:block;width:100%;height:100%;object-fit:cover;transition:transform var(--t) var(--ease)}
.vt-card:hover .vt-thumb img{transform:scale(1.03)}
.vt-thumb .ic{position:absolute;left:12px;bottom:12px;width:34px;height:34px;padding:8px;border-radius:50%;background:var(--ink);color:var(--paper)}
.vt-dur{position:absolute;right:10px;bottom:10px;font:600 .75rem/1 var(--f-body);letter-spacing:.06em;font-variant-numeric:tabular-nums;padding:5px 8px;border-radius:3px;background:rgba(14,13,12,.78);color:#F5F0E8}
.vt-card[aria-current="true"] .vt-thumb{border-color:var(--brand);box-shadow:0 0 0 2px var(--brand)}
.vt-card[aria-current="true"] .vt-now{display:inline-flex}
.vt-now{display:none}
.vt-card h3{margin:0;font-size:1.12rem}
</style>`;

function capsule(k){
  return `<article class="capsule" id="cap-${k.id}" data-cap="${k.id}"><div class="stage" aria-live="polite">${art("academia")}<div style="position:absolute;inset:0;background:color-mix(in srgb,var(--card) 82%,transparent)"></div>${k.steps.map((s, i) => `<div class="frame ${i === 0 ? "on" : ""}" data-fr="${i}"><div class="row" style="gap:20px;justify-content:center;flex-wrap:nowrap">${coco(MOOD[i % MOOD.length], { size: 120, cls: "anim", label: false })}<div class="stack" style="max-width:52ch"><span class="eyebrow">Paso ${i + 1} de ${k.steps.length} · ${esc(s.k)}</span><div class="demo"><span class="out">${esc(s.big)}</span></div></div></div></div>`).join("")}</div>
  <div class="ctrl"><button type="button" class="iconbtn" data-c="prev" aria-label="Paso anterior">${icon("back")}</button><button type="button" class="btn brand sm" data-c="play">${icon("play")}Reproducir</button><button type="button" class="iconbtn" data-c="next" aria-label="Paso siguiente">${icon("arrow")}</button><span class="prog"><i></i></span><label class="xs muted row" style="gap:6px"><input type="checkbox" data-c="voice" ${ttsAvailable() ? "checked" : "disabled"}> Narrar con voz sintética</label></div>
  <p class="cap" data-capt>${esc(k.steps[0].t)}</p></article>`;
}
function bindCapsule(el, k){
  let i = 0, timer = null, playing = false;
  const show = j => { i = (j + k.steps.length) % k.steps.length; $$(".frame", el).forEach(f => f.classList.toggle("on", +f.dataset.fr === i)); $("[data-capt]", el).textContent = k.steps[i].t; $(".prog i", el).style.width = ((i + 1) / k.steps.length * 100) + "%"; };
  const speakStep = () => new Promise(res => {
    const voice = $('[data-c="voice"]', el);
    if (!voice || !voice.checked || !ttsAvailable()) { timer = setTimeout(res, 4200); return; }
    const u = new SpeechSynthesisUtterance(k.steps[i].k + ". " + k.steps[i].t); u.lang = "es-PE"; u.onend = () => res(); u.onerror = () => res(); speechSynthesis.speak(u);
  });
  const stop = () => { playing = false; clearTimeout(timer); if (ttsAvailable()) speechSynthesis.cancel(); const b = $('[data-c="play"]', el); b.innerHTML = icon("play") + "Reproducir"; };
  const loop = async () => { while (playing) { await speakStep(); if (!playing) break; if (i === k.steps.length - 1) { stop(); break; } show(i + 1); } };
  $('[data-c="play"]', el).addEventListener("click", () => { if (playing) { stop(); return; } stopNarr(); playing = true; $('[data-c="play"]', el).innerHTML = icon("pause") + "Pausar"; if (i === k.steps.length - 1) show(0); loop(); });
  $('[data-c="prev"]', el).addEventListener("click", () => { stop(); show(i - 1); });
  $('[data-c="next"]', el).addEventListener("click", () => { stop(); show(i + 1); });
  show(0);
}

register("medios", id => {
  const M = C.media;
  return { section: "medios", docTitle: "Audio y video", html: `
  <section class="hero compact">${art("reunion")}<div class="hero-in"><div class="copy"><span class="eyebrow">Audio y video</span><h1>Mira, escucha y lee</h1><p class="muted">Seis videos animados con subtítulos, cápsulas visuales paso a paso y narración. Aquí verás siempre qué recurso está terminado y cuál está pendiente.</p></div></div></section>
  ${VT_CSS}<section class="stack-lg" aria-labelledby="vt-h"><div class="stack"><span class="eyebrow">Videoteca</span><h2 id="vt-h" style="margin:0">Videos explicativos</h2><p class="small muted" style="margin:0;max-width:68ch">Animaciones breves hechas con las ilustraciones y la tipografía de VÍVELO RH. <b>No tienen voz ni música</b>: todo se lee en pantalla y cada video trae subtítulos en español. Los casos y las cifras son ejemplos; todo caso es una simulación.</p></div>
    <div class="vt-feat" id="vt-feat"><div class="video-card"><video controls preload="metadata" playsinline poster="${M.video[0].poster}" data-vid="${M.video[0].id}"><source src="${M.video[0].src}" type="video/mp4">${M.video[0].webm ? `<source src="${M.video[0].webm}" type="video/webm">` : ""}<track kind="subtitles" srclang="es" label="Español" default>Tu navegador no reproduce video. <a href="${M.video[0].src}">Descárgalo aquí</a>.</video></div><div class="stack" data-vinfo>${featInfo(M.video[0], 0, M.video.length)}</div></div>
    <div class="vt-grid" role="list" aria-label="Todos los videos">${M.video.map((v, i) => `<div role="listitem"><button type="button" class="vt-card" data-pick="${v.id}" aria-current="${i === 0}" aria-label="Ver «${esc(v.n)}», ${esc(v.mins)} minutos, con subtítulos"><span class="vt-thumb">${poster(v)}${icon("play")}<span class="vt-dur">${esc(v.mins)}</span></span><span class="row" style="gap:6px;flex-wrap:wrap"><span class="chip">Con subtítulos</span><span class="chip st vt-now">Reproduciendo</span></span><h3>${esc(v.n)}</h3><span class="small muted">${esc(v.d)}</span></button></div>`).join("")}</div>
    <div class="callout">${icon("mic")}<span class="small"><b>Sobre el audio de los videos.</b> Son animaciones sin narración humana ni voz sintética. Las grabaciones con voz humana de los guiones siguen pendientes (ver el estado de los recursos de audio, más abajo).</span></div></section>
  <section class="stack-lg"><div class="stack"><h2>Cápsulas animadas</h2><p class="small muted">Secuencias animadas que explican un proceso paso a paso. Puedes avanzar a tu ritmo o reproducirlas con narración sintética (el texto de cada paso aparece siempre debajo).</p></div>${M.capsules.map(k => `<div class="stack"><h3>${esc(k.n)}</h3><p class="small muted">${esc(k.d)}</p>${capsule(k)}</div>`).join("")}</section>
  <section class="card stack"><h2>Narraciones disponibles</h2>${narr("intro-m", M.scripts.intro, { title: "Bienvenida de Kusi" })}${narr("tour-m", M.scripts.tour, { title: "Recorrido por la plataforma" })}</section>
  <section class="card stack"><h2>Estado de los recursos de audio</h2><div class="callout warn">${icon("mic")}<span><b>Sobre las voces.</b> Hoy la narración usa la <b>voz sintética de tu navegador</b>: no es una grabación humana y no la presentamos como tal. Los guiones están listos para grabarse con una voz humana cálida y autorizada; cuando existan los archivos, el reproductor los usará automáticamente.</span></div><div class="table-wrap"><table><thead><tr><th>Recurso</th><th>Estado</th></tr></thead><tbody>${M.audio.map(a => `<tr><td><b>${esc(a.n)}</b>${a.d ? `<br><span class="small muted">${esc(a.d)}</span>` : ""}</td><td><span class="status-pill ${STATUS[a.status][0]}">${STATUS[a.status][1]}</span></td></tr>`).join("")}</tbody></table></div>${ttsAvailable() ? "" : `<p class="small muted">Tu navegador no ofrece síntesis de voz: verás solo las transcripciones.</p>`}</section>`,
  mount(root){
    bindNarr(root);
    // Videoteca: un reproductor destacado y tarjetas que cargan cada video en él.
    // Los subtítulos (WebVTT) se guardan como .txt y se cargan como pista con el tipo correcto.
    const vid = $("#vt-feat video", root), info = $("[data-vinfo]", root);
    const vttCache = {};
    const loadTrack = v => {
      $$("track", vid).forEach(t => t.remove());
      const tr = document.createElement("track"); Object.assign(tr, { kind: "subtitles", srclang: "es", label: "Español", default: true }); vid.appendChild(tr);
      (vttCache[v.id] ||= fetch(v.vtt).then(r => r.ok ? r.text() : Promise.reject()).then(t => URL.createObjectURL(new Blob([t], { type: "text/vtt" }))))
        .then(u => { tr.src = u; if (vid.textTracks[0]) vid.textTracks[0].mode = "showing"; }).catch(() => {});
    };
    const pick = (vidId, play) => {
      const i = M.video.findIndex(x => x.id === vidId); if (i < 0) return; const v = M.video[i];
      $$("[data-pick]", root).forEach(b => b.setAttribute("aria-current", String(b.dataset.pick === v.id)));
      if (vid.dataset.vid !== v.id) { vid.pause(); vid.dataset.vid = v.id; vid.poster = v.poster; const [s1, s2] = $$("source", vid); s1.src = v.src; if (s2 && v.webm) s2.src = v.webm; vid.load(); loadTrack(v); info.innerHTML = featInfo(v, i, M.video.length); }
      if (play) { $("#vt-feat", root).scrollIntoView({ behavior: "smooth", block: "start" }); vid.play().catch(() => {}); $("[data-vt]", info).focus({ preventScroll: true }); }
    };
    loadTrack(M.video[0]);
    $$("[data-pick]", root).forEach(b => b.addEventListener("click", () => { stopNarr(); pick(b.dataset.pick, true); }));
    vid.addEventListener("play", () => stopNarr());
    $$("[data-cap]", root).forEach(el => bindCapsule(el, M.capsules.find(k => k.id === el.dataset.cap)));
    if (id && id.startsWith("v-")) { pick(id.slice(2), false); setTimeout(() => $("#vt-feat", root).scrollIntoView({ behavior: "smooth", block: "start" }), 300); }
    else if (id) { const t = $("#cap-" + id, root); if (t) setTimeout(() => t.scrollIntoView({ behavior: "smooth", block: "center" }), 300); }
  } };
});
