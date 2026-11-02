// Practicante de RR.HH. · Capítulo 9 · «Día de pago» · Semana 2, jueves.
// Hilo de la quincena: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias. Hoy cobran su primera quincena.
// Normas citadas (sin investigación nueva: ya verificadas en capítulos anteriores):
// - D.S. 001-98-TR: la boleta de pago se entrega al trabajador a más tardar el tercer día hábil siguiente al pago;
//   la boleta electrónica requiere autorización previa del trabajador (modificación del D.S. 009-2011-TR).
//   https://modelo.pe/solicitud-de-entrega-de-boletas-de-pago-al-empleador/
//   https://noticierocontable.com/?p=39445
// - D.S. 007-2002-TR, art. 8: el trabajo entre las 22:00 y las 06:00 no se paga por debajo de la RMV más 35%.
//   https://modelo.pe/demanda-de-pago-de-sobretasa-por-trabajo-en-horario-nocturno-nlpt/
// - Ley 29733, de Protección de Datos Personales (la boleta y la imagen de una persona son datos personales). Texto en SPIJ: https://spij.minjus.gob.pe/

export const CAP = {
  n: 9, titulo: 'Día de pago', dia: 'Semana 2, jueves', foto: 'assets/3d/scenes/boleta.webp',
  lugar: 'Hilandería Andina · Ventanilla de RR.HH.',
  inicio: '07:20', fin: '20:00', cierreHora: '19:20',
  apertura: 'Jueves 15. Las 40 nuevas cobran hoy su primera quincena, y tu propuesta dice que cada una entenderá su boleta.', boton: 'Abrir las boletas',
  kusi: 'Hoy tu propuesta se prueba en la vida real. ¡Con paciencia y con cuidado!',
  lead: 'Revisaste boletas antes de entregarlas, las explicaste sin exponer a nadie, atendiste un reclamo con método, peleaste un reintegro y cuidaste la imagen de las trabajadoras ante el cliente.',
  reflexion: '¿Qué aprendiste hoy de lo que significa un sueldo para quien lo recibe?',
  siguiente: { n: 10, titulo: 'El contenedor sale', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'boletas', p: 'Primeras boletas de las nuevas', j: 'Planillas · RR.HH.', d: 0, e: '40 boletas por entregar' },
  { id: 'propuesta', p: 'Piloto de madrinas', j: 'Carla · Don Teófilo', d: 0, e: 'Empieza el lunes' },
  { id: 'reclamos', p: 'Consultas del día de pago', j: 'RR.HH.', d: 0, e: 'Ventanilla abierta hasta las 18:00' },
  { id: 'plan', p: 'Plan de acción de la auditoría', j: 'Carla · Gerencia', d: 0, e: 'Se envía mañana' },
  { id: 'evaluacion', p: 'Tu evaluación de prácticas', j: 'Carla · RR.HH.', d: 0, e: 'Mañana' },
];

export const FUTURO = {
  boleta_revisada: ['Revisaste las boletas antes de entregarlas y encontraste lo que faltaba.', 'Carla lo mencionará en tu evaluación del capítulo 10.'],
  boleta_sin_revisar: ['Entregaste boletas sin revisarlas.', 'Alguna volverá a la ventanilla. Capítulo 10.'],
  explicacion_privada: ['Explicaste cada primera boleta en privado, en diez minutos.', 'El piloto empieza con una acción que ya funciona. Capítulo 10.'],
  boletas_expuestas: ['Usaste una boleta real como ejemplo delante de todas.', 'Capítulo 10.'],
  reclamo_metodo: ['Atendiste un reclamo de pago con método, sin defender ni prometer a ciegas.', 'Capítulo 10.'],
  reintegro_rosa: ['Conseguiste que a Rosa le paguen ya la sobretasa nocturna que faltaba.', 'Capítulo 10.'],
  reintegro_tarde: ['La sobretasa nocturna de Rosa quedó para la siguiente quincena, sin avisarle.', 'Capítulo 10.'],
  javier_incluido: ['Invitaste a Javier a la mesa de las tejedoras.', 'Capítulo 10.'],
  reporte_pago: ['Le enviaste a Carla un reporte del día de pago con cifras.', 'Capítulo 10.'],
  fotos_consentimiento: ['Las fotos para la tienda se toman solo con consentimiento escrito.', 'Capítulo 10.'],
  fotos_sin_permiso: ['Mandaste fotos de trabajadoras con sus nombres sin preguntarles.', 'Capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria · tejido', who: 'rosa' },
  justina: { n: 'Sra. Justina Mamani', sub: 'Supervisora de urdido · madrina', c: '#9C6B30' },
};

export const WSP = [
  { chat: 'grupo', t: '07:25', de: 'Carla', txt: 'Hoy es día de pago 💸 Ventanilla abierta todo el día. Paciencia con todas, que es su primera boleta.' },
  { chat: 'diego', t: '07:30', de: 'Diego', txt: 'Las boletas ya están en tu bandeja. Esta vez con doble control, como dijiste 😅', si: 'control_doble' },
  { chat: 'diego', t: '07:30', de: 'Diego', txt: 'Las boletas ya están en tu bandeja. Revísalas, que el sistema se colgó dos veces anoche 😬', no: 'control_doble' },
  { chat: 'justina', t: '09:40', de: 'Justina', txt: 'Hijita, ¿puedo estar cuando les expliques la boleta a mis ahijadas? Solo si ellas quieren.', si: 'justina_madrina' },
  { chat: 'teofilo', t: '12:20', de: 'Don Teófilo', txt: 'Mañana sale el contenedor a las 12:00. Hoy nadie se me va temprano, ¿ya?' },
  { chat: 'rosa', t: '16:10', de: 'Rosa', txt: 'Señorita, ya entendí mi boleta. Hasta le expliqué a mi prima lo de la AFP 😊', si: 'explicacion_privada' },
  { chat: 'carla', t: '19:10', de: 'Carla', txt: 'Mañana es tu evaluación. Hoy duerme. Lo de hoy estuvo bien hecho.', si: 'reporte_pago' },
];

export const CORREOS = [
  { t: '07:35', de: 'Planillas', para: 'RR.HH.', asunto: 'Boletas de la primera quincena · ingresos nuevos', html: '<p>Adjuntamos las boletas de los ingresos nuevos. El abono en cuenta se hace hoy a las 10:00. Las boletas impresas se entregan con firma de cargo.</p>' },
  { t: '16:45', de: 'Equipo de sostenibilidad · tienda de Hamburgo', para: 'RR.HH. Hilandería Andina', asunto: 'Fotos para nuestro reporte', html: '<p>Nos encantaría incluir en nuestro reporte de sostenibilidad fotos de las nuevas operarias con su nombre y su historia. ¿Podrían enviarlas hoy?</p>' },
];

export const QUIZ = [
  { q: '¿Hasta cuándo debe entregarse la boleta de pago?', ops: ['Cuando el trabajador la pida', 'A más tardar el tercer día hábil siguiente al pago', 'Al final del año', 'No es obligatorio entregarla'], ok: 1, por: 'El D.S. 001-98-TR fija la entrega hasta el tercer día hábil siguiente a la fecha de pago.' },
  { q: '¿Se puede enviar la boleta solo por correo electrónico?', ops: ['Sí, siempre', 'Solo si el trabajador lo autorizó antes', 'Solo a los jefes', 'Nunca'], ok: 1, por: 'La boleta electrónica requiere la autorización previa del trabajador.' },
  { q: 'Rosa trabajó tres noches y su boleta no tiene sobretasa nocturna. ¿Qué haces?', ops: ['Nada: ya se pagó', 'Lo verificas y pides que se le pague la diferencia cuanto antes, avisándole', 'Le dices que reclame ella', 'Esperas a la próxima quincena sin decirle'], ok: 1, por: 'El trabajo nocturno no puede pagarse por debajo de la RMV más 35%. Un error en contra de la trabajadora se corrige rápido y se explica.' },
  { q: 'Para explicar la boleta a las nuevas, ¿qué es lo correcto?', ops: ['Proyectar la boleta real de una de ellas', 'Explicar a cada una la suya, en privado, o usar un ejemplo ficticio', 'Pegar las boletas en el mural', 'Que se las expliquen entre ellas'], ok: 1, por: 'La boleta es un dato personal: se explica en privado o con un ejemplo inventado.' },
  { q: 'El cliente pide fotos de las trabajadoras con su nombre. ¿Qué corresponde?', ops: ['Mandarlas: es el cliente', 'Pedir consentimiento escrito y voluntario a cada persona', 'Mandarlas sin nombres pero con su área y su historia', 'Tomarlas sin avisar'], ok: 1, por: 'La imagen y la historia de una persona son datos personales. Se usan solo con su consentimiento.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '07:40', ch: 'documento', who: null, titulo: 'La boleta de Rosa', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Las boletas impresas están en una caja de zapatos sobre tu escritorio. Antes de entregarlas, decides revisar unas cuantas al azar. La primera es la de Rosa.</p><p>${F.has('rosa_se_queda') ? 'Desde ayer trabaja de día, pero el fin de semana hizo tres noches. ' : 'Rosa hizo tres noches desde que entró a la línea. '}<mark class="clave">Lees cada línea como si fuera tu sueldo</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal o lo que debe corregirse antes de entregar la boleta.',
    doc: { t: 'Boleta de pago · Primera quincena', sub: 'Rosa Huamaní · Operaria de tejido · Ingreso: jueves de la semana 1' },
    lines: [
      { id: 'basico', t: 'Remuneración básica, proporcional a los días desde su ingreso.' },
      { id: 'nocturna', t: 'Sobretasa nocturna: no figura. Turno registrado en el sistema: «día».', bad: LEY, why: 'Rosa trabajó tres noches. El trabajo nocturno no puede pagarse por debajo de la RMV más 35%. El sistema la tenía con el turno por defecto.' },
      { id: 'pension', t: 'Descuento: aporte al sistema de pensiones.', duda: 'Es un descuento de ley. Lo importante es que corresponda al sistema que ella eligió.' },
      { id: 'uniforme', t: 'Descuento: «uniforme y mascarilla», sin sustento.', bad: BP, why: 'Un descuento que no viene de la ley ni tiene autorización escrita de la trabajadora no debe aplicarse. Y el equipo de protección lo entrega la empresa.' },
      { id: 'correo', t: 'Entrega: «boleta electrónica enviada al correo». Autorización: no figura.', bad: LEY, why: 'La boleta electrónica requiere que la trabajadora lo haya autorizado antes. Rosa ni siquiera tiene correo.' },
      { id: 'abono', t: 'Abono en cuenta sueldo: hoy, 10:00.' },
      { id: 'cargo', t: 'Constancia de entrega: firma de la trabajadora.', duda: 'Correcto: la boleta impresa se entrega con firma de cargo.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Pones la boleta de Rosa en la pila de «listas». Mañana alguien se dará cuenta de que le faltan sus noches.' : 'Separas la boleta de Rosa con un clip rojo y revisas otras diez. Encuentras el mismo descuento de «uniforme» en seis. Llamas a Diego antes de que llegue la primera operaria.',
      flags: [missLey ? 'boleta_sin_revisar' : 'boleta_revisada'], cartera: { boletas: missLey ? '40 boletas, sin revisar' : '7 boletas observadas antes de entregar' },
      pro: { ok: 'Revisar una muestra antes de entregar evita colas de reclamos.', risk: 'Un error que se repite en varias boletas suele venir de una configuración del sistema.', info: 'Pregunta a Planillas quién cargó el descuento de uniforme y con qué sustento.' },
      kusi: missLey ? ['preocupado', 'A Rosa le faltan sus noches…'] : ['celebra', '¡Lo viste antes que ella! Bacán.'],
    }),
    rules: [[LEY, 'El trabajo nocturno no se paga por debajo de la RMV más 35% (D.S. 007-2002-TR, art. 8).'], [LEY, 'La boleta electrónica requiere autorización previa del trabajador (D.S. 001-98-TR, modificado por el D.S. 009-2011-TR).']],
    mirada: {
      ve: 'Una primera boleta es la prueba de que la empresa cumple lo que prometió. Si llega con errores, la nueva confirma su peor sospecha: que la están engañando. Revisar antes de entregar es el control más barato que existe.',
      visual: { tipo: 'cambio', titulo: 'La boleta de Rosa, corregida', pares: [['Sin sobretasa nocturna', 'Tres noches con sobretasa'], ['Descuento de uniforme', 'Eliminado: no tiene sustento'], ['Enviada a un correo que no tiene', 'Impresa, con firma de cargo']] },
      normas: [{ ley: 'D.S. 001-98-TR', dice: 'La boleta se entrega a más tardar el tercer día hábil siguiente a la fecha de pago. La versión electrónica requiere autorización previa del trabajador.', practica: 'Enviar la boleta a un correo que la trabajadora no autorizó es como no entregarla.' }],
    },
  },
  {
    id: 'j2', t: '08:50', ch: 'presencial', who: null, titulo: 'Explicar la primera boleta', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala de capacitación', show: ['personas', 'etica', 'calidad'],
    body: (n, F) => `<p>Doce nuevas del grupo 1 esperan en la sala, todavía con pelusa de alpaca en el pelo. ${F.has('propuesta_solida') ? 'Es la primera acción de tu propuesta y la Gerencia la aprobó ayer.' : 'Carla te pidió probar lo de explicar la boleta.'}${F.has('salidas_anonimas') ? ' Piensas en Nely, que se fue porque nadie le explicó cuánto iba a cobrar.' : ''}</p><p>Tienes una hora. <mark class="clave">Decides cómo hacerlo</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicar una boleta ficticia en grupo, en cinco minutos, y luego a cada una la suya, en privado, en la mesa del fondo.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, tiempo: -2 }, rel: { rosa: 1 }, flags: ['explicacion_privada'],
          out: 'Con la boleta inventada de «María Pérez» explicas qué es cada descuento. Luego, una por una, en la mesa del fondo, cada nueva ve la suya. Una se ríe nerviosa: «Pensé que la AFP era una multa».',
          pro: { ok: 'Un ejemplo ficticio enseña a todas; la explicación privada respeta a cada una.', info: 'Deja la boleta de ejemplo pegada en la ventanilla: servirá a las del grupo 2.' },
          kusi: ['celebra', 'Todas entendieron y nadie quedó expuesta. ¡Qué divino!'] } },
      { id: 'b', label: 'Proyectar la boleta real de una voluntaria para que el ejemplo sea más claro y concreto para todas.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -2 }, flags: ['boletas_expuestas'],
          out: 'Edith levanta la mano para ser voluntaria. En la pantalla aparece su sueldo, su descuento judicial por alimentos y su número de cuenta. Ella no sabía que eso salía en la boleta.',
          pro: { ok: 'El ejemplo es real y concreto.', risk: 'Una voluntaria no sabe de antemano qué datos tiene su boleta. Un ejemplo ficticio enseña lo mismo.' },
          kusi: ['triste', 'Edith no sabía que eso iba a salir en pantalla…'] } },
      { id: 'c', label: 'Repartir las boletas con una hoja que explique cada concepto, y quedar disponible en la ventanilla.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: 2 },
          out: 'Todas se llevan la hoja. Tres pasan por la ventanilla. Las otras nueve se quedan con las dudas, como Nely.',
          pro: { ok: 'Respetas la privacidad y das un apoyo escrito.', risk: 'Quien no se atreve a preguntar en la sala, tampoco irá a la ventanilla.' },
          kusi: ['pensando', 'La hoja ayuda… pero no pregunta por ellas.'] } },
    ],
    rules: [[LEY, 'La boleta contiene datos personales: se explica en privado o con un ejemplo ficticio (Ley 29733).'], [BP, 'Explicar la primera boleta evita que una nueva confunda un descuento de ley con un engaño.']],
    mirada: {
      ve: 'Explicar la primera boleta parece poco, pero ataca una de las causas reales de salida: la sensación de que te están pagando mal. Hacerlo con un ejemplo ficticio y luego en privado combina lo pedagógico con el respeto por los datos de cada una.',
      visual: { tipo: 'flujo', titulo: 'La primera boleta, explicada', pasos: ['Boleta de ejemplo ficticia', 'Qué es cada descuento', 'Cada una ve la suya en privado', 'Firma de cargo', 'Ventanilla abierta'] },
    },
  },
  {
    id: 'j3', t: '10:40', ch: 'presencial', who: null, titulo: '«Me falta plata»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Ventanilla de RR.HH.', show: ['personas', 'calidad', 'cumplimiento'],
    body: () => `<p>Ya se hizo el abono. En la ventanilla aparece Kiara, de 19 años, de la segunda convocatoria, con el celular en la mano y la app del banco abierta. Le tiembla la voz.</p><p>«Señorita, me depositaron menos de lo que me dijeron. <mark class="clave">Me falta plata</mark>.»</p>`,
    type: 'secuencia', prompt: 'Ordena cómo atiendes un reclamo de pago. Usa las flechas.', boton: 'Atender así',
    items: [
      { id: 'escucha', t: 'Escucharla sin interrumpir: cuánto esperaba y por qué', por: 'Primero, entender qué le dijeron.' },
      { id: 'boleta', t: 'Revisar con ella su boleta, línea por línea', por: 'Muchas veces la diferencia es un descuento de ley.' },
      { id: 'asist', t: 'Contrastar con su registro de asistencia', por: 'Días, horas extra y turnos.' },
      { id: 'planillas', t: 'Confirmar con Planillas lo que no cuadre', por: 'No adivines: pregunta a quien calculó.' },
      { id: 'responde', t: 'Explicarle el resultado o corregir la diferencia', por: 'Con una fecha concreta si hay que pagar.' },
      { id: 'anota', t: 'Anotar el reclamo y cómo se resolvió', por: 'Así se ven los errores que se repiten.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : -1 },
        flags: q === 'buena' ? ['reclamo_metodo'] : [], cartera: { reclamos: q === 'buena' ? 'Kiara: explicado y anotado' : 'Kiara: atendida a medias' },
        out: q === 'buena' ? 'Kiara esperaba la quincena completa: entró un lunes y le pagaron desde ese día, más el descuento de pensiones. Y le habían cargado el «uniforme». Planillas lo devuelve mañana. Kiara se va con la fecha anotada en su mano.' : 'Le explicas el descuento de pensiones, pero no revisas el del uniforme. Kiara se va con la mitad de la respuesta.',
        pro: { ok: 'Un reclamo atendido con método se resuelve sin defensas ni promesas a ciegas.', risk: 'Decir «está bien así» sin revisar convierte un error del sistema en desconfianza.', info: 'Si el mismo error aparece en varias personas, avísale a Planillas una sola vez para todas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Kiara se fue tranquila. ¡Así se atiende!' : 'Faltó revisar todo con ella.'],
      };
    },
    rules: [[BP, 'Ante un reclamo de pago: escucha, revisa con la persona, confirma con Planillas y da una fecha.']],
    mirada: {
      ve: 'Para alguien de 19 años con su primer sueldo, una diferencia en el depósito es una angustia real. La mayoría de reclamos se resuelven explicando; algunos destapan errores del sistema. Atenderlos con método protege a la persona y a la empresa.',
      visual: { tipo: 'embudo', titulo: 'Reclamos del día de pago', niveles: [['Consultas en la ventanilla', 9], ['Eran descuentos de ley', 5], ['Eran errores del sistema', 4], ['Corregidos con fecha', 4]] },
    },
  },
  {
    id: 'j4', t: '11:50', ch: 'presencial', who: 'diego', titulo: 'Las noches de Rosa', banner: 'assets/foto2/revisan.webp', lugar: 'Oficina de Contabilidad', show: ['cumplimiento', 'personas', 'confianza'],
    body: (n, F) => `<p>Vas a Planillas con la boleta de Rosa ${F.has('boleta_revisada') ? 'y tu clip rojo' : 'después de que ella misma vino a preguntar por sus noches'}. Diego revisa el sistema: Rosa figuraba con turno de día por defecto.</p><p>La jefa de Diego dice desde su escritorio: «Se lo regularizamos en la próxima quincena. <mark class="clave">Hoy no se reabre nada</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedir a Carla que se apruebe hoy un pago aparte por la diferencia, y avisarle a Rosa cuándo lo recibe.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 5, tiempo: -2 }, rel: { carla: 1, rosa: 1 }, flags: ['reintegro_rosa'],
          out: 'Carla llama a la jefa de Planillas. Diez minutos después, el reintegro está programado para el lunes. Le escribes a Rosa: «Te faltaba la sobretasa de tus tres noches. El lunes te llega. Disculpa el error».',
          pro: { ok: 'Un error en contra de la trabajadora se corrige rápido y se le explica.', risk: 'Presionar a Planillas tiene un costo. Hazlo una vez, con el dato exacto.', info: 'Pide que revisen el turno de todas las que rotaron de noche: el error puede repetirse.' },
          kusi: ['celebra', 'Las noches de Rosa sí cuentan. ¡Bien!'] } },
      { id: 'b', label: 'Aceptarlo: la próxima quincena está cerca y no quieres pelearte con Planillas el día de pago.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: -4 }, flags: ['reintegro_tarde'],
          out: 'Rosa cobra hoy sin sus noches y nadie le dice nada. Su prima le pregunta por qué cobró menos que otra compañera que también hizo noches.',
          pro: { ok: 'Evitas un conflicto con Planillas.', risk: 'Que se pague después no reemplaza decirle hoy qué pasó y cuándo lo recibirá.' },
          kusi: ['triste', 'Nadie le explicó a Rosa…'] } },
      { id: 'c', label: 'Decirle a Rosa que pase por Planillas a reclamar.',
        res: { q: 'aceptable', fx: { personas: -1 },
          out: 'Rosa va. Espera media hora. La jefa de Diego le dice «próxima quincena». Rosa vuelve a tu ventanilla sin saber si eso está bien.',
          pro: { ok: 'Rosa queda informada.', risk: 'Mandar a la trabajadora a reclamar un error de la empresa le traslada una carga que no le toca.' },
          kusi: ['pensando', 'Rosa tuvo que pelearlo sola…'] } },
    ],
    rules: [[LEY, 'El trabajo nocturno no se paga por debajo de la RMV más 35% (D.S. 007-2002-TR, art. 8).'], [BP, 'Si el error es de la empresa, la empresa lo corrige y lo explica; no la trabajadora.']],
    mirada: {
      ve: 'En el día de pago, cada área quiere cerrar rápido. Pero un error que perjudica a una trabajadora no espera a la próxima quincena sin explicación. Lo profesional es corregir con la menor demora posible y decirle a la persona qué pasó y cuándo recibirá lo que le falta.',
      visual: { tipo: 'balanza', a: { t: 'Regularizar después', items: ['Planillas no reabre nada', 'Día de pago sin conflictos'] }, b: { t: 'Reintegro con aviso', items: ['Rosa recibe lo que trabajó', 'Sabe qué pasó y cuándo', 'Se revisan las demás que rotaron'] } },
    },
  },
  {
    id: 'j5', t: '13:00', ch: 'presencial', who: null, titulo: 'La mesa del comedor', banner: 'assets/foto/cafe.webp', lugar: 'Comedor de la planta', show: ['personas'],
    body: (n, F) => `<p>Hoy hay rocoto relleno con pastel de papa. Las tejedoras ocupan la mesa larga entre risas en quechua y castellano.</p><p>${F.has('preseleccion_diversa') ? 'Javier, el tejedor que postuló a «operarias»,' : 'Ronald, un operario nuevo de acabados,'} come solo en una esquina, con el táper cerrado. <mark class="clave">Es el único hombre de su grupo</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Invitarlo a sentarse con ustedes en la mesa larga.',
        res: { q: null, fx: { personas: 3 }, flags: ['javier_incluido'], out: 'Llega con su táper, un poco tímido. Edith le pregunta de dónde es: de Ayaviri. A los cinco minutos, la mesa entera le está explicando cómo se dice «remallar» en quechua.', kusi: ['feliz', 'Una silla más y ya es parte del grupo.'] } },
      { id: 'b', label: 'Dejarlo tranquilo: quizá prefiere comer solo.',
        res: { q: null, fx: { tiempo: 1 }, out: 'Termina rápido y vuelve a la línea antes que nadie. Quizá prefería estar solo. Quizá no.', kusi: ['pensando', '¿Le preguntaste?'] } },
    ],
    mirada: { ve: 'La inclusión también pasa en el comedor. Ser el único hombre en un grupo de tejedoras, o la única mujer en un taller de mecánicos, puede sentirse igual de solitario. Una invitación sencilla a veces vale más que una política.' },
  },
  {
    id: 'j6', t: '16:00', ch: 'whatsapp', who: null, titulo: 'El reporte del día de pago', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    body: () => `<p>La ventanilla se calmó. Te duele la espalda de estar de pie y tienes la garganta seca de tanto explicar.</p><p>Carla prepara el plan de acción para la auditoría y <mark class="clave">quiere saber cómo salió la primera prueba de tu propuesta</mark>.</p>`,
    type: 'compose', enviaA: 'carla', para: 'Para: Carla Zegarra · Jefa de RR.HH.', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cifra', t: 'El resultado', ops: [
        { id: 'c1', t: 'Carla, las 12 del grupo 1 vieron su boleta en privado. Atendí 9 consultas en la ventanilla.', ok: true, por: 'Cifras concretas del día.' },
        { id: 'c2', t: 'Carla, salió súper bien, todas felices.', ok: false, por: '«Todas felices» no se puede verificar ni usar en un plan.' },
      ] },
      { id: 'error', t: 'Lo que encontraste', ops: [
        { id: 'e1', t: 'Hallazgo: el sistema cargó un descuento de «uniforme» sin sustento en varias boletas y dejó sin sobretasa nocturna a quien rotó de noche.', ok: true, por: 'Un error de sistema que afecta a varias se reporta como patrón.' },
        { id: 'e2', t: 'Hubo unos detalles con Planillas, pero ya está.', ok: false, por: 'Esconde un error que puede repetirse en la próxima quincena.' },
      ] },
      { id: 'pide', t: 'Qué propones', ops: [
        { id: 'p1', t: '¿Lo sumamos al plan de acción de la auditoría como control de la primera boleta?', ok: true, por: 'Conectas lo de hoy con lo que ya se prometió.' },
        { id: 'p2', t: 'Mañana te cuento más.', ok: null, por: 'Correcto, pero no avanza nada hoy.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'e1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -2, calidad: q === 'buena' ? 3 : 0 }, rel: { carla: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['reporte_pago'] : [],
        out: q === 'buena' ? 'Carla responde: «Lo agrego al plan como acción 4: revisión de primeras boletas antes de entregarlas. Responsable: tú, hasta que termines tus prácticas».' : q === 'aceptable' ? 'Carla responde: «Ok. Mañana lo vemos con calma».' : 'Carla responde: «¿Qué detalles?». Tienes que llamarla para explicarle.',
        pro: { ok: 'Un hallazgo de hoy, conectado a un plan ya comprometido, se vuelve un control permanente.', risk: 'Lo que se reporta como «detalle» no entra a ningún plan.', info: 'Cuenta cuántas boletas tenían el mismo error: el número convence.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tu hallazgo entró al plan!' : 'Con cifras se entiende mejor.'],
      };
    },
    rules: [[BP, 'Reporta los errores que se repiten como patrón y conéctalos con un control.']],
    mirada: {
      ve: 'El día de pago es una auditoría pequeña que ocurre cada quincena. Lo que encuentras en la ventanilla dice cómo funciona el sistema por dentro. Reportarlo con cifras y conectarlo con el plan de la auditoría hace que el aprendizaje no dependa de que tú estés.',
      visual: { tipo: 'mensaje', titulo: 'Del día de pago al plan de acción', txt: 'Las 12 del grupo 1 vieron su boleta en privado. Atendí 9 consultas. Hallazgo: un descuento de uniforme sin sustento y la sobretasa nocturna faltante a quien rotó de noche. ¿Lo sumamos al plan de acción como control de la primera boleta?' },
    },
  },
  {
    id: 'j7', t: '17:10', ch: 'correo', who: null, titulo: 'Fotos para Hamburgo', banner: 'assets/foto2/tablet-equipo.webp', show: ['etica', 'cumplimiento', 'personas'],
    mail: { from: 'Equipo de sostenibilidad · tienda de Hamburgo', to: 'RR.HH. Hilandería Andina', asunto: 'Fotos para nuestro reporte' },
    body: (n, F) => `<p>Nos encantaría incluir en nuestro reporte de sostenibilidad fotos de las nuevas operarias, con su nombre y su historia. ${F.has('hallazgo_asumido') ? 'Nos impresionó la transparencia del equipo en la auditoría.' : 'Queremos mostrar el impacto social del pedido.'}</p><p><mark class="clave">¿Podrían enviarlas hoy?</mark></p><p>Con cariño, el equipo de sostenibilidad</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder que sí, pero solo de quienes acepten por escrito, explicándoles para qué se usará, y no hoy sino la próxima semana.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, tiempo: -1 }, flags: ['fotos_consentimiento'],
          responde: 'Con gusto. Para hacerlo bien, cada trabajadora decidirá si quiere participar y firmará un consentimiento que explique dónde y para qué se usará su foto y su historia. Podremos enviarles las fotos de quienes acepten la próxima semana.',
          out: 'La tienda responde: «Perfecto, así lo preferimos». Al día siguiente, Edith y Javier se ofrecen. Rosa dice que prefiere que no salga su cara.',
          pro: { ok: 'Respetas al cliente y a cada persona, y el resultado es más honesto.', info: 'El consentimiento debe ser libre: que nadie sienta que decir que no le afecta su trabajo.' },
          kusi: ['celebra', 'Con permiso, todo se ve mejor. ¡Bacán!'] } },
      { id: 'b', label: 'Enviar hoy las fotos de la credencial con nombres e historias de los legajos: es el cliente más importante del año.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 }, flags: ['fotos_sin_permiso'],
          responde: 'Adjuntamos fotos y una breve historia de cada una de las 40 nuevas operarias.',
          out: 'La tienda publica las historias. En una aparece que Rosa es madre sola y que su hijo se quedaba solo en las noches. Rosa se entera por su prima, que lo vio en internet.',
          pro: { ok: 'El cliente queda contento hoy.', risk: 'Usar fotos y datos de los legajos para otra finalidad, sin consentimiento, expone a las personas y a la empresa.' },
          kusi: ['indignado', '¡Nadie le preguntó a Rosa!'] } },
      { id: 'c', label: 'Responder que por protección de datos no se pueden enviar fotos.',
        res: { q: 'aceptable', fx: { etica: 2, personas: -1 },
          responde: 'Lamentablemente, por protección de datos personales no podemos enviar fotos de nuestras trabajadoras.',
          out: 'La tienda responde: «Entendemos». Edith, que quería salir en el reporte, se entera después y se desilusiona: «¿Y a mí nadie me preguntó?».',
          pro: { ok: 'Proteges los datos.', risk: 'La protección de datos no prohíbe usar fotos: exige consentimiento. Decir que no a todo también quita una decisión a cada persona.' },
          kusi: ['pensando', 'Edith sí quería salir…'] } },
    ],
    rules: [[LEY, 'La imagen y la historia de una persona son datos personales: se usan con su consentimiento y para la finalidad informada (Ley 29733).']],
    mirada: {
      ve: 'Un cliente con buenas intenciones también puede pedir algo que expone a las personas. Las fotos de una credencial y las historias de un legajo se entregaron para otra finalidad. Preguntarle a cada una si quiere contar su historia convierte una exposición en un orgullo elegido.',
      visual: { tipo: 'balanza', a: { t: 'Enviar hoy', items: ['Cliente contento', 'Fotos de la credencial', 'Historias del legajo'] }, b: { t: 'Con consentimiento', items: ['Cada una decide', 'Sabe dónde saldrá', 'Rosa puede decir que no'] } },
    },
  },
];
