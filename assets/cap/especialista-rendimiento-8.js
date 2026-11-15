// Analista de Gestión del Desempeño · Capítulo 8 · «Los bonos» · Semana 2, miércoles.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas citadas (textos oficiales en docs/normas/txt; SPIJ: https://spij.minjus.gob.pe):
// - Ley 30709, arts. 1 y 3: igual remuneración por igual trabajo; las remuneraciones se fijan sin discriminación.
// - Constitución, art. 26 inc. 1 (ya citada).
// - D.S. 003-97-TR, art. 30 g): actos de hostilidad, «todos aquellos que afecten la dignidad del trabajador».
// Los montos del bono y del presupuesto son de la empresa ficticia. No se afirma aquí la naturaleza remunerativa
// o no del bono: es un tema que la empresa debe revisar con Legal y no se resuelve con una cifra inventada.

export const CAP = {
  n: 8, titulo: 'Los bonos', dia: 'Semana 2, miércoles', foto: 'assets/foto2/celebra-laptop.webp',
  lugar: 'Alimentos Lima S.A. · Ventas, Compensaciones y Finanzas',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Miércoles. A las 9:00, Alberto le da a Andrés su retroalimentación. A las 14:30, Finanzas quiere saber por qué los bonos no cuadran. Entre una cosa y otra, Mónica no ha soltado la calculadora.', boton: 'Subir a Ventas',
  kusi: 'Hoy la evaluación se convierte en plata. Y la plata lo pone todo a prueba.',
  lead: 'Observaste la conversación más tensa de la semana, buscaste con Mónica cómo cerrar la brecha sin castigar a nadie por estar bien evaluado, y le explicaste a Finanzas que una evaluación honesta también cuesta.',
  reflexion: '¿Qué debería ceder primero cuando el presupuesto no alcanza: la nota o el dinero?',
  siguiente: { n: 9, titulo: 'El nuevo formato', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'andres', p: 'Retroalimentación de Andrés', j: 'Alberto Sáenz', d: 0, e: 'Hoy 9:00' },
  { id: 'bonos', p: 'Presupuesto de bonos', j: 'Mónica · Finanzas', d: 0, e: 'Pasados en S/ 640,000' },
  { id: 'finanzas', p: 'Reunión con Finanzas', j: 'Giancarlo Ferreyra', d: 0, e: 'Hoy 14:30' },
  { id: 'licencias', p: 'Madres que volvieron de licencia', j: 'Talento', d: 0, e: 'Notas recalculadas' },
  { id: 'formato', p: 'Formato nuevo', j: 'Talento', d: 0, e: 'Mañana a gerencia' },
];

export const FUTURO = {
  reunion_andres_bien: ['La conversación entre Alberto y Andrés terminó con un acuerdo concreto.', 'No son amigos, pero pueden trabajar juntos.'],
  reunion_andres_mal: ['La conversación entre Alberto y Andrés terminó mal.', 'Andrés pidió una reunión con Paola.'],
  palancas_justas: ['Cerraste la brecha sin bajar notas ni tocar a las madres recalculadas.', 'Finanzas tiene una propuesta que puede aprobar.'],
  palancas_injustas: ['Propusiste cerrar la brecha bajando notas o recortando a quien no debías.', 'La evaluación perdió parte de lo que ganó el viernes.'],
  finanzas_confia: ['Giancarlo aprobó la propuesta y pidió el nuevo formato para el próximo ciclo.', 'Finanzas es ahora tu aliada.'],
  finanzas_recorte: ['Aceptaste un recorte parejo del bono.', 'Los sobresalientes cobrarán menos de lo prometido.'],
  gerentes_avisados: ['Avisaste a los gerentes de los cambios en bonos antes de la planilla.', 'Nadie se enterará por su boleta.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  monica: { n: 'Mónica Quispe', sub: 'Analista de Compensaciones', c: '#7B4B94' },
  giancarlo: { n: 'Giancarlo Ferreyra', sub: 'Gerente de Finanzas', c: '#2B6CB0' },
};

export const WSP = [
  { chat: 'talento', t: '08:35', de: 'Mónica', txt: 'Buenos días. Con la calibración, el ajuste de las 14 madres y todo: nos pasamos 640 mil. Traje turrones de Doña Pepa por si lloramos 🍬' },
  { chat: 'andres', t: '08:50', de: 'Andrés', txt: 'Ya estoy afuera de la sala. Un poco nervioso, la verdad.' },
  { chat: 'alberto', t: '10:05', de: 'Alberto', txt: 'Salió mejor de lo que pensaba. No le digas a nadie que dije eso.', si: 'reunion_andres_bien' },
  { chat: 'andres', t: '10:20', de: 'Andrés', txt: 'Gracias por estar ahí. Por primera vez en el año pudimos hablar.', si: 'reunion_andres_bien' },
  { chat: 'giancarlo', t: '16:10', de: 'Giancarlo', txt: 'Buena reunión. El año que viene quiero el presupuesto de bonos amarrado a la distribución calibrada desde el inicio.', si: 'finanzas_confia' },
  { chat: 'paola', t: '18:30', de: 'Paola', txt: 'Mañana presentas el formato nuevo. Hoy ganaste a Finanzas: eso vale más de lo que crees.', si: 'finanzas_confia' },
];

export const CORREOS = [
  { t: '08:40', de: 'Mónica Quispe', para: 'Analista de Gestión del Desempeño', asunto: 'Simulación de bonos · versión 4', html: '<p>Presupuesto aprobado: S/ 4,200,000. Costo con la distribución calibrada (38 % sobresaliente) y las 14 madres recalculadas: S/ 4,840,000. Diferencia: S/ 640,000. El año pasado nadie miró la diferencia y se pagó igual.</p><p>Mónica</p>' },
  { t: '12:00', de: 'Giancarlo Ferreyra', para: 'Paola Ríos; Analista de Gestión del Desempeño', asunto: 'Reunión 14:30 · bonos', html: '<p>Necesito entender por qué el bono supera el presupuesto, y una propuesta. Si no hay propuesta, aplicaré un recorte parejo. Giancarlo</p>' },
];

export const QUIZ = [
  { q: 'El presupuesto de bonos no alcanza. ¿Qué NO debería hacerse?', ops: ['Revisar el bono objetivo del próximo año', 'Bajar notas ya calibradas para que el dinero cuadre', 'Explicar a Finanzas la causa', 'Buscar fuentes como el fondo no usado de otra área'], ok: 1, por: 'Si la nota se baja para cuadrar la plata, la evaluación deja de medir el desempeño.' },
  { q: 'Las 14 madres recalculadas suben el costo. ¿Se puede quitarles el ajuste para ahorrar?', ops: ['Sí, es un ahorro', 'No: el ajuste corrige una desigualdad y el pago debe fijarse sin discriminación', 'Solo a las que no reclamaron', 'Solo si Finanzas lo pide'], ok: 1, por: 'La Ley 30709 exige fijar las remuneraciones sin discriminación; deshacer la corrección reintroduce la desigualdad.' },
  { q: 'Un recorte parejo del bono para todos…', ops: ['Es lo más justo', 'Castiga igual a quien fue bien evaluado y a quien no, y rompe lo comunicado', 'No afecta la confianza', 'Lo exige la ley'], ok: 1, por: 'Es sencillo, pero cambia las reglas después del partido.' },
  { q: 'Observas una conversación de retroalimentación y el jefe empieza a desviarse. Tu rol es…', ops: ['Callarte siempre', 'Intervenir brevemente para volver a los hechos', 'Tomar la conversación', 'Irte'], ok: 1, por: 'La observadora cuida la forma: interviene poco y solo para devolver la conversación a los hechos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '09:00', ch: 'presencial', who: 'gerente', titulo: 'Treinta minutos', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de Ventas, tercer piso', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>${F.has('alberto_preparado') ? 'Te sientas en una esquina, con tu cuaderno, como acordaron.' : F.has('tu_das_nota') ? 'Alberto se sentó en la reunión aunque te pidió que la dieras tú. Al final decidió hablar él.' : 'Alberto te dejó entrar a última hora, «solo para que veas».'} Andrés tiene las manos sobre su carpeta. Alberto no ha tocado su café.</p><p>Escuchas y anotas. Después le darás a Paola tu lectura: <mark class="clave">qué estuvo bien y qué no</mark>.</p>`,
    type: 'flag', prompt: 'Marca las frases de Alberto que dañan la conversación o que no debieron decirse.',
    doc: { t: 'Tus notas de la reunión', sub: 'Alberto Sáenz con Andrés Huerta · 9:00' },
    lines: [
      { id: 'abre', t: '«Andrés, antes de nada: ¿cómo ves tú tu año?»' },
      { id: 'nota', t: '«El comité te puso sobresaliente. Superaste tu meta. Eso es tuyo.»' },
      { id: 'comite', t: '«Yo no estaba de acuerdo, pero bueno, ganaron ellos.»', bad: BP, why: 'Le resta valor a la nota y le dice que su jefe no cree en ella.' },
      { id: 'reunion', t: '«El 14 de setiembre, en la reunión de zona, me contradijiste delante de diez personas. Eso me molestó.»', duda: 'Es un hecho con fecha. Molesta, pero se puede conversar: es justo lo que Alberto quería decir.' },
      { id: 'marzo', t: '«Y lo de marzo: si no te gusta cómo trabajo, la puerta está abierta.»', bad: LEY, why: 'Insinuar la salida por haberse negado a una práctica irregular es una presión que puede leerse como represalia y como acto hostil.' },
      { id: 'acuerdo', t: '«Propongo que si no estás de acuerdo conmigo, me lo digas primero a solas. ¿Te parece?»' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Tus notas dicen «tensa pero bien». La frase de la puerta abierta no quedó marcada.' : `Marcas ${hitsLey} frase grave. Cuando Alberto la dijo, interviniste una sola vez: «Volvamos a la reunión de setiembre». Alberto cerró con su propuesta, y Andrés aceptó.`,
      flags: [missLey ? 'reunion_andres_mal' : 'reunion_andres_bien'],
      cartera: { andres: missLey ? 'Reunión hecha; Andrés pide ver a Paola' : 'Reunión hecha, con acuerdo' },
      pro: { ok: 'La observadora no conduce: devuelve la conversación a los hechos cuando se desvía.', risk: 'Dejar pasar una amenaza velada la vuelve aceptable.', info: 'Lo de marzo sigue abierto en Auditoría. Que la retroalimentación no lo resuelva no significa que se olvide.' },
      kusi: missLey ? ['preocupado', 'Esa frase de la puerta… pesaba.'] : ['feliz', '¡Se dijeron lo difícil y salieron con un acuerdo!'],
    }),
    rules: [[LEY, 'D.S. 003-97-TR, art. 30: son actos de hostilidad, entre otros, los que afectan la dignidad del trabajador.'], [BP, 'La observadora interviene poco y solo para volver a los hechos.']],
    mirada: {
      ve: 'Alberto tenía algo legítimo que decir: lo contradijeron en público. Dicho con fecha y hecho, se vuelve un acuerdo. Mezclado con lo de marzo, se vuelve una amenaza. La diferencia es una frase.',
      visual: { tipo: 'cambio', titulo: 'Lo que Alberto quería decir y cómo decirlo', pares: [['«Ganaron ellos»', '«Esta nota es tuya»'], ['«La puerta está abierta»', '«Dímelo a solas primero»']] },
    },
  },
  {
    id: 'h2', t: '10:40', ch: 'presencial', who: null, titulo: 'Seiscientos cuarenta mil', banner: 'assets/esc/planilla.webp', lugar: 'Escritorio de Mónica', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>Mónica, de Puno, nueve años en Compensaciones, abre su Excel de colores. Entre las dos, un paquete de turrones. «La diferencia es S/ 640,000. Finanzas quiere una propuesta. Tengo seis palancas.»</p><p>«<mark class="clave">Elige tres. Las que puedas defender delante de cualquiera</mark>.»</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres palancas que propondrás.', boton: 'Armar la propuesta', resumen: 'Propusiste',
    cols: ['Palanca', 'Efecto'],
    rows: [
      { id: 'fondo', cells: ['Usar el fondo de incentivos de Ventas que no se pagó este año', 'Cubre unos S/ 280,000'] },
      { id: 'error', cells: ['Mostrar que el presupuesto se armó con 20 % y la empresa calibró 38 % con evidencia', 'Explica la causa: el presupuesto estaba mal planteado'] },
      { id: 'futuro', cells: ['Amarrar el presupuesto del próximo año a la distribución calibrada', 'Evita repetir el problema'] },
      { id: 'bajar', cells: ['Bajar a «cumple» a 60 sobresalientes elegidos por sus gerentes', 'Ahorra unos S/ 250,000'] },
      { id: 'madres', cells: ['Revertir el ajuste de las 14 madres', 'Ahorra unos S/ 45,000'] },
      { id: 'parejo', cells: ['Recorte parejo del 13 % a todos los bonos', 'Cuadra exacto'] },
    ],
    score: { fondo: 3, error: 3, futuro: 3, bajar: -4, madres: -5, parejo: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, etica: picks.includes('madres') || picks.includes('bajar') ? -5 : 3 },
        flags: [q === 'buena' ? 'palancas_justas' : 'palancas_injustas'], cartera: { bonos: q === 'buena' ? 'Propuesta: fondo de Ventas + explicación + regla futura' : 'Propuesta que toca notas o derechos' },
        out: q === 'buena' ? 'Mónica sonríe por primera vez en la semana: «Esto no cuadra exacto, pero se entiende. Y nadie pierde lo que le corresponde».' : picks.includes('madres') ? 'Mónica se detiene: «¿Revertir lo de las madres? Eso lo corregimos ayer porque era discriminatorio». Tienes que cambiar la propuesta.' : 'La propuesta cuadra mejor la plata, pero deshace algo de lo que el comité defendió.',
        pro: { ok: 'Cerrar la brecha con dinero disponible y corregir la regla del presupuesto no toca la justicia de las notas.', risk: 'Bajar notas o deshacer la corrección para ahorrar convierte la evaluación en un trámite de presupuesto.' },
        kusi: [q === 'buena' ? 'celebra' : 'indignado', q === 'buena' ? '¡Plata que cuadra sin trampas!' : 'Eso deshace lo que hiciste ayer…'],
      };
    },
    rules: [[LEY, 'Ley 30709, art. 3: las remuneraciones se fijan sin discriminación.'], [BP, 'Las notas no se ajustan para cuadrar el presupuesto.']],
    mirada: {
      ve: 'El dinero y la nota están conectados, pero no son lo mismo. Si cada vez que falta plata se bajan notas, nadie volverá a creer en la evaluación. El problema real era un presupuesto armado sobre una curva que no existía.',
      visual: { tipo: 'balanza', a: { t: 'Cuadrar bajando notas', items: ['Cuadra exacto', 'Rápido'] }, b: { t: 'Cuadrar con la causa', items: ['Fondo no usado', 'Presupuesto bien planteado', 'Notas intactas'] } },
    },
  },
  {
    id: 'h3', t: '12:10', ch: 'documento', who: null, titulo: 'Una lámina para Giancarlo', banner: 'assets/foto2/presentacion.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Giancarlo Ferreyra, gerente de Finanzas, es famoso por cortar las presentaciones en la lámina dos. Tienes <mark class="clave">una sola lámina</mark> para convencerlo.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la lámina.', boton: 'Guardar la lámina',
    bloques: [
      { id: 'causa', t: 'La causa', n: 1, ops: [
        { id: 'c1', t: 'El presupuesto supuso 20 % de sobresalientes; la calibración, con evidencia, dio 38 %.', ok: true },
        { id: 'c2', t: 'Los gerentes inflaron las notas.', ok: false, por: 'Ya no es cierto: se calibró.' },
      ] },
      { id: 'cifras', t: 'Las cifras', n: 2, ops: [
        { id: 'n1', t: 'Brecha: S/ 640,000; con el fondo de Ventas no usado, baja a S/ 360,000.', ok: true },
        { id: 'n2', t: 'Comparación: el año pasado, con 72 % de sobresalientes, se pagó sin calibrar.', ok: true, por: 'Muestra que este año se gasta mejor.' },
        { id: 'n3', t: 'El bono de cada gerente, uno por uno.', ok: false, por: 'Datos individuales que no ayudan a decidir.' },
      ] },
      { id: 'pide', t: 'Lo que pides', n: 2, ops: [
        { id: 'p1', t: 'Aprobar la diferencia restante este año, como costo de una evaluación creíble.', ok: true },
        { id: 'p2', t: 'Para el próximo ciclo, armar el presupuesto con la distribución calibrada.', ok: true },
        { id: 'p3', t: 'Que Finanzas decida qué notas bajar.', ok: false, por: 'Las notas no son una decisión financiera.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 2 : 0 },
        out: q === 'buena' ? 'Mónica la lee en voz alta, con cronómetro: 40 segundos. «Si Giancarlo no la entiende así, no la entiende nadie.»' : 'La lámina tiene información, pero mezcla datos o pide lo que no corresponde.',
        pro: { ok: 'Causa, cifra y pedido en una lámina: el idioma de Finanzas.', risk: 'Dejar que Finanzas decida notas invierte el proceso.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Cuarenta segundos de pura claridad!' : 'Una lámina, pero ¿la correcta?'],
      };
    },
    mirada: {
      ve: 'Hablar con Finanzas exige otro idioma: causas, cifras y decisiones. Una analista de desempeño que traduce la justicia de un proceso a ese idioma se vuelve indispensable.',
      visual: { tipo: 'embudo', titulo: 'La brecha, paso a paso (miles de S/)', niveles: [['Brecha inicial', 640], ['Con fondo de Ventas', 360]] },
    },
  },
  {
    id: 'h4', t: '14:35', ch: 'presencial', who: 'paola', titulo: 'La reunión con Finanzas', banner: 'assets/3d/scenes/corporativo.webp', lugar: 'Oficina de Finanzas, cuarto piso', show: ['confianza', 'etica', 'calidad'],
    body: (n, F) => `<p>Giancarlo mira tu lámina, se quita los lentes y los limpia con la corbata. ${F.has('palancas_justas') ? '«Entiendo la causa. Me gusta lo del fondo de Ventas.»' : '«Ustedes mismos proponen bajar notas. Entonces, ¿para qué calibraron?»'}</p><p>«Pero me faltan 360 mil. <mark class="clave">Lo más simple es un recorte parejo del 8 % a todos</mark>. Nadie se queja si es igual para todos.» Paola te mira.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicar que el recorte rompe lo comunicado a 1,500 personas y proponer pagar la diferencia este año con la regla nueva desde el próximo.',
        res: { q: 'buena', fx: { confianza: 4, etica: 3 }, rel: { paola: 1 }, flags: ['finanzas_confia'], cartera: { bonos: 'Aprobado: se paga completo', finanzas: 'Giancarlo de acuerdo' },
          out: 'Giancarlo piensa un rato largo. «Si recorto, la próxima calibración nadie la va a tomar en serio. Ok. Lo llevo a Gerencia General. Pero el formato nuevo lo quiero ver.»',
          pro: { ok: 'Defiendes la credibilidad del proceso con un argumento que Finanzas entiende: el costo de no cumplir lo comunicado.', risk: 'La empresa gastará S/ 360,000 más este año.' },
          kusi: ['celebra', '¡Finanzas se convenció!'] } },
      { id: 'b', label: 'Aceptar el 8 % parejo: es justo porque es igual para todos y cierra el tema hoy.',
        res: { q: 'aceptable', fx: { confianza: 1, etica: -2 }, flags: ['finanzas_recorte'], cartera: { bonos: 'Recorte parejo del 8 %' },
          out: 'Se cierra la reunión en diez minutos. Esa tarde, en el comedor, alguien de Planta pregunta: «¿Entonces el bono de sobresaliente ya no es el 100 %?».',
          pro: { ok: 'Cierras el tema rápido.', risk: 'Cambiar la regla después de comunicar las notas golpea la confianza en todo el proceso.' },
          kusi: ['pensando', '«Igual para todos» no siempre es justo.'] } },
      { id: 'c', label: 'Proponer que el recorte se aplique solo a los sobresalientes de Ventas, que fue el área más inflada.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -2 }, rel: { gerente: -1 },
          out: 'Giancarlo anota. Paola te mira sorprendida: «Ventas ya calibró. Ahora los castigaríamos dos veces». La reunión termina sin acuerdo.',
          pro: { ok: 'Apuntas al área que más infló.', risk: 'Castigar a quienes ya fueron calibrados con evidencia es injusto y Alberto lo sabrá en una hora.' },
          kusi: ['preocupado', 'Ventas ya pasó por el comité…'] } },
    ],
    rules: [[POL, 'El porcentaje de bono de cada nota se comunicó al inicio del ciclo.']],
    mirada: {
      ve: 'Finanzas no es el enemigo: cuida que la empresa pueda pagar. Pero un recorte después de comunicar las notas le dice a todos que las reglas pueden cambiar al final. Eso también tiene un costo, aunque no salga en el Excel.',
      visual: { tipo: 'balanza', a: { t: 'Recorte parejo', items: ['Cuadra el presupuesto', 'Rápido'] }, b: { t: 'Pagar y cambiar la regla', items: ['Se cumple lo comunicado', 'El proceso sigue creíble', 'El próximo año cuadra'] } },
    },
  },
  {
    id: 'h5', t: '16:20', ch: 'llamada', who: null, titulo: 'Antes de que lo vean en la boleta', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza', 'tiempo'],
    body: (n, F) => `<p>La planilla de bonos se cierra el viernes. ${F.has('finanzas_recorte') ? 'Con el recorte del 8 %, todos cobrarán menos de lo comunicado.' : 'Con la calibración, 412 personas cobrarán un bono distinto del que esperaban.'} Llamas a los gerentes de las áreas con más cambios.</p>`,
    type: 'calls',
    calls: [['Rafael Tapia · Planta', 'Contesta en la línea', 'Joven, mis operarios ya saben su nota. Lo del bono que se los diga yo, en el cambio de turno.'], ['Carla Bustos · Marketing', 'Contesta: está con Lucía', 'Ya le expliqué a Lucía. ¿Su bono sale completo este mes?'], ['Alberto Sáenz · Ventas', 'Contesta seco', 'Veintidós vendedores bajaron de bono. ¿Quién les explica? ¿Yo?']],
    prompt: 'Alberto tiene 22 vendedores que cobrarán menos. ¿Qué le propones?',
    choices: [
      { id: 'a', label: 'Que cada jefe les explique antes del viernes, con una nota de dos líneas que preparas tú, y que tú estés disponible para dudas.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, tiempo: -2 }, rel: { gerente: 1 }, flags: ['gerentes_avisados'],
          out: 'Alberto acepta la nota de dos líneas. «Por lo menos no se van a enterar por la boleta.» Es lo más parecido a un gracias que te ha dicho.',
          pro: { ok: 'Nadie debería enterarse de un cambio en su dinero por la boleta.', info: 'Para Planta, la nota tiene que funcionar también leída en voz alta.' },
          kusi: ['feliz', 'Que nadie se entere por la boleta. ¡Bacán!'] } },
      { id: 'b', label: 'Que no les diga nada: el bono se explica solo con la nota.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2 },
          out: 'El viernes, veintidós vendedores abren su boleta en el celular. El lunes, la bandeja de Talento tendrá veintidós correos.',
          pro: { ok: 'Ahorras tiempo hoy.', risk: 'Lo que no se explica a tiempo se vuelve reclamo.' },
          kusi: ['preocupado', 'Veintidós sorpresas en la boleta…'] } },
    ],
    rules: [[BP, 'Los cambios en el pago se explican antes de que lleguen a la boleta.']],
    mirada: { ve: 'La evaluación termina en la boleta. Si la boleta es la primera noticia, todo el trabajo de las conversaciones se pierde en un segundo.' },
  },
  {
    id: 'h6', t: '18:05', ch: 'whatsapp', who: null, titulo: 'Para Paola', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la Carretera Central', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Mañana presentas el formato nuevo a la gerencia. Hoy cierras el tema de bonos con Paola. ${F.has('reunion_andres_bien') ? 'Todavía tienes en la cabeza la cara de Andrés al salir: más liviana.' : 'Andrés pidió una reunión con Paola para mañana.'}</p><p>Un mensaje corto, que <mark class="clave">sirva para mañana</mark>.</p>`,
    type: 'compose', enviaA: 'paola', para: 'Para: Paola Ríos · Jefa de Talento', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'bono', t: 'Los bonos', ops: [
        { id: 'b1', t: 'Paola: bonos cerrados con Finanzas. Giancarlo quiere el presupuesto amarrado a la calibración desde el próximo ciclo.', ok: true },
        { id: 'b2', t: 'Paola: lo de bonos ya está, uf.', ok: false, por: 'No dice qué se decidió.' },
      ] },
      { id: 'leccion', t: 'La lección para el formato', ops: [
        { id: 'l1', t: 'Para el formato nuevo: metas al inicio del año, ajustadas por licencias, y anclas por nivel.', ok: true, por: 'Conecta lo de hoy con lo de mañana.' },
        { id: 'l2', t: 'Para el formato nuevo: más factores para que sea más completo.', ok: false, por: 'Más factores no es mejor formato.' },
      ] },
      { id: 'andres', t: 'Lo de Andrés', ops: [
        { id: 'a1', t: 'La reunión de Alberto y Andrés tuvo un momento difícil; te cuento en persona lo que observé.', ok: true, por: 'Lo sensible, en persona.' },
        { id: 'a2', t: 'Alberto casi amenaza a Andrés, te paso el detalle aquí.', ok: false, por: 'Lo delicado no se detalla por WhatsApp.' },
      ] },
    ],
    res: sel => {
      const buenas = ['b1', 'l1', 'a1'].filter(x => Object.values(sel).includes(x)).length, wsp = sel.andres === 'a2';
      const q = wsp ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, etica: wsp ? -2 : 1 }, rel: { paola: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Paola responde: «Mañana a las 8 me cuentas. Y lo del formato: perfecto, ese es el hilo».' : wsp ? 'Paola te llama: «Eso no por chat. Mañana a las 8».' : 'Paola responde con un pulgar.',
        pro: { ok: 'Lo decidido, lo aprendido y lo sensible, cada uno en su canal.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Mañana ya tiene un hilo.' : 'Hay cosas que se dicen en persona.'],
      };
    },
    mirada: { ve: 'Cada problema de esta semana deja una lección para el formato: metas al inicio, ajuste por licencias, anclas claras, presupuesto conectado. Mañana se juntan.' },
  },
];
