// Jefe/a de Relaciones Laborales · Capítulo 4 · «La mesa» · Semana 1, jueves.
// Hilo: tras el anuncio de huelga (cap. 1), la estrategia y el mandato (cap. 2) y el segundo sindicato (cap. 3),
// vuelves al trato directo con el sindicato mayoritario. Faltan cinco días para la huelga anunciada.
// Normas citadas:
// - Constitución, art. 28: fomenta la negociación colectiva; la convención colectiva tiene fuerza vinculante en el
//   ámbito de lo concertado (docs/normas/txt).
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): el trato directo, las actas y la posibilidad
//   de acudir a la Autoridad de Trabajo cuando no hay acuerdo (principios, sin artículos ni plazos).
// - D.S. 019-2006-TR, art. 25.11: garantías de los miembros de comisiones negociadoras (docs/normas/txt).
// Las cifras de la negociación son ficticias.

export const CAP = {
  n: 4, titulo: 'La mesa', dia: 'Semana 1, jueves', foto: 'assets/3d/scenes/reunion.webp',
  lugar: 'Fundición del Sur · Sala de capacitación',
  inicio: '07:30', fin: '19:30', cierreHora: '19:15',
  apertura: 'Jueves, 7:30. En la sala de capacitación hay una mesa larga, doce sillas, dos termos de agua caliente y un proyector que nadie sabe prender. A las 10:00 llega la comisión del sindicato.', boton: 'Preparar la sala',
  kusi: 'Hoy se negocia de verdad. ¡Escuchar primero, ofrecer después!',
  lead: 'Ordenaste la reunión, elegiste por dónde empezar, hiciste una primera oferta con margen, escuchaste lo que no estaba en el pliego y dejaste un acta que nadie puede discutir.',
  reflexion: '¿Qué escuchaste hoy en el pasillo que no estaba en el pliego?',
  siguiente: { n: 5, titulo: 'Los servicios mínimos', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'agenda', p: 'Agenda de la reunión', j: 'Comisión de la empresa', d: 0, e: 'Por ordenar' },
  { id: 'oferta', p: 'Propuesta económica', j: 'Relaciones Laborales', d: 0, e: 'Oferta vigente: S/ 3 diarios' },
  { id: 'seguridad', p: 'Monitoreo de gases en convertidores', j: 'Ing. Wilber Chambi · SST', d: 0, e: 'Pendiente desde la 4.ª reunión' },
  { id: 'acta', p: 'Acta de la reunión', j: 'Ambas comisiones', d: 0, e: 'Por redactar' },
  { id: 'autoridad', p: 'Posible apoyo de la Autoridad de Trabajo', j: 'Dra. Silvia Medina', d: 0, e: 'Sin decidir' },
];

export const FUTURO = {
  oferta_escalonada: ['Ofreciste un aumento escalonado y guardaste margen para después.', 'Aún tienes con qué moverte en la reunión extraproceso. Capítulo 8.'],
  oferta_todo: ['Pusiste todo el margen en la primera oferta.', 'En la reunión extraproceso no tendrás con qué moverte. Capítulo 8.'],
  oferta_congelada: ['Te mantuviste en la oferta anterior.', 'El sindicato salió diciendo que «la empresa no se movió». Capítulo 6.'],
  gases_historia: ['Supiste que un operador estuvo hospitalizado por gases el año pasado y que la base lo recuerda.', 'Será la llave del acuerdo. Capítulo 9.'],
  cutipa_presion: ['Supiste que la base joven del turno C empujó la huelga y que Cutipa necesita algo que mostrar.', 'Lo verás en la asamblea. Capítulos 9 y 10.'],
  acta_clara: ['El acta de hoy deja por escrito el acuerdo de seguridad, las posiciones y la próxima reunión.', 'La Autoridad de Trabajo la pedirá. Capítulo 8.'],
  acta_vaga: ['El acta de hoy quedó vaga: «se conversó» y «se seguirá conversando».', 'Cada parte la contará a su manera. Capítulo 6.'],
  autoridad_abierta: ['Dijiste que la empresa está abierta a que la Autoridad de Trabajo ayude.', 'La convocatoria llegará. Capítulo 8.'],
  autoridad_cerrada: ['Dijiste que la empresa no necesita a la Autoridad de Trabajo.', 'La Autoridad convocará igual, y lo recordará. Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  oscar: { n: 'Óscar Valdivia', sub: 'Controller · Finanzas', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'gerencia', t: '07:40', de: 'Ing. Paredes', txt: 'No subas de 4 hoy. Lo demás lo guardas. Y no te comprometas a nada de seguridad sin Wilber.', si: 'mandato_real' },
  { chat: 'gerencia', t: '07:40', de: 'Ing. Paredes', txt: 'Hoy no hay mandato nuevo de Lima. Ofrece lo de siempre y escucha.', no: 'mandato_real' },
  { chat: 'oscar', t: '08:15', de: 'Óscar', txt: 'Con la cláusula espejo de mantenimiento, cada sol diario cuesta unos S/ 313 mil al año. Te lo digo para que no te sorprenda.', si: 'clausula_espejo' },
  { chat: 'grupo', t: '12:35', de: 'Jhon', txt: 'Jefa, en el grupo del sindicato ya están diciendo que «la empresa se movió un poco». Algo es algo.', si: 'oferta_escalonada' },
  { chat: 'grupo', t: '12:35', de: 'Jhon', txt: 'Jefa, en el grupo del sindicato dicen que «la empresa no se movió ni un sol».', si: 'oferta_congelada' },
  { chat: 'abogado', t: '18:20', de: 'Dra. Medina', txt: 'Buen acta. Guárdala en PDF firmada por todos. Si esto llega a la Autoridad, es lo primero que van a pedir.', si: 'acta_clara' },
  { chat: 'sindicato', t: '19:00', de: 'Teodoro Cutipa', txt: 'La base dice que cinco no alcanza. Pero lo de los gases lo valoran. Nos vemos el lunes.', si: 'oferta_escalonada' },
];

export const CORREOS = [
  { t: '07:20', de: 'Dra. Silvia Medina · Asesoría Legal', para: 'Comisión negociadora de la empresa', asunto: 'Para hoy', html: '<p>Tres recordatorios: 1) todo lo que se acuerde va al acta, firmada por ambas comisiones; 2) los miembros de la comisión del sindicato tienen garantías especiales mientras negocian (D.S. 019-2006-TR, art. 25.11): nada de comentarios sobre su desempeño ni sus turnos; 3) lo que se ofrece en mesa ya no se retira con facilidad.</p><p>Silvia</p>' },
];

export const QUIZ = [
  { q: 'En una mesa de trato directo, empezar por los puntos no económicos sirve para…', ops: ['Ganar tiempo', 'Crear confianza con acuerdos posibles antes de la discusión difícil', 'Evitar hablar de dinero', 'Cumplir un requisito legal'], ok: 1, por: 'Acordar primero lo que es posible crea un clima para la parte difícil.' },
  { q: 'Poner todo el margen en la primera oferta…', ops: ['Acelera siempre el acuerdo', 'Te deja sin espacio para moverte después', 'Es obligatorio', 'Mejora la confianza siempre'], ok: 1, por: 'Si ofreces todo al inicio, el sindicato pedirá más y no tendrás con qué responder.' },
  { q: 'Los miembros de la comisión negociadora del sindicato…', ops: ['No tienen protección', 'Tienen garantías: transgredirlas es infracción muy grave', 'Pueden ser cambiados de turno libremente', 'Deben pedir permiso para negociar'], ok: 1, por: 'El D.S. 019-2006-TR, art. 25.11, tipifica la transgresión de las garantías de los miembros de comisiones negociadoras.' },
  { q: 'Un acta de trato directo útil debe incluir…', ops: ['Solo «se conversó»', 'Acuerdos, posiciones de cada parte y próxima reunión', 'Las opiniones del gerente', 'Solo las firmas'], ok: 1, por: 'Un acta precisa evita que cada parte cuente la reunión a su manera.' },
  { q: 'Lo que se acuerda en una convención colectiva…', ops: ['Es una recomendación', 'Tiene fuerza vinculante en el ámbito de lo concertado', 'Vence a los tres meses', 'Depende del gerente de turno'], ok: 1, por: 'Constitución, art. 28: la convención colectiva tiene fuerza vinculante en el ámbito de lo concertado.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '07:50', ch: 'documento', who: null, titulo: 'El orden de la reunión', banner: 'assets/esc/escritorio.webp', lugar: 'Sala de capacitación', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>Jhon logra prender el proyector con un cable que trajo de su casa. ${F.has('estrategia_clara') ? 'Tu estrategia de una hoja está impresa al lado de tu libreta.' : 'Tu estrategia tiene huecos, así que la agenda tiene que sostenerte.'}</p><p>Silvia insiste: <mark class="clave">en una mesa tensa, el orden de los temas es parte de la negociación</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena la agenda de la reunión. Usa las flechas.', boton: 'Proyectar la agenda',
    items: [
      { id: 'metodo', t: 'Reglas de la reunión: horario, receso y quién redacta el acta', por: 'Empezar por las reglas baja la tensión.' },
      { id: 'pendientes', t: 'Respuesta de la empresa a lo pendiente: monitoreo de gases en convertidores', por: 'Lo que la empresa no cumplió va primero: es una deuda, no una concesión.' },
      { id: 'economica', t: 'Propuesta económica revisada', por: 'Con el clima un poco mejor, se entra a lo difícil.' },
      { id: 'receso', t: 'Receso para que cada comisión consulte', por: 'Nadie decide bien con la otra parte mirando.' },
      { id: 'acta', t: 'Acta: acuerdos, posiciones y próxima reunión', por: 'Lo que no está en el acta no pasó.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 2 : 0 },
        cartera: { agenda: q === 'buena' ? 'Reglas, pendientes, economía, receso, acta' : 'Agenda con el orden cambiado' },
        out: q === 'buena' ? 'Silvia mira la pantalla y asiente. «Si empiezas por la plata, a las 10:15 ya están gritando.»' : 'Silvia mueve un bloque: «Lo que debemos, primero. Así nadie dice que lo usamos de moneda de cambio».',
        pro: { ok: 'El orden de los temas cambia el clima de la mesa.', info: 'Lleva a Wilber para el punto de seguridad: un técnico convence más que un abogado.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Agenda que cuida el clima!' : 'Primero lo que se debe.'],
      };
    },
    mirada: {
      ve: 'La agenda no es un trámite: decide en qué estado de ánimo llega cada parte al tema difícil. Empezar por las reglas y por lo que la empresa debe crea condiciones; empezar por la plata, trincheras.',
      visual: { tipo: 'flujo', titulo: 'Agenda de una mesa tensa', pasos: ['Reglas', 'Lo pendiente', 'Propuesta económica', 'Receso', 'Acta'] },
    },
  },
  {
    id: 'd2', t: '08:50', ch: 'documento', who: null, titulo: 'Doce pedidos', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de capacitación', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>El pliego tiene doce pedidos. Además del aumento, hay movilidad para el turno de madrugada, ropa de trabajo, bono por cierre de pliego, monitoreo de gases, reconocimiento médico anual y licencia sindical.</p><p>Hoy no puedes abrir los doce. <mark class="clave">Elige tres para llevar con respuesta</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres puntos que llevarás con respuesta hoy.', boton: 'Llevar estos', resumen: 'Llevas',
    cols: ['Pedido', 'Qué tiene'],
    rows: [
      { id: 'gases', cells: ['Monitoreo de gases en convertidores, con participación del sindicato', 'Pendiente de la empresa; bajo costo, alto valor'] },
      { id: 'aumento', cells: ['Aumento diario', 'El corazón del conflicto'] },
      { id: 'movilidad', cells: ['Movilidad para el turno de madrugada desde Ilo', 'Costo moderado; afecta a mucha gente'] },
      { id: 'cierre', cells: ['Bono por cierre de pliego', 'Caro y de una sola vez'] },
      { id: 'licencia', cells: ['Más días de licencia sindical', 'Se negocia mejor al final'] },
    ],
    score: { gases: 3, aumento: 3, movilidad: 2, cierre: 0, licencia: -1 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: picks.includes('gases') ? 3 : -1 },
        cartera: { seguridad: picks.includes('gases') ? 'Va a la mesa con propuesta de Wilber' : 'No va hoy' },
        out: picks.includes('gases') ? 'Wilber acepta ir a la mesa a explicar el monitoreo: cuatro mediciones al mes, con un delegado del sindicato presente.' : 'Sin el punto de gases, la mesa será solo plata. Y en plata, hoy están lejos.',
        pro: { ok: 'Llevar un pendiente resuelto, el aumento y algo que toca a mucha gente da una mesa con avances posibles.', risk: 'El bono por cierre es caro y se negocia mejor al final.', info: 'La licencia sindical se suele cerrar en el último tramo, como parte del paquete.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tres puntos con sentido!' : 'Te falta lo que más pesa…'],
      };
    },
    rules: [[BP, 'No abras todos los puntos a la vez: lleva respuesta a pocos y bien elegidos.']],
    mirada: {
      ve: 'Un pliego mezcla lo urgente, lo simbólico y lo táctico. Elegir qué responder primero es elegir qué historia se cuenta al salir de la reunión.',
      visual: { tipo: 'matriz', x: 'Costo para la empresa', y: 'Valor para la base', cuadrantes: ['Ofrece pronto', 'Negocia con cuidado', 'Guárdalo', 'Al final'], items: [['Monitoreo de gases', .15, .85], ['Aumento', .9, .95], ['Movilidad madrugada', .45, .7], ['Bono de cierre', .8, .6], ['Licencia sindical', .2, .35]] },
    },
  },
  {
    id: 'd3', t: '10:40', ch: 'presencial', who: 'sindicato', titulo: 'La primera oferta', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de capacitación', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>Cinco dirigentes con casaca naranja del lado de la ventana. Cutipa abre con voz baja: ${F.has('cutipa_sospecha') ? '«Antes de empezar: queremos saber qué arreglaron con mantenimiento».' : F.has('adelanto_divisor') ? '«Ya sabemos lo que le ofrecieron a mantenimiento. Así no se negocia».' : F.has('respuesta_dura') ? '«Traemos la carta del lunes. La de los despidos».' : '«Escuchamos».'} Wilber explica el monitoreo de gases y el ambiente se afloja un poco.</p><p>Llega el turno de la plata. El sindicato pide S/ 12 diarios. La oferta vigente es S/ 3. <mark class="clave">¿Cuál es tu primera oferta?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'S/ 4 este año y S/ 1 más el próximo, más el monitoreo de gases por escrito. Guardas el resto del margen.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 4 }, rel: { sindicato: 1 }, flags: ['oferta_escalonada'], cartera: { oferta: 'S/ 4 + S/ 1 en dos años, más monitoreo de gases' },
          out: 'Un dirigente joven se ríe: «¿Cinco soles en dos años?». Cutipa lo calla con la mano. «Es poco. Pero es la primera vez en seis reuniones que se mueven.» Piden receso.',
          pro: { ok: 'Te mueves de verdad sin quemar el margen.', risk: 'La base puede leerlo como migajas.', info: 'Lo que les diste en seguridad pesa más de lo que parece.' },
          kusi: ['feliz', 'Movimiento real, con espacio para después.'] } },
      { id: 'b', label: 'S/ 6 de una vez, todo el margen: demostrar buena fe y cortar la huelga antes de que empiece.',
        res: { q: 'aceptable', fx: { confianza: 4, calidad: -3 }, rel: { sindicato: 1 }, flags: ['oferta_todo'], cartera: { oferta: 'S/ 6: todo el margen' },
          out: 'La comisión se mira sorprendida. Cutipa respira hondo: «Si llegaron a seis tan rápido, pueden llegar a nueve». Tu teléfono vibra: es el gerente.',
          pro: { ok: 'Es un gesto fuerte de buena fe.', risk: 'Si das todo al inicio, el sindicato asume que hay más, y ya no te quedan fichas.' },
          kusi: ['sorpresa', '¿Todo de una? Ahora ¿con qué te mueves?'] } },
      { id: 'c', label: 'Mantener los S/ 3 y ofrecer solo el monitoreo de gases: lo económico se ve cuando la Autoridad de Trabajo se pronuncie sobre la huelga.',
        res: { q: 'riesgosa', fx: { confianza: -4, calidad: -1 }, rel: { sindicato: -1 }, flags: ['oferta_congelada'], cartera: { oferta: 'Sin cambios: S/ 3' },
          out: '«Entonces el martes nos vemos en la puerta», dice el dirigente joven. Cutipa no lo calla esta vez.',
          pro: { ok: 'Proteges el costo.', risk: 'Una mesa sin movimiento a cinco días de una huelga convierte la huelga en la única salida visible.' },
          kusi: ['preocupado', 'Sin movimiento, la huelga habla por ti…'] } },
    ],
    rules: [[LEY, 'Constitución, art. 28: el Estado fomenta la negociación colectiva y promueve la solución pacífica de los conflictos.'], [BP, 'La primera oferta debe moverse de verdad, pero dejar espacio para el cierre.']],
    mirada: {
      ve: 'La primera oferta seria es un mensaje: «estamos aquí para cerrar». Si es muy baja, empuja a la huelga; si es todo, te deja sin camino para el cierre.',
      visual: { tipo: 'rango', titulo: 'Aumento diario (S/)', min: 0, max: 12, banda: [4, 6], marcas: [['Oferta anterior', 3], ['Primera oferta', 4], ['Margen máximo', 6], ['Pliego', 12]] },
    },
  },
  {
    id: 'd4', t: '12:10', ch: 'presencial', who: 'sindicato', titulo: 'El pasillo', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo de la sala de capacitación', show: ['personas', 'confianza', 'calidad'],
    body: () => `<p>Receso. En el pasillo, Cutipa toma agua de un vasito de plástico junto a la ventana. Desde ahí se ve la chimenea y, más allá, el mar. Está solo por primera vez en el día.</p><p>Tienes unos minutos para <mark class="clave">dos preguntas</mark> sin actas ni testigos.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Cutipa.',
    opts: [
      { id: 'gases', label: '¿Por qué el tema de los gases pesa tanto en la base?', info: '«El año pasado, a Germán Huanca lo sacaron de convertidores en ambulancia. Tres días en el hospital de Ilo. La empresa dijo que «iba a revisar». Nadie revisó nada. Por eso.»' },
      { id: 'base', label: '¿Quién empujó la huelga en la asamblea?', info: '«Los jóvenes del turno C. Me eligieron hace seis meses y creen que soy blando. Si salgo con poco, me sacan en la próxima asamblea.»' },
      { id: 'numero', label: '¿Cuál es el número que la base podría aceptar?', info: 'Cutipa sonríe por primera vez. «Eso no se lo voy a decir en un pasillo, jefa. Pero doce no es el número, y usted lo sabe.»' },
      { id: 'personal', label: '¿Cómo está usted con todo esto?', info: '«Cansado. Mi esposa me dice que ya estoy viejo para esto. Pero llevo veintiséis años aquí. Quiero que mi hijo trabaje en una fundición donde no lo saquen en ambulancia.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: 3, calidad: 2 },
      flags: [...(picks.includes('gases') || picks.includes('personal') ? ['gases_historia'] : []), ...(picks.includes('base') ? ['cutipa_presion'] : [])],
      out: 'Cutipa tira el vasito al tacho. «Usted pregunta distinto que los anteriores.» Vuelven a la sala sin mirarse.',
      kusi: ['curioso', picks.includes('gases') ? 'Ahí estaba lo que no dice el pliego…' : 'Detrás de cada dirigente hay una base que lo mira.'],
    }),
    rules: [[BP, 'Lo que se dice en el pasillo se respeta: no se usa en la mesa contra quien lo dijo.']],
    mirada: {
      ve: 'Los pliegos se escriben en números, pero los conflictos se viven en historias: un compañero en ambulancia, un dirigente que la base cree débil. Entender esas historias es encontrar el acuerdo que la gente puede aceptar.',
      visual: { tipo: 'balanza', a: { t: 'Lo que dice el pliego', items: ['S/ 12 diarios', 'Doce pedidos', 'Huelga indefinida'] }, b: { t: 'Lo que hay detrás', items: ['Un compañero hospitalizado', 'Un dirigente que necesita mostrar algo', 'Una promesa que no se cumplió'] } },
    },
  },
  {
    id: 'd5', t: '16:20', ch: 'documento', who: null, titulo: 'El acta', banner: 'assets/foto2/revisan.webp', lugar: 'Sala de capacitación', show: ['cumplimiento', 'calidad', 'confianza'],
    body: (n, F) => `<p>Después del receso, el sindicato bajó a S/ 9 y mantuvo el bono por cierre. ${F.has('oferta_escalonada') ? 'Tú no te moviste del escalonado, pero aceptaste estudiar la movilidad de madrugada.' : F.has('oferta_todo') ? 'Tú ya no tenías con qué moverte.' : 'Tú seguiste en S/ 3.'} Son las cuatro y veinte y todos quieren irse.</p><p>Jhon teclea en la laptop. <mark class="clave">El acta la redactas tú</mark>, y la firman todos.</p>`,
    type: 'builder', prompt: 'Elige qué va en el acta de hoy.', boton: 'Imprimir el acta',
    bloques: [
      { id: 'asis', t: 'Encabezado', n: 1, ops: [
        { id: 'a1', t: 'Fecha, hora, lugar y nombres de los miembros de ambas comisiones.', ok: true, por: 'Un acta empieza por quién estuvo.' },
        { id: 'a2', t: '«Reunión con el sindicato».', ok: false, por: 'Sin nombres ni hora, el acta no prueba nada.' },
      ] },
      { id: 'acu', t: 'Acuerdos', n: 2, ops: [
        { id: 'c1', t: 'La empresa implementará el monitoreo de gases en convertidores desde el 1 de diciembre, con un delegado del sindicato presente.', ok: true, por: 'Acuerdo concreto, con fecha y con participación.' },
        { id: 'c2', t: 'La empresa evaluará la movilidad de madrugada y responderá en la próxima reunión.', ok: true, por: 'Compromiso con plazo, sin prometer el resultado.' },
        { id: 'c3', t: 'Las partes conversaron en buen clima.', ok: false, por: 'Una frase linda que no obliga a nadie.' },
      ] },
      { id: 'pos', t: 'Posiciones y siguiente paso', n: 2, ops: [
        { id: 'p1', t: 'Posición del sindicato: S/ 9 diarios y bono por cierre. Posición de la empresa: la expresada en esta reunión.', ok: true, por: 'Dejar las posiciones escritas evita versiones distintas el lunes.' },
        { id: 'p2', t: 'Próxima reunión: lunes a las 16:00, en esta sala.', ok: true, por: 'Fecha antes del martes de la huelga.' },
        { id: 'p3', t: 'El sindicato reconoce que la huelga sería perjudicial.', ok: false, por: 'Nadie firmará eso, y meterlo envenena el acta.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 4 : -2, confianza: q === 'buena' ? 2 : -1 },
        flags: [q === 'buena' ? 'acta_clara' : 'acta_vaga'],
        cartera: { acta: q === 'buena' ? 'Firmada: monitoreo desde el 1/12, movilidad en estudio, posiciones, lunes 16:00' : 'Acta vaga, firmada a medias' },
        out: q === 'buena' ? 'Cutipa la lee dos veces, corrige una tilde y firma. «Por lo menos lo de los gases ya está escrito.»' : 'El dirigente joven se niega a firmar «eso de que la huelga es perjudicial». Se firma una versión recortada a las 17:40.',
        pro: { ok: 'Un acta precisa es la mejor defensa ante la Autoridad de Trabajo y ante los rumores.', risk: 'Lo que no se escribe, cada parte lo contará como le convenga.', info: 'Guarda el PDF firmado: lo vas a necesitar.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Acta impecable!' : 'Un acta vaga es un rumor firmado…'],
      };
    },
    rules: [[BP, 'Toda reunión de trato directo termina con un acta firmada por ambas comisiones.'], [LEY, 'Constitución, art. 28: lo concertado tiene fuerza vinculante.']],
    mirada: {
      ve: 'El acta es la memoria de la negociación. Cuando el conflicto escala, la Autoridad de Trabajo, la gerencia y la base van a leerla buscando quién hizo qué. Que no quede espacio para interpretar.',
      visual: { tipo: 'cambio', titulo: 'De un acta vaga a un acta útil', pares: [['«Se conversó en buen clima»', 'Monitoreo de gases desde el 1/12'], ['«Se seguirá conversando»', 'Lunes 16:00, esta sala'], ['Sin posiciones', 'S/ 9 y bono vs. propuesta de la empresa']] },
    },
  },
  {
    id: 'd6', t: '17:50', ch: 'whatsapp', who: null, titulo: 'Al gerente, en tres líneas', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>El gerente te escribió cuatro veces durante la reunión. ${F.has('oferta_todo') ? 'La última dice: «¿SEIS? ¿Quién te autorizó a darlo todo?».' : 'La última dice: «¿Y?».'}</p><p>Le respondes por WhatsApp. <mark class="clave">Que entienda en treinta segundos</mark>.</p>`,
    type: 'compose', enviaA: 'gerencia', para: 'Para: Ing. Ricardo Paredes', boton: 'Enviar',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Qué pasó', ops: [
        { id: 'h1', t: 'Ingeniero: hubo avance parcial. Acta firmada con monitoreo de gases desde el 1/12.', ok: true, por: 'Empiezas por lo concreto.' },
        { id: 'h2', t: 'Ingeniero: fue una reunión muy difícil, la base está muy radical.', ok: false, por: 'Adjetivos que no ayudan a decidir.' },
      ] },
      { id: 'brecha', t: 'Dónde estamos', ops: [
        { id: 'b1', t: 'El sindicato bajó de S/ 12 a S/ 9 y mantiene el bono por cierre.', ok: true, por: 'La brecha, en números.' },
        { id: 'b2', t: 'Siguen pidiendo imposibles.', ok: false, por: 'Si se reenvía, es un problema.' },
      ] },
      { id: 'clave', t: 'Lo que aprendí', ops: [
        { id: 'k1', t: 'El tema de seguridad pesa más que la plata: hubo un hospitalizado el año pasado.', ok: true, por: 'Le das al gerente una pista para el acuerdo.' },
        { id: 'k2', t: 'Cutipa está débil con su base; podemos aprovecharlo.', ok: false, por: 'Usar contra el dirigente lo que te contó en confianza rompe la mesa.' },
      ] },
      { id: 'sig', t: 'Siguiente paso', ops: [
        { id: 's1', t: 'Lunes 16:00 nueva reunión. Mañana armamos los servicios mínimos con Wilber.', ok: true, por: 'Dices qué viene.' },
        { id: 's2', t: 'Veremos qué pasa.', ok: null, por: 'No le das nada al gerente para decirle a Lima.' },
      ] },
    ],
    res: sel => {
      const malo = sel.clave === 'k2' || sel.brecha === 'b2';
      const buenas = ['h1', 'b1', 'k1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, etica: sel.clave === 'k2' ? -5 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { gerencia: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'El gerente responde con un audio: «Lo de los gases no lo sabía. ¿Por qué nadie me lo dijo?». Una buena pregunta para el lunes.' : malo ? 'El gerente reenvía tu mensaje a Lima. En Lima lo reenvían a un asesor externo. Ya no controlas a dónde llega lo que te contó Cutipa.' : 'El gerente responde «ok». No sabe más que antes.',
        pro: { ok: 'Hecho, brecha, clave y siguiente paso: un mensaje que sirve para decidir.', risk: 'Lo que un dirigente te cuenta en confianza no es munición para la gerencia.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Treinta segundos bien usados!' : 'Eso no debía salir del pasillo…'],
      };
    },
    rules: [[BP, 'Informa a la gerencia con hechos y brechas; protege lo que se te contó en confianza.']],
    mirada: {
      ve: 'Entre la mesa y la gerencia estás tú. Lo que cuentas hacia arriba decide qué margen te darán; lo que cuentas de más puede destruir la confianza que ganaste abajo.',
      visual: { tipo: 'mensaje', titulo: 'Tres líneas para la gerencia', txt: 'Ingeniero: hubo avance parcial. Acta firmada con monitoreo de gases desde el 1/12. El sindicato bajó de S/ 12 a S/ 9 y mantiene el bono por cierre. El tema de seguridad pesa más que la plata. Lunes 16:00 nueva reunión; mañana armamos los servicios mínimos con Wilber.' },
    },
  },
  {
    id: 'd7', t: '18:40', ch: 'llamada', who: 'sindicato', titulo: 'La última llamada', banner: 'assets/foto/llamada.webp', lugar: 'Movilidad de regreso a Ilo', show: ['confianza', 'cumplimiento', 'tiempo'],
    body: () => `<p>Vas en la movilidad por la carretera costanera; el sol se mete en el mar como una moneda. Tres llamadas antes de llegar a la ciudad.</p><p><mark class="clave">La última te obliga a decidir algo hoy</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Óscar Valdivia · Finanzas', 'Contesta desde su carro', '«La movilidad de madrugada costaría unos S/ 18 mil al mes. Es plata, pero no es el aumento. Mañana te lo paso en limpio.»'],
      ['Dra. Silvia Medina · Legal', 'Contesta con el televisor de fondo', '«Si el lunes no hay acuerdo, cualquiera de las partes puede pedir apoyo a la Autoridad de Trabajo. A veces un tercero destraba lo que dos no pueden.»'],
      ['Teodoro Cutipa · Sindicato', 'Contesta desde la combi, con cumbia de fondo', '«Jefa, le pregunto antes de que lo hable la base: si el lunes no llegamos, ¿la empresa aceptaría que la Autoridad de Trabajo nos ayude? Algunos quieren pedirlo.»'],
    ],
    prompt: 'Cutipa espera tu respuesta. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Que la empresa está abierta a que la Autoridad de Trabajo ayude si hace falta, sin dejar de negociar directamente el lunes.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 3 }, rel: { sindicato: 1 }, flags: ['autoridad_abierta'], cartera: { autoridad: 'Abiertos al apoyo de la Autoridad si no hay acuerdo' },
          out: '«Bien. Se lo digo a la junta.» Cuelga. Silvia, cuando se lo cuentas, dice: «Eso nos va a ayudar más de lo que crees».',
          pro: { ok: 'Mostrar apertura a la Autoridad es mostrar que la empresa quiere una salida.', risk: 'Debes consultarlo con el gerente mañana temprano.', info: 'La Autoridad de Trabajo puede convocar a las partes para ayudar a destrabar.' },
          kusi: ['celebra', '¡Puertas abiertas a la solución!'] } },
      { id: 'b', label: 'Que no hace falta: la empresa y el sindicato pueden resolverlo solos.',
        res: { q: 'aceptable', fx: { confianza: -1, cumplimiento: 0 }, flags: ['autoridad_cerrada'],
          out: '«Ya veremos», dice Cutipa. En la próxima asamblea, alguien propondrá pedirlo igual.',
          pro: { ok: 'Apuestas por la mesa directa.', risk: 'Cerrarte a un tercero puede leerse como que la empresa no quiere mirar su propia posición.' },
          kusi: ['pensando', '¿Y si solos no alcanza?'] } },
    ],
    rules: [[LEY, 'Constitución, art. 28: el Estado promueve formas de solución pacífica de los conflictos laborales.']],
    mirada: {
      ve: 'Pedir ayuda a la Autoridad de Trabajo no es perder la negociación: es sumar a alguien que puede proponer lo que ninguna parte se atreve a ofrecer primero.',
      visual: { tipo: 'flujo', titulo: 'Si la mesa no alcanza', pasos: ['Trato directo', 'Apoyo de la Autoridad de Trabajo', 'Acuerdo o siguiente etapa'], aqui: 0 },
    },
  },
];
