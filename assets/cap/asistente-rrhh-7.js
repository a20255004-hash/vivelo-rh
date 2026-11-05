// Asistente de RR.HH. · Capítulo 7 · «Ensayo general» · Semana 2, martes.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas:
// - D.S. 007-2002-TR (TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo), art. 8: horario nocturno
//   de 22:00 a 06:00; quien trabaja de noche no puede percibir menos que la RMV con una sobretasa del 35 %.
//   Art. 9: el trabajo en sobretiempo es voluntario, tanto en su otorgamiento como en su prestación.
//   https://noticierocontable.com/decreto-supremo-007-2002-tr
//   https://lpderecho.pe/cas-lab-14239-2015-lima-sobretasa-trabajo-nocturno-aplica-perciban-remuneracion-minima-vital
//   https://lpderecho.pe/reglamento-ley-jornada-trabajo-horario-trabajo-sobretiempo-decreto-supremo-008-2002-tr/
// - Constitución Política del Perú, art. 25: jornada ordinaria de ocho horas diarias o cuarenta y ocho semanales como máximo.
// - RMV: S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR). RMV + 35 % = S/ 1,660.50 (cálculo).
// - Alta en el T-Registro dentro del día de ingreso (SUNAT), ya citada.

export const CAP = {
  n: 7, titulo: 'Ensayo general', dia: 'Semana 2, martes', foto: 'assets/foto/supervisa.webp',
  lugar: 'Tienda 13 · Castilla, Piura',
  inicio: '07:00', fin: '22:00', cierreHora: '21:30',
  apertura: 'Martes. Mañana abre la tienda 13. Hoy es el ensayo general: simulacro de evacuación al mediodía, simulacro de apertura en la tarde con el personal de la oficina central haciendo de clientes, y el primer turno noche de reposición.', boton: 'Empezar el ensayo',
  kusi: 'Un ensayo sirve para equivocarse hoy y no mañana. ¡Que se equivoque todo lo que tenga que equivocarse!',
  lead: 'Corregiste el cuadro de turnos, armaste el turno noche sin obligar a nadie, sacaste lecciones del simulacro y frenaste a los «ayudantes» sin contrato.',
  reflexion: '¿Qué aprendiste del ensayo que nadie habría visto si la tienda abría directamente?',
  siguiente: { n: 8, titulo: 'La apertura', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Mañana abre' },
  { id: 'examenes', p: 'Exámenes médicos de ingreso', j: 'Clínica San Miguel', d: 0, e: 'Grupo 5, el último, hoy' },
  { id: 'turnos', p: 'Cuadro de turnos', j: 'Wilmer · Tienda 13', d: 0, e: 'Borrador de Wilmer' },
  { id: 'uniformes', p: 'Uniformes y credenciales', j: 'Logística', d: 0, e: 'Llegan los polos que faltaban' },
  { id: 'casos', p: 'Atención de casos', j: 'Betty · RR.HH.', d: 0, e: 'Caso de Karina en curso' },
];

export const FUTURO = {
  turnos_corregidos: ['El cuadro de turnos respeta la jornada, la noche y las restricciones.', 'César podrá pagarlo sin sorpresas.'],
  turnos_wilmer: ['El cuadro de turnos de Wilmer quedó como estaba.', 'César lo descubrirá al calcular la planilla.'],
  noche_voluntaria: ['El turno noche se armó con voluntarios y su pago nocturno.', 'Nadie llegará obligado a las 10 de la noche.'],
  noche_obligada: ['Mandaste de noche a quienes «no tienen hijos».', 'Alguien lo va a reclamar.'],
  simulacro_lecciones: ['El informe del simulacro va al comité con lo que de verdad falló.', 'La salida 2 estará libre mañana.'],
  sin_informales: ['No entró nadie a trabajar sin contrato ni alta.', 'Wilmer está molesto, pero cubierto.'],
  informales_dentro: ['Dos «ayudantes» de Wilmer trabajarán sin contrato.', 'Si les pasa algo, nadie sabrá cómo responder.'],
  plan_apertura: ['Tienes un plan de RR.HH. para la mañana de la apertura.', 'Mañana sabrás a quién llamar a las 5:30.'],
  rosa_avisa: ['Rosa sabe que puede avisarte a las 5 si no puede llegar.', 'Tendrás tiempo de reaccionar.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera nueva', who: 'karina' },
  nuevos: { n: 'Tienda 13 · Nuevos ingresos', sub: '45 participantes', c: '#C05621' },
  rosa: { n: 'Rosa Chiroque', sub: 'Panadera', c: '#9C4221' },
};

export const WSP = [
  { chat: 'grupo', t: '06:40', de: 'Betty', txt: 'Ensayo general 🎬 Hoy me quedo en la tienda hasta el final. César viene a las 4 a hacer de cliente, pobre.' },
  { chat: 'grupo', t: '06:52', de: 'César', txt: 'Voy a comprar puro sencillo para joder a las cajeras con el vuelto 😈' },
  { chat: 'karina', t: '07:15', de: 'Karina', txt: 'Buenos días, señorita. Ayer con la señora Miriam todo bien. Nadie gritó 🙏', si: 'queja_protegida' },
  { chat: 'karina', t: '07:15', de: 'Karina', txt: 'Buenos días… El señor Wilmer ayer no me habló en toda la tarde.', si: 'queja_expuesta' },
  { chat: 'wilmer', t: '08:10', de: 'Wilmer', txt: 'Te mandé el cuadro de turnos. Ya está, no lo toques mucho que me costó toda la noche.' },
  { chat: 'nuevos', t: '10:05', de: 'Yorgelis', txt: '¿Ya llegaron los polos S? Me prestaron uno de mi prima 🙈', si: 'tallas_xl' },
  { chat: 'wilmer', t: '17:05', de: 'Wilmer', txt: 'Para el turno noche de mañana traigo a dos patas del barrio. Les pago yo, por esta semana nomás. Problema resuelto.' },
  { chat: 'rosa', t: '20:50', de: 'Rosa', txt: 'Señorita, disculpe la hora. Mi hijito está con fiebre. ¿La puedo llamar?' },
];

export const CORREOS = [
  { t: '07:05', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Lo de Milagros', html: '<p>Ayer hablé con Milagros. Rehicimos su contrato juntas, hoja por hoja, y lo volvió a firmar. Contigo hablo a fin de semana: lo que pasó no puede repetirse.</p><p>Betty</p>', si: 'firma_en_blanco' },
  { t: '07:20', de: 'Martín Querevalú · Logística', para: 'RR.HH. Supermercados Norte', asunto: 'Polos S y M', html: '<p>Llegaron los polos que faltaban. Están en el almacén, en bolsas con el nombre de cada uno, como pediste.</p>' },
  { t: '13:30', de: 'Ing. Óscar Alvarado · SST', para: 'RR.HH. Supermercados Norte', asunto: 'Simulacro de evacuación', html: '<p>Necesito tus observaciones del simulacro antes de las 5 para el informe al comité. Solo hechos, por favor.</p>' },
];

export const QUIZ = [
  { q: '¿Cuál es el horario nocturno según el D.S. 007-2002-TR?', ops: ['De 20:00 a 04:00', 'De 22:00 a 06:00', 'De 00:00 a 08:00', 'El que fije el jefe de tienda'], ok: 1, por: 'El art. 8 del D.S. 007-2002-TR fija el horario nocturno entre las 22:00 y las 06:00.' },
  { q: 'Quien trabaja en horario nocturno no puede ganar menos que…', ops: ['La RMV', 'La RMV con una sobretasa del 35 %', 'El doble de la RMV', 'Lo mismo que el turno de día'], ok: 1, por: 'Es el piso del art. 8. Con la RMV de S/ 1,230, son S/ 1,660.50.' },
  { q: 'El jefe quiere que todos se queden dos horas más el día de la apertura, «obligatorio». ¿Qué dice la norma?', ops: ['Puede obligar si es una fecha especial', 'El sobretiempo es voluntario, tanto para pedirlo como para hacerlo', 'Solo es voluntario para las mujeres', 'Se puede obligar si se paga'], ok: 1, por: 'El art. 9 del D.S. 007-2002-TR señala que el sobretiempo es voluntario.' },
  { q: 'Dos «ayudantes» van a trabajar de noche sin contrato ni alta, pagados en efectivo. El riesgo principal es…', ops: ['Ninguno: es solo una semana', 'Trabajan sin estar registrados ni cubiertos, y la empresa responde si algo les pasa', 'Que cobren poco', 'Que no tengan uniforme'], ok: 1, por: 'Quien trabaja subordinado debe tener alta desde su primer día. Sin ella, no hay cobertura ni registro.' },
  { q: 'En el informe de un simulacro de evacuación debes poner…', ops: ['Quién se rió', 'Lo que falló en las salidas, la alarma y el conocimiento de las rutas', 'Que todo salió bien, para no preocupar', 'Las faltas de puntualidad'], ok: 1, por: 'El simulacro sirve para encontrar fallas del sistema, no para señalar personas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:30', ch: 'documento', who: null, titulo: 'El cuadro de Wilmer', banner: 'assets/esc/lupa.webp', lugar: 'Oficina provisional de la tienda 13', show: ['cumplimiento', 'personas', 'calidad'],
    body: (n, F) => `<p>${F.has('firma_en_blanco') ? 'Leíste el correo de Betty sobre Milagros con un nudo en la garganta. Hoy no hay tiempo para lamentarse: toca hacer bien lo que queda. ' : ''}Wilmer pasó la noche armando el cuadro de turnos de la semana de apertura en un Excel con colores fosforescentes. César necesita una versión final hoy para calcular la planilla.</p><p>Antes de mandarlo, <mark class="clave">lo lees con la ley al lado</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la norma o lo que debería corregirse en el cuadro.',
    doc: { t: 'Cuadro de turnos · semana de apertura', sub: 'Tienda 13 · elaborado por Wilmer Sosa' },
    lines: [
      { id: 'turnos', t: 'Turnos: mañana de 7:00 a 15:00, tarde de 14:00 a 22:00 y noche de 22:00 a 6:00, para reposición.' },
      { id: 'pago', t: 'Turno noche: «mismo sueldo que el de día, S/ 1,230».', bad: LEY, why: 'En horario nocturno, la remuneración no puede ser menor que la RMV con una sobretasa del 35 %: S/ 1,660.50.' },
      { id: 'doble', t: 'Yorgelis: turno tarde y turno noche el día de la apertura, «porque es la más rápida».', bad: LEY, why: 'Son 16 horas seguidas. La jornada ordinaria es de ocho horas diarias, y el sobretiempo es voluntario.' },
      { id: 'todos', t: 'Día de apertura: «todos se quedan dos horas más, obligatorio».', bad: LEY, why: 'El sobretiempo es voluntario, tanto para pedirlo como para hacerlo. Y si se hace, se registra y se paga.' },
      { id: 'pan', t: 'Panadería: el mismo maestro en el horno de madrugada los seis días.', bad: BP, why: 'Ignora la rotación acordada y la restricción médica de turnos nocturnos seguidos.' },
      { id: 'desc', t: 'Descanso semanal: un día libre por persona, rotativo.' },
      { id: 'caja', t: 'Cajas: Miriam supervisa las cajas durante toda la semana de apertura.' },
      { id: 'jhon', t: 'Jhonatan: turno noche martes y jueves.', duda: 'Jhonatan estudia de noche en el instituto los martes y jueves. No es ilegal, pero conviene preguntarle antes.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 3 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -6 : 6, personas: missLey ? -3 : 3 }, rel: { wilmer: missLey ? 0 : -1 },
      flags: [missLey ? 'turnos_wilmer' : 'turnos_corregidos'], cartera: { turnos: missLey ? 'Cuadro de Wilmer sin cambios' : 'Cuadro corregido y enviado a César' },
      out: missLey ? 'Mandas el cuadro a César tal como llegó. Él responde en cinco minutos: «¿El turno noche al mismo precio? ¿Quién aprobó esto?».' : 'Le devuelves el cuadro a Wilmer con cuatro cambios marcados y la razón de cada uno. Él lee el del pago nocturno y se queda callado: «No sabía que era tanto». César recibe la versión final a las 9.',
      pro: { ok: 'Un cuadro de turnos legal evita reclamos y planillas rehechas.', risk: 'Pagar la noche como el día, doblar turnos u obligar a quedarse son errores que se pagan con multas y con gente que renuncia.', info: 'Revisa con César el costo del turno noche antes de decidir cuántas personas van.' },
      kusi: missLey ? ['preocupado', 'Ese cuadro tenía bombas de tiempo…'] : ['celebra', '¡Turnos legales, gente descansada!'],
    }),
    rules: [[LEY, 'Horario nocturno de 22:00 a 6:00, con un piso de RMV más 35 % (D.S. 007-2002-TR, art. 8).'], [LEY, 'El sobretiempo es voluntario (D.S. 007-2002-TR, art. 9).'], [LEY, 'La jornada ordinaria máxima es de ocho horas diarias o 48 semanales (Constitución, art. 25).']],
    mirada: {
      ve: 'El cuadro de turnos parece un tema del jefe de tienda, pero define cuánto gana y cuánto descansa cada persona. RR.HH. lo revisa porque ahí se esconden los errores que después llegan como reclamos o multas.',
      visual: { tipo: 'cambio', titulo: 'Del cuadro de Wilmer al cuadro corregido', pares: [['Noche al mismo precio', 'Noche con su sobretasa del 35 %'], ['Yorgelis 16 horas seguidas', 'Un turno por persona'], ['Dos horas más, obligatorio', 'Sobretiempo voluntario, registrado y pagado'], ['Un solo maestro de madrugada', 'Rotación acordada en panadería']] },
      normas: [{ ley: 'D.S. 007-2002-TR, TUO de la Ley de Jornada de Trabajo, arts. 8 y 9', dice: 'El horario nocturno va de 22:00 a 6:00 y su remuneración no puede ser menor que la RMV con una sobretasa del 35 %. El sobretiempo es voluntario, tanto en su otorgamiento como en su prestación.', practica: 'Con la RMV de S/ 1,230, el piso nocturno es S/ 1,660.50. Y nadie puede ser obligado a quedarse.' }],
    },
  },
  {
    id: 'e2', t: '09:15', ch: 'llamada', who: null, titulo: 'Faltan dos para la noche', banner: 'assets/foto/llamada.webp', show: ['personas', 'tiempo', 'etica'],
    body: () => `<p>El turno noche de reposición necesita ocho personas desde hoy. Tienes seis. Llamas a los que dijeron que «quizá» podían.</p>`,
    type: 'calls',
    calls: [['Kevin Chunga', 'Contesta: puede', 'Sí, señorita, de noche no hay problema. Así en el día ayudo a mi papá en el mercado.'], ['Jhonatan Ipanaqué', 'Contesta: estudia de noche', 'Martes y jueves tengo clases en el instituto hasta las 10. Los demás días sí puedo.'], ['Luis Yarlequé', 'Contesta: no puede', 'De noche no, señorita. Mi esposa trabaja de noche en el hospital y yo me quedo con la bebé.'], ['Santos Chero', 'Contesta: puede, pero pregunta', 'Yo sí voy. ¿Pero la noche se paga igual que el día? Porque en mi otro trabajo así era.']],
    prompt: 'Kevin entra. Te sigue faltando una persona para la noche. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Confirmar a don Santos explicándole el pago nocturno, y ofrecer el turno al resto del equipo de reposición como voluntario, con su pago y su descanso.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 4, tiempo: -1 }, flags: ['noche_voluntaria'], cartera: { turnos: 'Turno noche completo con voluntarios' },
          out: 'Don Santos sonríe al saber del 35 %: «Eso no me lo habían dicho nunca». A las 11, una reponedora de Tambogrande, Elena, levanta la mano en el grupo: prefiere la noche para estar con sus hijos de día.',
          pro: { ok: 'Con información clara, aparece gente que prefiere la noche.', info: 'Rota el turno noche: nadie debería quedarse ahí por defecto.' },
          kusi: ['feliz', '¡Voluntarios de verdad!'] } },
      { id: 'b', label: 'Poner de noche a los dos más jóvenes que «no tienen hijos ni estudian», aunque no quieran.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -4, cumplimiento: -2 }, flags: ['noche_obligada'], cartera: { turnos: 'Turno noche asignado sin consultar' },
          out: 'Uno de los dos te dice que sí tiene un hijo, solo que no lo pusiste en la ficha porque nunca preguntaste. El otro renuncia por WhatsApp a las 7 de la noche.',
          pro: { ok: 'Llenas el cuadro rápido.', risk: 'Decidir por suposiciones sobre la vida de la gente es injusto y, a veces, discriminatorio.' },
          kusi: ['indignado', '¿Y si a ellos no les funciona?'] } },
      { id: 'c', label: 'Pedirle a Betty dos reponedores de la tienda 9 con experiencia nocturna, prestados por esta semana.',
        res: { q: 'aceptable', fx: { tiempo: 1, calidad: 2, personas: 0 }, cartera: { turnos: 'Turno noche con apoyo de la tienda 9' },
          out: 'Betty consigue a uno. El jefe de la tienda 9 protesta: ahora le falta gente a él. Te queda un hueco más pequeño.',
          pro: { ok: 'Traes experiencia y no obligas a nadie.', risk: 'Desvestir a otra tienda resuelve hoy, pero no la próxima semana.' },
          kusi: ['pensando', 'Ayuda, pero no alcanza.'] } },
    ],
    rules: [[LEY, 'El trabajo nocturno tiene un piso de RMV más 35 % (D.S. 007-2002-TR, art. 8).'], [BP, 'Pregunta antes de asignar: la vida de cada persona no está en su ficha.']],
    mirada: {
      ve: 'Armar un turno noche no es llenar casillas. Detrás de cada «no puedo» hay un instituto, una bebé o un hospital. Y detrás de cada «sí» puede haber alguien que nunca supo que la noche se paga distinto.',
      visual: { tipo: 'embudo', titulo: 'El turno noche de hoy', niveles: [['Se necesitan', 8], ['Confirmados en la mañana', 6], ['Con Kevin', 7]] },
    },
  },
  {
    id: 'e3', t: '12:40', ch: 'presencial', who: null, titulo: 'El simulacro de evacuación', banner: 'assets/esc/alarma.webp', lugar: 'Estacionamiento de la tienda 13', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>A las 12:00 suena la alarma. El Ing. Alvarado cronometra. Cuarenta personas salen al estacionamiento bajo un sol que derrite el asfalto. ${F.has('sst_saltada') ? 'Cuatro de los reponedores que salieron a descargar el viernes se quedan parados en el pasillo sin saber hacia dónde ir.' : 'Casi todos llegan al punto de reunión, aunque no todos por la salida correcta.'}</p><p>El ingeniero te pide <mark class="clave">tres observaciones</mark> para el informe.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres observaciones que van al informe del simulacro.', boton: 'Enviar al ingeniero', resumen: 'Informaste',
    cols: ['Observación', 'Lo que viste'],
    rows: [
      { id: 'salida', cells: ['La salida de emergencia 2 está bloqueada con pallets de gaseosa', 'Seis personas tuvieron que regresar'] },
      { id: 'rutas', cells: ['Varios reponedores no conocían el punto de reunión', 'Se quedaron en el pasillo de abarrotes'] },
      { id: 'alarma', cells: ['La alarma no se escucha dentro de la cámara fría', 'Dos personas salieron cinco minutos tarde'] },
      { id: 'cel', cells: ['La gente se demoró por regresar a sacar su celular', 'Un minuto de retraso'] },
      { id: 'risa', cells: ['Jhonatan se rió durante todo el simulacro', 'Le pareció un juego'] },
      { id: 'cred', cells: ['Una cajera salió sin su credencial', 'La dejó en la caja'] },
    ],
    score: { salida: 3, rutas: 3, alarma: 3, cel: 1, risa: -2, cred: -1 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['simulacro_lecciones'], cartera: { ingresos: q === 'buena' ? 'Simulacro: tres fallas para corregir hoy' : 'Simulacro informado' },
        out: q === 'buena' ? 'El ingeniero manda a liberar la salida 2 en ese momento y pide un parlante para la cámara fría. A las 3, un repaso de rutas con los reponedores.' : picks.includes('risa') ? 'El informe dice que Jhonatan se rió. La salida 2 sigue con pallets.' : 'Tu informe ayuda, aunque deja fuera alguna falla que podría costar caro.',
        pro: { ok: 'Informas fallas del sistema, no de las personas.', risk: 'Una salida bloqueada en una apertura con cientos de clientes es el tipo de error que solo un simulacro descubre a tiempo.', info: 'Pide que el repaso de rutas sea hoy, antes del turno noche.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Para eso era el simulacro!' : '¿Y la salida 2?'],
      };
    },
    rules: [[BP, 'Un simulacro busca fallas del sistema: salidas, alarmas, rutas. No culpables.']],
    mirada: {
      ve: 'El simulacro es incómodo, caluroso y parece una pérdida de tiempo… hasta que descubre una salida bloqueada. Quien informa bien no señala a quien se rió: señala lo que, en una emergencia real, haría daño.',
      visual: { tipo: 'flujo', titulo: 'Del simulacro a la corrección', pasos: ['Alarma', 'Evacuación cronometrada', 'Observaciones', 'Correcciones hoy', 'Repaso de rutas'], aqui: 2 },
    },
  },
  {
    id: 'e4', t: '14:10', ch: 'whatsapp', who: null, titulo: 'El mensaje para mañana', banner: 'assets/foto2/tablet-equipo.webp', show: ['personas', 'calidad', 'cumplimiento'],
    body: () => `<p>Mañana a las 8:00 se abren las puertas. El grupo de nuevos ingresos hierve de preguntas: a qué hora llegar, si hay que quedarse, si dan desayuno.</p><p>Les escribes <mark class="clave">un mensaje claro para el gran día</mark>.</p>`,
    type: 'compose', enviaA: 'nuevos', para: 'Para: Tienda 13 · Nuevos ingresos', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hora', t: 'Cuándo llegar', ops: [
        { id: 'h1', t: 'Mañana, cada uno llega a la hora de su turno del cuadro final, que les mando en un rato. Marquen al entrar.', ok: true, por: 'Cada uno con su turno y su marcación.' },
        { id: 'h2', t: 'Mañana todos a las 6:00, sin excepción.', ok: false, por: 'Hacer llegar a todos dos horas antes es sobretiempo que nadie pidió.' },
      ] },
      { id: 'extra', t: 'Si hay que quedarse', ops: [
        { id: 'e1', t: 'Si se necesita que alguien se quede más, se les preguntará: es voluntario, se registra y se paga.', ok: true, por: 'Así lo dice la norma, y así se evitan reclamos.' },
        { id: 'e2', t: 'Mañana nadie se va hasta que cierre la tienda.', ok: false, por: 'El sobretiempo es voluntario.' },
      ] },
      { id: 'traer', t: 'Qué llevar', ops: [
        { id: 't1', t: 'Lleven su credencial y su uniforme. Los polos que faltaban ya están en bolsas con su nombre.', ok: true, por: 'Concreto y útil.' },
        { id: 't2', t: 'Vengan bien presentados 💅', ok: null, por: 'Amable, pero no dice nada concreto.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hora === 'h2' || sel.extra === 'e2', buenas = ['h1', 'e1', 't1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -3 : 1, cumplimiento: mal ? -4 : 3, calidad: q === 'buena' ? 2 : 0 },
        out: q === 'buena' ? 'Llueven stickers. Yorgelis responde: «Gracias, así organizo a mis hijos». Jhonatan pregunta si hay desayuno. Hay pan de don Teodoro.' : mal ? 'Tres personas te escriben por interno preguntando si les van a pagar las horas. No sabes qué contestar.' : 'El grupo se calma, pero varios no saben qué tienen que llevar.',
        pro: { ok: 'Un mensaje claro la víspera evita el caos del día.', risk: 'Una orden de llegar antes o quedarse «hasta que cierre» es sobretiempo obligatorio por WhatsApp.', info: 'Fija el mensaje en el grupo.' },
        kusi: [q === 'buena' ? 'feliz' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡Claro como agua de Chulucanas!' : mal ? 'Eso es sobretiempo obligatorio…' : 'Le faltó lo concreto.'],
      };
    },
    rules: [[LEY, 'El sobretiempo es voluntario (D.S. 007-2002-TR, art. 9).']],
    mirada: {
      ve: 'La víspera de una apertura, la gente nueva tiene miedo de llegar tarde, de no saber qué hacer y de que la hagan quedarse sin pagarle. Un mensaje claro responde las tres cosas.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje para el gran día', txt: 'Mañana, cada uno llega a la hora de su turno. Si se necesita que alguien se quede más, se les preguntará: es voluntario, se registra y se paga. Lleven credencial y uniforme.' },
    },
  },
  {
    id: 'e5', t: '17:10', ch: 'presencial', who: 'wilmer', titulo: 'Los dos patas del barrio', banner: 'assets/foto2/tension.webp', lugar: 'Pasillo de abarrotes', show: ['cumplimiento', 'etica', 'confianza'],
    body: () => `<p>El simulacro de apertura fue un caos simpático: César hizo cola con puras monedas y la caja 4 se colgó. Ahora Wilmer te encuentra entre dos góndolas.</p><p>«Para la noche de mañana traigo a dos patas del barrio. Les pago yo, en efectivo, por esta semana nomás. <mark class="clave">Problema resuelto</mark>. No hay que hacer papeles.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que nadie trabaja en la tienda sin contrato ni alta, y ofrecerle convocar mañana a los finalistas de reposición con un contrato corto por la apertura.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 3, confianza: -1 }, rel: { wilmer: -1 }, flags: ['sin_informales'], cartera: { ingresos: 'Finalistas convocados para cubrir la noche' },
          out: 'Wilmer resopla: «Contigo todo es papel». Pero cuando le explicas que si uno de sus patas se cae de una escalera no hay seguro, se queda callado. «Ya. Llama a los finalistas.»',
          pro: { ok: 'Cubres la necesidad de Wilmer por la vía que lo protege a él también.', risk: 'Te toca hacer en un día lo que normalmente toma tres.', info: 'Avisa a César hoy: si entran mañana, su alta va mañana.' },
          kusi: ['animo', 'Papel que protege. ¡Así!'] } },
      { id: 'b', label: 'Aceptar: es solo una semana y Wilmer paga de su bolsillo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -7, etica: -3 }, rel: { wilmer: 1 }, flags: ['informales_dentro'], cartera: { ingresos: 'Dos ayudantes sin contrato en el turno noche' },
          out: 'Wilmer te da una palmada en el hombro: «Así me gusta». Dos personas sin registro, sin examen, sin capacitación y sin seguro trabajarán de noche en una tienda nueva.',
          pro: { ok: 'Wilmer resuelve su noche.', risk: 'Quien trabaja bajo órdenes de la tienda debe tener alta desde el primer día. Sin ella, no hay registro ni cobertura si algo pasa.' },
          kusi: ['indignado', '¡Sin alta, sin seguro, sin nada!'] } },
      { id: 'c', label: 'Aceptar, pero que cada uno emita un recibo por honorarios para que quede algo en papel.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -1 }, rel: { wilmer: 1 }, flags: ['informales_dentro'], cartera: { ingresos: 'Dos ayudantes con recibo por honorarios' },
          out: 'Los «ayudantes» trabajarán con horario y bajo las órdenes de Wilmer, igual que el resto. El recibo por honorarios no cambia eso.',
          pro: { ok: 'Queda un papel.', risk: 'Si hay horario, órdenes y un jefe, es una relación laboral. Un recibo por honorarios no la convierte en otra cosa.' },
          kusi: ['pensando', 'El papel no cambia lo que es.'] } },
    ],
    rules: [[LEY, 'Toda persona que empieza a trabajar debe tener su alta en el T-Registro dentro del día de ingreso (SUNAT).'], [BP, 'Cuando un jefe propone un atajo, ofrécele una vía rápida que sí sea legal.']],
    mirada: {
      ve: 'La informalidad casi siempre llega como una solución amable: «por esta semana nomás», «les pago yo». Pero en una tienda formal, una persona sin alta es una persona sin seguro, y un accidente se vuelve un problema de todos.',
      visual: { tipo: 'balanza', a: { t: 'Los dos patas del barrio', items: ['Sin papeles', 'Resuelve hoy'] }, b: { t: 'Finalistas con contrato corto', items: ['Alta desde el primer día', 'Examen y capacitación', 'Seguro si algo pasa'] } },
    },
  },
  {
    id: 'e6', t: '19:30', ch: 'documento', who: null, titulo: 'Tu plan para la mañana', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina provisional de la tienda 13', show: ['calidad', 'tiempo'],
    body: () => `<p>El turno noche entra a las 10. Mientras tanto, con un café de máquina que sabe a cartón, armas tu plan de RR.HH. para la mañana de la apertura.</p><p>Si algo falla mañana, no habrá tiempo de pensar. <mark class="clave">Ordénalo hoy</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena tu plan para la mañana de la apertura. Usa las flechas.', boton: 'Imprimir el plan',
    items: [
      { id: 'noche', t: '5:30 · Recibir el reporte del turno noche: quién vino y qué pasó', por: 'Empiezas sabiendo cómo terminó la noche.' },
      { id: 'asis', t: '6:30 · Revisar la asistencia del turno mañana contra el cuadro', por: 'Una ausencia se detecta antes de que se note.' },
      { id: 'reemp', t: '6:45 · Si alguien falta, activar la lista de reemplazos ya aprobada', por: 'Reemplazos con contrato y alta, no improvisados.' },
      { id: 'charla', t: '7:30 · Charla de cinco minutos: rutas, salidas y a quién acudir', por: 'Lo último que escuchan antes de abrir.' },
      { id: 'abre', t: '8:00 · Apertura: tú en la oficina, con el celular y el botiquín ubicado', por: 'Disponible para lo que pase.' },
      { id: 'reg', t: '13:00 · Registrar incidencias y sobretiempos del día', por: 'Lo que no se registra hoy no se paga bien después.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['plan_apertura'], cartera: { ingresos: q === 'riesgosa' ? 'Sin plan claro para mañana' : 'Plan de RR.HH. para la apertura listo' },
        out: q === 'buena' ? 'Betty lee tu plan, saca una foto y lo manda a las otras tiendas: «Para la próxima apertura, esto».' : 'Tu plan sirve, aunque mañana vas a correr en algún paso.',
        pro: { ok: 'Saber qué haces a cada hora te deja la cabeza libre para lo imprevisto.', risk: 'Sin una lista de reemplazos aprobada, mañana la tentación será meter a cualquiera.', info: 'Deja impresa la lista de teléfonos de todos, por si se cae el WhatsApp.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Plan de batalla listo!' : 'Casi. Mañana será intenso.'],
      };
    },
    rules: [[BP, 'Antes de un día crítico, ten lista la lista de reemplazos y la forma de registrar el sobretiempo.']],
    mirada: {
      ve: 'Un plan para el día crítico no evita los imprevistos: hace que cuando lleguen, ya sepas qué hacer. La asistente de RR.HH. que llega a la apertura con su plan impreso es la que nadie ve… porque todo funciona.',
      visual: { tipo: 'linea', titulo: 'La mañana de la apertura', hitos: [['5:30', 'Reporte del turno noche'], ['6:30', 'Asistencia'], ['6:45', 'Reemplazos'], ['7:30', 'Charla de seguridad'], ['8:00', 'Apertura'], ['13:00', 'Incidencias y sobretiempo']] },
    },
  },
  {
    id: 'e7', t: '20:55', ch: 'llamada', who: null, titulo: 'La fiebre del hijo de Rosa', banner: 'assets/foto2/caminan.webp', lugar: 'Puerta de la tienda 13', show: ['personas', 'confianza', 'tiempo'],
    body: () => `<p>Ya vas a tomar el mototaxi cuando llama Rosa, la panadera. Se escucha a un niño llorando.</p><p>«Señorita, mi hijito tiene 39 de fiebre. Mi mamá lo va a ver, pero si no baja, <mark class="clave">no sé si llego a las 3 de la mañana</mark> para el pan de la apertura.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que primero está su hijo, que te avise a las 5 cómo va, y dejar avisado al maestro de panadería por si tiene que arrancar solo.',
        res: { q: 'buena', fx: { personas: 5, confianza: 2, tiempo: -1 }, flags: ['rosa_avisa'], envia: [['rosa', 'Rosa, primero tu hijito. Avísame a las 5 cómo sigue. Ya le dejé dicho al maestro de panadería para que arranque, por si acaso. Que se mejore 🙏']],
          out: 'Rosa se queda tranquila. Antes de dormir, le escribes al maestro de panadería y te responde con un audio: «Tranquila, señorita, aquí estamos».',
          pro: { ok: 'Cuidas a la persona y preparas el plan B sin presionarla.', info: 'Mañana, si falta, recuérdale cómo justificar la ausencia.' },
          kusi: ['feliz', 'Primero el niño. El pan se resuelve.'] } },
      { id: 'b', label: 'Recordarle que mañana es la apertura y que tiene que llegar sí o sí.',
        res: { q: 'riesgosa', fx: { personas: -5, confianza: -2 }, envia: [['rosa', 'Rosa, mañana es la apertura. Tienes que llegar sí o sí, ¿ya?']],
          out: 'Rosa responde «ya, señorita» y no duerme en toda la noche, entre la fiebre de su hijo y el miedo a perder el trabajo.',
          pro: { ok: 'Le dejas clara la importancia del día.', risk: 'Presionar a alguien con un hijo enfermo no hace que el niño se mejore, y la persona lo recordará siempre.' },
          kusi: ['triste', 'Eso le dolió.'] } },
      { id: 'c', label: 'Decirle que no venga mañana, que ya verán cómo hacen.',
        res: { q: 'aceptable', fx: { personas: 2, tiempo: -2 }, envia: [['rosa', 'Rosa, no te preocupes, mejor no vengas mañana. Ya vemos.']],
          out: 'Rosa agradece, pero a las 4 de la mañana su hijo ya no tiene fiebre y ella no sabe si debe ir o no.',
          pro: { ok: 'Le quitas presión.', risk: 'Decidir por ella le quita la opción de llegar si el niño mejora, y te deja sin plan claro.' },
          kusi: ['pensando', 'Mejor que ella decida a las 5.'] } },
    ],
    rules: [[BP, 'Ante una emergencia familiar, primero la persona; luego, el plan B. Y una hora clara para confirmar.']],
    mirada: {
      ve: 'Los ensayos no ensayan la vida. La víspera de la apertura, un niño con fiebre puede cambiar el plan. Tu respuesta de hoy define si mañana Rosa te avisa a tiempo… o si simplemente no aparece.',
      visual: { tipo: 'balanza', a: { t: '«Sí o sí»', items: ['Presión', 'Miedo', 'Ausencia sin aviso'] }, b: { t: '«Avísame a las 5»', items: ['Confianza', 'Plan B en panadería', 'Tiempo para reaccionar'] } },
    },
  },
];
