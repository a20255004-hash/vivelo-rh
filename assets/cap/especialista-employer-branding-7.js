// Analista de Comunicación Interna y Employer Branding · Capítulo 7 · «Los embajadores» · Semana 2, martes.
// Hilo de las dos semanas: lo que dices afuera debe ser verdad adentro. Hoy propones que la gente cuente su experiencia, si quiere.
// Normas citadas (texto oficial en docs/normas/txt):
// - Constitución Política del Perú, art. 2 inc. 4 (libertad de opinión y expresión) e inc. 7 (voz e imagen propias).
//   Archivo: Constitucion-Politica-del-Peru-1993.txt
// - Ley 29733: art. 5 (consentimiento), art. 6 (finalidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf

export const CAP = {
  n: 7, titulo: 'Los embajadores', dia: 'Semana 2, martes', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'Banco Andino · Sede central de San Isidro, piso 9',
  inicio: '08:15', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. Kiara te muestra en su pantalla las fotos del sábado: Wilson riéndose con su credencial torcida, Rosa de Huancayo con su chompa de alpaca. Nadie parece modelo. Todos parecen verdad.', boton: 'Ver las fotos',
  kusi: 'Un embajador no se nombra: se anima solo. ¡Hoy toca invitar, no ordenar!',
  lead: 'Escuchaste las condiciones de Jhoselyn, diseñaste un programa de embajadores voluntario, le pusiste límites a las metas de Marketing, limpiaste una guía que censuraba y ayudaste a que un testimonio dijera la verdad completa.',
  reflexion: '¿Compartirías en tus redes algo bueno de tu trabajo? ¿Qué tendría que pasar para que lo hicieras sin que nadie te lo pida?',
  siguiente: { n: 8, titulo: 'La feria', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'embajadores', p: 'Programa de embajadores', j: 'Tú · Fiorella', d: 6, e: 'Propuesta hoy' },
  { id: 'campana', p: 'Campaña «Tu primer gran trabajo»', j: 'Marco · Kiara', d: 6, e: 'Fotos listas' },
  { id: 'rumor', p: 'Preguntas de agencias', j: 'Tú', d: 6, e: '17 preguntas, 5 pendientes' },
  { id: 'feria', p: 'Feria laboral universitaria', j: 'Tú · Selección', d: 6, e: 'Mañana' },
];

export const FUTURO = {
  jhoselyn_embajadora: ['Jhoselyn aceptó contar su historia, con sus condiciones.', 'Su testimonio se publicará y la gente lo va a leer. Capítulo 9.'],
  embajadores_voluntarios: ['El programa de embajadores es voluntario, sin metas de publicaciones.', 'Lo que publiquen será creíble.'],
  embajadores_obligados: ['El programa tiene metas de publicaciones y bono.', 'Alguien publicará por cumplir. Capítulo 9.'],
  guia_limpia: ['La guía del embajador no censura ni pide datos de clientes.', 'Legal la aprobó con una sola observación.'],
  testimonio_honesto: ['El testimonio de Jhoselyn dice lo bueno y lo que todavía falta.', 'Será el más compartido de la campaña. Capítulo 10.'],
  testimonio_editado: ['Al testimonio de Jhoselyn le quitaron la parte del horario.', 'Ella lo notará.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  jhoselyn: { n: 'Jhoselyn Ccori', sub: 'Cajera · agencia Comas', who: 'cajera' },
  embajadores: { n: 'Embajadores Andino', sub: '8 voluntarios y tú', c: '#6B46C1' },
};

export const WSP = [
  { chat: 'equipo', t: '08:20', de: 'Kiara', txt: 'Miren a Rosa de Huancayo 😍 Dijo que es la primera foto profesional de su vida.', si: 'campana_real' },
  { chat: 'equipo', t: '08:20', de: 'Kiara', txt: 'Las fotos de los modelos ya están. Bonitas… pero no conozco a nadie 😶', si: 'campana_modelos' },
  { chat: 'marco', t: '09:30', de: 'Marco', txt: 'Lo de los embajadores me encanta. Pero necesito números: ¿cuántos posts por semana me das?' },
  { chat: 'equipo', t: '13:00', de: 'Fiorella', txt: 'Gerencia aprobó: no habrá revisión de grupos de WhatsApp. Gracias por el argumento 🙌', si: 'grupos_respetados' },
  { chat: 'embajadores', t: '16:10', de: 'Wilson', txt: '¡Presente! 🙋‍♂️ ¿Podemos contar también lo que no nos gusta? Pregunto nomás.', si: 'embajadores_voluntarios' },
  { chat: 'jhoselyn', t: '18:30', de: 'Jhoselyn', txt: 'Leí el texto. Así sí lo firmo. Gracias por no quitarme lo del horario.', si: 'testimonio_honesto' },
];

export const CORREOS = [
  { t: '08:30', de: 'Formulario de preguntas anónimas', para: 'Comunicación Interna', asunto: '23 preguntas nuevas', html: '<p>Las más repetidas: «¿El cuadre después del cierre se va a pagar?» (9 veces), «¿Cierran más agencias?» (6), «¿Cuándo es la conversación con Operaciones?» (4).</p>', si: 'preguntas_abiertas' },
  { t: '14:30', de: 'Legal', para: 'Comunicación Interna', asunto: 'Guía del embajador', html: '<p>Revisamos la guía. Una observación: dejar claro que el banco no usará las cuentas personales de los colaboradores ni los datos de sus contactos. Por lo demás, conforme.</p>', si: 'guia_limpia' },
];

export const QUIZ = [
  { q: 'Un programa de embajadores de marca empleadora funciona mejor cuando…', ops: ['Cada persona tiene una meta de posts', 'Es voluntario y la gente cuenta su experiencia con sus palabras', 'Los jefes eligen a los embajadores', 'Hay un guion obligatorio'], ok: 1, por: 'Lo que se publica por obligación se nota, y le quita credibilidad a todo el programa.' },
  { q: 'La guía dice «prohibido publicar en tus redes personales cualquier crítica al banco». Eso…', ops: ['Protege la marca', 'Choca con la libertad de opinión y expresión, y destruye la credibilidad de los embajadores', 'Es obligatorio en bancos', 'Es un buen límite'], ok: 1, por: 'La Constitución reconoce la libertad de opinión y expresión (art. 2 inc. 4). Otra cosa es la reserva sobre información confidencial del banco o de clientes.' },
  { q: 'Un embajador quiere publicar una foto con un cliente feliz y su nombre. ¿Qué haces?', ops: ['Adelante: es buena publicidad', 'Sin el consentimiento del cliente, no; y nunca con datos de su relación con el banco', 'Solo si el cliente es mayor de edad', 'Solo en Instagram'], ok: 1, por: 'La imagen y los datos del cliente son suyos; su uso requiere consentimiento (Ley 29733, art. 5).' },
  { q: 'Jhoselyn quiere que su testimonio diga que todavía sale tarde algunos días. Lo mejor es…', ops: ['Quitarlo: es una campaña', 'Dejarlo: lo bueno y lo que falta hacen creíble el testimonio', 'Pedirle que no participe', 'Cambiarlo por «siempre salgo a mi hora»'], ok: 1, por: 'Un testimonio con matices es más creíble que uno perfecto. Y es suyo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '08:40', ch: 'llamada', who: 'cajera', titulo: 'Las condiciones de Jhoselyn', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Jhoselyn te llama desde la cocinita de la agencia, antes de abrir. Se escucha la máquina de café. ${F.has('jhoselyn_invitada') ? '«Ya lo hablé con mi mamá. Sí quiero contar mi historia.' : '«Don Abel me contó lo de la campaña.'} <mark class="clave">Pero tengo condiciones</mark>.»</p><p>Tienes cinco minutos antes de que abran la reja.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Jhoselyn.',
    opts: [
      { id: 'cond', label: '«¿Cuáles son tus condiciones?»', info: '«Que diga la verdad: que esta semana salgo más temprano, pero que antes salía a las ocho. Y que no salga mi hijito en ninguna foto.»' },
      { id: 'miedo', label: '«¿Qué te da miedo de participar?»', info: '«Que mis compañeras piensen que me vendí a la sede. O que si un día me quejo de algo, me digan "pero si tú saliste en la campaña".»' },
      { id: 'por', label: '«¿Por qué quieres hacerlo?»', info: '«Porque Yeni entró a Comas el lunes y hoy salimos 6:50. Si cuento eso, a lo mejor en otras agencias también lo piden. Y porque mi mamá quiere verme en el boletín.»' },
      { id: 'redes', label: '«¿Lo compartirías en tu Facebook también?»', info: '«Ay, no sé, señorita. Mi Facebook es para mi familia. ¿Es obligatorio?» Se queda en silencio, incómoda.' },
    ],
    res: picks => {
      const mala = picks.includes('redes');
      return {
        q: null, fx: { personas: mala ? -1 : 4, confianza: mala ? 0 : 3 }, rel: { cajera: mala ? 0 : 1 },
        flags: ['jhoselyn_embajadora'],
        cartera: { embajadores: 'Jhoselyn acepta, con sus condiciones' },
        out: mala ? 'Le aclaras que no es obligatorio. Pero la pregunta la dejó pensando si el «voluntario» tenía letra chiquita.' : 'Anotas sus condiciones al pie de la letra. Ella cierra: «Si me cumple eso, cuente conmigo».',
        kusi: mala ? ['pensando', 'Su Facebook es suyo. Ni se pregunta.'] : ['celebra', 'Condiciones claras. ¡Así se empieza!'],
      };
    },
    rules: [[LEY, 'Toda persona tiene derecho a la voz y a la imagen propias, y a las de su familia en su intimidad (Constitución, art. 2 inc. 7).']],
    mirada: {
      ve: 'Jhoselyn no pide ser protagonista: pide que no la usen. Sus condiciones son exactamente las que hacen creíble a un embajador: decir la verdad, proteger a su familia y no perder su derecho a quejarse mañana.',
      visual: { tipo: 'balanza', a: { t: 'Lo que la anima', items: ['Que otras agencias pidan lo mismo', 'Su mamá verla en el boletín', 'Contar que algo cambió'] }, b: { t: 'Lo que la frena', items: ['Que piensen que se vendió', 'Perder su derecho a quejarse', 'Que usen a su hijo'] } },
    },
  },
  {
    id: 'g2', t: '10:00', ch: 'documento', who: null, titulo: 'Las reglas del programa', banner: 'assets/esc/escalera.webp', show: ['calidad', 'etica'],
    body: (n, F) => `<p>Tienes ocho voluntarios del sábado${F.has('voluntarios_presion') ? ', aunque tres llegaron porque su supervisora los «eligió»' : ''} y Jhoselyn. Fiorella quiere la propuesta del programa al mediodía.</p><p><mark class="clave">Arma las reglas por bloques</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del programa.', boton: 'Enviar a Fiorella',
    bloques: [
      { id: 'entrar', t: 'Cómo se entra y se sale', n: 2, ops: [
        { id: 'e1', t: 'Se entra por inscripción propia, no por designación del jefe.', ok: true, por: 'Voluntario de verdad.' },
        { id: 'e2', t: 'Se puede salir cuando quieras, sin explicar por qué, y se retiran tus publicaciones del banco si lo pides.', ok: true },
        { id: 'e3', t: 'Un compromiso mínimo de seis meses.', ok: false, por: 'Un compromiso forzado convierte la voz en obligación.' },
      ] },
      { id: 'que', t: 'Qué hacen los embajadores', n: 2, ops: [
        { id: 'q1', t: 'Cuentan su experiencia con sus palabras: lo bueno y lo que falta.', ok: true, por: 'Eso los hace creíbles.' },
        { id: 'q2', t: 'Llevan las preguntas de su agencia al equipo de Comunicación Interna.', ok: true, por: 'Son un canal de ida y vuelta, no solo un altavoz.' },
        { id: 'q3', t: 'Copian y pegan los textos que prepara Marketing.', ok: false, por: 'Mil cuentas con el mismo texto se notan a kilómetros.' },
      ] },
      { id: 'recon', t: 'Reconocimiento', n: 2, ops: [
        { id: 'r1', t: 'El tiempo que dedican se reconoce como horas de trabajo.', ok: true, por: 'Coherente con lo que pediste para el cuadre.' },
        { id: 'r2', t: 'Formación en comunicación y fotografía con celular.', ok: true },
        { id: 'r3', t: 'Un bono por cada publicación que pase los 100 likes.', ok: false, por: 'Convierte la opinión en un anuncio pagado.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'riesgosa' ? -3 : 3 },
        flags: q === 'riesgosa' ? ['embajadores_obligados'] : ['embajadores_voluntarios'],
        cartera: { embajadores: q === 'riesgosa' ? 'Programa con metas y bonos' : 'Programa voluntario, de ida y vuelta' },
        out: q === 'buena' ? 'Fiorella lo lee y subraya «se reconoce como horas de trabajo». «Esto es lo más coherente que hemos hecho en el año», dice.' : 'El programa se entiende, aunque alguna regla lo acerca a una campaña pagada.',
        pro: { ok: 'Voluntario, con voz propia y con el tiempo reconocido.', risk: 'Metas, guiones y bonos por likes convierten a los embajadores en publicidad disfrazada.', info: 'Que los embajadores también traigan preguntas hace que el programa sirva adentro, no solo afuera.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Embajadores que también escuchan!' : 'Esa regla lo vuelve anuncio.'],
      };
    },
    rules: [[BP, 'Un embajador habla con su voz, entra porque quiere y puede salir cuando quiera.']],
    mirada: {
      ve: 'La gente cree más en lo que cuenta un cajero que en lo que dice un banco. Por eso los programas de embajadores son tan valiosos… y tan frágiles: en cuanto huelen a obligación, pierden justo lo que los hacía valer.',
      visual: { tipo: 'flujo', titulo: 'Un embajador, de ida y vuelta', pasos: ['Se inscribe', 'Cuenta su experiencia', 'Trae preguntas de su agencia', 'Recibe respuestas', 'Sale cuando quiera'] },
    },
  },
  {
    id: 'g3', t: '11:30', ch: 'presencial', who: 'gerente', titulo: 'Los números de Marco', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Marketing, piso 11', show: ['etica', 'confianza', 'calidad'],
    body: () => `<p>Marco tiene una hoja de cálculo abierta. «Mira: si cada embajador publica tres veces por semana en su Facebook, en un mes son 108 publicaciones. Con eso subo el alcance un 40 %. <mark class="clave">Necesito ese compromiso</mark> para justificar el presupuesto.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que una meta de publicaciones en cuentas personales mata el programa, y ofrecerle otra métrica: cuánta gente postula después de ver los testimonios, que es lo que de verdad le importa al banco.',
        res: { q: 'buena', fx: { etica: 4, calidad: 3 }, rel: { gerente: 1 },
          out: 'Marco piensa un rato. «Postulaciones… eso sí lo puedo presentar en el comité.» Cambia la columna de su Excel.',
          pro: { ok: 'Le das una métrica mejor para su propio objetivo.', risk: 'Si las postulaciones no suben, tendrás que explicarlo.', info: 'Mide postulaciones que llegan con el enlace de cada testimonio.' },
          kusi: ['feliz', '¡Le cambiaste la columna del Excel!'] } },
      { id: 'b', label: 'Aceptar una meta suave: una publicación por semana, «sugerida», sin consecuencias.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: 1 }, rel: { gerente: 1 },
          out: 'Marco acepta. En un mes, los supervisores empiezan a preguntar a sus embajadores si ya publicaron «lo de esta semana».',
          pro: { ok: 'Es una meta pequeña.', risk: 'En una cadena jerárquica, «sugerida» se convierte en «controlada».' },
          kusi: ['pensando', '«Sugerida»… hasta que alguien la controla.'] } },
      { id: 'c', label: 'Aceptar las tres publicaciones por semana: Marco pone el presupuesto y sin él no hay programa.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -3 }, rel: { gerente: 1 }, flags: ['embajadores_obligados'],
          out: 'Wilson te escribe esa tarde: «¿Tres por semana? Yo pensé que era contar mi experiencia, no ser community manager».',
          pro: { ok: 'Hay presupuesto.', risk: 'Una meta así convierte el Facebook personal de la gente en un canal del banco.' },
          kusi: ['preocupado', 'Su Facebook no es un canal del banco.'] } },
    ],
    rules: [[BP, 'Mide lo que el programa debe lograr (atraer y retener), no cuánto publica cada persona.']],
    mirada: {
      ve: 'Marco necesita justificar un presupuesto y piensa en alcance porque así mide sus campañas comerciales. No hay que pelear con su necesidad, sino traducirla: el banco no necesita más publicaciones, necesita más y mejores postulantes.',
      visual: { tipo: 'cambio', titulo: 'Cambiar la métrica', pares: [['108 publicaciones al mes', 'Postulaciones que llegan por cada testimonio'], ['Alcance +40 %', 'Calidad de los postulantes'], ['Metas por persona', 'Resultados del programa']] },
    },
  },
  {
    id: 'g4', t: '14:00', ch: 'documento', who: null, titulo: 'La guía del embajador', banner: 'assets/foto/revisa.webp', show: ['cumplimiento', 'etica'],
    body: () => `<p>Marketing preparó una «Guía del embajador Andino» de dos páginas. Fiorella te la pasa antes de enviarla a Legal.</p><p>Comes un sánguche de pollo frente a la pantalla. <mark class="clave">Hay reglas que cuidan y otras que censuran</mark>.</p>`,
    type: 'flag', prompt: 'Marca las reglas que son un riesgo legal o una mala práctica.',
    doc: { t: 'Guía del embajador Andino', sub: 'Marketing · borrador para Legal' },
    lines: [
      { id: 'critica', t: '«Está prohibido publicar en tus redes personales cualquier crítica al banco, bajo sanción».', bad: LEY, why: 'Choca con la libertad de opinión y expresión (Constitución, art. 2 inc. 4) y vuelve sospechoso todo lo bueno que publiquen.' },
      { id: 'clientes', t: '«Comparte fotos con clientes satisfechos, con su nombre y el producto que contrataron».', bad: LEY, why: 'Datos e imagen de clientes, y su relación con el banco, sin su consentimiento (Ley 29733, art. 5).' },
      { id: 'contactos', t: '«Envía al área de Marketing la lista de tus contactos interesados en trabajar en el banco».', bad: LEY, why: 'Datos de terceros que no consintieron, para una finalidad que no conocen (Ley 29733, arts. 5 y 6).' },
      { id: 'confid', t: '«No compartas información confidencial del banco ni de sus clientes».' },
      { id: 'tuvoz', t: '«Cuenta tu experiencia con tus palabras. Nadie revisará lo que publiques en tus cuentas».' },
      { id: 'hashtag', t: '«Usa siempre el hashtag #OrgullosoAndino y etiqueta a la cuenta oficial».', bad: BP, why: 'Obligar a etiquetar convierte la publicación en un anuncio. Mejor: «si quieres, usa…».' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Se te escapa un riesgo. Legal lo marca en rojo y la guía vuelve a tus manos al final del día.' : `Marcas ${hitsLey} riesgos legales y una mala práctica. La guía queda en una página: confidencialidad sí, censura no; tu voz, tus cuentas y ningún dato de terceros.`,
      flags: missLey ? [] : ['guia_limpia'],
      fx: { cumplimiento: missLey ? -3 : 5, etica: missLey ? -1 : 3 },
      cartera: { embajadores: missLey ? 'Guía devuelta por Legal' : 'Guía del embajador limpia' },
      pro: { ok: 'Separas lo que el banco sí puede pedir (confidencialidad) de lo que no (silencio).', risk: 'Una guía que censura convierte a los embajadores en voceros sin credibilidad.' },
      kusi: missLey ? ['preocupado', 'Esa línea volvió con rojo.'] : ['indignado', '¿Prohibido criticar en tu propio Facebook? ¡Fuera!'],
    }),
    rules: [[LEY, 'Toda persona tiene libertad de opinión y expresión (Constitución, art. 2 inc. 4).'], [LEY, 'Los datos de clientes y contactos requieren su consentimiento (Ley 29733, art. 5).']],
    mirada: {
      ve: 'La diferencia entre una guía útil y una mordaza está en una sola pregunta: ¿protege información que el banco debe cuidar, o protege la imagen del banco de lo que piensa su gente? La primera es legítima. La segunda, además de riesgosa, es inútil.',
      visual: { tipo: 'balanza', a: { t: 'Lo que el banco sí puede pedir', items: ['Confidencialidad de clientes', 'No compartir información interna', 'Respeto'] }, b: { t: 'Lo que no', items: ['Prohibir críticas', 'Datos de clientes y contactos', 'Etiquetas obligatorias'] } },
      normas: [{ ley: 'Constitución Política del Perú, art. 2 inc. 4', dice: 'Toda persona tiene derecho a las libertades de información, opinión, expresión y difusión del pensamiento, por cualquier medio, bajo las responsabilidades de ley.', practica: 'El banco puede exigir reserva sobre sus clientes; no puede exigir que su gente nunca opine sobre su trabajo.' }],
    },
  },
  {
    id: 'g5', t: '15:40', ch: 'whatsapp', who: null, titulo: 'El grupo de embajadores', banner: 'assets/foto2/chocan-manos.webp', show: ['personas', 'calidad'],
    body: () => `<p>Creas el grupo «Embajadores Andino» con los ocho voluntarios y Jhoselyn. El primer mensaje define si se sienten <mark class="clave">invitados o reclutados</mark>.</p>`,
    type: 'compose', enviaA: 'embajadores', para: 'Para: Embajadores Andino (8 voluntarios)', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje de bienvenida eligiendo una frase de cada parte.',
    slots: [
      { id: 'bien', t: 'Bienvenida', ops: [
        { id: 'b1', t: '¡Hola a todos! Gracias por el sábado. Las fotos son lo más bonito que ha hecho el banco este año, porque son ustedes.', ok: true, por: 'Agradece y reconoce.' },
        { id: 'b2', t: 'Bienvenidos al programa oficial de embajadores de marca del Banco Andino.', ok: false, por: 'Suena a nombramiento.' },
      ] },
      { id: 'que', t: 'Qué esperas', ops: [
        { id: 'q1', t: 'No hay metas ni textos para copiar: cuenten lo que quieran, cuando quieran, y también lo que falta mejorar.', ok: true, por: 'Libertad y honestidad.' },
        { id: 'q2', t: 'Les mandaremos cada lunes el post de la semana para que lo compartan.', ok: false, por: 'Ahí murió la voz propia.' },
      ] },
      { id: 'vuelta', t: 'La ida y vuelta', ops: [
        { id: 'v1', t: 'Y lo más importante: tráiganme las preguntas de sus agencias. Ustedes son nuestros oídos.', ok: true, por: 'Los conviertes en canal, no en altavoz.' },
        { id: 'v2', t: 'Cualquier duda, me escriben.', ok: null, por: 'Bien, pero se pierde la idea de canal.' },
      ] },
    ],
    res: sel => {
      const buenas = ['b1', 'q1', 'v1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.que === 'q2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? ['embajadores_obligados'] : [],
        out: q === 'buena' ? 'Wilson responde primero: «¡Presente! ¿Podemos contar también lo que no nos gusta?». Le respondes: «Sí. Por eso los elegimos a ustedes y no a modelos».' : q === 'riesgosa' ? 'Dos voluntarios salen del grupo antes de la noche.' : 'El grupo responde con emojis. Arranca, aunque un poco frío.',
        pro: { ok: 'Invitas, liberas y escuchas.', risk: 'Un «post de la semana» convierte a los embajadores en repetidores.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '«Por eso los elegimos a ustedes». ¡Uf!' : 'Así se sienten reclutados.'],
      };
    },
    rules: [[BP, 'Los embajadores son oídos además de voz: lo que escuchan en sus agencias vale tanto como lo que publican.']],
    mirada: {
      ve: 'El primer mensaje de un grupo así es un contrato tácito. Si dice «aquí no hay guion», la gente se atreve a contar. Y si además les pides que traigan preguntas, el programa deja de ser publicidad y se vuelve escucha.',
      visual: { tipo: 'mensaje', titulo: 'Bienvenida', txt: '¡Gracias por el sábado! No hay metas ni textos para copiar: cuenten lo que quieran, cuando quieran, y también lo que falta mejorar. Y tráiganme las preguntas de sus agencias.' },
    },
  },
  {
    id: 'g6', t: '17:20', ch: 'documento', who: 'cajera', titulo: 'El testimonio de Jhoselyn', banner: 'assets/foto2/collage.webp', show: ['etica', 'personas', 'calidad'],
    body: () => `<p>Kiara te pasa el testimonio de Jhoselyn, editado por Marketing. Quedó lindo: primer trabajo con planilla, los abuelitos que le traen caramelos, su sueño de ser contadora.</p><p>Pero falta algo. <mark class="clave">La frase del horario desapareció</mark>: «Antes salía a las ocho. Esta semana, a las 6:50. Falta, pero algo está cambiando».</p>`,
    type: 'secuencia', prompt: 'Ordena lo que haces antes de publicar el testimonio. Usa las flechas.', boton: 'Publicar el testimonio',
    items: [
      { id: 'repone', t: 'Volver a poner la frase del horario, tal como la dijo ella', por: 'Era su condición. Y es lo que lo hace creíble.' },
      { id: 'marco', t: 'Explicarle a Marco por qué esa frase hace el testimonio más fuerte, no más débil', por: 'Que entienda, no solo que acepte.' },
      { id: 'lee', t: 'Mandarle a Jhoselyn el texto final para que lo lea completo', por: 'Su historia, sus palabras.' },
      { id: 'aprueba', t: 'Esperar su aprobación por escrito y la confirmación de que su hijo no aparece', por: 'Su otra condición.' },
      { id: 'publica', t: 'Publicar y decirle cómo pedir que se retire cuando quiera', por: 'El consentimiento se puede retirar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { etica: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 4 : 0 }, rel: { cajera: q === 'riesgosa' ? -1 : 1 },
        flags: [q === 'riesgosa' ? 'testimonio_editado' : 'testimonio_honesto'],
        cartera: { campana: q === 'riesgosa' ? 'Testimonio publicado sin la frase del horario' : 'Testimonio de Jhoselyn, completo y aprobado' },
        out: q === 'buena' ? 'Marco lee la frase dos veces. «Es raro… pero tienes razón: suena a verdad.» A las 6:30, Jhoselyn responde: «Así sí lo firmo».' : q === 'aceptable' ? 'El testimonio sale completo, aunque Jhoselyn lo leyó con apuro.' : 'El testimonio sale sin la frase. Jhoselyn lo ve publicado y no te escribe.',
        pro: { ok: 'El testimonio es de ella: sus palabras, sus condiciones, su derecho a retirarlo.', risk: 'Quitar la frase que ella pidió es usar su imagen para decir algo que no dijo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '«Falta, pero algo está cambiando». ¡Eso es una marca!' : 'Era su frase. Y su condición.'],
      };
    },
    rules: [[LEY, 'El consentimiento para usar la imagen y la historia de alguien es para lo que esa persona aceptó (Ley 29733, arts. 5 y 6).']],
    mirada: {
      ve: 'La frase que Marketing quitó es la que hace creíble todo lo demás. Un testimonio perfecto suena a anuncio; uno que dice «falta, pero algo está cambiando» suena a una persona real. Mañana, en la feria, vas a necesitar exactamente eso.',
      visual: { tipo: 'cambio', titulo: 'El testimonio', pares: [['Versión de Marketing: todo perfecto', 'Versión de Jhoselyn: lo bueno y lo que falta'], ['Sin la frase del horario', '«Antes, las ocho; esta semana, 6:50»'], ['Publicado sin leer', 'Leído, aprobado y revocable']] },
    },
  },
];
