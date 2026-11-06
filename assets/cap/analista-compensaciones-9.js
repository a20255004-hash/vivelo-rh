// Analista de Compensaciones y Beneficios · Capítulo 9 · «Las cartas» · Semana 2, jueves.
// Hilo: preparas las cartas de aumento y a los gerentes que tendrán que explicarlas.
// Normas citadas:
// - Ley 30709 y D.S. 002-2018-TR: el empleador informa la política salarial al trabajador cuando cambia su categoría o se
//   modifica su esquema remunerativo, en reuniones o por escrito o medios digitales.
//   https://elperuano.pe/noticia/246869-sunafil-fiscaliza-normas-sobre-politica-salarial-atiende-estos-consejos-para-evitar-riesgos
// - Ley 29733, Ley de Protección de Datos Personales: https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011

export const CAP = {
  n: 9, titulo: 'Las cartas', dia: 'Semana 2, jueves', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:00', fin: '19:30', cierreHora: '19:10',
  apertura: 'Jueves. El comité aprobó; ahora hay que convertir un Excel en 1,200 cartas. Mañana cada persona recibirá la suya. Gustavo llegó antes que tú: hay tres cafés vacíos en su escritorio.', boton: 'Empezar con las cartas',
  kusi: 'Hoy cada número se vuelve una frase para una persona. ¡Que se entienda!',
  lead: 'Diseñaste la carta, revisaste las que generó el sistema, preparaste a los gerentes, resolviste un problema de firma, decidiste cómo se entrega la carta de Claudia y ordenaste la entrega del viernes.',
  reflexion: '¿Qué te gustaría leer en tu propia carta de aumento, aunque el aumento fuera pequeño?',
  siguiente: { n: 10, titulo: 'Las conversaciones', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'modelo', p: 'Modelo de carta', j: 'Gustavo · Compensaciones', d: 0, e: 'Por diseñar' },
  { id: 'cartas', p: '1,200 cartas generadas', j: 'Sistema de planillas', d: 0, e: 'Por revisar' },
  { id: 'gerentes', p: 'Guía para gerentes', j: 'Fiorella · Gestión Humana', d: 0, e: 'Por preparar' },
  { id: 'firma', p: 'Firma de Fiorella', j: 'TI', d: 0, e: 'Certificado digital' },
  { id: 'claudia', p: 'Carta de Claudia', j: 'Claudia · Redes', d: 0, e: 'Entrega mañana' },
];

export const FUTURO = {
  carta_modelo: ['La carta explica monto, criterios, política y a quién preguntar.', 'Mañana habrá menos preguntas de pasillo.'],
  cartas_revisadas: ['Detectaste y corregiste errores en las cartas antes de enviarlas.', 'Nadie recibirá una carta equivocada mañana.'],
  carta_error: ['Algunas cartas salen con errores.', 'Mañana llegarán reclamos.'],
  guia_gerentes: ['Los gerentes tienen una guía para explicar los aumentos.', 'Las conversaciones de mañana serán más parejas.'],
  firma_ok: ['Las cartas saldrán con la firma digital válida.', 'Nadie podrá dudar de su validez.'],
  firma_pegada: ['Pegaste la imagen de la firma de Fiorella en las cartas.', 'Fiorella lo sabrá.'],
  claudia_con_jefe: ['Claudia recibirá su carta con Renzo y contigo presentes.', 'Será la última conversación de la semana.'],
  claudia_solo_renzo: ['Renzo entregará solo la carta de Claudia.', 'Claudia lo enfrentará sola.'],
  entrega_ordenada: ['La entrega del viernes tiene reglas iguales para todas las áreas.', 'Wilber entregará las cartas en persona, una por una.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  claudia: { n: 'Claudia Puma', sub: 'Ingeniera de redes', who: 'claudia' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
  wilber: { n: 'Wilber Ccori', sub: 'Jefe de Operaciones de Campo', c: '#F2A900' },
};

export const WSP = [
  { chat: 'grupo', t: '08:03', de: 'Gustavo', txt: 'Hoy no se almuerza en el comedor. Pedí pollos a la brasa para el equipo 🍗' },
  { chat: 'wilber', t: '08:30', de: 'Wilber', txt: 'Ayer les conté a los chicos que viene un aumento mayor que el del resto y un plan. Hubo aplausos, ingeniera.', si: 'wilber_espera' },
  { chat: 'wilber', t: '08:30', de: 'Wilber', txt: 'Les dije que eran S/ 400. Ahora Yesenia pregunta si es seguro. ¿Es seguro?', si: 'wilber_cifras' },
  { chat: 'fiorella', t: '10:50', de: 'Fiorella', txt: 'Estoy en Arequipa por la visita a la sede sur. Vuelvo mañana temprano. Cualquier cosa, por aquí.' },
  { chat: 'claudia', t: '14:20', de: 'Claudia', txt: 'Me dijeron que mañana entregan las cartas. ¿Puedes estar cuando me den la mía?' },
  { chat: 'gustavo', t: '19:00', de: 'Gustavo', txt: 'Mañana es el día. Duerme. Las conversaciones se ganan descansada.' },
];

export const CORREOS = [
  { t: '08:20', de: 'Mesa de ayuda TI', para: 'Compensaciones', asunto: 'Códigos de categoría actualizados', html: '<p>Se aplicaron los cambios de categoría solicitados en su ticket. El sistema de planillas ya muestra «Ingeniero(a) de redes · categoría 6» para los 20 puestos.</p>', si: 'ticket_ti' },
  { t: '12:30', de: 'Mesa de ayuda TI', para: 'Gestión Humana', asunto: 'Certificado digital vencido', html: '<p>El certificado de firma digital de Fiorella Gamarra venció ayer. La renovación requiere su validación presencial; la próxima cita disponible es mañana a las 7:30 a. m.</p>' },
];

export const QUIZ = [
  { q: 'Una buena carta de incremento debe incluir…', ops: ['Solo el nuevo sueldo', 'Nuevo sueldo, criterios aplicados, referencia a la política salarial y a quién preguntar', 'Una advertencia de confidencialidad', 'La comparación con sus compañeros'], ok: 1, por: 'Explicar el porqué es lo que convierte un número en una decisión entendible.' },
  { q: 'Si una persona cambia de categoría con la revisión, la empresa debe…', ops: ['No decirle nada', 'Informarle la política salarial', 'Solo cambiarle el código en el sistema', 'Pedirle que firme una renuncia'], ok: 1, por: 'La política salarial se informa al cambiar la categoría o el esquema remunerativo.' },
  { q: 'Pegar la imagen escaneada de la firma de una gerenta en 1,200 cartas…', ops: ['Es lo mismo que una firma digital', 'No reemplaza una firma válida y suplanta su voluntad', 'Es obligatorio', 'Solo es un tema estético'], ok: 1, por: 'Una imagen pegada no es una firma digital ni una autorización.' },
  { q: 'Entregar las cartas por correo masivo con todos en copia…', ops: ['Es eficiente', 'Expone datos personales de cada trabajador', 'Es lo que pide la ley', 'No tiene riesgo'], ok: 1, por: 'Cada carta es personal y confidencial.' },
  { q: 'A quien recibió 0 % por bajo desempeño, el gerente debería…', ops: ['No explicarle nada', 'Explicarle el criterio y qué puede hacer para mejorar', 'Darle un bono para que no se moleste', 'Decirle que fue decisión de RR.HH.'], ok: 1, por: 'El criterio y el camino de mejora son parte de la conversación.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:15', ch: 'documento', who: 'gustavo', titulo: 'La carta modelo', banner: 'assets/esc/idea.webp', lugar: 'Tu escritorio, con Gustavo detrás', show: ['calidad', 'personas'],
    body: () => `<p>La carta del año pasado decía solo: «Nos complace comunicarle que su remuneración será de S/ ____». Gustavo la tacha con un plumón rojo.</p><p>«Que cualquiera la lea y entienda <mark class="clave">cuánto, por qué y a quién preguntar</mark>.»</p>`,
    type: 'builder', prompt: 'Arma la carta eligiendo las piezas de cada parte.', boton: 'Guardar el modelo',
    bloques: [
      { id: 'monto', t: 'El monto', n: 1, ops: [
        { id: 'm1', t: 'Su remuneración mensual pasará de S/ [actual] a S/ [nueva] desde el 1 de enero de 2027 ([%] de incremento).', ok: true, por: 'Antes, después, porcentaje y fecha.' },
        { id: 'm2', t: 'Ha sido beneficiado con un incremento.', ok: false, por: 'No dice cuánto ni desde cuándo.' },
      ] },
      { id: 'crit', t: 'Los criterios', n: 2, ops: [
        { id: 'c1', t: 'Su posición en la banda de su categoría y su evaluación de desempeño.', ok: true },
        { id: 'c2', t: 'Cuando corresponda: el ajuste por equidad interna o por mercado aplicado a su puesto.', ok: true, por: 'Así Claudia y los técnicos ven su caso.' },
        { id: 'c3', t: 'La generosidad de la empresa en un año difícil.', ok: false, por: 'No es un criterio; suena a favor.' },
      ] },
      { id: 'pol', t: 'La política', n: 1, ops: [
        { id: 'p1', t: 'Adjuntamos la política salarial de AndesTel, que explica cómo se definen las remuneraciones.', ok: true, por: 'Cumples con informarla al cambiar el esquema remunerativo.' },
        { id: 'p2', t: 'La política salarial es reservada.', ok: false, por: 'La ley exige informarla.' },
      ] },
      { id: 'canal', t: 'Preguntas', n: 1, ops: [
        { id: 'q1', t: 'Si tiene preguntas, puede conversarlas con su jefe o escribir a compensaciones@andestel.pe.', ok: true, por: 'Dos puertas abiertas.' },
        { id: 'q2', t: 'Esta información es confidencial y su difusión será sancionada.', ok: false, por: 'Intimida y cierra la conversación.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 3 : 0, cumplimiento: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['carta_modelo'] : [],
        cartera: { modelo: q === 'buena' ? 'Modelo: monto, criterios, política y canal' : 'Modelo con huecos' },
        out: q === 'buena' ? 'Gustavo la lee en voz alta, como si fuera un técnico de Ate. «Se entiende. Hasta yo quisiera recibir una así.»' : 'Gustavo pregunta: «Si yo fuera Yesenia, ¿sabría por qué me tocó esto?». La respuesta es no.',
        pro: { ok: 'Una carta que explica reduce reclamos y construye confianza.', info: 'Prueba el modelo con tres casos distintos: un técnico, Claudia y alguien con 0 %.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Carta que se entiende!' : 'Le falta el porqué.'],
      };
    },
    rules: [[LEY, 'Ley 30709 y su reglamento: informar la política salarial cuando se modifica el esquema remunerativo del trabajador.']],
    mirada: {
      ve: 'La carta es el único momento en que cada trabajador ve el resultado de la revisión. Si solo dice un número, todo el trabajo de criterios queda invisible.',
    },
  },
  {
    id: 'i2', t: '10:00', ch: 'sistema', who: null, titulo: 'Lo que generó el sistema', banner: 'assets/esc/lupa.webp', lugar: 'Sistema de planillas · «Cartas_lote_1.pdf»', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>El sistema genera las 1,200 cartas en un PDF de 1,200 páginas. Revisas una muestra de casos especiales. ${F.has('formula_maternidad') || F.has('acta_sucia') ? 'Algo en la columna de incrementos te da mala espina.' : 'Vas con calma, carta por carta.'}</p><p><mark class="clave">Marca las cartas que no pueden salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las cartas con errores.',
    doc: { t: 'Muestra de cartas generadas', sub: 'Lote 1 · casos especiales' },
    lines: [
      { id: 'karina', t: 'Karina Ríos, ingeniera, «Supera expectativas», volvió de licencia de maternidad en marzo: incremento 0 %.', bad: LEY, why: 'Desempeño alto e incremento cero: el sistema aplicó una exclusión por la licencia. Es discriminación remunerativa.' },
      { id: 'yesenia', t: 'Yesenia Huamán, técnica de campo: de S/ 2,400 a S/ 2,790, ajuste por mercado y desempeño.' },
      { id: 'nombre', t: 'Carta de «Lucia Tapía» (con tilde en la a), categoría 6, con el sueldo de otra persona.', bad: BP, why: 'Nombre mal escrito y monto cruzado: una carta así destruye la confianza en todo el proceso.' },
      { id: 'cero', t: 'Supervisor de call center, «No cumple»: incremento 0 %, con explicación del criterio y plan de mejora.' },
      { id: 'lista', t: 'La última página del PDF tiene una tabla con los incrementos de todo el lote.', bad: LEY, why: 'Si el PDF se divide mal, alguien recibe los sueldos de todos. Son datos personales.' },
      { id: 'cp', t: 'Claudia Puma: «Ingeniera de redes · categoría 6», ajuste por equidad (primer tramo) y desempeño.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Corriges una parte. El lote sale con al menos un error grave que nadie más revisará antes de mañana.' : `Detienes el lote y corriges ${hitsLey + hitsBp} errores. A Karina le corresponde un 6 %. La tabla final desaparece del PDF.`,
      flags: [missLey ? 'carta_error' : 'cartas_revisadas'],
      cartera: { cartas: missLey ? 'Lote con errores' : 'Lote corregido y regenerado' },
      pro: { ok: 'Revisar una muestra de casos especiales detecta lo que un proceso automático no ve.', risk: 'Un error en una carta llega directo a la persona y se vuelve reclamo.', info: 'Corre otra vez la pestaña de equidad sobre el resultado final.' },
      kusi: missLey ? ['preocupado', '¿Y la carta de Karina?'] : ['celebra', '¡Karina recibe lo que le toca!'],
    }),
    rules: [[LEY, 'Ley 30709: un sistema que aplica una exclusión por maternidad discrimina aunque nadie lo haya decidido hoy.'], [LEY, 'Ley 29733: cada carta contiene datos personales solo de su destinatario.']],
    mirada: {
      ve: 'Los sistemas aplican lo que alguien configuró alguna vez. La revisión humana de los casos especiales es la última defensa antes de que un error llegue a una persona.',
    },
  },
  {
    id: 'i3', t: '11:30', ch: 'documento', who: null, titulo: 'Guía para los gerentes', banner: 'assets/foto/capacitacion.webp', lugar: 'Sala de capacitación, preparando una charla de 20 minutos', show: ['personas', 'calidad'],
    body: () => `<p>A las 3 p. m. tienes una charla virtual con los 40 jefes que entregarán cartas. Algunos nunca tuvieron una conversación salarial.</p><p>Elige <mark class="clave">tres pautas</mark> para la guía.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres pautas para los gerentes.', boton: 'Guardar la guía', resumen: 'Elegiste',
    cols: ['Pauta', 'Por qué'],
    rows: [
      { id: 'priv', cells: ['Entregar cada carta en privado, en persona o por videollamada', 'Es una conversación, no un trámite'] },
      { id: 'porque', cells: ['Explicar el criterio con las palabras de la carta', 'Todos explican igual'] },
      { id: 'escucha', cells: ['Escuchar y derivar a Compensaciones lo que no sepan responder', 'Nadie improvisa'] },
      { id: 'rrhh', cells: ['Si alguien reclama, decir «fue decisión de RR.HH.»', 'Evita el conflicto'] },
      { id: 'comparar', cells: ['Comparar con lo que recibieron otros para que vean que no es tan malo', 'Da contexto'] },
    ],
    score: { priv: 3, porque: 3, escucha: 3, rrhh: -3, comparar: -4 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0, etica: picks.includes('comparar') ? -4 : 1 },
        flags: q === 'buena' ? ['guia_gerentes'] : [],
        cartera: { gerentes: q === 'buena' ? 'Guía: privado, criterio y derivar' : 'Guía con pautas riesgosas' },
        out: q === 'buena' ? 'En la charla, un jefe de ventas pregunta: «¿Y si alguien llora?». Respondes: «Escúchalo. Y si no sabes qué decir, me llamas». Varios toman nota.' : picks.includes('comparar') ? 'Gustavo te detiene: «Comparar con otros es revelar sueldos ajenos. Eso no va».' : 'La guía ayuda, pero deja a los jefes sin un plan para las preguntas difíciles.',
        pro: { ok: 'Los jefes son la cara de la revisión: prepararlos es tan importante como hacer los números.', info: 'Comparte con ellos tres preguntas frecuentes con su respuesta.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Jefes preparados!' : 'Esa pauta no ayuda.'],
      };
    },
    rules: [[BP, 'Prepara a los jefes para explicar el criterio, escuchar y derivar; nunca para comparar sueldos ajenos.']],
    mirada: {
      ve: 'La mayoría de las personas recibirá su aumento de su jefe, no de Compensaciones. Si el jefe no sabe explicarlo, el mejor análisis se convierte en «me tocó poco y nadie sabe por qué».',
    },
  },
  {
    id: 'i4', t: '12:40', ch: 'sistema', who: null, titulo: 'La firma vencida', banner: 'assets/esc/alarma.webp', lugar: 'Sistema de firma digital · «Certificado no válido»', show: ['cumplimiento', 'tiempo', 'etica'],
    body: () => `<p>Mientras llega el pollo a la brasa, intentas firmar el lote con el certificado de Fiorella, que te autorizó a enviarlo. Pantalla roja: <mark class="clave">«Certificado vencido»</mark>.</p><p>Fiorella está en Arequipa. En la carpeta de plantillas hay una imagen escaneada de su firma.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Escribirle a Fiorella, agendar la renovación de mañana a las 7:30 y programar el envío para después de la firma, avisando a los jefes que las cartas llegarán a las 9:00.',
        res: { q: 'buena', fx: { cumplimiento: 4, tiempo: -2 }, flags: ['firma_ok'], cartera: { firma: 'Renovación 7:30; envío 9:00' }, envia: ['fiorella', 'Fiorella, tu certificado de firma venció ayer. TI te espera mañana a las 7:30 para renovarlo; programé las cartas para las 9:00. ¿Te parece?'],
          out: 'Fiorella responde desde el aeropuerto de Arequipa: «Perfecto. Llego 6:40 y voy directo». El pollo llega frío, pero llega.',
          pro: { ok: 'Mueves la hora en vez de saltarte la firma.', info: 'Pide a TI una alerta de vencimiento para los certificados de Gestión Humana.' },
          kusi: ['feliz', '¡Firma válida, aunque una hora tarde!'] } },
      { id: 'b', label: 'Pegar la imagen de la firma en las cartas: Fiorella ya aprobó todo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -3, tiempo: 3 }, flags: ['firma_pegada'], cartera: { firma: 'Imagen pegada' },
          out: 'Las cartas quedan «firmadas» en diez minutos. Pero una imagen pegada no es una firma digital, y Fiorella no firmó nada.',
          pro: { ok: 'Cumples la hora.', risk: 'Usar la firma de otra persona sin que firme es suplantar su voluntad.' },
          kusi: ['indignado', '¡Esa no es su firma!'] } },
      { id: 'c', label: 'Enviar las cartas sin firma, con una nota que diga «firma pendiente».',
        res: { q: 'aceptable', fx: { cumplimiento: -1, tiempo: 2 },
          out: 'Las cartas saldrán a tiempo, pero sin firma. Algunos trabajadores preguntarán si son válidas.',
          pro: { ok: 'No falsificas nada.', risk: 'Una carta sin firma genera dudas sobre su validez.' },
          kusi: ['pensando', 'A tiempo, pero sin firma.'] } },
    ],
    mirada: {
      ve: 'Bajo presión de tiempo, los atajos parecen inocentes. Pero una firma no es una imagen: es la voluntad de una persona. Mover una hora casi siempre es mejor que saltarse un paso.',
    },
  },
  {
    id: 'i5', t: '14:40', ch: 'presencial', who: 'renzo', titulo: '¿Quién le entrega la carta a Claudia?', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Pasillo del piso 9, frente a la sala 9B', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Claudia te pidió estar presente cuando le entreguen su carta. Renzo se entera y viene a tu escritorio.</p><p>${F.has('claudia_expuesta') ? '«Ya hablé con ella la otra vez. Esto lo hago yo, a solas.»' : F.has('excepcion_criterio') ? '«Lo de Álvaro salió bien gracias a ti. Pero la carta de Claudia la entrego yo, como a todo mi equipo.»' : '«Es mi equipo. Yo entrego las cartas.»'} <mark class="clave">«No necesito a Compensaciones al lado.»</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle entregarla juntos: él como jefe y tú para explicar el ajuste de equidad, porque Claudia lo pidió y es el caso más delicado del año.',
        res: { q: 'buena', fx: { personas: 4, confianza: 2, etica: 2 }, rel: { claudia: 1, renzo: 0 }, flags: ['claudia_con_jefe'], cartera: { claudia: 'Entrega mañana 11:00, con Renzo y contigo' },
          out: 'Renzo lo piensa. «Está bien. Pero hablo yo primero.» Le escribes a Claudia: «Mañana a las 11, sala 9B. Estaré ahí».',
          pro: { ok: 'Respetas el rol del jefe y el pedido de la trabajadora.', risk: 'Renzo puede sentir que desconfías de él.', info: 'Acuerda con Renzo qué dirá cada uno antes de entrar.' },
          kusi: ['animo', 'Los dos roles en la misma mesa.'] } },
      { id: 'b', label: 'Dejar que Renzo la entregue solo: es su jefe y así se hace con todos.',
        res: { q: 'aceptable', fx: { personas: -2, confianza: 1 }, rel: { renzo: 1, claudia: -1 }, flags: ['claudia_solo_renzo'], cartera: { claudia: 'Renzo entregará solo' },
          out: 'Renzo agradece. Le escribes a Claudia que no estarás. Ella responde: «Ok». Nada más.',
          pro: { ok: 'Respetas la regla general.', risk: 'Claudia pidió algo concreto y razonable, y es la persona que menos confianza tiene en su jefe.' },
          kusi: ['triste', 'Ella te lo había pedido…'] } },
      { id: 'c', label: 'Entregársela tú misma, sin Renzo: es un caso de equidad y Compensaciones lo maneja mejor.',
        res: { q: 'riesgosa', fx: { confianza: -3, personas: 1 }, rel: { renzo: -1 }, cartera: { claudia: 'Entrega sin el jefe' },
          out: 'Renzo se va molesto: «Entonces que Compensaciones dirija mi equipo». Claudia recibirá su carta, pero su jefe queda fuera de la corrección.',
          pro: { ok: 'Claudia se sentirá acompañada.', risk: 'Excluir al jefe le quita responsabilidad justo cuando tiene que asumirla.' },
          kusi: ['preocupado', 'Y Renzo queda afuera…'] } },
    ],
    rules: [[BP, 'En casos sensibles, la entrega puede hacerse con el jefe y Compensaciones, acordando antes qué dirá cada uno.']],
    mirada: {
      ve: 'La carta de Claudia no es solo un número: es el cierre de una consulta que le costó hacer. Quién está en la sala dice tanto como lo que dice la carta.',
    },
  },
  {
    id: 'i6', t: '16:20', ch: 'llamada', who: null, titulo: 'Cómo piensa entregar cada área', banner: 'assets/foto2/callcenter.webp', lugar: 'Tu escritorio, con audífonos', show: ['personas', 'cumplimiento', 'calidad'],
    body: () => `<p>Después de la charla, tres jefes te llaman con su plan para mañana. <mark class="clave">Cada uno lo quiere hacer a su manera</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Gerente de Ventas', 'Contesta caminando por un centro comercial', '«Tengo 180 vendedores en provincias. Pensaba mandar las cartas en un solo correo, con todos en copia, y listo.»'],
      ['Wilber Ccori · Operaciones de Campo', 'Contesta desde el patio de Huachipa', '«Pensaba juntar a los 380 en el patio a las seis y leer los nombres con su aumento en voz alta. Así nadie se queda sin saber.»'],
      ['Supervisora de call center · 15 asesores', 'Contesta en voz baja', '«Tengo una asesora con 0 % por desempeño. Es madre soltera. No sé cómo decírselo.»'],
    ],
    prompt: '¿Qué les dices a los tres?',
    choices: [
      { id: 'a', label: 'A Ventas: cartas individuales y una videollamada corta con cada uno. A Wilber: entregas una por una, en la caseta, y si quiere hablarles a todos, que sea sobre el plan, sin montos. A la supervisora: privado, con el criterio y un plan de mejora concreto.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4 }, flags: ['entrega_ordenada'], cartera: { gerentes: 'Entrega individual en todas las áreas' },
          out: 'Wilber se ríe: «Uy, sí, en voz alta iba a ser un escándalo». La supervisora te agradece: «Ahora sé qué decirle».',
          pro: { ok: 'Mismas reglas para todas las áreas, adaptadas a cómo trabaja cada una.', info: 'Ofrece a la supervisora acompañarla si lo necesita.' },
          kusi: ['celebra', '¡Una por una, con cuidado!'] } },
      { id: 'b', label: 'Dejar que cada área entregue como le funcione mejor: conocen a su gente.',
        res: { q: 'riesgosa', fx: { personas: -3, cumplimiento: -5 },
          out: 'Mañana, 180 vendedores verán los sueldos de todos sus compañeros en un correo, y el patio de Huachipa escuchará 380 montos en voz alta.',
          pro: { ok: 'Respetas la autonomía de cada área.', risk: 'Correo con todos en copia y lectura pública exponen datos personales.' },
          kusi: ['indignado', '¡Montos en voz alta, no!'] } },
      { id: 'c', label: 'Corregir solo el correo masivo de Ventas; lo de Wilber es costumbre de campo.',
        res: { q: 'aceptable', fx: { cumplimiento: 1 },
          out: 'Ventas cambia su plan. En Huachipa, mañana, los montos se leerán en voz alta.',
          pro: { ok: 'Evitas una exposición masiva.', risk: 'Leer montos en voz alta también expone a cada técnico.' },
          kusi: ['pensando', '¿Y el patio de Huachipa?'] } },
    ],
    rules: [[LEY, 'Ley 29733: los montos individuales son datos personales; no se comparten con terceros ni se leen en público.']],
    mirada: {
      ve: 'La forma de entregar dice tanto como el contenido. Una carta justa leída en voz alta frente a 380 personas deja de ser justa para quien recibió menos.',
    },
  },
  {
    id: 'i7', t: '18:45', ch: 'whatsapp', who: 'claudia', titulo: 'La víspera de Claudia', banner: 'assets/esc/camino.webp', lugar: 'Tu escritorio, apagando las luces del área', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Claudia te escribe otra vez: «Perdón por insistir. Solo quiero saber si mañana debo ir preparada para algo malo».</p><p>${F.has('claudia_con_jefe') ? 'Mañana estarás en la sala con ella y Renzo.' : 'Mañana no estarás en la sala.'} <mark class="clave">No puedes adelantar la carta, pero sí responderle</mark>.</p>`,
    type: 'compose', enviaA: 'claudia', para: 'Para: Claudia Puma', boton: 'Enviar el WhatsApp',
    prompt: 'Elige una frase de cada parte.',
    slots: [
      { id: 'calma', t: 'Calma', ops: [
        { id: 'k1', t: 'No tienes por qué preocuparte por haber preguntado.', ok: true, por: 'Le quitas el miedo de fondo: haber consultado.' },
        { id: 'k2', t: '¡Te va a encantar, vas a ver! 🎉', ok: false, por: 'Adelantas el contenido sin poder hacerlo.' },
      ] },
      { id: 'que', t: 'Qué esperar', ops: [
        { id: 'q1', t: 'Mañana recibirás una carta con los criterios que revisamos y lo que se decidió.', ok: true, por: 'Dices qué viene, sin el monto.' },
        { id: 'q2', t: 'Ya sabrás mañana.', ok: null, por: 'Correcto, pero frío para alguien ansioso.' },
      ] },
      { id: 'puerta', t: 'Puerta abierta', ops: [
        { id: 'p1', t: 'Si después tienes preguntas, aquí estoy.', ok: true, por: 'La consulta no termina con la carta.' },
        { id: 'p2', t: 'Después ya cerramos el tema.', ok: false, por: 'Cierra la puerta que costó abrir.' },
      ] },
    ],
    res: sel => {
      const buenas = ['k1', 'q1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { claudia: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Claudia responde con un corazón amarillo y luego: «Gracias. Hoy sí voy a dormir».' : 'Claudia responde: «Ok». Lo leerá varias veces esta noche.',
        pro: { ok: 'Calmas sin adelantar lo que no puedes y dejas la puerta abierta.', info: 'Mañana, llega diez minutos antes a la sala.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Esta noche Claudia duerme!' : 'Le faltó calma.'],
      };
    },
    mirada: { ve: 'Quien consultó por su sueldo suele temer represalias hasta el último momento. Una frase a tiempo puede cambiar cómo llega a la conversación más importante del año.' },
  },
];
