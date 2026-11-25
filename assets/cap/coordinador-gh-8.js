// Coordinador/a de Gestión Humana · Capítulo 8 · «El reemplazo» · Semana 2, miércoles.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - Constitución Política del Perú, art. 2 inc. 2: nadie debe ser discriminado por motivo de origen, raza, sexo, idioma,
//   religión, opinión, condición económica o de cualquier otra índole. https://www.congreso.gob.pe/constitucion/
// - Ley 30709 (igualdad salarial), art. 2: cuadros de categorías y funciones; art. 3: las remuneraciones de cada categoría
//   las fija el empleador sin discriminación. https://www.leyes.congreso.gob.pe/
// - Ley 29733, art. 2 num. 5 y art. 7: no se piden ni anotan datos sensibles o innecesarios para evaluar.

export const CAP = {
  n: 8, titulo: 'El reemplazo', dia: 'Semana 2, miércoles', foto: 'assets/foto/entrevista.webp',
  lugar: 'Lácteos del Altiplano · Juliaca',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Miércoles. Mañana viajas a Ayaviri para la entrega de cargo de Freddy, y la planta quiere saber quién sigue. Hay dos nombres sobre la mesa: Edwin Calsín, de adentro, y la Ing. Paola Vilca, de afuera.', boton: 'Empezar las llamadas',
  kusi: 'Hoy decides algo que va a cambiar la vida de 130 personas. Que decida el criterio, no la simpatía. ¡Dale!',
  lead: 'Pediste referencias, escribiste el perfil antes de comparar, limpiaste un informe con prejuicios, ayudaste a decidir con datos, cuidaste la equidad del sueldo y armaste los primeros 90 días.',
  reflexion: '¿Qué pesó más en tu decisión: lo que cada persona sabe hacer, lo que la planta necesita o lo que tú sentías por cada una?',
  siguiente: { n: 9, titulo: 'La entrega de cargo', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'reemplazo', p: 'Jefatura de la planta de Ayaviri', j: 'Tú · Mariela · Gerencia', d: 7, e: 'Decisión hoy' },
  { id: 'perfil', p: 'Perfil del puesto', j: 'Tú', d: 7, e: 'No existe' },
  { id: 'sueldo', p: 'Remuneración del nuevo jefe', j: 'Mariela · Gerencia', d: 7, e: 'Cuadro de categorías' },
  { id: 'viaje', p: 'Viaje a Ayaviri', j: 'Tú · Yesenia', d: 7, e: 'Mañana 6 a. m.' },
];

export const FUTURO = {
  reemplazo_edwin: ['Edwin será el nuevo jefe de Ayaviri, con un plan de desarrollo, y se abrirá una jefatura de calidad.', 'Mañana se anuncia en la planta.'],
  reemplazo_paola: ['La Ing. Paola Vilca será la nueva jefa de Ayaviri; Edwin sigue como jefe de producción.', 'Mañana tendrás que cuidar a Edwin.'],
  edwin_a_prueba: ['Edwin quedó «a prueba» como interino, sin cambio de sueldo ni plazo.', 'La planta lo notará.'],
  perfil_listo: ['El perfil se escribió antes de comparar candidatos.', 'Podrás explicar la decisión a cualquiera.'],
  informe_limpio: ['Sacaste del informe los comentarios sobre sexo, estado civil y origen.', 'La decisión se apoya en hechos.'],
  sueldo_categoria: ['El nuevo jefe ganará lo que corresponde a su categoría.', 'Nadie podrá decir que se ahorró a su costa.'],
  sueldo_rebajado: ['Al nuevo jefe se le ofreció menos que la categoría «por ser de adentro».', 'Lo sabrá cuando vea el cuadro.'],
  plan_90: ['El nuevo jefe tiene un plan de 90 días con metas sobre las salidas tempranas.', 'Lo presentarás mañana.'],
  decision_contada: ['Contaste la decisión en persona, antes del anuncio, a quien no fue elegido.', 'Lo recordará.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  freddy: { n: 'Ing. Freddy Choque', sub: 'Jefe de la planta de Ayaviri', who: 'jefe' },
  edwin: { n: 'Edwin Calsín', sub: 'Jefe de producción · Ayaviri', c: '#9C6B1E' },
  paola: { n: 'Ing. Paola Vilca', sub: 'Candidata externa · Arequipa', c: '#7A3E6B' },
};

export const WSP = [
  { chat: 'mariela', t: '07:20', de: 'Mariela', txt: 'El directorio leyó el resumen anoche. Don Alfonso dice: «que el nuevo jefe tenga meta de retención». Vamos bien.', si: 'tablero_honesto' },
  { chat: 'mariela', t: '07:20', de: 'Mariela', txt: 'Don Alfonso preguntó por qué el 18 %. No supe qué decirle 😬', si: 'tablero_maquillado' },
  { chat: 'paola', t: '08:15', de: 'Paola', txt: 'Buenos días. Confirmo mi disponibilidad. Conozco Ayaviri: mi abuela es de Santa Rosa.' },
  { chat: 'edwin', t: '08:40', de: 'Edwin', txt: 'Buenos días. Hoy firmé las órdenes de acopio. Don Celestino trajo 400 litros más. Sin novedad.' },
  { chat: 'nely', t: '13:00', de: 'Nely', txt: 'Mañana me quedo a cargo de Juliaca. Ya avisé a los supervisores que los permisos van a Lidia y a mí 💪', si: 'nely_plan' },
  { chat: 'freddy', t: '17:30', de: 'Freddy', txt: 'Me enteré. Buena decisión. Mañana le dejo todo a la persona que siga, con la puerta abierta.' },
];

export const CORREOS = [
  { t: '07:35', de: 'Ing. Rolando Apaza · Producción Juliaca', para: 'Administración; Gestión Humana', asunto: 'Mi opinión sobre los candidatos a Ayaviri', html: '<p>Me pidieron opinión. Adjunto mi informe. Para mí la cosa es clara, pero ustedes deciden.</p>' },
];

export const QUIZ = [
  { q: 'Para comparar a un candidato interno con uno externo, lo primero es…', ops: ['Preguntar a quién prefiere la gerencia', 'Escribir el perfil del puesto y evaluar a los dos con la misma vara', 'Preferir siempre al interno', 'Preferir siempre a quien tenga título'], ok: 1, por: 'Perfil antes que nombres: así la decisión se puede explicar.' },
  { q: 'Un informe dice que una candidata «es soltera y sin hijos, podrá dedicarse full». ¿Qué problema hay?', ops: ['Ninguno, es un dato a favor', 'Es un criterio discriminatorio que no tiene que ver con el puesto', 'Solo si ella se entera', 'Que es un dato desactualizado'], ok: 1, por: 'La Constitución (art. 2 inc. 2) prohíbe discriminar por sexo o por cualquier otra índole; el estado civil no mide la capacidad para el puesto.' },
  { q: 'El nuevo jefe es de adentro. ¿Cuánto debería ganar?', ops: ['Menos, porque está agradecido', 'Lo que corresponde a la categoría del puesto, con criterios objetivos', 'Lo mismo que ganaba antes', 'Lo que pida'], ok: 1, por: 'La Ley 30709 exige cuadros de categorías y fijar las remuneraciones de cada categoría sin discriminación.' },
  { q: 'Hablar quechua para dirigir una planta que trabaja con ganaderos quechuahablantes es…', ops: ['Un requisito discriminatorio', 'Un criterio relacionado con el puesto, que se puede valorar como deseable', 'Irrelevante', 'Obligatorio por ley'], ok: 1, por: 'Lo que importa es que el criterio se relacione con las funciones reales del puesto.' },
  { q: '¿Cuándo se le cuenta la decisión al candidato interno que no fue elegido?', ops: ['En el anuncio general', 'Antes del anuncio, en persona, con las razones', 'Nunca, que se entere solo', 'Por correo, después'], ok: 1, por: 'Enterarse en público de que no fuiste elegido es la forma más rápida de perder a alguien valioso.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '07:45', ch: 'llamada', who: null, titulo: 'Referencias', banner: 'assets/foto/llamada.webp', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>Edwin Calsín, 46 años, técnico en industrias lácteas, 18 años en la planta, interino desde que renunció Freddy. La Ing. Paola Vilca, 33 años, de Arequipa, seis años en una láctea grande; postuló el año pasado a otro puesto y Mariela guardó su CV.</p><p>Antes de compararlos, llamas a quienes los conocen trabajando.</p>`,
    type: 'calls',
    calls: [['Yesenia Condori', 'Contesta: habla de Edwin', 'Edwin es el primero que llega y el último que se va. La gente lo quiere. Pero cuando hay que llamarle la atención a alguien, se le hace difícil: son sus compadres.'], ['Don Celestino Huarachi, ganadero de Umachiri', 'Contesta en quechua y castellano', 'Edwin conoce mis vacas por su nombre, papay. Si viene alguien de afuera, que sepa que aquí la leche no espera.'], ['Exjefe de Paola en Arequipa', 'Contesta: habla de Paola', 'Muy técnica y ordenada. Bajó los reclamos de calidad casi a la mitad. Con los operarios a veces le faltaba paciencia al inicio, pero aprendió.'], ['Ing. Freddy Choque', 'Contesta: habla de los dos', 'Edwin sostiene la planta. Lo que nunca tuvo fue alguien que le enseñara a gestionar: costos, indicadores, papeles. La ingeniera sabe de calidad, que es justo lo que yo pedí tres veces.']],
    prompt: 'Ya tienes cuatro miradas. ¿Qué haces con ellas?',
    choices: [
      { id: 'a', label: 'Anotarlas como hechos y matices, sin decidir todavía: primero escribirás el perfil.',
        res: { q: 'buena', fx: { calidad: 4, tiempo: -1 }, cartera: { reemplazo: 'Referencias anotadas; perfil pendiente' },
          out: 'Tu libreta tiene dos columnas, con lo que cada uno sabe hacer y lo que le falta. Y una nota al margen: «Freddy pidió calidad tres veces».',
          pro: { ok: 'Las referencias son información, no veredictos.', info: 'Lo de Freddy sobre calidad puede cambiar la pregunta: ¿necesitas un jefe o dos funciones?' },
          kusi: ['pensando', 'Cuatro miradas, ninguna decisión todavía.'] } },
      { id: 'b', label: 'Decidir por Edwin: la gente lo quiere y los ganaderos lo respaldan.',
        res: { q: 'aceptable', fx: { personas: 2, calidad: -2 },
          out: 'Te inclinas por Edwin antes de escribir una línea del perfil. Todo lo que leas después lo leerás buscando confirmarlo.',
          pro: { ok: 'El respaldo de la planta es un dato real.', risk: 'Decidir antes del perfil vuelve el resto del proceso un trámite.' },
          kusi: ['pensando', '¿Ya decidiste? ¿Y el perfil?'] } },
    ],
    rules: [[BP, 'Las referencias informan; el perfil decide.']],
    mirada: {
      ve: 'Las referencias más útiles no son las que dicen «es buenísimo», sino las que cuentan en qué es bueno y qué le cuesta. Edwin y Paola tienen fortalezas distintas, y las dos son reales.',
      visual: { tipo: 'balanza', a: { t: 'Edwin Calsín', items: ['18 años en la planta', 'Los ganaderos lo respaldan', 'Le cuesta corregir y gestionar papeles'] }, b: { t: 'Ing. Paola Vilca', items: ['Calidad e inocuidad', 'Ordenada, con indicadores', 'Paciencia con operarios, en proceso'] } },
    },
  },
  {
    id: 'h2', t: '09:20', ch: 'documento', who: null, titulo: 'El perfil del puesto', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Escribes el perfil del jefe de la planta de Ayaviri. ${F.has('primeros_meses') ? 'Ayer descubriste que 21 de las 38 salidas fueron antes de los tres meses. Eso va en el perfil.' : 'Piensas en lo que la planta necesita hoy, no en lo que hacía Freddy.'}</p><p><mark class="clave">Lo indispensable, lo deseable y lo que no es requisito.</mark></p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del perfil.', boton: 'Guardar el perfil',
    bloques: [
      { id: 'ind', t: 'Indispensable', n: 3, ops: [
        { id: 'i1', t: 'Experiencia dirigiendo producción láctea.', ok: true },
        { id: 'i2', t: 'Capacidad de liderar a 130 personas y reducir las salidas tempranas.', ok: true },
        { id: 'i3', t: 'Manejo de la relación con los ganaderos del acopio.', ok: true },
        { id: 'i4', t: 'Título de ingeniero colegiado.', ok: null, por: 'Puede ser deseable. Ponerlo como indispensable descarta, sin más, a quien sostiene la planta hoy.' },
      ] },
      { id: 'des', t: 'Deseable', n: 2, ops: [
        { id: 'd1', t: 'Conocimiento de inocuidad y sistemas de calidad.', ok: true },
        { id: 'd2', t: 'Hablar quechua para comunicarse con ganaderos y operarios.', ok: true, por: 'Se relaciona con funciones reales del puesto.' },
        { id: 'd3', t: 'Ser varón, por el carácter de los ganaderos.', ok: false, por: 'Es discriminación por sexo. Lo que importa es la capacidad de relacionarse con ellos.' },
      ] },
      { id: 'no', t: 'No es requisito', n: 1, ops: [
        { id: 'n1', t: 'Edad, estado civil, lugar de nacimiento.', ok: true, por: 'No miden la capacidad para el puesto.' },
        { id: 'n2', t: 'Experiencia en gestión de costos.', ok: false, por: 'Sí importa para el puesto: va en deseable.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['perfil_listo'] : [], cartera: { perfil: q === 'buena' ? 'Perfil listo, antes de comparar' : 'Perfil con sesgos' },
        out: q === 'buena' ? 'El perfil queda en una página. Al leerlo, te das cuenta de que ninguno de los dos lo cumple completo: Edwin tiene lo indispensable, Paola tiene lo deseable que más falta.' : 'El perfil parece escrito para uno de los dos. Cualquiera podría decir que lo armaste a medida.',
        pro: { ok: 'Un perfil basado en lo que la planta necesita hoy, con criterios que se relacionan con el puesto.', risk: 'Un requisito que no se relaciona con el puesto (sexo, edad) es discriminatorio y además te hace perder candidatos.', info: 'Si nadie cumple todo, quizá la pregunta no es «quién», sino «cómo organizar las funciones».' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un perfil que se puede explicar!' : 'Ese perfil parece hecho a medida…'],
      };
    },
    rules: [[LEY, 'Nadie debe ser discriminado por motivo de origen, raza, sexo, idioma o de cualquier otra índole (Constitución, art. 2 inc. 2).']],
    mirada: {
      ve: 'Escribir el perfil antes de comparar es lo que distingue una decisión con criterio de una con simpatías. Y a veces el perfil revela algo más: que el puesto, tal como estaba, ya no responde a lo que la planta necesita.',
      visual: { tipo: 'flujo', titulo: 'Del perfil a la decisión', pasos: ['Lo que necesita la planta', 'Perfil', 'Referencias', 'Comparar con la misma vara', 'Decidir'], aqui: 1 },
    },
  },
  {
    id: 'h3', t: '10:40', ch: 'documento', who: null, titulo: 'El informe del Ing. Apaza', banner: 'assets/esc/lupa.webp', show: ['etica', 'cumplimiento'],
    body: () => `<p>Mariela le pidió opinión al Ing. Rolando Apaza, jefe de producción de Juliaca, y él mandó un informe de una página. Lo van a leer el gerente general y el directorio.</p><p>Lo revisas antes de que circule. <mark class="clave">¿Qué evalúa el puesto y qué evalúa a la persona por lo que es?</mark></p>`,
    type: 'flag', prompt: 'Marca los comentarios que no deberían usarse para decidir.',
    doc: { t: 'Informe_candidatos_Ayaviri.docx', sub: 'Ing. Rolando Apaza · Producción Juliaca' },
    lines: [
      { id: 'mujer', t: 'Paola: «Mujer joven. ¿Aguantará el frío de Ayaviri y a los ganaderos?».', bad: 'ley', why: 'Evalúa su sexo y su edad, no su capacidad. Es discriminatorio.' },
      { id: 'soltera', t: 'Paola: «Soltera y sin hijos, podrá dedicarse full».', bad: 'ley', why: 'El estado civil y la maternidad no miden la capacidad para el puesto, y usarlos así es discriminatorio.' },
      { id: 'serrano', t: 'Edwin: «Es de la zona, muy de campo; los de Lima no lo van a respetar».', bad: 'ley', why: 'Juzga su origen. Lo que importa es si puede dirigir la planta.' },
      { id: 'reclamos', t: 'Paola: «Bajó los reclamos de calidad casi a la mitad en su planta».', },
      { id: 'maq', t: 'Edwin: «Conoce cada máquina; resolvió sin técnico la falla del caldero en junio».' },
      { id: 'correg', t: 'Edwin: «Le cuesta llamar la atención a su gente».', duda: 'Es un dato de desempeño real que coincide con lo que dijo Yesenia. Se puede trabajar con un plan.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Sacas un comentario, pero otros siguen en el informe que leerá el directorio.' : 'Devuelves el informe al Ing. Apaza con tres frases tachadas y una nota: «Para decidir usamos lo que cada uno ha hecho en el trabajo». Él responde: «Ok, ok. Era una opinión nomás».',
      flags: missLey ? [] : ['informe_limpio'], cartera: { reemplazo: missLey ? 'Informe con sesgos todavía' : 'Informe limpio: solo hechos de trabajo' },
      pro: { ok: 'Una decisión justa se apoya en lo que la persona hizo, no en lo que es.', risk: 'Un informe con prejuicios sobre sexo, estado civil u origen contamina la decisión y expone a la empresa.', info: 'Lo de «le cuesta corregir» es un dato útil: va al plan de desarrollo.' },
      kusi: missLey ? ['preocupado', 'Quedaron prejuicios en el informe…'] : ['celebra', '¡Hechos, no prejuicios!'],
    }),
    rules: [[LEY, 'Nadie debe ser discriminado por motivo de origen, sexo o de cualquier otra índole (Constitución, art. 2 inc. 2).'], [LEY, 'Solo se tratan los datos adecuados y necesarios para la finalidad (Ley 29733, art. 7).']],
    mirada: {
      ve: 'Los prejuicios rara vez se escriben como prejuicios: se escriben como preocupaciones («¿aguantará?») o como elogios («podrá dedicarse full»). Detectarlos es parte del trabajo de Gestión Humana, sobre todo cuando vienen de alguien con poder.',
      visual: { tipo: 'cambio', titulo: 'Del prejuicio al hecho', pares: [['«Mujer joven, ¿aguantará?»', 'Bajó a la mitad los reclamos de calidad'], ['«Soltera, sin hijos»', '(no se evalúa)'], ['«Muy de campo»', 'Resolvió la falla del caldero sin técnico']] },
    },
  },
  {
    id: 'h4', t: '12:20', ch: 'presencial', who: 'mariela', titulo: 'La decisión', banner: 'assets/foto2/revisan.webp', lugar: 'Sala de gerencia', show: ['calidad', 'personas', 'confianza'],
    body: (n, F) => `<p>Mariela, don Alfonso y tú. Sobre la mesa: el perfil, las referencias ${F.has('informe_limpio') ? 'y el informe limpio' : 'y el informe del Ing. Apaza, tal cual'}. Don Alfonso tamborilea con los dedos.</p><p>«Rápido. ¿Edwin o la ingeniera? <mark class="clave">Necesito un nombre para el directorio de mañana.</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer a Edwin como jefe de planta, con un plan de desarrollo en gestión, y crear la jefatura de calidad que Freddy pidió, ofreciéndosela a Paola.',
        res: { q: 'buena', fx: { calidad: 4, personas: 4, confianza: 2, tiempo: -1 }, flags: ['reemplazo_edwin'], cartera: { reemplazo: 'Edwin, jefe de planta · Paola, jefa de calidad (propuesta)' },
          out: 'Don Alfonso frunce el ceño por el costo de un puesto nuevo. Mariela le recuerda los 21 que se fueron antes de los tres meses. «Ya. Pero con metas.» Paola acepta por teléfono a las 2.',
          pro: { ok: 'Aprovechas lo mejor de los dos y respondes a una necesidad que la planta tenía hace años.', risk: 'Es más caro. Tendrás que mostrar resultados.', info: 'Edwin necesitará apoyo para corregir a sus compadres: va en el plan.' },
          kusi: ['celebra', '¡Dos fortalezas, una planta!'] } },
      { id: 'b', label: 'Proponer a Paola como jefa de planta: tiene la formación y la experiencia en calidad que la planta no tiene.',
        res: { q: 'aceptable', fx: { calidad: 3, personas: -2 }, flags: ['reemplazo_paola'], cartera: { reemplazo: 'Paola, jefa de planta · Edwin, jefe de producción' },
          out: 'Don Alfonso aprueba. Es una decisión defendible. Pero en Ayaviri, Edwin va a tener que contarles a los ganaderos que no fue él.',
          pro: { ok: 'Traes una capacidad que la planta necesita.', risk: 'Pierdes la oportunidad de desarrollar a quien sostiene la planta, y puede irse. Habrá que cuidarlo.' },
          kusi: ['pensando', 'Defendible. ¿Y Edwin?'] } },
      { id: 'c', label: 'Proponer que Edwin siga como interino «a prueba» unos meses, sin cambiar su sueldo, y decidir después.',
        res: { q: 'riesgosa', fx: { personas: -3, cumplimiento: -2, tiempo: 2 }, flags: ['edwin_a_prueba'], cartera: { reemplazo: 'Edwin interino, sin plazo ni sueldo de jefe' },
          out: 'Don Alfonso acepta: es lo más barato. Edwin hará el trabajo de jefe de planta con sueldo de jefe de producción, sin saber hasta cuándo.',
          pro: { ok: 'No te apuras.', risk: 'Un interinato sin plazo ni reconocimiento es la forma más rápida de repetir la historia de Freddy.' },
          kusi: ['triste', '¿Otro Freddy en camino?'] } },
    ],
    rules: [[BP, 'Decide con el perfil, los hechos y lo que la planta necesita; pon plazos y metas.']],
    mirada: {
      ve: '«¿De adentro o de afuera?» suele ser una falsa pregunta. A veces la respuesta es reorganizar el puesto: lo que Freddy pidió durante años (alguien de calidad) y lo que Edwin ya hace (sostener la planta) pueden ser dos funciones, no una.',
      visual: { tipo: 'matriz', x: 'Lo que la planta necesita hoy', y: 'Lo que la persona ya demostró', cuadrantes: ['Encaja', 'Desarrollar', 'Traer de afuera', 'No encaja'], items: [['Edwin: producción y ganaderos', .9, .9], ['Edwin: gestión y costos', .7, .35], ['Paola: calidad', .85, .8], ['Paola: relación con ganaderos', .6, .25]] },
    },
  },
  {
    id: 'h5', t: '14:20', ch: 'documento', who: null, titulo: 'El sueldo del nuevo cargo', banner: 'assets/esc/planilla.webp', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Abres el cuadro de categorías y funciones. ${F.has('contraoferta_subasta') ? 'Todavía se nota la cifra que se le ofreció a Freddy la semana pasada: el jefe de Juliaca ya preguntó por ella.' : F.has('retencion_honesta') ? 'La semana pasada se corrigió la categoría de jefe de planta de Ayaviri para que coincida con la de Juliaca.' : 'La categoría de jefe de planta de Ayaviri sigue por debajo de la de Juliaca, sin explicación.'}</p><p>Mariela pregunta: «<mark class="clave">¿Le pagamos lo de la categoría o un poco menos, que recién empieza?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pagar lo que corresponde a la categoría según el cuadro, con los mismos criterios para cualquier persona en ese puesto.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4 }, flags: ['sueldo_categoria'], cartera: { sueldo: 'Según categoría del cuadro' },
          out: 'Mariela asiente. «Si el puesto vale eso, vale eso para quien sea.» La diferencia con lo que ganaba Edwin le cambiará la vida a su familia.',
          pro: { ok: 'El puesto paga lo que vale, sin importar quién lo ocupe ni de dónde venga.', info: 'Si hay un período de adaptación, se acuerda por escrito, con plazo y criterios.' },
          kusi: ['celebra', 'El puesto vale lo que vale. ¡Así!'] } },
      { id: 'b', label: 'Ofrecer un poco menos que la categoría «por ser de adentro»: está agradecido y no va a reclamar.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, flags: ['sueldo_rebajado'], cartera: { sueldo: 'Por debajo de la categoría' },
          out: 'Se ahorra algo este mes. El día que el nuevo jefe vea el cuadro de categorías, sabrá exactamente cuánto valió su lealtad.',
          pro: { ok: 'Ahorras.', risk: 'Pagar menos en la misma categoría sin criterios objetivos va contra la lógica de la Ley 30709 y repite lo que hizo irse a Freddy.' },
          kusi: ['indignado', '¡Es justo lo que hizo irse a Freddy!'] } },
    ],
    rules: [[LEY, 'Las remuneraciones de cada categoría las fija el empleador sin discriminación (Ley 30709, art. 3).']],
    mirada: {
      ve: 'La historia de Freddy empezó así: un jefe que ganaba menos que su par por razones que nadie podía explicar. El cuadro de categorías existe para que eso no dependa de cuánto reclama cada uno.',
      visual: { tipo: 'rango', titulo: 'La categoría de jefe de planta', min: 0, max: 100, banda: [70, 90], marcas: [['Oferta «por ser de adentro»', 60], ['Lo que dice el cuadro', 80]] },
      normas: [{ ley: 'Ley 30709, art. 3', dice: 'Las remuneraciones que corresponden a cada categoría las fija el empleador sin discriminación.', practica: 'Si dos personas ocupan la misma categoría, la diferencia de sueldo debe poder explicarse con criterios objetivos.' }],
    },
  },
  {
    id: 'h6', t: '16:00', ch: 'documento', who: null, titulo: 'Los primeros 90 días', banner: 'assets/esc/escalera.webp', show: ['calidad', 'personas'],
    body: () => `<p>Mañana se anuncia en Ayaviri. Quieres llevar algo más que un nombre: <mark class="clave">un plan para que la persona nueva no empiece sola</mark>, como empezó Freddy hace años.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de los primeros 90 días. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'entrega', t: 'Entrega de cargo con Freddy y acta firmada', por: 'Lo primero: la memoria de la planta.' },
      { id: 'anuncio', t: 'Anuncio a toda la planta, en persona', por: 'Que lo escuchen de la empresa, no del rumor.' },
      { id: 'escucha', t: 'Primeras dos semanas: conversar con cada área y con los ganaderos', por: 'Escuchar antes de cambiar.' },
      { id: 'meta', t: 'Acordar metas: salidas tempranas, calidad y horas extra', por: 'Lo que se va a medir.' },
      { id: 'induccion', t: 'Rediseñar la inducción de los operarios nuevos', por: 'Ataca la causa de las salidas tempranas.' },
      { id: 'rev', t: 'Revisión a los 90 días con Gestión Humana', por: 'Ver qué funcionó y ajustar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 2 : 0 },
        flags: q !== 'riesgosa' ? ['plan_90'] : [], cartera: { reemplazo: q === 'riesgosa' ? 'Plan de 90 días desordenado' : 'Plan de 90 días listo' },
        out: q === 'buena' ? 'Imprimes el plan en dos copias: una para ti y otra para quien lleve la planta. Mañana lo leerán juntos en Ayaviri.' : 'El plan tiene metas desde el primer día, antes de escuchar a nadie. Va a sonar a «llegó el que viene a cambiar todo».',
        pro: { ok: 'Escuchar, acordar metas, atacar la causa y revisar.', risk: 'Cambiar antes de escuchar es la forma más rápida de que una planta cierre filas contra el nuevo jefe.', info: 'La inducción es la palanca más directa contra las salidas de los primeros tres meses.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Nadie empieza solo!' : 'Ojo: escuchar va antes de cambiar.'],
      };
    },
    rules: [[BP, 'Un cambio de jefatura se acompaña: entrega, anuncio, escucha, metas y revisión.']],
    mirada: {
      ve: 'La mayoría de jefes nuevos fracasan no por falta de capacidad, sino por empezar solos y con prisa. Un plan de 90 días es la forma de Gestión Humana de decir: «no te soltamos el primer día».',
      visual: { tipo: 'linea', titulo: 'Los primeros 90 días', hitos: [['Día 1', 'Entrega y anuncio'], ['Semanas 1-2', 'Escuchar'], ['Mes 1', 'Metas acordadas'], ['Mes 2', 'Nueva inducción'], ['Día 90', 'Revisión']] },
    },
  },
  {
    id: 'h7', t: '17:50', ch: 'llamada', who: null, titulo: 'Quien no fue elegido', banner: 'assets/esc/camino.webp', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>${F.has('reemplazo_paola') ? 'Edwin no será el jefe de planta. Mañana lo anuncian en Ayaviri, delante de todos sus compañeros.' : F.has('edwin_a_prueba') ? 'Edwin seguirá como interino, sin plazo. Mañana lo anuncian en Ayaviri.' : 'Edwin será el jefe de planta. Pero Paola postulaba a la jefatura de planta y le ofrecieron otro puesto; mañana se anuncia todo en Ayaviri.'}</p><p>Hay una persona que <mark class="clave">no debería enterarse en público</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Llamar hoy a esa persona, explicarle la decisión con sus razones, escuchar lo que sienta y contarle qué viene para ella.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, flags: ['decision_contada'],
          out: 'La llamada dura veinte minutos. Hay silencio, una pregunta difícil y, al final, un «gracias por decírmelo antes». Llegará mañana sabiendo dónde está parada.',
          pro: { ok: 'Le das la decisión con respeto y tiempo para procesarla.', info: 'Lo que le dijiste hoy es lo que tendrás que sostener mañana en público.' },
          kusi: ['feliz', 'Una llamada difícil, a tiempo.'] } },
      { id: 'b', label: 'Que se entere mañana en el anuncio, como todos: así es más justo.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3 },
          out: 'Mañana, en medio de la asamblea, alguien va a mirar a esa persona para ver cómo reacciona. Y lo va a ver todo el mundo.',
          pro: { ok: 'Nadie recibe información antes que otros.', risk: 'Enterarse en público de que no fuiste elegido humilla, y quien se siente humillado empieza a buscar la puerta.' },
          kusi: ['triste', 'Delante de todos, no.'] } },
    ],
    mirada: { ve: 'En toda decisión de reemplazo hay alguien que esperaba otra cosa. La forma en que se entera define si se queda comprometido o si se va en seis meses. Esa conversación le toca a Gestión Humana, y no se delega.' },
  },
];
