/* Componente de "situación" (nodo). Lo usan las simulaciones, el Taller y el Viaje.
   Tipos de interacción:
   - choice : decidir entre opciones (con consecuencias distintas, a veces todas imperfectas)
   - pick   : seleccionar varios elementos (filtrar CV, documentos para SUNAFIL…)
   - order  : priorizar
   - write  : redactar con rúbrica + modelo
   - budget : armar un plan con presupuesto
   - calc   : calcular cifras (con tolerancia y explicación)
   - review : revisar un documento y marcar las líneas con problemas
   Campos opcionales del nodo: who (persona), mood (ánimo de quien escribe), to/cc, msgs (chat),
   dlg (diálogo de llamada/reunión), docs, ask, twist (giro que aparece después), mind (razonamiento
   estructurado: ok / risk / law / info), guide ({mood, say}) para Kusi, revisable (permitir corregir). */
import { esc, clamp, money, shuffle, words } from "../core/util.js";
import { icon, chLabel } from "../brand/icons.js";
import { avatar } from "../brand/people.js";

export const LET = "ABCDEFGH";
export const METRICS = [["agenda","Agenda","Margen de tiempo que te queda"],["confianza","Confianza","Cómo te ven jefes y gerencia"],["cumplimiento","Cumplimiento","Apego a la ley y a los procedimientos"],["personas","Personas","Trato y bienestar de trabajadores y candidatos"],["calidad","Calidad","Calidad del resultado"]];
export const START = { agenda:70, confianza:60, cumplimiento:60, personas:60, calidad:60 };
export const qLabel = { buena:"Decisión sólida", aceptable:"Decisión discutible", riesgosa:"Decisión riesgosa" };
export const qChip = { buena:"ok", aceptable:"warn", riesgosa:"bad" };

const tmpStore = {};
export const tmp = id => (tmpStore[id] = tmpStore[id] || { pick:[], order:null, text:"", checks:{}, phase:"edit", budget:[], choice:null, calc:{}, flags:[] });
export const resetTmp = id => { delete tmpStore[id]; };

/* ---------- personas ---------- */
export function personFor(sim, node){
  const ppl = (sim && sim.people) || [];
  if (node.who) { const p = ppl.find(x => x.id === node.who); if (p) return p; }
  const f = (node.from || "").toLowerCase();
  return ppl.find(p => p.n && f.includes(p.n.toLowerCase().replace(/^(ing\.|lic\.|abg\.|sra\.|sr\.|mg\.|chef) /, "").split(" ")[0])) || null;
}
const nameOf = node => (node.from || "").split("·")[0].trim();
export const face = (sim, node, size = 46, mood) => {
  const p = personFor(sim, node);
  const name = p ? p.n : nameOf(node) || "Sistema";
  if (!p && (node.ch === "sistema" || node.ch === "mesa")) return `<span class="sysface" style="width:${size}px;height:${size}px;display:inline-grid;place-items:center;border-radius:50%;background:var(--paper-2);color:var(--ink-2)">${icon(node.ch === "mesa" ? "mesa" : "sistema")}</span>`;
  return avatar(name, p ? p.av || {} : {}, { size, mood: mood || node.mood || "neutral", alt: `Retrato ilustrado de ${name}${p ? ", " + p.r : ""} (personaje ficticio)` });
};

/* ---------- cabecera: la situación tal como llega ---------- */
export function head(node, ctx = {}){
  const sim = ctx.sim || null;
  const ch = node.ch || "sistema";
  const asked = ctx.asked || [];
  const docs = (node.docs || []).map((d, i) => `<div class="doc" data-folio="Fs. ${String(i + 1).padStart(2, "0")}"><h4>${esc(d.title)}</h4><div class="table-wrap">${d.html}</div></div>`).join("");
  let ask = "";
  if (node.ask) {
    const left = node.ask.max - asked.length;
    const found = asked.map(id => { const o = node.ask.opts.find(x => x.id === id); return o ? `<div class="found"><b>${esc(o.label)}:</b> ${o.info}</div>` : ""; }).join("");
    if (!ctx.answered) ask = `<div class="ask"><span class="eyebrow">${icon("question")} Antes de decidir · ${left > 0 ? `puedes averiguar ${left} cosa${left === 1 ? "" : "s"} más (cuesta tiempo)` : "ya usaste tus consultas"}</span><p class="small">${esc(node.ask.prompt)}</p><div class="row">${node.ask.opts.map(o => `<button type="button" class="btn ghost sm" data-ask="${o.id}" ${asked.includes(o.id) || left <= 0 ? "disabled" : ""}>${asked.includes(o.id) ? icon("check") : icon("eye")}${esc(o.label)}</button>`).join("")}</div>${found}</div>`;
    else if (asked.length) ask = `<div class="ask"><span class="eyebrow">Lo que averiguaste</span>${found}</div>`;
  }
  const time = node.t ? `<span class="mono xs muted">${esc(node.t)}</span>` : "";
  const chan = `<span class="chan ${ch}">${icon(ch === "whatsapp" ? "whatsapp" : ch)}${chLabel[ch] || ""}</span>`;
  const fromName = nameOf(node), fromRole = (node.from || "").split("·").slice(1).join("·").trim();
  let frame = "";
  if (ch === "whatsapp" || ch === "chat") {
    const msgs = node.msgs || [{ text: node.body || "" }];
    frame = `<div class="phone" aria-label="Conversación de ${ch === "chat" ? "chat interno" : "WhatsApp"} (ficticia)"><div class="phone-in"><div class="phone-bar">${face(sim, node, 38)}<div><b>${esc(fromName)}</b><span>${esc(fromRole || (ch === "chat" ? "Chat interno" : "en línea"))}</span></div></div><div class="chatlog">${msgs.map((m, i) => `<div class="bub ${m.me ? "me" : ""}" style="animation-delay:${i * .18}s">${m.n ? `<span class="n">${esc(m.n)}</span>` : ""}${m.text}<span class="t">${esc(m.t || node.t || "")}${m.me ? " ✓✓" : ""}</span></div>`).join("")}</div></div></div>${node.after ? `<div>${node.after}</div>` : ""}`;
  } else if (ch === "llamada") {
    const lines = node.dlg || [{ who: fromName, text: node.body || "" }];
    frame = `<div class="call"><div class="who">${face(sim, node, 52)}<div><b>${esc(fromName)}</b><br><span class="xs" style="opacity:.8">${esc(fromRole)}</span></div><span class="live" style="margin-left:auto">llamada en curso</span></div><div class="dlg">${lines.map(l => `<div class="line">${l.me ? `<span style="width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:var(--sun);color:var(--sun-ink);font-weight:800;font-family:var(--f-display)">Tú</span>` : face(sim, Object.assign({}, node, { who: l.who ? undefined : node.who, from: l.who || node.from }), 40)}<div><b>${esc(l.me ? "Tú" : (l.who || fromName))}</b><p>${l.text}</p></div></div>`).join("")}</div></div>${node.after ? `<div>${node.after}</div>` : ""}`;
  } else {
    const isMail = ch === "correo";
    const dlg = node.dlg ? `<div class="dlg">${node.dlg.map(l => `<div class="line">${l.me ? `<span style="width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:var(--sun);color:var(--sun-ink);font-weight:800;font-family:var(--f-display)">Tú</span>` : face(sim, { from: l.who || node.from, ch: node.ch, who: l.whoId }, 40, l.mood)}<div><b>${esc(l.me ? "Tú" : (l.who || fromName))}</b><p>${l.text}</p></div></div>`).join("")}</div>` : "";
    frame = `${isMail ? `<div class="mail-meta"><span>De: ${esc(node.from || "")}</span>${node.to ? `<span>Para: ${esc(node.to)}</span>` : ""}${node.cc ? `<span>CC: ${esc(node.cc)}</span>` : ""}</div>` : ""}${node.body || ""}${dlg}`;
  }
  const wrapStart = (ch === "whatsapp" || ch === "chat" || ch === "llamada")
    ? `<article class="msg"><div class="msg-head"><div class="from"><div><b>${esc(node.title)}</b>${time}</div></div>${chan}</div><div class="msg-body">`
    : `<article class="msg"><div class="msg-head"><div class="from">${face(sim, node, 46)}<div><b>${esc(fromName || "Sistema")}</b><span>${esc(fromRole)}${fromRole && node.t ? " · " : ""}</span>${time}</div></div>${chan}</div><div class="msg-body"><h2>${esc(node.title)}</h2>`;
  return `${wrapStart}${frame}${docs}${ask}</div></article>`;
}

/* ---------- interacción ---------- */
export function interaction(node, ctx = {}){
  const t = tmp(node.id);
  const done = ctx.answered;
  const type = node.type || "choice";
  if (type === "choice") {
    return `<div class="choices" role="group" aria-label="Opciones">${node.choices.map((c, i) => {
      const sel = done ? done.choiceId === c.id : t.choice === c.id;
      return `<button type="button" class="choice ${done && !sel ? "other" : ""}" data-choice="${c.id}" aria-pressed="${sel}" ${done ? "disabled" : ""}><span class="k">${LET[i]}</span><span>${esc(c.label)}</span></button>`;
    }).join("")}</div>${done ? "" : `<div class="row"><button type="button" class="btn brand" data-confirm ${t.choice ? "" : "disabled"}>Confirmar decisión ${icon("arrow")}</button><span class="small muted">No hay respuesta perfecta: elige lo que harías de verdad.</span></div>`}`;
  }
  if (type === "pick") {
    const p = node.pick, sel = done ? done.picked : t.pick, n = sel.length;
    return `<div class="stack"><p class="small"><b>${esc(p.prompt)}</b> <span class="muted">(${n} seleccionado${n === 1 ? "" : "s"}${p.max === p.min ? ` de ${p.min}` : ""})</span></p><div class="choices">${p.items.map(it => `<button type="button" class="choice" data-pick="${it.id}" aria-pressed="${sel.includes(it.id)}" ${done ? "disabled" : ""}><span class="k">${sel.includes(it.id) ? "✓" : ""}</span><span>${esc(it.label)}</span></button>`).join("")}</div>${done ? "" : `<div class="row"><button type="button" class="btn brand" data-confirm ${n >= p.min && n <= p.max ? "" : "disabled"}>Confirmar selección</button>${n > p.max ? `<span class="small" style="color:var(--bad)">Máximo ${p.max}.</span>` : ""}</div>`}</div>`;
  }
  if (type === "order") {
    const o = node.order;
    if (!t.order) t.order = shuffle(o.items.map(x => x.id), node.id);
    const ord = done ? done.order : t.order;
    return `<div class="stack"><p class="small"><b>${esc(o.prompt)}</b> <span class="muted">Usa las flechas para mover.</span></p><ol class="order-list" style="list-style:none;margin:0;padding:0">${ord.map((id, i) => { const it = o.items.find(x => x.id === id); return `<li class="order-item"><span class="pos" aria-hidden="true">${i + 1}</span><span>${esc(it.label)}</span>${done ? "" : `<span class="mv"><button type="button" data-mv="${id}" data-d="-1" aria-label="Subir: ${esc(it.label)}" ${i === 0 ? "disabled" : ""}>↑</button><button type="button" data-mv="${id}" data-d="1" aria-label="Bajar: ${esc(it.label)}" ${i === ord.length - 1 ? "disabled" : ""}>↓</button></span>`}</li>`; }).join("")}</ol>${done ? "" : `<div class="row"><button type="button" class="btn brand" data-confirm>Confirmar orden</button></div>`}</div>`;
  }
  if (type === "write") {
    const w = node.write;
    const text = done ? done.text : t.text;
    const n = words(text);
    if (!done && t.phase === "review") {
      const det = detect(w, t.text);
      return `<div class="stack"><div class="doc" data-folio="Tu borrador" style="white-space:pre-wrap">${esc(t.text)}</div><p class="small"><b>Revisión de criterios.</b> Detectamos algunos elementos por palabras clave. Si incluiste un criterio con otras palabras, márcalo tú (con honestidad: es tu aprendizaje).</p><div class="stack">${w.rubric.map(r => { const d = det[r.id]; const ok = r.neg ? !d : (d || t.checks[r.id]); return `<label class="check-item ${ok ? "ok" : (r.neg ? "bad" : "miss")}"><input type="checkbox" data-rub="${r.id}" ${ok ? "checked" : ""} ${d || r.neg ? "disabled" : ""}><span>${esc(r.label)}${r.neg && d ? " <b>· tu texto incluye un requisito o término a evitar</b>" : ""}${d && !r.neg ? " <span class='xs muted'>(detectado)</span>" : ""}</span></label>`; }).join("")}</div><div class="row"><button type="button" class="btn brand" data-confirm>Confirmar y ver un modelo</button><button type="button" class="btn ghost" data-editw>Seguir editando</button></div></div>`;
    }
    return `<div class="stack"><div class="field"><label for="w-${node.id}">${esc(w.prompt)}</label><textarea id="w-${node.id}" data-write ${done ? "readonly" : ""} placeholder="Escribe aquí…">${esc(text)}</textarea></div>${done ? "" : `<div class="row"><button type="button" class="btn brand" data-review ${n >= (w.minWords || 20) ? "" : "disabled"}>Revisar mi texto</button><span class="small muted" data-wc aria-live="polite">${n} palabras${n < (w.minWords || 20) ? ` · mínimo ${w.minWords || 20}` : ""}</span></div><details class="more"><summary>Ver criterios de una buena respuesta</summary><ul class="small" style="margin:.5rem 0 0;padding-left:1.2rem">${w.rubric.map(r => `<li>${esc(r.label)}</li>`).join("")}</ul></details>`}</div>`;
  }
  if (type === "budget") {
    const b = node.budget, sel = done ? done.picked : t.budget;
    const used = sel.reduce((s, id) => s + b.items.find(x => x.id === id).cost, 0);
    const pct = Math.min(100, used / b.limit * 100);
    return `<div class="stack"><div class="stack" style="gap:6px"><div class="row between"><b class="small">${esc(b.prompt)}</b><span class="mono small">${money(used)} de ${money(b.limit)}</span></div><div class="bar"><i style="width:${pct}%"></i></div></div><div class="choices">${b.items.map(it => { const on = sel.includes(it.id); const can = on || used + it.cost <= b.limit; return `<button type="button" class="choice" data-bud="${it.id}" aria-pressed="${on}" ${done || !can ? "disabled" : ""}><span class="k">${on ? "✓" : ""}</span><span><b>${esc(it.label)}</b><br><span class="small muted">${money(it.cost)} · ${esc(it.detail)}</span></span></button>`; }).join("")}</div>${done ? "" : `<div class="row"><button type="button" class="btn brand" data-confirm ${sel.length ? "" : "disabled"}>Confirmar plan</button><span class="small muted">Saldo: ${money(b.limit - used)}</span></div>`}</div>`;
  }
  if (type === "calc") {
    const c = node.calc, vals = done ? done.vals : t.calc;
    return `<div class="stack"><p class="small"><b>${esc(c.prompt)}</b>${c.hint ? ` <span class="muted">${esc(c.hint)}</span>` : ""}</p><div class="calc-grid">${c.fields.map(f => { const v = vals[f.id]; const ok = done ? Math.abs((+v) - f.v) <= (f.tol != null ? f.tol : .06) : null; return `<div class="calc-row ${ok === true ? "ok" : ok === false ? "bad" : ""}"><label for="c-${node.id}-${f.id}"><b>${esc(f.label)}</b>${done ? `<br><span class="small">${ok ? "Correcto." : `Valor esperado: <b class="mono">${f.unit === "%" ? f.v + "%" : f.unit === "pts" ? f.v + " puntos" : money(f.v)}</b>.`} ${f.why}</span>` : ""}</label><input type="number" step="0.01" inputmode="decimal" id="c-${node.id}-${f.id}" data-calc="${f.id}" value="${v != null ? esc(v) : ""}" ${done ? "readonly" : ""} placeholder="${f.unit === "%" ? "%" : f.unit === "pts" ? "puntos" : "S/"}"></div>`; }).join("")}</div>${done ? "" : `<div class="row"><button type="button" class="btn brand" data-confirm>Revisar mis cifras</button><span class="small muted">Redondea a dos decimales.</span></div>`}</div>`;
  }
  if (type === "review") {
    const r = node.review, flags = done ? done.flags : t.flags;
    return `<div class="stack"><p class="small"><b>${esc(r.prompt)}</b> <span class="muted">Toca cada línea que tenga un problema.</span></p><div class="doc" data-folio="${esc(r.folio || "Revisión")}"><h4>${esc(r.title)}</h4><div class="review-doc">${r.lines.map(l => { const on = flags.includes(l.id); const cls = done ? (on && l.bad ? "ok" : !on && l.bad ? "miss" : on && !l.bad ? "wrong" : "") : ""; return `<button type="button" class="rline ${cls}" data-flag="${l.id}" aria-pressed="${on}" ${done ? "disabled" : ""}><span class="flag" aria-hidden="true">${on ? "!" : ""}</span><span>${l.text}${done && (l.bad || on) ? `<br><span class="small"><b>${l.bad ? (on ? "Bien detectado." : "Se te pasó.") : "No tenía problema."}</b> ${l.why || ""}</span>` : ""}</span></button>`; }).join("")}</div></div>${done ? "" : `<div class="row"><button type="button" class="btn brand" data-confirm>Terminar revisión</button><span class="small muted">${flags.length} línea(s) marcada(s)</span></div>`}</div>`;
  }
  return "";
}

export function detect(w, text){
  const out = {}; const s = (text || "").toLowerCase();
  w.rubric.forEach(r => { out[r.id] = r.kw.every(k => new RegExp(k, "i").test(s)); });
  return out;
}

export function evaluate(node){
  const t = tmp(node.id), type = node.type || "choice";
  if (type === "choice") {
    const c = node.choices.find(x => x.id === t.choice);
    return { q:c.q, fx:c.fx || {}, sig:c.sig || {}, out:c.out, pro:c.pro || node.pro, mind:c.mind || node.mind, label:c.label, tags:c.tags || node.tags || [], set:c.set || [], choiceId:c.id, guide:c.guide, score:{ buena:100, aceptable:60, riesgosa:20 }[c.q] };
  }
  let q, detail = "", label = "", score = 0; const extra = {};
  if (type === "pick") {
    const p = node.pick, sel = t.pick.slice();
    const hits = sel.filter(x => p.ideal.includes(x)).length, wrong = sel.filter(x => (p.bad || []).includes(x)).length, extraNon = sel.filter(x => !p.ideal.includes(x)).length;
    q = (hits === p.ideal.length && wrong === 0 && extraNon === 0) ? "buena" : (wrong > 0 || hits < Math.ceil(p.ideal.length / 2)) ? "riesgosa" : "aceptable";
    if (q === "aceptable" && hits === p.ideal.length && wrong === 0) q = "buena";
    score = Math.round(clamp((hits - wrong) / p.ideal.length, 0, 1) * 100);
    label = sel.map(id => p.items.find(i => i.id === id).label).join(" · ");
    detail = `<div class="stack small">${p.items.map(it => { const s = sel.includes(it.id), ide = p.ideal.includes(it.id), bad = (p.bad || []).includes(it.id); const mark = s && ide ? ["ok","Bien elegido"] : s && bad ? ["bad","No debió elegirse"] : s ? ["warn","Elegido, no era lo ideal"] : ide ? ["warn","Faltó elegirlo"] : ["", "Bien descartado"]; return `<div><span class="chip ${mark[0]}">${mark[1]}</span> <b>${esc(it.label)}</b><br><span class="muted">${(p.explain || {})[it.id] || ""}</span></div>`; }).join("")}</div>`;
    extra.picked = sel;
  } else if (type === "order") {
    const o = node.order, ord = t.order.slice();
    const pos = id => ord.indexOf(id), ip = id => o.ideal.indexOf(id);
    const dist = o.ideal.reduce((s, id) => s + Math.abs(pos(id) - ip(id)), 0);
    const n = o.ideal.length, maxD = Math.floor(n * n / 2) || 1;
    const r = 1 - dist / maxD;
    const topN = (o.mustTop || []).length + 1;
    const mustOk = (o.mustTop || []).every(id => pos(id) < topN);
    q = !mustOk ? "riesgosa" : r >= .8 ? "buena" : r >= .55 ? "aceptable" : "riesgosa";
    score = Math.round(clamp(r, 0, 1) * 100);
    label = ord.map((id, i) => `${i + 1}. ${o.items.find(x => x.id === id).label}`).join(" | ");
    detail = `<div class="stack small"><span class="eyebrow">Orden de referencia</span>${o.ideal.map((id, i) => `<div><b>${i + 1}. ${esc(o.items.find(x => x.id === id).label)}</b> <span class="chip ${pos(id) === i ? "ok" : Math.abs(pos(id) - i) <= 1 ? "warn" : "bad"}">tú: ${pos(id) + 1}°</span><br><span class="muted">${(o.explain || {})[id] || ""}</span></div>`).join("")}</div>`;
    extra.order = ord;
  } else if (type === "write") {
    const w = node.write, det = detect(w, t.text);
    const okN = w.rubric.filter(r => r.neg ? !det[r.id] : (det[r.id] || t.checks[r.id])).length;
    const negFail = w.rubric.some(r => r.neg && det[r.id]);
    const ratio = okN / w.rubric.length;
    q = negFail ? "riesgosa" : ratio >= .8 ? "buena" : ratio >= .5 ? "aceptable" : "riesgosa";
    score = Math.round(ratio * 100);
    label = "Texto redactado (" + words(t.text) + " palabras)";
    detail = `<div class="stack small"><span class="eyebrow">Criterios</span>${w.rubric.map(r => { const ok = r.neg ? !det[r.id] : (det[r.id] || t.checks[r.id]); return `<div><span class="chip ${ok ? "ok" : "bad"}">${ok ? "Cumple" : "Falta"}</span> ${esc(r.label)}</div>`; }).join("")}<span class="eyebrow" style="margin-top:8px">Un modelo posible (no el único)</span><div class="doc" data-folio="Modelo">${w.model}</div></div>`;
    extra.text = t.text.slice(0, 2400);
  } else if (type === "budget") {
    const b = node.budget, sel = t.budget.slice();
    const mustOk = b.must.every(id => sel.includes(id));
    const val = sel.reduce((s, id) => s + (b.value[id] || 0), 0);
    const best = bestBudget(b);
    const r = val / best;
    q = !mustOk ? "riesgosa" : r >= .95 ? "buena" : r >= .75 ? "aceptable" : "riesgosa";
    score = Math.round((mustOk ? r : r * .4) * 100);
    label = sel.map(id => b.items.find(x => x.id === id).label).join(" · ");
    const bestSet = bestBudget(b, true);
    detail = `<div class="stack small"><span class="eyebrow">Combinación de mayor impacto dentro del presupuesto</span>${b.items.map(it => `<div><span class="chip ${bestSet.includes(it.id) ? "ok" : ""}">${bestSet.includes(it.id) ? "Incluida" : "Fuera"}</span> ${esc(it.label)} <span class="muted">(${money(it.cost)})</span>${b.must.includes(it.id) ? ` <span class="chip st">obligatoria</span>` : ""}${sel.includes(it.id) ? ` <span class="chip solid">tu plan</span>` : ""}</div>`).join("")}</div>`;
    extra.picked = sel;
  } else if (type === "calc") {
    const c = node.calc, vals = Object.assign({}, t.calc);
    const okN = c.fields.filter(f => Math.abs((+vals[f.id]) - f.v) <= (f.tol != null ? f.tol : .06)).length;
    const ratio = okN / c.fields.length;
    const keyMiss = (c.key || []).some(id => { const f = c.fields.find(x => x.id === id); return Math.abs((+vals[id]) - f.v) > (f.tol != null ? f.tol : .06); });
    q = ratio === 1 ? "buena" : (ratio >= .5 && !keyMiss) ? "aceptable" : "riesgosa";
    score = Math.round(ratio * 100);
    label = c.fields.map(f => `${f.label}: ${vals[f.id] || "—"}`).join(" · ");
    extra.vals = vals;
  } else if (type === "review") {
    const r = node.review, flags = t.flags.slice();
    const bad = r.lines.filter(l => l.bad).map(l => l.id);
    const hit = flags.filter(id => bad.includes(id)).length, wrong = flags.filter(id => !bad.includes(id)).length;
    const ratio = clamp((hit - wrong * .5) / bad.length, 0, 1);
    const keyMiss = (r.key || []).some(id => !flags.includes(id));
    q = ratio >= .85 && !keyMiss ? "buena" : ratio >= .5 && !keyMiss ? "aceptable" : "riesgosa";
    score = Math.round(ratio * 100);
    label = `Marcaste ${flags.length} línea(s); detectaste ${hit} de ${bad.length} problemas.`;
    extra.flags = flags;
  }
  return Object.assign({ q, fx:(node.fxBy || {})[q] || {}, sig:node.sig || {}, out:(node.outBy || {})[q] || "", pro:node.pro, mind:node.mind, label, tags:node.tags || [], set:(node.setBy || {})[q] || [], detail, score }, extra);
}

export function bestBudget(b, wantSet){
  let best = 0, bestS = [];
  const n = b.items.length;
  for (let mask = 0; mask < (1 << n); mask++) {
    let cost = 0, val = 0; const s = [];
    for (let i = 0; i < n; i++) if (mask & (1 << i)) { cost += b.items[i].cost; val += b.value[b.items[i].id] || 0; s.push(b.items[i].id); }
    if (cost > b.limit || !b.must.every(id => s.includes(id))) continue;
    if (val > best) { best = val; bestS = s; }
  }
  return wantSet ? bestS : (best || 1);
}

export function bind(root, node, ctx, onConfirm, rerender){
  const t = tmp(node.id);
  root.querySelectorAll("[data-ask]").forEach(b => b.addEventListener("click", () => ctx.onAsk && ctx.onAsk(b.dataset.ask)));
  root.querySelectorAll("[data-choice]").forEach(b => b.addEventListener("click", () => { t.choice = b.dataset.choice; rerender(); focusSame(root, `[data-choice="${b.dataset.choice}"]`); }));
  root.querySelectorAll("[data-pick]").forEach(b => b.addEventListener("click", () => { const id = b.dataset.pick; const i = t.pick.indexOf(id); if (i >= 0) t.pick.splice(i, 1); else { if (node.pick.max === 1) t.pick = []; t.pick.push(id); } rerender(); focusSame(root, `[data-pick="${id}"]`); }));
  root.querySelectorAll("[data-bud]").forEach(b => b.addEventListener("click", () => { const id = b.dataset.bud; const i = t.budget.indexOf(id); if (i >= 0) t.budget.splice(i, 1); else t.budget.push(id); rerender(); focusSame(root, `[data-bud="${id}"]`); }));
  root.querySelectorAll("[data-flag]").forEach(b => b.addEventListener("click", () => { const id = b.dataset.flag; const i = t.flags.indexOf(id); if (i >= 0) t.flags.splice(i, 1); else t.flags.push(id); rerender(); focusSame(root, `[data-flag="${id}"]`); }));
  root.querySelectorAll("[data-calc]").forEach(i => i.addEventListener("input", () => { t.calc[i.dataset.calc] = i.value; }));
  root.querySelectorAll("[data-mv]").forEach(b => b.addEventListener("click", () => { const i = t.order.indexOf(b.dataset.mv), j = i + (+b.dataset.d); if (j < 0 || j >= t.order.length) return; [t.order[i], t.order[j]] = [t.order[j], t.order[i]]; rerender(); const nb = root.querySelector(`[data-mv="${b.dataset.mv}"][data-d="${b.dataset.d}"]`); if (nb && !nb.disabled) nb.focus(); else { const ob = root.querySelector(`[data-mv="${b.dataset.mv}"]:not([disabled])`); if (ob) ob.focus(); } }));
  const ta = root.querySelector("[data-write]");
  if (ta && !ta.readOnly) ta.addEventListener("input", () => { t.text = ta.value; const n = words(ta.value); const min = node.write.minWords || 20; const wc = root.querySelector("[data-wc]"); if (wc) wc.textContent = n + " palabras" + (n < min ? " · mínimo " + min : ""); const rb = root.querySelector("[data-review]"); if (rb) rb.disabled = n < min; });
  const rv = root.querySelector("[data-review]"); if (rv) rv.addEventListener("click", () => { t.phase = "review"; rerender(); });
  const ed = root.querySelector("[data-editw]"); if (ed) ed.addEventListener("click", () => { t.phase = "edit"; rerender(); });
  root.querySelectorAll("[data-rub]").forEach(c => c.addEventListener("change", () => { t.checks[c.dataset.rub] = c.checked; }));
  const cf = root.querySelector("[data-confirm]");
  if (cf) cf.addEventListener("click", () => {
    if ((node.type === "calc") && node.calc.fields.some(f => t.calc[f.id] === undefined || t.calc[f.id] === "")) { cf.insertAdjacentHTML("afterend", `<span class="small" style="color:var(--bad)" role="alert">Completa todas las cifras.</span>`); return; }
    onConfirm(evaluate(node));
  });
}
function focusSame(root, sel){ const el = root.querySelector(sel); if (el && !el.disabled) el.focus(); }

/* ---------- razonamiento profesional ---------- */
const MENTOR = avatar("La profesional", { g: "f", s: 3, h: "moño", hc: 0, c: 0, gl: true, age: "adulto" }, { size: 50, alt: "Retrato ilustrado de una profesional de RR.HH. con experiencia (personaje ficticio)" });
/* «Cómo lo piensa y razona una profesional»: el razonamiento se muestra como pasos numerados sobre
   una línea, una brújula de criterios que marca cuáles aplican y una tarjeta ilustrada por criterio. */
const LENS = [
  ["ok", "Buena práctica", "check", "assets/3d/kusi/kusi-feliz.webp"],
  ["risk", "Riesgo", "warn", "assets/3d/kusi/kusi-preocupado.webp"],
  ["law", "Obligación o norma", "scale", "assets/3d/scenes/balanza-sq.webp"],
  ["info", "Falta información", "question", "assets/3d/kusi/kusi-curioso.webp"]
];
function steps(pro){
  const t = String(pro).trim();
  if (/<(ul|ol|li|table)/i.test(t)) return `<div class="mind-pro">${t}</div>`;
  const parts = t.split(/(?<=[.!?»])\s+(?=[A-ZÁÉÍÓÚÑ¿¡«(])/).map(x => x.trim()).filter(Boolean);
  if (parts.length < 2) return `<p class="mind-quote">${t}</p>`;
  const merged = [];
  parts.forEach(x => { if (merged.length < 5) merged.push(x); else merged[merged.length - 1] += " " + x; });
  return `<ol class="mind-steps">${merged.map((x, i) => `<li><span class="n" aria-hidden="true">${i + 1}</span><span>${x}</span></li>`).join("")}</ol>`;
}
function compass(m){
  const on = k => !!(m && m[k]);
  const pos = [["ok", 60, 16], ["risk", 104, 60], ["law", 60, 104], ["info", 16, 60]];
  return `<svg class="mind-compass" viewBox="0 0 120 120" role="img" aria-label="Criterios que aplican: ${LENS.filter(([k]) => on(k)).map(l => l[1].toLowerCase()).join(", ") || "ninguno"}">
    <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" stroke-opacity=".18"/><circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" stroke-opacity=".12" stroke-dasharray="2 4"/>
    <path d="M60 22 L66 60 L60 98 L54 60 Z" fill="var(--brand)" opacity=".85"/><circle cx="60" cy="60" r="4" fill="var(--brass)"/>
    ${pos.map(([k, x, y]) => `<g class="mc-${k} ${on(k) ? "on" : ""}"><circle cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y + 4}" text-anchor="middle">${({ ok: "✓", risk: "!", law: "§", info: "?" })[k]}</text></g>`).join("")}
  </svg>`;
}
function fmtList(t){
  const s = String(t);
  const m = s.split(/\s*(?:^|\s)(\d)\)\s+/);
  if (m.length < 5 || /<(ul|ol|li)/i.test(s)) return s;
  const head = m[0].trim(), items = [];
  for (let i = 1; i < m.length; i += 2) items.push((m[i + 1] || "").trim().replace(/;$/, ""));
  return `${head ? `<span>${head}</span>` : ""}<ol class="mind-mini">${items.map(x => `<li>${x}</li>`).join("")}</ol>`;
}
export function mind(pro, m, opts = {}){
  if (!pro && !m) return "";
  const cards = m ? LENS.filter(([k]) => m[k]).map(([k, n, ic, img]) => `<div class="mind-card ${k}"><img src="${img}" alt="" aria-hidden="true" loading="lazy" decoding="async" width="72" height="72"><div><span class="k">${icon(ic)}${n}</span><div class="mind-txt">${fmtList(m[k])}</div></div></div>`).join("") : "";
  return `<section class="mind"><div class="mind-head">${MENTOR}<div><span class="eyebrow">Cómo lo piensa y razona una profesional</span><h4>${opts.title || "El criterio detrás de la decisión"}</h4></div>${opts.listen ? `<span style="margin-left:auto" data-narr-slot="${opts.listen}"></span>` : ""}</div>
  <div class="mind-body">${m ? `<div class="mind-side">${compass(m)}<span class="xs muted">Brújula de criterios</span></div>` : ""}<div class="mind-main">${pro ? steps(pro) : ""}${cards ? `<div class="mind-cards">${cards}</div>` : ""}</div></div></section>`;
}

export function outcome(res, opts = {}){
  const fx = Object.entries(res.fx || {}).filter(([, v]) => v).map(([k, v]) => { const m = METRICS.find(x => x[0] === k); return `<span class="chip ${v > 0 ? "ok" : "bad"}">${m ? m[1] : k} ${v > 0 ? "+" : ""}${v}</span>`; }).join("");
  return `<section class="outcome" aria-live="polite" tabindex="-1"><div class="outcome-head q-${res.q}">${icon(res.q === "buena" ? "check" : res.q === "riesgosa" ? "warn" : "info")}<span>${qLabel[res.q]}${res.revised ? " · corregida" : ""}</span></div><div class="outcome-body">
    ${res.out ? `<div class="stack" style="gap:4px"><span class="eyebrow">Lo que pasó</span><p>${res.out}</p></div>` : ""}
    ${fx && !opts.nofx ? `<div class="fx" aria-label="Efecto en tus indicadores">${fx}</div>` : ""}
    ${res.detail ? `<details class="more" ${opts.open ? "open" : ""}><summary>Ver el detalle de tu respuesta</summary><div style="margin-top:10px">${res.detail}</div></details>` : ""}
    ${mind(res.pro, res.mind, { listen: opts.listen })}
    ${opts.twist ? `<div class="twist" role="note"><span class="eyebrow">${icon("sparkle")} Mientras tanto… ${esc(opts.twist.t || "")}</span><p>${opts.twist.body}</p></div>` : ""}
    ${opts.next ? `<div class="row">${opts.next}</div>` : ""}</div></section>`;
}
