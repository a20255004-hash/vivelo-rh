/* Kusi como guía: reacciona a lo que pasa en la experiencia.
   Modos: "activo" (comenta momentos relevantes), "discreto" (solo hitos: inicio, cierre, casos
   graves) y "silencio" (no habla; queda disponible si la llamas). Nunca bloquea la pantalla. */
import { $, esc } from "../core/util.js";
import { S, save } from "../core/store.js";
import { on } from "../core/bus.js";
import { coco, MOODS } from "../brand/coco.js";
import { kusi3dImg } from "../brand/art.js";
import { icon } from "../brand/icons.js";

let hideT = null, el = null;
const name = () => S.state.profile.name ? S.state.profile.name.split(" ")[0] : "";

const SECTION = {
  sims: ["curioso", "Aquí están las jornadas: días completos, semanas y casos urgentes. Mira el tipo de organización: no es lo mismo una pyme que una municipalidad o una corporación."],
  mapa: ["feliz", "Pasa el cursor (o el foco) por un área y verás con cuáles se conecta. Las líneas son el trabajo real: nadie en RR.HH. trabaja solo."],
  cargos: ["pensando", "Mira los puestos como una escalera: lo que cambia entre practicante y jefatura no es solo el sueldo, es de qué respondes."],
  academia: ["curioso", "Cada concepto tiene dos versiones: una sencilla y una profesional. Empieza por la que te dé menos miedo."],
  taller: ["animo", "En el taller puedes equivocarte todas las veces que quieras. Los datos son ficticios; el método es real."],
  sectores: ["pensando", "Público y privado no funcionan igual. En el Estado, lo que no está escrito no existe… y lo que firmas, te compromete."],
  brujula: ["feliz", "Tu brújula pesa más lo que sentiste al experimentar que tus aciertos. Equivocarte no dice nada de tu vocación."],
  retos: ["animo", "Los retos son para practicar. Cada respuesta trae su explicación: léela aunque aciertes."],
  viaje: ["curioso", "Este es tu viaje. Puedes seguirlo en orden o saltar a donde quieras: nada se pierde."]
};

export function mountGuide(){
  el = document.createElement("aside");
  el.className = "guide"; el.id = "guide"; el.setAttribute("aria-label", "Kusi, tu guía");
  document.body.appendChild(el);
  render("neutral", null);
  on("route", ({ name: r }) => {
    el.hidden = !S.state.profile.name || !S.state.profile.tourDone;
    if (S.state.profile.guide !== "activo" || !SECTION[r]) { setMood(r === "inicio" ? "feliz" : "neutral"); return; }
    const k = "sec:" + r;
    if (S.state.seen[k]) { setMood(SECTION[r][0]); return; }
    S.state.seen[k] = Date.now(); save();
    say(SECTION[r][0], SECTION[r][1]);
  });
  on("sim:node", ({ node }) => { if (node.guide && S.state.profile.guide === "activo") say(node.guide.mood, node.guide.say); else if (node.guide) setMood(node.guide.mood); });
  on("sim:outcome", ({ res }) => {
    const g = res.guide;
    if (g) { say(g.mood, g.say, { level: "key" }); return; }
    const n = name();
    const lines = {
      buena: [["celebra", `¡Así se hace${n ? ", " + n : ""}! Fíjate en por qué funcionó: eso es lo que se aprende.`], ["feliz", "Buena decisión. Lee el razonamiento: a veces acertamos por intuición y conviene saber por qué."]],
      aceptable: [["pensando", "No está mal, pero había una salida mejor. Mira qué dato o paso faltó."], ["curioso", "Decisión discutible: la mayoría de profesionales la ajustaría un poco. ¿Ves en qué?"]],
      riesgosa: [["animo", "Uf, esa salió cara. Tranquilidad: un error de principiante no es falta de vocación. Lee cómo lo razona una profesional."], ["preocupado", "Esta decisión trae riesgos. Aquí es justo donde más se aprende."]]
    }[res.q] || [["neutral", ""]];
    const pick = lines[Math.floor(Math.random() * lines.length)];
    say(pick[0], pick[1], { level: res.q === "riesgosa" ? "key" : "normal" });
  });
  on("sim:start", ({ sim }) => say("feliz", `Empieza «${sim.title}». Recuerda: puedes pedir información antes de decidir (cuesta tiempo, como en la vida real).`, { level: "key" }));
  on("sim:finish", ({ sim, run }) => { const bad = run.log.filter(l => l.q === "riesgosa").length; say(bad > run.log.length / 2 ? "animo" : "celebra", bad > run.log.length / 2 ? "Fue un día difícil. Lo importante ahora es contar cómo te sentiste: eso pesa más que tus aciertos en la brújula." : "¡Terminaste el día! Antes de irte, cuéntame cómo te sentiste: eso es lo que más pesa en tu brújula.", { level: "key" }); });
  on("tool:finish", ({ score }) => say(score >= 80 ? "celebra" : score >= 55 ? "feliz" : "animo", score >= 80 ? "¡Trabajo de profesional!" : score >= 55 ? "Bien encaminado. Revisa lo que faltó y vuelve a intentarlo si quieres." : "Esto se aprende practicando. Mira el razonamiento y prueba otra vez."));
  on("challenge:finish", ({ pct }) => say(pct >= 80 ? "celebra" : pct >= 50 ? "feliz" : "animo", pct >= 80 ? "¡Excelente! Ya puedes subir de nivel." : pct >= 50 ? "Vas bien. Las explicaciones son la mejor parte: léelas." : "Cada explicación que lees hoy es un error que no cometerás en el trabajo."));
  on("journey:station", ({ st }) => say(st.coco, st.say, { level: "key" }));
}

function render(mood, msg, opts = {}){
  const mode = S.state.profile.guide || "activo";
  el.className = "guide " + mode + (msg ? "" : " min");
  el.innerHTML = `${msg ? `<div class="bubble" role="status" aria-live="polite"><div class="row between"><b class="who">Kusi</b><span class="mood">${esc(MOODS[mood] ? MOODS[mood].n : "")}</span></div><p>${msg}</p><div class="row">${opts.actions || ""}<button type="button" class="btn ghost sm" data-g="close">Entendido</button><button type="button" class="btn ghost sm" data-g="mute" title="Kusi dejará de comentar; podrás llamarla cuando quieras">${mode === "activo" ? "Menos comentarios" : "Silenciar"}</button></div></div>` : ""}
  <button type="button" class="guide-btn" data-g="toggle" aria-label="${msg ? "Ocultar a Kusi" : "Hablar con Kusi"}" aria-expanded="${!!msg}">${kusi3dImg(mood, { size: 92, decorative: true, eager: true, cls: "enter" })}</button>`;
  el.querySelectorAll("[data-g]").forEach(b => b.addEventListener("click", () => {
    const a = b.dataset.g;
    if (a === "close") render(mood, null);
    if (a === "mute") { S.state.profile.guide = mode === "activo" ? "discreto" : "silencio"; save(); render(mood, null); const t = document.querySelector("[data-guide-mode]"); if (t) t.dispatchEvent(new Event("refresh")); }
    if (a === "toggle") { if (msg) render(mood, null); else render("curioso", helpLine()); }
  }));
  el.addEventListener("mouseenter", () => clearTimeout(hideT), { once: true });
  clearTimeout(hideT);
  if (msg && !opts.sticky) hideT = setTimeout(() => { if (!el.matches(":hover") && !el.contains(document.activeElement)) render(mood, null); }, 14000);
}
function helpLine(){
  const n = name();
  return `${n ? "¡Hola, " + esc(n) + "! " : ""}¿Necesitas una pista? En <a href="#viaje">tu viaje</a> tienes una ruta guiada, en <a href="#sims">Jornadas</a> puedes probar un puesto y en <a href="#brujula">tu brújula</a> ves lo que has descubierto. ${S.state.profile.guide !== "activo" ? `<button type="button" class="btn soft sm" data-g2="on">Volver a activar mis comentarios</button>` : ""}`;
}
document.addEventListener("click", e => { const b = e.target.closest && e.target.closest('[data-g2="on"]'); if (b) { S.state.profile.guide = "activo"; save(); say("feliz", "¡De vuelta! Comentaré solo lo importante."); } });

export function say(mood, text, opts = {}){
  if (!el) return;
  const mode = S.state.profile.guide || "activo";
  if (!text || mode === "silencio" || (mode === "discreto" && opts.level !== "key")) { setMood(mood); return; }
  render(mood, text, opts);
}
export function setMood(mood){
  if (!el) return;
  const btn = el.querySelector(".guide-btn");
  if (btn && !el.querySelector(".bubble")) btn.innerHTML = kusi3dImg(MOODS[mood] ? mood : "neutral", { size: 92, decorative: true, eager: true });
}
export const guideModes = [["activo", "Activo", "Comenta momentos relevantes"], ["discreto", "Discreto", "Solo inicio, cierre y casos graves"], ["silencio", "Silencio", "No comenta; lo llamas cuando quieras"]];
