// Practicante profesional en una ORH del Estado · Capítulo 6 · «La presión» · Semana 2, lunes.
// Hilo: el día en que se publican los resultados curriculares del CAS 012-2026, el asesor del gerente pide «adelantar» la lista.
// Llegan de la UGEL las copias autenticadas del profesor Víctor.
// Normas citadas:
// - Ley 27815, Ley del Código de Ética de la Función Pública, art. 8: el servidor público está prohibido de mantener intereses
//   en conflicto, hacer mal uso de información privilegiada y presionar, amenazar o acosar.
//   https://www.congreso.gob.pe/Docs/Directivas/files/generales/ley27815-ley-codigoetica-funcionpublica.pdf
//   https://lpderecho.pe/ley-27815-ley-codigo-de-etica-funcion-publica/
// - D.Leg. 1057 y su reglamento, ya citados: cada etapa del concurso publica sus resultados según el cronograma.
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 6, titulo: 'La presión', dia: 'Semana 2, lunes', foto: 'assets/foto2/tension.webp',
  lugar: 'Gobierno Regional · Wanchaq, Cusco',
  inicio: '08:00', fin: '17:30', cierreHora: '17:20',
  apertura: 'Lunes de la segunda semana. Granizó el domingo y los techos de calamina de Wanchaq todavía gotean. Hoy a las cinco se publican los resultados de la evaluación curricular. A las 8:35 te llaman de la Gerencia.', boton: 'Subir a la Gerencia',
  kusi: 'Hoy alguien con poder te va a pedir algo con una sonrisa. Respira.',
  lead: 'Le dijiste que no al asesor del gerente sin perder el respeto, cotejaste las copias del profesor, dejaste constancia de la presión, protegiste la publicación y publicaste a la hora prometida.',
  reflexion: '¿Qué hace que una persona joven, sin cargo, pueda sostener una regla frente a alguien con poder?',
  siguiente: { n: 7, titulo: 'El informe', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'publicacion', p: 'Publicación de resultados curriculares', j: 'Comité de selección', d: 0, e: 'Hoy, 17:00' },
  { id: 'presion', p: 'Pedido de la Gerencia', j: 'Gladys · ORH', d: 0, e: 'Por registrar' },
  { id: 'victor', p: 'Constancia del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'Copias de la UGEL llegan hoy' },
  { id: 'informe', p: 'Informe técnico sobre la tabla de puntajes', j: 'Lic. Valer', d: 0, e: 'Para mañana' },
];

export const FUTURO = {
  resultado_reservado: ['Le dijiste al asesor del gerente que los resultados se publican a las 17:00, para todos.', 'El asesor buscará otra puerta.'],
  resultado_filtrado: ['Le diste al asesor del gerente la lista de aprobados antes de publicarla.', 'Alguien preguntará el miércoles cómo se supo antes.'],
  presion_registrada: ['Dejaste por escrito la reunión con el asesor del gerente.', 'El acta acompañará al expediente del concurso.'],
  cotejo_hecho: ['Cotejaste las copias del profesor con las autenticadas y encontraste una fecha distinta.', 'La constancia saldrá con la fecha correcta.'],
  publicacion_a_tiempo: ['Los resultados se publicaron a las 17:00, con el PDF firmado.', 'Nadie podrá decir que se cambiaron después.'],
  lizbeth_explicada: ['Le explicaste a Lizbeth Condori el motivo de su resultado y cómo pedir información formalmente.', 'Su madre lo hará el miércoles.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  comite: { n: 'Comité CAS 012-2026', sub: 'Lic. Valer, Gladys y el área usuaria', c: '#5B3A8C' },
  fredy: { n: 'Fredy Mamani', sub: 'Asesor de la Gerencia General', c: '#8A6D1F' },
  lizbeth: { n: 'Lizbeth Condori', sub: 'Postulante del CAS 012-2026', c: '#B5562B' },
};

export const WSP = [
  { chat: 'fredy', t: '08:30', de: 'Fredy Mamani', txt: 'Buenos días, señorita. ¿Puede subir un ratito a la Gerencia? Cinco minutos. Gracias.' },
  { chat: 'ruben', t: '08:45', de: 'Rubén', txt: 'Ya circula lo del «Excel de la Gerencia» en el grupo de los choferes 😬 ¿Fuiste tú?', si: 'reserva_rota' },
  { chat: 'gladys', t: '09:30', de: 'Gladys', txt: 'Llegó el sobre de la UGEL con el chofer. Está en mi escritorio. Coteja tú, yo firmo el acta.' },
  { chat: 'fredy', t: '16:45', de: 'Fredy Mamani', txt: 'El gerente pide que se publique mañana, para revisarlo con calma. Avísele a su jefa.' },
  { chat: 'comite', t: '17:02', de: 'Lic. Valer', txt: 'Publicado a las 17:00 en el portal y en el mural. El cronograma se cumple. Gracias, equipo.', si: 'publicacion_a_tiempo' },
];

export const CORREOS = [
  { t: '08:00', de: 'Lic. Norma Valer', para: 'Comité CAS 012-2026; ORH', asunto: 'Publicación de hoy', html: '<p>Recordatorio: hoy a las 17:00 se publican los resultados de la evaluación curricular, con el PDF firmado por el comité el viernes. Nadie entrega resultados antes, por ningún medio.</p><p>Norma Valer · Jefa de la ORH</p>' },
];

export const QUIZ = [
  { q: 'El asesor del gerente te pide la lista de aprobados antes de publicarla. ¿Qué haces?', ops: ['Se la das, es de la misma entidad', 'Le dices con respeto que se publica a las 17:00 para todos e informas a tu supervisora', 'Le das solo un nombre', 'Le dices que no sabes'], ok: 1, por: 'Entregar resultados antes de tiempo a una sola persona es dar una ventaja y usar información reservada.' },
  { q: 'Según la Ley 27815, ¿qué está prohibido al servidor público?', ops: ['Publicar resultados', 'Hacer mal uso de información privilegiada y presionar o amenazar', 'Dejar constancia por escrito', 'Atender en quechua'], ok: 1, por: 'El art. 8 de la Ley 27815 prohíbe, entre otras conductas, el mal uso de información privilegiada y presionar, amenazar o acosar.' },
  { q: 'Al cotejar, una copia simple tiene una fecha distinta a la copia autenticada. ¿Cuál usas?', ops: ['La simple, la trajo el profesor', 'La autenticada, y anotas la diferencia en el acta', 'Un promedio', 'Ninguna'], ok: 1, por: 'La copia autenticada por la entidad emisora es el sustento; la diferencia se registra.' },
  { q: 'A las 16:45 piden «por WhatsApp» postergar la publicación. ¿Qué pasa?', ops: ['Se posterga', 'Se publica según el cronograma, salvo una decisión formal del comité con su motivo', 'Lo decide la practicante', 'Se publica a medias'], ok: 1, por: 'El cronograma es público. Cambiarlo requiere una decisión formal y motivada, no un mensaje.' },
  { q: 'Una postulante no apta te pregunta por qué. ¿Qué haces?', ops: ['Le dices que no puedes hablar', 'Le explicas el motivo según las bases y cómo pedir información formalmente', 'Le dices que fue un error', 'Le prometes revisarlo'], ok: 1, por: 'El motivo de su resultado es información sobre ella misma; las bases son públicas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '08:40', ch: 'presencial', who: null, titulo: 'Cinco minutos en la Gerencia', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina del asesor, cuarto piso', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Fredy Mamani tiene unos cuarenta años, terno azul y una taza que dice «Cusco, ombligo del mundo». Te ofrece un mate de coca y una silla. ${F.has('edicion_reportada') ? 'Sabe que viste el historial: «Me contaron que usted es muy detallista con los Excel».' : 'No menciona el Excel.'}</p><p>«Mire, la Gerencia tiene que planificar quiénes entran a la ORH. <mark class="clave">¿Me adelanta la lista de los que pasan?</mark> Solo para el gerente. Nadie se va a enterar.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle el mate y decirle con respeto que los resultados se publican hoy a las 17:00, para todos al mismo tiempo, y que no puedes entregarlos antes a nadie.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: -1 }, flags: ['resultado_reservado'], cartera: { presion: 'Pedido rechazado; falta registrarlo' },
          out: 'Fredy deja de sonreír por un segundo. «Usted es practicante, ¿no? Aquí uno aprende a colaborar.» Le respondes que estás colaborando con el concurso. Te despide con un «ya veremos».',
          pro: { ok: 'Dices que no sin acusar y sin perder el respeto.', risk: 'El asesor puede ponerte las cosas difíciles. Por eso hay que dejarlo por escrito.', info: 'Cuéntaselo a Gladys apenas bajes.' },
          kusi: ['animo', 'Firme y con educación. ¡Dale!'] } },
      { id: 'b', label: 'Dársela: es la Gerencia de la misma entidad, la publicación es en unas horas y no cambia nada.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 }, flags: ['resultado_filtrado'], cartera: { presion: 'Lista entregada antes de la publicación' },
          out: 'Le muestras la lista en tu celular. Fredy la fotografía. «Muy amable.» Al bajar las escaleras te das cuenta de que no sabes a quién se la va a mandar.',
          pro: { ok: 'Evitas un conflicto con la Gerencia.', risk: 'Información de un concurso entregada antes de tiempo puede usarse para presionar al comité o avisar a alguien. Y quedó en una foto.' },
          kusi: ['indignado', '¡Esa lista no era tuya para dar!'] } },
      { id: 'c', label: 'Decirle que no depende de ti y que se lo consulte a tu jefa.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: 1 }, cartera: { presion: 'Pedido derivado a la jefatura' },
          out: 'Fredy sonríe: «Claro, claro. Ya hablo con la licenciada». No dijiste que no, pero tampoco que sí.',
          pro: { ok: 'No entregas nada.', risk: 'Dejas la puerta abierta: parece que con otra persona sí se podría.' },
          kusi: ['pensando', 'No es un no del todo…'] } },
    ],
    rules: [[LEY, 'Ley 27815, art. 8: el servidor público está prohibido de hacer mal uso de información privilegiada y de presionar, amenazar o acosar.']],
    mirada: {
      ve: 'Fredy probablemente cree que pide algo normal: en muchas oficinas, «adelantar» es costumbre. Pero si la Gerencia sabe antes que los postulantes, el concurso deja de ser igual para todos. El poder de un practicante es pequeño; el de una regla clara, no.',
      visual: { tipo: 'balanza', a: { t: 'Adelantar la lista', items: ['La Gerencia contenta', 'Información fuera de control', 'Concurso desigual'] }, b: { t: 'Publicar a las 17:00', items: ['Un asesor incómodo', 'Todos al mismo tiempo', 'Concurso que se sostiene'] } },
      normas: [{ ley: 'Ley 27815, Código de Ética de la Función Pública, art. 8', dice: 'El servidor público está prohibido de mantener intereses en conflicto, obtener ventajas indebidas, hacer mal uso de información privilegiada y presionar, amenazar o acosar.', practica: 'Pedir resultados antes de su publicación, con el peso de la Gerencia, roza varias de esas prohibiciones.' }],
    },
  },
  {
    id: 'p2', t: '10:00', ch: 'documento', who: null, titulo: 'El cotejo', banner: 'assets/esc/lupa.webp', lugar: 'Escritorio de Gladys', show: ['calidad', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>El sobre de la UGEL Anta trae cuatro copias autenticadas con sello y firma de don Hilario. ${F.has('victor_cotejo') ? 'Pones al lado las copias simples que trajo el profesor.' : 'Gladys te pide compararlas con lo que hay en el legajo y con las copias simples del profesor.'}</p><p><mark class="clave">Marca las diferencias</mark> que deben ir en el acta de cotejo.</p>`,
    type: 'flag', prompt: 'Marca las líneas donde hay una diferencia que debe anotarse.',
    doc: { t: 'Acta de cotejo · legajo 0457 · Víctor Quispe Mamani', sub: 'Copias autenticadas UGEL Anta vs. copias simples del profesor' },
    lines: [
      { id: 'ok1', t: 'R.D. de reasignación a Huarocondo · autenticada: 03/03/1994 · simple: 03/03/1994.' },
      { id: 'fecha', t: 'R.D. de 1995 · autenticada: 15/05/1995 · simple: 15/06/1995.', bad: BP, why: 'Un mes de diferencia cambia el cómputo del tiempo de servicios. Vale la autenticada, y se anota la diferencia.' },
      { id: 'ok2', t: 'R.D. de 1996 · licencia por capacitación · ambas iguales.' },
      { id: 'sin', t: 'R.D. de 1997 de retorno a Anta · autenticada: sí · simple: no existe.', bad: BP, why: 'Es un documento nuevo que completa el hueco. Se anota que solo hay copia autenticada.' },
      { id: 'nombre', t: 'Nombre en todas las autenticadas: «Víctor Quispe Mamani».' },
      { id: 'ajeno', t: 'Documento de 1998 de «Víctor Quispe Huallpa», encontrado en el legajo.', bad: BP, why: 'Se deja constancia de que no corresponde al profesor y se separa con acta para remitirlo al legajo correcto.' },
    ],
    res: ({ hitsBp, falsos }) => {
      const bien = (hitsBp || 0) >= 2 && !falsos;
      return {
        out: bien ? 'El acta queda en una página. Gladys la firma y la folia en el expediente: «Ahora sí: 1987 a 2018, sin huecos. Mañana preparamos el proyecto de constancia».' : 'Gladys revisa el acta y encuentra lo que faltaba: «La fecha de 1995 no es la misma. Un mes es un mes de servicios».',
        flags: ['cotejo_hecho'], rel: { 'gladys-orh': bien ? 1 : 0, docente: bien ? 1 : 0 },
        cartera: { victor: bien ? 'Cotejo completo: 31 años sin huecos' : 'Cotejo con observaciones pendientes' },
        pro: { ok: 'El acta registra cada diferencia y cuál documento vale.', info: 'El documento de «Quispe Huallpa» le servirá a otra persona: no lo botes, remítelo.' },
        kusi: bien ? ['celebra', '¡Treinta y un años completos!'] : ['pensando', 'Mira bien las fechas…'],
      };
    },
    rules: [[BP, 'En un cotejo vale la copia autenticada por la entidad emisora. Toda diferencia se anota en el acta.']],
    mirada: {
      ve: 'Mientras arriba alguien pide adelantar listas, aquí abajo un mes de 1995 decide cuánto suma la vida laboral de un profesor. El trabajo más importante del día no siempre es el más visible.',
      visual: { tipo: 'linea', titulo: 'El legajo del profesor, completo', hitos: [['1987', 'Nombramiento'], ['1994', 'Huarocondo'], ['1995', 'Fecha corregida: mayo'], ['1997', 'Retorno a Anta'], ['2018', 'Cese']] },
    },
  },
  {
    id: 'p3', t: '11:40', ch: 'whatsapp', who: 'gladys-orh', titulo: 'Dejarlo por escrito', banner: 'assets/foto/reunion-jefa.webp', show: ['confianza', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>${F.has('resultado_filtrado') ? 'Tienes un nudo en el estómago desde que bajaste de la Gerencia.' : 'Todavía te tiemblan un poco las manos.'} Gladys está en una reunión hasta la una. Le escribes.</p><p><mark class="clave">Lo que no se escribe, no pasó</mark>.</p>`,
    type: 'compose', enviaA: 'gladys', para: 'Para: Gladys Huamán · Especialista de la ORH', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Lo que pasó', ops: [
        { id: 'h1', t: 'A las 8:40 el Sr. Fredy Mamani, asesor de la Gerencia, me pidió en su oficina la lista de aprobados antes de la publicación.', ok: true, por: 'Quién, cuándo, dónde y qué.' },
        { id: 'h2', t: 'El de la Gerencia me quiso presionar feo.', ok: false, por: 'Juicio sin hechos.' },
      ] },
      { id: 'resp', t: 'Lo que respondiste', ops: [
        { id: 'r1', t: 'Le respondí lo que pasó, tal cual, sin adornarlo.', ok: true, por: 'La verdad, aunque te comprometa.' },
        { id: 'r2', t: 'No contar lo que respondiste.', ok: false, por: 'Gladys necesita saberlo todo para proteger el concurso.' },
      ] },
      { id: 'pide', t: 'Lo que pides', ops: [
        { id: 'p1', t: '¿Podemos dejarlo en un acta del comité?', ok: true, por: 'Propones el canal formal.' },
        { id: 'p2', t: 'Mejor que no se entere nadie más.', ok: null, por: 'Protege hoy, deja desprotegido mañana.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.resp === 'r2', buenas = ['h1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, cumplimiento: q === 'buena' ? 4 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['presion_registrada'] : [], cartera: { presion: q === 'buena' ? 'Registrado: irá al acta del comité' : 'Sin registro formal' },
        out: q === 'buena' ? 'Gladys responde a los dos minutos: «Gracias por contarme todo. Va al acta. Y si hubo un error, se corrige: para eso está el acta».' : mal ? 'Gladys responde: «Necesito hechos para poder ayudarte. Llámame».' : 'Gladys responde: «Ok, lo vemos a la una».',
        pro: { ok: 'Lo escribes con hechos, incluida tu propia respuesta.', risk: 'Esconder lo que respondiste, si te equivocaste, hace el problema más grande.', info: 'Un acta del comité protege a quien recibió la presión.' },
        kusi: [q === 'buena' ? 'feliz' : mal ? 'preocupado' : 'pensando', q === 'buena' ? 'Escrito y protegido.' : mal ? 'Así no te puede ayudar…' : 'Casi.'],
      };
    },
    mirada: {
      ve: 'Contar una presión no es chismear ni acusar. Y contar también lo que tú respondiste, aunque te equivocaras, es lo que permite corregir a tiempo. En el Estado, la constancia escrita protege más a los de abajo que a los de arriba.',
      visual: { tipo: 'mensaje', titulo: 'Quién, cuándo, qué y qué respondiste', txt: 'A las 8:40 el asesor de la Gerencia me pidió la lista de aprobados antes de publicarla. Le respondí… ¿Podemos dejarlo en un acta del comité?' },
    },
  },
  {
    id: 'p4', t: '14:00', ch: 'presencial', who: 'gladys-orh', titulo: 'Proteger la publicación', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala de reuniones, con el comité', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>El comité se reúne de urgencia. La Lic. Valer escucha el relato y golpea la mesa con un lapicero, despacio. «Nadie nos va a mover el cronograma.»</p><p>Te pide ideas. <mark class="clave">Elige tres medidas</mark> para la publicación de las cinco.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres medidas que propones.', boton: 'Proponer al comité', resumen: 'Propusiste',
    cols: ['Medida', 'Para qué'],
    rows: [
      { id: 'pdf', cells: ['Publicar el PDF firmado el viernes, no un Excel', 'Que se vea que no cambió'] },
      { id: 'hora', cells: ['Publicar en el portal y en el mural a las 17:00 en punto, y anotar la hora', 'Cumplir lo que dice el cronograma'] },
      { id: 'acta', cells: ['Registrar en el acta las presiones recibidas', 'Que quede constancia'] },
      { id: 'gerente', cells: ['Mandarle primero el PDF al gerente, por cortesía', 'Para que no se moleste'] },
      { id: 'quitar', cells: ['Quitar los nombres y publicar solo códigos para «evitar problemas»', 'Las bases dicen que se publica con nombres'] },
    ],
    score: { pdf: 3, hora: 3, acta: 3, gerente: -3, quitar: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 3 : 0, etica: picks.includes('gerente') ? -4 : 2 },
        cartera: { publicacion: q === 'riesgosa' ? 'Medidas débiles' : 'PDF firmado, hora fija, acta de presiones' },
        out: q === 'buena' ? 'La Lic. Valer aprueba las tres. «Y si a las 16:59 me llama el gerente, le digo que ya está en el portal.»' : picks.includes('gerente') ? 'La Lic. Valer niega con la cabeza: «Si se lo mandamos primero a él, ya no es para todos al mismo tiempo».' : 'El comité aprueba algunas medidas y descarta otras.',
        pro: { ok: 'Versión firmada, hora cumplida y constancia de las presiones.', risk: 'Una «cortesía» con el gerente es exactamente el adelanto que se pidió en la mañana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Publicación blindada!' : 'Una cortesía también es ventaja.'],
      };
    },
    rules: [[BP, 'Los resultados se publican para todos a la vez, en la versión validada y a la hora que dice el cronograma.']],
    mirada: {
      ve: 'La Lic. Valer también tiene jefe, y también arriesga. Que un comité se plante frente a la Gerencia no depende de valentía individual: depende de tener un cronograma público, un PDF firmado y un acta. Las reglas son el respaldo de la gente honesta.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Protege el concurso', cuadrantes: ['Hazlo', 'Hazlo ya', 'No sirve', 'Daña'], items: [['PDF firmado', .2, .9], ['Hora fija', .2, .85], ['Acta de presiones', .4, .8], ['Cortesía al gerente', .1, .05], ['Solo códigos', .3, .2]] },
    },
  },
  {
    id: 'p5', t: '16:50', ch: 'sistema', who: null, titulo: 'Las cinco en punto', banner: 'assets/esc/reloj.webp', lugar: 'Portal institucional · gestor de contenidos', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: () => `<p>A las 16:45 llega el WhatsApp de Fredy: «El gerente pide que se publique mañana». La Lic. Valer lo lee, lo reenvía al acta y te dice: «Publica».</p><p>Gladys te deja el gestor de contenidos abierto. <mark class="clave">Hazlo en orden</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la publicación. Usa las flechas.', boton: 'Publicar',
    items: [
      { id: 'ver', t: 'Verificar que el PDF es el firmado por el comité el viernes', por: 'No otra versión.' },
      { id: 'sub', t: 'Subirlo al portal en la sección del concurso CAS 012-2026', por: 'Donde lo buscarán los postulantes.' },
      { id: 'enl', t: 'Abrir el enlace desde otra computadora para comprobar que se ve', por: 'Que no quede un enlace roto.' },
      { id: 'mur', t: 'Pegar la copia impresa en el mural de la sede', por: 'Para quien no tiene internet.' },
      { id: 'hora', t: 'Anotar en el acta la hora exacta de publicación', por: 'Prueba de que se cumplió el cronograma.' },
      { id: 'avi', t: 'Avisar al comité que está publicado', por: 'Cerrar el día.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'riesgosa' ? -2 : 5, tiempo: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['publicacion_a_tiempo'], cartera: { publicacion: q === 'riesgosa' ? 'Publicado con problemas' : 'Publicado a las 17:00 en portal y mural' },
        out: q === 'buena' ? 'A las 17:00 el PDF está en el portal. A las 17:03, en el mural, ya hay tres postulantes leyendo con el celular en la mano. Edwin Huamaní toma una foto y se va casi corriendo.' : q === 'aceptable' ? 'Se publica, aunque a las 17:08 descubres que el enlace no abría en otras computadoras y lo corriges.' : 'El enlace queda roto y el mural vacío hasta el día siguiente.',
        pro: { ok: 'Se publica la versión correcta, en los dos lugares, con la hora registrada.', info: 'El mural importa: no todos los postulantes tienen datos en el celular.' },
        kusi: [q === 'riesgosa' ? 'preocupado' : 'celebra', q === 'riesgosa' ? 'El orden importaba…' : '¡A las cinco en punto!'],
      };
    },
    rules: [[BP, 'Un cambio de cronograma requiere una decisión formal y motivada del comité, no un mensaje de WhatsApp.']],
    mirada: {
      ve: 'Publicar a la hora prometida, con la versión firmada, es la forma más simple de decir que nadie movió nada. Ese PDF en el mural es, para Edwin, la prueba de que alguien de Quillabamba puede ganar un concurso sin conocer a nadie.',
      visual: { tipo: 'flujo', titulo: 'Publicar bien', pasos: ['PDF firmado', 'Portal', 'Comprobar enlace', 'Mural', 'Hora en el acta', 'Aviso al comité'] },
    },
  },
  {
    id: 'p6', t: '17:20', ch: 'whatsapp', who: null, titulo: '¿Por qué no apta?', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida de la Cultura', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Esperas la combi con el frío de la tarde en la cara. Te llega un mensaje de un número que no tienes guardado: Lizbeth Condori. ${F.has('lizbeth_bases') ? 'En la lista aparece como «no apta».' : 'Al validar la tabla, el comité vio su declaración jurada sin firma y la declaró «no apta».'}</p><p>«Señorita, disculpe. <mark class="clave">¿Por qué salí no apta?</mark> Mi mamá dice que seguro hay argolla.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Explicarle el motivo tal como está en las bases y decirle que, si quiere conocer su evaluación o reclamar, puede pedirlo formalmente por mesa de partes o por la vía de acceso a la información.',
        res: { q: 'buena', fx: { personas: 4, etica: 3, confianza: 2 }, flags: ['lizbeth_explicada'],
          envia: [['lizbeth', 'Hola, Lizbeth. Tu declaración jurada se presentó sin firma, y la página 9 de las bases indica que sin firma el expediente es no apto. Se aplicó igual a todos. Si quieres ver tu evaluación o presentar un reclamo, puedes pedirlo por mesa de partes o con una solicitud de acceso a la información.']],
          out: 'Lizbeth tarda en responder. «Ay… me olvidé de firmar. Qué tonta.» Luego: «Mi mamá igual va a ir. Ella es así».',
          pro: { ok: 'Le das el motivo y el camino formal para pedir más.', info: 'El motivo de su resultado es información sobre ella misma, y las bases son públicas.' },
          kusi: ['animo', 'Clara y con el camino formal.'] } },
      { id: 'b', label: 'Decirle que no puedes hablar del concurso por WhatsApp y que vaya a la ORH.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -2 },
          envia: [['lizbeth', 'Hola. No puedo dar información del concurso por este medio. Acércate a la ORH, por favor.']],
          out: 'Lizbeth responde con un «ok». Su mamá lee el mensaje por encima de su hombro: «¿Ves? Esconden algo».',
          pro: { ok: 'Cuidas el canal.', risk: 'Lo que pedía era público: las bases y su propio motivo. El silencio alimenta la sospecha.' },
          kusi: ['pensando', 'Eso sí se podía explicar.'] } },
      { id: 'c', label: 'Decirle que lo vas a revisar, que quizás fue un error.',
        res: { q: 'riesgosa', fx: { personas: 2, etica: -3, cumplimiento: -3 },
          envia: [['lizbeth', 'Hola, Lizbeth. Déjame revisarlo, a veces hay errores 🙏']],
          out: 'Lizbeth se ilusiona. Le cuenta a su mamá que «la señorita dice que fue un error». El miércoles, su mamá llegará a la ORH pidiendo que lo corrijan.',
          pro: { ok: 'Eres amable.', risk: 'No fue un error, y lo sabes. Una falsa esperanza hace más daño que una explicación clara.' },
          kusi: ['preocupado', 'No era un error…'] } },
    ],
    rules: [[BP, 'A un postulante se le explica el motivo de su resultado según las bases y el camino formal para pedir más información.']],
    mirada: {
      ve: 'La palabra «argolla» aparece en casi todos los concursos públicos del Perú. La única forma de combatirla es con explicaciones claras y la misma regla para todos. Lizbeth se olvidó de firmar; su mamá no lo sabe todavía.',
      visual: { tipo: 'cambio', titulo: 'De la sospecha a la explicación', pares: [['«Seguro hay argolla»', 'El motivo, con la página de las bases'], ['«Ven a la ORH»', 'El camino formal para pedir más'], ['«Quizás fue un error»', 'Lo que pasó, sin falsas esperanzas']] },
    },
  },
];
