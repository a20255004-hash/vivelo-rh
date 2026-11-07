// Analista de Desarrollo Organizacional · Capítulo 4 · «Los perfiles» · Semana 1, jueves.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas:
// - Ley 30709 (igualdad salarial entre varones y mujeres), art. 2: los empleadores deben contar con un cuadro de
//   categorías y funciones. D.S. 002-2018-TR (reglamento), art. 4: contenido mínimo, que incluye los puestos de cada
//   categoría y su perfil. R.M. 243-2018-TR: guía referencial para evaluar puestos.
//   https://www.rsm.global/peru/sites/default/files/media/ley_30709.pdf
//   https://sni.org.pe/aprueban-la-guia-contiene-las-pautas-referenciales-pueden-utilizadas-la-organizacion-empleadora-evaluar-puestos-trabajo-definir-cuadro-categorias-funciones/
// - Constitución Política del Perú, art. 2.2 (no discriminación), ya citada en el capítulo 2.
// Empresas y personas son ficticias.

export const CAP = {
  n: 4, titulo: 'Los perfiles', dia: 'Semana 1, jueves', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Cooperativa del Sur · Sede de Cayma, Arequipa',
  inicio: '07:30', fin: '19:00', cierreHora: '18:40',
  apertura: 'Jueves. En tu escritorio hay dos archivadores: el MOF de Characato, de 2009, escrito a máquina y escaneado; y el de Misti, un Drive con 60 documentos sin fecha. Hay que escribir unos 40 perfiles de puesto para la cooperativa fusionada.', boton: 'Abrir los archivadores',
  kusi: 'Un perfil de puesto parece un trámite. Pero decide a quién se contrata, cuánto se paga y qué se le exige a cada persona.',
  lead: 'Ordenaste el método, escuchaste a quienes hacen el trabajo, escribiste un perfil sin sesgos, priorizaste bien y no dejaste que un perfil se cortara a la medida de nadie.',
  reflexion: '¿Tu puesto actual hace lo que dice su descripción? ¿Qué falta y qué sobra?',
  siguiente: { n: 5, titulo: 'El rumor', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'duplicados', p: 'Análisis de puestos duplicados', j: 'Ernesto · Gerencia', d: 0, e: 'Créditos hasta el lunes' },
  { id: 'cultura', p: 'Diagnóstico cultural', j: 'Ernesto', d: 0, e: 'Hallazgos entregados' },
  { id: 'encuesta', p: 'Encuesta de clima de la fusión', j: 'Gestión Humana', d: 0, e: 'Sale el lunes' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Ernesto', d: 0, e: '0 de 40' },
  { id: 'cuadro', p: 'Cuadro de categorías y funciones', j: 'Gestión Humana', d: 0, e: 'Dos cuadros viejos' },
];

export const FUTURO = {
  ocupantes_escuchados: ['Levantaste el perfil de asesor con quienes lo hacen de verdad.', 'Los perfiles se parecerán al trabajo real.'],
  perfil_rural: ['El perfil de asesor reconoce el trabajo en la campiña y en Caylloma.', 'Chivay sentirá que alguien la miró.'],
  perfil_limpio: ['Tu perfil de asesor pide lo que el puesto necesita y nada más.', 'Servirá de modelo para los otros 39.'],
  perfil_sesgado: ['Tu perfil de asesor arrastra requisitos que discriminan.', 'Alguien lo copiará en un aviso de empleo.'],
  prioridad_bien: ['Empezaste por los perfiles que más gente ocupa y los que se deciden el lunes.', 'Llegarás al consejo con lo importante.'],
  perfil_por_funciones: ['Los requisitos de la jefatura salen de sus funciones, no de un currículum.', 'Rocío y Gabriel compiten en igualdad.'],
  perfil_a_medida: ['Aceptaste el MBA como requisito de la jefatura de créditos.', 'Rocío quedará fuera antes de empezar. Y lo sabrá.'],
  rocio_tranquila: ['Le explicaste a Rocío de dónde salen los requisitos.', 'Llegará al martes con menos rabia.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Jefa de créditos · ex Characato', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  gabriel: { n: 'Gabriel Cornejo', sub: 'Jefe de créditos · ex Misti', c: '#C05621' },
  hilda: { n: 'Hilda Mamani', sub: 'Cajera · Agencia Characato', c: '#8A4FBF' },
};

export const WSP = [
  { chat: 'gh', t: '07:35', de: 'Ernesto', txt: 'Linares aceptó el informe sin nombres. A regañadientes, pero aceptó. Bien ahí 👏', si: 'diagnostico_agregado' },
  { chat: 'kevin', t: '07:50', de: 'Kevin', txt: 'Hoy en el comité dijeron que «hay un analista que se queda hasta las nueve porque no se adapta». ¿Usted les contó?', si: 'nombres_entregados' },
  { chat: 'gh', t: '08:40', de: 'Luz', txt: 'El MOF de Characato dice que el cajero «custodia la llave de la bóveda y el libro de actas». Hoy hay caja fuerte digital y no hay libro 📜' },
  { chat: 'hilda', t: '12:20', de: 'Hilda', txt: 'Doctorcita, ¿es verdad que van a pedir inglés a los cajeros? Mis compañeras están nerviosas.' },
  { chat: 'gabriel', t: '14:10', de: 'Gabriel', txt: 'Te dejé en tu escritorio mi propuesta de requisitos para la jefatura. Es lo que pide la banca hoy 👍' },
  { chat: 'rocio', t: '18:20', de: 'Rocío', txt: 'Ya entendí. Si los requisitos salen de lo que hace el puesto, que así sea.', si: 'rocio_tranquila' },
];

export const CORREOS = [
  { t: '07:30', de: 'Ernesto Valdivia', para: 'Analista de DO', asunto: 'Perfiles y cuadro de categorías', html: '<p>Recuerda que cada perfil debe calzar en el cuadro de categorías y funciones, que la Ley 30709 nos obliga a tener. Hoy tenemos dos, uno por cooperativa, y no se hablan entre sí.</p><p>Ernesto</p>' },
];

export const QUIZ = [
  { q: '¿Qué norma obliga a los empleadores a tener un cuadro de categorías y funciones?', ops: ['La Ley 29783', 'La Ley 30709', 'La Ley 29733', 'La Ley 30822'], ok: 1, por: 'La Ley 30709, de igualdad salarial, y su reglamento (D.S. 002-2018-TR) lo exigen.' },
  { q: '¿Qué debe ir primero al escribir un perfil de puesto?', ops: ['Los requisitos de quien lo ocupa hoy', 'Las funciones y decisiones del puesto', 'El sueldo', 'El nombre del puesto'], ok: 1, por: 'Los requisitos se derivan de lo que el puesto hace, no al revés.' },
  { q: '¿Cuál de estos requisitos NO debería ir en un perfil de asesor de negocios?', ops: ['Conocimiento de evaluación de créditos MYPE', 'Licencia de moto para la zona rural', '«Varón, menor de 35 años»', 'Quechua deseable en agencias rurales'], ok: 2, por: 'El sexo y la edad no son requisitos del puesto: son criterios discriminatorios.' },
  { q: 'Un jefe propone poner «MBA» como requisito de su propia jefatura. ¿Qué preguntas primero?', ops: ['Si el MBA es caro', 'Qué función del puesto exige ese conocimiento y si hay otras formas de demostrarlo', 'Si Rocío tiene MBA', 'Nada, se acepta'], ok: 1, por: 'Un requisito se justifica por las funciones; si no, se vuelve un filtro a la medida de alguien.' },
  { q: 'El asesor de Chivay visita ferias rurales y atiende en quechua. ¿Qué haces con el perfil?', ops: ['Lo ignoras: es solo una agencia', 'Reconoces esas funciones en el perfil o en una variante para agencias rurales', 'Lo obligas a trabajar como en Cayma', 'Creas un puesto por persona'], ok: 1, por: 'El perfil debe reflejar el trabajo real, también el de las agencias lejanas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '07:45', ch: 'documento', who: null, titulo: 'Cómo se escribe un perfil', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio, entre dos archivadores', show: ['calidad', 'tiempo'],
    body: () => `<p>Abres el MOF de Characato: el perfil del cajero pide «buena caligrafía» y «custodiar el libro de actas». El de Misti, para el mismo puesto, pide «actitud millennial».</p><p>Antes de escribir los 40, decides <mark class="clave">ordenar el método</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para levantar un perfil de puesto. Usa las flechas.', boton: 'Guardar el método',
    items: [
      { id: 'doc', t: 'Revisar los documentos que existen (MOF, perfiles antiguos, procesos)', por: 'Lo que dice el papel.' },
      { id: 'ocu', t: 'Entrevistar a quienes ocupan hoy el puesto, en las dos cooperativas', por: 'Lo que pasa de verdad.' },
      { id: 'fun', t: 'Redactar la misión, las funciones y las decisiones del puesto', por: 'El corazón del perfil.' },
      { id: 'req', t: 'Derivar los requisitos de esas funciones', por: 'No al revés.' },
      { id: 'jef', t: 'Validar el borrador con la jefatura del área', por: 'Para que lo reconozcan como suyo.' },
      { id: 'cat', t: 'Ubicar el puesto en el cuadro de categorías y funciones', por: 'Lo que exige la Ley 30709.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: q === 'buena' ? 2 : 0 },
        cartera: { perfiles: q === 'riesgosa' ? 'Sin método claro' : 'Método de seis pasos para los 40 perfiles' },
        out: q === 'buena' ? 'Imprimes el método y lo pegas en la pared del cubículo, junto a la foto del Misti que alguien dejó antes que tú.' : 'Tu método funciona, aunque algún paso está donde no corresponde: los requisitos se deducen de las funciones, no al revés.',
        pro: { ok: 'Un perfil hecho con método se puede defender ante cualquiera.', risk: 'Escribir requisitos antes que funciones lleva a copiar el currículum del ocupante actual.', info: 'Guarda la fecha y las fuentes de cada perfil: el consejo y SUNAFIL pueden pedirlas.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Método listo para 40 perfiles!' : 'Casi: funciones primero.'],
      };
    },
    rules: [[LEY, 'Ley 30709 y D.S. 002-2018-TR: el empleador debe tener un cuadro de categorías y funciones con los puestos de cada categoría.'], [BP, 'Las funciones van primero; los requisitos se derivan de ellas.']],
    mirada: {
      ve: 'El perfil de puesto es la pieza más usada y menos vista de RR.HH.: de ahí salen los avisos de empleo, las evaluaciones, las capacitaciones y las bandas salariales. Si el perfil está mal, todo lo que se construye encima hereda el error.',
      visual: { tipo: 'flujo', titulo: 'Levantar un perfil', pasos: ['Documentos', 'Ocupantes', 'Funciones', 'Requisitos', 'Validar', 'Cuadro de categorías'], aqui: 1 },
      normas: [{ ley: 'Ley 30709 (art. 2) y D.S. 002-2018-TR (art. 4)', dice: 'Los empleadores deben contar con un cuadro de categorías y funciones, que incluye los puestos de cada categoría y su perfil.', practica: 'En una fusión, dos cuadros distintos deben volverse uno solo, con criterios objetivos.' }],
    },
  },
  {
    id: 'p2', t: '09:10', ch: 'llamada', who: null, titulo: 'Los que hacen el trabajo', banner: 'assets/foto/llamada.webp', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Empiezas por el puesto con más ocupantes: asesor de negocios. Hay 64 en la cooperativa fusionada. Llamas a cuatro para saber <mark class="clave">qué hacen en un día normal</mark>.</p>`,
    type: 'calls',
    calls: [['Valeria Talavera · Cayma (Misti)', 'Contesta', 'Hago todo en la tablet: evalúo, ingreso y el sistema aprueba en el día. Mi meta es de 25 créditos al mes. Casi no salgo de la agencia.'], ['Kevin Apaza · Sede (Characato)', 'Contesta', 'Yo soy analista, pero hago de asesor también. Visito al socio, reviso su chacra o su taller, armo el expediente en papel y lo paso a tres firmas.'], ['Wilber Huamaní · Chivay (Characato)', 'Contesta con viento de fondo', 'Voy en moto a las ferias de Yanque y Tuti. Atiendo en quechua, sobre todo a señoras que tienen alpacas. Si no hablas quechua, aquí no te prestan atención.'], ['Asesor de Cerro Colorado (Misti)', 'No contesta']],
    prompt: 'El trabajo de Wilber en Chivay es muy distinto al de Valeria en Cayma. ¿Qué haces con el perfil?',
    choices: [
      { id: 'a', label: 'Un solo perfil de asesor de negocios, con funciones comunes y una variante para agencias rurales: visitas de campo, moto y quechua deseable.',
        res: { q: 'buena', fx: { calidad: 5, personas: 3 }, flags: ['ocupantes_escuchados', 'perfil_rural'], cartera: { perfiles: 'Asesor de negocios: perfil común con variante rural' },
          out: 'Wilber te manda un audio: «Por fin alguien pregunta cómo es acá». Al fondo se escucha una feria entera.',
          pro: { ok: 'Mismo puesto, misma categoría, pero reconociendo dónde se trabaja.', info: 'Consulta con Ernesto si la variante rural tiene algún costo adicional (movilidad, viáticos).' },
          kusi: ['feliz', '¡Chivay también existe en el organigrama!'] } },
      { id: 'b', label: 'Un solo perfil, el de Cayma: la idea de la fusión es que todos trabajen igual, con tablet.',
        res: { q: 'riesgosa', fx: { calidad: -3, personas: -3 },
          out: 'El perfil queda limpio y moderno. En Chivay, Wilber lo lee y cuenta en voz alta todo lo que hace y que el papel no menciona.',
          pro: { ok: 'Un perfil simple.', risk: 'Un perfil que no describe el trabajo real no sirve para seleccionar, capacitar ni evaluar.' },
          kusi: ['preocupado', '¿Y las ferias de Tuti?'] } },
      { id: 'c', label: 'Un perfil distinto para cada agencia, para respetar todas las diferencias.',
        res: { q: 'aceptable', fx: { calidad: -1, tiempo: -3 }, flags: ['ocupantes_escuchados'],
          out: 'Empiezas a escribir el perfil de asesor de Chivay, el de Chiguata, el de Cayma… A las once tienes tres y ya no sabes en qué se diferencian.',
          pro: { ok: 'Respetas las diferencias.', risk: 'Demasiados perfiles para el mismo trabajo complican el cuadro de categorías y las bandas salariales.' },
          kusi: ['pensando', '¿Once perfiles para el mismo puesto?'] } },
    ],
    rules: [[BP, 'Un perfil se levanta con quienes hacen el trabajo, no solo con el MOF.']],
    mirada: {
      ve: 'Los perfiles escritos desde la sede describen el trabajo que la sede imagina. Llamar a Chivay te muestra que el «asesor de negocios» también es alguien que maneja una moto en la puna y habla quechua con las criadoras de alpacas.',
      visual: { tipo: 'cambio', titulo: 'El mismo puesto, dos lugares', pares: [['Tablet en la agencia', 'Moto a la feria'], ['Aprobación en el día', 'Expediente en papel'], ['Español', 'Quechua']] },
    },
  },
  {
    id: 'p3', t: '10:40', ch: 'documento', who: null, titulo: 'El perfil del asesor', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Juntas lo mejor de los dos MOF y lo que te contaron. Algunas frases vienen de los perfiles antiguos y <mark class="clave">no deberían sobrevivir</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del perfil.', boton: 'Guardar el perfil',
    bloques: [
      { id: 'mision', t: 'Misión y funciones', n: 2, ops: [
        { id: 'm1', t: 'Promover, evaluar y hacer seguimiento de créditos MYPE, agrícolas y de consumo de los socios de su zona.', ok: true, por: 'Describe el trabajo de Cayma y de Chivay.' },
        { id: 'm2', t: 'Visitar al socio en su negocio o su chacra para verificar la información del crédito.', ok: true, por: 'Una función real en las dos cooperativas.' },
        { id: 'm3', t: 'Tener «actitud millennial» y «ponerse la camiseta».', ok: false, por: 'No es una función ni algo que se pueda medir.' },
      ] },
      { id: 'req', t: 'Requisitos', n: 2, ops: [
        { id: 'r1', t: 'Formación técnica o universitaria en Administración, Economía, Contabilidad o afines.', ok: true },
        { id: 'r2', t: 'Para agencias rurales: licencia de moto y quechua deseable.', ok: true, por: 'Se deriva de funciones concretas.' },
        { id: 'r3', t: 'Varón, menor de 35 años, «de buena presencia».', ok: false, por: 'Sexo, edad y apariencia no son requisitos del puesto. Son discriminatorios (Constitución, art. 2.2).' },
        { id: 'r4', t: 'Inglés intermedio.', ok: false, por: 'Ninguna función del puesto lo exige. Pedirlo deja fuera a buena gente sin razón.' },
      ] },
      { id: 'cat', t: 'Ubicación', n: 1, ops: [
        { id: 'c1', t: 'Categoría 4 del cuadro de categorías y funciones, igual para todas las agencias.', ok: true, por: 'Mismo puesto, misma categoría: lo pide la lógica de la Ley 30709.' },
        { id: 'c2', t: 'Categoría según la cooperativa de origen del ocupante.', ok: false, por: 'Perpetúa dos cooperativas dentro de una.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : -2, etica: q === 'riesgosa' ? -3 : 2 },
        flags: [q === 'riesgosa' ? 'perfil_sesgado' : 'perfil_limpio'], cartera: { perfiles: q === 'riesgosa' ? '1 de 40 · con requisitos de riesgo' : '1 de 40 · asesor de negocios, modelo para el resto', cuadro: 'Asesor de negocios en la categoría 4' },
        out: q === 'buena' ? 'El perfil ocupa dos páginas. Ernesto lo lee de pie: «Este es el modelo. Los otros 39, así».' : 'El perfil está casi listo, pero hay frases que no resistirían un aviso de empleo.',
        pro: { ok: 'Funciones reales, requisitos que salen de ellas y una sola categoría para el mismo puesto.', risk: 'Un requisito discriminatorio en un perfil se copia en cada aviso que se publique.', info: 'Responde hoy a Hilda: nadie pedirá inglés a los cajeros.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un perfil que no deja a nadie fuera sin razón!' : 'Algunas frases viejas se colaron.'],
      };
    },
    rules: [[LEY, 'No se puede discriminar por sexo, edad u otra condición (Constitución, art. 2.2).'], [LEY, 'El puesto se ubica en el cuadro de categorías y funciones (Ley 30709).']],
    mirada: {
      ve: 'En los MOF antiguos sobreviven frases de otra época: «buena presencia», «varón», «caligrafía». El trabajo de DO es actualizar el perfil al trabajo de hoy y limpiar lo que deja fuera a personas capaces sin ninguna razón.',
      visual: { tipo: 'cambio', titulo: 'Del MOF viejo al perfil nuevo', pares: [['Varón, menor de 35', 'Formación y experiencia'], ['Actitud millennial', 'Visitar al socio y verificar'], ['Inglés intermedio', 'Quechua deseable donde se necesita']] },
    },
  },
  {
    id: 'p4', t: '12:30', ch: 'sistema', who: null, titulo: '¿Por dónde siguen los 39?', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio, con un menú frío', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: () => `<p>Almuerzas un menú de sopa de trigo que se enfría mientras miras la lista. Hasta el jueves del consejo no llegas con los 39 perfiles restantes. Esta semana alcanzan <mark class="clave">tres bloques</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres bloques de perfiles que vas a priorizar.', boton: 'Priorizar estos', resumen: 'Priorizaste',
    cols: ['Bloque de perfiles', 'Por qué importa'],
    rows: [
      { id: 'creditos', cells: ['Jefatura y coordinaciones de créditos', 'Se deciden el lunes'] },
      { id: 'caja', cells: ['Cajeros y atención al socio (120 personas)', 'El puesto con más ocupantes después de asesores'] },
      { id: 'dup', cells: ['Los otros puestos duplicados (contabilidad, riesgos)', 'Entran en el organigrama del consejo'] },
      { id: 'gerencia', cells: ['El perfil del gerente general', 'Linares lo pidió «para tenerlo»'] },
      { id: 'vig', cells: ['Vigilancia y limpieza (tercerizados en Misti)', 'Son de otras empresas'] },
      { id: 'pract', cells: ['Practicantes', 'Hay 12 y nadie les explica nada'] },
    ],
    score: { creditos: 3, caja: 3, dup: 3, pract: 1, gerencia: 0, vig: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 3 : 0, cumplimiento: picks.includes('vig') ? -2 : 1 },
        flags: q === 'buena' ? ['prioridad_bien'] : [], cartera: { perfiles: q === 'buena' ? 'Prioridad: créditos, caja y duplicados' : 'Prioridad dispersa' },
        out: q === 'buena' ? 'Con esos tres bloques cubres a 230 personas y todos los puestos que el consejo va a discutir.' : picks.includes('vig') ? 'Ernesto te recuerda que el personal tercerizado no está en tu cuadro: sus perfiles los define su empleador.' : 'Avanzas, pero lo que se decide el lunes sigue sin perfil.',
        pro: { ok: 'Prioriza lo que más gente ocupa y lo que se decide primero.', risk: 'El personal tercerizado depende de otra empresa: no va en el cuadro de categorías de la cooperativa.', info: 'Avísale a Linares que su perfil irá después: no está en duda.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡230 personas en tres bloques!' : 'Revisa qué se decide el lunes.'],
      };
    },
    rules: [[BP, 'Prioriza por número de ocupantes y por fecha de decisión.']],
    mirada: {
      ve: 'No todos los perfiles pesan igual. Un analista de DO con poco tiempo empieza por los puestos que más gente ocupa y por los que van a decidirse primero. El resto puede esperar una semana sin que nadie pierda nada.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Urgencia', cuadrantes: ['Hazlo ya', 'Planifícalo', 'Después', 'No es tuyo'], items: [['Créditos', .4, .95], ['Caja', .5, .75], ['Duplicados', .6, .8], ['Practicantes', .2, .4], ['Gerente general', .3, .2], ['Tercerizados', .3, .05]] },
    },
  },
  {
    id: 'p5', t: '14:30', ch: 'presencial', who: null, titulo: 'Los requisitos de Gabriel', banner: 'assets/foto2/revisan.webp', lugar: 'Tu escritorio', show: ['etica', 'calidad', 'confianza'],
    body: (n, F) => `<p>Gabriel se sienta en el borde de tu escritorio con su laptop. ${F.has('estructura_primero') ? '«Ya sé que van a ver dos coordinaciones. Igual la jefatura tiene que ser moderna.»' : '«Ya casi todo está claro, ¿no?»'}</p><p>«Para la jefatura de créditos, mira lo que pide la banca hoy: <mark class="clave">MBA y cinco años en banca digital</mark>. Si no, nos quedamos atrás.» Gabriel tiene un MBA. Rocío, no.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle la propuesta y explicarle que los requisitos saldrán de las funciones de la jefatura; si una función exige gestión estratégica, se pedirá esa competencia con varias formas de acreditarla.',
        res: { q: 'buena', fx: { etica: 4, calidad: 3 }, flags: ['perfil_por_funciones'],
          out: 'Gabriel cierra la laptop. «O sea, mi MBA no cuenta.» «Cuenta como una forma de acreditarlo. No como la única.» Se va pensativo, no enojado.',
          pro: { ok: 'Mantienes la lógica del método: funciones primero.', risk: 'Gabriel puede sentir que lo frenas.', info: 'Valida los requisitos de la jefatura con Ernesto antes de que circulen.' },
          kusi: ['animo', 'Requisito por función, no por currículum. ¡Bien!'] } },
      { id: 'b', label: 'Aceptar: es cierto que el sistema financiero se está digitalizando, y un MBA eleva el nivel de la jefatura.',
        res: { q: 'riesgosa', fx: { etica: -4, calidad: -2 }, rel: { jefa: -1 }, flags: ['perfil_a_medida'],
          out: 'El perfil queda con MBA obligatorio. A las cuatro, la asistente de Gerencia lo comenta en el comedor. A las cinco, Rocío ya lo sabe.',
          pro: { ok: 'El perfil se ve exigente.', risk: 'Un requisito que coincide con el currículum de un candidato y deja fuera al otro hace que el proceso parezca armado.' },
          kusi: ['preocupado', 'Ese perfil tiene nombre y apellido…'] } },
      { id: 'c', label: 'Dejar fuera cualquier requisito de formación de posgrado para que nadie se sienta excluido.',
        res: { q: 'aceptable', fx: { etica: 1, calidad: -2 },
          out: 'Gabriel frunce el ceño: «Entonces cualquiera puede ser jefe». No le falta algo de razón: la jefatura sí necesita gestión.',
          pro: { ok: 'No armas un perfil a la medida.', risk: 'Quitar requisitos por miedo también es no partir de las funciones.' },
          kusi: ['pensando', 'Ni a la medida ni vacío.'] } },
    ],
    rules: [[BP, 'Un requisito se justifica por una función del puesto, no por el currículum de quien lo propone.']],
    mirada: {
      ve: 'Gabriel cree sinceramente que la banca digital es el futuro, y tiene parte de razón. Lo que no puede pasar es que el perfil de un puesto en disputa lo escriba uno de los candidatos. El «perfil a la medida» es una de las formas más silenciosas de decidir antes de evaluar.',
      visual: { tipo: 'balanza', a: { t: 'Perfil a la medida', items: ['MBA obligatorio', 'Banca digital', 'Un solo candidato posible'] }, b: { t: 'Perfil por funciones', items: ['Gestión de carteras distintas', 'Liderar equipos dispersos', 'Varias formas de acreditar'] } },
    },
  },
  {
    id: 'p6', t: '17:50', ch: 'whatsapp', who: 'jefa', titulo: '«Yo no tengo MBA»', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida Ejército', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Esperas el colectivo en la avenida Ejército, con el sol bajando detrás del Chachani. Te escribe Rocío:</p><p>${F.has('perfil_a_medida') ? '«Me dicen que la jefatura va a pedir MBA. <mark class="clave">Yo no tengo MBA</mark>. ¿Me lo dicen así, por un perfil?»' : '«Me dicen que Gabriel propuso pedir MBA para la jefatura. <mark class="clave">Yo no tengo MBA</mark>. ¿Ya está decidido?»'}</p>`,
    type: 'compose', enviaA: 'rocio', para: 'Para: Rocío Bedoya · Jefa de créditos', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Qué está decidido', ops: [
        { id: 'h1', t: 'Rocío, los requisitos de la jefatura todavía están en borrador y saldrán de las funciones del puesto.', ok: true, por: 'Es la verdad del proceso.' },
        { id: 'h2', t: 'Tranquila, eso del MBA no va. Ya lo saqué.', ok: false, por: 'Le cuentas detalles internos de un proceso donde ella es candidata.' },
      ] },
      { id: 'como', t: 'Cómo se acreditará', ops: [
        { id: 'c1', t: 'Si una función exige formación en gestión, habrá más de una forma de demostrarla, incluida la experiencia.', ok: true, por: 'Le explicas el criterio, no el resultado.' },
        { id: 'c2', t: 'Tu experiencia en la campiña vale más que cualquier MBA.', ok: false, por: 'Es una opinión que adelanta una evaluación.' },
      ] },
      { id: 'canal', t: 'Qué sigue', ops: [
        { id: 'k1', t: 'Ernesto va a conversar contigo antes de cualquier decisión. Y los requisitos los verán los dos al mismo tiempo.', ok: true, por: 'Le das igualdad de información con Gabriel.' },
        { id: 'k2', t: 'Si quieres, te paso el borrador antes que a nadie.', ok: false, por: 'Rompes la igualdad de condiciones.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.como === 'c2' || sel.canal === 'k2', buenas = ['h1', 'c1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 3 : 0, etica: mal ? -4 : 2, personas: q === 'buena' ? 2 : 0 }, rel: { jefa: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['rocio_tranquila'] : [],
        out: q === 'buena' ? 'Rocío tarda en responder. El colectivo llega lleno y viajas parada hasta Cayma, con el celular en la mano.' : mal ? 'Rocío responde: «Gracias, amiga». Esa palabra te incomoda todo el camino.' : 'Rocío responde «ok». Sigue sin saber qué esperar.',
        pro: { ok: 'Explicas el criterio sin adelantar resultados ni darle ventajas.', risk: 'Ser «la amiga» de una candidata te quita la neutralidad que te hace útil para las dos partes.', info: 'Cuéntale a Ernesto que el tema del MBA ya circula.' },
        kusi: [q === 'buena' ? 'feliz' : mal ? 'indignado' : 'pensando', q === 'buena' ? 'Criterio claro, sin favores. ¡Así!' : mal ? '¡Eso es tomar partido!' : 'Le faltó algo concreto.'],
      };
    },
    rules: [[BP, 'Todos los candidatos reciben la misma información al mismo tiempo.']],
    mirada: {
      ve: 'Rocío tiene 20 años en la cooperativa y siente que un papel puede borrarlos. No necesita que la consueles con promesas: necesita saber que el criterio será justo y que lo conocerá al mismo tiempo que Gabriel.',
      visual: { tipo: 'mensaje', titulo: 'Criterio, no resultado', txt: 'Los requisitos saldrán de las funciones del puesto. Si una función exige formación en gestión, habrá más de una forma de demostrarla. Ernesto conversará contigo antes de cualquier decisión.' },
    },
  },
];
