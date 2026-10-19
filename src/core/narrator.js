/* Narrador accesible.
   - Si existe una grabación humana autorizada (media.audio[].status === "grabado" con file), la usa.
   - Si no, usa la voz sintética del navegador (Web Speech API) y lo dice explícitamente:
     nunca se presenta como una grabación humana.
   - Si el navegador no tiene síntesis de voz, no se muestra ningún botón de audio roto:
     solo la transcripción. */
import { esc, strip } from "./util.js";
import { icon } from "../brand/icons.js";
import { S } from "./store.js";

const texts = {};
const files = {};
let current = null; // { id, el, utt, audio }

export const ttsAvailable = () => typeof window !== "undefined" && "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance !== "undefined";

function pickVoice(){
  if (!ttsAvailable()) return null;
  const vs = speechSynthesis.getVoices() || [];
  const pref = ["es-PE", "es-419", "es-US", "es-MX", "es-CO", "es-AR", "es-CL", "es-ES"];
  for (const l of pref) { const v = vs.find(x => x.lang && x.lang.replace("_", "-").toLowerCase() === l.toLowerCase()); if (v) return v; }
  return vs.find(x => (x.lang || "").toLowerCase().startsWith("es")) || null;
}
if (ttsAvailable()) { try { speechSynthesis.onvoiceschanged = () => {}; speechSynthesis.getVoices(); } catch (e) {} }

export function registerFile(id, src){ files[id] = src; }

/* Devuelve el HTML del control. text puede ser HTML: se limpia para leerlo. */
export function narr(id, text, opts = {}){
  texts[id] = strip(text);
  const human = !!files[id];
  const can = human || ttsAvailable();
  const tid = "tr-" + id.replace(/[^a-z0-9-]/gi, "");
  const label = human ? "Grabación de voz humana" : "Voz sintética del navegador";
  return `<div class="stack" style="gap:8px">${can ? `<div class="narr" data-narr="${esc(id)}" role="group" aria-label="${esc(opts.title || "Escuchar")}">
    <button type="button" class="iconbtn" data-n="play" aria-label="Escuchar">${icon("play")}</button>
    <button type="button" class="iconbtn" data-n="replay" aria-label="Repetir desde el inicio">${icon("replay")}</button>
    <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <span class="lbl">${opts.title ? esc(opts.title) + " · " : ""}${label}</span>
    <select data-n="rate" aria-label="Velocidad" style="width:auto;padding:4px 6px;font-size:.8rem;border-radius:999px"><option value="0.85">0.85×</option><option value="1" selected>1×</option><option value="1.15">1.15×</option><option value="1.3">1.3×</option></select>
    <button type="button" class="btn ghost sm" data-n="tr" aria-expanded="false" aria-controls="${tid}">Transcripción</button>
  </div>` : `<span class="xs muted">Tu navegador no ofrece lectura en voz alta. Aquí tienes el texto completo:</span>`}
  <div class="transcript" id="${tid}" ${can ? "hidden" : ""}>${esc(texts[id])}</div></div>`;
}

function stop(){
  if (!current) return;
  if (current.audio) { current.audio.pause(); }
  if (ttsAvailable()) speechSynthesis.cancel();
  setState(current.el, "idle");
  current = null;
}
function setState(el, st){
  if (!el) return;
  el.classList.toggle("playing", st === "playing");
  const b = el.querySelector('[data-n="play"]');
  if (b) { b.innerHTML = icon(st === "playing" ? "pause" : "play"); b.setAttribute("aria-label", st === "playing" ? "Pausar" : st === "paused" ? "Continuar" : "Escuchar"); }
  el.dataset.state = st;
}

function speak(el, id, fromStart){
  const rate = +(el.querySelector('[data-n="rate"]') || { value: 1 }).value || 1;
  if (files[id]) {
    if (current && current.id === id && current.audio && !fromStart) { current.audio.play(); setState(el, "playing"); return; }
    stop();
    const a = new Audio(files[id]); a.playbackRate = rate;
    a.onended = () => { setState(el, "idle"); current = null; };
    a.play(); current = { id, el, audio: a }; setState(el, "playing"); return;
  }
  if (!ttsAvailable()) return;
  if (current && current.id === id && el.dataset.state === "paused" && !fromStart) { speechSynthesis.resume(); setState(el, "playing"); return; }
  stop();
  const u = new SpeechSynthesisUtterance(texts[id] || "");
  const v = pickVoice(); if (v) u.voice = v;
  u.lang = v ? v.lang : "es-PE"; u.rate = rate; u.pitch = 1.02;
  const tr = el.parentElement.querySelector(".transcript");
  u.onboundary = e => { if (!tr || tr.hidden || e.name !== "word") return; const t = texts[id]; const i = e.charIndex; const j = t.indexOf(" ", i); tr.innerHTML = esc(t.slice(0, i)) + "<mark>" + esc(t.slice(i, j < 0 ? undefined : j)) + "</mark>" + esc(j < 0 ? "" : t.slice(j)); };
  u.onend = () => { setState(el, "idle"); if (tr) tr.textContent = texts[id]; if (current && current.utt === u) current = null; };
  u.onerror = () => { setState(el, "idle"); };
  current = { id, el, utt: u };
  speechSynthesis.speak(u); setState(el, "playing");
}

export function bindNarr(root){
  root.querySelectorAll("[data-narr]").forEach(el => {
    if (el.dataset.bound) return; el.dataset.bound = "1";
    const id = el.dataset.narr;
    const r = el.querySelector('[data-n="rate"]'); if (r) r.value = String(S.state.profile.voiceRate || 1);
    el.querySelector('[data-n="play"]').addEventListener("click", () => {
      const st = el.dataset.state || "idle";
      if (st === "playing") { if (current && current.audio) current.audio.pause(); else if (ttsAvailable()) speechSynthesis.pause(); setState(el, "paused"); }
      else speak(el, id, false);
    });
    el.querySelector('[data-n="replay"]').addEventListener("click", () => speak(el, id, true));
    if (r) r.addEventListener("change", () => { S.state.profile.voiceRate = +r.value; if (current && current.audio) current.audio.playbackRate = +r.value; });
    const tb = el.querySelector('[data-n="tr"]');
    tb.addEventListener("click", () => { const tr = document.getElementById(tb.getAttribute("aria-controls")); tr.hidden = !tr.hidden; tb.setAttribute("aria-expanded", String(!tr.hidden)); });
  });
}

export const stopNarr = stop;
