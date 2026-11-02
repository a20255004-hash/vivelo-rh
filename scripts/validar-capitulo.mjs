// Valida un capítulo de VÍVELO RH antes de publicarlo.
// Uso: node scripts/validar-capitulo.mjs <idPuesto> <n>      (ej.: node scripts/validar-capitulo.mjs hrbp 2)
// Comprueba estructura, personajes, imágenes, tipos de actividad y ejecuta cada res() con entradas de prueba.
import { pathToFileURL } from 'url';
import fs from 'fs';
import path from 'path';

const raiz = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..');
const [pid, nTxt] = process.argv.slice(2); const n = +nTxt;
const errores = [], avisos = [];
const err = m => errores.push(m), av = m => avisos.push(m);
if (!pid || !n) { console.log('Uso: node scripts/validar-capitulo.mjs <idPuesto> <n>'); process.exit(2); }

const archivo = pid === 'analista-seleccion' ? `assets/seleccion-cap${n}.js` : `assets/cap/${pid}-${n}.js`;
if (!fs.existsSync(path.join(raiz, archivo))) { console.log('NO EXISTE', archivo); process.exit(1); }
const imp = f => import(pathToFileURL(path.join(raiz, f)).href + '?t=' + Date.now());
let C, PERSONAS = {}, PUESTO = {};
try { C = await imp(archivo); } catch (e) { console.log('ERROR DE SINTAXIS O IMPORTACIÓN:', e.message); process.exit(1); }
if (pid === 'analista-seleccion') { const m = await imp('assets/seleccion.js'); PERSONAS = m.PERSONAS; PUESTO = m.PUESTO; }
else for (const g of ['a', 'b', 'c', 'd']) { const m = await imp(`assets/puestos/grupo-${g}.js`); if (m.DATOS[pid]) { PERSONAS = m.DATOS[pid].PERSONAS; PUESTO = m.DATOS[pid].PUESTO; } }
if (!PUESTO.id) err('El puesto no existe en assets/puestos/grupo-*.js');

const existe = f => !f || fs.existsSync(path.join(raiz, f));
const hora = /^\d{2}:\d{2}$/;
const { CAP, ESCENAS, CHATS = {}, WSP = [], CORREOS = [], QUIZ = [], CARTERA = [], FUTURO = {} } = C;
if (!CAP) err('Falta export CAP');
else {
  for (const k of ['n', 'titulo', 'dia', 'foto', 'lugar', 'inicio', 'fin', 'cierreHora', 'apertura', 'boton', 'kusi', 'lead', 'reflexion']) if (CAP[k] === undefined || CAP[k] === '') err(`CAP.${k} falta`);
  if (CAP.n !== n) err(`CAP.n debe ser ${n}`);
  if (!existe(CAP.foto)) err(`CAP.foto no existe: ${CAP.foto}`);
  const esperado = PUESTO.capitulos?.[n - 1];
  if (esperado && esperado.titulo !== CAP.titulo) av(`El título «${CAP.titulo}» no coincide con el del puesto «${esperado.titulo}»`);
  const ult = PUESTO.capitulos?.length || 10;
  if (n < ult && (!CAP.siguiente || CAP.siguiente.n !== n + 1)) err('CAP.siguiente debe apuntar al capítulo ' + (n + 1));
  if (n === ult && CAP.siguiente?.n !== n + 1) err('El capítulo ' + n + ' deja el final abierto: CAP.siguiente debe anunciar el capítulo ' + (n + 1));
}
if (!Array.isArray(ESCENAS) || ESCENAS.length < 5 || ESCENAS.length > 9) err('ESCENAS debe tener entre 5 y 9 escenas');
const CANAL = ['correo', 'whatsapp', 'llamada', 'presencial', 'documento', 'sistema'];
const TIPOS = ['ask', 'choice', 'pick', 'flag', 'calls', 'builder', 'secuencia', 'compose'];
const Q = ['buena', 'aceptable', 'riesgosa', null, undefined];
const chkRes = (r, donde) => {
  if (!r || typeof r !== 'object') return err(`${donde}: res no devuelve un objeto`);
  if (!Q.includes(r.q)) err(`${donde}: q inválido (${r.q})`);
  if (typeof r.out !== 'string' || !r.out) err(`${donde}: falta out`);
  if (r.rel) for (const k of Object.keys(r.rel)) if (!PERSONAS[k]) err(`${donde}: rel usa «${k}», que no está en PERSONAS`);
  if (r.envia) { const lista = Array.isArray(r.envia[0]) ? r.envia : [r.envia]; for (const [c] of lista) if (!CHATS[c]) err(`${donde}: envia al chat «${c}», que no está en CHATS`); }
  if (r.cartera) for (const k of Object.keys(r.cartera)) if (!(Array.isArray(CARTERA) ? CARTERA.some(x => x.id === k) : k in CARTERA)) av(`${donde}: cartera.${k} no está en CARTERA`);
};
const ids = new Set(); let ultima = '00:00';
(ESCENAS || []).forEach((e, i) => {
  const d = `Escena ${e.id || i}`;
  if (!e.id || ids.has(e.id)) err(`${d}: id vacío o repetido`); ids.add(e.id);
  if (!hora.test(e.t || '')) err(`${d}: t debe ser HH:MM`); else { if (e.t < ultima) err(`${d}: la hora retrocede`); ultima = e.t; }
  if (!CANAL.includes(e.ch)) err(`${d}: ch inválido (${e.ch})`);
  if (e.who && !PERSONAS[e.who]) err(`${d}: who «${e.who}» no está en PERSONAS (usa null o un id existente)`);
  if (!e.titulo) err(`${d}: falta titulo`);
  if (!existe(e.banner)) err(`${d}: banner no existe (${e.banner})`);
  try { const b = e.body?.('Lu', new Set()); if (typeof b !== 'string' || b.length < 40) err(`${d}: body debe devolver HTML`); } catch (x) { err(`${d}: body falla: ${x.message}`); }
  if (!TIPOS.includes(e.type)) return err(`${d}: type inválido (${e.type})`);
  try {
    if (e.type === 'choice' || e.type === 'calls') { if (!e.choices?.length) err(`${d}: faltan choices`); e.choices?.forEach(c => chkRes(c.res, `${d}/${c.id}`)); if (e.type === 'calls' && !e.calls?.length) err(`${d}: faltan calls`); }
    if (e.type === 'ask') { if (!e.opts?.length || !e.max) err(`${d}: ask necesita opts y max`); chkRes(e.res(e.opts.slice(0, e.max).map(o => o.id)), d); }
    if (e.type === 'pick') { if (!e.n) err(`${d}: pick necesita n`); const ids2 = (e.rows || []).map(r => r.id); if (!ids2.length) err(`${d}: pick necesita rows`); const sc = ids2.slice(0, e.n).reduce((a, k) => a + (e.score?.[k] || 0), 0); chkRes(e.res(ids2.slice(0, e.n), sc), d); chkRes(e.res(ids2.slice(-e.n), 0), d); }
    if (e.type === 'flag') { if (!e.lines?.length || !e.doc) err(`${d}: flag necesita doc y lines`); for (const v of [{ q: 'buena', missLey: 0, hitsLey: 3, hitsBp: 1, falsos: 0, marcadas: [] }, { q: 'riesgosa', missLey: 2, hitsLey: 0, hitsBp: 0, falsos: 1, marcadas: [] }]) { const r = e.res ? e.res(v) : { out: 'x' }; if (!r.out) err(`${d}: flag res sin out`); } }
    if (e.type === 'builder') { if (!e.bloques?.length) err(`${d}: builder necesita bloques`); chkRes(e.res(5, 6, []), d); chkRes(e.res(1, 6, []), d); }
    if (e.type === 'secuencia') { if ((e.items?.length || 0) < 4) err(`${d}: secuencia necesita 4+ items`); chkRes(e.res(e.items.length, e.items.length), d); chkRes(e.res(1, e.items.length), d); }
    if (e.type === 'compose') { if (!e.slots?.length) err(`${d}: compose necesita slots`); if (e.enviaA && !CHATS[e.enviaA]) err(`${d}: enviaA «${e.enviaA}» no está en CHATS`); const sel = Object.fromEntries(e.slots.map(s => [s.id, s.ops[0].id])); chkRes(e.res(sel), d); }
  } catch (x) { err(`${d}: res falla: ${x.message}`); }
  if (e.mirada && !e.mirada.ve) err(`${d}: mirada sin ve`);
});
for (const [k, c] of Object.entries(CHATS)) if (c.who && !PERSONAS[c.who]) err(`CHATS.${k}: who «${c.who}» no está en PERSONAS`);
WSP.forEach((w, i) => { if (!CHATS[w.chat]) err(`WSP ${i}: chat «${w.chat}» no está en CHATS`); if (!hora.test(w.t)) err(`WSP ${i}: hora inválida`); });
CORREOS.forEach((m, i) => { for (const k of ['t', 'de', 'asunto', 'html']) if (!m[k]) err(`CORREOS ${i}: falta ${k}`); });
if (QUIZ.length < 4) err('QUIZ necesita al menos 4 preguntas');
QUIZ.forEach((q, i) => { if (q.ops?.length !== 4 || !(q.ok >= 0 && q.ok < 4) || !q.por) err(`QUIZ ${i}: necesita 4 ops, ok 0-3 y por`); });
if (!(Array.isArray(CARTERA) ? CARTERA.length : Object.keys(CARTERA).length)) av('CARTERA vacía');
if (!Object.keys(FUTURO).length) av('FUTURO vacío');

console.log(`${archivo}: ${ESCENAS?.length || 0} escenas, ${QUIZ.length} preguntas`);
avisos.forEach(a => console.log('AVISO ·', a));
if (errores.length) { errores.forEach(e => console.log('ERROR ·', e)); process.exit(1); }
console.log('OK');
