// Asistente de Selección · Capítulo 2 · «El aviso» · Semana 1, martes · Clínica del Misti, Arequipa.
// Normas citadas:
// - Ley 26772 (modificada por las Leyes 27270 y 30709) y su reglamento, D.S. 002-98-TR: las ofertas de empleo no pueden
//   contener requisitos discriminatorios (sexo, edad, raza, religión, estado civil, condición económica, entre otros).
//   https://faolex.fao.org/docs/pdf/per201903.pdf
//   https://www.leyes.congreso.gob.pe/Documentos/2016_2021/ADLP/Texto_Consolidado/30709-TXM.pdf
// - Ley 29733 (protección de datos personales), ya citada en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'El aviso', dia: 'Semana 1, martes', foto: 'assets/foto2/celebra-laptop.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '07:30', fin: '18:40', cierreHora: '18:30',
  apertura: 'Martes. El sol de Arequipa ya pega fuerte sobre el sillar de la fachada y en la oficina de Selección huele a café pasado. Hoy sale el aviso grande para las 60 técnicas.', boton: 'Subir a Selección',
  kusi: 'Un aviso es una puerta: decide quién se anima a entrar. ¡Dale!',
  lead: 'Escribiste un aviso que dice lo que el puesto exige, lo llevaste a donde están las técnicas de verdad y limpiaste los filtros automáticos del portal.',
  reflexion: '¿A quién dejaba afuera tu aviso sin que nadie lo notara?',
  siguiente: { n: 3, titulo: 'El título', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: 'Selección en 9 días hábiles' },
  { id: 'aviso', p: 'Aviso de empleo', j: 'Milena · Selección', d: 0, e: 'Sale hoy' },
  { id: 'canales', p: 'Canales de difusión', j: 'Tú', d: 0, e: 'Por definir' },
  { id: 'portal', p: 'Filtros del portal', j: 'Tú', d: 0, e: 'Por revisar' },
];

export const FUTURO = {
  aviso_claro: ['Tu aviso dice requisitos reales y cómo es el turno noche.', 'Mañana llegarán menos CV fuera de perfil.'],
  aviso_sesgado: ['Tu aviso pedía cosas que no tienen que ver con el trabajo.', 'Milena lo corrigió, pero perdiste una mañana.'],
  aviso_mujeres: ['El aviso salió con «preferentemente mujeres».', 'Alguien lo va a notar.'],
  aviso_sin_genero: ['Le explicaste al Dr. Linares por qué el aviso no pide sexo.', 'Te mirará con más cuidado, para bien o para mal.'],
  canales_amplios: ['Llevaste el aviso a institutos y a técnicas que ya trabajan en la clínica.', 'Llegarán postulantes de Arequipa y del sur.'],
  portal_limpio: ['Quitaste los descartes automáticos por edad, foto y distrito.', 'Nadie quedó fuera por una casilla.'],
  angel_animado: ['Ángel postuló después de hablar contigo.', 'Lo volverás a ver.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  sup: { n: 'Supervisoras de piso', sub: 'Grupo de Enfermería', c: '#7CC6EA' },
  linares: { n: 'Dr. Fernando Linares', sub: 'Gerente de Operaciones', c: '#8C5A3C' },
};

export const WSP = [
  { chat: 'milena', t: '07:32', de: 'Milena', txt: 'Buenos días ☀️ Hoy sale el aviso. Te espero en Selección, tercer piso, la puerta que no cierra.' },
  { chat: 'milena', t: '07:40', de: 'Milena', txt: 'Oye, lo de ayer de los CV en el grupo de supervisoras… hablemos un minuto antes de empezar, ¿ya?', si: 'dni_grupo' },
  { chat: 'sup', t: '08:15', de: 'Lic. Rosario', txt: 'Gracias por el resumen de ayer. ¿Cuándo sale el aviso? Mi prima es técnica en Camaná 👀', no: 'dni_grupo' },
  { chat: 'sor', t: '12:05', de: 'Sor Elena', txt: 'Vi el aviso. Lo del turno noche dicho así, de frente, está bien. Que nadie llegue engañada.', si: 'aviso_claro' },
  { chat: 'linares', t: '15:20', de: 'Dr. Linares', txt: 'Ok. Pero si en dos semanas no llegamos a 60, lo revisamos.', si: 'aviso_sin_genero' },
];

export const CORREOS = [
  { t: '07:50', de: 'Milena Cáceres', para: 'Asistente de Selección', asunto: 'Borrador del aviso', html: '<p>Te dejo el aviso del año pasado como base. Ojo: es de cuando contratamos rápido y se nos fueron nueve. Cámbiale lo que haga falta.</p><p>Milena</p>' },
  { t: '09:40', de: 'Dr. Fernando Linares', para: 'Selección', asunto: 'Aviso técnicas', html: '<p>Antes de publicar: pongan «preferentemente mujeres». Los pacientes mayores se sienten más cómodos y la jefa de piso lo pidió el año pasado. Gracias.</p><p>F. Linares · Gerencia de Operaciones</p>' },
];

export const QUIZ = [
  { q: '¿Qué puede pedir un aviso de técnico de enfermería sin discriminar?', ops: ['Edad máxima de 30 años', 'Título técnico y disponibilidad para turnos rotativos', 'Buena presencia', 'Soltera, sin hijos'], ok: 1, por: 'Se piden requisitos ligados al trabajo. La Ley 26772 prohíbe requisitos por sexo, edad o estado civil, entre otros.' },
  { q: 'Un gerente pide «preferentemente mujeres» en el aviso. ¿Qué haces?', ops: ['Lo pones: es el gerente', 'Le explicas que el aviso no puede pedir sexo y propones describir las tareas de cuidado', 'Lo pones en letra pequeña', 'Lo ignoras sin avisar'], ok: 1, por: 'La Ley 26772 no permite requisitos por sexo. Se puede describir lo que el trabajo exige, sin elegir por sexo.' },
  { q: '¿Para qué sirve decir en el aviso cómo es el turno noche?', ops: ['Para asustar', 'Para que se autodescarten quienes no pueden y lleguen menos renuncias', 'Para llenar espacio', 'Para nada'], ok: 1, por: 'Un aviso honesto atrae a quien puede con el puesto real.' },
  { q: 'El portal ofrece descartar automáticamente a mayores de 40. ¿Qué haces?', ops: ['Lo activas para ahorrar tiempo', 'Lo desactivas: la edad no es requisito del puesto', 'Lo activas solo esta vez', 'Le preguntas al portal'], ok: 1, por: 'Un filtro automático también es una decisión de selección y debe ser justo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '07:55', ch: 'documento', who: null, titulo: 'El aviso del año pasado', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de Selección, tercer piso', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('dni_grupo') ? 'Milena te recibe seria: «Lo de ayer no se repite, ¿ya? Los CV no salen de Selección». Asientes, con la cara caliente, y abres el borrador.' : 'Milena te deja el borrador y se va a una reunión con Admisión.'}</p><p>El aviso del año pasado dice «señoritas de 20 a 30 años, buena presencia». <mark class="clave">Lo vas a reescribir por bloques</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué va en cada bloque del aviso.', boton: 'Armar el aviso',
    bloques: [
      { id: 'req', t: 'Requisitos', n: 2, ops: [
        { id: 'r1', t: 'Título de técnico en enfermería a nombre de la Nación.', ok: true, por: 'Es el requisito del puesto.' },
        { id: 'r2', t: 'Experiencia en hospitalización (deseable, no indispensable).', ok: true, por: 'Así no cierras la puerta a recién egresados buenos.' },
        { id: 'r3', t: 'Entre 20 y 30 años, buena presencia.', ok: false, por: 'Edad y apariencia no dicen si alguien cuida bien. La Ley 26772 lo prohíbe.' },
      ] },
      { id: 'cond', t: 'Cómo es el trabajo', n: 2, ops: [
        { id: 'c1', t: 'Turnos rotativos de 12 horas, incluidas noches, feriados y fines de semana.', ok: true, por: 'Lo que falló la vez pasada: decirlo de frente.' },
        { id: 'c2', t: 'Piso nuevo de hospitalización de 40 camas, con pacientes adultos mayores y postoperados.', ok: true },
        { id: 'c3', t: 'Excelente clima laboral y línea de carrera.', ok: false, por: 'Frase vacía: no dice nada que la postulante pueda comprobar.' },
      ] },
      { id: 'perfil', t: 'Lo que buscamos', n: 1, ops: [
        { id: 'p1', t: 'Personas que avisan a tiempo cuando algo no está bien con un paciente.', ok: true, por: 'Es lo que te dijo Sor Elena… o lo que cualquier jefa de piso valora.' },
        { id: 'p2', t: 'Personas proactivas, dinámicas y con ganas de crecer.', ok: false, por: 'Lo dicen todos los avisos y no describe el puesto.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -4 : 3 },
        flags: q === 'riesgosa' ? ['aviso_sesgado'] : ['aviso_claro'], cartera: { aviso: q === 'riesgosa' ? 'Aviso devuelto por Milena' : 'Aviso listo para publicar' },
        out: q === 'buena' ? 'El aviso cabe en una pantalla de celular y dice la verdad del puesto, noches incluidas. Milena lo lee en el ascensor: «Este sí».' : q === 'aceptable' ? 'El aviso mejora, aunque se te quedó alguna frase que no ayuda a nadie a decidir.' : 'Milena te lo devuelve con tachones rojos: «Esto ya nos trajo problemas».',
        pro: { ok: 'Un aviso honesto filtra antes que tú: quien no puede con las noches no postula.', risk: 'Los requisitos de edad o apariencia son discriminatorios y dejan fuera a buenas técnicas.', info: 'Lee tu aviso en el celular: así lo verá casi todo el mundo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Aviso con verdad!' : 'Revisa qué frases sobran.'],
      };
    },
    rules: [[LEY, 'Ley 26772: las ofertas de empleo no pueden tener requisitos discriminatorios, como edad o sexo.'], [BP, 'Describe el trabajo real, incluidas sus partes duras.']],
    mirada: {
      ve: 'El aviso viejo buscaba a «señoritas de buena presencia» y encontró gente que renunció al ver el turno noche. Un buen aviso no promete: describe. Y al describir bien, cada postulante hace parte del filtro por ti.',
      visual: { tipo: 'cambio', titulo: 'Del aviso viejo al nuevo', pares: [['Señoritas de 20 a 30 años', 'Título técnico en enfermería'], ['Buena presencia', 'Avisa a tiempo si algo no está bien'], ['Excelente clima laboral', 'Turnos de 12 horas, con noches']] },
      normas: [{ ley: 'Ley 26772 y D.S. 002-98-TR', dice: 'Las ofertas de empleo no pueden contener requisitos que constituyan discriminación, anulación o alteración de la igualdad de oportunidades o de trato.', practica: 'Edad, sexo, estado civil o apariencia no van en un aviso si no tienen relación objetiva con el trabajo.' }],
    },
  },
  {
    id: 'b2', t: '09:45', ch: 'correo', who: null, titulo: '«Preferentemente mujeres»', banner: 'assets/foto/reunion-jefa.webp', show: ['cumplimiento', 'confianza', 'etica'],
    mail: { from: 'Dr. Fernando Linares', to: 'Selección', asunto: 'Aviso técnicas' },
    body: () => `<p>El gerente de Operaciones pide que el aviso diga <mark class="clave">«preferentemente mujeres»</mark>. Milena está en reunión. El aviso tiene que salir antes de las 11.</p><p>Linares no es un villano: el año pasado una paciente de 80 años se quejó porque la bañó un técnico. Pero en el piso también hay pacientes varones, y técnicos muy buenos.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responderle que el aviso no puede pedir sexo y proponer otra salida: describir las tareas de cuidado íntimo y organizar los turnos para que el paciente pueda pedir quién lo asiste.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: -1 }, flags: ['aviso_sin_genero'],
          responde: 'Doctor, el aviso no puede pedir sexo (Ley 26772). Propongo describir el cuidado íntimo de pacientes en las funciones y que Enfermería organice los turnos para que el paciente pueda pedir quién lo asiste. Así resolvemos lo del año pasado sin dejar fuera a buenos técnicos.',
          out: 'Linares tarda en responder. Al final escribe «Ok». Milena, al salir de su reunión, te guiña un ojo.',
          pro: { ok: 'Dices que no y ofreces una solución para su preocupación real.', risk: 'Al gerente no le gusta que una asistente le corrija.', info: 'Cuando digas que no, trae siempre una alternativa.' },
          kusi: ['animo', 'Un «no» con salida. ¡Bien!'] } },
      { id: 'b', label: 'Ponerlo: lo pidió un gerente y tiene un motivo razonable.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -3, tiempo: 1 }, flags: ['aviso_mujeres'],
          responde: 'Listo, doctor, ya lo agregué.',
          out: 'El aviso sale con «preferentemente mujeres». A las dos horas, un técnico comenta en la publicación: «¿Y los hombres no cuidamos?». Tiene 40 me gusta.',
          pro: { ok: 'Obedeces rápido.', risk: 'Un requisito por sexo en un aviso es discriminatorio y la clínica responde por él.' },
          kusi: ['preocupado', 'La razón era buena; la salida, no.'] } },
      { id: 'c', label: 'Publicar sin esa frase y no responderle hasta que Milena salga de su reunión.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -3 },
          out: 'El aviso sale bien. Pero a las 12 Linares llama a Milena molesto: «Nadie me contesta en Selección».',
          pro: { ok: 'El aviso no discrimina.', risk: 'El silencio con un gerente se lee como desplante.' },
          kusi: ['pensando', 'Hiciste lo correcto… sin decirlo.'] } },
    ],
    rules: [[LEY, 'Ley 26772: no se puede pedir sexo en una oferta de empleo.']],
    mirada: {
      ve: 'La preocupación de Linares es real: el pudor de una paciente mayor importa. Pero se resuelve organizando el cuidado, no eligiendo a las técnicas por su sexo. Separar el problema de la solución que te proponen es una habilidad que usarás toda la vida.',
      visual: { tipo: 'balanza', a: { t: '«Preferentemente mujeres»', items: ['Ilegal en un aviso', 'Deja fuera a buenos técnicos', 'No resuelve los turnos de noche'] }, b: { t: 'Organizar el cuidado', items: ['El paciente elige quién lo asiste', 'Funciones claras en el aviso', 'Equipo mixto'] } },
    },
  },
  {
    id: 'b3', t: '11:10', ch: 'documento', who: null, titulo: '¿Dónde lo publicas?', banner: 'assets/foto2/tablet-equipo.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>El aviso está listo. Milena te da presupuesto para <mark class="clave">tres canales</mark> esta semana. El año pasado solo usaron un portal pagado y llegaron muchos CV de Lima que nunca se mudaron.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres canales.', boton: 'Publicar', resumen: 'Publicaste en',
    cols: ['Canal', 'Lo que sabes'],
    rows: [
      { id: 'inst', cells: ['Bolsas de trabajo de institutos de Arequipa y Juliaca', 'Ahí egresan las técnicas de la región'] },
      { id: 'ref', cells: ['Referidos de técnicas que ya trabajan en la clínica', 'Conocen el trabajo y a quién recomiendan'] },
      { id: 'portal', cells: ['Un portal de empleo grande', 'Llegan muchos CV, de todas partes'] },
      { id: 'face', cells: ['Grupo de Facebook «Técnicos de Enfermería Arequipa»', '12 mil miembros, gratis'] },
      { id: 'radio', cells: ['Cuña en una radio de la ciudad', 'Cara y para todo público'] },
      { id: 'lima', cells: ['Feria de empleo en Lima', 'Pasajes y viáticos para dos'] },
    ],
    score: { inst: 3, ref: 3, face: 2, portal: 1, radio: -1, lima: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, tiempo: picks.includes('lima') ? -3 : 1 }, flags: q === 'buena' ? ['canales_amplios'] : [],
        cartera: { canales: picks.join(', ') },
        out: q === 'buena' ? 'Para las 4 de la tarde llegan postulaciones de Arequipa, Juliaca y Mollendo. Una técnica de Emergencia recomienda a su promoción entera.' : 'Llegan postulaciones, pero muchas de lugares desde donde nadie se va a mudar por este sueldo.',
        pro: { ok: 'Vas a donde está tu público, no a donde hay más ruido.', info: 'Pregunta a las técnicas actuales por qué grupo se enteraron de su trabajo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Pescar donde están los peces!' : 'Más CV no es mejor CV.'],
      };
    },
    mirada: { ve: 'El canal decide a quién le llega el aviso. Las técnicas de la región se enteran por su instituto, por su promoción y por quienes ya trabajan en la clínica.', visual: { tipo: 'embudo', titulo: 'Lo que buscas de un canal', niveles: [['Gente que lo ve', 10000], ['Gente que cumple', 800], ['Gente que vive cerca y puede con el turno', 300]] } },
  },
  {
    id: 'b4', t: '13:00', ch: 'llamada', who: null, titulo: 'El teléfono de Selección', banner: 'assets/foto/llamada.webp', show: ['personas', 'tiempo', 'cumplimiento'],
    body: () => `<p>Almuerzas un pan con queso de Paucarpata frente a la pantalla mientras suena el anexo de Selección. El aviso tiene dos horas y la gente llama.</p><p>Escuchas tres llamadas y <mark class="clave">decides cómo responder</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Ángel Mamani · 22 años · egresado hace dos meses', 'Habla bajito, casi pidiendo permiso', '«Señorita, disculpe… el aviso dice experiencia en hospitalización. Yo solo tengo mis prácticas en el Honorio Delgado. ¿Igual puedo postular o mejor no?»'],
      ['Señora Gladys · técnica con 18 años de experiencia', 'Llama desde un pasillo con ruido de camillas', '«¿Hasta qué edad están tomando? Tengo 51 y en todos lados me dicen que ya no.»'],
      ['Joven sin nombre', 'Tono apurado', '«¿Ustedes me pueden decir cuánto pagan y si puedo hacer solo turnos de día? Si no, no pierdo mi tiempo.»'],
    ],
    prompt: '¿Qué les respondes?',
    choices: [
      { id: 'a', label: 'A los tres, lo mismo que dice el aviso: lo deseable no es indispensable, la edad no es requisito, y los turnos incluyen noches. Que postulen por el enlace.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 3, tiempo: -1 }, rel: { angel: 1 }, flags: ['angel_animado'],
          out: 'Ángel dice «gracias, señorita» tres veces. La señora Gladys postula a los diez minutos. El joven apurado no postula: mejor ahora que en el primer mes.',
          pro: { ok: 'Das la misma información a todos y animas a quien sí cumple.', info: 'Anota las preguntas que se repiten: son pistas para mejorar el aviso.' },
          kusi: ['celebra', 'Información igual para todos. ¡Justo!'] } },
      { id: 'b', label: 'A Ángel le dices que mejor espere a tener experiencia; a la señora Gladys, que sí postule; al joven, que en la entrevista se ve lo del turno.',
        res: { q: 'riesgosa', fx: { personas: -3, calidad: -2 },
          out: 'Ángel cuelga sin postular. El joven apurado sí postula y quedará en tu bandeja aunque no puede con las noches.',
          pro: { ok: 'Fuiste amable con la señora Gladys.', risk: 'Desanimaste a quien cumplía lo indispensable y dejaste entrar a quien no.' },
          kusi: ['triste', 'Ángel cumplía lo indispensable…'] } },
      { id: 'c', label: 'Decirles a todos que no das información por teléfono: que lean el aviso.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -2 },
          out: 'Te ahorras media hora. Ángel duda toda la tarde y postula a las 11 de la noche, casi sin ganas.',
          pro: { ok: 'Cuidas tu tiempo.', risk: 'Una clínica que no contesta pierde a las postulantes más tímidas, que suelen ser buenas.' },
          kusi: ['pensando', 'Corto… pero frío.'] } },
    ],
    rules: [[BP, 'Responde a todos con la misma información: es la base de un proceso justo.']],
    mirada: { ve: 'Las preguntas por teléfono te dicen dónde el aviso no se entiende. Y la forma en que respondes decide quién se anima: los más nerviosos suelen ser los que más cuidan.', visual: { tipo: 'mensaje', titulo: 'Tu respuesta estándar', txt: 'Lo indispensable es el título y aceptar turnos con noches. La experiencia en hospitalización suma, pero no es obligatoria. La edad no es requisito. Postula por el enlace del aviso.' } },
  },
  {
    id: 'b5', t: '15:40', ch: 'sistema', who: null, titulo: 'Los filtros del portal', banner: 'assets/esc/lupa.webp', lugar: 'Panel del portal de empleo', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Ya hay 180 postulaciones. ${F.has('canales_amplios') ? 'Muchas vienen de Juliaca y Mollendo.' : ''} El portal te ofrece «preguntas filtro» con descarte automático. Alguien de la clínica las configuró el año pasado y nadie las revisó.</p><p><mark class="clave">Marca las que no deberían estar</mark>.</p>`,
    type: 'flag', prompt: 'Marca los filtros que discriminan o que no tienen sentido.',
    doc: { t: 'Preguntas filtro · Técnico(a) de enfermería', sub: 'Configuración heredada del año pasado' },
    lines: [
      { id: 'titulo', t: '¿Tiene título de técnico en enfermería? (No → descarte automático)' },
      { id: 'edad', t: '¿Tiene más de 40 años? (Sí → descarte automático)', bad: LEY, why: 'La edad no es requisito del puesto. Ley 26772.' },
      { id: 'embarazo', t: '¿Está embarazada o planea tener hijos este año?', bad: LEY, why: 'Preguntar por embarazo en una selección es discriminatorio.' },
      { id: 'noche', t: '¿Puede hacer turnos de 12 horas que incluyen noches? (No → descarte automático)' },
      { id: 'foto', t: 'CV sin foto → descarte automático', bad: BP, why: 'La foto no dice nada del trabajo y abre la puerta a sesgos por apariencia.' },
      { id: 'distrito', t: '¿Vive en Cercado, Yanahuara o Cayma? (No → descarte automático)', bad: BP, why: 'Deja fuera a quienes viven en Cerro Colorado, Paucarpata o fuera de la ciudad y podrían mudarse.' },
      { id: 'sueldo', t: '¿Cuál es su expectativa salarial?', duda: 'Puede servir para conversar, pero no debería descartar a nadie de forma automática.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp >= 1 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, etica: missLey ? -2 : 3 },
      flags: missLey ? [] : ['portal_limpio'], cartera: { portal: missLey ? 'Filtros con descartes ilegales activos' : 'Filtros limpios: título y turno noche' },
      out: missLey ? 'Desactivas un par de filtros, pero uno ilegal sigue descartando gente en silencio.' : `Desactivas ${hitsLey + (hitsBp || 0)} filtros. El contador de «descartados» baja de 64 a 21. Cuarenta y tres personas vuelven a la bandeja.`,
      pro: { ok: 'Un descarte automático es una decisión: debe tener la misma justicia que una humana.', risk: 'Lo que nadie revisa sigue discriminando aunque nadie lo quiera.', info: 'Revisa los filtros cada vez que se reabre una convocatoria.' },
      kusi: missLey ? ['preocupado', 'Se te pasó uno de los graves…'] : ['celebra', '¡43 personas recuperadas!'],
    }),
    rules: [[LEY, 'Ley 26772: tampoco un filtro automático puede usar edad, sexo o estado civil.']],
    mirada: { ve: 'Las máquinas no discriminan solas: repiten lo que alguien configuró y olvidó. La asistente que revisa los filtros evita que buenas técnicas sean descartadas sin que un humano las vea.', visual: { tipo: 'embudo', titulo: 'Antes y después de limpiar los filtros', niveles: [['Postulaciones', 180], ['Descartadas con filtros viejos', 64], ['Descartadas con filtros limpios', 21]] } },
  },
  {
    id: 'b6', t: '18:15', ch: 'whatsapp', who: 'milena', titulo: 'Antes de irte', banner: 'assets/foto2/caminan.webp', lugar: 'Puerta de Emergencia', show: ['confianza', 'tiempo'],
    body: (n, F) => `<p>Bajas por la escalera de servicio. La Ejército está llena de combis y el Misti se pone rosado. Milena te escribe: «¿Cómo cerramos el día?».</p><p>${F.has('aviso_mujeres') ? 'Ya vio el comentario del técnico en Facebook.' : 'Está contenta con el aviso.'} <mark class="clave">Mañana empieza la verificación</mark> de los preseleccionados.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Darle el número, lo que aprendiste del teléfono y lo que harás mañana.',
        res: { q: 'buena', fx: { confianza: 3 }, rel: { milena: 1 },
          envia: ['milena', '180 postulaciones. Muchas preguntan si la experiencia es obligatoria: hay que dejarlo más claro. Mañana empiezo a verificar títulos de los preseleccionados.'],
          out: 'Milena responde con un audio: «Bacán. Mañana te enseño el registro de títulos del Minedu. Ojo que ahí siempre sale una sorpresa».', kusi: ['feliz', 'Cifra, aprendizaje y siguiente paso.'] } },
      { id: 'b', label: 'Mandarle un sticker de «misión cumplida».',
        res: { q: 'aceptable', fx: { confianza: 0 }, envia: ['milena', '🫡✅'], out: 'Milena responde con un corazón. No sabe lo que aprendiste del teléfono.', kusi: ['pensando', 'Simpático, pero vacío.'] } },
    ],
    mirada: { ve: 'Un buen cierre de día deja a tu jefa sabiendo algo que no sabía. Eso construye confianza más rápido que cualquier sticker.' },
  },
];
