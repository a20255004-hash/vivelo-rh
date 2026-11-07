// Talent Acquisition Partner · Capítulo 3 · «Buscar sin aviso» · Semana 1, miércoles.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales: principios de consentimiento, finalidad y proporcionalidad;
//   los datos personales se tratan con consentimiento de su titular y para una finalidad determinada.
//   https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011
// - Ley 26772 (ofertas de empleo sin requisitos discriminatorios), ya citada en el capítulo 1.

export const CAP = {
  n: 3, titulo: 'Buscar sin aviso', dia: 'Semana 1, miércoles', foto: 'assets/foto2/celebra-laptop.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Miércoles. Ayer en la noche mandaste 50 mensajes por LinkedIn a backend y DevOps que no están buscando trabajo. Hoy, con el primer café, abres la bandeja: cuatro respuestas. Una dice «no, gracias». Tres dicen «cuéntame más».', boton: 'Abrir LinkedIn',
  kusi: 'Los mejores no te están buscando. Hoy aprendes a buscarlos sin parecer spam.',
  lead: 'Reescribiste tu mensaje de búsqueda, elegiste dónde buscar, rechazaste una base de datos que no debías usar, hablaste con los primeros candidatos y le contaste a Camila la verdad sobre el equipo.',
  reflexion: '¿Responderías tú un mensaje de alguien que no sabe nada de ti?',
  siguiente: { n: 4, titulo: 'La prueba técnica', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: '0 de 12 ofertas' },
  { id: 'sourcing', p: 'Búsqueda directa', j: 'Talent', d: 0, e: '50 mensajes · 4 respuestas' },
  { id: 'referidos', p: 'Programa de referidos', j: 'Talent', d: 0, e: 'Sin reglas' },
  { id: 'pipeline', p: 'Pipeline en el ATS', j: 'Talent', d: 0, e: '6 en conversación' },
  { id: 'bandas', p: 'Bandas salariales', j: 'Compensaciones', d: 0, e: 'Rocío: el viernes' },
];

export const FUTURO = {
  inmail_personal: ['Tu mensaje de búsqueda habla del reto y de la persona.', 'Tu tasa de respuesta subirá el capítulo 6.'],
  inmail_masivo: ['Seguiste con el mensaje genérico.', 'La tasa de respuesta no se moverá.'],
  fuentes_comunidad: ['Te inscribiste para hablar en el meetup de backend del jueves.', 'Ahí aparecerá gente que LinkedIn no muestra.'],
  base_rechazada: ['No usaste la base de datos que Brenda trajo de su antigua empresa.', 'Brenda te refirió solo a quienes aceptaron que les escribieras.'],
  base_usada: ['Usaste la base de datos de la antigua empresa de Brenda.', 'Alguien de esa empresa va a preguntar de dónde sacaste su número.'],
  camila_honestidad: ['Le dijiste a Camila que hoy hay 1 mujer entre 14 personas en backend.', 'Ella valoró la verdad. Capítulo 6.'],
  camila_evasiva: ['Le respondiste a Camila con una frase de folleto.', 'Ella lo va a averiguar por su cuenta.'],
  diego_interesado: ['Diego Mamani, backend senior, quiere seguir en el proceso.', 'Tiene otra propuesta en dólares. Capítulo 5.'],
  referidos_reglas: ['El programa de referidos tiene reglas claras: mismo proceso para todos.', 'Leonardo querrá saltárselas.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  camila: { n: 'Camila Torres', sub: 'Backend · candidata', who: 'dev' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
  diego: { n: 'Diego Mamani', sub: 'Backend senior · candidato', c: '#6B3FA0' },
  brenda: { n: 'Brenda Salazar', sub: 'Frontend · ingresó hace un mes', c: '#C05621' },
};

export const WSP = [
  { chat: 'talent', t: '08:35', de: 'Valeria', txt: '4 de 50 es 8 %. Normal para un primer mensaje. Lo que importa es qué cambias hoy 😉' },
  { chat: 'leonardo', t: '09:20', de: 'Leonardo', txt: '¿Y? ¿Algún senior de verdad?' },
  { chat: 'brenda', t: '11:50', de: 'Brenda', txt: 'Holaaa, ¿tienes 5 min? Te puedo ayudar con lo de backend, traje algo de mi chamba anterior 👀' },
  { chat: 'diego', t: '15:40', de: 'Diego', txt: 'Gracias por la llamada. Te mando mi CV actualizado en la noche. Ojo que estoy viendo otra propuesta.', si: 'diego_interesado' },
  { chat: 'camila', t: '17:10', de: 'Camila', txt: 'Gracias por no endulzarlo. Sigo en el proceso. ¿Cuándo es la prueba técnica?', si: 'camila_honestidad' },
  { chat: 'camila', t: '17:10', de: 'Camila', txt: 'Ok, gracias. Lo voy a pensar.', si: 'camila_evasiva' },
  { chat: 'renzo', t: '18:30', de: 'Renzo', txt: 'Mañana 9 am lo de la prueba. Llevo los números de cuántos la terminaron… no te va a gustar.' },
];

export const CORREOS = [
  { t: '08:40', de: 'LinkedIn', para: 'Talent Acquisition Partner', asunto: 'Tienes 4 respuestas nuevas', html: '<p>Camila Torres, Diego Mamani, Kevin Ríos y Patricia Lozano respondieron a tus mensajes.</p>' },
  { t: '13:30', de: 'Comunidad Backend Lima', para: 'Talent Acquisition Partner', asunto: 'Meetup del jueves: charlas relámpago', html: '<p>Quedan dos espacios de 5 minutos para charlas relámpago este jueves a las 7:30 p. m. en Miraflores. Regla de la comunidad: nada de avisos de empleo en la charla; habla de un problema técnico real. Al final hay una mesa de empleos.</p>' },
];

export const QUIZ = [
  { q: 'Un mensaje de búsqueda directa funciona mejor cuando…', ops: ['Es igual para todos, para ahorrar tiempo', 'Muestra que leíste el perfil de la persona y cuenta el reto con rango y modalidad', 'Es muy largo', 'Empieza con «Oportunidad única»'], ok: 1, por: 'Personalizar y ser concreto muestra respeto por el tiempo del otro.' },
  { q: 'Una trabajadora nueva te ofrece la base de datos de su antigua empresa, con teléfonos y sueldos. ¿Qué haces?', ops: ['La usas: los datos ya existen', 'No la usas: esas personas no dieron su consentimiento para que los uses tú', 'La usas solo para los sueldos', 'La compartes con Leonardo'], ok: 1, por: 'La Ley 29733 exige consentimiento y una finalidad determinada para tratar datos personales.' },
  { q: 'Una candidata pregunta cuántas mujeres hay en el equipo. Lo mejor es…', ops: ['Cambiar de tema', 'Decirle la verdad y lo que la empresa está haciendo al respecto', 'Inventar un número más alto', 'Decirle que eso no importa'], ok: 1, por: 'La honestidad en la atracción evita renuncias tempranas y construye confianza.' },
  { q: 'Un programa de referidos sano…', ops: ['Contrata directamente a los recomendados', 'Pone a los referidos en el mismo proceso que todos, con reglas claras de bono', 'Paga solo a los jefes', 'No necesita reglas'], ok: 1, por: 'El referido entra al proceso, no salta el proceso.' },
  { q: '¿Qué indicador te dice si tu mensaje de búsqueda funciona?', ops: ['La cantidad de mensajes enviados', 'La tasa de respuesta y cuántos pasan a conversación', 'Los likes de tu perfil', 'Las horas que trabajaste'], ok: 1, por: 'Enviar más no sirve si nadie responde.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:50', ch: 'sistema', who: null, titulo: 'El mensaje que nadie responde', banner: 'assets/foto2/callcenter.webp', lugar: 'LinkedIn Recruiter', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Relees tu mensaje de anoche: «Hola, tenemos una gran oportunidad para ti en una empresa líder». Lo mismo que reciben diez veces por semana. ${F.has('aviso_limpio') ? 'Tienes el aviso nuevo, con rango y modalidad: úsalo.' : 'El aviso que publicaste ayer tampoco ayuda mucho.'}</p><p>Diego Mamani, backend senior, es el siguiente de la lista. Le escribes otra vez, <mark class="clave">como si fuera la única persona a la que escribes hoy</mark>.</p>`,
    type: 'compose', enviaA: 'diego', para: 'Para: Diego Mamani · LinkedIn', boton: 'Enviar el mensaje',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gancho', t: 'Cómo empiezas', ops: [
        { id: 'g1', t: 'Diego, vi tu charla sobre cómo bajaron la latencia de los pagos con QR en tu empresa.', ok: true, por: 'Muestra que leíste su perfil.' },
        { id: 'g2', t: 'Diego, ¡tenemos una oportunidad única para ti!', ok: false, por: 'La frase de siempre.' },
      ] },
      { id: 'reto', t: 'Qué le cuentas', ops: [
        { id: 'r1', t: 'Estamos armando el backend de una app de pagos para comercios en Colombia, desde cero.', ok: true, por: 'El problema es lo que atrae a un senior.' },
        { id: 'r2', t: 'Somos una empresa líder con más de 250 colaboradores.', ok: false, por: 'No le dice nada de su trabajo.' },
      ] },
      { id: 'datos', t: 'Lo concreto', ops: [
        { id: 'd1', t: 'Híbrido, dos días en San Isidro, y el rango está en el aviso que te adjunto.', ok: true, por: 'Le ahorras la pregunta.' },
        { id: 'd2', t: 'El sueldo lo vemos más adelante.', ok: false, por: 'Es lo primero que va a querer saber.' },
      ] },
      { id: 'pedido', t: 'Qué le pides', ops: [
        { id: 'p1', t: '¿Te animas a 20 minutos de conversación esta semana, sin compromiso?', ok: true, por: 'Un pedido pequeño y claro.' },
        { id: 'p2', t: 'Mándame tu CV y te aviso.', ok: null, por: 'Le pides trabajo antes de interesarlo.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'r1', 'd1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, tiempo: -1 },
        flags: [q === 'buena' ? 'inmail_personal' : 'inmail_masivo'], cartera: { sourcing: q === 'buena' ? 'Mensaje nuevo: reto, rango y pedido pequeño' : 'Mensaje genérico' },
        out: q === 'buena' ? 'Diego responde en 20 minutos: «Esa charla la vieron como 40 personas. Ya, conversemos hoy a las 3». Usas la misma estructura para otros 20 perfiles.' : 'Diego deja el mensaje en visto. Mandas el mismo texto a 20 más.',
        pro: { ok: 'Un mensaje que muestra que conoces a la persona y le cuenta el reto real tiene más probabilidades de respuesta.', risk: 'Los mensajes genéricos entrenan a los candidatos a ignorarte.', info: 'Mide la tasa de respuesta del mensaje nuevo contra el viejo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Respuesta en 20 minutos!' : 'Ese texto ya lo leyó mil veces.'],
      };
    },
    mirada: {
      ve: 'El sourcing es buscar a quien no está buscando. A un desarrollador senior le escriben varias veces por semana: lo que hace que responda es que el mensaje sea para él, que hable del problema técnico y que diga lo básico (rango, modalidad) sin rodeos.',
      visual: { tipo: 'cambio', titulo: 'Tu mensaje, antes y después', pares: [['Oportunidad única', 'Vi tu charla sobre pagos con QR'], ['Empresa líder', 'Una app de pagos desde cero'], ['El sueldo lo vemos después', 'Rango y modalidad en el aviso'], ['Mándame tu CV', '20 minutos esta semana']] },
    },
  },
  {
    id: 'c2', t: '10:30', ch: 'documento', who: null, titulo: 'Dónde más buscar', banner: 'assets/esc/camino.webp', show: ['tiempo', 'calidad', 'etica'],
    body: () => `<p>LinkedIn no alcanza. Abres una lista de otras fuentes que fuiste juntando desde el lunes. Tienes la tarde y no puedes con todas.</p><p>Valeria lo dijo claro: <mark class="clave">«Ve donde está la gente, no donde es más fácil»</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres fuentes que trabajas esta semana.', boton: 'Ir por estas', resumen: 'Elegiste',
    cols: ['Fuente', 'Lo que sabes'],
    rows: [
      { id: 'meetup', cells: ['Charla de 5 minutos en el meetup de backend del jueves', 'Hay que hablar de un problema técnico, no de vacantes'] },
      { id: 'github', cells: ['Contribuyentes de una librería de pagos peruana en GitHub', 'Perfiles públicos con su correo de contacto'] },
      { id: 'referidos', cells: ['Lanzar el programa de referidos con el equipo', 'Funciona, si tiene reglas'] },
      { id: 'feria', cells: ['Feria de empleo de una universidad', 'Casi todos son practicantes; buscas senior'] },
      { id: 'scraper', cells: ['Una extensión que saca correos personales de los perfiles de LinkedIn', 'Promete 500 correos por hora'] },
      { id: 'face', cells: ['Publicar el aviso en 15 grupos de Facebook de empleo', 'Llegan muchos CV, pocos de backend'] },
    ],
    score: { meetup: 3, github: 2, referidos: 3, feria: 0, scraper: -4, face: 0 },
    res: (picks, sc) => {
      const q = picks.includes('scraper') ? 'riesgosa' : sc >= 7 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, etica: picks.includes('scraper') ? -5 : 1, tiempo: 1 },
        flags: picks.includes('meetup') ? ['fuentes_comunidad'] : [],
        cartera: { sourcing: q === 'riesgosa' ? 'Correos sacados con una extensión' : 'LinkedIn + ' + picks.length + ' fuentes nuevas' },
        out: picks.includes('scraper') ? 'La extensión te da 500 correos en una hora. Tres personas te responden furiosas: «¿De dónde sacaste mi correo personal?». Una lo publica en LinkedIn.' : q === 'buena' ? 'Te inscribes en el meetup y preparas cinco minutos sobre «por qué los pagos con QR se caen en quincena». Renzo se ofrece a ayudarte con las láminas.' : 'Avanzas, pero llegan muchos CV de gente que no es senior.',
        pro: { ok: 'Las comunidades y los referidos traen perfiles que no responden avisos.', risk: 'Sacar correos personales con una herramienta automática es usar datos sin consentimiento.', info: 'En la comunidad, aporta antes de pedir: una buena charla abre más puertas que un aviso.' },
        kusi: [q === 'buena' ? 'feliz' : q === 'riesgosa' ? 'indignado' : 'pensando', q === 'buena' ? '¡A la comunidad se llega aportando!' : q === 'riesgosa' ? '¡Esos correos no eran tuyos!' : 'Muchos CV no es lo mismo que buenos CV.'],
      };
    },
    rules: [[LEY, 'Los datos personales se tratan con el consentimiento de su titular y para una finalidad determinada (Ley 29733).']],
    mirada: {
      ve: 'Un buen sourcing combina fuentes: búsqueda directa, comunidades técnicas, referidos y contenido público como GitHub. Lo que no vale es tomar datos que la persona no compartió para eso, aunque una herramienta lo haga fácil.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Calidad de los perfiles', cuadrantes: ['Vale la pena', 'Rápido y bueno', 'Evita', 'Volumen'], items: [['Meetup', .7, .85], ['Referidos', .4, .8], ['GitHub', .6, .65], ['Feria', .5, .25], ['Facebook', .2, .2], ['Extensión de correos', .1, .05]] },
    },
  },
  {
    id: 'c3', t: '12:05', ch: 'presencial', who: null, titulo: 'Lo que trajo Brenda', banner: 'assets/foto2/tension.webp', lugar: 'Cocina del piso 9', show: ['etica', 'cumplimiento', 'tiempo'],
    body: () => `<p>Brenda Salazar entró hace un mes como frontend. Viene de una fintech de la competencia y te muestra su laptop con orgullo: un Excel con <mark class="clave">los 80 desarrolladores de su antigua empresa, con celular, correo personal y sueldo</mark>.</p><p>«Lo bajé antes de irme. Con esto llenas las 12 en una semana. Yo solo quiero el bono de referidos, ¿ya?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No usar el Excel y pedirle que lo borre; en cambio, que les cuente de la vacante a quienes conoce y que te refiera solo a quienes acepten que les escribas.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, tiempo: -2 }, flags: ['base_rechazada'], cartera: { referidos: 'Brenda refiere con permiso de cada persona' },
          envia: ['brenda', 'Brenda, gracias por querer ayudar. El Excel no lo podemos usar: esas personas no aceptaron que les escribamos, y es información de tu antigua empresa. Si conoces a alguien bueno, cuéntale y, si quiere, me pasas su contacto. Esos sí cuentan para el bono.'],
          out: 'Brenda se queda un poco desinflada. «Pucha, yo pensé que ayudaba.» A las 5 te pasa tres nombres, con permiso de cada uno. Uno es DevOps.',
          pro: { ok: 'Proteges los datos de 80 personas y a la empresa de un problema legal.', risk: 'Pierdes un atajo que parecía enorme.', info: 'Avisa a Valeria por si el Excel ya circuló por otro lado.' },
          kusi: ['celebra', 'Datos ajenos, manos quietas. ¡Así!'] } },
      { id: 'b', label: 'Usarlo solo para escribirles a los 10 backend del Excel: es gente que igual está en LinkedIn y no les vas a hacer daño.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5, tiempo: 3 }, flags: ['base_usada'],
          out: 'Escribes a diez celulares personales. Dos responden con interés. Uno responde: «¿Quién te dio mi número?». Y su antigua empresa tiene un área legal.',
          pro: { ok: 'Dos conversaciones nuevas.', risk: 'Usas datos personales sin consentimiento, sacados de otra empresa. Es un riesgo legal y reputacional para Código Andino y para Brenda.' },
          kusi: ['preocupado', '¿Y si alguien pregunta de dónde salió?'] } },
      { id: 'c', label: 'Usar solo la columna de sueldos para saber cuánto paga la competencia y armar la oferta.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4, calidad: 2 },
          out: 'Copias los sueldos a una hoja aparte. Rocío te mira raro cuando le cuentas de dónde salieron: «Eso no lo puedo usar en una banda. Para eso pagamos encuestas salariales».',
          pro: { ok: 'Información de mercado.', risk: 'Siguen siendo datos personales de otra empresa, obtenidos sin autorización.' },
          kusi: ['pensando', 'Media trampa sigue siendo trampa.'] } },
    ],
    rules: [[LEY, 'Los datos personales se tratan con consentimiento y para una finalidad determinada (Ley 29733).'], [POL, 'En Código Andino, el bono de referidos se paga solo si la persona referida aceptó ser contactada y pasa el mismo proceso.']],
    mirada: {
      ve: 'En atracción de talento, la tentación de los atajos es constante: bases compradas, listas de otras empresas, correos sacados con herramientas. Que los datos existan no significa que puedas usarlos. Un referido sano empieza con la persona diciendo «sí, que me escriban».',
      visual: { tipo: 'balanza', a: { t: 'El Excel de Brenda', items: ['80 contactos de golpe', 'Sin consentimiento', 'Información de otra empresa'] }, b: { t: 'Referidos con permiso', items: ['Pocos, pero interesados', 'Brenda cuida su nombre', 'Nadie pregunta de dónde salió su número'] } },
      normas: [{ ley: 'Ley 29733, Ley de Protección de Datos Personales', dice: 'El tratamiento de datos personales requiere el consentimiento de su titular y debe tener una finalidad determinada; los datos no pueden usarse para fines distintos de aquellos para los que se recogieron.', practica: 'Un directorio interno de otra empresa no es una fuente de reclutamiento.' }],
    },
  },
  {
    id: 'c4', t: '14:50', ch: 'llamada', who: null, titulo: 'Las primeras conversaciones', banner: 'assets/foto/llamada.webp', lugar: 'Cabina de llamadas del piso 9', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Te encierras en la cabina de llamadas, la que tiene la luz que parpadea. Cuatro conversaciones de 20 minutos, una tras otra. Tomas notas en el ATS mientras hablas.</p>`,
    type: 'calls',
    calls: [['Diego Mamani', 'Backend senior · interesado', 'Me interesa el reto. Pero te soy sincero: una empresa de Miami me está ofreciendo pagar en dólares, remoto. Así que dime rápido si su rango llega.'], ['Kevin Ríos', 'DevOps · solo remoto', 'Si son dos días presenciales, paso. Vivo en Chosica y son tres horas de ida y vuelta.'], ['Patricia Lozano', 'Backend · pregunta por guardias', 'Las guardias, ¿se pagan? En mi chamba actual las hacemos “por amor a la camiseta”.'], ['Camila Torres', 'Backend semi-senior · una pregunta', 'Me interesa mucho. Antes de seguir, una pregunta directa: ¿cuántas mujeres hay hoy en el equipo de backend?']],
    prompt: 'En el equipo de backend hoy hay 14 personas y Brenda, en frontend, es de las pocas mujeres del área. ¿Qué le respondes a Camila?',
    choices: [
      { id: 'a', label: 'Decirle la verdad: hoy hay una mujer entre 14 en backend, y contarle qué está haciendo la empresa y qué no ha hecho todavía.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, etica: 3 }, rel: { dev: 1 }, flags: ['camila_honestidad', 'diego_interesado'], cartera: { pipeline: '6 en conversación · Diego y Camila avanzan' },
          out: 'Camila se queda callada un segundo. «Ok. Gracias por no decirme “somos muy diversos”. Prefiero saberlo ahora.» Pide seguir. Diego también. Kevin queda en pausa; Patricia, a la espera de saber de las guardias.',
          pro: { ok: 'La honestidad en la atracción construye confianza y evita sorpresas en el primer mes.', risk: 'Puede que una candidata decida no seguir. Es mejor que lo decida con la verdad.', info: 'Lleva el dato a Valeria: es una señal de que el proceso tiene que cambiar.' },
          kusi: ['feliz', 'La verdad también atrae. ¡Qué bacán!'] } },
      { id: 'b', label: 'Decirle que la empresa valora mucho la diversidad y que el equipo es muy inclusivo.',
        res: { q: 'aceptable', fx: { personas: -1, confianza: -2 }, rel: { dev: -1 }, flags: ['camila_evasiva', 'diego_interesado'],
          out: 'Camila responde «ya, entiendo». Esa noche busca a la gente de Código Andino en LinkedIn y cuenta los nombres. No te dice nada.',
          pro: { ok: 'No mientes del todo.', risk: 'Una frase de folleto ante una pregunta directa suena a que escondes algo.' },
          kusi: ['pensando', 'Ella preguntó un número…'] } },
    ],
    rules: [[BP, 'Responde lo que te preguntan. Si el dato no es bueno, di también qué se está haciendo.']],
    mirada: {
      ve: 'En una conversación de sourcing tú también estás siendo evaluado. Los candidatos senior preguntan por sueldo, modalidad, guardias y equipo. Cada respuesta evasiva baja la confianza; cada respuesta honesta, aunque no sea la ideal, la sube.',
      visual: { tipo: 'embudo', titulo: 'Tu búsqueda directa', niveles: [['Mensajes', 50], ['Respuestas', 4], ['Conversaciones', 4], ['Siguen en proceso', 3]] },
    },
  },
  {
    id: 'c5', t: '16:20', ch: 'documento', who: null, titulo: 'Las reglas de los referidos', banner: 'assets/foto/plano-equipo.webp', show: ['calidad', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('base_rechazada') ? 'Lo de Brenda te dejó claro algo: el programa de referidos necesita reglas.' : 'Valeria te pide lanzar hoy el programa de referidos.'} Lo escribes para mandarlo al equipo de Tecnología mañana.</p><p>La pregunta es cómo hacerlo <mark class="clave">atractivo sin que se vuelva una argolla</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del programa.', boton: 'Guardar el programa',
    bloques: [
      { id: 'quien', t: 'Cómo se refiere', n: 2, ops: [
        { id: 'q1', t: 'La persona referida acepta antes que Talent la contacte.', ok: true, por: 'Consentimiento primero.' },
        { id: 'q2', t: 'El referido pasa por las mismas etapas y la misma prueba que todos.', ok: true },
        { id: 'q3', t: 'Si lo refiere un tech lead, salta la prueba técnica.', ok: false, por: 'Así nace la argolla.' },
      ] },
      { id: 'bono', t: 'El bono', n: 2, ops: [
        { id: 'b1', t: 'Se paga cuando la persona referida cumple su periodo de prueba.', ok: true, por: 'Premia buenos ingresos, no CV.' },
        { id: 'b2', t: 'El monto está escrito y es igual para todos.', ok: true },
        { id: 'b3', t: 'Se paga por cada CV enviado.', ok: false, por: 'Premia volumen, no calidad.' },
      ] },
      { id: 'cuidado', t: 'Cuidados', n: 2, ops: [
        { id: 'k1', t: 'Quien refiere no evalúa a su referido.', ok: true, por: 'Evita conflicto de interés.' },
        { id: 'k2', t: 'Se mide qué porcentaje de contratados viene de referidos, para no depender solo de ellos.', ok: true, por: 'Si todos vienen del mismo círculo, el equipo se parece cada vez más.' },
        { id: 'k3', t: 'Se aceptan listas de contactos de antiguas empresas.', ok: false, por: 'Datos sin consentimiento.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, etica: q === 'riesgosa' ? -3 : 3, cumplimiento: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'riesgosa' ? [] : ['referidos_reglas'], cartera: { referidos: q === 'riesgosa' ? 'Programa sin reglas claras' : 'Programa con reglas: mismo proceso, bono al pasar el periodo de prueba' },
        out: q === 'buena' ? 'Valeria lo aprueba sin cambios. «Y lo de medir el porcentaje de referidos… eso nadie lo pensó.»' : q === 'aceptable' ? 'Valeria corrige un par de puntos y lo aprueba.' : 'Valeria te devuelve el documento: «Esto se va a volver una argolla en dos meses».',
        pro: { ok: 'Los referidos traen buena gente cuando no se saltan el proceso.', risk: 'Si los referidos dominan, el equipo se llena de gente del mismo círculo, y eso también es un sesgo.', info: 'Revisa en un mes de dónde viene cada contratación.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Referidos sin argolla!' : 'Las reglas protegen al programa.'],
      };
    },
    mirada: { ve: 'Los referidos suelen ser una de las mejores fuentes de contratación técnica, pero tienen un riesgo: reproducen el mismo perfil. Por eso se miden y se combinan con otras fuentes.' },
  },
  {
    id: 'c6', t: '18:05', ch: 'correo', who: null, titulo: 'El informe del miércoles', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Valeria Núñez', to: 'Talent Acquisition Partner', asunto: 'Sourcing: ¿qué aprendimos?' },
    body: () => `<p>Mándame en corto qué aprendiste hoy de la búsqueda y <mark class="clave">qué vas a cambiar mañana</mark>. Leo me pregunta a cada rato.</p><p>V.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Números, una conclusión y un cambio.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { 'valeria-ta': 1 }, responde: 'Valeria: mensaje genérico 4 de 50 (8 %); mensaje personalizado, 3 respuestas de los primeros 10. Conclusión: los senior responden al reto y al rango. Cambio: todo mensaje lleva reto, modalidad y rango. Dos alertas: Diego tiene una oferta en dólares y en backend hay 1 mujer de 14.',
          out: 'Valeria reenvía tu correo a Leonardo con una línea: «Esto es lo que te decía». Leonardo responde con un emoji. Es un avance.', kusi: ['celebra', 'Números que cuentan una historia. ¡Bacán!'] } },
      { id: 'b', label: 'Que mandaste 50 mensajes más y que mañana mandarás 100.',
        res: { q: 'aceptable', fx: { confianza: 0, tiempo: -2 }, responde: 'Valeria: hoy 50 mensajes más; mañana 100 💪',
          out: 'Valeria responde: «¿Y si los 100 dicen lo mismo que los 50?». Te vas pensando en eso en el Metropolitano.', kusi: ['pensando', 'Más no siempre es mejor.'] } },
    ],
    mirada: { ve: 'Medir el sourcing no es contar mensajes: es ver qué tasa de respuesta tiene cada mensaje y cada fuente, y cambiar lo que no funciona. Un Talent Acquisition Partner trabaja como quien prueba y ajusta.' },
  },
];
