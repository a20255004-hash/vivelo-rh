import test from "node:test";
import assert from "node:assert/strict";
import * as PY from "../../src/engine/payroll.js";
import { tools } from "../../src/content/tools.js";

test("RMV y asignación familiar vigentes (D.S. 015-2026-TR)", () => {
  assert.equal(PY.RMV, 1230);
  assert.equal(PY.asignacionFamiliar(), 123);
});

test("boleta corregida: horas extras con asignación familiar en la base", () => {
  const b = PY.boleta({ basico: 1500, hijos: true, he: [2, 2, 2] });
  assert.equal(b.af, 123);
  assert.equal(b.he, 50.72);          // antes (solo básico) daba 46.88
  assert.equal(b.bruto, 1673.72);
  assert.equal(b.onp, 217.58);
  assert.equal(b.neto, 1456.14);
  assert.equal(b.essalud, 150.63);
});

test("el ejercicio del Taller coincide con el motor de cálculo", () => {
  const t = tools.find(x => x.id === "boleta");
  const b = PY.boleta({ basico: t.data.basico, hijos: t.data.hijos, he: [2, 2, 2] });
  const map = { af: b.af, he: b.he, bruto: b.bruto, onp: b.onp, neto: b.neto, ess: b.essalud };
  t.fields.forEach(f => assert.equal(f.v, map[f.id], f.n));
});

test("sobretasas de 25% y 35%", () => {
  const r = PY.horasExtras({ basico: 1800, dias: [3] });
  assert.equal(r.h25, 2); assert.equal(r.h35, 1);
  assert.equal(r.total, PY.r2(7.5 * 1.25 * 2 + 7.5 * 1.35));
  assert.equal(PY.horasExtras({ basico: 1800, dias: Array(12).fill(2) }).total, 225); // caso de Relaciones laborales
});

test("feriado trabajado sin descanso sustitutorio (D.Leg. 713)", () => {
  const f = PY.pagoFeriado({ basico: 1600, hijos: true });
  assert.equal(f.dia, 57.43); assert.equal(f.adicional, 114.87); assert.equal(f.triple, 172.3);
});

test("gratificación con asignación familiar y bonificación 9%", () => {
  const g = PY.gratificacion({ basico: 1350, hijos: true });
  assert.equal(g.grati, 1473); assert.equal(g.bonif, 132.57);
});

test("indicadores", () => {
  assert.equal(PY.rotacion({ salidas: 18, ini: 80, fin: 100 }), 20);
  assert.equal(PY.ausentismo({ perdidos: 33, programados: 660 }), 5);
  assert.equal(PY.compaRatio({ sueldo: 3550, min: 3200, max: 3900 }), 1);
});
