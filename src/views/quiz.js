/* Quiz rápido: práctica corta con ocho tipos de pregunta (opción múltiple, imágenes, completar,
   parafrasear, mito o realidad, ordenar, unir y calcular). Una pregunta por pantalla, explicación
   inmediata y repaso de errores al final. El mejor puntaje por tema se guarda en S.state.quiz. */
import { $, $$, esc, reducedMotion } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register } from "../core/router.js";
import { emit, on } from "../core/bus.js";
import { concept } from "../content/index.js";
import { QUIZ, QUIZ_THEMES, QUIZ_TYPES, quizPool, gradeItem } from "../content/quiz.js";
import { icon } from "../brand/icons.js";
import { art, kusi3dImg, ALT, ART3D } from "../brand/art.js";
import { MOODS } from "../brand/coco.js";

const LENGTHS = [5, 10];
let R = null;              // partida en curso (en memoria)
let sel = { th: "todo", n: 10 };

const qstate = () => {
  const s = S.state;
  s.quiz = s.quiz && typeof s.quiz === "object" ? s.quiz : {};
  s.quiz.best = s.quiz.best && typeof s.quiz.best === "object" ? s.quiz.best : {};
  s.quiz.plays = +s.quiz.plays || 0;
  return s.quiz;
};

const rnd = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const shuffleDiff = arr => { if (arr.length < 2) return arr.slice(); let a; let k = 0; do { a = rnd(arr); k++; } while (a.every((x, i) => x === arr[i]) && k < 8); return a; };

/* Selección variada: se intercalan los tipos para que cada partida mezcle formatos. */
export function pickQuestions(theme, n){
  const pool = quizPool(theme);
  const byType = {};
  rnd(pool).forEach(q => (byType[q.t] = byType[q.t] || []).push(q));
  const out = [];
  let types = rnd(Object.keys(byType));
  while (out.length < n && types.length) {
    for (const t of types) { if (out.length >= n) break; const q = byType[t].shift(); if (q) out.push(q); }
    types = types.filter(t => byType[t].length);
    types = rnd(types);
  }
  return out;
}

function newRun(th, n){
  const items = pickQuestions(th, n);
  R = {
    th, n: items.length, i: 0, streak: 0, phase: "q",
    items: items.map(it => {
      const st = { ans: null, checked: false, score: 0 };
      if (it.t === "order") st.ans = shuffleDiff(it.items);
      if (it.t === "match") { st.ans = {}; st.defs = shuffleDiff(it.pairs.map(p => p[1])); st.pick = null; }
      return { it, st };
    })
  };
}

/* ---------- piezas ---------- */
const themeOf = id => QUIZ_THEMES.find(t => t.id === id) || QUIZ_THEMES[0];
const pctTxt = p => `${Math.round(p)}%`;

function imgFor(o, i){
  if (o.k === "kusi") return kusi3dImg(o.n, { size: 220, cls: "qz-imgk" });
  const key = ART3D[o.n];
  return `<img class="qz-imga" src="assets/3d/scenes/${key}-sq.webp" alt="${esc(ALT[key] || o.cap || "")}" width="400" height="400" loading="${i < 2 ? "eager" : "lazy"}" decoding="async">`;
}
const capFor = o => o.k === "kusi" ? `Kusi ${MOODS[o.n] ? MOODS[o.n].n.toLowerCase() : ""}` : (o.cap || "");

function landing(){
  const q = qstate();
  const count = id => quizPool(id).length;
  return `<div class="qz qz-landing">
    <section class="qz-hero">
      <div class="qz-hero-copy">
        <span class="eyebrow">Quiz rápido · práctica de conceptos</span>
        <h1>¿Cuánto sabes de <em>Recursos Humanos</em>?</h1>
        <p class="lead">Cinco o diez preguntas cortas, cada una en un formato distinto: escoger imágenes, completar palabras, decir lo mismo en otras palabras, ordenar pasos, unir parejas y calcular una boleta. Después de cada respuesta verás <b>por qué</b>.</p>
        <ul class="qz-types" aria-label="Tipos de pregunta">${Object.values(QUIZ_TYPES).map(n => `<li class="chip">${esc(n)}</li>`).join("")}</ul>
      </div>
      <div class="qz-hero-kusi">${kusi3dImg("curioso", { size: 240, eager: true, cls: "qz-kusi-hero" })}<p class="qz-bubble" aria-hidden="true">¿Practicamos un ratito?</p></div>
    </section>
    <form class="qz-setup" id="qzform" novalidate>
      <fieldset class="qz-fs">
        <legend><span class="qz-step">1</span>Elige un tema</legend>
        <div class="qz-themes">${QUIZ_THEMES.map(t => { const b = q.best[t.id]; return `<label class="qz-theme" style="--tc:${t.c}"><input type="radio" name="th" value="${t.id}" ${sel.th === t.id ? "checked" : ""}><span class="qz-theme-in"><b>${esc(t.n)}</b><span class="xs muted">${esc(t.d)}</span><span class="qz-theme-meta"><span class="xs">${count(t.id)} preguntas</span>${b != null ? `<span class="chip ${b >= 80 ? "ok" : b >= 50 ? "warn" : "bad"}" title="Tu mejor puntaje">Mejor: ${pctTxt(b)}</span>` : `<span class="xs muted">Sin intentos</span>`}</span></span></label>`; }).join("")}</div>
      </fieldset>
      <fieldset class="qz-fs">
        <legend><span class="qz-step">2</span>¿Cuántas preguntas?</legend>
        <div class="qz-lengths">${LENGTHS.map(n => `<label class="qz-len"><input type="radio" name="n" value="${n}" ${sel.n === n ? "checked" : ""}><span><b class="numeral">${n}</b><span class="xs muted">${n === 5 ? "≈ 3 minutos" : "≈ 6 minutos"}</span></span></label>`).join("")}</div>
      </fieldset>
      <div class="qz-go"><button type="submit" class="btn brand lg">Empezar ${icon("arrow")}</button>${q.plays ? `<span class="small muted">Has jugado ${q.plays} ${q.plays === 1 ? "vez" : "veces"}. El puntaje es solo para practicar.</span>` : `<span class="small muted">El puntaje es solo para practicar: no entra en tu brújula.</span>`}</div>
    </form>
  </div>`;
}

function progress(){
  const done = R.items.filter(x => x.st.checked).length;
  return `<div class="qz-prog"><div class="qz-prog-top"><span class="small"><b>Pregunta ${R.i + 1}</b> de ${R.n}</span><span class="small muted">${esc(themeOf(R.th).n)}</span></div>
    <div class="qz-bar" role="progressbar" aria-label="Progreso del quiz" aria-valuemin="0" aria-valuemax="${R.n}" aria-valuenow="${done}"><i style="width:${done / R.n * 100}%"></i></div>
    <ol class="qz-dots" aria-hidden="true">${R.items.map((x, k) => `<li class="${x.st.checked ? (x.st.score >= .99 ? "ok" : x.st.score > 0 ? "part" : "bad") : k === R.i ? "cur" : ""}"></li>`).join("")}</ol></div>`;
}

function body(it, st){
  const done = st.checked, a = st.ans;
  const resCls = i => done ? (i === it.a ? "is-right" : i === a ? "is-wrong" : "is-dim") : "";
  switch (it.t) {
    case "mcq": case "paraphrase":
      return `<div class="qz-opts" role="radiogroup" aria-labelledby="qz-q">${it.o.map((o, i) => `<button type="button" role="radio" class="qz-opt ${resCls(i)}" data-a="${i}" aria-checked="${a === i}" ${done ? "disabled" : ""}><span class="qz-k" aria-hidden="true">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
    case "image":
      return `<div class="qz-imgs n${it.opts.length}" role="radiogroup" aria-labelledby="qz-q">${it.opts.map((o, i) => `<button type="button" role="radio" class="qz-imgopt ${resCls(i)}" data-a="${i}" aria-checked="${a === i}" ${done ? "disabled" : ""}><span class="qz-imgbox">${imgFor(o, i)}</span><span class="qz-imgcap"><span class="qz-k" aria-hidden="true">${"ABCD"[i]}</span>${done ? esc(capFor(o)) : `<span class="xs muted">Opción ${"ABCD"[i]}</span>`}</span></button>`).join("")}</div>`;
    case "truefalse":
      return `<div class="qz-tf" role="radiogroup" aria-labelledby="qz-q">${[[false, "Mito"], [true, "Realidad"]].map(([v, n]) => `<button type="button" role="radio" class="qz-tfb ${done ? (v === it.a ? "is-right" : v === a ? "is-wrong" : "is-dim") : ""}" data-a="${v}" aria-checked="${a === v}" ${done ? "disabled" : ""}>${icon(v ? "check" : "x")}<span>${n}</span></button>`).join("")}</div>`;
    case "cloze": {
      const parts = it.q.split("___");
      return `<div class="qz-cloze"><label for="qz-in" class="qz-sr">Palabra que falta</label><p class="qz-cloze-txt">${esc(parts[0])}<input type="text" id="qz-in" class="qz-in ${done ? (st.score ? "is-right" : "is-wrong") : ""}" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(a || "")}" ${done ? "readonly" : ""} aria-describedby="qz-hint" size="${Math.max(8, (it.ans[0] || "").length + 2)}">${esc(parts.slice(1).join("___"))}</p><p class="xs muted" id="qz-hint">${it.hint ? esc(it.hint) + " · " : ""}No importan las mayúsculas ni las tildes.</p></div>`;
    }
    case "number":
      return `<div class="qz-num"><label for="qz-in" class="small"><b>Tu respuesta</b></label><div class="qz-num-row">${it.unit === "S/" ? `<span class="qz-unit" aria-hidden="true">S/</span>` : ""}<input type="text" inputmode="decimal" id="qz-in" class="qz-in ${done ? (st.score ? "is-right" : "is-wrong") : ""}" autocomplete="off" value="${esc(a || "")}" ${done ? "readonly" : ""} aria-describedby="qz-hint">${it.unit === "%" ? `<span class="qz-unit" aria-hidden="true">%</span>` : ""}</div><p class="xs muted" id="qz-hint">${it.hint ? esc(it.hint) + ". " : ""}Usa punto decimal (p. ej., 6.76).${it.unit === "S/" ? " En soles." : it.unit === "%" ? " En porcentaje." : ""}</p></div>`;
    case "order":
      return `<ol class="qz-order" aria-label="Pasos en el orden actual">${a.map((x, i) => { const pos = it.items.indexOf(x); return `<li class="qz-ord ${done ? (pos === i ? "is-right" : "is-wrong") : ""}"><span class="qz-pos" aria-hidden="true">${i + 1}</span><span class="qz-ord-t">${esc(x)}${done && pos !== i ? ` <span class="xs qz-should">va en el ${pos + 1}.º lugar</span>` : ""}</span>${done ? "" : `<span class="qz-mv"><button type="button" class="qz-mvb" data-mv="${i}" data-d="-1" aria-label="Subir «${esc(x)}» (está en el lugar ${i + 1})" ${i === 0 ? "disabled" : ""}>${icon("up")}</button><button type="button" class="qz-mvb" data-mv="${i}" data-d="1" aria-label="Bajar «${esc(x)}» (está en el lugar ${i + 1})" ${i === a.length - 1 ? "disabled" : ""}>${icon("down")}</button></span>`}</li>`; }).join("")}</ol><p class="xs muted">Usa las flechas para mover cada paso.</p>`;
    case "match": {
      const used = Object.values(a);
      const termOf = d => Object.keys(a).find(k => a[k] === d);
      return `<div class="qz-match">
        <div class="qz-col"><p class="xs qz-colh">Términos</p>${it.pairs.map(([l, r], i) => { const has = a[i] != null; const ok = done ? a[i] === r : null; return `<button type="button" class="qz-term ${st.pick === i ? "is-pick" : ""} ${has ? "is-paired" : ""} ${ok === true ? "is-right" : ok === false ? "is-wrong" : ""}" data-term="${i}" aria-pressed="${st.pick === i}" ${done ? "disabled" : ""}>${has ? `<span class="qz-badge" aria-hidden="true">${i + 1}</span>` : `<span class="qz-badge empty" aria-hidden="true">${i + 1}</span>`}<span><b>${esc(l)}</b>${has ? `<span class="xs qz-paired">→ ${esc(a[i])}</span>` : ""}${done && !ok ? `<span class="xs qz-should">Correcto: ${esc(r)}</span>` : ""}</span></button>`; }).join("")}</div>
        <div class="qz-col"><p class="xs qz-colh">Definiciones</p>${st.defs.map(d => { const k = termOf(d); return `<button type="button" class="qz-def ${k != null ? "is-paired" : ""}" data-def="${esc(d)}" ${done || st.pick == null && k == null ? (done ? "disabled" : "aria-disabled=\"true\"") : ""}>${k != null ? `<span class="qz-badge" aria-hidden="true">${+k + 1}</span>` : ""}<span>${esc(d)}</span></button>`; }).join("")}</div>
      </div><p class="xs muted" id="qz-match-help">${done ? "" : used.length === it.pairs.length ? "Todas las parejas están unidas. Toca un término para deshacer su pareja." : st.pick != null ? `Ahora elige la definición para «${esc(it.pairs[st.pick][0])}».` : "Toca un término y luego su definición."}</p>`;
    }
  }
  return "";
}

const answered = (it, st) => {
  if (it.t === "order") return true;
  if (it.t === "match") return Object.keys(st.ans).length === it.pairs.length;
  if (it.t === "cloze" || it.t === "number") return st.ans != null && String(st.ans).trim() !== "";
  return st.ans != null;
};

function rightAnswer(it){
  if (it.t === "cloze") return it.ans[0].replace(/^\w/, c => c.toUpperCase());
  if (it.t === "number") return (it.unit === "S/" ? "S/ " : "") + it.v.toLocaleString("es-PE", { minimumFractionDigits: Number.isInteger(it.v) ? 0 : 2, maximumFractionDigits: 2 }) + (it.unit === "%" ? " %" : "");
  if (it.t === "truefalse") return it.a ? "Realidad" : "Mito";
  if (it.t === "image") return capFor(it.opts[it.a]);
  if (it.t === "mcq" || it.t === "paraphrase") return it.o[it.a];
  return "";
}

function feedback(it, st){
  const sc = st.score, ok = sc >= .99;
  const head = ok ? "¡Correcto!" : sc > 0 ? `Casi: ${Math.round(sc * 100)}% bien.` : "No exactamente.";
  const ra = !ok ? rightAnswer(it) : "";
  return `<div class="qz-fb ${ok ? "ok" : sc > 0 ? "part" : "bad"}">${icon(ok ? "check" : "info")}<div><p class="qz-fb-h"><b>${head}</b>${ra ? ` Respuesta: <b>${esc(ra)}</b>.` : ""}</p><p class="qz-why"><span class="qz-why-l">Por qué</span> ${esc(it.why)}</p></div></div>`;
}

function kusiMood(){
  const cur = R.items[R.i];
  if (!cur.st.checked) return "pensando";
  if (cur.st.score >= .99) return R.streak >= 3 ? "celebra" : "feliz";
  return "animo";
}
const kusiLine = m => ({ pensando: "Piénsalo con calma…", feliz: "¡Bien! Sigue así.", celebra: `¡${R.streak} seguidas! Eres un crack.`, animo: "Tranqui: lee el porqué, así se aprende." })[m] || "";

function question(){
  const { it, st } = R.items[R.i];
  const m = kusiMood();
  const last = R.i + 1 === R.n;
  return `<div class="qz qz-run">
    <div class="qz-runbar"><button type="button" class="btn ghost sm" data-quit>${icon("back")}Salir</button>${progress()}</div>
    <div class="qz-stage">
      <section class="qz-card qz-enter" aria-labelledby="qz-q">
        <span class="eyebrow qz-type t-${it.t}">${esc(QUIZ_TYPES[it.t])}</span>
        <h2 id="qz-q" tabindex="-1">${it.t === "cloze" ? "Completa la palabra que falta" : esc(it.q)}</h2>
        ${it.t === "paraphrase" ? `<p class="small muted">${it.dir === "term" ? "Lee la explicación sencilla y elige el concepto." : "Elige la opción que dice lo mismo con palabras sencillas."}</p>` : ""}
        ${body(it, st)}
        <div class="qz-live" aria-live="polite">${st.checked ? feedback(it, st) : ""}</div>
        <div class="qz-actions">${st.checked ? `<button type="button" class="btn brand" data-next>${last ? "Ver resultado" : "Siguiente"} ${icon("arrow")}</button>` : `<button type="button" class="btn brand" data-check ${answered(it, st) ? "" : "disabled"}>Comprobar</button>${it.t !== "order" ? `<span class="xs muted qz-keyhint">${it.t === "cloze" || it.t === "number" ? "Pulsa Enter para comprobar" : ""}</span>` : ""}`}</div>
      </section>
      <aside class="qz-kusi" aria-hidden="true">${kusi3dImg(m, { size: 180, decorative: true, cls: "qz-kusi-run" + (st.checked ? " pop" : "") })}<p class="qz-bubble">${esc(kusiLine(m))}</p></aside>
    </div>
  </div>`;
}

function finish(){
  const total = R.items.reduce((s, x) => s + x.st.score, 0);
  const pct = Math.round(total / R.n * 100);
  const q = qstate();
  if (!R.saved) {
    R.prev = q.best[R.th];
    q.best[R.th] = Math.max(q.best[R.th] || 0, pct);
    q.plays++; q.last = { th: R.th, n: R.n, pct, at: Date.now() };
    save(); R.saved = true;
    emit("challenge:finish", { id: "quiz-" + R.th, pct });
  }
  R.pct = pct;
}

function endScreen(){
  const pct = R.pct, mood = pct >= 80 ? "celebra" : pct >= 50 ? "feliz" : "animo";
  const full = R.items.filter(x => x.st.score >= .99).length;
  const wrong = R.items.filter(x => x.st.score < .99);
  const record = R.prev == null || pct > R.prev;
  const msg = pct >= 80 ? "¡Excelente! Dominas estos conceptos." : pct >= 50 ? "Vas bien. Repasa los que fallaste y vuelve a intentarlo." : "Cada explicación que lees hoy es un error que no cometerás en el trabajo.";
  const link = it => { const c = it.c && concept(it.c); return c ? `<a class="textlink" href="#concepto.${c.id}">Repasar «${esc(c.n)}» ${icon("arrow")}</a>` : `<a class="textlink" href="#viaje">Vivirlo en una jornada ${icon("arrow")}</a>`; };
  return `<div class="qz qz-end">
    <section class="qz-result qz-enter">
      <div class="qz-result-kusi">${kusi3dImg(mood, { size: 220, eager: true })}</div>
      <div class="qz-result-copy">
        <span class="eyebrow">Resultado · ${esc(themeOf(R.th).n)}</span>
        <h1 tabindex="-1"><span class="numeral qz-score">${pct}<small>%</small></span></h1>
        <p class="lead">${esc(msg)}</p>
        <p class="small muted">${full} de ${R.n} preguntas completamente correctas${record ? " · <b class=\"qz-record\">¡Nuevo mejor puntaje en este tema!</b>" : ` · Tu mejor puntaje: ${pctTxt(qstate().best[R.th])}`}</p>
        <div class="qz-end-actions"><button type="button" class="btn brand" data-again>${icon("replay")}Otra ronda</button><button type="button" class="btn ghost" data-home>Cambiar tema</button><a class="btn ghost" href="#academia">Ir a la Academia</a></div>
      </div>
    </section>
    <ol class="qz-dots big" aria-label="Resumen por pregunta">${R.items.map((x, k) => `<li class="${x.st.score >= .99 ? "ok" : x.st.score > 0 ? "part" : "bad"}"><span class="qz-sr">Pregunta ${k + 1}: ${x.st.score >= .99 ? "correcta" : x.st.score > 0 ? "parcial" : "incorrecta"}</span></li>`).join("")}</ol>
    ${wrong.length ? `<section class="qz-review" aria-labelledby="qz-rev-h"><div class="sec-head"><h2 id="qz-rev-h">Repasa lo que <em>se te escapó</em></h2><p>${wrong.length === 1 ? "Una pregunta" : wrong.length + " preguntas"} para volver a mirar. Lee el porqué y sigue el enlace para profundizar.</p></div>
      <ol class="qz-rev-list">${wrong.map(({ it, st }) => `<li class="qz-rev"><span class="eyebrow">${esc(QUIZ_TYPES[it.t])}${st.score > 0 ? ` · ${Math.round(st.score * 100)}% bien` : ""}</span><h3>${esc(it.t === "cloze" ? it.q.replace("___", "____") : it.q)}</h3>${rightAnswer(it) ? `<p class="small">Respuesta correcta: <b>${esc(rightAnswer(it))}</b></p>` : ""}${it.t === "order" ? `<ol class="small qz-rev-ord">${it.items.map(x => `<li>${esc(x)}</li>`).join("")}</ol>` : ""}${it.t === "match" ? `<ul class="small qz-rev-ord">${it.pairs.map(([l, r]) => `<li><b>${esc(l)}</b> → ${esc(r)}</li>`).join("")}</ul>` : ""}<p class="small muted"><span class="qz-why-l">Por qué</span> ${esc(it.why)}</p>${link(it)}</li>`).join("")}</ol></section>` : `<div class="callout ok">${icon("star")}<span><b>Sin errores.</b> Prueba con 10 preguntas o con otro tema para seguir practicando.</span></div>`}
  </div>`;
}

/* ---------- montaje y eventos ---------- */
let root = null;
let lastRoute = "";
on("route", r => { lastRoute = r.name; });

function paint(focusSel){
  if (!root) return;
  const html = !R ? landing() : R.phase === "end" ? endScreen() : question();
  root.innerHTML = html;
  bind();
  const f = focusSel && $(focusSel, root);
  if (f) f.focus({ preventScroll: true });
}

function swap(focusSel, scrollTop){
  const go = () => { paint(focusSel); if (scrollTop) { const top = root.getBoundingClientRect().top + window.scrollY - 96; if (window.scrollY > top) window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion() ? "auto" : "smooth" }); } };
  go();
}

function bind(){
  const form = $("#qzform", root);
  if (form) {
    form.addEventListener("change", e => { if (e.target.name === "th") sel.th = e.target.value; if (e.target.name === "n") sel.n = +e.target.value; });
    form.addEventListener("submit", e => { e.preventDefault(); newRun(sel.th, sel.n); swap("#qz-q", true); });
    return;
  }
  const quit = $("[data-quit]", root); if (quit) quit.addEventListener("click", () => { R = null; swap("h1", true); });
  const again = $("[data-again]", root); if (again) again.addEventListener("click", () => { newRun(R.th, R.n); swap("#qz-q", true); });
  const home = $("[data-home]", root); if (home) home.addEventListener("click", () => { R = null; swap("h1", true); });
  if (!R || R.phase === "end") return;

  const cur = R.items[R.i], it = cur.it, st = cur.st;
  const chk = () => $("[data-check]", root);
  const refreshCheck = () => { const c = chk(); if (c) c.disabled = !answered(it, st); };

  // opciones de una sola respuesta (radiogroup con flechas)
  const radios = $$("[role=radio]", root);
  if (radios.length) {
    const setTab = () => { const i = radios.findIndex(b => b.getAttribute("aria-checked") === "true"); radios.forEach((b, k) => b.tabIndex = (i < 0 ? k === 0 : k === i) ? 0 : -1); };
    setTab();
    radios.forEach((b, k) => {
      b.addEventListener("click", () => {
        const v = b.dataset.a; st.ans = v === "true" ? true : v === "false" ? false : +v;
        radios.forEach(x => x.setAttribute("aria-checked", String(x === b))); setTab(); refreshCheck();
      });
      b.addEventListener("keydown", e => {
        const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (d) { e.preventDefault(); const n = radios[(k + d + radios.length) % radios.length]; n.focus(); n.click(); }
      });
    });
  }
  const inp = $("#qz-in", root);
  if (inp && !st.checked) {
    inp.addEventListener("input", () => { st.ans = inp.value; refreshCheck(); });
    inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); const c = chk(); if (c && !c.disabled) c.click(); } });
    if (window.matchMedia && matchMedia("(pointer:fine)").matches) setTimeout(() => { if (document.activeElement && document.activeElement.id === "qz-q") inp.focus({ preventScroll: true }); }, 0);
  }
  $$("[data-mv]", root).forEach(b => b.addEventListener("click", () => {
    const i = +b.dataset.mv, d = +b.dataset.d, j = i + d;
    [st.ans[i], st.ans[j]] = [st.ans[j], st.ans[i]];
    paint();
    let nb = $(`[data-mv="${j}"][data-d="${d}"]`, root);
    if (!nb || nb.disabled) nb = $(`[data-mv="${j}"][data-d="${-d}"]`, root);
    if (nb) nb.focus();
    announce(`«${st.ans[j]}» ahora está en el lugar ${j + 1}.`);
  }));
  $$("[data-term]", root).forEach(b => b.addEventListener("click", () => {
    const i = +b.dataset.term;
    if (st.ans[i] != null) { delete st.ans[i]; st.pick = i; }
    else st.pick = st.pick === i ? null : i;
    paint(st.pick != null ? `.qz-def:not(.is-paired)` : `[data-term="${i}"]`);
  }));
  $$("[data-def]", root).forEach(b => b.addEventListener("click", () => {
    if (b.getAttribute("aria-disabled") === "true" || st.pick == null) return;
    const d = b.dataset.def;
    Object.keys(st.ans).forEach(k => { if (st.ans[k] === d) delete st.ans[k]; });
    const t = st.pick; st.ans[t] = d; st.pick = null;
    const next = it.pairs.findIndex((_, k) => st.ans[k] == null);
    paint(next >= 0 ? `[data-term="${next}"]` : "[data-check]");
    announce(`Unido: ${it.pairs[t][0]} con ${d}.`);
  }));
  const c = chk();
  if (c) c.addEventListener("click", () => {
    if (!answered(it, st)) return;
    st.checked = true; st.score = gradeItem(it, st.ans);
    R.streak = st.score >= .99 ? R.streak + 1 : 0;
    paint("[data-next]");
  });
  const nx = $("[data-next]", root);
  if (nx) nx.addEventListener("click", () => {
    if (R.i + 1 >= R.n) { finish(); R.phase = "end"; swap("h1", true); }
    else { R.i++; swap("#qz-q", true); }
  });
}

function announce(msg){
  const l = $(".qz-live", root); if (!l) return;
  l.textContent = ""; setTimeout(() => { l.textContent = msg; }, 30);
}

register("quiz", () => {
  qstate();
  // Al llegar desde otra sección se empieza en la portada; si la vista solo se repinta
  // (p. ej., al cambiar el tema de color), la partida en curso se conserva.
  if (lastRoute !== "quiz") R = null;
  return {
    section: "quiz", docTitle: "Quiz rápido",
    html: `<div id="qz-root"></div>`,
    mount(view){ root = $("#qz-root", view); paint(); }
  };
});

/* expuesto para pruebas manuales en la consola */
export const _quiz = { get run(){ return R; }, QUIZ };
