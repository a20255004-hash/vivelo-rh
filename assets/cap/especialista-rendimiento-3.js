// Analista de Gestión del Desempeño · Capítulo 3 · «Las reglas del comité» · Semana 1, miércoles.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas citadas (textos oficiales en docs/normas/txt; SPIJ: https://spij.minjus.gob.pe):
// - Constitución Política del Perú, art. 26 inc. 1: igualdad de oportunidades sin discriminación (ya citada).
// - Ley 29733 (datos personales): uso de datos solo para su finalidad; acceso restringido.
// La «curva forzada» y la calibración son prácticas de gestión, no normas: se explican como buena práctica.

export const CAP = {
  n: 3, titulo: 'Las reglas del comité', dia: 'Semana 1, miércoles', foto: 'assets/foto/plano-equipo.webp',
  lugar: 'Alimentos Lima S.A. · Sala de reuniones de Talento',
  inicio: '08:00', fin: '19:00', cierreHora: '18:40',
  apertura: 'Miércoles. Faltan dos días para el comité de calibración. Paola te dejó un borrador de reglas con una nota encima: «Hazlo pedazos si hace falta».', boton: 'Abrir el borrador',
  kusi: 'Una reunión de gerentes sin reglas es una pelea con corbata. ¡Hoy pones las reglas!',
  lead: 'Revisaste las reglas del comité, elegiste qué casos discutir, encontraste una nota que no cuadra y armaste el paquete que cada gerente recibirá.',
  reflexion: '¿Qué diferencia hay entre comparar a las personas y obligarlas a caber en una curva?',
  siguiente: { n: 4, titulo: 'El caso de Andrés', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'reglas', p: 'Reglas del comité', j: 'Paola · Talento', d: 0, e: 'Borrador' },
  { id: 'casos', p: 'Casos para calibrar', j: 'Talento', d: 0, e: 'Sin elegir' },
  { id: 'paquete', p: 'Paquete para gerentes', j: 'Talento', d: 0, e: 'Sin armar' },
  { id: 'pendientes', p: 'Evaluaciones pendientes', j: 'Evaluadores', d: 0, e: '180 pendientes' },
  { id: 'andres', p: 'Evaluación de Andrés Huerta', j: 'Ventas', d: 0, e: 'Sin revisar' },
];

export const FUTURO = {
  reglas_claras: ['Las reglas piden evidencia y usan la distribución como referencia, no como cuota.', 'El viernes nadie podrá decir «me obligaron a bajar a alguien».'],
  cuota_forzada: ['Dejaste la cuota obligatoria de 20 % de sobresalientes.', 'Algún gerente bajará a alguien solo para cuadrar.'],
  casos_bien: ['Elegiste para el comité los casos donde la nota y la evidencia no cuadran.', 'El tiempo del viernes alcanzará.'],
  andres_detectado: ['Viste que Andrés superó su meta y tiene «necesita mejorar» sin evidencia.', 'Mañana tendrás que mirar su caso de cerca.'],
  andres_no_visto: ['No revisaste a fondo el caso de Andrés.', 'Alberto llegará al viernes sin preguntas.'],
  evidencia_pedida: ['Le pediste a Alberto, por escrito, la evidencia de su nota a Andrés.', 'Alberto no está contento.'],
  paquete_ok: ['Cada gerente recibió su paquete con datos, anclas y reglas.', 'El viernes empezará a tiempo.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  gerentes: { n: 'Comité de calibración', sub: '7 gerentes, Paola y tú', c: '#1F5C99' },
  rafael: { n: 'Rafael Tapia', sub: 'Jefe de Producción · Planta', c: '#6B4F2F' },
};

export const WSP = [
  { chat: 'talento', t: '08:05', de: 'Wendy', txt: 'Llegué 😴 pero llegué. Ayer salí a las diez y media.', si: 'wendy_noche' },
  { chat: 'talento', t: '08:05', de: 'Wendy', txt: 'Buenos días ☀️ Ayer llegué a mi clase, gracias otra vez.', si: 'wendy_cuidada' },
  { chat: 'rafael', t: '08:30', de: 'Rafael', txt: 'Terminé los 90 a las 7. El turno noche quedó contento de que le pregunten.', si: 'rafael_sesion' },
  { chat: 'talento', t: '08:40', de: 'Mónica', txt: 'Ojo: en Planta hay 90 «cumple» idénticos. ¿Eso es real? 🤔', si: 'rafael_relleno' },
  { chat: 'alberto', t: '12:50', de: 'Alberto', txt: 'Me dicen que estás mirando la evaluación de Huerta. Eso es actitud, no números. Ya lo conversaré con Paola.' },
  { chat: 'andres', t: '16:20', de: 'Andrés', txt: 'Disculpe que insista. ¿El viernes se revisa todo el equipo de Ventas o solo algunos?' },
  { chat: 'gerentes', t: '18:30', de: 'Giancarlo (Finanzas)', txt: 'Recibido. Por fin una reunión con agenda 👏', si: 'paquete_ok' },
];

export const CORREOS = [
  { t: '08:10', de: 'Sistema de Desempeño', para: 'Talento', asunto: 'Avance del ciclo · miércoles', html: '<p>Cerradas: 1,320. Pendientes: 180. Evaluaciones cerradas sin comentarios: 31 %.</p>' },
  { t: '17:45', de: 'Alberto Sáenz', para: 'Analista de Gestión del Desempeño; cc: Paola Ríos', asunto: 'RE: Evidencia · evaluación A. Huerta', html: '<p>La evidencia es que yo soy su jefe y veo su actitud todos los días. No necesito justificarme ante Talento. Lo vemos el viernes.</p><p>Alberto</p>', si: 'evidencia_pedida' },
];

export const QUIZ = [
  { q: '¿Para qué sirve la distribución de referencia en una calibración?', ops: ['Para obligar a que el 20 % sea sobresaliente', 'Para comparar y pedir explicaciones cuando un área se aleja mucho', 'Para bajar a quien sobre', 'Para nada'], ok: 1, por: 'Es una referencia que abre preguntas, no una cuota que obliga a mover personas.' },
  { q: 'En un comité de tres horas con 1,500 evaluaciones, ¿qué casos discutes?', ops: ['Todos, uno por uno', 'Los extremos y los que no cuadran con la evidencia', 'Solo los de Ventas', 'Los que elija cada gerente'], ok: 1, por: 'Los sobresalientes, los necesita mejorar y las notas que contradicen los datos son los que cambian decisiones.' },
  { q: 'Andrés superó su meta, tiene clientes satisfechos y su jefe le puso «necesita mejorar» sin comentarios. Eso es…', ops: ['Normal: el jefe sabe', 'Una señal de alerta que hay que revisar con evidencia', 'Motivo para subirlo a sobresaliente', 'Un tema personal entre ellos'], ok: 1, por: 'Una nota que contradice los datos no se cambia sola, pero sí se revisa con evidencia.' },
  { q: '¿Qué debe recibir cada gerente antes del comité?', ops: ['Las notas de toda la empresa', 'Los datos de su área, las anclas de cada nivel y las reglas', 'Solo la hora y el lugar', 'La lista de quién cobrará bono'], ok: 1, por: 'Cada gerente necesita lo suyo, comparado con una referencia, y las reglas claras.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:20', ch: 'documento', who: null, titulo: 'El borrador de reglas', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>El borrador tiene una página. Paola lo copió de una presentación de un congreso y le cambió el logo. Mónica, de Compensaciones, ya le puso un visto bueno con resaltador: «¡La cuota cuadra mi presupuesto!».</p><p>Lo lees <mark class="clave">como si fueras un gerente buscando por dónde escaparse</mark>.</p>`,
    type: 'flag', prompt: 'Marca las reglas que generan injusticias o que no sirven para calibrar.',
    doc: { t: 'Reglas del comité de calibración · borrador', sub: 'Alimentos Lima S.A. · Talento' },
    lines: [
      { id: 'cuota', t: 'Cada área debe tener exactamente 20 % de sobresalientes y 10 % de necesita mejorar.', bad: BP, why: 'Una cuota obliga a bajar a alguien aunque haya rendido. Mejor una referencia que pide explicaciones.' },
      { id: 'voto', t: 'Si dos gerentes no coinciden, decide el que tenga más años en la empresa.', bad: BP, why: 'Decide la antigüedad, no la evidencia.' },
      { id: 'evid', t: 'Toda nota extrema debe sustentarse con al menos dos ejemplos concretos.' },
      { id: 'licencia', t: 'Las personas con licencias largas se calibran al final, «si queda tiempo».', bad: LEY, why: 'Dejar para el final a quien tuvo una licencia (por ejemplo, de maternidad) la pone en desventaja: la Constitución (art. 26) protege la igualdad sin discriminación.' },
      { id: 'reserva', t: 'Lo que se dice en el comité es reservado y se registra en un acta.' },
      { id: 'foto', t: 'Se proyecta la foto de cada trabajador para «ponerle cara».', bad: BP, why: 'La foto invita a juzgar por apariencia, no por resultados.' },
      { id: 'jefe', t: 'El jefe directo presenta a su gente; los demás pueden preguntar.', duda: 'Es razonable, pero conviene limitar el tiempo para que nadie monopolice.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Tachas la cuota y la foto. La regla de las licencias se te pasa, y se queda en el borrador.' : `Marcas ${hitsLey} regla con riesgo legal y varias de diseño. Paola lee tus notas: «Lo de “si queda tiempo” lo escribí yo sin pensar. Bien visto».`,
      flags: [missLey ? 'cuota_forzada' : 'reglas_claras'], rel: { paola: missLey ? 0 : 1 },
      cartera: { reglas: missLey ? 'Reglas con cuota y licencias al final' : 'Reglas con evidencia, referencia y sin cuota' },
      pro: { ok: 'Las reglas del comité definen qué se vuelve justo y qué no.', risk: 'Una cuota rígida hace que alguien pierda su bono para cuadrar una curva.', info: 'Mónica va a extrañar la cuota: tendrás que mostrarle otra forma de cuidar el presupuesto.' },
      kusi: missLey ? ['preocupado', 'Las licencias al final… eso duele.'] : ['celebra', '¡Reglas que no dejan escapatorias!'],
    }),
    rules: [[LEY, 'Constitución, art. 26: igualdad de oportunidades sin discriminación.'], [BP, 'Una distribución de referencia abre preguntas; una cuota obliga a mover personas.']],
    mirada: {
      ve: 'La «curva forzada» parece una solución mágica a la inflación, pero tiene un costo: en un equipo excelente, alguien tiene que caer. Muchas empresas la cambiaron por una referencia flexible que obliga a explicar, no a recortar.',
      visual: { tipo: 'balanza', a: { t: 'Cuota obligatoria', items: ['Cuadra el presupuesto', 'Fácil de aplicar'] }, b: { t: 'Referencia con evidencia', items: ['Nadie cae para cuadrar', 'Las áreas infladas explican', 'Notas defendibles'] } },
    },
  },
  {
    id: 'c2', t: '10:10', ch: 'documento', who: null, titulo: 'Tres horas, 1,500 personas', banner: 'assets/esc/meta.webp', show: ['tiempo', 'calidad'],
    body: () => `<p>El comité dura de 9:00 a 12:00. Siete gerentes, café y empanadas. No alcanza para hablar de todos. Tienes que elegir <mark class="clave">qué grupos de casos se discuten</mark>.</p>`,
    type: 'pick', n: 4, prompt: 'Elige los cuatro grupos de casos que irán a la agenda.', boton: 'Armar la agenda', resumen: 'En agenda',
    cols: ['Grupo', 'Por qué'],
    rows: [
      { id: 'sobre', cells: ['Sobresalientes de las áreas con más de 90 %', 'Ahí está la inflación'] },
      { id: 'nm', cells: ['Todos los «necesita mejorar»', 'Pierden el bono: merecen revisión'] },
      { id: 'contra', cells: ['Notas que contradicen los indicadores', 'Metas superadas con nota baja, o al revés'] },
      { id: 'iguales', cells: ['Equipos donde el jefe puso a todos la misma nota', 'Nadie es idéntico'] },
      { id: 'cumple', cells: ['Todas las notas «cumple»', 'Son la mayoría tranquila'] },
      { id: 'pedidos', cells: ['Los casos que cada gerente quiera traer', 'Que se sientan escuchados'] },
    ],
    score: { sobre: 3, nm: 3, contra: 3, iguales: 2, cumple: -1, pedidos: -2 },
    res: (picks, sc) => {
      const q = sc >= 10 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : -1, calidad: q === 'buena' ? 4 : 0 }, flags: q === 'buena' ? ['casos_bien'] : [],
        cartera: { casos: q === 'buena' ? 'Agenda: extremos, contradicciones y notas iguales' : 'Agenda que no alcanzará' },
        out: q === 'buena' ? 'La agenda cabe en tres horas. Al filtrar «notas que contradicen los indicadores», un nombre de Ventas salta en rojo.' : 'La agenda está tan llena que a las 12 seguirán discutiendo el primer grupo.',
        pro: { ok: 'Calibrar no es revisar todo: es revisar donde la nota puede estar mal.', risk: 'Abrir la agenda a «lo que quieran los gerentes» la convierte en una negociación.' },
        kusi: [q === 'buena' ? 'curioso' : 'pensando', q === 'buena' ? 'Un nombre en rojo… ¿quién será?' : 'Tres horas no alcanzan para todo.'],
      };
    },
    mirada: {
      ve: 'El tiempo del comité es el recurso más escaso de la calibración. Ponerlo donde la nota puede estar equivocada es lo que la hace útil.',
      visual: { tipo: 'matriz', x: 'Nota', y: 'Resultados medidos', cuadrantes: ['Bien calibrado', 'Revisar: ¿subvalorado?', 'Revisar: ¿inflado?', 'Bien calibrado'], items: [['Andrés', .1, .9], ['Equipo de Ventas', .95, .55], ['Planta', .5, .5]] },
    },
  },
  {
    id: 'c3', t: '11:30', ch: 'documento', who: null, titulo: 'El nombre en rojo', banner: 'assets/esc/cerebro.webp', show: ['calidad', 'etica'],
    body: (n, F) => `<p>El nombre es Andrés Huerta. Meta anual: 112 %. Nota de Alberto: «necesita mejorar». Comentario: «actitud negativa». Cerrada el viernes a las 23:58. ${F.has('andres_filtrado') ? 'Recuerdas su cara pálida del lunes.' : 'Recuerdas su frase del lunes: «las cosas no han estado bien este año».'}</p><p>Tienes acceso a cuatro fuentes. <mark class="clave">Solo hay tiempo para revisar dos</mark> antes del almuerzo.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos fuentes que vas a revisar.',
    opts: [
      { id: 'ventas', label: 'Reporte de ventas y cobranza de su zona', info: 'Su zona vendió 112 % de la meta y tiene la morosidad más baja de Lima Este. En marzo hay una anotación: «Huerta se negó a registrar en marzo un pedido de abril».' },
      { id: 'clientes', label: 'Encuesta a clientes y quejas', info: 'Cero quejas. Dos bodegueros de Huaycán lo mencionan por nombre: «viene aunque llueva».' },
      { id: 'historial', label: 'Evaluaciones de años anteriores', info: 'Tres años seguidos «sobresaliente», con otro jefe. Alberto llegó a Ventas en enero.' },
      { id: 'redes', label: 'Su perfil de Facebook', info: 'Fotos de su hija en el colegio y de un partido de fulbito. Nada que tenga que ver con su trabajo. Cierras la pestaña con una sensación incómoda.' },
    ],
    res: picks => ({
      q: picks.includes('redes') ? 'riesgosa' : 'buena', fx: { calidad: picks.includes('redes') ? -1 : 4, etica: picks.includes('redes') ? -3 : 2 },
      flags: picks.includes('redes') ? ['andres_no_visto'] : ['andres_detectado'],
      cartera: { andres: picks.includes('redes') ? 'Revisado a medias' : 'Meta 112 %, nota baja sin evidencia' },
      out: picks.includes('redes') ? 'Perdiste tiempo en un lugar donde no había nada que buscar. El caso queda a medias.' : 'Los datos no respaldan la nota. Y aparece una pista: algo pasó entre Andrés y Alberto con un pedido adelantado.',
      kusi: picks.includes('redes') ? ['indignado', 'Su Facebook no es evidencia de su trabajo.'] : ['curioso', 'Los números dicen una cosa; la nota, otra.'],
    }),
    rules: [[LEY, 'Ley 29733: los datos se usan para la finalidad para la que se recogieron. Las redes personales no son fuente de evaluación.']],
    mirada: {
      ve: 'Revisar un caso es buscar evidencia del trabajo, no de la vida. Una nota que contradice tres fuentes no prueba que el jefe se equivocó, pero sí obliga a preguntarle por qué.',
      visual: { tipo: 'cambio', titulo: 'Lo que dice la nota y lo que dicen los datos', pares: [['«Necesita mejorar»', 'Meta 112 %'], ['«Actitud negativa»', 'Cero quejas de clientes'], ['Sin comentarios', 'Tres años sobresaliente']] },
    },
  },
  {
    id: 'c4', t: '13:05', ch: 'whatsapp', who: 'gerente', titulo: '«Eso es actitud»', banner: 'assets/foto2/tension.webp', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Estás terminando un menú de lentejas en el comedor cuando entra el WhatsApp de Alberto. Alguien le contó que estuviste mirando el caso.</p><p>«Eso es actitud, no números. <mark class="clave">Ya lo conversaré con Paola</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responderle con respeto y pedirle por correo, con copia a Paola, dos ejemplos concretos de esa actitud para el comité.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3, confianza: -1 }, rel: { gerente: -1, paola: 1 }, flags: ['evidencia_pedida'],
          out: 'Alberto no responde por WhatsApp. A las 17:45 llega su correo, con Paola en copia. No trae ejemplos.',
          pro: { ok: 'Pides lo mismo que las reglas piden a todos: evidencia para una nota extrema.', risk: 'Alberto lo vivirá como un desafío personal.', info: 'Con copia a Paola, el pedido queda registrado y no es solo tuyo.' },
          kusi: ['animo', 'La misma regla para todos los gerentes.'] } },
      { id: 'b', label: 'Dejarlo pasar: es su jefe, conoce a su gente y ya habló con Paola.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: 1 }, rel: { gerente: 1 }, flags: ['andres_no_visto'],
          out: 'Alberto te manda un pulgar arriba. El caso de Andrés llegará al viernes como «actitud», sin preguntas.',
          pro: { ok: 'Evitas un conflicto.', risk: 'Una nota que contradice todos los datos pasa sin revisión. Andrés pierde su bono por algo que nadie explicó.' },
          kusi: ['triste', '¿Y si no es actitud?'] } },
      { id: 'c', label: 'Llamar a Andrés para preguntarle qué pasó con el pedido de marzo.',
        res: { q: 'aceptable', fx: { etica: 1, cumplimiento: -2 }, rel: { evaluado: 1 },
          out: 'Andrés te cuenta su versión, nervioso. Pero ahora Alberto puede decir que Talento «armó el caso con el evaluado» antes del comité.',
          pro: { ok: 'Escuchas a la persona.', risk: 'Hablar con el evaluado antes de pedir evidencia al jefe deja la revisión expuesta a que la acusen de parcial.' },
          kusi: ['pensando', 'El orden importa: primero la evidencia del jefe.'] } },
    ],
    rules: [[POL, 'Toda nota extrema se sustenta con al menos dos ejemplos concretos (reglas del comité).']],
    mirada: {
      ve: '«Actitud» puede ser algo real, pero tiene que verse en hechos: una reunión, un cliente, una fecha. Pedir ejemplos no es dudar del jefe: es lo que se le pide a todos los jefes.',
      visual: { tipo: 'mensaje', titulo: 'Un pedido de evidencia, sin acusar', txt: 'Alberto: para el comité, todas las notas extremas llevan dos ejemplos concretos. ¿Me compartes dos situaciones que sustenten la nota de Andrés? Así la presentamos bien. Gracias.' },
    },
  },
  {
    id: 'c5', t: '15:00', ch: 'documento', who: null, titulo: 'El paquete de cada gerente', banner: 'assets/foto2/tablet-equipo.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Cada gerente recibirá mañana un paquete para llegar preparado. Wendy imprime en la impresora que atasca cada tres hojas. Tú decides <mark class="clave">qué va dentro</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del paquete.', boton: 'Cerrar el paquete',
    bloques: [
      { id: 'datos', t: 'Datos', n: 2, ops: [
        { id: 'd1', t: 'Distribución de su área comparada con la referencia de la empresa.', ok: true },
        { id: 'd2', t: 'Lista de sus casos en agenda, con indicadores y comentarios del jefe.', ok: true },
        { id: 'd3', t: 'Las notas de las demás áreas, persona por persona.', ok: false, por: 'Cada gerente ve lo suyo y la referencia general, no las notas ajenas.' },
      ] },
      { id: 'anclas', t: 'Anclas', n: 2, ops: [
        { id: 'a1', t: 'Qué significa «sobresaliente»: supera metas y es referente para otros, con ejemplos.', ok: true },
        { id: 'a2', t: 'Qué significa «necesita mejorar»: no logra metas o hay conductas concretas que corregir.', ok: true },
        { id: 'a3', t: '«Sobresaliente»: quien da todo por la empresa.', ok: false, por: 'Es una frase, no un ancla observable.' },
      ] },
      { id: 'reglas', t: 'Reglas', n: 1, ops: [
        { id: 'r1', t: 'Las reglas del comité y el tiempo de cada bloque.', ok: true },
        { id: 'r2', t: 'Un resumen del presupuesto de bonos de cada persona.', ok: false, por: 'Mezclar el dinero en la calibración empuja a decidir por presupuesto, no por desempeño.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: q === 'buena' ? ['paquete_ok'] : [], cartera: { paquete: q === 'buena' ? 'Paquetes listos: datos, anclas y reglas' : 'Paquetes con piezas de más' },
        out: q === 'buena' ? 'Siete sobres, siete carpetas. Paola firma la carta de presentación sin cambiar una coma.' : 'Los paquetes salen, pero con datos que no deberían ver o anclas que no anclan nada.',
        pro: { ok: 'Un gerente que llega con sus datos y anclas claras discute sobre hechos.', risk: 'Poner el presupuesto en la mesa convierte la calibración en un reparto.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Siete sobres que ordenan una reunión!' : 'Revisa qué va y qué no.'],
      };
    },
    mirada: {
      ve: 'Las anclas son el corazón de la calibración: frases que describen lo que se ve en cada nivel. Sin ellas, cada gerente defiende su propia idea de «excelente».',
      visual: { tipo: 'flujo', titulo: 'Qué lleva cada paquete', pasos: ['Datos de su área', 'Casos en agenda', 'Anclas', 'Reglas y tiempos'] },
    },
  },
  {
    id: 'c6', t: '17:50', ch: 'whatsapp', who: null, titulo: 'La convocatoria', banner: 'assets/esc/escritorio.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Afuera, la Carretera Central ya es un río de luces rojas. ${F.has('evidencia_pedida') ? 'Acabas de leer el correo de Alberto: «No necesito justificarme ante Talento».' : 'Andrés te preguntó si el viernes se revisa todo Ventas.'}</p><p>Falta el mensaje al grupo del comité: <mark class="clave">el tono de mañana empieza hoy</mark>.</p>`,
    type: 'compose', enviaA: 'gerentes', para: 'Para: Comité de calibración · 7 gerentes', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'logist', t: 'Lo práctico', ops: [
        { id: 'l1', t: 'Buenas tardes. El viernes, de 9:00 a 12:00 en la sala del segundo piso. Mañana les llega su paquete.', ok: true },
        { id: 'l2', t: 'Buenas tardes. El viernes calibramos, ya saben dónde.', ok: false, por: 'Siempre hay alguien que no sabe dónde.' },
      ] },
      { id: 'regla', t: 'La regla principal', ops: [
        { id: 'r1', t: 'Cada nota extrema necesitará dos ejemplos concretos. Tráiganlos preparados.', ok: true, por: 'La regla vale para todos, sin nombrar a nadie.' },
        { id: 'r2', t: 'Algunos ya saben que tienen casos que explicar 😉', ok: false, por: 'Una indirecta en un grupo enciende más de lo que ordena.' },
      ] },
      { id: 'cierre', t: 'El cierre', ops: [
        { id: 'c1', t: 'Cualquier duda sobre su paquete, mañana estoy en la oficina todo el día.', ok: true },
        { id: 'c2', t: 'Gracias por su compromiso con la evaluación.', ok: null, por: 'Amable, pero no abre la puerta a dudas.' },
      ] },
    ],
    res: sel => {
      const buenas = ['l1', 'r1', 'c1'].filter(x => Object.values(sel).includes(x)).length, ind = sel.regla === 'r2';
      const q = ind ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : ind ? -4 : 1, calidad: q === 'buena' ? 2 : 0 }, rel: { gerente: ind ? -1 : 0 },
        out: q === 'buena' ? 'Giancarlo, de Finanzas, responde primero. Alberto lee el mensaje y no escribe nada.' : ind ? 'Alberto contesta en el grupo: «¿Es por mí?». Paola te llama: «Eso no se dice en un grupo».' : 'Los gerentes leen. Dos preguntan dónde es la sala.',
        pro: { ok: 'Una convocatoria clara y pareja baja la tensión antes de la reunión.', risk: 'Las indirectas en grupos convierten una regla en un ataque.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Mañana el tono ya está puesto.' : 'Ese mensaje puede volver.'],
      };
    },
    mirada: { ve: 'Las reglas se comunican igual para todos, aunque estés pensando en una persona. Así nadie puede decir que la regla se inventó contra él.' },
  },
];
