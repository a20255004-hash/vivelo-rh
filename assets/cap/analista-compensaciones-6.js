// Analista de Compensaciones y Beneficios · Capítulo 6 · «La excepción» · Semana 2, lunes.
// Hilo: Renzo pide un 30 % para retener a «su estrella». Sostener la equidad sin perder talento.
// Normas citadas:
// - Ley 30709 y D.S. 002-2018-TR: dentro de una misma categoría, la diferencia solo se justifica por criterios objetivos,
//   entre ellos la escasez de mano de obra calificada; el empleador debe acreditar que el criterio es objetivo,
//   verificable y se aplica de forma consistente. El Peruano:
//   https://elperuano.pe/noticia/305005-igualdad-salarial-estas-son-las-reglas-que-deben-considerar-las-empresas-al-determinar-las-remuneraciones
// - Resolución 0047-2025-SUNAFIL/TFL-Primera Sala: no basta listar factores; hay que explicar cómo justifican la diferencia.
//   https://lpderecho.pe/discriminacion-salarial-basta-enunciar-criterios-salariales-explicados-justificados-correctamente-resolucion-0047-2025-sunafil-tfl-primera-sala/
// - Obligación de informar la política salarial al modificarse el esquema remunerativo (El Peruano):
//   https://elperuano.pe/noticia/246869-sunafil-fiscaliza-normas-sobre-politica-salarial-atiende-estos-consejos-para-evitar-riesgos

export const CAP = {
  n: 6, titulo: 'La excepción', dia: 'Semana 2, lunes', foto: 'assets/foto2/tension.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:15', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes de la segunda semana. Llueve finito sobre la Vía Expresa y el bus demora el doble. En tu bandeja, un correo de Renzo enviado el domingo a las 10 p. m.: «URGENTE · Retención Álvaro Ruiz · 30 %».', boton: 'Leer el pedido de Renzo',
  kusi: 'Hoy toca decir «sí, pero con reglas». ¡Lo más difícil del puesto!',
  lead: 'Entendiste qué estaba en juego con Álvaro, comparaste formas de retener, verificaste el mercado, atendiste una urgencia pequeña, respondiste a una excepción y dejaste una regla escrita para las siguientes.',
  reflexion: '¿Cuándo una excepción deja de ser excepción y se vuelve una injusticia para los demás?',
  siguiente: { n: 7, titulo: 'El simulador', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'alvaro', p: 'Retención de Álvaro Ruiz', j: 'Renzo · Tecnología', d: 0, e: 'Pedido: 30 %' },
  { id: 'mercado', p: 'Mercado de arquitectos de red', j: 'Consultora Pulso Salarial', d: 0, e: 'Por consultar' },
  { id: 'regla', p: 'Regla para excepciones', j: 'Gustavo · Compensaciones', d: 0, e: 'No existe' },
  { id: 'constancia', p: 'Constancia de Yesenia', j: 'Planillas', d: 0, e: 'Sin pedido' },
];

export const FUTURO = {
  excepcion_criterio: ['Respondiste a la excepción con un criterio objetivo y un bono atado a un hito, no con un 30 % a ciegas.', 'El simulador tendrá una línea propia para escasez de talento.'],
  excepcion_mercado: ['Aprobaste el 30 % justificándolo por escasez de mano de obra calificada.', 'El comité preguntará por qué ese criterio no se aplicó a otros.'],
  excepcion_cede: ['Aprobaste el 30 % porque Renzo lo exigió.', 'Claudia y las analistas lo sabrán antes del comité.'],
  alvaro_liderar: ['Descubriste que Álvaro quería liderar, no solo ganar más.', 'Renzo tendrá que responder eso, no tú.'],
  regla_excepciones: ['Dejaste escrita una regla para excepciones salariales.', 'Fiorella la llevará al comité.'],
  yesenia_atendida: ['Resolviste la constancia de Yesenia el mismo día.', 'Wilber se enterará.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
  claudia: { n: 'Claudia Puma', sub: 'Ingeniera de redes', who: 'claudia' },
  wilber: { n: 'Wilber Ccori', sub: 'Jefe de Operaciones de Campo', c: '#F2A900' },
};

export const WSP = [
  { chat: 'gustavo', t: '08:20', de: 'Gustavo', txt: '¿Viste el correo de Renzo? Atiéndelo tú, pero nada se aprueba hoy sin pasar por mí.' },
  { chat: 'claudia', t: '08:45', de: 'Claudia', txt: 'Lucía me contó que también la van a revisar. Gracias. De verdad.', si: 'analistas_todas' },
  { chat: 'claudia', t: '08:45', de: 'Claudia', txt: 'Lucía me preguntó si a ella también la van a revisar. No supe qué decirle.', si: 'solo_claudia' },
  { chat: 'wilber', t: '09:30', de: 'Wilber', txt: 'Ingeniera, los chicos me preguntan otra vez por el aumento. Ya van ocho renuncias en el mes.', si: 'tecnicos_promesa' },
  { chat: 'wilber', t: '18:10', de: 'Wilber', txt: 'Yesenia me contó que la ayudó con su constancia. Gracias, ingeniera. Esas cosas los chicos no se olvidan.', si: 'yesenia_atendida' },
  { chat: 'renzo', t: '18:30', de: 'Renzo', txt: 'Lo que sea que decidan, que sea antes del miércoles. Álvaro contesta la oferta el jueves.' },
];

export const CORREOS = [
  { t: '08:15', de: 'Renzo Pacheco', para: 'Compensaciones · cc: Gerencia General', asunto: 'URGENTE · Retención Álvaro Ruiz · 30 %', html: '<p>Álvaro Ruiz, arquitecto de red, tiene una oferta de una fintech: S/ 16,000 y trabajo remoto. Es el único que domina la migración del core a la nube, que cerramos en marzo.</p><p>Necesito un 30 % esta semana. Si lo perdemos, el proyecto se cae.</p><p>Renzo</p>' },
  { t: '12:00', de: 'Pulso Salarial · Consultora', para: 'Compensaciones AndesTel', asunto: 'RE: Corte especial · arquitectos de red cloud', html: '<p>Según el corte especial de la encuesta, para arquitectos de red con experiencia en nube: P50 S/ 13,800 y P75 S/ 15,800 mensuales. Es una de las familias con mayor movimiento del año.</p>' },
];

export const QUIZ = [
  { q: 'La «escasez de mano de obra calificada» puede justificar pagar más a alguien de la misma categoría si…', ops: ['El gerente lo dice', 'Se demuestra con datos de mercado y se aplica igual a todos los que estén en la misma situación', 'La persona amenaza con irse', 'Nunca puede justificarlo'], ok: 1, por: 'Es un criterio objetivo admitido, pero el empleador debe acreditarlo y aplicarlo de forma consistente.' },
  { q: 'Un bono de retención atado a un hito sirve para…', ops: ['Corregir una brecha de equidad', 'Asegurar la permanencia durante un periodo crítico sin cambiar la estructura salarial', 'Reemplazar el sueldo', 'Castigar a quien se va'], ok: 1, por: 'Retiene durante el proyecto y no mueve la base salarial de forma permanente.' },
  { q: 'Antes de aprobar una contraoferta, conviene preguntar…', ops: ['Solo cuánto le ofrecen', 'Qué le ofrecen además del sueldo y qué lo haría quedarse', 'Quién más se quiere ir', 'Nada: hay que actuar rápido'], ok: 1, por: 'Muchas veces la razón de irse no es solo el dinero.' },
  { q: 'Según el Tribunal de Fiscalización Laboral, una excepción salarial bien hecha…', ops: ['Se registra solo en un correo', 'Explica cómo el criterio justifica la diferencia concreta', 'No necesita registro', 'Depende del cargo de quien la pide'], ok: 1, por: 'No basta mencionar el criterio: hay que mostrar cómo justifica esa diferencia.' },
  { q: 'Si una persona cambia de esquema remunerativo por una excepción, el empleador…', ops: ['No tiene que decirle nada', 'Debe informarle la política salarial aplicable', 'Solo avisa a su jefe', 'Lo publica en el mural'], ok: 1, por: 'La política salarial se informa también cuando se modifica el esquema remunerativo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:45', ch: 'presencial', who: 'renzo', titulo: 'Antes de hablar de porcentajes', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Oficina de Renzo, con vista a El Olivar', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Renzo te recibe de pie. ${F.has('renzo_cede') ? '«Con Diego funcionó. Esto es igual, pero más grande.»' : F.has('renzo_frenado') ? '«Ya sé que te gustan las reglas. Esto es urgente igual.»' : '«No tengo mucho tiempo.»'}</p><p>Antes de discutir el 30 %, necesitas entender el caso. <mark class="clave">Tienes tiempo para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: '¿Qué le preguntas a Renzo?',
    opts: [
      { id: 'oferta', label: '¿Qué le ofrecen exactamente?', info: '«S/ 16,000, remoto total y un título: “Head of Network”. Allá sería jefe de un equipo de cuatro.»' },
      { id: 'quiere', label: '¿Qué te ha dicho Álvaro que quiere?', info: 'Renzo duda. «Que quiere crecer. Hace un año me pidió liderar el equipo de nube y le dije que todavía no.» Mira la ventana.' },
      { id: 'sueldo', label: '¿Cuánto gana hoy y en qué categoría está?', info: '«S/ 12,000, categoría 7. El punto medio es S/ 12,500. No está mal pagado… está pagado como todos.»' },
      { id: 'quien', label: '¿Quién más podría hacer su trabajo?', info: '«Nadie, hoy. Le pedí que forme a dos y nunca hubo tiempo. Eso es culpa mía, lo admito.»' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('quiere') || picks.includes('oferta') ? 4 : 2, confianza: 1 },
      rel: { renzo: picks.includes('quiere') ? 1 : 0 },
      flags: picks.includes('quiere') || picks.includes('oferta') ? ['alvaro_liderar'] : [],
      cartera: { alvaro: picks.includes('quiere') || picks.includes('oferta') ? 'Quiere liderar, no solo ganar más' : 'Pedido de 30 % por oferta externa' },
      out: picks.includes('quiere') || picks.includes('oferta') ? 'Anotas: «oferta = sueldo + liderar». Renzo lo ve en tu libreta y se queda callado un momento.' : 'Te llevas datos útiles. Lo que Álvaro quiere más allá del dinero sigue sin aparecer.',
      kusi: ['curioso', 'A veces la oferta no es solo plata.'],
    }),
    rules: [[BP, 'Antes de una contraoferta, entiende qué ofrece la otra empresa además del sueldo y qué haría quedarse a la persona.']],
    mirada: {
      ve: 'Los pedidos de retención llegan como un porcentaje, pero casi nunca son solo un porcentaje. Preguntar qué hay detrás cambia la solución.',
      visual: { tipo: 'rango', titulo: 'Álvaro frente a su banda y su mercado (S/ mensuales)', min: 9000, max: 17000, banda: [10000, 15000], marcas: [['Álvaro hoy', 12000], ['Mercado P50', 13800], ['Pedido +30 %', 15600], ['Oferta', 16000]] },
    },
  },
  {
    id: 'f2', t: '10:00', ch: 'documento', who: null, titulo: 'Formas de retener', banner: 'assets/esc/piensa.webp', lugar: 'Tu escritorio, con el Excel de excepciones vacío', show: ['calidad', 'etica'],
    body: (n, F) => `<p>Abres una pestaña nueva: «EXCEPCION_AR». ${F.has('analistas_todas') ? 'En la de al lado sigue abierto el costo de corregir a las once analistas.' : 'En la de al lado sigue abierto el caso de Claudia.'}</p><p>Hay varias formas de retener a alguien. <mark class="clave">Elige dos para proponer</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos medidas que propondrías.', boton: 'Guardar la propuesta', resumen: 'Propusiste',
    cols: ['Medida', 'Qué resuelve'],
    rows: [
      { id: 'bono', cells: ['Bono de retención pagado al cerrar la migración en marzo', 'Asegura el proyecto sin mover la base para siempre'] },
      { id: 'ajuste', cells: ['Ajuste al P50 de su mercado específico, documentado por escasez', 'Corrige con un criterio objetivo y verificable'] },
      { id: 'treinta', cells: ['30 % al sueldo base, como pide Renzo', 'Iguala la oferta hoy'] },
      { id: 'secreto', cells: ['Aumento fuera de la matriz y sin registrar, para no generar comparaciones', 'Evita preguntas'] },
      { id: 'nada', cells: ['Nada: si se quiere ir, que se vaya', 'Protege el presupuesto'] },
    ],
    score: { bono: 3, ajuste: 3, treinta: 0, secreto: -5, nada: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.includes('secreto') ? -5 : 2 },
        cartera: { alvaro: q === 'buena' ? 'Propuesta: bono a marzo + ajuste a P50 documentado' : picks.includes('secreto') ? 'Propuesta sin registro' : 'Propuesta incompleta' },
        out: q === 'buena' ? 'Haces la cuenta: el ajuste al P50 son S/ 1,800 al mes; el bono, un pago único en marzo. Muy por debajo del 30 % permanente.' : picks.includes('secreto') ? 'Gustavo lo ve y borra la fila: «Un aumento que no se registra es el que más rápido se vuelve escándalo».' : 'La propuesta resuelve una parte, pero no explica con qué criterio.',
        pro: { ok: 'Separas lo temporal (el proyecto) de lo permanente (su valor de mercado).', info: 'Si su rol va a cambiar a liderar un equipo, eso es una nueva valoración de puesto, no una excepción.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Retener con reglas!' : 'Ese aumento necesita un criterio.'],
      };
    },
    rules: [[BP, 'Separa la retención temporal (bono atado a un hito) del ajuste permanente (con criterio objetivo).']],
    mirada: {
      ve: 'Un 30 % al sueldo base resuelve la urgencia de hoy y crea una diferencia permanente que habrá que explicar siempre. Hay formas de retener que no rompen la estructura.',
      visual: { tipo: 'balanza', a: { t: '30 % permanente', items: ['S/ 3,600 más cada mes, para siempre', 'Supera el P75 de su mercado'] }, b: { t: 'Bono + ajuste documentado', items: ['Ajuste al P50: S/ 1,800 al mes', 'Bono único al cerrar el proyecto', 'Criterio que se puede explicar'] } },
    },
  },
  {
    id: 'f3', t: '11:40', ch: 'llamada', who: null, titulo: 'Tres voces sobre Álvaro', banner: 'assets/foto/llamada.webp', lugar: 'Sala 9B', show: ['calidad', 'personas'],
    body: () => `<p>Gustavo te autoriza a tener una conversación de permanencia con Álvaro, con Renzo al tanto. Antes, haces dos llamadas más.</p><p><mark class="clave">Quieres saber si la escasez es real</mark> o solo urgencia de Renzo.</p>`,
    type: 'calls',
    calls: [
      ['Ejecutiva de Pulso Salarial', 'Contesta desde un taxi', '«Arquitectos de red con nube: P50 S/ 13,800, P75 S/ 15,800. Hay pocos en Lima y las fintech los están pagando por encima. La escasez es real; el 30 % los pone casi en el P75.»'],
      ['Rocío Benavides · Selección', 'Contesta con un candidato esperando', '«El año pasado buscamos un perfil parecido seis meses y se cayeron dos finalistas por sueldo. Si Álvaro se va, no lo reemplazamos antes de marzo.»'],
      ['Álvaro Ruiz · arquitecto de red · 34 años · de Tarapoto', 'Contesta con el ruido del NOC de fondo', '«La plata ayuda, no te voy a mentir: mis papás están en San Martín y les mando todos los meses. Pero lo que me cansa es que hace un año pedí liderar el equipo de nube y nada. Allá me dan un equipo.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué concluyes?',
    choices: [
      { id: 'a', label: 'La escasez es real y está documentada; justifica acercarlo a su mercado. Pero lo que más pesa es liderar: eso lo tiene que responder Renzo.',
        res: { q: 'buena', fx: { calidad: 5, personas: 3 }, flags: ['alvaro_liderar'], cartera: { mercado: 'Escasez real: P50 13,800 · P75 15,800' },
          out: 'Le escribes a Renzo: «Parte es mercado y se puede corregir con criterio. Parte es liderazgo, y eso no lo arregla Compensaciones». Él responde con un solo «ok» y luego: «tienes razón».',
          pro: { ok: 'Validas el criterio con datos y devuelves al gerente lo que es suyo.', info: 'Si Álvaro va a liderar, valora el nuevo puesto con los factores del cuadro.' },
          kusi: ['feliz', '¡Dato y persona, juntos!'] } },
      { id: 'b', label: 'La escasez es real: el 30 % está justificado.',
        res: { q: 'aceptable', fx: { calidad: 2 }, cartera: { mercado: 'Escasez real: 30 % parece justificado' },
          out: 'El dato respalda una parte del pedido. Pero 30 % lo deja casi en el P75 y no toca lo que Álvaro dijo que le cansa.',
          pro: { ok: 'Usas un criterio objetivo.', risk: 'El criterio justifica acercarlo a su mercado, no necesariamente al tope.' },
          kusi: ['pensando', '¿Y lo de liderar?'] } },
      { id: 'c', label: 'Si dice que no es solo plata, no hay que darle nada.',
        res: { q: 'riesgosa', fx: { calidad: -3, personas: -3 },
          out: 'Concluyes que el sueldo no importa. Álvaro te dijo que sí importa, solo que no es lo único.',
          pro: { risk: 'Escuchar a medias lleva a la conclusión equivocada.' }, kusi: ['triste', 'Escuchaste solo la mitad.'] } },
    ],
    rules: [[LEY, 'Ley 30709 y su reglamento (D.S. 002-2018-TR): la escasez de mano de obra calificada es un criterio objetivo, si se acredita con datos y se aplica de forma consistente.']],
    mirada: {
      ve: 'La escasez de talento es un criterio legítimo, pero hay que probarla con datos, no con urgencia. Y escuchar a la persona suele revelar que la solución no está solo en Compensaciones.',
    },
  },
  {
    id: 'f4', t: '13:15', ch: 'presencial', who: null, titulo: 'Una técnica en recepción', banner: 'assets/foto2/pasillo.webp', lugar: 'Recepción del piso 9', show: ['personas', 'tiempo'],
    body: () => `<p>Vas a almorzar cuando la recepcionista te llama: hay una técnica preguntando por ti. Es Yesenia Huamán, la de Ate, con el casco en la mano y el chaleco puesto.</p><p>«Disculpe, ingeniera. Necesito una constancia de mis ingresos para el banco, <mark class="clave">hoy cierra la evaluación de mi crédito</mark>. En Planillas me dijeron que en tres días.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Acompañarla a Planillas, explicar la urgencia y pedir que la emitan hoy con la firma que corresponde.',
        res: { q: 'buena', fx: { personas: 4, tiempo: -2 }, flags: ['yesenia_atendida'], cartera: { constancia: 'Emitida hoy por Planillas' },
          out: 'En Planillas la sacan en veinte minutos: el formato ya existía, solo faltaba que alguien lo pidiera bien. Te comes un pan con pollo de la máquina a las 3 p. m.',
          pro: { ok: 'Resuelves por el canal correcto y no haces esperar a quien no puede esperar.', info: 'Propón a Planillas un plazo de 24 horas para constancias: es un pedido frecuente.' },
          kusi: ['celebra', '¡Un crédito salvado en 20 minutos!'] } },
      { id: 'b', label: 'Sacarle tú misma un reporte del sistema con su sueldo y firmarlo.',
        res: { q: 'riesgosa', fx: { personas: 2, cumplimiento: -3 }, cartera: { constancia: 'Reporte firmado sin facultad' },
          out: 'El banco rechaza el papel: no tiene el formato ni la firma autorizada. Yesenia vuelve a Ate sin constancia.',
          pro: { ok: 'Quieres ayudar rápido.', risk: 'Firmar documentos que no te corresponden no sirve y te expone.' },
          kusi: ['preocupado', 'Ese papel no tenía validez.'] } },
      { id: 'c', label: 'Explicarle que eso es de Planillas y que el plazo es de tres días.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -3 },
          out: 'Yesenia asiente y se va. El ascensor tarda; la ves mirar el celular con los ojos rojos.',
          pro: { ok: 'Respetas los roles.', risk: 'A veces respetar el proceso es acompañar a la persona hasta él.' },
          kusi: ['triste', 'Bajó sin su constancia.'] } },
    ],
    mirada: {
      ve: 'Entre excepciones de 30 % y comités, los pedidos pequeños también son tu trabajo. Para alguien de campo, una constancia a tiempo dice más de la empresa que cualquier política.',
    },
  },
  {
    id: 'f5', t: '15:10', ch: 'presencial', who: 'renzo', titulo: '«¿Sí o no?»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Gustavo, con Renzo y Gustavo', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Renzo entra a la oficina de Gustavo sin tocar. «Necesito una respuesta hoy. ¿Sí o no al 30 %? Si es no, lo llevo a Gerencia General.»</p><p>${F.has('analistas_todas') ? 'En tu laptop está el costo de corregir a las once analistas, que también sale del 4 %.' : 'En tu laptop está el caso de Claudia, que también sale del 4 %.'} Gustavo te mira: <mark class="clave">«Tú hiciste el análisis. Dilo tú»</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer un ajuste al P50 de su mercado, documentado por escasez, más un bono de retención al cerrar la migración; y que Renzo le ofrezca liderar el equipo de nube, con su nueva valoración.',
        res: { q: 'buena', fx: { etica: 4, calidad: 5, cumplimiento: 3 }, rel: { renzo: 0, gustavo: 1 }, flags: ['excepcion_criterio'], cartera: { alvaro: 'Ajuste a P50 + bono a marzo + propuesta de liderazgo' },
          out: 'Renzo se cruza de brazos. «¿Y si no le alcanza?» Gustavo responde por ti: «Entonces no era la plata». A las 5 p. m., Renzo escribe: «Le ofrecí el equipo. Lo está pensando».',
          pro: { ok: 'Das una respuesta que se puede explicar a cualquier otro trabajador y atacas la razón real.', risk: 'Álvaro podría irse igual.', info: 'Deja por escrito el criterio para que se aplique igual a otros arquitectos en su situación.' },
          kusi: ['animo', '¡Sí, con reglas!'] } },
      { id: 'b', label: 'Aprobar el 30 %, justificándolo por escasez de mano de obra calificada con el dato de la consultora.',
        res: { q: 'aceptable', fx: { etica: 0, calidad: 1, cumplimiento: 1 }, rel: { renzo: 1 }, flags: ['excepcion_mercado'], cartera: { alvaro: '30 % justificado por escasez' },
          out: 'Renzo sale satisfecho. Gustavo se queda mirando el número: «Lo dejaste casi en el P75. El comité va a preguntar por qué a él sí y a otros con perfiles escasos no».',
          pro: { ok: 'Usas un criterio objetivo y verificable.', risk: 'El criterio justifica acercarlo a su mercado, no el monto máximo; y no resuelve lo de liderar.' },
          kusi: ['pensando', 'Criterio válido… ¿monto justo?'] } },
      { id: 'c', label: 'Aprobar el 30 % como pide Renzo: perder el proyecto cuesta más que cualquier aumento.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4 }, rel: { renzo: 1, gustavo: -1 }, flags: ['excepcion_cede'], cartera: { alvaro: '30 % por presión del gerente' },
          out: 'Renzo agradece y se va. Gustavo cierra la puerta: «Acabamos de explicarle a Claudia que todo se decide con criterios. ¿Cuál es el criterio aquí?».',
          pro: { ok: 'Aseguras, quizás, el proyecto.', risk: 'Una excepción sin criterio desarma todo el trabajo de equidad de la semana pasada.' },
          kusi: ['preocupado', '¿Y el criterio?'] } },
    ],
    rules: [[LEY, 'Ley 30709 y su reglamento (D.S. 002-2018-TR): la diferencia salarial dentro de una categoría debe apoyarse en un criterio objetivo, verificable y aplicado de forma consistente.'], [BP, 'Una excepción bien hecha se puede explicar a cualquier otro trabajador.']],
    mirada: {
      ve: 'La prueba de una excepción es simple: ¿podrías explicársela a Claudia, a Yesenia o a cualquier otro trabajador sin incomodarte? Si sí, probablemente tiene criterio. Si no, es un favor.',
      normas: [{ ley: 'Ley 30709 y D.S. 002-2018-TR', dice: 'La escasez de mano de obra calificada puede justificar diferencias dentro de una categoría si se acredita y se aplica de forma consistente.', practica: 'El dato de mercado de Álvaro justifica acercarlo a su P50; el resto necesita otra razón.' }],
    },
  },
  {
    id: 'f6', t: '16:40', ch: 'documento', who: null, titulo: 'Una regla para la próxima vez', banner: 'assets/esc/escalera.webp', lugar: 'Tu escritorio · «POLITICA_EXCEPCIONES_borrador.docx»', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Gustavo te pide algo que no existe en AndesTel: <mark class="clave">una regla para las excepciones</mark>. «Si no la escribimos hoy, la próxima la decide quien grite más.»</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos que todo pedido de excepción debería seguir.', boton: 'Enviar el borrador a Gustavo',
    items: [
      { id: 'pedido', t: 'Recibir el pedido por escrito, con el motivo y el plazo', por: 'Nada de pasillos ni WhatsApp.' },
      { id: 'crit', t: 'Identificar qué criterio objetivo podría justificarlo', por: 'Escasez, desempeño, cambio de funciones…' },
      { id: 'datos', t: 'Probar el criterio con datos (mercado, evaluación, valoración del puesto)', por: 'Sin dato, no hay criterio.' },
      { id: 'cons', t: 'Revisar a quién más debería aplicarse el mismo criterio', por: 'Consistencia: lo que vale para uno, vale para todos.' },
      { id: 'aprob', t: 'Aprobar en Compensaciones y Gestión Humana, con registro', por: 'Quién aprobó, cuándo y por qué.' },
      { id: 'com', t: 'Informar a la persona su nuevo esquema y la política que lo sustenta', por: 'La política se informa también cuando cambia el esquema remunerativo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { gustavo: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['regla_excepciones'] : [],
        cartera: { regla: q === 'buena' ? 'Borrador de regla listo para el comité' : 'Borrador con pasos desordenados' },
        out: q === 'buena' ? 'Gustavo lo reenvía a Fiorella con un comentario: «Esto debió existir hace diez años».' : 'Gustavo mueve dos pasos: «Si apruebas antes de probar el criterio, la regla no sirve».',
        pro: { ok: 'La regla obliga a probar el criterio y a revisar la consistencia, que es lo que pide la autoridad.', info: 'Agrega un plazo de respuesta: las urgencias reales también necesitan reglas rápidas.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡La próxima excepción ya tiene camino!' : 'Primero el dato, luego la firma.'],
      };
    },
    rules: [[LEY, 'Resolución 0047-2025-SUNAFIL/TFL: no basta con enunciar factores en la política salarial; hay que explicar cómo justifican cada diferencia.']],
    mirada: {
      ve: 'Las excepciones van a seguir llegando. Una regla no las prohíbe: las ordena para que todas se decidan igual, con datos y con registro.',
      visual: { tipo: 'flujo', titulo: 'El camino de una excepción', pasos: ['Pedido escrito', 'Criterio', 'Datos', 'Consistencia', 'Aprobación', 'Comunicación'] },
    },
  },
  {
    id: 'f7', t: '18:35', ch: 'whatsapp', who: 'gustavo', titulo: 'Mañana, el simulador', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio, con la lluvia en la ventana', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Llovizna sobre la avenida Camino Real. ${F.has('excepcion_cede') ? 'Todavía te pesa el 30 %.' : 'Fue un día largo, pero la regla quedó escrita.'} Mañana armas el simulador para repartir el 4 %.</p><p>Gustavo te pide que le digas <mark class="clave">qué debe entrar sí o sí</mark>.</p>`,
    type: 'compose', enviaA: 'gustavo', para: 'Para: Gustavo Herrera', boton: 'Enviar el WhatsApp',
    prompt: 'Elige una frase de cada parte.',
    slots: [
      { id: 'eq', t: 'Equidad', ops: [
        { id: 'e1', t: 'Una línea propia para cerrar las brechas de redes, separada de la matriz de desempeño.', ok: true, por: 'Así no compite con el desempeño.' },
        { id: 'e2', t: 'Lo de Claudia lo vemos al final si sobra.', ok: false, por: 'Lo que «sobra» nunca sobra.' },
      ] },
      { id: 'merc', t: 'Mercado', ops: [
        { id: 'm1', t: 'Los técnicos de campo, con al menos dos escenarios para acercarlos al P50.', ok: true, por: 'Es la brecha que más rotación causa.' },
        { id: 'm2', t: 'Un 4 % parejo para técnicos.', ok: false, por: 'No cambia su posición frente al mercado.' },
      ] },
      { id: 'exc', t: 'Excepciones', ops: [
        { id: 'x1', t: 'Una reserva pequeña para escasez de talento, con la regla nueva.', ok: true, por: 'Las excepciones también se planifican.' },
        { id: 'x2', t: 'Lo que pida cada gerente.', ok: false, por: 'Vuelves al punto de partida.' },
      ] },
    ],
    res: sel => {
      const buenas = ['e1', 'm1', 'x1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { gustavo: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Gustavo responde: «Esas tres pestañas mañana a primera hora. Trae café: va a ser largo».' : 'Gustavo responde: «Mañana lo afinamos». Te vas pensando qué faltó.',
        pro: { ok: 'Equidad, mercado y excepciones: los tres bolsillos del presupuesto.', info: 'Define desde ya cuánto pesa cada bolsillo antes de llenar el simulador.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Simulador con estructura!' : 'Casi: tres bolsillos.'],
      };
    },
    mirada: { ve: 'Un presupuesto de incrementos tiene bolsillos: equidad, mercado, desempeño y excepciones. Decidir cuánto va a cada uno es la decisión más importante de la revisión.' },
  },
];
