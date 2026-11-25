// Gerente/a de Gestión Humana · Capítulo 8 · «La propuesta» · Semana 2, miércoles.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida. Hoy se cierra la propuesta para mañana.
// Normas citadas (textos oficiales en docs/normas/txt):
// - Ley 30709, art. 3: las remuneraciones de cada categoría las fija el empleador sin discriminación.
// - D.S. 003-97-TR, art. 30 b): la reducción inmotivada de la remuneración es acto de hostilidad (ya citado en el cap. 1).
// - D.S. 003-97-TR, art. 48: cese colectivo por motivos económicos, no menos del 10 % del personal (ya citado en el cap. 1).
// - Ley 27942 y su Reglamento (D.S. 014-2019-MIMP): el procedimiento de hostigamiento protege a la víctima y garantiza
//   el derecho de defensa del denunciado (principio, sin plazos; ver cap. 6).
// Las cifras del modelo (8.3 %, 1.7 %, etc.) son ficticias.

export const CAP = {
  n: 8, titulo: 'La propuesta', dia: 'Semana 2, miércoles', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Grupo Vida · Oficina corporativa de San Isidro',
  inicio: '07:45', fin: '21:30', cierreHora: '21:10',
  apertura: 'Miércoles. La huelga que iba a empezar hoy no empezó: en las cinco clínicas el cambio de turno de las 7 fue normal. Mañana a las 10 es el directorio. En tu correo, la versión 4 del modelo, y un asunto de Jorge que dice solo: «Revisa la pestaña 3 antes de que la vea Rodrigo».', boton: 'Abrir el modelo',
  kusi: 'Hoy armas tu propuesta. La pregunta no es si llega al 10 %: es si dice la verdad.',
  lead: 'Sacaste del modelo lo ilegal, decidiste qué hacer con la brecha, ordenaste la presentación, conociste a quienes te escucharán mañana, repartiste el escenario con tu equipo y cuidaste el derecho de defensa sin exponer a Kiara.',
  reflexion: '¿Cuándo una propuesta que no llega a la meta es mejor que una que sí llega?',
  siguiente: { n: 9, titulo: 'El directorio', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Propuesta al directorio', j: 'Gestión Humana', d: 0, e: 'Mañana 10:00' },
  { id: 'modelo', p: 'Modelo de costos v4', j: 'Jorge Lazo y Rodrigo Benavides', d: 0, e: 'Por revisar' },
  { id: 'acta', p: 'Acta con el sindicato', j: 'Relaciones Laborales', d: 0, e: 'Sujeta al directorio' },
  { id: 'denuncia', p: 'Denuncia de Kiara Saavedra', j: 'Instancia investigadora', d: 0, e: 'En investigación' },
  { id: 'equipo', p: 'Tus jefaturas', j: 'Gestión Humana', d: 0, e: 'Cansadas' },
];

export const FUTURO = {
  modelo_limpio: ['El modelo que llevas no tiene medidas ilegales ni discriminatorias.', 'Nadie te lo podrá voltear en la sesión.'],
  propuesta_honesta: ['Tu propuesta muestra la brecha y cómo cerrarla en 18 meses.', 'La doctora pidió datos, no magia.'],
  propuesta_maquillada: ['Tu propuesta llega al 10 % con supuestos optimistas.', 'Rodrigo sabe cuáles son.'],
  propuesta_despidos: ['Cerraste la brecha con 60 despidos administrativos.', 'El sindicato y tus jefaturas lo sabrán.'],
  presentacion_ordenada: ['Tu presentación cuenta una historia en orden: problema, criterios, propuesta, riesgo y decisión.', 'El directorio sabrá qué se le pide.'],
  equipo_en_escena: ['Jorge, Silvia y Mariela presentan contigo su parte.', 'El directorio ve a un equipo, no a una gerente sola.'],
  defensa_cuidada: ['El Dr. Ugaz conoce los hechos para defenderse, sin datos de los testigos.', 'Su abogado no queda satisfecho.'],
};

export const CHATS = {
  jefaturas: { n: 'GH · Jefaturas', sub: 'Jorge, Silvia, Mariela y tú', c: '#0F2A3D' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
  rodrigo: { n: 'Rodrigo Benavides', sub: 'Gerente de Finanzas', c: '#C05621' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
  nora: { n: 'Lic. Nora Huamán', sub: 'Sindicato de enfermería', who: 'sindicato' },
  silvia: { n: 'Silvia Quispe', sub: 'Jefa de Relaciones Laborales', c: '#8A5A2B' },
  doris: { n: 'Doris Ccahuana', sub: 'Asistente de gerencia', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'nora', t: '07:10', de: 'Nora', txt: 'Turnos normales en las cinco clínicas. Mañana estaremos pendientes. Suerte, licenciada.', si: 'acta_firmada' },
  { chat: 'nora', t: '07:10', de: 'Nora', txt: 'Hoy arrancamos la huelga. Servicios mínimos cubiertos, como manda la ley.', si: 'acuerdo_roto' },
  { chat: 'jorge', t: '07:50', de: 'Jorge', txt: 'La pestaña 3 la agregó alguien de Finanzas anoche. Yo no la hice. Revísala tú.' },
  { chat: 'rodrigo', t: '11:40', de: 'Rodrigo', txt: 'Ok. Si muestras la brecha, yo la defiendo contigo. Es más fácil defender algo verdadero.', si: 'propuesta_honesta' },
  { chat: 'doris', t: '19:30', de: 'Doris', txt: 'Le dejé impresas 12 copias, anilladas. Y un termo de café para mañana. Usted puede 💪' },
  { chat: 'jefaturas', t: '20:15', de: 'Mariela', txt: 'Ensayé mi parte tres veces frente a mi gato. Tres minutos exactos 🐱', si: 'equipo_en_escena' },
];

export const CORREOS = [
  { t: '07:40', de: 'Jorge Lazo · Compensaciones', para: 'Gerencia de Gestión Humana', asunto: 'Modelo v4', html: '<p>Escenario medio con el acuerdo del sindicato: 8.3 % de ahorro en costos de personal en 2027. Falta 1.7 % para el 10 %. Revisa la pestaña 3 («Cierre de brecha»): no es mía.</p><p>Jorge</p>' },
  { t: '17:50', de: 'Estudio Benavides & Lira · Abogados del Dr. Alfredo Ugaz', para: 'Gerencia de Gestión Humana', asunto: 'Solicitud de información', html: '<p>En representación del Dr. Ugaz, solicitamos copia íntegra de la denuncia, de las capturas presentadas y la identidad de todas las personas que hayan declarado, para ejercer su derecho de defensa.</p>' },
];

export const QUIZ = [
  { q: 'Congelar aumentos solo en una categoría donde casi todas son mujeres, manteniendo los bonos de otra con mayoría de hombres, puede…', ops: ['Ser una decisión neutral de costos', 'Implicar discriminación remunerativa si no hay criterios objetivos (Ley 30709)', 'Ser obligatorio en crisis', 'Depender del sindicato'], ok: 1, por: 'La Ley 30709 exige que las remuneraciones se fijen sin discriminación. Una medida de costos también debe revisarse con esa lupa.' },
  { q: 'Tu propuesta llega a 8.3 % y la meta es 10 %. ¿Qué es lo más sólido?', ops: ['Inflar supuestos hasta llegar', 'Mostrar la brecha, cómo se cierra en el tiempo y qué decisión se le pide al directorio', 'Esconder la meta', 'Cerrarla con despidos sin análisis'], ok: 1, por: 'Una brecha a la vista, con un plan para cerrarla, es más creíble que un 10 % que se cae en marzo.' },
  { q: 'En una presentación a un directorio, ¿qué va al final?', ops: ['Los gráficos más bonitos', 'La decisión concreta que se le pide', 'Los agradecimientos', 'Los anexos'], ok: 1, por: 'Un directorio necesita saber qué tiene que decidir. Si no se lo pides con claridad, decide otra cosa.' },
  { q: 'El abogado del denunciado pide la identidad de todos los testigos y las capturas completas. ¿Qué haces?', ops: ['Se lo das todo', 'Le das los hechos imputados para que pueda defenderse, protegiendo la identidad de testigos según el procedimiento', 'No le das nada', 'Se lo pasas a la presidenta del directorio'], ok: 1, por: 'El denunciado tiene derecho a conocer los hechos para defenderse; la reserva protege a la víctima y a quienes declararon.' },
  { q: 'Pedirle al personal administrativo que firme una carta «voluntaria» de reducción de sueldo ya redactada…', ops: ['Es un acuerdo válido siempre', 'Puede encubrir una reducción inmotivada si el consentimiento no es real', 'Es obligatorio si lo pide el directorio', 'Es una buena práctica'], ok: 1, por: 'La reducción inmotivada de la remuneración es acto de hostilidad (D.S. 003-97-TR, art. 30 b). Una carta pre-firmada no es consentimiento libre.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '08:00', ch: 'documento', who: null, titulo: 'La pestaña 3', banner: 'assets/esc/lupa.webp', lugar: 'Tu oficina · piso 7', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Abres el modelo. Las pestañas 1 y 2 son las que hiciste con Jorge ${F.has('modelo_conjunto') ? 'y con Rodrigo' : ''}. La pestaña 3, «Cierre de brecha», apareció anoche: alguien de Finanzas la agregó para «llegar al 10 % sí o sí».</p><p>Mañana, este Excel estará proyectado en la sala del piso 2. <mark class="clave">Revisas cada fila</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la ley o lo que no debería ir en la propuesta.',
    doc: { t: 'Modelo de costos de personal 2027 · v4', sub: 'Escenario medio · todas las pestañas' },
    lines: [
      { id: 'vac', t: 'Cubrir las 42 vacantes en cuatro fases: ahorro neto en horas extra a partir del cuarto mes.' },
      { id: 'aus', t: 'Plan conjunto con el sindicato para reducir un punto el ausentismo en turnos de noche.' },
      { id: 'cap', t: 'Capacitación rediseñada: SST e inducción intactas; ahorro cercano a la mitad del presupuesto.' },
      { id: 'plaz', t: 'Congelar plazas administrativas no críticas hasta junio.' },
      { id: 'gen', t: 'Pestaña 3: congelar aumentos 2027 solo para técnicas y asistentes de enfermería (93 % mujeres) y mantener el bono anual de jefes médicos (78 % hombres).', bad: LEY, why: 'Sin un criterio objetivo, tratar distinto a dos categorías con esa composición puede ser discriminación remunerativa: las remuneraciones se fijan sin discriminación (Ley 30709, art. 3).' },
      { id: 'carta', t: 'Pestaña 3: reducción «voluntaria» de 10 % de jornada y sueldo para administrativos, con carta de aceptación ya redactada para que firmen.', bad: LEY, why: 'Una carta pre-redactada no es un consentimiento libre. Una reducción impuesta así es inmotivada y puede ser acto de hostilidad (D.S. 003-97-TR, art. 30 b).' },
      { id: 'cese', t: 'Pestaña 3: cese colectivo por motivos económicos de 60 administrativos.', bad: LEY, why: '60 personas no llegan al 10 % del personal que exige el procedimiento de cese colectivo por motivos económicos (D.S. 003-97-TR, art. 48).' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 3 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -6 : 6, etica: missLey ? -3 : 3, calidad: missLey ? -2 : 3 },
      flags: missLey ? [] : ['modelo_limpio'], cartera: { modelo: missLey ? 'Modelo con medidas ilegales en la pestaña 3' : 'Modelo limpio: 8.3 % sin pestaña 3' },
      out: missLey ? 'La pestaña 3 queda. Mañana la verá el directorio, y alguno de sus abogados también.' : 'Borras la pestaña 3 y dejas una nota en su lugar: «Medidas evaluadas y descartadas por riesgo legal: ver anexo». El modelo vuelve a 8.3 %. Ahora hay que decidir qué hacer con el 1.7 % que falta.',
      pro: { ok: 'Lo que no se puede defender en voz alta no entra en la propuesta.', risk: 'Una medida discriminatoria o ilegal en un documento del directorio compromete a todo el grupo.', info: 'Conserva el anexo: muestra que evaluaste opciones y por qué las descartaste.' },
      kusi: missLey ? ['indignado', 'La pestaña 3 era una trampa.'] : ['celebra', '¡Pestaña 3, eliminada con argumentos!'],
    }),
    rules: [[LEY, 'Las remuneraciones de cada categoría se fijan sin discriminación (Ley 30709, art. 3).'], [LEY, 'La reducción inmotivada de la remuneración es acto de hostilidad (D.S. 003-97-TR, art. 30 b).']],
    mirada: {
      ve: 'Una medida de costos puede ser neutral en el papel y discriminatoria en la práctica. Mirar a quién afecta cada recorte (por género, por categoría, por clínica) es parte del trabajo de una gerencia de personas, no un detalle.',
      normas: [{ ley: 'Ley 30709, art. 3', dice: 'Las remuneraciones que corresponden a cada categoría las fija el empleador sin discriminación.', practica: 'Antes de congelar o premiar a una categoría, revisa su composición y el criterio objetivo que lo justifica.' }],
    },
  },
  {
    id: 'h2', t: '10:00', ch: 'presencial', who: 'equipo', titulo: 'El 1.7 %', banner: 'assets/foto2/revisan.webp', lugar: 'Oficina de Finanzas · piso 8', show: ['etica', 'confianza', 'calidad'],
    body: (n, F) => `<p>Jorge, Rodrigo y tú frente al modelo sin la pestaña 3. ${F.has('si_ciego') ? 'Rodrigo te recuerda que el lunes le dijiste a la doctora que el 10 % saldría de personal.' : F.has('plazo_datos') ? 'Le prometiste a la doctora datos, no magia.' : ''}</p><p>Rodrigo: «Si subimos un poco los supuestos de ausentismo y de rotación, llegamos al 10. Nadie lo va a revisar línea por línea». Jorge mira al piso. <mark class="clave">¿Qué haces con la brecha?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Presentar el 8.3 % con supuestos conservadores, mostrar la brecha y un camino para cerrarla en 18 meses (segunda etapa de rotación y renegociación de la EPS), y pedirle al directorio que decida si acepta ese plazo.',
        res: { q: 'buena', fx: { etica: 5, calidad: 4, confianza: 1 }, rel: { equipo: 1 }, flags: ['propuesta_honesta'], cartera: { recorte: 'Propuesta: 8.3 % en 2027 y 10 % en 18 meses' },
          out: 'Rodrigo se recuesta en la silla. «Me van a matar.» Luego: «Pero si alguien revisa, nos salva». Jorge levanta la vista por primera vez en la mañana.',
          pro: { ok: 'Una propuesta que no llega a la meta pero se sostiene vale más que una que llega y se cae.', risk: 'La doctora pidió 10 %. Tendrás que defender el plazo.', info: 'Muestra mes a mes cuándo se llega al 10 %.' },
          kusi: ['animo', 'Verdad incómoda, propuesta sólida.'] } },
      { id: 'b', label: 'Subir los supuestos hasta llegar al 10 %: son estimaciones, y la doctora quiere ese número.',
        res: { q: 'riesgosa', fx: { etica: -5, calidad: -3, confianza: 2 }, flags: ['propuesta_maquillada'], cartera: { recorte: 'Propuesta: 10 % con supuestos optimistas' },
          out: 'El modelo marca 10.0 %. Jorge guarda el archivo sin decir nada. Esa noche te escribe: «¿Y en marzo, cuando no se cumpla?».',
          pro: { ok: 'Llegas al número pedido.', risk: 'Cuando los supuestos no se cumplan, la credibilidad de Gestión Humana se va con ellos.' },
          kusi: ['preocupado', 'En marzo los números cobran.'] } },
      { id: 'c', label: 'Cerrar la brecha con 60 despidos administrativos, uno por uno, pagando la indemnización: es legal y llega al 10 %.',
        res: { q: 'aceptable', fx: { calidad: 1, personas: -5, confianza: -1 }, rel: { equipo: -1 }, flags: ['propuesta_despidos'], cartera: { recorte: 'Propuesta: 10 % con 60 despidos administrativos' },
          out: 'Rodrigo calcula: con las indemnizaciones, el ahorro del primer año es menor de lo que parece. Igual llega. Jorge pregunta en voz baja quién arma la lista.',
          pro: { ok: 'Es un camino legal con indemnización.', risk: 'Sesenta personas, en medio de un acuerdo con el sindicato que habló de confianza. Y el ahorro neto del primer año es menor.' },
          kusi: ['triste', 'Sesenta nombres para un 1.7 %.'] } },
    ],
    rules: [[BP, 'Una propuesta debe mostrar sus supuestos y su brecha. Lo que no se dice, se descubre.']],
    mirada: {
      ve: 'La tentación de toda gerencia frente a un directorio es llegar al número. Pero una meta alcanzada con supuestos inflados es una deuda que se paga con credibilidad. Mostrar la brecha y proponer cómo cerrarla es pensar estratégicamente: le das al directorio una decisión real.',
      visual: { tipo: 'rango', titulo: 'Ahorro en costos de personal (%)', min: 0, max: 12, banda: [8, 10], marcas: [['2027 conservador', 8.3], ['Meta del directorio', 10], ['18 meses', 10.2]] },
    },
  },
  {
    id: 'h3', t: '12:30', ch: 'documento', who: null, titulo: 'La historia en láminas', banner: 'assets/esc/idea.webp', lugar: 'Tu oficina · piso 7', show: ['calidad', 'tiempo'],
    body: () => `<p>Tienes veinte minutos en la sesión de mañana. Doris te recuerda que la doctora corta a las presentaciones que se pasan del tiempo.</p><p><mark class="clave">Ordena las láminas</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las láminas de la presentación. Usa las flechas.', boton: 'Armar la presentación',
    items: [
      { id: 'pro', t: 'El problema: lo que pide el directorio y por qué', por: 'Empiezas por su preocupación, no por la tuya.' },
      { id: 'cri', t: 'Los tres criterios: seguridad del paciente, legalidad y ahorro sostenible', por: 'El marco con que se evaluó todo.' },
      { id: 'cos', t: 'Los costos ocultos: horas extra, rotación y ausentismo', por: 'El hallazgo que cambia la conversación.' },
      { id: 'med', t: 'Las medidas y su ahorro, por escenario', por: 'Con supuestos a la vista.' },
      { id: 'no', t: 'Lo que no se recorta y por qué', por: 'SST, inducción, y lo que se descartó por riesgo legal.' },
      { id: 'rie', t: 'Riesgos y el acuerdo con el sindicato', por: 'Sin sorpresas.' },
      { id: 'dec', t: 'La decisión que se le pide al directorio', por: 'Al final, claro y en una frase.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: 1 },
        flags: q === 'riesgosa' ? [] : ['presentacion_ordenada'], cartera: { recorte: q === 'riesgosa' ? 'Presentación desordenada' : 'Presentación de siete láminas' },
        out: q === 'buena' ? 'Siete láminas. La última dice solo: «Aprobar el plan por fases y el plazo de 18 meses para llegar al 10 %». Fernando la lee y dice: «Esa es la que van a recordar».' : 'La presentación tiene todo, aunque el orden obliga a explicar dos veces lo mismo.',
        pro: { ok: 'Una historia en orden: del problema del directorio a la decisión que le pides.', info: 'Ensaya en voz alta con reloj. Veinte minutos son quince de exposición y cinco de margen.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Siete láminas, una historia.' : 'El orden también convence.'],
      };
    },
    mirada: {
      ve: 'Un directorio no evalúa tu esfuerzo: evalúa si entiende qué tiene que decidir y por qué. Empezar por su preocupación y terminar con la decisión pedida es una estructura simple que casi nadie respeta.',
      visual: { tipo: 'flujo', titulo: 'Tus veinte minutos', pasos: ['Problema', 'Criterios', 'Costos ocultos', 'Medidas', 'Lo que no se recorta', 'Riesgos', 'Decisión'] },
    },
  },
  {
    id: 'h4', t: '15:00', ch: 'presencial', who: null, titulo: 'Quiénes se sientan mañana', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Piso 9 · Gerencia General', show: ['confianza', 'calidad'],
    body: () => `<p>Fernando ha estado en veinte sesiones de este directorio. Te da media hora antes de su reunión con el banco.</p><p>«Son cinco, con la doctora. <mark class="clave">Pregúntame lo que necesites</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'quien', label: '«¿Quién va a ser el más duro?»', info: '«El Ing. Mendoza, el del fondo de inversión. Pregunta siempre lo mismo: "¿Y si no se cumple?". Ten un plan B para el supuesto más débil.»' },
      { id: 'aliado', label: '«¿Quién podría apoyar la propuesta?»', info: '«La Dra. Carrión, la directora independiente. Fue jefa de UCI en un hospital público. Si ve la lámina de las horas extra, la vas a tener.»' },
      { id: 'rossi', label: '«¿Cómo llega la doctora después de esta semana?»', info: '«Molesta contigo por lo de Ugaz. Pero es médica: si le muestras que la UCI estaba con horas impuestas, le va a doler más eso que tu correo. No hables del caso en la sesión. Si alguien pregunta, di que está en curso y con reserva.»' },
      { id: 'banco', label: '«¿Qué necesita ver el banco en enero?»', info: '«Un plan creíble para bajar costos. Al banco le importa más que el plan se cumpla que el número exacto. Ese es tu argumento para los 18 meses.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, calidad: picks.includes('banco') || picks.includes('quien') ? 3 : 1 }, rel: {},
      flags: picks.includes('banco') ? ['argumento_banco'] : [],
      out: picks.includes('banco') ? 'Sales con el argumento que te faltaba: al banco le importa un plan que se cumpla. Lo agregas a la lámina 7.' : 'Sales con un mapa de la mesa de mañana. Anotas los nombres en la última hoja de tu libreta.',
      kusi: ['curioso', 'Conocer la mesa es media presentación.'],
    }),
    mirada: {
      ve: 'Presentar a un directorio es presentar a personas con preguntas distintas. Saber quién pregunta por el riesgo, quién puede ser aliada y qué necesita el tercero que no está en la sala (el banco) te permite preparar las respuestas antes de las preguntas.',
    },
  },
  {
    id: 'h5', t: '17:00', ch: 'whatsapp', who: null, titulo: 'El equipo en escena', banner: 'assets/foto2/tablet-equipo.webp', show: ['confianza', 'personas'],
    body: (n, F) => `<p>${F.has('plan_equipo') ? 'Tu equipo cumplió el plan de diez días casi al pie de la letra.' : 'Tu equipo llegó hasta aquí a pesar del desorden de la primera semana.'} La presentación es tuya, pero el trabajo fue de los cuatro.</p><p>Escribes en el grupo. <mark class="clave">Mañana el directorio verá lo que tú decidas mostrar</mark>.</p>`,
    type: 'compose', enviaA: 'jefaturas', para: 'Para: GH · Jefaturas', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'El reconocimiento', ops: [
        { id: 'g1', t: 'Esta propuesta existe porque Jorge encontró las vacantes, Silvia sostuvo la mesa y Mariela midió la inducción.', ok: true, por: 'Concreto: cada uno sabe qué se le reconoce.' },
        { id: 'g2', t: 'Gracias a todos por el esfuerzo.', ok: null, por: 'Amable, pero genérico.' },
      ] },
      { id: 'rol', t: 'Mañana', ops: [
        { id: 'r1', t: 'Quiero que cada uno presente su lámina: tres minutos, y yo cierro con la decisión.', ok: true, por: 'El directorio ve a un equipo y tu gente gana visibilidad.' },
        { id: 'r2', t: 'Yo presento todo; ustedes esperen afuera por si hay preguntas.', ok: false, por: 'Te quedas con el escenario y ellos con el pasillo.' },
      ] },
      { id: 'cuidar', t: 'Hoy', ops: [
        { id: 'c1', t: 'Hoy se van antes de las 7. Necesito que mañana lleguen descansados.', ok: true },
        { id: 'c2', t: 'Hoy nos quedamos hasta terminar de pulir todo.', ok: false, por: 'Diez días de crisis. Otra noche larga no mejora la presentación.' },
      ] },
    ],
    res: sel => {
      const malas = ['r2', 'c2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas ? (malas === 2 ? 'riesgosa' : 'aceptable') : sel.gracias === 'g1' ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { equipo: q === 'buena' ? 1 : 0 },
        flags: sel.rol === 'r1' ? ['equipo_en_escena'] : [], cartera: { equipo: sel.rol === 'r1' ? 'Cada jefatura presenta su parte' : 'Presentas sola' },
        out: q === 'buena' ? 'Silvia responde con un audio en aimara que luego traduce: «Mi mamá dice que quien comparte la olla, come mejor». Mariela manda un sticker de un gato aplaudiendo.' : 'El grupo responde con «ok». Jorge se queda hasta las 10 cambiando colores al gráfico.',
        pro: { ok: 'Reconocer con precisión y dar escenario a tu equipo es liderar líderes.', risk: 'Una gerente que presenta sola el trabajo de todos pierde a su equipo justo cuando más lo necesita.', info: 'Ensayen juntos mañana a las 8, una sola vez.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mañana presenta un equipo!' : '¿Y tu equipo?'],
      };
    },
    mirada: {
      ve: 'El directorio es también una vitrina para tu equipo. Darles su lámina no te quita protagonismo: muestra que Gestión Humana tiene profundidad, y les enseña a presentar arriba. Eso también es desarrollo de personas.',
    },
  },
  {
    id: 'h6', t: '18:30', ch: 'correo', who: null, titulo: 'El abogado del Dr. Ugaz', banner: 'assets/esc/pendulo.webp', show: ['etica', 'cumplimiento', 'personas'],
    mail: { from: 'Estudio Benavides & Lira · Abogados', to: 'Gerencia de Gestión Humana', asunto: 'Solicitud de información' },
    body: () => `<p>En representación del Dr. Ugaz, solicitamos <mark class="clave">copia íntegra de la denuncia, de las capturas y la identidad de todas las personas que hayan declarado</mark>, para ejercer su derecho de defensa. Esperamos respuesta hoy.</p><p>Silvia te avisa que la instancia investigadora ya tomó dos declaraciones más: otras dos enfermeras de Miraflores contaron episodios parecidos.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder que el Dr. Ugaz recibirá por la instancia investigadora los hechos que se le imputan, con detalle suficiente para presentar sus descargos, y que la identidad de los testigos se protege según el procedimiento.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4 }, flags: ['defensa_cuidada'], cartera: { denuncia: 'Ugaz notificado de los hechos; testigos protegidos' },
          responde: 'Estimados: el Dr. Ugaz recibirá de la instancia investigadora el detalle de los hechos imputados para que presente sus descargos en el plazo del procedimiento. La identidad de quienes declararon se protege conforme al procedimiento y a la normativa de datos personales.',
          out: 'El abogado responde en diez minutos: «Tomamos nota. Nos reservamos el derecho de actuar». Silvia lee la frase dos veces: «Eso suena a carta notarial, jefa».',
          pro: { ok: 'Garantizas el derecho de defensa sin exponer a la víctima ni a los testigos.', risk: 'Los abogados del denunciado van a presionar más.', info: 'Avisa a Legal y guarda todo el intercambio en el expediente.' },
          kusi: ['animo', 'Defensa para él, protección para ellas.'] } },
      { id: 'b', label: 'Enviarle todo lo que pide: el doctor tiene derecho a defenderse y no quieres problemas legales en la víspera del directorio.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -5, cumplimiento: -3 }, flags: ['testigos_expuestos'], cartera: { denuncia: 'Identidad de los testigos entregada al denunciado' },
          responde: 'Estimados: adjunto la denuncia completa, las capturas y la relación de personas que declararon.',
          out: 'A las 9 de la noche, una de las enfermeras que declaró le escribe a Silvia: «Me llamó el doctor. ¿Cómo sabe que hablé?».',
          pro: { ok: 'Evitas un choque con los abogados hoy.', risk: 'Expones a la víctima y a los testigos al denunciado. Nadie más se animará a declarar.' },
          kusi: ['indignado', '¿Cómo sabe que hablé? Eso no debió pasar.'] } },
      { id: 'c', label: 'No responder: no tienes tiempo hoy y el caso puede esperar hasta el viernes.',
        res: { q: 'aceptable', fx: { tiempo: 2, cumplimiento: -1 },
          out: 'El correo queda sin respuesta. El abogado le escribe a la doctora Rossi a las 8 de la noche, con copia a Fernando.',
          pro: { ok: 'Te concentras en mañana.', risk: 'El silencio también se usa en contra.' },
          kusi: ['pensando', 'Un correo sin responder es una puerta abierta.'] } },
    ],
    rules: [[LEY, 'El procedimiento de la Ley 27942 y su Reglamento protege a la víctima y garantiza el derecho de defensa del denunciado.'], [LEY, 'Los datos del expediente son confidenciales (Ley 29733, art. 17).']],
    mirada: {
      ve: 'El debido proceso protege a todos: el denunciado tiene derecho a saber de qué se le acusa para defenderse; la víctima y los testigos tienen derecho a no quedar expuestos. Darle todo a la defensa o no darle nada son dos maneras de romper el mismo procedimiento.',
      visual: { tipo: 'balanza', a: { t: 'Derecho de defensa', items: ['Conocer los hechos', 'Presentar descargos', 'Plazo para responder'] }, b: { t: 'Protección', items: ['Reserva de testigos', 'Medidas para la víctima', 'Sin represalias'] } },
    },
  },
];
