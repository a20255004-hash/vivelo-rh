// Piso 3 · Academia. Lista tipográfica (al pasar el cursor aparece la imagen) y cada concepto como un recorrido
// con índice lateral: la idea, el diagrama interactivo, una pregunta, «¿así o así?», errores y cómo se mide.
import { concepts } from '../../src/content/concepts.js';
import { areas, clusters } from '../../src/content/areas.js';
import { VIZ } from './viz.js';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const strip = h => String(h ?? '').replace(/<[^>]+>/g, '');
const frase = h => { const t = strip(h); const m = t.match(/^.+?[.!?](\s|$)/); return (m ? m[0] : t).trim(); };
const COL = { atraer: '#F2A900', admin: '#7CC6EA', desarrollar: '#2F6B3F', cuidar: '#E4572E', estrategia: '#6B5BA8' };
const IMG = { atraer: 'reunion', admin: 'boleta', desarrollar: 'academia', cuidar: 'hospital', estrategia: 'brujula' };
const PAL = ['#F2A900', '#7CC6EA', '#8FD3A4', '#F29C85', '#B9AEF0', '#FBE3A6'];
const clusterDe = c => areas.find(a => a.id === c.areas[0])?.c || 'atraer';
const img = c => `assets/3d/scenes/${IMG[clusterDe(c)]}-sq.webp`;
let filtro = 'todo';

export function listaAcademia(vistos) {
  return `<section class="kin" aria-labelledby="kinT">
    <div class="kin__lado"><h2 id="kinT">${concepts.length} conceptos</h2><p>Pasa el cursor por una palabra para verla. Toca para entrar.</p>
      <div class="kin__filtros" role="group" aria-label="Filtrar por área"><button type="button" data-k="todo" aria-pressed="${filtro === 'todo'}">Todos <sup>${concepts.length}</sup></button>${clusters.map(c => `<button type="button" data-k="${c.id}" aria-pressed="${filtro === c.id}" style="--c:${COL[c.id]}"><i></i>${esc(c.n)} <sup>${concepts.filter(x => clusterDe(x) === c.id).length}</sup></button>`).join('')}</div>
      <p class="kin__prog"><b>${vistos.length}</b> de ${concepts.length} leídos</p></div>
    <ul class="kin__lista" id="kin">${concepts.map((c, i) => `<li data-cl="${clusterDe(c)}"><a href="#academia/${c.id}" data-img="${img(c)}" class="${vistos.includes(c.id) ? 'visto' : ''}" style="--c:${COL[clusterDe(c)]}">${esc(c.n)}<sup>${String(i + 1).padStart(2, '0')}</sup></a></li>`).join('')}</ul>
    <img class="kin__flota" id="kinFlota" alt="" aria-hidden="true" width="800" height="800">
  </section>`;
}

export function montarLista(M, reduce) {
  const lista = document.getElementById('kin'), flota = document.getElementById('kinFlota'); if (!lista) return;
  const aplica = () => lista.querySelectorAll('li').forEach(li => li.classList.toggle('fuera', filtro !== 'todo' && li.dataset.cl !== filtro));
  document.querySelectorAll('[data-k]').forEach(b => b.addEventListener('click', () => { filtro = b.dataset.k; document.querySelectorAll('[data-k]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); aplica(); }));
  aplica();
  if (matchMedia('(hover: hover)').matches) {
    lista.addEventListener('mouseover', e => { const a = e.target.closest('a'); if (!a) return; flota.src = a.dataset.img; flota.classList.add('on'); });
    lista.addEventListener('mouseleave', () => flota.classList.remove('on'));
    lista.addEventListener('mousemove', e => { flota.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 110}px) rotate(-4deg)`; });
  }
  if (M && !reduce) try { M.animate([...lista.querySelectorAll('a')], { opacity: [0, 1], y: [20, 0] }, { delay: M.stagger(.025), duration: .45, ease: 'easeOut' }); } catch {}
}

// ---------- Diagramas interactivos ----------
function diagrama(v) {
  if (!v) return '';
  const it = v.items;
  if (v.t === 'flow') return `<div class="dx dx--flow" role="group" aria-label="${esc(v.label)}">${it.map(([k, d], i) => `<button type="button" class="dx__n" data-d="${esc(d)}" style="--c:${PAL[i % PAL.length]};--i:${i}" aria-pressed="${i === 0}"><span>${i + 1}</span><b>${esc(k)}</b></button>`).join('')}</div><p class="dx__cap" aria-live="polite">${esc(it[0][1])}</p>`;
  if (v.t === 'cycle') { const n = it.length; return `<div class="dx dx--cycle" role="group" aria-label="${esc(v.label)}"><svg viewBox="0 0 400 400" aria-hidden="true"><circle cx="200" cy="200" r="140" class="dx__aro"/></svg><span class="dx__centro">${esc(v.center || '')}</span>${it.map(([k, d], i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return `<button type="button" class="dx__n" data-d="${esc(d)}" style="--c:${PAL[i % PAL.length]};left:${50 + 35 * Math.cos(a)}%;top:${50 + 35 * Math.sin(a)}%" aria-pressed="${i === 0}"><b>${esc(k)}</b></button>`; }).join('')}</div><p class="dx__cap" aria-live="polite">${esc(it[0][1])}</p>`; }
  if (v.t === 'pyramid') return `<div class="dx dx--pyr" role="group" aria-label="${esc(v.label)}">${it.map(([k, d], i) => `<button type="button" class="dx__n" data-d="${esc(d)}" style="--c:${PAL[i % PAL.length]};--w:${40 + i * (60 / Math.max(1, it.length - 1))}%" aria-pressed="${i === 0}"><b>${esc(k)}</b></button>`).join('')}</div><p class="dx__cap" aria-live="polite">${esc(it[0][1])}</p>`;
  return `<div class="dx dx--boxes" role="group" aria-label="${esc(v.label)}" style="--cols:${Math.min(v.cols || 4, it.length)}">${it.map(([k, d, big], i) => `<button type="button" class="dx__box" aria-pressed="false" style="--c:${PAL[i % PAL.length]}"><span class="dx__cara"><em>${esc(big || String(i + 1))}</em><b>${esc(k)}</b><small>Toca para ver</small></span><span class="dx__dorso">${esc(d)}</span></button>`).join('')}</div>`;
}

export function vistaConcepto(c) {
  const i = concepts.indexOf(c), sig = concepts[(i + 1) % concepts.length], cl = clusterDe(c), v = VIZ[c.viz];
  const partes = [['idea', 'La idea'], v && ['diag', 'El diagrama'], c.check && ['prueba', 'Ponte a prueba'], c.bad && c.good && ['asi', '¿Así o así?'], c.errors?.length && ['errores', 'Errores comunes'], c.measure?.length && ['mide', 'Cómo se mide'], c.norma?.length && ['normas', 'Normas']].filter(Boolean);
  return `<a class="volver" href="#academia">← Todos los conceptos</a>
  <div class="recorrido" style="--c:${COL[cl]}">
    <nav class="recorrido__ind" aria-label="Partes del concepto"><p>${String(i + 1).padStart(2, '0')} / ${concepts.length}</p><ol>${partes.map(([id, n]) => `<li><a href="#academia/${c.id}" data-ir="${id}">${n}</a></li>`).join('')}</ol><a class="btn btn--sec" href="#academia/${sig.id}">Siguiente concepto</a></nav>
    <div class="recorrido__cont">
      <section id="p-idea" class="rc rc--idea"><img src="${img(c)}" alt="" width="800" height="800"><div><h1>${esc(c.n)}</h1><p class="rc__frase">${esc(frase(c.simple))}</p>
        <div class="modo" role="group" aria-label="Cómo quieres leerlo"><button type="button" data-m="simple" aria-pressed="false">Explícamelo simple</button><button type="button" data-m="tech" aria-pressed="false">Versión técnica</button></div><div class="texto" id="texto" hidden></div></div></section>
      ${v ? `<section id="p-diag" class="rc"><h2>${esc(v.label)}</h2><p class="rc__ayuda">Toca cada parte del diagrama.</p>${diagrama(v)}</section>` : ''}
      ${c.check ? `<section id="p-prueba" class="rc"><h2>Ponte a prueba</h2><p class="pregunta pregunta--s">${esc(c.check.q)}</p><div class="fichas" id="chk">${c.check.o.map((o, k) => `<button type="button" class="ficha f${k % 4}" data-k="${k}"><span>${esc(o)}</span></button>`).join('')}</div><div id="chkV" aria-live="polite"></div></section>` : ''}
      ${c.bad && c.good ? `<section id="p-asi" class="rc"><h2>¿Cuál suena a profesional?</h2><div class="asi" id="asi">${(Math.random() < .5 ? [['b', c.bad], ['g', c.good]] : [['g', c.good], ['b', c.bad]]).map(([k, t]) => `<button type="button" class="asi__c" data-a="${k}"><span>${esc(strip(t))}</span></button>`).join('')}</div><p id="asiV" class="rc__ayuda" aria-live="polite"></p></section>` : ''}
      ${c.errors?.length ? `<section id="p-errores" class="rc"><h2>Errores comunes</h2><p class="rc__ayuda">Toca cada tarjeta.</p><div class="cartas">${c.errors.map((e, k) => `<button type="button" class="carta" aria-pressed="false"><span class="carta__in"><span class="carta__cara carta__b" style="transform:none"><small>Situación ${k + 1}</small><span>${esc(strip(e))}</span><small>¿Está bien?</small></span><span class="carta__cara carta__a" style="transform:rotateY(180deg)"><small>Error común</small><span>${esc(strip(e))}</span><small>Evítalo</small></span></span></button>`).join('')}</div></section>` : ''}
      ${c.measure?.length ? `<section id="p-mide" class="rc"><h2>Cómo se mide</h2><div class="medidores">${c.measure.map((m, k) => `<div class="medidor" style="--p:100;--c:${PAL[k % PAL.length]}"><svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15.9" class="medidor__f"/><circle cx="18" cy="18" r="15.9" class="medidor__v"/></svg><span>${esc(strip(m))}</span></div>`).join('')}</div></section>` : ''}
      ${c.norma?.length ? `<section id="p-normas" class="rc"><h2>Normas que lo sostienen</h2><div class="sellos">${c.norma.map(n => `<span class="sello">${esc(strip(n))}</span>`).join('')}</div></section>` : ''}
    </div></div>`;
}

export function montarConcepto(c, M, reduce, sonar) {
  const t = document.getElementById('texto');
  document.querySelectorAll('.modo button').forEach(b => b.addEventListener('click', () => {
    const on = b.getAttribute('aria-pressed') !== 'true';
    document.querySelectorAll('.modo button').forEach(x => x.setAttribute('aria-pressed', String(on && x === b)));
    t.hidden = !on; if (on) t.innerHTML = b.dataset.m === 'simple' ? c.simple : c.tech;
  }));
  document.querySelectorAll('.dx__n').forEach(b => b.addEventListener('click', () => {
    const g = b.closest('.dx'); g.querySelectorAll('.dx__n').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    const cap = g.nextElementSibling; cap.textContent = b.dataset.d; if (M && !reduce) M.animate(cap, { opacity: [0, 1], y: [8, 0] }, { duration: .3 });
  }));
  document.querySelectorAll('.dx__box,.carta').forEach(b => b.addEventListener('click', () => b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'))));
  document.querySelectorAll('#chk .ficha').forEach(b => b.addEventListener('click', () => {
    const ok = +b.dataset.k === c.check.a;
    document.querySelectorAll('#chk .ficha').forEach(x => { x.disabled = true; x.classList.add(+x.dataset.k === c.check.a ? 'ok' : 'no'); if (x === b) x.classList.add('mia'); });
    sonar?.(ok);
    document.getElementById('chkV').innerHTML = `<div class="veredicto ${ok ? 'bien' : 'mal'}"><img class="veredicto__k" src="assets/kusi-${ok ? 'celebra' : 'animo'}.webp" alt=""><h3>${ok ? '¡Correcto!' : 'No esta vez'}</h3><p>${esc(c.check.why)}</p></div>`;
  }));
  document.querySelectorAll('.asi__c').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.asi__c').forEach(x => { x.disabled = true; x.classList.add(x.dataset.a === 'g' ? 'ok' : 'no'); });
    const ok = b.dataset.a === 'g'; sonar?.(ok);
    document.getElementById('asiV').textContent = ok ? '¡Exacto! Dice datos, causas y una acción.' : 'La otra es la profesional: tiene datos, causas y una acción.';
  }));
  document.querySelectorAll('[data-ir]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.getElementById('p-' + a.dataset.ir)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }));
  // Índice que sigue la lectura
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) document.querySelectorAll('[data-ir]').forEach(a => a.classList.toggle('on', 'p-' + a.dataset.ir === e.target.id)); }), { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('.rc').forEach(s => io.observe(s));
  if (M && !reduce) try {
    document.querySelectorAll('.rc').forEach(s => M.inView(s, () => { M.animate([...s.children], { opacity: [0, 1], y: [24, 0] }, { delay: M.stagger(.06), duration: .5, ease: 'easeOut' }); }, { amount: .2 }));
    document.querySelectorAll('.medidor').forEach(m => M.inView(m, () => m.classList.add('lleno')));
  } catch {} else document.querySelectorAll('.medidor').forEach(m => m.classList.add('lleno'));
}
