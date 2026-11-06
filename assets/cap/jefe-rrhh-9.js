// Jefe/a de RR.HH. · Capítulo 9 · «La elección» · Semana 2, jueves.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas:
// - Ley 29783, art. 31: los trabajadores eligen a sus representantes, titulares y suplentes, ante el comité de SST,
//   salvo el personal de dirección y de confianza; votación secreta y directa; el proceso está a cargo de la
//   organización sindical mayoritaria.
// - D.S. 005-2012-TR, art. 49: la elección es presencial o no presencial, por votación secreta y directa, sin
//   participación del personal de dirección y de confianza; si no hay organización sindical, el empleador convoca.
//   https://cdn.www.gob.pe/uploads/document/file/5686893/5050275-informe-tecnico-1380-2018-servir-gpgsc.pdf
//   https://cdn.www.gob.pe/uploads/document/file/916363/RESOLUCION-DE-JEFATURA-00025-2020-OSINFOR-01.1_1_.pdf
// - Ley 29783: comité de SST obligatorio con 20 o más trabajadores (capítulo 1); el comité es paritario.
// No se citan plazos ni números de integrantes.

export const CAP = {
  n: 9, titulo: 'La elección', dia: 'Semana 2, jueves', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'Transportes Mantaro · Patio de buses',
  inicio: '06:30', fin: '19:30', cierreHora: '19:10',
  apertura: 'Jueves, 6:30. En el patio, entre el bus 9 y el 14, hay una mesa con un ánfora de cartón forrada con papel kraft. Es la primera elección en 30 años de Transportes Mantaro.', boton: 'Abrir la mesa',
  kusi: 'Hoy los trabajadores eligen quién los representa. ¡Tu trabajo es que sea limpio, no quién gana!',
  lead: 'Mantuviste la elección en manos de los trabajadores, corregiste el padrón, hiciste que votaran también los que estaban en ruta, respaldaste a quien tenía miedo de postular y cuidaste un escrutinio a la vista de todos.',
  reflexion: '¿Qué cambia en una empresa cuando los trabajadores eligen, por primera vez, a quien habla por ellos?',
  siguiente: { n: 10, titulo: 'Dos semanas en Mantaro', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'eleccion', p: 'Elección de representantes al comité de SST', j: 'Trabajadores', d: 0, e: 'Hoy' },
  { id: 'padron', p: 'Padrón electoral', j: 'Patty · RR.HH.', d: 0, e: 'Por revisar' },
  { id: 'ruta', p: 'Conductores en ruta', j: 'Despacho', d: 0, e: '31 fuera de Huancayo' },
  { id: 'candidatos', p: 'Candidatos', j: 'Trabajadores', d: 0, e: 'Pocos se animan' },
  { id: 'comite', p: 'Instalación del comité', j: 'Tú', d: 0, e: 'Después de la elección' },
];

export const FUTURO = {
  eleccion_limpia: ['La elección quedó en manos de los trabajadores, sin candidatos de la gerencia.', 'Los representantes tendrán legitimidad.'],
  eleccion_digitada: ['Aceptaste la lista de candidatos que traía Operaciones.', 'Los conductores sentirán que el comité es de la empresa.'],
  padron_correcto: ['El padrón no incluye al personal de dirección ni de confianza.', 'La elección no podrá impugnarse por eso.'],
  voto_ruta: ['Los conductores en ruta votaron en las agencias, con sobre cerrado.', 'Nadie quedó fuera por estar manejando.'],
  nestor_candidato: ['Néstor postuló al comité con tu respaldo a su libertad de hacerlo.', 'Volverá en la semana 3.'],
  comite_electo: ['Los trabajadores eligieron a sus representantes con un escrutinio público.', 'El comité se instala la próxima semana.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  conductores: { n: 'Conductores Mantaro', sub: '90 conductores, despacho y tú', c: '#2F6B3F' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  yolanda: { n: 'Yolanda Cóndor', sub: 'Despachadora · terminal de Lima', c: '#6B4FA0' },
  lucia: { n: 'Lucía Ramos', sub: 'Terramoza', c: '#A0336B' },
};

export const WSP = [
  { chat: 'gonzalo', t: '06:20', de: 'Gonzalo', txt: 'Ayer en el caldo me quedé pensando. Hoy no me meto en la elección. Que elijan ellos.', si: 'gonzalo_confia' },
  { chat: 'yolanda', t: '09:40', de: 'Yolanda', txt: 'Ya votaron los 12 de Lima. Sobres cerrados y firmados, como dijo. Van en el bus de las 11 🗳️', si: 'voto_ruta' },
  { chat: 'conductores', t: '13:10', de: 'Wilber', txt: 'Voté por primera vez en mi vida en el trabajo. Raro, pero bonito.' },
  { chat: 'don-alberto', t: '18:30', de: 'Don Alberto', txt: 'Me contaron que Néstor ganó. Mi papá decía: «al que dice la verdad, dale un asiento». Mañana lo saludo.', si: 'nestor_candidato' },
];

export const CORREOS = [
  { t: '06:30', de: 'Patty Ñaupari', para: 'Jefa de RR.HH.', asunto: 'Padrón y cédulas', html: '<p>Jefa, le adjunto el padrón que saqué de la planilla (280 personas) y el modelo de cédula. Lo hice anoche, perdón si hay errores.</p><p>Patty</p>', si: 'patty_respaldada' },
  { t: '06:30', de: 'Mesa de Partes · Transportes Mantaro', para: 'Jefa de RR.HH.', asunto: 'Padrón y cédulas', html: '<p>Se adjunta el padrón sacado de la planilla (280 personas) y el modelo de cédula, preparados por la practicante de Comercial.</p>', no: 'patty_respaldada' },
  { t: '17:40', de: 'Néstor Poma', para: 'Jefa de RR.HH.', asunto: 'Algo que debe saber', html: '<p>Señora, le escribo por correo para que quede. Lo de las firmas que preguntaba la señorita Mariela: los compañeros estamos formando un sindicato. El lunes vamos a registrarlo. No es contra usted. Es para que lo que hemos ganado estas dos semanas no dependa de quién esté de jefe.</p><p>Néstor</p>' },
];

export const QUIZ = [
  { q: 'Según la Ley 29783 y su reglamento, ¿cómo se eligen los representantes de los trabajadores ante el comité de SST?', ops: ['Los designa el gerente', 'Por votación secreta y directa de los trabajadores', 'Por sorteo', 'Por antigüedad'], ok: 1, por: 'El art. 31 de la Ley 29783 y el art. 49 del reglamento lo establecen.' },
  { q: '¿Quiénes no participan en esa elección?', ops: ['Los conductores', 'El personal de dirección y de confianza', 'Las terramozas', 'Los mecánicos'], ok: 1, por: 'La elección es de los trabajadores, sin el personal de dirección y confianza.' },
  { q: 'Si no hay sindicato, ¿quién convoca la elección?', ops: ['Nadie', 'El empleador', 'SUNAFIL', 'La municipalidad'], ok: 1, por: 'Sin organización sindical, el empleador convoca (D.S. 005-2012-TR, art. 49).' },
  { q: '31 conductores están en ruta el día de la elección. Lo correcto es…', ops: ['Que no voten', 'Organizar el voto en las agencias con sobre cerrado, para que nadie quede fuera', 'Votar por ellos', 'Postergar la elección un año'], ok: 1, por: 'La elección puede ser presencial o no presencial; lo importante es que sea secreta y para todos.' },
  { q: 'Un conductor teme postular porque «después lo botan». RR.HH. debe…', ops: ['Convencerlo de no postular', 'Respetar su decisión y dejar claro que postular no puede traerle represalias', 'Postularlo sin preguntarle', 'Ignorarlo'], ok: 1, por: 'Postular es un derecho; protegerlo es parte de una elección limpia.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '06:40', ch: 'presencial', who: null, titulo: 'La lista recomendada', banner: 'assets/foto2/tension.webp', lugar: 'Patio de buses', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El supervisor de despacho, Hernán Cárdenas, te entrega una hoja doblada. ${F.has('gonzalo_confia') ? '«Esta la hice yo, no el ingeniero. Él dijo que no se mete.»' : '«De parte del ingeniero Gonzalo.»'}</p><p>Hay cuatro nombres: dos supervisores y dos conductores «de confianza». «Para que el comité no se llene de <mark class="clave">revoltosos</mark>, jefa. Usted los anuncia como candidatos.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Devolverle la lista: los candidatos los presentan los trabajadores, los supervisores con cargo de confianza no participan y RR.HH. solo organiza.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: -1 }, flags: ['eleccion_limpia'], cartera: { candidatos: 'Los presentan los trabajadores' },
          out: 'Hernán se guarda la hoja: «Después no diga que no le avisé». Media hora después, ves a dos de los conductores de la lista inscribiéndose por su cuenta. Está bien: tienen derecho, como cualquiera.',
          pro: { ok: 'La elección es de los trabajadores, no de la gerencia.', risk: 'Operaciones teme un comité hostil.', info: 'Cualquier trabajador puede postular, incluidos los de la lista, si lo hacen por su cuenta.' },
          kusi: ['animo', '¡Elección limpia desde el primer minuto!'] } },
      { id: 'b', label: 'Aceptar anunciarlos como candidatos «sugeridos», junto a los que se inscriban: no está prohibido sugerir.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, rel: { nestor: -1 }, flags: ['eleccion_digitada'], cartera: { candidatos: 'Lista sugerida por la gerencia' },
          out: 'Anuncias los cuatro nombres por el altavoz del terminal. En el patio, alguien murmura: «Ya está arreglado». Dos conductores que pensaban postular se van a su bus.',
          pro: { ok: 'Operaciones queda tranquila.', risk: 'Una elección con candidatos de la empresa pierde legitimidad y puede impugnarse.' },
          kusi: ['indignado', '¡«Sugeridos» por quién manda!'] } },
    ],
    rules: [[LEY, 'Los trabajadores eligen a sus representantes, sin el personal de dirección y de confianza (Ley 29783, art. 31).']],
    mirada: {
      ve: 'La primera elección en una empresa que nunca votó despierta miedos en todos lados: la gerencia teme a los «revoltosos» y los trabajadores temen que esté arreglada. RR.HH. organiza, pero no elige. Esa es toda su fuerza.',
      normas: [{ ley: 'Ley 29783, art. 31 · D.S. 005-2012-TR, art. 49', dice: 'Los trabajadores eligen a sus representantes por votación secreta y directa, sin el personal de dirección y confianza.', practica: 'Si no hay sindicato, el empleador convoca y organiza, pero no presenta candidatos.' }],
    },
  },
  {
    id: 'e2', t: '07:30', ch: 'documento', who: null, titulo: 'El padrón y la convocatoria', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Mesa electoral', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Revisas el padrón y la convocatoria antes de abrir la mesa. Huele a café de la tienda de la esquina y a petróleo.</p><p><mark class="clave">Marca lo que debe corregirse antes de votar</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que hace la elección inválida o injusta.',
    doc: { t: 'Convocatoria y padrón', sub: 'Elección de representantes de los trabajadores ante el comité de SST' },
    lines: [
      { id: 'jefes', t: 'El padrón incluye a Don Alberto, a sus tres hijos y a los supervisores de confianza.', bad: LEY, why: 'El personal de dirección y de confianza no participa en la elección (D.S. 005-2012-TR, art. 49).' },
      { id: 'mano', t: 'El voto será a mano alzada, en el patio, para que sea más rápido.', bad: LEY, why: 'La votación debe ser secreta y directa.' },
      { id: 'horario', t: 'La mesa abre de 7:00 a 9:00, cuando la mitad de los conductores está en ruta.', bad: BP, why: 'Si el horario deja fuera a quienes trabajan de noche o en ruta, la elección no representa a todos.' },
      { id: 'suplentes', t: 'Se eligen titulares y suplentes.' },
      { id: 'cedula', t: 'La cédula tiene la foto y el nombre de cada candidato, en orden de inscripción.' },
      { id: 'terra', t: 'Las terramozas no aparecen en el padrón porque «no son conductoras».', bad: LEY, why: 'Son trabajadoras y tienen derecho a votar y ser elegidas.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Algo del padrón sigue mal. Si alguien lo impugna, habrá que repetir la elección.' : `Corriges ${hitsLey} errores. Sacas a los jefes del padrón, agregas a las 22 terramozas y amplías el horario hasta las 18:00. Patty reimprime las cédulas.`,
      flags: missLey ? [] : ['padron_correcto'], cartera: { padron: missLey ? 'Padrón con errores' : 'Padrón corregido' },
      pro: { ok: 'Un padrón correcto es lo que hace que la elección no se pueda cuestionar.', info: 'Publica el padrón en el patio una hora antes de abrir la mesa.' },
      kusi: missLey ? ['pensando', 'Algo sigue mal en el padrón…'] : ['celebra', '¡Padrón limpio!'],
    }),
    rules: [[LEY, 'Votación secreta y directa, sin el personal de dirección y de confianza (D.S. 005-2012-TR, art. 49).']],
    mirada: {
      ve: 'Las elecciones se ganan o se pierden en los detalles: un horario que deja fuera a los que manejan de noche, un padrón que olvida a las terramozas, un voto a mano alzada frente al jefe. Cuidar esos detalles es cuidar la voz de todos.',
      visual: { tipo: 'cambio', titulo: 'Del padrón al voto justo', pares: [['Jefes en el padrón', 'Solo trabajadores'], ['Mano alzada', 'Voto secreto'], ['De 7 a 9', 'Hasta las 18:00 y en agencias'], ['Sin terramozas', 'Con las 22 terramozas']] },
    },
  },
  {
    id: 'e3', t: '09:15', ch: 'llamada', who: null, titulo: 'Los que están en ruta', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'calidad'],
    body: () => `<p>Despacho te pasa la lista: 31 conductores y 9 terramozas están en Lima, La Merced, Satipo o en carretera. Si no votan, la elección será de los que estaban en Huancayo.</p><p><mark class="clave">Llamas a las agencias</mark>.</p>`,
    type: 'calls',
    calls: [['Yolanda Cóndor · terminal de Yerbateros, Lima', 'Contesta entre bocinas', '«Aquí hay 12 que duermen en el terminal hasta la tarde. Si me manda las cédulas en el bus de las 7, los hago votar en sobre cerrado. Pero que alguien firme conmigo para que no digan que yo voté.»'], ['Administrador · agencia de Satipo', 'Contesta con la radio de fondo', '«Aquí son 6. Tengo un ánfora vieja de la elección del club. Si quiere, la usamos. Pero mañana se van todos temprano.»'], ['Lucía Ramos · terramoza', 'Contesta desde un bus en ruta a Jauja', '«Yo llego a las 4. ¿Alcanzo a votar? Quiero votar, jefa. Y si me animo, postular de suplente.»']],
    prompt: 'Terminaste las llamadas. ¿Cómo organizas el voto de quienes están fuera?',
    choices: [
      { id: 'a', label: 'Enviar cédulas y sobres en los buses de la mañana, con un trabajador y el administrador firmando juntos en cada agencia, y traer los sobres cerrados para el escrutinio en Huancayo.',
        res: { q: 'buena', fx: { personas: 4, calidad: 4, tiempo: -2 }, flags: ['voto_ruta'], cartera: { ruta: 'Voto en agencias con sobre cerrado' },
          out: 'Patty arma seis paquetes con cinta de embalaje y los entrega a los conductores de las 7. Lucía votará a las 4:15, con el uniforme todavía puesto.',
          pro: { ok: 'Nadie queda fuera por estar trabajando.', info: 'Que cada sobre llegue firmado en el cierre: es la garantía de que nadie lo abrió.' },
          kusi: ['feliz', '¡Votos que viajan en bus!'] } },
      { id: 'b', label: 'Que voten los que están en Huancayo: los que están en ruta podrán votar en la próxima elección.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -2 }, cartera: { ruta: 'Sin voto' },
          out: 'La elección será más rápida. Cuarenta personas, casi todas del turno de noche, no votarán. Son justamente las que más manejan.',
          pro: { ok: 'Simplificas la logística.', risk: 'Quienes más riesgo corren quedan sin voz en el comité de seguridad.' },
          kusi: ['triste', 'Los del nocturno, otra vez fuera…'] } },
    ],
    mirada: { ve: 'En transporte, la mitad de la empresa nunca está en la oficina. Una elección que solo se puede hacer en el terminal le da voz a los que menos manejan. Llevar el voto a donde está la gente es una decisión política, no logística.' },
  },
  {
    id: 'e4', t: '12:00', ch: 'presencial', who: 'nestor', titulo: '«¿Y si me botan después?»', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería frente al terminal', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Néstor tiene la ficha de inscripción en la mano y no la firma. ${F.has('nestor_fuera') ? 'Hace dos semanas quisieron despedirlo por hablar.' : 'Hace dos semanas Gonzalo quería despedirlo por hablar.'}</p><p>«Señora, todos me dicen que postule. Pero mi esposa dice que <mark class="clave">es para que me boten después</mark>. ¿Usted qué dice?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que la decisión es solo suya, que postular es su derecho y que la empresa no puede tomar represalias por eso; y que si alguien lo intenta, RR.HH. estará ahí.',
        res: { q: 'buena', fx: { etica: 4, personas: 4 }, rel: { nestor: 1 }, flags: ['nestor_candidato'], cartera: { candidatos: 'Néstor postula' },
          out: 'Néstor se queda mirando su emoliente. Luego firma la ficha con letra grande. «Por los muchachos del nocturno.»',
          pro: { ok: 'No lo empujas ni lo frenas: le das seguridad para decidir.', info: 'Postular no puede ser motivo de sanción ni despido.' },
          kusi: ['celebra', '¡Néstor firma!'] } },
      { id: 'b', label: 'Pedirle que lo piense bien: quizás es mejor que postule alguien más joven y menos «marcado».',
        res: { q: 'riesgosa', fx: { etica: -3, personas: -2 }, rel: { nestor: -1 }, cartera: { candidatos: 'Néstor no postula' },
          out: 'Néstor dobla la ficha y se la guarda en el bolsillo de la casaca. «Usted también, señora.» Se va sin terminar el emoliente.',
          pro: { ok: 'Quieres protegerlo.', risk: 'Tu consejo suena igual a lo que temía: que postular es peligroso.' },
          kusi: ['triste', 'Le confirmaste su miedo…'] } },
    ],
    mirada: { ve: 'Para un trabajador que estuvo a punto de ser despedido por reclamar, postular es arriesgarse otra vez. RR.HH. no decide por él: le asegura que el riesgo no existe porque la empresa no lo permitirá.' },
  },
  {
    id: 'e5', t: '18:05', ch: 'presencial', who: null, titulo: 'El escrutinio', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Patio de buses, bajo un toldo', show: ['cumplimiento', 'calidad', 'confianza'],
    body: (n, F) => `<p>Cerró la mesa. ${F.has('voto_ruta') ? 'Llegaron los seis sobres de las agencias, firmados.' : 'Solo votaron los que estaban en Huancayo.'} Hay unos cuarenta trabajadores alrededor del toldo, con las manos en los bolsillos por el frío.</p><p><mark class="clave">Ordena el escrutinio</mark> para que nadie pueda dudar del resultado.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del escrutinio. Usa las flechas.', boton: 'Abrir el ánfora',
    items: [
      { id: 'cierre', t: 'Cerrar la mesa a la hora anunciada y sellar el ánfora', por: 'Nadie vota después del cierre.' },
      { id: 'sobres', t: 'Verificar que los sobres de las agencias lleguen cerrados y firmados', por: 'La garantía del voto en ruta.' },
      { id: 'contar', t: 'Contar los votos en voz alta, delante de los trabajadores y de un personero de cada candidato', por: 'A la vista de todos.' },
      { id: 'acta', t: 'Firmar el acta con los resultados de titulares y suplentes', por: 'Queda por escrito.' },
      { id: 'publicar', t: 'Publicar los resultados en el patio y en el grupo de conductores', por: 'Todos se enteran igual.' },
      { id: 'instalar', t: 'Fijar la fecha para instalar el comité con los representantes de la empresa', por: 'El comité empieza a existir.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 2, confianza: q === 'buena' ? 4 : 0 },
        flags: q === 'riesgosa' ? [] : ['comite_electo'], cartera: { eleccion: q === 'riesgosa' ? 'Escrutinio cuestionado' : 'Representantes electos', comite: q === 'riesgosa' ? 'Sin fecha' : 'Instalación la próxima semana' },
        out: q === 'buena' ? 'Lucía lee los votos en voz alta. Al final, el acta tiene seis nombres entre titulares y suplentes: conductores, una terramoza y un mecánico del taller. Hay aplausos, un silbido largo y alguien que grita «¡ahora sí!».' : 'Hay un momento de confusión con los sobres y alguien grita que «faltan votos». Se resuelve, pero queda la duda.',
        pro: { ok: 'Un escrutinio público es la mejor defensa contra la desconfianza.', info: 'Guarda el acta, el padrón y las cédulas: son la prueba de la elección.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Primera elección de Mantaro! ¡Qué bacán!' : 'El orden también da confianza.'],
      };
    },
    rules: [[BP, 'El escrutinio se hace en público, con personeros, y se registra en un acta firmada.']],
    mirada: {
      ve: 'En una empresa donde los trabajadores no confían en la gerencia, cómo se cuentan los votos importa tanto como quién gana. Contar en voz alta, bajo un toldo y con frío, es una pequeña ceremonia de confianza.',
      visual: { tipo: 'embudo', titulo: 'La elección en números', niveles: [['Trabajadores en el padrón', 262], ['Votaron', 214], ['Representantes titulares y suplentes', 6]] },
    },
  },
  {
    id: 'e6', t: '18:50', ch: 'whatsapp', who: null, titulo: 'Los resultados', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Patio de buses', show: ['confianza', 'personas'],
    body: () => `<p>Mientras desarman el toldo, abres el grupo de conductores. Ya hay fotos del acta circulando. Falta el mensaje oficial.</p><p><mark class="clave">Breve, igual para todos y mirando adelante</mark>.</p>`,
    type: 'compose', enviaA: 'conductores', para: 'Para: Conductores Mantaro (90)', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'res', t: 'El resultado', ops: [
        { id: 'r1', t: 'Compañeros: votaron 214 trabajadores. El acta firmada con los representantes titulares y suplentes está publicada en el patio.', ok: true, por: 'Datos y transparencia.' },
        { id: 'r2', t: 'Compañeros: felicitamos a Néstor, que ganó con muchos votos 🎉', ok: false, por: 'Celebrar a un candidato desde RR.HH. le quita neutralidad a la elección.' },
      ] },
      { id: 'grac', t: 'El agradecimiento', ops: [
        { id: 'g1', t: 'Gracias a quienes votaron en Lima, Satipo y La Merced, y a los personeros.', ok: true, por: 'Reconoce a los que votaron lejos.' },
        { id: 'g2', t: 'Gracias a la gerencia por permitir esta elección.', ok: false, por: 'La elección no es un permiso de la gerencia: es un derecho.' },
      ] },
      { id: 'sig', t: 'Lo que sigue', ops: [
        { id: 's1', t: 'La próxima semana se instala el comité y su primera tarea será revisar las jornadas de conducción.', ok: true, por: 'Le da sentido al voto.' },
        { id: 's2', t: 'Les avisaremos novedades.', ok: null, por: 'Correcto, pero vago.' },
      ] },
    ],
    res: sel => {
      const mal = sel.res === 'r2' || sel.grac === 'g2', buenas = ['r1', 'g1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -2 : 1, personas: q === 'buena' ? 2 : 0 },
        out: q === 'buena' ? 'Yolanda responde desde Lima con un «¡viva!». Freddy, desde su casa, manda una foto de su brazo enyesado con el pulgar arriba.' : mal ? 'Alguien responde: «¿O sea que RR.HH. tenía su candidato?».' : 'El grupo recibe el mensaje con varios pulgares.',
        pro: { ok: 'Un mensaje neutral, que reconoce a todos y dice qué sigue.', risk: 'Desde RR.HH., un festejo o un agradecimiento a la gerencia cambia el sentido de la elección.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Neutral y con futuro!' : 'Ojo con la neutralidad.'],
      };
    },
    mirada: {
      ve: 'El último mensaje de una elección le dice a todos de quién fue. Si RR.HH. celebra a un ganador o agradece a la gerencia, la elección parece suya. Si informa con datos y apunta a lo que viene, la elección queda en manos de quienes votaron.',
      visual: { tipo: 'mensaje', titulo: 'La elección es de quienes votaron', txt: 'Votaron 214 trabajadores. El acta está publicada en el patio. Gracias a quienes votaron en Lima, Satipo y La Merced. La primera tarea del comité será revisar las jornadas de conducción.' },
    },
  },
];
