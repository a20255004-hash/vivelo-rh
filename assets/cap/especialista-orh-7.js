// Especialista en RR.HH. de entidad pública · Capítulo 7 · «La Contraloría» · Semana 2, martes.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Normas citadas (todas ya verificadas en capítulos anteriores):
// - D.Leg. 1440, art. 41 (certificación del crédito presupuestario), capítulo 3.
// - Ley 27815, Código de Ética de la Función Pública, art. 8 (intereses en conflicto), capítulo 4.
// - Ley 29733 (protección de datos personales), capítulo 5.
// - Ley 29248 (bonificación del 10 % a licenciados de las FF.AA.), capítulo 1.
// Nota: no se cita el articulado de la Ley 27785 (Sistema Nacional de Control) porque no se pudo verificar en esta sesión;
// el deber de colaborar con la comisión se presenta como buena práctica.

export const CAP = {
  n: 7, titulo: 'La Contraloría', dia: 'Semana 2, martes', foto: 'assets/3d/scenes/municipalidad.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '07:45', fin: '18:00', cierreHora: '17:45',
  apertura: 'Martes. A las 7:45 ya hay dos personas con chaleco de la Contraloría en la puerta de la municipalidad. El vigilante no sabe si dejarlas pasar antes de la hora. Tú llegas con el cabello mojado por la garúa y un pan con queso en el bolsillo.', boton: 'Recibir a la comisión',
  kusi: 'Una auditoría no es un juicio. Es una pregunta larga: ¿esto se hizo bien? Respóndela con papeles y con la verdad.',
  lead: 'Recibiste a la comisión de control, priorizaste lo que pidió, dijiste la verdad sobre un acta que no existía, cruzaste datos con tres personas y contaste las presiones que recibiste.',
  reflexion: '¿Qué es más difícil en una auditoría: lo que no encuentras o lo que tienes que decir de tu propia oficina?',
  siguiente: { n: 8, titulo: 'El hallazgo', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'oci', p: 'Comisión de control: CAS 003 y 004', j: 'CPC Rocío Alcántara', d: 0, e: 'Empieza hoy' },
  { id: 'faltan', p: 'Documentos faltantes', j: 'ORH', d: 0, e: 'Acta de entrevista del CAS 003; matriz de bonificaciones del 004' },
  { id: 'concurso', p: 'Concurso CAS 005-2026', j: 'Marisol · ORH', d: 0, e: 'Publicación el jueves' },
  { id: 'acceso', p: 'Solicitud de Eder Rojas', j: 'ORH', d: 0, e: 'En plazo' },
];

export const FUTURO = {
  acta_no_existe: ['Dijiste a la auditora que el acta de entrevista del CAS 003 no existe.', 'Será una observación, pero no una sospecha de adulteración, en el capítulo 8.'],
  acta_rehecha: ['Aceptaste rehacer un acta antigua con fecha pasada.', 'La auditora notará que el papel y la firma no cuadran en el capítulo 8.'],
  acta_buscada: ['Pediste un día para buscar el acta en el archivo central.', 'El archivo central te responderá en el capítulo 8.'],
  jr_informado: ['Le contaste a la auditora cómo calculaba las bonificaciones el jefe anterior.', 'Será la pista del hallazgo en el capítulo 8.'],
  presion_contada: ['Le contaste a la auditora las presiones que recibiste y le mostraste la nota informativa.', 'Te protegerá en el capítulo 9.'],
  presion_callada: ['Dijiste que no recibiste ninguna recomendación.', 'La auditora tiene otra fuente y lo sabrá en el capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  liliana: { n: 'Liliana Sánchez', sub: 'Jefa de Planeamiento y Presupuesto', c: '#7A3E9D' },
  regidor: { n: 'Regidor Manuel Tello', sub: 'Regidor municipal', who: 'regidor' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
};

export const WSP = [
  { chat: 'grupo', t: '07:50', de: 'Don Segundo', txt: 'Ya están aquí. Dos señoras y un joven. Les ofrecí café y dijeron que no, gracias. Mala señal 😅' },
  { chat: 'liliana', t: '10:30', de: 'Liliana', txt: 'La auditora me pidió las certificaciones. Las 12 tuyas están limpias. Gracias por no meterme en un lío.', si: 'plazas_12' },
  { chat: 'liliana', t: '10:30', de: 'Liliana', txt: 'La auditora me preguntó por las 3 plazas de serenazgo sin certificación. Le dije la verdad: yo no las certifiqué.', si: 'plazas_15_sin_cert' },
  { chat: 'regidor', t: '12:00', de: 'Regidor Tello', txt: 'Señorita, me dicen que está la Contraloría. Espero que usted sepa ser discreta con lo que conversamos.', si: 'regidor_cede' },
  { chat: 'eder', t: '15:30', de: 'Eder', txt: 'Presenté apelación por lo que no me entregaron. No es personal, señorita.', si: 'acceso_negado' },
];

export const CORREOS = [
  { t: '08:00', de: 'CPC Rocío Alcántara · Comisión de control', para: 'ORH', asunto: 'Requerimiento de información N.° 1', html: '<p>Se solicita poner a disposición de la comisión, en la fecha: actas de las etapas de los concursos CAS 003 y 004-2026; matrices de puntajes y cálculo de bonificaciones; expedientes de los ganadores; constancias de publicación; y comunicaciones recibidas sobre postulantes.</p><p>CPC Rocío Alcántara · Jefa de comisión</p>' },
  { t: '14:10', de: 'Wílder Chuquiruna', para: 'ORH', asunto: 'Reclamo: entregaron mis datos personales', html: '<p>Soy el ganador de la plaza de técnico en informática del CAS 004. Alguien entregó mi domicilio y mi celular a otro postulante. Me están escribiendo. Exijo una explicación.</p>', si: 'acceso_total' },
];

export const QUIZ = [
  { q: 'La auditora pide un acta que no existe. ¿Qué haces?', ops: ['La rehaces con fecha antigua', 'Informas por escrito que no existe y entregas lo que sí hay', 'Dices que se perdió en una mudanza', 'Pides que no la busque'], ok: 1, por: 'Un documento faltante es una observación. Uno rehecho con fecha pasada es otra cosa, mucho más grave.' },
  { q: '¿Qué conviene hacer con lo que te pide una comisión de control?', ops: ['Entregar solo lo que te favorece', 'Entregarlo ordenado, con cargo, y anotar lo que no tienes', 'Esperar a que lo pidan dos veces', 'Mandarlo todo sin orden'], ok: 1, por: 'Orden y constancia de entrega: así se sabe qué se entregó y cuándo.' },
  { q: 'Un postulante recibió por error el domicilio del ganador. ¿Qué ley se afectó?', ops: ['La de presupuesto', 'La Ley 29733 de protección de datos personales', 'La de municipalidades', 'Ninguna'], ok: 1, por: 'Los datos personales de terceros se protegen al entregar documentos.' },
  { q: 'La auditora te pregunta si recibiste recomendaciones de postulantes. ¿Qué respondes?', ops: ['Que no, para no meter a nadie en problemas', 'La verdad, con la nota informativa que dejaste', 'Que le pregunte a tu jefa', 'Que no te acuerdas'], ok: 1, por: 'Lo que dejaste escrito a tiempo es tu respaldo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '08:10', ch: 'presencial', who: 'auditora', titulo: 'La reunión de inicio', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala de reuniones del tercer piso, sin wifi', show: ['confianza', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>La CPC Rocío Alcántara tiene unos 45 años, lentes de marco delgado y una libreta cuadriculada donde escribe con letra pequeña. Saluda a todos por su nombre: ya los traía anotados. ${F.has('acta_instalacion') ? 'Tiene sobre la mesa el acta de instalación del comité que firmaste ayer.' : ''}</p><p>«Una pregunta antes de empezar. ¿Quién es responsable de los legajos de los concursos?» Marisol te mira. <mark class="clave">Llevas ocho días en la ORH</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Yo los tengo a cargo desde la semana pasada. Los concursos 003 y 004 los hizo la gestión anterior. Preparé una lista de lo que encontré y de lo que falta.»',
        res: { q: 'buena', fx: { confianza: 5, cumplimiento: 3 }, rel: { auditora: 1 },
          out: 'La auditora levanta la vista por primera vez. «Una lista de faltantes. Eso no me lo entregan casi nunca.» La anota en su libreta.',
          pro: { ok: 'Dices desde cuándo respondes y lo que sabes, sin cargar culpas ajenas ni esconder vacíos.', info: 'Pide que cada entrega se haga con cargo de recepción.' },
          kusi: ['feliz', 'Honesta desde la primera frase.'] } },
      { id: 'b', label: '«Está todo completo, señora. Cualquier cosa que necesite, me avisa.»',
        res: { q: 'riesgosa', fx: { confianza: -3, cumplimiento: -2 }, rel: { auditora: -1 },
          out: 'La auditora sonríe apenas. «Perfecto. Entonces empezamos por el acta de entrevista del CAS 003.» Es justo la que no está.',
          pro: { ok: 'Quieres dar seguridad.', risk: 'Afirmar que todo está completo cuando sabes que no lo está te pone en contra desde el inicio.' },
          kusi: ['sorpresa', 'Empezó justo por lo que faltaba…'] } },
    ],
    mirada: { ve: 'Una comisión de control llega con preguntas, no con conclusiones. La primera impresión que se lleva de la ORH depende de si encuentra a alguien que sabe qué tiene y qué le falta.' },
  },
  {
    id: 'g2', t: '09:20', ch: 'documento', who: null, titulo: 'El primer requerimiento', banner: 'assets/esc/planilla.webp', lugar: 'Archivo del sótano', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>El requerimiento N.° 1 tiene cinco puntos y la auditora quiere los primeros a las 11. ${F.has('legajos_listos') ? 'Por suerte, el viernes dejaste las actas y la matriz listas.' : 'Las cajas siguen como las dejaste el viernes.'}</p><p>Don Segundo baja contigo con una linterna, porque el foco del sótano parpadea. <mark class="clave">Antes de las 11 solo alcanzas dos</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos puntos que entregas primero.', boton: 'Entregar estos', resumen: 'Entregaste primero',
    cols: ['Punto del requerimiento', 'Qué contiene'],
    rows: [
      { id: 'matriz', cells: ['Matrices de puntajes y cálculo de bonificaciones', 'Cómo se llegó a cada ganador'] },
      { id: 'comunic', cells: ['Comunicaciones recibidas sobre postulantes', 'Cartas, listas y pedidos'] },
      { id: 'actas', cells: ['Actas de cada etapa', 'Quién decidió y cuándo'] },
      { id: 'public', cells: ['Constancias de publicación', 'Capturas de Talento Perú y del portal'] },
      { id: 'cv', cells: ['Fotocopiar todos los CV de los 84 postulantes', 'Por si acaso'] },
    ],
    score: { matriz: 3, actas: 3, comunic: 2, public: 1, cv: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : -1, cumplimiento: q === 'buena' ? 4 : 1 },
        cartera: { oci: q === 'buena' ? 'Primeras entregas con cargo' : 'Entregas en curso' },
        out: picks.includes('matriz') ? 'Entregas con cargo. La auditora abre el Excel de bonificaciones del CAS 004 y frunce el ceño ante una columna escrita a mano: «Bonif. FF.AA. +10».' : picks.includes('cv') ? 'Pasas una hora en la fotocopiadora. La auditora pregunta por qué le das lo que no pidió.' : 'Entregas con cargo. La auditora empieza a leer en silencio.',
        pro: { ok: 'Lo que explica las decisiones va primero: matrices y actas.', risk: 'Entregar de más, sin orden, también dificulta la revisión.', info: 'Guarda una copia del cargo de cada entrega.' },
        kusi: [q === 'buena' ? 'animo' : 'pensando', q === 'buena' ? 'Lo esencial primero.' : '¿Qué explicaba mejor las decisiones?'],
      };
    },
    mirada: {
      ve: 'En una auditoría, el tiempo de la comisión vale tanto como el tuyo. Entregar primero lo que explica cómo se decidió ayuda a que la revisión sea justa.',
      visual: { tipo: 'flujo', titulo: 'Requerimiento N.° 1', pasos: ['Matrices y bonificaciones', 'Actas', 'Comunicaciones', 'Publicaciones', 'Expedientes de ganadores'], aqui: 0 },
    },
  },
  {
    id: 'g3', t: '11:30', ch: 'presencial', who: 'marisol', titulo: 'El acta que no está', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Marisol, con la puerta cerrada', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>La auditora pidió el acta de entrevista del CAS 003. No existe: solo hay un Excel con puntajes. Marisol cierra la puerta. Está pálida.</p><p>«Escúchame. Los puntajes están en el Excel. Llamo a los del comité de esa vez, <mark class="clave">armamos el acta con esos datos y la firman hoy</mark>. No estamos inventando nada, solo poniéndolo en papel.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle a Marisol que no. Informar por escrito a la auditora que el acta no existe y entregar el Excel como lo único que hay.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: -1 }, rel: { marisol: -1, auditora: 1 }, flags: ['acta_no_existe'], cartera: { faltan: 'Acta del CAS 003: informada como inexistente' },
          out: 'Marisol se queda callada un largo rato. Luego asiente: «Tienes razón. Me asusté». La auditora recibe tu nota y escribe algo en su libreta. No sonríe, pero tampoco frunce el ceño.',
          pro: { ok: 'Un documento que falta es una observación. Uno firmado hoy con fecha de hace meses es otra cosa, mucho más grave.', risk: 'Marisol puede sentirse desautorizada.', info: 'Dile a Marisol, en privado, que la nota la protege también a ella.' },
          kusi: ['animo', 'Decir «no existe» también es valentía.'] } },
      { id: 'b', label: 'Aceptar: los puntajes son reales y solo se ponen en un formato. Ayudas a redactar el acta.',
        res: { q: 'riesgosa', fx: { etica: -8, cumplimiento: -6 }, rel: { marisol: 1 }, flags: ['acta_rehecha'], cartera: { faltan: 'Acta del CAS 003 «encontrada»' },
          out: 'A las 3 tienes un acta con fecha de abril y cuatro firmas nuevas. El papel es de la resma que llegó la semana pasada. El sello de la ORH tiene el logo nuevo, que no existía en abril.',
          pro: { ok: 'Sacas a tu jefa de un apuro.', risk: 'Un documento firmado hoy con fecha antigua y presentado a una auditoría puede considerarse adulterado.' },
          kusi: ['indignado', '¡Ese papel no existía en abril!'] } },
      { id: 'c', label: 'Pedirle a la auditora un día para buscar el acta en el archivo central, antes de decir que no existe.',
        res: { q: 'aceptable', fx: { tiempo: -2, cumplimiento: 2 }, flags: ['acta_buscada'], cartera: { faltan: 'Acta del CAS 003: búsqueda en el archivo central' },
          out: 'La auditora acepta: «Hasta mañana a mediodía». Marisol respira. Pero tú sabes que, si no aparece, mañana tendrás la misma conversación.',
          pro: { ok: 'Buscar antes de afirmar es prudente.', risk: 'Si el día extra sirve para «armar» algo, el problema crece.' },
          kusi: ['pensando', 'Un día más… ¿para buscar o para otra cosa?'] } },
    ],
    rules: [[BP, 'Ante una auditoría, lo que falta se informa. No se crea un documento nuevo con fecha antigua.']],
    mirada: {
      ve: 'Marisol no es corrupta: está asustada y quiere proteger a su oficina. Lo difícil de la integridad es decirle que no a alguien que respetas, cuando su propuesta suena casi razonable.',
      visual: { tipo: 'balanza', a: { t: 'Rehacer el acta', items: ['Desaparece la observación hoy', 'Riesgo de documento adulterado', 'Cuatro firmas comprometidas'] }, b: { t: 'Decir que no existe', items: ['Una observación por falta de acta', 'El Excel como evidencia real', 'Nada que esconder'] } },
    },
  },
  {
    id: 'g4', t: '14:20', ch: 'llamada', who: null, titulo: 'Cruzar los datos', banner: 'assets/foto/llamada.webp', lugar: 'Teléfono fijo de la ORH', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>La auditora te pide confirmar tres datos antes de cerrar el día. ${F.has('acceso_parcial') ? 'Una de sus preguntas es la misma que hizo Eder: ¿el ganador de informática era licenciado de las FF.AA.?' : 'Una pregunta te hace ruido: ¿cómo se aplicaron las bonificaciones?'}</p><p><mark class="clave">Llamas a quien puede saberlo</mark>.</p>`,
    type: 'calls',
    calls: [['Liliana Sánchez · Presupuesto', 'Contesta con la boca llena', '«Las del 004 estaban certificadas, eso te lo firmo. Las del 003… certificaron después de convocar. No fue cosa mía; era otro jefe.»'], ['Don Segundo · ORH', 'Contesta desde el sótano', '«El Excel lo llenaba yo, pero los +10 los escribía el ingeniero Jorge con lapicero. Decía que la bonificación de licenciado se suma en la curricular. Yo copiaba.»'], ['Ing. Jorge Ramírez · ex jefe de la ORH, hoy en el Gobierno Regional', 'Contesta apurado', '«¿La bonificación? Se sumaba en la evaluación curricular, así me enseñaron. ¿Por qué? ¿Hay algún problema? Mira, yo ya no estoy ahí, eh.»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con lo que dijo el ex jefe?',
    choices: [
      { id: 'a', label: 'Informárselo por escrito a la auditora tal cual, sin sacar conclusiones: «el ex jefe señala que la bonificación se sumaba en la etapa curricular».',
        res: { q: 'buena', fx: { cumplimiento: 4, etica: 3 }, rel: { auditora: 1 }, flags: ['jr_informado'], cartera: { oci: 'Informado cómo se aplicaban las bonificaciones del CAS 004' },
          out: 'La auditora lee tu nota y abre la Ley 29248 en su laptop. «Mañana revisamos esto con calma. Prepárate: puede cambiar un resultado.»',
          pro: { ok: 'Das el dato a quien debe evaluarlo, sin juzgar a nadie.', info: 'Revisa tú también las bases del CAS 004: ¿qué decían sobre cuándo se aplica la bonificación?' },
          kusi: ['curioso', 'Ese dato puede cambiarlo todo.'] } },
      { id: 'b', label: 'Revisarlo tú primero en las bases y en la ley antes de decirle nada a la auditora.',
        res: { q: 'aceptable', fx: { calidad: 3, cumplimiento: -1 }, cartera: { oci: 'Bonificaciones: revisión propia en curso' },
          out: 'Te llevas las bases del CAS 004 a tu escritorio. La auditora, mientras tanto, ya está haciendo la misma cuenta por su lado.',
          pro: { ok: 'Quieres estar segura antes de hablar.', risk: 'Lo que sabes y no informas puede parecer ocultamiento cuando la auditora llegue sola a la misma conclusión.' },
          kusi: ['pensando', 'Ella también sabe sumar…'] } },
    ],
    rules: [[LEY, 'Ley 29248: bonificación del 10 % a licenciados de las FF.AA. en concursos públicos.']],
    mirada: { ve: 'Las auditorías rara vez encuentran grandes conspiraciones. Encuentran costumbres: algo que «siempre se hizo así» y que nadie volvió a revisar contra la norma.' },
  },
  {
    id: 'g5', t: '15:50', ch: 'presencial', who: 'auditora', titulo: '¿Alguna recomendación?', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala del tercer piso', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>La auditora te pide sentarte. Tiene sobre la mesa las comunicaciones recibidas. ${F.has('lista_registrada') ? 'Entre ellas, la lista del regidor que ingresó por mesa de partes, con su número de expediente.' : F.has('lista_guardada') ? 'No sabe que el fólder del regidor está en tu cajón, a dos pisos de aquí.' : ''} ${F.has('regidor_cede') ? 'Tú sabes que en tu correo está el CV del sobrino del regidor, reenviado por él el lunes pasado.' : ''}</p><p>«Una pregunta de rutina: <mark class="clave">¿ha recibido usted recomendaciones sobre postulantes del concurso que viene?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Contarle todo lo que pasó, con fechas, y entregarle copia de las notas y mensajes que tengas, aunque alguno no te deje bien parada.',
        res: { q: 'buena', fx: { etica: 6, confianza: 3, cumplimiento: 3 }, rel: { auditora: 1, regidor: -1 }, flags: ['presion_contada'],
          out: 'La auditora escucha sin interrumpir. Cuando terminas, dice: «Lo que usted me cuenta no es una falta suya. Lo que sería una falta es callarlo». Anota todo.',
          pro: { ok: 'Lo dicho a tiempo, con respaldo, convierte una presión en información.', risk: 'El regidor sabrá que hablaste.', info: 'Si algo de lo que hiciste no estuvo bien, decirlo ahora es lo que más te protege.' },
          kusi: ['celebra', '¡La verdad, con fechas!'] } },
      { id: 'b', label: 'Decirle que no recibiste nada formal. Lo del regidor fueron conversaciones informales.',
        res: { q: 'riesgosa', fx: { etica: -6, confianza: -4 }, rel: { regidor: 1, auditora: -1 }, flags: ['presion_callada'],
          out: 'La auditora asiente y escribe. Una hora después, Don Segundo te cuenta que también le preguntó a él, y que él sí le contó de la visita del regidor.',
          pro: { ok: 'Evitas problemas con el regidor.', risk: 'En una ciudad mediana, todo se sabe. Lo que callas, alguien más lo cuenta.' },
          kusi: ['triste', 'Don Segundo sí le contó…'] } },
    ],
    rules: [[LEY, 'Ley 27815, art. 8: prohibiciones éticas de la función pública, como mantener intereses en conflicto.']],
    mirada: {
      ve: 'Callar una presión no la borra: la vuelve tuya. Contarla a quien controla, con respaldo, es lo que diferencia a quien recibió una presión de quien se volvió parte de ella.',
      visual: { tipo: 'cambio', titulo: 'Lo dicho a tiempo', pares: [['Una visita incómoda', 'Una nota informativa fechada'], ['Una lista en un fólder', 'Un hecho que la auditora conoce'], ['Un secreto', 'Un respaldo']] },
    },
  },
  {
    id: 'g6', t: '17:20', ch: 'whatsapp', who: 'marisol', titulo: 'Después de la puerta cerrada', banner: 'assets/foto2/pasillo.webp', lugar: 'Paradero de la avenida Atahualpa', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Esperas la combi en la avenida Atahualpa, con la casaca empapada. ${F.has('acta_no_existe') ? 'Marisol no te habló en toda la tarde después de lo del acta.' : F.has('acta_rehecha') ? 'Marisol te agradeció dos veces en la tarde. Tú no puedes dejar de pensar en el sello nuevo.' : 'Marisol pasó la tarde buscando con Don Segundo en el archivo central.'}</p><p>Le escribes antes de subir. <mark class="clave">Mañana siguen trabajando juntas</mark>.</p>`,
    type: 'compose', enviaA: 'marisol', para: 'Para: Marisol Chávez · Jefa de la ORH', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: 'Marisol, sé que hoy fue un día duro, sobre todo para ti.', ok: true, por: 'Reconoces su lugar sin dramatizar.' },
        { id: 'a2', t: 'Marisol, perdóname por lo de hoy.', ok: false, por: 'Si hiciste lo correcto, no hay nada que perdonar.' },
      ] },
      { id: 'fondo', t: 'Lo de fondo', ops: [
        { id: 'f1', t: 'Lo que pasó en el 003 no fue tu gestión. Decir la verdad hoy nos protege a las dos.', ok: true, por: 'Separas su responsabilidad de la de la gestión anterior.' },
        { id: 'f2', t: 'Mejor no volvamos a hablar del acta.', ok: false, por: 'Callarlo entre ustedes no hace que desaparezca.' },
      ] },
      { id: 'cierre', t: 'El cierre', ops: [
        { id: 'c1', t: 'Mañana llego a las 7:30 para preparar lo de las bonificaciones contigo.', ok: true, por: 'Ofreces trabajo concreto, juntas.' },
        { id: 'c2', t: 'Descansa 🙏', ok: null, por: 'Cálido, pero no dice nada de mañana.' },
      ] },
    ],
    res: sel => {
      const mal = sel.abre === 'a2' || sel.fondo === 'f2', buenas = ['a1', 'f1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : mal ? -1 : 1, etica: sel.fondo === 'f2' ? -2 : 1 }, rel: { marisol: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['marisol_reconciliada'] : [],
        out: q === 'buena' ? 'Marisol responde cuando ya estás en la combi: «Gracias. Hoy me salvaste de una tontería. A las 7:30, con café».' : mal ? 'Marisol responde: «Ok». No sabes si quedó en paz o si quedó algo pendiente entre las dos.' : 'Marisol responde con un corazón. Mañana será otro día.',
        pro: { ok: 'Cuidas la relación sin retroceder en lo que hiciste.', risk: 'Pedir perdón por lo correcto o pactar silencio debilita lo que defendiste.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Firme en la ética, cálida con las personas.' : '¿Quedó algo sin decir?'],
      };
    },
    mirada: { ve: 'Después de un desacuerdo duro con tu jefa, el vínculo se cuida con hechos: reconocer su situación, separar lo que no fue su culpa y ofrecer trabajo concreto al día siguiente.' },
  },
];
