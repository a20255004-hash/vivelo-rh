// Asistente de Bienestar Social · Capítulo 9 · «El lactario abre» · Semana 2, jueves.
// Hilo: el lactario abre de día y de noche; el primer turno noche pone a prueba lo acordado. Seguimiento de
// Don Héctor en su nuevo puesto y de Milagros tras el descargo del supervisor.
// Normas citadas:
// - Ley 29896 y D.S. 023-2021-MIMP, su reglamento: arts. 13, 14, 21 y 22 (ver capítulo 4); el empleador lleva un
//   registro de usuarias del lactario (art. 20, según directiva modelo del MIMP) e informa al MIMP la
//   implementación del lactario; el MIMP puede comunicar incumplimientos al Sistema de Inspección del Trabajo.
//   https://busquedas.elperuano.pe/dispositivo/NL/1976374-4
//   https://cdn.www.gob.pe/uploads/document/file/4006349/Directiva_002-2022-MIMP-DGFC.pdf
//   https://www.garrigues.com/es_ES/noticia/peru-dictan-medidas-implementacion-lactarios-instituciones-sector-publico-sector-privado
// - Ley 27942 y D.S. 014-2019-MIMP: reserva y no revictimización (ver capítulos 6 y 7).
// - Ley 29733: datos personales mínimos en registros.

export const CAP = {
  n: 9, titulo: 'El lactario abre', dia: 'Semana 2, jueves', foto: 'assets/foto2/celebra-brazos.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '06:45', fin: '21:15', cierreHora: '21:00',
  apertura: 'Jueves. A las 7 se abre el lactario del segundo piso del laboratorio. Sin globos. Y esta noche, por primera vez, lo usará el turno noche.', boton: 'Abrir la puerta del lactario',
  kusi: 'Lo difícil no es inaugurar, es que funcione el primer día. ¡Y la primera noche!',
  lead: 'Abriste el lactario con reglas claras, cuidaste el primer día de Don Héctor en su nuevo puesto, acompañaste a Milagros en su peor momento sin presionarla y te quedaste hasta que el turno noche pudo usar lo que se logró.',
  reflexion: '¿Valió la pena quedarte hasta la noche? ¿Por qué?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'lactario', p: 'Lactario de la planta', j: 'Bienestar · Logística', d: 0, e: 'Abre hoy' },
  { id: 'noche', p: 'Uso del lactario en el turno noche', j: 'Envasado · Bienestar', d: 0, e: 'Primera noche' },
  { id: 'hector', p: 'Primer día de Don Héctor', j: 'Fábrica · Bienestar', d: 0, e: 'Instructor y balanza' },
  { id: 'queja', p: 'Caso de Milagros', j: 'Comité de intervención', d: 0, e: 'Descargo del supervisor' },
  { id: 'mimp', p: 'Informe al MIMP', j: 'Bienestar', d: 0, e: 'Por enviar' },
];

export const FUTURO = {
  lactario_reglas: ['El lactario tiene reglas de uso claras para los tres turnos y un registro sin datos de más.', 'El lunes verás cuántas lo usaron.'],
  lactario_informado: ['El informe al MIMP describe el lactario real, sin datos personales.', 'Queda archivado para cualquier inspección.'],
  aula_movida: ['Las clases de Don Héctor pasaron al primer piso: ya no sube escaleras.', 'Su rodilla lo agradecerá en la reevaluación.'],
  milagros_decide: ['Milagros decidirá con calma y con orientación del CEM si sigue con su queja.', 'Te dirá su decisión la próxima semana.'],
  milagros_presionada: ['Presionaste a Milagros para que no se desista.', 'Seguirá, pero sintiendo que no decide ella.'],
  milagros_desiste: ['Tramitaste el desistimiento de Milagros el mismo día del descargo.', 'El comité te preguntará por qué tan rápido.'],
  noche_cubierta: ['El turno noche de envasado tiene relevo para que las madres usen el lactario.', 'Yesenia lo usó a las dos de la mañana.'],
  reporte_nelly: ['Nelly tiene el resumen del día y sabe qué falta para mañana.', 'El balance de las dos semanas será mañana.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Instructor de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  milagros: { n: 'Milagros Puicón', sub: 'Operaria de campo · cuadrilla de semillero', c: '#C2185B' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Operaria de envasado · turno noche', c: '#9B4F96' },
  rosa: { n: 'Rosa Ñiquén', sub: 'Esposa de Don Héctor', c: '#B5651D' },
};

export const WSP = [
  { chat: 'grupo', t: '06:40', de: 'Nelly', txt: 'Hoy es el día del lactario 💛 Yo llego 7:15 con la gerente de RR.HH. Nada de discursos largos, ¿ya?' },
  { chat: 'maribel', t: '07:40', de: 'Maribel', txt: 'Primera extracción en un lugar con puerta, silla y frigobar 😭 Gracias de verdad.', si: 'maribel_informada' },
  { chat: 'maribel', t: '07:40', de: 'Maribel', txt: 'Ya lo usé 😊 Una compañera me contó que el tiempo del lactario es aparte de mi hora de lactancia. ¿Es cierto?', si: 'maribel_callada' },
  { chat: 'rosa', t: '12:20', de: 'Rosa', txt: 'Señorita Héctor me llamó a la hora del almuerzo. Dice que los chiquillos le dicen «maestro» 😊', si: 'acuerdo_escrito' },
  { chat: 'rosa', t: '12:20', de: 'Rosa', txt: 'Señorita ¿es verdad que a Héctor le van a pagar menos? Llegó callado.', si: 'sueldo_reducido' },
  { chat: 'milagros', t: '10:30', de: 'Milagros', txt: 'Señorita, la doctora Vera me dijo que el ingeniero presentó su descargo. Dice que yo le seguía el juego. Me quiero morir de vergüenza.' },
  { chat: 'augusto', t: '15:05', de: 'Augusto', txt: 'Vi el candado de clave del lactario. Bien pensado. No le digan a nadie que lo dije.', si: 'lactario_clave' },
  { chat: 'yesenia', t: '20:55', de: 'Yesenia', txt: 'Ya estoy en la línea. A las 2 me toca 🙏', si: 'noche_cubierta' },
];

export const CORREOS = [
  { t: '06:50', de: 'Logística Sipán', para: 'Bienestar Social', asunto: 'Lactario · entrega del ambiente', html: '<p>Se entrega el ambiente del segundo piso del laboratorio con: frigobar exclusivo, dos sillones con brazos, mesa, repisa, lavadero, dispensadores de jabón y papel toalla, tacho con tapa, cortina y seguro interior.</p><p>Queda pendiente definir quién se encarga de la limpieza diaria.</p>' },
];

export const QUIZ = [
  { q: '¿Qué datos debe tener el registro de uso del lactario?', ops: ['Nombre, área, fecha y hora de uso', 'Foto del bebé y diagnóstico de la madre', 'La opinión del jefe', 'El sueldo de la usuaria'], ok: 0, por: 'El registro sirve para gestionar el servicio: basta con lo mínimo necesario (Ley 29733).' },
  { q: 'Una línea de envasado no puede parar. ¿Cómo garantizas el tiempo de lactario de noche?', ops: ['No se puede', 'Con un relevo y pausas que la madre distribuye según su necesidad', 'Pasándola al día sin preguntarle', 'Reduciendo su tiempo a 10 minutos'], ok: 1, por: 'El reglamento permite fraccionar el tiempo y lo considera laborado; la organización del turno tiene que hacerlo posible.' },
  { q: 'Una víctima quiere desistirse tras el descargo del denunciado. ¿Qué haces?', ops: ['La convences de seguir a toda costa', 'Tramitas el desistimiento enseguida', 'Le das tiempo, información y orientación externa para que decida ella', 'Le dices que ya no se puede'], ok: 2, por: 'La decisión es suya; tu trabajo es que decida informada, con calma y sin presión.' },
  { q: '¿A quién debe informar el empleador que implementó un lactario?', ops: ['Al MIMP', 'A EsSalud', 'A la SUNAT', 'A nadie'], ok: 0, por: 'El reglamento de la Ley 29896 pide informar al MIMP la implementación del lactario.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '07:00', ch: 'documento', who: null, titulo: 'Las reglas de la puerta', banner: 'assets/3d/scenes/planta-sq.webp', lugar: 'Lactario · segundo piso del laboratorio', show: ['calidad', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Maribel corta una cinta de papel crepé con una tijera del laboratorio. Hay cinco madres, Nelly, la gerente de RR.HH. y un aplauso corto. ${F.has('lactario_clave') ? 'El candado de clave brilla en la puerta.' : 'La llave cuelga de un clavo en la garita.'}</p><p>Falta lo que se pega en la puerta: <mark class="clave">cómo se usa, para que funcione igual a las 2 de la tarde que a las 2 de la mañana</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de las reglas de uso.', boton: 'Pegar las reglas en la puerta',
    bloques: [
      { id: 'quien', t: 'Quién lo usa', n: 1, ops: [
        { id: 'q1', t: 'Todas las trabajadoras en periodo de lactancia, de los tres turnos.', ok: true, por: 'Sin excepciones por área ni turno.' },
        { id: 'q2', t: 'Las trabajadoras de planilla con autorización de su jefe.', ok: false, por: 'El uso no depende del permiso del jefe.' },
      ] },
      { id: 'tiempo', t: 'Tiempo', n: 1, ops: [
        { id: 't1', t: 'Mínimo una hora al día, aparte de la hora de lactancia, en los momentos que cada madre necesite. El camino no se descuenta.', ok: true, por: 'Lo que dicen los arts. 21 y 22 del reglamento.' },
        { id: 't2', t: 'Máximo 20 minutos por uso, para que alcance para todas.', ok: false, por: 'El reglamento fija un mínimo, no un tope corto.' },
      ] },
      { id: 'registro', t: 'Registro', n: 1, ops: [
        { id: 'r1', t: 'Cuaderno en la puerta: nombre, área, fecha y hora de entrada y salida.', ok: true, por: 'Lo mínimo para gestionar el servicio.' },
        { id: 'r2', t: 'Ficha con foto del bebé, motivo y firma del jefe.', ok: false, por: 'Datos de más y un control que espanta.' },
      ] },
      { id: 'frigo', t: 'Frigobar y limpieza', n: 2, ops: [
        { id: 'f1', t: 'Cada frasco con nombre y fecha; el frigobar es solo para leche materna.', ok: true, por: 'Higiene y uso exclusivo.' },
        { id: 'f2', t: 'Limpieza diaria por el servicio de limpieza en cada cambio de turno, con registro.', ok: true, por: 'Responde al pendiente de Logística.' },
        { id: 'f3', t: 'Cada usuaria limpia al salir; si está sucio, se cierra.', ok: false, por: 'Traslada a las madres un trabajo que es de la empresa.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : 0, personas: q === 'buena' ? 3 : 0 }, rel: { maribel: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['lactario_reglas'] : [],
        cartera: { lactario: q === 'buena' ? 'Abierto, con reglas para tres turnos y registro mínimo' : 'Abierto, con reglas por ajustar' },
        out: q === 'buena' ? 'Pegas la hoja con cinta. Una operaria de campo la lee en voz alta para otra que no lee bien. La gerente de RR.HH. le toma foto: «Esto va para las otras sedes».' : q === 'aceptable' ? 'La hoja se pega, pero Maribel señala una línea: «Esto va a traer problemas el primer día».' : 'Una madre lee «con autorización de su jefe» y se da media vuelta.',
        pro: { ok: 'Reglas que se entienden de pie, que no dependen del jefe y que funcionan en los tres turnos.', risk: 'Un tope de tiempo o un permiso del jefe pueden vaciar el lactario en una semana.', info: 'El registro de usuarias también te servirá para el informe al MIMP.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Reglas claras desde el primer día!' : '¿Esa regla ayuda o traba?'],
      };
    },
    rules: [[LEY, 'D.S. 023-2021-MIMP: tiempo mínimo de una hora, independiente de la hora de lactancia; frigobar de uso exclusivo; registro de usuarias.'], [LEY, 'Ley 29733: en el registro, solo los datos necesarios.']],
    mirada: {
      ve: 'Un lactario funciona por sus reglas tanto como por sus paredes. Las reglas deciden si una madre de campo, que no conoce a nadie en el laboratorio, se anima a subir.',
      visual: { tipo: 'flujo', titulo: 'Reglas en la puerta', pasos: ['Tres turnos', 'Una hora aparte', 'Registro mínimo', 'Frigobar exclusivo', 'Limpieza por turno'] },
    },
  },
  {
    id: 'a2', t: '09:30', ch: 'presencial', who: 'hector', titulo: 'El maestro Llontop', banner: 'assets/foto/capacitacion.webp', lugar: 'Fábrica · área de molienda', show: ['personas', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>Don Héctor explica a seis operarios nuevos cómo suena un molino cuando algo va mal, con la mano en el oído. ${F.has('sueldo_reducido') ? 'Habla bien, pero se le nota apagado.' : 'Tiene la voz de alguien que se sabe útil.'} Un muchacho de Ferreñafe toma apuntes en el celular.</p><p>Es tu visita de seguimiento. <mark class="clave">Dos preguntas, una a él y una a su nuevo jefe</mark>, o las dos a uno.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'como', label: 'Don Héctor, ¿cómo se ha sentido hoy?', info: '«Bien, señorita. Los chiquillos preguntan harto. Lo malo es que mis compañeros de molienda pasan y me dicen “profesor” riéndose. Pero ya, es broma nomás.»' },
      { id: 'donde', label: 'Ing. Sampén, ¿dónde se dan las clases teóricas?', info: '«En el aula de capacitación, en el segundo piso de la fábrica. Son veintidós escalones; los contó él.» Don Héctor se encoge de hombros: «Subo despacito».' },
      { id: 'rodilla', label: 'Don Héctor, ¿le duele la rodilla con este trabajo?', info: '«Un poquito al final, de estar parado. Me siento en la banca cuando ellos practican. La terapista dice que vamos bien.»' },
      { id: 'sirve', label: 'Ing. Sampén, ¿le sirve tenerlo como instructor?', info: '«Más de lo que pensé. En una mañana les enseñó lo que a otros les toma un mes. Ojalá se quede después de los seis meses.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, cumplimiento: picks.includes('donde') ? 4 : 0, calidad: 2 },
      flags: picks.includes('donde') ? ['aula_movida'] : [],
      cartera: { hector: picks.includes('donde') ? 'Clases movidas al primer piso: sin escaleras' : picks.includes('como') ? 'Bromas de sus excompañeros, por vigilar' : 'Primer día bien' },
      out: picks.includes('donde') ? 'Le recuerdas a Sampén la restricción de escaleras. Él se da una palmada en la frente: «La sala de reuniones de abajo está libre». Desde mañana, las clases son ahí.' : picks.includes('como') ? 'Anotas lo de las bromas. Si sigue, lo hablarás con el jefe de molienda: el respeto también es parte del retorno.' : 'Todo parece ir bien. Te vas sin saber que, para llegar al aula, Don Héctor sube veintidós escalones dos veces al día.',
      kusi: [picks.includes('donde') ? 'celebra' : 'curioso', picks.includes('donde') ? '¡Veintidós escalones menos!' : 'El seguimiento descubre lo que el papel no ve.'],
    }),
    rules: [[BP, 'En el seguimiento de un retorno, verifica que las restricciones se cumplan en el lugar real, no solo en el acuerdo.']],
    mirada: {
      ve: 'Un acuerdo puede decir «no subir escaleras» y el aula estar en un segundo piso. El seguimiento existe para encontrar esas contradicciones antes de que la rodilla las encuentre.',
      visual: { tipo: 'cambio', titulo: 'Lo que dice el acuerdo y lo que pasa', pares: [['No subir escaleras', 'Aula en el segundo piso'], ['Alternar de pie y sentado', 'Una banca junto a la práctica'], ['Un retorno digno', '«Profesor», con risa']] },
    },
  },
  {
    id: 'a3', t: '11:00', ch: 'presencial', who: null, titulo: '«Me quiero desistir»', banner: 'assets/foto2/pasillo.webp', lugar: 'Salita de Bienestar', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Milagros llega con los ojos hinchados. El Ing. Mío presentó su descargo: dice que ella «le seguía el juego» y adjuntó capturas de sus respuestas con «jajaja» de hace tres meses. ${F.has('gladys_expuesta') ? 'Y anoche la mamá de la esposa de Mío la esperó en el paradero para gritarle.' : ''}</p><p>«Señorita, quiero retirar todo. Me da vergüenza. <mark class="clave">Que quede así nomás</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que reírse de una broma al inicio no borra lo que vino después ni la autoriza a nada; que el comité evalúa todo; y que la decisión es suya, pero que antes hable con la abogada del CEM. Darle unos días.',
        res: { q: 'buena', fx: { personas: 5, etica: 5 }, flags: ['milagros_decide'], cartera: { queja: 'Milagros decidirá con orientación del CEM' },
          out: 'Milagros llora un rato largo. Luego pregunta: «¿O sea que no es mi culpa?». No. Le marcas el número del CEM de Chiclayo y le consigues una cita para el lunes. Ella se queda la tarde en su cuadrilla, con la Ing. Bances.',
          pro: { ok: 'Le devuelves la culpa a quien corresponde y respetas que decida ella, informada y con tiempo.', risk: 'Puede decidir desistirse igual. Tu trabajo no es que gane el caso, sino que decida libre.', info: 'Los descargos que exponen a la víctima son comunes. Avísale a la Dra. Vera cómo la afectó.' },
          kusi: ['animo', 'No era su culpa. Ahora lo sabe.'] } },
      { id: 'b', label: 'Convencerla con firmeza de que no se retire: si lo hace, él gana y le hará lo mismo a otra.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -2, confianza: -1 }, flags: ['milagros_presionada'], cartera: { queja: 'Sigue, presionada' },
          out: 'Milagros dice «ya, sigo» en voz bajita. Sigue con la queja, pero sale de la salita mirando al suelo, como si le hubieran puesto otra carga encima.',
          pro: { ok: 'Tienes razón en el fondo: el caso importa también para otras.', risk: 'Presionarla, aunque sea por una buena causa, repite lo que vivió: alguien con más poder decidiendo por ella.' },
          kusi: ['pensando', 'Tenías razón… pero la decisión era suya.'] } },
      { id: 'c', label: 'Respetar lo que pide y llevar hoy mismo su desistimiento por escrito al comité.',
        res: { q: 'riesgosa', fx: { personas: -3, etica: -3, cumplimiento: -2 }, flags: ['milagros_desiste'], cartera: { queja: 'Desistimiento presentado el día del descargo' },
          out: 'La Dra. Vera recibe el papel y te mira: «¿Esta decisión la tomó sola, con calma, o el mismo día que leyó el descargo?». No sabes qué responder.',
          pro: { ok: 'Respetas su voluntad.', risk: 'Una decisión tomada en el peor momento, sin orientación, rara vez es libre. Darle tiempo también es respetarla.', info: 'El comité le explicará qué pasa con el procedimiento si se desiste.' },
          kusi: ['preocupado', '¿Fue su decisión o su vergüenza?'] } },
    ],
    rules: [[LEY, 'El procedimiento se rige por la no revictimización (Ley 27942 y su reglamento).'], [BP, 'Acompaña la decisión de la víctima: información, tiempo y orientación externa, sin presión en ningún sentido.']],
    mirada: {
      ve: 'El descargo del denunciado suele ser el momento en que la víctima más duda. Bienestar no tiene que ganar el caso: tiene que lograr que ella entienda que no es culpable y que decida con calma.',
      visual: { tipo: 'balanza', a: { t: 'Lo que dice el descargo', items: ['«Le seguía el juego»', 'Capturas de hace tres meses', '«Es una mentirosa»'] }, b: { t: 'Lo que pesa más', items: ['Mensajes de noche', 'La mano en la cintura', 'El fundo lejano tras el «no»'] } },
    },
  },
  {
    id: 'a4', t: '14:30', ch: 'documento', who: null, titulo: 'El informe al MIMP', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de Bienestar', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>RR.HH. te pide revisar el informe de implementación del lactario que se enviará al MIMP. Lo armó un practicante juntando lo que había en la carpeta, incluido el correo de Administración de hace una semana.</p><p><mark class="clave">Un informe oficial tiene que describir el lactario que existe hoy</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debe ir en el informe al MIMP.',
    doc: { t: 'Informe de implementación de lactario', sub: 'Agroindustrial Sipán · para el MIMP' },
    lines: [
      { id: 'ubic', t: 'Ubicación: segundo piso del laboratorio de calidad, evaluada por el comité de SST.' },
      { id: 'area', t: 'Área: 6 m², contiguo al tópico.', bad: LEY, why: 'Es el dato del depósito. El lactario real tiene otra ubicación y debe cumplir el área mínima de 7,50 m².' },
      { id: 'equipo', t: 'Equipamiento: frigobar exclusivo, dos sillones con brazos, mesa, lavadero, jabón, papel toalla, cortina y seguro.' },
      { id: 'horario', t: 'Horario de atención: lunes a viernes de 8:00 a 17:00.', bad: BP, why: 'El lactario funciona en los tres turnos. Declarar un horario de oficina contradice lo que se implementó.' },
      { id: 'usuarias', t: 'Anexo: lista de usuarias con nombre, DNI, edad del bebé y celular.', bad: LEY, why: 'Datos personales innecesarios para el informe. Basta con el número de usuarias potenciales.' },
      { id: 'potencial', t: 'Mujeres de 15 a 49 años en planilla: 168.' },
      { id: 'resp', t: 'Responsable: Bienestar Social.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'El informe se envía con el área del depósito y la lista de usuarias. Si un inspector compara, nada cuadra.' : 'Corriges tres líneas y lo devuelves. El practicante pregunta: «¿Cómo sabía lo del depósito?». Le cuentas la historia del letrero en Arial 72.',
      flags: missLey ? [] : ['lactario_informado'],
      cartera: { mimp: missLey ? 'Informe con datos viejos y personales' : 'Informe fiel al lactario real' },
      pro: { ok: 'El informe al MIMP debe coincidir con el lactario que existe: si no, el papel delata lo que se quiso tapar.', info: 'Guarda copia del informe y de las fotos del antes y el después.' },
      kusi: missLey ? ['preocupado', '¿6 m² junto al tópico?'] : ['celebra', 'Informe fiel a la realidad.'],
    }),
    rules: [[LEY, 'D.S. 023-2021-MIMP: el empleador informa al MIMP la implementación del lactario.'], [LEY, 'Ley 29733: en documentos oficiales, solo los datos personales necesarios.']],
    mirada: {
      ve: 'Los informes oficiales se arman muchas veces juntando correos viejos. Revisarlos contra lo que existe hoy evita que el papel cuente una historia distinta a la realidad.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al informe', pares: [['6 m² junto al tópico', 'Segundo piso del laboratorio'], ['De 8 a 5', 'Tres turnos'], ['Lista con DNI y celulares', '168 usuarias potenciales']] },
    },
  },
  {
    id: 'a5', t: '19:10', ch: 'presencial', who: null, titulo: 'La primera noche', banner: 'assets/3d/scenes/planta.webp', lugar: 'Envasado · cambio de turno', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Te quedaste. La planta de noche suena distinto: más fuerte, más caliente. El Ing. Pacherre, jefe de envasado del turno noche, te espera de brazos cruzados: «La envasadora no para. Si Yesenia sale una hora, ¿quién embolsa?». ${F.has('noche_atendida') ? 'Pero es el mismo que el viernes dejó a su gente tomarse la presión antes de entrar.' : ''}</p><p>Hay tres madres en este turno. <mark class="clave">Puedes proponer dos soluciones</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos soluciones que propones.', boton: 'Proponer estas dos', resumen: 'Propusiste',
    cols: ['Solución', 'Qué implica'],
    rows: [
      { id: 'volante', cells: ['Un operario volante que releve a cada madre cuando sale al lactario', 'La línea no para; alguien más aprende el puesto'] },
      { id: 'fracciones', cells: ['Que cada madre reparta su hora en dos o tres salidas, avisando al jefe al inicio del turno', 'Lo que permite el reglamento; ella decide'] },
      { id: 'paradas', cells: ['Hacer coincidir algunas salidas con los cambios de formato, cuando la línea ya se detiene', 'Aprovecha pausas que existen'] },
      { id: 'dia', cells: ['Pasar a las tres madres al turno día', 'Sin preguntarles; resuelve el problema del jefe'] },
      { id: 'diez', cells: ['Diez minutos por salida, para no afectar la producción', 'Recorta el derecho'] },
    ],
    score: { volante: 3, fracciones: 3, paradas: 2, dia: -2, diez: -3 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -4, cumplimiento: q === 'riesgosa' ? -4 : 3, tiempo: -2 },
        flags: q === 'riesgosa' ? [] : ['noche_cubierta'],
        cartera: { noche: q === 'buena' ? 'Volante y salidas fraccionadas' : q === 'aceptable' ? 'Una solución parcial' : 'Derecho recortado o madres movidas' },
        out: picks.includes('dia') ? 'Yesenia se entera de que la quieren pasar al día y se asusta: de día no tiene quién le cuide al bebé. «Yo trabajo de noche porque de día mi mamá cuida a mi bebé.»' : q === 'buena' ? 'Pacherre lo piensa y llama a Elmer, el volante: «Esta noche aprendes la embolsadora». A las 20:50 Yesenia ya tiene su horario: 23:00, 02:00 y 05:00.' : 'Pacherre acepta a medias. Hoy funciona; mañana dependerá de su humor.',
        pro: { ok: 'Resuelves el problema del jefe sin recortar el derecho ni mover a nadie sin preguntarle.', risk: 'Pasar a una madre al día «para ayudarla» puede romper el cuidado de su bebé.', info: 'El tiempo de lactario se considera tiempo trabajado: no se descuenta ni se recupera.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡El lactario también es de noche!' : '¿Eso cuida a la madre o a la línea?'],
      };
    },
    rules: [[LEY, 'D.S. 023-2021-MIMP, art. 21: el tiempo puede fraccionarse; la madre decide la distribución, previa coordinación; se considera tiempo laborado.']],
    mirada: {
      ve: 'De día todo parece fácil. La prueba de cualquier medida de bienestar en una planta que no para es el turno noche: ahí se ve si el derecho existe o solo está escrito.',
      visual: { tipo: 'linea', titulo: 'La primera noche de Yesenia', hitos: [['19:00', 'Entra a la línea'], ['23:00', 'Primera salida, con relevo'], ['02:00', 'Segunda salida'], ['05:00', 'Tercera salida'], ['07:00', 'Sale con la leche en el cooler']] },
    },
  },
  {
    id: 'a6', t: '20:40', ch: 'whatsapp', who: null, titulo: 'Para Nelly', banner: 'assets/esc/logro.webp', lugar: 'Paradero, esperando la movilidad de las 9', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Hace frío por primera vez en la semana. Esperas la movilidad de las 9 con los brazos cruzados y la credencial todavía colgada. Nelly te escribió a las 6: «¿Sigues ahí? Mañana es tu balance de las dos semanas».${F.has('milagros_decide') ? ' Milagros tiene cita en el CEM el lunes.' : ''}</p><p><mark class="clave">Un mensaje corto que le sirva para mañana</mark>.</p>`,
    type: 'compose', enviaA: 'grupo', para: 'Para: grupo Bienestar Sipán', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'logro', t: 'Lo que se logró', ops: [
        { id: 'l1', t: 'Lactario abierto en los tres turnos: el turno noche de envasado ya tiene relevo y horarios.', ok: true, por: 'Un logro con dato concreto.' },
        { id: 'l2', t: '¡Día increíble, todo salió perfecto! 🎉', ok: false, por: 'No dice qué pasó.' },
      ] },
      { id: 'alerta', t: 'Lo que preocupa', ops: [
        { id: 'a1', t: 'El caso de campo está delicado después del descargo; la persona decidirá con orientación externa. Te cuento mañana en persona.', ok: true, por: 'Alerta sin nombres ni detalles en un grupo.' },
        { id: 'a2', t: 'Milagros se quiere desistir porque Mío presentó capturas de ella riéndose.', ok: false, por: 'Nombres y detalles de un caso reservado en un chat.' },
      ] },
      { id: 'hector', t: 'Don Héctor', ops: [
        { id: 'h1', t: 'Don Héctor bien en su primer día; hay que vigilar las bromas de sus excompañeros.', ok: true, por: 'Seguimiento con una tarea.' },
        { id: 'h2', t: 'Don Héctor ya está, caso cerrado.', ok: false, por: 'Un retorno no se cierra el primer día.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Mañana llego 7:30 con la matriz de casos actualizada.', ok: true, por: 'Le dice qué traerás.' },
        { id: 'c2', t: 'Ya me voy, estoy muerta 😩', ok: null, por: 'Humano, pero no le sirve para mañana.' },
      ] },
    ],
    res: sel => {
      const buenas = ['l1', 'a1', 'h1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, etica: sel.alerta === 'a2' ? -4 : 1 }, rel: { nelly: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['reporte_nelly'] : [],
        cartera: { lactario: 'Primer día y primera noche' },
        out: q === 'buena' ? 'Nelly responde con un audio: «Estoy orgullosa de ti. Vete a dormir. Mañana conversamos de todo, y del lunes también».' : sel.alerta === 'a2' ? 'Nelly borra el mensaje en segundos y te escribe aparte: «Eso no va en un grupo, ni siquiera en el nuestro».' : 'Nelly responde con un corazón. Mañana tendrás que contarle todo desde cero.',
        pro: { ok: 'Logro, alerta sin nombres, seguimiento y lo que traerás mañana.', info: 'Incluso en el chat del área, un caso reservado se menciona sin nombres.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'A dormir: mañana es el balance.' : '¿Eso iba en un grupo?'],
      };
    },
    rules: [[BP, 'En un reporte por chat, nombra logros y alertas sin datos de casos reservados.']],
    mirada: {
      ve: 'Al final de un día largo, un buen reporte es corto: qué se logró, qué preocupa y qué traerás mañana. Lo reservado se conversa en persona.',
      visual: { tipo: 'mensaje', titulo: 'Un reporte que sirve', txt: 'Lactario abierto en los tres turnos: el turno noche de envasado ya tiene relevo y horarios. El caso de campo está delicado después del descargo; la persona decidirá con orientación externa. Don Héctor bien en su primer día; hay que vigilar las bromas. Mañana llego 7:30 con la matriz de casos actualizada.' },
    },
  },
];
