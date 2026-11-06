// Asistente de Bienestar Social · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Hilo: balance de las dos semanas en Bienestar Social. Final abierto: el lunes llega el informe del comité de
// intervención y Nelly sale de vacaciones.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 29733, de Protección de Datos Personales: datos de salud y casos reservados fuera de matrices generales.
// - Ley 27942 y D.S. 014-2019-MIMP: reserva del procedimiento y prohibición de represalias.
//   https://www.buk.pe/blog/ley-27942-prevencion-sancion-hostigamiento-sexual
// - Ley 29783, art. 76 (modificado por Ley 30222): adecuación del puesto ante accidente de trabajo o enfermedad
//   ocupacional. https://nagoconsultores.com/pdf/Ley30222.pdf
// - Ley 26790 y procedimiento de EsSalud (subsidio y reembolso por ViVa).
//   https://www.gob.pe/423-subsidio-para-el-trabajador-por-incapacidad-temporal-solicitar-y-cobrar-el-subsidio-por-incapacidad-temporal

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '07:30', fin: '18:30', cierreHora: '18:15',
  apertura: 'Viernes. Hace dos semanas Nelly te dejó 23 carpetas. Hoy te pide la matriz de casos actualizada y una conversación sin apuro.', boton: 'Abrir la matriz de casos',
  kusi: 'Hoy toca mirar atrás sin perder de vista lo que viene. ¡Qué dos semanas!',
  lead: 'Ordenaste la matriz de casos sin exponer a nadie, escuchaste lo que Nelly tenía que decirte, cuidaste lo que viene para Milagros y Don Héctor, y dejaste lista la semana en la que te quedarás sola.',
  reflexion: 'Después de dos semanas, ¿te ves en este puesto? ¿Qué te haría quedarte y qué te haría irte?',
  siguiente: { n: 11, titulo: 'El informe del comité', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'matriz', p: 'Matriz de casos', j: 'Bienestar', d: 0, e: 'Por actualizar' },
  { id: 'hector', p: 'Caso Llontop', j: 'Bienestar · Salud Ocupacional', d: 0, e: 'En seguimiento' },
  { id: 'queja', p: 'Caso de campo (reservado)', j: 'Comité de intervención', d: 0, e: 'Informe el lunes' },
  { id: 'lactario', p: 'Lactario', j: 'Bienestar', d: 0, e: 'Primera semana de uso' },
  { id: 'semana3', p: 'Semana 3 sin Nelly', j: 'Tú', d: 0, e: 'Por planificar' },
];

export const FUTURO = {
  matriz_reservada: ['Tu matriz de casos usa códigos para lo reservado y no tiene diagnósticos.', 'Será tu herramienta la semana en que estés sola.'],
  renovacion_vigilada: ['Pediste que RR.HH., y no el supervisor, revise la renovación de contrato de la denunciante.', 'Enero pondrá a prueba esa medida.'],
  augusto_aliado: ['Augusto aceptó llevar la campaña de salud a los fundos de corte.', 'Te llamará la próxima semana.'],
  plan_semana3: ['Tienes un plan de prioridades para la semana en que Nelly está de vacaciones.', 'El lunes empieza con el informe del comité.'],
  te_ves_si: ['Dijiste que te ves en el puesto.', 'La Semana 3 te pondrá a prueba sola.'],
  te_ves_dudas: ['Dijiste que todavía no sabes si te ves en el puesto.', 'La Semana 3 te ayudará a decidir.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Instructor de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  rosa: { n: 'Rosa Ñiquén', sub: 'Esposa de Don Héctor', c: '#B5651D' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Operaria de envasado · turno noche', c: '#9B4F96' },
  teodora: { n: 'Teodora Ñañez', sub: 'Operaria de semillero', c: '#8D6E63' },
  wilmer: { n: 'Wilmer Sandoval', sub: 'Analista de Planillas', c: '#5B6C8F' },
};

export const WSP = [
  { chat: 'yesenia', t: '07:10', de: 'Yesenia', txt: 'Señorita salí con mi leche en el cooler 🥹 Tres veces anoche. Elmer embolsó por mí. Gracias.', si: 'noche_cubierta' },
  { chat: 'rosa', t: '08:00', de: 'Rosa', txt: 'Señorita, Brayan fue a la universidad a ver su reserva de matrícula. Héctor está orgulloso aunque no lo diga.', si: 'brayan_matricula' },
  { chat: 'wilmer', t: '10:15', de: 'Wilmer', txt: 'EsSalud no observó el expediente del Sr. Llontop. Primera vez en un año. Pásame el formato para los otros.', si: 'expediente_ordenado' },
  { chat: 'maribel', t: '12:30', de: 'Maribel', txt: 'Ya van 9 mamás registradas en el cuaderno del lactario 😍 Dos son de campo.', si: 'lactario_reglas' },
  { chat: 'hector', t: '15:20', de: 'Don Héctor', txt: 'Señorita hoy di la clase abajo, ya no subí escaleras. Y los chiquillos aprobaron su prueba 💪', si: 'aula_movida' },
  { chat: 'grupo', t: '18:05', de: 'Nelly', txt: 'Te dejé en tu escritorio la llave del archivador y mi número de emergencia. El lunes llega el informe del comité. Confío en ti 💛' },
];

export const CORREOS = [
  { t: '07:35', de: 'Nelly Ramírez', para: 'Asistente de Bienestar Social', asunto: 'Hoy conversamos', html: '<p>Hoy no hay apuro. Tráeme la matriz de casos al día y conversamos a las 9 en la banca del algarrobo, lejos del teléfono.</p><p>Y una noticia: desde el lunes salgo una semana de vacaciones que tenía pendientes desde junio. Te quedas a cargo.</p><p>Nelly</p>' },
  { t: '17:40', de: 'Dra. Rocío Vera', para: 'Bienestar Social', asunto: 'Comité de intervención (reservado)', html: '<p>El comité concluyó las entrevistas. El informe final se entrega el lunes a primera hora a Recursos Humanos.</p><p>Bienestar deberá acompañar a la persona denunciante cuando se le comunique el resultado, sea cual sea.</p>' },
];

export const QUIZ = [
  { q: 'En una matriz de casos que ve más de una persona, un caso de hostigamiento se registra…', ops: ['Con el nombre de ambas partes', 'Con un código y el estado, sin detalles', 'En el grupo de WhatsApp', 'No se registra'], ok: 1, por: 'El procedimiento es reservado: en la matriz general basta un código y el estado.' },
  { q: '¿Cuándo se «cierra» un caso de reincorporación?', ops: ['El día que el trabajador vuelve', 'Cuando se cumplen el seguimiento y la reevaluación médica acordados', 'Cuando lo dice el jefe', 'Nunca se registra'], ok: 1, por: 'El retorno se acompaña: el caso sigue abierto hasta el seguimiento y la reevaluación.' },
  { q: 'Una trabajadora que denunció tiene contrato de zafra que vence en enero. ¿Qué cuidas?', ops: ['Nada: la renovación es libre', 'Que la decisión de renovar no la tome el denunciado y quede documentada', 'Prometerle que la renovarán', 'Que se cambie de empresa'], ok: 1, por: 'Las represalias están prohibidas (Ley 27942): la no renovación decidida por el denunciado puede serlo.' },
  { q: '¿Qué te enseñaron estas dos semanas sobre Bienestar Social?', ops: ['Que es organizar fiestas', 'Que es acompañar casos con normas, reserva y redes', 'Que es solo trámite', 'Que es hacer lo que pide la gerencia'], ok: 1, por: 'El bienestar es concreto: subsidios, lactarios, retornos, protección y confidencialidad.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '07:50', ch: 'documento', who: null, titulo: 'La matriz de casos', banner: 'assets/3d/scenes/oficina-sq.webp', lugar: 'Oficina de Bienestar', show: ['calidad', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Abres la matriz que empezaste el primer lunes. ${F.has('registro_cuidado') ? 'Es el archivo solo de Bienestar que creaste cuando cerraron el Excel compartido.' : 'Todavía convive con el viejo Excel compartido, que ya alguien reenvió una vez.'} Algunas filas las llenaste a la carrera, en el bus.</p><p>Nelly la usará la semana que viene para seguirte a la distancia. <mark class="clave">Que diga el estado real, sin exponer a nadie</mark>.</p>`,
    type: 'flag', prompt: 'Marca las filas que hay que corregir.',
    doc: { t: 'Matriz de casos · Bienestar Social', sub: 'Archivo de Bienestar · actualizada al viernes' },
    lines: [
      { id: 'hector', t: 'Llontop, Héctor · subsidio y retorno · CERRADO.', bad: BP, why: 'Faltan el seguimiento a las dos semanas, la reevaluación médica y la evaluación de origen ocupacional. Es «en seguimiento».' },
      { id: 'queja', t: 'Puicón, Milagros · hostigamiento por Ing. R. Mío · en comité.', bad: LEY, why: 'Un caso reservado va con código y estado, sin nombres ni el del denunciado.' },
      { id: 'lactario', t: 'Lactario · implementado en tres turnos · registro de uso en curso.' },
      { id: 'segundo', t: 'Tantaleán, Segundo · hipertensión severa, no tolera turnos largos.', bad: LEY, why: 'Es un diagnóstico. En la matriz basta: «derivado a EsSalud desde la campaña; seguimiento».' },
      { id: 'cortadores', t: 'Campaña de salud · pendiente: cuadrillas de corte en los fundos.' },
      { id: 'gladys', t: 'Gladys, esposa del denunciado del caso de campo · orientación.', bad: BP, why: 'Vincula a una persona con un caso reservado. Basta con «orientación familiar, derivada».' },
      { id: 'beca', t: 'Beca escolar · plazo en febrero · por iniciar.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Guardas la matriz con nombres y diagnósticos. Es el mismo error del Excel del primer día, en otro archivo.' : 'Cambias cuatro filas. Donde decía «Puicón» ahora dice «HS-01 · en comité». Nelly, cuando la vea, solo dirá: «Eso».',
      flags: missLey ? [] : ['matriz_reservada'], rel: { nelly: missLey ? 0 : 1 },
      cartera: { matriz: missLey ? 'Con nombres y diagnósticos' : 'Estados reales, códigos y sin diagnósticos' },
      pro: { ok: 'Estado real y reserva: una matriz que sirve para gestionar sin convertirse en una filtración.', risk: '«Cerrado» antes de tiempo hace que nadie haga el seguimiento.', info: 'Lleva el detalle de cada caso en su expediente físico, bajo llave.' },
      kusi: missLey ? ['preocupado', 'Como el Excel del primer día…'] : ['celebra', 'Una matriz que cuida.'],
    }),
    rules: [[LEY, 'Ley 29733: los datos de salud son sensibles; el procedimiento por hostigamiento es reservado.'], [BP, 'Un caso se cierra cuando terminan el seguimiento y los compromisos, no cuando se resuelve lo urgente.']],
    mirada: {
      ve: 'La matriz de casos empezó siendo un Excel peligroso y termina siendo tu herramienta principal. La diferencia está en dos cosas: qué datos guarda y qué entiende por «cerrado».',
      visual: { tipo: 'embudo', titulo: 'Dónde va cada cosa', niveles: [['Matriz: código, estado y siguiente paso', 7], ['Expediente bajo llave: el caso completo', 4], ['Grupo de WhatsApp: nada reservado', 0]] },
    },
  },
  {
    id: 'f2', t: '09:00', ch: 'presencial', who: 'nelly', titulo: 'La banca del algarrobo', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Banca bajo el algarrobo, detrás del comedor', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Nelly trae dos cafés pasados y unos alfajores de Chiclayo envueltos en servilleta. Se sienta, se quita los lentes y te mira. «Dos semanas. ¿Cómo estás tú, no los casos?»</p><p>Hablan de todo un rato. Luego te dice: «Pregúntame lo que quieras». <mark class="clave">Tienes tiempo para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Nelly.',
    opts: [
      { id: 'bien', label: '¿Qué hice bien estas dos semanas?', info: `«Que no te quedaste en la carpeta. Fuiste a la casa de Don Héctor, te quedaste de noche por el lactario, escuchaste a Milagros con la puerta cerrada. Eso no se enseña en la universidad.»` },
      { id: 'mejorar', label: '¿Qué no debería repetir?', info: '«Cargarte todo. Esta semana dormiste poco y almorzaste de pie. Si te quemas en el primer año, no ayudas a nadie. Pide ayuda antes, no después.»' },
      { id: 'aguantar', label: '¿Cómo aguantas esto tantos años?', info: '«Con dos cosas: separo lo mío de lo de ellos al subir al bus, y guardo en una cajita las notas que me dejan. Tengo una de un operario de hace quince años. Dice “gracias por no soltarme”.»' },
      { id: 'lunes', label: '¿Qué viene el lunes?', info: '«Llega el informe del comité y yo no voy a estar: me voy de vacaciones. Sea cual sea el resultado, tú acompañas a Milagros cuando se lo comuniquen. Y empieza la campaña en los fundos de corte, si Augusto la acepta.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 4, personas: 2 }, rel: { nelly: 1 },
      cartera: { semana3: picks.includes('lunes') ? 'Informe del comité y campaña en fundos' : 'Nelly de vacaciones desde el lunes' },
      out: picks.includes('aguantar') ? 'Nelly saca de su bolso una nota doblada y amarillenta, y la vuelve a guardar. «Ya vas a tener tu cajita.»' : picks.includes('mejorar') ? 'Te ríes, pero se te humedecen los ojos. Nelly te pasa un alfajor: «Para que almuerces algo sentada, aunque sea esto».' : 'Nelly termina su café: «Vamos, que el algarrobo no paga planillas».',
      kusi: ['feliz', 'Una buena jefa también cuida a quien cuida.'],
    }),
    rules: [[BP, 'Pide retroalimentación concreta: qué repetir, qué cambiar y qué viene.']],
    mirada: {
      ve: 'En Bienestar, quien cuida también necesita cuidarse. Saber separar lo propio de lo ajeno y pedir ayuda a tiempo es parte del oficio, no una debilidad.',
      visual: { tipo: 'balanza', a: { t: 'Lo que te llevas', items: ['Una familia que respira', 'Un lactario de noche', 'Una queja bien recibida'] }, b: { t: 'Lo que te cuesta', items: ['Dormir poco', 'Almorzar de pie', 'Llevarte los casos en el bus'] } },
    },
  },
  {
    id: 'f3', t: '11:00', ch: 'llamada', who: null, titulo: 'Las últimas llamadas', banner: 'assets/foto2/callcenter.webp', lugar: 'Oficina de Bienestar', show: ['personas', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>Antes del almuerzo, el teléfono no para. ${F.has('milagros_decide') ? 'Milagros te confirmó su cita en el CEM del lunes.' : F.has('milagros_desiste') ? 'Milagros no ha vuelto a escribirte desde el desistimiento.' : ''}</p><p>Tres llamadas. <mark class="clave">Una de ellas trae una pregunta que nadie se había hecho</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Dr. Martín Salazar · Salud Ocupacional', 'Contesta entre pacientes', '«Para evaluar si la rodilla de Don Héctor es de origen ocupacional necesito su historia de puestos: veintidós años en molienda, qué cargaba, cuánto subía. Eso lo tiene Planillas o él mismo. Lo veo la próxima semana.»'],
      ['Doña Teodora Ñañez', 'Contesta en el refrigerio', '«Señorita, una pregunta nomás. A Milagros y a mí el contrato se nos vence en enero. ¿Quién decide si nos renuevan? Antes lo decidía el ingeniero Mío.»'],
      ['Wilmer Sandoval · Planillas', 'Contesta con la boca llena', '«La renovación de los de zafra la propone el supervisor de cada cuadrilla y la firma el gerente de campo. Así siempre.»'],
    ],
    prompt: 'Con lo que escuchaste, ¿qué haces?',
    choices: [
      { id: 'a', label: 'Pedir por escrito a RR.HH. que la renovación de la denunciante y de la testigo la evalúe RR.HH. con criterios objetivos, no el denunciado ni su compadre, y que quede en el expediente del comité.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 4, etica: 3 }, flags: ['renovacion_vigilada'], cartera: { queja: 'Renovación de enero bajo revisión de RR.HH.' },
          out: 'La jefa de RR.HH. responde en una hora: «Bien visto. Lo incluyo en el informe al comité como medida complementaria». A Teodora le dices solo eso: que RR.HH. revisará los contratos de su cuadrilla.',
          pro: { ok: 'Ves una represalia posible antes de que ocurra y la cierras con un procedimiento, no con una promesa.', info: 'Una no renovación decidida por el denunciado puede ser una represalia, aunque parezca un trámite.' },
          kusi: ['celebra', '¡Viste la trampa de enero!'] } },
      { id: 'b', label: 'Tranquilizar a Teodora: prometerle que a ellas dos sí las van a renovar.',
        res: { q: 'riesgosa', fx: { personas: 2, confianza: -3, cumplimiento: -2 }, cartera: { queja: 'Promesa de renovación sin respaldo' },
          out: 'Teodora respira: «Gracias, señorita». En enero, la propuesta de renovación seguirá pasando por la misma cadena de siempre. Y tu promesa no está escrita en ningún lado.',
          pro: { ok: 'Le das tranquilidad.', risk: 'Prometiste algo que no decides. Si no se cumple, Bienestar pierde toda credibilidad.' },
          kusi: ['preocupado', '¿Y si en enero no las renuevan?'] } },
      { id: 'c', label: 'Decirle que la renovación es un tema de Planillas y Gerencia, no de Bienestar.',
        res: { q: 'riesgosa', fx: { personas: -3, cumplimiento: -2 }, cartera: { queja: 'Riesgo de represalia en enero sin atender' },
          out: 'Teodora cuelga con un «ya, señorita». La pregunta queda en el aire, y en enero alguien firmará sin pensar en el comité.',
          pro: { ok: 'Respetas las competencias de cada área.', risk: 'Cuidar que no haya represalias sí es parte del acompañamiento.' },
          kusi: ['triste', 'Era una pregunta importante…'] } },
    ],
    rules: [[LEY, 'Ley 27942: prohibición de represalias contra la víctima y los testigos, incluidas las decisiones sobre su continuidad.'], [LEY, 'Ley 29783, art. 76: la evaluación de origen ocupacional define derechos en la adecuación del puesto.']],
    mirada: {
      ve: 'Algunas represalias no llegan como un grito, sino como un trámite de rutina meses después. Acompañar un caso es mirar hacia adelante: quién firmará, cuándo y con qué criterio.',
      visual: { tipo: 'linea', titulo: 'Lo que viene para el caso de campo', hitos: [['Lunes', 'Informe del comité'], ['Próximas semanas', 'Decisión del empleador'], ['Enero', 'Renovación de contratos de zafra'], ['Siempre', 'Vigilar represalias']] },
    },
  },
  {
    id: 'f4', t: '13:30', ch: 'whatsapp', who: null, titulo: 'Para Augusto', banner: 'assets/foto/acuerdo.webp', lugar: 'Comedor, con un arroz con pato', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Almuerzas sentada, como te pidió Nelly. La campaña de salud no llegó a las cuadrillas de corte, y los fundos son de Augusto. ${F.has('augusto_frenado') ? 'Después del martes, Augusto te saluda con un movimiento seco de cabeza, pero te saluda.' : 'Desde lo del martes, Augusto casi no te mira.'}</p><p>Necesitas su sí para llevar la campaña a los fundos. <mark class="clave">Un mensaje que no reabra lo del martes</mark>.</p>`,
    type: 'compose', enviaA: 'augusto', para: 'Para: Augusto Bravo · Gerente de campo', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo abres', ops: [
        { id: 'a1', t: 'Ing. Bravo, buenas tardes. Gracias por lo del candado del lactario y por el bus del viernes.', ok: true, por: 'Reconoces lo que sí hizo.' },
        { id: 'a2', t: 'Ing. Bravo, sé que no quedamos bien el martes, pero…', ok: false, por: 'Reabre la herida sin necesidad.' },
      ] },
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'En la campaña, la presión alta fue más frecuente en molienda y turno noche, y a las cuadrillas de corte no llegamos.', ok: true, por: 'Dato agregado, sin nombres, que le importa a él.' },
        { id: 'd2', t: 'Sus cortadores están muy descuidados en salud.', ok: false, por: 'Suena a crítica a su gestión.' },
      ] },
      { id: 'propuesta', t: 'La propuesta', ops: [
        { id: 'p1', t: 'Propongo ir con la red de salud a La Pampa a la hora del refrigerio, sin parar el corte.', ok: true, por: 'Cuida lo que a él le preocupa: la zafra.' },
        { id: 'p2', t: 'Necesitamos que pare el corte medio día.', ok: false, por: 'Pide justo lo que no puede dar.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: '¿Le parece la próxima semana? Coordino todo con la Ing. Bances.', ok: true, por: 'Pedido concreto y con alguien que él aprueba.' },
        { id: 'c2', t: 'Quedo atenta a su respuesta.', ok: null, por: 'Le deja toda la iniciativa.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'd1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 0, personas: q === 'buena' ? 3 : 0 }, rel: { augusto: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['augusto_aliado'] : [],
        cartera: { semana3: q === 'buena' ? 'Campaña en La Pampa aprobada' : 'Campaña en fundos por negociar' },
        out: q === 'buena' ? 'Augusto responde a los diez minutos: «Martes a las 10, en el refrigerio. Que no se demoren». Y luego, otro mensaje: «Buen trabajo con lo del lactario».' : sel.propuesta === 'p2' ? 'Augusto responde: «¿Parar el corte? Ni hablar». Te toca volver a intentarlo el lunes.' : 'Augusto deja el mensaje en visto.',
        pro: { ok: 'Reconoces, das un dato que le importa y propones algo que no le cuesta la zafra.', info: 'Las relaciones difíciles se reconstruyen con propuestas útiles, no con explicaciones.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Hasta Augusto dijo «buen trabajo»!' : '¿Qué le importa a él?'],
      };
    },
    rules: [[BP, 'Con un gerente práctico: reconocimiento, dato, propuesta que cuide su operación y un pedido concreto.']],
    mirada: {
      ve: 'Después de un choque, Bienestar no puede cortar la relación con un gerente: lo necesita para llegar a su gente. La forma de volver es con una propuesta que le resuelva algo.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje que reconstruye', txt: 'Ing. Bravo, buenas tardes. Gracias por lo del candado del lactario y por el bus del viernes. En la campaña, la presión alta fue más frecuente en molienda y turno noche, y a las cuadrillas de corte no llegamos. Propongo ir con la red de salud a La Pampa a la hora del refrigerio, sin parar el corte. ¿Le parece la próxima semana? Coordino todo con la Ing. Bances.' },
    },
  },
  {
    id: 'f5', t: '15:30', ch: 'documento', who: null, titulo: 'La semana sin Nelly', banner: 'assets/esc/escalera.webp', lugar: 'Pizarra de Bienestar', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>Nelly borra la pizarra y te da el plumón: «Ordénala tú. Es tu semana».</p><p>Somos dos para 1,500 personas, y la semana que viene serás una. <mark class="clave">No todo cabe: el orden es la decisión</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena tus prioridades para la Semana 3, de la más urgente a la que puede esperar.', boton: 'Dejarlo en la pizarra',
    items: [
      { id: 'comite', t: 'Acompañar a la denunciante cuando le comuniquen el informe del comité', por: 'Lunes a primera hora, sea cual sea el resultado.' },
      { id: 'represalia', t: 'Vigilar represalias en la cuadrilla de semillero', por: 'El informe puede encender los ánimos.' },
      { id: 'hector', t: 'Seguimiento de Don Héctor y su historia de puestos para el médico', por: 'Define si la lesión es ocupacional.' },
      { id: 'lactario', t: 'Revisar el registro de la primera semana del lactario', por: 'Saber si se usa en los tres turnos.' },
      { id: 'fundos', t: 'Campaña de salud en las cuadrillas de corte', por: 'Martes en La Pampa, si Augusto aceptó.' },
      { id: 'beca', t: 'Empezar las solicitudes de beca escolar', por: 'El plazo es en febrero.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, tiempo: q === 'buena' ? 2 : -1 }, rel: { nelly: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['plan_semana3'],
        cartera: { semana3: q === 'buena' ? 'Plan ordenado por riesgo para la persona' : 'Plan por ajustar' },
        out: q === 'buena' ? 'Nelly mira la pizarra y asiente despacio: «El mismo criterio del primer día: primero lo que pone en riesgo a una persona». Le toma una foto.' : 'Nelly mueve una tarjeta: «Lo de la beca puede esperar. Lo del lunes con la denunciante, no».',
        pro: { ok: 'Ordenas por riesgo para la persona, como el primer lunes con las 23 carpetas.', info: 'Deja anotado a quién llamar si algo te supera: el número de Nelly y el de la Dra. Vera.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Lista para tu semana!' : 'Primero lo que pone en riesgo a alguien.'],
      };
    },
    rules: [[BP, 'Prioriza por riesgo para la persona: seguridad, ingresos y salud antes que plazos lejanos.']],
    mirada: {
      ve: 'El criterio con el que empezaste —primero lo que pone en riesgo a una persona— es el mismo con el que vas a sostener una semana sola. En Bienestar, priorizar bien es la forma más concreta de cuidar.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Riesgo para la persona', cuadrantes: ['Lunes', 'Lunes y planifica', 'Esta semana', 'Cuando haya tiempo'], items: [['Informe del comité', .4, .95], ['Represalias', .5, .85], ['Historia de Don Héctor', .45, .6], ['Registro del lactario', .2, .45], ['Campaña en fundos', .7, .55], ['Becas', .4, .15]] },
    },
  },
  {
    id: 'f6', t: '17:30', ch: 'presencial', who: 'nelly', titulo: '¿Te ves en este puesto?', banner: 'assets/esc/carrera.webp', lugar: 'Puerta de Bienestar, con la ceniza de caña cayendo otra vez', show: ['confianza', 'personas'],
    body: (n, F) => {
      const logros = [
        F.has('subsidio_pagado') || F.has('expediente_ordenado') ? 'Don Héctor cobró lo que le debían' : null,
        F.has('acuerdo_escrito') || F.has('retorno_adecuado') ? 'volvió a un puesto donde puede estar bien' : null,
        F.has('lactario_reglas') || F.has('noche_cubierta') ? 'hay un lactario que funciona de noche' : null,
        F.has('medidas_dictadas') ? 'una operaria denunció y fue protegida' : null,
        F.has('informe_campana') || F.has('noche_atendida') ? 'el turno noche tuvo su campaña' : null,
      ].filter(Boolean);
      return `<p>Nelly apaga la luz de la oficina y se queda en la puerta. Cae ceniza de caña, como el primer día. ${logros.length ? 'En dos semanas: ' + logros.join('; ') + '.' : 'Dos semanas, y muchas cosas quedaron a medias.'} Otras siguen abiertas: un informe que llega el lunes, una rodilla que se reevalúa en seis meses, un contrato que vence en enero.</p><p>«Antes de irme de vacaciones quiero saber algo», dice. <mark class="clave">«¿Te ves en este puesto?»</mark></p>`;
    },
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Sí. Me cansa, pero cuando Don Héctor rompió ese papel supe que esto es lo mío.»',
        res: { q: null, fx: { confianza: 4, personas: 2 }, rel: { nelly: 1 }, flags: ['te_ves_si'],
          out: 'Nelly sonríe y te da un abrazo corto, de esos que no se dan en la oficina. «Entonces el lunes te toca sola. Vas a estar bien.» Te vas al paradero con la mochila liviana y la cabeza llena.', kusi: ['celebra', '¡Qué bacán! El lunes empieza tu Semana 3.'] } },
      { id: 'b', label: '«Todavía no sé. Me gusta, pero me llevo los casos a la casa y no sé si eso se aprende.»',
        res: { q: null, fx: { confianza: 3, personas: 1 }, rel: { nelly: 1 }, flags: ['te_ves_dudas'],
          out: 'Nelly asiente. «Esa es la respuesta más honesta que me han dado en años. Se aprende, pero no sola. El lunes, cuando te pese, llámame igual, aunque esté en la playa.»', kusi: ['animo', 'Dudar también es tomárselo en serio.'] } },
      { id: 'c', label: '«Me veo, pero no así: necesitamos ser más de dos para 1,500 personas, y quiero ayudarte a pedirlo.»',
        res: { q: null, fx: { confianza: 4, calidad: 2 }, rel: { nelly: 1 }, flags: ['te_ves_si'],
          out: 'Nelly se ríe fuerte por primera vez en dos semanas. «Eso se lo vamos a decir juntas a la gerente, con tu matriz de casos en la mano.» Te da la llave del archivador.', kusi: ['celebra', '¡Bienestar también se defiende con datos!'] } },
    ],
    mirada: {
      ve: 'Dos semanas en Bienestar Social: un subsidio destrabado, una visita que cambió un caso, un lactario que funciona de noche, una queja recibida con cuidado y un retorno digno. Nada de globos. Y el lunes empieza otra semana, con el informe del comité sobre la mesa y sin Nelly al lado.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['Lunes 1', '23 carpetas'], ['Martes 1', 'El subsidio'], ['Miércoles 1', 'La visita'], ['Jueves 1', 'El lactario'], ['Viernes 1', 'La campaña'], ['Lunes 2', 'La denuncia'], ['Martes 2', 'Las medidas'], ['Miércoles 2', 'El retorno'], ['Jueves 2', 'El lactario abre'], ['Lunes 3', 'El informe del comité']] },
    },
  },
];
