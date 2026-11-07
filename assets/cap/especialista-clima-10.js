// Analista de Clima y Cultura · Capítulo 10 · «Dos semanas» · Semana 2, viernes. Final abierto: continúa en la Semana 3.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales, arts. 6 y 7 (finalidad y proporcionalidad), ya citada en el
//   capítulo 1: los resultados de clima se recopilaron para mejorar el clima, no para otra finalidad.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
// - Ley 27942 y su Reglamento (D.S. 014-2019-MIMP), ya citados en los capítulos 5 y 6: el procedimiento sigue reservado.
//   https://elperuano.pe/noticia/302759-hostigamiento-sexual-que-deben-hacer-las-empresas-para-prevenir-y-atender-estos-casos-en-el-trabajo
// - Atar el bono de los gerentes al puntaje de clima es una decisión de gestión, no una norma: se trata como riesgo de
//   buena práctica (presión sobre los equipos para responder «bien»).

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'AseguraPlus · Oficina central, San Isidro',
  inicio: '08:20', fin: '19:15', cierreHora: '19:00',
  apertura: 'Viernes. Hace diez días hábiles abriste un archivo que se llamaba «Clima_RESULTADOS_NO_COMPARTIR». Hoy el plan de Siniestros va al comité de Gerencia General, la reunión de los lunes ya no tendrá pantalla y en tu escritorio hay una caja de zapatos con 38 tarjetas por responder.', boton: 'Empezar el último día',
  kusi: 'Hoy toca mirar atrás… y prepararte, porque en Cultura siempre llega algo nuevo un viernes por la tarde.',
  lead: 'Confirmaste que el sistema ya no se cuelga, respondiste por escrito las preguntas del área, preparaste a Gonzalo para el comité, recibiste una idea de Gerencia General que puede cambiarlo todo y te sentaste con Sofía a ver tus dos semanas.',
  reflexion: '¿Te ves en este puesto?',
  siguiente: { n: 11, titulo: 'El ranking de los gerentes', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan de acción de Siniestros', j: 'Gonzalo', d: 0, e: 'Comité hoy, 12 m.' },
  { id: 'tarjetas', p: '38 preguntas del área', j: 'Cultura', d: 0, e: 'Por responder' },
  { id: 'pulso', p: 'Pulso de 8 semanas', j: 'Cultura · Pulso Consultores', d: 0, e: 'Por programar' },
  { id: 'caso', p: 'Caso reservado', j: 'Dra. Villavicencio', d: 0, e: 'En curso' },
  { id: 'ranking', p: 'Ranking de clima por gerencia', j: 'Gerencia General', d: 0, e: 'Recién anunciado' },
];

export const FUTURO = {
  pendientes_cerrados: ['Cerraste la semana confirmando que el cambio del sistema funcionó.', 'Gonzalo llevará ese dato al comité.'],
  respuestas_escritas: ['Las 38 preguntas del área tienen respuesta escrita, agrupadas por tema.', 'El área sabe que su pregunta no se perdió.'],
  comite_preparado: ['Gonzalo fue al comité con tres mensajes claros y el plan como suyo.', 'El comité aprobó el plan.'],
  ranking_riesgos: ['Pediste una reunión el lunes para mostrar los riesgos de atar el bono al clima.', 'La Semana 3 empieza con esa conversación.'],
  ranking_aceptado: ['Aceptaste el ranking público y el bono atado al puntaje sin discutir.', 'Los gerentes ya empezaron a pedir a sus equipos que «respondan bien».'],
  balance_honesto: ['Te sentaste con Sofía a mirar tus dos semanas con honestidad.', 'Ella te dijo qué espera de ti en la Semana 3.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  comunicados: { n: 'Siniestros · Comunicados', sub: 'Grupo oficial del área (120)', c: '#1F4E79' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'equipo', t: '08:25', de: 'Sofía', txt: 'Último día de tus dos semanas 🌱 A las 4 me reservas una hora, sin laptop.' },
  { chat: 'lucia', t: '08:50', de: 'Lucía', txt: 'Anoche cerramos a las 7:10. Desde que entré a Siniestros no salía tan temprano un jueves.', si: 'ti_cierre' },
  { chat: 'gonzalo', t: '13:15', de: 'Gonzalo', txt: 'Plan aprobado. El gerente general preguntó quién lo había trabajado. Dije «mi equipo y Cultura».', si: 'comite_preparado' },
  { chat: 'gonzalo', t: '13:15', de: 'Gonzalo', txt: 'Plan aprobado, con observaciones. Ahora quieren rankings. Hablamos el lunes.', no: 'comite_preparado' },
  { chat: 'renzo', t: '17:50', de: 'Renzo', txt: 'Gracias por estas dos semanas. Aprendí más que en un ciclo entero. El lunes llego temprano 💪' },
  { chat: 'gonzalo', t: '18:40', de: 'Gonzalo', txt: '¿Es verdad que el 20 % de mi bono va a depender de la encuesta? Entonces el lunes tenemos que hablar. Temprano.' },
];

export const CORREOS = [
  { t: '08:30', de: 'Mesa de Ayuda TI', para: 'Analista de Clima y Cultura', asunto: 'Proceso de conciliación reprogramado', html: '<p>Confirmamos que desde ayer el proceso de conciliación con reaseguradoras se ejecuta a las 20:00. No se registraron caídas del sistema de siniestros entre las 17:00 y las 19:00.</p>', si: 'ti_cierre' },
  { t: '14:30', de: 'Patricia Olivera · Gerencia General', para: 'Sofía Ledesma; Analista de Clima y Cultura', asunto: 'Siguiente paso: ranking de clima', html: '<p>Felicitaciones por el plan de Siniestros. El comité quedó tan conforme que queremos ir más allá: desde el próximo año publicaremos en la intranet un ranking de clima de las 12 gerencias, y el 20 % del bono anual de cada gerente dependerá de su puntaje.</p><p>Necesito que el lunes a las 9 me presenten cómo lo implementamos.</p><p>Patricia Olivera<br>Gerente General Adjunta</p>' },
];

export const QUIZ = [
  { q: 'Gerencia General quiere atar el bono de los gerentes al puntaje de clima. ¿Cuál es el riesgo principal?', ops: ['Ninguno', 'Que los gerentes presionen a sus equipos para responder «bien» y la encuesta deje de decir la verdad', 'Que suban los costos', 'Que los gerentes se aburran'], ok: 1, por: 'Cuando un indicador se vuelve meta con premio, la gente empieza a cuidar el número en lugar de lo que mide.' },
  { q: 'Las respuestas por escrito a las preguntas del área deben…', ops: ['Ir solo a quienes preguntaron', 'Ir a toda el área, agrupadas por tema y sin nombres', 'Esperar al próximo año', 'Responderse por WhatsApp a cada uno'], ok: 1, por: 'Así nadie queda identificado y todos ven que sus preguntas tuvieron respuesta.' },
  { q: 'Después de dos semanas, lo que más protege el proceso de clima es…', ops: ['Un buen PowerPoint', 'Que la gente vuelva a confiar en que responder sirve y es seguro', 'El ranking', 'El desayuno'], ok: 1, por: 'La confianza es la materia prima de la próxima encuesta.' },
  { q: 'Los datos de la encuesta se recopilaron para mejorar el clima. Usarlos para calcular bonos…', ops: ['Está prohibido siempre', 'Cambia su uso: hay que analizar la finalidad, el anonimato y los efectos antes de decidir', 'No tiene ninguna implicancia', 'Es obligatorio'], ok: 1, por: 'La Ley 29733 pide usar los datos para su finalidad; un cambio de uso se analiza antes, no después.' },
  { q: '¿Qué distingue un plan de clima que funciona?', ops: ['Muchas actividades', 'Pocas acciones con dueño, fecha, indicador y una devolución al equipo', 'Un lema', 'Que lo haga RR.HH. solo'], ok: 1, por: 'Así se pudo cambiar la reunión de los lunes y el horario del sistema en una semana.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'z1', t: '08:40', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del comité', banner: 'assets/foto/llamada.webp', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>El comité es a las 12. Antes de que Gonzalo entre, quieres saber si lo que se prometió ya se nota. ${F.has('ti_cierre') ? 'TI ya te mandó un correo.' : 'Todavía no sabes si TI movió el proceso.'} Haces tres llamadas rápidas.</p>`,
    type: 'calls',
    calls: [['Mesa de Ayuda TI', 'Contesta: el sistema no se cayó', 'Ayer, cero caídas entre las cinco y las siete. Los cierres después de las siete bajaron a la mitad.'], ['Rosa Mamani, supervisora', 'Contesta: lunes listo', 'Ya preparé la pantalla del lunes: solo indicadores del equipo. Y tengo dos casos difíciles para reconocer.'], ['Pulso Consultores', 'Contesta: fecha del pulso', 'Podemos lanzar el pulso de cuatro preguntas en ocho semanas. Necesitamos la fecha confirmada hoy.']],
    prompt: 'Tienes tres buenas noticias. ¿Qué haces con ellas?',
    choices: [
      { id: 'a', label: 'Mandarle a Gonzalo los tres datos en tres líneas para el comité, y confirmar hoy la fecha del pulso en su calendario.',
        res: { q: 'buena', fx: { calidad: 4, confianza: 3 }, rel: { gerente: 1 }, flags: ['pendientes_cerrados'], cartera: { pulso: 'Programado para la semana 8' },
          envia: [['gonzalo', 'Gonzalo, tres datos para el comité: 1) ayer, cero caídas del sistema de 5 a 7 y los cierres tardíos bajaron a la mitad; 2) el lunes la reunión ya es sin nombres en pantalla; 3) el pulso de seguimiento queda en la semana 8, ya está en su calendario. Éxitos.']],
          out: 'Gonzalo responde con un pulgar y luego: «Esto es lo que necesitaba. Datos, no adjetivos».',
          pro: { ok: 'Llegar al comité con resultados tempranos convierte el plan en algo que ya está funcionando.', info: 'Fijar hoy la fecha del pulso evita que se pierda entre otras urgencias.' },
          kusi: ['celebra', '¡Resultados en una semana! Qué bacán.'] } },
      { id: 'b', label: 'Guardar los datos para el informe de cierre del mes.',
        res: { q: 'aceptable', fx: { calidad: 1 },
          out: 'Gonzalo entra al comité sin saber que el cambio del sistema ya funcionó. Presenta el plan como una promesa, no como un avance.',
          pro: { ok: 'Los datos quedan registrados.', risk: 'Una buena noticia que llega tarde no ayuda a sostener el plan.' },
          kusi: ['pensando', '¿Y si Gonzalo los necesitaba hoy?'] } },
    ],
    mirada: {
      ve: 'Un plan de clima gana credibilidad cuando algo cambia rápido. Mover un proceso de sistema de hora no es glamoroso, pero que el equipo cierre antes un jueves dice más que cualquier lema.',
      visual: { tipo: 'cambio', titulo: 'Una semana después', pares: [['Sistema caído de 5 a 7', 'Cero caídas'], ['Nombres en la pantalla de los lunes', 'Indicadores del equipo'], ['«¿Para qué respondemos?»', '41 preguntas en tarjetas']] },
    },
  },
  {
    id: 'z2', t: '10:00', ch: 'documento', who: null, titulo: 'Las respuestas para el área', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio', show: ['personas', 'calidad', 'etica'],
    body: () => `<p>Extiendes las 38 tarjetas sobre la mesa y las agrupas: plan, sistema, pulso, represalias, sueldo… y tres que mencionan a personas. Las vas a responder en un solo documento, para toda el área. <mark class="clave">Ninguna pregunta se pierde, ninguna persona queda expuesta</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas del documento de respuestas.', boton: 'Guardar las respuestas',
    bloques: [
      { id: 'forma', t: 'Cómo lo organizas', n: 2, ops: [
        { id: 'f1', t: 'Por temas, con la cantidad de preguntas de cada uno.', ok: true, por: 'Cada persona encuentra la suya sin que se sepa cuál es.' },
        { id: 'f2', t: 'Copiando cada tarjeta textual, con su letra escaneada.', ok: false, por: 'La letra identifica a quien escribió.' },
        { id: 'f3', t: 'Una sección «lo que todavía no sabemos», con fecha de respuesta.', ok: true, por: 'Decir «no sé aún» con fecha genera confianza.' },
      ] },
      { id: 'temas', t: 'Qué respondes', n: 2, ops: [
        { id: 't1', t: 'Sueldo: el ítem salió igual al promedio de la empresa; no está en este plan, pero se trasladó la consulta a Compensaciones.', ok: true, por: 'Honesto: no prometes, pero no ignoras.' },
        { id: 't2', t: 'Represalias: el compromiso del gerente, por escrito, y a quién acudir si alguien las siente.', ok: true, por: 'Lo dicho en público queda en papel.' },
        { id: 't3', t: 'Represalias: «En AseguraPlus no existen represalias».', ok: false, por: 'Una frase absoluta que nadie cree.' },
      ] },
      { id: 'pers', t: 'Las tres tarjetas sobre personas', n: 1, ops: [
        { id: 'p1', t: 'No se responden en el documento: se derivan en reserva a quien corresponde.', ok: true, por: 'Lo reservado sigue reservado.' },
        { id: 'p2', t: 'Se responden con un «estamos investigando».', ok: false, por: 'Confirma ante toda el área que hay un caso.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0, etica: q === 'riesgosa' ? -3 : 2 },
        flags: q === 'riesgosa' ? [] : ['respuestas_escritas'], cartera: { tarjetas: q === 'buena' ? '38 preguntas respondidas por tema' : 'Respuestas con riesgos' },
        envia: q === 'riesgosa' ? undefined : [['comunicados', 'Buenas tardes, equipo. Les compartimos en la carpeta del área las respuestas a las 38 preguntas que dejaron en las tarjetas, agrupadas por tema. Las que todavía no tienen respuesta tienen fecha. Gracias por preguntar.']],
        out: q === 'buena' ? 'El documento tiene dos páginas. Sofía lo lee y solo cambia una coma. A las 3 se publica en la carpeta del área.' : 'El documento responde, pero algo en él puede identificar a alguien o confirmar lo que no se debe.',
        pro: { ok: 'Responder por escrito, por temas y con fechas, cierra la devolución y prepara la confianza para el pulso.', risk: 'Las respuestas absolutas o las que confirman un caso dañan más que el silencio.', info: 'La sección «lo que todavía no sabemos» suele ser la más leída.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Ninguna pregunta en la caja. ¡Qué divino!' : 'Revisa qué deja ver cada respuesta.'],
      };
    },
    rules: [[LEY, 'Ley 27942 y su Reglamento: los hechos del procedimiento son reservados.'], [BP, 'Las preguntas se responden a todos, agrupadas y sin identificar a nadie.']],
    mirada: {
      ve: 'Responder por escrito lo que quedó pendiente es el detalle que casi nadie hace y el que más se recuerda. Es la prueba de que la caja de tarjetas no era decorativa.',
      visual: { tipo: 'embudo', titulo: 'Las 38 tarjetas', niveles: [['Tarjetas', 38], ['Respondidas en el documento', 35], ['Derivadas en reserva', 3]] },
    },
  },
  {
    id: 'z3', t: '11:20', ch: 'whatsapp', who: 'gerente', titulo: 'Antes del comité', banner: 'assets/3d/scenes/corporativo.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Gonzalo te escribe desde el ascensor del piso 11: «Entro en 40 minutos. ${F.has('gonzalo_reconoce') ? 'Ayer en el auditorio aprendí algo.' : 'No sé bien cómo empezar.'} <mark class="clave">Dame tres ideas para no perderme</mark>».</p>`,
    type: 'compose', enviaA: 'gonzalo', para: 'Para: Gonzalo Ferreyra · Gerente de Siniestros', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'uno', t: 'Idea 1', ops: [
        { id: 'u1', t: 'Empiece por lo que escuchó del equipo, como ayer: el 42 % y la reunión de los lunes.', ok: true, por: 'El comité verá a un gerente que asume.' },
        { id: 'u2', t: 'Empiece por el 18 % de casos cerrados de más.', ok: false, por: 'Suena a defensa otra vez.' },
      ] },
      { id: 'dos', t: 'Idea 2', ops: [
        { id: 'd1', t: 'Muestre que ya hay resultados: cero caídas y cierres tardíos a la mitad.', ok: true, por: 'Datos, no adjetivos.' },
        { id: 'd2', t: 'Diga que Cultura armó todo.', ok: false, por: 'Le quita propiedad del plan.' },
      ] },
      { id: 'tres', t: 'Idea 3', ops: [
        { id: 't1', t: 'Cierre con la fecha del pulso: «En ocho semanas les traigo el número».', ok: true, por: 'Se compromete con un resultado medible.' },
        { id: 't2', t: 'Cierre con el desayuno mensual.', ok: false, por: 'El complemento no debe parecer lo principal.' },
      ] },
    ],
    res: sel => {
      const buenas = ['u1', 'd1', 't1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, calidad: q === 'buena' ? 2 : 0 }, rel: { gerente: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['comite_preparado'] : [],
        out: q === 'buena' ? 'Gonzalo responde: «Escuchar, mostrar, comprometerse. Ya». A la una, el plan está aprobado sin cambios.' : 'Gonzalo entra con ideas sueltas. El plan se aprueba, con observaciones.',
        pro: { ok: 'Tres ideas cortas, en el orden de la devolución, le dan al gerente un hilo para sostener el plan frente a sus pares.', risk: 'Si el gerente presenta el plan como «de Cultura», nadie lo sostendrá cuando Cultura no mire.', info: 'Que el gerente presente el plan es el mejor indicador de que lo siente suyo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Gonzalo presentando con datos! Quién lo diría.' : 'Tres ideas, en orden, valen oro.'],
      };
    },
    mirada: {
      ve: 'Dos semanas atrás, Gonzalo pedía la base para saber quién había hablado. Hoy presenta un plan que empieza con «escuché». No cambió su carácter: cambió la forma en que se le acompañó.',
      visual: { tipo: 'linea', titulo: 'Gonzalo en dos semanas', hitos: [['Lunes 1', 'Pide la base completa'], ['Miércoles 1', '«La encuesta está mal hecha»'], ['Miércoles 2', 'Acepta cambiar los lunes'], ['Jueves 2', '«Los escuché»'], ['Viernes 2', 'Presenta el plan como suyo']] },
    },
  },
  {
    id: 'z4', t: '14:40', ch: 'correo', who: null, titulo: 'El ranking', banner: 'assets/foto2/tension.webp', show: ['etica', 'confianza', 'cumplimiento'],
    mail: { from: 'Patricia Olivera · Gerencia General', to: 'Sofía Ledesma; Analista de Clima y Cultura', asunto: 'Siguiente paso: ranking de clima' },
    body: () => `<p>Felicitaciones por el plan de Siniestros. Desde el próximo año publicaremos un ranking de clima de las 12 gerencias en la intranet, y <mark class="clave">el 20 % del bono de cada gerente dependerá de su puntaje</mark>.</p><p>El lunes a las 9 me presentan cómo lo implementamos.</p><p>Patricia Olivera</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder agradeciendo la confianza, confirmando la reunión y adelantando que llevarán los beneficios y también los riesgos de atar el bono al puntaje, con alternativas.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3, calidad: 2 }, rel: { sofia: 1 }, flags: ['ranking_riesgos'], cartera: { ranking: 'Reunión el lunes 9 a. m.: beneficios, riesgos y alternativas' },
          responde: 'Patricia: gracias por la confianza en el proceso. El lunes a las 9 estaremos con usted. Llevaremos cómo podría implementarse y también los riesgos que vemos: que los gerentes presionen a sus equipos para responder «bien», que un ranking público genere vergüenza en vez de cambio y que los datos se usen para una finalidad distinta a la que se informó al responder. Llevaremos alternativas, como medir el avance del plan de acción en lugar del puntaje.',
          out: 'Patricia responde en dos minutos: «Me interesa escuchar los riesgos. Lunes 9». Sofía te escribe: «Así se responde a una gerente general».',
          pro: { ok: 'No dices que no ni que sí: abres una conversación con argumentos y alternativas.', risk: 'Patricia puede leer los riesgos como resistencia.', info: 'Cuando un indicador se vuelve meta con premio, deja de medir bien: es un riesgo conocido en la gestión.' },
          kusi: ['animo', 'Ni sí ni no: con argumentos.'] } },
      { id: 'b', label: 'Responder que perfecto, que el lunes llevan el cronograma de implementación.',
        res: { q: 'riesgosa', fx: { etica: -3, calidad: -3 }, flags: ['ranking_aceptado'], cartera: { ranking: 'Aceptado sin discusión' },
          responde: 'Patricia: perfecto. El lunes le llevamos el cronograma de implementación.',
          out: 'A las 6 de la tarde, dos gerentes ya escribieron a Cultura preguntando «cómo pueden mejorar el puntaje». Uno sugiere que sus equipos «respondan pensando en la empresa».',
          pro: { ok: 'Gerencia General queda contenta.', risk: 'Atar el bono al puntaje sin discutirlo pone en riesgo la sinceridad de toda la encuesta.' },
          kusi: ['preocupado', '¿Y la próxima encuesta, quién dirá la verdad?'] } },
      { id: 'c', label: 'Responder que eso va contra la Ley de Protección de Datos y que no se puede hacer.',
        res: { q: 'aceptable', fx: { etica: 1, confianza: -3 }, rel: { sofia: -1 },
          responde: 'Patricia: lo que propone va contra la Ley 29733 y no se puede hacer.',
          out: 'Patricia responde: «Pídanle a Legal que me lo confirme». Sofía te llama: «No sabemos si es ilegal; sabemos que es riesgoso. No es lo mismo».',
          pro: { ok: 'Ves un riesgo real con los datos.', risk: 'Afirmar una ilegalidad que no has verificado te quita credibilidad para lo que sí es cierto.' },
          kusi: ['pensando', 'Riesgoso no es lo mismo que ilegal.'] } },
    ],
    rules: [[LEY, 'Ley 29733, art. 6: los datos se usan para la finalidad con que se recopilaron; un cambio de uso se analiza antes.'], [BP, 'Atar premios al puntaje de clima puede hacer que la encuesta deje de decir la verdad.']],
    mirada: {
      ve: 'Que Gerencia General quiera más clima es una buena noticia con un riesgo dentro. Si el puntaje decide el bono, cada gerente tendrá un motivo para pedir a su equipo que responda «bien». El trabajo de Cultura es mostrarlo a tiempo, sin decir solo «no».',
      visual: { tipo: 'balanza', a: { t: 'Bono atado al puntaje', items: ['Los gerentes prestan atención', 'Un número simple para el comité'] }, b: { t: 'Lo que puede pasar', items: ['Presión para responder «bien»', 'Ranking público que avergüenza', 'Datos usados para otra finalidad', 'La encuesta deja de decir la verdad'] } },
    },
  },
  {
    id: 'z5', t: '16:05', ch: 'presencial', who: 'sofia', titulo: 'Una hora sin laptop', banner: 'assets/foto/reunion-jefa.webp', lugar: 'La oficina de Sofía', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Sofía cerró la puerta y puso dos tazas de manzanilla. Sin laptop, como prometió. ${F.has('caso_en_canal') ? '«Primero: lo que hiciste el viernes pasado con lo de Lucía fue lo más importante de estas dos semanas, y nadie lo va a saber nunca.»' : '«Primero: hubo cosas de estas dos semanas que nadie va a saber nunca, y que pesan.»'}</p><p>«Ahora pregúntame tú. <mark class="clave">Lo que quieras</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Sofía.',
    opts: [
      { id: 'bien', label: '¿Qué hice bien?', info: '«No dejaste que los datos dijeran más de lo que dicen. Y le dijiste que no a un gerente sin cerrarle la puerta. Eso a mí me tomó años.»' },
      { id: 'mejor', label: '¿Qué tendría que hacer distinto?', info: '«A veces cargas sola cosas que son del equipo. Lo de las tarjetas, lo de las diapositivas… podías pedirme ayuda antes. Y duerme: se te nota.»' },
      { id: 'ranking', label: '¿Qué piensas del ranking?', info: '«Que es la prueba de fuego de todo lo que hicimos. Si el puntaje se vuelve premio, en un año todas las áreas van a sacar 85 % y nadie va a creerle a la encuesta.»' },
      { id: 'caso', label: '¿Cómo va lo de Daniela?', info: '«Eso no te lo puedo contar, y tú lo sabes. Lo único que te digo es que se está haciendo bien, en plazo. Gracias por no preguntarle a nadie más.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, personas: picks.includes('mejor') ? 2 : 1 }, rel: { sofia: 1 }, flags: ['balance_honesto'],
      out: 'Hablan casi una hora. Afuera oscurece temprano y la garúa empaña la ventana. Al final, Sofía saca una carpeta de su cajón: «El lunes te necesito para lo del ranking. Y no solo para eso».',
      kusi: ['feliz', 'Mirar atrás con alguien que te ve crecer… ¡qué bacán!'],
    }),
    mirada: {
      ve: 'Un balance honesto tiene dos partes: lo que salió bien y lo que hay que mejorar. Pedir la segunda es lo que hace que la primera tenga valor.',
      visual: { tipo: 'flujo', titulo: 'Tus dos semanas', pasos: ['Leer los datos', 'Leer los comentarios', 'Presentar al gerente', 'Escuchar al grupo', 'Proteger un caso', 'Diseñar el plan', 'Devolver al equipo'] },
    },
  },
  {
    id: 'z6', t: '17:15', ch: 'presencial', who: 'sofia', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/celebra-laptop.webp', lugar: 'La oficina de Sofía', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Antes de que te levantes, Sofía te hace la pregunta que estaba esperando. «Este trabajo es raro: pasas días con un Excel y, de pronto, alguien te cuenta lo peor que le ha pasado en una sala sin ventana. ${F.has('lunes_cambia') ? 'Y a veces, como esta semana, algo cambia de verdad.' : 'Y a veces, nada cambia, por más que hagas.'}</p><p><mark class="clave">¿Te ves en este puesto?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: '«Sí. Me gusta que los datos sirvan para cuidar a la gente, aunque a veces pese.»',
        res: { q: null, fx: { confianza: 3 }, rel: { sofia: 1 },
          out: 'Sofía sonríe. «Eso es lo que buscaba. Lo de que pese no se quita, pero se aprende a cargarlo en equipo.»',
          kusi: ['celebra', '¡Datos que cuidan! Ese es tu lugar.'] } },
      { id: 'b', label: '«Creo que sí, pero me cuesta guardar cosas que sé. Todavía no sé si aguanto eso.»',
        res: { q: null, fx: { confianza: 2, personas: 1 }, rel: { sofia: 1 },
          out: 'Sofía asiente despacio. «Es la parte más difícil, y la más honesta de admitir. Hay gente que lo aprende y gente que prefiere otro rol. Las dos están bien.»',
          kusi: ['pensando', 'Saber lo que te cuesta también es saber dónde estás.'] } },
      { id: 'c', label: '«No estoy segura. Me encantan los datos, pero las conversaciones difíciles me dejan agotada.»',
        res: { q: null, fx: { confianza: 1 }, rel: { sofia: 0 },
          out: 'Sofía no se sorprende. «Hay puestos de People Analytics que son más datos que conversaciones. Piénsalo. Igual, el lunes te necesito.»',
          kusi: ['curioso', 'Dos semanas también sirven para saber qué no quieres.'] } },
    ],
    mirada: {
      ve: 'Analizar clima y cultura mezcla dos oficios: el de quien lee datos con rigor y el de quien escucha cosas difíciles sin romperse ni romper la confianza. No hay una respuesta correcta a «¿te ves aquí?»: hay una respuesta honesta.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pesa', items: ['Guardar lo que sabes', 'Gerentes a la defensiva', 'Conversaciones que duelen'] }, b: { t: 'Lo que vale', items: ['Una reunión de los lunes sin pantalla', 'Un caso que llegó a tiempo', '41 preguntas en tarjetas'] } },
    },
  },
  {
    id: 'z7', t: '18:45', ch: 'sistema', who: null, titulo: 'La invitación del lunes', banner: 'assets/esc/alarma.webp', lugar: 'Tu escritorio', show: ['tiempo', 'confianza'],
    body: (n, F) => `<p>Estás apagando la laptop cuando entra una notificación del calendario: «Lunes 9:00 · Ranking de clima y bono de gerentes · Patricia Olivera, Sofía Ledesma, tú». ${F.has('ranking_aceptado') ? 'Ya hay tres gerentes copiados que no estaban antes.' : ''} Un minuto después, Gonzalo: «¿Es verdad que el 20 % de mi bono va a depender de la encuesta? <mark class="clave">Entonces el lunes hablamos. Temprano</mark>».</p><p>Es viernes, son casi las siete y llevas dos semanas sin dormir bien.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Anotar en una hoja tres ideas para el lunes, responderle a Gonzalo que el lunes a las 8 lo atiendes, y apagar el celular del trabajo hasta el domingo en la noche.',
        res: { q: 'buena', fx: { tiempo: 2, confianza: 2, personas: 2 },
          envia: [['gonzalo', 'Gonzalo, lo vemos el lunes a las 8, antes de la reunión de las 9. Buen fin de semana.']],
          out: 'Escribes en un post-it: «Riesgo de presión · finalidad de los datos · medir el plan, no el puntaje». Lo pegas en la pantalla. Bajas por las escaleras, compras un picarón en la esquina y te vas a casa caminando bajo la garúa.',
          pro: { ok: 'Dejas el lunes encaminado sin regalarle el fin de semana al trabajo.', info: 'Descansar también es parte de sostener un puesto que pesa.' },
          kusi: ['feliz', 'Lunes encaminado, fin de semana tuyo. ¡Dale!'] } },
      { id: 'b', label: 'Quedarte hasta las nueve armando la presentación del lunes completa.',
        res: { q: 'aceptable', fx: { tiempo: -3, calidad: 2, personas: -1 },
          out: 'A las 9:20 tienes doce diapositivas y el piso 9 vacío. El vigilante te pregunta si estás bien. El lunes vas a llegar cansada a la reunión más difícil de la semana.',
          pro: { ok: 'Llegas preparada.', risk: 'Llevas dos semanas sin dormir bien; el lunes necesitas cabeza fresca más que diapositivas.' },
          kusi: ['preocupado', 'Tu energía también es un recurso…'] } },
    ],
    mirada: {
      ve: 'Las dos semanas terminan con el trabajo encaminado, no terminado: un plan que empieza el lunes, un caso que sigue en reserva, un pulso en ocho semanas y una idea de Gerencia General que puede convertir la encuesta en algo que nadie responda con sinceridad. Así es este puesto: siempre llega algo nuevo un viernes.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Lunes 8:00', 'Gonzalo y su bono'], ['Lunes 9:00', 'Patricia y el ranking'], ['Lunes', 'La reunión sin pantalla'], ['Semana 8', 'El pulso de Siniestros']] },
    },
  },
];
