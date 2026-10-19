/* Jornadas: catálogo, briefing, espacio de trabajo y debrief. */
import { $, $$, esc, clamp, fmtDate, toast } from "../core/util.js";
import { S, save, reset } from "../core/store.js";
import { register, go, render } from "../core/router.js";
import { emit } from "../core/bus.js";
import { C, sim as getSim, area, cluster, task, trait, KIND, VERIFIED } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { avatar } from "../brand/people.js";
import { coco } from "../brand/coco.js";
import * as N from "../engine/nodes.js";
import { narr, bindNarr } from "../core/narrator.js";

export const areaChip = (id, link = true) => { const a = area(id); if (!a) return ""; const c = cluster(a.c); return link ? `<a class="chip" href="#area.${a.id}"><i class="sw" style="background:${c.color}"></i>${esc(a.n)}</a>` : `<span class="chip"><i class="sw" style="background:${c.color}"></i>${esc(a.n)}</span>`; };
const ORG = { peq: "Pequeña empresa", med: "Mediana empresa", gra: "Gran empresa", pub: "Entidad pública" };
const LVL = { entrada: "Puesto de entrada", intermedio: "Intermedio", senior: "Mayor responsabilidad" };
const vis = (n, st) => !(n.if && !st.flags.includes(n.if)) && !(n.ifnot && st.flags.includes(n.ifnot));
const curIdx = (sim, st) => { let i = st.i; while (i < sim.nodes.length && !vis(sim.nodes[i], st)) i++; return i; };
const visibleCount = (sim, st) => sim.nodes.filter(n => vis(n, st)).length;

export function startSim(id){
  const sim = getSim(id); sim.nodes.forEach(n => N.resetTmp(n.id));
  S.state.active[id] = { i: 0, m: Object.assign({}, N.START), flags: [], log: [], asked: {}, pending: null, at: Date.now(), revised: {} };
  S.state.debrief = null; save(); emit("sim:start", { sim }); go("#sim." + id);
}

function simCard(s){
  const runs = (S.state.runs[s.id] || []).length, act = S.state.active[s.id];
  const pers = (s.people || []).slice(0, 3);
  const c = cluster(area(s.areas[0]).c);
  return `<a class="badge-card" href="#sim.${s.id}" style="--cc:${c.color}">
    ${runs ? `<span class="status chip ok">${icon("check")}Vivida${runs > 1 ? " ×" + runs : ""}</span>` : act ? `<span class="status chip st">En curso</span>` : ""}
    <span class="eyebrow">${KIND[s.kind].n} · ${s.sector === "publico" ? "Sector público" : "Sector privado"} · ≈ ${s.mins} min</span>
    <h3 style="padding-right:70px">${esc(s.title)}</h3>
    <p class="small">${esc(s.hook)}</p>
    <div class="row" style="gap:6px">${pers.map(p => avatar(p.n, p.av, { size: 34, decorative: true })).join("")}<span class="xs muted">${esc(s.size)} · ${esc(s.place)}</span></div>
    <div class="row" style="gap:6px">${s.areas.slice(0, 2).map(a => areaChip(a, false)).join("")}<span class="chip">${ORG[s.orgType] || ""}</span></div>
  </a>`;
}

register("sims", () => {
  const f = S.state.prefs.simf || "todas";
  const list = C.sims.filter(s => f === "todas" || (f === "publico" ? s.sector === "publico" : f === "gra" ? s.orgType === "gra" : s.kind === f));
  const without = C.roles.filter(r => !r.sim);
  return { section: "sims", docTitle: "Jornadas", html: `
  <section class="hero compact">${scene("oficina")}<div class="hero-in"><div class="copy"><span class="eyebrow">Jornadas · simulaciones de trabajo</span><h1>Entra a un puesto y vive su día</h1><p class="muted">Correos, chats, llamadas, documentos imperfectos y jefes con prisa. Decide, equivócate y mira cómo lo razonaría una profesional.</p></div><div class="coco-slot">${coco("curioso", { size: 120, cls: "anim", label: false })}</div></div></section>
  <div class="callout">${icon("info")}<span><b>Todo lo que vivas aquí es una simulación.</b> Organizaciones, personas, conversaciones y datos son ficticios, construidos a partir de prácticas profesionales habituales. Las normas citadas son reales y se verificaron el ${VERIFIED}. Las grandes empresas de los casos no representan a ninguna empresa real.</span></div>
  <div class="row between"><div class="seg" role="group" aria-label="Filtrar jornadas">${[["todas","Todas"],["micro","Para empezar"],["dia","Un día"],["semana","Una semana"],["urgente","Casos urgentes"],["gra","Gran empresa"],["publico","Sector público"]].map(([v, n]) => `<button type="button" data-f="${v}" aria-pressed="${f === v}">${n}</button>`).join("")}</div><span class="small muted">${list.length} de ${C.sims.length} jornadas</span></div>
  <div class="badges">${list.map(simCard).join("")}</div>
  <section class="card stack"><h2>Otros cargos para explorar con dilemas rápidos</h2><p class="small muted">Estos puestos aún no tienen jornada completa, pero puedes enfrentar sus decisiones típicas en su perfil.</p><div class="row">${without.map(r => `<a class="chip" href="#cargo.${r.id}">${esc(r.n)}</a>`).join("")}</div></section>`,
  mount(root){ $$("[data-f]", root).forEach(b => b.addEventListener("click", () => { S.state.prefs.simf = b.dataset.f; save(); render(true); })); } };
});

register("sim", id => {
  const sim = getSim(id);
  if (!sim) return { title: "Jornada no encontrada", html: `<div class="empty">Vuelve a <a href="#sims">Jornadas</a>.</div>` };
  const st = S.state.active[id];
  if (st) return playView(sim, st);
  const runs = S.state.runs[id] || [];
  if (S.state.debrief === id && runs.length) return debriefView(sim, runs[runs.length - 1]);
  return briefView(sim, runs);
});

function briefView(sim, runs){
  const nid = "brief-" + sim.id;
  return { section: "sims", docTitle: sim.title, html: `
  <section class="hero">${scene(sim.scene)}<div class="hero-in"><div class="copy"><span class="eyebrow">${KIND[sim.kind].n} · ${sim.sector === "publico" ? "Sector público" : "Sector privado"} · ${ORG[sim.orgType] || ""} · ≈ ${sim.mins} min</span><h1>${esc(sim.title)}</h1><p class="muted">${esc(sim.hook)}</p><div class="row"><button type="button" class="btn brand lg" data-start>${runs.length ? "Vivirlo de nuevo" : "Empezar"} ${icon("arrow")}</button>${runs.length ? `<button type="button" class="btn ghost" data-last>Ver mi último informe (${fmtDate(runs[runs.length - 1].end)})</button>` : ""}<a class="btn ghost" href="#sims">${icon("back")}Jornadas</a></div></div><div class="coco-slot">${coco("feliz", { size: 130, cls: "anim", label: false })}</div></div></section>
  ${narr(nid, `${sim.title}. ${sim.hook} ${sim.org} ${sim.you} Tu objetivo: ${sim.goal}`, { title: "Escucha el briefing" })}
  <div class="split"><div class="stack-lg">
    <section class="card stack"><span class="eyebrow">La organización <span class="tag sim">Ficticia</span></span><p>${sim.org}</p><p class="small muted">${esc(sim.size)} · ${esc(sim.place)}</p></section>
    <section class="card stack"><span class="eyebrow">Tu puesto · ${LVL[sim.level] || ""}</span><p>${sim.you}</p><span class="eyebrow">Tu objetivo</span><p>${esc(sim.goal)}</p></section>
    <section class="card stack"><span class="eyebrow">Restricciones reales del día</span><ul style="margin:0;padding-left:1.2rem;display:grid;gap:6px">${sim.limits.map(l => `<li>${esc(l)}</li>`).join("")}</ul></section>
  </div><aside class="stack-lg">
    <section class="card stack"><span class="eyebrow">Con quiénes trabajarás <span class="tag sim">Personajes ficticios</span></span><div class="cast">${sim.people.map(p => `<div class="p">${avatar(p.n, p.av, { size: 56, alt: "Retrato ilustrado de " + p.n + " (personaje ficticio)" })}<div><b>${esc(p.n)}</b><br><span class="small">${esc(p.r)}</span><br><span class="xs muted">${esc(p.d)}</span></div></div>`).join("")}</div></section>
    <section class="card stack"><span class="eyebrow">Cómo funciona</span><p class="small">Las situaciones llegan como en la vida real: por correo, WhatsApp, llamadas, reuniones y sistemas. Antes de algunas decisiones puedes averiguar más (cuesta tiempo). Cinco indicadores muestran el efecto de lo que decides. Algunas tareas permiten <b>corregir tu respuesta</b> una vez. Al final verás tu informe y registrarás cómo te sentiste.</p></section>
    <section class="stack"><span class="eyebrow">Áreas que pone a prueba</span><div class="row">${sim.areas.map(a => areaChip(a)).join("")}</div></section>
    ${runs.length ? `<div data-resetbox><button type="button" class="btn ghost sm" data-reset>${icon("trash")}Borrar mi historial de esta jornada</button></div>` : ""}
  </aside></div>`,
  mount(root){
    bindNarr(root);
    $("[data-start]", root).addEventListener("click", () => startSim(sim.id));
    const l = $("[data-last]", root); if (l) l.addEventListener("click", () => { S.state.debrief = sim.id; save(); render(); });
    const rb = $("[data-resetbox]", root);
    if (rb) $("[data-reset]", rb).addEventListener("click", () => { rb.innerHTML = `<div class="callout warn small stack"><span>Se borrarán los informes y la bitácora de esta jornada (lo demás se conserva).</span><div class="row"><button type="button" class="btn sm" data-yes>Sí, borrar</button><button type="button" class="btn ghost sm" data-no>Cancelar</button></div></div>`; $("[data-yes]", rb).addEventListener("click", () => { reset.sim(sim.id); toast("Historial de la jornada borrado"); render(true); }); $("[data-no]", rb).addEventListener("click", () => render(true)); });
  } };
}

function gaugesHTML(m, prev){
  return `<div class="gauges">${N.METRICS.map(([k, n, d]) => { const v = m[k], p = prev ? prev[k] : v; const cls = v > p ? "up" : v < p ? "down" : ""; return `<div class="gauge ${cls}" title="${esc(d)}"><span>${n}</span><div class="bar" role="meter" aria-label="${n}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${v}"><i style="width:${v}%"></i></div><span class="mono">${v}</span></div>`; }).join("")}</div>`;
}

function applyResult(st, node, res){
  const prev = Object.assign({}, st.m);
  Object.entries(res.fx || {}).forEach(([k, v]) => { st.m[k] = clamp((st.m[k] || 0) + v, 0, 100); });
  (res.set || []).forEach(f => { if (!st.flags.includes(f)) st.flags.push(f); });
  st.log.push({ id: node.id, t: node.t, title: node.title, q: res.q, label: res.label, out: res.out, pro: res.pro, mind: res.mind, sig: res.sig, tags: res.tags, asked: (st.asked[node.id] || []).length, score: res.score, revised: !!res.revised });
  st.pending = { nodeId: node.id, res, prev };
}

function playView(sim, st){
  const idx = curIdx(sim, st);
  if (idx >= sim.nodes.length) { finish(sim, st); return debriefView(sim, (S.state.runs[sim.id] || []).slice(-1)[0]); }
  const node = sim.nodes[idx];
  const total = visibleCount(sim, st);
  st.revised = st.revised || {};
  const draw = root => {
    const pend = st.pending && st.pending.nodeId === node.id ? st.pending : null;
    const asked = st.asked[node.id] || [];
    const box = $("#simbox", root);
    const doneN = st.log.length - (pend ? 1 : 0);
    const isLast = !sim.nodes.slice(idx + 1).some(n => vis(n, st));
    const canRevise = pend && node.revisable && !st.revised[node.id] && pend.res.q !== "buena";
    const nid = "mind-" + sim.id + "-" + node.id;
    box.innerHTML = `
      <div class="workspace">
        <div class="stack-lg" style="min-width:0">
          ${N.head(node, { sim, asked, answered: pend ? pend.res : null })}
          <div id="inter">${N.interaction(node, { answered: pend ? pend.res : null })}</div>
          ${pend ? N.outcome(pend.res, { listen: nid, twist: node.twist, next: `${canRevise ? `<button type="button" class="btn ghost" data-revise>${icon("replay")}Corregir mi respuesta</button>` : ""}<button type="button" class="btn brand" data-next>${isLast ? "Terminar y ver mi informe" : "Continuar"} ${icon("arrow")}</button>` }) : ""}
        </div>
        <aside class="desk-side">
          <div class="clockcard"><span class="d">${sim.kind === "semana" ? "Día y hora" : "Hora"}</span><span class="t">${esc(node.t || "")}</span><div class="steps-dots" aria-label="Avance: situación ${Math.min(doneN + 1, total)} de ${total}">${Array.from({ length: total }, (_, i) => `<i class="${i < doneN ? "d" : i === doneN ? "c" : ""}"></i>`).join("")}</div><span class="d">Situación ${Math.min(doneN + 1, total)} de ${total}</span></div>
          <div class="card stack"><span class="eyebrow">Tus indicadores</span>${gaugesHTML(st.m, pend ? pend.prev : null)}</div>
          ${st.log.length ? `<details class="card more"><summary>Tu cuaderno (${st.log.length})</summary><div class="stack small" style="margin-top:8px">${st.log.map(l => `<div><span class="chip ${N.qChip[l.q]}">${esc(l.t || "")}</span> ${esc(l.title)}</div>`).join("")}</div></details>` : ""}
          <button type="button" class="btn ghost sm" data-quit>${icon("back")}Salir y continuar después</button>
          <div data-restartbox><button type="button" class="btn ghost sm" data-restart>${icon("replay")}Reiniciar esta jornada</button></div>
        </aside>
      </div>`;
    if (pend) { const slot = box.querySelector(`[data-narr-slot="${nid}"]`); if (slot) slot.outerHTML = `<div style="margin-left:auto;max-width:100%">${narr(nid, (pend.res.out || "") + " " + (pend.res.pro || "") + " " + Object.values(pend.res.mind || {}).join(" "), { title: "Escuchar el razonamiento" })}</div>`; bindNarr(box); }
    N.bind(box, node, { asked, onAsk: oid => { const a = st.asked[node.id] = st.asked[node.id] || []; if (a.includes(oid) || a.length >= node.ask.max) return; a.push(oid); st.m.agenda = clamp(st.m.agenda - 2, 0, 100); save(); draw(root); } }, res => {
      if (st.revising === node.id) { res.revised = true; res.fx = Object.fromEntries(Object.entries(res.fx || {}).map(([k, v]) => [k, v > 0 ? Math.round(v / 2) : v])); st.revising = null; }
      applyResult(st, node, res);
      save(); draw(root); emit("sim:outcome", { sim, node, res });
      const oc = $(".outcome", root); if (oc) { oc.scrollIntoView({ behavior: "smooth", block: "start" }); oc.focus({ preventScroll: true }); }
    }, () => draw(root));
    const nx = $("[data-next]", box);
    if (nx) nx.addEventListener("click", () => { if (!st.pending) return; nx.disabled = true; st.pending = null; st.i = idx + 1; save(); render(); });
    const rv = $("[data-revise]", box);
    if (rv) rv.addEventListener("click", () => {
      // Se revierte el efecto de la primera respuesta; la corrección suma solo la mitad de lo positivo.
      st.m = Object.assign({}, st.pending.prev); st.log.pop(); st.revised[node.id] = true; st.revising = node.id;
      N.tmp(node.id).phase = "edit";
      st.pending = null; save(); draw(root);
    });
    $("[data-quit]", box).addEventListener("click", () => go("#sims"));
    $("[data-restart]", box).addEventListener("click", () => {
      const rb = $("[data-restartbox]", box);
      rb.innerHTML = `<div class="callout warn small stack"><span>¿Reiniciar? Perderás el avance de esta partida (tus informes anteriores se conservan).</span><div class="row"><button type="button" class="btn sm" data-yes>Sí, reiniciar</button><button type="button" class="btn ghost sm" data-no>Cancelar</button></div></div>`;
      $("[data-yes]", rb).addEventListener("click", () => startSim(sim.id));
      $("[data-no]", rb).addEventListener("click", () => draw(root));
    });
  };
  return { section: "sims", docTitle: sim.title, html: `
    <div class="sim-top">${scene(sim.scene)}<div class="in"><div class="stack" style="gap:4px"><span class="eyebrow">${KIND[sim.kind].n} · ${sim.sector === "publico" ? "Sector público" : "Sector privado"} · <span class="tag sim">Simulación</span></span><h1 style="font-size:clamp(1.5rem,1.1rem + 1.6vw,2.3rem)">${esc(sim.title.replace(/^(Un día como|Una semana|Caso urgente:|Tu primera mañana como) ?/, m => m))}</h1></div><div class="people-row">${sim.people.slice(0, 4).map(p => `<span class="person">${avatar(p.n, p.av, { size: 34, decorative: true })}<span><b>${esc(p.n.split(" ").slice(-2).join(" "))}</b><span>${esc(p.r)}</span></span></span>`).join("")}</div></div></div>
    <div id="simbox"></div>`,
    mount(root){ draw(root); if (!st.pending) emit("sim:node", { sim, node }); } };
}

function finish(sim, st){
  const run = { at: st.at, end: Date.now(), m: st.m, log: st.log, flags: st.flags };
  const runs = S.state.runs[sim.id] = S.state.runs[sim.id] || [];
  runs.push(run); if (runs.length > 5) runs.splice(0, runs.length - 5);
  delete S.state.active[sim.id];
  S.state.debrief = sim.id;
  sim.nodes.forEach(n => N.resetTmp(n.id));
  save(); emit("sim:finish", { sim, run });
}

function debriefView(sim, run){
  const qc = { buena: 0, aceptable: 0, riesgosa: 0 }; run.log.forEach(l => qc[l.q]++);
  const sig = {}; run.log.forEach(l => Object.entries(l.sig || {}).forEach(([k, v]) => { sig[k] = (sig[k] || 0) + v; }));
  const top = Object.entries(sig).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const asked = run.log.filter(l => l.asked > 0).length;
  const refl = S.state.refl.find(r => r.kind === "sim" && r.ref === sim.id && r.run === run.end);
  const tags = Array.from(new Set(run.log.flatMap(l => l.tags || []))).filter(t => C.tasks.some(x => x.id === t));
  const form = { enjoy: 0, see: 0, energy: 0, repeat: [], avoid: [], note: "" };
  const mood = qc.riesgosa > run.log.length / 2 ? "animo" : qc.buena >= run.log.length / 2 ? "celebra" : "feliz";
  return { section: "sims", docTitle: "Informe · " + sim.title, html: `
    <section class="hero compact">${scene(sim.scene)}<div class="hero-in"><div class="copy"><span class="eyebrow">Informe de la experiencia · ${fmtDate(run.end)}</span><h1>${esc(sim.title)}</h1><p class="muted">Lo que pasó con tus decisiones y cómo las razonaría una profesional con experiencia. <b>Los aciertos y errores son aprendizaje: no miden tu vocación.</b> Un error de principiante no es falta de talento.</p></div><div class="coco-slot" style="display:grid;justify-items:center;gap:8px"><span class="stamp">Experiencia<br>registrada<br><small>${fmtDate(run.end)}</small></span>${coco(mood, { size: 110, cls: "anim", label: false })}</div></div></section>
    <div class="bento">
      <section class="tile w3"><span class="eyebrow">Indicadores al cierre</span>${gaugesHTML(run.m, N.START)}<p class="xs muted">Comparados con el inicio del día.</p></section>
      <section class="tile w3"><span class="eyebrow">Tus decisiones</span><div class="row"><span class="chip ok">${qc.buena} sólidas</span><span class="chip warn">${qc.aceptable} discutibles</span><span class="chip bad">${qc.riesgosa} riesgosas</span></div><p class="small">Pediste información antes de decidir en <b>${asked}</b> ${asked === 1 ? "situación" : "situaciones"}. ${asked ? "Buscar datos antes de actuar es un hábito profesional." : "La próxima vez prueba a pedir información: muchas decisiones cambian con un dato más."}</p>${run.log.some(l => l.revised) ? `<p class="small">Corregiste ${run.log.filter(l => l.revised).length} respuesta(s): revisar el propio trabajo también es oficio.</p>` : ""}</section>
      <section class="tile w6 tint"><span class="eyebrow">Tu forma de decidir hoy</span><div class="grid g3">${top.length ? top.map(([k]) => { const t = trait(k); return `<div><b>${t.n}</b><br><span class="small muted">${t.d}</span></div>`; }).join("") : `<p class="small muted">Sin un patrón claro en esta partida.</p>`}</div></section>
    </div>
    <section class="stack-lg"><h2>El día, decisión por decisión</h2><div class="timeline">${run.log.map(l => `<div class="tl q-${l.q}"><span class="t">${esc(l.t || "")}</span><b>${esc(l.title)}</b><span class="small"><span class="chip ${N.qChip[l.q]}">${N.qLabel[l.q]}${l.revised ? " · corregida" : ""}</span> ${esc((l.label || "").slice(0, 220))}${(l.label || "").length > 220 ? "…" : ""}</span>${l.out ? `<span class="small muted">${l.out}</span>` : ""}${l.pro || l.mind ? `<details class="more small"><summary>Cómo lo piensa y razona una profesional</summary><div style="margin-top:8px">${N.mind(l.pro, l.mind)}</div></details>` : ""}<button type="button" class="btn ghost sm" style="justify-self:start" data-save="${esc(l.id)}">${icon("star")}Guardar este razonamiento</button></div>`).join("")}</div></section>
    <section class="card stack lift" id="reflbox">${refl ? reflDone(refl) : reflForm(tags)}</section>
    <div class="row"><button type="button" class="btn brand" data-again>Vivirlo de nuevo</button><a class="btn ghost" href="#sims">Otra jornada</a><a class="btn ghost" href="#brujula">Ver mi brújula</a>${S.state.journey.started && S.state.journey.done.length < C.journey.stations.length ? `<a class="btn soft" href="#viaje">${icon("viaje")}Seguir mi viaje</a>` : ""}</div>`,
    mount(root){
      $("[data-again]", root).addEventListener("click", () => startSim(sim.id));
      $$("[data-save]", root).forEach(b => b.addEventListener("click", () => {
        const l = run.log.find(x => x.id === b.dataset.save); if (!l) return;
        if (!S.state.saved.some(x => x.sim === sim.id && x.node === l.id)) { S.state.saved.push({ sim: sim.id, node: l.id, title: l.title, pro: l.pro, mind: l.mind, at: Date.now() }); save(); }
        b.innerHTML = icon("check") + "Guardado en tu brújula"; b.disabled = true;
      }));
      const box = $("#reflbox", root);
      if (!refl) bindRefl(box, form, () => {
        const r = { at: Date.now(), kind: "sim", ref: sim.id, run: run.end, enjoy: form.enjoy, see: form.see, energy: form.energy, repeat: form.repeat, avoid: form.avoid, note: form.note.slice(0, 600) };
        S.state.refl.push(r); save(); box.innerHTML = reflDone(r); toast("Registrado en tu bitácora");
        if (S.state.journey.started && sim.id === "practicante" && !S.state.journey.done.includes("primera")) { S.state.journey.done.push("primera"); save(); }
      });
    } };
}

export function reflForm(tags){
  return `<span class="eyebrow">Bitácora personal</span><h2>¿Cómo te sentiste?</h2><p class="small muted">Esto es lo que más pesa en tu brújula: tu experiencia, no tus aciertos.</p>
  <div class="field"><span class="lbl" id="lb-enjoy">¿Cuánto disfrutaste esta experiencia?</span>${ratingRow("enjoy", 0, "lb-enjoy")}<span class="xs muted">1 = nada · 5 = muchísimo</span></div>
  <div class="field"><span class="lbl" id="lb-see">¿Te ves haciendo este trabajo todos los días?</span>${ratingRow("see", 0, "lb-see")}</div>
  <div class="field"><span class="lbl">¿Cómo terminaste?</span><div class="togs">${[["3","Con energía"],["2","Neutral"],["1","Sin energía"]].map(([v, l]) => `<button type="button" class="neu" data-energy="${v}" aria-pressed="false">${l}</button>`).join("")}</div></div>
  ${tags.length ? `<div class="field"><span class="lbl">Tareas que repetirías</span><div class="togs">${tags.map(t => `<button type="button" class="yes" data-rep="${t}" aria-pressed="false">${esc(task(t).n)}</button>`).join("")}</div></div>
  <div class="field"><span class="lbl">Tareas que preferirías evitar</span><div class="togs">${tags.map(t => `<button type="button" class="no" data-avo="${t}" aria-pressed="false">${esc(task(t).n)}</button>`).join("")}</div></div>` : ""}
  <div class="field"><label for="rnote">Una frase sobre lo que descubriste (opcional)</label><textarea id="rnote" style="min-height:80px" maxlength="600" placeholder="Ej.: Me gustó investigar, pero me agotó la presión del sindicato."></textarea></div>
  <div class="row"><button type="button" class="btn brand" data-saverefl disabled>Guardar en mi bitácora</button><span class="small muted" data-reflhint>Califica las dos primeras preguntas para guardar.</span></div>`;
}
export const ratingRow = (name, val, labelId) => `<div class="rating" role="group" ${labelId ? `aria-labelledby="${labelId}"` : ""}>${[1,2,3,4,5].map(i => `<button type="button" data-rate="${name}" data-v="${i}" aria-pressed="${val === i}" aria-label="${i} de 5">${i}</button>`).join("")}</div>`;
export function bindRatings(root, store, onChange){
  $$("[data-rate]", root).forEach(b => b.addEventListener("click", () => {
    store[b.dataset.rate] = +b.dataset.v;
    $$(`[data-rate="${b.dataset.rate}"]`, root).forEach(x => x.setAttribute("aria-pressed", String(x === b)));
    if (onChange) onChange();
  }));
}
export function bindRefl(box, form, onSave){
  const upd = () => { const ok = form.enjoy && form.see; $("[data-saverefl]", box).disabled = !ok; $("[data-reflhint]", box).hidden = !!ok; };
  bindRatings(box, form, upd);
  $$("[data-energy]", box).forEach(b => b.addEventListener("click", () => { form.energy = +b.dataset.energy; $$("[data-energy]", box).forEach(x => x.setAttribute("aria-pressed", String(x === b))); }));
  const tog = (attr, arr, other) => $$(`[data-${attr}]`, box).forEach(b => b.addEventListener("click", () => {
    const t = b.dataset[attr]; const i = form[arr].indexOf(t);
    if (i >= 0) form[arr].splice(i, 1); else { form[arr].push(t); const j = form[other].indexOf(t); if (j >= 0) { form[other].splice(j, 1); const ob = $(`[data-${other === "repeat" ? "rep" : "avo"}="${t}"]`, box); if (ob) ob.setAttribute("aria-pressed", "false"); } }
    b.setAttribute("aria-pressed", String(i < 0));
  }));
  tog("rep", "repeat", "avoid"); tog("avo", "avoid", "repeat");
  $("#rnote", box).addEventListener("input", e => { form.note = e.target.value; });
  $("[data-saverefl]", box).addEventListener("click", onSave);
}
export function reflDone(r){
  return `<span class="eyebrow">Bitácora personal · ${fmtDate(r.at)}</span><div class="row"><span class="chip st">Disfrute ${r.enjoy}/5</span><span class="chip st">Me veo haciéndolo ${r.see}/5</span>${r.energy ? `<span class="chip">${["","Terminé sin energía","Terminé neutral","Terminé con energía"][r.energy]}</span>` : ""}</div>${r.repeat.length ? `<p class="small"><b>Repetiría:</b> ${r.repeat.map(t => esc(task(t).n)).join(", ")}</p>` : ""}${r.avoid.length ? `<p class="small"><b>Evitaría:</b> ${r.avoid.map(t => esc(task(t).n)).join(", ")}</p>` : ""}${r.note ? `<blockquote style="margin:0;padding:8px 12px;border-left:3px solid var(--line-2)">${esc(r.note)}</blockquote>` : ""}<p class="small muted">Esto ya alimenta tu <a href="#brujula">brújula</a>.</p>`;
}
