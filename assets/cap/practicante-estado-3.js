// Practicante profesional en una ORH del Estado · Capítulo 3 · «La constancia» · Semana 1, miércoles.
// Hilo: el profesor Víctor Quispe llega por su constancia de servicios; el hueco de 1994 a 1997 en su legajo tiene solución, pero no hoy.
// Normas citadas:
// - TUO de la Ley 27444, Ley del Procedimiento Administrativo General (D.S. 004-2019-JUS):
//   art. 39: el plazo máximo de un procedimiento de evaluación previa no puede exceder de 30 días hábiles;
//   art. 169: queja por defecto de tramitación, que se presenta ante el superior jerárquico de quien tramita.
//   https://cdn.www.gob.pe/uploads/document/file/5320370/4770872-decreto-supremo-n-004-2019-jus.pdf
//   https://lpderecho.pe/modelo-de-queja-por-defecto-de-tramitacion-por-infraccion-de-plazos/
// - Ley 29733 (datos personales) y Directiva N° 001-2023-SERVIR-GDSRH (legajos), ya citadas en el capítulo 2.
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 3, titulo: 'La constancia', dia: 'Semana 1, miércoles', foto: 'assets/foto/entrevista.webp',
  lugar: 'Ventanilla de la ORH · Wanchaq, Cusco',
  inicio: '08:00', fin: '17:00', cierreHora: '16:50',
  apertura: 'Miércoles. Llovió de madrugada y las veredas de Wanchaq brillan. A las nueve tienes una cita que llevas pensando desde ayer: el profesor Víctor Quispe viene por su constancia.', boton: 'Abrir la ventanilla',
  kusi: 'Hoy no basta con tener la razón: hay que explicarla con cariño.',
  lead: 'Escuchaste al profesor Víctor, decidiste qué hacer con sus copias de 1995, ordenaste su expediente, explicaste el atraso a la jefatura, atendiste la ventanilla en dos idiomas y le contaste al profesor sus derechos.',
  reflexion: '¿Qué le debe el Estado a alguien que trabajó para él treinta y un años?',
  siguiente: { n: 4, titulo: 'El concurso', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'victor', p: 'Constancia de servicios del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'Plazo vencido' },
  { id: 'oficio', p: 'Oficio a la UGEL Anta', j: 'Jefatura de la ORH', d: 0, e: 'En firma' },
  { id: 'ventanilla', p: 'Atención en ventanilla', j: 'Tú y Rubén', d: 0, e: 'Cola desde las 8' },
  { id: 'concurso', p: 'Concurso CAS 012-2026', j: 'Comité de selección', d: 0, e: 'Cierre de postulaciones hoy' },
];

export const FUTURO = {
  victor_cotejo: ['Recibiste las copias del profesor y quedaste en cotejarlas con las autenticadas de la UGEL, con una fecha concreta.', 'Su constancia saldrá bien, aunque no hoy.'],
  victor_apurada: ['Propusiste emitir la constancia hoy con copias simples.', 'Alguien de control lo verá algún día.'],
  victor_parcial: ['La constancia salió hoy, pero sin los años 1994 a 1997.', 'El profesor tendrá que pedir otra rectificación.'],
  victor_derechos: ['Le explicaste al profesor que puede presentar una queja por el atraso.', 'Lo recordará cuando cuente cómo lo atendieron.'],
  quechua_atendida: ['Atendiste a doña Sabina en quechua con ayuda de Rubén.', 'Rubén se sintió útil por primera vez en semanas.'],
  jefa_informada: ['Le explicaste a la jefa de la ORH por qué el expediente del profesor estaba atrasado.', 'La jefa pidió revisar otros expedientes vencidos.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  jefa: { n: 'Lic. Norma Valer', sub: 'Jefa de la ORH', c: '#5B3A8C' },
  yesenia: { n: 'Yesenia Quispe', sub: 'Nieta del Prof. Víctor', c: '#7A4A2E' },
};

export const WSP = [
  { chat: 'gladys', t: '08:05', de: 'Gladys', txt: 'El oficio a la UGEL salió firmado a las 7:50. Lo mandé escaneado y en físico con el chofer que va a Anta.', si: 'oficio_listo' },
  { chat: 'gladys', t: '08:05', de: 'Gladys', txt: 'Rehice el oficio a la UGEL. Sale hoy al mediodía.', no: 'oficio_listo' },
  { chat: 'yesenia', t: '08:40', de: 'Yesenia', txt: 'Ya estamos llegando con mi abuelito 🚗', si: 'nieta_reserva' },
  { chat: 'grupo', t: '08:50', de: 'Gladys', txt: 'Las fotos de legajos en celulares se borran hoy. Todas. Y me confirman.', si: 'celular_datos' },
  { chat: 'jefa', t: '13:30', de: 'Lic. Valer', txt: 'Me dicen que el expediente del profesor Quispe tiene más de tres meses. ¿Qué pasó? Necesito saberlo antes de las 3.' },
  { chat: 'ruben', t: '16:10', de: 'Rubén', txt: 'Gracias por pedirme ayuda con doña Sabina. Hace tiempo nadie me pedía nada que no sea fotocopias 😊', si: 'quechua_atendida' },
];

export const CORREOS = [
  { t: '08:15', de: 'Comité de selección CAS 012-2026', para: 'ORH', asunto: 'Cierre de postulaciones', html: '<p>Se recuerda que hoy, a las 16:00, cierra la recepción de postulaciones al concurso CAS 012-2026 (dos plazas de Asistente Administrativo para la ORH). Mañana la practicante apoya la revisión de expedientes.</p>' },
  { t: '15:20', de: 'UGEL Anta · Archivo', para: 'ORH Gobierno Regional', asunto: 'Copias autenticadas', html: '<p>Recibimos su oficio. Las copias autenticadas de las resoluciones del Sr. Víctor Quispe Mamani estarán listas el lunes y se enviarán con el chofer de la UGEL.</p>' },
];

export const QUIZ = [
  { q: 'Según el TUO de la Ley 27444, ¿cuál es el plazo máximo de un procedimiento de evaluación previa?', ops: ['10 días hábiles', '30 días hábiles', '90 días calendario', 'No tiene plazo'], ok: 1, por: 'El art. 39 del TUO establece que no puede exceder de 30 días hábiles.' },
  { q: 'El trámite de una persona está atrasado sin justificación. ¿Qué puede presentar?', ops: ['Nada, debe esperar', 'Una queja por defecto de tramitación ante el superior jerárquico de quien tramita', 'Una demanda penal', 'Una carta al alcalde'], ok: 1, por: 'El art. 169 del TUO de la Ley 27444 regula la queja por defecto de tramitación.' },
  { q: 'El profesor trae copias simples de 1995. ¿Qué haces con ellas?', ops: ['Emites la constancia con ellas hoy', 'Las agregas al expediente y las cotejas con las copias autenticadas que pidió la ORH', 'Las devuelves porque no valen nada', 'Las fotografías con tu celular'], ok: 1, por: 'Las copias simples orientan la búsqueda, pero la constancia se sustenta en documentos que la entidad puede verificar.' },
  { q: 'Una señora te habla en quechua y tú no lo hablas. ¿Qué haces?', ops: ['Le pides que vuelva con un familiar', 'Buscas a un compañero que hable quechua para atenderla en su lengua', 'Le hablas más fuerte en castellano', 'La derivas a otra oficina'], ok: 1, por: 'Atender a una persona en su lengua es parte de una atención con respeto. Busca apoyo en tu equipo.' },
  { q: 'El profesor pregunta si puede quejarse por el atraso. ¿Qué respondes?', ops: ['Que mejor no, que se va a demorar más', 'Que sí puede presentar una queja y cómo hacerlo, y qué se está haciendo con su trámite', 'Que no sabes', 'Que la queja la presenta la ORH'], ok: 1, por: 'Informar al ciudadano sobre sus derechos es parte de atenderlo bien, aunque la queja sea sobre tu oficina.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '09:00', ch: 'presencial', who: 'docente', titulo: 'El profesor llega', banner: 'assets/foto/entrevista.webp', lugar: 'Ventanilla de la ORH', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => `<p>${F.has('victor_vuelva') ? 'El profesor Víctor vuelve, como dijo, el miércoles. Viene solo, en combi desde Anta, y se le nota el cansancio en los hombros.' : F.has('nieta_reserva') ? 'El profesor Víctor llega del brazo de Yesenia, puntual. Se sienta despacio y deja su sombrero sobre las rodillas.' : 'El profesor Víctor llega puntual, con su terno gris y su sobre manila.'} ${F.has('nieta_datos') ? 'Antes de que hables, te dice: «Mi nieta me contó que me perdieron papeles…».' : ''}</p><p>Le cuentas que encontraron un hueco de cuatro años en su legajo. <mark class="clave">Tienes unos minutos para entender su historia</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces.',
    opts: [
      { id: 'para', label: '«¿Para qué necesita la constancia, profesor?»', info: '«Para mi pensión, hija. Me dicen que sin la constancia de todos mis años no pueden revisar el cálculo. Mi esposa toma pastillas para la presión todos los días.»' },
      { id: 'donde', label: '«¿Dónde trabajó entre 1994 y 1997?»', info: '«En Huarocondo. Me reasignaron a la escuela de la comunidad, a dos horas a pie de la carretera. Enseñaba en quechua y en castellano a primero y segundo grado juntos.»' },
      { id: 'copias', label: '«¿Usted guarda algún papel de esos años?»', info: 'El profesor abre el sobre manila con cuidado. Saca dos copias simples, amarillentas, de resoluciones de 1995, y un cuaderno donde pegó sus boletas de pago. «Mi señora me dijo: guarda todo, Víctor.»' },
      { id: 'antes', label: '«¿Por qué no trajo estos papeles en agosto?»', info: 'El profesor baja la mirada. «Nadie me los pidió, señorita. Solo me decían "vuelva el otro mes".» Guarda el cuaderno en el sobre.' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('antes') ? -4 : 4, confianza: picks.includes('antes') ? -2 : 3, calidad: picks.includes('copias') ? 3 : 0 }, rel: { docente: picks.includes('antes') ? -1 : 1 },
      flags: picks.includes('copias') ? ['victor_copias'] : [],
      out: picks.includes('antes') ? 'Tu pregunta suena a reproche, aunque no quisiste. El profesor contesta lo justo y espera en silencio.' : picks.includes('copias') ? 'Tienes en la mano dos copias de 1995 y un cuaderno de boletas. No sirven para certificar, pero dicen dónde buscar.' : 'Ahora entiendes por qué esto le importa tanto. Y por qué no puede esperar otro mes.',
      kusi: picks.includes('antes') ? ['triste', 'La demora no fue suya…'] : ['feliz', 'Escuchar abre sobres manila.'],
    }),
    rules: [[BP, 'Antes de explicar el trámite, escucha para qué lo necesita la persona.']],
    mirada: {
      ve: 'Detrás de «constancia de servicios» hay un hombre que caminó dos horas al día para enseñar en quechua, y una esposa que toma pastillas. Cuando sabes eso, el expediente deja de ser un número.',
      visual: { tipo: 'linea', titulo: 'Lo que el legajo no contaba', hitos: [['1987', 'Anta'], ['1994', 'Reasignado a Huarocondo'], ['1997', 'Vuelve a Anta'], ['2018', 'Cese']] },
    },
  },
  {
    id: 'c2', t: '10:10', ch: 'presencial', who: 'gladys-orh', titulo: 'Las copias de 1995', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Escritorio de Gladys', show: ['cumplimiento', 'personas', 'etica'],
    body: (n, F) => `<p>Le cuentas todo a Gladys. ${F.has('victor_copias') ? 'Ella mira las copias de 1995 con atención.' : 'Ella escucha y apunta en su cuaderno.'} Rubén se acerca: «La jefa dice que si el profe trae copias, emitamos hoy y ya. Que ese expediente nos está dejando mal».</p><p>Gladys te mira: «Tú lo has seguido desde el lunes. <mark class="clave">¿Qué propones?</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agregar sus copias al expediente, esperar las copias autenticadas de la UGEL para cotejarlas y darle al profesor una fecha concreta por escrito.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 2, tiempo: -2 }, rel: { 'gladys-orh': 1, docente: 1 }, flags: ['victor_cotejo'], cartera: { victor: 'Copias simples agregadas; se espera la UGEL para cotejar' },
          out: 'Gladys asiente: «La constancia que firmamos tiene que aguantar una revisión de control». Al profesor le das un papel con la fecha escrita: «La próxima semana». Lo dobla en cuatro y lo guarda.',
          pro: { ok: 'La constancia saldrá completa y con sustento verificable.', risk: 'El profesor espera unos días más, y la jefa quería cerrarlo hoy.', info: 'Una fecha escrita vale más que un «vuelva pronto».' },
          kusi: ['animo', 'Completa y bien hecha. Unos días más.'] } },
      { id: 'b', label: 'Emitir hoy la constancia con sus copias simples: son documentos de la misma entidad y el profesor ya esperó demasiado.',
        res: { q: 'riesgosa', fx: { personas: 4, cumplimiento: -5, etica: -2 }, rel: { docente: 1 }, flags: ['victor_apurada'], cartera: { victor: 'Constancia con copias simples, por firmar' },
          out: 'El profesor sonríe por primera vez. Gladys, en cambio, se queda seria: «Si alguien pregunta en qué se basó esta constancia, la respuesta será "en unas fotocopias"».',
          pro: { ok: 'El profesor recibe una respuesta hoy.', risk: 'Una constancia oficial basada en copias que nadie verificó puede ser observada, y él tendría que empezar de nuevo.' },
          kusi: ['preocupado', 'Rápido hoy… ¿y si la observan?'] } },
      { id: 'c', label: 'Emitir hoy la constancia solo con los años documentados y luego pedir una rectificación cuando lleguen los de 1994 a 1997.',
        res: { q: 'aceptable', fx: { tiempo: 3, personas: -2, cumplimiento: 2 }, flags: ['victor_parcial'], cartera: { victor: 'Constancia parcial: sin 1994 a 1997' },
          out: 'El expediente se cierra hoy. El profesor lee la constancia en la ventanilla y cuenta con los dedos: «Aquí faltan cuatro años, hija». Tendrá que hacer otro trámite.',
          pro: { ok: 'Todo lo que se certifica está sustentado y el plazo deja de correr.', risk: 'Le das un documento incompleto que no le sirve para su pensión, y otro trámite más.' },
          kusi: ['pensando', '¿Cerrar el expediente o resolver su problema?'] } },
    ],
    rules: [[BP, 'Una constancia oficial se sustenta en documentos que la entidad puede verificar.']],
    mirada: {
      ve: 'Las tres opciones tienen algo de razón. La jefa quiere cerrar un expediente vencido; el profesor quiere su constancia; Gladys quiere una que no se caiga. El arte está en no sacrificar la verdad de lo que se firma.',
      visual: { tipo: 'matriz', x: 'Rapidez', y: 'Sustento', cuadrantes: ['Sólida y lenta', 'Sólida y rápida', 'Débil y lenta', 'Débil y rápida'], items: [['Esperar y cotejar', .3, .9], ['Copias simples hoy', .9, .2], ['Constancia parcial', .8, .7]] },
    },
  },
  {
    id: 'c3', t: '11:30', ch: 'documento', who: null, titulo: 'El expediente en orden', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Gladys te pide armar el expediente del profesor de forma que cualquiera, hoy o en cinco años, entienda qué pasó. Tienes papeles regados en la mesa: el pedido de agosto, tres reiteraciones, el índice, el oficio…</p><p><mark class="clave">Ordénalos como deben ir</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los documentos del expediente. Usa las flechas.', boton: 'Foliar en este orden',
    items: [
      { id: 'sol', t: 'Solicitud de constancia de agosto y sus tres reiteraciones', por: 'El inicio del trámite.' },
      { id: 'inf', t: 'Informe de búsqueda en el legajo 0457 con el hueco de 1994 a 1997', por: 'Explica por qué no se emitió.' },
      { id: 'ofi', t: 'Oficio a la UGEL Anta y su respuesta', por: 'Lo que se hizo para completar.' },
      { id: 'cop', t: 'Copias simples presentadas por el profesor', por: 'Orientan, pero no reemplazan.' },
      { id: 'aut', t: 'Copias autenticadas de la UGEL y acta de cotejo', por: 'El sustento verificable.' },
      { id: 'con', t: 'Proyecto de constancia, visto bueno y firma de la jefatura', por: 'El resultado.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Folias 37 hojas. Gladys hojea el expediente de principio a fin: «Se entiende solito. Así se arma».' : 'Gladys cambia el orden de dos documentos: «El informe va antes del oficio: primero se explica por qué, luego qué se pidió».',
        pro: { ok: 'Un expediente ordenado cuenta la historia completa sin que nadie tenga que explicarla.', info: 'El acta de cotejo la firmará quien compare las copias con los originales autenticados.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Un expediente que se lee solo!' : 'Primero el porqué, luego el qué.'],
      };
    },
    rules: [[BP, 'El expediente se ordena en el orden en que ocurrieron los hechos y se folia completo.']],
    mirada: {
      ve: 'Un expediente bien armado protege a todos: al profesor, que puede probar lo que pidió; a la ORH, que puede probar lo que hizo; y a quien venga después, que no tendrá que adivinar.',
      visual: { tipo: 'flujo', titulo: 'El expediente del profesor', pasos: ['Solicitud', 'Informe de búsqueda', 'Oficio a la UGEL', 'Copias del profesor', 'Copias autenticadas', 'Constancia firmada'] },
    },
  },
  {
    id: 'c4', t: '13:40', ch: 'whatsapp', who: null, titulo: 'La jefa pregunta', banner: 'assets/foto2/tension.webp', lugar: 'Tu celular, en el almuerzo', show: ['confianza', 'cumplimiento', 'calidad'],
    body: () => `<p>Estás comiendo un pan con palta en la banca del patio cuando te escribe la Lic. Norma Valer, jefa de la ORH: «Me dicen que el expediente del profesor Quispe tiene más de tres meses. ¿Qué pasó?».</p><p>Gladys está en una reunión. <mark class="clave">Te toca explicarlo a ti</mark>.</p>`,
    type: 'compose', enviaA: 'jefa', para: 'Para: Lic. Norma Valer · Jefa de la ORH', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'causa', t: 'La causa', ops: [
        { id: 'c1', t: 'Su legajo no tiene las resoluciones de 1994 a 1997 y tenía un documento de otra persona; por eso nadie podía certificar esos años.', ok: true, por: 'La causa, en hechos.' },
        { id: 'c2', t: 'La verdad, nadie lo atendió desde agosto.', ok: null, por: 'Puede ser cierto, pero no explica la causa ni ayuda a resolver.' },
        { id: 'c3', t: 'El profesor no trajo sus papeles a tiempo.', ok: false, por: 'Culpar al ciudadano no es cierto: nadie se los pidió.' },
      ] },
      { id: 'hecho', t: 'Lo que se hizo', ops: [
        { id: 'h1', t: 'Ayer ubicamos las resoluciones en la UGEL Anta; el oficio ya salió y las copias llegan el lunes.', ok: true, por: 'Muestras avance concreto.' },
        { id: 'h2', t: 'Estamos viendo.', ok: false, por: 'No dice nada.' },
      ] },
      { id: 'prop', t: 'Lo que propones', ops: [
        { id: 'p1', t: 'Propongo revisar si hay otros expedientes de constancias con más de 30 días hábiles.', ok: true, por: 'Miras más allá del caso.' },
        { id: 'p2', t: 'Gladys le explica mejor después.', ok: null, por: 'Prudente, pero desaprovechas la oportunidad.' },
      ] },
    ],
    res: sel => {
      const mal = sel.causa === 'c3' || sel.hecho === 'h2', buenas = ['c1', 'h1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['jefa_informada'] : [],
        out: q === 'buena' ? 'La Lic. Valer responde: «Entendido. Que Gladys me pase la lista de constancias vencidas. Buen trabajo con la UGEL».' : mal ? 'La Lic. Valer responde: «Eso no me sirve. Que Gladys me llame».' : 'La Lic. Valer responde con un «ok». No sabes si quedó tranquila.',
        pro: { ok: 'Causa, avance y propuesta en tres líneas.', risk: 'Culpar al ciudadano o responder con evasivas deja mal a toda la oficina.', info: 'Un expediente que pasa los 30 días hábiles sin justificación puede generar una queja y responsabilidad.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡Le hablaste claro a la jefa!' : mal ? 'Ese mensaje no ayudó…' : 'Le faltó algo.'],
      };
    },
    rules: [[LEY, 'TUO de la Ley 27444, art. 39: el plazo máximo de un procedimiento de evaluación previa no puede exceder de 30 días hábiles.']],
    mirada: {
      ve: 'La jefa no te pregunta para culparte: tiene que responder ella también, ante su gerente y ante control. Un buen mensaje le da la causa, lo que ya se hizo y una idea para que no vuelva a pasar.',
      visual: { tipo: 'mensaje', titulo: 'Causa, avance, propuesta', txt: 'Faltaban las resoluciones de 1994 a 1997. Ya las ubicamos en la UGEL y llegan el lunes. Propongo revisar otras constancias con más de 30 días hábiles.' },
    },
  },
  {
    id: 'c5', t: '15:00', ch: 'presencial', who: 'colega', titulo: 'La cola de la tarde', banner: 'assets/foto2/pasillo.webp', lugar: 'Ventanilla de la ORH', show: ['personas', 'tiempo', 'cumplimiento'],
    body: () => `<p>A las tres la cola llega hasta la escalera. Rubén y tú atienden juntos. Una señora de pollera y sombrero blanco espera con un papel doblado: te habla en quechua, despacio. Tú solo entiendes «<i>wawa</i>».</p><p>Tienes tiempo para <mark class="clave">dos atenciones</mark> antes de que cierre la recepción del concurso.</p>`,
    type: 'pick', n: 2, prompt: 'Elige a quién atiendes primero.', boton: 'Atender', resumen: 'Atendiste a',
    cols: ['Persona', 'Lo que necesita'],
    rows: [
      { id: 'sabina', cells: ['Doña Sabina, que habla quechua, con Rubén de intérprete', 'Su hijo, trabajador de obra, sufrió un accidente; no sabe qué papel presentar'] },
      { id: 'postul', cells: ['Un postulante del CAS que llega a las 15:55 con su expediente', 'La recepción cierra a las 16:00'] },
      { id: 'serv', cells: ['Un servidor que pide una constancia de trabajo «para ayer»', 'Es para un préstamo; puede recogerla mañana'] },
      { id: 'amigo', cells: ['Un amigo del gerente que quiere «solo una consulta» sobre el concurso', 'No tiene cita ni trámite'] },
    ],
    score: { sabina: 3, postul: 3, serv: 1, amigo: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: picks.includes('sabina') ? 5 : -2, cumplimiento: picks.includes('postul') ? 3 : -2, etica: picks.includes('amigo') ? -3 : 1 }, rel: { colega: picks.includes('sabina') ? 1 : 0 },
        flags: picks.includes('sabina') ? ['quechua_atendida'] : [],
        out: q === 'buena' ? 'Rubén le traduce a doña Sabina: «Allillanchu, mamay…». Le explican qué documento presentar por el accidente de su hijo y se lo anotan en un papel. A las 15:58 sellas el último expediente del concurso.' : picks.includes('amigo') ? 'El amigo del gerente te pregunta «cuántos postularon y quiénes van bien». Te quedas callada sin saber qué decir. El postulante de las 15:55 se queda afuera.' : 'Atiendes, pero alguien que no podía esperar se queda esperando.',
        pro: { ok: 'Primero quien tiene un plazo que vence o una necesidad urgente, y en su propia lengua.', risk: 'Darle prioridad a alguien por ser «amigo del gerente» rompe la igualdad en la ventanilla.', info: 'La constancia para el préstamo puede salir mañana: dile a qué hora la recoge.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ventanilla en dos idiomas!' : 'La ventanilla es igual para todos.'],
      };
    },
    rules: [[BP, 'En la ventanilla, la prioridad la marcan la urgencia y los plazos, no los contactos. Atiende en la lengua de la persona cuando puedas.']],
    mirada: {
      ve: 'Rubén habla quechua desde niño y nadie se lo había pedido. En Cusco, muchas personas mayores llegan al Estado sin entender el castellano de los trámites. Un intérprete en tu propio equipo cambia todo.',
      visual: { tipo: 'matriz', x: 'Tiempo que toma', y: 'Urgencia', cuadrantes: ['Ahora', 'Ahora, con ayuda', 'Mañana', 'No corresponde'], items: [['Doña Sabina', .6, .9], ['Postulante de las 15:55', .2, .95], ['Constancia para préstamo', .3, .4], ['Amigo del gerente', .3, .05]] },
    },
  },
  {
    id: 'c6', t: '16:40', ch: 'presencial', who: 'docente', titulo: '«¿Y si me quejo?»', banner: 'assets/esc/camino.webp', lugar: 'Escalera de la sede', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>El profesor Víctor se quedó esperando a su nieta en la escalera. Se acerca cuando sales a tomar aire. ${F.has('victor_parcial') ? 'Tiene la constancia incompleta en la mano.' : ''}</p><p>«Hija, una pregunta, y no se moleste. Mi vecino dice que <mark class="clave">debí quejarme hace tiempo</mark>. ¿Eso se puede? ¿O me van a demorar más si me quejo?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Explicarle que sí puede presentar una queja por el atraso ante el superior de la oficina, que eso no debe perjudicar su trámite, y contarle lo que ya se está haciendo.',
        res: { q: 'buena', fx: { etica: 5, personas: 3, confianza: 2 }, rel: { docente: 1 }, flags: ['victor_derechos'],
          out: 'El profesor te escucha con atención. «No me voy a quejar, hija. Ahora sí siento que alguien está viendo lo mío. Pero gracias por decirme la verdad.»',
          pro: { ok: 'Le informas su derecho aunque la queja sería contra tu propia oficina.', info: 'La queja por defecto de tramitación está en el TUO de la Ley 27444.' },
          kusi: ['feliz', 'La verdad, aunque no te convenga.'] } },
      { id: 'b', label: 'Decirle que mejor no, que una queja solo complica las cosas y que ya casi sale.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -1 },
          out: 'El profesor asiente, obediente. «Ya, hija, no me quejo.» Lo ves bajar las escaleras despacio, sin saber que tenía un derecho.',
          pro: { ok: 'Lo tranquilizas.', risk: 'Desanimar a un ciudadano de ejercer un derecho es justo lo contrario de lo que debe hacer un servidor público.' },
          kusi: ['indignado', '¡Era su derecho!'] } },
      { id: 'c', label: 'Decirle que no sabes y que lo consulte con un abogado.',
        res: { q: 'aceptable', fx: { personas: -1, confianza: -1 },
          out: 'El profesor sonríe con tristeza: «Abogado… eso cuesta, hija». Se despide con el sombrero.',
          pro: { ok: 'No dices nada que no sepas.', risk: 'Es información básica que la entidad debería poder darle sin costo.' },
          kusi: ['pensando', 'Eso sí lo sabías…'] } },
    ],
    rules: [[LEY, 'TUO de la Ley 27444, art. 169: el administrado puede presentar queja por defecto de tramitación ante el superior jerárquico de quien tramita.']],
    mirada: {
      ve: 'Decirle a alguien que puede quejarse de tu oficina parece ir contra ti. Pero el Estado es de las personas, no de la oficina. Quien informa derechos con honestidad construye más confianza que quien los esconde.',
      visual: { tipo: 'balanza', a: { t: '«Mejor no se queje»', items: ['La oficina se protege', 'Él no conoce su derecho'] }, b: { t: '«Sí puede, y así se hace»', items: ['Él decide con información', 'La oficina rinde cuentas', 'Confianza'] } },
      normas: [{ ley: 'TUO de la Ley 27444 (D.S. 004-2019-JUS), arts. 39 y 169', dice: 'El plazo máximo de un procedimiento de evaluación previa no excede de 30 días hábiles. Si hay defecto de tramitación, como una demora indebida, el administrado puede presentar queja ante el superior jerárquico.', practica: 'Tres meses sin respuesta superan el plazo. El profesor tiene derecho a quejarse, y la ORH a explicar qué hizo.' }],
    },
  },
];
