// Especialista en RR.HH. de entidad pública · Capítulo 8 · «El hallazgo» · Semana 2, miércoles.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Normas citadas:
// - Ley 29248, Ley del Servicio Militar, art. 61 (modificado por la Ley 31488): bonificación del 10 % a licenciados de las
//   FF.AA. en concursos públicos. SERVIR indica que la entidad debe verificar que la condición de licenciado se obtuvo
//   desde el 1 de enero de 2009 (vigencia de la ley) y que los egresados de colegios militares no son licenciados (art. 57).
//   https://cdn.www.gob.pe/uploads/document/file/8179578/6842042-informe-tecnico-n-283-2025-servir-gpgsc.pdf
//   https://lpderecho.pe/la-bonificacion-del-10-a-favor-de-licenciados-de-las-ff-aa-es-solo-para-acceder-al-empleo-publico-y-se-aplica-a-procedimientos-de-ascenso-informe-tecnico-000831-2026-servir-gpgsc/
//   https://lpderecho.pe/servir-marco-falconi-no-debio-recibir-bonificacion-concurso-jnj/
// - Ley 29973 (bonificación del 15 % a personas con discapacidad), ya citada en el capítulo 1.
// - Ley 29733 (datos personales), ya citada en el capítulo 5.

export const CAP = {
  n: 8, titulo: 'El hallazgo', dia: 'Semana 2, miércoles', foto: 'assets/esc/lupa.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '07:30', fin: '17:45', cierreHora: '17:30',
  apertura: 'Miércoles. Llegas a las 7:30 con dos cafés de la máquina. La plaza todavía está vacía; solo pasan los camiones de leche que bajan de Chetilla y un señor que barre las hojas del ficus.', boton: 'Abrir la matriz',
  kusi: 'Hoy vas a encontrar un error que no cometiste. Lo que hagas con él sí será tuyo.',
  lead: 'Encontraste una bonificación mal aplicada en el concurso anterior, respondiste por escrito a la comisión, propusiste corregir el resultado aunque doliera, hablaste con honestidad con el ganador y cambiaste el método para el concurso que viene.',
  reflexion: '¿Qué le debe una institución a la persona que perdió una plaza por un error que no fue suyo?',
  siguiente: { n: 9, titulo: 'La publicación', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'oci', p: 'Comisión de control: CAS 003 y 004', j: 'CPC Rocío Alcántara', d: 0, e: 'Segundo día' },
  { id: 'bonif', p: 'Bonificaciones del CAS 004', j: 'ORH', d: 0, e: 'Por revisar' },
  { id: 'concurso', p: 'Concurso CAS 005-2026', j: 'Marisol · ORH', d: 0, e: 'Se publica mañana' },
  { id: 'acceso', p: 'Solicitud de Eder Rojas', j: 'ORH', d: 0, e: 'En plazo' },
];

export const FUTURO = {
  bonif_detectada: ['Encontraste que el ganador de informática recibió una bonificación que no le correspondía.', 'Se sabrá cuando se publique el informe de control, en la Semana 3.'],
  resultado_revisar: ['Propusiste que Asesoría Legal evalúe cómo corregir el resultado del CAS 004.', 'Nilda Cueva, la segunda del orden de mérito, será citada en la Semana 3.'],
  resultado_mantener: ['Propusiste mantener el resultado del CAS 004 porque el contrato ya estaba firmado.', 'La auditora lo dejará escrito como riesgo en su informe, en la Semana 3.'],
  resultado_silencio: ['Corregiste el método para el concurso nuevo sin decir nada del anterior.', 'Eder hará la cuenta solo y lo publicará en Facebook en el capítulo 9.'],
  wilder_verdad: ['Le dijiste a Wílder, el ganador, que su bonificación está en revisión.', 'Él pedirá su propia defensa por escrito en la Semana 3.'],
  verificacion_bonif: ['Dejaste en las bases un paso para verificar la fecha de licenciamiento.', 'Asesoría Legal lo destacará en el capítulo 9.'],
  eder_informado: ['Le explicaste a Eder lo que se encontró, sin adelantar decisiones.', 'Lo verás en la publicación del capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
  regidor: { n: 'Regidor Manuel Tello', sub: 'Regidor municipal', who: 'regidor' },
};

export const WSP = [
  { chat: 'marisol', t: '07:35', de: 'Marisol', txt: 'Ya estoy subiendo. ¿Trajiste café? 😅', si: 'marisol_reconciliada' },
  { chat: 'grupo', t: '09:00', de: 'Don Segundo', txt: 'Del archivo central dicen que no tienen ninguna acta del CAS 003. Que eso nunca les llegó.', si: 'acta_buscada' },
  { chat: 'regidor', t: '11:45', de: 'Regidor Tello', txt: 'Me cuentan que usted habló con la Contraloría de mí. Qué decepción, señorita.', si: 'presion_contada' },
  { chat: 'eder', t: '17:30', de: 'Eder', txt: 'Gracias por decirme las cosas como son. Mañana veo la publicación.', si: 'eder_informado' },
];

export const CORREOS = [
  { t: '08:10', de: 'CPC Rocío Alcántara · Comisión de control', para: 'ORH', asunto: 'Requerimiento de información N.° 2', html: '<p>Se solicita a la ORH explicar por escrito, hoy, la aplicación de la bonificación por licenciado de las FF.AA. al ganador de la plaza de técnico en informática del CAS 004-2026, adjuntando el documento con el que acreditó dicha condición.</p>' },
  { t: '09:30', de: 'CPC Rocío Alcántara · Comisión de control', para: 'ORH', asunto: 'Acta de instalación del CAS 005', html: '<p>Se tomó conocimiento del acta de instalación del comité del CAS 005-2026, que registra la abstención de un miembro por parentesco y la designación de su reemplazo. Se considera una buena práctica.</p>', si: 'terrones_abstencion' },
  { t: '09:30', de: 'CPC Rocío Alcántara · Comisión de control', para: 'ORH', asunto: 'Consulta sobre el comité del CAS 005', html: '<p>Se solicita informar por qué un miembro del comité del CAS 005-2026 continúa evaluando la plaza a la que postularía su sobrino, según la información recibida.</p>', si: 'terrones_queda' },
];

export const QUIZ = [
  { q: '¿Qué debe verificar la entidad antes de dar la bonificación por licenciado de las FF.AA.?', ops: ['Nada, basta que lo diga', 'Que la condición de licenciado se obtuvo desde el 1 de enero de 2009, según SERVIR', 'Que tenga uniforme', 'Que sea varón'], ok: 1, por: 'SERVIR indica verificar que el licenciamiento sea en el marco de la Ley 29248, desde el 1 de enero de 2009.' },
  { q: '¿Un egresado de un colegio militar es licenciado de las FF.AA. para la bonificación?', ops: ['Sí, siempre', 'No: la Ley 29248 lo excluye de esa condición', 'Solo si es de Lima', 'Depende del alcalde'], ok: 1, por: 'SERVIR, citando el art. 57 de la Ley 29248, ha señalado que no tienen la condición de licenciados.' },
  { q: 'Encuentras que un ganador de hace meses recibió una bonificación indebida. ¿Qué es lo más responsable?', ops: ['Callarlo: ya firmó', 'Informarlo y pedir a Asesoría Legal que evalúe cómo corregir el resultado', 'Despedirlo hoy', 'Contarlo en Facebook'], ok: 1, por: 'La ORH informa y propone; la decisión de corregir un acto ya firmado requiere análisis legal.' },
  { q: '¿Qué le dices al ganador cuyo resultado está en revisión?', ops: ['Que no pasa nada', 'La verdad: hay una observación en revisión y podrá presentar sus descargos', 'Que renuncie', 'Nada'], ok: 1, por: 'Tiene derecho a saber y a defenderse.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '07:50', ch: 'documento', who: null, titulo: 'La matriz del CAS 004', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio, con dos cafés', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>${F.has('jr_informado') ? 'Ayer le dijiste a la auditora lo que contó el ex jefe. Hoy te toca revisarlo tú.' : 'La auditora pidió explicar la bonificación del ganador de informática.'} Abres el Excel del CAS 004 y la constancia de licenciamiento de Wílder Chuquiruna, el ganador.</p><p>La constancia dice: «Licenciado del Ejército del Perú el 15 de marzo de 2007». <mark class="clave">Marca lo que no cuadra</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas de la matriz que incumplen la ley o que no se pueden sostener.',
    doc: { t: 'Matriz de resultados · Técnico en informática', sub: 'CAS 004-2026 · Columna «Bonif.» escrita a mano' },
    lines: [
      { id: 'eval', t: 'Wílder Chuquiruna: curricular 30, entrevista 35, subtotal 65.' },
      { id: 'bonif', t: 'Wílder Chuquiruna: bonificación FF.AA. +10 % · licenciado en 2007.', bad: LEY, why: 'SERVIR indica que la bonificación de la Ley 29248 corresponde a quien obtuvo la condición de licenciado desde el 1 de enero de 2009. Un licenciamiento de 2007 no cumple esa condición.' },
      { id: 'final', t: 'Wílder Chuquiruna: puntaje final 71.5 · GANADOR.', bad: BP, why: 'Sin la bonificación, su puntaje sería 65, menos que la segunda.' },
      { id: 'nilda', t: 'Nilda Cueva: curricular 33, entrevista 34, puntaje final 67 · segundo lugar.' },
      { id: 'verif', t: 'Verificación de la condición de licenciado: «conforme» (sin firma ni fecha).', bad: BP, why: 'Un «conforme» sin firma ni fecha no dice quién verificó qué. Nadie miró la fecha de la constancia.' },
      { id: 'disc', t: 'Bonificación por discapacidad: no aplica a ningún postulante de esta plaza.' },
      { id: 'mano', t: 'Columna de bonificaciones escrita a mano después de imprimir.', duda: 'No es ilegal en sí, pero una corrección a mano sin firma en un documento oficial debilita su valor.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? 'Ves que el puntaje final es alto, pero no relacionas la fecha de la constancia con la ley. La auditora sí lo hará.' : `Haces la cuenta dos veces en la calculadora del celular: sin la bonificación, Wílder tiene 65 y Nilda Cueva, 67. ${hitsBp ? 'Y la verificación nunca tuvo firma. ' : ''}La plaza era de Nilda. Se te enfría el café en la mano.`,
      flags: missLey ? [] : ['bonif_detectada'],
      cartera: { bonif: missLey ? 'Revisadas sin hallazgo propio' : 'Bonificación indebida: cambia el ganador' },
      pro: { ok: 'Una bonificación se verifica con la norma y con la fecha del documento, no con un «conforme».', risk: 'Un error de cálculo en un concurso cambia la vida de dos personas.', info: 'Guarda tu cálculo con fecha y firma: es tu papel de trabajo.' },
      kusi: missLey ? ['preocupado', 'La fecha de la constancia lo decía todo…'] : ['sorpresa', 'La plaza era de otra persona.'],
    }),
    rules: [[LEY, 'Ley 29248, art. 61: bonificación del 10 % a licenciados de las FF.AA.; SERVIR indica verificar que el licenciamiento sea desde el 1 de enero de 2009.']],
    mirada: {
      ve: 'Los errores en concursos rara vez son grandes conspiraciones. Son una columna escrita a mano, un «conforme» sin firma, una fecha que nadie leyó. Pero detrás de cada uno hay alguien que perdió una plaza.',
      visual: { tipo: 'rango', titulo: 'Puntaje final, plaza de informática', min: 55, max: 75, banda: [65, 67], marcas: [['Wílder con bonificación', 71.5], ['Nilda Cueva', 67], ['Wílder sin bonificación', 65]] },
      normas: [{ ley: 'Ley 29248, art. 61 (modificado por la Ley 31488), según informes de SERVIR', dice: 'Otorga una bonificación del 10 % a los licenciados de las FF.AA. en concursos públicos. SERVIR ha indicado verificar que la condición de licenciado se obtuvo desde el 1 de enero de 2009.', practica: 'La fecha de la constancia de licenciamiento es lo primero que se mira.' }],
    },
  },
  {
    id: 'h2', t: '09:40', ch: 'documento', who: 'marisol', titulo: 'La respuesta a la comisión', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de Marisol', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Marisol lee tu cálculo dos veces. ${F.has('acta_rehecha') ? 'Se le nota el miedo: «Ayer rehicimos un acta. Si ahora sale esto…». ' : ''}«Hay que responder hoy. Tú escribe, yo firmo.»</p><p><mark class="clave">Arma la respuesta pieza por pieza</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la respuesta.', boton: 'Pasar a firma',
    bloques: [
      { id: 'hecho', t: 'Lo que pasó', n: 2, ops: [
        { id: 'h1', t: 'Se aplicó una bonificación del 10 % a un postulante licenciado en 2007, sin verificar la fecha.', ok: true, por: 'El hecho, sin adornos.' },
        { id: 'h2', t: 'Sin la bonificación, el orden de mérito cambia: el segundo lugar habría obtenido el puntaje más alto.', ok: true, por: 'La consecuencia, con números.' },
        { id: 'h3', t: 'Se trató de un error menor sin consecuencias.', ok: false, por: 'Cambió quién ganó la plaza. No es menor.' },
      ] },
      { id: 'causa', t: 'Por qué pasó', n: 2, ops: [
        { id: 'c1', t: 'La matriz no tenía un paso de verificación de la fecha de licenciamiento.', ok: true },
        { id: 'c2', t: 'La verificación figura como «conforme», sin firma ni fecha.', ok: true },
        { id: 'c3', t: 'Fue responsabilidad exclusiva del ex jefe, Ing. Jorge Ramírez.', ok: false, por: 'Determinar responsabilidades le toca a la comisión, no a la ORH.' },
      ] },
      { id: 'medida', t: 'Qué propone la ORH', n: 2, ops: [
        { id: 'm1', t: 'Solicitar a Asesoría Legal que evalúe las acciones para corregir el resultado.', ok: true },
        { id: 'm2', t: 'Incorporar en el CAS 005 un paso de verificación de la fecha de licenciamiento, con firma.', ok: true },
        { id: 'm3', t: 'Archivar el caso porque el contrato ya está firmado.', ok: false, por: 'Un contrato firmado no convierte en correcto un resultado mal calculado.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 1, etica: q === 'riesgosa' ? -3 : 3, calidad: q === 'buena' ? 3 : 0 }, rel: { auditora: q === 'buena' ? 1 : 0 },
        cartera: { oci: q === 'riesgosa' ? 'Respuesta que minimiza el error' : 'Respuesta con hecho, causa y medidas' },
        out: q === 'buena' ? 'Marisol firma sin cambiar una coma. La auditora recibe la carta a las 11:10 y dice solo una frase: «Gracias por no hacerme buscarlo».' : q === 'aceptable' ? 'La respuesta sale. Una de las frases la vas a tener que explicar.' : 'La carta sale. La auditora la lee, la deja a un lado y abre su propia hoja de cálculo.',
        pro: { ok: 'Hecho, causa y medida: lo que necesita leer quien controla.', risk: 'Minimizar o culpar a una persona debilita toda la respuesta.', info: 'Adjunta tu cálculo como anexo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Hecho, causa y medida!' : 'Algunas piezas no ayudan.'],
      };
    },
    mirada: {
      ve: 'Responder bien a un hallazgo no es defenderse: es mostrar que la oficina entiende qué falló y cómo evitará que vuelva a pasar. Eso es lo que diferencia un error de una práctica.',
      visual: { tipo: 'flujo', titulo: 'Una buena respuesta', pasos: ['El hecho', 'La consecuencia', 'La causa', 'La medida'] },
    },
  },
  {
    id: 'h3', t: '11:40', ch: 'presencial', who: null, titulo: 'El gerente municipal', banner: 'assets/3d/scenes/municipalidad.webp', lugar: 'Gerencia Municipal', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>El licenciado Zegarra te hace pasar con Marisol. Tiene la carta en la mano, subrayada con lapicero rojo. «Wílder trabaja bien. Tiene dos hijos. Ya firmó hace meses. Y la señora Cueva ni siquiera ha reclamado.»</p><p>«Díganme qué recomienda la ORH. <mark class="clave">Lo que ustedes digan, yo lo sostengo ante el alcalde</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recomendar que Asesoría Legal evalúe cómo corregir el resultado, que se informe a Nilda Cueva y que Wílder pueda presentar sus descargos.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, personas: -1 }, flags: ['resultado_revisar'], cartera: { bonif: 'En Asesoría Legal: evaluación para corregir el resultado' },
          out: 'El gerente suspira largo. «Va a doler.» Firma el memorando a Asesoría Legal con su lapicero rojo. «Pero que a Wílder lo traten con respeto. Él no inventó la bonificación.»',
          pro: { ok: 'Propones corregir sin decidir tú lo que le toca a Legal, y cuidas el derecho de defensa de ambos.', risk: 'Wílder puede perder un trabajo que hizo bien por un error que no cometió.', info: 'Pregunta a Legal qué plazos tiene la entidad para revisar un acto como este.' },
          kusi: ['animo', 'Duele, pero es lo justo para Nilda.'] } },
      { id: 'b', label: 'Recomendar mantener el resultado: el contrato está firmado, Wílder trabaja bien y corregir ahora haría más daño.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4, personas: 2 }, flags: ['resultado_mantener'], cartera: { bonif: 'Resultado mantenido por recomendación de la ORH' },
          out: 'El gerente parece aliviado. Marisol no dice nada. En la tarde, la auditora pregunta si alguien consultó a Asesoría Legal antes de decidir.',
          pro: { ok: 'Proteges a un trabajador que no tuvo la culpa.', risk: 'Nilda Cueva perdió una plaza que ganó. Decidir no corregir sin análisis legal también es una decisión con responsabilidad.' },
          kusi: ['triste', '¿Y Nilda?'] } },
      { id: 'c', label: 'No recomendar nada sobre el CAS 004. Concentrarse en que el CAS 005 salga sin ese error.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, etica: -2, tiempo: 2 }, flags: ['resultado_silencio'], cartera: { bonif: 'Sin recomendación; se corrige solo hacia adelante' },
          out: 'El gerente asiente, agradecido de no tener que decidir. El tema queda en manos de la comisión. Y de Eder, que ya tiene los puntajes.',
          pro: { ok: 'Evitas un conflicto hoy y mejoras el próximo concurso.', risk: 'Corregir hacia adelante sin mirar atrás deja a una persona sin respuesta.' },
          kusi: ['pensando', 'Hacia adelante está bien… ¿y hacia atrás?'] } },
    ],
    rules: [[LEY, 'Ley 29248, art. 61: la bonificación del 10 % se otorga a quien cumple la condición de licenciado.'], [BP, 'La ORH informa el error y propone; la forma de corregir un resultado firmado la evalúa Asesoría Legal.']],
    mirada: {
      ve: 'Aquí no hay villanos: Wílder trabaja bien, el gerente no quiere hacer daño y Nilda ni siquiera sabe lo que perdió. Por eso es tan difícil. El mérito no se defiende solo cuando es cómodo.',
      visual: { tipo: 'balanza', a: { t: 'Mantener el resultado', items: ['Wílder conserva su trabajo', 'Nadie se entera… por ahora', 'Nilda pierde lo que ganó'] }, b: { t: 'Revisar con Asesoría Legal', items: ['Nilda recibe lo que le corresponde', 'Wílder puede defenderse', 'La entidad corrige su error'] } },
    },
  },
  {
    id: 'h4', t: '14:00', ch: 'presencial', who: null, titulo: 'Wílder', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Pasillo del segundo piso', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Wílder Chuquiruna te espera en el pasillo. Tiene 41 años, la camisa bien planchada y la credencial colgada del cuello. ${F.has('acceso_total') ? 'Ya sabe que su domicilio llegó a otro postulante, y ahora esto. ' : ''}Alguien le contó que «hay un problema con su concurso».</p><p>«Señorita, ¿me van a botar? <mark class="clave">Yo presenté lo que me pidieron</mark>. Me dijeron que mi constancia del Ejército sí contaba.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle la verdad: hay una observación sobre la bonificación, nada está decidido, Asesoría Legal lo evaluará y él podrá presentar sus descargos por escrito.',
        res: { q: 'buena', fx: { personas: 3, etica: 4, confianza: 1 }, flags: ['wilder_verdad'],
          out: 'Wílder se queda mirando la ventana. «Gracias por decírmelo de frente. Todos me miran raro y nadie me dice nada.» Le explicas cómo presentar su escrito.',
          pro: { ok: 'Respetas su derecho a saber y a defenderse, sin adelantar una decisión que no es tuya.', info: 'No le digas cuál será el resultado: no lo sabes.' },
          kusi: ['animo', 'La verdad con cuidado también es respeto.'] } },
      { id: 'b', label: 'Tranquilizarlo: «No se preocupe, seguro no pasa nada. Usted trabaja bien».',
        res: { q: 'riesgosa', fx: { personas: 2, etica: -3, confianza: -2 },
          out: 'Wílder sonríe aliviado. Si el resultado cambia, recordará que fuiste tú quien le dijo que no pasaría nada.',
          pro: { ok: 'Le quitas angustia por hoy.', risk: 'Prometes algo que no depende de ti.' },
          kusi: ['preocupado', '«Seguro no pasa nada» es una promesa…'] } },
    ],
    mirada: { ve: 'Wílder no hizo trampa: le dijeron que su constancia valía. Cuidar a la persona que puede perder algo por un error de la entidad es parte del trabajo de ORH, tanto como cuidar a quien perdió.' },
  },
  {
    id: 'h5', t: '15:30', ch: 'documento', who: null, titulo: 'Que no vuelva a pasar', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio, con las bases del CAS 005', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Mañana se publica el CAS 005. Todavía puedes agregar a las bases el procedimiento de bonificaciones. Don Segundo te mira: «Si lo escribe, yo lo cumplo».</p><p><mark class="clave">Ordena los pasos</mark> para que cualquier persona pueda aplicarlos igual.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para aplicar una bonificación.', boton: 'Agregar a las bases',
    items: [
      { id: 'decl', t: 'El postulante declara la bonificación y adjunta el documento que la acredita', por: 'Sin documento no hay bonificación.' },
      { id: 'fecha', t: 'La ORH verifica el documento: para licenciados, la fecha de licenciamiento', por: 'Desde el 1 de enero de 2009, según SERVIR.' },
      { id: 'firma', t: 'Quien verifica firma y fecha la verificación en la matriz', por: 'Que se sepa quién verificó qué.' },
      { id: 'aplica', t: 'Se aplica la bonificación en la etapa que indican las bases', por: 'Igual para todos, en el mismo momento.' },
      { id: 'publica', t: 'Se publica el resultado con la bonificación visible en una columna aparte', por: 'Cualquiera puede revisar la cuenta.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, cumplimiento: q === 'buena' ? 4 : 1 },
        flags: q === 'riesgosa' ? [] : ['verificacion_bonif'], cartera: { concurso: q === 'riesgosa' ? 'Bases sin procedimiento claro de bonificaciones' : 'Bases con verificación de bonificaciones' },
        out: q === 'buena' ? 'Agregas el anexo a las bases. Media página. Don Segundo lo imprime y lo pega junto al cronograma: «Esto debió estar hace años».' : 'El anexo queda en las bases, aunque un paso podría leerse de dos maneras.',
        pro: { ok: 'Un procedimiento escrito convierte una costumbre en una regla verificable.', info: 'La columna de bonificaciones separada permite que cualquier postulante revise la cuenta.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Un error que se volvió regla!' : 'Revisa el orden.'],
      };
    },
    mirada: {
      ve: 'La mejor respuesta a un hallazgo es cambiar el método. El error del CAS 004 no fue de una persona: fue de un procedimiento que no existía.',
      visual: { tipo: 'cambio', titulo: 'Bonificaciones', pares: [['«Conforme» sin firma', 'Verificación firmada y fechada'], ['+10 a mano', 'Columna aparte, publicada'], ['«Me dijeron que contaba»', 'Requisitos escritos en las bases']] },
    },
  },
  {
    id: 'h6', t: '16:50', ch: 'whatsapp', who: 'eder', titulo: 'Lo que Eder ya sabía', banner: 'assets/foto2/caminan.webp', lugar: 'Tu escritorio, ya oscureciendo', show: ['personas', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Eder te escribe: «Señorita, ¿y lo de la bonificación?». ${F.has('eder_le_dijiste_error') ? 'Tiene la captura de tu mensaje del viernes, donde dijiste que «seguro hubo un error».' : F.has('acceso_parcial') ? 'Él fue el primero en verlo, con los puntajes que le entregaste.' : 'No sabes cómo se enteró.'}</p><p>Eder no fue perjudicado directamente: se cayó en la curricular. Pero preguntó. <mark class="clave">¿Qué le respondes?</mark></p>`,
    type: 'compose', enviaA: 'eder', para: 'Para: Eder Rojas · Postulante', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Lo que puedes decir', ops: [
        { id: 'q1', t: 'Eder, gracias por tu pregunta. Revisamos la bonificación y encontramos una observación, que ya está en manos de quien debe evaluarla.', ok: true, por: 'Le reconoces que preguntó y le dices lo que es público dentro de la ORH, sin detalles de terceros.' },
        { id: 'q2', t: 'Tenías razón: el ganador no debió ganar.', ok: false, por: 'Adelantas una conclusión que no está decidida y expones a un tercero.' },
      ] },
      { id: 'otro', t: 'Sobre otras personas', ops: [
        { id: 'o1', t: 'No puedo darte detalles de otros postulantes, pero lo que se decida será por escrito.', ok: true, por: 'Proteges a Wílder y a Nilda.' },
        { id: 'o2', t: 'La que debió ganar es Nilda Cueva, de San Marcos.', ok: false, por: 'Das un nombre que no te corresponde dar.' },
      ] },
      { id: 'cierre', t: 'El cierre', ops: [
        { id: 'c1', t: 'Y mañana sale el CAS 005, con un procedimiento nuevo de bonificaciones.', ok: true, por: 'Le muestras que su pregunta sirvió para algo.' },
        { id: 'c2', t: 'Ya no preguntes más por esto, por favor.', ok: false, por: 'Preguntar es su derecho.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.otro === 'o2' || sel.cierre === 'c2', buenas = ['q1', 'o1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 3 : 0, cumplimiento: mal ? -3 : 3, confianza: q === 'buena' ? 3 : 0 }, rel: { eder: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['eder_informado'] : sel.otro === 'o2' ? ['nilda_expuesta'] : [],
        out: q === 'buena' ? 'Eder tarda en responder. Luego escribe: «Gracias por no tratarme como loco». Es la primera vez que te agradece algo sin un «pero».' : mal ? 'Eder responde con tres signos de exclamación y una captura. Esa conversación ya no es solo tuya.' : 'Eder responde «ok, gracias». No sabes si quedó conforme.',
        pro: { ok: 'Le reconoces su pregunta sin exponer a nadie ni adelantar decisiones.', risk: 'Lo que escribes a un postulante puede terminar en una red social.', info: 'Un «gracias por preguntar» desarma más desconfianza que cualquier explicación.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? 'Su pregunta sirvió. ¡Díselo!' : 'Cuidado: eso no te tocaba decirlo.'],
      };
    },
    mirada: {
      ve: 'Eder llegó el primer día sospechando que todo estaba arreglado. No estaba arreglado: estaba mal hecho. Reconocerle que su pregunta destapó algo real es una forma de devolverle confianza en el Estado.',
      visual: { tipo: 'mensaje', titulo: 'Reconocer sin exponer', txt: 'Gracias por tu pregunta. Encontramos una observación que ya está en manos de quien debe evaluarla. No puedo darte detalles de otros postulantes. Mañana sale el CAS 005, con un procedimiento nuevo.' },
    },
  },
];
