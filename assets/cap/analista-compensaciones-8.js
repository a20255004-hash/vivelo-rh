// Analista de Compensaciones y Beneficios · Capítulo 8 · «El comité» · Semana 2, miércoles.
// Hilo: presentas la propuesta ante gerencia. Fiorella hace la pregunta difícil.
// Normas citadas:
// - Ley 30709 y D.S. 002-2018-TR: criterios objetivos; política salarial y su comunicación (infracción muy grave si falta).
//   https://elperuano.pe/noticia/246869-sunafil-fiscaliza-normas-sobre-politica-salarial-atiende-estos-consejos-para-evitar-riesgos
//   https://elperuano.pe/noticia/305005-igualdad-salarial-estas-son-las-reglas-que-deben-considerar-las-empresas-al-determinar-las-remuneraciones
// - Ley 29733, Ley de Protección de Datos Personales: https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011
// Montos y escenarios: ficticios, propios de la empresa del caso.

export const CAP = {
  n: 8, titulo: 'El comité', dia: 'Semana 2, miércoles', foto: 'assets/foto2/presentacion.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:15', fin: '19:00', cierreHora: '18:40',
  apertura: 'Miércoles. Dormiste mal y te pusiste la blusa que te da suerte. A las 10:00, en la sala del directorio del piso 12, presentas la revisión salarial 2027 frente a toda la gerencia.', boton: 'Subir al piso 12',
  kusi: 'Hoy hablas con datos frente a gente poderosa. ¡Respira, que el análisis es tuyo!',
  lead: 'Ordenaste la presentación, conociste a tu público, respondiste a tres presiones, contestaste con honestidad la pregunta difícil, cuidaste lo que se comunica y corregiste el acta.',
  reflexion: '¿Qué es más difícil frente a un comité: defender una cifra o decir «eso todavía no lo sé»?',
  siguiente: { n: 9, titulo: 'Las cartas', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'presentacion', p: 'Presentación al comité', j: 'Fiorella · Gestión Humana', d: 0, e: 'Cinco láminas' },
  { id: 'comite', p: 'Decisión del comité', j: 'Gerencia General', d: 0, e: 'Hoy 10:00' },
  { id: 'auditoria', p: 'Revisión de equidad de toda la planilla', j: 'Compensaciones', d: 0, e: 'No existe' },
  { id: 'acta', p: 'Acta del comité', j: 'Finanzas', d: 0, e: 'Por redactar' },
];

export const FUTURO = {
  presentacion_ordenada: ['Tu presentación siguió un orden claro: reglas, mercado, equidad, escenarios y pedido.', 'La gerencia general la pedirá como modelo.'],
  respuesta_honesta: ['Ante la pregunta difícil, dijiste lo que sabías y lo que no, y propusiste revisar toda la planilla.', 'Tendrás esa revisión como tarea de la próxima semana.'],
  respuesta_falsa: ['Aseguraste ante el comité algo que no habías verificado.', 'Si aparece otra brecha, será tu palabra la que caiga.'],
  wilber_espera: ['Wilber esperará las cartas para dar cifras a los técnicos.', 'Las cartas tendrán que llegar a tiempo.'],
  wilber_cifras: ['Le diste a Wilber cifras antes de las cartas.', 'Algunos técnicos esperarán un monto distinto al que reciban.'],
  acta_limpia: ['El acta del comité quedó sin cláusulas discriminatorias ni datos expuestos.', 'Será la base de las cartas.'],
  acta_sucia: ['El acta quedó con una cláusula que no debía estar.', 'Aparecerá en las cartas.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
  wilber: { n: 'Wilber Ccori', sub: 'Jefe de Operaciones de Campo', c: '#F2A900' },
};

export const WSP = [
  { chat: 'gustavo', t: '08:20', de: 'Gustavo', txt: 'Tú presentas, yo estoy al lado. Si te bloqueas, mírame y sigo yo. No te vas a bloquear.' },
  { chat: 'fiorella', t: '08:40', de: 'Fiorella', txt: 'Antes del comité, TI me reportó que salió un archivo con sueldos a un correo personal. Hablamos después.', si: 'datos_gmail' },
  { chat: 'renzo', t: '09:30', de: 'Renzo', txt: 'Hoy voy a pedir más para Tecnología. No es personal.' },
  { chat: 'fiorella', t: '12:15', de: 'Fiorella', txt: 'Lo hiciste muy bien. La gerente general preguntó tu nombre.' },
  { chat: 'gustavo', t: '18:30', de: 'Gustavo', txt: 'Mañana: cartas. 1,200. Que nadie reciba un número sin su porqué.' },
];

export const CORREOS = [
  { t: '08:15', de: 'Asistente de Gerencia General', para: 'Comité de Compensaciones', asunto: 'Comité · Revisión salarial 2027', html: '<p>Se confirma el comité hoy a las 10:00, sala del piso 12. Asisten: Ing. Sofía Valdivia (Gerente General), Martín Chu (Finanzas), Fiorella Gamarra (Gestión Humana), Renzo Pacheco (Tecnología) y Wilber Ccori (Operaciones de Campo).</p><p>Duración máxima: 60 minutos.</p>' },
  { t: '15:30', de: 'Martín Chu · Finanzas', para: 'Comité de Compensaciones', asunto: 'Borrador de acta', html: '<p>Adjunto el borrador del acta para comentarios antes de las 6 p. m. Lo redactó mi asistente con las notas de la reunión.</p>' },
];

export const QUIZ = [
  { q: 'En una presentación de revisión salarial, lo primero que el comité necesita es…', ops: ['Los casos individuales', 'El presupuesto y las reglas con las que se repartió', 'La recomendación final', 'Los anexos'], ok: 1, por: 'Sin reglas claras al inicio, cada escenario parece arbitrario.' },
  { q: 'Si Finanzas pregunta «¿por qué no un 4 % parejo?», la mejor respuesta es…', ops: ['«Porque lo dice Recursos Humanos»', '«Porque un porcentaje igual mantiene las brechas: quien gana menos sin criterio seguiría ganando menos»', '«Porque es más complicado»', '«Porque los gerentes no quieren»'], ok: 1, por: 'Un porcentaje parejo es justo en apariencia, pero perpetúa lo que ya estaba mal.' },
  { q: 'Te preguntan algo que no verificaste. Lo profesional es…', ops: ['Responder que sí para no quedar mal', 'Decir lo que sabes, lo que no, y cómo y cuándo lo averiguarás', 'Cambiar de tema', 'Culpar a otra área'], ok: 1, por: 'Tu credibilidad depende de no afirmar lo que no has comprobado.' },
  { q: 'Un acta que dice «los montos individuales se publicarán en el portal interno»…', ops: ['Es transparencia', 'Expone datos personales de 1,200 personas', 'Es obligatoria', 'Solo afecta a los gerentes'], ok: 1, por: 'Los sueldos individuales son datos personales protegidos por la Ley 29733.' },
  { q: 'Que un comité deje las excepciones «a criterio de cada gerente»…', ops: ['Agiliza el proceso', 'Contradice la regla de excepciones con criterios objetivos', 'Es lo que pide la ley', 'No tiene efecto'], ok: 1, por: 'Vuelve al punto de partida: gana quien más presiona.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '08:30', ch: 'documento', who: null, titulo: 'El orden de las láminas', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, con la presentación abierta', show: ['calidad', 'confianza'],
    body: () => `<p>Tienes cinco láminas y sesenta minutos con cinco personas que deciden. Gustavo te dio un consejo en el ascensor: «La gente entiende historias, no tablas».</p><p><mark class="clave">Ordena la presentación</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las láminas de la presentación.', boton: 'Guardar el orden',
    items: [
      { id: 'reglas', t: 'Presupuesto (S/ 380,000 al mes) y las reglas para repartirlo', por: 'Primero el marco: todo lo demás se mide contra él.' },
      { id: 'mercado', t: 'Dónde estamos frente al mercado: técnicos 25 % debajo', por: 'El problema que todos sienten.' },
      { id: 'equidad', t: 'Lo que encontramos adentro: el cuadro y la brecha de redes', por: 'El problema que pocos veían y que la ley exige corregir.' },
      { id: 'escen', t: 'Tres escenarios con sus costos', por: 'Las opciones, con lo que gana y pierde cada una.' },
      { id: 'reco', t: 'Recomendación y lo que pedimos aprobar hoy', por: 'Termina con una decisión concreta.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['presentacion_ordenada'] : [],
        cartera: { presentacion: q === 'buena' ? 'Ordenada: reglas, mercado, equidad, escenarios, pedido' : 'Orden poco claro' },
        out: q === 'buena' ? 'Gustavo la revisa en tu pantalla: «Así. Empiezas por lo que todos aceptan y terminas en lo que tienen que decidir».' : 'Gustavo mueve una lámina: «Si empiezas por los escenarios, nadie sabe contra qué compararlos».',
        pro: { ok: 'Marco, problema, causa, opciones y pedido: una historia que se sigue sin esfuerzo.', info: 'Ensaya el primer minuto: es el que más nervios da.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Historia redonda!' : 'Primero las reglas.'],
      };
    },
    mirada: {
      ve: 'Un comité no es una clase: es una reunión para decidir. El orden de la presentación debe llevar, paso a paso, hacia la decisión que necesitas.',
      visual: { tipo: 'flujo', titulo: 'La presentación', pasos: ['Reglas', 'Mercado', 'Equidad', 'Escenarios', 'Pedido'] },
    },
  },
  {
    id: 'h2', t: '09:20', ch: 'presencial', who: 'gustavo', titulo: 'Conocer al público', banner: 'assets/foto/mentora.webp', lugar: 'Cafetería del piso 12, diez minutos antes', show: ['confianza', 'calidad'],
    body: () => `<p>Gustavo te invita un café en la cafetería del piso 12, donde los ejecutivos piden capuchino con leche de almendras. «Pregúntame lo que quieras de los que van a estar. <mark class="clave">Tienes tiempo para dos</mark>.»</p>`,
    type: 'ask', max: 2, prompt: '¿Qué le preguntas a Gustavo?',
    opts: [
      { id: 'sofia', label: '¿Qué le importa a la gerente general?', info: '«Sofía viene de operaciones mineras en Arequipa. Le importan dos cosas: que no haya sorpresas legales y que la rotación no frene el despliegue de fibra. Habla poco y anota todo.»' },
      { id: 'martin', label: '¿Qué va a preguntar Finanzas?', info: '«Martín siempre pregunta lo mismo: “¿por qué no un 4 % parejo y listo?”. No es mala fe: es lo más simple de registrar.»' },
      { id: 'wilber', label: '¿Wilber va a pelear?', info: '«Va a pelear por sus técnicos, y con razón. Él empezó subiendo postes. No lo enfrentes: muéstrale el plan a dos años.»' },
      { id: 'fio', label: '¿Fiorella va a apoyarnos?', info: '«Sí, pero te va a hacer una pregunta difícil. Siempre lo hace. No para hundirte: para que el comité vea que lo pensamos todo.»' },
    ],
    res: picks => ({
      q: null,
      fx: { confianza: 2, calidad: picks.includes('fio') || picks.includes('sofia') ? 3 : 2 },
      rel: { gustavo: 1 },
      out: picks.includes('fio') ? 'Sabes que vendrá una pregunta difícil. Te terminas el café de un trago.' : 'Subes a la sala con una idea más clara de quién es quién.',
      kusi: ['curioso', 'Conocer al público es media presentación.'],
    }),
    rules: [[BP, 'Antes de un comité, entiende qué le importa a cada persona que decide.']],
    mirada: {
      ve: 'La misma propuesta se defiende distinto frente a Finanzas, Operaciones o la gerencia general. Conocer qué le preocupa a cada uno no es manipular: es comunicar.',
    },
  },
  {
    id: 'h3', t: '10:25', ch: 'presencial', who: 'renzo', titulo: 'Tres intervenciones', banner: 'assets/3d/scenes/corporativo.webp', lugar: 'Sala del directorio, piso 12', show: ['calidad', 'confianza', 'etica'],
    body: (n, F) => `<p>Llevas veinte minutos. ${F.has('presentacion_ordenada') ? 'La gerente general anota sin levantar la vista; buena señal.' : 'Martín mira su celular; mala señal.'} Entonces empiezan las preguntas.</p><p><mark class="clave">Escucha a los tres antes de responder</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Martín Chu · Finanzas', 'Con la calculadora en la mano', '«Disculpa, pero ¿por qué no un 4 % parejo para todos? Es más simple, nadie se queja y lo registramos en una tarde.»'],
      ['Renzo Pacheco · Tecnología', 'Inclinado sobre la mesa', '«Tecnología es el área que más talento pierde. Pido que el 1.2 % de equidad pase a una bolsa para retención de Tecnología.»'],
      ['Wilber Ccori · Operaciones de Campo', 'Con las manos juntas, despacio', '«Con todo respeto: con el escenario A mis técnicos siguen debajo del mercado. Yo pierdo uno por semana. ¿Cuánto tiempo más tienen que esperar?»'],
    ],
    prompt: '¿Cómo respondes a las tres intervenciones?',
    choices: [
      { id: 'a', label: 'A Martín: un 4 % parejo mantiene las brechas. A Renzo: la equidad no es de un área, es una obligación legal; las retenciones tienen su reserva y su regla. A Wilber: tiene razón, y el plan a dos años los lleva al P50; además propongo pasar la reserva no usada a técnicos.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 4, etica: 2 }, rel: { renzo: 0, gustavo: 1 }, cartera: { comite: 'Preguntas respondidas con criterio' },
          out: 'Wilber asiente despacio. Renzo se recuesta en la silla. Sofía Valdivia, por primera vez, levanta la vista: «Siga».',
          pro: { ok: 'Respondes a cada uno con su preocupación y sin ceder lo que es obligatorio.', info: 'Anota la propuesta de pasar la reserva a técnicos: debe quedar en el acta.' },
          kusi: ['celebra', '¡Tres respuestas, ningún enemigo!'] } },
      { id: 'b', label: 'Aceptar la propuesta de Renzo para tener su apoyo y responder a Martín que «se evaluará».',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4 }, rel: { renzo: 1 }, cartera: { comite: 'Equidad cedida a Tecnología' },
          out: 'Fiorella te mira, seria. El dinero para cerrar la brecha de redes acaba de convertirse en una bolsa para retener a quien amenace con irse.',
          pro: { ok: 'Ganas un aliado en la sala.', risk: 'Desarmas la corrección de una brecha sin criterio objetivo, que no es opcional.' },
          kusi: ['preocupado', '¿Y la brecha de redes?'] } },
      { id: 'c', label: 'Responder solo a Martín con los números y dejar a Renzo y Wilber para después de la reunión.',
        res: { q: 'aceptable', fx: { calidad: 2, personas: -2 }, rel: { gustavo: 0 },
          out: 'Martín queda satisfecho. Wilber mira la mesa. Renzo repite su pedido y la discusión se alarga quince minutos.',
          pro: { ok: 'Respondes con datos a Finanzas.', risk: 'Dejar sin respuesta a quien expresa un problema real lo vuelve un conflicto.' },
          kusi: ['pensando', 'Wilber se quedó esperando.'] } },
    ],
    rules: [[LEY, 'Ley 30709: corregir una brecha sin criterio objetivo no es una opción presupuestaria, es una obligación.'], [BP, 'En un comité, responde a la preocupación de cada persona, no solo a su pedido.']],
    mirada: {
      ve: 'Cada intervención trae un interés legítimo: simplicidad, talento, justicia para el campo. Tu trabajo es reconocerlos sin soltar lo que no se negocia.',
      visual: { tipo: 'balanza', a: { t: 'Lo que se puede negociar', items: ['Ritmo del plan de técnicos', 'Uso de la reserva', 'Peso del desempeño'] }, b: { t: 'Lo que no', items: ['Cerrar brechas sin criterio', 'Excepciones sin regla', 'Discriminación'] } },
    },
  },
  {
    id: 'h4', t: '10:55', ch: 'presencial', who: 'fiorella', titulo: 'La pregunta difícil', banner: 'assets/foto2/tension.webp', lugar: 'Sala del directorio, piso 12', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Fiorella deja el lapicero sobre la mesa. «Una pregunta, para que quede en el acta: <mark class="clave">¿podemos asegurar hoy que ninguna mujer en AndesTel gana menos que un hombre por el mismo trabajo sin un criterio objetivo?</mark>»</p><p>Silencio. Tú revisaste a fondo redes. ${F.has('formulas_limpias') ? 'Y la pestaña de equidad del simulador mostró diferencias pequeñas en otras dos categorías que todavía no analizaste.' : 'Las otras 72 categorías no las revisaste con ese detalle.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder que no se puede asegurar todavía: redes está revisado y corregido; para el resto propones una revisión de equidad de toda la planilla en treinta días, con los mismos criterios.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: 3 }, rel: { fiorella: 1 }, flags: ['respuesta_honesta'], cartera: { auditoria: 'Aprobada: revisión de equidad en 30 días' },
          out: 'Sofía Valdivia anota y dice: «Aprobado el escenario A, con la reserva para técnicos. Y la revisión de equidad, en treinta días». Gustavo te da un golpecito en el pie por debajo de la mesa.',
          pro: { ok: 'Dices lo que sabes, lo que no y cómo lo averiguarás: así se gana credibilidad frente a una gerencia.', info: 'Prepara el plan de esa revisión antes del lunes: lo van a pedir.' },
          kusi: ['celebra', '«No lo sé todavía» también es una gran respuesta.'] } },
      { id: 'b', label: 'Responder que sí: la matriz es igual para todos y la brecha de redes ya está corregida.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4, confianza: 2 }, flags: ['respuesta_falsa'], cartera: { auditoria: 'Descartada: «ya está todo bien»' },
          out: 'El comité aprueba rápido. Fiorella no dice nada, pero escribe una nota en su cuaderno. Si aparece otra brecha, tu «sí» quedará en el acta.',
          pro: { ok: 'Das seguridad al comité.', risk: 'Afirmas algo que no verificaste, y una regla igual puede tener efectos distintos.' },
          kusi: ['preocupado', '¿Lo revisaste todo?'] } },
      { id: 'c', label: 'Responder que eso debería evaluarlo Legal.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -3 },
          out: 'Sofía Valdivia frunce el ceño: «Legal no tiene los datos. Ustedes sí». El comité aprueba el escenario y deja la pregunta sin responsable.',
          pro: { ok: 'Reconoces que hay un tema legal.', risk: 'La respuesta depende de datos que solo tiene Compensaciones.' },
          kusi: ['pensando', 'Los datos los tienes tú.'] } },
    ],
    rules: [[LEY, 'Ley 30709 y D.S. 002-2018-TR: el empleador debe poder demostrar que las diferencias dentro de cada categoría responden a criterios objetivos.']],
    mirada: {
      ve: 'La pregunta de Fiorella no era una trampa: era la pregunta que haría un inspector. Responder con honestidad, y con un plan, protege a la empresa más que cualquier «sí» apresurado.',
      normas: [{ ley: 'Ley 30709 y D.S. 002-2018-TR', dice: 'El empleador debe acreditar que las diferencias remunerativas dentro de una categoría responden a criterios objetivos, verificables y aplicados de forma consistente.', practica: 'Solo puedes afirmar que no hay brechas sin criterio donde lo verificaste.' }],
    },
  },
  {
    id: 'h5', t: '13:10', ch: 'presencial', who: null, titulo: '«¿Ya puedo decirles?»', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo del piso 9, junto al dispensador de agua', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Wilber te espera al salir del ascensor, con su táper de arroz con pollo todavía cerrado. ${F.has('tecnicos_honesto') ? '«Cumplí lo que hablamos: no prometí nada.»' : F.has('tecnicos_promesa') ? '«Los chicos me tienen loco con el aumento.»' : ''}</p><p>«Ya se aprobó. Mañana a las seis tengo reunión con los técnicos. <mark class="clave">¿Les puedo decir cuánto le toca a cada uno?</mark>»</p><p>Las cartas individuales salen el viernes.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que puede anunciar que se aprobó un incremento para técnicos mayor que el del resto y un plan a dos años, y que cada uno recibirá su monto en su carta el viernes.',
        res: { q: 'buena', fx: { personas: 4, etica: 3 }, flags: ['wilber_espera'],
          out: 'Wilber sonríe por primera vez en la semana. «Eso sí les puedo decir. Que es más que el resto y que hay plan.» Abre por fin su táper.',
          pro: { ok: 'Das una buena noticia verdadera sin adelantar montos que dependen de cada caso.', info: 'Pídele que te mande las preguntas que le hagan: servirán para las cartas.' },
          kusi: ['feliz', '¡Buena noticia, bien dicha!'] } },
      { id: 'b', label: 'Darle el promedio de S/ 400 para que lo diga: es un dato aprobado.',
        res: { q: 'aceptable', fx: { personas: 3, calidad: -2 }, flags: ['wilber_cifras'],
          out: 'Wilber anota «S/ 400». Mañana, cada técnico escuchará «400». Pero es un promedio: algunos recibirán 300 y otros 500.',
          pro: { ok: 'Das algo concreto.', risk: 'Un promedio dicho en voz alta se vuelve la promesa de todos.' },
          kusi: ['pensando', 'Un promedio no es el monto de cada uno.'] } },
      { id: 'c', label: 'Decirle que no puede decir nada hasta el viernes.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -3 },
          out: 'Wilber guarda el táper sin abrir. «Dos días más con los chicos preguntando», dice, y baja por la escalera.',
          pro: { ok: 'No adelantas nada.', risk: 'Callar una buena noticia aprobada desperdicia la confianza que podía ganar.' },
          kusi: ['triste', 'Tenía una buena noticia y no la pudo dar.'] } },
    ],
    rules: [[BP, 'Comunica lo aprobado en términos generales; los montos individuales, en la carta de cada persona.']],
    mirada: {
      ve: 'Entre el comité y las cartas hay un espacio en el que todos preguntan. Lo que se diga en ese espacio debe ser verdad para todos, no solo para el promedio.',
    },
  },
  {
    id: 'h6', t: '16:00', ch: 'documento', who: null, titulo: 'El borrador del acta', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Correo de Finanzas · «Acta_Comite_Comp_2027.docx»', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Llega el borrador del acta, redactado por la asistente de Martín con sus notas. Fiorella te pide revisarlo antes de las 6.</p><p>Lo que diga el acta es lo que se aplicará. <mark class="clave">Lee cada línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que hay que corregir en el acta.',
    doc: { t: 'Acta del Comité de Compensaciones', sub: 'AndesTel S.A. · revisión salarial 2027' },
    lines: [
      { id: 'esc', t: 'Se aprueba el escenario A, «Equidad primero», con un techo de S/ 380,000 mensuales.' },
      { id: 'reserva', t: 'La reserva no utilizada se destinará a técnicos de campo.' },
      { id: 'gerente', t: 'Las excepciones salariales serán aprobadas directamente por cada gerente de área.', bad: BP, why: 'Contradice la regla de excepciones: deben pasar por Compensaciones y Gestión Humana con un criterio objetivo.' },
      { id: 'licencia', t: 'No participan del incremento por desempeño quienes tuvieron licencias prolongadas en el año.', bad: LEY, why: 'Esta frase reintroduce por otra puerta la exclusión por maternidad. Afecta sobre todo a mujeres y es discriminatoria.' },
      { id: 'portal', t: 'Los montos individuales de incremento se publicarán en el portal interno para mayor transparencia.', bad: LEY, why: 'Los sueldos individuales son datos personales (Ley 29733). La transparencia es sobre criterios, no sobre montos de cada persona.' },
      { id: 'audit', t: 'Compensaciones presentará una revisión de equidad de toda la planilla en treinta días.' },
      { id: 'cartas', t: 'Cada trabajador recibirá una carta con su incremento y los criterios aplicados.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'El acta sale con una línea que no debía estar. Mañana, el sistema de cartas la va a aplicar.' : `Corriges ${hitsLey + hitsBp} líneas. La asistente de Martín te responde: «Uy, perdón. Copié de un acta de 2023».`,
      flags: [missLey ? 'acta_sucia' : 'acta_limpia'],
      rel: { fiorella: missLey ? 0 : 1 },
      cartera: { acta: missLey ? 'Acta con cláusulas problemáticas' : 'Acta corregida' },
      pro: { ok: 'El acta es el documento que manda: revisarla es parte de la decisión.', risk: 'Una cláusula copiada de un acta vieja puede deshacer el trabajo de dos semanas.', info: 'Pide que el acta la firmen todos los asistentes.' },
      kusi: missLey ? ['indignado', '¿«Licencias prolongadas»? ¡Es la misma exclusión!'] : ['celebra', '¡Acta impecable!'],
    }),
    rules: [[LEY, 'Ley 30709: la discriminación remunerativa puede entrar por reglas aparentemente neutrales.'], [LEY, 'Ley 29733: los montos individuales son datos personales.']],
    mirada: {
      ve: 'Las decisiones se pierden en los documentos. Una frase copiada de un acta vieja puede reintroducir la exclusión que corregiste el primer día.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al acta final', pares: [['Excepciones a criterio del gerente', 'Excepciones con regla y aprobación'], ['Sin incremento por licencias prolongadas', 'Las licencias no reducen el incremento'], ['Montos en el portal', 'Montos en la carta de cada persona']] },
    },
  },
  {
    id: 'h7', t: '18:20', ch: 'correo', who: null, titulo: 'Después del comité', banner: 'assets/foto2/aplausos-verde.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Gustavo Herrera', to: 'Analista de Compensaciones', asunto: 'Hoy' },
    body: (n, F) => `<p>Hoy lo hiciste tú. ¿Qué aprendiste? Una línea, para que no se te olvide.</p><p>G.</p><p>${F.has('respuesta_honesta') ? 'Piensas en tu «todavía no lo sé».' : 'Piensas en la pregunta de Fiorella.'} <mark class="clave">Una línea</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Que se defiende mejor un dato con sus límites que una seguridad que no tengo.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { gustavo: 1 }, responde: 'Gustavo: aprendí que se defiende mejor un dato con sus límites que una seguridad que no tengo. Gracias por dejarme presentar.',
          out: 'Gustavo responde: «Eso me tomó diez años aprenderlo. Mañana, las cartas».', kusi: ['feliz', 'Una lección para toda la carrera.'] } },
      { id: 'b', label: 'Que lo importante es que aprobaron.',
        res: { q: 'aceptable', fx: { confianza: 1 }, responde: 'Gustavo: lo importante es que aprobaron 🙌',
          out: 'Gustavo responde: «Sí. Y mañana empieza lo difícil: explicárselo a 1,200 personas».', kusi: ['pensando', 'Aprobar es la mitad.'] } },
    ],
    mirada: { ve: 'El comité aprueba números, pero lo que construye una carrera en compensaciones es la confianza de que lo que dices está verificado.' },
  },
];
