// Talent Acquisition Partner · Capítulo 8 · «Los que aceptaron» · Semana 2, miércoles.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas:
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 18: en caso de renuncia, el trabajador da aviso escrito con 30 días de
//   anticipación; puede pedir la exoneración y, si el empleador no la rechaza por escrito dentro del tercer día, se
//   entiende aceptada.
//   https://lpderecho.pe/jurisprudencia-articulo-18-tuo-decreto-legislativo-728-renuncia-retiro-voluntario/
// - Ley 31572, Ley del Teletrabajo, art. 8.4: el empleador entrega los equipos y el acceso a internet, o compensa su
//   provisión, y compensa el consumo de energía eléctrica cuando se teletrabaja desde el domicilio. Reglamento:
//   D.S. 002-2023-TR.
//   https://lpderecho.pe/ley-teletrabajo-ley-31572-actualizada-2026/
//   https://busquedas.elperuano.pe/dispositivo/NL/2279747-1
// - T-Registro: el alta se registra dentro del día de ingreso del trabajador (SUNAT).
//   https://orientacion.sunat.gob.pe/03-obligaciones-del-empleador-t-registro

export const CAP = {
  n: 8, titulo: 'Los que aceptaron', dia: 'Semana 2, miércoles', foto: 'assets/foto2/pasillo.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Miércoles. En el tablero del ATS hay una columna nueva que dice «Aceptó» y tiene siete tarjetas. Te dura poco la alegría: dos de esas tarjetas tienen un ícono gris que no habías visto antes. «Sin respuesta desde hace 3 días.»', boton: 'Abrir el tablero',
  kusi: 'Un «sí» no es un ingreso. Entre la firma y el primer día pasa de todo.',
  lead: 'Buscaste a los que dejaron de responder, armaste un preingreso que no deja a nadie solo, defendiste el preaviso de quienes renuncian, ordenaste el primer día y cuidaste a quien quedó en segundo lugar.',
  reflexion: '¿Qué siente alguien que dijo «sí» y luego no recibe noticias en una semana?',
  siguiente: { n: 9, titulo: 'El tablero', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: '7 aceptaron' },
  { id: 'preingreso', p: 'Preingreso de los que aceptaron', j: 'Talent · TI · Planillas', d: 0, e: 'Sin plan' },
  { id: 'contratos', p: 'Contratos', j: 'Legal', d: 0, e: '3 de 7 enviados' },
  { id: 'equipos', p: 'Laptops y accesos', j: 'TI', d: 0, e: 'Pedido sin hacer' },
  { id: 'reserva', p: 'Candidatos en reserva', j: 'Talent', d: 0, e: 'Sin avisar' },
];

export const FUTURO = {
  ghost_contactado: ['Buscaste a los que dejaron de responder, sin presionar y por varios canales.', 'Gabriela volvió a responder.'],
  preingreso_plan: ['Los que aceptaron tienen contrato, laptop, accesos y una persona de referencia antes del primer día.', 'El lunes nadie estará tres días sin hacer nada.'],
  preingreso_flojo: ['El preingreso quedó a medias.', 'Alguien llegará el primer día sin laptop.'],
  preaviso_respetado: ['Los que renuncian a su trabajo actual darán su preaviso o pedirán la exoneración.', 'Algunos entrarán dos semanas después.'],
  abandono_sugerido: ['Le sugeriste a los nuevos dejar su trabajo sin preaviso.', 'Uno de ellos lo hizo. Su antiguo jefe conoce a Leonardo.'],
  dia1_ordenado: ['El primer día tiene alta en el T-Registro, laptop, accesos y bienvenida, en ese orden.', 'Planillas sabe qué día entra cada uno.'],
  teletrabajo_claro: ['Los nuevos saben qué equipo reciben y cómo se compensan internet y luz los días de casa.', 'Rocío lo incluyó en la carta.'],
  reserva_honesta: ['A quien quedó en segundo lugar le dijiste la verdad y lo mantuviste informado.', 'Si Jhon no vuelve, ella sigue disponible.'],
  jhon_cierre: ['Jhon aceptó la contraoferta de su empresa y le respondiste con respeto.', 'Queda una vacante de mobile por cubrir.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  camila: { n: 'Camila Torres', sub: 'Backend · candidata', who: 'dev' },
  gabriela: { n: 'Gabriela Ruiz', sub: 'Frontend · aceptó', c: '#8E3B5E' },
  jhon: { n: 'Jhon Paucar', sub: 'Mobile · aceptó', c: '#3B6E8E' },
  ximena: { n: 'Ximena Flores', sub: 'Mobile · segunda finalista', c: '#5E8E3B' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
};

export const WSP = [
  { chat: 'talent', t: '08:35', de: 'Rocío', txt: '7 aceptaron 🥳 Pero Legal solo mandó 3 contratos. Los otros cuatro están «en cola».' },
  { chat: 'camila', t: '09:15', de: 'Camila', txt: 'Hoy es la entrevista técnica. Nerviosa, pero lista 💪' },
  { chat: 'gabriela', t: '09:50', de: 'Gabriela', txt: 'Hola, perdón por no responder. Pensé que se había caído todo porque nadie me mandó el contrato 😔', si: 'ghost_contactado' },
  { chat: 'renzo', t: '12:40', de: 'Renzo', txt: 'Camila estuvo excelente en la entrevista. La mejor explicación de manejo de errores que he escuchado este año.' },
  { chat: 'leonardo', t: '14:10', de: 'Leonardo', txt: 'Ok, que den su preaviso. Pero escalonemos los ingresos para que no lleguen todos el mismo día.', si: 'preaviso_respetado' },
  { chat: 'ximena', t: '16:50', de: 'Ximena', txt: 'Gracias por decírmelo así. Sigo interesada, avísame cualquier cosa.', si: 'reserva_honesta' },
];

export const CORREOS = [
  { t: '08:45', de: 'TI · Mesa de ayuda', para: 'Talent', asunto: 'Laptops para ingresos', html: '<p>Para entregar laptops configuradas necesitamos el pedido con 7 días hábiles de anticipación. A la fecha no tenemos ningún pedido para los ingresos de Cóndor Pay.</p>' },
  { t: '17:30', de: 'Jhon Paucar', para: 'Talent Acquisition Partner', asunto: 'Sobre la oferta', html: '<p>Hola. Te debo una disculpa por no responder estos días. Cuando presenté mi renuncia, mi empresa me hizo una contraoferta y la acepté. Me daba vergüenza decírtelo. Lo siento mucho.</p><p>Jhon</p>' },
];

export const QUIZ = [
  { q: 'Un candidato que aceptó deja de responder. Lo mejor es…', ops: ['Retirarle la oferta de inmediato', 'Buscarlo por varios canales, sin presionar, y preguntarle directamente si algo cambió', 'Llamar a su jefe actual', 'Esperar a que aparezca el primer día'], ok: 1, por: 'Muchas veces el silencio esconde una duda, una contraoferta o un trámite que nadie hizo.' },
  { q: 'Alguien que renuncia a su trabajo actual, según el art. 18 del D.S. 003-97-TR…', ops: ['Puede irse el mismo día sin avisar', 'Da aviso con 30 días y puede pedir la exoneración, que se entiende aceptada si no la rechazan por escrito al tercer día', 'Debe quedarse 90 días', 'Necesita permiso de SUNAFIL'], ok: 1, por: 'Es la regla del preaviso de renuncia del TUO del D. Leg. 728.' },
  { q: 'Para quienes teletrabajan desde casa, la Ley 31572 establece que el empleador…', ops: ['No tiene ninguna obligación', 'Entrega equipos e internet o compensa su provisión, y compensa el consumo de energía', 'Paga el alquiler', 'Solo entrega una silla'], ok: 1, por: 'Lo dice el art. 8.4 de la Ley 31572; los criterios están en su Reglamento.' },
  { q: 'El alta en el T-Registro de un nuevo trabajador se hace…', ops: ['Dentro del día de ingreso', 'A fin de mes', 'Cuando termina el periodo de prueba', 'Cuando cobra'], ok: 0, por: 'SUNAT indica que el alta se registra dentro del día de ingreso.' },
  { q: 'Al candidato que quedó en segundo lugar conviene…', ops: ['No decirle nada hasta saber', 'Decirle con honestidad que quedó como finalista en reserva y mantenerlo informado', 'Decirle que fue rechazado', 'Prometerle el puesto'], ok: 1, por: 'La honestidad mantiene la relación, pase lo que pase.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '08:50', ch: 'llamada', who: null, titulo: 'Los que no responden', banner: 'assets/foto/llamada.webp', lugar: 'Cabina de llamadas del piso 9', show: ['personas', 'tiempo', 'confianza'],
    body: () => `<p>Antes de cualquier otra cosa, llamas a los que aceptaron. Sobre todo a los dos de las tarjetas grises.</p>`,
    type: 'calls',
    calls: [['Patricia Lozano', 'Backend · todo bien', '¡Hola! Ya renuncié y estoy dando mis 30 días. Solo una duda: ¿la laptop la recojo o me la mandan?'], ['Gabriela Ruiz', 'Frontend · no contesta'], ['Jhon Paucar', 'Mobile · no contesta'], ['Andrés Cárdenas', 'Backend · una duda', 'Todo bien. Mi jefe me pidió quedarme los 30 días completos, ¿hay problema?']],
    prompt: 'Gabriela y Jhon llevan tres días sin responder. ¿Qué haces con ellos?',
    choices: [
      { id: 'a', label: 'Escribirles por WhatsApp y por correo un mensaje corto y sin presión: que quieres saber cómo están, si algo cambió y que pueden decírtelo con confianza.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, flags: ['ghost_contactado'], cartera: { vacantes: '7 aceptaron · 2 sin respuesta, contactados' },
          envia: ['gabriela', 'Hola, Gabriela. Te escribo para saber cómo estás y si tienes alguna duda sobre tu ingreso. Si algo cambió, me lo puedes decir con toda confianza; no pasa nada. Y si es por el contrato, te lo mando hoy mismo.'],
          out: 'A la hora, Gabriela responde: nadie le mandó el contrato y pensó que todo se había caído. Jhon sigue en silencio.',
          pro: { ok: 'Le das a la persona una salida fácil para contarte qué pasa.', risk: 'Puede que alguno no vuelva. Al menos sabrás por qué.', info: 'Revisa qué parte del proceso dejó a Gabriela sin noticias: el problema puede ser tuyo.' },
          kusi: ['feliz', '¡Gabriela volvió! Solo esperaba noticias.'] } },
      { id: 'b', label: 'Retirarles la oferta hoy: si no responden ahora, tampoco responderán en el trabajo.',
        res: { q: 'riesgosa', fx: { personas: -4, tiempo: 2 },
          out: 'Mandas dos correos de retiro de oferta. A las 10, Gabriela responde desesperada: «¡Nadie me mandó el contrato! Pensé que ustedes se habían echado para atrás».',
          pro: { ok: 'Liberas las vacantes rápido.', risk: 'Castigas un silencio que, en un caso, era culpa del proceso.' },
          kusi: ['triste', 'Ella solo esperaba noticias…'] } },
    ],
    rules: [[BP, 'Antes de concluir que alguien «desapareció», revisa si la empresa cumplió su parte.']],
    mirada: {
      ve: 'Entre la aceptación y el ingreso hay semanas de silencio en las que el candidato puede recibir una contraoferta, dudar o simplemente sentirse olvidado. Muchos «fantasmas» son personas a las que nadie llamó. Por eso el contacto frecuente es parte del trabajo.',
      visual: { tipo: 'embudo', titulo: 'Del «sí» al primer día', niveles: [['Aceptaron', 7], ['Con contrato enviado', 3], ['Con laptop pedida', 0], ['Con fecha de ingreso confirmada', 2]] },
    },
  },
  {
    id: 'h2', t: '10:10', ch: 'documento', who: null, titulo: 'El preingreso', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>TI necesita 7 días hábiles para las laptops y nadie las pidió. ${F.has('resenas_leidas') ? 'Te acuerdas de la reseña: «Mi primer día no tenía laptop ni accesos».' : 'Legal tiene cuatro contratos «en cola».'}</p><p>Armas el plan de preingreso para los siete. La meta: <mark class="clave">que nadie llegue el primer día a esperar</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del preingreso.', boton: 'Guardar el plan',
    bloques: [
      { id: 'papeles', t: 'Antes de la fecha', n: 2, ops: [
        { id: 'p1', t: 'Contrato enviado y firmado antes del primer día.', ok: true },
        { id: 'p2', t: 'Pedido de laptop y accesos hoy, con la fecha de ingreso de cada persona.', ok: true, por: 'TI necesita 7 días hábiles.' },
        { id: 'p3', t: 'Firmar el contrato «cuando ya estén trabajando».', ok: false, por: 'El contrato debe estar listo al ingresar.' },
      ] },
      { id: 'contacto', t: 'Contacto', n: 2, ops: [
        { id: 'c1', t: 'Un mensaje cada semana hasta el ingreso, con novedades concretas.', ok: true, por: 'El silencio es lo que genera fantasmas.' },
        { id: 'c2', t: 'Una persona del equipo de referencia (buddy) que les escriba antes de entrar.', ok: true },
        { id: 'c3', t: 'Agregarlos ya al grupo de WhatsApp del equipo con todos los chistes internos.', ok: false, por: 'Todavía trabajan en otra empresa; mejor algo más ordenado.' },
      ] },
      { id: 'tele', t: 'Trabajo desde casa', n: 1, ops: [
        { id: 't1', t: 'Explicar qué equipo reciben y cómo se compensan internet y luz los días de casa.', ok: true, por: 'Lo pide la Ley 31572.' },
        { id: 't2', t: 'Pedirles que usen su laptop personal los primeros meses.', ok: false, por: 'El empleador entrega los equipos o compensa su provisión.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0, cumplimiento: q === 'riesgosa' ? -3 : 2 },
        flags: [q === 'riesgosa' ? 'preingreso_flojo' : 'preingreso_plan', ...(q === 'riesgosa' ? [] : ['teletrabajo_claro'])],
        cartera: { preingreso: q === 'riesgosa' ? 'Plan a medias' : 'Contrato, laptop, buddy y contacto semanal', equipos: q === 'riesgosa' ? 'Pedido sin hacer' : 'Pedido a TI hoy' },
        out: q === 'buena' ? 'Haces el pedido a TI antes de las 11. Renzo, Brenda y otros tres aceptan ser buddies. Legal te promete los cuatro contratos para mañana.' : q === 'aceptable' ? 'El plan cubre lo principal, pero algo queda suelto.' : 'El plan deja a los nuevos con su laptop personal y sin contrato firmado. Justo lo que decía la reseña.',
        pro: { ok: 'Un buen preingreso convierte el «sí» en un primer día que funciona.', risk: 'Un primer día sin laptop ni contrato confirma las peores reseñas.', info: 'Rocío puede incluir lo de teletrabajo en la carta oferta.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Nadie va a esperar el lunes!' : '¿Quién llegará sin laptop?'],
      };
    },
    rules: [[LEY, 'El empleador entrega los equipos e internet, o compensa su provisión, y compensa la energía cuando se teletrabaja desde el domicilio (Ley 31572, art. 8.4).']],
    mirada: {
      ve: 'El preingreso (preboarding) es todo lo que pasa entre la aceptación y el primer día: papeles, equipos, accesos y contacto. Es la etapa donde más candidatos se pierden y la que menos se ve. Un Talent Acquisition Partner que la cuida protege todo el trabajo anterior.',
      normas: [{ ley: 'Ley 31572, Ley del Teletrabajo, art. 8.4 · Reglamento: D.S. 002-2023-TR', dice: 'El empleador entrega los equipos y el acceso a internet, o asigna una compensación por su provisión, y compensa el consumo de energía eléctrica cuando se teletrabaja desde el domicilio.', practica: 'Los días de casa se trabaja con la laptop de la empresa, y internet y luz se compensan según el Reglamento.' }],
    },
  },
  {
    id: 'h3', t: '11:40', ch: 'presencial', who: 'cto', titulo: '«Que empiecen el lunes»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Leonardo · piso 9', show: ['cumplimiento', 'etica', 'confianza'],
    body: () => `<p>Leonardo se enteró de que la mayoría está dando 30 días de preaviso en su trabajo actual. El kickoff con Cóndor Pay es en cuatro semanas y quiere un equipo «calentando motores» antes.</p><p>«Diles que <mark class="clave">renuncien hoy y empiecen el lunes</mark>. Que no den los 30 días. ¿Qué les van a hacer?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que deben dar su preaviso, que pueden pedir la exoneración a su empleador y que, si no se la dan, conviene escalonar los ingresos.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: 1 }, rel: { cto: 0 }, flags: ['preaviso_respetado'],
          out: 'Leonardo resopla. «¿Y si ninguno la consigue?» Le muestras las fechas: cuatro pueden pedir exoneración parcial; los demás entran justo antes del kickoff. «Ok. Escalonado, entonces.»',
          pro: { ok: 'Respetas la ley y la reputación de tus futuros trabajadores con sus empleadores actuales.', risk: 'Algunos ingresos llegarán más tarde de lo que Leonardo quiere.', info: 'Ofrece a los nuevos una carta modelo para pedir la exoneración.' },
          kusi: ['animo', '¡Que entren bien, no a la mala!'] } },
      { id: 'b', label: 'Hacerle caso: decirles que dejen de ir a su trabajo actual y empiecen el lunes, total muchos lo hacen.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -4 }, rel: { cto: 1 }, flags: ['abandono_sugerido'],
          out: 'Uno de los nuevos lo hace. Su antiguo jefe llama a Leonardo, a quien conoce de la universidad: «Me robaste a mi desarrollador y me dejó el sistema a medias». Leonardo te reenvía el audio sin comentarios.',
          pro: { ok: 'Un ingreso más rápido.', risk: 'Pedirle a alguien que deje su trabajo sin preaviso lo expone a él y daña la reputación de la empresa en un mercado pequeño.' },
          kusi: ['preocupado', 'Lima tech es un pañuelo…'] } },
      { id: 'c', label: 'Decirle que no se puede y que tendrá que esperar los 30 días de todos.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -2 }, rel: { cto: -1 }, flags: ['preaviso_respetado'],
          out: 'Leonardo se queda con la sensación de que RR.HH. solo trae noticias malas. No hablaste de la exoneración ni de escalonar.',
          pro: { ok: 'Respetas la regla.', risk: 'Sin alternativas, el límite parece un obstáculo.' },
          kusi: ['pensando', '¿No había un camino intermedio?'] } },
    ],
    rules: [[LEY, 'Quien renuncia da aviso con 30 días de anticipación; puede pedir la exoneración y, si el empleador no la rechaza por escrito dentro del tercer día, se entiende aceptada (D.S. 003-97-TR, art. 18).']],
    mirada: {
      ve: 'El preaviso protege también a quien contratas: renunciar bien es parte de su reputación. Un Talent Acquisition Partner no le pide a nadie que deje su trabajo a la mala; le explica cómo pedir la exoneración y ajusta las fechas de ingreso.',
      visual: { tipo: 'linea', titulo: 'Ingresos escalonados', hitos: [['Lunes', 'Gabriela y otros 2 (exoneración)'], ['En 2 semanas', 'Patricia y Andrés'], ['En 4 semanas', 'Kickoff con Cóndor Pay']] },
      normas: [{ ley: 'D.S. 003-97-TR (TUO del D. Leg. 728), art. 18', dice: 'En caso de renuncia, el trabajador da aviso escrito con 30 días de anticipación. Puede pedir la exoneración del plazo; si el empleador no la rechaza por escrito dentro del tercer día, se entiende aceptada.', practica: 'Los nuevos piden la exoneración; si no la obtienen, se escalonan los ingresos.' }],
    },
  },
  {
    id: 'h4', t: '13:30', ch: 'sistema', who: null, titulo: 'El primer día', banner: 'assets/esc/escalera.webp', lugar: 'Plan de ingreso compartido con Planillas y TI', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Gabriela y otros dos entran el lunes. Planillas, TI y el equipo te preguntan lo mismo: «¿Qué pasa primero?».</p><p>Ordenas el <mark class="clave">primer día</mark> de cada nuevo ingreso.</p>`,
    type: 'secuencia', prompt: 'Ordena el primer día. Usa las flechas.', boton: 'Guardar el plan del día',
    items: [
      { id: 'contrato', t: 'Contrato firmado y entregado antes de empezar a trabajar', por: 'Base de todo lo demás.' },
      { id: 'alta', t: 'Alta en el T-Registro dentro del día de ingreso', por: 'Lo pide SUNAT.' },
      { id: 'laptop', t: 'Entrega de laptop y credencial, con cargo firmado', por: 'Para empezar a trabajar.' },
      { id: 'accesos', t: 'Accesos a correo, repositorio y herramientas', por: 'Sin accesos, la laptop no sirve.' },
      { id: 'buddy', t: 'Almuerzo con su buddy y su tech lead', por: 'La primera conversación humana del día.' },
      { id: 'plan', t: 'Plan de la primera semana con tareas pequeñas', por: 'Que se vaya a casa habiendo hecho algo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['dia1_ordenado'], cartera: { contratos: q === 'riesgosa' ? 'Sin orden claro' : 'Primer día ordenado con Planillas y TI' },
        out: q === 'buena' ? 'Planillas responde: «Por fin alguien me avisa los ingresos con fecha». TI agenda la entrega de laptops a las 9:30.' : 'Planillas te devuelve el plan: «El alta va el mismo día. Y el contrato, antes».',
        pro: { ok: 'Un primer día ordenado cumple la ley y deja una buena primera impresión.', risk: 'Un alta tardía o un contrato sin firmar son problemas legales, no solo de experiencia.', info: 'Comparte el plan con cada persona nueva el viernes anterior.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Primer día sin sorpresas!' : 'Casi: lo legal va primero.'],
      };
    },
    rules: [[LEY, 'El alta en el T-Registro se registra dentro del día de ingreso del trabajador (SUNAT).']],
    mirada: {
      ve: 'El primer día mezcla lo legal (contrato, alta) con lo humano (buddy, primeras tareas). El orden importa: sin contrato y sin alta no se empieza; sin laptop y accesos no se trabaja; sin una conversación humana, el primer día se siente vacío.',
      visual: { tipo: 'flujo', titulo: 'El primer día', pasos: ['Contrato', 'Alta T-Registro', 'Laptop', 'Accesos', 'Buddy', 'Primera semana'] },
    },
  },
  {
    id: 'h5', t: '15:00', ch: 'whatsapp', who: null, titulo: 'Para Gabriela', banner: 'assets/foto2/celebra-tablet.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('ghost_contactado') ? 'Gabriela volvió a responder: pensó que se había caído todo porque nadie le mandó el contrato.' : 'Gabriela, al final, respondió: nadie le había mandado el contrato.'} Entra el lunes. Le escribes para que <mark class="clave">sepa exactamente qué esperar</mark>.</p>`,
    type: 'compose', enviaA: 'gabriela', para: 'Para: Gabriela Ruiz · Frontend', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'disculpa', t: 'Cómo empiezas', ops: [
        { id: 'd1', t: 'Gabriela, perdón por la demora con el contrato: fue un error nuestro. Hoy te llega para firmar.', ok: true, por: 'Asumes la falla del proceso.' },
        { id: 'd2', t: 'Gabriela, la próxima vez avísanos si no te llega algo.', ok: false, por: 'Le traslada la culpa.' },
      ] },
      { id: 'lunes', t: 'El lunes', ops: [
        { id: 'l1', t: 'El lunes te esperamos a las 9 en el piso 9: firmas, recibes tu laptop y almuerzas con Brenda, tu buddy.', ok: true, por: 'Hora, lugar y quién la recibe.' },
        { id: 'l2', t: 'El lunes ven y vemos.', ok: false, por: 'No le dice nada.' },
      ] },
      { id: 'casa', t: 'Los días de casa', ops: [
        { id: 'c1', t: 'Los días de casa trabajas con la laptop de la empresa, y te explicamos cómo se compensan internet y luz.', ok: true, por: 'Responde una duda que todos tienen.' },
        { id: 'c2', t: 'Los días de casa usa tu compu mientras llega la tuya.', ok: false, por: 'El empleador entrega los equipos o compensa.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'l1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : q === 'riesgosa' ? -2 : 1, cumplimiento: sel.casa === 'c1' ? 2 : -2 },
        out: q === 'buena' ? 'Gabriela responde con tres emojis de fiesta y una foto: su gato encima de una caja con sus cosas. «Ya estoy lista.»' : q === 'riesgosa' ? 'Gabriela responde «ok». Va a llegar el lunes con más dudas que certezas.' : 'Gabriela agradece. Le quedan algunas dudas.',
        pro: { ok: 'Reconocer el error y dar detalles concretos devuelve la confianza.', risk: 'Culpar al candidato por una falla del proceso lo aleja.', info: 'Manda el mismo tipo de mensaje a todos los que entran el lunes.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Gabriela ya está lista!' : '¿Sabe qué pasa el lunes?'],
      };
    },
    mirada: { ve: 'Pedir disculpas por un error del proceso no debilita a la empresa: la humaniza. Y un mensaje con hora, lugar, persona de referencia y equipos responde las preguntas que todos los nuevos se hacen y casi nadie se atreve a preguntar.' },
  },
  {
    id: 'h6', t: '16:20', ch: 'documento', who: null, titulo: 'Si Jhon no vuelve', banner: 'assets/esc/decide.webp', show: ['tiempo', 'personas', 'etica'],
    body: () => `<p>Jhon sigue sin responder. Para mobile, Ximena Flores quedó en segundo lugar, a un punto en la rúbrica. Todavía no le has dicho nada.</p><p>Tienes una hora antes de la reunión con Valeria. <mark class="clave">¿Qué haces mientras tanto?</mark></p>`,
    type: 'pick', n: 3, prompt: 'Elige tus tres acciones.', boton: 'Hacer estas', resumen: 'Hiciste',
    cols: ['Acción', 'Lo que sabes'],
    rows: [
      { id: 'ximena', cells: ['Llamar a Ximena y decirle que es finalista en reserva', 'Es la verdad, y está buscando otras opciones'] },
      { id: 'jhon', cells: ['Escribirle a Jhon un último mensaje con fecha para responder', 'Le das una salida clara'] },
      { id: 'ats', cells: ['Registrar en el ATS el motivo de cada aceptación y de cada silencio', 'Lo necesitarás mañana para el tablero'] },
      { id: 'prometer', cells: ['Decirle a Ximena que el puesto es suyo', 'Jhon todavía no dijo nada'] },
      { id: 'linkedin', cells: ['Buscar 30 perfiles nuevos de mobile', 'Ya tienes una finalista excelente'] },
      { id: 'jefe', cells: ['Llamar al jefe actual de Jhon para preguntar', 'Lo conoces de un evento'] },
    ],
    score: { ximena: 3, jhon: 3, ats: 2, prometer: -3, linkedin: 0, jefe: -4 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: picks.includes('ximena') ? 3 : 0, etica: picks.includes('jefe') || picks.includes('prometer') ? -4 : 2, tiempo: 1 },
        flags: picks.includes('ximena') && !picks.includes('prometer') ? ['reserva_honesta'] : [],
        envia: picks.includes('ximena') && !picks.includes('prometer') ? ['ximena', 'Ximena, te cuento con honestidad: quedaste como finalista en reserva para mobile, a muy poco de la persona elegida. Esa persona aún no confirma su ingreso. Te aviso apenas sepa algo, a más tardar el viernes.'] : undefined,
        cartera: { reserva: picks.includes('jefe') ? 'Llamaste al jefe de Jhon' : picks.includes('ximena') ? 'Ximena informada como finalista en reserva' : 'Ximena sin noticias' },
        out: q === 'buena' ? 'Ximena agradece la honestidad. A Jhon le das hasta el viernes. Y el ATS ya tiene cada motivo registrado para mañana.' : picks.includes('jefe') ? 'El jefe de Jhon te contesta seco: «Eso pregúntaselo a él». Y luego le cuenta a Jhon que llamaste.' : picks.includes('prometer') ? 'Ximena celebra. Si Jhon vuelve, tendrás que retirarle algo que nunca debiste prometer.' : 'Avanzas, pero la finalista sigue sin saber nada.',
        pro: { ok: 'Honestidad con la reserva, una salida clara para Jhon y datos para decidir.', risk: 'Llamar al empleador actual de un candidato rompe su confidencialidad.', info: 'Un «finalista en reserva» bien tratado es oro para la próxima vacante.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Plan B con honestidad!' : '¿Eso se lo harías a alguien que conoces?'],
      };
    },
    mirada: {
      ve: 'Los «silver medalists» (quienes quedaron en segundo lugar) son una de las mejores fuentes para cubrir una vacante que se cae. Tratarlos con honestidad, sin prometer ni desaparecer, mantiene la puerta abierta. Y la confidencialidad del candidato con su empleador actual no se toca.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Respeto por las personas', cuadrantes: ['Hazlo', 'Hazlo ya', 'Evalúa', 'No lo hagas'], items: [['Ximena en reserva', .3, .9], ['Último mensaje a Jhon', .2, .85], ['Registrar en el ATS', .4, .6], ['30 perfiles nuevos', .8, .5], ['Prometerle a Ximena', .1, .2], ['Llamar al jefe de Jhon', .2, .05]] },
    },
  },
  {
    id: 'h7', t: '17:40', ch: 'correo', who: null, titulo: 'La disculpa de Jhon', banner: 'assets/esc/pendulo.webp', show: ['personas', 'confianza'],
    mail: { from: 'Jhon Paucar', to: 'Talent Acquisition Partner', asunto: 'Sobre la oferta' },
    body: () => `<p>Cuando presenté mi renuncia, mi empresa me hizo una contraoferta y la acepté. <mark class="clave">Me daba vergüenza decírtelo</mark>. Lo siento mucho.</p><p>Jhon</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Agradecerle que avisara, desearle éxito sin reproches y decirle que la puerta queda abierta.',
        res: { q: 'buena', fx: { personas: 3, confianza: 2 }, flags: ['jhon_cierre'], responde: 'Jhon, gracias por avisarme, sé que no es fácil. Te deseo lo mejor. Si en algún momento quieres conversar de nuevo, aquí estamos.',
          out: 'Jhon responde: «Gracias por no hacerme sentir peor». Vuelves a abrir el chat de Ximena: el viernes, si todo sigue así, la llamarás con una oferta.', kusi: ['feliz', 'Cerrar bien es parte del trabajo.'] } },
      { id: 'b', label: 'Responderle que lo que hizo fue poco profesional y que no lo volverán a considerar.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: -2 }, flags: ['jhon_cierre'], responde: 'Jhon, lo que hiciste fue poco profesional. Lamentablemente, no volveremos a considerarte.',
          out: 'Jhon no responde. Esa semana, en un grupo de desarrolladores mobile, alguien comenta: «En Código Andino te tratan mal si cambias de opinión».', kusi: ['preocupado', 'El enojo también viaja rápido…'] } },
    ],
    mirada: { ve: 'Las contraofertas son parte del mercado técnico: muchas empresas reaccionan cuando alguien renuncia. Cuando un candidato se retracta, la mejor respuesta es profesional y sin reproches. Las comunidades son pequeñas y la forma en que cierras se recuerda.' },
  },
];
