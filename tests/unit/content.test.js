import test from "node:test";
import assert from "node:assert/strict";
import { C, SIMS } from "../../src/content/index.js";
import { evaluate, tmp, resetTmp, bestBudget } from "../../src/engine/nodes.js";
import { migrate, blank } from "../../src/core/store.js";

const TYPES = ["choice", "pick", "order", "write", "budget", "calc", "review"];

test("cada simulación tiene un esquema completo y coherente", () => {
  const ids = new Set();
  for (const s of SIMS) {
    assert.ok(!ids.has(s.id), "id repetido " + s.id); ids.add(s.id);
    for (const k of ["title", "hook", "org", "you", "goal", "scene", "kind", "sector", "orgType"]) assert.ok(s[k], `${s.id} sin ${k}`);
    assert.ok(/ficti/i.test(s.org), `${s.id}: la organización debe declararse ficticia`);
    s.areas.forEach(a => assert.ok(C.areas.some(x => x.id === a), `${s.id}: área ${a}`));
    const nids = new Set();
    for (const n of s.nodes) {
      assert.ok(!nids.has(n.id), `${s.id}: nodo repetido ${n.id}`); nids.add(n.id);
      assert.ok(TYPES.includes(n.type), `${s.id}/${n.id}: tipo ${n.type}`);
      if (n.type === "choice") { assert.ok(n.choices.length >= 1); n.choices.forEach(c => assert.ok(["buena", "aceptable", "riesgosa"].includes(c.q), `${s.id}/${n.id}/${c.id}`)); }
      if (n.type === "pick") n.pick.ideal.concat(n.pick.bad || []).forEach(id => assert.ok(n.pick.items.some(i => i.id === id), `${s.id}/${n.id}: ${id}`));
      if (n.type === "order") { assert.equal(n.order.ideal.length, n.order.items.length, `${s.id}/${n.id}`); n.order.ideal.forEach(id => assert.ok(n.order.items.some(i => i.id === id))); }
      if (n.type === "calc") n.calc.fields.forEach(f => assert.equal(typeof f.v, "number"));
      if (n.type === "review") assert.ok(n.review.lines.some(l => l.bad), `${s.id}/${n.id}: sin líneas con problema`);
      if (n.who) assert.ok(s.people.some(p => p.id === n.who), `${s.id}/${n.id}: persona ${n.who}`);
      (n.choices || []).forEach(c => (c.tags || []).forEach(t => assert.ok(C.tasks.some(x => x.id === t), `${s.id}/${n.id}: tarea ${t}`)));
    }
    s.nodes.filter(n => n.if).forEach(n => assert.ok(s.nodes.some(m => (m.choices || []).some(c => (c.set || []).includes(n.if)) || Object.values(m.setBy || {}).flat().includes(n.if)), `${s.id}/${n.id}: bandera ${n.if} nunca se activa`));
  }
});

test("las respuestas ideales obtienen la mejor calificación", () => {
  for (const s of SIMS) for (const n of s.nodes) {
    resetTmp(n.id); const t = tmp(n.id);
    if (n.type === "pick") t.pick = n.pick.ideal.slice();
    else if (n.type === "order") t.order = n.order.ideal.slice();
    else if (n.type === "calc") n.calc.fields.forEach(f => { t.calc[f.id] = String(f.v); });
    else if (n.type === "review") t.flags = n.review.lines.filter(l => l.bad).map(l => l.id);
    else if (n.type === "budget") t.budget = bestBudget(n.budget, true);
    else continue;
    assert.equal(evaluate(n).q, "buena", `${s.id}/${n.id}`);
    resetTmp(n.id);
  }
});

test("enlaces entre contenidos", () => {
  C.roles.filter(r => r.sim).forEach(r => assert.ok(SIMS.some(s => s.id === r.sim), r.id));
  C.concepts.forEach(c => { c.sims.forEach(s => assert.ok(SIMS.some(x => x.id === s), `${c.id} → ${s}`)); c.tools.forEach(t => assert.ok(C.tools.some(x => x.id === t), `${c.id} → ${t}`)); assert.ok(c.check.o[c.check.a]); });
  C.areas.forEach(a => a.links.forEach(l => assert.ok(C.areas.some(x => x.id === l), `${a.id} → ${l}`)));
  Object.values(C.journey.famSim).forEach(id => assert.ok(SIMS.some(s => s.id === id)));
});

test("retos con respuestas válidas", () => {
  C.challenges.levels.flatMap(l => l.sets).forEach(set => set.items.forEach(it => {
    assert.ok(it.why, set.id);
    if (it.t === "mcq" || it.t === "doc") assert.ok(it.o[it.a] !== undefined, set.id);
    if (it.t === "myth") assert.equal(typeof it.a, "boolean");
    if (it.t === "calc") assert.equal(typeof it.v, "number");
  }));
});

test("16 feriados nacionales en 2026", () => { assert.equal(C.holidays.list.length, 16); });

test("migración desde Legajo Vivo v1 conserva el progreso", () => {
  const old = { v: 1, at: 5, declared: { nomina: "atrae" }, runs: { seleccion: [{ log: [] }] }, active: {}, refl: [{ kind: "sim", ref: "seleccion" }], tools: { boleta: { best: 80 } }, concepts: {}, dil: {}, prefs: { lens: "tech" } };
  const m = migrate(old);
  assert.equal(m.v, 2); assert.equal(m.declared.nomina, "atrae"); assert.equal(m.tools.boleta.best, 80); assert.equal(m.prefs.lens, "tech"); assert.equal(m.profile.name, "");
  assert.deepEqual(Object.keys(migrate(blank())).sort(), Object.keys(blank()).sort());
});
