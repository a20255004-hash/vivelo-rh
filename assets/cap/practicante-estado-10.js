// Practicante profesional en una ORH del Estado · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Último capítulo escrito de la temporada: balance de las dos semanas, pregunta «¿te ves en este puesto?» y final abierto.
// El lunes de la Semana 3 llega el Órgano de Control Institucional a revisar el concurso CAS 012-2026.
// Normas repasadas (ya verificadas en capítulos anteriores):
// - D.Leg. 1401: prácticas en el sector público por concurso, con subvención y jornada máxima; Ley 31396: las prácticas cuentan como experiencia.
//   https://lpderecho.pe/d-l-1401-practicantes-sector-publico-ingresaran-concurso-publico/
//   https://img.lpderecho.pe/wp-content/uploads/2022/03/Informe-tecnico-000296-2022-Servir-GPGSC-LPDerecho.pdf
// - Directiva N° 001-2023-SERVIR-GDSRH (legajos).
//   https://cdn.www.gob.pe/uploads/document/file/5231730/Resoluci%C3%B3n%20N%C2%BA%20190-2023-SERVIR-PE.pdf
// - Ley 27815, art. 8 (prohibiciones éticas) y Ley 29733 (datos personales).
//   https://www.congreso.gob.pe/Docs/Directivas/files/generales/ley27815-ley-codigoetica-funcionpublica.pdf
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto/mentora.webp',
  lugar: 'Oficina de Recursos Humanos · Wanchaq, Cusco',
  inicio: '08:00', fin: '17:30', cierreHora: '17:20',
  apertura: 'Viernes. Se cumplen tus dos primeras semanas en la ORH. Gladys llega con dos tazas de café pasado de verdad, del que trae de Quillabamba, y te cita a las ocho y media.', boton: 'Ir donde Gladys',
  kusi: 'Mira todo lo que pasó en diez días. ¡Y todavía falta!',
  lead: 'Escuchaste tu evaluación, escribiste tu balance, cerraste los pendientes del archivo, ordenaste tus dos semanas y respondiste la pregunta de fondo. Y justo entonces llegó el correo del Órgano de Control.',
  reflexion: 'Si el lunes empezaras de nuevo, ¿qué harías distinto desde la primera hora?',
  siguiente: { n: 11, titulo: 'El Órgano de Control', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'evaluacion', p: 'Tu evaluación de las dos semanas', j: 'Gladys · ORH', d: 0, e: 'Hoy, 8:30' },
  { id: 'balance', p: 'Tu balance de prácticas', j: 'Tú', d: 0, e: 'Por escribir' },
  { id: 'legajos', p: 'Digitalización de legajos', j: 'Gladys · ORH', d: 0, e: 'Caja 31 por cerrar' },
  { id: 'concurso', p: 'Expediente del CAS 012-2026', j: 'Comité de selección', d: 0, e: 'Contratos el lunes' },
];

export const FUTURO = {
  te_ves_si: ['Dijiste que te ves trabajando en el Estado.', 'Semana 3: el Órgano de Control pondrá a prueba todo lo que dejaste por escrito.'],
  te_ves_duda: ['Dijiste que te ves, con dudas sobre la lentitud y las presiones.', 'Semana 3: Gladys te tomará la palabra.'],
  te_ves_rrhh: ['Dijiste que te ves en RR.HH., aunque no sabes si en el Estado.', 'Semana 3: verás el Estado desde el lado del control.'],
  oci_preparado: ['Propusiste armar el índice del expediente del concurso antes del lunes, dentro de tu horario.', 'El lunes el Órgano de Control encontrará todo foliado.'],
  pendientes_cerrados: ['Cerraste los pendientes del archivo antes de irte.', 'Nada de tus dos semanas quedó suelto.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  jefa: { n: 'Lic. Norma Valer', sub: 'Jefa de la ORH', c: '#5B3A8C' },
  yesenia: { n: 'Yesenia Quispe', sub: 'Nieta del Prof. Víctor', c: '#7A4A2E' },
  mama: { n: 'Mamá', sub: 'Casa', c: '#C05621' },
};

export const WSP = [
  { chat: 'mama', t: '07:15', de: 'Mamá', txt: 'Hoy cumples dos semanas, hijita. Te espero con tu cuy al horno el domingo 🥰' },
  { chat: 'yesenia', t: '08:00', de: 'Yesenia', txt: 'Mi abuelito le manda saludos. Ya presentó su constancia para su pensión. Dice que usted es «una servidora de verdad» 🙏', si: 'victor_constancia' },
  { chat: 'ruben', t: '09:30', de: 'Rubén', txt: 'Gracias por lo del martes en la escalera. Me quedo. Y voy a postular al próximo CAS, sin primos de por medio 😅', si: 'ruben_escuchado' },
  { chat: 'grupo', t: '12:10', de: 'Gladys', txt: 'Edwin y Marleni vienen el lunes a firmar. Ana Lucía queda como accesitaria. Concurso cerrado sin un solo reclamo por el cronograma 👏', si: 'cuadro_correcto' },
  { chat: 'jefa', t: '15:40', de: 'Lic. Valer', txt: 'Les reenvío un correo del Órgano de Control. El lunes a las 9. Tranquilidad: si está todo escrito, no hay nada que temer.' },
];

export const CORREOS = [
  { t: '08:05', de: 'Gladys Huamán', para: 'Practicante de la ORH', asunto: 'Tu evaluación de las dos semanas', html: '<p>A las 8:30 conversamos. No es un examen: es para que sepas qué viste tú y qué vi yo. Trae tus dudas.</p><p>Gladys</p>' },
  { t: '15:35', de: 'Órgano de Control Institucional', para: 'Jefatura de la ORH', asunto: 'Requerimiento de información · CAS 012-2026', html: '<p>En el marco de un servicio de control, se solicita poner a disposición de la comisión, el lunes a las 9:00, el expediente completo del concurso CAS 012-2026: bases, expedientes de postulantes, matrices, tablas de puntaje con sus versiones, actas del comité y documentos vinculados a solicitudes de acceso a la información.</p><p>La comisión se instalará en la ORH durante la semana.</p>' },
];

export const QUIZ = [
  { q: '¿Qué reconoce la Ley 31396 sobre tus prácticas?', ops: ['Nada', 'Que las prácticas preprofesionales y profesionales cuentan como experiencia laboral', 'Que eres servidor CAS', 'Que no necesitas subvención'], ok: 1, por: 'La Ley 31396 reconoce las prácticas como experiencia laboral.' },
  { q: 'El Órgano de Control pide el expediente del concurso. ¿Qué es lo que más te ayuda?', ops: ['Recordar bien lo que pasó', 'Que cada decisión esté escrita, foliada y con su evidencia', 'Tener buena relación con la Gerencia', 'Borrar lo que pueda generar preguntas'], ok: 1, por: 'En el Estado, lo que está escrito y foliado es lo que permite rendir cuentas.' },
  { q: 'De estas dos semanas, ¿cuál es la idea que mejor resume el trabajo en una ORH del Estado?', ops: ['Todo es burocracia sin sentido', 'Las reglas y los registros existen para que el Estado trate igual a todos y pueda rendir cuentas', 'Lo importante es caerle bien al jefe', 'Hay que hacer todo rápido'], ok: 1, por: 'El procedimiento protege la igualdad y la memoria del Estado.' },
  { q: 'Fotos de legajos quedaron en tu celular personal. Antes de irte, ¿qué haces?', ops: ['Las guardas por si acaso', 'Las borras, también de WhatsApp, y se lo confirmas a tu supervisora', 'Las pasas a tu USB', 'Las dejas'], ok: 1, por: 'Los datos de los legajos no deben quedar en dispositivos personales (Ley 29733).' },
  { q: 'Te quieren encargar el índice del expediente el sábado, sin que nadie lo pida por escrito. ¿Qué propones?', ops: ['Venir el sábado gratis', 'Hacerlo hoy dentro de tu jornada y dejarlo listo para el lunes', 'No hacerlo', 'Llevártelo a casa'], ok: 1, por: 'Tu jornada de practicante tiene un máximo (D.Leg. 1401) y los expedientes no salen de la entidad.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'z1', t: '08:30', ch: 'presencial', who: 'gladys-orh', titulo: 'Lo que vio Gladys', banner: 'assets/foto/mentora.webp', lugar: 'Escritorio de Gladys', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Gladys se quita los lentes y los limpia con la chompa. «Te voy a decir lo que vi. ${F.has('victor_cargo') ? 'El primer día recibiste al profesor con un sello manual cuando todos le decían que vuelva mañana. Eso no se enseña.' : 'El primer día te costó entender que el ciudadano no tiene la culpa de que se caiga el sistema. Pero lo entendiste.'} ${F.has('edicion_reportada') ? 'Y el viernes, con el Excel, tuviste más valor que muchos con veinte años aquí.' : ''}»</p><p>«Ahora tú. <mark class="clave">¿Qué me quieres preguntar?</mark>»</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Gladys.',
    opts: [
      { id: 'mejor', label: '«¿Qué debería hacer mejor?»', info: '«Preguntar antes. A veces resuelves sola cosas que podías consultar en dos minutos. Y escribir más corto: tus primeros correos eran novelas.»' },
      { id: 'por', label: '«¿Por qué usted sigue aquí después de tantos años?»', info: 'Gladys mira por la ventana. «Porque mi papá fue obrero de carreteras y su liquidación tardó seis años. Me prometí que aquí nadie esperaría seis años por un papel.»' },
      { id: 'quedar', label: '«¿Hay forma de quedarme después de las prácticas?»', info: '«Por concurso, como todos. Tus prácticas cuentan como experiencia. Postula cuando salga una plaza. Yo no te puedo ayudar a entrar, pero sí a prepararte.»' },
      { id: 'nota', label: '«¿Qué nota me va a poner?»', info: 'Gladys sonríe. «La que diga lo que hiciste. Ya la verás. Pregúntame otra cosa, que eso no te va a enseñar nada.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, personas: picks.includes('por') ? 3 : 1 }, rel: { 'gladys-orh': 1 },
      out: picks.includes('por') ? 'Te quedas pensando en el papá de Gladys y sus seis años de espera. Entiendes por fin por qué ella es tan estricta con los sellos.' : 'Gladys te da la hoja de evaluación firmada. No miras la nota todavía.',
      kusi: ['feliz', 'Preguntar también es aprender.'],
    }),
    rules: [[LEY, 'Ley 31396: las prácticas preprofesionales y profesionales se reconocen como experiencia laboral.']],
    mirada: {
      ve: 'Detrás de la «estricta» Gladys hay una historia de espera. Muchas personas que sostienen las reglas del Estado lo hacen porque alguna vez sufrieron su ausencia. Entender eso cambia cómo ves a tu supervisora.',
      visual: { tipo: 'balanza', a: { t: 'Lo que hiciste bien', items: ['Atender al profesor', 'Sostener las bases', 'Dejarlo por escrito'] }, b: { t: 'Lo que puedes mejorar', items: ['Preguntar antes', 'Escribir más corto'] } },
    },
  },
  {
    id: 'z2', t: '10:00', ch: 'documento', who: null, titulo: 'Tu balance', banner: 'assets/esc/escritorio.webp', lugar: 'Formato de informe quincenal de prácticas', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>El formato del informe de prácticas tiene tres recuadros. Afuera, en la plaza de Wanchaq, una banda ensaya para el desfile del domingo.</p><p>${F.has('celular_datos') || F.has('resultado_filtrado') || F.has('reserva_rota') ? 'Hay cosas de estas semanas de las que no estás orgullosa. ' : ''}<mark class="clave">Escribe tu balance con honestidad</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué va en cada recuadro de tu balance.', boton: 'Entregar el balance',
    bloques: [
      { id: 'log', t: 'Lo que logré', n: 2, ops: [
        { id: 'l1', t: 'La constancia del profesor Quispe: de un legajo con hueco a 31 años completos.', ok: true },
        { id: 'l2', t: 'La tabla del CAS 012-2026 corregida y protegida antes de publicarse.', ok: true },
        { id: 'l3', t: 'Que todos en la ORH me quieran.', ok: false, por: 'No es un logro medible, y no depende solo de ti.' },
      ] },
      { id: 'err', t: 'Lo que aprendí de mis errores', n: 2, ops: [
        { id: 'e1', t: 'Que una decisión rápida en un pasillo o en un WhatsApp puede comprometer datos o un concurso.', ok: true, por: 'Honesto y útil.' },
        { id: 'e2', t: 'Que preguntar a tiempo ahorra más que resolver sola.', ok: true },
        { id: 'e3', t: 'No cometí errores importantes.', ok: false, por: 'En dos semanas todos se equivocan. Reconocerlo es parte del aprendizaje.' },
      ] },
      { id: 'pend', t: 'Lo que queda pendiente', n: 2, ops: [
        { id: 'p1', t: 'Terminar la digitalización: van 3 cajas de 140.', ok: true },
        { id: 'p2', t: 'Remitir el documento de «Víctor Quispe Huallpa» a su legajo correcto.', ok: true, por: 'Otra persona lo necesita.' },
        { id: 'p3', t: 'Nada, todo quedó listo.', ok: false, por: 'Quedan 137 cajas.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        cartera: { balance: q === 'riesgosa' ? 'Balance por rehacer' : 'Balance entregado' },
        out: q === 'buena' ? 'Gladys lee tu balance y subraya la línea de los errores. «Esto es lo que más vale. El que no ve sus errores en el Estado, los repite con sello.»' : 'Gladys te devuelve el balance: «Muy bonito. ¿Y lo que salió mal?».',
        pro: { ok: 'Un balance honesto dice lo que lograste, lo que aprendiste al equivocarte y lo que falta.', info: 'Guarda una copia: es tu primera experiencia laboral reconocida.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Balance de verdad!' : '¿Y los errores?'],
      };
    },
    rules: [[BP, 'Un balance de prácticas incluye logros, errores y pendientes, con hechos.']],
    mirada: {
      ve: 'Diez días: un sello manual, un legajo de 1987, un oficio, una tabla torcida, un pósit amarillo, un asesor con mate de coca, una madre con la ley en la mano y un profesor que lloró al leer «Huarocondo». Eso es una ORH del Estado.',
      visual: { tipo: 'embudo', titulo: 'Tus dos semanas en números', niveles: [['Expedientes revisados', 64], ['Legajos digitalizados', 41], ['Postulantes del CAS', 41], ['Constancias cerradas', 1]] },
    },
  },
  {
    id: 'z3', t: '11:30', ch: 'presencial', who: 'colega', titulo: 'Los cabos sueltos', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Archivo de la ORH, sótano', show: ['cumplimiento', 'tiempo', 'etica'],
    body: (n, F) => `<p>Bajas al archivo con Rubén. La caja 31 está casi lista. ${F.has('celular_datos') ? 'Tu celular todavía tiene una carpeta con 43 fotos de legajos.' : ''}</p><p>Tienes hasta el almuerzo para <mark class="clave">tres cabos sueltos</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes que cierras antes del almuerzo.', boton: 'Cerrar estos', resumen: 'Cerraste',
    cols: ['Pendiente', 'Lo que sabes'],
    rows: [
      { id: 'fotos', cells: ['Borrar del celular y de WhatsApp cualquier foto de legajos, y confirmarlo a Gladys', 'Si quedó alguna, no debe estar ahí'] },
      { id: 'huallpa', cells: ['Remitir con acta el documento de «Víctor Quispe Huallpa» a su legajo', 'Otra persona puede necesitarlo para su propia constancia'] },
      { id: 'caja', cells: ['Devolver la caja 31 a su estante y anotarlo en el registro', 'Quien la busque el lunes debe encontrarla'] },
      { id: 'selfie', cells: ['Tomarte una foto con Rubén en el archivo para tu LinkedIn', 'Se verían las carátulas de los legajos'] },
      { id: 'ordenar', cells: ['Reordenar la caja 32 «como debería estar»', 'Rubén ya la tiene inventariada en su orden original'] },
    ],
    score: { fotos: 3, huallpa: 3, caja: 3, selfie: -3, ordenar: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 0, etica: picks.includes('selfie') ? -3 : 2 }, rel: { colega: 1 },
        flags: q === 'buena' ? ['pendientes_cerrados'] : [], cartera: { legajos: q === 'buena' ? 'Caja 31 cerrada; documento ajeno remitido' : 'Caja 31 con pendientes' },
        out: q === 'buena' ? 'A las 12:50 la caja 31 está en su estante, el documento de Quispe Huallpa viaja con acta a la caja 58 y tu galería no tiene ni un legajo. Rubén te dice: «Así da gusto heredar el trabajo de alguien».' : picks.includes('selfie') ? 'La foto sale bonita, pero en el fondo se leen tres nombres en las carátulas. La borras antes de subirla.' : 'Cierras algunos pendientes. Otros quedarán para el lunes.',
        pro: { ok: 'Dejar todo en su lugar es parte del trabajo, no un extra.', info: 'El documento de otra persona en el legajo equivocado puede ser la constancia que alguien espera hace meses.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Nada suelto!' : 'Algo quedó suelto.'],
      };
    },
    rules: [[LEY, 'Directiva N° 001-2023-SERVIR-GDSRH: los legajos se custodian y mantienen actualizados.'], [LEY, 'Ley 29733: los datos personales no deben quedar en dispositivos personales.']],
    mirada: {
      ve: 'El documento de «Quispe Huallpa» es la otra cara de esta historia: en algún lugar de Anta, otro profesor quizás espera una constancia que no sale porque su papel estaba en el legajo equivocado. Cerrar bien también es abrirle el camino a alguien más.',
      visual: { tipo: 'matriz', x: 'Tiempo', y: 'Importa para otra persona', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Puede esperar', 'No'], items: [['Borrar fotos', .2, .9], ['Documento de Quispe Huallpa', .4, .95], ['Devolver la caja', .2, .7], ['Reordenar la caja 32', .6, .1], ['Selfie', .1, .05]] },
    },
  },
  {
    id: 'z4', t: '14:00', ch: 'documento', who: null, titulo: 'Tus diez días', banner: 'assets/esc/carrera.webp', lugar: 'Tu cuaderno de prácticas', show: ['calidad', 'confianza'],
    body: () => `<p>Después del almuerzo, un caldo de cabeza en el mercado con Rubén, abres el cuaderno donde anotabas todo. Gladys te pidió una línea de tiempo para el practicante que llegue después.</p><p><mark class="clave">Ordena lo que viviste</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena lo que pasó en tus dos semanas. Usa las flechas.', boton: 'Guardar la línea de tiempo',
    items: [
      { id: 'cargo', t: 'El sistema se cae y el profesor Víctor recibe su cargo con sello manual', por: 'Semana 1, lunes.' },
      { id: 'hueco', t: 'El legajo 0457 tiene un hueco de 1994 a 1997', por: 'Semana 1, martes.' },
      { id: 'firma', t: 'La declaración jurada sin firma de Lizbeth y el pósit del expediente 14', por: 'Semana 1, jueves.' },
      { id: 'excel', t: 'La fórmula vacía y la celda editada de noche', por: 'Semana 1, viernes.' },
      { id: 'gerencia', t: 'El asesor de la Gerencia pide adelantar la lista', por: 'Semana 2, lunes.' },
      { id: 'elvira', t: 'La Sra. Elvira llega con la ley en la mano', por: 'Semana 2, miércoles.' },
      { id: 'const', t: 'El profesor lee «Huarocondo» en su constancia', por: 'Semana 2, jueves.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 3 : 1, confianza: 2 },
        out: q === 'buena' ? 'Miras la línea entera y te das cuenta: todo estaba conectado. El sello del primer lunes terminó en la firma del jueves; el pósit del jueves explicó el lunes.' : 'Cambias un par de fechas. Diez días parecen un mes cuando están tan llenos.',
        pro: { ok: 'Ver la historia completa te muestra cómo una decisión pequeña cambia lo que viene después.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Todo estaba conectado!' : 'Fueron días intensos.'],
      };
    },
    mirada: {
      ve: 'En una ORH del Estado nada pasa aislado: un sello manual se vuelve prueba, un pósit se vuelve acta, un Excel se vuelve informe. Lo que dejas escrito hoy es lo que alguien leerá cuando pregunte.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['S1 lunes', 'El cargo'], ['S1 martes', 'El hueco'], ['S1 viernes', 'El Excel'], ['S2 lunes', 'La Gerencia'], ['S2 miércoles', 'Elvira'], ['S2 jueves', 'La constancia']] },
    },
  },
  {
    id: 'z5', t: '15:45', ch: 'correo', who: null, titulo: 'El correo de las 15:35', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'tiempo', 'confianza'],
    mail: { from: 'Gladys Huamán · Especialista de la ORH', to: 'Practicante de la ORH', asunto: 'RV: Requerimiento de información · CAS 012-2026' },
    body: (n, F) => `<p>Te reenvío lo del Órgano de Control. El lunes a las 9 quieren el expediente completo del concurso. ${F.has('informe_borrado') ? 'Van a pedir las versiones de la tabla, y el informe no dice nada de la celda editada.' : F.has('resultado_filtrado') ? 'Van a preguntar cómo se supo la lista antes del lunes.' : 'Por suerte, casi todo está escrito.'}</p><p>La jefa dice que vengamos mañana sábado a ordenarlo. <mark class="clave">¿Qué propones?</mark></p><p>Gladys</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Armar hoy, dentro del horario, el índice del expediente con todas las versiones, actas y anexos, y dejar anotado lo que falta para el lunes a primera hora.',
        res: { q: 'buena', fx: { cumplimiento: 5, tiempo: 2, confianza: 3 }, rel: { 'gladys-orh': 1 }, flags: ['oci_preparado'],
          responde: 'Gladys: propongo armar hoy hasta las 17:30 el índice del expediente del CAS 012-2026: bases, 41 expedientes, matrices, las tres versiones de la tabla, actas del comité, informe técnico y la respuesta a la Sra. Condori. Lo que falte lo dejo anotado para el lunes a las 8. No cambiamos nada: solo ordenamos y foliamos.',
          out: 'Gladys responde: «Eso. Y nada se cambia, nada se agrega: se muestra tal como está. Le digo a la jefa que no hace falta venir el sábado».', kusi: ['animo', 'Ordenar no es maquillar.'] } },
      { id: 'b', label: 'Venir el sábado a ordenarlo todo con calma, y de paso «mejorar» las actas que quedaron incompletas.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -4 },
          responde: 'Gladys: vengo el sábado y de paso completamos las actas que quedaron cortas.',
          out: 'Gladys responde al minuto: «No. Un acta no se mejora después de firmada, y menos el día antes de que llegue Control. Ordenamos hoy, en horario, y lo que está, está».', kusi: ['preocupado', '¡Eso parecería maquillaje!'] } },
    ],
    mirada: { ve: 'El Órgano de Control no es el enemigo: es la parte del Estado que pregunta si las reglas se cumplieron. Si todo está escrito, la visita es un trámite. Si alguien empieza a «mejorar» actas el sábado, se vuelve un problema.' },
  },
  {
    id: 'z6', t: '16:45', ch: 'presencial', who: 'gladys-orh', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Ventana de la ORH, con vista al Ausangate', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Gladys apaga su computadora y se queda mirando por la ventana. A lo lejos, si el día está limpio, se ve el nevado Ausangate. Hoy se ve.</p><p>${F.has('oci_preparado') ? 'El índice del expediente está impreso sobre su escritorio, con 412 folios.' : ''} «Una pregunta, sin evaluación de por medio. <mark class="clave">¿Te ves trabajando en el Estado?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Sí. Es lento y a veces frustrante, pero cuando el profesor leyó "Huarocondo" entendí para qué sirve todo esto.»',
        res: { q: null, fx: { confianza: 3, personas: 2 }, rel: { 'gladys-orh': 1 }, flags: ['te_ves_si'],
          out: 'Gladys asiente. «Entonces prepárate para el lunes. Control va a revisar todo lo que hicimos, y eso también es el Estado. Quizás la parte más importante.»',
          kusi: ['celebra', '¡Una servidora de verdad!'] } },
      { id: 'b', label: '«Creo que sí, pero me asustan la lentitud y las presiones, como la de la Gerencia. No sé si aguantaría años así.»',
        res: { q: null, fx: { confianza: 2, personas: 2 }, rel: { 'gladys-orh': 1 }, flags: ['te_ves_duda'],
          out: 'Gladys sonríe. «A mí también me asustaban. Las presiones no se van; lo que cambia es que aprendes a dejarlas por escrito. El lunes vas a ver que eso sirve.»',
          kusi: ['animo', 'Dudar también es honesto.'] } },
      { id: 'c', label: '«Me veo en Recursos Humanos, de eso estoy segura. En el Estado… todavía no sé.»',
        res: { q: null, fx: { confianza: 2, personas: 1 }, rel: { 'gladys-orh': 1 }, flags: ['te_ves_rrhh'],
          out: 'Gladys se encoge de hombros. «Lo que aprendiste aquí te sirve en cualquier lado: escuchar, dejar todo escrito, aplicar la misma regla a todos. Pero antes de decidir, quédate a ver la semana que viene.»',
          kusi: ['pensando', 'Todavía hay mucho por ver.'] } },
    ],
    rules: [[LEY, 'D.Leg. 1401: a las prácticas se accede por concurso (art. 18) y no generan relación laboral con la entidad (art. 24). Un puesto en el Estado también se gana por concurso, no por haber hecho prácticas.']],
    mirada: {
      ve: 'Dos semanas no alcanzan para conocer el Estado, pero sí para saber si te importa lo que hace. Y el lunes empieza otra parte: la que revisa si lo que hiciste estuvo bien. Esa también es tu historia.',
      visual: { tipo: 'mensaje', titulo: 'El lunes, Semana 3', txt: 'A las 9:00 se instala en la ORH la comisión del Órgano de Control Institucional para revisar el concurso CAS 012-2026. Todo lo que dejaste escrito estará sobre la mesa.' },
    },
  },
];
