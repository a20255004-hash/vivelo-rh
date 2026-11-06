// HR Business Partner · Capítulo 10 · «Dos semanas con Ventas» · Semana 2, viernes. Final abierto.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - TUO del D.Leg. 728 (D.S. 003-97-TR), art. 31: el empleador no puede despedir por causa relacionada con la conducta sin
//   antes otorgar por escrito al trabajador un plazo razonable no menor de seis días naturales para que pueda defenderse
//   de los cargos (salvo falta grave flagrante).
//   https://lpderecho.pe/jurisprudencia-articulo-31-tuo-decreto-legislativo-728-procedimiento-despido/
//   https://modelo.pe/carta-de-preaviso-de-despido/
// - TUO del D.Leg. 728, art. 30 (actos de hostilidad), art. 16 d) (mutuo disenso) y Ley 26772, ya citados.

export const CAP = {
  n: 10, titulo: 'Dos semanas con Ventas', dia: 'Semana 2, viernes', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes. Hace dos semanas Mauricio te mostró un mapa de Lima con doce colores. Hoy el mapa tiene ocho, seis personas tienen una respuesta pendiente y el lunes empieza la ruta con jefes nuevos. Hoy toca mirar atrás. Un poco.', boton: 'Empezar el último día',
  kusi: 'Dos semanas, trescientas personas y una pregunta que solo tú puedes responder. ¡Dale!',
  lead: 'Cerraste las dos semanas: escuchaste a Mauricio, hiciste el seguimiento a los seis, hablaste con Susana, armaste el balance con Andrea y dejaste listo el caso más difícil para el lunes.',
  reflexion: 'Después de estas dos semanas, ¿te ves en este puesto? ¿Qué parte de ti se quedaría y qué parte se cansaría?',
  siguiente: { n: 11, titulo: 'El caso Jhon', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'estructura', p: 'Nueva estructura comercial', j: 'Mauricio · Comercial', d: 9, e: 'Arranca el lunes' },
  { id: 'seis', p: 'Seguimiento a los seis', j: 'Andrea · Gestión Humana', d: 9, e: 'Llamadas de hoy' },
  { id: 'metas', p: 'Piloto de metas', j: 'Mauricio · Comercial', d: 9, e: 'Un mes' },
  { id: 'jhon', p: 'Revisión sobre Jhon Ruiz', j: 'Fiorella · Relaciones Laborales', d: 9, e: 'Cierre el lunes' },
];

export const FUTURO = {
  mauricio_socio: ['Mauricio te pidió que sigas en las decisiones de Comercial.', 'Semana 3.'],
  seguimiento_hecho: ['Cada una de las seis personas recibió su llamada de seguimiento con respuestas concretas.', 'Semana 3.'],
  susana_confia: ['Susana te dijo lo que necesita para su primer mes.', 'Semana 3.'],
  balance_honesto: ['Tu balance incluye lo que salió bien y lo que salió mal.', 'Andrea lo llevará al comité. Semana 3.'],
  caso_jhon_ordenado: ['El caso de Jhon tiene un procedimiento claro para el lunes.', 'Semana 3, lunes.'],
  te_ves: ['Dijiste que te ves en este puesto.', 'Semana 3.'],
  dudas_puesto: ['Dijiste que todavía no sabes si te ves en este puesto.', 'Semana 3.'],
};

export const CHATS = {
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  susana: { n: 'Susana Vargas', sub: 'Supervisora de ventas', who: 'susana' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
  fiorella: { n: 'Fiorella Campos', sub: 'Relaciones Laborales', c: '#8E44AD' },
};

export const WSP = [
  { chat: 'mauricio', t: '07:50', de: 'Mauricio', txt: 'Directorio ok con el piloto. Ahora me toca cumplir. ¿Un café a las 8?', si: 'metas_defendidas' },
  { chat: 'mauricio', t: '07:50', de: 'Mauricio', txt: 'El directorio aprobó el 30 %. No sé si estoy contento. ¿Un café a las 8?', no: 'metas_defendidas' },
  { chat: 'kenji', t: '10:40', de: 'Kenji', txt: 'Mi jefe nuevo me acompañó hoy en la ruta. Y el analista consiguió la mayonesa de sachet 😂 Me quedo, por ahora.', si: 'kenji_se_queda' },
  { chat: 'kenji', t: '10:40', de: 'Kenji', txt: 'Mañana voy a la entrevista de la otra distribuidora. Nada personal, de verdad 🙏', no: 'kenji_se_queda' },
  { chat: 'andrea', t: '12:15', de: 'Andrea', txt: 'Te espero en el chifa de la esquina. Invito yo, como prometí.' },
  { chat: 'fiorella', t: '18:35', de: 'Fiorella', txt: 'Lunes 8:00. Ya tengo todo lo de Jhon. Trae tu libreta.' },
];

export const CORREOS = [
  { t: '07:30', de: 'Andrea Salazar', para: 'HR Business Partner · Comercial', asunto: 'Balance de dos semanas', html: '<p>Hoy, antes de irte, mándame un balance corto: qué se logró, qué costó y qué queda pendiente. Lo llevo al comité del martes.</p><p>Andrea</p>' },
  { t: '18:50', de: 'Fiorella Campos · Relaciones Laborales', para: 'HR Business Partner · Comercial; Andrea Salazar', asunto: 'Lunes: dos temas', html: '<p>1) Cierre de la revisión sobre Jhon Ruiz. Hay relatos de exvendedores, lo que viste en la formación y lo que él mismo dijo el jueves. Hay que darle la palabra antes de decidir nada.</p><p>2) Me llamó el secretario general del sindicato de Producción: se enteraron de «la reestructura de Ventas» y piden una reunión. Quieren saber si en planta viene lo mismo.</p><p>Buen fin de semana. Lo vas a necesitar.</p><p>Fiorella</p>' },
];

export const QUIZ = [
  { q: 'Antes de despedir a alguien por su conducta, el empleador debe…', ops: ['Avisarle el mismo día', 'Darle por escrito un plazo no menor de seis días naturales para defenderse', 'Pedir permiso al sindicato', 'Nada, si hay pruebas'], ok: 1, por: 'TUO del D.Leg. 728, art. 31 (salvo falta grave flagrante).' },
  { q: 'Una llamada de seguimiento a quien recibió una mala noticia sirve para…', ops: ['Presionarlo a firmar', 'Responder lo que pidió y saber cómo está', 'Cerrar el expediente', 'Nada'], ok: 1, por: 'Nadie se queda solo después de la noticia.' },
  { q: 'Un buen balance de una reorganización incluye…', ops: ['Solo lo que salió bien', 'Lo logrado, lo que costó y lo pendiente', 'Solo los números de venta', 'Solo las salidas'], ok: 1, por: 'Lo que salió mal también se aprende.' },
  { q: 'El trabajo del HRBP en estas dos semanas fue, sobre todo…', ops: ['Obedecer al gerente', 'Bloquear al gerente', 'Que las decisiones sobre personas fueran buenas para el negocio, justas y legales', 'Hacer planillas'], ok: 2, por: 'Las tres cosas a la vez, como dijo Andrea el primer día.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:05', ch: 'presencial', who: 'mauricio', titulo: 'El café con Mauricio', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería de Nutrimás', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Mauricio pide dos cafés y, por primera vez, no mira el celular. ${F.has('metas_defendidas') ? '«Ayer en el directorio hablé de stock, de rotación y de un piloto. Hace dos semanas no sabía ni qué era la rotación por supervisor.»' : '«Ayer el directorio aprobó el 30 %. Debería estar contento.»'}</p><p>«Hazme dos preguntas. Las que quieras. <mark class="clave">Hoy contesto todo</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Mauricio.',
    opts: [
      { id: 'distinto', label: '«¿Qué harías distinto si empezaras de nuevo?»', info: '«No llegaría con el mapa. Llegaría con una moto, como tú. Y no pediría una lista el primer día.» Se ríe. «Bueno, la pediría, pero me la discutirías igual.»' },
      { id: 'jhon', label: '«¿Qué vas a hacer con Jhon si la revisión confirma todo?»', info: 'Se queda callado un rato. «No lo sé. Es el que más vende. Pero el jueves le dio la ruta del cerro a un chico por ser venezolano. Eso no es vender: es otra cosa.»' },
      { id: 'rrhh', label: '«¿Qué necesitas de mí en las próximas semanas?»', info: '«Que sigas en la mesa. Y que me sigas diciendo que no, pero con una alternativa. Eso es lo que me sirvió.»' },
      { id: 'costo', label: '«¿Qué te costó a ti, personalmente?»', info: '«La conversación con Patricia. Llegué a mi casa y no pude cenar. Mi esposa me preguntó qué pasaba y no supe explicarle.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 4, calidad: 2 }, rel: { mauricio: 1 }, flags: ['mauricio_socio'],
      out: 'Mauricio paga los cafés. Antes de irse te dice: «La próxima reorganización la diseñamos juntos desde el primer día». No sabes si es un elogio o una amenaza. Probablemente las dos cosas.',
      kusi: ['feliz', 'El gerente que pedía listas ahora pide alternativas.'],
    }),
    rules: [[BP, 'Al cerrar un proceso difícil, pregunta qué aprendió el otro y qué necesita de ti después.']],
    mirada: {
      ve: 'Mauricio llegó como el gerente que había que frenar. Se va de estas dos semanas como alguien que todavía es impaciente, pero que aprendió a preguntar «para qué». Esa transformación no aparece en ningún indicador y es, quizás, tu mayor logro.',
      visual: { tipo: 'cambio', titulo: 'Mauricio, dos semanas después', pares: [['«¿A quién sacamos?»', '«¿Qué problema resolvemos?»'], ['Un mapa con 12 colores', 'Una moto y una ruta'], ['«Tráeme números, no opiniones»', '«Sigue diciéndome que no, con una alternativa»']] },
    },
  },
  {
    id: 'f2', t: '09:30', ch: 'llamada', who: null, titulo: 'Las llamadas de seguimiento', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio', show: ['personas', 'confianza', 'cumplimiento'],
    body: () => `<p>Como estaba en el plan, llamas a las seis personas que no entraron en la estructura. <mark class="clave">Estas son tres de las llamadas</mark>.</p>`,
    type: 'calls',
    calls: [['Patricia Odría', 'Contesta desde su casa, con la tele de fondo', '«Firmé ayer. Lo leí con mi hermano, todo estaba claro. La carta dice "abrió la zona del Callao". Gracias por eso.» Le preguntas si empezó con la consultora de recolocación: ya tiene su primera cita el martes.'], ['Milagros Ccori', 'Contesta en el bus de personal de Lurín', '«Acepté Trade Marketing. El bus me deja a dos cuadras y los martes me dejan salir a las cuatro para la terapia de mi papá. Nadie me había preguntado eso en ocho años.»'], ['Marco Tello', 'Contesta serio', 'Te dice que todavía está pensando, que le duele haber salido mientras Jhon se quedó. Le preguntas qué necesitaría para decidir. «Saber que lo de Jhon se va a revisar en serio.»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con lo que pidió Marco?',
    choices: [
      { id: 'a', label: 'Decirle a Marco que la revisión sobre el trato en SJL existe y sigue su curso, sin darle detalles, y anotar su pedido en el seguimiento.',
        res: { q: 'buena', fx: { personas: 4, etica: 3, cumplimiento: 2 }, flags: ['seguimiento_hecho'], cartera: { seis: 'Seguimiento hecho: 2 acuerdos firmados, 1 reubicación, 3 en curso' },
          out: 'Marco respira hondo. «Con eso me basta. Gracias por no hacerme el cuento.» Quedan en volver a hablar el miércoles.',
          pro: { ok: 'Le das una respuesta verdadera sin romper la reserva de una revisión en curso.', info: 'Lo que las personas piden al salir suele ser justicia, no dinero.' },
          kusi: ['animo', 'Verdad y reserva a la vez.'] } },
      { id: 'b', label: 'Contarle lo que se sabe de Jhon para que se quede tranquilo.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, cartera: { seis: 'Seguimiento con una filtración' },
          out: 'Marco se queda tranquilo. A las tres horas, el relato completo circula por el grupo de exvendedores.',
          pro: { ok: 'Marco siente que le dijiste la verdad.', risk: 'Rompiste la reserva de una revisión que todavía no escucha a Jhon.' },
          kusi: ['sorpresa', 'La reserva también protege a Jhon.'] } },
    ],
    rules: [[BP, 'Una revisión en curso se reconoce, pero no se cuenta. La reserva protege a todas las partes, también a quien está siendo revisado.']],
    mirada: {
      ve: 'Las llamadas de seguimiento son las que casi nadie hace y las que más se recuerdan. Patricia firmó con su carta; Milagros consiguió salir a las cuatro los martes. Detalles pequeños que hacen que una salida no sea un abandono.',
      visual: { tipo: 'embudo', titulo: 'Las seis personas, dos días después', niveles: [['Sin lugar en la estructura', 6], ['Reubicadas o con acuerdo firmado', 3], ['Todavía decidiendo, con tiempo', 3]] },
    },
  },
  {
    id: 'f3', t: '11:00', ch: 'presencial', who: 'susana', titulo: 'Susana', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala pequeña, con la puerta abierta', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>${F.has('susana_atendida') ? 'Susana te busca para agradecerte por haberla ido a buscar el miércoles.' : F.has('susana_sin_respuesta') ? 'Susana viene a verte, seria. «El miércoles pasé la mañana sola con una captura. Quiero que lo sepas.»' : 'Susana te pide cinco minutos.'} ${F.has('susana_jefa') ? 'Desde el lunes es jefa de zona de Lima Norte.' : 'No entró en la estructura y está evaluando la vacante de formadora que le ofrecieron.'}</p><p>«Quiero pedirte algo para este primer mes. <mark class="clave">¿Me escuchas?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Escucharla sin interrumpir y acordar con ella una cosa concreta para su primer mes, con fecha.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { susana: 1 }, flags: ['susana_confia'],
          out: 'Susana te pide aprender a usar el tablero de la app, «porque no quiero que me vuelvan a decir vieja escuela». Acuerdan dos sesiones con el analista la próxima semana. Al salir, te dice: «En quince años nadie me preguntó qué necesitaba».',
          pro: { ok: 'Conviertes una conversación en un compromiso concreto.', info: 'Lo que Susana temía era una etiqueta; lo que pide es una herramienta.' },
          kusi: ['celebra', '¡Qué divino! De «vieja escuela» a tablero en mano.'] } },
      { id: 'b', label: 'Decirle que hoy estás a full y que lo vean el lunes.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 1 }, rel: { susana: -1 },
          out: 'Susana asiente. «Claro, el lunes.» Lo que te iba a pedir se queda para otro día.',
          pro: { ok: 'Cuidas tu tiempo.', risk: 'A veces los cinco minutos de hoy valen más que la hora del lunes.' },
          kusi: ['pensando', 'Eran cinco minutos…'] } },
    ],
    mirada: { ve: 'Susana empezó la historia preguntando si la iban a sacar. La termina pidiendo aprender algo nuevo. Pase lo que pase con su rol, eso dice que la confianza se rompió menos de lo que podía romperse.' },
  },
  {
    id: 'f4', t: '12:40', ch: 'presencial', who: 'andrea', titulo: 'El chifa de la esquina', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Un chifa en la avenida Nicolás Ayllón', show: ['calidad', 'confianza'],
    body: () => `<p>Andrea pide un tallarín saltado para compartir y un wantán frito. «Para el comité del martes necesito tres cosas que medir en los próximos tres meses. <mark class="clave">Si no se miden, en marzo nadie se acuerda de por qué hicimos esto</mark>.»</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres indicadores que propones para los próximos tres meses.', boton: 'Proponer estos tres', resumen: 'Propusiste',
    cols: ['Indicador', 'Qué dice'],
    rows: [
      { id: 'renuncias', cells: ['Renuncias voluntarias de vendedores por zona y por jefe', 'Si el cambio de liderazgo está reteniendo'] },
      { id: 'stock', cells: ['Venta perdida por quiebres de stock', 'Si el analista está resolviendo lo que frenaba la venta'] },
      { id: 'metas', cells: ['Porcentaje de vendedores que llegan al 80 % de la meta piloto', 'Si las metas son creíbles'] },
      { id: 'fotos', cells: ['Número de fotos de exhibición enviadas por día', 'Actividad de los vendedores'] },
      { id: 'costo', cells: ['Ahorro en sueldos por los seis puestos eliminados', 'Cuánto se ahorró'] },
    ],
    score: { renuncias: 3, stock: 3, metas: 3, fotos: -2, costo: 0 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 }, rel: { andrea: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['balance_honesto'], cartera: { estructura: q === 'buena' ? 'Tablero: renuncias, stock y metas al 80 %' : 'Tablero incompleto' },
        out: q === 'buena' ? 'Andrea los anota en una servilleta. «Renuncias, stock y metas. Si en marzo las renuncias no bajan, nos equivocamos, y lo vamos a decir.»' : 'Andrea anota, pero pregunta: «¿Y esto nos dirá si la gente se queda?».',
        pro: { ok: 'Mides lo que el cambio prometía resolver: rotación, venta perdida y metas creíbles.', risk: 'Medir solo el ahorro o la actividad esconde si el cambio funciona.', info: 'Decir de antemano qué resultado significaría «nos equivocamos» es la mejor prueba de honestidad.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tres números que no mienten!' : '¿Eso mide lo que querían cambiar?'],
      };
    },
    rules: [[BP, 'Mide un cambio por el problema que quería resolver, no por lo que se ahorró ni por la actividad.']],
    mirada: {
      ve: 'Una reorganización se anuncia en un día y se prueba en meses. Las dos semanas te dieron la estructura; los indicadores dirán si era la correcta. Y un buen HRBP está dispuesto a que los números le digan que se equivocó.',
      visual: { tipo: 'linea', titulo: 'Dos semanas con Ventas', hitos: [['Lunes 1', 'El mapa de 12 colores'], ['Martes 1', 'Los datos'], ['Miércoles 1', 'La ruta con Kenji'], ['Jueves 1', 'Los roles'], ['Viernes 1', 'El talento'], ['Lunes 2', 'Los que no entran'], ['Martes 2', 'La comunicación'], ['Miércoles 2', 'El anuncio'], ['Jueves 2', 'Las metas'], ['Viernes 2', 'El balance']] },
    },
  },
  {
    id: 'f5', t: '15:00', ch: 'documento', who: null, titulo: 'El lunes de Jhon', banner: 'assets/foto/revisa.webp', lugar: 'Sala de Relaciones Laborales, con Fiorella', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Fiorella tiene la carpeta de Jhon sobre la mesa: los relatos sin nombres, ${F.has('formacion_frenada') ? 'tu registro de la formación del miércoles,' : ''} ${F.has('jhon_alerta') ? 'y lo que él mismo dijo el jueves por teléfono.' : 'y algunas notas sueltas.'}</p><p>«El lunes Mauricio va a querer decidir rápido, para un lado o para el otro. <mark class="clave">Ordenemos cómo se hace bien</mark>.»</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para cerrar la revisión sobre Jhon. Usa las flechas.', boton: 'Guardar el procedimiento',
    items: [
      { id: 'evid', t: 'Ordenar las evidencias: hechos, fechas, palabras y testigos, sin nombres expuestos', por: 'Se decide sobre hechos.' },
      { id: 'carta', t: 'Si hay una falta, entregarle por escrito los cargos con un plazo no menor de seis días naturales', por: 'TUO del D.Leg. 728, art. 31.' },
      { id: 'descargo', t: 'Escuchar y leer sus descargos con atención', por: 'Nadie es sancionado sin ser escuchado.' },
      { id: 'decidir', t: 'Decidir una medida proporcional a lo probado', por: 'Ni más ni menos de lo que los hechos sostienen.' },
      { id: 'comunicar', t: 'Comunicarle la decisión por escrito y en persona', por: 'Con claridad y respeto.' },
      { id: 'equipo', t: 'Acompañar al equipo de SJL y proteger a quienes hablaron', por: 'Lo que pase después también es parte de la decisión.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 2 : 0 }, rel: { andrea: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['caso_jhon_ordenado'], cartera: { jhon: q === 'riesgosa' ? 'Sin procedimiento claro' : 'Procedimiento listo para el lunes' },
        out: q === 'buena' ? 'Fiorella imprime el procedimiento y lo engrapa en la carpeta. «Pase lo que pase con Jhon, que nadie pueda decir que no se hizo bien.»' : 'Fiorella reordena dos pasos: «Primero se escucha, después se decide. Siempre».',
        pro: { ok: 'Un procedimiento justo protege a los vendedores y también a Jhon.', risk: 'Decidir por presión, en cualquier dirección, sin escuchar sus descargos, puede invalidar todo.', info: 'El plazo de descargo no es un trámite: es el derecho de defensa.' },
        kusi: [q === 'buena' ? 'animo' : 'pensando', q === 'buena' ? 'Justicia con procedimiento.' : 'Primero escuchar, luego decidir.'],
      };
    },
    rules: [[LEY, 'TUO del D.Leg. 728, art. 31: antes de despedir por conducta, se otorga por escrito un plazo no menor de seis días naturales para la defensa.']],
    mirada: {
      ve: 'Jhon es el último nudo de estas dos semanas. Lo que se decida el lunes dirá a 300 personas si la nueva ficha va en serio. Pero para que vaya en serio, tiene que hacerse bien: con hechos, con descargos y con una medida proporcional.',
      visual: { tipo: 'flujo', titulo: 'Cerrar una revisión con justicia', pasos: ['Evidencias', 'Cargos por escrito', 'Descargos', 'Decisión proporcional', 'Comunicación', 'Cuidar al equipo'], aqui: 0 },
      normas: [{ ley: 'TUO del D.Leg. 728, art. 31', dice: 'El empleador no puede despedir por causa relacionada con la conducta del trabajador sin antes otorgarle por escrito un plazo razonable no menor de seis días naturales para que pueda defenderse de los cargos, salvo falta grave flagrante.', practica: 'Aunque Mauricio quiera decidir el lunes, primero Jhon tiene que conocer los cargos y responder.' }],
    },
  },
  {
    id: 'f6', t: '17:00', ch: 'correo', who: null, titulo: 'El balance', banner: 'assets/esc/logro.webp', lugar: 'Tu escritorio, con la luz de la tarde', show: ['confianza', 'calidad'],
    body: () => `<p>Abres un correo nuevo para Andrea. El piso 3 se va vaciando; alguien apaga las luces del fondo. <mark class="clave">Escribe tu balance de dos semanas</mark>.</p>`,
    type: 'compose', enviaA: 'andrea', para: 'Para: Andrea Salazar · Gerenta de Gestión Humana', boton: 'Enviar el balance',
    prompt: 'Arma tu balance eligiendo una frase de cada parte.',
    slots: [
      { id: 'logro', t: 'Lo que se logró', ops: [
        { id: 'l1', t: 'Pasamos a 8 zonas con jefes medidos por venta y por retención, y con un analista para el stock y el crédito.', ok: true, por: 'Concreto y conectado con el problema.' },
        { id: 'l2', t: 'Logramos una transformación exitosa del área Comercial.', ok: false, por: 'No dice nada.' },
      ] },
      { id: 'costo', t: 'Lo que costó', ops: [
        { id: 'c1', t: 'Seis personas perdieron su puesto; tres siguen en la empresa. Una filtración hizo que Susana se enterara por un chat.', ok: true, por: 'Lo que salió mal también va en el balance.' },
        { id: 'c2', t: 'No hubo mayores costos.', ok: false, por: 'No es verdad, y Andrea lo sabe.' },
      ] },
      { id: 'pendiente', t: 'Lo pendiente', ops: [
        { id: 'p1', t: 'El lunes cerramos la revisión de Jhon con procedimiento, y medimos renuncias, stock y metas por tres meses.', ok: true, por: 'Deja claro qué viene y cómo se sabrá si funcionó.' },
        { id: 'p2', t: 'Ya no queda nada pendiente.', ok: false, por: 'Queda casi todo por probar.' },
      ] },
    ],
    res: sel => {
      const buenas = ['l1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 3 : 0 }, rel: { andrea: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['balance_honesto'] : [],
        envia: ['andrea', q === 'buena' ? 'Andrea: «Este balance lo leo tal cual en el comité. Con lo malo incluido. Gracias por no maquillarlo.»' : 'Andrea: «Ok. El martes lo completamos.»'],
        out: q === 'buena' ? 'Andrea responde en dos minutos. Al final agrega: «Hace dos semanas te dije que tu trabajo era que las decisiones fueran buenas para el negocio, justas y legales. Las tres cosas a la vez. Lo hiciste. No siempre, pero lo hiciste».' : 'Andrea responde con un «ok». Sabes que el balance era mejor de lo que escribiste.',
        pro: { ok: 'Un balance honesto incluye lo logrado, lo que costó y lo que falta.', info: 'Lo que no se reconoce como error se repite en la próxima reorganización.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Balance sin maquillaje!' : 'Faltó lo que dolió.'],
      };
    },
    rules: [[BP, 'Un balance que solo cuenta lo bueno no sirve para aprender.']],
    mirada: { ve: 'Dos semanas: ocho zonas, ocho jefes, un analista, seis salidas, una filtración, unas metas que todavía hay que probar y un gerente que aprendió a preguntar. Nada de eso fue perfecto. Casi todo fue mejor de lo que habría sido sin ti.' },
  },
  {
    id: 'f7', t: '18:40', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la Carretera Central', show: ['confianza', 'personas'],
    body: () => `<p>Esperas el bus con la Carretera Central llena de combis y el cielo de Lima, gris como siempre a esta hora. Te llega el correo de Fiorella: el lunes, Jhon. Y algo nuevo: el sindicato de Producción quiere saber si en la planta «viene lo mismo».</p><p>Kusi aparece en tu pantalla con una sola pregunta: <mark class="clave">¿te ves en este puesto?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí. Me cansa, pero me gusta estar en el lugar donde se decide y que las personas cuenten ahí.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves'],
          out: 'Subes al bus y abres la libreta en una página en blanco. Escribes arriba: «Semana 3. Jhon. Sindicato de Producción». Ya estás pensando en el lunes.',
          kusi: ['celebra', '¡Entonces nos vemos el lunes, socia!'] } },
      { id: 'b', label: 'Todavía no lo sé. Me gustó acompañar a la gente, pero no sé si quiero estar siempre en medio.',
        res: { q: null, fx: { personas: 2 }, flags: ['dudas_puesto'],
          out: 'Subes al bus y miras por la ventana. Estar en medio es justo lo que hace un HRBP, y también lo que más cansa. Está bien no saberlo todavía.',
          kusi: ['pensando', 'Dudar también es una respuesta honesta.'] } },
      { id: 'c', label: 'Me veo, pero en otro rol: más cerca de las personas y menos de las decisiones del negocio.',
        res: { q: null, fx: { personas: 2 }, flags: ['dudas_puesto'],
          out: 'Piensas en Bienestar, en Relaciones Laborales, en Selección. Hay muchos lugares en RR.HH. donde lo que aprendiste estas dos semanas sirve.',
          kusi: ['curioso', 'Saber qué parte te gustó ya es mucho.'] } },
    ],
    mirada: {
      ve: 'Un HRBP vive entre dos mundos: el del negocio, que quiere resultados, y el de las personas, que quieren justicia. No hay día en que uno de los dos no te reclame algo. Quien disfruta ese lugar incómodo encuentra aquí un oficio; quien no, encuentra otros caminos igual de valiosos.',
      visual: { tipo: 'balanza', a: { t: 'Lo que cansa', items: ['Estar siempre en medio', 'Decir que no al gerente', 'Las conversaciones de salida'] }, b: { t: 'Lo que vale la pena', items: ['Ver a Mauricio preguntar «para qué»', 'Milagros saliendo a las cuatro los martes', 'Susana pidiendo aprender'] } },
    },
  },
];
