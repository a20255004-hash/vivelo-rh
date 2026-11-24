// Supervisor/a de SST · Capítulo 1 · «El año pasado» · Semana 1, lunes.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR (Reglamento de la Ley 29783), arts. 77 y 78: evaluación inicial o línea de base, por personal competente
//   y en consulta con los trabajadores y sus representantes. Art. 88: la investigación de incidentes y accidentes identifica
//   deficiencias del sistema, se documenta y se hace con participación de los trabajadores. Glosario: accidente incapacitante
//   parcial permanente (pérdida parcial de un miembro u órgano).
// - Ley 29783: principio de prevención y EPP a cargo del empleador (explicados como principio, sin número de artículo).

export const CAP = {
  n: 1, titulo: 'El año pasado', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/planta.webp',
  lugar: 'Productos Mar de Piura · Planta de Paita',
  inicio: '06:55', fin: '18:30', cierreHora: '18:10',
  apertura: 'Paita, 6:55 de la mañana. Huele a mar y a amoníaco. Hoy empiezas como supervisor/a de Seguridad y Salud en el Trabajo de una planta donde, hace un año, un operario perdió dos dedos.', boton: 'Ponerte el casco y entrar',
  kusi: 'Un accidente grave deja dos cosas: una herida y una lección. ¡Vamos a ver si la lección se aprendió!',
  lead: 'Leíste con lupa la investigación del año pasado, recorriste la planta, escuchaste a Hugo, paraste una limpieza sin bloqueo y armaste tu primera línea de base.',
  reflexion: '¿Qué cambió de verdad en la planta desde el accidente, y qué cambió solo en el papel?',
  siguiente: { n: 2, titulo: 'Los registros', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'diagnostico', p: 'Línea de base de SST', j: 'Ing. Julio Zapata', d: 0, e: 'Para el viernes de la semana 1' },
  { id: 'cortadora', p: 'Cortadora de anillas', j: 'Carlos Ruiz · Producción', d: 0, e: 'Guarda nueva con sensor' },
  { id: 'bloqueo', p: 'Bloqueo y etiquetado', j: 'Mantenimiento', d: 0, e: 'Procedimiento aprobado hace 10 meses' },
  { id: 'camara', p: 'Cámaras de frío', j: 'Wilson · Frío', d: 0, e: 'Sin revisar' },
  { id: 'comite', p: 'Comité de SST', j: 'Flor Chunga · Trabajadores', d: 0, e: 'Sin sesión desde junio' },
];

export const FUTURO = {
  informe_criticado: ['Encontraste que la investigación del año pasado culpaba a Hugo y dejaba medidas sin dueño.', 'Julio lo sabrá en el capítulo 2, cuando revises los registros.'],
  puerta_reportada: ['Reportaste que la puerta de la cámara 3 no abre desde adentro.', 'Wilson la revisará contigo en el capítulo 4.'],
  piso_reportado: ['Reportaste el piso de eviscerado sin rejillas ni alfombras antideslizantes.', 'Volverá a aparecer en el capítulo 6.'],
  hugo_escuchado: ['Hugo te contó lo que nadie le preguntó en la investigación.', 'Puede ser una voz clave en la capacitación del capítulo 8.'],
  limpieza_parada: ['Paraste la limpieza de la cortadora hasta tener candados de bloqueo.', 'Carlos no lo olvida. Capítulo 5.'],
  limpieza_sigue: ['Dejaste limpiar la cortadora sin bloqueo.', 'Es exactamente como ocurrió el accidente de Hugo. Volverá en el capítulo 5.'],
  linea_base: ['Tu línea de base empieza por las personas y los peligros graves, no por las carpetas.', 'Guiará las dos semanas.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  yesenia: { n: 'Yesenia Távara', sub: 'Asistente de SST', c: '#2E7D6B' },
  hugo: { n: 'Hugo Ayala', sub: 'Almacén de insumos', c: '#8C5A2E' },
};

export const WSP = [
  { chat: 'yesenia', t: '06:40', de: 'Yesenia', txt: 'Bienvenido/a 🙌 Te dejé en el escritorio la carpeta del accidente de Hugo. El ingeniero Julio te ve a las 8.' },
  { chat: 'flor', t: '10:15', de: 'Flor', txt: 'Buenos días, inge. Soy Flor, del comité. Cuando tenga un rato le cuento cómo estamos. Desde junio no nos reunimos 😔' },
  { chat: 'carlos', t: '13:50', de: 'Carlos', txt: 'Inge, la limpieza de la cortadora es a las 14:00. No me la atrase que a las 15 entra la pota del segundo camión.' },
  { chat: 'hugo', t: '16:20', de: 'Hugo', txt: 'Gracias por preguntarme, inge. En un año nadie me había preguntado nada.', si: 'hugo_escuchado' },
];

export const CORREOS = [
  { t: '06:30', de: 'Ing. Julio Zapata', para: 'Supervisor/a de SST', asunto: 'Bienvenida y lo que necesito', html: '<p>Bienvenido/a a Mar de Piura. Seré directo: el año pasado tuvimos el accidente de Hugo Ayala en la cortadora de anillas y casi perdemos al cliente de Corea. No puede volver a pasar.</p><p>Necesito para el viernes un diagnóstico de cómo estamos. Y necesito que la planta no se pare. Las dos cosas.</p><p>Julio Zapata · Gerente de Operaciones</p>' },
];

export const QUIZ = [
  { q: 'Hugo perdió dos dedos y volvió a trabajar en otro puesto. ¿Cómo se clasifica ese accidente según el reglamento?', ops: ['Incidente', 'Accidente leve', 'Accidente incapacitante parcial permanente', 'Incidente peligroso'], ok: 2, por: 'El reglamento llama parcial permanente a la lesión que genera la pérdida parcial de un miembro u órgano o de sus funciones.' },
  { q: '¿Quién debe participar en la evaluación inicial de riesgos (línea de base)?', ops: ['Solo una consultora externa', 'Personal competente, en consulta con los trabajadores y sus representantes', 'Solo el gerente', 'Nadie: basta con copiar la del año pasado'], ok: 1, por: 'El art. 77 del D.S. 005-2012-TR pide hacerla con personal competente y en consulta con los trabajadores y sus representantes en el comité.' },
  { q: 'Una investigación que concluye «acto inseguro del trabajador» y propone «charla de refuerzo»…', ops: ['Es completa', 'Se quedó en el primer porqué: no encontró las fallas del sistema', 'Es la mejor práctica', 'Es obligatoria'], ok: 1, por: 'El art. 88 pide identificar las deficiencias del sistema de gestión, no solo el acto de la persona.' },
  { q: 'En el recorrido ves cinco problemas y solo puedes reportar dos hoy. ¿Con qué criterio eliges?', ops: ['Los más fáciles de arreglar', 'Los que pueden causar daño más grave', 'Los que se ven mejor en foto', 'Los que pide el cliente'], ok: 1, por: 'Se prioriza por gravedad potencial: lo que puede matar o mutilar va primero.' },
  { q: 'Para limpiar una máquina con partes móviles, lo seguro es…', ops: ['Apagarla con el botón y confiar', 'Bloquear la energía con candado y etiqueta, y verificar que no arranque', 'Pedir a un compañero que vigile el botón', 'Limpiarla rápido'], ok: 1, por: 'El bloqueo con candado y etiqueta evita que alguien la encienda mientras otra persona tiene las manos adentro.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '07:05', ch: 'documento', who: null, titulo: 'La carpeta de Hugo', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de SST, segundo piso', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Tu oficina tiene una ventana que da a la playa de descarga. Los camiones con pota llegan desde el desembarcadero y el olor entra aunque cierres. Sobre el escritorio, la carpeta que te dejó Yesenia: «Investigación del accidente · Hugo Ayala · cortadora de anillas».</p><p>Son cuatro hojas. <mark class="clave">Léela como quien busca lo que no se dijo</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del informe que incumplen la norma o que conviene corregir.',
    doc: { t: 'Informe de investigación de accidente', sub: 'Productos Mar de Piura S.A.C. · Línea de anillas · hace 12 meses' },
    lines: [
      { id: 'hecho', t: 'Hecho: durante la limpieza de la cortadora, el operario Hugo Ayala introdujo la mano y la cuchilla giró. Pérdida de dos dedos de la mano derecha.' },
      { id: 'causa', t: 'Causa: acto inseguro del trabajador por exceso de confianza.', bad: LEY, why: 'Es el primer porqué. El art. 88 del reglamento pide que la investigación identifique las deficiencias del sistema de gestión: ¿por qué la máquina pudo girar con una mano adentro?' },
      { id: 'participa', t: 'Elaborado por: Jefatura de Producción. Participantes: ninguno.', bad: LEY, why: 'La investigación la hacen el empleador y el comité, con la participación de los trabajadores y sus representantes (art. 88).' },
      { id: 'bloqueo', t: 'La máquina se apagó desde el tablero. No se usó candado de bloqueo.', duda: 'Este dato está en el informe, pero ninguna medida lo menciona. ¿Por qué no había candado?' },
      { id: 'medida1', t: 'Medida 1: charla de refuerzo sobre exceso de confianza.', bad: BP, why: 'Una charla no impide que la cuchilla gire. Las medidas primero deben actuar sobre la máquina y el procedimiento.' },
      { id: 'medida2', t: 'Medida 2: instalar guarda con sensor en la cortadora.' },
      { id: 'medida3', t: 'Medida 3: elaborar procedimiento de bloqueo y etiquetado. Responsable: —. Fecha: —.', bad: BP, why: 'Una medida sin responsable ni fecha es un deseo. Por eso hoy hay procedimiento, pero no candados.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Cierras la carpeta con la sensación de que algo no cuadra, pero no sabrías decir qué.' : `Marcaste ${hitsLey} problemas de fondo. El informe dice «exceso de confianza» y en la misma página reconoce que no había candado. Nadie unió las dos frases.`,
      flags: missLey ? [] : ['informe_criticado'], cartera: { diagnostico: missLey ? 'Informe del año pasado leído' : 'La investigación culpó al trabajador; la medida 3 nunca tuvo dueño' },
      pro: { ok: 'Leer una investigación vieja te dice qué aprendió la empresa… y qué no.', risk: 'Si aceptas el informe tal cual, heredas sus puntos ciegos.', info: 'La guarda con sensor sí se instaló. El procedimiento de bloqueo existe en papel. Los candados, no.' },
      kusi: missLey ? ['pensando', 'Algo falta en esa carpeta…'] : ['curioso', '¡El informe se contradice solo!'],
    }),
    rules: [[LEY, 'D.S. 005-2012-TR, art. 88: la investigación identifica deficiencias del sistema, se documenta y cuenta con participación de los trabajadores.'], [BP, 'Cada medida correctiva necesita responsable y fecha.']],
    mirada: {
      ve: 'Llegar después de un accidente grave es llegar a un lugar con cicatriz. La primera tarea es entender qué se concluyó y qué se dejó pendiente. Casi siempre, lo pendiente es justo lo que vuelve a fallar.',
      visual: { tipo: 'cambio', titulo: 'Lo que dice el informe y lo que pregunta un/a prevencionista', pares: [['Exceso de confianza', '¿Por qué la cuchilla pudo girar?'], ['Charla de refuerzo', 'Candado, etiqueta y verificación'], ['Responsable: —', '¿Quién y para cuándo?']] },
      normas: [{ ley: 'D.S. 005-2012-TR, art. 88', dice: 'La investigación del origen y causas subyacentes de los incidentes y lesiones debe permitir identificar cualquier deficiencia en el sistema de gestión y estar documentada, con participación de los trabajadores.', practica: 'Un informe hecho solo por Producción, que termina en «exceso de confianza», no cumple esa función.' }],
    },
  },
  {
    id: 'a2', t: '08:05', ch: 'presencial', who: 'julio-sst', titulo: 'Julio', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Operaciones', show: ['confianza', 'cumplimiento'],
    body: (n, F) => `<p>Julio Zapata tiene 58 años, treinta en plantas de harina y conservas, y un casco blanco gastado sobre el escritorio. En la pared, una pizarra: <strong>«212 días sin accidentes»</strong>.</p><p>«Mira, ${n}: yo no soy de papeles. Yo quiero que nadie se corte y que salgan los contenedores. ${F.has('informe_criticado') ? 'Me dicen que ya leíste lo de Hugo. ' : ''}<mark class="clave">¿Qué me vas a traer el viernes?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Un diagnóstico corto: los peligros que pueden matar o mutilar, qué controles existen de verdad y qué le pide la ley a la planta. Hecho con la gente de piso.',
        res: { q: null, fx: { confianza: 4, cumplimiento: 2 }, rel: { 'julio-sst': 1 }, cartera: { diagnostico: 'Prometido: peligros graves, controles reales y brechas legales' },
          out: 'Julio asiente despacio. «Con la gente de piso. Eso me gusta. Pero que sea corto, que yo no leo cuarenta páginas.»', kusi: ['feliz', '¡Corto y con la gente!'] } },
      { id: 'b', label: 'El estado de los documentos: política, reglamento interno, IPERC, programa anual y registros, con un semáforo.',
        res: { q: null, fx: { cumplimiento: 3, confianza: 0 }, cartera: { diagnostico: 'Prometido: semáforo de documentos' },
          out: 'Julio mira la pizarra de los 212 días. «Documentos. Ya. Ojalá que con eso no se corte nadie.» No suena a pregunta.', kusi: ['pensando', 'Los papeles importan… pero no protegen solos.'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 77: la evaluación inicial se hace en cada puesto, por personal competente y en consulta con los trabajadores.']],
    mirada: {
      ve: 'Un gerente de operaciones quiere producir sin accidentes y suele desconfiar de «los de seguridad» que llegan con carpetas. Tu primera conversación define si te verá como un aliado o como un costo.',
      visual: { tipo: 'balanza', a: { t: 'Diagnóstico de carpetas', items: ['Ordenado', 'Fácil de medir'] }, b: { t: 'Diagnóstico de piso', items: ['Encuentra lo que mata', 'Habla con quien trabaja', 'Incluye lo legal'] } },
    },
  },
  {
    id: 'a3', t: '09:20', ch: 'documento', who: null, titulo: 'El recorrido', banner: 'assets/3d/scenes/planta.webp', lugar: 'Recepción, eviscerado, anillas y cámaras', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Recorres la planta con botas blancas y mandil. En recepción, la pota llega en bandejas con hielo; en eviscerado, cuarenta mujeres con cuchillo cortan sobre mesas de acero; el piso es una mezcla de agua, hielo y tinta. Al fondo, el zumbido de los compresores de amoníaco.</p><p>Anotas seis cosas. <mark class="clave">Hoy solo puedes reportar dos, con foto y propuesta</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos observaciones que reportarás hoy.', boton: 'Reportar estas dos', resumen: 'Reportaste',
    cols: ['Observación', 'Qué puede pasar'],
    rows: [
      { id: 'puerta', cells: ['La cámara 3 (–25 °C) no tiene manija de apertura interior que funcione', 'Alguien queda encerrado a –25 °C'] },
      { id: 'piso', cells: ['Piso de eviscerado sin rejillas en los drenajes ni alfombras antideslizantes', 'Caídas sobre cuchillos y mesas de acero'] },
      { id: 'extintor', cells: ['Un extintor con la tarjeta de recarga vencida en el pasillo', 'Falla si hay un amago de incendio'] },
      { id: 'casco', cells: ['Dos visitantes del cliente sin redecilla en recepción', 'Problema de inocuidad, no de seguridad'] },
      { id: 'banos', cells: ['Los lockers de mujeres no tienen candado', 'Robos y molestia'] },
      { id: 'senal', cells: ['Señal de salida de emergencia despintada en conservas', 'Confusión al evacuar'] },
    ],
    score: { puerta: 3, piso: 3, extintor: 1, senal: 1, casco: 0, banos: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      const fl = []; if (picks.includes('puerta')) fl.push('puerta_reportada'); if (picks.includes('piso')) fl.push('piso_reportado');
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'riesgosa' ? -2 : 3 }, flags: fl,
        cartera: { camara: picks.includes('puerta') ? 'Puerta de cámara 3 reportada: sin apertura interior' : 'Sin revisar' },
        out: q === 'buena' ? 'Wilson, el técnico de frío, lee tu reporte y se rasca la cabeza: «La manija se rompió en agosto. Pedí el repuesto a Lima». Para el piso, Carlos responde con un emoji de reloj.' : 'Tu reporte es correcto, pero lo que puede encerrar o tumbar a alguien sigue igual.',
        pro: { ok: 'Lo que puede matar o mutilar va primero, aunque sea menos visible.', info: 'Una cámara de frío sin apertura interior es un peligro mortal: nadie lo nota hasta que alguien queda adentro.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Ojo de prevencionista!' : '¿Y la cámara 3?'],
      };
    },
    rules: [[BP, 'En un recorrido se prioriza por gravedad potencial, no por lo más fácil de arreglar.']],
    mirada: {
      ve: 'Una planta de pota mezcla riesgos de todo tipo: cuchillos, pisos mojados, máquinas, frío extremo y amoníaco. El recorrido inicial no es para anotarlo todo igual: es para ordenar por gravedad.',
      visual: { tipo: 'matriz', x: 'Probabilidad', y: 'Gravedad', cuadrantes: ['Para hoy', 'Para hoy', 'Planifica', 'Registra'], items: [['Cámara sin apertura interior', .35, .95], ['Piso sin antideslizante', .8, .7], ['Extintor vencido', .3, .55], ['Señal despintada', .4, .4], ['Visitantes sin redecilla', .6, .1], ['Lockers sin candado', .5, .1]] },
    },
  },
  {
    id: 'a4', t: '11:30', ch: 'presencial', who: null, titulo: 'Hugo', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Almacén de insumos', show: ['personas', 'calidad'],
    body: () => `<p>Hugo Ayala tiene 38 años y ahora cuenta latas en el almacén de insumos. Usa la mano izquierda para casi todo. Cuando te presentas, esconde la derecha en el bolsillo del mandil, sin darse cuenta.</p><p>«¿Usted es la nueva de seguridad? Pregunte nomás.» Su turno de almuerzo empieza en diez minutos: <mark class="clave">tienes tiempo para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Hugo.',
    opts: [
      { id: 'candado', label: '¿Por qué no había candado ese día?', info: '«Nunca hubo, inge. Había uno, de mantenimiento, y lo tenía el técnico del turno de noche. Nosotros apagábamos del tablero y ya. Ese día alguien en el tablero vio la máquina apagada y la prendió para probar.»' },
      { id: 'despues', label: '¿Qué cambió en la línea después de tu accidente?', info: '«Pusieron la guarda con sensor, eso sí. Pero el sensor se para cada rato por la humedad y los muchachos le ponen cinta para que no moleste. Y lo del candado… hicieron un papel.»' },
      { id: 'investigacion', label: '¿Te entrevistaron en la investigación?', info: '«A mí no. Estaba en el hospital de Piura. Cuando volví ya estaba el informe. Decía que fue exceso de confianza.» Mira la pared. «Yo limpiaba esa máquina hace seis años.»' },
      { id: 'como', label: '¿Cómo estás ahora?', info: '«Bien, nomás. Con la pensión del seguro y aquí en almacén. Mi hijo me pregunta por qué ya no voy a la línea.» Se ríe un poco. «Le digo que me ascendieron.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, calidad: picks.includes('candado') || picks.includes('despues') ? 4 : 2 }, flags: ['hugo_escuchado'],
      cartera: { cortadora: picks.includes('despues') ? 'Los operarios le ponen cinta al sensor por la humedad' : 'Guarda con sensor instalada', bloqueo: picks.includes('candado') ? 'Nunca hubo candados para Producción: solo uno, de mantenimiento' : 'Procedimiento en papel' },
      out: picks.includes('despues') ? 'Anotas «cinta en el sensor» y lo subrayas dos veces. Hugo te ve escribir. «No diga que yo le conté, ah.»' : 'Hugo vuelve a sus latas. Antes de irte, te dice: «Si quiere saber cómo pasó, pregúnteme a mí, no al informe».',
      kusi: ['pensando', 'El que vivió el accidente sabe cosas que el informe no.'],
    }),
    mirada: {
      ve: 'La persona accidentada suele ser la última a la que se le pregunta. Escucharla no es un gesto amable: es la mejor fuente para saber si las medidas funcionan.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Hugo', txt: 'Nunca hubo candado. Apagábamos del tablero y ya. El sensor se para por la humedad y le ponen cinta. A mí nadie me preguntó nada.' },
    },
  },
  {
    id: 'a5', t: '13:55', ch: 'presencial', who: 'produccion', titulo: 'La limpieza de las 14:00', banner: 'assets/foto/taller.webp', lugar: 'Línea de anillas', show: ['etica', 'cumplimiento', 'tiempo', 'personas'],
    body: (n, F) => `<p>La cortadora de anillas se apaga para la limpieza de mediodía. Dos operarios, con guantes de malla, esperan con mangueras. Uno es Kevin, de 19 años, en su segunda semana. Carlos Ruiz mira el reloj: a las 15:00 entra el segundo camión.</p><p>Preguntas por el candado de bloqueo. «Se perdió, inge. El procedimiento existe, <mark class="clave">los candados no</mark>. Apagamos del tablero, como siempre.»${F.has('hugo_escuchado') ? ' Recuerdas a Hugo diciendo «como siempre».' : ''}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Parar la limpieza: mandar a comprar candados y etiquetas a la ferretería de la avenida, y que mientras tanto mantenimiento corte la energía y se quede junto al tablero hasta que vuelvan.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, tiempo: -3, personas: 2 }, rel: { produccion: -1 }, flags: ['limpieza_parada'], cartera: { bloqueo: 'Candados comprados hoy: 4 · faltan etiquetas oficiales' },
          out: 'Yesenia vuelve en mototaxi con cuatro candados en 25 minutos. Carlos no te habla durante la limpieza, pero el camión entra a las 15:10. «Diez minutos tarde», te dice. Kevin, bajito: «Yo no sabía que se podía prender».',
          pro: { ok: 'Resolviste rápido con lo que había y no dejaste manos dentro de una máquina sin bloqueo.', risk: 'Carlos siente que le pasaste por encima delante de su gente.', info: 'Cuatro candados no son un sistema: falta quién los entrega, quién tiene la llave y cómo se registra.' },
          kusi: ['animo', 'Diez minutos por unas manos. Vale.'] } },
      { id: 'b', label: 'Dejar que limpien apagando del tablero, pero poner a un operario cuidando el botón.',
        res: { q: 'aceptable', fx: { etica: 0, cumplimiento: -2, tiempo: 2 }, rel: { produccion: 1 }, flags: ['limpieza_sigue'], cartera: { bloqueo: 'Limpieza con «vigía» en el tablero' },
          out: 'El vigía se queda junto al tablero… hasta que lo llaman de recepción. Durante cinco minutos, la cortadora queda sin bloqueo y con dos manos adentro. No pasa nada. Esta vez.',
          pro: { ok: 'Bajas un poco el riesgo sin parar la línea.', risk: 'Un vigía se distrae, lo llaman o se va al baño. Un candado no.' },
          kusi: ['preocupado', 'Es casi igual a como pasó lo de Hugo…'] } },
      { id: 'c', label: 'Dejarlo pasar hoy y escribir un memo a Producción para que compren candados.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4, tiempo: 2 }, rel: { produccion: 1 }, flags: ['limpieza_sigue'], cartera: { bloqueo: 'Memo enviado: candados pendientes' },
          out: 'El memo sale a las 14:20. A las 14:05 Kevin ya tenía el brazo hasta el codo dentro de la cortadora, con la energía solo apagada del tablero.',
          pro: { ok: 'Evitas un choque en tu primer día.', risk: 'Viste la misma condición que mutiló a Hugo y la dejaste pasar.' },
          kusi: ['triste', 'Lo viste… y pasó igual.'] } },
    ],
    rules: [[BP, 'Antes de meter las manos en una máquina, se bloquea la energía con candado y etiqueta y se verifica que no arranque.'], [LEY, 'Ley 29783, principio de prevención: el empleador garantiza los medios y condiciones que protejan la vida y la salud de los trabajadores.']],
    mirada: {
      ve: 'El primer día alguien te pondrá a prueba, casi siempre sin querer. Si dejas pasar lo mismo que causó el accidente grave, la planta entiende que nada cambió. Si lo paras con una solución rápida, entiende que llegó alguien distinto.',
      visual: { tipo: 'flujo', titulo: 'Bloqueo y etiquetado, en simple', pasos: ['Avisar', 'Apagar', 'Candado', 'Etiqueta con nombre', 'Probar que no arranca', 'Recién limpiar'] },
    },
  },
  {
    id: 'a6', t: '15:40', ch: 'documento', who: null, titulo: 'La línea de base', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de SST', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El aire acondicionado de la oficina gotea sobre una caja de archivos. Yesenia te trae un café de máquina y la plantilla de línea de base de la consultora de Lima: 46 preguntas de «sí / no».</p><p>Tú quieres algo que Julio lea en cinco minutos y que sirva. <mark class="clave">Elige qué entra en tu diagnóstico</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu línea de base.', boton: 'Guardar el borrador',
    bloques: [
      { id: 'peligros', t: 'Peligros críticos', n: 2, ops: [
        { id: 'p1', t: 'Máquinas con partes móviles sin bloqueo efectivo (cortadora de anillas).', ok: true, por: 'Causó el accidente grave del año pasado.' },
        { id: 'p2', t: 'Frío extremo y encierro en cámaras de –25 °C.', ok: true, por: 'Gravedad mortal.' },
        { id: 'p3', t: 'Lockers sin candado.', ok: false, por: 'Molesto, pero no es crítico.' },
      ] },
      { id: 'fuentes', t: 'Cómo lo vas a saber', n: 2, ops: [
        { id: 'f1', t: 'Entrevistas en piso con operarias y operarios de cada turno, incluido el de noche.', ok: true, por: 'El art. 77 pide consultar a los trabajadores.' },
        { id: 'f2', t: 'Revisión de registros obligatorios y de la IPERC contra lo que se ve en planta.', ok: true, por: 'Contrastar papel y realidad.' },
        { id: 'f3', t: 'Copiar la plantilla de 46 preguntas y marcar «sí».', ok: false, por: 'Mide carpetas, no riesgos.' },
      ] },
      { id: 'quien', t: 'Con quién la validas', n: 1, ops: [
        { id: 'q1', t: 'Con el comité de SST, incluidas sus representantes de trabajadores.', ok: true, por: 'La consulta al comité es parte de la evaluación inicial.' },
        { id: 'q2', t: 'Solo con Julio, para no hacer bulla.', ok: false, por: 'Sin el comité, la línea de base pierde la mitad de la mirada.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0 }, flags: q === 'buena' ? ['linea_base'] : [],
        cartera: { diagnostico: q === 'buena' ? 'Borrador: 2 peligros críticos, piso + registros, validación con el comité' : 'Borrador con la plantilla de la consultora' },
        out: q === 'buena' ? 'Tu borrador cabe en una hoja. Yesenia lo lee y dice: «Inge, esto sí lo entiendo yo. Y el de noche nunca lo han entrevistado».' : 'El borrador se parece mucho a la plantilla de Lima. Ordenado, y poco útil.',
        pro: { ok: 'Una línea de base sirve si dice qué puede matar, cómo lo sabes y quién lo validó.', info: 'El resultado de la evaluación inicial sirve de referencia para medir la mejora (art. 78).' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que sirve!' : 'Menos «sí / no», más piso.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, arts. 77 y 78: la evaluación inicial identifica peligros, evalúa controles y sirve de línea de base para medir la mejora.']],
    mirada: {
      ve: 'La línea de base es la foto de partida. Si se hace solo con documentos, la foto sale bonita y falsa. Si se hace con la gente de cada turno, sale incómoda y útil.',
      visual: { tipo: 'embudo', titulo: 'Tu primer día en números', niveles: [['Trabajadores en planta', 600], ['En la línea de anillas', 24], ['Candados de bloqueo esta mañana', 0]] },
    },
  },
  {
    id: 'a7', t: '17:45', ch: 'whatsapp', who: null, titulo: 'Para Julio', banner: 'assets/esc/meta.webp', lugar: 'Paradero frente a la planta', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>El viento de la tarde levanta arena en la avenida. Las operarias del primer turno esperan la combi a Paita Alta con los mandiles en bolsas. ${F.has('limpieza_parada') ? 'Carlos pasa en su camioneta sin saludar.' : 'Carlos pasa en su camioneta y te toca el claxon.'}</p><p>Julio te pidió «algo corto» cada tarde. <mark class="clave">Le escribes antes de subir</mark>.</p>`,
    type: 'compose', enviaA: 'julio', para: 'Para: Ing. Julio Zapata · Gerente de Operaciones', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Lo urgente', ops: [
        { id: 'a1', t: 'Ingeniero: dos cosas graves. La cámara 3 no abre desde adentro y en anillas no había candados de bloqueo.', ok: true, por: 'Lo que puede matar, primero.' },
        { id: 'a2', t: 'Ingeniero: primer día tranquilo, todo bajo control.', ok: false, por: 'No es verdad, y él lo sabrá pronto.' },
      ] },
      { id: 'hecho', t: 'Lo que ya hiciste', ops: [
        { id: 'h1', t: 'Hoy se compraron cuatro candados; falta definir quién los entrega y lleva el control.', ok: true, por: 'Le muestras avance y lo que falta.' },
        { id: 'h2', t: 'Ya mandé un memo a Producción.', ok: false, por: 'Un memo no cambia la limpieza de mañana.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'p1', t: '¿Me apoya para reunir al comité esta semana? No sesiona desde junio.', ok: true, por: 'El comité es tu mejor aliado para la línea de base.' },
        { id: 'p2', t: 'Le aviso el viernes con el informe completo.', ok: false, por: 'Lo grave no espera al viernes.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'h1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 2 : 0 }, rel: { 'julio-sst': q === 'buena' ? 1 : 0 },
        cartera: { comite: q === 'buena' ? 'Julio apoya convocar al comité esta semana' : 'Sin sesión desde junio' },
        out: q === 'buena' ? 'Julio responde con un audio de 20 segundos: «¿La cámara no abre de adentro? Mañana a primera hora habla con Wilson. Y el comité, convócalo. Yo soy el presidente, ¿sabías? Ni me acordaba».' : q === 'aceptable' ? 'Julio responde: «Ok. Mañana vemos».' : 'Julio responde con un pulgar. La cámara 3 seguirá igual otra noche.',
        pro: { ok: 'Un reporte diario corto, con lo grave primero, construye confianza con la gerencia.', risk: 'Si suavizas lo grave, cuando pase algo nadie recordará que lo viste.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Julio es el presidente del comité y ni se acordaba!' : 'Lo grave, primero.'],
      };
    },
    mirada: { ve: 'En seguridad, lo que puede matar se reporta el mismo día, en pocas palabras y a quien puede decidir. Lo demás puede esperar al informe.' },
  },
];
