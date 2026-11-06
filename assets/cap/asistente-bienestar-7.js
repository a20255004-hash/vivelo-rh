// Asistente de Bienestar Social · Capítulo 7 · «Las medidas» · Semana 2, martes.
// Hilo: Augusto quiere «arreglarlo conversando»; el comité de intervención dicta medidas de protección para Milagros.
// Normas citadas:
// - Ley 27942, de Prevención y Sanción del Hostigamiento Sexual: prohibición de represalias.
//   https://lpderecho.pe/ley-prevencion-sancion-hostigamiento-sexual-ley-27942/
// - D.S. 014-2019-MIMP, Reglamento de la Ley 27942 (modificado por D.S. 021-2021-MIMP): art. 29.2, medidas de
//   protección (cambio de lugar u horario del hostigador, restricción de contacto, entre otras); reserva; no
//   revictimización. Las vacaciones no solicitadas a la víctima no son una medida válida. No otorgar las medidas,
//   u otorgarlas de forma inoportuna, está tipificado como infracción en la normativa de inspección del trabajo.
//   https://lpderecho.pe/reglamento-ley-prevencion-sancion-hostigamiento-sexual-decreto-supremo-014-2019-mimp/
//   https://www.buk.pe/blog/ley-27942-prevencion-sancion-hostigamiento-sexual
// - MIMP: Línea 100 y Centros Emergencia Mujer (servicios públicos de orientación y atención).

export const CAP = {
  n: 7, titulo: 'Las medidas', dia: 'Semana 2, martes', foto: 'assets/3d/scenes/reunion.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '06:40', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. A las 7 te espera Augusto en su oficina. A las 9 se reúne el comité de intervención. Entre una cosa y otra, Milagros llega a Bienestar.', boton: 'Prepararte para Augusto',
  kusi: 'Hoy toca sostener el protocolo frente a alguien con poder. ¡Firme y con respeto!',
  lead: 'Le explicaste a Augusto por qué esto no se arregla conversando, ayudaste al comité a dictar medidas que protegen a Milagros sin castigarla y cuidaste la reserva frente a la cuadrilla.',
  reflexion: '¿Qué sentiste al decirle que no al gerente de campo?',
  siguiente: { n: 8, titulo: 'El retorno', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'queja', p: 'Queja de Milagros Puicón', j: 'Comité de intervención', d: 0, e: 'En el comité' },
  { id: 'proteccion', p: 'Medidas de protección', j: 'Comité de intervención', d: 0, e: 'Por dictar' },
  { id: 'augusto', p: 'Presión de Gerencia de campo', j: 'Augusto Bravo', d: 0, e: '«Se arregla conversando»' },
  { id: 'reserva', p: 'Reserva frente a la cuadrilla', j: 'Bienestar', d: 0, e: 'Rumores' },
  { id: 'hector', p: 'Retorno de Don Héctor', j: 'Médico ocupacional', d: 0, e: 'Evaluación mañana' },
];

export const FUTURO = {
  augusto_frenado: ['Le explicaste a Augusto que no habrá conversación con el denunciado y le ayudaste a cubrir la cuadrilla.', 'Augusto no lo dice, pero te respeta un poco más.'],
  conversacion_conjunta: ['Aceptaste una conversación entre Milagros y el supervisor.', 'Milagros salió de ella llorando.'],
  augusto_libre: ['Dejaste que Augusto resolviera el caso a su manera.', 'El supervisor sigue en su cuadrilla.'],
  medidas_dictadas: ['El comité dictó medidas sobre el supervisor, no sobre Milagros, y protegió a la testigo.', 'Mañana vence el primer día de las medidas.'],
  medidas_debiles: ['Las medidas del comité recaen sobre Milagros o dejan huecos.', 'Habrá otra represalia.'],
  comunicado_reservado: ['La cuadrilla supo del cambio de supervisor sin saber por qué.', 'Los rumores bajaron.'],
  milagros_red: ['Milagros tiene la Línea 100 y la dirección del CEM de Chiclayo.', 'Decidirá si busca apoyo psicológico y legal fuera de la empresa.'],
  gerencia_informada: ['Respondiste a la queja de Augusto ante Gerencia con hechos y una solución, sin detalles del caso.', 'El gerente general respaldó el procedimiento.'],
  hector_preparado: ['Don Héctor llega a su evaluación sabiendo qué esperar.', 'Mañana se decide su retorno.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Operario de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  milagros: { n: 'Milagros Puicón', sub: 'Operaria de campo · cuadrilla de semillero', c: '#C2185B' },
  teodora: { n: 'Teodora Ñañez', sub: 'Operaria de semillero', c: '#8D6E63' },
  vera: { n: 'Dra. Rocío Vera', sub: 'Presidenta del comité de intervención', c: '#455A64' },
};

export const WSP = [
  { chat: 'grupo', t: '06:35', de: 'Nelly', txt: 'Voy contigo donde Augusto. No entres sola. Estoy llegando en 10.' },
  { chat: 'milagros', t: '07:20', de: 'Milagros', txt: 'Ya llegué señorita, estoy en la banca de Bienestar.', si: 'milagros_acompanada' },
  { chat: 'teodora', t: '10:50', de: 'Teodora', txt: 'Señorita llegó una ingeniera nueva a la cuadrilla. El ingeniero Mío no apareció hoy en semillero 🙏', si: 'medidas_dictadas' },
  { chat: 'teodora', t: '10:50', de: 'Teodora', txt: 'Señorita el ingeniero sigue igual. Hoy nos hizo trabajar sin refrigerio.', si: 'medidas_debiles' },
  { chat: 'maribel', t: '12:30', de: 'Maribel', txt: 'Ya instalaron el frigobar 😍 Pero falta la cortina y el seguro de la puerta. El jueves abrimos, dicen.', si: 'lactario_propuesta' },
  { chat: 'hector', t: '17:40', de: 'Don Héctor', txt: 'Señorita mañana a las 9 me ve el doctor. Estoy nervioso, no he dormido bien.' },
];

export const CORREOS = [
  { t: '06:45', de: 'Dra. Rocío Vera', para: 'Asistente de Bienestar Social', asunto: 'Comité de intervención · sesión 9:00 (reservado)', html: '<p>Sesión del comité a las 9:00 en Asesoría Legal. Agenda: medidas de protección en el expediente recibido ayer.</p><p>Recuerdo que ninguna jefatura puede promover acuerdos entre las partes por fuera del procedimiento. Si alguien lo intenta, infórmenlo al comité.</p><p>R. Vera</p>' },
];

export const QUIZ = [
  { q: 'Un gerente propone juntar a la víctima y al denunciado para que «se disculpe». ¿Qué es?', ops: ['Una buena forma de cerrar el caso', 'Una práctica que revictimiza y salta el procedimiento', 'Lo que manda el reglamento', 'Una medida de protección'], ok: 1, por: 'El procedimiento se rige por la no revictimización; las medidas las dicta el comité, no un acuerdo entre las partes.' },
  { q: '¿Sobre quién deben recaer, en principio, las medidas de protección?', ops: ['Sobre la víctima, para alejarla', 'Sobre el denunciado: cambio de lugar, horario o restricción de contacto', 'Sobre los testigos', 'Sobre toda la cuadrilla'], ok: 1, por: 'Las medidas buscan cortar el riesgo sin castigar a quien denunció.' },
  { q: 'Despedir al supervisor el mismo día de la queja…', ops: ['Es una medida de protección', 'Es una sanción sin investigación: el comité aún no ha concluido', 'Es obligatorio', 'Lo decide Bienestar'], ok: 1, por: 'La protección es inmediata; la sanción viene después de la investigación, con derecho de defensa.' },
  { q: '¿Qué servicio público orienta por teléfono a víctimas de violencia y hostigamiento?', ops: ['La Línea 100 del MIMP', 'La central de EsSalud', 'El T-Registro', 'La SUNAT'], ok: 0, por: 'La Línea 100 del MIMP orienta gratuitamente; los Centros Emergencia Mujer brindan atención psicológica y legal.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '06:45', ch: 'llamada', who: null, titulo: 'Antes de las 7', banner: 'assets/3d/scenes/corporativo.webp', lugar: 'Paradero de la planta, recién bajada del bus', show: ['confianza', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Bajas del bus con el café del termo todavía hirviendo. ${F.has('queja_informal') ? 'Ayer le pediste a Augusto que moviera a Milagros. Hoy él quiere «cerrar el tema».' : 'Ayer se presentó la queja. Hoy Augusto quiere «conversar».'} Quedan quince minutos.</p><p>Haces dos llamadas rápidas y recibes una. <mark class="clave">Llegar a esa oficina sabiendo qué no vas a aceptar</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Nelly Ramírez', 'Contesta manejando', '«Yo hablo primero. Tú escuchas y, si te pregunta, le explicas el procedimiento. Nada de detalles del caso: eso es del comité.»'],
      ['Dra. Rocío Vera', 'Contesta desde su casa', '«Augusto no puede hacer ningún acuerdo. Si propone juntarlos, dile que lo informaré al comité. Y no le muestres el acta: es reservada.»'],
      ['Milagros Puicón', 'Llama ella, nerviosa', '«Señorita, el ingeniero Bravo me mandó decir con un chofer que vaya a su oficina a las 7. ¿Tengo que ir?»'],
    ],
    prompt: 'Con lo que escuchaste, ¿qué haces?',
    choices: [
      { id: 'a', label: 'Decirle a Milagros que no tiene que ir, que la esperas en Bienestar a las 7:30, e ir a la reunión con Nelly sin el acta.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 4, confianza: 1 }, flags: ['milagros_fuera'], cartera: { augusto: 'Reunión con Nelly; Milagros no va', reserva: 'Acta reservada' },
          out: 'Milagros suspira: «Gracias». Nelly te espera en la puerta de Gerencia de campo con su credencial colgada y cara de pocos amigos.',
          pro: { ok: 'Proteges a Milagros de una reunión que no le corresponde y llegas con aliados.', info: 'Que un gerente cite a la víctima por su cuenta ya es un dato que el comité debe conocer.' },
          kusi: ['animo', 'Ella no tenía que estar ahí.'] } },
      { id: 'b', label: 'Decirle a Milagros que vaya contigo: así Augusto escucha su versión de primera mano.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -3 }, cartera: { augusto: 'Milagros citada a la oficina del gerente' },
          out: 'Milagros llega pálida. Augusto le dice «siéntate, hija». Al lado, en una silla, está el ingeniero Mío.',
          pro: { ok: 'Quieres que Augusto entienda.', risk: 'Llevaste a la víctima a una reunión con su agresor y con el compadre de su agresor.' },
          kusi: ['indignado', '¡Estaba él ahí!'] } },
    ],
    rules: [[LEY, 'D.S. 014-2019-MIMP: la queja la atiende el comité de intervención, con reserva y sin revictimizar.']],
    mirada: { ve: 'Antes de una reunión difícil, una profesional de bienestar se asegura de tres cosas: no ir sola, saber qué no puede aceptar y proteger a la persona que no tiene por qué estar ahí.' },
  },
  {
    id: 'm2', t: '07:05', ch: 'presencial', who: 'augusto', titulo: '«Esto se arregla conversando»', banner: 'assets/foto/supervisa.webp', lugar: 'Oficina de Gerencia de campo', show: ['confianza', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Augusto tiene el mapa de los fundos en la pared y una foto con Mío en la parrillada del aniversario. ${F.has('queja_informal') ? '«Ya la cambié de cuadrilla, como pidieron. ¿Qué más quieren?»' : '«A ver. Ronald tiene 18 años aquí, tres hijos y es el mejor que tengo en corte.»'}</p><p>«Hacemos esto: lo junto con la muchacha, él se disculpa, a ella la paso a riego que paga mejor, y todos contentos. Si lo saco ahora, <mark class="clave">se me cae el corte de La Pampa en plena zafra</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que no puede haber una conversación entre ellos ni un arreglo por fuera, que las medidas las dicta el comité a las 9, y ofrecerle ayudarlo a resolver quién cubre la cuadrilla de La Pampa.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, confianza: 1 }, rel: { augusto: 0 }, flags: ['augusto_frenado'], cartera: { augusto: 'Sabe que no hay arreglo; pide un reemplazo para La Pampa' },
          out: 'Augusto golpea la mesa con la palma: «¿Y quién me corta la caña?». Nelly le dice que la Ing. Liz Bances, de riego, conoce La Pampa. Augusto calla un rato largo. «Ya. Pero que el comité se apure.»',
          pro: { ok: 'No le discutes su problema —la zafra—: le quitas el arreglo y le das una salida operativa.', risk: 'Augusto se siente desautorizado frente a su compadre. Lo vas a sentir en los próximos días.', info: 'Pasar a la víctima a «un puesto mejor» a cambio de silencio también es una forma de arreglo.' },
          kusi: ['celebra', 'Firme con el protocolo y útil con la zafra.'] } },
      { id: 'b', label: 'Aceptar una conversación entre los dos solo si Milagros está de acuerdo y con Bienestar presente, para que se cierre rápido.',
        res: { q: 'riesgosa', fx: { confianza: 3, etica: -4, personas: -4 }, rel: { augusto: 1 }, flags: ['conversacion_conjunta'], cartera: { augusto: 'Conversación entre las partes aceptada' },
          out: 'Milagros dice que sí porque no se atreve a decir que no al gerente. Mío pide disculpas «si en algo la ofendí». Ella sale llorando. A la semana, el comité recibe un expediente donde «las partes ya conversaron».',
          pro: { ok: 'Buscas cerrar rápido y con su consentimiento.', risk: 'Un «sí» frente al gerente no es libre, y la conversación revictimiza y debilita la investigación.' },
          kusi: ['triste', 'Ese «si en algo la ofendí»…'] } },
      { id: 'c', label: 'Decirle que es su gerencia y su decisión, y limitarte a dejar constancia en el expediente.',
        res: { q: 'riesgosa', fx: { confianza: 2, cumplimiento: -5, personas: -3 }, flags: ['augusto_libre'], cartera: { augusto: 'Resolverá a su manera' },
          out: 'Augusto sonríe: «Así me gusta». Mío sigue a cargo de la cuadrilla. Al mediodía, la Dra. Vera te llama: «¿Por qué no me avisaste de esta reunión?».',
          pro: { ok: 'Evitas el choque con el gerente.', risk: 'Dejar constancia no protege a nadie: el riesgo sigue en la cuadrilla.' },
          kusi: ['preocupado', 'Constancia… y nada más.'] } },
    ],
    rules: [[LEY, 'Ley 27942 y su reglamento: las medidas las dicta el comité; ninguna jefatura puede sustituir el procedimiento.'], [BP, 'Frente a un gerente, reconoce su problema operativo y ofrece una solución que no pase por la víctima.']],
    mirada: {
      ve: 'Augusto no es un monstruo: tiene una zafra que sacar, un compadre de veinte años y miedo al escándalo. Pero «arreglarlo conversando» pone a la víctima frente a su agresor y frente al poder. El protocolo existe para que eso no dependa del humor del gerente.',
      visual: { tipo: 'balanza', a: { t: 'Lo que le preocupa a Augusto', items: ['El corte de La Pampa', 'Su mejor supervisor', 'El escándalo'] }, b: { t: 'Lo que le preocupa a Milagros', items: ['No verlo', 'No perder su contrato', 'Que le crean'] } },
    },
  },
  {
    id: 'm3', t: '09:00', ch: 'presencial', who: null, titulo: 'El comité', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de Asesoría Legal', show: ['cumplimiento', 'personas', 'calidad'],
    body: (n, F) => `<p>Cuatro personas en una mesa: la Dra. Vera, un representante de los trabajadores elegido, la jefa de Recursos Humanos y Nelly. Tú presentas lo que necesita la víctima. ${F.has('represalia_reportada') ? 'La captura del mensaje de ayer ya está en el expediente.' : 'La Dra. Vera pregunta si hubo algún contacto del denunciado desde ayer.'} ${F.has('acta_careo') ? 'Alguien lee en voz alta la sugerencia de careo del acta; la Dra. Vera la tacha.' : ''}</p><p><mark class="clave">Proteger hoy, sin adelantar la sanción</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de las medidas de protección.', boton: 'Proponer las medidas al comité',
    bloques: [
      { id: 'denunciado', t: 'Sobre el supervisor denunciado', n: 2, ops: [
        { id: 'd1', t: 'Retirarlo temporalmente de la cuadrilla de semillero y asignarlo a otro fundo mientras dure el procedimiento.', ok: true, por: 'Corta el contacto sin decidir aún si es culpable.' },
        { id: 'd2', t: 'Prohibirle contactar a Milagros y a Doña Teodora por cualquier medio.', ok: true, por: 'Cubre el WhatsApp de las once de la noche.' },
        { id: 'd3', t: 'Despedirlo hoy mismo.', ok: false, por: 'Es una sanción sin investigación ni descargo: puede caerse y dejar a la víctima peor.' },
      ] },
      { id: 'victima', t: 'Sobre Milagros', n: 1, ops: [
        { id: 'v1', t: 'Se queda en su cuadrilla y en su puesto; cualquier cambio, solo si ella lo pide. Movilidad en el bus de personal.', ok: true, por: 'La protege sin castigarla.' },
        { id: 'v2', t: 'Vacaciones mientras se investiga, para que descanse.', ok: false, por: 'Vacaciones no solicitadas no son una medida válida: la alejan a ella.' },
        { id: 'v3', t: 'Pasarla a riego, que paga mejor.', ok: false, por: 'Suena a premio, pero se percibe como «cómprale el silencio».' },
      ] },
      { id: 'testigo', t: 'Sobre la testigo', n: 1, ops: [
        { id: 't1', t: 'Revertir el cambio de surco de Doña Teodora y registrar el hecho como posible represalia.', ok: true, por: 'Proteger a la testigo protege el caso.' },
        { id: 't2', t: 'Nada: ella no es parte del caso.', ok: false, por: 'Sin testigos protegidos, nadie más hablará.' },
      ] },
      { id: 'reserva', t: 'Reserva', n: 1, ops: [
        { id: 'r1', t: 'El expediente lo conocen solo el comité y Bienestar. A la cuadrilla se le informa el cambio de supervisor sin dar razones.', ok: true, por: 'Reserva sin dejar a la cuadrilla en el aire.' },
        { id: 'r2', t: 'Explicar en la formación lo que pasó, para cortar los rumores.', ok: false, por: 'Expone a Milagros delante de veinte personas.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -4, personas: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 3 : 0 }, rel: { nelly: q === 'buena' ? 1 : 0 },
        flags: [q === 'buena' ? 'medidas_dictadas' : 'medidas_debiles'],
        cartera: { proteccion: q === 'buena' ? 'Mío fuera de semillero; prohibición de contacto; testigo protegida' : 'Medidas incompletas o sobre la víctima', queja: 'Investigación en curso' },
        out: q === 'buena' ? 'La Dra. Vera firma el acta de medidas a las 10:15. La jefa de RR.HH. llama a Logística para el bus. El representante de los trabajadores te dice al salir: «Primera vez que veo que mueven al de arriba».' : 'El comité aprueba algunas medidas, pero queda un hueco. La Dra. Vera suspira: «Vamos a tener que ajustarlas mañana».',
        pro: { ok: 'Protección inmediata sobre el denunciado, la víctima intacta en su puesto, la testigo cuidada y la reserva sostenida.', risk: 'Una medida que mueve a la víctima, aunque sea «a algo mejor», le enseña a toda la planta que denunciar cuesta.', info: 'No otorgar las medidas de protección, o darlas tarde, es una infracción laboral.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Esta vez se movió el de arriba!' : '¿Sobre quién cayó la medida?'],
      };
    },
    rules: [[LEY, 'D.S. 014-2019-MIMP, art. 29.2: medidas de protección como cambio de lugar u horario del denunciado o restricción de contacto.'], [LEY, 'Ley 27942: prohibición de represalias contra la víctima y los testigos.']],
    mirada: {
      ve: 'Las medidas de protección no son una condena anticipada: son una forma de cortar el riesgo mientras se investiga. Por eso recaen sobre quien tiene el poder de hacer daño, no sobre quien denunció.',
      visual: { tipo: 'flujo', titulo: 'Las medidas de hoy', pasos: ['Mío fuera de semillero', 'Sin contacto', 'Milagros en su puesto', 'Bus de personal', 'Teodora protegida', 'Reserva'] },
      normas: [{ ley: 'D.S. 014-2019-MIMP, Reglamento de la Ley 27942, art. 29.2', dice: 'Regula las medidas de protección que se dictan durante el procedimiento, como el cambio de lugar u horario del presunto hostigador o la restricción de contacto.', practica: 'Mío deja semillero; Milagros se queda donde está.' }],
    },
  },
  {
    id: 'm4', t: '11:20', ch: 'documento', who: null, titulo: 'El comunicado a la cuadrilla', banner: 'assets/esc/lupa.webp', lugar: 'Oficina de Bienestar', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>La secretaria de Gerencia de campo te manda el borrador del comunicado que se leerá mañana en la formación de semillero. «Para que lo revise Bienestar, dice el ingeniero.»</p><p>Veinte personas lo escucharán de pie, a las 6 de la mañana. <mark class="clave">Tiene que informar sin señalar a nadie</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debe decir el comunicado.',
    doc: { t: 'Comunicado · Cuadrilla de semillero', sub: 'Borrador de Gerencia de campo' },
    lines: [
      { id: 'nueva', t: 'Desde hoy, la cuadrilla de semillero está a cargo de la Ing. Liz Bances.' },
      { id: 'motivo', t: 'El cambio se debe a una denuncia por hostigamiento contra el Ing. Ronald Mío, que está en investigación.', bad: LEY, why: 'Revela el caso a toda la cuadrilla y deja fácil adivinar quién denunció. El procedimiento es reservado.' },
      { id: 'horario', t: 'Los horarios, el refrigerio y la movilidad se mantienen igual.' },
      { id: 'hablar', t: 'Se recuerda que los comentarios que perjudiquen el buen clima tendrán consecuencias.', bad: BP, why: 'Suena a advertencia contra quien habló. Puede leerse como una represalia velada.' },
      { id: 'iniciales', t: 'La trabajadora M. P. continúa en la cuadrilla con normalidad.', bad: LEY, why: 'Unas iniciales en una cuadrilla de veinte personas identifican a Milagros.' },
      { id: 'canales', t: 'Cualquier problema de trato en el trabajo puede comunicarse a Bienestar o al comité de intervención, con reserva.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'El comunicado se lee tal cual. A las 6:05, veinte cabezas giran hacia Milagros.' : 'Devuelves el comunicado con tres líneas tachadas y una nota: «Solo el cambio y los canales». La secretaria responde: «Ok, así lo dejo».',
      flags: missLey ? [] : ['comunicado_reservado'],
      cartera: { reserva: missLey ? 'Caso expuesto ante la cuadrilla' : 'Comunicado sin motivos ni nombres' },
      pro: { ok: 'Un buen comunicado dice qué cambia y adónde acudir, no por qué.', risk: 'Unas iniciales o un «motivo» bastan para exponer a la víctima en un grupo pequeño.', info: 'Incluir los canales de queja ayuda a que otras personas se animen a hablar.' },
      kusi: missLey ? ['indignado', '¡Todos la miraron!'] : ['celebra', 'Informaste sin señalar a nadie.'],
    }),
    rules: [[LEY, 'El procedimiento por hostigamiento es reservado (D.S. 014-2019-MIMP; Ley 29733).']],
    mirada: {
      ve: 'En una cuadrilla de veinte personas, una inicial es un nombre. Cuidar la reserva es pensar en cómo se lee un texto desde abajo, de pie, a las 6 de la mañana.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al comunicado', pares: [['«Por una denuncia contra Mío»', 'Solo el cambio de supervisor'], ['«Los comentarios tendrán consecuencias»', 'Los canales de queja, con reserva'], ['«La trabajadora M. P.»', 'Sin nombres ni iniciales']] },
    },
  },
  {
    id: 'm5', t: '13:15', ch: 'presencial', who: null, titulo: 'Lo que viene para Milagros', banner: 'assets/foto2/chocan-manos.webp', lugar: 'Banca bajo el algarrobo, detrás del comedor', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Milagros come un cebiche de caballa de un táper, sin hambre. ${F.has('medidas_dictadas') ? 'Ya sabe que mañana no verá a Mío.' : 'Todavía no sabe bien qué pasará mañana.'} «Mi mamá me llamó. No le conté nada. ¿Está mal?»</p><p>Hay cosas que la empresa no puede darle. <mark class="clave">Puedes acercarle dos apoyos</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos apoyos que le acercas a Milagros.', boton: 'Darle estos dos', resumen: 'Le diste',
    cols: ['Apoyo', 'Para qué'],
    rows: [
      { id: 'cem', cells: ['La dirección del Centro Emergencia Mujer de Chiclayo, del MIMP', 'Atención psicológica y orientación legal gratuitas, fuera de la empresa'] },
      { id: 'linea', cells: ['La Línea 100, guardada en su celular', 'Orientación por teléfono a cualquier hora'] },
      { id: 'cuarto', cells: ['Pedir que la cambien de cuarto en el campamento, porque comparte con una sobrina de Mío', 'Dormir tranquila'] },
      { id: 'taller', cells: ['Inscribirla en el taller de autoestima de marzo', 'Desarrollo personal'] },
      { id: 'charla', cells: ['Organizar una charla sobre hostigamiento en su cuadrilla esta semana', 'Prevención'] },
    ],
    score: { cem: 3, linea: 2, cuarto: 3, taller: -1, charla: -2 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, calidad: 2 },
        flags: picks.includes('cem') || picks.includes('linea') ? ['milagros_red'] : [],
        cartera: { queja: q === 'buena' ? 'Apoyo externo y cuarto seguro' : 'Apoyos a medias' },
        out: picks.includes('charla') ? 'Milagros se tensa: «¿En mi cuadrilla? ¿Esta semana? Todos van a saber que es por mí».' : picks.includes('cuarto') ? 'Milagros no lo había dicho, pero se le ve el alivio: «La sobrina me mira feo desde ayer». Logística tiene un cupo en otro pabellón.' : 'Milagros guarda el número y la dirección. «¿Y no tengo que contarle a mi mamá?» Le dices que eso lo decide ella.',
        pro: { ok: 'La empresa protege en el trabajo; el CEM y la Línea 100 acompañan lo que la empresa no puede.', risk: 'Una charla en su cuadrilla justo ahora la señala. La prevención general va, pero en otro momento y para toda la planta.', info: 'Contarle o no a su familia es decisión de ella.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Una red más grande que Bienestar.' : '¿Eso la protege o la expone?'],
      };
    },
    rules: [[BP, 'Conecta a la víctima con servicios públicos especializados, como la Línea 100 y los Centros Emergencia Mujer del MIMP.']],
    mirada: {
      ve: 'Bienestar no es psicoterapia ni defensa legal. Su trabajo es que la persona no quede sola: proteger lo que pasa en la empresa —hasta el cuarto del campamento— y conectarla con quien puede acompañar el resto.',
      visual: { tipo: 'embudo', titulo: 'La red de Milagros', niveles: [['Comité: medidas en el trabajo', 3], ['Bienestar: acompañamiento y cuarto', 2], ['CEM y Línea 100: apoyo externo', 2]] },
    },
  },
  {
    id: 'm6', t: '16:10', ch: 'correo', who: null, titulo: 'El correo a Gerencia General', banner: 'assets/esc/meta.webp', show: ['confianza', 'etica', 'cumplimiento'],
    mail: { from: 'Augusto Bravo · Gerente de campo', to: 'Gerencia General; RR.HH.; Bienestar Social', asunto: 'Impacto operativo en La Pampa' },
    body: (n, F) => `<p>Pongo en conocimiento que, por una decisión de Bienestar y del comité, se ha retirado a mi mejor supervisor del corte en La Pampa sin investigación concluida. ${F.has('augusto_frenado') ? 'Se coordinó un reemplazo, pero no tiene su experiencia.' : 'No se me consultó.'} <mark class="clave">Solicito revisar la medida: estamos en plena zafra</mark>.</p><p>A. Bravo</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder a todos solo con el procedimiento: que la medida la dictó el comité conforme a la norma, que no es una sanción, y que Bienestar y RR.HH. apoyan a La Pampa con la Ing. Bances. Ningún detalle del caso.',
        res: { q: 'buena', fx: { confianza: 3, etica: 4, cumplimiento: 4 }, flags: ['gerencia_informada'], cartera: { augusto: 'Gerencia General respalda el procedimiento' },
          responde: 'Estimados: la medida fue dictada por el comité de intervención conforme a la Ley 27942 y su reglamento. Es una medida temporal de protección, no una sanción, y no prejuzga el resultado de la investigación. Para La Pampa, la Ing. Liz Bances asumió la cuadrilla y RR.HH. y Bienestar apoyaremos en lo que haga falta. Por la reserva del procedimiento, no corresponde dar más detalles por este medio.',
          out: 'El gerente general responde a las 17:05, solo a Augusto con copia a ti: «Augusto, el procedimiento se respeta. Coordina con Bances». Nelly te manda un pulgar.',
          pro: { ok: 'Sostienes el procedimiento ante la máxima autoridad sin revelar nada del caso.', info: 'Cuando un correo llega con copia a la gerencia, responde con hechos y procedimiento, nunca con detalles.' },
          kusi: ['celebra', 'Hechos, norma y una solución. ¡Qué bacán!'] } },
      { id: 'b', label: 'Responder a todos explicando lo grave de los mensajes y lo que vio la testigo, para que la gerencia entienda por qué se lo retiró.',
        res: { q: 'riesgosa', fx: { confianza: 1, etica: -5, cumplimiento: -4 }, cartera: { reserva: 'Detalles del caso en un correo a Gerencia' },
          responde: 'Estimados: la medida se tomó porque el supervisor envió mensajes de contenido sexual a una operaria y una testigo vio cómo la tocaba en la camioneta…',
          out: 'El correo se reenvía dos veces antes de las seis. La Dra. Vera te llama, seria: «Acabas de poner el expediente en la bandeja de diez personas».',
          pro: { ok: 'Quieres que entiendan la gravedad.', risk: 'La reserva protege a la víctima y al propio procedimiento. Un correo con detalles debilita todo.' },
          kusi: ['preocupado', 'Diez bandejas…'] } },
      { id: 'c', label: 'No responder: la Dra. Vera es quien debe contestar.',
        res: { q: 'aceptable', fx: { tiempo: 1, confianza: -2 }, cartera: { augusto: 'Correo sin respuesta de Bienestar' },
          responde: '(Sin respuesta)',
          out: 'La Dra. Vera está en una audiencia en Chiclayo hasta la noche. Durante tres horas, el único mensaje en la bandeja de Gerencia General dice que «Bienestar» retiró a un supervisor sin razón.',
          pro: { ok: 'Respetas el rol del comité.', risk: 'El correo te menciona: el silencio deja que la versión de Augusto sea la única.' },
          kusi: ['pensando', 'El silencio también comunica.'] } },
    ],
    rules: [[LEY, 'Ley 27942 y su reglamento: reserva del procedimiento; la medida de protección no es una sanción.']],
    mirada: {
      ve: 'La presión sobre Bienestar a veces llega con copia a la gerencia general. La respuesta profesional es corta: qué norma se aplicó, que no es una sanción, cómo se resuelve lo operativo y por qué no se darán detalles.',
      visual: { tipo: 'mensaje', titulo: 'Una respuesta que sostiene sin exponer', txt: 'La medida fue dictada por el comité de intervención conforme a la Ley 27942 y su reglamento. Es temporal, no es una sanción y no prejuzga el resultado. Para La Pampa, la Ing. Bances asumió la cuadrilla. Por la reserva del procedimiento, no corresponde dar más detalles.' },
    },
  },
  {
    id: 'm7', t: '18:00', ch: 'whatsapp', who: null, titulo: 'Para Don Héctor', banner: 'assets/esc/reloj.webp', lugar: 'Bus de regreso a Chiclayo', show: ['personas', 'confianza'],
    body: (n, F) => `<p>En el bus de regreso, apoyada en la ventana, lees el mensaje de Don Héctor: no ha dormido por la evaluación de mañana. ${F.has('informe_respetuoso') ? 'Tu informe social ya está en manos del médico ocupacional.' : 'El médico ocupacional pidió tu informe social para mañana.'}</p><p>Mañana se decide si vuelve a molienda o a otro puesto. <mark class="clave">Que llegue tranquilo y sabiendo qué va a pasar</mark>.</p>`,
    type: 'compose', enviaA: 'hector', para: 'Para: Don Héctor Llontop', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo abres', ops: [
        { id: 'a1', t: 'Don Héctor, es normal estar nervioso. Mañana voy a estar ahí.', ok: true, por: 'Valida lo que siente y lo acompaña.' },
        { id: 'a2', t: 'Don Héctor, tranquilo, seguro que vuelve a molienda.', ok: false, por: 'Promete lo que decide el médico.' },
      ] },
      { id: 'que', t: 'Qué pasará', ops: [
        { id: 'q1', t: 'El doctor va a revisar su rodilla y lo que su puesto le exige, para ver en qué trabajo puede estar bien.', ok: true, por: 'Explica que se evalúa el puesto, no solo a él.' },
        { id: 'q2', t: 'El doctor va a decidir si usted sirve o no para seguir.', ok: false, por: 'Le confirma su peor miedo.' },
      ] },
      { id: 'lleva', t: 'Qué lleve', ops: [
        { id: 'l1', t: 'Lleve los informes del traumatólogo y de la terapia, y cuéntele con confianza qué le duele.', ok: true, por: 'Le da algo concreto que hacer.' },
        { id: 'l2', t: 'No le diga al doctor que todavía le duele, para que no le pongan restricciones.', ok: false, por: 'Pone en riesgo su salud y su seguridad.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Pase lo que pase, no está solo: buscamos juntos el puesto donde pueda estar bien.', ok: true, por: 'Responde a lo que le quita el sueño sin prometer lo que no decides tú.' },
        { id: 'c2', t: 'Que descanse.', ok: null, por: 'Amable, pero corto para la noche que tiene.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'q1', 'l1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 3 : 0 }, rel: { hector: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['hector_preparado'] : [],
        cartera: { hector: q === 'buena' ? 'Llega preparado a la evaluación' : 'Llega con miedo a la evaluación' },
        out: q === 'buena' ? 'Brayan responde por su papá: «Dice que gracias, que ya va a dormir. Que mañana lleva todo». Cierras los ojos hasta Chiclayo.' : sel.lleva === 'l2' ? 'Don Héctor responde: «Ya señorita, no voy a decir nada del dolor». Te quedas mirando el mensaje, arrepentida.' : 'Don Héctor responde con un audio largo. Sigue nervioso.',
        pro: { ok: 'Le explicas que se evalúa el ajuste entre él y el puesto, y que no tiene que esconder el dolor.', risk: 'Prometer el resultado o pedirle que oculte síntomas puede terminar en un accidente.', info: 'Mañana prepara con el médico opciones de puesto, no solo un «apto» o «no apto».' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Llegará entero mañana.' : '¿Le quitaste el miedo o se lo cambiaste?'],
      };
    },
    rules: [[BP, 'Antes de una evaluación de retorno, explica que se evalúa el puesto y la persona juntos, y no prometas resultados.']],
    mirada: {
      ve: 'Para alguien con 22 años en el mismo puesto, una evaluación médica se siente como un juicio. Acompañar es explicarle que se busca el trabajo en el que pueda estar bien, no una razón para sacarlo.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje para la noche antes', txt: 'Don Héctor, es normal estar nervioso. Mañana voy a estar ahí. El doctor va a revisar su rodilla y lo que su puesto le exige, para ver en qué trabajo puede estar bien. Lleve los informes del traumatólogo y de la terapia. Pase lo que pase, no está solo: buscamos juntos el puesto donde pueda estar bien.' },
    },
  },
];
