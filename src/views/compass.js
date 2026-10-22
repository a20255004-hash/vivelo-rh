/* Mi brújula: lo experimentado, lo declarado y lo desconocido, con evidencia visible. */
import { $, $$, esc, fmtDate } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register, render } from "../core/router.js";
import { C, sim, tool, area, cluster, task, concept } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg } from "../brand/art.js";
import { coco } from "../brand/coco.js";
import * as P from "../engine/profile.js";
import { mind } from "../engine/nodes.js";

register("brujula", () => {
  const st = S.state;
  const fits = P.all(), dn = P.decisions(), tr = P.traits();
  const exp = fits.filter(f => f.status === "exp"), decl = fits.filter(f => f.status === "decl"), none = fits.filter(f => f.status === "none" || f.status === "inf");
  const sorted = fits.slice().sort((a, b) => (b.score == null ? -1 : b.score) - (a.score == null ? -1 : a.score));
  const rep = {}, avo = {}; st.refl.forEach(r => { (r.repeat || []).forEach(t => rep[t] = (rep[t] || 0) + 1); (r.avoid || []).forEach(t => avo[t] = (avo[t] || 0) + 1); });
  const skills = P.skills(), route = P.route().slice(0, 5);
  const notDone = C.sims.filter(s => !st.runs[s.id]), notTools = C.tools.filter(t => !st.tools[t.id]);
  const topExp = exp.filter(f => f.score >= .62).sort((a, b) => b.score - a.score).slice(0, 3);
  const rejectedUntested = fits.filter(f => f.decl === "no" && !f.nExp);
  const n = st.profile.name ? esc(st.profile.name.split(" ")[0]) : "";
  const best = topExp[0];
  return { section: "brujula", docTitle: "Mi brújula", html: `
  <section class="compass-hero">${art("brujula")}<div class="stack-lg"><span class="eyebrow" style="color:#C7C0DD">Mi brújula vocacional</span><h1>${n ? `La brújula de ${n}` : "Tu brújula"}</h1><p class="muted" style="max-width:60ch">Lo que has experimentado, lo que declaras y lo que aún no conoces, separado y con la evidencia a la vista. ${best ? `Hoy apunta hacia <b style="color:#fff">${esc(best.area.n)}</b>, pero una brújula no decide por ti.` : "Se irá llenando con cada jornada que vivas."}</p>
    <div class="statband"><div class="stat"><b>${exp.length}</b><span>áreas experimentadas</span></div><div class="stat"><b>${decl.length}</b><span>solo declaradas</span></div><div class="stat"><b>${none.length}</b><span>por descubrir</span></div><div class="stat"><b>${dn}</b><span>decisiones observadas</span></div></div></div>
    <div>${coco(best ? "feliz" : "curioso", { size: 150, cls: "anim", label: false })}</div></section>
  <div class="callout">${icon("info")}<span>Tu brújula combina tres fuentes, con este peso: <b>lo que sentiste al experimentar</b> (lo más importante), <b>cómo decides</b> y <b>lo que declaras</b>. Tus aciertos y errores no cuentan aquí: miden lo que estás aprendiendo, no tu potencial.</span></div>
  <div class="split">
    <section class="stack-lg"><div class="stack"><h2>Mapa de compatibilidad</h2><p class="small muted">Toca un área para ver la evidencia. Los cuadritos indican cuánta evidencia hay.</p></div>
      <div class="compat">${sorted.map(f => { const c = cluster(f.area.c); const s = P.STATUS[f.status]; return `<div><button type="button" class="compat-row" data-ex="${f.area.id}" aria-expanded="false"><span><b class="small">${esc(f.area.n)}</b><br><span class="chip ${s[0]}" style="margin-top:3px">${s[1]}</span></span><span class="bar-wrap"><span class="bar" style="display:block"><i style="width:${f.score == null ? 0 : Math.round(f.score * 100)}%;background:${c.color}"></i></span></span><span style="display:grid;justify-items:end;gap:4px"><span class="mono small">${f.score == null ? "—" : Math.round(f.score * 100)}</span><span class="conf" aria-label="Evidencia ${f.conf} de 4">${[0,1,2,3].map(i => `<i class="${i < f.conf ? "on" : ""}"></i>`).join("")}</span></span></button><div class="ev" data-evbox="${f.area.id}" hidden>${f.ev.length ? `<ul style="margin:0">${f.ev.map(e => `<li>${e}</li>`).join("")}</ul>` : `<span>Aún no hay evidencia. ${C.sims.some(s => s.areas.includes(f.area.id)) ? "Hay jornadas que la tocan." : "Empieza por su ficha en el mapa."}</span>`}<a href="#area.${f.area.id}">Ver ficha del área</a></div></div>`; }).join("")}</div>
    </section>
    <aside class="stack-lg">
      <section class="card stack"><span class="eyebrow">Tu forma de decidir</span>${dn >= 6 ? `${P.radar(tr, best ? best.area.tr : null)}<p class="xs muted">Basado en ${dn} decisiones. ${best ? `La línea punteada muestra lo que exige ${esc(best.area.n)}.` : ""}</p>` : `<div class="empty small">Necesitas al menos 6 decisiones (llevas ${dn}). Vive una jornada completa para ver tu radar.</div>`}</section>
      <section class="card stack"><span class="eyebrow">Experiencias sugeridas</span>${route.length ? `<div class="next-list">${route.map((r, i) => `<a class="next" href="${r.h}" data-route="${i}"><span class="num-badge">${i + 1}</span><span><b class="small">${esc(r.t)}</b><br><span class="why">${esc(r.why)}</span></span>${icon("arrow")}</a>`).join("")}</div>` : `<p class="small">Recorriste todo el contenido. Repite experiencias para confirmar tus preferencias.</p>`}</section>
    </aside>
  </div>
  <div class="bento">
    <section class="tile w3"><h3>Candidatas para empezar tu carrera</h3>${topExp.length ? topExp.map(f => `<div><b>${esc(f.area.n)}</b> <span class="mono small">${Math.round(f.score * 100)}</span><br><span class="small muted">${esc(f.ev[0] || "")}</span></div>`).join("") : `<div class="empty small">Aparecerán cuando hayas experimentado al menos un área y te haya gustado (disfrute y proyección altos).</div>`}${rejectedUntested.length ? `<div class="callout warn small">${icon("info")}<span><b>Descartaste sin probar:</b> ${rejectedUntested.map(f => esc(f.area.n)).join(", ")}. A veces lo que imaginamos de un área no coincide con el trabajo real.</span></div>` : ""}</section>
    <section class="tile w3"><h3>Lo que repetirías y lo que evitarías</h3>${Object.keys(rep).length || Object.keys(avo).length ? `<div class="stack small">${Object.entries(rep).sort((a, b) => b[1] - a[1]).map(([t, k]) => `<div><span class="chip ok">Repetirías</span> ${esc(task(t).n)} <span class="muted">(${k})</span></div>`).join("")}${Object.entries(avo).sort((a, b) => b[1] - a[1]).map(([t, k]) => `<div><span class="chip bad">Evitarías</span> ${esc(task(t).n)} <span class="muted">(${k})</span></div>`).join("")}</div>` : `<div class="empty small">Al terminar una jornada podrás marcar qué tareas repetirías y cuáles evitarías.</div>`}</section>
    <section class="tile w3"><h3>Habilidades por desarrollar</h3>${skills.length ? skills.map(k => `<div class="small"><b>${esc(k.s.n)}</b>${k.s.c && concept(k.s.c) ? ` · <a href="#concepto.${k.s.c}">estudiar ${esc(concept(k.s.c).n.toLowerCase())}</a>` : ""}</div>`).join("") + `<p class="xs muted">Salen de tus decisiones discutibles o riesgosas y de tus puntajes del taller. Son normales al aprender.</p>` : `<div class="empty small">Aparecerán a partir de tus decisiones en jornadas y del taller.</div>`}</section>
    <section class="tile w3"><h3>Lo que todavía no conoces</h3>${notDone.length || notTools.length ? `<div class="stack small">${notDone.slice(0, 6).map(s => `<a href="#sim.${s.id}">${esc(s.title)}</a>`).join("")}${notTools.slice(0, 4).map(t => `<a href="#tool.${t.id}">Taller: ${esc(t.n)}</a>`).join("")}</div>` : `<p class="small">Viviste todas las jornadas y talleres disponibles.</p>`}</section>
  </div>
  <section class="stack-lg"><div class="stack"><h2>Cuaderno de razonamientos</h2><p class="small muted">Los criterios profesionales que guardaste desde tus informes. Vuelve a ellos antes de una entrevista o de tus prácticas.</p></div>${st.saved.length ? `<div class="grid g2">${st.saved.slice().reverse().map(x => `<div class="saved-card"><span class="eyebrow">${esc(sim(x.sim) ? sim(x.sim).title : "")} · ${fmtDate(x.at)}</span><b>${esc(x.title)}</b>${mind(x.pro, x.mind)}</div>`).join("")}</div>` : `<div class="empty small">Aún no guardaste razonamientos. En el informe de cada jornada puedes guardar los que más te sirvan.</div>`}</section>
  <section class="stack-lg"><div class="stack"><h2>¿Qué áreas te atraen hoy?</h2><p class="small muted">Decláralo aunque no tengas certeza. Es una foto de este momento: podrás cambiarlo cuando quieras.</p></div>
    <div class="grid g2">${C.clusters.map(c => `<div class="card stack" style="border-top:6px solid ${c.color}"><b style="color:${c.color};font-family:var(--f-display)">${esc(c.n)}</b>${C.areas.filter(a => a.c === c.id).map(a => `<div class="stack" style="gap:4px"><span class="small"><b>${esc(a.n)}</b></span><div class="togs">${[["atrae","yes","Me atrae"],["neutral","neu","No sé"],["no","no","No me atrae"]].map(([v, cl, l]) => `<button type="button" class="${cl}" data-dec="${a.id}" data-v="${v}" aria-pressed="${st.declared[a.id] === v}">${l}</button>`).join("")}</div></div>`).join("")}</div>`).join("")}</div>
    ${Object.keys(st.declared).length ? `<button type="button" class="btn ghost sm" data-cleardec style="justify-self:start">Borrar solo mis declaraciones</button>` : ""}</section>
  <section class="card stack"><h2>Bitácora</h2>${st.refl.length ? `<div class="stack">${st.refl.slice().reverse().map(r => { const src = r.kind === "sim" ? sim(r.ref) : tool(r.ref); return src ? `<div class="small" style="border-top:1px dashed var(--line-2);padding-top:8px"><span class="mono muted">${fmtDate(r.at)}</span> · <b>${esc(src.title || src.n)}</b> · disfrute ${r.enjoy}/5 · proyección ${r.see}/5${r.note ? `<br><span class="muted">«${esc(r.note)}»</span>` : ""}</div>` : ""; }).join("")}</div>` : `<div class="empty small">Tu bitácora está vacía. Cada experiencia que termines quedará registrada aquí con lo que sentiste.</div>`}</section>
  <div class="callout">${icon("shield")}<span>Tu progreso se guarda <b>solo en este navegador</b>. Para no perderlo o llevarlo a otro dispositivo, exporta un respaldo en <a href="#perfil">Mis datos</a>.</span></div>`,
  mount(root){
    $$("[data-ex]", root).forEach(b => b.addEventListener("click", () => { const box = $(`[data-evbox="${b.dataset.ex}"]`, root); const open = box.hidden; box.hidden = !open; b.setAttribute("aria-expanded", String(open)); }));
    $$("[data-dec]", root).forEach(b => b.addEventListener("click", () => { const id = b.dataset.dec, v = b.dataset.v; if (S.state.declared[id] === v) delete S.state.declared[id]; else S.state.declared[id] = v; save(); render(true); }));
    $$("[data-route]", root).forEach(a => a.addEventListener("click", () => { const r = route[+a.dataset.route]; if (r && r.pre) { r.pre(); save(); } }));
    const cd = $("[data-cleardec]", root); if (cd) cd.addEventListener("click", () => { S.state.declared = {}; save(); render(true); });
  } };
});
