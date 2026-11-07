// Talent Acquisition Partner · Capítulo 6 · «La diversidad» · Semana 2, lunes.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas:
// - Constitución Política del Perú, art. 2, inciso 2: nadie debe ser discriminado por motivo de origen, raza, sexo,
//   idioma, religión, opinión, condición económica o de cualquier otra índole.
//   https://www.congreso.gob.pe/constitucionyreglamento/
// - Ley 26772 (requisitos discriminatorios en ofertas de empleo), ya citada en el capítulo 1.
//   https://faolex.fao.org/docs/pdf/per201903.pdf
// - Ley 30709 (igualdad remunerativa), ya citada en el capítulo 5.

export const CAP = {
  n: 6, titulo: 'La diversidad', dia: 'Semana 2, lunes', foto: 'assets/foto2/mesa-mujeres.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:45', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes de la Semana 2. El sol de noviembre por fin rompe la neblina sobre el Golf de San Isidro. Valeria llega con una hoja impresa y la pone sobre la mesa sin decir nada: la lista de los 40 finalistas de todas las vacantes. Treinta y siete nombres de hombres. Tres de mujeres.', boton: 'Mirar la lista',
  kusi: 'Los números no acusan a nadie. Pero sí te dicen dónde mirar.',
  lead: 'Encontraste dónde se perdían las candidatas, cambiaste el filtro de CV y las entrevistas, defendiste una misma valla para todos, limpiaste las preguntas de entrevista y le diste a Camila lo que pidió: conocer al equipo.',
  reflexion: '¿En qué parte de un proceso «neutral» se cuela un sesgo sin que nadie lo decida?',
  siguiente: { n: 7, titulo: 'El employer branding', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: '2 ofertas enviadas' },
  { id: 'embudo', p: 'Embudo por etapa', j: 'Talent', d: 0, e: '40 finalistas · 3 mujeres' },
  { id: 'proceso', p: 'Etapas del proceso', j: 'Talent · Tecnología', d: 0, e: 'Sin cambios desde el martes' },
  { id: 'entrevista', p: 'Guía de entrevista técnica', j: 'Renzo · Talent', d: 0, e: 'Cada uno pregunta lo que quiere' },
  { id: 'pipeline', p: 'Pipeline en el ATS', j: 'Talent', d: 0, e: '16 en proceso' },
];

export const FUTURO = {
  embudo_diagnostico: ['Sabes en qué etapas se pierden las candidatas.', 'Valeria lo presentará al comité.'],
  cv_ciego: ['El primer filtro de CV se hace sin nombre, foto, edad ni universidad.', 'En una semana sabrás si cambió algo.'],
  panel_diverso: ['Las entrevistas técnicas tienen guía estructurada y panel mixto.', 'Renzo no está del todo convencido.'],
  valla_igual: ['La valla técnica es la misma para todos; cambiaste cómo se llega a ella.', 'Leonardo lo aceptó con dudas.'],
  cuota_baja: ['Aceptaste bajar el puntaje mínimo para las candidatas.', 'Ellas lo van a saber. Y el equipo también.'],
  sin_cambios: ['Dejaste el proceso como estaba.', 'El próximo embudo se verá igual.'],
  preguntas_limpias: ['La guía de entrevista no tiene preguntas sobre hijos, pareja ni edad.', 'Nadie te lo agradecerá; nadie te demandará.'],
  preguntas_ilegales: ['En la guía quedaron preguntas sobre planes familiares.', 'Una candidata las escuchará el miércoles.'],
  camila_conoce_equipo: ['Camila conversará con Brenda y con la única backend del equipo antes de decidir.', 'Capítulo 7.'],
  meetup_candidatas: ['Sofía y Lucía, del meetup, entraron al proceso.', 'Las dos harán la prueba esta semana.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  camila: { n: 'Camila Torres', sub: 'Backend · candidata', who: 'dev' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
  diego: { n: 'Diego Mamani', sub: 'Backend senior · candidato', c: '#6B3FA0' },
  martin: { n: 'Martín Ccori', sub: 'Backend · candidato', c: '#2E7D6B' },
  brenda: { n: 'Brenda Salazar', sub: 'Frontend', c: '#C05621' },
};

export const WSP = [
  { chat: 'talent', t: '08:40', de: 'Rocío', txt: 'Patricia y Andrés aceptaron 🎉 2 de 12. Ya no es cero.' },
  { chat: 'camila', t: '09:30', de: 'Camila', txt: '¡Me llegó el resultado! 12 de 12 😱 Y la retroalimentación es buenísima. Nunca me habían explicado así qué hice bien.', si: 'prueba_justa' },
  { chat: 'camila', t: '09:30', de: 'Camila', txt: 'Terminé la prueba. Me tomó casi todo el sábado 😮‍💨 Pasé, pero estoy agotada.', si: 'prueba_eterna' },
  { chat: 'martin', t: '11:55', de: 'Martín', txt: 'La plataforma funcionó perfecto con el magnificador. Ya entregué. Gracias.', si: 'ajuste_hecho' },
  { chat: 'diego', t: '13:10', de: 'Diego', txt: 'Sigo pensándolo. Mañana te respondo, prometido.' },
  { chat: 'renzo', t: '16:40', de: 'Renzo', txt: 'Ok con la guía de entrevista. Pero si el panel mixto me quita una tarde por semana, me muero 🙃', si: 'panel_diverso' },
  { chat: 'brenda', t: '17:30', de: 'Brenda', txt: '¡Claro! Me encanta conversar con Camila. Le cuento la verdad, ¿ya? Lo bueno y lo que falta.', si: 'camila_conoce_equipo' },
];

export const CORREOS = [
  { t: '08:50', de: 'ATS · Código Andino', para: 'Talent', asunto: 'Reporte: embudo por etapa (todas las vacantes)', html: '<p>Postularon: 412 (68 mujeres). Pasaron el filtro de CV: 120 (11 mujeres). Hicieron la prueba: 58 (6 mujeres). Finalistas: 40 (3 mujeres).</p><p>Fuente de los finalistas: 22 referidos, 11 LinkedIn, 7 portales.</p>' },
  { t: '15:00', de: 'Lucía Huamaní', para: 'Talent Acquisition Partner', asunto: 'Lo que conversamos en el meetup', html: '<p>Hola, gracias por escribirme. Me animo a postular a DevOps. Solo una pregunta antes: ¿la prueba la revisan sin saber quién la hizo?</p><p>Lucía</p>', si: 'meetup_aporte' },
];

export const QUIZ = [
  { q: 'De 68 postulantes mujeres, 11 pasan el filtro de CV. Lo primero es…', ops: ['Concluir que las mujeres programan peor', 'Revisar qué criterios del filtro las están dejando fuera', 'Contratar a cualquiera para cumplir', 'Ignorarlo'], ok: 1, por: 'Un embudo por etapa muestra dónde mirar: el problema suele estar en el proceso, no en las personas.' },
  { q: 'Un filtro de CV «ciego» quita…', ops: ['La experiencia', 'Nombre, foto, edad y universidad, que no predicen el desempeño', 'Las tecnologías', 'Todo el CV'], ok: 1, por: 'Así se evalúa lo que la persona hizo, no quién es.' },
  { q: 'En una entrevista, preguntar «¿piensas tener hijos pronto?» es…', ops: ['Una pregunta normal', 'Una pregunta que puede ser discriminatoria y no tiene relación con el puesto', 'Útil para planificar', 'Obligatorio'], ok: 1, por: 'La Constitución (art. 2, inc. 2) prohíbe la discriminación por sexo; esa pregunta no evalúa el trabajo.' },
  { q: 'Para aumentar la diversidad sin bajar la valla, conviene…', ops: ['Bajar el puntaje mínimo para algunas personas', 'Ensanchar las fuentes y quitar sesgos del proceso, con la misma evaluación para todos', 'No hacer nada', 'Contratar solo por referidos'], ok: 1, por: 'Bajar la valla para un grupo daña a quienes entran así. Cambiar el proceso no.' },
  { q: 'Una entrevista estructurada es…', ops: ['Una conversación libre', 'Las mismas preguntas, ligadas al puesto, con criterios de calificación, para todos', 'Una entrevista solo con el CTO', 'Un test de personalidad'], ok: 1, por: 'Es de las formas más eficaces de reducir sesgos en entrevistas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '09:00', ch: 'documento', who: 'valeria-ta', titulo: '¿Dónde se pierden?', banner: 'assets/esc/lupa.webp', lugar: 'Sala Huascarán · piso 9', show: ['calidad', 'etica'],
    body: (n, F) => `<p>Valeria abre el reporte del ATS en la pantalla grande. «Leo dice que es el mercado: que no hay mujeres en backend. Puede ser parte. Pero 68 postularon y quedaron 3.» ${F.has('titulo_obligatorio') ? 'Te acuerdas del requisito del título en el perfil.' : ''}</p><p>«Antes de opinar, <mark class="clave">dime en qué etapas se pierden</mark>.»</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres explicaciones que mejor encajan con los datos.', boton: 'Presentar el diagnóstico', resumen: 'Señalaste',
    cols: ['Explicación', 'Lo que dicen los datos'],
    rows: [
      { id: 'filtro', cells: ['El filtro de CV las deja fuera', 'De 68 mujeres que postulan, pasan 11 (16 %). De 344 hombres, pasan 109 (32 %).'] },
      { id: 'referidos', cells: ['Los referidos llegan del mismo círculo', '22 de 40 finalistas son referidos; los referidos vienen de un equipo con 1 mujer en backend.'] },
      { id: 'prueba', cells: ['La prueba de 8 horas castiga a quien cuida a otros', 'Las que abandonan dicen «no tuve un día libre».'] },
      { id: 'mercado', cells: ['Simplemente no hay mujeres en tecnología', 'Postularon 68: sí hay.'] },
      { id: 'talento', cells: ['Las candidatas tienen menos nivel', 'En la prueba, el promedio de las 6 mujeres es igual al de los hombres.'] },
      { id: 'azar', cells: ['Es mala suerte de este mes', 'El año pasado el embudo se veía igual.'] },
    ],
    score: { filtro: 3, referidos: 3, prueba: 2, mercado: -2, talento: -3, azar: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: picks.includes('talento') ? -3 : 2 }, rel: { 'valeria-ta': q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['embudo_diagnostico'], cartera: { embudo: q === 'riesgosa' ? 'Sin diagnóstico claro' : 'Se pierden en el filtro de CV y por los referidos' },
        out: q === 'buena' ? 'Valeria asiente despacio. «El filtro de CV a la mitad y los referidos del mismo círculo. Eso se puede cambiar esta semana.»' : picks.includes('talento') ? 'Valeria te muestra el promedio de la prueba: es igual. «Los datos no dicen eso. Míralo otra vez.»' : 'Encuentras parte del problema, pero se te escapa algo.',
        pro: { ok: 'Mirar el embudo por etapa convierte una discusión de opiniones en una de datos.', risk: 'Explicar la brecha con «el mercado» o «el nivel» sin datos cierra la conversación antes de empezar.', info: 'Compara la tasa de paso de cada grupo en cada etapa.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Encontraste dónde se pierden!' : '¿Qué dicen los números?'],
      };
    },
    mirada: {
      ve: 'Cuando un grupo desaparece a lo largo de un proceso, el análisis por etapas muestra dónde pasa. Aquí, la mitad se pierde en el filtro de CV, que dependía de criterios como el título y la universidad, y la otra parte en los referidos, que reproducen el equipo actual.',
      visual: { tipo: 'embudo', titulo: 'Mujeres en el proceso', niveles: [['Postularon', 68], ['Pasaron el filtro de CV', 11], ['Hicieron la prueba', 6], ['Finalistas', 3]] },
    },
  },
  {
    id: 'f2', t: '10:30', ch: 'documento', who: null, titulo: 'Cambiar el proceso', banner: 'assets/foto/plano-equipo.webp', show: ['calidad', 'etica', 'tiempo'],
    body: () => `<p>Valeria te da carta blanca para cambiar el proceso desde hoy, con una condición: <mark class="clave">«Que no baje la calidad y que Leo no sienta que le cambiamos las reglas a la mitad»</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de cambios.', boton: 'Aplicar los cambios',
    bloques: [
      { id: 'filtro', t: 'Filtro de CV', n: 2, ops: [
        { id: 'f1', t: 'Revisar los CV sin nombre, foto, edad ni universidad visibles.', ok: true, por: 'Se evalúa lo que la persona hizo.' },
        { id: 'f2', t: 'Usar solo los tres imprescindibles del perfil como criterio.', ok: true },
        { id: 'f3', t: 'Pasar automáticamente a todas las mujeres que postulen.', ok: false, por: 'Cambia un sesgo por otro y no evalúa.' },
      ] },
      { id: 'fuentes', t: 'Fuentes', n: 2, ops: [
        { id: 's1', t: 'Buscar en comunidades de mujeres en tecnología, con el mismo mensaje y la misma valla.', ok: true },
        { id: 's2', t: 'Pedir a cada referido que proponga también a alguien de fuera de su círculo habitual.', ok: true },
        { id: 's3', t: 'Prohibir los referidos.', ok: false, por: 'Son una buena fuente: se equilibran, no se eliminan.' },
      ] },
      { id: 'entrevista', t: 'Entrevista técnica', n: 2, ops: [
        { id: 'e1', t: 'Las mismas preguntas para todos, con criterios de calificación.', ok: true, por: 'Entrevista estructurada.' },
        { id: 'e2', t: 'Panel de dos personas, al menos una mujer cuando sea posible.', ok: true },
        { id: 'e3', t: 'Que cada entrevistador pregunte lo que le parezca, para «conocer a la persona».', ok: false, por: 'Ahí entran las preguntas que no deberían.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, etica: q === 'riesgosa' ? -2 : 4, tiempo: -2 },
        flags: q === 'riesgosa' ? [] : ['cv_ciego', 'panel_diverso'], cartera: { proceso: q === 'riesgosa' ? 'Cambios que no atacan el problema' : 'Filtro ciego, fuentes nuevas y entrevista estructurada' },
        out: q === 'buena' ? 'Configuras el ATS para ocultar nombre, foto y universidad en el primer filtro. Revisas otra vez los 57 CV de mujeres rechazados: 14 cumplen los tres imprescindibles.' : q === 'aceptable' ? 'Algunos cambios van al punto; otros no tanto.' : 'Los cambios suenan bien en una lámina, pero no tocan las etapas donde se perdían.',
        pro: { ok: 'Cambiar el proceso donde se pierde la gente mantiene la valla y ensancha el embudo.', risk: 'Saltarse la evaluación para un grupo hace dudar de quienes entran, incluso de ellas mismas.', info: 'En dos semanas, vuelve a mirar el embudo por etapa.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡14 CV que nadie había visto bien!' : '¿Eso cambia la etapa donde se perdían?'],
      };
    },
    mirada: {
      ve: 'Reducir sesgos no es bajar la valla: es quitar los obstáculos que no tienen que ver con el trabajo. Filtros ciegos, criterios definidos antes, entrevistas estructuradas y paneles diversos son prácticas sencillas que cambian quién llega al final.',
      visual: { tipo: 'cambio', titulo: 'El proceso, antes y después', pares: [['CV con nombre, foto y universidad', 'Filtro ciego con 3 imprescindibles'], ['Referidos del mismo círculo', 'Referidos + comunidades nuevas'], ['Cada uno pregunta lo que quiere', 'Entrevista estructurada y panel mixto']] },
    },
  },
  {
    id: 'f3', t: '12:00', ch: 'presencial', who: 'cto', titulo: '«Tres mujeres para la foto»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Leonardo · piso 9', show: ['etica', 'confianza', 'calidad'],
    body: () => `<p>Leonardo ya leyó el diagnóstico. Te llama a su oficina. Esta vez sí te mira.</p><p>«Ok, entendí. Cóndor Pay nos va a preguntar por diversidad en la reunión del jueves. Hagamos esto: <mark class="clave">bajemos el puntaje mínimo de la prueba para las candidatas</mark> y contratamos tres. Problema resuelto.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle mantener la misma valla para todos y, en cambio, aplicar los cambios del proceso: ya hay 14 CV de mujeres que cumplen y antes nadie vio.',
        res: { q: 'buena', fx: { etica: 5, calidad: 4, confianza: 2 }, rel: { cto: 1 }, flags: ['valla_igual'],
          out: 'Leonardo lo piensa. «¿Catorce? ¿Y por qué no las vimos?» Le muestras el filtro de antes. Se queda en silencio. «Ok. Misma valla. Pero si el jueves no tengo nada que mostrarle al cliente, me ayudas tú con la lámina.»',
          pro: { ok: 'Nadie entra con la duda de si «bajaron la valla para ella».', risk: 'Puede que esta vez no lleguen a tres. El cambio de proceso tarda en verse.', info: 'Para el cliente, muestra el embudo de antes y el plan: es más creíble que una cifra.' },
          kusi: ['celebra', 'Misma valla, camino más justo. ¡Así!'] } },
      { id: 'b', label: 'Aceptar: es una medida para compensar la brecha y el cliente lo va a valorar.',
        res: { q: 'riesgosa', fx: { etica: -3, calidad: -3 }, flags: ['cuota_baja'],
          out: 'Configuras un puntaje menor para las candidatas. Dos días después, alguien del equipo lo comenta en el almuerzo: «Ah, las que entran con descuento». La frase llega a Camila.',
          pro: { ok: 'Leonardo tiene su cifra para el jueves.', risk: 'Bajar la valla solo para un grupo daña la reputación de quienes entran y no arregla el proceso que las dejaba fuera.' },
          kusi: ['triste', 'Ellas no necesitaban descuento… necesitaban que las vieran.'] } },
      { id: 'c', label: 'Decirle que mejor no tocar nada hasta terminar las 12, porque cambiar a mitad de proceso complica todo.',
        res: { q: 'aceptable', fx: { tiempo: 2, etica: -2 }, flags: ['sin_cambios'],
          out: 'Leonardo se encoge de hombros: «Como quieras». El jueves, en la reunión con Cóndor Pay, no habrá nada que mostrar. Y los 14 CV seguirán en la carpeta de rechazados.',
          pro: { ok: 'Menos ruido en el proceso.', risk: 'Los 14 CV que el filtro dejó fuera por error se quedan fuera.' },
          kusi: ['pensando', '¿Y los 14 CV?'] } },
    ],
    rules: [[BP, 'Para reducir una brecha, cambia las etapas donde se pierde la gente, no la valla de la evaluación.']],
    mirada: {
      ve: 'Las metas de diversidad pueden empujar a soluciones rápidas que hacen daño: bajar la valla para un grupo instala la idea de que «entraron con descuento». La alternativa es más lenta, pero más sólida: arreglar el proceso para que el talento que ya existe llegue al final.',
      visual: { tipo: 'balanza', a: { t: 'Bajar el puntaje para ellas', items: ['Cifra rápida para el cliente', '«Entraron con descuento»', 'El proceso sigue igual'] }, b: { t: 'Misma valla, proceso nuevo', items: ['14 CV recuperados', 'Nadie duda de cómo entró', 'Más lento'] } },
    },
  },
  {
    id: 'f4', t: '14:20', ch: 'documento', who: null, titulo: 'Las preguntas de siempre', banner: 'assets/foto/entrevista.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Para la entrevista estructurada, pides a los entrevistadores que te manden «las preguntas que siempre hacen». Juntas todo en un documento.</p><p>Algunas son muy buenas. <mark class="clave">Otras no deberían hacerse nunca</mark>.</p>`,
    type: 'flag', prompt: 'Marca las preguntas que no deben ir en la guía de entrevista.',
    doc: { t: 'Guía de entrevista técnica · borrador', sub: 'Preguntas enviadas por 5 entrevistadores' },
    lines: [
      { id: 'incidente', t: 'Cuéntame de un incidente en producción que te tocó resolver. ¿Qué hiciste y qué aprendiste?' },
      { id: 'hijos', t: '¿Tienes hijos o piensas tenerlos pronto?', bad: LEY, why: 'No evalúa el trabajo y puede usarse para discriminar por sexo. Fuera de la guía.' },
      { id: 'pareja', t: '¿Estás casada? ¿A tu pareja le parece bien que hagas guardias?', bad: LEY, why: 'La vida familiar no es un criterio de selección.' },
      { id: 'diseno', t: '¿Cómo diseñarías un servicio que no pierda pagos si se cae la base de datos?' },
      { id: 'edad', t: '¿Qué edad tienes? Es para ver si encajas con el equipo.', bad: LEY, why: 'La edad no es un requisito del puesto.' },
      { id: 'desacuerdo', t: '¿Qué haces cuando no estás de acuerdo con una decisión técnica de tu líder?' },
      { id: 'barrio', t: '¿En qué distrito vives? Es que los de lejos se cansan.', bad: BP, why: 'Si importa el traslado, se pregunta por la disponibilidad para los días presenciales, no por el distrito.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 3 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, etica: missLey ? -3 : 3, calidad: 2 },
      flags: [missLey ? 'preguntas_ilegales' : 'preguntas_limpias'], cartera: { entrevista: missLey ? 'Guía con preguntas que no deben hacerse' : 'Guía estructurada, ligada al puesto' },
      out: missLey ? 'La guía sale con las preguntas tal como llegaron. El miércoles alguien las va a hacer en voz alta.' : 'Quitas las preguntas sobre hijos, pareja, edad y distrito, y agregas una nota al inicio: «Si no está en la guía, no se pregunta». Dos entrevistadores te responden: «No sabía que eso no se podía».',
      pro: { ok: 'Una guía limpia protege a las candidatas y a los entrevistadores de sí mismos.', risk: 'Una sola pregunta sobre embarazo en una entrevista puede costarle a la empresa una denuncia y su reputación.', info: 'Haz una sesión de 20 minutos con los entrevistadores antes del miércoles.' },
      kusi: missLey ? ['indignado', '¡Esas preguntas no se hacen!'] : ['celebra', 'Guía limpia. ¡Qué bacán!'],
    }),
    rules: [[LEY, 'Nadie debe ser discriminado por motivo de sexo o de cualquier otra índole (Constitución, art. 2, inc. 2).'], [LEY, 'Los requisitos para acceder a un empleo no pueden ser discriminatorios (Ley 26772).']],
    mirada: {
      ve: 'Muchas preguntas discriminatorias se hacen sin mala intención, «para conocer a la persona». Por eso las entrevistas estructuradas funcionan: si todas las preguntas están ligadas al trabajo y escritas antes, no hay espacio para las que dañan.',
      normas: [{ ley: 'Constitución Política del Perú, art. 2, inciso 2', dice: 'Toda persona tiene derecho a la igualdad ante la ley. Nadie debe ser discriminado por motivo de origen, raza, sexo, idioma, religión, opinión, condición económica o de cualquier otra índole.', practica: 'Preguntar por hijos, pareja o edad en una entrevista no evalúa el trabajo y abre la puerta a la discriminación.' }],
    },
  },
  {
    id: 'f5', t: '15:40', ch: 'llamada', who: null, titulo: 'Las dos del meetup', banner: 'assets/foto/llamada.webp', lugar: 'Cabina de llamadas del piso 9', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('meetup_aporte') ? 'Después de tu charla del jueves, dos desarrolladoras te dejaron sus datos en la mesa del fondo.' : 'Una organizadora del meetup te pasó, con su permiso, el contacto de dos desarrolladoras.'} Las llamas.</p>`,
    type: 'calls',
    calls: [['Sofía Rengifo', 'Backend · de Tarapoto, vive en Lima', 'Me interesa. Trabajo en una consultora y hago guardias sin pago. Si aquí se pagan, ya me ganaron.'], ['Lucía Huamaní', 'DevOps · una pregunta', 'Antes de seguir, te pregunto directo: ¿me están llamando porque soy buena o porque necesitan mujeres para una estadística?']],
    prompt: '¿Qué le respondes a Lucía?',
    choices: [
      { id: 'a', label: 'Que la llamas porque su perfil cumple lo que el puesto pide, que pasará la misma prueba que todos y que sí, la empresa está tratando de corregir un proceso que dejaba fuera a muchas mujeres.',
        res: { q: 'buena', fx: { personas: 4, confianza: 4, etica: 2 }, flags: ['meetup_candidatas'], cartera: { pipeline: '18 en proceso · Sofía y Lucía' },
          out: 'Lucía se ríe. «Ok, eso es honesto. Las dos cosas pueden ser ciertas.» Pide hacer la prueba esta semana. Sofía también.',
          pro: { ok: 'Respondes con la verdad completa: su mérito y el contexto.', risk: 'Ninguno: decir que la empresa está corrigiendo algo también da confianza.', info: 'Cuéntale que la primera revisión del CV ahora es ciega.' },
          kusi: ['feliz', 'Las dos cosas son ciertas. ¡Bien dicho!'] } },
      { id: 'b', label: 'Que solo importa su perfil y que la empresa no hace diferencias de ningún tipo.',
        res: { q: 'aceptable', fx: { personas: 1, confianza: -1 }, flags: ['meetup_candidatas'],
          out: 'Lucía dice «ya», sin mucho entusiasmo. Sabe que el equipo tiene casi solo hombres y tu respuesta le sonó a folleto. Igual se anima a la prueba.',
          pro: { ok: 'Destacas su perfil.', risk: 'Negar el contexto cuando ella lo ve claramente baja la confianza.' },
          kusi: ['pensando', 'Ella ya conocía el contexto.'] } },
    ],
    mirada: { ve: 'Las candidatas de grupos poco representados suelen preguntarse si las buscan por su talento o por una cifra. La respuesta más creíble reconoce las dos cosas: cumple el perfil y la empresa está corrigiendo un proceso. Y la valla es la misma.' },
  },
  {
    id: 'f6', t: '17:00', ch: 'whatsapp', who: 'dev', titulo: 'Lo que Camila pide', banner: 'assets/foto2/mesa-mujeres.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Camila pasó la prueba ${F.has('prueba_justa') ? 'con 12 de 12' : 'después de un sábado entero'}. Le toca la entrevista técnica el miércoles. Antes, te escribe: ${F.has('camila_honestidad') ? '«Me dijiste que hay una sola mujer en backend. ¿Podría conversar con ella o con alguien del área antes de decidir?»' : '«Estuve viendo LinkedIn. ¿Podría conversar con alguna mujer del equipo antes de seguir?»'}</p><p><mark class="clave">Le respondes</mark>.</p>`,
    type: 'compose', enviaA: 'camila', para: 'Para: Camila Torres · candidata', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'si', t: 'Respuesta', ops: [
        { id: 's1', t: '¡Claro! Te puedo coordinar 30 minutos con Brenda, de frontend, y con Andrea, la backend del equipo, si ella acepta.', ok: true, por: 'Concreto, y respeta que Andrea decida.' },
        { id: 's2', t: 'Mejor después de la entrevista, para no mezclar.', ok: false, por: 'Ella quiere decidir con información.' },
      ] },
      { id: 'sin', t: 'Cómo será', ops: [
        { id: 'n1', t: 'Sin nadie de RR.HH. en la llamada, para que puedan hablar con libertad.', ok: true, por: 'Le da confianza en lo que escuche.' },
        { id: 'n2', t: 'Yo voy a estar en la llamada para acompañarlas.', ok: false, por: 'Tu presencia puede hacer que la conversación sea menos sincera.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'k1', t: 'Y lo que conversen no cuenta en tu evaluación.', ok: true, por: 'Separa la conversación del proceso.' },
        { id: 'k2', t: 'Aprovecha para causar buena impresión 😉', ok: false, por: 'Convierte la conversación en otra entrevista.' },
      ] },
    ],
    res: sel => {
      const buenas = ['s1', 'n1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 4 : q === 'riesgosa' ? -2 : 1 }, rel: { dev: q === 'buena' ? 1 : 0 },
        flags: sel.si === 's1' ? ['camila_conoce_equipo'] : [],
        envia: sel.si === 's1' ? ['brenda', 'Brenda, ¿te animarías a conversar 30 minutos con Camila, una candidata de backend? Quiere saber cómo es el equipo para una mujer. Sin RR.HH. y sin que cuente para su evaluación. Cuéntale con sinceridad.'] : undefined,
        out: q === 'buena' ? 'Camila responde: «Eso es lo más serio que me ha ofrecido una empresa en un proceso». Andrea acepta también, con una condición: «Le voy a decir todo, lo bueno y lo que falta».' : q === 'riesgosa' ? 'Camila responde: «Ok, lo vemos después». Su entusiasmo baja un poco.' : 'Camila agradece y espera la coordinación.',
        pro: { ok: 'Dejar que una candidata hable libremente con el equipo es la forma más creíble de mostrar la empresa.', risk: 'Si la conversación está vigilada o cuenta como evaluación, pierde su valor.', info: 'Ofrece lo mismo a cualquier candidato que lo pida.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Que hable con el equipo de verdad!' : '¿Cómo se sentirá ella en esa llamada?'],
      };
    },
    mirada: { ve: 'Las candidatas que serán minoría en un equipo suelen querer saber cómo es el día a día antes de aceptar. Facilitar una conversación libre con personas del equipo, sin RR.HH. y sin evaluación, es atracción honesta: si la empresa tiene algo que mejorar, mejor que se sepa antes.' },
  },
  {
    id: 'f7', t: '18:20', ch: 'correo', who: null, titulo: 'Para el comité', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Valeria Núñez', to: 'Talent Acquisition Partner', asunto: 'Lámina para Cóndor Pay (jueves)' },
    body: () => `<p>El jueves Cóndor Pay nos pregunta por diversidad. Ayúdame con <mark class="clave">una sola frase</mark> para la lámina.</p><p>V.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Una frase con el dato de hoy, lo que cambiamos y cuándo veremos el resultado.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2, etica: 2 }, rel: { 'valeria-ta': 1 }, responde: 'Valeria: «De 68 postulantes mujeres, solo 3 llegaron a finalistas. Encontramos dónde se perdían (filtro de CV y referidos), cambiamos el proceso con la misma valla y medimos de nuevo en dos semanas».',
          out: 'Valeria responde: «Perfecto. Es incómodo, pero creíble». A las 7 bajas en el ascensor con Renzo, que te dice: «Lo del filtro de CV… nunca lo había pensado».', kusi: ['celebra', 'Incómodo y creíble. ¡Así se cuenta!'] } },
      { id: 'b', label: 'Una frase que diga que Código Andino es una empresa diversa e inclusiva.',
        res: { q: 'riesgosa', fx: { confianza: -2, etica: -2 }, responde: 'Valeria: «En Código Andino creemos en la diversidad y la inclusión».',
          out: 'Valeria responde: «Eso lo dice todo el mundo. Si me preguntan el número, ¿qué digo?». Tiene razón.', kusi: ['pensando', 'Una frase sin dato no convence a nadie.'] } },
    ],
    mirada: { ve: 'Hablar de diversidad con un cliente o un candidato es más creíble con datos y un plan que con frases de valores. Reconocer el problema, decir qué se cambió y cuándo se medirá de nuevo es lo que distingue una intención de un compromiso.' },
  },
];
