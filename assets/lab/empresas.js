// Piso 5 · Empresas. Tira de fotos con desplazamiento horizontal (cada empresa con su propia imagen),
// portada a pantalla completa y prácticas como un abanico de tarjetas que se despliega.
import { empresas } from '../../src/content/empresas.js';
import { clusters } from '../../src/content/areas.js';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const strip = h => String(h ?? '').replace(/<[^>]+>/g, '');
const COL = { atraer: '#F2A900', admin: '#7CC6EA', desarrollar: '#2F6B3F', cuidar: '#E4572E', estrategia: '#6B5BA8', bienestar: '#E4572E' };
const CL = Object.fromEntries(clusters.map(c => [c.id, c.n]));
// Una imagen distinta para cada empresa (fotos y dioramas, sin repetir)
const PORTADA = { interbank: 'assets/foto2/celebra-laptop.webp', compartamos: 'assets/foto/mentora.webp', viru: 'assets/3d/scenes/agro.webp', 'caja-arequipa': 'assets/foto/reunion-jefa.webp', ferreyros: 'assets/3d/scenes/planta.webp', metso: 'assets/foto/supervisa.webp', antamina: 'assets/3d/scenes/mineria.webp', 'plaza-vea': 'assets/3d/scenes/retail.webp', konecta: 'assets/foto2/callcenter.webp', servir: 'assets/3d/scenes/municipalidad.webp' };
const POOL = ['assets/foto2/aplausos-verde.webp', 'assets/foto2/mesa-mujeres.webp', 'assets/foto/taller.webp', 'assets/foto2/chocan-manos.webp', 'assets/foto/capacitacion.webp', 'assets/foto2/celebra-brazos.webp', 'assets/foto/plano-equipo.webp', 'assets/foto2/reunion-circulos.webp', 'assets/foto2/celebra-papel.webp', 'assets/foto/equipo-rojo.webp', 'assets/foto2/presentacion.webp', 'assets/foto/oficina-abierta.webp', 'assets/foto2/tablet-equipo.webp', 'assets/foto/cafe.webp', 'assets/foto2/celebra-tablet.webp', 'assets/foto/acuerdo.webp'];
const portada = e => PORTADA[e.id] || POOL[empresas.list.indexOf(e) % POOL.length];
let filtro = 'todas', valor = null;
// Información ampliada e investigada (assets/lab/empresas-extra.js). Si aún no existe, la ficha funciona igual.
const X = await import('./empresas-extra.js').catch(() => ({ EXTRA: {}, CONSULTADO: '' }));
const EXTRA = X.EXTRA || {};
// Temas de las prácticas, con color e ícono propios
const TEMA = {
  bienestar: ['Bienestar', '#E4572E', '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'],
  capacitacion: ['Aprendizaje', '#2F6B3F', '<path d="M3 8l9-4 9 4-9 4zM7 10v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5"/>'],
  diversidad: ['Diversidad e inclusión', '#6B5BA8', '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2 20c0-3 2.7-5 6-5M22 20c0-3-2.7-5-6-5M9 20c0-2.5 1.3-4 3-4s3 1.5 3 4"/>'],
  liderazgo: ['Liderazgo', '#F2A900', '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8-4.3-4.1 5.9-.9z"/>'],
  comunidad: ['Comunidad', '#1F6F9E', '<path d="M3 21V10l9-6 9 6v11M9 21v-6h6v6"/>'],
  experiencia: ['Experiencia del colaborador', '#7CC6EA', '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>'],
  tecnologia: ['Tecnología', '#0F2A3D', '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'],
  atraccion: ['Atracción de talento', '#B0703F', '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>'],
  desempeno: ['Desempeño', '#3E9A6A', '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'],
};
const tema = k => TEMA[k] || [k, '#7CC6EA', '<circle cx="12" cy="12" r="8"/>'];
const ico = k => `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${tema(k)[2]}</g></svg>`;
const temasDe = e => [...new Set(e.practices.map(p => p.area))];

export function listaEmpresas() {
  const sect = [...new Set(empresas.list.map(e => e.sector.split(' · ')[0]))];
  return `<section aria-labelledby="empT">
    <div class="tira__cab"><h2 id="empT">Diez lugares donde la gente crece</h2><div class="tira__ctrl"><button type="button" class="tira__flecha" data-dir="-1" aria-label="Ver anteriores">‹</button><button type="button" class="tira__flecha" data-dir="1" aria-label="Ver siguientes">›</button></div></div>
    <div class="filtros" role="group" aria-label="Filtrar por sector"><button class="chip" type="button" data-s="todas" aria-pressed="${filtro === 'todas'}">Todas</button>${sect.map(s => `<button class="chip" type="button" data-s="${esc(s)}" aria-pressed="${filtro === s}">${esc(s)}</button>`).join('')}</div>
    <div class="valoras"><p>¿Qué valoras más en un lugar de trabajo?</p><div class="valoras__ops">${Object.entries(TEMA).filter(([k]) => empresas.list.some(e => temasDe(e).includes(k))).map(([k, [n, c]]) => `<button type="button" data-v="${k}" aria-pressed="false" style="--c:${c}">${ico(k)}<span>${n}</span></button>`).join('')}</div><p class="valoras__res" id="valRes" aria-live="polite"></p></div>
    <ul class="tira" id="tira">${empresas.list.map(e => `<li data-s="${esc(e.sector.split(' · ')[0])}" data-t="${temasDe(e).join(' ')}"><a class="tira__c" href="#empresas/${e.id}" style="--c:${COL[e.tone] || '#7CC6EA'}"><img src="${portada(e)}" alt="" loading="lazy" width="800" height="1000"><span class="tira__mono">${esc(e.mono)}</span><span class="tira__txt"><small>${esc(e.sector)}</small><b>${esc(e.n)}</b><span class="tira__temas">${temasDe(e).map(k => `<i style="--c:${tema(k)[1]}" title="${tema(k)[0]}">${ico(k)}</i>`).join('')}</span><span class="tira__med">${e.recognitions.map(() => '<i></i>').join('')} ${e.recognitions.length} reconocimientos · ${e.practices.length} prácticas</span></span></a></li>`).join('')}</ul>
    <p class="nota">Información consultada el ${esc(empresas.consulted)}, de fuentes públicas.</p></section>`;
}

export function montarLista(M, reduce) {
  const tira = document.getElementById('tira'); if (!tira) return;
  document.querySelectorAll('.tira__flecha').forEach(b => b.addEventListener('click', () => tira.scrollBy({ left: +b.dataset.dir * tira.clientWidth * .8, behavior: reduce ? 'auto' : 'smooth' })));
  document.querySelectorAll('[data-s]').forEach(b => { if (b.tagName !== 'BUTTON') return; b.addEventListener('click', () => { filtro = b.dataset.s; document.querySelectorAll('button[data-s]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); tira.querySelectorAll('li').forEach(li => li.hidden = filtro !== 'todas' && li.dataset.s !== filtro); tira.scrollTo({ left: 0 }); }); });
  document.querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => {
    valor = b.getAttribute('aria-pressed') === 'true' ? null : b.dataset.v;
    document.querySelectorAll('[data-v]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.v === valor)));
    const lis = [...tira.querySelectorAll('li')]; lis.forEach(li => li.classList.toggle('opaca', !!valor && !li.dataset.t.split(' ').includes(valor)));
    const n = lis.filter(li => !li.classList.contains('opaca')).length;
    document.getElementById('valRes').textContent = valor ? `${n} empresa${n === 1 ? '' : 's'} destacan en ${tema(valor)[0].toLowerCase()}.` : '';
    const pri = lis.find(li => !li.classList.contains('opaca')); if (valor && pri) tira.scrollTo({ left: pri.offsetLeft - tira.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
  }));
  if (M && !reduce) try { M.animate([...tira.querySelectorAll('.tira__c')], { opacity: [0, 1], x: [60, 0] }, { delay: M.stagger(.06), type: 'spring', bounce: .25, duration: .7 }); } catch {}
}

export function vistaEmpresa(e) {
  const i = empresas.list.indexOf(e), sig = empresas.list[(i + 1) % empresas.list.length];
  return `<a class="volver" href="#empresas">← Todas las empresas</a>
  <header class="emp-hero" style="--c:${COL[e.tone] || '#7CC6EA'}"><img src="${portada(e)}" alt="" width="1600" height="1000"><div class="emp-hero__txt"><small>${esc(e.sector)} · ${esc(e.city)}</small><h1>${esc(e.n)}</h1><p>${esc(e.region)}</p></div></header>
  ${(() => { const x = EXTRA[e.id]; if (!x) return ''; return `
  ${x.queHace ? `<p class="emp-que">${esc(x.queHace)}</p>` : ''}
  ${x.datos?.length ? `<section class="cifras" aria-label="Cifras clave">${x.datos.map(d => `<a class="cifra" ${d.u ? `href="${esc(d.u)}" target="_blank" rel="noopener"` : ''}><b data-cuenta="${esc(d.v)}">${esc(d.v)}</b><span>${esc(d.t)}</span></a>`).join('')}</section>` : ''}
  ${x.hitos?.length ? `<section aria-labelledby="hitT"><div class="sec__h"><h2 id="hitT">Su historia con su gente</h2><p>Toca cada año.</p></div><ol class="hitos" id="hitos">${x.hitos.map((h, k) => `<li><button type="button" aria-pressed="${k === x.hitos.length - 1}" data-h="${k}"><b>${esc(h.a)}</b></button></li>`).join('')}</ol><div class="hito__det" id="hitoDet" aria-live="polite"></div></section>` : ''}
  ${x.beneficios?.length ? `<section aria-labelledby="benT"><div class="sec__h"><h2 id="benT">Lo que ofrece a quienes trabajan ahí</h2></div><div class="benef">${x.beneficios.map((b, k) => `<a class="benef__c" style="--c:${['#F2A900', '#7CC6EA', '#8FD3A4', '#F29C85', '#B9AEF0', '#FBE3A6'][k % 6]}" ${b.u ? `href="${esc(b.u)}" target="_blank" rel="noopener"` : ''}><i>${['✦', '♥', '★', '◆', '●', '▲'][k % 6]}</i><b>${esc(b.t)}</b><span>${esc(b.d || '')}</span></a>`).join('')}</div></section>` : ''}
  ${x.reconocimientos?.length ? `<section class="medallas" aria-label="Reconocimientos recientes">${x.reconocimientos.map(r => `<a class="medalla2" ${r.u ? `href="${esc(r.u)}" target="_blank" rel="noopener"` : ''}><svg viewBox="0 0 64 80" aria-hidden="true"><path d="M20 44 12 78l20-10 20 10-8-34" fill="#2F6B3F"/><circle cx="32" cy="30" r="26" fill="#F2A900"/><text x="32" y="36" text-anchor="middle" font-size="15" font-weight="800" fill="#0F2A3D">${esc(r.a)}</text></svg><span>${esc(r.t)}${r.u ? ' ↗' : ''}</span></a>`).join('')}</section>` : ''}
  ${x.trabaja?.u ? `<a class="btn emp-trabaja" href="${esc(x.trabaja.u)}" target="_blank" rel="noopener">${esc(x.trabaja.t || 'Ver sus ofertas de empleo')} ↗</a>` : ''}
  ${x.perfiles?.length ? `<div class="emp-perfiles"><small>Suele convocar</small>${x.perfiles.map(t => `<span class="etq">${esc(t)}</span>`).join('')}</div>` : ''}`; })()}
  <section class="emp-datos" aria-label="Resumen visual">
    <div class="emp-dato"><b>${e.recognitions.length}</b><span>reconocimientos</span></div>
    <div class="emp-dato"><b>${e.practices.length}</b><span>prácticas con su gente</span></div>
    <div class="emp-dato"><b>${temasDe(e).length}</b><span>temas que trabaja</span></div>
    <div class="emp-rueda">${Object.keys(TEMA).map((k, i, arr) => { const a = (i / arr.length) * 2 * Math.PI - Math.PI / 2, on = temasDe(e).includes(k); return `<span class="${on ? 'on' : ''}" style="--c:${tema(k)[1]};left:${50 + 40 * Math.cos(a)}%;top:${50 + 40 * Math.sin(a)}%" title="${tema(k)[0]}">${ico(k)}</span>`; }).join('')}<em>${esc(e.mono)}</em></div>
  </section>
  <section class="medallas" aria-label="Reconocimientos">${e.recognitions.map(r => `<a class="medalla2" ${r.url ? `href="${esc(r.url)}" target="_blank" rel="noopener"` : ''}><svg viewBox="0 0 64 80" aria-hidden="true"><path d="M20 44 12 78l20-10 20 10-8-34" fill="#E4572E"/><circle cx="32" cy="30" r="26" fill="#F2A900"/><circle cx="32" cy="30" r="19" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="3 4"/><text x="32" y="36" text-anchor="middle" font-size="15" font-weight="800" fill="#0F2A3D">${r.year}</text></svg><span>${esc(r.name)}${r.url ? ' ↗' : ''}</span></a>`).join('')}</section>
  <section aria-labelledby="pracT"><div class="sec__h"><h2 id="pracT">Qué hacen con su gente</h2><p>Toca una tarjeta del abanico.</p></div>
    <div class="abanico" id="abanico">${e.practices.map((p, k) => `<button type="button" class="naipe" style="--k:${k};--n:${e.practices.length};--c:${tema(p.area)[1]}" aria-pressed="${k === 0}"><img src="${POOL[(i * 4 + k) % POOL.length]}" alt="" width="600" height="400" loading="lazy"><span class="naipe__area">${ico(p.area)}${esc(tema(p.area)[0])}</span><b>${esc(p.t)}</b></button>`).join('')}</div>
    <div class="naipe__det" id="naipeDet" aria-live="polite"></div></section>
  <section class="aprende"><img src="assets/kusi-celebra.webp" alt="" width="140" height="140"><div><small>Lo que te llevas</small><p>${esc(strip(e.learn))}</p></div></section>
  <a class="sig-emp" href="#empresas/${sig.id}" style="--c:${COL[sig.tone] || '#7CC6EA'}"><img src="${portada(sig)}" alt="" width="800" height="500"><span><small>Siguiente empresa</small><b>${esc(sig.n)}</b></span></a>
  <p class="nota">${esc(empresas.disclaimer)}</p>`;
}

export function montarEmpresa(e, M, reduce) {
  const det = document.getElementById('naipeDet'), naipes = [...document.querySelectorAll('.naipe')];
  const muestra = k => { const p = e.practices[k]; naipes.forEach((n, j) => n.setAttribute('aria-pressed', String(j === k))); det.innerHTML = `<span class="naipe__tema" style="--c:${tema(p.area)[1]}">${ico(p.area)}${esc(tema(p.area)[0])}</span><b>${esc(p.t)}</b><p>${esc(strip(p.d))}</p>`; if (M && !reduce) M.animate(det, { opacity: [0, 1], y: [10, 0] }, { duration: .3 }); };
  naipes.forEach((n, k) => n.addEventListener('click', () => muestra(k)));
  const x = EXTRA[e.id];
  if (x?.hitos?.length) {
    const det = document.getElementById('hitoDet'), bs = [...document.querySelectorAll('#hitos button')];
    const ver = k => { bs.forEach((b, j) => b.setAttribute('aria-pressed', String(j === k))); const h = x.hitos[k]; det.innerHTML = `<b>${esc(h.a)}</b><p>${esc(h.t)}</p>${h.u ? `<a href="${esc(h.u)}" target="_blank" rel="noopener">Fuente ↗</a>` : ''}`; if (M && !reduce) M.animate(det, { opacity: [0, 1], x: [16, 0] }, { duration: .3 }); };
    bs.forEach((b, k) => b.addEventListener('click', () => ver(k))); ver(x.hitos.length - 1);
  }
  // Cifras que cuentan al aparecer
  document.querySelectorAll('[data-cuenta]').forEach(b => {
    const m = b.dataset.cuenta.match(/^([^\d]*)([\d.,]+)(.*)$/); if (!m || !M || reduce) return;
    const fin = parseFloat(m[2].replace(/,/g, '')); if (!isFinite(fin) || /^(19|20)\d\d$/.test(m[2])) return;
    try { M.inView(b, () => { M.animate(0, fin, { duration: 1.2, ease: 'easeOut', onUpdate: v => { b.textContent = m[1] + Math.round(v).toLocaleString('en-US') + m[3]; } }); }); } catch {}
  });
  muestra(0);
  if (M && !reduce) try {
    M.animate('.emp-hero img', { scale: [1.12, 1] }, { duration: 1.2, ease: 'easeOut' });
    M.inView('#abanico', () => { M.animate(naipes, { opacity: [0, 1], y: [60, 0] }, { delay: M.stagger(.08), type: 'spring', bounce: .3, duration: .7 }); });
  } catch {}
}
