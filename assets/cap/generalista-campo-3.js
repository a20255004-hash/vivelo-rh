// Generalista de RR.HH. en operación minera · Capítulo 3 · «Los contratistas» · Semana 1, miércoles.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas (ya verificadas en el capítulo 1):
// - Ley 29245 (tercerización): responsabilidad solidaria de la empresa principal en ciertos supuestos.
// - Ley 26790 y D.S. 003-98-SA: SCTR obligatorio en actividades de riesgo como la minería.
// No se citan montos ni plazos de pago: se explica el principio sin cifras.

export const CAP = {
  n: 3, titulo: 'Los contratistas', dia: 'Semana 1, miércoles', foto: 'assets/3d/scenes/almacen.webp',
  lugar: 'Minera Puquio · Apurímac, 4,100 m s. n. m.',
  inicio: '06:30', fin: '20:00', cierreHora: '19:45',
  apertura: 'Tu día 3 de 14. Ya no te late la cabeza al subir las escaleras del contenedor. Afuera, el frente de Movitierra levanta polvo. Percy te dejó un encargo: revisar si esa contratista le paga a su gente.', boton: 'Abrir el expediente',
  kusi: 'Hoy toca mirar a la gente que no está en tu planilla… pero sí en tu operación.',
  lead: 'Ordenaste tu mañana, revisaste el expediente de Movitierra, buscaste una salida para que su gente cobre y armaste la matriz de control de contratistas.',
  reflexion: '¿Hasta dónde llega tu responsabilidad con trabajadores que no son de tu empresa?',
  siguiente: { n: 4, titulo: 'La lista de la comunidad', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'contratistas', p: 'Control de Movitierra', j: 'Ing. Mario Salas', d: 0, e: 'Póliza y pagos' },
  { id: 'comedor', p: 'Acta del comedor', j: 'Gladys · Wilber', d: 1, e: 'Revisión el viernes' },
  { id: 'comunidad', p: 'Empleo local con la comunidad', j: 'Doña Juana · Comunidad', d: 2, e: 'Lista llega mañana' },
  { id: 'matriz', p: 'Matriz de control de contratistas', j: 'Percy · RR.HH.', d: 0, e: 'Por armar' },
];

export const FUTURO = {
  movitierra_retencion: ['Retuviste la valorización de Movitierra hasta que pague a su gente.', 'Los trabajadores cobrarán el viernes; el Ing. Salas no lo olvidará.'],
  movitierra_adelanto: ['La minera adelantó dinero directo a la gente de Movitierra.', 'Otras contratistas pedirán lo mismo.'],
  movitierra_sunafil: ['Mandaste a los trabajadores de Movitierra a SUNAFIL sin más.', 'Presentarán una denuncia que llegará a la unidad en la semana 3.'],
  salas_aliado: ['Ayudaste al Ing. Salas a destrabar su pago con Finanzas.', 'Te devolverá el favor cuando haya bloqueo.'],
  matriz_contratistas: ['Armaste la matriz de control mensual de contratistas.', 'Percy la usará con las 14 contratistas de la unidad.'],
  poliza_pendiente: ['Los 8 de Movitierra siguen trabajando sin SCTR.', 'El riesgo crece cada día.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de Movitierra', who: 'contratista' },
  elmer: { n: 'Elmer Taipe', sub: 'Ayudante de Movitierra · vocero de su cuadrilla', c: '#2F6B3F' },
  finanzas: { n: 'Lucía Benavides', sub: 'Analista de Cuentas por Pagar · Lima', c: '#4A5A8A' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
};

export const WSP = [
  { chat: 'contratista', t: '06:40', de: 'Ing. Salas', txt: 'Buenos días, ingeniera. Le adjunto la póliza SCTR de los 8, vigente desde hoy 📎 Como le dije.', si: 'sctr_ok' },
  { chat: 'contratista', t: '06:40', de: 'Ing. Salas', txt: 'Ingeniera, la aseguradora pidió un documento más. Para el viernes ya, seguro.', si: 'sctr_cede' },
  { chat: 'grupo', t: '07:10', de: 'Percy', txt: 'Gladys ya mandó la cena de anoche en termos. Wilber dice que llegó caliente 👍', si: 'comedor_acta' },
  { chat: 'elmer', t: '09:40', de: 'Elmer', txt: 'Señorita, somos tres de Movitierra. ¿Podemos pasar? Es por la plata.' },
  { chat: 'finanzas', t: '15:10', de: 'Lucía', txt: 'Ya ubiqué la valorización de Movitierra. Estaba observada por una firma. Si Operaciones la firma hoy, sale el viernes.', si: 'salas_aliado' },
  { chat: 'yuri', t: '18:50', de: 'Yuri', txt: 'Ingeniera, mañana sube Doña Juana con la lista de la comunidad. Está brava, dicen.' },
];

export const CORREOS = [
  { t: '06:30', de: 'Percy Huillca', para: 'Generalista de RR.HH. · Campo', asunto: 'Movitierra', html: '<p>Tres operadores de Movitierra me dijeron en el comedor que llevan dos quincenas sin cobrar completo. Revisa su expediente del mes. Si ellos no cobran, el problema también es nuestro.</p><p>Percy</p>' },
  { t: '16:30', de: 'Ing. Rodrigo Valdivia · Operaciones Mina', para: 'Generalista de RR.HH. · Campo', asunto: 'RE: Valorización Movitierra', html: '<p>Firmada. Que conste que lo hago porque su frente es crítico, no por favor a nadie.</p><p>R. V.</p>', si: 'salas_aliado' },
];

export const QUIZ = [
  { q: 'En la tercerización, si la contratista no paga a sus trabajadores…', ops: ['Solo responde la contratista', 'La empresa principal puede responder solidariamente en ciertos supuestos', 'Nadie responde', 'Responde la comunidad'], ok: 1, por: 'La Ley 29245 establece la responsabilidad solidaria de la empresa principal en ciertos supuestos.' },
  { q: '¿Qué conviene revisar cada mes a una contratista?', ops: ['Solo la factura', 'Pago de remuneraciones, aportes, SCTR y exámenes médicos de su personal', 'Solo su logo', 'Nada: no es tu planilla'], ok: 1, por: 'La matriz de control mira lo laboral y lo de seguridad, no solo lo comercial.' },
  { q: 'Tres trabajadores de la contratista llegan a reclamar sus sueldos. ¿Qué haces?', ops: ['Les dices que no es tu problema', 'Los escuchas y buscas con la contratista y la minera una salida concreta, sin perder de vista sus derechos', 'Les pagas de tu bolsillo', 'Los mandas a trabajar'], ok: 1, por: 'Escuchar y actuar con la contratista evita que el problema crezca, sin quitarles su derecho a acudir a la autoridad.' },
  { q: 'Una herramienta común en los contratos con contratistas mineras es…', ops: ['Pagar siempre por adelantado', 'Condicionar el pago de la valorización al cumplimiento laboral', 'No pedir documentos', 'Pagar en efectivo a los trabajadores'], ok: 1, por: 'Muchas mineras piden constancias de pago antes de liberar cada valorización.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '06:50', ch: 'documento', who: null, titulo: 'La mañana del miércoles', banner: 'assets/esc/reloj.webp', lugar: 'Contenedor de RR.HH.', show: ['tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Prendes la estufa eléctrica y la laptop, que tarda en reconocer la red satelital. ${F.has('sctr_cede') ? 'Lees el mensaje del Ing. Salas dos veces: la póliza sigue sin salir y sus 8 ya están en el frente.' : 'La póliza de Movitierra llegó a las 6:40. Primera buena noticia del día.'}</p><p>Tienes la mañana para <mark class="clave">tres frentes</mark>. El resto, en la tarde.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes de tu mañana.', boton: 'Ir por estos', resumen: 'Atendiste',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'expediente', cells: ['Revisar el expediente mensual de Movitierra', 'Percy lo pidió: hay rumores de sueldos atrasados'] },
      { id: 'poliza', cells: ['Confirmar el SCTR de los 8 de Movitierra', 'Sin póliza vigente no pueden estar en el frente'] },
      { id: 'cena', cells: ['Preguntar a Wilber cómo llegó la cena', 'Es el primer día del acta del comedor'] },
      { id: 'mural', cells: ['Diseñar el mural de cumpleaños del mes', 'La señora de Bienestar lo pidió para hoy'] },
      { id: 'reporte', cells: ['Llenar el reporte semanal de asistencia para Lima', 'Vence el viernes'] },
      { id: 'buzon', cells: ['Leer los 63 papeles del buzón', 'Lo prometiste para cada lunes'] },
    ],
    score: { expediente: 3, poliza: 3, cena: 2, mural: -1, reporte: 0, buzon: 1 },
    res: (picks, sc, F) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      const cede = F && F.has && F.has('sctr_cede');
      return {
        q, fx: { cumplimiento: picks.includes('poliza') ? 4 : -3, tiempo: q === 'buena' ? 2 : 0, confianza: picks.includes('cena') ? 2 : 0 },
        flags: picks.includes('poliza') ? [] : ['poliza_pendiente'],
        cartera: { contratistas: picks.includes('poliza') ? (cede ? 'Los 8 bajados del frente hasta tener póliza' : 'Póliza SCTR verificada') : 'Póliza sin verificar' },
        out: picks.includes('poliza') ? (cede ? 'Llamas al capataz de Movitierra: los 8 bajan del frente hasta que la póliza esté vigente. El Ing. Salas te cuelga el teléfono.' : 'Abres la póliza: vigente, con los 8 nombres y sus DNI. La guardas en la carpeta del contratista.') : 'Dejas la póliza para después. Lo urgente se mezcla con lo importante.',
        pro: { ok: 'Lo que protege la vida y lo que pidió tu jefe va primero.', risk: 'Una póliza sin verificar es un accidente sin cobertura esperando ocurrir.', info: 'El mural puede esperar al jueves.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Buena mañana. ¡Dale!' : 'Revisa qué protege a las personas hoy.'],
      };
    },
    rules: [[LEY, 'Sin SCTR vigente, nadie realiza actividades de riesgo (Ley 26790 y D.S. 003-98-SA).']],
    mirada: {
      ve: 'En campo, la mañana se te va en lo que grita más fuerte. Elegir bien no es hacer lo más fácil: es empezar por lo que protege a las personas y por lo que nadie más va a revisar.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Riesgo si no se hace', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Puede esperar', 'No es urgente'], items: [['SCTR de los 8', .2, .95], ['Expediente Movitierra', .6, .85], ['Cena del turno noche', .15, .6], ['Buzón', .7, .4], ['Reporte a Lima', .4, .3], ['Mural', .3, .05]] },
    },
  },
  {
    id: 'd2', t: '08:40', ch: 'documento', who: null, titulo: 'El expediente de Movitierra', banner: 'assets/foto/revisa.webp', lugar: 'Contenedor de RR.HH.', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Movitierra tiene 46 trabajadores en la unidad. Su expediente del mes llegó por correo con un PDF escaneado torcido y un Excel con pestañas «Hoja1», «Hoja2» y «NO TOCAR».</p><p>Lo revisas como si fuera tu planilla, porque <mark class="clave">en la práctica también lo es</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple o hay que pedir que se corrija.',
    doc: { t: 'Expediente mensual · Movitierra S.A.C.', sub: '46 trabajadores · movimiento de tierras' },
    lines: [
      { id: 'pago', t: 'Remuneraciones de la segunda quincena: pagadas al 60 %; «saldo en proceso».', bad: LEY, why: 'La remuneración se paga completa y en la oportunidad pactada. En tercerización, la empresa principal puede responder solidariamente (Ley 29245).' },
      { id: 'aportes', t: 'Aportes previsionales del mes anterior: «por declarar».', bad: LEY, why: 'Los aportes de seguridad social del trabajador son obligaciones que también entran en la responsabilidad solidaria de la principal.' },
      { id: 'extras', t: 'Horas trabajadas sobre el turno: registradas en el tareo, pero ninguna pagada.', bad: LEY, why: 'Las horas trabajadas en sobretiempo se pagan. Que estén en el tareo y no en la boleta es una alerta clara.' },
      { id: 'emo', t: 'Exámenes médicos de altura: 46 de 46 vigentes.' },
      { id: 'tregistro', t: 'Constancia de alta en el T-Registro de los 46 trabajadores.' },
      { id: 'boletas', t: 'Boletas firmadas: solo de 20 trabajadores; «las demás se firman en la bajada».', bad: BP, why: 'Sin boletas firmadas no hay forma de comprobar qué se pagó.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: !missLey ? 'buena' : hitsLey >= 2 ? 'aceptable' : 'riesgosa',
      out: missLey ? 'Ves el «60 %» pero no te detienes en lo demás. El Excel de «NO TOCAR» se queda sin abrir.' : `Encuentras ${hitsLey + (hitsBp || 0)} problemas. Lo de las horas extra te hace apretar los dientes: el tareo lo firma el propio supervisor de Movitierra.`,
      cartera: { contratistas: missLey ? 'Expediente revisado a medias' : 'Expediente observado: pagos, aportes y horas extra' },
      pro: { ok: 'Revisar el expediente de una contratista como si fuera tu planilla es lo que evita que su incumplimiento termine siendo tuyo.', risk: 'Si la contratista no paga, la empresa principal puede tener que responder.', info: 'Pide las boletas firmadas y la constancia de pago de aportes, no promesas.' },
      kusi: missLey ? ['preocupado', 'Hay más que el 60 %…'] : ['indignado', '¡Horas trabajadas y no pagadas!'],
    }),
    rules: [[LEY, 'Tercerización: responsabilidad solidaria de la empresa principal en ciertos supuestos (Ley 29245).']],
    mirada: {
      ve: 'Movitierra no es tu planilla, pero su gente opera tus volquetes, come en tu comedor y duerme en tu campamento. Cuando una contratista paga tarde, el reclamo llega a la puerta de la minera. Mejor encontrarlo en el expediente que en la carretera.',
      visual: { tipo: 'embudo', titulo: 'Lo que revela el expediente', niveles: [['Trabajadores de Movitierra', 46], ['Con boleta firmada', 20], ['Con pago completo', 0]] },
      normas: [{ ley: 'Ley 29245, tercerización de servicios', dice: 'La empresa principal puede responder solidariamente por las obligaciones laborales y de seguridad social de la contratista en los supuestos que fija la ley.', practica: 'Por eso las mineras revisan cada mes el pago de las contratistas.' }],
    },
  },
  {
    id: 'd3', t: '09:50', ch: 'presencial', who: null, titulo: 'Elmer y su cuadrilla', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Contenedor de RR.HH.', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Elmer Taipe, de Andahuaylas, entra con dos compañeros. Tiene 31 años, dos hijos y un celular con la pantalla rota donde guarda las fotos de sus boletas.</p><p>«Señorita, mi señora no tiene para la pensión del colegio. Nos dicen que la minera no le paga a Movitierra. <mark class="clave">¿Es verdad? ¿Quién nos paga?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarles que vas a condicionar el próximo pago a Movitierra a que primero les pague el saldo, y darles una fecha para volver a conversar. Recordarles también que pueden acudir a SUNAFIL si lo desean.',
        res: { q: 'buena', fx: { personas: 4, etica: 4, cumplimiento: 3 }, rel: { contratista: -1 }, flags: ['movitierra_retencion'], cartera: { contratistas: 'Pago condicionado al saldo de los trabajadores' },
          out: 'Elmer asiente despacio. «¿El viernes, entonces?» Le das tu número. Antes de irse, uno de sus compañeros te dice «gracias, mamita», y se va con el casco en la mano.',
          pro: { ok: 'Usas la herramienta que tiene la minera sin quitarles su derecho a reclamar ante la autoridad.', risk: 'El Ing. Salas sentirá que lo presionas.', info: 'Revisa el contrato: casi todos tienen una cláusula que permite condicionar el pago.' },
          kusi: ['animo', 'Una salida concreta y sus derechos intactos.'] } },
      { id: 'b', label: 'Pedir a la minera que les adelante el saldo directamente a los 46 y luego descontárselo a Movitierra.',
        res: { q: 'aceptable', fx: { personas: 5, cumplimiento: -2, tiempo: -3 }, flags: ['movitierra_adelanto'], cartera: { contratistas: 'Adelanto directo de la minera' },
          out: 'Percy lo consigue con Finanzas, a regañadientes. Los 46 cobran el viernes. En el comedor, otras dos contratistas ya preguntan si la minera «también les va a pagar a ellos».',
          pro: { ok: 'La gente cobra rápido.', risk: 'Pagar por la contratista crea un precedente y desdibuja quién es el empleador.' },
          kusi: ['pensando', 'Rápido… ¿y la próxima vez?'] } },
      { id: 'c', label: 'Decirles que su empleador es Movitierra y que, si no les paga, lo correcto es ir a SUNAFIL.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3 }, flags: ['movitierra_sunafil'], cartera: { contratistas: 'Trabajadores derivados a SUNAFIL' },
          out: 'Elmer guarda el celular. «Ya, señorita.» Esa noche, en el grupo de Movitierra, alguien sube el enlace de la casilla de denuncias de SUNAFIL.',
          pro: { ok: 'Es cierto que pueden acudir a SUNAFIL.', risk: 'Derivar sin hacer nada olvida que la minera también puede responder y tiene herramientas para actuar.' },
          kusi: ['triste', 'Tenías más herramientas que esa…'] } },
    ],
    rules: [[LEY, 'La empresa principal puede responder solidariamente por las obligaciones laborales de la contratista (Ley 29245).'], [BP, 'Condicionar el pago de la valorización al cumplimiento laboral es una práctica común en minería.']],
    mirada: {
      ve: 'Elmer no sabe de contratos ni de valorizaciones: sabe que su hija no tiene pensión. Tu trabajo es traducir lo que la empresa puede hacer en algo que le sirva a él, sin prometerle lo que no depende de ti.',
      visual: { tipo: 'flujo', titulo: 'Quién le paga a Elmer', pasos: ['La minera paga la valorización', 'Movitierra recibe', 'Movitierra paga a su gente', 'RR.HH. de la minera verifica'], aqui: 3 },
    },
  },
  {
    id: 'd4', t: '12:30', ch: 'llamada', who: 'contratista', titulo: 'La versión del Ing. Salas', banner: 'assets/foto/llamada.webp', show: ['confianza', 'etica', 'tiempo'],
    body: () => `<p>El Ing. Salas te llama antes de que tú lo llames. Ya sabe que Elmer estuvo en tu oficina.</p><p>«Ingeniera, le voy a ser sincero. <mark class="clave">La minera me paga a 60 días y mi última valorización está trabada</mark> por una firma de Operaciones. Yo adelanto planilla con préstamos. ¿Usted cree que me gusta pagar al 60 %?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Averiguar con Finanzas y Operaciones qué traba su valorización y ayudar a destrabarla, a condición de que el saldo de sus trabajadores se pague primero.',
        res: { q: 'buena', fx: { confianza: 4, tiempo: -2, personas: 2 }, rel: { contratista: 1 }, flags: ['salas_aliado'], cartera: { contratistas: 'Valorización en trámite · saldo primero' },
          out: 'Escribes a Lucía, de Cuentas por Pagar en Lima. En una hora sabes que faltaba la firma de Valdivia. El Ing. Salas se queda callado al teléfono: «Gracias. De verdad».',
          pro: { ok: 'Atacas la causa sin soltar la condición que protege a los trabajadores.', info: 'Muchas veces el atraso de la contratista empieza en la propia minera.' },
          kusi: ['celebra', 'La causa también estaba en casa.'] } },
      { id: 'b', label: 'Responderle que su flujo de caja no es problema de la minera: el contrato dice que paga a su gente a tiempo.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -2 }, rel: { contratista: -1 },
          out: 'El Ing. Salas suspira. «Ya, ingeniera.» Cuelga. La firma de Valdivia sigue pendiente y el saldo de Elmer también.',
          pro: { ok: 'Tienes razón en lo contractual.', risk: 'Si la traba está en la minera, insistir solo en el contrato no hace que Elmer cobre.' },
          kusi: ['pensando', 'Razón tienes… pero ¿y el saldo?'] } },
    ],
    rules: [[BP, 'Antes de exigir, revisa si la minera cumple su parte con la contratista.']],
    mirada: {
      ve: 'El Ing. Salas es evasivo, sí. Pero también es un pequeño empresario que adelanta planillas con préstamos porque la minera paga tarde. Entender sus razones no es justificarlo: es encontrar dónde está realmente el nudo.',
      visual: { tipo: 'balanza', a: { t: '«Es su problema»', items: ['Contrato a tu favor', 'El saldo sigue sin pagarse'] }, b: { t: 'Destrabar con condición', items: ['La firma pendiente aparece', 'El saldo se paga primero', 'Un contratista que confía'] } },
    },
  },
  {
    id: 'd5', t: '15:30', ch: 'documento', who: null, titulo: 'La matriz de control', banner: 'assets/esc/planilla.webp', lugar: 'Contenedor de RR.HH.', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Percy pasa por el contenedor con un pan con queso para ti. «Lo de Movitierra nos puede pasar con cualquiera de las 14 contratistas. Arma una rutina mensual.»</p><p>Es tu segundo entregable: <mark class="clave">la matriz de control de contratistas</mark>. Ordena los pasos.</p>`,
    type: 'secuencia', prompt: 'Ordena el control mensual de una contratista. Usa las flechas.', boton: 'Guardar la matriz',
    items: [
      { id: 'ing', t: 'Antes del ingreso: SCTR vigente, examen médico de altura y alta en el T-Registro de cada persona', por: 'Nadie entra sin esto.' },
      { id: 'ind', t: 'Al ingresar: inducción de seguridad y entrega de EPP', por: 'Primer día en la unidad.' },
      { id: 'tar', t: 'Cada semana: cruzar el tareo con los turnos reales', por: 'Así aparecen las horas extra no pagadas.' },
      { id: 'pag', t: 'Cada mes: pedir boletas firmadas y constancia de pago de aportes', por: 'La evidencia del pago.' },
      { id: 'val', t: 'Liberar la valorización solo con lo anterior en regla', por: 'La herramienta de la minera.' },
      { id: 'ent', t: 'Escuchar a la gente de la contratista en el comedor y la garita', por: 'Lo que no sale en los papeles.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'riesgosa' ? 0 : 3 }, rel: { percy: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['matriz_contratistas'], cartera: { matriz: q === 'riesgosa' ? 'Matriz sin ordenar' : 'Matriz de control lista' },
        out: q === 'buena' ? 'Percy la lee de pie. «Esto lo mando a las 14 contratistas el lunes. Con tu nombre.»' : 'Percy mueve dos pasos: «Primero la evidencia, después la plata».',
        pro: { ok: 'Una rutina hace que el control no dependa de que alguien se queje.', info: 'La última fila es la que más se olvida: los papeles no cuentan todo.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Para las 14 contratistas!' : 'Casi: el orden importa.'],
      };
    },
    rules: [[POL, 'En Minera Puquio, ninguna valorización se libera sin constancia de pago al personal de la contratista.']],
    mirada: {
      ve: 'El problema de Movitierra no se resuelve una vez: se previene cada mes. Una matriz convierte lo que hiciste hoy por intuición en algo que cualquier persona del área puede repetir.',
      visual: { tipo: 'flujo', titulo: 'Control mensual de contratistas', pasos: ['Ingreso', 'Inducción', 'Tareo semanal', 'Boletas y aportes', 'Valorización', 'Escuchar'] },
    },
  },
  {
    id: 'd6', t: '17:20', ch: 'whatsapp', who: null, titulo: 'La respuesta a Elmer', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Contenedor de RR.HH.', show: ['confianza', 'personas'],
    body: (n, F) => `<p>${F.has('movitierra_sunafil') ? 'Elmer te escribe con una captura: el formulario de SUNAFIL a medio llenar. «¿Esto nomás hacemos?»' : 'Elmer te escribe: «Señorita, ¿alguna novedad? Los muchachos preguntan».'}</p><p>Le respondes antes de que entre a su turno. <mark class="clave">Lo que sabes, lo que falta y cuándo</mark>.</p>`,
    type: 'compose', enviaA: 'elmer', para: 'Para: Elmer Taipe · Movitierra', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hoy', t: 'Lo que pasó hoy', ops: [
        { id: 'h1', t: 'Elmer, revisé el expediente de Movitierra y hablé con el Ing. Salas y con la minera.', ok: true, por: 'Le cuentas qué hiciste.' },
        { id: 'h2', t: 'Elmer, tranquilo, ya está todo arreglado.', ok: false, por: 'No lo está: falta que el saldo se pague.' },
      ] },
      { id: 'fecha', t: 'Lo que viene', ops: [
        { id: 'f1', t: 'La minera no liberará el próximo pago a Movitierra sin la constancia de que ustedes cobraron el saldo. La meta es el viernes.', ok: true, por: 'Un mecanismo y una fecha.' },
        { id: 'f2', t: 'Pronto les van a pagar.', ok: null, por: 'Sin fecha, «pronto» no tranquiliza a nadie.' },
      ] },
      { id: 'der', t: 'Sus derechos', ops: [
        { id: 'd1', t: 'Si el viernes no cobran, avísame. Y si deciden ir a SUNAFIL, están en su derecho.', ok: true, por: 'No condicionas su derecho a reclamar.' },
        { id: 'd2', t: 'Mejor no vayan a SUNAFIL, que eso complica todo.', ok: false, por: 'Desalentar una denuncia es un riesgo ético y legal.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hoy === 'h2' || sel.der === 'd2', buenas = ['h1', 'f1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, etica: sel.der === 'd2' ? -5 : 2 },
        out: q === 'buena' ? 'Elmer responde con un audio corto en quechua para sus compañeros y luego te escribe: «Gracias, señorita. El viernes le aviso».' : mal ? 'Elmer lee y no responde. Al rato ves que lo reenvió a su grupo con un «ya ven».' : 'Elmer responde: «¿Y cuándo es pronto?».',
        pro: { ok: 'Información honesta, un mecanismo concreto y sus derechos intactos.', risk: 'Pedirle a alguien que no denuncie es una presión indebida.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Claro y honesto. ¡Qué divino!' : 'Revisa lo que prometes.'],
      };
    },
    rules: [[BP, 'Nunca desalientes a un trabajador de acudir a la autoridad.']],
    mirada: {
      ve: 'Un mensaje así no paga la pensión del colegio. Pero le dice a Elmer que alguien está moviendo las cosas, cuándo esperar noticias y que sigue siendo libre de reclamar. Eso baja la tensión de toda una cuadrilla.',
      visual: { tipo: 'mensaje', titulo: 'Lo que sabes, lo que viene, sus derechos', txt: 'Revisé el expediente. La minera no liberará el próximo pago sin la constancia de que cobraron el saldo. La meta es el viernes. Y si deciden ir a SUNAFIL, están en su derecho.' },
    },
  },
  {
    id: 'd7', t: '19:10', ch: 'presencial', who: 'yuri', titulo: 'Lo que viene mañana', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del campamento', show: ['confianza', 'personas'],
    body: (n, F) => `<p>La cena llega caliente: lomo saltado con más papa que lomo. ${F.has('comedor_acta') ? 'Wilber, desde otra mesa, te señala el plato y levanta el pulgar.' : 'La mesa de los operadores está callada.'}</p><p>Yuri se sienta frente a ti. «Ingeniera, mañana sube Doña Juana con la lista de la comunidad. <mark class="clave">Dicen que la minera no está cumpliendo el 30 %</mark>.» ${F.has('yuri_cambio') ? 'Baja la voz: «Yo le conté que usted me ayudó con la asamblea».' : ''}</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Preguntarle cómo se cuenta el 30 % en la comunidad y qué espera Doña Juana.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 2 }, rel: { yuri: 1 },
          out: '«Para la comunidad, los de contratistas también cuentan. Para la minera, a veces no.» Anotas eso con letra grande: ahí está el nudo de mañana.',
          pro: { ok: 'Entender cómo mide el otro es preparar la reunión.', info: 'Pide a Percy el último reporte de empleo local antes de que llegue Doña Juana.' },
          kusi: ['curioso', 'Dos formas de contar el mismo 30 %…'] } },
      { id: 'b', label: 'Agradecerle el dato y cambiar de tema: hoy ya fue suficiente.',
        res: { q: 'aceptable', fx: { tiempo: 1 },
          out: 'Yuri sonríe y habla de su chacra de papa nativa. Mañana sabrás cómo cuenta la comunidad el 30 %, pero en plena reunión.',
          pro: { ok: 'Descansar también es parte del trabajo en altura.', risk: 'Llegar a una reunión con la comunidad sin preparar es arriesgado.' },
          kusi: ['pensando', 'Mañana tocará improvisar un poco.'] } },
    ],
    mirada: { ve: 'Los comuneros que trabajan en la mina son un puente: conocen las dos formas de mirar las cosas. Escucharlos antes de una reunión con la comunidad es la mejor preparación que existe.' },
  },
];
