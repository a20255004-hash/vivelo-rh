// Gerente/a de Gestión Humana · Capítulo 2 · «Tu equipo» · Semana 1, martes.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida, el equipo de Gestión Humana y el sindicato de enfermería.
// Normas citadas (textos oficiales en docs/normas/txt):
// - Ley 29733 (Protección de Datos Personales), art. 17: confidencialidad de quienes tratan datos personales.
// - D.S. 003-97-TR, art. 29 a): es nulo el despido por afiliación sindical o participación en actividades sindicales.
// - D.S. 003-97-TR, art. 48, ya citado en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'Tu equipo', dia: 'Semana 1, martes', foto: 'assets/foto2/reunion-circulos.webp',
  lugar: 'Grupo Vida · Oficina corporativa de San Isidro',
  inicio: '06:50', fin: '19:30', cierreHora: '19:10',
  apertura: 'Martes. A las 6:50, antes de salir de casa, Silvia te manda una captura: el correo de la doctora Rossi circula en un grupo de WhatsApp de enfermeras, con un texto encima: «Van a botar a 300». Tu reunión de jefaturas es a las 8.', boton: 'Ir a la oficina',
  kusi: 'Hoy lideras a quienes lideran. No necesitan que pienses por ellos: necesitan que piensen juntos.',
  lead: 'Ordenaste una reunión difícil, pusiste criterios donde había trincheras, enfrentaste una filtración sin cazar culpables, armaste el plan de tu equipo y le respondiste a Nora sin mentirle.',
  reflexion: '¿Qué necesita una jefatura de su gerente cuando tiene miedo por su propia área?',
  siguiente: { n: 3, titulo: 'Los números', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Reducción de costos del 10 %', j: 'Directorio', d: 0, e: 'Faltan 9 días' },
  { id: 'equipo', p: 'Tus jefaturas', j: 'Gestión Humana', d: 0, e: 'Reunión a las 8' },
  { id: 'filtracion', p: 'Correo filtrado', j: 'Gestión Humana', d: 0, e: 'Circula en grupos de enfermería' },
  { id: 'datos', p: 'Costos laborales', j: 'Jorge Lazo · Compensaciones', d: 0, e: 'En proceso' },
  { id: 'sindicato', p: 'Sindicato de enfermería', j: 'Silvia Quispe · Relaciones Laborales', d: 0, e: 'Inquieto' },
];

export const FUTURO = {
  equipo_criterios: ['Tu equipo tiene tres criterios comunes para decidir.', 'Los usarás para defender tu propuesta.'],
  equipo_lineal: ['Le pediste a cada jefatura un 10 % de su área.', 'Cada una defenderá su trinchera.'],
  filtracion_comunicada: ['Respondiste la filtración con información, no con una cacería.', 'Las jefas de enfermería saben qué es verdad y qué no.'],
  filtracion_cazada: ['Buscaste a quien filtró el correo.', 'En las clínicas se comenta que Gestión Humana «busca soplones».'],
  plan_equipo: ['Tu equipo tiene un plan de diez días con responsables.', 'Cada jefatura sabe qué entrega y cuándo.'],
  jorge_escuchado: ['Jorge te contó su miedo y lo escuchaste.', 'Trabajará el doble para el miércoles.'],
  nora_verdad: ['Le dijiste a Nora lo que sabías y lo que no.', 'Ella lo recordará el jueves.'],
  nora_evasiva: ['Le dijiste a Nora que «no hay nada».', 'Cuando sepa la verdad, no volverá a creerte.'],
};

export const CHATS = {
  jefaturas: { n: 'GH · Jefaturas', sub: 'Jorge, Silvia, Mariela y tú', c: '#0F2A3D' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
  nora: { n: 'Lic. Nora Huamán', sub: 'Sindicato de enfermería', who: 'sindicato' },
  silvia: { n: 'Silvia Quispe', sub: 'Jefa de Relaciones Laborales', c: '#8A5A2B' },
  mariela: { n: 'Mariela Tang', sub: 'Jefa de Desarrollo y Capacitación', c: '#2E7D7A' },
  jefasenf: { n: 'Jefas de Enfermería · 5 clínicas', sub: 'Coordinación con Gestión Humana', c: '#B83B5E' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'silvia', t: '06:50', de: 'Silvia', txt: '[captura] «VAN A BOTAR A 300 😡 compartan». Esto está en el grupo «Enfermería Vida Unida». Tiene 900 miembros.' },
  { chat: 'gg', t: '07:15', de: 'Fernando', txt: 'La doctora vio la captura. Está furiosa. Quiere saber quién filtró.' },
  { chat: 'mariela', t: '07:40', de: 'Mariela', txt: '¿Es verdad que capacitación es lo primero que se va? Pregunto para saber si sigo armando el programa de inducción 😔' },
  { chat: 'jefasenf', t: '11:30', de: 'Lic. Rosa Villanueva (Los Olivos)', txt: 'Gracias por aclarar. Aquí las chicas estaban llorando en el cambio de turno.', si: 'filtracion_comunicada' },
  { chat: 'jefasenf', t: '11:30', de: 'Lic. Rosa Villanueva (Los Olivos)', txt: 'Nadie nos dice nada y ahora resulta que preguntan quién habló. Qué tal.', si: 'filtracion_cazada' },
  { chat: 'jorge', t: '18:05', de: 'Jorge', txt: 'Mañana a las 10 te tengo horas extra por clínica y turno. Ya vi algo raro en Los Olivos.', si: 'jorge_escuchado' },
  { chat: 'nora', t: '19:20', de: 'Nora', txt: 'Gracias por no mentirme. Igual el jueves tenemos asamblea.', si: 'nora_verdad' },
  { chat: 'nora', t: '19:20', de: 'Nora', txt: 'Ok.', si: 'nora_evasiva' },
];

export const CORREOS = [
  { t: '07:20', de: 'Dra. Carmen Rossi · Presidencia del Directorio', para: 'Gerencia General; Gerencia de Gestión Humana', asunto: 'Filtración', html: '<p>Un correo confidencial del directorio está en grupos de WhatsApp de enfermeras. Exijo saber quién lo reenvió. Gestión Humana se encarga.</p><p>C. Rossi</p>' },
  { t: '16:10', de: 'Sistemas · Grupo Vida', para: 'Gerencia de Gestión Humana', asunto: 'Re: registro de reenvíos', html: '<p>Podemos revisar los registros de reenvío del correo corporativo de los destinatarios originales, si usted lo autoriza por escrito y con la base de la política de uso de recursos. No revisamos WhatsApp personales.</p>', si: 'filtracion_cazada' },
];

export const QUIZ = [
  { q: 'Tus tres jefaturas defienden visiones opuestas. ¿Qué te ayuda más a decidir?', ops: ['Elegir la del que habla más fuerte', 'Acordar criterios comunes antes de discutir medidas', 'Pedir 10 % a cada área', 'Decidir sola sin escucharlas'], ok: 1, por: 'Los criterios compartidos convierten una pelea de áreas en una conversación sobre qué importa más.' },
  { q: 'Un correo confidencial se filtró a un grupo de WhatsApp. ¿Qué haces primero?', ops: ['Buscar al culpable', 'Corregir la información falsa con hechos y canales oficiales', 'Prohibir los grupos de WhatsApp', 'No decir nada'], ok: 1, por: 'Lo urgente es que las personas tengan información verdadera; la cacería puede esperar y casi siempre empeora el clima.' },
  { q: 'Despedir a una enfermera por su participación en el sindicato es…', ops: ['Legal si hay crisis', 'Un despido nulo (D.S. 003-97-TR, art. 29 a)', 'Una falta grave', 'Decisión del directorio'], ok: 1, por: 'El art. 29 a) declara nulo el despido por afiliación sindical o participación en actividades sindicales.' },
  { q: 'La secretaria general del sindicato te pregunta si habrá despidos. Aún no hay decisión. ¿Qué le dices?', ops: ['Que no habrá ninguno', 'Que no hay nada', 'Lo que sabes y lo que no, y cuándo le darás información', 'Que no puedes hablar con ella'], ok: 2, por: 'Prometer lo que no controlas o negar lo evidente destruye la confianza que necesitarás para negociar.' },
  { q: 'Jorge, tu jefe de Compensaciones, tiene miedo de que tercericen su área. ¿Qué es lo más útil?', ops: ['Decirle que no se preocupe', 'Escucharlo, ser honesta sobre lo que sabes y darle un rol claro en la solución', 'Ignorarlo: hay cosas más urgentes', 'Prometerle que su puesto está asegurado'], ok: 1, por: 'Las jefaturas con miedo protegen su área; las que tienen un rol, buscan soluciones.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '07:20', ch: 'documento', who: null, titulo: 'La agenda de las 8', banner: 'assets/esc/escritorio.webp', lugar: 'Tu oficina · piso 7', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>${F.has('doris_cuidada') ? 'Doris llegó a las 7 con las carpetas y un café para ti.' : 'Doris tiene ojeras: anoche se quedó hasta tarde.'} En la pizarra escribes la agenda. Con la filtración encima, la reunión puede convertirse en una pelea de áreas o en el inicio de un plan.</p><p><mark class="clave">Ordena la reunión</mark> antes de que entren.</p>`,
    type: 'secuencia', prompt: 'Ordena los momentos de la reunión de jefaturas. Usa las flechas.', boton: 'Escribirla en la pizarra',
    items: [
      { id: 'ctx', t: 'Contar lo que se sabe del pedido, lo que no y la filtración de esta mañana', por: 'Todos parten de la misma información.' },
      { id: 'esc', t: 'Escuchar a cada jefatura: qué ve desde su área y qué le preocupa', por: 'Antes de decidir, escuchas.' },
      { id: 'cri', t: 'Acordar criterios comunes para evaluar cualquier medida', por: 'Los criterios ordenan la discusión.' },
      { id: 'tar', t: 'Repartir tareas con responsable y fecha', por: 'Sin responsable, no hay tarea.' },
      { id: 'res', t: 'Acordar qué se comunica, quién y por qué canal', por: 'Con un rumor en la calle, esto no puede faltar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['agenda_clara'], cartera: { equipo: q === 'riesgosa' ? 'Reunión sin orden' : 'Reunión con agenda clara' },
        out: q === 'buena' ? 'La pizarra queda con cinco líneas. Silvia entra, la lee y asiente: «Por fin alguien que no empieza repartiendo recortes».' : 'La agenda tiene sentido a medias. Ya verás qué se desordena.',
        pro: { ok: 'Escuchar antes de decidir y decidir con criterios evita que la reunión sea una competencia de áreas.', info: 'Deja la comunicación para el final: allí se acuerda qué sale de la sala.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Agenda con cabeza. ¡Bacán!' : 'El orden también lidera.'],
      };
    },
    mirada: {
      ve: 'Una reunión de crisis con jefaturas tiene un riesgo: que cada una llegue a defender su presupuesto. El orden de la conversación (contexto, escucha, criterios, tareas, comunicación) es una herramienta de liderazgo, no un trámite.',
      visual: { tipo: 'flujo', titulo: 'La reunión de las 8', pasos: ['Contexto', 'Escucha', 'Criterios', 'Tareas', 'Comunicación'] },
    },
  },
  {
    id: 'b2', t: '08:30', ch: 'presencial', who: 'equipo', titulo: 'Tres trincheras', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala de reuniones del piso 7', show: ['confianza', 'personas', 'calidad'],
    body: () => `<p>Jorge Lazo, analítico, con su laptop abierta: «Congelemos aumentos y bajemos horas extra a la mala. Es lo único que mueve la aguja». Silvia Quispe, 58 años, puneña, treinta en el grupo: «Si tocan enfermería, Nora para las cinco clínicas. Yo la conozco desde que era técnica». Mariela Tang, 31, jefa de Desarrollo: «La inducción de enfermeras nuevas es lo único que está bajando la rotación. Si la cortan, lo pagamos doble».</p><p>Los tres te miran. <mark class="clave">¿Cómo decides entre ellos?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer tres criterios para evaluar toda medida (seguridad del paciente, legalidad y ahorro sostenible) y pedir que cada uno analice una medida de otra área.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 4, personas: 2 }, rel: { equipo: 1 }, flags: ['equipo_criterios'], cartera: { equipo: 'Criterios comunes acordados' },
          out: 'Hay un silencio incómodo. Luego Silvia se ríe: «¿Yo revisando lo de capacitación?». Mariela le pasa su presentación. Por primera vez en la mañana, nadie defiende lo suyo.',
          pro: { ok: 'Los criterios comunes y el cruce de áreas rompen las trincheras.', risk: 'Es más lento que decidir tú sola.', info: 'Escribe los tres criterios en la primera página de la propuesta.' },
          kusi: ['celebra', '¡Tres trincheras, una mesa!'] } },
      { id: 'b', label: 'Pedir a cada jefatura que traiga su propuesta para recortar 10 % de su área.',
        res: { q: 'riesgosa', fx: { calidad: -3, confianza: 1 }, rel: { equipo: 0 }, flags: ['equipo_lineal'], cartera: { equipo: 'Cada área recorta su 10 %' },
          out: 'Todos asienten rápido. Es justo, parece. Pero cada uno sale a buscar qué sacrificar de lo suyo sin mirar lo de los demás, y Mariela sale pálida: su área es casi solo capacitación.',
          pro: { ok: 'Es simple y parece equitativo.', risk: 'El recorte lineal castiga igual lo que cuesta mucho y lo que ahorra a futuro.' },
          kusi: ['preocupado', 'Parejo no siempre es justo.'] } },
      { id: 'c', label: 'Darle la razón a Jorge: los números mandan, y él es el que tiene los datos.',
        res: { q: 'aceptable', fx: { calidad: 1, personas: -3 }, rel: { equipo: 1 },
          out: 'Jorge sonríe. Silvia cierra su cuaderno. Mariela no vuelve a hablar en toda la reunión.',
          pro: { ok: 'Priorizas los datos.', risk: 'Datos sin la mirada de relaciones laborales y desarrollo pueden llevarte directo a una huelga.' },
          kusi: ['pensando', 'Los números necesitan contexto.'] } },
    ],
    rules: [[BP, 'Antes de discutir medidas, acuerda los criterios con los que las vas a evaluar.']],
    mirada: {
      ve: 'Liderar líderes no es arbitrar quién gana. Cada jefatura tiene razón en algo: Jorge ve el costo, Silvia ve el conflicto y Mariela ve el futuro. Tu trabajo es construir el marco donde las tres miradas se crucen.',
      visual: { tipo: 'balanza', a: { t: 'Recorte parejo por área', items: ['Rápido', 'Parece justo', 'Cada área defiende lo suyo'] }, b: { t: 'Criterios comunes', items: ['Más lento', 'Seguridad del paciente', 'Legalidad', 'Ahorro sostenible'] } },
    },
  },
  {
    id: 'b3', t: '10:15', ch: 'llamada', who: null, titulo: 'La filtración', banner: 'assets/foto/llamada.webp', show: ['etica', 'confianza', 'personas'],
    body: () => `<p>La doctora exige saber quién filtró el correo. Antes de decidir qué hacer, llamas para entender qué pasó y cómo está la gente.</p>`,
    type: 'calls',
    calls: [['Silvia Quispe', 'Contesta: Relaciones Laborales', 'Jefa, el grupo de las enfermeras no es del sindicato, es de las chicas. Lo que les duele no es el correo: es enterarse así.'], ['Lic. Rosa Villanueva', 'Contesta: jefa de enfermería de Los Olivos', 'Licenciada, aquí dos chicas del turno noche ya preguntaron por su liquidación. ¿Qué les digo? No sé nada.'], ['Rodrigo Benavides', 'Contesta: Finanzas', 'Mira, uno de mis analistas reenvió el correo a su esposa, que es enfermera. Ya hablé con él. No fue con mala intención.'], ['Fernando Prado', 'No contesta: está con la doctora']],
    prompt: 'Ya sabes casi seguro de dónde salió. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Primero, corregir el rumor con las jefas de enfermería. Lo del analista lo ve Rodrigo con la política de uso de información, sin hacerlo público.',
        res: { q: 'buena', fx: { personas: 4, etica: 3, confianza: 2 }, flags: ['filtracion_comunicada'], cartera: { filtracion: 'Rumor corregido; el origen lo maneja Finanzas' },
          out: 'Le respondes a la doctora: «Se identificó el origen, Finanzas lo maneja. Lo urgente ahora es que 900 enfermeras sepan la verdad». Ella no responde. Pero no insiste.',
          pro: { ok: 'Atiendes primero el daño, que es la desinformación.', risk: 'La doctora quería un nombre.', info: 'Sé clara con Rodrigo: lo que ocurre con su analista debe ser proporcional y documentado.' },
          kusi: ['animo', 'Primero la gente, después el expediente.'] } },
      { id: 'b', label: 'Pedir a Sistemas que revise los reenvíos de todos los que recibieron el correo, para darle a la doctora un informe con nombres.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: 2, etica: -2 }, rel: { directorio: 1 }, flags: ['filtracion_cazada'], cartera: { filtracion: 'Investigación de reenvíos abierta' },
          out: 'La doctora responde: «Así me gusta». A las 11 ya se comenta en las clínicas que Gestión Humana «busca soplones». Las enfermeras siguen sin saber si las van a despedir.',
          pro: { ok: 'Respondes a lo que pidió la doctora.', risk: 'Mientras buscas culpables, el rumor crece y la desconfianza también.' },
          kusi: ['preocupado', '¿Y quién apaga el incendio?'] } },
    ],
    rules: [[LEY, 'Quienes tratan datos e información de la empresa tienen deberes de confidencialidad (Ley 29733, art. 17), pero la respuesta debe ser proporcional.']],
    mirada: {
      ve: 'En una filtración hay dos problemas: quién la provocó y qué daño está haciendo. El segundo es urgente; el primero es importante. Una gerencia que solo busca culpables deja que el rumor gobierne las clínicas.',
      visual: { tipo: 'embudo', titulo: 'Cómo creció el rumor', niveles: [['Destinatarios del correo', 4], ['Reenvío del analista', 1], ['Grupo de WhatsApp', 900], ['Enfermeras con miedo', 1200]] },
    },
  },
  {
    id: 'b4', t: '11:10', ch: 'whatsapp', who: null, titulo: 'Para las jefas de enfermería', banner: 'assets/3d/scenes/hospital.webp', show: ['personas', 'confianza', 'cumplimiento'],
    body: () => `<p>Las cinco jefas de enfermería tienen el cambio de turno a las 13:00. Lo que les digas ahora es lo que repetirán frente a 600 enfermeras y técnicas.</p><p><mark class="clave">Tiene que ser verdad, corto y repetible</mark>.</p>`,
    type: 'compose', enviaA: 'jefasenf', para: 'Para: Jefas de Enfermería · 5 clínicas', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'El hecho', ops: [
        { id: 'h1', t: 'El directorio pidió a todas las gerencias propuestas para reducir costos en 2027. Es cierto.', ok: true, por: 'Reconoces lo verdadero del rumor.' },
        { id: 'h2', t: 'Ese correo es falso, no hagan caso.', ok: false, por: 'El correo es real. Si niegas lo evidente, pierdes credibilidad.' },
      ] },
      { id: 'no', t: 'Lo que no es cierto', ops: [
        { id: 'n1', t: 'No hay ninguna lista de despidos ni decisión tomada. Nadie del turno noche debe pedir su liquidación.', ok: true, por: 'Desmientes lo falso con precisión.' },
        { id: 'n2', t: 'Les garantizo que no habrá ningún despido.', ok: false, por: 'Prometes algo que no depende solo de ti.' },
      ] },
      { id: 'canal', t: 'Cómo seguir', ops: [
        { id: 'c1', t: 'Cualquier decisión se comunicará primero a ustedes y al sindicato. Dudas, a mí directamente.', ok: true, por: 'Das un canal y un orden.' },
        { id: 'c2', t: 'Por favor, que nadie comente en los grupos.', ok: null, por: 'Comprensible, pero no se puede controlar. Mejor da un canal.' },
      ] },
    ],
    res: sel => {
      const malas = ['h2', 'n2'].filter(x => Object.values(sel).includes(x)).length;
      const buenas = ['h1', 'n1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 2, confianza: q === 'buena' ? 3 : q === 'riesgosa' ? -3 : 1, etica: sel.no === 'n2' ? -2 : 1 },
        flags: q === 'riesgosa' ? ['promesa_falsa'] : [],
        out: q === 'buena' ? 'Las cinco jefas confirman. A la 1:15, la licenciada Villanueva te manda un audio: el turno noche se fue a dormir más tranquilo.' : q === 'riesgosa' ? 'Las jefas repiten tu mensaje. Una de ellas lo guarda en captura: si algo cambia, lo sacará.' : 'El mensaje ayuda, aunque los grupos siguen hirviendo.',
        pro: { ok: 'Verdad, precisión y canal: así se desactiva un rumor.', risk: 'Negar lo real o prometer lo que no controlas se vuelve en tu contra.', info: 'Las jefas de enfermería son tu mejor canal hacia las clínicas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Verdad corta y repetible. ¡Así se apaga un rumor!' : 'Cuidado con lo que prometes.'],
      };
    },
    rules: [[BP, 'Ante un rumor: reconoce lo verdadero, desmiente lo falso con precisión y da un canal.']],
    mirada: {
      ve: 'En crisis, la gente no necesita que le digas que todo estará bien; necesita saber qué es verdad hoy y por dónde llegará la información mañana. Una promesa que no controlas es una deuda de confianza.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje a las jefas', txt: 'El pedido del directorio es real. No hay lista de despidos ni decisión tomada. Cualquier decisión llegará primero a ustedes y al sindicato.' },
    },
  },
  {
    id: 'b5', t: '15:00', ch: 'documento', who: null, titulo: 'El plan del equipo', banner: 'assets/foto/plano-equipo.webp', lugar: 'Sala de reuniones del piso 7', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>${F.has('equipo_criterios') ? 'Con los tres criterios en la pizarra,' : 'Con la reunión de la mañana todavía en el aire,'} armas el plan de los próximos nueve días. Tienes cuatro personas y un directorio el jueves de la próxima semana.</p><p><mark class="clave">Elige qué entra en el plan</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del plan de equipo.', boton: 'Guardar el plan',
    bloques: [
      { id: 'quien', t: 'Quién hace qué', n: 2, ops: [
        { id: 'q1', t: 'Jorge: costo de horas extra, rotación y ausentismo por clínica y turno, para el miércoles.', ok: true },
        { id: 'q2', t: 'Silvia: mapa del conflicto con el sindicato y propuesta de mesa de diálogo, para el jueves.', ok: true },
        { id: 'q3', t: 'Mariela: lista de lo que se puede cortar en capacitación, para mañana.', ok: false, por: 'Le pides que desarme su área sin antes medir qué le aporta al negocio. Mejor: que mida el costo de no capacitar.' },
      ] },
      { id: 'como', t: 'Cómo decidimos', n: 2, ops: [
        { id: 'c1', t: 'Toda medida pasa por los tres criterios antes de entrar a la propuesta.', ok: true },
        { id: 'c2', t: 'Reunión corta de seguimiento cada día a las 8:30, de pie, quince minutos.', ok: true },
        { id: 'c3', t: 'La gerente decide sola el miércoles y les informa.', ok: false, por: 'Si decides sola, tu equipo no defenderá la propuesta contigo.' },
      ] },
      { id: 'no', t: 'Lo que no hacemos', n: 2, ops: [
        { id: 'n1', t: 'No se arma ninguna lista de personas «prescindibles» sin criterio ni sustento.', ok: true, por: 'Una lista así, si se filtra, incendia las clínicas y puede ser discriminatoria.' },
        { id: 'n2', t: 'No se negocia con el sindicato por separado: todo pasa por Silvia y por ti.', ok: true },
        { id: 'n3', t: 'No se informa nada a las clínicas hasta el directorio.', ok: false, por: 'Diez días de silencio alimentan el rumor que ya controlaste hoy.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0, tiempo: 1 },
        flags: q === 'riesgosa' ? [] : ['plan_equipo'], cartera: { equipo: q === 'riesgosa' ? 'Plan con huecos' : 'Plan de equipo de diez días' },
        out: q === 'buena' ? 'Imprimes el plan en una hoja y lo pegas junto a la pizarra. Mariela lo fotografía. Jorge pone una alarma para las 8:30.' : 'El plan existe, aunque deja a alguien fuera o abre una puerta que convenía cerrar.',
        pro: { ok: 'Un plan con responsables, una forma de decidir y límites claros convierte la crisis en trabajo.', risk: 'Una lista de «prescindibles» es la forma más rápida de perder la confianza de 3,000 personas.', info: 'La reunión de pie diaria evita que los problemas esperen al viernes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Plan con nombres y fechas!' : 'Algo en el plan no cuadra.'],
      };
    },
    mirada: {
      ve: 'Un plan de equipo en crisis dice tres cosas: quién hace qué, cómo se decide y qué no se hace. La tercera es la que más protege: los límites que pone la gerencia son los que su equipo puede invocar cuando alguien los presione.',
      visual: { tipo: 'linea', titulo: 'Los nueve días que quedan', hitos: [['Miércoles', 'Costos ocultos'], ['Jueves', 'Mapa del conflicto'], ['Viernes', 'Capacitación: costo de no hacerla'], ['Lunes', 'Revisión con Fernando'], ['Miércoles', 'Propuesta final'], ['Jueves', 'Directorio']] },
    },
  },
  {
    id: 'b6', t: '17:30', ch: 'presencial', who: 'equipo', titulo: 'Jorge se queda', banner: 'assets/foto/cafe.webp', lugar: 'Tu oficina · piso 7', show: ['personas', 'confianza'],
    body: () => `<p>Cuando todos se van, Jorge se queda con la laptop bajo el brazo. Cierra la puerta.</p><p>«Te voy a ser sincero. En el piso 9 se dice que Compensaciones se puede tercerizar. Tengo dos hijos en el colegio y un crédito hipotecario. <mark class="clave">¿Mi área está en la lista?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«No hay ninguna lista. No te puedo prometer nada que no controlo, pero sí esto: si algo cambia en tu área, lo sabrás por mí y antes que nadie. Y ahora te necesito más que nunca.»',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { equipo: 1 }, flags: ['jorge_escuchado'],
          out: 'Jorge respira. «Ok. Entonces mañana te traigo algo que nadie ha visto.» Se va con la laptop abierta.',
          pro: { ok: 'Eres honesta sin prometer lo que no controlas, y le das un rol.', info: 'Las jefaturas con miedo se encierran en su área: devuélveles un propósito.' },
          kusi: ['animo', 'Honestidad y un rol. ¡Bien!'] } },
      { id: 'b', label: '«Tranquilo, tu puesto está asegurado. Te lo garantizo.»',
        res: { q: 'aceptable', fx: { personas: 2, etica: -2 }, rel: { equipo: 1 }, flags: ['promesa_jorge'],
          out: 'Jorge sonríe y te da la mano. Tú te quedas pensando en que esa decisión, en verdad, la toma Fernando.',
          pro: { ok: 'Lo calmas hoy.', risk: 'Prometiste algo que no controlas. Si cambia, la confianza se rompe del todo.' },
          kusi: ['pensando', '¿Y si no depende de ti?'] } },
      { id: 'c', label: '«Jorge, ahora no es momento de pensar en uno mismo.»',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2 }, rel: { equipo: -1 },
          out: 'Jorge asiente en silencio y se va. Al día siguiente, su análisis llega puntual y sin un solo comentario adicional.',
          pro: { ok: 'Mantienes el foco.', risk: 'Una jefatura con miedo y sin escucha trabaja a la defensiva.' },
          kusi: ['triste', 'Él también es una de las 3,000 personas.'] } },
    ],
    mirada: {
      ve: 'Las jefaturas también son trabajadores con miedo. Una gerencia que solo exige resultados en la crisis pierde lo más valioso que tiene: gente que le dice la verdad antes de que sea tarde.',
    },
  },
  {
    id: 'b7', t: '19:00', ch: 'llamada', who: 'sindicato', titulo: 'Nora llama', banner: 'assets/foto/frente-a-frente.webp', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>Lic. Nora Huamán, secretaria general del sindicato de enfermería, 22 años en la clínica de San Juan de Lurigancho. Se oye el ruido de la emergencia de fondo.</p><p>«Licenciada, buenas noches. ${F.has('filtracion_cazada') ? 'Me dicen que están buscando a quién reenvió el correo. Mal comienzo.' : 'Vi su mensaje a las jefas. Se agradece.'} Voy a ser directa: <mark class="clave">¿van a despedir enfermeras, sí o no?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: '«Hoy no hay ninguna decisión ni lista. Estamos buscando primero los costos que no requieren despedir a nadie. Antes de que se decida algo que afecte a enfermería, usted lo va a saber por mí.»',
        res: { q: 'buena', fx: { confianza: 3, etica: 3 }, rel: { sindicato: 1 }, flags: ['nora_verdad'], cartera: { sindicato: 'Nora sabe lo mismo que tú' },
          out: '«Le creo a medias, licenciada. Que es más de lo que le creía al anterior.» Te avisa que el jueves tienen asamblea.',
          pro: { ok: 'Dices lo que sabes, lo que no y te comprometes con algo que sí controlas: el orden de la información.', risk: 'Nora tomará nota de tu promesa.', info: 'Cuéntale a Silvia la conversación esta misma noche.' },
          kusi: ['animo', 'Verdad a medias para ella; verdad completa de tu lado.'] } },
      { id: 'b', label: '«No hay nada, Nora. Es un rumor. Tranquilícelas.»',
        res: { q: 'riesgosa', fx: { confianza: -1, etica: -3 }, rel: { sindicato: -1 }, flags: ['nora_evasiva'], cartera: { sindicato: 'Nora sospecha' },
          out: '«Ok.» Cuelga. Nora tiene la captura del correo de la doctora. Sabe que algo hay.',
          pro: { ok: 'Evitas el tema hoy.', risk: 'Negar algo que la otra parte ya sabe es la forma más rápida de perder a tu interlocutora.' },
          kusi: ['preocupado', 'Ella ya leyó el correo.'] } },
      { id: 'c', label: '«No puedo hablar de esto con usted. Cualquier tema, por Relaciones Laborales y por escrito.»',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -2 }, rel: { sindicato: -1 }, flags: ['nora_formal'],
          out: '«Por escrito, entonces.» A las 21:00 llega un correo del sindicato pidiendo información formal sobre «el plan de reducción de personal».',
          pro: { ok: 'Cuidas el canal formal.', risk: 'Cerrar la puerta en una crisis empuja al sindicato a la medida de fuerza.' },
          kusi: ['pensando', 'Formal sí, frío no.'] } },
    ],
    rules: [[LEY, 'Es nulo el despido que tenga por motivo la afiliación sindical o la participación en actividades sindicales (D.S. 003-97-TR, art. 29 a).'], [BP, 'Con el sindicato, no prometas lo que no controlas ni niegues lo que ya sabe.']],
    mirada: {
      ve: 'La relación con un sindicato se construye en las conversaciones informales tanto como en la mesa. Nora no espera que le cuentes todo: espera que no le mientas. Esa diferencia decide si el jueves hay diálogo o medida de fuerza.',
      normas: [{ ley: 'D.S. 003-97-TR, art. 29 a)', dice: 'Es nulo el despido que tenga por motivo la afiliación a un sindicato o la participación en actividades sindicales.', practica: 'Cualquier medida de personal debe poder explicarse sin mirar quién está en el sindicato.' }],
    },
  },
];
