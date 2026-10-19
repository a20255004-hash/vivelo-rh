/* Cargos: perfiles, escalera de niveles, «mismo caso, tres sillas» y dilemas rápidos. */
import { $, $$, esc } from "../core/util.js";
import { S, save } from "../core/store.js";
import { register, render } from "../core/router.js";
import { C, role, sim, area, cluster } from "../content/index.js";
import { levelCases } from "../content/roles.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { avatar } from "../brand/people.js";
import { qLabel, qChip } from "../engine/nodes.js";
import { areaChip } from "./sims.js";

const LVL = { entrada: "Puesto de entrada", intermedio: "Intermedio", senior: "Mayor responsabilidad" };
const roleAv = r => avatar(r.n, { s: (r.id.length * 7) % 6, g: r.id.length % 2 ? "f" : "m", c: r.id.length % 10, age: r.lvl === "senior" ? "adulto" : "joven", gl: r.lvl === "senior" }, { size: 54, decorative: true });

register("cargos", () => {
  const f = S.state.prefs.lvl || "todos";
  const roles = C.roles.filter(r => f === "todos" || r.lvl === f);
  const ci = Math.min(+(S.state.prefs.lcase || 0), levelCases.length - 1), lc = levelCases[ci];
  return { section: "cargos", docTitle: "Cargos", html: `
  <section class="hero compact">${scene("reunion")}<div class="hero-in"><div class="copy"><span class="eyebrow">Cargos profesionales</span><h1>Qué hace realmente cada puesto</h1><p class="muted">De practicante a jefatura, en empresas y en el Estado: un día típico, lo que nadie cuenta del puesto y dilemas para probar tu criterio.</p></div></div></section>
  <section class="stack-lg"><div class="stack"><h2>Mismo caso, tres sillas</h2><p class="small muted">La diferencia entre niveles no es solo el sueldo: es de qué respondes. Elige un caso y compara qué hace cada nivel.</p></div>
    <div class="seg" role="group" aria-label="Elegir caso">${levelCases.map((c, i) => `<button type="button" data-lc="${i}" aria-pressed="${i === ci}">${esc(c.n)}</button>`).join("")}</div>
    <div class="callout sun">${icon("info")}<span>${esc(lc.ctx)}</span></div>
    <div class="grid g3">${[["e","Entrada","var(--c-atraer)"],["i","Intermedio","var(--c-desarrollar)"],["s","Mayor responsabilidad","var(--c-estrategia)"]].map(([k, n, col], idx) => `<div class="card stack reveal" style="border-top:8px solid ${col};animation-delay:${idx * .08}s"><span class="eyebrow">${n}</span><h3>${esc(lc[k].who)}</h3><p class="small">${esc(lc[k].do)}</p><p class="small"><b>${esc(lc[k].resp)}</b></p></div>`).join("")}</div>
  </section>
  <div class="row between"><h2>Perfiles</h2><div class="seg" role="group" aria-label="Filtrar por nivel">${[["todos","Todos"],["entrada","Entrada"],["intermedio","Intermedio"],["senior","Mayor responsabilidad"]].map(([v, n]) => `<button type="button" data-lvl="${v}" aria-pressed="${f === v}">${n}</button>`).join("")}</div></div>
  <div class="badges">${roles.map(r => { const c = cluster(area(r.areas[0]).c); return `<a class="badge-card" href="#cargo.${r.id}" style="--cc:${c.color}">${r.sim ? `<span class="status chip st">Con jornada</span>` : ""}<div class="who">${roleAv(r)}<div><span class="eyebrow">${LVL[r.lvl]} · ${esc(r.sector)}</span><h3>${esc(r.n)}</h3></div></div><p class="small">${esc(r.mission)}</p><div class="row" style="gap:6px">${r.areas.slice(0, 2).map(a => areaChip(a, false)).join("")}</div></a>`; }).join("")}</div>`,
  mount(root){
    $$("[data-lvl]", root).forEach(b => b.addEventListener("click", () => { S.state.prefs.lvl = b.dataset.lvl; save(); render(true); }));
    $$("[data-lc]", root).forEach(b => b.addEventListener("click", () => { S.state.prefs.lcase = +b.dataset.lc; save(); render(true); }));
  } };
});

register("cargo", id => {
  const r = role(id);
  if (!r) return { title: "Cargo no encontrado", html: `<div class="empty">Vuelve a <a href="#cargos">Cargos</a>.</div>` };
  const s = r.sim ? sim(r.sim) : null;
  const c = cluster(area(r.areas[0]).c);
  return { section: "cargos", docTitle: r.n, html: `
  <section class="hero compact">${scene(s ? s.scene : "oficina")}<div class="hero-in"><div class="copy"><span class="eyebrow">${LVL[r.lvl]} · ${esc(r.sector)}</span><div class="row">${roleAv(r)}<h1 style="font-size:clamp(1.8rem,1.3rem + 2vw,2.8rem)">${esc(r.n)}</h1></div><p class="muted">${esc(r.mission)}</p><div class="row"><a class="btn ghost sm" href="#cargos">${icon("back")}Cargos</a>${r.areas.map(a => areaChip(a)).join("")}</div></div></div></section>
  <div class="split"><div class="stack-lg">
    <section class="card stack"><h2>Un día típico</h2><div class="steps">${r.day.map(([h, t]) => `<div><span class="when">${h}</span><span>${esc(t)}</span></div>`).join("")}</div><p class="xs muted">Recorrido orientativo construido a partir de funciones habituales del puesto.</p></section>
    <section class="callout warn">${icon("warn")}<span><b>El lado B del puesto.</b> ${esc(r.hard)}</span></section>
    <section class="stack-lg"><h2>Dilemas rápidos</h2>${r.dil.map((d, di) => { const key = r.id + "_" + di, ans = S.state.dil[key]; return `<div class="card stack"><p><b>${esc(d.q)}</b></p><div class="choices">${d.o.map((o, oi) => `<button type="button" class="choice ${ans != null && ans !== oi ? "other" : ""}" data-dil="${key}" data-o="${oi}" aria-pressed="${ans === oi}" ${ans != null ? "disabled" : ""}><span class="k">${"ABC"[oi]}</span><span>${esc(o[0])}</span></button>`).join("")}</div>${ans != null ? `<div class="outcome"><div class="outcome-head q-${d.o[ans][1]}">${qLabel[d.o[ans][1]]}</div><div class="outcome-body"><p>${esc(d.o[ans][2])}</p><details class="more"><summary>Ver las otras opciones</summary><div class="stack small" style="margin-top:8px">${d.o.map(o => `<div><span class="chip ${qChip[o[1]]}">${qLabel[o[1]]}</span> ${esc(o[0])}<br><span class="muted">${esc(o[2])}</span></div>`).join("")}</div></details><button type="button" class="btn ghost sm" data-redil="${key}" style="justify-self:start">Volver a intentar</button></div></div>` : ""}</div>`; }).join("")}</section>
  </div><aside class="stack-lg">
    ${s ? `<a class="badge-card" href="#sim.${s.id}" style="--cc:${c.color}"><span class="eyebrow">Jornada completa</span><h3>${esc(s.title)}</h3><p class="small">${esc(s.hook)}</p><span class="btn brand sm" style="justify-self:start">Vivirlo ${icon("arrow")}</span></a>` : ""}
    <section class="card stack"><span class="eyebrow">Entregables</span><ul style="margin:0;padding-left:1.1rem">${r.deliver.map(x => `<li>${esc(x)}</li>`).join("")}</ul><span class="eyebrow">Coordina con</span><p class="small">${r.with.map(esc).join(" · ")}</p><span class="eyebrow">Se le mide por</span><p class="small">${r.kpi.map(esc).join(" · ")}</p><span class="eyebrow">Requisitos habituales</span><p class="small">${esc(r.req)}</p><span class="eyebrow">Hacia dónde crecer</span><div class="ladder">${[r.n].concat(r.next).map((x, i, a) => `<span>${esc(x)}</span>${i < a.length - 1 ? "<i>→</i>" : ""}`).join("")}</div></section>
  </aside></div>`,
  mount(root){
    $$("[data-dil]", root).forEach(b => b.addEventListener("click", () => { S.state.dil[b.dataset.dil] = +b.dataset.o; save(); render(true); }));
    $$("[data-redil]", root).forEach(b => b.addEventListener("click", () => { delete S.state.dil[b.dataset.redil]; save(); render(true); }));
  } };
});
