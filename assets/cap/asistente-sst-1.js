// Asistente de SST · Capítulo 1 · «La charla de las 7:00» · Semana 1, lunes.
// Hilo del mes: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas: Ley 29783 (principio de prevención; EPP adecuados a cargo del empleador; comité de SST en
// empresas con 20 o más trabajadores) y su reglamento D.S. 005-2012-TR (el comité se reúne una vez al mes;
// registros obligatorios); Norma G.050 de seguridad durante la construcción.

export const CAP = {
  n: 1, titulo: 'La charla de las 7:00', dia: 'Semana 1, lunes', foto: 'assets/foto/supervisa.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '06:45', fin: '18:30', cierreHora: '18:15',
  apertura: 'Chiclayo, obra de un edificio de 14 pisos. Hoy empiezas como asistente de Seguridad y Salud en el Trabajo.', boton: 'Ponerte el casco y entrar',
  kusi: 'Aquí cuidamos que todos vuelvan a casa. ¡Con casco y con voz firme!',
  lead: 'Preparaste y diste tu primera charla, recorriste la obra con ojos de prevencionista, paraste una tarea insegura y escuchaste a quien representa a los trabajadores.',
  reflexion: '¿Qué viste hoy en la obra que antes no habrías notado?',
  siguiente: { n: 2, titulo: 'La matriz', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'charlas', p: 'Charlas de 5 minutos', j: 'Ingrid · SSOMA', d: 0, e: 'Cada día a las 7:00' },
  { id: 'piso12', p: 'Vaciado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Jueves de la semana 2' },
  { id: 'iperc', p: 'Matriz IPERC', j: 'Ingrid · SSOMA', d: 0, e: 'Última revisión: hace 5 meses' },
  { id: 'comite', p: 'Comité de SST', j: 'Marleny · Trabajadores', d: 0, e: 'Sin reunión desde junio' },
  { id: 'epp', p: 'Equipos de protección', j: 'Almacén', d: 0, e: 'Sin inventario' },
];

export const FUTURO = {
  charla_viva: ['Tu charla terminó con una pregunta que alguien respondió.', 'Los obreros te escucharán mejor mañana.'],
  charla_leida: ['Leíste la charla del papel y nadie te miró.', 'Tendrás que ganarte la atención otra vez en el capítulo 2.'],
  borde_reportado: ['Reportaste el borde sin baranda del piso 11.', 'Ingrid lo llevará a la matriz IPERC en el capítulo 2.'],
  tarea_parada: ['Paraste el corte con amoladora hasta que Jhonatan tuvo lentes y guantes.', 'Don Segundo no lo olvidará. Capítulo 3.'],
  tarea_sigue: ['Dejaste que Jhonatan siguiera cortando sin lentes.', 'Volverá a pasar, peor, en el capítulo 5.'],
  marleny_aliada: ['Marleny sabe que quieres que el comité funcione.', 'Te ayudará a convocarlo en el capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  marleny: { n: 'Marleny Flores', sub: 'Representante en el comité', who: 'marleny' },
};

export const WSP = [
  { chat: 'grupo', t: '06:40', de: 'Ingrid', txt: 'Bienvenida 👷‍♀️ La charla de hoy es tuya. Tema: trabajo con amoladora. 5 minutos, no más.' },
  { chat: 'segundo', t: '09:50', de: 'Don Segundo', txt: 'Ingeniera, el muchacho Jhonatan está cortando fierro en el piso 3. Que nadie lo distraiga, que estamos atrasados.' },
  { chat: 'ingrid', t: '11:30', de: 'Ingrid', txt: 'Bien por parar el corte. Así se hace, aunque Segundo refunfuñe.', si: 'tarea_parada' },
  { chat: 'marleny', t: '15:10', de: 'Marleny', txt: 'Gracias por escucharme, ingeniera. Cuando quiera convocamos al comité 💪', si: 'marleny_aliada' },
];

export const CORREOS = [
  { t: '06:30', de: 'Ing. Ingrid Delgado', para: 'Asistente SSOMA', asunto: 'Tu primera semana en obra', html: '<p>Bienvenida. El jueves de la próxima semana vaciamos el piso 12 y la presión por avanzar va a ser enorme. Nuestro trabajo es que el avance no cueste una vida.</p><p>Tu rutina: charla a las 7:00, recorrido de la obra, registros y apoyo al comité. Si ves algo que pueda matar o herir a alguien, lo paras y me llamas. En ese orden.</p><p>Ingrid</p>' },
];

export const QUIZ = [
  { q: '¿Quién debe entregar y pagar los equipos de protección personal?', ops: ['El trabajador', 'El empleador', 'El sindicato', 'Se comparte'], ok: 1, por: 'La Ley 29783 obliga al empleador a proporcionar EPP adecuados a sus trabajadores.' },
  { q: '¿A partir de cuántos trabajadores se requiere un comité de SST?', ops: ['5', '10', '20', '100'], ok: 2, por: 'Las empresas con 20 o más trabajadores deben tener un comité de SST; con menos, un supervisor.' },
  { q: '¿Cada cuánto se reúne de forma ordinaria el comité de SST?', ops: ['Una vez al año', 'Una vez al mes', 'Cuando hay un accidente', 'Cada cinco años'], ok: 1, por: 'El reglamento de la Ley 29783 establece reuniones ordinarias mensuales.' },
  { q: 'Una buena charla de cinco minutos…', ops: ['Se lee completa del papel', 'Tiene un mensaje, un ejemplo real y una pregunta', 'Dura una hora', 'Solo la da el gerente'], ok: 1, por: 'Lo que se recuerda es un mensaje claro con un caso cercano.' },
  { q: 'Ves a un ayudante cortando fierro sin lentes. ¿Qué haces?', ops: ['Nada: no es tu cuadrilla', 'Paras la tarea hasta que tenga su protección', 'Le tomas una foto para el informe', 'Esperas a fin de mes'], ok: 1, por: 'Ante un peligro que puede herir a alguien, se detiene la tarea y se corrige.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 't1', t: '06:50', ch: 'documento', who: null, titulo: 'Diez minutos para preparar', banner: 'assets/esc/reloj.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'confianza'],
    body: () => `<p>En la caseta de SSOMA huele a cemento y a café. Ingrid te dejó el tema: <mark class="clave">trabajo con amoladora</mark>. Tienes diez minutos para armar tu charla de cinco.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu charla de cinco minutos.', boton: 'Tener lista la charla',
    bloques: [
      { id: 'inicio', t: 'Cómo empiezas', n: 1, ops: [
        { id: 'i1', t: 'Con una pregunta: «¿Alguien ha visto saltar un disco de amoladora?».', ok: true, por: 'Una pregunta despierta a 60 personas mejor que un título.' },
        { id: 'i2', t: 'Leyendo el procedimiento de 4 páginas.', ok: false, por: 'Nadie escucha cuatro páginas a las 7 de la mañana.' },
        { id: 'i3', t: 'Recordando que es obligatorio escuchar.', ok: false, por: 'Empezar con una amenaza cierra los oídos.' },
      ] },
      { id: 'mensaje', t: 'Mensajes clave', n: 2, ops: [
        { id: 'm1', t: 'Lentes y careta siempre: las chispas y los fragmentos van a los ojos.', ok: true },
        { id: 'm2', t: 'Revisar que la guarda esté puesta y el disco sea el correcto para el material.', ok: true },
        { id: 'm3', t: 'Usarla rápido para no atrasar la obra.', ok: false, por: 'La prisa es justamente el riesgo.' },
        { id: 'm4', t: 'Si no hay EPP, cortar con cuidado.', ok: false, por: 'Sin EPP no se corta: se pide.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', n: 1, ops: [
        { id: 'c1', t: 'Pidiendo a alguien que cuente cómo revisa su amoladora antes de usarla.', ok: true, por: 'Lo que la gente dice en voz alta, lo recuerda.' },
        { id: 'c2', t: 'Pasando la lista para que firmen.', ok: null, por: 'Necesario, pero no es un cierre.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, confianza: q === 'buena' ? 2 : 0 },
        flags: [q === 'buena' ? 'charla_lista' : 'charla_floja'],
        out: q === 'buena' ? 'Tu charla cabe en una tarjeta: una pregunta, dos mensajes y un cierre con alguien de la cuadrilla.' : 'Tu charla tiene mucho texto y poca conversación.',
        pro: { ok: 'Una charla corta funciona con un mensaje, un ejemplo y la voz de los propios trabajadores.', info: 'Si alguien de la cuadrilla tuvo un incidente, pídele permiso para contarlo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Lista para hablarle a la obra!' : 'Menos papel, más conversación.'],
      };
    },
    rules: [[BP, 'Una charla de cinco minutos tiene un solo tema, mensajes concretos y participación.']],
    mirada: {
      ve: 'La charla diaria no es un trámite para llenar la lista de asistencia: es el único momento del día en que toda la obra mira a Seguridad. Si se desperdicia leyendo un papel, se pierde.',
      visual: { tipo: 'flujo', titulo: 'Una charla de cinco minutos', pasos: ['Pregunta', 'Mensaje 1', 'Mensaje 2', 'Voz de un trabajador', 'Firma'] },
    },
  },
  {
    id: 't2', t: '07:00', ch: 'presencial', who: 'segundo', titulo: 'Sesenta cascos', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Patio de la obra', show: ['confianza', 'personas'],
    body: () => `<p>Sesenta obreros en semicírculo, con los cascos puestos y las manos en los bolsillos. Algunos miran el reloj. Don Segundo, el maestro de obra, se cruza de brazos al fondo.</p><p>«Rapidito, ingeniera, que <mark class="clave">hoy hay que avanzar el piso 11</mark>.»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Empezar con tu pregunta, dar tus dos mensajes y pedirle a un obrero que cuente cómo revisa su amoladora.',
        res: { q: 'buena', fx: { confianza: 5, personas: 3, tiempo: -1 }, rel: { segundo: 0 }, flags: ['charla_viva'], cartera: { charlas: 'Primera charla: 60 asistentes, 5 minutos' },
          out: 'Un operario mayor, Teodoro, cuenta que un disco le rozó la mejilla en 2019. Hay silencio. Don Segundo deja de mirar el reloj por un momento.',
          pro: { ok: 'Una historia real de un compañero vale más que cualquier diapositiva.', info: 'Anota quién habló: puede ser tu aliado en las próximas charlas.' },
          kusi: ['celebra', '¡Te escucharon de verdad!'] } },
      { id: 'b', label: 'Leer el procedimiento rápido, para no quitarle tiempo a Don Segundo.',
        res: { q: 'aceptable', fx: { confianza: -2, calidad: -1 }, flags: ['charla_leida'],
          out: 'En el minuto dos, la mitad mira el celular. Firman la lista y se van. Nadie recordará qué dijiste.',
          pro: { ok: 'Cumples con el registro.', risk: 'Una charla que nadie escucha protege a la empresa en papel, pero no a las personas en la obra.' },
          kusi: ['triste', 'Firmaron… pero ¿escucharon?'] } },
    ],
    rules: [[LEY, 'Los registros de capacitación son obligatorios (D.S. 005-2012-TR), pero el registro no reemplaza a la capacitación real.']],
    mirada: {
      ve: 'En obra, la autoridad de Seguridad no se impone con el cargo: se gana cuando los trabajadores sienten que lo que dices les sirve. La primera charla es tu presentación.',
      visual: { tipo: 'balanza', a: { t: 'Leer el papel', items: ['Rápido', 'Lista firmada'] }, b: { t: 'Charla con conversación', items: ['La gente recuerda', 'Habla un compañero', 'Te ganas la atención de mañana'] } },
    },
  },
  {
    id: 't3', t: '08:15', ch: 'documento', who: null, titulo: 'El recorrido', banner: 'assets/esc/escalera.webp', lugar: 'Pisos 1 al 11', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Recorres la obra con tu libreta. En una hora anotas cinco observaciones, pero solo puedes reportar hoy, con fotos y propuesta, <mark class="clave">las dos más críticas</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos observaciones que reportarás hoy.', boton: 'Reportar estas dos', resumen: 'Reportaste',
    cols: ['Observación', 'Qué puede pasar'],
    rows: [
      { id: 'borde', cells: ['Borde de losa sin baranda en el piso 11', 'Caída de altura: puede ser mortal'] },
      { id: 'cable', cells: ['Extensión eléctrica pasando por un charco en el piso 2', 'Electrocución'] },
      { id: 'orden', cells: ['Desorden de maderas con clavos en el patio', 'Cortes y tropiezos'] },
      { id: 'casco', cells: ['Dos visitantes sin casco en la oficina de obra', 'Golpes leves'] },
      { id: 'banos', cells: ['Los baños portátiles están sucios', 'Molestia e higiene'] },
    ],
    score: { borde: 3, cable: 3, orden: 1, casco: 0, banos: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: picks.includes('borde') ? 4 : -2 },
        flags: picks.includes('borde') ? ['borde_reportado'] : [], cartera: { piso12: picks.includes('borde') ? 'Baranda del piso 11 solicitada hoy' : 'Bordes sin revisar' },
        out: picks.includes('borde') ? 'Ingrid lee tu reporte y llama a Don Segundo: «Hoy mismo se pone la baranda del 11». Él protesta, pero la carpintería ya está en camino.' : 'Tu reporte es correcto, pero en el piso 11 sigue habiendo un borde abierto.',
        pro: { ok: 'Prioriza por gravedad: lo que puede matar va primero.', info: 'Las caídas de altura y la electricidad están entre las causas más graves de accidentes en construcción.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Lo que puede matar, primero.' : '¿Y el borde del piso 11?'],
      };
    },
    rules: [[LEY, 'La Norma G.050 exige protecciones colectivas, como barandas, en bordes con riesgo de caída.'], [BP, 'Prioriza por gravedad potencial, no por lo más visible.']],
    mirada: {
      ve: 'En un recorrido se ven muchas cosas mal. Una prevencionista no reporta todo igual: ordena por gravedad. Un baño sucio molesta; un borde sin baranda mata.',
      visual: { tipo: 'matriz', x: 'Probabilidad', y: 'Gravedad', cuadrantes: ['Para hoy', 'Para hoy', 'Planifica', 'Registra'], items: [['Borde sin baranda', .55, .95], ['Cable en charco', .6, .9], ['Maderas con clavos', .7, .4], ['Visitantes sin casco', .3, .3], ['Baños sucios', .8, .1]] },
    },
  },
  {
    id: 't4', t: '10:05', ch: 'presencial', who: 'jhonatan', titulo: 'Jhonatan y la amoladora', banner: 'assets/foto/plano-equipo.webp', lugar: 'Piso 3', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>En el piso 3, Jhonatan, un ayudante de 20 años, corta fierro con una amoladora. No tiene lentes ni guantes. Las chispas le pasan cerca de la cara.</p><p>Don Segundo aparece en la escalera: «Déjelo, ingeniera. <mark class="clave">Toda la vida lo hemos hecho así</mark> y estamos atrasados».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Parar el corte, conseguirle lentes, careta y guantes del almacén, y dejar que siga en cuanto los tenga.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, tiempo: -2, personas: 3 }, rel: { segundo: -1, jhonatan: 1 }, flags: ['tarea_parada'], cartera: { epp: 'Faltan lentes en el almacén: pedido urgente' },
          out: 'El almacén tiene guantes, pero solo dos lentes. Jhonatan vuelve a cortar en 15 minutos. Don Segundo te mira serio: «Quince minutos perdidos». Jhonatan, en voz baja: «Gracias, ingeniera».',
          pro: { ok: 'Paras lo justo, resuelves rápido y no castigas al trabajador.', risk: 'Don Segundo siente que le quitas autoridad frente a su cuadrilla.', info: 'Descubriste un problema mayor: faltan lentes para toda la obra.' },
          kusi: ['animo', 'Quince minutos por unos ojos. Vale la pena.'] } },
      { id: 'b', label: 'Dejarlo: es el maestro de obra quien manda en su cuadrilla, ya terminan y luego le das una charla a Jhonatan.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 }, rel: { segundo: 1 }, flags: ['tarea_sigue'],
          out: 'Jhonatan sigue cortando. Don Segundo te da la razón con un gesto. Las chispas siguen pasando cerca de sus ojos.',
          pro: { ok: 'Evitas un conflicto con el maestro de obra.', risk: 'Viste un peligro y no hiciste nada. Si algo pasa hoy, nadie preguntará quién mandaba en la cuadrilla.' },
          kusi: ['preocupado', 'Lo viste… y lo dejaste.'] } },
      { id: 'c', label: 'Llamarle la atención a Jhonatan frente a todos por no usar EPP.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -4 }, rel: { jhonatan: -1 },
          out: 'Jhonatan baja la cabeza: «Pero no hay lentes en el almacén». Era verdad.',
          pro: { ok: 'Paras el riesgo.', risk: 'Culpaste al trabajador de algo que era responsabilidad de la empresa.' },
          kusi: ['triste', 'No era su culpa…'] } },
    ],
    rules: [[LEY, 'El empleador debe proporcionar equipos de protección personal adecuados (Ley 29783).'], [LEY, 'Principio de prevención: el empleador garantiza medios y condiciones que protejan la vida y la salud (Ley 29783, Título Preliminar).']],
    mirada: {
      ve: 'Cuando falta un EPP, la pregunta no es «¿por qué no lo usa?» sino «¿por qué no lo tiene?». Una prevencionista detiene el peligro, consigue la solución y busca la causa, sin humillar al trabajador.',
      visual: { tipo: 'cambio', titulo: 'De culpar a prevenir', pares: [['«No usa lentes»', '«No hay lentes en el almacén»'], ['Llamada de atención en público', 'Pedido urgente de EPP'], ['«Toda la vida así»', 'Quince minutos para hacerlo seguro']] },
      normas: [{ ley: 'Ley 29783, de Seguridad y Salud en el Trabajo', dice: 'El empleador proporciona a sus trabajadores equipos de protección personal adecuados según el tipo de trabajo y riesgo.', practica: 'Si el almacén no tiene lentes, la falta es de la empresa, no del ayudante.' }],
    },
  },
  {
    id: 't5', t: '14:30', ch: 'presencial', who: 'marleny', titulo: 'Marleny', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Comedor de la obra', show: ['personas', 'cumplimiento', 'confianza'],
    body: () => `<p>Marleny Flores, armadora de fierro y representante de los trabajadores en el comité de SST, se sienta a tu lado en el comedor.</p><p>«Le digo algo, ingeniera. Yo estoy en el comité desde marzo y <mark class="clave">nos hemos reunido dos veces</mark>. Una para la foto. ¿Usted va a hacer que eso cambie o es igual que los demás?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Preguntarle qué temas llevaría ella a la próxima reunión.',
        res: { q: null, fx: { personas: 4, confianza: 3 }, rel: { marleny: 1 }, flags: ['marleny_aliada'], cartera: { comite: 'Marleny tiene 3 temas para la reunión' },
          out: 'Marleny saca una libreta: los lentes que faltan, la escalera del piso 6 y el agua que no llega a los pisos altos. Tiene la lista hace meses.', kusi: ['celebra', 'El comité ya tenía agenda. ¡Solo faltaba escucharla!'] } },
      { id: 'b', label: 'Decirle que eso lo ve la ingeniera Ingrid.',
        res: { q: null, fx: { personas: -1 },
          out: 'Marleny asiente y se levanta. «Lo mismo de siempre», alcanzas a escuchar.', kusi: ['pensando', 'Era tu oportunidad de ganarte una aliada.'] } },
    ],
    rules: [[LEY, 'Las empresas con 20 o más trabajadores deben tener un comité de SST, que se reúne en forma ordinaria una vez al mes (Ley 29783 y D.S. 005-2012-TR).']],
    mirada: {
      ve: 'El comité de SST es paritario: la mitad son representantes de los trabajadores. Cuando funciona, Seguridad deja de ser «la que pone multas» y se vuelve un trabajo conjunto. Las representantes como Marleny ven lo que el área no ve.',
      visual: { tipo: 'linea', titulo: 'Cómo debería funcionar el comité', hitos: [['Cada mes', 'Reunión ordinaria con acta'], ['En la reunión', 'Temas de los trabajadores y de la empresa'], ['Después', 'Responsables y plazos'], ['Mes siguiente', 'Revisar qué se cumplió']] },
    },
  },
  {
    id: 't6', t: '17:50', ch: 'whatsapp', who: null, titulo: 'Para Ingrid', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Ingrid te escribe desde la reunión con el cliente.</p>`,
    chat: ['¿Cómo te fue en tu primer día? Dime lo más urgente 🙏'],
    type: 'choice',
    choices: [
      { id: 'a', label: 'Los dos peligros críticos, la falta de lentes y el comité.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { ingrid: 1 }, envia: ['ingrid', 'Urgente: 1) borde sin baranda en piso 11 (ya va carpintería), 2) extensión eléctrica en charco en piso 2. Además: solo hay 2 lentes de seguridad en almacén para toda la obra. Y Marleny tiene una agenda lista para el comité.'],
          out: 'Ingrid responde: «Mañana a primera hora pido 40 lentes. Bien hecho». Lo que viste hoy evitará algo que no sabremos.', kusi: ['feliz', 'Prevenir es invisible… ¡pero funciona!'] } },
      { id: 'b', label: 'Que la charla salió bien.',
        res: { q: 'aceptable', fx: { confianza: 1 }, envia: ['ingrid', 'Todo bien, la charla salió bacán 👍'],
          out: 'Ingrid responde con un pulgar. Los lentes que faltan seguirán faltando una semana más.', kusi: ['pensando', '¿Y lo que encontraste en el recorrido?'] } },
    ],
    mirada: { ve: 'En seguridad, lo urgente no puede esperar al informe de fin de mes. Reportar el mismo día lo que puede herir a alguien es parte del trabajo.' },
  },
];
