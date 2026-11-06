// Asistente de SST · Capítulo 7 · «El comité» · Semana 2, martes.
// Hilo de las dos semanas: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas:
// - Ley 29783 y D.S. 005-2012-TR: comité de SST paritario en empresas con 20 o más trabajadores; reunión ordinaria mensual
//   (capítulo 1). Quórum mínimo para sesionar: la mitad más uno de sus integrantes; si no hay quórum, el presidente cita a una
//   nueva reunión dentro de los ocho días siguientes. Boletín del Estado peruano que lo transcribe:
//   https://cdn.www.gob.pe/uploads/document/file/6754202/4950969-boletin-011-funciones-del-comite-de-seguridad-y-salud-en-el-trabajo.pdf
// - Acuerdos por consenso; a falta de consenso, por mayoría simple; en empate, dirime el presidente. Las sesiones se asientan
//   en el libro de actas y se controla el cumplimiento de los acuerdos (mismo boletín y guías de funciones del comité:
//   https://portalrh.senati.edu.pe/sites/default/files/editor/5.4_funciones_del_comite_de_seguridad_y_salud_en_el_trabajo.pdf).
// - D.S. 005-2012-TR, art. 42: el comité participa en la investigación de accidentes (capítulo 6).

export const CAP = {
  n: 7, titulo: 'El comité', dia: 'Semana 2, martes', foto: 'assets/foto2/reunion-circulos.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '06:55', fin: '18:40', cierreHora: '18:20',
  apertura: 'Martes. A las tres de la tarde, el comité de SST se reúne por primera vez desde junio. Te toca llevar el acta.', boton: 'Preparar la reunión',
  kusi: 'El comité es donde la obra se escucha a sí misma. ¡Que esta vez no sea para la foto!',
  lead: 'Ordenaste la agenda, aseguraste el quórum, preparaste a Elmer, escuchaste a los representantes, sostuviste un acuerdo incómodo, revisaste el acta y la enviaste.',
  reflexion: '¿Qué diferencia a un comité que se reúne de un comité que decide?',
  siguiente: { n: 8, titulo: 'La víspera', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'comite', p: 'Comité de SST', j: 'Marleny · Trabajadores', d: 0, e: 'Hoy 15:00 · primera reunión desde junio' },
  { id: 'investigacion', p: 'Investigación del accidente', j: 'Ingrid · SSOMA', d: 0, e: 'Primer tema del comité' },
  { id: 'piso12', p: 'Vaciado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Pasado mañana' },
  { id: 'acta', p: 'Libro de actas', j: 'Tú', d: 0, e: 'Última acta: junio' },
  { id: 'herramientas', p: 'Amoladoras y guardas', j: 'Wilmer · Almacén', d: 0, e: 'Pedido en trámite' },
];

export const FUTURO = {
  acuerdo_condiciones: ['El acta dice que el vaciado solo empieza con permiso, rescate listo y viento por debajo del límite del fabricante de la bomba, y que se detiene si falta algo.', 'Mañana lo preparas y el jueves se pone a prueba. Capítulos 8 y 9.'],
  acta_suavizada: ['Aceptaste escribir el acuerdo de las condiciones del vaciado como una simple «recomendación».', 'El jueves nadie sabrá si es obligatorio. Capítulo 9.'],
  comite_vivo: ['El comité sesionó con quórum, trató los temas de los trabajadores y dejó acuerdos con responsable y fecha.', 'Marleny lo recordará en el balance. Capítulo 10.'],
  rescate_pendiente: ['Supiste que la obra no tiene un plan de rescate en altura practicado.', 'Mañana se simula. Capítulo 8.'],
  elmer_preparado: ['Ayudaste a Elmer a llegar al comité con datos y sin miedo.', 'Su cuadrilla lo verá en el vaciado. Capítulo 9.'],
  acta_enviada: ['Enviaste el acta con los acuerdos al grupo del comité el mismo día.', 'Todos saben qué toca mañana.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  comite: { n: 'Comité SST · Los Algarrobos', sub: '6 miembros y tú', c: '#2F6B3F' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  marleny: { n: 'Marleny Flores', sub: 'Representante en el comité', who: 'marleny' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
  elmer: { n: 'Elmer Chapoñán', sub: 'Capataz · Encofrados del Norte', c: '#8C3B2E' },
};

export const WSP = [
  { chat: 'marleny', t: '06:20', de: 'Marleny', txt: 'Leí el informe anoche, ingeniera. Traigo tres preguntas de la cuadrilla 📝', si: 'comite_con_informe' },
  { chat: 'grupo', t: '06:40', de: 'Ingrid', txt: 'Hoy presido yo el comité y tú llevas el acta. Que no sea como la de junio: una hoja con fotos.' },
  { chat: 'renzo', t: '09:20', de: 'Renzo', txt: 'Tengo reunión con el cliente a las 3. Manden a Rocío en mi lugar.' },
  { chat: 'segundo', t: '11:00', de: 'Don Segundo', txt: 'Ingeniera, ¿yo tengo que ir al comité? No soy miembro.', si: 'segundo_verdad' },
  { chat: 'elmer', t: '12:15', de: 'Elmer', txt: 'Ingeniera, ¿me van a sacar en cara lo de las guardas delante de todos?' },
];

export const CORREOS = [
  { t: '07:30', de: 'Rocío Santamaría', para: 'Comité SST', asunto: 'Convocatoria · sesión ordinaria del comité', html: '<p>Se convoca a sesión ordinaria del Comité de Seguridad y Salud en el Trabajo, hoy martes a las 15:00, en el comedor de obra.</p><p>Agenda propuesta por SSOMA. Se ruega puntualidad.</p><p>Rocío Santamaría · Administradora de obra</p>' },
];

export const QUIZ = [
  { q: '¿Cuál es el quórum mínimo para que el comité de SST sesione?', ops: ['Dos personas', 'La mitad más uno de sus integrantes', 'Todos sin excepción', 'Solo el presidente'], ok: 1, por: 'El reglamento fija el quórum en la mitad más uno; si no se alcanza, se cita a nueva reunión dentro de ocho días.' },
  { q: '¿Cómo se toman los acuerdos del comité?', ops: ['Los decide el gerente', 'Por consenso; si no, por mayoría simple, y en empate dirime el presidente', 'Solo por unanimidad', 'Los decide la representante más antigua'], ok: 1, por: 'Así lo establece el reglamento de la Ley 29783.' },
  { q: '¿Qué debe tener cada acuerdo del acta para que se cumpla?', ops: ['Una foto', 'Un responsable y una fecha', 'La firma del cliente', 'Muchas palabras'], ok: 1, por: 'El comité controla el cumplimiento de sus acuerdos: sin responsable ni fecha, no hay qué controlar.' },
  { q: '¿Cómo está conformado el comité de SST?', ops: ['Solo por jefes', 'De forma paritaria: representantes del empleador y de los trabajadores', 'Solo por trabajadores', 'Por el cliente y la constructora'], ok: 1, por: 'Es un órgano paritario: la mitad representa a la empresa y la mitad a los trabajadores.' },
  { q: 'Un miembro te pide que un acuerdo se escriba como «recomendación» para que no obligue. ¿Qué haces?', ops: ['Lo cambias: él tiene más cargo', 'Escribes lo que el comité acordó; si quiere cambiarlo, se vota', 'Lo borras del acta', 'Escribes las dos versiones'], ok: 1, por: 'El acta refleja lo acordado en la sesión, no lo que alguien prefiera después.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:15', ch: 'documento', who: null, titulo: 'La agenda', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Buscas el libro de actas y lo encuentras en un cajón, bajo una caja de guantes. La última acta es de junio: media página, «se revisaron temas de seguridad», seis firmas y una foto pegada con cinta.${F.has('marleny_agenda') ? ' Marleny te dejó su lista: subcontratas, agua en los pisos altos, la escalera del 6.' : ''}</p><p>Hoy hay demasiados temas para dos horas. <mark class="clave">El orden decide qué se discute de verdad y qué se queda para «la próxima»</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena la agenda de la sesión.', boton: 'Enviar la agenda a Rocío',
    items: [
      { id: 'quorum', t: 'Verificar el quórum y abrir la sesión', por: 'Sin quórum no hay acuerdos válidos.' },
      { id: 'anterior', t: 'Revisar los acuerdos pendientes del acta de junio', por: 'Lo que no se cumplió se pregunta primero.' },
      { id: 'accidente', t: 'Investigación del accidente del viernes', por: 'El comité participa en la investigación.' },
      { id: 'vaciado', t: 'Condiciones de seguridad para el vaciado del jueves', por: 'El trabajo crítico que viene.' },
      { id: 'trabajadores', t: 'Temas de los representantes de los trabajadores', por: 'Subcontratas, agua, escaleras.' },
      { id: 'acuerdos', t: 'Leer los acuerdos con responsable y fecha, y firmar el acta', por: 'Se cierra con lo que cada uno se lleva.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['agenda_lista'], cartera: { comite: q === 'riesgosa' ? 'Agenda desordenada' : 'Agenda de 6 puntos enviada' },
        out: q === 'buena' ? 'Rocío imprime la agenda y la pega en la puerta del comedor. Al pasar, dos obreros se detienen a leerla. Uno dice: «¿Agua en los pisos altos? Por fin».' : 'La agenda sale, pero el punto de los trabajadores quedó al final. Si la reunión se alarga, será lo primero que se corte.',
        pro: { ok: 'Empezar por lo pendiente y cerrar con acuerdos evita que la reunión sea una charla más.', risk: 'Si los temas de los trabajadores van al final, el mensaje es que importan menos.', info: 'Revisar el acta anterior muestra si el comité cumple lo que acuerda.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una agenda que obliga a decidir!' : 'Lo pendiente primero, los acuerdos al final.'],
      };
    },
    rules: [[BP, 'Una agenda de comité empieza por lo pendiente y termina con acuerdos que tienen responsable y fecha.']],
    mirada: {
      ve: 'Muchos comités de SST existen solo en papel: se reúnen poco, no tienen agenda y sus actas dicen «se revisaron temas». Una agenda clara es la primera señal de que el comité va a trabajar.',
      visual: { tipo: 'flujo', titulo: 'Agenda del comité', pasos: ['Quórum', 'Pendientes de junio', 'Accidente', 'Vaciado', 'Temas de los trabajadores', 'Acuerdos y firma'] },
    },
  },
  {
    id: 'c2', t: '09:40', ch: 'llamada', who: null, titulo: '¿Quién viene?', banner: 'assets/foto/llamada.webp', lugar: 'Caseta de SSOMA', show: ['cumplimiento', 'tiempo', 'confianza'],
    body: (n, F) => `<p>El comité tiene seis miembros: por la empresa, Ingrid, Renzo y Rocío, la administradora de obra; por los trabajadores, Marleny, Teodoro y Ruth Llontop, operadora de mezcladora de Ferreñafe. Renzo acaba de escribir que no viene.</p><p>Confirmas uno por uno. <mark class="clave">Sin la mitad más uno, no hay sesión</mark>.</p>`,
    type: 'calls',
    calls: [['Rocío Santamaría · administradora de obra', 'Contesta entre facturas', '«Voy, ingeniera. Pero yo no puedo comprometer nada del vaciado; eso lo decide Renzo. Si quieren acuerdos del jueves, él tiene que estar.»'], ['Ruth Llontop · representante de los trabajadores', 'Contesta con la mezcladora de fondo', '«A las tres salgo de la mezcladora, pero mi hijo sale del colegio a las cuatro y media. Si dura mucho, me tengo que ir.»'], ['Ing. Renzo Cáceres', 'Contesta en el carro', '«Tengo al cliente a las tres. ¿Qué tanto necesitan de mí?» Pausa. «Si el tema del vaciado va primero, puedo estar veinte minutos.»']],
    prompt: '¿Cómo organizas la sesión?',
    choices: [
      { id: 'a', label: 'Mantener la sesión con quórum, pedirle a Renzo que venga veinte minutos para el punto del vaciado, y garantizarle a Ruth que su tema va antes de las cuatro.',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 3, tiempo: -1 }, flags: ['renzo_viene'], cartera: { comite: 'Quórum asegurado; Renzo 20 minutos; Ruth hasta las 16:15' },
          out: 'Mueves el punto del vaciado al inicio de la segunda media hora, justo cuando llega Renzo. Ruth dice: «Así sí, ingeniera». Seis de seis, aunque Renzo solo por veinte minutos.',
          pro: { ok: 'Aseguras el quórum y acomodas la agenda a la vida real de los miembros.', info: 'Quien decide sobre el vaciado tiene que estar cuando se acuerde.' },
          kusi: ['feliz', '¡Quórum y agenda con sentido común!'] } },
      { id: 'b', label: 'Postergar la reunión hasta que Renzo pueda estar completo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: -3, confianza: -2 }, rel: { marleny: -1 }, cartera: { comite: 'Postergado otra vez' },
          out: 'Marleny te llama: «¿Otra vez? Desde junio que lo postergan». El vaciado es pasado mañana. El comité no dirá nada sobre él.',
          pro: { ok: 'Esperas a quien decide.', risk: 'Había quórum. Postergar otra vez confirma que el comité depende de la agenda de un jefe.' },
          kusi: ['triste', 'Desde junio esperando…'] } },
      { id: 'c', label: 'Hacerla sin Renzo y acordar igual las condiciones del vaciado.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -1 }, cartera: { comite: 'Sesión sin el residente' },
          out: 'Hay quórum, pero Rocío te repite que no puede comprometer nada del vaciado. Los acuerdos sobre el jueves saldrán sin el responsable de cumplirlos.',
          pro: { ok: 'Hay quórum y la sesión es válida.', risk: 'Un acuerdo sin el responsable de ejecutarlo en la sala es más fácil de ignorar.' },
          kusi: ['pensando', 'Válido… pero ¿quién lo cumple?'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR: el quórum mínimo es la mitad más uno de los integrantes; sin quórum, se cita a nueva reunión dentro de los ocho días siguientes.']],
    mirada: {
      ve: 'El comité funciona con personas que tienen otras obligaciones: una mezcladora, un hijo que sale del colegio, un cliente que espera. Organizar la sesión para que puedan estar es parte de que el comité exista de verdad.',
      visual: { tipo: 'embudo', titulo: 'Miembros del comité', niveles: [['Miembros', 6], ['Confirmados', 6], ['Quórum mínimo', 4]] },
    },
  },
  {
    id: 'c3', t: '12:20', ch: 'presencial', who: null, titulo: 'Elmer tiene miedo', banner: 'assets/foto/cafe.webp', lugar: 'Comedor de obra', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Elmer se sienta frente a ti en el comedor con su táper de arroz con menestra, sin abrirlo. ${F.has('subcontrata_incluida') ? 'Fue él quien te mandó la foto de sus amoladoras sin guarda.' : 'Sabe que sus amoladoras aparecen en la investigación.'}</p><p>«Ingeniera, si me sacan en cara lo de las guardas delante de mi gente, <mark class="clave">mañana no me respeta nadie</mark>. Y el dueño de la subcontrata me va a cuadrar.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Proponerle que sea él quien cuente en el comité cuántas guardas va a reponer y para cuándo, con los datos que ya te dio.',
        res: { q: null, fx: { personas: 4, confianza: 3 }, flags: ['elmer_preparado'], cartera: { herramientas: 'Elmer presentará su plan de guardas' },
          out: 'Elmer abre por fin el táper. «Tres guardas para el viernes. Eso sí puedo decirlo.» Apunta en una servilleta: tres guardas, una revisión los lunes.', kusi: ['feliz', 'De acusado a responsable. ¡Qué bacán!'] } },
      { id: 'b', label: 'Decirle que no se preocupe, que el comité no es para culpar a nadie.',
        res: { q: null, fx: { personas: 1 },
          out: 'Elmer asiente, pero sigue sin abrir el táper. En la sesión llega a la defensiva y habla poco.', kusi: ['pensando', 'Tranquilizar no es lo mismo que preparar.'] } },
    ],
    rules: [[BP, 'Prepara a quienes llegan al comité con miedo: que traigan una solución, no solo una explicación.']],
    mirada: { ve: 'El capataz de una subcontrata vive entre dos presiones: la de su jefe y la de la constructora. Si llega al comité sintiéndose acusado, se defenderá; si llega con un plan, se vuelve aliado.' },
  },
  {
    id: 'c4', t: '15:10', ch: 'presencial', who: 'marleny', titulo: 'Habla la obra', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Comedor de obra', show: ['personas', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>Seis sillas de plástico alrededor de dos mesas del comedor. Ingrid abre la sesión: hay quórum. ${F.has('segundo_verdad') ? 'Don Segundo está de pie al fondo, invitado, con la gorra en la mano.' : F.has('segundo_sancion') ? 'Don Segundo no vino. Dicen que está molesto.' : ''} Se revisa el informe del accidente${F.has('informe_solido') ? ' y nadie pide cambiar una coma: el pedido de amoladoras ya está aprobado.' : '; hay preguntas que el informe no responde.'}</p><p>Marleny toma la palabra: «Ahora lo del jueves. La cuadrilla tiene dudas». <mark class="clave">Puedes hacer dos preguntas a los representantes</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para los representantes de los trabajadores.',
    opts: [
      { id: 'rescate', label: 'Si alguien queda colgado del arnés en el 12, ¿quién lo baja y cómo?', info: 'Teodoro se ríe sin ganas: «Nadie sabe, ingeniera. Hay una camilla en el tópico y ya». Ingrid baja la mirada: no hay un plan de rescate en altura practicado.' },
      { id: 'horas', label: '¿Cuántas horas va a durar el vaciado para la cuadrilla?', info: 'Ruth: «Dicen que empezamos a las seis y terminamos cuando se acabe el concreto. La otra vez fueron catorce horas, sin almuerzo sentado». Rocío anota algo en su cuaderno.' },
      { id: 'viento', label: '¿Qué pasa si sopla fuerte como el jueves pasado?', info: 'Marleny: «La pluma de la bomba se mueve, ingeniera. El operador es de Trujillo y dice que su máquina tiene un límite de viento, pero nadie le pregunta». Renzo, que acaba de llegar, se cruza de brazos.' },
      { id: 'agua', label: '¿Qué pasó con el agua en los pisos altos?', info: 'Ruth: «Sigue sin llegar. Subimos con botellas que compramos nosotros. En el vaciado vamos a estar arriba todo el día».' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, calidad: picks.includes('rescate') || picks.includes('viento') ? 4 : 2, cumplimiento: 2 }, rel: { marleny: 1 },
      flags: [...(picks.includes('rescate') ? ['rescate_pendiente'] : []), ...(picks.includes('viento') ? ['viento_bomba'] : [])],
      cartera: picks.includes('rescate') ? { piso12: 'Sin plan de rescate en altura practicado' } : picks.includes('viento') ? { piso12: 'Límite de viento de la bomba: preguntar al operador' } : { comite: 'Turnos y agua para el día del vaciado' },
      out: 'Anotas todo en el acta, con el nombre de quien lo dijo. Por primera vez en la sesión, Teodoro y Ruth hablan más que los de la empresa.',
      kusi: ['curioso', 'La cuadrilla sabe lo que el plan no dice…'],
    }),
    mirada: {
      ve: 'Los representantes de los trabajadores en el comité traen lo que no aparece en los planes: el rescate que nadie practicó, las catorce horas sin almuerzo, el agua que no llega. Preguntarles bien es la mejor auditoría de un trabajo crítico.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo la obra', txt: 'Nadie sabe cómo bajar a alguien colgado del arnés. La pluma se mueve con el viento y nadie le pregunta al operador. Catorce horas sin almuerzo sentado. Agua comprada por nosotros.' },
    },
  },
  {
    id: 'c5', t: '15:45', ch: 'presencial', who: null, titulo: '«Eso no lo decide el comité»', banner: 'assets/foto2/tension.webp', lugar: 'Comedor de obra', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Marleny propone el acuerdo: el vaciado empieza solo si hay permiso firmado, rescate en altura listo y viento por debajo del límite que indique el fabricante de la bomba; si falta algo, se detiene. Teodoro y Ruth levantan la mano. Ingrid también. Rocío duda.</p><p>Renzo te habla a ti, que llevas el acta: «El comité no puede parar la producción. <mark class="clave">Escríbelo como recomendación</mark>, no como acuerdo. Si no, el cliente me mata».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escribir lo que se votó: un acuerdo, con el resultado de la votación, y anotar la objeción de Renzo en el acta con sus palabras.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: 2 }, flags: ['acuerdo_condiciones', 'comite_vivo'], cartera: { acta: 'Acuerdo: condiciones para el vaciado; objeción del residente anotada' },
          out: 'Cuatro votos a favor, Rocío se abstiene, Renzo en contra. Lo escribes tal cual. Renzo firma con fuerza y se va al carro sin despedirse. Marleny te mira y no dice nada, pero aprieta los labios como quien aguanta una sonrisa.',
          pro: { ok: 'El acta refleja lo que pasó, incluida la objeción. Nadie puede decir después que se le ignoró.', risk: 'Renzo sale molesto dos días antes del vaciado.', info: 'Que la objeción quede escrita también protege a Renzo: dejó constancia de su preocupación.' },
          kusi: ['animo', 'El acta dice lo que pasó. Punto.'] } },
      { id: 'b', label: 'Escribirlo como recomendación, como pide Renzo: sin él a favor, el acuerdo no se va a cumplir de todas formas.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4, personas: -3 }, rel: { marleny: -1 }, flags: ['acta_suavizada'], cartera: { acta: 'Condiciones del vaciado como «recomendación»' },
          out: 'Renzo asiente. Marleny cierra su libreta despacio. Ruth le dice algo al oído a Teodoro. El comité votó un acuerdo y el acta dice otra cosa.',
          pro: { ok: 'Evitas un choque con el residente.', risk: 'Cambiaste lo que el comité decidió. Los representantes ya saben que su voto pesa menos que una molestia de arriba.' },
          kusi: ['triste', 'Votaron una cosa… y quedó otra.'] } },
      { id: 'c', label: 'Proponer una pausa de diez minutos para buscar una redacción que Renzo pueda aceptar, antes de cerrar el punto.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: 2, tiempo: -2 }, flags: ['acuerdo_condiciones'], cartera: { acta: 'Acuerdo negociado con el residente' },
          out: 'En la pausa, Renzo acepta si el acuerdo dice «en coordinación con la residencia». Se vota otra vez. Ruth se tuvo que ir a las 4:30 por su hijo y no alcanzó a votar.',
          pro: { ok: 'Buscas consenso, que es lo primero que pide el reglamento.', risk: 'La pausa costó una voz de los trabajadores, y la nueva redacción deja una puerta abierta.' },
          kusi: ['pensando', 'Consenso… ¿a qué precio?'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR: los acuerdos se toman por consenso; a falta de consenso, por mayoría simple, y en empate dirime el presidente.'], [BP, 'Quien lleva el acta escribe lo acordado, no lo que alguien prefiere después.']],
    mirada: {
      ve: 'El acta es el único registro de lo que el comité decidió. Si quien la escribe la ajusta para no incomodar a un jefe, el comité pierde su sentido. Anotar la objeción con nombre y palabras es justo y protege a todos.',
      visual: { tipo: 'balanza', a: { t: '«Recomendación»', items: ['Renzo tranquilo', 'El cliente sin sorpresas', 'Nada obliga el jueves'] }, b: { t: 'Acuerdo votado', items: ['Lo que decidió el comité', 'La objeción queda escrita', 'El jueves hay reglas claras'] } },
      normas: [{ ley: 'D.S. 005-2012-TR, reglamento de la Ley 29783', dice: 'El comité adopta sus acuerdos por consenso; si no lo hay, por mayoría simple, y en empate dirime el presidente. Las sesiones se registran en el libro de actas.', practica: 'Cuatro a favor, uno en contra y una abstención es un acuerdo, aunque el que vota en contra sea el residente.' }],
    },
  },
  {
    id: 'c6', t: '17:15', ch: 'documento', who: null, titulo: 'El acta', banner: 'assets/esc/escritorio.webp', lugar: 'Caseta de SSOMA', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Pasas el acta en limpio en la laptop. Rocío te reenvía «unas correcciones de Renzo» para el texto que va al libro.${F.has('acta_suavizada') ? ' La mayoría ya las aceptaste en la sesión.' : ''}</p><p>Antes de imprimir y pegar en el libro, <mark class="clave">lees el borrador con las correcciones incluidas</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que el acta no puede decir así o lo que le falta.',
    doc: { t: 'Acta de sesión ordinaria del Comité de SST', sub: 'Edificio Los Algarrobos · martes · borrador con correcciones' },
    lines: [
      { id: 'quorum', t: 'Asistentes: 6 de 6 miembros (el residente, para el punto del vaciado). Se verificó el quórum. Preside: Ing. Ingrid Delgado.' },
      { id: 'junio', t: 'Acuerdos de junio: «se revisaron».', bad: BP, why: 'El acta de junio no tenía acuerdos con responsable: hay que decir que no se pudieron verificar y por qué.' },
      { id: 'accidente', t: 'Accidente del viernes: «acto inseguro del trabajador; caso cerrado».', bad: LEY, why: 'El comité revisó un informe con causas de fondo y medidas. Escribir otra cosa no refleja lo que se trató, y el comité participa en la investigación.' },
      { id: 'vaciado', t: 'Vaciado: «se recomienda evaluar el clima».', bad: LEY, why: 'Si se votó un acuerdo, el acta debe decir el acuerdo y la votación, no una frase más suave.' },
      { id: 'resp', t: 'Medidas: reponer guardas, plan de rescate, agua en pisos altos. Responsable: «el área».', bad: BP, why: 'Cada acuerdo necesita una persona responsable y una fecha, o nadie podrá controlarlo.' },
      { id: 'objecion', t: 'El residente de obra deja constancia de su desacuerdo por el impacto en el plazo.' },
      { id: 'firmas', t: 'Firmas de los asistentes y copia a la gerencia.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Pegas el acta en el libro con algunas correcciones de Renzo. Marleny la leerá mañana.' : `Corriges ${hitsLey} líneas para que digan lo que pasó en la sesión y pones responsable y fecha a cada medida: guardas, Elmer, viernes; rescate, Ingrid, mañana; agua, Rocío, mañana. Le respondes a Rocío: «El acta va como se votó».`,
      flags: missLey ? [] : ['acta_fiel'], rel: { ingrid: missLey ? 0 : 1 },
      cartera: { acta: missLey ? 'Acta con correcciones de Renzo' : 'Acta fiel: acuerdos con responsable y fecha' },
      pro: { ok: 'Un acta fiel y con responsables es lo que vuelve controlables los acuerdos.', risk: 'Las «correcciones» después de la sesión pueden cambiar lo que el comité decidió.', info: 'Si alguien quiere cambiar un acuerdo, se trata en la siguiente sesión, no en el borrador.' },
      kusi: missLey ? ['preocupado', '¿Eso fue lo que se votó?'] : ['celebra', '¡Un acta que se puede cumplir!'],
    }),
    rules: [[LEY, 'El comité lleva el libro de actas y controla el cumplimiento de sus acuerdos (reglamento de la Ley 29783).']],
    mirada: {
      ve: 'Un acta de comité no es un resumen amable: es un documento que alguien revisará en una inspección o después de un accidente. Por eso debe decir quién estuvo, qué se votó y quién hace qué y para cuándo.',
      visual: { tipo: 'cambio', titulo: 'De las correcciones al acta fiel', pares: [['Acto inseguro, caso cerrado', 'Causas de fondo y medidas'], ['Se recomienda evaluar el clima', 'Acuerdo: condiciones para el vaciado'], ['Responsable: el área', 'Elmer, Ingrid y Rocío, con fecha']] },
    },
  },
  {
    id: 'c7', t: '18:00', ch: 'whatsapp', who: null, titulo: 'Para el grupo del comité', banner: 'assets/esc/meta.webp', lugar: 'Caseta de SSOMA', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Afuera pasa la última volquete del día levantando polvo. Te duelen los hombros de tanto escribir. Mañana es la víspera del vaciado y hay que preparar el rescate, el permiso y el plan.</p><p>Antes de irte, mandas el resumen al grupo del comité. <mark class="clave">Lo que no se envía hoy, mañana se discute otra vez</mark>.</p>`,
    type: 'compose', enviaA: 'comite', para: 'Para: Comité SST · Los Algarrobos', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué envías', ops: [
        { id: 'q1', t: 'Les comparto el acta de hoy en PDF, tal como quedó en el libro.', ok: true, por: 'El documento, no un resumen interpretado.' },
        { id: 'q2', t: 'Les cuento que la reunión salió bien.', ok: false, por: 'No dice qué se acordó.' },
      ] },
      { id: 'acuerdos', t: 'Los acuerdos', ops: [
        { id: 'a1', t: 'Acuerdos: guardas (Elmer, viernes), simulacro de rescate (Ingrid, mañana 10:00), agua en pisos altos (Rocío, mañana), condiciones del vaciado (todos, jueves).', ok: true, por: 'Cada uno sabe qué le toca.' },
        { id: 'a2', t: 'Hay varios acuerdos, revisen el acta cuando puedan.', ok: false, por: 'Nadie lee un PDF a las seis de la tarde.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'Gracias por quedarse. Mañana a las 10 los espero en el piso 11 para el simulacro.', ok: true, por: 'Reconoce y convoca.' },
        { id: 'c2', t: 'Cualquier duda, me escriben.', ok: false, por: 'Cierra sin siguiente paso.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'a1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 1, personas: q === 'buena' ? 3 : 0, cumplimiento: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['acta_enviada'], cartera: { comite: q === 'riesgosa' ? 'Acta sin difundir' : 'Acta y acuerdos enviados al grupo' },
        out: q === 'buena' ? 'Teodoro responde con un pulgar y una foto del libro de actas: «Para que no se pierda». Ruth: «Mañana estoy a las 10». Rocío: «Agua coordinada con el proveedor para mañana a las 9».' : q === 'aceptable' ? 'Llegan dos pulgares. Nadie pregunta por el simulacro.' : 'El mensaje queda entre stickers de buenas noches.',
        pro: { ok: 'Enviar el acta el mismo día, con los acuerdos en el mensaje, hace que el comité siga trabajando después de la reunión.', risk: 'Si los acuerdos quedan solo en el libro, mañana nadie los recuerda.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡El comité sigue vivo después de la reunión!' : 'Cada acuerdo con nombre y fecha.'],
      };
    },
    rules: [[BP, 'Difunde el acta y los acuerdos el mismo día, con responsables y fechas a la vista.']],
    mirada: {
      ve: 'Un comité no termina cuando se levanta la sesión. El seguimiento de los acuerdos es lo que convierte una reunión en cambios en la obra. Por eso el mensaje del mismo día importa tanto como el acta.',
      visual: { tipo: 'linea', titulo: 'Los acuerdos del comité', hitos: [['Mañana 9:00', 'Agua en pisos altos'], ['Mañana 10:00', 'Simulacro de rescate'], ['Jueves', 'Condiciones del vaciado'], ['Viernes', 'Guardas repuestas']] },
    },
  },
];
