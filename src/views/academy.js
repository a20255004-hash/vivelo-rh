/* Academia: biblioteca visual (videos, fichas con diagramas, ruta sugerida) y fichas de concepto con
   tarjetas que giran, diagramas paso a paso, demostraciones, errores y «hecho mal / hecho bien». */
import { $, $$, esc, money, reducedMotion } from "../core/util.js";
import { videoFor } from "./videocard.js";
import { S, save } from "../core/store.js";
import { register, render } from "../core/router.js";
import { C, concept, area, cluster, sim, tool } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { art, kusi3dImg } from "../brand/art.js";
import { viz, FAM_ART, reveal, extSlot, bindExt, videoCards } from "./diagrams.js";
import { areaChip } from "./sims.js";
import { lensSeg, lensBody, bindLens } from "./lens.js";
import { narr, bindNarr } from "../core/narrator.js";
import * as PY from "../engine/payroll.js";

const famOf = c => cluster(area(c.areas[0]).c);
const conScene = c => { const s = (c.sims || []).map(sim).find(Boolean); return s ? s.scene : (FAM_ART[area(c.areas[0]).c] || "academia"); };
const plain = h => String(h || "").replace(/<[^>]+>/g, "");
const ROUTE = ["perfil", "entrevista", "igualdad", "onboarding", "planilla", "beneficios", "desempeno", "clima", "analytics"];

register("academia", () => {
  const f = S.state.prefs.acf || "todas";
  const q = (S.state.prefs.acq || "").toLowerCase();
  const byQ = C.concepts.filter(c => !q || (c.n + " " + plain(c.simple)).toLowerCase().includes(q));
  const list = byQ.filter(c => f === "todas" || c.areas.some(a => area(a).c === f));
  const done = C.concepts.filter(c => S.state.concepts[c.id]).length, ok = C.concepts.filter(c => (S.state.concepts[c.id] || {}).ok).length;
  const route = ROUTE.map(concept).filter(Boolean);
  const nextI = route.findIndex(c => !S.state.concepts[c.id]);
  return { section: "academia", docTitle: "Academia", html: `
  <section class="hero compact">${art("academia")}<div class="hero-in"><div class="copy"><span class="eyebrow">Academia · cada concepto en dos niveles</span><h1>Entender antes de hacer</h1><p class="muted">Primero como se lo explicarías a alguien que nunca trabajó en RR.HH.; después como lo usa una profesional: criterios, indicadores, documentos y normas. Con videos, diagramas, demostraciones, errores frecuentes y cómo se ve hecho mal y hecho bien.</p>
    <div class="ac-prog" role="img" aria-label="Has abierto ${done} de ${C.concepts.length} conceptos y comprobado ${ok}"><span><b class="numeral">${done}</b>/${C.concepts.length} abiertos</span><span class="ac-prog-bar"><i style="width:${done / C.concepts.length * 100}%"></i><i class="ok" style="width:${ok / C.concepts.length * 100}%"></i></span><span><b class="numeral">${ok}</b> comprobados</span></div></div><div class="coco-slot">${kusi3dImg("pensando", { size: 150, decorative: true })}</div></div></section>

  <section class="stack"><div class="row between"><span class="eyebrow">${icon("film")} Videos para empezar</span><a class="textlink" href="#medios">Ver todos ${icon("arrow")}</a></div>${videoCards(C.media.video.filter(v => v.status === "listo"))}</section>

  <section class="stack-lg"><div class="sec-head"><div class="stack"><span class="eyebrow">Ruta sugerida</span><h2>Por dónde empezar</h2></div><p>Un orden posible: del puesto a la persona que entra, lo que cobra, cómo crece y cómo se mide. ${nextI >= 0 ? "Te marcamos el siguiente paso." : "¡Completaste la ruta!"}</p></div>
    <ol class="ac-route rv">${route.map((c, i) => { const st = S.state.concepts[c.id]; const cc = famOf(c); return `<li style="--cc:${cc.color};--i:${i}" class="${st ? (st.ok ? "ok" : "read") : ""} ${i === nextI ? "next" : ""}"><a href="#concepto.${c.id}"><span class="ac-route-n">${st && st.ok ? icon("check") : i + 1}</span><span class="ac-route-img">${art(conScene(c), { sq: true, decorative: true })}</span><b>${esc(c.n.split(":")[0])}</b>${i === nextI ? `<span class="chip st">Siguiente</span>` : st ? `<span class="xs muted">${st.ok ? "Comprobado" : "Leído"}</span>` : ""}</a></li>`; }).join("")}</ol></section>

  <section class="stack-lg"><div class="sec-head"><div class="stack"><span class="eyebrow">Biblioteca</span><h2>${C.concepts.length} conceptos, cada uno con su diagrama</h2></div><p>Filtra por familia de especialidades o busca por palabra.</p></div>
  <div class="ac-filters"><div class="ac-chips" role="group" aria-label="Filtrar por familia"><button type="button" data-acf="todas" aria-pressed="${f === "todas"}">Todas <span class="ct">${byQ.length}</span></button>${C.clusters.map(c => `<button type="button" data-acf="${c.id}" aria-pressed="${f === c.id}" style="--cc:${c.color}"><i class="sw" aria-hidden="true"></i>${esc(c.n)} <span class="ct">${byQ.filter(x => x.areas.some(a => area(a).c === c.id)).length}</span></button>`).join("")}</div><div class="field ac-search"><input type="search" id="acq" placeholder="Buscar concepto…" value="${esc(S.state.prefs.acq || "")}" aria-label="Buscar concepto"></div></div>
  ${list.length ? `<div class="lib ac-lib">${list.map(c => { const cc = famOf(c); const st = S.state.concepts[c.id]; const hasV = C.media.video.some(v => (v.related || []).includes("#concepto." + c.id)); return `<a class="ficha ac-card" href="#concepto.${c.id}" style="--cc:${cc.color}"><div class="viz">${viz(c.viz)}</div><span class="ac-card-art">${art(conScene(c), { sq: true, decorative: true })}</span><div class="row between"><span class="eyebrow">${esc(area(c.areas[0]).n)}</span>${st ? `<span class="chip ${st.ok ? "ok" : "st"}">${st.ok ? "Comprobado" : "Leído"}</span>` : ""}</div><h3>${esc(c.n)}</h3><p class="small muted">${esc(plain(c.simple).slice(0, 110))}…</p><span class="ac-badges">${hasV ? `<span>${icon("film")}Video</span>` : ""}${DEMOS[c.id] ? `<span>${icon("calc")}Demo</span>` : ""}${c.steps ? `<span>${icon("viaje")}${c.steps.length} pasos</span>` : ""}<span>${icon("question")}Comprobación</span></span></a>`; }).join("")}</div>` : `<div class="empty">No hay conceptos que coincidan. Prueba otra palabra o quita el filtro.</div>`}
  </section>
  <section class="stack"><div class="row between"><span class="eyebrow">${icon("play")} Cápsulas animadas paso a paso</span><a class="textlink" href="#medios">Medios ${icon("arrow")}</a></div><div class="ac-caps">${C.media.capsules.map(k => `<a class="ac-cap" href="#medios.${k.id}"><span class="ac-cap-steps" aria-hidden="true">${k.steps.map((s, i) => `<i style="--i:${i}">${esc(s.k)}</i>`).join("")}</span><b>${esc(k.n)}</b><span class="small muted">${esc(k.d)}</span><span class="xs muted">${k.steps.length} pasos · narración sintética opcional</span></a>`).join("")}</div></section>`,
  mount(root){
    reveal(root);
    $$("[data-acf]", root).forEach(b => b.addEventListener("click", () => { S.state.prefs.acf = b.dataset.acf; save(); render(true); }));
    const inp = $("#acq", root); let t;
    inp.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { S.state.prefs.acq = inp.value; render(true); const ni = $("#acq"); if (ni) { ni.focus(); ni.setSelectionRange(ni.value.length, ni.value.length); } }, 250); });
  } };
});

/* Demostraciones interactivas: calculan con el mismo motor que usan el Taller y las pruebas. */
const DEMOS = {
  rotacion: { n: "Calcula la rotación", f: [["sal", "Salidas", 18], ["ini", "Trabajadores al inicio", 44], ["fin", "Trabajadores al final", 46]], out: v => PY.rotacion({ salidas: v.sal, ini: v.ini, fin: v.fin }) + "%" },
  ausentismo: { n: "Calcula el ausentismo", f: [["per", "Días perdidos", 33], ["tr", "Trabajadores", 30], ["dias", "Días laborables", 22]], out: v => PY.ausentismo({ perdidos: v.per, programados: v.tr * v.dias }) + "%" },
  compensacion: { n: "Mueve el sueldo dentro de la banda", f: [["s", "Sueldo (S/)", 3550], ["min", "Mínimo de banda", 3200], ["max", "Máximo de banda", 3900]], out: v => "Compa-ratio " + PY.compaRatio({ sueldo: v.s, min: v.min, max: v.max }).toFixed(2) },
  planilla: { n: "Arma una boleta", f: [["b", "Básico (S/)", 1500], ["h", "¿Hijos? (1 = sí, 0 = no)", 1], ["he", "Horas extras (al 25%)", 6]], out: v => { const r = PY.boleta({ basico: v.b, hijos: !!v.h, he: Array.from({ length: Math.ceil(v.he / 2) }, (_, i) => Math.min(2, v.he - i * 2)) }); return `Ingresos ${money(r.bruto)} · ONP ${money(r.onp)} · Neto ${money(r.neto)}`; } },
  feriados: { n: "¿Cuánto vale un feriado trabajado?", f: [["b", "Básico (S/)", 1600], ["h", "¿Hijos? (1 = sí, 0 = no)", 1]], out: v => { const r = PY.pagoFeriado({ basico: v.b, hijos: !!v.h }); return `Día ${money(r.dia)} · Adicional en planilla ${money(r.adicional)}`; } }
};
DEMOS.beneficios = { n: "Calcula una gratificación", f: [["b", "Básico (S/)", 1350], ["h", "¿Hijos? (1 = sí, 0 = no)", 1], ["m", "Meses completos del semestre", 6]], out: v => { const g = PY.gratificacion({ basico: v.b, hijos: !!v.h, mesesCompletos: v.m }); return `Gratificación ${money(g.grati)} + bonificación 9% ${money(g.bonif)}`; } };

function demoHTML(id){
  const d = DEMOS[id]; if (!d) return "";
  return `<section class="demo" data-demo="${id}"><div class="row between"><h3>${icon("calc")} Demostración: ${esc(d.n)}</h3><span class="tag ped">Ejemplo pedagógico</span></div><div class="grid g3">${d.f.map(([k, l, v]) => `<div class="field"><label for="dm-${k}">${esc(l)}</label><input type="number" id="dm-${k}" data-dk="${k}" value="${v}" step="any"></div>`).join("")}</div><div class="out" data-dout aria-live="polite"></div><p class="xs muted">Cambia los valores y mira el resultado al instante. Usa el mismo motor de cálculo que el Taller.</p></section>`;
}
function bindDemo(root){
  $$("[data-demo]", root).forEach(box => {
    const d = DEMOS[box.dataset.demo];
    const upd = () => { const v = {}; $$("[data-dk]", box).forEach(i => { v[i.dataset.dk] = +i.value || 0; }); try { $("[data-dout]", box).textContent = d.out(v); } catch (e) { $("[data-dout]", box).textContent = "—"; } };
    $$("[data-dk]", box).forEach(i => i.addEventListener("input", upd)); upd();
  });
}

/* tarjeta que gira: versión sencilla ↔ versión profesional */
function flipCard(c){
  const l = S.state.prefs.lens || "simple";
  if (l === "both") return `<div class="grid g2">${lensBody(c.simple, c.tech)}</div>`;
  const back = l === "tech";
  return `<div class="ac-flip ${back ? "is-back" : ""}" data-flip>
    <div class="ac-face front" ${back ? 'aria-hidden="true" inert' : ""}><div class="row between"><span class="eyebrow">${icon("bulb")} Versión sencilla</span>${kusi3dImg("feliz", { size: 64, decorative: true })}</div><div class="prose">${c.simple}</div></div>
    <div class="ac-face back" ${back ? "" : 'aria-hidden="true" inert'}><div class="row between"><span class="eyebrow">${icon("scale")} Versión profesional</span>${kusi3dImg("pensando", { size: 64, decorative: true })}</div><div class="prose">${c.tech}</div></div>
  </div><div class="row"><button type="button" class="btn sm" data-flipbtn aria-pressed="${back}">${icon("replay")}<span>${back ? "Ver la versión sencilla" : "Girar: ver la versión profesional"}</span></button><span class="xs muted">O elige «Ambas» arriba para verlas lado a lado.</span></div>`;
}
function stepper(c){
  if (!c.steps) return "";
  return `<section class="ac-stepper rv" data-stepper style="--n:${c.steps.length}"><div class="row between"><div class="stack" style="gap:4px"><span class="eyebrow">${icon("viaje")} Paso a paso</span><h2>En la práctica</h2></div><div class="row"><button type="button" class="btn ghost sm" data-sprev aria-label="Paso anterior">${icon("back")}</button><button type="button" class="btn ghost sm" data-splay aria-pressed="false">${icon("play")}<span>Reproducir</span></button><button type="button" class="btn ghost sm" data-snext aria-label="Paso siguiente">${icon("arrow")}</button></div></div>
    <div class="ac-track" role="group" aria-label="Pasos">${c.steps.map(([w], i) => `<button type="button" class="ac-node" data-sn="${i}" aria-pressed="${i === 0}" aria-label="Paso ${i + 1}: ${esc(w)}"><span class="n">${i + 1}</span><span class="w">${esc(w)}</span></button>`).join("")}<span class="ac-track-fill" aria-hidden="true"></span></div>
    <div class="ac-step-panels" aria-live="polite">${c.steps.map(([w, what, who], i) => `<div class="ac-step" data-sp="${i}" ${i ? "hidden" : ""}><span class="ac-step-k">${String(i + 1).padStart(2, "0")}</span><div class="stack" style="gap:6px"><span class="eyebrow">${esc(w)}</span><p>${esc(what)}</p><span class="ac-who">${icon("user")}Responsable: <b>${esc(who)}</b></span></div></div>`).join("")}</div>
    <details class="ac-all"><summary>Ver todos los pasos como lista</summary><div class="steps">${c.steps.map(([w, what, who]) => `<div><span class="when">${esc(w)}</span><span>${esc(what)}<br><span class="who">Responsable: ${esc(who)}</span></span></div>`).join("")}</div></details></section>`;
}
function bindStepper(root){
  const box = $("[data-stepper]", root); if (!box) return;
  const nodes = $$("[data-sn]", box), panels = $$("[data-sp]", box), n = nodes.length; let i = 0, timer = null;
  const go = k => { i = (k + n) % n; nodes.forEach((b, j) => { b.setAttribute("aria-pressed", String(j === i)); b.classList.toggle("past", j < i); }); panels.forEach((p, j) => { p.hidden = j !== i; }); box.style.setProperty("--p", n > 1 ? i / (n - 1) : 1); };
  const stop = () => { clearInterval(timer); timer = null; const b = $("[data-splay]", box); b.setAttribute("aria-pressed", "false"); b.querySelector("span").textContent = "Reproducir"; };
  nodes.forEach(b => b.addEventListener("click", () => { stop(); go(+b.dataset.sn); }));
  $("[data-sprev]", box).addEventListener("click", () => { stop(); go(i - 1); });
  $("[data-snext]", box).addEventListener("click", () => { stop(); go(i + 1); });
  $("[data-splay]", box).addEventListener("click", e => { const b = e.currentTarget; if (timer) return stop(); b.setAttribute("aria-pressed", "true"); b.querySelector("span").textContent = "Pausar"; if (i === n - 1) go(0); timer = setInterval(() => { if (!box.isConnected) return clearInterval(timer); if (i >= n - 1) return stop(); go(i + 1); }, reducedMotion() ? 4000 : 2600); });
  go(0);
}
function badGood(c){
  const m = ["mal", "bien", "ambos"].includes(S.state.prefs.acBG) ? S.state.prefs.acBG : "mal";
  return `<section class="ac-bg stack rv" data-bg="${m}"><div class="row between"><div class="stack" style="gap:4px"><span class="eyebrow">${icon("eye")} Cómo se ve</span><h2>Hecho mal, hecho bien</h2></div><div class="seg" role="group" aria-label="Qué versión ver">${[["mal", "Hecho mal"], ["bien", "Hecho bien"], ["ambos", "Lado a lado"]].map(([v, n]) => `<button type="button" data-bgv="${v}" aria-pressed="${m === v}">${n}</button>`).join("")}</div></div>
    <div class="ac-bg-stage"><article class="ac-bg-card bad"><span class="ac-bg-k">${icon("x")}</span><div class="stack" style="gap:6px"><h3>Hecho mal <span class="tag ped">Ejemplo pedagógico</span></h3><p>${esc(c.bad)}</p></div>${kusi3dImg("preocupado", { size: 96, decorative: true })}</article>
    <article class="ac-bg-card good"><span class="ac-bg-k">${icon("check")}</span><div class="stack" style="gap:6px"><h3>Hecho bien <span class="tag ped">Ejemplo pedagógico</span></h3><p>${esc(c.good)}</p></div>${kusi3dImg("celebra", { size: 96, decorative: true })}</article></div>
    <button type="button" class="btn sm ac-bg-next" data-bgv="bien">${icon("sparkle")}<span>¿Y cómo se ve bien?</span></button></section>`;
}

register("concepto", id => {
  const c = concept(id);
  if (!c) return { title: "Concepto no encontrado", html: `<div class="empty">Vuelve a la <a href="#academia">Academia</a>.</div>` };
  if (!S.state.concepts[id]) { S.state.concepts[id] = { at: Date.now(), ok: false }; save(); }
  const st = S.state.concepts[id], ck = c.check;
  const cc = famOf(c);
  const vid = videoFor("#concepto." + c.id);
  const cap = C.media.capsules.find(k => k.id === c.id || k.id === c.viz);
  const sims = c.sims.map(sim).filter(Boolean), tools = c.tools.map(tool).filter(Boolean);
  const i = C.concepts.indexOf(c), prev = C.concepts[i - 1], next = C.concepts[i + 1];
  return { section: "academia", docTitle: c.n, html: `
  <section class="ac-hero" style="--cc:${cc.color}"><div class="ac-hero-copy"><span class="eyebrow">Academia · ${c.areas.map(a => esc(area(a).n)).join(" · ")}</span><h1>${esc(c.n)}</h1><div class="row"><a class="btn ghost sm" href="#academia">${icon("back")}Academia</a>${lensSeg()}</div>
    <div class="ac-meta">${vid ? `<span>${icon("film")}Video</span>` : ""}${c.viz ? `<span>${icon("mapa")}Organizador visual</span>` : ""}${c.steps ? `<span>${icon("viaje")}${c.steps.length} pasos</span>` : ""}${DEMOS[c.id] ? `<span>${icon("calc")}Demostración</span>` : ""}<span>${icon("warn")}${c.errors.length} errores frecuentes</span><span>${icon("question")}Comprobación</span></div></div>
    <figure class="ac-hero-img">${art(conScene(c), { eager: true })}<span class="ac-hero-kusi">${kusi3dImg(st.ok ? "celebra" : "curioso", { size: 120, decorative: true })}</span></figure></section>
  ${vid ? `<div class="ac-video">${vid}</div>` : cap ? `<a class="ac-capcta" href="#medios.${cap.id}"><span class="ac-cap-steps" aria-hidden="true">${cap.steps.map((s, k) => `<i style="--i:${k}">${esc(s.k)}</i>`).join("")}</span><span class="stack" style="gap:4px"><span class="eyebrow">${icon("play")} Cápsula animada</span><b>${esc(cap.n)}</b><span class="small muted">${esc(cap.d)}</span></span></a>` : ""}
  ${narr("con-" + c.id, c.simple + " " + c.tech, { title: "Escuchar la explicación" })}
  <section class="stack"><span class="eyebrow">${icon("bulb")} Dos niveles de explicación</span>${flipCard(c)}</section>
  ${c.viz ? `<section class="diagram ac-diagram rv"><div class="row between"><span class="eyebrow">${icon("mapa")} Organizador visual</span><span class="xs muted">Diagrama original · se lee en ambos temas</span></div>${viz(c.viz)}</section>` : ""}
  ${demoHTML(c.id)}
  ${stepper(c)}
  <section class="stack rv"><div class="row between"><div class="stack" style="gap:4px"><span class="eyebrow">${icon("warn")} Errores frecuentes</span><h2>Lo que suele salir mal</h2></div></div><div class="ac-errs">${c.errors.map((e, k) => `<div class="ac-err" style="--i:${k}"><span class="ac-err-n">${icon("warn")}<b>${k + 1}</b></span><p>${esc(e)}</p></div>`).join("")}</div></section>
  ${badGood(c)}
  <div class="ac-facts rv">
    <section class="mp-panel"><span class="eyebrow">${icon("retos")} Cómo se mide</span>${c.measure.length ? `<ul class="ac-ticks">${c.measure.map(e => `<li>${icon("check")}<span>${esc(e)}</span></li>`).join("")}</ul>` : `<p class="small muted">Es un marco normativo más que un proceso con indicadores propios.</p>`}</section>
    <section class="mp-panel"><span class="eyebrow">${icon("scale")} Normativa <span class="tag norm">Vigente al verificar</span></span>${c.norma.length ? `<ul class="ac-ticks law">${c.norma.map(e => `<li>${icon("doc")}<span>${esc(e)}</span></li>`).join("")}</ul>` : `<p class="small muted">No depende de una norma específica.</p>`}</section>
  </div>
  ${c.caso ? `<section class="card stack"><h3>Casos documentados <span class="tag doc">Fuente verificable</span></h3>${c.caso.map(k => `<div class="small"><a href="${k.u}" target="_blank" rel="noopener">${esc(k.t)}</a><br><span class="muted">${esc(k.d)}</span></div>`).join("")}</section>` : ""}
  ${extSlot([c.id].concat(c.areas))}
  <section class="card stack lift" id="chk"><span class="eyebrow">${icon("question")} Comprueba lo aprendido</span><p><b>${esc(ck.q)}</b></p><div class="choices">${ck.o.map((o, i) => `<button type="button" class="choice" data-ck="${i}" ${st.ans != null ? "disabled" : ""} aria-pressed="${st.ans === i}"><span class="k">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>${st.ans != null ? `<div class="callout ${st.ans === ck.a ? "ok" : "bad"}">${icon(st.ans === ck.a ? "check" : "info")}<span><b>${st.ans === ck.a ? "Correcto." : "No exactamente."}</b> ${esc(ck.why)}</span></div><button type="button" class="btn ghost sm" data-reck style="justify-self:start">Responder otra vez</button>` : ""}</section>
  <section class="stack"><span class="eyebrow">Ponlo en práctica</span>
    ${sims.length || tools.length ? `<div class="mp-sims">${sims.map(s => `<a class="mp-sim" href="#sim.${s.id}"><span class="mp-sim-img">${art(s.scene, { sq: true, decorative: true })}</span><span class="mp-sim-copy"><span class="eyebrow">Jornada</span><b>${esc(s.title)}</b></span></a>`).join("")}${tools.map(t => `<a class="mp-sim tool" href="#tool.${t.id}"><span class="mp-sim-img">${art("boleta", { sq: true, decorative: true })}</span><span class="mp-sim-copy"><span class="eyebrow">Taller</span><b>${esc(t.n)}</b></span></a>`).join("")}</div>` : ""}
    <div class="row">${c.areas.map(a => areaChip(a)).join("")}</div></section>
  <nav class="ac-pn" aria-label="Otros conceptos">${prev ? `<a href="#concepto.${prev.id}"><span class="xs muted">${icon("back")} Anterior</span><b>${esc(prev.n)}</b></a>` : "<span></span>"}${next ? `<a class="nx" href="#concepto.${next.id}"><span class="xs muted">Siguiente ${icon("arrow")}</span><b>${esc(next.n)}</b></a>` : "<span></span>"}</nav>`,
  mount(root){
    bindLens(root); bindNarr(root); bindDemo(root); bindStepper(root); bindExt(root); reveal(root);
    const fb = $("[data-flipbtn]", root);
    if (fb) fb.addEventListener("click", () => {
      const card = $("[data-flip]", root), back = !card.classList.contains("is-back");
      card.classList.toggle("is-back", back);
      const [fr, bk] = [$(".ac-face.front", card), $(".ac-face.back", card)];
      [[fr, !back], [bk, back]].forEach(([el, vis]) => { if (vis) { el.removeAttribute("aria-hidden"); el.removeAttribute("inert"); } else { el.setAttribute("aria-hidden", "true"); el.setAttribute("inert", ""); } });
      fb.setAttribute("aria-pressed", String(back)); fb.querySelector("span").textContent = back ? "Ver la versión sencilla" : "Girar: ver la versión profesional";
      S.state.prefs.lens = back ? "tech" : "simple"; save();
      $$("[data-lens]", root).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lens === S.state.prefs.lens)));
    });
    const bg = $("[data-bg]", root);
    $$("[data-bgv]", root).forEach(b => b.addEventListener("click", () => { const v = b.dataset.bgv; S.state.prefs.acBG = v; save(); bg.dataset.bg = v; $$(".seg [data-bgv]", bg).forEach(x => x.setAttribute("aria-pressed", String(x.dataset.bgv === v))); }));
    $$("[data-ck]", root).forEach(b => b.addEventListener("click", () => { st.ans = +b.dataset.ck; st.ok = st.ans === ck.a; save(); render(true); }));
    const r = $("[data-reck]", root); if (r) r.addEventListener("click", () => { delete st.ans; save(); render(true); });
  } };
});
