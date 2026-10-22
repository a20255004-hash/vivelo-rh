/* Retos: cuestionarios progresivos con puntuación y explicación después de cada respuesta. */
import { $, $$, esc, shuffle } from "../core/util.js";
import { S, save, reset } from "../core/store.js";
import { register, render, go } from "../core/router.js";
import { emit } from "../core/bus.js";
import { C, challenge } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg } from "../brand/art.js";
import { coco } from "../brand/coco.js";

const run = {}; // estado en memoria del reto en curso

register("retos", () => {
  const lv = C.challenges.levels;
  const doneSet = id => S.state.challenges[id];
  return { section: "retos", docTitle: "Retos", html: `
  <section class="hero compact">${art("retos")}<div class="hero-in"><div class="copy" style="color:#F4F0FF"><span class="eyebrow" style="color:#C7C0DD">Retos y cuestionarios</span><h1>Pon a prueba tu criterio</h1><p style="color:#D9D3EE">Asociar, ordenar, calcular, interpretar documentos y decidir en escenarios. Cada respuesta trae su explicación. Complementan las jornadas: no las reemplazan.</p></div><div class="coco-slot">${coco("animo", { size: 120, cls: "anim", label: false })}</div></div></section>
  <div class="levels">${lv.map((l, li) => { const prevOk = li === 0 || lv[li - 1].sets.some(s => doneSet(s.id) && doneSet(s.id).best >= 50); return `<section class="level ${prevOk ? "" : "locked"}" style="--cc:${l.c}"><span class="lnum" aria-hidden="true">${li + 1}</span><span class="eyebrow" style="color:${l.c}">${prevOk ? "Disponible" : "Recomendado después del nivel " + li}</span><h2>${esc(l.n)}</h2><p class="small muted">${esc(l.d)}</p><div class="list">${l.sets.map(s => { const r = doneSet(s.id); return `<a class="item" href="#reto.${s.id}"><span>${esc(s.n)} <span class="xs muted">· ${s.items.length} preguntas · ≈ ${s.mins} min</span></span>${r ? `<span class="chip ${r.best >= 80 ? "ok" : r.best >= 50 ? "warn" : "bad"}">${r.best}%</span>` : icon("arrow")}</a>`; }).join("")}</div>${prevOk ? "" : `<p class="xs muted">Puedes entrar igual: el orden es una sugerencia.</p>`}</section>`; }).join("")}</div>`,
  };
});

function itemHTML(it, st){
  const a = st.ans, done = st.checked;
  if (it.t === "mcq" || it.t === "doc") return `${it.t === "doc" ? `<div class="doc" data-folio="Documento"><div class="table-wrap">${it.doc}</div></div>` : ""}<div class="choices">${it.o.map((o, i) => `<button type="button" class="choice ${done && i !== a && i !== it.a ? "other" : ""}" data-a="${i}" aria-pressed="${a === i}" ${done ? "disabled" : ""}><span class="k">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
  if (it.t === "myth") return `<div class="mythbtns" role="group" aria-label="¿Mito o realidad?"><button type="button" data-a="false" aria-pressed="${a === false}" ${done ? "disabled" : ""}>Mito</button><button type="button" data-a="true" aria-pressed="${a === true}" ${done ? "disabled" : ""}>Realidad</button></div>`;
  if (it.t === "calc") return `<div class="field" style="max-width:240px"><label for="cq">Tu respuesta</label><input type="number" step="any" id="cq" data-calc value="${a != null ? esc(a) : ""}" ${done ? "readonly" : ""}></div>`;
  if (it.t === "match") {
    if (!st.opts) st.opts = shuffle(it.pairs.map(p => p[1]), it.q);
    const m = st.ans || {};
    return `<div class="match">${it.pairs.map(([l, r], i) => { const ok = done ? m[i] === r : null; return `<div class="match-row ${ok === true ? "ok" : ok === false ? "bad" : ""}"><b class="small">${esc(l)}</b><select data-m="${i}" ${done ? "disabled" : ""} aria-label="Pareja de ${esc(l)}"><option value="">Elegir…</option>${st.opts.map(o => `<option ${m[i] === o ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>${done && !ok ? `<span class="xs" style="grid-column:1/-1">Correcto: <b>${esc(r)}</b></span>` : ""}</div>`; }).join("")}</div>`;
  }
  if (it.t === "order") {
    if (!st.ord) st.ord = shuffle(it.items.slice(), it.q);
    return `<ol class="order-list" style="list-style:none;padding:0;margin:0">${st.ord.map((x, i) => `<li class="order-item"><span class="pos">${i + 1}</span><span>${esc(x)}${done && it.items.indexOf(x) !== i ? ` <span class="xs" style="color:var(--bad)">(va en el ${it.items.indexOf(x) + 1}°)</span>` : ""}</span>${done ? "" : `<span class="mv"><button type="button" data-mv="${i}" data-d="-1" aria-label="Subir ${esc(x)}" ${i === 0 ? "disabled" : ""}>↑</button><button type="button" data-mv="${i}" data-d="1" aria-label="Bajar ${esc(x)}" ${i === st.ord.length - 1 ? "disabled" : ""}>↓</button></span>`}</li>`).join("")}</ol>`;
  }
  return "";
}
function grade(it, st){
  if (it.t === "mcq" || it.t === "doc") return st.ans === it.a ? 1 : 0;
  if (it.t === "myth") return st.ans === it.a ? 1 : 0;
  if (it.t === "calc") return Math.abs(+st.ans - it.v) <= (it.tol || .01) ? 1 : 0;
  if (it.t === "match") { const m = st.ans || {}; return it.pairs.filter(([, r], i) => m[i] === r).length / it.pairs.length; }
  if (it.t === "order") return st.ord.filter((x, i) => it.items[i] === x).length / it.items.length;
  return 0;
}
const answered = (it, st) => it.t === "match" ? Object.keys(st.ans || {}).length === it.pairs.length && Object.values(st.ans).every(Boolean) : it.t === "order" ? true : st.ans != null && st.ans !== "";

register("reto", id => {
  const set = challenge(id);
  if (!set) return { title: "Reto no encontrado", html: `<div class="empty">Vuelve a <a href="#retos">Retos</a>.</div>` };
  const R = run[id] = run[id] || { i: 0, items: set.items.map(() => ({})), scores: [] };
  const done = R.i >= set.items.length;
  const pct = Math.round(R.scores.reduce((s, x) => s + x, 0) / set.items.length * 100);
  const prog = `<div class="qprog" aria-hidden="true">${set.items.map((_, k) => `<i class="${k < R.scores.length ? (R.scores[k] >= .99 ? "ok" : "bad") : k === R.i ? "cur" : ""}"></i>`).join("")}</div>`;
  if (done) {
    return { section: "retos", docTitle: set.n, html: `<section class="qcard"><span class="eyebrow">Resultado · ${esc(set.n)}</span>${prog}<div class="row" style="gap:20px">${coco(pct >= 80 ? "celebra" : pct >= 50 ? "feliz" : "animo", { size: 110, cls: "anim" })}<div class="scoreline"><span class="big">${pct}%</span><span class="muted">${R.scores.filter(x => x >= .99).length} de ${set.items.length} completamente correctas</span></div></div><p class="small muted">El puntaje sirve para practicar; no entra en tu brújula vocacional.</p><div class="row"><button type="button" class="btn brand" data-again>${icon("replay")}Intentar de nuevo</button><a class="btn ghost" href="#retos">Otros retos</a>${S.state.challenges[id] ? `<button type="button" class="btn ghost sm" data-clear>Borrar mi puntaje de este reto</button>` : ""}</div></section>`,
      mount(root){ $("[data-again]", root).addEventListener("click", () => { delete run[id]; render(true); }); const c = $("[data-clear]", root); if (c) c.addEventListener("click", () => { reset.challenge(id); delete run[id]; go("#retos"); }); } };
  }
  const it = set.items[R.i], st = R.items[R.i];
  const sc = st.checked ? grade(it, st) : null;
  return { section: "retos", docTitle: set.n, html: `
  <div class="row between"><a class="btn ghost sm" href="#retos">${icon("back")}Retos</a><span class="small muted">Pregunta ${R.i + 1} de ${set.items.length}</span></div>
  <section class="qcard"><span class="eyebrow">${esc(set.n)} · ${{ mcq: "Opción múltiple", myth: "¿Mito o realidad?", match: "Asociar", order: "Ordenar", doc: "Interpretar un documento", calc: "Calcular" }[it.t]}</span>${prog}<h2 style="font-size:1.3rem">${esc(it.q)}</h2>${itemHTML(it, st)}
    ${st.checked ? `<div class="callout ${sc >= .99 ? "ok" : sc > 0 ? "warn" : "bad"}">${icon(sc >= .99 ? "check" : "info")}<span><b>${sc >= .99 ? "¡Correcto!" : sc > 0 ? "Parcialmente correcto." : "No exactamente."}</b> ${esc(it.why)}${it.t === "calc" && sc < .99 ? ` Respuesta: <b>${it.v}</b>.` : ""}${it.t === "myth" ? ` (Es ${it.a ? "realidad" : "mito"}.)` : ""}</span></div><button type="button" class="btn brand" data-next style="justify-self:start">${R.i + 1 === set.items.length ? "Ver resultado" : "Siguiente"} ${icon("arrow")}</button>` : `<button type="button" class="btn brand" data-check style="justify-self:start" ${answered(it, st) ? "" : "disabled"}>Comprobar</button>`}
  </section>`,
  mount(root){
    const rer = () => render(true);
    $$("[data-a]", root).forEach(b => b.addEventListener("click", () => { const v = b.dataset.a; st.ans = v === "true" ? true : v === "false" ? false : +v; rer(); }));
    const ci = $("[data-calc]", root); if (ci) ci.addEventListener("input", () => { st.ans = ci.value; const ch = $("[data-check]", root); if (ch) ch.disabled = ci.value === ""; });
    $$("[data-m]", root).forEach(s => s.addEventListener("change", () => { st.ans = st.ans || {}; st.ans[s.dataset.m] = s.value; const ch = $("[data-check]", root); if (ch) ch.disabled = !answered(it, st); }));
    $$("[data-mv]", root).forEach(b => b.addEventListener("click", () => { const i = +b.dataset.mv, j = i + +b.dataset.d; [st.ord[i], st.ord[j]] = [st.ord[j], st.ord[i]]; rer(); const nb = $(`[data-mv="${j}"][data-d="${b.dataset.d}"]`); if (nb && !nb.disabled) nb.focus(); }));
    const ch = $("[data-check]", root); if (ch) ch.addEventListener("click", () => { st.checked = true; R.scores[R.i] = grade(it, st); rer(); });
    const nx = $("[data-next]", root); if (nx) nx.addEventListener("click", () => {
      R.i++;
      if (R.i >= set.items.length) { const p = Math.round(R.scores.reduce((s, x) => s + x, 0) / set.items.length * 100); const r = S.state.challenges[id] = S.state.challenges[id] || { best: 0, attempts: 0 }; r.attempts++; r.last = p; r.best = Math.max(r.best, p); r.at = Date.now(); save(); emit("challenge:finish", { id, pct: p }); }
      rer(); window.scrollTo(0, 0);
    });
  } };
});
