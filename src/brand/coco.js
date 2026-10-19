/* Coco, el ronsoco explorador: guía de VÍVELO RH.
   El ronsoco (capibara amazónica, Hydrochoerus hydrochaeris) es el roedor más sociable que existe:
   convive en calma con casi cualquier especie. Esa es la actitud de un buen profesional de RR.HH.:
   escuchar a todos, mantener la calma en el conflicto y no perder de vista a las personas.
   Lleva su fotocheck de "practicante eterno", un brote en la cabeza (siempre está aprendiendo)
   y un morral con expedientes.

   Cada estado de ánimo cambia de verdad la ilustración: ojos, cejas, boca, patas, color y extras. */

export const MOODS = {
  neutral:   { n: "Tranquilo",  d: "Escucha con atención" },
  feliz:     { n: "Contento",   d: "Le alegra verte" },
  curioso:   { n: "Curioso",    d: "Quiere saber más" },
  sorpresa:  { n: "Sorprendido", d: "No lo esperaba" },
  preocupado:{ n: "Preocupado", d: "Ve un riesgo" },
  triste:    { n: "Triste",     d: "Le duele lo que pasó" },
  indignado: { n: "Indignado",  d: "Esto es injusto" },
  pensando:  { n: "Pensativo",  d: "Está razonando" },
  animo:     { n: "Dando ánimo", d: "Sabe que puedes" },
  celebra:   { n: "Celebrando", d: "¡Lo lograste!" }
};

const FUR = "#B07A4F", FUR_D = "#8C5A35", FUR_L = "#D9AE84", SNOUT = "#9A6640", NOSE = "#3F2717", INK = "#2A1C14";

function eyes(m){
  const L = 79, R = 121, Y = 76;
  const dot = (x, y, r = 5.2, look = [0, 0]) => `<g class="cc-eye"><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.12}" fill="${INK}"/><circle cx="${x + 1.6 + look[0]}" cy="${y - 1.8 + look[1]}" r="${r * .36}" fill="#fff"/></g>`;
  const arc = (x, y, up = true) => `<path d="M${x - 6} ${y + (up ? 1 : -1)} Q${x} ${y + (up ? -6 : 6)} ${x + 6} ${y + (up ? 1 : -1)}" fill="none" stroke="${INK}" stroke-width="3.2" stroke-linecap="round"/>`;
  switch (m) {
    case "feliz": case "celebra": return arc(L, Y) + arc(R, Y);
    case "animo": return arc(L, Y) + dot(R, Y);
    case "sorpresa": return `<g class="cc-eye"><circle cx="${L}" cy="${Y}" r="7.5" fill="#fff" stroke="${INK}" stroke-width="2.4"/><circle cx="${L}" cy="${Y}" r="3.6" fill="${INK}"/></g><g class="cc-eye"><circle cx="${R}" cy="${Y}" r="7.5" fill="#fff" stroke="${INK}" stroke-width="2.4"/><circle cx="${R}" cy="${Y}" r="3.6" fill="${INK}"/></g>`;
    case "triste": return dot(L, Y + 2, 4.4, [0, 1.5]) + dot(R, Y + 2, 4.4, [0, 1.5]) + `<path d="M${L - 7} ${Y - 3} Q${L} ${Y - 1} ${L + 7} ${Y - 3}" stroke="${FUR_D}" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M${R - 7} ${Y - 3} Q${R} ${Y - 1} ${R + 7} ${Y - 3}" stroke="${FUR_D}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
    case "pensando": return dot(L, Y, 5, [1.6, -2]) + dot(R, Y, 5, [1.6, -2]);
    case "curioso": return dot(L, Y, 4.6) + dot(R, Y - 1, 6.4);
    case "indignado": return dot(L, Y + 1, 4.8) + dot(R, Y + 1, 4.8);
    default: return dot(L, Y) + dot(R, Y);
  }
}

function brows(m){
  const s = `stroke="${FUR_D}" stroke-width="4" stroke-linecap="round" fill="none"`;
  switch (m) {
    case "preocupado": return `<path d="M71 64 L87 59" ${s}/><path d="M129 64 L113 59" ${s}/>`;
    case "triste": return `<path d="M71 65 L86 60" ${s}/><path d="M129 65 L114 60" ${s}/>`;
    case "indignado": return `<path d="M70 59 L88 66" ${s} stroke-width="5"/><path d="M130 59 L112 66" ${s} stroke-width="5"/>`;
    case "sorpresa": return `<path d="M71 58 Q79 52 87 58" ${s}/><path d="M113 58 Q121 52 129 58" ${s}/>`;
    case "curioso": return `<path d="M72 65 L86 64" ${s}/><path d="M112 59 Q121 52 130 58" ${s}/>`;
    case "pensando": return `<path d="M72 63 L86 61" ${s}/><path d="M113 60 L128 64" ${s}/>`;
    default: return `<path d="M72 64 Q79 61 86 64" ${s} opacity=".55"/><path d="M114 64 Q121 61 128 64" ${s} opacity=".55"/>`;
  }
}

function mouth(m){
  const s = `stroke="${INK}" stroke-width="3" stroke-linecap="round" fill="none"`;
  switch (m) {
    case "feliz": case "animo": return `<path d="M88 117 Q100 127 112 117" ${s}/>`;
    case "celebra": return `<path d="M86 115 Q100 133 114 115 Z" fill="${INK}"/><path d="M93 123 Q100 129 107 123" fill="#E8735A"/>`;
    case "sorpresa": return `<ellipse cx="100" cy="121" rx="6" ry="7.5" fill="${INK}"/>`;
    case "preocupado": return `<path d="M89 121 Q94 117 100 120 Q106 123 111 119" ${s}/>`;
    case "triste": return `<path d="M89 123 Q100 114 111 123" ${s}/>`;
    case "indignado": return `<path d="M88 123 Q100 115 112 123" ${s} stroke-width="3.4"/><path d="M92 121 L108 121" stroke="${INK}" stroke-width="1" opacity=".0"/>`;
    case "pensando": return `<path d="M93 120 L109 118" ${s}/>`;
    case "curioso": return `<path d="M92 119 Q100 123 108 118" ${s}/>`;
    default: return `<path d="M91 118 Q100 123 109 118" ${s}/>`;
  }
}

function arms(m){
  const paw = (x, y, r = 0) => `<g transform="translate(${x} ${y}) rotate(${r})"><ellipse cx="0" cy="0" rx="10" ry="13" fill="${FUR}" stroke="${FUR_D}" stroke-width="1.5"/><path d="M-4 9v3M0 10v3M4 9v3" stroke="${FUR_D}" stroke-width="1.6" stroke-linecap="round"/></g>`;
  switch (m) {
    case "celebra": return `<path d="M58 150 Q40 120 44 96" stroke="${FUR}" stroke-width="17" stroke-linecap="round" fill="none"/><path d="M142 150 Q160 120 156 96" stroke="${FUR}" stroke-width="17" stroke-linecap="round" fill="none"/>${paw(44, 92, -15)}${paw(156, 92, 15)}`;
    case "animo": return `<path d="M144 152 Q166 138 160 112" stroke="${FUR}" stroke-width="17" stroke-linecap="round" fill="none"/>${paw(160, 108, 10)}<path d="M156 98 q4 -10 9 -2" stroke="${FUR_D}" stroke-width="5" stroke-linecap="round" fill="none"/>`;
    case "pensando": return `<path d="M140 156 Q128 140 120 136" stroke="${FUR}" stroke-width="17" stroke-linecap="round" fill="none"/>${paw(116, 134, -30)}`;
    case "sorpresa": return `<path d="M58 154 Q46 136 60 122" stroke="${FUR}" stroke-width="16" stroke-linecap="round" fill="none"/>${paw(62, 120, 20)}<path d="M142 154 Q154 136 140 122" stroke="${FUR}" stroke-width="16" stroke-linecap="round" fill="none"/>${paw(138, 120, -20)}`;
    case "indignado": return `<path d="M56 160 Q42 150 52 136" stroke="${FUR}" stroke-width="17" stroke-linecap="round" fill="none"/>${paw(54, 136, 30)}<path d="M144 160 Q158 150 148 136" stroke="${FUR}" stroke-width="17" stroke-linecap="round" fill="none"/>${paw(146, 136, -30)}`;
    default: return "";
  }
}

function extras(m){
  switch (m) {
    case "celebra": return `<g class="cc-confetti">${[[30,40,"var(--spark)"],[170,34,"var(--sun)"],[24,90,"var(--mint)"],[178,84,"var(--brand-2)"],[60,20,"var(--sun)"],[146,16,"var(--spark)"]].map(([x,y,c],i)=>`<rect x="${x}" y="${y}" width="8" height="5" rx="1.5" fill="${c}" transform="rotate(${i*37} ${x} ${y})"/>`).join("")}</g>`;
    case "sorpresa": return `<g class="cc-pop"><path d="M160 46 l6 -12 M170 58 l13 -4 M150 38 l-1 -13" stroke="var(--spark)" stroke-width="4" stroke-linecap="round"/></g>`;
    case "curioso": return `<text x="160" y="56" class="cc-q" font-family="var(--f-display)" font-weight="800" font-size="34" fill="var(--brand)">?</text>`;
    case "pensando": return `<g class="cc-dots"><circle cx="150" cy="44" r="4" fill="var(--ink-3)"/><circle cx="162" cy="32" r="5.5" fill="var(--ink-3)"/><circle cx="178" cy="18" r="7" fill="var(--ink-3)"/></g>`;
    case "triste": return `<path class="cc-tear" d="M75 86 q-4 8 0 11 q4 -3 0 -11z" fill="#6CB8F0"/>`;
    case "preocupado": return `<path class="cc-sweat" d="M146 56 q-6 10 0 14 q6 -4 0 -14z" fill="#8FD0F7" stroke="#4A9AD0" stroke-width="1"/>`;
    case "indignado": return `<g class="cc-steam"><path d="M48 40 q-6 -8 0 -16 q6 -8 0 -16" stroke="var(--spark)" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M152 40 q6 -8 0 -16 q-6 -8 0 -16" stroke="var(--spark)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
    case "animo": return `<path class="cc-spark" d="M170 70c.6 4 1.8 5.2 5.8 5.8-4 .6-5.2 1.8-5.8 5.8-.6-4-1.8-5.2-5.8-5.8 4-.6 5.2-1.8 5.8-5.8z" fill="var(--sun)"/>`;
    default: return "";
  }
}

const cheeks = m => {
  const c = m === "indignado" ? "#E2483A" : "#F08A6E";
  const o = m === "indignado" ? .55 : (m === "feliz" || m === "celebra" || m === "animo") ? .55 : .28;
  return `<ellipse cx="68" cy="97" rx="9" ry="5.5" fill="${c}" opacity="${o}"/><ellipse cx="132" cy="97" rx="9" ry="5.5" fill="${c}" opacity="${o}"/>`;
};

export function coco(mood = "neutral", opts = {}){
  const m = MOODS[mood] ? mood : "neutral";
  const size = opts.size || 120;
  const tilt = m === "curioso" ? -7 : m === "triste" ? 4 : m === "pensando" ? -4 : 0;
  const label = opts.label === false ? 'aria-hidden="true"' : `role="img" aria-label="Coco, ${MOODS[m].n.toLowerCase()}: ${MOODS[m].d.toLowerCase()}"`;
  return `<svg class="coco mood-${m} ${opts.cls || ""}" width="${size}" height="${Math.round(size * 1.05)}" viewBox="0 0 200 210" ${label} focusable="false">
  <ellipse cx="100" cy="202" rx="62" ry="7" fill="var(--shadow-ink)" opacity=".18"/>
  <g class="cc-body">
    <ellipse cx="100" cy="160" rx="62" ry="44" fill="${FUR}"/>
    <ellipse cx="100" cy="170" rx="36" ry="27" fill="${FUR_L}" opacity=".8"/>
    <rect x="62" y="186" width="22" height="18" rx="9" fill="${FUR_D}"/><rect x="116" y="186" width="22" height="18" rx="9" fill="${FUR_D}"/>
    <path d="M40 150 Q28 168 50 180" fill="none" stroke="#6D4A2B" stroke-width="6" stroke-linecap="round"/>
    <rect x="30" y="160" width="30" height="26" rx="7" fill="#5C7A3A" transform="rotate(-10 45 173)"/><rect x="33" y="163" width="24" height="7" rx="2" fill="#7B9C52" transform="rotate(-10 45 173)"/><rect x="40" y="157" width="16" height="6" rx="1" fill="#fff" opacity=".9" transform="rotate(-14 45 173)"/>
    ${arms(m)}
  </g>
  <g class="cc-head" transform="rotate(${tilt} 100 90)">
    <g class="cc-ears"><circle cx="64" cy="44" r="12" fill="${FUR_D}"/><circle cx="64" cy="45" r="5.5" fill="#E9A88D"/><circle cx="136" cy="44" r="12" fill="${FUR_D}"/><circle cx="136" cy="45" r="5.5" fill="#E9A88D"/></g>
    <rect x="50" y="36" width="100" height="100" rx="44" fill="${FUR}"/>
    <path d="M58 70 Q100 52 142 70" stroke="${FUR_D}" stroke-width="2" fill="none" opacity=".25"/>
    <g class="cc-sprout"><path d="M100 38 q-1 -10 3 -16" stroke="#3E8E4E" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M103 24 q10 -10 20 -4 q-8 10 -20 4z" fill="#58B368"/><path d="M101 28 q-12 -8 -18 0 q8 8 18 0z" fill="#7CCB7E"/></g>
    ${brows(m)}
    <g class="cc-eyes">${eyes(m)}</g>
    <rect x="66" y="88" width="68" height="46" rx="23" fill="${SNOUT}"/>
    ${cheeks(m)}
    <rect x="85" y="95" width="30" height="13" rx="6.5" fill="${NOSE}"/><ellipse cx="93" cy="101" rx="3" ry="2.2" fill="#000" opacity=".5"/><ellipse cx="107" cy="101" rx="3" ry="2.2" fill="#000" opacity=".5"/>
    <path d="M100 108 v4" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
    ${mouth(m)}
  </g>
  <g class="cc-badge">
    <path d="M78 132 L100 152 L122 132" fill="none" stroke="var(--spark)" stroke-width="4" stroke-linecap="round"/>
    <rect x="86" y="148" width="28" height="34" rx="5" fill="#fff" stroke="#E2D6C3" stroke-width="1.5"/>
    <rect x="86" y="148" width="28" height="8" rx="4" fill="var(--brand)"/><rect x="96" y="151" width="8" height="2" rx="1" fill="#fff"/>
    <circle cx="100" cy="165" r="5" fill="${FUR}"/><rect x="91" y="173" width="18" height="2.6" rx="1.3" fill="#C9BCA8"/><rect x="94" y="177" width="12" height="2" rx="1" fill="#DCD1C0"/>
  </g>
  ${extras(m)}
</svg>`;
}
