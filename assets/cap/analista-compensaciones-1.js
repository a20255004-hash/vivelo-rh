// Analista de Compensaciones y Beneficios · Capítulo 1 · «La revisión anual» · Semana 1, lunes.
// Hilo del mes: repartir un presupuesto de incremento del 4 % con equidad en una empresa de telecomunicaciones.
// Normas citadas: Ley 30709 (prohíbe la discriminación remunerativa entre varones y mujeres; cuadro de categorías y
// funciones) y su reglamento, D.S. 002-2018-TR; Ley 30367 (protección frente al despido y trato por maternidad).

export const CAP = {
  n: 1, titulo: 'La revisión anual', dia: 'Semana 1, lunes', foto: 'assets/foto2/tablet-equipo.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:30', fin: '19:30', cierreHora: '19:10',
  apertura: 'San Isidro, piso 9 de AndesTel. Hoy empiezas como analista de Compensaciones y es temporada de revisión salarial.', boton: 'Entrar a Compensaciones',
  kusi: 'Aquí los números hablan de justicia. ¡Ojo con cada decimal!',
  lead: 'Entendiste cómo se hace una revisión salarial, calculaste tu primer compa-ratio, limpiaste una política que discriminaba y no cediste a un aumento por presión.',
  reflexion: '¿Qué te parece más difícil: hacer el cálculo o explicar por qué alguien gana lo que gana?',
  siguiente: { n: 2, titulo: 'La encuesta', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'revision', p: 'Revisión salarial anual', j: 'Gustavo · Compensaciones', d: 0, e: 'Presupuesto: 4 %' },
  { id: 'politica', p: 'Política de incrementos', j: 'Fiorella · Gestión Humana', d: 0, e: 'Borrador de 2025' },
  { id: 'claudia', p: 'Caso Claudia Puma', j: 'Renzo · Tecnología', d: 0, e: 'Debajo de su banda' },
  { id: 'cuadro', p: 'Cuadro de categorías y funciones', j: 'Gustavo · Compensaciones', d: 0, e: 'Actualización pendiente' },
];

export const FUTURO = {
  politica_limpia: ['La política ya no castiga a quienes tuvieron licencia de maternidad.', 'Fiorella lo defenderá ante el comité en el capítulo 9.'],
  politica_sucia: ['La política sigue excluyendo a las mujeres con licencia de maternidad.', 'Una ingeniera lo descubrirá en el capítulo 5.'],
  renzo_criterio: ['No aprobaste el 20 % para el favorito de Renzo sin mirar la equidad.', 'Renzo volverá con más presión en el capítulo 6.'],
  renzo_cede: ['Aprobaste un 20 % sin criterio para un ingeniero que amenazó con irse.', 'Claudia se enterará en el capítulo 5.'],
  compa_bien: ['Calculaste bien el compa-ratio de Claudia.', 'Será la base del capítulo 2.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
};

export const WSP = [
  { chat: 'grupo', t: '08:32', de: 'Gustavo', txt: 'Bienvenida. Te comparto «REVISIÓN_FINAL_v7». Spoiler: no es la final 😅' },
  { chat: 'renzo', t: '13:40', de: 'Renzo', txt: 'Hola, ¿tienes 10 minutos? Tengo un caso urgente de un ingeniero que se me va.' },
  { chat: 'gustavo', t: '15:20', de: 'Gustavo', txt: 'Bien con Renzo. Los casos por presión se ven con todos los datos, no en el pasillo 👌', si: 'renzo_criterio' },
  { chat: 'fiorella', t: '17:45', de: 'Fiorella', txt: 'Gracias por lo de la política. Eso nos habría explotado. Mañana lo conversamos.', si: 'politica_limpia' },
];

export const CORREOS = [
  { t: '08:40', de: 'Gustavo Herrera', para: 'Analista de Compensaciones', asunto: 'Revisión salarial 2027', html: '<p>Bienvenida. Este mes cerramos la revisión salarial: el directorio aprobó un presupuesto del <b>4 % de la planilla</b>.</p><p>Nuestro trabajo es que ese 4 % se reparta con criterio: mercado, desempeño y equidad. Y que cada gerente pueda explicar a su gente por qué recibió lo que recibió.</p><p>Gustavo</p>' },
];

export const QUIZ = [
  { q: '¿Qué ley prohíbe la discriminación remunerativa entre varones y mujeres?', ops: ['Ley 30709', 'Ley 29783', 'Ley 26790', 'Ley 31110'], ok: 0, por: 'La Ley 30709 y su reglamento, el D.S. 002-2018-TR, prohíben la discriminación remunerativa y exigen un cuadro de categorías y funciones.' },
  { q: 'Si alguien gana S/ 6,000 y el punto medio de su banda es S/ 7,500, su compa-ratio es…', ops: ['1.25', '0.80', '0.75', '1.00'], ok: 1, por: '6,000 ÷ 7,500 = 0.80: está por debajo del punto medio.' },
  { q: 'Excluir del incremento a quien tuvo licencia de maternidad…', ops: ['Es una práctica común y válida', 'Es discriminatorio', 'Depende del gerente', 'Solo se puede si el presupuesto es bajo'], ok: 1, por: 'Castigar la maternidad en la remuneración es discriminación.' },
  { q: 'Un buen criterio para repartir un presupuesto de incremento combina…', ops: ['Antigüedad y simpatía', 'Posición frente al mercado, desempeño y equidad interna', 'Solo quién amenaza con irse', 'Un porcentaje igual para todos'], ok: 1, por: 'Así se corrigen brechas y se premia el desempeño con reglas explicables.' },
  { q: '¿Qué es el cuadro de categorías y funciones?', ops: ['El organigrama', 'La agrupación de puestos según su valor, base para pagar igual por trabajo de igual valor', 'La lista de cumpleaños', 'El presupuesto anual'], ok: 1, por: 'Es una obligación de la Ley 30709 y sostiene la equidad salarial.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'x1', t: '08:50', ch: 'presencial', who: 'gustavo', titulo: 'Cómo se reparte un 4 %', banner: 'assets/esc/planilla.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Gustavo tiene dos pantallas: en una, la planilla de 1,200 personas; en la otra, una encuesta de mercado de 300 páginas.</p><p>«Antes de tocar un número, quiero que tengas el proceso en la cabeza. <mark class="clave">Ordénalo como lo haríamos este mes</mark>.»</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de una revisión salarial anual.', boton: 'Mostrarle el orden a Gustavo',
    items: [
      { id: 'pres', t: 'Recibir el presupuesto aprobado por el directorio', por: 'El 4 % es el límite de todo lo demás.' },
      { id: 'merc', t: 'Comparar los sueldos con la encuesta de mercado', por: 'Saber quién está debajo, en o sobre el mercado.' },
      { id: 'band', t: 'Ubicar a cada persona en su banda y calcular su compa-ratio', por: 'Equidad interna: ¿quién gana menos por el mismo valor?' },
      { id: 'crit', t: 'Definir la matriz de incrementos: desempeño y posición en la banda', por: 'Reglas iguales para todos.' },
      { id: 'prop', t: 'Revisar las propuestas de cada gerencia', por: 'Los gerentes proponen dentro de las reglas.' },
      { id: 'com', t: 'Aprobar y comunicar a cada persona, con sus razones', por: 'Un aumento sin explicación no motiva.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { gustavo: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Gustavo asiente: «Y lo más difícil es el último paso. Explicarle a alguien por qué recibió 2 % y su compañero 6 %».' : 'Gustavo mueve una tarjeta: «Si los gerentes proponen antes de tener reglas, cada uno reparte a su manera».',
        pro: { ok: 'Las reglas se fijan antes de que los gerentes propongan.', info: 'Pregunta qué encuesta de mercado usa la empresa y de qué año es.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Proceso claro!' : 'Primero las reglas.'],
      };
    },
    rules: [[BP, 'En una revisión salarial, las reglas se definen antes de recibir las propuestas.']],
    mirada: {
      ve: 'Una revisión salarial no es repartir dinero: es decidir, con reglas, quién está mal pagado y quién rinde más. Sin reglas, gana el gerente que más presiona.',
      visual: { tipo: 'flujo', titulo: 'La revisión salarial', pasos: ['Presupuesto', 'Mercado', 'Bandas', 'Matriz', 'Propuestas', 'Comunicación'] },
    },
  },
  {
    id: 'x2', t: '10:15', ch: 'documento', who: null, titulo: 'Tu primer compa-ratio', banner: 'assets/esc/cerebro.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Gustavo te pide un ejemplo con un caso real. Claudia Puma, ingeniera de redes con seis años en la empresa, gana <mark class="clave">S/ 6,000</mark>. La banda de su puesto va de S/ 6,000 a S/ 9,000, con punto medio en S/ 7,500.</p><p>«¿Cuál es su compa-ratio y qué significa?»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: '0.80: gana el 80 % del punto medio; está en el mínimo de su banda.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 3 }, flags: ['compa_bien'], cartera: { claudia: 'Compa-ratio 0.80: en el mínimo de su banda' },
          out: 'Gustavo sonríe: «Y su evaluación de desempeño es de las mejores del área. Ahí tienes tu primer caso de inequidad».',
          pro: { ok: '6,000 ÷ 7,500 = 0.80. Un compa-ratio bajo con buen desempeño suele merecer más incremento.', info: 'Revisa cuánto ganan sus pares hombres y mujeres en el mismo puesto.' },
          kusi: ['celebra', '¡Cálculo perfecto!'] } },
      { id: 'b', label: '1.25: gana más de lo que debería.',
        res: { q: 'riesgosa', fx: { calidad: -3 },
          out: 'Gustavo te corrige con calma: «Al revés. 7,500 entre 6,000 es 1.25. Pero el compa-ratio es sueldo entre punto medio».',
          pro: { risk: 'Invertir la fórmula lleva a la conclusión opuesta.' }, kusi: ['sorpresa', '¡Al revés!'] } },
      { id: 'c', label: '0.67: está fuera de su banda.',
        res: { q: 'aceptable', fx: { calidad: -1 },
          out: 'Gustavo niega: «Dividiste entre el máximo. Está justo en el mínimo, no fuera».',
          pro: { risk: 'El compa-ratio se calcula contra el punto medio, no contra el máximo.' }, kusi: ['pensando', 'Casi: contra el punto medio.'] } },
    ],
    rules: [[BP, 'Compa-ratio = sueldo ÷ punto medio de la banda.']],
    mirada: {
      ve: 'El compa-ratio es la herramienta más simple para ver la equidad: dice cuánto se acerca alguien al valor de referencia de su puesto. Con él, una sensación («la pagan poco») se vuelve un dato.',
      visual: { tipo: 'rango', titulo: 'La banda del puesto de Claudia (S/ mensuales)', min: 5500, max: 9500, banda: [6000, 9000], marcas: [['Claudia', 6000], ['Punto medio', 7500], ['Diego', 7800]] },
    },
  },
  {
    id: 'x3', t: '11:40', ch: 'documento', who: null, titulo: 'La política de 2025', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Fiorella te pide revisar la política de incrementos antes de enviarla a los gerentes. <mark class="clave">«Que no tenga nada que nos pueda costar caro»</mark>, dice su correo.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple la ley o debería corregirse.',
    doc: { t: 'Política de incrementos salariales', sub: 'AndesTel S.A. · borrador 2025' },
    lines: [
      { id: 'mat', t: 'Las colaboradoras que tuvieron licencia de maternidad durante el año no participan del incremento por desempeño.', bad: LEY, why: 'Castigar la maternidad en la remuneración es discriminación. La Ley 30709 prohíbe la discriminación remunerativa entre varones y mujeres.' },
      { id: 'igual', t: 'Todos los colaboradores recibirán el mismo 4 %.', bad: BP, why: 'Un porcentaje igual mantiene las brechas existentes y no distingue desempeño.' },
      { id: 'libre', t: 'Cada gerente decide los porcentajes según su criterio, sin límites.', bad: BP, why: 'Sin reglas comunes, el aumento depende de quién presiona más.' },
      { id: 'matriz', t: 'Los incrementos se definen con una matriz de desempeño y posición en la banda.' },
      { id: 'cuadro', t: 'Los puestos se agrupan según el cuadro de categorías y funciones vigente.' },
      { id: 'contraof', t: 'Quien presente una oferta de otra empresa recibirá un incremento igual a esa oferta.', bad: BP, why: 'Premia la amenaza, no el valor del puesto ni el desempeño, y crea inequidad.' },
      { id: 'comunica', t: 'Cada persona será informada de su incremento y sus razones por su jefe.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'La política sale a los gerentes con una cláusula que excluye a las madres. Nadie la objeta… todavía.' : `Le marcas ${hitsLey} cláusulas a Fiorella. Ella resalta la de maternidad en rojo: «Esto no puede salir nunca más».`,
      flags: [missLey ? 'politica_sucia' : 'politica_limpia'], rel: { fiorella: missLey ? 0 : 1 },
      cartera: { politica: missLey ? 'Enviada sin cambios' : 'Corregida antes de enviar' },
      pro: { ok: 'Una política clara y sin sesgos protege a las personas y a la empresa.', risk: 'Una cláusula discriminatoria escrita es una prueba en cualquier reclamo.', info: 'Revisa si las mujeres de cada categoría ganan en promedio lo mismo que los hombres.' },
      kusi: missLey ? ['indignado', 'Esa cláusula castigaba a las mamás…'] : ['celebra', '¡Equidad defendida!'],
    }),
    rules: [[LEY, 'Ley 30709 y D.S. 002-2018-TR: prohibición de discriminación remunerativa y obligación de un cuadro de categorías y funciones.']],
    mirada: {
      ve: 'La discriminación salarial casi nunca dice «a las mujeres les pagamos menos». Se esconde en reglas aparentemente neutrales: excluir licencias, premiar contraofertas o dejar todo al criterio de cada jefe.',
      visual: { tipo: 'cambio', titulo: 'De la política 2025 a una política equitativa', pares: [['Sin incremento si hubo licencia de maternidad', 'La licencia no reduce el incremento'], ['4 % igual para todos', 'Matriz de desempeño y banda'], ['Igualar contraofertas', 'Revisar con datos de mercado y equidad']] },
      normas: [{ ley: 'Ley 30709 y su reglamento, D.S. 002-2018-TR', dice: 'Prohíbe la discriminación remunerativa entre varones y mujeres y obliga a contar con un cuadro de categorías y funciones.', practica: 'Excluir a quien tuvo licencia de maternidad afecta casi solo a mujeres.' }],
    },
  },
  {
    id: 'x4', t: '14:00', ch: 'presencial', who: 'renzo', titulo: '«Se me va»', banner: 'assets/foto/frente-a-frente.webp', show: ['etica', 'confianza', 'calidad'],
    body: () => `<p>Renzo, gerente de Tecnología, entra con el celular en la mano.</p><p>«Diego, mi mejor ingeniero de redes, tiene una oferta. Necesito darle <mark class="clave">un 20 % hoy mismo</mark>, si no se va. Sácalo de donde sea.»</p><p>Revisas: Diego gana S/ 7,800 y su evaluación es «cumple». Claudia, en el mismo puesto y con mejor evaluación, gana S/ 6,000.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrarle los datos de Diego y de Claudia, y proponerle revisar ambos casos con la matriz esta semana.',
        res: { q: 'buena', fx: { etica: 5, calidad: 4, confianza: -1 }, rel: { renzo: -1 }, flags: ['renzo_criterio'], cartera: { claudia: 'Caso Claudia en revisión con Renzo' },
          out: 'Renzo mira las cifras en silencio. «No sabía que Claudia ganaba eso.» No te agradece, pero agenda la reunión.',
          pro: { ok: 'Respondes a la presión con datos y pones la equidad en la mesa.', risk: 'Diego podría irse mientras se revisa.', info: 'Pregunta qué ofrece la otra empresa además del sueldo.' },
          kusi: ['animo', 'Los datos cambiaron la conversación.'] } },
      { id: 'b', label: 'Aprobar el 20 %: es el gerente, conoce a su equipo, y perder a un buen ingeniero cuesta más que el aumento.',
        res: { q: 'riesgosa', fx: { etica: -4, calidad: -4 }, rel: { renzo: 1 }, flags: ['renzo_cede'],
          out: 'Diego pasará a ganar S/ 9,360. Claudia, con mejor evaluación, seguirá en S/ 6,000. La brecha ahora es de más de S/ 3,000.',
          pro: { ok: 'Retienes a Diego hoy.', risk: 'Premias la amenaza y agrandas una brecha entre un hombre y una mujer en el mismo puesto.' },
          kusi: ['preocupado', '¿Y Claudia?'] } },
    ],
    rules: [[BP, 'Las contraofertas se revisan con datos de mercado, desempeño y equidad, no solo con la urgencia.']],
    mirada: {
      ve: 'Las presiones de retención son parte del trabajo de compensaciones. Ceder sin mirar el resto del equipo arregla un problema y crea otro, a veces más grande y más difícil de explicar.',
      visual: { tipo: 'balanza', a: { t: '20 % para Diego hoy', items: ['Retención inmediata', 'Renzo contento'] }, b: { t: 'Revisar con la matriz', items: ['Equidad con Claudia', 'Reglas iguales para todos', 'Decisión que se puede explicar'] } },
    },
  },
  {
    id: 'x5', t: '16:30', ch: 'documento', who: null, titulo: 'Dónde poner el 4 %', banner: 'assets/esc/decide.webp', show: ['calidad', 'etica', 'personas'],
    body: () => `<p>Gustavo te pide una primera propuesta: con el 4 % no alcanza para todo. ¿Qué <mark class="clave">dos prioridades</mark> pondrías en la matriz?</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos prioridades para repartir el presupuesto.', boton: 'Proponer estas prioridades', resumen: 'Priorizaste',
    cols: ['Prioridad', 'Qué corrige'],
    rows: [
      { id: 'bajo', cells: ['Personas con buen desempeño y compa-ratio bajo', 'Inequidad interna'] },
      { id: 'tecnicos', cells: ['Técnicos de campo, 25 % por debajo del mercado', 'Rotación de técnicos'] },
      { id: 'gerentes', cells: ['Gerentes, para mantener la diferencia jerárquica', 'Jerarquía'] },
      { id: 'todos', cells: ['Repartir un poco a todos para que nadie se queje', 'Clima del momento'] },
      { id: 'antig', cells: ['Quienes tienen más de 10 años', 'Lealtad'] },
    ],
    score: { bajo: 3, tecnicos: 3, gerentes: -1, todos: -1, antig: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.includes('bajo') ? 3 : 0, personas: picks.includes('tecnicos') ? 3 : 0 },
        cartera: { revision: q === 'buena' ? 'Propuesta: equidad y técnicos de campo' : 'Propuesta sin foco claro' },
        out: q === 'buena' ? 'Gustavo hace los números: con esas dos prioridades se usa el 3.2 % y queda un 0.8 % para desempeño sobresaliente. «Defendible», dice.' : 'Gustavo lo mira: «Si repartimos a todos, en un año seguimos con las mismas brechas».',
        pro: { ok: 'Atacas las brechas que más daño hacen: inequidad interna y rotación.', info: 'Simula siempre cuánto cuesta cada prioridad antes de proponerla.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Presupuesto con propósito.' : 'Un poco a todos no cambia nada.'],
      };
    },
    rules: [[BP, 'Usa el presupuesto para corregir brechas de mercado y de equidad, no para repartir igual.']],
    mirada: {
      ve: 'Con poco presupuesto, repartir igual parece justo, pero perpetúa las injusticias que ya existen. Una buena analista de compensaciones usa el dinero para corregir donde más duele.',
      visual: { tipo: 'embudo', titulo: 'Cómo se usa el 4 %', niveles: [['Presupuesto total', 4], ['Equidad interna', 1.8], ['Técnicos bajo mercado', 1.4], ['Desempeño sobresaliente', 0.8]] },
    },
  },
  {
    id: 'x6', t: '19:00', ch: 'correo', who: null, titulo: 'Para Gustavo', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Gustavo Herrera', to: 'Analista de Compensaciones', asunto: 'Cierre del día' },
    body: () => `<p>Dime en tres líneas <mark class="clave">qué encontraste hoy que el comité deba saber</mark>.</p><p>G.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'La cláusula de maternidad, el caso Claudia-Diego y la propuesta de prioridades.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { gustavo: 1 }, responde: 'Gustavo: 1) La política 2025 excluía del incremento a quienes tuvieron licencia de maternidad; ya se corrigió. 2) Claudia Puma (compa-ratio 0.80, desempeño destacado) gana S/ 1,800 menos que un par con menor desempeño. 3) Propongo priorizar equidad interna y técnicos de campo: usan 3.2 % del 4 %.',
          out: 'Gustavo responde: «Esto va tal cual al comité. Bienvenida de verdad».', kusi: ['celebra', '¡Tres líneas que cambian una revisión!'] } },
      { id: 'b', label: 'Que avanzaste con el Excel y mañana sigues.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Gustavo: avancé con el Excel, mañana sigo 👍',
          out: 'Gustavo responde «ok». Lo importante quedó en tu cabeza, no en la mesa del comité.', kusi: ['pensando', 'Lo importante no llegó al comité.'] } },
    ],
    mirada: { ve: 'En compensaciones, el valor no está en el Excel sino en los hallazgos que cambian decisiones: una brecha, una regla injusta, una prioridad.' },
  },
];
