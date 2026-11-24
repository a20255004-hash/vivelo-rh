// Analista de Comunicación Interna y Employer Branding · Capítulo 6 · «El audio» · Semana 2, lunes.
// Hilo de las dos semanas: lo que dices afuera debe ser verdad adentro. Tras el cierre de 8 agencias, un audio anuncia despidos.
// Normas citadas (texto oficial en docs/normas/txt):
// - Constitución Política del Perú, art. 2 inc. 4 (libertades de información, opinión, expresión y difusión del pensamiento).
//   Archivo: Constitucion-Politica-del-Peru-1993.txt
// - Ley 29733: art. 6 (finalidad), art. 7 (proporcionalidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf

export const CAP = {
  n: 6, titulo: 'El audio', dia: 'Semana 2, lunes', foto: 'assets/foto2/grito.webp',
  lugar: 'Banco Andino · Sede central de San Isidro, piso 9',
  inicio: '07:20', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes, 7:15. Todavía estás en el Metropolitano cuando el celular empieza a vibrar sin parar. Un audio de dos minutos recorre los grupos de WhatsApp de las agencias: «El cierre es solo el inicio. En marzo vienen 200 despidos».', boton: 'Escuchar el audio',
  kusi: 'Un rumor corre más rápido que un comunicado. Pero se cansa antes que la verdad.',
  lead: 'Verificaste el audio antes de responder, frenaste un desmentido con amenazas, respondiste con hechos en el canal de agencias, te negaste a vigilar los grupos privados y abriste un espacio para que la gente pregunte.',
  reflexion: '¿Por qué crees que la gente le creyó más a un audio anónimo que a un comunicado oficial?',
  siguiente: { n: 7, titulo: 'Los embajadores', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'rumor', p: 'Audio de los «200 despidos»', j: 'Tú · Fiorella · Renzo', d: 5, e: 'Circulando desde las 6 a. m.' },
  { id: 'cierre', p: 'Primer día de los 64 trasladados', j: 'Renzo · supervisores', d: 5, e: 'Hoy' },
  { id: 'campana', p: 'Campaña «Tu primer gran trabajo»', j: 'Marco · Kiara', d: 5, e: 'Fotos del sábado en edición' },
  { id: 'embajadores', p: 'Programa de embajadores', j: 'Tú', d: 5, e: 'Propuesta mañana' },
];

export const FUTURO = {
  rumor_verificado: ['Antes de responder, averiguaste de dónde salía el audio y qué había de cierto.', 'Tu respuesta no tuvo que corregirse después.'],
  desmentido_sereno: ['Respondiste el rumor con hechos, sin amenazas.', 'La gente volvió a confiar en el canal de agencias.'],
  desmentido_amenaza: ['El desmentido amenazó con sanciones a quien difundiera.', 'Eso alimentó la sospecha. Capítulo 9.'],
  grupos_respetados: ['Te negaste a vigilar los grupos privados de WhatsApp.', 'Fiorella lo defendió ante Gerencia General.'],
  grupos_vigilados: ['Aceptaste revisar capturas de grupos privados para hallar al autor.', 'Se sabrá. Capítulo 9.'],
  preguntas_abiertas: ['Abriste un espacio para que la gente pregunte lo que quiera, sin nombre.', 'Las preguntas te darán material para los embajadores.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  jhoselyn: { n: 'Jhoselyn Ccori', sub: 'Cajera · agencia Comas', who: 'cajera' },
  renzo: { n: 'Renzo Salas', sub: 'Relaciones Laborales', c: '#4A5568' },
  difusion: { n: 'Andino Contigo · Agencias', sub: 'Canal de difusión · 46 supervisores', c: '#2F6B3F' },
  abel: { n: 'Abel Huamán', sub: 'Supervisor de la agencia Comas', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'equipo', t: '07:22', de: 'Kiara', txt: '¿Ya escucharon el audio? 😰 Me lo mandaron tres personas distintas. Una de mi casa.' },
  { chat: 'fiorella', t: '07:30', de: 'Fiorella', txt: 'Lo escuché. Nada de responder en caliente. Averigua primero y a las 9 decidimos.' },
  { chat: 'abel', t: '08:05', de: 'Abel', txt: 'Mis 9 de Collique llegaron asustados por el audio. Uno me preguntó si debía buscar otra chamba.' },
  { chat: 'abel', t: '08:06', de: 'Abel', txt: 'Lo bueno: el comunicado del viernes era clarito. Se los leí de nuevo.', si: 'comunicado_claro' },
  { chat: 'abel', t: '08:06', de: 'Abel', txt: 'El comunicado del viernes no ayudó: «reorganización» suena a lo mismo que dice el audio.', si: 'comunicado_vago' },
  { chat: 'renzo', t: '08:40', de: 'Renzo', txt: 'El audio es de un exjefe de zona que salió en agosto. Y ojo: el viernes alguien de la sede filtró a un grupo que «nadie se va», antes de las 3. Eso le dio pie.', si: 'jhoselyn_filtro' },
  { chat: 'jhoselyn', t: '18:30', de: 'Jhoselyn', txt: 'Mi prima Yeni ya está en Comas, en la ventanilla 4. ¡Por fin está llena! 😊' },
];

export const CORREOS = [
  { t: '09:30', de: 'Gabriela Soto · Gerencia General', para: 'Fiorella Chávez; Comunicación Interna', asunto: 'Audio · urgente', html: '<p>El Sr. Bellido escuchó el audio. Pide dos cosas: un desmentido hoy y saber quién lo grabó y quién lo está difundiendo dentro del banco.</p>' },
  { t: '16:45', de: 'Operaciones · Red de Agencias', para: 'Comunicación Interna; Relaciones Laborales', asunto: 'Sobre el audio', html: '<p>Confirmamos: no existe ningún plan de reducción de personal en la red de agencias. El plan de cierre de este año terminó con las 8 agencias anunciadas.</p>' },
];

export const QUIZ = [
  { q: 'Ante un rumor que corre en WhatsApp, lo primero es…', ops: ['Desmentirlo en cinco minutos', 'Verificar de dónde sale y qué tiene de cierto', 'Ignorarlo', 'Buscar al autor para sancionarlo'], ok: 1, por: 'Un desmentido que luego hay que corregir es peor que el rumor.' },
  { q: 'Un desmentido que dice «quien difunda rumores será sancionado»…', ops: ['Calma a todos', 'Suele confirmar la sospecha y genera miedo', 'Es obligatorio', 'Es la mejor práctica'], ok: 1, por: 'La amenaza suena a que hay algo que esconder.' },
  { q: 'Gerencia pide revisar los grupos privados de WhatsApp de los trabajadores para hallar quién difunde el audio. ¿Qué haces?', ops: ['Pides capturas a los supervisores', 'Explicas que es desproporcionado y propones responder con hechos', 'Creas un grupo falso para infiltrarte', 'Revisas solo los de agencias'], ok: 1, por: 'Usar información de conversaciones privadas para esto excede la finalidad y la proporcionalidad (Ley 29733, arts. 6 y 7), además de chocar con la libertad de expresión.' },
  { q: 'Operaciones dice «no podemos confirmar ni negar planes futuros». Comunicacionalmente…', ops: ['Es perfecto', 'Alimenta el rumor: hay que pedir una respuesta clara sobre lo que sí se sabe hoy', 'Hay que publicarlo tal cual', 'Es mejor no decir nada'], ok: 1, por: 'Lo que no se responde, se completa con miedo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '07:50', ch: 'llamada', who: null, titulo: 'De dónde salió el audio', banner: 'assets/foto/llamada.webp', lugar: 'Bajando del Metropolitano en la estación Javier Prado', show: ['calidad', 'tiempo'],
    body: () => `<p>El audio es de un hombre con voz segura: «Les habla alguien que conoce el banco por dentro. El cierre es el inicio. En marzo vienen 200 despidos».</p><p>Antes de responder nada, <mark class="clave">averiguas qué hay de cierto</mark>. Haces cuatro llamadas caminando por Javier Prado.</p>`,
    type: 'calls',
    calls: [['Renzo · Relaciones Laborales', 'Contesta', 'No hay ningún plan de despidos que yo conozca. Y yo sería el primero en saberlo. La voz es de un exjefe de zona que salió en agosto.'], ['Don Abel · Comas', 'Contesta', 'A mí me llegó de un excajero. Mi gente de Collique está asustada, señorita. El audio suena muy seguro.'], ['Operaciones · Red de Agencias', 'Contesta', 'No podemos confirmar ni negar planes futuros. Eso lo maneja el directorio.'], ['Kiara', 'Contesta', 'Ya está en TikTok con 4,000 vistas. Alguien le puso música de suspenso 🙃']],
    prompt: 'Renzo dice que no hay plan, Operaciones no confirma ni niega y el audio ya salió del banco. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Pedirle a Operaciones una respuesta clara y por escrito sobre lo que sí se sabe hoy, antes de responder: «no confirmar ni negar» es exactamente lo que alimenta el audio.',
        res: { q: 'buena', fx: { calidad: 5, tiempo: -2 }, flags: ['rumor_verificado'], cartera: { rumor: 'Pedida confirmación escrita a Operaciones' },
          out: 'Operaciones tarda, pero a las 4:45 responde por escrito: «No existe ningún plan de reducción de personal en la red de agencias». Mientras tanto, preparas todo lo demás.',
          pro: { ok: 'Esperas la palabra que te permite responder sin tener que corregirte.', risk: 'Mientras esperas, el audio sigue corriendo. Tendrás que decir algo antes.', info: 'Se puede responder en dos tiempos: ya, con lo que sabes; luego, con la confirmación.' },
          kusi: ['pensando', 'Primero la verdad completa. ¡Bien!'] } },
      { id: 'b', label: 'Responder ya con lo que dijo Renzo: «No hay ningún plan de despidos».',
        res: { q: 'aceptable', fx: { tiempo: 3, calidad: -1 },
          out: 'Tu mensaje sale a las 8:30. A las 10, alguien pregunta en el canal: «¿Y por qué Operaciones dice que no puede negar nada?». Tienes que matizar.',
          pro: { ok: 'Respondes rápido.', risk: 'Afirmar algo que otra área no confirma te deja expuesta.' },
          kusi: ['preocupado', 'Rápido… pero con un hueco.'] } },
      { id: 'c', label: 'No responder nada: los rumores se apagan solos y responder les da importancia.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3 },
          out: 'A mediodía, el audio ya tiene 11,000 vistas en TikTok y dos supervisores te preguntan si es verdad. El silencio se lee como un sí.',
          pro: { ok: 'No te equivocas.', risk: 'Un rumor sobre el trabajo de la gente no se apaga solo: crece con el silencio.' },
          kusi: ['triste', 'El silencio también comunica.'] } },
    ],
    rules: [[BP, 'Antes de desmentir, verifica. Un desmentido corregido es peor que el rumor.']],
    mirada: {
      ve: 'Un rumor crece donde hay miedo y falta información. El audio no inventó el miedo: el cierre del viernes ya lo había sembrado. Y «no podemos confirmar ni negar» es justo el tipo de respuesta que convierte un rumor en certeza.',
      visual: { tipo: 'matriz', x: 'Velocidad de respuesta', y: 'Solidez de la respuesta', cuadrantes: ['Lento y sólido', 'Rápido y sólido', 'Lento y frágil', 'Rápido y frágil'], items: [['Pedir confirmación escrita', .35, .9], ['Responder con lo de Renzo', .85, .45], ['Callar', .05, .1]] },
    },
  },
  {
    id: 'f2', t: '09:40', ch: 'documento', who: null, titulo: 'El desmentido de Gerencia', banner: 'assets/foto/mesa-papeles.webp', show: ['etica', 'calidad', 'confianza'],
    body: () => `<p>Gabriela te reenvía un desmentido que redactaron en Gerencia General, con el pedido del Sr. Bellido: «que salga ya».</p><p>Lo lees dos veces. <mark class="clave">Algunas frases van a empeorar las cosas</mark>.</p>`,
    type: 'flag', prompt: 'Marca las frases que son un riesgo o una mala práctica.',
    doc: { t: 'COMUNICADO URGENTE', sub: 'Gerencia General · borrador para toda la organización' },
    lines: [
      { id: 'falso', t: '«Es FALSO el audio que circula. Se trata de una campaña malintencionada».', bad: BP, why: 'Las mayúsculas y «malintencionada» suenan a enojo. Mejor: lo que sí es verdad, en tono tranquilo.' },
      { id: 'sancion', t: '«Quien difunda este tipo de contenidos será sancionado conforme al Reglamento Interno».', bad: LEY, why: 'Amenazar por compartir un audio choca con la libertad de expresión (Constitución, art. 2 inc. 4) y suena a que hay algo que esconder.' },
      { id: 'nunca', t: '«El banco garantiza que nunca habrá despidos».', bad: BP, why: 'Nadie puede prometer «nunca». Promételo y la próxima salida individual será la prueba de que mentiste.' },
      { id: 'nombre', t: '«El autor del audio es el señor J. P. R., exjefe de zona desvinculado en agosto por bajo rendimiento».', bad: LEY, why: 'Exponer el nombre y el motivo de salida de alguien usa sus datos para otra finalidad (Ley 29733, art. 6) y lo convierte en víctima.' },
      { id: 'cierre', t: '«El cierre de las 8 agencias no implicó ningún despido: las 64 personas fueron trasladadas».' },
      { id: 'pregunta', t: '«Si tienes dudas, puedes escribir a Gestión Humana».' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Dejas pasar una línea peligrosa. Fiorella la detecta en la revisión final y te mira por encima de los lentes.' : `Marcas ${hitsLey} riesgos legales y dos frases que encienden más de lo que apagan. Le devuelves a Gabriela una versión de cinco líneas, sin mayúsculas ni amenazas.`,
      flags: missLey ? ['desmentido_amenaza'] : [],
      fx: { etica: missLey ? -3 : 4, calidad: missLey ? -1 : 4, cumplimiento: missLey ? -2 : 3 },
      cartera: { rumor: missLey ? 'Desmentido con amenazas' : 'Desmentido en tono sereno, sin nombres' },
      pro: { ok: 'Un desmentido sereno dice lo que es verdad y deja una puerta para preguntar.', risk: 'Amenazar a quien comparte un audio le da al audio la razón.' },
      kusi: missLey ? ['preocupado', 'Esa línea iba a encender todo.'] : ['animo', 'Sin gritos, sin nombres, sin «nunca». ¡Así!'],
    }),
    rules: [[LEY, 'Toda persona tiene libertad de información, opinión y expresión (Constitución, art. 2 inc. 4).'], [LEY, 'Los datos de una persona no se usan para una finalidad distinta a la que justificó su recopilación (Ley 29733, art. 6).']],
    mirada: {
      ve: 'Cuando la gerencia se siente atacada, su primer impulso es responder fuerte. Pero un desmentido con mayúsculas, amenazas y nombres propios le dice a la gente justo lo contrario de lo que quiere: que hay nervios, que hay algo que esconder.',
      visual: { tipo: 'cambio', titulo: 'Del enojo a la calma', pares: [['«Es FALSO»', 'Esto es lo que sabemos hoy'], ['«Será sancionado»', 'Si tienes dudas, pregúntanos'], ['«Nunca habrá despidos»', 'No existe ningún plan de reducción']] },
    },
  },
  {
    id: 'f3', t: '11:00', ch: 'whatsapp', who: null, titulo: 'La respuesta en el canal', banner: 'assets/foto2/callcenter.webp', show: ['calidad', 'personas', 'confianza'],
    body: (n, F) => `<p>${F.has('wsp_agencias') ? 'El canal de agencias tiene una semana de vida y lo leen casi todos los supervisores.' : 'Tienes el canal de agencias, aunque todavía lo leen pocos.'} Es el momento de usarlo para algo serio.</p><p>Sin esperar a Operaciones, respondes con <mark class="clave">lo que sabes hoy</mark>.</p>`,
    type: 'compose', enviaA: 'difusion', para: 'Para: Andino Contigo · Agencias (46 supervisores)', boton: 'Enviar al canal',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'reco', t: 'Reconocer', ops: [
        { id: 'r1', t: 'Equipo, sabemos que circula un audio sobre despidos y que preocupa. Es normal preguntarse.', ok: true, por: 'Nombras el tema y validas la preocupación.' },
        { id: 'r2', t: 'Equipo, no hagan caso a audios falsos.', ok: false, por: 'Descalifica sin informar.' },
      ] },
      { id: 'hechos', t: 'Lo que sabes', ops: [
        { id: 'h1', t: 'Lo que sabemos: el cierre del viernes no tuvo despidos y Relaciones Laborales no conoce ningún plan de reducción. Pedimos a Operaciones confirmarlo por escrito y se los compartiremos hoy.', ok: true, por: 'Hechos, fuente y un compromiso con hora.' },
        { id: 'h2', t: 'Les garantizamos que no habrá ningún despido.', ok: false, por: 'Promete lo que no puedes garantizar.' },
      ] },
      { id: 'puerta', t: 'La puerta', ops: [
        { id: 'p1', t: 'Si en tu agencia hay preguntas, mándenmelas. Las respondemos todas, aunque sean incómodas.', ok: true, por: 'Invitas a preguntar, no a callar.' },
        { id: 'p2', t: 'Les pedimos no compartir el audio.', ok: null, por: 'Comprensible, pero suena a prohibición.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'h1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.hechos === 'h2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'riesgosa' ? -2 : 1, personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : q === 'riesgosa' ? -2 : 0 },
        flags: q === 'buena' ? ['desmentido_sereno'] : [],
        cartera: { rumor: q === 'buena' ? 'Respuesta con hechos en el canal; confirmación en camino' : 'Respuesta enviada, con huecos' },
        out: q === 'buena' ? 'En una hora llegan 17 preguntas de supervisores. Ninguna es agresiva. Una dice: «¿Y si cierran más agencias el próximo año?». Es una pregunta justa.' : q === 'riesgosa' ? 'Don Abel te escribe por privado: «Señorita, ¿usted puede garantizar eso? Porque yo no se lo voy a repetir a mi gente».' : 'El mensaje llega. Algunos supervisores lo reenvían; otros esperan algo más.',
        pro: { ok: 'Reconoces el miedo, das hechos con su fuente y abres la puerta.', risk: 'Garantías absolutas se rompen con el primer caso individual.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Diecisiete preguntas! La gente confía en el canal.' : 'Cuidado con lo que garantizas.'],
      };
    },
    rules: [[BP, 'Ante un rumor: reconoce la preocupación, da los hechos con su fuente y abre la puerta a preguntar.']],
    mirada: {
      ve: 'La semana pasada prometiste en este canal pocos mensajes y siempre útiles. Esa promesa es la que hoy te permite competir con un audio anónimo: la gente sabe que cuando escribes, es por algo.',
      visual: { tipo: 'flujo', titulo: 'Responder un rumor', pasos: ['Reconocer el miedo', 'Dar hechos y su fuente', 'Comprometer una hora', 'Abrir preguntas'], aqui: 1 },
    },
  },
  {
    id: 'f4', t: '12:30', ch: 'presencial', who: 'fiorella', titulo: '«Que encuentren al autor»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Fiorella, puerta cerrada', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Fiorella cierra la puerta. «Gabriela insiste: el Sr. Bellido quiere saber quién lo está difundiendo adentro. Propone pedir a los supervisores <mark class="clave">capturas de los grupos de WhatsApp de sus equipos</mark>.»</p><p>Se frota las sienes. «Yo no estoy de acuerdo, pero necesito tu argumento para subir a las 2.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Argumentar que es desproporcionado y contraproducente: los grupos son privados, compartir un audio no es una falta y, si se sabe que la sede vigila, nadie volverá a preguntar nada. Propones medir el rumor por las preguntas que llegan, no por quién lo comparte.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 2 }, rel: { fiorella: 1 }, flags: ['grupos_respetados'],
          out: 'A las 3, Fiorella vuelve. «Lo compró. Lo que más le pesó fue lo de "nadie volverá a preguntar". No habrá capturas.»',
          pro: { ok: 'Le das a tu jefa un argumento legal, ético y práctico.', risk: 'Gerencia sigue preocupada. Tendrás que mostrar que tu camino funciona.', info: 'Usar datos de conversaciones privadas para esto excede la finalidad y la proporcionalidad (Ley 29733, arts. 6 y 7).' },
          kusi: ['celebra', '¡Nadie vigila a nadie! Así se cuida la confianza.'] } },
      { id: 'b', label: 'Proponer algo intermedio: pedir capturas solo a los supervisores que quieran darlas, sin obligar a nadie.',
        res: { q: 'riesgosa', fx: { etica: -3, confianza: -2 }, flags: ['grupos_vigilados'],
          out: 'Tres supervisores mandan capturas «voluntariamente». En una se ve el nombre de una cajera de Ate que compartió el audio con un «¿será cierto?». Su supervisor ya la miró distinto.',
          pro: { ok: 'Nadie está obligado.', risk: 'Un supervisor que manda capturas de su equipo expone a personas que solo hicieron una pregunta.' },
          kusi: ['preocupado', '«Voluntario» para el jefe, no para el equipo.'] } },
      { id: 'c', label: 'Decirle a Fiorella que no es tu tema: es una decisión de Gerencia y Relaciones Laborales.',
        res: { q: 'aceptable', fx: { confianza: -2, etica: -1 },
          out: 'Fiorella sube sola, sin tu argumento. Logra posponer la decisión, pero no detenerla. «La próxima vez te necesito en la mesa», te dice.',
          pro: { ok: 'Respetas los roles.', risk: 'Lo que pasa con los canales de comunicación sí es tu tema: su credibilidad es tu herramienta.' },
          kusi: ['pensando', 'Era tu tema, aunque no fuera tu decisión.'] } },
    ],
    rules: [[LEY, 'Todo tratamiento de datos debe ser adecuado, relevante y no excesivo a su finalidad (Ley 29733, art. 7).'], [LEY, 'Toda persona tiene libertad de opinión y expresión (Constitución, art. 2 inc. 4).']],
    mirada: {
      ve: 'Buscar al «culpable» de un rumor es una tentación de toda gerencia asustada. Pero un rumor no lo crea quien lo comparte, sino la falta de información. Si la gente siente que la vigilan, deja de preguntar en voz alta… y el siguiente rumor será peor.',
      visual: { tipo: 'balanza', a: { t: 'Buscar quién lo comparte', items: ['Una persona sancionada', 'Todos se callan', 'El próximo rumor crece'] }, b: { t: 'Responder lo que preguntan', items: ['Preguntas visibles', 'Confianza en el canal', 'Rumor sin aire'] } },
      normas: [{ ley: 'Ley 29733, art. 7', dice: 'Todo tratamiento de datos personales debe ser adecuado, relevante y no excesivo a la finalidad para la que estos hubiesen sido recopilados.', practica: 'Revisar los chats privados de un equipo para saber quién reenvió un audio es lo contrario de un tratamiento proporcional.' }],
    },
  },
  {
    id: 'f5', t: '15:00', ch: 'documento', who: null, titulo: 'Para que el rumor no vuelva', banner: 'assets/esc/idea.webp', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>Fiorella te pide un plan para esta semana. No para apagar este audio, sino para que <mark class="clave">el próximo no encuentre tanto espacio</mark>.</p><p>Tienes tiempo y equipo para tres acciones.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres acciones de la semana.', boton: 'Proponer el plan', resumen: 'Propusiste',
    cols: ['Acción', 'Qué logra'],
    rows: [
      { id: 'buzon', cells: ['Un formulario anónimo de preguntas, con respuestas publicadas cada viernes', 'Que la gente pregunte sin miedo'] },
      { id: 'vivo', cells: ['Una conversación en vivo de 30 minutos con el gerente de Operaciones, antes de que abran las agencias', 'Que la respuesta venga de quien decide'] },
      { id: 'faq', cells: ['Actualizar la hoja de preguntas del cierre con las 17 preguntas nuevas', 'Responder lo que de verdad preguntan'] },
      { id: 'sorteo', cells: ['Un sorteo entre quienes reaccionen al canal', 'Más reacciones'] },
      { id: 'video', cells: ['Un video del Gerente General diciendo que «todo está bien»', 'Una cara conocida'] },
      { id: 'lista', cells: ['Una lista de «fuentes oficiales» y otra de «fuentes prohibidas»', 'Control de lo que circula'] },
    ],
    score: { buzon: 3, vivo: 3, faq: 3, video: 0, sorteo: -1, lista: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: picks.includes('buzon') ? ['preguntas_abiertas'] : [],
        cartera: { rumor: q === 'buena' ? 'Plan: preguntas anónimas, conversación en vivo y FAQ' : 'Plan de la semana con huecos' },
        out: q === 'buena' ? 'El gerente de Operaciones acepta la conversación en vivo del jueves a las 8:15. «Si me preguntan algo que no sé, ¿qué digo?», te pregunta. «Que no lo sabe y cuándo lo sabrá», le respondes.' : 'El plan tiene una acción útil, pero otras solo hacen ruido.',
        pro: { ok: 'Abres espacios para preguntar y pones a quien decide frente a quien pregunta.', risk: 'Controlar lo que circula o premiar reacciones no genera confianza.', info: 'Publica las preguntas incómodas también. Si solo respondes las fáciles, se nota.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Que pregunten sin miedo!' : 'Eso no responde lo que preguntan.'],
      };
    },
    rules: [[BP, 'Los rumores viven donde no hay preguntas respondidas. Abre espacios para preguntar.']],
    mirada: {
      ve: 'No se puede impedir que la gente hable de su trabajo en sus grupos. Lo que sí se puede es que, cuando tenga una duda, prefiera preguntarle a la empresa antes que creerle a un audio. Eso se construye respondiendo, semana tras semana.',
      visual: { tipo: 'embudo', titulo: 'Las preguntas del día', niveles: [['Preguntas que llegaron', 17], ['Respondidas hoy', 12], ['Pendientes de Operaciones', 5]] },
    },
  },
  {
    id: 'f6', t: '18:40', ch: 'whatsapp', who: 'cajera', titulo: 'La ventanilla 4', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Metropolitano de regreso, estación Naranjal', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Jhoselyn te escribe: «Mi prima Yeni ya está en Comas, en la ventanilla 4. ¡Por fin está llena! Hoy salimos 6:50. Primera vez en meses» 😊</p><p>Y luego: «Pero dígame la verdad, señorita: <mark class="clave">¿el próximo año cierran Comas?</mark>». ${F.has('rumor_verificado') ? 'Tienes la respuesta escrita de Operaciones: no hay ningún plan de reducción. De cierres futuros, no dijo nada.' : 'No tienes una respuesta oficial sobre el futuro.'}</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle lo que sabes y lo que no: hoy no hay ningún plan de despidos ni de nuevos cierres que tú conozcas; si algún día lo hubiera, se lo dirían primero a ella, en persona, como a Yeni.',
        res: { q: 'buena', fx: { personas: 4, confianza: 4 }, rel: { cajera: 1 },
          envia: [['jhoselyn', 'Te digo lo que sé: hoy no hay ningún plan de despidos ni de nuevos cierres que yo conozca. El futuro nadie lo sabe. Lo que sí te prometo: si algún día pasa algo así, te lo dirían primero a ti, en persona, como a Yeni. ¡Y qué bien lo de las 6:50! 🎉']],
          out: 'Jhoselyn responde: «Eso me sirve más que un "tranquila". Mañana le cuento lo de la campaña: ya lo hablé con mi mamá».',
          pro: { ok: 'Dices lo que sabes, lo que no sabes y lo que sí puedes comprometer: el modo.', info: 'Lo único que se puede prometer sobre el futuro es cómo se comunicará.' },
          kusi: ['feliz', 'Verdad, límite y promesa de modo. ¡Y salió 6:50!'] } },
      { id: 'b', label: 'Decirle «tranquila, Comas no cierra»: es una agencia grande y acaba de recibir gente.',
        res: { q: 'aceptable', fx: { personas: 2, confianza: -2 },
          envia: [['jhoselyn', 'Tranquila, Comas no cierra 😊 Acaba de recibir gente.']],
          out: 'Jhoselyn se queda tranquila. Tú te quedas con una promesa que no depende de ti.',
          pro: { ok: 'La calmas.', risk: 'Hoy hiciste lo contrario con Gerencia: pediste no garantizar lo que no se sabe.' },
          kusi: ['pensando', '¿Eso lo puedes garantizar?'] } },
    ],
    rules: [[BP, 'Sobre el futuro, no prometas resultados: promete cómo se comunicará.']],
    mirada: {
      ve: 'Hoy Comas salió a las 6:50 porque se llenó una ventanilla. No es todavía «salir a tu hora», pero es la primera noticia verdadera de que algo cambia. Y la pregunta de Jhoselyn es la de todo el banco: después de un cierre, nadie se siente seguro.',
      visual: { tipo: 'linea', titulo: 'Comas, en una semana', hitos: [['Miércoles', 'Salida 7:20, ventanilla vacía'], ['Viernes', 'Se anuncia el cierre de Collique'], ['Lunes', 'Llega Yeni; salida 6:50']] },
    },
  },
];
