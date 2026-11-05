// Analista de Relaciones Laborales · Capítulo 10 · «Lo que queda» · Semana 2, viernes. Final abierto: gancho a la Semana 3.
// Hilo de las dos semanas: el pliego, el caso de Marcos, las horas de la caballa, la inspección y el acta. Hoy se paga,
// se comparece ante SUNAFIL, se mira atrás… y llega una carta que abre la Semana 3.
// Normas citadas:
// - D.S. 007-2002-TR (sobretiempo con sobretasa) y Constitución, art. 26 (irrenunciabilidad), caps. 6 y 8.
// - Ley 28806, Ley General de Inspección del Trabajo: acreditar la subsanación ante la inspección (caps. 7 y 8).
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): art. 14 (los sindicatos de empresa deben
//   afiliar por lo menos a veinte trabajadores para constituirse y subsistir) y art. 31 (fuero sindical de los miembros de
//   sindicatos en formación, desde la solicitud de registro hasta tres meses después).
//   https://lpderecho.pe/texto-unico-ordenado-ley-relaciones-colectivas-trabajo-decreto-supremo-010-2003-tr-actualizado/
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=46
//   https://lpderecho.pe/fueron-sindical-derecho-colectivo-laboral/

export const CAP = {
  n: 10, titulo: 'Lo que queda', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Conservas del Pacífico · Chimbote',
  inicio: '07:40', fin: '19:30', cierreHora: '19:20',
  apertura: 'Viernes de la semana 2. Hoy 38 personas ven sus horas en la boleta, la empresa comparece ante SUNAFIL y el doctor te espera para hablar de tus dos semanas. El día no va a terminar como crees.', boton: 'Revisar las boletas',
  kusi: 'Dos semanas enteras entre dos fuegos. Hoy toca mirar atrás… y un poquito adelante.',
  lead: 'Revisaste las boletas antes de pagar, compareciste diciendo la verdad, cerraste tus pendientes, hiciste tu balance, preguntaste por el oficio y te preguntaste si es para ti. Y justo al salir, llegó una carta.',
  reflexion: '¿Te ves en este puesto? ¿Qué te dijeron estas dos semanas sobre ti?',
  siguiente: { n: 11, titulo: 'El otro sindicato', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'boletas', p: 'Planilla adicional de sobretiempo', j: 'Patricia · Milagros', d: 0, e: 'Depósito a las 8:30' },
  { id: 'comparecencia', p: 'Comparecencia ante SUNAFIL', j: 'Valeria · Relaciones Laborales', d: 0, e: 'Hoy, 09:30' },
  { id: 'pendientes', p: 'Pendientes de las dos semanas', j: 'Relaciones Laborales', d: 0, e: 'Por cerrar' },
  { id: 'balance', p: 'Tu balance con el Dr. Benavides', j: 'Arturo', d: 0, e: 'Hoy, 15:00' },
  { id: 'acta', p: 'Acta de trato directo', j: 'Ambas comisiones', d: 0, e: 'Por ejecutar' },
];

export const FUTURO = {
  boletas_limpias: ['Las boletas de sobretiempo salieron con concepto, horas y sobretasa, sin renuncias.', 'Nadie las discutirá. Capítulo 11.'],
  boletas_con_error: ['Algunas boletas salieron con conceptos confusos.', 'Habrá reclamos el lunes. Capítulo 11.'],
  comparecencia_honesta: ['En la comparecencia asumiste los hechos y mostraste el pago y las reglas nuevas.', 'La inspectora lo tendrá en cuenta al resolver. Capítulo 11.'],
  comparecencia_culpas: ['En la comparecencia la empresa culpó a la contratista y a la supervisión.', 'La inspectora pedirá más pruebas. Capítulo 11.'],
  pendientes_cerrados: ['Cerraste lo más importante antes del fin de semana.', 'El lunes empiezas sin deudas propias. Capítulo 11.'],
  balance_honesto: ['Tu balance reconoce aciertos, errores y lo que viene.', 'El doctor te encarga el próximo caso. Capítulo 11.'],
  te_ves_si: ['Te ves en este puesto.', 'La Semana 3 te encontrará con ganas.'],
  te_ves_duda: ['Te ves en este puesto, con dudas.', 'La Semana 3 te ayudará a decidir.'],
  te_ves_otro: ['Prefieres otra área de RR.HH.', 'Lo que aprendiste aquí te servirá en cualquier puesto.'],
  segundo_sindicato_respetado: ['Recibiste la comunicación del nuevo sindicato con cargo y sin hacer listas.', 'El lunes empieza otra historia. Capítulo 11.'],
  lista_firmantes: ['Le pasaste al gerente la lista de quienes firmaron la comunicación del nuevo sindicato.', 'Están protegidos por el fuero sindical. Capítulo 11.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  marcos: { n: 'Marcos Huamán', sub: 'Operario · línea 2', c: '#5B4636' },
  yenny: { n: 'Yenny Ríos', sub: 'Operaria · personal de la contratista', c: '#2E7D6B' },
  rosa: { n: 'Rosa Ipanaqué', sub: 'Operaria de envasado', c: '#B0563A' },
  gerente: { n: 'Ing. Fernando Olaechea', sub: 'Gerente general', c: '#3B3B3B' },
};

export const WSP = [
  { chat: 'valeria', t: '07:30', de: 'Valeria', txt: 'Hablé con el gerente. Firmamos el acta hoy a las 7:45, antes de la comparecencia. Sin la cláusula de la denuncia.', si: 'firma_postergada' },
  { chat: 'lucho', t: '07:35', de: 'Lucho', txt: 'Después de lo de ayer, la base no quiere volver a la mesa. Vamos a pedir la conciliación. Usted sabrá.', si: 'clausula_denuncia' },
  { chat: 'rosa', t: '10:40', de: 'Rosa', txt: 'Señorita, me llegó el depósito con las horas de la caballa 😭 Es la primera vez que me pagan así. Gracias.', si: 'boletas_limpias' },
  { chat: 'yenny', t: '12:10', de: 'Yenny', txt: 'Señorita, la service me pagó con boleta. Nadie me volvió a preguntar nada. Le mando la foto a mi mamá.', si: 'contratista_exigida' },
  { chat: 'marcos', t: '13:00', de: 'Marcos', txt: 'Hoy hice mi turno completo, con relevo a la hora. Ya duermo tranquilo, señorita.', no: 'despido_marcos' },
  { chat: 'gladys', t: '14:20', de: 'Gladys', txt: 'Te debo una. Las reglas funcionan. No se lo digas a nadie 😒', si: 'reglas_supervisores' },
  { chat: 'gerente', t: '18:45', de: 'Ing. Olaechea', txt: '¿Quiénes son los que firmaron esa carta? Mándame la lista hoy mismo.' },
];

export const CORREOS = [
  { t: '07:40', de: 'Patricia Salcedo · Finanzas', para: 'Relaciones Laborales', asunto: 'Planilla adicional · revisión antes del depósito', html: '<p>Antes de las 8:30 necesito tu visto bueno en las boletas. Te dejo de muestra la de Rosa Ipanaqué. Si hay algo raro, se corrige ahora o el lunes ya es tarde.</p><p>Patricia</p>' },
  { t: '18:35', de: 'Jhon Rivas', para: 'Gerencia General; Relaciones Laborales', asunto: 'Comunicación de constitución de sindicato', html: '<p>Por medio de la presente comunicamos que 23 trabajadores de Conservas del Pacífico hemos constituido el Sindicato de Trabajadores Jóvenes de Conservas del Pacífico y presentado la solicitud de registro ante la Autoridad de Trabajo. Adjuntamos la nómina de la junta directiva.</p>' },
];

export const QUIZ = [
  { q: 'En la boleta del sobretiempo regularizado, el concepto debe decir…', ops: ['«Bono extraordinario»', '«Horas extras», con las horas, el periodo y la sobretasa', '«Gratificación»', '«Liberalidad»'], ok: 1, por: 'La boleta debe mostrar qué se paga: así se acredita la subsanación y se evitan reclamos.' },
  { q: 'En una comparecencia ante SUNAFIL, lo que más ayuda a la empresa es…', ops: ['Culpar a la contratista', 'Asumir los hechos y acreditar lo corregido', 'No asistir', 'Llevar solo un abogado de Lima'], ok: 1, por: 'La autoridad mira hechos y pruebas: mostrar lo subsanado vale más que repartir culpas.' },
  { q: 'Para constituir un sindicato de empresa se necesitan al menos…', ops: ['5 trabajadores', '20 trabajadores', '50 trabajadores', 'La mitad de la planilla'], ok: 1, por: 'El art. 14 del TUO de la LRCT exige afiliar por lo menos a veinte trabajadores en los sindicatos de empresa.' },
  { q: 'Los miembros de un sindicato en formación…', ops: ['No tienen ninguna protección', 'Están amparados por el fuero sindical desde la solicitud de registro y hasta tres meses después', 'Solo están protegidos sus dirigentes', 'Deben pedir permiso a la empresa'], ok: 1, por: 'Art. 31 del TUO de la LRCT.' },
  { q: 'El gerente pide la lista de quienes firmaron la comunicación del nuevo sindicato. Lo correcto es…', ops: ['Enviarla para «saber con quién se trata»', 'Explicar que no corresponde hacer listas y que la comunicación ya identifica a su junta directiva', 'Publicarla en el comedor', 'Mandarla a la contratista'], ok: 1, por: 'Elaborar listas de afiliados puede leerse como un acto contra la libertad sindical.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '07:50', ch: 'documento', who: null, titulo: 'La boleta de Rosa', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de Finanzas', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Cuarenta minutos para el depósito. Patricia te pasa la boleta de muestra de Rosa Ipanaqué, todavía tibia de la impresora. ${F.has('acta_firmada') ? 'En la pared, una copia del acta firmada ayer.' : 'El acta sigue en el escritorio del doctor.'}</p><p>Si esta boleta está bien, 37 más también. <mark class="clave">Revísala línea por línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería salir así en la boleta.',
    doc: { t: 'Boleta de pago · Planilla adicional', sub: 'Conservas del Pacífico S.A.C. · Rosa Ipanaqué · Envasado' },
    lines: [
      { id: 'periodo', t: 'Periodo: sobretiempo de la campaña de caballa (fechas según el registro de asistencia).' },
      { id: 'h25', t: 'Horas extras con sobretasa de 25 %: 18 horas.' },
      { id: 'h35', t: 'Horas extras con sobretasa de 35 %: 18 horas.' },
      { id: 'concepto', t: 'Concepto adicional: «Bono extraordinario de campaña».', bad: BP, why: 'Lo que se paga son horas extras: llamarlo «bono» esconde la naturaleza del pago y debilita la acreditación.' },
      { id: 'aportes', t: 'Descuento de aporte al sistema de pensiones sobre las horas extras.', duda: 'Correcto: el sobretiempo es remuneración y se le aplican los aportes que correspondan.' },
      { id: 'firma', t: 'Firma del trabajador «en señal de conformidad y de renuncia a todo reclamo».', bad: LEY, why: 'Los derechos laborales son irrenunciables (Constitución, art. 26). La firma acusa recibo; no puede ser una renuncia.' },
      { id: 'sobre', t: 'Descuento: «adelanto en sobre» de S/ 50, sin documento que lo respalde.', bad: BP, why: 'Si hubo un pago en sobre, hay que documentarlo con la trabajadora antes de descontarlo; descontar lo que nadie puede probar abre otra discusión.' },
      { id: 'neto', t: 'Neto a pagar, depositado en la cuenta sueldo de la trabajadora.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: missLey ? -4 : 4, etica: missLey ? -3 : 2 },
        flags: q === 'riesgosa' ? ['boletas_con_error'] : ['boletas_limpias'],
        cartera: { boletas: q === 'riesgosa' ? 'Depositada con errores' : 'Corregidas y depositadas a las 8:30' },
        out: missLey ? 'La planilla se deposita como estaba. La primera trabajadora que lea «renuncia a todo reclamo» se lo enseñará a Lucho antes del almuerzo.' : 'Patricia corrige la plantilla en diez minutos y vuelve a imprimir 38 boletas. El depósito sale a las 8:31. «Un minuto tarde, pero bien», dice.',
        pro: { ok: 'Una boleta que dice exactamente qué se paga es la mejor prueba ante cualquiera.', risk: 'Un concepto equivocado o una renuncia escondida arruinan dos semanas de trabajo en una línea.', info: 'Guarda una copia de cada boleta firmada para el escrito de acreditación.' },
        kusi: missLey ? ['preocupado', 'Una línea mal puesta, 38 veces…'] : ['celebra', '¡Treinta y ocho boletas que dicen la verdad!'],
      };
    },
    rules: [[LEY, 'D.S. 007-2002-TR: el sobretiempo se paga con sobretasa. Constitución, art. 26: los derechos laborales son irrenunciables.']],
    mirada: {
      ve: 'Al final, todo lo negociado y todo lo regularizado se convierte en una boleta. Es el documento que la trabajadora va a leer, y el que la autoridad va a revisar.',
      visual: { tipo: 'cambio', titulo: 'De la boleta confusa a la boleta clara', pares: [['«Bono extraordinario»', '«Horas extras 25 % y 35 %»'], ['«Renuncia a todo reclamo»', 'Firma de recepción'], ['Descuento sin respaldo', 'Solo lo documentado']] },
    },
  },
  {
    id: 'r2', t: '09:30', ch: 'presencial', who: 'valeria', titulo: 'La comparecencia', banner: 'assets/3d/scenes/municipalidad.webp', lugar: 'Sede de SUNAFIL', show: ['cumplimiento', 'etica', 'confianza'],
    body: (n, F) => `<p>Sala pequeña, ventilador en el techo, la inspectora Alarcón detrás de un escritorio con dos carpetas. Valeria a tu lado, con el escrito de acreditación y las constancias de depósito de esta mañana. ${F.has('carta_sunafil_negacion') ? 'Sobre la mesa, la carta de Lima que negaba el sobretiempo.' : F.has('carta_sunafil_corregida') ? 'Sobre la mesa, la carta corregida del martes.' : ''}</p><p>La inspectora te mira a ti: «<mark class="clave">¿Por qué la empresa no pagó esas horas en su momento?</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder con los hechos: la campaña se organizó con turnos encadenados y hojas firmadas en blanco, y nadie revisó el reloj contra la planilla. La empresa lo detectó, ya pagó con boleta y cambió las reglas.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: 3 }, rel: { valeria: 1 }, flags: ['comparecencia_honesta'], cartera: { comparecencia: 'Acreditado el pago; reglas nuevas presentadas' },
          out: 'La inspectora escribe un buen rato. «Es la primera vez en este año que una empresa me explica su propio error sin que se lo saque yo.» Recibe el escrito y las constancias. No promete nada, pero cierra la carpeta despacio.',
          pro: { ok: 'Asumir los hechos y acreditar lo corregido es lo que la autoridad puede valorar.', risk: 'Lo que reconoces queda en el acta de la comparecencia.', info: 'Lo que pasó con la contratista también se acredita: lleva su respuesta.' },
          kusi: ['celebra', '¡La verdad, con pruebas, en la mesa correcta!'] } },
      { id: 'b', label: 'Explicar que el sobretiempo lo pidió la supervisión sin autorización de la gerencia y que el personal de la contratista no depende de la empresa.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -3 }, flags: ['comparecencia_culpas'], cartera: { comparecencia: 'La empresa repartió culpas' },
          out: 'La inspectora levanta la vista: «La supervisión es parte de la empresa. Y el trabajo se hizo en su planta». Pide más documentos para el lunes.',
          pro: { ok: 'Es cierto que la supervisión actuó sin control.', risk: 'Ante la autoridad, la empresa responde por lo que hace su supervisión: repartir culpas no la protege.' },
          kusi: ['preocupado', 'La supervisión también es la empresa…'] } },
      { id: 'c', label: 'Dejar que responda Valeria: es abogada y una comparecencia es un tema legal.',
        res: { q: 'aceptable', fx: { confianza: -1, cumplimiento: 2 },
          out: 'Valeria responde bien, con precisión. Pero cuando la inspectora pregunta por los turnos y por el relevo de la autoclave, Valeria te mira: eso solo lo sabes tú.',
          pro: { ok: 'Respetas el rol de la abogada.', risk: 'Nadie conoce los hechos como tú: callar cuando te preguntan directamente desaprovecha lo que investigaste.' },
          kusi: ['pensando', 'Tú sabías la respuesta…'] } },
    ],
    rules: [[LEY, 'Ley 28806: la subsanación se acredita ante la inspección con pruebas.']],
    mirada: {
      ve: 'Una comparecencia no es un juicio: es la oportunidad de mostrar qué pasó, qué se hizo y qué cambió. Decirlo con tus propias palabras, con pruebas, es la mejor defensa que tiene una empresa que corrigió.',
      visual: { tipo: 'balanza', a: { t: 'Repartir culpas', items: ['«Fue la supervisión»', '«Es de la contratista»', 'Más documentos el lunes'] }, b: { t: 'Asumir y acreditar', items: ['Hechos claros', 'Boletas y depósitos', 'Reglas nuevas'] } },
    },
  },
  {
    id: 'r3', t: '12:00', ch: 'documento', who: null, titulo: 'Lo que queda pendiente', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de Relaciones Laborales', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>Volviste en combi por la avenida Pardo, con el sol de mediodía que por fin rompió la neblina. En tu escritorio, la cartera de las dos semanas. ${F.has('conciliacion_propuesta') ? 'El bono quedó para conciliación.' : F.has('acta_firmada') || F.has('firma_postergada') ? 'El acta está firmada y hay que ejecutarla.' : 'El acta no se firmó.'}</p><p>Antes de las cinco <mark class="clave">solo te da para tres cosas</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes que cierras hoy.', boton: 'Cerrar estos tres', resumen: 'Cerraste',
    cols: ['Pendiente', 'Por qué importa'],
    rows: [
      { id: 'contratista', cells: ['Confirmar que Nor Pacífico pagó a sus 9 operarios con boleta', 'Es lo que la inspectora preguntará después'] },
      { id: 'acta', cells: ['Mandar a planta el cronograma de lo acordado: movilidad desde el 1 de diciembre, uniformes', 'Lo firmado empieza a cumplirse hoy'] },
      { id: 'trimestral', cells: ['Agendar con Lucho la primera revisión trimestral del cumplimiento', 'Lo que la base más teme es el olvido'] },
      { id: 'expediente', cells: ['Cerrar el expediente de Marcos con todos sus cargos', 'Un caso bien cerrado se defiende solo'] },
      { id: 'hojas', cells: ['Triturar las hojas de «sobretiempo voluntario» firmadas en blanco', 'Que no aparezcan más'] },
      { id: 'escritorio', cells: ['Ordenar tu escritorio y tus correos', 'Empezar el lunes limpio'] },
    ],
    score: { contratista: 3, acta: 3, trimestral: 2, expediente: 2, hojas: -4, escritorio: 0 },
    res: (picks, sc) => {
      const q = picks.includes('hojas') ? 'riesgosa' : sc >= 7 ? 'buena' : 'aceptable';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0, etica: picks.includes('hojas') ? -5 : 1 },
        flags: q === 'buena' ? ['pendientes_cerrados'] : [],
        cartera: { pendientes: q === 'buena' ? 'Contratista, acta y seguimiento cerrados' : q === 'riesgosa' ? 'Se destruyeron documentos de la inspección' : 'Cerrados a medias' },
        out: picks.includes('hojas') ? 'Valeria te ve con las hojas en la trituradora y te detiene la mano: «Eso es parte de lo que vio la inspectora. Se guarda, no se destruye».' : q === 'buena' ? 'A las 16:50 tachas el último pendiente. Gladys pega en el tablero el cronograma de la movilidad. Lucho responde: «El 15 de febrero, revisión. Anotado».' : 'Cierras lo tuyo, pero algo de lo grande queda para el lunes.',
        pro: { ok: 'Los últimos pendientes de una negociación son los que hacen que lo firmado se cumpla.', risk: 'Destruir documentos vinculados a una inspección en curso se puede leer como ocultamiento.', info: 'Lo que no se agenda, no se revisa.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Pendientes cerrados como se debe!' : '¿Qué quedó para el lunes?'],
      };
    },
    rules: [[BP, 'Después de firmar, agenda el cumplimiento: fechas, responsables y revisiones con la contraparte.']],
    mirada: {
      ve: 'Las negociaciones fallan más en el cumplimiento que en la mesa. Un buen cierre de semana deja agendado quién hace qué y cuándo se revisa.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Importancia', cuadrantes: ['Hazlo hoy', 'Planifícalo', 'Si sobra tiempo', 'No lo hagas'], items: [['Contratista', .4, .9], ['Cronograma del acta', .3, .85], ['Revisión trimestral', .15, .7], ['Expediente de Marcos', .35, .6], ['Escritorio', .2, .2], ['Triturar hojas', .1, .02]] },
    },
  },
  {
    id: 'r4', t: '15:00', ch: 'presencial', who: 'arturo', titulo: 'Tus dos semanas', banner: 'assets/foto/mentora.webp', lugar: 'Oficina del Dr. Benavides', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>El doctor cierra la puerta y, por primera vez, se sienta del mismo lado del escritorio que tú. Tiene una hoja con dos columnas escritas a mano. ${F.has('despido_marcos') ? 'En una esquina, el nombre de Marcos con un signo de interrogación.' : F.has('caso_archivado') ? 'En una esquina dice: «Marcos: bien cerrado».' : ''}</p><p>«Antes de que yo te diga nada, <mark class="clave">dime tú cómo te fue</mark>.»</p>`,
    type: 'builder', prompt: 'Arma tu balance eligiendo las piezas de cada bloque.', boton: 'Contárselo al doctor',
    bloques: [
      { id: 'bien', t: 'Lo que hice bien', n: 1, ops: [
        { id: 'b1', t: 'Investigué antes de sancionar y separé el caso de Marcos de la negociación.', ok: true, por: 'Concreto y comprobable.' },
        { id: 'b2', t: 'Todo, la verdad: no me equivoqué en nada.', ok: false, por: 'Nadie te va a creer, ni tú misma.' },
      ] },
      { id: 'corregir', t: 'Lo que corregiría', n: 1, ops: [
        { id: 'c1', t: 'Algunas decisiones las tomé bajo presión; la próxima vez pediré un minuto antes de responder en la mesa.', ok: true, por: 'Un aprendizaje que puedes aplicar.' },
        { id: 'c2', t: 'Nada que dependiera de mí: los problemas los causaron otros.', ok: false, por: 'Un balance sin errores propios no sirve para crecer.' },
      ] },
      { id: 'aprendi', t: 'Lo que aprendí', n: 1, ops: [
        { id: 'a1', t: 'Que en este puesto también se revisa a la propia empresa, no solo al sindicato o a los trabajadores.', ok: true, por: 'La lección de las horas de la caballa.' },
        { id: 'a2', t: 'Que el sindicato siempre exagera.', ok: false, por: 'Es lo contrario de lo que mostraron estas dos semanas.' },
      ] },
      { id: 'viene', t: 'Lo que viene', n: 1, ops: [
        { id: 'v1', t: 'Cuidar que el acta se cumpla y que las reglas de jornada no se relajen en la próxima campaña.', ok: true, por: 'El trabajo de verdad empieza después de firmar.' },
        { id: 'v2', t: 'Descansar: lo difícil ya pasó.', ok: false, por: 'Ojalá. Pero siempre llega una carta.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 4 : 1 }, rel: { arturo: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['balance_honesto'],
        cartera: { balance: q === 'buena' ? 'Balance honesto, con aciertos y errores' : 'Balance incompleto' },
        out: q === 'buena' ? 'El doctor voltea su hoja: sus dos columnas dicen casi lo mismo que tú. «Yo tardé diez años en aprender lo de revisar a la propia empresa», dice. «Tú tardaste una semana.»' : q === 'aceptable' ? 'El doctor asiente y completa: «Te faltó decir en qué te equivocaste. Todos nos equivocamos estas dos semanas, yo el primero».' : 'El doctor deja su hoja boca abajo. «Vuelve a pensarlo el fin de semana. Un balance sin errores no es un balance.»',
        pro: { ok: 'Mirarse con honestidad, sin castigarse ni justificarse, es lo que hace crecer en este oficio.', info: 'Guarda este balance: el próximo conflicto lo vas a necesitar.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Qué divino balance!' : 'Mirarse con honestidad cuesta.'],
      };
    },
    rules: [[BP, 'Un buen balance dice qué salió bien, qué corregirías, qué aprendiste y qué sigue.']],
    mirada: {
      ve: 'El balance de un periodo difícil sirve si es honesto: ni todo fue un éxito ni todo fue culpa de otros. Lo que aprendiste de tus errores es lo más útil que te llevas.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['Lunes 1', 'El pliego'], ['Martes 1', 'La falta'], ['Viernes 1', 'El descargo'], ['Lunes 2', 'Las horas'], ['Martes 2', 'La inspección'], ['Jueves 2', 'El acta']] },
    },
  },
  {
    id: 'r5', t: '16:10', ch: 'presencial', who: 'arturo', titulo: 'Preguntas sobre el oficio', banner: 'assets/3d/scenes/oficina-sq.webp', lugar: 'Oficina del Dr. Benavides', show: ['personas', 'confianza'],
    body: () => `<p>El doctor saca dos tazas y un termo de café pasado que trae de su casa. «Ahora pregúntame tú. Lo que quieras del puesto.» Afuera suena la sirena del cambio de turno.</p><p><mark class="clave">Tienes tiempo para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para el Dr. Benavides.',
    opts: [
      { id: 'dificil', label: '¿Qué es lo más difícil de este puesto?', info: '«Que nunca le das la razón completa a nadie. La gerencia te ve blanda y el sindicato te ve empresa. Si los dos se quejan un poco, probablemente lo estás haciendo bien.»' },
      { id: 'aguantar', label: '¿Cómo se aguanta estar entre dos fuegos tanto tiempo?', info: '«Con una regla: nunca prometer lo que no puedo cumplir. Y con mi esposa, que me obliga a no ver el WhatsApp después de las nueve.»' },
      { id: 'futuro', label: '¿Dónde está un buen analista de relaciones laborales en cinco años?', info: '«Jefe de relaciones laborales en una minera o una pesquera, o abogado laboralista, o gerente de personas. Lo que aprendes aquí sirve en todo RR.HH.»' },
      { id: 'quedo', label: '¿Por qué se quedó usted veinte años en esto?', info: 'Se queda callado. «Porque una vez, en Paita, firmamos un acta que evitó una huelga de dos meses. Fui a ver a la gente cobrar. Eso no se olvida.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 2, confianza: 3 }, rel: { arturo: 1 },
      out: picks.includes('quedo') ? 'Te quedas pensando en Rosa y su mensaje de esta mañana. Quizá algo así es lo que el doctor vio en Paita.' : 'Anotas sus respuestas en la última hoja de tu libreta, la que empezaste el lunes de la primera semana en la puerta 1.',
      kusi: ['curioso', '¡Preguntar también es aprender el oficio!'],
    }),
    mirada: { ve: 'Relaciones Laborales es un oficio de paciencia, precisión y nervios: se vive entre dos partes que desconfían y se aprende sobre todo de los conflictos. No es para todos, y está bien que así sea.' },
  },
  {
    id: 'r6', t: '17:30', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Muelle cerca de la planta, frente a la bahía', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Antes de tomar el bus caminas hasta el muelle. Las bolicheras vuelven a la bahía, los pelícanos esperan y el olor a mar ya no te molesta. ${F.has('acta_firmada') || F.has('firma_postergada') ? 'En la planta hay un acta firmada que alguien tendrá que hacer cumplir.' : 'En la planta queda un conflicto abierto que alguien tendrá que acompañar.'}</p><p>Dos semanas. Un pliego, un caso disciplinario, una deuda descubierta, una inspección y un acta. <mark class="clave">¿Te ves en este puesto?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí. Me gusta estar donde se cruzan la ley, la gente y el conflicto.',
        res: { q: null, fx: { confianza: 3 }, flags: ['te_ves_si'], out: 'Sacas el celular y le escribes al doctor: «Gracias por estas dos semanas. Nos vemos el lunes». Responde con un pulgar y un «a las 7:30».', kusi: ['celebra', '¡Qué bacán! Este oficio necesita gente como tú.'] } },
      { id: 'b', label: 'Creo que sí, pero me cuesta la presión. Quiero vivir más semanas para saberlo.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves_duda'], out: 'Te quedas mirando el agua hasta que pasa el bus. Dudar también es una respuesta honesta.', kusi: ['animo', 'Dudar es parte de elegir.'] } },
      { id: 'c', label: 'Aprendí muchísimo, pero me veo mejor en otra área de RR.HH.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves_otro'], out: 'Lo que aprendiste aquí, investigar, escribir con cuidado y escuchar a las dos partes, te va a servir en cualquier lugar de RR.HH.', kusi: ['feliz', 'Saber dónde no te ves también es saber dónde sí.'] } },
    ],
    mirada: { ve: 'No hay una respuesta correcta. Relaciones Laborales es un puesto exigente que pide temple, precisión y mucha escucha. Saber si te ves ahí es lo más valioso que te llevas de estas dos semanas.' },
  },
  {
    id: 'r7', t: '18:40', ch: 'presencial', who: null, titulo: 'La carta de las 18:35', banner: 'assets/foto2/pasillo.webp', lugar: 'Puerta 2 de la planta', show: ['etica', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Ya estás en el paradero cuando el vigilante te llama: «Señorita, la buscan». En la puerta 2 está Jhon Rivas, el secretario de actas, con veintidós compañeros jóvenes. ${F.has('lectura_conjunta') ? 'Ayer aplaudía en el comedor.' : 'Ayer tomaba notas en la mesa.'}</p><p>Te entrega un sobre: «Hemos formado otro sindicato. Sentimos que el de siempre no nos representa». En tu celular, el gerente: <mark class="clave">«¿Quiénes son? Mándame la lista hoy»</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recibir la comunicación con cargo, agradecer a Jhon y responderle al gerente que no corresponde hacer listas: la carta ya identifica a su junta directiva, y quienes forman un sindicato están protegidos por el fuero desde la solicitud de registro.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: 2 }, rel: { arturo: 1 }, flags: ['segundo_sindicato_respetado'],
          out: 'Jhon revisa el sello igual que Lucho el primer lunes. El gerente responde «Lo vemos el lunes» y nada más. En el bus de regreso piensas en Lucho: ¿cómo lo va a tomar?',
          pro: { ok: 'Respetas la libertad sindical desde el primer minuto, como hiciste con el primer pliego.', risk: 'El gerente y Lucho, por razones distintas, no van a estar contentos.', info: 'Dos sindicatos en una empresa cambian la negociación: el lunes hay mucho que estudiar.' },
          kusi: ['sorpresa', '¡Y la historia sigue!'] } },
      { id: 'b', label: 'Recibir la carta con cargo y reenviársela al gerente tal cual, sin comentar nada más.',
        res: { q: 'aceptable', fx: { cumplimiento: 2 },
          out: 'El gerente responde: «Eso no es una lista». Insistirá el lunes, y esta vez no tendrás el fin de semana para pensar qué decirle.',
          pro: { ok: 'Recibes bien y no haces listas.', risk: 'No explicarle al gerente por qué no corresponde deja la puerta abierta a que alguien más la haga.' },
          kusi: ['pensando', 'El lunes vuelve a pedirla…'] } },
      { id: 'c', label: 'Recibir la carta y anotar los nombres de los veintitrés para el gerente: es la empresa la que tiene que saber con quién va a tratar.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6 }, rel: { arturo: -1 }, flags: ['lista_firmantes'],
          out: 'Anotas los nombres en tu libreta mientras Jhon te mira en silencio. Esa lista, en manos de un gerente molesto, es exactamente lo que la libertad sindical prohíbe.',
          pro: { ok: 'Cumples la orden del gerente.', risk: 'Elaborar listas de quienes forman un sindicato puede leerse como un acto contra la libertad sindical, y esos trabajadores están protegidos por el fuero.' },
          kusi: ['indignado', '¡Una lista así es un peligro!'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT, art. 14: un sindicato de empresa necesita al menos veinte afiliados. Art. 31: los miembros de sindicatos en formación tienen fuero sindical desde la solicitud de registro y hasta tres meses después.']],
    mirada: {
      ve: 'Justo cuando parecía que todo cerraba, la planta te recuerda que las relaciones laborales nunca terminan: se transforman. El lunes empieza otra historia, y la vas a empezar como empezaste esta, con un sello, una hora y respeto.',
      visual: { tipo: 'linea', titulo: 'Lo que viene en la Semana 3', hitos: [['Lunes', 'El otro sindicato'], ['Semana 3', 'Resolución de la inspección'], ['15 de febrero', 'Revisión trimestral del acta']] },
      normas: [{ ley: 'TUO de la LRCT (D.S. 010-2003-TR), arts. 14 y 31', dice: 'Los sindicatos de empresa deben afiliar por lo menos a veinte trabajadores para constituirse y subsistir. Los miembros de los sindicatos en formación están amparados por el fuero sindical desde la presentación de la solicitud de registro y hasta tres meses después.', practica: 'Veintitrés firmas: más que el mínimo, y todos protegidos desde hoy.' }],
    },
  },
];
