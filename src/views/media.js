/* Audio y video: video animado real con subtítulos, cápsulas animadas narrables y estado honesto
   de cada recurso (listo / voz sintética / pendiente de grabación humana). */
import { $, $$, esc } from "../core/util.js";
import { register } from "../core/router.js";
import { C } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { coco } from "../brand/coco.js";
import { narr, bindNarr, ttsAvailable, stopNarr } from "../core/narrator.js";

const STATUS = { listo: ["ready", "Listo"], sintetica: ["synth", "Voz sintética del navegador"], grabado: ["ready", "Grabación humana"], pendiente: ["pend", "Pendiente de grabación humana"] };
const MOOD = ["curioso", "pensando", "feliz", "preocupado", "animo", "celebra"];

function capsule(k){
  return `<article class="capsule" id="cap-${k.id}" data-cap="${k.id}"><div class="stage" aria-live="polite">${scene("academia")}<div style="position:absolute;inset:0;background:color-mix(in srgb,var(--card) 82%,transparent)"></div>${k.steps.map((s, i) => `<div class="frame ${i === 0 ? "on" : ""}" data-fr="${i}"><div class="row" style="gap:20px;justify-content:center;flex-wrap:nowrap">${coco(MOOD[i % MOOD.length], { size: 120, cls: "anim", label: false })}<div class="stack" style="max-width:52ch"><span class="eyebrow">Paso ${i + 1} de ${k.steps.length} · ${esc(s.k)}</span><div class="demo"><span class="out">${esc(s.big)}</span></div></div></div></div>`).join("")}</div>
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
  <section class="hero compact">${scene("reunion")}<div class="hero-in"><div class="copy"><span class="eyebrow">Audio y video</span><h1>Mira, escucha y lee</h1><p class="muted">Video animado con subtítulos, cápsulas visuales paso a paso y narración. Aquí verás siempre qué recurso está terminado y cuál está pendiente.</p></div></div></section>
  ${M.video.map(v => `<section class="stack-lg"><div class="row between"><h2>${esc(v.n)}</h2><span class="status-pill ${STATUS[v.status][0]}">${icon("check")}${STATUS[v.status][1]} · ${v.mins}</span></div><div class="video-card"><video controls preload="metadata" poster="${v.poster}" playsinline><source src="${v.src}" type="video/mp4"><track kind="subtitles" srclang="es" label="Español" data-vtt="${v.vtt}" default>Tu navegador no reproduce video. <a href="${v.src}">Descárgalo aquí</a>.</video></div><p class="small muted">${esc(v.d)}</p></section>`).join("")}
  <section class="stack-lg"><div class="stack"><h2>Cápsulas animadas</h2><p class="small muted">Secuencias animadas que explican un proceso paso a paso. Puedes avanzar a tu ritmo o reproducirlas con narración sintética (el texto de cada paso aparece siempre debajo).</p></div>${M.capsules.map(k => `<div class="stack"><h3>${esc(k.n)}</h3><p class="small muted">${esc(k.d)}</p>${capsule(k)}</div>`).join("")}</section>
  <section class="card stack"><h2>Narraciones disponibles</h2>${narr("intro-m", M.scripts.intro, { title: "Bienvenida de Coco" })}${narr("tour-m", M.scripts.tour, { title: "Recorrido por la plataforma" })}</section>
  <section class="card stack"><h2>Estado de los recursos de audio</h2><div class="callout warn">${icon("mic")}<span><b>Sobre las voces.</b> Hoy la narración usa la <b>voz sintética de tu navegador</b>: no es una grabación humana y no la presentamos como tal. Los guiones están listos para grabarse con una voz humana cálida y autorizada; cuando existan los archivos, el reproductor los usará automáticamente.</span></div><div class="table-wrap"><table><thead><tr><th>Recurso</th><th>Estado</th></tr></thead><tbody>${M.audio.map(a => `<tr><td><b>${esc(a.n)}</b>${a.d ? `<br><span class="small muted">${esc(a.d)}</span>` : ""}</td><td><span class="status-pill ${STATUS[a.status][0]}">${STATUS[a.status][1]}</span></td></tr>`).join("")}</tbody></table></div>${ttsAvailable() ? "" : `<p class="small muted">Tu navegador no ofrece síntesis de voz: verás solo las transcripciones.</p>`}</section>`,
  mount(root){
    bindNarr(root);
    // Los subtítulos (WebVTT) se guardan como texto y se cargan como pista con el tipo correcto.
    $$("track[data-vtt]", root).forEach(tr => fetch(tr.dataset.vtt).then(r => r.ok ? r.text() : Promise.reject()).then(t => { tr.src = URL.createObjectURL(new Blob([t], { type: "text/vtt" })); }).catch(() => {}));
    $$("[data-cap]", root).forEach(el => bindCapsule(el, M.capsules.find(k => k.id === el.dataset.cap)));
    if (id) { const t = $("#cap-" + id, root); if (t) setTimeout(() => t.scrollIntoView({ behavior: "smooth", block: "center" }), 300); }
  } };
});
