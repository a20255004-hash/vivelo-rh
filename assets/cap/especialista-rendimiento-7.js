// Analista de Gestión del Desempeño · Capítulo 7 · «El reclamo» · Semana 2, martes.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas citadas (textos oficiales en docs/normas/txt; SPIJ: https://spij.minjus.gob.pe):
// - Ley 29733, art. 19: derecho de acceso del titular a la información sobre sí mismo, cómo se recopiló y por qué.
//   (El plazo de respuesta lo fija el reglamento, D.S. 016-2024-JUS; aquí no se cita cifra.)
// - Constitución, art. 26 inc. 1: igualdad de oportunidades sin discriminación.
// - Ley 30709, arts. 1 y 6: igual remuneración por igual trabajo; protección por embarazo y lactancia.

export const CAP = {
  n: 7, titulo: 'El reclamo', dia: 'Semana 2, martes', foto: 'assets/foto2/revisan.webp',
  lugar: 'Alimentos Lima S.A. · Talento',
  inicio: '08:00', fin: '19:00', cierreHora: '18:40',
  apertura: 'Martes. Anoche, a las 23:12, llegó un correo largo a la bandeja de Talento. El asunto dice «Reclamo formal» y lo firma Lucía Paredes, analista de Marketing.', boton: 'Abrir el correo',
  kusi: 'Un reclamo no es un ataque: es alguien que todavía confía en que el proceso puede corregirse.',
  lead: 'Respondiste un reclamo a tiempo, revisaste la nota con evidencia y no con simpatía, entregaste a Lucía lo que le corresponde y corregiste un problema que no era solo suyo.',
  reflexion: '¿Qué pasa con la confianza en un proceso cuando solo se corrige lo que alguien reclama?',
  siguiente: { n: 8, titulo: 'Los bonos', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'reclamo', p: 'Reclamo de Lucía Paredes', j: 'Talento', d: 0, e: 'Recibido 23:12' },
  { id: 'licencias', p: 'Madres que volvieron de licencia', j: 'Talento · Legal', d: 0, e: '14 casos' },
  { id: 'reuniones', p: 'Reuniones de retroalimentación', j: '112 jefes', d: 0, e: '38 % hechas' },
  { id: 'andres', p: 'Retroalimentación de Andrés', j: 'Alberto Sáenz', d: 0, e: 'Mañana' },
  { id: 'bonos', p: 'Simulación de bonos', j: 'Mónica · Finanzas', d: 0, e: 'Mañana' },
];

export const FUTURO = {
  acuse_claro: ['Le respondiste a Lucía el mismo día, con pasos y fechas.', 'Lucía esperará el resultado sin escalar.'],
  acuse_defensivo: ['Tu primera respuesta defendió a Carla.', 'Lucía copió a Legal en su siguiente correo.'],
  revision_metas: ['Revisaste la nota de Lucía con metas ajustadas al tiempo trabajado.', 'Ese criterio puede servir para todas.'],
  acceso_ok: ['Entregaste a Lucía su formato, sus comentarios y la parte del acta que la refiere.', 'Ejerció su derecho de acceso sin trabas.'],
  acceso_mal: ['Le diste a Lucía datos de otras personas, o le negaste los suyos.', 'Hay un problema de datos personales abierto.'],
  criterio_todas: ['El ajuste por licencia se aplicó a las 14 madres, no solo a quien reclamó.', 'Mónica tendrá que recalcular 14 bonos.'],
  criterio_solo_lucia: ['Solo se corrigió la nota de Lucía.', 'Las otras 13 siguen con el mismo problema.'],
  lucia_reunion: ['Invitaste a Lucía a una reunión para explicarle el resultado.', 'La reunión será el jueves con Carla.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  carla: { n: 'Carla Bustos', sub: 'Jefa de Marketing', c: '#B83280' },
  lucia: { n: 'Lucía Paredes', sub: 'Analista de Marketing', c: '#2C7A7B' },
  monica: { n: 'Mónica Quispe', sub: 'Analista de Compensaciones', c: '#7B4B94' },
};

export const WSP = [
  { chat: 'talento', t: '08:10', de: 'Paola', txt: 'Vi el correo de Lucía. Lo llevas tú, con método, como lo de Andrés. Yo te respaldo.' },
  { chat: 'carla', t: '08:30', de: 'Carla', txt: 'Ya vi el reclamo 😞 Yo le pedí disculpas ayer, pero creo que no fue suficiente.', si: 'carla_apoyada' },
  { chat: 'carla', t: '08:30', de: 'Carla', txt: '¿Viste el correo de Lucía? Yo no dije nada malo, lo del bebé fue con cariño.', si: 'guion_trampa' },
  { chat: 'alberto', t: '12:15', de: 'Alberto', txt: 'Lo de mañana con Huerta sigue en pie. 9:00. Ni un minuto más de 30.', si: 'alberto_preparado' },
  { chat: 'monica', t: '15:40', de: 'Mónica', txt: '¿14 recálculos? 😵 Ok… pero que conste que fue lo correcto.', si: 'criterio_todas' },
  { chat: 'lucia', t: '18:20', de: 'Lucía', txt: 'Gracias por responder rápido y por explicarme. El jueves estaré.', si: 'lucia_reunion' },
];

export const CORREOS = [
  { t: '08:00', de: 'Lucía Paredes', para: 'Talento', asunto: 'Reclamo formal · evaluación de desempeño', html: '<p>Buenas noches. Estuve de licencia de maternidad cinco meses este año. Mi evaluación mide las metas de los doce meses como si hubiera estado todo el año. Pido que se revise mi nota y solicito una copia de mi formato, de los comentarios de mi jefa y de lo que se decidió sobre mí en la calibración.</p><p>Además, en la reunión de ayer se mencionó a mi hija como si fuera la razón de mi nota. Eso me dolió mucho.</p><p>Lucía Paredes</p>' },
  { t: '13:30', de: 'Legal · Alimentos Lima', para: 'Analista de Gestión del Desempeño', asunto: 'RE: Reclamo L. Paredes', html: '<p>Recuerden que la trabajadora tiene derecho de acceso a sus datos (Ley 29733, art. 19). Entréguenle solo lo que se refiere a ella, sin datos de otros trabajadores. Mantengan todo por escrito.</p>' },
];

export const QUIZ = [
  { q: 'Lucía pide copia de su formato, los comentarios y lo que se decidió sobre ella. Según la Ley 29733, art. 19…', ops: ['No tiene derecho', 'Tiene derecho a acceder a la información sobre sí misma', 'Solo con orden judicial', 'Solo si su jefa acepta'], ok: 1, por: 'El derecho de acceso le permite obtener la información que sobre ella es objeto de tratamiento.' },
  { q: 'Al entregarle la parte del acta, ¿qué debes cuidar?', ops: ['Darle el acta completa', 'Darle solo lo que se refiere a ella, sin datos de otras personas', 'Borrar todo lo que la perjudica', 'Nada'], ok: 1, por: 'Su derecho cubre sus datos, no los de sus compañeros.' },
  { q: 'Una trabajadora estuvo cinco meses de licencia de maternidad. Sus metas deberían evaluarse…', ops: ['Por los doce meses, como todos', 'Ajustadas al tiempo efectivamente trabajado', 'No se evalúa ese año', 'Con nota automática de cumple'], ok: 1, por: 'Medirla contra doce meses la pone en desventaja por ser madre, algo que la igualdad sin discriminación no permite.' },
  { q: 'Si el error afecta a 14 personas y solo una reclamó, lo correcto es…', ops: ['Corregir solo a quien reclamó', 'Corregir a las 14 con el mismo criterio', 'No corregir para no abrir la puerta', 'Esperar más reclamos'], ok: 1, por: 'Un criterio justo se aplica a todas las personas en la misma situación, no solo a quien se queja.' },
  { q: 'La primera respuesta a un reclamo debe…', ops: ['Defender al jefe', 'Acusar recibo, explicar los pasos y dar una fecha', 'Esperar a tener la solución', 'Pedirle que retire el reclamo'], ok: 1, por: 'Responder rápido con pasos y fechas evita que el reclamo escale.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '08:15', ch: 'correo', who: null, titulo: 'La primera respuesta', banner: 'assets/esc/escritorio.webp', show: ['personas', 'confianza', 'cumplimiento'],
    mail: { from: 'Lucía Paredes', to: 'Talento', asunto: 'Reclamo formal · evaluación de desempeño' },
    body: (n, F) => `<p>Estuve de licencia de maternidad cinco meses. Mi evaluación mide las metas de los doce meses. Pido que se revise mi nota y una copia de mi formato, los comentarios y lo que se decidió sobre mí. ${F.has('guion_trampa') ? 'Además, en la reunión se mencionó a mi hija como la razón de mi nota.' : 'En la reunión me sentí juzgada por ser mamá.'}</p><p><mark class="clave">Lucía Paredes</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Acusar recibo hoy, explicar los pasos de la revisión, la fecha de respuesta y cómo le entregarán sus documentos.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, cumplimiento: 2 }, flags: ['acuse_claro'], cartera: { reclamo: 'Acuse enviado: respuesta el jueves' },
          responde: 'Lucía, recibimos tu reclamo y lo vamos a revisar con cuidado. Hoy revisamos tu evaluación con tus metas ajustadas al tiempo que trabajaste. Te entregaremos por escrito tu formato, los comentarios y la parte de la calibración que se refiere a ti. El jueves te damos una respuesta en una reunión. Gracias por escribirnos.',
          out: 'Lucía responde a los veinte minutos: «Gracias por contestar tan rápido».', kusi: ['feliz', 'Rápido, claro y con fecha.'] } },
      { id: 'b', label: 'Explicarle que su nota fue calibrada por un comité de gerentes y que Carla no tuvo mala intención.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: -3 }, flags: ['acuse_defensivo'],
          responde: 'Lucía, tu nota fue revisada por un comité de gerentes. Carla no tuvo mala intención, seguro fue un malentendido.',
          out: 'Lucía responde con copia a Legal: «Pido que mi reclamo lo revise alguien imparcial».', kusi: ['preocupado', 'Defendiste antes de revisar…'] } },
      { id: 'c', label: 'No responder hasta tener la revisión completa: es mejor contestar una sola vez con todo.',
        res: { q: 'aceptable', fx: { personas: -1, tiempo: 1 },
          responde: '(Sin respuesta por ahora.)',
          out: 'Lucía pasa el día sin saber si alguien leyó su correo. A las cuatro escribe de nuevo, más dura.', kusi: ['pensando', 'El silencio también responde.'] } },
    ],
    rules: [[BP, 'Acusa recibo de un reclamo el mismo día, con pasos y fecha.']],
    mirada: { ve: 'La primera respuesta a un reclamo decide si la persona confía en el proceso o lo escala. No hace falta tener la solución: hace falta que sepa que alguien la escuchó y qué viene.' },
  },
  {
    id: 'g2', t: '09:30', ch: 'documento', who: null, titulo: 'Revisar con evidencia', banner: 'assets/esc/lupa.webp', show: ['calidad', 'etica'],
    body: (n, F) => `<p>Abres el expediente de Lucía. Antes de la calibración tenía «necesita mejorar»; ${F.has('licencias_corregidas') ? 'el comité la subió a «cumple» al quitar el descuento por licencia.' : 'después quedó en «cumple».'} Pero sus metas siguen midiéndose contra doce meses.</p><p>Tienes cuatro fuentes y <mark class="clave">tiempo para dos</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos fuentes que vas a revisar.',
    opts: [
      { id: 'prorr', label: 'Sus metas recalculadas por los siete meses trabajados', info: 'Con la meta ajustada a siete meses, Lucía cumplió el 118 %. Lideró la campaña de verano, la de mejor retorno del año.' },
      { id: 'coment', label: 'Los comentarios de Carla en el formato', info: '«Muy buena analista. Bajó su rendimiento en el segundo semestre por la licencia.» La única crítica es la ausencia.' },
      { id: 'acta', label: 'Lo que dice el acta sobre ella', info: '«Se corrigió el descuento por licencia.» Nadie revisó que las metas siguieran contando los doce meses.' },
      { id: 'otros', label: 'Las notas de los otros analistas de Marketing', info: 'Ves que dos compañeros con menos resultados salieron «sobresaliente». Es útil, pero no puedes compartirlo con ella: son datos de otras personas.' },
    ],
    res: picks => ({
      q: picks.includes('prorr') ? 'buena' : 'aceptable', fx: { calidad: picks.includes('prorr') ? 5 : 1, etica: 2 },
      flags: picks.includes('prorr') ? ['revision_metas'] : [],
      cartera: { reclamo: picks.includes('prorr') ? 'Meta ajustada: 118 %' : 'Revisión sin metas ajustadas' },
      out: picks.includes('prorr') ? 'Con las metas ajustadas al tiempo trabajado, la nota cambia: según las anclas, Lucía es sobresaliente.' : 'Confirmas que la licencia pesó en su nota, pero te falta el dato que permite decidir.',
      kusi: [picks.includes('prorr') ? 'sorpresa' : 'pensando', picks.includes('prorr') ? '¡118 %! El problema no era ella: era la medida.' : 'Falta el dato clave.'],
    }),
    rules: [[LEY, 'Constitución, art. 26: igualdad de oportunidades sin discriminación.']],
    mirada: {
      ve: 'Quitar el descuento por licencia no basta si las metas siguen contando los meses en que no estuvo. La revisión justa mide lo que hizo en el tiempo que trabajó.',
      visual: { tipo: 'cambio', titulo: 'La misma persona, dos medidas', pares: [['Meta de 12 meses: 69 %', 'Meta de 7 meses: 118 %'], ['«Bajó por la licencia»', 'Lideró la mejor campaña del año']] },
    },
  },
  {
    id: 'g3', t: '11:20', ch: 'documento', who: null, titulo: 'Lo que le corresponde', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'etica'],
    body: () => `<p>Lucía pidió sus documentos. Wendy junta todo en un sobre manila y pregunta: «¿Le pongo también el acta completa? Así ve que no fue la única».</p><p>Decides <mark class="clave">qué va en el sobre</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que entregas a Lucía.', boton: 'Cerrar el sobre', resumen: 'Entregaste',
    cols: ['Documento', 'Qué contiene'],
    rows: [
      { id: 'formato', cells: ['Su formato de evaluación completo', 'Sus metas, factores y nota'] },
      { id: 'coment', cells: ['Los comentarios de Carla sobre ella', 'Lo que escribió su jefa'] },
      { id: 'acta', cells: ['La parte del acta que se refiere a ella', 'La decisión del comité sobre su caso'] },
      { id: 'completa', cells: ['El acta completa del comité', 'Las notas y decisiones de todos'] },
      { id: 'compas', cells: ['Las notas de sus compañeros de Marketing', 'Para que compare'] },
      { id: 'nada', cells: ['Solo una carta con su nota final', 'Lo mínimo'] },
    ],
    score: { formato: 3, coment: 3, acta: 3, completa: -3, compas: -4, nada: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : -3, etica: q === 'buena' ? 3 : -2 },
        flags: [q === 'buena' ? 'acceso_ok' : 'acceso_mal'], cartera: { reclamo: q === 'buena' ? 'Documentos entregados: solo los suyos' : 'Entrega con problemas de datos' },
        out: q === 'buena' ? 'El sobre tiene exactamente lo que es de Lucía. Legal lo revisa en cinco minutos: «Perfecto».' : picks.includes('compas') || picks.includes('completa') ? 'Legal detiene el sobre: «Ahí van datos de otras catorce personas». Tienes que rehacerlo.' : 'Lucía recibirá menos de lo que pidió y de lo que le corresponde.',
        pro: { ok: 'El derecho de acceso cubre sus datos completos, y solo los suyos.', risk: 'Entregar notas ajenas abre un problema de datos personales con otras personas.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? 'Lo suyo, todo lo suyo, y nada más.' : 'Ese sobre no podía salir así.'],
      };
    },
    rules: [[LEY, 'Ley 29733, art. 19: la titular tiene derecho a obtener la información que sobre sí misma es objeto de tratamiento.']],
    mirada: {
      ve: 'El derecho de acceso tiene dos bordes: no puedes negarle a Lucía lo que es suyo, ni darle lo que es de otros. Las dos cosas son protección de datos.',
      visual: { tipo: 'balanza', a: { t: 'Lo que es de Lucía', items: ['Su formato', 'Los comentarios sobre ella', 'La decisión sobre su caso'] }, b: { t: 'Lo que no es de Lucía', items: ['Notas de sus compañeros', 'El acta completa'] } },
      normas: [{ ley: 'Ley 29733, art. 19', dice: 'El titular tiene derecho a obtener la información que sobre sí mismo sea objeto de tratamiento, la forma en que sus datos fueron recopilados y las razones que motivaron su recopilación.', practica: 'Lucía puede pedir su evaluación, los comentarios y lo que se decidió sobre ella.' }],
    },
  },
  {
    id: 'g4', t: '13:40', ch: 'documento', who: null, titulo: 'La respuesta escrita', banner: 'assets/foto2/celebra-tablet.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>Almuerzas un arroz chaufa del chifa de la esquina mientras redactas. La respuesta irá firmada por Paola y la leerán Lucía, Carla y, quizá, Legal. <mark class="clave">Cada palabra cuenta</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la respuesta.', boton: 'Guardar la respuesta',
    bloques: [
      { id: 'hechos', t: 'Lo que revisamos', n: 2, ops: [
        { id: 'h1', t: 'Sus metas, ajustadas a los siete meses que trabajó.', ok: true },
        { id: 'h2', t: 'Los comentarios de su jefa y la decisión del comité.', ok: true },
        { id: 'h3', t: 'Que sus compañeros con menos resultados salieron mejor.', ok: false, por: 'Expone datos de otras personas.' },
      ] },
      { id: 'decision', t: 'La decisión', n: 1, ops: [
        { id: 'd1', t: 'Con las metas ajustadas, su nota pasa a «sobresaliente» según las anclas.', ok: true },
        { id: 'd2', t: 'Por ser madre, se le otorga «sobresaliente» como gesto de la empresa.', ok: false, por: 'La nota sube por su desempeño, no como un favor.' },
      ] },
      { id: 'reconoce', t: 'Lo que reconocemos', n: 2, ops: [
        { id: 'r1', t: 'Que el formato no ajustaba las metas al tiempo trabajado, y que lo corregiremos.', ok: true },
        { id: 'r2', t: 'Que la mención a su hija en la reunión no debió ocurrir.', ok: true, por: 'Reconocer el daño es parte de repararlo.' },
        { id: 'r3', t: 'Que la empresa lamenta cualquier malentendido.', ok: false, por: 'Diluye la responsabilidad en un «malentendido».' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 3 : 0 }, rel: { paola: q === 'buena' ? 1 : 0 },
        cartera: { reclamo: q === 'buena' ? 'Respuesta lista: sobresaliente por metas ajustadas' : 'Respuesta con frases flojas' },
        out: q === 'buena' ? 'Paola la lee dos veces y la firma. «Lo de su hija lo tenía que decir alguien. Bien.»' : 'La respuesta corrige la nota, pero suena a favor o a «malentendido».',
        pro: { ok: 'Hechos, decisión y reconocimiento: una respuesta que cierra el reclamo.', risk: 'Subir la nota «como gesto» suena a caridad y no corrige el criterio.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una respuesta que repara!' : 'Revisa el tono.'],
      };
    },
    mirada: { ve: 'Una respuesta a un reclamo no solo dice qué se decidió: reconoce lo que falló. Las personas aceptan mejor una decisión cuando ven que alguien entendió el daño.' },
  },
  {
    id: 'g5', t: '15:10', ch: 'presencial', who: 'paola', titulo: '¿Solo Lucía?', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Paola', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Mónica entra a la oficina de Paola con su laptop. «Si ajustamos las metas de Lucía, hay que hacerlo con las otras 13 madres. Eso son 13 bonos más, mañana se lo presentamos a Finanzas y ya vamos pasados.»</p><p>Paola te mira: «<mark class="clave">¿Tú qué propones?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Aplicar el ajuste por tiempo trabajado a las 14 madres, se haya quejado o no, y explicarlo así a Finanzas.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 1 }, rel: { paola: 1 }, flags: ['criterio_todas'], cartera: { licencias: '14 notas recalculadas con metas ajustadas' },
          out: 'Mónica suspira y recalcula. Siete de las catorce cambian de nota. Paola anota en su cuaderno: «Mañana, Finanzas».',
          pro: { ok: 'Un criterio justo vale para todas las personas en la misma situación.', risk: 'Mañana la conversación con Finanzas será más difícil.', info: 'Si solo se corrige a quien reclama, se premia el reclamo, no la justicia.' },
          kusi: ['celebra', '¡Justicia para las catorce, no solo para una!'] } },
      { id: 'b', label: 'Corregir solo a Lucía: ella reclamó, y las demás pueden reclamar si quieren.',
        res: { q: 'aceptable', fx: { etica: -2, tiempo: 1 }, flags: ['criterio_solo_lucia'], cartera: { licencias: 'Solo Lucía corregida' },
          out: 'Mónica respira. Pero ahora sabes que hay 13 madres con la misma nota injusta, y ninguna lo sabe.',
          pro: { ok: 'Cuidas el presupuesto.', risk: 'El mismo error queda vivo en 13 personas que no reclamaron, quizá por miedo.' },
          kusi: ['pensando', '¿Y las que no se atrevieron a reclamar?'] } },
      { id: 'c', label: 'No corregir a nadie este año: cambiar notas después del comité abre la puerta a cientos de reclamos.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, rel: { paola: -1 },
          out: 'Paola no está de acuerdo: «Con lo que Lucía ya sabe, esto va a terminar en SUNAFIL». Te pide que lo pienses de nuevo.',
          pro: { ok: 'Proteges el cierre del comité.', risk: 'Mantener una nota que sabes injusta, por miedo a otros reclamos, deja a la empresa expuesta.' },
          kusi: ['triste', 'Cerrar la puerta no arregla el problema.'] } },
    ],
    rules: [[LEY, 'Ley 30709, art. 1: igual remuneración por igual trabajo; la licencia de maternidad no puede reducir lo que corresponde.']],
    mirada: {
      ve: 'Un reclamo suele mostrar un problema que afecta a más personas. Corregir solo a quien se queja premia la voz más fuerte y deja a las demás con la misma injusticia.',
      visual: { tipo: 'embudo', titulo: 'Madres que volvieron de licencia', niveles: [['Evaluadas con metas de 12 meses', 14], ['Cambian de nota al ajustar', 7], ['Reclamaron', 1]] },
    },
  },
  {
    id: 'g6', t: '17:30', ch: 'whatsapp', who: null, titulo: 'La invitación a Lucía', banner: 'assets/esc/camino.webp', show: ['personas', 'confianza'],
    body: () => `<p>La respuesta está firmada, pero no quieres que Lucía la reciba como un PDF frío. Le escribes para invitarla a una reunión el jueves, con Carla.</p><p>Tiene que entender que <mark class="clave">hay buenas noticias sin que suene a favor</mark>.</p>`,
    type: 'compose', enviaA: 'lucia', para: 'Para: Lucía Paredes · Analista de Marketing', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué le dices', ops: [
        { id: 'q1', t: 'Lucía, terminamos de revisar tu reclamo y tenemos una respuesta.', ok: true },
        { id: 'q2', t: 'Lucía, ¡buenas noticias! Ganaste tu reclamo 🎉', ok: false, por: 'No es un juicio ni un concurso.' },
      ] },
      { id: 'cuando', t: 'La reunión', ops: [
        { id: 'c1', t: '¿Te parece el jueves a las 10:00, con Carla y conmigo? Te explicamos todo y te entregamos tus documentos.', ok: true },
        { id: 'c2', t: 'Pasa cuando puedas por Talento.', ok: false, por: 'Sin fecha, sin compromiso.' },
      ] },
      { id: 'cuidado', t: 'El cuidado', ops: [
        { id: 'x1', t: 'Si prefieres que Carla no esté, dímelo y lo vemos solo nosotras.', ok: true, por: 'Le das control sobre algo que le dolió.' },
        { id: 'x2', t: 'Carla te quiere pedir disculpas en persona.', ok: null, por: 'Puede ser cierto, pero decide por ella.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'c1', 'x1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 2 : 0 }, flags: q === 'riesgosa' ? [] : ['lucia_reunion'],
        out: q === 'buena' ? 'Lucía responde: «Sí puede estar Carla. Gracias por preguntarme».' : 'Lucía responde con un «ok».',
        pro: { ok: 'Fecha, compañía y la opción de elegir: así se cierra con respeto.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Le devolviste algo de control. ¡Qué divino!' : 'Se puede invitar mejor.'],
      };
    },
    mirada: { ve: 'Cerrar un reclamo en persona permite explicar, escuchar y, si hace falta, que el jefe repare. Dejar que la persona elija cómo será esa reunión es parte de la reparación.' },
  },
];
