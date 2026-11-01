// Capítulo 9 · «Fin de mes» · Semana 4, viernes. Cierre de la temporada «El supervisor que faltaba».
// Recoge las decisiones de los capítulos 1 a 8 a través de F.has(flag).
//
// Normas citadas y fuentes consultadas:
// - Ley 29733, de Protección de Datos Personales: finalidad, seguridad y conservación de los datos solo mientras sean
//   necesarios para la finalidad para la que se recogieron. Reglamento vigente: D.S. 016-2024-JUS.
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// - Ley 26772 y D.S. 002-98-TR: datos que no deben pedirse ni registrarse en una selección (edad, estado civil).
//   https://faolex.fao.org/docs/pdf/per201903.pdf
// - Ley 30709 y D.S. 002-2018-TR: revisión de diferencias salariales con criterios objetivos.
//   https://cdn.www.gob.pe/uploads/document/file/154890/2018-03-08_002-2018-TR__6353.pdf
// - Ley 26771 (nepotismo, sector público) como referencia para una política privada de referidos (citada en el capítulo 1).

export const CAP = {
  n: 9, titulo: 'Fin de mes', dia: 'Semana 4, viernes', foto: 'assets/3d/scenes/reunion.webp',
  lugar: 'Almacén central y oficina de RR.HH. · Distribuidora Pacífico Sur',
  inicio: '06:30', fin: '20:30', cierreHora: '20:10',
  apertura: 'Hoy empieza el inventario. Hace un mes no había supervisor. Hoy hay alguien en el portón 3 con una tablet y el casco puesto.', boton: 'Ir al inventario',
  kusi: 'Último día del mes. Hoy miramos lo que hiciste… y lo que quieres hacer después. ¡Dale!',
  lead: 'Viviste un mes completo como analista de selección en Tacna: siete procesos, un supervisor que faltaba y decenas de personas que pasaron por tus manos. Ahora sabes cómo se siente este trabajo por dentro.',
  reflexion: '¿Te ves en este puesto? ¿Qué parte del mes te lo dijo?',
};

const E = F => F?.has('elegido_lucia')
  ? { n: 'Lucía', ella: true }
  : F?.has('elegido_patricia') ? { n: 'Patricia', ella: true } : { n: 'Marco', ella: false };
const inventario = F => F?.has('induccion_saltada')
  ? 'el primer conteo tiene diferencias en dos pasillos: el WMS no se está usando bien'
  : F?.has('induccion_mixta')
    ? 'el primer conteo es el más limpio en tres años, según Walter'
    : 'el primer conteo va bien, con algunas diferencias que se revisarán el sábado';

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 47, e: 'Cerrado · ingresó el martes' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 34, e: 'Cerrado · 3 ingresaron, 1 el lunes' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 40, e: 'Cerrado · ingresaron el martes' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 65, e: 'Oferta aceptada · ingresa el lunes' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 30, e: 'Cerrado' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 28, e: 'Entrevistas hechas' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 85, e: 'Oferta el lunes' },
];
export const CARTERA = (F, prev) => BASE.map(c => (c.id === 'operarios' && F.has('wilber_reemplazo') ? { ...c, e: 'Cerrado · Jhon reemplazó a Wilber' } : c));

export const FUTURO = {
  politica_referidos: ['Dejaste propuesta una política de referidos y familiares.', 'La próxima analista no dependerá de su valentía.'],
  excel_limpio: ['El Excel de seguimiento quedó sin datos que no se deben guardar.', 'Lo heredará quien venga después.'],
  cliente_interno: ['Walter evaluó el proceso por escrito.', 'Será tu primer indicador de satisfacción.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
  fernando: { n: 'Fernando Salas', sub: 'Gerente Comercial', who: 'fernando' },
  julio: { n: 'Don Julio Cutipa', sub: 'Almacén', who: 'julio' },
  kelly: { n: 'Kelly Ramos', sub: 'Planillas', who: 'kelly' },
  nuevo: { n: 'Supervisión de almacén', sub: 'Ingresó el martes', c: '#C2703D' },
  wilber: { n: 'Wilber Mamani', sub: 'Operario', c: '#B5838D' },
};

export const CORREOS = [
  { t: '07:10', de: 'Ing. Ricardo Zegarra · Gerente General', para: 'Rocío Mamani', cc: 'Analista de Selección', asunto: 'Inventario', html: '<p>Primer inventario en tres años en el que Operaciones no me pide horas extra de Gerencia. Gracias a RR.HH.</p>', si: 'induccion_mixta' },
  { t: '11:30', de: 'Rocío Mamani', para: 'Analista de Selección', asunto: 'Silvia Coaquira', html: '<p>Gerencia aprobó revisar el sueldo de Silvia en el próximo trimestre, como pediste. Fue lo correcto.</p>', si: 'oferta_excepcion' },
  { t: '11:30', de: 'Silvia Coaquira', para: 'Rocío Mamani', cc: 'Analista de Selección', asunto: 'Consulta sobre la banda de supervisores', html: '<p>Rocío, me enteré de cuánto gana el nuevo supervisor. Tengo siete años. ¿Me pueden explicar el criterio?</p>', si: 'contra_puja' },
  { t: '15:20', de: 'Hugo Cárdenas', para: 'seleccion@pacificosur.pe', asunto: 'Vacante de jefe de turno', html: '<p>Vi que se abrió la vacante de jefe de turno. Gracias por avisarme primero. Ya postulé.</p>', si: 'hugo_puerta' },
];

export const WSP = [
  { chat: 'grupo', t: '06:40', de: 'Kelly', txt: 'Hoy inventario: el comedor da desayuno a todos 🍞☕ ¡fuerza almacén!' },
  { chat: 'wilber', t: '07:30', de: 'Wilber', txt: 'Buenos días señorita. Confirmo que el lunes entro. Mi mamá ya está mejor 🙏', si: 'wilber_reprograma' },
  { chat: 'walter', t: '09:40', de: 'Walter', txt: 'Primer pasillo cerrado. Va bien.', no: 'induccion_saltada' },
  { chat: 'walter', t: '09:40', de: 'Walter', txt: 'Pasillo 4 no cuadra. Nadie le enseñó a usar el lector.', si: 'induccion_saltada' },
  { chat: 'julio', t: '13:15', de: 'Don Julio', txt: 'Hija, me inscribí en el CEBA de la noche. Mi nieta dice que me va a tomar la lección 😄', si: 'julio_plan' },
  { chat: 'julio', t: '13:15', de: 'Don Julio', txt: 'Hija, ¿y lo de la reserva? Nadie me ha dicho nada.', si: 'julio_reserva' },
  { chat: 'fernando', t: '17:50', de: 'Fernando', txt: 'Colega, los tres vendedores ya están en ruta 💪 Gracias, de verdad. Aunque me hiciste sudar 😅' },
  { chat: 'grupo', t: '19:40', de: 'Kelly', txt: 'Planilla cerrada, inventario en marcha y nadie lloró. ¡Feliz fin de mes, equipo! 🎉' },
];

export const QUIZ = [
  { q: '¿Cuál de estos es un buen indicador de un proceso de selección?', ops: ['Cuántos CV llegaron', 'Cuántos días pasaron entre el requerimiento y el ingreso', 'Cuántas horas trabajó la analista', 'Cuántos correos se enviaron'], ok: 1, por: 'El tiempo de cobertura mide lo que al jefe le importa: cuánto tiempo estuvo vacío el puesto.' },
  { q: 'La calidad de una contratación se ve sobre todo en…', ops: ['El día de la oferta', 'Si la persona se queda y rinde bien en sus primeros meses', 'El número de entrevistas', 'Lo rápido que se firmó el contrato'], ok: 1, por: 'La retención y el desempeño a 90 días dicen si se eligió bien.' },
  { q: '¿Qué haces con los CV de los postulantes que no quedaron?', ops: ['Los guardas para siempre por si acaso', 'Los conservas solo con su conformidad y por el tiempo necesario; el resto se elimina', 'Se los pasas a otras empresas', 'Los imprimes y archivas'], ok: 1, por: 'La Ley 29733 pide usar y conservar los datos solo para la finalidad para la que se entregaron.' },
  { q: 'Para que los pedidos de «favorcitos» no dependan de la valentía de cada analista, conviene…', ops: ['Aceptarlos todos', 'Una política escrita de referidos y familiares', 'Rechazar a todo referido', 'Que decida cada gerente'], ok: 1, por: 'Una regla clara protege a los referidos, a los demás postulantes y a quien selecciona.' },
  { q: 'El nuevo supervisor gana más que una supervisora con siete años. ¿Qué corresponde?', ops: ['Nada, ya firmó', 'Explicar la diferencia con criterios objetivos o revisarla', 'Bajarle el sueldo al nuevo', 'Pedirle a ella que no pregunte'], ok: 1, por: 'La Ley 30709 exige que las diferencias dentro de una categoría se expliquen con criterios objetivos aplicados al caso.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '06:50', ch: 'presencial', who: 'walter', titulo: 'El inventario', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Almacén central · portón 3', show: ['confianza', 'calidad', 'personas'],
    body: (n, F) => { const e = E(F); return `<p>El almacén está iluminado como un estadio. Hay cintas amarillas en cada pasillo y operarios con lectores en la mano. ${e.n} reparte las zonas en voz alta${F.has('induccion_mixta') ? ', con don Julio a un costado, corrigiendo un número de rack sin que nadie lo note' : ''}.</p><p>Walter, con su termo de café, se pone a tu lado. Hace un mes te escribía en mayúsculas. Hoy: «Pregúnteme lo que quiera. <mark class="clave">Tengo cinco minutos</mark>».</p>`; },
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Walter.',
    opts: [
      { id: 'como', label: '¿Cómo va el inventario?', info: F => `«Hasta ahora, ${inventario(F)}.»` },
      { id: 'nuevo', label: '¿Qué le parece la nueva supervisión?', info: F => F?.has('elegido_lucia') ? '«Le confieso que dudaba de la de la tienda. Pero el turno noche ya le hace caso, y eso no lo consiguió ni Pacheco en un mes.»' : F?.has('elegido_patricia') ? '«Trajo sus planillas de Ica y en dos días me armó un tablero de exactitud. Habla poco y mide todo. Me gusta.»' : '«Sabe. Ya le cambió la ruta al montacargas del pasillo 2. Le falta ganarse a la noche, pero va.»' },
      { id: 'proceso', label: '¿Qué cambiaría del proceso?', info: F => F?.has('promesa') && !F?.has('promesa_corregida') ? '«Que no me prometan fechas que no dependen de ustedes. El primer lunes me dijo «el viernes». Todavía me acuerdo.»' : F?.has('walter_aliado') ? '«Nada grande. Que la próxima vez me citen al almacén desde el primer día, como hizo usted.»' : '«Que se demore menos. Pero ya entendí por qué se demora.»' },
      { id: 'julio', label: '¿Y don Julio?', info: F => F?.has('julio_plan') ? '«Está estudiando de noche, ¿sabía? Y anda enseñando a la nueva supervisión como si fuera su hija. Ese hombre vale oro.»' : F?.has('julio_reserva') ? '«Me preguntó por una «reserva». ¿Qué le dijeron? Anda esperando algo.»' : '«Ahí está, como siempre. Sin él este inventario sería otra cosa.»' },
    ],
    res: picks => ({
      q: null,
      fx: { confianza: 3, personas: picks.includes('julio') ? 2 : 0, calidad: picks.includes('proceso') ? 2 : 0 },
      rel: { walter: 1 },
      out: 'Walter mira su reloj: «Ya. Me voy al pasillo 5». Antes de irse, te da una palmada en el hombro. Viniendo de él, es casi un abrazo.',
      kusi: ['feliz', 'Hace un mes te escribía en mayúsculas. Mira ahora.'],
    }),
    mirada: {
      ve: 'El resultado de una selección no se ve el día de la oferta: se ve en el primer inventario, en el primer turno noche, en cómo habla el jefe que pidió la vacante. Una profesional vuelve al lugar donde trabaja la persona que eligió.',
      visual: { tipo: 'linea', titulo: 'El mes del supervisor', hitos: [['Semana 1', 'Perfil en el almacén'], ['Semana 2', 'Filtro y entrevistas'], ['Semana 3', 'Terna y oferta'], ['Semana 4', 'Ingreso e inventario']] },
    },
  },
  {
    id: 'i2', t: '09:30', ch: 'documento', who: null, titulo: 'Tus indicadores', banner: 'assets/esc/meta.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>De vuelta en la oficina, preparas tu reporte del mes para Rocío. Tienes el Excel de seguimiento abierto, con sus pestañas mal nombradas.</p><p>Rocío te dijo el primer día en qué se iba a fijar: que los jefes confíen en ti, que lo que contrates se quede y que no le traigas problemas legales. <mark class="clave">Elige tres indicadores que lo muestren.</mark></p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres indicadores de tu reporte.', boton: 'Armar el reporte', resumen: 'Tus indicadores',
    cols: ['Indicador', 'Qué mide'],
    rows: [
      { id: 'cobertura', cells: ['Días desde el requerimiento hasta el ingreso', 'Cuánto tiempo estuvo vacío cada puesto'] },
      { id: 'aceptacion', cells: ['Ofertas aceptadas sobre ofertas hechas', 'Si las ofertas están bien armadas'] },
      { id: 'satisfaccion', cells: ['Evaluación del proceso por cada jefe', 'La confianza de los clientes internos'] },
      { id: 'respuesta', cells: ['Entrevistados que recibieron respuesta', 'Cómo trata la empresa a quien no queda'] },
      { id: 'cv', cells: ['CV recibidos en el mes', 'Volumen'] },
      { id: 'horas', cells: ['Horas que trabajaste', 'Tu esfuerzo'] },
      { id: 'correos', cells: ['Correos enviados', 'Actividad'] },
    ],
    score: { cobertura: 3, satisfaccion: 3, aceptacion: 2, respuesta: 2, cv: -1, horas: -2, correos: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: picks.includes('satisfaccion') ? 3 : 0 },
        flags: picks.map(p => 'ind_' + p),
        out: q === 'buena' ? 'Tu reporte cabe en una hoja: cuánto tardaste, cuántos dijeron que sí y qué opinan los jefes. Rocío podrá llevarlo al comité tal cual.' : q === 'aceptable' ? 'El reporte informa, aunque mezcla actividad con resultados.' : 'El reporte muestra cuánto trabajaste, pero no si lo que contrataste sirvió.',
        pro: { ok: 'Un buen indicador mide lo que le importa a la empresa, no cuánto te esforzaste.', risk: 'Los CV recibidos o las horas trabajadas suenan bien, pero no dicen si se eligió bien.', info: 'Agenda medir la retención a 90 días: ahí sabrás si el supervisor se queda.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Indicadores que cuentan la historia!' : 'Esfuerzo no es lo mismo que resultado.'],
      };
    },
    rules: [[BP, 'Mide resultados (tiempo, aceptación, satisfacción, retención), no solo actividad.']],
    mirada: {
      ve: 'Un mes de selección se puede contar en correos enviados o en puestos cubiertos. Una profesional elige lo segundo, y agrega lo que casi nadie mide: cómo se sintieron los jefes y los candidatos que no quedaron.',
      visual: { tipo: 'embudo', titulo: 'El mes en números', niveles: [['Procesos abiertos', 7], ['Procesos cerrados', 4], ['Personas que ingresaron', 8], ['Entrevistados con respuesta', 18]] },
    },
  },
  {
    id: 'i3', t: '11:00', ch: 'documento', who: null, titulo: 'El reporte del mes', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Los números ya están. Ahora, lo que aprendiste. Rocío quiere tres cosas: qué funcionó, qué no y qué propones para el próximo mes.</p><p>${F.has('rocio_informada') ? 'Ya le adelantaste lo de la guía de entrevista para los jefes.' : ''} Lo que escribas puede convertirse en <mark class="clave">la forma de trabajar del área</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu reporte.', boton: 'Enviar el reporte a Rocío',
    bloques: [
      { id: 'funciono', t: 'Lo que funcionó', n: 2, ops: [
        { id: 'f1', t: 'Levantar el perfil en el almacén, con el jefe y con alguien del equipo.', ok: true, por: 'De ahí salió todo lo demás.' },
        { id: 'f2', t: 'Matriz de preselección antes de leer los CV.', ok: true, por: 'Convirtió 140 postulaciones en cinco entrevistas defendibles.' },
        { id: 'f3', t: 'Que el jefe entrevistara sin guía, porque conoce a su gente.', ok: false, por: 'Ahí nació la pregunta que no debió hacerse.' },
      ] },
      { id: 'mejorar', t: 'Lo que hay que mejorar', n: 2, ops: [
        { id: 'm1', t: 'Las plantillas viejas (bases, carta oferta) tenían requisitos y cláusulas que no se pueden usar.', ok: true, por: 'Se revisan una vez y se evita el error en todos los procesos.' },
        { id: 'm2', t: 'Las cuentas y archivos de Selección dependían de personas, no del área.', ok: true, por: 'Lo viste el primer día con la cuenta de Milagros.' },
        { id: 'm3', t: 'La convocatoria interna demora tres días: conviene eliminarla.', ok: false, por: 'Esos tres días le dijeron al equipo que adentro también se crece.' },
      ] },
      { id: 'propongo', t: 'Lo que propongo', n: 2, ops: [
        { id: 'p1', t: 'Una política escrita de referidos y familiares: entran con el mismo filtro.', ok: true, por: 'Para que el próximo «favorcito» no dependa de la valentía de nadie.' },
        { id: 'p2', t: 'Una guía de entrevista corta para todos los jefes que entrevistan.', ok: true, por: 'Mismas preguntas, sin vida personal.' },
        { id: 'p3', t: 'Revisar la banda de supervisores frente al mercado y a la equidad interna.', ok: true, por: 'Pacheco se fue por S/ 600 y Silvia lleva siete años.' },
        { id: 'p4', t: 'Pedir foto en los CV para ir más rápido en el filtro.', ok: false, por: 'La foto no mide el trabajo y abre la puerta a sesgos.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .66 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: Math.round((k - .5) * 14), cumplimiento: k >= .66 ? 3 : -2 }, rel: { rocio: 1 },
        flags: [q === 'riesgosa' ? 'reporte_flojo' : 'reporte_solido', 'politica_referidos'],
        out: q === 'buena' ? 'Rocío responde a los veinte minutos: «Lo llevo al comité del lunes tal cual. La política de referidos la redactamos juntas».' : q === 'aceptable' ? 'Rocío agradece el reporte y te devuelve una pieza con una pregunta: «¿Seguro?».' : 'Rocío te pide conversarlo antes de llevarlo a ningún lado.',
        pro: { ok: 'Un reporte que propone cambios convierte un mes difícil en un área que funciona mejor.', risk: 'Proponer atajos que quitan controles parece eficiente, pero repite los errores del mes.', info: 'Cada propuesta, con un responsable y una fecha.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Lo que aprendiste ya es del área!' : 'Mira qué propuesta quita un control que te sirvió.'],
      };
    },
    rules: [[BP, 'Un reporte de cierre dice qué funcionó, qué no y qué propones, con responsables.'], [LEY, 'Las bases y cartas no pueden tener requisitos discriminatorios ni cláusulas que renuncien a derechos (Ley 26772; Constitución, art. 26).']],
    mirada: {
      ve: 'Lo que una analista aprende en un mes se pierde si se queda en su cabeza. Una profesional lo convierte en reglas, plantillas y guías que trabajarán por la empresa aunque ella ya no esté. Eso hizo falta cuando se fue Milagros.',
      visual: { tipo: 'cambio', titulo: 'Del problema del mes a la regla del área', pares: [['La clave de Milagros', 'Cuentas a nombre del área'], ['El «favorcito» de Fernando', 'Política de referidos'], ['La pregunta de Walter', 'Guía de entrevista para jefes'], ['La plantilla con prueba de embarazo', 'Plantillas revisadas']] },
    },
  },
  {
    id: 'i4', t: '12:30', ch: 'presencial', who: 'fernando', titulo: 'Otro «favorcito»', banner: 'assets/esc/decide.webp', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>Fernando entra sin tocar, como el primer día, pero esta vez trae dos cafés. «Colega, uno es para ti.»</p><p>${F.has('kevin_igual') ? '«Kevin ya se compró su moto. Y la hija de mi compadre quiere ser practicante de marketing.' : F.has('kevin_final') ? '«Kevin va bien, aunque Rosa anda diciendo cosas. Y la hija de mi compadre quiere ser practicante de marketing.' : '«La hija de mi compadre quiere ser practicante de marketing.'} <mark class="clave">¿Cómo hacemos?</mark>» Lo dice sonriendo, pero esta vez pregunta.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle la política de referidos que estás proponiendo: ella y Kevin pueden postular con una ficha de referido y pasan el mismo filtro.',
        res: { q: 'buena', fx: { etica: 5, confianza: 3 }, rel: { fernando: 1 }, flags: ['politica_referidos'],
          out: 'Fernando lee la ficha. «O sea que si la recomiendo, queda registrado que la recomendé yo.» Asiente. «Mejor así. Si entra, nadie podrá decir que fue por mí.»',
          pro: { ok: 'Le das a Fernando una forma legítima de recomendar, y a los demás postulantes, la seguridad de que compiten igual.', risk: 'Una política solo funciona si también la cumplen los gerentes. Que Rocío la lleve al comité.' },
          kusi: ['celebra', 'El mismo Fernando del primer día… preguntando cómo hacerlo bien.'] } },
      { id: 'b', label: 'Decirle que la pase directo a entrevista: después de un mes así, Fernando se ganó un favor.',
        res: { q: 'riesgosa', fx: { etica: -6, confianza: 2 }, rel: { fernando: 1 },
          out: 'Fernando sonríe: «Sabía que nos íbamos a entender». La frase del primer día. Y todo lo que construiste en el mes queda con una excepción a su nombre.',
          pro: { ok: 'Cierras el mes en paz con un gerente.', risk: 'Un favor después de un mes justo enseña que la justicia era solo para ese mes.' },
          kusi: ['triste', 'Esa frase otra vez…'] } },
      { id: 'c', label: 'Decirle que ningún familiar de gerentes puede postular, para evitar problemas.',
        res: { q: 'aceptable', fx: { etica: 2, personas: -3 }, rel: { fernando: -1 },
          out: '«¿Ninguno? ¿Aunque sea buena?» Fernando se va con su café. Tienes la intención correcta, pero una prohibición total también deja fuera a gente capaz.',
          pro: { ok: 'Evitas conflictos de interés.', risk: 'En una empresa privada no hay una ley que lo prohíba. Lo justo es el mismo filtro, no la exclusión.' },
          kusi: ['pensando', 'Cerrar la puerta tampoco es justo.'] } },
    ],
    rules: [[LEY, 'En el sector público la Ley 26771 prohíbe el nepotismo; en una empresa privada, lo regula la política interna.'], [BP, 'Un referido se registra como tal y pasa el mismo filtro que los demás.']],
    mirada: {
      ve: 'El primer día, Fernando te dejó un CV sobre el teclado y una orden. Hoy trae un café y una pregunta. Una profesional no solo resiste un pedido injusto: construye una regla para que el pedido llegue de otra forma.',
      visual: { tipo: 'balanza', a: { t: 'El favor directo', items: ['Fernando contento', 'Sin papeles'] }, b: { t: 'La ficha de referido', items: ['Fernando puede recomendar', 'Queda registrado quién recomienda a quién', 'La candidata compite igual que todos'] } },
    },
  },
  {
    id: 'i5', t: '14:15', ch: 'documento', who: null, titulo: 'Limpiar el Excel', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Antes de cerrar el mes, abres el Excel de seguimiento que heredaste de Milagros. Si mañana llega otra analista, recibirá esto. ${F.has('wilber_vetado') ? 'En una celda sigue la etiqueta que le pusiste a Wilber.' : ''}</p><p>Rocío te pide dejarlo <mark class="clave">como te habría gustado recibirlo</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería seguir en el Excel. Si alguna línea te hace dudar, márcala también.',
    doc: { t: 'Seguimiento_Seleccion_MB_v7_ok.xlsx', sub: 'Pestañas: «procesos», «cotiz FINAL final», «varios», «NO BORRAR»' },
    lines: [
      { id: 'etapa', t: 'Pestaña «procesos»: etapa y fecha de cada vacante.' },
      { id: 'edad', t: 'Columnas «edad» y «estado civil» de todos los postulantes desde 2022.', bad: LEY, why: 'Son datos que no deben pedirse para evaluar, y conservarlos sin finalidad expone a la empresa.' },
      { id: 'clave', t: 'Pestaña «NO BORRAR»: usuario y clave del portal de empleo.', bad: LEY, why: 'Una clave en un Excel compartido es un acceso que cualquiera puede usar. Los datos de los postulantes deben protegerse.' },
      { id: 'fuente', t: 'Columna «fuente»: de qué canal llegó cada postulante.' },
      { id: 'motivo', t: 'Columna «motivo de descarte», con el criterio de la matriz.' },
      { id: 'notas', t: 'Columna «impresión»: «me cayó bien», «muy callada», «típico de minero».', bad: BP, why: 'Son opiniones, no evidencia. Si un postulante pide ver sus datos, eso es lo que leería.' },
      { id: 'veto', t: 'Etiqueta «no recontratable» sin motivo escrito.', duda: 'Una etiqueta así puede ser legítima con un motivo verificable. Sin él, es un juicio que seguirá a la persona.' },
      { id: 'cv', t: 'Carpeta con los 140 CV del supervisor, sin fecha de eliminación.', bad: BP, why: 'Conserva solo los CV de quienes aceptaron quedar en la base, por un plazo definido. El resto se elimina.' },
      { id: 'cotiz', t: 'Pestaña «cotiz FINAL final» con los costos de cada canal.' },
    ],
    res: v => ({
      flags: [v.missLey ? 'excel_riesgo' : 'excel_limpio'],
      out: v.missLey ? 'El Excel queda casi igual que como lo recibiste. La próxima analista heredará las mismas columnas y la misma clave.' : 'Borras columnas, cambias la clave del portal, renombras pestañas y dejas una hoja «LEEME» con cómo se usa. El archivo ahora se llama «Seguimiento_Seleccion_2026.xlsx».',
      pro: { ok: 'Un archivo limpio es lo más útil que una analista puede dejarle a la siguiente.', risk: 'Los datos que nadie borra siguen siendo responsabilidad de la empresa, aunque nadie los use.', info: 'Define cuánto tiempo se guardan los CV de quienes aceptaron quedar en la base, y escríbelo.' },
      kusi: v.missLey ? ['preocupado', 'La clave sigue ahí, esperando a alguien…'] : ['celebra', '¡Así sí da gusto heredar un Excel!'],
    }),
    rules: [[LEY, 'Los datos personales se conservan solo mientras sean necesarios para su finalidad y con medidas de seguridad (Ley 29733).'], [BP, 'Deja el archivo como te habría gustado recibirlo.']],
    mirada: {
      ve: 'El primer día heredaste un Excel con claves, columnas que no debían existir y notas sin sentido. Una profesional cierra el ciclo: deja el archivo mejor de lo que lo encontró, porque sabe lo que cuesta empezar sin él.',
      visual: { tipo: 'cambio', titulo: 'Del Excel heredado al Excel que dejas', pares: [['Seguimiento_Seleccion_MB_v7_ok', 'Seguimiento_Seleccion_2026'], ['Clave del portal en una pestaña', 'Cuenta del área, clave en un gestor'], ['Edad y estado civil', 'Fuente, etapa y motivo de descarte'], ['140 CV para siempre', 'Solo los autorizados, con plazo']] },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'Los datos personales deben ser adecuados, pertinentes y no excesivos para su finalidad, conservarse solo el tiempo necesario y protegerse frente a accesos no autorizados.', practica: 'Una columna de estado civil de 2022 o una clave en una pestaña no tienen ninguna finalidad hoy: solo riesgo.' }],
    },
  },
  {
    id: 'i6', t: '16:00', ch: 'presencial', who: 'rocio', titulo: 'La conversación de fin de mes', banner: 'assets/foto/mentora.webp', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>Rocío cierra la puerta y te sirve un café de la máquina; esta vez está caliente. Tiene tu reporte impreso con anotaciones al margen.</p><p>«Te dije el primer día que me iba a fijar en tres cosas. Hablemos de eso. ${F.has('induccion_mixta') ? 'Zegarra me escribió en la mañana por el inventario, ya te contaré.' : ''} <mark class="clave">Pregúntame lo que quieras saber de tu mes.</mark>»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Rocío.',
    opts: [
      { id: 'jefes', label: '¿Los jefes confían en mí?', info: F => (F?.has('walter_aliado') || F?.has('promesa_corregida') || F?.has('agenda_walter') ? '«Walter bloqueó su agenda para tus entrevistas. Eso no lo había hecho nunca.' : '«Walter todavía te mide.') + (F?.has('gerencia_optimista') ? ' Con Gerencia te costó: ese «todo va según lo previsto» se recordó en el comité.»' : F?.has('gerencia_informada') ? ' Y Zegarra pidió que todas las áreas reporten como tú.»' : '»') },
      { id: 'queda', label: '¿Lo que contraté se va a quedar?', info: F => (F?.has('contra_puja') ? '«Eso lo sabremos en noventa días. Me preocupa algo: entró por una subasta de sueldo, y quien entra así suele irse por la siguiente subasta.' : F?.has('contra_valor') ? '«Eso lo sabremos en noventa días. Pero entró por lo que le importaba, no por la plata. Eso suele quedarse.' : '«Eso lo sabremos en noventa días.') + (F?.has('induccion_saltada') ? ' Y empezó sin inducción: vigílalo de cerca.»' : '»') },
      { id: 'legal', label: '¿Te traje problemas legales?', info: F => { const p = ['filtro_sexo', 'pregunta_tolerada', 'informe_sesgo', 'carta_errores', 'cv_whatsapp', 'base_sin_permiso', 'hugo_fuera', 'alta_atrasada', 'bienvenida_expuesta'].filter(f => F?.has(f)).length; return p === 0 ? '«Ninguno. Y evitaste varios que venían de antes: la plantilla, la clave, el aviso de Facebook.»' : p <= 2 ? '«Alguno que otro, y los corregimos a tiempo. Lo importante es que me los contaste.»' : '«Varios. Ninguno grave todavía, pero hay que revisar cómo trabajamos los datos y las entrevistas.»'; } },
      { id: 'mejora', label: '¿Qué tengo que mejorar?', info: F => F?.has('terna_sin_recomendacion') ? '«Que te atrevas a recomendar. Tienes buen criterio, úsalo en voz alta.»' : F?.has('kelly_lunes') ? '«Pensar en el proceso completo: lo tuyo termina cuando Kelly termina.»' : '«Cuidarte. Respondiste mensajes a las nueve de la noche y saliste tarde dos viernes. Este trabajo no se acaba nunca; tú sí.»' },
    ],
    res: picks => ({
      q: null,
      fx: { confianza: 3, calidad: 2 },
      rel: { rocio: 1 },
      out: 'Rocío cierra la carpeta. «Para ser tu primer mes, bien. De verdad.» Se queda mirándote un segundo. «Ahora te pregunto yo una cosa. Pero eso, al final del día.»',
      kusi: ['feliz', 'Rocío no regala esa frase.'],
    }),
    mirada: {
      ve: 'Una evaluación de fin de mes no es una nota: es una conversación sobre cómo trabajas. Una profesional pregunta lo que de verdad quiere saber, incluido lo que le cuesta escuchar.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Rocío pidió', items: ['Que los jefes confíen', 'Que lo contratado se quede', 'Sin problemas legales'] }, b: { t: 'Lo que dejaste', items: ['Un supervisor en el inventario', 'Reglas nuevas para el área', 'Personas que hablan bien de la empresa'] } },
    },
  },
  {
    id: 'i7', t: '17:30', ch: 'whatsapp', who: 'walter', titulo: 'Cerrar con Walter', banner: 'assets/foto2/acuerdo-manos.webp', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>El proceso del supervisor está cerrado. Falta lo que casi nadie hace: preguntarle al cliente interno cómo le fue.</p><p>Walter está en el pasillo 5, ${F.has('induccion_saltada') ? 'resolviendo las diferencias que dejó el primer conteo' : 'cerrando el primer día del inventario'}. Le escribes <mark class="clave">un mensaje que pueda responder en un minuto</mark>.</p>`,
    type: 'compose', enviaA: 'walter', para: 'Para: Walter Quispe', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cierra', t: 'El cierre', ops: [
        { id: 'c1', t: 'Ingeniero, con el ingreso del martes cerramos el proceso del supervisor.', ok: true, por: 'Dices que terminó y desde cuándo.' },
        { id: 'c2', t: 'Ingeniero, ¿vio que sí cumplimos?', ok: false, por: 'Suena a reclamo pendiente.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'p1', t: '¿Me ayuda con tres respuestas cortas? Del 1 al 5, qué tan satisfecho está, qué le sirvió más y qué cambiaría.', ok: true, por: 'Concreto, medible y rápido de responder.' },
        { id: 'p2', t: 'Cuando pueda, me cuenta qué le pareció todo.', ok: null, por: 'Amable, pero no lo va a responder nunca.' },
      ] },
      { id: 'noventa', t: 'Lo que sigue', ops: [
        { id: 'n1', t: 'A los 30 y a los 90 días le vuelvo a preguntar cómo va la nueva supervisión.', ok: true, por: 'La calidad de una contratación se mide después.' },
        { id: 'n2', t: 'Cualquier problema con la persona, me avisa y buscamos otra.', ok: false, por: 'Trata al nuevo como un repuesto, no como alguien a quien acompañar.' },
      ] },
      { id: 'gracias', t: 'El agradecimiento', ops: [
        { id: 'g1', t: 'Gracias por bloquear su agenda y por el almacén del primer miércoles.', ok: true, por: 'Reconoces lo que él aportó.' },
        { id: 'g2', t: 'Gracias por su paciencia.', ok: null, por: 'Correcto, aunque genérico.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'p1', 'n1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.noventa === 'n2' || sel.cierra === 'c2' ? 'aceptable' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 2, calidad: sel.pide === 'p1' ? 3 : 0 }, rel: { walter: 1 },
        flags: sel.pide === 'p1' ? ['cliente_interno'] : [],
        out: sel.pide === 'p1' ? 'A las 18:20 Walter responde: «4. El perfil en el almacén. Que empiece antes. Gracias a usted». Es el mensaje más largo que te ha escrito.' : 'Walter responde con un pulgar. No sabrás qué opina del proceso hasta el próximo problema.',
        pro: { ok: 'Preguntar al cliente interno convierte una impresión en un dato, y le dice al jefe que su opinión cuenta.', risk: 'Si preguntas y no haces nada con la respuesta, la próxima vez no responderá.', info: 'Guarda su respuesta en el reporte: es tu indicador de satisfacción.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un 4 de Walter vale como un 7!' : 'Pregunta corto y concreto.'],
      };
    },
    rules: [[BP, 'Cierra cada proceso pidiendo la evaluación del jefe y agenda un seguimiento a 30 y 90 días.']],
    mirada: {
      ve: 'El jefe que te escribió en mayúsculas el primer lunes es tu mejor fuente para mejorar. Una profesional cierra el proceso preguntándole, con un mensaje que se pueda responder en el pasillo de un almacén.',
      visual: { tipo: 'linea', titulo: 'Después del ingreso', hitos: [['Hoy', 'Evaluación del jefe'], ['Día 30', 'Seguimiento con RR.HH.'], ['Día 90', 'Fin del periodo de prueba y retención'], ['Seis meses', 'Primera evaluación de desempeño']] },
    },
  },
  {
    id: 'i8', t: '19:45', ch: 'presencial', who: 'rocio', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/celebra-brazos.webp', lugar: 'Portón 3 · fin del turno', show: ['confianza', 'personas', 'tiempo'],
    body: (n, F) => { const e = E(F); return `<p>El parque industrial se queda en silencio. Desde el portón se ven las luces del almacén, donde ${e.n} y don Julio cierran el primer día de inventario. Kelly ya se fue en la combi de las 19:30.</p><p>Rocío se pone la casaca a tu lado. «Te dije que al final del día te preguntaba algo.» Hace una pausa. <mark class="clave">«¿Te ves en este puesto?»</mark></p><p>No hay respuesta correcta. Solo la tuya.</p>`; },
    type: 'choice', cotidiano: true,
    prompt: '¿Qué le respondes a Rocío?',
    choices: [
      { id: 'si', label: 'Sí. Me cansa decir que no tantas veces, pero ver a alguien elegido por mí dirigiendo un inventario lo compensa todo.',
        res: { q: null, fx: { confianza: 2 }, rel: { rocio: 1 }, out: 'Rocío sonríe: «Lo noté el día que fuiste al almacén con casco prestado. El lunes empieza el mes de la practicante de marketing». Se ríen las dos.', kusi: ['celebra', '¡Qué bacán! Ya tienes el oficio en el cuerpo.'] } },
      { id: 'otra', label: 'Me veo en RR.HH., pero quizás no en Selección. Lo que más disfruté fue la oferta y la equidad: me llama más Compensaciones.',
        res: { q: null, fx: { confianza: 1 }, rel: { rocio: 1 }, out: 'Rocío asiente: «Se te notó en la banda del supervisor. Compensaciones necesita gente que piense como tú. Conversemos en tres meses».', kusi: ['curioso', 'Saber qué parte te gusta también es descubrir tu camino.'] } },
      { id: 'duda', label: 'No estoy segura. Me gusta el trato con la gente, pero me costó mucho dejar de pensar en el trabajo al llegar a casa.',
        res: { q: null, fx: { personas: 1 }, rel: { rocio: 1 }, out: 'Rocío se queda callada un momento. «Eso también es una respuesta honesta. A mí me tomó dos años aprender a apagar el celular. Si quieres, lo trabajamos juntas.»', kusi: ['animo', 'Dudar después de un mes así es de lo más humano.'] } },
      { id: 'no', label: 'Creo que no. Aprendí muchísimo, pero prefiero un trabajo con menos conversaciones difíciles al día.',
        res: { q: null, fx: { confianza: 1 }, rel: { rocio: 0 }, out: 'Rocío asiente sin juzgar: «Saberlo a tiempo vale más que cinco años en un puesto que no es para ti. Lo que hiciste este mes, igual quedó aquí».', kusi: ['feliz', 'Descubrir lo que no quieres también es ganar.'] } },
    ],
    mirada: {
      ve: 'Analista de Selección es un puesto de coordinación constante, de decir no muchas veces, de esperar a jefes y de cuidar a personas que no conoces. También es ver a alguien que elegiste dirigir un inventario un mes después. Este mes no buscaba que acertaras siempre: buscaba que supieras cómo se siente este trabajo por dentro.',
      visual: { tipo: 'balanza', a: { t: 'Lo que cuesta', items: ['Decir no muchas veces al día', 'Jefes apurados y gerentes con favores', 'Mensajes a deshora'] }, b: { t: 'Lo que da', items: ['Ver a alguien elegido por ti crecer', 'Cambiar cómo trabaja una empresa', 'Personas que te agradecen, aunque no hayan quedado'] } },
    },
  },
];
