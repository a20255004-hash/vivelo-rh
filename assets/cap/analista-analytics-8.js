// Analista de People Analytics · Capítulo 8 · «La presentación» · Semana 2, miércoles.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 7 (proporcionalidad), art. 17 (confidencialidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 016-2024-JUS (El Peruano, 30/11/2024): art. 87 (tratamiento objetivo; decisiones sin intervención humana).
// El orden de la historia (pregunta, respuesta, evidencia, mecanismo, acción, medición) es una buena práctica de comunicación con datos.

export const CAP = {
  n: 8, titulo: 'La presentación', dia: 'Semana 2, miércoles', foto: 'assets/foto2/presentacion.webp',
  lugar: 'HogarPlus · Sala del directorio, piso 6',
  inicio: '07:40', fin: '18:30', cierreHora: '18:15',
  apertura: 'Miércoles. Comité de gerencia a las 10. Siete gerentes, un proyector que a veces no prende y diez minutos para contar dos semanas de trabajo.', boton: 'Subir al piso 6',
  kusi: 'Los números no hablan solos: hoy les pones voz. ¡Tú puedes!',
  lead: 'Ordenaste la historia, limpiaste tus diapositivas, protegiste a las personas frente al comité y respondiste a la gerenta con datos sin humillarla.',
  reflexion: '¿Qué es más difícil: encontrar la verdad en los datos o decirla en una sala llena de jefes?',
  siguiente: { n: 9, titulo: 'La acción', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'historia', p: 'Guion de la presentación', j: 'Tú y Diego', d: 7, e: 'Por ordenar' },
  { id: 'diapos', p: 'Diapositivas', j: 'Diego', d: 7, e: 'Versión 5' },
  { id: 'comite', p: 'Comité de gerencia', j: 'Mónica', d: 7, e: 'Hoy 10:00' },
  { id: 'acuerdos', p: 'Acuerdos del comité', j: 'Tú', d: 7, e: 'Por registrar' },
];

export const FUTURO = {
  historia_clara: ['Contaste la historia en el orden que una gerencia entiende.', 'El comité recordará la idea principal.'],
  diapos_limpias: ['Tus diapositivas no exponen a nadie y dicen sus límites.', 'Nadie pudo desarmarlas con una pregunta.'],
  nombre_protegido: ['No diste el nombre del supervisor frente al comité.', 'El Gerente General lo notó y lo valoró.'],
  nombre_dado: ['Diste el nombre de Renzo en el comité.', 'Santa Anita se enterará antes del almuerzo.'],
  objecion_bien: ['Respondiste a Mónica reconociendo lo que tenía de razón.', 'Ella defenderá el plan contigo.'],
  objecion_humilla: ['Le corregiste a Mónica frente a todos sin darle salida.', 'Tendrás datos, pero no aliada.'],
  acta_clara: ['Mandaste los acuerdos por escrito con responsables y fechas.', 'Mañana nadie podrá decir «yo entendí otra cosa».'],
  proveedor_anunciado: ['El Gerente General anunció a un proveedor de «predicción de renuncias».', 'Llega el lunes.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  lucia: { n: 'Lucía Ccori', sub: 'HRBP de tiendas Lima Este', c: '#6B3FA0' },
  renzo: { n: 'Renzo Villanueva', sub: 'Supervisor de ventas · Santa Anita', c: '#B5651D' },
};

export const WSP = [
  { chat: 'equipo', t: '07:35', de: 'Diego', txt: 'Llegué temprano para pelearme con el proyector. Sube cuando puedas. Respira 😄' },
  { chat: 'monica', t: '08:30', de: 'Mónica', txt: 'Hoy entras conmigo. Yo abro, tú cuentas los datos. No me dejes sola si preguntan por mis tiendas.', si: 'monica_reencuadre' },
  { chat: 'lucia', t: '12:10', de: 'Lucía', txt: '¡Me contaron que la sala se quedó en silencio con lo de los correos de Renzo! 👏🏽', si: 'nombre_protegido' },
  { chat: 'renzo', t: '12:30', de: 'Renzo', txt: 'Ya me llamaron tres colegas a decirme que «salí en el comité». ¿Es verdad?', si: 'nombre_dado' },
  { chat: 'monica', t: '15:40', de: 'Mónica', txt: 'Gracias por cómo respondiste lo del sueldo. Me dejaste parada bien. Mañana armamos el plan.', si: 'objecion_bien' },
];

export const CORREOS = [
  { t: '07:50', de: 'Diego Paz', para: 'Analista de People Analytics', asunto: 'Diapositivas v5', html: '<p>Te dejo la versión 5 en la carpeta. Revísala antes de las 9: tú vas a hablar de los datos y yo de las acciones. Diez minutos, ni uno más.</p><p>Diego</p>' },
  { t: '17:20', de: 'Arturo Benavides · Gerente General', para: 'Comité de gerencia; Diego Paz; Analista de People Analytics', asunto: 'Rotación: siguientes pasos', html: '<p>Gracias por la presentación de hoy. Mañana espero el plan de acción con presupuesto.</p><p>Además, el lunes nos visita TalentScope, un proveedor que ofrece un software que «predice renuncias» con inteligencia artificial. Quiero que People Analytics esté en la reunión y me diga si nos sirve.</p><p>Arturo</p>' },
];

export const QUIZ = [
  { q: 'Para una gerencia, el mejor orden de una presentación de datos suele ser…', ops: ['Metodología, tablas, conclusión al final', 'Pregunta, respuesta, evidencia, por qué ocurre, qué hacer y cómo medirlo', 'Todos los gráficos que tengas', 'Las limitaciones primero y nada más'], ok: 1, por: 'La respuesta va al inicio; la metodología, solo si la piden.' },
  { q: 'En el comité te preguntan el nombre del supervisor con más rotación. Lo más adecuado es…', ops: ['Darlo: es una pregunta del Gerente General', 'Explicar que el hallazgo es un patrón de siete equipos y ofrecer el detalle a quien tenga que actuar, en privado', 'Inventar otro nombre', 'Negarte a responder sin explicar'], ok: 1, por: 'El detalle va a quien lo necesita para actuar, no a la sala.' },
  { q: 'Cuando una gerenta contradice tus datos frente a todos, conviene…', ops: ['Demostrarle que se equivoca', 'Reconocer lo que tiene de cierto, mostrar el dato y proponer cómo verificarlo', 'Callarte', 'Cambiar tus datos'], ok: 1, por: 'Le das una salida digna sin renunciar a la evidencia.' },
  { q: 'Una diapositiva debe decir sus límites porque…', ops: ['Así se ve más técnica', 'Quien decide necesita saber qué tan seguro es el dato', 'La ley lo exige', 'No es necesario'], ok: 1, por: 'Decir lo que no sabes protege tu credibilidad.' },
  { q: 'Al terminar una reunión con acuerdos, lo mejor es…', ops: ['Confiar en la memoria de todos', 'Enviar por escrito acuerdos, responsables y fechas', 'Esperar que otro lo haga', 'Grabarla sin avisar'], ok: 1, por: 'Lo que no está escrito, cada quien lo recuerda distinto.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '07:50', ch: 'documento', who: null, titulo: 'El orden de la historia', banner: 'assets/esc/escalera.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Llegas cuando la oficina todavía huele a limpiador. En tu cuaderno tienes dos semanas de hallazgos. En el comité tendrás diez minutos.</p><p>Diego te pide <mark class="clave">ordenar la historia</mark> antes de tocar una sola diapositiva.</p>`,
    type: 'secuencia', prompt: 'Ordena la historia de la presentación. Usa las flechas.', boton: 'Guardar el guion',
    items: [
      { id: 'preg', t: 'La pregunta: ¿qué distingue a quienes renuncian de quienes se quedan?', por: 'Para que todos sepan de qué se trata.' },
      { id: 'resp', t: 'La respuesta en una frase: perdemos gente en los primeros meses y en equipos con supervisores sin formación', por: 'La idea que deben recordar.' },
      { id: 'evid', t: 'La evidencia: 41 % vs. 92 % y el pico de los primeros 90 días', por: 'Dos gráficos, no veinte.' },
      { id: 'meca', t: 'Por qué pasa: ascensos sin formación, metas, dotación y horarios', por: 'El mecanismo que encontraste en el terreno.' },
      { id: 'acc', t: 'Qué proponemos hacer', por: 'Lo que la gerencia puede decidir hoy.' },
      { id: 'med', t: 'Cómo sabremos si funcionó', por: 'Los tres indicadores del tablero.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: 1 },
        flags: q === 'riesgosa' ? [] : ['historia_clara'], cartera: { historia: q === 'riesgosa' ? 'Guion desordenado' : 'Guion en seis pasos' },
        out: q === 'buena' ? 'Lo ensayas en voz alta con Diego: siete minutos y medio. Te sobra tiempo para preguntas.' : q === 'aceptable' ? 'Funciona, aunque Diego mueve un paso: «La respuesta va arriba. Nadie espera el final para entender».' : 'Empiezas por la metodología. En el ensayo, Diego bosteza a propósito en el minuto dos.',
        pro: { ok: 'Respuesta primero; detalle después.', risk: 'Una presentación que guarda la conclusión para el final pierde a la gerencia en el minuto tres.' },
        kusi: [q === 'riesgosa' ? 'pensando' : 'celebra', q === 'riesgosa' ? 'La respuesta, arriba.' : '¡Una historia que se entiende!'],
      };
    },
    mirada: {
      ve: 'En una sala de gerentes, la atención dura poco y las interrupciones llegan pronto. Por eso la respuesta va al principio y el resto la sostiene. La metodología queda en el anexo, para quien pregunte.',
      visual: { tipo: 'flujo', titulo: 'Diez minutos', pasos: ['Pregunta', 'Respuesta', 'Evidencia', 'Por qué', 'Qué hacer', 'Cómo medir'] },
    },
  },
  {
    id: 'h2', t: '08:45', ch: 'documento', who: null, titulo: 'La versión 5', banner: 'assets/foto/revisa.webp', show: ['calidad', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Abres <i>Rotacion_comite_v5.pptx</i>. ${F.has('cita_identificable') ? 'La cita de pinturas de Santa Anita sigue en la diapositiva 6.' : 'Diego trabajó hasta tarde: se nota.'}</p><p>Última revisión. <mark class="clave">¿Qué no puede salir así?</mark></p>`,
    type: 'flag', prompt: 'Marca lo que hay que corregir en las diapositivas.',
    doc: { t: 'Rotacion_comite_v5.pptx', sub: '9 diapositivas · comité de gerencia' },
    lines: [
      { id: 'nombre', t: 'Diapositiva 4: «Caso Renzo Villanueva, Santa Anita: 150 %».', bad: LEY, why: 'Expone a una persona ante siete gerentes sin necesidad: el patrón se entiende sin su nombre. Quien trata los datos debe guardar confidencialidad.' },
      { id: 'texto', t: 'Diapositiva 3: catorce viñetas en letra de 12 puntos.', bad: BP, why: 'Nadie lee catorce viñetas mientras escucha. Una idea por diapositiva.' },
      { id: 'causa', t: 'Diapositiva 5: «Los supervisores nuevos causan el 34 % de las renuncias».', bad: BP, why: 'Los datos muestran asociación, no que «causen» un porcentaje exacto.' },
      { id: 'lim', t: 'Diapositiva 8: «Lo que no sabemos: solo el 22 % dejó comentario; no podemos descartar que a los nuevos les den los peores turnos».' },
      { id: 'tresd', t: 'Diapositiva 2: gráfico de barras en 3D con sombra.', bad: BP, why: 'El 3D deforma las alturas: se lee peor y parece exagerar.' },
      { id: 'formula', t: 'Diapositiva 1: «Rotación 58 % (salidas / plantilla promedio)».' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? 'Arreglas el formato, pero el nombre de Renzo sigue en la diapositiva 4.' : 'Sacas el nombre, partes las viñetas, cambias «causan» por «se asocian con» y aplanas el gráfico. La diapositiva de límites se queda: es la que más te protege.',
      flags: missLey ? [] : ['diapos_limpias'],
      fx: { calidad: missLey ? 1 : 5, etica: missLey ? -3 : 3 },
      cartera: { diapos: missLey ? 'Versión 6 con nombre expuesto' : 'Versión 6 lista' },
      pro: { ok: 'Diapositivas claras, sin nombres y con sus límites a la vista.', risk: 'Un nombre en pantalla se vuelve noticia en minutos.' },
      kusi: missLey ? ['preocupado', '¡El nombre en pantalla!'] : ['celebra', '¡Versión 6, impecable!'],
    }),
    rules: [[LEY, 'Quien trata datos personales debe guardar confidencialidad (Ley 29733, art. 17).'], [BP, 'Una idea por diapositiva y los límites siempre a la vista.']],
    mirada: {
      ve: 'La diapositiva de «lo que no sabemos» parece debilitar el mensaje, pero hace lo contrario: muestra que miraste las otras explicaciones y que no estás vendiendo nada. Es la que más credibilidad da frente a gerentes escépticos.',
      visual: { tipo: 'cambio', titulo: 'De la v5 a la v6', pares: [['Caso Renzo Villanueva', 'Siete equipos con el mismo patrón'], ['«Causan el 34 %»', '«Se asocian con más renuncias»'], ['Catorce viñetas', 'Una idea'], ['Barras 3D', 'Barras planas desde cero']] },
    },
  },
  {
    id: 'h3', t: '10:20', ch: 'presencial', who: null, titulo: '«¿Quién es?»', banner: 'assets/foto2/presentacion.webp', lugar: 'Sala del directorio, piso 6', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>El proyector prende al tercer intento. ${F.has('historia_clara') ? 'Tu guion funciona: los gerentes dejan los celulares cuando aparece el 41 % contra el 92 %.' : 'Los gerentes miran sus celulares hasta la tercera diapositiva.'} Arturo Benavides, el Gerente General, levanta la mano.</p><p>«Muy claro. Ahora díganme: <mark class="clave">¿quién es el supervisor de Santa Anita?</mark> Quiero saber con quién estamos hablando.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicar que el hallazgo es un patrón de siete equipos, que ese supervisor pidió formación dos veces sin respuesta, y ofrecerle el detalle a él y a Mónica después, en privado.',
        res: { q: 'buena', fx: { etica: 5, confianza: 4, personas: 3 }, rel: { gerente: 1, 'diego-pa': 1 }, flags: ['nombre_protegido'],
          out: 'Arturo te mira unos segundos. «¿Pidió capacitación dos veces y nadie respondió?» Se voltea hacia Mónica. La sala se queda en silencio.',
          pro: { ok: 'No niegas la información: la llevas a quien la necesita, con su contexto.', risk: 'El Gerente General podría insistir. Si lo hace, ofrécele el detalle, pero no en la sala.', info: 'El dato de los correos cambia la pregunta de «¿quién?» a «¿qué nos falló?».' },
          kusi: ['celebra', '¡Respondiste sin exponer a nadie!'] } },
      { id: 'b', label: 'Dar el nombre: es el Gerente General y tiene derecho a saberlo.',
        res: { q: 'riesgosa', fx: { confianza: 2, etica: -4, personas: -4 }, flags: ['nombre_dado'],
          out: '«Renzo Villanueva.» Tres gerentes lo anotan. Al salir, uno ya está escribiendo por WhatsApp.',
          pro: { ok: 'Respondes lo que te preguntaron.', risk: 'Un nombre dicho en una sala de siete se multiplica. Y la conversación pasa del patrón a la persona.' },
          kusi: ['preocupado', 'Siete gerentes, siete celulares…'] } },
      { id: 'c', label: 'Decir que por protección de datos no puedes dar nombres en ninguna circunstancia.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -3 }, rel: { gerente: -1 },
          out: 'Arturo frunce el ceño: «¿Ni yo puedo saber quién trabaja en mi empresa?». La discusión se va hacia la ley y se aleja de las acciones.',
          pro: { ok: 'Proteges el nombre.', risk: 'Exageras la norma: la gerencia sí puede conocer datos de gestión que necesita. Lo que importa es quién, dónde y para qué.' },
          kusi: ['pensando', 'La ley no dice «nunca», dice «para qué».'] } },
    ],
    rules: [[LEY, 'Los datos se tratan solo en lo adecuado, relevante y no excesivo para la finalidad (Ley 29733, art. 7).'], [BP, 'El detalle, a quien tiene que actuar; la sala, para el patrón.']],
    mirada: {
      ve: 'La protección de datos no es esconder información a la gerencia: es que cada dato llegue a quien lo necesita para su finalidad. El Gerente General puede saber quién es; la sala de siete gerentes no necesita escucharlo para decidir un programa de formación.',
      visual: { tipo: 'balanza', a: { t: 'Nombre en la sala', items: ['Respuesta inmediata', 'Rumor en minutos', 'Debate sobre una persona'] }, b: { t: 'Patrón en la sala, detalle en privado', items: ['Debate sobre el sistema', 'Contexto para quien decide', 'La persona es escuchada'] } },
    },
  },
  {
    id: 'h4', t: '10:40', ch: 'presencial', who: 'gerente', titulo: '«Igual es el sueldo»', banner: 'assets/foto2/tension.webp', lugar: 'Sala del directorio, piso 6', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>${F.has('monica_cabeza') ? 'Mónica todavía piensa en regresar a Renzo a vendedor. ' : ''}Mónica se inclina hacia adelante: «Con todo respeto, yo camino mis tiendas. En Ate y en Santa Clara abrió la competencia al frente y pagan más. <mark class="clave">Igual es el sueldo</mark>».</p><p>Los gerentes te miran a ti.</p>`,
    type: 'builder', prompt: 'Arma tu respuesta eligiendo una pieza de cada parte.', boton: 'Responder',
    bloques: [
      { id: 'rec', t: 'Primero', n: 1, ops: [
        { id: 'r1', t: 'Tiene razón en algo: en Ate y Santa Clara, las salidas a la competencia son el doble que en el resto.', ok: true, por: 'Reconoces lo que es cierto con un dato.' },
        { id: 'r2', t: 'Los datos dicen otra cosa.', ok: false, por: 'Cierras la conversación y la dejas mal frente a sus pares.' },
      ] },
      { id: 'dato', t: 'Luego', n: 1, ops: [
        { id: 'd1', t: 'En toda la empresa, quienes se van ganan solo 4 % menos; la diferencia grande está en los primeros meses y en el supervisor.', ok: true },
        { id: 'd2', t: 'El sueldo no importa.', ok: false, por: 'No es lo que dicen tus datos: importa, pero menos.' },
      ] },
      { id: 'prop', t: 'Al final', n: 1, ops: [
        { id: 'p1', t: 'Propongo revisar las comisiones en esas dos tiendas como piloto, junto con la formación de supervisores en todas.', ok: true, por: 'Su hipótesis entra en el plan donde los datos la apoyan.' },
        { id: 'p2', t: 'Si quiere, lo discutimos después.', ok: false, por: 'Pospones y ella queda sin respuesta.' },
      ] },
    ],
    res: (buenos, total) => {
      const q = buenos === total ? 'buena' : buenos >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, calidad: q === 'buena' ? 3 : 0 }, rel: { gerente: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: [q === 'riesgosa' ? 'objecion_humilla' : 'objecion_bien'],
        out: q === 'buena' ? 'Mónica asiente despacio: «Ya. Piloto en Ate y Santa Clara, y formación para todos». Arturo anota algo y dice: «Aprobado para que lo traigan mañana con presupuesto».' : q === 'aceptable' ? 'Mónica acepta a medias. La reunión sigue, con una tensión que no se va del todo.' : 'Tienes razón y lo demuestras. Mónica no vuelve a hablar en toda la reunión.',
        pro: { ok: 'Reconoces, muestras y propones: así la evidencia gana sin que nadie pierda.', risk: 'Ganar una discusión frente a todos puede costarte a la persona que tiene que ejecutar el plan.' },
        kusi: [q === 'buena' ? 'celebra' : q === 'riesgosa' ? 'preocupado' : 'pensando', q === 'buena' ? '¡Datos y diplomacia!' : q === 'riesgosa' ? 'Ganaste el punto, perdiste a Mónica.' : 'Casi.'],
      };
    },
    mirada: {
      ve: 'Mónica no estaba del todo equivocada: en dos tiendas el sueldo sí pesa. Reconocerlo con un dato no debilita tu hallazgo: lo vuelve más creíble y le da a ella un lugar en la solución. El analista que solo «gana» discusiones termina sin nadie que ejecute sus recomendaciones.',
      visual: { tipo: 'rango', titulo: 'Salidas a la competencia (% de renuncias)', min: 0, max: 40, banda: [12, 26], marcas: [['Promedio empresa', 13], ['Ate y Santa Clara', 26]] },
    },
  },
  {
    id: 'h5', t: '12:00', ch: 'whatsapp', who: null, titulo: 'Los acuerdos', banner: 'assets/esc/dedos.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>Sales del piso 6 con las manos frías y el corazón todavía acelerado. Antes de que cada quien recuerde otra cosa, le escribes a Mónica <mark class="clave">lo que se acordó</mark>.</p>`,
    type: 'compose', enviaA: 'monica', para: 'Para: Mónica Larrea', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué se acordó', ops: [
        { id: 'q1', t: 'Mónica, acuerdos del comité: formación para supervisores nuevos, mejora de los primeros 90 días y piloto de comisiones en Ate y Santa Clara.', ok: true, por: 'Concreto y completo.' },
        { id: 'q2', t: 'Mónica, ¡salió bacán el comité! 🎉', ok: false, por: 'Celebra, pero no registra nada.' },
      ] },
      { id: 'quien', t: 'Quién y cuándo', ops: [
        { id: 'w1', t: 'Mañana a las 3 te presento el plan con presupuesto, como pidió Arturo.', ok: true, por: 'Responsable y fecha.' },
        { id: 'w2', t: 'Vemos cuándo lo armamos.', ok: false, por: 'Sin fecha, no hay compromiso.' },
      ] },
      { id: 'cuida', t: 'Lo pendiente', ops: [
        { id: 'c1', t: 'El detalle de supervisores se lo paso a Arturo y a ti en privado, con su contexto.', ok: true, por: 'Cumples lo que ofreciste en la sala.' },
        { id: 'c2', t: 'Te mando la lista de supervisores con más rotación por aquí.', ok: false, por: 'Por WhatsApp y sin contexto, justo lo que querías evitar.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'w1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : sel.cuida === 'c2' ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : 0, etica: sel.cuida === 'c2' ? -3 : 1 }, rel: { gerente: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['acta_clara'] : [], cartera: { acuerdos: q === 'buena' ? '3 acuerdos, responsables y fecha' : 'Acuerdos sin registrar bien' },
        out: q === 'buena' ? 'Mónica reenvía tu mensaje al grupo de gerentes tal cual: «Así quedamos».' : q === 'riesgosa' ? 'La lista ya está en el WhatsApp de Mónica. Lo que dijiste en la sala, lo deshiciste en un mensaje.' : 'Mónica responde «ok». Mañana tendrán que recordar juntas qué se acordó.',
        pro: { ok: 'Acuerdos, responsables y fechas por escrito, el mismo día.', risk: 'Lo que se promete en una sala y no se escribe se olvida o se reinterpreta.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Acta en un mensaje!' : 'Lo escrito manda.'],
      };
    },
    mirada: {
      ve: 'Una buena presentación vale poco si no termina en acuerdos claros. Escribirlos el mismo día, con responsable y fecha, convierte el entusiasmo de la reunión en trabajo concreto.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Miércoles', 'Comité: 3 acuerdos'], ['Jueves 3 p. m.', 'Plan con presupuesto'], ['Viernes', 'Cierre de dos semanas'], ['Lunes', 'Reunión con TalentScope']] },
    },
  },
  {
    id: 'h6', t: '17:30', ch: 'correo', who: null, titulo: 'Un proveedor el lunes', banner: 'assets/esc/alarma.webp', show: ['etica', 'confianza'],
    mail: { from: 'Arturo Benavides · Gerente General', to: 'Comité de gerencia; Diego Paz; Analista de People Analytics', asunto: 'Rotación: siguientes pasos' },
    body: () => `<p>Gracias por hoy. Mañana espero el plan de acción. El lunes nos visita TalentScope, un proveedor que ofrece un software que <mark class="clave">«predice renuncias» con inteligencia artificial</mark>. Quiero que People Analytics me diga si nos sirve.</p><p>Arturo</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Agradecer, confirmar el plan para mañana y proponer que, antes del lunes, People Analytics y el Oficial de Datos preparen las preguntas para el proveedor.',
        res: { q: 'buena', fx: { confianza: 4, etica: 3 }, rel: { 'diego-pa': 1 }, flags: ['proveedor_anunciado'], responde: 'Arturo: gracias. Mañana a las 3 presentamos el plan con Mónica. Sobre TalentScope, con gusto: le propongo que el Oficial de Datos y nosotros preparemos antes del lunes las preguntas clave (qué datos usa, para qué decisiones y cómo se cuida a las personas).',
          out: 'Arturo responde en un minuto: «De acuerdo. Que sea una evaluación seria, no un no automático».', kusi: ['curioso', 'Lo que viene el lunes ya tiene preguntas.'] } },
      { id: 'b', label: 'Responder que una herramienta así no sirve: ya se demostró el viernes que predecir renuncias es riesgoso.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -3 }, rel: { gerente: -1 }, flags: ['proveedor_anunciado'], responde: 'Arturo: con todo respeto, ese tipo de software no nos sirve. Predecir renuncias individuales es riesgoso.',
          out: 'Arturo responde seco: «No pregunté si te gusta. Pregunté si sirve. Lunes a las 9».', kusi: ['pensando', 'Sin haberlo visto…'] } },
    ],
    mirada: { ve: 'Que el Gerente General traiga una herramienta de IA justo después de tu análisis no es casualidad: el problema ya tiene su atención. Rechazarla sin evaluarla parece miedo; aceptarla sin preguntas, ingenuidad. El camino es evaluarla con criterios claros.' },
  },
];
