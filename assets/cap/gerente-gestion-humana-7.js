// Gerente/a de Gestión Humana · Capítulo 7 · «La mesa con enfermería» · Semana 2, martes.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida. Hoy, la mesa técnica con el sindicato de enfermería,
// a un día de la huelga anunciada.
// Normas citadas (textos oficiales en docs/normas/txt):
// - Constitución Política del Perú, art. 28: garantiza la libertad sindical y fomenta la negociación colectiva y la
//   solución pacífica de los conflictos; la convención colectiva tiene fuerza vinculante en lo concertado.
// - D.S. 019-2006-TR, art. 25.10: es infracción muy grave impedir la libre afiliación sindical o promover la
//   desafiliación, con medios directos o indirectos.
// - Ley 29733, art. 2, num. 5: la información de salud es un dato sensible.
// - D.S. 007-2002-TR, arts. 9 y 10-A: sobretiempo voluntario y registrado, ya citados en el capítulo 3.

export const CAP = {
  n: 7, titulo: 'La mesa con enfermería', dia: 'Semana 2, martes', foto: 'assets/foto/acuerdo.webp',
  lugar: 'Clínica Vida San Isidro · Sala de directorio del piso 2',
  inicio: '07:30', fin: '19:30', cierreHora: '19:10',
  apertura: 'Martes. Mañana, si no hay acuerdo, 600 enfermeras de cinco clínicas paran 48 horas. La mesa es a las 9 en la sala del piso 2, la misma donde el jueves se sentará el directorio. Alguien dejó en la pared el cuadro del fundador, el padre de la doctora Rossi.', boton: 'Preparar la carpeta',
  kusi: 'Hoy no gana quien grita más: gana el acuerdo que las dos partes pueden cumplir.',
  lead: 'Llevaste datos y no promesas, encontraste un acuerdo por fases, priorizaste con criterio, limpiaste un acta de cláusulas imposibles y le contaste la verdad a la doctora.',
  reflexion: '¿Qué hace que un acuerdo con un sindicato se cumpla después de firmado?',
  siguiente: { n: 8, titulo: 'La propuesta', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Reducción de costos del 10 %', j: 'Directorio', d: 0, e: 'Faltan 2 días · brecha de 2.6 %' },
  { id: 'mesa', p: 'Mesa técnica de dotación', j: 'Silvia Quispe', d: 0, e: 'Hoy 9:00' },
  { id: 'huelga', p: 'Huelga de 48 horas', j: 'Sindicato', d: 0, e: 'Anunciada para mañana' },
  { id: 'denuncia', p: 'Denuncia de Kiara Saavedra', j: 'Gestión Humana', d: 0, e: 'En investigación' },
  { id: 'acta', p: 'Acta de acuerdos', j: 'Relaciones Laborales', d: 0, e: 'Sin redactar' },
];

export const FUTURO = {
  carpeta_mesa: ['Llegaste a la mesa con datos que el sindicato podía verificar.', 'Nora los usó para convencer a su junta.'],
  acuerdo_fases: ['Acordaste cubrir las 42 vacantes en fases, sujeto al directorio, con el sindicato ayudando a bajar el ausentismo.', 'Es el corazón de tu propuesta de mañana.'],
  acuerdo_roto: ['La mesa terminó sin acuerdo.', 'Mañana empieza la huelga.'],
  prioridad_datos: ['Priorizaste las vacantes según riesgo para los pacientes.', 'La UCI de Los Olivos va primero.'],
  acta_firmada: ['El acta firmada tiene solo lo que el grupo puede cumplir.', 'La huelga quedó suspendida.'],
  acta_riesgosa: ['El acta firmada tiene cláusulas que no se pueden cumplir.', 'El sindicato las va a exigir.'],
  rossi_verdad_mesa: ['Le contaste a la doctora lo que firmaste, con su condición.', 'Llegará al jueves sin sorpresas.'],
};

export const CHATS = {
  nora: { n: 'Lic. Nora Huamán', sub: 'Sindicato de enfermería', who: 'sindicato' },
  carmen: { n: 'Dra. Carmen Rossi', sub: 'Presidenta del directorio', who: 'directorio' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
  silvia: { n: 'Silvia Quispe', sub: 'Jefa de Relaciones Laborales', c: '#8A5A2B' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
  kiara: { n: 'Kiara Saavedra', sub: 'Enfermera · Clínica Miraflores', c: '#B83B5E' },
};

export const WSP = [
  { chat: 'silvia', t: '07:35', de: 'Silvia', txt: 'Jefa, Nora llega con la junta completa y con su abogado. Yo llevo café y alfajores de la panadería de la esquina. Siempre ayuda 🙂' },
  { chat: 'kiara', t: '08:10', de: 'Kiara', txt: 'Buenos días. Hoy entré a mi turno y el doctor no estaba en el calendario. Gracias.', si: 'medidas_proteccion' },
  { chat: 'gg', t: '11:20', de: 'Fernando', txt: 'Puedes comprometer que lo propones al directorio, no que se aprueba. Fases, sí. Plazo cerrado, no.' },
  { chat: 'nora', t: '17:30', de: 'Nora', txt: 'Huelga suspendida. Si el jueves el directorio dice que no, la retomamos. Pero hoy usted cumplió.', si: 'acta_firmada' },
  { chat: 'jorge', t: '17:45', de: 'Jorge', txt: 'Con las fases y la meta de ausentismo, el escenario medio sube a 8.3 %. Falta 1.7 %.', si: 'acuerdo_fases' },
];

export const CORREOS = [
  { t: '07:30', de: 'Sindicato de Enfermería de Grupo Vida', para: 'Gerencia de Gestión Humana', asunto: 'Agenda de la mesa técnica', html: '<p>Proponemos: 1) cobertura de las vacantes de enfermería en un plazo cierto; 2) número mínimo de enfermeras por turno en UCI y hospitalización; 3) fin de las horas extra impuestas; 4) garantía de no despidos en enfermería.</p><p>Junta Directiva</p>' },
  { t: '15:40', de: 'Relaciones Laborales · Silvia Quispe', para: 'Gerencia de Gestión Humana', asunto: 'Borrador de acta', html: '<p>Te mando el borrador que armamos con el abogado del sindicato. Ojo, que algunas cláusulas las metieron ellos en la última media hora.</p><p>Silvia</p>' },
];

export const QUIZ = [
  { q: 'Para una mesa técnica de dotación, ¿qué datos conviene compartir con el sindicato?', ops: ['La lista de afiliadas', 'Vacantes, horas extra y enfermeras por turno, agregados y sin nombres', 'Los descansos médicos con diagnóstico', 'Nada: es información de la empresa'], ok: 1, por: 'Datos agregados y verificables permiten negociar sobre hechos sin exponer a nadie.' },
  { q: 'Una cláusula que obliga a contratar solo personal afiliado al sindicato…', ops: ['Es legal si la firma el sindicato', 'Afecta la libertad sindical de quien no quiere afiliarse', 'Es obligatoria en salud', 'Es una buena práctica'], ok: 1, por: 'La libertad sindical incluye afiliarse o no. Condicionar el empleo a la afiliación la vulnera (Constitución, art. 28).' },
  { q: '¿Qué hace cumplible un acuerdo por fases?', ops: ['Un plazo cerrado para todo', 'Fases con prioridades, responsables, indicadores y una condición clara', 'Que lo firme el gerente general', 'Que sea verbal'], ok: 1, por: 'Fases con criterios y una condición explícita (aprobación del presupuesto) evitan promesas imposibles.' },
  { q: 'La convención o acuerdo colectivo, según la Constitución (art. 28)…', ops: ['Es una recomendación', 'Tiene fuerza vinculante en el ámbito de lo concertado', 'Vale solo un mes', 'La anula el directorio'], ok: 1, por: 'El art. 28 dice que la convención colectiva tiene fuerza vinculante en el ámbito de lo concertado. Por eso solo se firma lo que se puede cumplir.' },
  { q: 'Firmaste un acuerdo sujeto a la aprobación del directorio. ¿Cómo se lo cuentas a la presidenta?', ops: ['No se lo cuentas hasta el jueves', 'Le dices qué se firmó, qué condición tiene y cuánto cuesta', 'Le dices que ya está aprobado', 'Que lo firmó Relaciones Laborales'], ok: 1, por: 'Sin sorpresas: lo que se firmó, su condición y su costo, antes de la sesión.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:45', ch: 'documento', who: null, titulo: 'La carpeta de la mesa', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de directorio del piso 2', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('mesa_propuesta') ? 'Fuiste tú quien propuso esta mesa por escrito.' : 'Silvia convenció a Nora de venir igual, «para escuchar».'} Lo que pongas en la carpeta de cada lado de la mesa decide de qué se va a hablar.</p><p><mark class="clave">Elige qué entra en la carpeta</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la carpeta.', boton: 'Imprimir dos juegos',
    bloques: [
      { id: 'datos', t: 'Datos para compartir', n: 3, ops: [
        { id: 'd1', t: 'Vacantes de enfermería por clínica y servicio.', ok: true },
        { id: 'd2', t: 'Horas extra por servicio en los últimos seis meses.', ok: true },
        { id: 'd3', t: 'Enfermeras por turno y pacientes promedio, por servicio.', ok: true },
        { id: 'd4', t: 'Descansos médicos por persona, para mostrar quiénes faltan más.', ok: false, por: 'Datos de salud individuales: sensibles y fuera de lugar en una mesa.' },
      ] },
      { id: 'reglas', t: 'Reglas de la mesa', n: 1, ops: [
        { id: 'r1', t: 'Acta al final, con lo acordado y lo pendiente, firmada por ambas partes.', ok: true },
        { id: 'r2', t: 'Sin acta: mejor un acuerdo de palabra para no comprometer al directorio.', ok: false, por: 'Sin acta, cada parte recordará un acuerdo distinto.' },
      ] },
      { id: 'limite', t: 'Tus límites', n: 1, ops: [
        { id: 'l1', t: 'Una hoja para ti: lo que comprometes, lo que propones al directorio y lo que no depende de ti.', ok: true, por: 'La tienes a mano para no prometer de más bajo presión.' },
        { id: 'l2', t: 'La propuesta completa de presupuesto, para que vean el cuadro general.', ok: false, por: 'El directorio aún no la conoce. Mostrarla aquí es adelantar una decisión que no es tuya.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 2, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['carpeta_mesa'], cartera: { mesa: q === 'riesgosa' ? 'Carpeta con información que no debía ir' : 'Carpeta con datos verificables' },
        out: q === 'buena' ? 'Dos carpetas idénticas, una a cada lado de la mesa. Silvia pone los alfajores en el centro. El cuadro del fundador mira a todos.' : 'La carpeta está lista, aunque algo de lo que pusiste va a incomodar a alguien.',
        pro: { ok: 'Los mismos datos para las dos partes cambian la conversación: de opiniones a hechos.', info: 'Tu hoja de límites es solo para ti.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Datos sobre la mesa, no sospechas!' : 'Revisa lo que va a cada lado.'],
      };
    },
    rules: [[LEY, 'La información de salud es un dato sensible (Ley 29733, art. 2).'], [BP, 'En una mesa técnica, las dos partes trabajan con los mismos datos.']],
    mirada: {
      ve: 'Compartir datos con un sindicato asusta a muchas gerencias. Pero cuando ambas partes miran las mismas vacantes y las mismas horas extra, dejan de discutir quién miente y empiezan a discutir qué hacer.',
    },
  },
  {
    id: 'g2', t: '09:30', ch: 'presencial', who: 'sindicato', titulo: 'El pedido de Nora', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Sala de directorio del piso 2', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => `<p>Nora llega con cuatro dirigentas y un abogado joven. ${F.has('agencia_contratada') ? 'Lo primero que pone sobre la mesa es la cotización de la agencia de enfermeras.' : F.has('nora_intereses') ? 'Te saluda con un gesto: recuerda la cafetería.' : ''} Revisa la carpeta en silencio durante diez minutos.</p><p>«Los datos dicen lo que dijimos siempre. Queremos las 42 plazas cubiertas en 60 días y cero despidos. <mark class="clave">Si no, mañana paramos</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer cubrir las 42 plazas en fases según el riesgo de cada servicio, sujeto a la aprobación del directorio, y pedir al sindicato que se comprometa con un plan conjunto para bajar el ausentismo en turnos de noche.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 4, personas: 3 }, rel: { sindicato: 1 }, flags: ['acuerdo_fases'], cartera: { mesa: 'Acuerdo por fases en discusión' },
          out: 'Nora mira a su junta. Una de las dirigentas, la de Chorrillos, dice: «Lo del ausentismo es verdad, en noche nos tapamos entre nosotras». Nora pide un cuarto intermedio. Es buena señal.',
          pro: { ok: 'Ofreces algo cumplible y pides algo a cambio que también ahorra.', risk: 'La aprobación del directorio no la controlas.', info: 'Deja claro qué pasa si el directorio no aprueba.' },
          kusi: ['animo', 'Dar y pedir. ¡Eso es negociar!'] } },
      { id: 'b', label: 'Aceptar las 42 plazas en 60 días: la huelga de mañana costaría más.',
        res: { q: 'riesgosa', fx: { confianza: 2, calidad: -4 }, rel: { sindicato: 1 }, flags: ['acuerdo_fases'], cartera: { mesa: 'Compromiso de 42 plazas en 60 días' },
          out: 'Nora sonríe por primera vez. Silvia te mira con los ojos muy abiertos. Fernando te escribirá en una hora: «¿60 días? ¿Con qué presupuesto?».',
          pro: { ok: 'Se evita la huelga hoy.', risk: 'Un plazo que no controlas es una huelga postergada.' },
          kusi: ['preocupado', '¿Y si el directorio dice que no?'] } },
      { id: 'c', label: 'Decir que con huelga anunciada no se negocia: primero que la suspendan, después hablamos.',
        res: { q: 'riesgosa', fx: { confianza: -4, personas: -3 }, rel: { sindicato: -1 }, flags: ['acuerdo_roto'], cartera: { mesa: 'Mesa rota' },
          out: 'Nora cierra la carpeta. «Entonces nos vemos mañana en la puerta.» Se van. Silvia guarda los alfajores sin abrir.',
          pro: { ok: 'Mantienes una posición firme.', risk: 'Condicionar el diálogo a que la otra parte renuncie a su presión es terminar el diálogo.' },
          kusi: ['triste', 'Mañana, 600 enfermeras en la puerta.'] } },
    ],
    rules: [[LEY, 'La Constitución (art. 28) fomenta la negociación colectiva y la solución pacífica de los conflictos.']],
    mirada: {
      ve: 'Un buen acuerdo no es el punto medio entre dos posiciones: es una solución que atiende los intereses de ambas partes. El sindicato necesita personal suficiente; la empresa necesita bajar costos. Cubrir vacantes y bajar el ausentismo sirve a las dos.',
      visual: { tipo: 'balanza', a: { t: 'Lo que da la empresa', items: ['42 plazas en fases', 'Horas extra voluntarias', 'Mesa mensual con datos'] }, b: { t: 'Lo que da el sindicato', items: ['Suspender la huelga', 'Plan conjunto de ausentismo en noche', 'Fases según riesgo'] } },
    },
  },
  {
    id: 'g3', t: '11:00', ch: 'llamada', who: null, titulo: 'Cuarto intermedio', banner: 'assets/foto/llamada.webp', show: ['tiempo', 'calidad', 'confianza'],
    body: () => `<p>Cuarto intermedio de una hora. Te encierras en una oficina de admisión con el celular y una hoja. Antes de volver a la mesa, necesitas saber hasta dónde puedes llegar.</p>`,
    type: 'calls',
    calls: [['Fernando Prado', 'Contesta: Gerencia General', 'Puedes comprometer que lo propones al directorio. Fases sí, plazo cerrado no. Y que quede escrito que depende de la aprobación.'], ['Jorge Lazo', 'Contesta: Compensaciones', 'Si son cuatro fases en seis meses y el ausentismo de noche baja aunque sea un punto, el escenario medio mejora. Te lo mando en 20 minutos.'], ['Lic. Gladys Tello', 'Contesta: UCI de Los Olivos', 'Si me dan las cuatro de la UCI primero, yo misma le digo a mis chicas que no paren mañana.'], ['Rodrigo Benavides', 'No contesta: está con el banco']],
    prompt: 'Con lo que escuchaste, ¿qué llevas de vuelta a la mesa?',
    choices: [
      { id: 'a', label: 'Cuatro fases en seis meses, empezando por servicios críticos, todo sujeto a aprobación del directorio, con una mesa mensual de seguimiento con datos.',
        res: { q: 'buena', fx: { calidad: 4, confianza: 3, tiempo: -1 }, flags: ['contraoferta_clara'], cartera: { mesa: 'Contraoferta: 4 fases en 6 meses, sujeta al directorio' },
          out: 'Vuelves a la mesa con una hoja escrita a mano y el escenario de Jorge en el celular. Nora la lee dos veces. «¿Y si el jueves dicen que no?» «Usted es la primera en saberlo, y la mesa sigue.»',
          pro: { ok: 'Una contraoferta con fases, condición y seguimiento es creíble.', info: 'La mesa mensual es lo que hace que el acuerdo viva después de firmado.' },
          kusi: ['celebra', 'Hoja a mano, acuerdo a la vista.'] } },
      { id: 'b', label: 'Volver con lo mismo de antes y esperar que el sindicato ceda.',
        res: { q: 'aceptable', fx: { tiempo: 1, confianza: -1 },
          out: 'Nora nota que no trajiste nada nuevo. «Entonces, ¿para qué el cuarto intermedio?» La conversación se alarga hasta la 1.',
          pro: { ok: 'No te comprometes de más.', risk: 'Un cuarto intermedio sin movimiento se lee como falta de voluntad.' },
          kusi: ['pensando', 'Algo hay que mover.'] } },
    ],
    mirada: {
      ve: 'El cuarto intermedio es el momento de verificar tus límites con quienes deciden y con quienes ejecutan. La jefa de UCI, el gerente general y el analista de costos te dan, en una hora, la contraoferta que puedes sostener.',
      visual: { tipo: 'flujo', titulo: 'Una hora de cuarto intermedio', pasos: ['Límite: Fernando', 'Costo: Jorge', 'Operación: Gladys', 'Contraoferta escrita'] },
    },
  },
  {
    id: 'g4', t: '13:30', ch: 'documento', who: null, titulo: 'La primera fase', banner: 'assets/3d/scenes/hospital.webp', lugar: 'Sala de directorio del piso 2', show: ['personas', 'calidad'],
    body: () => `<p>Nora acepta las fases si la primera es «de verdad». Hay presupuesto para cubrir unas doce plazas en la primera fase. Con la junta, revisan las vacantes servicio por servicio.</p><p>Solo entran <mark class="clave">tres servicios</mark> en la primera fase.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres servicios que van en la primera fase.', boton: 'Anotarlos en el acta', resumen: 'Priorizaste',
    cols: ['Servicio', 'Situación'],
    rows: [
      { id: 'uci', cells: ['UCI de Los Olivos', '4 vacantes; horas extra impuestas hasta la semana pasada.'] },
      { id: 'eme', cells: ['Emergencia de San Juan de Lurigancho', '4 vacantes; la mayor demanda nocturna del grupo.'] },
      { id: 'neo', cells: ['Neonatología de Miraflores', '3 vacantes; pacientes de alto riesgo.'] },
      { id: 'con', cells: ['Consulta externa de San Isidro', '5 vacantes; horario diurno, sin pacientes críticos.'] },
      { id: 'hos', cells: ['Hospitalización de Chorrillos', '6 vacantes; la dirigenta de Chorrillos insiste.'] },
      { id: 'vip', cells: ['Piso de suites de San Isidro', '2 vacantes; lo pidió un director por los pacientes de convenio.'] },
    ],
    score: { uci: 3, eme: 3, neo: 3, hos: 1, con: -1, vip: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 4 : -1, etica: picks.includes('vip') ? -3 : 1 },
        flags: q === 'buena' ? ['prioridad_datos'] : [], cartera: { mesa: q === 'buena' ? 'Fase 1: UCI, emergencia y neonatología' : 'Fase 1 discutible' },
        out: q === 'buena' ? 'La dirigenta de Chorrillos protesta, pero Nora la calma: «Primero donde se muere gente si falta una enfermera. La tuya va en la fase dos». Se anota así.' : picks.includes('vip') ? 'Nora levanta la vista: «¿Las suites antes que la UCI?». El ambiente se enfría.' : 'La primera fase queda armada, aunque deja fuera un servicio crítico.',
        pro: { ok: 'Priorizas por riesgo para los pacientes, con un criterio que todos pueden entender.', risk: 'Quien queda para después necesita una fecha.', info: 'Escribe el criterio en el acta: «riesgo clínico y horas extra».' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Primero donde más importa. ¡Así!' : 'El criterio tiene que verse.'],
      };
    },
    mirada: {
      ve: 'Cuando no alcanza para todo, el criterio de prioridad es tan importante como la decisión. Un criterio explícito (riesgo para los pacientes y horas extra) hace que quien queda para después lo entienda, aunque no le guste.',
      visual: { tipo: 'matriz', x: 'Horas extra actuales', y: 'Riesgo clínico', cuadrantes: ['Fase 1', 'Fase 2', 'Fase 4', 'Fase 3'], items: [['UCI Los Olivos', .85, .95], ['Emergencia SJL', .8, .85], ['Neonatología', .5, .9], ['Hospitalización Chorrillos', .6, .5], ['Consulta externa', .3, .15], ['Suites', .1, .1]] },
    },
  },
  {
    id: 'g5', t: '16:00', ch: 'documento', who: null, titulo: 'El acta', banner: 'assets/esc/lupa.webp', lugar: 'Sala de directorio del piso 2', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>El abogado del sindicato y Silvia redactaron el acta en la laptop de la sala. Nora ya tiene el lapicero en la mano: si firman antes de las 5, la junta suspende la huelga.</p><p>Silvia te advirtió que algunas cláusulas entraron en la última media hora. <mark class="clave">Lees antes de firmar</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no se puede firmar o debería corregirse.',
    doc: { t: 'Acta de la mesa técnica de dotación de enfermería', sub: 'Grupo Vida y Sindicato de Enfermería · borrador' },
    lines: [
      { id: 'fases', t: 'La empresa propondrá al directorio cubrir las 42 plazas en cuatro fases en seis meses, empezando por UCI, emergencia y neonatología; el compromiso queda sujeto a esa aprobación.' },
      { id: 'he', t: 'Las horas extra se ofrecen y se registran; ninguna jefatura las impone.' },
      { id: 'aus', t: 'Sindicato y empresa elaboran en 30 días un plan conjunto para reducir el ausentismo en turnos de noche.' },
      { id: 'cero', t: 'La empresa garantiza que no habrá ningún despido de personal de enfermería durante dos años.', bad: BP, why: 'No depende de ti ni está aprobado. Firmarlo crea una obligación que el grupo no ha decidido asumir.' },
      { id: 'afil', t: 'Las nuevas plazas solo se cubrirán con enfermeras que se afilien al sindicato.', bad: LEY, why: 'La libertad sindical incluye decidir no afiliarse. Condicionar el empleo a la afiliación la vulnera (Constitución, art. 28; D.S. 019-2006-TR, art. 25.10).' },
      { id: 'lista', t: 'La empresa entregará mensualmente al sindicato la relación de enfermeras con descanso médico y su diagnóstico.', bad: LEY, why: 'Los diagnósticos son datos sensibles (Ley 29733, art. 2). Para el plan de ausentismo bastan datos agregados.' },
      { id: 'mesa', t: 'La mesa técnica se reúne una vez al mes con datos de vacantes, horas extra y ausentismo.' },
      { id: 'susp', t: 'El sindicato suspende la medida de fuerza anunciada mientras se cumplan estos acuerdos.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, confianza: missLey ? -1 : 3, etica: missLey ? -2 : 2 },
      flags: [missLey ? 'acta_riesgosa' : 'acta_firmada'], cartera: { acta: missLey ? 'Acta firmada con cláusulas imposibles' : 'Acta firmada: cinco acuerdos cumplibles' },
      out: missLey ? 'Firman. Nora guarda su copia en una mica. Algunas de esas cláusulas, el grupo no las puede cumplir, y el sindicato las va a exigir.' : 'Explicas cada cláusula que tachas. El abogado discute la de los despidos; Nora lo detiene: «La licenciada no nos ha mentido en toda la semana. Si dice que no puede, no puede». Firman a las 4:52.',
      pro: { ok: 'Un acta solo con lo que el grupo puede cumplir es un acuerdo que dura.', risk: 'Un acuerdo colectivo es vinculante en lo concertado: lo que se firma, se exige.', info: 'Lleva copia del acta firmada a Fernando antes de las 6.' },
      kusi: missLey ? ['preocupado', 'Eso se va a cobrar después.'] : ['celebra', '¡Acta firmada y huelga suspendida!'],
    }),
    rules: [[LEY, 'La convención colectiva tiene fuerza vinculante en el ámbito de lo concertado (Constitución, art. 28).'], [LEY, 'Es infracción muy grave impedir la libre afiliación o promover la desafiliación (D.S. 019-2006-TR, art. 25.10).']],
    mirada: {
      ve: 'La última media hora de una negociación es la más peligrosa: con el cansancio y el reloj encima, entran cláusulas que nadie discutió. Leer el acta con calma, incluso con el lapicero de la otra parte en el aire, es parte del trabajo.',
      normas: [{ ley: 'Constitución Política del Perú, art. 28', dice: 'El Estado garantiza la libertad sindical, fomenta la negociación colectiva y la solución pacífica de los conflictos. La convención colectiva tiene fuerza vinculante en el ámbito de lo concertado.', practica: 'Lo que firmas en un acta con el sindicato se cumple. Por eso solo firmas lo que puedes cumplir.' }],
    },
  },
  {
    id: 'g6', t: '18:00', ch: 'llamada', who: 'directorio', titulo: 'Las seis en punto', banner: 'assets/foto/frente-a-frente.webp', show: ['confianza', 'etica'],
    body: (n, F) => `<p>La doctora pidió el resultado el martes a las 6. Son las 6 en punto. ${F.has('carmen_limite') ? 'Desde lo de ayer no te ha vuelto a escribir.' : ''}</p><p>Contesta al primer timbre: «${F.has('acta_firmada') ? 'Me dicen que firmó algo con el sindicato.' : F.has('acuerdo_roto') ? 'Me dicen que mañana hay huelga.' : 'Dígame.'} <mark class="clave">¿Qué comprometió a nombre del grupo?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Contarle qué se firmó, que el compromiso de las vacantes está sujeto a la aprobación del directorio, cuánto cuesta cada fase y cuánto ahorra con las horas extra y el ausentismo.',
        res: { q: 'buena', fx: { confianza: 4, etica: 2 }, rel: { directorio: 1 }, flags: ['rossi_verdad_mesa'],
          out: 'La doctora escucha sin interrumpir. «Sujeto a aprobación. Bien. Entonces el jueves me convence o no lo aprobamos.» Antes de colgar: «¿No hay huelga mañana?». «No, doctora.» Un silencio. «Bien.»',
          pro: { ok: 'Sin sorpresas: lo firmado, su condición y su costo, antes de la sesión.', info: 'Esa condición es tu mejor argumento y tu mayor riesgo el jueves.' },
          kusi: ['feliz', 'Ni una sorpresa. ¡Así se llega al jueves!'] } },
      { id: 'b', label: 'Decirle que no hay huelga y que los detalles los verá en la propuesta del jueves.',
        res: { q: 'aceptable', fx: { confianza: 1 }, rel: { directorio: 0 },
          out: '«No me gustan los detalles en la sesión.» Cuelga. El jueves, el acta será la primera pregunta.',
          pro: { ok: 'Das la buena noticia.', risk: 'Lo que no cuentas hoy te lo preguntan delante de todos.' },
          kusi: ['pensando', 'Los detalles igual van a salir.'] } },
    ],
    mirada: {
      ve: 'Lo que se firma con un sindicato se informa hacia arriba el mismo día, con su condición y su costo. Así el directorio decide sobre algo que conoce, y la palabra dada a la mesa no queda expuesta a una sorpresa.',
    },
  },
];
