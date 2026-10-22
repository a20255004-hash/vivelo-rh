/* Tarjeta de video relacionado: aparece en conceptos de la Academia y en briefings de jornadas
   cuando existe un video cuyo campo «related» incluye esa ruta. */
import { esc } from "../core/util.js";
import { C } from "../content/index.js";
import { icon } from "../brand/icons.js";

export function videoFor(hash){
  const vs = (C.media.video || []).filter(v => (v.related || []).includes(hash) && v.status === "listo");
  if (!vs.length) return "";
  return `<section class="vrel" aria-label="Video relacionado">${vs.map(v => `<a class="vrel-card" href="#medios.v-${v.id}">
    <span class="vrel-media"><img src="${v.posterWebp || v.poster}" alt="" loading="lazy" decoding="async" width="1280" height="720"><span class="vrel-play" aria-hidden="true">${icon("play")}</span></span>
    <span class="vrel-copy"><span class="eyebrow">${icon("film")} Video · ${esc(v.mins)} · con subtítulos</span><b>${esc(v.n)}</b><span class="small muted">${esc(v.d || "")}</span></span></a>`).join("")}</section>`;
}
