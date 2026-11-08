// Generalista de RR.HH. en operación minera · Capítulo 7 · «El bloqueo» · Semana 2, martes.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas:
// - D.S. 007-2002-TR (TUO de la Ley de jornada de trabajo, horario y trabajo en sobretiempo), art. 9: el trabajo en
//   sobretiempo es voluntario; excepcionalmente es obligatorio cuando resulta indispensable por caso fortuito o fuerza
//   mayor que ponga en peligro inminente a las personas, los bienes o la continuidad de la actividad productiva.
//   Reglamento: D.S. 008-2002-TR. No se citan sobretasas.
//   https://lpderecho.pe/horas-extras-derecho-laboral
//   https://img.lpderecho.pe/wp-content/uploads/2021/05/Casacion-Laboral-12439-2017-La-Libertad-LP.pdf
// - D.S. 007-2002-TR (jornadas atípicas), ya citado en el capítulo 1.

export const CAP = {
  n: 7, titulo: 'El bloqueo', dia: 'Semana 2, martes', foto: 'assets/esc/camino.webp',
  lugar: 'Carretera de acceso · km 42 · Apurímac',
  inicio: '05:30', fin: '21:00', cierreHora: '20:45',
  apertura: 'Tu día 9 de 14. A las 5:10 ya hay piedras, troncos y una bandera de la comunidad en el km 42. Nadie sube, nadie baja. Percy maneja la camioneta en silencio hacia la carretera.', boton: 'Bajar de la camioneta',
  kusi: 'En una crisis, lo primero es la gente. Lo segundo, no empeorarla.',
  lead: 'Escuchaste a los jóvenes en el bloqueo, frenaste el pedido de desbloqueo por la fuerza, ordenaste las prioridades del campamento, corregiste un plan de continuidad ilegal y conseguiste una ventana humanitaria.',
  reflexion: '¿Qué se puede negociar en un bloqueo y qué no?',
  siguiente: { n: 8, titulo: 'Varados', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'bloqueo', p: 'Bloqueo de la carretera', j: 'Percy · Doña Juana', d: 0, e: 'Desde las 5:00' },
  { id: 'campamento', p: 'Personas en el campamento', j: 'RR.HH. · Seguridad', d: 0, e: '900 arriba' },
  { id: 'turnos', p: 'Relevo de la guardia B', j: 'Operaciones', d: 0, e: 'No pueden bajar' },
  { id: 'familias', p: 'Familias que preguntan', j: 'RR.HH.', d: 0, e: 'Llamadas sin parar' },
];

export const FUTURO = {
  dialogo_sin_fuerza: ['Pediste no desbloquear por la fuerza mientras hubiera diálogo.', 'La comunidad lo sabrá y aceptará sentarse el jueves.'],
  pidio_policia: ['Apoyaste el pedido de desbloqueo policial.', 'La comunidad endurecerá su posición en la mesa.'],
  promesa_sin_respaldo: ['Firmaste un compromiso sin autorización de Lima.', 'Lima te desautorizará el jueves en la mesa.'],
  sobretiempo_legal: ['Corregiste el plan de continuidad: sobretiempo justificado, registrado y pagado.', 'Los varados confiarán en ti mañana.'],
  ventana_humanitaria: ['Conseguiste paso para ambulancias y para personas con urgencias médicas.', 'Mañana habrá que decidir quién baja por esa ventana.'],
  familias_informadas: ['Escribiste a las familias qué pasa y cómo están.', 'Las llamadas bajarán a la mitad.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  presidenta: { n: 'Doña Juana Huamán', sub: 'Presidenta de la comunidad', who: 'presidenta' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de Movitierra', who: 'contratista' },
  familias: { n: 'Familias Minera Puquio', sub: 'Grupo informativo · 612 participantes', c: '#2F6B3F' },
  valdivia: { n: 'Ing. Rodrigo Valdivia', sub: 'Superintendente de Operaciones Mina', c: '#4A5A8A' },
};

export const WSP = [
  { chat: 'yuri', t: '05:20', de: 'Yuri', txt: 'Ingeniera, mi primo Brayan está en el bloqueo. Es de los que no pasaron por los lentes. Está bravo, pero escucha.' },
  { chat: 'valdivia', t: '06:50', de: 'Valdivia', txt: 'Ya hablé con la comisaría de la provincia. Si no abren a las 10, que intervengan. No podemos parar.' },
  { chat: 'contratista', t: '08:30', de: 'Ing. Salas', txt: 'Ingeniera, mis 46 hombres están preguntando qué hacemos. ¿Paramos el frente o seguimos? Yo hago lo que diga la minera.', si: 'salas_aliado' },
  { chat: 'contratista', t: '08:30', de: 'Ing. Salas', txt: 'Ingeniera, mis 46 preguntan si les van a pagar los días de bloqueo. Yo no tengo cómo.', no: 'salas_aliado' },
  { chat: 'familias', t: '12:00', de: 'Señora Marleny', txt: '¿Alguien sabe algo? Mi esposo tenía que bajar hoy, es su día 14. No contesta.' },
  { chat: 'presidenta', t: '18:40', de: 'Doña Juana', txt: 'Las ambulancias pasan. Lo demás, el jueves en la mesa. Que venga alguien de Lima que pueda firmar.', si: 'ventana_humanitaria' },
];

export const CORREOS = [
  { t: '07:00', de: 'Gerencia General · Lima', para: 'Percy Huillca; Generalista de RR.HH. · Campo', asunto: 'RE: Bloqueo km 42', html: '<p>Prioridad: seguridad de las personas. Pueden ofrecer una mesa de diálogo el jueves con presencia de la Gerencia de Relaciones Comunitarias. No firmen compromisos sin aprobación.</p>' },
  { t: '13:30', de: 'Ing. Rodrigo Valdivia · Operaciones Mina', para: 'RR.HH. · Supervisores', asunto: 'Plan de continuidad operativa', html: '<p>Adjunto plan. Se aplica desde hoy hasta que se abra la carretera.</p>' },
];

export const QUIZ = [
  { q: 'El trabajo en sobretiempo, según el D.S. 007-2002-TR…', ops: ['Siempre es obligatorio en minería', 'Es voluntario; excepcionalmente obligatorio por caso fortuito o fuerza mayor que ponga en peligro inminente a personas, bienes o la continuidad productiva', 'No se paga en un bloqueo', 'Lo decide el supervisor sin límites'], ok: 1, por: 'El art. 9 del D.S. 007-2002-TR establece la regla y su excepción.' },
  { q: 'Si el sobretiempo es obligatorio por fuerza mayor…', ops: ['Se trabaja gratis', 'Se sigue registrando y pagando como sobretiempo', 'Se descuenta de las vacaciones', 'No se registra'], ok: 1, por: 'Que sea obligatorio no lo convierte en trabajo no pagado.' },
  { q: 'Operaciones quiere pedir el desbloqueo policial a las 10. ¿Qué haces?', ops: ['Lo apoyas: la operación no puede parar', 'Planteas que, mientras haya diálogo posible y nadie esté en peligro, la fuerza agrava la crisis', 'No opinas', 'Llamas tú a la policía'], ok: 1, por: 'En conflictos sociales, la fuerza suele endurecer posiciones y poner vidas en riesgo.' },
  { q: 'En un bloqueo, ¿qué es lo primero que ordena RR.HH. en el campamento?', ops: ['El mural de cumpleaños', 'Conteo de personas, víveres, medicinas y comunicación con las familias', 'El reporte de asistencia para Lima', 'Las vacaciones del próximo mes'], ok: 1, por: 'La gente encerrada en un campamento necesita saber que alguien cuida lo básico.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '05:50', ch: 'presencial', who: null, titulo: 'El km 42', banner: 'assets/esc/camino.webp', lugar: 'Carretera de acceso · km 42', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Hace siete bajo cero. Hay unas cincuenta personas alrededor de una fogata, con frazadas y ollas de mate. Brayan Huillca, el primo de Yuri, se acerca con los brazos cruzados. ${F.has('ruta_todavia') ? 'Lleva en la mano la hoja de la campaña de lentes.' : 'Lleva puestos unos lentes prestados.'}</p><p>«¿Usted es la de RR.HH.? <mark class="clave">Nosotros no queremos pelear. Queremos que nos escuchen</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Brayan.',
    opts: [
      { id: 'que', label: '«¿Qué tendría que pasar para que se abra la carretera?»', info: '«Que alguien de Lima firme que en la licitación se respeta a los comuneros. Y que paren de contar el 30 % como les conviene.»' },
      { id: 'por', label: '«¿Por qué tú estás aquí?»', info: '«Porque volví de Lima sin nada. Porque mi tío Teodoro no puede subir. Porque si las contratistas cambian, los que tienen trabajo lo pierden. Esto no es por mí nomás.»' },
      { id: 'pasar', label: '«¿Dejarían pasar una ambulancia si hace falta?»', info: 'Brayan duda. «Eso lo decide la asamblea. Pero nadie quiere que se muera nadie, señorita. Pregúntele a Doña Juana.»' },
      { id: 'ley', label: '«¿Saben que bloquear una carretera es un delito?»', info: 'Brayan se ríe sin ganas. «¿Y no cumplir un convenio no es nada?» Dos jóvenes se acercan a escuchar, ya no tan tranquilos.' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('ley') ? -4 : 3, personas: 2 }, rel: { presidenta: picks.includes('ley') ? -1 : 1 },
      out: picks.includes('ley') ? 'La conversación se tensa. Percy te toca el brazo: «Vámonos un rato». Desde la fogata, alguien grita algo en quechua que nadie traduce.' : picks.includes('pasar') ? 'Brayan señala a Doña Juana, que habla con los mayores junto a la bandera. Ya tienes una puerta para lo humanitario.' : 'Brayan te mira un momento largo. «Usted sí pregunta.» Y vuelve a la fogata.',
      kusi: picks.includes('ley') ? ['preocupado', 'Amenazar no abre carreteras.'] : ['curioso', 'Ya sabes qué piden.'],
    }),
    rules: [[BP, 'En un bloqueo, primero entiende qué piden y qué aceptarían. Las amenazas llegan solas.']],
    mirada: {
      ve: 'Detrás de las piedras hay personas con historias concretas: un joven que volvió de Lima sin trabajo, un tío que no pasó el examen, un convenio que nadie aclaró. Escucharlas no es ceder: es saber qué hay que resolver.',
      visual: { tipo: 'flujo', titulo: 'Lo que hay detrás del bloqueo', pasos: ['Rumor de despidos', 'Contratistas en licitación', 'Conteo del 30 %', 'Jóvenes sin trabajo', 'Piedras en el km 42'] },
    },
  },
  {
    id: 'h2', t: '07:30', ch: 'llamada', who: null, titulo: '«Que intervenga la policía»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Camioneta de RR.HH., km 42', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Valdivia llama por el altavoz de la camioneta. «Tengo 900 personas, combustible para cuatro días y un contrato de venta. Ya hablé con la comisaría. <mark class="clave">Si a las 10 no abren, que los saquen</mark>.»</p><p>Percy te mira: quiere saber qué piensas antes de responder.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Plantear que, mientras haya diálogo posible y nadie esté en peligro, un desbloqueo por la fuerza puede herir a alguien y endurecer todo; proponer comunicar ya la mesa del jueves que autoriza Lima.',
        res: { q: 'buena', fx: { etica: 5, confianza: 4, tiempo: -2 }, rel: { percy: 1, presidenta: 1 }, flags: ['dialogo_sin_fuerza'], cartera: { bloqueo: 'Mesa ofrecida para el jueves · sin intervención' },
          out: 'Valdivia se queda callado. «Si alguien se muere aquí arriba por falta de algo, es tu responsabilidad.» «Y si alguien se muere en la carretera, también», responde Percy. Valdivia llama a la comisaría y pide esperar.',
          pro: { ok: 'Priorizas la vida y abres un camino concreto.', risk: 'Si el diálogo falla, Operaciones te lo recordará.', info: 'Ofrece algo que Lima ya autorizó: la mesa. Así no prometes lo que no puedes.' },
          kusi: ['animo', 'Piedras sí, heridos no.'] } },
      { id: 'b', label: 'Darle la razón: la carretera es una vía pública, el bloqueo es ilegal y la operación no puede parar.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -5 }, rel: { presidenta: -1 }, flags: ['pidio_policia'], cartera: { bloqueo: 'Pedido de desbloqueo policial' },
          out: 'A las 11 llegan dos patrulleros. La fogata se llena de gente de otros caseríos. Nadie sale herido, pero la carretera sigue cerrada y ahora hay más piedras.',
          pro: { ok: 'Defiendes la operación y la legalidad de la vía.', risk: 'La fuerza suele multiplicar el conflicto y pone vidas en riesgo.' },
          kusi: ['triste', 'Más piedras que antes…'] } },
      { id: 'c', label: 'Ir donde Doña Juana y firmar tú misma un compromiso: el empleo local se respeta en la licitación.',
        res: { q: 'aceptable', fx: { confianza: 3, cumplimiento: -5 }, rel: { presidenta: 1, percy: -1 }, flags: ['promesa_sin_respaldo'], cartera: { bloqueo: 'Compromiso firmado sin aprobación de Lima' },
          out: 'Doña Juana guarda el papel en su lliclla. «Esto lo vamos a leer en la mesa.» Percy no te habla en todo el camino de regreso.',
          pro: { ok: 'Le das a la comunidad lo que pide.', risk: 'Firmar sin autorización compromete a la empresa y puede ser desautorizado.' },
          kusi: ['preocupado', 'Lima dijo: no firmen…'] } },
    ],
    rules: [[POL, 'Lima autorizó ofrecer una mesa de diálogo el jueves; no firmar compromisos sin aprobación.'], [BP, 'Mientras haya diálogo posible, la fuerza suele empeorar un conflicto social.']],
    mirada: {
      ve: 'Valdivia tiene razones reales: combustible, contratos, 900 personas. Pero un desbloqueo por la fuerza a 4,000 metros, con jóvenes enojados y frío extremo, puede terminar en algo que nadie quiere. RR.HH. pone la vida en la mesa antes que la tonelada.',
      visual: { tipo: 'matriz', x: 'Rapidez para abrir la carretera', y: 'Riesgo para las personas', cuadrantes: ['Rápido y riesgoso', 'Lento y riesgoso', 'Lento y seguro', 'Rápido y seguro'], items: [['Policía a las 10', .8, .9], ['Mesa el jueves', .3, .15], ['Firma sin respaldo', .6, .4]] },
    },
  },
  {
    id: 'h3', t: '09:30', ch: 'documento', who: null, titulo: 'Novecientas personas arriba', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Sala de crisis del campamento', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>De vuelta en el campamento, Seguridad, Logística y RR.HH. se encierran en la sala de crisis. En la pizarra: 900 personas, víveres para cinco días, combustible para cuatro.</p><p>Te toca proponer <mark class="clave">las tres prioridades de RR.HH.</mark> para hoy.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres prioridades de RR.HH. para hoy.', boton: 'Llevarlas a la pizarra', resumen: 'Tus prioridades',
    cols: ['Prioridad', 'Lo que sabes'],
    rows: [
      { id: 'conteo', cells: ['Conteo nominal de quién está arriba, propios y contratistas', 'Nadie tiene la lista completa'] },
      { id: 'salud', cells: ['Lista de personas con enfermedades crónicas y sus medicinas', 'Hay hipertensos y un diabético en el turno B'] },
      { id: 'familias', cells: ['Canal de información para las familias', 'Las llamadas saturan la central'] },
      { id: 'reporte', cells: ['El reporte de asistencia semanal para Lima', 'Vence hoy'] },
      { id: 'mural', cells: ['Actualizar el mural del comedor con el menú', 'Gladys lo pidió'] },
      { id: 'evaluacion', cells: ['Seguir con la evaluación de desempeño anual', 'Lima la pidió para este mes'] },
    ],
    score: { conteo: 3, salud: 3, familias: 3, reporte: 0, mural: -1, evaluacion: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: picks.includes('salud') ? 5 : -2, calidad: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 1 : -1 },
        cartera: { campamento: q === 'buena' ? 'Conteo, crónicos y canal de familias' : 'Prioridades incompletas' },
        out: q === 'buena' ? 'A las 12 tienes 903 nombres en el Excel, 11 personas con tratamiento crónico identificadas y un número de WhatsApp solo para familias.' : picks.includes('salud') ? 'Algo queda sin cubrir. A media tarde, la central telefónica colapsa con llamadas de familias.' : 'A las 4, un operador diabético avisa que se le acaba la insulina. Nadie lo tenía en una lista.',
        pro: { ok: 'Saber quién está arriba, quién necesita medicinas y cómo se informa a las familias es lo primero en una crisis.', risk: 'Lo administrativo puede esperar; una medicina, no.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? 'Lo básico, bien cubierto.' : '¿Y la insulina?'],
      };
    },
    rules: [[BP, 'En una crisis: conteo de personas, salud y comunicación con las familias.']],
    mirada: {
      ve: 'Un bloqueo convierte el campamento en un pequeño pueblo aislado. RR.HH. sabe algo que nadie más sabe: quién es quién. Por eso le toca contar a las personas, cuidar a los que necesitan medicinas y responderles a las familias.',
      visual: { tipo: 'embudo', titulo: 'Novecientas personas arriba', niveles: [['Personas en la unidad', 903], ['Con tratamiento crónico', 11], ['Con su día 14 hoy', 140]] },
    },
  },
  {
    id: 'h4', t: '13:40', ch: 'documento', who: null, titulo: 'El plan de continuidad', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de crisis del campamento', show: ['cumplimiento', 'etica', 'personas'],
    body: () => `<p>Valdivia manda su plan de continuidad. La guardia B, que hoy cumplía 14 días, no puede bajar. La guardia A, que debía subir, está en Abancay.</p><p>Lo lees despacio, pensando en Wilber y en los 140 que hoy <mark class="clave">tenían que estar abrazando a sus hijos</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple o hay que corregir en el plan.',
    doc: { t: 'Plan de continuidad operativa', sub: 'Operaciones Mina · mientras dure el bloqueo' },
    lines: [
      { id: 'gratis', t: 'Las horas adicionales se consideran parte de la emergencia y no se pagan como sobretiempo.', bad: LEY, why: 'Aunque el sobretiempo sea obligatorio por fuerza mayor (D.S. 007-2002-TR, art. 9), sigue siendo sobretiempo y se paga con su sobretasa (art. 10).' },
      { id: 'todos', t: 'Todas las áreas trabajan sobretiempo obligatorio, incluidas Administración y Bienestar.', bad: LEY, why: 'La excepción del art. 9 cubre la labor indispensable por la emergencia, no a todas las áreas por igual.' },
      { id: 'seguridad', t: 'Se mantiene el descanso mínimo entre turnos y la rotación de operadores de equipo pesado.' },
      { id: 'sancion', t: 'Quien se niegue a extender su turno será sancionado.', bad: BP, why: 'Antes de sancionar, hay que ver si la labor es indispensable y si la persona está en condiciones. Un operador agotado es un riesgo.' },
      { id: 'registro', t: 'Registro de las horas de cada trabajador en el control de asistencia.' },
      { id: 'contratistas', t: 'Los trabajadores de contratistas siguen las órdenes de sus propios supervisores.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: !missLey ? 'buena' : hitsLey ? 'aceptable' : 'riesgosa',
      flags: missLey ? [] : ['sobretiempo_legal'],
      out: missLey ? 'El plan sale como está. En el comedor, la guardia B se entera de que trabajará «gratis por la emergencia». Wilber te escribe: «¿En serio?».' : `Le devuelves a Valdivia ${hitsLey + (hitsBp || 0)} observaciones. Él responde: «¿Y de dónde saco gente descansada?». Le propones rotar con la guardia de contratistas que ya está arriba. Acepta.`,
      cartera: { turnos: missLey ? 'Plan de continuidad sin cambios' : 'Plan corregido: sobretiempo registrado y pagado' },
      pro: { ok: 'Una emergencia permite exigir sobretiempo en lo indispensable, no dejar de pagarlo.', risk: 'Un plan que no paga y amenaza convierte a los varados en el siguiente conflicto.', info: 'Registra cada hora: después del bloqueo, alguien pedirá cuentas.' },
      kusi: missLey ? ['indignado', '¿Varados y sin pago?'] : ['celebra', 'Emergencia, sí. Gratis, no.'],
    }),
    rules: [[LEY, 'El sobretiempo es voluntario; excepcionalmente obligatorio por caso fortuito o fuerza mayor que ponga en peligro inminente a personas, bienes o la continuidad productiva (D.S. 007-2002-TR, art. 9).'], [LEY, 'En jornadas atípicas, el promedio del ciclo no puede superar la jornada máxima (D.S. 007-2002-TR).']],
    mirada: {
      ve: 'Valdivia no quiere abusar de nadie: quiere sostener la operación con la gente que tiene. Pero los 140 de la guardia B ya trabajaron 14 días. Corregir el plan es cuidarlos a ellos y a la empresa de un reclamo que vendría después.',
      visual: { tipo: 'cambio', titulo: 'Del plan de Valdivia al plan corregido', pares: [['Horas sin pagar', 'Sobretiempo registrado y pagado'], ['Todas las áreas', 'Solo la labor indispensable'], ['Sanción a quien se niegue', 'Evaluar condición y rotar']] },
      normas: [{ ley: 'D.S. 007-2002-TR, art. 9', dice: 'El trabajo en sobretiempo es voluntario. Excepcionalmente es obligatorio cuando resulta indispensable por caso fortuito o fuerza mayor que ponga en peligro inminente a las personas, los bienes del centro de trabajo o la continuidad de la actividad productiva.', practica: 'Un bloqueo puede justificar el sobretiempo obligatorio en labores indispensables. Igual se registra y se paga.' }],
    },
  },
  {
    id: 'h5', t: '15:30', ch: 'whatsapp', who: null, titulo: 'Las familias', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Contenedor de RR.HH.', show: ['personas', 'confianza'],
    body: () => `<p>El grupo «Familias Minera Puquio» tiene 612 personas y 300 mensajes sin leer. La señora Marleny pregunta por su esposo. Otra mamá pregunta si hay comida.</p><p>Percy te pide un mensaje para el grupo. <mark class="clave">Que tranquilice sin mentir</mark>.</p>`,
    type: 'compose', enviaA: 'familias', para: 'Para: Familias Minera Puquio · 612 participantes', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'est', t: 'Cómo están', ops: [
        { id: 'e1', t: 'Todas las personas de la unidad están bien. Hay alimentos, agua y atención médica en el tópico.', ok: true, por: 'Lo que más quieren saber, primero.' },
        { id: 'e2', t: 'La situación está bajo control de la empresa.', ok: null, por: 'Suena a comunicado; no dice cómo están sus familiares.' },
      ] },
      { id: 'cuando', t: 'Cuándo bajan', ops: [
        { id: 'c1', t: 'Todavía no sabemos cuándo se abrirá la carretera. Hay diálogo con la comunidad y les avisaremos aquí cada día a las 12.', ok: true, por: 'Honesto y con una hora fija.' },
        { id: 'c2', t: 'Mañana ya bajan todos.', ok: false, por: 'No lo sabes.' },
      ] },
      { id: 'canal', t: 'Cómo comunicarse', ops: [
        { id: 'k1', t: 'Para casos urgentes, escriban al 9XX XXX 412 (RR.HH. Puquio). Cada trabajador podrá llamar a casa esta noche.', ok: true, por: 'Un canal concreto y una llamada para cada uno.' },
        { id: 'k2', t: 'Por favor, no llamen a la central.', ok: false, por: 'Cierra una puerta sin abrir otra.' },
      ] },
    ],
    res: sel => {
      const mal = sel.cuando === 'c2' || sel.canal === 'k2', buenas = ['e1', 'c1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : mal ? -3 : 1, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['familias_informadas'] : [], cartera: { familias: q === 'buena' ? 'Reporte diario a las 12' : 'Familias sin canal claro' },
        out: q === 'buena' ? 'La señora Marleny responde: «Gracias. Díganle a Juan que lo esperamos». Las llamadas a la central bajan a la mitad en una hora.' : mal ? 'Al día siguiente, cuando no bajan, el grupo se llena de «nos mintieron».' : 'Algunas familias se calman; otras siguen llamando.',
        pro: { ok: 'Información honesta, con hora fija y un canal, baja la angustia.', risk: 'Una promesa de fecha que no se cumple multiplica la desconfianza.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Qué divino! Las familias respiran.' : '¿Y si mañana no bajan?'],
      };
    },
    rules: [[BP, 'En una crisis, informa a las familias con una hora fija, aunque no haya novedades.']],
    mirada: {
      ve: 'Para una familia en Abancay o en Juliaca, el bloqueo es un teléfono que no contesta. Un mensaje a las 12, todos los días, aunque diga «todavía no sabemos», es lo que convierte el miedo en espera.',
      visual: { tipo: 'mensaje', titulo: 'Tranquilizar sin mentir', txt: 'Todas las personas de la unidad están bien. Todavía no sabemos cuándo se abrirá la carretera. Les avisaremos aquí cada día a las 12. Cada trabajador podrá llamar a casa esta noche.' },
    },
  },
  {
    id: 'h6', t: '17:20', ch: 'presencial', who: 'presidenta', titulo: 'La ventana', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Carretera de acceso · km 42', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Vuelves al km 42 con Percy. Doña Juana está junto a la bandera, con los ojos rojos de humo. ${F.has('pidio_policia') ? '«Mandaron a la policía, señorita. Eso no se olvida.»' : '«Ya me dijeron que la policía no vino. Eso se agradece.»'}</p><p>Le cuentas que en el campamento hay once personas con tratamiento crónico. Ella escucha. «<mark class="clave">¿Qué me pide?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedirle paso solo para ambulancias y personas con urgencias médicas, y confirmar la mesa del jueves con alguien de Lima. Nada más hoy.',
        res: { q: 'buena', fx: { personas: 5, confianza: 4 }, rel: { presidenta: 1, percy: 1 }, flags: ['ventana_humanitaria'], cartera: { bloqueo: 'Paso humanitario · mesa el jueves' },
          out: 'Doña Juana habla con los mayores y con Brayan. Tarda veinte minutos. Vuelve: «Las ambulancias pasan. Y el jueves, la mesa». Le das la mano. Está helada.',
          pro: { ok: 'Pides lo indispensable y ofreces lo que sí está autorizado.', risk: 'Mañana tendrás que decidir quién baja por esa ventana.', info: 'En un bloqueo, separa lo humanitario de lo que se negocia.' },
          kusi: ['celebra', '¡Una ventana para la vida!'] } },
      { id: 'b', label: 'Pedirle que deje bajar a toda la guardia B, que ya cumplió sus 14 días, a cambio de la mesa del jueves.',
        res: { q: 'aceptable', fx: { personas: 2, confianza: -1 }, rel: { presidenta: -1 },
          out: 'Doña Juana niega con la cabeza. «Si bajan 140, mañana no hay mesa. Las ambulancias, sí.» Te quedas con lo humanitario, pero gastaste una carta.',
          pro: { ok: 'Piensas en los 140 cansados.', risk: 'Pedir demasiado en el primer día puede cerrar lo esencial.' },
          kusi: ['pensando', 'Primero lo esencial…'] } },
    ],
    rules: [[BP, 'En un conflicto, separa lo humanitario de lo negociable.']],
    mirada: {
      ve: 'Doña Juana tampoco quiere que nadie muera: necesita mostrarle a su asamblea que el bloqueo sirvió de algo. Pedir solo lo humanitario le permite decir que sí sin perder nada frente a los suyos.',
      visual: { tipo: 'balanza', a: { t: 'Lo humanitario', items: ['Ambulancias', 'Urgencias médicas'] }, b: { t: 'Lo que se negocia el jueves', items: ['Empleo local en la licitación', 'Conteo del 30 %', 'Compromisos por escrito'] } },
    },
  },
  {
    id: 'h7', t: '20:15', ch: 'presencial', who: 'percy', titulo: 'La primera noche', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del campamento', show: ['confianza', 'personas'],
    body: (n, F) => `<p>El comedor está lleno: nadie bajó. Gladys sirvió sopa de trigo y raciones medidas. ${F.has('comedor_acta') ? 'Wilber te hace sitio en su mesa.' : 'Te sientas sola en una esquina.'}</p><p>Percy llega con dos tazas. «Mañana va a ser más duro: <mark class="clave">la gente se cansa, los víveres bajan y las familias presionan</mark>. ¿Cómo estás tú?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle la verdad: agotada, con dolor de cabeza y preocupada por los 140 de la guardia B. Y pedirle repartir el turno de guardia de RR.HH. esta noche.',
        res: { q: 'buena', fx: { confianza: 3, personas: 2 }, rel: { percy: 1 },
          out: 'Percy asiente. «Yo me quedo hasta las 2. Tú duerme. Mañana te necesito entera.» Caminas a tu habitación bajo un cielo con más estrellas de las que has visto nunca.',
          pro: { ok: 'Cuidarte también es parte de cuidar la crisis.', info: 'En crisis largas, quien sostiene a los demás necesita turnos de descanso.' },
          kusi: ['feliz', 'Descansar también es trabajar.'] } },
      { id: 'b', label: 'Decirle que estás bien y que te quedas toda la noche en el contenedor por si algo pasa.',
        res: { q: 'aceptable', fx: { tiempo: -2, personas: -1 },
          out: 'Te quedas hasta las 4 con el celular en la mano. No pasa nada. A las 6, el café no te alcanza.',
          pro: { ok: 'Estás disponible.', risk: 'Una generalista agotada decide peor al día siguiente.' },
          kusi: ['preocupado', 'Mañana te necesitas despierta.'] } },
    ],
    mirada: { ve: 'El primer día de un bloqueo se sostiene con adrenalina. El segundo, con orden y con descanso. Una generalista de campo también es parte de las 903 personas que hay que cuidar.' },
  },
];
