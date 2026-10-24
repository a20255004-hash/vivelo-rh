/* Kusi, la alpaca guía de VÍVELO RH.
   «Kusi» significa «alegre» en quechua. Es una cría de alpaca: dulce, curiosa y serena, como una
   buena profesional de RR.HH. que escucha a todos y no pierde la calma. Lleva una chalina tejida
   en carmín con listas de latón y su fotocheck de invitada.

   La versión 2D vive aquí (SVG ligero, funciona sin red). La versión 3D está en src/brand/kusi3d.js
   y comparte la misma ficha de diseño (colores y proporciones).
   Cada estado de ánimo cambia de verdad la ilustración: ojos, cejas, boca, orejas, rubor y extras.
   El módulo conserva el nombre de archivo y la función coco() por compatibilidad con las vistas. */

export const MOODS = {
  neutral:   { n: "Tranquila",   d: "Escucha con atención" },
  feliz:     { n: "Contenta",    d: "Le alegra verte" },
  curioso:   { n: "Curiosa",     d: "Quiere saber más" },
  sorpresa:  { n: "Sorprendida", d: "No lo esperaba" },
  preocupado:{ n: "Preocupada",  d: "Ve un riesgo" },
  triste:    { n: "Triste",      d: "Le duele lo que pasó" },
  indignado: { n: "Indignada",   d: "Esto es injusto" },
  pensando:  { n: "Pensativa",   d: "Está razonando" },
  animo:     { n: "Dando ánimo", d: "Sabe que puedes" },
  celebra:   { n: "Celebrando",  d: "¡Lo lograste!" }
};
export const NAME = "Kusi";

/* ficha de color compartida con el modelo 3D */
const WOOL = "#F6EADB", WOOL_D = "#E8D8C3", LINE = "#C9B193", MUZ = "#FFF8EF", INNER = "#F3BFB3",
  BLUSH = "#F6A9A0", EYE = "#2B2320", NOSE = "#6B4A3E", HOOF = "#8A6E5A", SCARF = "#8E1B2C", BRASS = "#C9A46A";

/* silueta esponjosa: se traza el contorno de todos los círculos y luego el relleno encima,
   así solo queda delineado el borde exterior del vellón */
const fluff = (circles, fill = WOOL, sw = 3.4) =>
  `<g>${circles.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${LINE}" stroke="${LINE}" stroke-width="${sw}"/>`).join("")}${circles.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`).join("")}</g>`;

const BODY = [[100, 160, 34], [68, 160, 21], [132, 160, 21], [78, 143, 17], [122, 143, 17], [100, 139, 21], [62, 173, 14], [138, 173, 14], [84, 177, 16], [116, 177, 16]];
const HEAD = [[100, 84, 40], [70, 92, 20], [130, 92, 20], [100, 108, 24]];
const TUFT = [[84, 48, 13], [100, 41, 15], [117, 46, 13], [72, 58, 10], [129, 58, 10], [92, 55, 11], [109, 55, 11]];

function ear(side, m){
  const flip = side === "R";
  const rot = { triste: 26, preocupado: 18, indignado: 34, curioso: flip ? 0 : 22, sorpresa: -6, celebra: -4 }[m] ?? 0;
  const ang = flip ? -rot : rot;
  const ox = flip ? 128 : 72;
  const outer = flip ? "M124 60 C138 50 146 30 142 10 C132 16 120 34 118 56 Z" : "M76 60 C62 50 54 30 58 10 C68 16 80 34 82 56 Z";
  const inner = flip ? "M124 52 C133 44 138 30 136 18 C130 24 124 36 122 50 Z" : "M76 52 C67 44 62 30 64 18 C70 24 76 36 78 50 Z";
  return `<g transform="rotate(${ang} ${ox} 58)"><path d="${outer}" fill="${WOOL}" stroke="${LINE}" stroke-width="2.4" stroke-linejoin="round"/><path d="${inner}" fill="${INNER}"/></g>`;
}

function eyes(m){
  const L = 82, R = 118, Y = 84;
  const dot = (x, y, s = 1, look = [0, 0]) => `<g class="cc-eye"><ellipse cx="${x}" cy="${y}" rx="${6.6 * s}" ry="${7.8 * s}" fill="${EYE}"/><circle cx="${x + 2.2 + look[0]}" cy="${y - 2.6 + look[1]}" r="${2.5 * s}" fill="#fff"/><circle cx="${x - 2 + look[0]}" cy="${y + 2.8 + look[1]}" r="${1.1 * s}" fill="#fff" opacity=".85"/></g>`;
  const lash = (x, y, dir) => `<path d="M${x + dir * 5.6} ${y - 4.6} l${dir * 3.2} -2.2" stroke="${EYE}" stroke-width="1.7" stroke-linecap="round" fill="none"/>`;
  const arc = (x, y) => `<path d="M${x - 7} ${y + 1} Q${x} ${y - 7} ${x + 7} ${y + 1}" fill="none" stroke="${EYE}" stroke-width="3.2" stroke-linecap="round"/>`;
  const lashes = lash(L, Y, -1) + lash(R, Y, 1);
  switch (m) {
    case "feliz": case "celebra": return arc(L, Y) + arc(R, Y);
    case "animo": return arc(L, Y) + dot(R, Y) + lash(R, Y, 1);
    case "sorpresa": return dot(L, Y, 1.15) + dot(R, Y, 1.15) + lashes;
    case "triste": return dot(L, Y + 2, .9, [0, 1.6]) + dot(R, Y + 2, .9, [0, 1.6]) + lashes;
    case "pensando": return dot(L, Y, 1, [1.6, -2.2]) + dot(R, Y, 1, [1.6, -2.2]) + lashes;
    case "curioso": return dot(L, Y, .92) + dot(R, Y - 1, 1.12) + lashes;
    case "indignado": return dot(L, Y + 1, .9) + dot(R, Y + 1, .9);
    default: return dot(L, Y) + dot(R, Y) + lashes;
  }
}

function brows(m){
  const s = `stroke="${LINE}" stroke-width="3.4" stroke-linecap="round" fill="none"`;
  switch (m) {
    case "preocupado": return `<path d="M74 70 L89 65" ${s}/><path d="M126 70 L111 65" ${s}/>`;
    case "triste": return `<path d="M74 71 L88 66" ${s}/><path d="M126 71 L112 66" ${s}/>`;
    case "indignado": return `<path d="M73 64 L90 72" stroke="${NOSE}" stroke-width="4" stroke-linecap="round"/><path d="M127 64 L110 72" stroke="${NOSE}" stroke-width="4" stroke-linecap="round"/>`;
    case "sorpresa": return `<path d="M74 66 Q82 60 90 66" ${s}/><path d="M110 66 Q118 60 126 66" ${s}/>`;
    case "curioso": return `<path d="M75 71 L89 70" ${s}/><path d="M110 66 Q118 59 127 65" ${s}/>`;
    default: return "";
  }
}

function mouth(m){
  const s = `stroke="${NOSE}" stroke-width="2.6" stroke-linecap="round" fill="none"`;
  const y = 112;
  switch (m) {
    case "feliz": case "animo": return `<path d="M92 ${y - 2} Q100 ${y + 7} 108 ${y - 2}" ${s}/>`;
    case "celebra": return `<path d="M91 ${y - 3} Q100 ${y + 12} 109 ${y - 3} Z" fill="${NOSE}"/><path d="M95 ${y + 3} Q100 ${y + 7} 105 ${y + 3}" fill="#E8857A"/>`;
    case "sorpresa": return `<ellipse cx="100" cy="${y + 1}" rx="4.4" ry="5.4" fill="${NOSE}"/>`;
    case "preocupado": return `<path d="M93 ${y + 1} Q97 ${y - 2} 100 ${y} Q103 ${y + 2} 107 ${y - 1}" ${s}/>`;
    case "triste": case "indignado": return `<path d="M93 ${y + 3} Q100 ${y - 4} 107 ${y + 3}" ${s}/>`;
    case "pensando": return `<path d="M95 ${y} L106 ${y - 1.5}" ${s}/>`;
    default: return `<path d="M94 ${y - 1} Q100 ${y + 4} 106 ${y - 1}" ${s}/>`;
  }
}

function extras(m){
  switch (m) {
    case "celebra": return `<g class="cc-confetti">${[[28, 44, SCARF], [170, 36, BRASS], [22, 96, "#4F6B58"], [178, 90, SCARF], [58, 18, BRASS], [146, 14, "#3E5C76"], [36, 140, BRASS], [166, 134, "#8E4A5A"]].map(([x, y, c], i) => `<rect x="${x}" y="${y}" width="8" height="5" rx="1.5" fill="${c}" transform="rotate(${i * 37} ${x} ${y})"/>`).join("")}</g>`;
    case "sorpresa": return `<g class="cc-pop"><path d="M160 54 l7 -11 M171 66 l13 -3 M151 44 l-1 -13" stroke="${BRASS}" stroke-width="3.6" stroke-linecap="round"/></g>`;
    case "curioso": return `<text x="160" y="62" class="cc-q" font-family="var(--f-display)" font-weight="700" font-size="32" fill="var(--brand)">?</text>`;
    case "pensando": return `<g class="cc-dots"><circle cx="152" cy="52" r="3.6" fill="var(--ink-3)"/><circle cx="163" cy="40" r="5" fill="var(--ink-3)"/><circle cx="177" cy="26" r="6.6" fill="var(--ink-3)"/></g>`;
    case "triste": return `<path class="cc-tear" d="M76 96 q-4 8 0 11 q4 -3 0 -11z" fill="#8CC3EA"/>`;
    case "preocupado": return `<path class="cc-sweat" d="M146 66 q-6 10 0 14 q6 -4 0 -14z" fill="#A9D5F2" stroke="#6AA7D1" stroke-width="1"/>`;
    case "indignado": return `<g class="cc-steam"><path d="M44 52 q-6 -8 0 -16 q6 -8 0 -16" stroke="${SCARF}" stroke-width="3.6" fill="none" stroke-linecap="round"/><path d="M156 52 q6 -8 0 -16 q-6 -8 0 -16" stroke="${SCARF}" stroke-width="3.6" fill="none" stroke-linecap="round"/></g>`;
    case "animo": return `<path class="cc-spark" d="M170 76c.6 4 1.8 5.2 5.8 5.8-4 .6-5.2 1.8-5.8 5.8-.6-4-1.8-5.2-5.8-5.8 4-.6 5.2-1.8 5.8-5.8z" fill="${BRASS}"/><path class="cc-spark" d="M30 70c.4 2.6 1.2 3.4 3.8 3.8-2.6.4-3.4 1.2-3.8 3.8-.4-2.6-1.2-3.4-3.8-3.8 2.6-.4 3.4-1.2 3.8-3.8z" fill="${BRASS}"/>`;
    default: return "";
  }
}

const cheeks = m => {
  const c = m === "indignado" ? "#E0695E" : BLUSH;
  const o = (m === "feliz" || m === "celebra" || m === "animo" || m === "indignado") ? .7 : .45;
  return `<ellipse cx="68" cy="100" rx="9" ry="5.6" fill="${c}" opacity="${o}"/><ellipse cx="132" cy="100" rx="9" ry="5.6" fill="${c}" opacity="${o}"/>`;
};

/* chalina tejida: banda con listas de latón y rombos, y una punta que cuelga con flecos */
const scarf = () => `<g class="cc-scarf">
  <path d="M62 124 Q100 140 138 124 L140 138 Q100 154 60 138 Z" fill="${SCARF}" stroke="#6E1422" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M63 129 Q100 144 137 129" stroke="${BRASS}" stroke-width="1.6" fill="none"/><path d="M61 134 Q100 149 139 134" stroke="${BRASS}" stroke-width="1.6" fill="none"/>
  ${[74, 88, 100, 112, 126].map(x => `<path d="M${x} ${x === 100 ? 140 : 137} l3 -3 l3 3 l-3 3z" fill="${BRASS}" opacity=".9"/>`).join("")}
  <path d="M128 136 L138 172 L124 174 L118 140 Z" fill="${SCARF}" stroke="#6E1422" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M121 150 L136 148 M122 158 L137 156" stroke="${BRASS}" stroke-width="1.5"/>
  ${[125, 129, 133, 137].map(x => `<path d="M${x} 173 l-.5 7" stroke="${BRASS}" stroke-width="1.8" stroke-linecap="round"/>`).join("")}
</g>`;

const badge = () => `<g class="cc-badge">
  <path d="M86 140 L100 156 L112 141" fill="none" stroke="${SCARF}" stroke-width="2.4" stroke-linecap="round"/>
  <rect x="88" y="153" width="24" height="29" rx="4" fill="#FBF8F3" stroke="#DCCFBD" stroke-width="1.4"/>
  <rect x="88" y="153" width="24" height="7" rx="3.5" fill="${SCARF}"/><rect x="96.5" y="155.6" width="7" height="1.8" rx=".9" fill="#FBF8F3"/>
  <circle cx="100" cy="167" r="4.4" fill="${WOOL_D}"/><rect x="92" y="174" width="16" height="2.4" rx="1.2" fill="#CFC5B6"/><rect x="95" y="178" width="10" height="1.8" rx=".9" fill="#E2D9CC"/>
</g>`;

export function coco2d(mood = "neutral", opts = {}){
  const m = MOODS[mood] ? mood : "neutral";
  const size = opts.size || 120;
  const tilt = m === "curioso" ? -8 : m === "triste" ? 5 : m === "pensando" ? -5 : m === "indignado" ? 0 : 0;
  const label = opts.label === false ? 'aria-hidden="true"' : `role="img" aria-label="Kusi, la alpaca guía, ${MOODS[m].n.toLowerCase()}: ${MOODS[m].d.toLowerCase()}"`;
  return `<svg class="coco kusi mood-${m} ${opts.cls || ""}" width="${size}" height="${Math.round(size * 1.05)}" viewBox="0 0 200 210" ${label} focusable="false">
  <ellipse cx="100" cy="196" rx="56" ry="6" fill="var(--shadow-ink)" opacity=".16"/>
  <g class="cc-body">
    ${[[72, 184], [88, 188], [112, 188], [128, 184]].map(([x, y], i) => `<rect x="${x - 7}" y="${y - 8}" width="14" height="18" rx="7" fill="${i === 0 || i === 3 ? WOOL_D : WOOL}" stroke="${LINE}" stroke-width="2"/><rect x="${x - 7}" y="${y + 4}" width="14" height="6" rx="3" fill="${HOOF}"/>`).join("")}
    ${fluff(BODY)}
    <path d="M76 170 q6 4 12 0 M112 170 q6 4 12 0" stroke="${WOOL_D}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    ${scarf()}
    ${badge()}
  </g>
  <g class="cc-head" transform="rotate(${tilt} 100 118)">
    <g class="cc-ears">${ear("L", m)}${ear("R", m)}</g>
    ${fluff(HEAD)}
    <g class="cc-tuft cc-sprout">${fluff(TUFT, WOOL, 3)}<path d="M88 50 q4 -4 8 0 M104 46 q4 -4 8 0" stroke="${WOOL_D}" stroke-width="2" fill="none" stroke-linecap="round"/></g>
    <ellipse cx="100" cy="104" rx="25" ry="17" fill="${MUZ}"/>
    ${brows(m)}
    <g class="cc-eyes">${eyes(m)}</g>
    ${cheeks(m)}
    <path d="M95 99 q5 4 10 0" stroke="${NOSE}" stroke-width="2.6" stroke-linecap="round" fill="none"/><path d="M100 101 v5" stroke="${NOSE}" stroke-width="2.4" stroke-linecap="round"/>
    <ellipse cx="94.5" cy="97" rx="2.2" ry="1.5" fill="${NOSE}"/><ellipse cx="105.5" cy="97" rx="2.2" ry="1.5" fill="${NOSE}"/>
    ${mouth(m)}
  </g>
  ${extras(m)}
</svg>`;
}
/* Kusi en 3D (versión preferida): se usa en toda la plataforma. coco2d() queda para los videos
   y para contextos sin imágenes. Mantiene la firma coco(mood, {size, cls, label}). */
export function coco(mood = "neutral", opts = {}){
  const m = MOODS[mood] ? mood : "neutral";
  const size = Math.round((opts.size || 120) * 1.15);
  const deco = opts.label === false;
  return `<img class="coco kusi kusi3d mood-${m} ${opts.cls || ""}" src="assets/3d/kusi/kusi-${m}.webp" width="${size}" height="${size}" ${deco ? 'alt="" aria-hidden="true"' : `alt="Kusi, la alpaca guía, ${MOODS[m].n.toLowerCase()}: ${MOODS[m].d.toLowerCase()}"`} loading="lazy" decoding="async">`;
}
export const kusi = coco;
