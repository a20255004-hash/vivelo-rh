// Supervisor/a de SST · Capítulo 8 · «La capacitación» · Semana 2, miércoles.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR, art. 27 (modificado por D.S. 006-2014-TR): la formación se centra en el puesto específico, en los
//   cambios de funciones, tecnologías o equipos, en la evolución de los riesgos y en la actualización periódica. Art. 28:
//   la capacitación se realiza dentro de la jornada de trabajo y su costo lo asume íntegramente el empleador. Art. 98: las
//   capacitaciones fuera de jornada se remuneran. Art. 29: los programas de capacitación deben cumplir requisitos mínimos.
//   Art. 33 g): registro de inducción, capacitación, entrenamiento y simulacros. Art. 42 f) y g): el comité aprueba el plan
//   anual de capacitación y promueve la formación de los nuevos trabajadores.
// - D.S. 019-2006-TR, art. 27.8: no cumplir con la formación suficiente y adecuada sobre los riesgos del puesto es infracción grave.

export const CAP = {
  n: 8, titulo: 'La capacitación', dia: 'Semana 2, miércoles', foto: 'assets/foto/capacitacion.webp',
  lugar: 'Productos Mar de Piura · Planta de Paita',
  inicio: '06:30', fin: '18:20', cierreHora: '18:00',
  apertura: 'Miércoles, 6:40 de la mañana. Ochenta personas de pie en el patio, una hoja de asistencia y una charla que nadie escucha. Hoy decides si sigue así.', boton: 'Ir al patio',
  kusi: 'Capacitar no es leer en voz alta: es que alguien haga algo distinto mañana. ¡A enseñar con las manos!',
  lead: 'Viste la charla de siempre, elegiste qué enseñar, sumaste a Hugo, defendiste que se capacite en horario de trabajo, diseñaste una práctica de bloqueo y la hiciste con la línea de anillas.',
  reflexion: '¿Cómo sabes si una capacitación funcionó?',
  siguiente: { n: 9, titulo: 'La fiscalización', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'charla', p: 'Charla semanal de SST', j: 'Yesenia · SST', d: 0, e: 'Miércoles 06:40 · fuera de turno' },
  { id: 'programa', p: 'Programa de capacitación', j: 'SST y comité', d: 0, e: 'El comité debe aprobarlo' },
  { id: 'bloqueo', p: 'Bloqueo y etiquetado', j: 'Segundo · Mantenimiento', d: 0, e: 'Candados personales instalados' },
  { id: 'induccion', p: 'Inducción de nuevos', j: 'SST', d: 0, e: '10 minutos, sin práctica' },
];

export const FUTURO = {
  charla_interrumpida: ['Cambiaste la charla de lectura por una pregunta y un caso real, delante de todos.', 'La planta empieza a esperar otra cosa de SST.'],
  hugo_capacita: ['Hugo aceptó contar su accidente en la práctica de bloqueo.', 'Su historia será lo que la planta recuerde. Capítulo 9.'],
  capacitacion_en_jornada: ['La capacitación se hace dentro de la jornada, en grupos pequeños.', 'La inspectora lo preguntará. Capítulo 9.'],
  capacitacion_fuera: ['La capacitación siguió antes del turno, sin pago.', 'La inspectora lo preguntará. Capítulo 9.'],
  bloqueo_practicado: ['La línea de anillas practicó el bloqueo con sus propios candados y la evaluación fue haciendo, no firmando.', 'Kevin lo hizo solo al final. Capítulo 9.'],
  programa_al_comite: ['Enviaste el programa de capacitación al comité para su aprobación.', 'Capítulo 10.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  hugo: { n: 'Hugo Ayala', sub: 'Almacén de insumos', c: '#8C5A2E' },
  comite: { n: 'Comité SST Mar de Piura', sub: '8 integrantes', c: '#F2A900' },
};

export const WSP = [
  { chat: 'flor', t: '06:20', de: 'Flor', txt: 'Inge, hoy es la charla de los miércoles. Ya verá cómo es 😅' },
  { chat: 'carlos', t: '10:30', de: 'Carlos', txt: 'Si quieres hacer la práctica en la cortadora, tienes la limpieza de las 14:00. Media hora.', si: 'carlos_coautor' },
  { chat: 'hugo', t: '12:40', de: 'Hugo', txt: 'Inge, lo pensé. Sí voy a contar. Pero no quiero que me tengan pena.', si: 'hugo_capacita' },
  { chat: 'comite', t: '17:50', de: 'Segundo', txt: 'Hoy Kevin bloqueó la cortadora solito y la probó. Primera vez que veo a un nuevo hacerlo bien 👏', si: 'bloqueo_practicado' },
  { chat: 'flor', t: '18:15', de: 'Flor', txt: 'Inge, una cosa. Marco, el que renunció, me dijo que puso una denuncia en SUNAFIL hace un mes. Por lo de la cortadora y el comité. No sé si avanzó.' },
];

export const CORREOS = [
  { t: '07:30', de: 'Yesenia Távara', para: 'Supervisor/a de SST', asunto: 'Registro de capacitaciones · últimos 3 meses', html: '<p>Inge, le paso el resumen: 12 charlas, todas los miércoles a las 6:40, antes del turno. Temas: «pisos mojados» (3 veces), «uso de EPP» (4 veces), «orden y limpieza» (3), «valores» (2). Asistencia promedio: 80 personas. Evaluación: ninguna.</p><p>Nadie del turno de noche ha recibido una charla en tres meses.</p><p>Yesenia</p>' },
];

export const QUIZ = [
  { q: '¿Cuándo debe realizarse la capacitación en SST según el reglamento?', ops: ['Antes del turno, sin pago', 'Dentro de la jornada de trabajo', 'Los domingos', 'Cuando el trabajador pueda'], ok: 1, por: 'Art. 28 del D.S. 005-2012-TR; si se hace fuera de jornada, se remunera (art. 98).' },
  { q: '¿Quién asume el costo de la capacitación?', ops: ['El trabajador', 'Se comparte', 'Íntegramente el empleador', 'El Estado'], ok: 2, por: 'Art. 28 del reglamento.' },
  { q: 'La formación debe centrarse en…', ops: ['Temas generales de motivación', 'El puesto específico, los cambios de funciones y equipos, y la evolución de los riesgos', 'Lo que pida el cliente', 'Lo que sea más barato'], ok: 1, por: 'Art. 27 del reglamento, modificado por el D.S. 006-2014-TR.' },
  { q: '¿Qué órgano aprueba el plan anual de capacitación en SST?', ops: ['El cliente', 'El comité de SST', 'La municipalidad', 'El jefe de producción'], ok: 1, por: 'Art. 42 f) del reglamento.' },
  { q: 'La mejor evidencia de que una capacitación de bloqueo funcionó es…', ops: ['La lista firmada', 'Que cada operario bloquee y pruebe la máquina correctamente', 'Una foto grupal', 'Un examen de memoria'], ok: 1, por: 'En temas prácticos, se evalúa haciendo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '06:40', ch: 'presencial', who: null, titulo: 'La charla de los miércoles', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Patio de la planta', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Ochenta personas de pie en el patio, con el mandil puesto y el frío de la madrugada de Paita. Llegaron veinte minutos antes de su turno. Yesenia lee de una hoja «Uso correcto del EPP», por cuarta vez en tres meses. La hoja de asistencia pasa de mano en mano.</p><p>Una operaria de conservas bosteza sin taparse. Dos muchachos miran videos en el celular. <mark class="clave">Yesenia te mira, como pidiendo ayuda</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle a Yesenia la palabra y hacer una sola pregunta: «¿Quién de aquí se ha resbalado en eviscerado este mes?». Contar en dos minutos qué cambió desde la caída de Teresa.',
        res: { q: null, fx: { personas: 4, calidad: 3, confianza: 2 }, flags: ['charla_interrumpida'], cartera: { charla: 'Hoy: una pregunta y un caso real' },
          out: 'Se levantan once manos. Rocío grita desde atrás: «¡Ya tenemos botas!». Hay risas. Por primera vez en la mañana, la gente mira hacia adelante. Yesenia te guiña un ojo.', kusi: ['celebra', '¡Once manos arriba! Eso es atención.'] } },
      { id: 'b', label: 'Dejar que termine y anotar todo para rediseñar la charla después.',
        res: { q: null, fx: { calidad: 1 }, cartera: { charla: 'Igual que siempre; rediseño pendiente' },
          out: 'La charla termina. La hoja de asistencia vuelve con 80 firmas. Le preguntas a un operario de qué trató y se encoge de hombros: «¿De los guantes?».', kusi: ['pensando', '80 firmas, 0 recuerdos.'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 28: la capacitación se realiza dentro de la jornada de trabajo.']],
    mirada: {
      ve: 'Una charla que se repite sin cambios se vuelve un ritual: la gente llega, firma y se va. El registro queda completo y la planta no aprende nada. Ese es el trámite que hay que romper.',
      visual: { tipo: 'embudo', titulo: 'La charla de los miércoles', niveles: [['Personas en el patio', 80], ['Firmas en la lista', 80], ['Recuerdan el tema una hora después', 6]] },
    },
  },
  {
    id: 'h2', t: '08:10', ch: 'documento', who: null, titulo: 'Qué enseñar', banner: 'assets/esc/cerebro.webp', lugar: 'Oficina de SST', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Abres el registro de capacitaciones junto con todo lo que viste en estas dos semanas: la cortadora, la cámara, el piso de eviscerado, Kevin y su inducción de diez minutos.</p><p>El programa del próximo trimestre tiene espacio para tres temas prioritarios. <mark class="clave">Elige cuáles</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres temas prioritarios del programa.', boton: 'Armar el programa', resumen: 'Elegiste',
    cols: ['Tema', 'Por qué'],
    rows: [
      { id: 'bloqueo', cells: ['Bloqueo y etiquetado en la cortadora y otras máquinas', 'Causó el accidente grave del año pasado'] },
      { id: 'camaras', cells: ['Trabajo en cámaras de frío: tiempos, pausas, apertura y alarma', 'Nueva IPERC de cámaras'] },
      { id: 'induccion', cells: ['Inducción específica por puesto para nuevos y reubicados', 'Kevin entró con diez minutos de explicación'] },
      { id: 'epp', cells: ['Uso correcto del EPP (quinta vez)', 'Ya se dio cuatro veces'] },
      { id: 'valores', cells: ['Valores y actitud segura', 'Tema general, sin relación con un riesgo'] },
      { id: 'noche', cells: ['Repetir los mismos temas para el turno de noche', 'Importante, pero es de cobertura, no de tema'] },
    ],
    score: { bloqueo: 3, camaras: 3, induccion: 3, noche: 2, epp: 0, valores: 0 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0 },
        cartera: { programa: q === 'buena' ? 'Trimestre: bloqueo, cámaras e inducción por puesto · todos los turnos' : 'Trimestre: ' + picks.join(', ') },
        out: q === 'buena' ? 'Tu programa cabe en una tabla de tres filas. Al costado escribes con lápiz: «también el turno de noche, mismo contenido». Yesenia lo lee y dice: «Ninguno de estos temas es de leer».' : 'El programa repite temas que ya se dieron. Los que pueden mutilar o encerrar a alguien quedan para después.',
        pro: { ok: 'La formación se centra en el puesto, en los cambios de funciones y equipos y en los riesgos reales (art. 27).', info: 'No dar formación suficiente y adecuada sobre los riesgos del puesto es infracción grave (D.S. 019-2006-TR, art. 27.8).' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Temas que salvan manos!' : '¿EPP por quinta vez?'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 27: formación centrada en el puesto específico, los cambios y la evolución de los riesgos.'], [LEY, 'D.S. 019-2006-TR, art. 27.8: formación insuficiente sobre los riesgos del puesto es infracción grave.']],
    mirada: {
      ve: 'Un programa de capacitación bien hecho sale de los peligros reales de la planta, no de una lista de temas genéricos. Lo que pasó estas dos semanas es el mejor temario.',
      visual: { tipo: 'cambio', titulo: 'De temas genéricos a riesgos reales', pares: [['Uso de EPP (cuarta vez)', 'Bloqueo en la cortadora'], ['Valores', 'Cámaras de frío'], ['Diez minutos de inducción', 'Inducción por puesto']] },
    },
  },
  {
    id: 'h3', t: '09:40', ch: 'presencial', who: null, titulo: 'Hugo, otra vez', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Almacén de insumos', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Hugo está contando latas de conserva con la mano izquierda. ${F.has('hugo_escuchado') ? 'Te reconoce de lejos y sonríe un poco.' : 'Te mira con desconfianza: es la primera vez que hablan.'}</p><p>Quieres pedirle algo difícil: que cuente su accidente en la práctica de bloqueo. <mark class="clave">Antes, le haces dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Hugo.',
    opts: [
      { id: 'contar', label: '¿Te animarías a contar lo que pasó a la gente de anillas?', info: '«¿Para qué? ¿Para que digan «pobrecito»?» Se queda callado. «Bueno… si sirve para que Kevin no pierda los dedos, sí. Pero lo cuento yo, a mi manera.»' },
      { id: 'que', label: '¿Qué te hubiera servido saber antes?', info: '«Que apagar del tablero no es apagar. Que cualquiera puede prender. Eso nadie nos lo enseñó con la máquina al frente. Nos lo leyeron en un papel.»' },
      { id: 'miedo', label: '¿Qué te da miedo de contarlo?', info: '«Que se rían. Que digan que fui yo el tonto. El informe decía «exceso de confianza», inge. Eso duele más que los dedos.»' },
      { id: 'candado', label: '¿Quieres poner tú el primer candado en la práctica?', info: 'Hugo se mira la mano derecha. «Con esta no puedo cerrarlo bien.» Piensa. «Con la izquierda sí. Ya aprendí a hacer todo con la izquierda.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 5, calidad: 3 }, flags: picks.includes('contar') || picks.includes('miedo') || picks.includes('candado') ? ['hugo_capacita'] : [],
      cartera: { charla: picks.includes('contar') || picks.includes('candado') ? 'Hugo contará su historia en la práctica de las 14:00' : 'Práctica a las 14:00' },
      out: picks.includes('miedo') ? 'Le dices que la nueva investigación no habla de «exceso de confianza» sino de un candado que nunca existió. Hugo deja la tablilla. «Ya. Voy a ir.»' : 'Hugo asiente. «A las dos estoy en anillas. Pero corto, ah.»',
      kusi: ['animo', 'La historia de Hugo vale más que cien diapositivas.'],
    }),
    mirada: {
      ve: 'Las historias reales, contadas por quien las vivió, son lo que más se recuerda de una capacitación. Pero pedirle a alguien que cuente su accidente exige cuidado: que lo cuente a su manera y que no quede como el culpable.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Hugo', txt: 'Apagar del tablero no es apagar. Cualquiera puede prender. Eso nadie nos lo enseñó con la máquina al frente.' },
    },
  },
  {
    id: 'h4', t: '11:00', ch: 'presencial', who: 'produccion', titulo: '¿A qué hora?', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Producción', show: ['cumplimiento', 'personas', 'tiempo'],
    body: (n, F) => `<p>${F.has('carlos_coautor') ? 'Carlos te recibe mejor que la semana pasada.' : 'Carlos te recibe con los brazos cruzados.'} «¿Capacitación por grupos? ¿Y a qué hora? La de los miércoles la hacemos a las 6:40 porque así no se para nada. <mark class="clave">Que vengan veinte minutos antes, como siempre</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Hacerla dentro de la jornada, en grupos de ocho, durante las paradas de limpieza de cada línea, y repetirla en el turno de noche. Media hora por grupo.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 3, tiempo: -1 }, rel: { produccion: 0 }, flags: ['capacitacion_en_jornada'], cartera: { charla: 'Grupos de 8 en las paradas de limpieza, todos los turnos' },
          out: 'Carlos hace cuentas en voz alta: «La limpieza igual para la línea… media hora más… ya». Saca su planificador. «Pero el turno de noche lo coordinas tú con Wilson.»',
          pro: { ok: 'Capacitas en horario de trabajo y usas tiempos muertos que ya existen.', info: 'Las charlas antes del turno, sin pago, son de las observaciones más comunes en fiscalizaciones de SST.' },
          kusi: ['celebra', '¡Dentro de la jornada y sin parar la planta!'] } },
      { id: 'b', label: 'Seguir a las 6:40, antes del turno, pero solo una vez al mes para no molestar tanto.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: -2 }, rel: { produccion: 1 }, flags: ['capacitacion_fuera'], cartera: { charla: 'Antes del turno, sin pago, una vez al mes' },
          out: 'Carlos queda contento. Flor, cuando se entera: «¿Otra vez antes del turno? Las de Colán tienen que salir de su casa a las cinco».',
          pro: { ok: 'No tocas el horario de producción.', risk: 'La capacitación se hace dentro de la jornada; si no, se paga (arts. 28 y 98 del reglamento).' },
          kusi: ['triste', 'Antes del turno y sin pago… otra vez.'] } },
      { id: 'c', label: 'Hacerla después del turno y pagarla como horas extra.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: 0, tiempo: 1 }, rel: { produccion: 1 }, flags: ['capacitacion_en_jornada'], cartera: { charla: 'Después del turno, pagada' },
          out: 'Es legal. Pero a la primera sesión llegan la mitad: después de ocho horas cortando pota, la gente quiere irse a su casa.',
          pro: { ok: 'Si es fuera de jornada, se remunera: cumples.', risk: 'Cansados y con la combi esperando, aprenden poco.' },
          kusi: ['pensando', 'Legal, pero ¿cansados aprenden?'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 28: la capacitación se realiza dentro de la jornada y su costo lo asume el empleador.'], [LEY, 'Art. 98: las capacitaciones fuera de jornada se remuneran.']],
    mirada: {
      ve: 'La hora de una capacitación dice cuánto le importa a la empresa. Ponerla dentro de la jornada, en grupos pequeños y en todos los turnos, es más difícil de organizar y mucho más eficaz.',
      visual: { tipo: 'balanza', a: { t: '6:40, sin pago', items: ['No para la línea', 'Gente cansada y apurada', 'Incumple el reglamento'] }, b: { t: 'Grupos en las paradas', items: ['Dentro de la jornada', 'Grupos de ocho', 'También el turno de noche'] } },
    },
  },
  {
    id: 'h5', t: '12:40', ch: 'documento', who: null, titulo: 'Media hora', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de SST', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Almuerzas un sudado de cachema en el escritorio mientras armas la sesión de bloqueo para el grupo de anillas. Tienes media hora, ocho personas y una cortadora.</p><p><mark class="clave">Elige cómo será la sesión</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la sesión de bloqueo.', boton: 'Guardar la sesión',
    bloques: [
      { id: 'abre', t: 'Cómo empieza', n: 1, ops: [
        { id: 'a1', t: 'Hugo cuenta, en tres minutos y a su manera, qué pasó hace un año.', ok: true, por: 'Una historia real abre los oídos.' },
        { id: 'a2', t: 'Lectura del procedimiento de bloqueo de seis páginas.', ok: false, por: 'Es lo que ya se hizo y no funcionó.' },
      ] },
      { id: 'practica', t: 'Qué hacen', n: 2, ops: [
        { id: 'p1', t: 'Cada operario coloca su propio candado y etiqueta en la cortadora.', ok: true, por: 'Aprender haciendo.' },
        { id: 'p2', t: 'Cada uno intenta arrancar la máquina bloqueada y comprueba que no prende.', ok: true, por: 'La verificación es el paso que más se olvida.' },
        { id: 'p3', t: 'Ver un video de bloqueo en una planta de Europa.', ok: false, por: 'No es su máquina ni su candado.' },
      ] },
      { id: 'evalua', t: 'Cómo sabes si aprendieron', n: 1, ops: [
        { id: 'e1', t: 'Cada uno bloquea y prueba solo, mientras Segundo observa con una lista de pasos.', ok: true, por: 'Se evalúa haciendo.' },
        { id: 'e2', t: 'Firman que asistieron.', ok: null, por: 'Necesario para el registro, pero no dice si aprendieron.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : 1, cumplimiento: q === 'buena' ? 3 : 0 },
        cartera: { programa: q === 'buena' ? 'Sesión de bloqueo: historia, práctica, verificación y evaluación haciendo' : 'Sesión de lectura y firma' },
        out: q === 'buena' ? 'Tu sesión cabe en una tarjeta: «Hugo · candado · probar · hacerlo solo». Yesenia la plastifica para que no se moje en la línea.' : 'La sesión se parece mucho a la charla de los miércoles.',
        pro: { ok: 'Una buena capacitación práctica tiene un porqué real, práctica con el equipo propio y una evaluación que se ve.', info: 'La firma va al registro de capacitación (art. 33 g); la evaluación práctica también puede registrarse.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una tarjeta plastificada que salva manos!' : 'Menos leer, más hacer.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 33 g): registro de inducción, capacitación, entrenamiento y simulacros.']],
    mirada: {
      ve: 'En temas prácticos, la diferencia entre capacitar e informar es que la persona lo haga con sus manos, en su máquina, y que alguien vea que lo hizo bien.',
      visual: { tipo: 'flujo', titulo: 'Media hora de bloqueo', pasos: ['La historia de Hugo', 'Mi candado', 'Intento arrancar', 'Lo hago solo', 'Registro'] },
    },
  },
  {
    id: 'h6', t: '14:05', ch: 'documento', who: null, titulo: 'Kevin y el candado', banner: 'assets/foto/taller.webp', lugar: 'Línea de anillas', show: ['calidad', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('hugo_capacita') ? 'Hugo habló tres minutos. Contó que había limpiado esa máquina seis años y que un día alguien la prendió desde el tablero. Al terminar, levantó la mano derecha. Nadie dijo nada. Nadie miraba el celular.' : 'Empiezas tú, contando lo que pasó hace un año. Te escuchan con respeto, pero no es lo mismo.'}</p><p>Ahora le toca a Kevin hacerlo solo, con Segundo mirando. <mark class="clave">Ordena los pasos como los debe hacer</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del bloqueo que hará Kevin.', boton: 'Que Kevin lo haga',
    items: [
      { id: 'avisa', t: 'Avisar a la línea y al supervisor que va a intervenir la cortadora', por: 'Que nadie se sorprenda.' },
      { id: 'apaga', t: 'Apagar la máquina con el botón de parada', por: 'Primero se detiene.' },
      { id: 'corta', t: 'Cortar la energía en el tablero y colocar su candado y su etiqueta con su nombre', por: 'El candado es suyo: solo él lo quita.' },
      { id: 'prueba', t: 'Intentar arrancar la máquina y comprobar que no prende', por: 'Energía cero verificada.' },
      { id: 'limpia', t: 'Recién entonces abrir la guarda y limpiar', por: 'Con la certeza de que no girará.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: 3, cumplimiento: q === 'buena' ? 3 : 0 }, flags: q === 'riesgosa' ? [] : ['bloqueo_practicado'],
        cartera: { bloqueo: q === 'riesgosa' ? 'Práctica con errores: repetir' : '8 operarios de anillas practicaron y aprobaron haciendo' },
        out: q === 'buena' ? 'Kevin pone su candado, escribe su nombre en la etiqueta con letra temblorosa y aprieta el botón de arranque. Nada. Lo aprieta otra vez, como para estar seguro. Nada. Hugo, desde atrás, le da una palmada en la espalda con la mano izquierda.' : q === 'aceptable' ? 'Kevin se salta la prueba de arranque. Segundo lo detiene: «Primero pruebas, muchacho. Siempre». Lo repite y lo hace bien.' : 'Kevin abre la guarda antes de cortar la energía. Segundo le agarra el brazo. Se repite la práctica desde cero.',
        pro: { ok: 'La verificación de energía cero es el paso que salva: un candado mal puesto no protege.', info: 'Lo que Kevin hizo hoy es tu mejor evidencia de capacitación, más que cualquier lista.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Kevin lo hizo solo!' : 'Primero probar, después meter las manos.'],
      };
    },
    rules: [[BP, 'En el bloqueo, cada persona coloca y retira su propio candado y verifica que la máquina no arranque.']],
    mirada: {
      ve: 'Ver a un trabajador nuevo bloquear y probar solo una máquina que mutiló a alguien es, quizás, el momento más importante de estas dos semanas. Es la prevención funcionando en las manos de quien la necesita.',
      visual: { tipo: 'linea', titulo: 'La cortadora en un año', hitos: [['Hace un año', 'Hugo pierde dos dedos'], ['Lunes, semana 1', 'Cero candados'], ['Viernes, semana 1', 'Sensor cambiado con bloqueo'], ['Hoy', 'Kevin bloquea y prueba solo']] },
    },
  },
  {
    id: 'h7', t: '17:20', ch: 'whatsapp', who: null, titulo: 'Para el comité', banner: 'assets/esc/meta.webp', lugar: 'Oficina de SST', show: ['cumplimiento', 'confianza', 'personas'],
    body: (n, F) => `<p>Yesenia ordena las tarjetas plastificadas en una caja de zapatos. Tienen que repetirse en conservas, cámaras y el turno de noche. ${F.has('capacitacion_en_jornada') ? 'Carlos ya mandó el horario de paradas de la próxima semana.' : ''}</p><p>El programa de capacitación debe aprobarlo el comité. <mark class="clave">Lo mandas al grupo</mark>.</p>`,
    type: 'compose', enviaA: 'comite', para: 'Para: Comité SST Mar de Piura', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'programa', t: 'Qué envías', ops: [
        { id: 'p1', t: 'Les envío la propuesta de programa de capacitación del trimestre para que el comité la revise y apruebe.', ok: true, por: 'El comité aprueba el plan de capacitación (art. 42 f).' },
        { id: 'p2', t: 'Les comparto el programa que ya empezamos a aplicar.', ok: false, por: 'Ya decidido, el comité solo puede mirar.' },
      ] },
      { id: 'cuenta', t: 'Qué cuentas', ops: [
        { id: 'c1', t: 'Hoy ocho operarios de anillas bloquearon y probaron la cortadora solos. Hugo contó su historia.', ok: true, por: 'Evidencia concreta de lo que funcionó.' },
        { id: 'c2', t: 'Hoy hubo capacitación con buena asistencia.', ok: false, por: 'La asistencia no dice nada.' },
      ] },
      { id: 'pide', t: 'Qué pides', ops: [
        { id: 'k1', t: '¿Alguien del comité puede acompañar las sesiones del turno de noche?', ok: true, por: 'El comité promueve la formación de todos (art. 42 g).' },
        { id: 'k2', t: 'Cualquier duda me escriben.', ok: null, por: 'Correcto, pero no los involucra.' },
      ] },
    ],
    res: sel => {
      const buenas = ['p1', 'c1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 3 : 0, personas: q === 'buena' ? 2 : 0 }, rel: { delegada: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['programa_al_comite'],
        cartera: { programa: q === 'riesgosa' ? 'Programa sin revisión del comité' : 'Enviado al comité para aprobación' },
        out: q === 'buena' ? 'Segundo se ofrece para el turno de noche. Teresa escribe: «Yo acompaño en eviscerado». Flor no responde en el grupo; te escribe aparte, ya tarde. Algo le preocupa.' : 'El grupo responde con un par de pulgares. Más tarde, Flor te escribe aparte.',
        pro: { ok: 'Que el comité apruebe y acompañe la capacitación la vuelve de todos.', info: 'Lee el mensaje de Flor: habla de una denuncia ante SUNAFIL.' },
        kusi: [q === 'buena' ? 'curioso' : 'pensando', q === 'buena' ? '¿Una denuncia de Marco?' : 'Que el comité apruebe, no solo mire.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42 f) y g): el comité aprueba el plan anual de capacitación y promueve la formación de los nuevos trabajadores.']],
    mirada: { ve: 'Un programa de capacitación aprobado por el comité y acompañado por sus miembros deja de ser «la charla de SST» y se vuelve un compromiso compartido.' },
  },
];
