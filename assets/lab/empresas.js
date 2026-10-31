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
let filtro = 'todas';

export function listaEmpresas() {
  const sect = [...new Set(empresas.list.map(e => e.sector.split(' · ')[0]))];
  return `<section aria-labelledby="empT">
    <div class="tira__cab"><h2 id="empT">Diez lugares donde la gente crece</h2><div class="tira__ctrl"><button type="button" class="tira__flecha" data-dir="-1" aria-label="Ver anteriores">‹</button><button type="button" class="tira__flecha" data-dir="1" aria-label="Ver siguientes">›</button></div></div>
    <div class="filtros" role="group" aria-label="Filtrar por sector"><button class="chip" type="button" data-s="todas" aria-pressed="${filtro === 'todas'}">Todas</button>${sect.map(s => `<button class="chip" type="button" data-s="${esc(s)}" aria-pressed="${filtro === s}">${esc(s)}</button>`).join('')}</div>
    <ul class="tira" id="tira">${empresas.list.map(e => `<li data-s="${esc(e.sector.split(' · ')[0])}"><a class="tira__c" href="#empresas/${e.id}" style="--c:${COL[e.tone] || '#7CC6EA'}"><img src="${portada(e)}" alt="" loading="lazy" width="800" height="1000"><span class="tira__mono">${esc(e.mono)}</span><span class="tira__txt"><small>${esc(e.sector)}</small><b>${esc(e.n)}</b><span class="tira__med">${e.recognitions.map(() => '<i></i>').join('')} ${e.recognitions.length} reconocimientos · ${e.practices.length} prácticas</span></span></a></li>`).join('')}</ul>
    <p class="nota">Información consultada el ${esc(empresas.consulted)}, de fuentes públicas.</p></section>`;
}

export function montarLista(M, reduce) {
  const tira = document.getElementById('tira'); if (!tira) return;
  document.querySelectorAll('.tira__flecha').forEach(b => b.addEventListener('click', () => tira.scrollBy({ left: +b.dataset.dir * tira.clientWidth * .8, behavior: reduce ? 'auto' : 'smooth' })));
  document.querySelectorAll('[data-s]').forEach(b => { if (b.tagName !== 'BUTTON') return; b.addEventListener('click', () => { filtro = b.dataset.s; document.querySelectorAll('button[data-s]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); tira.querySelectorAll('li').forEach(li => li.hidden = filtro !== 'todas' && li.dataset.s !== filtro); tira.scrollTo({ left: 0 }); }); });
  if (M && !reduce) try { M.animate([...tira.querySelectorAll('.tira__c')], { opacity: [0, 1], x: [60, 0] }, { delay: M.stagger(.06), type: 'spring', bounce: .25, duration: .7 }); } catch {}
}

export function vistaEmpresa(e) {
  const i = empresas.list.indexOf(e), sig = empresas.list[(i + 1) % empresas.list.length];
  return `<a class="volver" href="#empresas">← Todas las empresas</a>
  <header class="emp-hero" style="--c:${COL[e.tone] || '#7CC6EA'}"><img src="${portada(e)}" alt="" width="1600" height="1000"><div class="emp-hero__txt"><small>${esc(e.sector)} · ${esc(e.city)}</small><h1>${esc(e.n)}</h1><p>${esc(e.region)}</p></div></header>
  <section class="medallas" aria-label="Reconocimientos">${e.recognitions.map(r => `<a class="medalla2" ${r.url ? `href="${esc(r.url)}" target="_blank" rel="noopener"` : ''}><svg viewBox="0 0 64 80" aria-hidden="true"><path d="M20 44 12 78l20-10 20 10-8-34" fill="#E4572E"/><circle cx="32" cy="30" r="26" fill="#F2A900"/><circle cx="32" cy="30" r="19" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="3 4"/><text x="32" y="36" text-anchor="middle" font-size="15" font-weight="800" fill="#0F2A3D">${r.year}</text></svg><span>${esc(r.name)}${r.url ? ' ↗' : ''}</span></a>`).join('')}</section>
  <section aria-labelledby="pracT"><div class="sec__h"><h2 id="pracT">Qué hacen con su gente</h2><p>Toca una tarjeta del abanico.</p></div>
    <div class="abanico" id="abanico">${e.practices.map((p, k) => `<button type="button" class="naipe" style="--k:${k};--n:${e.practices.length};--c:${COL[p.area] || '#7CC6EA'}" aria-pressed="${k === 0}"><img src="${POOL[(i * 4 + k) % POOL.length]}" alt="" width="600" height="400" loading="lazy"><span class="naipe__area">${esc(CL[p.area] || p.area)}</span><b>${esc(p.t)}</b></button>`).join('')}</div>
    <div class="naipe__det" id="naipeDet" aria-live="polite"></div></section>
  <section class="aprende"><img src="assets/kusi-celebra.webp" alt="" width="140" height="140"><div><small>Lo que te llevas</small><p>${esc(strip(e.learn))}</p></div></section>
  <a class="sig-emp" href="#empresas/${sig.id}" style="--c:${COL[sig.tone] || '#7CC6EA'}"><img src="${portada(sig)}" alt="" width="800" height="500"><span><small>Siguiente empresa</small><b>${esc(sig.n)}</b></span></a>
  <p class="nota">${esc(empresas.disclaimer)}</p>`;
}

export function montarEmpresa(e, M, reduce) {
  const det = document.getElementById('naipeDet'), naipes = [...document.querySelectorAll('.naipe')];
  const muestra = k => { const p = e.practices[k]; naipes.forEach((n, j) => n.setAttribute('aria-pressed', String(j === k))); det.innerHTML = `<b>${esc(p.t)}</b><p>${esc(strip(p.d))}</p>`; if (M && !reduce) M.animate(det, { opacity: [0, 1], y: [10, 0] }, { duration: .3 }); };
  naipes.forEach((n, k) => n.addEventListener('click', () => muestra(k)));
  muestra(0);
  if (M && !reduce) try {
    M.animate('.emp-hero img', { scale: [1.12, 1] }, { duration: 1.2, ease: 'easeOut' });
    M.inView('#abanico', () => { M.animate(naipes, { opacity: [0, 1], y: [60, 0] }, { delay: M.stagger(.08), type: 'spring', bounce: .3, duration: .7 }); });
  } catch {}
}
