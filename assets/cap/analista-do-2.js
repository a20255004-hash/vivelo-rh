// Analista de Desarrollo Organizacional · Capítulo 2 · «Los duplicados» · Semana 1, martes.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas:
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 30 b): la reducción de la remuneración o de la categoría dispuesta
//   unilateralmente por el empleador puede configurar un acto de hostilidad. Se cita el principio, sin transcribir el texto.
//   https://lpderecho.pe/jurisprudencia-articulo-30-tuo-decreto-legislativo-728-despido-hostilidad
//   https://lpderecho.pe/rebajar-categoria-trabajador-califica-acto-hostilidad-cas-lab-1744-2017-lima
// - Constitución Política del Perú, art. 2.2: nadie debe ser discriminado (criterios de edad o cargas familiares).
// Empresas y personas son ficticias; las cifras de mora son de la historia.

export const CAP = {
  n: 2, titulo: 'Los duplicados', dia: 'Semana 1, martes', foto: 'assets/foto/plano-equipo.webp',
  lugar: 'Cooperativa del Sur · Sede de Cayma, Arequipa',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. Gestión Humana mandó a primera hora el correo que confirma a quién reporta cada equipo mientras dura la transición. En créditos, sin embargo, hay dos jefes, dos formas de aprobar un préstamo y un solo puesto en el organigrama que el gerente imagina.', boton: 'Abrir el análisis',
  kusi: 'Hoy toca comparar puestos, no personas. Parece lo mismo… y no lo es.',
  lead: 'Elegiste con qué datos comparar, limpiaste un cuadro con criterios peligrosos, respondiste a Rocío, ordenaste el método y le diste a Ernesto una recomendación que empieza por la estructura.',
  reflexion: '¿En qué momento comparar puestos se convierte, sin darte cuenta, en comparar personas?',
  siguiente: { n: 3, titulo: 'Dos culturas', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'mapa', p: 'Mapa de la fusión', j: 'Ernesto · Gestión Humana', d: 0, e: '18 puestos que se repiten' },
  { id: 'duplicados', p: 'Análisis de puestos duplicados', j: 'Ernesto · Gerencia', d: 0, e: 'Empieza por créditos' },
  { id: 'cultura', p: 'Diagnóstico cultural', j: 'Ernesto', d: 0, e: 'Grupos focales mañana' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Ernesto', d: 0, e: 'Unos 40 por escribir' },
  { id: 'consejo', p: 'Organigrama para el consejo', j: 'Gerencia general', d: 0, e: 'Jueves de la próxima semana' },
];

export const FUTURO = {
  criterios_objetivos: ['Comparas las jefaturas con cartera, mora por segmento y alcance.', 'Tus criterios resistirán las preguntas del consejo.'],
  criterios_sesgados: ['Tu comparación usa datos que no dicen nada del puesto.', 'Alguien lo usará en tu contra.'],
  cuadro_limpio: ['Sacaste del cuadro la edad, los hijos y la rebaja de categoría sin consulta.', 'El gerente sabe que no firmarás cualquier cosa.'],
  cuadro_sesgado: ['El cuadro de duplicidades sigue con criterios de edad o cargas familiares.', 'Se filtrará antes del viernes.'],
  rocio_respuesta_clara: ['Le dijiste a Rocío qué se compara y cuándo sabrá algo.', 'Rocío confiará un poco más en el proceso.'],
  estructura_primero: ['Propusiste decidir primero la estructura de créditos y luego a las personas.', 'Ernesto llevará esa idea al gerente.'],
  gabriel_recomendado: ['Recomendaste a Gabriel antes de definir la estructura.', 'El equipo de Characato lo sabrá pronto.'],
  cojefes: ['Propusiste dos jefes de créditos «por ahora».', 'Kevin seguirá recibiendo dos correos con pedidos distintos.'],
  datos_verificados: ['Usaste el Excel de Gabriel solo después de cruzarlo con los reportes oficiales.', 'Encontraste que la mora de Characato está concentrada en la cartera agrícola.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Jefa de créditos · ex Characato', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  gabriel: { n: 'Gabriel Cornejo', sub: 'Jefe de créditos · ex Misti', c: '#C05621' },
};

export const WSP = [
  { chat: 'gh', t: '07:05', de: 'Ernesto', txt: 'Ya salió el correo de reportes de transición. Hoy créditos. Ojo que Linares quiere nombres para el jueves 😬' },
  { chat: 'gh', t: '07:20', de: 'Luz', txt: 'Les cuento: Characato aprueba créditos en papel con tres firmas. Misti, en el sistema con una. Ahí tienen su primer choque 🙃' },
  { chat: 'kevin', t: '08:30', de: 'Kevin', txt: 'Ya llegó el correo de reportes. Por fin sé a quién mandarle las cosas. Gracias.', si: 'riesgo_avisado' },
  { chat: 'kevin', t: '08:31', de: 'Kevin', txt: 'Oiga, ¿lo de que nadie sale sigue en pie, no? Ya les dije a todos 😅', si: 'kevin_promesa' },
  { chat: 'gabriel', t: '10:50', de: 'Gabriel', txt: 'Te mando un Excel que armé con la mora de las dos carteras. Los números hablan solos 📊' },
  { chat: 'rocio', t: '15:40', de: 'Rocío', txt: 'Gracias por responderme claro. No es fácil esperar sin saber.', si: 'rocio_respuesta_clara' },
];

export const CORREOS = [
  { t: '07:00', de: 'Ernesto Valdivia', para: 'Todo el personal', asunto: 'Reportes durante la transición', html: '<p>Mientras se define la nueva estructura, cada equipo sigue reportando a su jefatura actual. Nadie cambia de funciones sin una comunicación escrita de Gestión Humana.</p><p>Ernesto Valdivia, jefe de Gestión Humana</p>', si: 'riesgo_avisado' },
  { t: '09:15', de: 'Asistente de Gerencia General', para: 'Analista de DO', asunto: 'Cuadro de duplicidades (borrador)', html: '<p>Te adjunto el cuadro que preparé para el Dr. Linares, para que lo revises antes del jueves. Saludos.</p>' },
];

export const QUIZ = [
  { q: 'Hay dos jefes de créditos y el gerente pide «quién se queda». ¿Qué conviene decidir primero?', ops: ['Quién es más simpático', 'Cómo debe ser la estructura de créditos de la cooperativa fusionada', 'Quién es más joven', 'Quién tiene menos sueldo'], ok: 1, por: 'Primero se diseña el puesto; recién después se ve quién lo ocupa y con qué criterios.' },
  { q: '¿Cuál de estos criterios NO debería estar en un cuadro de duplicidades?', ops: ['Cartera administrada', 'Mora por segmento', 'Edad del ocupante', 'Agencias a cargo'], ok: 2, por: 'La edad no dice nada del puesto y puede ser discriminatoria.' },
  { q: 'Pasar a un jefe a un cargo de menor categoría por decisión unilateral del empleador…', ops: ['Es siempre válido en una fusión', 'Puede configurar un acto de hostilidad (art. 30 del D.S. 003-97-TR)', 'Es obligatorio si hay duplicidad', 'Solo importa si baja el sueldo'], ok: 1, por: 'La reducción de categoría o remuneración dispuesta unilateralmente está entre los actos de hostilidad del art. 30.' },
  { q: 'Un jefe te manda un Excel propio con datos que favorecen a su equipo. ¿Qué haces?', ops: ['Lo usas tal cual', 'Lo borras sin abrirlo', 'Lo cruzas con los reportes oficiales antes de usarlo', 'Se lo reenvías al otro jefe'], ok: 2, por: 'Ningún dato entra al análisis sin verificarse contra una fuente oficial.' },
  { q: 'La mora de Characato es más alta. Antes de concluir que su jefa lo hace peor, revisas…', ops: ['Su edad', 'Qué tipo de cartera tiene cada una (agrícola, consumo, MYPE)', 'Sus redes sociales', 'Cuántos hijos tiene'], ok: 1, por: 'Una cartera agrícola no se compara directamente con una de consumo urbano.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:15', ch: 'sistema', who: null, titulo: '¿Con qué datos se compara?', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio, junto a la fotocopiadora', show: ['calidad', 'etica', 'tiempo'],
    body: (n, F) => `<p>${F.has('agencias_llamadas') ? 'A las siete hablaste con Chivay, como quedaste: nueve personas, dos asesores que viajan a caballo a Tuti y Sibayo, y una conexión que se cae cuando llueve. Lo apuntas en el mapa.' : 'Abres el mapa de ayer. Chivay sigue en blanco.'}</p><p>Hoy empiezas por créditos. En el sistema tienes acceso a varios reportes, pero el tiempo da para <mark class="clave">tres</mark> antes de la reunión con Ernesto.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres datos con los que vas a comparar las dos jefaturas de créditos.', boton: 'Usar estos datos', resumen: 'Comparaste con',
    cols: ['Dato', 'Qué te podría decir'],
    rows: [
      { id: 'cartera', cells: ['Cartera administrada y mora, por segmento (agrícola, consumo, MYPE)', 'Cuánto maneja cada jefatura y en qué tipo de crédito'] },
      { id: 'alcance', cells: ['Analistas y agencias a cargo de cada jefatura', 'El tamaño real del puesto'] },
      { id: 'proceso', cells: ['Cómo se aprueba un crédito en cada una (niveles y firmas)', 'Si el puesto decide lo mismo en las dos'] },
      { id: 'edad', cells: ['Edad de cada jefe', '«Para saber quién tiene más proyección», sugiere alguien'] },
      { id: 'gerente', cells: ['Lo que opina el gerente de cada uno', 'Lo que se dice en el comité'] },
      { id: 'antig', cells: ['Años de antigüedad de cada jefe', 'Su trayectoria en la cooperativa'] },
    ],
    score: { cartera: 3, alcance: 3, proceso: 3, antig: 0, gerente: -2, edad: -4 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: picks.includes('edad') ? -4 : 2, tiempo: -1 },
        flags: [q === 'riesgosa' || picks.includes('edad') ? 'criterios_sesgados' : 'criterios_objetivos'], cartera: { duplicados: q === 'buena' ? 'Créditos: comparación por cartera, alcance y proceso' : 'Créditos: comparación con datos débiles' },
        out: q === 'buena' ? 'Los datos te dan una sorpresa: no son dos puestos iguales. Rocío maneja cartera agrícola y MYPE en la campiña, con 22 analistas en cuatro agencias; Gabriel, consumo urbano en el sistema, con 14. El mismo nombre esconde dos trabajos distintos.' : 'Tienes números, pero algunos hablan más de las personas que del puesto.',
        pro: { ok: 'Comparas el tamaño y la naturaleza del puesto, no a quien lo ocupa.', risk: 'La edad o la opinión del gerente no describen un puesto, y abren la puerta a la discriminación.', info: 'La antigüedad sirve para otras decisiones, pero no dice qué hace el puesto.' },
        kusi: [q === 'buena' ? 'sorpresa' : 'pensando', q === 'buena' ? '¡Dos puestos con un solo nombre!' : 'Algunos datos miraban a la persona, no al puesto.'],
      };
    },
    rules: [[LEY, 'Nadie debe ser discriminado por motivo de edad u otra condición (Constitución, art. 2.2).'], [BP, 'En un análisis de duplicidad se comparan puestos: alcance, decisiones y resultados.']],
    mirada: {
      ve: 'Dos puestos con el mismo nombre pueden ser muy distintos. Antes de declarar un duplicado, DO mira qué decide cada puesto, sobre qué cartera y con cuánta gente. A veces el duplicado es real; a veces es solo una coincidencia de nombres.',
      visual: { tipo: 'balanza', a: { t: 'Créditos Characato · Rocío', items: ['Agrícola y MYPE', '22 analistas, 4 agencias', 'Aprobación en papel, 3 firmas'] }, b: { t: 'Créditos Misti · Gabriel', items: ['Consumo urbano', '14 analistas, 3 agencias', 'Aprobación en el sistema, 1 firma'] } },
    },
  },
  {
    id: 'd2', t: '09:30', ch: 'documento', who: null, titulo: 'El cuadro de duplicidades', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>La asistente de Gerencia te mandó el borrador que irá al Dr. Linares. Lo hizo con buena intención y mucha prisa: <mark class="clave">tiene líneas que no pueden quedarse</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que no son buena práctica.',
    doc: { t: 'Cuadro de duplicidades · borrador', sub: 'Cooperativa del Sur · Gerencia General · uso interno' },
    lines: [
      { id: 'l1', t: 'Puestos repetidos detectados: 18, entre jefaturas, analistas y personal de apoyo.' },
      { id: 'l2', t: 'Criterio de desempate: se prioriza a los menores de 45 años por su proyección.', bad: LEY, why: 'Usar la edad como criterio es discriminatorio (Constitución, art. 2.2).' },
      { id: 'l3', t: 'Se considerará si el trabajador tiene hijos pequeños, «para ser humanos».', bad: LEY, why: 'Las cargas familiares no describen el puesto. Usarlas para decidir quién se queda es un criterio discriminatorio, aunque la intención sea buena.' },
      { id: 'l4', t: 'El jefe que no quede pasará a analista sénior, con el mismo sueldo, desde el lunes.', bad: LEY, why: 'Bajar a alguien de categoría por decisión unilateral puede ser un acto de hostilidad (art. 30 del D.S. 003-97-TR). Cualquier cambio de cargo se conversa y se acuerda.' },
      { id: 'l5', t: 'Fuente de la mora: reportes oficiales de cada cooperativa al cierre de octubre.' },
      { id: 'l6', t: 'Columna «actitud frente a la fusión», según comentarios de los gerentes.', bad: BP, why: 'Un comentario no es un dato. Esa columna convierte el miedo de las personas en una mala nota.' },
      { id: 'l7', t: 'Las agencias de Chivay y Chiguata se fusionarán con la más cercana.', duda: 'Puede tener sentido, pero el cuadro no muestra distancias ni socios atendidos. Falta análisis.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Devuelves el cuadro con comentarios sobre la columna de «actitud». Pero algo grave sigue ahí, y el viernes llegará al consejo.' : `Marcas ${hitsLey} líneas con riesgo legal. La asistente te llama, avergonzada: «No sabía. Lo de los hijos lo puse con buena intención». Le explicas por qué, sin hacerla sentir mal. El cuadro corregido sale a las once.`,
      flags: [missLey ? 'cuadro_sesgado' : 'cuadro_limpio'], rel: { ernesto: missLey ? 0 : 1 },
      cartera: { duplicados: missLey ? 'Cuadro con criterios de riesgo' : 'Cuadro de duplicidades corregido' },
      pro: { ok: 'Un cuadro de duplicidades limpio protege a las personas y a la cooperativa.', risk: 'Un criterio de edad o de hijos en un documento oficial es una demanda esperando a ocurrir.', info: 'La buena intención no hace que un criterio sea válido.' },
      kusi: missLey ? ['preocupado', 'Se te pasó algo que puede costar caro…'] : ['celebra', '¡Ojo de auditora!'],
    }),
    rules: [[LEY, 'Nadie debe ser discriminado (Constitución, art. 2.2).'], [LEY, 'Reducir la categoría o la remuneración de forma unilateral puede ser un acto de hostilidad (D.S. 003-97-TR, art. 30 b).']],
    mirada: {
      ve: 'En una fusión, los primeros documentos se escriben con prisa y viajan lejos. Una sola línea como «priorizar a los menores de 45» puede terminar en un juicio y en la portada del periódico local. Revisar no es desconfiar: es cuidar.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al cuadro limpio', pares: [['Menores de 45 años', 'Cartera, alcance y proceso'], ['Hijos pequeños', 'Requisitos del puesto'], ['Pasa a analista desde el lunes', 'Opciones conversadas y acordadas']] },
      normas: [{ ley: 'D.S. 003-97-TR (TUO del D. Leg. 728), art. 30 b)', dice: 'Entre los actos de hostilidad está la reducción de la remuneración o de la categoría dispuesta unilateralmente por el empleador.', practica: 'Al jefe que no quede no se le «pasa» a otro cargo: se le ofrecen opciones y se acuerdan.' }],
    },
  },
  {
    id: 'd3', t: '11:30', ch: 'whatsapp', who: 'jefa', titulo: '«¿Ya está elegido?»', banner: 'assets/foto2/tension.webp', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>${F.has('rocio_almuerzo') ? 'Rocío te escribe en tono distinto al de ayer en la picantería.' : 'Rocío te escribe por primera vez desde ayer.'}</p><p>«Me dicen que el chofer del gerente ya anda diciendo que Gabriel se queda. <mark class="clave">¿Ya está elegido?</mark> Si es así, prefiero saberlo hoy.»</p>`,
    type: 'compose', enviaA: 'rocio', para: 'Para: Rocío Bedoya · Jefa de créditos', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Sobre el rumor', ops: [
        { id: 'h1', t: 'Rocío, no hay ninguna decisión tomada sobre la jefatura de créditos.', ok: true, por: 'Es verdad y lo dices claro.' },
        { id: 'h2', t: 'Tranquila, entre nos: los números te favorecen 😉', ok: false, por: 'Adelantas un resultado y le das información privilegiada.' },
      ] },
      { id: 'como', t: 'Cómo se va a decidir', ops: [
        { id: 'c1', t: 'Primero se define cómo será créditos en la cooperativa fusionada, con datos de cartera, alcance y procesos; después se verá quién ocupa cada puesto.', ok: true, por: 'Le explicas el orden y los criterios.' },
        { id: 'c2', t: 'Eso lo decide el gerente, yo solo hago cuadros.', ok: null, por: 'Es parcialmente cierto, pero te borra del proceso.' },
      ] },
      { id: 'cuando', t: 'Cuándo sabrá algo', ops: [
        { id: 'w1', t: 'Antes de cualquier decisión vas a conversar con Ernesto, en persona, no por un chofer.', ok: true, por: 'Le das un compromiso que sí depende de Gestión Humana.' },
        { id: 'w2', t: 'Te aviso apenas sepa algo, aunque sea extraoficial.', ok: false, por: 'No puedes ser su fuente extraoficial.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.cuando === 'w2', buenas = ['h1', 'c1', 'w1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 3 : 0, etica: mal ? -4 : 2, personas: q === 'buena' ? 2 : 0 }, rel: { jefa: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['rocio_respuesta_clara'] : [],
        out: q === 'buena' ? 'Rocío responde a la media hora. En su mensaje hay menos rabia y más cansancio.' : mal ? 'Rocío responde con un «gracias 🙏». Ahora tiene una pista que no debería tener… y tú, un compromiso que no puedes cumplir.' : 'Rocío responde «ya». No sabe más que antes.',
        pro: { ok: 'Desmientes el rumor, explicas el método y le das un compromiso real.', risk: 'Dar pistas o prometer información extraoficial rompe la neutralidad que necesita el proceso.', info: 'Pídele a Ernesto que hable con los dos jefes esta semana.' },
        kusi: [q === 'buena' ? 'feliz' : mal ? 'indignado' : 'pensando', q === 'buena' ? 'Claro y sin prometer de más. ¡Bacán!' : mal ? '¡Eso no te toca adelantar!' : 'Le faltó algo concreto.'],
      };
    },
    rules: [[BP, 'Desmiente los rumores con hechos y explica el método. No adelantes resultados.']],
    mirada: {
      ve: 'En una fusión, el rumor llega antes que la decisión. Quien espera saber si conserva su puesto necesita tres cosas: que le digan la verdad, que le expliquen cómo se decidirá y cuándo sabrá algo. Lo que no se dice, lo inventa el chofer.',
      visual: { tipo: 'mensaje', titulo: 'Verdad, método y fecha', txt: 'No hay ninguna decisión tomada. Primero se define cómo será créditos; después, quién ocupa cada puesto. Antes de decidir, conversarás con Ernesto en persona.' },
    },
  },
  {
    id: 'd4', t: '12:40', ch: 'documento', who: 'ernesto', titulo: 'El método', banner: 'assets/foto/plano-equipo.webp', lugar: 'Sala 2', show: ['calidad', 'confianza'],
    body: () => `<p>Ernesto almuerza un sánguche de chicharrón frente a la pizarra. «Hay 18 duplicados y no podemos inventar un método para cada uno. <mark class="clave">Ordénamelo</mark> para usarlo con todos.»</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para analizar un puesto duplicado. Usa las flechas.', boton: 'Guardar el método',
    items: [
      { id: 'inv', t: 'Describir qué hace cada puesto hoy: funciones, decisiones y alcance', por: 'Lo que hay.' },
      { id: 'nec', t: 'Definir qué necesitará la cooperativa fusionada en esa área', por: 'Lo que viene.' },
      { id: 'opc', t: 'Diseñar opciones de estructura (uno, dos o un puesto distinto)', por: 'Nunca una sola opción.' },
      { id: 'crit', t: 'Fijar los criterios de selección del puesto antes de mirar nombres', por: 'Para que no se ajusten a nadie.' },
      { id: 'per', t: 'Evaluar a las personas con esos criterios y conversar con cada una', por: 'Recién aquí entran las personas.' },
      { id: 'com', t: 'Aprobar y comunicar primero a los afectados, luego al resto', por: 'Nadie se entera por otro.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 }, rel: { ernesto: q === 'buena' ? 1 : 0 },
        cartera: { duplicados: q === 'riesgosa' ? 'Método sin ordenar' : 'Método de seis pasos para los 18 duplicados' },
        out: q === 'buena' ? 'Ernesto copia los seis pasos en la pizarra con plumón verde. «Esto se lo enseño a Linares tal cual.»' : 'Ernesto mueve un paso: «Si miramos nombres antes que criterios, los criterios se acomodan a los nombres».',
        pro: { ok: 'Un método igual para todos es la mejor defensa de una decisión difícil.', risk: 'Mirar a las personas antes de fijar criterios hace que el proceso parezca armado.', info: 'Guarda evidencia de cada paso: el consejo la pedirá.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Un método para los 18!' : 'Casi: el orden protege a todos.'],
      };
    },
    rules: [[BP, 'Criterios antes que nombres. Puestos antes que personas.']],
    mirada: {
      ve: 'El orden del método es lo que lo hace justo. Si primero se elige a la persona y luego se escriben los criterios, cualquier explicación sonará a excusa. DO aporta justamente eso: un camino que se puede mostrar.',
      visual: { tipo: 'flujo', titulo: 'Analizar un duplicado', pasos: ['Describir', 'Necesidad futura', 'Opciones', 'Criterios', 'Personas', 'Comunicar'], aqui: 0 },
    },
  },
  {
    id: 'd5', t: '15:10', ch: 'llamada', who: null, titulo: 'El Excel de Gabriel', banner: 'assets/esc/planilla.webp', show: ['calidad', 'etica', 'confianza'],
    body: () => `<p>Gabriel Cornejo te llama mientras abres su archivo. «¿Viste mi Excel? La mora de Characato es casi el doble que la nuestra. <mark class="clave">Los números no mienten</mark>.»</p><p>Su Excel no dice de dónde salen los datos ni separa la cartera agrícola de la de consumo.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Agradecerle y decirle que todo dato entra al análisis después de cruzarlo con los reportes oficiales de cada cooperativa, separados por tipo de cartera.',
        res: { q: 'buena', fx: { calidad: 4, etica: 3 }, flags: ['datos_verificados'],
          out: 'Cruzas los datos. La mora total de Characato es más alta, sí, pero se concentra en la cartera agrícola de Chiguata y Chivay, golpeada por la helada del año pasado. En MYPE, las dos están parecidas.',
          pro: { ok: 'Usas la información sin dejar que te use a ti.', risk: 'Gabriel puede sentir que desconfías de él.', info: 'Compara siempre manzanas con manzanas: tipo de crédito, zona y periodo.' },
          kusi: ['curioso', '¡Los números sí mienten cuando los mezclas!'] } },
      { id: 'b', label: 'Usar su Excel: los datos son de la cooperativa y te ahorran media tarde.',
        res: { q: 'riesgosa', fx: { calidad: -3, etica: -2, tiempo: 2 },
          out: 'Copias su gráfico en tu análisis. Esa noche, Kevin lo ve en la impresora compartida y lo fotografía: «¿Ya ven? Nos están midiendo con la regla de Misti».',
          pro: { ok: 'Avanzas rápido.', risk: 'Un dato sin fuente, preparado por una de las partes, contamina todo el análisis.' },
          kusi: ['preocupado', 'Ese gráfico tenía dueño…'] } },
      { id: 'c', label: 'Decirle que no puede mandarte datos y borrar el archivo sin abrirlo.',
        res: { q: 'aceptable', fx: { etica: 1, confianza: -2 },
          out: 'Gabriel se ofende: «Solo quería ayudar». Pierdes la oportunidad de ver qué piensa y qué datos maneja.',
          pro: { ok: 'Te proteges de la parcialidad.', risk: 'Rechazar sin mirar también cierra una puerta: el problema no era el dato, era usarlo sin verificar.' },
          kusi: ['pensando', 'Mirarlo no era usarlo.'] } },
    ],
    rules: [[BP, 'Ningún dato entra al análisis sin fuente oficial y sin separar por tipo de cartera.']],
    mirada: {
      ve: 'Gabriel no hace trampa: cree de verdad que su modelo es mejor, y en algo tiene razón. Pero en una fusión cada parte trae sus números. El trabajo de DO es poner todos los datos en la misma regla antes de compararlos.',
      visual: { tipo: 'rango', titulo: 'Mora por tipo de cartera (cifras de la historia)', min: 0, max: 12, banda: [3, 6], marcas: [['Consumo Misti', 4.1], ['MYPE Misti', 5.2], ['MYPE Characato', 5.6], ['Agrícola Characato', 10.8]] },
    },
  },
  {
    id: 'd6', t: '17:30', ch: 'presencial', who: 'ernesto', titulo: '«¿Quién se queda?»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Ernesto', show: ['etica', 'confianza', 'calidad'],
    body: () => `<p>Ernesto cierra la puerta. Afuera, el cielo se pone naranja sobre el Chachani.</p><p>«Linares me acaba de llamar. Quiere que el jueves le digamos quién se queda en créditos. <mark class="clave">¿Qué le recomiendo?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Que primero se decida la estructura: los datos muestran dos negocios distintos (campiña agrícola-MYPE y consumo urbano). Propones evaluar una jefatura con dos coordinaciones por segmento, y elegir a las personas después, con criterios publicados.',
        res: { q: 'buena', fx: { calidad: 4, etica: 3, confianza: 2 }, rel: { ernesto: 1 }, flags: ['estructura_primero'], cartera: { duplicados: 'Créditos: propuesta de estructura por segmentos, sin nombres' },
          out: 'Ernesto se frota la cara. «Linares va a decir que nos demoramos. Pero tiene sentido. Le pediré dos días.»',
          pro: { ok: 'Separas la decisión de estructura de la decisión sobre personas.', risk: 'El gerente quería un nombre y le llevas un diseño.', info: 'Prepara cuánto cuesta cada opción: es lo primero que preguntará.' },
          kusi: ['animo', 'Puesto primero, persona después. ¡Así se hace!'] } },
      { id: 'b', label: 'Recomendar a Gabriel: el modelo digital de Misti es el futuro, su mora es más baja y el gerente lo prefiere. Decidirlo rápido acaba con la incertidumbre.',
        res: { q: 'riesgosa', fx: { etica: -3, calidad: -3, tiempo: 2 }, rel: { jefa: -1 }, flags: ['gabriel_recomendado'],
          out: 'Ernesto anota el nombre. Mañana, el equipo de Characato sentirá que la fusión fue, en realidad, una absorción.',
          pro: { ok: 'Das una respuesta rápida.', risk: 'Eliges a una persona antes de definir el puesto, con datos que mezclan carteras distintas.' },
          kusi: ['preocupado', '¿Y la cartera agrícola quién la conoce?'] } },
      { id: 'c', label: 'Mantener a los dos como jefes de créditos «por ahora», hasta que se calmen las aguas.',
        res: { q: 'aceptable', fx: { personas: 2, calidad: -2 }, flags: ['cojefes'],
          out: 'Ernesto suspira: «Por ahora es una palabra peligrosa». Nadie se va, pero nadie sabe quién decide.',
          pro: { ok: 'Evitas una decisión apresurada.', risk: 'Dos jefes para lo mismo, sin plazo, mantienen la confusión y el desgaste.' },
          kusi: ['pensando', 'Sin fecha, «por ahora» se vuelve «para siempre».'] } },
    ],
    rules: [[BP, 'Decide primero la estructura y luego las personas, con criterios conocidos.']],
    mirada: {
      ve: 'La pregunta «¿quién se queda?» es la que más presión genera y la que peor se responde de primera. A veces, el análisis muestra que el problema no es elegir entre dos personas, sino que la estructura nueva necesita algo distinto de lo que tenía cada una.',
      visual: { tipo: 'matriz', x: 'Rapidez', y: 'Solidez de la decisión', cuadrantes: ['Sólida y rápida', 'Sólida pero lenta', 'Débil y lenta', 'Rápida pero débil'], items: [['Estructura por segmentos', .35, .85], ['Elegir a Gabriel ya', .9, .2], ['Dos jefes «por ahora»', .15, .3]] },
    },
  },
];
