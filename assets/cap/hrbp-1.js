// HR Business Partner · Capítulo 1 · «El nuevo gerente» · Semana 1, lunes.
// Hilo del mes: acompañar a un gerente comercial nuevo que quiere reestructurar 12 zonas en 8.
// Normas citadas: TUO del D.Leg. 728 (D.S. 003-97-TR): el despido requiere causa justa relacionada con la capacidad o
// la conducta; el cese colectivo por motivos económicos, tecnológicos, estructurales o análogos tiene un procedimiento
// propio ante la Autoridad de Trabajo. Ley 26772 (no discriminación por edad).

export const CAP = {
  n: 1, titulo: 'El nuevo gerente', dia: 'Semana 1, lunes', foto: 'assets/foto/reunion-jefa.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '08:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Ate, planta y oficinas de Nutrimás. Hoy empiezas como HR Business Partner del área Comercial, y su gerente es nuevo.', boton: 'Ir a la oficina de Mauricio',
  kusi: 'Un HRBP no es el que dice «sí» ni el que dice «no»: es el que pregunta «¿para qué?». ¡Dale!',
  lead: 'Llevaste a Mauricio del «a quién sacamos» al «qué problema resolvemos», buscaste datos antes de opinar, no le mentiste a Susana y calmaste un rumor sin revelar nada.',
  reflexion: '¿Cuándo sentiste hoy que eras «socia» del negocio y cuándo «defensora» de las personas?',
  siguiente: { n: 2, titulo: 'Los datos', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan «de 12 zonas a 8»', j: 'Mauricio · Comercial', d: 0, e: 'Diapositivas, sin datos' },
  { id: 'rotacion', p: 'Rotación de vendedores', j: 'Andrea · Gestión Humana', d: 0, e: '45 % anual' },
  { id: 'supervisores', p: '12 supervisores de zona', j: 'Mauricio · Comercial', d: 0, e: 'Inquietos' },
  { id: 'rumor', p: 'Rumor en el grupo de vendedores', j: 'Kenji · Ventas', d: 0, e: '«Van a botar a 100»' },
];

export const FUTURO = {
  problema_primero: ['Mauricio aceptó definir el problema antes de cortar zonas.', 'Te pedirá datos el miércoles. Capítulo 2.'],
  antiguos_fuera: ['No frenaste la idea de sacar «a los más antiguos».', 'Andrea te preguntará por qué en el capítulo 3.'],
  susana_honesta: ['Le dijiste a Susana la verdad que podías decir.', 'Confiará en ti en el capítulo 5.'],
  susana_mentira: ['Le aseguraste a Susana que no habría cambios.', 'Se sentirá engañada en el capítulo 5.'],
  rumor_calmado: ['El rumor se calmó con un mensaje honesto de Mauricio.', 'Kenji te escribirá en el capítulo 4.'],
};

export const CHATS = {
  grupo: { n: 'Gestión Humana · HRBP', sub: 'Andrea y los HRBP', c: '#6B5BA8' },
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  susana: { n: 'Susana Vargas', sub: 'Supervisora de ventas', who: 'susana' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
};

export const WSP = [
  { chat: 'grupo', t: '07:50', de: 'Andrea', txt: 'Bienvenida 💜 Hoy conoces a Mauricio. Viene con todo. Tú acompáñalo, no le tengas miedo.' },
  { chat: 'susana', t: '12:05', de: 'Susana', txt: '¿Me regalas 10 minutos? Estoy en la cafetería.' },
  { chat: 'kenji', t: '16:40', de: 'Kenji', txt: 'Oye, en el grupo dicen que van a botar a 100 vendedores. ¿Es verdad? 😟' },
  { chat: 'mauricio', t: '17:50', de: 'Mauricio', txt: 'Ok, el miércoles revisamos los datos antes de mover zonas. Pero tráeme números, no opiniones.', si: 'problema_primero' },
  { chat: 'kenji', t: '19:00', de: 'Kenji', txt: 'Ya vi el mensaje de Mauricio. Al menos dijo algo 🙏', si: 'rumor_calmado' },
];

export const CORREOS = [
  { t: '07:45', de: 'Andrea Salazar', para: 'HR Business Partner · Comercial', asunto: 'Tu primer cliente interno', html: '<p>Bienvenida. Desde hoy eres la HRBP de Comercial: 300 personas, 12 zonas y un gerente recién llegado, Mauricio Lerner, que viene de una multinacional y quiere resultados rápidos.</p><p>Tu trabajo es que sus decisiones sobre personas sean buenas para el negocio, justas y legales. Las tres cosas a la vez.</p><p>Andrea</p>' },
];

export const QUIZ = [
  { q: '¿Qué hace un HR Business Partner?', ops: ['Solo planillas', 'Acompaña a un área del negocio para que sus decisiones sobre personas sirvan a sus objetivos', 'Solo selección', 'Defiende siempre al gerente'], ok: 1, por: 'Conecta la estrategia del área con la gestión de personas.' },
  { q: 'Despedir a alguien «por ser antiguo y caro»…', ops: ['Es una causa justa', 'No es causa justa y puede ser discriminación por edad', 'Es legal si se paga más', 'Es un cese colectivo'], ok: 1, por: 'El despido requiere causa justa relacionada con la capacidad o la conducta; la edad no lo es.' },
  { q: 'Un cese colectivo por motivos estructurales…', ops: ['Se decide en una reunión', 'Tiene un procedimiento propio ante la Autoridad de Trabajo', 'No existe en el Perú', 'Solo lo decide el sindicato'], ok: 1, por: 'El TUO del D.Leg. 728 regula causas objetivas como motivos económicos o estructurales, con un procedimiento específico.' },
  { q: 'Una supervisora te pregunta si la van a despedir y el plan es confidencial. ¿Qué haces?', ops: ['Le cuentas todo', 'Le dices que no habrá ningún cambio', 'No mientes: le dices que hay una revisión en curso y que será informada a tiempo', 'La evitas'], ok: 2, por: 'Puedes guardar confidencialidad sin mentir.' },
  { q: 'Ante un plan de reestructuración, la primera pregunta de un HRBP es…', ops: ['¿A quién sacamos?', '¿Qué problema del negocio queremos resolver?', '¿Cuánto cuesta la liquidación?', '¿Cuándo lo anunciamos?'], ok: 1, por: 'Sin definir el problema, la solución puede ser la equivocada.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '08:10', ch: 'presencial', who: 'mauricio', titulo: '«De 12 zonas a 8»', banner: 'assets/foto2/presentacion.webp', lugar: 'Oficina de la Gerencia Comercial', show: ['confianza', 'cumplimiento', 'etica'],
    body: () => `<p>Mauricio tiene la laptop abierta en una diapositiva con un mapa de Lima dividido en colores. Habla rápido.</p><p>«Doce zonas es demasiado. Paso a ocho. Me sobran cuatro supervisores y unos 40 vendedores. <mark class="clave">Empecemos por los más antiguos, que son los más caros</mark>. ¿Para cuándo me tienes la lista?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Preguntarle qué problema quiere resolver con el cambio y proponerle revisar los datos antes de decidir a quién afecta.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 4, etica: 3 }, rel: { mauricio: 0 }, flags: ['problema_primero'], cartera: { plan: 'Definir el problema antes de mover zonas' },
          out: 'Mauricio se detiene: «El problema es que las ventas no crecen y la rotación es altísima». Le dices que, si la rotación es el problema, sacar a los antiguos podría empeorarlo. Se queda pensando.',
          pro: { ok: 'Mueves la conversación del «a quién» al «para qué». Y evitas un criterio discriminatorio.', risk: 'Mauricio espera rapidez: tienes que traerle datos pronto.', info: 'Pregúntale cómo medirá el éxito del cambio en seis meses.' },
          kusi: ['celebra', '¡Pregunta de socia de negocio!'] } },
      { id: 'b', label: 'Decirle que prepararás la lista por antigüedad y costo, como lo pide: es el gerente y su área necesita resultados.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -5, confianza: 2 }, rel: { mauricio: 1 }, flags: ['antiguos_fuera'],
          out: 'Mauricio sonríe: «Por fin alguien de RR.HH. que ayuda». Acabas de aceptar un criterio que discrimina por edad y que no es causa justa de despido.',
          pro: { ok: 'Mauricio queda satisfecho hoy.', risk: 'Despedir por antigüedad o edad no es causa justa; puede ser despido arbitrario o discriminatorio.' },
          kusi: ['preocupado', 'Ser rápida no es ser buena socia…'] } },
      { id: 'c', label: 'Decirle que eso no se puede hacer.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -4 }, rel: { mauricio: -1 },
          out: '«En mi anterior empresa lo hacíamos», responde, y te cierra la laptop. Ahora te ve como un obstáculo.',
          pro: { ok: 'Frenas un criterio ilegal.', risk: 'Un «no» sin alternativa te saca de la conversación donde se toman las decisiones.' },
          kusi: ['pensando', 'El no era correcto… ¿y el cómo sí?'] } },
    ],
    rules: [[LEY, 'El despido requiere causa justa relacionada con la capacidad o la conducta del trabajador (TUO del D.Leg. 728).'], [LEY, 'Discriminar por edad está prohibido (Ley 26772).']],
    mirada: {
      ve: 'Un HRBP no es el que obedece ni el que bloquea: es el que pregunta para qué. Si la reestructuración busca vender más, los datos dirán dónde está el problema; quizás no está en las zonas, sino en por qué se van los vendedores.',
      visual: { tipo: 'cambio', titulo: 'De la pregunta del gerente a la del HRBP', pares: [['¿A quién sacamos?', '¿Qué problema resolvemos?'], ['Los más antiguos y caros', 'Los datos de ventas y rotación'], ['Una lista para el viernes', 'Un diagnóstico para el miércoles']] },
      normas: [{ ley: 'TUO del D.Leg. 728, D.S. 003-97-TR', dice: 'El despido debe fundarse en una causa justa relacionada con la capacidad o la conducta del trabajador. Las reducciones por motivos económicos o estructurales tienen un procedimiento de cese colectivo propio.', practica: 'Antigüedad y costo no son causas justas de despido individual.' }],
    },
  },
  {
    id: 'p2', t: '10:30', ch: 'documento', who: null, titulo: 'Qué mirar primero', banner: 'assets/esc/lupa.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Tienes hasta el miércoles para llevarle datos a Mauricio. Hoy solo te da para pedir y revisar <mark class="clave">dos fuentes</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos fuentes de datos que pedirás hoy.', boton: 'Pedir estos datos', resumen: 'Pediste',
    cols: ['Fuente', 'Qué te podría decir'],
    rows: [
      { id: 'rot', cells: ['Rotación de vendedores por zona y por supervisor', 'Dónde se va la gente y con quién'] },
      { id: 'ventas', cells: ['Ventas por zona en los últimos 12 meses', 'Qué zonas rinden y cuáles no'] },
      { id: 'salida', cells: ['Entrevistas de salida del último año', 'Por qué se van'] },
      { id: 'edad', cells: ['Lista de vendedores ordenada por edad y sueldo', 'Quiénes son «caros»'] },
      { id: 'redes', cells: ['Reseñas de la empresa en internet', 'Imagen como empleador'] },
    ],
    score: { rot: 3, ventas: 3, salida: 2, edad: -4, redes: 0 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.includes('edad') ? -4 : 2 },
        cartera: { rotacion: picks.includes('rot') ? 'Rotación por supervisor pedida' : '45 % anual, sin detalle' },
        out: picks.includes('rot') ? 'A las 16:00 llega el primer cruce: tres supervisores concentran el 60 % de las renuncias. El problema podría no ser la cantidad de zonas.' : 'Llegan datos útiles, pero falta la pieza que explica la rotación.',
        pro: { ok: 'Rotación por supervisor y ventas por zona permiten separar problemas de estructura y de liderazgo.', risk: 'Ordenar por edad y sueldo te pone a pensar en a quién sacar, no en qué resolver.', info: 'Si tres supervisores concentran las renuncias, el problema es de liderazgo, no de mapa.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Ahí hay una pista enorme!' : '¿Qué dato explica la rotación?'],
      };
    },
    rules: [[BP, 'Antes de opinar sobre una reestructuración, cruza datos de negocio con datos de personas.']],
    mirada: {
      ve: 'La rotación promedio esconde dónde está el problema. Cuando se abre por supervisor, aparecen patrones: a veces la gente no se va de la empresa, se va de un jefe.',
      visual: { tipo: 'embudo', titulo: 'Renuncias del último año', niveles: [['Todas las renuncias', 135], ['En las zonas de 3 supervisores', 81], ['En las otras 9 zonas', 54]] },
    },
  },
  {
    id: 'p3', t: '12:15', ch: 'presencial', who: 'susana', titulo: 'Susana pregunta', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Susana lleva 15 años en Nutrimás. Empezó como vendedora de ruta y su zona es una de las que más vende. Te espera con dos cafés.</p><p>«Dicen que el nuevo gerente va a cerrar zonas. Tengo 52 años y dos hijos en la universidad. Dime la verdad: <mark class="clave">¿me van a sacar?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que hay una revisión en curso, que no puedes darle detalles, que no se ha decidido nada sobre personas y que será informada a tiempo y con respeto.',
        res: { q: 'buena', fx: { personas: 4, etica: 4, confianza: 2 }, rel: { susana: 1 }, flags: ['susana_honesta'],
          out: 'Susana te mira largo rato. «Al menos no me mientes.» Toma su café y se va. No se fue tranquila, pero se fue confiando en ti.',
          pro: { ok: 'Guardas la confidencialidad sin mentir.', risk: 'Susana sigue preocupada: la incertidumbre duele.', info: 'Cuéntale a Mauricio que el rumor ya llegó a los supervisores: la comunicación no puede esperar.' },
          kusi: ['animo', 'Sin mentir y sin traicionar la confianza.'] } },
      { id: 'b', label: 'Decirle que no se preocupe, que su zona vende mucho y que seguramente no habrá cambios para ella.',
        res: { q: 'riesgosa', fx: { personas: 2, etica: -4 }, rel: { susana: 1 }, flags: ['susana_mentira'],
          out: 'Susana sonríe aliviada. Tú no sabes si eso es verdad.',
          pro: { ok: 'Susana se tranquiliza hoy.', risk: 'Si la decisión cambia, habrás perdido su confianza y la de todos a quienes se lo cuente.' },
          kusi: ['preocupado', '¿Y si no es así?'] } },
      { id: 'c', label: 'Contarle lo que sabes del plan para que se prepare.',
        res: { q: 'riesgosa', fx: { etica: -3, confianza: -5 }, rel: { mauricio: -1 },
          out: 'Susana te agradece. A las 15:00, los 12 supervisores conocen el plan de Mauricio, con detalles.',
          pro: { ok: 'Eres honesta con Susana.', risk: 'Rompiste la confidencialidad de una decisión que ni siquiera está tomada.' },
          kusi: ['sorpresa', '¡Eso no era tuyo para contarlo!'] } },
    ],
    rules: [[BP, 'Puedes guardar confidencialidad sin mentir: di lo que puedes decir y comprométete con un tiempo.']],
    mirada: {
      ve: 'El HRBP vive entre la confidencialidad del negocio y la confianza de las personas. La salida no es elegir una: es no mentir nunca, aunque no puedas decirlo todo.',
      visual: { tipo: 'balanza', a: { t: 'Tranquilizarla con una promesa', items: ['Alivio hoy', 'Riesgo de traición mañana'] }, b: { t: 'Verdad posible', items: ['Confidencialidad respetada', 'Confianza intacta', 'Compromiso de informar a tiempo'] } },
    },
  },
  {
    id: 'p4', t: '16:50', ch: 'whatsapp', who: null, titulo: 'El rumor', banner: 'assets/foto2/callcenter.webp', show: ['personas', 'confianza', 'calidad'],
    body: () => `<p>Kenji, vendedor de ruta, te reenvía un audio del grupo de vendedores: «Van a botar a 100». El audio ya tiene 80 reproducciones.</p><p>Le escribes a Mauricio para proponerle qué hacer.</p>`,
    type: 'compose', enviaA: 'mauricio', para: 'Para: Mauricio Lerner · Gerente Comercial', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'El hecho', ops: [
        { id: 'h1', t: 'Mauricio, en el grupo de vendedores circula un audio que dice que van a despedir a 100 personas.', ok: true, por: 'Le das el hecho concreto, sin dramatizar.' },
        { id: 'h2', t: 'Mauricio, la gente está muy mal por tu plan.', ok: false, por: 'Suena a reproche y no dice qué pasó.' },
      ] },
      { id: 'propuesta', t: 'La propuesta', ops: [
        { id: 'p1', t: 'Te propongo enviar hoy un mensaje corto: que estamos revisando cómo organizar mejor las zonas, que no hay decisiones sobre personas y que les informarás en persona.', ok: true, por: 'Verdadero, breve y sin prometer lo que no sabes.' },
        { id: 'p2', t: 'Te propongo desmentir todo y decir que no habrá ningún cambio.', ok: false, por: 'Si luego hay cambios, el desmentido destruye la confianza.' },
        { id: 'p3', t: 'Mejor no decir nada y que se calme solo.', ok: false, por: 'El silencio alimenta los rumores.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Si te parece, te lo dejo redactado en diez minutos.', ok: true, por: 'Le facilitas la acción.' },
        { id: 'c2', t: 'Tú verás.', ok: false, por: 'Te desentiendes del problema.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : -1, confianza: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 2 : 0 }, rel: { mauricio: q === 'buena' ? 1 : 0, kenji: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['rumor_calmado'] : [], cartera: { rumor: q === 'buena' ? 'Mensaje de Mauricio enviado a las 18:30' : 'El audio sigue circulando' },
        out: q === 'buena' ? 'Mauricio responde: «Ok, redáctalo». A las 18:30 su mensaje llega al grupo. El audio deja de reenviarse.' : 'Mauricio responde con un «ok». El audio llega a 200 reproducciones.',
        pro: { ok: 'Ante un rumor, un mensaje verdadero, breve y a tiempo vale más que un desmentido total.', info: 'Lo que se dice hoy tendrá que sostenerse cuando se tome la decisión.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Rumor apagado con verdad!' : 'El silencio también comunica.'],
      };
    },
    rules: [[BP, 'Ante un rumor, comunica pronto lo que es verdad, sin prometer lo que no sabes.']],
    mirada: {
      ve: 'Los rumores llenan el vacío que deja la falta de información. Un HRBP no puede contarlo todo, pero sí ayudar al gerente a decir algo verdadero antes de que el miedo hable por él.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje que apaga un rumor', txt: 'Equipo: estamos revisando cómo organizar mejor nuestras zonas para crecer. No hay decisiones tomadas sobre personas. Cuando haya novedades, se las contaré yo mismo, en persona. Mauricio.' },
    },
  },
  {
    id: 'p5', t: '19:00', ch: 'correo', who: null, titulo: 'Para Andrea', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Andrea Salazar', to: 'HR Business Partner · Comercial', asunto: '¿Cómo te fue con Mauricio?' },
    body: () => `<p>Cuéntame en corto cómo te fue con Mauricio y <mark class="clave">qué riesgo ves</mark>.</p><p>Andrea</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'El criterio que frenaste, la pista de los supervisores y el riesgo del rumor.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { andrea: 1 }, responde: 'Andrea: 1) Mauricio quería reducir zonas empezando por los más antiguos; le propuse definir el problema con datos antes de decidir. 2) Pista: tres supervisores concentran el 60 % de las renuncias. 3) Riesgo: el rumor de 100 despidos ya corre; Mauricio envió hoy un mensaje honesto.',
          out: 'Andrea responde: «Excelente primer día. El miércoles entro contigo a la reunión de datos».', kusi: ['feliz', '¡Socia del negocio y de las personas!'] } },
      { id: 'b', label: 'Que Mauricio es complicado pero que lo vas a manejar.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Andrea: Mauricio es complicado, pero lo voy a manejar 💪',
          out: 'Andrea responde con un emoji. No sabe que el plan pasaba por sacar a los más antiguos.', kusi: ['pensando', 'Andrea necesitaba saber el riesgo.'] } },
    ],
    mirada: { ve: 'Un HRBP informa a su gerencia de Gestión Humana lo que puede convertirse en riesgo legal o humano, antes de que lo haga una denuncia.' },
  },
];
