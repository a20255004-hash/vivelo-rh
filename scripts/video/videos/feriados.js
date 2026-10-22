/* Trabajar un feriado: cuánto se paga. Cifras del motor de planillas (pagoFeriado). */
import { pagoFeriado, RMV } from "../../../src/engine/payroll.js";
import { holidays } from "../../../src/content/holidays.js";

const P = pagoFeriado({ basico: RMV });
const f = (n, d = 2) => Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
const N = holidays.list.length;

export default {
  id: "feriados", title: "Trabajar un feriado: cuánto se paga", duration: 36, poster: 23.5,
  scenes: [
    { t0: 0, t1: 5, layout: "title", eyebrow: `Feriados ${holidays.year} · régimen privado`, title: "Trabajar un feriado:|<em>cuánto se paga</em>", lead: "D.Leg. 713, con un ejemplo en cifras.", mood: "curioso",
      sub: "Trabajar un feriado: cuánto se paga en el régimen privado." },
    { t0: 5, t1: 10.5, layout: "big", eyebrow: `Calendario ${holidays.year}`, value: N, unit: "feriados nacionales", caption: "Si no lo trabajas, el día se paga igual: ya está incluido en tu sueldo mensual.",
      sub: `En ${holidays.year} hay ${N} feriados nacionales. Si no lo trabajas, el día se paga igual: ya está en tu remuneración mensual.` },
    { t0: 10.5, t1: 17.5, layout: "compare", eyebrow: "Si te toca trabajarlo", title: "¿Te dan otro día|de descanso?",
      a: { h: "Con descanso sustitutorio", items: ["Trabajas el feriado", "Recibes otro día libre", "No hay sobretasa"], tone: "neutral" },
      b: { h: "Sin descanso sustitutorio", items: ["Se paga el día trabajado", "Más una sobretasa de 100%", "Debe verse en la boleta"], tone: "brand" },
      sub: "Si te dan otro día de descanso, no hay sobretasa. Sin descanso sustitutorio, se paga el día trabajado más 100% adicional." },
    { t0: 17.5, t1: 25, layout: "calc", eyebrow: "Ejemplo", title: "Una remuneración|igual a la RMV", lead: `S/ ${f(RMV, 0)} al mes, sin asignación familiar.`,
      rows: [{ l: "Valor del día (1,230 ÷ 30)", v: f(P.dia) }, { l: "Día trabajado", v: f(P.dia) }, { l: "Sobretasa de 100%", v: f(P.dia) }],
      result: { l: "Se suma a la planilla", v: "S/ " + f(P.adicional) },
      sub: `Ejemplo: con la RMV de S/ ${f(RMV, 0)}, el día vale S/ ${f(P.dia, 0)}. Por trabajar el feriado se suman S/ ${f(P.adicional, 0)}: el día trabajado más la sobretasa.` },
    { t0: 25, t1: 31.5, layout: "big", eyebrow: "¿Por qué se dice «triple»?", value: f(P.triple), prefix: "S/", unit: "por ese día, en total", caption: `S/ ${f(P.dia, 0)} ya incluidos en el sueldo + S/ ${f(P.adicional, 0)} adicionales. En planilla se suman S/ ${f(P.adicional, 0)}, no S/ ${f(P.triple, 0)}.`, mood: "pensando",
      sub: `Por eso se dice «triple»: S/ ${f(P.dia, 0)} ya incluidos en el sueldo más S/ ${f(P.adicional, 0)} adicionales, S/ ${f(P.triple, 0)} por ese día.` },
    { t0: 31.5, t1: 36, layout: "close", note: true, mood: "feliz",
      sub: "Vive la jornada de feriados. Todo caso es una simulación." }
  ]
};
