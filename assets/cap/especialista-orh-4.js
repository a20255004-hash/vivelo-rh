// Especialista en RR.HH. de entidad pública · Capítulo 4 · «La recomendación» · Semana 1, jueves.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Normas citadas:
// - Ley 27815, Ley del Código de Ética de la Función Pública, art. 8: prohibiciones éticas, empezando por mantener
//   intereses en conflicto.
//   https://www.congreso.gob.pe/Docs/Directivas/files/generales/ley27815-ley-codigoetica-funcionpublica.pdf
//   https://www.sunat.gob.pe/institucional/integridad/normas/Ley-27815.pdf
// - Ley 26771, modificada por la Ley 31299 (nepotismo), ya citada en el capítulo 1.
// - D.Leg. 1057, art. 1 (principios de méritos y capacidad e igualdad de oportunidades; de ahí el concurso público), ya citado en el capítulo 1.

export const CAP = {
  n: 4, titulo: 'La recomendación', dia: 'Semana 1, jueves', foto: 'assets/foto/frente-a-frente.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '08:00', fin: '17:30', cierreHora: '17:15',
  apertura: 'Jueves. Sol fuerte desde temprano, de ese que quema en Cajamarca aunque el aire siga frío. En la plaza, los lustrabotas ya tienen clientes y en la puerta de la municipalidad un grupo espera al alcalde con una banderola.', boton: 'Abrir la bandeja',
  kusi: 'Hoy te van a ofrecer ayuda. Fíjate bien qué te piden a cambio.',
  lead: 'Ordenaste tus pendientes, recibiste al regidor y a su lista de «buenos chicos», escuchaste la historia del concurso anterior, dejaste constancia de la visita y trataste a Eder igual que a cualquier postulante.',
  reflexion: '¿Dónde está la línea entre ayudar a alguien a postular y ayudarlo a ganar?',
  siguiente: { n: 5, titulo: 'El reclamo', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'concurso', p: 'Concurso CAS: 12 plazas', j: 'Marisol · ORH', d: 0, e: 'Bases en Asesoría Legal' },
  { id: 'regidor', p: 'Visita del regidor Tello', j: 'ORH', d: 0, e: 'Hoy' },
  { id: 'consultas', p: 'Consultas de postulantes', j: 'ORH', d: 0, e: 'Llegan por WhatsApp personal' },
  { id: 'reclamo', p: 'Reclamo de Eder Rojas', j: 'Mesa de partes', d: 0, e: 'Del concurso anterior' },
];

export const FUTURO = {
  lista_rechazada: ['No recibiste la lista del regidor y le dijiste que la convocatoria sería pública para todos.', 'El regidor llevará su queja al concejo en el capítulo 9.'],
  lista_registrada: ['Hiciste ingresar la lista del regidor por mesa de partes, con cargo.', 'La auditora la encontrará en el expediente en el capítulo 7, y te preguntará por ella.'],
  lista_guardada: ['Te quedaste con la lista del regidor «para avisarles».', 'La lista aparecerá en tu cajón cuando llegue la auditora, en el capítulo 7.'],
  nota_regidor: ['Dejaste una nota informativa de la visita del regidor.', 'Marisol la usará para protegerte en el capítulo 9.'],
  canal_consultas: ['Propusiste un canal público de consultas para todos los postulantes.', 'Ordenará las preguntas del día de la publicación, en el capítulo 9.'],
  eder_privilegio: ['Revisaste en privado la constancia de Eder antes del concurso.', 'Otro postulante lo sabrá y lo usará en el capítulo 5.'],
  jr_historia: ['Don Segundo te contó cómo se manejó el concurso anterior.', 'Te ayudará a entender el hallazgo del capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  regidor: { n: 'Regidor Manuel Tello', sub: 'Regidor municipal', who: 'regidor' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
  terrones: { n: 'Ing. Lucio Terrones', sub: 'Gerente de Desarrollo Urbano', c: '#8C5A16' },
};

export const WSP = [
  { chat: 'terrones', t: '08:02', de: 'Ing. Terrones', txt: 'Visto bueno al perfil corregido. Adjunto escaneado. Que conste que yo pedí experiencia real de obra.', si: 'terrones_explicado' },
  { chat: 'grupo', t: '08:40', de: 'Don Segundo', txt: 'Ojo: tres personas me han escrito a mi celular preguntando cuándo sale el concurso. ¿Qué les digo?' },
  { chat: 'regidor', t: '12:10', de: 'Regidor Tello', txt: 'Señorita, usted es muy rígida. Yo solo quería ayudar a mi gente. Conste que vine con buena fe.', si: 'lista_rechazada' },
  { chat: 'marisol', t: '15:05', de: 'Marisol', txt: 'Leí tu nota. Esto lo guardo en el archivo de la jefatura. Gracias por avisarme el mismo día.', si: 'nota_regidor' },
  { chat: 'eder', t: '17:00', de: 'Eder', txt: 'Ya entendí, señorita. Espero la publicación como todos.', no: 'eder_privilegio' },
];

export const CORREOS = [
  { t: '08:20', de: 'Asesoría Legal', para: 'ORH', asunto: 'Bases CAS 005-2026: recibido', html: '<p>Se recibió el borrador de bases. Se emitirá informe en los próximos días. Se recomienda adjuntar todos los perfiles con visto bueno del área usuaria.</p><p>Dr. Ronald Chilón · Asesoría Legal</p>' },
  { t: '13:30', de: 'Junta Vecinal Barrio San Sebastián', para: 'ORH', asunto: 'Pedido de plazas para jóvenes del barrio', html: '<p>Señores de Recursos Humanos: por intermedio del regidor Tello solicitamos que se considere a los jóvenes de nuestro barrio en las plazas de serenazgo, ya que conocen la zona.</p><p>Atte. La directiva.</p>' },
];

export const QUIZ = [
  { q: 'Un regidor te entrega una lista de «buenos candidatos». ¿Qué es lo más prudente?', ops: ['Guardarla para avisarles en privado', 'No tomarla como base de nada y decirle que la convocatoria será pública para todos', 'Pasarla al comité evaluador', 'Darles puntaje extra'], ok: 1, por: 'El concurso está abierto a todos por igual. Nadie entra por una lista.' },
  { q: '¿Qué establece el art. 8 de la Ley 27815?', ops: ['Los sueldos de los servidores', 'Prohibiciones éticas de la función pública, como mantener intereses en conflicto', 'El cronograma de los concursos', 'Las vacaciones'], ok: 1, por: 'El Código de Ética de la Función Pública fija prohibiciones éticas para todo servidor.' },
  { q: 'Un postulante te pide revisar en privado sus documentos antes del concurso. ¿Qué haces?', ops: ['Lo ayudas porque te cae bien', 'Le das la misma información que a todos, por el canal de consultas', 'Le dices qué poner para ganar', 'Lo bloqueas'], ok: 1, por: 'Ayudar a uno en privado es darle una ventaja que los demás no tienen.' },
  { q: '¿Por qué conviene escribir una nota informativa después de una visita de presión?', ops: ['Para chismear', 'Para que quede constancia de lo que pasó y de lo que respondiste', 'Porque lo pide el regidor', 'No conviene'], ok: 1, por: 'Lo escrito protege a la institución y a quien la sirve.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:30', ch: 'documento', who: null, titulo: 'La bandeja del jueves', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>Tu bandeja física tiene una torre de papeles con clips de colores. La virtual, 31 correos. Y en el celular, mensajes de números que no conoces: «¿Ya salió lo de serenazgo?».</p><p>El regidor viene a las 10. <mark class="clave">Antes, solo te alcanza para dos cosas</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos tareas de la mañana.', boton: 'Empezar', resumen: 'Empezaste por',
    cols: ['Tarea', 'Por qué'],
    rows: [
      { id: 'perfil', cells: ['Incorporar el perfil corregido del ingeniero al expediente, con su folio', 'Que el cambio quede registrado'] },
      { id: 'canal', cells: ['Proponer a Marisol un canal público de consultas para los postulantes', 'Las preguntas ya llegan a celulares personales'] },
      { id: 'contestar', cells: ['Contestar uno por uno los WhatsApp de los desconocidos', 'Son vecinos y merecen respuesta'] },
      { id: 'afiche', cells: ['Diseñar el afiche del concurso para Facebook', 'Difusión'] },
      { id: 'toner', cells: ['Ir a Logística por el tóner de la impresora', 'Sin impresora no hay expedientes'] },
    ],
    score: { perfil: 3, canal: 3, contestar: -1, afiche: 0, toner: 1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, tiempo: q === 'riesgosa' ? -2 : 2, calidad: picks.includes('canal') ? 3 : 0 },
        flags: picks.includes('canal') ? ['canal_consultas'] : [],
        cartera: { consultas: picks.includes('canal') ? 'Canal público propuesto: correo y respuestas publicadas' : picks.includes('contestar') ? 'Respondiendo por WhatsApp personal' : 'Sin canal' },
        out: picks.includes('canal') ? 'Marisol acepta: un correo exclusivo para consultas y un documento con las respuestas publicado en el portal. «Así nadie sabe más que otro.»' : picks.includes('contestar') ? 'Respondes a cuatro personas. Cada una recibió una versión un poco distinta de lo que vendrá. Eso puede volverse un problema.' : 'Avanzas, aunque las consultas siguen llegando a celulares personales.',
        pro: { ok: 'Un canal único de consultas iguala la información para todos.', risk: 'Responder por WhatsApp personal crea postulantes «mejor informados».', info: 'Publica las respuestas para que todos lean lo mismo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Misma información para todos. ¡Bien!' : '¿Quién sabe más que quién?'],
      };
    },
    mirada: {
      ve: 'En un concurso, la información también es una ventaja. Si unos se enteran por el celular de alguien y otros no, el concurso empieza desigual antes de publicarse.',
      visual: { tipo: 'cambio', titulo: 'Las consultas', pares: [['WhatsApp al celular de Don Segundo', 'Un correo de consultas'], ['Respuestas distintas a cada uno', 'Un documento de respuestas publicado'], ['Quien conoce a alguien sabe más', 'Todos leen lo mismo']] },
    },
  },
  {
    id: 'd2', t: '10:05', ch: 'presencial', who: 'regidor', titulo: 'La lista', banner: 'assets/foto2/tension.webp', lugar: 'Ventanilla de la ORH', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El regidor Tello llega con un fólder manila y una sonrisa grande. ${F.has('regidor_cede') ? '«¿Y el CV de Julián que le mandé el lunes? Bueno, ya lo verá.» ' : F.has('regidor_ley') ? 'No menciona a su sobrino. Esta vez viene «en nombre de los vecinos». ' : ''}${F.has('residencia_conocimiento') ? '«Me dicen que ustedes mismos quieren que los serenos conozcan la zona. ¡Justo!» ' : ''}</p><p>Abre el fólder: seis nombres, con DNI y celular. «Son chicos del barrio San Sebastián, buenos, sanos. <mark class="clave">Yo no le pido nada. Solo que los tenga presentes</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No recibir la lista. Decirle que la convocatoria saldrá en Talento Perú y en el portal, y que esos jóvenes pueden postular como cualquiera.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: -2 }, rel: { regidor: -1 }, flags: ['lista_rechazada'], cartera: { regidor: 'Lista no recibida; se le informó cómo postular' },
          out: 'El regidor cierra el fólder despacio. «Usted no entiende cómo funciona esto.» Se va saludando a todos en el pasillo, menos a ti.',
          pro: { ok: 'Nada queda en tus manos que pueda parecer un compromiso.', risk: 'El regidor es parte del concejo que aprueba el presupuesto de la ORH.', info: 'Escríbelo hoy en una nota para Marisol.' },
          kusi: ['animo', 'Amable y sin fólder en la mano. ¡Firme!'] } },
      { id: 'b', label: 'Pedirle que ingrese la lista por mesa de partes, como cualquier documento, para que quede registrada y se responda por escrito.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: 2, confianza: 1 }, flags: ['lista_registrada'], cartera: { regidor: 'Lista ingresada por mesa de partes, con cargo' },
          out: 'El regidor duda, pero lo hace: «Si así es el trámite…». La lista queda con número de expediente. Ahora habrá que responderla, y alguien la leerá.',
          pro: { ok: 'Todo queda a la vista: nada se maneja por debajo de la mesa.', risk: 'Un documento oficial con seis nombres recomendados por un regidor queda en el archivo del concurso, y habrá que explicarlo.' },
          kusi: ['pensando', 'Transparente… pero ahora es parte del expediente.'] } },
      { id: 'c', label: 'Quedarte con la lista solo para avisarles personalmente cuando salga la convocatoria. Avisar no es favorecer.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -3, confianza: 3 }, rel: { regidor: 1 }, flags: ['lista_guardada'], cartera: { regidor: 'Lista guardada en tu cajón' },
          out: 'El regidor te da la mano con las dos manos. Guardas el fólder en tu cajón. Seis personas sabrán de la convocatoria por ti, antes y mejor que el resto.',
          pro: { ok: 'Evitas el roce y parece inofensivo.', risk: 'Avisar en privado a los recomendados de un regidor es darles una ventaja, y la lista en tu cajón es evidencia.' },
          kusi: ['preocupado', 'Ese fólder en tu cajón pesa más de lo que parece.'] } },
    ],
    rules: [[LEY, 'Ley 27815, art. 8: prohibiciones éticas de la función pública, como mantener intereses en conflicto.'], [LEY, 'El CAS garantiza los principios de méritos y capacidad e igualdad de oportunidades (D.Leg. 1057, art. 1); por eso se accede por concurso público.']],
    mirada: {
      ve: 'El regidor tiene votantes y promesas que cumplir; por eso insiste. La presión no siempre es ilegal en la forma: «tenerlos presentes» no es una orden. Pero cualquier ventaja para esos seis es una desventaja para todos los demás.',
      visual: { tipo: 'matriz', x: 'Riesgo de favorecer', y: 'Transparencia', cuadrantes: ['Transparente y sin ventaja', 'Transparente con ventaja', 'Opaco sin ventaja', 'Opaco con ventaja'], items: [['No recibirla', .1, .75], ['Mesa de partes', .4, .9], ['Guardarla', .85, .15]] },
      normas: [{ ley: 'Ley 27815, Código de Ética de la Función Pública, art. 8', dice: 'Establece las prohibiciones éticas de quien ejerce función pública, empezando por mantener intereses en conflicto.', practica: 'Quedarte con una lista de recomendados te pone en conflicto entre el regidor y el resto de postulantes.' }],
    },
  },
  {
    id: 'd3', t: '11:20', ch: 'presencial', who: null, titulo: 'Lo que cuenta Don Segundo', banner: 'assets/foto/mentora.webp', lugar: 'Junto al hervidor prohibido', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Don Segundo Vásquez tiene 58 años, es de Celendín y lleva 31 en la municipalidad, nombrado. Ha visto pasar a todos los jefes de la ORH. Te sirve café en una taza con el escudo del Municipio y te mira por encima de los lentes.</p><p>«No se haga problema por el regidor, señorita. <mark class="clave">Siempre es así</mark>. ¿Quiere que le cuente cómo fue el año pasado?» Tienes tiempo para dos preguntas.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Don Segundo.',
    opts: [
      { id: 'jr', label: '«¿Quién era "JR", el que comentaba las bases?»', info: '«Jorge Ramírez, el jefe anterior. Buena gente, pero todo lo hacía rápido. Al final lo cambiaron. Dicen que por una queja de Contraloría, pero eso nadie lo dice en voz alta.»' },
      { id: 'comite', label: '«¿Cómo trabajó el comité del concurso pasado?»', info: '«Hacían las entrevistas en una tarde y los puntajes los pasaba yo a mano al Excel. Las bonificaciones las calculaba el ingeniero Jorge. Yo solo copiaba. Nunca entendí bien cómo las sumaba.»' },
      { id: 'regidor', label: '«¿El regidor ya metió gente antes?»', info: '«Meter, meter… no sé. Pero dos de los que ganaron el año pasado eran de San Sebastián. Puede ser casualidad. Aquí todo puede ser casualidad.» Se ríe sin ganas.' },
      { id: 'consejo', label: '«¿Qué me aconseja para que no me cambien a mí también?»', info: '«Que escriba todo. Y que no almuerce sola con ningún regidor.» Se ríe. «Y que no se queme. Aquí los que se queman se van en dos años.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 2, calidad: picks.includes('comite') ? 3 : 1, confianza: 2 },
      flags: picks.includes('comite') || picks.includes('jr') ? ['jr_historia'] : [],
      cartera: { concurso: picks.includes('comite') ? 'Duda: cómo se calcularon las bonificaciones del CAS 004' : 'Bases en Asesoría Legal' },
      out: picks.includes('comite') ? 'Anotas en tu libreta: «Bonificaciones del CAS 004: ¿cómo se sumaron?». No sabes todavía por qué, pero algo te hace ruido.' : 'Don Segundo se despide con un «cuídese». Te quedas pensando en lo que no se dice en voz alta.',
      kusi: picks.includes('comite') ? ['curioso', 'Esa duda… guárdala.'] : ['pensando', 'La memoria de la oficina vale oro.'],
    }),
    mirada: {
      ve: 'Los servidores con décadas en la entidad son la memoria de la oficina. No siempre tienen el cargo, pero saben cómo se hicieron las cosas y dónde suelen estar los errores.',
      visual: { tipo: 'linea', titulo: 'La ORH según Don Segundo', hitos: [['1994', 'Entra como auxiliar'], ['2024', 'Jefe anterior: JR'], ['CAS 004-2026', 'Bonificaciones «a mano»'], ['Hoy', 'Llegas tú']] },
    },
  },
  {
    id: 'd4', t: '13:50', ch: 'documento', who: null, titulo: 'La nota informativa', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, con un sánguche de chicharrón a medio comer', show: ['cumplimiento', 'confianza', 'etica'],
    body: (n, F) => `<p>${F.has('lista_guardada') ? 'Tienes el fólder del regidor en el cajón y Marisol te pide una nota de la visita. Tendrás que decidir qué cuentas.' : 'Marisol te pide una nota informativa de la visita del regidor. Corta y formal.'}</p><p>Lo que escribas hoy puede leerlo mañana un auditor. <mark class="clave">Hechos, fechas y lo que respondiste</mark>.</p>`,
    type: 'compose', enviaA: 'marisol', para: 'Para: Marisol Chávez · Jefa de la ORH', boton: 'Enviar la nota',
    prompt: 'Arma la nota eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'El hecho', ops: [
        { id: 'h1', t: 'Hoy, a las 10:05, el regidor Manuel Tello vino a la ORH con una lista de seis personas para las plazas de serenazgo.', ok: true, por: 'Fecha, hora, quién y qué.' },
        { id: 'h2', t: 'Hoy vino el regidor otra vez con sus recomendados, como siempre.', ok: false, por: '«Como siempre» es una opinión, no un hecho.' },
      ] },
      { id: 'resp', t: 'Lo que respondiste', ops: [
        { id: 'r1', t: 'Le informé que la convocatoria será pública en Talento Perú y en el portal institucional, y que cualquier persona puede postular en igualdad de condiciones.', ok: true, por: 'Muestras que respondiste con la regla.' },
        { id: 'r2', t: 'Le dije que lo íbamos a ver.', ok: false, por: 'Por escrito, eso suena a compromiso.' },
      ] },
      { id: 'pide', t: 'Lo que propones', ops: [
        { id: 'p1', t: 'Propongo dejar esta nota en el archivo de la jefatura y comunicar al comité evaluador que no se recibirán recomendaciones.', ok: true, por: 'Conviertes un hecho en una regla para todos.' },
        { id: 'p2', t: 'Propongo no mencionarlo a nadie para no tener problemas con el concejo.', ok: false, por: 'Esconder la presión no la hace desaparecer.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.resp === 'r2' || sel.pide === 'p2', buenas = ['h1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? (buenas >= 2 ? 'aceptable' : 'riesgosa') : 'buena';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : mal ? -1 : 2, confianza: q === 'buena' ? 3 : 0, etica: sel.pide === 'p2' ? -3 : 2 }, rel: { marisol: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['nota_regidor'],
        out: q === 'buena' ? 'Marisol imprime tu nota, la firma como «recibido» y la guarda en un archivador azul que dice «Jefatura – Reservado».' : q === 'aceptable' ? 'La nota llega, aunque alguna frase podría leerse de otra manera si cae en manos equivocadas.' : 'Tu nota dice poco y algo de lo que dice te compromete.',
        pro: { ok: 'Una nota informativa con hechos y respuestas es tu mejor defensa.', risk: 'Las opiniones y los «lo vamos a ver» por escrito juegan en tu contra.', info: 'Envíala el mismo día: la fecha también cuenta.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Escrito, fechado y firmado!' : 'Cada palabra escrita se puede releer.'],
      };
    },
    rules: [[BP, 'Una nota informativa recoge hechos, fechas y lo que respondiste. No opiniones.']],
    mirada: {
      ve: 'En la administración pública, lo que no está escrito no existe. Una nota corta, fechada y con hechos protege a la ORH y a ti si mañana alguien cuenta otra versión.',
      visual: { tipo: 'flujo', titulo: 'Una nota informativa', pasos: ['Qué pasó y cuándo', 'Quién estuvo', 'Qué respondiste', 'Qué propones'] },
    },
  },
  {
    id: 'd5', t: '15:40', ch: 'presencial', who: 'eder', titulo: 'Eder en la ventanilla', banner: 'assets/esc/dudas.webp', lugar: 'Ventanilla de la ORH', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('eder_atendido') ? 'Eder vuelve, más tranquilo que el lunes. Trae una constancia nueva de la empresa de cómputo donde trabajó, ahora con fecha de inicio y de fin.' : 'Eder vuelve con un amigo. Está molesto: «El lunes nadie me explicó nada. Ahora quiero saber si mis papeles sirven para el nuevo concurso».'}</p><p>«Señorita, ¿me puede revisar esta constancia? <mark class="clave">Solo quiero saber si ahora sí está bien</mark>. Un minuto nomás.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Revisarla rápido y decirle si está bien. Es un minuto y él ya sufrió por un error de forma.',
        res: { q: 'riesgosa', fx: { personas: 4, etica: -4, cumplimiento: -2 }, rel: { eder: 1 }, flags: ['eder_privilegio'],
          out: 'Le dices que sí, que ahora está bien. Eder sonríe. Su amigo, que también va a postular, te pregunta si puede traer los suyos mañana. Otro postulante, en la cola, lo escucha todo.',
          pro: { ok: 'Eres amable con alguien que la pasó mal.', risk: 'Revisar los papeles de un postulante antes del concurso, en privado, es una ventaja que los demás no tienen.' },
          kusi: ['sorpresa', 'Amable con uno… ¿y con los otros 200?'] } },
      { id: 'b', label: 'Explicarle que no puedes revisar documentos antes del concurso, pero que las bases dirán con claridad cómo acreditar la experiencia y habrá un correo de consultas para todos.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3, personas: 1 }, rel: { eder: 0 },
          out: 'Eder resopla, pero asiente. «O sea que ahora sí lo van a escribir clarito.» Le muestras el párrafo del borrador sobre fechas de inicio y de fin. Se va con una foto del cronograma de la pared.',
          pro: { ok: 'Le das la misma información que tendrán todos, sin revisar su caso.', risk: 'Puede sentirse otra vez rechazado.', info: 'Cuida el tono: un «no puedo» con una explicación no es un portazo.' },
          kusi: ['animo', 'Igual para todos, explicado con cariño.'] } },
    ],
    rules: [[BP, 'Antes y durante un concurso, todos los postulantes reciben la misma información por los mismos canales.']],
    mirada: {
      ve: 'Lo difícil del mérito es que a veces te obliga a decirle que no a la persona que más te conmueve. Ser justa con Eder es tratarlo igual que a todos, no mejor.',
      visual: { tipo: 'balanza', a: { t: 'Revisar su constancia', items: ['Eder contento', 'Un minuto'] }, b: { t: 'Reglas claras para todos', items: ['Nadie con ventaja', 'Bases que explican cómo acreditar', 'Canal de consultas público'] } },
    },
  },
  {
    id: 'd6', t: '16:45', ch: 'whatsapp', who: 'regidor', titulo: 'El último mensaje del regidor', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo, camino a mesa de partes', show: ['confianza', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('lista_rechazada') ? 'El regidor te escribe otra vez: «Mañana hay sesión de concejo y se va a ver el presupuesto de su oficina. Piénselo».' : F.has('lista_guardada') ? 'El regidor te escribe: «Gracias, señorita. ¿Me avisa a mí primero cuando salga, para avisarles a los chicos?».' : 'El regidor te escribe: «Ya ingresé la lista por mesa de partes. Espero respuesta pronto».'}</p><p>Estás sola en el pasillo, con el celular en la mano. <mark class="clave">¿Respondes?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responder con una sola línea, cordial y sin compromisos: «Regidor, la convocatoria se publicará en Talento Perú y en el portal institucional. Saludos».',
        res: { q: 'buena', fx: { etica: 3, confianza: 1 },
          envia: ['regidor', 'Regidor, la convocatoria se publicará en Talento Perú y en el portal institucional, igual para todos. Saludos.'],
          out: 'Dos vistos azules. No responde. Le reenvías captura del intercambio a Marisol.', kusi: ['feliz', 'Corto, cordial y sin puertas abiertas.'] } },
      { id: 'b', label: 'No responder y contárselo a Marisol en persona antes de irte.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -1 },
          out: 'Marisol te escucha mientras se pone la casaca: «Bien que me cuentes. Pero no lo dejes en visto: a un regidor se le responde, aunque sea con la regla».', kusi: ['pensando', 'El silencio también se interpreta.'] } },
    ],
    mirada: { ve: 'Con la autoridad política, el silencio puede leerse como desprecio o como complicidad. Una respuesta breve que repite la regla cierra el tema sin pelear.' },
  },
];
