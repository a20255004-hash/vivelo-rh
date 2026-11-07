// Analista de Planillas · Capítulo 4 · «El error antiguo» · Semana 1, jueves.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas:
// - D.S. 001-97-TR (TUO de la Ley de CTS), art. 9: es remuneración computable la básica y todas las cantidades que el trabajador
//   percibe regularmente en dinero o en especie como contraprestación de su labor. Art. 16: las remuneraciones complementarias
//   de naturaleza variable o imprecisa cumplen el requisito de regularidad si se perciben cuando menos tres meses en cada
//   período de seis; para la CTS se promedian. Art. 22: depósitos en los primeros 15 días naturales de mayo y noviembre.
//   https://lpderecho.pe/tuo-ley-de-compensacion-por-tiempo-de-servicios-ds-1-97-tr
//   https://noticierocontable.com/?p=68504
// - Ley 27735 (gratificaciones de julio y diciembre): también usa un criterio de regularidad para lo que entra a su base.
//   Se explica el principio, sin cifras.
// - Ley 30334: bonificación extraordinaria equivalente al aporte a EsSalud sobre la gratificación (9 %).

export const CAP = {
  n: 4, titulo: 'El error antiguo', dia: 'Semana 1, jueves', foto: 'assets/esc/lupa.webp',
  lugar: 'Andes Logística · Oficina de Compensaciones, Callao',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves. El pósit amarillo sigue en tu pantalla: «¿Bono regular = computable?». Sistemas carga hoy los datos maestros en Nómina360 y Diego quiere cerrar la configuración del bono antes del mediodía.', boton: 'Abrir la liquidación',
  kusi: 'Encontrar un error que viene de años atrás duele. Callarlo duele más, solo que después.',
  lead: 'Revisaste una liquidación de CTS contra la ley, mediste el alcance del error, decidiste qué hacer con el pasado, armaste el informe y lo llevaste a Patricia.',
  reflexion: 'Si el error lo hubiera cometido otra persona hace dos años, ¿cambiaría lo que tienes que hacer hoy?',
  siguiente: { n: 5, titulo: 'La gerencia', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'bono', p: 'Bono de productividad en CTS y gratificaciones', j: 'Tú', d: 0, e: 'Hallazgo sin medir' },
  { id: 'paralelo', p: 'Prueba en paralelo de octubre', j: 'Tú · Diego', d: 0, e: 'Diferencias casi cerradas' },
  { id: 'datos', p: 'Carga de datos maestros', j: 'Sistemas', d: 0, e: 'Hoy' },
  { id: 'informe', p: 'Informe del error', j: 'Tú · Patricia', d: 0, e: 'Por escribir' },
  { id: 'consultas', p: 'Consultas del personal', j: 'Sindicato · Teodoro', d: 0, e: 'Respuesta mañana' },
];

export const FUTURO = {
  liquidacion_leida: ['Confirmaste que el bono, percibido seis de seis meses, debía entrar a la CTS.', 'Tienes el criterio claro para explicarlo.'],
  alcance_medido: ['Mediste el alcance: 412 personas, cuatro depósitos de CTS y tres gratificaciones. Unos S/ 404,000 más intereses.', 'Finanzas querrá ese número mañana.'],
  alcance_vago: ['El alcance del error quedó a medias.', 'Mañana Finanzas te preguntará cosas que no sabrás responder.'],
  error_asumido: ['Decidiste corregir hacia adelante y reportar el pasado para un reintegro.', 'Patricia lo lleva a la gerencia.'],
  error_tapado: ['Corregiste solo hacia adelante, sin reportar el pasado.', 'El pasado tiene sindicato y, pronto, inspector.'],
  error_congelado: ['Dejaste el bono como estaba hasta que Legal confirme.', 'La gratificación de diciembre saldría con el mismo error.'],
  informe_claro: ['Tu informe dice qué, desde cuándo, a quiénes, cuánto y qué propones.', 'Patricia lo usará palabra por palabra.'],
  patricia_aliada: ['Patricia asumió el error contigo: «es del área, no tuyo».', 'Te respaldará frente a Finanzas.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  mili: { n: 'Mili Sotelo', sub: 'Asistente de Planillas', c: '#C05621' },
  teodoro: { n: 'Teodoro Quispe', sub: 'Secretario general del sindicato', c: '#975A16' },
};

export const WSP = [
  { chat: 'diego', t: '07:45', de: 'Diego', txt: '¿Cerramos hoy el bono como no computable, igual que el viejo? Así no rompemos el paralelo 🙏' },
  { chat: 'mili', t: '09:30', de: 'Mili', txt: 'Saqué la data del bono desde que existe: empezó en noviembre de 2024. 412 personas lo han cobrado, 61 ya no están en la empresa 😳' },
  { chat: 'teodoro', t: '12:10', de: 'Teodoro', txt: 'Señorita, buenas tardes. Mañana es viernes. Los compañeros preguntan. Sulpayki, gracias por revisar.', si: 'teodoro_escuchado' },
  { chat: 'teodoro', t: '12:10', de: 'Teodoro', txt: 'Señorita, soy Teodoro, del sindicato. Ya presentamos un escrito en SUNAFIL por lo de la CTS. Solo para que sepa.', si: 'teodoro_despachado' },
  { chat: 'patricia', t: '18:40', de: 'Patricia', txt: 'Mañana 10 a. m. con Finanzas. Llevas el informe tú. Yo estoy a tu lado. Ahora ve a descansar.', si: 'informe_claro' },
];

export const CORREOS = [
  { t: '14:35', de: 'Legal · Andes Logística', para: 'Analista de Planillas', asunto: 'RE: Bono de productividad · criterio', html: '<p>Si el bono se paga todos los meses como contraprestación por el trabajo, aunque su monto varíe, cumple el requisito de regularidad y debe incluirse en la remuneración computable de la CTS (TUO, art. 16) y en la base de la gratificación. Recomendamos cuantificar y regularizar. Envíen el informe a la gerencia.</p>' },
];

export const QUIZ = [
  { q: 'Un bono variable se paga los seis meses del semestre. ¿Entra a la CTS?', ops: ['No, porque es variable', 'Sí: cumple la regularidad (al menos tres de seis meses) y se promedia', 'Solo si es fijo', 'Solo si lo dice el contrato'], ok: 1, por: 'El art. 16 del TUO de la Ley de CTS considera regular lo variable que se percibe al menos tres meses en cada período de seis.' },
  { q: 'Las horas extras de un trabajador aparecieron solo dos de seis meses. Para la CTS…', ops: ['Entran siempre', 'No cumplen la regularidad en ese semestre', 'Entran al doble', 'Se pagan aparte'], ok: 1, por: 'Dos de seis no alcanza el mínimo de tres de seis.' },
  { q: 'El bono empezó en noviembre de 2024. ¿Afecta la gratificación de diciembre de 2024?', ops: ['Sí, igual que las demás', 'Probablemente no: en ese semestre solo se pagó dos meses', 'Solo a los cesados', 'Depende del banco'], ok: 1, por: 'La regularidad se mide por período: con solo noviembre y diciembre, no hay regularidad en ese semestre.' },
  { q: 'Encuentras un error de cálculo de hace dos años. Lo correcto es…', ops: ['Corregir hacia adelante y no decir nada', 'Corregir hacia adelante, cuantificar el pasado y reportarlo para un reintegro', 'Esperar a que alguien reclame', 'Culpar al sistema viejo'], ok: 1, por: 'Lo que se dejó de pagar se debe. Ocultarlo no lo borra: lo agrava.' },
  { q: '¿Qué incluye un buen informe de un error de planillas?', ops: ['Solo el monto', 'Qué pasó, desde cuándo, a quiénes, cuánto, la causa y qué se propone', 'Quién tuvo la culpa', 'Una disculpa'], ok: 1, por: 'La gerencia necesita entender y decidir, no buscar culpables.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '07:50', ch: 'documento', who: null, titulo: 'La liquidación de Wálter', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('papel_abierto') ? 'Empiezas por el primer nombre del papel de Teodoro' : 'Abres la liquidación de uno de los operarios con bono'}: Wálter Ccahuana, 34 años, operario de despacho. Su hija nació en abril. <mark class="clave">Lees su liquidación de CTS de noviembre como si fueras el inspector.</mark></p>`,
    type: 'flag', prompt: 'Marca las líneas que no cumplen la ley.',
    doc: { t: 'Liquidación de CTS · depósito de noviembre de 2026', sub: 'Wálter Ccahuana · período mayo a octubre de 2026 · sistema anterior' },
    lines: [
      { id: 'tiempo', t: 'Tiempo computable: 6 meses completos.' },
      { id: 'basico', t: 'Sueldo básico: S/ 1,450.00.' },
      { id: 'af', t: 'Asignación familiar: S/ 123.00 (hija nacida en abril).' },
      { id: 'grati', t: 'Un sexto de la gratificación de julio: incluido.' },
      { id: 'bono', t: 'Bono de productividad (percibido 6 de 6 meses, promedio S/ 182): no computable.', bad: LEY, why: 'Se pagó los seis meses del período: cumple la regularidad del art. 16 del TUO de la Ley de CTS y debe promediarse en la remuneración computable.' },
      { id: 'he', t: 'Horas extras (percibidas 2 de 6 meses): no computables.', duda: 'Correcto: dos de seis no alcanza la regularidad. Pero confirma que sean de verdad solo dos meses.' },
      { id: 'mov', t: 'Movilidad supeditada a la asistencia: no computable.' },
      { id: 'dep', t: 'Depositado el 12 de noviembre en la entidad elegida por el trabajador.' },
    ],
    res: ({ missLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      out: missLey ? 'La liquidación te parece correcta. Pero Teodoro no se equivocó: algo falta.' : 'Ahí está, escrito por el propio sistema: «no computable». Un bono pagado seis de seis meses. A Wálter le faltan unos S/ 91 en esta CTS. Y no es la única.',
      flags: missLey ? [] : ['liquidacion_leida'], cartera: { bono: missLey ? 'Liquidación revisada sin hallazgo' : 'Confirmado: el bono regular debía entrar a la CTS' },
      pro: { ok: 'Lees la liquidación contra la norma, línea por línea.', risk: '«Variable» no significa «no computable».', info: 'Las horas extras de dos de seis meses están bien excluidas: la regla corta en los dos sentidos.' },
      kusi: missLey ? ['pensando', 'Mira otra vez qué dice del bono.'] : ['sorpresa', 'Seis de seis… y «no computable».'],
    }),
    rules: [[LEY, 'Lo variable que se percibe al menos tres meses de cada seis es regular y entra a la CTS (D.S. 001-97-TR, art. 16).']],
    mirada: {
      ve: 'El error más común en la CTS no es de aritmética: es de criterio. Un pago «variable» que se recibe todos los meses es regular. El sistema viejo lo marcó como no computable hace dos años y nadie volvió a preguntar.',
      visual: { tipo: 'rango', titulo: 'Meses con bono en el semestre', min: 0, max: 6, banda: [3, 6], marcas: [['Horas extras de Wálter', 2], ['Bono de Wálter', 6]] },
      normas: [{ ley: 'D.S. 001-97-TR, TUO de la Ley de CTS, art. 16', dice: 'Las remuneraciones complementarias variables o imprecisas cumplen la regularidad si se perciben cuando menos tres meses en cada período de seis.', practica: 'Un bono mensual de productividad, aunque varíe, entra promediado a la CTS.' }],
    },
  },
  {
    id: 'd2', t: '09:40', ch: 'sistema', who: null, titulo: '¿Hasta dónde llega?', banner: 'assets/3d/scenes/almacen.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>Mili te pasa la data: el bono existe desde noviembre de 2024. Lo han cobrado 412 personas; 61 ya se fueron. Antes de las once necesitas saber <mark class="clave">qué está afectado</mark>. Tienes tiempo para tres consultas al sistema viejo.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres consultas que corres.', boton: 'Correr consultas', resumen: 'Consultaste',
    cols: ['Consulta', 'Para qué sirve'],
    rows: [
      { id: 'cts', cells: ['Depósitos de CTS desde mayo de 2025', 'Cuatro depósitos con el bono fuera de la base'] },
      { id: 'grati', cells: ['Gratificaciones desde julio de 2025', 'Saber cuáles cumplían la regularidad'] },
      { id: 'cesados', cells: ['Liquidaciones de los 61 cesados', 'Su CTS y gratificación trunca también salieron sin bono'] },
      { id: 'dic24', cells: ['Gratificación de diciembre de 2024', 'El bono solo se pagó noviembre y diciembre'] },
      { id: 'resto', cells: ['Bonos de los empleados administrativos', 'No tienen bono de productividad'] },
      { id: 'jefes', cells: ['Quién configuró el bono en 2024', 'Para saber a quién culpar'] },
    ],
    score: { cts: 3, grati: 3, cesados: 3, dic24: 1, resto: -1, jefes: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: picks.includes('cesados') ? 3 : -1, etica: picks.includes('jefes') ? -2 : 0 },
        flags: [q === 'buena' ? 'alcance_medido' : 'alcance_vago'], cartera: { bono: q === 'buena' ? '412 personas · 4 CTS · 3 gratificaciones · ~S/ 404,000' : 'Alcance incompleto' },
        out: q === 'buena' ? 'A las once tienes el mapa: cuatro depósitos de CTS (mayo y noviembre de 2025 y de 2026), tres gratificaciones (julio y diciembre de 2025, julio de 2026) y 61 liquidaciones. Estimado: unos S/ 404,000, más los intereses de la CTS.' : picks.includes('jefes') ? 'Averiguas que el bono lo configuró un analista que ya no trabaja aquí. Saberlo no cambia cuánto se debe.' : 'Tienes parte del mapa. Te faltan los cesados o las gratificaciones.',
        pro: { ok: 'Mides el error por beneficio y por persona, incluidos quienes ya se fueron.', risk: 'Los cesados se olvidan fácil: también se les debe.', info: 'Diciembre de 2024 probablemente no está afectado: el bono solo se pagó dos meses en ese semestre.' },
        kusi: [q === 'buena' ? 'sorpresa' : 'pensando', q === 'buena' ? 'Cuatrocientos mil soles. Respira.' : '¿Y los que ya no están?'],
      };
    },
    mirada: {
      ve: 'Medir el alcance de un error es separar qué beneficios toca, en qué períodos y a quiénes. Los trabajadores cesados son los primeros que se olvidan, y los primeros que reclaman con abogado.',
      visual: { tipo: 'linea', titulo: 'Lo que el bono dejó afuera', hitos: [['Nov 2024', 'Empieza el bono'], ['May 2025', 'CTS'], ['Jul 2025', 'Gratificación'], ['Nov 2025', 'CTS'], ['Dic 2025', 'Gratificación'], ['May 2026', 'CTS'], ['Jul 2026', 'Gratificación'], ['Nov 2026', 'CTS']] },
    },
  },
  {
    id: 'd3', t: '11:15', ch: 'presencial', who: 'consultor', titulo: '«El pasado es del sistema viejo»', banner: 'assets/foto2/tension.webp', lugar: 'Sala de vidrio', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Le muestras el hallazgo a Diego. Se pone pálido y luego práctico: «Configuro el bono como computable en Nómina360 y desde diciembre sale bien. <mark class="clave">Lo de antes es del sistema viejo</mark>; no lo abramos ahora, a una semana de salir en vivo».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Configurarlo bien desde ya y, hoy mismo, reportar el pasado a Patricia con la cifra estimada para un reintegro.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: 1, tiempo: -2 }, rel: { consultor: -1 }, flags: ['error_asumido'], cartera: { bono: 'Computable en Nómina360 · pasado por reportar hoy' },
          out: 'Diego suspira: «Me van a preguntar por qué no lo vi». Le dices que no lo veía nadie hace dos años. Configura el bono como computable antes del almuerzo.',
          pro: { ok: 'Corriges hacia adelante y no escondes lo de atrás.', risk: 'Abres un problema de S/ 400,000 a una semana de la salida en vivo.', info: 'Un error que se reporta a tiempo es una contingencia; uno que se esconde es un pasivo.' },
          kusi: ['animo', 'Duele, pero es lo que corresponde.'] } },
      { id: 'b', label: 'Aceptar la idea de Diego: corregir solo hacia adelante y no remover el pasado durante la migración.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5, tiempo: 2 }, rel: { consultor: 1 }, flags: ['error_tapado'], cartera: { bono: 'Corregido desde diciembre · pasado sin reportar' },
          out: 'Diego configura el bono como computable. En la planilla, desde diciembre todo saldrá bien. Los S/ 404,000 de atrás quedan en silencio. Teodoro sigue esperando tu respuesta de mañana.',
          pro: { ok: 'Proteges el cronograma.', risk: 'Lo que se dejó de pagar sigue debiéndose, y ahora alguien lo sabía y calló.' },
          kusi: ['indignado', '¿Y los 412?'] } },
      { id: 'c', label: 'No tocar nada hasta que Legal emita un informe formal, aunque eso deje el bono como está para la gratificación de diciembre.',
        res: { q: 'aceptable', fx: { etica: 1, cumplimiento: -1 }, flags: ['error_congelado'], cartera: { bono: 'En espera de Legal' },
          out: 'Legal responde a las 2:35 con un criterio claro. Perdiste unas horas, pero ahora tienes respaldo escrito.',
          pro: { ok: 'Buscas respaldo antes de mover algo grande.', risk: 'Esperar sin plazo puede hacer que la gratificación de diciembre salga con el mismo error.' },
          kusi: ['pensando', 'Respaldo sí. Pero con reloj.'] } },
    ],
    rules: [[LEY, 'Los depósitos de CTS se hacen en los primeros 15 días naturales de mayo y noviembre (D.S. 001-97-TR, art. 22).'], [BP, 'Un error de cálculo se corrige hacia adelante y se cuantifica hacia atrás.']],
    mirada: {
      ve: 'La migración es el momento perfecto para encontrar errores antiguos, y también para enterrarlos. Quien firma las planillas responde por lo que sabe. El pasado mal calculado no prescribe porque cambie el sistema.',
      visual: { tipo: 'balanza', a: { t: 'Solo hacia adelante', items: ['Cronograma intacto', 'Nadie pregunta… por ahora'] }, b: { t: 'Adelante y atrás', items: ['412 personas reciben lo suyo', 'La empresa decide con datos', 'Defensa ante una inspección'] } },
    },
  },
  {
    id: 'd4', t: '13:20', ch: 'documento', who: null, titulo: 'El informe del error', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>${F.has('error_tapado') ? 'Aunque decidiste no remover el pasado, Patricia te pide igual un informe del cambio en el bono.' : 'Patricia está en una reunión hasta las cinco. Cuando salga, tu informe tiene que estar listo.'} Lo leerá ella y, probablemente, el gerente de Finanzas. <mark class="clave">Una página.</mark></p>`,
    type: 'builder', prompt: 'Elige las piezas de cada parte del informe.', boton: 'Guardar el informe',
    bloques: [
      { id: 'que', t: 'Qué pasó', n: 2, ops: [
        { id: 'q1', t: 'Desde noviembre de 2024, el bono de productividad se excluyó de la CTS y de las gratificaciones, aunque se paga todos los meses.', ok: true },
        { id: 'q2', t: 'La causa: el concepto se configuró como «no computable» en el sistema anterior y nunca se revisó.', ok: true, por: 'Causa, no culpable.' },
        { id: 'q3', t: 'El analista que lo configuró ya no trabaja en la empresa.', ok: false, por: 'No ayuda a decidir y suena a buscar culpables.' },
      ] },
      { id: 'cuanto', t: 'A quiénes y cuánto', n: 2, ops: [
        { id: 'c1', t: '412 personas (351 activas y 61 cesadas): cuatro depósitos de CTS y tres gratificaciones.', ok: true },
        { id: 'c2', t: 'Estimado: unos S/ 404,000, más intereses de la CTS y la bonificación extraordinaria de la gratificación. Cifra por validar.', ok: true, por: 'Estimado y con su margen.' },
        { id: 'c3', t: 'Un monto pequeño frente a la planilla anual.', ok: false, por: 'Minimizar no es informar.' },
      ] },
      { id: 'prop', t: 'Qué propones', n: 2, ops: [
        { id: 'p1', t: 'Corregido en Nómina360: la gratificación de diciembre ya saldría bien.', ok: true },
        { id: 'p2', t: 'Reintegro del pasado con un cronograma que defina Finanzas, y comunicación al personal y al sindicato.', ok: true },
        { id: 'p3', t: 'Esperar a ver si alguien reclama.', ok: false, por: 'Ya reclamaron.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['informe_claro'] : [], cartera: { informe: q === 'buena' ? 'Informe de una página listo' : 'Informe con huecos' },
        out: q === 'buena' ? 'El informe cabe en una página y no tiene un solo adjetivo de más. Lo imprimes dos veces.' : 'El informe dice mucho, pero no ayuda del todo a decidir.',
        pro: { ok: 'Qué, a quiénes, cuánto y qué hacer. Sin culpables.', risk: 'Minimizar el monto o señalar culpables le quita credibilidad a todo lo demás.', info: 'Di siempre si una cifra es estimada.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Una página que se puede decidir.' : 'Menos adjetivos, más datos.'],
      };
    },
    mirada: {
      ve: 'Un informe de error sirve para decidir, no para defenderse. Separar la causa (una configuración) de las personas evita que la conversación se vaya a buscar culpables en lugar de soluciones.',
      visual: { tipo: 'flujo', titulo: 'El informe', pasos: ['Qué pasó', 'Por qué', 'A quiénes', 'Cuánto', 'Qué propones'] },
    },
  },
  {
    id: 'd5', t: '15:30', ch: 'llamada', who: null, titulo: 'Tres llamadas antes de las cinco', banner: 'assets/foto/llamada.webp', show: ['tiempo', 'confianza', 'cumplimiento'],
    body: () => `<p>Antes de hablar con Patricia, haces tres llamadas para no llegar con la información a medias.</p>`,
    type: 'calls',
    calls: [['Legal', 'Confirma el criterio', 'Ya te mandé el correo: el bono es regular, entra a la CTS y a la gratificación. Cuantifiquen y regularicen.'], ['Contabilidad', 'Pregunta por la provisión', 'Si es un pasivo de 400 mil, tenemos que provisionarlo este mes. Necesito el monto por escrito antes del cierre contable.'], ['Diego', 'Confirma la configuración', 'El bono ya es computable en Nómina360. La gratificación de diciembre sale con promedio. Lo probé con tres casos.']],
    prompt: 'Con lo que escuchaste, ¿qué haces antes de ver a Patricia?',
    choices: [
      { id: 'a', label: 'Agregar al informe el criterio de Legal y la necesidad de provisión de Contabilidad.',
        res: { q: 'buena', fx: { calidad: 3, confianza: 3 }, cartera: { informe: 'Informe con criterio legal y provisión contable' },
          out: 'Tu informe ahora tiene respaldo legal y una consecuencia contable. Ya no es una opinión tuya: es un problema de la empresa con solución.',
          pro: { ok: 'Llegas con el criterio validado y con lo que otras áreas necesitan.', info: 'Contabilidad y Tesorería no son el enemigo: necesitan números a tiempo.' },
          kusi: ['celebra', 'Tres llamadas, cero sorpresas.'] } },
      { id: 'b', label: 'Ir directo a Patricia: la provisión es tema de Contabilidad, no tuyo.',
        res: { q: 'aceptable', fx: { tiempo: 1, confianza: -1 },
          out: 'Patricia lee el informe y pregunta: «¿Contabilidad ya sabe?». No lo pusiste.',
          pro: { ok: 'Ahorras tiempo.', risk: 'Un error de este tamaño toca otras áreas: incluirlas en el informe evita que se enteren tarde.' },
          kusi: ['pensando', '¿Y la provisión?'] } },
    ],
    mirada: { ve: 'Un error de planillas no es solo de Planillas: tiene efecto legal, contable y de caja. Llamar antes de escalar convierte un hallazgo en un caso listo para decidir.' },
  },
  {
    id: 'd6', t: '17:10', ch: 'presencial', who: 'patricia-g', titulo: 'Decírselo a Patricia', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala de vidrio, con la puerta cerrada', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>Patricia sale de su reunión con cara de cansancio. ${F.has('error_tapado') ? 'Le muestras el cambio en el bono. Al ver las fechas, pregunta: «¿Y desde cuándo está mal?».' : 'Le entregas la hoja. La lee dos veces.'}</p><p>«Esto pasó con mi firma en cada planilla. <mark class="clave">¿Cómo quieres que lo llevemos mañana a Finanzas?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Proponerle presentarlo juntas: tú explicas el cálculo, ella la decisión. Y responderle a Teodoro el viernes como prometiste.',
        res: { q: 'buena', fx: { confianza: 5, personas: 2, etica: 2 }, rel: { 'patricia-g': 1 }, flags: ['patricia_aliada'],
          out: 'Patricia asiente: «Es un error del área, no tuyo. Y gracias por encontrarlo antes de que lo encuentre otro». Mañana a las diez, Finanzas.',
          pro: { ok: 'Repartes roles según lo que cada una sabe y cuidas tu compromiso con el sindicato.', info: 'A Teodoro puedes decirle que encontraste algo y que la empresa lo está cuantificando, sin dar cifras aún.' },
          kusi: ['feliz', 'Equipo de verdad.'] } },
      { id: 'b', label: 'Pedirle que lo presente ella sola: es la jefa y la que firma.',
        res: { q: 'aceptable', fx: { confianza: -1 }, rel: { 'patricia-g': 0 },
          out: 'Patricia acepta, pero te pide que estés en la sala por si hay preguntas técnicas. Habrá.',
          pro: { ok: 'Respetas que la decisión es de la jefatura.', risk: 'Quien encontró el error y lo calculó es quien mejor lo explica.' },
          kusi: ['pensando', 'Mañana te van a preguntar a ti igual.'] } },
    ],
    mirada: { ve: 'Cuando un error lleva la firma de tu jefa, la forma de contárselo importa tanto como el contenido: con datos, sin culpas y con una propuesta. Las buenas jefaturas agradecen que el error lo encuentre su equipo y no un inspector.' },
  },
];
