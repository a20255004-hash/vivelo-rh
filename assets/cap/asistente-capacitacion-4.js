// Asistente de Capacitación · Capítulo 4 · «La asistencia» · Semana 1, jueves.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 27-A: capacitación presencial al momento de la contratación;
//   art. 28: dentro de la jornada. https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - Ley 29733, Ley de Protección de Datos Personales: el registro de asistencia guarda solo lo necesario; los datos de salud
//   son sensibles y no van en un Excel compartido.
// La política interna de la escuela (cupos de rescate, reporte a jefes) es ficticia.

export const CAP = {
  n: 4, titulo: 'La asistencia', dia: 'Semana 1, jueves', foto: 'assets/foto/supervisa.webp',
  lugar: 'Boticas del Norte · Sede de capacitación, Av. España (recién reparada)',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. El aula de la Av. España volvió: huele a pintura fresca y el señor Tito puso, por fin, una regleta con seis enchufes. Los grupos 3 y 4 hacen hoy su día virtual. Tú abres el Excel de asistencia de la semana.', boton: 'Abrir el Excel',
  kusi: 'Hoy toca mirar quién no vino… y sobre todo por qué.',
  lead: 'Leíste la asistencia como un mapa, llamaste a la gente de La Esperanza, negociaste con Mario, mejoraste el registro y les contaste a los 18 jefes cómo va su gente.',
  reflexion: 'Cuando un local no manda a nadie, ¿el problema es de la persona, del jefe o de cómo se organizó la escuela?',
  siguiente: { n: 5, titulo: 'La evaluación', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'asistencia', p: 'Registro de asistencia de la semana', j: 'Tú', d: 0, e: 'Por consolidar' },
  { id: 'esperanza', p: 'Los seis de La Esperanza', j: 'Mario Infante', d: 0, e: 'Ninguno vino' },
  { id: 'examen', p: 'Examen de caja de los grupos 1 y 2', j: 'Karen y Jorge', d: 0, e: 'Mañana' },
  { id: 'cajas', p: 'Cajas de práctica', j: 'Logística', d: 0, e: 'Llegan hoy a las 3' },
  { id: 'jefes', p: 'Reporte semanal a jefes de local', j: 'Karen · Capacitación', d: 0, e: 'Por enviar' },
];

export const FUTURO = {
  alertas_ok: ['Viste en el Excel lo que importaba: La Esperanza, los rezagados y la falta de inducción.', 'Nadie empezará en caja sin su seguridad.'],
  causa_mario: ['Sabes por qué no vino nadie de La Esperanza: se le fueron dos cajeros y no avisó.', 'Entenderás mejor lo que veas el miércoles, en el capítulo 8.'],
  mario_negociado: ['Mario mandará a su gente de dos en dos, con un cajero volante de apoyo.', 'Te lo cobrará en favores… pero cumplirá.'],
  mario_escalado: ['Llevaste el caso de Mario a su jefe zonal sin conversar antes.', 'Mario mandará a su gente, pero de mala gana. Capítulo 8.'],
  mario_tolerado: ['Aceptaste que la gente de Mario aprenda «mirando» en el local.', 'Cuatro cajeros empezarán sin inducción de seguridad.'],
  registro_bueno: ['Tu registro tiene hora real, firma y motivo, sin datos de salud.', 'Te salvará cuando lleguen las constancias, en el capítulo 7.'],
  reporte_jefes: ['Los 18 jefes saben cómo va su gente en la escuela.', 'Dos jefes te pedirán cupo extra el lunes.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  mario: { n: 'Mario Infante', sub: 'Jefe del local de La Esperanza', who: 'local' },
  jefes: { n: 'Jefes de local · Trujillo', sub: '18 jefes, Karen y tú', c: '#2F6B3F' },
  grupo3: { n: 'Escuela de cajeros · Grupos 3 y 4', sub: '40 participantes', c: '#2C7A7B' },
  tito: { n: 'Sr. Tito Alayo', sub: 'Mantenimiento', c: '#6B4F2F' },
};

export const WSP = [
  { chat: 'tito', t: '07:40', de: 'Sr. Tito', txt: 'Aula lista, señorita. Pinté y puse enchufes. Si gotea otra vez, me llama a mí primerito 😄', si: 'aula_respaldo' },
  { chat: 'mario', t: '08:05', de: 'Mario', txt: 'Señorita, ¿no quedamos en que venían el domingo? Ahora me dice Karen que no se puede 🤷', si: 'domingo_sin_pago' },
  { chat: 'grupo3', t: '09:10', de: 'Maritza', txt: 'Ayer salimos 4:30, gracias. Hoy el módulo virtual lo hago en el aula porque en mi casa no hay wifi 🙏', si: 'sin_sobretiempo' },
  { chat: 'grupo3', t: '09:10', de: 'Maritza', txt: 'Ayer salimos 6:15. Mi vecina recogió a mi hijo. Hoy no sé si puedo quedarme otra vez 😔', si: 'sobretiempo_forzado' },
  { chat: 'jefes', t: '12:00', de: 'Jefa de local Víctor Larco', txt: 'Mis dos cajeros regresaron encantados. Una ya me corrigió el arqueo 😂' },
  { chat: 'jefes', t: '17:45', de: 'Jefe de local El Porvenir', txt: 'Gracias por el reporte. ¿Hay cupo para uno más el lunes? Me entró una chica nueva.', si: 'reporte_jefes' },
  { chat: 'mario', t: '18:20', de: 'Mario', txt: 'Ya, señorita. El lunes le mando a Brenda y a Josué. Pero el volante que llegue a las 8 en punto, ah.', si: 'mario_negociado' },
];

export const CORREOS = [
  { t: '08:15', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Asistencia', html: '<p>Mañana Operaciones me pide la asistencia de la semana. No quiero solo un porcentaje: quiero saber qué locales no están mandando gente y por qué.</p><p>Hay un pool de tres cajeros volantes que puedo prestar a los locales para cubrir. Úsalo con criterio.</p><p>Karen</p>' },
  { t: '14:50', de: 'Logística · Boticas del Norte', para: 'Capacitación', asunto: 'Cajas de práctica', html: '<p>Las dos cajas registradoras de práctica y el lector de código de barras llegan a las 3. Necesitamos a alguien que firme la guía de remisión.</p>' },
];

export const QUIZ = [
  { q: 'Un registro de asistencia útil debería incluir…', ops: ['Solo «asistió» o «no»', 'La hora real de llegada, la firma y el motivo de la ausencia', 'El diagnóstico médico de quien faltó', 'La foto de cada persona'], ok: 1, por: 'Con eso puedes hacer seguimiento sin guardar datos que no corresponde.' },
  { q: 'Un participante faltó por enfermedad. ¿Qué anotas en el Excel compartido?', ops: ['Su diagnóstico', '«Justificada: salud», y el sustento queda en un archivo reservado', 'Nada', 'Que es flojo'], ok: 1, por: 'Los datos de salud son sensibles (Ley 29733): no van en un Excel que ven 18 jefes.' },
  { q: 'Un jefe de local propone que su gente aprenda «mirando» en el local, sin ir a la escuela. ¿Qué falta en esa propuesta?', ops: ['Nada', 'La inducción de seguridad de ingreso, que es presencial', 'Un uniforme', 'Un examen'], ok: 1, por: 'La capacitación de SST al momento de la contratación es presencial (Reglamento de la Ley 29783, art. 27-A).' },
  { q: 'Cuando un local no manda a nadie, lo primero es…', ops: ['Escalar al gerente', 'Entender la causa con el jefe y con los participantes', 'Dar de baja a los participantes', 'Ignorarlo'], ok: 1, por: 'Sin la causa, cualquier solución es un disparo al aire.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '08:30', ch: 'documento', who: null, titulo: 'El mapa de la asistencia', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>El Excel ${F.has('grupos_rigidos') ? 'tiene los grupos por apellido, así que cuesta ver los locales.' : 'tiene una columna por local: se lee como un mapa.'} De 80 convocados de los grupos 1 a 4, vinieron 71. <mark class="clave">El porcentaje se ve bien; los detalles no tanto</mark>.</p><p>Antes del almuerzo puedes seguir solo tres alertas.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres alertas que sigues hoy.', boton: 'Seguir estas alertas', resumen: 'Seguiste',
    cols: ['Alerta', 'Lo que ves en el Excel'],
    rows: [
      { id: 'esp', cells: ['La Esperanza: 0 de 6', 'Es el único local que no mandó a nadie'] },
      { id: 'sst', cells: ['Tres personas sin inducción de seguridad', 'Ya trabajan en caja desde el lunes'] },
      { id: 'resc', cells: ['Jhon y dos rezagados reprogramados', 'Deberían entrar al grupo 5'] },
      { id: 'tarde', cells: ['Yanet llegó tarde el martes', 'Ya se puso al día'] },
      { id: 'pct', cells: ['Asistencia global: 89 %', 'Operaciones quiere 95 %'] },
    ],
    score: { esp: 3, sst: 3, resc: 2, tarde: -1, pct: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, cumplimiento: picks.includes('sst') ? 4 : -3 },
        flags: q === 'buena' ? ['alertas_ok'] : [], cartera: { asistencia: picks.includes('sst') ? 'Tres sin inducción: citados el lunes con el grupo 5' : 'Consolidado sin alertas de seguridad' },
        out: q === 'buena' ? 'Llamas a los jefes de los tres que están en caja sin inducción: los citas el lunes a primera hora. Y marcas a La Esperanza en rojo.' : picks.includes('tarde') ? 'Yanet ya se puso al día. Mientras tanto, tres personas siguen en caja sin su inducción de seguridad.' : 'Avanzas, pero una alerta grave se queda sin dueño.',
        pro: { ok: 'Un registro sirve para actuar, no para sacar un porcentaje bonito.', risk: 'Que alguien trabaje en caja sin inducción de seguridad es lo más grave de la lista.', info: 'Separa en el Excel lo que es seguimiento de lo que es solo dato.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Leíste el Excel como un mapa!' : '¿Qué era lo más grave?'],
      };
    },
    rules: [[LEY, 'La capacitación de SST al momento de la contratación es presencial (Reglamento de la Ley 29783, art. 27-A).']],
    mirada: {
      ve: 'Un 89 % de asistencia esconde lo importante: un local entero que no aparece y tres personas trabajando sin su inducción. El porcentaje es para el informe; las alertas son para el trabajo.',
      visual: { tipo: 'embudo', titulo: 'Grupos 1 a 4', niveles: [['Convocados', 80], ['Asistieron', 71], ['De La Esperanza', 0]] },
    },
  },
  {
    id: 'a2', t: '10:00', ch: 'llamada', who: null, titulo: 'Los seis de La Esperanza', banner: 'assets/foto/llamada.webp', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Antes de llamar a Mario, decides <mark class="clave">escuchar a su gente</mark>. Tienes los seis números en el Excel.</p>`,
    type: 'calls',
    calls: [['Brenda Ruiz', 'Contesta desde la caja', 'Nadie me dijo que tenía capacitación, señorita. ¿Era obligatoria?'], ['Josué Lezama', 'Contesta', 'El señor Mario dice que ahorita no se puede, que somos cuatro nomás.'], ['Lucía Paz', 'Ya no trabaja', 'Renuncié el martes, me fui a otra cadena. Pagaban lo mismo, pero más cerca.'], ['Iván Ríos', 'No contesta'], ['Sandra Vela', 'Contesta en voz baja', 'El jefe dice que eso de la escuela es pérdida de tiempo… pero yo sí quiero ir.']],
    prompt: 'Ya sabes lo que pasa en La Esperanza. ¿Qué haces con lo que escuchaste?',
    choices: [
      { id: 'a', label: 'Ordenarlo en hechos (dos renuncias, cuatro en caja, nadie fue avisado) y llevárselo así a Mario, sin decir quién dijo qué.',
        res: { q: 'buena', fx: { calidad: 4, etica: 3, personas: 2 }, flags: ['causa_mario'], cartera: { esperanza: 'Causa: 2 renuncias y nadie avisado' },
          out: 'Tienes la foto completa: Mario se quedó con cuatro de seis y no avisó. Sandra quiere ir. Brenda ni sabía que existía la escuela.',
          pro: { ok: 'Vas a la conversación con datos, y proteges a quien te habló.', info: 'Pregúntale a Karen si el pool de volantes puede cubrir a Mario.' },
          kusi: ['curioso', 'Ahora sí sabes qué pasa.'] } },
      { id: 'b', label: 'Contarle a Mario que Sandra dice que él llama a la escuela «pérdida de tiempo».',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -3 }, rel: { local: -1 },
          out: 'Mario se ofende y esa tarde Sandra recibe un turno doble. Ella no te vuelve a contestar.',
          pro: { ok: 'Eres franca.', risk: 'Exponer a quien te contó algo la deja vulnerable frente a su jefe.' },
          kusi: ['triste', 'Sandra confió en ti…'] } },
    ],
    rules: [[BP, 'Escucha a las dos partes. Lleva hechos, no nombres de quien te los contó.']],
    mirada: {
      ve: '«El local no manda a nadie» casi nunca es mala voluntad pura. Aquí hay renuncias, falta de aviso y un jefe con la caja corta. Escuchar a los participantes primero te da la mitad de la historia que el jefe no te iba a contar.',
      visual: { tipo: 'flujo', titulo: 'Lo que pasó en La Esperanza', pasos: ['2 renuncias', '4 personas en caja', 'Nadie avisado', 'Jefe sin cobertura', '0 en la escuela'] },
    },
  },
  {
    id: 'a3', t: '11:30', ch: 'llamada', who: 'local', titulo: 'La llamada con Mario', banner: 'assets/foto/frente-a-frente.webp', show: ['cumplimiento', 'confianza', 'personas'],
    body: (n, F) => `<p>Mario contesta al quinto timbre. ${F.has('jornada_respetada') ? '«Ya sé, señorita, le dije de dos en dos. Pero no tengo gente.»' : '«Señorita, ya le dije: hoy no puedo.»'} Se le escucha cansado.</p><p>«Se me fueron dos chicas esta semana. Si saco a otro, <mark class="clave">cierro una caja en plena campaña</mark>. Que aprendan aquí mirando, como aprendí yo.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Ofrecerle un cajero volante del pool de Karen los días de escuela, para que mande a su gente de dos en dos desde el lunes.',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 3, confianza: 2 }, rel: { local: 1 }, flags: ['mario_negociado'], cartera: { esperanza: 'Volante en La Esperanza; Brenda y Josué al grupo 5' },
          out: 'Mario se queda callado un rato. «¿Un volante? ¿De verdad?» Acepta. Karen confirma el volante a las 12.',
          pro: { ok: 'Resuelves la causa real: la cobertura.', risk: 'Usas un recurso escaso que otros locales también querrán.', info: 'Confirma por escrito fechas y nombres.' },
          kusi: ['celebra', '¡Resolviste el problema de él, no solo el tuyo!'] } },
      { id: 'b', label: 'Escalar a su jefe zonal: es una orden de la empresa y él no la está cumpliendo.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -2 }, rel: { local: -1 }, flags: ['mario_escalado'], cartera: { esperanza: 'Escalado al jefe zonal' },
          out: 'El jefe zonal llama a Mario y le exige mandar a su gente. Mario lo hará… y te lo recordará.',
          pro: { ok: 'Se cumple la escuela.', risk: 'Sin resolver la cobertura, Mario cerrará una caja o hará trabajar doble a alguien.' },
          kusi: ['pensando', 'Se cumple… ¿pero a qué costo?'] } },
      { id: 'c', label: 'Aceptar que aprendan mirando en el local, y que vengan solo al examen.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, calidad: -3 }, rel: { local: 1 }, flags: ['mario_tolerado'], cartera: { esperanza: 'Aprenden «mirando»' },
          out: 'Mario respira aliviado. Cuatro cajeros nuevos seguirán en caja sin inducción de seguridad ni práctica.',
          pro: { ok: 'Mario no cierra caja.', risk: 'La inducción de seguridad de ingreso es presencial y obligatoria. «Mirando» no la reemplaza.' },
          kusi: ['preocupado', '«Mirando» no es capacitación.'] } },
    ],
    rules: [[LEY, 'La capacitación de SST al momento de la contratación es presencial (Reglamento de la Ley 29783, art. 27-A).'], [POL, 'Capacitación tiene un pool de tres cajeros volantes para cubrir locales durante la escuela.']],
    mirada: {
      ve: 'Mario tiene razón en algo: si saca gente, su local se queda corto. La escuela tiene razón en otra: nadie empieza en caja sin capacitarse. La salida no es escoger un lado, sino resolver la cobertura.',
      visual: { tipo: 'matriz', x: 'Costo para el local', y: 'Cumplimiento de la escuela', cuadrantes: ['Cumple sin romper', 'Cumple, pero rompe', 'Ni cumple ni rompe', 'Ni una ni otra'], items: [['Volante + de dos en dos', .25, .85], ['Escalar al zonal', .75, .7], ['Aprender mirando', .1, .1]] },
    },
  },
  {
    id: 'a4', t: '13:40', ch: 'documento', who: null, titulo: 'Un registro que sirva', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Almuerzas un shambar que sobró de ayer en el táper. La lista que usaste hasta ahora es una hoja con «asistió / no asistió». Para los grupos 5 y 6 quieres <mark class="clave">un registro que te ayude a hacer seguimiento</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del registro.', boton: 'Guardar el registro',
    bloques: [
      { id: 'campos', t: 'Qué registra', n: 2, ops: [
        { id: 'c1', t: 'Hora real de llegada y de salida, con la firma de la persona.', ok: true, por: 'Es la prueba de que la capacitación ocurrió en la jornada.' },
        { id: 'c2', t: 'Motivo de la ausencia: justificada, reprogramada o sin aviso.', ok: true },
        { id: 'c3', t: 'El diagnóstico de quien faltó por salud, para tenerlo a mano.', ok: false, por: 'Es un dato sensible: el sustento se archiva aparte y con reserva.' },
      ] },
      { id: 'uso', t: 'Para qué lo usas', n: 2, ops: [
        { id: 'u1', t: 'Columna de «seguimiento»: a quién llamar y para cuándo se reprograma.', ok: true },
        { id: 'u2', t: 'Base para las constancias: horas reales por persona.', ok: true, por: 'Sin esto, la constancia dice lo que alguien quiera.' },
        { id: 'u3', t: 'Ranking de los locales más incumplidos, para publicar en el grupo de jefes.', ok: false, por: 'Exponer a un jefe frente a 17 colegas genera vergüenza, no colaboración.' },
      ] },
      { id: 'acceso', t: 'Quién lo ve', n: 1, ops: [
        { id: 'a1', t: 'Karen y tú lo editan; cada jefe recibe solo el resumen de su local.', ok: true },
        { id: 'a2', t: 'Compartido con los 18 jefes, con todos los datos, para transparencia.', ok: false, por: 'Cada jefe necesita los datos de su gente, no los de todos.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : -2, etica: q === 'riesgosa' ? -2 : 1 },
        flags: q === 'buena' ? ['registro_bueno'] : [], cartera: { asistencia: q === 'buena' ? 'Registro nuevo: hora real, firma, motivo y seguimiento' : 'Registro mejorado a medias' },
        out: q === 'buena' ? 'El registro nuevo cabe en una hoja A4 apaisada. Karen lo ve y dice: «Esto lo pido para todas las capacitaciones».' : 'El registro mejora, pero guarda o muestra más de lo que debe.',
        pro: { ok: 'Un registro con hora real y seguimiento es la base de todo: asistencia, constancias y reclamos.', risk: 'Los datos de salud y los rankings públicos convierten un registro en un problema.', info: 'Guarda las firmas escaneadas en la carpeta del grupo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Una hoja que lo prueba todo!' : 'Algo de eso sobra.'],
      };
    },
    rules: [[LEY, 'Los datos de salud son datos sensibles: se guardan con reserva y no en un archivo compartido (Ley 29733).'], [BP, 'Registra la hora real: es la base de las constancias.']],
    mirada: {
      ve: 'El registro de asistencia parece la tarea más aburrida, pero de él dependen las constancias, la prueba de que se capacitó dentro de la jornada y el seguimiento de cada persona. Un buen registro dice lo necesario y lo muestra solo a quien lo necesita.',
      visual: { tipo: 'cambio', titulo: 'De la lista al registro', pares: [['Asistió / no', 'Hora real de llegada y salida'], ['Sin motivo', 'Justificada, reprogramada o sin aviso'], ['Todo para todos', 'Cada jefe ve a su gente']] },
    },
  },
  {
    id: 'a5', t: '16:30', ch: 'whatsapp', who: null, titulo: 'El reporte a los 18 jefes', banner: 'assets/foto2/reunion-circulos.webp', show: ['confianza', 'personas', 'calidad'],
    body: () => `<p>Firmaste la guía de las cajas de práctica, que ya pitan en el aula. Ahora toca escribir en el grupo «Jefes de local · Trujillo». <mark class="clave">Dieciocho jefes en campaña leerán tres líneas, no más</mark>.</p>`,
    type: 'compose', enviaA: 'jefes', para: 'Para: Jefes de local · Trujillo', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'av', t: 'Avance', ops: [
        { id: 'v1', t: 'Buenas tardes. Esta semana se capacitaron 71 de 80 cajeros nuevos. Gracias por liberarlos en plena campaña 🙏', ok: true, por: 'Agradeces y das un número.' },
        { id: 'v2', t: 'Buenas tardes. Varios locales no están cumpliendo con la escuela. Por favor, colaboren.', ok: false, por: 'Regaña a todos por lo que hicieron pocos.' },
      ] },
      { id: 'det', t: 'Detalle', ops: [
        { id: 'd1', t: 'A cada uno le escribo por privado el resumen de su gente y quién va el lunes.', ok: true, por: 'Cada jefe recibe solo lo suyo.' },
        { id: 'd2', t: 'Les dejo el Excel completo con todos los nombres y faltas 📎', ok: false, por: 'Expone a todos frente a todos.' },
      ] },
      { id: 'ofr', t: 'Lo que ofreces', ops: [
        { id: 'o1', t: 'Si les falta cobertura para liberar a alguien, avísenme: hay cajeros volantes disponibles.', ok: true, por: 'Ofreces solución a la causa más común.' },
        { id: 'o2', t: 'Recuerden que es obligatorio.', ok: null, por: 'Cierto, pero no ayuda a nadie a cumplir.' },
      ] },
    ],
    res: sel => {
      const mal = sel.av === 'v2' || sel.det === 'd2', buenas = ['v1', 'd1', 'o1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, personas: q === 'buena' ? 2 : 0 }, rel: { karen: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['reporte_jefes'] : [], cartera: { jefes: q === 'buena' ? 'Reporte enviado: general y privado por local' : 'Reporte enviado' },
        out: q === 'buena' ? 'En una hora, cinco jefes responden con pulgares y dos piden volante para la próxima semana.' : mal ? 'Un jefe responde seco: «Mi gente sí fue, revisen bien». El grupo se queda en silencio.' : 'El mensaje sale. Nadie responde, pero nadie se molesta.',
        pro: { ok: 'Agradecer en público, detallar en privado y ofrecer solución: así se trata a quien tiene que colaborar.', risk: 'Regañar o exponer en grupo cierra puertas para la próxima semana.', info: 'Manda los privados antes de las 6, cuando cierran caja.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Dieciocho jefes de tu lado!' : 'Ese tono no ayuda…'],
      };
    },
    mirada: {
      ve: 'Los jefes de local no trabajan para Capacitación: le prestan su gente. Un reporte que agradece, informa a cada uno lo suyo y ofrece ayuda los convierte en aliados. Uno que regaña en público, en obstáculos.',
      visual: { tipo: 'mensaje', titulo: 'Tres líneas para 18 jefes', txt: 'Esta semana se capacitaron 71 de 80 cajeros nuevos. Gracias por liberarlos. A cada uno le escribo por privado el resumen de su gente. Si les falta cobertura, hay cajeros volantes.' },
    },
  },
  {
    id: 'a6', t: '18:00', ch: 'correo', who: null, titulo: 'Lo que le dices a Karen', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Karen Vásquez', to: 'Asistente de Capacitación', asunto: 'Asistencia para Operaciones' },
    body: () => `<p>Mañana a las 9 presento la asistencia en Operaciones. <mark class="clave">¿Qué digo de La Esperanza?</mark></p><p>Karen</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Los hechos, la causa y lo que se hizo, sin culpar a Mario.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { karen: 1, local: 1 }, responde: 'Karen: La Esperanza mandó 0 de 6. Causa: dos renuncias esta semana y cuatro cajeros sosteniendo el local. Lo resolvimos con un volante; Brenda y Josué entran el lunes al grupo 5 y los otros dos al grupo 6. Propuesta: que el pool de volantes acompañe a la escuela todas las semanas.',
          out: 'Karen responde: «Así sí lo puedo defender». Y por primera vez desde el lunes, Mario te manda un sticker.', kusi: ['celebra', 'Hechos, causa y solución. ¡Así!'] } },
      { id: 'b', label: 'Que La Esperanza es el único local que no colabora y que Mario se niega.',
        res: { q: 'aceptable', fx: { confianza: 0 }, rel: { local: -1 }, responde: 'Karen: La Esperanza no colabora; Mario se niega a mandar a su gente.',
          out: 'Operaciones le pide explicaciones a Mario delante de todos los jefes. Mario se entera de quién lo dijo.', kusi: ['pensando', 'Cierto… pero incompleto.'] } },
    ],
    mirada: { ve: 'Un informe de asistencia puede proteger o hundir a un jefe. Contar la causa y la solución deja a la escuela como un apoyo para los locales, no como un juez.' },
  },
];
