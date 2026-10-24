import test from "node:test";
import assert from "node:assert/strict";
import { QUIZ, QUIZ_THEMES, QUIZ_TYPES, gradeItem, norm, parseNum, quizPool } from "../../src/content/quiz.js";
import { C } from "../../src/content/index.js";
import { READY, ART3D } from "../../src/brand/art.js";
import { KUSI_MOODS } from "../../src/brand/kusi-model.js";

const THEMES = QUIZ_THEMES.map(t => t.id).filter(t => t !== "todo");

test("el banco del quiz tiene un esquema válido", () => {
  assert.ok(QUIZ.length >= 60, `solo ${QUIZ.length} preguntas`);
  const ids = new Set();
  for (const it of QUIZ) {
    assert.ok(it.id && !ids.has(it.id), "id repetido o vacío: " + it.id); ids.add(it.id);
    assert.ok(QUIZ_TYPES[it.t], `${it.id}: tipo ${it.t}`);
    assert.ok(THEMES.includes(it.th), `${it.id}: tema ${it.th}`);
    assert.ok(it.q && it.q.length > 10, `${it.id}: sin enunciado`);
    assert.ok(it.why && it.why.length > 20, `${it.id}: sin explicación`);
    if (it.c) assert.ok(C.concepts.some(c => c.id === it.c), `${it.id}: concepto ${it.c} no existe`);
    if (it.t === "mcq" || it.t === "paraphrase") {
      assert.equal(it.o.length, 4, `${it.id}: 4 opciones`);
      assert.ok(Number.isInteger(it.a) && it.a >= 0 && it.a < it.o.length, `${it.id}: respuesta`);
      assert.equal(new Set(it.o).size, it.o.length, `${it.id}: opciones repetidas`);
    }
    if (it.t === "paraphrase") assert.ok(["simple", "term"].includes(it.dir), `${it.id}: dir`);
    if (it.t === "image") {
      assert.ok(it.opts.length >= 3 && it.opts.length <= 4, `${it.id}: 3–4 imágenes`);
      assert.ok(Number.isInteger(it.a) && it.a < it.opts.length, `${it.id}: respuesta`);
      for (const o of it.opts) {
        if (o.k === "art") { assert.ok(READY.has(ART3D[o.n]), `${it.id}: imagen ${o.n} no está renderizada`); assert.ok(o.cap, `${it.id}: sin leyenda`); }
        else { assert.equal(o.k, "kusi"); assert.ok(KUSI_MOODS.includes(o.n), `${it.id}: ánimo ${o.n}`); }
      }
      assert.equal(new Set(it.opts.map(o => o.n)).size, it.opts.length, `${it.id}: imágenes repetidas`);
    }
    if (it.t === "cloze") { assert.equal(it.q.split("___").length, 2, `${it.id}: un solo hueco`); assert.ok(it.ans.length >= 1); }
    if (it.t === "truefalse") assert.equal(typeof it.a, "boolean", it.id);
    if (it.t === "order") { assert.ok(it.items.length >= 3); assert.equal(new Set(it.items).size, it.items.length, it.id); }
    if (it.t === "match") { assert.ok(it.pairs.length >= 3); assert.equal(new Set(it.pairs.map(p => p[1])).size, it.pairs.length, it.id); }
    if (it.t === "number") { assert.equal(typeof it.v, "number"); assert.ok(it.tol > 0); }
  }
});

test("cada tipo y cada tema tienen suficientes preguntas", () => {
  for (const t of Object.keys(QUIZ_TYPES)) assert.ok(QUIZ.filter(q => q.t === t).length >= 5, `pocas de tipo ${t}`);
  for (const th of THEMES) assert.ok(quizPool(th).length >= 10, `pocas del tema ${th}`);
  assert.equal(quizPool("todo").length, QUIZ.length);
});

test("la respuesta correcta obtiene 1 y una incorrecta menos de 1", () => {
  for (const it of QUIZ) {
    let good, bad;
    if (["mcq", "image", "paraphrase"].includes(it.t)) { good = it.a; bad = (it.a + 1) % (it.o || it.opts).length; }
    else if (it.t === "truefalse") { good = it.a; bad = !it.a; }
    else if (it.t === "cloze") { good = it.ans[0].toUpperCase(); bad = "zzz"; }
    else if (it.t === "number") { good = String(it.v); bad = String(it.v + 1000); }
    else if (it.t === "order") { good = it.items.slice(); bad = it.items.slice().reverse(); }
    else if (it.t === "match") { good = Object.fromEntries(it.pairs.map((p, i) => [i, p[1]])); bad = {}; }
    assert.equal(gradeItem(it, good), 1, `${it.id}: la correcta no puntúa`);
    assert.ok(gradeItem(it, bad) < 1, `${it.id}: la incorrecta puntúa`);
  }
});

test("normalización de textos y números", () => {
  assert.equal(norm("  Comité "), norm("comite"));
  assert.equal(norm("T-Registro"), norm("t registro"));
  assert.equal(parseNum("S/ 1,230"), 1230);
  assert.equal(parseNum("6,76"), 6.76);
  assert.equal(parseNum("2,180.00"), 2180);
  assert.equal(parseNum("30 %"), 30);
  assert.ok(Number.isNaN(parseNum("")));
});

test("los cálculos del quiz coinciden con el motor de planillas", async () => {
  const P = await import("../../src/engine/payroll.js");
  const by = id => QUIZ.find(q => q.id === id);
  assert.equal(by("ad-num-af").v, P.asignacionFamiliar());
  assert.ok(Math.abs(by("ad-num-vh").v - P.valorHora({ basico: 1500, hijos: true })) <= by("ad-num-vh").tol);
  assert.equal(by("ad-num-he2").v, P.horasExtras({ basico: 1800, dias: [2] }).total);
  assert.equal(by("ad-num-he3").v, P.horasExtras({ basico: 2400, dias: [3] }).total);
  assert.equal(by("ad-num-feriado").v, P.pagoFeriado({ basico: 1230 }).adicional);
  assert.equal(by("ad-num-onp").v, P.r2(2000 * P.ONP_RATE));
});
