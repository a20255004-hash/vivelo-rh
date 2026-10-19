/* Retratos ilustrados (2D) de las personas de cada historia.
   Todas son personajes ficticios. El retrato se define con una "ficha" (piel, cabello, ropa,
   accesorios) o se deriva del nombre de forma estable, y cambia de expresión según el momento. */
import { hash, esc } from "../core/util.js";

const SKIN = ["#F3D3B6", "#E7BC94", "#D6A177", "#C08559", "#9F6941", "#7A4E2E"];
const HAIR = ["#1D1612", "#2F2018", "#4A2E1D", "#6B4426", "#8A8A8A", "#C9C4BE", "#7A3B22"];
const CLOTH = ["#4B34C8", "#0E9F80", "#D9467A", "#2F6FEB", "#B7791F", "#2A2540", "#E0522F", "#5E6B7A", "#8E5BD6", "#1F7A8C"];
const STYLES_F = ["lacio", "moño", "colita", "rizado", "melena", "trenza"];
const STYLES_M = ["corto", "raya", "rizado", "calvo", "corto"];

export function specFor(name, base = {}){
  const h = hash(name || "x");
  // La apariencia de cada personaje ficticio se define a mano en su ficha (g: "f" | "m");
  // si no hay ficha, se elige un estilo neutro a partir del hash, sin deducir nada del nombre.
  const fem = base.g ? base.g === "f" : ((h >> 20) % 2) === 0;
  const styles = base.g ? (fem ? STYLES_F : STYLES_M) : STYLES_F.concat(STYLES_M);
  return Object.assign({
    s: h % SKIN.length,
    h: styles[(h >> 3) % styles.length],
    hc: (h >> 6) % 4,
    c: (h >> 9) % CLOTH.length,
    gl: ((h >> 12) % 5) === 0,
    b: !fem && ((h >> 14) % 4) === 0,
    age: ["joven", "adulto", "adulto", "mayor"][(h >> 16) % 4],
    fem
  }, base);
}

function hairBack(st, col){
  switch (st) {
    case "lacio": return `<path d="M29 42 Q28 76 34 86 L66 86 Q72 76 71 42 Q70 20 50 20 Q30 20 29 42z" fill="${col}"/>`;
    case "trenza": return `<path d="M31 44 Q30 70 36 78 L64 78 Q70 70 69 44 Q68 22 50 22 Q32 22 31 44z" fill="${col}"/><path d="M64 60 q8 6 4 14 q8 6 3 14 q6 5 1 11" stroke="${col}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    case "melena": return `<path d="M30 44 Q29 64 33 70 L67 70 Q71 64 70 44 Q69 22 50 22 Q31 22 30 44z" fill="${col}"/>`;
    case "rizado": return `<g fill="${col}">${[[34,34],[42,26],[52,23],[61,27],[67,35],[30,46],[70,46],[32,56],[68,56]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9"/>`).join("")}</g>`;
    default: return "";
  }
}
function hairFront(st, col){
  switch (st) {
    case "corto": return `<path d="M32 40 Q33 23 50 22 Q67 23 68 40 Q63 31 50 31 Q38 31 32 40z" fill="${col}"/>`;
    case "raya": return `<path d="M32 42 Q31 22 52 21 Q69 23 68 40 Q60 30 46 32 Q40 33 32 42z" fill="${col}"/>`;
    case "calvo": return `<path d="M32 46 Q31 40 34 37 M68 46 Q69 40 66 37" stroke="${col}" stroke-width="5" stroke-linecap="round" fill="none"/>`;
    case "moño": return `<circle cx="50" cy="17" r="9" fill="${col}"/><path d="M32 42 Q32 22 50 22 Q68 22 68 42 Q62 30 50 30 Q38 30 32 42z" fill="${col}"/>`;
    case "colita": return `<path d="M32 42 Q32 22 50 22 Q68 22 68 42 Q62 29 50 29 Q38 29 32 42z" fill="${col}"/><path d="M66 32 q12 4 9 22" stroke="${col}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    case "lacio": case "trenza": case "melena": return `<path d="M32 44 Q31 22 50 22 Q69 22 68 44 Q64 32 54 30 Q44 34 32 44z" fill="${col}"/>`;
    case "rizado": return `<g fill="${col}">${[[38,28],[47,24],[56,25],[63,30]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7"/>`).join("")}</g>`;
    default: return "";
  }
}
function face(mood, skinD){
  const ink = "#2A1C14";
  const eyes = mood === "feliz" ? `<path d="M40 46 q3 -3 6 0 M54 46 q3 -3 6 0" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`
    : mood === "sorpresa" ? `<circle cx="43" cy="46" r="2.6" fill="${ink}"/><circle cx="57" cy="46" r="2.6" fill="${ink}"/>`
    : `<circle cx="43" cy="46.5" r="2" fill="${ink}"/><circle cx="57" cy="46.5" r="2" fill="${ink}"/>`;
  const br = { molesto: `<path d="M39 40 l7 2.4 M61 40 l-7 2.4" stroke="${ink}" stroke-width="2" stroke-linecap="round"/>`,
    preocupado: `<path d="M39 42 l7 -2.4 M61 42 l-7 -2.4" stroke="${ink}" stroke-width="1.8" stroke-linecap="round"/>`,
    triste: `<path d="M39 42.5 l7 -2.6 M61 42.5 l-7 -2.6" stroke="${ink}" stroke-width="1.8" stroke-linecap="round"/>`,
    sorpresa: `<path d="M39 39 q4 -3 7 0 M54 39 q4 -3 7 0" stroke="${ink}" stroke-width="1.8" fill="none" stroke-linecap="round"/>` }[mood]
    || `<path d="M39.5 41 q3.5 -1.6 7 0 M53.5 41 q3.5 -1.6 7 0" stroke="${ink}" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7"/>`;
  const mouth = { feliz: `<path d="M44 56 q6 5 12 0" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    molesto: `<path d="M44 58 q6 -3 12 0" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    triste: `<path d="M44.5 58.5 q5.5 -3.5 11 0" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    preocupado: `<path d="M45 57.5 q2.5 -1.5 5 0 q2.5 1.5 5 0" stroke="${ink}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`,
    sorpresa: `<ellipse cx="50" cy="57" rx="2.6" ry="3.2" fill="${ink}"/>` }[mood]
    || `<path d="M45 56.5 q5 2.6 10 0" stroke="${ink}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  return `${br}${eyes}<path d="M50 48 q-1.6 4 0 5.4" stroke="${skinD}" stroke-width="1.6" fill="none" stroke-linecap="round"/>${mouth}`;
}
function shade(hex, k){
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  r = Math.round(r * k); g = Math.round(g * k); b = Math.round(b * k);
  return "#" + [r, g, b].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("");
}

/* avatar(nombre, ficha, {size, mood, ring}) */
export function avatar(name, base = {}, o = {}){
  const sp = specFor(name, base);
  const skin = SKIN[sp.s % SKIN.length], skinD = shade(skin, .82);
  const hc = sp.age === "mayor" ? HAIR[sp.fem ? 5 : 4] : HAIR[sp.hc % HAIR.length];
  const cloth = typeof sp.c === "string" ? sp.c : CLOTH[sp.c % CLOTH.length];
  const mood = o.mood || sp.mood || "neutral";
  const size = o.size || 44;
  const bg = o.bg || `color-mix(in srgb, ${cloth} 18%, var(--card))`;
  const acc = sp.acc || "";
  const uid = "av" + hash(name + JSON.stringify(sp) + mood).toString(36);
  return `<svg class="avatar ${o.cls || ""}" width="${size}" height="${size}" viewBox="0 0 100 100" ${o.decorative ? 'aria-hidden="true"' : `role="img" aria-label="${esc(o.alt || ("Retrato ilustrado de " + name))}"`} focusable="false">
  <defs><clipPath id="${uid}"><circle cx="50" cy="50" r="48"/></clipPath></defs>
  <circle cx="50" cy="50" r="48" fill="${bg}"/>
  <g clip-path="url(#${uid})">
    ${hairBack(sp.h, hc)}
    <path d="M14 104 Q16 76 50 74 Q84 76 86 104z" fill="${cloth}"/>
    ${acc === "chaleco" ? `<path d="M24 104 Q26 82 40 77 L44 104z M76 104 Q74 82 60 77 L56 104z" fill="#F5A524"/><path d="M28 92 h13 M59 92 h13" stroke="#EDEDED" stroke-width="3"/>` : ""}
    <path d="M42 74 L50 86 L58 74" fill="${shade(cloth, .75)}"/>
    <rect x="43" y="60" width="14" height="16" rx="5" fill="${skinD}"/>
    <ellipse cx="31.5" cy="49" rx="4" ry="5.5" fill="${skinD}"/><ellipse cx="68.5" cy="49" rx="4" ry="5.5" fill="${skinD}"/>
    <ellipse cx="50" cy="45" rx="18" ry="21" fill="${skin}"/>
    ${sp.age === "mayor" ? `<path d="M37 52 q2 2 4 1 M59 53 q2 1 4 -1" stroke="${skinD}" stroke-width="1.2" fill="none"/>` : ""}
    ${sp.b ? `<path d="M33 50 Q34 68 50 69 Q66 68 67 50 Q62 60 50 60 Q38 60 33 50z" fill="${hc}" opacity=".92"/>` : ""}
    ${face(mood, skinD)}
    ${sp.b ? `<path d="M43 55 q7 -3 14 0" stroke="${hc}" stroke-width="3" stroke-linecap="round" fill="none"/>` : ""}
    ${hairFront(sp.h, hc)}
    ${sp.gl ? `<g fill="none" stroke="#2A2540" stroke-width="1.8"><circle cx="43" cy="46.5" r="5.5"/><circle cx="57" cy="46.5" r="5.5"/><path d="M48.5 46.5h3"/></g>` : ""}
    ${acc === "casco" ? `<path d="M29 38 Q30 16 50 16 Q70 16 71 38z" fill="#F7C531"/><rect x="26" y="36" width="48" height="5" rx="2.5" fill="#E2AE14"/>` : ""}
    ${acc === "cofia" ? `<path d="M31 36 Q32 20 50 19 Q68 20 69 36 Q60 31 50 31 Q40 31 31 36z" fill="#F4F4F4"/>` : ""}
    ${acc === "audifono" ? `<path d="M31 46 Q31 24 50 24 Q69 24 69 46" stroke="#2A2540" stroke-width="3" fill="none"/><rect x="27" y="43" width="7" height="11" rx="3" fill="#2A2540"/><path d="M30 54 q4 10 12 8" stroke="#2A2540" stroke-width="2" fill="none"/>` : ""}
    ${acc === "fotocheck" || acc === "" ? `<path d="M40 76 L50 92 L60 76" stroke="var(--spark)" stroke-width="2" fill="none" opacity=".85"/>` : ""}
  </g>
  ${o.ring ? `<circle cx="50" cy="50" r="47" fill="none" stroke="${o.ring}" stroke-width="3"/>` : ""}
</svg>`;
}
