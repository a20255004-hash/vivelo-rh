// Especialista en RR.HH. de entidad pública · Capítulo 3 · «La certificación» · Semana 1, miércoles.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Normas citadas:
// - D.Leg. 1440, Sistema Nacional de Presupuesto Público, art. 41: la certificación del crédito presupuestario garantiza que
//   se cuenta con el crédito para comprometer un gasto; se emite a pedido del área que ordena el gasto y se adjunta al expediente.
//   https://www.lamolina.edu.pe/eventos/planeamiento/2025/OP-002-2025.pdf (resolución que cita el art. 41.1)
//   https://mef.gob.pe/contenidos/presu_publ/capacita/2023/24012023_ORIENTACIONES_CERTIFICACION_PRESUPUESTARIA_PREVISIONES_4TO_TRIM_2022..pdf
// - Ley 26772, modificada por la Ley 27270 (requisitos no discriminatorios), ya citada en el capítulo 2.
// - D.Leg. 1057, art. 1 (principios de méritos y capacidad e igualdad de oportunidades; de ahí el concurso público), ya citado en el capítulo 1.

export const CAP = {
  n: 3, titulo: 'La certificación', dia: 'Semana 1, miércoles', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '08:00', fin: '17:45', cierreHora: '17:30',
  apertura: 'Miércoles. Llovió toda la noche y el jirón Amalia Puga amaneció con charcos. En el pasillo de la municipalidad ya hay cola de vecinos para pagar arbitrios y el olor a humitas de la señora de la esquina se mete hasta la ORH.', boton: 'Ir a Presupuesto',
  kusi: 'En el Estado no se puede gastar lo que no está certificado. Ni con la mejor intención.',
  lead: 'Armaste el cronograma del concurso, conseguiste la certificación presupuestal, respondiste al gerente municipal que quería tres plazas más y detectaste un perfil hecho a la medida de alguien.',
  reflexion: '¿Por qué crees que el Estado exige tener el dinero asegurado antes de convocar, y no después?',
  siguiente: { n: 4, titulo: 'La recomendación', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'concurso', p: 'Concurso CAS: 12 plazas', j: 'Marisol · ORH', d: 0, e: 'Publicación el jueves de la próxima semana' },
  { id: 'presupuesto', p: 'Certificación presupuestal', j: 'Planeamiento y Presupuesto', d: 0, e: 'En trámite' },
  { id: 'cronograma', p: 'Cronograma del concurso', j: 'ORH', d: 0, e: 'Por armar' },
  { id: 'perfiles', p: 'Perfiles de puesto de las áreas', j: 'Gerencias municipales', d: 0, e: 'Falta Desarrollo Urbano' },
  { id: 'extra', p: 'Tres plazas más de serenazgo', j: 'Gerencia Municipal', d: 0, e: 'Pedido nuevo' },
];

export const FUTURO = {
  plazas_12: ['Convocaste solo las 12 plazas certificadas y dejaste las 3 de serenazgo para un segundo concurso.', 'El gerente municipal te lo agradecerá cuando llegue la auditora, en el capítulo 7.'],
  plazas_15_sin_cert: ['Aceptaste incluir 3 plazas sin certificación presupuestal, «para regularizar».', 'La auditora lo encontrará en el capítulo 7.'],
  concurso_retrasado: ['Propusiste esperar la certificación de las 15 plazas.', 'La publicación se aprieta y el cronograma te pesará en el capítulo 9.'],
  perfil_medida_visto: ['Detectaste que el perfil del ingeniero estaba hecho a la medida de alguien.', 'Sabrás a la medida de quién en el capítulo 6.'],
  perfil_medida_pasado: ['El perfil del ingeniero pasó con un requisito hecho a la medida.', 'Te pesará cuando aparezca el pariente, en el capítulo 6.'],
  terrones_explicado: ['Le explicaste al ingeniero Terrones por qué cambiaba su perfil, con respeto.', 'Lo recordará cuando le toque firmar su declaración en el capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  liliana: { n: 'Liliana Sánchez', sub: 'Jefa de Planeamiento y Presupuesto', c: '#7A3E9D' },
  terrones: { n: 'Ing. Lucio Terrones', sub: 'Gerente de Desarrollo Urbano', c: '#8C5A16' },
  regidor: { n: 'Regidor Manuel Tello', sub: 'Regidor municipal', who: 'regidor' },
};

export const WSP = [
  { chat: 'liliana', t: '08:05', de: 'Liliana', txt: 'Hola, ¿puedes bajar a Presupuesto a las 9 y media? Tengo lo de tus plazas. Trae café si pasas por la máquina 😅' },
  { chat: 'grupo', t: '10:40', de: 'Don Segundo', txt: 'Llegó el perfil de Desarrollo Urbano. Lo dejó el chofer del ingeniero, sin cargo de recepción. Lo sellé igual.' },
  { chat: 'marisol', t: '12:15', de: 'Marisol', txt: 'El gerente me contó lo de las 3 plazas. Bien que lo hayas puesto por escrito.', si: 'plazas_12' },
  { chat: 'marisol', t: '12:15', de: 'Marisol', txt: '¿Le dijiste al gerente que sí a las 3 plazas sin certificación? Ven a mi oficina, por favor.', si: 'plazas_15_sin_cert' },
  { chat: 'regidor', t: '16:50', de: 'Regidor Tello', txt: 'Señorita, mañana paso por la ORH un momentito. Tengo unos nombres que le pueden servir. Muy buenos chicos.' },
];

export const CORREOS = [
  { t: '08:15', de: 'Marisol Chávez', para: 'Especialista de la ORH', asunto: 'Cronograma', html: '<p>Necesito el cronograma del CAS 005-2026 hoy, para incluirlo en las bases. La publicación es el jueves de la próxima semana. Ojo: después de publicar, todo lo que pongamos ahí se cumple al día.</p><p>Marisol</p>' },
  { t: '09:00', de: 'Gerencia Municipal', para: 'ORH', asunto: 'Inclusión de plazas: Plan de Seguridad de Fiestas de Fin de Año', html: '<p>Por disposición del despacho de Alcaldía, se solicita incluir 3 plazas adicionales de sereno en la convocatoria en curso, para atender el Plan de Seguridad de Fiestas de Fin de Año.</p><p>Lic. Óscar Zegarra · Gerente Municipal</p>' },
];

export const QUIZ = [
  { q: '¿Para qué sirve la certificación del crédito presupuestario?', ops: ['Para pagar el sueldo del mes', 'Para garantizar que existe el crédito antes de comprometer el gasto', 'Para aprobar las bases', 'Para publicar en Talento Perú'], ok: 1, por: 'El art. 41 del D.Leg. 1440 la define como la garantía de que hay crédito presupuestario disponible para el gasto.' },
  { q: 'El gerente pide sumar 3 plazas que no tienen certificación. ¿Qué es lo correcto?', ops: ['Sumarlas y regularizar después', 'Convocar solo lo certificado y tramitar las otras plazas con su propia certificación', 'Publicarlas sin sueldo', 'Pedírselas al alcalde por WhatsApp'], ok: 1, por: 'Sin certificación no se puede convocar el gasto. Las otras plazas pueden ir en otra convocatoria.' },
  { q: 'Un perfil pide «experiencia en obras de esta misma municipalidad». ¿Qué problema tiene?', ops: ['Ninguno', 'Reduce el concurso a quienes ya trabajaron ahí: parece hecho a la medida', 'Es muy corto', 'Le falta la foto'], ok: 1, por: 'Lo que se mide es la experiencia en el tipo de obra, no en una entidad concreta.' },
  { q: '¿Qué debe tener un cronograma de concurso?', ops: ['Solo la fecha de publicación', 'Fechas de cada etapa, incluidos resultados de cada evaluación', 'Las fechas que acomoden al comité después', 'Nada: se arma sobre la marcha'], ok: 1, por: 'Una vez publicado, el cronograma se cumple; cada etapa necesita su fecha.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:30', ch: 'documento', who: null, titulo: 'El cronograma', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio, con la chompa todavía puesta', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>Abres un calendario en Excel. La publicación es el jueves de la próxima semana. Don Segundo te recuerda que el feriado de diciembre y la semana de la Feria de Fin de Año «siempre lo atrasan todo».</p><p><mark class="clave">Arma el cronograma pieza por pieza</mark>. Lo que publiques, se cumple.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada etapa del cronograma.', boton: 'Guardar el cronograma',
    bloques: [
      { id: 'pub', t: 'Publicación y postulación', n: 2, ops: [
        { id: 'p1', t: 'Difusión en Talento Perú y en el portal institucional desde la fecha de publicación.', ok: true, por: 'Es lo que permite que cualquiera postule.' },
        { id: 'p2', t: 'Postulación con fecha y hora de cierre exactas, por mesa de partes y por correo.', ok: true, por: 'Una hora de cierre clara evita discusiones.' },
        { id: 'p3', t: 'Postulación «hasta cubrir las vacantes».', ok: false, por: 'Sin fecha fija, nadie sabe cuándo se cerró ni por qué.' },
      ] },
      { id: 'eval', t: 'Evaluaciones', n: 2, ops: [
        { id: 'e1', t: 'Evaluación curricular con publicación de resultados en fecha fija.', ok: true },
        { id: 'e2', t: 'Entrevista personal con fecha, lugar y lista de citados publicados antes.', ok: true, por: 'Cada postulante debe saber cuándo y dónde.' },
        { id: 'e3', t: 'Entrevista «según disponibilidad del comité».', ok: false, por: 'Un cronograma que depende del comité se mueve a gusto de alguien.' },
      ] },
      { id: 'fin', t: 'Cierre', n: 2, ops: [
        { id: 'f1', t: 'Publicación de resultados finales con bonificaciones aplicadas.', ok: true },
        { id: 'f2', t: 'Suscripción del contrato en fecha fija, con un plazo para el siguiente en el orden de mérito si el ganador no firma.', ok: true, por: 'Así la plaza no queda vacía ni se cubre «a dedo».' },
        { id: 'f3', t: 'Inicio de labores el 2 de enero, pase lo que pase.', ok: false, por: 'Una fecha sin colchón empuja a saltarse etapas si algo se atrasa.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : 1, cumplimiento: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? ['cronograma_flojo'] : ['cronograma_firme'], cartera: { cronograma: q === 'riesgosa' ? 'Cronograma con etapas sin fecha' : 'Cronograma con fechas para cada etapa' },
        out: q === 'buena' ? 'Tu cronograma cabe en una hoja: cada etapa tiene fecha y lugar. Don Segundo lo imprime en Logística y lo pega con cinta en la pared.' : q === 'aceptable' ? 'El cronograma funciona, aunque una etapa queda a criterio de alguien.' : 'Tu cronograma deja varias etapas en el aire. Si alguien quiere mover las fechas a su favor, podrá hacerlo.',
        pro: { ok: 'Un cronograma con fechas fijas protege al concurso de quien quiera acomodarlo.', risk: 'Las frases como «según disponibilidad» son una puerta abierta.', info: 'Deja un día de colchón antes de cada publicación de resultados.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Fechas claras, menos sospechas.' : 'Cada etapa necesita su fecha.'],
      };
    },
    rules: [[BP, 'Una vez publicado, el cronograma se cumple. Cada etapa debe tener su fecha.']],
    mirada: {
      ve: 'El cronograma no es un trámite: es una promesa pública. Los postulantes organizan su vida alrededor de esas fechas, y cualquier cambio sin explicación alimenta la sospecha.',
      visual: { tipo: 'linea', titulo: 'CAS 005-2026', hitos: [['Jueves, semana 2', 'Publicación'], ['Postulación', 'Cierre con hora exacta'], ['Curricular', 'Resultados en fecha fija'], ['Entrevista', 'Citados publicados'], ['Final', 'Resultados y contrato']] },
    },
  },
  {
    id: 'c2', t: '09:35', ch: 'presencial', who: null, titulo: 'La oficina de Presupuesto', banner: 'assets/foto/cafe.webp', lugar: 'Planeamiento y Presupuesto, primer piso', show: ['tiempo', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Liliana Sánchez, jefa de Presupuesto, trabaja con dos pantallas y un rosario colgado del monitor. Lleva 22 años en la municipalidad y ha visto pasar a seis alcaldes.</p><p>${F.has('presupuesto_primero') ? '«Como me lo pediste el lunes, adelanté lo tuyo. <mark class="clave">Tus 12 plazas tienen certificación</mark>: aquí está la nota, con número y firma.»' : '«Recién ayer me llegó tu pedido. Certificar 12 plazas me toma cinco días hábiles. <mark class="clave">No llegas a publicar el jueves</mark>, salvo que me ayudes con todo completo hoy.»'} Le das el café de la máquina. Ella sonríe por primera vez.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Preguntarle qué necesita exactamente para que la certificación no se trabe y dejarle todo en un solo correo.',
        res: { q: 'buena', fx: { tiempo: 3, confianza: 3, cumplimiento: 2 }, flags: ['liliana_aliada'], cartera: { presupuesto: 'Certificación de 12 plazas en mano o en curso con todo completo' },
          out: 'Liliana te dicta lo que siempre falta: meta presupuestal, monto mensual por plaza y meses del contrato. «Si todos me trajeran esto, yo certificaría en dos días.»',
          pro: { ok: 'Entender cómo trabaja otra oficina acelera más que cualquier presión.', info: 'Guarda ese correo como plantilla para el próximo concurso.' },
          kusi: ['celebra', '¡Hiciste una aliada en Presupuesto!'] } },
      { id: 'b', label: 'Pedirle que lo priorice porque el alcalde quiere el concurso publicado el jueves.',
        res: { q: 'aceptable', fx: { tiempo: 1, confianza: -2 }, cartera: { presupuesto: 'Certificación en cola' },
          out: 'Liliana deja de sonreír. «Todos vienen con el alcalde, hija. Ponte en la cola.» Igual te recibe el documento.',
          pro: { ok: 'Dejas clara la urgencia.', risk: 'Usar el nombre del alcalde con otras oficinas desgasta tu relación con ellas.' },
          kusi: ['pensando', 'El nombre del alcalde no acelera nada.'] } },
    ],
    rules: [[LEY, 'D.Leg. 1440, art. 41: la certificación garantiza que existe crédito presupuestario disponible para comprometer el gasto.']],
    mirada: {
      ve: 'La ORH no puede convocar sola: necesita que Presupuesto diga que hay dinero. Conocer a la gente de esa oficina y lo que le hace falta para hacer su trabajo es parte del oficio.',
      normas: [{ ley: 'D.Leg. 1440, Decreto Legislativo del Sistema Nacional de Presupuesto Público, art. 41', dice: 'La certificación del crédito presupuestario garantiza que se cuenta con el crédito disponible para comprometer un gasto. Se emite a pedido del área que lo ordena y se adjunta al expediente.', practica: 'Sin la nota de certificación en el expediente, el concurso no debería convocarse.' }],
    },
  },
  {
    id: 'c3', t: '11:00', ch: 'presencial', who: null, titulo: 'Tres plazas más', banner: 'assets/3d/scenes/municipalidad.webp', lugar: 'Gerencia Municipal, segundo piso', show: ['cumplimiento', 'etica', 'confianza'],
    body: (n, F) => `<p>El licenciado Óscar Zegarra, gerente municipal, es de Chota, fue profesor de secundaria y todavía corrige la ortografía de los informes con lapicero rojo. ${F.has('residencia_quitada') ? 'Lo primero que te dice: «¿Por qué sacaron lo de residir en el distrito? Eso me lo van a sacar en cara en el concejo».' : 'Tiene tu borrador de bases sobre el escritorio.'}</p><p>«Lo de las tres plazas de serenazgo no es capricho. En diciembre la ciudad se llena y no tengo gente para la noche. <mark class="clave">Métalas en este concurso y la certificación la regularizamos</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Convocar ahora las 12 plazas certificadas y preparar un segundo concurso para las 3 de serenazgo apenas tengan certificación.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: -1 }, flags: ['plazas_12'], cartera: { extra: 'Segundo concurso para 3 serenos, con su certificación', concurso: 'CAS 005-2026: 12 plazas certificadas' },
          out: 'El gerente se queda callado un rato. «¿Y en cuánto sale el segundo?» Le das una fecha realista: tres semanas. Lo anota con el lapicero rojo. No está feliz, pero firma el memorando a Presupuesto.',
          pro: { ok: 'Cuidas el concurso y le das una salida concreta a su necesidad.', risk: 'Diciembre llega antes que el segundo concurso.', info: 'Pregunta si hay serenos con contrato vigente que puedan reforzar turnos mientras tanto.' },
          kusi: ['animo', 'Un no con una salida concreta.'] } },
      { id: 'b', label: 'Incluir las 15 plazas: la necesidad es real y Presupuesto puede certificar antes de que se firmen los contratos.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -3, confianza: 3 }, flags: ['plazas_15_sin_cert'], cartera: { extra: 'Incluidas sin certificación', concurso: 'CAS 005-2026: 15 plazas, 3 sin certificación' },
          out: 'El gerente sonríe: «Así me gusta, con iniciativa». Cuando bajas, Liliana te escribe: «¿Me estás diciendo que convocas plazas que yo no he certificado?».',
          pro: { ok: 'Respondes a una necesidad real de seguridad.', risk: 'Convocar sin certificación es comprometer un gasto que nadie ha garantizado. Si el dinero no aparece, hay ganadores sin contrato.' },
          kusi: ['preocupado', '«Regularizar» suena fácil hasta que llega la auditoría.'] } },
      { id: 'c', label: 'Proponerle esperar la certificación de las 15 y publicar todo junto, aunque se corra la fecha.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, tiempo: -4 }, flags: ['concurso_retrasado'], cartera: { extra: 'Esperando certificación', concurso: 'Publicación en riesgo de correrse' },
          out: 'El gerente acepta, pero llama a Marisol: «Que no se pase de la otra semana». Las otras 12 plazas, que sí estaban listas, ahora esperan por tres.',
          pro: { ok: 'Todo el concurso sale con certificación.', risk: 'Las áreas que ya tenían todo listo pagan el retraso.' },
          kusi: ['pensando', 'Legal, pero doce esperan por tres.'] } },
    ],
    rules: [[LEY, 'D.Leg. 1440, art. 41: no se compromete un gasto sin certificación del crédito presupuestario.'], [LEY, 'El CAS garantiza los principios de méritos y capacidad e igualdad de oportunidades (D.Leg. 1057, art. 1); por eso se accede por concurso público.']],
    mirada: {
      ve: 'El gerente tiene un problema real: la ciudad sin serenos en diciembre. La regla presupuestal no está para negarle la seguridad a la gente, sino para que nadie prometa sueldos que no existen.',
      visual: { tipo: 'balanza', a: { t: 'Meter las 15 ahora', items: ['El gerente contento hoy', 'Serenos en diciembre… si aparece el dinero'] }, b: { t: '12 ahora, 3 después', items: ['Concurso sin observaciones', 'Fecha concreta para el segundo', 'Ningún ganador sin contrato'] } },
    },
  },
  {
    id: 'c4', t: '12:40', ch: 'documento', who: null, titulo: 'El perfil del ingeniero', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio, con la humita del almuerzo a un lado', show: ['calidad', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('perfil_urbano_propio') ? 'El ingeniero Terrones te devuelve el perfil que tú redactaste, con anotaciones a mano y un «así sí» en la última página.' : 'El perfil de Desarrollo Urbano llegó con el chofer, sin cargo. Al final dice «elaborado personalmente por el gerente».'}</p><p>Lo lees despacio. Algo no cuadra. <mark class="clave">Marca lo que no debería quedar</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del perfil que incumplen la ley o que parecen hechas para una persona.',
    doc: { t: 'Perfil de puesto: Ingeniero civil · Supervisor de obras', sub: 'Gerencia de Desarrollo Urbano · CAS 005-2026' },
    lines: [
      { id: 'tit', t: 'Título profesional de ingeniero civil, colegiado y habilitado.' },
      { id: 'gen', t: 'Experiencia general mínima de cuatro años en el ejercicio de la profesión.' },
      { id: 'mpc', t: 'Experiencia específica de tres años en obras por administración directa en la Municipalidad Provincial de Cajamarca.', bad: BP, why: 'Pedir experiencia en esta misma municipalidad deja fuera a cualquiera que hizo el mismo trabajo en otra entidad. Parece escrito para alguien que ya estuvo aquí.' },
      { id: 'edad', t: 'Edad máxima: 40 años.', bad: LEY, why: 'Un límite de edad sin relación con el trabajo es un requisito discriminatorio (Ley 26772).' },
      { id: 's10', t: 'Manejo de S10, AutoCAD y MS Project, acreditado con certificado.' },
      { id: 'res', t: 'Haber sido residente o supervisor en al menos dos obras públicas.' },
      { id: 'maestria', t: 'Maestría en Gestión Pública (indispensable).', duda: 'Puede sumar, pero exigirla como indispensable reduce mucho el número de postulantes. Conviene que sea un puntaje adicional.' },
      { id: 'disp', t: 'Disponibilidad para trabajar en las obras rurales de la provincia.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const vio = hitsBp > 0;
      return {
        out: vio ? `Marcas la experiencia «en la Municipalidad Provincial de Cajamarca»${missLey ? '' : ' y el límite de edad'}. Don Segundo lee por encima de tu hombro y baja la voz: «Eso es para alguien. El ingeniero tiene un sobrino que trabajó aquí hasta el año pasado».` : `${missLey ? 'Se te pasa el límite de edad y' : 'Quitas el límite de edad, pero'} la experiencia «en esta municipalidad» se queda. Nadie más lo nota… todavía.`,
        flags: [vio ? 'perfil_medida_visto' : 'perfil_medida_pasado'], cartera: { perfiles: vio ? 'Perfil del ingeniero observado: experiencia a la medida' : 'Perfil del ingeniero aceptado' },
        pro: { ok: 'Lo que se mide es el tipo de experiencia, no dónde se ganó.', risk: 'Un perfil a la medida convierte el concurso en una formalidad para un ganador decidido.', info: 'Cuando un requisito solo lo cumple una persona que conoces, pregúntate para quién se escribió.' },
        kusi: vio ? ['curioso', '¿Para quién se escribió ese requisito?'] : ['preocupado', 'Ese requisito tiene nombre y apellido…'],
      };
    },
    rules: [[LEY, 'Ley 26772, modificada por la Ley 27270: sin requisitos que alteren la igualdad de oportunidades.'], [BP, 'La experiencia se pide por el tipo de trabajo, no por la entidad donde se hizo.']],
    mirada: {
      ve: 'Los perfiles a la medida casi nunca dicen un nombre. Dicen «experiencia en esta entidad», «en este distrito», «con este software que solo usamos aquí». Detectarlos es una de las tareas más delicadas de la ORH.',
      visual: { tipo: 'embudo', titulo: 'Quién cumple el perfil', niveles: [['Ingenieros civiles colegiados en Cajamarca', 400], ['Con 4 años y obras públicas', 90], ['Con obras por administración directa', 35], ['…en esta municipalidad', 2]] },
    },
  },
  {
    id: 'c5', t: '14:30', ch: 'whatsapp', who: null, titulo: 'Un mensaje para el ingeniero', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>${F.has('perfil_medida_visto') ? 'Tienes que devolverle el perfil al ingeniero Terrones con dos cambios. Es gerente, tiene 30 años en obras y no le gusta que le corrijan.' : 'Tienes que devolverle el perfil al ingeniero Terrones para que corrija el límite de edad. Es gerente y no le gusta que le corrijan.'}</p><p>Marisol te dice: «Escríbele tú, pero <mark class="clave">sin acusar a nadie</mark>».</p>`,
    type: 'compose', enviaA: 'terrones', para: 'Para: Ing. Lucio Terrones · Gerente de Desarrollo Urbano', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'El saludo', ops: [
        { id: 'a1', t: 'Buenas tardes, ingeniero. Gracias por enviar el perfil; está muy completo en lo técnico.', ok: true, por: 'Reconoces su trabajo antes de pedir cambios.' },
        { id: 'a2', t: 'Ingeniero, su perfil tiene problemas.', ok: false, por: 'Empieza como un reproche.' },
      ] },
      { id: 'cambio', t: 'El cambio', ops: [
        { id: 'c1', t: 'Para que el concurso no sea observado, proponemos pedir la experiencia en obras por administración directa en cualquier entidad pública, sin límite de edad.', ok: true, por: 'Explicas el cambio con un motivo que también lo protege a él.' },
        { id: 'c2', t: 'Ese requisito parece hecho para alguien que usted conoce.', ok: false, por: 'Es una acusación que no puedes probar, por escrito.' },
      ] },
      { id: 'cierre', t: 'El cierre', ops: [
        { id: 'z1', t: 'Si está de acuerdo, le pido su visto bueno hasta mañana para incluirlo en las bases.', ok: true, por: 'Pides una acción concreta con plazo.' },
        { id: 'z2', t: 'Si no está de acuerdo, lo dejamos como está.', ok: false, por: 'Le das permiso para mantener un requisito que no se sostiene.' },
      ] },
    ],
    res: sel => {
      const mal = sel.cambio === 'c2' || sel.cierre === 'z2', buenas = ['a1', 'c1', 'z1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 3 : mal ? -3 : 1, etica: mal ? -2 : 3, personas: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['terrones_explicado'] : [],
        out: q === 'buena' ? 'El ingeniero tarda dos horas. Luego responde: «Conforme. Pero que el comité sepa evaluar experiencia de obra de verdad». Te manda el visto bueno escaneado.' : mal ? (sel.cambio === 'c2' ? 'El ingeniero responde con un audio furioso y reenvía tu mensaje al gerente municipal. Ahora el problema eres tú.' : 'El ingeniero contesta: «Entonces lo dejamos». El requisito se queda.') : 'El ingeniero responde «ok» y no dice más. Su visto bueno llega sin ganas.',
        pro: { ok: 'Corriges el perfil sin acusar y le das una razón que también lo cuida.', risk: 'Acusar por escrito sin pruebas expone a la ORH; ceder deja el requisito a la medida.', info: 'Guarda el visto bueno en el expediente: quién pidió qué y cuándo.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Firme y con tacto. ¡Bacán!' : 'Ese mensaje se va a reenviar…'],
      };
    },
    rules: [[BP, 'Por escrito se dicen hechos y reglas, no sospechas sobre personas.']],
    mirada: {
      ve: 'Tus sospechas pueden ser ciertas, pero por escrito solo vale lo que puedes sostener. Cambiar el requisito protege el concurso sin acusar a nadie, y deja constancia de quién aceptó el cambio.',
      visual: { tipo: 'mensaje', titulo: 'Corregir sin acusar', txt: 'Gracias por el perfil. Para que el concurso no sea observado, proponemos pedir la experiencia en obras por administración directa en cualquier entidad pública, sin límite de edad. ¿Me da su visto bueno hasta mañana?' },
    },
  },
  {
    id: 'c6', t: '16:30', ch: 'documento', who: 'marisol', titulo: 'El expediente del concurso', banner: 'assets/foto2/revisan.webp', lugar: 'Mesa grande de la ORH', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>Marisol pone sobre la mesa un archivador de palanca, el foliador y un sello de «ES COPIA FIEL DEL ORIGINAL». «Antes de irnos, armamos el expediente. <mark class="clave">Si la Contraloría lo pide, tiene que contarse solo</mark>.»</p>`,
    type: 'secuencia', prompt: 'Ordena los documentos del expediente, del primero al último.', boton: 'Foliar el expediente',
    items: [
      { id: 'req', t: 'Requerimientos de las áreas', por: 'Cada área pidió su plaza y explicó por qué.' },
      { id: 'perf', t: 'Perfiles de puesto con visto bueno de cada área', por: 'Lo que la plaza exige, firmado por quien la pide.' },
      { id: 'cert', t: 'Nota de certificación presupuestal', por: 'La garantía de que hay dinero para los contratos.' },
      { id: 'bases', t: 'Bases con cronograma', por: 'Las reglas del concurso.' },
      { id: 'legal', t: 'Informe de Asesoría Legal', por: 'La revisión de que las bases se ajustan a la ley.' },
      { id: 'aprob', t: 'Documento que aprueba las bases', por: 'Recién con esto se puede publicar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { marisol: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['expediente_ordenado'] : [],
        out: q === 'buena' ? 'Folias de atrás hacia adelante, como te enseña Marisol. A las 5:40 el expediente tiene 63 folios y una carátula. «Esto ya se defiende solo», dice ella.' : 'Marisol cambia dos documentos de lugar: «La certificación va antes de las bases. Si alguien lo lee al revés, parece que convocamos sin plata».',
        pro: { ok: 'El orden del expediente cuenta la historia del concurso.', info: 'Lo que llega después (el perfil corregido, el visto bueno) se agrega con su propio folio, no se reemplaza.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Expediente de manual!' : 'Primero el dinero, luego las reglas.'],
      };
    },
    mirada: {
      ve: 'Un expediente bien armado es la memoria del concurso. Cuando alguien pregunte «¿cómo se decidió esto?», la respuesta tiene que estar en los folios, no en la cabeza de quien lo hizo.',
      visual: { tipo: 'flujo', titulo: 'El expediente del CAS 005-2026', pasos: ['Requerimientos', 'Perfiles', 'Certificación', 'Bases', 'Informe legal', 'Aprobación'], aqui: 2 },
    },
  },
];
