// HR Business Partner · Capítulo 6 · «Los que no entran» · Semana 2, lunes.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - TUO del D.Leg. 728 (D.S. 003-97-TR), arts. 46 b) y 48: el cese colectivo por motivos económicos, tecnológicos,
//   estructurales o análogos solo procede si comprende a no menos del 10 % del total del personal de la empresa, y sigue
//   un procedimiento ante la Autoridad Administrativa de Trabajo.
//   https://cdn.www.gob.pe/uploads/document/file/7845640/6615570-resolucion-gerencial-regional-000012-2025-ggr-grtpe.pdf
//   https://lpderecho.pe/cese-colectivo-supuestos-procede/
// - TUO del D.Leg. 728, art. 16 d): el mutuo disenso es una causa de extinción del contrato de trabajo.
// - Constitución Política del Perú, art. 26, inc. 2: carácter irrenunciable de los derechos reconocidos por la
//   Constitución y la ley.

export const CAP = {
  n: 6, titulo: 'Los que no entran', dia: 'Semana 2, lunes', foto: 'assets/foto/acuerdo.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '08:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Lunes de la segunda semana. Mauricio presenta la estructura al directorio a las 10. En la nueva estructura hay ocho jefes de zona y un analista. Y hay seis personas que no aparecen en ninguna caja.', boton: 'Ir a la sala de Fiorella',
  kusi: 'Cómo sale alguien de una empresa dice tanto de ella como cómo entra. ¡Dale, con cuidado!',
  lead: 'Elegiste el camino legal para las salidas, buscaste dónde reubicar, limpiaste un convenio con trampas, armaste un plan para una persona concreta y peleaste por el momento correcto para comunicar.',
  reflexion: '¿Qué te costó más hoy: decir «no hay lugar» o decir «todavía no»?',
  siguiente: { n: 7, titulo: 'La comunicación', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'seis', p: 'Seis personas sin lugar', j: 'Andrea · Gestión Humana', d: 5, e: '4 supervisores y 2 asistentes' },
  { id: 'reubica', p: 'Vacantes para reubicar', j: 'Gonzalo · Compensaciones', d: 5, e: 'Por revisar' },
  { id: 'convenio', p: 'Convenio de salida', j: 'Fiorella · Relaciones Laborales', d: 5, e: 'Borrador del estudio externo' },
  { id: 'anuncio', p: 'Fecha del anuncio', j: 'Mauricio · Comercial', d: 5, e: 'Miércoles, por confirmar' },
];

export const FUTURO = {
  salida_mutuo: ['Las salidas se ofrecen como mutuo disenso voluntario, con incentivo y después de buscar reubicación.', 'Capítulo 8.'],
  salida_forzada: ['Aceptaste presionar a las seis personas para que renuncien.', 'Una de ellas lo grabará. Capítulo 8.'],
  reubicacion_ofrecida: ['Hay tres vacantes reales para ofrecer antes de hablar de salidas.', 'Capítulo 8.'],
  convenio_limpio: ['El convenio paga todos los beneficios y no obliga a renunciar a derechos.', 'Capítulo 8.'],
  convenio_trampa: ['El convenio salió con cláusulas que no resisten a un inspector.', 'Capítulo 8.'],
  plan_patricia: ['Armaste un plan de salida concreto para Patricia: conversación, condiciones y apoyo.', 'Capítulo 7.'],
  anuncio_ordenado: ['Mauricio aceptó comunicar el miércoles, primero a cada persona y luego al equipo.', 'Capítulo 7.'],
  anuncio_apurado: ['Mauricio quiere comunicar hoy mismo, por correo.', 'Capítulo 7.'],
  milagros_verdad: ['A Milagros no le mentiste en el ascensor.', 'Capítulo 8.'],
};

export const CHATS = {
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  susana: { n: 'Susana Vargas', sub: 'Supervisora de ventas', who: 'susana' },
  fiorella: { n: 'Fiorella Campos', sub: 'Relaciones Laborales', c: '#8E44AD' },
  gonzalo: { n: 'Gonzalo Arce', sub: 'Analista de Compensaciones', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'fiorella', t: '07:45', de: 'Fiorella', txt: 'Llegó el borrador del convenio del estudio externo. No me gusta. Te lo paso a las 11.' },
  { chat: 'fiorella', t: '08:05', de: 'Fiorella', txt: 'Por cierto: encontré en el acta del viernes «vieja escuela» y «sale de licencia». Eso hay que borrarlo YA.', si: 'sesgos_pasaron' },
  { chat: 'fiorella', t: '08:05', de: 'Fiorella', txt: 'Vi lo de que todos los jefes sean «de confianza». Mi respuesta sigue siendo no.', si: 'confianza_disfraz' },
  { chat: 'gonzalo', t: '09:20', de: 'Gonzalo', txt: 'Ojo: el Excel viejo con la columna de edad sigue en la carpeta de Comercial. Alguien lo abrió hoy.', si: 'datos_sucios' },
  { chat: 'mauricio', t: '11:40', de: 'Mauricio', txt: 'Directorio aprobó la estructura. Ahora quiero cerrar las salidas rápido.' },
  { chat: 'susana', t: '16:30', de: 'Susana', txt: 'Hoy hay un silencio raro en la oficina. ¿Ya está?', si: 'susana_escuchada' },
];

export const CORREOS = [
  { t: '07:30', de: 'Mauricio Lerner', para: 'Andrea Salazar; HR Business Partner · Comercial', asunto: 'Salidas', html: '<p>Para el directorio necesito decir que las seis salidas se resuelven esta semana. Propongo un cese colectivo por reestructuración, que es lo que corresponde, ¿no?</p><p>M.</p>' },
];

export const QUIZ = [
  { q: 'Para un cese colectivo por motivos estructurales, la ley exige que comprenda…', ops: ['A cualquier número de personas', 'A no menos del 10 % del total del personal de la empresa', 'Solo a supervisores', 'A quien el gerente decida'], ok: 1, por: 'TUO del D.Leg. 728, art. 48. En una empresa de 2,100 personas, seis no alcanzan.' },
  { q: 'El mutuo disenso es…', ops: ['Una renuncia forzada', 'Un acuerdo voluntario entre empleador y trabajador para terminar la relación', 'Un despido con otro nombre', 'Ilegal en el Perú'], ok: 1, por: 'Es una causa de extinción del contrato (art. 16 d), siempre que sea de verdad voluntario.' },
  { q: 'Un convenio de salida que dice «el trabajador renuncia a reclamar sus beneficios»…', ops: ['Es válido si firma', 'No vale: los derechos reconocidos por la ley son irrenunciables', 'Es obligatorio', 'Solo vale con notario'], ok: 1, por: 'Constitución, art. 26, inc. 2: carácter irrenunciable de los derechos.' },
  { q: 'Antes de ofrecer una salida, un buen HRBP…', ops: ['Calcula el costo mínimo', 'Busca si hay un puesto real donde la persona pueda reubicarse', 'Prepara la carta de despido', 'Avisa al grupo de WhatsApp'], ok: 1, por: 'Reubicar primero es más justo y, muchas veces, más barato.' },
  { q: 'Comunicar seis salidas por correo, un lunes a las 6 p. m., …', ops: ['Es eficiente', 'Es la peor forma: cada persona merece una conversación en persona', 'Es lo que pide la ley', 'Evita conflictos'], ok: 1, por: 'Las malas noticias se dan en persona, con quien decide y con RR.HH.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 's1', t: '08:15', ch: 'presencial', who: 'andrea', titulo: '«Un cese colectivo»', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala de Relaciones Laborales', show: ['cumplimiento', 'etica', 'confianza'],
    body: (n, F) => `<p>Andrea, Fiorella y tú leen el correo de Mauricio en la pantalla. Fiorella se ríe sin ganas. «Somos 2,100. Seis personas no son ni el 1 %. <mark class="clave">Un cese colectivo no aplica</mark>.»</p><p>Andrea te pasa la pregunta: «¿Qué le proponemos a Mauricio, que en dos horas está frente al directorio?». ${F.has('jhon_fuera') ? 'Y añade: «Ojo, que Mauricio todavía está molesto por lo de Jhon».' : ''}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Buscar primero reubicación para cada persona; a quien no se pueda reubicar, ofrecerle un mutuo disenso de verdad voluntario, con incentivo además de sus beneficios.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, personas: 3 }, rel: { andrea: 1 }, flags: ['salida_mutuo'], cartera: { seis: 'Ruta: reubicar → mutuo disenso voluntario' },
          out: 'Fiorella asiente: «Y si alguien no acepta, se queda y buscamos dónde. Nadie firma con una pistola en la cabeza». Andrea le escribe a Mauricio con la propuesta antes de las 9.',
          pro: { ok: 'Es el camino legal y el más humano: nadie sale sin que se haya buscado dónde quedarse.', risk: 'Si alguien no acepta, la empresa tendrá que encontrarle un lugar.', info: 'El incentivo se suma a los beneficios sociales: no los reemplaza.' },
          kusi: ['celebra', '¡Legal y humano a la vez!'] } },
      { id: 'b', label: 'Pedirles a los jefes que «convenzan» a los seis de renunciar esta semana; así no hay despido.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -5 }, flags: ['salida_forzada'], cartera: { seis: 'Presión para renunciar' },
          out: 'Fiorella se queda mirándote. «Eso tiene nombre, y no es renuncia.» Andrea no lo firma, pero Mauricio ya leyó tu idea en el chat.',
          pro: { ok: 'Parece rápido y barato.', risk: 'Una renuncia arrancada con presión puede ser cuestionada como despido, y la presión misma puede ser hostilidad.' },
          kusi: ['indignado', '¿Renuncia «convencida»? Eso no es voluntario.'] } },
      { id: 'c', label: 'Despedirlos pagando la indemnización por despido arbitrario: es más rápido y la ley lo permite.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, etica: -2, personas: -3 }, cartera: { seis: 'Despido con indemnización' },
          out: 'Fiorella explica que pagar la indemnización no convierte el despido en justo y que alguien puede pedir reposición. Andrea prefiere probar primero la reubicación.',
          pro: { ok: 'Es un camino conocido y con costo calculable.', risk: 'Saltarse la búsqueda de reubicación y el acuerdo voluntario expone a demandas y duele más.' },
          kusi: ['pensando', 'Rápido no siempre es lo mejor.'] } },
    ],
    rules: [[LEY, 'TUO del D.Leg. 728, art. 48: el cese colectivo por causas objetivas requiere no menos del 10 % del personal.'], [LEY, 'Art. 16 d): el mutuo disenso extingue el contrato, siempre que sea voluntario.']],
    mirada: {
      ve: 'Mauricio dijo «cese colectivo» porque suena ordenado. Pero la ley lo reserva para reducciones grandes, con un procedimiento ante la Autoridad de Trabajo. Para seis personas, el orden lo pones tú: reubicar primero, acordar después y nunca presionar.',
      visual: { tipo: 'flujo', titulo: 'La ruta de una salida justa', pasos: ['¿Hay un puesto real?', 'Ofrecer reubicación', 'Si no, mutuo disenso voluntario', 'Beneficios + incentivo', 'Si no acepta, se queda'], aqui: 0 },
      normas: [{ ley: 'TUO del D.Leg. 728, arts. 46 b) y 48', dice: 'La extinción por motivos económicos, tecnológicos, estructurales o análogos solo procede si comprende a no menos del 10 % del total del personal y sigue un procedimiento ante la Autoridad de Trabajo.', practica: 'En Nutrimás, el umbral sería de 210 personas. Seis salidas se resuelven de otra manera.' }],
    },
  },
  {
    id: 's2', t: '09:45', ch: 'documento', who: null, titulo: '¿Dónde caben?', banner: 'assets/foto/plano-equipo.webp', lugar: 'Tu escritorio, con el reporte de vacantes', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Gonzalo te manda el reporte de vacantes de toda la empresa. Las seis personas: Patricia, Marco, Wilfredo y Gisela, supervisores; Milagros y Hugo, asistentes comerciales cuyo trabajo hará la nueva app. ${F.has('susana_fuera') ? 'Y Susana, que no entró en la terna.' : ''} ${F.has('rocio_excluida') ? 'Y Rocío, gestante, que quedó fuera: Fiorella ya marcó su nombre en rojo.' : ''}</p><p><mark class="clave">Elige tres vacantes reales</mark> para ofrecer antes de hablar de salidas.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres vacantes que ofrecerás primero.', boton: 'Reservar estas vacantes', resumen: 'Reservaste',
    cols: ['Vacante', 'Para quién podría servir'],
    rows: [
      { id: 'analista', cells: ['Analista de abastecimiento y crédito (nuevo rol)', 'Gisela: fue jefa de almacén antes de supervisora'] },
      { id: 'formador', cells: ['Formador/a comercial para vendedores nuevos', 'Wilfredo: el mejor puntaje en el curso de producto'] },
      { id: 'trade', cells: ['Asistente de Trade Marketing en Lurín', 'Milagros: conoce a todos los clientes por nombre'] },
      { id: 'noche', cells: ['Operario de planta, turno noche', 'Cualquiera: «para que no se quede en la calle»'] },
      { id: 'temporal', cells: ['Contrato de tres meses en campaña navideña', 'Hugo: «mientras tanto»'] },
    ],
    score: { analista: 3, formador: 3, trade: 3, noche: -2, temporal: -1 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0, tiempo: -1 },
        flags: q === 'riesgosa' ? [] : ['reubicacion_ofrecida'], cartera: { reubica: q === 'buena' ? '3 vacantes reales: analista, formador y trade' : 'Vacantes de compromiso' },
        out: q === 'buena' ? 'Gonzalo confirma que las tres son vacantes aprobadas y que el sueldo de cada una queda dentro de su banda. De seis personas, tres podrían quedarse.' : 'Reservas vacantes, pero algunas parecen más un castigo que una oportunidad.',
        pro: { ok: 'Ofreces puestos reales que usan lo que cada persona sabe hacer.', risk: 'Ofrecer un turno noche de operario a una supervisora o un contrato temporal «mientras tanto» puede leerse como una forma de empujar a renunciar.', info: 'Una reubicación con rebaja de categoría tiene que ser aceptada por la persona, nunca impuesta.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡De seis, tres podrían quedarse!' : '¿Esa vacante ayuda o empuja?'],
      };
    },
    rules: [[BP, 'Reubicar primero: busca puestos reales donde la persona aporte lo que sabe.']],
    mirada: {
      ve: 'Una reorganización no tiene que terminar en seis salidas. Cuando miras lo que cada persona sabe hacer, aparecen lugares que el organigrama no mostraba. No siempre se puede; pero cuando se puede, es lo que más confianza construye.',
      visual: { tipo: 'embudo', titulo: 'Las seis personas', niveles: [['Sin lugar en Comercial', 6], ['Con una vacante real que ofrecer', 3], ['Que necesitarán un acuerdo de salida', 3]] },
    },
  },
  {
    id: 's3', t: '11:10', ch: 'documento', who: null, titulo: 'El convenio', banner: 'assets/foto/revisa.webp', lugar: 'Sala de Relaciones Laborales', show: ['cumplimiento', 'etica'],
    body: () => `<p>Fiorella imprime el borrador del estudio externo y te lo pasa con un resaltador amarillo. «Tú lo lees como HRBP y yo como abogada. <mark class="clave">Marca lo que no puede salir así</mark>.»</p>`,
    type: 'flag', prompt: 'Marca las cláusulas que incumplen la ley o que no son buena práctica.',
    doc: { t: 'Convenio de extinción por mutuo disenso · borrador', sub: 'Estudio externo · versión 1' },
    lines: [
      { id: 'objeto', t: 'Primera: las partes acuerdan, de manera libre y voluntaria, extinguir el contrato de trabajo por mutuo disenso.' },
      { id: 'beneficios', t: 'Segunda: la empresa pagará la liquidación de beneficios sociales (CTS, vacaciones y gratificación truncas) y, además, un incentivo.' },
      { id: 'renuncia', t: 'Tercera: el trabajador renuncia a cualquier derecho o beneficio laboral que pudiera corresponderle.', bad: LEY, why: 'Los derechos reconocidos por la Constitución y la ley son irrenunciables (Constitución, art. 26, inc. 2). Una cláusula así no vale y ensucia todo el convenio.' },
      { id: 'plazo', t: 'Cuarta: el trabajador deberá firmar en la misma reunión en que se le entregue el convenio.', bad: BP, why: 'Sin tiempo para leerlo ni consultarlo, el acuerdo deja de parecer voluntario.' },
      { id: 'condicion', t: 'Quinta: si el trabajador no firma hoy, el incentivo se pierde y se evaluará su desempeño.', bad: LEY, why: 'Condicionar con una amenaza vicia la voluntad. Un mutuo disenso con presión puede ser cuestionado como despido.' },
      { id: 'reserva', t: 'Sexta: ambas partes guardarán reserva sobre el monto del incentivo.' },
      { id: 'carta', t: 'Séptima: la empresa no entregará carta de recomendación.', bad: BP, why: 'Nada obliga a dar una carta de recomendación, pero negarla por escrito a gente que se va sin culpa es innecesariamente duro. Deja la puerta abierta.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Devuelves el borrador con comentarios de forma. Fiorella lo revisa después de ti y te lo devuelve con dos cláusulas en rojo: «Esto no lo firma nadie que tenga un abogado».' : `Marcaste ${hitsLey} problemas legales. Fiorella reescribe el convenio: plazo de cinco días para firmarlo, beneficios completos, incentivo sin amenazas y una cláusula nueva: «el trabajador puede consultarlo con quien desee».`,
      flags: [missLey ? 'convenio_trampa' : 'convenio_limpio'], cartera: { convenio: missLey ? 'Borrador con cláusulas riesgosas' : 'Convenio limpio: 5 días para decidir' },
      pro: { ok: 'Un convenio limpio protege a la persona y a la empresa.', risk: 'Una sola cláusula de renuncia a derechos o una amenaza basta para que el acuerdo no valga.', info: 'Dar tiempo para leer no es un riesgo: es lo que hace que el acuerdo sea de verdad voluntario.' },
      kusi: missLey ? ['preocupado', 'Se te pasó una trampa en el papel…'] : ['celebra', '¡Convenio limpio y voluntario!'],
    }),
    rules: [[LEY, 'Constitución, art. 26, inc. 2: los derechos laborales son irrenunciables.'], [LEY, 'TUO del D.Leg. 728, art. 16 d): el mutuo disenso supone voluntad libre de ambas partes.']],
    mirada: {
      ve: 'Un mutuo disenso vale lo que vale la voluntad de quien firma. Si hay prisa, amenazas o renuncia a derechos, deja de ser un acuerdo y se convierte en un despido mal disfrazado.',
      visual: { tipo: 'cambio', titulo: 'De firma bajo presión a acuerdo voluntario', pares: [['Firma hoy mismo', 'Cinco días para decidir'], ['Renuncia a todo derecho', 'Beneficios completos + incentivo'], ['Si no firma, se evalúa su desempeño', 'Si no firma, se queda'], ['Sin carta', 'Puerta abierta']] },
      normas: [{ ley: 'Constitución Política del Perú, art. 26, inc. 2', dice: 'En la relación laboral se respeta el carácter irrenunciable de los derechos reconocidos por la Constitución y la ley.', practica: 'Ninguna cláusula puede hacer que alguien renuncie a su CTS, sus vacaciones o su gratificación.' }],
    },
  },
  {
    id: 's4', t: '13:20', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del almuerzo', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio, con un sánguche a medio comer', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>El sánguche de pollo se te enfría junto al teclado. Antes de armar cada plan de salida, necesitas tres datos. <mark class="clave">Haces tres llamadas</mark>.</p>`,
    type: 'calls',
    calls: [['Gonzalo · Compensaciones', 'Contesta con la calculadora en la mano', '«La liquidación de cada uno ya la tengo. Para el incentivo, Andrea aprobó una fórmula por años de servicio, igual para todos. Patricia tiene nueve años; Marco, tres.»'], ['Jefe de Producción', 'Contesta con ruido de máquinas', '«¿Gente de ventas en la planta? No, gracias. El turno noche es duro, y si vienen a la fuerza se van en un mes.»'], ['Consultora de recolocación', 'Contesta una psicóloga muy amable', '«Podemos acompañar a cada persona tres meses: CV, entrevistas y contactos en el sector. Funciona mejor si se ofrece el mismo día de la conversación, no semanas después.»']],
    prompt: 'Con lo que escuchaste, ¿qué haces?',
    choices: [
      { id: 'a', label: 'Usar la misma fórmula de incentivo para todos, descartar el turno noche como reubicación y ofrecer recolocación desde el primer día.',
        res: { q: 'buena', fx: { calidad: 4, personas: 4, cumplimiento: 2 }, cartera: { reubica: 'Turno noche descartado; recolocación desde el día 1' },
          out: 'Te queda claro el paquete: beneficios completos, incentivo por años igual para todos y tres meses de recolocación.',
          pro: { ok: 'Un paquete igual para todos se puede explicar y no genera agravios.', info: 'Lo que se ofrece el mismo día pesa más que lo que se promete para después.' },
          kusi: ['feliz', 'Un paquete justo y explicable.'] } },
      { id: 'b', label: 'Darle más incentivo a quien Mauricio prefiera que se vaya rápido.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, etica: -3 }, cartera: { reubica: 'Incentivos distintos según la prisa' },
          out: 'Gonzalo duda: «¿Y cómo le explico a Marco que Patricia recibió más por el mismo motivo?».',
          pro: { ok: 'Puede acelerar una salida.', risk: 'Incentivos a la carta generan comparaciones y sospechas.' },
          kusi: ['pensando', '¿Cómo se explica eso después?'] } },
    ],
    rules: [[BP, 'Un paquete de salida igual para todos, con una fórmula conocida, evita agravios y se puede explicar.']],
    mirada: { ve: 'La justicia de una salida se mide en detalles: que la fórmula sea igual para todos, que la reubicación no sea un castigo y que el apoyo llegue el mismo día. Las personas se acuerdan de cómo se las trató al salir.' },
  },
  {
    id: 's5', t: '15:00', ch: 'documento', who: null, titulo: 'El plan de Patricia', banner: 'assets/esc/mesa.webp', lugar: 'Sala pequeña sin ventanas', show: ['personas', 'calidad', 'etica'],
    body: () => `<p>Patricia Odría tiene nueve años en Nutrimás. Su zona del Callao vende bajo la meta y su equipo rota mucho; pero fue ella quien abrió esa zona cuando nadie quería ir. Es mamá sola de dos chicos.</p><p>Andrea te pide su plan de salida como modelo para los demás. <mark class="clave">Arma cada bloque</mark>.</p>`,
    type: 'builder', prompt: 'Arma el plan de salida de Patricia.', boton: 'Guardar el plan',
    bloques: [
      { id: 'quien', t: 'Quién y dónde', n: 2, ops: [
        { id: 'q1', t: 'Mauricio, que decide, y tú, de RR.HH.; en una sala privada, no en su zona.', ok: true, por: 'Quien decide da la noticia; RR.HH. acompaña.' },
        { id: 'q2', t: 'Al inicio del día, para que no se quede toda la jornada esperando.', ok: true },
        { id: 'q3', t: 'Por llamada, para que no sea tan incómodo.', ok: false, por: 'Incómodo para quién. Nueve años merecen una conversación en persona.' },
      ] },
      { id: 'que', t: 'Qué se le dice', n: 2, ops: [
        { id: 'd1', t: 'La razón real: su rol desaparece en la nueva estructura y no hay una vacante equivalente.', ok: true, por: 'Honesto y sin culpa personal.' },
        { id: 'd2', t: 'Lo que se le ofrece: beneficios completos, incentivo por años y recolocación por tres meses.', ok: true },
        { id: 'd3', t: 'Que su zona vende poco y que su equipo se va.', ok: false, por: 'No es el motivo de la salida; solo la hiere y abre una discusión.' },
      ] },
      { id: 'despues', t: 'Qué viene después', n: 2, ops: [
        { id: 'a1', t: 'Cinco días para leer el convenio y consultarlo con quien quiera.', ok: true },
        { id: 'a2', t: 'Si no acepta, se queda y seguimos buscando dónde.', ok: true, por: 'Lo que hace que el acuerdo sea voluntario.' },
        { id: 'a3', t: 'Desactivar su correo y su credencial esa misma tarde.', ok: false, por: 'Si no ha firmado nada, sigue siendo trabajadora. Tratarla como sospechosa es humillante.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .83 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0, etica: q === 'riesgosa' ? -3 : 2 },
        flags: q === 'buena' ? ['plan_patricia'] : [], cartera: { seis: q === 'buena' ? 'Plan modelo listo (Patricia)' : 'Plan con huecos' },
        out: q === 'buena' ? 'Andrea lee el plan y lo copia para los otros cinco. «Y que Mauricio lo practique contigo antes.»' : 'El plan queda, pero tiene piezas que harán más dura la conversación.',
        pro: { ok: 'Un plan claro protege la dignidad de quien se va y el respeto de quien se queda.', risk: 'Mezclar el desempeño con la razón de la salida abre una discusión que nadie gana.', info: 'Quien se queda mira cómo se trató a quien se fue.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Una salida con dignidad.' : 'Revisa qué la hiere sin necesidad.'],
      };
    },
    rules: [[BP, 'La noticia la da quien decide, en persona, con RR.HH. presente, con la razón real y con lo que se ofrece.']],
    mirada: {
      ve: 'Patricia no se va por haber hecho algo mal: se va porque su rol dejó de existir. Si la conversación se desvía hacia su desempeño, sentirá que la están despidiendo dos veces.',
      visual: { tipo: 'linea', titulo: 'La salida de Patricia', hitos: [['Miércoles 8:30', 'Conversación con Mauricio y RR.HH.'], ['Mismo día', 'Recolocación disponible'], ['Hasta el lunes', 'Lee y consulta el convenio'], ['Si acepta', 'Liquidación y carta'], ['Si no', 'Se queda y se busca un lugar']] },
    },
  },
  {
    id: 's6', t: '17:20', ch: 'whatsapp', who: null, titulo: '«Que se enteren hoy»', banner: 'assets/esc/alarma.webp', lugar: 'Pasillo del piso 3', show: ['confianza', 'personas', 'tiempo'],
    body: () => `<p>Mauricio te escribe desde el estacionamiento: «El directorio quiere ver avances. Mando hoy un correo a los seis y mañana empezamos con las firmas. <mark class="clave">¿Algo en contra?</mark>»</p>`,
    type: 'compose', enviaA: 'mauricio', para: 'Para: Mauricio Lerner · Gerente Comercial', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'no', t: 'Lo que le dices', ops: [
        { id: 'n1', t: 'Mauricio, un correo un lunes a las seis va a llegar a sus casas, a sus familias y al grupo de WhatsApp antes que a ti.', ok: true, por: 'Le muestras la consecuencia, no la regla.' },
        { id: 'n2', t: 'Mauricio, eso está prohibido.', ok: false, por: 'No es verdad, y cierra la conversación.' },
      ] },
      { id: 'propuesta', t: 'Lo que le propones', ops: [
        { id: 'p1', t: 'El miércoles a primera hora, una conversación en persona con cada uno, tú y yo; y después, a las 11, el anuncio al equipo.', ok: true, por: 'Orden: primero los afectados, luego todos.' },
        { id: 'p2', t: 'Que lo comunique cada jefe de zona como pueda.', ok: false, por: 'Los nuevos jefes no deciden ni conocen el paquete.' },
      ] },
      { id: 'directorio', t: 'Para el directorio', ops: [
        { id: 'd1', t: 'Al directorio le puedes decir hoy que el plan de salidas está aprobado y tiene fecha.', ok: true, por: 'Le das el avance que necesita mostrar.' },
        { id: 'd2', t: 'Al directorio dile que RR.HH. no te dejó.', ok: false, por: 'Te saca de la mesa.' },
      ] },
    ],
    res: sel => {
      const buenas = ['n1', 'p1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : -2, personas: q === 'buena' ? 4 : -2 }, rel: { mauricio: q === 'buena' ? 1 : 0 },
        flags: [q === 'buena' ? 'anuncio_ordenado' : 'anuncio_apurado'], cartera: { anuncio: q === 'buena' ? 'Miércoles: 1 a 1 desde las 8:30, equipo a las 11:00' : 'Mauricio quiere comunicar ya' },
        envia: ['mauricio', q === 'buena' ? 'Mauricio: «Ok. Miércoles. Mañana me ayudas a preparar las conversaciones, que nunca he despedido a nadie en Perú.»' : 'Mauricio: «Lo pienso. Pero no puedo esperar mucho.»'],
        out: q === 'buena' ? 'Mauricio acepta el miércoles. Y te confiesa algo que no esperabas: nunca ha dado una noticia así.' : 'Mauricio no responde. Sabes que puede mandar el correo esta noche.',
        pro: { ok: 'Le diste al gerente una alternativa que le sirve ante el directorio.', info: 'Un buen orden de comunicación se arma de adentro hacia afuera: afectados, equipo, resto de la empresa.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Frenaste un correo de las seis!' : 'Ese correo puede salir esta noche…'],
      };
    },
    rules: [[BP, 'Las malas noticias se dan en persona, primero a los afectados y después al equipo.']],
    mirada: { ve: 'La prisa de Mauricio es real: tiene un directorio encima. El HRBP no le pide paciencia; le da una fecha y un avance que mostrar. Así el tiempo deja de ser el enemigo de hacerlo bien.' },
  },
  {
    id: 's7', t: '18:40', ch: 'presencial', who: null, titulo: 'En el ascensor', banner: 'assets/foto2/pasillo.webp', lugar: 'Ascensor del edificio administrativo', show: ['personas', 'etica'],
    body: () => `<p>Milagros Ccori, asistente comercial, ayacuchana, ocho años en Nutrimás, entra al ascensor contigo. Cuida a su papá, que usa silla de ruedas desde un accidente. Te mira el reflejo en el espejo.</p><p>«Dicen que la app nueva va a hacer lo que yo hago. <mark class="clave">¿Mi puesto desaparece?</mark>» Faltan cuatro pisos.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que hay cambios que afectan a varios puestos, que el miércoles a primera hora conversarán con ella en persona y que no la van a dejar sin opciones.',
        res: { q: 'buena', fx: { personas: 3, etica: 3 }, flags: ['milagros_verdad'],
          out: 'Milagros asiente despacio. «Entonces sí.» No le confirmaste nada, pero tampoco le mentiste. Antes de salir, le dices que hay una vacante en Trade Marketing que se parece mucho a lo que ella sabe hacer. Se le humedecen los ojos.',
          pro: { ok: 'No adelantas la noticia, pero tampoco la engañas. Y le das una esperanza real.', risk: 'Ella pasará dos noches inquieta.' },
          kusi: ['animo', 'Ni mentira ni crueldad.'] } },
      { id: 'b', label: 'Decirle que no se preocupe, que no hay nada decidido.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -1 },
          out: 'Milagros sonríe aliviada. El miércoles recordará exactamente esta frase.',
          pro: { ok: 'Le das una noche tranquila.', risk: 'Ya está decidido. El miércoles sentirá que la engañaste.' },
          kusi: ['preocupado', 'Ya está decidido…'] } },
    ],
    mirada: { ve: 'Las preguntas difíciles llegan en los lugares menos pensados: un ascensor, una cafetería, un paradero. Tener una frase verdadera preparada es parte del trabajo de un HRBP en semanas como esta.' },
  },
];
