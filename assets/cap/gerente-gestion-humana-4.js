// Gerente/a de Gestión Humana · Capítulo 4 · «El sindicato» · Semana 1, jueves.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida y el sindicato de enfermería, que hoy vota una medida de fuerza.
// Normas citadas:
// - Constitución Política del Perú, art. 28: el Estado reconoce los derechos de sindicación, negociación colectiva y
//   huelga, y fomenta formas de solución pacífica de los conflictos (docs/normas/txt).
// - D.S. 019-2006-TR (Reglamento de la Ley General de Inspección del Trabajo), art. 25.9: es infracción muy grave
//   impedir el libre ejercicio de la huelga, como sustituir a trabajadores en huelga (docs/normas/txt).
// - Ley 29733, art. 2, num. 5: la afiliación sindical es un dato sensible (docs/normas/txt).
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR), arts. 82 y 83: en los servicios públicos
//   esenciales, entre ellos los sanitarios, durante una huelga debe garantizarse el personal necesario para que el
//   servicio no se interrumpa por completo (servicios mínimos).
//   https://elperuano.pe/noticia/287659-servicios-esenciales-claves-para-evitar-las-divergencias
//   https://lpderecho.pe/cinco-claves-entender-mantenimiento-servicios-minimos-caso-huelga/

export const CAP = {
  n: 4, titulo: 'El sindicato', dia: 'Semana 1, jueves', foto: 'assets/foto2/grito.webp',
  lugar: 'Clínica Vida San Juan de Lurigancho',
  inicio: '07:30', fin: '20:00', cierreHora: '19:50',
  apertura: 'Jueves. El comunicado del sindicato llegó a las 7:12: «Asamblea general hoy, 7 p. m. Agenda: medida de fuerza». Hoy no vas al piso 7: a las 3 te espera Nora en la cafetería de la clínica de San Juan de Lurigancho, a una hora y media de San Isidro por la Vía de Evitamiento.', boton: 'Leer el comunicado',
  kusi: 'Negociar no es ganar: es entender qué necesita la otra parte y qué puedes dar sin mentir.',
  lead: 'Escuchaste antes de mover una pieza, frenaste un reemplazo ilegal de huelguistas, preparaste una oferta que puedes cumplir, entendiste lo que Nora de verdad necesita y le pusiste por escrito una mesa.',
  reflexion: '¿Qué diferencia hay entre lo que una persona pide y lo que de verdad necesita?',
  siguiente: { n: 5, titulo: 'Lo que no se recorta', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Reducción de costos del 10 %', j: 'Directorio', d: 0, e: 'Faltan 7 días' },
  { id: 'sindicato', p: 'Sindicato de enfermería', j: 'Silvia Quispe · Relaciones Laborales', d: 0, e: 'Asamblea hoy 7 p. m.' },
  { id: 'oferta', p: 'Qué puedes ofrecer', j: 'Gestión Humana', d: 0, e: 'Sin definir' },
  { id: 'he', p: 'Horas extra de Los Olivos', j: 'Jefatura de UCI', d: 0, e: 'En revisión' },
  { id: 'servicios', p: 'Servicios mínimos', j: 'Relaciones Laborales', d: 0, e: 'Lista del año por revisar' },
];

export const FUTURO = {
  escucha_previa: ['Antes de moverte, escuchaste a Silvia, a las jefas y al asesor legal.', 'Sabías el pliego antes de llegar a SJL.'],
  agencia_rechazada: ['Frenaste la idea de contratar enfermeras de agencia para reemplazar huelguistas.', 'Fernando lo agradecerá cuando lo lea Legal.'],
  agencia_contratada: ['Se cotizó una agencia para reemplazar a huelguistas.', 'El sindicato lo sabrá. SUNAFIL podría saberlo.'],
  oferta_realista: ['Llevaste a SJL solo lo que puedes cumplir.', 'Nora no encontrará una promesa rota.'],
  oferta_inflada: ['Ofreciste algo que no controlas.', 'Nora lo guardará por escrito.'],
  nora_intereses: ['Entendiste lo que Nora de verdad necesita: personal por turno y respeto.', 'Será la base de la mesa del martes.'],
  mesa_propuesta: ['Propusiste por escrito una mesa técnica de dotación para el martes.', 'La asamblea condicionó la medida de fuerza a esa mesa.'],
  rossi_ilegal: ['Le explicaste a la doctora que una huelga no se «declara ilegal» desde el directorio.', 'Ella no lo olvidará, para bien y para mal.'],
};

export const CHATS = {
  silvia: { n: 'Silvia Quispe', sub: 'Jefa de Relaciones Laborales', c: '#8A5A2B' },
  nora: { n: 'Lic. Nora Huamán', sub: 'Sindicato de enfermería', who: 'sindicato' },
  carmen: { n: 'Dra. Carmen Rossi', sub: 'Presidenta del directorio', who: 'directorio' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
  jefaturas: { n: 'GH · Jefaturas', sub: 'Jorge, Silvia, Mariela y tú', c: '#0F2A3D' },
};

export const WSP = [
  { chat: 'silvia', t: '07:20', de: 'Silvia', txt: 'Jefa, el comunicado ya está en todas las clínicas. Nora no quiere hablar conmigo hoy: «con la gerente, o con nadie».' },
  { chat: 'nora', t: '09:05', de: 'Nora', txt: 'Gracias por cumplir lo de ayer.', si: 'nora_verdad' },
  { chat: 'nora', t: '09:05', de: 'Nora', txt: 'A las 3 en la cafetería. Venga sola, por favor.', no: 'nora_verdad' },
  { chat: 'jorge', t: '11:50', de: 'Jorge', txt: 'Te mandé la hoja de vacantes por clínica impresa para que la lleves a SJL. Sin nombres.' },
  { chat: 'gg', t: '13:30', de: 'Fernando', txt: 'Legal me confirmó lo de la agencia. Gracias por pararlo.', si: 'agencia_rechazada' },
  { chat: 'nora', t: '20:40', de: 'Nora', txt: 'La asamblea votó: huelga de 48 horas desde el miércoles, salvo que la mesa del martes dé resultados. Usted tiene hasta el martes, licenciada.', si: 'mesa_propuesta' },
  { chat: 'nora', t: '20:40', de: 'Nora', txt: 'La asamblea votó huelga de 48 horas desde el miércoles. No hubo nada por escrito que nos hiciera esperar.', no: 'mesa_propuesta' },
];

export const CORREOS = [
  { t: '07:12', de: 'Sindicato de Enfermería de Grupo Vida', para: 'Gerencia General; Gerencia de Gestión Humana', asunto: 'Comunicado · asamblea general', html: '<p>Ante la información difundida sobre un plan de reducción de costos que afectaría al personal, convocamos a asamblea general hoy a las 7 p. m. Agenda: 1) dotación de enfermería por turno; 2) horas extra impuestas en servicios críticos; 3) medida de fuerza.</p><p>Junta Directiva</p>' },
  { t: '09:40', de: 'Dr. Raúl Paredes · Asesoría laboral externa', para: 'Gerencia de Gestión Humana', asunto: 'Huelga en clínicas · lo esencial', html: '<p>Recuerde que los servicios de salud son servicios públicos esenciales: si hay huelga, debe garantizarse el personal necesario para que el servicio no se interrumpa por completo. Revise que la lista de servicios mínimos del grupo esté comunicada y actualizada. Y nada de reemplazar a quienes acaten la huelga.</p><p>R. Paredes</p>' },
];

export const QUIZ = [
  { q: 'Durante una huelga, contratar enfermeras de agencia para reemplazar a las huelguistas es…', ops: ['Una forma legal de garantizar la atención', 'Una infracción muy grave (D.S. 019-2006-TR, art. 25.9)', 'Legal si es por pocos días', 'Obligatorio en clínicas'], ok: 1, por: 'El art. 25.9 considera infracción muy grave sustituir a trabajadores en huelga, incluso mediante intermediación o tercerización.' },
  { q: 'En una clínica, si hay huelga, ¿cómo se protege a los pacientes?', ops: ['Reemplazando a las huelguistas', 'Con los servicios mínimos: el personal necesario para que el servicio no se interrumpa por completo', 'Cerrando las clínicas', 'Prohibiendo la huelga'], ok: 1, por: 'En los servicios esenciales, como los de salud, el TUO de la LRCT exige garantizar el personal necesario.' },
  { q: 'Nora pide «cero despidos por dos años». ¿Qué es lo más honesto si no lo controlas?', ops: ['Aceptarlo para evitar la huelga', 'Decir qué sí puedes comprometer y qué no depende de ti', 'Rechazar cualquier conversación', 'Prometerlo verbalmente, no por escrito'], ok: 1, por: 'En una negociación, lo que prometes sin poder cumplir se convierte en el próximo conflicto.' },
  { q: 'En negociación, ¿qué son los intereses?', ops: ['Lo que la otra parte pide en voz alta', 'Lo que de verdad necesita y que explica lo que pide', 'Los intereses del dinero', 'Las amenazas'], ok: 1, por: 'Detrás de «cero despidos» puede haber un interés más concreto: personal suficiente por turno y no ser tratadas como un costo.' },
  { q: 'La Constitución (art. 28) reconoce el derecho de huelga y…', ops: ['Lo prohíbe en salud', 'Fomenta formas de solución pacífica de los conflictos laborales', 'Lo deja a criterio del empleador', 'Lo limita a los sindicatos grandes'], ok: 1, por: 'El art. 28 reconoce sindicación, negociación colectiva y huelga, y fomenta la solución pacífica de los conflictos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:00', ch: 'llamada', who: null, titulo: 'Antes de mover una pieza', banner: 'assets/foto/llamada.webp', show: ['confianza', 'calidad', 'tiempo'],
    body: () => `<p>Antes de las 9 tienes que decidir cómo llegas a la reunión de las 3. Haces cuatro llamadas desde el taxi, con la radio del chofer anunciando tráfico en la Vía de Evitamiento.</p>`,
    type: 'calls',
    calls: [['Silvia Quispe', 'Contesta: Relaciones Laborales', 'Jefa, el pliego de fondo es la dotación por turno. Lo de los despidos es el miedo. Y lo de la UCI de Los Olivos es la gota: Nora tiene audios de enfermeras llorando.'], ['Lic. Rosa Villanueva', 'Contesta: jefa de enfermería de Los Olivos', 'Licenciada, si hay huelga, yo no sé quién se queda en la UCI. La lista de servicios mínimos es de hace dos años.'], ['Dr. Raúl Paredes', 'Contesta: asesor laboral externo', 'Lo esencial: salud es servicio esencial, se garantizan servicios mínimos, y por nada del mundo reemplace a las huelguistas.'], ['Nora Huamán', 'No contesta: está en una reunión de la junta directiva']],
    prompt: 'Con lo que escuchaste, ¿cómo llegas a la reunión de las 3?',
    choices: [
      { id: 'a', label: 'Ir con Silvia como apoyo técnico, con los datos de vacantes sin nombres, y a escuchar primero qué necesitan antes de ofrecer nada.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 3 }, rel: { sindicato: 0 }, flags: ['escucha_previa'], cartera: { sindicato: 'Reunión a las 3 con datos y escucha' },
          out: 'Silvia acepta: «Me siento atrás y no hablo, si quieres». Le pides que hable cuando Nora la mire. Le pides a Jorge la hoja de vacantes.',
          pro: { ok: 'Llegas sabiendo el fondo del pliego y con información que puedes compartir.', info: 'Revisa hoy la lista de servicios mínimos: está desactualizada.' },
          kusi: ['curioso', 'Escuchar antes de ofrecer. ¡Bien!'] } },
      { id: 'b', label: 'Mandar hoy una carta formal recordando que cualquier medida de fuerza en salud debe respetar la ley, y luego ir a la reunión.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -2 }, rel: { sindicato: -1 }, flags: ['carta_formal'], cartera: { sindicato: 'Carta formal enviada antes de la reunión' },
          out: 'La carta llega a las 11. A las 11:05, Nora la publica en el grupo de enfermeras con un comentario: «Así nos quieren dialogar».',
          pro: { ok: 'Dejas constancia de las reglas.', risk: 'Una carta de advertencia antes de dialogar se lee como amenaza.' },
          kusi: ['pensando', 'El tono también se negocia.'] } },
    ],
    rules: [[BP, 'Antes de una negociación difícil, entiende el fondo del pliego, no solo lo que se grita.']],
    mirada: {
      ve: 'Negociar al más alto nivel empieza antes de la mesa: saber qué hay detrás de lo que se pide, qué puedes mostrar y qué no puedes tocar. Las cuatro llamadas de la mañana valen más que una hora de discurso en la tarde.',
      visual: { tipo: 'flujo', titulo: 'Lo que aprendiste antes de las 9', pasos: ['El fondo: dotación por turno', 'El miedo: despidos', 'La gota: horas extra en la UCI', 'La ley: servicios mínimos', 'El límite: no reemplazar'] },
    },
  },
  {
    id: 'd2', t: '10:30', ch: 'presencial', who: null, titulo: 'La idea de Fernando', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Piso 9 · Gerencia General', show: ['cumplimiento', 'etica', 'confianza'],
    body: () => `<p>Fernando cierra la puerta. Está pálido: la doctora lo llamó dos veces.</p><p>«Escucha. Rodrigo cotizó una agencia de enfermeras, de esas que dan personal por día. <mark class="clave">Si hay huelga, las traemos y las clínicas no paran</mark>. La doctora quiere eso listo hoy.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que eso es sustituir a trabajadores en huelga, una infracción muy grave, y que la protección de los pacientes se hace con los servicios mínimos, que hoy mismo vas a actualizar.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 3, confianza: 2 }, flags: ['agencia_rechazada'], cartera: { servicios: 'Actualizar la lista de servicios mínimos hoy' },
          out: 'Fernando se frota la cara. «Ok. Llamo a Legal para confirmar y se lo digo yo a la doctora.» Antes de que salgas: «Y gracias por no dejarme meter la pata».',
          pro: { ok: 'Proteges a la empresa de una infracción muy grave y das la alternativa legal.', risk: 'La doctora queda sin el «plan B» que pidió.', info: 'Pide a Silvia la lista de servicios mínimos por clínica para esta tarde.' },
          kusi: ['celebra', 'Pacientes cuidados, ley cumplida.'] } },
      { id: 'b', label: 'Aceptar cotizarla como «plan de contingencia», sin firmar nada todavía.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, etica: -2 }, rel: { sindicato: -1 }, flags: ['agencia_contratada'], cartera: { servicios: 'Agencia cotizada' },
          out: 'Rodrigo pide la cotización por correo, con copia a dos personas. A las 2 de la tarde, una enfermera que hace turnos en esa agencia se lo cuenta a Nora.',
          pro: { ok: 'Fernando y la doctora quedan tranquilos.', risk: 'Preparar el reemplazo de huelguistas ya es una señal, y si se usa, es una infracción muy grave.' },
          kusi: ['indignado', 'Eso iba directo a SUNAFIL.'] } },
    ],
    rules: [[LEY, 'Es infracción muy grave impedir el libre ejercicio de la huelga, como sustituir a trabajadores en huelga mediante contratación directa o intermediación (D.S. 019-2006-TR, art. 25.9).'], [LEY, 'En los servicios esenciales, como salud, se garantiza el personal necesario durante la huelga (TUO de la LRCT, arts. 82 y 83).']],
    mirada: {
      ve: 'Cuando un directorio se asusta, pide «planes B» que suenan razonables. El trabajo de la gerencia de personas es saber cuáles son legales. Para proteger a los pacientes existe una herramienta: los servicios mínimos. Para quebrar una huelga, no existe ninguna legal.',
      normas: [{ ley: 'D.S. 019-2006-TR, art. 25.9', dice: 'Es infracción muy grave realizar actos que impidan el libre ejercicio del derecho de huelga, como la sustitución de trabajadores en huelga, por contratación directa o por intermediación o tercerización.', practica: 'La agencia de enfermeras no es un plan de contingencia: es un riesgo.' }],
    },
  },
  {
    id: 'd3', t: '12:20', ch: 'documento', who: null, titulo: 'Qué puedes ofrecer', banner: 'assets/esc/piensa.webp', lugar: 'Taxi, Vía de Evitamiento', show: ['calidad', 'etica', 'confianza'],
    body: (n, F) => `<p>En el taxi, con el tráfico detenido a la altura de Zárate, haces la lista de lo que podrías poner sobre la mesa. ${F.has('hallazgo_vacantes') ? 'El hallazgo de las vacantes te da una carta que Nora no conoce.' : ''}</p><p>Solo puedes llevar <mark class="clave">tres cosas que puedas cumplir</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que llevas a la reunión.', boton: 'Anotarlas', resumen: 'Llevas',
    cols: ['Oferta', 'Lo que sabes'],
    rows: [
      { id: 'mesa', cells: ['Una mesa técnica de dotación con datos compartidos, desde el martes.', 'Está en tus manos convocarla.'] },
      { id: 'he', cells: ['Compromiso escrito: horas extra ofrecidas y registradas, nunca impuestas.', 'Ya lo empezaste en la UCI.'] },
      { id: 'vac', cells: ['Priorizar la cobertura de las 42 vacantes de enfermería en la propuesta al directorio.', 'Depende del directorio, pero puedes comprometer que lo propones.'] },
      { id: 'cero', cells: ['Cero despidos de enfermería por dos años.', 'No lo decides tú.'] },
      { id: 'aum', cells: ['Un aumento del 15 % para enfermería en enero.', 'No hay presupuesto.'] },
      { id: 'gladys', cells: ['Separar a la jefa de la UCI de Los Olivos.', 'La culpa no es solo de ella.'] },
    ],
    score: { mesa: 3, he: 3, vac: 3, cero: -2, aum: -3, gladys: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      const infla = picks.includes('cero') || picks.includes('aum');
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, etica: infla ? -3 : 3, confianza: q === 'buena' ? 2 : -1 },
        flags: [infla ? 'oferta_inflada' : 'oferta_realista'], cartera: { oferta: infla ? 'Oferta con promesas que no controlas' : 'Mesa, horas extra voluntarias y vacantes' },
        out: q === 'buena' ? 'Tres líneas en tu libreta, todas cumplibles. Silvia las lee y asiente: «Con eso Nora puede volver a su asamblea con algo en la mano».' : infla ? 'Llevas algo que suena bien hoy y que no podrás cumplir el jueves de la próxima semana.' : 'Tu oferta es cumplible, aunque deja fuera algo que importaba.',
        pro: { ok: 'Ofreces lo que controlas: proceso, legalidad y una prioridad en tu propuesta.', risk: 'Una promesa que no depende de ti es un conflicto aplazado.', info: 'Dilo así: «Esto lo comprometo yo; esto lo voy a proponer; esto no depende de mí».' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Poco, verdadero y cumplible.' : '¿Puedes cumplir todo eso?'],
      };
    },
    mirada: {
      ve: 'En una negociación con un sindicato, lo que ofreces se recuerda por años. Una gerencia sólida separa tres tipos de compromiso: lo que decide ella, lo que va a proponer y lo que no depende de ella. Mezclarlos es la forma más rápida de perder la mesa.',
      visual: { tipo: 'matriz', x: 'Lo controlas', y: 'Lo que importa al sindicato', cuadrantes: ['Ofrécelo', 'Propónlo arriba', 'Innecesario', 'No lo prometas'], items: [['Mesa técnica', .9, .8], ['Horas extra voluntarias', .85, .85], ['Cubrir vacantes', .5, .95], ['Cero despidos', .15, .9], ['Aumento 15 %', .1, .7], ['Separar a Gladys', .6, .3]] },
    },
  },
  {
    id: 'd4', t: '15:10', ch: 'presencial', who: 'sindicato', titulo: 'La cafetería de SJL', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Cafetería de la clínica de San Juan de Lurigancho', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Nora llega con el uniforme del turno de mañana y una carpeta llena de hojas. Pide dos emolientes. ${F.has('agencia_contratada') ? 'Lo primero que dice: «¿Así que una agencia, licenciada?».' : F.has('nora_verdad') ? '«Usted cumplió con avisar. Por eso estoy aquí.»' : '«Tiene media hora.»'}</p><p>«Las chicas votan a las 7. Hábleme claro.» Antes de ofrecer nada, <mark class="clave">decides preguntar</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Nora.',
    opts: [
      { id: 'nec', label: '«¿Qué necesitarían ver ustedes el martes para no ir a la huelga?»', info: '«Que alguien con poder se siente con datos reales de cuántas somos por turno. No con promesas de pasillo. Y que lo de la UCI pare ya.»' },
      { id: 'turno', label: '«¿Cómo es un turno de noche hoy en Los Olivos?»', info: 'Nora saca su celular y te pone un audio: una enfermera joven, llorando, dice que tuvo doce pacientes en la noche y que no pudo ir al baño. «Esa chica renunció la semana pasada. Tenía ocho meses.»' },
      { id: 'miedo', label: '«¿Qué es lo que más miedo les da del correo de la doctora?»', info: '«Que nos traten como una línea de Excel. Somos el 40 % de la planilla, ya sabemos que nos miran primero. No queremos privilegios: queremos que no nos rompan.»' },
      { id: 'quien', label: '«¿Quién de su junta es la más dura?»', info: 'Nora te mira largo. «¿Para qué quiere saber eso, licenciada? ¿Para hablar con ella aparte?» Se cierra un poco.' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('quien') ? -2 : 4, confianza: picks.includes('quien') ? -2 : 3 }, rel: { sindicato: picks.includes('quien') ? -1 : 1 },
      flags: picks.includes('quien') ? [] : ['nora_intereses'],
      out: picks.includes('quien') ? 'La conversación se enfría. Nora mira el reloj más de una vez.' : 'Nora habla quince minutos sin parar. Cuando termina, te das cuenta de que lo que pide (cero despidos) y lo que necesita (personal suficiente por turno y respeto) no son lo mismo. Y lo segundo coincide con tus datos.',
      kusi: picks.includes('quien') ? ['preocupado', 'Eso sonó a dividir.'] : ['curioso', 'Detrás del pedido, la necesidad.'],
    }),
    mirada: {
      ve: 'La técnica más simple de negociación es también la más olvidada: preguntar por los intereses antes de discutir posiciones. «Cero despidos» es una posición; «no quedarnos solas con doce pacientes» es un interés. Los intereses tienen más soluciones que las posiciones.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pide', items: ['Cero despidos', 'Fin de las horas impuestas'] }, b: { t: 'Lo que necesita', items: ['Personal suficiente por turno', 'Datos reales en la mesa', 'No ser una línea de Excel'] } },
    },
  },
  {
    id: 'd5', t: '16:00', ch: 'whatsapp', who: null, titulo: 'Por escrito, antes de la asamblea', banner: 'assets/3d/scenes/hospital.webp', show: ['confianza', 'cumplimiento', 'personas'],
    body: () => `<p>Nora se levanta: «Lo que me diga aquí no lo puedo llevar a la asamblea. Lo que me mande por escrito, sí».</p><p>En el pasillo, con el olor a alcohol en gel, le escribes. <mark class="clave">Esto se va a leer en voz alta frente a 400 personas</mark>.</p>`,
    type: 'compose', enviaA: 'nora', para: 'Para: Lic. Nora Huamán · Sindicato', boton: 'Enviar',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'mesa', t: 'La propuesta', ops: [
        { id: 'm1', t: 'Propongo instalar el martes a las 9 una mesa técnica de dotación de enfermería, con datos de vacantes y horas extra por clínica y turno.', ok: true, por: 'Concreto: fecha, hora y con qué datos.' },
        { id: 'm2', t: 'Propongo conversar más adelante, cuando haya novedades.', ok: false, por: 'Vago. No sirve para frenar una votación.' },
      ] },
      { id: 'ya', t: 'Lo que ya está hecho', ops: [
        { id: 'y1', t: 'Desde hoy, en todo el grupo, las horas extra se ofrecen y se registran; no se imponen.', ok: true, por: 'Un gesto concreto y verificable.' },
        { id: 'y2', t: 'Garantizo que no habrá despidos en enfermería.', ok: false, por: 'No lo controlas. Por escrito, menos.' },
      ] },
      { id: 'limite', t: 'Lo que no depende de ti', ops: [
        { id: 'l1', t: 'Mi propuesta al directorio priorizará cubrir las vacantes. La decisión final es del directorio, y se la informaré a usted antes que a nadie.', ok: true, por: 'Honesta sobre tus límites.' },
        { id: 'l2', t: 'Si votan huelga, no habrá mesa.', ok: false, por: 'Una amenaza por escrito, leída en asamblea, garantiza la huelga.' },
      ] },
    ],
    res: sel => {
      const malas = ['m2', 'y2', 'l2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas === 0 ? 'buena' : malas === 1 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, cumplimiento: sel.ya === 'y2' ? -2 : 2, personas: q === 'buena' ? 3 : 0 }, rel: { sindicato: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: sel.mesa === 'm1' ? ['mesa_propuesta'] : [], cartera: { sindicato: sel.mesa === 'm1' ? 'Mesa técnica propuesta para el martes 9:00' : 'Sin propuesta concreta' },
        out: q === 'buena' ? 'Nora responde con dos palabras: «Lo leo». A las 7 de la noche, en el auditorio, lo lee completo. Silvia te lo cuenta en audio desde la última fila.' : q === 'riesgosa' ? 'Nora reenvía tu mensaje a la junta directiva con un comentario: «Miren lo que nos ofrecen».' : 'Tu mensaje ayuda, pero tiene una frase que Nora subrayará en la asamblea.',
        pro: { ok: 'Por escrito, concreto, con un gesto ya cumplido y honesto sobre tus límites.', risk: 'Lo que escribes en un conflicto colectivo se lee en voz alta y se guarda.', info: 'Manda copia a Silvia y a Fernando.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Palabra escrita, palabra cumplible.' : 'Cuidado: eso se va a leer en voz alta.'],
      };
    },
    rules: [[LEY, 'La Constitución (art. 28) fomenta formas de solución pacífica de los conflictos laborales.'], [BP, 'En un conflicto colectivo, escribe solo lo que puedes sostener frente a una asamblea.']],
    mirada: {
      ve: 'Un mensaje en medio de un conflicto colectivo no es una conversación privada: es un documento público. Escrito con fecha, gesto concreto y límites honestos, le da a la dirigente algo que llevar a su gente. Escrito con promesas o amenazas, le da un arma.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje para la asamblea', txt: 'Mesa técnica de dotación el martes a las 9, con datos por clínica y turno. Desde hoy, las horas extra se ofrecen y se registran. Mi propuesta priorizará cubrir las vacantes; la decisión final es del directorio y usted la sabrá primero.' },
    },
  },
  {
    id: 'd6', t: '20:50', ch: 'llamada', who: 'directorio', titulo: '«Declárela ilegal»', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'confianza', 'etica'],
    body: (n, F) => `<p>Estás en el bus de regreso, por la avenida Próceres, cuando suena el celular. ${F.has('mesa_propuesta') ? 'La asamblea condicionó la huelga a la mesa del martes.' : 'La asamblea votó huelga de 48 horas desde el miércoles.'}</p><p>La doctora Rossi: «Me dicen que votaron huelga. Mañana a primera hora quiero que Gestión Humana <mark class="clave">la declare ilegal y que se descuente a quien pare</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: '«Doctora, la empresa no declara ilegal una huelga: eso lo decide la Autoridad de Trabajo según la ley. Lo que sí haré: actualizar los servicios mínimos y llegar a la mesa del martes para que no haya huelga.»',
        res: { q: 'buena', fx: { cumplimiento: 4, confianza: 1, etica: 2 }, rel: { directorio: 0 }, flags: ['rossi_ilegal'], cartera: { servicios: 'Lista de servicios mínimos en actualización' },
          out: 'Silencio. «Me está diciendo que no.» «Le estoy diciendo cómo sí.» Otro silencio. «Martes. Usted me informa el martes a las 6.» Cuelga.',
          pro: { ok: 'Corriges una idea equivocada y ofreces el camino que sí existe.', risk: 'La doctora no está acostumbrada a que le digan cómo funciona la ley.', info: 'Mándale mañana un resumen de una página: qué es legal, qué no y qué estás haciendo.' },
          kusi: ['animo', 'Le dijiste la verdad con un plan. ¡Valiente!'] } },
      { id: 'b', label: '«Entendido, doctora. Mañana lo veo con Legal.»',
        res: { q: 'aceptable', fx: { confianza: 1, cumplimiento: -1 }, rel: { directorio: 1 },
          out: 'La doctora cuelga satisfecha. Mañana tendrás que explicarle que lo que le prometiste ver no se puede hacer.',
          pro: { ok: 'Evitas el choque esta noche.', risk: 'Postergar la verdad la hace más cara.' },
          kusi: ['pensando', 'Mañana la conversación será más difícil.'] } },
    ],
    rules: [[LEY, 'En los servicios esenciales, durante la huelga se garantiza el personal necesario para no interrumpir totalmente el servicio (TUO de la LRCT, arts. 82 y 83).'], [BP, 'Ante un pedido imposible del directorio, explica el límite y ofrece el camino legal.']],
    mirada: {
      ve: 'Al más alto nivel, negociar también es negociar hacia arriba. Un directorio asustado pide medidas rápidas; la gerencia de personas tiene que decir cuáles existen y cuáles son un atajo hacia un problema mayor. Decirlo con un plan es lo que convierte un «no» en liderazgo.',
      visual: { tipo: 'flujo', titulo: 'Si hay huelga en una clínica', pasos: ['Comunicación del sindicato', 'Servicios mínimos garantizados', 'Nadie reemplaza a huelguistas', 'La Autoridad de Trabajo se pronuncia', 'Diálogo para terminarla'] },
    },
  },
];
