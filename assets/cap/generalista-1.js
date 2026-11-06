// Generalista de RR.HH. · Capítulo 1 · «Faltan 18 personas» · Semana 1, lunes.
// Hilo de las dos semanas: preparar un hotel del Cusco para la temporada alta, siendo la única persona de RR.HH.
// Normas citadas: T-Registro (alta dentro del día de ingreso); D.Leg. 713 (vacaciones de 30 días; la oportunidad del
// goce se acuerda y, a falta de acuerdo, la decide el empleador); principio de primacía de la realidad (cuando hay
// subordinación, los recibos por honorarios no evitan que exista una relación laboral).

export const CAP = {
  n: 1, titulo: 'Faltan 18 personas', dia: 'Semana 1, lunes', foto: 'assets/foto2/caminan.webp',
  lugar: 'Hotel Inti Wasi · Centro histórico del Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Cusco, centro histórico. Desde la ventana se ve la plaza. Hoy empiezas como la única generalista de RR.HH. del hotel.', boton: 'Entrar al hotel',
  kusi: '¡Aquí eres todo RR.HH. a la vez! Respira hondo… y a la altura.',
  lead: 'Entendiste qué espera la gerencia, decidiste por dónde empezar con 18 vacantes, frenaste una contratación informal, equilibraste unas vacaciones y descubriste trabajadores escondidos en recibos por honorarios.',
  reflexion: '¿Qué tarea de hoy no habrías imaginado que hacía alguien de RR.HH.?',
  siguiente: { n: 2, titulo: 'Contratos de temporada', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'vacantes', p: '18 vacantes para temporada alta', j: 'Verónica · Gerencia', d: 0, e: 'En 2 semanas' },
  { id: 'cocina', p: 'Ayudantes de cocina', j: 'Chef Rolando', d: 0, e: '4 vacantes' },
  { id: 'vacaciones', p: 'Vacaciones pendientes', j: 'Verónica · Gerencia', d: 0, e: '9 personas con vacaciones vencidas' },
  { id: 'honorarios', p: 'Personal con recibos por honorarios', j: 'Iván · Contabilidad', d: 0, e: '6 personas' },
];

export const FUTURO = {
  canales_locales: ['Activaste institutos de hotelería y referidos del personal.', 'Llegarán los primeros candidatos esta semana.'],
  chef_formal: ['El ayudante del chef entrará con alta desde el primer día.', 'El chef lo recordará en el capítulo 4.'],
  chef_informal: ['Aceptaste a un ayudante «a prueba» sin alta y pagado en efectivo.', 'Se cortará la mano en el capítulo 5.'],
  wendy_acuerdo: ['Acordaste con Wendy y Verónica una fecha de vacaciones razonable.', 'Wendy será tu aliada en recepción.'],
  wendy_no: ['Wendy se quedó sin vacaciones antes de la temporada.', 'Te contará que está agotada en el capítulo 6.'],
  honorarios_alerta: ['Alertaste a Verónica sobre los seis recibos por honorarios.', 'Será el tema del capítulo 2.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
};

export const WSP = [
  { chat: 'grupo', t: '07:05', de: 'Verónica', txt: 'Les presento a nuestra nueva generalista de RR.HH. 🙌 A partir de hoy, todo lo de personal pasa por ella.' },
  { chat: 'grupo', t: '07:08', de: 'Chef Rolando', txt: 'Bienvenida. Necesito gente en cocina para ayer 🍳' },
  { chat: 'wendy', t: '13:20', de: 'Wendy', txt: 'Hola, ¿tendrá un ratito? Es sobre mis vacaciones 🙏' },
  { chat: 'chef', t: '15:40', de: 'Chef Rolando', txt: 'Ya, que entre con contrato. Pero que sea rápido, ah.', si: 'chef_formal' },
  { chat: 'wendy', t: '17:10', de: 'Wendy', txt: '¡Gracias! Del 4 al 10 me sirve mucho, voy a ver a mi mamá a Sicuani 💛', si: 'wendy_acuerdo' },
  { chat: 'contador', t: '18:00', de: 'Iván', txt: 'Revisaré los 6 casos con usted. Tiene razón en que hay riesgo.', si: 'honorarios_alerta' },
];

export const CORREOS = [
  { t: '07:15', de: 'Verónica Quispe', para: 'Generalista de RR.HH.', asunto: 'Bienvenida a Inti Wasi', html: '<p>Bienvenida. Somos 150 personas y hasta hoy no teníamos a nadie de RR.HH.: lo hacíamos entre el contador y yo.</p><p>En dos semanas empieza la temporada alta y nos faltan 18 personas: cocina, housekeeping, recepción y mozos. Además, quiero ordenar la casa. Confío en ti.</p><p>Verónica</p>' },
  { t: '10:00', de: 'Instituto de Turismo del Cusco', para: 'RR.HH. Hotel Inti Wasi', asunto: 'Bolsa de egresados', html: '<p>Tenemos 35 egresados de Hotelería y Cocina disponibles. Podemos difundir sus convocatorias sin costo.</p>' },
];

export const QUIZ = [
  { q: '¿Cuántos días de vacaciones al año corresponden en el régimen general?', ops: ['15', '30', '20', '45'], ok: 1, por: 'El D.Leg. 713 reconoce 30 días calendario de descanso vacacional por año completo de servicios.' },
  { q: 'Si trabajador y empleador no se ponen de acuerdo en la fecha de vacaciones…', ops: ['Decide el trabajador', 'Decide el empleador', 'No se toman', 'Decide SUNAFIL'], ok: 1, por: 'La oportunidad del descanso se fija de común acuerdo; a falta de acuerdo, la decide el empleador.' },
  { q: 'Una recepcionista con horario fijo, uniforme y jefa, ¿puede estar con recibos por honorarios?', ops: ['Sí, si ella acepta', 'No: si hay subordinación, hay relación laboral', 'Sí, en temporada', 'Solo en hoteles'], ok: 1, por: 'Por primacía de la realidad, si hay subordinación hay contrato de trabajo, aunque se firmen recibos por honorarios.' },
  { q: 'El chef quiere un ayudante «a prueba una semana» sin alta. ¿Qué pasa si se accidenta?', ops: ['Nada', 'No tiene cobertura y la empresa responde', 'Lo cubre su familia', 'Lo cubre el chef'], ok: 1, por: 'Sin alta no hay cobertura de salud: el riesgo y la responsabilidad recaen en la empresa.' },
  { q: 'Con 18 vacantes en dos semanas, ¿qué canales suelen funcionar mejor en hotelería?', ops: ['Solo portales nacionales', 'Institutos locales y referidos del personal', 'Anuncios en otra ciudad', 'Esperar a que lleguen CV'], ok: 1, por: 'Los canales locales traen gente con formación y disponibilidad inmediata.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:20', ch: 'presencial', who: 'veronica', titulo: 'Desayuno con la gerenta', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del hotel', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Verónica te invita un mate de coca en el comedor, mientras los primeros huéspedes desayunan con vista a la plaza.</p><p>«Bienvenida${n ? ', ' + n : ''}. Tengo veinte minutos antes de una reunión con una agencia. <mark class="clave">Pregúntame lo que necesites</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Decide qué información te sirve más hoy.',
    opts: [
      { id: 'prior', label: '¿Qué es lo más urgente para usted?', info: '«Las 18 personas. Si en temporada alta no tengo cocina ni housekeeping completos, las reseñas nos hunden. Lo demás puede esperar unas semanas.»' },
      { id: 'casa', label: '¿Qué está desordenado en la gestión de personal?', info: '«Todo un poco. Contratos vencidos, vacaciones que nadie toma y algunos chicos que trabajan con recibos por honorarios porque así lo hizo el contador anterior.»' },
      { id: 'cultura', label: '¿Qué hace diferente a este hotel?', info: '«Que casi todos son de aquí, de Cusco y sus provincias. Los huéspedes lo notan: la atención es cálida. No quiero perder eso con la prisa.»' },
      { id: 'exito', label: '¿Cómo sabré que lo estoy haciendo bien?', info: '«Si llegamos a la temporada completos y si el personal empieza a venir a ti con sus dudas en lugar de venir a mí.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('casa') ? 2 : 1, tiempo: -1 }, rel: { veronica: 1 },
      out: 'Verónica se va a su reunión. Te deja una carpeta con contratos de distintos años y una lista escrita a mano: «cocina 4, housekeeping 7, recepción 3, mozos 4».',
      kusi: ['curioso', 'Urgente y desordenado a la vez. ¡Esto es ser generalista!'],
    }),
    mirada: {
      ve: 'Una generalista hace de todo: selección, contratos, planilla, clima y conflictos. Por eso su primera tarea es entender qué le importa más a la gerencia y qué está desordenado, para no perderse en lo urgente.',
      visual: { tipo: 'flujo', titulo: 'Lo que hace una generalista en dos semanas', pasos: ['Contratar', 'Formalizar', 'Pagar bien', 'Cuidar el clima', 'Ordenar la casa'] },
    },
  },
  {
    id: 'g2', t: '09:00', ch: 'documento', who: null, titulo: 'Dieciocho vacantes', banner: 'assets/foto2/collage.webp', show: ['tiempo', 'calidad', 'personas'],
    body: () => `<p>Tienes dos semanas para 18 personas y nadie más en RR.HH. Hoy puedes activar <mark class="clave">dos frentes</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos frentes con los que empiezas.', boton: 'Activar estos frentes', resumen: 'Activaste',
    cols: ['Frente', 'Qué esperas'],
    rows: [
      { id: 'instituto', cells: ['Convocatoria con los institutos de turismo y cocina del Cusco', 'Egresados formados y disponibles'] },
      { id: 'referidos', cells: ['Pedir referidos al personal actual', 'Gente de confianza que ya conoce el hotel'] },
      { id: 'portal', cells: ['Aviso pagado en un portal nacional', 'Postulantes de todo el país'] },
      { id: 'perfiles', cells: ['Escribir perfiles completos de los 18 puestos antes de buscar', 'Orden'] },
      { id: 'redes', cells: ['Publicación en el Instagram del hotel', 'Visibilidad'] },
    ],
    score: { instituto: 3, referidos: 3, portal: 0, perfiles: 1, redes: 1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : 1 },
        flags: q === 'buena' ? ['canales_locales'] : [], cartera: { vacantes: q === 'buena' ? 'Institutos y referidos activados' : 'Búsqueda iniciada' },
        out: q === 'buena' ? 'El instituto responde en una hora: 35 egresados recibirán tu convocatoria. Y el personal ya te pasa nombres de primos y vecinos.' : 'Tu búsqueda arranca, pero lenta para dos semanas.',
        pro: { ok: 'En hotelería, los canales locales traen gente formada y disponible ya.', risk: 'Los perfiles completos son útiles, pero escribir 18 antes de buscar te deja sin tiempo.', info: 'Con referidos, define una regla: quien refiere no evalúa.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Gente del Cusco para el Cusco!' : '¿Dónde está la gente que necesitas ya?'],
      };
    },
    rules: [[BP, 'Con poco tiempo, empieza por los canales con gente disponible y cercana.']],
    mirada: {
      ve: 'Una generalista no puede hacer un proceso perfecto para 18 puestos en dos semanas. Elige los canales que traen gente rápido y bien, y simplifica sin saltarse lo esencial.',
      visual: { tipo: 'matriz', x: 'Velocidad', y: 'Ajuste al hotel', cuadrantes: ['Actívalo ya', 'Actívalo', 'Complemento', 'Después'], items: [['Institutos locales', .75, .8], ['Referidos', .8, .75], ['Portal nacional', .4, .35], ['Perfiles completos', .15, .6], ['Instagram', .6, .3]] },
    },
  },
  {
    id: 'g3', t: '11:15', ch: 'presencial', who: 'chef', titulo: 'Un ayudante «a prueba»', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Cocina del hotel', show: ['cumplimiento', 'personas', 'etica'],
    body: () => `<p>En la cocina hace calor y huele a ají de gallina. El chef Rolando corta cebolla sin mirar el cuchillo.</p><p>«Tengo un muchacho bueno, Kevin. <mark class="clave">Que entre mañana a prueba una semana, le pago diario en efectivo</mark>. Si sirve, después lo ponemos en planilla.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que Kevin puede entrar mañana, pero con contrato y alta desde el primer día; el periodo de prueba ya existe dentro del contrato.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 3, tiempo: -2 }, rel: { chef: 0 }, flags: ['chef_formal'], cartera: { cocina: 'Kevin entra mañana con contrato y alta' },
          out: 'El chef deja el cuchillo: «¿Y si no sirve?». Le explicas que el periodo de prueba es parte del contrato. Lo piensa y asiente.',
          pro: { ok: 'Resuelves la urgencia del chef y Kevin entra protegido.', risk: 'Tienes que preparar el contrato y el alta para mañana a primera hora.', info: 'En el régimen general existe un periodo de prueba dentro del contrato; no hace falta trabajar «sin papeles» para probar a alguien.' },
          kusi: ['animo', 'Rápido y con seguro. ¡Bien!'] } },
      { id: 'b', label: 'Aceptar: es solo una semana, el chef necesita gente ya y es común en la hotelería del Cusco probar así.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -3, tiempo: 2 }, rel: { chef: 1 }, flags: ['chef_informal'],
          out: 'Mañana Kevin trabajará con cuchillos y fuego, sin alta, sin seguro y sin contrato.',
          pro: { ok: 'El chef tiene ayuda mañana.', risk: 'Una semana sin alta es una semana sin cobertura. Que «sea común» no lo hace legal.' },
          kusi: ['preocupado', 'Cuchillos, fuego… y sin seguro.'] } },
    ],
    rules: [[LEY, 'El alta en T-Registro se registra dentro del día de ingreso del trabajador.'], [LEY, 'El periodo de prueba forma parte de la relación laboral: no requiere trabajar sin contrato.']],
    mirada: {
      ve: 'La informalidad suele entrar por la puerta de la urgencia: «solo una semana», «a prueba», «después lo formalizamos». Una generalista ofrece el camino rápido y formal, para que no haya que elegir.',
      visual: { tipo: 'balanza', a: { t: '«A prueba» en efectivo', items: ['Rápido', 'El chef contento'] }, b: { t: 'Contrato y alta mañana', items: ['Seguro desde el primer corte', 'Periodo de prueba legal', 'Cero contingencias'] } },
    },
  },
  {
    id: 'g4', t: '13:30', ch: 'presencial', who: 'wendy', titulo: 'Las vacaciones de Wendy', banner: 'assets/foto2/entrevista-cv.webp', lugar: 'Recepción', show: ['personas', 'confianza', 'cumplimiento'],
    body: () => `<p>Wendy, recepcionista bilingüe, lleva dos años sin tomar vacaciones. Habla quechua, inglés y castellano, y los huéspedes la adoran.</p><p>«Quiero ir a ver a mi mamá a Sicuani antes de la temporada. Verónica dice que <mark class="clave">nadie sale de vacaciones hasta diciembre</mark>. ¿Puede ayudarme?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Revisar con Verónica y con Wendy una semana antes de la temporada, y que el resto de sus días se programe en la temporada baja.',
        res: { q: 'buena', fx: { personas: 5, confianza: 2, cumplimiento: 3 }, rel: { wendy: 1, veronica: 0 }, flags: ['wendy_acuerdo'], cartera: { vacaciones: 'Wendy: del 4 al 10; resto en temporada baja' },
          out: 'Verónica duda, pero acepta: «Una semana, y que deje entrenada a la nueva de recepción». Wendy sale de la oficina sonriendo.',
          pro: { ok: 'Buscas un acuerdo que respeta el derecho de Wendy y la operación del hotel.', risk: 'Si la nueva recepcionista no está lista, la semana se complica.', info: 'Haz un rol de vacaciones del año: así no se acumulan.' },
          kusi: ['celebra', 'Wendy verá a su mamá. ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle a Wendy que la gerencia decide la fecha y que tendrá que esperar.',
        res: { q: 'aceptable', fx: { personas: -3, cumplimiento: 1 }, rel: { wendy: -1 }, flags: ['wendy_no'],
          out: 'Técnicamente es cierto: sin acuerdo, decide el empleador. Pero Wendy lleva dos años sin descansar y se va callada.',
          pro: { ok: 'Lo que dices es legal.', risk: 'Que algo sea legal no lo hace la mejor decisión. Y vacaciones acumuladas tienen sus propias consecuencias.' },
          kusi: ['triste', 'Legal… pero Wendy está agotada.'] } },
    ],
    rules: [[LEY, 'D.Leg. 713: 30 días de vacaciones por año; la fecha se acuerda y, a falta de acuerdo, la fija el empleador.'], [BP, 'Planifica un rol anual de vacaciones para que no se acumulen.']],
    mirada: {
      ve: 'Muchas decisiones de RR.HH. son legales de varias maneras. La diferencia la hace el criterio: cuidar a una persona clave sin poner en riesgo la operación.',
      visual: { tipo: 'linea', titulo: 'Un rol de vacaciones sensato', hitos: [['Antes de temporada', 'Una semana para Wendy'], ['Temporada alta', 'Equipo completo'], ['Temporada baja', 'Resto de vacaciones'], ['Cada enero', 'Rol anual acordado']] },
      normas: [{ ley: 'D.Leg. 713, descansos remunerados', dice: 'El trabajador tiene derecho a 30 días de descanso vacacional por año completo de servicios. La oportunidad del descanso se fija de común acuerdo y, a falta de acuerdo, la decide el empleador.', practica: 'Que el empleador pueda decidir no significa que deba hacerlo sin escuchar.' }],
    },
  },
  {
    id: 'g5', t: '16:00', ch: 'documento', who: null, titulo: 'Los recibos por honorarios', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>El contador Iván te manda la lista de personas que cobran con recibos por honorarios. «Así lo dejó el contador anterior. <mark class="clave">Dígame si ve algo raro</mark>.»</p>`,
    type: 'flag', prompt: 'Marca los casos en que el recibo por honorarios probablemente esconde una relación laboral.',
    doc: { t: 'Personal con recibos por honorarios', sub: 'Hotel Inti Wasi · octubre' },
    lines: [
      { id: 'recep', t: 'Recepcionista nocturna: horario fijo de 22:00 a 06:00, uniforme del hotel, reporta a Wendy.', bad: LEY, why: 'Horario fijo, uniforme y jefa: hay subordinación. Por primacía de la realidad, es una relación laboral.' },
      { id: 'mozo', t: 'Mozo: turnos asignados por el maître, seis días por semana, desde hace dos años.', bad: LEY, why: 'Trabajo permanente, subordinado y con turnos asignados: es un trabajador.' },
      { id: 'guia', t: 'Guía de turismo: cobra por tour, decide sus fechas y trabaja con varias agencias.', duda: 'Aquí sí parece un servicio independiente: él decide cuándo y para quién trabaja.' },
      { id: 'foto', t: 'Fotógrafo de bodas: dos eventos al año, con su propio equipo.' },
      { id: 'hk', t: 'Camarera de housekeeping: horario de 7:00 a 15:00, la supervisa la gobernanta.', bad: LEY, why: 'Horario, supervisión y labor permanente: es una relación laboral.' },
      { id: 'web', t: 'Diseñador de la web: entrega por proyecto, trabaja desde Lima.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le dices a Iván que todo está bien. Tres personas siguen sin vacaciones, sin CTS y sin seguro.' : `Le marcas ${hitsLey} casos a Iván. Él suspira: «Lo sospechaba. Hay que conversarlo con Verónica».`,
      flags: missLey ? [] : ['honorarios_alerta'], rel: { contador: missLey ? 0 : 1 },
      cartera: { honorarios: missLey ? 'Sin cambios' : `${hitsLey} casos para regularizar` },
      pro: { ok: 'Lo que define una relación laboral es cómo se trabaja, no el papel que se firma.', risk: 'Una inspección puede reconocer esas relaciones laborales con todos sus beneficios atrasados.', info: 'Antes de regularizar, calcula cuánto costaría: Verónica lo preguntará.' },
      kusi: missLey ? ['preocupado', 'Esos recibos escondían trabajadores…'] : ['celebra', '¡Ojo de generalista!'],
    }),
    rules: [[LEY, 'Primacía de la realidad: si hay prestación personal, remunerada y subordinada, hay contrato de trabajo, aunque se firmen recibos por honorarios.']],
    mirada: {
      ve: 'Los recibos por honorarios son para servicios independientes. Cuando alguien tiene horario, jefe y uniforme, el papel no cambia la realidad: es un trabajador con todos sus derechos.',
      visual: { tipo: 'balanza', a: { t: 'Servicio independiente', items: ['Decide sus horarios', 'Trabaja para varios', 'Usa su propio equipo'] }, b: { t: 'Relación laboral', items: ['Horario fijo', 'Un jefe que lo dirige', 'Uniforme y labor permanente'] } },
    },
  },
  {
    id: 'g6', t: '18:30', ch: 'whatsapp', who: null, titulo: 'Para Verónica', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Verónica te escribe desde la agencia de viajes.</p>`,
    chat: ['¿Cómo te fue en tu primer día? 🏔️'],
    type: 'choice',
    choices: [
      { id: 'a', label: 'Avance en vacantes, el riesgo de los honorarios y una propuesta.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { veronica: 1 }, envia: ['veronica', 'Bien 🙌 Institutos y referidos activados para las 18 vacantes; Kevin entra mañana con contrato. Riesgo: 3 personas con recibos por honorarios trabajan como empleados. ¿Le parece si mañana le presento cuánto costaría regularizarlos?'],
          out: 'Verónica responde: «Me preocupaba eso. Sí, mañana». Llevas un día y ya tienes agenda con la gerenta.', kusi: ['feliz', '¡Generalista con todo!'] } },
      { id: 'b', label: 'Que fue un día movido pero bonito.',
        res: { q: 'aceptable', fx: { confianza: 1 }, envia: ['veronica', '¡Movido pero bonito! Mañana sigo 😊'],
          out: 'Verónica responde con un corazón. El riesgo de los honorarios sigue en tu cabeza, no en la suya.', kusi: ['pensando', 'Había algo importante que contar.'] } },
    ],
    mirada: { ve: 'Una generalista que reporta riesgos con una propuesta de solución se convierte rápido en la persona de confianza de la gerencia.' },
  },
];
