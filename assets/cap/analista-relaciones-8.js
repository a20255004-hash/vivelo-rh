// Analista de Relaciones Laborales · Capítulo 8 · «La regularización» · Semana 2, miércoles.
// Hilo de las dos semanas: con el requerimiento de SUNAFIL en la mano, la empresa arma el plan para pagar lo que debe;
// mañana se presenta en la mesa y el viernes es la comparecencia.
// Normas citadas:
// - D.S. 007-2002-TR: sobretiempo voluntario, sobretasa mínima de 25 % y 35 % (caps. 5 y 6).
// - Constitución, art. 26: carácter irrenunciable de los derechos reconocidos por la Constitución y la ley (cap. 6).
// - Ley 28806, Ley General de Inspección del Trabajo, art. 5 (medida de requerimiento con plazo) y beneficios de reducción
//   de multas por subsanación; el momento en que se subsana importa. No se citan porcentajes porque las fuentes difieren
//   sobre su vigencia. https://lpderecho.pe/ley-28806-ley-general-de-inspeccion-del-trabajo-actualizada/
//   https://gestion.pe/economia/management-empleo/sunafil-preciso-los-casos-en-que-una-multa-puede-ser-rebajada-noticia/
//   Escrito de acreditación de cumplimiento: https://modelo.pe/escrito-de-acreditacion-de-cumplimiento-de-medida-inspectiva-de-requerimiento-de-sunafil/
// - TUO de la LRCT (D.S. 010-2003-TR): libertad sindical y buena fe (caps. 1 y 4).

export const CAP = {
  n: 8, titulo: 'La regularización', dia: 'Semana 2, miércoles', foto: 'assets/esc/planilla.webp',
  lugar: 'Conservas del Pacífico · Oficina de Finanzas y Relaciones Laborales',
  inicio: '07:50', fin: '19:30', cierreHora: '19:20',
  apertura: 'Miércoles. Sobre tu escritorio, el requerimiento de la inspectora con un plazo subrayado en amarillo. Mañana el plan se presenta en la mesa y el viernes, en la comparecencia. Hoy hay que hacerlo real.', boton: 'Ir a la reunión de las 8',
  kusi: 'Reparar también es parte del trabajo. ¡Con números claros y sin trampas!',
  lead: 'Definiste qué incluye el plan, lo escribiste con plazos y pruebas, evitaste una renuncia disfrazada, exigiste a la contratista, ordenaste la acreditación ante SUNAFIL y aplicaste las reglas nuevas en la primera noche difícil.',
  reflexion: '¿Qué es más difícil: detectar un incumplimiento o lograr que se repare de verdad?',
  siguiente: { n: 9, titulo: 'El acta', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan de regularización del sobretiempo', j: 'Arturo · Patricia · Valeria', d: 0, e: 'Por definir' },
  { id: 'constancia', p: 'Constancia de pago', j: 'Gerencia', d: 0, e: 'Sin modelo' },
  { id: 'service', p: 'Pago del personal de la contratista', j: 'Nor Pacífico', d: 0, e: 'Sin respuesta' },
  { id: 'acreditar', p: 'Acreditación ante SUNAFIL', j: 'Valeria · Relaciones Laborales', d: 0, e: 'Plazo del requerimiento' },
  { id: 'noche', p: 'Turno noche de la línea 2', j: 'Gladys · Renzo', d: 0, e: 'Faltan dos operarios' },
  { id: 'mesa', p: 'Plan para la mesa de mañana', j: 'Lucho · Comisión', d: 0, e: 'Jueves 10:00' },
];

export const FUTURO = {
  plan_completo: ['El plan paga con sobretasa, incluye a la contratista y cambia las prácticas.', 'Lucho lo leerá en la mesa sin buscarle trampas. Capítulo 9.'],
  plan_parcial: ['El plan dejó fuera algo importante.', 'El sindicato o la inspectora lo notarán. Capítulos 9 y 10.'],
  plan_escrito: ['El plan escrito tiene alcance, cálculo, fecha de pago, acreditación y prevención.', 'Valeria lo adjuntará al escrito para SUNAFIL. Capítulo 10.'],
  constancia_detallada: ['La constancia de pago detalla concepto, periodo y monto, sin renuncias.', 'Nadie podrá decir que se compró el silencio. Capítulo 9.'],
  renuncia_pedida: ['La constancia de pago incluía una renuncia a todo reclamo.', 'Lucho la llevará a la mesa y Valeria la anulará. Capítulo 9.'],
  contratista_exigida: ['Exigiste por escrito a la contratista pagar y acreditar, y advertiste contra represalias.', 'Yenny recibirá su pago con boleta. Capítulo 10.'],
  pago_directo_service: ['La empresa decidió pagar directamente al personal de la contratista.', 'Valeria advierte que eso trae preguntas sobre quién es el empleador. Capítulo 10.'],
  contratista_ignorada: ['Dejaste el tema de la contratista en manos de la contratista.', 'Yenny sigue sin cobrar. Capítulo 10.'],
  acreditacion_ordenada: ['La acreditación ante SUNAFIL sigue un orden: cálculo, aprobación, pago con boleta y escrito con pruebas.', 'El viernes llegas con todo. Capítulo 10.'],
  sobretiempo_regulado: ['En la primera noche difícil, el sobretiempo fue corto, voluntario y registrado.', 'Las reglas nuevas resistieron. Capítulo 10.'],
  linea_parada: ['Preferiste parar la línea 2 una noche antes que extender jornadas.', 'El gerente lo recordará como una noche cara. Capítulo 9.'],
  turno_doblado: ['Esa noche alguien volvió a doblar turno.', 'Las reglas nuevas nacieron rotas. Capítulo 10.'],
  plan_a_lucho: ['Lucho recibió el resumen del plan antes de la mesa.', 'Llega mañana con preguntas, no con gritos. Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  patricia: { n: 'Patricia Salcedo', sub: 'Jefa de Finanzas', c: '#6B4E9B' },
  milagros: { n: 'Milagros Chero', sub: 'Asistente de RR.HH. · asistencia y planillas', c: '#2F6B3F' },
  yenny: { n: 'Yenny Ríos', sub: 'Operaria · personal de la contratista', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'valeria', t: '07:30', de: 'Valeria', txt: 'Lo del bono con las horas adentro ya se lo saqué de la cabeza al gerente. Hoy hacemos un plan limpio.', si: 'horas_en_bono' },
  { chat: 'valeria', t: '07:30', de: 'Valeria', txt: 'Lo de condicionar el pago a la firma ya lo deshice con Lucho. Me costó un cafecito y una disculpa.', si: 'deuda_condicionada' },
  { chat: 'milagros', t: '08:45', de: 'Milagros', txt: 'Ayer la inspectora me pidió una copia del cuadro. Dice que su cálculo le sale casi igual al nuestro.', si: 'docs_entregados' },
  { chat: 'milagros', t: '08:45', de: 'Milagros', txt: 'La inspectora hizo su propio cálculo. Le sale más alto que el nuestro: incluyó a la contratista.', si: 'docs_minimos' },
  { chat: 'yenny', t: '12:30', de: 'Yenny', txt: 'Señorita, mi supervisor de la service me preguntó si yo hablé con la inspectora. Le dije que no sé de qué habla. Tengo miedo.' },
  { chat: 'patricia', t: '15:10', de: 'Patricia', txt: 'Planilla adicional cuadrada. Si el gerente aprueba hoy, el viernes 38 personas ven las horas en su boleta.' },
  { chat: 'lucho', t: '19:00', de: 'Lucho', txt: 'Recibido el resumen. Mañana lo vemos con la base. Una pregunta: ¿y los de la service?', si: 'plan_a_lucho' },
];

export const CORREOS = [
  { t: '07:40', de: 'Dr. Arturo Benavides', para: 'Patricia Salcedo; Valeria Castro; Analista de Relaciones Laborales', asunto: 'Plan de pago · 8:00 en mi oficina', html: '<p>Hoy salimos con el plan aprobado por el gerente. Traigan el cuadro, la planilla y el requerimiento. Nadie se va hasta que esté.</p><p>A. B.</p>' },
  { t: '13:15', de: 'Servicios Generales Nor Pacífico S.A.C.', para: 'Relaciones Laborales', asunto: 'Re: sobretiempo del personal destacado', html: '<p>Estimados: podemos pagar el sobretiempo si ustedes nos reconocen ese costo en la próxima factura. Mientras tanto, no podemos adelantar nada.</p>' },
];

export const QUIZ = [
  { q: 'Al pagar el sobretiempo adeudado, la constancia que firma el trabajador debe…', ops: ['Incluir que renuncia a todo reclamo futuro', 'Detallar el concepto, el periodo y el monto pagado', 'No decir nada', 'Firmarse en blanco'], ok: 1, por: 'Los derechos laborales son irrenunciables (Constitución, art. 26): la constancia prueba un pago, no compra un silencio.' },
  { q: 'Ante una medida de requerimiento de SUNAFIL, lo que más ayuda a la empresa es…', ops: ['Esperar a la multa', 'Subsanar dentro del plazo y acreditarlo con pruebas', 'Pedir que se archive', 'Pagar solo a los denunciantes'], ok: 1, por: 'La normativa inspectiva contempla beneficios por subsanar, y el momento en que se subsana importa.' },
  { q: 'Si la contratista no paga el sobretiempo de su personal que trabajó en tu planta…', ops: ['No es tu problema', 'Exiges por escrito que pague y lo acredite, y vigilas que no haya represalias', 'Despides a la contratista sin aviso', 'Les pagas en sobre'], ok: 1, por: 'Les paga su empleador, pero el trabajo se hizo en tu planta: la empresa usuaria debe exigir y verificar.' },
  { q: 'Falta gente en el turno noche y las reglas nuevas prohíben encadenar turnos. Lo más razonable es…', ops: ['Que alguien doble «por esta vez»', 'Un sobretiempo corto, voluntario, registrado y pagado, o reorganizar la línea', 'Parar la planta una semana', 'Pedir hojas firmadas en blanco'], ok: 1, por: 'El sobretiempo no está prohibido: debe ser voluntario, registrarse y pagarse con sobretasa (D.S. 007-2002-TR).' },
  { q: 'Pagar solo a los trabajadores afiliados al sindicato porque ellos denunciaron…', ops: ['Es justo', 'Es discriminatorio: la deuda es con todos los que trabajaron', 'Es lo que pide la ley', 'Reduce la multa'], ok: 1, por: 'La deuda nace del trabajo realizado, no de la afiliación; distinguir por afiliación vulnera la libertad sindical.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '08:00', ch: 'presencial', who: 'arturo', titulo: 'Qué entra en el plan', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina del Dr. Benavides', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Cuatro tazas de café, el requerimiento al centro y el cuadro de Milagros proyectado en la pared. ${F.has('cuadro_corregido') ? 'La cifra es la corregida, con sobretasa y con la contratista aparte.' : 'Valeria detecta en dos minutos que el cuadro todavía tiene errores: hay que rehacerlo antes de aprobar nada.'}</p><p>El doctor pone tres dedos sobre la mesa: «<mark class="clave">Tres cosas en el plan</mark>. Las que más importan».</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres piezas del plan de regularización.', boton: 'Proponer el plan', resumen: 'El plan incluye',
    cols: ['Pieza', 'Por qué'],
    rows: [
      { id: 'pago', cells: ['Pagar a los 38 trabajadores propios el sobretiempo con sobretasa, en una planilla adicional con boleta', 'Es la deuda y el corazón del requerimiento'] },
      { id: 'service', cells: ['Exigir por escrito a la contratista que pague a sus 9 operarios y lo acredite', 'Trabajaron en tu planta'] },
      { id: 'sobres', cells: ['Regularizar con boleta los pagos que se hicieron en sobre', 'Lo que se pagó también debe constar'] },
      { id: 'reglas', cells: ['Mantener las reglas nuevas: sin turnos encadenados, sobretiempo registrado y relevo inmediato', 'Para que la deuda no se vuelva a formar'] },
      { id: 'renuncia', cells: ['Que cada trabajador firme que no tiene más que reclamar', 'Cerrar el tema para siempre'] },
      { id: 'afiliados', cells: ['Pagar primero a los afiliados, que fueron los que denunciaron', 'Calmar al sindicato'] },
    ],
    score: { pago: 4, service: 3, reglas: 2, sobres: 2, renuncia: -5, afiliados: -5 },
    res: (picks, sc) => {
      const malas = picks.some(p => ['renuncia', 'afiliados'].includes(p));
      const q = malas ? 'riesgosa' : picks.includes('pago') && sc >= 8 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: picks.includes('pago') ? 4 : -4, etica: malas ? -6 : 2 }, rel: { arturo: q === 'buena' ? 1 : 0 },
        flags: [q === 'buena' ? 'plan_completo' : 'plan_parcial'],
        cartera: { plan: q === 'buena' ? 'Pago con sobretasa + contratista + reglas' : 'Plan con vacíos' },
        out: malas ? 'Valeria levanta la mano: «Eso no. Una deuda se paga a todos los que trabajaron, y no se paga a cambio de nada». El doctor tacha tu tarjeta.' : !picks.includes('pago') ? 'El doctor te mira raro: «¿Y el pago? Sin eso no hay plan». Lo agrega él mismo.' : 'El doctor asiente: «Pagar, exigir y prevenir. Así lo escribimos». Patricia ya está abriendo la planilla adicional.',
        pro: { ok: 'Un plan de regularización paga lo que se debe a todos, incluye a quienes trabajaron por terceros y cambia las prácticas.', risk: 'Pedir renuncias o pagar según la afiliación convierte la reparación en otro problema.', info: 'Lo que no esté en el plan, la inspectora lo preguntará el viernes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Pagar, exigir y prevenir!' : '¿Qué quedó afuera?'],
      };
    },
    rules: [[LEY, 'D.S. 007-2002-TR: el sobretiempo se paga con sobretasa.'], [LEY, 'Constitución, art. 26: los derechos laborales son irrenunciables.']],
    mirada: {
      ve: 'Regularizar no es solo pagar: es pagar a todos los que trabajaron, dejar constancia de lo pagado y cambiar lo que causó la deuda. Si falta una pieza, el problema vuelve.',
      visual: { tipo: 'flujo', titulo: 'Un plan de regularización', pasos: ['Pagar con sobretasa', 'Exigir a la contratista', 'Regularizar lo pagado en sobre', 'Mantener las reglas'] },
    },
  },
  {
    id: 'p2', t: '09:40', ch: 'documento', who: 'valeria', titulo: 'El plan, por escrito', banner: 'assets/foto/plano-equipo.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Valeria dicta y tú escribes. Este documento va a dos lugares: mañana a la mesa y el viernes a la inspectora. <mark class="clave">Tiene que decir lo mismo en los dos</mark>.</p><p>Por la ventana, la cola del comedor: sopa de pescado y arroz con frejoles.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del plan.', boton: 'Pasar el plan al gerente',
    bloques: [
      { id: 'alcance', t: 'Alcance', n: 1, ops: [
        { id: 'a1', t: 'Sobretiempo trabajado en la línea 2 durante la campaña de caballa, según el registro de control de asistencia: 38 trabajadores propios; 9 de la contratista, a cargo de su empleador.', ok: true, por: 'Quiénes, qué periodo y con qué fuente.' },
        { id: 'a2', t: 'Horas reclamadas por el sindicato.', ok: false, por: 'La deuda no depende de quién reclamó, sino de lo que registra el reloj.' },
      ] },
      { id: 'calculo', t: 'Cálculo', n: 1, ops: [
        { id: 'c1', t: 'Valor hora sobre la remuneración de cada trabajador, con sobretasa de 25 % las dos primeras horas y 35 % las siguientes, y refrigerio según lo registrado.', ok: true, por: 'La fórmula que ya validaste.' },
        { id: 'c2', t: 'Un monto fijo por trabajador, igual para todos.', ok: false, por: 'Cada uno trabajó horas distintas: el monto fijo paga de más a unos y de menos a otros.' },
      ] },
      { id: 'pago', t: 'Pago', n: 1, ops: [
        { id: 'p1', t: 'En una planilla adicional, con boleta que detalle horas, periodo y monto, el viernes de esta semana.', ok: true, por: 'Fecha cierta, dentro del plazo, y prueba del pago.' },
        { id: 'p2', t: 'En efectivo, en sobre, para que sea más rápido.', ok: false, por: 'Es exactamente lo que hay que dejar de hacer.' },
      ] },
      { id: 'acredita', t: 'Acreditación', n: 1, ops: [
        { id: 'r1', t: 'Se presentarán a la inspectora las boletas firmadas, las constancias de depósito y la exigencia escrita a la contratista.', ok: true, por: 'Subsanar sin acreditar es como no haberlo hecho.' },
        { id: 'r2', t: 'Se informará verbalmente en la comparecencia.', ok: false, por: 'Ante la autoridad, lo que no está documentado no existe.' },
      ] },
      { id: 'prevencion', t: 'Prevención', n: 1, ops: [
        { id: 'v1', t: 'Prohibición de encadenar turnos, sobretiempo pedido y registrado cada día, sin hojas en blanco, y relevo inmediato en autoclaves.', ok: true, por: 'Las reglas que ya comunicaste.' },
        { id: 'v2', t: 'Se recomienda a los supervisores no excederse.', ok: false, por: 'Una recomendación no es una regla.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 5 }, rel: { valeria: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['plan_escrito'],
        cartera: { plan: q === 'riesgosa' ? 'Plan sin fechas ni pruebas' : 'Plan escrito: alcance, cálculo, pago el viernes, acreditación y prevención' },
        out: q === 'buena' ? 'Valeria lo lee de corrido: «Esto lo puede leer Lucho y lo puede leer la inspectora. Y dicen lo mismo». Lo imprime en papel membretado.' : q === 'aceptable' ? 'Valeria corrige un bloque: «Casi. Pero cada frase vaga es una pregunta en la comparecencia».' : 'Valeria niega con la cabeza: «Con esto, la inspectora va a pensar que no entendimos el requerimiento».',
        pro: { ok: 'Un plan escrito con alcance, cálculo, fecha, acreditación y prevención sirve igual para la mesa y para la autoridad.', risk: 'Montos fijos, pagos en sobre o promesas verbales vuelven a abrir el problema.', info: 'Que el mismo papel vaya a la mesa y a SUNAFIL es la mejor prueba de coherencia.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un papel, dos destinos, una verdad!' : 'Revisa qué bloque queda vago.'],
      };
    },
    rules: [[LEY, 'Ley 28806: la medida de requerimiento fija un plazo para subsanar; la subsanación se acredita ante la inspección.'], [BP, 'El plan que va a la mesa y el que va a la autoridad deben ser el mismo.']],
    mirada: {
      ve: 'El plan de regularización es el documento que convierte una deuda en un compromiso verificable. Su fuerza está en lo concreto: quién, cuánto, cuándo y cómo se prueba.',
      visual: { tipo: 'flujo', titulo: 'El plan por escrito', pasos: ['Alcance', 'Cálculo', 'Pago con boleta', 'Acreditación', 'Prevención'], aqui: 2 },
    },
  },
  {
    id: 'p3', t: '11:10', ch: 'presencial', who: null, titulo: '«Que firmen que no reclaman más»', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Oficina de gerencia', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>El ingeniero Olaechea aprueba la planilla adicional con un suspiro largo. Pero pone una condición: «Al recibir, que cada uno firme una hoja: <mark class="clave">“declaro que no tengo nada más que reclamar por ningún concepto”</mark>. Pago una vez y se acabó».</p><p>Valeria está en una llamada. La respuesta la tienes que dar tú.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer una constancia que diga qué se paga: concepto, periodo, horas y monto, junto con la boleta. Sin renuncias: eso prueba el pago y protege a la empresa de pagar dos veces.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: 1 }, flags: ['constancia_detallada'], cartera: { constancia: 'Concepto, periodo, horas y monto; sin renuncia' },
          out: 'El gerente lo piensa. «¿Y si mañana reclaman otra cosa?» Le respondes que, si es otra cosa, se verá con su prueba; esto queda pagado y probado. «Ya. Pero que diga “horas de la campaña de caballa” con letras grandes.»',
          pro: { ok: 'Una constancia detallada prueba lo pagado, que es lo que de verdad protege a la empresa.', risk: 'El gerente se queda con la sensación de que el tema no está «cerrado».', info: 'La boleta con el detalle de horas es la mejor constancia.' },
          kusi: ['celebra', 'Probar el pago, no comprar el silencio.'] } },
      { id: 'b', label: 'Pagar por depósito, sin hacer firmar nada, para no generar desconfianza: la constancia del banco basta.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: -1 }, cartera: { constancia: 'Solo depósito bancario' },
          out: 'El gerente acepta, extrañado. El depósito prueba que se pagó algo, pero no qué: mañana alguien preguntará si eso eran las horas o un adelanto.',
          pro: { ok: 'Evitas cualquier papel que se lea como presión.', risk: 'Sin boleta que detalle horas y periodo, la prueba del pago queda incompleta.' },
          kusi: ['pensando', 'Pagaste… pero ¿qué pagaste?'] } },
      { id: 'c', label: 'Aceptar la hoja del gerente: si la empresa paga de buena fe, es razonable que quiera cerrar el tema, y quien no esté de acuerdo puede no firmar.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 }, flags: ['renuncia_pedida'], cartera: { constancia: 'Hoja con renuncia a todo reclamo' },
          out: 'Valeria sale de su llamada y ve la hoja impresa: «Esto no vale y nos hunde. Los derechos son irrenunciables, y que alguien pueda “no firmar” y quedarse sin cobrar es peor». La rompe en cuatro.',
          pro: { ok: 'Buscas seguridad para la empresa.', risk: 'Pedir que se renuncie a todo reclamo a cambio de recibir lo que ya se debe es nulo y, además, se lee como presión.' },
          kusi: ['indignado', '¡Lo que se debe no se condiciona!'] } },
    ],
    rules: [[LEY, 'Constitución, art. 26: carácter irrenunciable de los derechos reconocidos por la Constitución y la ley.']],
    mirada: {
      ve: 'La tentación de «cerrar para siempre» un pago es comprensible, pero en derecho laboral no se puede pedir renuncia a lo que la ley reconoce. Lo que protege es probar bien qué se pagó.',
      visual: { tipo: 'cambio', titulo: 'De la renuncia a la prueba', pares: [['«No tengo nada más que reclamar»', '«Recibí S/ … por N horas de la campaña»'], ['Firma para poder cobrar', 'Boleta con el detalle']] },
    },
  },
  {
    id: 'p4', t: '13:20', ch: 'llamada', who: null, titulo: 'La contratista', banner: 'assets/foto2/callcenter.webp', lugar: 'Oficina de Relaciones Laborales', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>El correo de Nor Pacífico llegó hace cinco minutos: pagarán si se lo reconocen en la factura. Y Yenny te escribió por WhatsApp: su supervisor le preguntó si habló con la inspectora.</p><p>Antes de decidir, <mark class="clave">tres llamadas</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Administradora de Nor Pacífico', 'Contesta apurada', '«Mire, señorita, si ustedes no nos reportan las horas, nosotros no pagamos. Y si nos reportan, que nos paguen a nosotros primero. Así funciona esto.»'],
      ['Valeria Castro · abogada', 'Contesta entre dos audiencias', '«El empleador es la contratista: ella paga. Nosotros exigimos y verificamos, y revisamos el contrato. Si pagamos directo, nos pueden preguntar quién manda de verdad sobre esa gente. Y lo de Yenny: cero represalias, por escrito.»'],
      ['Patricia Salcedo · Finanzas', 'Contesta con la calculadora sonando', '«El contrato con Nor Pacífico dice que ellos asumen los pagos de su personal. Si les reconocemos el sobretiempo en la factura, pagamos lo que la supervisión nuestra les pidió hacer. No es descabellado.»'],
    ],
    prompt: '¿Qué haces con la contratista?',
    choices: [
      { id: 'a', label: 'Enviar una carta a Nor Pacífico: deben pagar a sus nueve operarios con boleta y acreditarlo antes del viernes; el costo de lo que pidió nuestra supervisión se revisará en la factura; y cualquier represalia contra quien declaró es inaceptable.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, personas: 3 }, flags: ['contratista_exigida'], cartera: { service: 'Carta enviada: pagar, acreditar y sin represalias' },
          out: 'La contratista responde a las 17:00: «Procederemos». Le escribes a Yenny solo esto: «Nadie puede tomar represalias por hablar con la inspectora. Si pasa, avísame». Ella responde con un corazón.',
          pro: { ok: 'Respetas quién es el empleador, asumes la parte que te toca y proteges a quien declaró.', risk: 'Reconocer el costo en la factura encarece el plan.', info: 'Revisa el contrato con la contratista: lo que pasó en la campaña muestra que hay que cambiarlo.' },
          kusi: ['celebra', '¡Exigir, asumir y proteger!'] } },
      { id: 'b', label: 'Pagarles directamente a los nueve en la planilla adicional: es más rápido y a la inspectora le importa que cobren.',
        res: { q: 'aceptable', fx: { personas: 3, cumplimiento: -1 }, flags: ['pago_directo_service'], cartera: { service: 'Pago directo de la empresa' },
          out: 'Patricia los agrega a la planilla. Valeria resopla por teléfono: «Cobran, sí. Pero acabamos de actuar como su empleador. Eso tendrá preguntas».',
          pro: { ok: 'Los nueve cobran rápido.', risk: 'Pagar directamente al personal de un tercero puede generar dudas sobre quién es su empleador real.' },
          kusi: ['pensando', 'Rápido… y con letra chica.'] } },
      { id: 'c', label: 'Responderle a la contratista que es su problema: el contrato dice que ellos asumen los pagos de su personal.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -4 }, flags: ['contratista_ignorada'], cartera: { service: 'Sin acción' },
          out: 'Nor Pacífico no responde. Yenny no vuelve a escribir. El viernes, la inspectora preguntará por ellos y no tendrás nada que mostrar.',
          pro: { ok: 'Es cierto que el empleador es la contratista.', risk: 'El trabajo se hizo en tu planta y a pedido de tu supervisión: desentenderse deja a nueve personas sin cobrar.' },
          kusi: ['triste', 'Nueve personas quedaron en el aire.'] } },
    ],
    rules: [[BP, 'Con una contratista, la empresa usuaria exige y verifica que se pague a su personal, y protege a quienes declararon ante la autoridad.']],
    mirada: {
      ve: 'Los trabajadores de una contratista viven entre dos empresas que se pasan la responsabilidad. Una buena Relaciones Laborales no paga en lugar del empleador, pero tampoco se lava las manos.',
      visual: { tipo: 'balanza', a: { t: 'Desentenderse', items: ['«Es su empleador»', 'Nadie cobra', 'La inspectora pregunta'] }, b: { t: 'Exigir y asumir', items: ['La contratista paga con boleta', 'Revisamos el costo en la factura', 'Cero represalias'] } },
    },
  },
  {
    id: 'p5', t: '15:00', ch: 'documento', who: 'valeria', titulo: 'Cómo se acredita', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('requerimiento_firmado') ? 'El requerimiento que firmaste ayer tiene su plazo marcado en el calendario de la pared.' : 'El requerimiento llegó sin tu firma, pero el plazo corre igual.'} Valeria te pasa unas tarjetas: «La subsanación tiene un orden. <mark class="clave">Si lo cruzas, el viernes llegamos sin pruebas</mark>».</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para subsanar y acreditar. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'calc', t: 'Cerrar el cálculo por trabajador con el registro de asistencia', por: 'Sin cálculo cerrado, no hay planilla.' },
      { id: 'aprob', t: 'Validarlo con Finanzas y Valeria y obtener la aprobación de la gerencia', por: 'Ya lo hiciste esta mañana.' },
      { id: 'pago', t: 'Pagar en la planilla adicional, con boletas que detallen las horas', por: 'El viernes, según el plan.' },
      { id: 'pruebas', t: 'Reunir boletas firmadas, constancias de depósito y la respuesta de la contratista', por: 'Son las pruebas de que se subsanó.' },
      { id: 'escrito', t: 'Presentar a la inspectora el escrito de acreditación con las pruebas, dentro del plazo', por: 'Subsanar sin acreditar es como no haberlo hecho.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { valeria: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['acreditacion_ordenada'] : [],
        cartera: { acreditar: q === 'buena' ? 'Ruta clara hasta el escrito del viernes' : 'Ruta con pasos cruzados' },
        out: q === 'buena' ? 'Valeria pega las tarjetas en la pared con cinta: «Esto es el viernes, hora por hora».' : 'Valeria mueve dos tarjetas: «Primero se paga, después se prueba. Y el escrito, al final».',
        pro: { ok: 'Subsanar dentro del plazo y acreditarlo con pruebas es lo que la autoridad puede tener en cuenta.', info: 'El momento en que se subsana importa: no esperes a la multa.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Ruta clara!' : 'Primero pagar, después probar.'],
      };
    },
    rules: [[LEY, 'Ley 28806: la normativa inspectiva contempla beneficios por subsanar; el momento de la subsanación importa.']],
    mirada: {
      ve: 'Ante la inspección, una deuda pagada sin pruebas es una deuda discutida. La acreditación ordenada es la diferencia entre «decimos que pagamos» y «aquí está».',
      visual: { tipo: 'linea', titulo: 'Hasta el escrito', hitos: [['Miércoles', 'Cálculo y aprobación'], ['Jueves', 'Mesa: plan'], ['Viernes', 'Pago y pruebas'], ['Viernes', 'Escrito a la inspectora']] },
    },
  },
  {
    id: 'p6', t: '17:20', ch: 'presencial', who: 'gladys', titulo: 'La primera noche difícil', banner: 'assets/3d/scenes/planta.webp', lugar: 'Oficina de la jefa de planta', show: ['cumplimiento', 'personas', 'etica'],
    body: (n, F) => `<p>Gladys entra sin tocar. Dos operarios del turno noche avisaron que no vienen: uno tiene a su hija con fiebre en el hospital La Caleta, el otro no consiguió combi desde Coishco. ${F.has('reglas_supervisores') ? 'Las reglas nuevas tienen dos días.' : 'Las reglas nuevas nunca se mandaron.'}</p><p>Renzo ya tiene la solución: «Que Quispe se quede, él siempre aguanta». Gladys te mira: <mark class="clave">«¿Qué hago?»</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedir a dos operarios del turno tarde un sobretiempo corto, de dos horas, solo a quien acepte, registrado y pagado; y que la línea baje su velocidad el resto de la noche.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 3, etica: 2 }, rel: { gladys: 1 }, flags: ['sobretiempo_regulado'], cartera: { noche: 'Dos horas voluntarias, registradas; línea más lenta' },
          out: 'Gladys hace dos preguntas en la línea. Una operaria acepta, otro no. Nadie insiste. A las 23:10 te escribe: «Noche tranquila. Nadie dobló».',
          pro: { ok: 'Las reglas no prohíben el sobretiempo: lo hacen voluntario, corto, registrado y pagado.', risk: 'La línea produce menos esa noche.', info: 'Una regla se prueba la primera vez que es incómoda.' },
          kusi: ['celebra', '¡Las reglas aguantaron la primera noche!'] } },
      { id: 'b', label: 'Parar la línea 2 esta noche: con dos personas menos, mejor perder un turno que volver a encadenar jornadas.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, tiempo: -3, confianza: -1 }, rel: { gladys: -1 }, flags: ['linea_parada'], cartera: { noche: 'Línea 2 parada una noche' },
          out: 'Gladys llama al gerente. El ingeniero Olaechea suspira por teléfono: «Una noche de caballa perdida». La línea se apaga a las 23:00.',
          pro: { ok: 'No pones a nadie en riesgo.', risk: 'Hay soluciones intermedias que la norma permite; parar sin buscarlas hace que la próxima vez nadie quiera seguir las reglas.' },
          kusi: ['pensando', 'Seguro… y carísimo.'] } },
      { id: 'c', label: 'Aceptar que Quispe se quede, solo esta vez: es voluntario, él siempre acepta, y el pago irá con sobretasa.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -3 }, rel: { gladys: 1 }, flags: ['turno_doblado'], cartera: { noche: 'Quispe dobla turno' },
          out: 'Quispe dice que sí, como siempre. A las 4 de la mañana, el que vigila la autoclave 3 lleva dieciséis horas despierto. Es el mismo lugar donde empezó todo.',
          pro: { ok: 'Mantienes la producción y se pagará.', risk: 'Encadenar turnos es justo lo que causó el caso de Marcos. «Solo esta vez» es como se forman las costumbres.' },
          kusi: ['preocupado', 'La autoclave 3, otra vez…'] } },
    ],
    rules: [[LEY, 'D.S. 007-2002-TR: el sobretiempo es voluntario y se paga con sobretasa.'], [LEY, 'Ley 29783: el empleador previene los riesgos que nacen de la organización del trabajo.']],
    mirada: {
      ve: 'Las reglas de jornada no se diseñaron para impedir producir: se diseñaron para que la fatiga no la pague el trabajador. La solución está casi siempre entre «doblar» y «parar».',
      visual: { tipo: 'balanza', a: { t: '«Que Quispe se quede»', items: ['Producción completa', 'Dieciséis horas', 'La autoclave 3 otra vez'] }, b: { t: 'Sobretiempo corto y voluntario', items: ['Dos horas, registradas', 'Línea más lenta', 'Nadie dobla'] } },
    },
  },
  {
    id: 'p7', t: '18:30', ch: 'whatsapp', who: null, titulo: 'Adelantarle el plan a Lucho', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Paradero del bus de la empresa', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>El bus a Nuevo Chimbote se demora. El doctor te autorizó a adelantarle a Lucho un resumen del plan para que mañana no llegue a ciegas. ${F.has('deuda_en_acta') ? 'Al fin y al cabo, ayer quedó en el acta que el plan se presentaba el jueves.' : 'Ayer la mesa terminó con el tema de las horas en el aire.'}</p><p><mark class="clave">Un mensaje que informe sin negociar por WhatsApp</mark>.</p>`,
    type: 'compose', enviaA: 'lucho', para: 'Para: Lucho Paredes · Sindicato', boton: 'Enviar el WhatsApp',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué se hará', ops: [
        { id: 'q1', t: 'Señor Paredes: la empresa pagará el sobretiempo de la campaña a los 38 trabajadores de la línea 2, con sobretasa, en una planilla adicional este viernes.', ok: true, por: 'Hechos y fecha.' },
        { id: 'q2', t: 'Lucho, ya ganaron lo de las horas.', ok: false, por: 'Convierte un pago debido en una victoria de la negociación.' },
      ] },
      { id: 'quienes', t: 'Los de la contratista', ops: [
        { id: 'w1', t: 'A Nor Pacífico se le exigió por escrito pagar a sus 9 operarios y acreditarlo, y no tomar represalias.', ok: true, por: 'Responde a la pregunta que él va a hacer.' },
        { id: 'w2', t: 'Lo de los de la service no nos corresponde.', ok: false, por: 'Desentenderse de ellos es lo que él va a criticar.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Mañana en la mesa le entregamos el plan completo por escrito para revisarlo juntos.', ok: true, por: 'El lugar de la discusión es la mesa.' },
        { id: 'c2', t: 'A cambio, esperamos flexibilidad con el bono.', ok: false, por: 'Ata una deuda a la negociación: lo que Valeria acaba de deshacer.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'w1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.cierre === 'c2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : -2, etica: sel.cierre === 'c2' ? -5 : 2 }, rel: { lucho: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? ['deuda_condicionada'] : ['plan_a_lucho'],
        cartera: { mesa: q === 'riesgosa' ? 'Lucho llega desconfiado' : 'Lucho tiene el resumen del plan' },
        out: q === 'buena' ? 'Lucho responde cuando el bus ya pasa por el puente: «Recibido. Mañana lo vemos con la base». Por primera vez en dos semanas, firma con un «gracias».' : q === 'riesgosa' ? '«¿Otra vez con eso?», responde Lucho. Le reenvía tu mensaje a Valeria, que te llama antes de que bajes del bus.' : 'Lucho responde: «Ok. ¿Y los de la service?». Le contestas en la noche.',
        pro: { ok: 'Adelantar hechos y fechas, sin negociar por WhatsApp, prepara una mesa más tranquila.', risk: 'Una frase que ata el pago al bono vuelve a convertir la deuda en ficha de cambio.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Mañana se llega con todo claro!' : 'Ese mensaje enreda la mesa…'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT, art. 54: negociar de buena fe.'], [BP, 'Por WhatsApp se informa; en la mesa se negocia.']],
    mirada: {
      ve: 'Adelantar información a la contraparte antes de una sesión difícil no es debilidad: le permite consultar a su base y llegar a conversar, no a reaccionar.',
      visual: { tipo: 'mensaje', titulo: 'Un adelanto que ordena la mesa', txt: 'Señor Paredes: la empresa pagará el sobretiempo de la campaña a los 38 trabajadores de la línea 2, con sobretasa, en una planilla adicional este viernes. A Nor Pacífico se le exigió por escrito pagar a sus 9 operarios y acreditarlo, y no tomar represalias. Mañana en la mesa le entregamos el plan completo por escrito.' },
    },
  },
];
