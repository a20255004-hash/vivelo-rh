// Gerente/a de Gestión Humana · Capítulo 3 · «Los números» · Semana 1, miércoles.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida. Hoy aparecen los costos ocultos.
// Normas citadas (textos oficiales en docs/normas/txt):
// - D.S. 007-2002-TR (TUO de la Ley de jornada), art. 9: el sobretiempo es voluntario; su imposición es infracción.
// - D.S. 007-2002-TR, art. 10: recargo mínimo del 25 % por hora en las dos primeras horas y 35 % en las restantes.
// - D.S. 007-2002-TR, art. 10-A: el empleador está obligado a registrar el trabajo en sobretiempo.
// - Ley 29733, art. 2, num. 5: los datos de salud son datos sensibles.
// Las cifras de Grupo Vida (horas extra, vacantes, rotación, costo de reemplazo) son ficticias y se presentan como
// estimaciones internas del personaje.

export const CAP = {
  n: 3, titulo: 'Los números', dia: 'Semana 1, miércoles', foto: 'assets/esc/planilla.webp',
  lugar: 'Grupo Vida · Oficina corporativa de San Isidro',
  inicio: '08:00', fin: '19:30', cierreHora: '19:10',
  apertura: 'Miércoles. Jorge llega a las 7:40 con ojeras y una laptop que no ha cerrado desde ayer. «Encontré algo», dice, y no se sienta. En Lima no sale el sol desde hace una semana.', boton: 'Ver lo que encontró',
  kusi: 'Hoy los números hablan. Tu trabajo es escucharlos bien… y no hacerles decir lo que no dicen.',
  lead: 'Limpiaste el informe de costos ocultos, separaste lo que los datos prueban de lo que no, frenaste horas extra impuestas, calculaste lo que cuesta una renuncia y armaste un modelo con Finanzas.',
  reflexion: '¿Qué costo de tu organización nadie está mirando porque no aparece como una línea del presupuesto?',
  siguiente: { n: 4, titulo: 'El sindicato', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Reducción de costos del 10 %', j: 'Directorio', d: 0, e: 'Faltan 8 días' },
  { id: 'datos', p: 'Costos ocultos', j: 'Jorge Lazo · Compensaciones', d: 0, e: 'Primer informe' },
  { id: 'he', p: 'Horas extra de Los Olivos', j: 'Jefatura de UCI', d: 0, e: 'Por revisar' },
  { id: 'modelo', p: 'Modelo con Finanzas', j: 'Rodrigo Benavides', d: 0, e: 'Sin acuerdo' },
  { id: 'sindicato', p: 'Sindicato de enfermería', j: 'Silvia Quispe', d: 0, e: 'Asamblea mañana' },
];

export const FUTURO = {
  informe_limpio: ['El informe de costos ocultos no expone diagnósticos ni nombres.', 'Podrás mostrarlo al directorio y al sindicato.'],
  hallazgo_vacantes: ['Entendiste que las horas extra de enfermería vienen de 42 vacantes sin cubrir.', 'Es el centro de tu propuesta.'],
  horas_frenadas: ['Ordenaste que las horas extra de la UCI sean voluntarias y registradas.', 'Nora lo sabrá antes que tú se lo digas.'],
  horas_toleradas: ['Dejaste que la UCI siga programando horas extra obligatorias «hasta contratar».', 'Está en el pliego del sindicato.'],
  rotacion_costeada: ['Calculaste lo que cuesta reemplazar a una enfermera.', 'Mariela lo usará para defender la inducción.'],
  modelo_conjunto: ['Rodrigo y tú tienen un modelo con supuestos compartidos.', 'Finanzas no lo desarmará en el directorio.'],
  modelo_solo: ['Tus números son solo tuyos.', 'Rodrigo los cuestionará frente a todos.'],
};

export const CHATS = {
  jefaturas: { n: 'GH · Jefaturas', sub: 'Jorge, Silvia, Mariela y tú', c: '#0F2A3D' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
  rodrigo: { n: 'Rodrigo Benavides', sub: 'Gerente de Finanzas', c: '#C05621' },
  silvia: { n: 'Silvia Quispe', sub: 'Jefa de Relaciones Laborales', c: '#8A5A2B' },
  mariela: { n: 'Mariela Tang', sub: 'Jefa de Desarrollo y Capacitación', c: '#2E7D7A' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'jefaturas', t: '08:31', de: 'Silvia', txt: 'Reunión de pie: lista. Mañana asamblea del sindicato a las 7 p. m. en SJL. Nora pidió el auditorio de la clínica.' },
  { chat: 'mariela', t: '09:40', de: 'Mariela', txt: 'Estoy midiendo cuánto duran las enfermeras que pasaron por la inducción vs. las que no. Para el viernes 🤞' },
  { chat: 'silvia', t: '12:10', de: 'Silvia', txt: 'Ya me llamaron de la UCI de Los Olivos. Dicen que «Gestión Humana prohibió las horas extra». Nora se enteró en 10 minutos 🙃', si: 'horas_frenadas' },
  { chat: 'rodrigo', t: '17:20', de: 'Rodrigo', txt: 'Ok, tus supuestos son razonables. Pongo los míos al lado y que el directorio vea los dos.', si: 'modelo_conjunto' },
  { chat: 'rodrigo', t: '17:20', de: 'Rodrigo', txt: 'Contratar para ahorrar. Me lo vas a tener que explicar con algo más que fe.', si: 'modelo_solo' },
  { chat: 'gg', t: '19:05', de: 'Fernando', txt: 'Leí tu tablero. Por primera vez entiendo por qué pagamos tanto en horas extra. Sigue.', si: 'informe_limpio' },
];

export const CORREOS = [
  { t: '07:55', de: 'Jorge Lazo · Compensaciones', para: 'Gerencia de Gestión Humana', asunto: 'Costos ocultos · octubre (borrador)', html: '<p>Te adjunto el primer informe. Horas extra: S/ 620 mil en octubre, el 72 % en enfermería. Los Olivos es la clínica con más horas por persona. Tengo dudas sobre cómo presentar el ausentismo: lo armé por diagnóstico.</p><p>Jorge</p>' },
  { t: '14:30', de: 'Mariela Tang · Desarrollo', para: 'Gerencia de Gestión Humana', asunto: 'Dato preliminar', html: '<p>De las 61 enfermeras que se fueron este año, 44 tenían menos de un año en el grupo. Las que pasaron por el programa de inducción de tres semanas se van bastante menos. Lo termino de cruzar para el viernes.</p><p>Mariela</p>' },
];

export const QUIZ = [
  { q: 'Según el D.S. 007-2002-TR, art. 9, el trabajo en sobretiempo es…', ops: ['Obligatorio si lo pide el jefe', 'Voluntario, salvo casos de fuerza mayor o hecho fortuito que pongan en peligro inminente a personas o bienes', 'Obligatorio en salud', 'Voluntario solo para practicantes'], ok: 1, por: 'El art. 9 dice que el sobretiempo es voluntario en su otorgamiento y en su prestación, con excepciones muy precisas.' },
  { q: '¿Cuál es el recargo mínimo por las dos primeras horas extra (D.S. 007-2002-TR, art. 10)?', ops: ['10 %', '25 %', '35 %', '50 %'], ok: 1, por: 'Las dos primeras horas se pagan con un recargo no menor al 25 % y las siguientes con no menos del 35 %.' },
  { q: 'Un informe de ausentismo para el directorio debe presentar los descansos médicos…', ops: ['Con nombre y diagnóstico', 'Agregados por clínica y turno, sin diagnósticos individuales', 'Solo los de enfermería', 'No se reportan'], ok: 1, por: 'Los datos de salud son sensibles (Ley 29733); para decidir basta con datos agregados.' },
  { q: 'Hay 42 vacantes de enfermería cubiertas con horas extra. ¿Qué te dicen los datos?', ops: ['Que hay que prohibir las horas extra', 'Que cubrir las vacantes podría costar menos que pagar horas extra, cansancio y renuncias', 'Que sobran enfermeras', 'Nada'], ok: 1, por: 'Las horas extra con recargo, el cansancio y la rotación son costos de no contratar.' },
  { q: 'Finanzas no confía en tus supuestos. ¿Qué es más útil?', ops: ['Defenderlos con más energía', 'Construir el modelo con Finanzas, con supuestos explícitos y escenarios', 'Usar los de Finanzas sin revisar', 'No mostrar supuestos'], ok: 1, por: 'Un modelo con supuestos compartidos no se desarma en la sesión del directorio.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:40', ch: 'documento', who: 'equipo', titulo: 'El informe de Jorge', banner: 'assets/esc/lupa.webp', lugar: 'Tu oficina · piso 7', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>${F.has('jorge_escuchado') ? 'Jorge cumplió: trabajó hasta la una de la mañana.' : 'Jorge te deja el informe sin comentarios.'} Doce páginas, gráficos de colores, una conclusión en negrita. Si esto llega al directorio, tiene que resistir cualquier pregunta.</p><p>Lo revisas como lo revisaría la doctora Rossi: <mark class="clave">buscando dónde falla</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la ley o lo que debería corregirse antes de que el informe salga de tu oficina.',
    doc: { t: 'Costos ocultos de personal · octubre', sub: 'Compensaciones · borrador para Gerencia' },
    lines: [
      { id: 'he', t: 'Horas extra: S/ 620 mil en el mes; 72 % en enfermería; Los Olivos concentra la mayor cantidad por persona.' },
      { id: 'diag', t: 'Anexo 3: descansos médicos de octubre con nombre, DNI y diagnóstico de cada trabajador, «para identificar abusos».', bad: LEY, why: 'Los datos de salud son datos sensibles (Ley 29733, art. 2). Para decidir sobre costos basta con datos agregados por clínica y turno.' },
      { id: 'vac', t: 'Vacantes de enfermería sin cubrir: 42 en el grupo, 17 en Los Olivos.' },
      { id: 'reg', t: 'Nota: en la UCI de Los Olivos, parte de las horas extra no figura en el registro de sobretiempo; se pagan «por planilla aparte».', bad: LEY, why: 'El empleador está obligado a registrar el trabajo en sobretiempo (D.S. 007-2002-TR, art. 10-A). Esto hay que corregirlo, no esconderlo.' },
      { id: 'prom', t: 'Conclusión: «el personal de enfermería es poco productivo, porque necesita más horas para el mismo trabajo».', bad: BP, why: 'Los datos no dicen eso: dicen que hay menos personas para el mismo trabajo. La conclusión culpa a quien hace las horas extra.' },
      { id: 'aus', t: 'Ausentismo: 6.8 % en promedio; más alto en clínicas con más turnos nocturnos.' },
      { id: 'rot', t: 'Rotación de enfermería: 61 salidas en el año; 44 con menos de un año de antigüedad.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, calidad: missLey ? -2 : 4, etica: missLey ? -2 : 2 },
      flags: missLey ? [] : ['informe_limpio'], cartera: { datos: missLey ? 'Informe con datos sensibles y conclusiones flojas' : 'Informe corregido y presentable' },
      out: missLey ? 'El informe queda como estaba. Un anexo con diagnósticos y nombres es exactamente el tipo de cosa que termina en un grupo de WhatsApp.' : 'Jorge rehace el anexo con datos agregados y cambia la conclusión: «Hay menos personas para el mismo trabajo». Lo de la «planilla aparte» lo subrayas en rojo: hay que regularizarlo.',
      pro: { ok: 'Un informe que resiste preguntas no tiene datos de más ni conclusiones que los datos no sostienen.', risk: 'Los diagnósticos individuales no sirven para decidir costos y exponen a la empresa.', info: 'Pide siempre: ¿qué decisión tomo con este dato?' },
      kusi: missLey ? ['preocupado', 'Ese anexo era una bomba.'] : ['celebra', '¡Datos limpios, conclusión honesta!'],
    }),
    rules: [[LEY, 'Los datos de salud son sensibles (Ley 29733, art. 2).'], [LEY, 'El sobretiempo se registra (D.S. 007-2002-TR, art. 10-A).']],
    mirada: {
      ve: 'El análisis de personas tiene dos trampas: usar datos que no se deben usar y sacar conclusiones que culpan a las personas de los problemas del sistema. «Necesitan más horas» y «son menos para el mismo trabajo» son dos historias muy distintas con los mismos números.',
      visual: { tipo: 'cambio', titulo: 'El informe, antes y después', pares: [['Diagnósticos con nombre', 'Ausentismo por clínica y turno'], ['Horas extra «por planilla aparte»', 'Todo el sobretiempo registrado'], ['«Enfermería poco productiva»', '«Menos personas para el mismo trabajo»']] },
    },
  },
  {
    id: 'c2', t: '10:00', ch: 'documento', who: null, titulo: 'Lo que dicen los datos', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de reuniones del piso 7', show: ['calidad', 'personas'],
    body: () => `<p>Con el informe limpio sobre la mesa, Jorge y tú anotan en la pizarra las afirmaciones que están circulando en el piso 9. Algunas las dijo Rodrigo, otras Silvia, otras nadie sabe quién.</p><p>Solo tres <mark class="clave">están respaldadas por los datos</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres afirmaciones que los datos sostienen.', boton: 'Subrayarlas', resumen: 'Subrayaste',
    cols: ['Afirmación', 'De dónde viene'],
    rows: [
      { id: 'vac', cells: ['Las horas extra de enfermería se explican por 42 vacantes sin cubrir.', 'Informe de Jorge'] },
      { id: 'rot', cells: ['La mayoría de las enfermeras que se van tienen menos de un año.', '44 de 61 salidas'] },
      { id: 'noc', cells: ['El ausentismo es mayor donde hay más turnos de noche.', 'Datos por clínica y turno'] },
      { id: 'flojas', cells: ['Las enfermeras faltan porque no les gusta trabajar.', 'Comentario en el piso 9'] },
      { id: 'sobra', cells: ['Sobra personal administrativo en todas las clínicas.', 'Rodrigo, sin datos todavía'] },
      { id: 'sueldo', cells: ['Se van porque en el grupo pagan poco.', 'Silvia, por intuición'] },
    ],
    score: { vac: 3, rot: 3, noc: 3, flojas: -3, sobra: -1, sueldo: 0 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 1 : -4, personas: picks.includes('flojas') ? -3 : 2 },
        flags: picks.includes('vac') ? ['hallazgo_vacantes'] : [], cartera: { datos: picks.includes('vac') ? 'Hallazgo: horas extra por vacantes' : 'Hallazgos dispersos' },
        out: q === 'buena' ? 'Jorge escribe en grande: «No sobran horas extra: faltan enfermeras». Lo de los sueldos queda como pregunta abierta para Mariela y Silvia.' : 'Subrayas, pero mezclas datos con intuiciones. El directorio va a notar la diferencia.',
        pro: { ok: 'Separas lo que los datos prueban de lo que es opinión o hipótesis.', risk: 'Una opinión presentada como dato es lo primero que la doctora Rossi va a desarmar.', info: 'Las intuiciones de Silvia valen: conviértelas en preguntas que se puedan medir.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Faltan enfermeras, no sobran horas. ¡Qué hallazgo!' : 'Dato y opinión no son lo mismo.'],
      };
    },
    mirada: {
      ve: 'Decidir con datos no es tener muchos números: es distinguir qué afirmación sostienen y cuál es una hipótesis. «Se van porque pagan poco» puede ser cierto, pero hoy es una intuición. Tratarla como hipótesis es más honesto, y más útil.',
      visual: { tipo: 'flujo', titulo: 'La cadena de los costos ocultos', pasos: ['42 vacantes', 'Horas extra con recargo', 'Cansancio en turnos de noche', 'Ausentismo', 'Renuncias en el primer año', 'Más vacantes'] },
    },
  },
  {
    id: 'c3', t: '11:30', ch: 'llamada', who: null, titulo: 'La UCI de Los Olivos', banner: 'assets/3d/scenes/hospital.webp', show: ['cumplimiento', 'personas', 'etica'],
    body: () => `<p>Llamas a la Lic. Gladys Tello, jefa de la UCI de Los Olivos. Lleva veinte años en cuidados intensivos y no tiene tiempo para nadie de corporativo. Se oye un monitor pitando.</p><p>«Las horas extra las pongo en el rol porque si no, no se cubre. Tengo cuatro vacantes y ocho camas llenas. <mark class="clave">¿Qué quiere que haga, que deje una cama sin enfermera?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Acordar con ella que desde hoy las horas extra se ofrecen y se registran, no se imponen; y que Gestión Humana prioriza esas cuatro vacantes y un apoyo temporal de otras clínicas mientras tanto.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 4, tiempo: -2 }, flags: ['horas_frenadas'], cartera: { he: 'UCI: horas extra voluntarias, registradas y vacantes priorizadas' },
          out: 'Gladys resopla. «Ofrecerlas. Ya. ¿Y si nadie acepta?» Le dices que ese día te llama a ti. Antes de colgar, te dice que hace tres años nadie de corporativo preguntaba por la UCI.',
          pro: { ok: 'Corriges la ilegalidad sin dejar camas descubiertas: das una salida.', risk: 'Si las vacantes no se cubren rápido, el problema vuelve.', info: 'Pide a Selección un plazo concreto para la UCI.' },
          kusi: ['animo', 'Legal y con salida. ¡Así!'] } },
      { id: 'b', label: 'Dejar que siga así hasta que se contraten las vacantes: es una UCI y la seguridad del paciente va primero.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, personas: -2 }, flags: ['horas_toleradas'], cartera: { he: 'UCI: horas extra obligatorias toleradas' },
          out: 'Gladys cuelga satisfecha. Las enfermeras de la UCI siguen saliendo de turnos de doce horas para entrar a otro. Lo de «hasta que se contrate» no tiene fecha.',
          pro: { ok: 'No hay camas sin cubrir hoy.', risk: 'Imponer sobretiempo es una infracción, y enfermeras agotadas tampoco son seguridad para el paciente.' },
          kusi: ['preocupado', '¿Seguridad del paciente con enfermeras agotadas?'] } },
      { id: 'c', label: 'Prohibir todas las horas extra en Los Olivos desde mañana, para cortar el costo.',
        res: { q: 'riesgosa', fx: { cumplimiento: 2, personas: -4, calidad: -3 }, flags: ['horas_cortadas'], cartera: { he: 'Los Olivos: horas extra prohibidas' },
          out: 'Gladys no dice nada. A las 7 de la noche te llama la gerente de la clínica: dos camas de la UCI quedaron sin enfermera y trasladaron a un paciente.',
          pro: { ok: 'Cortas el costo de golpe.', risk: 'Sin reemplazos, prohibir las horas extra deja servicios críticos descubiertos.' },
          kusi: ['indignado', 'Un costo no se corta a costa de un paciente.'] } },
    ],
    rules: [[LEY, 'El trabajo en sobretiempo es voluntario; su imposición es infracción (D.S. 007-2002-TR, art. 9).'], [BP, 'Antes de corregir una práctica ilegal en un servicio crítico, asegura la alternativa.']],
    mirada: {
      ve: 'Gladys no es la villana: es una jefa que cubre con lo que tiene. El problema de fondo es la falta de personal. Corregir lo ilegal sin resolver lo de fondo solo traslada el riesgo a los pacientes.',
      visual: { tipo: 'balanza', a: { t: 'Tolerar horas impuestas', items: ['Camas cubiertas hoy', 'Infracción', 'Enfermeras agotadas'] }, b: { t: 'Ofrecer, registrar y cubrir vacantes', items: ['Más trabajo para GH', 'Legal', 'Una salida real'] } },
      normas: [{ ley: 'D.S. 007-2002-TR, art. 9', dice: 'El trabajo en sobretiempo es voluntario, tanto en su otorgamiento como en su prestación, salvo hecho fortuito o fuerza mayor que ponga en peligro inminente a las personas o bienes. Su imposición es infracción.', practica: 'Las horas extra se ofrecen y se registran. Si nadie acepta, el problema es de dotación, no de voluntad.' }],
    },
  },
  {
    id: 'c4', t: '14:40', ch: 'documento', who: null, titulo: 'Lo que cuesta una renuncia', banner: 'assets/esc/reloj.webp', lugar: 'Tu oficina · piso 7', show: ['calidad', 'personas'],
    body: () => `<p>El dato de Mariela te da vueltas: 44 de las 61 enfermeras que se fueron tenían menos de un año. Rodrigo va a preguntar cuánto cuesta eso. Para responder, primero hay que entender <mark class="clave">qué pasa, paso a paso, cuando una enfermera renuncia</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena lo que ocurre cuando renuncia una enfermera nueva. Usa las flechas.', boton: 'Pasárselo a Jorge',
    items: [
      { id: 'ren', t: 'Presenta su renuncia y se va al terminar el plazo de preaviso', por: 'Empieza el costo.' },
      { id: 'he', t: 'Su turno se cubre con horas extra de sus compañeras', por: 'El primer costo es invisible: sobretiempo con recargo.' },
      { id: 'sel', t: 'Selección publica la vacante, entrevista y elige', por: 'Semanas de proceso.' },
      { id: 'exa', t: 'La nueva enfermera pasa su examen médico de ingreso y firma contrato', por: 'Costos de ingreso.' },
      { id: 'ind', t: 'Inducción y acompañamiento en el servicio', por: 'Tiempo de otras enfermeras.' },
      { id: 'cur', t: 'Meses de curva de aprendizaje hasta rendir como la anterior', por: 'El costo más difícil de ver.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, personas: 2 },
        flags: q === 'riesgosa' ? [] : ['rotacion_costeada'], cartera: { datos: q === 'riesgosa' ? 'Costo de rotación sin calcular' : 'Costo estimado de una renuncia: unos S/ 9,000' },
        out: q === 'buena' ? 'Jorge le pone un monto a cada paso con datos internos. Le sale una estimación de unos S/ 9,000 por renuncia. Por 61 salidas, más de medio millón al año. Nadie lo había sumado nunca.' : 'El cálculo sale, aunque con pasos cruzados. Jorge lo tendrá que rehacer.',
        pro: { ok: 'Haces visible un costo que nunca aparece como una línea del presupuesto.', info: 'Presenta la cifra como estimación, con sus supuestos. Así nadie podrá decir que la inventaste.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Medio millón escondido!' : 'Casi: el orden importa para costear.'],
      };
    },
    mirada: {
      ve: 'La rotación es el costo oculto por excelencia: no se paga en una sola factura, sino en horas extra, procesos de selección, inducciones y meses de menor rendimiento. Sumarlo paso a paso es lo que permite discutir con Finanzas en su propio idioma.',
      visual: { tipo: 'linea', titulo: 'Una renuncia, paso a paso', hitos: [['Día 1', 'Renuncia'], ['Semanas', 'Horas extra para cubrir'], ['Semanas', 'Selección'], ['Ingreso', 'Examen y contrato'], ['Primer mes', 'Inducción'], ['Meses', 'Curva de aprendizaje']] },
    },
  },
  {
    id: 'c5', t: '16:00', ch: 'presencial', who: null, titulo: 'Rodrigo no compra', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Finanzas · piso 8', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Rodrigo escucha tu argumento con los brazos cruzados. ${F.has('borrador_frenado') ? 'Todavía no te perdona las cuatro líneas tachadas del lunes.' : ''}</p><p>«A ver si entendí: el directorio pide recortar y tú propones contratar 42 enfermeras. Eso suena a cuento. <mark class="clave">Demuéstramelo o no lo defiendo</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle armar el modelo juntos: tus datos de horas extra y rotación, sus supuestos de costo, y tres escenarios con lo que cada uno ahorra y en cuánto tiempo.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 4 }, flags: ['modelo_conjunto'], cartera: { modelo: 'Modelo conjunto con Finanzas: tres escenarios' },
          out: 'Rodrigo descruza los brazos. «Si mis supuestos están en tu modelo, no puedo desarmarlo después, ¿no?» Se ríe. Pasan dos horas frente a su Excel. El escenario medio muestra que cubrir las vacantes ahorra más de lo que cuesta, a partir del cuarto mes.',
          pro: { ok: 'Un modelo con supuestos compartidos convierte a Finanzas en aliado.', risk: 'Tendrás que aceptar que algunos de sus supuestos sean más conservadores que los tuyos.', info: 'Escribe los supuestos en la primera hoja del modelo.' },
          kusi: ['celebra', 'De rival a coautor. ¡Qué bacán!'] } },
      { id: 'b', label: 'Mostrarle tus números con firmeza: los datos están claros y no necesitas su aprobación.',
        res: { q: 'aceptable', fx: { confianza: -2, calidad: 2 }, flags: ['modelo_solo'], cartera: { modelo: 'Tu modelo, sin Finanzas' },
          out: 'Rodrigo asiente sin convencerse. «Lo vemos en el directorio, entonces.» Sales con razón y sin aliado.',
          pro: { ok: 'Tus datos son sólidos.', risk: 'En el directorio, Finanzas tendrá su propio modelo para contradecir el tuyo.' },
          kusi: ['pensando', 'Tener razón no basta.'] } },
      { id: 'c', label: 'Dejar de lado lo de las vacantes y buscar otro ahorro que Rodrigo entienda más rápido.',
        res: { q: 'riesgosa', fx: { calidad: -4, personas: -2 }, flags: ['modelo_solo'], cartera: { modelo: 'Hallazgo de vacantes guardado en un cajón' },
          out: 'Rodrigo sonríe. Tú guardas en un cajón el hallazgo más importante de la semana.',
          pro: { ok: 'Evitas la discusión.', risk: 'Renuncias al único ahorro que no requiere despedir a nadie.' },
          kusi: ['triste', 'El mejor dato del día, en un cajón.'] } },
    ],
    rules: [[BP, 'Con Finanzas, comparte supuestos y escenarios: un modelo de ambos no se desarma en la mesa.']],
    mirada: {
      ve: '«Contratar para ahorrar» suena contradictorio hasta que se ponen los números lado a lado: las horas extra con recargo, la rotación y el ausentismo cuestan más que las personas que faltan. Pero ese argumento solo sobrevive al directorio si Finanzas lo hizo contigo.',
      visual: { tipo: 'rango', titulo: 'Ahorro mensual estimado al cubrir las 42 vacantes (miles de S/)', min: -50, max: 150, banda: [20, 90], marcas: [['Escenario pesimista', -10], ['Escenario medio', 55], ['Escenario optimista', 110]] },
    },
  },
  {
    id: 'c6', t: '18:10', ch: 'documento', who: null, titulo: 'El tablero para Fernando', banner: 'assets/esc/meta.webp', lugar: 'Tu oficina · piso 7', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>Fernando te pidió «una hoja, no doce». Con lo de hoy armas el tablero de costos ocultos que viajará hasta el directorio.</p><p><mark class="clave">Elige qué entra en la hoja</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del tablero.', boton: 'Enviar a Fernando',
    bloques: [
      { id: 'ind', t: 'Indicadores', n: 3, ops: [
        { id: 'i1', t: 'Horas extra por clínica y su relación con las vacantes.', ok: true },
        { id: 'i2', t: 'Costo estimado de la rotación del primer año.', ok: true },
        { id: 'i3', t: 'Ausentismo por clínica y turno.', ok: true },
        { id: 'i4', t: 'Ranking de las diez enfermeras con más descansos médicos.', ok: false, por: 'Señala personas y usa datos de salud. No ayuda a decidir.' },
      ] },
      { id: 'sup', t: 'Supuestos', n: 1, ops: [
        { id: 's1', t: 'Supuestos escritos y fuente de cada cifra, con la marca «estimación interna».', ok: true },
        { id: 's2', t: 'Sin supuestos: «los números hablan solos».', ok: false, por: 'Los números nunca hablan solos. Sin supuestos, cualquiera los desarma.' },
      ] },
      { id: 'no', t: 'Lo que no sabemos', n: 1, ops: [
        { id: 'n1', t: 'Si los sueldos explican la rotación: pendiente de medir con Mariela y Silvia.', ok: true, por: 'Decir lo que no sabes te da credibilidad sobre lo que sí.' },
        { id: 'n2', t: 'Nada: todo está claro.', ok: false, por: 'Nadie lo cree, y menos un directorio.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 4 : 0, tiempo: -1 },
        flags: q === 'buena' ? ['tablero_claro'] : [], cartera: { recorte: q === 'buena' ? 'Tablero de costos ocultos enviado' : 'Tablero con huecos' },
        out: q === 'buena' ? 'Una hoja, tres indicadores, supuestos al pie y una pregunta abierta. Fernando la imprime y la guarda en la carpeta que dice «Directorio».' : 'Fernando recibe la hoja. Te devuelve dos preguntas que ya deberían estar respondidas en ella.',
        pro: { ok: 'Una hoja que dice lo que sabes, cómo lo sabes y lo que no sabes.', risk: 'Un ranking de personas convierte un análisis de costos en una cacería.', info: 'Guarda el detalle en un anexo para cuando te lo pidan.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Una hoja que se defiende sola.' : 'Algo sobra o falta.'],
      };
    },
    mirada: {
      ve: 'Un tablero para la alta dirección no muestra todo: muestra lo que ayuda a decidir. Y declarar lo que no se sabe no es debilidad: es lo que hace creíble lo demás.',
      visual: { tipo: 'embudo', titulo: 'Del informe a la hoja', niveles: [['Páginas del informe de Jorge', 12], ['Indicadores útiles', 3], ['Hoja para el directorio', 1]] },
    },
  },
];
