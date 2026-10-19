/* Feriados nacionales del Perú 2026 (16 fechas) y reglas que RR.HH. aplica.
   Verificado el 19 de octubre de 2026 con los calendarios publicados (ver Fuentes).
   Los días "no laborables" que el Ejecutivo decreta cada año son distintos de los feriados:
   rigen para el sector público, son compensables y en el sector privado se aplican por acuerdo. */
export const holidays = {
  year: 2026,
  list: [
    { d: "2026-01-01", n: "Año Nuevo" },
    { d: "2026-04-02", n: "Jueves Santo" },
    { d: "2026-04-03", n: "Viernes Santo" },
    { d: "2026-05-01", n: "Día del Trabajo" },
    { d: "2026-06-07", n: "Batalla de Arica y Día de la Bandera" },
    { d: "2026-06-29", n: "San Pedro y San Pablo" },
    { d: "2026-07-23", n: "Día de la Fuerza Aérea del Perú" },
    { d: "2026-07-28", n: "Fiestas Patrias" },
    { d: "2026-07-29", n: "Fiestas Patrias" },
    { d: "2026-08-06", n: "Batalla de Junín" },
    { d: "2026-08-30", n: "Santa Rosa de Lima" },
    { d: "2026-10-08", n: "Combate de Angamos" },
    { d: "2026-11-01", n: "Día de Todos los Santos" },
    { d: "2026-12-08", n: "Inmaculada Concepción" },
    { d: "2026-12-09", n: "Batalla de Ayacucho" },
    { d: "2026-12-25", n: "Navidad" }
  ],
  next: [{ d: "2027-01-01", n: "Año Nuevo" }],
  rules: [
    { t: "Feriado no trabajado", d: "Se paga como un día normal: ya está incluido en la remuneración mensual (D.Leg. 713, art. 8)." },
    { t: "Feriado trabajado sin descanso sustitutorio", d: "Se paga la remuneración del día más una sobretasa de 100% (D.Leg. 713, art. 9). En la práctica, el trabajador recibe el «triple»: el día ya incluido en su sueldo, el día trabajado y el 100% adicional." },
    { t: "Feriado trabajado con descanso sustitutorio", d: "Si se otorga otro día de descanso (sustitutorio), no corresponde la sobretasa: se paga como un día normal." },
    { t: "Feriado que cae en día de descanso semanal", d: "No genera un pago adicional por sí mismo (p. ej., el 1 de noviembre de 2026 es domingo). Si la persona trabaja ese día, se aplican las reglas de trabajo en feriado." },
    { t: "Días no laborables", d: "Los decreta el Ejecutivo principalmente para el sector público; son compensables. En el sector privado, el empleador y los trabajadores acuerdan si se acogen y cómo se compensan las horas." },
    { t: "Régimen y convenio", d: "Regímenes especiales y convenios colectivos pueden mejorar estas reglas. Antes de calcular, verifica el régimen del trabajador y el convenio vigente." }
  ]
};
