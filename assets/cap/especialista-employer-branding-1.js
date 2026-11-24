// Analista de Comunicación Interna y Employer Branding · Capítulo 1 · «Las reseñas» · Semana 1, lunes.
// Hilo de las dos semanas: Banco Andino quiere ser «un gran lugar para trabajar», pero las reseñas dicen que en las agencias
// nadie sale a su hora. Tú descubres por qué, y decides cómo se cuenta.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733, Ley de Protección de Datos Personales: art. 2 num. 4 (dato personal), art. 6 (finalidad).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 007-2002-TR (TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo): art. 10-A (registro del sobretiempo).
//   Archivo: docs/normas/txt/DS-007-2002_LP.txt

export const CAP = {
  n: 1, titulo: 'Las reseñas', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/corporativo.webp',
  lugar: 'Banco Andino · Sede central de San Isidro, piso 9',
  inicio: '08:30', fin: '19:00', cierreHora: '18:40',
  apertura: 'San Isidro, lunes. La torre de vidrio del Banco Andino refleja un cielo gris que no termina de decidirse. Es tu primer día como analista de Comunicación Interna y Employer Branding.', boton: 'Pasar la credencial',
  kusi: 'Una marca empleadora no se inventa: se descubre. ¡Hoy toca escuchar!',
  lead: 'Leíste las reseñas sin ponerte a la defensiva, elegiste las fuentes que dicen la verdad, corregiste un diagnóstico que culpaba a los demás y llamaste a las agencias antes de sacar conclusiones.',
  reflexion: 'Si una reseña te molesta, ¿es porque miente… o porque dice algo que nadie quería escuchar?',
  siguiente: { n: 2, titulo: 'El boletín', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'diagnostico', p: 'Diagnóstico de reputación', j: 'Fiorella · Experiencia del Colaborador', d: 0, e: 'Para el viernes' },
  { id: 'resenas', p: 'Reseñas en portales de empleo', j: 'Tú', d: 0, e: '3.1 estrellas, 214 reseñas' },
  { id: 'boletin', p: 'Boletín interno «Andino Contigo»', j: 'Tú', d: 0, e: 'Sale mañana' },
  { id: 'campana', p: 'Campaña de marca empleadora', j: 'Marco · Marketing', d: 0, e: 'Brief el jueves' },
];

export const FUTURO = {
  diag_fuentes: ['Cruzaste las reseñas con marcaciones y entrevistas de salida.', 'Tu diagnóstico tendrá números que nadie podrá discutir.'],
  diag_solo_resenas: ['Tu diagnóstico se apoya casi solo en las reseñas.', 'Marco dirá que «son cuatro resentidos». Capítulo 4.'],
  resenas_sin_incentivo: ['Le dijiste a Marco que no se piden reseñas de cinco estrellas.', 'Marco te mide desde ahora. Capítulo 4.'],
  resenas_compradas: ['Aceptaste pedir reseñas positivas a las agencias.', 'Alguien hará captura de ese pedido. Capítulo 9.'],
  visita_comas: ['Pediste pasar un día en la agencia de Comas.', 'El miércoles conocerás a Jhoselyn y a don Abel.'],
  diag_honesto: ['Le dijiste a Fiorella que el problema no es de comunicación, sino del cuadre de caja.', 'Fiorella te defenderá cuando Marco quiera maquillarlo.'],
  diag_maquillado: ['Le propusiste a Fiorella una campaña positiva para tapar las reseñas.', 'Las reseñas seguirán llegando.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  abel: { n: 'Abel Huamán', sub: 'Supervisor de la agencia Comas', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'equipo', t: '08:32', de: 'Fiorella', txt: '¡Llegó la nueva! 🎉 Sube al 9, la sala con el sofá naranja. Trae paciencia y café.' },
  { chat: 'equipo', t: '08:35', de: 'Kiara', txt: 'Holaaa, soy Kiara, la practicante de diseño 🎨 Bienvenida. Te guardé la silla que no se hunde.' },
  { chat: 'marco', t: '10:50', de: 'Marco', txt: 'Hola, bienvenida. Fiorella me dijo que te encargas de las reseñas. ¿Podemos vernos a las 3? Tengo una idea rápida 💡' },
  { chat: 'abel', t: '13:05', de: 'Abel', txt: 'Señorita, disculpe que le escriba por aquí. Lo de la hora de salida: venga a verlo usted misma. Las palabras se las lleva el viento.', si: 'visita_comas' },
  { chat: 'fiorella', t: '18:55', de: 'Fiorella', txt: 'Leí tu correo. Gracias por no endulzarlo. Mañana lo hablamos con calma ☕', si: 'diag_honesto' },
  { chat: 'fiorella', t: '18:55', de: 'Fiorella', txt: 'Leí tu correo. Lo conversamos mañana… pero me preocupa que tapemos el sol con un dedo.', si: 'diag_maquillado' },
];

export const CORREOS = [
  { t: '08:40', de: 'Fiorella Chávez', para: 'Analista de Comunicación Interna y Employer Branding', asunto: 'Bienvenida · lo primero', html: '<p>¡Bienvenida al Banco Andino! Gerencia General quiere que seamos «un gran lugar para trabajar» antes de fin de año. El problema: en los portales de empleo tenemos 3.1 estrellas y la palabra que más se repite es «horario».</p><p>Antes de hacer cualquier campaña, necesito un diagnóstico honesto para el viernes. ¿Qué nos dicen, quiénes y por qué?</p><p>Fiorella</p>' },
  { t: '11:30', de: 'Analítica de Gestión Humana', para: 'Analista de Comunicación Interna y Employer Branding', asunto: 'RE: datos para el diagnóstico', html: '<p>Te adjunto lo que pediste, sin nombres ni DNI: rotación por agencia de los últimos 12 meses y el resumen de las entrevistas de salida. Las marcaciones de entrada y salida van agregadas por agencia y por semana.</p>' },
];

export const QUIZ = [
  { q: 'Las reseñas negativas de un empleador en internet conviene leerlas como…', ops: ['Ataques de gente resentida', 'Una fuente de diagnóstico que hay que cruzar con otros datos', 'Algo que se tapa con reseñas positivas', 'Un tema solo de Marketing'], ok: 1, por: 'Una reseña sola no prueba nada, pero muchas que dicen lo mismo son una pista que se verifica con datos internos.' },
  { q: 'Pedir a los colaboradores que publiquen reseñas de cinco estrellas…', ops: ['Mejora la marca rápido', 'Es una práctica que destruye la credibilidad cuando se descubre', 'Es obligatorio en bancos', 'Es lo mismo que un programa de embajadores'], ok: 1, por: 'Una reseña pedida por el jefe no es una opinión libre. Cuando se descubre, la marca pierde más de lo que ganó.' },
  { q: 'Analítica te envía las marcaciones agregadas por agencia, sin nombres. ¿Por qué es mejor así?', ops: ['Porque pesa menos el archivo', 'Porque para un diagnóstico basta el dato agregado y no se necesita identificar a nadie', 'Porque los nombres no importan nunca', 'Porque así lo pide Marketing'], ok: 1, por: 'Los datos se usan para una finalidad determinada y no más allá (Ley 29733, art. 6). Para ver un patrón no hace falta saber quién es quién.' },
  { q: 'Según el D.S. 007-2002-TR, el sobretiempo…', ops: ['No se registra si es corto', 'Debe registrarse por el empleador con medios seguros y confiables', 'Lo registra el trabajador en un cuaderno personal', 'Solo se registra los sábados'], ok: 1, por: 'El art. 10-A obliga al empleador a registrar el trabajo en sobretiempo.' },
  { q: 'Tu diagnóstico descubre que el problema no es de comunicación. ¿Qué haces?', ops: ['Lo escondes para no incomodar', 'Lo dices con datos y propones a quién derivarlo', 'Haces una campaña igual', 'Renuncias'], ok: 1, por: 'Comunicación interna no arregla todo, pero sí debe decir con claridad qué no se puede comunicar hasta que se arregle.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '08:50', ch: 'presencial', who: 'fiorella', titulo: 'El sofá naranja', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de Experiencia del Colaborador', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Fiorella tiene el cabello recogido con un lápiz y una pizarra llena de post-its de colores. Te muestra en su celular una reseña de una estrella: «Nunca salgo a mi hora. El cuadre es eterno y nadie lo paga».</p><p>«Bienvenida${n ? ', ' + n : ''}. Hay 214 reseñas como esa. Tengo quince minutos antes del comité. <mark class="clave">Pregúntame lo que necesites saber hoy</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Fiorella.',
    opts: [
      { id: 'antes', label: '¿Qué se hizo antes con estas reseñas?', info: '«El año pasado Marketing respondió todas con el mismo texto: "Lamentamos tu experiencia, en Banco Andino valoramos a nuestra gente". Las reseñas siguieron. Y ahora hay capturas de esas respuestas copiadas y pegadas.»' },
      { id: 'quien', label: '¿Quiénes escriben las reseñas: agencias o sede?', info: '«Casi todas son de agencias: cajeros, asesores de servicio. La sede sale bien. Por eso en el piso 9 nadie entiende el problema.»' },
      { id: 'exito', label: '¿Qué tendría que pasar para que digas que funcionó?', info: '«Que la gente de agencias diga que ahora sí sale a su hora. Las estrellas son el termómetro, no la fiebre.»' },
      { id: 'marco', label: '¿Con quién trabajo la campaña?', info: '«Con Marco, de Marketing. Es brillante con las campañas comerciales… y quiere que esto luzca igual que un spot de tarjetas.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('exito') ? 2 : 1, tiempo: -1 }, rel: { fiorella: picks.includes('quien') || picks.includes('exito') ? 1 : 0 },
      out: 'Fiorella se va a su comité y te deja la pizarra. En un post-it amarillo dice: «¿Qué es verdad?».',
      kusi: ['curioso', 'Las estrellas son el termómetro. Hay que buscar la fiebre.'],
    }),
    mirada: {
      ve: 'Un diagnóstico de marca empleadora empieza por saber quién habla y desde dónde. Si todas las quejas vienen de agencias y nadie en la sede las vive, el problema no es de imagen: es de experiencia.',
      visual: { tipo: 'flujo', titulo: 'De la reseña al diagnóstico', pasos: ['Leer lo que dicen', 'Ver quién lo dice', 'Cruzar con datos', 'Escuchar en el terreno', 'Decir la verdad'], aqui: 0 },
    },
  },
  {
    id: 'r2', t: '10:00', ch: 'documento', who: null, titulo: 'Las fuentes del diagnóstico', banner: 'assets/esc/lupa.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Abres un Excel nuevo y lo llamas «Diagnóstico_v1». Las reseñas solas no alcanzan: necesitas otras fuentes que confirmen o desmientan lo que dicen.</p><p>Tienes tiempo para pedir y revisar <mark class="clave">tres fuentes</mark> antes del almuerzo.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres fuentes que vas a cruzar con las reseñas.', boton: 'Pedir estas fuentes', resumen: 'Pediste',
    cols: ['Fuente', 'Qué te puede decir'],
    rows: [
      { id: 'marca', cells: ['Marcaciones de salida agregadas por agencia', 'A qué hora sale de verdad la gente'] },
      { id: 'salida', cells: ['Resumen de entrevistas de salida', 'Por qué se van los que se van'] },
      { id: 'rota', cells: ['Rotación por agencia de los últimos 12 meses', 'Dónde se va más gente'] },
      { id: 'likes', cells: ['Likes del Facebook corporativo', 'Cuánto gustan los posts del banco'] },
      { id: 'premios', cells: ['Lista de premios que ganó el banco', 'Lo que el banco ya presume'] },
      { id: 'perfiles', cells: ['Buscar quién escribió cada reseña cruzando su LinkedIn', 'Saber si son «gente problemática»'] },
    ],
    score: { marca: 3, salida: 3, rota: 2, likes: 0, premios: 0, perfiles: -4 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: picks.includes('perfiles') ? -5 : 1 },
        flags: picks.includes('marca') && picks.includes('salida') ? ['diag_fuentes'] : ['diag_solo_resenas'],
        cartera: { diagnostico: q === 'buena' ? 'Reseñas cruzadas con marcaciones y salidas' : 'Diagnóstico con fuentes débiles' },
        out: q === 'buena' ? 'A las 11:30 llegan los datos. En 31 de las 46 agencias, la salida promedio está más de 50 minutos después del cierre. Las reseñas no exageraban.' : picks.includes('perfiles') ? 'Pasas una hora buscando quién escribió qué. Descubres a dos excajeros… y nada útil para el diagnóstico.' : 'Tienes datos, pero no los que confirman o desmienten la queja principal.',
        pro: { ok: 'Cruzar opiniones con datos convierte una queja en un hallazgo.', risk: 'Investigar a quien escribió una reseña es usar sus datos para algo que no tiene que ver con tu diagnóstico.', info: 'Pide los datos agregados: para ver un patrón no necesitas nombres.' },
        kusi: [q === 'buena' ? 'sorpresa' : 'pensando', q === 'buena' ? '¡50 minutos! Ahí está la fiebre.' : '¿Eso responde a la pregunta?'],
      };
    },
    rules: [[LEY, 'Los datos personales se usan para la finalidad con la que se recopilaron (Ley 29733, art. 6).'], [BP, 'Para un diagnóstico, pide datos agregados y sin nombres.']],
    mirada: {
      ve: 'Las reseñas son opiniones; las marcaciones son hechos. Cuando las dos dicen lo mismo, ya no estás frente a «cuatro resentidos», sino frente a un patrón. Y buscar quién escribió cada reseña no ayuda a entender el patrón: solo pone a alguien en la mira.',
      visual: { tipo: 'embudo', titulo: 'Lo que dicen las fuentes', niveles: [['Agencias', 46], ['Con reseñas sobre el horario', 38], ['Con salida 50 min después del cierre', 31]] },
    },
  },
  {
    id: 'r3', t: '12:00', ch: 'documento', who: null, titulo: 'El borrador de Marketing', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>Fiorella te reenvía un «análisis de reputación» que el equipo de Marco preparó el año pasado. Quiere que lo uses de base.</p><p>Lo lees con tu ensalada de quinua al lado. <mark class="clave">Algunas líneas no resisten tus datos</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que son un riesgo legal o una mala práctica.',
    doc: { t: 'Análisis de reputación digital 2025', sub: 'Marketing · Banco Andino · Confidencial' },
    lines: [
      { id: 'res', t: '«Las reseñas negativas provienen de personas resentidas tras su desvinculación».', bad: BP, why: 'Tus datos dicen que muchas son de gente que todavía trabaja. Descalificar la fuente evita mirar el problema.' },
      { id: 'cuadre', t: '«El tiempo de cuadre de caja posterior al cierre es parte de la cultura de compromiso del cajero».', bad: LEY, why: 'Si es trabajo después de la jornada, es sobretiempo: el empleador debe registrarlo (D.S. 007-2002-TR, art. 10-A) y pagarlo.' },
      { id: 'lista', t: '«Se recomienda identificar a los autores y entregar la lista a sus gerentes de zona».', bad: LEY, why: 'Usar datos para identificar y señalar a quien opinó es una finalidad distinta e ilegítima (Ley 29733, art. 6).' },
      { id: 'resp', t: '«Responder todas las reseñas con un mismo texto institucional».', bad: BP, why: 'Las respuestas copiadas y pegadas se leen como indiferencia. Ya hay capturas circulando.' },
      { id: 'sede', t: '«La sede central tiene una valoración de 4.3 estrellas».' },
      { id: 'canal', t: '«Revisar los canales internos de sugerencias de las agencias».' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Dejas pasar una línea que, si se aplica, puede costarle caro al banco. Fiorella la encuentra en la tarde y te la marca en rojo.' : `Marcas ${hitsLey} riesgos legales y dos malas prácticas. Del documento viejo rescatas lo único útil: revisar los canales de sugerencias de las agencias.`,
      fx: { calidad: missLey ? -2 : 4, cumplimiento: missLey ? -2 : 4, etica: missLey ? 0 : 2 },
      cartera: { diagnostico: missLey ? 'Diagnóstico con una base riesgosa' : 'Base del diagnóstico revisada' },
      pro: { ok: 'Leer con datos en la mano te permite separar lo útil de lo que solo justifica.', risk: 'Llamar «cultura» a horas no registradas no las vuelve legales.' },
      kusi: missLey ? ['preocupado', 'Esa línea podía meter al banco en problemas.'] : ['indignado', '¿«Cultura de compromiso»? ¡Eso tiene nombre: sobretiempo!'],
    }),
    rules: [[LEY, 'El empleador debe registrar el trabajo en sobretiempo con medios seguros y confiables (D.S. 007-2002-TR, art. 10-A).'], [LEY, 'Un dato personal es toda información que identifica o hace identificable a una persona (Ley 29733, art. 2, num. 4).']],
    mirada: {
      ve: 'En comunicación interna se aprende pronto que las palabras pueden esconder problemas: «compromiso», «cultura», «ponerse la camiseta». Tu trabajo es nombrar las cosas como son, porque una marca construida sobre un eufemismo se cae en la primera reseña.',
      visual: { tipo: 'cambio', titulo: 'Nombrar las cosas como son', pares: [['«Personas resentidas»', 'Colaboradores que todavía trabajan aquí'], ['«Cultura de compromiso»', 'Sobretiempo sin registrar'], ['«Identificar a los autores»', 'Escuchar lo que dicen']] },
      normas: [{ ley: 'D.S. 007-2002-TR, art. 10-A', dice: 'El empleador está obligado a registrar el trabajo prestado en sobretiempo mediante medios técnicos o manuales seguros y confiables.', practica: 'Si el cuadre de caja termina 50 minutos después del cierre, ese tiempo no desaparece porque nadie lo anote.' }],
    },
  },
  {
    id: 'r4', t: '13:00', ch: 'llamada', who: null, titulo: 'Cuatro agencias, cuatro versiones', banner: 'assets/foto/llamada.webp', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Antes de escribir una conclusión, llamas a los supervisores de cuatro agencias con más reseñas. Te presentas, explicas que es para un diagnóstico y que <mark class="clave">no buscas culpables</mark>.</p>`,
    type: 'calls',
    calls: [['Abel Huamán · Comas', 'Contesta', 'Señorita, la agencia cierra a las seis. El cuadre termina siete y cuarto, siete y media si hay diferencia. Así es desde que yo era cajero, hace veinte años.'], ['Agencia Cercado de Lima', 'No contesta'], ['Agencia Miraflores', 'Contesta', 'Todo bien por acá. Bueno… a veces nos quedamos un ratito. Nada grave.'], ['Agencia Ate', 'Contesta', '¿Esto es para un reclamo? Mejor hable con mi gerente de zona.']],
    prompt: 'Tres versiones distintas y una agencia sin respuesta. ¿Qué haces con esto?',
    choices: [
      { id: 'a', label: 'Pedirle a Fiorella pasar el miércoles un día completo en la agencia de Comas, desde la apertura hasta el último cuadre.',
        res: { q: 'buena', fx: { calidad: 4, personas: 3, tiempo: -2 }, flags: ['visita_comas'], cartera: { diagnostico: 'Visita a la agencia Comas el miércoles' },
          envia: [['abel', 'Don Abel, gracias por su sinceridad. Con permiso de mi jefa, el miércoles voy a pasar el día en su agencia, desde la apertura hasta el cuadre. No vengo a auditar a nadie: vengo a ver.']],
          out: 'Fiorella aprueba al toque: «Lleva zapatillas. Y no vayas de terno, que te van a confundir con auditoría».',
          pro: { ok: 'Vas a ver con tus ojos lo que los datos sugieren.', info: 'Avisa al supervisor que no vas a evaluar a nadie: si no, todos actúan.' },
          kusi: ['celebra', '¡A terreno! Ahí está la verdad.'] } },
      { id: 'b', label: 'Quedarte con los datos de marcación: son objetivos y no dependen de cómo conteste cada supervisor.',
        res: { q: 'aceptable', fx: { calidad: 1, tiempo: 2 },
          out: 'Tus números son sólidos, pero no sabes por qué el cuadre se demora tanto. Te falta la mitad de la historia.',
          pro: { ok: 'Los datos son firmes.', risk: 'Un número te dice qué pasa; solo el terreno te dice por qué.' },
          kusi: ['pensando', 'El Excel no huele a monedas.'] } },
      { id: 'c', label: 'Pedirles a los cuatro supervisores que te manden por correo el horario real de salida de su equipo.',
        res: { q: 'riesgosa', fx: { confianza: -3, personas: -2 },
          out: 'Dos responden «salimos a las 6:15», copiando a su gerente de zona. El correo formal los puso a la defensiva.',
          pro: { ok: 'Queda por escrito.', risk: 'Pedirle a un supervisor que confiese por escrito un problema de su agencia casi garantiza una respuesta maquillada.' },
          kusi: ['preocupado', 'Con copia al gerente, nadie dice la verdad.'] } },
    ],
    rules: [[BP, 'Cuando las versiones no coinciden, ve a ver antes de concluir.']],
    mirada: {
      ve: 'Cada supervisor contestó desde su miedo o su costumbre: don Abel con la franqueza de veinte años, Miraflores minimizando y Ate cubriéndose. Ninguno miente del todo. Por eso, en employer branding, el terreno es tan importante como el tablero.',
      visual: { tipo: 'balanza', a: { t: 'Solo datos', items: ['Rápido', 'Objetivo', 'No explica el porqué'] }, b: { t: 'Datos y terreno', items: ['Ves el cuadre en vivo', 'Entiendes las causas', 'Cuesta un día entero'] } },
    },
  },
  {
    id: 'r5', t: '15:00', ch: 'presencial', who: 'gerente', titulo: 'La idea rápida de Marco', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Marketing, piso 11', show: ['etica', 'confianza'],
    body: () => `<p>La oficina de Marco tiene una pared de premios y una cafetera italiana. Te recibe de pie, entusiasmado.</p><p>«Mira, esto se arregla en una semana. Mandamos un correo a las 46 agencias: <mark class="clave">que cada colaborador deje una reseña de cinco estrellas</mark>. Les damos un vale de cine. Subimos a 4 estrellas antes de la campaña. ¿Me ayudas a redactarlo?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no: una reseña pedida y premiada no es una opinión, y si se filtra el correo, la campaña muere antes de nacer. Le ofreces otra cosa: responder las reseñas reales, una por una.',
        res: { q: 'buena', fx: { etica: 5, confianza: 1 }, rel: { gerente: -1 }, flags: ['resenas_sin_incentivo'],
          out: 'Marco se cruza de brazos: «Eres nueva, ya aprenderás cómo funciona esto». Pero no manda el correo. Al salir, te dice: «Tráeme algo mejor el jueves».',
          pro: { ok: 'Proteges la credibilidad de la marca antes de que exista.', risk: 'Marco te ve como un freno. Tendrás que ganártelo con resultados.', info: 'En marca empleadora, lo que se descubre después pesa más que lo que se dijo antes.' },
          kusi: ['animo', 'Cinco estrellas compradas valen cero.'] } },
      { id: 'b', label: 'Ayudarlo, pero sin vale de cine: solo invitar a quienes estén contentos a que dejen su opinión.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: 2 }, rel: { gerente: 1 },
          out: 'El correo sale firmado por Marketing. Algunos supervisores lo leen como una orden: «De parte de la sede, todos a reseñar».',
          pro: { ok: 'Sin premio, el pedido es menos grave.', risk: 'Cuando el pedido viene de arriba, en un banco jerárquico, se lee como obligación.' },
          kusi: ['pensando', 'Un pedido de la sede nunca es solo una invitación.'] } },
      { id: 'c', label: 'Redactarlo tal cual: Marco es gerente, conoce el negocio y tú recién llegas.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: 1 }, rel: { gerente: 1 }, flags: ['resenas_compradas'],
          out: 'El correo sale a las 4:30. A las 6, alguien ya le tomó captura y la mandó a un grupo de WhatsApp de excolaboradores.',
          pro: { ok: 'Marco queda contento.', risk: 'Una reseña premiada, si se descubre, se convierte en la peor reseña de todas.' },
          kusi: ['triste', 'Eso va a volver. Las capturas no se borran.'] } },
    ],
    rules: [[BP, 'No se piden ni se premian reseñas: se mejora lo que las reseñas critican.']],
    mirada: {
      ve: 'Marco no es un villano: tiene una meta de reputación y sabe que las estrellas pesan en las postulaciones. Pero inflar las reseñas es como bajar la fiebre con hielo: el número mejora y la enfermedad sigue. Y en redes, casi todo se termina sabiendo.',
      visual: { tipo: 'matriz', x: 'Rapidez', y: 'Credibilidad', cuadrantes: ['Lento y creíble', 'Rápido y creíble', 'Lento y frágil', 'Rápido y frágil'], items: [['Responder reseñas reales', .3, .85], ['Invitar sin premio', .6, .45], ['Reseñas con vale de cine', .9, .08]] },
    },
  },
  {
    id: 'r6', t: '18:10', ch: 'correo', who: null, titulo: 'Lo que le escribes a Fiorella', banner: 'assets/esc/escritorio.webp', show: ['confianza', 'calidad', 'etica'],
    mail: { from: 'Fiorella Chávez', to: 'Analista de Comunicación Interna y Employer Branding', asunto: 'RE: Bienvenida · ¿cómo te fue?' },
    body: (n, F) => `<p>¿Cómo terminó tu primer día? Dame tu primera lectura en corto. ${F.has('diag_fuentes') ? 'Vi que pediste las marcaciones: buen instinto.' : ''}</p><p>Fiorella</p><p>Afuera ya oscureció y el piso 9 se va vaciando. Escribes con <mark class="clave">el café frío</mark> al lado.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'La verdad incómoda: las reseñas coinciden con las marcaciones, el problema es el cuadre fuera de horario y una campaña no lo va a tapar. Propones derivarlo a Relaciones Laborales y contar solo lo que sea cierto.',
        res: { q: 'buena', fx: { confianza: 4, etica: 4, calidad: 2 }, rel: { fiorella: 1 }, flags: ['diag_honesto'],
          responde: 'Fiorella: las reseñas no exageran. En 31 de 46 agencias la salida promedio está 50 minutos después del cierre, por el cuadre de caja. No es un problema de comunicación: es de operación y, quizá, de sobretiempo sin registrar. Propongo dos cosas: derivarlo a Relaciones Laborales esta semana y que la campaña cuente solo lo que hoy es verdad. El miércoles paso el día en Comas para entender el porqué.',
          out: 'Te vas a casa en el Metropolitano, apretada entre mochilas. Sientes que hoy dijiste algo que nadie quería escuchar. Y que alguien te lo agradeció.',
          kusi: ['celebra', 'Diagnóstico con verdad. ¡Qué bacán!'] } },
      { id: 'b', label: 'Una lectura amable: las reseñas son pocas comparadas con 2,000 colaboradores y una buena campaña positiva puede equilibrarlas.',
        res: { q: 'riesgosa', fx: { confianza: -1, etica: -3 }, flags: ['diag_maquillado'],
          responde: 'Fiorella: 214 reseñas son pocas frente a 2,000 colaboradores. Creo que con una campaña positiva, con historias bonitas, podemos equilibrar la percepción.',
          out: 'Envías el correo y apagas la laptop. Te queda una incomodidad: los datos de marcación decían otra cosa.',
          kusi: ['preocupado', 'Los datos decían otra cosa…'] } },
      { id: 'c', label: 'La verdad con nombres: las agencias de Comas, Ate y Miraflores maquillan sus horarios y sus supervisores deberían responder por eso.',
        res: { q: 'aceptable', fx: { confianza: 1, personas: -3 }, flags: ['diag_honesto'],
          responde: 'Fiorella: los supervisores de Comas, Ate y Miraflores tienen a su gente saliendo tarde. Creo que deberían responder por eso.',
          out: 'Fiorella responde: «El dato es valioso, pero ojo: don Abel fue el único que te dijo la verdad, y lo estás poniendo en la misma lista».',
          kusi: ['pensando', 'El que te dijo la verdad no es el culpable.'] } },
    ],
    rules: [[BP, 'Un diagnóstico señala patrones y causas, no culpables con nombre propio.']],
    mirada: {
      ve: 'Esta es la decisión más importante de tu primer día: decir que el problema no se arregla con comunicación. Parece que te quitas trabajo, pero en realidad ganas algo que ninguna campaña compra: que tu jefa confíe en lo que le dices.',
      visual: { tipo: 'flujo', titulo: 'Lo que vino hoy y lo que viene', pasos: ['Reseñas', 'Marcaciones', 'Supervisores', 'Diagnóstico', 'Comas el miércoles'], aqui: 3 },
    },
  },
];
