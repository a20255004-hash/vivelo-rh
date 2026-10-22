/* Academia: fichas con diagramas, dos niveles de explicación, demostraciones interactivas y comprobación. */
import { $, $$, esc, money } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register, render } from "../core/router.js";
import { C, concept, area, cluster, sim, tool } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg } from "../brand/art.js";
import { coco } from "../brand/coco.js";
import { viz } from "./diagrams.js";
import { areaChip } from "./sims.js";
import { lensSeg, lensBody, bindLens } from "./lens.js";
import { narr, bindNarr } from "../core/narrator.js";
import * as PY from "../engine/payroll.js";

register("academia", () => {
  const f = S.state.prefs.acf || "todas";
  const q = (S.state.prefs.acq || "").toLowerCase();
  const list = C.concepts.filter(c => (f === "todas" || c.areas.some(a => area(a).c === f)) && (!q || (c.n + " " + c.simple).toLowerCase().includes(q)));
  return { section: "academia", docTitle: "Academia", html: `
  <section class="hero compact">${art("academia")}<div class="hero-in"><div class="copy"><span class="eyebrow">Academia · cada concepto en dos niveles</span><h1>Entender antes de hacer</h1><p class="muted">Primero como se lo explicarías a alguien que nunca trabajó en RR.HH.; después como lo usa una profesional: criterios, indicadores, documentos y normas. Con diagramas, demostraciones, errores frecuentes y cómo se ve hecho mal y hecho bien.</p></div><div class="coco-slot">${coco("pensando", { size: 120, cls: "anim", label: false })}</div></div></section>
  <div class="row"><div class="seg" role="group" aria-label="Filtrar por familia"><button type="button" data-acf="todas" aria-pressed="${f === "todas"}">Todas</button>${C.clusters.map(c => `<button type="button" data-acf="${c.id}" aria-pressed="${f === c.id}">${esc(c.n)}</button>`).join("")}</div><div class="field" style="flex:1;min-width:220px"><input type="search" id="acq" placeholder="Buscar concepto…" value="${esc(S.state.prefs.acq || "")}" aria-label="Buscar concepto"></div></div>
  ${list.length ? `<div class="lib">${list.map(c => { const cc = cluster(area(c.areas[0]).c); const st = S.state.concepts[c.id]; return `<a class="ficha" href="#concepto.${c.id}" style="border-top:6px solid ${cc.color}"><div class="viz">${viz(c.viz)}</div><div class="row between"><span class="eyebrow">${esc(area(c.areas[0]).n)}</span>${st ? `<span class="chip ${st.ok ? "ok" : "st"}">${st.ok ? "Comprobado" : "Leído"}</span>` : ""}</div><h3>${esc(c.n)}</h3><p class="small muted">${esc(c.simple.replace(/<[^>]+>/g, "").slice(0, 120))}…</p></a>`; }).join("")}</div>` : `<div class="empty">No hay conceptos que coincidan. Prueba otra palabra o quita el filtro.</div>`}
  <section class="card stack"><div class="row between"><h2>Cápsulas animadas</h2><a class="btn ghost sm" href="#medios">${icon("film")}Ver todas</a></div><p class="small muted">Explicaciones visuales paso a paso, con narración sintética opcional y transcripción.</p><div class="row">${C.media.capsules.map(k => `<a class="chip st" href="#medios.${k.id}">${icon("play")}${esc(k.n)}</a>`).join("")}</div></section>`,
  mount(root){
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

register("concepto", id => {
  const c = concept(id);
  if (!c) return { title: "Concepto no encontrado", html: `<div class="empty">Vuelve a la <a href="#academia">Academia</a>.</div>` };
  if (!S.state.concepts[id]) { S.state.concepts[id] = { at: Date.now(), ok: false }; save(); }
  const st = S.state.concepts[id], ck = c.check;
  const cc = cluster(area(c.areas[0]).c);
  return { section: "academia", docTitle: c.n, html: `
  <section class="hero compact">${art("academia")}<div class="hero-in"><div class="copy"><span class="eyebrow" style="color:${cc.color}">Academia · ${c.areas.map(a => esc(area(a).n)).join(" · ")}</span><h1>${esc(c.n)}</h1><div class="row"><a class="btn ghost sm" href="#academia">${icon("back")}Academia</a>${lensSeg()}</div></div></div></section>
  ${narr("con-" + c.id, c.simple + " " + c.tech, { title: "Escuchar la explicación" })}
  <div class="grid g2">${lensBody(c.simple, c.tech)}</div>
  ${c.viz ? `<section class="diagram"><div class="row between"><span class="eyebrow">${icon("mapa")} Organizador visual</span></div>${viz(c.viz)}</section>` : ""}
  ${demoHTML(c.id)}
  ${c.steps ? `<section class="card stack"><h2>En la práctica</h2><div class="steps">${c.steps.map(([w, what, who]) => `<div><span class="when">${esc(w)}</span><span>${esc(what)}<br><span class="who">Responsable: ${esc(who)}</span></span></div>`).join("")}</div></section>` : ""}
  <div class="compare2"><div class="bad"><h4>${icon("x")}Hecho mal <span class="tag ped">Ejemplo pedagógico</span></h4><p>${esc(c.bad)}</p></div><div class="good"><h4>${icon("check")}Hecho bien <span class="tag ped">Ejemplo pedagógico</span></h4><p>${esc(c.good)}</p></div></div>
  <div class="bento">
    <section class="tile w2"><span class="eyebrow">${icon("warn")} Errores frecuentes</span><ul style="margin:0;padding-left:1.1rem;display:grid;gap:4px" class="small">${c.errors.map(e => `<li>${esc(e)}</li>`).join("")}</ul></section>
    <section class="tile w2"><span class="eyebrow">${icon("sims")} Cómo se mide</span>${c.measure.length ? `<ul style="margin:0;padding-left:1.1rem;display:grid;gap:4px" class="small">${c.measure.map(e => `<li>${esc(e)}</li>`).join("")}</ul>` : `<p class="small muted">Es un marco normativo más que un proceso con indicadores propios.</p>`}</section>
    <section class="tile w2"><span class="eyebrow">${icon("scale")} Normativa <span class="tag norm">Vigente al verificar</span></span>${c.norma.length ? `<ul style="margin:0;padding-left:1.1rem;display:grid;gap:4px" class="small">${c.norma.map(e => `<li>${esc(e)}</li>`).join("")}</ul>` : `<p class="small muted">No depende de una norma específica.</p>`}</section>
  </div>
  ${c.caso ? `<section class="card stack"><h3>Casos documentados <span class="tag doc">Fuente verificable</span></h3>${c.caso.map(k => `<div class="small"><a href="${k.u}" target="_blank" rel="noopener">${esc(k.t)}</a><br><span class="muted">${esc(k.d)}</span></div>`).join("")}</section>` : ""}
  <section class="card stack lift" id="chk"><span class="eyebrow">${icon("question")} Comprueba lo aprendido</span><p><b>${esc(ck.q)}</b></p><div class="choices">${ck.o.map((o, i) => `<button type="button" class="choice" data-ck="${i}" ${st.ans != null ? "disabled" : ""} aria-pressed="${st.ans === i}"><span class="k">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>${st.ans != null ? `<div class="callout ${st.ans === ck.a ? "ok" : "bad"}">${icon(st.ans === ck.a ? "check" : "info")}<span><b>${st.ans === ck.a ? "Correcto." : "No exactamente."}</b> ${esc(ck.why)}</span></div><button type="button" class="btn ghost sm" data-reck style="justify-self:start">Responder otra vez</button>` : ""}</section>
  <section class="stack"><span class="eyebrow">Ponlo en práctica</span><div class="row">${c.areas.map(a => areaChip(a)).join("")}${c.sims.filter(sim).map(s => `<a class="chip st" href="#sim.${s}">${icon("sims")}Jornada: ${esc(sim(s).title)}</a>`).join("")}${c.tools.filter(tool).map(t => `<a class="chip" href="#tool.${t}">${icon("taller")}Taller: ${esc(tool(t).n)}</a>`).join("")}</div></section>`,
  mount(root){
    bindLens(root); bindNarr(root); bindDemo(root);
    $$("[data-ck]", root).forEach(b => b.addEventListener("click", () => { st.ans = +b.dataset.ck; st.ok = st.ans === ck.a; save(); render(true); }));
    const r = $("[data-reck]", root); if (r) r.addEventListener("click", () => { delete st.ans; save(); render(true); });
  } };
});
