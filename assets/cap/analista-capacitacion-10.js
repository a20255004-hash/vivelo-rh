// Analista de Capacitación y Desarrollo · Capítulo 10 · «¿Te ves aquí?» · Semana 2, viernes.
// Último capítulo escrito de la temporada: balance de las dos semanas, pregunta «¿te ves en este puesto?» y final abierto.
// Normas repasadas (ya verificadas en capítulos anteriores):
// - Ley 29783, art. 35 b) y D.S. 005-2012-TR, art. 28: capacitaciones de SST, no menos de cuatro al año y dentro de la jornada.
//   https://lpderecho.pe/capacitaciones-seguridad-salud-trabajo-deben-realizarse-durante-jornada-laboral-informe-82-2015-mtpe/
// - D.S. 007-2002-TR, art. 9: el sobretiempo es voluntario.
//   https://lpderecho.pe/tuo-ley-jornada-trabajo-horario-trabajo-sobretiempo-decreto-supremo-007-2002-tr
// - Ley 29571, art. 62: métodos abusivos de cobranza.
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29571.pdf
// Empresas, personas y cifras son ficticias.

export const CAP = {
  n: 10, titulo: '¿Te ves aquí?', dia: 'Semana 2, viernes', foto: 'assets/foto/mentora.webp',
  lugar: 'Financiera Chimú · Sede central de Trujillo',
  inicio: '08:00', fin: '18:30', cierreHora: '18:15',
  apertura: 'Viernes. Se terminan tus dos primeras semanas. Lorena te cita a las ocho, con café de verdad.', boton: 'Ir donde Lorena',
  kusi: 'Mira todo lo que pasó en diez días. ¡Y todavía falta!',
  lead: 'Escuchaste tu evaluación, hiciste tu balance, cerraste lo que quedaba con la gente de la calle y respondiste la pregunta de fondo. Y justo entonces, llegó el correo de las 5:40.',
  reflexion: 'Si el lunes empezaras de nuevo, ¿qué harías distinto desde la primera hora?',
  siguiente: { n: 11, titulo: 'Doce agencias más', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'evaluacion', p: 'Tu evaluación de las dos semanas', j: 'Lorena · Desarrollo', d: 0, e: 'Hoy, 8:00' },
  { id: 'balance', p: 'Tu balance', j: 'Tú', d: 0, e: 'Por escribir' },
  { id: 'calle', p: 'Pendientes con la gente de la calle', j: 'Sandra, Kevin, Milagros', d: 0, e: 'Por cerrar' },
  { id: 'replica', p: 'Calendario de cinco agencias', j: 'Víctor · Negocios', d: 0, e: 'Lo pidió para hoy' },
  { id: 'cajamarca', p: 'Encargo del lunes', j: 'Elvira · Gerencia General', d: 0, e: 'Sin abrir' },
];

export const FUTURO = {
  te_ves_si: ['Dijiste que te ves en este puesto.', 'Semana 3: lo pondrás a prueba.'],
  te_ves_duda: ['Dijiste que te ves, con reparos sobre la presión y los horarios.', 'Semana 3: Lorena te tomará la palabra.'],
  te_ves_no: ['Dijiste que este puesto quizá no es para ti, y por qué.', 'Semana 3: todavía no te han pedido que decidas.'],
  cajamarca_datos: ['Antes de prometer, le pediste a Elvira datos sobre las 12 agencias.', 'Semana 3, lunes.'],
  cajamarca_promesa: ['Prometiste una inducción para 90 asesores sin conocer los datos.', 'Semana 3, lunes.'],
  calendario_listo: ['Mandaste el calendario de las cinco agencias, en horario.', 'Semana 3.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  milagros: { n: 'Milagros Chávez', sub: 'Asesora · El Porvenir', c: '#A0522D' },
  kevin: { n: 'Kevin Paredes', sub: 'Asesor · El Porvenir', c: '#3D6E8F' },
  rosario: { n: 'Rosario Ccahua', sub: 'Supervisora de SST', c: '#8A3B3B' },
};

export const WSP = [
  { chat: 'rosario', t: '07:40', de: 'Rosario', txt: 'Martes 3 p. m., El Porvenir: primera sesión de moto. Yo la dicto. Con bastón y todo 💪', si: 'rosario_aliada' },
  { chat: 'grupo', t: '07:50', de: 'Lorena', txt: 'A las 8 en mi oficina. No traigas nada. Hoy hablo yo 😉' },
  { chat: 'milagros', t: '10:15', de: 'Milagros', txt: 'Me contaron que van a revisar la meta. Gracias, señorita. No sé cómo hizo, y mejor no me lo cuente 🙏', si: 'presion_dicha' },
  { chat: 'milagros', t: '10:15', de: 'Milagros', txt: 'Señorita, me dijeron que usted dijo que no vio nada. Entiendo. Ya presenté mi carta de renuncia.', si: 'presion_negada' },
  { chat: 'kevin', t: '11:40', de: 'Kevin', txt: 'Don Julio me abrió la puerta. Primera vez. Pagó una cuota 🥹', si: 'kevin_corregido' },
  { chat: 'ronald', t: '13:15', de: 'Ronald', txt: 'Feliz viernes. Sigue en pie mi propuesta para gerentes, con indicadores. Sin apuro 🙂', si: 'ronald_puerta' },
  { chat: 'victor', t: '15:10', de: 'Víctor', txt: 'Recibido el calendario. Por etapas, ya. Pero que la primera sea Chepén, que me urge.', si: 'calendario_listo' },
  { chat: 'sandra', t: '18:00', de: 'Sandra', txt: 'El lunes me dicen que hay reunión grande. ¿Sabes algo? Tengo mala espina y buena moto 🛵' },
];

export const CORREOS = [
  { t: '09:00', de: 'Legal · Chimú', para: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'SUNAFIL · seguimiento', html: '<p>Seguimos a la espera de la respuesta de SUNAFIL. Por favor, cada capacitación de SST se registra el mismo día, sin excepción.</p><p>Gonzalo Pinillos</p>', si: 'evidencia_real' },
  { t: '09:00', de: 'Legal · Chimú', para: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'SUNAFIL · nuevo requerimiento', html: '<p>SUNAFIL pide ampliar la información: quiere saber qué plan tiene Chimú frente a lo no realizado este año. Tenemos que responder la próxima semana.</p><p>Gonzalo Pinillos</p>', si: 'registro_minimo' },
  { t: '09:00', de: 'Legal · Chimú', para: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'Reclamo por las listas de asistencia', html: '<p>El reclamo de Chepén se investiga por el canal de ética. Les pido conservar todo y no firmar nada más con fechas pasadas.</p><p>Gonzalo Pinillos</p>', si: 'registro_reconstruido' },
  { t: '17:40', de: 'Elvira Cabanillas · Gerencia General', para: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'Reservado · lunes 8:00', html: '<p>Lo que voy a decirles es reservado hasta el lunes. Chimú absorbe las 12 agencias de una cooperativa de Cajamarca que está cerrando. Llegan 90 asesores, con otra manera de evaluar y cobrar.</p><p>Las espero el lunes a las 8:00, con una primera idea de cómo los recibimos.</p><p>Elvira</p>' },
];

export const QUIZ = [
  { q: '¿Qué aprendiste que hace una analista de capacitación antes de diseñar un curso?', ops: ['Comprar el programa más famoso', 'Diagnosticar qué problema del trabajo se resuelve aprendiendo', 'Hacer una encuesta de satisfacción', 'Preguntar qué está de moda'], ok: 1, por: 'Todo el trabajo de estas dos semanas partió de un indicador y de lo que viste en la calle.' },
  { q: 'Un curso obligatorio después de una jornada completa…', ops: ['Es tiempo libre', 'Es sobretiempo, que es voluntario y se paga o se compensa', 'Siempre está permitido', 'Depende del gerente'], ok: 1, por: 'El D.S. 007-2002-TR establece que el sobretiempo es voluntario.' },
  { q: '¿Cuál de estos es un resultado de capacitación ya probado a los cuatro días?', ops: ['Que bajó la mora', 'Que los asesores cerraron más acuerdos por escrito', 'Que se recuperará la colocación', 'Que subirá el bono'], ok: 1, por: 'Es lo que se observó y comparó. La mora necesita más tiempo.' },
  { q: 'Las capacitaciones de SST, según la ley…', ops: ['Son una al año', 'Son no menos de cuatro al año, dentro de la jornada', 'Son opcionales en oficinas', 'Las decide el proveedor'], ok: 1, por: 'Ley 29783, art. 35 b), y D.S. 005-2012-TR, art. 28.' },
  { q: 'Cuando la gerencia te pregunta algo que todavía no sabes, ¿qué haces?', ops: ['Inventas un número', 'Dices qué sabes, qué no y cuándo lo sabrás', 'Cambias de tema', 'Culpas a otra área'], ok: 1, por: 'Es la respuesta que construye credibilidad, incluso cuando incomoda.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'y1', t: '08:10', ch: 'presencial', who: 'lorena', titulo: 'Lo que dice Lorena', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Lorena', show: ['confianza', 'calidad', 'personas'],
    body: (n, F) => `<p>Lorena ha traído café pasado de su casa, en termo. Tiene una hoja con dos columnas y no te la enseña todavía.</p><p>«${F.has('comite_claro') ? 'Lo de ayer, cuando dijiste “no lo sé” frente a Elvira, no se aprende en ningún curso.' : F.has('comite_triunfo') ? 'Ayer prometiste algo que en 90 días nos van a cobrar. Tenemos que hablar de eso.' : F.has('comite_pelea') ? 'Ayer tuviste razón sobre la meta, pero así no se dice en esa sala.' : 'Ayer te vi nerviosa, y eso está bien.'} <mark class="clave">Pregúntame lo que quieras antes de firmar esto</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Lorena.',
    opts: [
      { id: 'mejor', label: '¿Qué fue lo mejor que hice?', info: '«Saliste a la calle y volviste con preguntas, no con cursos. Eso cambia cómo te mira el resto de la empresa.»' },
      { id: 'peor', label: '¿Qué tengo que mejorar sí o sí?', info: '«Llevas todo en la cabeza. La carpeta de SST estaba así porque nadie registraba el día que pasaban las cosas. No quiero que te pase a ti.»' },
      { id: 'quedo', label: '¿Me quedo después del periodo de prueba?', info: '«Eso no se decide hoy, y yo no decido sola. Pero te digo esto: el lunes no pienso entrar a esa reunión sin ti.»' },
      { id: 'ella', label: '¿Y tú? ¿Cómo te fue a ti?', info: 'Se ríe sin ganas. «Firmé en enero un plan que no leí. Eso voy a tener que explicarlo. Pero ya no me da miedo decirlo.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, personas: 2 }, rel: { lorena: 1 },
      cartera: { evaluacion: picks.includes('peor') ? 'Conversada: registrar todo el mismo día' : 'Conversada con Lorena' },
      out: 'Lorena firma la hoja y te la pasa. Columna izquierda: lo que hiciste bien. Columna derecha: lo que te falta. Las dos columnas son de igual tamaño. Te parece justo.',
      kusi: ['feliz', 'Una evaluación que sirve es la que te dice dos cosas.'],
    }),
    mirada: {
      ve: 'La retroalimentación de una buena jefa no es una nota: es una conversación que deja claro qué seguir haciendo y qué cambiar. Preguntar por lo que debes mejorar es una competencia, no una debilidad.',
      visual: { tipo: 'balanza', a: { t: 'Lo que hiciste bien', items: ['Salir a la calle', 'Decir «no lo sé» con fecha', 'Pedir poco y medible'] }, b: { t: 'Lo que te falta', items: ['Registrar el mismo día', 'Cuidar tu descanso', 'Decidir sin esperar a estar segura'] } },
    },
  },
  {
    id: 'y2', t: '09:40', ch: 'documento', who: null, titulo: 'Tu balance de dos semanas', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio', show: ['calidad', 'etica', 'confianza'],
    body: (n, F) => `<p>Hace diez días heredaste un plan lleno de tachones. Hoy tienes ${F.has('programa_sst_listo') ? 'un programa de SST aprobado' : 'un programa de SST por corregir'}, ${F.has('taller_practico') ? 'un taller que se practicó' : 'un taller que se escuchó'} y ${F.has('presion_dicha') ? 'una meta en revisión' : F.has('presion_negada') ? 'una meta que nadie tocará por ahora' : 'una meta sobre la mesa'}.</p><p>${F.has('numeros_honestos') ? 'También tienes un −18 % que dijiste en voz alta.' : 'También tienes un −18 % que alguien tendrá que explicar.'} <mark class="clave">Lorena te pidió escribir tu balance en una hoja</mark>.</p>`,
    type: 'builder', prompt: 'Elige lo que escribes en tu balance.', boton: 'Guardar el balance',
    bloques: [
      { id: 'cambio', t: 'Qué cambió', n: 2, ops: [
        { id: 'c1', t: 'Asesores que cierran acuerdos por escrito y un diagnóstico que separa lo que se aprende de lo que no.', ok: true, por: 'Cambios concretos que se pueden mostrar.' },
        { id: 'c2', t: 'SST dejó de ser una carpeta y empezó a tener fechas y dueños.', ok: true, por: 'Empezó el cumplimiento real.' },
        { id: 'c3', t: 'La mora bajó gracias a mi trabajo.', ok: false, por: 'Todavía no se sabe. No te lo atribuyas.' },
      ] },
      { id: 'nosabe', t: 'Qué todavía no sé', n: 2, ops: [
        { id: 'n1', t: 'Si los créditos rechazados mejorarán la mora, o solo nos costaron colocación.', ok: true, por: 'La pregunta de los 90 días.' },
        { id: 'n2', t: 'Si el taller funciona sin Sandra y Don Aurelio en otras agencias.', ok: true, por: 'Lo que cinco agencias van a responder.' },
        { id: 'n3', t: 'Nada: el modelo está probado.', ok: false, por: 'Diez días no prueban un modelo.' },
      ] },
      { id: 'aprendi', t: 'Qué aprendí', n: 1, ops: [
        { id: 'a1', t: 'Capacitar es menos dictar y más negociar, medir y escuchar. Y que la ley también se lee.', ok: true, por: 'Lo que resume estas dos semanas.' },
        { id: 'a2', t: 'Que los jefes son el problema.', ok: false, por: 'Víctor tenía sus razones, y tú también aprendiste de él.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, etica: q === 'buena' ? 2 : 0 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        cartera: { balance: q === 'riesgosa' ? 'Más logros que preguntas' : 'Una hoja honesta' },
        out: q === 'buena' ? 'Lo relees. No suena a logro: suena a alguien que empieza a saber de qué se trata este trabajo. Lo guardas en la carpeta que ya no se llama «Hoja3».' : q === 'aceptable' ? 'Lo relees y tachas una línea. Era más un deseo que un hecho.' : 'Lo relees. Se parece demasiado a un afiche.',
        pro: { ok: 'Un balance honesto dice qué cambió y qué no sabes todavía.', risk: 'Atribuirte lo que aún no se ha probado te alcanza después.', info: 'Guarda esta hoja. En 90 días, compárala.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Qué divino! Dos semanas en una hoja.' : '¿Eso ya lo sabes, o lo quieres?'],
      };
    },
    rules: [[BP, 'Separa lo que cambió de lo que todavía no sabes.']],
    mirada: {
      ve: 'Aprender de lo que hiciste también es parte del trabajo. Las personas de desarrollo que mejor enseñan son las que pueden mirar lo suyo con el mismo rigor con el que miran un curso.',
      visual: { tipo: 'flujo', titulo: 'Tus dos semanas', pasos: ['El plan', 'La calle', 'El proveedor', 'El recorte', 'El taller', 'Los jefes', 'La ley', 'Los números', 'El comité', 'Tu balance'] },
    },
  },
  {
    id: 'y3', t: '11:30', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del almuerzo', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio', show: ['personas', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>Antes de cerrar la semana, llamas a quienes hicieron esto contigo. Afuera, el sol de mediodía está pegando sobre la avenida y alguien ya salió a comprar ceviche.</p><p>${F.has('metodo_abandonado') ? 'Desde que dejaron de pedir el cuaderno, la colocación se recuperó un poco. Los asesores dicen que los créditos «salen más rápido». ' : ''}<mark class="clave">Cada llamada te devuelve algo</mark>.</p>`,
    type: 'calls',
    calls: [['Sandra Rojas · La Esperanza', 'Contesta, con el motor apagado', '«Rocío ya pregunta por los meses flojos. No todos, pero pregunta. Oye, y si esto sigue, voy a necesitar que alguien me reemplace dos mañanas al mes. Enseñar cansa.»'], ['Don Aurelio Gamboa · El Porvenir', 'Contesta desde el mercado', '«Mire, señorita, yo pensaba que esto no se podía enseñar. Me equivoqué a medias. Pero lo que se enseña en la sala es la mitad. La otra mitad es la señora que llora.»'], ['Julián Vásquez · en casa, con descanso médico', 'Contesta con la mano izquierda', '«Me dijo Rosario que no me van a descontar nada por el accidente. Yo lo que quiero saber es cuándo es la charla de moto. Quiero ir, aunque sea enyesado.»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con lo que oíste?',
    choices: [
      { id: 'a', label: 'Anotar lo de Sandra como un pedido real: reemplazo y horas protegidas para facilitadores. Llevarlo al plan de cinco agencias antes de empezar.',
        res: { q: 'buena', fx: { personas: 4, calidad: 3 }, rel: { sandra: 1 }, cartera: { calle: 'Facilitadores: reemplazo y horas, en el plan' },
          out: 'Agregas una línea al plan: «Facilitadores: dos mañanas al mes con reemplazo». Sin esto, Sandra se quemará antes de la tercera agencia.',
          pro: { ok: 'Cuidar a tus facilitadores internos es cuidar el programa.', info: 'Pídele a Lorena que esto cuente en su evaluación de desempeño.' },
          kusi: ['feliz', 'Quien enseña también necesita que lo cuiden.'] } },
      { id: 'b', label: 'Agradecerles y dejar los pedidos para enero, cuando empiecen las agencias.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: 1 }, cartera: { calle: 'Pedidos para enero' },
          out: 'Les das las gracias de corazón. Sandra dice «ya» con la voz de quien ya lo ha oído antes.',
          pro: { ok: 'Priorizas lo que tienes por delante.', risk: 'Lo que le pides a Sandra crece antes que su reemplazo.' },
          kusi: ['pensando', 'Enero llega rápido.'] } },
    ],
    mirada: { ve: 'Al final de un programa, las personas que lo hicieron posible te dicen lo que falta. Escucharlas te muestra qué se puede sostener y qué se va a romper si escalas sin cuidado.' },
  },
  {
    id: 'y4', t: '14:30', ch: 'whatsapp', who: null, titulo: 'El calendario de Víctor', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio, después de un ceviche rápido', show: ['confianza', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>${F.has('replica_nocturna') ? 'Ya salió el correo de Víctor anunciando el curso nocturno. Dos administradores te llamaron preguntando si es obligatorio y quién paga esas horas. Es tu oportunidad de corregirlo.' : F.has('replica_frenada') ? 'Víctor pidió el calendario de las cinco agencias para hoy. Y lo pidió en serio.' : 'Víctor te pide un calendario para las cinco agencias: en el comité quedó claro que sigue.'}</p><p>Tomas el celular y escribes antes de que empiece la tarde. <mark class="clave">Directo y con fechas</mark>.</p>`,
    type: 'compose', enviaA: 'victor', para: 'Para: Víctor Alvarado · Gerente regional', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cal', t: 'El calendario', ops: [
        { id: 'c1', t: 'Víctor, te paso la propuesta: cinco agencias en enero, una por semana, 90 minutos en la mañana, dentro de la jornada.', ok: true, por: 'Concreto, por etapas y en horario.' },
        { id: 'c2', t: 'Víctor, lo vemos en enero con calma.', ok: false, por: 'No dice nada, y él lo pidió para hoy.' },
      ] },
      { id: 'nec', t: 'Lo que necesitas', ops: [
        { id: 'n1', t: 'Necesito dos facilitadores por agencia y que la colocación del asesor acompañado cuente también para ellos, como con Sandra.', ok: true, por: 'Repites lo que ya funcionó.' },
        { id: 'n2', t: 'Y si se puede, en la noche, para que no pierdas calle.', ok: false, por: 'Sería sobretiempo: voluntario, y se paga o se compensa.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', ops: [
        { id: 'k1', t: 'La decisión de ampliar más la tomamos con los números de los 90 días. Lo hacemos juntos.', ok: true, por: 'Ata lo que sigue a la medición.' },
        { id: 'k2', t: 'Con esto, la mora va a bajar seguro.', ok: false, por: 'Prometes lo que todavía no se sabe.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'n1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { victor: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['calendario_listo'], cartera: { replica: q === 'riesgosa' ? 'Sin calendario claro' : '5 agencias en enero, en horario' },
        out: q === 'buena' ? 'Víctor manda un audio de seis segundos desde el carro: «Ya. Una por semana. Pero la primera, Chepén». No es un sí con entusiasmo. Con Víctor, es lo más parecido.' : q === 'aceptable' ? 'Víctor responde: «Ok, pero quiero saber bien quién enseña». Te toca precisar.' : 'Víctor responde: «Eso no es un calendario». Y tiene razón.',
        pro: { ok: 'Escalar por etapas, con lo que ya funcionó, es la forma de que un piloto sobreviva.', risk: 'Lo que se promete a un gerente se le debe cumplir, o se devuelve con intereses.', info: 'Usa las mismas condiciones en cada agencia, para poder comparar.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Víctor dijo «ya»!' : '¿Con fechas?'],
      };
    },
    rules: [[LEY, 'D.S. 007-2002-TR, art. 9: el sobretiempo es voluntario.'], [BP, 'Escala por etapas, con las mismas condiciones, para poder comparar.']],
    mirada: {
      ve: 'Terminar bien una negociación con un jefe significa dejarla escrita, con fechas, y atada a lo que se va a medir. Eso es lo que convierte un piloto en un programa.',
      visual: { tipo: 'linea', titulo: 'De un piloto a un programa', hitos: [['Hoy', '20 asesores, una agencia'], ['Enero', 'Cinco agencias, una por semana'], ['90 días', 'Mora y rechazados'], ['Después', 'Decidir si se amplía']] },
    },
  },
  {
    id: 'y5', t: '16:30', ch: 'presencial', who: 'lorena', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Azotea de la sede, con vista a la Plaza', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Lorena te lleva a la azotea, donde fuma su único cigarro de la semana. Desde aquí se ven las torres de la Catedral y, muy lejos, el cerro Campana. La tarde de Trujillo sigue tibia.</p><p>${F.has('presion_negada') ? 'Milagros renunció hoy. Lorena lo sabe, y tú también. ' : ''}«Una pregunta, sin evaluación de por medio, y no me des la respuesta correcta. <mark class="clave">¿Te ves en este puesto?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí. Me gustó salir a la calle, ver a Kevin cerrar un acuerdo y sentir que algo cambió por lo que aprendió.',
        res: { q: null, fx: { confianza: 3, personas: 2 }, flags: ['te_ves_si'],
          out: 'Lorena sonríe de lado: «Eso no se enseña. Lo que sí te voy a enseñar es a no olvidar lo otro: Excel, registros, fechas. Y a descansar».', kusi: ['celebra', '¡Qué bacán! Te viste, y lo dijiste.'] } },
      { id: 'b', label: 'Me veo, pero me preocupa: la presión, los horarios y que lo más importante dependa de cosas que no controlo, como la meta.',
        res: { q: null, fx: { confianza: 2, personas: 3 }, flags: ['te_ves_duda'],
          out: 'Lorena asiente despacio: «A mí también. Veinte años y sigue siendo cierto. La diferencia es que aprendes qué puedes mover y qué no. Y a quién llamar para lo otro».', kusi: ['animo', 'Dudar también es mirar de frente.'] } },
      { id: 'c', label: 'No estoy segura. Creo que prefiero un trabajo más técnico y menos de negociar con todo el mundo.',
        res: { q: null, fx: { personas: 3 }, flags: ['te_ves_no'],
          out: 'Lorena no se sorprende: «Mejor saberlo en dos semanas que en dos años. Hay lugares para ti en planillas o en analítica. Por ahora, igual te espero el lunes». Y sonríe: «Te va a tocar».', kusi: ['curioso', 'Saberlo también es aprender.'] } },
    ],
    mirada: { ve: 'Capacitación y Desarrollo es un puesto para quien disfruta del proceso de ver a otros mejorar, y aguanta que los resultados tarden. Cuestionarse si es para ti es parte de vivirlo, y ninguna de las tres respuestas es incorrecta.' },
  },
  {
    id: 'y6', t: '17:40', ch: 'correo', who: null, titulo: 'El correo de las 5:40', banner: 'assets/esc/alarma.webp', show: ['tiempo', 'calidad', 'confianza'],
    mail: { from: 'Elvira Cabanillas · Gerencia General', to: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'Reservado · lunes 8:00' },
    body: () => `<p>Lo que voy a decirles es reservado hasta el lunes. Chimú absorbe las 12 agencias de una cooperativa de Cajamarca que está cerrando. <mark class="clave">Llegan 90 asesores, con otra manera de evaluar y cobrar</mark>.</p><p>Las espero el lunes a las 8:00, con una primera idea de cómo los recibimos.</p><p>Elvira</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder, con Lorena en copia, que irán el lunes. Pedir lo que hace falta: quiénes son, su mora, sus metas y cómo trabajan.',
        res: { q: 'buena', fx: { calidad: 4, confianza: 3 }, rel: { lorena: 1 }, flags: ['cajamarca_datos'], cartera: { cajamarca: 'Datos pedidos para el lunes' },
          responde: 'Elvira, gracias. Estaremos el lunes a las 8:00. Para llevar una primera idea, ¿nos podrían compartir la lista de las agencias, la mora de su cartera, sus metas y cómo evalúan y cobran? Lo trataremos como reservado.',
          out: 'Elvira responde en dos minutos: «Eso es lo primero que debí mandar». Lorena te escribe desde el estacionamiento: «Lunes. 7:30. Café. Ve a dormir».',
          pro: { ok: 'Diagnosticar antes de prometer: lo aprendiste el primer lunes, y hoy lo volviste a usar.', risk: 'Tendrás dos semanas muy difíciles por delante.', info: 'Reservado significa reservado: esto no se comenta ni con Sandra.' },
          kusi: ['celebra', '¡Primero el diagnóstico! Ya no eres la del primer lunes.'] } },
      { id: 'b', label: 'Responder que sí, que en dos semanas tendrán una inducción lista para los 90 asesores.',
        res: { q: 'riesgosa', fx: { calidad: -3, confianza: 2 }, flags: ['cajamarca_promesa'], cartera: { cajamarca: 'Inducción prometida a ciegas' },
          responde: 'Elvira, claro que sí. En dos semanas tendremos lista la inducción para los 90 asesores.',
          out: 'Elvira responde con un «Excelente». Lorena te llama diez segundos después. No está contenta. «¿Y si ya tienen menos mora que nosotras? ¿Qué les vamos a enseñar?»',
          pro: { ok: 'Muestras disposición.', risk: 'Prometes una solución antes de conocer el problema: lo mismo que le criticaste a Ronald.' },
          kusi: ['preocupado', '¿Otra vez una solución antes del problema?'] } },
    ],
    rules: [[BP, 'Antes de prometer una capacitación, conoce a las personas y el problema. También con la presión de la gerencia.']],
    mirada: {
      ve: 'Este trabajo no se acaba: se abre. Una fusión trae a 90 personas con otra cultura, otros métodos y miedo a perder el empleo. Y todo lo que aprendiste en estas dos semanas será puesto a prueba: el diagnóstico, los jefes, la ley y la medición. Este capítulo se termina; el puesto, no.',
      visual: { tipo: 'mensaje', titulo: 'El lunes a las 8:00', txt: '12 agencias de una cooperativa de Cajamarca. 90 asesores que evalúan y cobran de otra manera. Víctor, Riesgos, Mario, Rosario y tú, en la misma sala. Continuará.' },
    },
  },
];
