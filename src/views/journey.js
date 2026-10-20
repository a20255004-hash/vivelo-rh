/* El viaje guiado (cinco estaciones). Orienta sin restringir: todo se puede saltar. */
import { $, $$, esc } from "../core/util.js";
import { S, save, reset } from "../core/store.js";
import { register, go, render } from "../core/router.js";
import { emit } from "../core/bus.js";
import { C, area, cluster, sim, role } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { coco } from "../brand/coco.js";
import { avatar } from "../brand/people.js";
import { startSim } from "./sims.js";

const LVL = { entrada: "Entrada", intermedio: "Intermedio", senior: "Mayor responsabilidad" };
const J = () => S.state.journey;
const mark = id => { const j = J(); if (!j.done.includes(id)) { j.done.push(id); j.at = Date.now(); save(); } };
const rolesFor = fam => C.roles.filter(r => r.areas.some(a => area(a) && area(a).c === fam)).sort((a, b) => ["entrada", "intermedio", "senior"].indexOf(a.lvl) - ["entrada", "intermedio", "senior"].indexOf(b.lvl));

register("viaje", () => {
  const j = J();
  if (!j.started) { j.started = true; j.at = Date.now(); save(); }
  if (S.state.runs.practicante && !j.done.includes("primera")) mark("primera");
  if (Object.keys(S.state.declared).length && j.done.includes("camino") && !j.done.includes("brujula")) mark("brujula");
  const stations = C.journey.stations;
  const cur = stations.findIndex(s => !j.done.includes(s.id));
  const pct = Math.round(j.done.length / stations.length * 100);
  const famC = j.family ? cluster(j.family) : null;
  const body = (s, i) => {
    if (s.id === "familias") return `<div class="fam-pick">${C.clusters.map(c => `<button type="button" class="fam" data-fam="${c.id}" aria-pressed="${j.family === c.id}" style="--cc:${c.color}"><b>${esc(c.n)}</b><span class="small muted">${esc(c.d)}</span><span class="xs muted">${C.areas.filter(a => a.c === c.id).map(a => a.n).slice(0, 3).join(" · ")}…</span></button>`).join("")}</div>`;
    if (s.id === "puesto") {
      if (!j.family) return `<p class="small muted">Elige primero una familia en la estación anterior (o salta esta estación).</p>`;
      const rs = rolesFor(j.family).slice(0, 4);
      return `<div class="badges">${rs.map(r => `<button type="button" class="badge-card" data-role="${r.id}" aria-pressed="${j.role === r.id}" style="--cc:${famC.color};text-align:left;font:inherit;cursor:pointer;${j.role === r.id ? "outline:3px solid var(--brand)" : ""}"><span class="eyebrow">${LVL[r.lvl]} · ${esc(r.sector)}</span><div class="who">${avatar(r.n, { s: r.id.length % 6, g: r.id.length % 2 ? "f" : "m", c: r.id.length % 9 }, { size: 46, decorative: true })}<b>${esc(r.n)}</b></div><span class="small">${esc(r.mission)}</span><span class="xs muted"><b>Lado B:</b> ${esc(r.hard)}</span></button>`).join("")}</div>${j.role ? `<a class="btn ghost sm" href="#cargo.${j.role}" style="justify-self:start">Ver el perfil completo de ${esc(role(j.role).n)}</a>` : ""}`;
    }
    if (s.id === "primera") {
      const runs = S.state.runs.practicante; const act = S.state.active.practicante;
      return `<div class="row">${runs ? `<span class="chip ok">${icon("check")}Ya la viviste</span><a class="btn ghost sm" href="#sim.practicante">Ver tu informe</a>` : `<button type="button" class="btn brand" data-start-first>${act ? "Continuar mi primera mañana" : "Empezar mi primera mañana"} ${icon("arrow")}</button>`}<span class="small muted">≈ ${sim("practicante").mins} minutos · Logística Andina Express (ficticia)</span></div>`;
    }
    if (s.id === "camino") return `<div class="doors" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr))">${C.journey.paths.map(p => { const target = p.h === "jornada" ? sim(C.journey.famSim[j.family || "atraer"]) : null; return `<button type="button" class="door" data-path="${p.id}"><div class="art">${scene(p.scene)}</div><b style="font-family:var(--f-display);font-size:1.05rem">${icon(p.ic)} ${esc(p.n)}</b><span class="small muted">${esc(target ? target.title : p.d)}</span></button>`; }).join("")}</div>`;
    if (s.id === "brujula") {
      const fam = j.family || "atraer";
      return `<p class="small">¿Qué áreas te atraen hoy? Marca algunas (puedes cambiarlo cuando quieras).</p><div class="grid g2">${C.areas.filter(a => a.c === fam).map(a => `<div class="stack" style="gap:4px"><b class="small">${esc(a.n)}</b><div class="togs">${[["atrae","yes","Me atrae"],["neutral","neu","No sé"],["no","no","No me atrae"]].map(([v, cl, l]) => `<button type="button" class="${cl}" data-dec="${a.id}" data-v="${v}" aria-pressed="${S.state.declared[a.id] === v}">${l}</button>`).join("")}</div></div>`).join("")}</div><a class="btn brand" href="#brujula" style="justify-self:start">Abrir mi brújula ${icon("arrow")}</a>`;
    }
    return "";
  };
  return { section: "viaje", docTitle: "Mi viaje", html: `
  <section class="hero">${scene("viaje")}<div class="hero-in"><div class="copy"><span class="eyebrow">Hacer un viaje · ${pct}% recorrido</span><h1>Tu viaje por el mundo de Recursos Humanos</h1><p class="muted">Cinco estaciones para conocer las familias del oficio, probarte un puesto y vivir tu primera mañana de trabajo. Puedes saltar cualquier estación o salir y volver: tu avance se guarda.</p><div class="bar" style="max-width:420px"><i style="width:${pct}%;background:linear-gradient(90deg,var(--brand),var(--spark))"></i></div></div><div class="coco-slot">${coco(cur < 0 ? "celebra" : stations[cur].coco, { size: 140, cls: "anim enter" })}</div></div></section>
  ${cur < 0 ? `<div class="callout ok">${icon("check")}<span><b>¡Completaste el viaje!</b> Sigue explorando desde tu <a href="#brujula">brújula</a> o vuelve a recorrerlo.</span></div>` : ""}
  <section class="trail">${stations.map((s, i) => { const done = j.done.includes(s.id), isCur = i === cur; return `<div class="station ${done ? "done" : isCur ? "current" : "locked"}"><span class="pin" aria-hidden="true">${done ? icon("check") : i + 1}</span><div class="body"><div class="row between"><div class="stack" style="gap:2px"><span class="eyebrow">Estación ${i + 1}${done ? " · completada" : isCur ? " · ahora" : ""}</span><h2 style="font-size:1.35rem">${esc(s.n)}</h2></div>${!done ? `<button type="button" class="btn ghost sm" data-skip="${s.id}">Saltar</button>` : ""}</div><p class="small muted">${esc(s.d)}</p>${isCur ? `<div class="coco-inline">${coco(s.coco, { size: 70, cls: "anim", label: false })}<div class="say small">${esc(s.say)}</div></div>` : ""}${done || isCur ? body(s, i) : ""}</div></div>`; }).join("")}</section>
  <div class="row"><span data-resetbox><button type="button" class="btn ghost sm" data-reset>${icon("replay")}Reiniciar solo el viaje</button></span><span class="xs muted">Reiniciar el viaje no borra tus jornadas, talleres ni tu brújula.</span></div>`,
  mount(root){
    if (cur >= 0 && !S.state.seen["j:" + stations[cur].id]) { S.state.seen["j:" + stations[cur].id] = 1; save(); emit("journey:station", { st: stations[cur] }); }
    $$("[data-fam]", root).forEach(b => b.addEventListener("click", () => { J().family = b.dataset.fam; J().role = null; mark("familias"); render(true); }));
    $$("[data-role]", root).forEach(b => b.addEventListener("click", () => { J().role = b.dataset.role; mark("puesto"); render(true); }));
    const sf = $("[data-start-first]", root); if (sf) sf.addEventListener("click", () => { if (S.state.active.practicante) go("#sim.practicante"); else startSim("practicante"); });
    $$("[data-path]", root).forEach(b => b.addEventListener("click", () => {
      const p = C.journey.paths.find(x => x.id === b.dataset.path); mark("camino");
      if (p.h === "jornada") go("#sim." + C.journey.famSim[J().family || "atraer"]);
      else if (p.h === "otra") { const others = C.clusters.filter(c => c.id !== J().family); const o = others[Math.floor(Math.random() * others.length)]; go("#sim." + C.journey.famSim[o.id]); }
      else go(p.h);
    }));
    $$("[data-dec]", root).forEach(b => b.addEventListener("click", () => { const id = b.dataset.dec, v = b.dataset.v; if (S.state.declared[id] === v) delete S.state.declared[id]; else S.state.declared[id] = v; save(); if (Object.keys(S.state.declared).length) mark("brujula"); render(true); }));
    $$("[data-skip]", root).forEach(b => b.addEventListener("click", () => { mark(b.dataset.skip); render(true); }));
    const rb = $("[data-resetbox]", root);
    $("[data-reset]", root).addEventListener("click", () => { rb.innerHTML = `<span class="callout warn small row">¿Reiniciar el viaje? <button type="button" class="btn sm" data-yes>Sí</button><button type="button" class="btn ghost sm" data-no>Cancelar</button></span>`; $("[data-yes]", rb).addEventListener("click", () => { reset.journey(); Object.keys(S.state.seen).filter(k => k.startsWith("j:")).forEach(k => delete S.state.seen[k]); save(); render(true); }); $("[data-no]", rb).addEventListener("click", () => render(true)); });
  } };
});
