// Practicante profesional en una ORH del Estado · Capítulo 2 · «Los legajos» · Semana 1, martes.
// Hilo: la ORH digitaliza legajos antiguos; el del profesor Víctor Quispe tiene un hueco que explica por qué su constancia no sale.
// Normas citadas:
// - Directiva N° 001-2023-SERVIR-GDSRH, «Normas para la gestión del proceso de administración de legajos»,
//   aprobada por Resolución de Presidencia Ejecutiva N° 190-2023-SERVIR-PE.
//   https://cdn.www.gob.pe/uploads/document/file/5231730/Resoluci%C3%B3n%20N%C2%BA%20190-2023-SERVIR-PE.pdf
//   https://cdn.www.gob.pe/uploads/document/file/5231731/DIRECTIVA%20N%C2%BA%20001-2023%20GDSRH%20-%20%20Normas%20para%20la%20Gesti%C3%B3n%20del%20Proceso%20de%20Admnistraci%C3%B3n%20de%20Legajos.pdf
// - Ley 29733, Ley de Protección de Datos Personales: los datos del legajo se tratan con reserva y medidas de seguridad.
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 2, titulo: 'Los legajos', dia: 'Semana 1, martes', foto: 'assets/3d/scenes/almacen.webp',
  lugar: 'Archivo de la ORH · sótano de la sede, Wanchaq',
  inicio: '08:00', fin: '17:00', cierreHora: '16:50',
  apertura: 'Martes. Bajas al sótano con Gladys y una linterna. El archivo de la ORH son cuarenta estantes de metal, cajas de cartón con años escritos a plumón y un olor a humedad que se pega en la chompa.', boton: 'Bajar al archivo',
  kusi: 'Cada legajo es la vida laboral de una persona. ¡Con cariño y con guantes!',
  lead: 'Armaste la ficha de un legajo, encontraste el hueco en el del profesor Víctor, cuidaste papeles de hace treinta años, rastreaste una resolución perdida y redactaste tu primer oficio.',
  reflexion: '¿Qué pasa con la vida laboral de una persona cuando un papel de su legajo se pierde?',
  siguiente: { n: 3, titulo: 'La constancia', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'legajos', p: 'Digitalización de legajos', j: 'Gladys · ORH', d: 0, e: 'Caja 31 de 140' },
  { id: 'victor', p: 'Constancia de servicios del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'Legajo 0457 por revisar' },
  { id: 'oficio', p: 'Oficio a la UGEL Anta', j: 'Jefatura de la ORH', d: 0, e: 'Por redactar' },
  { id: 'concurso', p: 'Concurso CAS 012-2026', j: 'Comité de selección', d: 0, e: 'Postulaciones abiertas' },
];

export const FUTURO = {
  legajo_hueco: ['Encontraste que al legajo del profesor le faltan las resoluciones de 1994 a 1997.', 'Ese hueco es la razón por la que su constancia no sale.'],
  legajo_cuidado: ['Escaneaste los papeles antiguos hoja por hoja, sin dañarlos.', 'Gladys te encargará los legajos más frágiles.'],
  celular_datos: ['Fotografiaste legajos con tu celular y los pasaste por WhatsApp.', 'Esas fotos siguen en tu teléfono. Alguien preguntará por ellas.'],
  pedido_ugel: ['Ubicaste en la UGEL Anta las resoluciones que faltaban.', 'El oficio puede salir hoy.'],
  oficio_listo: ['Redactaste un oficio claro para que la UGEL envíe las copias.', 'La jefatura lo firma el miércoles temprano.'],
  nieta_reserva: ['No le diste a la nieta del profesor datos de su legajo por WhatsApp; lo citaste a él.', 'El profesor llega el miércoles con sus papeles.'],
  nieta_datos: ['Le contaste a la nieta del profesor lo que faltaba en su legajo.', 'El profesor se enterará por otra persona.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  yesenia: { n: 'Yesenia Quispe', sub: 'Nieta del Prof. Víctor', c: '#7A4A2E' },
};

export const WSP = [
  { chat: 'grupo', t: '07:55', de: 'Gladys', txt: 'Hoy archivo. Traigan chompa y mascarilla. Los guantes están en mi cajón.' },
  { chat: 'ruben', t: '08:05', de: 'Rubén', txt: 'Perdón por ayer, lo del descanso médico en la bandeja 😓 Nadie me había dicho.', si: 'pila_revisada' },
  { chat: 'ruben', t: '08:06', de: 'Rubén', txt: 'Hoy me voy a las 5 nomás. Gladys me miró feo ayer 😂', si: 'jornada_clara' },
  { chat: 'gladys', t: '08:10', de: 'Gladys', txt: 'Empieza por la caja 31. Ahí está el legajo del profesor Quispe.', si: 'victor_cargo' },
  { chat: 'gladys', t: '08:10', de: 'Gladys', txt: 'Empieza por la caja 31. Y si el profesor Quispe vuelve, me avisas: ayer no lo atendieron.', no: 'victor_cargo' },
  { chat: 'yesenia', t: '16:40', de: 'Yesenia', txt: 'Buenas tardes, señorita. Soy nieta del profesor Víctor Quispe. Mi abuelito me dio este número. ¿Ya salió su constancia? ¿Qué le falta? Él no entiende WhatsApp 🙏' },
];

export const CORREOS = [
  { t: '08:20', de: 'Gladys Huamán', para: 'Practicante de la ORH', asunto: 'Digitalización de legajos', html: '<p>Vamos a digitalizar los legajos de la caja 1 a la 140, empezando por los que tienen trámites pendientes. Cada legajo se inventaría, se escanea y se devuelve a su caja en el mismo orden.</p><p>Los legajos tienen datos personales. No salen del archivo, no se fotografían con celulares personales y no se mandan por WhatsApp.</p><p>Gladys</p>' },
  { t: '15:10', de: 'UGEL Anta · Archivo', para: 'ORH Gobierno Regional', asunto: 'RE: consulta telefónica', html: '<p>Confirmamos que en nuestro archivo existen las resoluciones directorales de 1994 a 1997 del Sr. Víctor Quispe Mamani. Para emitir copias autenticadas, sírvase remitir oficio de su entidad.</p>', si: 'pedido_ugel' },
];

export const QUIZ = [
  { q: '¿Qué es el legajo de un servidor?', ops: ['Una carpeta de chismes', 'El conjunto de documentos de su vida laboral: ingreso, resoluciones, desplazamientos, formación', 'Solo su copia de DNI', 'Su historial de faltas'], ok: 1, por: 'El legajo reúne los documentos de la trayectoria de una persona en la entidad.' },
  { q: '¿Qué directiva de SERVIR regula hoy la administración de legajos?', ops: ['Ninguna', 'La Directiva N° 001-2023-SERVIR-GDSRH', 'El reglamento interno de cada oficina', 'La Ley 27444'], ok: 1, por: 'La Directiva N° 001-2023-SERVIR-GDSRH fija las normas para la gestión del proceso de administración de legajos.' },
  { q: 'Para avanzar más rápido, un compañero propone fotografiar los legajos con su celular. ¿Qué dices?', ops: ['Que sí, es más rápido', 'Que no: los legajos tienen datos personales y deben tratarse con medidas de seguridad', 'Que sí, si borra las fotos el viernes', 'Que solo las caras del DNI'], ok: 1, por: 'La Ley 29733 exige medidas de seguridad para tratar datos personales. Un celular personal no lo es.' },
  { q: 'La nieta del profesor te pide por WhatsApp qué le falta al legajo de su abuelo. ¿Qué haces?', ops: ['Le cuentas todo, es familia', 'Le dices que esa información se la das al profesor o a quien él autorice formalmente, y lo citas', 'No le respondes', 'Le mandas foto del legajo'], ok: 1, por: 'Los datos del legajo son del titular. Se informan a él o a quien él autorice.' },
  { q: 'Falta una resolución en un legajo. ¿Quién firma el oficio para pedirla a otra entidad?', ops: ['La practicante', 'Quien tiene la competencia en la ORH', 'El profesor', 'Cualquiera del área'], ok: 1, por: 'Puedes redactarlo, pero lo firma quien tiene la competencia.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'l1', t: '08:30', ch: 'presencial', who: 'gladys-orh', titulo: 'La ficha del legajo', banner: 'assets/3d/scenes/almacen-sq.webp', lugar: 'Archivo de la ORH, estante 8', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Gladys abre la caja 31 con cuidado. Los folders están amarillos y algunas grapas ya son puro óxido. «Antes de escanear, se inventaría. Si no sabes qué hay, no sabes qué falta.»</p><p>Te pasa una ficha en blanco. <mark class="clave">Arma el procedimiento</mark> para cada legajo.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del procedimiento.', boton: 'Mostrarle la ficha a Gladys',
    bloques: [
      { id: 'ident', t: 'Identificar', n: 2, ops: [
        { id: 'i1', t: 'Anotar nombre, número de legajo y caja de origen.', ok: true, por: 'Para devolverlo a su lugar exacto.' },
        { id: 'i2', t: 'Listar cada documento con su fecha y número de folios.', ok: true, por: 'El índice muestra los huecos.' },
        { id: 'i3', t: 'Reordenar los documentos como te parezca más lógico.', ok: false, por: 'Se respeta el orden original; si lo cambias, se pierde el contexto.' },
      ] },
      { id: 'cuidar', t: 'Cuidar el papel', n: 2, ops: [
        { id: 'c1', t: 'Retirar las grapas oxidadas con cuidado antes de escanear.', ok: true, por: 'El óxido rompe el papel en el escáner.' },
        { id: 'c2', t: 'Separar las hojas frágiles para escanearlas en cama plana.', ok: true },
        { id: 'c3', t: 'Pegar con cinta las hojas rotas.', ok: false, por: 'La cinta amarillea y daña el papel con los años.' },
      ] },
      { id: 'reserva', t: 'Reserva', n: 2, ops: [
        { id: 'r1', t: 'Guardar los archivos escaneados solo en la carpeta de red de la ORH.', ok: true },
        { id: 'r2', t: 'Anotar en el registro quién sacó el legajo y a qué hora lo devolvió.', ok: true, por: 'Así se sabe siempre quién lo tuvo.' },
        { id: 'r3', t: 'Copiar los PDF a tu USB para avanzar en casa.', ok: false, por: 'Los legajos no salen de la entidad, ni en papel ni en USB.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        cartera: { legajos: q === 'riesgosa' ? 'Procedimiento por corregir' : 'Ficha de inventario lista' },
        out: q === 'buena' ? 'Gladys fotocopia tu ficha y le da una a Rubén. «Esto queda como formato.»' : 'Gladys tacha un par de líneas: «El orden original no se toca. Y nada sale de aquí».',
        pro: { ok: 'Inventariar antes de escanear te muestra lo que falta.', info: 'La directiva de legajos de SERVIR pide organizar, custodiar y mantener actualizado el legajo de cada servidor.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Archivera profesional!' : 'El orden original cuenta una historia.'],
      };
    },
    rules: [[LEY, 'Directiva N° 001-2023-SERVIR-GDSRH: normas para la gestión del proceso de administración de legajos.'], [LEY, 'Ley 29733: los datos personales se tratan con reserva y medidas de seguridad.']],
    mirada: {
      ve: 'Un legajo no es una carpeta vieja: es la prueba de que alguien trabajó treinta años para el Estado. Sin él, no hay constancia, no hay pensión bien calculada, no hay memoria. Por eso se inventaría antes de tocar.',
      visual: { tipo: 'flujo', titulo: 'Un legajo, paso a paso', pasos: ['Identificar', 'Inventariar', 'Cuidar el papel', 'Escanear', 'Devolver a su caja', 'Registrar'] },
    },
  },
  {
    id: 'l2', t: '09:40', ch: 'documento', who: null, titulo: 'El legajo 0457', banner: 'assets/esc/lupa.webp', lugar: 'Mesa del archivo', show: ['calidad', 'personas'],
    body: () => `<p>Abres el legajo de Víctor Quispe Mamani. Adentro hay una foto carné en blanco y negro: un joven de bigote, corbata delgada, mirada seria. Treinta y un años de servicio deberían estar aquí.</p><p>Haces el índice. <mark class="clave">Marca lo que no cuadra</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del índice que muestran un problema.',
    doc: { t: 'Índice del legajo 0457 · Víctor Quispe Mamani', sub: 'Caja 31 · inventario de hoy' },
    lines: [
      { id: 'nomb', t: '1987 · Resolución de nombramiento como profesor de aula · I.E. de Anta · 2 folios.' },
      { id: 'tras', t: '1993 · Resolución de traslado a otra I.E. de Anta · 1 folio.' },
      { id: 'hueco', t: '1994 a 1997 · ningún documento.', bad: BP, why: 'Cuatro años sin resoluciones en un docente en actividad no es normal: falta algo, y sin eso no se puede certificar el tiempo de servicios.' },
      { id: 'ajeno', t: '1998 · Resolución de encargatura de dirección a nombre de «Víctor Quispe Huallpa».', bad: BP, why: 'Es otra persona con nombre parecido. Un documento ajeno en un legajo puede inflar o confundir los años de servicio.' },
      { id: 'folio', t: '2005 · Constancia de capacitación · folios 14 y 16 (no hay 15).', bad: BP, why: 'Un folio que salta indica que se sacó una hoja. Se anota la observación.' },
      { id: 'ok', t: '2018 · Resolución de cese por límite de edad · 3 folios.' },
      { id: 'salud', t: '2016 · Informe médico con diagnóstico, suelto entre las resoluciones.', duda: 'Puede ser parte del legajo, pero es un dato de salud: debe ir en un sobre aparte, con acceso restringido.' },
    ],
    res: ({ missLey, hitsBp, falsos }) => {
      const bien = (hitsBp || 0) >= 2 && !falsos;
      return {
        out: bien ? 'Le muestras el índice a Gladys. Se queda mirando la línea de 1994 a 1997. «Ahí está. Por eso la constancia no salía: nadie quería certificar cuatro años sin papeles.»' : 'Le muestras el índice a Gladys. Ella pasa el dedo por las fechas y se detiene: «¿Y de 1994 a 1997 qué hizo el profesor?».',
        flags: ['legajo_hueco'], rel: { 'gladys-orh': bien ? 1 : 0 },
        cartera: { victor: 'Faltan resoluciones de 1994 a 1997; hay un documento ajeno' },
        pro: { ok: 'Un índice con fechas deja ver lo que falta y lo que sobra.', risk: 'Certificar años sin documentos, o con documentos de otra persona, es emitir una constancia falsa.', info: 'El documento de «Quispe Huallpa» se separa con un acta y se busca su legajo correcto.' },
        kusi: bien ? ['sorpresa', '¡Encontraste el hueco!'] : ['curioso', 'Mira bien las fechas…'],
      };
    },
    rules: [[BP, 'Si un legajo tiene huecos o documentos ajenos, se anota la observación por escrito. No se completa «de memoria».']],
    mirada: {
      ve: 'Tres meses de espera tenían una explicación: un hueco de cuatro años. Nadie lo había dicho porque nadie había abierto la caja. A veces la mala atención no es desinterés: es que nadie se tomó el tiempo de mirar.',
      visual: { tipo: 'linea', titulo: 'La vida laboral del profesor Víctor', hitos: [['1987', 'Nombramiento'], ['1993', 'Traslado'], ['1994-1997', '¿?'], ['2018', 'Cese por límite de edad']] },
    },
  },
  {
    id: 'l3', t: '11:20', ch: 'presencial', who: 'colega', titulo: 'El escáner lento', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Archivo, junto al escáner', show: ['calidad', 'tiempo', 'etica'],
    body: () => `<p>El escáner de cama plana tarda un minuto por hoja. A este ritmo, la caja 31 te toma toda la semana. Rubén llega con su celular en la mano: «Yo hago fotos con el cel, las paso por WhatsApp Web a la PC y listo. O metes todo al alimentador automático, vuela».</p><p>Pruebas el alimentador con una hoja de 1993: <mark class="clave">sale con una esquina mordida</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escanear hoja por hoja en cama plana los papeles antiguos, y usar el alimentador solo con los documentos recientes en buen estado.',
        res: { q: 'buena', fx: { calidad: 5, tiempo: -3, etica: 2 }, rel: { 'gladys-orh': 1 }, flags: ['legajo_cuidado'], cartera: { legajos: 'Caja 31: frágiles en cama plana, recientes en alimentador' },
          out: 'Avanzas más lento, pero ninguna hoja de 1987 se rompe. Gladys pasa y ve la pila separada: «Así. Lo viejo no se recupera».',
          pro: { ok: 'Combinas cuidado y velocidad según el estado de cada papel.', risk: 'El cronograma se atrasa un poco.', info: 'Anota cuántas hojas por hora avanzas: Gladys necesitará ese dato para reprogramar.' },
          kusi: ['feliz', 'Lento pero entero. ¡Bien!'] } },
      { id: 'b', label: 'Hacer como Rubén: fotos con tu celular y pasarlas por WhatsApp a la PC. Es solo para avanzar.',
        res: { q: 'riesgosa', fx: { tiempo: 4, etica: -5, cumplimiento: -4 }, flags: ['celular_datos'], cartera: { legajos: 'Caja 31 fotografiada con celular' },
          out: 'Terminas el legajo del profesor en veinte minutos. En tu galería quedan 43 fotos con DNI, resoluciones y un informe médico. Y en los servidores de WhatsApp también.',
          pro: { ok: 'Avanzas rapidísimo.', risk: 'Los datos del legajo salen de la entidad y quedan en tu teléfono personal. Es justo lo que el correo de Gladys prohibía.' },
          kusi: ['indignado', '¡Esos datos no son tuyos!'] } },
      { id: 'c', label: 'Meter todo al alimentador automático y revisar después qué hojas se dañaron.',
        res: { q: 'riesgosa', fx: { tiempo: 3, calidad: -5 },
          out: 'El alimentador traga la resolución de nombramiento de 1987 y la devuelve partida en dos. Te quedas con los pedazos en la mano.',
          pro: { ok: 'Avanzas rápido.', risk: 'Un documento original roto no se recupera. Y es justo el que prueba cuándo empezó a trabajar el profesor.' },
          kusi: ['triste', 'Ese papel tenía 39 años…'] } },
    ],
    rules: [[LEY, 'Ley 29733: quien trata datos personales debe adoptar medidas de seguridad para protegerlos.'], [BP, 'Los legajos no se fotografían con celulares personales ni se mandan por WhatsApp.']],
    mirada: {
      ve: 'Rubén no es descuidado: tiene la misma presión que tú y un escáner de hace diez años. Pero la velocidad que ganas con el celular la pagan las personas cuyos datos quedan en tu galería.',
      visual: { tipo: 'balanza', a: { t: 'Celular o alimentador', items: ['Rápido', 'Datos fuera de la entidad', 'Originales dañados'] }, b: { t: 'Cama plana para lo frágil', items: ['Lento', 'Datos protegidos', 'Originales enteros'] } },
    },
  },
  {
    id: 'l4', t: '13:40', ch: 'llamada', who: null, titulo: '¿Dónde están 1994 a 1997?', banner: 'assets/foto2/callcenter.webp', lugar: 'Teléfono fijo de la ORH', show: ['tiempo', 'personas', 'calidad'],
    body: () => `<p>Vuelves del almuerzo con un choclo con queso que compraste en la esquina. Gladys te da tres números: «Si el profesor trabajó en Anta, sus resoluciones de esos años las emitió alguien. <mark class="clave">Averigua quién las tiene</mark>.»</p>`,
    type: 'calls',
    calls: [
      ['Archivo Regional del Cusco', 'Contesta una señora con voz amable', '«Aquí tenemos documentos transferidos hasta 1990, señorita. Lo de los noventa todavía debe estar en la UGEL.»'],
      ['Dirección Regional de Educación · Mesa de partes', 'Tono de ocupado tres veces', 'Al cuarto intento: «Eso no es aquí. Llame a la UGEL de su provincia».'],
      ['UGEL Anta · Archivo', 'Contesta don Hilario, quien atiende hace 25 años', '«¿Quispe Mamani, Víctor? Claro, el profesor de Huarocondo. Sus resoluciones de traslado y de reasignación están en la caja del 95. Para copias autenticadas me tienen que mandar un oficio.»'],
    ],
    prompt: 'Hiciste tres llamadas. ¿Qué haces con lo que averiguaste?',
    choices: [
      { id: 'a', label: 'Pedirle a don Hilario que confirme por correo lo que tiene, anotar su nombre y anexo, y preparar el oficio para que la jefatura lo firme hoy.',
        res: { q: 'buena', fx: { tiempo: 3, calidad: 4, personas: 2 }, flags: ['pedido_ugel'], cartera: { oficio: 'UGEL Anta confirma tener las resoluciones; falta oficio' },
          out: 'A las tres llega el correo de la UGEL confirmando. Gladys lo imprime y lo grapa al legajo: «Esto ya es prueba de que existen».',
          pro: { ok: 'Lo dicho por teléfono queda por escrito y el trámite sigue el canal formal.', info: 'Anota el anexo de don Hilario: en el Estado, conocer a la persona del archivo vale mucho.' },
          kusi: ['celebra', '¡Don Hilario, el héroe del día!'] } },
      { id: 'b', label: 'Pedirle a don Hilario que le saque una foto a las resoluciones y te las mande por WhatsApp hoy mismo, para avanzar.',
        res: { q: 'aceptable', fx: { tiempo: 4, cumplimiento: -3 },
          out: 'Don Hilario duda: «Ay, señorita, eso no puedo… pero ya, le mando para que vea». Llegan dos fotos borrosas. Sirven para saber que existen, no para certificar nada.',
          pro: { ok: 'Confirmas rápido que los documentos existen.', risk: 'Una foto por WhatsApp no es copia autenticada y compromete a quien te la mandó.' },
          kusi: ['pensando', 'Rápido sí, ¿pero vale?'] } },
      { id: 'c', label: 'Anotar que «estarían en la UGEL» y dejarlo para que Gladys decida cuándo pedirlo.',
        res: { q: 'aceptable', fx: { tiempo: -2, calidad: 1 },
          out: 'Dejas una nota en el escritorio de Gladys. Ella está en reunión hasta las cuatro y media. El oficio no sale hoy.',
          pro: { ok: 'No te sales de tu rol.', risk: 'Sin confirmación escrita ni oficio preparado, el pedido del profesor espera un día más.' },
          kusi: ['pensando', 'Ya sabías dónde estaba…'] } },
    ],
    rules: [[BP, 'Lo que se confirma por teléfono se pide por escrito. Los documentos de otra entidad se solicitan por oficio.']],
    mirada: {
      ve: 'En el Estado, los papeles viajan de una oficina a otra durante décadas. Encontrar una resolución de 1995 depende de saber a quién llamar, y de que la persona del archivo, como don Hilario, recuerde al profesor de Huarocondo.',
      visual: { tipo: 'embudo', titulo: 'Rastrear una resolución', niveles: [['Archivo Regional', 3], ['Dirección Regional de Educación', 2], ['UGEL Anta', 1]] },
    },
  },
  {
    id: 'l5', t: '15:30', ch: 'documento', who: 'gladys-orh', titulo: 'Tu primer oficio', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Gladys vuelve con prisa. «Redáctame el oficio a la UGEL. Lo reviso y lo sube a la firma de la jefa antes de las cinco.»</p><p>Te deja un modelo de 2019 con la fecha borrada. <mark class="clave">Arma el oficio</mark>.</p>`,
    type: 'compose', enviaA: 'gladys', para: 'Para revisión: Gladys Huamán · luego a firma de la Jefatura de la ORH', boton: 'Enviar el borrador a Gladys',
    prompt: 'Elige una frase para cada parte del oficio.',
    slots: [
      { id: 'asunto', t: 'Asunto', ops: [
        { id: 'a1', t: 'Asunto: Solicito copias autenticadas de resoluciones directorales del Sr. Víctor Quispe Mamani (1994-1997).', ok: true, por: 'Claro: qué, de quién y de qué años.' },
        { id: 'a2', t: 'Asunto: Urgente – documentos del profesor.', ok: false, por: 'No dice qué documentos ni de quién.' },
      ] },
      { id: 'motivo', t: 'Motivo', ops: [
        { id: 'm1', t: 'Se requieren para emitir la constancia de servicios solicitada por el administrado con expediente 2026-018734.', ok: true, por: 'El número de expediente permite el seguimiento.' },
        { id: 'm2', t: 'Porque el profesor reclama hace meses y queremos que deje de venir.', ok: false, por: 'Un oficio no es lugar para quejas ni comentarios.' },
      ] },
      { id: 'firma', t: 'Firma', ops: [
        { id: 'f1', t: 'Firma: Jefatura de la Oficina de Recursos Humanos.', ok: true, por: 'Firma quien tiene la competencia.' },
        { id: 'f2', t: 'Firma: Practicante de la ORH.', ok: false, por: 'Tú redactas; firmar un oficio a otra entidad no te corresponde.' },
      ] },
    ],
    res: sel => {
      const malas = ['a2', 'm2', 'f2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas === 0 ? 'buena' : malas === 1 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['oficio_listo'], cartera: { oficio: q === 'riesgosa' ? 'Borrador por rehacer' : 'Oficio en firma de la jefatura' },
        out: q === 'buena' ? 'Gladys cambia una coma y lo sube a firma. «Mañana a primera hora sale. Buen oficio.»' : q === 'aceptable' ? 'Gladys corrige una parte con lapicero rojo y lo sube a firma.' : 'Gladys te lo devuelve lleno de rojo: «Aquí cada palabra queda archivada para siempre».',
        pro: { ok: 'Un oficio dice qué se pide, para qué y lo firma quien puede.', info: 'Cita siempre el número de expediente: es el hilo que une todos los papeles.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tu primer oficio!' : 'Cada palabra queda archivada.'],
      };
    },
    mirada: {
      ve: 'Escribir en el Estado es escribir para el archivo: alguien leerá ese oficio en diez años sin saber nada del profesor. Por eso va con número, motivo claro y la firma de quien tiene la competencia.',
      visual: { tipo: 'mensaje', titulo: 'El oficio', txt: 'Solicito copias autenticadas de las resoluciones directorales del Sr. Víctor Quispe Mamani (1994-1997), requeridas para atender el expediente 2026-018734. Jefatura de la ORH.' },
    },
  },
  {
    id: 'l6', t: '16:40', ch: 'whatsapp', who: null, titulo: 'La nieta pregunta', banner: 'assets/foto/llamada.webp', lugar: 'Tu celular, mientras guardas la caja 31', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Te escribe Yesenia, la nieta del profesor: «¿Ya salió su constancia? ¿Qué le falta? Él no entiende WhatsApp 🙏».</p><p>Sabes exactamente qué le falta. Y sabes que <mark class="clave">esos datos son del profesor</mark>, no de su nieta.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responderle con amabilidad que la información del legajo se la das al profesor en persona, o a quien él autorice por escrito, y que puede venir mañana miércoles a las 9.',
        res: { q: 'buena', fx: { etica: 4, personas: 2, confianza: 2 }, flags: ['nieta_reserva'],
          envia: [['yesenia', 'Buenas tardes, Yesenia. Ya revisamos el legajo de tu abuelito y hay avances. Esa información se la damos a él en persona, o a quien él autorice por escrito. ¿Puede venir mañana miércoles a las 9 a la ORH? Si quiere, puedes acompañarlo.']],
          out: 'Yesenia responde: «Ya, señorita, lo llevo yo en el carro de mi papá. Gracias por avisar».',
          pro: { ok: 'Cuidas los datos del profesor sin cerrarle la puerta a su familia.', info: 'Si el profesor quiere que su nieta haga el trámite, puede firmar una autorización simple.' },
          kusi: ['animo', 'Amable y con reserva. ¡Dale!'] } },
      { id: 'b', label: 'Contarle lo que falta: al final es su nieta, y el profesor no usa celular.',
        res: { q: 'aceptable', fx: { personas: 2, etica: -3 }, flags: ['nieta_datos'],
          envia: [['yesenia', 'Hola, Yesenia. Le faltan resoluciones de 1994 a 1997 y había un documento de otra persona en su legajo. Ya pedimos copias a la UGEL Anta.']],
          out: 'Yesenia agradece. Esa noche reenvía tu mensaje al grupo familiar: «Miren, en el gobierno regional le perdieron papeles al abuelito».',
          pro: { ok: 'Ayudas a la familia a entender.', risk: 'Los datos del legajo son del titular. Una vez enviados, ya no controlas dónde terminan.' },
          kusi: ['preocupado', 'Ese mensaje ya viaja solo…'] } },
      { id: 'c', label: 'No responder: no sabes quién es y no te corresponde.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: -2 },
          out: 'Yesenia ve el doble check azul. Le dice a su abuelo que «tampoco responden por WhatsApp».',
          pro: { ok: 'No das información a quien no es el titular.', risk: 'El silencio refuerza la idea de que en el Estado nadie responde.' },
          kusi: ['triste', 'Podías responder sin dar datos.'] } },
    ],
    rules: [[LEY, 'Ley 29733: los datos personales se comunican al titular o a quien él autorice.']],
    mirada: {
      ve: 'Reservar datos no es ser fría. Puedes darle a la familia lo que necesita, un día, una hora y el camino, sin entregar lo que pertenece al profesor. Y él merece enterarse primero.',
      visual: { tipo: 'cambio', titulo: 'Cuidar sin cerrar la puerta', pares: [['Silencio', 'Respuesta amable'], ['Datos del legajo por WhatsApp', 'Cita con el titular'], ['La nieta decide', 'El profesor autoriza']] },
    },
  },
];
