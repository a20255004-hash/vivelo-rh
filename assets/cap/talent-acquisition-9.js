// Talent Acquisition Partner · Capítulo 9 · «El tablero» · Semana 2, jueves.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas:
// - Ley 29733 (datos personales: finalidad y proporcionalidad), ya citada en el capítulo 3: un reporte para el cliente
//   no lleva datos personales de los candidatos.
//   https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011
// - Ley 30709 (igualdad remunerativa), ya citada en el capítulo 5.

export const CAP = {
  n: 9, titulo: 'El tablero', dia: 'Semana 2, jueves', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. A las 5 de la tarde hay comité con la Gerencia General y, a las 6, Leonardo se conecta con Cóndor Pay desde Bogotá. Todos van a preguntar lo mismo: «¿cuántos?». Tú tienes un ATS lleno de datos y una pregunta mejor: «¿qué nos dicen?».', boton: 'Abrir el ATS',
  kusi: 'Medir no es adornar. Un buen tablero ayuda a decidir, aunque la noticia no sea la que todos quieren.',
  lead: 'Armaste un tablero que sirve para decidir, defendiste la valla cuando faltaban ofertas, limpiaste el reporte para el cliente, le hiciste una oferta a Camila y contaste la verdad en el comité.',
  reflexion: '¿Qué número de tu trabajo te gustaría que nadie mirara… y por qué conviene mirarlo igual?',
  siguiente: { n: 10, titulo: 'Diez días', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: 'Faltan ofertas' },
  { id: 'tablero', p: 'Tablero de indicadores', j: 'Talent', d: 0, e: 'Por armar' },
  { id: 'reporte', p: 'Reporte para Cóndor Pay', j: 'Talent · Leonardo', d: 0, e: 'Borrador del ATS' },
  { id: 'camila', p: 'Oferta a Camila Torres', j: 'Talent · Rocío', d: 0, e: 'Aprobada por Leonardo' },
  { id: 'comite', p: 'Comité con Gerencia', j: 'Valeria', d: 0, e: 'A las 5 p. m.' },
];

export const FUTURO = {
  tablero_util: ['Tu tablero muestra avance, embudo, fuentes y tiempos: sirve para decidir.', 'Valeria lo usará cada semana.'],
  tablero_vanidad: ['Tu tablero muestra mucho volumen y poca decisión.', 'En el comité preguntarán lo que no responde.'],
  valla_mantenida: ['No bajaste la valla para llegar a 12: propusiste un plan realista.', 'Leonardo aceptó a regañadientes.'],
  valla_bajada: ['Aceptaste contratar a tres que no pasaron la evaluación.', 'Renzo tendrá que cargar con eso en el proyecto.'],
  servicios_disfrazados: ['Propusiste contratar a tres como «servicios» aunque trabajarán igual que el resto.', 'Rocío y Legal ya lo marcaron como riesgo.'],
  reporte_limpio: ['El reporte para Cóndor Pay tiene números agregados y ningún dato personal.', 'El cliente lo agradeció.'],
  reporte_expuesto: ['El reporte para Cóndor Pay salió con nombres, edades y sueldos pedidos.', 'Ya está en una bandeja en Bogotá.'],
  camila_oferta: ['Camila recibió una oferta clara, en el mismo punto de banda que sus pares, con plan de mentoría.', 'Responderá mañana.'],
  comite_verdad: ['En el comité dijiste cuántas ofertas hay de verdad y qué falta.', 'Gerencia aprobó el plan para la Semana 3.'],
  comite_maquillado: ['En el comité contaste aceptaciones como si fueran ingresos.', 'El viernes alguien hará la cuenta.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  camila: { n: 'Camila Torres', sub: 'Backend · candidata', who: 'dev' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
  ximena: { n: 'Ximena Flores', sub: 'Mobile · finalista en reserva', c: '#5E8E3B' },
  martin: { n: 'Martín Ccori', sub: 'Backend · finalista', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'talent', t: '08:35', de: 'Valeria', txt: 'Hoy es el día. Gerencia a las 5, Cóndor Pay a las 6. Necesito números que aguanten preguntas 🙏' },
  { chat: 'renzo', t: '09:30', de: 'Renzo', txt: 'Martín sacó 11 de 12 con el ajuste. Lo quiero en el equipo. En serio.', si: 'ajuste_hecho' },
  { chat: 'renzo', t: '09:30', de: 'Renzo', txt: 'Oye, ¿qué pasó con Martín? Nunca hizo la prueba.', si: 'ajuste_negado' },
  { chat: 'ximena', t: '11:00', de: 'Ximena', txt: '¡Hola! ¿Alguna novedad? Me llegó otra propuesta y quería saber antes de responder.', si: 'reserva_honesta' },
  { chat: 'renzo', t: '12:15', de: 'Renzo', txt: 'Gracias por no meterme gente que no pasó. No tengo tiempo para enseñar lo básico en pleno kickoff.', si: 'valla_mantenida' },
  { chat: 'camila', t: '18:40', de: 'Camila', txt: 'Recibí la oferta. Está muy clara, gracias. Mañana te respondo, quiero contárselo primero a mi abuela 😊', si: 'camila_oferta' },
];

export const CORREOS = [
  { t: '08:40', de: 'ATS · Código Andino', para: 'Talent', asunto: 'Resumen de la vacante Cóndor Pay', html: '<p>Contactados: 210. En proceso: 22. Pruebas entregadas: 31. Ofertas emitidas: 8. Ofertas aceptadas: 6. Retiradas después de aceptar: 1. Tiempo promedio desde la apertura hasta la oferta aceptada: 8 días hábiles.</p>' },
  { t: '12:30', de: 'Leonardo Vega', para: 'Talent', asunto: 'Para Cóndor Pay', html: '<p>Mándame a las 4 el reporte para el cliente. Quieren ver el avance «con detalle».</p><p>L.</p>' },
];

export const QUIZ = [
  { q: '¿Cuál de estos indicadores ayuda más a decidir en una búsqueda técnica?', ops: ['Mensajes enviados', 'Ofertas aceptadas por vacante y en qué etapa se pierden los candidatos', 'Likes del aviso', 'Horas trabajadas por Talent'], ok: 1, por: 'Lo que permite decidir es el avance real y dónde se traba el proceso.' },
  { q: 'Faltan ofertas y el CTO propone contratar a quienes no pasaron la evaluación. Lo mejor es…', ops: ['Aceptar para llegar a la meta', 'Mantener la valla y proponer un plan realista con fechas', 'Bajar la valla solo esta vez', 'Renunciar'], ok: 1, por: 'Bajar la valla para cumplir una cifra traslada el problema al equipo y al proyecto.' },
  { q: 'Un reporte de avance para el cliente debe incluir…', ops: ['Nombres, edades y sueldos pedidos por cada candidato', 'Números agregados y el plan, sin datos personales', 'Los CV completos', 'Las notas de las entrevistas'], ok: 1, por: 'Los datos personales se usan solo para la finalidad para la que se recogieron (Ley 29733).' },
  { q: 'Una oferta aceptada, ¿cuenta como un ingreso?', ops: ['Sí, siempre', 'No: hasta que la persona empieza a trabajar puede retirarse', 'Solo si firmó la carta', 'Depende del CTO'], ok: 1, por: 'Contar aceptaciones como ingresos infla el avance; esta semana ya se cayó una.' },
  { q: 'Para presentar malas noticias a la gerencia, conviene…', ops: ['Empezar por lo bueno y esconder lo malo', 'Contar la situación con datos, explicar las causas y pedir una decisión concreta', 'Culpar al CTO', 'No ir al comité'], ok: 1, por: 'Una mala noticia con un plan se convierte en una decisión.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:50', ch: 'documento', who: null, titulo: 'El tablero', banner: 'assets/esc/meta.webp', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>El ATS escupe 40 indicadores. El comité tiene 20 minutos. ${F.has('plan_medible') ? 'Tu plan de atracción del lunes ya decía qué medir: es hora de usarlo.' : 'El lunes no definiste bien qué medir; hoy te toca elegir rápido.'}</p><p>Armas un tablero de una sola pantalla. <mark class="clave">Cada número tiene que ayudar a decidir algo</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del tablero.', boton: 'Guardar el tablero',
    bloques: [
      { id: 'avance', t: 'Avance', n: 2, ops: [
        { id: 'a1', t: 'Ofertas aceptadas por perfil, contra la meta de 12.', ok: true },
        { id: 'a2', t: 'Aceptaciones retiradas y por qué.', ok: true, por: 'Lo de Jhon es información.' },
        { id: 'a3', t: 'Cantidad de mensajes de LinkedIn enviados.', ok: false, por: 'Mide esfuerzo, no avance.' },
      ] },
      { id: 'embudo', t: 'Embudo', n: 2, ops: [
        { id: 'e1', t: 'Tasa de paso en cada etapa, con la comparación por género.', ok: true, por: 'Así verás si los cambios del lunes funcionan.' },
        { id: 'e2', t: 'Fuente de cada contratado (referidos, LinkedIn, comunidad, portales).', ok: true },
        { id: 'e3', t: 'Visitas a la página de empleos.', ok: false, por: 'Interesante para Marketing, no para decidir hoy.' },
      ] },
      { id: 'tiempo', t: 'Tiempo', n: 1, ops: [
        { id: 't1', t: 'Días hábiles desde la apertura hasta la oferta aceptada, por perfil.', ok: true },
        { id: 't2', t: 'Horas extra que hizo Talent esta semana.', ok: false, por: 'Es un dato para ti, no para el comité.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: [q === 'riesgosa' ? 'tablero_vanidad' : 'tablero_util'], cartera: { tablero: q === 'riesgosa' ? 'Mucho volumen, poca decisión' : 'Una pantalla: avance, embudo, fuentes y tiempo' },
        out: q === 'buena' ? 'Valeria mira el tablero y se queda en una celda: backend senior y DevOps, en rojo. «Ahí está la conversación de hoy.»' : q === 'aceptable' ? 'El tablero sirve, aunque tiene ruido.' : 'El tablero se ve impresionante: 210 contactados, 31 pruebas. Pero no dice cuántas ofertas faltan ni dónde se traba.',
        pro: { ok: 'Pocos indicadores que lleven a decisiones son mejores que muchos que impresionen.', risk: 'Los indicadores de volumen dan sensación de trabajo, pero esconden lo que falta.', info: 'Repite el mismo tablero cada semana para ver tendencias.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una pantalla que decide!' : '¿Ese número ayuda a decidir algo?'],
      };
    },
    mirada: {
      ve: 'Los indicadores de reclutamiento más útiles responden tres preguntas: ¿cuánto avanzamos?, ¿dónde se pierde la gente? y ¿cuánto tardamos? Todo lo demás (mensajes enviados, visitas) es contexto, no decisión.',
      visual: { tipo: 'embudo', titulo: 'Cóndor Pay, hoy', niveles: [['Contactados', 210], ['En proceso', 53], ['Pruebas entregadas', 31], ['Ofertas emitidas', 8], ['Ofertas aceptadas', 6]] },
    },
  },
  {
    id: 'i2', t: '10:15', ch: 'presencial', who: 'cto', titulo: 'Faltan ofertas', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Leonardo · piso 9', show: ['calidad', 'etica', 'confianza'],
    body: (n, F) => `<p>Leonardo tiene el tablero abierto. ${F.has('diego_paquete') ? 'Diego firmó, y eso lo tiene de buen humor.' : 'Perdió a Diego, y eso lo tiene de mal humor.'} Señala la celda roja.</p><p>«Hay tres que sacaron 6 de 12 en la prueba. No son buenos, pero son algo. <mark class="clave">Contratémoslos y llegamos a 12</mark>. O, si Rocío se pone difícil, que entren como “servicios”, por recibo por honorarios, y listo.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer otra cosa: mantener la valla, ofertas a Camila, Martín y Ximena esta semana, y un plan para cubrir QA, data y DevOps en la Semana 3, con fecha.',
        res: { q: 'buena', fx: { calidad: 5, etica: 3, confianza: 2 }, rel: { cto: 1 }, flags: ['valla_mantenida'],
          out: 'Leonardo hace la cuenta en voz alta. «Diez seguros para el kickoff y dos en la Semana 3.» Se rasca la barba. «Ok. Pero si para el kickoff no tengo DevOps, me voy a quejar contigo en persona.»',
          pro: { ok: 'Proteges al equipo de contrataciones que no funcionarán y das un plan con fechas.', risk: 'No llegas a 12 a tiempo. Lo dices ahora, no el viernes.', info: 'Lleva la misma propuesta al comité: una decisión, no una excusa.' },
          kusi: ['celebra', 'La valla se queda donde está. ¡Bien!'] } },
      { id: 'b', label: 'Contratar a los tres de 6 de 12: con mentoría van a mejorar y la meta se cumple.',
        res: { q: 'riesgosa', fx: { calidad: -5, confianza: -1 }, flags: ['valla_bajada'],
          out: 'Leonardo queda contento. Renzo, cuando se entera, te escribe una sola palabra: «¿En serio?». En pleno kickoff, el equipo tendrá que enseñar lo básico a tres personas.',
          pro: { ok: 'La cifra de 12 aparece en el tablero.', risk: 'Bajar la valla para cumplir una meta traslada el problema al equipo y al cliente.' },
          kusi: ['preocupado', 'La cifra cuadra… ¿y el proyecto?'] } },
      { id: 'c', label: 'Contratarlos como «servicios» por recibo por honorarios: cuesta menos y no afecta la banda.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -4 }, flags: ['servicios_disfrazados'],
          out: 'Rocío y Legal responden en 10 minutos: «Si van a tener horario, jefe y dailies como el resto, eso no es un servicio: es un trabajador en planilla disfrazado. No lo firmamos».',
          pro: { ok: 'Parece más barato.', risk: 'Si la persona trabaja con horario y bajo órdenes como el resto, un contrato de servicios no refleja la realidad y expone a la empresa.' },
          kusi: ['indignado', '¡Eso no es un servicio!'] } },
    ],
    rules: [[BP, 'La meta es un equipo que funcione, no una cifra en el tablero.'], [BP, 'Si alguien trabaja con horario y bajo las órdenes de un jefe como el resto, su contrato debe reflejarlo.']],
    mirada: {
      ve: 'Cuando la meta aprieta, aparecen dos tentaciones: bajar la valla o cambiar la forma de contratar para que «cuadre». Un Talent Acquisition Partner que mira el negocio sabe que tres malas contrataciones cuestan más que dos semanas de retraso, y lo dice con números.',
      visual: { tipo: 'balanza', a: { t: '12 a cualquier costo', items: ['Cifra completa', 'Tres que no pasaron la prueba', 'Equipo enseñando lo básico en el kickoff'] }, b: { t: '10 + 2 con fecha', items: ['Valla intacta', 'Plan para la Semana 3', 'Conversación incómoda hoy'] } },
    },
  },
  {
    id: 'i3', t: '12:40', ch: 'documento', who: null, titulo: 'El reporte para Cóndor Pay', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Leonardo quiere el reporte «con detalle» para el cliente. El ATS genera uno automático. Lo abres antes de mandarlo.</p><p>Bogotá lo va a reenviar a quién sabe cuántas personas. <mark class="clave">Lo revisas línea por línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debe ir en el reporte para el cliente o lo que está mal calculado.',
    doc: { t: 'Reporte de avance · Equipo Cóndor Pay', sub: 'Generado automáticamente por el ATS · Para: Cóndor Pay (Bogotá)' },
    lines: [
      { id: 'avance', t: 'Ofertas aceptadas por perfil: 6 de 12, más 3 ofertas por emitir esta semana.' },
      { id: 'nombres', t: 'Tabla con nombre, edad, distrito y sueldo pedido de cada finalista.', bad: LEY, why: 'Son datos personales de candidatos que no se recogieron para dárselos al cliente.' },
      { id: 'ingresos', t: '«Ingresos confirmados: 7» (incluye a Jhon Paucar).', bad: BP, why: 'Jhon se retiró, y una aceptación no es un ingreso hasta que la persona empieza.' },
      { id: 'notas', t: 'Notas de las entrevistas técnicas de cada candidato.', bad: LEY, why: 'Son evaluaciones personales para decidir la contratación, no para el cliente.' },
      { id: 'plan', t: 'Plan para QA, data y DevOps en la Semana 3, con fechas.' },
      { id: 'tiempo', t: 'Tiempo promedio hasta la oferta aceptada: 8 días hábiles.' },
      { id: 'diversidad', t: 'Embudo agregado por género, sin nombres.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp >= 1 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -6 : 5, etica: missLey ? -3 : 3, calidad: hitsBp >= 1 ? 3 : 0 },
      flags: [missLey ? 'reporte_expuesto' : 'reporte_limpio'], cartera: { reporte: missLey ? 'Salió con datos personales' : 'Números agregados y plan, sin datos personales' },
      out: missLey ? 'El reporte llega a Bogotá con la tabla de nombres, edades y sueldos pedidos. A la hora, alguien de Cóndor Pay lo reenvía a seis personas.' : 'Dejas el avance, el plan, los tiempos y el embudo agregado. Corriges los «ingresos confirmados». Leonardo lo lee y dice: «Más corto. Mejor».',
      pro: { ok: 'El cliente recibe lo que necesita para confiar; los candidatos, la reserva que merecen.', risk: 'Un reporte con datos personales que viaja fuera de la empresa ya no se puede recoger.', info: 'Configura el ATS para que el reporte externo nunca incluya esas columnas.' },
      kusi: missLey ? ['preocupado', 'Esos datos ya están en Bogotá…'] : ['celebra', '¡Reporte limpio y verdadero!'],
    }),
    rules: [[LEY, 'Los datos personales se usan solo para la finalidad para la que se recogieron (Ley 29733).'], [BP, 'Una aceptación no es un ingreso hasta que la persona empieza a trabajar.']],
    mirada: {
      ve: 'Los reportes automáticos son cómodos y peligrosos: incluyen todo lo que el sistema tiene. Un reporte para el cliente lleva números agregados y un plan. Los nombres, sueldos pedidos y notas de entrevista se quedan dentro del proceso de selección.',
      visual: { tipo: 'cambio', titulo: 'El reporte, antes y después', pares: [['Tabla con nombres, edades y sueldos', '(se elimina)'], ['Notas de entrevistas', '(se elimina)'], ['Ingresos confirmados: 7', 'Ofertas aceptadas: 6'], ['(nada)', 'Plan para la Semana 3']] },
    },
  },
  {
    id: 'i4', t: '14:10', ch: 'whatsapp', who: 'dev', titulo: 'La oferta de Camila', banner: 'assets/foto/acuerdo.webp', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Leonardo aprobó la oferta de Camila después de su conversación de ayer: «La mejor de esta tanda». Rocío la ubicó en la banda ${F.has('pago_equitativo') ? 'en el mismo punto que Patricia y Andrés, con el mismo criterio' : 'según su experiencia y su resultado'}.</p><p>Antes de mandarle la carta, le escribes. Camila te dijo el primer día lo que buscaba: <mark class="clave">«un equipo donde aprender»</mark>.</p>`,
    type: 'compose', enviaA: 'camila', para: 'Para: Camila Torres · candidata', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'noticia', t: 'La noticia', ops: [
        { id: 'n1', t: 'Camila, ¡queremos que te unas al equipo! Te acabo de mandar la carta oferta por correo.', ok: true },
        { id: 'n2', t: 'Camila, tengo una oferta, pero antes dime cuánto quieres ganar.', ok: false, por: 'La oferta ya está definida por criterio, no por lo que pida.' },
      ] },
      { id: 'sueldo', t: 'El sueldo', ops: [
        { id: 's1', t: 'Está en el mismo punto de la banda que las personas con tu nivel y resultado.', ok: true, por: 'Responde lo que te preguntó el viernes.' },
        { id: 's2', t: 'Es lo máximo que pudimos conseguir, porque eres mujer y queremos más mujeres.', ok: false, por: 'Mezcla el criterio salarial con su género. Además, no es cierto.' },
      ] },
      { id: 'aprender', t: 'Lo que buscaba', ops: [
        { id: 'a1', t: 'Renzo será tu tech lead y Andrea, tu buddy; la carta incluye un plan de mentoría de tres meses.', ok: true, por: 'Responde a lo que ella dijo que quería.' },
        { id: 'a2', t: '¡Vas a aprender un montón!', ok: null, por: 'Bonito, pero sin nada concreto.' },
      ] },
      { id: 'tiempo', t: 'Tiempo', ops: [
        { id: 't1', t: 'Tómate hasta el lunes para decidir. Si tienes dudas, te llamo.', ok: true },
        { id: 't2', t: 'Necesito tu respuesta hoy.', ok: false, por: 'Presión innecesaria.' },
      ] },
    ],
    res: sel => {
      const buenas = ['n1', 's1', 'a1', 't1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1, etica: sel.sueldo === 's2' ? -3 : 2 }, rel: { dev: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['camila_oferta'], cartera: { camila: q === 'riesgosa' ? 'Oferta enviada con un mensaje confuso' : 'Oferta clara con plan de mentoría' },
        out: q === 'buena' ? 'Camila responde con un audio de 4 segundos: un grito de alegría y una disculpa. Luego escribe: «Gracias por acordarte de lo que te dije el primer día».' : q === 'riesgosa' ? 'Camila tarda en responder. Cuando lo hace, es corto: «Ok, lo reviso».' : 'Camila agradece y dice que lo revisará con calma.',
        pro: { ok: 'Una oferta que responde a lo que la persona pidió en el proceso tiene más probabilidades de ser aceptada y de durar.', risk: 'Mezclar el sueldo con el género de la candidata confunde el criterio y la incomoda.', info: 'La mentoría tiene que estar en la carta, no solo en el WhatsApp.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un grito de alegría en 4 segundos!' : '¿Eso responde a lo que ella buscaba?'],
      };
    },
    mirada: { ve: 'Una buena oferta repite lo que el proceso descubrió: qué le importa a la persona. Para Camila no era solo el sueldo: era aprender y no sentirse sola. Cuando la oferta lo responde con nombres y un plan, la persona siente que la escucharon.' },
  },
  {
    id: 'i5', t: '15:40', ch: 'documento', who: null, titulo: 'Veinte minutos', banner: 'assets/esc/escalera.webp', lugar: 'Sala Huascarán · piso 9', show: ['calidad', 'confianza'],
    body: () => `<p>Valeria te da los primeros cinco minutos del comité. La Gerente General, Mónica Arévalo, tiene fama de cortar a quien da vueltas.</p><p>Ordenas tu intervención. <mark class="clave">Cinco minutos, cinco partes</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena tu intervención. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'situacion', t: 'La situación en una frase: 6 ofertas aceptadas de 12, y 3 más esta semana', por: 'Lo primero que quiere saber.' },
      { id: 'causa', t: 'Por qué: backend senior y DevOps compiten con ofertas en dólares', por: 'La causa, con datos.' },
      { id: 'hecho', t: 'Qué cambiamos: bandas, prueba técnica, filtro de CV y respuesta en 48 horas', por: 'Lo que ya está funcionando.' },
      { id: 'pedido', t: 'Qué decisión pedimos: aprobar el plan para cubrir QA, data y DevOps en la Semana 3', por: 'Una decisión concreta.' },
      { id: 'riesgo', t: 'El riesgo si no se aprueba: el kickoff empieza sin DevOps', por: 'Para que se entienda qué está en juego.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 3 : 0 },
        out: q === 'buena' ? 'Lo ensayas una vez con Valeria. Cuatro minutos y medio. «Perfecto. Mónica va a preguntar por DevOps; ten el dato a la mano.»' : 'Valeria te cambia el orden: «Primero la cifra. Si empiezas por los cambios, Mónica va a pensar que estás escondiendo el número».',
        pro: { ok: 'Situación, causa, acciones, pedido y riesgo: un orden que respeta el tiempo de la gerencia.', risk: 'Empezar por lo bueno para suavizar lo malo hace pensar que escondes algo.', info: 'Lleva el tablero impreso por si falla el proyector.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Cinco minutos bien armados!' : 'Primero el número, luego la historia.'],
      };
    },
    mirada: {
      ve: 'Presentar a la gerencia es parte del trabajo de un Talent Acquisition Partner. Lo que funciona es simple: el número primero, la causa con datos, lo que ya se hizo, la decisión que se necesita y el riesgo de no tomarla.',
      visual: { tipo: 'flujo', titulo: 'Cinco minutos en el comité', pasos: ['Situación', 'Causa', 'Lo que cambiamos', 'Decisión que pedimos', 'Riesgo'] },
    },
  },
  {
    id: 'i6', t: '17:05', ch: 'presencial', who: null, titulo: 'El comité', banner: 'assets/3d/scenes/corporativo.webp', lugar: 'Sala de directorio · piso 12', show: ['confianza', 'etica', 'calidad'],
    body: (n, F) => `<p>La sala del piso 12 tiene vista al Golf y aire acondicionado demasiado frío. Mónica Arévalo, 58 años, ingeniera de sistemas, te mira por encima de los lentes. ${F.has('plazo_optimista') ? '«El lunes de la semana pasada nos dijeron que llegábamos a 12. ¿Llegamos?»' : '«Valeria me dijo que la semana pasada nos advirtieron que esto era de alto riesgo. ¿Cómo vamos?»'}</p><p>Leonardo está a su derecha. Valeria, a tu lado. <mark class="clave">Te toca</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Decir la cifra real (6 aceptadas, 3 en camino), explicar por qué y pedir la aprobación del plan para la Semana 3.',
        res: { q: 'buena', fx: { confianza: 5, etica: 3, calidad: 2 }, rel: { 'valeria-ta': 1, cto: 1 }, flags: ['comite_verdad'], cartera: { comite: 'Plan para la Semana 3 aprobado' },
          out: 'Mónica escucha sin interrumpir. Pregunta por DevOps; tienes el dato. «Aprobado el plan. Y quiero este tablero cada viernes.» Al salir, Leonardo te dice bajito: «Bien. Eso no lo hubiera dicho yo así».',
          pro: { ok: 'La verdad con un plan convierte una mala noticia en una decisión.', risk: 'Es incómodo decir que no llegas. Pero el viernes iba a ser peor.', info: 'Manda el resumen del comité por escrito hoy mismo.' },
          kusi: ['celebra', '¡La verdad con plan! Qué bacán.'] } },
      { id: 'b', label: 'Decir que hay 9 «prácticamente cerradas», contando las ofertas que aún no se envían, para que el comité salga tranquilo.',
        res: { q: 'riesgosa', fx: { confianza: -4, etica: -4 }, rel: { 'valeria-ta': -1 }, flags: ['comite_maquillado'],
          out: 'Mónica sonríe y pasa al siguiente punto. Valeria no te mira. Al salir, solo te dice: «Mañana alguien va a hacer la cuenta».',
          pro: { ok: 'El comité sale tranquilo hoy.', risk: 'Contar como cerrado lo que no está cerrado se descubre en días, y se pierde la confianza de la gerencia.' },
          kusi: ['preocupado', '«Prácticamente» no es lo mismo que «cerrado»…'] } },
    ],
    mirada: { ve: 'La credibilidad de un área de Talent se construye en comités como este. Una cifra maquillada da un día de tranquilidad y meses de desconfianza; una cifra real con un plan da una decisión y un aliado en la gerencia.' },
  },
];
