// Analista de Capacitación y Desarrollo · Capítulo 7 · «La obligatoria» · Semana 2, martes.
// Hilo de las dos semanas: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas:
// - Ley 29783, art. 35 b): no menos de cuatro capacitaciones de SST al año (capítulo 1).
// - Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 28: dentro de la jornada, en cualquier modalidad, directamente o mediante terceros.
//   https://lpderecho.pe/capacitaciones-seguridad-salud-trabajo-deben-realizarse-durante-jornada-laboral-informe-82-2015-mtpe/
//   https://noticierocontable.com/?p=51169
// - Reglamento de la Ley General de Inspección del Trabajo (D.S. 019-2006-TR), art. 27.8: no cumplir las obligaciones de formación
//   e información a los trabajadores sobre los riesgos del puesto es infracción grave (verificado en el texto oficial). Se cita
//   sin monto: las multas deben verificarse en la versión vigente.
//   https://img.lpderecho.pe/wp-content/uploads/2020/08/Res.-304-2020-Sunafil-capacitacion-seguridad-salud-LP.pdf
//   https://img.lpderecho.pe/wp-content/uploads/2022/12/Resolucion-1053-2022-Sunafil-TFL-LPDerecho.pdf
// Las personas, el requerimiento y los plazos del caso son ficticios.

export const CAP = {
  n: 7, titulo: 'La obligatoria', dia: 'Semana 2, martes', foto: 'assets/3d/scenes/municipalidad.webp',
  lugar: 'Financiera Chimú · Sede central de Trujillo',
  inicio: '07:30', fin: '19:30', cierreHora: '19:10',
  apertura: 'Martes, 7:30 a. m. El requerimiento de SUNAFIL pide algo muy simple: demostrar las capacitaciones de SST del año.', boton: 'Abrir la carpeta',
  kusi: 'Lo obligatorio no se negocia, pero sí se puede hacer bien. ¡Vamos!',
  lead: 'Abriste la carpeta de SST, separaste lo probado de lo que nadie registró, armaste un programa con los riesgos reales de las agencias y conseguiste horas dentro de la jornada.',
  reflexion: '¿Qué harías distinto si lo obligatorio te hubiera importado desde el primer día?',
  siguiente: { n: 8, titulo: '¿Sirvió?', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'registro', p: 'Registro de capacitaciones de SST', j: 'Rosario · Comité de SST', d: 0, e: 'Una lista de asistencia' },
  { id: 'sunafil', p: 'Requerimiento de SUNAFIL', j: 'Gonzalo · Legal', d: 0, e: 'Vence hoy, 17:00' },
  { id: 'programa', p: 'Programa anual de SST', j: 'Rosario · Comité de SST', d: 0, e: 'No existe' },
  { id: 'agencias', p: 'Comunicado a las 40 agencias', j: 'Tú · Desarrollo', d: 0, e: 'Por enviar' },
  { id: 'presupuesto', p: 'Partida de SST', j: 'Mario · Finanzas', d: 0, e: 'Por confirmar' },
];

export const FUTURO = {
  evidencia_real: ['Le presentaste a SUNAFIL solo lo que se podía probar, con un plan correctivo.', 'El comité del jueves querrá saber cuánto expone a Chimú. Capítulo 9.'],
  registro_reconstruido: ['Aceptaste llenar listas con fechas pasadas para completar el registro.', 'Alguien que firmó no estuvo ese día. Capítulo 9.'],
  registro_minimo: ['Presentaste una sola lista, sin explicación ni plan.', 'SUNAFIL volverá a pedir. Capítulo 10.'],
  programa_sst_listo: ['Armaste un programa de SST con los riesgos de las agencias: moto, asaltos, ergonomía y emergencias.', 'Se presentará en el comité. Capítulo 9.'],
  programa_sst_flojo: ['Tu programa de SST se parece a un catálogo.', 'Rosario te lo devolverá. Capítulo 9.'],
  sst_comunicada: ['Las agencias recibieron un comunicado claro con fechas dentro de la jornada.', 'Capítulo 8.'],
  rosario_aliada: ['Rosario te contó su accidente y ahora trabaja contigo.', 'Volverá en el capítulo 10.'],
  visita_al_herido: ['Fuiste a ver al asesor accidentado en moto.', 'Los asesores lo comentarán en campo. Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  rosario: { n: 'Rosario Ccahua', sub: 'Supervisora de SST', c: '#8A3B3B' },
  gonzalo: { n: 'Gonzalo Pinillos', sub: 'Abogado · Legal', c: '#46546B' },
  admins: { n: 'Administradores · Norte', sub: '40 agencias', c: '#6B5B2F' },
};

export const WSP = [
  { chat: 'lorena', t: '07:15', de: 'Lorena', txt: 'Vi tu mensaje de anoche. ¿Una sola lista? 😨 Voy para allá.', si: 'sunafil_preparada' },
  { chat: 'lorena', t: '07:15', de: 'Lorena', txt: 'Buenos días. ¿Ya viste lo de SUNAFIL? Voy para allá, no toques nada sin Legal.', no: 'sunafil_preparada' },
  { chat: 'ronald', t: '08:40', de: 'Ronald', txt: 'Ya tengo el cronograma de las charlas por agencia, dentro de la jornada, con prueba 📅 ¿Te lo paso hoy?', si: 'sst_jornada' },
  { chat: 'ronald', t: '08:40', de: 'Ronald', txt: 'Los videos ya están arriba. Te mando los links y sus certificados 👍', si: 'sst_grabado' },
  { chat: 'rosario', t: '11:50', de: 'Rosario', txt: 'Te pasé la lista de accidentes de los últimos dos años. No la abras con hambre.' },
  { chat: 'grupo', t: '13:10', de: 'Lorena', txt: 'Almuerzo no hay. Mario pregunta si lo de SST sale de tu presupuesto 🫠' },
  { chat: 'victor', t: '16:10', de: 'Víctor', txt: 'Una hora por agencia, en la tarde de un día flojo. Lo acepto porque es la ley. Pero que no se cruce con el acompañamiento.', si: 'sst_comunicada' },
  { chat: 'sandra', t: '18:35', de: 'Sandra', txt: 'Se cayó de la moto Julián, el de Florencia de Mora. Un carro le cerró el paso en la Av. América. Fractura de muñeca 😔' },
];

export const CORREOS = [
  { t: '07:05', de: 'Secretaría del Comité de SST', para: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'SUNAFIL · documentos por entregar hoy', html: '<p>El requerimiento pide, entre otros documentos, el registro de las capacitaciones de SST del año, con listas de asistencia y temas. La entrega vence hoy a las 17:00 y la coordina Gonzalo, de Legal.</p><p>Secretaría del Comité de SST</p>' },
  { t: '14:00', de: 'Mario Ugaz · Finanzas', para: 'Analista de Capacitación y Desarrollo', asunto: 'RE: Partida de SST', html: '<p>Las capacitaciones obligatorias van primero, eso no lo discuto. Pero necesito el programa con fechas y costo por capacitación antes de liberar nada.</p><p>Mario Ugaz</p>' },
];

export const QUIZ = [
  { q: '¿Cuántas capacitaciones de SST al año exige como mínimo la Ley 29783?', ops: ['Una', 'Dos', 'No menos de cuatro', 'Solo si hay accidentes'], ok: 2, por: 'El artículo 35, literal b), de la Ley 29783 exige no menos de cuatro capacitaciones al año.' },
  { q: 'Hay charlas que sí ocurrieron, pero sin lista. ¿Qué haces para SUNAFIL?', ops: ['Haces firmar hoy las listas con las fechas de entonces', 'Presentas lo que puedes probar, explicas el resto y das un plan correctivo', 'Dices que no sabes nada', 'Inventas temas para completar cuatro'], ok: 1, por: 'Fabricar evidencia convierte un incumplimiento en un engaño. Un plan correctivo real se puede defender.' },
  { q: '¿De dónde deberían salir los temas de las capacitaciones de SST?', ops: ['De un catálogo de proveedor', 'De los riesgos reales de cada puesto', 'De lo que quiera el gerente', 'De las redes sociales'], ok: 1, por: 'Una asesora en moto y un cajero no enfrentan los mismos riesgos: el programa debe responder a ellos.' },
  { q: 'Según el reglamento de inspección, no cumplir con la formación en SST de los trabajadores es…', ops: ['Una simple falta de forma', 'Una infracción grave', 'Algo que no se sanciona', 'Una falta solo del trabajador'], ok: 1, por: 'El art. 27.8 del D.S. 019-2006-TR lo tipifica como infracción grave.' },
  { q: '¿Una capacitación de SST virtual cumple la ley?', ops: ['Nunca', 'Sí, si se realiza dentro de la jornada de trabajo', 'Solo si dura un día', 'Sí, aunque se vea de noche'], ok: 1, por: 'El artículo 28 del reglamento admite cualquier modalidad, siempre dentro de la jornada.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'v1', t: '07:50', ch: 'documento', who: null, titulo: 'La carpeta «SST 2026»', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de reuniones, con la puerta cerrada', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('sunafil_preparada') ? 'Ya sabías lo que había, pero impreso sobre la mesa se ve peor.' : F.has('plan_sin_ley') ? 'El lunes pasado no le diste importancia a esa línea del plan. Hoy es lo único que importa.' : 'Abres la carpeta con Lorena al lado.'} Hay una lista de asistencia, un afiche del aniversario y una hoja con un sello de hace dos años.</p><p>Tienes hasta las 17:00. <mark class="clave">Primero hay que saber qué hay y qué falta</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple la ley o lo que no le sirve a la gente de las agencias.',
    doc: { t: 'Registro de capacitaciones de SST · 2026', sub: 'Financiera Chimú S.A. · carpeta del Comité de SST' },
    lines: [
      { id: 'una', t: 'Capacitaciones realizadas en el año: 1.', bad: LEY, why: 'La Ley 29783 (art. 35, literal b) exige no menos de cuatro al año.' },
      { id: 'sabado', t: 'Fecha: sábado por la tarde, durante el aniversario.', bad: LEY, why: 'El art. 28 del reglamento exige que se realice dentro de la jornada.' },
      { id: 'firmas', t: 'Lista de asistencia: 42 firmas de 600 trabajadores.', bad: LEY, why: 'La capacitación es para los trabajadores. No alcanzó ni al 10 % de ellos.' },
      { id: 'tema', t: 'Tema: «Cultura de seguridad», igual para caja, oficina y asesores en moto.', bad: BP, why: 'No responde a los riesgos de cada puesto. Una asesora en moto necesita otra cosa.' },
      { id: 'exp', t: 'Expositor: ingeniero de seguridad, con su contrato adjunto.' },
      { id: 'comite', t: 'Comité de SST instalado y con actas de sus reuniones.' },
      { id: 'cert', t: 'Sin prueba de entrada ni de salida.', duda: 'La ley no exige una prueba en estos términos, pero sin evaluación no sabes si alguien entendió algo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Marcas varias cosas, pero se te escapa algo que el inspector verá en la primera página.' : `Marcas ${hitsLey} incumplimientos. Lorena se pasa la mano por la frente: «Yo firmé ese plan en enero. Nadie lo miró, yo tampoco».`,
      flags: [], cartera: { registro: missLey ? 'Revisado a medias' : '1 capacitación, 42 firmas, sábado' },
      pro: { ok: 'Antes de responder a una autoridad, hay que saber exactamente qué hay.', risk: 'Lo que parece un trámite de carpeta es un riesgo para 600 personas y para la empresa.', info: 'Pídele a Legal que confirme el plazo y qué se puede presentar.' },
      kusi: missLey ? ['preocupado', 'Mira otra vez esa primera línea…'] : ['pensando', 'Ya sabes qué hay. Ahora, ¿qué haces?'],
    }),
    rules: [[LEY, 'Ley 29783, art. 35 b): no menos de cuatro capacitaciones de SST al año.'], [LEY, 'D.S. 005-2012-TR, art. 28: dentro de la jornada de trabajo, en cualquier modalidad.']],
    mirada: {
      ve: 'Una capacitación obligatoria tiene dos caras: que ocurra y que se pueda demostrar. El registro no es burocracia: es lo único que una empresa puede mostrarle a un inspector.',
      visual: { tipo: 'balanza', a: { t: 'Lo que exige la ley', items: ['4 capacitaciones al año', 'Dentro de la jornada', 'Para los trabajadores'] }, b: { t: 'Lo que hay', items: ['1 charla', 'Un sábado', '42 de 600'] } },
      normas: [{ ley: 'Ley 29783 y D.S. 005-2012-TR', dice: 'El empleador realiza no menos de cuatro capacitaciones al año, dentro de la jornada, en cualquiera de sus modalidades.', practica: 'Una charla de aniversario en sábado, con 42 firmas, no cumple ninguna de las tres condiciones.' }],
    },
  },
  {
    id: 'v2', t: '09:20', ch: 'presencial', who: null, titulo: 'Las listas de Gonzalo', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Legal', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Gonzalo Pinillos, abogado de 34 años, tiene un termo de café y cuatro horas de sueño. «En varias agencias los administradores sí dieron charlas de cinco minutos en la mañana, sobre asaltos y motos. Nadie registró nada, pero ocurrieron.»</p><p>Baja la voz: «Preparamos las listas ahora, con las fechas de entonces, y que firmen. <mark class="clave">No es inventar: es ordenar lo que pasó</mark>. Si no, nos sancionan». Lorena te mira. Quiere saber qué piensas.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No firmar nada con fechas pasadas. Presentar lo que se puede probar, explicar las charlas que los administradores puedan sustentar con mensajes o fotos reales, y adjuntar un plan correctivo con fechas.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 3, confianza: 1 }, rel: { lorena: 1 }, flags: ['evidencia_real'], cartera: { sunafil: 'Entrega real, con plan correctivo' },
          out: 'Gonzalo suspira: «Nos pueden sancionar igual». Es cierto. Pero a las 11 ya tienes doce administradores mandando fotos con fecha del grupo de WhatsApp. No son capacitaciones completas, pero son verdad.',
          pro: { ok: 'Un incumplimiento se puede corregir. Un documento fabricado te persigue.', risk: 'La sanción sigue siendo posible, y Lorena lo asume con su firma.', info: 'Registra desde hoy cada capacitación el mismo día en que ocurre.' },
          kusi: ['animo', 'La verdad con un plan pesa más que un papel bonito.'] } },
      { id: 'b', label: 'Aceptar: las charlas ocurrieron, solo falta el papel. Mejor proteger a Chimú y a Lorena.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -2, confianza: 1 }, flags: ['registro_reconstruido'], cartera: { sunafil: 'Entrega con listas reconstruidas' },
          out: 'A las 15:00 llegan 200 firmas por motorizado. Una asesora de Chepén escribe: «Señorita, me hicieron firmar una charla de marzo. Yo entré en junio». La hoja ya está en el fólder.',
          pro: { ok: 'Quieres proteger a tu jefa y a la empresa.', risk: 'Presentar a un inspector una lista con fechas falsas convierte un incumplimiento en un engaño, y deja a quienes firmaron en una situación incómoda.' },
          kusi: ['indignado', '¿Firmar en noviembre algo de marzo? No, pues.'] } },
      { id: 'c', label: 'Presentar solo la lista del aniversario y esperar a ver qué responde SUNAFIL: menos papeles, menos riesgo.',
        res: { q: 'aceptable', fx: { etica: 1, cumplimiento: -2 }, flags: ['registro_minimo'], cartera: { sunafil: 'Una lista, sin plan' },
          out: 'Entregas una hoja. No mientes en nada. Tampoco dices qué vas a hacer al respecto, y el inspector se queda solo con ese dato.',
          pro: { ok: 'No fabricas nada.', risk: 'Sin plan correctivo, solo muestras el incumplimiento, y pierdes la oportunidad de demostrar que ya estás actuando.' },
          kusi: ['pensando', 'Honesto… pero solo a medias.'] } },
    ],
    rules: [[LEY, 'No cumplir con la formación e información a los trabajadores sobre los riesgos del puesto es infracción grave (D.S. 019-2006-TR, art. 27.8).'], [BP, 'Nunca firmes ni hagas firmar listas con fechas falsas. Lo que no se registró, se explica.']],
    mirada: {
      ve: 'Las empresas reales pasan por este momento más seguido de lo que parece. La tentación se presenta como «ordenar papeles», no como falsificar. Una analista de capacitación firma con su nombre lo que dicen sus registros: por eso los llena el mismo día.',
      visual: { tipo: 'cambio', titulo: 'Qué presentar', pares: [['Listas con fechas pasadas', 'Evidencia real, con su fecha'], ['Silencio', 'Explicación breve y por escrito'], ['«Ya veremos»', 'Plan correctivo con fechas']] },
    },
  },
  {
    id: 'v3', t: '11:15', ch: 'presencial', who: null, titulo: 'Rosario y su bastón', banner: 'assets/foto2/revisan.webp', lugar: 'Oficina de SST, en el sótano', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Rosario Ccahua, cusqueña de 52 años, supervisora de SST, baja las escaleras con un bastón y sin apuro. Empezó como asesora en Trujillo. Hace nueve años un camión la sacó de su moto en la Panamericana, camino a Virú.</p><p>«Llevo años pidiendo presupuesto para esto. <mark class="clave">Antes de armar cualquier programa, pregúntame lo que quieras</mark>. Pero tengo reunión a las 12.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Rosario.',
    opts: [
      { id: 'accidentes', label: '¿Qué accidentes ha habido en las agencias?', info: '«Motos, la mayoría. Después, asaltos a asesores en la calle y a cajeras en la agencia. Y dolores de espalda y muñeca que nadie reporta. Te mando la lista.»' },
      { id: 'moto', label: '¿Qué tendría que saber un asesor que sale en moto?', info: '«Revisar frenos y casco antes de salir, no contestar el celular en marcha, y nada de apurarse por la meta. A mí nadie me lo dijo. Tenía 43 años y seis visitas pendientes.»' },
      { id: 'asalto', label: '¿Qué se le enseña a alguien para un asalto?', info: '«Que no defienda el dinero. Muchos creen que si les roban, se lo van a descontar. Hay que decirles claro qué hacer y a quién llamar.»' },
      { id: 'comite', label: '¿El comité aprueba el programa?', info: '«Sí. El programa de capacitación pasa por el comité. Mañana hay sesión extraordinaria, pero hay que llevar algo listo.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('accidentes') ? 4 : 2, personas: 3, confianza: 1 },
      flags: ['rosario_aliada'], cartera: { programa: picks.includes('accidentes') ? 'Temas según accidentes reales' : 'Temas por definir' },
      out: 'Rosario se levanta con ayuda del bastón. «Hace nueve años que quiero que alguien de Capacitación baje a este sótano.» Te alcanza una lista con 31 accidentes en dos años.',
      kusi: ['curioso', 'Treinta y un accidentes que no estaban en ningún curso.'],
    }),
    mirada: {
      ve: 'Las personas de SST conocen los riesgos que el plan de capacitación ignora. Una capacitación obligatoria deja de ser un trámite cuando responde a lo que de verdad le pasó a alguien. El bastón de Rosario enseña más que muchas diapositivas.',
      visual: { tipo: 'embudo', titulo: 'Accidentes en dos años', niveles: [['Total', 31], ['En moto', 18], ['Asaltos', 8], ['Otros', 5]] },
    },
  },
  {
    id: 'v4', t: '13:40', ch: 'documento', who: null, titulo: 'El programa de SST', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, sin almuerzo', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Hoy no hay almuerzo: un paquete de galletas de soda y la lista de Rosario.${F.has('presupuesto_vanidad') ? ' Lo peor: en tu recorte del jueves dejaste fuera parte de esto, y Mario ya lo notó.' : F.has('presupuesto_obligatorias') ? ' Por suerte, en el recorte del jueves protegiste esta partida.' : ''}${F.has('sst_grabado') ? ' Los videos de Ronald no alcanzan: nadie sabe quién los vio.' : F.has('sst_jornada') ? ' El cronograma de Ronald, dentro de la jornada, te ahorra medio trabajo.' : ''}</p><p>Quedan semanas del año y faltan tres capacitaciones. <mark class="clave">Que sean las que hacen falta</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas del programa anual de SST.', boton: 'Guardar el programa',
    bloques: [
      { id: 'temas', t: 'Temas', n: 3, ops: [
        { id: 't1', t: 'Manejo seguro de moto para quienes salen a campo: revisión previa, casco y no usar el celular en marcha.', ok: true, por: 'Responde al riesgo más frecuente de su lista.' },
        { id: 't2', t: 'Qué hacer ante un asalto: no defender el dinero, a quién llamar y cómo se reporta.', ok: true, por: 'Responde a lo que Rosario contó.' },
        { id: 't3', t: 'Ergonomía y emergencias para caja y oficina, incluido sismo.', ok: true, por: 'Cubre a quien no sale a campo.' },
        { id: 't4', t: 'Liderazgo seguro con coach internacional.', ok: false, por: 'Bonito, pero no atiende ningún accidente de la lista.' },
      ] },
      { id: 'forma', t: 'Cómo se hará', n: 2, ops: [
        { id: 'f1', t: 'Por agencia, una hora, dentro de la jornada, en la franja de menos clientes.', ok: true, por: 'Cumple el art. 28 y le cuesta menos a Víctor.' },
        { id: 'f2', t: 'Lista de asistencia firmada el mismo día, con tema, expositor y prueba corta.', ok: true, por: 'Lo que falló este año.' },
        { id: 'f3', t: 'Por Zoom, el sábado por la mañana, opcional.', ok: false, por: 'Fuera de la jornada, y sin garantía de asistencia.' },
      ] },
      { id: 'quien', t: 'Quién responde', n: 1, ops: [
        { id: 'q1', t: 'Comité de SST aprueba; Rosario y Desarrollo ejecutan; cada administrador responde por su registro.', ok: true, por: 'Responsabilidad clara, con un dueño en cada agencia.' },
        { id: 'q2', t: 'Lo dejamos en manos del proveedor, que entrega los certificados.', ok: false, por: 'La obligación sigue siendo de la empresa.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'programa_sst_flojo' : 'programa_sst_listo'], cartera: { programa: q === 'riesgosa' ? 'Un catálogo sin dueño' : '3 temas, por agencia y con registro', presupuesto: q === 'riesgosa' ? 'Sin sustento para Mario' : 'S/ 6,000 sustentados' },
        out: q === 'buena' ? 'Rosario devuelve el programa con una sola nota, escrita a mano: «Por fin». Lo presentará al comité mañana.' : q === 'aceptable' ? 'Rosario lo revisa: «Va bien, pero falta decir quién responde en cada agencia».' : 'Rosario te lo devuelve: «Esto lo dicta cualquiera en cualquier parte. Mira la lista otra vez».',
        pro: { ok: 'Un programa con riesgos reales, en la jornada y con registro cumple la ley y sirve de verdad.', risk: 'Un catálogo «cumple» en el papel y no protege a nadie.', info: 'Agenda las tres fechas antes de que acabe el año, y súbelas a un calendario compartido.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Esto sí cuida a la gente!' : '¿Responde a la lista de Rosario?'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 28: dentro de la jornada, en cualquier modalidad, directamente o mediante terceros.'], [BP, 'Un programa de SST parte de los riesgos reales de cada puesto.']],
    mirada: {
      ve: 'Lo obligatorio puede ser lo más útil. Un programa de SST bien hecho es de las pocas capacitaciones que le pueden salvar la vida a alguien, y no le cuesta horas de calle si se organiza bien.',
      visual: { tipo: 'flujo', titulo: 'El programa de SST', pasos: ['Lista de accidentes', 'Temas por riesgo', 'Por agencia, en la jornada', 'Registro el mismo día', 'Aprobación del comité'] },
    },
  },
  {
    id: 'v5', t: '15:30', ch: 'whatsapp', who: null, titulo: 'El comunicado', banner: 'assets/foto2/callcenter.webp', lugar: 'Grupo de administradores', show: ['personas', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Tienes que avisarles a 40 administradores que este año habrá tres capacitaciones de SST más, una hora cada una.${F.has('victor_trato') ? ' Víctor ya aceptó el acompañamiento; ahora no quieres gastar lo ganado.' : F.has('victor_escalado') ? ' Víctor sigue molesto por lo de la Gerencia General.' : ''}</p><p>En el grupo ya hay 120 mensajes sobre la campaña de cierre. <mark class="clave">Tu mensaje tiene una sola oportunidad</mark>.</p>`,
    type: 'compose', enviaA: 'admins', para: 'Para: Administradores · Norte', boton: 'Enviar el mensaje',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'por', t: 'Por qué', ops: [
        { id: 'p1', t: 'Colegas: en dos años tuvimos 31 accidentes, la mayoría en moto. La Ley 29783 exige cuatro capacitaciones al año y solo hicimos una.', ok: true, por: 'Un dato que duele y la ley, sin amenazar.' },
        { id: 'p2', t: 'Colegas: por exigencia de SUNAFIL, deben cumplir de inmediato lo siguiente.', ok: false, por: 'Suena a castigo, y no explica nada.' },
      ] },
      { id: 'que', t: 'Qué pides', ops: [
        { id: 'q1', t: 'Son tres sesiones de una hora, dentro de la jornada, en la franja de menos clientes que cada uno me indique.', ok: true, por: 'Les das tiempo acotado y voz sobre la hora.' },
        { id: 'q2', t: 'Deben liberar a todo su personal en las fechas que les mandaremos.', ok: false, por: 'Sin voz ni hora, la agencia lo vive como un estorbo.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'Cada sesión se registra el mismo día. Si tienen fotos de charlas pasadas, con su fecha real, háganmelas llegar.', ok: true, por: 'Pides evidencia real, no firmas nuevas.' },
        { id: 'c2', t: 'Háganme firmar las listas de lo que dieron este año para completar la carpeta.', ok: false, por: 'Justo lo que no se debe pedir.' },
      ] },
    ],
    res: sel => {
      const buenas = ['p1', 'q1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, cumplimiento: q === 'riesgosa' ? -2 : 3 }, rel: { victor: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['sst_comunicada'], cartera: { agencias: q === 'riesgosa' ? 'Mensaje mal recibido' : 'Comunicado con horario por agencia' },
        out: q === 'buena' ? 'Nando responde primero: «El Porvenir, de 3 a 4 los martes». Después llegan 22 horarios en una hora. Uno agrega: «Mi cuñado se fracturó en moto el año pasado».' : q === 'aceptable' ? 'Llegan 12 respuestas y tres preguntas. Te toca llamar a los demás.' : 'Un administrador responde «¿y quién coloca?». Varios lo aplauden con emojis. Víctor te llama.',
        pro: { ok: 'Un comunicado con motivo, tiempo acotado y voz para la agencia consigue colaboración.', risk: 'Una orden sin motivo se responde en grupo, y no a tu favor.', info: 'El grupo de WhatsApp sirve para avisar. Las fechas oficiales, por correo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡22 horarios en una hora!' : '¿Por qué lo haría un administrador?'],
      };
    },
    rules: [[BP, 'Comunica una capacitación obligatoria con su motivo, tiempo acotado y voz para quien la debe organizar.']],
    mirada: {
      ve: 'Decir «es obligatorio» consigue asistencia, no compromiso. Los administradores cooperan cuando entienden el riesgo real y pueden elegir la hora que menos le cuesta a su agencia.',
      visual: { tipo: 'mensaje', titulo: 'Un comunicado que se cumple', txt: 'En dos años tuvimos 31 accidentes, la mayoría en moto. Son tres sesiones de una hora, dentro de la jornada, en la franja que ustedes me indiquen. Cada sesión se registra el mismo día.' },
    },
  },
  {
    id: 'v6', t: '16:30', ch: 'presencial', who: 'lorena', titulo: 'Antes de las cinco', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Pasillo de Legal', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: (n, F) => `<p>Faltan treinta minutos para el cierre. Lorena tiene el fólder en la mano y sus manos no están del todo quietas.${F.has('registro_reconstruido') ? ' Le pesa más de lo que quisiera.' : ''} Gonzalo imprime lo último en la impresora de Legal, que hoy, por milagro, funciona.</p><p>«Ordénalo tú. <mark class="clave">Lo que el inspector vea primero es lo que va a recordar</mark>.»</p>`,
    type: 'secuencia', prompt: 'Ordena lo que le presentarán a SUNAFIL.', boton: 'Cerrar el fólder',
    items: [
      { id: 'carta', t: 'Carta breve de la empresa: qué se entrega y quién responde', por: 'Abre con un responsable claro.' },
      { id: 'reg', t: 'Registro de lo realizado este año, sin adornos', por: 'Lo que se puede probar.' },
      { id: 'evid', t: 'Evidencia real de charlas de agencia, con su fecha', por: 'Lo que sí ocurrió, tal como ocurrió.' },
      { id: 'prog', t: 'Programa de SST con las tres capacitaciones pendientes', por: 'Lo que falta, con fechas.' },
      { id: 'act', t: 'Acta del comité de SST que lo revisará mañana', por: 'La instancia que corresponde.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 3 : -1 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        cartera: { sunafil: q === 'buena' ? 'Entregado 16:52, ordenado' : 'Entregado 16:58, con apuro' },
        out: q === 'buena' ? 'Gonzalo presenta el expediente a las 16:52 por la casilla electrónica. Lorena se sienta en la escalera: «Bueno. Ya no depende de nosotras».' : 'Reordenan dos veces con Gonzalo mirando el reloj. Lo presentan a las 16:58.',
        pro: { ok: 'Un expediente claro dice que hay alguien a cargo, incluso cuando hubo errores.', info: 'Guarda el cargo de recepción: te lo van a pedir en el comité.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? 'A tiempo y en orden. ¡Bien!' : 'Salió, con el corazón en la mano.'],
      };
    },
    rules: [[BP, 'Conserva el cargo de todo lo que entregues a una autoridad.']],
    mirada: {
      ve: 'Responder a un requerimiento se parece a preparar un buen documento: primero, quién responde; luego, qué hubo y qué falta. La analista no decide sola, pero su orden ayuda a que Legal y su jefa defiendan bien a la empresa.',
      visual: { tipo: 'linea', titulo: 'El martes de SUNAFIL', hitos: [['7:50', 'Saber qué hay'], ['9:20', 'No fabricar nada'], ['13:40', 'Programa con riesgos reales'], ['15:30', 'Avisar a las agencias'], ['16:52', 'Entregar']] },
    },
  },
  {
    id: 'v7', t: '18:45', ch: 'whatsapp', who: null, titulo: 'Julián, en la Av. América', banner: 'assets/3d/scenes/hospital.webp', lugar: 'Paradero de combis', show: ['personas', 'tiempo'],
    body: () => `<p>Sales mareada de hambre. Sandra te escribe: Julián, el asesor de Florencia de Mora, se cayó de la moto. Es el mismo que ayer te dijo «ya será esta semana». Fractura de muñeca, y está en una clínica de la Av. América.</p><p>Mañana tienes campo temprano. <mark class="clave">Hoy aprendiste de memoria los números de los accidentes; este tiene nombre</mark>.</p>`,
    chat: ['Se cayó Julián. Fractura de muñeca 😔 Está esperando a su mamá.'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Tomar la combi hacia la clínica, sentarte diez minutos con él y luego avisar a Rosario.',
        res: { q: null, fx: { personas: 5, tiempo: -2 }, rel: { sandra: 1 }, flags: ['visita_al_herido'], envia: ['rosario', 'Rosario, Julián de Florencia de Mora se accidentó en moto. Estoy con él. Te cuento qué se necesita reportar.'],
          out: 'Julián, con la muñeca enyesada, se avergüenza de verte. «Estaba apurado, señorita. Me faltaban dos para la meta.» Le preguntas si comió. Le traes una inka cola. Su mamá llega de Laredo media hora después.', kusi: ['animo', 'Lo que hiciste hoy tiene cara.'] } },
      { id: 'b', label: 'Escribirle a Julián y a Rosario, e irte a descansar: mañana tienes que estar bien.',
        res: { q: null, fx: { personas: 2, tiempo: 2 }, envia: ['rosario', 'Rosario, Julián de Florencia de Mora se accidentó en moto. ¿Puedes ver el reporte? Mañana te llamo.'],
          out: 'Julián te responde con un pulgar y la palabra «gracias». Rosario se encarga del reporte. Esta noche duermes como una piedra.', kusi: ['pensando', 'Cuidarte también te deja seguir cuidando.'] } },
    ],
    mirada: { ve: 'Detrás de cada línea del programa hay una persona. Y un accidente se debe reportar y atender según los procedimientos de la empresa: aquí Rosario sabe qué hacer. Tu parte es no dejar que quede en una estadística.' },
  },
];
