// Asistente de Capacitación · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Último capítulo escrito de la temporada: balance de las dos semanas, pregunta «¿te ves en este puesto?» y final abierto.
// Normas repasadas (ya verificadas en capítulos anteriores):
// - Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 27-A: la capacitación al momento de la contratación es presencial;
//   art. 28: dentro de la jornada; art. 98: fuera de la jornada se remunera.
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
//   https://lpderecho.pe/capacitaciones-seguridad-salud-trabajo-deben-realizarse-durante-jornada-laboral-informe-82-2015-mtpe/
// - Ley 29973, art. 50: ajustes razonables.
//   https://cdn.www.gob.pe/uploads/document/file/5843154/5182571-rd-129-2024-munoz-loayza-henry-otorgamiento-y-aplicacion-de-ajustes-razonables.pdf
// - Reglamento de Establecimientos Farmacéuticos (D.S. 014-2011-SA): la dispensación le corresponde al químico farmacéutico.
//   https://cdn.www.gob.pe/uploads/document/file/5300941/4754645-comunicado-n-03-para-directores-tecnicos.pdf
// - Ley 29733: datos personales en registros, notas y constancias.
// La escuela en Chiclayo, sus cifras y plazos son ficticios y se desarrollan en la Semana 3.

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto/cafe.webp',
  lugar: 'Boticas del Norte · Sede de capacitación, Av. España',
  inicio: '08:00', fin: '18:30', cierreHora: '18:15',
  apertura: 'Viernes. El aula está vacía por primera vez en diez días: las sillas apiladas, las dos cajas de práctica tapadas con una sábana y el billete de cien de juguete todavía pegado en la pared. Karen llega con dos cafés y una cara que no sabes leer.', boton: 'Sentarte con Karen',
  kusi: 'Ciento veinte personas, seis grupos, un aula inundada… ¡y aquí estás! Mira todo lo que pasó.',
  lead: 'Escuchaste tu evaluación, hiciste el balance de la escuela, defendiste lo que no se puede recortar, ordenaste lo aprendido y respondiste la pregunta de fondo. Y a las 5:40 llegó un correo que cambia el lunes.',
  reflexion: 'Si el lunes empezaras otra escuela desde cero, ¿qué harías distinto desde la primera hora?',
  siguiente: { n: 11, titulo: 'La escuela viaja a Chiclayo', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'evaluacion', p: 'Tu evaluación de las dos semanas', j: 'Karen · Capacitación', d: 0, e: 'Hoy, 8:15' },
  { id: 'balance', p: 'Balance de la escuela', j: 'Tú', d: 0, e: 'Por escribir' },
  { id: 'formato', p: 'Formato para la próxima escuela', j: 'Karen y Benites', d: 0, e: 'Sin decidir' },
  { id: 'pendientes', p: 'Pendientes: reexamen de Yanet y cajeros antiguos', j: 'Tú', d: 0, e: 'Lunes' },
  { id: 'chiclayo', p: 'Algo que Benites pidió para el lunes', j: 'Karen', d: 0, e: 'Por contar' },
];

export const FUTURO = {
  balance_honesto: ['Tu balance cuenta lo que funcionó, lo que no y lo que aprendiste.', 'Karen lo llevará a Chiclayo.'],
  formato_defendido: ['Defendiste que la inducción de seguridad siga presencial y la escuela tenga tres días.', 'Benites lo pondrá a prueba en la Semana 3.'],
  formato_recortado: ['Aceptaste una escuela de un solo día para ahorrar.', 'En Chiclayo sabrás si alcanzó.'],
  lecciones_ordenadas: ['Ordenaste lo aprendido en un plan para la próxima escuela.', 'Será tu guía en la Semana 3.'],
  me_veo: ['Te ves en este puesto.', 'El lunes empieza tu tercera semana.'],
  me_veo_crecer: ['Te ves en Capacitación, creciendo hacia analista.', 'Karen ya lo sabe.'],
  dudo: ['Todavía no sabes si este puesto es para ti.', 'La Semana 3 te ayudará a decidir.'],
  lunes_listo: ['Respondiste a Karen con un plan para el lunes.', 'Chiclayo empieza con orden.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  mario: { n: 'Mario Infante', sub: 'Jefe del local de La Esperanza', who: 'local' },
  grupo1: { n: 'Escuela de cajeros · Todos los grupos', sub: '118 participantes', c: '#2F6B3F' },
  yanet: { n: 'Yanet Chávez', sub: 'Participante · Grupo 1', c: '#B83280' },
};

export const WSP = [
  { chat: 'grupo1', t: '08:05', de: 'Daniela', txt: 'Ayer me aceptaron en el instituto con la constancia 🥹 Gracias, escuela.', si: 'constancias_entregadas' },
  { chat: 'yanet', t: '08:40', de: 'Yanet', txt: 'Señorita, la bebé ya está mejor. El lunes a las 9 estoy ahí, con la hoja hecha 💪', si: 'yanet_reprogramada' },
  { chat: 'mario', t: '10:15', de: 'Mario', txt: 'Señorita, esta semana cero faltantes tapados. Todo al acta, con lapicero 😎', si: 'faltante_reportado' },
  { chat: 'mario', t: '10:15', de: 'Mario', txt: 'Señorita, ¿y para los antiguos cuándo hay escuela? Tengo tres más como Elvira.', si: 'elvira_cuidada' },
  { chat: 'jorge', t: '13:20', de: 'Jorge', txt: 'Colega, me llamaron de Operaciones. ¿Tú sabías de Chiclayo? 👀' },
  { chat: 'area', t: '16:00', de: 'Fiorella', txt: 'Dato: el viernes pasado 19 de 40 entraban a AulaNorte. Hoy 116 de 118. Me voy a poner eso en mi CV 😂', si: 'ce_resuelto' },
];

export const CORREOS = [
  { t: '07:50', de: 'Ing. Raúl Benites', para: 'Karen Vásquez; Capacitación', asunto: 'Resultados de la escuela', html: '<p>Gracias por el informe del jueves. Los locales con cajeros de la escuela muestran menos diferencias de caja en noviembre; todavía es poco para concluir. Lo de los faltantes cubiertos con dinero propio me preocupa y lo revisaremos con los jefes zonales.</p><p>Hoy a las 5 les escribo con un pedido.</p>' },
  { t: '17:40', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Chiclayo', html: '<p>Benites aprobó la escuela… y la quiere en Chiclayo. El lunes ingresan 60 cajeros para los ocho locales nuevos de allá. Jorge no puede viajar toda la semana, el aula que nos ofrecen es el segundo piso de un local en la avenida Balta y nadie sabe si tiene enchufes.</p><p>Te quiero conmigo. Salimos el lunes a las 5 de la mañana en el bus de la empresa. Trae tu cuaderno de la escuela.</p><p>Karen</p>' },
];

export const QUIZ = [
  { q: 'Para una nueva escuela, ¿qué parte no puede pasar a virtual?', ops: ['El módulo de boletas', 'La inducción de seguridad y salud de ingreso', 'La encuesta', 'Los casos de derivación'], ok: 1, por: 'La capacitación de SST al momento de la contratación es presencial (Reglamento de la Ley 29783, art. 27-A).' },
  { q: 'Un buen balance de una capacitación incluye…', ops: ['Solo lo que salió bien', 'Resultados por nivel, lo que falló y lo que se cambiará', 'Solo la asistencia', 'Fotos del cierre'], ok: 1, por: 'Reacción, aprendizaje y aplicación, con lo que se aprendió para la próxima.' },
  { q: 'De estas dos semanas, ¿qué explica mejor que La Esperanza no mandara a nadie al inicio?', ops: ['Mala voluntad del jefe', 'Falta de cobertura por renuncias', 'Que el aula era lejos', 'Que la escuela era aburrida'], ok: 1, por: 'La causa real era la cobertura; el cajero volante la resolvió.' },
  { q: 'Lo que viste en el local, que no mostraron ni la encuesta ni el examen, fue…', ops: ['El uniforme', 'Cómo se aplica en caja lo aprendido, y lo que pasa con los cajeros antiguos', 'La asistencia', 'La nota'], ok: 1, por: 'Es el nivel de aplicación: solo se ve en el puesto.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:15', ch: 'presencial', who: 'karen', titulo: 'Tu evaluación', banner: 'assets/foto/reunion-jefa.webp', show: ['confianza'],
    body: (n) => `<p>Karen se sienta en una de las sillas apiladas y te da tu café. «Antes de nada, ${n || 'colega'}: quiero contarte cómo te vi estas dos semanas. <mark class="clave">Pregúntame lo que quieras saber</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Karen.',
    opts: [
      { id: 'bien', label: '¿Qué hice bien?', info: '«Me trajiste números cuando yo traía entusiasmo. El día de las causas de la plataforma, el reporte de La Esperanza, el cruce de errores por tema… con eso defendí la escuela frente a Benites.»' },
      { id: 'mejorar', label: '¿En qué debo mejorar?', info: '«En pedir ayuda antes. A veces te quedaste hasta tarde arreglando lo que podías haber repartido. La logística es un trabajo de equipo, no de una sola persona heroica.»' },
      { id: 'jorge', label: '¿Qué te dijo Jorge de mí?', info: '«Que eres la primera persona de RR.HH. que le discute con argumentos y le invita un café. Y que el cronómetro fue idea tuya, aunque diga que fue de él.»' },
      { id: 'futuro', label: '¿Qué viene para la escuela?', info: 'Karen sonríe de lado. «Eso te lo cuento a las cinco. Benites tiene un pedido. Solo te digo que guardes tu cuaderno.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3 }, rel: { karen: 1 },
      out: picks.includes('mejorar') ? 'Te quedas con la frase: «la logística es un trabajo de equipo». La anotas en la última página del cuaderno de la escuela.' : 'Karen te da una palmada en el hombro. «Ahora tú: haz el balance. Sin adornos.»',
      kusi: ['feliz', '¡Dos semanas que se notan!'],
    }),
    mirada: {
      ve: 'Una evaluación de cierre sirve si dice lo que salió bien y lo que hay que mejorar, con ejemplos. Pedirla y escucharla sin defenderte es parte de aprender un oficio.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Karen valoró', items: ['Números y causas', 'Reportes honestos', 'Café con Jorge'] }, b: { t: 'Lo que puedes mejorar', items: ['Pedir ayuda antes', 'Repartir tareas', 'No cargar todo sola'] } },
    },
  },
  {
    id: 'd2', t: '09:30', ch: 'documento', who: null, titulo: 'El balance', banner: 'assets/esc/logro.webp', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Abres el cuaderno de la escuela, lleno de flechas, horas y nombres. ${F.has('informe_visita') ? 'Tu informe de visita está pegado con cinta en la última página.' : 'Repasas página por página.'} Karen quiere el balance <mark class="clave">en una hoja, sin adornos</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del balance.', boton: 'Guardar el balance',
    bloques: [
      { id: 'logro', t: 'Lo que se logró', n: 2, ops: [
        { id: 'l1', t: '118 de 120 capacitados; todos con su inducción de seguridad presencial antes de su primer turno en caja.', ok: true, por: 'El dato que más importa, con la parte obligatoria.' },
        { id: 'l2', t: 'Los cajeros nuevos que vimos en caja cobran sin errores y derivan al químico farmacéutico.', ok: true, por: 'El nivel de aplicación, con lo observado.' },
        { id: 'l3', t: 'Satisfacción de 4.8 de 5: la escuela fue un éxito.', ok: false, por: 'La encuesta vieja no medía aprendizaje, y lo sabes.' },
      ] },
      { id: 'falla', t: 'Lo que falló', n: 2, ops: [
        { id: 'f1', t: 'El arqueo se enseñó tarde y apurado los primeros días: la mitad del grupo 1 y 2 desaprobó.', ok: true },
        { id: 'f2', t: 'La plataforma no estaba lista para carnés de extranjería ni para personas con discapacidad auditiva.', ok: true },
        { id: 'f3', t: 'Los participantes no estudiaron lo suficiente.', ok: false, por: 'Culpa a quien menos poder tenía y no dice qué cambiar.' },
      ] },
      { id: 'sig', t: 'Lo que sigue', n: 2, ops: [
        { id: 's1', t: 'Llevar la escuela a los cajeros antiguos: el caso del jarabe y los faltantes tapados lo muestran.', ok: true },
        { id: 's2', t: 'Medir en enero los faltantes de los locales con y sin cajeros de la escuela.', ok: true, por: 'El nivel de resultados.' },
        { id: 's3', t: 'Dar por terminada la escuela: ya se cumplió la meta.', ok: false, por: 'Lo más importante (los resultados) todavía no se ha medido.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { karen: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['balance_honesto'] : [], cartera: { balance: q === 'buena' ? 'Balance honesto: logros, fallas y lo que sigue' : 'Balance con adornos' },
        out: q === 'buena' ? 'Karen lo lee dos veces. «Esto no es un informe de capacitación: es un plan.» Lo imprime y lo dobla en su agenda.' : 'El balance sale, pero se apoya en lo que ya sabes que no medía bien.',
        pro: { ok: 'Un balance honesto separa lo logrado de lo que falló y dice qué viene.', risk: 'Un balance que solo celebra no le sirve a nadie para la próxima escuela.', info: 'Guarda una copia con los nombres de quienes te ayudaron: Tito, Fiorella, Jorge.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que vale dos semanas!' : 'Le sobran adornos.'],
      };
    },
    mirada: {
      ve: 'En dos semanas viste los cuatro niveles de una capacitación: lo que les gustó, lo que aprendieron, lo que hacen en caja y — todavía por medir — si bajan los faltantes. Un balance que lo dice así es el que permite mejorar.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['S1 lunes', 'Aula inundada'], ['S1 martes', '19 de 40 entran'], ['S1 miércoles', 'Las diapositivas de Jorge'], ['S1 jueves', 'La Esperanza: 0 de 6'], ['S1 viernes', 'La mitad desaprueba'], ['S2 lunes', '«Muy bonito»'], ['S2 martes', 'Constancias reales'], ['S2 miércoles', 'La señora con tos'], ['S2 jueves', 'El último grupo']] },
    },
  },
  {
    id: 'd3', t: '11:20', ch: 'llamada', who: 'karen', titulo: '«¿Un día en vez de tres?»', banner: 'assets/foto2/tension.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Karen sale a contestar a Benites y vuelve con el celular en altavoz, mudo. «Me pregunta si la próxima escuela puede ser de un solo día, para ahorrar. O todo virtual, "que ahora ya funciona la plataforma". <mark class="clave">Dame tu opinión antes de que le conteste</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mantener los tres días: la inducción de seguridad presencial no se puede recortar, el día virtual ya funciona y el día de caja es el que más evita faltantes. Ofrecer ahorrar en otra cosa: aulas propias y refrigerios.',
        res: { q: 'buena', fx: { cumplimiento: 4, calidad: 4, confianza: 2 }, rel: { karen: 1 }, flags: ['formato_defendido'], cartera: { formato: 'Tres días defendidos; ahorro en aulas y refrigerios' },
          out: 'Karen se lo dice a Benites casi con tus palabras. Hay un silencio. «Ya. Tres días. Pero lo pruebas en Chiclayo y me traes números.»',
          pro: { ok: 'Defiendes lo obligatorio y lo que funciona, y ofreces un ahorro real.', risk: 'Ahora la escuela tiene que demostrar resultados en un lugar nuevo.', info: 'Lleva el cruce de errores por tema como prueba.' },
          kusi: ['animo', '¡Defendiste la escuela con datos!'] } },
      { id: 'b', label: 'Aceptar un día presencial intensivo: seguridad, caja y examen, todo junto.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, calidad: -2 }, flags: ['formato_recortado'], cartera: { formato: 'Un día intensivo' },
          out: 'Benites queda contento. Tú recuerdas el martes del grupo 1: la inducción se extendió y el arqueo quedó en 25 minutos.',
          pro: { ok: 'Se cumple la inducción presencial y se ahorra.', risk: 'Todo en un día repite lo que ya falló: el arqueo apurado.' },
          kusi: ['pensando', '¿Y el arqueo, otra vez a la carrera?'] } },
      { id: 'c', label: 'Pasar todo a virtual: la plataforma ya funciona y es lo más barato.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, calidad: -3 }, cartera: { formato: 'Todo virtual' },
          out: 'Karen te mira sorprendida. «¿Y la inducción de seguridad? Esa tiene que ser presencial.» No le contesta eso a Benites.',
          pro: { ok: 'Es lo más barato.', risk: 'La capacitación de SST al ingresar es presencial, y el arqueo no se aprende en un video.' },
          kusi: ['preocupado', 'Eso no se puede.'] } },
    ],
    rules: [[LEY, 'La capacitación de SST al momento de la contratación es presencial (Reglamento de la Ley 29783, art. 27-A).']],
    mirada: {
      ve: 'Recortar una capacitación siempre parece fácil desde una oficina. Quien estuvo en el aula sabe qué parte no se puede tocar (la obligatoria), qué parte funciona (la práctica en caja) y dónde sí se puede ahorrar.',
      visual: { tipo: 'matriz', x: 'Ahorro', y: 'Lo que aprenden', cuadrantes: ['Ahorra y enseña', 'Enseña, cuesta', 'Ni una ni otra', 'Ahorra, no enseña'], items: [['Tres días, aulas propias', .6, .85], ['Un día intensivo', .75, .4], ['Todo virtual', .95, .1]] },
    },
  },
  {
    id: 'd4', t: '14:00', ch: 'documento', who: null, titulo: 'Lo que aprendiste, en orden', banner: 'assets/esc/escalera.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Almuerzas un arroz con pato del menú de la esquina, el último de esta escuela. Karen te pide que conviertas lo aprendido en <mark class="clave">los pasos para armar la próxima escuela</mark>, donde sea que toque.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para preparar una escuela. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'turnos', t: 'Conocer los turnos y la cobertura de cada local, y ofrecer volantes', por: 'Lo que aprendiste con Mario.' },
      { id: 'aula', t: 'Revisar el aula en persona y tener un aula de respaldo', por: 'Lo que aprendiste con el tubo roto.' },
      { id: 'plat', t: 'Probar la plataforma con DNI, carné de extranjería y lector de pantalla o transcripción', por: 'Lo que aprendiste con Daniela y Kevin.' },
      { id: 'agenda', t: 'Acordar por escrito la agenda con el facilitador', por: 'Lo que aprendiste con Jorge.' },
      { id: 'eval', t: 'Revisar el examen y la encuesta antes de aplicarlos', por: 'Lo que aprendiste el viernes y el lunes.' },
      { id: 'local', t: 'Visitar los locales a la semana', por: 'Lo que aprendiste en La Esperanza.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['lecciones_ordenadas'] : [], cartera: { formato: q === 'buena' ? 'Plan de seis pasos para la próxima escuela' : 'Lecciones sin ordenar' },
        out: q === 'buena' ? 'Seis pasos, uno por cada golpe de estas dos semanas. Karen les toma foto: «Esto va en la primera página de cualquier escuela que hagamos».' : 'Los pasos están, pero en un orden que repetiría algún error.',
        pro: { ok: 'Convertir errores en pasos es lo que hace que no se repitan.', risk: 'Lo aprendido que no se escribe se olvida en la próxima urgencia.', info: 'Agrega a quién llamar en cada paso.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cada error, un paso!' : 'El orden importa.'],
      };
    },
    mirada: {
      ve: 'Lo que viviste estas dos semanas no fue mala suerte: es lo que pasa en casi toda capacitación grande. Ordenarlo en pasos es transformar experiencia en método.',
      visual: { tipo: 'flujo', titulo: 'Cómo preparar una escuela', pasos: ['Turnos y cobertura', 'Aula y respaldo', 'Plataforma para todos', 'Agenda escrita', 'Examen y encuesta revisados', 'Visita al local'] },
    },
  },
  {
    id: 'd5', t: '16:30', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/esc/piensa.webp', lugar: 'Aula vacía', show: ['confianza'],
    body: (n, F) => `<p>Karen se fue a Operaciones. Te quedas sola en el aula. El señor Tito pasa a despedirse y te deja un caramelo de limón. ${F.has('elvira_cuidada') ? 'En el celular tienes el audio de Mario contando que Elvira llegó feliz al local.' : 'En el celular tienes decenas de mensajes de agradecimiento.'}</p><p>Dos semanas de aulas, Excel, plataformas, jefes de local, exámenes y constancias. <mark class="clave">¿Te ves en este puesto?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí. Me gusta que lo invisible funcione: que la gente llegue, entre, aprenda y se vaya con su constancia.',
        res: { q: null, fx: { confianza: 2 }, flags: ['me_veo'],
          out: 'Despegas el billete de cien de juguete de la pared y lo guardas en el cuaderno. Es tu primer recuerdo del oficio.',
          kusi: ['feliz', '¡La logística también enseña!'] } },
      { id: 'b', label: 'Sí, pero quiero crecer: diseñar la capacitación, no solo organizarla. Algún día, ser analista como Karen.',
        res: { q: null, fx: { confianza: 2 }, flags: ['me_veo_crecer'],
          out: 'Le escribes a Karen: «Quiero aprender a diseñar, no solo a organizar». Responde con un solo emoji: un cohete.',
          kusi: ['celebra', '¡Para eso hay que haber cargado las sillas primero!'] } },
      { id: 'c', label: 'Todavía no lo sé. Me gustaron las personas, pero me pesó estar en todo a la vez.',
        res: { q: null, fx: { confianza: 0 }, flags: ['dudo'],
          out: 'Te quedas un rato más en el aula, en silencio. No saber también es una respuesta honesta después de dos semanas así.',
          kusi: ['pensando', 'Dudar es parte de elegir.'] } },
    ],
    mirada: {
      ve: 'Asistente de Capacitación es un puesto donde casi nadie ve tu trabajo hasta que algo falla: un aula, una clave, una constancia. Si te gusta que lo invisible funcione para que otros aprendan, este puede ser tu lugar.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pesa', items: ['Estar en todo a la vez', 'Jefes que no liberan gente', 'Plataformas que fallan'] }, b: { t: 'Lo que vale', items: ['Yanet cuadrando al céntimo', 'Daniela en el instituto', 'Elvira, por fin capacitada'] } },
    },
  },
  {
    id: 'd6', t: '17:45', ch: 'whatsapp', who: null, titulo: 'El correo de las 5:40', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida España', show: ['confianza', 'calidad', 'tiempo'],
    body: () => `<p>En el paradero, con el sol bajando hacia Huanchaco, lees el correo de Karen: Chiclayo, 60 cajeros nuevos, ocho locales, un aula en la avenida Balta que nadie ha visto y Jorge que no puede viajar toda la semana. Salen el lunes a las 5 de la mañana.</p><p>Le respondes por WhatsApp antes de que llegue la B. <mark class="clave">El lunes empieza con lo que respondas hoy</mark>.</p>`,
    type: 'compose', enviaA: 'karen', para: 'Para: Karen Vásquez · Capacitación', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'si', t: 'Tu respuesta', ops: [
        { id: 's1', t: 'Cuenta conmigo, Karen. El lunes a las 5 estoy en el bus con el cuaderno.', ok: true },
        { id: 's2', t: '¿Chiclayo? Uf, no sé si llego… 😩', ok: null, por: 'Honesto, pero sin plan.' },
      ] },
      { id: 'pri', t: 'Lo primero que propones', ops: [
        { id: 'p1', t: 'Antes de viajar, pido hoy a los jefes de Chiclayo los turnos de sus 60, y una foto del aula de la avenida Balta con sus enchufes.', ok: true, por: 'Los dos primeros pasos de tu plan.' },
        { id: 'p2', t: 'Allá vemos sobre la marcha.', ok: false, por: 'Es justo lo que no funcionó el primer lunes.' },
      ] },
      { id: 'pend', t: 'Lo que no se puede olvidar', ops: [
        { id: 'n1', t: 'Y alguien tiene que tomar el reexamen de Yanet el lunes a las 9 aquí en Trujillo: ¿se lo pedimos a Fiorella o a Jorge?', ok: true, por: 'No abandonas lo prometido.' },
        { id: 'n2', t: 'Lo de Yanet lo vemos a la vuelta.', ok: false, por: 'Ella reorganizó su vida para el lunes a las 9.' },
      ] },
    ],
    res: sel => {
      const mal = sel.pri === 'p2' || sel.pend === 'n2', buenas = ['s1', 'p1', 'n1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -2 : 1, calidad: q === 'buena' ? 3 : 0, personas: sel.pend === 'n1' ? 2 : -2 }, rel: { karen: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['lunes_listo'] : [],
        out: q === 'buena' ? 'Karen responde en un minuto: «Jorge toma el reexamen de Yanet. Tú y yo, Chiclayo. Ah, y ve pensando: allá un jefe de local ya me dijo "hoy no puedo"». Sube la B. Te ríes sola.' : mal ? 'Karen responde: «¿Y Yanet?». Te das cuenta en la combi y le escribes de nuevo.' : 'Karen responde: «Descansa, el lunes lo vemos». Te queda una sensación de pendiente.',
        pro: { ok: 'Aceptar con un plan y sin olvidar lo prometido: así empieza bien la Semana 3.', risk: 'Ir «sobre la marcha» repite el primer lunes, pero lejos de casa.', info: 'Lleva el plan de seis pasos impreso.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Chiclayo, allá vamos!' : 'Algo quedó suelto.'],
      };
    },
    mirada: {
      ve: 'La escuela de Trujillo terminó, pero el oficio sigue: otra ciudad, otros jefes, otra aula que nadie ha visto. Lo que aprendiste ya no es suerte: es un método. Y empieza, otra vez, por los turnos y los enchufes.',
      visual: { tipo: 'mensaje', titulo: 'Semana 3: Chiclayo', txt: '60 cajeros nuevos. Ocho locales. Un aula en la avenida Balta que nadie ha visto. Un jefe que ya dijo «hoy no puedo». Y tú, con el cuaderno de la escuela.' },
    },
  },
];
