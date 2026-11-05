// Asistente de RR.HH. · Capítulo 8 · «La apertura» · Semana 2, miércoles.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas (todas ya verificadas en capítulos anteriores):
// - Alta en el T-Registro dentro del día de ingreso (SUNAT).
// - D.S. 007-2002-TR, art. 9: el sobretiempo es voluntario. https://noticierocontable.com/decreto-supremo-007-2002-tr
// - D.S. 003-97-TR, art. 30 g): actos que afectan la dignidad del trabajador.
//   https://lpderecho.pe/jurisprudencia-articulo-30-tuo-decreto-legislativo-728-despido-hostilidad
// - Ley 29783, art. 49 a): el empleador garantiza la seguridad y la salud de los trabajadores en el centro de trabajo.
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - Política interna ficticia de Supermercados Norte: los familiares pueden postular, pero no ser supervisados por su pariente (cap. 1).

export const CAP = {
  n: 8, titulo: 'La apertura', dia: 'Semana 2, miércoles', foto: 'assets/foto2/celebra-brazos.webp',
  lugar: 'Tienda 13 · Castilla, Piura',
  inicio: '05:30', fin: '21:00', cierreHora: '20:45',
  apertura: 'Miércoles, 5:30 de la mañana. Castilla todavía está oscura, pero en la puerta de la tienda 13 ya hay globos verdes, una banda de música alquilada y una cola de señoras con sus bolsas reutilizables. A las 8:00 se abren las puertas.', boton: 'Llegar a la tienda',
  kusi: 'Hoy se ve todo lo que hiciste en ocho días… y todo lo que faltó. ¡A sostener la tienda!',
  lead: 'Cubriste dos ausencias sin atajos, diste la última charla antes de abrir, frenaste un grito frente a los clientes, atendiste a Yorgelis y escuchaste a Wilmer al final del día.',
  reflexion: '¿Cuál fue el momento del día en que tu trabajo de la semana pasada se notó más?',
  siguiente: { n: 9, titulo: 'La cola de dudas', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Hoy abre' },
  { id: 'turnos', p: 'Cuadro de turnos', j: 'Wilmer · Tienda 13', d: 0, e: 'Primer día real' },
  { id: 'reemplazos', p: 'Reemplazos', j: 'RR.HH.', d: 0, e: 'Lista de finalistas' },
  { id: 'casos', p: 'Atención de casos', j: 'Betty · RR.HH.', d: 0, e: 'Caso de Karina en curso' },
  { id: 'incidencias', p: 'Registro de incidencias', j: 'RR.HH.', d: 0, e: 'Vacío' },
];

export const FUTURO = {
  reemplazos_legales: ['Las ausencias se cubrieron con gente del equipo, sin atajos.', 'César no tendrá sorpresas en la planilla.'],
  reemplazo_informal: ['Entró a trabajar alguien sin alta el día de la apertura.', 'Mañana habrá que explicarlo.'],
  charla_buena: ['La charla de las 7:30 dejó claras las rutas y el sobretiempo voluntario.', 'Mañana, menos dudas sobre horas extra.'],
  karina_defendida: ['Frenaste a Wilmer frente a la caja de Karina sin hacer un escándalo.', 'Karina lo recordará cuando Betty le pregunte.'],
  karina_sola: ['Viste a Wilmer gritarle a Karina y esperaste.', 'Ella lo contará así en la investigación.'],
  yorgelis_atendida: ['Yorgelis fue atendida rápido y con su seguro activo.', 'Mañana te preguntará si le descuentan el día.'],
  reporte_betty: ['Betty recibió a mediodía un reporte claro de la mañana.', 'Mañana sabrá por dónde empezar.'],
  wilmer_escuchado: ['Escuchaste a Wilmer sin confirmar quién se quejó.', 'Llegará más tranquilo a la conversación con Betty.'],
  wilmer_sabe: ['Le confirmaste a Wilmer quién se quejó.', 'Eso cambiará la investigación de mañana.'],
  terna_respetada: ['El reemplazo entró por la terna, con contrato, alta y un supervisor que no es pariente.', 'Wilmer lo acepta a regañadientes.'],
  brayan_tio: ['Brayan quedará bajo las órdenes de su tío.', 'El equipo lo comentará.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera', who: 'karina' },
  rosa: { n: 'Rosa Chiroque', sub: 'Panadera', c: '#9C4221' },
  nuevos: { n: 'Tienda 13 · Equipo', sub: '45 participantes', c: '#C05621' },
};

export const WSP = [
  { chat: 'rosa', t: '05:02', de: 'Rosa', txt: 'Señorita, buenos días. Mi hijito sigue con fiebre, lo llevo a la posta. Hoy no voy a poder 😔 Ya le avisé al maestro.', si: 'rosa_avisa' },
  { chat: 'nuevos', t: '05:40', de: 'Kevin', txt: 'Turno noche terminado 💪 Todo repuesto. La salida 2 está libre.', si: 'simulacro_lecciones' },
  { chat: 'nuevos', t: '06:20', de: 'Milagros', txt: 'Señorita, hay un choque en el puente Cáceres y el colectivo no avanza. Voy a llegar como una hora tarde. Perdón 🙏' },
  { chat: 'grupo', t: '06:30', de: 'César', txt: 'Las altas de todos están OK. Si hoy entra alguien nuevo, me avisas antes de que entre. ANTES 🙏' },
  { chat: 'grupo', t: '08:02', de: 'Betty', txt: '¡Abrimos! 🎉🛒 Gracias a todo el equipo. Estoy en la entrada con gerencia.' },
  { chat: 'wilmer', t: '15:40', de: 'Wilmer', txt: 'Si hubieras metido a Brayan desde el principio, ahora tendría un cajero más. Solo digo.', si: 'sobrino_proceso' },
];

export const CORREOS = [
  { t: '06:10', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Hoy', html: '<p>Hoy no te pido que todo salga perfecto. Te pido que, si algo sale mal, me entere por ti antes que por gerencia.</p><p>Betty</p>' },
  { t: '12:10', de: 'Gerencia de Operaciones', para: 'Betty Seminario; RR.HH. Supermercados Norte', asunto: 'Apertura T13 · primeras horas', html: '<p>Felicitaciones por la apertura. Hubo colas largas en la caja 6 entre 8:00 y 9:00 y nos reportan una trabajadora atendida por un malestar. Por favor, envíen un breve informe al final del día.</p>' },
];

export const QUIZ = [
  { q: 'Falta una cajera el día de la apertura y en la puerta hay un amigo del jefe dispuesto a entrar. ¿Qué haces?', ops: ['Lo dejas entrar: es una emergencia', 'Cubres con alguien del equipo ya registrado y, si entra alguien nuevo, va con contrato y alta ese mismo día', 'Cierras la caja todo el día', 'Le pides al turno noche que se quede 12 horas'], ok: 1, por: 'Nadie trabaja sin alta: el alta va dentro del día de ingreso, también un día de apertura.' },
  { q: 'Una trabajadora se desmaya en la caja. Lo primero es…', ops: ['Buscar su contrato', 'Atenderla con el brigadista y el botiquín, y evaluar si necesita traslado', 'Llamar a su jefe para que decida', 'Cerrar la caja y esperar'], ok: 1, por: 'Primero la persona. Lo administrativo viene después.' },
  { q: 'El jefe de tienda le grita a una cajera frente a los clientes. ¿Qué es lo más prudente?', ops: ['Gritarle tú a él para defenderla', 'Sacarlo de la escena con calma, que otra persona tome la caja, y reportarlo', 'Esperar a que termine el día', 'Grabarlo y subirlo al grupo'], ok: 1, por: 'Cortas la situación sin humillar a nadie y dejas registro.' },
  { q: 'Al final del día, Wilmer pregunta si Karina se quejó de él. Respondes…', ops: ['Que sí, para que lo arreglen entre ellos', 'Que lo que cada persona conversa con RR.HH. es reservado, y que mañana Betty quiere conversar con él', 'Que nadie se ha quejado', 'Que no sabes nada'], ok: 1, por: 'Ni confirmas ni mientes: la reserva protege a todos, también a él.' },
  { q: 'El sobrino del jefe está en la terna de reponedores y hay una vacante. Según la política de la empresa…', ops: ['No puede entrar por ser familiar', 'Puede entrar por orden de mérito, pero no bajo la supervisión directa de su tío', 'Entra directo porque el jefe lo conoce', 'Entra si los demás están de acuerdo'], ok: 1, por: 'La política de Supermercados Norte permite postular a familiares, pero no que los supervise su pariente.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '06:40', ch: 'sistema', who: null, titulo: 'Dos que no llegan', banner: 'assets/esc/reloj.webp', lugar: 'Oficina provisional de la tienda 13', show: ['tiempo', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Revisas la asistencia del turno mañana contra el cuadro, como decía tu plan. ${F.has('rosa_avisa') ? 'Rosa te avisó a las 5: no viene, su hijo sigue con fiebre.' : 'Rosa no marcó y no contesta el celular.'} Milagros está atrapada en un choque en el puente Cáceres. A las 8:00 abren.</p><p>Wilmer entra con un café: «Mi pata está en la puerta, por si acaso. <mark class="clave">Reemplazos ya</mark>».</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos medidas para cubrir las ausencias de la mañana.', boton: 'Cubrir así', resumen: 'Cubriste con',
    cols: ['Medida', 'Lo que implica'],
    rows: [
      { id: 'pan', cells: ['El maestro de panadería arranca con el ayudante y se reduce el primer horneado', 'Menos pan a las 8, más a las 10'] },
      { id: 'miriam', cells: ['Miriam abre la caja 6 hasta que llegue Milagros', 'Supervisión de cajas a medias por una hora'] },
      { id: 'pata', cells: ['El amigo de Wilmer entra a la caja «por hoy»', 'Sin contrato, sin alta, sin capacitación'] },
      { id: 'noche', cells: ['El turno noche se queda cuatro horas más «porque es la apertura»', 'Doce horas seguidas, sin preguntarles'] },
      { id: 'cierra', cells: ['Cerrar la caja 6 hasta las 9', 'Colas más largas en la primera hora'] },
    ],
    score: { pan: 3, miriam: 3, pata: -4, noche: -3, cierra: 1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      const mal = picks.includes('pata') || picks.includes('noche');
      return {
        q, fx: { cumplimiento: mal ? -6 : 4, tiempo: q === 'buena' ? 2 : 0, personas: picks.includes('noche') ? -4 : 2 }, rel: { wilmer: picks.includes('pata') ? 1 : -1 },
        flags: [mal ? 'reemplazo_informal' : 'reemplazos_legales'], cartera: { reemplazos: mal ? 'Ausencias cubiertas con atajos' : 'Ausencias cubiertas con el equipo' },
        out: q === 'buena' ? 'A las 8:00, la caja 6 abre con Miriam y el horno ya huele. Wilmer gruñe: «Mi pata se quedó con las ganas». Milagros llega a las 9:10, sudando, y Miriam le entrega la caja.' : picks.includes('pata') ? 'El amigo de Wilmer se pone un polo de la tienda y se sienta en la caja 6. Si se equivoca con el dinero o se lastima, nadie sabe quién responde.' : 'Las ausencias se cubren a medias. La primera hora se siente.',
        pro: { ok: 'Cubres con gente que ya tiene contrato, alta y capacitación.', risk: 'Un «por hoy» sin alta o doce horas sin preguntar son atajos que se pagan después.', info: 'Anota la hora en que llegó Milagros y la razón: mañana te preguntará por su tardanza.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Ausencias cubiertas sin atajos!' : 'Ese atajo va a costar.'],
      };
    },
    rules: [[LEY, 'Nadie empieza a trabajar sin su alta en el T-Registro, que va dentro del día de ingreso (SUNAT).'], [LEY, 'El sobretiempo es voluntario (D.S. 007-2002-TR, art. 9).']],
    mirada: {
      ve: 'El día de la apertura siempre falta alguien. Lo que se pone a prueba no es si hay ausencias, sino si RR.HH. tiene un plan que no dependa de la improvisación del jefe.',
      visual: { tipo: 'matriz', x: 'Rapidez', y: 'Legal y seguro', cuadrantes: ['Rápido y seguro', 'Seguro, pero lento', 'Ni rápido ni seguro', 'Rápido, pero riesgoso'], items: [['Miriam en caja 6', .75, .85], ['Panadería con ayudante', .7, .8], ['Cerrar la caja', .4, .7], ['El pata de Wilmer', .9, .1], ['Turno noche 12 horas', .8, .15]] },
    },
  },
  {
    id: 'a2', t: '07:30', ch: 'presencial', who: null, titulo: 'Cinco minutos antes', banner: 'assets/foto/plano-equipo.webp', lugar: 'Pasillo central de la tienda 13', show: ['personas', 'cumplimiento', 'confianza'],
    body: () => `<p>El equipo forma un círculo entre las góndolas, con los polos verdes recién planchados. Afuera se escucha la banda tocando «El Cóndor Pasa». Betty te pasa la palabra: «Tú los conoces a todos».</p><p>Tienes cinco minutos. <mark class="clave">Elige qué les dices</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu charla de cinco minutos.', boton: 'Dar la charla',
    bloques: [
      { id: 'seg', t: 'Seguridad', n: 2, ops: [
        { id: 's1', t: 'Las salidas de emergencia y el punto de reunión, con la salida 2 ya libre.', ok: true, por: 'Lo que corregiste ayer en el simulacro.' },
        { id: 's2', t: 'Dónde está el botiquín y quiénes son los brigadistas de hoy.', ok: true },
        { id: 's3', t: 'Que si hay una emergencia, primero terminen de atender al cliente.', ok: false, por: 'En una emergencia, primero se evacúa.' },
      ] },
      { id: 'horas', t: 'Horario', n: 1, ops: [
        { id: 'h1', t: 'Si alguien les pide quedarse más, es voluntario, y se anota con hora de salida real.', ok: true, por: 'El sobretiempo es voluntario y se registra.' },
        { id: 'h2', t: 'Hoy nadie mira el reloj: es la apertura.', ok: false, por: 'Suena motivador, pero es sobretiempo obligatorio sin registro.' },
      ] },
      { id: 'apoyo', t: 'A quién acudir', n: 2, ops: [
        { id: 'a1', t: 'Que estás en la oficina todo el día, para lo que sea.', ok: true },
        { id: 'a2', t: 'Que hoy se van a equivocar, y que equivocarse el primer día es normal.', ok: true, por: 'Baja el miedo de las personas nuevas.' },
        { id: 'a3', t: 'Que cualquier problema se lo digan primero a Wilmer.', ok: false, por: 'Si el problema es con el jefe, esa vía deja a la persona sin salida.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : -1, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['charla_buena'] : [],
        out: q === 'buena' ? 'Cuando dices «hoy se van a equivocar, y está bien», don Santos suelta una carcajada y el círculo se relaja. Betty aplaude primero.' : 'La charla motiva, pero deja alguna idea que mañana traerá problemas.',
        pro: { ok: 'Seguridad, horario y apoyo: lo que una persona nueva necesita escuchar antes de abrir.', risk: '«Nadie mira el reloj» es una frase bonita que termina en horas extra sin pagar.', info: 'Repite la charla al turno tarde: no estaban a las 7:30.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cinco minutos que valen oro!' : 'Alguna frase sobraba…'],
      };
    },
    rules: [[LEY, 'El empleador garantiza la seguridad y salud de los trabajadores en el centro de trabajo (Ley 29783, art. 49 a).'], [LEY, 'El sobretiempo es voluntario (D.S. 007-2002-TR, art. 9).']],
    mirada: {
      ve: 'Los cinco minutos antes de abrir son los que más se recuerdan. Una charla que mezcla seguridad, horario y permiso para equivocarse le dice al equipo que la empresa piensa en ellos, no solo en las ventas.',
      visual: { tipo: 'flujo', titulo: 'Tu charla de las 7:30', pasos: ['Salidas y punto de reunión', 'Botiquín y brigadistas', 'Sobretiempo voluntario', 'Estoy en la oficina', 'Equivocarse es normal'] },
    },
  },
  {
    id: 'a3', t: '09:40', ch: 'presencial', who: 'wilmer', titulo: '«¡Apúrate!»', banner: 'assets/foto2/grito.webp', lugar: 'Línea de cajas', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>La cola de la caja 3 llega hasta los detergentes. Karina se equivoca con un descuento y la impresora de boletas se traba. Wilmer llega desde el fondo y, delante de los clientes, le grita: <mark class="clave">«¡Apúrate, pues! ¡Así no vas a durar!»</mark></p><p>${F.has('queja_protegida') ? 'Miriam está en la caja 6, cubriendo a Milagros.' : 'Miriam no está cerca.'} Karina tiene las manos temblando sobre el teclado.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Acercarte con calma, decirle a Wilmer que gerencia lo busca en la oficina, pedirle a otra cajera que ayude a Karina y reportárselo a Betty de inmediato.',
        res: { q: 'buena', fx: { etica: 4, personas: 5, confianza: 1 }, rel: { karina: 1, wilmer: -1 }, flags: ['karina_defendida'], cartera: { casos: 'Nuevo hecho registrado: grito en caja 3, 9:40' },
          out: 'Wilmer se va hacia la oficina refunfuñando. Yorgelis, desde la caja 2, ayuda a Karina con el descuento. Dos clientas comentan: «Pobrecita, la chica». Betty te contesta: «Ahí voy».',
          pro: { ok: 'Cortas la situación sin humillar a nadie y dejas registro.', risk: 'Wilmer sabrá que lo sacaste de la escena.', info: 'Anota la hora, las palabras y quiénes lo vieron: es un hecho nuevo para el caso.' },
          kusi: ['animo', 'Sin gritos, sin escándalo. ¡Bien!'] } },
      { id: 'b', label: 'No intervenir ahora para no armar una escena frente a los clientes, y contárselo a Betty en la tarde.',
        res: { q: 'aceptable', fx: { etica: -1, personas: -3 }, flags: ['karina_sola'], cartera: { casos: 'Hecho visto, sin intervenir' },
          out: 'Wilmer se queda detrás de Karina diez minutos más, resoplando. Ella termina la cola sin levantar la mirada. Al mediodía no almuerza.',
          pro: { ok: 'Evitas una escena en público.', risk: 'Karina se queda sola con el jefe del que se quejó, en el peor momento.' },
          kusi: ['triste', 'Ella te vio verlo.'] } },
      { id: 'c', label: 'Decirle en voz alta, frente a todos, que no puede gritarle así a una trabajadora.',
        res: { q: 'riesgosa', fx: { etica: 2, confianza: -4, personas: -1 }, rel: { wilmer: -1 }, cartera: { casos: 'Discusión con Wilmer frente a clientes' },
          out: 'Wilmer te responde más fuerte. Ahora son dos los que gritan en la línea de cajas. Un cliente graba con su celular. Gerencia está en la entrada.',
          pro: { ok: 'Defiendes a Karina.', risk: 'Enfrentar a un jefe en público convierte un problema de trato en un espectáculo, y expone más a Karina.' },
          kusi: ['sorpresa', 'Ahora todos miran a la caja 3…'] } },
    ],
    rules: [[LEY, 'Los actos que afectan la dignidad del trabajador son actos de hostilidad (D.S. 003-97-TR, art. 30 g).'], [BP, 'Corta la situación, protege a la persona y registra el hecho. La discusión, en privado.']],
    mirada: {
      ve: 'La presión de una apertura saca lo peor de un jefe acostumbrado a gritar. Intervenir bien es rápido y discreto: sacar a la persona de la escena, sostener a quien recibe el grito y registrar lo que pasó para que el caso tenga hechos.',
      visual: { tipo: 'balanza', a: { t: 'Enfrentarlo en público', items: ['Espectáculo', 'Un celular grabando', 'Karina más expuesta'] }, b: { t: 'Sacarlo con calma', items: ['La caja sigue', 'Karina acompañada', 'Hecho registrado'] } },
    },
  },
  {
    id: 'a4', t: '11:20', ch: 'presencial', who: null, titulo: 'Yorgelis en el piso', banner: 'assets/3d/scenes/hospital.webp', lugar: 'Caja 2', show: ['personas', 'cumplimiento', 'calidad'],
    body: () => `<p>Un grito en la caja 2. Yorgelis se desmayó: lleva cuatro horas sin tomar agua y no desayunó por dejar a sus hijos en el colegio. Dos clientas la abanican con un folleto de ofertas.</p><p>Te acuerdas de lo que contó Betty el primer día: en la tienda 12, nadie sabía si la cajera que se desmayó tenía seguro. <mark class="clave">Ordena lo que haces</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena lo que haces ante el desmayo de Yorgelis. Usa las flechas.', boton: 'Actuar',
    items: [
      { id: 'brig', t: 'Llamar al brigadista y llevar el botiquín; alejar a los curiosos', por: 'Primero, la persona.' },
      { id: 'eval', t: 'Evaluar con el brigadista si necesita traslado a un centro de salud', por: 'Decidir con criterio, no a ojo.' },
      { id: 'seguro', t: 'Confirmar en el sistema que su alta está activa y a dónde llevarla', por: 'Su seguro empezó el día de su ingreso.' },
      { id: 'familia', t: 'Avisar a su contacto de emergencia', por: 'Sus hijos salen del colegio a la 1.' },
      { id: 'caja', t: 'Cubrir la caja 2 con Miriam o una cajera del turno tarde', por: 'La tienda sigue, pero después.' },
      { id: 'reg', t: 'Registrar lo que pasó: hora, causa aparente, quién la atendió', por: 'Para el informe y para prevenir.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -2 : 3, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['yorgelis_atendida'], cartera: { incidencias: 'Desmayo de Yorgelis registrado' },
        out: q === 'buena' ? 'Yorgelis se recupera con agua y un pan con queso. El brigadista recomienda que la vea un médico. Su alta está activa desde el viernes: la llevas tú misma en taxi. Su vecina recoge a los niños.' : 'Yorgelis se recupera, aunque en el apuro algo se hizo antes de tiempo.',
        pro: { ok: 'Primero la persona, luego lo administrativo, y todo registrado.', risk: 'Si la caja va antes que la persona, la empresa ya eligió.', info: 'Propón un dispensador de agua detrás de las cajas y pausas para hidratarse: en Piura, el calor no perdona.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Esta vez sí sabíamos que tenía seguro.' : 'Primero ella, siempre.'],
      };
    },
    rules: [[LEY, 'El empleador garantiza la seguridad y salud de los trabajadores en el centro de trabajo (Ley 29783, art. 49 a).'], [BP, 'Ante un malestar: atención, evaluación, seguro, familia, reemplazo y registro, en ese orden.']],
    mirada: {
      ve: 'Lo que en la tienda 12 fue un caos, en la tienda 13 es un procedimiento: el alta estaba hecha, el contacto de emergencia estaba en la ficha y había un brigadista. Ese es el trabajo invisible de las dos semanas, visible en cinco minutos.',
      visual: { tipo: 'cambio', titulo: 'Tienda 12 y tienda 13', pares: [['¿Tenía seguro?', 'Alta activa desde su ingreso'], ['Nadie sabía a quién llamar', 'Contacto de emergencia en la ficha'], ['La caja primero', 'La persona primero']] },
    },
  },
  {
    id: 'a5', t: '13:30', ch: 'whatsapp', who: 'betty', titulo: 'El reporte de la mañana', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Vuelves de la clínica con Yorgelis ya tranquila. Gerencia pidió un informe del día y Betty te pidió enterarse por ti antes que por nadie.</p><p>Le escribes <mark class="clave">un resumen de la mañana</mark>.</p>`,
    type: 'compose', enviaA: 'betty', para: 'Para: Betty Seminario', boton: 'Enviar el resumen',
    prompt: 'Arma tu resumen eligiendo una frase de cada parte.',
    slots: [
      { id: 'aus', t: 'Ausencias', ops: [
        { id: 'a1', t: 'Ausencias: Rosa (hijo enfermo) y Milagros (llegó 9:10 por un choque). Cubrimos con Miriam y el maestro de panadería.', ok: true, por: 'Hechos, causas y cómo se cubrió.' },
        { id: 'a2', t: 'Un par de faltas, nada grave.', ok: false, por: 'No dice quién, por qué ni cómo se resolvió.' },
      ] },
      { id: 'inc', t: 'Incidentes', ops: [
        { id: 'i1', t: 'Yorgelis se desmayó a las 11:20 por calor y falta de agua. Fue atendida y está bien. Propongo agua y pausas en cajas.', ok: true, por: 'Hecho, estado y propuesta.' },
        { id: 'i2', t: 'Yorgelis se desmayó porque no desayunó.', ok: null, por: 'Es cierto, pero carga toda la causa en ella y no propone nada.' },
      ] },
      { id: 'caso', t: 'El caso de Karina', ops: [
        { id: 'c1', t: 'Hubo un hecho nuevo con Wilmer en la caja 3 a las 9:40. Lo registré. Te lo cuento en persona.', ok: true, por: 'Le avisas sin poner detalles delicados por WhatsApp.' },
        { id: 'c2', t: 'Wilmer volvió a gritarle a Karina delante de todos, como siempre 😤', ok: false, por: 'Detalles y opinión por WhatsApp, sobre un caso en curso.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'i1', 'c1'].filter(x => Object.values(sel).includes(x)).length, mal = sel.caso === 'c2';
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : mal ? -2 : 1, calidad: q === 'buena' ? 3 : 0, cumplimiento: mal ? -2 : 1 }, rel: { betty: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['reporte_betty'],
        out: q === 'buena' ? 'Betty responde en dos minutos: «Gracias. Con esto armo el informe para gerencia. Lo del agua lo pido hoy». A las 4 llega un bidón de agua para las cajas.' : mal ? 'Betty te llama: «No me pongas eso por WhatsApp, por favor. Lo hablamos en persona».' : 'Betty agradece, pero te pide más detalles para el informe.',
        pro: { ok: 'Un reporte con hechos, causas y propuestas deja a la jefa lista para responder.', risk: 'Un caso delicado no se cuenta con detalles ni emojis por WhatsApp.', info: 'Guarda tu reporte: es la base del informe del día.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡Betty se enteró por ti!' : mal ? 'Eso no iba por chat.' : 'Le faltó algo.'],
      };
    },
    rules: [[BP, 'A la jefa, hechos y propuestas. Lo delicado, en persona.']],
    mirada: {
      ve: 'En un día caótico, la jefa necesita una sola cosa de ti: saber qué pasó antes que los demás. Un buen reporte separa lo que se resolvió, lo que hay que decidir y lo que se conversa en persona.',
      visual: { tipo: 'mensaje', titulo: 'Tu reporte de la mañana', txt: 'Ausencias: Rosa y Milagros, cubiertas. Yorgelis se desmayó a las 11:20 y está bien; propongo agua y pausas en cajas. Hubo un hecho nuevo en la caja 3: te lo cuento en persona.' },
    },
  },
  {
    id: 'a6', t: '18:30', ch: 'presencial', who: 'wilmer', titulo: 'Wilmer, al final del día', banner: 'assets/foto/cafe.webp', lugar: 'Oficina provisional de la tienda 13', show: ['confianza', 'etica', 'personas'],
    body: () => `<p>La tienda vendió más de lo esperado. Wilmer entra a tu oficina, se sienta en la silla plegable y se queda un rato callado. Tiene la camisa empapada.</p><p>«En la tienda 12 me echaron la culpa de todo. Esta vez no quería que fallara nada… y igual se me fue la mano, ¿no?» Te mira fijo. <mark class="clave">«La Zapata se quejó de mí, ¿verdad?»</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer la presión que tuvo, decirle que lo que cada persona conversa con RR.HH. es reservado, y que mañana Betty quiere conversar con él sobre cómo trata al equipo.',
        res: { q: 'buena', fx: { confianza: 3, etica: 4, personas: 2 }, rel: { wilmer: 1 }, flags: ['wilmer_escuchado'],
          out: 'Wilmer suspira: «Ya. Mañana hablo con Betty». Antes de irse, te dice: «La gente estuvo bien preparada hoy. Eso fue tuyo». Es lo más cercano a un gracias que te ha dicho.',
          pro: { ok: 'Escuchas al jefe sin traicionar a quien se quejó.', info: 'La pregunta de Wilmer es una señal: está listo para hablar. Avísale a Betty.' },
          kusi: ['animo', 'El jefe duro también tenía miedo.'] } },
      { id: 'b', label: 'Confirmarle que fue Karina, para que lo conversen entre ellos y se arregle rápido.',
        res: { q: 'riesgosa', fx: { etica: -6, personas: -4 }, rel: { wilmer: 0, karina: -1 }, flags: ['wilmer_sabe'],
          out: 'Wilmer asiente despacio: «Ya sabía». Mañana, cuando Betty empiece la conversación, él ya tendrá su versión armada sobre «la chica sensible».',
          pro: { ok: 'Le das una respuesta directa.', risk: 'Revelar quién se quejó, sin su permiso, la expone a represalias y destruye la confianza en RR.HH.' },
          kusi: ['indignado', '¡Eso no te tocaba decirlo!'] } },
      { id: 'c', label: 'Decirle que nadie se ha quejado y que fue un día largo para todos.',
        res: { q: 'aceptable', fx: { confianza: -2, etica: -1 }, rel: { wilmer: 0 },
          out: 'Wilmer se va aliviado. Mañana, cuando Betty le hable del caso, recordará que le dijiste que no había nada.',
          pro: { ok: 'Evitas una conversación incómoda.', risk: 'Mentirle al jefe te quita credibilidad cuando el caso avance.' },
          kusi: ['pensando', 'Una mentira chiquita que crece mañana.'] } },
    ],
    rules: [[BP, 'Ante la pregunta «¿quién se quejó?», la respuesta es siempre la misma: es reservado.']],
    mirada: {
      ve: 'Wilmer no es el villano de la historia: es un jefe que aprendió que gritar era la forma de que nada fallara, y al que culparon la última vez. Escucharlo no es justificarlo. La reserva lo protege también a él: le permite llegar a la conversación con Betty sin una guerra declarada.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Wilmer quiere saber', items: ['Quién se quejó'] }, b: { t: 'Lo que puedes darle', items: ['Reconocer su presión', 'La regla de la reserva', 'Una conversación con Betty'] } },
    },
  },
  {
    id: 'a7', t: '20:15', ch: 'llamada', who: null, titulo: 'Cubrir el jueves', banner: 'assets/foto/llamada.webp', lugar: 'Oficina provisional de la tienda 13', show: ['tiempo', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>La tienda cierra a las 10. Antes de irte, aseguras el turno de mañana. Yorgelis tiene dos días de descanso médico.${F.has('sobrino_proceso') ? ' Wilmer insiste en que Brayan, que quedó segundo en la terna de reponedores, puede cubrir lo que haga falta.' : ''}</p>`,
    type: 'calls',
    calls: [['Yorgelis Pérez', 'Contesta: tiene descanso médico', 'Ya estoy mejor, señorita. ¿Me van a descontar estos dos días? Es que con dos niños…'], ['Rosa Chiroque', 'Contesta: vuelve mañana', 'Ya le bajó la fiebre a mi hijito. Mañana a las 3 estoy en el horno.'], ['Kevin Chunga', 'Contesta: podría cubrir en caja', 'Yo hice la práctica de caja también. Si me necesitan de día, puedo.']],
    prompt: 'Falta una persona en caja por dos días. ¿Cómo cubres?',
    choices: [
      { id: 'a', label: 'Que Kevin pase a caja estos dos días con su turno normal, y cubrir su puesto en reposición con el siguiente de la terna, contratado y dado de alta mañana, bajo un supervisor que no sea pariente suyo.',
        res: { q: 'buena', fx: { cumplimiento: 4, tiempo: -2, personas: 3 }, rel: { wilmer: 0 }, flags: ['terna_respetada'], cartera: { reemplazos: 'Kevin a caja · siguiente de la terna en reposición' },
          envia: [['grupo', 'César: mañana ingresa el siguiente de la terna de reposición. Te paso sus datos verificados hoy para el alta de mañana.']],
          out: 'El siguiente de la terna es Jean Pierre Sernaqué, de La Unión, que acepta feliz. Wilmer insiste un rato con Brayan y al final cede: «Ya, ya, como diga la política».',
          pro: { ok: 'Cubres con el equipo, respetas el orden de la terna y la política de familiares.', info: 'Avísale a Yorgelis que el descanso médico se justifica con su certificado: dile que se lo explicará César mañana.' },
          kusi: ['celebra', 'Mérito, alta y supervisor correcto. ¡Bacán!'] } },
      { id: 'b', label: 'Que Brayan entre mañana a caja, bajo las órdenes de Wilmer: él lo conoce y lo puede entrenar.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, etica: -3 }, rel: { wilmer: 1 }, flags: ['brayan_tio'], cartera: { reemplazos: 'Brayan en caja, supervisado por su tío' },
          out: 'Brayan entrará mañana a caja, al lado de Karina, bajo la supervisión de su tío. El equipo ya lo comenta en el grupo de los reponedores.',
          pro: { ok: 'Wilmer queda contento.', risk: 'La política de la empresa no permite que un pariente supervise a su familiar, y el equipo lo nota.' },
          kusi: ['preocupado', 'Otra vez el tío y el sobrino…'] } },
      { id: 'c', label: 'Pedirle a Karina que haga doble turno estos dos días: ya conoce la caja.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -3 }, rel: { karina: -1 }, cartera: { reemplazos: 'Karina en doble turno' },
          out: 'Karina dice que sí porque no se atreve a decir que no. Mañana trabajará 16 horas al lado de Wilmer.',
          pro: { ok: 'Resuelves con alguien que sabe.', risk: 'Un doble turno es sobretiempo, y el sobretiempo es voluntario. Además, la dejas más horas cerca del jefe de su queja.' },
          kusi: ['indignado', '¿Dieciséis horas, y justo ella?'] } },
    ],
    rules: [[POL, 'Los familiares pueden trabajar en la empresa, pero no bajo la supervisión directa de su pariente.'], [LEY, 'El sobretiempo es voluntario (D.S. 007-2002-TR, art. 9).']],
    mirada: {
      ve: 'Una buena terna de selección es oro el día después de la apertura: permite cubrir con mérito, rápido y sin inventar. Y una política aplicada igual para todos, incluso al sobrino del jefe, es lo que hace que el equipo confíe en RR.HH.',
      visual: { tipo: 'flujo', titulo: 'Cubrir sin atajos', pasos: ['Mover a alguien del equipo', 'Llamar al siguiente de la terna', 'Contrato y alta mañana', 'Supervisor que no sea pariente'] },
    },
  },
];
