// Analista de Gestión del Desempeño · Capítulo 4 · «El caso de Andrés» · Semana 1, jueves.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas citadas (texto oficial en docs/normas/txt/1_DECRETO_SUPREMO_003_27_03_1997.txt; SPIJ: https://spij.minjus.gob.pe):
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 23 b): causa justa relacionada con la capacidad: «el rendimiento deficiente
//   en relación con la capacidad del trabajador y con el rendimiento promedio en labores y bajo condiciones similares».
// - D.S. 003-97-TR, art. 31: antes de despedir por capacidad, el empleador otorga por escrito un plazo no menor de
//   treinta días naturales para que el trabajador demuestre su capacidad o corrija su deficiencia.
// - Constitución, art. 26 (ya citada). El descanso médico se trata como ausencia justificada, sin cifras.

export const CAP = {
  n: 4, titulo: 'El caso de Andrés', dia: 'Semana 1, jueves', foto: 'assets/foto/frente-a-frente.webp',
  lugar: 'Alimentos Lima S.A. · Talento y Ventas',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. Mañana es el comité. Anoche Alberto habló con Paola, y Paola te espera con dos tazas de café y la puerta cerrada.', boton: 'Entrar a la oficina de Paola',
  kusi: 'Hoy toca separar lo que alguien siente de lo que alguien hizo. Con calma.',
  lead: 'Revisaste la nota de Andrés con método, leíste con lupa el sustento de Alberto, escuchaste a Andrés y llegaste a la víspera del comité con un caso armado en hechos.',
  reflexion: '¿Cómo distingues a un jefe exigente de un jefe que usa la evaluación para castigar?',
  siguiente: { n: 5, titulo: 'La calibración', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'andres', p: 'Evaluación de Andrés Huerta', j: 'Ventas', d: 0, e: 'Nota sin evidencia' },
  { id: 'pendientes', p: 'Evaluaciones pendientes', j: 'Evaluadores', d: 0, e: '40 pendientes' },
  { id: 'calibracion', p: 'Comité de calibración', j: 'Gerentes', d: 0, e: 'Mañana 9:00' },
  { id: 'licencias', p: 'Madres que volvieron de licencia', j: 'Talento · Legal', d: 0, e: '14 casos por revisar' },
  { id: 'bonos', p: 'Simulación de bonos', j: 'Mónica · Compensaciones', d: 0, e: 'Pendiente' },
];

export const FUTURO = {
  ruta_ordenada: ['Revisaste la nota de Andrés con un método: datos, jefe, evaluado, decisión.', 'Nadie podrá decir que fue un capricho de Talento.'],
  sustento_leido: ['Viste que el sustento de Alberto castiga una negativa a adelantar ventas y un descanso médico.', 'Lo llevarás al comité.'],
  sustento_flojo: ['Aceptaste partes del sustento de Alberto que no debías.', 'El comité verá un caso a medias.'],
  andres_escuchado: ['Escuchaste a Andrés con preguntas abiertas y sin prometerle nada.', 'Andrés llegará tranquilo al viernes.'],
  alberto_trato: ['Aceptaste el trato de Alberto: su apoyo a cambio de no tocar a Andrés.', 'Tu palabra quedó comprometida.'],
  alberto_limite: ['Rechazaste el trato de Alberto sin pelear.', 'Alberto sabe que contigo no se negocian notas.'],
  caso_hechos: ['Paola recibió el caso de Andrés en hechos, sin acusaciones.', 'Lo presentará contigo mañana.'],
  caso_acusacion: ['Le escribiste a Paola que Alberto toma represalias.', 'Paola tendrá que manejar tu acusación además del caso.'],
  licencias_revisadas: ['Separaste los 14 casos de madres que volvieron de licencia.', 'Uno de ellos llegará a tu escritorio.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  monica: { n: 'Mónica Quispe', sub: 'Analista de Compensaciones', c: '#7B4B94' },
};

export const WSP = [
  { chat: 'talento', t: '08:05', de: 'Wendy', txt: 'Quedan 40 pendientes 🎯 Rafael me mandó un queque de su señora para el equipo 🍰', si: 'rafael_sesion' },
  { chat: 'talento', t: '08:05', de: 'Wendy', txt: 'Quedan 40 pendientes 🎯 Hoy los persigo con todo.', no: 'rafael_sesion' },
  { chat: 'monica', t: '10:40', de: 'Mónica', txt: 'Si se queda en 80 % de sobresalientes, nos pasamos 1.9 millones del presupuesto. Sin presión 🙃' },
  { chat: 'alberto', t: '14:40', de: 'Alberto', txt: '¿Estás en tu sitio? Bajo un ratito.' },
  { chat: 'andres', t: '17:10', de: 'Andrés', txt: 'Gracias por escucharme sin apurarme. Pase lo que pase mañana.', si: 'andres_escuchado' },
  { chat: 'paola', t: '18:30', de: 'Paola', txt: 'Tu resumen está impecable. Mañana lo presentas tú, yo te respaldo.', si: 'caso_hechos' },
  { chat: 'paola', t: '18:30', de: 'Paola', txt: 'Hablemos mañana temprano. Una cosa es lo que creemos y otra lo que podemos probar.', si: 'caso_acusacion' },
];

export const CORREOS = [
  { t: '09:20', de: 'Alberto Sáenz', para: 'Analista de Gestión del Desempeño; cc: Paola Ríos', asunto: 'Sustento · evaluación A. Huerta', html: '<p>Como lo pidió Paola, envío el sustento. Adjunto mis notas. Alberto</p>' },
  { t: '16:00', de: 'Legal · Alimentos Lima', para: 'Paola Ríos; Analista de Gestión del Desempeño', asunto: 'Formato · licencia de maternidad', html: '<p>Confirmamos que descontar puntos por la licencia de maternidad expone a la empresa. Recomendamos revisar las notas de las trabajadoras afectadas antes de pagar el bono.</p>', si: 'formato_leido' },
];

export const QUIZ = [
  { q: 'Según el art. 23 b) del D.S. 003-97-TR, el rendimiento deficiente se mide…', ops: ['Según la opinión del jefe', 'En relación con la capacidad del trabajador y el promedio en labores y condiciones similares', 'Por la actitud en reuniones', 'Por la antigüedad'], ok: 1, por: 'La ley compara con la capacidad del trabajador y con el rendimiento promedio en condiciones similares.' },
  { q: 'Antes de despedir por una causa relacionada con la capacidad, el art. 31 exige…', ops: ['Nada', 'Un plazo por escrito no menor de treinta días naturales para que demuestre su capacidad o corrija', 'Una carta de un día', 'Que lo apruebe el sindicato'], ok: 1, por: 'El art. 31 obliga a dar por escrito ese plazo de treinta días naturales.' },
  { q: 'En el sustento de un jefe aparece «se negó a registrar en marzo un pedido de abril». Eso es…', ops: ['Una falta del trabajador', 'Una negativa a una práctica irregular que no debe castigarse', 'Irrelevante', 'Motivo de sobresaliente'], ok: 1, por: 'Adelantar una venta para inflar la meta es irregular. Negarse no es mala actitud.' },
  { q: 'Al presentar a tu jefa un caso de posible sesgo, lo mejor es…', ops: ['Acusar al gerente de represalia', 'Mostrar los hechos, lo que falta saber y una propuesta', 'No decir nada hasta tener pruebas totales', 'Contarlo en el grupo'], ok: 1, por: 'Los hechos se sostienen solos; las acusaciones necesitan pruebas que aún no tienes.' },
  { q: 'Un gerente te ofrece apoyar tu proyecto si no tocas la nota de su colaborador. ¿Qué haces?', ops: ['Aceptas: el proyecto ayuda a todos', 'Rechazas con calma y explicas que la nota se decide con evidencia', 'Lo grabas', 'Le dices que lo vas a denunciar'], ok: 1, por: 'Las notas no se intercambian por favores, y eso se puede decir sin romper la relación.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:10', ch: 'presencial', who: 'paola', titulo: 'La puerta cerrada', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de Paola', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Paola sopla su café. «Alberto me llamó a las diez de la noche. Dice que Talento la tiene contra él.» Te mira. ${F.has('andres_detectado') ? '«Yo vi tus números y no cuadran. Pero necesito que esto se haga bien.»' : '«No sé qué viste tú, pero necesito que esto se haga bien.»'}</p><p>«Ordéname cómo vamos a <mark class="clave">revisar una nota cuestionada</mark>, para este caso y para los que vengan.»</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la revisión. Usa las flechas.', boton: 'Guardar la ruta',
    items: [
      { id: 'datos', t: 'Reunir los indicadores del año: metas, clientes, historial', por: 'Primero lo que se puede medir.' },
      { id: 'jefe', t: 'Pedir al jefe por escrito ejemplos concretos que sustenten la nota', por: 'Quien califica, sustenta.' },
      { id: 'evaluado', t: 'Escuchar al evaluado con preguntas abiertas, sin adelantarle nada', por: 'Su versión completa el cuadro.' },
      { id: 'contraste', t: 'Contrastar el sustento con los datos y separar hechos de opiniones', por: 'Ahí aparece el sesgo, si lo hay.' },
      { id: 'comite', t: 'Llevar el caso al comité con los hechos y una propuesta', por: 'Decide el comité, no una persona.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { paola: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['ruta_ordenada'],
        out: q === 'buena' ? 'Paola la copia en su cuaderno: «Así se la explico a Alberto. No es contra él: es lo que haríamos con cualquiera».' : 'Paola mueve dos pasos: «Si escuchamos a Andrés antes de pedirle sustento a Alberto, nos acusa de parciales».',
        pro: { ok: 'Un método igual para todos protege a Talento de parecer parcial.', risk: 'Saltarse pasos convierte una revisión en una opinión.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Método, no capricho!' : 'El orden cuida a todos.'],
      };
    },
    mirada: {
      ve: 'Cuando una nota parece injusta, la tentación es corregirla de inmediato. Pero si Talento cambia notas sin método, mañana cualquier gerente puede decir que Talento también tiene favoritos.',
      visual: { tipo: 'flujo', titulo: 'Revisar una nota cuestionada', pasos: ['Datos', 'Sustento del jefe', 'Voz del evaluado', 'Contraste', 'Comité'], aqui: 0 },
    },
  },
  {
    id: 'd2', t: '09:30', ch: 'documento', who: null, titulo: 'El sustento de Alberto', banner: 'assets/esc/lupa.webp', show: ['etica', 'cumplimiento', 'calidad'],
    body: () => `<p>El adjunto de Alberto es una hoja de Word con viñetas y una frase en negrita al final. Lo lees dos veces. La segunda, con un resaltador.</p><p><mark class="clave">¿Qué es desempeño y qué no lo es?</mark></p>`,
    type: 'flag', prompt: 'Marca lo que no puede sustentar una nota baja o lo que choca con la ley.',
    doc: { t: 'Sustento · evaluación de Andrés Huerta', sub: 'Alberto Sáenz · Gerente de Ventas' },
    lines: [
      { id: 'pedido', t: 'En marzo se negó a registrar un pedido de abril para cerrar el trimestre. Falta de compromiso con la meta.', bad: BP, why: 'Registrar en marzo una venta de abril infla la meta. Negarse es integridad, no falta de compromiso.' },
      { id: 'medico', t: 'Pidió descanso médico tres días en plena campaña de julio.', bad: LEY, why: 'Un descanso médico es una ausencia justificada. Castigarlo en la nota penaliza estar enfermo.' },
      { id: 'after', t: 'No participa en los after office del equipo.', bad: BP, why: 'La vida social fuera del trabajo no es desempeño.' },
      { id: 'tarde', t: 'Llegó tarde a dos reuniones de lunes.', duda: 'Es un hecho, pero dos tardanzas en un año no explican un «necesita mejorar».' },
      { id: 'cuestiona', t: 'Cuestiona mis decisiones delante del equipo.', duda: 'Puede ser un problema de forma o un desacuerdo legítimo. Hace falta un ejemplo concreto.' },
      { id: 'plan', t: 'Con esta nota, el próximo año podemos desvincularlo por rendimiento.', bad: LEY, why: 'El rendimiento deficiente se mide frente a su capacidad y al promedio en condiciones similares (art. 23 b del D.S. 003-97-TR), y Andrés superó la meta. Además, el art. 31 exige darle por escrito treinta días naturales para demostrar su capacidad.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Subrayas lo del after office. Lo del descanso médico y la frase final se te escapan.' : `Marcas ${hitsLey} problemas legales. La frase en negrita ya no se lee como un detalle: se lee como un plan.`,
      flags: [missLey ? 'sustento_flojo' : 'sustento_leido'],
      cartera: { andres: missLey ? 'Sustento revisado a medias' : 'Sustento: integridad castigada, descanso médico y plan de salida' },
      pro: { ok: 'Separar hechos de opiniones, y desempeño de lo que no lo es, es el centro de tu trabajo.', risk: 'Un «necesita mejorar» armado así puede terminar en un despido sin sustento.', info: 'Lo del pedido de marzo puede interesar también a Auditoría.' },
      kusi: missLey ? ['preocupado', 'Esa última frase era la más grave…'] : ['indignado', '¡Lo castigan por no inflar ventas!'],
    }),
    rules: [[LEY, 'D.S. 003-97-TR, art. 23 b): el rendimiento deficiente se mide frente a su capacidad y al promedio en condiciones similares.'], [LEY, 'D.S. 003-97-TR, art. 31: plazo escrito no menor de treinta días naturales para demostrar capacidad o corregir.']],
    mirada: {
      ve: 'Un jefe puede tener razones reales de molestia y aun así no tener razones de desempeño. La evaluación solo puede sostenerse en lo segundo.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Alberto siente', items: ['No va a los after', 'Me cuestiona', 'No adelantó la venta'] }, b: { t: 'Lo que muestran los datos', items: ['Meta 112 %', 'Cero quejas', 'Tres años sobresaliente'] } },
      normas: [{ ley: 'D.S. 003-97-TR, arts. 23 b) y 31', dice: 'El rendimiento deficiente se mide frente a la capacidad del trabajador y al promedio en condiciones similares; antes de despedir por capacidad se otorgan por escrito treinta días naturales para demostrarla.', practica: 'Una nota baja sin evidencia no basta para despedir a nadie, y menos a quien superó su meta.' }],
    },
  },
  {
    id: 'd3', t: '11:15', ch: 'presencial', who: 'evaluado', titulo: 'La versión de Andrés', banner: 'assets/foto/cafe.webp', lugar: 'Sala pequeña junto al comedor', show: ['personas', 'etica'],
    body: (n, F) => `<p>Andrés llega puntual, con una botella de agua y la carpeta de siempre. ${F.has('andres_filtrado') ? 'Ya sabe su nota desde el lunes y se nota que no ha dormido.' : 'No sabe su nota. Tú tampoco se la dices.'}</p><p>Le explicas que estás revisando casos para el comité. Tienes veinte minutos y <mark class="clave">dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le vas a hacer.',
    opts: [
      { id: 'marzo', label: '¿Qué pasó con el pedido de marzo?', info: '«Me pidieron cargar en marzo un pedido de una distribuidora que recién llegaba en abril. Les dije que no, que eso no era una venta todavía. Desde ahí, el señor Sáenz casi no me habla.»' },
      { id: 'logros', label: '¿Qué crees que lograste este año?', info: '«Abrí 40 bodegas nuevas en Huaycán y Santa Clara. Y bajé la morosidad. Tengo todo en esta carpeta, por si sirve.»' },
      { id: 'mejorar', label: '¿En qué crees que podrías mejorar?', info: '«A veces discuto en las reuniones. Es verdad. Lo hago por mi equipo, pero quizás no es la forma.»' },
      { id: 'jefe', label: '¿Te llevas mal con tu jefe?', info: '«No sé cómo responder eso sin que suene mal.» Se queda callado. La pregunta cerrada lo puso a la defensiva.' },
    ],
    res: picks => ({
      q: picks.includes('jefe') ? 'aceptable' : 'buena', fx: { personas: picks.includes('jefe') ? 1 : 4, etica: 2 }, rel: { evaluado: picks.includes('jefe') ? 0 : 1 },
      flags: picks.includes('jefe') ? [] : ['andres_escuchado'],
      out: picks.includes('mejorar') ? 'Andrés reconoce su parte sin que se la pidas. Eso le da más credibilidad a todo lo demás.' : 'Andrés deja su carpeta sobre la mesa. «No quiero que me suban por lástima. Solo que me evalúen por lo que hice.»',
      kusi: ['pensando', 'Su versión completa el cuadro. Ahora falta el comité.'],
    }),
    rules: [[BP, 'Escucha al evaluado con preguntas abiertas y no le prometas un resultado.']],
    mirada: {
      ve: 'Escuchar al evaluado no es tomar partido. Es tener las dos versiones antes de decidir. Y cuando la persona reconoce sus errores, su versión gana peso.',
      visual: { tipo: 'cambio', titulo: 'Preguntas que abren y preguntas que cierran', pares: [['¿Te llevas mal con tu jefe?', '¿Qué pasó con el pedido de marzo?'], ['¿Eres buen vendedor?', '¿Qué crees que lograste?']] },
    },
  },
  {
    id: 'd4', t: '13:10', ch: 'documento', who: null, titulo: 'La tarde antes del comité', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>Comes un pan con pollo frente a la computadora. Quedan 40 evaluaciones pendientes y mañana empieza todo a las 9:00. Tienes la tarde para <mark class="clave">tres frentes</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes que atiendes esta tarde.', boton: 'Ir por estos', resumen: 'Atendiste',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'pend', cells: ['Llamar a los jefes con las 40 evaluaciones pendientes', 'Es el último día antes del plazo'] },
      { id: 'caso', cells: ['Armar el resumen del caso de Andrés para Paola', 'Mañana se presenta'] },
      { id: 'lic', cells: ['Separar los 14 casos de madres que volvieron de licencia', 'Legal pidió revisarlos'] },
      { id: 'sim', cells: ['Ayudar a Mónica con la simulación de bonos', 'Puede esperar al lunes'] },
      { id: 'audit', cells: ['Denunciar a Alberto ante Auditoría por el pedido de marzo', 'Solo tienes la versión de Andrés'] },
      { id: 'deco', cells: ['Decorar la sala del comité con globos verdes', 'Wendy lo propuso para «bajar la tensión»'] },
    ],
    score: { pend: 3, caso: 3, lic: 3, sim: 1, audit: -2, deco: -1 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 2 : 0, cumplimiento: picks.includes('pend') ? 3 : -2, etica: picks.includes('audit') ? -2 : 1 },
        flags: picks.includes('lic') ? ['licencias_revisadas'] : [],
        cartera: { pendientes: picks.includes('pend') ? '6 pendientes al cierre del jueves' : '40 pendientes sin perseguir', licencias: picks.includes('lic') ? '14 casos separados para el comité' : '14 casos sin revisar' },
        out: q === 'buena' ? 'A las 6, quedan solo 6 pendientes, los 14 casos de licencia están en una carpeta aparte y el resumen de Andrés tiene una página.' : picks.includes('audit') ? 'Auditoría te pide pruebas que no tienes. Ahora hay un expediente abierto con una sola versión.' : 'Avanzas, pero algo con fecha de mañana se queda sin hacer.',
        pro: { ok: 'Lo que vence mañana va primero.', risk: 'Una denuncia con una sola versión puede dañar a todos, incluido Andrés.', info: 'Lo del pedido de marzo puede revisarse después, con las dos versiones.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tarde exprimida al máximo!' : 'Revisa qué vencía mañana.'],
      };
    },
    mirada: {
      ve: 'El caso de Andrés es importante, pero no es el único: también hay 40 evaluaciones y 14 madres con notas que pueden estar mal. Priorizar es no dejar que un caso ruidoso tape a los silenciosos.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Urgencia', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'El lunes', 'No es tuyo'], items: [['Pendientes', .4, .95], ['Caso Andrés', .5, .9], ['Licencias', .5, .8], ['Simulación', .6, .3], ['Globos', .2, .1], ['Auditoría', .4, .05]] },
    },
  },
  {
    id: 'd5', t: '14:50', ch: 'presencial', who: 'gerente', titulo: 'Alberto baja a Talento', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Tu escritorio', show: ['etica', 'confianza'],
    body: () => `<p>Alberto se sienta en la silla de al lado sin pedir permiso. Huele a colonia cara y habla bajito, como quien cuenta un secreto.</p><p>«Me dicen que quieres cambiar el formato de evaluación. Yo te puedo apoyar en gerencia, mi voto pesa. <mark class="clave">Solo deja lo de Huerta como está</mark>. Es un tema mío.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle la oferta y decirle con calma que la nota de Andrés se decide mañana con evidencia, igual que todas.',
        res: { q: 'buena', fx: { etica: 5, confianza: 1 }, rel: { gerente: -1 }, flags: ['alberto_limite'],
          out: 'Alberto se levanta despacio. «Tú sabrás.» Antes de irse, añade: «Lo del formato igual me parece bien». No sabes si es una amenaza o una tregua.',
          pro: { ok: 'Pones un límite sin pelear y sin cerrar la puerta.', risk: 'Puedes perder un aliado en gerencia.', info: 'Cuenta esta conversación a Paola, tal como fue.' },
          kusi: ['animo', 'Sin trueques. ¡Así se cuida un proceso!'] } },
      { id: 'b', label: 'Aceptar: el formato nuevo ayudará a 1,500 personas, y es una sola nota.',
        res: { q: 'riesgosa', fx: { etica: -6, confianza: 2 }, rel: { gerente: 1 }, flags: ['alberto_trato'],
          out: 'Alberto te da la mano. Tienes un aliado poderoso y una promesa que, si se sabe, te deja sin credibilidad ante todos los demás gerentes.',
          pro: { ok: 'Ganas un aliado para el formato.', risk: 'Una nota negociada es exactamente lo que tu puesto existe para evitar.' },
          kusi: ['triste', '¿Una nota a cambio de un voto?'] } },
      { id: 'c', label: 'Decirle que eso que está proponiendo es grave y que se lo vas a informar a Gerencia General.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -3 }, rel: { gerente: -1 },
          out: 'Alberto se pone rojo. «¿Me estás amenazando?» La conversación termina mal y la noticia corre por el piso antes de las cinco.',
          pro: { ok: 'No aceptas el trato.', risk: 'Amenazar a un gerente un día antes del comité lo convierte en tu enemigo y no ayuda a Andrés.' },
          kusi: ['pensando', 'Firme está bien. ¿Amenazar?'] } },
    ],
    rules: [[POL, 'Las notas se deciden en el comité, con evidencia. No se negocian.']],
    mirada: {
      ve: 'Las ofertas de este tipo casi nunca se dicen como un soborno: se dicen como un favor entre colegas. Reconocerlas y decir que no, sin humillar al otro, es una de las habilidades más difíciles del puesto.',
      visual: { tipo: 'mensaje', titulo: 'Un no sin pelea', txt: 'Gracias por el apoyo al formato, Alberto, de verdad. Lo de Andrés lo vemos mañana en el comité, con los datos, como todos los casos. Si tienes más ejemplos, tráelos.' },
    },
  },
  {
    id: 'd6', t: '17:40', ch: 'correo', who: null, titulo: 'El resumen para Paola', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'confianza', 'etica'],
    mail: { from: 'Paola Ríos', to: 'Analista de Gestión del Desempeño', asunto: 'Caso Huerta · para mañana' },
    body: (n, F) => `<p>Mándame en corto lo que tienes del caso Huerta. ${F.has('alberto_trato') ? 'Y dime si hay algo más que deba saber.' : 'Lo presentamos juntas a primera hora.'}</p><p>Paola</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Los hechos, lo que falta saber y una propuesta para el comité.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 4 }, rel: { paola: 1 }, flags: ['caso_hechos'],
          responde: 'Paola: Andrés superó su meta (112 %), tiene cero quejas y tres años sobresaliente. El sustento de Alberto se basa en un descanso médico, los after office y su negativa a registrar en marzo un pedido de abril, y termina con un plan de salida. Falta saber qué pasó con ese pedido, con las dos versiones. Propuesta: que el comité recalifique con evidencia y que se revise aparte lo del pedido.',
          out: 'Paola responde a los diez minutos: «Impecable. Mañana lo presentas tú, yo te respaldo».', kusi: ['celebra', 'Hechos que se sostienen solos.'] } },
      { id: 'b', label: 'Que es una represalia clara de Alberto y hay que sancionarlo.',
        res: { q: 'riesgosa', fx: { calidad: -2, confianza: -2, etica: 1 }, flags: ['caso_acusacion'],
          responde: 'Paola: es una represalia clara de Alberto contra Andrés porque no quiso inflar ventas. Hay que sancionarlo.',
          out: 'Paola responde: «Hablemos mañana temprano». Ahora tiene que manejar tu acusación, además del caso.', kusi: ['pensando', 'Puede ser cierto… pero ¿lo puedes probar?'] } },
      { id: 'c', label: 'Que la nota es discutible y que lo vean en el comité.',
        res: { q: 'aceptable', fx: { calidad: 0, confianza: -1 },
          responde: 'Paola: la nota de Huerta es discutible, lo vemos en el comité.',
          out: 'Paola llegará al comité sin los datos que tú ya tienes.', kusi: ['pensando', 'Tenías mucho más que «discutible».'] } },
    ],
    mirada: { ve: 'Un caso bien presentado separa tres cosas: lo que se sabe, lo que falta saber y lo que se propone. La palabra «represalia» puede ser cierta, pero sin pruebas debilita lo que sí puedes demostrar.' },
  },
];
