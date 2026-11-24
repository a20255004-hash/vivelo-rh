// Supervisor/a de SST · Capítulo 10 · «Dos semanas» · Semana 2, viernes. Final abierto: continúa en la Semana 3.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR: art. 32 (documentación que se exhibe: política, reglamento interno, IPERC, mapa de riesgos,
//   planificación, programa anual); art. 33 c) (registro de monitoreo de agentes); art. 42 c) y f) (el comité aprueba el
//   programa anual y el plan de capacitación); art. 72 (informe anual del comité); art. 77 (evaluación en cada puesto).
// - D.S. 019-2006-TR: art. 12 b) (comparecencia); art. 20.3 (medidas de requerimiento); art. 46.7 y 46.10 (no cumplir el
//   requerimiento o no asistir a la comparecencia: infracciones muy graves a la labor inspectiva).

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/esc/camino.webp',
  lugar: 'Productos Mar de Piura · Planta de Paita',
  inicio: '07:20', fin: '18:40', cierreHora: '18:20',
  apertura: 'Viernes. Hace dos semanas entraste a esta planta con un casco nuevo y una carpeta vieja. Hoy Julio quiere conversar. El lunes, a las 9:00, te espera la inspectora en Piura.', boton: 'Subir a la oficina de Julio',
  kusi: 'Dos semanas no cambian una planta… pero pueden cambiar cómo se habla de seguridad en ella. ¡Mira atrás y mira adelante!',
  lead: 'En dos semanas: candados donde no había, una cámara que abre desde adentro, un registro que dice la verdad, un comité que sesiona, dos investigaciones que buscaron causas, una línea que aprendió a bloquear y una inspección recibida con la puerta abierta. Y mucho por hacer.',
  reflexion: '¿Te ves en este puesto? ¿Podrías decir «alto» cada día, a quien sea, y seguir trabajando con esa misma gente al día siguiente?',
  siguiente: { n: 11, titulo: 'La comparecencia', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'comparecencia', p: 'Comparecencia ante SUNAFIL', j: 'Ing. Julio Zapata y SST', d: 0, e: 'Lunes 09:00 · Piura' },
  { id: 'monitoreo', p: 'Monitoreo de frío y amoníaco', j: 'SST', d: 0, e: 'Requerimiento con plazo' },
  { id: 'programa', p: 'Programa anual de SST', j: 'Comité', d: 0, e: 'Por aprobar' },
  { id: 'noche', p: 'Turno de noche', j: 'Wilson · SST', d: 0, e: 'Sin capacitación en tres meses' },
  { id: 'compresores', p: 'Sala de compresores', j: 'Wilson · Frío', d: 0, e: 'Empaquetaduras «para cambio»' },
];

export const FUTURO = {
  plazos_reales: ['Defendiste plazos realistas para el requerimiento, con laboratorio y fechas verificables.', 'Se pondrán a prueba en la comparecencia. Semana 3.'],
  plazos_inflados: ['Aceptaste prometer plazos que el laboratorio no puede cumplir.', 'La inspectora los anotará. Semana 3.'],
  balance_honesto: ['Tu balance separa lo que ya funciona de lo que solo existe en papel.', 'Es tu hoja de ruta para la semana 3.'],
  te_quedas: ['Le dijiste a Julio que te quedas, con condiciones claras.', 'Semana 3.'],
  compresor_alerta: ['Wilson te avisó de olor a amoníaco en la sala de compresores el viernes en la tarde.', 'Lo primero del lunes, antes de la comparecencia. Semana 3.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  yesenia: { n: 'Yesenia Távara', sub: 'Asistente de SST', c: '#2E7D6B' },
  wilson: { n: 'Wilson Ipanaqué', sub: 'Técnico de frío', c: '#3B6EA8' },
  comite: { n: 'Comité SST Mar de Piura', sub: '8 integrantes', c: '#F2A900' },
};

export const WSP = [
  { chat: 'yesenia', t: '07:05', de: 'Yesenia', txt: 'Inge, la pizarra de la entrada ya no dice días. Dice «Medidas cerradas este mes: 9». La pinté yo 🎨' },
  { chat: 'carlos', t: '09:40', de: 'Carlos', txt: 'El drenaje de eviscerado ya tiene rejilla nueva. Teresa vino a inspeccionar con su libretita, ja. Cumplido.' },
  { chat: 'flor', t: '13:10', de: 'Flor', txt: 'Inge, las chicas preguntan si usted se queda. Les dije que sí. No me haga quedar mal 😅' },
  { chat: 'comite', t: '16:00', de: 'Teresa', txt: 'Inspección de viernes en eviscerado: drenaje destapado 4 veces, alfombras en su sitio, 0 resbalones. ✅' },
  { chat: 'wilson', t: '18:25', de: 'Wilson', txt: 'Inge, disculpe la hora. Hay olor a amoníaco en la sala de compresores. Poco, pero hay. Estoy revisando la válvula del compresor 2. ¿Le aviso si crece?' },
];

export const CORREOS = [
  { t: '07:00', de: 'Inspectora Patricia Vargas · SUNAFIL', para: 'Productos Mar de Piura S.A.C.', asunto: 'Requerimiento de comparecencia', html: '<p>Se cita al representante del sujeto inspeccionado a comparecer el lunes a las 09:00 horas en la sede de la Intendencia, en la ciudad de Piura, portando: registro de monitoreo de agentes físicos y químicos o el plan para su realización; programa anual de SST; libro de actas del comité; registro de accidentes de los últimos doce meses.</p><p>La inasistencia constituye infracción a la labor inspectiva.</p>' },
];

export const QUIZ = [
  { q: 'Si la empresa no asiste a la comparecencia, ¿qué ocurre?', ops: ['Nada', 'Es infracción muy grave a la labor inspectiva', 'Se cierra la inspección', 'Se reprograma automáticamente'], ok: 1, por: 'D.S. 019-2006-TR, art. 46.10.' },
  { q: 'Para responder un requerimiento, lo más útil es…', ops: ['Prometer el plazo más corto posible', 'Comprometer fechas realistas, con responsable y evidencia verificable', 'Pedir más tiempo sin plan', 'No responder'], ok: 1, por: 'No cumplir oportunamente un requerimiento es infracción muy grave (art. 46.7): un plazo inflado se vuelve en contra.' },
  { q: '¿Qué órgano aprueba el programa anual de SST?', ops: ['El cliente', 'El comité de SST', 'SUNAFIL', 'Logística'], ok: 1, por: 'Art. 42 c) del D.S. 005-2012-TR.' },
  { q: 'Un buen balance de dos semanas en SST distingue…', ops: ['Solo lo bueno', 'Lo que ya funciona en el piso de lo que solo existe en papel', 'Los culpables', 'Las fotos'], ok: 1, por: 'Un sistema de gestión se mide por lo que cambia en la planta.' },
  { q: 'Te avisan de olor a amoníaco en la sala de compresores un viernes en la tarde. Lo primero es…', ops: ['Esperar al lunes', 'Confirmar con el técnico, evaluar si hay que evacuar o aislar, y decidir si es un incidente peligroso que notificar en 24 horas', 'Mandar un correo', 'Abrir las ventanas y olvidarlo'], ok: 1, por: 'Lo aprendido con la fuga de la semana 1: se actúa, se registra y, si corresponde, se notifica en 24 horas (art. 110 del D.S. 005-2012-TR).' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '07:40', ch: 'presencial', who: 'julio-sst', titulo: 'La conversación', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Operaciones', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Julio tiene dos cafés sobre el escritorio y el casco blanco a un lado. Por la ventana se ve la nueva pizarra de la entrada. ${F.has('julio_respalda') ? 'Desde lo del contenedor de Busan, te trata distinto.' : 'Han tenido semanas difíciles.'}</p><p>«Siéntate, ${n}. Dos semanas. Pregúntame lo que quieras, que yo también tengo preguntas.» <mark class="clave">Le haces dos</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Julio.',
    opts: [
      { id: 'cambio', label: '¿Qué cambió para usted en estas dos semanas?', info: '«Que me enteré de cosas que pasaban en mi planta y yo no sabía. La cámara, las botas, la cinta. Treinta años en esto y pensaba que sabía todo.» Se toma el café. «Eso no me gustó. Pero es mejor saberlo.»' },
      { id: 'turnos', label: '¿Qué va a hacer con los turnos extra?', info: '«Ya firmé la regla: nadie entra a un turno extra sin descanso mínimo entre jornadas. Carlos protestó. Le dije que lo de Teresa pudo ser con un cuchillo en la cara.»' },
      { id: 'lima', label: '¿Qué dijeron en Lima de la inspección?', info: '«Que por qué no lo vimos antes. Les dije que el anterior de seguridad se fue y que yo no puse a nadie seis meses. Esa es mía.» Pausa. «Quieren contratar una consultora para que nos haga «todo el sistema» en un mes.»' },
      { id: 'quedo', label: '¿Quiere que me quede?', info: '«Sí. Pero no te voy a mentir: vas a seguir peleándote con Carlos, conmigo y con Lima. Esto no es una oficina. ¿Tú quieres quedarte?»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 4, personas: 3 }, rel: { 'julio-sst': 1 }, flags: picks.includes('quedo') ? ['te_quedas'] : [],
      cartera: { programa: picks.includes('lima') ? 'Lima propone una consultora «para todo el sistema en un mes»' : 'Por aprobar en el comité' },
      out: picks.includes('quedo') ? 'Le dices que sí, con dos condiciones: que el comité siga sesionando en jornada y que ningún sensor vuelva a tener cinta. Julio extiende la mano: «Trato».' : 'Julio se pone el casco. «Bueno. El lunes a las 7:30 te recojo para ir a Piura. No llegues tarde, que la inspectora sí va a llegar puntual.»',
      kusi: ['feliz', '¡Julio aprendió algo… y tú también!'],
    }),
    mirada: {
      ve: 'La relación con el jefe directo define cuánto puede hacer un/a supervisor/a de SST. En dos semanas pasaste de ser «la de las carpetas» a alguien a quien Julio le cuenta lo que no le gustó saber.',
      visual: { tipo: 'cambio', titulo: 'Julio en dos semanas', pares: [['«Yo no soy de papeles»', '«Es mejor saberlo»'], ['Presidente del comité que no convocaba', 'Presidente que firma reglas'], ['212 días sin accidentes', 'Medidas cerradas este mes']] },
    },
  },
  {
    id: 'j2', t: '09:10', ch: 'documento', who: null, titulo: 'Lo que hay y lo que no', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de SST', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Sacas la hoja de tu línea de base del primer lunes. Al lado, escribes con Yesenia el balance de estas dos semanas.</p><p><mark class="clave">Marca lo que todavía incumple o solo existe en el papel</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que sigue incumpliendo o necesita corregirse.',
    doc: { t: 'Balance de dos semanas · línea de base actualizada', sub: 'SST · Productos Mar de Piura' },
    lines: [
      { id: 'candados', t: 'Bloqueo: candados personales en la cortadora y práctica aprobada por la línea de anillas.' },
      { id: 'camara', t: 'Cámara 3: apertura interior y pulsador de alarma probados. IPERC de cámaras rehecha.' },
      { id: 'monitoreo', t: 'Monitoreo de frío y amoníaco: no existe.', bad: LEY, why: 'Es un registro obligatorio (art. 33 c) y ahora también un requerimiento de la inspección.' },
      { id: 'programa', t: 'Programa anual de SST: borrador, sin aprobación del comité.', bad: LEY, why: 'El comité aprueba el programa anual (art. 42 c) y es documentación que se exhibe (art. 32).' },
      { id: 'noche', t: 'Turno de noche: sin capacitación en bloqueo ni en cámaras.', bad: BP, why: 'La mitad de la planta trabaja de noche. Lo que no llega a la noche no existe para ellos.' },
      { id: 'conservas', t: 'Autoclaves de conservas (donde se quemó Rosa): IPERC de hace dos años.', bad: LEY, why: 'La evaluación se hace en cada puesto y se revisa cuando hay daños (art. 77). Rosa tuvo un accidente ahí.' },
      { id: 'comite', t: 'Comité: dos sesiones en dos semanas, acuerdos con dueño y una inspectora de eviscerado.' },
      { id: 'politica', t: 'Política de SST firmada hace tres años, enmarcada en la entrada.', duda: 'No es ilegal, pero ¿alguien la ha leído? Revisarla con el comité puede darle vida.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Tu balance se ve mejor de lo que es. El lunes, la inspectora preguntará por algo que no anotaste.' : `Marcaste ${hitsLey} pendientes legales. Tu balance tiene dos columnas del mismo tamaño: lo que ya funciona y lo que falta. Así de honesto es empezar.`,
      flags: missLey ? [] : ['balance_honesto'],
      cartera: { monitoreo: 'Primera prioridad de la semana 3', noche: 'Pendiente: capacitación en bloqueo y cámaras' },
      pro: { ok: 'Un balance honesto es tu mejor herramienta para la semana 3 y para la comparecencia.', info: 'Las autoclaves de conservas serán probablemente tu próximo frente: ahí se quemó Rosa y nadie ha vuelto a mirar.' },
      kusi: missLey ? ['pensando', 'Falta más de lo que parece…'] : ['animo', 'Mitad hecho, mitad por hacer. ¡Así empieza!'],
    }),
    rules: [[LEY, 'D.S. 005-2012-TR, arts. 32, 33 y 42: documentación, registros y aprobación del programa anual por el comité.']],
    mirada: {
      ve: 'Al final de un periodo es tentador contar solo lo logrado. Un/a buen/a prevencionista escribe también lo que falta, con la misma letra y el mismo tamaño.',
      visual: { tipo: 'balanza', a: { t: 'Ya funciona', items: ['Candados', 'Cámara 3', 'Comité', 'Registro', 'Botas y drenaje'] }, b: { t: 'Falta', items: ['Monitoreo', 'Programa anual', 'Turno de noche', 'Autoclaves'] } },
    },
  },
  {
    id: 'j3', t: '10:30', ch: 'presencial', who: 'julio-sst', titulo: 'El plazo', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Operaciones', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El laboratorio de Piura que hace monitoreos de agentes físicos y químicos responde: pueden venir dentro de tres semanas y entregar el informe una semana después. Julio lee el correo y frunce el ceño.</p><p>«En la comparecencia digamos que el monitoreo está en una semana. <mark class="clave">Se ve mejor. Después pedimos ampliación</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Llevar el plazo real del laboratorio, con la orden de servicio firmada hoy y, mientras tanto, mediciones internas de temperatura y tiempos de permanencia registradas cada día.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: 2 }, rel: { 'julio-sst': 0 }, flags: ['plazos_reales'], cartera: { monitoreo: 'Laboratorio contratado: 3 semanas + 1 de informe · medición interna diaria desde el lunes' },
          out: 'Julio refunfuña, pero firma la orden de servicio. «Si la inspectora se molesta, tú le explicas.» Te parece justo.',
          pro: { ok: 'Un plazo real con evidencia de que ya empezaste vale más que una promesa que no se puede cumplir.', risk: 'La inspectora puede considerar el plazo largo. Tendrás que explicarlo.', info: 'No cumplir oportunamente un requerimiento es infracción muy grave (art. 46.7 del D.S. 019-2006-TR).' },
          kusi: ['animo', 'Prometer lo que se puede cumplir.'] } },
      { id: 'b', label: 'Aceptar decir «una semana» y pedir ampliación después.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4 }, rel: { 'julio-sst': 1 }, flags: ['plazos_inflados'], cartera: { monitoreo: 'Compromiso: una semana (el laboratorio necesita cuatro)' },
          out: 'Julio sonríe aliviado. Tú miras el correo del laboratorio: tres semanas, más una. El lunes vas a decir algo que sabes que no es verdad.',
          pro: { ok: 'Quedan bien el lunes.', risk: 'Un requerimiento incumplido se convierte en una infracción nueva, más grave que la original.' },
          kusi: ['preocupado', 'Una semana que en realidad son cuatro…'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 20.3: las medidas de requerimiento son órdenes con plazo; art. 46.7: no cumplirlas es infracción muy grave.']],
    mirada: {
      ve: 'Ante una autoridad, la tentación es prometer rápido. Pero un plazo que no se cumple convierte un problema en dos. La credibilidad que ganaste el jueves se cuida el lunes.',
      visual: { tipo: 'linea', titulo: 'El monitoreo, con plazos reales', hitos: [['Hoy', 'Orden de servicio firmada'], ['Desde el lunes', 'Medición interna diaria'], ['Semana 5', 'Visita del laboratorio'], ['Semana 6', 'Informe y registro']] },
    },
  },
  {
    id: 'j4', t: '12:30', ch: 'llamada', who: null, titulo: 'Tres voces', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de SST', show: ['personas', 'confianza'],
    body: () => `<p>Antes de cerrar la semana quieres escuchar a quienes vivieron estas dos semanas desde el piso. El celular de la batería hinchada sigue enchufado. Ya le tienes cariño.</p><p><mark class="clave">Haces tres llamadas</mark>.</p>`,
    type: 'calls',
    calls: [['Flor Chunga · representante en el comité', 'Contesta desde el comedor', '«Lo que cambió, inge, es que ahora las chicas hablan en el comité. Teresa, que no decía nada, hace inspecciones. Lo que falta: el turno de noche. Allá nadie sabe que existimos.»'], ['Hugo Ayala · almacén', 'Contesta entre cajas', '«Kevin vino a enseñarme cómo bloquea. Como si yo no supiera.» Se ríe. «Me pidió que vaya a la noche a contar lo mío. Voy a ir. Pero que me paguen el taxi.»'], ['Kevin Chiroque · línea de anillas', 'Contesta nervioso', '«Inge, ¿me van a botar por lo que le dije a la señora de SUNAFIL?» Silencio. «Yo solo dije la verdad.»']],
    prompt: '¿Qué haces con lo que escuchaste?',
    choices: [
      { id: 'a', label: 'Tranquilizar a Kevin, decirle que hizo lo correcto y que nadie puede tomar represalias por colaborar con la inspección; y llevar al comité la propuesta de Flor y Hugo para el turno de noche.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, confianza: 3 }, rel: { delegada: 1 }, cartera: { noche: 'Propuesta: sesiones nocturnas con Hugo y un miembro del comité' },
          out: 'Kevin respira hondo al otro lado del teléfono: «Gracias, inge. Mi mamá me dijo que diga la verdad siempre». Flor responde en el grupo: «Turno de noche, primer tema del próximo comité».',
          pro: { ok: 'Proteger a quien habló con la inspección es parte de proteger el sistema.', info: 'Obstaculizar la participación de los trabajadores en la inspección es infracción muy grave (art. 46.5 del D.S. 019-2006-TR).' },
          kusi: ['celebra', '¡Kevin dijo la verdad y está protegido!'] } },
      { id: 'b', label: 'Decirle a Kevin que no se preocupe y dejar lo del turno de noche para cuando pase la comparecencia.',
        res: { q: 'aceptable', fx: { personas: 2 }, cartera: { noche: 'Pendiente hasta después de la comparecencia' },
          out: 'Kevin cuelga más tranquilo, pero no del todo. El turno de noche seguirá una semana más sin saber que el comité existe.',
          pro: { ok: 'Tranquilizas a Kevin.', risk: 'Lo urgente, otra vez, desplaza a lo importante.' },
          kusi: ['pensando', '¿Y la noche?'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 46.5: obstaculizar la participación de los trabajadores en la inspección es infracción muy grave.']],
    mirada: {
      ve: 'Las personas que hablaron, las que se cayeron y las que se animaron a contar su accidente son el verdadero balance de estas dos semanas. Cuidarlas es la condición para que sigan hablando.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Kevin', txt: 'Yo solo dije la verdad.' },
    },
  },
  {
    id: 'j5', t: '15:00', ch: 'documento', who: null, titulo: 'La semana 3', banner: 'assets/esc/meta.webp', lugar: 'Oficina de SST', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>La pizarra blanca de tu oficina tiene escrito «SEMANA 3» con plumón rojo. Yesenia te pasa los post-its amarillos.</p><p>Hay más pendientes que días. <mark class="clave">Elige tus tres prioridades</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres prioridades de la semana 3.', boton: 'Pegar en la pizarra', resumen: 'Priorizaste',
    cols: ['Pendiente', 'Por qué'],
    rows: [
      { id: 'comparecencia', cells: ['Comparecencia del lunes con la carpeta completa', 'No asistir es infracción muy grave'] },
      { id: 'monitoreo', cells: ['Arranque del monitoreo interno de frío y orden al laboratorio', 'Requerimiento con plazo'] },
      { id: 'noche', cells: ['Capacitación de bloqueo y cámaras en el turno de noche', 'La mitad de la planta sin formación'] },
      { id: 'autoclaves', cells: ['IPERC de autoclaves de conservas', 'Ahí se quemó Rosa'] },
      { id: 'consultora', cells: ['Reunión con la consultora que propone Lima', 'Puede ayudar… o hacer otra carpeta bonita'] },
      { id: 'mural', cells: ['Periódico mural con fotos del comité', 'Visibilidad'] },
    ],
    score: { comparecencia: 3, monitoreo: 3, noche: 2, autoclaves: 2, consultora: 1, mural: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 2 : 0, cumplimiento: q === 'buena' ? 3 : 0 },
        cartera: { comparecencia: picks.includes('comparecencia') ? 'Lunes 09:00 · carpeta lista' : 'Lunes 09:00 · ¿carpeta?' },
        out: q === 'buena' ? 'Tres post-its amarillos en la pizarra. Debajo, más pequeños, los que esperan: autoclaves, consultora, mural. Yesenia les toma una foto «para el lunes».' : 'Tu pizarra tiene prioridades, pero la comparecencia o el monitoreo quedaron abajo.',
        pro: { ok: 'Lo que tiene plazo legal y lo que protege a más personas va primero.', info: 'La consultora de Lima puede ser una aliada si trabaja con el comité y no en su lugar.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Semana 3 con rumbo!' : '¿Y la comparecencia?'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, art. 12 b): la comparecencia exige presentarse con la documentación requerida.']],
    mirada: {
      ve: 'El trabajo de SST nunca se termina: cuando cierras un frente, se abren dos. Priorizar bien es lo que permite avanzar sin quemarte.',
      visual: { tipo: 'matriz', x: 'Urgencia', y: 'Impacto', cuadrantes: ['Ahora', 'Planifica', 'Delega', 'Después'], items: [['Comparecencia', .95, .9], ['Monitoreo', .85, .85], ['Turno de noche', .6, .9], ['Autoclaves', .5, .8], ['Consultora', .4, .4], ['Mural', .2, .1]] },
    },
  },
  {
    id: 'j6', t: '17:10', ch: 'presencial', who: 'produccion', titulo: 'Carlos', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Patio de carga', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Carlos te alcanza en el patio de carga, junto a la balanza de camiones. ${F.has('carlos_coautor') ? 'Desde que firmaron juntos el informe de Teresa, conversan más.' : F.has('carlos_resentido') ? 'Desde lo de la semana pasada, apenas se hablan.' : 'Han tenido dos semanas duras.'}</p><p>«Oye. El lunes llega un pedido grande de Valencia y vamos a abrir la línea 2, la vieja, la del galpón. <mark class="clave">Quería que lo sepas antes de que esté funcionando</mark>.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Agradecerle que te avise antes y proponerle revisar juntos la línea 2 el lunes en la tarde, después de la comparecencia, con Segundo y alguien del comité.',
        res: { q: null, fx: { personas: 4, confianza: 4, cumplimiento: 2 }, rel: { produccion: 1 },
          out: 'Carlos asiente. «Lunes en la tarde. La línea 2 tiene su propia cortadora, ¿sabías? Sin sensor, del año del caldo.» Se va. Es la primera vez que Carlos te avisa de un cambio antes de hacerlo. La medida del informe de Teresa ya está funcionando.', kusi: ['celebra', '¡Carlos avisó antes del cambio!'] } },
      { id: 'b', label: 'Decirle que la línea 2 no puede arrancar hasta tener su IPERC aprobada por el comité.',
        res: { q: null, fx: { cumplimiento: 2, personas: -1 }, rel: { produccion: 0 },
          out: 'Carlos te mira. «Te lo estoy contando antes justamente para eso.» Se va un poco decepcionado. Tenías razón en el fondo, pero no era la forma de recibir su gesto.', kusi: ['pensando', 'Te avisó antes… y le respondiste con un «no».'] } },
    ],
    mirada: {
      ve: 'Que un jefe de producción te avise de un cambio antes de hacerlo es la señal de que la seguridad empezó a entrar en la forma de decidir. Es justo lo que pedía la causa de fondo de la caída de Teresa.',
      visual: { tipo: 'cambio', titulo: 'Carlos en dos semanas', pares: [['«Total, es voluntario»', '«Quería que lo sepas antes»'], ['Cinta en el sensor', 'Rejilla nueva en el drenaje'], ['Informe de «descuido»', 'Informe firmado con el comité']] },
    },
  },
  {
    id: 'j7', t: '18:10', ch: 'whatsapp', who: null, titulo: 'Para el comité', banner: 'assets/esc/logro.webp', lugar: 'Paradero frente a la planta', show: ['confianza', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>El sol se hunde detrás de las grúas del puerto de Paita y el viento levanta arena en la avenida. En la entrada, la pizarra que pintó Yesenia dice «Medidas cerradas este mes: 9». Rosa pasa a tu lado y la señala con la barbilla, sonriendo.</p><p>Antes de subir a la combi, <mark class="clave">le escribes al comité</mark>.</p>`,
    type: 'compose', enviaA: 'comite', para: 'Para: Comité SST Mar de Piura', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Qué agradeces', ops: [
        { id: 'g1', t: 'Gracias por estas dos semanas: el comité investigó, inspeccionó y le habló claro a SUNAFIL.', ok: true, por: 'Reconoces lo que hicieron, no lo que hiciste tú.' },
        { id: 'g2', t: 'Gracias por apoyarme en mi trabajo.', ok: null, por: 'Amable, pero el trabajo es de todos.' },
      ] },
      { id: 'lunes', t: 'Qué viene', ops: [
        { id: 'l1', t: 'El lunes: comparecencia en Piura a las 9:00 y, en la tarde, revisión de la línea 2 que reabre Carlos.', ok: true, por: 'El comité sabe lo que viene.' },
        { id: 'l2', t: 'El lunes vemos.', ok: false, por: 'Sin información, el comité no puede prepararse.' },
      ] },
      { id: 'pide', t: 'Qué pides', ops: [
        { id: 'p1', t: 'Propongo que la próxima sesión apruebe el programa anual y el plan para el turno de noche.', ok: true, por: 'Lo que solo el comité puede aprobar.' },
        { id: 'p2', t: 'Descansen, se lo merecen.', ok: null, por: 'Cierto, pero el lunes llega igual.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'l1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 2, personas: q === 'buena' ? 4 : 1, cumplimiento: q === 'buena' ? 2 : 0 }, rel: { delegada: q === 'buena' ? 1 : 0 },
        flags: ['compresor_alerta'],
        cartera: { compresores: 'Wilson reporta olor a amoníaco en la sala de compresores · viernes 18:25' },
        out: q === 'buena' ? 'Flor responde con un audio en el que se escucha a todo el comedor aplaudir. Teresa manda una foto de sus botas nuevas. Segundo escribe: «Lunes en la tarde, línea 2. Ahí estaré». Estás subiendo a la combi cuando vibra el celular otra vez. Es Wilson: olor a amoníaco en la sala de compresores. Poco. Pero hay.' : 'El grupo responde con pulgares y corazones. Estás subiendo a la combi cuando vibra el celular otra vez. Es Wilson: olor a amoníaco en la sala de compresores. Poco. Pero hay.',
        pro: { ok: 'Cerrar las dos semanas reconociendo al comité y anunciando lo que viene mantiene vivo lo que se construyó.', info: 'Una fuga pequeña de amoníaco puede ser un incidente peligroso: hay que confirmarlo y, si lo es, notificarlo en 24 horas. Lo aprendiste en la semana 1.' },
        kusi: ['sorpresa', '¿Otra vez amoníaco? Esto continúa…'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42 c) y f): el comité aprueba el programa anual y el plan de capacitación.']],
    mirada: {
      ve: 'Dos semanas bastan para ver si te ves en este puesto: si puedes decir «alto» a un gerente y almorzar con él al día siguiente, escuchar a quien se cayó sin culparlo y decirle la verdad a una inspectora. Y bastan para entender que el trabajo nunca termina: siempre hay otro olor en otra sala.',
      visual: { tipo: 'linea', titulo: 'Dos semanas en Mar de Piura', hitos: [['Lunes 1', 'Cero candados, 212 días falsos'], ['Miércoles 1', 'El comité despierta'], ['Viernes 1', 'La cinta y el contenedor'], ['Lunes 2', 'Teresa resbala'], ['Jueves 2', 'SUNAFIL'], ['Viernes 2', 'Amoníaco otra vez…']] },
    },
  },
];
