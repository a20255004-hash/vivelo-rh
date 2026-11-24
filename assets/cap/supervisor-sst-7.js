// Supervisor/a de SST · Capítulo 7 · «Las causas» · Semana 2, martes.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR, art. 88: la investigación del origen y causas subyacentes identifica deficiencias del sistema de
//   gestión, se documenta y la hacen el empleador y el comité con participación de los trabajadores. Art. 42 l), m) y s): el
//   comité investiga, verifica el cumplimiento y eficacia de sus recomendaciones y controla los acuerdos en el libro de actas.
//   Art. 33 a): el registro de accidentes incluye la investigación y las medidas correctivas. Art. 77: la evaluación considera
//   la organización del trabajo.
// - D.S. 019-2006-TR, art. 27.2: no investigar cuando hay daños a la salud es infracción grave.

export const CAP = {
  n: 7, titulo: 'Las causas', dia: 'Semana 2, martes', foto: 'assets/esc/pendulo.webp',
  lugar: 'Productos Mar de Piura · Planta de Paita',
  inicio: '07:20', fin: '18:30', cierreHora: '18:10',
  apertura: 'Martes. Carlos ya escribió su informe sobre la caída de Teresa. Tiene una página y una conclusión: «descuido de la trabajadora». Hoy el comité investiga de verdad.', boton: 'Abrir el informe de Carlos',
  kusi: '«Descuido» es la palabra que se usa cuando no se quiere seguir preguntando. ¡Hoy preguntamos hasta el fondo!',
  lead: 'Leíste el informe de Carlos, preguntaste «¿por qué?» con el comité, decidiste qué hacer con el turno del sábado, sumaste a Carlos, escribiste el informe y el comité aprobó medidas que se pueden verificar.',
  reflexion: '¿Qué cambia en una planta cuando una investigación incluye las decisiones de los jefes y no solo los actos de los operarios?',
  siguiente: { n: 8, titulo: 'La capacitación', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'investigacion', p: 'Investigación de la caída de Teresa', j: 'SST y comité', d: 0, e: 'Informe hoy' },
  { id: 'drenaje', p: 'Drenaje y alfombras de eviscerado', j: 'Carlos · Marta', d: 0, e: 'Medidas inmediatas desde ayer' },
  { id: 'turnos', p: 'Turnos extra', j: 'Ing. Julio Zapata', d: 0, e: 'Sábado noche, sin descanso de 24 horas' },
  { id: 'capacitacion', p: 'Charla de SST', j: 'Yesenia · SST', d: 0, e: 'Mañana 06:40' },
];

export const FUTURO = {
  informe_causas: ['Tu informe llegó a las causas de fondo: drenaje, alfombras, botas y organización de turnos.', 'La inspectora lo leerá. Capítulo 9.'],
  julio_en_informe: ['El informe incluyó el turno extra del sábado como causa, sin culpar a Julio.', 'Julio decidirá qué hacer con los turnos. Capítulo 10.'],
  julio_omitido: ['Sacaste el turno del sábado del informe para no incomodar a Julio.', 'Flor lo nota. Capítulo 8.'],
  carlos_coautor: ['Carlos firmó el informe contigo y dejó de lado el «descuido».', 'Te ayudará a organizar la capacitación. Capítulo 8.'],
  medidas_con_fecha: ['Las medidas tienen responsable, fecha y forma de verificar.', 'El comité las revisará. Capítulo 10.'],
  comite_aprueba: ['El comité revisó y aprobó el informe con sus recomendaciones.', 'Quedó en el libro de actas. Capítulo 9.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  teresa: { n: 'Teresa Panta', sub: 'Eviscerado · miembro del comité', c: '#A0522D' },
  comite: { n: 'Comité SST Mar de Piura', sub: '8 integrantes', c: '#F2A900' },
};

export const WSP = [
  { chat: 'teresa', t: '07:10', de: 'Teresa', txt: 'Buenos días, inge. Ya estoy en etiquetado con mi muñeca vendada. Gracias por lo de ayer 🙏' },
  { chat: 'flor', t: '07:25', de: 'Flor', txt: 'Ya llegué. Traje mi cuaderno y a Segundo. Marta viene a las 9.' },
  { chat: 'carlos', t: '08:50', de: 'Carlos', txt: 'Vi que estás reunida con el comité por lo de Teresa. Mi informe ya está hecho, para que no pierdas tiempo.', si: 'carlos_resentido' },
  { chat: 'carlos', t: '08:50', de: 'Carlos', txt: 'Te mandé un borrador sobre lo de Teresa. Corrígeme lo que haga falta, yo lo escribí con apuro.', no: 'carlos_resentido' },
  { chat: 'comite', t: '17:10', de: 'Flor', txt: 'Informe aprobado. Por primera vez el comité investigó algo de principio a fin 💪', si: 'comite_aprueba' },
];

export const CORREOS = [
  { t: '06:55', de: 'Carlos Ruiz', para: 'Supervisor/a de SST; Ing. Julio Zapata', asunto: 'Informe de evento · eviscerado · lunes', html: '<p>Adjunto el informe del evento de ayer en la mesa 7. Conclusión: la trabajadora no tuvo el cuidado necesario al girar con una bandeja en piso mojado, pese a haber recibido la charla de pisos mojados.</p><p>Medida: reforzar la charla. Carlos</p>' },
];

export const QUIZ = [
  { q: 'La investigación de un accidente debe identificar…', ops: ['Al culpable', 'Las deficiencias del sistema de gestión que permitieron que ocurriera', 'Solo el acto de la persona', 'La sanción'], ok: 1, por: 'Art. 88 del D.S. 005-2012-TR.' },
  { q: 'Un turno extra nocturno decidido por la gerencia contribuyó a la fatiga. ¿Va en el informe?', ops: ['No, la gerencia no se investiga', 'Sí, como causa de organización del trabajo, sin convertirlo en acusación', 'Solo si la gerencia lo autoriza', 'Solo en un anexo secreto'], ok: 1, por: 'La organización del trabajo es una causa de fondo frecuente; omitirla deja el sistema igual.' },
  { q: '«Reforzar la charla» como única medida correctiva…', ops: ['Es suficiente', 'Es débil: la trabajadora ya había recibido la charla y el piso seguía con agua', 'Es obligatoria', 'Es la mejor práctica'], ok: 1, por: 'Las medidas deben actuar sobre las condiciones antes que sobre la conducta.' },
  { q: '¿Qué función tiene el comité después de aprobar las medidas?', ops: ['Ninguna', 'Verificar su cumplimiento y su eficacia', 'Sancionar', 'Archivar el informe'], ok: 1, por: 'Art. 42 m) del reglamento.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:30', ch: 'correo', who: 'produccion', titulo: 'El informe de Carlos', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de SST', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('carlos_tregua') ? 'Carlos te mandó el borrador anoche, con un «corrígeme lo que haga falta». Es un gesto.' : 'Carlos mandó su informe a Julio a las 6:55, con copia a ti. No es un borrador.'} Lo imprimes y lo lees con Flor al lado, que tiene su cuaderno abierto.</p><p><mark class="clave">Marca lo que no puede quedar así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del informe que incumplen la norma o que conviene corregir.',
    doc: { t: 'Informe de evento · eviscerado, mesa 7', sub: 'Elaborado por: Carlos Ruiz · Jefe de producción' },
    lines: [
      { id: 'hecho', t: 'Hecho: la trabajadora Teresa Panta resbaló al girar con una bandeja y se golpeó la muñeca derecha.' },
      { id: 'tipo', t: 'Clasificación: incidente.', bad: LEY, why: 'Tuvo descanso médico y volvió al día siguiente: es un accidente leve según el glosario del reglamento.' },
      { id: 'causa', t: 'Causa: falta de cuidado de la trabajadora al girar en piso mojado.', bad: LEY, why: 'El art. 88 pide identificar las deficiencias del sistema: ¿por qué había agua hasta el tobillo, sin alfombras y con botas sin dibujo?' },
      { id: 'charla', t: 'Evidencia: la trabajadora firmó la charla de «pisos mojados» hace un mes.', bad: BP, why: 'La firma prueba que estaba informada, no que el piso fuera seguro.' },
      { id: 'quien', t: 'Participantes en la investigación: Jefatura de Producción.', bad: LEY, why: 'La investigación la hacen el empleador y el comité, con participación de los trabajadores (art. 88).' },
      { id: 'medida', t: 'Medida: reforzar la charla de pisos mojados.', bad: BP, why: 'La charla ya se dio y Teresa se cayó igual. La medida no toca el drenaje, las alfombras ni las botas.' },
      { id: 'hora', t: 'Hora: 06:05, primeros minutos del turno.', duda: 'A las 6:05 el drenaje ya estaba tapado: viene del turno anterior. ¿Quién trabajó esa noche?' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le pasas a Flor tus comentarios. Ella señala una línea que no marcaste: «¿Y esto, inge? Esto es lo que dice siempre».' : `Marcaste ${hitsLey} problemas legales. Flor lee tus marcas y suspira: «Es el mismo informe de lo de Hugo, con otro nombre».`,
      cartera: { investigacion: missLey ? 'Informe de Carlos observado a medias' : 'Informe de Carlos: mal clasificado, causa en la trabajadora, medida débil' },
      pro: { ok: 'Un informe que termina en «falta de cuidado» y «reforzar la charla» repite el patrón del accidente de Hugo.', info: 'El dato de la hora es una pista: el drenaje se tapó en el turno anterior.' },
      kusi: missLey ? ['pensando', 'Hay más que corregir…'] : ['indignado', '¡El mismo informe de hace un año!'],
    }),
    rules: [[LEY, 'D.S. 005-2012-TR, art. 88: investigación de causas subyacentes, con el comité y los trabajadores.']],
    mirada: {
      ve: 'Los informes escritos por el jefe del área donde ocurrió el hecho tienden a mirar hacia abajo. No por maldad: es difícil investigar tus propias decisiones. Por eso la norma pide que el comité participe.',
      visual: { tipo: 'cambio', titulo: 'Dos informes, un año de diferencia', pares: [['Hugo: «exceso de confianza»', 'Teresa: «falta de cuidado»'], ['Medida: charla', 'Medida: charla'], ['Hecho por Producción', 'Hecho por Producción']] },
    },
  },
  {
    id: 'g2', t: '09:10', ch: 'presencial', who: 'delegada', titulo: '¿Por qué?', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de capacitación', show: ['calidad', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>En la sala están Flor, Segundo, Marta y, por videollamada desde etiquetado, Teresa. ${F.has('escena_preservada') ? 'Proyectas tus fotos del agua hasta el tobillo.' : 'No tienes buenas fotos: el piso ya estaba limpio cuando llegaste.'} Escribes en la pizarra: «Teresa se cayó».</p><p><mark class="clave">Cada respuesta tiene que llevar a la siguiente pregunta</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena la cadena de causas, del hecho a la causa de fondo.', boton: 'Pasar la cadena al informe',
    items: [
      { id: 'cae', t: 'Teresa resbaló y se golpeó la muñeca junto a un cuchillo', por: 'El hecho.' },
      { id: 'agua', t: 'Había agua hasta el tobillo, sin alfombras, y sus botas no tenían dibujo', por: 'Las condiciones inmediatas.' },
      { id: 'drenaje', t: 'El drenaje se tapa en dos horas y solo se destapaba al final del turno; las alfombras se retiraron por inocuidad sin reemplazo; las botas de mujer no se compraron', por: 'Por qué existían esas condiciones.' },
      { id: 'turno', t: 'Teresa venía de un turno extra el sábado hasta las 6 a. m., programado para recuperar producción', por: 'La fatiga sumó.' },
      { id: 'sistema', t: 'Los cambios (sacar alfombras, cambiar tallas, programar turnos) se decidieron sin evaluar su efecto en la seguridad', por: 'La causa de fondo: el sistema no mira la seguridad cuando cambia algo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : 2, cumplimiento: q === 'buena' ? 3 : 0, personas: 2 }, rel: { delegada: q === 'buena' ? 1 : 0 },
        cartera: { investigacion: q === 'riesgosa' ? 'Cadena incompleta' : 'Causa de fondo: los cambios se deciden sin evaluar la seguridad' },
        out: q === 'buena' ? 'Marta mira la última línea y dice, despacio: «O sea que cuando yo saqué las alfombras, nadie me preguntó por la seguridad. Y yo tampoco pregunté». Segundo asiente. Teresa, en la pantalla, se quita el pañuelo de la cabeza y se lo vuelve a poner.' : q === 'aceptable' ? 'Segundo mueve una tarjeta: «El turno va después de las condiciones, inge. Primero el agua, después el cansancio».' : 'La cadena salta del resbalón al cansancio. Así se concluye que «Teresa estaba cansada» y nada más.',
        pro: { ok: 'Preguntar «¿por qué?» hasta llegar a cómo se toman las decisiones es lo que evita la próxima caída en otra mesa.', info: 'La causa de fondo no tiene nombre de persona: es una forma de decidir que no incluye a la seguridad.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡De «descuido» a gestión del cambio!' : '¿Por qué… y por qué otra vez?'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42 l): el comité investiga las causas y emite recomendaciones para evitar la repetición.']],
    mirada: {
      ve: 'Muchas causas de fondo son cambios bien intencionados que nadie miró con ojos de seguridad: quitar unas alfombras, cambiar tallas en un pedido, programar un turno extra. La prevención también se trata de preguntar «¿esto qué riesgo trae?» antes de cambiar algo.',
      visual: { tipo: 'flujo', titulo: 'Cinco porqués', pasos: ['La caída', 'Agua, sin alfombras, botas lisas', 'Drenaje, inocuidad, tallas', 'Turno hasta las 6 a. m.', 'Cambios sin mirar la seguridad'], aqui: 4 },
    },
  },
  {
    id: 'g3', t: '10:40', ch: 'presencial', who: 'julio-sst', titulo: 'El turno del sábado', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Operaciones', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('turno_sabado') ? 'El turno extra del sábado salió de la reunión del viernes, para recuperar producción.' : 'El turno extra del sábado lo programó Julio el viernes en la noche, para adelantar el siguiente contenedor.'} Lo decidió él. Le muestras la cadena de causas.</p><p>Julio se quita los lentes. «${n}, ¿me vas a poner a mí en el informe? Yo programé ese turno porque el cliente lo pedía. <mark class="clave">Si eso sale, en Lima me cuelgan</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Incluir el turno extra como causa de organización del trabajo, sin nombre ni culpa: «turnos extra sin descanso mínimo entre jornadas». Y proponerle a Julio que la medida salga de él: una regla de descanso antes de cualquier turno extra.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 2 }, rel: { 'julio-sst': 1 }, flags: ['julio_en_informe'], cartera: { turnos: 'Medida propuesta por Julio: descanso mínimo antes de turnos extra' },
          out: 'Julio se queda mirando la pizarra un rato largo. «Que diga «la organización de turnos». Y la regla la firmo yo.» Se pone los lentes. «Hace treinta años que hago turnos así. Nadie me había dicho que eso también era seguridad.»',
          pro: { ok: 'La causa queda en el informe y la medida tiene dueño con poder para cumplirla.', risk: 'Lima puede leer el informe igual. No controlas eso.', info: 'Las causas de organización del trabajo se describen como sistema, no como persona.' },
          kusi: ['animo', 'La verdad completa… y Julio de tu lado.'] } },
      { id: 'b', label: 'Sacar el turno del sábado del informe: el drenaje, las alfombras y las botas ya explican la caída.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, rel: { 'julio-sst': 1 }, flags: ['julio_omitido'], cartera: { turnos: 'Fuera del informe' },
          out: 'Julio te da las gracias. El informe queda limpio. En la tarde, Flor te pregunta: «¿Y lo del sábado? Teresa lo dijo clarito». No sabes qué responderle.',
          pro: { ok: 'Proteges la relación con tu jefe.', risk: 'Los turnos seguirán programándose igual, y el comité sabe que omitiste una causa.' },
          kusi: ['triste', 'El turno sigue ahí, aunque no esté escrito.'] } },
      { id: 'c', label: 'Incluirlo con nombre: «turno extra programado por la Gerencia de Operaciones sin evaluar la fatiga».',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: 2, confianza: -3 }, rel: { 'julio-sst': -1 }, flags: ['julio_en_informe'], cartera: { turnos: 'Gerencia nombrada en el informe' },
          out: 'Julio lee la frase y no dice nada. Firma el informe en silencio. Esa tarde no te responde los mensajes.',
          pro: { ok: 'No ocultas la causa.', risk: 'Convertiste una causa del sistema en un dedo que apunta. Julio se defenderá en vez de cambiar la regla.' },
          kusi: ['pensando', 'Verdad, sí… pero ¿ayuda a cambiar?'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 77: la evaluación de riesgos incluye los relacionados con la organización del trabajo.'], [BP, 'Las causas de fondo describen sistemas y decisiones, no culpables.']],
    mirada: {
      ve: 'En casi toda investigación aparece una decisión de alguien con poder. Omitirla es dejar el sistema igual; convertirla en acusación hace que esa persona defienda su decisión en vez de cambiarla.',
      visual: { tipo: 'balanza', a: { t: 'Omitir o acusar', items: ['Julio protegido o humillado', 'Los turnos siguen igual'] }, b: { t: 'Causa de sistema + medida de Julio', items: ['La verdad en el informe', 'La regla la firma quien decide'] } },
    },
  },
  {
    id: 'g4', t: '12:10', ch: 'presencial', who: 'produccion', titulo: 'Dos informes', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Comedor de supervisores', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => `<p>Carlos almuerza solo, un ceviche de pota que le trajeron de la caleta. ${F.has('carlos_tregua') ? 'Te hace un gesto para que te sientes.' : 'Cuando te ve, se le endurece la cara.'}</p><p>«Ya sé que mi informe no te gustó. ¿<mark class="clave">Qué vas a hacer con él</mark>?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Invitarlo a revisar juntos la cadena de causas y a firmar un solo informe con el comité. Reconocer que su dato de la hora (06:05) ayudó a ver lo del turno anterior.',
        res: { q: null, fx: { personas: 4, confianza: 3, calidad: 2 }, rel: { produccion: 1 }, flags: ['carlos_coautor'], cartera: { investigacion: 'Un solo informe firmado por SST, comité y Producción' },
          out: 'Carlos lee la pizarra fotografiada en tu celular. Tarda. «El drenaje lo debí ver yo. Está en mi área.» Tacha «descuido» de su borrador con el lapicero. «Firmo el de ustedes.»', kusi: ['celebra', '¡Carlos tachó «descuido»!'] } },
      { id: 'b', label: 'Decirle que su informe no sirve y que el oficial será el del comité.',
        res: { q: null, fx: { personas: -3, calidad: 1 }, rel: { produccion: -1 }, flags: ['carlos_resentido'],
          out: 'Carlos deja el ceviche a medio comer. «Perfecto. Que el comité se encargue del drenaje también, entonces.»', kusi: ['pensando', 'Tenías razón… y perdiste un aliado.'] } },
    ],
    mirada: {
      ve: 'Un jefe de producción que firma la investigación con el comité se vuelve responsable de las medidas. Uno que queda fuera, las mira desde lejos.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Carlos', txt: 'El drenaje lo debí ver yo. Está en mi área.' },
    },
  },
  {
    id: 'g5', t: '14:00', ch: 'documento', who: null, titulo: 'El informe', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de SST', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>La laptop se queda sin batería a mitad del informe y el cargador está en la oficina de Yesenia, que salió a una inspección. Escribes en el cuaderno y luego lo pasas.</p><p><mark class="clave">Elige qué queda en cada parte del informe</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas del informe de investigación.', boton: 'Enviar el informe al comité',
    bloques: [
      { id: 'clasif', t: 'Clasificación', n: 1, ops: [
        { id: 'k1', t: 'Accidente leve: contusión de muñeca, descanso de un día, retorno a tarea liviana.', ok: true, por: 'Coincide con la evaluación médica.' },
        { id: 'k2', t: 'Incidente.', ok: false, por: 'Hubo descanso médico.' },
      ] },
      { id: 'causas', t: 'Causas de fondo', n: 2, ops: [
        { id: 'c1', t: 'Drenaje que se tapa en dos horas y se destapaba una vez por turno; alfombras retiradas sin reemplazo; botas de mujer sin reponer.', ok: true, por: 'Condiciones comprobadas.' },
        { id: 'c2', t: 'Cambios en el área (alfombras, tallas, turnos extra) decididos sin evaluar su efecto en la seguridad.', ok: true, por: 'La causa de sistema.' },
        { id: 'c3', t: 'La trabajadora no tuvo cuidado al girar.', ok: false, por: 'Es un juicio, no una causa.' },
      ] },
      { id: 'medidas', t: 'Medidas correctivas', n: 2, ops: [
        { id: 'm1', t: 'Alfombras sanitizables en todas las mesas de eviscerado · Responsable: Calidad y Producción · Fecha: viernes · Se verifica con inspección del comité.', ok: true, por: 'Responsable, fecha y verificación.' },
        { id: 'm2', t: 'Antes de cualquier cambio en un área (equipos, turnos, materiales), SST revisa su efecto en la seguridad · Responsable: Gerencia de Operaciones · Desde hoy.', ok: true, por: 'Ataca la causa de fondo.' },
        { id: 'm3', t: 'Reforzar la charla de pisos mojados.', ok: false, por: 'Ya se dio y no evitó la caída.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : 1, cumplimiento: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 2 : -1 },
        flags: q === 'buena' ? ['informe_causas', 'medidas_con_fecha'] : [],
        cartera: { investigacion: q === 'buena' ? 'Informe listo: accidente leve, 2 causas de fondo, 2 medidas con verificación' : 'Informe con juicios y medidas vagas' },
        out: q === 'buena' ? 'El informe cabe en dos páginas. Flor lo lee en su celular, de pie en el pasillo: «Este sí lo entiendo. Y no dice que Teresa es torpe».' : 'Flor te lo devuelve: «Inge, aquí todavía dice que Teresa no tuvo cuidado».',
        pro: { ok: 'Un informe útil separa hechos, causas y medidas, y dice cómo se verificará cada medida.', info: 'El resultado de la investigación y las medidas se anotan en el registro de accidentes (art. 33).' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Dos páginas que cambian la planta!' : 'Sin juicios, con fechas.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 33 a): el registro de accidentes incluye la investigación y las medidas correctivas.'], [BP, 'Cada medida tiene responsable, fecha y una forma de verificar que funcionó.']],
    mirada: {
      ve: 'La diferencia entre el informe de Carlos y el tuyo no es la extensión: es la dirección de la mirada. Uno mira a la trabajadora; el otro mira las decisiones que pusieron agua, botas lisas y cansancio en la misma mesa.',
      visual: { tipo: 'cambio', titulo: 'Del informe de Carlos al del comité', pares: [['Incidente', 'Accidente leve'], ['Falta de cuidado', 'Cambios sin evaluar la seguridad'], ['Reforzar la charla', 'Alfombras sanitizables y revisión de cambios']] },
    },
  },
  {
    id: 'g6', t: '15:30', ch: 'documento', who: null, titulo: 'El comité decide', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala de capacitación', show: ['cumplimiento', 'personas', 'confianza'],
    body: (n, F) => `<p>${F.has('comite_reconvocado') ? 'Es la nueva cita del comité, dentro de los ocho días. Esta vez sesiona con los asistentes que hay, como manda el reglamento.' : 'El comité se reúne en sesión extraordinaria, a pedido de Flor y Segundo.'} Teresa entra con la muñeca vendada y se sienta junto a Flor.</p><p>Hay que decidir cómo se verificará que las medidas funcionan. <mark class="clave">El comité elige tres formas de seguimiento</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres formas de seguimiento que aprobará el comité.', boton: 'Aprobar el seguimiento', resumen: 'Aprobaron',
    cols: ['Seguimiento', 'Qué permite saber'],
    rows: [
      { id: 'inspeccion', cells: ['Inspección semanal del comité a eviscerado, con registro', 'Si las alfombras y el drenaje se mantienen'] },
      { id: 'cuaderno', cells: ['Revisión del cuaderno de destape del drenaje cada viernes', 'Si se destapa cada dos horas de verdad'] },
      { id: 'resbalones', cells: ['Conteo de resbalones y atenciones del tópico en eviscerado', 'Si las caídas bajan'] },
      { id: 'firma', cells: ['Que todas firmen que leyeron el informe', 'Que lo leyeron… nada más'] },
      { id: 'foto', cells: ['Foto de las alfombras nuevas para el periódico mural', 'Que se compraron una vez'] },
    ],
    score: { inspeccion: 3, cuaderno: 3, resbalones: 3, firma: 0, foto: 0 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, personas: 2, confianza: q === 'buena' ? 2 : 0 }, rel: { delegada: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['comite_aprueba'],
        cartera: { investigacion: q === 'riesgosa' ? 'Seguimiento débil' : 'Aprobado por el comité con seguimiento semanal' },
        out: q === 'buena' ? 'Teresa levanta la mano por segunda vez en su vida en un comité: «Yo hago la inspección de los viernes, si me dejan». Flor sonríe. Julio, que llegó tarde, dice: «Aprobado».' : 'El comité aprueba, pero el seguimiento depende de fotos y firmas.',
        pro: { ok: 'El comité verifica el cumplimiento y la eficacia de sus recomendaciones (art. 42 m).', info: 'Que Teresa haga la inspección cambia su lugar en esta historia: de accidentada a vigilante.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Teresa, de accidentada a inspectora!' : 'Una firma no verifica nada.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42 m): el comité verifica el cumplimiento y la eficacia de sus recomendaciones.']],
    mirada: {
      ve: 'Aprobar una medida es fácil; saber si funcionó es lo difícil. El seguimiento que importa mide lo que pasa en el piso, no lo que firma la gente.',
      visual: { tipo: 'embudo', titulo: 'De la medida al resultado', niveles: [['Medidas aprobadas', 2], ['Con responsable y fecha', 2], ['Con forma de verificar', 2]] },
    },
  },
  {
    id: 'g7', t: '17:40', ch: 'whatsapp', who: null, titulo: 'Para Julio', banner: 'assets/esc/meta.webp', lugar: 'Paradero frente a la planta', show: ['confianza', 'cumplimiento'],
    body: (n, F) => `<p>Mañana a las 6:40 es la charla semanal de SST. Yesenia te enseñó la lista de asistencia de los últimos tres meses: siempre los mismos temas, siempre las mismas firmas, nadie recuerda nada. ${F.has('carlos_coautor') ? 'Carlos te ofreció prestarte diez minutos de la línea para lo que quieras hacer.' : ''}</p><p><mark class="clave">Le escribes a Julio</mark> para cerrar el día.</p>`,
    type: 'compose', enviaA: 'julio', para: 'Para: Ing. Julio Zapata · Gerente de Operaciones', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'informe', t: 'El informe', ops: [
        { id: 'i1', t: 'Ingeniero, el informe de Teresa está aprobado por el comité, con dos medidas y seguimiento semanal.', ok: true, por: 'Concreto y con respaldo.' },
        { id: 'i2', t: 'Ingeniero, ya cerramos lo de Teresa.', ok: false, por: 'No dice qué se decidió.' },
      ] },
      { id: 'pizarra', t: 'La pizarra', ops: [
        { id: 'p1', t: 'La pizarra vuelve a cero mañana. Propongo cambiarla por «medidas cerradas este mes», que premia reportar.', ok: true, por: 'Le das una alternativa al indicador.' },
        { id: 'p2', t: 'La pizarra la dejamos como está.', ok: false, por: 'Otra vez un número que no coincide.' },
      ] },
      { id: 'manana', t: 'Lo de mañana', ops: [
        { id: 'm1', t: 'Mañana cambio la charla de las 6:40: quiero que sea práctica y dentro de la jornada.', ok: true, por: 'Anticipas el siguiente frente.' },
        { id: 'm2', t: 'Mañana sigo con lo mismo.', ok: false, por: 'Lo mismo es lo que no funciona.' },
      ] },
    ],
    res: sel => {
      const buenas = ['i1', 'p1', 'm1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 1, cumplimiento: q === 'buena' ? 2 : 0 }, rel: { 'julio-sst': q === 'buena' ? 1 : 0 },
        cartera: { capacitacion: q === 'buena' ? 'Mañana: charla práctica dentro de la jornada' : 'Mañana 06:40, como siempre' },
        out: q === 'buena' ? 'Julio responde: «Medidas cerradas. Me gusta, el cliente lo va a entender mejor que los días. Y la charla haz lo que quieras, que ya nadie la escucha». Luego, un segundo mensaje: «Buen trabajo hoy».' : 'Julio responde con un pulgar.',
        pro: { ok: 'Cerrar el día con lo decidido y lo que viene mantiene a la gerencia dentro de la historia.', info: 'Un indicador que premia reportar y cerrar medidas cambia la conversación sobre seguridad.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '«Buen trabajo hoy». ¡Bacán!' : 'Cuéntale lo que se decidió.'],
      };
    },
    mirada: { ve: 'Una investigación termina cuando sus medidas se cumplen, no cuando se firma el informe. Contarle a la gerencia qué se va a verificar y cuándo la convierte en parte del seguimiento.' },
  },
];
