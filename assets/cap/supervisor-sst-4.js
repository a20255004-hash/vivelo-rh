// Supervisor/a de SST · Capítulo 4 · «La cámara de frío» · Semana 1, jueves.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR, art. 77: la evaluación de riesgos se hace en cada puesto, en consulta con los trabajadores, y considera
//   si el trabajador es especialmente sensible por sus características o salud. Art. 82: el empleador identifica peligros,
//   evalúa riesgos y aplica las medidas de prevención y protección. Art. 97: los EPP deben atender a las medidas
//   antropométricas del trabajador que los usará. Art. 33 c): registro del monitoreo de agentes físicos.
// - Ley 29783: el EPP lo proporciona el empleador; las medidas colectivas y de control en la fuente se priorizan sobre el EPP
//   (explicado como principio, sin número de artículo).

export const CAP = {
  n: 4, titulo: 'La cámara de frío', dia: 'Semana 1, jueves', foto: 'assets/3d/scenes/almacen.webp',
  lugar: 'Productos Mar de Piura · Cámaras de frío',
  inicio: '05:20', fin: '18:00', cierreHora: '17:40',
  apertura: 'Jueves, 5:20 de la mañana. Afuera hace 19 grados y sopla el viento de Paita. Adentro de la cámara 3 hace –25 °C. Hoy entras.', boton: 'Ponerte la casaca térmica',
  kusi: 'El frío no avisa: entumece primero las manos y después el juicio. ¡Abrígate y mira bien!',
  lead: 'Probaste la puerta de la cámara 3, ordenaste sus peligros, escuchaste a Kevin, aplicaste la jerarquía de controles, armaste la IPERC con los operarios y defendiste ropa térmica de la talla de cada uno.',
  reflexion: '¿Por qué el EPP es la última línea de defensa y no la primera?',
  siguiente: { n: 5, titulo: 'El pedido urgente', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'puerta', p: 'Apertura interior de la cámara 3', j: 'Wilson · Frío', d: 0, e: 'Acuerdo del comité: hoy' },
  { id: 'iperc', p: 'IPERC de cámaras de frío', j: 'SST', d: 0, e: 'Última versión: hace 2 años' },
  { id: 'ropa', p: 'Ropa térmica', j: 'Logística', d: 0, e: '12 casacas para 30 operarios' },
  { id: 'busan', p: 'Contenedor a Busan', j: 'Carlos Ruiz · Producción', d: 0, e: 'Cierra mañana viernes 18:00' },
];

export const FUTURO = {
  camara_parejas: ['La cámara 3 funcionó con ingreso en parejas y vigía hasta que Wilson instaló la apertura interior.', 'El cliente no notó nada; Carlos sí. Capítulo 5.'],
  camara_igual: ['Dejaste la cámara 3 funcionando sin apertura interior un día más.', 'Volverá a preocuparte. Capítulo 9.'],
  kevin_escuchado: ['Kevin te contó que trabaja 50 minutos seguidos a –25 °C con guantes de tela.', 'Lo verás de nuevo en la línea de anillas. Capítulo 5.'],
  iperc_camara: ['La IPERC de cámaras se hizo con los operarios y prioriza controles sobre la fuente antes que EPP.', 'La inspectora la pedirá. Capítulo 9.'],
  ropa_personal: ['Conseguiste ropa térmica personal y de talla para cada operario de cámaras.', 'Llega en la semana 2.'],
  ropa_compartida: ['Aceptaste casacas compartidas entre turnos.', 'Flor lo llevará al comité. Capítulo 7.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  wilson: { n: 'Wilson Ipanaqué', sub: 'Técnico de frío', c: '#3B6EA8' },
  comite: { n: 'Comité SST Mar de Piura', sub: '8 integrantes', c: '#F2A900' },
};

export const WSP = [
  { chat: 'wilson', t: '05:10', de: 'Wilson', txt: 'Ya estoy en la cámara 3, inge. Traje herramientas. El repuesto de Lima no llegó, pero algo inventamos.' },
  { chat: 'carlos', t: '09:15', de: 'Carlos', txt: 'Necesito la cámara 3 a full hoy. Ahí está la mitad del contenedor de Busan.' },
  { chat: 'flor', t: '11:20', de: 'Flor', txt: 'Inge, las chicas de cámaras dicen que gracias por preguntarles. Nunca nadie de seguridad había entrado con ellas.', si: 'kevin_escuchado' },
  { chat: 'comite', t: '16:40', de: 'Wilson', txt: 'Acuerdo 2 del comité: cámara 3 con apertura interior y pulsador de alarma. Cumplido ✅ (foto)', si: 'camara_parejas' },
];

export const CORREOS = [
  { t: '07:40', de: 'Logística Mar de Piura', para: 'Supervisor/a de SST', asunto: 'RE: Ropa térmica', html: '<p>Buenos días. En almacén hay 12 casacas térmicas tallas L y XL y guantes de tela. La última compra fue hace dos años. Un juego completo (casaca, pantalón, pasamontañas, guantes y botas térmicas) cuesta aproximadamente lo que figura en la cotización adjunta.</p><p>Para comprar más se requiere aprobación del Ing. Zapata.</p><p>Logística</p>' },
];

export const QUIZ = [
  { q: 'En la jerarquía de controles, ¿qué va primero?', ops: ['El EPP', 'La capacitación', 'Eliminar o controlar el peligro en la fuente', 'La señalización'], ok: 2, por: 'El EPP es la última barrera: primero se elimina, se sustituye o se controla el peligro con medidas de ingeniería y luego administrativas.' },
  { q: 'Las casacas térmicas que hay son tallas L y XL. Para una operaria de talla S…', ops: ['Sirve igual', 'No es un EPP adecuado: el reglamento pide que el EPP atienda las medidas antropométricas de quien lo usa', 'Es mejor porque abriga más', 'Que se la ajuste con cinta'], ok: 1, por: 'Art. 97 del D.S. 005-2012-TR.' },
  { q: '¿Quién debe participar en la evaluación de riesgos de un puesto?', ops: ['Solo SST', 'Personal competente, en consulta con quienes trabajan en ese puesto y sus representantes', 'Solo el jefe del área', 'El cliente'], ok: 1, por: 'Art. 77 del reglamento.' },
  { q: 'Una cámara a –25 °C no tiene apertura interior. ¿Cuál es la medida más eficaz?', ops: ['Un cartel que diga «no cerrar»', 'Repararla: apertura interior y pulsador de alarma', 'Ropa más gruesa', 'Una charla'], ok: 1, por: 'Un control de ingeniería elimina la posibilidad de quedar encerrado; un cartel depende de que nadie se equivoque.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '05:30', ch: 'presencial', who: null, titulo: 'La puerta de la cámara 3', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Antecámara, frente a la cámara 3', show: ['etica', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Wilson Ipanaqué, 52 años, técnico de frío desde los tiempos de la harina de pescado, te espera con una caja de herramientas y un termo de café. ${F.has('puerta_reportada') ? '«Usted la reportó el lunes. Mire.»' : '«Nadie la ha reportado, pero mire.»'} Empuja la puerta desde adentro: no se mueve. La manija interior está suelta.</p><p>«Puedo armar una apertura con piezas de la cámara vieja, pero recién a mediodía. <mark class="clave">Y a las seis entra el turno a sacar cajas para Busan</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Hasta que Wilson termine, ingreso solo en parejas, con un vigía afuera, la puerta trabada para que no se cierre y registro de quién entra y sale.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4, tiempo: -1 }, rel: { produccion: 0 }, flags: ['camara_parejas'], cartera: { puerta: 'Medida temporal: parejas + vigía + puerta trabada; reparación a mediodía' },
          out: 'Carlos refunfuña por la cortina de frío que se escapa y por el vigía «que no produce». A las 12:40 Wilson prueba la apertura nueva desde adentro, contigo al otro lado. La puerta se abre con un empujón. Además instaló un pulsador de alarma.',
          pro: { ok: 'Mientras llega la solución de ingeniería, pones controles temporales que no dependen de la suerte.', risk: 'La puerta trabada hace perder frío: Wilson tendrá que vigilar la temperatura del producto.', info: 'La solución definitiva no es el vigía: es la apertura interior y la alarma.' },
          kusi: ['celebra', '¡Nadie se queda encerrado hoy!'] } },
      { id: 'b', label: 'Cerrar la cámara 3 hasta mediodía: nadie entra.',
        res: { q: 'aceptable', fx: { etica: 3, cumplimiento: 3, tiempo: -4 }, rel: { produccion: -1 }, cartera: { puerta: 'Cámara 3 cerrada hasta la reparación', busan: 'Seis horas de retraso en la carga' },
          out: 'Nadie entra, nadie corre peligro. Carlos pierde seis horas de carga para Busan y se lo cuenta a Julio antes de que tú llegues a la oficina.',
          pro: { ok: 'Eliminas la exposición por completo.', risk: 'Había una forma segura de trabajar mientras tanto. El costo para Producción será tu problema mañana.' },
          kusi: ['pensando', 'Seguro… pero caro.'] } },
      { id: 'c', label: 'Dejarla funcionar como siempre: llevan años así y nunca pasó nada.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4, tiempo: 2 }, flags: ['camara_igual'], cartera: { puerta: 'Sin medidas hasta la reparación' },
          out: 'A las 8:15 la puerta se cierra con el viento de la antecámara. Kevin está adentro. Alguien que pasaba la abre a los tres minutos. Kevin sale blanco y no dice nada.',
          pro: { ok: 'No retrasas la carga.', risk: '«Nunca pasó nada» es lo que se dice justo antes de que pase.' },
          kusi: ['triste', 'Tres minutos a –25 °C…'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 82: el empleador evalúa los riesgos y aplica medidas de prevención y protección.'], [BP, 'Mientras llega la solución definitiva, se aplican controles temporales que no dependan de la suerte.']],
    mirada: {
      ve: 'Las cámaras de frío tienen un peligro silencioso: quedar encerrado. No es frecuente, pero cuando ocurre puede ser mortal. Por eso se trata como un peligro crítico aunque «nunca haya pasado».',
      visual: { tipo: 'flujo', titulo: 'Mientras se repara', pasos: ['Puerta trabada', 'Ingreso en parejas', 'Vigía afuera', 'Registro de entradas', 'Reparación y prueba'] },
    },
  },
  {
    id: 'd2', t: '07:00', ch: 'documento', who: null, titulo: 'Lo que hay en la cámara', banner: 'assets/3d/scenes/almacen-sq.webp', lugar: 'Cámara 3 · –25 °C', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Adentro, la respiración se vuelve humo y las pestañas se escarchan en dos minutos. Las cajas de pota congelada llegan hasta el techo en racks. Un montacargas eléctrico pasa por un pasillo donde apenas cabe. El piso tiene placas de hielo.</p><p>Anotas seis peligros con dedos que ya no sientes bien. <mark class="clave">Elige los tres que irán primero en la IPERC</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres peligros más graves de la cámara.', boton: 'Priorizar estos tres', resumen: 'Priorizaste',
    cols: ['Peligro', 'Qué puede pasar'],
    rows: [
      { id: 'encierro', cells: ['Quedar encerrado', 'Hipotermia grave o muerte'] },
      { id: 'frio', cells: ['Exposición prolongada a –25 °C con ropa inadecuada', 'Hipotermia, congelamiento de dedos'] },
      { id: 'montacargas', cells: ['Montacargas en pasillo estrecho con peatones', 'Atropello o aplastamiento'] },
      { id: 'hielo', cells: ['Placas de hielo en el piso', 'Caídas'] },
      { id: 'luz', cells: ['Dos fluorescentes quemados al fondo', 'Mala visibilidad'] },
      { id: 'cajas', cells: ['Cajas pesadas en la parte alta del rack', 'Esfuerzo y golpes'] },
    ],
    score: { encierro: 3, frio: 3, montacargas: 3, hielo: 1, luz: 1, cajas: 1 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 2 : 0 },
        cartera: { iperc: 'Prioridad: ' + picks.join(', ') },
        out: q === 'buena' ? 'Sales de la cámara con tres peligros subrayados: encierro, frío y montacargas. Los otros tres también van a la matriz, pero después.' : 'Tu lista mezcla peligros graves con molestias. El montacargas sigue pasando a medio metro de la gente.',
        pro: { ok: 'Lo que puede matar o mutilar va primero; lo demás se registra y se planifica.', info: 'El frío no solo enfría: entumece las manos y hace que se manipulen mal las cajas y el montacargas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Prioridades claras, aunque los dedos tiemblen!' : '¿Y el montacargas?'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 77: la evaluación considera las condiciones de trabajo existentes.']],
    mirada: {
      ve: 'En una cámara de frío se suman peligros: el frío hace más torpe al que maneja el montacargas y al que camina sobre hielo. Evaluar riesgos es ver cómo se combinan, no solo listarlos.',
      visual: { tipo: 'matriz', x: 'Probabilidad', y: 'Gravedad', cuadrantes: ['Para hoy', 'Para hoy', 'Planifica', 'Registra'], items: [['Encierro', .25, .98], ['Frío sin ropa adecuada', .85, .75], ['Montacargas', .5, .9], ['Hielo en el piso', .7, .45], ['Luz al fondo', .6, .3], ['Cajas altas', .5, .35]] },
    },
  },
  {
    id: 'd3', t: '08:40', ch: 'presencial', who: null, titulo: 'Kevin', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Antecámara', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Kevin Chiroque, 19 años, sale de la cámara con una casaca dos tallas más grande, cerrada con un imperdible, y guantes de tela mojados. Viene de Tambogrande; vive en un cuarto alquilado en Paita y manda plata a su mamá cada quincena.${F.has('camara_igual') ? ' Todavía tiene las manos rojas de los tres minutos encerrado.' : ''}</p><p>Se frota las manos sobre el vaso de café. <mark class="clave">Le haces dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Kevin.',
    opts: [
      { id: 'tiempo', label: '¿Cuánto tiempo seguido trabajas adentro?', info: '«Cincuenta minutos, a veces una hora. Salimos cuando el montacarguista dice. Nadie me dijo que había que salir a calentarse. Los antiguos salen cuando ya no sienten los dedos.»' },
      { id: 'ropa', label: '¿Quién te dio esa casaca?', info: '«Me la pasó el del turno de noche. Es la suya. Cuando él entra, se la devuelvo. Huele a él, pero abriga.» Se ríe. «Los guantes los compré en el mercado de Piura.»' },
      { id: 'induccion', label: '¿Qué te explicaron antes de entrar la primera vez?', info: '«Que no corra y que no me meta en el pasillo del montacargas. Eso nomás. Fue como diez minutos.»' },
      { id: 'cortadora', label: '¿Te gusta más la cámara o la línea de anillas?', info: '«La línea, pero me da miedo la máquina. El otro día la guarda se paró sola y el supervisor le puso cinta al sensor.» Se queda callado. «No diga que yo le dije.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, calidad: 3 }, flags: ['kevin_escuchado'],
      cartera: { ropa: picks.includes('ropa') ? 'Casacas compartidas entre turnos; guantes comprados por el trabajador' : '12 casacas para 30 operarios', iperc: picks.includes('tiempo') ? 'Sin tiempos máximos ni pausas de recuperación' : 'En elaboración' },
      out: picks.includes('cortadora') ? 'Anotas «cinta en el sensor» por segunda vez esta semana. Kevin se aleja rápido, como si hubiera hablado de más.' : 'Kevin vuelve a la cámara. Lo ves ajustarse el imperdible de la casaca antes de entrar.',
      kusi: ['pensando', 'Lo que no te dice la matriz, te lo dice Kevin.'],
    }),
    mirada: {
      ve: 'Los trabajadores nuevos suelen tener la peor ropa, la inducción más corta y el miedo más grande a quejarse. Son los primeros a quienes hay que preguntar.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Kevin', txt: 'Cincuenta minutos seguidos. La casaca es del de la noche. Los guantes los compré yo. Nadie me dijo que había que salir a calentarse.' },
    },
  },
  {
    id: 'd4', t: '10:20', ch: 'documento', who: null, titulo: 'De arriba hacia abajo', banner: 'assets/esc/escalera.webp', lugar: 'Oficina de SST', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Ya en la oficina, con las manos recuperándose junto al vaso de agua caliente, abres la IPERC de cámaras de hace dos años. Para el frío dice solo: «Control: uso de EPP».</p><p>Ordenas las medidas posibles como se ordena una escalera de controles: <mark class="clave">de la más eficaz a la menos eficaz</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los controles para el frío y el encierro, del más eficaz al menos eficaz.', boton: 'Pasar el orden a la IPERC',
    items: [
      { id: 'eliminar', t: 'Preparar los pedidos en la antecámara a –5 °C para que se entre menos veces a la cámara', por: 'Reduce la exposición en su origen.' },
      { id: 'ingenieria', t: 'Apertura interior, pulsador de alarma y buena iluminación en la cámara', por: 'Control de ingeniería: no depende de la conducta.' },
      { id: 'tiempos', t: 'Tiempos máximos dentro, pausas de recuperación en un ambiente templado y trabajo en parejas', por: 'Control administrativo: organiza el trabajo.' },
      { id: 'induccion', t: 'Inducción específica para cámaras antes de entrar por primera vez', por: 'También administrativo: informa y entrena.' },
      { id: 'epp', t: 'Ropa térmica completa, de la talla de cada persona', por: 'Última barrera: protege si todo lo demás falla.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : 2, cumplimiento: q === 'buena' ? 3 : 0 },
        cartera: { iperc: q === 'riesgosa' ? 'Controles centrados en EPP' : 'Controles ordenados: fuente, ingeniería, organización y EPP' },
        out: q === 'buena' ? 'La IPERC vieja tenía una línea: «uso de EPP». La tuya tiene cinco, en el orden en que protegen.' : q === 'aceptable' ? 'El orden casi está. Revisas: la inducción no va antes que la apertura interior.' : 'Tu lista empieza por la ropa. Es la última barrera, no la primera.',
        pro: { ok: 'El EPP es necesario, pero se pone al final: protege solo a quien lo usa bien y solo si no falla nada más.', info: 'Que el empleador entregue el EPP no lo libera de controlar primero el peligro en la fuente.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡De arriba hacia abajo!' : 'El EPP va al final.'],
      };
    },
    rules: [[BP, 'Jerarquía de controles: eliminar o reducir, controles de ingeniería, controles administrativos y, al final, EPP.']],
    mirada: {
      ve: 'Cuando una matriz dice solo «uso de EPP», le está pidiendo al trabajador que se proteja solo. La jerarquía de controles devuelve la responsabilidad a donde corresponde: al diseño del trabajo.',
      visual: { tipo: 'flujo', titulo: 'Jerarquía de controles', pasos: ['Eliminar o reducir', 'Ingeniería', 'Organización del trabajo', 'Formación', 'EPP'] },
    },
  },
  {
    id: 'd5', t: '12:50', ch: 'documento', who: null, titulo: 'La IPERC con la gente', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Sala de capacitación', show: ['calidad', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Reúnes en la sala a cuatro operarios de cámaras y al montacarguista, con tamales verdes que mandaste a pedir. ${F.has('camara_parejas') ? 'Wilson llega a contar que la apertura nueva ya funciona.' : 'Wilson llega tarde, con grasa en las manos.'}</p><p>Llenas la IPERC con ellos, en la pizarra. <mark class="clave">Elige qué queda escrito</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la IPERC de la cámara.', boton: 'Guardar la IPERC',
    bloques: [
      { id: 'riesgo', t: 'Cómo describes el riesgo', n: 1, ops: [
        { id: 'r1', t: 'Hipotermia y congelamiento por permanencia de hasta 60 minutos a –25 °C con ropa compartida y de talla inadecuada.', ok: true, por: 'Concreto, con las condiciones reales.' },
        { id: 'r2', t: 'Frío.', ok: false, por: 'Es el peligro, no el riesgo.' },
      ] },
      { id: 'controles', t: 'Controles a implementar', n: 2, ops: [
        { id: 'k1', t: 'Máximo de permanencia continua y pausas de recuperación en la sala de descanso templada, definidos con la médica ocupacional.', ok: true, por: 'Con criterio médico, no inventado.' },
        { id: 'k2', t: 'Ropa térmica personal, de la talla de cada operario.', ok: true, por: 'El EPP debe atender las medidas de quien lo usa (art. 97).' },
        { id: 'k3', t: 'Que cada uno salga cuando sienta frío.', ok: false, por: 'Cuando ya no se sienten los dedos, es tarde.' },
      ] },
      { id: 'sensible', t: 'Personas especialmente sensibles', n: 1, ops: [
        { id: 's1', t: 'Evaluar con la Dra. Milagros a quienes tienen problemas circulatorios, presión alta o están gestando antes de asignarlos a cámaras.', ok: true, por: 'El art. 77 pide considerar al trabajador especialmente sensible.' },
        { id: 's2', t: 'Todos iguales: el frío es el mismo para todos.', ok: false, por: 'No afecta igual a todos los cuerpos.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 4 : 0, personas: 2 }, flags: q === 'buena' ? ['iperc_camara'] : [],
        cartera: { iperc: q === 'buena' ? 'IPERC de cámaras hecha con 5 operarios, con tiempos, ropa de talla y personas sensibles' : 'IPERC con controles generales' },
        out: q === 'buena' ? 'El montacarguista, que no había dicho nada, levanta la mano: «Y que pongan un espejo en la esquina del pasillo, que no veo a nadie». Lo agregas. Es la mejor idea del día.' : 'La IPERC queda escrita. Los operarios firman la lista y vuelven a la cámara.',
        pro: { ok: 'La consulta con quienes hacen el trabajo trae controles que nadie ve desde una oficina.', info: 'Los tiempos de permanencia se definen con criterio médico: no los inventes tú.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Hasta un espejo salió de la reunión!' : 'Más detalle, más protección.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 77: la evaluación se hace en consulta con los trabajadores y considera a quienes son especialmente sensibles.'], [LEY, 'Art. 97: los EPP deben atender a las medidas antropométricas de quien los usa.']],
    mirada: {
      ve: 'Una IPERC hecha con quienes trabajan en el lugar es más precisa y además se cumple, porque la gente reconoce sus propias ideas en ella.',
      visual: { tipo: 'cambio', titulo: 'La IPERC de hace dos años y la de hoy', pares: [['Peligro: frío', 'Hasta 60 minutos a –25 °C con ropa ajena'], ['Control: uso de EPP', 'Antecámara, apertura, pausas, parejas, ropa de talla'], ['Hecha en oficina', 'Hecha con cinco operarios']] },
    },
  },
  {
    id: 'd6', t: '15:10', ch: 'presencial', who: 'julio-sst', titulo: 'Doce casacas', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Operaciones', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>Julio tiene la cotización de Logística sobre el escritorio y la calculadora en la mano. «Treinta juegos completos es plata, ${n}. Compramos quince y que se los pasen entre turnos, como ahora. <mark class="clave">Un trabajador sale, otro entra, la casaca sigue caliente</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer un juego personal por cada operario de cámaras, de su talla. Si hay que escalonar, primero quienes entran más tiempo y Kevin, que es nuevo.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4, personas: 3 }, rel: { 'julio-sst': 0 }, flags: ['ropa_personal'], cartera: { ropa: 'Aprobados 30 juegos personales en dos entregas' },
          out: 'Julio te escucha hablar de la talla, del sudor que queda en la casaca y del pasamontañas que nadie quiere compartir. «Ya. Dos entregas: quince esta semana, quince la otra. Personales.»',
          pro: { ok: 'El EPP es personal y de talla. Escalonar la compra es razonable si se prioriza por exposición.', info: 'Que el trabajador compre sus propios guantes es una señal de que el empleador no está cumpliendo con dar el EPP.' },
          kusi: ['feliz', '¡Cada uno con su casaca!'] } },
      { id: 'b', label: 'Aceptar quince compartidas: algo es algo.',
        res: { q: 'riesgosa', fx: { etica: -3, cumplimiento: -3, personas: -2 }, rel: { 'julio-sst': 1 }, flags: ['ropa_compartida'], cartera: { ropa: '15 casacas compartidas entre turnos' },
          out: 'Julio firma la orden. Flor, cuando se entera, te escribe: «¿Compartidas? ¿Y las chicas de talla S?».',
          pro: { ok: 'Consigues algo de ropa nueva rápido.', risk: 'Una casaca XL compartida no protege igual a una operaria de talla S, ni es higiénica.' },
          kusi: ['pensando', '¿Y las de talla S?'] } },
    ],
    rules: [[LEY, 'Ley 29783: el empleador proporciona los EPP adecuados a sus trabajadores.'], [LEY, 'D.S. 005-2012-TR, art. 97: los EPP deben atender a las medidas antropométricas del trabajador.']],
    mirada: {
      ve: 'Las discusiones de presupuesto son parte del trabajo de SST. Proponer una compra escalonada con criterio de prioridad suele funcionar mejor que pedirlo todo o aceptar lo que sobra.',
      visual: { tipo: 'balanza', a: { t: '15 compartidas', items: ['Más barato hoy', 'Tallas L y XL', 'Sudor ajeno'] }, b: { t: '30 personales en dos entregas', items: ['De la talla de cada uno', 'Higiénico', 'Prioridad a quien más entra'] } },
    },
  },
  {
    id: 'd7', t: '17:20', ch: 'whatsapp', who: null, titulo: 'Para el comité', banner: 'assets/esc/meta.webp', lugar: 'Antecámara', show: ['cumplimiento', 'confianza', 'personas'],
    body: (n, F) => `<p>Antes de irte pasas por la cámara 3. ${F.has('camara_parejas') ? 'Pruebas tú misma/o la apertura interior: la puerta cede con un empujón y suena el pulsador de prueba.' : 'La puerta sigue igual que en la mañana.'} En la puerta, Carlos habla por teléfono con el agente de aduanas: «Mañana a las seis cerramos el contenedor, sí o sí».</p><p>El comité acordó vigilar la cámara 3. <mark class="clave">Le cuentas al grupo cómo quedó</mark>.</p>`,
    type: 'compose', enviaA: 'comite', para: 'Para: Comité SST Mar de Piura', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'estado', t: 'Estado del acuerdo', ops: [
        { id: 'e1', t: 'Acuerdo 2: la cámara 3 ya tiene apertura interior y pulsador de alarma. Wilson manda la foto.', ok: true, por: 'Informas el cumplimiento con evidencia.' },
        { id: 'e2', t: 'Lo de la cámara está avanzando.', ok: null, por: 'Vago: el comité no puede verificar nada.' },
      ] },
      { id: 'nuevo', t: 'Lo nuevo', ops: [
        { id: 'n1', t: 'La IPERC de cámaras se rehízo con los operarios: hay tiempos máximos, pausas y ropa personal por talla.', ok: true, por: 'El comité conoce los documentos de condiciones de trabajo.' },
        { id: 'n2', t: 'Ya está la IPERC, después se las paso.', ok: false, por: 'Si no la ven, no la pueden vigilar.' },
      ] },
      { id: 'alerta', t: 'La alerta para mañana', ops: [
        { id: 'a1', t: 'Mañana cierra el contenedor de Busan: estaré en la línea de anillas desde temprano.', ok: true, por: 'Anticipas el día de más presión.' },
        { id: 'a2', t: 'Buen fin de semana a todos.', ok: false, por: 'El viernes aún no empieza.' },
      ] },
    ],
    res: sel => {
      const buenas = ['e1', 'n1', 'a1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 1, cumplimiento: q === 'buena' ? 3 : 0, personas: q === 'buena' ? 2 : 0 }, rel: { delegada: q === 'buena' ? 1 : 0 },
        cartera: { busan: 'Cierra mañana 18:00 · estarás en anillas desde temprano' },
        out: q === 'buena' ? 'Flor responde con tres aplausos. Segundo, el mecánico, escribe algo que no esperabas: «Inge, mañana ojo con la cortadora. El sensor está fallando desde el martes».' : 'El grupo responde con un par de pulgares.',
        pro: { ok: 'Informar al comité el avance de los acuerdos lo mantiene vivo.', info: 'El mensaje de Segundo es una alerta: el sensor de la guarda de la cortadora está fallando justo antes del día de mayor presión.' },
        kusi: [q === 'buena' ? 'curioso' : 'pensando', q === 'buena' ? 'Hmm… ¿el sensor de la cortadora?' : 'Cuéntale al comité con datos.'],
      };
    },
    mirada: { ve: 'Cuando el comité ve que sus acuerdos se cumplen, empieza a avisar antes de que pasen las cosas. El mensaje de Segundo es la prueba de que el comité está despertando.' },
  },
];
