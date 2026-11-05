// Asistente de RR.HH. · Capítulo 9 · «La cola de dudas» · Semana 2, jueves.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas:
// - D.S. 007-2002-TR, art. 9 (sobretiempo voluntario) y art. 10 (sobretasa mínima de 25 % por las dos primeras horas
//   y 35 % por las restantes). https://lpderecho.pe/jornada-trabajo-horario-horas-extras-sobretiempo/
//   https://modelo.pe/acuerdo-de-realizacion-de-trabajo-en-sobretiempo-horas-extras/
// - D.S. 004-2006-TR, art. 7: si el trabajador permanece en el centro de trabajo después de su hora de salida, se presume
//   que el empleador dispuso sobretiempo, salvo prueba en contrario objetiva y razonable.
//   https://lpderecho.pe/acreditar-prestacion-servicios-sobretiempo/
//   https://lpderecho.pe/no-firmar-formato-de-autorizacion-de-horas-extra-no-impide-reconocer-autorizacion-tacita-resolucion-613-2020-sunafil/
// - D.S. 007-2002-TR, art. 8: piso nocturno de RMV + 35 %, ya citado en el capítulo 7.
// - D.S. 003-97-TR, art. 30 g): actos que afectan la dignidad del trabajador, ya citado en el capítulo 6.

export const CAP = {
  n: 9, titulo: 'La cola de dudas', dia: 'Semana 2, jueves', foto: 'assets/foto2/revisan.webp',
  lugar: 'Tienda 13 · Castilla, Piura',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. La tienda 13 ya funciona: la banda se fue, quedaron los globos desinflados y una cola de gente en la puerta de tu oficina con preguntas que no estaban en ningún checklist.', boton: 'Abrir la oficina',
  kusi: 'Ayer se vio la tienda. Hoy se ve RR.HH.: cada duda bien respondida es una persona que se queda.',
  lead: 'Rescataste las horas extra del día de apertura, respondiste la cola de dudas, opinaste con criterio sobre el caso de Karina y dejaste lista la planilla para César.',
  reflexion: '¿Qué duda de hoy te pareció pequeña, pero era enorme para quien la hizo?',
  siguiente: { n: 10, titulo: 'Diez días', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Tienda abierta' },
  { id: 'horas', p: 'Horas extra de la apertura', j: 'César · Planillas', d: 0, e: 'Sin registrar' },
  { id: 'dudas', p: 'Cola de dudas', j: 'RR.HH.', d: 0, e: '14 personas esperando' },
  { id: 'casos', p: 'Atención de casos', j: 'Betty · RR.HH.', d: 0, e: 'Entrevistas hoy' },
  { id: 'constancias', p: 'Constancias', j: 'Betty · RR.HH.', d: 0, e: '1 pedida «para ayer»' },
];

export const FUTURO = {
  horas_registradas: ['Las horas extra de la apertura quedaron registradas, con su sobretasa.', 'Nadie reclamará en la boleta de fin de mes.'],
  horas_perdidas: ['Las horas extra de la apertura se «compensaron» con pollo a la brasa.', 'La primera boleta traerá el primer reclamo.'],
  dudas_atendidas: ['La cola de dudas se fue con respuestas concretas.', 'Menos mensajes a las 10 de la noche.'],
  caso_proporcional: ['El caso de Karina se cerró con una medida proporcional y seguimiento.', 'Wilmer sigue en la tienda, con un compromiso por escrito.'],
  caso_karina_movida: ['Propusiste trasladar a Karina a otra tienda.', 'Karina lo sentirá como un castigo por hablar.'],
  caso_drastico: ['Pediste el despido inmediato de Wilmer.', 'Betty prefirió un procedimiento, y ahora Wilmer te ve como enemiga.'],
  cesar_horas: ['César recibió las horas reales, persona por persona.', 'La planilla de la tienda 13 saldrá sin parches.'],
  constancia_bien: ['La constancia de Jhonatan salió correcta y firmada por quien corresponde.', 'Su beca seguirá su trámite.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera', who: 'karina' },
  nuevos: { n: 'Tienda 13 · Equipo', sub: '45 participantes', c: '#C05621' },
};

export const WSP = [
  { chat: 'grupo', t: '07:10', de: 'César', txt: 'Necesito las horas extra de ayer antes de las 3. Las de verdad, no las de Wilmer 😑' },
  { chat: 'grupo', t: '07:25', de: 'Betty', txt: 'Hoy hago las entrevistas del caso de la caja 3. Te necesito para tomar notas a las 10:30.' },
  { chat: 'wilmer', t: '07:45', de: 'Wilmer', txt: 'Las horas de ayer no se pagan, ¿ya? Fue la apertura. Les invito un pollito y quedamos.' },
  { chat: 'nuevos', t: '08:05', de: 'Jhonatan', txt: 'Señorita, ¿me puede dar una constancia de trabajo para hoy? La beca cierra a las 5 😬' },
  { chat: 'karina', t: '08:20', de: 'Karina', txt: 'Gracias por lo de ayer en la caja, señorita. Me temblaba todo.', si: 'karina_defendida' },
  { chat: 'karina', t: '08:20', de: 'Karina', txt: 'Ayer usted me vio en la caja, ¿no? Nadie hizo nada.', si: 'karina_sola' },
  { chat: 'nuevos', t: '11:50', de: 'Valentina', txt: 'Señorita, en la boleta de ejemplo sale mi otro nombre. ¿Así va a salir siempre? 😔', si: 'credencial_nombre' },
];

export const CORREOS = [
  { t: '07:35', de: 'Gerencia de Finanzas', para: 'RR.HH. Supermercados Norte; César Chunga', asunto: 'Horas extra · apertura T13', html: '<p>Para controlar el costo de la apertura, proponemos pagar las horas extra de ayer con una sobretasa única del 15 % o compensarlas con un almuerzo para el equipo. Quedamos atentos.</p>' },
  { t: '17:40', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Mañana', html: '<p>Mañana a las 5 de la tarde nos sentamos tú y yo a ver estas dos semanas. Trae tu checklist, con tachones y todo.</p><p>Betty</p>' },
];

export const QUIZ = [
  { q: 'Doce personas marcaron su salida dos horas después de su turno el día de la apertura. ¿Qué presume la norma?', ops: ['Que se quedaron porque quisieron', 'Que el empleador dispuso sobretiempo, salvo prueba en contrario', 'Que fue un error del reloj', 'Nada: es la apertura'], ok: 1, por: 'El art. 7 del D.S. 004-2006-TR presume el sobretiempo cuando el trabajador permanece después de su hora de salida.' },
  { q: '¿Cuál es la sobretasa mínima de las dos primeras horas extra?', ops: ['15 %', '25 %', '35 %', '50 %'], ok: 1, por: 'El art. 10 del D.S. 007-2002-TR fija un mínimo de 25 % para las dos primeras horas y 35 % para las siguientes.' },
  { q: 'Finanzas propone pagar las horas extra con un almuerzo de pollo a la brasa. Eso…', ops: ['Es válido si todos comen', 'No reemplaza el pago del sobretiempo con su sobretasa', 'Es válido el día de la apertura', 'Depende del jefe de tienda'], ok: 1, por: 'Un almuerzo es un gesto. El sobretiempo trabajado se paga con su sobretasa.' },
  { q: 'Tras investigar el caso de Karina, ¿qué medida castiga a quien se quejó?', ops: ['Un compromiso escrito del jefe', 'Trasladar a Karina a otra tienda para «protegerla»', 'Seguimiento a los 30 días', 'Una capacitación en liderazgo para el jefe'], ok: 1, por: 'Mover a quien se quejó le hace pagar a ella el costo del problema.' },
  { q: 'Una constancia de trabajo debe decir…', ops: ['El nombre, el DNI, el puesto y la fecha de ingreso, firmada por quien corresponde', 'Que está en periodo de prueba y puede ser despedido', 'Su diagnóstico médico', 'Lo que opine el jefe de tienda'], ok: 0, por: 'Lo necesario para acreditar el vínculo, y nada que la perjudique.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:50', ch: 'sistema', who: null, titulo: 'Las marcaciones de ayer', banner: 'assets/esc/planilla.webp', lugar: 'Oficina provisional de la tienda 13', show: ['cumplimiento', 'calidad', 'personas'],
    body: (n, F) => `<p>Descargas el reporte del reloj marcador del día de la apertura. ${F.has('charla_buena') ? 'Como dijiste en la charla, varios anotaron su hora de salida real.' : 'Nadie anotó nada aparte de la marcación.'} Wilmer le añadió una nota a mano en la impresión.</p><p>César lo necesita antes de las 3. <mark class="clave">Revísalo antes de enviarlo</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la norma o lo que debería corregirse en el reporte de horas.',
    doc: { t: 'Reporte de asistencia y sobretiempo · día de apertura', sub: 'Tienda 13 · reloj marcador y notas del jefe de tienda' },
    lines: [
      { id: 'marc', t: 'Marcaciones de entrada y salida de las 43 personas que vinieron.' },
      { id: 'doce', t: '12 personas marcaron su salida entre una y tres horas después del fin de su turno.', duda: 'Es sobretiempo: se presume dispuesto por el empleador. Hay que registrarlo y pagarlo.' },
      { id: 'nota', t: 'Nota de Wilmer: «Las horas después del turno no se pagan: se quedaron porque quisieron».', bad: LEY, why: 'Si la persona permanece en el centro de trabajo después de su hora de salida, se presume que el empleador dispuso sobretiempo (D.S. 004-2006-TR, art. 7).' },
      { id: 'pollo', t: 'Propuesta: compensar las horas con un almuerzo de pollo a la brasa para todo el equipo.', bad: LEY, why: 'Un almuerzo es un gesto, no un pago. El sobretiempo se paga con su sobretasa.' },
      { id: 'quince', t: 'Propuesta de Finanzas: sobretasa única del 15 % para todas las horas.', bad: LEY, why: 'La sobretasa mínima es 25 % por las dos primeras horas y 35 % por las siguientes (D.S. 007-2002-TR, art. 10).' },
      { id: 'noche', t: 'Turno noche: salida registrada a las 6:00, aunque Kevin y don Santos se quedaron hasta las 8:00 descargando.', bad: BP, why: 'El registro no refleja lo que pasó. Hay que corregirlo con su hora real de salida.' },
      { id: 'mila', t: 'Milagros: ingreso a las 9:10, con nota «choque en el puente Cáceres».' },
      { id: 'firma', t: 'Columna para que cada persona confirme con su firma las horas trabajadas.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 3 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -6 : 6, personas: missLey ? -3 : 3 }, rel: { wilmer: missLey ? 1 : -1 },
      flags: [missLey ? 'horas_perdidas' : 'horas_registradas'], cartera: { horas: missLey ? 'Horas extra sin pagar' : 'Horas extra registradas con sobretasa' },
      out: missLey ? 'El reporte sale con la nota de Wilmer. El viernes habrá pollo a la brasa, y a fin de mes, doce boletas sin las horas que se trabajaron.' : 'Tachas la nota, el pollo y el 15 %, y corriges la salida del turno noche. Le mandas a Wilmer una línea: «El pollo, si quieres, como agradecimiento. Las horas se pagan igual». Él responde con un audio que mejor no escuchas entero.',
      pro: { ok: 'Rescatas horas que la gente trabajó y que nadie iba a reclamar… todavía.', risk: 'Las horas no pagadas de una apertura son el primer reclamo de una tienda nueva, y el más fácil de probar.', info: 'Pide que cada persona confirme sus horas con su firma.' },
      kusi: missLey ? ['preocupado', 'Un pollito no paga tres horas…'] : ['celebra', '¡Horas rescatadas!'],
    }),
    rules: [[LEY, 'Se presume sobretiempo si el trabajador permanece después de su hora de salida (D.S. 004-2006-TR, art. 7).'], [LEY, 'Sobretasa mínima: 25 % las dos primeras horas y 35 % las siguientes (D.S. 007-2002-TR, art. 10).']],
    mirada: {
      ve: 'Las horas extra de una apertura casi siempre se pierden: todos estaban emocionados y nadie anotó nada. RR.HH. es quien las rescata del reloj marcador, aunque al jefe y a Finanzas no les guste el costo.',
      visual: { tipo: 'cambio', titulo: 'Del reporte de Wilmer al reporte correcto', pares: [['«Se quedaron porque quisieron»', 'Sobretiempo presunto, registrado'], ['Pollo a la brasa', 'Pago con su sobretasa'], ['15 % para todo', '25 % y 35 %'], ['Salida a las 6:00', 'Salida real a las 8:00']] },
      normas: [
        { ley: 'D.S. 004-2006-TR, art. 7', dice: 'Si el trabajador se encuentra en el centro de trabajo después de su hora de salida, se presume que el empleador dispuso la realización de sobretiempo, salvo prueba en contrario, objetiva y razonable.', practica: 'El reloj marcador del día de apertura es la prueba de las horas trabajadas.' },
        { ley: 'D.S. 007-2002-TR, TUO de la Ley de Jornada de Trabajo, art. 10', dice: 'El sobretiempo se paga con una sobretasa mínima de 25 % por las dos primeras horas y de 35 % por las restantes.', practica: 'Una sobretasa única del 15 % no cumple.' },
      ],
    },
  },
  {
    id: 'c2', t: '09:10', ch: 'presencial', who: null, titulo: 'La cola en la puerta', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Puerta de la oficina provisional', show: ['personas', 'confianza', 'tiempo'],
    body: () => `<p>Abres la puerta y hay catorce personas en fila, algunas con su polo verde y otras recién salidas del turno noche. Todos tienen «una preguntita».</p><p>Antes de la entrevista de las 10:30, <mark class="clave">alcanzas a atender dos con calma</mark>. A los demás les das hora.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos dudas que atiendes primero.',
    opts: [
      { id: 'yor', label: 'Yorgelis, con su certificado en la mano: «¿Me van a descontar los dos días de descanso médico?»', info: 'Le explicas que no son faltas: su descanso médico está justificado con el certificado, que debes recibir hoy. Cómo se pagan esos días se lo explicará César con su boleta. Yorgelis respira: «Es que pensé que por ser nueva…».' },
      { id: 'jhon', label: 'Jhonatan: «Mi constancia para la beca cierra a las 5…»', info: 'Le dices que la constancia la firma Betty, que la preparas hoy y que a las 3 la recoge. Jhonatan te muestra el formulario de la beca: es de un instituto de Piura para técnicos en logística.' },
      { id: 'mila', label: 'Milagros: «¿Me descuentan la hora de ayer por el choque?»', info: 'Le cuentas que su tardanza quedó registrada con la razón y que la política de la tienda la trata como justificada. «Pero avisar a tiempo, como hiciste, es lo que la hace justificable.»' },
      { id: 'santos', label: 'Don Santos: «¿Las dos horas que me quedé descargando también se pagan?»', info: '«Sí, don Santos. Y las de la noche, con su recargo.» Él saca un cuaderno donde anota sus horas desde hace treinta años: coinciden con el reloj.' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, confianza: 2, tiempo: -1 },
      flags: ['dudas_atendidas'], cartera: { dudas: 'Cola atendida con horario para cada uno' },
      out: 'A los demás les das un papelito con una hora: a las 12, a las 3, a las 4. La cola se disuelve sin protestas. Alguien dice al irse: «En mi otra chamba nunca supe quién era RR.HH.».',
      kusi: ['feliz', '¡Una cola con horario es una cola en paz!'],
    }),
    mirada: {
      ve: 'La cola de dudas es el termómetro de una apertura: aparece cuando la gente empieza a confiar. Atender con calma a dos y dar hora a los demás es mejor que responder a medias a catorce.',
      visual: { tipo: 'embudo', titulo: 'La cola de esta mañana', niveles: [['Personas en la fila', 14], ['Atendidas con calma', 2], ['Con hora asignada', 12]] },
    },
  },
  {
    id: 'c3', t: '12:20', ch: 'presencial', who: 'betty', titulo: 'Después de las entrevistas', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala de capacitación de la tienda', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Betty entrevistó a Karina, a Yorgelis y a Wilmer. Tú tomaste notas. ${F.has('registro_caso') ? 'Tu registro del lunes le dio a Betty el orden de los hechos.' : 'Sin un registro claro del lunes, Betty tuvo que reconstruir los hechos con lo que cada uno recordaba.'} ${F.has('wilmer_sabe') ? 'Wilmer llegó con su versión armada sobre «la chica sensible».' : 'Wilmer reconoció que «se le fue la mano» en la apertura.'}</p><p>Betty cierra la carpeta: «Antes de decidir, quiero tu opinión. <mark class="clave">¿Qué medida propones?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Una amonestación escrita a Wilmer con un compromiso de trato, una capacitación en liderazgo, y una revisión con Karina en 30 días. Karina sigue en su caja.',
        res: { q: 'buena', fx: { etica: 5, personas: 4, confianza: 3 }, rel: { betty: 1, wilmer: -1, karina: 1 }, flags: ['caso_proporcional'], cartera: { casos: 'Caso cerrado con medida y seguimiento a 30 días' },
          out: 'Betty asiente: «Es lo que pensaba. Proporcional, y con seguimiento». Wilmer firma el compromiso sin mirar a nadie. Karina se entera por Betty, en privado, y pregunta solo una cosa: «¿Me puedo quedar en mi caja?». Sí.',
          pro: { ok: 'La medida corrige la conducta, protege a Karina y no la castiga por hablar.', risk: 'Wilmer seguirá siendo el jefe de tienda: el seguimiento es indispensable.', info: 'Agenda ya la revisión de los 30 días.' },
          kusi: ['celebra', 'Justo, proporcional y con seguimiento.'] } },
      { id: 'b', label: 'Trasladar a Karina a la tienda 4, con Miriam, para que no tenga que ver más a Wilmer.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -4 }, rel: { karina: -1 }, flags: ['caso_karina_movida'], cartera: { casos: 'Propuesta: mover a Karina a la tienda 4' },
          out: 'Betty te mira largo: «¿Y la mandamos a dos combis de su casa por haberse quejado?». Karina, cuando lo sabe, llora: la tienda 4 le queda a una hora y media.',
          pro: { ok: 'Buscas alejarla del conflicto.', risk: 'Mover a quien se quejó le hace pagar a ella el problema, y le enseña a todo el equipo que quejarse sale caro.' },
          kusi: ['triste', 'La protección parece castigo.'] } },
      { id: 'c', label: 'Pedir el despido inmediato de Wilmer: gritó e insultó a una trabajadora delante de los clientes.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -2 }, rel: { wilmer: -1 }, flags: ['caso_drastico'], cartera: { casos: 'Propuesta de despido: Betty prefiere un procedimiento' },
          out: 'Betty niega con la cabeza: «Lo que hizo es grave, pero hay un procedimiento, y él tiene derecho a presentar sus descargos. No despido a un jefe de tienda en una tarde». Wilmer se entera de tu propuesta.',
          pro: { ok: 'Tomas en serio la gravedad.', risk: 'Una medida sin procedimiento ni proporcionalidad puede caerse y dejar a Karina peor.' },
          kusi: ['pensando', 'Grave, sí. ¿Proporcional?'] } },
    ],
    rules: [[LEY, 'Los actos que afectan la dignidad del trabajador son actos de hostilidad (D.S. 003-97-TR, art. 30 g).'], [BP, 'La medida corrige a quien cometió la falta y protege a quien se quejó. Nunca al revés.']],
    mirada: {
      ve: 'Cerrar un caso es más difícil que abrirlo. La medida debe ser proporcional a lo que pasó, corregir la conducta, proteger a quien habló y tener seguimiento. Y hay una regla de oro: nunca castigar a quien se quejó, aunque se disfrace de protección.',
      visual: { tipo: 'matriz', x: 'Severidad', y: 'Protección para Karina', cuadrantes: ['Proporcional y protege', 'Severa y protege', 'Suave y no protege', 'La castiga a ella'], items: [['Amonestación + seguimiento', .45, .85], ['Despido inmediato', .95, .6], ['Trasladar a Karina', .3, .1]] },
    },
  },
  {
    id: 'c4', t: '14:10', ch: 'whatsapp', who: 'cesar', titulo: 'Las horas para César', banner: 'assets/esc/dedos.webp', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>Faltan 50 minutos para las 3. César te escribió tres veces. Le mandas el resumen de horas de la apertura para la planilla.</p><p>Él siempre dice lo mismo: <mark class="clave">«No me mandes parches: mándame datos»</mark>.</p>`,
    type: 'compose', enviaA: 'cesar', para: 'Para: César Chunga · Planillas', boton: 'Enviar a César',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué le mandas', ops: [
        { id: 'q1', t: 'César, en la carpeta de Planillas está el reporte de horas de la apertura, persona por persona, con entrada y salida real.', ok: true, por: 'Datos completos, en el canal de la empresa.' },
        { id: 'q2', t: 'César, fueron más o menos dos horas extra por persona 👍', ok: false, por: '«Más o menos» no se puede pagar.' },
      ] },
      { id: 'tasa', t: 'Cómo se calculan', ops: [
        { id: 't1', t: 'Marqué las horas extra con su sobretasa: 25 % las dos primeras y 35 % las siguientes.', ok: true, por: 'Los mínimos del art. 10.' },
        { id: 't2', t: 'Finanzas pidió 15 % para todas, así que lo puse así.', ok: false, por: 'Por debajo del mínimo legal.' },
      ] },
      { id: 'noche', t: 'El turno noche', ops: [
        { id: 'n1', t: 'Ojo con Kevin, don Santos y Elena: trabajaron de noche y además se quedaron hasta las 8.', ok: true, por: 'Recargo nocturno y sobretiempo, separados.' },
        { id: 'n2', t: 'Los de la noche ya están incluidos en lo de arriba.', ok: null, por: 'Puede que sí… o que se pierda el recargo nocturno.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.tasa === 't2', buenas = ['q1', 't1', 'n1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : mal ? -3 : 1, cumplimiento: mal ? -5 : 3, confianza: q === 'buena' ? 3 : 0 }, rel: { cesar: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['cesar_horas'] : [], cartera: { horas: q === 'buena' ? 'Horas enviadas a César con sobretasa' : mal ? 'Horas enviadas mal calculadas' : 'Horas enviadas, revisar noche' },
        out: q === 'buena' ? 'César responde: «Esto es un reporte. Te debo dos cafés ya». Después añade: «El sistema de planillas se cuelga a fin de mes; con esto, no voy a tener que rehacer nada».' : mal ? 'César responde: «¿15 %? ¿Más o menos? No puedo pagar así. Mándame el reporte de verdad».' : 'César agradece, pero te pide revisar al turno noche antes de cerrar.',
        pro: { ok: 'Datos completos, tasas legales y los casos especiales marcados.', risk: 'Un reporte aproximado o con tasas por debajo de la ley es una planilla con errores.', info: 'Pregunta a César cómo quiere el reporte para el próximo mes.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡César feliz es una planilla feliz!' : mal ? 'Así no se puede pagar.' : 'Casi: ojo con la noche.'],
      };
    },
    rules: [[LEY, 'Sobretasa mínima: 25 % las dos primeras horas y 35 % las siguientes (D.S. 007-2002-TR, art. 10).'], [LEY, 'Piso nocturno: RMV más 35 % (D.S. 007-2002-TR, art. 8).']],
    mirada: {
      ve: 'Lo que RR.HH. registra en la tienda, Planillas lo paga en la boleta. Un reporte claro, con las tasas correctas y los casos especiales marcados, es la diferencia entre una boleta correcta y un reclamo.',
      visual: { tipo: 'flujo', titulo: 'De la marcación a la boleta', pasos: ['Reloj marcador', 'Reporte revisado', 'Planillas calcula', 'Boleta correcta'], aqui: 1 },
    },
  },
  {
    id: 'c5', t: '15:00', ch: 'documento', who: null, titulo: 'La constancia «para ayer»', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina provisional de la tienda 13', show: ['calidad', 'tiempo'],
    body: () => `<p>Jhonatan está en la puerta a las 3 en punto, peinado como para una entrevista. La beca cierra a las 5 y Betty firma a las 4, antes de irse a la oficina central.</p><p>Preparas la constancia. <mark class="clave">Elige qué lleva</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la constancia de trabajo.', boton: 'Imprimir para la firma',
    bloques: [
      { id: 'datos', t: 'Datos', n: 2, ops: [
        { id: 'd1', t: 'Nombre completo y DNI, tal como figuran en su documento.', ok: true },
        { id: 'd2', t: 'Puesto (reponedor) y fecha de ingreso.', ok: true },
        { id: 'd3', t: 'Su dirección y su teléfono.', ok: false, por: 'La beca no los pide, y no hacen falta para acreditar el vínculo.' },
      ] },
      { id: 'cuidado', t: 'Lo que no debe decir', n: 1, ops: [
        { id: 'c1', t: 'Nada sobre su periodo de prueba ni sobre su desempeño de tres días.', ok: true, por: 'La constancia acredita el vínculo, no lo evalúa.' },
        { id: 'c2', t: '«Se encuentra en periodo de prueba y su continuidad no está garantizada.»', ok: false, por: 'Es cierto, pero no corresponde y podría perjudicar su beca.' },
      ] },
      { id: 'firma', t: 'Firma', n: 2, ops: [
        { id: 'f1', t: 'Firma de Betty como jefa de RR.HH., con fecha.', ok: true },
        { id: 'f2', t: 'Membrete de la empresa y un número de contacto de RR.HH. para verificarla.', ok: true },
        { id: 'f3', t: 'Tu firma escaneada, para no esperar a Betty.', ok: false, por: 'Una constancia la firma quien tiene la facultad. Tu firma escaneada no la valida.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['constancia_bien'] : [], cartera: { constancias: q === 'buena' ? 'Constancia de Jhonatan firmada' : 'Constancia con observaciones' },
        out: q === 'buena' ? 'Betty firma a las 4:05. Jhonatan sale corriendo a tomar el colectivo y a las 4:52 te manda una foto: «¡Postulé!».' : 'La constancia sale, pero con algo que no debía o sin lo que la hace válida.',
        pro: { ok: 'Lo necesario, firmado por quien corresponde, a tiempo.', risk: 'Una constancia con datos de más, o firmada por quien no corresponde, puede rechazarse o perjudicar a la persona.', info: 'Guarda un modelo de constancia: pedirán muchas más.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Beca en camino!' : 'Algo sobraba…'],
      };
    },
    rules: [[LEY, 'Solo se incluyen los datos personales necesarios para la finalidad (Ley 29733).'], [BP, 'Una constancia acredita el vínculo. No opina ni evalúa.']],
    mirada: {
      ve: 'Las constancias «para ayer» son de las tareas más pequeñas de RR.HH. y de las que más se agradecen. Para Jhonatan, una hoja bien hecha a tiempo es la diferencia entre estudiar o no.',
      visual: { tipo: 'flujo', titulo: 'Una constancia en una hora', pasos: ['Datos del DNI', 'Puesto y fecha de ingreso', 'Firma de Betty', 'Entrega a tiempo'] },
    },
  },
  {
    id: 'c6', t: '17:20', ch: 'llamada', who: null, titulo: 'Las últimas llamadas', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Antes de cerrar, devuelves las llamadas que quedaron pendientes en la cola. ${F.has('caso_proporcional') ? 'Betty ya le comunicó a Karina el cierre de su caso.' : 'El caso de Karina sigue en manos de Betty.'}</p>`,
    type: 'calls',
    calls: [['Valentina Ancajima', 'Contesta: pregunta por su nombre en la boleta', '¿La boleta va a salir con mi otro nombre siempre, señorita?'], ['Rosa Chiroque', 'Contesta: agradece', 'Mi hijito ya está bien. Gracias por no apurarme el martes. El maestro me guardó la masa madre.'], ['Karina Zapata', 'Contesta', 'Señorita… Betty ya habló conmigo. Me puedo quedar en mi caja. Gracias.']],
    prompt: 'Valentina pregunta si su boleta siempre llevará el nombre del DNI. ¿Qué le respondes?',
    choices: [
      { id: 'a', label: 'Explicarle que la boleta, el contrato y el T-Registro van con el nombre del DNI porque son documentos oficiales, que en la tienda seguirá siendo Valentina, y ofrecerle hablar con calma si lo necesita.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 },
          out: 'Valentina se queda callada un momento. «Ya, señorita. Al menos aquí me dicen Valentina.» Antes de colgar, te cuenta que su mamá fue a la apertura y le compró pan a don Teodoro.',
          pro: { ok: 'Le dices la verdad sobre lo oficial y cuidas lo que sí depende de la empresa.', info: 'Revisa que en el cuadro de turnos y en el grupo también figure como Valentina.' },
          kusi: ['feliz', 'Verdad con cariño.'] } },
      { id: 'b', label: 'Decirle que lo vas a cambiar en el sistema de planillas.',
        res: { q: 'riesgosa', fx: { confianza: -3, cumplimiento: -2 },
          out: 'César te escribe a los diez minutos: «¿Cambiar el nombre en planilla? No se puede: va como el DNI». Ahora tienes que volver a llamar a Valentina.',
          pro: { ok: 'Quieres ayudarla.', risk: 'Prometer algo que no se puede hacer en un documento oficial le quita credibilidad a RR.HH.' },
          kusi: ['preocupado', 'Eso no se podía prometer.'] } },
      { id: 'c', label: 'Decirle que es un tema del sistema y que no hay nada que hacer.',
        res: { q: 'aceptable', fx: { personas: -2 },
          out: 'Valentina dice «ya» y cuelga rápido. Es la misma respuesta que ha escuchado toda su vida.',
          pro: { ok: 'Es técnicamente cierto.', risk: 'Sin explicar lo que sí se puede hacer, la respuesta suena a portazo.' },
          kusi: ['triste', 'Cierto, pero frío.'] } },
    ],
    rules: [[BP, 'Explica qué es oficial y qué depende de la empresa. Y cuida lo que sí depende de ti.']],
    mirada: {
      ve: 'Al final del día llegan las llamadas que no son urgentes, pero que importan: un gracias, una duda sobre un nombre, un «me puedo quedar en mi caja». Ese también es el trabajo: cerrar los ciclos que abriste.',
      visual: { tipo: 'flujo', titulo: 'Dónde va cada nombre', pasos: ['Boleta: nombre del DNI', 'Contrato y T-Registro: nombre del DNI', 'Credencial: Valentina', 'En la tienda: Valentina'] },
    },
  },
];
