// Coordinador/a de Gestión Humana · Capítulo 7 · «Los indicadores» · Semana 2, martes.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733, art. 2 num. 5 (salud y afiliación sindical son datos sensibles), art. 7 (proporcionalidad) y art. 8
//   (calidad: datos veraces, exactos y actualizados). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - Constitución Política del Perú, art. 28 inc. 1: el Estado garantiza la libertad sindical.
//   https://www.congreso.gob.pe/constitucion/
// Los números de rotación y ausentismo de la empresa son ficticios.

export const CAP = {
  n: 7, titulo: 'Los indicadores', dia: 'Semana 2, martes', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Lácteos del Altiplano · Oficina de Gestión Humana, Juliaca',
  inicio: '07:40', fin: '19:00', cierreHora: '18:50',
  apertura: 'Martes. El gerente general quiere indicadores para el directorio del jueves. Nunca se midieron. Tienes un Excel de Juliaca, un cuaderno escaneado de Ayaviri y un día.', boton: 'Abrir la carpeta',
  kusi: 'Un indicador no es un número bonito: es una pregunta bien hecha. ¡Vamos a hacer buenas preguntas!',
  lead: 'Elegiste qué medir, limpiaste los datos de dos plantas, definiste cómo se calcula la rotación, dijiste que no a una lista que no debía existir y mostraste Ayaviri tal como está.',
  reflexion: '¿Qué número de hoy te gustaría no haber visto, y por qué era importante verlo?',
  siguiente: { n: 8, titulo: 'El reemplazo', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'indicadores', p: 'Tablero para el directorio', j: 'Tú · Nely · Yesenia', d: 6, e: 'Para mañana 8 a. m.' },
  { id: 'datos', p: 'Datos de las dos plantas', j: 'Nely · Yesenia', d: 6, e: 'Excel y cuaderno' },
  { id: 'ayaviri', p: 'Reemplazo de Freddy', j: 'Tú · Mariela', d: 6, e: 'Decisión mañana' },
  { id: 'nely', p: 'Plan de Nely', j: 'Tú · Nely', d: 6, e: 'Revisión el viernes' },
];

export const FUTURO = {
  tablero_honesto: ['El tablero muestra a Ayaviri tal como está: 29 % de rotación.', 'El directorio preguntará por qué. Tendrás la respuesta.'],
  tablero_maquillado: ['El tablero muestra solo el promedio de las dos plantas.', 'Ayaviri sigue escondida detrás de un 18 %.'],
  sin_ranking: ['No entregaste una lista de «los más faltones» con motivos.', 'Don Alfonso recibió ausentismo por áreas, sin nombres.'],
  ranking_entregado: ['Entregaste una lista con nombres y motivos de falta.', 'Esa lista circulará en el directorio.'],
  sindical_borrado: ['Sacaste la columna de «los del sindicato» del cuaderno.', 'Yesenia entendió por qué.'],
  primeros_meses: ['Descubriste que más de la mitad de las salidas de Ayaviri ocurren en los primeros tres meses.', 'Será clave para elegir al nuevo jefe.'],
  yesenia_reconocida: ['Reconociste que sin el cuaderno de Yesenia no habría datos de Ayaviri.', 'Yesenia te esperará el jueves en la puerta de la planta.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  freddy: { n: 'Ing. Freddy Choque', sub: 'Jefe de la planta de Ayaviri', who: 'jefe' },
};

export const WSP = [
  { chat: 'nely', t: '07:45', de: 'Nely', txt: 'Ya tengo los ceses de Juliaca de los últimos 12 meses. ¡Sin diagnósticos! 😄' },
  { chat: 'yesenia', t: '08:30', de: 'Yesenia', txt: 'Le mandé el cuaderno escaneado completo. Son 40 páginas. Perdón la letra en las de marzo, fue la temporada de lluvias y no paraba.' },
  { chat: 'freddy', t: '11:50', de: 'Freddy', txt: 'Si va a mostrar la rotación de Ayaviri, mire cuántos se van en los tres primeros meses. Ahí está todo.' },
  { chat: 'mariela', t: '16:00', de: 'Mariela', txt: 'Don Alfonso me preguntó si la lista de faltones ya está. Le dije que lo veías tú 😬' },
  { chat: 'yesenia', t: '18:45', de: 'Yesenia', txt: 'Veintidós años escribiendo ese cuaderno y es la primera vez que sirve para el directorio. Gracias 🥹', si: 'yesenia_reconocida' },
];

export const CORREOS = [
  { t: '07:50', de: 'Alfonso Pacheco · Gerencia General', para: 'Gestión Humana', asunto: 'RE: Indicadores para el directorio', html: '<p>Recuerdo lo que necesito: rotación, ausentismo y horas extra por planta. Y la lista de los 20 trabajadores con más faltas, con el motivo. El directorio quiere saber quién nos está costando.</p><p>A. Pacheco</p>' },
];

export const QUIZ = [
  { q: '¿Cómo se calcula la tasa de rotación anual más usada?', ops: ['Ingresos entre salidas', 'Salidas del período entre el promedio de trabajadores del período, por cien', 'Salidas entre trabajadores actuales', 'Renuncias entre despidos'], ok: 1, por: 'Así se compara con el tamaño real de la plantilla durante el período.' },
  { q: 'Un traslado de Juliaca a Ayaviri, ¿cuenta como salida de la empresa?', ops: ['Sí, siempre', 'No: la persona sigue en la empresa', 'Solo si cambia de sueldo', 'Depende del jefe'], ok: 1, por: 'Contarlo como salida infla la rotación de la empresa.' },
  { q: 'La gerencia pide una lista de los 20 trabajadores con más faltas y su motivo. ¿Qué problema hay?', ops: ['Ninguno', 'Los motivos médicos son datos sensibles y la lista no responde a la pregunta del directorio', 'Que son demasiados nombres', 'Que tarda mucho'], ok: 1, por: 'La salud es dato sensible (Ley 29733, art. 2 num. 5) y el tratamiento debe ser proporcional (art. 7).' },
  { q: 'Un cuaderno de RR.HH. anota quién «anda con los del sindicato». ¿Qué haces?', ops: ['Lo usas para el reporte', 'Lo retiras: la afiliación sindical es dato sensible y la libertad sindical está garantizada', 'Lo pasas a Excel', 'Lo compartes con la gerencia'], ok: 1, por: 'Ley 29733, art. 2 num. 5, y Constitución, art. 28.' },
  { q: 'Ayaviri tiene 29 % de rotación y Juliaca 12 %. Mostrar solo el promedio de la empresa…', ops: ['Es lo más profesional', 'Esconde dónde está el problema', 'Es obligatorio', 'Da igual'], ok: 1, por: 'Un promedio puede ocultar justo la información que el directorio necesita para decidir.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '08:00', ch: 'correo', who: null, titulo: 'Qué medir', banner: 'assets/esc/meta.webp', show: ['calidad', 'confianza'],
    mail: { from: 'Alfonso Pacheco', to: 'Gestión Humana', asunto: 'RE: Indicadores para el directorio' },
    body: () => `<p>Rotación, ausentismo, horas extra por planta. Y la lista de los 20 con más faltas, con el motivo. <mark class="clave">El directorio quiere saber quién nos está costando.</mark></p><p>A. Pacheco</p>`,
    type: 'pick', n: 4, prompt: 'Elige los cuatro indicadores de tu tablero.', boton: 'Medir estos', resumen: 'Mediste',
    cols: ['Indicador', 'Para qué sirve'],
    rows: [
      { id: 'rot', cells: ['Rotación anual por planta', 'Dónde se va la gente'] },
      { id: 'temp', cells: ['Salidas en los primeros tres meses', 'Si el problema está en cómo empiezan'] },
      { id: 'aus', cells: ['Ausentismo por planta y área', 'Dónde se pierden horas'] },
      { id: 'hex', cells: ['Horas extra por planta y mes', 'Dónde falta gente o sobra carga'] },
      { id: 'rank', cells: ['Los 20 trabajadores con más faltas', 'Quién «cuesta» más'] },
      { id: 'emoji', cells: ['Satisfacción con caritas en la puerta', 'Cómo se siente la gente hoy'] },
      { id: 'memo', cells: ['Número de memorandos del año', 'Cuánta disciplina hay'] },
    ],
    score: { rot: 3, temp: 3, aus: 2, hex: 2, rank: -3, emoji: -1, memo: 0 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: picks.includes('rank') ? -2 : 1 },
        cartera: { indicadores: q === 'buena' ? 'Cuatro indicadores que responden a preguntas reales' : 'Tablero con indicadores flojos' },
        out: q === 'buena' ? 'Tus cuatro indicadores responden lo que el directorio de verdad necesita: dónde se va la gente, cuándo y cuánto cuesta.' : picks.includes('rank') ? 'Pones la lista de faltones en tu tablero. Es lo que pidió don Alfonso. También es lo que menos explica.' : 'Tu tablero tiene números, pero algunos no responden ninguna pregunta.',
        pro: { ok: 'Cada indicador debe responder una pregunta que alguien va a usar para decidir.', risk: 'Una lista de nombres no es un indicador: señala personas y no explica causas.', info: 'Las salidas de los primeros meses suelen hablar de la inducción y del jefe directo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Preguntas bien hechas!' : 'Ese número… ¿qué pregunta responde?'],
      };
    },
    rules: [[BP, 'Un indicador responde una pregunta que alguien usará para decidir.']],
    mirada: {
      ve: 'Cuando un área nunca midió nada, la tentación es medirlo todo o medir lo que pide el jefe tal cual. La coordinación agrega valor cuando traduce el pedido en preguntas: «quién nos cuesta» se vuelve «dónde y cuándo perdemos gente, y por qué».',
      visual: { tipo: 'cambio', titulo: 'Del pedido a la pregunta', pares: [['«Quién nos cuesta»', '¿Dónde y cuándo perdemos gente?'], ['«Los más faltones»', '¿En qué áreas se pierden más horas?'], ['«Cuántas horas extra»', '¿Dónde falta gente?']] },
    },
  },
  {
    id: 'g2', t: '09:30', ch: 'documento', who: null, titulo: 'Los datos de las dos plantas', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Nely trae los ceses de Juliaca en Excel; Yesenia mandó cuarenta páginas escaneadas de su cuaderno. Juntas las dos fuentes en una sola tabla.</p><p>Antes de calcular, revisas. <mark class="clave">Un número sobre datos sucios es una opinión con decimales.</mark></p>`,
    type: 'flag', prompt: 'Marca lo que hay que corregir antes de calcular.',
    doc: { t: 'Salidas_12meses_2plantas.xlsx', sub: 'Juliaca (Excel de Nely) + Ayaviri (cuaderno de Yesenia)' },
    lines: [
      { id: 'tras', t: 'Cuatro «salidas» de Juliaca son traslados a Ayaviri.', bad: 'bp', why: 'Siguen en la empresa. Contarlos infla la rotación de Juliaca.' },
      { id: 'venc', t: 'Contratos vencidos y no renovados registrados como «renuncia».', bad: 'bp', why: 'Mezcla decisiones de la empresa con decisiones de las personas. Cambia la lectura del problema.' },
      { id: 'sind', t: 'Cuaderno de Ayaviri, columna al margen: «anda con los del sindicato».', bad: 'ley', why: 'La afiliación sindical es dato sensible, y anotarla así puede servir para discriminar. La libertad sindical está garantizada.' },
      { id: 'frio', t: 'Motivo de salida: «no aguantó el frío», «se fue nomás», «problemas».', bad: 'bp', why: 'Sin categorías comparables, no se puede saber por qué se va la gente.' },
      { id: 'tres', t: 'Ayaviri: 21 de las 38 salidas ocurrieron antes de los tres meses.', duda: 'No es un error: es el hallazgo más importante de la tabla.' },
      { id: 'dni', t: 'DNI completo en todas las filas de las dos plantas.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Corriges traslados y motivos, pero la nota sobre «los del sindicato» sigue en la tabla que va a ver la gerencia.' : 'Llamas a Yesenia. «Ay, eso lo anoté porque me contaron», dice. «Lo saco ahorita.» Le explicas por qué; entiende rápido.',
      flags: missLey ? ['primeros_meses'] : ['sindical_borrado', 'primeros_meses'],
      cartera: { datos: missLey ? 'Datos limpios a medias' : 'Datos limpios: traslados, vencimientos, motivos y sin notas sensibles' },
      pro: { ok: 'Revisar antes de calcular evita conclusiones falsas.', risk: 'Un registro de quién «anda con el sindicato» puede terminar en represalias. No debe existir.', info: 'Más de la mitad de las salidas de Ayaviri son en los primeros tres meses: ahí está la historia.' },
      kusi: missLey ? ['preocupado', 'Esa nota al margen no debía llegar a la gerencia…'] : ['celebra', '¡Datos limpios y personas protegidas!'],
    }),
    rules: [[LEY, 'La afiliación sindical y la salud son datos sensibles (Ley 29733, art. 2 num. 5).'], [LEY, 'Los datos deben ser veraces y exactos (Ley 29733, art. 8).'], [LEY, 'El Estado garantiza la libertad sindical (Constitución, art. 28).']],
    mirada: {
      ve: 'Cada fuente trae sus vicios: el Excel cuenta traslados como salidas; el cuaderno mezcla datos con rumores. Juntar dos plantas es también juntar dos maneras de anotar. La coordinación limpia sin humillar a nadie: explica por qué y sigue.',
      visual: { tipo: 'embudo', titulo: 'De las filas a las salidas reales', niveles: [['Registros de salida', 72], ['Sin traslados', 68], ['Salidas reales de la empresa', 64]] },
      normas: [{ ley: 'Ley 29733, art. 2 num. 5', dice: 'Son datos sensibles, entre otros, la afiliación sindical y la información relacionada a la salud.', practica: 'Ni el cuaderno ni el tablero deben decir quién está en un sindicato o qué enfermedad tiene alguien.' }],
    },
  },
  {
    id: 'g3', t: '11:00', ch: 'documento', who: null, titulo: 'Cómo se calcula la rotación', banner: 'assets/esc/planilla.webp', show: ['calidad'],
    body: () => `<p>Si mañana el directorio pregunta «¿y eso cómo lo calcularon?», tienes que poder responderlo en una frase. Escribes la definición <mark class="clave">antes de mostrar el número</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la definición.', boton: 'Guardar la definición',
    bloques: [
      { id: 'num', t: 'Numerador', n: 1, ops: [
        { id: 'n1', t: 'Salidas de la empresa en los últimos 12 meses (renuncias, ceses y contratos no renovados), sin traslados.', ok: true },
        { id: 'n2', t: 'Todas las bajas del sistema, incluidos traslados.', ok: false, por: 'Infla la rotación.' },
      ] },
      { id: 'den', t: 'Denominador', n: 1, ops: [
        { id: 'd1', t: 'Promedio de trabajadores de la planta en esos 12 meses.', ok: true },
        { id: 'd2', t: 'Trabajadores al día de hoy.', ok: false, por: 'Si la planta creció o se achicó, el resultado se distorsiona.' },
      ] },
      { id: 'abre', t: 'Cómo se abre', n: 2, ops: [
        { id: 'a1', t: 'Por planta, y separando salidas voluntarias de decisiones de la empresa.', ok: true },
        { id: 'a2', t: 'Salidas antes de los tres meses, como dato aparte.', ok: true },
        { id: 'a3', t: 'Por apellido, para ver qué familias se van más.', ok: false, por: 'No responde ninguna pregunta útil y puede leerse como discriminación por origen.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3 },
        cartera: { indicadores: q === 'buena' ? 'Rotación: Juliaca 12 %, Ayaviri 29 %' : 'Rotación con definición dudosa' },
        out: q === 'buena' ? 'Con la definición clara, los números salen solos: Juliaca, 26 salidas sobre 220 (12 %). Ayaviri, 38 sobre 130 (29 %). Y en Ayaviri, 21 de esas 38 antes de los tres meses.' : 'Calculas un número, pero no sabrías defenderlo si alguien pregunta cómo lo obtuviste.',
        pro: { ok: 'Una definición escrita hace que el número se pueda repetir y comparar el próximo año.', risk: 'Sin definición, cada persona calcula la rotación a su manera y nadie confía en el número.', info: 'Pon la definición al pie del tablero, en letra chica pero visible.' },
        kusi: [q === 'buena' ? 'sorpresa' : 'pensando', q === 'buena' ? '¡29 %! Casi una de cada tres personas.' : '¿Cómo defenderías ese número?'],
      };
    },
    rules: [[BP, 'Define cómo se calcula un indicador antes de mostrarlo.']],
    mirada: {
      ve: 'Un indicador sin definición es una invitación a discutir el número en lugar de discutir el problema. La rotación de Ayaviri no es «alta» o «baja»: es 29 %, calculada de una forma que cualquiera puede repetir.',
      visual: { tipo: 'rango', titulo: 'Rotación anual por planta', min: 0, max: 40, banda: [0, 15], marcas: [['Juliaca', 12], ['Empresa', 18], ['Ayaviri', 29]] },
    },
  },
  {
    id: 'g4', t: '12:40', ch: 'llamada', who: null, titulo: 'La lista de los faltones', banner: 'assets/foto/llamada.webp', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Llama don Alfonso Pacheco, el gerente general. Es directo y tiene prisa.</p><p>«¿Y mi lista? Los veinte con más faltas, con el motivo. <mark class="clave">Quiero que el directorio vea con nombre y apellido quién nos cuesta.</mark>» ${F.has('procedimiento_salud') ? 'Ayer escribiste con Nely que el motivo médico no sale de Gestión Humana.' : 'Sabes que muchos motivos son médicos.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Ofrecerle el ausentismo por planta y por área, explicarle por qué no van nombres ni motivos médicos, y proponer que los casos individuales se vean con cada jefe y con Gestión Humana.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 2 }, flags: ['sin_ranking'], cartera: { indicadores: 'Ausentismo por área, sin nombres ni motivos' },
          out: 'Don Alfonso se queda callado. «Ayaviri, quesería: 7 %. ¿Eso es por área?» «Sí.» «Entonces ahí es donde hay que mirar.» Cuelga sin insistir en la lista.',
          pro: { ok: 'Le das la información que sirve para decidir y proteges lo que no debe circular.', info: 'Un directorio decide sobre áreas y causas; los casos individuales se gestionan con cada jefe.' },
          kusi: ['celebra', 'Le diste algo mejor que lo que pidió.'] } },
      { id: 'b', label: 'Entregarle la lista con nombres, pero sin los motivos médicos.',
        res: { q: 'aceptable', fx: { etica: 0, cumplimiento: 1 }, flags: ['ranking_entregado'], cartera: { indicadores: 'Lista de 20 nombres sin motivos' },
          out: 'Don Alfonso recibe su lista. En el directorio alguien pregunta «¿y por qué falta tanto este señor?». Rómulo Ticona está en el puesto tres.',
          pro: { ok: 'Quitas el dato sensible.', risk: 'Una lista de nombres en un directorio expone a personas sin contexto y no explica nada sobre las causas.' },
          kusi: ['pensando', 'Sin motivos… pero con nombres.'] } },
      { id: 'c', label: 'Entregarle la lista completa: es el gerente general y la pidió por escrito.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5 }, flags: ['ranking_entregado'], cartera: { indicadores: 'Lista con nombres y motivos médicos' },
          out: 'La lista sale con «depresión», «control prenatal» y «lumbalgia» al lado de cada nombre. Un director la imprime para leerla en el avión a Lima.',
          pro: { ok: 'Cumples el pedido.', risk: 'Datos de salud de 20 personas circulando en un directorio. Es justo lo que corregiste ayer con Nely.' },
          kusi: ['indignado', '¡Lo mismo que le corregiste a Nely!'] } },
    ],
    rules: [[LEY, 'La información de salud es dato sensible (Ley 29733, art. 2 num. 5).'], [LEY, 'El tratamiento de datos debe ser proporcional a su finalidad (Ley 29733, art. 7).']],
    mirada: {
      ve: 'Decirle que no a la gerencia general es difícil. Ayuda no decir solo «no»: ofrecer algo que responda mejor a la pregunta de fondo. El directorio no necesita nombres: necesita saber en qué áreas se pierden horas y por qué.',
      visual: { tipo: 'balanza', a: { t: 'Lista de los 20', items: ['Nombres y motivos', 'Señala personas', 'No explica causas'] }, b: { t: 'Ausentismo por área', items: ['Dónde se pierden horas', 'Permite decidir', 'Protege a las personas'] } },
    },
  },
  {
    id: 'g5', t: '14:40', ch: 'presencial', who: 'mariela', titulo: 'El 29 %', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Mariela', show: ['confianza', 'etica', 'calidad'],
    body: () => `<p>Mariela mira el tablero en tu laptop. Se detiene en el 29 % de Ayaviri y en el «21 de 38 antes de los tres meses».</p><p>«Si mostramos esto, el directorio va a decir que Administración no hizo nada en años. Y tiene razón. <mark class="clave">¿No podemos mostrar solo el promedio de la empresa? 18 % suena mejor.</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrar las dos plantas por separado, con la causa que ya se ve (las salidas tempranas) y una propuesta para el nuevo jefe de Ayaviri.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3, calidad: 3 }, rel: { mariela: 1 }, flags: ['tablero_honesto'], cartera: { indicadores: 'Tablero por planta, con causa y propuesta' },
          out: 'Mariela respira hondo. «Mejor que lo sepan por nosotros, con una propuesta, que por un auditor.» Agrega una línea de su puño: «Responsable: Administración».',
          pro: { ok: 'Un problema mostrado con su causa y su propuesta deja de ser una vergüenza y se vuelve un plan.', info: 'El dato de los primeros tres meses servirá mañana para elegir al reemplazo de Freddy.' },
          kusi: ['celebra', 'Verdad con propuesta. ¡Así se reporta!'] } },
      { id: 'b', label: 'Aceptar el promedio de 18 %: es un dato real y no hay por qué exponer a nadie.',
        res: { q: 'riesgosa', fx: { etica: -3, calidad: -3 }, flags: ['tablero_maquillado'], cartera: { indicadores: 'Tablero con promedio de empresa' },
          out: 'El 18 % se ve razonable. Nadie en el directorio pregunta por Ayaviri. Y Ayaviri sigue perdiendo a uno de cada tres.',
          pro: { ok: 'Proteges a tu jefa hoy.', risk: 'Un promedio que esconde el problema impide que alguien lo resuelva.' },
          kusi: ['triste', 'El número es real. La foto, no.'] } },
      { id: 'c', label: 'Mostrar las dos plantas, pero en una diapositiva al final, sin comentarios.',
        res: { q: 'aceptable', fx: { etica: 1, calidad: 0 },
          out: 'El dato está, pero nadie llega a la última diapositiva. El directorio se termina con la discusión del precio de la leche.',
          pro: { ok: 'No escondes el dato.', risk: 'Un dato que nadie ve es casi igual a un dato escondido.' },
          kusi: ['pensando', '¿Quién llega a la última diapositiva?'] } },
    ],
    rules: [[BP, 'Muestra el problema donde está, con su causa y una propuesta.']],
    mirada: {
      ve: 'Los promedios son cómodos para quien reporta e inútiles para quien decide. Ayaviri no tiene «un poco más de rotación»: pierde a casi un tercio de su gente cada año, y la mayoría antes de los tres meses. Eso es una decisión esperando a ser tomada.',
      visual: { tipo: 'embudo', titulo: 'Ayaviri en 12 meses', niveles: [['Trabajadores promedio', 130], ['Salidas', 38], ['Salidas antes de 3 meses', 21]] },
    },
  },
  {
    id: 'g6', t: '17:00', ch: 'whatsapp', who: null, titulo: 'Tres mensajes para el directorio', banner: 'assets/foto2/celebra-laptop.webp', show: ['calidad', 'confianza'],
    body: () => `<p>El tablero está listo. Mariela te pide un resumen de tres líneas para leer en voz alta al inicio del directorio. <mark class="clave">Si solo recuerdan tres frases, ¿cuáles?</mark></p>`,
    type: 'compose', enviaA: 'mariela', para: 'Para: Mariela Quispe', boton: 'Enviar el resumen',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'Ayaviri pierde al 29 % de su gente al año; Juliaca, al 12 %.', ok: true, por: 'Concreto y comparado.' },
        { id: 'd2', t: 'La rotación de la empresa es de 18 %, dentro de lo esperable.', ok: false, por: 'Esconde a Ayaviri. ¿Esperable según quién?' },
      ] },
      { id: 'causa', t: 'La causa', ops: [
        { id: 'c1', t: 'Más de la mitad se va antes de los tres meses: el problema está en cómo empiezan y en quién los dirige.', ok: true, por: 'Apunta a algo que se puede cambiar.' },
        { id: 'c2', t: 'La gente de Ayaviri no aguanta el trabajo.', ok: false, por: 'Es una etiqueta sobre las personas, no una causa.' },
      ] },
      { id: 'prop', t: 'La propuesta', ops: [
        { id: 'p1', t: 'Proponemos que el nuevo jefe de Ayaviri tenga como meta reducir las salidas tempranas, con inducción y acompañamiento.', ok: true, por: 'Liga el dato con la decisión de mañana.' },
        { id: 'p2', t: 'Seguiremos monitoreando.', ok: null, por: 'Correcto, pero no le pide nada al directorio.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 3 : 0 }, rel: { mariela: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Mariela responde: «Lo voy a leer tal cual. Y mañana decidimos el reemplazo con esto en la mesa».' : 'Mariela responde: «Ok». Mañana tendrá que improvisar cuando le pregunten por qué.',
        pro: { ok: 'Dato, causa y propuesta: lo mínimo de un buen reporte.', risk: 'Las etiquetas («no aguantan») cierran la conversación en lugar de abrirla.', info: 'Lo que digas el jueves en el directorio va a orientar la elección del nuevo jefe.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tres frases que deciden!' : 'Le falta una pieza.'],
      };
    },
    mirada: { ve: 'Un directorio no lee tableros: escucha frases. Reportar bien es elegir las tres que llevan a una decisión. Y la mejor frase final siempre pide algo concreto.' },
  },
  {
    id: 'g7', t: '18:20', ch: 'llamada', who: null, titulo: 'El cuaderno de Yesenia', banner: 'assets/foto/cafe.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Antes de irte, miras el tablero una vez más. La mitad de los datos de Ayaviri salió de cuarenta páginas escritas a mano, con lluvia y sin pausa. ${F.has('yesenia_ignorada') ? 'Hace una semana le pediste a Yesenia que pasara todo a Excel en cuatro días.' : 'Hace una semana le pediste a Yesenia que te enseñara su cuaderno.'}</p><p>Le marcas. <mark class="clave">¿Qué le dices?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Agradecerle con lo concreto: sin su cuaderno no habría datos de Ayaviri para el directorio, y su nombre irá como fuente en el tablero.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, flags: ['yesenia_reconocida'],
          out: 'Del otro lado hay un silencio largo. «El jueves le tengo chairo para el almuerzo», dice. Es la forma de Yesenia de decir gracias.',
          pro: { ok: 'Un reconocimiento concreto, con su nombre donde lo vea la gerencia.', info: 'Las personas que sostienen la memoria de una planta casi nunca aparecen en los informes.' },
          kusi: ['feliz', '¡Chairo el jueves! ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle «gracias por el apoyo» y pedirle que el próximo mes lo mande ya en Excel.',
        res: { q: 'aceptable', fx: { personas: 0, calidad: 1 },
          out: 'Yesenia dice «ya, señorita/señor». Cuelga. El cuaderno vuelve al cajón.',
          pro: { ok: 'Avanzas hacia el registro digital.', risk: 'Un gracias genérico seguido de un pedido suena a que su trabajo solo vale cuando cambie.' },
          kusi: ['pensando', 'Gracias… ¿y su nombre?'] } },
    ],
    mirada: { ve: 'Los indicadores se construyen con el trabajo invisible de personas como Yesenia. Reconocerlo con nombre propio no es un detalle amable: es lo que hará que mañana te ayude a pasar ese cuaderno a un registro común.' },
  },
];
