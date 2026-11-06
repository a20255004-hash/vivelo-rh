// Generalista de RR.HH. en operación minera · Capítulo 1 · «La subida» · Semana 1, lunes.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas: D.S. 007-2002-TR (jornadas atípicas: el promedio del ciclo no puede superar la jornada máxima);
// Ley 26790 y D.S. 003-98-SA (SCTR obligatorio en actividades de riesgo como la minería); Ley 29245 (tercerización y
// responsabilidad solidaria de la empresa principal).

export const CAP = {
  n: 1, titulo: 'La subida', dia: 'Semana 1, lunes', foto: 'assets/esc/camino.webp',
  lugar: 'Minera Puquio · Apurímac, 4,100 m s. n. m.',
  inicio: '05:30', fin: '20:00', cierreHora: '19:45',
  apertura: 'Abancay, 5:30 de la mañana. El bus de la minera sube ocho horas hasta los 4,100 metros. Hoy empiezas como generalista de RR.HH. en campo.', boton: 'Subir al bus',
  kusi: 'Despacito y con agua, que la altura no perdona. ¡Vamos arriba!',
  lead: 'Preguntaste lo que importa en la mina, respetaste la vida comunal de Yuri sin romper el turno, detectaste trabajadores de contratista sin SCTR y no dejaste subir a nadie sin seguro.',
  reflexion: '¿Qué te sorprendió de hacer RR.HH. a cuatro mil metros?',
  siguiente: { n: 2, titulo: 'El comedor', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'turnos', p: 'Régimen de turnos 14 × 7', j: 'Percy · RR.HH.', d: 0, e: 'Quejas por cambios' },
  { id: 'contratistas', p: 'Ingreso de personal contratista', j: 'Ing. Mario Salas', d: 0, e: '8 personas mañana' },
  { id: 'comunidad', p: 'Empleo local con la comunidad', j: 'Doña Juana · Comunidad', d: 0, e: 'Compromiso de 30 %' },
  { id: 'comedor', p: 'Reclamos por el comedor', j: 'Percy · RR.HH.', d: 0, e: 'Creciendo' },
];

export const FUTURO = {
  yuri_cambio: ['Yuri podrá ir a su asamblea comunal con un cambio de turno ordenado.', 'Doña Juana lo sabrá en el capítulo 4.'],
  yuri_no: ['Yuri se quedó sin ir a la asamblea comunal.', 'La comunidad lo mencionará en el capítulo 4.'],
  sctr_detectado: ['Detectaste que 8 personas de la contratista no tenían SCTR.', 'El Ing. Salas tendrá que regularizar antes del capítulo 3.'],
  sctr_ok: ['No dejaste subir a nadie sin seguro.', 'Percy te dará más responsabilidad con contratistas.'],
  sctr_cede: ['Dejaste subir a 8 personas sin SCTR «mientras se tramita».', 'Uno de ellos sufrirá un golpe en el capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de contratista', who: 'contratista' },
  presidenta: { n: 'Doña Juana Huamán', sub: 'Presidenta de la comunidad', who: 'presidenta' },
};

export const WSP = [
  { chat: 'grupo', t: '05:25', de: 'Percy', txt: 'Buen viaje. Lleva agua y algo dulce. Te espero arriba a las 13:30. Si te duele la cabeza, avisa al tópico 🙏' },
  { chat: 'contratista', t: '16:20', de: 'Ing. Salas', txt: 'Buenas tardes, ¿podemos conversar? Mañana me suben 8 personas nuevas.' },
  { chat: 'yuri', t: '17:40', de: 'Yuri', txt: 'Gracias, ingeniera. Le aviso a la comunidad que sí voy a estar 🙏', si: 'yuri_cambio' },
  { chat: 'percy', t: '19:00', de: 'Percy', txt: 'Bien con lo del SCTR. Aquí arriba eso no se negocia.', si: 'sctr_ok' },
];

export const CORREOS = [
  { t: '05:20', de: 'Percy Huillca', para: 'Generalista de RR.HH. · Campo', asunto: 'Bienvenida a la unidad', html: '<p>Bienvenida. Aquí arriba somos 900 personas: 400 de la minera y 500 de contratistas. Trabajamos en turnos de 14 días de trabajo por 7 de descanso.</p><p>RR.HH. en campo es estar en el comedor, en el campamento y en la garita. Lo que no resuelves aquí arriba se convierte en una paralización.</p><p>Percy</p>' },
];

export const QUIZ = [
  { q: 'En un régimen de 14 días de trabajo por 7 de descanso, ¿qué exige la ley?', ops: ['Nada especial', 'Que el promedio de horas del ciclo no supere la jornada máxima', 'Que se pague doble', 'Que sea solo para varones'], ok: 1, por: 'El D.S. 007-2002-TR permite jornadas atípicas si el promedio del ciclo no supera la jornada máxima.' },
  { q: '¿Qué es el SCTR?', ops: ['Un bono minero', 'El Seguro Complementario de Trabajo de Riesgo, obligatorio en actividades de riesgo', 'Un sindicato', 'Un examen médico'], ok: 1, por: 'Lo regulan la Ley 26790 y el D.S. 003-98-SA; cubre salud y pensiones ante accidentes de trabajo y enfermedades profesionales.' },
  { q: 'Si el trabajador de una contratista no tiene SCTR y se accidenta en la mina…', ops: ['Solo responde la contratista', 'La empresa principal puede responder solidariamente', 'Nadie responde', 'Responde la comunidad'], ok: 1, por: 'En la tercerización (Ley 29245), la empresa principal tiene responsabilidad solidaria en ciertos supuestos.' },
  { q: 'Un operador comunero pide cambiar su turno para ir a la asamblea de su comunidad. ¿Qué haces?', ops: ['Lo niegas: el turno es el turno', 'Buscas un cambio ordenado con un compañero y su supervisor', 'Lo dejas ir sin avisar', 'Le descuentas el día'], ok: 1, por: 'Respetar la vida comunal fortalece la relación con la comunidad sin desordenar la operación.' },
  { q: '¿Qué hace RR.HH. en campo, además de papeles?', ops: ['Nada más', 'Estar presente en comedor, campamento y garita para resolver antes de que escale', 'Solo planillas', 'Solo selección'], ok: 1, por: 'En una operación remota, la presencia es lo que evita conflictos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'q1', t: '07:10', ch: 'whatsapp', who: null, titulo: 'En el bus', banner: 'assets/esc/camino.webp', lugar: 'Carretera Abancay–Puquio', show: ['confianza', 'tiempo'],
    body: () => `<p>El bus sube entre curvas. Hay señal por momentos. Percy te escribe: <mark class="clave">«Aprovecha el viaje: pregúntame lo que quieras, que arriba no habrá tiempo»</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Percy.',
    opts: [
      { id: 'conflictos', label: '¿Qué conflictos son los más frecuentes?', info: '«Comida, transporte y cambios de turno. Parece poco, pero aquí arriba, lejos de la familia, la comida es lo único bueno del día. Ahí empiezan casi todas las paralizaciones.»' },
      { id: 'comunidad', label: '¿Cómo es la relación con la comunidad?', info: '«Tenemos un compromiso: 30 % de empleo local. Doña Juana, la presidenta, lo cuenta cada mes. Si no cumplimos, la carretera se cierra.»' },
      { id: 'contratistas', label: '¿Qué pasa con los contratistas?', info: '«Son más que nosotros. Cada uno trae su gente, sus papeles y sus atajos. Si un contratista falla en seguridad o en pagos, el problema termina siendo nuestro.»' },
      { id: 'altura', label: '¿Qué debo saber sobre trabajar en altura?', info: '«Que duermes mal las primeras noches, que el soroche no es broma y que todos tienen su examen médico de altura. Si alguien sube sin él, lo bajas.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('contratistas') ? 2 : 1 }, rel: { percy: 1 },
      out: 'La señal se va. Miras por la ventana: llamas, nubes bajas y una laguna turquesa. A las 13:30 ves los primeros contenedores del campamento.',
      kusi: ['curioso', 'Ya sabes dónde empiezan los conflictos aquí arriba.'],
    }),
    mirada: {
      ve: 'En una operación minera, RR.HH. no es una oficina: es una red de personas propias, contratistas y comunidad. Saber dónde se rompe esa red es el primer paso para cuidarla.',
      visual: { tipo: 'flujo', titulo: 'Las personas de la unidad minera', pasos: ['Trabajadores propios', 'Contratistas', 'Comunidad', 'Familias lejos'] },
    },
  },
  {
    id: 'q2', t: '14:30', ch: 'presencial', who: 'yuri', titulo: 'La asamblea de Yuri', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de RR.HH. (un contenedor)', show: ['personas', 'confianza', 'cumplimiento'],
    body: () => `<p>Yuri Ccorahua, operador de volquete y comunero, toca la puerta del contenedor. Es de la comunidad de la que habló Percy.</p><p>«Ingeniera, el sábado hay asamblea comunal. Se elige la nueva directiva. Estoy en mi día 9 de 14. <mark class="clave">Si no voy, me multan y mi voto se pierde</mark>. Mi supervisor dice que no hay cambios.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Buscar con su supervisor un cambio de turno con otro operador y dejarlo registrado, para que Yuri vaya y vuelva sin afectar la operación.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3, tiempo: -2 }, rel: { yuri: 1, presidenta: 1 }, flags: ['yuri_cambio'], cartera: { comunidad: 'Cambio de turno de Yuri registrado' },
          out: 'El supervisor refunfuña, pero otro operador acepta el cambio a cambio de bajar antes en Navidad. Yuri sale del contenedor con la boleta de cambio en la mano.',
          pro: { ok: 'Respetas su vida comunal y ordenas el cambio para que la operación no se resienta.', info: 'Pregunta a Percy si existe una política para eventos comunales: pasará otra vez.' },
          kusi: ['celebra', 'Comunidad y operación, las dos cuidadas.'] } },
      { id: 'b', label: 'Respaldar al supervisor: el turno 14 × 7 es para todos, y si haces una excepción, todos van a pedir lo mismo.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2 }, rel: { yuri: -1, presidenta: -1 }, flags: ['yuri_no'],
          out: 'Yuri se va sin decir nada. El sábado, en la asamblea, alguien preguntará por qué la minera no deja ir a sus comuneros.',
          pro: { ok: 'Mantienes la regla.', risk: 'Con la comunidad, una negativa sin alternativa se vuelve un tema político.' },
          kusi: ['triste', 'Para Yuri, esa asamblea era importante…'] } },
    ],
    rules: [[POL, 'En Minera Puquio, los cambios de turno se registran con el supervisor y RR.HH.'], [BP, 'Con la comunidad, una negativa sin alternativa tiene costo político.']],
    mirada: {
      ve: 'En la minería de altura, muchos trabajadores son también comuneros. Su vida comunal no es un capricho: es parte de la relación entre la empresa y el territorio. RR.HH. en campo busca cómo sí.',
      visual: { tipo: 'balanza', a: { t: '«No hay cambios»', items: ['La regla se mantiene', 'El supervisor contento'] }, b: { t: 'Cambio de turno ordenado', items: ['Yuri vota en su comunidad', 'La operación cubierta', 'Confianza con la comunidad'] } },
    },
  },
  {
    id: 'q3', t: '16:30', ch: 'documento', who: null, titulo: 'La lista del contratista', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>El Ing. Salas, de una contratista de movimiento de tierras, te manda la lista de las 8 personas que suben mañana. Antes de autorizar su ingreso en la garita, <mark class="clave">la revisas</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que impide autorizar el ingreso o debe corregirse.',
    doc: { t: 'Ingreso de personal contratista', sub: 'Movitierra S.A.C. · 8 trabajadores · ingreso mañana' },
    lines: [
      { id: 'sctr', t: 'SCTR (salud y pensión): «en trámite» para los 8.', bad: LEY, why: 'El SCTR es obligatorio en actividades de riesgo como la minería (Ley 26790 y D.S. 003-98-SA). Sin póliza vigente, nadie entra.' },
      { id: 'emo', t: 'Examen médico de altura: 6 de 8 aptos; 2 «por programar».', bad: LEY, why: 'Quien no tiene su evaluación médica de aptitud no puede subir a trabajar en altura.' },
      { id: 'turno', t: 'Turno: 21 días de trabajo y 3 de descanso, 12 horas diarias.', bad: LEY, why: 'En jornadas atípicas, el promedio del ciclo no puede superar la jornada máxima (D.S. 007-2002-TR). 21 × 12 horas con 3 de descanso la supera.' },
      { id: 'induccion', t: 'Inducción de seguridad: programada para el día de llegada.' },
      { id: 'epp', t: 'EPP entregado por la contratista: casco, botas, lentes, respirador.' },
      { id: 'planilla', t: 'Los 8 figuran en la planilla electrónica de la contratista.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Autorizas la lista. Mañana subirán 8 personas sin seguro vigente y con un turno que la ley no permite.' : `Le marcas ${hitsLey} problemas al Ing. Salas. Percy, al leer tu correo, solo responde: «Así es».`,
      flags: missLey ? [] : ['sctr_detectado'], rel: { contratista: missLey ? 1 : -1 },
      cartera: { contratistas: missLey ? 'Ingreso autorizado' : `Ingreso observado: ${hitsLey} problemas` },
      pro: { ok: 'Revisar a los contratistas protege a sus trabajadores y a la empresa principal.', risk: 'Si algo le pasa a un trabajador de la contratista, la minera puede responder solidariamente.', info: 'Pide copia de la póliza, no la palabra «en trámite».' },
      kusi: missLey ? ['preocupado', 'Sin seguro, a cuatro mil metros…'] : ['celebra', '¡Garita bien cuidada!'],
    }),
    rules: [[LEY, 'SCTR obligatorio en actividades de riesgo (Ley 26790 y D.S. 003-98-SA).'], [LEY, 'Jornadas atípicas: el promedio del ciclo no puede superar la jornada máxima (D.S. 007-2002-TR).'], [LEY, 'Tercerización: responsabilidad solidaria de la empresa principal en ciertos supuestos (Ley 29245).']],
    mirada: {
      ve: 'En una mina, la mitad de las personas no son de tu planilla, pero sí de tu responsabilidad. Revisar seguros, exámenes y jornadas de los contratistas es cuidar a gente que, si algo le pasa, también es «tu gente».',
      visual: { tipo: 'cambio', titulo: 'De «en trámite» a listo para subir', pares: [['SCTR en trámite', 'Póliza vigente con copia'], ['2 exámenes por programar', '8 de 8 aptos para altura'], ['21 × 3 con 12 horas', 'Ciclo cuyo promedio respete el máximo legal']] },
      normas: [{ ley: 'Ley 26790 y D.S. 003-98-SA, SCTR', dice: 'Las empresas que realizan actividades de riesgo deben contratar el Seguro Complementario de Trabajo de Riesgo para sus trabajadores, de salud y de pensiones.', practica: '«En trámite» no cubre un accidente de mañana.' }],
    },
  },
  {
    id: 'q4', t: '17:10', ch: 'presencial', who: 'contratista', titulo: '«Mientras se tramita»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Garita de ingreso', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>El Ing. Salas llega a la garita con el casco bajo el brazo.</p><p>«Ingeniera, el SCTR sale el jueves, seguro. Si mañana no suben mis 8, se me para el frente y la minera me pone penalidad. <mark class="clave">Déjelos subir mientras se tramita</mark>, yo me hago responsable.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No autorizar el ingreso hasta que haya póliza vigente, y ayudarlo a hablar con Operaciones para reprogramar el frente.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 6, confianza: 1 }, rel: { contratista: -1, percy: 1 }, flags: ['sctr_ok'],
          out: 'El Ing. Salas llama a su aseguradora delante de ti. La póliza sale el miércoles por la tarde. El frente se retrasa un día, no una vida.',
          pro: { ok: 'No negocias la vida, pero ayudas a resolver el problema operativo.', risk: 'El contratista y Operaciones estarán molestos un día.', info: 'Avisa a Operaciones con anticipación: así la decisión no te cae solo a ti.' },
          kusi: ['animo', 'Un día de retraso no es una vida.'] } },
      { id: 'b', label: 'Dejarlos subir: el ingeniero se hace responsable por escrito, el seguro sale en tres días y el frente no se puede parar.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -7 }, rel: { contratista: 1 }, flags: ['sctr_cede'],
          out: 'Firma una carta de «responsabilidad». Mañana, 8 personas trabajarán con maquinaria pesada sin seguro de riesgo.',
          pro: { ok: 'El frente avanza.', risk: 'Una carta no reemplaza un seguro obligatorio. Si alguien se accidenta, la carta no paga su tratamiento.' },
          kusi: ['preocupado', 'Una carta no es un seguro…'] } },
    ],
    rules: [[LEY, 'Sin SCTR vigente, un trabajador no debe realizar actividades de riesgo.']],
    mirada: {
      ve: '«Yo me hago responsable» es una frase que en minería suele valer menos que el papel en que se firma. El SCTR existe porque los accidentes ocurren justamente cuando nadie los espera.',
      visual: { tipo: 'linea', titulo: 'Lo que pasó con los 8 de Movitierra', hitos: [['Lunes', 'Ingreso observado'], ['Martes', 'Llamada a la aseguradora'], ['Miércoles', 'Póliza vigente'], ['Jueves', 'Suben con seguro']] },
    },
  },
  {
    id: 'q5', t: '19:30', ch: 'presencial', who: 'percy', titulo: 'Cena en el campamento', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del campamento', show: ['confianza', 'calidad'],
    body: () => `<p>Cenas con Percy en el comedor. Afuera, la temperatura bajó a dos grados. En la mesa de al lado, unos operadores se quejan del arroz.</p><p>«¿Y? <mark class="clave">¿Qué te llevas de tu primer día aquí arriba?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Lo de Yuri, lo del contratista y lo que escuchas del comedor.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { percy: 1 },
          out: 'Percy asiente: «Y lo del comedor, apúntalo. Mañana te va a explotar en la cara». Mira la mesa de al lado. «Ya está empezando».', kusi: ['feliz', 'Escuchar el comedor también es RR.HH.'] } },
      { id: 'b', label: 'Que te duele la cabeza y no entiendes cómo se vive aquí.',
        res: { q: 'aceptable', fx: { confianza: 1 },
          out: 'Percy se ríe: «Es el soroche. Toma agua y duerme. Mañana lo ves distinto». No le cuentas lo del contratista.', kusi: ['pensando', 'El soroche pasa… lo del SCTR hay que contarlo.'] } },
    ],
    mirada: { ve: 'En una operación remota, las primeras señales de un conflicto se escuchan en el comedor. Una generalista de campo aprende a oírlas antes de que se conviertan en paralización.' },
  },
];
