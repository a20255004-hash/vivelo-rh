// Reclutador/a de selección masiva · Capítulo 6 · «La capacitación inicial» · Semana 2, lunes.
// Hilo: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú. Hoy empieza el grupo piloto.
// Normas citadas:
// - D.S. 018-2007-TR, art. 4-A: el alta en el T-Registro se registra dentro del día en que el trabajador ingresa a prestar servicios,
//   cualquiera sea la modalidad de contratación. SUNAT: https://orientacion.sunat.gob.pe/03-obligaciones-del-empleador-t-registro
//   https://www.gob.pe/8214-t-registro
// - D.S. 003-97-TR (TUO del D.Leg. 728, Ley de Productividad y Competitividad Laboral), art. 6: remuneración es lo que el trabajador recibe por sus servicios.
// - Ley 29733 (datos personales) y Ley 29973 (ajustes razonables), ya citadas en capítulos anteriores.

export const CAP = {
  n: 6, titulo: 'La capacitación inicial', dia: 'Semana 2, lunes', foto: 'assets/foto/capacitacion.webp',
  lugar: 'Contacta Perú · sala de capacitación del piso 2',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Lunes de la segunda semana. Hoy empieza la capacitación del grupo piloto: 40 personas citadas a las 8:00 en el piso 2. Faltan diez minutos y hay 34 sillas ocupadas.', boton: 'Bajar a la sala de capacitación',
  kusi: 'Reclutar no termina con el «sí»: hoy ves si la gente se queda. ¡Dale!',
  lead: 'Rescataste a quienes se perdían en la puerta, corregiste el documento de ingreso, escuchaste al capacitador, decidiste qué hacer con los nueve que no volvieron y le escribiste a uno de ellos.',
  reflexion: '¿Por qué alguien que aprobó todo se va el primer día?',
  siguiente: { n: 7, titulo: 'La presión', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'asistencia', p: 'Asistencia del primer día', j: 'Rubén · Capacitación', d: 0, e: '34 de 40 a las 7:50' },
  { id: 'ingreso', p: 'Documento de ingreso del grupo piloto', j: 'Operaciones · Bruno', d: 0, e: 'Borrador de Operaciones' },
  { id: 'desercion', p: 'Los que no volvieron del almuerzo', j: 'Jessica · Reclutamiento', d: 0, e: 'Sin revisar' },
  { id: 'jhonatan', p: 'Mensaje a Jhonatan Arévalo', j: 'Jessica · Reclutamiento', d: 0, e: 'Pendiente' },
];

export const FUTURO = {
  rumor_cortado: ['Desmentiste el rumor de que «el primer mes no pagan».', 'Menos gente se irá por miedo en la capacitación. Capítulo 7.'],
  ingreso_legal: ['El grupo piloto tiene alta en el T-Registro desde el primer día y cobra lo trabajado.', 'Bruno lo usará como argumento ante Banco Sur. Capítulo 7.'],
  ingreso_irregular: ['El documento de ingreso salió con el alta «al terminar la capacitación».', 'Un trabajador lo consultará en SUNAFIL. Capítulo 9.'],
  sabe_expectativas: ['Supiste que varios no sabían que el puesto era de cobranzas.', 'En la feria del miércoles lo dirás desde el primer minuto. Capítulo 8.'],
  causas_desercion: ['Llamaste a los nueve que no volvieron y anotaste por qué.', 'Tu balance del capítulo 10 tendrá causas, no solo números.'],
  reemplazo_rapido: ['Reemplazaste a los nueve con la lista de espera el mismo día.', 'Llegan con media jornada perdida. Capítulo 9.'],
  proceso_realista: ['Ordenaste una presentación realista del puesto en cada paso.', 'En la feria del capítulo 8 dirás «cobranza» desde el primer minuto.'],
  jhonatan_vuelve: ['Le ofreciste a Jhonatan pasar al grupo de la tarde.', 'Volverá el jueves, en el turno que le calza. Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  alexandra: { n: 'Alexandra Rivas', sub: '19 años', who: 'alexandra' },
  ruben: { n: 'Rubén Shapiama', sub: 'Capacitador', c: '#2E7D32' },
  jhonatan: { n: 'Jhonatan Arévalo', sub: 'Asesor en capacitación', c: '#5D4037' },
};

export const WSP = [
  { chat: 'grupo', t: '07:31', de: 'Jessica', txt: 'Hoy empieza el piloto 🚀 Rubén ya está abajo con el proyector. El que llegue primero prende la cafetera.' },
  { chat: 'alexandra', t: '07:45', de: 'Alexandra', txt: '¡Ya estoy en el piso 2! Traje mi constancia del CEBA impresa, por si acaso 😊', si: 'alexandra_excepcion' },
  { chat: 'ruben', t: '10:55', de: 'Rubén', txt: 'La señora Gladys es la que mejor escucha, pero el mouse la odia 😅 ¿Le consigo una laptop con pantalla grande?', si: 'redes_respondidas' },
  { chat: 'bruno', t: '12:20', de: 'Bruno', txt: 'Los de Wálter: ¿todos llegaron? Él me dice que sí.', si: 'walter_directo' },
  { chat: 'jessica', t: '14:10', de: 'Jessica', txt: 'Un señor llamó a la central: dice que lo llamaron por un trabajo al que nunca postuló. Es de la lista de referidos 😬', si: 'lista_sucia' },
  { chat: 'jessica', t: '14:10', de: 'Jessica', txt: 'Ya cambié el protocolo: ninguna base entra al Excel sin saber de dónde salió. Gracias por lo del viernes.', si: 'datos_honestos' },
];

export const CORREOS = [
  { t: '07:55', de: 'Operaciones · Campaña Banco Sur', para: 'Reclutamiento', cc: 'Bruno Salinas', asunto: 'Documento de ingreso del grupo piloto', html: '<p>Adjuntamos el documento que firmarán hoy los participantes del grupo piloto. <b>Revisar antes de las 9:00</b>, que lo imprimimos para los 40.</p><p>Operaciones</p>' },
  { t: '17:30', de: 'Jessica Torres', para: 'Reclutadora masiva', asunto: 'Primer día del piloto', html: '<p>Empezaron 34, a las 8:30 ya eran 40, y después del almuerzo volvieron 31. <b>Nueve se fueron el primer día.</b> En la campaña pasada fueron catorce.</p><p>Mañana Bruno tiene reunión con el banco. Prepárate.</p><p>Jessica</p>' },
];

export const QUIZ = [
  { q: '¿Cuándo se registra el alta de un trabajador en el T-Registro?', ops: ['Al terminar la capacitación', 'Dentro del día en que empieza a prestar servicios', 'Al mes siguiente, con la PLAME', 'Solo si aprueba el periodo de prueba'], ok: 1, por: 'El art. 4-A del D.S. 018-2007-TR fija el alta dentro del día de ingreso, cualquiera sea la modalidad de contratación.' },
  { q: 'Si el grupo piloto ya está en planilla y alguien no aprueba la capacitación, ¿se pagan los días asistidos?', ops: ['No, porque no aprobó', 'Sí: los días trabajados se pagan', 'Solo la mitad', 'Solo si lo pide por escrito'], ok: 1, por: 'La remuneración es lo que el trabajador recibe por sus servicios (D.S. 003-97-TR, art. 6).' },
  { q: 'Varios se van el primer día porque no sabían que el puesto era de cobranzas. ¿Dónde estuvo la falla?', ops: ['En ellos', 'En cómo se explicó el puesto durante la selección', 'En el capacitador', 'En el almuerzo'], ok: 1, por: 'Una «presentación realista del puesto» durante la selección reduce la deserción temprana.' },
  { q: '¿Qué es lo primero que haces con quienes no volvieron del almuerzo?', ops: ['Borrarlos del Excel', 'Llamarlos y anotar por qué se fueron', 'Reemplazarlos sin preguntar', 'Mandarles un mensaje molesto'], ok: 1, por: 'Las causas de salida te dicen qué corregir en la siguiente tanda.' },
  { q: 'Un rumor dice que «el primer mes no pagan». ¿Qué haces?', ops: ['Nada', 'Lo desmientes con datos concretos: fecha de pago y alta en planilla', 'Lo ignoras porque es falso', 'Lo confirmas para ver quién se queda'], ok: 1, por: 'Los rumores en una campaña masiva corren más rápido que cualquier correo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '07:50', ch: 'llamada', who: null, titulo: 'Las seis sillas vacías', banner: 'assets/foto2/pasillo.webp', lugar: 'Puerta de la sala de capacitación · piso 2', show: ['personas', 'tiempo', 'calidad'],
    body: (n, F) => `<p>Lunes, tráfico de lunes en la Vía Expresa y una garúa que no moja pero fastidia. Rubén Shapiama, el capacitador, 29 años, de Pucallpa, prueba el proyector. ${F.has('ingreso_ordenado') ? 'Mandaste el recordatorio ayer domingo y aun así' : 'A las 7:50'} faltan seis.</p><p>Te paras en la puerta con la lista y llamas a tres. <mark class="clave">Cada minuto que pasa, alguien decide si vale la pena llegar tarde</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Yeny Huamán · San Juan de Lurigancho', 'Contesta agitada', '«¡Señorita, me bajé en la estación equivocada de la Línea 1! Estoy en Gamarra. ¿Todavía puedo entrar?»'],
      ['Rosa Mendoza · Villa María del Triunfo', 'Contesta con un bebé llorando', '«Mi hijito amaneció con fiebre y mi mamá no puede quedarse. ¿Me botan si llego a las 10?»'],
      ['Brayan Paz · Comas', 'Contesta medio dormido', '«No voy a ir, señorita. Un pata me dijo que en Contacta el primer mes no pagan, que es "prueba".»'],
    ],
    prompt: 'Tres llamadas, tres situaciones. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Guiar a Yeny para que llegue, decirle a Rosa que venga a las 10 y que Rubén le repase lo que se pierda, y desmentir el rumor con datos: pago quincenal y alta en planilla desde hoy. Avisar al grupo.',
        res: { q: 'buena', fx: { personas: 5, calidad: 2, tiempo: -2 }, rel: { jessica: 1 }, flags: ['rumor_cortado'], cartera: { asistencia: '40 de 40 a las 10:00' },
          envia: ['grupo', 'Ojo: corre el rumor de que «el primer mes no pagan». Es falso. Todos están en planilla desde hoy y el primer pago es en quince días. Si alguien lo repite, pásenme su número.'],
          out: 'Yeny llega a las 8:25, empapada de garúa y sonriendo. Rosa llega a las 10:05. Brayan no viene, pero dos que sí vinieron te dicen que habían escuchado lo mismo.',
          pro: { ok: 'Atiendes cada caso según su causa y cortas el rumor antes de que se riegue.', risk: 'Rosa se perderá dos horas: Rubén tendrá que repasárselas en el refrigerio.', info: 'Pregunta de dónde salió el rumor: puede venir de la campaña pasada o de otro centro de contacto.' },
          kusi: ['celebra', '¡Rescate en la puerta!'] } },
      { id: 'b', label: 'Cerrar la puerta a las 8:15: la puntualidad es parte del trabajo de un asesor y el grupo no puede esperar a los rezagados.',
        res: { q: 'riesgosa', fx: { personas: -4, calidad: 1, tiempo: 2 }, cartera: { asistencia: '34 de 40; puerta cerrada a las 8:15' },
          out: 'Yeny llega a las 8:25 y se queda en el pasillo. Rosa ni lo intenta. El rumor de Brayan sigue corriendo por WhatsApp.',
          pro: { ok: 'La puntualidad sí importa en un centro de contacto.', risk: 'Perder a dos personas buenas por una estación equivocada y un hijo con fiebre es caro: cada una costó un embudo de catorce postulaciones.' },
          kusi: ['triste', 'Yeny llegó… y la puerta estaba cerrada.'] } },
      { id: 'c', label: 'Esperar a que lleguen solos: ya les mandaste el recordatorio; quien quiere el trabajo, llega.',
        res: { q: 'aceptable', fx: { tiempo: 1, personas: -1 }, cartera: { asistencia: '37 de 40' },
          out: 'Yeny encuentra el camino a las 8:40. Rosa no viene. Nadie desmiente el rumor y, al mediodía, un participante pregunta en voz alta si es verdad.',
          pro: { ok: 'No tratas a los adultos como niños.', risk: 'El rumor era lo más peligroso de las tres llamadas y quedó sin respuesta.' },
          kusi: ['pensando', '¿Y el rumor?'] } },
    ],
    rules: [[BP, 'En el primer día, un problema logístico o un rumor pueden costar una persona que ya pasó todo el proceso.']],
    mirada: {
      ve: 'El primer día de capacitación es el más frágil del embudo: la persona ya dijo que sí, pero todavía puede irse. Una estación equivocada, un hijo enfermo o un rumor deciden si llega. Una reclutadora masiva cuida esa puerta.',
      visual: { tipo: 'linea', titulo: 'La mañana del piloto', hitos: [['7:50', '34 de 40'], ['8:25', 'Llega Yeny'], ['10:05', 'Llega Rosa'], ['13:30', 'Vuelven del almuerzo']] },
    },
  },
  {
    id: 'k2', t: '08:40', ch: 'documento', who: null, titulo: 'El documento de Operaciones', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'etica', 'personas'],
    body: () => `<p>Mientras Rubén hace la dinámica de bienvenida, lees el documento que Operaciones quiere imprimir para los 40. Lo armaron a la carrera el domingo, con un formato viejo. <mark class="clave">A las 9:00 se firma.</mark></p>`,
    type: 'flag', prompt: 'Marca lo que no puede ir o debe corregirse antes de imprimir.',
    doc: { t: 'Condiciones del grupo piloto · Campaña Banco Sur', sub: 'Contacta Perú · Operaciones' },
    lines: [
      { id: 'planilla', t: 'Ingreso en planilla desde hoy, primer día de capacitación.' },
      { id: 'alta', t: 'El alta en el T-Registro se hará al terminar la capacitación, solo para quienes aprueben.', bad: LEY, why: 'El alta se registra dentro del día en que la persona empieza a prestar servicios (D.S. 018-2007-TR, art. 4-A).' },
      { id: 'pago', t: 'Si no aprueba la capacitación, no se pagan los días asistidos.', bad: LEY, why: 'Si ya está en planilla y trabajó, esos días se pagan: la remuneración es lo que recibe por sus servicios (D.S. 003-97-TR, art. 6).' },
      { id: 'horario', t: 'Horario: de 8:00 a 14:00, con refrigerio de 45 minutos.' },
      { id: 'dni', t: 'Se retiene el DNI del participante hasta el final de la capacitación.', bad: BP, why: 'Nadie tiene por qué quedarse con el DNI de otra persona: basta con registrar el número.' },
      { id: 'falta', t: 'Quien falte un día queda fuera, sin posibilidad de explicar el motivo.', bad: BP, why: 'Sin escuchar la causa, pierdes a gente como Rosa por un hijo con fiebre.' },
      { id: 'credencial', t: 'Credencial temporal de capacitación entregada hoy.' },
      { id: 'prueba', t: 'El último día, simulación final con un caso real del banco.', duda: 'Puede usarse un caso real, pero con datos ficticios o anonimizados: no con los datos de un cliente de verdad.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'El documento se imprime tal cual. Cuarenta personas firman que no tendrán alta hasta aprobar.' : `Corriges ${hitsLey} puntos legales. Bruno llama molesto: «¿Y si se van al tercer día?». Le respondes que igual se les paga lo trabajado, y que por eso cuidamos la selección.`,
      flags: [missLey ? 'ingreso_irregular' : 'ingreso_legal'], rel: { bruno: missLey ? 0 : -1 },
      cartera: { ingreso: missLey ? 'Firmado con el alta diferida' : 'Corregido: alta y pago desde hoy' },
      pro: { ok: 'Quien ingresa a prestar servicios tiene alta y remuneración desde el primer día.', risk: 'Un documento que difiere el alta es una prueba escrita de una infracción, firmada por cuarenta personas.', info: 'Coordina con Personal que el alta se haga hoy mismo, antes de las 18:00.' },
      kusi: missLey ? ['indignado', '¿Cuarenta firmas para algo ilegal?'] : ['celebra', '¡Ingreso en regla!'],
    }),
    rules: [[LEY, 'D.S. 018-2007-TR, art. 4-A: alta en el T-Registro dentro del día de ingreso.'], [LEY, 'D.S. 003-97-TR, art. 6: la remuneración es lo que el trabajador recibe por sus servicios.']],
    mirada: {
      ve: 'La reclutadora no hace la planilla, pero sí ve lo que se firma el primer día. Cuando el apuro empuja a «formalizar después», el riesgo es para la empresa y, sobre todo, para cuarenta personas que trabajan sin estar registradas.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al documento correcto', pares: [['Alta al aprobar', 'Alta hoy mismo'], ['Sin pago si no aprueba', 'Se paga lo trabajado'], ['Se retiene el DNI', 'Se anota el número'], ['Una falta y fuera', 'Se escucha la causa']] },
      normas: [{ ley: 'D.S. 018-2007-TR, art. 4-A (T-Registro)', dice: 'El empleador registra el alta del trabajador dentro del día en que este ingresa a prestar servicios, cualquiera sea la modalidad de contratación.', practica: 'En una capacitación pagada, el primer día de capacitación es el primer día de trabajo.' }],
    },
  },
  {
    id: 'k3', t: '11:00', ch: 'presencial', who: null, titulo: 'Café con Rubén', banner: 'assets/foto/mentora.webp', lugar: 'Cocina del piso 2', show: ['calidad', 'personas'],
    body: () => `<p>En el refrigerio, Rubén te sirve café de la máquina en vasito de plástico. Fue asesor de cobranzas cuatro años antes de ser capacitador. «Ya les veo la cara a todos. <mark class="clave">Pregúntame lo que quieras</mark>, pero rápido, que en quince minutos vuelvo.»</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas.',
    opts: [
      { id: 'cobranza', label: '¿Alguien está sorprendido con el trabajo?', info: '«Tres pensaban que era atención al cliente. Uno me dijo: "¿O sea que yo llamo para cobrar?". En la selección nadie les dijo la palabra "cobranza" bien clarito.»' },
      { id: 'gladys', label: '¿Cómo va la gente mayor?', info: '«La señora Gladys es la mejor escuchando: calmó a mi "cliente" en dos minutos. Pero el sistema la frena. Con una pantalla más grande y media hora extra de práctica, vuela.»' },
      { id: 'quien', label: '¿Quién crees que se va primero?', info: '«Los que miran el celular cada dos minutos y los que preguntan cuánto es el bono antes de saber qué hacen. Y los que viven a dos horas y tienen turno de mañana.»' },
      { id: 'tu', label: '¿Por qué te quedaste tú cuatro años?', info: '«Por mi supervisora. Me enseñó a cobrar sin gritar. Y porque me dejaron estudiar en la noche. La gente no se va de la empresa: se va de su jefe.»' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('cobranza') || picks.includes('quien') ? 3 : 1, personas: picks.includes('gladys') || picks.includes('tu') ? 3 : 1 },
      flags: picks.includes('cobranza') ? ['sabe_expectativas'] : [],
      out: picks.includes('cobranza') ? 'Anotas en grande: «Decir COBRANZA desde el aviso hasta la simulación». Era tu aviso, tu citación, tu evaluación.' : 'Rubén vuelve a la sala. Te quedas con una frase que vale para todo el embudo.',
      kusi: ['curioso', 'El capacitador ve lo que el Excel no ve.'],
    }),
    mirada: {
      ve: 'El capacitador es el primero en ver si la selección acertó. Lo que cuenta en un café vale más que cualquier reporte: quién no sabía a qué venía, quién necesita un ajuste pequeño y quién ya tiene un pie afuera.',
    },
  },
  {
    id: 'k4', t: '13:45', ch: 'presencial', who: 'jessica', titulo: 'Nueve sillas vacías', banner: 'assets/foto2/tension.webp', lugar: 'Sala de capacitación · piso 2', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>Vuelven del almuerzo 31 de 40. ${F.has('walter_directo') ? 'Tres de los nueve que no volvieron son de los que entraron sin simulación.' : ''}${F.has('sin_filtro') ? ' Jessica te recuerda que la primera semana aceptaste contratar sin evaluar.' : ''}</p><p>Bruno ya escribió: «Reemplázalos YA con la lista de espera». Jessica te mira: <mark class="clave">«Tú decides. Pero decide con datos»</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Llamar hoy a los nueve y anotar por qué se fueron. Con eso, citar a cinco de la lista de espera para empezar mañana con media hora de repaso, no hoy a la carrera.',
        res: { q: 'buena', fx: { calidad: 5, tiempo: -3, confianza: 2 }, rel: { jessica: 1, bruno: -1 }, flags: ['causas_desercion'], cartera: { desercion: '9 salidas: 4 no sabían que era cobranza, 3 por distancia, 2 por otra oferta' },
          out: 'A las 17:00 tienes las causas: cuatro no sabían que era cobranza, tres viven a más de una hora y medio, dos aceptaron otra oferta. Bruno refunfuña: «¿Mañana? Ok, pero que sean buenos».',
          pro: { ok: 'Sabes qué corregir en la siguiente tanda y no metes a nadie a la mitad de un día.', risk: 'Bruno siente que vas lento: mañana tiene reunión con el banco.', info: 'Cuatro de nueve no sabían que era cobranza: eso no se arregla en la capacitación, se arregla en el aviso y en la evaluación.' },
          kusi: ['animo', 'Datos antes que reemplazos.'] } },
      { id: 'b', label: 'Hacerle caso a Bruno: citar a nueve de la lista de espera para que entren hoy a las 15:00. Pierden la mañana, pero la sala vuelve a 40.',
        res: { q: 'aceptable', fx: { tiempo: 3, calidad: -3, personas: -2 }, rel: { bruno: 1 }, flags: ['reemplazo_rapido'], cartera: { desercion: 'Reemplazados el mismo día' },
          out: 'Llegan seis a las 15:30, despeinados y sin almorzar. Rubén tiene que repetir la mañana. La sala vuelve a 37, pero nadie sabe por qué se fueron los otros.',
          pro: { ok: 'Respondes rápido a la presión y recuperas números.', risk: 'Reemplazar sin conocer la causa repite el problema con gente nueva.' },
          kusi: ['pensando', 'Sala llena… ¿y la causa?'] } },
      { id: 'c', label: 'Dejarlo así: perder a uno de cada cuatro el primer día es normal en centros de contacto y la meta se calculó con esa tasa.',
        res: { q: 'riesgosa', fx: { calidad: -2, confianza: -2 }, cartera: { desercion: 'Se aceptó como normal' },
          out: 'Es cierto que el embudo lo preveía. Pero cuatro de los nueve se fueron por algo que tú podías haber dicho en el aviso, y nadie lo va a saber.',
          pro: { ok: 'No te desesperas por un número esperado.', risk: 'Lo «normal» también se puede mejorar si conoces la causa.' },
          kusi: ['preocupado', '¿Normal o evitable?'] } },
    ],
    rules: [[BP, 'Antes de reemplazar, averigua por qué se fue la gente: la causa decide qué corregir.']],
    mirada: {
      ve: 'La deserción del primer día casi siempre tiene causas que nacen antes: un aviso que no dijo «cobranza», una distancia que nadie preguntó, una oferta más rápida. Reemplazar sin preguntar es volver a llenar un balde con el mismo agujero.',
      visual: { tipo: 'embudo', titulo: 'El primer día del piloto', niveles: [['Citados', 40], ['Llegaron', 40], ['Volvieron del almuerzo', 31]] },
    },
  },
  {
    id: 'k5', t: '15:30', ch: 'whatsapp', who: null, titulo: 'Para Jhonatan', banner: 'assets/foto/cv-mano.webp', show: ['personas', 'confianza', 'calidad'],
    body: () => `<p>Uno de los nueve es Jhonatan Arévalo, de Ventanilla, al que llamaste la semana pasada. En tu Excel dice «turno tarde». Pero el piloto es de mañana, y él lleva a su hermanito al colegio. <mark class="clave">Nadie le avisó del cambio de turno.</mark></p>`,
    type: 'compose', enviaA: 'jhonatan', para: 'Para: Jhonatan Arévalo', boton: 'Enviar el mensaje',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Apertura', ops: [
        { id: 'a1', t: 'Hola, Jhonatan. Soy la reclutadora de Contacta. Vi que hoy no pudiste volver después del almuerzo.', ok: true, por: 'Describe lo que pasó, sin acusar.' },
        { id: 'a2', t: 'Jhonatan, abandonaste la capacitación.', ok: false, por: 'Suena a acusación y cierra la conversación.' },
      ] },
      { id: 'reconoce', t: 'Reconocer', ops: [
        { id: 'r1', t: 'Tú nos dijiste que podías en la tarde y te pusimos en la mañana: eso fue error nuestro.', ok: true, por: 'Asumir el error devuelve la confianza.' },
        { id: 'r2', t: 'Debiste avisar antes de irte.', ok: false, por: 'Puede ser cierto, pero no ayuda a que vuelva.' },
      ] },
      { id: 'opcion', t: 'La opción', ops: [
        { id: 'o1', t: 'El jueves empieza un grupo de 14:00 a 20:00. Si te sirve, tienes un lugar.', ok: true, por: 'Una salida concreta, con fecha y horario.' },
        { id: 'o2', t: 'Si quieres, mañana puedes volver a la mañana.', ok: false, por: 'Es justo el horario que no puede cumplir.' },
      ] },
      { id: 'cierra', t: 'Cierre', ops: [
        { id: 'c1', t: 'Si ya no te interesa, también está bien: solo cuéntame para liberar tu cupo. 🙌', ok: true, por: 'Deja decidir sin presión y te da información.' },
        { id: 'c2', t: 'Respóndeme hoy, por favor, que tengo otros en espera.', ok: false, por: 'Presiona sin necesidad.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'r1', 'o1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 2 : -1 },
        flags: q === 'buena' ? ['jhonatan_vuelve'] : [], cartera: { jhonatan: q === 'buena' ? 'Pasa al grupo de la tarde del jueves' : 'Sin respuesta' },
        out: q === 'buena' ? 'Jhonatan responde a las 18:10, desde la combi: «Pensé que ya me habían borrado. El jueves estoy ahí, en la tarde».' : 'Jhonatan deja el mensaje en visto.',
        pro: { ok: 'Un error de asignación de turno se corrige con una disculpa y una opción concreta.', info: 'Revisa en el Excel cuántos más tienen un turno distinto al que dijeron: puede ser un error de la plantilla.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Recuperado!' : '¿Le quedó claro que fue un error nuestro?'],
      };
    },
    rules: [[BP, 'Si la salida se debe a un error de la empresa, se reconoce y se ofrece una salida concreta.']],
    mirada: {
      ve: 'No toda deserción es desinterés. A veces el error es de la empresa: un turno mal asignado, una dirección mal explicada. Reconocerlo y ofrecer una alternativa concreta recupera a personas que ya costaron todo un embudo.',
      visual: { tipo: 'mensaje', titulo: 'Recuperar sin presionar', txt: 'Hola, Jhonatan. Soy la reclutadora de Contacta. Vi que hoy no pudiste volver después del almuerzo. Tú nos dijiste que podías en la tarde y te pusimos en la mañana: eso fue error nuestro. El jueves empieza un grupo de 14:00 a 20:00. Si te sirve, tienes un lugar. Si ya no te interesa, también está bien: solo cuéntame para liberar tu cupo. 🙌' },
    },
  },
  {
    id: 'k6', t: '16:45', ch: 'documento', who: null, titulo: 'Lo que cambia mañana', banner: 'assets/esc/escalera.webp', show: ['calidad', 'tiempo', 'personas'],
    body: (n, F) => `<p>Jessica te pide ordenar lo que cambia desde mañana para que la siguiente tanda pierda menos gente. ${F.has('sabe_expectativas') ? 'Tienes la frase de Rubén anotada: «Decir COBRANZA».' : ''} <mark class="clave">Va del aviso a la puerta de la capacitación</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los cambios según el momento del proceso en que ocurren.', boton: 'Mandárselo a Jessica',
    items: [
      { id: 'aviso', t: 'El aviso dice «cobranza» en el título, no solo en la letra chica', por: 'La primera promesa es la que más pesa.' },
      { id: 'llamada', t: 'La llamada de filtro confirma turno y tiempo de traslado', por: 'Lo que falló con Jhonatan.' },
      { id: 'video', t: 'En la evaluación, un video de dos minutos de un asesor cobrando de verdad', por: 'Que vean el trabajo antes de decir que sí.' },
      { id: 'turno', t: 'La carta de oferta dice el turno exacto de la capacitación', por: 'Por escrito, sin sorpresas.' },
      { id: 'pago', t: 'El primer día se explica la fecha de pago y el alta en planilla', por: 'Corta los rumores.' },
      { id: 'padrino', t: 'Cada participante tiene un asesor «padrino» del piso para preguntar', por: 'Alguien de confianza en los primeros días.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, personas: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['proceso_realista'] : [],
        out: q === 'buena' ? 'Jessica lo convierte en la pizarra en una línea: «Decir la verdad del puesto en cada paso». Mañana lo presentará a Bruno.' : 'Jessica reordena dos tarjetas: «El video va antes de la oferta, si no, ya dijeron que sí sin saber».',
        pro: { ok: 'Una presentación realista del puesto en cada etapa reduce la deserción temprana.', info: 'Mide la próxima tanda con las mismas preguntas: así sabrás qué cambio funcionó.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Embudo honesto!' : 'Casi: el orden importa.'],
      };
    },
    rules: [[BP, 'Muestra el trabajo tal como es antes de que la persona acepte: es la forma más barata de evitar la deserción temprana.']],
    mirada: {
      ve: 'La «presentación realista del puesto» consiste en mostrar lo bueno y lo difícil del trabajo antes de la oferta. Algunos postulantes se retiran antes, y eso es bueno: el que se va en la evaluación no deja una silla vacía en la capacitación.',
      visual: { tipo: 'flujo', titulo: 'La verdad del puesto, paso a paso', pasos: ['Aviso', 'Llamada de filtro', 'Evaluación con video', 'Oferta con turno', 'Primer día'] },
    },
  },
  {
    id: 'k7', t: '18:30', ch: 'whatsapp', who: 'bruno', titulo: 'Antes de la reunión con el banco', banner: 'assets/esc/reloj.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Ya en el Metropolitano, apretada entre mochilas, ves el mensaje de Bruno.</p>`,
    chat: ['Mañana a las 9 tengo al banco. ¿Qué les digo del primer día? Corto.'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'El número, la causa principal y lo que ya cambiaste.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { bruno: 1 },
          envia: ['bruno', 'Bruno: empezaron 40 y siguen 31. La causa principal es que no sabían que era cobranza; desde mañana el aviso y la evaluación lo dicen claro. La campaña pasada perdimos 14 el primer día; hoy, 9.'],
          out: 'Bruno responde: «9 vs 14. Eso le gusta al banco». Por primera vez, te reenvía un mensaje con un «buen trabajo».', kusi: ['celebra', '¡Dato que se puede presentar!'] } },
      { id: 'b', label: 'Que todo está bajo control y que mañana la sala vuelve a estar llena.',
        res: { q: 'riesgosa', fx: { confianza: 1, calidad: -2 }, rel: { bruno: 1 },
          envia: ['bruno', 'Todo bajo control 💪 Mañana la sala vuelve a estar llena.'],
          out: 'Bruno le dice al banco que la sala está llena. Mañana el banco pedirá ver la lista.', kusi: ['preocupado', '¿Y si mañana no está llena?'] } },
    ],
    mirada: { ve: 'Al cliente no le sirve un «todo bien»: le sirve saber qué pasó, por qué y qué cambió. Una reclutadora que da a su gerente un dato comparable lo ayuda a negociar.' },
  },
];
