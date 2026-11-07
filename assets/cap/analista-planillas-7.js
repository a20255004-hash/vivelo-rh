// Analista de Planillas · Capítulo 7 · «Tesorería» · Semana 2, martes.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas:
// - Ley 27735: la gratificación de Navidad se paga en la primera quincena de diciembre.
// - Constitución Política del Perú, art. 26, inc. 2: carácter irrenunciable de los derechos reconocidos por la Constitución y la ley.
//   https://elperuano.pe/noticia/179606-corte-suprema-precisa-alcances-del-principio-de-irrenunciabilidad-de-derechos
//   https://lpderecho.pe/principio-irrenunciabilidad-derechos-imposibilidad-trabajadores-abandonen-propia-decision-derechos-constitucion-reconoce-exp-00025-2007-pi-tc/
// - Ley 30334 (bonificación extraordinaria del 9 %) y D.S. 001-97-TR (CTS), ya citados en los capítulos 4 y 5.
//   https://lpderecho.pe/tuo-ley-de-compensacion-por-tiempo-de-servicios-ds-1-97-tr

export const CAP = {
  n: 7, titulo: 'Tesorería', dia: 'Semana 2, martes', foto: 'assets/3d/scenes/corporativo.webp',
  lugar: 'Andes Logística · Oficina de Tesorería, Callao',
  inicio: '07:45', fin: '19:00', cierreHora: '18:50',
  apertura: 'Martes. Rosa Chumpitaz te citó a las nueve en Tesorería, una oficina sin ventanas con una calculadora de cinta que todavía usa. Mañana es el cierre de planilla. El lunes, la comparecencia ante SUNAFIL.', boton: 'Ir a Tesorería',
  kusi: 'La plata nunca alcanza para todo a la vez. Tu trabajo: que alcance para lo correcto, en el orden correcto.',
  lead: 'Preparaste la reunión con tres llamadas, negociaste el calendario del reintegro, lo pusiste por escrito, revisaste el comunicado al personal y cuidaste a tu equipo la víspera del cierre.',
  reflexion: '¿Qué pago debería ir primero cuando no alcanza para todos? ¿Por qué?',
  siguiente: { n: 8, titulo: 'El cierre', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'bono', p: 'Reintegro del bono de productividad', j: 'Rosa · Tesorería', d: 0, e: 'Sin calendario' },
  { id: 'comunicado', p: 'Comunicado al personal', j: 'Legal · Carmen', d: 0, e: 'Borrador por revisar' },
  { id: 'sunafil', p: 'Comparecencia ante SUNAFIL', j: 'Inspector Cuba', d: 0, e: 'Lunes 9:00' },
  { id: 'cierre', p: 'Cierre de planilla de noviembre', j: 'Tú · Mili', d: 0, e: 'Mañana' },
  { id: 'historico', p: 'Exportación del sistema viejo', j: 'Diego', d: 0, e: 'En curso' },
];

export const FUTURO = {
  llamadas_previas: ['Llegaste a Tesorería sabiendo cómo se deposita una CTS fuera de fecha.', 'Rosa no pudo decirte «eso no se puede».'],
  calendario_justo: ['Cesados y CTS de los activos se pagan antes de la comparecencia; las gratificaciones, con la de diciembre.', 'El lunes tendrás constancias que mostrar.'],
  calendario_rosa: ['Se aceptó el plan de Rosa: CTS de activos ahora; cesados y gratificaciones en enero.', 'Los 61 cesados esperarán dos meses más.'],
  calendario_enero: ['Todo el reintegro se pasó a enero.', 'El lunes no tendrás un solo pago que mostrarle al inspector.'],
  acuerdo_escrito: ['El calendario quedó por escrito, con montos y responsables.', 'Nadie podrá decir después que no sabía.'],
  comunicado_limpio: ['El comunicado al personal dice qué pasó, qué se paga y cuándo, sin pedir renuncias.', 'Teodoro lo leerá en la asamblea.'],
  comunicado_riesgoso: ['El comunicado salió con frases que no debía tener.', 'El sindicato lo llevará a la comparecencia.'],
  mili_cuidada: ['Dejaste ir a Mili a la clínica con su hijo y reorganizaste el cierre.', 'Mañana llegará a las seis de la mañana, agradecida.'],
  mili_quedada: ['Mili se quedó hasta tarde con su hijo enfermo en casa.', 'Mañana llegará agotada al cierre.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  rosa: { n: 'Rosa Chumpitaz', sub: 'Jefa de Tesorería', who: 'tesoreria' },
  mili: { n: 'Mili Sotelo', sub: 'Asistente de Planillas', c: '#C05621' },
  alvaro: { n: 'Álvaro Benavides', sub: 'Gerente de Administración y Finanzas', c: '#1A365D' },
  teodoro: { n: 'Teodoro Quispe', sub: 'Secretario general del sindicato', c: '#975A16' },
};

export const WSP = [
  { chat: 'rosa', t: '07:50', de: 'Rosa', txt: 'A las 9. Trae números, no historias.' },
  { chat: 'rosa', t: '07:51', de: 'Rosa', txt: 'Tu detalle del viernes me sirvió. A las 9.', si: 'numeros_tesoreria' },
  { chat: 'mili', t: '14:40', de: 'Mili', txt: 'Perdón… me llamaron de la guardería, Thiago tiene 39 de fiebre 😢 No sé qué hacer, mañana es el cierre' },
  { chat: 'alvaro', t: '16:20', de: 'Álvaro', txt: 'Aprobado el calendario. Y aprobado el adelanto de línea con el banco. Bien negociado.', si: 'calendario_justo' },
  { chat: 'teodoro', t: '18:10', de: 'Teodoro', txt: 'Leímos el comunicado en el comedor. Los compañeros están conformes con las fechas. Ahora a ver si se cumple.', si: 'comunicado_limpio' },
  { chat: 'teodoro', t: '18:10', de: 'Teodoro', txt: '¿Por qué el comunicado nos pide firmar que no reclamaremos más? Eso no lo vamos a firmar.', si: 'comunicado_riesgoso' },
];

export const CORREOS = [
  { t: '12:05', de: 'Carmen Ñahui · Legal', para: 'Analista de Planillas', asunto: 'Borrador · comunicado al personal', html: '<p>Te paso el borrador del comunicado que salió de la reunión con Gerencia General. Revísalo con ojo de planillas antes de las 3. Algunas frases las pidió Gerencia y no estoy segura de ellas.</p><p>Carmen</p>' },
];

export const QUIZ = [
  { q: '¿Cuándo se paga la gratificación de Navidad?', ops: ['El 31 de diciembre', 'En la primera quincena de diciembre', 'En enero', 'Cuando la empresa pueda'], ok: 1, por: 'La Ley 27735 establece su pago en la primera quincena de diciembre.' },
  { q: 'Si no alcanza la caja, ¿a quién conviene pagar primero el reintegro?', ops: ['A los gerentes', 'A los cesados, que no tienen otra relación con la empresa, y a los depósitos de CTS que ya debían estar hechos', 'A quien reclame más fuerte', 'A nadie hasta tener todo'], ok: 1, por: 'Los cesados no tienen cómo cobrar después y la CTS ya estaba vencida: son lo más urgente.' },
  { q: 'Un comunicado pide a los trabajadores firmar que «renuncian a cualquier reclamo futuro». Eso…', ops: ['Protege a la empresa', 'No es válido sobre derechos laborales, que son irrenunciables, y genera conflicto', 'Es obligatorio', 'Es una buena práctica'], ok: 1, por: 'La Constitución (art. 26) reconoce el carácter irrenunciable de los derechos laborales.' },
  { q: 'Para que un calendario de pago no se olvide, lo mejor es…', ops: ['Confiar en la memoria de Tesorería', 'Dejarlo por escrito, con montos, fechas y responsables, y con copia a quien aprueba', 'Anotarlo en un pósit', 'Contárselo al sindicato'], ok: 1, por: 'Lo escrito con responsables se cumple; lo conversado se reinterpreta.' },
  { q: 'Tu asistente tiene a su hijo con fiebre la víspera del cierre. ¿Qué haces?', ops: ['Le pides que se quede igual', 'La dejas ir y reorganizas lo que falta con ella para mañana temprano', 'Le descuentas el día', 'Haces todo sola sin decirle nada'], ok: 1, por: 'Cuidar al equipo antes del pico de trabajo también es planificar el cierre.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 't1', t: '08:00', ch: 'llamada', who: null, titulo: 'Tres llamadas antes de las nueve', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Rosa te va a decir «eso no se puede» al menos una vez. Antes de verla, haces tres llamadas para <mark class="clave">llegar con respuestas</mark>.</p>`,
    type: 'calls',
    calls: [['Banco de la cuenta sueldo', 'Explica cómo depositar reintegros de CTS', 'Se puede depositar el reintegro en la cuenta CTS de cada trabajador como depósito extemporáneo, con su detalle. Para 23 entidades distintas, mándenme el archivo por entidad.'], ['Contabilidad', 'Confirma la provisión', 'Ya provisionamos 404 mil en noviembre. Si pagan una parte este mes, me avisan para no duplicar.'], ['Carmen, de Legal', 'Recuerda la comparecencia', 'El lunes el inspector va a querer ver qué se pagó, no qué se prometió. Lo que llegues a pagar antes, súmalo.']],
    prompt: '¿Con qué idea entras a la reunión con Rosa?',
    choices: [
      { id: 'a', label: 'Con una propuesta: priorizar lo que ya está vencido y lo que el inspector verá el lunes.',
        res: { q: 'buena', fx: { calidad: 3, confianza: 3 }, flags: ['llamadas_previas'], cartera: { bono: 'Propuesta de prioridades lista' },
          out: 'Escribes en una hoja tres renglones: cesados, CTS de activos, gratificaciones con diciembre. Debajo, el monto de cada uno.',
          pro: { ok: 'Llegas con la forma de pagar resuelta y con un criterio de prioridad.', info: 'Tesorería negocia mejor cuando el otro ya sabe qué se puede hacer.' },
          kusi: ['animo', 'Tres renglones, tres montos.'] } },
      { id: 'b', label: 'Sin propuesta: que Rosa diga cuánto puede, y desde ahí ver.',
        res: { q: 'aceptable', fx: { confianza: -1 },
          out: 'Entras con la libreta en blanco. Rosa tendrá la iniciativa.',
          pro: { ok: 'Escuchas primero.', risk: 'Si no llevas prioridades, la decisión la toma solo la caja.' },
          kusi: ['pensando', '¿Y tus prioridades?'] } },
    ],
    mirada: { ve: 'Antes de negociar con Tesorería, conviene saber cómo se ejecuta un pago (el banco), cómo se registra (Contabilidad) y para qué sirve hacerlo pronto (Legal). Así la conversación es sobre cuándo, no sobre si se puede.' },
  },
  {
    id: 't2', t: '09:05', ch: 'presencial', who: 'tesoreria', titulo: '«No hay 404 mil este mes»', banner: 'assets/esc/pendulo.webp', lugar: 'Tesorería, entre cajas de archivo', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Rosa ni levanta la vista de la calculadora de cinta. «Este mes pago planilla, proveedores de combustible y la cuota del leasing de los montacargas. Para el reintegro tengo <b>150 mil</b>. El resto, en enero.»</p><p>Los números: cesados, S/ 60,000. CTS de activos con intereses, unos S/ 143,000. Gratificaciones de activos con su 9 %, unos S/ 201,000. <mark class="clave">¿Qué defiendes?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Cesados y CTS ahora (S/ 203,000), pidiendo a Finanzas cubrir los S/ 53,000 que faltan; gratificaciones con la de diciembre.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 5, confianza: 1 }, rel: { tesoreria: -1 }, flags: ['calendario_justo'], cartera: { bono: 'Cesados y CTS: antes del lunes · Gratificaciones: con diciembre' },
          out: 'Rosa resopla: «Me pides 53 mil que no tengo». Le muestras que la gratificación de diciembre ya está en su flujo y que el reintegro solo se suma a ella. Rosa llama a Álvaro. A las cuatro, la línea del banco está aprobada.',
          pro: { ok: 'Pagas primero lo vencido y a quien no tiene otra forma de cobrar, y sumas las gratificaciones a un pago que ya existía.', risk: 'Tensionas la caja y la relación con Rosa.', info: 'Usar fechas de pago que ya existen (diciembre) hace más fácil aprobar lo demás.' },
          kusi: ['celebra', '¡Nadie esperará a enero!'] } },
      { id: 'b', label: 'Aceptar el plan de Rosa: CTS de activos este mes; cesados y gratificaciones en enero.',
        res: { q: 'aceptable', fx: { etica: -1, cumplimiento: 1 }, rel: { tesoreria: 1 }, flags: ['calendario_rosa'], cartera: { bono: 'CTS activos ahora · cesados y gratificaciones en enero' },
          out: 'Rosa asiente: «Así sí». Los activos verán su CTS completa. Los 61 cesados, que ya no tienen sueldo, esperarán dos meses más.',
          pro: { ok: 'Respetas la caja real.', risk: 'Los cesados quedan al final, cuando son quienes más esperan.' },
          kusi: ['pensando', '¿Y los 61?'] } },
      { id: 'c', label: 'Pasar todo a enero: así se paga junto, con un solo proceso y la caja más holgada.',
        res: { q: 'riesgosa', fx: { etica: -3, cumplimiento: -4, tiempo: 2 }, rel: { tesoreria: 1 }, flags: ['calendario_enero'], cartera: { bono: 'Todo en enero' },
          out: 'Rosa sonríe por primera vez. El lunes, ante el inspector, solo tendrás un calendario. Y la gratificación de diciembre saldría sin el reintegro de las anteriores.',
          pro: { ok: 'Simplificas el proceso.', risk: 'La CTS ya estaba vencida. Postergar todo alarga la deuda y sus intereses.' },
          kusi: ['preocupado', 'Enero está muy lejos para quien espera.'] } },
    ],
    rules: [[LEY, 'La gratificación de Navidad se paga en la primera quincena de diciembre (Ley 27735).']],
    mirada: {
      ve: 'Rosa no se opone al reintegro: protege una caja con muchos compromisos. Negociar con Tesorería es buscar el orden de pago que cumple primero lo vencido y lo más urgente para las personas, apoyándose en pagos que ya estaban previstos.',
      visual: { tipo: 'linea', titulo: 'Calendario propuesto', hitos: [['Esta semana', 'Cesados: S/ 60,000'], ['Antes del lunes', 'CTS activos: S/ 143,000'], ['1.ª quincena de diciembre', 'Gratificaciones + 9 %: S/ 201,000']] },
    },
  },
  {
    id: 't3', t: '10:40', ch: 'correo', who: null, titulo: 'Por escrito', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('calendario_justo') ? 'Rosa aceptó tu calendario, con la condición de que Álvaro apruebe la línea.' : 'El calendario quedó como quedó.'} Patricia te pide lo de siempre: «<mark class="clave">Si no está escrito, no pasó</mark>». Le escribes a Rosa con copia a Álvaro y Patricia.</p>`,
    type: 'compose', enviaA: 'rosa', para: 'Para: Rosa Chumpitaz · cc: Álvaro Benavides, Patricia Gómez', boton: 'Enviar el correo',
    prompt: 'Arma tu correo eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué se acordó', ops: [
        { id: 'q1', t: 'Según lo conversado hoy, el reintegro del bono de productividad se pagará así:', ok: true },
        { id: 'q2', t: 'Gracias por tu tiempo. Como sabes, el sistema anterior tenía un problema…', ok: false, por: 'Empieza por la historia y no por el acuerdo.' },
      ] },
      { id: 'tabla', t: 'El detalle', ops: [
        { id: 't1', t: 'Una tabla con cada pago: a quiénes, monto estimado, fecha y quién lo ejecuta.', ok: true, por: 'Montos, fechas y responsables.' },
        { id: 't2', t: 'Un párrafo con el total y «en las próximas semanas».', ok: false, por: 'Sin fechas, no hay acuerdo.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Los montos exactos los confirmo después del cierre de mañana. Si algo cambia, aviso a los tres el mismo día.', ok: true, por: 'Honesto sobre lo estimado.' },
        { id: 'c2', t: 'Cualquier cosa me avisan.', ok: null, por: 'Cordial, pero no compromete a nadie.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 't1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : -1, cumplimiento: sel.tabla === 't1' ? 2 : -1 }, rel: { tesoreria: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['acuerdo_escrito'], cartera: { bono: q === 'riesgosa' ? 'Acuerdo sin fechas por escrito' : 'Calendario por escrito, con responsables' },
        out: q === 'buena' ? 'Rosa responde con una sola palabra: «Conforme». Viniendo de ella, es casi un abrazo.' : 'El correo sale, pero no deja claro quién paga qué y cuándo.',
        pro: { ok: 'Un acuerdo escrito, con montos estimados y fechas, protege a todas las áreas.', risk: 'Un correo sin fechas se convierte en «yo entendí otra cosa».' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '«Conforme». ¡Victoria!' : 'Faltan fechas.'],
      };
    },
    mirada: { ve: 'Un calendario de pago sin responsables es una intención. Con montos, fechas y nombres, y con copia a quien aprueba, se vuelve un compromiso que también podrás mostrar al inspector.' },
  },
  {
    id: 't4', t: '12:20', ch: 'documento', who: null, titulo: 'El borrador del comunicado', banner: 'assets/foto/revisa.webp', show: ['cumplimiento', 'etica', 'personas'],
    body: () => `<p>Comes un tamal verde con café en tu escritorio mientras lees el borrador del comunicado al personal. Carmen te advirtió que algunas frases las pidió Gerencia General. <mark class="clave">Este texto lo leerán 1,100 personas.</mark></p>`,
    type: 'flag', prompt: 'Marca las frases que no deberían salir así.',
    doc: { t: 'Comunicado al personal · borrador', sub: 'Andes Logística · Gerencia de Administración y Finanzas' },
    lines: [
      { id: 'que', t: 'Detectamos que el bono de productividad no se incluyó en la base de la CTS y de las gratificaciones desde 2025.' },
      { id: 'culpa', t: 'Esto se debió a una falla del proveedor del sistema anterior.', bad: BP, why: 'Quien paga responde por su planilla. Culpar a un proveedor no cambia la deuda y suena a excusa.' },
      { id: 'cal', t: 'El reintegro se pagará según el calendario adjunto, incluidas las personas que ya no trabajan con nosotros.' },
      { id: 'renuncia', t: 'Para recibir el reintegro, cada trabajador firmará una declaración de que renuncia a cualquier reclamo futuro sobre este tema.', bad: LEY, why: 'Los derechos laborales son irrenunciables (Constitución, art. 26). Condicionar un pago debido a una renuncia no es válido y genera conflicto.' },
      { id: 'monto', t: 'Cada trabajador recibirá alrededor de S/ 1,000.', bad: BP, why: 'Es un promedio estimado: a muchos les tocará menos y a otros más. Mejor informar el detalle individual en la boleta.' },
      { id: 'dudas', t: 'Ante cualquier duda, el área de Compensaciones atenderá en el comedor los jueves de 1 a 3.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp >= 2 ? 'buena' : 'aceptable',
      out: missLey ? 'Devuelves el borrador con comentarios de forma. La frase de la renuncia sigue ahí.' : 'Le devuelves a Carmen el borrador con tres frases tachadas. Ella responde: «Lo de la renuncia lo pidió Gerencia; con tu comentario lo saco». El comunicado sale a las cuatro.',
      flags: [missLey ? 'comunicado_riesgoso' : 'comunicado_limpio'], cartera: { comunicado: missLey ? 'Salió con la cláusula de renuncia' : 'Comunicado enviado: qué pasó, qué se paga y cuándo' },
      pro: { ok: 'Un comunicado dice qué pasó, qué se hace y cuándo, sin culpas ni condiciones.', risk: 'Pedir renuncias a cambio de pagar lo debido convierte una regularización en un conflicto.', info: 'El monto individual va en la boleta: el promedio crea expectativas falsas.' },
      kusi: missLey ? ['indignado', '¿Renunciar a un derecho?'] : ['celebra', '¡Comunicado limpio!'],
    }),
    rules: [[LEY, 'Los derechos laborales son irrenunciables (Constitución, art. 26).']],
    mirada: {
      ve: 'Un comunicado sobre un error de pago se lee buscando dos cosas: si la empresa asume y si hay trampa. Culpar a otro o pedir firmas de renuncia destruye en un párrafo la confianza que costó dos semanas construir.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al comunicado', pares: [['Culpa del proveedor', 'La empresa detectó y corrige'], ['Firme su renuncia', 'Calendario de pago para todos'], ['Unos S/ 1,000', 'Su monto, en su boleta']] },
    },
  },
  {
    id: 't5', t: '14:45', ch: 'whatsapp', who: null, titulo: 'Thiago tiene fiebre', banner: 'assets/esc/dudas.webp', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>Mili te escribe desde el baño, con la voz quebrada en el audio: la guardería llamó, su hijo Thiago, de dos años, tiene 39 de fiebre. Su mamá trabaja hasta las ocho y el papá está en Arequipa. <mark class="clave">Mañana es el cierre.</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que se vaya ya, y acordar con ella qué puede dejar avanzado en diez minutos y a qué hora llega mañana.',
        res: { q: 'buena', fx: { personas: 5, tiempo: -2 }, flags: ['mili_cuidada'],
          envia: [['mili', 'Mili, ve con Thiago ya. Déjame en la carpeta el archivo de horas extras como esté, yo lo termino. Mañana, si Thiago está mejor, nos vemos a las 6:30 para el cierre. Si no, me avisas y nos organizamos. Lo primero es él.']],
          out: 'Mili deja el archivo de horas extras en la carpeta, con una nota: «faltan 12 formatos de Yesenia». A las nueve de la noche te manda una foto de Thiago dormido: «Ya le bajó».',
          pro: { ok: 'Cuidas a tu equipo y reorganizas el trabajo sin dramatizar.', risk: 'Te quedas con más trabajo esta tarde.', info: 'Lo que tu equipo recuerda de la semana del cierre es cómo lo trataste.' },
          kusi: ['feliz', 'Primero Thiago. ¡Bien!'] } },
      { id: 'b', label: 'Pedirle que termine las horas extras antes de irse: son dos horas y mañana no habrá tiempo.',
        res: { q: 'riesgosa', fx: { personas: -5, calidad: 1 }, flags: ['mili_quedada'],
          out: 'Mili se queda hasta las cinco, con el celular en la mano y los ojos rojos. Las horas extras quedan listas, con dos errores de digitación.',
          pro: { ok: 'El archivo avanza.', risk: 'Un trabajo hecho con un hijo enfermo en la cabeza sale con errores, y la persona no lo olvida.' },
          kusi: ['triste', '¿Valía esas dos horas?'] } },
    ],
    mirada: { ve: 'Las semanas de cierre son exigentes, pero no pueden pasar por encima de una emergencia de salud de un hijo. Planificar también es tener margen para lo imprevisto, que siempre llega.' },
  },
  {
    id: 't6', t: '16:40', ch: 'documento', who: null, titulo: 'La víspera del cierre', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio, con dos pantallas abiertas', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('mili_cuidada') ? 'Estás sola en la oficina y te quedan dos horas.' : 'Mili está a tu lado, apagada.'} Mañana a las siete empieza el cierre de noviembre en Nómina360. Hoy puedes dejar listas <mark class="clave">tres cosas</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que dejas listas hoy.', boton: 'Dejar listas', resumen: 'Dejaste listo',
    cols: ['Tarea', 'Para qué sirve mañana'],
    rows: [
      { id: 'he', cells: ['Completar las horas extras con los 12 formatos de Yesenia que faltan', 'Que nadie del turno noche cobre de menos'] },
      { id: 'nov', cells: ['Lista de novedades: altas, ceses, licencias y descansos médicos', 'Lo que entra o sale de la planilla de noviembre'] },
      { id: 'reint', cells: ['Cargar el reintegro de los cesados como pago aparte', 'Que no se mezcle con la planilla del mes'] },
      { id: 'check', cells: ['Lista de control del cierre: qué revisar antes de aprobar', 'Que no se te pase nada a las seis de la tarde'] },
      { id: 'logo', cells: ['Poner el logo nuevo en las boletas', 'Marketing lo pidió'] },
      { id: 'mail', cells: ['Responder 40 correos atrasados', 'Bandeja limpia'] },
    ],
    score: { he: 3, nov: 3, reint: 1, check: 3, logo: -2, mail: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, tiempo: q === 'buena' ? 3 : -1, cumplimiento: picks.includes('he') ? 2 : -1 },
        cartera: { cierre: q === 'buena' ? 'Horas extras, novedades y lista de control listas' : 'Cierre con pendientes' },
        out: q === 'buena' ? 'Sales a las siete con todo listo. En la combi, repasas la lista de control en el celular. Afuera, el cielo del Callao se pone naranja por primera vez en semanas.' : 'Algo importante quedará para mañana, y mañana no habrá tiempo.',
        pro: { ok: 'Dejas listo lo que, si falta, retrasa o arruina el cierre.', risk: 'El logo y los correos pueden esperar al lunes.', info: 'El reintegro de los cesados es mejor procesarlo aparte, pero no tiene que ser hoy.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Mañana arrancas con ventaja.' : '¿Y la lista de control?'],
      };
    },
    mirada: {
      ve: 'Un cierre de planilla se gana la víspera: con las novedades al día, las horas extras completas y una lista de control. El día del cierre ya no hay espacio para descubrir lo que faltaba.',
      visual: { tipo: 'flujo', titulo: 'La víspera del cierre', pasos: ['Horas extras', 'Novedades', 'Lista de control', 'Dormir'] },
    },
  },
];
