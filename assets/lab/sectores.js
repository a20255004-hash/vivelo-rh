// Piso 6 · Sectores: empresa privada y Estado, comparados con imágenes, juego y diagramas.
import { sectors } from '../../src/content/sectors.js';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const mezcla = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

// Íconos de trazo, uno por diferencia
const P = {
  meta: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  llave: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3"/>',
  puerta: '<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18"/><circle cx="15" cy="12" r="1"/>',
  doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  monedas: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  personas: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.2A5 5 0 0 1 21 19"/>',
  balanza: '<path d="M12 3v18M5 21h14M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>',
  estrella: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  monte: '<path d="m3 20 6-11 4 6 3-4 5 9z"/>',
  edificio: '<path d="M4 21V5l8-3 8 3v16M2 21h20M9 9h1M14 9h1M9 13h1M14 13h1M10 21v-4h4v4"/>',
  mapa: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
  ayuntamiento: '<path d="M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6z"/>',
  sello: '<path d="M9 3h6v5l3 4H6l3-4zM5 15h14v3H5zM7 21h10"/>',
};
const ico = (k, c = '') => `<svg class="ico ${c}" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[k]}</g></svg>`;
const ICOS = ['meta', 'llave', 'puerta', 'doc', 'reloj', 'monedas', 'personas', 'balanza', 'estrella', 'monte'];
const REG = { 728: ['corporativo', 'Empresa privada'], 276: ['municipalidad', 'Estado · carrera'], 1057: ['hospital', 'Estado · CAS'], 30057: ['oficina', 'Estado · Servicio Civil'] };
const ENT = ['edificio', 'mapa', 'ayuntamiento', 'sello'];
const ESC = 'assets/3d/scenes/';

export function vistaSectores() {
  const d = sectors;
  return `
  <section class="duelo" aria-labelledby="dueloT">
    <div class="sec__h"><h2 id="dueloT">Dos edificios, un mismo oficio</h2><p>Arrastra el divisor: a la izquierda, RR.HH. en una empresa privada; a la derecha, en una entidad del Estado.</p></div>
    <div class="duelo__esc" id="duelo" style="--x:50%">
      <img src="${ESC}corporativo.webp" alt="Ilustración de un piso corporativo con un equipo trabajando" class="duelo__a" width="1600" height="1000">
      <img src="${ESC}municipalidad.webp" alt="Ilustración de una municipalidad con vecinos haciendo fila" class="duelo__b" width="1600" height="1000">
      <span class="duelo__et izq">Empresa privada</span><span class="duelo__et der">Sector público</span>
      <span class="duelo__linea" aria-hidden="true"><span class="duelo__asa">${ico('balanza')}</span></span>
      <input type="range" min="0" max="100" value="50" id="dueloR" aria-label="Comparar empresa privada y sector público" aria-valuetext="Mitad y mitad">
    </div>
    <div class="duelo__frase" id="dueloF" aria-live="polite"></div>
  </section>

  <section class="juego" aria-labelledby="juegoT">
    <div class="sec__h"><h2 id="juegoT">¿Privado o público?</h2><p>Lee cada frase y adivina de qué lado viene. Son las diez diferencias que más pesan en el día a día.</p></div>
    <div class="juego__mesa" id="juego"></div>
  </section>

  <section class="espejo" aria-labelledby="espejoT">
    <div class="sec__h"><h2 id="espejoT">Las diez diferencias, frente a frente</h2><p>Toca un tema para ver cómo se vive en cada lado.</p></div>
    <div class="espejo__cab"><span>${ico('edificio')} Empresa privada</span><span>Sector público ${ico('ayuntamiento')}</span></div>
    <ol class="espejo__lista">${d.dims.map((x, i) => `<li><button type="button" class="espejo__fila" aria-expanded="${i === 0}" data-i="${i}">
      <span class="espejo__l">${esc(x.pri)}</span><span class="espejo__n"><i>${ico(ICOS[i])}</i><b>${esc(x.n)}</b></span><span class="espejo__r">${esc(x.pub)}</span></button></li>`).join('')}</ol>
  </section>

  <section aria-labelledby="regT">
    <div class="sec__h"><h2 id="regT">Cuatro puertas de entrada</h2><p>Los regímenes laborales: bajo qué reglas trabaja cada persona. Toca una puerta.</p></div>
    <div class="puertas">${d.regimenes.map(r => { const [img, lado] = REG[r.code] || ['oficina', '']; return `<button type="button" class="puerta" aria-expanded="false">
      <span class="puerta__img"><img src="${ESC}${img}-sq.webp" alt="" loading="lazy" width="800" height="800"></span>
      <span class="puerta__code">${esc(r.code)}</span><b>${esc(r.n)}</b><small>${esc(lado)}</small>
      <span class="puerta__det"><span><em>Quién</em>${esc(r.who)}</span><span><em>Cómo se ingresa</em>${esc(r.in)}</span><span><em>Beneficios</em>${esc(r.ben)}</span>${r.note ? `<span><em>Ojo</em>${esc(r.note)}</span>` : ''}</span></button>`; }).join('')}</div>
  </section>

  <section aria-labelledby="casoT">
    <div class="sec__h"><h2 id="casoT">El mismo caso, dos caminos</h2><p>Elige una situación y mira cómo avanza en cada carril.</p></div>
    <div class="filtros" role="tablist" aria-label="Casos">${d.cases.map((c, i) => `<button class="chip" role="tab" type="button" data-c="${i}" aria-selected="${i === 0}" aria-pressed="${i === 0}">${esc(c.n)}</button>`).join('')}</div>
    <div class="carriles" id="carriles" role="tabpanel"></div>
  </section>

  <section aria-labelledby="tamT">
    <div class="sec__h"><h2 id="tamT">En lo privado, el tamaño lo cambia todo</h2><p>Toca cada edificio.</p></div>
    <div class="tamanos">${d.privSizes.map((s, i) => `<button type="button" class="tam" aria-pressed="${i === 1}" data-t="${i}"><svg viewBox="0 0 120 120" aria-hidden="true" class="tam__ed" style="--h:${[.38, .62, .95][i]}"><rect x="${[42, 32, 24][i]}" y="${120 - [44, 74, 112][i]}" width="${[36, 56, 72][i]}" height="${[44, 74, 112][i]}" rx="6"/>${Array.from({ length: [2, 6, 12][i] }, (_, k) => { const cols = [2, 3, 4][i], x0 = [48, 38, 30][i], y0 = 120 - [44, 74, 112][i] + 8; return `<rect class="v" x="${x0 + (k % cols) * 14}" y="${y0 + Math.floor(k / cols) * 16}" width="8" height="9" rx="2"/>`; }).join('')}</svg><b>${esc(s.n)}</b></button>`).join('')}</div>
    <p class="tam__txt" id="tamTxt" aria-live="polite">${esc(d.privSizes[1].d)}</p>
  </section>

  <section aria-labelledby="entT">
    <div class="sec__h"><h2 id="entT">En el Estado, ¿dónde trabajarías?</h2></div>
    <div class="entidades">${d.entities.map((e, i) => `<article class="entidad"><i>${ico(ENT[i % ENT.length])}</i><b>${esc(e.n)}</b><p>${esc(e.d)}</p></article>`).join('')}</div>
  </section>`;
}

export function montarSectores(M, reduce) {
  const d = sectors;
  // Comparador deslizable
  const duelo = document.getElementById('duelo'), r = document.getElementById('dueloR'), f = document.getElementById('dueloF');
  const frase = v => {
    const lado = v < 40 ? 'pub' : v > 60 ? 'pri' : null;
    duelo.style.setProperty('--x', v + '%');
    r.setAttribute('aria-valuetext', lado === 'pri' ? 'Se ve más la empresa privada' : lado === 'pub' ? 'Se ve más el sector público' : 'Mitad y mitad');
    f.innerHTML = lado ? `<span class="tipo">${lado === 'pri' ? 'En la empresa privada' : 'En el sector público'}, RR.HH. existe para…</span><p>${esc(d.dims[0][lado])}</p>` : `<span class="tipo">Mueve el divisor hacia un lado</span><p>Los dos necesitan buenas personas. Lo que cambia son las reglas.</p>`;
  };
  r.addEventListener('input', () => frase(+r.value)); frase(50);
  if (M && !reduce) M.inView(duelo, () => { M.animate(50, 30, { duration: .7, ease: 'easeInOut', onUpdate: v => { r.value = v; duelo.style.setProperty('--x', v + '%'); } }).then(() => M.animate(30, 50, { type: 'spring', bounce: .4, duration: .8, onUpdate: v => { r.value = v; duelo.style.setProperty('--x', v + '%'); } })); }, { amount: .6 });

  // Juego: ¿privado o público?
  const mesa = document.getElementById('juego');
  const cartas = mezcla(d.dims.map((x, i) => ({ i, lado: Math.random() < .5 ? 'pri' : 'pub' }))); let k = 0, aciertos = 0;
  const carta = () => {
    if (k >= cartas.length) {
      mesa.innerHTML = `<div class="juego__fin"><img src="assets/kusi-${aciertos >= 8 ? 'celebra' : 'feliz'}.webp" alt=""><div><p class="podio__num">${aciertos}/10</p><p>${aciertos >= 8 ? '¡Distingues los dos mundos como una profesional!' : 'Mira las diez diferencias frente a frente aquí abajo y vuelve a jugar.'}</p><button class="btn" type="button" id="otraVez">Jugar otra vez</button></div></div>`;
      document.getElementById('otraVez').addEventListener('click', () => { k = 0; aciertos = 0; cartas.sort(() => Math.random() - .5); carta(); }); return;
    }
    const c = cartas[k], x = d.dims[c.i];
    mesa.innerHTML = `<div class="juego__barra" aria-hidden="true"><i style="transform:scaleX(${k / cartas.length})"></i></div>
      <article class="juego__carta" id="carta"><span class="tipo">${ico(ICOS[c.i])} ${esc(x.n)} · ${k + 1} de 10</span><p>«${esc(x[c.lado])}»</p></article>
      <div class="juego__ops"><button class="lado lado--pri" type="button" data-l="pri"><img src="${ESC}corporativo-sq.webp" alt="" width="800" height="800"><b>Empresa privada</b></button><button class="lado lado--pub" type="button" data-l="pub"><img src="${ESC}municipalidad-sq.webp" alt="" width="800" height="800"><b>Sector público</b></button></div><div id="juegoV" aria-live="polite"></div>`;
    if (M && !reduce) M.animate('#carta', { opacity: [0, 1], y: [16, 0], rotate: [-1.5, 0] }, { type: 'spring', bounce: .3, duration: .5 });
    mesa.querySelectorAll('.lado').forEach(b => b.addEventListener('click', () => {
      const ok = b.dataset.l === c.lado; if (ok) aciertos++;
      mesa.querySelectorAll('.lado').forEach(x => { x.disabled = true; x.classList.add(x.dataset.l === c.lado ? 'ok' : 'no'); });
      const otro = c.lado === 'pri' ? 'pub' : 'pri';
      document.getElementById('juegoV').innerHTML = `<div class="veredicto ${ok ? 'bien' : 'mal'}"><h3>${ok ? '¡Bien visto!' : 'Era del otro lado'}</h3><p><b>${c.lado === 'pri' ? 'En el sector público' : 'En la empresa privada'}, en cambio:</b> ${esc(x[otro])}</p><div><button class="btn" type="button" id="sigC">${k + 1 < cartas.length ? 'Siguiente frase' : 'Ver mi resultado'}</button></div></div>`;
      if (M && !reduce) M.animate(b, { scale: [1, 1.05, 1] }, { duration: .35 });
      document.getElementById('sigC').addEventListener('click', () => { k++; carta(); });
      document.getElementById('sigC').focus({ preventScroll: true });
    }));
  };
  carta();

  // Espejo: una fila abierta a la vez
  document.querySelectorAll('.espejo__fila').forEach(b => b.addEventListener('click', () => {
    const abre = b.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('.espejo__fila').forEach(x => x.setAttribute('aria-expanded', 'false'));
    b.setAttribute('aria-expanded', String(abre));
  }));
  if (M && !reduce) M.inView('.espejo__lista', el => { M.animate(el.querySelectorAll('li'), { opacity: [0, 1], x: [-12, 0] }, { delay: M.stagger(.05), duration: .4, ease: 'easeOut' }); }, { amount: .2 });

  // Puertas
  document.querySelectorAll('.puerta').forEach(b => b.addEventListener('click', () => b.setAttribute('aria-expanded', String(b.getAttribute('aria-expanded') !== 'true'))));

  // Carriles de casos
  const pinta = i => {
    const c = d.cases[i], carril = (lado, pasos, img) => `<div class="carril carril--${lado}"><span class="carril__cab"><img src="${ESC}${img}-sq.webp" alt="" width="800" height="800">${lado === 'pri' ? 'Empresa privada' : 'Sector público'}</span><ol>${pasos.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join('')}</ol></div>`;
    document.getElementById('carriles').innerHTML = carril('pri', c.pri, 'corporativo') + carril('pub', c.pub, 'municipalidad') + `<p class="leccion">${esc(c.lesson)}</p>`;
    if (M && !reduce) document.querySelectorAll('.carril ol').forEach(ol => M.animate(ol.querySelectorAll('li'), { opacity: [0, 1], y: [10, 0] }, { delay: M.stagger(.08), duration: .35, ease: 'easeOut' }));
  };
  document.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('[data-c]').forEach(x => { x.setAttribute('aria-selected', String(x === b)); x.setAttribute('aria-pressed', String(x === b)); }); pinta(+b.dataset.c); }));
  pinta(0);

  // Tamaños
  document.querySelectorAll('.tam').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.tam').forEach(x => x.setAttribute('aria-pressed', String(x === b))); document.getElementById('tamTxt').textContent = d.privSizes[+b.dataset.t].d; if (M && !reduce) M.animate(b.querySelector('svg'), { scale: [.9, 1] }, { type: 'spring', bounce: .5, duration: .5 }); }));
}
