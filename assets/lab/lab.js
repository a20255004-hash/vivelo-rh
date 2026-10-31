// VÍVELO RH · El Laboratorio. Seis pisos dentro del mismo edificio del sitio:
// Quiz (tipo Kahoot), Retos, Academia, Mapa, Empresas y Sectores.
// El contenido viene de src/content (verificado al 19 de octubre de 2026); la interfaz es nueva.
import { QUIZ, QUIZ_THEMES, gradeItem } from '../../src/content/quiz.js';
import { challenges } from '../../src/content/challenges.js';
import { concepts } from '../../src/content/concepts.js';
import { areas, clusters } from '../../src/content/areas.js';
import { empresas } from '../../src/content/empresas.js';
import { sectors } from '../../src/content/sectors.js';
import { ORDEN, AREA } from '../puestos.js';
import { vistaSectores, montarSectores } from './sectores.js';
import { vistaMapa, montarMapa } from './mapa.js';
// Motion (biblioteca) para entradas, diagramas y respuestas; si no carga, todo funciona igual.
const M = await import('https://cdn.jsdelivr.net/npm/motion@12.0.0/+esm').catch(() => null);

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const strip = h => String(h ?? '').replace(/<[^>]+>/g, '');
const mezcla = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const guardar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const CL = Object.fromEntries(clusters.map(c => [c.id, c]));
const COLOR = { atraer: 'var(--c-atraer)', admin: 'var(--c-admin)', desarrollar: 'var(--c-desarrollar)', cuidar: 'var(--c-cuidar)', estrategia: 'var(--c-estrategia)', publico: 'var(--c-publico)', todo: 'var(--noche)' };

// ---------- Sonido (respeta la preferencia del sitio) ----------
let ctx;
const sonar = (fs, d = .12, tipo = 'triangle', vol = .06) => {
  try { const p = localStorage.getItem('vivelo-sonido'); if (p === 'off' || p === '0' || p === 'false') return; } catch {}
  try { ctx ||= new AudioContext(); fs.forEach((f, i) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = tipo; o.frequency.value = f; g.gain.setValueAtTime(vol, ctx.currentTime + i * .09); g.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + i * .09 + d); o.connect(g).connect(ctx.destination); o.start(ctx.currentTime + i * .09); o.stop(ctx.currentTime + i * .09 + d + .02); }); } catch {}
};
const SON = { bien: () => sonar([523.3, 659.3, 784]), mal: () => sonar([311, 233], .2, 'sawtooth', .03), tic: () => sonar([1800], .03, 'square', .02), fin: () => sonar([523.3, 659.3, 784, 1046.5], .18) };

// ---------- Pisos ----------
const ESC = n => `assets/3d/scenes/${n}`;
const PISOS = [
  { id: 'quiz', n: 'Quiz', img: ESC('reunion-sq.webp'), esc3: 'reunion', d: 'Preguntas con tiempo, rachas y puntos, al estilo Kahoot.', k: `${QUIZ.length} preguntas` },
  { id: 'retos', n: 'Retos', img: ESC('balanza-sq.webp'), esc3: 'balanza', d: 'Desafíos por niveles: de los fundamentos a los casos difíciles.', k: `${challenges.levels.flatMap(l => l.sets).length} retos` },
  { id: 'academia', n: 'Academia', img: ESC('academia-sq.webp'), esc3: 'academia', d: 'Conceptos clave explicados simple o técnico, con pasos y errores comunes.', k: `${concepts.length} conceptos` },
  { id: 'mapa', n: 'Mapa', img: ESC('brujula-sq.webp'), esc3: 'brujula', d: 'Los 30 puestos conectados con las áreas de tu Brújula y su día a día.', k: '30 puestos' },
  { id: 'empresas', n: 'Empresas', img: ESC('corporativo-sq.webp'), esc3: 'corporativo', d: 'Organizaciones del Perú reconocidas por cómo tratan a su gente, con fuentes.', k: `${empresas.list.length} empresas` },
  { id: 'sectores', n: 'Sectores', img: ESC('municipalidad-sq.webp'), esc3: 'municipalidad', d: 'RR.HH. en una empresa privada y en el Estado: qué cambia y por qué.', k: 'Privado y público' },
];
const num = id => String(PISOS.findIndex(p => p.id === id) + 1);

function ascensor(actual) {
  $('ascensor').innerHTML = `<li><a href="#" ${!actual ? 'aria-current="page"' : ''}><span>L</span>Vestíbulo</a></li>` + PISOS.map((p, i) => `<li><a href="#${p.id}" ${actual === p.id ? 'aria-current="page"' : ''}><span>${i + 1}</span>${p.n}</a></li>`).join('');
  $('ascensor').querySelector('[aria-current]')?.scrollIntoView({ block: 'nearest', inline: 'center' });
}
const cabecera = (id, titulo, lead, kusi, img = 'assets/kusi-feliz.webp') => { const pz = PISOS.find(p => p.id === id); return `<header class="piso">
  <div><p class="piso__n"><b>${num(id)}</b>Piso ${num(id)} del Laboratorio</p><h1>${titulo}</h1><p class="piso__lead">${lead}</p></div>
  <figure class="diorama"><img class="diorama__img" src="${ESC(pz.esc3 + '.webp')}" alt="" width="1600" height="1000"><figcaption class="kusi"><img src="${img}" alt=""><p>${kusi}</p></figcaption></figure></header>`; };

// ---------- Vestíbulo ----------
function vestibulo() {
  const rec = leer('vivelo-quiz', { record: 0, partidas: 0 }), ret = leer('vivelo-retos', {}), vis = leer('vivelo-academia', []);
  const total = challenges.levels.flatMap(l => l.sets).length;
  return `<header class="piso">
    <div><p class="piso__n"><b>L</b>Vestíbulo</p><h1>El Laboratorio</h1><p class="piso__lead">Aquí practicas lo que viviste en los puestos: juegas, comparas y aprendes el oficio a tu ritmo. Seis pisos, un mismo edificio.</p></div>
    <figure class="diorama"><img class="diorama__img" src="${ESC('oficina.webp')}" alt="" width="1600" height="1000"><figcaption class="kusi"><img src="assets/kusi-celebra.webp" alt=""><p>¡Elige un piso! Yo te recomiendo empezar por el quiz.</p></figcaption></figure></header>
  <section aria-labelledby="dirT"><h2 id="dirT" class="sr" hidden>Directorio</h2>
    <div class="tablero"><p class="tablero__cap"><span>Directorio del edificio</span><span>Elige un piso</span></p>
      <ol>${PISOS.map((p, i) => `<li><a href="#${p.id}"><span class="tablero__p">P-${i + 1}</span><img src="${p.img}" alt="" loading="lazy" width="88" height="64"><span><b>${p.n}</b><small>${p.d} · ${p.k}</small></span></a></li>`).join('')}</ol></div>
  </section>
  <section aria-labelledby="marT"><div class="sec__h"><h2 id="marT">Tus marcas en el Laboratorio</h2><p>Se guardan en este dispositivo y, si entraste con tu cuenta, también en ella.</p></div>
    <div class="marcas">
      <div class="marca"><b>${rec.record.toLocaleString('es-PE')}</b><span>Tu mejor puntaje en el quiz · ${rec.partidas} partidas</span></div>
      <div class="marca"><b>${Object.keys(ret).length} de ${total}</b><span>Retos completados</span></div>
      <div class="marca"><b>${vis.length} de ${concepts.length}</b><span>Conceptos leídos en la Academia</span></div>
    </div></section>`;
}

// ---------- Motor de preguntas (Quiz y Retos) ----------
const TEMA_IMG = { todo: 'oficina', atraer: 'reunion', admin: 'boleta', desarrollar: 'academia', cuidar: 'hospital', estrategia: 'brujula', publico: 'municipalidad' };
const TIPO = { mcq: 'Elige una', image: 'Elige una', paraphrase: 'Elige la explicación simple', doc: 'Lee el documento', truefalse: '¿Verdad o mito?', myth: '¿Verdad o mito?', cloze: 'Completa la frase', number: 'Calcula', calc: 'Calcula', order: 'Ordena', match: 'Une cada par' };
const norma = it => ({ ...it, t: it.t === 'myth' ? 'truefalse' : it.t === 'calc' ? 'number' : it.t === 'doc' ? 'mcq' : it.t });
const FIG = ['<svg viewBox="0 0 40 40"><path d="M20 5 36 34H4z" fill="#0F2A3D"/></svg>', '<svg viewBox="0 0 40 40"><path d="M20 3 37 20 20 37 3 20z" fill="#0F2A3D"/></svg>', '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#0F2A3D"/></svg>', '<svg viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="30" rx="3" fill="#0F2A3D"/></svg>'];
const opciones = it => it.t === 'image' ? it.opts.map(o => o.cap) : (it.t === 'truefalse' || it.t === 'myth') ? ['Verdad', 'Mito'] : it.o;
const correctaTxt = it => {
  const n = norma(it);
  if (['mcq', 'image', 'paraphrase'].includes(n.t)) return opciones(it)[it.a];
  if (n.t === 'truefalse') return it.a ? 'Verdad' : 'Mito';
  if (n.t === 'cloze') return it.ans[0];
  if (n.t === 'number') return `${it.unit ? it.unit + ' ' : ''}${Number(it.v).toLocaleString('es-PE')}`;
  if (n.t === 'order') return it.items.join(' → ');
  if (n.t === 'match') return it.pairs.map(([a, b]) => `${a}: ${b}`).join(' · ');
  return '';
};

// Pinta una pregunta en `caja`. Llama a fin(nota 0..1) una sola vez.
function pregunta(caja, it, fin) {
  const n = norma(it); let listo = false;
  const cerrar = (ans, extra) => { if (listo) return; listo = true; const nota = ans === undefined ? 0 : gradeItem(n, ans); extra?.(nota); fin(nota, ans); };
  const enunciado = `<p class="tipo">${TIPO[it.t] || ''}</p><h2 class="pregunta">${esc(strip(it.q))}</h2>${it.doc ? `<div class="doc">${it.doc}</div>` : ''}`;
  if (['mcq', 'image', 'paraphrase', 'truefalse'].includes(n.t)) {
    const ops = opciones(it), orden = n.t === 'truefalse' ? ops.map((_, i) => i) : mezcla(ops.map((_, i) => i));
    const MAP3D = { retail: 'retail', municipalidad: 'municipalidad', brujula: 'brujula', academia: 'academia', agro: 'agro', mineria: 'mineria', hospital: 'hospital', planta: 'planta', oficina: 'oficina', corporativo: 'corporativo', almacen: 'almacen', cooperativa: 'cooperativa', reunion: 'reunion', taller: 'boleta', sectores: 'municipalidad', retos: 'balanza', hotel: 'reunion' };
    const pic = i => { const o = it.opts?.[i], m = o && MAP3D[o.n]; return m ? `<img class="ficha__pic" src="${ESC(m + '-sq.webp')}" alt="" width="800" height="800">` : ''; };
    caja.innerHTML = `${enunciado}<div class="fichas ${n.t === 'image' ? 'fichas--pic' : ''}" role="group" aria-label="Opciones">${orden.map((i, k) => `<button class="ficha f${k % 4}" type="button" data-i="${i}">${n.t === 'image' ? pic(i) : ''}${FIG[k % 4]}<span>${esc(ops[i])}</span></button>`).join('')}</div>`;
    if (M && !reduce) M.animate(caja.querySelectorAll('.ficha'), { opacity: [0, 1], scale: [.92, 1] }, { delay: M.stagger(.06), type: 'spring', bounce: .35, duration: .45 });
    caja.querySelectorAll('.ficha').forEach(b => b.addEventListener('click', () => {
      const v = +b.dataset.i, ans = n.t === 'truefalse' ? v === 0 : v;
      cerrar(ans, () => caja.querySelectorAll('.ficha').forEach(x => { x.disabled = true; const ok = n.t === 'truefalse' ? (+x.dataset.i === 0) === it.a : +x.dataset.i === it.a; x.classList.add(ok ? 'ok' : 'no'); if (x === b) x.classList.add('mia'); }));
    }));
    caja.timeout = () => cerrar(undefined, () => caja.querySelectorAll('.ficha').forEach(x => { x.disabled = true; const ok = n.t === 'truefalse' ? (+x.dataset.i === 0) === it.a : +x.dataset.i === it.a; x.classList.add(ok ? 'ok' : 'no'); }));
    return;
  }
  if (n.t === 'cloze' || n.t === 'number') {
    caja.innerHTML = `${enunciado}<form class="campo" id="fCampo"><label class="sr" for="resp" hidden>Tu respuesta</label>${it.unit ? `<b>${esc(it.unit)}</b>` : ''}<input id="resp" ${n.t === 'number' ? 'inputmode="decimal"' : ''} autocomplete="off" placeholder="${n.t === 'number' ? 'Escribe el número' : esc(it.hint ? 'Pista: ' + it.hint : 'Escribe la palabra')}"><button class="btn" type="submit">Responder</button></form>`;
    const inp = caja.querySelector('#resp'); setTimeout(() => inp.focus({ preventScroll: true }), 50);
    caja.querySelector('#fCampo').addEventListener('submit', e => { e.preventDefault(); if (!inp.value.trim()) return; inp.disabled = true; cerrar(inp.value); });
    caja.timeout = () => { inp.disabled = true; cerrar(inp.value || undefined); };
    return;
  }
  if (n.t === 'order') {
    let lista = mezcla(it.items); if (lista.join() === it.items.join()) lista = lista.reverse();
    const pinta = () => { caja.querySelector('#ord').innerHTML = lista.map((t, i) => `<li><b>${i + 1}</b><span>${esc(t)}</span><span><button type="button" data-u="${i}" aria-label="Subir ${esc(t)}" ${i === 0 ? 'disabled' : ''}>↑</button> <button type="button" data-d="${i}" aria-label="Bajar ${esc(t)}" ${i === lista.length - 1 ? 'disabled' : ''}>↓</button></span></li>`).join(''); };
    caja.innerHTML = `${enunciado}<ol class="orden" id="ord"></ol><button class="btn" type="button" id="okOrd">Responder</button>`;
    pinta();
    caja.querySelector('#ord').addEventListener('click', e => { const u = e.target.closest('[data-u]'), d = e.target.closest('[data-d]'); if (listo) return; if (u) { const i = +u.dataset.u; [lista[i - 1], lista[i]] = [lista[i], lista[i - 1]]; pinta(); } if (d) { const i = +d.dataset.d; [lista[i + 1], lista[i]] = [lista[i], lista[i + 1]]; pinta(); } });
    const marca = () => caja.querySelectorAll('#ord li').forEach((li, i) => { li.classList.add(lista[i] === it.items[i] ? 'ok' : 'no'); li.querySelectorAll('button').forEach(b => b.disabled = true); });
    caja.querySelector('#okOrd').addEventListener('click', e => { e.target.disabled = true; cerrar(lista.slice(), marca); });
    caja.timeout = () => { caja.querySelector('#okOrd').disabled = true; cerrar(lista.slice(), marca); };
    return;
  }
  if (n.t === 'match') {
    const derechas = mezcla(it.pairs.map(p => p[1]));
    caja.innerHTML = `${enunciado}<div class="pares">${it.pairs.map(([a], i) => `<label class="par"><span>${esc(a)}</span><select data-i="${i}"><option value="">Elige…</option>${derechas.map(d => `<option>${esc(d)}</option>`).join('')}</select></label>`).join('')}</div><button class="btn" type="button" id="okPar">Responder</button>`;
    const resp = () => Object.fromEntries([...caja.querySelectorAll('select')].map(s => [s.dataset.i, s.value]));
    const marca = () => caja.querySelectorAll('.par').forEach((p, i) => { const s = p.querySelector('select'); s.disabled = true; p.classList.add(s.value === it.pairs[i][1] ? 'ok' : 'no'); });
    caja.querySelector('#okPar').addEventListener('click', e => { e.target.disabled = true; cerrar(resp(), marca); });
    caja.timeout = () => { caja.querySelector('#okPar').disabled = true; cerrar(resp(), marca); };
  }
}

// ---------- Piso 1: Quiz ----------
let quizTema = 'todo';
function quiz() {
  setTimeout(() => montarQuiz(), 0);
  return cabecera('quiz', 'Quiz', `${QUIZ.length} preguntas sobre el oficio y la normativa peruana. Diez por partida, con tiempo: mientras más rápido aciertes, más puntos. Encadena aciertos para sumar racha.`, '¿Me ganas? Mi récord es secreto…', 'assets/kusi-curioso.webp') + `<section class="panel arena" id="arena" aria-live="polite"></section>`;
}
function montarQuiz() {
  const a = $('arena'); if (!a) return;
  const rec = leer('vivelo-quiz', { record: 0, partidas: 0 });
  a.innerHTML = `<div class="config"><div class="sec__h"><h2>Elige un tema</h2><p>Tu mejor puntaje: <b>${rec.record.toLocaleString('es-PE')}</b>.</p></div>
    <div class="temas">${QUIZ_THEMES.map(t => `<button type="button" class="tema" style="--c:${COLOR[t.id] || 'var(--noche)'}" aria-pressed="${quizTema === t.id}" data-t="${t.id}"><img class="tema__img" src="${ESC((TEMA_IMG[t.id] || 'oficina') + '-sq.webp')}" alt="" width="800" height="800" loading="lazy"><i></i><b>${esc(t.n)}</b><small>${QUIZ.filter(q => t.id === 'todo' || q.th === t.id).length} preguntas</small></button>`).join('')}</div>
    <div><button class="btn" type="button" id="jugar">Empezar la partida</button></div></div>`;
  a.querySelectorAll('.tema').forEach(b => b.addEventListener('click', () => { quizTema = b.dataset.t; a.querySelectorAll('.tema').forEach(x => x.setAttribute('aria-pressed', String(x === b))); }));
  $('jugar').addEventListener('click', () => partida(a));
}
function partida(a) {
  const pool = mezcla(QUIZ.filter(q => quizTema === 'todo' || q.th === quizTema)).slice(0, 10);
  const st = { i: 0, pts: 0, racha: 0, mejor: 0, res: [] };
  const turno = () => {
    if (st.i >= pool.length) return final(a, st, pool);
    const it = pool[st.i], n = norma(it), seg = ['order', 'match', 'cloze', 'number'].includes(n.t) ? 40 : 20;
    a.innerHTML = `<div class="marcador"><span>Pregunta <b>${st.i + 1}</b>/${pool.length}</span>${st.racha >= 2 ? `<span class="racha">Racha ×${st.racha}</span>` : ''}<span><b id="pts">${st.pts.toLocaleString('es-PE')}</b> puntos</span><span><b id="seg">${seg}</b> s</span></div><div class="reloj" id="reloj"><i></i></div><div class="juegoq"><div id="caja" style="display:grid;gap:18px"></div><figure class="juegoq__esc"><img src="${ESC((TEMA_IMG[it.th] || 'oficina') + '-sq.webp')}" alt="" width="800" height="800"><figcaption>${esc((QUIZ_THEMES.find(t => t.id === it.th) || {}).n || '')}</figcaption></figure></div><div id="ver"></div>`;
    const caja = $('caja'); let quedan = seg, inicio = performance.now();
    const t = setInterval(() => { quedan--; if (!$('seg')) return clearInterval(t); $('seg').textContent = Math.max(0, quedan); $('reloj').style.setProperty('--t', Math.max(0, quedan) / seg); $('reloj').classList.toggle('poco', quedan <= 5); if (quedan <= 5 && quedan > 0) SON.tic(); if (quedan <= 0) { clearInterval(t); caja.timeout?.(); } }, 1000);
    pregunta(caja, it, nota => {
      clearInterval(t);
      const rapidez = Math.max(0, 1 - (performance.now() - inicio) / (seg * 1000));
      const ganados = nota > 0 ? Math.round((500 + 500 * rapidez) * nota) + (nota === 1 && st.racha >= 1 ? 100 * Math.min(st.racha, 5) : 0) : 0;
      st.racha = nota === 1 ? st.racha + 1 : 0; st.mejor = Math.max(st.mejor, st.racha); st.pts += ganados; st.res.push(nota);
      (nota === 1 ? SON.bien : SON.mal)();
      $('pts').textContent = st.pts.toLocaleString('es-PE');
      $('ver').innerHTML = `<div class="veredicto ${nota === 1 ? 'bien' : 'mal'}"><img class="veredicto__k" src="assets/kusi-${nota === 1 ? 'celebra' : nota > 0 ? 'pensando' : 'animo'}.webp" alt=""><h3>${nota === 1 ? '¡Correcto!' : nota > 0 ? 'Casi: parte correcta' : 'No esta vez'}</h3><p class="pts">+${ganados} puntos${st.racha >= 2 ? ` · racha de ${st.racha}` : ''}</p>${nota < 1 ? `<p><b>Respuesta:</b> ${esc(correctaTxt(it))}</p>` : ''}<p>${esc(strip(it.why))}</p><div><button class="btn" type="button" id="sig">${st.i + 1 < pool.length ? 'Siguiente pregunta' : 'Ver mi resultado'}</button></div></div>`;
      $('sig').focus({ preventScroll: true }); $('ver').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
      $('sig').addEventListener('click', () => { st.i++; turno(); a.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); });
    });
  };
  turno();
}
function final(a, st, pool) {
  const rec = leer('vivelo-quiz', { record: 0, partidas: 0 }), nuevo = st.pts > rec.record;
  guardar('vivelo-quiz', { record: Math.max(rec.record, st.pts), partidas: rec.partidas + 1 });
  const aciertos = st.res.filter(x => x === 1).length; SON.fin();
  const kusi = aciertos >= 8 ? 'kusi-celebra' : aciertos >= 5 ? 'kusi-feliz' : 'kusi-animo';
  a.innerHTML = `<div class="podio"><div><p class="tipo">${nuevo ? '¡Nuevo récord!' : 'Fin de la partida'}</p><p class="podio__num">${st.pts.toLocaleString('es-PE')}</p><p style="font-size:19px;margin-top:10px">${aciertos} de ${pool.length} correctas · mejor racha: ${st.mejor}</p>
    <p style="margin-top:12px;font:italic 400 19px/1.4 var(--f-voice)">${aciertos >= 8 ? '¡Qué bacán! Te sabes el oficio.' : aciertos >= 5 ? 'Bien ahí. Repasa las que fallaste y vuelve a intentarlo.' : 'Cada error aquí es una lección gratis. ¡Dale otra vez!'}</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px"><button class="btn" type="button" id="otra">Jugar otra partida</button><button class="btn btn--sec" type="button" id="tema2">Cambiar de tema</button></div></div><img src="assets/${kusi}.webp" alt=""></div>
    <div><h3 style="font-size:22px;margin:24px 0 8px">Repaso</h3><ol class="repaso">${pool.map((it, i) => `<li><span>${st.res[i] === 1 ? '✔' : '✖'}</span><div><b>${esc(strip(it.q))}</b><br><small>${esc(correctaTxt(it))}</small></div></li>`).join('')}</ol></div>`;
  $('otra').addEventListener('click', () => partida(a)); $('tema2').addEventListener('click', montarQuiz);
}

// ---------- Piso 2: Retos ----------
function retos(id) {
  const hechos = leer('vivelo-retos', {});
  if (id) {
    const set = challenges.levels.flatMap(l => l.sets.map(s => ({ ...s, lv: l }))).find(s => s.id === id);
    if (!set) return retos();
    setTimeout(() => jugarReto(set), 0);
    return `<a class="volver" href="#retos">← Todos los retos</a>${cabecera('retos', esc(set.n), `${esc(set.lv.n)} · ${set.items.length} preguntas · unos ${set.mins} minutos. Sin reloj: piensa con calma.`, 'Sin apuro. Aquí lo que cuenta es el criterio.', 'assets/kusi-pensando.webp')}<section class="panel arena" id="reto" aria-live="polite"></section>`;
  }
  return cabecera('retos', 'Retos', 'Tres niveles, de los fundamentos del oficio a los casos que exigen criterio. Cada reto mezcla tipos de pregunta y te explica por qué.', 'Empieza por el nivel 1. ¡Los demás te esperan!', 'assets/kusi-animo.webp') +
    `<div class="niveles">${challenges.levels.map(l => `<section class="nivel"><h2>${esc(l.n)}</h2><p>${esc(l.d)}</p><div class="sets">${l.sets.map(s => `<a class="set ${hechos[s.id] !== undefined ? 'hecho' : ''}" href="#retos/${s.id}"><b>${esc(s.n)}</b><small>${s.items.length} preguntas · ${s.mins} min</small><span class="estado">${hechos[s.id] !== undefined ? `Hecho · ${hechos[s.id]} %` : 'Sin empezar'}</span></a>`).join('')}</div></section>`).join('')}</div>`;
}
function jugarReto(set) {
  const a = $('reto'); if (!a) return; const notas = [];
  const paso = i => {
    if (i >= set.items.length) {
      const p = Math.round(notas.reduce((x, y) => x + y, 0) / notas.length * 100), h = leer('vivelo-retos', {}); h[set.id] = Math.max(h[set.id] ?? 0, p); guardar('vivelo-retos', h); SON.fin();
      a.innerHTML = `<div class="podio"><div><p class="tipo">Reto terminado</p><p class="podio__num">${p} %</p><p style="margin-top:12px;font:italic 400 19px/1.4 var(--f-voice)">${p >= 80 ? '¡Criterio de profesional!' : p >= 50 ? 'Vas bien. Repasa las explicaciones y vuelve.' : 'Cada intento te deja algo. ¡Otra vez!'}</p><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px"><a class="btn" href="#retos">Ver todos los retos</a><button class="btn btn--sec" type="button" id="rep">Repetir</button></div></div><img src="assets/${p >= 80 ? 'kusi-celebra' : 'kusi-feliz'}.webp" alt=""></div>`;
      $('rep').addEventListener('click', () => jugarReto(set)); return;
    }
    const it = set.items[i];
    a.innerHTML = `<div class="marcador"><span>Pregunta <b>${i + 1}</b>/${set.items.length}</span></div><div id="caja" style="display:grid;gap:18px"></div><div id="ver"></div>`;
    pregunta($('caja'), it, nota => {
      notas.push(nota); (nota === 1 ? SON.bien : SON.mal)();
      $('ver').innerHTML = `<div class="veredicto ${nota === 1 ? 'bien' : 'mal'}"><h3>${nota === 1 ? '¡Correcto!' : nota > 0 ? 'Parte correcta' : 'No esta vez'}</h3>${nota < 1 ? `<p><b>Respuesta:</b> ${esc(correctaTxt(it))}</p>` : ''}<p>${esc(strip(it.why))}</p><div><button class="btn" type="button" id="sig">${i + 1 < set.items.length ? 'Siguiente' : 'Ver resultado'}</button></div></div>`;
      $('sig').focus({ preventScroll: true }); $('sig').addEventListener('click', () => paso(i + 1));
    });
  };
  paso(0);
}

// ---------- Piso 3: Academia ----------
const areaN = id => areas.find(a => a.id === id)?.n || id;
const CL_IMG = { atraer: 'reunion', admin: 'boleta', desarrollar: 'academia', cuidar: 'hospital', estrategia: 'brujula' };
const imgConcepto = c => ESC((CL_IMG[areas.find(a => a.id === c.areas[0])?.c] || 'oficina') + '-sq.webp');
function academia(id) {
  const vistos = leer('vivelo-academia', []);
  if (id) {
    const c = concepts.find(x => x.id === id); if (!c) return academia();
    if (!vistos.includes(id)) guardar('vivelo-academia', [...vistos, id]);
    setTimeout(() => montarConcepto(c), 0);
    const i = concepts.indexOf(c), sig = concepts[(i + 1) % concepts.length];
    return `<a class="volver" href="#academia">← Todos los conceptos</a>${cabecera('academia', esc(c.n), `Concepto ${i + 1} de ${concepts.length}. Léelo en simple o en técnico, sigue los pasos y voltea las tarjetas de errores comunes.`, 'Primero simple, luego técnico. ¡Así se aprende!', 'assets/kusi-pensando.webp')}
    <div class="ficha-c"><div style="display:grid;gap:36px">
      <section><div class="modo" role="group" aria-label="Cómo quieres leerlo"><button type="button" data-m="simple" aria-pressed="true">Explícamelo simple</button><button type="button" data-m="tech" aria-pressed="false">Versión técnica</button></div><div class="texto" id="texto">${c.simple}</div></section>
      <section><div class="sec__h"><h2>Paso a paso</h2></div><ol class="pasos">${c.steps.map(([a, b, d]) => `<li><div><b>${esc(a)}: ${esc(b)}</b>${d ? `<small>${esc(d)}</small>` : ''}</div></li>`).join('')}</ol></section>
      <section><div class="sec__h"><h2>¿Error o no?</h2><p>Toca cada tarjeta para descubrir si es una práctica frecuente que conviene evitar.</p></div><div class="cartas">${c.errors.map((e, k) => `<button type="button" class="carta" aria-pressed="false"><span class="carta__in"><span class="carta__cara carta__b" style="transform:none"><small>Situación ${k + 1}</small><span>${esc(strip(e))}</span><small>¿Está bien? Toca para ver</small></span><span class="carta__cara carta__a" style="transform:rotateY(180deg)"><small>Error común</small><span>${esc(strip(e))}</span><small>Evítalo: mira «Así sí» más abajo.</small></span></span></button>`).join('')}</div></section>
      <section><div class="sec__h"><h2>Mal hecho y bien hecho</h2></div><div class="antes"><div class="a"><small>Así no</small>${esc(strip(c.bad))}</div><div class="b"><small>Así sí</small>${esc(strip(c.good))}</div></div></section>
    </div><aside class="lateral">
      <div class="panel"><h3 style="font-size:18px;margin-bottom:10px">Cómo se mide</h3><ul style="margin:0;padding-left:18px">${c.measure.map(m => `<li>${esc(strip(m))}</li>`).join('')}</ul></div>
      ${c.norma?.length ? `<div class="panel"><h3 style="font-size:18px;margin-bottom:10px">Normas relacionadas</h3><ul class="normas">${c.norma.map(n => `<li>${esc(strip(n))}</li>`).join('')}</ul></div>` : ''}
      <div class="panel"><h3 style="font-size:18px;margin-bottom:10px">Especialidades donde se usa</h3><div style="display:flex;flex-wrap:wrap;gap:6px">${c.areas.map(a => `<a class="etq" href="#mapa">${esc(areaN(a))}</a>`).join('')}</div></div>
      <a class="btn" href="#academia/${sig.id}">Siguiente: ${esc(sig.n)}</a>
    </aside></div>`;
  }
  return cabecera('academia', 'Academia', 'Los conceptos que más vas a usar en RR.HH., explicados dos veces: como se lo contarías a un amigo y como lo dice la norma.', 'Toca un concepto. Los que ya leíste quedan en verde.', 'assets/kusi-feliz.webp') +
    `<section><p class="nota" style="margin-bottom:14px">Leíste ${vistos.length} de ${concepts.length}.</p><div class="conceptos">${concepts.map(c => `<a class="concepto ${vistos.includes(c.id) ? 'visto' : ''}" href="#academia/${c.id}"><img class="concepto__img" src="${imgConcepto(c)}" alt="" loading="lazy" width="800" height="800"><b>${esc(c.n)}</b><span class="areas">${c.areas.slice(0, 2).map(a => `<span>${esc(areaN(a))}</span>`).join('')}</span></a>`).join('')}</div></section>`;
}
function montarConcepto(c) {
  document.querySelectorAll('.modo button').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.modo button').forEach(x => x.setAttribute('aria-pressed', String(x === b))); $('texto').innerHTML = b.dataset.m === 'simple' ? c.simple : c.tech; }));
  document.querySelectorAll('.carta').forEach(b => b.addEventListener('click', () => b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'))));
}

// ---------- Piso 4: Mapa ----------
let nombres = {};
fetch('assets/cargos.json').then(r => r.json()).then(j => { nombres = Object.fromEntries(j.map(x => [x.id, x.n])); }).catch(() => {});
function mapa(id) {
  setTimeout(() => montarMapa(id, M, reduce), 0);
  return cabecera('mapa', 'Mapa de los 30 puestos', 'Todos los puestos que puedes vivir, unidos a las cinco áreas de tu Brújula y a las especialidades del oficio. Toca una foto y entra a su mes.', '¿Cuál de estas estrellas se parece más a ti?', 'assets/kusi-curioso.webp') + vistaMapa();
}

// ---------- Piso 5: Empresas ----------
let empFiltro = 'todas';
function empresasV(id) {
  if (id) {
    const e = empresas.list.find(x => x.id === id); if (!e) return empresasV();
    return `<a class="volver" href="#empresas">← Todas las empresas</a>
    <header class="piso"><div><p class="piso__n"><b>${num('empresas')}</b>${esc(e.sector)} · ${esc(e.city)}</p><h1>${esc(e.n)}</h1><p class="piso__lead">${esc(e.region)}</p></div><figure class="diorama"><img class="diorama__img" src="${ESC(e.scene + '.webp')}" alt="" width="1600" height="1000"><figcaption class="kusi"><img src="assets/kusi-feliz.webp" alt=""><p>${esc(strip(e.learn))}</p></figcaption></figure></header>
    <section><div class="sec__h"><h2>Reconocimientos</h2><p>Con el enlace a la fuente pública de cada uno.</p></div><ul class="reconoc">${e.recognitions.map(r => `<li><span class="medalla"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6" fill="#F2A900"/><path d="m8 14-2 7 6-3 6 3-2-7" fill="#E4572E"/></svg><b>${r.year}</b></span><span>${r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a>` : esc(r.name)}</span></li>`).join('')}</ul></section>
    <section><div class="sec__h"><h2>Qué hacen con su gente</h2></div><div class="practicas bento-e">${e.practices.map((p, i) => `<article class="practica practica--${i}" style="--c:${COLOR[p.area] || 'var(--celeste)'}"><img class="practica__img" src="${ESC((CL_IMG[p.area] || 'reunion') + '-sq.webp')}" alt="" loading="lazy" width="800" height="800"><span class="etq">${esc(CL[p.area]?.n || p.area)}</span><b>${esc(p.t)}</b><p>${esc(strip(p.d))}</p></article>`).join('')}</div></section>
    <p class="nota">${esc(empresas.disclaimer)}</p>`;
  }
  const sect = [...new Set(empresas.list.map(e => e.sector))];
  setTimeout(() => document.querySelectorAll('[data-s]').forEach(b => b.addEventListener('click', () => { empFiltro = b.dataset.s; render(); })), 0);
  const lista = empresas.list.filter(e => empFiltro === 'todas' || e.sector === empFiltro);
  return cabecera('empresas', 'Empresas', 'Organizaciones que operan en el Perú y que fueron reconocidas por cómo gestionan a su gente. Cada dato tiene su fuente pública.', 'Mira qué hacen distinto. ¡Inspírate!', 'assets/kusi-celebra.webp') +
    `<section><div class="filtros" role="group" aria-label="Filtrar por sector"><button class="chip" type="button" data-s="todas" aria-pressed="${empFiltro === 'todas'}">Todos los sectores</button>${sect.map(s => `<button class="chip" type="button" data-s="${esc(s)}" aria-pressed="${empFiltro === s}">${esc(s)}</button>`).join('')}</div>
    <div class="empresas">${lista.map(e => `<a class="emp" href="#empresas/${e.id}"><span class="emp__img"><img src="${ESC(e.scene + '-sq.webp')}" alt="" loading="lazy" width="800" height="800"><span class="mono" style="--c:${COLOR[e.tone] || 'var(--celeste)'}">${esc(e.mono)}</span></span><span><b>${esc(e.n)}</b><small>${esc(e.sector)} · ${esc(e.city)} · ${e.practices.length} prácticas</small></span></a>`).join('')}</div>
    <p class="nota" style="margin-top:16px">Información consultada el ${esc(empresas.consulted)}.</p></section>`;
}

// ---------- Piso 6: Sectores ----------
function sectoresV() {
  setTimeout(() => montarSectores(M, reduce), 0);
  return cabecera('sectores', 'Privado y público', 'Hacer RR.HH. en una empresa privada y en una entidad del Estado se parece menos de lo que crees. Compara, juega y descubre cuál se parece más a ti.', 'En el Estado, todo deja huella. ¡Compara!', 'assets/kusi-pensando.webp') + vistaSectores();
}

// ---------- Enrutador ----------
const RUTAS = { quiz, retos, academia, mapa, empresas: empresasV, sectores: sectoresV };
// Enlaces viejos del Laboratorio anterior
const ALIAS = { sims: null, viaje: null, cargos: null, taller: 'retos', inicio: null, brujula: null };
function render() {
  let [r, p] = decodeURIComponent(location.hash.slice(1)).split(/[/.]/);
  if (r in ALIAS) { if (r === 'brujula') { location.replace('brujula.html'); return; } if (r === 'cargos' || r === 'sims') { location.replace('index.html#temporadas'); return; } r = ALIAS[r]; history.replaceState(null, '', r ? '#' + r : location.pathname); }
  const v = $('vista'), fn = RUTAS[r];
  v.innerHTML = fn ? fn(p) : vestibulo();
  ascensor(fn ? r : null);
  document.title = `${fn ? PISOS.find(x => x.id === r).n + ' · ' : ''}Laboratorio · VÍVELO RH`;
  if (!(r === 'mapa' && p)) { window.scrollTo(0, 0); v.focus({ preventScroll: true }); }
  if (M && !reduce) {
    const dio = v.querySelector('.diorama__img'), k = v.querySelector('.diorama .kusi');
    if (dio) M.animate(dio, { opacity: [0, 1], y: [28, 0], scale: [.94, 1] }, { type: 'spring', bounce: .25, duration: .9 });
    if (k) M.animate(k, { opacity: [0, 1], y: [12, 0] }, { delay: .35, duration: .4, ease: 'easeOut' });
    v.querySelectorAll('.tablero ol, .conceptos, .empresas, .sets').forEach(l => {
      try { M.inView(l, () => { M.animate([...l.children], { opacity: [0, 1], y: [14, 0] }, { delay: M.stagger(.04), duration: .4, ease: 'easeOut' }); }, { amount: .05 }); } catch {}
    });
  }
}
window.addEventListener('hashchange', render);
render();

// Tema claro / oscuro, igual que en el resto del sitio
const root = document.documentElement, temaBtn = $('tema');
const oscuro = () => root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
const syncTema = () => { temaBtn.textContent = oscuro() ? 'Modo claro' : 'Modo oscuro'; };
temaBtn.addEventListener('click', () => { root.dataset.theme = oscuro() ? 'light' : 'dark'; try { localStorage.setItem('vivelo-tema', root.dataset.theme); } catch {} syncTema(); });
syncTema();
