// Jefe/a de Relaciones Laborales · Capítulo 5 · «Los servicios mínimos» · Semana 1, viernes.
// Hilo: la mesa del jueves dejó avances (o no) y una nueva reunión el lunes. La huelga anunciada empieza el martes.
// Hoy hay que acordar qué no puede pararse en la fundición y quién se queda.
// Normas citadas:
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR), art. 82: cuando la huelga afecte servicios
//   públicos esenciales o se requiera garantizar actividades indispensables, los trabajadores en conflicto deben
//   garantizar la permanencia del personal necesario; art. 84 d): la huelga puede ser declarada ilegal si se incumplen
//   los arts. 78 y 82. El empleador comunica la relación de puestos que deben seguir operando; si hay desacuerdo,
//   existe un procedimiento de divergencia ante la Autoridad de Trabajo.
//   https://elperuano.pe/noticia/286407-servicios-minimos-efectos-de-incumplir-la-normativa
//   https://elperuano.pe/noticia/309284-puestos-de-trabajo-excluidos-de-la-huelga
//   https://elperuano.pe/noticia/287659-servicios-esenciales-claves-para-evitar-las-divergencias
// - D.S. 019-2006-TR, art. 25.9: sustitución de trabajadores en huelga (docs/normas/txt).
// - Ley 29783, Ley de Seguridad y Salud en el Trabajo: deber de prevención del empleador (docs/normas/txt), como contexto.
// Los puestos y números de la fundición son ficticios.

export const CAP = {
  n: 5, titulo: 'Los servicios mínimos', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/mineria.webp',
  lugar: 'Fundición del Sur · Sala de control y oficinas',
  inicio: '07:20', fin: '19:30', cierreHora: '19:10',
  apertura: 'Viernes. Te pusiste el casco, los lentes y el respirador para entrar a la sala de control. Detrás del vidrio, el horno brilla naranja. Wilber te espera con una lista impresa y una frase: «Esto no se apaga con un botón».', boton: 'Entrar a la sala de control',
  kusi: 'Hoy toca cuidar a las personas, las instalaciones y el derecho a la huelga al mismo tiempo. ¡Se puede!',
  lead: 'Limpiaste una lista de servicios mínimos inflada, usaste lo que la empresa ya había comunicado, armaste un plan técnico, lo acordaste con el sindicato y frenaste la tentación de producir «a escondidas».',
  reflexion: '¿Dónde está la línea entre lo que es indispensable y lo que solo es conveniente para la empresa?',
  siguiente: { n: 6, titulo: 'La comunicación', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'lista', p: 'Lista de puestos indispensables', j: 'Ing. Wilber Chambi', d: 0, e: 'Borrador: 46 personas por turno' },
  { id: 'anual', p: 'Comunicación anual de puestos', j: 'Jhon · Archivo', d: 0, e: 'Enviada en febrero' },
  { id: 'plan', p: 'Plan de servicios mínimos', j: 'Relaciones Laborales', d: 0, e: 'Sin armar' },
  { id: 'acuerdo', p: 'Acuerdo con el sindicato', j: 'Teodoro Cutipa', d: 0, e: 'Reunión 13:30' },
  { id: 'garita', p: 'Protocolo de ingreso el martes', j: 'Seguridad patrimonial', d: 0, e: 'Pendiente' },
];

export const FUTURO = {
  lista_tecnica: ['La lista de servicios mínimos quedó en lo indispensable: horno, gases, energía, agua y emergencias.', 'Nadie podrá decir que sirvió para producir. Capítulo 7.'],
  lista_inflada: ['La lista de servicios mínimos quedó inflada con puestos de producción.', 'El sindicato la llevará a la Autoridad como reemplazo encubierto. Capítulo 8.'],
  anual_usada: ['Partiste de la comunicación anual de puestos y propusiste sumar la planta de oxígeno por acuerdo.', 'Silvia la mostrará en la reunión extraproceso. Capítulo 8.'],
  minimos_acordados: ['Acordaste con el sindicato 18 personas por turno, con rotación y justificación técnica.', 'El martes los servicios mínimos funcionarán. Capítulo 7.'],
  minimos_impuestos: ['Impusiste 40 personas por turno sin acuerdo.', 'Habrá divergencia ante la Autoridad y tensión en la garita. Capítulos 7 y 8.'],
  minimos_cortos: ['Aceptaste 10 personas por turno, menos de lo que Wilber considera seguro.', 'El horno quedará al límite. Capítulo 7.'],
  produccion_frenada: ['Te negaste a usar los servicios mínimos para seguir despachando ánodos.', 'El gerente buscará otra salida el martes. Capítulo 7.'],
  produccion_encubierta: ['Aceptaste que los servicios mínimos sigan despachando ánodos «por si acaso».', 'El sindicato lo verá desde el piquete. Capítulo 7.'],
  protocolo_garita: ['El protocolo de la garita está claro: lista de puestos, relevos y nadie cruza el piquete por la fuerza.', 'El primer día empieza ordenado. Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  wilber: { n: 'Ing. Wilber Chambi', sub: 'Superintendente de Fundición', c: '#8A3B12' },
  marleny: { n: 'Marleny Quispe', sub: 'Secretaria general · sindicato de mantenimiento', c: '#5B3E8C' },
};

export const WSP = [
  { chat: 'wilber', t: '06:55', de: 'Wilber', txt: 'Ya imprimí la lista. Te advierto que la hice pensando en que nada falle, no en lo que diga la ley.' },
  { chat: 'wilber', t: '07:00', de: 'Wilber', txt: 'Gracias por lo del lunes. Esta lista la hice contigo en mente: sin trampas.', si: 'wilber_aliado' },
  { chat: 'marleny', t: '10:30', de: 'Marleny', txt: 'Dos electricistas por turno en la subestación. Ya les pregunté. Pero el que diga que vamos a «reemplazar» a alguien, me escucha.', si: 'marleny_respeto' },
  { chat: 'marleny', t: '10:30', de: 'Marleny', txt: 'Mis electricistas no van a entrar al horno si eso parece romper la huelga. Ustedes verán.', no: 'marleny_respeto' },
  { chat: 'sindicato', t: '16:05', de: 'Teodoro Cutipa', txt: 'La junta designará a los 18 por turno. Le paso los nombres el lunes. Que no se use para producir.', si: 'minimos_acordados' },
  { chat: 'gerencia', t: '18:10', de: 'Ing. Paredes', txt: 'Entendido lo de los ánodos. Pero el martes quiero ver opciones.', si: 'produccion_frenada' },
  { chat: 'abogado', t: '18:40', de: 'Dra. Medina', txt: 'Buen trabajo hoy. Archiva el plan firmado con la comunicación anual. Si hay divergencia, eso es lo que mira la Autoridad.' },
];

export const CORREOS = [
  { t: '08:10', de: 'Dra. Silvia Medina · Asesoría Legal', para: 'Jefatura de Relaciones Laborales', asunto: 'Servicios mínimos: lo esencial', html: '<p>El TUO (art. 82) dice que, cuando se requiere garantizar actividades indispensables, los trabajadores en conflicto deben asegurar la permanencia del personal necesario. Si no lo hacen, la huelga puede ser declarada ilegal (art. 84).</p><p>Pero «indispensable» no es «todo lo que produce»: es la seguridad de las personas y de las instalaciones y lo necesario para retomar la actividad después. Si inflamos la lista, la Autoridad lo verá como reemplazo encubierto.</p><p>La empresa comunica la relación de puestos; si no hay acuerdo, existe un procedimiento de divergencia ante la Autoridad.</p><p>Silvia</p>' },
  { t: '12:15', de: 'Óscar Valdivia · Finanzas', para: 'Jefatura de Relaciones Laborales', asunto: 'Movilidad de madrugada', html: '<p>Lo prometido: la movilidad para el turno de madrugada costaría unos S/ 18 mil al mes. Te lo dejo para la reunión del lunes.</p><p>Óscar</p>' },
];

export const QUIZ = [
  { q: 'Según el art. 82 del TUO de la LRCT, cuando se requiere garantizar actividades indispensables…', ops: ['La empresa contrata reemplazos', 'Los trabajadores en conflicto garantizan la permanencia del personal necesario', 'Se prohíbe la huelga', 'Decide solo el gerente'], ok: 1, por: 'El art. 82 pone en los trabajadores en conflicto el deber de garantizar el personal necesario para esas actividades.' },
  { q: 'Si los trabajadores incumplen los servicios mínimos, la huelga…', ops: ['Sigue igual', 'Puede ser declarada ilegal (art. 84)', 'Se convierte en paro', 'Pasa a arbitraje automático'], ok: 1, por: 'El art. 84 del TUO prevé la ilegalidad de la huelga cuando se incumplen los arts. 78 y 82.' },
  { q: 'Usar al personal de servicios mínimos para seguir produciendo y despachando…', ops: ['Es parte de los servicios mínimos', 'Desnaturaliza los servicios mínimos y puede verse como sustitución', 'Es obligatorio', 'Es una buena práctica'], ok: 1, por: 'Los servicios mínimos protegen personas, instalaciones y la reanudación; no son para mantener la producción normal.' },
  { q: 'Si la empresa y el sindicato no se ponen de acuerdo sobre los servicios mínimos…', ops: ['Decide el gerente', 'Existe un procedimiento de divergencia ante la Autoridad de Trabajo', 'No hay huelga', 'Se despide a los dirigentes'], ok: 1, por: 'La normativa prevé un procedimiento de divergencia ante la Autoridad Administrativa de Trabajo.' },
  { q: 'Para definir quién cubre los servicios mínimos lo más sólido es…', ops: ['Elegir a los «leales»', 'Definir puestos y turnos con justificación técnica y acordar la designación', 'Pedir voluntarios en la garita', 'Usar contratistas'], ok: 1, por: 'Puestos, turnos y justificación técnica; la designación de personas se coordina con el sindicato.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:40', ch: 'documento', who: null, titulo: 'La lista de Wilber', banner: 'assets/3d/scenes/planta.webp', lugar: 'Sala de control de la fundición', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Wilber Chambi, 48 años, ingeniero metalurgista de Juliaca, conoce el horno como si fuera un pariente. ${F.has('wilber_aliado') ? 'Te agradece otra vez que lo hayas escuchado el lunes.' : 'Te mira con algo de desconfianza: el lunes nadie de RR.HH. lo llamó.'} Su lista dice «46 personas por turno».</p><p>«Con esto duermo tranquilo», dice. <mark class="clave">Revisa qué es indispensable y qué no</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería estar en una lista de servicios mínimos.',
    doc: { t: 'Puestos que no pueden parar durante la huelga', sub: 'Borrador de Operaciones · Ing. Wilber Chambi' },
    lines: [
      { id: 'horno', t: 'Horno de fusión: operadores para mantenerlo caliente en régimen de espera, sin cargar concentrado. 4 por turno.' },
      { id: 'acido', t: 'Planta de ácido sulfúrico: control de gases para evitar emisiones. 4 por turno.' },
      { id: 'energia', t: 'Subestación y energía: 2 electricistas por turno.' },
      { id: 'agua', t: 'Planta de tratamiento de agua y bombas de enfriamiento: 3 por turno.' },
      { id: 'brigada', t: 'Brigada de emergencias y tópico: 5 por turno.' },
      { id: 'anodos', t: 'Moldeo y despacho de ánodos al puerto, para no incumplir el embarque del 5: 18 por turno.', bad: LEY, why: 'Despachar producción no es indispensable para la seguridad ni para reanudar: es producción normal. Usar servicios mínimos para eso se parece a sustituir a los huelguistas (D.S. 019-2006-TR, art. 25.9).' },
      { id: 'convertidores', t: 'Convertidores operando al 60 % «para no perder ritmo»: 10 por turno.', bad: BP, why: 'Si los convertidores siguen operando, ya no es mantenimiento de seguridad sino producción. Wilber debe justificar cuánta gente se necesita para dejarlos en espera de forma segura.' },
      { id: 'nombres', t: 'Al final: «Sugerencia: no incluir a los dirigentes de la junta directiva».', bad: LEY, why: 'Definir los servicios mínimos según quién es dirigente es trato distinto por actividad sindical (D.S. 019-2006-TR, art. 25.12). La lista se hace por puestos, no por personas.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const q = !missLey && hitsBp ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: missLey ? -6 : 6, calidad: q === 'buena' ? 5 : 1, etica: missLey ? -3 : 2 },
        flags: missLey ? ['lista_inflada'] : ['lista_tecnica'],
        cartera: { lista: missLey ? 'Inflada: incluye producción' : q === 'buena' ? 'Técnica: 18 por turno' : 'Sin ánodos; convertidores por justificar' },
        out: missLey ? 'Wilber sonríe: «Perfecto, así pasa». Pero Cutipa va a contar 46 cascos entrando el martes, y va a preguntar cuántos están produciendo.' : 'Wilber tacha con lapicero rojo, refunfuñando. «Sin ánodos, sin convertidores al 60… quedan 18.» Hace la suma otra vez. «Dieciocho. Con eso el horno no se muere.»',
        pro: { ok: 'Una lista técnica protege a las personas, las instalaciones y la legitimidad de la empresa.', risk: 'Una lista inflada convierte los servicios mínimos en la prueba de un reemplazo encubierto.', info: 'Pídele a Wilber la justificación técnica por escrito: la necesitarás si hay divergencia.' },
        kusi: missLey ? ['preocupado', 'Eso es seguir produciendo con otro nombre…'] : ['celebra', '¡Indispensable de verdad!'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT, art. 82: los trabajadores en conflicto garantizan el personal necesario para actividades indispensables.'], [LEY, 'D.S. 019-2006-TR, art. 25.9: sustitución de trabajadores en huelga.']],
    mirada: {
      ve: 'Toda gerencia tiende a inflar los servicios mínimos: cuanto más alto el número, menos se siente la huelga. Pero un servicio mínimo existe para que nadie salga herido y para que la planta pueda volver; no para que la huelga no se note.',
      visual: { tipo: 'embudo', titulo: 'De la lista de Operaciones a lo indispensable', niveles: [['Borrador de Wilber', 46], ['Sin despacho de ánodos', 28], ['Convertidores solo en espera', 18]] },
      normas: [{ ley: 'TUO de la LRCT (D.S. 010-2003-TR), art. 82', dice: 'Cuando se requiera garantizar el cumplimiento de actividades indispensables, los trabajadores en conflicto deben garantizar la permanencia del personal necesario para impedir su interrupción total.', practica: 'La base de la lista es lo que no puede interrumpirse sin riesgo, no lo que conviene producir.' }],
    },
  },
  {
    id: 'e2', t: '09:20', ch: 'documento', who: null, titulo: 'El papel de febrero', banner: 'assets/esc/lupa.webp', lugar: 'Archivo de Relaciones Laborales', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>Jhon vuelve del archivo con un folder polvoriento. «Jefa, en febrero la empresa comunicó a la Autoridad de Trabajo su relación de puestos que deben seguir operando en una huelga.» La lista coincide casi entera con la de Wilber corregida.</p><p>Solo falta un detalle: <mark class="clave">la planta de oxígeno nueva, que se inauguró en julio</mark>, no está.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Partir de la lista de febrero, explicar que la planta de oxígeno es nueva y proponer al sindicato sumarla por acuerdo, con la justificación técnica de Wilber.',
        res: { q: 'buena', fx: { cumplimiento: 5, calidad: 3, confianza: 2 }, flags: ['anual_usada'], cartera: { anual: 'Base de la propuesta; oxígeno por acuerdo' },
          out: 'Silvia lee el folder y te manda un audio: «Esto vale oro. No estamos inventando nada: estamos cumpliendo lo que ya dijimos en febrero».',
          pro: { ok: 'Usas lo que la empresa ya comunicó y propones lo nuevo con transparencia.', info: 'Si el sindicato no acepta lo de oxígeno, puede discutirse en un procedimiento de divergencia.' },
          kusi: ['celebra', '¡El archivo te salvó el día!'] } },
      { id: 'b', label: 'Ignorar el papel de febrero y presentar la lista nueva como si fuera la oficial.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, confianza: -3 },
          out: 'Funciona hasta que el abogado del sindicato pide la comunicación de febrero. Las dos listas no coinciden y nadie sabe explicar por qué.',
          pro: { ok: 'Trabajas con la lista más actual.', risk: 'Esconder la comunicación anterior hace parecer que la empresa cambió las reglas para la huelga.' },
          kusi: ['pensando', '¿Y si el sindicato también tiene ese papel?'] } },
      { id: 'c', label: 'Mandar una nueva comunicación hoy a la Autoridad con la planta de oxígeno y no conversarlo con el sindicato.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -2 },
          out: 'Jhon la envía por mesa de partes virtual. Cutipa se entera por la Autoridad, no por ti.',
          pro: { ok: 'Dejas constancia formal.', risk: 'Sin conversarlo, el sindicato lo lee como una jugada a sus espaldas, cuatro días antes de la huelga.' },
          kusi: ['pensando', 'Formal… pero sin conversar.'] } },
    ],
    rules: [[LEY, 'El empleador comunica la relación de puestos que deben seguir operando en una huelga; si hay desacuerdo, existe un procedimiento de divergencia (El Peruano, 2026).']],
    mirada: {
      ve: 'Los servicios mínimos no se inventan la víspera de una huelga: la ley prevé que la empresa los comunique con anticipación. Cuando ese papel existe, es tu mejor argumento; cuando falta algo, se conversa.',
      visual: { tipo: 'linea', titulo: 'Los servicios mínimos en el año', hitos: [['Febrero', 'Comunicación anual de puestos'], ['Julio', 'Nueva planta de oxígeno'], ['Viernes', 'Propuesta al sindicato'], ['Martes', 'Huelga anunciada']] },
    },
  },
  {
    id: 'e3', t: '11:00', ch: 'documento', who: null, titulo: 'El plan', banner: 'assets/esc/idea.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>Con la lista técnica y el papel de febrero, toca armar el plan que llevarás a Cutipa a la 1:30. Wilber se sienta a tu lado con un jugo de papaya del quiosco.</p><p><mark class="clave">Un plan que pueda leer un operador, un inspector y un gerente</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas del plan de servicios mínimos.', boton: 'Imprimir el plan',
    bloques: [
      { id: 'que', t: 'Qué cubre', n: 1, ops: [
        { id: 'q1', t: 'Seguridad de personas e instalaciones y lo necesario para reanudar: horno en espera, gases, energía, agua y emergencias.', ok: true, por: 'Esa es la razón de ser de los servicios mínimos.' },
        { id: 'q2', t: 'Todo lo necesario para no perder el embarque del 5.', ok: false, por: 'Eso es producción.' },
      ] },
      { id: 'cuantos', t: 'Cuántos y cómo', n: 2, ops: [
        { id: 'c1', t: '18 personas por turno, con justificación técnica de Wilber por puesto.', ok: true, por: 'Número defendible ante cualquiera.' },
        { id: 'c2', t: 'Rotación entre los designados, para que nadie trabaje todos los días de huelga.', ok: true, por: 'Reparte la carga y baja la tensión con la base.' },
        { id: 'c3', t: 'Los supervisores eligen a los más confiables.', ok: false, por: 'Elegir por «confianza» es elegir por postura sindical.' },
      ] },
      { id: 'quien', t: 'Quién designa', n: 1, ops: [
        { id: 'd1', t: 'La empresa define puestos y turnos; el sindicato designa a las personas y entrega la lista antes del martes.', ok: true, por: 'Coherente con que los trabajadores en conflicto garantizan el personal.' },
        { id: 'd2', t: 'La empresa designa a las personas sin consultar.', ok: false, por: 'Sin acuerdo, el martes habrá discusión en la garita.' },
      ] },
      { id: 'div', t: 'Si no hay acuerdo', n: 1, ops: [
        { id: 'v1', t: 'Lo que no se acuerde se lleva a la Autoridad de Trabajo como divergencia.', ok: true, por: 'Un camino previsto, no una pelea en la puerta.' },
        { id: 'v2', t: 'Si no aceptan, entra la contratista.', ok: false, por: 'Eso es sustitución.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -4 : 3 },
        cartera: { plan: q === 'buena' ? 'Puestos, 18 por turno, rotación, designa el sindicato, divergencia' : 'Plan con huecos' },
        out: q === 'buena' ? 'Wilber firma la justificación técnica de cada puesto. «Nunca había escrito por qué necesito a cada uno. Ahora entiendo por qué me lo pedías.»' : 'El plan tiene piezas que el sindicato no va a firmar. Lo sabrás a la 1:30.',
        pro: { ok: 'Puestos, número justificado, rotación y designación sindical: un plan que se puede cumplir.', risk: 'Si la empresa elige a las personas, el plan se vuelve una lista de leales.', info: 'Lleva copias para cada miembro de la junta del sindicato.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Plan que se puede leer y cumplir!' : 'A ese plan le falta acuerdo…'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT, art. 82: los trabajadores en conflicto garantizan la permanencia del personal necesario.'], [BP, 'Define puestos y turnos con justificación técnica; la designación de personas se coordina con el sindicato.']],
    mirada: {
      ve: 'Un plan de servicios mínimos bien hecho se defiende solo: dice qué se protege, cuánta gente hace falta y por qué, quién designa a las personas y qué pasa si no hay acuerdo.',
      visual: { tipo: 'flujo', titulo: 'Plan de servicios mínimos', pasos: ['Qué se protege', 'Puestos y número', 'Justificación técnica', 'Designación del sindicato', 'Divergencia si no hay acuerdo'] },
    },
  },
  {
    id: 'e4', t: '13:40', ch: 'presencial', who: 'sindicato', titulo: 'Dieciocho', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Local del sindicato, frente a la planta', show: ['confianza', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>El local del sindicato tiene una foto de la primera huelga de 1988 y un ventilador que gira lento. ${F.has('lista_inflada') ? 'Cutipa tira tu lista sobre la mesa: «¿Cuarenta y seis? ¿Y cuántos van a estar despachando ánodos?».' : 'Cutipa lee el plan en silencio, con el dedo sobre cada puesto.'}</p><p>«Nosotros le damos <mark class="clave">diez por turno. Ni uno más</mark>. Si no, la huelga no se siente.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrar la justificación de Wilber puesto por puesto, aceptar la rotación que pide el sindicato y sostener 18 por turno: ni uno por producción.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 3, personas: 2 }, rel: { sindicato: 1 }, flags: ['minimos_acordados'], cartera: { acuerdo: 'Acordados: 18 por turno, rotación, designa el sindicato' },
          out: 'Cutipa le pide a Wilber que explique la planta de ácido. Wilber habla de los gases con tanta seriedad que nadie lo interrumpe. «Dieciocho», dice Cutipa al final. «Pero si veo un ánodo saliendo, los saco a todos.»',
          pro: { ok: 'Un número técnico, explicado por quien conoce el horno, es difícil de discutir.', risk: 'Te comprometiste a que nadie produzca: hay que cumplirlo el martes.', info: 'Firma el acuerdo con la lista de puestos anexada.' },
          kusi: ['celebra', '¡Acuerdo con argumentos, no con gritos!'] } },
      { id: 'b', label: 'Insistir en 40 por turno: si el sindicato no acepta, la empresa los designa y que la Autoridad decida después.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, confianza: -5 }, rel: { sindicato: -1 }, flags: ['minimos_impuestos'], cartera: { acuerdo: 'Sin acuerdo: la empresa impone 40' },
          out: '«Entonces el martes nos vemos en la garita», dice Cutipa. Silvia, al teléfono, suspira: «Vamos a terminar en divergencia con una lista difícil de defender».',
          pro: { ok: 'Proteges el horno con margen.', risk: 'Imponer un número inflado empuja la discusión a la puerta de la planta, con el horno encendido.' },
          kusi: ['preocupado', 'Más gente no siempre es más seguro…'] } },
      { id: 'c', label: 'Aceptar los 10 por turno: mejor un acuerdo flaco que una pelea a cuatro días de la huelga.',
        res: { q: 'aceptable', fx: { confianza: 3, cumplimiento: -2, calidad: -3 }, rel: { sindicato: 1 }, flags: ['minimos_cortos'], cartera: { acuerdo: 'Acordados 10 por turno' },
          out: 'Cutipa estrecha tu mano. Wilber, de regreso, no te habla en todo el camino. Al llegar dice: «Si el martes falla una bomba, no tengo con quién».',
          pro: { ok: 'Cierras un acuerdo y bajas la tensión.', risk: 'Un número por debajo de lo técnico pone en riesgo a las personas y al horno.' },
          kusi: ['pensando', 'Acuerdo sí… ¿pero seguro?'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT, arts. 82 y 84: si no se garantiza el personal necesario, la huelga puede ser declarada ilegal.'], [BP, 'Negocia los servicios mínimos con argumentos técnicos, no con números redondos.']],
    mirada: {
      ve: 'En los servicios mínimos, los dos lados tienen incentivos para mentir con el número: la empresa para que la huelga no se note, el sindicato para que se note mucho. El argumento técnico, dicho por quien sabe, es lo que corta esa pelea.',
      visual: { tipo: 'rango', titulo: 'Personas por turno', min: 0, max: 50, banda: [16, 20], marcas: [['Sindicato', 10], ['Técnico', 18], ['Borrador inicial', 46]] },
    },
  },
  {
    id: 'e5', t: '15:40', ch: 'llamada', who: 'gerencia', titulo: 'El embarque del 5', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Relaciones Laborales', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Vuelves a la oficina con arena en los zapatos: el viento de la tarde levantó la pampa. Tres llamadas, y la tercera es la que temías.</p><p><mark class="clave">El gerente tiene una idea para el embarque</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Marleny Quispe · Sindicato de mantenimiento', 'Contesta desde el taller', '«Mis dos electricistas por turno están confirmados. Pero quiero por escrito que su trabajo es la subestación, nada más.»'],
      ['Dra. Silvia Medina · Legal', 'Contesta entre audiencias', '«Si hay acuerdo, fírmenlo con la lista de puestos anexa. Si no, la divergencia tiene plazos; no la dejemos para después de la huelga.»'],
      ['Ing. Ricardo Paredes · Gerencia', 'Contesta con el altavoz', '«El embarque del 5 son ocho millones de dólares. Lo que te pido es fácil: que los de servicios mínimos, ya que están adentro, muevan los ánodos al puerto en sus ratos libres. Nadie se va a dar cuenta.»'],
    ],
    prompt: 'El gerente espera tu respuesta. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Que no: el acuerdo con el sindicato es que los servicios mínimos no producen. Le propones pedir al cliente una prórroga del embarque y explicarle a Lima el costo real.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: -1 }, rel: { gerencia: -1 }, flags: ['produccion_frenada'],
          out: '«¿Me estás diciendo que pierda el embarque?» Le dices que le estás diciendo que no pierda la planta. Cuelga. A las seis, Óscar te escribe: «El gerente me pidió el costo de una prórroga. Algo es algo».',
          pro: { ok: 'Cumples el acuerdo que acabas de firmar y proteges a la empresa de un reemplazo encubierto.', risk: 'El gerente está bajo presión real y buscará otra salida el martes.', info: 'Prepara al gerente con alternativas: prórroga, stock en puerto, otro embarque.' },
          kusi: ['animo', 'Firme con lo firmado. ¡Bien!'] } },
      { id: 'b', label: 'Aceptar, pero solo si es «poquito» y los supervisores lo hacen de noche.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -6, confianza: -3 }, rel: { gerencia: 1, sindicato: -1 }, flags: ['produccion_encubierta'],
          out: 'El gerente agradece. El piquete del sindicato estará frente a la puerta del puerto. Desde ahí, un camión con ánodos se ve a un kilómetro.',
          pro: { ok: 'Salvas, tal vez, parte del embarque.', risk: 'Usar a servicios mínimos o a supervisores para hacer el trabajo de los huelguistas es sustitución (D.S. 019-2006-TR, art. 25.9) y rompe el acuerdo.' },
          kusi: ['indignado', '¡Así se rompe un acuerdo en un día!'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.9: la sustitución de trabajadores en huelga es infracción muy grave.']],
    mirada: {
      ve: 'La tentación más común en una huelga no es traer gente de afuera: es estirar a los que ya están adentro. Los servicios mínimos se cuidan con la misma seriedad que el derecho a la huelga, porque uno no existe sin el otro.',
      visual: { tipo: 'balanza', a: { t: 'Mover ánodos «en ratos libres»', items: ['Salvas parte del embarque', 'Rompes el acuerdo', 'Riesgo de sustitución'] }, b: { t: 'Cumplir lo firmado', items: ['Pedir prórroga al cliente', 'Acuerdo intacto', 'Credibilidad en la mesa'] } },
    },
  },
  {
    id: 'e6', t: '17:20', ch: 'documento', who: null, titulo: 'La garita, el martes', banner: 'assets/foto2/caminan.webp', lugar: 'Oficina de Seguridad patrimonial', show: ['calidad', 'personas', 'cumplimiento'],
    body: () => `<p>El jefe de seguridad patrimonial, un exmarino de Mollendo, te pregunta cómo entrarán los de servicios mínimos el martes si hay piquete en la garita. Nadie lo había pensado.</p><p><mark class="clave">Ordena el protocolo de ingreso</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del protocolo de ingreso. Usa las flechas.', boton: 'Entregar el protocolo',
    items: [
      { id: 'lista', t: 'El sindicato entrega la lista de designados por turno el lunes', por: 'Sin lista, nadie sabe quién entra.' },
      { id: 'copia', t: 'Seguridad recibe la lista y una copia queda con el delegado del piquete', por: 'Ambos lados saben quién entra y por qué.' },
      { id: 'ingreso', t: 'Los designados entran con su credencial, por la garita, a la hora del relevo', por: 'Nada de entradas por puertas laterales.' },
      { id: 'relevo', t: 'Relevo en el puesto: el que sale entrega el estado del equipo al que entra', por: 'La seguridad del horno depende del relevo.' },
      { id: 'reporte', t: 'Al final de cada turno, Relaciones Laborales informa al sindicato cuántos entraron y en qué puestos', por: 'La transparencia evita sospechas de producción.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, personas: 2, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: q !== 'riesgosa' ? ['protocolo_garita'] : [],
        cartera: { garita: q === 'buena' ? 'Protocolo listo: lista, copia al piquete, credencial, relevo, reporte' : 'Protocolo con pasos cruzados' },
        out: q === 'buena' ? 'El exmarino lo plastifica y lo pega en la garita. «Así sí. Nadie empuja a nadie.»' : 'El jefe de seguridad mueve dos pasos: «Primero la lista, señora. Sin lista, el martes vamos a tener empujones».',
        pro: { ok: 'Un ingreso ordenado evita que el primer día de huelga empiece con un enfrentamiento.', info: 'Que el delegado del piquete tenga copia de la lista es lo que más baja la tensión.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Martes ordenado desde hoy!' : 'Casi: primero la lista.'],
      };
    },
    mirada: {
      ve: 'Muchos conflictos se agravan por detalles de logística: alguien que entra por una puerta lateral, un relevo que nadie explicó. Pensar cómo se cruza el piquete antes de que exista es parte de la estrategia.',
      visual: { tipo: 'flujo', titulo: 'Ingreso de servicios mínimos', pasos: ['Lista del sindicato', 'Copia al piquete', 'Credencial y garita', 'Relevo', 'Reporte al sindicato'] },
    },
  },
  {
    id: 'e7', t: '18:30', ch: 'whatsapp', who: null, titulo: 'Por escrito', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('minimos_acordados') ? 'Firmaron el acuerdo de servicios mínimos a las cuatro. Falta confirmarle a Cutipa lo que se habló.' : 'No hubo acuerdo pleno. Igual hay que dejar por escrito lo que la empresa propone.'}</p><p>Un mensaje para Cutipa, antes del fin de semana. <mark class="clave">Que no deje dudas para el martes</mark>.</p>`,
    type: 'compose', enviaA: 'sindicato', para: 'Para: Teodoro Cutipa · Sindicato mayoritario', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Lo acordado', ops: [
        { id: 'q1', t: 'Señor Cutipa: le confirmo por escrito el plan de servicios mínimos con la lista de puestos y la justificación técnica.', ok: true, por: 'Lo que se acuerda, se confirma por escrito.' },
        { id: 'q2', t: 'Señor Cutipa: como quedamos, ustedes se encargan.', ok: false, por: 'Vago: el martes cada uno recordará algo distinto.' },
      ] },
      { id: 'limite', t: 'El límite', ops: [
        { id: 'l1', t: 'El personal de servicios mínimos no realizará labores de producción ni despacho.', ok: true, por: 'Es el compromiso que más le importa al sindicato.' },
        { id: 'l2', t: 'El personal podrá apoyar en lo que se necesite.', ok: false, por: 'Abre la puerta a producir.' },
      ] },
      { id: 'lista', t: 'La lista', ops: [
        { id: 'k1', t: 'Quedo atenta a la lista de designados el lunes; seguridad tendrá copia y el delegado del piquete también.', ok: true, por: 'Recuerda el paso que falta.' },
        { id: 'k2', t: 'Si no mandan la lista, la empresa elige.', ok: null, por: 'Una amenaza innecesaria un viernes por la tarde.' },
      ] },
      { id: 'mesa', t: 'La mesa', ops: [
        { id: 'm1', t: 'Y nos vemos el lunes a las 16:00 para seguir con el pliego.', ok: true, por: 'Que los servicios mínimos no cierren la puerta de la negociación.' },
        { id: 'm2', t: 'Ojalá no haga falta usar nada de esto.', ok: null, por: 'Bienintencionado, pero no confirma nada.' },
      ] },
    ],
    res: sel => {
      const malo = sel.limite === 'l2' || sel.que === 'q2';
      const buenas = ['q1', 'l1', 'k1', 'm1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : -1, cumplimiento: malo ? -3 : 4 }, rel: { sindicato: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Cutipa responde con un audio de doce segundos: «Recibido. Y gracias por lo del límite. Eso calma a la gente».' : malo ? 'Cutipa responde con una sola palabra: «¿Apoyar?». La palabra correrá todo el fin de semana.' : 'Cutipa responde con un pulgar.',
        pro: { ok: 'Confirmar por escrito lo acordado evita versiones distintas el martes.', risk: 'Una palabra ambigua en un mensaje de servicios mínimos alimenta la sospecha de producción.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Viernes cerrado con claridad!' : 'Esa palabra va a pesar…'],
      };
    },
    rules: [[BP, 'Todo acuerdo de servicios mínimos se confirma por escrito, con la lista de puestos y el límite de no producir.']],
    mirada: {
      ve: 'Un viernes antes de una huelga, cada palabra se lee buscando trampas. La claridad sobre lo que no se hará es lo que más tranquiliza.',
      visual: { tipo: 'mensaje', titulo: 'Servicios mínimos, por escrito', txt: 'Señor Cutipa: le confirmo por escrito el plan de servicios mínimos con la lista de puestos y la justificación técnica. El personal de servicios mínimos no realizará labores de producción ni despacho. Quedo atenta a la lista de designados el lunes. Nos vemos el lunes a las 16:00 para seguir con el pliego.' },
    },
  },
];
