// Gerente/a de Gestión Humana · Capítulo 6 · «La denuncia» · Semana 2, lunes.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida. Hoy llega una denuncia de hostigamiento sexual contra
// el director médico corporativo, amigo de la presidenta del directorio.
// Normas citadas:
// - Ley 27942, Ley de Prevención y Sanción del Hostigamiento Sexual, y su Reglamento, D.S. 014-2019-MIMP (publicado en
//   El Peruano el 22 de julio de 2019). El Reglamento regula, entre otros, las medidas de protección para la víctima
//   (art. 29). No se pudo verificar en una fuente oficial el plazo exacto de cada etapa, por eso el capítulo explica el
//   principio (rapidez, protección, investigación imparcial, reserva, no represalias) sin cifras.
//   https://lpderecho.pe/reglamento-ley-prevencion-sancion-hostigamiento-sexual-decreto-supremo-014-2019-mimp/
// - Ley 29733, art. 2, num. 5 (la afiliación sindical y la vida sexual son datos sensibles) y art. 17 (confidencialidad)
//   (docs/normas/txt).

export const CAP = {
  n: 6, titulo: 'La denuncia', dia: 'Semana 2, lunes', foto: 'assets/foto2/tension.webp',
  lugar: 'Grupo Vida · Oficina corporativa de San Isidro',
  inicio: '07:50', fin: '19:30', cierreHora: '19:15',
  apertura: 'Lunes. Faltan cuatro días para el directorio y la versión 3 del modelo te espera en el correo. Pero a las 7:50, sentada en la antesala con su credencial de Miraflores en la mano, está Kiara Saavedra, enfermera, 27 años, de Tarapoto. La acompaña una técnica de su servicio.', boton: 'Hacerla pasar',
  kusi: 'Hoy no importa el presupuesto. Hoy importa cómo recibes a alguien que tiene miedo.',
  lead: 'Recibiste a Kiara sin juzgarla, ordenaste el procedimiento, la protegiste sin castigarla, le pusiste un límite a la presidenta del directorio, limpiaste el acta y le contaste a Kiara qué viene.',
  reflexion: '¿Qué hace que una organización sea un lugar seguro para denunciar a alguien poderoso?',
  siguiente: { n: 7, titulo: 'La mesa con enfermería', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Reducción de costos del 10 %', j: 'Directorio', d: 0, e: 'Faltan 4 días · modelo v3' },
  { id: 'denuncia', p: 'Denuncia de Kiara Saavedra', j: 'Gestión Humana', d: 0, e: 'Recibida hoy' },
  { id: 'proteccion', p: 'Medidas de protección', j: 'Gestión Humana', d: 0, e: 'Por definir' },
  { id: 'sindicato', p: 'Mesa técnica de dotación', j: 'Silvia Quispe', d: 0, e: 'Mañana 9:00' },
  { id: 'directorio', p: 'Presidencia del directorio', j: 'Dra. Carmen Rossi', d: 0, e: 'Presiona' },
];

export const FUTURO = {
  kiara_creida: ['Kiara sintió que la escuchaste sin juzgarla.', 'Seguirá adelante con la denuncia.'],
  kiara_dudada: ['Le pediste pruebas a Kiara antes de escucharla.', 'Dudará de seguir adelante.'],
  procedimiento_claro: ['Tienes el procedimiento ordenado: protección, investigación imparcial, decisión.', 'Nadie podrá decir que se improvisó.'],
  medidas_proteccion: ['Kiara tiene medidas de protección sin perder nada por denunciar.', 'Ugaz ya no supervisa Miraflores mientras dure la investigación.'],
  carmen_limite: ['Le dijiste a la doctora Rossi que la denuncia sigue su curso, sin esperar al directorio.', 'Ella está furiosa. Fernando te respalda.'],
  carmen_cede: ['Aceptaste postergar el procedimiento hasta después del directorio.', 'Kiara pasará la semana sin protección.'],
  acta_limpia: ['El acta de la denuncia tiene hechos, medidas y reserva; nada más.', 'Resistirá cualquier revisión.'],
  kiara_informada: ['Kiara sabe qué viene, quién investiga y a quién llamar.', 'Te escribirá si algo cambia.'],
};

export const CHATS = {
  kiara: { n: 'Kiara Saavedra', sub: 'Enfermera · Clínica Miraflores', c: '#B83B5E' },
  carmen: { n: 'Dra. Carmen Rossi', sub: 'Presidenta del directorio', who: 'directorio' },
  nora: { n: 'Lic. Nora Huamán', sub: 'Sindicato de enfermería', who: 'sindicato' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
  silvia: { n: 'Silvia Quispe', sub: 'Jefa de Relaciones Laborales', c: '#8A5A2B' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
};

export const WSP = [
  { chat: 'jorge', t: '08:05', de: 'Jorge', txt: 'Modelo v3 en tu correo. Con Rodrigo llegamos a 7.4 % en el escenario medio. Falta 2.6 %.' },
  { chat: 'nora', t: '09:30', de: 'Nora', txt: 'Kiara me dijo que la trató bien. Gracias. Mañana a las 9, en la mesa, es otra cosa 😉', si: 'kiara_creida' },
  { chat: 'gg', t: '13:10', de: 'Fernando', txt: 'La doctora me llamó gritando. Le dije que el procedimiento lo lleva Gestión Humana y que yo te respaldo. No me hagas arrepentir.', si: 'carmen_limite' },
  { chat: 'gg', t: '13:10', de: 'Fernando', txt: 'La doctora me dice que acordaron esperar. ¿Estás segura de eso?', si: 'carmen_cede' },
  { chat: 'silvia', t: '16:20', de: 'Silvia', txt: 'Jefa, el Dr. Ugaz vino al piso 7 a buscarla. Le dije que estaba en reunión. Estaba muy alterado.' },
  { chat: 'kiara', t: '18:40', de: 'Kiara', txt: 'Gracias por explicarme todo. Mi mamá me dijo que no me quede callada. Ya no me siento tan sola.', si: 'kiara_informada' },
];

export const CORREOS = [
  { t: '11:50', de: 'Dr. Alfredo Ugaz · Dirección Médica Corporativa', para: 'Gerencia de Gestión Humana; Presidencia del Directorio', asunto: 'Suspensión de mis visitas a Miraflores', html: '<p>Me informan que se han suspendido mis visitas de supervisión a la clínica de Miraflores. Exijo saber por qué y quién lo dispuso. Llevo veinticinco años en este grupo.</p><p>Dr. A. Ugaz</p>', si: 'medidas_proteccion' },
  { t: '15:00', de: 'Legal interno · Grupo Vida', para: 'Gerencia de Gestión Humana', asunto: 'Borrador · acta de recepción de denuncia', html: '<p>Adjunto el borrador del acta, como nos pidió. Lo armamos rápido; revíselo antes de firmar.</p>' },
];

export const QUIZ = [
  { q: 'Una trabajadora te cuenta que un gerente la hostiga. ¿Qué haces primero?', ops: ['Pedirle pruebas antes de seguir', 'Escucharla sin juzgar, agradecerle y explicarle el procedimiento y sus derechos', 'Llamar al gerente para escuchar su versión', 'Esperar que lo ponga por escrito'], ok: 1, por: 'La primera respuesta decide si la persona sigue adelante. Escuchar no es dar por probado: es recibir la denuncia bien.' },
  { q: 'Las medidas de protección en un caso de hostigamiento deben…', ops: ['Trasladar a la denunciante para alejarla', 'Proteger a la víctima sin perjudicarla, por ejemplo alejando al denunciado de su supervisión', 'Esperar al final de la investigación', 'Decidirlas el denunciado'], ok: 1, por: 'El Reglamento de la Ley 27942 prevé medidas de protección para la víctima. Proteger no puede significar castigarla con un traslado que no pidió.' },
  { q: '¿Quién no debe investigar una denuncia contra el director médico?', ops: ['Una instancia independiente', 'La propia Dirección Médica', 'Un comité con miembros sin relación jerárquica con el denunciado', 'Asesores externos sin conflicto'], ok: 1, por: 'La investigación tiene que ser imparcial: no puede depender de quien es denunciado.' },
  { q: 'En el acta de la denuncia, anotar que la denunciante está afiliada al sindicato…', ops: ['Es útil para el contexto', 'No corresponde: es un dato sensible y no tiene relación con los hechos', 'Es obligatorio', 'Ayuda a la defensa'], ok: 1, por: 'La afiliación sindical es un dato sensible (Ley 29733, art. 2) y no tiene nada que ver con los hechos denunciados.' },
  { q: 'La presidenta del directorio pide esperar a que pase la sesión. ¿Qué haces?', ops: ['Esperar: es solo una semana', 'Mantener el procedimiento y la protección, con reserva, y explicarle por qué', 'Dejar el caso en manos de ella', 'Archivar la denuncia'], ok: 1, por: 'Postergar la protección por razones de agenda deja a la víctima expuesta y compromete a la empresa.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:00', ch: 'presencial', who: null, titulo: 'Kiara', banner: 'assets/foto/entrevista.webp', lugar: 'Tu oficina · piso 7, con la puerta cerrada', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Kiara se sienta en el borde de la silla. ${F.has('kiara_buzon') ? '«Nora me dijo que usted me mandó al buzón. Pero el buzón lo ve la secretaria de él. Por eso vine igual.»' : '«Gracias por recibirme tan temprano.»'} Habla bajito: el Dr. Alfredo Ugaz, director médico corporativo, en cada visita a Miraflores le hace comentarios sobre su cuerpo; le escribe de noche: «si quieres pasar a planta fija, cenamos». El jueves pasado, en el ascensor, le tocó la cintura.</p><p>«Mi contrato vence en enero. <mark class="clave">La renovación la firma la dirección médica</mark>.» Se le quiebra la voz.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle que haya venido, decirle que lo que cuenta es grave y se va a atender, explicarle el procedimiento y que su renovación no dependerá de él mientras se investiga.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, confianza: 3 }, flags: ['kiara_creida'], cartera: { denuncia: 'Denuncia recibida con acta y explicación del procedimiento' },
          out: 'Kiara respira por primera vez desde que entró. Te muestra los mensajes. La técnica que la acompaña aprieta su mano. Le pides permiso para guardar copia de las capturas.',
          pro: { ok: 'Recibir bien no es dar por probado: es tomar en serio, informar y proteger.', risk: 'Desde este momento, el grupo tiene la obligación de actuar.', info: 'Anota sus palabras tal como las dijo.' },
          kusi: ['animo', 'Se sintió escuchada. Eso es el comienzo de todo.'] } },
      { id: 'b', label: 'Explicarle que es una acusación muy seria contra alguien de mucho tiempo en el grupo, y preguntarle qué pruebas tiene antes de seguir.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -2 }, flags: ['kiara_dudada'], cartera: { denuncia: 'Denuncia en duda' },
          out: 'Kiara baja la mirada. «Tengo los mensajes… pero lo del ascensor no lo vio nadie.» Se queda callada. La técnica te mira con rabia.',
          pro: { ok: 'Quieres ser cuidadosa.', risk: 'Pedir pruebas antes de escuchar le dice a la víctima que la sospechosa es ella.' },
          kusi: ['triste', 'Las pruebas se buscan en la investigación, no en la puerta.'] } },
      { id: 'c', label: 'Pedirle que espere hasta el viernes para formalizar: esta semana es el directorio y el caso necesita calma.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -4, cumplimiento: -3 }, flags: ['kiara_dudada'], cartera: { denuncia: 'Denuncia postergada' },
          out: 'Kiara asiente porque no sabe qué más hacer. Se va. El jueves, el Dr. Ugaz tiene programada otra visita a Miraflores.',
          pro: { ok: 'Ganas unos días.', risk: 'La denunciante queda expuesta al denunciado mientras tu agenda se ordena.' },
          kusi: ['indignado', 'El directorio no es más urgente que ella.'] } },
    ],
    rules: [[LEY, 'La Ley 27942 y su Reglamento (D.S. 014-2019-MIMP) obligan al empleador a prevenir, investigar y sancionar el hostigamiento sexual.'], [BP, 'Recibir una denuncia es escuchar, informar y proteger. Las pruebas se buscan en la investigación.']],
    mirada: {
      ve: 'Las denuncias contra personas poderosas casi siempre llegan con miedo: a no ser creída, a perder el trabajo, a que se entere. La primera conversación no decide si el hecho ocurrió: decide si la persona sigue adelante.',
      visual: { tipo: 'balanza', a: { t: 'Lo que ella arriesga', items: ['Su renovación en enero', 'Su reputación', 'Volver a cruzarse con él'] }, b: { t: 'Lo que el grupo debe darle', items: ['Escucha sin juicio', 'Protección inmediata', 'Investigación imparcial'] } },
    },
  },
  {
    id: 'f2', t: '09:00', ch: 'documento', who: null, titulo: 'El procedimiento', banner: 'assets/esc/escritorio.webp', lugar: 'Tu oficina · piso 7', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Kiara se fue a su turno. Abres el procedimiento de hostigamiento del grupo: está en un PDF de 2019 que nadie ha usado contra alguien de este nivel.</p><p>Antes de que empiece la presión, <mark class="clave">ordenas los pasos</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del procedimiento. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'rec', t: 'Recibir la denuncia y dejar constancia de los hechos que relata', por: 'Con sus palabras, fecha y firma.' },
      { id: 'pro', t: 'Dictar medidas de protección para la denunciante', por: 'Lo primero después de recibir: que no quede expuesta.' },
      { id: 'der', t: 'Derivar el caso a una instancia investigadora sin relación jerárquica con el denunciado', por: 'Imparcialidad.' },
      { id: 'des', t: 'Informar al denunciado y darle oportunidad de presentar sus descargos', por: 'Debido proceso: el denunciado también tiene derechos.' },
      { id: 'inv', t: 'Investigar: mensajes, testigos, registros de visitas', por: 'Las pruebas se buscan aquí.' },
      { id: 'dec', t: 'Informe, decisión y, si corresponde, sanción', por: 'Con sustento.' },
      { id: 'seg', t: 'Seguimiento para que no haya represalias', por: 'El caso no termina con la decisión.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['procedimiento_claro'], cartera: { denuncia: q === 'riesgosa' ? 'Procedimiento desordenado' : 'Procedimiento ordenado en siete pasos' },
        out: q === 'buena' ? 'Imprimes la hoja y la guardas en una carpeta sin rótulo. Le pides a Silvia que revise quién podría integrar una instancia sin relación con la Dirección Médica.' : 'El orden tiene sentido a medias. Algún paso quedó donde puede dañar a alguien.',
        pro: { ok: 'Protección antes de investigar, imparcialidad y derecho de defensa: así se sostiene un caso.', risk: 'Si notificas al denunciado antes de proteger a la víctima, la expones.', info: 'Revisa en el Reglamento de la Ley 27942 los plazos de cada etapa antes de comprometer fechas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Paso a paso, sin improvisar!' : 'El orden protege.'],
      };
    },
    mirada: {
      ve: 'Un procedimiento de hostigamiento protege a las dos partes: a la denunciante, con medidas y reserva; al denunciado, con derecho a defenderse. Cuando el denunciado es poderoso, seguir el procedimiento al pie de la letra es lo único que impide que el caso se decida por influencias.',
      visual: { tipo: 'flujo', titulo: 'El procedimiento', pasos: ['Recibir', 'Proteger', 'Derivar', 'Descargos', 'Investigar', 'Decidir', 'Seguimiento'], aqui: 1 },
    },
  },
  {
    id: 'f3', t: '10:15', ch: 'documento', who: null, titulo: 'Proteger sin castigar', banner: 'assets/esc/pendulo.webp', lugar: 'Tu oficina · piso 7', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Silvia sugiere «sacar a la chica de Miraflores un tiempo, para que no se lo cruce». Lo anotas, pero algo te incomoda.</p><p><mark class="clave">Elige las medidas de protección</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque.', boton: 'Disponer las medidas',
    bloques: [
      { id: 'dist', t: 'Distancia', n: 2, ops: [
        { id: 'd1', t: 'Suspender las visitas de supervisión del Dr. Ugaz a Miraflores mientras dure la investigación.', ok: true, por: 'Se aleja al denunciado, no a la víctima.' },
        { id: 'd2', t: 'Indicar al Dr. Ugaz que no contacte a la denunciante por ningún medio.', ok: true },
        { id: 'd3', t: 'Trasladar a Kiara a la clínica de Chorrillos «por su bien».', ok: false, por: 'Si ella no lo pide, un traslado se siente como castigo por denunciar.' },
      ] },
      { id: 'lab', t: 'Su trabajo', n: 1, ops: [
        { id: 'l1', t: 'Que la evaluación para su renovación la haga su jefa de servicio con Gestión Humana, no la Dirección Médica.', ok: true, por: 'Corta la palanca de poder que él tenía sobre ella.' },
        { id: 'l2', t: 'Congelar su renovación hasta que termine el caso.', ok: false, por: 'Dejarla en suspenso es perjudicarla por denunciar.' },
      ] },
      { id: 'apoyo', t: 'Apoyo y reserva', n: 2, ops: [
        { id: 'a1', t: 'Ofrecer atención psicológica a través del servicio de la clínica, si ella lo desea.', ok: true },
        { id: 'a2', t: 'Restringir el expediente: solo tú, Silvia y la instancia que investigue.', ok: true },
        { id: 'a3', t: 'Pedirle a Kiara que firme un compromiso de no hablar del tema con nadie.', ok: false, por: 'La reserva es obligación de la empresa. Ella puede hablar con su familia, su abogada o su sindicato.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, etica: q === 'buena' ? 4 : 0, cumplimiento: q === 'buena' ? 3 : -1 },
        flags: q === 'riesgosa' ? [] : ['medidas_proteccion'], cartera: { proteccion: q === 'riesgosa' ? 'Medidas que perjudican a la denunciante' : 'Ugaz fuera de Miraflores; renovación sin su firma' },
        out: q === 'buena' ? 'A las 11:30 sale el correo a la Dirección Médica: las visitas a Miraflores quedan suspendidas «por disposición de Gestión Humana, mientras dure un procedimiento en curso». Sin nombres.' : q === 'riesgosa' ? 'Las medidas alejan a Kiara de su clínica, de su equipo y de su renovación. Ella lo leerá como un castigo.' : 'Algunas medidas protegen; otra le cuesta algo a Kiara.',
        pro: { ok: 'Se aleja al denunciado y se corta su poder sobre la denunciante, con reserva.', risk: 'Una «protección» que mueve a la víctima le enseña al resto que denunciar cuesta.', info: 'Comunica las medidas sin dar detalles del caso.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? 'Protegida, no castigada. ¡Bien!' : '¿Quién paga el costo de esa medida?'],
      };
    },
    rules: [[LEY, 'El Reglamento de la Ley 27942 (D.S. 014-2019-MIMP) prevé medidas de protección para la víctima (art. 29).'], [LEY, 'El expediente contiene datos sensibles y se trata con confidencialidad (Ley 29733, arts. 2 y 17).']],
    mirada: {
      ve: 'Proteger a la víctima no es esconderla. Las medidas bien pensadas alejan al denunciado y le quitan el poder que tenía sobre la denunciante, sin que ella pierda su clínica, su equipo o su renovación.',
      visual: { tipo: 'cambio', titulo: 'De la idea de Silvia a las medidas', pares: [['Trasladar a Kiara', 'Suspender las visitas de Ugaz a Miraflores'], ['Congelar su renovación', 'Que la evalúe su jefa con GH'], ['Que firme silencio', 'Expediente restringido']] },
    },
  },
  {
    id: 'f4', t: '12:20', ch: 'llamada', who: 'directorio', titulo: '«Alfredo es como mi hermano»', banner: 'assets/foto/llamada.webp', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>La doctora Rossi llama. ${F.has('medidas_proteccion') ? 'Alfredo Ugaz acaba de reenviarle tu correo de suspensión.' : 'Alguien le contó que hay «algo» contra Alfredo Ugaz.'} No grita: habla despacio, que es peor.</p><p>«Conozco a Alfredo desde el colegio. Es como mi hermano. Esto huele a venganza sindical en la semana del directorio. <mark class="clave">Lo vemos después del jueves, con un abogado de mi confianza</mark>. Hasta entonces, deje todo como estaba.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: '«Doctora, entiendo lo que significa para usted. Por eso mismo usted no puede intervenir en este caso. El procedimiento sigue con reserva y con una instancia imparcial, y el Dr. Ugaz tendrá todas las garantías para defenderse.»',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: -2 }, rel: { directorio: -1 }, flags: ['carmen_limite'], cartera: { directorio: 'La doctora sabe que no puede intervenir' },
          out: 'Un silencio largo. «Usted no sabe con quién se está metiendo.» «Sí lo sé, doctora. Por eso lo hago bien.» Cuelga. Llamas a Fernando para contarle antes de que se lo cuente ella.',
          pro: { ok: 'Le pones un límite a la máxima autoridad por la razón correcta: su conflicto de interés.', risk: 'Tu relación con la doctora queda tocada en la semana más importante.', info: 'Deja constancia por escrito de la llamada.' },
          kusi: ['animo', 'Eso es integridad cuando cuesta.'] } },
      { id: 'b', label: '«Está bien, doctora. Dejo las medidas sin efecto hasta el viernes y retomamos con su abogado.»',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5, personas: -4 }, rel: { directorio: 1 }, flags: ['carmen_cede'], cartera: { proteccion: 'Medidas suspendidas por pedido de la presidenta' },
          out: '«Gracias. Sabía que era sensata.» A las 3, la Dirección Médica reprograma la visita del jueves a Miraflores. Kiara lo ve en el calendario del servicio.',
          pro: { ok: 'La doctora queda tranquila.', risk: 'La denunciante queda expuesta y el caso queda en manos de quien tiene un conflicto de interés.' },
          kusi: ['indignado', 'Kiara se lo va a cruzar el jueves.'] } },
      { id: 'c', label: '«Doctora, prefiero que lo hablemos con Fernando y Legal. Yo solo sigo el procedimiento.»',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -1 }, rel: { directorio: 0 }, flags: ['carmen_limite'],
          out: 'La doctora cuelga sin despedirse. Fernando te llama media hora después: «¿Qué le dijiste?». Le cuentas. «Bien. Pero la próxima, dile tú por qué no puede meterse.»',
          pro: { ok: 'Mantienes el procedimiento.', risk: 'Esquivas la conversación de fondo: su conflicto de interés.' },
          kusi: ['pensando', 'Firme, pero a medias.'] } },
    ],
    rules: [[BP, 'Quien tiene una relación cercana con el denunciado no participa en la decisión del caso.'], [LEY, 'El hostigamiento sexual se previene, investiga y sanciona según la Ley 27942 y su Reglamento, sin importar el cargo del denunciado.']],
    mirada: {
      ve: 'La integridad se prueba cuando la persona con más poder te pide una excepción por cariño o por conveniencia. Decirle que no puede intervenir no es una falta de respeto: es protegerla a ella también de una decisión que la comprometería.',
      visual: { tipo: 'balanza', a: { t: 'Esperar al viernes', items: ['La doctora tranquila', 'Kiara expuesta el jueves', 'El caso en manos de una amiga del denunciado'] }, b: { t: 'Seguir el procedimiento', items: ['Una relación tensa', 'Kiara protegida', 'Ugaz con garantías', 'Un caso que se sostiene'] } },
    },
  },
  {
    id: 'f5', t: '15:10', ch: 'documento', who: null, titulo: 'El borrador del acta', banner: 'assets/esc/lupa.webp', lugar: 'Tu oficina · piso 7', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Legal interno te manda el borrador del acta de recepción. Lo hicieron rápido, con buena voluntad y con un modelo de otro tipo de caso.</p><p>Antes de firmar, <mark class="clave">lo lees línea por línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no corresponde o debería corregirse en el acta.',
    doc: { t: 'Acta de recepción de denuncia · borrador', sub: 'Confidencial · Gestión Humana' },
    lines: [
      { id: 'hechos', t: 'Hechos relatados por la denunciante, con fechas, lugares y sus propias palabras.' },
      { id: 'sind', t: 'La denunciante es afiliada al sindicato de enfermería, lo que debe considerarse como contexto.', bad: LEY, why: 'La afiliación sindical es un dato sensible (Ley 29733, art. 2) y no tiene relación con los hechos. Incluirla insinúa un motivo.' },
      { id: 'med', t: 'Medidas de protección dispuestas el día de hoy.' },
      { id: 'care', t: 'Se recomienda un careo entre la denunciante y el denunciado para aclarar versiones.', bad: BP, why: 'Poner frente a frente a la denunciante y al denunciado la revictimiza. Las versiones se toman por separado.' },
      { id: 'inv', t: 'La investigación estará a cargo de la Dirección Médica Corporativa, por conocer el funcionamiento de las clínicas.', bad: LEY, why: 'La Dirección Médica es la del denunciado. La investigación debe estar a cargo de una instancia imparcial.' },
      { id: 'res', t: 'Acceso al expediente restringido a Gestión Humana, Relaciones Laborales y la instancia investigadora.' },
      { id: 'vest', t: 'Observación: la denunciante acudió con uniforme ajustado.', bad: BP, why: 'Es irrelevante y culpabiliza a la víctima. No va en ningún documento.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, etica: missLey ? -3 : 4 },
      flags: missLey ? [] : ['acta_limpia'], cartera: { denuncia: missLey ? 'Acta con sesgos y conflicto de interés' : 'Acta corregida y firmada' },
      out: missLey ? 'Firmas el acta como estaba. Si algún día la lee un juez, verá en ella todo lo que no se debía escribir.' : 'Devuelves el acta con cuatro líneas tachadas. La abogada de Legal te escribe: «Tiene razón. Usamos el modelo de un caso de robo. Perdón».',
      pro: { ok: 'Un acta limpia tiene hechos, medidas y reserva. Nada que culpe o insinúe.', risk: 'Lo que escribes hoy define si el caso se sostiene o se cae.', info: 'Propón a Legal un modelo propio para casos de hostigamiento.' },
      kusi: missLey ? ['indignado', '¿Uniforme ajustado? No.'] : ['celebra', '¡Un acta que no revictimiza!'],
    }),
    rules: [[LEY, 'La afiliación sindical y la vida sexual son datos sensibles (Ley 29733, art. 2).'], [BP, 'Las versiones se toman por separado; nunca un careo.']],
    mirada: {
      ve: 'Los documentos de un caso de hostigamiento hablan del caso, pero también de la cultura de quien los escribe. Un acta que menciona la ropa, el sindicato o propone un careo enseña a todas las demás que denunciar tiene un costo.',
    },
  },
  {
    id: 'f6', t: '18:20', ch: 'whatsapp', who: null, titulo: 'Lo que Kiara necesita saber', banner: 'assets/foto2/callcenter.webp', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Kiara sale de su turno a las 7. ${F.has('carmen_cede') ? 'Vio en el calendario que el doctor tiene visita el jueves.' : 'No sabe todavía qué pasó hoy.'} Le escribes antes de que salga.</p><p><mark class="clave">Lo que lea en el bus esta noche es lo que decidirá si duerme</mark>.</p>`,
    type: 'compose', enviaA: 'kiara', para: 'Para: Kiara Saavedra', boton: 'Enviar',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Lo que se hizo', ops: [
        { id: 'h1', t: 'Kiara, hoy se dispusieron medidas: el doctor no hará visitas a Miraflores mientras dure el caso y no puede contactarte.', ok: true, por: 'Concreto y verificable.' },
        { id: 'h2', t: 'Kiara, estamos viendo tu caso con mucho cuidado.', ok: false, por: 'No le dice nada de lo que necesita saber esta noche.' },
      ] },
      { id: 'sigue', t: 'Lo que sigue', ops: [
        { id: 's1', t: 'Una instancia sin relación con la Dirección Médica va a investigar. Te llamarán para tomar tu declaración, por separado.', ok: true, por: 'Le explicas qué viene y que no estará frente a él.' },
        { id: 's2', t: 'Seguro esto se resuelve rápido.', ok: false, por: 'No lo sabes. Una promesa así se rompe fácil.' },
      ] },
      { id: 'canal', t: 'Si pasa algo', ops: [
        { id: 'c1', t: 'Si recibes cualquier mensaje o trato distinto, me escribes a mí directamente, a cualquier hora.', ok: true },
        { id: 'c2', t: 'Cualquier cosa, por el buzón.', ok: false, por: 'El buzón lo ve la secretaria del denunciado.' },
      ] },
    ],
    res: sel => {
      const malas = ['h2', 's2', 'c2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas === 0 ? 'buena' : malas === 1 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['kiara_informada'], cartera: { denuncia: q === 'riesgosa' ? 'Kiara sin información clara' : 'Kiara informada de las medidas y los pasos' },
        out: q === 'buena' ? 'Kiara lee el mensaje en el bus de la avenida Arequipa. Te responde con un audio de diez segundos: solo «gracias», y algo que suena a llanto aliviado.' : 'Kiara responde con un «ok». No sabes si durmió.',
        pro: { ok: 'Medidas concretas, próximo paso y un canal seguro: eso es acompañar.', risk: 'El silencio, después de denunciar, se siente como abandono.', info: 'No le cuentes detalles de lo que dijo la doctora: no le corresponde cargar con eso.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Esta noche duerme un poco mejor.' : 'Le falta saber algo importante.'],
      };
    },
    mirada: {
      ve: 'Quien denuncia necesita saber tres cosas después del primer día: qué se hizo, qué viene y a quién acudir. Una gerencia que comunica eso a tiempo convierte un procedimiento frío en una experiencia de protección.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje a Kiara', txt: 'Hoy se dispusieron medidas: el doctor no visitará Miraflores y no puede contactarte. Una instancia imparcial investigará y te tomará declaración por separado. Cualquier cosa, me escribes a mí, a cualquier hora.' },
    },
  },
];
