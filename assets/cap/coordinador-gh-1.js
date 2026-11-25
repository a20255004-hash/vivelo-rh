// Coordinador/a de Gestión Humana · Capítulo 1 · «Dos plantas» · Semana 1, lunes.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733, art. 2 num. 5 (la información de salud es dato sensible) y art. 7 (proporcionalidad).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 005-2012-TR (Reglamento de la Ley 29783), art. 33 b): el registro de exámenes médicos ocupacionales es obligatorio.
//   https://www.gob.pe/institucion/mtpe/normas-legales/
// - D.S. 007-2002-TR (TUO de la Ley de jornada), art. 8: turnos nocturnos rotativos «en lo posible».

export const CAP = {
  n: 1, titulo: 'Dos plantas', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/planta.webp',
  lugar: 'Lácteos del Altiplano · Planta y oficinas de Juliaca',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Juliaca, siete y media de la mañana. Hace dos grados, el cielo está limpísimo y por la avenida pasan los mototaxis con el plástico bajado. En la puerta de la planta huele a leche tibia.', boton: 'Pasar la credencial',
  kusi: 'Dos plantas, dos asistentes y un área que nadie miró de cerca. Hoy no arreglas nada: hoy miras. ¡Dale!',
  lead: 'Escuchaste a Mariela, revisaste el Excel de Nely, te acercaste a Yesenia sin imponerle nada, elegiste tus frentes de la semana y armaste tu primer diagnóstico.',
  reflexion: '¿Qué viste hoy que nadie te dijo, y qué te dijeron que todavía no has comprobado?',
  siguiente: { n: 2, titulo: 'Delegar', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'diagnostico', p: 'Diagnóstico del área', j: 'Tú · Mariela', d: 0, e: 'Para el viernes' },
  { id: 'planilla', p: 'Planilla de noviembre', j: 'Estudio Huanca & Asociados', d: 0, e: 'Preliminar el miércoles' },
  { id: 'ayaviri', p: 'Planta de Ayaviri', j: 'Ing. Freddy Choque · Yesenia', d: 0, e: 'Rotación alta' },
  { id: 'turnos', p: 'Queja del turno noche', j: 'Producción · Juliaca', d: 0, e: 'Carta sin responder' },
  { id: 'equipo', p: 'Tu equipo', j: 'Nely · Yesenia', d: 0, e: 'Sin reunión todavía' },
];

export const FUTURO = {
  diag_escucha: ['Empezaste preguntando antes de opinar.', 'Mariela confiará en tu diagnóstico del viernes.'],
  salud_detectada: ['Viste que el Excel compartido guarda diagnósticos médicos.', 'Volverá a aparecer en el capítulo 6.'],
  yesenia_respeto: ['Le pediste a Yesenia que te enseñe su cuaderno antes de cambiarlo.', 'Ella te abrirá la puerta de Ayaviri.'],
  yesenia_ignorada: ['Le pediste a Yesenia que pase todo a Excel para el viernes.', 'En Ayaviri ya dicen que «la de Juliaca viene a mandar».'],
  freddy_escuchado: ['Escuchaste a Freddy y le pusiste fecha a la conversación sobre su sueldo.', 'El jueves recordará que alguien lo tomó en serio.'],
  freddy_postergado: ['Le dijiste a Freddy que su sueldo no es tema tuyo.', 'El jueves sabrás por qué llamaba.'],
  diag_bueno: ['Tu diagnóstico separa lo que funciona, lo que duele y lo que vas a medir.', 'Será tu mapa durante las dos semanas.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  freddy: { n: 'Ing. Freddy Choque', sub: 'Jefe de la planta de Ayaviri', who: 'jefe' },
};

export const WSP = [
  { chat: 'equipo', t: '07:35', de: 'Nely', txt: 'Buenos días 🙂 Ya llegué. Le guardé la silla que no cojea.' },
  { chat: 'equipo', t: '07:52', de: 'Yesenia', txt: 'Buenos días. Aquí en Ayaviri está nevando un poquito. Bienvenida/o al área.' },
  { chat: 'mariela', t: '08:40', de: 'Mariela', txt: 'Hoy no te pido resultados. Te pido ojos. El viernes conversamos.' },
  { chat: 'yesenia', t: '11:20', de: 'Yesenia', txt: 'Le mando foto de la página de ingresos de octubre. Mi letra es clarita nomás 📒', si: 'yesenia_respeto' },
  { chat: 'yesenia', t: '11:25', de: 'Yesenia', txt: 'Ya. Para el viernes, dice. Como si aquí no hubiera nada más que hacer.', si: 'yesenia_ignorada' },
  { chat: 'freddy', t: '17:10', de: 'Freddy', txt: 'Gracias por escuchar. El miércoles en la tarde entonces. Es importante.', si: 'freddy_escuchado' },
  { chat: 'nely', t: '18:30', de: 'Nely', txt: '¿Mañana me dice qué hago primero? Es que siempre hago todo a la vez 😅' },
];

export const CORREOS = [
  { t: '07:40', de: 'Mariela Quispe', para: 'Coordinación de Gestión Humana', asunto: 'Bienvenida y lo que te encargo', html: '<p>Bienvenida/o a Lácteos del Altiplano. Somos 350: 220 en Juliaca (yogurt, leche y mantequilla) y 130 en Ayaviri (quesos y acopio de leche de los ganaderos de Melgar).</p><p>Gestión Humana nunca tuvo coordinación. Nely y Yesenia hicieron lo que pudieron, la planilla la calcula un estudio externo y yo atiendo lo urgente. Tu primer encargo: decirme el viernes cómo está el área de verdad.</p><p>Mariela</p>' },
  { t: '09:15', de: 'Mesa de partes · Producción Juliaca', para: 'Gestión Humana', asunto: 'Carta del turno noche (escaneada)', html: '<p>Adjuntamos la carta firmada por 14 operarios del turno noche de la línea de yogurt. Piden «que el turno día deje los equipos limpios como corresponde» y que alguien de Gestión Humana los escuche. Fue recibida hace nueve días.</p>' },
];

export const QUIZ = [
  { q: 'En tu primer día como coordinador/a, ¿qué conviene hacer primero?', ops: ['Cambiar los procesos que se ven mal', 'Preguntar, observar y verificar antes de proponer', 'Pedir a cada asistente un informe escrito', 'Esperar a que la gerencia te diga qué hacer'], ok: 1, por: 'Un diagnóstico empieza por entender cómo funciona hoy el área y por qué.' },
  { q: 'El Excel compartido del área tiene una columna con diagnósticos médicos. ¿Qué problema hay?', ops: ['Ninguno, si el archivo tiene clave', 'La salud es un dato sensible y no hace falta para gestionar la asistencia', 'Solo es un problema si alguien se queja', 'Que ocupa mucho espacio'], ok: 1, por: 'La información de salud es dato sensible (Ley 29733, art. 2 num. 5) y su uso debe ser proporcional a la finalidad (art. 7).' },
  { q: 'Una asistente lleva 22 años usando un cuaderno en lugar de Excel. ¿Qué haces primero?', ops: ['Le das un plazo para pasarlo todo', 'Le pides que te enseñe cómo lo usa y qué información guarda', 'Lo reemplazas sin decirle', 'Le asignas otra función'], ok: 1, por: 'Antes de cambiar un sistema, entiendes qué resuelve. El cuaderno puede ser la única memoria de la planta.' },
  { q: 'Según el TUO de la Ley de jornada, los turnos que incluyen horario nocturno…', ops: ['Están prohibidos en la industria', 'Deben ser rotativos en lo posible', 'Solo pueden ser voluntarios', 'No pagan diferente'], ok: 1, por: 'El art. 8 del D.S. 007-2002-TR dice que, en lo posible, los turnos nocturnos deben ser rotativos.' },
  { q: 'Un jefe de planta te llama para pedir que revises su sueldo. Llevas un día. ¿Qué es lo más sensato?', ops: ['Prometerle un aumento', 'Decirle que no es tu tema', 'Escucharlo, pedirle datos y ponerle fecha a una conversación con quien decide', 'Contarle cuánto ganan otros jefes'], ok: 2, por: 'No prometes lo que no decides, pero tampoco cierras la puerta a una señal que puede ser importante.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '07:45', ch: 'presencial', who: 'mariela', titulo: 'Mate de coca y una agenda', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Administración · Juliaca', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Mariela te espera con dos tazas de mate de coca y una agenda llena de flechas. Por la ventana se ve el patio de recepción: un camión cisterna descarga leche de Ayaviri.</p><p>«${n ? n + ', ' : ''}tengo quince minutos antes de mi reunión con el gerente general. <mark class="clave">Pregunta lo que quieras</mark>, pero elige bien.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Lo que no preguntes hoy, lo descubrirás después.',
    opts: [
      { id: 'duele', label: '¿Qué es lo que más le preocupa del área?', info: '«Ayaviri. Allá se nos va la gente: operarios que entran en marzo y en julio ya no están. Y Freddy, el jefe de planta, anda raro desde hace un mes.»' },
      { id: 'equipo', label: '¿Cómo trabajan Nely y Yesenia?', info: '«Nely es ordenadita, pero le da miedo preguntar. Yesenia tiene 22 años aquí y sabe la vida de cada trabajador de Ayaviri… en un cuaderno. Entre ellas casi no se hablan.»' },
      { id: 'exito', label: '¿Qué sería un buen resultado en dos semanas?', info: '«Que la planilla de noviembre salga bien y a tiempo, que sepamos cuánta gente se nos va y por qué, y que yo deje de ser la que resuelve todo lo de personal.»' },
      { id: 'estudio', label: '¿Cómo funciona la planilla?', info: '«Nely y Yesenia mandan el tareo al Estudio Huanca, el estudio calcula y yo apruebo. Nadie revisa en el medio. Siempre llega con las justas.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('exito') ? 3 : 1, tiempo: -1 }, rel: { mariela: picks.includes('duele') ? 1 : 0 }, flags: ['diag_escucha'],
      out: 'Mariela mira su reloj y se levanta: «Te dejé acceso a la carpeta del área. Ojo con lo que encuentres».',
      kusi: ['curioso', 'Ya sabes dónde le duele a tu jefa. Buen comienzo.'],
    }),
    mirada: {
      ve: 'Una coordinación nueva entra a un área que ya funciona, aunque sea a su manera. Las primeras preguntas no son para lucirse: son para saber qué espera tu jefa, qué le quita el sueño y cómo medirá tu trabajo.',
      visual: { tipo: 'flujo', titulo: 'Así se mueve hoy la planilla', pasos: ['Tareo en planta', 'Nely y Yesenia', 'Estudio Huanca', 'Mariela aprueba', 'Pago'], aqui: 1 },
    },
  },
  {
    id: 'a2', t: '09:30', ch: 'documento', who: null, titulo: 'El Excel de Nely', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Abres la carpeta compartida. El archivo se llama <i>PERSONAL_2026_ok_FINAL.xlsx</i> y tiene once pestañas. Nely lo actualiza cada semana y lo comparte con los supervisores de producción «para que sepan quién faltó».</p><p>Antes de proponer nada, revisas <mark class="clave">qué está bien y qué no</mark>.</p>`,
    type: 'flag', prompt: 'Marca las filas o columnas que tienen un problema legal o de calidad.',
    doc: { t: 'PERSONAL_2026_ok_FINAL.xlsx', sub: 'Pestaña «Juliaca» · 220 filas · compartido con 9 supervisores' },
    lines: [
      { id: 'diag', t: 'Columna «Motivo de falta»: «gastritis», «depresión», «control prenatal», «descanso por lumbalgia».', bad: 'ley', why: 'Es información de salud, un dato sensible, y los supervisores solo necesitan saber si la falta está justificada.' },
      { id: 'ayav', t: 'No hay pestaña de Ayaviri: «eso lo ve Yesenia».', bad: 'bp', why: 'Media empresa no aparece en el registro del área. Nadie puede ver las dos plantas juntas.' },
      { id: 'pest', t: 'Pestañas «Hoja1 (2)», «copia buena» y «NO BORRAR».', bad: 'bp', why: 'Nadie sabe cuál es la versión vigente. Un dato se corrige en una y queda mal en otra.' },
      { id: 'emo', t: 'Columna «Examen médico ocupacional»: vacía en 61 filas.', bad: 'ley', why: 'El registro de exámenes médicos ocupacionales es obligatorio (Reglamento de la Ley 29783, art. 33 b). Vacío no significa que no se hicieron, pero hay que comprobarlo.' },
      { id: 'turno', t: 'Columna «Turno»: los mismos 14 nombres en «Noche» desde 2019.', duda: 'No es ilegal por sí mismo, pero la norma pide que los turnos nocturnos sean rotativos en lo posible. Vale la pena preguntar por qué.' },
      { id: 'cel', t: 'Columna «Celular de contacto», completa en todas las filas.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Anotas el desorden de pestañas, pero la columna de diagnósticos sigue viajando cada semana a nueve supervisores.' : 'Anotas cada problema en tu libreta. Lo de los diagnósticos te deja inquieta/o: nueve personas ven, cada semana, la salud de 220.',
      flags: missLey ? [] : ['salud_detectada'],
      cartera: { diagnostico: 'Excel revisado: salud, exámenes, versiones y Ayaviri ausente' },
      pro: { ok: 'Revisar antes de opinar te da hechos para tu diagnóstico.', risk: 'Un dato de salud en un archivo compartido expone a las personas sin ninguna necesidad.', info: 'Antes de corregir, pregunta a Nely por qué lo hace así: casi siempre hay una razón.' },
      kusi: missLey ? ['preocupado', 'Hay una columna que no debería estar ahí…'] : ['celebra', '¡Ojo de coordinador/a!'],
    }),
    rules: [[LEY, 'La información relacionada a la salud es un dato sensible (Ley 29733, art. 2 num. 5).'], [LEY, 'El tratamiento de datos debe ser adecuado, relevante y no excesivo a su finalidad (Ley 29733, art. 7).'], [LEY, 'El registro de exámenes médicos ocupacionales es obligatorio (D.S. 005-2012-TR, art. 33).']],
    mirada: {
      ve: 'El Excel de un área cuenta su historia: quién lo usa, para qué y qué nunca se preguntó. Nely no compartió diagnósticos por descuido: lo hizo para ayudar a los supervisores. Diagnosticar es entender eso antes de juzgar.',
      visual: { tipo: 'cambio', titulo: 'Lo que el supervisor necesita y lo que recibe', pares: [['«Gastritis», «depresión»', '«Falta justificada»'], ['Tres versiones', 'Un solo archivo vigente'], ['Solo Juliaca', 'Las dos plantas']] },
      normas: [{ ley: 'Ley 29733, art. 7 (proporcionalidad)', dice: 'Todo tratamiento de datos personales debe ser adecuado, relevante y no excesivo a la finalidad para la que estos hubiesen sido recopilados.', practica: 'Para organizar el turno basta saber si la falta está justificada. El diagnóstico se queda en el legajo, con acceso restringido.' }],
    },
  },
  {
    id: 'a3', t: '10:50', ch: 'llamada', who: null, titulo: 'El cuaderno de Yesenia', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza'],
    body: () => `<p>Llamas a Yesenia a Ayaviri. Contesta al quinto timbre, con voces en quechua de fondo: está en la balanza de acopio con los ganaderos.</p><p>«Yo todo lo tengo en mi cuaderno, señorita/señor. Ingresos, permisos, cumpleaños, quién tiene hijito enfermo. <mark class="clave">Veintidós años y nunca se me perdió nada.</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle que te enseñe el cuaderno cuando vayas a Ayaviri y que, mientras, te mande fotos de lo de octubre.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, tiempo: -1 }, flags: ['yesenia_respeto'], cartera: { equipo: 'Yesenia: visita a Ayaviri pendiente' },
          out: 'Hay un silencio corto. «Nadie me había pedido ver el cuaderno», dice. A las 11:20 llegan tres fotos con letra redonda y clarita.',
          pro: { ok: 'Antes de cambiar un sistema, entiendes qué resuelve y quién lo sostiene.', info: 'El cuaderno de Yesenia puede ser la única fuente de datos de Ayaviri.' },
          kusi: ['feliz', 'Le pediste que te enseñe. Eso abre puertas.'] } },
      { id: 'b', label: 'Explicarle que el área necesita datos digitales y pedirle que pase todo a un Excel para el viernes.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2, calidad: 1 }, flags: ['yesenia_ignorada'],
          out: '«Ya, señorita/señor», dice, seca. Esa tarde, en Ayaviri, comenta que la nueva coordinación viene a mandar sin conocer.',
          pro: { ok: 'El objetivo es correcto: las dos plantas en un solo registro.', risk: 'Un plazo impuesto el primer día, sin conocer el sistema, se lee como desprecio por 22 años de trabajo.' },
          kusi: ['preocupado', 'La meta estaba bien. El primer paso, no tanto.'] } },
      { id: 'c', label: 'Decirle que siga con su cuaderno: si funciona, no hay que tocarlo.',
        res: { q: 'aceptable', fx: { personas: 2, calidad: -3 },
          out: 'Yesenia queda tranquila. Pero el viernes tendrás que explicarle a Mariela por qué Ayaviri sigue sin datos.',
          pro: { ok: 'Respetas su experiencia.', risk: 'Si el cuaderno se moja o Yesenia se enferma, media empresa queda sin memoria.' },
          kusi: ['pensando', '¿Y si mañana Yesenia no está?'] } },
    ],
    rules: [[BP, 'Primero entiende el sistema que existe; luego propón cambiarlo con quien lo usa.']],
    mirada: {
      ve: 'En regiones, muchas áreas de personas viven en la memoria de alguien con décadas en la empresa. Ese saber vale oro y también es un riesgo. El trabajo de la coordinación no es desplazarlo: es volverlo compartible sin que la persona sienta que la reemplazan.',
      visual: { tipo: 'balanza', a: { t: 'Cuaderno de Yesenia', items: ['Conoce a cada persona', 'Nunca se perdió nada', 'Solo ella lo entiende'] }, b: { t: 'Registro compartido', items: ['Las dos plantas juntas', 'Indicadores posibles', 'No depende de una persona'] } },
    },
  },
  {
    id: 'a4', t: '12:30', ch: 'documento', who: null, titulo: 'Tus frentes de la semana', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'cumplimiento', 'personas'],
    body: () => `<p>Almuerzas un caldo de cabeza en el comedor de la planta, rodeado de operarios con mandil y gorro blanco. Entre cucharada y cucharada, anotas todo lo que encontraste.</p><p>No puedes con todo esta semana. Eliges <mark class="clave">tres frentes</mark>; los demás esperan.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes que atiendes esta semana.', boton: 'Ir por estos', resumen: 'Elegiste',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'planilla', cells: ['Revisar la planilla preliminar del estudio', 'Llega el miércoles y se paga a fin de mes'] },
      { id: 'carta', cells: ['Responder la carta del turno noche', '14 firmas, nueve días sin respuesta'] },
      { id: 'salud', cells: ['Sacar los diagnósticos del Excel compartido', 'Nueve supervisores los ven cada semana'] },
      { id: 'logo', cells: ['Rediseñar el formato de vacaciones', 'Es feo, pero funciona'] },
      { id: 'cumple', cells: ['Organizar el saludo de cumpleaños del mes', 'Lo pidió Marketing'] },
      { id: 'reglamento', cells: ['Reescribir el reglamento interno completo', 'Es de 2015'] },
    ],
    score: { planilla: 3, carta: 3, salud: 3, logo: -1, cumple: -1, reglamento: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: picks.includes('salud') && picks.includes('planilla') ? 4 : -1, personas: picks.includes('carta') ? 3 : -2, tiempo: q === 'buena' ? 2 : -1 },
        cartera: { turnos: picks.includes('carta') ? 'Respuesta al turno noche: esta semana' : 'Carta sin responder' },
        out: q === 'buena' ? 'Tu semana queda clara: plata bien pagada, gente escuchada y datos protegidos. El reglamento puede esperar un mes más.' : picks.includes('reglamento') ? 'Abres el reglamento de 2015: 84 páginas. Te das cuenta de que te comerá la semana entera.' : 'Eliges cosas visibles, pero hay una carta de 14 personas que sigue esperando.',
        pro: { ok: 'Lo que afecta pagos, derechos y personas que esperan va primero.', risk: 'Lo urgente para otros (un saludo, un formato bonito) puede comerse lo importante.', info: 'Nueve días sin respuesta ya es un mensaje para el turno noche.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tres frentes con sentido!' : '¿Qué pasa si esa carta sigue esperando?'],
      };
    },
    rules: [[BP, 'Prioriza lo que afecta pagos, derechos y personas que esperan una respuesta.']],
    mirada: {
      ve: 'Coordinar es elegir. Siempre habrá más pendientes que horas, y cada frente que eliges deja otro esperando. Lo que distingue a una buena coordinación es que puede explicar por qué eligió lo que eligió.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Impacto en personas', cuadrantes: ['Hazlo ya', 'Planifícalo', 'Si sobra tiempo', 'No ahora'], items: [['Planilla', .5, .95], ['Carta del turno noche', .3, .85], ['Diagnósticos en el Excel', .2, .8], ['Reglamento', .95, .5], ['Formato de vacaciones', .3, .15], ['Cumpleaños', .2, .2]] },
    },
  },
  {
    id: 'a5', t: '15:40', ch: 'llamada', who: 'jefe', titulo: 'Freddy llama desde Ayaviri', banner: 'assets/3d/scenes/agro.webp', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>Suena tu anexo. Es el Ing. Freddy Choque, jefe de la planta de Ayaviri. Habla bajito, como si no quisiera que lo escuchen.</p><p>«Disculpe que la/lo moleste el primer día. Llevo doce años aquí y hace dos que pido que revisen mi sueldo. <mark class="clave">Necesito una respuesta antes de fin de mes.</mark> No le puedo decir más por teléfono.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escucharlo, pedirle que te mande su pedido con datos y poner fecha a una conversación con Mariela esta semana.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { jefe: 1 }, flags: ['freddy_escuchado'], cartera: { ayaviri: 'Freddy: conversación sobre sueldo esta semana' },
          out: 'Freddy suspira. «Gracias. Nadie me había puesto una fecha.» Quedan para el miércoles en la tarde. Le cuentas a Mariela, que frunce el ceño: «Freddy nunca pide nada».',
          pro: { ok: 'No prometes lo que no decides, pero haces que la señal llegue a quien decide.', info: 'Un «necesito una respuesta antes de fin de mes» casi siempre esconde otra oferta.' },
          kusi: ['pensando', 'Esa prisa tiene otra historia detrás…'] } },
      { id: 'b', label: 'Decirle que vas a pelear su aumento: Ayaviri no puede perder a su jefe.',
        res: { q: 'riesgosa', fx: { confianza: -3, etica: -2 }, rel: { jefe: 1 },
          out: 'Freddy se anima. Esa noche le cuenta a su esposa que «la nueva coordinación» le va a conseguir el aumento. Tú todavía no sabes ni cuánto gana.',
          pro: { ok: 'Freddy se siente respaldado.', risk: 'Prometer algo que no decides, el primer día y sin datos, te deja mal con él y con tu jefa.' },
          kusi: ['preocupado', '¿Y si Mariela dice que no?'] } },
      { id: 'c', label: 'Decirle con amabilidad que los sueldos de jefaturas los ve la gerencia, no tú.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 1 }, rel: { jefe: -1 }, flags: ['freddy_postergado'],
          out: 'Freddy dice «entiendo» y cuelga. Es cierto que no decides tú. También es cierto que nadie más le está contestando.',
          pro: { ok: 'Eres honesta/o sobre tu alcance.', risk: 'Una señal de alerta de un jefe clave se queda sin dueño.' },
          kusi: ['pensando', 'No decides tú… pero ¿quién lo escucha?'] } },
    ],
    rules: [[BP, 'No prometas lo que no decides; asegúrate de que la señal llegue a quien sí decide.']],
    mirada: {
      ve: 'Los jefes que llevan años en una planta lejana suelen sentirse invisibles. Cuando uno de ellos pide algo con fecha, casi siempre ya está mirando la puerta. Escuchar a tiempo no garantiza retenerlo, pero no escuchar casi garantiza perderlo.',
      visual: { tipo: 'linea', titulo: 'La historia de Freddy', hitos: [['2014', 'Ingresa como jefe de producción'], ['2017', 'Jefe de planta de Ayaviri'], ['2024', 'Pide revisión de sueldo'], ['Hoy', '«Necesito respuesta antes de fin de mes»']] },
    },
  },
  {
    id: 'a6', t: '17:20', ch: 'documento', who: null, titulo: 'Tu primer diagnóstico', banner: 'assets/esc/lupa.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Ya oscureció y en Juliaca la temperatura baja de golpe. Te pones la chompa y abres un documento en blanco. Mariela quiere tu diagnóstico el viernes; empiezas hoy con <mark class="clave">lo que viste, no con lo que supones</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu diagnóstico.', boton: 'Guardar el borrador',
    bloques: [
      { id: 'bien', t: 'Lo que funciona', n: 2, ops: [
        { id: 'b1', t: 'Yesenia conoce a cada trabajador de Ayaviri y su situación.', ok: true },
        { id: 'b2', t: 'Nely actualiza el registro de Juliaca cada semana sin falta.', ok: true },
        { id: 'b3', t: 'La planilla siempre se paga, aunque llega con las justas.', ok: null, por: 'Es cierto, pero «con las justas» ya es un riesgo, no un logro.' },
      ] },
      { id: 'duele', t: 'Lo que duele', n: 3, ops: [
        { id: 'd1', t: 'No hay un solo registro de las dos plantas.', ok: true },
        { id: 'd2', t: 'Datos de salud compartidos con nueve supervisores.', ok: true },
        { id: 'd3', t: 'Nadie revisa la planilla entre el estudio y la aprobación.', ok: true },
        { id: 'd4', t: 'Yesenia es «antigua» y se resiste al cambio.', ok: false, por: 'Es una etiqueta, no un hecho. Todavía no conoces su cuaderno.' },
        { id: 'd5', t: 'Los operarios del turno noche se quejan por todo.', ok: false, por: 'Solo has leído una carta. Es una suposición.' },
      ] },
      { id: 'medir', t: 'Lo que voy a medir primero', n: 2, ops: [
        { id: 'm1', t: 'Cuántas personas salieron de cada planta este año y por qué.', ok: true },
        { id: 'm2', t: 'Cuánto tarda la planilla desde el tareo hasta el pago.', ok: true },
        { id: 'm3', t: 'Quién es el mejor trabajador del mes.', ok: false, por: 'No responde a ningún problema que hayas visto hoy.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['diag_bueno'] : [], cartera: { diagnostico: q === 'buena' ? 'Borrador: funciona, duele y medir' : 'Borrador con suposiciones' },
        out: q === 'buena' ? 'Tu borrador cabe en una hoja y separa hechos de impresiones. Lo guardas con el nombre «Diagnóstico GH · v1».' : 'El borrador mezcla lo que viste con lo que te imaginas. El viernes, Mariela te preguntará «¿cómo sabes eso?».',
        pro: { ok: 'Un diagnóstico útil separa hechos, dolores y lo que todavía hay que medir.', risk: 'Etiquetar personas el primer día («antigua», «se queja por todo») sesga todo lo que harás después.', info: 'Escribe al lado de cada punto cómo lo sabes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Hechos, no etiquetas!' : 'Algunas piezas eran suposiciones.'],
      };
    },
    rules: [[BP, 'En un diagnóstico, cada afirmación debe poder responder a «¿cómo lo sabes?».']],
    mirada: {
      ve: 'El primer diagnóstico de un área no es un informe perfecto: es un mapa provisional. Su valor está en separar lo que viste de lo que te contaron y de lo que supones, para saber qué falta comprobar.',
      visual: { tipo: 'flujo', titulo: 'Tu diagnóstico', pasos: ['Lo que funciona', 'Lo que duele', 'Lo que voy a medir', 'Lo que propongo (el viernes)'], aqui: 2 },
    },
  },
  {
    id: 'a7', t: '18:35', ch: 'correo', who: null, titulo: 'Un correo para Mariela', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Mariela Quispe', to: 'Coordinación de Gestión Humana', asunto: '¿Cómo te fue?' },
    body: () => `<p>Antes de irme, cuéntame en tres líneas tu primer día. <mark class="clave">Sin adornos.</mark></p><p>Mariela</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Dos hallazgos con hechos, un riesgo que no puede esperar y lo que harás mañana.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { mariela: 1 }, responde: 'Mariela: dos hallazgos. 1) El Excel compartido con los supervisores tiene diagnósticos médicos: mañana lo corregimos. 2) Ayaviri no figura en ningún registro del área: lo tiene Yesenia en su cuaderno. Riesgo: nadie revisa la planilla antes de que la apruebes; el miércoles la reviso yo. Mañana organizo al equipo.',
          out: 'Mariela responde a los diez minutos: «Lo de los diagnósticos, hoy mismo si puedes. Gracias por lo de la planilla: llevo años firmando a ciegas».', kusi: ['celebra', 'Tres líneas, cero adornos. ¡Así!'] } },
      { id: 'b', label: 'Que el equipo es muy bueno y que todo se puede ordenar con un poco de tiempo.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Mariela: muy buen primer día. El equipo tiene mucho potencial y con un poco de orden todo va a mejorar 😊',
          out: 'Mariela responde con un pulgar. No sabe que nueve supervisores siguen viendo diagnósticos médicos.', kusi: ['pensando', 'Amable… pero ¿qué sabe ella ahora que no sabía?'] } },
    ],
    mirada: { ve: 'Un buen reporte a la jefatura tiene hechos, riesgos y próximos pasos. El primer correo marca el tono: si dices lo que viste sin adornos, tu jefa aprende que puede confiar en tus números y en tus alertas.' },
  },
];
