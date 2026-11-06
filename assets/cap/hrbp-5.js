// HR Business Partner · Capítulo 5 · «El talento» · Semana 1, viernes.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - TUO del D.Leg. 728 (D.S. 003-97-TR), art. 29, literal e): es nulo el despido que tenga por motivo el embarazo, el
//   nacimiento y sus consecuencias o la lactancia, si se produce en cualquier momento del embarazo o dentro de los 90 días
//   posteriores al parto (texto modificado por la Ley 30367 y luego por la Ley 31152, que lo extiende al periodo de prueba).
//   https://busquedas.elperuano.pe/normaslegales/ley-que-protege-a-la-madre-trabajadora-contra-el-despido-arb-ley-n-30367-1315977-1/
//   https://lpderecho.pe/ley-31152-trabajadoras-embarazadas-despedidas-solicitar-reposicion-pago-indemnizacion/
// - Ley 26772 (no discriminación por edad, sexo, embarazo u otros motivos en el empleo), ya citada.
// - Ley 30709 (criterios objetivos para el puesto), ya citada en el capítulo 4.

export const CAP = {
  n: 5, titulo: 'El talento', dia: 'Semana 1, viernes', foto: 'assets/foto2/revisan.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes. Último día de la primera semana. Mauricio llegó a las siete y ya tiene una hoja impresa con ocho nombres. Antes, le prometiste un café a Susana.', boton: 'Ir a la cafetería',
  kusi: 'Evaluar talento no es elegir a quien te cae bien: es aplicar la misma vara a todos y poder explicarlo. ¡Dale!',
  lead: 'Escuchaste a Susana, leíste los comentarios de Mauricio con lupa, defendiste a Rocío, armaste la terna final y decidiste qué hacer con Jhon.',
  reflexion: '¿En qué momento de hoy sentiste que tu propia simpatía podía torcer la evaluación?',
  siguiente: { n: 6, titulo: 'Los que no entran', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'jefes', p: '8 jefes de zona', j: 'Mauricio · Comercial', d: 4, e: '4 claros, 4 por definir' },
  { id: 'rocio', p: 'Rocío Huamán · supervisora de Comas', j: 'Andrea · Gestión Humana', d: 4, e: 'Gestante, 5 meses' },
  { id: 'jhon', p: 'Jhon Ruiz · supervisor de SJL', j: 'Mauricio · Comercial', d: 4, e: 'Patrón en revisión' },
  { id: 'susana', p: 'Susana Vargas · supervisora de Los Olivos', j: 'Mauricio · Comercial', d: 4, e: 'Fuera de la lista de Mauricio' },
];

export const FUTURO = {
  susana_escuchada: ['Susana te contó qué quiere y qué teme, y no le prometiste nada.', 'Te buscará el día del anuncio. Capítulo 8.'],
  sesgos_vistos: ['Marcaste los comentarios sesgados en la lista de Mauricio.', 'El acta de la evaluación quedó limpia. Capítulo 6.'],
  sesgos_pasaron: ['Los comentarios de Mauricio quedaron en el acta.', 'Fiorella los encontrará en el capítulo 6.'],
  rocio_evaluada: ['Rocío fue evaluada como todos, sin mirar su embarazo.', 'Capítulo 8.'],
  rocio_excluida: ['Rocío quedó fuera «porque sale de licencia».', 'Es un riesgo de nulidad. Capítulo 6.'],
  susana_jefa: ['Susana será jefa de zona.', 'Capítulo 8.'],
  susana_fuera: ['Susana no entró en la nueva estructura.', 'Capítulo 6.'],
  teo_jefe: ['Don Teo será jefe de zona.', 'Capítulo 7.'],
  diego_entra: ['Entra Diego Ferré, excolega de Mauricio, sin pasar por el mismo proceso.', 'Capítulo 8.'],
  jhon_condicionado: ['Jhon entra como jefe de zona con un plan de trato y la revisión formal sigue.', 'Capítulo 7.'],
  jhon_libre: ['Jhon entra como jefe de zona sin condiciones.', 'Kenji lo sabrá en el capítulo 8.'],
  jhon_fuera: ['Jhon queda fuera antes de terminar la revisión.', 'Mauricio no lo olvidará. Capítulo 6.'],
};

export const CHATS = {
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  susana: { n: 'Susana Vargas', sub: 'Supervisora de ventas', who: 'susana' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
  rocio: { n: 'Rocío Huamán', sub: 'Supervisora de Comas', c: '#D35400' },
};

export const WSP = [
  { chat: 'susana', t: '07:40', de: 'Susana', txt: 'Ya estoy en la cafetería. Pedí tu café sin azúcar, ¿así era?', si: 'susana_espera' },
  { chat: 'susana', t: '07:40', de: 'Susana', txt: 'Estoy en la cafetería. Si tienes cinco minutos, ven.', no: 'susana_espera' },
  { chat: 'rocio', t: '11:15', de: 'Rocío', txt: 'Hola, soy Rocío, de Comas. Me dijeron que hoy se ven los nombres. Solo quiero saber si mi embarazo va a ser un problema. Perdón por escribir así.' },
  { chat: 'kenji', t: '13:10', de: 'Kenji', txt: 'Dicen que Jhon ya está confirmado de jefe. ¿Es cierto? 😶' },
  { chat: 'mauricio', t: '17:45', de: 'Mauricio', txt: 'No es la lista que yo traje. Pero puedo defenderla en el directorio. Buen fin de semana.', si: 'seleccion_explicada' },
  { chat: 'andrea', t: '18:50', de: 'Andrea', txt: 'Primera semana. Descansa. El lunes empieza lo más duro: los que no entran.' },
];

export const CORREOS = [
  { t: '07:15', de: 'Mauricio Lerner', para: 'HR Business Partner · Comercial', asunto: 'Mis 8', html: '<p>Te adjunto mis ocho jefes de zona con un comentario de cada uno. Son los que yo pondría. Si tienes algo en contra, me lo dices en la reunión de las 9:30.</p><p>M.</p>' },
];

export const QUIZ = [
  { q: 'Al evaluar quién ocupa un rol, lo más importante es…', ops: ['La intuición del gerente', 'Aplicar a todos los mismos criterios de la ficha y dejarlo por escrito', 'La antigüedad', 'Que la persona caiga bien'], ok: 1, por: 'La misma vara para todos, con evidencia.' },
  { q: 'Dejar fuera a una supervisora «porque sale de licencia de maternidad»…', ops: ['Es una decisión de negocio', 'Es discriminación por embarazo y, si termina en su cese, el despido sería nulo', 'Es legal si se le paga', 'Solo es un problema si ella reclama'], ok: 1, por: 'El TUO del D.Leg. 728, art. 29 e), declara nulo el despido por embarazo.' },
  { q: '«Es de la vieja escuela» en un acta de evaluación…', ops: ['Es un dato objetivo', 'Es un juicio sin evidencia que puede esconder un sesgo por edad', 'Es un elogio', 'Es obligatorio'], ok: 1, por: 'Un acta recoge evidencias, no etiquetas.' },
  { q: 'Un candidato externo que el gerente conoce…', ops: ['Entra directo', 'Pasa por el mismo proceso que los demás', 'No puede postular', 'Se elige por encima de los internos'], ok: 1, por: 'Conocerlo no reemplaza evaluarlo.' },
  { q: 'Un supervisor vende mucho, pero hay un patrón de maltrato en revisión. Lo más prudente es…', ops: ['Ascenderlo sin condiciones', 'Despedirlo hoy', 'Que la revisión siga y que cualquier decisión tenga condiciones claras de trato', 'Ignorar la revisión'], ok: 2, por: 'Ni premiarlo a ciegas ni sancionarlo antes de escucharlo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 't1', t: '08:05', ch: 'presencial', who: 'susana', titulo: 'El café de Susana', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería de Nutrimás', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>${F.has('susana_honesta') ? 'Susana te recibe con media sonrisa: «Tú no me mentiste el lunes. Por eso vine».' : F.has('susana_mentira') ? 'Susana no te saluda. «El lunes me dijiste que no habría cambios. Y ahora resulta que los supervisores se acaban.»' : 'Susana te espera con dos cafés, como el lunes.'} Tiene la credencial colgada y el celular boca abajo.</p><p>Hoy no puedes decirle nada de los nombres. Pero sí <mark class="clave">escucharla bien</mark>. Le haces dos preguntas.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Susana.',
    opts: [
      { id: 'quiere', label: '«¿Qué te gustaría hacer en la nueva estructura?»', info: '«Formar gente. Yo empecé de vendedora, en una bicicleta, en Los Olivos. Lo que más me gusta es ver a un chico nuevo cerrar su primer pedido grande.»' },
      { id: 'teme', label: '«¿Qué es lo que más te preocupa?»', info: '«Que me digan que soy "de la vieja escuela". Ya me lo dijeron en un pasillo. Tengo 52 años y no sé usar las tablas dinámicas, pero mi zona es la segunda en ventas.»' },
      { id: 'datos', label: '«¿Cómo haces para que tus vendedores no se vayan?»', info: '«Les cambio la ruta cuando alguien tiene un hijo enfermo. Y nunca leo los resultados delante de todos. Eso lo aprendí de don Teo.»' },
      { id: 'promesa', label: '«Si te prometo que te quedas, ¿te calmas?»', info: 'Susana te mira largo. «No me prometas nada, por favor. Ya me prometieron mucho en quince años.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('promesa') ? -2 : 4, etica: picks.includes('promesa') ? -3 : 2, confianza: 2 }, rel: { susana: picks.includes('promesa') ? 0 : 1 },
      flags: picks.includes('promesa') ? [] : ['susana_escuchada'],
      out: picks.includes('promesa') ? 'Susana termina su café en silencio. Te deja un consejo: «No prometas lo que no decides».' : 'Susana se va a su zona con un «gracias por preguntar». Te quedas con dos frases anotadas que no estaban en ningún reporte.',
      kusi: picks.includes('promesa') ? ['preocupado', 'Ella misma te frenó la promesa.'] : ['animo', 'Escucharla también es evaluar bien.'],
    }),
    rules: [[BP, 'Antes de evaluar a alguien, escucha qué quiere hacer y qué teme. Sin prometer resultados.']],
    mirada: {
      ve: 'Susana teme una etiqueta, no una evaluación. «Vieja escuela» suena inocente, pero es el tipo de frase que convierte la edad en un criterio sin decirlo. Hoy vas a encontrarla escrita.',
      visual: { tipo: 'mensaje', titulo: 'Lo que anotaste de Susana', txt: 'Quiere formar gente. Su zona es la segunda en ventas. Nunca lee resultados en público. Teme que la llamen «vieja escuela».' },
    },
  },
  {
    id: 't2', t: '09:00', ch: 'documento', who: null, titulo: '«Mis 8»', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Abres el adjunto de Mauricio. Ocho nombres, cada uno con un comentario suyo. ${F.has('ficha_clara') ? 'Ninguno menciona la rotación, aunque la ficha que firmó ayer la incluye.' : 'Los comentarios son cortos y seguros.'}</p><p>En media hora entras a la reunión. <mark class="clave">Marca lo que no puede quedar en un acta de evaluación</mark>.</p>`,
    type: 'flag', prompt: 'Marca los comentarios que son ilegales o que no sirven como evidencia.',
    doc: { t: '«Mis 8» · lista de Mauricio Lerner', sub: 'Adjunto del correo de las 7:15' },
    lines: [
      { id: 'jhon', t: 'Jhon Ruiz: el que más vende de Lima. Indiscutible.', bad: BP, why: 'Solo mira la venta. La ficha también mide rotación, y hay una revisión en curso sobre su trato.' },
      { id: 'diego', t: 'Diego Ferré (externo): trabajó conmigo cinco años. Garantizado.', bad: BP, why: 'Conocerlo no es evidencia. Debe pasar por la misma evaluación que los internos.' },
      { id: 'susana', t: 'Susana Vargas: no. Es de la vieja escuela, no se adapta a lo digital.', bad: LEY, why: '«Vieja escuela» no es evidencia de desempeño y puede esconder un sesgo por edad (Ley 26772). Su zona es la segunda en ventas.' },
      { id: 'rocio', t: 'Rocío Huamán: no. Sale de licencia en marzo, no me sirve.', bad: LEY, why: 'Excluirla por su embarazo es discriminación. Si eso termina en su cese, el despido sería nulo (TUO del D.Leg. 728, art. 29 e).' },
      { id: 'lucia', t: 'Lucía Paz: venta sobre la meta 10 de 12 meses; rotación de su equipo por debajo del promedio.' },
      { id: 'oscar', t: 'Óscar Wong: venta en meta; acompaña en ruta a los nuevos, según sus vendedores.' },
      { id: 'teo', t: 'Teodoro Quispe: buen señor, pero ya no tiene la energía.', bad: LEY, why: '«Ya no tiene la energía» a los 61 años es un juicio por edad. Su zona tiene la rotación más baja de Lima.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Llegas a la reunión con algunas objeciones, pero un comentario sobre edad o embarazo sigue en la lista que se volverá acta.' : `Llegas con ${hitsLey} comentarios marcados como ilegales y dos como «sin evidencia». Andrea los lee y dice en voz baja: «Esto, si llega a un juez, nos hunde».`,
      flags: [missLey ? 'sesgos_pasaron' : 'sesgos_vistos'], cartera: { jefes: missLey ? 'Lista con comentarios sesgados' : 'Lista revisada: 3 comentarios ilegales fuera' },
      pro: { ok: 'Separas evidencias de etiquetas antes de que se vuelvan decisiones.', risk: 'Un acta con «vieja escuela» o «sale de licencia» es la mejor prueba para una demanda.', info: 'Lo que se escribe en una evaluación puede terminar en un expediente. Escribe como si lo fuera a leer un juez.' },
      kusi: missLey ? ['preocupado', 'Se te pasó una etiqueta peligrosa…'] : ['celebra', '¡Ojo fino: etiquetas fuera!'],
    }),
    rules: [[LEY, 'TUO del D.Leg. 728, art. 29 e): es nulo el despido por embarazo, nacimiento o lactancia.'], [LEY, 'Ley 26772: no se discrimina por edad ni por embarazo.'], [BP, 'Un acta recoge evidencias medibles, no impresiones.']],
    mirada: {
      ve: 'Mauricio no escribió esos comentarios para discriminar: los escribió como piensa. Ese es el riesgo. Los sesgos casi nunca se ven como sesgos para quien los tiene; por eso la evaluación se hace por escrito, con criterios, y la revisa más de una persona.',
      visual: { tipo: 'cambio', titulo: 'De la etiqueta a la evidencia', pares: [['«Vieja escuela»', 'Segunda zona en ventas'], ['«Sale de licencia»', 'Rotación baja en Comas'], ['«Ya no tiene energía»', 'La menor rotación de Lima'], ['«Garantizado»', 'Sin evaluar todavía']] },
      normas: [{ ley: 'TUO del D.Leg. 728, art. 29 e), modificado por las Leyes 30367 y 31152', dice: 'Es nulo el despido que tiene por motivo el embarazo, el nacimiento y sus consecuencias o la lactancia, si se produce durante la gestación o dentro de los 90 días posteriores al parto, salvo que el empleador acredite una causa justa.', practica: 'Si «sale de licencia» decide que Rocío no tenga lugar en la estructura, la empresa estaría construyendo un despido nulo.' }],
    },
  },
  {
    id: 't3', t: '09:35', ch: 'presencial', who: 'mauricio', titulo: '«Rocío no me sirve»', banner: 'assets/foto2/tension.webp', lugar: 'Sala de la Gerencia Comercial', show: ['cumplimiento', 'etica', 'confianza'],
    body: (n, F) => `<p>${F.has('sesgos_vistos') ? 'Mauricio lee tus marcas en silencio. Tacha «vieja escuela» y «energía» sin discutir. Pero se detiene en Rocío.' : 'Mauricio repasa su lista en voz alta. Al llegar a Rocío, ni levanta la vista.'}</p><p>«Lo de Rocío no es personal. Sale en marzo, cuatro meses fuera, y yo necesito a alguien que arranque la zona. <mark class="clave">Eso es negocio, no discriminación</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que el embarazo no puede ser criterio y proponer evaluarla como a todos; si gana el puesto, planificar con tiempo quién cubre la zona durante su licencia.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, confianza: 1 }, rel: { mauricio: 0 }, flags: ['rocio_evaluada'], cartera: { rocio: 'Evaluada con la ficha; plan de cobertura si entra' },
          out: 'Mauricio resopla. «¿Y quién me cubre la zona?» Le propones que el jefe de zona más cercano la apoye y que un vendedor senior se forme como encargado: «Además, así ya tienes un sucesor». Lo anota.',
          pro: { ok: 'Conviertes el «problema» de la licencia en un plan de cobertura y en una oportunidad de desarrollo.', risk: 'Mauricio tendrá que planificar algo que no quería.', info: 'La licencia es temporal; un despido nulo, no.' },
          kusi: ['celebra', '¡Del problema al plan de cobertura!'] } },
      { id: 'b', label: 'Aceptar que no entre, pero ofrecerle quedarse como vendedora senior con su mismo sueldo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, etica: -4 }, flags: ['rocio_excluida'], cartera: { rocio: 'Fuera del rol por su embarazo' },
          out: 'Mauricio asiente: «Así nadie pierde». Pero Rocío pierde un puesto que podía ganar, y el motivo quedó escrito en una lista.',
          pro: { ok: 'Rocío conserva su sueldo.', risk: 'Bajar de supervisora a vendedora por estar embarazada sigue siendo discriminación, aunque no se le baje el sueldo.' },
          kusi: ['indignado', 'El motivo sigue siendo su embarazo…'] } },
      { id: 'c', label: 'Decirle que eso es ilegal y que, si insiste, lo vas a reportar a Legal.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -4 }, rel: { mauricio: -1 }, flags: ['rocio_evaluada'],
          out: '«Ok, ok, que la evalúen», dice Mauricio, con la mandíbula tensa. El resto de la reunión te habla solo cuando es necesario.',
          pro: { ok: 'Frenas una decisión ilegal.', risk: 'La amenaza funciona hoy, pero te cierra puertas para lo que viene.' },
          kusi: ['pensando', 'Bien el qué. ¿Y el cómo?'] } },
    ],
    rules: [[LEY, 'TUO del D.Leg. 728, art. 29 e): el despido por embarazo es nulo.']],
    mirada: {
      ve: 'Para Mauricio, la licencia es un hueco en su plan. El HRBP no le discute el hueco: le ayuda a cubrirlo. La ley prohíbe usar el embarazo como criterio; la buena gestión convierte la licencia en una ocasión para formar a un sucesor.',
      visual: { tipo: 'linea', titulo: 'Plan de cobertura de la zona de Comas', hitos: [['Noviembre', 'Rocío es evaluada como todos'], ['Diciembre', 'Se elige un vendedor senior como encargado'], ['Marzo', 'Licencia: el encargado lidera con apoyo de otro jefe'], ['Julio', 'Rocío vuelve a su zona']] },
    },
  },
  {
    id: 't4', t: '11:30', ch: 'documento', who: null, titulo: 'Las tres sillas', banner: 'assets/foto/plano-equipo.webp', lugar: 'Sala de la Gerencia Comercial, con Andrea', show: ['calidad', 'etica', 'confianza'],
    body: (n, F) => `<p>Cuatro jefes de zona están claros: Lucía, Óscar, Nelly y Raúl. Jhon se discute aparte. Quedan <mark class="clave">tres sillas</mark> y seis nombres.</p><p>Andrea pone la ficha del jefe de zona en la mesa y una tabla con los datos de cada uno. ${F.has('teo_escuchado') ? 'Tú tienes, además, lo que te contó don Teo ayer.' : ''}</p>`,
    type: 'pick', n: 3, prompt: 'Elige a las tres personas para las tres sillas que quedan.', boton: 'Proponer a estas tres', resumen: 'Propusiste',
    cols: ['Persona', 'Lo que dicen los datos'],
    rows: [
      { id: 'susana', cells: ['Susana Vargas · Los Olivos · 52 años', 'Segunda en ventas; rotación de su equipo baja; forma a los nuevos'] },
      { id: 'rocio', cells: ['Rocío Huamán · Comas · gestante', 'Venta en meta 9 de 12 meses; rotación baja'] },
      { id: 'teo', cells: ['Teodoro Quispe · Chosica · 61 años', 'Venta media; la rotación más baja de Lima'] },
      { id: 'diego', cells: ['Diego Ferré · externo · excolega de Mauricio', 'Buena trayectoria en otra empresa; no ha sido evaluado aquí'] },
      { id: 'patricia', cells: ['Patricia Odría · Callao', 'Venta bajo meta 8 de 12 meses; rotación alta'] },
      { id: 'marco', cells: ['Marco Tello · Villa El Salvador', 'Venta media; rotación alta; quejas por trato'] },
    ],
    score: { susana: 3, rocio: 3, teo: 3, diego: 1, patricia: -2, marco: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      const fl = [picks.includes('susana') ? 'susana_jefa' : 'susana_fuera'];
      if (picks.includes('teo')) fl.push('teo_jefe');
      if (picks.includes('diego')) fl.push('diego_entra');
      if (!picks.includes('rocio')) fl.push('rocio_excluida');
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 2 : 0 }, rel: { susana: picks.includes('susana') ? 1 : 0, mauricio: picks.includes('diego') ? 1 : 0 },
        flags: fl, cartera: { jefes: 'Terna: ' + picks.length + ' nombres propuestos con la ficha', susana: picks.includes('susana') ? 'Propuesta como jefa de zona' : 'Fuera de la terna' },
        out: q === 'buena' ? 'Andrea mira la tabla y asiente: «Los tres mejores números de rotación de Lima, y dos de ellos en el top de ventas». Mauricio pide que Diego postule igual a una zona en la próxima vacante. «Me parece justo», dice Andrea.' : picks.includes('diego') ? 'Mauricio sonríe al ver a Diego. Andrea pregunta, seca: «¿Con qué datos lo comparamos?». Nadie responde.' : 'La terna queda, aunque algunos números no la sostienen.',
        pro: { ok: 'Aplicaste la ficha a todos: venta y rotación.', risk: 'Elegir a alguien sin evaluarlo, o dejar fuera a una gestante con buenos números, se nota en la tabla.', info: 'Guarda la tabla con los datos: es tu evidencia si alguien pregunta por qué.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La misma vara para todos!' : '¿Esa terna resiste la tabla?'],
      };
    },
    rules: [[BP, 'Evalúa a todos con la misma ficha y guarda la evidencia.'], [LEY, 'Ley 30709: criterios objetivos para el puesto, no para la persona.']],
    mirada: {
      ve: 'Las tres personas que más retienen a su gente eran, en la lista de Mauricio, «vieja escuela», «sale de licencia» y «sin energía». La evaluación con datos no solo es más justa: es mejor negocio.',
      visual: { tipo: 'matriz', x: 'Rotación del equipo (menos es mejor)', y: 'Ventas de la zona', cuadrantes: ['Vende y retiene', 'Vende y quema gente', 'Ni vende ni retiene', 'Retiene, vende poco'], items: [['Susana', 25, 80], ['Rocío', 25, 65], ['Teo', 10, 50], ['Patricia', 80, 30], ['Marco', 75, 45]] },
    },
  },
  {
    id: 't5', t: '14:30', ch: 'presencial', who: 'mauricio', titulo: 'El caso Jhon', banner: 'assets/foto2/presentacion.webp', lugar: 'Oficina de Mauricio', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>${F.has('jhon_patron') ? 'Fiorella ya abrió la revisión formal sobre el trato en San Juan de Lurigancho; todavía no ha escuchado a Jhon.' : 'No hay ninguna revisión abierta sobre Jhon: solo lo que sabes.'} ${F.has('formacion_frenada') ? 'Y tú escuchaste el «japonesito» del miércoles.' : ''}</p><p>Mauricio cierra la puerta. «Jhon es el que más vende. <mark class="clave">Si no lo pongo de jefe, se va a la competencia mañana</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer que Jhon entre como jefe de zona con condiciones escritas sobre el trato, medido por la rotación de su equipo, y que la revisión formal siga su curso.',
        res: { q: 'buena', fx: { etica: 3, confianza: 3, personas: 2 }, rel: { mauricio: 1 }, flags: ['jhon_condicionado'], cartera: { jhon: 'Jefe de zona con condiciones; revisión en curso' },
          out: 'Mauricio lo piensa. «O sea que lo pongo, pero vigilado.» Le respondes que no es vigilancia: es la misma ficha que todos, con un compromiso por escrito. «Ok. Se lo digo yo.»',
          pro: { ok: 'No lo premias a ciegas ni lo sancionas sin escucharlo.', risk: 'Si la revisión confirma el patrón, habrá que actuar aunque ya sea jefe.', info: 'Las condiciones tienen que ser medibles: rotación, acompañamiento y cero comentarios sobre el origen de nadie.' },
          kusi: ['animo', 'Ni premio ciego ni castigo apurado.'] } },
      { id: 'b', label: 'Aceptarlo sin condiciones: los números hablan y la revisión puede esperar.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -4, confianza: 2 }, rel: { mauricio: 1 }, flags: ['jhon_libre'], cartera: { jhon: 'Jefe de zona sin condiciones' },
          out: 'Mauricio sonríe: «Así me gusta». En la tarde, el grupo de SJL se llena de stickers de tigres.',
          pro: { ok: 'Mauricio retiene a su mejor vendedor.', risk: 'Ascender sin condiciones a alguien con un patrón de maltrato envía un mensaje a 300 personas.' },
          kusi: ['triste', 'Kenji va a ver esos stickers…'] } },
      { id: 'c', label: 'Proponer que Jhon quede fuera de la nueva estructura por lo que se sabe de su trato.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: -3, confianza: -4 }, rel: { mauricio: -1 }, flags: ['jhon_fuera'], cartera: { jhon: 'Fuera antes de terminar la revisión' },
          out: 'Mauricio se levanta. «¿Sin escucharlo? ¿Sin una sola sanción previa?» Andrea, después, te dice lo mismo con más calma.',
          pro: { ok: 'Pones el trato por encima de las ventas.', risk: 'Decidir antes de terminar la revisión y de escuchar a Jhon es injusto y difícil de sostener.' },
          kusi: ['pensando', 'El fondo era serio. El momento, no.'] } },
    ],
    rules: [[BP, 'Una revisión en curso no se adelanta con un premio ni con un castigo. Si se decide algo antes, que tenga condiciones claras.']],
    mirada: {
      ve: 'Jhon es el caso más difícil de cualquier reorganización: el que más vende y el que más cuesta. Lo que decidas con él lo van a leer todos los demás. No hay opción limpia; hay una que se puede explicar.',
      visual: { tipo: 'balanza', a: { t: 'Si entra sin condiciones', items: ['Retiene la venta', 'Confirma que gritar funciona'] }, b: { t: 'Si entra con condiciones', items: ['Retiene la venta', 'Lo mide por su gente', 'La revisión sigue'] } },
    },
  },
  {
    id: 't6', t: '16:40', ch: 'whatsapp', who: null, titulo: 'Rocío pregunta', banner: 'assets/foto2/pasillo.webp', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Recién ves el mensaje de Rocío de las 11:15. ${F.has('rocio_excluida') ? 'Lo lees con un nudo en el estómago: hoy quedó fuera de la terna.' : 'Hoy fue evaluada como todos.'}</p><p>No puedes contarle el resultado: se comunica el miércoles. <mark class="clave">Pero no puedes dejarla en visto</mark>.</p>`,
    type: 'compose', enviaA: 'rocio', para: 'Para: Rocío Huamán · Supervisora de Comas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'principio', t: 'Lo que sí puedes decir', ops: [
        { id: 'a1', t: 'Rocío, gracias por escribir. Tu embarazo no es un criterio de evaluación y no lo será.', ok: true, por: 'Es verdad y es lo que más necesita saber.' },
        { id: 'a2', t: 'Rocío, tranquila, seguro te va bien.', ok: false, por: 'Una promesa que no te corresponde.' },
      ] },
      { id: 'cuando', t: 'Cuándo sabrá', ops: [
        { id: 'b1', t: 'Los resultados se comunican el miércoles, en persona, a cada supervisor.', ok: true, por: 'Le das una fecha concreta.' },
        { id: 'b2', t: 'Ya te enterarás.', ok: false, por: 'Frío y sin fecha.' },
      ] },
      { id: 'puerta', t: 'Puerta abierta', ops: [
        { id: 'c1', t: 'Si en algún momento sientes que te tratan distinto por tu embarazo, escríbeme.', ok: true, por: 'Le das un canal sin adelantar nada.' },
        { id: 'c2', t: 'Y no le comentes a nadie que me escribiste.', ok: false, por: 'Ella no hizo nada que deba esconder.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'b1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, etica: q === 'buena' ? 3 : -1 },
        envia: ['rocio', q === 'buena' ? 'Rocío: «Gracias. Con eso me basta por ahora 🙏»' : 'Rocío: «Ok.»'],
        out: q === 'buena' ? 'Rocío responde con un audio corto: se le escucha a su hija de fondo. «Gracias, de verdad.»' : 'Rocío responde con un «ok». No sabes si se quedó más tranquila o más preocupada.',
        pro: { ok: 'Dices lo que es verdad sin adelantar un resultado que todavía no se comunica.', info: 'Si la empresa sabe del embarazo, cualquier decisión sobre Rocío tendrá que poder explicarse con otros motivos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Verdad, fecha y puerta abierta.' : 'Ella necesitaba saber una sola cosa.'],
      };
    },
    rules: [[LEY, 'El embarazo no puede ser criterio de evaluación ni de salida (Ley 26772; TUO del D.Leg. 728, art. 29 e).']],
    mirada: { ve: 'Rocío no pregunta si ganó: pregunta si la van a medir con otra vara. Esa pregunta sí se puede responder hoy, y responderla bien es lo que hace que confíe en el resultado, sea cual sea.' },
  },
  {
    id: 't7', t: '17:30', ch: 'correo', who: null, titulo: 'El acta', banner: 'assets/esc/logro.webp', show: ['confianza', 'calidad', 'cumplimiento'],
    mail: { from: 'Mauricio Lerner', to: 'HR Business Partner · Comercial', asunto: '¿Qué le digo al directorio?' },
    body: () => `<p>El lunes presento la estructura al directorio. Me van a preguntar por qué no puse a Diego, por qué Jhon tiene condiciones y por qué entró gente que yo no tenía en mi lista. <mark class="clave">Dame la respuesta corta</mark>.</p><p>M.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Una respuesta basada en la ficha: misma vara para todos, la tabla de venta y rotación como evidencia, y el costo de la rotación que se quiere bajar.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, rel: { mauricio: 1 }, flags: ['seleccion_explicada'], responde: 'Mauricio: los 8 jefes se eligieron con la misma ficha (venta y rotación de su equipo). La tabla está adjunta. Elegimos a quienes venden y retienen, porque cada vendedor que se va nos cuesta selección, inducción y semanas de venta. Diego puede postular a la próxima vacante con el mismo proceso.',
          out: 'Mauricio responde a las 17:45. Es la primera vez que te escribe «buen fin de semana».', kusi: ['celebra', '¡Una decisión que se puede defender!'] } },
      { id: 'b', label: 'Que diga que fue una decisión conjunta con Gestión Humana, sin entrar en detalles.',
        res: { q: 'aceptable', fx: { confianza: -1 }, responde: 'Mauricio: puedes decir que fue una decisión conjunta con Gestión Humana.',
          out: 'Mauricio responde: «Eso no me sirve. Me van a pedir números». Tiene razón.', kusi: ['pensando', 'El directorio pide números.'] } },
    ],
    mirada: { ve: 'Una buena evaluación de talento no solo elige bien: deja al gerente en condiciones de defender la decisión ante quien le pide cuentas. Esa es la diferencia entre imponerle un criterio y volverlo suyo.' },
  },
];
