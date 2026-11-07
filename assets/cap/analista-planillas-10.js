// Analista de Planillas · Capítulo 10 · «Día de pago» · Semana 2, viernes. Final abierto: continúa en la Semana 3.
// Hilo de las dos semanas: Andes Logística cambió de sistema de planillas y hoy paga por primera vez con Nómina360.
// Normas citadas:
// - D.S. 001-98-TR, art. 19: la boleta de pago se entrega a más tardar el tercer día hábil siguiente a la fecha de pago.
//   https://lpderecho.pe/descargue-pdf-guia-boletas-pago/
//   https://www.bbva.com/es/pe/salud-financiera/boleta-de-pago-en-peru-estructura-y-datos-que-se-debe-tener-en-cuenta/
// - D.S. 007-2002-TR, art. 10: sobretasa de horas extras de 25 % las dos primeras horas y 35 % las siguientes.
// - Ley 28806, art. 5 (facultades del inspector), ya citada en el capítulo 6.
//   https://lpderecho.pe/facultades-inspector-laboral-sunafil/

export const CAP = {
  n: 10, titulo: 'Día de pago', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-brazos.webp',
  lugar: 'Andes Logística · Centro de distribución, Callao',
  inicio: '06:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Viernes, seis de la mañana. A esta hora, 1,097 celulares vibran en Ventanilla, Bellavista, el Callao, San Martín de Porres y Comas. Es el primer pago de Nómina360. Tú estás en la oficina con un café y el grupo de WhatsApp abierto, esperando el primer reclamo.', boton: 'Mirar el celular',
  kusi: 'Hoy se ve todo lo que hiciste en dos semanas. Lo bueno y lo que falta. ¡Mira con calma!',
  lead: 'Atendiste los primeros reclamos, encontraste un error real en una boleta, le respondiste a Renzo por escrito, armaste lo que llevarás a SUNAFIL y miraste hacia atrás tus dos semanas.',
  reflexion: 'Después de dos semanas, ¿qué parte de este trabajo te dio más energía y cuál te la quitó?',
  siguiente: { n: 11, titulo: 'La comparecencia', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'pago', p: 'Pago de noviembre con Nómina360', j: 'Tú · Tesorería', d: 0, e: '1,097 abonos a las 6 a. m.' },
  { id: 'reclamos', p: 'Mesa de reclamos de boletas', j: 'Tú · Mili', d: 0, e: 'Abierta hoy y el lunes' },
  { id: 'sunafil', p: 'Comparecencia ante SUNAFIL', j: 'Inspector Cuba', d: 0, e: 'Lunes 9:00' },
  { id: 'bono', p: 'Reintegro del bono', j: 'Rosa · Tesorería', d: 0, e: 'Gratificaciones con diciembre' },
  { id: 'boletas', p: 'Boletas de noviembre', j: 'Mili', d: 0, e: 'Envío hoy' },
];

export const FUTURO = {
  mesa_reclamos: ['Abriste una mesa de reclamos con registro y plazo de respuesta.', 'El lunes sabrás cuántos reclamos fueron errores reales.'],
  error_he: ['Encontraste horas extras nocturnas pagadas todas al 25 %.', 'Hay que revisar la fórmula para todo el turno noche en diciembre.'],
  renzo_atendido: ['Le respondiste a Renzo por escrito, claro y con fecha.', 'Renzo confía en que le pagarán la diferencia.'],
  comparecencia_lista: ['Tienes la carpeta para la comparecencia: constancias, cálculo y acta.', 'El lunes empieza la Semana 3.'],
  comparecencia_floja: ['Tu carpeta para la comparecencia tiene huecos.', 'El fin de semana será largo.'],
  te_ves: ['Dijiste qué parte del puesto te mueve.', 'La Semana 3 pondrá a prueba esa respuesta.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  rosa: { n: 'Rosa Chumpitaz', sub: 'Jefa de Tesorería', who: 'tesoreria' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  renzo: { n: 'Renzo Farfán', sub: 'Montacarguista · turno noche', c: '#2B6CB0' },
  oriana: { n: 'Oriana Mendoza', sub: 'Operaria de picking', c: '#B83280' },
  teodoro: { n: 'Teodoro Quispe', sub: 'Secretario general del sindicato', c: '#975A16' },
  legal: { n: 'Legal · Andes Logística', sub: 'Abogada Carmen Ñahui', c: '#4A5568' },
};

export const WSP = [
  { chat: 'rosa', t: '06:04', de: 'Rosa', txt: 'Abonos procesados. 1,097 de 1,097. Buen día.' },
  { chat: 'equipo', t: '06:12', de: 'Mili', txt: 'Me llegó mi sueldo!!! 😭 Primera planilla de Nómina360 y yo ahí 🙌' },
  { chat: 'oriana', t: '09:20', de: 'Oriana', txt: 'Ya cobré en la agencia, señorita. Ya pagué el cuarto. Gracias de corazón 🙏', si: 'oriana_resuelta' },
  { chat: 'oriana', t: '09:20', de: 'Oriana', txt: 'Señorita, mi pareja dice que el depósito todavía no le llega… 😟', si: 'oriana_tercero' },
  { chat: 'renzo', t: '08:40', de: 'Renzo', txt: 'Buenos días. Soy Renzo Farfán, turno noche. Soy sordo, por eso escribo. Mi boleta tiene horas extras que creo que están mal. ¿Me puede ayudar?' },
  { chat: 'teodoro', t: '12:30', de: 'Teodoro', txt: 'Señorita, hoy en el comedor varios dijeron que es la primera vez que el sueldo del turno noche sale completo. Eso también se lo cuento.' },
  { chat: 'diego', t: '15:10', de: 'Diego', txt: 'Gracias por estas dos semanas. Me tuviste cortito, pero tenías razón en casi todo 😅 El lunes llega la primera PLAME desde Nómina360. Ya casi 😬' },
  { chat: 'legal', t: '18:20', de: 'Carmen', txt: 'Acaba de llegar un correo del inspector. Léelo antes de irte.' },
];

export const CORREOS = [
  { t: '18:15', de: 'Inspector Raúl Cuba · SUNAFIL', para: 'Andes Logística S.A.', asunto: 'Ampliación del requerimiento', html: '<p>En el marco de la orden de inspección en curso, para la comparecencia del lunes se requiere además: registro de control de asistencia del turno noche de los últimos seis meses y sustento del pago de horas extras de ese período.</p>' },
];

export const QUIZ = [
  { q: '¿Hasta cuándo debe entregarse la boleta de pago?', ops: ['Cuando el trabajador la pida', 'A más tardar el tercer día hábil siguiente a la fecha de pago', 'A fin de año', 'Junto con la CTS'], ok: 1, por: 'Lo establece el art. 19 del D.S. 001-98-TR.' },
  { q: 'Un operario hizo tres horas extras en un día. ¿Cómo se pagan?', ops: ['Las tres al 25 %', 'Las dos primeras al 25 % y la tercera al 35 %', 'Las tres al 35 %', 'Las tres sin sobretasa'], ok: 1, por: 'D.S. 007-2002-TR, art. 10: 25 % las dos primeras horas, 35 % las siguientes.' },
  { q: 'Un trabajador sordo te escribe por WhatsApp un reclamo. Lo mejor es…', ops: ['Pedirle que venga con alguien que hable por él', 'Responderle por escrito, claro y con fecha, por el mismo canal', 'Llamarlo', 'Mandarlo a la mesa de reclamos sin respuesta'], ok: 1, por: 'Adaptar el canal a la persona es parte de atender bien, y de no discriminar.' },
  { q: 'El día de pago, ¿qué hace una mesa de reclamos bien organizada?', ops: ['Escucha y promete', 'Registra cada reclamo, lo revisa contra la boleta y responde en un plazo conocido', 'Devuelve a todos a su jefe', 'Corrige sin registrar'], ok: 1, por: 'El registro dice cuántos reclamos fueron errores reales y cuáles dudas.' },
  { q: 'Para la comparecencia ante SUNAFIL conviene llevar…', ops: ['Solo el comunicado', 'Constancias de lo pagado, el cálculo persona por persona y el sustento de lo que falta pagar', 'Una carta de disculpas', 'Nada: que pregunte'], ok: 1, por: 'Lo que pesa ante un inspector son los pagos hechos y su sustento.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'z1', t: '07:10', ch: 'llamada', who: null, titulo: 'Los primeros reclamos', banner: 'assets/foto2/callcenter.webp', lugar: 'Tu escritorio', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>A las siete, el anexo de Compensaciones ya suena. Contestas las primeras tres llamadas antes de que Mili llegue con las boletas impresas para quien no tiene correo.</p>`,
    type: 'calls',
    calls: [['Operario del turno día', 'Neto más bajo que en octubre', 'Señorita, me pagaron 80 soles menos. ¿Qué pasó? Yo no falté.'], ['Empleada de Compras', 'Quiere su boleta en papel', 'No me llegó el correo, ¿me la pueden imprimir? Para el banco.'], ['Yesenia Vargas', 'Turno noche', 'Mi gente está feliz con el básico. Pero dos dicen que las horas extras del 14 salieron raras.']],
    prompt: '¿Cómo organizas los reclamos del día?',
    choices: [
      { id: 'a', label: 'Abrir una mesa de reclamos: registrar cada caso en una hoja compartida, revisarlo contra la boleta y responder en 48 horas.',
        res: { q: 'buena', fx: { calidad: 4, personas: 3, tiempo: 1 }, flags: ['mesa_reclamos'], cartera: { reclamos: 'Mesa abierta: registro y respuesta en 48 h' },
          out: 'El operario del turno día tenía un descuento por un adelanto de octubre: no era un error, y se lo explicas con su boleta en la mano. Lo de las horas extras del 14 lo anotas en rojo.',
          pro: { ok: 'Separas dudas de errores, y nada se pierde.', info: 'Es lo que dice tu acta de salida en vivo: cúmplelo.' },
          kusi: ['animo', 'Reclamo registrado, reclamo atendido.'] } },
      { id: 'b', label: 'Atender cada llamada como llegue y corregir en el momento lo que se pueda.',
        res: { q: 'aceptable', fx: { personas: 1, calidad: -2, tiempo: -2 },
          out: 'Resuelves las tres llamadas, pero a las diez ya no recuerdas quién dijo qué. Lo de las horas extras se mezcla con lo demás.',
          pro: { ok: 'Respondes rápido.', risk: 'Sin registro no sabrás si un error es de una persona o de toda una fórmula.' },
          kusi: ['pensando', '¿Quién dijo qué?'] } },
    ],
    mirada: { ve: 'El día del primer pago con un sistema nuevo, los reclamos son información valiosa. Registrarlos separa las dudas normales de los errores que revelan una fórmula mal configurada.' },
  },
  {
    id: 'z2', t: '08:50', ch: 'documento', who: null, titulo: 'La boleta de Renzo', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>Renzo Farfán es montacarguista del turno noche desde hace seis años. Es sordo; en el almacén se comunica con señas con su equipo y con mensajes escritos con los demás. Te manda una foto de su boleta. <mark class="clave">Algo de aquí está mal.</mark></p>`,
    type: 'flag', prompt: 'Marca las líneas de la boleta que están mal.',
    doc: { t: 'Boleta de pago · noviembre', sub: 'Renzo Farfán · montacarguista · turno noche · Nómina360' },
    lines: [
      { id: 'bas', t: 'Sueldo básico nocturno: S/ 1,660.50.' },
      { id: 'af', t: 'Asignación familiar: S/ 123.00.' },
      { id: 'he', t: 'Horas extras del día 14: 3 horas, todas con sobretasa de 25 %.', bad: LEY, why: 'Las dos primeras horas van con 25 %, pero la tercera debe ir con 35 % (D.S. 007-2002-TR, art. 10).' },
      { id: 'bono', t: 'Bono de productividad: S/ 175.00.' },
      { id: 'afp', t: 'Aporte a AFP: descontado según su afiliación.' },
      { id: 'x17', t: 'Bono de permanencia 2018: S/ 40.00.' },
    ],
    res: ({ missLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      out: missLey ? 'Le respondes que su boleta está bien. Renzo tenía razón, y lo sabe.' : 'Lo confirmas con Diego: Nómina360 aplica el 25 % a todas las horas extras del día cuando vienen de un solo formato. No es solo Renzo: puede ser todo el turno noche.',
      flags: missLey ? [] : ['error_he'], cartera: { reclamos: missLey ? 'Reclamo de Renzo cerrado sin hallazgo' : 'Horas extras sobre la segunda hora mal configuradas' },
      pro: { ok: 'Un reclamo individual te lleva a una fórmula que afecta a muchos.', risk: 'Cerrar un reclamo sin revisarlo es repetir lo que pasó con el bono.', info: 'Revisa cuántas personas tuvieron más de dos horas extras en un mismo día.' },
      kusi: missLey ? ['preocupado', 'Mira la tercera hora…'] : ['sorpresa', 'Otra fórmula escondida.'],
    }),
    rules: [[LEY, 'Horas extras: 25 % las dos primeras horas y 35 % las siguientes (D.S. 007-2002-TR, art. 10).']],
    mirada: {
      ve: 'Las fórmulas mal configuradas se descubren por los reclamos de quienes conocen bien su trabajo. Renzo sabía cuántas horas hizo y cuánto le correspondía. Escucharlo vale tanto como cualquier prueba en paralelo.',
      visual: { tipo: 'cambio', titulo: 'Las horas del día 14', pares: [['1.ª hora: 25 %', '1.ª hora: 25 %'], ['2.ª hora: 25 %', '2.ª hora: 25 %'], ['3.ª hora: 25 %', '3.ª hora: 35 %']] },
    },
  },
  {
    id: 'z3', t: '10:30', ch: 'whatsapp', who: null, titulo: 'Responderle a Renzo', banner: 'assets/foto/oficina-abierta.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('error_he') ? 'Renzo tenía razón.' : 'Revisas otra vez y ves lo de la tercera hora.'} Le respondes por WhatsApp. Escribe un español claro y directo; las frases largas y técnicas le cuestan, como a cualquiera. <mark class="clave">Que se entienda a la primera.</mark></p>`,
    type: 'compose', enviaA: 'renzo', para: 'Para: Renzo Farfán · Montacarguista', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'raz', t: 'Lo que pasó', ops: [
        { id: 'r1', t: 'Renzo, tienes razón. El día 14 hiciste 3 horas extras. La tercera debía pagarse con 35 % y se pagó con 25 %.', ok: true, por: 'Le das la razón, con el dato.' },
        { id: 'r2', t: 'Renzo, por un tema de parametrización de sobretasas en el sistema se generó una diferencia.', ok: false, por: 'Técnico y difícil de leer.' },
      ] },
      { id: 'cuando', t: 'Qué pasará', ops: [
        { id: 'c1', t: 'La diferencia se te paga en la planilla de diciembre y la verás en tu boleta.', ok: true, por: 'Cuándo y dónde.' },
        { id: 'c2', t: 'Lo vamos a ver.', ok: false, por: 'Sin fecha.' },
      ] },
      { id: 'grac', t: 'Cierre', ops: [
        { id: 'g1', t: 'Gracias por avisar: estamos revisando a todo el turno noche gracias a tu mensaje.', ok: true, por: 'Le reconoces el aporte.' },
        { id: 'g2', t: 'Si tienes otra duda, ven a la oficina.', ok: false, por: 'Le pides cambiar de canal sin necesidad.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'c1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 3 : -1 },
        flags: q === 'riesgosa' ? [] : ['renzo_atendido'], cartera: { reclamos: q === 'buena' ? 'Renzo: diferencia en diciembre; revisión del turno noche' : 'Respuesta a Renzo poco clara' },
        out: q === 'buena' ? 'Renzo responde con un pulgar y un mensaje: «Gracias. Siempre me dicen que vaya a la oficina. Usted me escribió».' : 'Renzo responde: «No entiendo. ¿Me van a pagar o no?».',
        pro: { ok: 'Mensaje claro, con dato, fecha y reconocimiento, por el canal que él usa.', risk: 'Pedirle que vaya a la oficina a alguien que se comunica por escrito es ponerle una barrera.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '«Usted me escribió.» Eso pesa.' : 'Más simple, más claro.'],
      };
    },
    mirada: { ve: 'Atender bien a una persona con discapacidad muchas veces es tan simple como responder por el canal que usa, con frases claras. Esa misma claridad le sirve a cualquier trabajador que lee su boleta.' },
  },
  {
    id: 'z4', t: '13:20', ch: 'documento', who: null, titulo: 'La carpeta del lunes', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de vidrio, con Carmen', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Carmen llega con empanadas de la panadería de la esquina. El lunes a las nueve es la comparecencia. ${F.has('reintegros_en_marcha') ? 'Tienes las constancias de ayer.' : 'Los reintegros todavía no salieron.'} En la carpeta caben <mark class="clave">tres anexos</mark> además del expediente.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres anexos que llevarás el lunes.', boton: 'Armar la carpeta', resumen: 'Llevarás',
    cols: ['Anexo', 'Qué demuestra'],
    rows: [
      { id: 'const', cells: ['Constancias de depósito del reintegro de CTS y del pago a cesados', 'Lo que ya se pagó'] },
      { id: 'calc', cells: ['Cálculo persona por persona de las 412 personas', 'Cuánto le toca a cada una y por qué'] },
      { id: 'cal', cells: ['Calendario firmado por Finanzas para las gratificaciones', 'Lo que falta pagar y cuándo'] },
      { id: 'acta', cells: ['Acta de salida en vivo de Nómina360', 'Que el error ya no se repite'] },
      { id: 'mail', cells: ['Correos internos del equipo sobre el hallazgo', 'Cómo se descubrió'] },
      { id: 'cv', cells: ['Tu CV y tus certificados', 'Nada para el inspector'] },
    ],
    score: { const: 3, calc: 3, cal: 2, acta: 2, mail: -1, cv: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 3 : -1 },
        flags: [q === 'buena' ? 'comparecencia_lista' : 'comparecencia_floja'], cartera: { sunafil: q === 'buena' ? 'Carpeta lista: pagos, cálculo y sustento' : 'Carpeta con huecos' },
        out: q === 'buena' ? 'Carmen hojea la carpeta: «Con esto, el lunes contamos una historia que se puede probar: lo encontramos, lo corregimos y lo estamos pagando».' : 'Carmen frunce el ceño: «Al inspector no le cuentes cómo te sentiste. Muéstrale lo que se pagó».',
        pro: { ok: 'Pagos hechos, cálculo individual y sustento de lo pendiente.', risk: 'Los correos internos no se piden y pueden abrir otras preguntas.', info: 'El acta de salida en vivo también ayuda: prueba que el error no se repetirá.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una historia que se puede probar!' : '¿Qué se pagó?'],
      };
    },
    mirada: {
      ve: 'En una comparecencia, el inspector no evalúa intenciones: evalúa hechos y documentos. Constancias, cálculos y calendarios firmados convierten una regularización en algo que se puede verificar.',
      visual: { tipo: 'flujo', titulo: 'La historia que se prueba', pasos: ['Lo detectamos', 'Lo cuantificamos', 'Lo corregimos', 'Lo estamos pagando'] },
    },
  },
  {
    id: 'z5', t: '16:00', ch: 'presencial', who: 'patricia-g', titulo: 'El balance con Patricia', banner: 'assets/foto/mentora.webp', lugar: 'Sala de vidrio, con el cronograma en la pared', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Patricia despega del cronograma la estrella roja del último viernes. «Diez días. ${F.has('error_asumido') || F.has('reintegro_todos') ? 'Encontraste un error de dos años y lo convertiste en un pago.' : 'Salimos en vivo, aunque el pasado todavía pesa.'} ¿Qué quieres preguntarme?» <mark class="clave">Tienes dos preguntas.</mark></p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas para Patricia.',
    opts: [
      { id: 'mejor', label: '¿Qué hice mejor estas dos semanas?', info: '«No confiar en que algo estaba bien solo porque coincidía. El paralelo, el bono, la boleta de Renzo: siempre preguntaste por qué.»' },
      { id: 'mejorar', label: '¿Qué debo mejorar?', info: '«Pedir ayuda antes. Cargaste mucho sola. En planillas, el que se quema en noviembre se equivoca en diciembre.»' },
      { id: 'viene', label: '¿Qué viene ahora?', info: '«La comparecencia, la primera PLAME desde Nómina360 y la gratificación de diciembre con el reintegro. Y la fórmula de horas extras del turno noche.»' },
      { id: 'ella', label: '¿Cómo llegaste tú a este puesto?', info: '«Empecé como asistente, como Mili, en una empresa de buses en Huancayo. Mi primer error fue un DNI mal digitado. Nunca más se me olvidó.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, personas: picks.includes('ella') ? 2 : 0 }, rel: { 'patricia-g': 1 },
      out: 'Patricia guarda la estrella roja en su cajón. «La primera planilla del sistema nuevo. Esta se queda conmigo.»',
      kusi: ['feliz', 'Dos semanas. Mira todo lo que pasó.'],
    }),
    mirada: {
      ve: 'Un balance honesto mira lo hecho y lo que falta. En planillas, el trabajo nunca termina del todo: siempre hay un mes siguiente, una norma que cambia, una fórmula por revisar.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['Lunes S1', 'El plan'], ['Martes', 'Los conceptos'], ['Miércoles', 'El paralelo'], ['Jueves', 'El error antiguo'], ['Viernes', 'La gerencia'], ['Lunes S2', 'SUNAFIL'], ['Martes', 'Tesorería'], ['Miércoles', 'El cierre'], ['Jueves', 'El banco'], ['Viernes', 'El pago']] },
    },
  },
  {
    id: 'z6', t: '17:30', ch: 'documento', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/esc/camino.webp', lugar: 'La azotea del almacén, mirando el puerto', show: ['personas', 'confianza'],
    body: () => `<p>Subes un momento a la azotea. Desde ahí se ven las grúas del puerto y los camiones en fila en la Gambetta. Dos semanas: un sistema nuevo, un error de dos años, una inspección y 1,097 abonos a las seis de la mañana.</p><p><mark class="clave">¿Te ves en este puesto?</mark> No hay respuesta correcta: elige la que más se parece a ti.</p>`,
    type: 'choice',
    choices: [
      { id: 'num', label: 'Sí: me gusta que cada sol tenga una explicación y encontrar lo que nadie vio.',
        res: { q: null, fx: { calidad: 2 }, flags: ['te_ves'],
          out: 'Te ves en la parte más técnica: conceptos, fórmulas, conciliaciones. Es el corazón del puesto, y siempre hay algo nuevo que entender.',
          kusi: ['celebra', '¡Ojo de analista!'] } },
      { id: 'per', label: 'Sí: lo que más me movió fueron Teodoro, Wálter, Oriana y Renzo, no las fórmulas.',
        res: { q: null, fx: { personas: 2 }, flags: ['te_ves'],
          out: 'Te mueve que el cálculo llegue bien a las personas. Planillas también es eso, y quizás te llame algo más cercano a relaciones laborales o compensaciones.',
          kusi: ['feliz', 'Detrás de cada boleta, alguien.'] } },
      { id: 'dud', label: 'No lo sé todavía: me gustó, pero la presión del cierre me pesó.',
        res: { q: null, fx: { confianza: 1 }, flags: ['te_ves'],
          out: 'Es una respuesta honesta. Este puesto tiene picos duros cada mes. La Semana 3 te dirá más.',
          kusi: ['pensando', 'Dudar también es saber.'] } },
    ],
    mirada: { ve: 'El analista de planillas es el dueño del cálculo, pero también quien da la cara cuando algo sale mal. Le gusta a quien disfruta del detalle, aguanta los cierres y entiende que cada número es de alguien.' },
  },
  {
    id: 'z7', t: '18:25', ch: 'correo', who: 'inspector', titulo: 'El correo de las seis', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'tiempo'],
    mail: { from: 'Inspector Raúl Cuba · SUNAFIL', to: 'Andes Logística S.A.', asunto: 'Ampliación del requerimiento' },
    body: (n, F) => `<p>Para la comparecencia del lunes, el inspector pide además el <b>registro de asistencia del turno noche de seis meses</b> y el <b>sustento de las horas extras</b>.</p><p>${F.has('error_he') ? 'Las mismas horas extras que hoy encontraste mal pagadas en la boleta de Renzo.' : 'Las horas extras del turno noche, las del cuaderno de Yesenia.'} <mark class="clave">La Semana 3 empieza antes de que termine esta.</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder a Carmen que el lunes a las 7 armas ese anexo con los formatos de Yesenia, y que avisarás al inspector del error de la tercera hora.',
        res: { q: 'buena', fx: { cumplimiento: 3, confianza: 2 },
          out: 'Carmen responde: «Así. Lo mismo que con el bono: lo encontramos, lo decimos y lo corregimos». Apagas la pantalla. El lunes, a las nueve, el inspector Cuba.',
          pro: { ok: 'Aplicas lo aprendido: coherencia y transparencia.', info: 'El cuaderno mojado de Yesenia y sus formatos diarios ahora son prueba.' },
          kusi: ['animo', 'Continuará… ¡y vas preparada!'] } },
      { id: 'b', label: 'Dejarlo para el lunes temprano: hoy ya diste todo.',
        res: { q: 'aceptable', fx: { tiempo: -1 },
          out: 'Te vas a casa. El lunes, a las siete, tendrás dos horas para armar seis meses de horas extras.',
          pro: { ok: 'Descansas.', risk: 'Dos horas pueden no alcanzar: al menos avisa a Carmen qué harás.' },
          kusi: ['pensando', 'Continuará… con el reloj en contra.'] } },
    ],
    mirada: { ve: 'Una inspección rara vez termina en una sola visita: cada documento abre otra pregunta. El trabajo de planillas tampoco termina con el pago: empieza el mes siguiente, con lo aprendido.' },
  },
];
