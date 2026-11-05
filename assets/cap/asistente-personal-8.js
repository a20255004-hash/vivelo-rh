// Analista de Administración de Personal · Capítulo 8 · «Las boletas» · Semana 2, miércoles.
// Hilo de las dos semanas: la inspectora pidió las constancias de boletas que faltan. Hoy lanzas la boleta digital, y la mitad del campo no tiene correo.
// Normas citadas:
// - D.S. 001-98-TR (planillas y boletas), art. 19: la boleta se entrega a más tardar el tercer día hábil siguiente al pago;
//   la firma o la recepción no implica renuncia a reclamar lo que el trabajador considere que le corresponde.
//   https://www.elperuano.pe/noticia/220856-mtpe-firma-o-recepcion-de-la-boleta-de-pago-no-implica-aceptacion-de-su-contenido
// - D.Leg. 1310, art. 3: el empleador puede sustituir su firma ológrafa por firma digital y entregar documentos laborales por medios electrónicos.
//   D.S. 009-2011-TR: boleta electrónica. https://lpderecho.pe/valido-boletas-pago-medios-electronicos-informe-04-2020-mtpe-2-14-1
//   https://www.contadoresyempresas.com.pe/el-uso-de-las-boletas-de-pago-electronicas/
// - Ley 29733 (protección de datos personales): el sueldo es un dato personal que se resguarda.

export const CAP = {
  n: 8, titulo: 'Las boletas', dia: 'Semana 2, miércoles', foto: 'assets/foto2/mesa-mujeres.webp',
  lugar: 'Agrícola Valle Verde · Comedor del fundo 1 y fundos',
  inicio: '05:50', fin: '19:15', cierreHora: '18:50',
  apertura: 'Miércoles. Faltan 260 constancias de boleta de la quincena y hoy lanzas la boleta digital. En el padrón, solo 412 de 900 personas tienen correo.', boton: 'Abrir el padrón',
  kusi: 'Digital no significa que todos ya están ahí. ¡A mirar quién se queda afuera!',
  lead: 'Elegiste canales para quien tiene correo y para quien no, revisaste la política de la boleta digital, cuidaste el sueldo de cada persona, entregaste boletas en el comedor, resolviste el documento de quienes no tienen DNI y dijiste la verdad sobre las constancias que faltaron.',
  reflexion: '¿Qué trabajador te hizo cambiar el plan de hoy?',
  siguiente: { n: 9, titulo: 'La PLAME', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'digital', p: 'Lanzamiento de la boleta digital', j: 'Mónica · Joel', d: 0, e: 'Piloto: quincena 1' },
  { id: 'constancias', p: 'Constancias de entrega', j: 'Planillas', d: 5, e: '260 pendientes' },
  { id: 'extranjeros', p: 'Portal y documentos de extranjería', j: 'Joel · TI', d: 0, e: 'Por revisar' },
  { id: 'carpeta', p: 'Requerimiento de SUNAFIL', j: 'Mónica · Legal', d: 1, e: 'Constancias de boletas' },
  { id: 'plame', p: 'PLAME del mes anterior', j: 'Mónica · Planillas', d: 0, e: 'Vence mañana' },
];

export const FUTURO = {
  boleta_opcional: ['La boleta digital es voluntaria: quien prefiere papel lo sigue recibiendo.', 'Lo verás en el balance del capítulo 10.'],
  boleta_obligada: ['Declaraste la boleta digital obligatoria para todo el campo.', 'Capítulo 10.'],
  boleta_caporalas: ['Las boletas de quienes no tienen celular llegan al teléfono de su caporala.', 'Capítulo 9: alguien se entera del sueldo de otra.'],
  politica_limpia: ['La política de boleta digital salió sin cláusulas abusivas.', 'Mónica la presentará a SUNAFIL.'],
  politica_abusiva: ['La política dice que abrir la boleta es aceptar su contenido.', 'Capítulo 10.'],
  extranjeros_atendidos: ['Josué y los demás con documentos de extranjería recibieron su boleta impresa, y Joel corrige el portal.', 'Capítulo 9, en la PLAME.'],
  constancias_reales: ['Las constancias tienen fecha real, aunque 31 lleguen un día tarde.', 'Mónica lo explica a SUNAFIL.'],
  constancias_falsas: ['Hay constancias firmadas por caporales o con fecha cambiada.', 'Capítulo 10.'],
  comunicado_claro: ['El aviso de la boleta digital llegó claro a las cuadrillas.', 'Capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  ricardo: { n: 'Ricardo Benavides', sub: 'Gerente de Operaciones', c: '#334155' },
  teresa: { n: 'Teresa Huamaní', sub: 'Caporala · cuadrilla 7', c: '#B5651D' },
  fidel: { n: 'Fidel Choque', sub: 'Delegado · cuadrilla 12', c: '#7A3E9D' },
  wendy: { n: 'Wendy Paredes', sub: 'Practicante de Planillas', c: '#5B6FB5' },
  angel: { n: 'Ángel Paucar', sub: 'Supervisor · cuadrilla 12', c: '#92400E' },
  cuadrillas: { n: 'Avisos a cuadrillas', sub: 'Caporales y delegados', c: '#0F766E' },
};

export const WSP = [
  { chat: 'grupo', t: '06:00', de: 'Mónica', txt: 'Hoy es el tercer día hábil desde el pago del viernes. Las constancias que falten hoy, faltan.', no: 'banco_tarde' },
  { chat: 'grupo', t: '06:00', de: 'Mónica', txt: 'Como el abono fue el lunes, el plazo vence mañana. Pero SUNAFIL ya preguntó: cerremos hoy lo que se pueda.', si: 'banco_tarde' },
  { chat: 'wendy', t: '06:20', de: 'Wendy', txt: 'Armé la lista de quién firma con huella y quién no lee. Son 41. Te la dejo en la carpeta azul 📋', si: 'wendy_protegida' },
  { chat: 'wendy', t: '06:20', de: 'Wendy', txt: '¿Me confirmas qué lista quieres? No quiero cargar nada sin tu visto bueno.', si: 'wendy_senalada' },
  { chat: 'ricardo', t: '07:05', de: 'Ricardo', txt: 'Ya les dije a los jefes de fundo: refrigerio largo hoy para las boletas.', si: 'gerencia_informada' },
  { chat: 'fidel', t: '07:30', de: 'Fidel', txt: 'Hoy se va el ingeniero Ángel. Me dejó su cuaderno y me dijo: «no arregles nada que no sepas probar». 🙏', si: 'exonerado_plan' },
  { chat: 'angel', t: '15:05', de: 'Ángel', txt: 'Dejé el celular y el acta en su escritorio. Mañana voy a la Caja. Cuídeme a la 12.', si: 'pago_sin_retener' },
  { chat: 'angel', t: '15:05', de: 'Ángel', txt: 'Señorita, ¿de verdad no me van a pagar hasta que entregue el celular? Ya pregunté en SUNAFIL.', si: 'pago_retenido' },
  { chat: 'yolanda', t: '13:30', de: 'Yolanda', txt: 'Las de la 5 ya abrieron su boleta en el comedor. A las señoras mayores yo les leo, si ellas quieren.', si: 'yolanda_confia' },
  { chat: 'yolanda', t: '13:30', de: 'Yolanda', txt: 'Yo prefiero mi boleta en papel, señorita. Por si acaso.', si: 'yolanda_dolida' },
  { chat: 'joel', t: '17:15', de: 'Joel', txt: 'Portal corregido: ya acepta carné de extranjería y CPP. Hoy duermo 🫠', si: 'extranjeros_atendidos' },
];

export const CORREOS = [
  { t: '06:30', de: 'BoletaYa · Proveedor de plataforma', para: 'Planillas Valle Verde', asunto: 'Su piloto de boleta digital', html: '<p>Su plataforma está lista. Recuerde: la app pesa 90 MB y requiere correo electrónico para registrarse. Tenemos versión web con enlace por SMS o WhatsApp, con clave enviada al trabajador.</p>' },
  { t: '08:50', de: 'Carmen Salas · Inspectora auxiliar, SUNAFIL Ica', para: 'Agrícola Valle Verde S.A.C.', asunto: 'Acta de la diligencia', html: '<p>Se adjunta el acta de la diligencia de ayer. Se deja constancia de la <b>dificultad inicial para el ingreso</b> a las instalaciones.</p>', si: 'inspeccion_demorada' },
  { t: '09:10', de: 'Carmen Salas · Inspectora auxiliar, SUNAFIL Ica', para: 'Agrícola Valle Verde S.A.C.', asunto: 'Requerimiento de comparecencia', html: '<p>Por las diferencias entre las fechas de T-Registro y lo declarado por los trabajadores entrevistados, se requiere la comparecencia del empleador con el sustento de las fechas de ingreso.</p>', si: 'oculto_altas' },
  { t: '09:12', de: 'Carmen Salas · Inspectora auxiliar, SUNAFIL Ica', para: 'Agrícola Valle Verde S.A.C.', asunto: 'Registro de asistencia del fundo 3', html: '<p>Se requiere el archivo original del reloj de marcación. El documento entregado ayer no coincide con las entrevistas de campo.</p>', si: 'registro_corregido' },
];

export const QUIZ = [
  { q: '¿Hasta cuándo debe entregarse la boleta de pago?', ops: ['El mismo día del pago', 'A más tardar el tercer día hábil siguiente al pago', 'Al final del mes', 'Cuando la pida el trabajador'], ok: 1, por: 'El art. 19 del D.S. 001-98-TR fija el tercer día hábil siguiente al pago.' },
  { q: 'Si una persona firma su boleta o confirma que la recibió por medio electrónico, ¿pierde su derecho a reclamar?', ops: ['Sí, ya aceptó', 'No: la firma o recepción no implica renuncia a lo que considere que le corresponde', 'Solo si pasan 30 días', 'Solo en el régimen agrario'], ok: 1, por: 'Así lo señala la norma de boletas, recordada por el MTPE: recibir no es aceptar.' },
  { q: '¿Qué permite el D.Leg. 1310 al empleador en documentos laborales?', ops: ['Eliminar las boletas', 'Sustituir su firma ológrafa por firma digital y usar medios electrónicos', 'No pagar por banco', 'Que firme cualquier jefe'], ok: 1, por: 'El D.Leg. 1310 permite la firma digital del empleador y la entrega por medios electrónicos.' },
  { q: 'Una trabajadora sin celular propio ni correo necesita su boleta. ¿Qué haces?', ops: ['La envías al celular de su caporala', 'Le das la boleta en papel o una forma de acceso que ella controle', 'Le dices que se compre un celular', 'No se la entregas'], ok: 1, por: 'La boleta tiene que llegar a la persona, y su sueldo es un dato suyo: no lo manejan terceros sin su decisión.' },
  { q: 'Faltan 31 constancias de boleta al terminar el plazo. ¿Qué es lo correcto?', ops: ['Que el caporal firme por ellas', 'Poner fecha de ayer al firmarlas', 'Entregarlas con la fecha real y explicar la demora', 'Decir que están todas'], ok: 2, por: 'Una entrega tardía se explica. Una firma ajena o una fecha cambiada es un documento falso.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '06:10', ch: 'sistema', who: 'joel', titulo: 'Quién tiene qué', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Caseta de TI', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Joel te muestra el padrón en la pantalla, con su café de máquina al lado. De 900 personas: <mark class="clave">412 con correo, 361 solo con WhatsApp y 127 sin celular propio</mark>.</p><p>«El proveedor nos vendió la app con correo. ¿Tú qué lanzas hoy?» Tienes presupuesto y manos para tres canales.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres canales para la primera boleta digital.', boton: 'Lanzar estos canales', resumen: 'Lanzaste',
    cols: ['Canal', 'A quién llega'],
    rows: [
      { id: 'web', cells: ['Enlace web por WhatsApp o SMS, con clave personal', 'Los 361 de WhatsApp y los 412 de correo'] },
      { id: 'kiosko', cells: ['Módulo con tablet en el comedor, con Wendy ayudando', 'Quien no tiene datos o se enreda'] },
      { id: 'papel', cells: ['Boleta impresa para quien la pida', 'Los 127 sin celular y quien prefiera papel'] },
      { id: 'app', cells: ['App de 90 MB con registro por correo', 'Solo quien tiene correo y buena señal'] },
      { id: 'correo', cells: ['Correo masivo con PDF', 'Los 412, y deja el sueldo en un PDF sin clave'] },
      { id: 'mural', cells: ['Lista de sueldos en el mural del comedor', 'Todos… y todos ven lo de todos'] },
    ],
    score: { web: 3, kiosko: 3, papel: 3, app: -1, correo: 0, mural: -5 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: picks.includes('papel') ? 5 : -3, calidad: picks.includes('web') ? 3 : 0, etica: picks.includes('mural') ? -6 : 1 },
        cartera: { digital: picks.includes('web') ? 'Enlace con clave + apoyo en el comedor' : 'Canales por revisar' },
        out: picks.includes('mural') ? 'Mónica ve el borrador y lo tacha con plumón rojo: «El sueldo de cada persona es suyo. ¿Quieres que Yolanda vea el de Teresa?».' : picks.includes('papel') ? 'Nadie se queda sin boleta. Joel suspira: «Menos glamoroso que la app». Pero alcanza a las 900.' : 'Lanzas algo moderno, pero 127 personas no tienen cómo abrirlo.',
        pro: { ok: 'Eliges canales por quién puede usarlos, no por lo que vende el proveedor.', risk: 'Una herramienta que deja afuera al 14 % no resuelve la entrega: solo la mueve de lugar.', info: 'Mide cuántos abren su boleta y por qué canal.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ni uno afuera!' : '¿Quién se queda sin boleta con este plan?'],
      };
    },
    rules: [[LEY, 'D.S. 001-98-TR: la boleta se entrega a más tardar el tercer día hábil siguiente al pago.'], [LEY, 'Ley 29733: el sueldo es un dato personal y se resguarda.']],
    mirada: {
      ve: 'Los proyectos digitales fallan cuando se diseñan para quien tiene correo y buena señal. Una boleta digital en el campo se piensa desde quien no tiene celular, desde la abuela que firma con huella y desde quien solo tiene datos el día de pago.',
      visual: { tipo: 'embudo', titulo: 'Las 900 personas del padrón', niveles: [['Personas', 900], ['Con WhatsApp o correo', 773], ['Con correo', 412], ['Sin celular propio', 127]] },
    },
  },
  {
    id: 'i2', t: '07:50', ch: 'documento', who: null, titulo: 'La política del proveedor', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Planillas', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>El proveedor mandó su «Política de boleta digital», lista para firmar. Ricardo ya la miró: «Está bien, ¿no? Se firma y listo».</p><p>Es un PDF de tres páginas. La lees con el resaltador, antes de que <mark class="clave">900 personas queden sujetas a ella</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debe quedar en la política.',
    doc: { t: 'Política de boleta digital · borrador del proveedor', sub: 'BoletaYa · para Agrícola Valle Verde S.A.C.' },
    lines: [
      { id: 'firma', t: 'La boleta llevará la firma digital del empleador, conforme a la normativa vigente.' },
      { id: 'acepta', t: 'Abrir la boleta implica la aceptación plena de su contenido y la renuncia a cualquier reclamo posterior.', bad: LEY, why: 'La recepción no implica renuncia a lo que el trabajador considere que le corresponde (art. 19, D.S. 001-98-TR).' },
      { id: 'obliga', t: 'Desde hoy no se imprimirán boletas, aunque el trabajador lo solicite.', bad: LEY, why: 'La entrega electrónica requiere que la persona pueda acceder a ella y su conformidad. Quien no tiene cómo debe recibirla de otra forma.' },
      { id: 'clave', t: 'La clave de acceso de todos los trabajadores será su número de DNI.', bad: BP, why: 'Cualquiera que conozca su DNI, como un compañero o un caporal, podría ver su sueldo. El sueldo es un dato personal (Ley 29733).' },
      { id: 'plazo', t: 'La boleta estará disponible a más tardar el tercer día hábil siguiente al pago.' },
      { id: 'cons', t: 'El trabajador autoriza por escrito el uso de medios electrónicos y puede volver al papel cuando quiera.' },
      { id: 'reg', t: 'La plataforma guarda fecha y hora en que cada trabajador abre su boleta.', duda: 'Es útil como constancia. Avísales a las personas que ese registro existe.' },
      { id: 'desc', t: 'El costo de la plataforma se prorrateará en la boleta de cada trabajador.', bad: LEY, why: 'Es un costo de la empresa. Un descuento así no tiene base legal ni autorización: lo mismo de las tijeras.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'La política se firma como vino. Dentro de cada boleta digital, una cláusula le dice a la gente que abrirla es renunciar a reclamar.' : `Le devuelves al proveedor ${hitsLey} cláusulas tachadas. Responde a la hora: «Las usamos en todos nuestros clientes». Mónica contesta: «Nosotros no».`,
      flags: [missLey ? 'politica_abusiva' : 'politica_limpia'],
      cartera: { digital: missLey ? 'Política firmada como vino' : 'Política corregida por Planillas y Legal' },
      pro: { ok: 'Lees el contrato del proveedor con los ojos de quien recibirá la boleta.', risk: 'Una cláusula de renuncia no vale, pero asusta a la gente y se vuelve un problema en una inspección.', info: 'Pídele a Legal que revise cualquier texto que vaya a firmar o aceptar un trabajador.' },
      kusi: missLey ? ['indignado', '¿Abrir la boleta es renunciar? ¡Nada que ver!'] : ['celebra', '¡Cláusulas tachadas! ¡Qué bacán!'],
    }),
    rules: [[LEY, 'D.S. 001-98-TR: la firma o recepción de la boleta no implica renuncia a lo que el trabajador considere que le corresponde.'], [LEY, 'D.Leg. 1310: el empleador puede usar firma digital y medios electrónicos en documentos laborales.']],
    mirada: {
      ve: 'Las plataformas traen políticas escritas para proteger a quien las vende. Quien implementa no solo aprieta botones: revisa qué le va a decir a cada trabajador cuando abra su boleta en la pantalla del celular.',
      visual: { tipo: 'cambio', titulo: 'De la política del proveedor a la de Valle Verde', pares: [['Abrir es aceptar y renunciar', 'Recibir no es renunciar'], ['No hay más papel', 'Papel para quien lo pida'], ['Clave: el DNI', 'Clave personal'], ['Costo prorrateado', 'Lo paga la empresa']] },
      normas: [
        { ley: 'D.S. 001-98-TR, art. 19', dice: 'La boleta se entrega a más tardar el tercer día hábil siguiente al pago, y la firma o recepción no implica renuncia.', practica: 'Ningún «he leído y acepto» cambia esto.' },
        { ley: 'D.Leg. 1310 y D.S. 009-2011-TR', dice: 'Permiten firma digital del empleador y entrega por medios electrónicos.', practica: 'La norma abre una puerta; la empresa tiene que asegurarse de que cada persona pueda pasar por ella.' },
      ],
    },
  },
  {
    id: 'i3', t: '09:30', ch: 'presencial', who: 'yolanda', titulo: 'El celular de la hija', banner: 'assets/esc/dudas.webp', lugar: 'Bajo la malla del fundo 2', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Yolanda te para en el camino, con su sombrero de ala ancha y la tijera colgando del cinturón${F.has('reintegro_todos') ? ', la misma que ya no le descontaron' : ''}. Viene con ella doña Celestina, que firma con huella.</p><p>«Yo no tengo correo, señorita. Si la boleta va al celular de mi hija, ella ve lo que gano. Y a doña Celestina, ¿quién se la lee?» Atrás, Teresa propone: <mark class="clave">«Mándenmelas a mí, yo se las muestro a mis chicas»</mark>. Raúl asiente: ahorra una semana de trabajo.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Hacer la boleta digital voluntaria: cada quien elige enlace propio, módulo del comedor o papel, y puede ir acompañada por quien ella decida.',
        res: { q: 'buena', fx: { personas: 6, etica: 4, tiempo: -3 }, rel: { yolanda: 1 }, flags: ['boleta_opcional'], cartera: { digital: 'Voluntaria · enlace, módulo o papel' },
          out: 'Yolanda elige papel esta vez, «a ver qué tal». Doña Celestina va al módulo con su nieta. Teresa se queda un poco ofendida: «Yo no iba a mirar». Le agradeces la oferta y le explicas por qué no.',
          pro: { ok: 'Respetas el acceso y la privacidad de cada persona. Y el sueldo sigue siendo suyo.', risk: 'Mantener varios canales cuesta tiempo y plata: Ricardo te lo va a recordar.', info: 'Mide cómo cambia: muchas pasan a lo digital solas cuando ven que funciona.' },
          kusi: ['feliz', 'Cada una decide cómo y con quién. ¡Qué divino!'] } },
      { id: 'b', label: 'Aceptar la propuesta de Teresa para quienes no tienen celular: las caporalas son de confianza, conocen a su gente y así todas tienen su boleta hoy.',
        res: { q: 'riesgosa', fx: { tiempo: 3, personas: -3, etica: -4 }, rel: { raul: 1 }, flags: ['boleta_caporalas'], cartera: { digital: 'Boletas de 127 personas en celulares de caporales' },
          out: 'Las boletas salen rápido. 127 personas ya no controlan su sueldo: lo controla quien les asigna el surco y le pasa la lista al jefe de fundo.',
          pro: { ok: 'Rápido y práctico, y Teresa de verdad quiere ayudar.', risk: 'La caporala asigna trabajo y puede opinar sobre recontrataciones. Conocer el sueldo, los descuentos y la asignación familiar de cada una le da un poder que nadie le pidió.' },
          kusi: ['preocupado', 'Teresa es de confianza… ¿y todas las caporalas?'] } },
      { id: 'c', label: 'Hacer la boleta digital obligatoria para todas y dar una semana de apoyo: el campo también tiene que modernizarse, y así el proceso queda parejo y sin papeles.',
        res: { q: 'aceptable', fx: { calidad: 2, personas: -3, cumplimiento: -2 }, flags: ['boleta_obligada'], cartera: { digital: 'Obligatoria con una semana de apoyo' },
          out: 'Ricardo felicita el «cero papel». En el comedor, doña Celestina escucha el anuncio y le pregunta a su nieta si ya no le van a dar nada.',
          pro: { ok: 'Un solo canal es más simple de operar y medir.', risk: 'Quien no puede usarlo sigue sin boleta, y la obligación legal de entregarla sigue siendo de la empresa.' },
          kusi: ['pensando', 'Parejo para la empresa… ¿y para doña Celestina?'] } },
    ],
    rules: [[LEY, 'Ley 29733: los datos personales, como el sueldo, solo los conoce quien está autorizado.'], [BP, 'Los canales de entrega se eligen por quién puede usarlos, no por lo que es más cómodo para la empresa.']],
    mirada: {
      ve: 'Teresa no quiere controlar a nadie: quiere ayudar. Pero el sueldo de una persona, en el celular de quien decide si la llaman el próximo año, cambia la relación entre ambas. La privacidad también protege a quien tiene menos poder.',
      visual: { tipo: 'balanza', a: { t: 'Boletas en el celular de la caporala', items: ['Todas la tienen hoy', 'Cero costo'] }, b: { t: 'Cada quien elige', items: ['El sueldo sigue siendo suyo', 'Papel o módulo para quien lo necesite', 'Más trabajo para Planillas'] } },
    },
  },
  {
    id: 'i4', t: '11:15', ch: 'presencial', who: 'monica', titulo: 'El refrigerio de las boletas', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Comedor del fundo 1', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: () => `<p>Faltan 260 constancias. El comedor se llena a las 11:30 y las cuadrillas vuelven al surco a las 12:15: <mark class="clave">45 minutos</mark>, olor a arroz con pollo y un calor que ya aplasta.</p><p>Mónica te da tres mesas y a Wendy: «Si lo haces en desorden, firmas la boleta equivocada. Dime el orden».</p>`,
    type: 'secuencia', prompt: 'Ordena la entrega de boletas en el comedor.', boton: 'Abrir las mesas',
    items: [
      { id: 'lote', t: 'Separar las boletas por cuadrilla y por orden alfabético, antes de que lleguen', por: 'Buscar una boleta en una caja son dos minutos por persona.' },
      { id: 'mesas', t: 'Poner un cartel por cuadrilla en cada mesa, y una mesa para quien firma con huella', por: 'Con tampón para huella y alguien que pueda leer si lo piden.' },
      { id: 'dni', t: 'Pedir el DNI o carné y verificar el nombre', por: 'Boleta equivocada: sueldo ajeno a la vista.' },
      { id: 'entrega', t: 'Entregar la boleta en la mano y dar un momento para mirarla', por: 'La persona firma algo que vio.' },
      { id: 'firma', t: 'Firmar o poner huella en la constancia, con la fecha real', por: 'Sin apuro, sin firmas por otro.' },
      { id: 'escanear', t: 'Escanear las constancias del día y agregarlas a la carpeta de SUNAFIL', por: 'Con su folio en el índice.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'riesgosa' ? -4 : 3, calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'riesgosa' ? -2 : 3 },
        cartera: { constancias: q === 'riesgosa' ? '160 de 260 · hubo equivocaciones' : '229 de 260 · faltan 31' },
        out: q === 'buena' ? 'A las 12:15 quedan 31 personas sin firmar: faltaron o están en otro fundo. Wendy mueve los dedos de cansancio y sonríe. Comes tu arroz frío de pie.' : q === 'aceptable' ? 'Se forman dos filas equivocadas, pero lo resuelves. Quedan 40 por firmar.' : 'Una señora recibe la boleta de otra con el mismo apellido. La devuelve molesta. Se pierden diez minutos y bastante confianza.',
        pro: { ok: 'El tiempo real de entrega se gana antes de que llegue la primera persona.', risk: 'Apurar a la gente a firmar sin mirar es la mejor forma de que después reclame.', info: 'Lleva agua y una sombra para quien hace fila.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡229 en 45 minutos! ¡Qué bacán!' : 'El orden importa más que la prisa.'],
      };
    },
    rules: [[LEY, 'D.S. 001-98-TR: el empleador acredita la entrega de la boleta.'], [BP, 'Una constancia se firma con la fecha real, por la propia persona.']],
    mirada: {
      ve: 'Entregar 260 boletas en 45 minutos no es una tarea administrativa: es logística, como la mesa de registro del primer día. La diferencia entre el orden y el caos se decide antes de que abra el comedor.',
      visual: { tipo: 'flujo', titulo: '45 minutos en el comedor', pasos: ['Lotes por cuadrilla', 'Mesas y carteles', 'Verificar DNI', 'Entregar en la mano', 'Firma o huella', 'Escanear'] },
    },
  },
  {
    id: 'i5', t: '14:30', ch: 'llamada', who: null, titulo: 'El portal no conoce a Josué', banner: 'assets/foto/llamada.webp', lugar: 'Caseta de TI', show: ['personas', 'calidad', 'etica'],
    body: () => `<p>El piloto digital va bien hasta que la lista de errores muestra un patrón: <mark class="clave">38 personas no pueden entrar</mark>. Todas con carné de extranjería o CPP. El portal solo acepta documentos de 8 dígitos.</p><p>Llamas a cuatro para ver qué está pasando. El ventilador de la caseta da vueltas sin ganas.</p>`,
    type: 'calls',
    calls: [['Josué Mendoza · cuadrilla 7', 'Contesta en el surco', 'Me dice «documento inválido», señorita. Lo mismo que en el banco. A veces uno siente que no existe aquí.'], ['Yusbely Rangel · cuadrilla 3', 'Contesta con su bebé llorando', 'Yo pensé que me habían botado, por eso no decía nada. Allá en Maracaibo era contadora, sé leer una boleta.'], ['Soporte de BoletaYa', 'Contesta con música de espera', 'La validación de documentos extranjeros está en nuestra versión de marzo. Podemos cotizarla.'], ['Joel Ramírez', 'Contesta desde el otro escritorio, sin levantar la vista', 'Puedo cambiar la validación yo hoy, si el proveedor me da el permiso. Pero no prometo nada.']],
    prompt: '38 personas no pueden abrir su boleta y el proveedor ofrece arreglarlo en marzo. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Imprimir hoy las 38 boletas y entregarlas en mano con una disculpa, pedirle a Joel que corrija la validación esta noche y exigirle al proveedor que el cambio entre sin costo.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, tiempo: -2, cumplimiento: 3 }, rel: { joel: 1 }, flags: ['extranjeros_atendidos'], cartera: { extranjeros: 'Boletas impresas · portal corregido hoy' },
          out: 'Josué dobla su boleta y la guarda con el carné. Yusbely mira el cálculo de su boleta dos veces y te señala un detalle en la AFP. Tiene razón. Lo anotas: no solo es cosechadora, también sabe de esto.',
          pro: { ok: 'Atiendes hoy a las personas y arreglas la causa. No esperas a marzo.', risk: 'Joel se queda otra noche hasta tarde: reconócelo.', info: 'Prueba los sistemas nuevos con cada tipo de documento antes de lanzarlos.' },
          kusi: ['celebra', '¡Treinta y ocho personas existen otra vez!'] } },
      { id: 'b', label: 'Dejar a los 38 para la siguiente quincena, cuando el portal esté corregido: son pocos, y el piloto del resto ya está funcionando.',
        res: { q: 'riesgosa', fx: { personas: -5, cumplimiento: -3, etica: -2 }, cartera: { extranjeros: 'Pendientes para la próxima quincena' },
          out: 'El reporte de Ricardo dice «96 % de apertura». Las 38 personas que no pueden abrir su boleta son, otra vez, las mismas que no pudieron abrir su cuenta a la primera.',
          pro: { ok: 'El piloto avanza.', risk: 'La boleta tiene plazo para todas las personas, no solo para quienes caben en la validación del portal.' },
          kusi: ['triste', 'Noventa y seis por ciento… ¿y los demás?'] } },
    ],
    rules: [[LEY, 'D.S. 001-98-TR: el plazo de entrega de la boleta es igual para todos los trabajadores.'], [BP, 'Prueba cualquier sistema con todos los tipos de documento antes de lanzarlo.']],
    mirada: {
      ve: 'Los sistemas heredan los supuestos de quien los programó: que todos tienen DNI, correo y señal. Las personas migrantes son las primeras en caer en esos huecos, y casi nunca reclaman por miedo. Revisar a quién deja afuera la herramienta es trabajo de Planillas.',
      visual: { tipo: 'cambio', titulo: 'Un error del portal', pares: [['«Documento inválido»', 'Carné de extranjería y CPP aceptados'], ['Esperar a marzo', 'Boleta impresa hoy'], ['Silencio de 38 personas', 'Llamadas y disculpa']] },
    },
  },
  {
    id: 'i6', t: '16:30', ch: 'whatsapp', who: null, titulo: 'El aviso para el bus', banner: 'assets/foto2/caminan.webp', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>El aviso de la boleta digital sale hoy por el grupo de caporales y delegados, y lo leerán en voz alta en los buses de las 15:30 de mañana. Muchos no leen bien; algunas prefieren en quechua; varios creerán que les van a quitar algo.</p><p><mark class="clave">Cuatro líneas, sin siglas</mark>.</p>`,
    type: 'compose', enviaA: 'cuadrillas', para: 'Para: Avisos a cuadrillas · Caporales y delegados', boton: 'Enviar el aviso',
    prompt: 'Arma el aviso eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué cambia', ops: [
        { id: 'q1', t: 'Desde esta quincena pueden ver su boleta en el celular, si ustedes quieren.', ok: true, por: 'Dice qué cambia y que es una opción.' },
        { id: 'q2', t: 'Se implementa la boleta electrónica conforme al Decreto Legislativo 1310.', ok: false, por: 'Correcto y nadie lo entiende.' },
      ] },
      { id: 'como', t: 'Cómo', ops: [
        { id: 'c1', t: 'Les llega un enlace por WhatsApp con una clave solo para cada una. Si no tienen celular, en el comedor las ayudamos o les damos su boleta en papel.', ok: true, por: 'Cubre a todas, sin hacer sentir mal a nadie.' },
        { id: 'c2', t: 'Descarguen la aplicación y regístrense con su correo.', ok: false, por: 'La mitad no tiene correo.' },
      ] },
      { id: 'miedo', t: 'Lo que más asusta', ops: [
        { id: 'm1', t: 'Abrir la boleta no es aceptarla. Si algo no está bien, igual pueden reclamar.', ok: true, por: 'Responde al miedo real, y es lo que dice la norma.' },
        { id: 'm2', t: 'Una vez abierta, ya no hay reclamos.', ok: false, por: 'Falso y contrario a la norma.' },
      ] },
      { id: 'quien', t: 'A quién preguntar', ops: [
        { id: 'k1', t: 'Dudas: ventanilla de Planillas o el módulo del comedor, de 11:30 a 12:15.', ok: true, por: 'Lugar y hora reales.' },
        { id: 'k2', t: 'Cualquier consulta, acérquese al área.', ok: false, por: '¿Qué área? ¿Cuándo? Trabajan en el surco hasta las 15:00.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'c1', 'm1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 3 : 0, confianza: sel.miedo === 'm2' ? -5 : 2 },
        flags: q === 'buena' ? ['comunicado_claro'] : [],
        cartera: { digital: q === 'buena' ? 'Aviso claro en los buses' : 'Aviso con dudas' },
        out: q === 'buena' ? 'Teresa graba un audio en quechua con tu texto y lo manda a su cuadrilla. Fidel lo lee en el bus: se oye un «ah, ya» general.' : sel.miedo === 'm2' ? 'Al día siguiente, una caporala te escribe: «¿De verdad no se puede reclamar?». Lo escribiste tú. Toca corregirlo.' : 'El aviso sale. Mañana el módulo del comedor recibe el doble de preguntas.',
        pro: { ok: 'Un aviso para el bus se escribe para ser escuchado: una idea por frase, sin siglas.', risk: 'Decir que abrir es aceptar sería falso y le daría razones a la gente para no abrirla.', info: 'Ofrece el mismo aviso en audio y en quechua.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Se entendió hasta en el último asiento!' : '¿Cómo suena en un bus con ruido?'],
      };
    },
    rules: [[LEY, 'D.S. 001-98-TR: recibir o firmar la boleta no implica renuncia a reclamar.'], [BP, 'Comunica cambios en el idioma y por el canal de quien los recibe.']],
    mirada: {
      ve: 'Un cambio de herramienta se vive como una amenaza hasta que alguien lo explica. Y en el campo, lo que se explica en el bus vale más que cualquier política firmada.',
      visual: { tipo: 'mensaje', titulo: 'Cuatro líneas para el bus', txt: 'Desde esta quincena pueden ver su boleta en el celular, si quieren. Les llega un enlace con una clave solo para cada una. Sin celular, las ayudamos en el comedor o les damos papel. Abrir la boleta no es aceptarla: igual pueden reclamar. Dudas: comedor, 11:30 a 12:15.' },
    },
  },
  {
    id: 'i7', t: '18:10', ch: 'correo', who: null, titulo: 'Las 31 que faltan', banner: 'assets/esc/pendulo.webp', show: ['etica', 'cumplimiento', 'confianza'],
    mail: { from: 'Ricardo Benavides · Gerente de Operaciones', to: 'Planillas', asunto: 'Constancias de boletas' },
    body: () => `<p>Me dicen que faltan 31 constancias. No podemos presentarle eso a SUNAFIL. <mark class="clave">Que los caporales firmen por su gente</mark> y que pongan la fecha de hoy, o de ayer, como sea. Mañana me confirman que está al 100 %.</p><p>R. Benavides</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder que las 31 se entregan mañana en mano, con la fecha real, y que a SUNAFIL se le presentan 869 constancias más una nota con los motivos de las 31.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: -1 }, rel: { monica: 1 }, flags: ['constancias_reales'], cartera: { constancias: '869 con fecha real · 31 mañana con nota', carpeta: 'Nota de motivos adjunta' },
          responde: 'Ricardo: las 31 constancias se completan mañana, en mano y con la fecha real. Son personas con descanso médico o en otro fundo. A SUNAFIL le presentamos 869 y una nota con los motivos. Un día de demora se explica; una firma ajena no. Mónica está de acuerdo.',
          out: 'Ricardo responde a las 21:15, con una línea: «Ok. Que no se repita». Te duermes en el bus de regreso con el celular en la mano.',
          pro: { ok: 'Un día de demora, explicado, es un problema pequeño. Una firma falsa frente a una inspección abierta no lo es.', risk: 'Presentas un número que no es perfecto. Puede haber una observación.', info: 'Anota por qué falta cada persona: descanso médico, otro fundo, ya no trabaja.' },
          kusi: ['animo', '869 de verdad valen más que 900 de mentira.'] } },
      { id: 'b', label: 'Hacer lo que pide: son solo 31, las personas igual recibirán su boleta, y es mejor no darle a SUNAFIL otro motivo.',
        res: { q: 'riesgosa', fx: { etica: -8, cumplimiento: -6, confianza: 2 }, flags: ['constancias_falsas'], cartera: { constancias: '900 de 900 · 31 con firma de caporales', carpeta: 'Constancias con firma ajena' },
          responde: 'Ricardo: listo, hablo con los caporales. Mañana queda al 100 %.',
          out: 'Teresa firma tres mirándote fija. «¿Segura, señorita?» Fidel se niega a firmar por nadie: «El ingeniero Ángel me dijo que no arregle lo que no pueda probar».',
          pro: { ok: 'El número se ve perfecto.', risk: 'La inspectora ya entrevistó gente y tiene el padrón. Una firma ajena en una constancia es un documento falso, y arrastra a Teresa y a ti.' },
          kusi: ['triste', 'Esa firma no es de ellas…'] } },
    ],
    rules: [[LEY, 'La constancia de entrega la firma el propio trabajador, con la fecha real.'], [BP, 'Una demora explicada se corrige; un documento falso se paga caro.']],
    mirada: {
      ve: 'El pedido llega a las seis de la tarde, con cansancio y con miedo a una inspección. Es el mismo dilema de la primera semana, con la fecha de ingreso: el 100 % que se ve bien o el 97 % que es verdad. Lo que decidas hoy es lo que eres cuando nadie mira.',
      visual: { tipo: 'embudo', titulo: 'Las constancias de la quincena', niveles: [['Boletas', 900], ['Firmadas antes de hoy', 640], ['Firmadas en el comedor', 229], ['Faltan, con motivo', 31]] },
    },
  },
];
