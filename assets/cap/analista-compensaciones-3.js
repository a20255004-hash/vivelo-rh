// Analista de Compensaciones y Beneficios · Capítulo 3 · «El cuadro de categorías» · Semana 1, viernes.
// Hilo: el cuadro de categorías tiene puestos iguales con nombres distintos. Uno de ellos es el de Claudia.
// Normas citadas:
// - Ley 30709 y su reglamento, D.S. 002-2018-TR: el cuadro de categorías y funciones es el mecanismo con el que el
//   empleador evalúa y organiza los puestos con criterios objetivos; la valorización se hace de manera objetiva en
//   función de las tareas; el empleador informa la política salarial al ingreso, al cambiar la categoría ocupacional
//   o al modificarse el esquema remunerativo; no tener política salarial o no comunicarla es infracción muy grave.
//   El Peruano: https://elperuano.pe/noticia/246869-sunafil-fiscaliza-normas-sobre-politica-salarial-atiende-estos-consejos-para-evitar-riesgos
// - R.M. 243-2018-TR: pautas referenciales del MTPE para evaluar puestos y elaborar el cuadro
//   (referida en https://juris.pe/blog/igualdad-salarial-cuadro-categorias-funciones-politica-salarial/).

export const CAP = {
  n: 3, titulo: 'El cuadro de categorías', dia: 'Semana 1, miércoles', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:00', fin: '18:45', cierreHora: '18:30',
  apertura: 'Miércoles de cumpleaños del mes en AndesTel: hay torta en el comedor a la una. Gustavo te recibe con un archivo de 2019 que nadie actualizó desde la fusión con CableSur.', boton: 'Abrir el cuadro',
  kusi: 'Hoy ordenamos puestos, no personas. ¡A mirar qué hace cada uno de verdad!',
  lead: 'Encontraste dos puestos iguales con nombres distintos, lo confirmaste con las áreas, elegiste factores objetivos, resististe una presión para mantener la diferencia y pusiste en orden cómo se comunica el cuadro.',
  reflexion: 'Si mañana te cambiaran el nombre del puesto sin cambiar tu trabajo, ¿cómo te enterarías de que eso afecta tu sueldo?',
  siguiente: { n: 4, titulo: 'La pregunta de Claudia', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'cuadro', p: 'Cuadro de categorías y funciones', j: 'Gustavo · Compensaciones', d: 0, e: 'Versión 2019, sin actualizar' },
  { id: 'redes', p: 'Analista de redes vs. Ingeniero de redes', j: 'Marco · Redes Core', d: 0, e: 'Por confirmar' },
  { id: 'factores', p: 'Factores de valoración', j: 'Gustavo · Compensaciones', d: 0, e: 'Por definir' },
  { id: 'sistema', p: 'Códigos de categoría en el sistema de planillas', j: 'TI · Planillas', d: 0, e: 'Sin pedir' },
];

export const FUTURO = {
  cuadro_unificado: ['Unificaste «analista» e «ingeniero» de redes en una misma categoría, con diferencias solo por criterios objetivos.', 'Claudia lo notará cuando pregunte en el capítulo 4.'],
  cuadro_sesgado: ['Mantuviste dos categorías para el mismo trabajo, como pidió Renzo.', 'La brecha de Claudia tendrá una explicación que no resiste una inspección.'],
  cuadro_postergado: ['Dejaste la unificación para después de la revisión.', 'Claudia preguntará antes de que llegue ese «después».'],
  redes_confirmado: ['Confirmaste con las áreas que analistas e ingenieros de redes hacen lo mismo.', 'Tendrás la prueba cuando revises los números de Claudia.'],
  factores_objetivos: ['Elegiste factores de valoración objetivos.', 'Serán la base para defender el cuadro ante el comité.'],
  ticket_ti: ['Pediste a TI el cambio de códigos con un ticket y una lista validada.', 'El sistema de planillas estará listo para las cartas de aumento.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
  wilber: { n: 'Wilber Ccori', sub: 'Jefe de Operaciones de Campo', c: '#F2A900' },
  ti: { n: 'Mesa de ayuda TI', sub: 'Tickets de sistemas', c: '#8A8A8A' },
};

export const WSP = [
  { chat: 'grupo', t: '08:02', de: 'Gustavo', txt: 'Hoy: «CUADRO_CATEGORIAS_2019_def.xlsx». Prepárate para sufrir un poquito 😅' },
  { chat: 'wilber', t: '08:15', de: 'Wilber', txt: 'Ingeniera, los chicos ya preguntan cuánto es el aumento. Les dije que pronto. ¿Pronto es cuánto?', si: 'tecnicos_promesa' },
  { chat: 'wilber', t: '08:15', de: 'Wilber', txt: 'Ayer les dije lo que conversamos. Nadie renunció. Hasta me aplaudieron un poco 😄', si: 'tecnicos_honesto' },
  { chat: 'fiorella', t: '09:05', de: 'Fiorella', txt: 'Me contaron que la planilla de Tecnología apareció en una carpeta de Finanzas. ¿Sabes algo? Lo vemos esta semana.', si: 'sueldos_filtrados' },
  { chat: 'renzo', t: '12:55', de: 'Renzo', txt: '¿Estás en tu sitio? Bajo un ratito, es sobre el cuadro.' },
  { chat: 'gustavo', t: '18:20', de: 'Gustavo', txt: 'Buen día. Mañana tienes reunión con Claudia Puma: pidió hablar con Compensaciones.' },
];

export const CORREOS = [
  { t: '08:20', de: 'Fiorella Gamarra', para: 'Compensaciones', asunto: 'Cuadro de categorías', html: '<p>Necesito el cuadro de categorías actualizado antes del comité. SUNAFIL está fiscalizando la Ley 30709 y no quiero que nos encuentren con un archivo de 2019.</p><p>Que cada categoría se pueda explicar por lo que hace el puesto, no por cómo se llama.</p><p>Fiorella</p>' },
  { t: '15:40', de: 'Pulso Salarial · Consultora', para: 'Compensaciones AndesTel', asunto: 'Formato de datos 2027', html: '<p>Recibimos su indicación: para el próximo estudio usaremos datos sin nombres ni DNI y archivos protegidos. Gracias por la precisión.</p>', si: 'datos_protegidos' },
];

export const QUIZ = [
  { q: 'El cuadro de categorías y funciones es…', ops: ['El organigrama de la empresa', 'El mecanismo con el que el empleador evalúa y agrupa los puestos con criterios objetivos', 'La lista de sueldos por persona', 'El reglamento interno'], ok: 1, por: 'Así lo describe la normativa de la Ley 30709: evalúa y organiza puestos, no personas.' },
  { q: 'Dos puestos con nombres distintos pero las mismas funciones deberían…', ops: ['Quedar en categorías distintas por el nombre', 'Valorarse igual, porque se valora lo que hace el puesto', 'Pagarse según quién los ocupe', 'Eliminarse'], ok: 1, por: 'La valorización se hace en función de las tareas, no del nombre del cargo.' },
  { q: '¿Cuál de estos NO es un factor objetivo para valorar un puesto?', ops: ['Conocimientos requeridos', 'Responsabilidad', 'El sexo de quienes suelen ocuparlo', 'Condiciones de trabajo y riesgo'], ok: 2, por: 'Valorar según quién ocupa el puesto es justamente lo que la Ley 30709 busca evitar.' },
  { q: '¿Cuándo debe el empleador informar la política salarial al trabajador?', ops: ['Solo si lo pide por escrito', 'Al ingreso, al cambiar su categoría o al modificarse su esquema remunerativo', 'Una vez cada cinco años', 'Nunca, es confidencial'], ok: 1, por: 'Puede hacerse en reuniones o por escrito o medios digitales.' },
  { q: 'No tener política salarial o no comunicarla a los trabajadores es…', ops: ['Una falta leve', 'Una infracción muy grave en relaciones laborales', 'Solo una recomendación', 'Obligatorio solo para el Estado'], ok: 1, por: 'SUNAFIL puede sancionarla con multa.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:30', ch: 'documento', who: null, titulo: 'El archivo de 2019', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio · «CUADRO_CATEGORIAS_2019_def.xlsx»', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>El cuadro tiene 74 puestos y 8 categorías. Al lado de cada puesto, alguien escribió comentarios en amarillo que nunca borró.</p><p>Filtras Tecnología y algo te salta a la vista: <mark class="clave">«Analista de redes» y «Ingeniero de redes» están en categorías distintas</mark>. En la lista de ocupantes del primero aparece un nombre que ya conoces: Claudia Puma.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple la ley o debe corregirse.',
    doc: { t: 'Cuadro de categorías y funciones', sub: 'AndesTel S.A. · versión 2019 · Tecnología y Operaciones' },
    lines: [
      { id: 'redes', t: 'Ingeniero de redes · categoría 6 · 9 ocupantes (8 hombres). Analista de redes · categoría 5 · 11 ocupantes (9 mujeres). Funciones de ambos: configurar y monitorear la red, guardias nocturnas.', bad: LEY, why: 'Mismas funciones, distinta categoría, y la diferencia coincide con el sexo de los ocupantes. La Ley 30709 exige valorar los puestos con criterios objetivos según las tareas.' },
      { id: 'nombre', t: 'Nota: «Analista» = personal que vino de CableSur en la fusión de 2019.', bad: BP, why: 'El origen de la persona no es un criterio para valorar un puesto. Es una etiqueta heredada.' },
      { id: 'asist', t: 'Asistente administrativa · categoría 2 · «puesto femenino».', bad: LEY, why: 'Un puesto no tiene sexo. Escribirlo en el cuadro es una prueba de sesgo.' },
      { id: 'tec', t: 'Técnico de campo FTTH · categoría 3 · trabajo en altura, manejo de fusionadora.' },
      { id: 'jefe', t: 'La categoría de cada puesto la propone su gerente.', bad: BP, why: 'La categoría sale de una valoración con factores comunes, no del criterio de cada gerente.' },
      { id: 'sup', t: 'Supervisor de call center · categoría 4 · lidera 25 asesores, metas de calidad.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Corriges algunos comentarios en amarillo, pero el cuadro sigue diciendo, sin decirlo, que hay puestos de hombres y puestos de mujeres.' : `Marcas ${hitsLey + hitsBp} problemas. Gustavo se acerca, mira la fila de redes y suelta un largo «uff». «Esto explica muchas cosas.»`,
      rel: { gustavo: missLey ? 0 : 1 },
      cartera: { cuadro: missLey ? 'Revisado a medias' : 'Problemas identificados: redes y «puesto femenino»' },
      pro: { ok: 'Lees el cuadro buscando lo que el puesto hace y quién quedó dónde.', risk: 'Un cuadro con etiquetas por sexo es lo primero que pediría un inspector.', info: 'Cruza cada categoría con el porcentaje de mujeres y hombres que la ocupan.' },
      kusi: missLey ? ['indignado', '¿«Puesto femenino»? ¿En serio?'] : ['sorpresa', '¡Mismo trabajo, distinto nombre!'],
    }),
    rules: [[LEY, 'Ley 30709 y D.S. 002-2018-TR: los puestos se evalúan y agrupan con criterios objetivos, en función de las tareas.']],
    mirada: {
      ve: 'La discriminación salarial muchas veces no está en el sueldo sino en el cuadro: si dos trabajos iguales quedan en categorías distintas, la brecha parece «justificada» por la categoría. Por eso la ley pone el foco en cómo se valoran los puestos.',
      visual: { tipo: 'cambio', titulo: 'Del nombre del cargo a lo que hace el puesto', pares: [['Analista de redes · cat. 5', 'Mismas funciones que ingeniero'], ['Ingeniero de redes · cat. 6', 'Una sola valoración'], ['«Puesto femenino»', 'Un puesto no tiene sexo']] },
      normas: [{ ley: 'Ley 30709 y D.S. 002-2018-TR', dice: 'El cuadro de categorías y funciones es el mecanismo con el que el empleador evalúa y organiza los puestos con criterios objetivos.', practica: 'Si el trabajo es el mismo, el nombre del cargo no justifica otra categoría.' }],
    },
  },
  {
    id: 'c2', t: '10:00', ch: 'llamada', who: null, titulo: '¿Qué hace cada uno?', banner: 'assets/foto2/callcenter.webp', lugar: 'Sala pequeña del piso 9, otra vez', show: ['calidad', 'personas'],
    body: () => `<p>Antes de mover una categoría necesitas algo más que el Excel: <mark class="clave">confirmar qué hace de verdad cada puesto</mark>.</p><p>Haces tres llamadas, con tu cuaderno cuadriculado y un café que ya se enfrió.</p>`,
    type: 'calls',
    calls: [
      ['Ing. Marco Saldaña · jefe de Redes Core · 52 años', 'Contesta desde el NOC, con alarmas de fondo', '«¿Analistas e ingenieros? Hacen lo mismo, oiga. Configuran, monitorean, hacen guardia una semana al mes. Lo de “analista” vino de CableSur; nunca lo cambiamos porque daba flojera tocar el sistema.»'],
      ['Lucía Tapia · analista de redes · ex CableSur · 8 años', 'Contesta bajito, desde su sitio', '«Yo hago guardias igual que los ingenieros. Una vez pregunté por qué mi puesto tenía otro nombre y me dijeron que era “un tema administrativo”. Tengo dos hijos; no quería parecer conflictiva.»'],
      ['Rocío Benavides · Selección', 'Contesta con la cámara apagada', '«Los avisos para analista e ingeniero de redes piden exactamente lo mismo: título de Ingeniería de Telecomunicaciones o afines y certificación de redes. Hasta copiamos y pegamos el aviso.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué concluyes?',
    choices: [
      { id: 'a', label: 'Es el mismo puesto con dos nombres: mismas funciones, mismos requisitos y mismas guardias. Debe valorarse una sola vez.',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 3 }, flags: ['redes_confirmado'], cartera: { redes: 'Confirmado: mismo puesto, dos nombres' },
          out: 'En tu cuaderno escribes «mismo puesto» y lo subrayas dos veces. Tienes funciones, requisitos y testimonios: tres pruebas independientes.',
          pro: { ok: 'Confirmas con el jefe, con una ocupante y con Selección: tres miradas distintas.', info: 'Pide las descripciones de puesto firmadas, si existen, para dejar todo documentado.' },
          kusi: ['celebra', '¡Tres pruebas, una conclusión!'] } },
      { id: 'b', label: 'Si se llama «analista» debe ser un nivel junior: la diferencia de categoría tiene sentido.',
        res: { q: 'riesgosa', fx: { calidad: -4, etica: -3 }, cartera: { redes: 'Diferencia aceptada por el nombre' },
          out: 'Cierras el cuaderno. Lucía, que lleva ocho años haciendo guardias, seguirá siendo «junior» en el papel.',
          pro: { ok: 'Respetas la estructura existente.', risk: 'Escuchaste que hacen lo mismo y decidiste por el nombre.' },
          kusi: ['triste', 'Ocho años de guardias… y «junior».'] } },
      { id: 'c', label: 'Las llamadas no bastan: esperar a tener descripciones de puesto formales antes de concluir nada.',
        res: { q: 'aceptable', fx: { calidad: 1, tiempo: -2 }, cartera: { redes: 'Pendiente de descripciones formales' },
          out: 'Pides las descripciones. Marco responde: «¿Descripciones? La última es de 2017». El comité es la próxima semana.',
          pro: { ok: 'Buscas documentar.', risk: 'Esperar un documento que no existe paraliza una corrección que ya tiene pruebas.' },
          kusi: ['pensando', 'A veces la prueba ya la tienes.'] } },
    ],
    rules: [[BP, 'Confirma las funciones de un puesto con el jefe, con quien lo ocupa y con los requisitos de selección.']],
    mirada: {
      ve: 'En compensaciones, el Excel cuenta una historia y las personas otra. Cuando el jefe, la ocupante y Selección dicen lo mismo, ya no es una impresión: es evidencia.',
      visual: { tipo: 'balanza', a: { t: 'Lo que dice el cuadro', items: ['Dos puestos', 'Dos categorías'] }, b: { t: 'Lo que dicen las personas', items: ['Mismas funciones', 'Mismos requisitos', 'Mismas guardias'] } },
    },
  },
  {
    id: 'c3', t: '11:40', ch: 'documento', who: 'gustavo', titulo: 'Con qué se valora un puesto', banner: 'assets/3d/scenes/balanza.webp', lugar: 'Pizarra del área de Compensaciones', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>Gustavo dibuja una tabla en la pizarra con un plumón que ya casi no pinta. «Para reordenar el cuadro necesitamos factores comunes para los 74 puestos. Las pautas del Ministerio de Trabajo sirven de guía.»</p><p>«Elige <mark class="clave">tres factores</mark> que usarías con todos.»</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres factores para valorar todos los puestos.', boton: 'Escribirlos en la pizarra', resumen: 'Elegiste',
    cols: ['Factor', 'Qué mide'],
    rows: [
      { id: 'conoc', cells: ['Conocimientos y formación requeridos', 'Qué hay que saber para hacer el puesto'] },
      { id: 'resp', cells: ['Responsabilidad', 'Impacto de las decisiones, personas o equipos a cargo'] },
      { id: 'cond', cells: ['Condiciones de trabajo', 'Riesgo, altura, esfuerzo físico, horarios'] },
      { id: 'quien', cells: ['Perfil de quienes lo ocupan hoy', 'Edad, sexo y procedencia de los ocupantes'] },
      { id: 'sueldo', cells: ['Sueldo actual del puesto', 'Lo que ya se paga'] },
      { id: 'gerente', cells: ['Importancia según su gerente', 'Opinión del gerente del área'] },
    ],
    score: { conoc: 3, resp: 3, cond: 3, quien: -4, sueldo: -2, gerente: -1 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.includes('quien') ? -4 : 2, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['factores_objetivos'] : [],
        cartera: { factores: q === 'buena' ? 'Conocimientos, responsabilidad y condiciones' : 'Factores con sesgo o circulares' },
        out: q === 'buena' ? 'Gustavo los escribe en la pizarra y agrega pesos al lado: 40, 35, 25. «Con esto, el técnico que sube a un poste suma puntos que antes nadie le contaba.»' : picks.includes('quien') ? 'Gustavo borra uno de inmediato: «Valorar por quién ocupa el puesto es exactamente lo que la ley prohíbe».' : 'Gustavo frunce el ceño: «Si usamos el sueldo actual para valorar, repetimos las injusticias que queremos corregir».',
        pro: { ok: 'Factores comunes, objetivos y que miran el puesto, no a la persona.', info: 'Define cada factor en niveles (por ejemplo, del 1 al 5) con ejemplos para que dos personas puntúen igual.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Factores que miden el trabajo!' : 'Ese factor mira a la persona, no al puesto.'],
      };
    },
    rules: [[LEY, 'La valorización del puesto se hace de manera objetiva en función de las tareas (Ley 30709 y su reglamento; pautas de la R.M. 243-2018-TR).'], [BP, 'No uses el sueldo actual como factor: es circular y repite las brechas.']],
    mirada: {
      ve: 'Valorar puestos es ponerse de acuerdo en qué vale más para la empresa y aplicarlo a todos por igual. Si un factor mira a la persona que ocupa el puesto, el sesgo entra por la puerta grande.',
      visual: { tipo: 'embudo', titulo: 'Pesos de los factores (%)', niveles: [['Total', 100], ['Conocimientos', 40], ['Responsabilidad', 35], ['Condiciones', 25]] },
    },
  },
  {
    id: 'c4', t: '13:10', ch: 'presencial', who: 'renzo', titulo: '«No me desordenes el área»', banner: 'assets/foto2/tension.webp', lugar: 'Tu escritorio, a la hora del almuerzo', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Estás por bajar al cumpleaños del mes (hay torta tres leches) cuando Renzo se sienta en la silla de al lado. ${F.has('renzo_cede') ? '«Lo de Diego salió bien, gracias. Ahora te pido otra cosita.»' : F.has('renzo_criterio') ? '«Ya vi que te gustan los datos. Bien. Te doy uno.»' : ''}</p><p>«Si juntas analistas e ingenieros, <mark class="clave">mañana las once analistas piden ganar como los ingenieros</mark> y no hay presupuesto. Los ingenieros hacen las guardias críticas. Déjalo como está, ¿ya?»</p><p>Las llamadas de la mañana dicen que las guardias las hacen todos.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Unificar los dos puestos en una sola categoría y explicarle a Renzo que las diferencias de sueldo dentro de ella solo se justificarán con criterios objetivos, documentados persona por persona.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: -1 }, rel: { renzo: -1, fiorella: 1 }, flags: ['cuadro_unificado'], cartera: { cuadro: 'Redes unificado en categoría 6' },
          out: 'Renzo se levanta. «Tú vas a explicarle al directorio de dónde sale la plata.» Se va sin despedirse. Esa noche, Fiorella responde tu correo con un solo «Gracias».',
          pro: { ok: 'Corriges la categoría y no prometes igualar sueldos de golpe: cada diferencia se revisará con criterios.', risk: 'Habrá presión por cerrar brechas con un presupuesto que no alcanza para todo.', info: 'Calcula cuánto costaría cerrar la brecha en uno o dos años.' },
          kusi: ['animo', 'El cuadro ya dice la verdad.'] } },
      { id: 'b', label: 'Mantener las dos categorías: Renzo conoce su área y abrir este tema ahora puede reventar el presupuesto.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5 }, rel: { renzo: 1 }, flags: ['cuadro_sesgado'], cartera: { cuadro: 'Redes sigue en dos categorías' },
          out: 'Renzo te da una palmada en el hombro y baja a la torta. Tu cuaderno sigue diciendo «mismo puesto», subrayado dos veces.',
          pro: { ok: 'Evitas un conflicto con un gerente.', risk: 'Sostienes una diferencia que tus propias pruebas contradicen y que afecta sobre todo a mujeres.' },
          kusi: ['triste', 'Tus pruebas decían otra cosa.'] } },
      { id: 'c', label: 'Dejar la unificación para el próximo año, cuando haya más presupuesto, y anotarlo como pendiente.',
        res: { q: 'aceptable', fx: { etica: -1, cumplimiento: -2, tiempo: 2 }, flags: ['cuadro_postergado'], cartera: { cuadro: 'Unificación postergada a 2028' },
          out: 'Renzo asiente: «Eso. Sin apuros». Anotas «2028» al lado de la fila. Lucía seguirá un año más en categoría 5.',
          pro: { ok: 'Reconoces el problema por escrito.', risk: 'Corregir la categoría no cuesta nada hoy; lo que cuesta es cerrar la brecha de sueldo. Postergarlo todo mezcla las dos cosas.' },
          kusi: ['pensando', '¿Por qué esperar para corregir un nombre?'] } },
    ],
    rules: [[LEY, 'Ley 30709: el cuadro se basa en criterios objetivos. Que corregir cueste no justifica mantener una categoría que no los cumple.'], [BP, 'Separa dos decisiones: corregir la categoría (hoy) y cerrar la brecha de sueldo (con un plan).']],
    mirada: {
      ve: 'El argumento de Renzo mezcla dos cosas: reconocer que dos puestos valen lo mismo y pagar la diferencia. Lo primero es una obligación y no cuesta nada; lo segundo se puede planificar. Separarlas es la jugada de una buena analista.',
      visual: { tipo: 'linea', titulo: 'Corregir sin reventar el presupuesto', hitos: [['Hoy', 'Una sola categoría para redes'], ['Revisión 2027', 'Mayor incremento a quien esté debajo de su banda'], ['2028', 'Brecha cerrada']] },
    },
  },
  {
    id: 'c5', t: '15:00', ch: 'sistema', who: null, titulo: 'El sistema no deja', banner: 'assets/esc/alarma.webp', lugar: 'Sistema de planillas · módulo «Estructura»', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>Intentas cambiar el código de categoría en el sistema de planillas y aparece un cuadro gris: <mark class="clave">«Acceso denegado · perfil CONSULTA»</mark>.</p><p>Gustavo está en otra reunión. En un post-it pegado en su monitor, a la vista, está su usuario y su contraseña.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Abrir un ticket a TI con la lista de cambios validada por Gustavo, y marcar la fecha límite antes del cálculo de las cartas de aumento.',
        res: { q: 'buena', fx: { cumplimiento: 4, calidad: 3, tiempo: -1 }, flags: ['ticket_ti'], cartera: { sistema: 'Ticket abierto con lista validada' }, envia: ['ti', 'Ticket: actualizar códigos de categoría de 20 puestos según el nuevo cuadro (lista adjunta, validada por Gustavo Herrera). Fecha límite: antes del cálculo de cartas de aumento.'],
          out: 'TI responde: «Recibido. Los cambios de estructura se hacen el día 25, fuera del cierre de planilla». Te da tiempo de sobra.',
          pro: { ok: 'Usas el canal formal: queda registro de quién pidió qué y con qué aprobación.', info: 'Pídele a Gustavo que guarde su contraseña en otro lado.' },
          kusi: ['feliz', '¡Por la puerta correcta!'] } },
      { id: 'b', label: 'Entrar con el usuario de Gustavo: es solo un código, él está de acuerdo y así avanzas hoy.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -3, tiempo: 3 }, cartera: { sistema: 'Cambiado con usuario ajeno' },
          out: 'Cambias los códigos en diez minutos. A las 5 p. m., el cierre de planilla de la quincena se cae: el cambio entró en pleno proceso. En el registro aparece «G. Herrera».',
          pro: { ok: 'Avanzas rápido.', risk: 'Usar credenciales ajenas rompe la trazabilidad y puede afectar procesos que no conoces.' },
          kusi: ['indignado', '¡Con la contraseña de otro, no!'] } },
      { id: 'c', label: 'Dejar los cambios solo en tu Excel y ver el sistema la próxima semana.',
        res: { q: 'aceptable', fx: { tiempo: 1, calidad: -2 }, cartera: { sistema: 'Cambios solo en Excel' },
          out: 'Tu Excel queda perfecto. El sistema sigue diciendo «Analista de redes · cat. 5». Ahora hay dos verdades.',
          pro: { ok: 'No tocas nada que no te corresponde.', risk: 'Si el sistema y el cuadro no coinciden, las cartas de aumento saldrán con el dato viejo.' },
          kusi: ['pensando', 'Dos archivos, dos verdades.'] } },
    ],
    rules: [[BP, 'Los cambios en el sistema de planillas se piden por el canal formal, con aprobación y fuera del cierre.']],
    mirada: {
      ve: 'Un cambio correcto hecho por el camino equivocado puede causar más problemas que el error que corrige. En planillas, la trazabilidad (quién cambió qué y con qué permiso) es parte del trabajo.',
    },
  },
  {
    id: 'c6', t: '16:30', ch: 'documento', who: null, titulo: 'Del Excel a la gente', banner: 'assets/esc/escalera.webp', show: ['cumplimiento', 'personas', 'calidad'],
    body: () => `<p>El nuevo cuadro está casi listo. Fiorella pregunta cómo llegará a los trabajadores: <mark class="clave">quien cambie de categoría tiene que saberlo</mark>, y por qué.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para cerrar y comunicar el nuevo cuadro.', boton: 'Enviar el plan a Fiorella',
    items: [
      { id: 'val', t: 'Puntuar los 74 puestos con los factores acordados', por: 'Primero la valoración, con reglas iguales para todos.' },
      { id: 'jefes', t: 'Validar con cada jefatura que las funciones descritas son las reales', por: 'Evita errores como el de redes.' },
      { id: 'aprob', t: 'Aprobar el cuadro en Gestión Humana y la gerencia general', por: 'Sin aprobación no es la política de la empresa.' },
      { id: 'sis', t: 'Actualizar los códigos en el sistema de planillas', por: 'El sistema y el cuadro deben decir lo mismo.' },
      { id: 'com', t: 'Informar a cada trabajador que cambió de categoría, con la política salarial', por: 'La norma pide informar la política salarial cuando cambia la categoría.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 2 : 0 },
        rel: { fiorella: q === 'buena' ? 1 : 0 },
        cartera: { cuadro: q === 'buena' ? 'Plan de cierre y comunicación aprobado' : 'Plan con pasos desordenados' },
        out: q === 'buena' ? 'Fiorella responde en cinco minutos: «Así. Y que la comunicación no sea un correo masivo: reuniones cortas por área».' : 'Fiorella responde: «Si comunicamos antes de aprobar, tendremos que desmentirnos».',
        pro: { ok: 'Valorar, validar, aprobar, registrar y comunicar: en ese orden nadie se entera por pasillo.', info: 'Prepara preguntas frecuentes: «¿Me suben el sueldo si subo de categoría?» será la primera.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Orden perfecto!' : 'Primero aprobar, luego contar.'],
      };
    },
    rules: [[LEY, 'Ley 30709 y su reglamento: el empleador informa la política salarial al ingreso del trabajador, al cambiar su categoría o al modificarse su esquema remunerativo. No hacerlo es infracción muy grave.']],
    mirada: {
      ve: 'Un cuadro de categorías no termina en el Excel. Termina cuando cada persona sabe en qué categoría está y por qué, y puede preguntar.',
      visual: { tipo: 'flujo', titulo: 'Cerrar el cuadro', pasos: ['Puntuar', 'Validar', 'Aprobar', 'Sistema', 'Comunicar'] },
      normas: [{ ley: 'Ley 30709 y D.S. 002-2018-TR', dice: 'El empleador informa a sus trabajadores la política salarial al ingreso, al cambiar su categoría ocupacional o al modificarse su esquema remunerativo, en reuniones o por escrito o medios digitales.', practica: 'Quien cambie de categoría con el nuevo cuadro debe recibir esa información.' }],
    },
  },
  {
    id: 'c7', t: '18:10', ch: 'correo', who: null, titulo: 'Antes del directorio', banner: 'assets/foto2/caminan.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Fiorella Gamarra', to: 'Analista de Compensaciones', asunto: 'RE: Cuadro de categorías' },
    body: (n, F) => `<p>¿Qué es lo más importante que encontraste hoy? Una línea, por favor. Mañana temprano tengo directorio.</p><p>F.</p><p>${F.has('cuadro_sesgado') ? 'Piensas en la fila de redes, que quedó como estaba.' : 'Piensas en la fila de redes y en Lucía.'} <mark class="clave">Una línea</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'El puesto de analista de redes es el de ingeniero con otro nombre, y casi todas sus ocupantes son mujeres.',
        res: { q: 'buena', fx: { confianza: 5, cumplimiento: 2 }, rel: { fiorella: 1 }, responde: 'Fiorella: «Analista de redes» e «Ingeniero de redes» son el mismo puesto (funciones, requisitos y guardias confirmados), pero estaban en categorías distintas; 9 de 11 analistas son mujeres. Es nuestro mayor riesgo frente a la Ley 30709.',
          out: 'Fiorella responde: «Eso va al directorio. Y mañana, cuando hables con Claudia, ya sabes por dónde empezar».', kusi: ['celebra', 'Una línea que pesa.'] } },
      { id: 'b', label: 'El cuadro de 2019 estaba muy desordenado, pero ya avanzamos bastante.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Fiorella: el cuadro de 2019 estaba muy desordenado, pero ya avanzamos bastante.',
          out: 'Fiorella responde: «Ok, gracias». El hallazgo más importante del día no llegó al directorio.', kusi: ['pensando', '¿Y lo de redes?'] } },
    ],
    mirada: { ve: 'Una gerenta con poco tiempo necesita el riesgo principal, con su prueba. Lo demás puede esperar.' },
  },
];
