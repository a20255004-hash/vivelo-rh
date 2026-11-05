// Analista de Administración de Personal · Capítulo 6 · «La liquidación» · Semana 2, lunes.
// Hilo de las dos semanas: Ángel, el supervisor de la cuadrilla 12, renuncia. Su liquidación tiene que estar en 48 horas.
// Normas citadas:
// - D.S. 003-97-TR (TUO del D.Leg. 728), art. 18: renuncia con 30 días de preaviso; el trabajador puede pedir la exoneración
//   y, si el empleador no la rechaza por escrito al tercer día, se entiende aceptada.
//   https://lpderecho.pe/empleador-debe-indicar-escrito-no-exonerara-plazo-preaviso-renuncia-trabajador-cas-lab-14019-2018-lambayeque/
//   https://lpderecho.pe/jurisprudencia-articulo-18-tuo-decreto-legislativo-728-renuncia-retiro-voluntario/
// - D.S. 001-97-TR (TUO de la Ley de CTS): la CTS trunca se paga dentro de las 48 horas de producido el cese.
// - Ley 27735 (gratificaciones): gratificación trunca proporcional a los meses completos del semestre; Ley 30334: bonificación extraordinaria del 9 %.
// - D.Leg. 713 (descansos remunerados): vacaciones pendientes y truncas al cese.
// - D.S. 001-98-TR (boletas); certificado de trabajo al cese (D.S. 001-96-TR). Ley 25129 (asignación familiar). RMV S/ 1,230 (D.S. 015-2026-TR).

export const CAP = {
  n: 6, titulo: 'La liquidación', dia: 'Semana 2, lunes', foto: 'assets/foto/reunion-jefa.webp',
  lugar: 'Agrícola Valle Verde · Oficina de Planillas, fundo 1',
  inicio: '06:30', fin: '19:00', cierreHora: '18:40',
  apertura: 'Lunes de la segunda semana. Antes de que prendas la computadora, encuentras un sobre bajo la puerta del contenedor: la carta de renuncia de Ángel, el supervisor de la cuadrilla 12.', boton: 'Abrir el sobre',
  kusi: 'Una renuncia es un cálculo y también una despedida. ¡Las dos cosas bien!',
  lead: 'Escuchaste a Ángel antes de calcular, recomendaste qué hacer con su preaviso, armaste su liquidación concepto por concepto, ordenaste el cese y decidiste si se puede retener un pago por un celular.',
  reflexion: '¿Qué le debe una empresa a alguien que se va, además de su liquidación?',
  siguiente: { n: 7, titulo: 'SUNAFIL toca la puerta', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'liq', p: 'Liquidación de Ángel Paucar', j: 'Mónica · Planillas', d: 0, e: 'Cese el miércoles · 48 horas' },
  { id: 'preaviso', p: 'Preaviso de renuncia', j: 'Ricardo · Operaciones', d: 0, e: 'Pide exoneración' },
  { id: 'reintegro', p: 'Reintegros de herramientas', j: 'Mónica · Planillas', d: 3, e: 'Abono de hoy' },
  { id: 'cuadrilla12', p: 'Supervisión de la cuadrilla 12', j: 'Raúl · Fundo 3', d: 0, e: 'Sin reemplazo' },
  { id: 'baja', p: 'Baja en T-Registro', j: 'Planillas', d: 0, e: 'Después del cese' },
];

export const FUTURO = {
  angel_escuchado: ['Ángel te contó por qué se iba y quién podía reemplazarlo.', 'Lo verás en el capítulo 7.'],
  exonerado_plan: ['Se exoneró el preaviso de Ángel con dos días de traspaso a Fidel.', 'Fidel queda a cargo de la 12 en el capítulo 7.'],
  preaviso_forzado: ['Se le negó la exoneración a Ángel y debe quedarse 30 días.', 'Ángel trabajará molesto en el capítulo 7.'],
  preaviso_silencio: ['Nadie respondió por escrito al pedido de Ángel.', 'Su exoneración quedó aceptada por silencio: Ricardo se enterará en el capítulo 7.'],
  liquidacion_ok: ['La liquidación de Ángel salió completa y a tiempo.', 'Capítulo 9, cuando registres su baja.'],
  liquidacion_error: ['La liquidación de Ángel salió con conceptos de más o de menos.', 'Ángel volverá a preguntar en el capítulo 9.'],
  pago_sin_retener: ['Pagaste la liquidación en plazo y gestionaste la devolución del celular aparte.', 'Capítulo 7.'],
  pago_retenido: ['Retuviste la liquidación de Ángel hasta que devuelva el celular.', 'La inspectora lo preguntará en el capítulo 7.'],
  fidel_supervisor: ['Fidel Choque, el delegado de la 12, asumirá la supervisión de su cuadrilla.', 'Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  angel: { n: 'Ángel Paucar', sub: 'Supervisor · cuadrilla 12', c: '#92400E' },
  fidel: { n: 'Fidel Choque', sub: 'Delegado · cuadrilla 12', c: '#7A3E9D' },
  ricardo: { n: 'Ricardo Benavides', sub: 'Gerente de Operaciones', c: '#334155' },
  wendy: { n: 'Wendy Paredes', sub: 'Practicante de Planillas', c: '#5B6FB5' },
};

export const WSP = [
  { chat: 'grupo', t: '06:40', de: 'Mónica', txt: 'Buenos días. Hoy sale el reintegro de las tijeras a las 87 ✅ Y el pago corrido de la quincena, para quienes no cobraron el viernes.', si: 'reintegro_todos' },
  { chat: 'grupo', t: '06:40', de: 'Mónica', txt: 'Buenos días. Hoy por fin abona la quincena. Ventanilla abierta desde las 7, que vendrá gente.', si: 'banco_tarde' },
  { chat: 'grupo', t: '06:42', de: 'Wendy', txt: 'Ya llegué. Encontré un sobre con nombre de Ángel debajo de la puerta 📩', si: 'wendy_protegida' },
  { chat: 'grupo', t: '06:42', de: 'Wendy', txt: 'Hay un sobre bajo la puerta. No lo abrí. Prefiero no tocar nada que no me toque.', si: 'wendy_senalada' },
  { chat: 'raul', t: '07:30', de: 'Ing. Raúl', txt: '¿Ángel renunció? En pleno pico. Necesito supervisor en la 12 para mañana a las 6.' },
  { chat: 'fidel', t: '09:15', de: 'Fidel', txt: 'Señorita, me dicen que el ingeniero Ángel se va. La cuadrilla está preocupada por quién nos va a ver.' },
  { chat: 'yolanda', t: '12:20', de: 'Yolanda', txt: 'Señorita, ya me llegó lo de la tijera. Las de la 5 le mandan saludos 🍇', si: 'yolanda_confia' },
  { chat: 'angel', t: '17:50', de: 'Ángel', txt: 'Gracias por explicarme cada cosa. En 15 años nadie me había enseñado mi propia boleta.', si: 'liquidacion_ok' },
];

export const CORREOS = [
  { t: '06:35', de: 'Ángel Paucar Quispe', para: 'Planillas Valle Verde; Ing. Raúl Cárdenas', asunto: 'Carta de renuncia', html: '<p>Por medio de la presente renuncio a mi puesto de supervisor de campo. Solicito <b>la exoneración del plazo de preaviso de 30 días</b>, siendo mi último día el miércoles.</p><p>Agradezco los 15 años en Valle Verde.<br>Ángel Paucar Quispe · DNI 21******</p>' },
  { t: '08:05', de: 'Ricardo Benavides · Gerente de Operaciones', para: 'Mónica Uribe; Planillas', asunto: 'RE: Carta de renuncia', html: '<p>No lo exoneren. Estamos en pico de cosecha. Que cumpla sus 30 días o que se atenga.</p><p>R. Benavides</p>' },
  { t: '15:10', de: 'Caja Municipal de Ica · Depósitos CTS', para: 'Planillas Valle Verde', asunto: 'Retiro de CTS · Ángel Paucar', html: '<p>Para que el titular pueda disponer de su depósito CTS, necesitamos la <b>comunicación de cese del empleador</b>. Sin ella, no podemos liberar el saldo.</p>' },
];

export const QUIZ = [
  { q: 'Un trabajador renuncia y pide que lo exoneren del preaviso de 30 días. La empresa no responde. ¿Qué pasa?', ops: ['Debe quedarse 30 días igual', 'Si el empleador no la rechaza por escrito al tercer día, la exoneración se entiende aceptada', 'La renuncia es nula', 'Se le descuentan los 30 días'], ok: 1, por: 'Según el art. 18 del TUO del D.Leg. 728, el silencio del empleador al tercer día equivale a aceptar la exoneración.' },
  { q: '¿En qué plazo se paga la CTS trunca al cese?', ops: ['Al mes siguiente', 'Dentro de las 48 horas de producido el cese', 'En noviembre o mayo', 'Cuando el trabajador lo pida'], ok: 1, por: 'El TUO de la Ley de CTS fija 48 horas desde el cese. En Valle Verde, toda la liquidación se paga en ese plazo.' },
  { q: 'Ángel trabajó completos julio, agosto, septiembre y octubre, y renuncia a mitad de noviembre. ¿Cómo se calcula su gratificación trunca de diciembre?', ops: ['No le corresponde', 'Proporcional a los 4 meses completos del semestre, más la bonificación extraordinaria del 9 %', 'Completa', 'Por días, incluidos los de noviembre'], ok: 1, por: 'La Ley 27735 da gratificación trunca por meses completos del semestre; la Ley 30334 suma la bonificación extraordinaria del 9 %.' },
  { q: 'Un trabajador que renuncia, ¿cobra indemnización por despido arbitrario?', ops: ['Sí, siempre', 'No: la indemnización es para el despido arbitrario, no para la renuncia', 'Solo si tiene más de 10 años', 'Solo en régimen agrario'], ok: 1, por: 'La renuncia es una decisión del trabajador: no genera indemnización.' },
  { q: 'El trabajador que se va no devolvió el celular de la empresa. ¿Puedes retener su liquidación hasta que lo devuelva?', ops: ['Sí, es una garantía', 'No: los beneficios se pagan en plazo; la devolución se gestiona por separado', 'Sí, si el gerente lo autoriza', 'Solo la CTS'], ok: 1, por: 'Retener beneficios sociales como presión no está permitido. La devolución del bien se pide con cargo y por las vías que correspondan.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:10', ch: 'presencial', who: null, titulo: 'La carta de Ángel', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Contenedor de Planillas', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => `<p>Ángel Paucar llega a las siete, recién bañado, con la camisa planchada que nunca le habías visto en el campo. Tiene 44 años, es de Nasca y lleva 15 campañas en Valle Verde.</p><p>${F.has('he_presuncion') || F.has('he_evidencia') ? '«Usted no me creyó el tareo, y tenía razón. Pero no es por eso.» ' : F.has('he_tareo') ? '«Usted me defendió con el tareo. Le agradezco. Pero igual me voy.» ' : ''}Se sienta frente a ti con la gorra en las rodillas. <mark class="clave">Antes de calcular nada</mark>, tienes tiempo para dos preguntas.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas. ¿Qué le preguntas a Ángel?',
    opts: [
      { id: 'porque', label: '¿Por qué se va?', info: '«Mi mamá tiene diabetes y vive sola en Nasca. Una agrícola de Palpa me ofrece lo mismo y estoy a 40 minutos de ella. Aquí salgo de noche y no la veo en semanas.»' },
      { id: 'quien', label: '¿Quién podría quedarse con la cuadrilla 12?', info: '«Fidel. No tiene título, pero la gente lo respeta y sabe leer el campo mejor que yo. Si le enseño dos días, se queda bien.»' },
      { id: 'vac', label: '¿Tiene vacaciones pendientes?', info: '«Las del año pasado no las tomé: hubo campaña larga. Y de este año, ni hablar.»' },
      { id: 'bien', label: '¿Qué le diría a la empresa antes de irse?', info: '«Que los supervisores también somos planilla. Nos piden controlar, pero nadie nos explica nada de horas ni de boletas. Por eso uno «arregla» el Excel: por miedo a que nos culpen.»' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: picks.includes('porque') ? 3 : 1, calidad: picks.includes('vac') ? 4 : 0, confianza: picks.includes('quien') ? 3 : 1 },
      flags: ['angel_escuchado', ...(picks.includes('quien') ? ['fidel_supervisor'] : [])],
      cartera: { cuadrilla12: picks.includes('quien') ? 'Fidel, con dos días de traspaso' : 'Sin reemplazo' },
      out: picks.includes('vac') ? 'Anotas: vacaciones del periodo anterior sin gozar. Si no preguntabas, la liquidación salía incompleta.' : picks.includes('quien') ? 'Ya tienes un nombre para Raúl, y lo dio quien mejor conoce la cuadrilla.' : 'Ángel se queda un rato más callado. Te deja la carta y se va al fundo.',
      kusi: ['curioso', picks.includes('vac') ? 'Esa pregunta valía plata. ¡Bien!' : 'Escuchar antes de calcular. Así se empieza.'],
    }),
    rules: [[LEY, 'D.Leg. 713: al cese se pagan las vacaciones no gozadas y las truncas.'], [BP, 'En una renuncia, pregunta por lo que no está en el sistema: vacaciones pendientes, bienes a cargo y quién reemplaza.']],
    mirada: {
      ve: 'Una renuncia llega como un trámite, pero detrás hay una historia: una madre enferma, un cansancio, una crítica que nadie quiso oír. Escuchar dos minutos antes de calcular evita errores en la liquidación y te da información que la empresa necesita.',
      visual: { tipo: 'balanza', a: { t: 'Lo que dice la carta', items: ['Renuncia', 'Último día: miércoles'] }, b: { t: 'Lo que dice Ángel', items: ['Su mamá en Nasca', 'Vacaciones sin gozar', 'Fidel puede reemplazarlo', 'Los supervisores necesitan formación'] } },
    },
  },
  {
    id: 'g2', t: '08:20', ch: 'correo', who: null, titulo: 'Treinta días o dos', banner: 'assets/foto2/tension.webp', show: ['cumplimiento', 'personas', 'confianza'],
    body: () => `<p>Ricardo respondió a las 8:05: «No lo exoneren. Estamos en pico de cosecha». Raúl te escribió que necesita supervisor mañana a las 6. Mónica te pide una recomendación antes de las 9.</p><p>Sabes que si nadie rechaza la exoneración por escrito, <mark class="clave">al tercer día se entiende aceptada</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recomendar exonerar el preaviso con un plan: lunes y martes Ángel enseña a Fidel en la 12, y el miércoles entrega todo con cargo.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 3, confianza: 2 }, rel: { raul: 1, monica: 1 }, flags: ['exonerado_plan', 'fidel_supervisor'], cartera: { preaviso: 'Exonerado con traspaso de dos días', cuadrilla12: 'Fidel a cargo desde el miércoles' },
          responde: 'Mónica: recomiendo exonerar el preaviso de Ángel con dos días de traspaso a Fidel Choque, que conoce la cuadrilla. Retenerlo 30 días a la fuerza en pleno pico nos da un supervisor desmotivado; soltarlo sin plan nos deja sin nadie. Le respondemos hoy por escrito.',
          out: 'Mónica lo lleva a Ricardo. Él refunfuña: «¿Un cosechador de supervisor?». Raúl lo interrumpe: «Fidel sabe más que muchos ingenieros». Se aprueba.',
          pro: { ok: 'Conviertes una salida en un traspaso y respondes por escrito, sin dejar que el silencio decida.', risk: 'Fidel asume en dos días un puesto que Ángel aprendió en años. Tendrás que acompañarlo.', info: 'Si Fidel asume más responsabilidad, revisa su categoría y su remuneración.' },
          kusi: ['feliz', '¡Se va bien y la 12 no queda sola!'] } },
      { id: 'b', label: 'Hacerle caso a Ricardo y rechazar por escrito la exoneración: la empresa tiene derecho a los 30 días y hoy los necesita.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -4, confianza: 1 }, rel: { raul: 0 }, flags: ['preaviso_forzado'], cartera: { preaviso: 'Exoneración rechazada · 30 días' },
          responde: 'Mónica: por instrucción de Ricardo, respondemos hoy por escrito que no se exonera el preaviso. Ángel deberá trabajar los 30 días.',
          out: 'La carta sale a las 10:00. Ángel la lee en el fundo, la dobla y no dice nada. Esa tarde llama a Palpa para pedirles un mes más.',
          pro: { ok: 'Es un derecho del empleador y lo ejerces bien: por escrito y a tiempo.', risk: 'Un supervisor obligado a quedarse en pleno pico, con su madre enferma lejos, rara vez da su mejor mes.' },
          kusi: ['pensando', 'Legal… pero ¿cómo va a ser ese mes?'] } },
      { id: 'c', label: 'No responder nada hoy: Ricardo y Raúl no se ponen de acuerdo, y Mónica decidirá cuando hable con los dos.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, confianza: -3 }, flags: ['preaviso_silencio'], cartera: { preaviso: 'Sin respuesta escrita' },
          responde: 'Mónica: sobre la renuncia de Ángel, Ricardo y Raúl tienen posiciones distintas. Mejor lo vemos cuando hables con ellos.',
          out: 'Nadie responde. Al tercer día, la exoneración queda aceptada por silencio. Ricardo creerá que se rechazó.',
          pro: { ok: 'Evitas meterte en una discusión entre jefes.', risk: 'En una renuncia, el silencio también decide: si no se rechaza por escrito al tercer día, la exoneración se entiende aceptada.' },
          kusi: ['preocupado', 'El silencio también responde…'] } },
    ],
    rules: [[LEY, 'D.S. 003-97-TR, art. 18: la renuncia se comunica con 30 días de anticipación; si el empleador no rechaza por escrito la exoneración al tercer día, se entiende aceptada.']],
    mirada: {
      ve: 'El preaviso protege a la empresa, pero usarlo para retener a alguien que ya se fue en la cabeza tiene un costo. Lo profesional es decidir a tiempo y por escrito, y pensar en quién se queda con el trabajo.',
      visual: { tipo: 'linea', titulo: 'Los plazos de una renuncia', hitos: [['Lunes', 'Carta y pedido de exoneración'], ['Hasta el tercer día', 'Aceptar o rechazar por escrito'], ['Miércoles', 'Último día de Ángel'], ['Viernes', 'Vence el plazo de 48 horas']] },
      normas: [{ ley: 'D.S. 003-97-TR, art. 18', dice: 'El trabajador que renuncia da aviso con 30 días; puede pedir la exoneración, y si el empleador no la rechaza por escrito dentro del tercer día, se entiende aceptada.', practica: 'En una renuncia, no decidir es decidir.' }],
    },
  },
  {
    id: 'g3', t: '10:15', ch: 'documento', who: null, titulo: 'La hoja de liquidación', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Ángel está en el régimen general: entró hace 15 años como empleado de campo, con sueldo mensual de S/ 2,800 y asignación familiar. Su CTS de mayo a octubre se depositó la semana pasada.</p><p>Wendy te pasa la plantilla de liquidación de la campaña anterior. ${F.has('angel_escuchado') ? 'Tú tienes tus notas de la conversación de las siete. ' : ''}<mark class="clave">Cada concepto que sobre o falte es plata de una familia</mark>.</p>`,
    type: 'builder', prompt: 'Elige los conceptos de cada bloque de la liquidación de Ángel.', boton: 'Guardar la liquidación',
    bloques: [
      { id: 'van', t: 'Beneficios que se pagan', n: 3, ops: [
        { id: 'cts', t: 'CTS trunca: del 1 de noviembre al día del cese.', ok: true, por: 'Lo anterior ya está depositado en la Caja.' },
        { id: 'grati', t: 'Gratificación trunca de diciembre por julio, agosto, septiembre y octubre, más la bonificación extraordinaria del 9 %.', ok: true, por: 'Meses completos del semestre (Ley 27735 y Ley 30334).' },
        { id: 'vac', t: 'Vacaciones no gozadas del periodo anterior y vacaciones truncas del periodo en curso.', ok: true, por: 'Ángel no tomó las del año pasado (D.Leg. 713).' },
        { id: 'indem', t: 'Indemnización por despido arbitrario.', ok: false, por: 'Ángel renunció: no hay despido.' },
        { id: 'grati_c', t: 'Gratificación completa de diciembre.', ok: false, por: 'Solo corresponde la proporción de meses completos.' },
      ] },
      { id: 'rem', t: 'Remuneración del mes', n: 1, ops: [
        { id: 'dias', t: 'Remuneración y asignación familiar por los días trabajados de noviembre.', ok: true },
        { id: 'mes', t: 'Remuneración de todo noviembre, para compensar la salida.', ok: false, por: 'Generoso, pero no es un concepto de liquidación: nadie lo aprobó.' },
      ] },
      { id: 'desc', t: 'Descuentos', n: 1, ops: [
        { id: 'afp', t: 'Aporte a su AFP sobre la remuneración y los conceptos que lo generan.', ok: true },
        { id: 'pre', t: 'Descuento de los 30 días de preaviso no trabajados.', ok: false, por: 'Si la exoneración se aceptó, no hay nada que descontar. Y aunque no se aceptara, ese descuento no es automático.' },
        { id: 'cel', t: 'Descuento del celular de la empresa, que no ha devuelto.', ok: false, por: 'Sin su autorización, no se descuenta. La devolución se gestiona con cargo.' },
      ] },
      { id: 'docs', t: 'Lo que se le entrega', n: 1, ops: [
        { id: 'cert', t: 'Hoja de liquidación detallada, certificado de trabajo y comunicación de cese para retirar su CTS.', ok: true },
        { id: 'solo', t: 'El depósito en su cuenta, sin papeles: así es más rápido.', ok: false, por: 'Sin la comunicación de cese, la Caja no le libera la CTS. Y sin hoja detallada, no puede verificar nada.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .66 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 1 : -4, cumplimiento: q === 'riesgosa' ? -4 : 3 },
        flags: [q === 'buena' ? 'liquidacion_ok' : 'liquidacion_error'],
        cartera: { liq: q === 'buena' ? 'Liquidación completa · lista para firma' : 'Liquidación con observaciones de Mónica' },
        out: q === 'buena' ? 'Mónica revisa la hoja con su lápiz rojo y no marca nada. «Las vacaciones del año pasado casi siempre se olvidan. Tú no las olvidaste.»' : 'Mónica marca dos conceptos en rojo. «Esto lo firma Ángel y se lo lleva a Palpa. Si está mal, vuelve. O va a SUNAFIL.»',
        pro: { ok: 'Una liquidación es una lista de derechos, cada uno con su norma y su periodo. Si sabes por qué va cada línea, sabes explicarla.', risk: 'Sumar «para compensar» o descontar «porque debe algo» convierte un cálculo en una negociación que nadie autorizó.', info: 'Guarda junto a la hoja el cálculo de cada concepto: fechas, meses completos y base.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Liquidación limpia! Ángel se va con todo lo suyo.' : 'Revisa qué sobra y qué falta.'],
      };
    },
    rules: [[LEY, 'D.S. 001-97-TR: la CTS trunca se paga dentro de las 48 horas del cese.'], [LEY, 'Ley 27735 y Ley 30334: gratificación trunca por meses completos del semestre, más bonificación extraordinaria del 9 %.'], [LEY, 'D.Leg. 713: vacaciones no gozadas y truncas al cese.']],
    mirada: {
      ve: 'La liquidación es el último documento que la empresa le da a alguien. Si sale completa, clara y a tiempo, la persona se va con la sensación de que le pagaron lo justo. Si sale mal, vuelve: a la ventanilla o a SUNAFIL.',
      visual: { tipo: 'flujo', titulo: 'La liquidación de Ángel', pasos: ['Remuneración de noviembre', 'CTS trunca', 'Gratificación trunca + 9 %', 'Vacaciones pendientes y truncas', 'Aportes', 'Neto y documentos'] },
      normas: [
        { ley: 'D.S. 001-97-TR, TUO de la Ley de CTS', dice: 'Al cese, la CTS trunca se paga directamente al trabajador dentro de las 48 horas.', practica: 'En Valle Verde, toda la liquidación se paga en ese plazo, con la hoja detallada.' },
        { ley: 'Ley 27735 y D.Leg. 713', dice: 'Corresponden la gratificación trunca por meses completos del semestre y las vacaciones no gozadas y truncas.', practica: 'Las vacaciones del año anterior son las que más se olvidan.' },
      ],
    },
  },
  {
    id: 'g4', t: '12:40', ch: 'sistema', who: null, titulo: 'El orden del cese', banner: 'assets/esc/escalera.webp', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: () => `<p>Almuerzas un ceviche de la señora del carrito, en el escritorio. Mónica te deja un pósit: «Que el miércoles Ángel no tenga que volver a pedir nada».</p><p>Hay que ordenar <mark class="clave">todo lo que pasa entre una carta y una baja</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del cese de Ángel.', boton: 'Guardar el orden',
    items: [
      { id: 'resp', t: 'Responder por escrito la carta de renuncia y el pedido de exoneración', por: 'Antes del tercer día.' },
      { id: 'entrega', t: 'Entrega de cargo: cuadrilla, celular, credencial y herramientas, con acta firmada', por: 'Lo que se devuelve se firma; no se descuenta.' },
      { id: 'calc', t: 'Cálculo y revisión de la liquidación', por: 'Con la fecha de cese confirmada.' },
      { id: 'pago', t: 'Pago de la liquidación dentro de las 48 horas del cese', por: 'Por depósito, con hoja detallada.' },
      { id: 'docs', t: 'Entrega del certificado de trabajo y la comunicación de cese para la CTS', por: 'Sin ella, la Caja no libera su CTS.' },
      { id: 'baja', t: 'Baja en el T-Registro con el motivo de cese correcto', por: 'Renuncia, no «fin de contrato».' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'riesgosa' ? -2 : 2 },
        cartera: { baja: q === 'riesgosa' ? 'Pendiente, sin orden' : 'Programada después del cese' },
        out: q === 'buena' ? 'Pegas el orden en la carpeta de Ángel. Wendy lo copia: «Lo voy a usar con todos los ceses de la campaña».' : 'Mónica mueve dos pasos: «Si pagas antes de la entrega de cargo, ya no hay acta de nada».',
        pro: { ok: 'Un cese ordenado evita que la persona vuelva tres veces y que la empresa olvide algo que después le reclaman.', risk: 'Dar de baja con el motivo equivocado le complica a la persona trámites futuros.', info: 'Esta lista sirve para los cientos de ceses del final de campaña.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Un cese sin vueltas!' : 'Casi. La entrega de cargo va antes del pago.'],
      };
    },
    rules: [[LEY, 'D.S. 001-97-TR: pago de la CTS trunca dentro de las 48 horas del cese.'], [BP, 'Todo bien de la empresa se devuelve con acta firmada, no con descuentos.']],
    mirada: {
      ve: 'El cese es el ciclo de la planilla al revés: la baja, el último pago, los documentos. Si lo haces en orden, la persona puede cobrar su CTS en la Caja el mismo jueves.',
      visual: { tipo: 'flujo', titulo: 'De la carta a la baja', pasos: ['Respuesta escrita', 'Entrega de cargo', 'Cálculo', 'Pago en 48 horas', 'Certificado y comunicación de cese', 'Baja en T-Registro'] },
    },
  },
  {
    id: 'g5', t: '15:20', ch: 'llamada', who: null, titulo: 'La CTS de la Caja', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Planillas', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>La Caja Municipal de Ica escribió: sin la comunicación de cese del empleador, Ángel no puede retirar su CTS. Y él la necesita para la mudanza a Nasca.</p><p>Haces cuatro llamadas antes de que cierre la agencia, <mark class="clave">a las 18:00</mark>.</p>`,
    type: 'calls',
    calls: [['Caja Municipal de Ica · Plataforma', 'Contesta una asesora amable', 'Mándenos la comunicación de cese firmada por el representante, con fecha de cese. Por correo nos sirve, el original después.'], ['Ángel Paucar', 'Contesta desde el fundo, con viento', 'Señorita, mi mamá tiene control el viernes en Nasca. Si saco la CTS el jueves, llego.'], ['Mónica Uribe', 'Contesta en reunión, en voz baja', 'Yo firmo como representante, pero solo con la fecha de cese confirmada. ¿Está decidida la exoneración?'], ['Legal · Dra. Salcedo', 'Buzón de voz: está en Lima']],
    prompt: 'La Caja acepta la comunicación por correo y Mónica firma si la fecha de cese está confirmada. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Preparar la comunicación de cese con la fecha del miércoles, que Mónica la firme hoy y enviarla a la Caja el miércoles a primera hora, cuando Ángel ya haya cesado.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 3, tiempo: -1 }, rel: { monica: 1 },
          envia: ['angel', 'Ángel, su comunicación de cese queda firmada hoy y la enviamos a la Caja el miércoles a primera hora. El jueves podrá retirar su CTS. Su liquidación se deposita dentro de las 48 horas del cese.'],
          out: 'Ángel responde con un audio corto: «Gracias, señorita. Llego al control de mi mamá».',
          pro: { ok: 'Respetas la fecha real de cese y le ganas un día a la burocracia.', info: 'Haz una plantilla de comunicación de cese: al final de campaña la usarás cientos de veces.' },
          kusi: ['celebra', '¡El jueves en la Caja, el viernes en Nasca!'] } },
      { id: 'b', label: 'Mandar hoy mismo a la Caja la comunicación de cese, con fecha de hoy, para que Ángel pueda retirar su CTS mañana.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: 2 },
          out: 'La Caja libera la CTS. Pero en los papeles, Ángel cesó el lunes y sigue trabajando el martes y el miércoles. Dos días que nadie sabrá cómo registrar.',
          pro: { ok: 'Ángel tiene su CTS antes.', risk: 'Una fecha de cese falsa en un documento oficial genera un problema mayor que el que resuelve.' },
          kusi: ['sorpresa', '¿Y los dos días que todavía trabaja?'] } },
    ],
    rules: [[LEY, 'La CTS depositada se libera al trabajador cuando el empleador comunica el cese al depositario.'], [BP, 'La fecha de cese es una sola: la real.']],
    mirada: {
      ve: 'Para quien se va, la liquidación no termina cuando la empresa deposita: termina cuando puede usar su plata. Pensar en la Caja, en el certificado y en la fecha del control de su mamá es parte del trabajo.',
      visual: { tipo: 'linea', titulo: 'La CTS de Ángel', hitos: [['Lunes', 'Comunicación firmada'], ['Miércoles', 'Cese y envío a la Caja'], ['Jueves', 'Retira su CTS'], ['Viernes', 'Control de su mamá en Nasca']] },
    },
  },
  {
    id: 'g6', t: '16:40', ch: 'whatsapp', who: null, titulo: 'Explicarle su liquidación', banner: 'assets/foto2/acuerdo-manos.webp', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Ángel te escribe: «Señorita, ¿me puede explicar cuánto voy a recibir? En 15 años nunca entendí mi boleta, y no quiero firmar algo que no entiendo».</p><p>Tiene derecho a entenderlo <mark class="clave">antes de firmar</mark>.</p>`,
    type: 'compose', enviaA: 'angel', para: 'Para: Ángel Paucar · Supervisor, cuadrilla 12', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu explicación eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué recibe', ops: [
        { id: 'q1', t: 'Ángel, su liquidación tiene cinco partes: sus días de noviembre, su CTS de noviembre, la parte de su gratificación de diciembre por julio a octubre, sus vacaciones del año pasado y las de este año.', ok: true, por: 'Concepto por concepto, en palabras simples.' },
        { id: 'q2', t: 'Ángel, le corresponden sus beneficios sociales de ley.', ok: false, por: 'Eso es lo que él ya no entendía.' },
      ] },
      { id: 'monto', t: 'El monto', ops: [
        { id: 'm1', t: 'Le adjunto la hoja con el monto de cada parte y cómo se calculó.', ok: true, por: 'Puede verificarlo con calma o mostrárselo a alguien.' },
        { id: 'm2', t: 'Más o menos son unos S/ 9,000.', ok: false, por: 'Un «más o menos» se vuelve un reclamo si el número final es distinto.' },
      ] },
      { id: 'cuando', t: 'Cuándo', ops: [
        { id: 'c1', t: 'Se deposita dentro de las 48 horas de su cese, y el jueves puede retirar su CTS de la Caja.', ok: true },
        { id: 'c2', t: 'Se le paga cuando termine el trámite.', ok: false, por: 'Sin fecha, la espera se hace larga.' },
      ] },
      { id: 'firma', t: 'La firma', ops: [
        { id: 'f1', t: 'Revísela con calma. Si algo no le cuadra, me pregunta antes de firmar. Firmar no le quita el derecho a reclamar después.', ok: true, por: 'Le das tiempo y le dices la verdad sobre la firma.' },
        { id: 'f2', t: 'Fírmela el miércoles para cerrar todo rápido.', ok: null, por: 'Práctico, pero no le das espacio para entender.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'm1', 'c1', 'f1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, calidad: sel.monto === 'm2' ? -3 : 2, confianza: q === 'buena' ? 3 : 0 },
        out: q === 'buena' ? 'Ángel lee la hoja en la camioneta y te manda una sola pregunta: «¿Las vacaciones del año pasado van completas?». Sí. «Entonces firmo.»' : 'Ángel responde «ok». El miércoles firma sin preguntar nada, y no sabes si entendió.',
        pro: { ok: 'Explicar una liquidación es devolverle a la persona el control sobre su plata.', risk: 'Dar montos aproximados por WhatsApp crea expectativas que después hay que desmentir.', info: 'Si alguien tiene dificultad para leer, ofrécele explicarlo en persona y con un familiar.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Quince años después, entendió su boleta.' : '¿Ángel entendió de verdad?'],
      };
    },
    rules: [[BP, 'Explica cada concepto de la liquidación antes de pedir la firma.']],
    mirada: {
      ve: 'Mucha gente firma su liquidación sin entenderla, por vergüenza de preguntar. Una buena analista no espera la pregunta: explica concepto por concepto y deja claro que firmar no es renunciar a reclamar.',
      visual: { tipo: 'mensaje', titulo: 'Una liquidación en cinco partes', txt: 'Ángel, su liquidación tiene cinco partes: sus días de noviembre, su CTS de noviembre, la parte de su gratificación de diciembre (julio a octubre, más el 9 %), sus vacaciones del año pasado y las de este año. Le adjunto la hoja. Se deposita dentro de las 48 horas de su cese.' },
    },
  },
  {
    id: 'g7', t: '18:05', ch: 'presencial', who: 'raul', titulo: 'El celular de la empresa', banner: 'assets/foto/supervisa.webp', lugar: 'Puerta del contenedor', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Raúl llega cuando ya estás apagando la computadora. «Ángel tiene el celular de la empresa con todos los contactos de los caporales. Dice que lo devuelve el miércoles, pero no le creo. <mark class="clave">No le paguen nada hasta que lo entregue</mark>.»</p><p>Afuera, el último bus enciende el motor.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pagar la liquidación en plazo y pedir la devolución del celular en la entrega de cargo del miércoles, con acta firmada; si no lo devuelve, que Legal lo gestione aparte.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 5, confianza: -1 }, rel: { raul: -1 }, flags: ['pago_sin_retener'], cartera: { liq: 'Pago en 48 horas · celular en acta de entrega' },
          out: 'Raúl resopla: «Usted siempre con su ley». Pero el miércoles, a las 15:00, Ángel deja el celular sobre tu escritorio, cargado y con los contactos exportados para Fidel.',
          pro: { ok: 'Separas dos cosas: los beneficios de Ángel, que tienen plazo legal, y el bien de la empresa, que tiene su propio procedimiento.', risk: 'Si Ángel no devolvía el celular, la empresa tenía que reclamarlo por otra vía.', info: 'Incluye los bienes a cargo en el acta de entrega desde el primer aviso de renuncia.' },
          kusi: ['animo', 'Cada cosa por su camino. ¡Bien!'] } },
      { id: 'b', label: 'Retener la liquidación hasta que devuelva el celular: es un bien de la empresa y es la única forma de asegurar que lo entregue.',
        res: { q: 'riesgosa', fx: { etica: -3, cumplimiento: -6 }, rel: { raul: 1 }, flags: ['pago_retenido'], cartera: { liq: 'Retenida hasta que devuelva el celular' },
          out: 'Raúl asiente satisfecho. El jueves, Ángel no puede ir a la Caja. El viernes, en vez de llevar a su mamá a su control, va a la oficina de SUNAFIL de Ica.',
          pro: { ok: 'Presionas para que devuelva el bien.', risk: 'Los beneficios sociales tienen plazo legal. Retenerlos como presión convierte un problema de un celular en una infracción.' },
          kusi: ['indignado', '¡Su CTS no es una garantía del celular!'] } },
      { id: 'c', label: 'Pagar en plazo, pero descontar del neto el valor del celular, por si acaso; si lo devuelve, se le reintegra.',
        res: { q: 'riesgosa', fx: { etica: -2, cumplimiento: -4 }, rel: { raul: 1 }, cartera: { liq: 'Pagada con descuento del celular' },
          out: 'Ángel ve el descuento en su hoja y te escribe: «¿Me están tratando de ladrón después de 15 años?». El miércoles devuelve el celular y tienes que hacer un reintegro.',
          pro: { ok: 'Pagas en plazo.', risk: 'Un descuento sin autorización, «por si acaso», es el mismo error de las tijeras con otro nombre.' },
          kusi: ['triste', 'Quince años y lo despiden con sospecha…'] } },
    ],
    rules: [[LEY, 'Los beneficios sociales se pagan en plazo; no se condicionan a la devolución de bienes.'], [BP, 'Los bienes a cargo se devuelven con acta firmada en la entrega de cargo.']],
    mirada: {
      ve: 'Raúl tiene un miedo razonable: perder los contactos de los caporales en pleno pico. Pero la liquidación no es una prenda. Una profesional protege los dos intereses por caminos distintos: el pago, en plazo; el celular, en el acta.',
      visual: { tipo: 'balanza', a: { t: 'Retener el pago', items: ['Presión para devolver el celular', 'Raúl tranquilo'] }, b: { t: 'Pagar y pedir con acta', items: ['Plazo legal cumplido', 'Ángel cobra su CTS el jueves', 'El celular tiene su propio procedimiento'] } },
    },
  },
];
