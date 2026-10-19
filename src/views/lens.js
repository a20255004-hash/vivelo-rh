/* Selector de nivel de explicación (sencilla / profesional / ambas), compartido por Mapa y Academia. */
import { S, save } from "../core/store.js";
import { render } from "../core/router.js";
import { icon } from "../brand/icons.js";

export function lensSeg(){
  const l = S.state.prefs.lens || "simple";
  return `<div class="seg" role="group" aria-label="Nivel de explicación">${[["simple","Sencilla"],["tech","Profesional"],["both","Ambas"]].map(([v, n]) => `<button type="button" data-lens="${v}" aria-pressed="${l === v}">${n}</button>`).join("")}</div>`;
}
export function lensBody(simple, tech){
  const l = S.state.prefs.lens || "simple";
  return `${l !== "tech" ? `<div class="lens simple"><span class="eyebrow">${icon("bulb")}Explicación sencilla</span><div class="prose">${simple}</div></div>` : ""}${l !== "simple" ? `<div class="lens"><span class="eyebrow">${icon("scale")}Explicación profesional</span><div class="prose">${tech}</div></div>` : ""}`;
}
export function bindLens(root){
  root.querySelectorAll("[data-lens]").forEach(b => b.addEventListener("click", () => { S.state.prefs.lens = b.dataset.lens; save(); render(true); }));
}
