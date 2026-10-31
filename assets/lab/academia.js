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
const FOTO = { feriados: 'esc/reloj', modales: 'foto/acuerdo', igualdad: 'foto2/mesa-mujeres', onboarding: 'foto2/caminan', perfil: 'foto/cv-mano', entrevista: 'foto/entrevista', planilla: '3d/scenes/boleta', beneficios: 'esc/planilla', rotacion: 'esc/pendulo', ausentismo: 'esc/alarma', clima: 'foto2/aplausos-verde', desempeno: 'esc/meta', dnc: 'foto/capacitacion', despido: 'foto2/tension', hostigamiento: '3d/scenes/balanza', regimenes: '3d/scenes/municipalidad', concurso: 'esc/escalera', pad: 'foto/mesa-papeles', hrbp: 'foto/reunion-jefa', analytics: 'esc/cerebro', sst: 'foto/supervisa', compensacion: 'esc/carrera' };
const img = c => FOTO[c.id] ? `assets/${FOTO[c.id]}.webp` : `assets/3d/scenes/${IMG[clusterDe(c)]}-sq.webp`;
let filtro = 'todo';

export function listaAcademia(vistos) {
  return `<section class="carru" aria-labelledby="carT" aria-roledescription="carrusel">
    <div class="carru__cab"><h2 id="carT">Desliza y elige un concepto</h2><div class="tira__ctrl"><button type="button" class="tira__flecha" data-dir="-1" aria-label="Conceptos anteriores">‹</button><button type="button" class="tira__flecha" data-dir="1" aria-label="Conceptos siguientes">›</button></div></div>
    <div class="filtros" role="group" aria-label="Filtrar por área"><button class="chip" type="button" data-k="todo" aria-pressed="${filtro === 'todo'}">Todos</button>${clusters.map(c => `<button class="chip" type="button" data-k="${c.id}" aria-pressed="${filtro === c.id}"><i class="punto" style="background:${COL[c.id]}"></i>${esc(c.n)}</button>`).join('')}</div>
    <ul class="carru__pista" id="carru">${concepts.map((c, i) => `<li data-cl="${clusterDe(c)}" aria-roledescription="diapositiva" aria-label="${i + 1} de ${concepts.length}"><a class="carru__c ${vistos.includes(c.id) ? 'visto' : ''}" href="#academia/${c.id}" style="--c:${COL[clusterDe(c)]}"><img src="${img(c)}" alt="" loading="lazy" width="800" height="800"><span class="carru__n">${String(i + 1).padStart(2, '0')}</span>${vistos.includes(c.id) ? '<span class="carru__ok" aria-label="Leído">✓</span>' : ''}<span class="carru__txt"><small>${esc(clusters.find(x => x.id === clusterDe(c))?.n || '')}</small><b>${esc(c.n)}</b></span></a></li>`).join('')}</ul>
    <div class="carru__puntos" id="carruP" aria-hidden="true">${concepts.map(() => '<i></i>').join('')}</div>
    <p class="nota">${vistos.length} de ${concepts.length} conceptos explorados.</p></section>`;
}

export function montarLista(M, reduce) {
  const pista = document.getElementById('carru'), puntos = [...document.querySelectorAll('#carruP i')]; if (!pista) return;
  const visibles = () => [...pista.children].filter(li => !li.hidden);
  const paso = () => (pista.querySelector('li:not([hidden])')?.offsetWidth || 300) + 16;
  document.querySelectorAll('.carru .tira__flecha').forEach(b => b.addEventListener('click', () => pista.scrollBy({ left: +b.dataset.dir * paso() * 2, behavior: reduce ? 'auto' : 'smooth' })));
  pista.tabIndex = 0;
  pista.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); pista.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * paso(), behavior: reduce ? 'auto' : 'smooth' }); } });
  const marca = () => { const v = visibles(), i = Math.round(pista.scrollLeft / paso()); puntos.forEach((p, k) => { p.hidden = k >= v.length; p.classList.toggle('on', k === i); }); };
  pista.addEventListener('scroll', () => requestAnimationFrame(marca), { passive: true });
  // Arrastrar con el mouse
  let x0 = null, s0 = 0, movio = false;
  pista.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; x0 = e.clientX; s0 = pista.scrollLeft; movio = false; pista.classList.add('arrastra'); });
  window.addEventListener('pointermove', e => { if (x0 === null) return; const d = e.clientX - x0; if (Math.abs(d) > 6) movio = true; pista.scrollLeft = s0 - d; });
  window.addEventListener('pointerup', () => { x0 = null; pista.classList.remove('arrastra'); });
  pista.addEventListener('click', e => { if (movio) { e.preventDefault(); movio = false; } }, true);
  document.querySelectorAll('[data-k]').forEach(b => b.addEventListener('click', () => { filtro = b.dataset.k; document.querySelectorAll('[data-k]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); [...pista.children].forEach(li => li.hidden = filtro !== 'todo' && li.dataset.cl !== filtro); pista.scrollTo({ left: 0 }); marca(); }));
  [...pista.children].forEach(li => li.hidden = filtro !== 'todo' && li.dataset.cl !== filtro); marca();
  if (M && !reduce) try { M.animate([...pista.querySelectorAll('.carru__c')].slice(0, 6), { opacity: [0, 1], x: [80, 0], rotate: [3, 0] }, { delay: M.stagger(.07), type: 'spring', bounce: .3, duration: .8 }); } catch {}
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
    <nav class="recorrido__ind" aria-label="Partes del concepto"><ol>${partes.map(([id, n], k) => `<li><a href="#academia/${c.id}" data-ir="${id}" class="${k === 0 ? 'on' : ''}"><span>${k + 1}</span>${n}</a></li>`).join('')}</ol><div class="diapo__ctrl"><button type="button" class="tira__flecha" data-d="-1" aria-label="Parte anterior">‹</button><button type="button" class="tira__flecha" data-d="1" aria-label="Parte siguiente">›</button><a class="btn btn--sec" href="#academia/${sig.id}">Siguiente concepto</a></div></nav>
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
  const cont = document.querySelector('.recorrido__cont'), secs = [...document.querySelectorAll('.rc')];
  const ir = k => { k = Math.max(0, Math.min(secs.length - 1, k)); cont.scrollTo({ left: secs[k].offsetLeft - cont.offsetLeft, behavior: reduce ? 'auto' : 'smooth' }); };
  const actual = () => Math.round(cont.scrollLeft / cont.clientWidth);
  document.querySelectorAll('[data-ir]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); ir(secs.findIndex(x => x.id === 'p-' + a.dataset.ir)); }));
  document.querySelectorAll('[data-d]').forEach(b => b.addEventListener('click', () => ir(actual() + +b.dataset.d)));
  cont.addEventListener('scroll', () => requestAnimationFrame(() => { const k = actual(); document.querySelectorAll('[data-ir]').forEach((a, j) => a.classList.toggle('on', j === k)); }), { passive: true });
  cont.tabIndex = 0; cont.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); ir(actual() + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); ir(actual() - 1); } });
  // Índice que sigue la lectura
  if (M && !reduce) try {
    document.querySelectorAll('.rc').forEach(s => M.inView(s, () => { M.animate([...s.children], { opacity: [0, 1], y: [24, 0] }, { delay: M.stagger(.06), duration: .5, ease: 'easeOut' }); }, { amount: .2 }));
    document.querySelectorAll('.medidor').forEach(m => M.inView(m, () => m.classList.add('lleno')));
  } catch {} else document.querySelectorAll('.medidor').forEach(m => m.classList.add('lleno'));
}
