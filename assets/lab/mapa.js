// Piso 4 · Mapa de los 30 puestos: una constelación conectada con las 5 áreas de la Brújula
// y con las especialidades del oficio. Cada puesto abre su ficha visual y lleva a su mes.
import { areas, clusters } from '../../src/content/areas.js';
import { ORDEN, AREA } from '../puestos.js';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const COL = { atraer: '#F2A900', admin: '#7CC6EA', desarrollar: '#2F6B3F', cuidar: '#E4572E', estrategia: '#6B5BA8' };
const NIVEL = { entrada: 'Entrada', intermedio: 'Intermedio', senior: 'Senior' };
let cargos = {}, temporadas = {}, filtroNivel = 'todos';

async function datos() {
  if (Object.keys(cargos).length) return;
  try { const j = await (await fetch('assets/cargos.json')).json(); cargos = Object.fromEntries(j.map(c => [c.id, c])); } catch {}
  const mods = await Promise.all(['a', 'b', 'c', 'd'].map(g => import(`../puestos/grupo-${g}.js`).catch(() => null)));
  mods.forEach(m => m && Object.entries(m.DATOS).forEach(([id, d]) => { temporadas[id] = d.PUESTO; }));
  try { const s = await import('../seleccion.js'); temporadas['analista-seleccion'] = s.PUESTO; } catch {}
}
const foto = id => `assets/cargos/${cargos[id]?.img || id}.webp`;
const nombre = id => cargos[id]?.n || temporadas[id]?.nombre || id;
const nivel = id => cargos[id]?.lvl || (ORDEN.indexOf(id) < 9 ? 'entrada' : ORDEN.indexOf(id) < 23 ? 'intermedio' : 'senior');

export function vistaMapa() {
  return `<section aria-labelledby="conT">
    <div class="sec__h"><h2 id="conT">Treinta puestos, cinco áreas, un solo oficio</h2><p>Cada foto es un puesto que puedes vivir. Está unido al área de tu Brújula a la que pertenece. Toca uno para ver su día y entrar a su mes.</p></div>
    <div class="filtros" role="group" aria-label="Filtrar por nivel">${['todos', 'entrada', 'intermedio', 'senior'].map(n => `<button class="chip" type="button" data-nv="${n}" aria-pressed="${filtroNivel === n}">${n === 'todos' ? 'Todos los niveles' : NIVEL[n]}</button>`).join('')}</div>
    <div class="conste" id="conste"><p class="nota">Cargando el mapa…</p></div>
  </section>
  <section aria-labelledby="bentoT">
    <div class="sec__h"><h2 id="bentoT">Las cinco áreas, por dentro</h2><p>Las especialidades del oficio que alimentan a cada grupo de puestos.</p></div>
    <div class="bento" id="bento"></div>
  </section>
  <div class="velo" id="velo" hidden></div><aside class="detalle" id="detalle" aria-label="Ficha del puesto" tabindex="-1"></aside>`;
}

function constelacion() {
  const W = 1040, H = 900, cx = 520, cy = 450, R = 220, r = 158;
  const hubs = clusters.map((c, i) => { const a = (-90 + i * 72) * Math.PI / 180; return { ...c, x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), a }; });
  let lineas = '', nodos = '', defs = '';
  hubs.forEach(h => {
    lineas += `<line class="lin lin--hub" x1="${cx}" y1="${cy}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}" stroke="${COL[h.id]}"/>`;
    const ps = ORDEN.filter(p => AREA[p] === h.id), n = ps.length, abre = Math.min(175, 29 * (n - 1));
    ps.forEach((p, k) => {
      const ang = h.a + ((k - (n - 1) / 2) * (abre / Math.max(1, n - 1))) * Math.PI / 180, x = h.x + r * Math.cos(ang), y = h.y + r * Math.sin(ang), nv = nivel(p);
      defs += `<clipPath id="cp-${p}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="27"/></clipPath>`;
      lineas += `<line class="lin" data-p="${p}" x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${COL[h.id]}"/>`;
      nodos += `<a class="nodo" href="#mapa/${p}" data-p="${p}" data-nv="${nv}" aria-label="${esc(nombre(p))}, nivel ${NIVEL[nv]}"><circle class="nodo__halo" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="33" fill="${COL[h.id]}"/><image href="${foto(p)}" x="${(x - 27).toFixed(1)}" y="${(y - 27).toFixed(1)}" width="54" height="54" preserveAspectRatio="xMidYMid slice" clip-path="url(#cp-${p})"/><text class="nodo__t" x="${x.toFixed(1)}" y="${(y + 48).toFixed(1)}" text-anchor="middle">${esc(nombre(p).replace(/^(Analista|Asistente|Especialista|Jefe\/a|Supervisor\/a|Coordinador\/a|Gerente\/a|Practicante) (de |en |del )?/, '').slice(0, 22))}</text></a>`;
    });
    nodos += `<g class="hub"><circle cx="${h.x.toFixed(1)}" cy="${h.y.toFixed(1)}" r="44" fill="${COL[h.id]}"/><text x="${h.x.toFixed(1)}" y="${(h.y + 4).toFixed(1)}" text-anchor="middle" class="hub__t ${h.id === 'atraer' || h.id === 'admin' ? 'oscuro' : ''}">${esc(h.n.split(' ')[0])}</text></g>`;
  });
  const centro = `<g class="centro"><circle cx="${cx}" cy="${cy}" r="58" class="centro__c"/><image href="assets/kusi-feliz.webp" x="${cx - 44}" y="${cy - 50}" width="88" height="88"/><text x="${cx}" y="${cy + 46}" text-anchor="middle" class="centro__t">Tú</text></g>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="Mapa de los 30 puestos agrupados en cinco áreas"><defs>${defs}</defs>${lineas}${centro}${nodos}</svg>
    <div class="leyenda">${clusters.map(c => `<span><i style="background:${COL[c.id]}"></i>${esc(c.n)}</span>`).join('')}</div>`;
}

function bento() {
  return clusters.map((c, i) => {
    const ps = ORDEN.filter(p => AREA[p] === c.id), es = areas.filter(a => a.c === c.id);
    return `<article class="bento__c bento--${i}" style="--c:${COL[c.id]}"><header><i></i><h3>${esc(c.n)}</h3><p>${esc(c.d)}</p></header>
      <div class="bento__fotos">${ps.slice(0, 5).map(p => `<a href="#mapa/${p}" title="${esc(nombre(p))}"><img src="${foto(p)}" alt="${esc(nombre(p))}" loading="lazy" width="80" height="80"></a>`).join('')}</div>
      <p class="bento__n"><b>${ps.length}</b> puestos · <b>${es.length}</b> especialidades</p>
      <div class="bento__esp">${es.map(a => `<button type="button" class="etq" data-esp="${a.id}">${esc(a.n)}</button>`).join('')}</div></article>`;
  }).join('');
}

function ficha(p, M, reduce) {
  const d = document.getElementById('detalle'), c = cargos[p] || {}, t = temporadas[p] || {}, cl = AREA[p], nv = nivel(p);
  const listos = t.listos || 0, es = areas.filter(a => a.c === cl).slice(0, 6);
  d.style.setProperty('--c', COL[cl]);
  d.innerHTML = `<button class="cerrar" type="button" id="cerrarA" aria-label="Cerrar">×</button>
    <figure class="ficha-p__foto"><img src="${foto(p)}" alt="" width="600" height="400"><figcaption><span class="etq">${NIVEL[nv]}</span>${t.ciudad ? `<span class="etq">${esc(t.ciudad)}</span>` : ''}${c.sector ? `<span class="etq">${esc(c.sector)}</span>` : ''}</figcaption></figure>
    <h2>${esc(nombre(p))}</h2>
    ${c.mission ? `<p class="ficha-p__mision">«${esc(c.mission)}»</p>` : ''}
    ${t.temporada ? `<div class="ficha-p__temp"><img src="${t.foto || foto(p)}" alt="" width="120" height="120"><div><small>Su mes en VÍVELO RH</small><b>${esc(t.temporada)}</b><span>${listos ? `${listos} capítulo${listos > 1 ? 's' : ''} listo${listos > 1 ? 's' : ''} para jugar` : 'Se está escribiendo'}</span></div></div>` : ''}
    ${c.day?.length ? `<h3>Un día en este puesto</h3><ol class="reloj-dia">${c.day.map(([h, x]) => `<li><time>${esc(h)}</time><span>${esc(x)}</span></li>`).join('')}</ol>` : ''}
    ${c.hard ? `<div class="ficha-p__duro"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20zM12 10v5M12 18v.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><p><b>Lo difícil:</b> ${esc(c.hard)}</p></div>` : ''}
    <h3>Especialidades que usa</h3><div class="ficha-p__esp">${es.map(a => `<button type="button" class="etq" data-esp="${a.id}">${esc(a.n)}</button>`).join('')}</div><div id="espDet"></div>
    <div class="ficha-p__cta"><a class="btn" href="temporada.html#${p}">Vivir su mes</a>${listos ? `<a class="btn btn--sec" href="capitulo.html#${p === 'analista-seleccion' ? 'c1' : p + '-c1'}">Jugar el día 1</a>` : ''}</div>`;
  document.getElementById('velo').hidden = false; d.classList.add('on'); d.scrollTop = 0; d.focus({ preventScroll: true });
  if (M && !reduce) M.animate(d.querySelectorAll('.reloj-dia li'), { opacity: [0, 1], x: [16, 0] }, { delay: M.stagger(.07, { startDelay: .2 }), duration: .35, ease: 'easeOut' });
  const cerrar = () => { d.classList.remove('on'); document.getElementById('velo').hidden = true; history.replaceState(null, '', '#mapa'); };
  document.getElementById('cerrarA').addEventListener('click', cerrar); document.getElementById('velo').onclick = cerrar; d.onkeydown = e => { if (e.key === 'Escape') cerrar(); };
  d.querySelectorAll('[data-esp]').forEach(b => b.addEventListener('click', () => especialidad(b.dataset.esp, document.getElementById('espDet'))));
}

function especialidad(id, caja) {
  const a = areas.find(x => x.id === id); if (!a || !caja) return;
  const CTX = [['peq', 'Pequeña'], ['med', 'Mediana'], ['gra', 'Grande'], ['pub', 'Estado']];
  caja.innerHTML = `<div class="esp-mini" style="--c:${COL[a.c]}"><b>${esc(a.n)}</b><p>${esc(a.simple)}</p>
    <div class="esp-mini__barras">${CTX.map(([k, n]) => `<div title="${esc(a.exists[k][1])}"><i style="--s:${a.exists[k][0] / 3}"></i><small>${n}</small></div>`).join('')}</div>
    <div class="esp-mini__escalera">${[['Entrada', a.lv.e], ['Intermedio', a.lv.i], ['Senior', a.lv.s]].map(([n, x], i) => `<div style="--i:${i}"><small>${n}</small>${esc(x)}</div>`).join('')}</div></div>`;
  caja.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

export async function montarMapa(p, M, reduce) {
  await datos();
  const caja = document.getElementById('conste'); if (!caja) return;
  caja.innerHTML = constelacion();
  document.getElementById('bento').innerHTML = bento();
  const aplica = () => caja.querySelectorAll('.nodo').forEach(n => n.classList.toggle('apagado', filtroNivel !== 'todos' && n.dataset.nv !== filtroNivel));
  document.querySelectorAll('[data-nv]').forEach(b => b.addEventListener('click', () => { filtroNivel = b.dataset.nv; document.querySelectorAll('[data-nv]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); aplica(); }));
  aplica();
  // Las líneas se dibujan al entrar en pantalla y los puestos aparecen desde su área
  if (!reduce && 'IntersectionObserver' in window) {
    caja.querySelectorAll('.lin').forEach((l, i) => { const L = Math.hypot(l.x2.baseVal.value - l.x1.baseVal.value, l.y2.baseVal.value - l.y1.baseVal.value); l.style.strokeDasharray = L; l.style.strokeDashoffset = L; l.style.transitionDelay = (i * 18) + 'ms'; });
    caja.classList.add('por-dibujar');
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { caja.classList.add('dibujada'); io.disconnect(); if (M) try { M.animate([...caja.querySelectorAll('.nodo')], { scale: [.7, 1] }, { delay: M.stagger(.025, { startDelay: .25 }), type: 'spring', bounce: .45, duration: .6 }); } catch {} } }, { threshold: .15 });
    io.observe(caja);
  }
  caja.querySelectorAll('.nodo').forEach(n => {
    n.addEventListener('mouseenter', () => caja.querySelector(`.lin[data-p="${n.dataset.p}"]`)?.classList.add('on'));
    n.addEventListener('mouseleave', () => caja.querySelector(`.lin[data-p="${n.dataset.p}"]`)?.classList.remove('on'));
    n.addEventListener('click', e => { e.preventDefault(); history.replaceState(null, '', '#mapa/' + n.dataset.p); ficha(n.dataset.p, M, reduce); });
  });
  document.querySelectorAll('#bento a').forEach(a => a.addEventListener('click', e => { e.preventDefault(); const id = a.getAttribute('href').split('/')[1]; history.replaceState(null, '', '#mapa/' + id); ficha(id, M, reduce); }));
  document.querySelectorAll('#bento [data-esp]').forEach(b => b.addEventListener('click', () => { const art = b.closest('.bento__c'); let d = art.querySelector('.esp-host'); if (!d) { d = document.createElement('div'); d.className = 'esp-host'; art.append(d); } especialidad(b.dataset.esp, d); }));
  if (p) { if (ORDEN.includes(p)) ficha(p, M, reduce); else if (areas.some(a => a.id === p)) { const host = document.querySelector('#bento .esp-host') || document.createElement('div'); document.getElementById('bento').scrollIntoView(); } }
}
