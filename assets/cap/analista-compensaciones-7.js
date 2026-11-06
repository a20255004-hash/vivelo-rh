// Analista de Compensaciones y Beneficios · Capítulo 7 · «El simulador» · Semana 2, martes.
// Hilo: armas tres escenarios para repartir el 4 %. Ninguno deja contentos a todos.
// Normas citadas:
// - Ley 30709 y D.S. 002-2018-TR (no discriminación remunerativa; criterios objetivos), ya citadas en capítulos anteriores.
//   El Peruano: https://elperuano.pe/noticia/305005-igualdad-salarial-estas-son-las-reglas-que-deben-considerar-las-empresas-al-determinar-las-remuneraciones
// - Ley 29733, Ley de Protección de Datos Personales (seguridad de los datos):
//   https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011
// Montos de planilla, encuesta y escenarios: ficticios, propios de la empresa del caso.

export const CAP = {
  n: 7, titulo: 'El simulador', dia: 'Semana 2, martes', foto: 'assets/esc/planilla.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:00', fin: '19:30', cierreHora: '19:10',
  apertura: 'Martes. Llegas con dos cafés, como pidió Gustavo. La planilla mensual de AndesTel es de S/ 9.5 millones: el 4 % son S/ 380,000 al mes. Hoy decides, en un Excel, a dónde va cada sol.', boton: 'Abrir el simulador',
  kusi: 'Hoy cada celda es una persona. ¡Fórmulas con corazón y con cabeza!',
  lead: 'Armaste la estructura del simulador, calculaste el efecto en los técnicos, limpiaste fórmulas, cuidaste el archivo, elegiste un escenario y preparaste los anexos del comité.',
  reflexion: 'Si tuvieras que elegir entre cerrar una brecha legal o frenar la rotación, ¿qué elegirías primero y cómo lo explicarías al que espera?',
  siguiente: { n: 8, titulo: 'El comité', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'simulador', p: 'Simulador de incrementos', j: 'Gustavo · Compensaciones', d: 0, e: 'Archivo nuevo' },
  { id: 'tecnicos', p: 'Escenario de técnicos de campo', j: 'Wilber · Operaciones de Campo', d: 0, e: 'Por calcular' },
  { id: 'formulas', p: 'Revisión de fórmulas', j: 'Compensaciones', d: 0, e: 'Heredadas de 2025' },
  { id: 'escenario', p: 'Escenario recomendado', j: 'Fiorella · Gestión Humana', d: 0, e: 'Por elegir' },
];

export const FUTURO = {
  simulador_estructura: ['El simulador separa equidad, mercado, desempeño y reserva.', 'El comité podrá mover un bolsillo sin romper los demás.'],
  formulas_limpias: ['Corregiste las fórmulas heredadas, incluida la que dejaba en cero a quienes tuvieron licencia de maternidad.', 'Las cartas saldrán sin ese error.'],
  formula_maternidad: ['Una fórmula heredada sigue dando 0 % a quienes tuvieron licencia de maternidad.', 'Aparecerá en las cartas.'],
  version_controlada: ['Guardaste el simulador con versiones en la carpeta protegida.', 'Nadie perderá el trabajo antes del comité.'],
  datos_gmail: ['Te enviaste el simulador a tu correo personal.', 'Fiorella lo sabrá por el registro de seguridad.'],
  escenario_equidad: ['Recomendaste el escenario «Equidad primero».', 'Wilber y Renzo querrán más para los suyos en el comité.'],
  escenario_mercado: ['Recomendaste el escenario «Mercado».', 'Fiorella preguntará qué pasa con la brecha de redes.'],
  escenario_desempeno: ['Recomendaste el escenario «Desempeño».', 'Las dos brechas seguirán abiertas.'],
  anexos_solidos: ['Preparaste anexos con fuentes y costos.', 'Te salvarán en la pregunta difícil del comité.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
  wilber: { n: 'Wilber Ccori', sub: 'Jefe de Operaciones de Campo', c: '#F2A900' },
};

export const WSP = [
  { chat: 'grupo', t: '08:02', de: 'Gustavo', txt: 'Archivo: «SIMULADOR_2027_v1.xlsx». Prohibido llamarlo «final» 😅' },
  { chat: 'renzo', t: '09:15', de: 'Renzo', txt: 'Álvaro aceptó liderar el equipo de nube. Se queda. Gracias por lo de ayer.', si: 'excepcion_criterio' },
  { chat: 'renzo', t: '09:15', de: 'Renzo', txt: 'Álvaro firmó. Ahora tengo tres ingenieros pidiendo lo mismo. ¿Qué les digo?', si: 'excepcion_cede' },
  { chat: 'wilber', t: '12:30', de: 'Wilber', txt: 'Ingeniera, ¿cuánto les toca a los técnicos? Aunque sea dígame si es algo o es nada.' },
  { chat: 'fiorella', t: '18:50', de: 'Fiorella', txt: 'Mañana a las 10 es el comité. Gerente general, Finanzas, Renzo y Operaciones. Tú presentas.' },
];

export const CORREOS = [
  { t: '08:30', de: 'Patricia Lozada · Presupuesto', para: 'Compensaciones', asunto: 'Techo del incremento 2027', html: '<p>Confirmo: el techo es 4 % de la planilla mensual, S/ 380,000. Cualquier escenario que pase ese monto no lo podemos registrar.</p><p>Patricia</p>' },
  { t: '14:10', de: 'Fiorella Gamarra', para: 'Analista de Compensaciones', asunto: 'Para el comité', html: '<p>Quiero ver tres escenarios y tu recomendación. Y que me puedas responder sin dudar: ¿qué pasa con la brecha de redes en cada uno?</p><p>F.</p>' },
];

export const QUIZ = [
  { q: 'Si el presupuesto es S/ 380,000 al mes y asignas 1.6 % de la planilla (S/ 152,000) a 380 técnicos, ¿cuánto sube cada uno en promedio?', ops: ['S/ 152', 'S/ 400', 'S/ 800', 'S/ 1,600'], ok: 1, por: '152,000 ÷ 380 = 400.' },
  { q: 'Separar el presupuesto en «bolsillos» (equidad, mercado, desempeño, reserva) sirve para…', ops: ['Complicar el Excel', 'Que cada objetivo tenga su monto y no compitan entre sí sin que nadie lo vea', 'Repartir igual a todos', 'Ocultar montos'], ok: 1, por: 'El comité puede ver y decidir cuánto va a cada objetivo.' },
  { q: 'Una fórmula que da 0 % a quienes tuvieron licencia de maternidad…', ops: ['Es un detalle técnico', 'Es discriminatoria aunque nadie la haya escrito con esa intención', 'Es válida si estaba en 2025', 'Solo afecta a pocas personas'], ok: 1, por: 'El efecto cuenta: castiga la maternidad en la remuneración.' },
  { q: 'El simulador tiene sueldos de 1,200 personas. Para trabajar desde casa, lo correcto es…', ops: ['Mandártelo a tu correo personal', 'Usar la carpeta protegida o la VPN de la empresa', 'Imprimirlo', 'Subirlo a una nube personal'], ok: 1, por: 'Son datos personales: la Ley 29733 exige medidas de seguridad.' },
  { q: 'Al presentar escenarios a un comité, lo mejor es…', ops: ['Mostrar solo el que te gusta', 'Mostrar las opciones, sus costos y tu recomendación con sus razones', 'No recomendar nada', 'Mostrar veinte escenarios'], ok: 1, por: 'El comité decide mejor cuando ve qué gana y qué pierde con cada opción.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '08:20', ch: 'documento', who: 'gustavo', titulo: 'Los bolsillos del 4 %', banner: 'assets/3d/scenes/boleta.webp', lugar: 'Pantalla compartida con Gustavo', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Gustavo conecta su laptop al monitor grande. ${F.has('excepcion_criterio') || F.has('regla_excepciones') ? '«Con la regla de ayer, las excepciones ya tienen su propio bolsillo.»' : '«Primero la estructura; los números después.»'}</p><p>«Arma las pestañas. <mark class="clave">Cada bolsillo tiene que poder moverse sin romper los demás</mark>.»</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada parte del simulador.', boton: 'Crear las pestañas',
    bloques: [
      { id: 'base', t: 'Base de datos', n: 1, ops: [
        { id: 'b1', t: 'Planilla al cierre del mes, con categoría, banda, compa-ratio y desempeño de cada persona.', ok: true, por: 'Todo lo que la matriz necesita, en una fila por persona.' },
        { id: 'b2', t: 'El archivo de 2025 copiado y pegado.', ok: false, por: 'Trae las fórmulas y los errores de 2025.' },
      ] },
      { id: 'bolsillos', t: 'Bolsillos', n: 3, ops: [
        { id: 'k1', t: 'Equidad interna (incluye las brechas de redes)', ok: true },
        { id: 'k2', t: 'Mercado (técnicos de campo)', ok: true },
        { id: 'k3', t: 'Desempeño (matriz por posición en la banda)', ok: true },
        { id: 'k4', t: 'Bolsillo «a criterio del gerente»', ok: false, por: 'Es justo lo que la revisión quiere evitar.' },
      ] },
      { id: 'control', t: 'Control', n: 1, ops: [
        { id: 'c1', t: 'Una celda que suma todo y se pone en rojo si pasa de S/ 380,000.', ok: true, por: 'El techo de Finanzas, visible siempre.' },
        { id: 'c2', t: 'Revisar el total al final.', ok: false, por: 'Al final ya es tarde.' },
      ] },
      { id: 'equidad', t: 'Revisión de equidad', n: 1, ops: [
        { id: 'q1', t: 'Una pestaña que compara el incremento promedio de mujeres y hombres por categoría.', ok: true, por: 'Detectas un sesgo antes de que llegue a las cartas.' },
        { id: 'q2', t: 'No hace falta: la matriz es igual para todos.', ok: false, por: 'Una regla igual puede tener efectos distintos.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, tiempo: q === 'buena' ? 2 : -1 },
        flags: q === 'buena' ? ['simulador_estructura'] : [],
        cartera: { simulador: q === 'buena' ? 'Estructura: base, tres bolsillos, control y equidad' : 'Estructura incompleta' },
        out: q === 'buena' ? 'Gustavo mira las pestañas y asiente: «Así el comité puede preguntar “¿y si le damos más a técnicos?” y respondemos en un clic».' : 'Gustavo frunce el ceño: «Sin control del total vamos a enterarnos del exceso en el comité».',
        pro: { ok: 'Un buen simulador separa objetivos, controla el techo y revisa la equidad del resultado.', info: 'Bloquea las celdas de la base para que nadie la modifique por accidente.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Estructura impecable!' : 'Faltan controles.'],
      };
    },
    rules: [[BP, 'Separa el presupuesto en bolsillos y controla el techo en todo momento.']],
    mirada: {
      ve: 'El simulador no es un Excel cualquiera: es la herramienta con la que el comité va a negociar. Si su estructura es clara, la discusión es sobre prioridades; si no, es sobre fórmulas.',
      visual: { tipo: 'flujo', titulo: 'El simulador', pasos: ['Base', 'Equidad', 'Mercado', 'Desempeño', 'Reserva', 'Control del techo'] },
    },
  },
  {
    id: 'g2', t: '09:40', ch: 'documento', who: null, titulo: 'Lo que le toca a un técnico', banner: 'assets/esc/cerebro.webp', lugar: 'Pestaña «MERCADO_TECNICOS»', show: ['calidad', 'personas'],
    body: (n, F) => `<p>En el primer escenario, los técnicos reciben <mark class="clave">1.6 % de la planilla: S/ 152,000 al mes</mark> para 380 personas. Hoy ganan S/ 2,400 en promedio; el P50 es S/ 3,200${F.has('encuesta_envejecida') ? ', y eso con datos de abril que todavía hay que proyectar' : ''}.</p><p>Wilber te escribió: «Aunque sea dígame si es algo o es nada».</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'S/ 400 por técnico en promedio: pasan de S/ 2,400 a S/ 2,800. Siguen 12.5 % debajo del P50, pero la brecha baja a la mitad.',
        res: { q: 'buena', fx: { calidad: 5, personas: 2 }, cartera: { tecnicos: 'Escenario A: +S/ 400, brecha a la mitad' },
          out: 'Lo pones en una línea para Wilber: «No cierra la brecha, pero la parte a la mitad». Todavía no se lo envías: falta el comité.',
          pro: { ok: '152,000 ÷ 380 = 400. Y traduces el número a lo que significa para cada técnico.', info: 'Calcula cuánto haría falta para llegar al P50 en dos años.' },
          kusi: ['feliz', '¡Número con traducción!'] } },
      { id: 'b', label: 'S/ 800 por técnico: llegan al P50.',
        res: { q: 'riesgosa', fx: { calidad: -4 },
          out: 'Gustavo revisa: «152,000 entre 380 es 400, no 800. Con 800 te comes el 3.2 % del presupuesto».',
          pro: { risk: 'Un error así en el comité destruye la credibilidad del resto del análisis.' }, kusi: ['sorpresa', '¡Revisa esa división!'] } },
      { id: 'c', label: 'Un 1.6 % para cada técnico.',
        res: { q: 'aceptable', fx: { calidad: -1 },
          out: 'Confundes el 1.6 % de la planilla total con el 1.6 % del sueldo de cada técnico. Serían unos S/ 38, no S/ 400.',
          pro: { risk: 'El porcentaje del presupuesto y el porcentaje de incremento individual son cosas distintas.' }, kusi: ['pensando', '¿1.6 % de qué?'] } },
    ],
    rules: [[BP, 'Distingue el porcentaje de la planilla que se asigna a un grupo del porcentaje de incremento que recibe cada persona.']],
    mirada: {
      ve: 'El comité habla en porcentajes de planilla; las personas viven en soles. Una buena analista traduce: «1.6 % de la planilla» es «S/ 400 más al mes para Yesenia».',
      visual: { tipo: 'rango', titulo: 'Técnicos de campo con el escenario A (S/ mensuales)', min: 2000, max: 3600, banda: [2800, 3700], marcas: [['Hoy', 2400], ['Escenario A', 2800], ['P50', 3200]] },
    },
  },
  {
    id: 'g3', t: '11:10', ch: 'documento', who: null, titulo: 'Las fórmulas heredadas', banner: 'assets/esc/lupa.webp', lugar: 'Pestaña «MATRIZ» (copiada del 2025 por alguien)', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Para la matriz de desempeño, alguien del equipo copió las fórmulas de 2025 «para ahorrar tiempo». Antes de confiar en ellas, revisas celda por celda.</p><p>Encuentras comentarios en rojo. <mark class="clave">Algunas fórmulas hacen cosas que nadie decidió</mark>.</p>`,
    type: 'flag', prompt: 'Marca las fórmulas que hay que corregir.',
    doc: { t: 'Matriz de incrementos por desempeño', sub: 'Fórmulas de la pestaña «MATRIZ»' },
    lines: [
      { id: 'mat', t: 'SI(licencia_maternidad="SÍ"; 0; incremento): quienes tuvieron licencia de maternidad reciben 0 %.', bad: LEY, why: 'Aunque la política se corrija, la fórmula seguía aplicando la regla vieja. Castigar la maternidad en la remuneración es discriminación (Ley 30709).' },
      { id: 'compa', t: 'Quien tiene compa-ratio más alto recibe más incremento con el mismo desempeño.', bad: BP, why: 'Al revés: con el mismo desempeño, quien está más abajo en su banda debería recibir más.' },
      { id: 'prac', t: 'Incluye a los practicantes de modalidades formativas en la matriz de remuneraciones.', bad: BP, why: 'Su subvención se rige por otra norma y otro proceso; mezclarlos distorsiona el costo.' },
      { id: 'tope', t: 'Nadie puede superar el máximo de su banda con el incremento.' },
      { id: 'desemp', t: 'Usa la evaluación de desempeño del último año cerrado.' },
      { id: 'redondeo', t: 'Redondea cada incremento al sol más cercano.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Corriges algunas fórmulas. La de la licencia sigue ahí, escondida en la columna Q, devolviendo ceros.' : `Corriges ${hitsLey + hitsBp} fórmulas. La de maternidad le daba 0 % a siete mujeres; ahora reciben lo que les toca según su desempeño.`,
      flags: [missLey ? 'formula_maternidad' : 'formulas_limpias'],
      cartera: { formulas: missLey ? 'Fórmula de maternidad sin corregir' : 'Fórmulas corregidas' },
      pro: { ok: 'Revisar fórmulas heredadas es tan importante como diseñar las nuevas.', risk: 'Una política corregida no sirve si el Excel sigue aplicando la vieja.', info: 'Corre la pestaña de equidad después de cada cambio: ahí se ven estos errores.' },
      kusi: missLey ? ['indignado', 'La regla vieja seguía viva en el Excel…'] : ['celebra', '¡Siete mujeres ya no reciben cero!'],
    }),
    rules: [[LEY, 'Ley 30709: prohíbe la discriminación remunerativa; una fórmula también puede discriminar.']],
    mirada: {
      ve: 'Las reglas injustas sobreviven en los archivos. La política de 2025 pudo corregirse en el papel, pero una fórmula copiada la seguía aplicando sin que nadie lo notara.',
      visual: { tipo: 'cambio', titulo: 'Fórmulas de 2025 → 2027', pares: [['Licencia de maternidad = 0 %', 'La licencia no reduce el incremento'], ['Más compa-ratio, más aumento', 'Menos compa-ratio, más aumento'], ['Practicantes en la matriz', 'Fuera de la matriz']] },
    },
  },
  {
    id: 'g4', t: '13:05', ch: 'sistema', who: null, titulo: '«Excel no responde»', banner: 'assets/esc/alarma.webp', lugar: 'Tu laptop, con el ventilador a tope', show: ['tiempo', 'cumplimiento'],
    body: () => `<p>El archivo pesa 48 MB. Agregas una pestaña más y la pantalla se pone blanca: <mark class="clave">«Excel no responde»</mark>. Esperas. Vuelve, pero el autoguardado estaba apagado.</p><p>Perdiste veinte minutos. Esta noche quieres seguir trabajando desde casa, en San Juan de Lurigancho.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Guardar versiones numeradas (v2, v3…) en la carpeta protegida de Compensaciones y trabajar desde casa por la VPN.',
        res: { q: 'buena', fx: { cumplimiento: 4, tiempo: 1 }, flags: ['version_controlada'], cartera: { simulador: 'Versiones en carpeta protegida' },
          out: 'Activas el autoguardado y creas «SIMULADOR_2027_v2». Gustavo, al verlo, hace lo mismo con sus archivos.',
          pro: { ok: 'Proteges el trabajo y los datos al mismo tiempo.', info: 'Pide a TI que revise por qué la laptop se cuelga con archivos grandes.' },
          kusi: ['feliz', '¡Versiones a salvo!'] } },
      { id: 'b', label: 'Enviarte el archivo a tu correo personal para trabajar más cómoda en casa.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -3 }, flags: ['datos_gmail'], cartera: { simulador: 'Copia en correo personal' },
          out: 'El correo sale. A los diez minutos, un aviso automático de seguridad llega a tu bandeja y con copia a TI: «Envío de archivo con datos sensibles a dominio externo».',
          pro: { ok: 'Quieres avanzar.', risk: 'Sacar sueldos de 1,200 personas de la empresa expone datos personales.' },
          kusi: ['indignado', '¡Con los sueldos de todos, no!'] } },
      { id: 'c', label: 'Seguir trabajando y guardar al final del día.',
        res: { q: 'aceptable', fx: { tiempo: -3 },
          out: 'A las 4 p. m. Excel se vuelve a colgar. Pierdes una hora más.',
          pro: { risk: 'No guardar versiones en un día así es apostar contra la laptop.' }, kusi: ['triste', 'Otra hora perdida…'] } },
    ],
    rules: [[LEY, 'Ley 29733: los datos personales deben protegerse con medidas de seguridad; no salen a cuentas personales.']],
    mirada: {
      ve: 'En compensaciones, el archivo más importante del año suele ser también el más frágil. Guardar versiones y cuidar dónde viaja son dos caras del mismo hábito.',
    },
  },
  {
    id: 'g5', t: '15:20', ch: 'presencial', who: 'fiorella', titulo: 'Tres escenarios, una recomendación', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Oficina de Fiorella', show: ['etica', 'calidad', 'personas'],
    body: (n, F) => `<p>Fiorella mira los tres escenarios impresos. ${F.has('analistas_todas') ? 'En todos, la equidad de redes incluye a las once analistas.' : 'En todos, la equidad de redes incluye el caso de Claudia.'}</p><p>A: «Equidad primero» (equidad 1.2 %, técnicos 1.6 %, desempeño 0.9 %, reserva 0.3 %). B: «Mercado» (técnicos 2.6 %, equidad 0.5 %, desempeño 0.7 %, reserva 0.2 %). C: «Desempeño» (desempeño 2.2 %, técnicos 1.0 %, equidad 0.5 %, reserva 0.3 %).</p><p>«<mark class="clave">¿Cuál recomiendas y por qué?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'A: cierra la brecha de redes en dos años como se prometió y parte a la mitad la de técnicos. Deja a técnicos todavía debajo del mercado y lo digo.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4, personas: 1 }, rel: { fiorella: 1 }, flags: ['escenario_equidad'], cartera: { escenario: 'Recomendado A · Equidad primero' },
          out: 'Fiorella asiente. «Wilber va a pelear por B. Y tendrá razón en algo. Prepárate para responderle con respeto.»',
          pro: { ok: 'Priorizas lo que es obligación legal sin esconder lo que sacrificas.', risk: 'La rotación de técnicos puede seguir unos meses más.', info: 'Lleva el plan de técnicos a dos años para mostrar que no es «nunca».' },
          kusi: ['animo', 'Prioridad clara, costo visible.'] } },
      { id: 'b', label: 'B: la rotación de técnicos es la urgencia que más cuesta hoy; la brecha de redes puede ir más lento.',
        res: { q: 'aceptable', fx: { personas: 4, cumplimiento: -3 }, rel: { fiorella: 0 }, flags: ['escenario_mercado'], cartera: { escenario: 'Recomendado B · Mercado' },
          out: 'Fiorella levanta la vista. «¿Y qué le decimos a Claudia, que su brecha sin criterio puede esperar? Eso no es una prioridad: es un riesgo.»',
          pro: { ok: 'Atacas la rotación con fuerza.', risk: 'Una brecha sin criterio objetivo no es solo un tema de presupuesto: es un incumplimiento que se prolonga.' },
          kusi: ['pensando', '¿Y la brecha de redes?'] } },
      { id: 'c', label: 'C: premiar el desempeño motiva a todos y evita discusiones.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: -3, cumplimiento: -3 }, flags: ['escenario_desempeno'], cartera: { escenario: 'Recomendado C · Desempeño' },
          out: 'Fiorella deja los papeles. «Con C, Claudia y los técnicos siguen donde están. Lo que encontraste la semana pasada no sirvió de nada.»',
          pro: { ok: 'Premia a quien rinde.', risk: 'Deja abiertas las dos brechas más graves.' },
          kusi: ['triste', 'Las dos brechas quedan igual.'] } },
    ],
    rules: [[BP, 'Recomienda un escenario con sus costos visibles: qué corrige, qué deja pendiente y para cuándo.']],
    mirada: {
      ve: 'No hay escenario perfecto con 4 %. Tu trabajo no es encontrar uno que contente a todos, sino recomendar uno que puedas defender y decir con claridad qué queda pendiente.',
      visual: { tipo: 'matriz', x: 'Avance en equidad (redes)', y: 'Avance en mercado (técnicos)', cuadrantes: ['Mucho mercado, poca equidad', 'Avanza en ambos', 'Poco en ambos', 'Mucha equidad, poco mercado'], items: [['A · Equidad primero', .8, .55], ['B · Mercado', .3, .85], ['C · Desempeño', .3, .3]] },
    },
  },
  {
    id: 'g6', t: '17:15', ch: 'documento', who: null, titulo: 'Los anexos', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio, imprimiendo', show: ['calidad', 'confianza'],
    body: () => `<p>Mañana presentas. La presentación tiene cinco láminas; los anexos son <mark class="clave">lo que te salva cuando alguien pregunta lo que no esperabas</mark>.</p><p>La impresora del piso 9 vuelve a atascarse. Mientras la abres, decides qué llevar.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres anexos que llevarás.', boton: 'Imprimir los anexos', resumen: 'Llevaste',
    cols: ['Anexo', 'Para qué pregunta'],
    rows: [
      { id: 'fuente', cells: ['Encuesta: fuente, fecha, match y proyección', '«¿De dónde sale ese P50?»'] },
      { id: 'brecha', cells: ['Tabla de criterios de la brecha de redes, sin nombres', '«¿No será que ganan menos por algo?»'] },
      { id: 'costo', cells: ['Costo de cada escenario en soles y en % de planilla', '«¿Y si le damos más a técnicos?»'] },
      { id: 'boletas', cells: ['Boletas de Claudia y Diego', 'Para mostrar el caso real'] },
      { id: 'quejas', cells: ['Lista de quienes se quejaron este año', 'Para saber quién presiona'] },
    ],
    score: { fuente: 3, brecha: 3, costo: 3, boletas: -4, quejas: -4 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0, etica: picks.includes('boletas') || picks.includes('quejas') ? -4 : 1 },
        flags: q === 'buena' ? ['anexos_solidos'] : [],
        out: q === 'buena' ? 'Tres anexos grapados, sin un solo nombre. Gustavo los hojea: «Con esto puedes responder casi cualquier cosa».' : 'Gustavo retira algunas hojas: «En un comité no se muestran boletas ni listas de personas».',
        pro: { ok: 'Fuentes, criterios y costos: las tres preguntas que siempre llegan.', info: 'Numera los anexos para poder decir «anexo 2» sin buscar.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Lista para las preguntas difíciles!' : 'Esos papeles no van.'],
      };
    },
    rules: [[BP, 'En un comité se presentan datos agregados y criterios, nunca boletas ni listas de personas.']],
    mirada: {
      ve: 'Prepararse para un comité es anticipar las preguntas. Las más comunes son tres: de dónde sale el dato, por qué la diferencia y cuánto cuesta.',
    },
  },
  {
    id: 'g7', t: '18:55', ch: 'whatsapp', who: 'fiorella', titulo: 'La víspera', banner: 'assets/foto2/caminan.webp', lugar: 'Paradero de Javier Prado, esperando el bus', show: ['confianza', 'personas'],
    body: (n, F) => `<p>En el paradero, con la mochila pesada de papeles, lees el mensaje de Fiorella: tú presentas mañana.</p><p>${F.has('escenario_equidad') ? 'Llevas «Equidad primero».' : 'Llevas tu recomendación.'} <mark class="clave">Respóndele antes de que llegue el bus</mark>.</p>`,
    type: 'compose', enviaA: 'fiorella', para: 'Para: Fiorella Gamarra', boton: 'Enviar el WhatsApp',
    prompt: 'Elige una frase de cada parte.',
    slots: [
      { id: 'listo', t: 'Estado', ops: [
        { id: 'l1', t: 'Listo: tres escenarios, recomendación y tres anexos.', ok: true, por: 'Le dices exactamente qué llevas.' },
        { id: 'l2', t: 'Más o menos listo 😅', ok: false, por: 'La víspera de un comité, eso preocupa a cualquiera.' },
      ] },
      { id: 'riesgo', t: 'El riesgo', ops: [
        { id: 'r1', t: 'La pregunta difícil será qué pasa con técnicos si elegimos equidad; tengo el plan a dos años.', ok: true, por: 'Anticipas y llevas respuesta.' },
        { id: 'r2', t: 'Espero que nadie pregunte mucho.', ok: false, por: 'Siempre preguntan.' },
      ] },
      { id: 'pedido', t: 'Lo que necesitas de ella', ops: [
        { id: 'p1', t: '¿Me ayudas si Renzo o Wilber llevan la conversación a casos individuales?', ok: true, por: 'Pides un apoyo concreto para un riesgo concreto.' },
        { id: 'p2', t: 'Nada, gracias.', ok: null, por: 'Amable, pero desaprovechas a tu aliada.' },
      ] },
    ],
    res: sel => {
      const buenas = ['l1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 1, personas: 1 }, rel: { fiorella: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Fiorella responde: «Cuenta conmigo. Y descansa: mañana se nota quién durmió». Sube el bus; consigues asiento, milagro.' : 'Fiorella responde: «Ok. Mañana a las 9:30 revisamos antes». El bus llega lleno.',
        pro: { ok: 'Estado, riesgo y pedido: llegas al comité con una aliada preparada.', info: 'Ensaya en voz alta la respuesta a la pregunta difícil.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡A dormir temprano!' : 'Mañana se afina.'],
      };
    },
    mirada: { ve: 'La víspera de un comité, la mejor preparación no es una lámina más: es saber cuál será la pregunta difícil y tener a alguien a tu lado cuando llegue.' },
  },
];
