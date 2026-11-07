// Practicante profesional en una ORH del Estado · Capítulo 8 · «Transparencia» · Semana 2, miércoles.
// Hilo: la Sra. Elvira Condori, madre de una postulante declarada no apta, pide información del concurso CAS 012-2026 y sospecha «argolla».
// Normas citadas:
// - Ley 27806, Ley de Transparencia y Acceso a la Información Pública (TUO aprobado por D.S. 021-2019-JUS): toda persona puede pedir
//   información que tenga la entidad, sin expresar la causa; la entidad responde dentro del plazo legal; se exceptúa la información
//   confidencial, como los datos personales cuya publicidad afecte la intimidad; la entidad no está obligada a crear información que no tiene.
//   No se cita aquí el número de días del plazo: no se pudo verificar en una fuente oficial en esta sesión.
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/27806.pdf
// - Ley 29733 (datos personales), ya citada en el capítulo 2.
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 8, titulo: 'Transparencia', dia: 'Semana 2, miércoles', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Ventanilla de la ORH · Wanchaq, Cusco',
  inicio: '08:00', fin: '17:00', cierreHora: '16:50',
  apertura: 'Miércoles. A las ocho y cinco ya hay una señora esperando en la ventanilla, con una copia de su solicitud de acceso a la información y un ejemplar de la ley con las esquinas dobladas.', boton: 'Atenderla',
  kusi: 'La transparencia no es un favor: es un derecho. Y también tiene límites.',
  lead: 'Escuchaste a la Sra. Elvira, separaste lo público de lo confidencial, corregiste una respuesta que exponía datos, sostuviste una respuesta completa y le explicaste a una madre lo que pasó con su hija.',
  reflexion: '¿Dónde termina el derecho a saber de una persona y empieza el derecho a la intimidad de otra?',
  siguiente: { n: 9, titulo: 'Los resultados', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'acceso', p: 'Solicitud de acceso a la información · Sra. Elvira Condori', j: 'Responsable de acceso a la información', d: 0, e: 'Ingresó ayer' },
  { id: 'informe', p: 'Informe técnico de la tabla', j: 'Lic. Valer', d: 0, e: 'Firmado hoy' },
  { id: 'victor', p: 'Constancia del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'En firma' },
  { id: 'concurso', p: 'Entrevistas del CAS 012-2026', j: 'Comité de selección', d: 0, e: 'Mañana' },
];

export const FUTURO = {
  elvira_escuchada: ['Escuchaste a la Sra. Elvira sin ponerte a la defensiva.', 'Volverá el jueves, más tranquila.'],
  respuesta_completa: ['La respuesta a la Sra. Elvira entregó lo público y explicó por escrito lo que no se podía entregar.', 'El Órgano de Control la leerá la próxima semana.'],
  respuesta_link: ['La respuesta a la Sra. Elvira fue solo un enlace al portal.', 'Presentará un reclamo.'],
  datos_tachados: ['Antes de entregar, tachaste los datos personales de los otros postulantes.', 'Nadie podrá decir que la ORH expuso a alguien.'],
  datos_expuestos: ['En la respuesta se fueron el DNI y el celular de otros postulantes.', 'Uno de ellos llamará molesto.'],
  elvira_entiende: ['La Sra. Elvira entendió que su hija se olvidó de firmar.', 'Lizbeth volverá a postular, ahora sabiendo cómo.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  jefa: { n: 'Lic. Norma Valer', sub: 'Jefa de la ORH', c: '#5B3A8C' },
  elvira: { n: 'Sra. Elvira Condori', sub: 'Ciudadana', who: 'ciudadano' },
  lizbeth: { n: 'Lizbeth Condori', sub: 'Postulante del CAS 012-2026', c: '#B5562B' },
};

export const WSP = [
  { chat: 'gladys', t: '08:00', de: 'Gladys', txt: 'La solicitud de la Sra. Condori la atiende el responsable de acceso a la información, pero la información es nuestra. Tú preparas el borrador conmigo.' },
  { chat: 'lizbeth', t: '08:10', de: 'Lizbeth', txt: 'Señorita, mi mamá ya fue a la ORH. Perdón. Le expliqué lo de la firma pero no me cree 😔', si: 'lizbeth_explicada' },
  { chat: 'lizbeth', t: '08:10', de: 'Lizbeth', txt: 'Señorita, mi mamá ya fue. Dice que usted le dijo que fue un error 😟', si: 'lizbeth_llamada' },
  { chat: 'ruben', t: '11:50', de: 'Rubén', txt: 'Hablé con Gladys. Me va a pasar al apoyo de las entrevistas de mañana como intérprete si hay postulantes quechuahablantes. Me quedo 🙌', si: 'ruben_escuchado' },
  { chat: 'jefa', t: '13:20', de: 'Lic. Valer', txt: 'Sobre lo de la Sra. Condori: mandémosle el link del portal y listo. Ya todo está publicado.' },
];

export const CORREOS = [
  { t: '08:05', de: 'Responsable de acceso a la información pública', para: 'ORH', asunto: 'Solicitud de la Sra. Elvira Condori Huamán', html: '<p>La solicitante pide: 1) las bases del CAS 012-2026; 2) la tabla de resultados de la evaluación curricular; 3) la evaluación de su hija, Lizbeth Condori Huillca; 4) los CV de los postulantes que pasaron a entrevista; 5) «el informe que explique por qué hay argolla en este concurso».</p><p>Agradeceré remitir la información en el plazo legal, indicando lo que no corresponda entregar y por qué.</p>' },
];

export const QUIZ = [
  { q: '¿Una persona debe explicar para qué quiere la información pública que pide?', ops: ['Sí, siempre', 'No: la Ley 27806 permite pedirla sin expresar la causa', 'Solo si es periodista', 'Solo si es postulante'], ok: 1, por: 'El acceso a la información pública no exige justificar el pedido.' },
  { q: '¿Qué datos de otros postulantes NO se entregan?', ops: ['Su puntaje', 'Su nombre en la lista publicada', 'Su DNI, domicilio y celular', 'Su formación según las bases'], ok: 2, por: 'Los datos personales cuya difusión afecte la intimidad son información confidencial.' },
  { q: 'La señora pide la evaluación de su hija, que es mayor de edad. ¿Qué haces?', ops: ['Se la entregas, es su madre', 'Le explicas que la evaluación se entrega a su hija o con su autorización', 'No le dices nada', 'Le entregas la de todos'], ok: 1, por: 'Los datos de una persona adulta se entregan a ella o a quien ella autorice.' },
  { q: 'Pide «el informe que explique por qué hay argolla». ¿Qué respondes?', ops: ['Que no existe y no hay obligación de crearlo, y le ofreces lo que sí existe', 'Escribes un informe nuevo para ella', 'La ignoras', 'Le dices que sí hay argolla'], ok: 0, por: 'La ley obliga a entregar la información que la entidad tiene, no a crear documentos nuevos. Pero se le dice con claridad.' },
  { q: '¿Basta con mandarle el enlace del portal?', ops: ['Sí, todo está publicado', 'No: hay que responder cada punto, entregar lo que existe y explicar por escrito lo que no se entrega', 'Sí, si se lo mandas rápido', 'No, hay que entregarle todo sin revisar'], ok: 1, por: 'Una respuesta completa atiende cada punto del pedido y motiva lo que no se entrega.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '08:15', ch: 'presencial', who: 'ciudadano', titulo: 'La señora de la ley', banner: 'assets/foto2/tension.webp', lugar: 'Ventanilla de la ORH', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Elvira Condori tiene unos cincuenta años, una chompa roja tejida a mano y una mirada que no pestañea. Vende quesos en el mercado de San Pedro desde los quince. Pone la Ley 27806 sobre el mostrador, subrayada con resaltador.</p><p>${F.has('lizbeth_llamada') ? '«Mi hija dice que usted le dijo que fue un error. Entonces corríjanlo.»' : '«Mi hija estudió tres años, pagando pasajes desde Sicuani.'} <mark class="clave">Yo quiero saber por qué la sacaron</mark>. Y quiero ver quiénes entraron.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces.',
    opts: [
      { id: 'que', label: '«¿Qué es lo que más le preocupa, señora?»', info: '«Que haya argolla, señorita. Que ya tengan a sus recomendados. En el mercado todos dicen que en el Estado entra el que conoce a alguien.»' },
      { id: 'hija', label: '«¿Lizbeth sabe que usted vino?»', info: '«Sí sabe. Ella dice que se olvidó de firmar algo, pero yo creo que la están culpando a ella para tapar.»' },
      { id: 'pide', label: '«¿Qué documentos necesita ver para quedarse tranquila?»', info: '«Las reglas del concurso, la lista con los puntajes y lo que le hicieron a mi hija. Y los papeles de los que entraron, para comparar.»' },
      { id: 'olvido', label: '«¿No será que su hija simplemente se olvidó?»', info: 'Elvira aprieta la ley contra el pecho. «¿Ve? Así empiezan. Culpando al de abajo.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('olvido') ? -4 : 4, confianza: picks.includes('olvido') ? -3 : 3 },
      rel: { ciudadano: picks.includes('olvido') ? -1 : 1 }, flags: picks.includes('olvido') ? [] : ['elvira_escuchada'],
      out: picks.includes('olvido') ? 'La conversación se endurece. Elvira te dice que va a ir a la Defensoría del Pueblo.' : 'Elvira baja un poco los hombros. «Por lo menos usted escucha.» Le dices que su solicitud se va a responder punto por punto.',
      kusi: picks.includes('olvido') ? ['preocupado', 'Sonó a defensa…'] : ['animo', 'La escuchaste primero.'],
    }),
    rules: [[LEY, 'Ley 27806: toda persona puede pedir información pública sin expresar la causa de su pedido.']],
    mirada: {
      ve: 'Elvira no es «una señora conflictiva»: es alguien que creció escuchando que el Estado es de los que conocen a alguien. Su desconfianza es la de mucha gente. La única respuesta que la cambia es la información.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Elvira teme', items: ['Argolla', 'Recomendados', 'Que culpen a su hija'] }, b: { t: 'Lo que la ORH puede mostrar', items: ['Bases públicas', 'Tabla firmada', 'El motivo exacto'] } },
    },
  },
  {
    id: 'e2', t: '09:30', ch: 'documento', who: 'gladys-orh', titulo: 'Lo que se entrega', banner: 'assets/esc/decide.webp', lugar: 'Escritorio de Gladys', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Gladys imprime los cinco puntos de la solicitud. «Vamos punto por punto. Cada cosa es pública, confidencial o no existe.»</p><p><mark class="clave">Elige las tres que se entregan tal cual</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige lo que se entrega sin restricciones.', boton: 'Confirmar con Gladys', resumen: 'Entregas tal cual',
    cols: ['Pedido', 'Qué es'],
    rows: [
      { id: 'bases', cells: ['Las bases del concurso', 'Documento publicado en el portal'] },
      { id: 'tabla', cells: ['La tabla de resultados curriculares', 'PDF firmado y publicado el lunes'] },
      { id: 'reglas', cells: ['Los criterios de calificación del perfil', 'Parte de las bases'] },
      { id: 'cv', cells: ['Los CV completos de los que pasaron a entrevista', 'Con DNI, domicilio, celular y estado civil'] },
      { id: 'hija', cells: ['La evaluación de Lizbeth', 'Sus datos; ella es mayor de edad'] },
      { id: 'argolla', cells: ['«El informe que explique por qué hay argolla»', 'No existe ningún documento así'] },
    ],
    score: { bases: 3, tabla: 3, reglas: 2, cv: -3, hija: -2, argolla: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 0, etica: picks.includes('cv') ? -4 : 2, calidad: q === 'buena' ? 2 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        cartera: { acceso: q === 'riesgosa' ? 'Clasificación con errores' : 'Bases, tabla y criterios: se entregan' },
        out: q === 'buena' ? 'Gladys asiente: «Lo publicado se entrega siempre. Los CV, tachando los datos personales. Lo de Lizbeth, con su autorización. Y lo que no existe, se dice que no existe».' : picks.includes('cv') ? 'Gladys te detiene: «¿El DNI y el celular de un postulante para una señora que no conoce? Eso se tacha antes».' : 'Gladys corrige: «La evaluación de su hija es de su hija».',
        pro: { ok: 'Separas lo público, lo confidencial y lo que no existe.', info: 'De los CV se puede entregar lo que se evaluó, formación y experiencia, sin los datos que afectan la intimidad.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Público, confidencial o inexistente!' : 'Revisa qué es de quién.'],
      };
    },
    rules: [[LEY, 'Ley 27806: se exceptúa la información confidencial, como los datos personales cuya publicidad afecte la intimidad.'], [BP, 'La entidad entrega la información que tiene; no está obligada a crear documentos que no existen.']],
    mirada: {
      ve: 'La transparencia tiene dos caras: entregar todo lo que es público y proteger lo que es de otras personas. Los demás postulantes también confiaron sus datos al Estado. Cuidarlos es parte de la misma promesa.',
      visual: { tipo: 'matriz', x: 'Datos de otras personas', y: 'Ya es público', cuadrantes: ['Se entrega', 'Se entrega tachando', 'No existe', 'Con autorización'], items: [['Bases', .1, .95], ['Tabla firmada', .2, .9], ['Criterios', .1, .85], ['CV completos', .9, .4], ['Evaluación de Lizbeth', .8, .2], ['«Informe de argolla»', .1, .05]] },
    },
  },
  {
    id: 'e3', t: '11:00', ch: 'documento', who: null, titulo: 'Antes de entregar', banner: 'assets/esc/lupa.webp', lugar: 'Paquete de respuesta, versión de Rubén', show: ['etica', 'calidad', 'cumplimiento'],
    body: () => `<p>Rubén armó el paquete de respuesta mientras tú estabas con Gladys: 34 hojas escaneadas en un solo PDF. Te pide que lo revises antes de mandarlo al responsable de acceso a la información.</p><p><mark class="clave">Marca lo que no puede salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las páginas del paquete con problemas.',
    doc: { t: 'Respuesta a la solicitud de la Sra. Elvira Condori', sub: 'PDF de 34 páginas · armó: R. Ccahua' },
    lines: [
      { id: 'ok1', t: 'Pág. 1-18 · Bases completas del CAS 012-2026.' },
      { id: 'ok2', t: 'Pág. 19-20 · Tabla de resultados curriculares firmada y publicada.' },
      { id: 'dni', t: 'Pág. 21-28 · CV de los 8 que pasaron a entrevista, con DNI, domicilio y celular visibles.', bad: LEY, why: 'DNI, domicilio y celular son datos personales cuya difusión afecta la intimidad. Se tachan antes de entregar.' },
      { id: 'salud', t: 'Pág. 29 · Certificado de discapacidad de Ana Lucía Mayhua, con diagnóstico.', bad: LEY, why: 'Un diagnóstico es un dato sensible. Basta con indicar que se aplicará la bonificación de ley, sin el certificado.' },
      { id: 'hija', t: 'Pág. 30-31 · Ficha de evaluación de Lizbeth, sin autorización de ella.', bad: BP, why: 'Lizbeth es mayor de edad. Su evaluación se entrega a ella o con su autorización escrita.' },
      { id: 'ok3', t: 'Pág. 32 · Nota: «No existe un informe sobre "argolla"; la entidad no está obligada a crear información».' },
      { id: 'duda', t: 'Pág. 33-34 · Acta del comité sobre las presiones recibidas.', duda: 'Es un documento que existe y forma parte del concurso. Antes de decidir, consúltalo con el responsable de acceso a la información: puede requerir tachar nombres de terceros.' },
    ],
    res: ({ missLey, hitsLey, hitsBp, falsos }) => {
      const bien = !missLey && (hitsLey || 0) >= 2 && !falsos;
      return {
        out: bien ? 'Tachas con negro los DNI, domicilios y celulares, sacas el certificado médico y separas la evaluación de Lizbeth. Rubén mira las hojas tachadas: «Nunca lo hubiera pensado. Los de las entrevistas no tenían por qué aparecer con su celular».' : 'Corriges algunas páginas, pero el PDF sale con datos que no debían salir. El viernes, un postulante llama a reclamar porque una señora del mercado tiene su número.',
        flags: [bien ? 'datos_tachados' : 'datos_expuestos'], rel: { colega: bien ? 1 : 0 },
        cartera: { acceso: bien ? 'Paquete revisado y tachado' : 'Paquete con datos personales expuestos' },
        pro: { ok: 'Transparencia con lo público, reserva con lo personal.', risk: 'Un PDF con datos de terceros entregado a otra persona ya no se puede recuperar.', info: 'Deja constancia de qué se tachó y por qué.' },
        kusi: bien ? ['celebra', '¡Tachado con criterio!'] : ['preocupado', 'Ese PDF ya salió…'],
      };
    },
    rules: [[LEY, 'Ley 27806 y Ley 29733: los datos personales que afectan la intimidad se protegen aun dentro de un documento público.']],
    mirada: {
      ve: 'Rubén hizo lo que muchos hacen: escanear todo y mandar. Pero en un concurso público los postulantes que ganaron también son ciudadanos. El negro de un plumón sobre un número de celular es, también, transparencia bien hecha.',
      visual: { tipo: 'cambio', titulo: 'Del PDF de Rubén al que sale', pares: [['CV con DNI y celular', 'CV con formación y experiencia'], ['Certificado con diagnóstico', '«Se aplica la bonificación de ley»'], ['Evaluación de Lizbeth', 'A Lizbeth, o con su autorización'], ['Todo junto', 'Cada punto con su respuesta']] },
    },
  },
  {
    id: 'e4', t: '13:30', ch: 'whatsapp', who: null, titulo: '¿Solo el link?', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Tu celular, en el almuerzo', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>La Lic. Valer te escribe: «Sobre lo de la Sra. Condori: mandémosle el link del portal y listo. Ya todo está publicado. <mark class="clave">No le demos más papeles para que siga buscando</mark>».</p><p>Tiene algo de razón: casi todo está en el portal. Casi.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle responder punto por punto: el enlace para lo publicado, los CV tachados, la evaluación de Lizbeth con su autorización y una línea clara sobre lo que no existe.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, confianza: 1 }, flags: ['respuesta_completa'], cartera: { acceso: 'Respuesta completa, punto por punto' },
          out: 'La Lic. Valer tarda en contestar. «Tienes razón. Si solo mandamos el link, va a reclamar, y con razón. Hazlo completo.»',
          pro: { ok: 'Una respuesta completa cierra el pedido; un link lo deja abierto.', risk: 'Te tomará la tarde.', info: 'El enlace sirve, pero cada punto del pedido necesita su respuesta.' },
          kusi: ['animo', 'Completa, no mínima. ¡Bien!'] } },
      { id: 'b', label: 'Hacerle caso: mandar solo el enlace del portal. Es verdad que está publicado y así no se alarga.',
        res: { q: 'riesgosa', fx: { tiempo: 3, cumplimiento: -4, confianza: -3 }, rel: { ciudadano: -1 }, flags: ['respuesta_link'], cartera: { acceso: 'Respuesta: solo un enlace' },
          out: 'Elvira recibe un correo de dos líneas con un link. Lo abre en el celular de su hija en el mercado y no encuentra la evaluación ni los CV. «¿Ve? Esconden.»',
          pro: { ok: 'Respondes rápido.', risk: 'Un pedido de cinco puntos no se responde con un link: quedan puntos sin atender y sin motivo.' },
          kusi: ['preocupado', 'Eso alimenta la sospecha…'] } },
      { id: 'c', label: 'Esperar hasta el último día del plazo legal para responder: así se ganan unos días para pensarlo.',
        res: { q: 'aceptable', fx: { tiempo: 1, confianza: -2, personas: -2 },
          out: 'La respuesta queda guardada en una carpeta. Elvira vuelve dos veces a preguntar. Cada vez, tú tienes que decirle «todavía».',
          pro: { ok: 'Respetas el plazo legal.', risk: 'El plazo es un máximo, no una meta. Si la respuesta está lista, demorarla solo aumenta la desconfianza.' },
          kusi: ['pensando', '¿Para qué esperar si ya está?'] } },
    ],
    rules: [[LEY, 'Ley 27806: la entidad responde dentro del plazo legal y, si no entrega algo, lo debe motivar.']],
    mirada: {
      ve: 'La jefa no quiere esconder nada: quiere cerrar un frente en una semana difícil. Pero la transparencia mínima suele salir más cara: un pedido mal respondido vuelve como reclamo, y con más sospecha.',
      visual: { tipo: 'balanza', a: { t: 'Solo el link', items: ['Rápido', 'Puntos sin responder', 'Reclamo probable'] }, b: { t: 'Punto por punto', items: ['Una tarde de trabajo', 'Todo motivado', 'Pedido cerrado'] } },
    },
  },
  {
    id: 'e5', t: '15:30', ch: 'documento', who: 'ciudadano', titulo: 'La carta de respuesta', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio', show: ['calidad', 'personas', 'cumplimiento'],
    body: () => `<p>Redactas con Gladys la carta que firmará el responsable de acceso a la información. Elvira la leerá en el mercado, entre quesos y clientes.</p><p><mark class="clave">Que se entienda sin abogado</mark>.</p>`,
    type: 'compose', enviaA: 'elvira', para: 'Para: Sra. Elvira Condori Huamán · carta de respuesta', boton: 'Pasar la carta a firma',
    prompt: 'Elige una frase para cada parte de la carta.',
    slots: [
      { id: 'entrega', t: 'Lo que se entrega', ops: [
        { id: 'e1', t: 'Le entregamos las bases, la tabla de resultados firmada y los CV de quienes pasaron a entrevista, sin sus datos personales.', ok: true, por: 'Claro y completo.' },
        { id: 'e2', t: 'Se adjunta la información pertinente conforme a ley.', ok: false, por: 'No dice qué se entrega.' },
      ] },
      { id: 'hija', t: 'Sobre la evaluación de su hija', ops: [
        { id: 'h1', t: 'La evaluación de Lizbeth es información sobre ella; se la entregamos a ella o a usted con su autorización escrita.', ok: true, por: 'Explica el porqué y el camino.' },
        { id: 'h2', t: 'Lo de su hija no se puede entregar.', ok: false, por: 'Suena a negativa sin salida.' },
      ] },
      { id: 'argolla', t: 'Sobre el «informe de argolla»', ops: [
        { id: 'a1', t: 'No existe un documento así. Si tiene indicios de alguna irregularidad, puede presentarlos al Órgano de Control Institucional.', ok: true, por: 'Honesto y con un camino.' },
        { id: 'a2', t: 'En este concurso no hay argolla.', ok: false, por: 'Afirmación que la carta no puede sostener ni le corresponde.' },
      ] },
    ],
    res: sel => {
      const malas = ['e2', 'h2', 'a2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas === 0 ? 'buena' : malas === 1 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, personas: q === 'buena' ? 3 : 0 }, rel: { ciudadano: q === 'buena' ? 1 : 0 },
        cartera: { acceso: q === 'riesgosa' ? 'Carta por rehacer' : 'Carta en firma; se entrega hoy' },
        out: q === 'buena' ? 'Gladys la lee dos veces. «Esto lo entiende cualquiera. Y la parte del Órgano de Control es justa: si tiene algo, que lo diga donde corresponde.»' : 'Gladys corrige una parte: «Si escribimos así, la señora va a entender lo contrario».',
        pro: { ok: 'Qué se entrega, qué no y por qué, y a dónde ir si quiere más.', info: 'Una carta de respuesta también es atención al público.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Clara como el agua de Tipón!' : 'Que se entienda sin abogado.'],
      };
    },
    mirada: {
      ve: 'Muchas respuestas del Estado están escritas para protegerse, no para que se entiendan. Una carta clara, que dice qué hay, qué no y adónde ir, puede desarmar más sospechas que cualquier discurso sobre transparencia.',
      visual: { tipo: 'mensaje', titulo: 'Una carta que se entiende', txt: 'Le entregamos las bases, la tabla firmada y los CV sin datos personales. La evaluación de Lizbeth se la damos a ella o con su autorización. No existe un «informe de argolla»; si tiene indicios, puede acudir al Órgano de Control.' },
    },
  },
  {
    id: 'e6', t: '16:35', ch: 'presencial', who: 'ciudadano', titulo: '«¿Usted qué haría?»', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Ventanilla de la ORH', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Elvira vuelve a recoger la carta. Esta vez viene con Lizbeth, que trae una autorización escrita a mano y firmada. ${F.has('datos_tachados') ? 'Le entregas el paquete con las hojas tachadas en negro.' : 'Le entregas el paquete.'} Lizbeth lee su ficha: la declaración jurada, sin firma.</p><p>Elvira mira a su hija, luego a ti. Baja la voz: «Señorita, <mark class="clave">¿usted qué haría?</mark> ¿Vuelve a postular o no vale la pena?».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que eso lo decide Lizbeth, pero que su expediente era bueno y el error fue una firma; que en la próxima convocatoria lea las bases con una lista y firme cada hoja.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3, etica: 2 }, rel: { ciudadano: 1 }, flags: ['elvira_entiende'],
          out: 'Elvira se queda un momento en silencio. «O sea que no hubo argolla… fue la firma.» Lizbeth sonríe, avergonzada. Al irse, Elvira te deja un queso fresco envuelto en papel: «Para usted, por explicar».',
          pro: { ok: 'No das un consejo que no te toca, pero sí la información para decidir.', info: 'El queso agradécelo y entrégalo a Gladys: los regalos de usuarios, aunque sean pequeños, no se aceptan.' },
          kusi: ['celebra', '¡La sospecha se volvió confianza!'] } },
      { id: 'b', label: 'Decirle que mejor espere, que en el Estado casi siempre hay preferidos.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -3 },
          out: 'Elvira asiente, amarga: «Lo sabía». Se va convencida de lo mismo que trajo en la mañana, ahora confirmado por alguien de adentro.',
          pro: { ok: 'Eres sincera con tu propia duda.', risk: 'Destruyes en una frase todo lo que la carta había explicado, y sin pruebas.' },
          kusi: ['indignado', '¡Después de todo lo que explicaste!'] } },
      { id: 'c', label: 'Decirle que no puedes opinar sobre eso.',
        res: { q: 'aceptable', fx: { personas: -1, etica: 1 },
          out: 'Elvira asiente y guarda la carta. Lizbeth se va sin saber si vale la pena volver a intentarlo.',
          pro: { ok: 'No te sales de tu rol.', risk: 'Podías darle la información que sí tienes: su error fue una firma, no una argolla.' },
          kusi: ['pensando', 'Había algo que sí podías decir.'] } },
    ],
    rules: [[BP, 'Puedes orientar con la información que tienes, sin decidir por la persona. Los regalos de usuarios no se aceptan.']],
    mirada: {
      ve: 'Elvira llegó con la ley en la mano para pelear y se va con una respuesta. Eso es lo que hace la transparencia cuando funciona: no convence a nadie de que el Estado es perfecto, pero le muestra a una madre lo que de verdad pasó.',
      visual: { tipo: 'linea', titulo: 'La desconfianza de Elvira', hitos: [['8:15', '«Hay argolla»'], ['11:00', 'Papeles tachados con cuidado'], ['15:30', 'Una carta que se entiende'], ['16:35', '«Fue la firma»']] },
    },
  },
];
