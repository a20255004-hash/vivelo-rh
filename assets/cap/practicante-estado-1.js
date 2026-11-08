// Practicante profesional en una ORH del Estado · Capítulo 1 · «Mesa de partes» · Semana 1, lunes.
// Hilo de las dos semanas: tus prácticas en la Oficina de Recursos Humanos de un gobierno regional (ficticio) en Cusco:
// expedientes, legajos, la constancia que el profesor Víctor espera hace tres meses y un concurso CAS que alguien quiere apurar.
// Normas citadas:
// - D.Leg. 1401, régimen especial de las modalidades formativas de servicios en el sector público: acceso por concurso,
//   subvención obligatoria y jornada máxima de las prácticas profesionales (8 horas diarias o 48 semanales).
//   https://lpderecho.pe/d-l-1401-practicantes-sector-publico-ingresaran-concurso-publico/
//   https://cdn.www.gob.pe/uploads/document/file/5671828/5034352-informe-tecnico-2375-2021-servir-gpgsc.pdf (SERVIR: no hay prácticas sin subvención)
//   https://img.lpderecho.pe/wp-content/uploads/2022/03/Informe-tecnico-000296-2022-Servir-GPGSC-LPDerecho.pdf (SERVIR: jornada de prácticas profesionales)
// - Ley 31396: reconoce las prácticas preprofesionales y profesionales como experiencia laboral (citada en el informe de SERVIR anterior).
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 1, titulo: 'Mesa de partes', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/municipalidad.webp',
  lugar: 'Gobierno Regional · Wanchaq, Cusco',
  inicio: '08:00', fin: '17:00', cierreHora: '16:50',
  apertura: 'Cusco, siete y media de la mañana. Hace cuatro grados y el cielo está limpio sobre Wanchaq. Llegas a la sede del gobierno regional con tu convenio de prácticas en un folder y las manos heladas. Hoy empiezas en la Oficina de Recursos Humanos.', boton: 'Entrar a la ORH',
  kusi: 'En el Estado, un papel con sello vale más que mil promesas. ¡Aprende a leer los sellos!',
  lead: 'Seguiste la ruta de un expediente, recibiste la reiteración del profesor Víctor aunque el sistema estaba caído, encontraste errores en la pila del viernes y aprendiste que tu jornada también tiene reglas.',
  reflexion: '¿Por qué crees que en el Estado todo tiene que quedar por escrito, con número y sello?',
  siguiente: { n: 2, titulo: 'Los legajos', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'expedientes', p: 'Expedientes del viernes', j: 'Gladys · ORH', d: 0, e: '23 sin derivar' },
  { id: 'victor', p: 'Constancia de servicios del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'Tercera reiteración' },
  { id: 'legajos', p: 'Digitalización de legajos', j: 'Gladys · ORH', d: 0, e: 'Empieza mañana' },
  { id: 'concurso', p: 'Concurso CAS 012-2026', j: 'Comité de selección', d: 0, e: 'Postulaciones abiertas' },
];

export const FUTURO = {
  victor_cargo: ['Le diste al profesor Víctor un cargo con sello, fecha, hora y folios, aunque el sistema estaba caído.', 'Gladys usará ese cargo para pedir su legajo con prioridad.'],
  victor_vuelva: ['Le dijiste al profesor Víctor que volviera cuando funcionara el sistema.', 'Volverá el miércoles, más cansado y con menos paciencia.'],
  pila_revisada: ['Encontraste los errores de la pila del viernes antes de derivarla.', 'Gladys confiará en ti para los expedientes del concurso.'],
  jornada_clara: ['Hablaste con Gladys sobre tu jornada de practicante y dejaste el pendiente ordenado.', 'Rubén te mirará con una mezcla de envidia y respeto.'],
  jornada_extra: ['Te quedaste hasta las ocho foliando sin que nadie lo pidiera por escrito.', 'El cansancio se notará el martes.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  mama: { n: 'Mamá', sub: 'Casa', c: '#C05621' },
};

export const WSP = [
  { chat: 'mama', t: '07:20', de: 'Mamá', txt: 'Hijita, llévate la chompa de alpaca. Y tómate tu mate de coca antes de entrar, que el primer día da nervios 🙏' },
  { chat: 'grupo', t: '08:02', de: 'Gladys', txt: 'Bienvenida a nuestra nueva practicante. Rubén, enséñale la mesa de partes. A las 8:15 conversamos.' },
  { chat: 'ruben', t: '10:40', de: 'Rubén', txt: 'Oye, se cayó el sistema de trámite. Pasa cada lunes 🙃 Los de Informática dicen que «a mediodía».' },
  { chat: 'gladys', t: '12:10', de: 'Gladys', txt: 'Vi el cargo del profesor Quispe. Bien hecho. Mañana buscamos su legajo.', si: 'victor_cargo' },
  { chat: 'ruben', t: '17:05', de: 'Rubén', txt: 'Ya pues, ¿te quedas? Aquí el que se va a las cinco «no tiene compromiso» 😅' },
  { chat: 'mama', t: '19:50', de: 'Mamá', txt: '¿Todavía en la oficina? Te guardé tu caldo de gallina.', si: 'jornada_extra' },
];

export const CORREOS = [
  { t: '08:05', de: 'Gladys Huamán', para: 'Practicante de la ORH', asunto: 'Tus primeras dos semanas', html: '<p>Bienvenida. En estas dos semanas vas a apoyar en tres frentes: la mesa de partes de la ORH, la digitalización de legajos y el concurso CAS 012-2026.</p><p>Una regla: aquí nada se hace «de palabra». Si no está registrado, no existe. Y si no sabes, preguntas.</p><p>Gladys</p>' },
  { t: '14:30', de: 'Mesa de partes central', para: 'ORH', asunto: 'Expediente 2026-018734 · Reiteración', html: '<p>Se deriva a la ORH el escrito del Sr. Víctor Quispe Mamani, docente cesante, quien reitera por tercera vez su pedido de constancia de servicios, presentado en agosto.</p>' },
];

export const QUIZ = [
  { q: '¿Cómo se accede a unas prácticas en una entidad pública, según el D.Leg. 1401?', ops: ['Por recomendación de un funcionario', 'Por concurso público', 'Por orden de llegada', 'Por convenio verbal con el jefe'], ok: 1, por: 'El D.Leg. 1401 establece que el acceso a las prácticas en el sector público es por concurso.' },
  { q: '¿Cuál es la jornada máxima de unas prácticas profesionales en el Estado?', ops: ['6 horas diarias o 30 semanales', '8 horas diarias o 48 semanales', '10 horas diarias', 'La que pida el jefe'], ok: 1, por: 'El D.Leg. 1401 (art. 13) fija para las prácticas profesionales una jornada máxima de 8 horas diarias o 48 semanales.' },
  { q: '¿Se pueden hacer prácticas en el Estado sin subvención económica?', ops: ['Sí, si el practicante acepta', 'Sí, en los primeros tres meses', 'No: SERVIR señala que no hay prácticas bajo el D.Leg. 1401 sin subvención', 'Solo en municipalidades'], ok: 2, por: 'SERVIR ha señalado que no es posible realizar prácticas bajo el D.Leg. 1401 sin pagar la subvención.' },
  { q: 'El sistema de trámite se cae y llega un ciudadano con su escrito. ¿Qué haces?', ops: ['Le pides que vuelva mañana', 'Lo recibes y le das un cargo con sello, fecha, hora y folios; lo registras cuando vuelva el sistema', 'Lo dejas en la pila sin sello', 'Le dices que lo mande por WhatsApp'], ok: 1, por: 'El cargo es la prueba del ciudadano de que presentó su escrito ese día. Una caída del sistema no es su problema.' },
  { q: '¿Para qué sirve foliar un expediente?', ops: ['Para que se vea ordenado', 'Para saber cuántas hojas tiene y que ninguna se pierda o se agregue después', 'Para cobrar por hoja', 'No sirve para nada'], ok: 1, por: 'La foliación numera cada hoja: si alguien saca o mete una, se nota.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '08:15', ch: 'presencial', who: 'gladys-orh', titulo: 'La vida de un expediente', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Recursos Humanos, segundo piso', show: ['cumplimiento', 'calidad'],
    body: () => `<p>La ORH huele a papel viejo y a café pasado. Gladys Huamán, lentes en la punta de la nariz, levanta un expediente atado con pabilo y te lo pone delante. «Esto es un trámite. Cada hoja tiene su número, cada paso su sello.»</p><p>«Antes de tocar nada, <mark class="clave">quiero que sepas el camino que recorre un papel</mark> desde que entra hasta que sale.»</p>`,
    type: 'secuencia', prompt: 'Ordena la ruta de un expediente en la ORH. Usa las flechas.', boton: 'Mostrarle la ruta a Gladys',
    items: [
      { id: 'rec', t: 'Recepción en mesa de partes: sello con fecha, hora y número de folios', por: 'El cargo es la prueba del ciudadano.' },
      { id: 'reg', t: 'Registro en el sistema de trámite documentario con su número de expediente', por: 'Desde aquí se le puede hacer seguimiento.' },
      { id: 'der', t: 'Derivación a la oficina competente con un proveído', por: 'Quién lo atiende y para qué.' },
      { id: 'ate', t: 'Atención: se revisa, se busca el legajo y se prepara el documento', por: 'El trabajo de fondo.' },
      { id: 'fir', t: 'Firma de quien tiene la competencia', por: 'No firma quien quiere, sino quien puede.' },
      { id: 'not', t: 'Notificación al ciudadano y archivo del expediente', por: 'El trámite termina cuando el ciudadano recibe la respuesta.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Gladys sonríe apenas: «Bien. Y fíjate en lo último: el trámite no termina cuando firmamos, termina cuando la persona recibe su respuesta».' : 'Gladys mueve dos tarjetas: «Sin registro no hay seguimiento. Y sin firma competente, el documento no vale».',
        pro: { ok: 'Cada paso deja un rastro que alguien puede revisar después.', info: 'Pregunta quién tiene la competencia para firmar cada tipo de documento en la ORH.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Ya piensas como expediente!' : 'Sello, registro, firma… el orden importa.'],
      };
    },
    rules: [[BP, 'Todo documento que entra se registra con fecha, hora y folios, y todo documento que sale lo firma quien tiene la competencia.']],
    mirada: {
      ve: 'Al principio parece burocracia pura. Pero cada sello responde una pregunta que alguien hará algún día: ¿cuándo llegó?, ¿quién lo tuvo?, ¿quién decidió? El expediente es la memoria del Estado.',
      visual: { tipo: 'flujo', titulo: 'La vida de un expediente', pasos: ['Recepción', 'Registro', 'Derivación', 'Atención', 'Firma', 'Notificación'] },
    },
  },
  {
    id: 'm2', t: '10:45', ch: 'presencial', who: 'docente', titulo: 'El sistema se cayó', banner: 'assets/foto2/pasillo.webp', lugar: 'Ventanilla de la ORH', show: ['personas', 'cumplimiento', 'tiempo'],
    body: () => `<p>Un señor de terno gris, gastado en los codos, espera en la ventanilla con un sobre manila. Se quita el sombrero. «Buenos días, señorita. Víctor Quispe, profesor cesante. Treinta y un años enseñé en Anta.»</p><p>Es su tercera reiteración: pidió su constancia de servicios en agosto. La pantalla del sistema de trámite muestra un reloj de arena que no avanza. Rubén te susurra: «Dile que vuelva mañana, <mark class="clave">sin sistema no hay número</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Recibir su escrito, contar y anotar los folios, ponerle el sello con fecha y hora, darle su cargo y registrarlo apenas vuelva el sistema.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4, tiempo: -1 }, rel: { docente: 1 }, flags: ['victor_cargo'], cartera: { victor: 'Reiteración recibida con cargo de hoy' },
          out: 'El profesor guarda el cargo en su sobre como si fuera un billete. «Gracias, hija. En agosto nadie me dio ni eso.» A las 11:50 vuelve el sistema y lo registras: expediente 2026-018734.',
          pro: { ok: 'La caída del sistema es un problema de la entidad, no del ciudadano. El cargo protege su fecha.', info: 'Anota en un cuaderno lo que recibas sin sistema, para no olvidar registrarlo.' },
          kusi: ['celebra', 'Un sello a tiempo vale oro.'] } },
      { id: 'b', label: 'Pedirle disculpas y que vuelva mañana a primera hora, cuando funcione el sistema: así su escrito sale con número desde el inicio.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -2 }, rel: { docente: -1 }, flags: ['victor_vuelva'], cartera: { victor: 'Reiteración sin recibir' },
          out: 'El profesor se pone el sombrero despacio. «Mañana tengo terapia en EsSalud… vendré el miércoles.» Lo ves bajar las escaleras apoyado en la baranda.',
          pro: { ok: 'Quieres que el registro salga limpio.', risk: 'Le haces perder un día a una persona mayor por una falla que no es suya, y su escrito queda sin fecha.' },
          kusi: ['triste', 'El sistema se cayó… y él cargó con eso.'] } },
      { id: 'c', label: 'Recibir el sobre y dejarlo en la pila para registrarlo luego; ya le darás el cargo cuando tenga número.',
        res: { q: 'aceptable', fx: { personas: 1, cumplimiento: -3 },
          out: 'El profesor se va con las manos vacías. Su sobre queda bajo otros cuarenta. Si se pierde, no habrá prueba de que lo trajo hoy.',
          pro: { ok: 'No lo haces volver.', risk: 'Sin cargo, el ciudadano no tiene cómo probar que presentó su escrito.' },
          kusi: ['preocupado', '¿Y su prueba de que vino?'] } },
    ],
    rules: [[BP, 'Si el sistema falla, se recibe igual: sello, fecha, hora, folios y cargo. El registro se completa después.']],
    mirada: {
      ve: 'Para el profesor Víctor, el cargo no es un papel: es la prueba de que existe en el sistema. Muchas personas mayores llegan al Estado después de años de «vuelva mañana». Tú puedes ser la primera que no se lo dice.',
      visual: { tipo: 'balanza', a: { t: '«Vuelva mañana»', items: ['Registro limpio', 'Un día perdido para él', 'Su escrito sin fecha'] }, b: { t: 'Cargo manual', items: ['Su fecha protegida', 'Un poco más de trabajo para ti', 'Confianza en la ORH'] } },
    },
  },
  {
    id: 'm3', t: '12:20', ch: 'documento', who: null, titulo: 'La pila del viernes', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio, junto a la ventana', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Gladys te deja el registro manual de los expedientes que llegaron el viernes por la tarde, cuando nadie estaba en la ventanilla. Antes de derivarlos, hay que revisarlos.</p><p>Rubén los recibió «al toque». <mark class="clave">Marca lo que no puede pasar así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del registro que tienen un problema.',
    doc: { t: 'Registro manual de expedientes · viernes', sub: 'ORH · Gobierno Regional (ficticio) · Cusco' },
    lines: [
      { id: 'folios', t: 'Exp. 18690 · Solicitud de licencia sin goce · Folios: «varios».', bad: BP, why: 'Si no se cuentan los folios, nadie podrá saber después si falta o sobra una hoja.' },
      { id: 'hora', t: 'Exp. 18691 · Pedido de vacaciones · Fecha 31/10, hora corregida a mano de 16:50 a 15:30.', bad: BP, why: 'Una hora corregida sin explicación ni firma siembra dudas sobre cuándo llegó el escrito.' },
      { id: 'ok1', t: 'Exp. 18692 · Solicitud de copia de boleta · 3 folios · 15:10 · derivado a Remuneraciones.' },
      { id: 'dni', t: 'Exp. 18693 · Descanso médico con diagnóstico · dejado en la bandeja de la entrada, sobre abierto.', bad: BP, why: 'Un diagnóstico es un dato de salud. No puede quedar en una bandeja abierta a la vista de cualquiera.' },
      { id: 'ok2', t: 'Exp. 18694 · Constancia de trabajo · 2 folios · 16:00 · pendiente de firma de la jefatura.' },
      { id: 'sincargo', t: 'Exp. 18695 · Reclamo por descuento · «se le dijo que vuelva por su cargo el lunes».', bad: BP, why: 'El cargo se entrega en el momento. Sin él, el ciudadano no tiene prueba de que presentó su reclamo.' },
      { id: 'duda', t: 'Exp. 18696 · Carta sin firma del remitente · 1 folio · recibida.', duda: 'Se recibe, pero hay que anotar la observación y pedir que la firme: sin firma no se sabe quién pide.' },
    ],
    res: ({ missLey, hitsLey, hitsBp, falsos }) => {
      const bien = (hitsBp || 0) + (hitsLey || 0) >= 3 && !falsos;
      return {
        out: bien ? 'Le llevas la lista a Gladys. Mira la línea del descanso médico y se levanta a guardar el sobre en el armario con llave. «Rubén, ven un ratito.»' : 'Le llevas la lista a Gladys. Ella encuentra lo que se te pasó: «Mira el sobre con el diagnóstico. ¿Dónde está ahora?».',
        flags: bien ? ['pila_revisada'] : [], rel: { 'gladys-orh': bien ? 1 : 0 },
        cartera: { expedientes: bien ? '23 revisados, 4 con observaciones' : 'Revisados a medias' },
        pro: { ok: 'Revisar antes de derivar evita que el error viaje a otra oficina.', risk: 'Un dato de salud a la vista o un reclamo sin cargo pueden convertirse en una queja contra la entidad.', info: 'Corrige sin humillar: Rubén aprendió así porque nadie le enseñó otra forma.' },
        kusi: bien ? ['celebra', '¡Ojo de archivera!'] : ['pensando', 'Hay papeles que no deben quedar a la vista.'],
      };
    },
    rules: [[BP, 'Folios contados, hora sin enmendaduras, cargo en el momento y datos de salud bajo llave.']],
    mirada: {
      ve: 'Rubén no lo hizo por mala fe: un viernes a las cinco, solo, con una cola de gente, cualquiera recorta pasos. Tu revisión no es para acusarlo: es para que el error no llegue a la persona que espera su respuesta.',
      visual: { tipo: 'cambio', titulo: 'De la pila al registro', pares: [['Folios: «varios»', 'Folios: 7'], ['Hora corregida a mano', 'Hora original y nota firmada'], ['Diagnóstico en la bandeja', 'Diagnóstico en armario con llave'], ['«Vuelva por su cargo»', 'Cargo en el momento']] },
    },
  },
  {
    id: 'm4', t: '14:15', ch: 'sistema', who: null, titulo: 'Lo que entra hoy', banner: 'assets/esc/escritorio.webp', lugar: 'Sistema de trámite documentario', show: ['tiempo', 'cumplimiento', 'personas'],
    body: () => `<p>Vuelves del almuerzo: un menú de tres soles cincuenta en el mercado de Wanchaq, sopa de quinua y estofado. El sistema funciona, pero lento. Gladys te deja una lista y se va a una reunión con la Gerencia.</p><p>Tienes la tarde para <mark class="clave">tres encargos</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres encargos que haces esta tarde.', boton: 'Empezar', resumen: 'Atendiste',
    cols: ['Encargo', 'Lo que sabes'],
    rows: [
      { id: 'registrar', cells: ['Registrar en el sistema lo recibido a mano en la mañana', 'Si no se registra hoy, mañana nadie sabrá que llegó'] },
      { id: 'victor', cells: ['Buscar en el archivo el número de legajo del profesor Quispe', 'Su pedido es de agosto'] },
      { id: 'derivar', cells: ['Derivar los 19 expedientes del viernes sin observaciones', 'Cada día parado cuenta en el plazo'] },
      { id: 'cafe', cells: ['Ordenar la estantería del café y los útiles', 'Rubén dice que «así empiezan todos»'] },
      { id: 'cas', cells: ['Leer las bases del concurso CAS 012-2026', 'El jueves empiezas a revisar postulaciones'] },
    ],
    score: { registrar: 3, victor: 2, derivar: 3, cas: 1, cafe: -1 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : 0, cumplimiento: picks.includes('registrar') ? 4 : -3, personas: picks.includes('victor') ? 2 : 0 },
        cartera: { expedientes: picks.includes('derivar') ? '19 derivados hoy' : '19 en espera', victor: picks.includes('victor') ? 'Legajo 0457, caja 31 del archivo' : 'Tercera reiteración, legajo sin ubicar' },
        out: q === 'buena' ? 'A las cinco menos diez todo lo recibido hoy tiene número y los expedientes del viernes ya están en sus oficinas.' + (picks.includes('victor') ? ' El legajo del profesor: caja 31, en el sótano.' : '') : picks.includes('registrar') ? 'Lo de hoy queda registrado, pero algo se queda en la bandeja.' : 'Lo recibido a mano en la mañana sigue sin número. Mañana alguien preguntará por él.',
        pro: { ok: 'Lo que no se registra hoy se pierde mañana.', info: 'Las bases del concurso puedes leerlas en el bus: son largas, pero las vas a necesitar.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Bandeja limpia. ¡Qué bacán!' : 'Revisa qué no podía esperar.'],
      };
    },
    rules: [[BP, 'Primero se registra lo recibido; después se deriva; al final, lo que puede esperar.']],
    mirada: {
      ve: 'En una oficina pública siempre hay más pedidos que manos. Priorizar no es elegir lo que te gusta: es mirar qué deja a alguien esperando y qué deja un papel sin rastro.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Alguien espera', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Puede esperar', 'No es urgente'], items: [['Registrar lo de hoy', .3, .95], ['Derivar los 19', .6, .85], ['Legajo del profesor', .4, .8], ['Bases del CAS', .5, .4], ['Estantería del café', .2, .05]] },
    },
  },
  {
    id: 'm5', t: '16:20', ch: 'whatsapp', who: 'gladys-orh', titulo: 'Lo del profesor', banner: 'assets/foto/llamada.webp', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => `<p>Gladys te escribe desde la reunión: «¿Algo que deba saber antes de mañana?».</p><p>${F.has('victor_cargo') ? 'Piensas en el profesor y su sobre manila.' : 'Piensas en el profesor bajando las escaleras.'} <mark class="clave">Su pedido lleva tres meses</mark> y nadie sabe en qué quedó.</p>`,
    type: 'compose', enviaA: 'gladys', para: 'Para: Gladys Huamán · Especialista de la ORH', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'El hecho', ops: [
        { id: 'h1', t: 'Hoy vino el Prof. Víctor Quispe con su tercera reiteración: pidió su constancia de servicios en agosto.', ok: true, por: 'Hechos y fechas, sin adornos.' },
        { id: 'h2', t: 'Vino un profesor bien molesto porque aquí nadie hace nada 😬', ok: false, por: 'Opiniones y culpas no ayudan a resolver.' },
      ] },
      { id: 'dato', t: 'Lo que averiguaste', ops: [
        { id: 'd1', t: 'Su legajo sería el 0457, caja 31 del archivo. No sé si está completo.', ok: true, por: 'Le das un dato útil y lo que no sabes.' },
        { id: 'd2', t: 'Ya le prometí que su constancia sale esta semana.', ok: false, por: 'No puedes prometer lo que no depende de ti.' },
      ] },
      { id: 'pide', t: 'Lo que propones', ops: [
        { id: 'p1', t: '¿Puedo empezar por su legajo mañana en la digitalización?', ok: true, por: 'Propones algo concreto y dentro de tu tarea.' },
        { id: 'p2', t: 'Usted verá qué hacemos.', ok: null, por: 'No está mal, pero no propones nada.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.dato === 'd2', buenas = ['h1', 'd1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, calidad: q === 'buena' ? 2 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Gladys responde: «Sí. Empieza por ahí. Ese legajo tiene historia».' : mal ? 'Gladys responde seco: «Aquí no prometemos fechas que no controlamos. Mañana conversamos».' : 'Gladys responde: «Ok. Mañana vemos».',
        pro: { ok: 'Un buen mensaje a tu jefa dice qué pasó, qué sabes y qué propones.', risk: 'Una promesa al ciudadano compromete a toda la oficina.' },
        kusi: [q === 'buena' ? 'animo' : mal ? 'preocupado' : 'pensando', q === 'buena' ? 'Claro y con propuesta. ¡Dale!' : mal ? 'Esa promesa no era tuya…' : 'Le faltó una propuesta.'],
      };
    },
    mirada: {
      ve: 'Gladys no puede estar en todas partes. Lo que tú le cuentas es lo que ella sabe. Un mensaje con hechos y un dato concreto le ahorra media hora; una promesa al ciudadano le crea un problema.',
      visual: { tipo: 'mensaje', titulo: 'Hecho, dato y propuesta', txt: 'Hoy vino el Prof. Víctor Quispe con su tercera reiteración. Su legajo sería el 0457, caja 31. ¿Puedo empezar por él mañana?' },
    },
  },
  {
    id: 'm6', t: '16:55', ch: 'presencial', who: 'colega', titulo: '¿Te quedas?', banner: 'assets/foto2/revisan.webp', lugar: 'ORH, cuando ya oscurece', show: ['etica', 'confianza', 'personas'],
    body: () => `<p>Afuera el sol baja detrás del cerro y el frío entra por las ventanas. Rubén tiene una torre de expedientes para foliar. «Aquí nadie se va a las cinco. Si te vas, dicen que no tienes compromiso. Yo me quedo hasta las ocho todos los días.»</p><p>Tu convenio dice otra cosa. <mark class="clave">Y tú quieres quedar bien</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Dejar tu avance ordenado y anotado para mañana, y pedirle a Gladys conversar sobre tu horario: quieres cumplir tu jornada y que lo urgente se planifique dentro de ella.',
        res: { q: 'buena', fx: { etica: 4, confianza: 2, personas: 2 }, rel: { 'gladys-orh': 1, colega: 0 }, flags: ['jornada_clara'],
          out: 'Gladys se quita los lentes: «Tienes razón. Ustedes son practicantes, no servidores de reemplazo. Rubén, tú también te vas». Rubén te mira sorprendido y apaga su computadora.',
          pro: { ok: 'Cumples tu jornada y dejas el trabajo listo para continuar.', risk: 'Puede que alguien comente que «te fuiste temprano».', info: 'Tu jornada máxima está en tu convenio y en el D.Leg. 1401.' },
          kusi: ['animo', 'Compromiso no es quedarse gratis hasta la noche.'] } },
      { id: 'b', label: 'Quedarte hasta las ocho con Rubén: es tu primera semana y quieres mostrar compromiso.',
        res: { q: 'aceptable', fx: { confianza: 1, etica: -2, personas: -2 }, rel: { colega: 1 }, flags: ['jornada_extra'],
          out: 'Folian hasta las ocho. Rubén te cuenta que quiere pasar al CAS «algún día». Llegas a casa a las nueve, con el caldo frío y los pies helados.',
          pro: { ok: 'Ayudas a Rubén y aprendes a foliar rápido.', risk: 'Lo que empieza como favor se vuelve costumbre, y tu jornada deja de tener límite.' },
          kusi: ['pensando', '¿Y mañana? ¿Y pasado?'] } },
      { id: 'c', label: 'Irte a las cinco sin decir nada: tu jornada termina y no le debes explicaciones a Rubén.',
        res: { q: 'aceptable', fx: { etica: 1, confianza: -2 }, rel: { colega: -1 },
          out: 'Bajas las escaleras con tu chompa. Rubén se queda solo con la torre. Mañana nadie sabrá dónde dejaste lo tuyo.',
          pro: { ok: 'Respetas tu horario.', risk: 'Sin avisar ni dejar tu avance ordenado, otros cargan con lo que falta.' },
          kusi: ['pensando', 'Tu horario, sí. ¿Y tu pendiente?'] } },
    ],
    rules: [[LEY, 'D.Leg. 1401: las prácticas profesionales tienen una jornada máxima de 8 horas diarias o 48 semanales (art. 13) y se pagan con una subvención económica mensual (art. 16).'], [LEY, 'Ley 31396: las prácticas profesionales cuentan como experiencia laboral.']],
    mirada: {
      ve: 'Las prácticas existen para que aprendas haciendo, no para cubrir con horas gratis la falta de personal. Rubén se queda porque teme que lo vean como «el practicante». Tu forma de cuidar tu jornada también puede cuidar la suya.',
      visual: { tipo: 'linea', titulo: 'Tu jornada de practicante', hitos: [['08:00', 'Entrada'], ['13:00', 'Almuerzo'], ['17:00', 'Fin de la jornada'], ['20:00', 'La costumbre de Rubén']] },
      normas: [{ ley: 'D.Leg. 1401, régimen de modalidades formativas en el sector público', dice: 'El acceso a las prácticas es por concurso; las prácticas profesionales tienen una jornada máxima de 8 horas diarias o 48 semanales y se pagan con una subvención económica.', practica: 'Quedarte tres horas más cada día sin que nadie lo planifique no es compromiso: es trabajo fuera de tu convenio.' }],
    },
  },
];
