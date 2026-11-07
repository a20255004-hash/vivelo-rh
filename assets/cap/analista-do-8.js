// Analista de Desarrollo Organizacional · Capítulo 8 · «El taller» · Semana 2, miércoles.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas:
// - Ley 29973 (Ley General de la Persona con Discapacidad), art. 50: el empleador realiza ajustes razonables en el lugar
//   de trabajo (adecuación de herramientas, entorno y organización), salvo que acredite una carga excesiva.
//   https://busquedas.elperuano.pe/dispositivo/NL/2290518-1
//   https://www.garrigues.com/es_ES/noticia/peru-dia-internacional-personas-discapacidad-pone-relieve-obligacion-implementar-ajustes
// Empresas y personas son ficticias.

export const CAP = {
  n: 8, titulo: 'El taller', dia: 'Semana 2, miércoles', foto: 'assets/foto/taller.webp',
  lugar: 'Salón comunal de Sachaca · Arequipa',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Miércoles. Hoy facilitas el primer taller con 30 personas de las dos cooperativas: cajeras, asesores, analistas y jefes. Algunas nunca se han visto la cara. Otras solo se conocen por el rumor.', boton: 'Abrir el salón',
  kusi: 'Facilitar no es hablar mucho. Es lograr que los demás hablen, y se escuchen.',
  lead: 'Armaste la agenda, elegiste un lugar al que todos pudieran llegar, sostuviste un momento tenso, hiciste las preguntas justas, cerraste con acuerdos y le contaste al grupo qué sigue.',
  reflexion: '¿Qué hace que una reunión con desconocidos se vuelva una conversación de verdad?',
  siguiente: { n: 9, titulo: 'El organigrama', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'taller', p: 'Taller de integración', j: 'Ernesto', d: 0, e: 'Hoy, 30 personas' },
  { id: 'rocio', p: 'Respuesta de Rocío', j: 'Ernesto', d: 0, e: 'Jueves a las 11' },
  { id: 'sistema', p: 'Adopción del sistema nuevo en créditos', j: 'Luz · Sistemas', d: 0, e: 'Padrinos trabajando' },
  { id: 'consejo', p: 'Organigrama para el consejo', j: 'Gerencia general', d: 0, e: 'Mañana' },
  { id: 'encuesta', p: 'Encuesta de clima', j: 'Gestión Humana', d: 0, e: '74 % de respuesta' },
];

export const FUTURO = {
  agenda_buena: ['La agenda del taller fue de lo que valoran a lo que acuerdan.', 'Nadie miró el reloj.'],
  taller_accesible: ['El taller fue en un lugar accesible, en horario y con mesas mixtas.', 'Marco pudo entrar por la puerta principal, como todos.'],
  conflicto_sostenido: ['Cuando Hilda y Gabriel chocaron, devolviste la palabra al grupo.', 'Gabriel pidió disculpas sin que nadie lo obligara.'],
  conflicto_cortado: ['Cortaste la discusión para seguir con la agenda.', 'El tema volverá en el pasillo.'],
  acuerdos_taller: ['El grupo escribió sus propios acuerdos de convivencia.', 'Los llevarás al consejo como anexo.'],
  grupo_informado: ['Les contaste a los participantes qué pasará con lo que dijeron.', 'Varios lo compartieron en sus agencias.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Jefa de créditos · ex Characato', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  hilda: { n: 'Hilda Mamani', sub: 'Cajera · Agencia Characato', c: '#8A4FBF' },
  taller: { n: 'Taller · Coop. del Sur', sub: '30 participantes', c: '#C05621' },
};

export const WSP = [
  { chat: 'gh', t: '07:35', de: 'Ernesto', txt: 'Hoy te dejo el taller a ti. Yo llego a las 11. Linares quiere un resumen para mañana 🙏' },
  { chat: 'rocio', t: '07:45', de: 'Rocío', txt: 'Voy al taller. Recibí la carta de Legal. Está bien escrita. Mañana te respondo.', si: 'acuerdo_escrito' },
  { chat: 'rocio', t: '07:45', de: 'Rocío', txt: 'No voy a ir al taller. No tengo ánimo.', no: 'rocio_escuchada' },
  { chat: 'gh', t: '08:10', de: 'Luz', txt: 'Valeria y Wilber ya registraron juntos 9 créditos agrícolas en el sistema. ¡Funciona! 🌽', si: 'padrinos' },
  { chat: 'hilda', t: '12:30', de: 'Hilda', txt: 'Doctorcita, el queso helado lo traje de Characato, que el de acá no es igual 😄' },
  { chat: 'kevin', t: '18:10', de: 'Kevin', txt: 'Primera vez que almuerzo con los de Misti. El chico de Cerro Colorado también tiene una hija de dos años. Quién iba a pensar.' },
  { chat: 'taller', t: '18:30', de: 'Marco', txt: 'Gracias por pensar en el acceso. En otros eventos me tuvieron que subir cargado por la escalera.', si: 'taller_accesible' },
];

export const CORREOS = [
  { t: '07:30', de: 'Marco Ticona · Asesor, Agencia Cerro Colorado', para: 'Analista de DO', asunto: 'Taller de mañana', html: '<p>Hola. Me inscribí en el taller. Uso silla de ruedas: ¿el lugar tiene acceso sin escaleras y baño adaptado? Gracias.</p><p>Marco</p>' },
  { t: '17:00', de: 'Fernando Linares · Gerencia General', para: 'Analista de DO', asunto: 'Taller', html: '<p>Mándame en una línea qué salió del taller. Mañana es el consejo.</p><p>F. Linares</p>' },
];

export const QUIZ = [
  { q: 'Un participante en silla de ruedas pregunta si el lugar del taller es accesible. ¿Qué dice la Ley 29973?', ops: ['Nada: es un evento, no el puesto', 'El empleador debe hacer ajustes razonables en el trabajo, salvo carga excesiva', 'Que participe por videollamada', 'Que lo ayuden a subir'], ok: 1, por: 'El art. 50 de la Ley 29973 obliga a ajustes razonables; elegir un lugar accesible es uno, y no es una carga excesiva.' },
  { q: 'En un taller de fusión, lo mejor para empezar es…', ops: ['Los nuevos procesos', 'Lo que cada uno valora de su organización', 'La lista de puestos que cambian', 'Una charla del gerente'], ok: 1, por: 'Empezar por lo que se valora baja la defensa y muestra que no todo se pierde.' },
  { q: 'Dos participantes chocan con dureza en el taller. La facilitadora…', ops: ['Corta y sigue con la agenda', 'Nombra lo que pasa, pide a cada uno que diga lo que necesita y devuelve la palabra al grupo', 'Le da la razón al más antiguo', 'Termina el taller'], ok: 1, por: 'El conflicto bien sostenido es parte del trabajo de integración.' },
  { q: '¿Quién escribe los acuerdos de convivencia de un taller?', ops: ['La gerencia', 'El propio grupo', 'La facilitadora sola', 'Legal'], ok: 1, por: 'Los acuerdos que el grupo escribe son los que el grupo cumple.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'w1', t: '07:40', ch: 'documento', who: null, titulo: 'La agenda', banner: 'assets/esc/reloj.webp', lugar: 'Salón comunal de Sachaca', show: ['calidad', 'tiempo'],
    body: () => `<p>El salón huele a café pasado y a sillar recién limpiado. Por la ventana se ven los andenes de Sachaca. Tienes de 9 a 4 con treinta personas.</p><p><mark class="clave">Ordena la agenda</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los momentos del taller. Usa las flechas.', boton: 'Guardar la agenda',
    items: [
      { id: 'enc', t: 'Encuadre: para qué estamos aquí y reglas de conversación', por: 'Todos saben a qué vinieron.' },
      { id: 'val', t: 'En mesas mixtas: lo que cada uno valora de su cooperativa', por: 'Primero lo que se tiene.' },
      { id: 'dif', t: 'Lo que hoy nos complica trabajar juntos, con ejemplos de esta semana', por: 'Después lo que duele.' },
      { id: 'demo', t: 'Una experiencia que ya funciona entre las dos (los padrinos del sistema)', por: 'Una prueba de que se puede.' },
      { id: 'acu', t: 'Acuerdos de convivencia escritos por el grupo', por: 'Lo que nos llevamos.' },
      { id: 'cie', t: 'Cierre: qué pasará con lo que dijeron y cuándo', por: 'Nadie se va sin saber.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: 1 },
        flags: q === 'buena' ? ['agenda_buena'] : [], cartera: { taller: q === 'riesgosa' ? 'Agenda desordenada' : 'Agenda de seis momentos' },
        out: q === 'buena' ? 'Pegas la agenda en un papelógrafo, con letra grande. Hilda llega temprano y la lee en voz alta: «Primero lo que valoramos. Ya».' : 'La agenda sirve, aunque algún momento llega antes de tiempo.',
        pro: { ok: 'De lo que se valora a lo que se acuerda.', risk: 'Empezar por los problemas pone a todos a la defensiva.', info: 'Deja 15 minutos de holgura: siempre se necesitan.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Agenda que acompaña!' : 'Casi: primero lo que se valora.'],
      };
    },
    rules: [[BP, 'En un taller de integración, primero lo que se valora, luego lo que complica y al final los acuerdos.']],
    mirada: {
      ve: 'La agenda de un taller es una promesa: «aquí no vamos a juzgar lo que fueron, vamos a construir lo que serán». El orden importa: si se empieza por los problemas, la gente defiende su casa; si se empieza por lo que valora, se abre.',
      visual: { tipo: 'flujo', titulo: 'El taller', pasos: ['Encuadre', 'Lo que valoramos', 'Lo que complica', 'Lo que ya funciona', 'Acuerdos', 'Cierre'] },
    },
  },
  {
    id: 'w2', t: '08:20', ch: 'documento', who: null, titulo: 'Que todos puedan llegar', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Salón comunal de Sachaca', show: ['personas', 'cumplimiento', 'calidad'],
    body: () => `<p>Ayer cambiaste el taller de la sala del segundo piso de la sede (sin ascensor) a este salón comunal, después del correo de Marco Ticona, asesor de Cerro Colorado que usa silla de ruedas. Ahora quedan los detalles.</p><p>Te alcanza el tiempo para <mark class="clave">tres</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres detalles que vas a asegurar.', boton: 'Asegurar estos', resumen: 'Aseguraste',
    cols: ['Detalle', 'Por qué importa'],
    rows: [
      { id: 'acceso', cells: ['Rampa, baño adaptado y mesas a la altura de una silla de ruedas', 'Que Marco participe como todos'] },
      { id: 'mesas', cells: ['Mesas mixtas: cada mesa con gente de las dos cooperativas', 'Si no, cada uno se sienta con los suyos'] },
      { id: 'horario', cells: ['Taller en horario laboral, con movilidad pagada desde Chivay y Chiguata', 'Que nadie venga en su día libre ni pague su pasaje'] },
      { id: 'queso', cells: ['Queso helado en el descanso', 'Un detalle arequipeño que alegra a todos'] },
      { id: 'video', cells: ['Grabar todo en video para el gerente', 'Linares quiere verlo'] },
      { id: 'dinam', cells: ['Una dinámica de confianza de dejarse caer hacia atrás', 'Rompe el hielo… a veces'] },
    ],
    score: { acceso: 3, mesas: 3, horario: 3, queso: 1, dinam: -1, video: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, cumplimiento: picks.includes('acceso') ? 3 : -3, etica: picks.includes('video') ? -3 : 1 },
        flags: picks.includes('acceso') && picks.includes('mesas') ? ['taller_accesible'] : [], cartera: { taller: picks.includes('acceso') ? 'Taller accesible, mixto y en horario' : 'Taller con barreras' },
        out: q === 'buena' ? 'A las nueve, Marco entra por la rampa, se ubica en la mesa 3 entre Hilda y un analista de Misti, y pregunta por el café como cualquiera.' : !picks.includes('acceso') ? 'Marco llega y la mesa le queda alta; el baño adaptado está cerrado con llave. Lo resuelven a las apuradas.' : 'El taller arranca, aunque algún detalle importante quedó suelto.',
        pro: { ok: 'Acceso, mezcla y horario: tres condiciones para que todos participen.', risk: 'Grabar en video a la gente para el gerente cierra cualquier conversación sincera.', info: 'El queso helado ayuda, pero no reemplaza lo básico.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Todos adentro, de verdad!' : 'Revisa quién se queda fuera.'],
      };
    },
    rules: [[LEY, 'El empleador hace ajustes razonables en el lugar de trabajo para las personas con discapacidad, salvo carga excesiva (Ley 29973, art. 50).']],
    mirada: {
      ve: 'La integración empieza antes del taller: en quién puede llegar, a qué hora y con quién se sienta. Un lugar accesible no es un favor para Marco; es la condición mínima para que una actividad de trabajo sea de todos.',
      visual: { tipo: 'cambio', titulo: 'Antes y después del correo de Marco', pares: [['Sala del segundo piso sin ascensor', 'Salón con rampa y baño adaptado'], ['Cada uno con los suyos', 'Mesas mixtas'], ['Pasaje desde Chivay por su cuenta', 'Movilidad pagada']] },
      normas: [{ ley: 'Ley 29973, Ley General de la Persona con Discapacidad, art. 50', dice: 'El empleador realiza ajustes razonables en el lugar de trabajo, como la adecuación del entorno y la organización, salvo que acredite una carga excesiva.', practica: 'Cambiar de sala para que Marco entre por su cuenta no es una carga excesiva: es lo mínimo.' }],
    },
  },
  {
    id: 'w3', t: '11:15', ch: 'presencial', who: null, titulo: '«Nos tratan como de segunda»', banner: 'assets/foto2/grito.webp', lugar: 'Salón comunal, mesa 2', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>En el momento de «lo que nos complica», Gabriel comenta en voz alta: «En Misti eso ya lo hacemos en un clic. Es cuestión de querer». Hilda se pone de pie. Primero le habla en quechua a su compañera de Chiguata; luego, en castellano, a todos:</p><p>«<mark class="clave">Nos tratan como de segunda</mark>. Treinta y un años tengo atendiendo socios que ustedes ni conocen.» El salón se queda en silencio. Ernesto acaba de entrar.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecer a Hilda por decirlo, nombrar lo que pasa sin culpar a nadie, pedirle a Gabriel que cuente qué quiso decir y preguntar al grupo qué necesitan para trabajar como iguales.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, confianza: 3 }, flags: ['conflicto_sostenido'],
          out: 'Gabriel respira y dice: «Tienen razón. Hablé como si Characato no supiera nada. No es así». Una asesora de Misti pide que Hilda le enseñe a atender a las socias de la campiña. La tensión no desaparece, pero cambia de forma.',
          pro: { ok: 'Sostienes el conflicto sin taparlo ni escalarlo.', risk: 'Puede descontrolarse si alguien más se enciende.', info: 'Anota la frase de Hilda: es el corazón del diagnóstico cultural.' },
          kusi: ['celebra', '¡Sostener sin apagar! Eso es facilitar.'] } },
      { id: 'b', label: 'Pedir calma y pasar al siguiente punto de la agenda: el taller no es para discutir.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -3 }, flags: ['conflicto_cortado'],
          out: 'El taller sigue. En el descanso, Hilda se queda sola con su queso helado. En el pasillo, dos asesores de Misti se ríen bajito.',
          pro: { ok: 'Mantienes la agenda.', risk: 'Cortar lo que más importa le dice al grupo que aquí no se habla de lo que duele.' },
          kusi: ['pensando', 'Lo que se tapa, vuelve.'] } },
      { id: 'c', label: 'Darle la razón a Hilda frente a todos y pedirle a Gabriel que se disculpe.',
        res: { q: 'riesgosa', fx: { personas: -1, confianza: -3 }, flags: ['conflicto_cortado'],
          out: 'Gabriel se disculpa, rígido. El grupo de Misti siente que la facilitadora tomó partido. Desde ese momento, hablan menos.',
          pro: { ok: 'Validas a Hilda.', risk: 'Si la facilitadora elige un lado, la mitad del salón deja de participar.' },
          kusi: ['preocupado', 'Facilitadora no es jueza.'] } },
    ],
    rules: [[BP, 'Ante un conflicto en un taller: nombrarlo, escuchar a ambas partes y devolverlo al grupo.']],
    mirada: {
      ve: 'Lo que dijo Hilda es lo que medio salón pensaba y nadie se animaba a decir. Gabriel no es un villano: habló desde el orgullo de lo que construyó. El momento más tenso del taller es también el más útil, si se sostiene bien.',
      visual: { tipo: 'matriz', x: 'Temperatura del conflicto', y: 'Aprendizaje del grupo', cuadrantes: ['Se dice y se aprende', 'Se aprende sin conflicto', 'Nada pasa', 'Se rompe'], items: [['Sostener y devolver', .65, .85], ['Cortar y seguir', .2, .2], ['Tomar partido', .85, .25]] },
    },
  },
  {
    id: 'w4', t: '13:30', ch: 'presencial', who: null, titulo: 'Después del almuerzo', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Salón comunal, en círculo', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Almuerzan un chupe de camarones que trajo la señora de la esquina. ${F.has('padrinos') ? 'Valeria y Wilber mostraron cómo registran juntos un crédito de alpacas en el sistema, y el grupo aplaudió.' : 'Luz mostró el sistema en una pantalla, con poca respuesta.'}</p><p>Antes de los acuerdos, el grupo está en círculo. <mark class="clave">Eliges dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para el grupo.',
    opts: [
      { id: 'llevar', label: '¿Qué se llevaría cada uno de la otra cooperativa?', info: 'Una cajera de Misti: «La paciencia con el socio. Nosotros lo atendemos rápido, pero no lo conocemos». Kevin: «Lo rápido. Que un crédito no tarde una semana».' },
      { id: 'miedo', label: '¿Qué es lo que todavía les da miedo?', info: '«Que mañana el consejo decida algo distinto a lo que hablamos hoy», dice Marco. Varios asienten. Es la pregunta que llevarás al consejo.' },
      { id: 'socio', label: 'Si un socio de Chiguata y uno de Cayma entran juntos, ¿qué debería sentir cada uno?', info: 'Hilda: «Que lo conocemos». Valeria: «Que no pierde su tiempo». Alguien escribe en el papelógrafo: «Cercanos y rápidos».' },
      { id: 'jefes', label: '¿Qué necesitan de sus jefes en las próximas semanas?', info: '«Que nos digan las cosas primero a nosotros», dice un vigilante de Characato. «Y que no se peleen delante de nosotros», agrega una asesora de Misti mirando a Gabriel. Gabriel se ríe.' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, calidad: picks.includes('socio') ? 3 : 2 }, rel: { analista: 1 },
      out: picks.includes('socio') ? 'En el papelógrafo queda escrita la frase que nadie planeó: «Cercanos y rápidos». Ernesto le toma una foto.' : 'El grupo ya no habla de «ellos» y «nosotros» todo el tiempo. Solo a veces.',
      kusi: ['feliz', '¡Esas preguntas abrieron la puerta!'],
    }),
    rules: [[BP, 'Una buena pregunta de facilitación invita a imaginar algo en común.']],
    mirada: {
      ve: 'Las preguntas de facilitación no buscan respuestas correctas: buscan que el grupo diga algo que ninguno podría decir solo. «Cercanos y rápidos» puede ser más útil para la cultura de la Cooperativa del Sur que cualquier misión escrita por una consultora.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Characato le da a Misti', items: ['Paciencia con el socio', 'Conocer su historia', 'Atender en quechua'] }, b: { t: 'Lo que Misti le da a Characato', items: ['Rapidez', 'El sistema', 'Metas claras'] } },
    },
  },
  {
    id: 'w5', t: '15:00', ch: 'documento', who: null, titulo: 'Los acuerdos', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Salón comunal, papelógrafo', show: ['calidad', 'personas', 'confianza'],
    body: () => `<p>El grupo propone frases para sus acuerdos de convivencia. Tú las escribes en el papelógrafo, pero <mark class="clave">no todas sirven igual</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de los acuerdos.', boton: 'Guardar los acuerdos',
    bloques: [
      { id: 'trato', t: 'Cómo nos tratamos', n: 2, ops: [
        { id: 't1', t: 'Cada quien llama al otro como el otro prefiera: de usted o de tú.', ok: true, por: 'Respeta las dos culturas.' },
        { id: 't2', t: 'Nadie dice «los de Misti» o «los de Characato» para descalificar.', ok: true, por: 'Concreto y observable.' },
        { id: 't3', t: 'Ser positivos siempre.', ok: false, por: 'Prohíbe el desacuerdo, que es necesario.' },
      ] },
      { id: 'trabajo', t: 'Cómo trabajamos', n: 2, ops: [
        { id: 'w1', t: 'Quien sabe algo, lo enseña: el sistema de un lado, el campo del otro.', ok: true, por: 'Aprendizaje en las dos direcciones.' },
        { id: 'w2', t: 'Las dudas sobre la fusión se preguntan a Gestión Humana, que responde cada viernes.', ok: true, por: 'Un canal real, no el pasillo.' },
        { id: 'w3', t: 'No se comenta nada de la fusión fuera del trabajo.', ok: false, por: 'Imposible de cumplir y suena a mordaza.' },
      ] },
      { id: 'seguir', t: 'Cómo seguimos', n: 1, ops: [
        { id: 's1', t: 'Revisamos estos acuerdos en un mes, en el mismo grupo.', ok: true, por: 'Un acuerdo sin seguimiento se olvida.' },
        { id: 's2', t: 'Que los firme el gerente para que tengan validez.', ok: false, por: 'Son del grupo; no necesitan sello de arriba.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['acuerdos_taller'], cartera: { taller: q === 'riesgosa' ? 'Acuerdos vagos' : 'Cinco acuerdos escritos por el grupo' },
        out: q === 'buena' ? 'Treinta personas firman el papelógrafo con plumones de colores. Marco firma a la altura de su silla; alguien bajó el papel para que pudiera.' : 'Los acuerdos quedan escritos, aunque alguno es difícil de cumplir.',
        pro: { ok: 'Acuerdos concretos, del grupo, con fecha de revisión.', risk: 'Los acuerdos imposibles o que prohíben hablar se rompen el primer día.', info: 'Fotografía el papelógrafo y súbelo a la intranet.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Acuerdos con treinta firmas!' : 'Algunos acuerdos no se van a cumplir.'],
      };
    },
    rules: [[BP, 'Los acuerdos de convivencia son concretos, del propio grupo y con fecha de revisión.']],
    mirada: {
      ve: 'Un acuerdo de convivencia vale por dos cosas: que sea concreto y que lo haya escrito el grupo. «Ser positivos» no sirve; «nadie dice "los de Misti" para descalificar» sí, porque se puede ver cuándo se rompe.',
      visual: { tipo: 'flujo', titulo: 'Los acuerdos del grupo', pasos: ['Usted o tú, como prefiera', 'Sin «los de…»', 'Quien sabe, enseña', 'Preguntas los viernes', 'Revisión en un mes'] },
    },
  },
  {
    id: 'w6', t: '16:40', ch: 'whatsapp', who: null, titulo: 'Qué pasa con lo que dijeron', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Salón comunal, recogiendo papelógrafos', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => `<p>Los participantes se van en grupos. ${F.has('taller_accesible') ? 'La movilidad de Chivay sale a las 5, con Wilber y dos asesoras.' : 'Algunos corren al paradero para no perder la última combi a la campiña.'} Le escribes al grupo del taller.</p><p>Marco preguntó qué pasará mañana en el consejo. <mark class="clave">Tu mensaje responde eso</mark>.</p>`,
    type: 'compose', enviaA: 'taller', para: 'Para: Taller · Coop. del Sur', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Lo que hicieron', ops: [
        { id: 'g1', t: 'Gracias por hablar con tanta franqueza, incluso cuando dolió.', ok: true, por: 'Reconoce lo difícil.' },
        { id: 'g2', t: '¡Qué gran equipo somos! 🎉🎉', ok: null, por: 'Alegre, pero no dice nada de lo que pasó.' },
      ] },
      { id: 'uso', t: 'Qué pasará con lo dicho', ops: [
        { id: 'u1', t: 'Mañana, los acuerdos y las principales preocupaciones irán al consejo como parte de la propuesta, sin nombres.', ok: true, por: 'Lo que dijeron llega a quien decide.' },
        { id: 'u2', t: 'Le paso al gerente la lista de lo que dijo cada uno.', ok: false, por: 'Rompe la confidencialidad del taller.' },
      ] },
      { id: 'cuando', t: 'Cuándo sabrán', ops: [
        { id: 'c1', t: 'El viernes, en la respuesta semanal de Gestión Humana, les contaremos qué decidió el consejo.', ok: true, por: 'Fecha y canal.' },
        { id: 'c2', t: 'Ya les avisaremos.', ok: false, por: 'Sin fecha, el rumor vuelve.' },
      ] },
    ],
    res: sel => {
      const mal = sel.uso === 'u2' || sel.cuando === 'c2', buenas = ['g1', 'u1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -4 : 1, personas: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['grupo_informado'] : [],
        out: q === 'buena' ? 'Llueven corazones verdes y un «diosolopague» de Hilda. Ernesto te escribe aparte: «Lo de mañana va a ser más fácil por lo de hoy».' : mal ? 'Varios salen del grupo en silencio. Hilda no responde.' : 'El grupo responde con emojis. Marco pregunta de nuevo: «¿Y cuándo sabremos?».',
        pro: { ok: 'Gracias, uso y fecha: lo que necesita un grupo para confiar.', risk: 'Prometer listas de nombres o fechas vagas deshace el trabajo del día.', info: 'Manda a Linares su línea: «Cercanos y rápidos».' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'triste' : 'pensando', q === 'buena' ? '¡Taller cerrado con verdad!' : mal ? 'Así se pierde la confianza…' : 'Faltó la fecha.'],
      };
    },
    rules: [[BP, 'Al cerrar un taller, di qué pasará con lo dicho y cuándo sabrán el resultado.']],
    mirada: {
      ve: 'El taller no termina cuando se apagan las luces: termina cuando los participantes ven qué pasó con lo que dijeron. Si mañana el consejo ignora todo, el próximo taller estará vacío. Por eso el mensaje de cierre es una promesa que hay que cumplir.',
      visual: { tipo: 'mensaje', titulo: 'Cierre del taller', txt: 'Gracias por hablar con franqueza, incluso cuando dolió. Mañana, los acuerdos y las preocupaciones irán al consejo, sin nombres. El viernes les contaremos qué decidió.' },
    },
  },
];
