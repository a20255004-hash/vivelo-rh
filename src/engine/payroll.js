/* Cálculos laborales del régimen privado general (Perú), usados por el Taller, las simulaciones,
   la Academia y las pruebas automáticas. Una sola fuente de verdad para no repetir fórmulas.

   Criterios (verificados al 19 oct. 2026; ver Fuentes):
   - RMV: S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR). Antes: S/ 1,130.
   - Asignación familiar: 10% de la RMV (Ley 25129).
   - Sobretiempo: sobretasa mínima de 25% en las dos primeras horas diarias y 35% en las
     siguientes (D.S. 007-2002-TR, art. 10). El valor hora se obtiene de la remuneración ordinaria
     (remuneración básica + asignación familiar y demás conceptos remunerativos regulares)
     ÷ 30 ÷ horas de la jornada diaria. ⚠ La versión original calculaba el valor hora solo con el
     básico; se corrigió para incluir la asignación familiar que el propio caso indica.
   - Trabajo en feriado sin descanso sustitutorio: remuneración del día + sobretasa de 100%
     (D.Leg. 713, art. 9). En la práctica, "triple": el día ya pagado en el sueldo + el día
     trabajado + 100%.
   - ONP: 13% de la remuneración asegurable. EsSalud: 9% a cargo del empleador (Ley 26790),
     con base mínima de la RMV para jornada completa.
   - Gratificación (Ley 27735): una remuneración computable por semestre completo + bonificación
     extraordinaria de 9% (Ley 30334) si el trabajador está afiliado a EsSalud. */

export const RMV = 1230;
export const RMV_PREVIA = 1130;
export const ONP_RATE = .13;
export const ESSALUD_RATE = .09;

export const r2 = n => Math.round((Number(n) + Number.EPSILON) * 100) / 100;

export const asignacionFamiliar = (rmv = RMV) => r2(rmv * .10);

export function remuneracionOrdinaria({ basico, hijos = false, rmv = RMV, otros = 0 }){
  return r2(basico + (hijos ? asignacionFamiliar(rmv) : 0) + otros);
}

export function valorHora({ basico, hijos = false, rmv = RMV, otros = 0, horasDia = 8 }){
  return remuneracionOrdinaria({ basico, hijos, rmv, otros }) / 30 / horasDia;
}

/* dias: arreglo con horas extra por día, p. ej. [2,2,3]. Devuelve detalle y total. */
export function horasExtras({ basico, hijos = false, rmv = RMV, otros = 0, horasDia = 8, dias = [] }){
  const vh = valorHora({ basico, hijos, rmv, otros, horasDia });
  let h25 = 0, h35 = 0;
  dias.forEach(h => { h25 += Math.min(2, h); h35 += Math.max(0, h - 2); });
  const total = r2(vh * 1.25 * h25 + vh * 1.35 * h35);
  return { vh, h25, h35, total };
}

export function pagoFeriado({ basico, hijos = false, rmv = RMV, otros = 0 }){
  const dia = remuneracionOrdinaria({ basico, hijos, rmv, otros }) / 30;
  // Adicional que se suma a la planilla del mes (el día de feriado ya está dentro del sueldo mensual).
  return { dia: r2(dia), adicional: r2(dia * 2), triple: r2(dia * 3) };
}

export function boleta({ basico, hijos = false, he = [], feriados = 0, onp = true, rmv = RMV }){
  const af = hijos ? asignacionFamiliar(rmv) : 0;
  const hx = horasExtras({ basico, hijos, rmv, dias: he });
  const fer = feriados ? r2(pagoFeriado({ basico, hijos, rmv }).adicional * feriados) : 0;
  const bruto = r2(basico + af + hx.total + fer);
  const pens = onp ? r2(bruto * ONP_RATE) : 0;
  const neto = r2(bruto - pens);
  const essalud = r2(Math.max(bruto, rmv) * ESSALUD_RATE);
  return { af, he: hx.total, vh: hx.vh, feriado: fer, bruto, onp: pens, neto, essalud };
}

export function gratificacion({ basico, hijos = false, rmv = RMV, mesesCompletos = 6, essalud = true }){
  const comp = remuneracionOrdinaria({ basico, hijos, rmv });
  const g = r2(comp * mesesCompletos / 6);
  return { computable: comp, grati: g, bonif: essalud ? r2(g * ESSALUD_RATE) : 0 };
}

export const rotacion = ({ salidas, ini, fin }) => r2(salidas / ((ini + fin) / 2) * 100);
export const ausentismo = ({ perdidos, programados }) => r2(perdidos / programados * 100);
export const compaRatio = ({ sueldo, min, max }) => r2(sueldo / ((min + max) / 2));
