/* Cómo se arma una boleta. Cifras calculadas con el motor de planillas del proyecto. */
import { boleta, asignacionFamiliar, RMV, ONP_RATE, ESSALUD_RATE } from "../../../src/engine/payroll.js";

const B = boleta({ basico: 1500, hijos: true, he: [2, 2, 2] });
const f = (n, d = 2) => Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
const base = 1500 + B.af, sobre = B.vh * 1.25;
const pct = r => Math.round(r * 100) + "%";

export default {
  id: "boleta", title: "Cómo se arma una boleta", duration: 46, poster: 9.5, data: B,
  scenes: [
    { t0: 0, t1: 5, layout: "title", eyebrow: "Planillas · régimen general", title: "Cómo se arma|<em>una boleta</em>", lead: "Un ejemplo verificado, paso a paso. Datos ficticios.", mood: "curioso",
      sub: "Cómo se arma una boleta de pago: un ejemplo con datos ficticios, paso a paso." },
    { t0: 5, t1: 12, layout: "calc", eyebrow: "Paso 1 · Ingresos", title: "Se suman|los ingresos", lead: `Todo lo remunerativo del mes. RMV de referencia: S/ ${f(RMV, 0)}.`,
      rows: [{ l: "Remuneración básica", v: f(1500) }, { l: "Asignación familiar (10% de la RMV)", v: f(asignacionFamiliar()) }, { l: "Horas extras (6 horas)", v: f(B.he) }],
      result: { l: "Total de ingresos", v: "S/ " + f(B.bruto) },
      sub: `Primero se suman los ingresos: básico S/ 1,500, asignación familiar S/ ${f(B.af, 0)} y horas extras S/ ${f(B.he)}. Total: S/ ${f(B.bruto)}.` },
    { t0: 12, t1: 19, layout: "calc", eyebrow: "Paso 2 · Valor hora", title: "El valor hora|de la remuneración ordinaria", lead: "(básico + asignación familiar) ÷ 30 ÷ 8",
      rows: [{ l: "Básico + asignación familiar", v: f(base) }, { l: "÷ 30 días", v: f(base / 30) }, { l: "÷ 8 horas", v: f(B.vh, 4) }],
      result: { l: "Valor hora", v: "S/ " + f(B.vh, 4) },
      sub: `Las horas extras se pagan sobre el valor hora: (básico + asignación familiar) ÷ 30 ÷ 8 = S/ ${f(B.vh, 4)}.` },
    { t0: 19, t1: 26, layout: "calc", eyebrow: "Paso 3 · Sobretasa", title: "Horas extras|con sobretasa", lead: "Las dos primeras horas diarias: 25%. Las siguientes: 35%.",
      rows: [{ l: "Valor hora", v: f(B.vh, 4) }, { l: "× 1.25 (sobretasa de 25%)", v: f(sobre, 4) }, { l: "× 6 horas (2 por día, 3 días)", v: f(B.he) }],
      result: { l: "Horas extras", v: "S/ " + f(B.he) },
      sub: `Seis horas extras en tres días, dos por día: todas llevan 25%. Resultado: S/ ${f(B.he)}.` },
    { t0: 26, t1: 33, layout: "calc", eyebrow: "Paso 4 · Descuentos", title: "Del total,|lo que se descuenta", lead: "El aporte pensionario es del trabajador.",
      rows: [{ l: "Total de ingresos", v: f(B.bruto) }, { l: `ONP (${pct(ONP_RATE)})`, v: "− " + f(B.onp), neg: true }],
      result: { l: "Neto a pagar", v: "S/ " + f(B.neto) },
      sub: `Del total se descuenta la ONP, ${pct(ONP_RATE)}: S/ ${f(B.onp)}. El neto que recibe el trabajador es S/ ${f(B.neto)}.` },
    { t0: 33, t1: 38.5, layout: "big", eyebrow: `Aporte del empleador · EsSalud ${pct(ESSALUD_RATE)}`, value: f(B.essalud), prefix: "S/", unit: "a cargo del empleador", caption: "No sale del bolsillo del trabajador: no se descuenta del neto.",
      sub: `Aparte, el empleador aporta a EsSalud el ${pct(ESSALUD_RATE)}: S/ ${f(B.essalud)}. No se descuenta al trabajador.` },
    { t0: 38.5, t1: 42, layout: "kusi", eyebrow: "Un consejo", mood: "pensando", say: `La asignación familiar es el 10% de la RMV.`, mood2: "feliz", say2: "Si la RMV sube, revisa la base del cálculo.",
      sub: "La asignación familiar es el 10% de la RMV. Si la RMV sube, revisa la base del cálculo." },
    { t0: 42, t1: 46, layout: "close", note: true, mood: "feliz",
      sub: "Practica en el Taller. Vive el trabajo antes de elegirlo. Todo caso es una simulación." }
  ]
};
