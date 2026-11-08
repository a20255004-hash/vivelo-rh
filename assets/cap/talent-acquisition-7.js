// Talent Acquisition Partner · Capítulo 7 · «El employer branding» · Semana 2, martes.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas:
// - D.S. 007-2002-TR, TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo: art. 9, el trabajo en
//   sobretiempo es voluntario, en su otorgamiento y en su prestación; art. 10, el sobretiempo se paga con un recargo
//   o, por acuerdo, se compensa con descanso; art. 10-A, el empleador debe registrarlo.
//   https://lpderecho.pe/no-firmar-formato-de-autorizacion-de-horas-extra-no-impide-reconocer-autorizacion-tacita-resolucion-613-2020-sunafil/
//   https://img.lpderecho.pe/wp-content/uploads/2021/05/Casacion-Laboral-12439-2017-La-Libertad-LP.pdf
// - D.S. 008-2002-TR (Reglamento), art. 22: el sobretiempo prestado sin disposición expresa del empleador se entiende
//   prestado con su autorización tácita y en forma voluntaria (criterio aplicado en la resolución de SUNAFIL citada arriba).
// - Ley 30709 (igualdad remunerativa), ya citada en el capítulo 5.

export const CAP = {
  n: 7, titulo: 'El employer branding', dia: 'Semana 2, martes', foto: 'assets/foto2/collage.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. En el Metropolitano, camino a San Isidro, abres por curiosidad el perfil de Código Andino en un portal de reseñas de empleadores. Tres estrellas. La reseña más reciente es de hace dos días y empieza así: «Si te ofrecen entrar al proyecto nuevo, pregunta por las horas extra».', boton: 'Leer las reseñas',
  kusi: 'La marca empleadora no se inventa en Marketing. Se gana, o se pierde, en el día a día.',
  lead: 'Leíste las reseñas buscando lo que es cierto, frenaste una campaña de reseñas falsas, ordenaste cómo corregir las horas extra, le contestaste a Camila sin maquillaje, respondiste en público y supiste qué decidió Diego.',
  reflexion: '¿Qué contaría de tu empresa alguien que se fue hace un mes?',
  siguiente: { n: 8, titulo: 'Los que aceptaron', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: '2 ofertas aceptadas' },
  { id: 'marca', p: 'Reseñas en internet', j: 'Talent · Marketing', d: 0, e: '3 estrellas · sin responder' },
  { id: 'horas', p: 'Horas extra del equipo de backend', j: 'Tecnología · Planillas', d: 0, e: 'Sin revisar' },
  { id: 'evp', p: 'Página de empleos', j: 'Talent · Marketing', d: 0, e: '«Somos una familia»' },
  { id: 'ofertas', p: 'Ofertas en curso', j: 'Talent', d: 0, e: 'Diego decide hoy' },
];

export const FUTURO = {
  resenas_leidas: ['Encontraste en las reseñas un problema real: horas extra sin pagar.', 'Lo llevaste a quien debía corregirlo.'],
  resenas_ignoradas: ['Leíste las reseñas como ataques y no como información.', 'El problema de fondo sigue ahí.'],
  respuesta_honesta: ['La empresa respondió en público reconociendo el problema y diciendo qué cambia.', 'Los candidatos lo están leyendo.'],
  resenas_falsas: ['Se lanzó una campaña para que el equipo publique reseñas positivas.', 'En la comunidad ya se comenta.'],
  sobretiempo_corregido: ['Planillas revisará el registro y se pagarán o compensarán las horas extra.', 'Renzo ya lo sabe.'],
  camila_informada: ['Le contaste a Camila lo de las horas extra y qué se está corrigiendo.', 'Decidirá con todo sobre la mesa.'],
  evp_honesta: ['La página de empleos cuenta el reto, las guardias pagadas y lo que falta mejorar.', 'Marketing dice que es «arriesgado».'],
  diego_cierre_bien: ['Cerraste lo de Diego con respeto y por escrito.', 'Sea cual sea su decisión, la puerta queda abierta.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  camila: { n: 'Camila Torres', sub: 'Backend · candidata', who: 'dev' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
  diego: { n: 'Diego Mamani', sub: 'Backend senior · candidato', c: '#6B3FA0' },
  joaquin: { n: 'Joaquín Bedoya', sub: 'Marketing', c: '#B8860B' },
};

export const WSP = [
  { chat: 'joaquin', t: '08:55', de: 'Joaquín', txt: '¿Viste las reseñas? 😱 Tengo una idea para levantarlas esta semana. ¿Te llamo a las 10?' },
  { chat: 'renzo', t: '09:40', de: 'Renzo', txt: 'Esa reseña de las horas extra… sí, es de alguien de mi equipo. Y tiene razón. En agosto nos quedamos casi todas las noches.' },
  { chat: 'camila', t: '12:40', de: 'Camila', txt: 'Hablé con Brenda y con Andrea. Me contaron cosas muy buenas y algunas no tanto. ¿Te puedo llamar?', si: 'camila_conoce_equipo' },
  { chat: 'camila', t: '12:40', de: 'Camila', txt: 'Leí unas reseñas de la empresa. ¿Te puedo llamar?', no: 'camila_conoce_equipo' },
  { chat: 'leonardo', t: '14:20', de: 'Leonardo', txt: 'Ok. Lo de agosto fue un error mío. Que Planillas revise y se pague lo que corresponda.', si: 'sobretiempo_corregido' },
  { chat: 'renzo', t: '18:30', de: 'Renzo', txt: 'Leí la respuesta pública. Es la primera vez que la empresa reconoce algo. Se lo pasé al equipo.', si: 'respuesta_honesta' },
];

export const CORREOS = [
  { t: '08:40', de: 'Portal de reseñas de empleadores', para: 'Código Andino', asunto: 'Tienes 6 reseñas nuevas', html: '<p>Calificación promedio: 3,1. Se recomienda responder a las reseñas para mejorar la percepción de los candidatos.</p>' },
  { t: '17:10', de: 'Diego Mamani', para: 'Talent Acquisition Partner', asunto: 'Mi decisión', html: '<p>Hola. Como te ofrecí, aquí va mi respuesta sobre la oferta. Te la cuento por teléfono en un rato, pero quería dejarlo también por escrito.</p><p>Diego</p>' },
];

export const QUIZ = [
  { q: 'Una reseña dice que las horas extra no se pagan. Lo primero es…', ops: ['Pedir que la borren', 'Verificar si es cierto y, si lo es, corregirlo con quien corresponda', 'Responder que es falso', 'Ignorarla'], ok: 1, por: 'Una reseña negativa es información. Si señala un incumplimiento, el problema no es la reseña.' },
  { q: 'Según el D.S. 007-2002-TR, el trabajo en sobretiempo…', ops: ['Es obligatorio si el jefe lo pide', 'Es voluntario y se paga con un recargo, o se compensa con descanso si hay acuerdo', 'No se paga en tecnología', 'Solo se paga los domingos'], ok: 1, por: 'Los arts. 9, 10 y 10-A del TUO establecen que es voluntario, se paga con recargo o se compensa por acuerdo, y debe registrarse.' },
  { q: 'Pedir al equipo que publique reseñas positivas «voluntarias» con un incentivo…', ops: ['Es buena práctica', 'Es una forma de reseñas falsas que la comunidad detecta y daña la credibilidad', 'Es obligatorio', 'No tiene efecto'], ok: 1, por: 'La marca empleadora se construye con hechos, no con reseñas fabricadas.' },
  { q: 'La mejor respuesta pública a una reseña crítica…', ops: ['Niega todo', 'Agradece, reconoce lo que es cierto y dice qué se está cambiando', 'Revela quién la escribió', 'Ataca al exempleado'], ok: 1, por: 'Los candidatos leen la respuesta tanto como la reseña.' },
  { q: 'Una propuesta de valor al empleado (EVP) honesta incluye…', ops: ['Solo lo bueno', 'El reto, las condiciones reales y también lo que la empresa está mejorando', 'Frases como «somos una familia»', 'Fotos de la mesa de ping-pong'], ok: 1, por: 'Prometer de más termina en renuncias rápidas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '08:50', ch: 'documento', who: null, titulo: 'Seis reseñas', banner: 'assets/esc/dudas.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Copias las seis reseñas nuevas en un documento y las lees despacio, con el café enfriándose. Algunas duelen. Algunas exageran.</p><p>La pregunta no es si te gustan: es <mark class="clave">cuáles señalan algo que hay que corregir</mark>.</p>`,
    type: 'flag', prompt: 'Marca las reseñas que señalan un problema real que la empresa debe corregir.',
    doc: { t: 'Reseñas de Código Andino · últimos 30 días', sub: 'Portal de reseñas de empleadores' },
    lines: [
      { id: 'horas', t: '«En agosto, para el proyecto anterior, nos quedamos casi todas las noches. Nadie registró esas horas y no se pagaron.» · Ex desarrollador', bad: LEY, why: 'El sobretiempo es voluntario y debe registrarse y pagarse con recargo, o compensarse con descanso por acuerdo.' },
      { id: 'guardia', t: '«Las guardias de fin de semana se hacían “por la camiseta”.» · Desarrolladora actual', bad: LEY, why: 'Si hubo trabajo efectivo fuera de jornada, es sobretiempo y no puede quedar sin registro ni pago.' },
      { id: 'onb', t: '«Mi primer día no tenía laptop ni accesos. Estuve tres días sin hacer nada.» · Ex QA', bad: BP, why: 'No es ilegal, pero un ingreso así hace que la gente se vaya pronto.' },
      { id: 'cafe', t: '«El café de la máquina es pésimo.» · Practicante' },
      { id: 'aprend', t: '«Aprendí muchísimo. Los tech leads tienen paciencia.» · Ex desarrollador' },
      { id: 'jefe', t: '«El CTO es brillante, pero a veces no escucha.» · Desarrollador actual' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -4 : 5, calidad: 3, etica: missLey ? -2 : 2 },
      flags: [missLey ? 'resenas_ignoradas' : 'resenas_leidas'], cartera: { marca: missLey ? 'Reseñas leídas como ataques' : 'Dos problemas reales identificados', horas: missLey ? 'Sin revisar' : 'Por revisar con Planillas' },
      out: missLey ? 'Concluyes que son «exempleados resentidos». Renzo, más tarde, te dice lo contrario.' : 'Separas lo que es ruido de lo que es un problema. Las horas extra de agosto y las guardias son lo grave; la laptop del primer día, lo urgente para los que entran. Lo del café… también es cierto, pero puede esperar.',
      pro: { ok: 'Una reseña es información que la empresa no pagó por recibir.', risk: 'Tratar todas las críticas como ataques impide ver las que señalan incumplimientos.', info: 'Contrasta con Renzo: él sabe qué pasó en agosto.' },
      kusi: missLey ? ['preocupado', 'Algunas reseñas dicen la verdad…'] : ['curioso', '¡Encontraste la aguja en el pajar!'],
    }),
    rules: [[LEY, 'El trabajo en sobretiempo es voluntario (D.S. 007-2002-TR, art. 9).'], [LEY, 'El sobretiempo se paga con un recargo o se compensa con descanso por acuerdo, y debe registrarse (D.S. 007-2002-TR, arts. 10 y 10-A).']],
    mirada: {
      ve: 'El employer branding empieza por escuchar. Las reseñas de exempleados son incómodas, pero muchas veces señalan exactamente lo que los candidatos van a preguntar. Un Talent Acquisition Partner que las lee como información sabe qué hay que arreglar antes de contar la empresa.',
      normas: [{ ley: 'D.S. 007-2002-TR, TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo, arts. 9, 10 y 10-A', dice: 'El trabajo en sobretiempo es voluntario, tanto en su otorgamiento como en su prestación. Se paga con un recargo o, por acuerdo, se compensa con descanso, y el empleador debe registrarlo.', practica: 'Las noches de agosto no son un tema de marca: son horas que hay que revisar y pagar o compensar.' }],
    },
  },
  {
    id: 'g2', t: '10:05', ch: 'llamada', who: null, titulo: 'La idea de Joaquín', banner: 'assets/foto2/callcenter.webp', show: ['etica', 'confianza'],
    body: () => `<p>Joaquín Bedoya, de Marketing, llama entusiasmado. Tiene 27 años, mil ideas por minuto y buena intención.</p><p>«Fácil: les pedimos a 30 personas del equipo que publiquen reseñas de cinco estrellas esta semana. <mark class="clave">Voluntario, ah, pero con un vale de consumo</mark> para quien lo haga. En una semana estamos en 4,5.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no a la campaña y proponer otra cosa: responder en público las reseñas críticas y corregir lo que es cierto.',
        res: { q: 'buena', fx: { etica: 5, confianza: 2 }, flags: [],
          out: 'Joaquín se desinfla. «¿Y si la respuesta pública queda mal?» Le dices que la escriben juntos y la revisa Valeria. Acepta: «Ok, pero yo pongo el diseño».',
          pro: { ok: 'Proteges la credibilidad de la empresa y del equipo.', risk: 'La calificación tardará más en subir.', info: 'Si el equipo quiere escribir reseñas por su cuenta, sin incentivo, está bien.' },
          kusi: ['animo', 'Las estrellas se ganan. ¡No se compran!'] } },
      { id: 'b', label: 'Aceptar: es voluntario y el equipo sí está contento en su mayoría.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -3 }, flags: ['resenas_falsas'],
          out: 'En tres días aparecen 22 reseñas de cinco estrellas, casi con las mismas palabras. En la comunidad de backend alguien publica una captura: «Miren cómo levanta Código Andino su puntaje». La comparten 300 personas.',
          pro: { ok: 'La calificación sube rápido.', risk: 'Reseñas con incentivo no son voluntarias de verdad, y la comunidad técnica las detecta en días.' },
          kusi: ['indignado', '¡La comunidad se dio cuenta en dos días!'] } },
      { id: 'c', label: 'Pedirle que espere a que termine el proceso de las 12 vacantes, para no distraerse.',
        res: { q: 'aceptable', fx: { tiempo: 1, confianza: -1 },
          out: 'Joaquín acepta esperar. Las reseñas siguen sin respuesta toda la semana, justo cuando los candidatos las están leyendo.',
          pro: { ok: 'Evitas la campaña.', risk: 'El silencio también comunica, sobre todo en plena búsqueda.' },
          kusi: ['pensando', 'Esperar también es responder…'] } },
    ],
    rules: [[BP, 'Las reseñas deben ser opiniones libres. Un incentivo las convierte en publicidad disfrazada.']],
    mirada: {
      ve: 'Las campañas de reseñas inducidas son tentadoras porque suben la calificación rápido, pero las comunidades técnicas son pequeñas y se dan cuenta enseguida. Una sola captura puede hacer más daño que todas las reseñas negativas juntas.',
      visual: { tipo: 'balanza', a: { t: 'Campaña con vale de consumo', items: ['4,5 estrellas en una semana', 'Reseñas parecidas entre sí', 'Captura viral en la comunidad'] }, b: { t: 'Responder y corregir', items: ['Calificación más lenta', 'Respuesta creíble', 'El problema de fondo se arregla'] } },
    },
  },
  {
    id: 'g3', t: '11:20', ch: 'sistema', who: null, titulo: 'Las noches de agosto', banner: 'assets/esc/planilla.webp', lugar: 'Registro de control de asistencia', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>${F.has('resenas_leidas') ? 'Renzo te confirmó lo de agosto: el equipo se quedó muchas noches.' : 'Renzo insiste en que la reseña de las horas extra es cierta.'} No es tu área, pero si no se corrige, no hay campaña que lo tape. Y los 12 que entran van a trabajar en ese mismo equipo.</p><p>Ordenas <mark class="clave">cómo llevarlo a quien corresponde</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para corregir el problema. Usa las flechas.', boton: 'Guardar la ruta',
    items: [
      { id: 'datos', t: 'Pedir a Planillas el registro de asistencia de agosto del equipo de backend', por: 'Primero los hechos, no las reseñas.' },
      { id: 'valeria', t: 'Contarle a Valeria lo que encontraste, con los datos', por: 'Ella decide cómo escalarlo.' },
      { id: 'leo', t: 'Reunión de Valeria y Planillas con Leonardo', por: 'Él autorizó, de hecho, esas noches.' },
      { id: 'pago', t: 'Acordar el pago con recargo o la compensación con descanso de lo trabajado', por: 'Lo que la norma pide.' },
      { id: 'comunicar', t: 'Comunicar al equipo qué se revisó y qué se va a pagar o compensar', por: 'Que se sepa por la empresa, no por una reseña.' },
      { id: 'prevenir', t: 'Definir cómo se autorizan y registran las horas extra del proyecto Cóndor Pay', por: 'Para que no se repita con los 12 nuevos.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, calidad: q === 'buena' ? 3 : 0 }, rel: { 'valeria-ta': q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['sobretiempo_corregido'], cartera: { horas: q === 'riesgosa' ? 'Sin ruta clara' : 'Planillas revisa agosto; regla nueva para Cóndor Pay' },
        out: q === 'buena' ? 'Valeria lee tu correo y llama a Planillas en ese mismo momento. A las 2, Leonardo escribe en el chat. Tú vuelves a lo tuyo: hay 12 personas que contratar en ese equipo.' : 'Valeria reordena: «Primero los datos. Si llegamos a Leo con reseñas, se defiende. Si llegamos con el registro, escucha».',
        pro: { ok: 'Llevas el problema a quien puede corregirlo, con datos.', risk: 'Si Talent «vende» la empresa sin corregir lo que está mal, los nuevos se irán por la misma razón.', info: 'El área de Talent no paga horas extra, pero sí puede hacer visible el problema.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Datos primero, y llegaste a Leo!' : 'Casi: los datos abren puertas.'],
      };
    },
    mirada: {
      ve: 'Un buen employer branding no tapa problemas: los lleva a quien puede arreglarlos. El área de Talent suele ser la primera en escuchar lo que los candidatos y exempleados dicen, y por eso tiene la responsabilidad de hacerlo llegar.',
      visual: { tipo: 'flujo', titulo: 'De la reseña a la corrección', pasos: ['Reseña', 'Registro de asistencia', 'Valeria y Planillas', 'Leonardo', 'Pago o compensación', 'Regla nueva'] },
    },
  },
  {
    id: 'g4', t: '13:10', ch: 'llamada', who: 'dev', titulo: 'Lo que escuchó Camila', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Camila te llama a la hora del almuerzo, mientras tú comes un tallarín saltado en una mesa de la terraza. ${F.has('camila_conoce_equipo') ? '«Andrea me dijo que el equipo es bueno, que aprende mucho, pero que en agosto se quedaron hasta tarde casi todas las noches. ¿Va a pasar lo mismo con Cóndor Pay?»' : '«Leí en las reseñas lo de las horas extra. ¿Va a pasar lo mismo con el proyecto nuevo?»'}</p><p>Mañana tiene la entrevista técnica. <mark class="clave">Te pregunta directo</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que sí pasó, que la empresa lo está revisando para pagarlo o compensarlo, y que para Cóndor Pay habrá una regla para autorizar y registrar las horas extra.',
        res: { q: 'buena', fx: { personas: 4, confianza: 4, etica: 3 }, rel: { dev: 1 }, flags: ['camila_informada'],
          out: 'Camila respira. «Gracias. Si me dices que no pasó nada, no te creo. Si me dices que pasó y qué hacen, te creo.» Confirma la entrevista de mañana.',
          pro: { ok: 'Le das la verdad y lo que cambia: así decide con información.', risk: 'Solo puedes prometer lo que ya está en marcha.', info: 'No inventes plazos que Planillas no te dio.' },
          kusi: ['feliz', 'Lo que pasó y lo que cambia. ¡Así se gana la confianza!'] } },
      { id: 'b', label: 'Decirle que fue algo excepcional y que eso no se va a repetir.',
        res: { q: 'aceptable', fx: { personas: 0, confianza: -1 },
          out: 'Camila dice «ok». No le diste nada concreto, solo una promesa. Va a la entrevista con una duda más.',
          pro: { ok: 'No niegas lo que pasó.', risk: 'Una promesa sin un cambio concreto detrás suena a frase.' },
          kusi: ['pensando', '¿Cómo sabes que no se va a repetir?'] } },
      { id: 'c', label: 'Decirle que las reseñas las escriben exempleados molestos y que no les haga caso.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: -4, etica: -2 }, rel: { dev: -1 },
          out: 'Hay un silencio largo. «Andrea no es exempleada.» Camila corta amable, pero fría.',
          pro: { ok: 'Ninguno.', risk: 'Desacreditar una crítica cierta destruye tu credibilidad con la candidata.' },
          kusi: ['triste', 'Ella ya sabía que era cierto…'] } },
    ],
    mirada: { ve: 'Los candidatos hablan con el equipo, leen reseñas y preguntan. Un Talent Acquisition Partner no tiene que esconder los problemas: tiene que poder contar qué pasó y qué está cambiando. Eso es vender una empresa con honestidad.' },
  },
  {
    id: 'g5', t: '15:00', ch: 'documento', who: null, titulo: 'La respuesta pública', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Borrador para el portal de reseñas', show: ['confianza', 'calidad', 'etica'],
    body: () => `<p>Valeria aprueba responder en público la reseña de las horas extra. Joaquín pone el logo y el tono; tú, el contenido. La van a leer exempleados, el equipo actual y, sobre todo, <mark class="clave">los 18 candidatos que hoy están en proceso</mark>.</p>`,
    type: 'compose', enviaA: 'valeria', para: 'Para: Valeria Núñez · aprobación', boton: 'Enviar el borrador a Valeria',
    prompt: 'Arma la respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'inicio', t: 'Cómo empiezas', ops: [
        { id: 'i1', t: 'Gracias por contarlo. Tienes razón en algo importante.', ok: true, por: 'Reconoce sin rodeos.' },
        { id: 'i2', t: 'Lamentamos que tengas esa percepción.', ok: false, por: 'Convierte un hecho en una «percepción».' },
      ] },
      { id: 'hecho', t: 'Qué reconoces', ops: [
        { id: 'h1', t: 'En agosto, el equipo trabajó horas extra que no se registraron como correspondía.', ok: true },
        { id: 'h2', t: 'Fue un mes muy exigente para todos.', ok: false, por: 'Evita decir qué pasó.' },
      ] },
      { id: 'cambio', t: 'Qué cambia', ops: [
        { id: 'c1', t: 'Estamos revisando esas horas para pagarlas o compensarlas, y definimos cómo se autorizarán y registrarán en adelante.', ok: true, por: 'Concreto y verificable.' },
        { id: 'c2', t: 'Seguimos trabajando para ser cada día mejores.', ok: false, por: 'Frase vacía.' },
      ] },
      { id: 'contacto', t: 'Cierre', ops: [
        { id: 'k1', t: 'Si trabajaste con nosotros en ese periodo, escríbenos a talent@codigoandino.pe.', ok: true, por: 'Abre un canal para resolver.' },
        { id: 'k2', t: 'Te deseamos éxitos en tus nuevos retos.', ok: null, por: 'Amable, pero cierra la conversación.' },
      ] },
    ],
    res: sel => {
      const buenas = ['i1', 'h1', 'c1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'riesgosa' ? -2 : 1, etica: q === 'buena' ? 3 : 0, calidad: 2 },
        flags: q === 'buena' ? ['respuesta_honesta'] : [], cartera: { marca: q === 'buena' ? 'Respuesta pública: reconoce y dice qué cambia' : 'Respuesta pública genérica' },
        out: q === 'buena' ? 'Valeria la aprueba con un solo cambio de coma. Joaquín la publica a las 4. A las 6 tiene 40 «útil» y un comentario: «Primera empresa que veo que responde así».' : q === 'riesgosa' ? 'La respuesta sale y suena a comunicado. Alguien responde debajo: «Traducción: no vamos a pagar nada».' : 'La respuesta es correcta, pero no dice mucho.',
        pro: { ok: 'Una respuesta que reconoce y dice qué cambia convence más que cualquier campaña.', risk: 'Una respuesta de plantilla confirma lo que dice la reseña.', info: 'Solo publica lo que la empresa ya decidió hacer.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡40 «útil» en dos horas!' : 'Eso suena a comunicado…'],
      };
    },
    mirada: { ve: 'En una plataforma de reseñas, la respuesta de la empresa la leen más candidatos que la reseña misma. Reconocer el hecho, decir qué se está corrigiendo y abrir un canal es más creíble que negar o que cualquier frase de valores.' },
  },
  {
    id: 'g6', t: '16:20', ch: 'documento', who: null, titulo: 'La página de empleos', banner: 'assets/foto2/presentacion.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Joaquín quiere aprovechar el día para renovar la página de empleos, la que «se ve del 2015». Hoy dice «Somos una gran familia» encima de una foto de la mesa de ping-pong.</p><p>Te pide el contenido. Tu condición: <mark class="clave">que no prometa nada que un candidato no vaya a encontrar</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la página.', boton: 'Guardar el contenido',
    bloques: [
      { id: 'reto', t: 'El trabajo', n: 2, ops: [
        { id: 'r1', t: 'Los proyectos reales: una app de pagos para comercios en Colombia.', ok: true },
        { id: 'r2', t: 'Cómo se aprende aquí: revisión de código y tech leads que acompañan.', ok: true, por: 'Lo confirmó una reseña positiva.' },
        { id: 'r3', t: '«Trabaja con las últimas tecnologías del mundo.»', ok: false, por: 'Promesa vaga que todos hacen.' },
      ] },
      { id: 'cond', t: 'Las condiciones', n: 2, ops: [
        { id: 'c1', t: 'Modalidad híbrida, guardias rotativas pagadas y rango salarial en cada aviso.', ok: true, por: 'Lo que preguntan todos.' },
        { id: 'c2', t: 'Laptop y accesos listos desde el primer día.', ok: null, por: 'Solo si es verdad. Hoy no lo es para todos.' },
        { id: 'c3', t: '«Horario flexible: trabaja cuando quieras.»', ok: false, por: 'No es cierto con dailies a las 9:30.' },
      ] },
      { id: 'mejora', t: 'Lo que estamos mejorando', n: 1, ops: [
        { id: 'm1', t: 'Más mujeres en el área técnica y un proceso de selección revisado para lograrlo.', ok: true, por: 'Reconoce y compromete.' },
        { id: 'm2', t: 'Nada: la página es para mostrar lo bueno.', ok: false, por: 'Los candidatos ya saben lo que falta.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .55 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['evp_honesta'] : [], cartera: { evp: q === 'buena' ? 'Contenido honesto: reto, condiciones y lo que falta' : 'Contenido con promesas vagas' },
        out: q === 'buena' ? 'Joaquín lee el bloque de «lo que estamos mejorando» y se asusta: «¿Esto no es arriesgado?». Valeria responde por ti: «Es lo más creíble de la página».' : 'La página queda más bonita, pero dice lo mismo que todas.',
        pro: { ok: 'Una propuesta de valor honesta atrae a quien de verdad va a quedarse.', risk: 'Lo que la página promete y la empresa no cumple aparece en la siguiente reseña.', info: 'Lo de la laptop el primer día: primero se cumple, luego se publica.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una página que no miente!' : '¿El candidato encontrará eso al entrar?'],
      };
    },
    mirada: {
      ve: 'La propuesta de valor al empleado (EVP) es lo que la empresa ofrece a cambio del trabajo: reto, aprendizaje, condiciones, cultura. Para que funcione tiene que ser verificable: si la página dice algo que el candidato no encuentra al entrar, la marca se rompe en el primer mes.',
      visual: { tipo: 'cambio', titulo: 'La página, antes y después', pares: [['Somos una gran familia', 'Una app de pagos para comercios en Colombia'], ['Mesa de ping-pong', 'Guardias pagadas y rango en cada aviso'], ['(nada)', 'Lo que estamos mejorando']] },
    },
  },
  {
    id: 'g7', t: '17:20', ch: 'llamada', who: null, titulo: 'La decisión de Diego', banner: 'assets/foto2/caminan.webp', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Diego te llama, como prometió. ${F.has('diego_paquete') ? '«Lo conversamos con mi esposa. Lo de EsSalud para mi hija y los beneficios pesaron más que los dólares. Acepto.»' : F.has('diego_promesa') ? '«Me dijiste que iban a igualar los dólares. Rocío me mandó la oferta y es el tope de la banda, no los dólares. ¿Qué pasó?»' : '«Te soy sincero: el ultimátum me incomodó. Firmé con Miami ayer.»'}</p><p><mark class="clave">Le respondes</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Agradecerle con sinceridad, confirmar por escrito lo que se acordó (o reconocer el error, si lo hubo) y dejar la puerta abierta.',
        res: { q: 'buena', fx: { confianza: 4, personas: 3 }, flags: ['diego_cierre_bien'], cartera: { ofertas: 'Diego: cierre por escrito y con respeto' },
          out: 'Diego responde: «Así da gusto». Esa noche, en LinkedIn, te deja una recomendación de dos líneas: «Una persona de Talent que no te vende humo».',
          pro: { ok: 'Cierras con respeto, firme o no, y reconoces lo que hiciste mal.', risk: 'Ninguno: un senior que se va bien vuelve o recomienda.', info: 'Registra en el ATS el motivo exacto de su decisión.' },
          kusi: ['feliz', 'Cerrar bien también es atraer.'] } },
      { id: 'b', label: 'Ofrecerle algo más fuera de banda en ese momento, sin consultar, para no perderlo o para arreglar la situación.',
        res: { q: 'riesgosa', fx: { confianza: -3, cumplimiento: -3 }, rel: { 'valeria-ta': -1 },
          out: 'Diego se queda dudando. Valeria, cuando se entera, te llama: «No puedes ofrecer lo que no puedes firmar. Ya lo hablamos». Rocío ni te mira.',
          pro: { ok: 'Intentas salvar la contratación.', risk: 'Ofrecer fuera de banda sin aprobación rompe la equidad y tu credibilidad con tu propia jefa.' },
          kusi: ['preocupado', 'Otra promesa sin firma…'] } },
    ],
    mirada: { ve: 'Cómo termina un proceso dice tanto de la empresa como cómo empieza. Un candidato senior que se va bien tratado recomienda, vuelve en un año o refiere a otros. Uno que se va con una promesa rota lo cuenta en la comunidad.' },
  },
];
