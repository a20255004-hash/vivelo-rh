// HR Business Partner · Capítulo 3 · «En la ruta» · Semana 1, miércoles.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo (D.S. 007-2002-TR), art. 5: no están
//   comprendidos en la jornada máxima los trabajadores de dirección, los no sujetos a fiscalización inmediata y los que
//   prestan servicios intermitentes de espera, vigilancia o custodia.
// - Su reglamento (D.S. 008-2002-TR), art. 10: la exclusión se basa en una fiscalización real y efectiva, no en la sola
//   posibilidad de supervisar.
//   https://noticierocontable.com/decreto-supremo-007-2002-tr
//   https://lpderecho.pe/existe-precision-alcance-normativo-exclusion-trabajadores-sujetos-fiscalizacion-inmediata/

export const CAP = {
  n: 3, titulo: 'En la ruta', dia: 'Semana 1, miércoles', foto: 'assets/foto2/caminan.webp',
  lugar: 'Ruta de San Juan de Lurigancho, Lima',
  inicio: '06:30', fin: '19:45', cierreHora: '19:30',
  apertura: 'Son las 6:30 y el almacén de Santa Anita ya huele a diésel y a pan. Kenji te espera con dos cascos y una sonrisa cansada. Hoy no hay oficina: hay 48 bodegas.', boton: 'Subir a la moto',
  kusi: 'Hoy no vas a opinar: vas a mirar. Lo que veas en la calle vale más que diez Excel. ¡Dale!',
  lead: 'Viviste un día de ruta: la formación de las siete, las bodegas que no compran, el almuerzo de quince minutos y un contrato que dice una cosa mientras la jornada dice otra.',
  reflexion: '¿Qué viste hoy que nadie en la oficina sabe?',
  siguiente: { n: 4, titulo: 'Los nuevos roles', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan «de 12 zonas a 8»', j: 'Mauricio · Comercial', d: 2, e: 'Esperando lo que veas en la calle' },
  { id: 'jhon', p: 'Zona de Jhon Ruiz (SJL)', j: 'Mauricio · Comercial', d: 2, e: 'Patrón en revisión' },
  { id: 'metas', p: 'Metas de los vendedores', j: 'Mauricio · Comercial', d: 2, e: '48 bodegas al día' },
  { id: 'jornada', p: 'Jornada de los vendedores de ruta', j: 'Andrea · Gestión Humana', d: 2, e: 'Sin revisar' },
];

export const FUTURO = {
  ruta_vista: ['Viste lo que de verdad frena la venta en la ruta.', 'Lo usarás para diseñar los roles. Capítulo 4.'],
  formacion_frenada: ['Hablaste a solas con Jhon después de la formación.', 'Jhon lo recordará cuando se elija a los jefes de zona. Capítulo 5.'],
  formacion_callada: ['Viste la formación de Jhon y no hiciste nada.', 'Kenji lo notó. Capítulo 9.'],
  metas_imposibles: ['Comprobaste que la meta de 48 bodegas no cabe en una jornada.', 'Mauricio quiere subirla. Capítulo 9.'],
  kenji_abierto: ['Kenji te contó cómo vive y cuánto gana.', 'Te escribirá cuando lleguen las metas nuevas. Capítulo 9.'],
  jornada_riesgo: ['Detectaste que a los vendedores se les trata como «no fiscalizados», pero se les controla todo el día.', 'Andrea lo llevará a Relaciones Laborales. Capítulo 6.'],
  informe_ruta: ['Le mandaste a Mauricio tres hallazgos de la calle.', 'Mauricio llegará con otra idea de los roles. Capítulo 4.'],
  susana_espera: ['Le dijiste a Susana que el jueves se discuten los roles y que la escucharías.', 'Capítulo 5.'],
};

export const CHATS = {
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
  susana: { n: 'Susana Vargas', sub: 'Supervisora de ventas', who: 'susana' },
  ruta: { n: 'Zona SJL · Vendedores', sub: 'Grupo de Jhon Ruiz', c: '#C0392B' },
};

export const WSP = [
  { chat: 'ruta', t: '06:40', de: 'Jhon', txt: 'Formación 6:50 en punto. El que llega 6:51 se va a su casa. 💪🐯' },
  { chat: 'ruta', t: '10:00', de: 'Jhon', txt: 'Foto de exhibición de cada bodega, YA. Kenji, estás 3 bodegas atrás.' },
  { chat: 'kenji', t: '12:55', de: 'Kenji', txt: '(te reenvía una foto) Mira, la app dice que estuve 4 minutos «fuera de ruta». Fue para echar gasolina 🙄' },
  { chat: 'mauricio', t: '19:05', de: 'Mauricio', txt: '48 bodegas no caben en el día? Eso no me lo había dicho nadie. Mañana a las 9 lo vemos.', si: 'informe_ruta' },
  { chat: 'kenji', t: '19:40', de: 'Kenji', txt: 'Gracias por venir, en serio. Nadie de la oficina se había subido a la moto 🏍️', si: 'kenji_abierto' },
];

export const CORREOS = [
  { t: '06:05', de: 'Andrea Salazar', para: 'HR Business Partner · Comercial', asunto: 'Para la ruta', html: '<p>Mira tres cosas: cuánto dura de verdad el día, qué le impide vender a Kenji y cómo lo tratan. Lo demás, anótalo y lo vemos el jueves.</p><p>Andrea</p>' },
  { t: '15:20', de: 'Fiorella Campos · Relaciones Laborales', para: 'HR Business Partner · Comercial', asunto: 'Contratos de vendedores', html: '<p>Te adjunto el modelo de contrato de los vendedores de ruta. Andrea me pidió revisarlo contigo. Ojo con la cláusula séptima.</p><p>Fiorella</p>' },
];

export const QUIZ = [
  { q: 'Un trabajador «no sujeto a fiscalización inmediata»…', ops: ['Es cualquiera que trabaje en la calle', 'Es quien de verdad no tiene supervisión real e inmediata de su trabajo', 'Es quien firma una cláusula que lo dice', 'Es siempre un gerente'], ok: 1, por: 'La exclusión depende de la realidad: si se le controla todo el día, la cláusula no basta.' },
  { q: 'Si un vendedor tiene formación obligatoria a las 6:50, GPS y reportes cada hora…', ops: ['No tiene jornada máxima', 'Está bajo una supervisión real, y la empresa corre el riesgo de deber horas extras', 'Debe pagar su gasolina', 'Es un trabajador de dirección'], ok: 1, por: 'La fiscalización efectiva lo devuelve a la jornada máxima.' },
  { q: 'El objetivo de acompañar a un vendedor un día es…', ops: ['Evaluarlo', 'Entender el trabajo real y lo que frena la venta', 'Contarle al gerente quién trabaja menos', 'Tomar fotos para el informe'], ok: 1, por: 'Se va a entender, no a vigilar.' },
  { q: 'Ves a un supervisor humillar a un vendedor en público. Como HRBP, lo mejor es…', ops: ['Gritarle delante de todos', 'No hacer nada porque no es tu equipo', 'Hablarle a solas ese día y registrar lo que viste', 'Publicarlo en el grupo'], ok: 2, por: 'Corregir en privado y dejar constancia: sin exponer a nadie, sin quedarte callada.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '06:35', ch: 'presencial', who: 'kenji', titulo: 'El almacén', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Almacén de Santa Anita', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Kenji carga su moto con cajas de galletas y sachets de mayonesa mientras te cuenta, sin que preguntes, que a las seis ya estaba en la cola del almacén. ${F.has('rumor_calmado') ? '«Lo del mensaje de Mauricio estuvo bien, ah. Ya nadie llora en el grupo.»' : '«Ayer un pata renunció por el audio de los 100. Se fue a Gloria.»'}</p><p>Tienes media hora antes de salir. <mark class="clave">Anota solo tres cosas</mark>: las que creas que más frenan la venta.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que anotas en tu libreta.', boton: 'Anotar estas tres', resumen: 'Anotaste',
    cols: ['Lo que ves', 'Qué podría explicar'],
    rows: [
      { id: 'hoja', cells: ['La hoja de ruta tiene 48 bodegas, algunas a 20 minutos una de otra', 'Una meta que no cabe en el día'] },
      { id: 'moto', cells: ['El freno de la moto de Kenji suena; la reparación la paga él', 'Un costo que el vendedor carga solo'] },
      { id: 'stock', cells: ['Faltan dos productos que más piden las bodegas; el almacén dice «llega el viernes»', 'Ventas que se pierden por abastecimiento, no por el vendedor'] },
      { id: 'polo', cells: ['El polo de Kenji está desteñido', 'Imagen de la marca'] },
      { id: 'cola', cells: ['La cola de carga dura casi una hora', 'Una hora de venta perdida cada día'] },
    ],
    score: { hoja: 3, moto: 2, stock: 3, cola: 2, polo: 0 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -1, tiempo: -1 },
        flags: q === 'riesgosa' ? [] : ['ruta_vista'], cartera: { metas: picks.includes('hoja') ? '48 bodegas: no caben en el día' : '48 bodegas al día' },
        out: picks.includes('stock') ? 'Tu libreta empieza a decir algo incómodo: parte de lo que Mauricio llama «baja productividad» se pierde antes de que Kenji salga del almacén.' : 'Anotas lo que ves. Algunas cosas explican mucho; otras, poco.',
        pro: { ok: 'Separaste lo que depende del vendedor de lo que depende de la empresa.', risk: 'Si solo miras al vendedor, culparás a la persona de problemas del sistema.', info: 'Pregunta en el almacén cada cuánto falta stock: puede ser un patrón.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ojo de HRBP de calle!' : '¿Qué frena la venta antes de salir?'],
      };
    },
    rules: [[BP, 'Antes de culpar al vendedor, mira lo que la empresa le da: ruta, stock, herramientas y tiempo.']],
    mirada: {
      ve: 'Cuando las ventas no crecen, la primera sospecha cae sobre el vendedor. Pero en el almacén ya se pierden una hora de ruta y dos productos que las bodegas piden. Eso no se arregla cerrando zonas.',
      visual: { tipo: 'embudo', titulo: 'Las 48 bodegas de Kenji', niveles: [['En la hoja de ruta', 48], ['Las que alcanza a visitar', 36], ['Las que compran', 21]] },
    },
  },
  {
    id: 'r2', t: '06:55', ch: 'presencial', who: null, titulo: 'La formación de las siete', banner: 'assets/foto2/grito.webp', lugar: 'Patio del almacén', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Jhon Ruiz pone a los 22 vendedores en fila. ${F.has('nombres_entregados') ? 'Te mira un segundo de más: sabe que alguien habló de él.' : 'Te saluda con un apretón fuerte: «Bienvenida a la mejor zona de Lima».'} Lee los resultados de ayer en voz alta.</p><p>Cuando llega a Kenji: «Tamashiro, 19 de 48. ¿Viniste a pasear? <mark class="clave">Con japonesitos así no llegamos a nada</mark>». Algunos se ríen. Kenji mira el piso.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No decir nada frente al grupo. Al terminar, pedirle a Jhon dos minutos a solas: lo que dijo no puede repetirse. Y anotarlo con hora y palabras.',
        res: { q: 'buena', fx: { etica: 4, personas: 3, confianza: 1 }, rel: { kenji: 1 }, flags: ['formacion_frenada'], cartera: { jhon: 'Formación de las 7: comentario discriminatorio registrado' },
          out: 'Jhon se pone a la defensiva: «Es broma, acá todos nos decimos así». Le respondes que una broma sobre el origen de alguien, delante de todos, no es broma para quien la recibe. Se va sin despedirse. Kenji te ve volver y no dice nada, pero arranca la moto más tranquilo.',
          pro: { ok: 'Corriges sin humillar a Jhon y dejas constancia.', risk: 'Jhon puede tomarlo como un ataque personal.', info: 'Lo que viste confirma el patrón de las llamadas de ayer: va a la revisión con Andrea.' },
          kusi: ['animo', 'Firme y en privado. Así.'] } },
      { id: 'b', label: 'Interrumpir la formación y decirle a Jhon, frente a todos, que eso es discriminación.',
        res: { q: 'aceptable', fx: { etica: 3, personas: 1, confianza: -3 }, rel: { kenji: 0 }, flags: ['formacion_frenada'],
          out: 'Se hace un silencio largo. Jhon sonríe: «Ya, señorita de RR.HH.». Los vendedores te miran raro. Kenji te pide que no vuelvas a hacerlo: «Después la paga uno».',
          pro: { ok: 'Nadie puede decir que no reaccionaste.', risk: 'Exponer a Jhon delante de su equipo lo vuelve un pleito de autoridad, y quien queda en medio es Kenji.' },
          kusi: ['sorpresa', 'Valiente… pero Kenji queda en medio.'] } },
      { id: 'c', label: 'Dejarlo pasar: viniste a observar la ruta, no a supervisar a Jhon.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -3 }, rel: { kenji: -1 }, flags: ['formacion_callada'],
          out: 'La formación sigue. En la moto, Kenji no habla durante media hora.',
          pro: { ok: 'Respetas tu rol de observadora.', risk: 'Observar no significa callar frente a una humillación por el origen de alguien.' },
          kusi: ['triste', 'Kenji esperaba que alguien dijera algo.'] } },
    ],
    rules: [[BP, 'Una burla por el origen de alguien no es una broma de equipo. Se corrige en privado, ese mismo día, y se registra.']],
    mirada: {
      ve: 'Jhon cree que presionar es liderar, y sus números lo han premiado por eso. El HRBP no puede cambiarlo en una mañana, pero sí dejar claro que hay cosas que no se dicen y que lo que vio queda registrado.',
      visual: { tipo: 'cambio', titulo: 'Presionar no es humillar', pares: [['«¿Viniste a pasear?»', '«¿Qué te frenó ayer?»'], ['Resultados leídos en voz alta', 'Resultados conversados uno a uno'], ['Bromas por el origen', 'Respeto delante de todos']] },
    },
  },
  {
    id: 'r3', t: '10:20', ch: 'presencial', who: null, titulo: 'Las bodegas', banner: 'assets/3d/scenes/retail.webp', lugar: 'Canto Grande, San Juan de Lurigancho', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>El sol ya pica. Kenji para la moto, saluda a cada bodeguera por su nombre y saca la tablet con la batería al 30 %. Tú te quedas a un lado, con el casco en la mano.</p><p><mark class="clave">Escuchas tres visitas seguidas</mark>.</p>`,
    type: 'calls',
    calls: [['Bodega Doña Rosa · cliente de hace dos años', 'Atiende la señora Rosa, con su nieto en brazos', '«Kenjicito, ¿y la mayonesa de sachet? La semana pasada tampoco había. Le compré al de la competencia, pues, hijito.» Kenji vende la mitad de lo planeado.'], ['Minimarket Los Andes · cliente nuevo', 'Atiende don Fausto, que habla con su esposa en quechua', 'Don Fausto pide crédito a quince días. Kenji le explica que el sistema no le permite dar crédito a clientes nuevos. «Entonces vuelve cuando me conozcas», dice, amable. Veinte minutos sin venta.'], ['Bodega El Chino · cliente fuerte', 'Atiende el dueño, apurado', 'Compra rápido y bastante. Kenji tarda más en tomar la foto de exhibición para el grupo de Jhon que en tomar el pedido.']],
    prompt: 'Escuchaste tres visitas. ¿Qué concluyes?',
    choices: [
      { id: 'a', label: 'Que una parte grande de la venta perdida viene del stock, las reglas de crédito y el tiempo que se va en reportar, no de Kenji.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 2 }, flags: ['metas_imposibles'], cartera: { metas: 'Stock, crédito y reportes frenan la venta' },
          out: 'Haces cuentas en tu libreta: a este ritmo, Kenji no llega a 48 bodegas ni aunque no almuerce. La meta está diseñada para un día que no existe.',
          pro: { ok: 'Encuentras causas que dependen de la empresa y que se pueden corregir.', info: 'Lleva esto a Mauricio en el idioma del negocio: ventas perdidas por stock y por crédito.' },
          kusi: ['celebra', '¡Ahí está la venta perdida!'] } },
      { id: 'b', label: 'Que Kenji pierde mucho tiempo conversando con los clientes.',
        res: { q: 'riesgosa', fx: { calidad: -3, personas: -2 }, rel: { kenji: -1 },
          out: 'Lo anotas. Más tarde, la señora Rosa te dice que ella le compra a Kenji «porque conversa, no como los otros».',
          pro: { ok: 'Miras la productividad.', risk: 'Confundes la relación con el cliente, que es lo que vende, con pérdida de tiempo.' },
          kusi: ['pensando', '¿Y si conversar es lo que vende?'] } },
    ],
    rules: [[BP, 'Distingue lo que el vendedor controla de lo que no: no se mide igual una venta perdida por falta de stock que una perdida por falta de esfuerzo.']],
    mirada: {
      ve: 'El plan de Mauricio supone que con menos zonas y más presión se venderá más. La calle dice otra cosa: sin stock, sin crédito para clientes nuevos y con la mitad del día en reportes, ningún vendedor llega a la meta.',
      visual: { tipo: 'balanza', a: { t: 'Lo que depende de Kenji', items: ['Visitar', 'Conversar', 'Ofrecer'] }, b: { t: 'Lo que depende de la empresa', items: ['Stock que no llega', 'Crédito que no se da', 'Reportes cada hora', 'Ruta de 48 bodegas'] } },
    },
  },
  {
    id: 'r4', t: '13:40', ch: 'presencial', who: 'kenji', titulo: 'Quince minutos de almuerzo', banner: 'assets/foto/cafe.webp', lugar: 'Un menú del mercado de Canto Grande', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Kenji come un seco con frejoles en quince minutos, con el celular en la mesa por si escribe Jhon. ${F.has('formacion_frenada') ? 'Te dice, sin mirarte: «Gracias por lo de la mañana».' : 'Está callado.'}</p><p>Es la primera vez en el día que puede hablar sin apuro. <mark class="clave">Hazle dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Kenji.',
    opts: [
      { id: 'sueldo', label: '«¿Cómo se arma lo que ganas a fin de mes?»', info: '«Un básico y la comisión. Si llego al 100 % de la meta, junto un buen sueldo. Pero este año solo llegué dos meses. El resto, el básico y algo. Y la gasolina de la moto la pongo yo.»' },
      { id: 'horas', label: '«¿A qué hora terminas de verdad?»', info: '«Salgo de la última bodega a las seis y media. Luego el cierre en la tablet, la liquidación en el almacén… A las ocho llego a Huaycán. Mi contrato dice que no tengo horario, pero a las 6:50 tengo que estar en la formación.»' },
      { id: 'quedar', label: '«¿Qué te haría quedarte cinco años más?»', info: 'Se ríe. «Una meta que se pueda cumplir. Que no me griten. Y que la moto no me cueste a mí. No pido más, de verdad.»' },
      { id: 'jhon', label: '«¿Jhon es así con todos?»', info: 'Kenji mira alrededor antes de contestar. «Con los que no llegan. A mí me dice "chino" o "japonesito". A Alexis le daba las rutas más feas por venezolano. Pero yo eso no lo dije, ¿ya?»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, confianza: 2, calidad: 2 }, rel: { kenji: 1 }, flags: ['kenji_abierto'].concat(picks.includes('horas') ? ['horario_real'] : []),
      out: 'Kenji paga su menú y el tuyo antes de que puedas sacar la billetera. «La próxima invitas tú, cuando me suban la comisión», bromea, y vuelve a la moto.',
      kusi: ['feliz', 'En quince minutos te contó lo que no dice ningún Excel.'],
    }),
    rules: [[BP, 'Pregunta qué haría quedarse a alguien: suele decirte más que preguntar por qué se van los otros.']],
    mirada: {
      ve: 'Kenji no pide mucho: una meta posible, respeto y que su herramienta de trabajo no le cueste a él. Eso que parece pequeño es lo que separa una zona que rota de una que retiene.',
      visual: { tipo: 'linea', titulo: 'El día real de Kenji', hitos: [['06:00', 'Cola del almacén'], ['06:50', 'Formación'], ['07:30', 'Primera bodega'], ['13:40', 'Almuerzo de 15 minutos'], ['18:30', 'Última bodega'], ['19:30', 'Liquidación'], ['20:00', 'Llega a Huaycán']] },
    },
  },
  {
    id: 'r5', t: '15:30', ch: 'documento', who: null, titulo: 'La cláusula séptima', banner: 'assets/foto/revisa.webp', lugar: 'Sentada en la vereda, con el celular', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Mientras Kenji espera a que un bodeguero cuente sus monedas, abres el contrato que te mandó Fiorella. ${F.has('horario_real') ? 'Tienes fresca la frase de Kenji: «Mi contrato dice que no tengo horario».' : 'La cláusula séptima está resaltada.'}</p><p><mark class="clave">Marca lo que no cuadra</mark> con lo que llevas viendo desde las seis de la mañana.</p>`,
    type: 'flag', prompt: 'Marca las cláusulas que no cuadran con la ley o con el trabajo real.',
    doc: { t: 'Contrato de vendedor de ruta · extracto', sub: 'Nutrimás S.A. · modelo vigente desde 2023' },
    lines: [
      { id: 'funcion', t: 'Primera: el trabajador realizará la venta y distribución de productos en la zona asignada.' },
      { id: 'septima', t: 'Séptima: por la naturaleza de sus labores, el trabajador no está sujeto a fiscalización inmediata y no está comprendido en la jornada máxima.', bad: LEY, why: 'Kenji tiene formación obligatoria a las 6:50, GPS, reportes con foto cada hora y aviso de «fuera de ruta». La exclusión de la jornada máxima depende de que no haya una supervisión real y efectiva, no de lo que diga el contrato (D.S. 007-2002-TR, art. 5; D.S. 008-2002-TR, art. 10).' },
      { id: 'formacion', t: 'Octava: el trabajador asistirá a la formación diaria de su supervisor a la hora que este indique.', bad: LEY, why: 'Una hora de ingreso fija y obligatoria es control inmediato. Contradice la cláusula séptima.' },
      { id: 'moto', t: 'Novena: los gastos de mantenimiento del vehículo de reparto corren por cuenta del trabajador.', bad: BP, duda: 'Es un acuerdo que conviene revisar con Relaciones Laborales y Compensaciones.', why: 'Si la moto es la herramienta de trabajo, que la pague el vendedor traslada a él un costo del negocio y empuja la rotación.' },
      { id: 'meta', t: 'Décima: las metas comerciales serán fijadas mensualmente por la Gerencia Comercial.' },
      { id: 'reserva', t: 'Undécima: el trabajador guardará reserva sobre precios y condiciones comerciales.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le respondes a Fiorella con un comentario sobre la moto. La cláusula séptima sigue ahí, igual para los 240 vendedores.' : `Le escribes a Fiorella: ${hitsLey} cláusulas chocan con la realidad. «Si un vendedor reclama horas extras, esta cláusula no nos protege», te responde. «Lo llevo con Andrea.»`,
      flags: missLey ? [] : ['jornada_riesgo'], cartera: { jornada: missLey ? 'Sin revisar' : 'Cláusula séptima en revisión con Relaciones Laborales' },
      pro: { ok: 'Viste que el riesgo no está en el papel, sino en la distancia entre el papel y el día real.', risk: 'Una cláusula que no se cumple en la práctica es un riesgo para la empresa y una injusticia para el vendedor.', info: 'La solución no es quitarle el GPS a Kenji: es decidir si se le controla o no, y pagar en consecuencia.' },
      kusi: missLey ? ['preocupado', 'El papel decía una cosa y la calle otra…'] : ['celebra', '¡El contrato no aguanta un día de ruta!'],
    }),
    rules: [[LEY, 'D.S. 007-2002-TR, art. 5: quedan fuera de la jornada máxima los trabajadores no sujetos a fiscalización inmediata.'], [LEY, 'D.S. 008-2002-TR, art. 10: esa exclusión supone que no haya una supervisión real y efectiva.']],
    mirada: {
      ve: 'Llamar a alguien «no fiscalizado» no lo vuelve libre de horario. Si la empresa decide a qué hora entra, por dónde va y le pide fotos cada hora, lo está controlando. Y el control tiene un costo que el contrato no puede esconder.',
      visual: { tipo: 'balanza', a: { t: 'Lo que dice el contrato', items: ['Sin fiscalización inmediata', 'Sin jornada máxima'] }, b: { t: 'Lo que pasa en la calle', items: ['Formación a las 6:50', 'GPS y «fuera de ruta»', 'Fotos cada hora', 'Trece horas de jornada'] } },
      normas: [{ ley: 'D.S. 007-2002-TR, art. 5, y D.S. 008-2002-TR, art. 10', dice: 'No están comprendidos en la jornada máxima los trabajadores de dirección, los no sujetos a fiscalización inmediata y los que prestan servicios intermitentes. El reglamento exige mirar si hay una fiscalización real y efectiva.', practica: 'Si al vendedor se le fija la hora de ingreso y se le sigue por GPS, la cláusula no basta para excluirlo de la jornada máxima.' }],
    },
  },
  {
    id: 'r6', t: '18:45', ch: 'whatsapp', who: null, titulo: 'Lo que vio la calle', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida Próceres', show: ['confianza', 'calidad', 'tiempo'],
    body: () => `<p>Kenji se va a liquidar al almacén. Tú esperas el bus en Próceres con los pies hechos polvo y la cara ardiendo de sol. Mañana a las 9 Mauricio quiere diseñar los roles.</p><p>Le escribes ahora, <mark class="clave">mientras lo tienes fresco</mark>.</p>`,
    type: 'compose', enviaA: 'mauricio', para: 'Para: Mauricio Lerner · Gerente Comercial', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hallazgo', t: 'Lo principal', ops: [
        { id: 'h1', t: 'Mauricio, hoy vi que la meta de 48 bodegas no cabe en el día: Kenji, que es bueno, alcanza 36.', ok: true, por: 'Un dato concreto, dicho en su idioma.' },
        { id: 'h2', t: 'Mauricio, los vendedores la pasan muy mal.', ok: false, por: 'Es verdad, pero así no lo va a escuchar.' },
      ] },
      { id: 'causa', t: 'Por qué', ops: [
        { id: 'c1', t: 'Se pierde venta por stock que no llega, por no poder dar crédito a clientes nuevos y por el tiempo de los reportes.', ok: true, por: 'Causas que él puede corregir.' },
        { id: 'c2', t: 'Y los supervisores como Jhon los tratan horrible.', ok: false, por: 'Es un tema serio, pero va por la revisión formal, no por WhatsApp.' },
      ] },
      { id: 'pedido', t: 'Qué le propones', ops: [
        { id: 'p1', t: 'Mañana te propongo diseñar los roles a partir de esto: quién resuelve stock, crédito y ruta.', ok: true, por: 'Conecta la calle con la decisión de mañana.' },
        { id: 'p2', t: 'Creo que deberías olvidarte de reducir zonas.', ok: false, por: 'Lo pone a la defensiva y no le da camino.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : 0 }, rel: { mauricio: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['informe_ruta'] : [], cartera: { plan: q === 'buena' ? 'Mauricio quiere ver stock, crédito y ruta' : 'Mauricio sigue con el mapa' },
        out: q === 'buena' ? 'Mauricio contesta a las 19:05. No dice «ok»: hace una pregunta. Es la primera vez.' : 'Mauricio lo deja en visto.',
        pro: { ok: 'Le diste al gerente un dato, una causa y un paso para mañana.', info: 'El trato de Jhon tiene su propio camino: la revisión con Andrea y Relaciones Laborales.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La calle llegó a la gerencia!' : 'Tenías la información. Faltó el cómo.'],
      };
    },
    rules: [[BP, 'Lleva lo que viste al idioma del negocio: venta perdida, causa y un paso concreto.']],
    mirada: {
      ve: 'Un HRBP que sale a la calle trae algo que nadie más en la gerencia tiene: la versión de quien hace el trabajo. Pero esa versión solo sirve si llega a tiempo y en el idioma de quien decide.',
      visual: { tipo: 'mensaje', titulo: 'Lo que le escribiste a Mauricio', txt: 'La meta de 48 bodegas no cabe en el día. Se pierde venta por stock, por crédito y por reportes. Mañana diseñemos los roles a partir de eso.' },
    },
  },
  {
    id: 'r7', t: '19:25', ch: 'whatsapp', who: 'susana', titulo: 'Susana escribe', banner: 'assets/foto2/pasillo.webp', lugar: 'En el bus, por la Carretera Central', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>El bus avanza a paso de tortuga. Te escribe Susana: «Dicen que mañana se deciden los roles y que los supervisores desaparecen. ${F.has('susana_mentira') ? 'Tú me dijiste que no habría cambios para mí. ¿Sigue siendo así?' : 'Tú me dijiste que me ibas a avisar a tiempo.'} <mark class="clave">¿Qué sabes?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responderle que mañana se trabaja el diseño de los roles, no los nombres; que no hay nada decidido sobre personas y que el viernes la buscas para escucharla.',
        res: { q: 'buena', fx: { personas: 3, etica: 3 }, rel: { susana: 1 }, flags: ['susana_espera'],
          envia: ['susana', 'Susana: «Ya. El viernes entonces. Gracias por contestar a esta hora.»'],
          out: 'Susana responde con un «ya» y un corazón. No le diste certezas, pero tampoco la dejaste en visto.',
          pro: { ok: 'Dices lo que es verdad y te comprometes con un momento concreto.', risk: 'El viernes tendrás que cumplir.' },
          kusi: ['animo', 'Verdad posible y una fecha.'] } },
      { id: 'b', label: 'Dejar el mensaje para mañana: estás agotada y no quieres decir algo mal.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 1 }, rel: { susana: -1 },
          out: 'A las 22:10, Susana manda otro mensaje: «Ok, entiendo». Duele más que si te hubiera reclamado.',
          pro: { ok: 'Evitas responder cansada.', risk: 'El silencio, para quien tiene miedo, es una respuesta.' },
          kusi: ['triste', 'Un «mañana te cuento» bastaba.'] } },
    ],
    mirada: { ve: 'Las personas que esperan una decisión leen todo: lo que dices, lo que no dices y cuánto tardas. A veces basta un mensaje corto y verdadero para que la incertidumbre no se vuelva desconfianza.' },
  },
];
