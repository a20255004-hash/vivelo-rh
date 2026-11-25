// Coordinador/a de Gestión Humana · Capítulo 5 · «Los turnos» · Semana 1, viernes.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - D.S. 007-2002-TR (TUO de la Ley de jornada), art. 8: turnos con horario nocturno «en lo posible» rotativos; jornada
//   nocturna de 10 p. m. a 6 a. m.; mínimo nocturno = RMV vigente + 35 %. https://www.gob.pe/institucion/mtpe/normas-legales/
// - Constitución Política del Perú, art. 25: jornada ordinaria de ocho horas diarias o 48 semanales como máximo.
//   https://www.congreso.gob.pe/constitucion/
// - D.S. 005-2012-TR (Reglamento de la Ley 29783), art. 33 a): el registro de accidentes de trabajo, con su investigación y medidas correctivas, es obligatorio.

export const CAP = {
  n: 5, titulo: 'Los turnos', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/planta.webp',
  lugar: 'Planta de Juliaca · Línea de yogurt',
  inicio: '05:40', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes, 5:40 de la mañana. Menos tres grados. Juliaca todavía está oscura y el vapor sale de los tanques de la planta como si respiraran. En veinte minutos el turno noche le entrega la línea al turno día.', boton: 'Entrar a la línea',
  kusi: 'Hoy no vienes a decidir quién tiene la culpa. Vienes a encontrar qué está roto entre los dos turnos.',
  lead: 'Viste el relevo con tus propios ojos, escuchaste a los dos turnos, encontraste las causas, mediaste sin culpables, dejaste un acta y abriste la conversación sobre la rotación del turno noche.',
  reflexion: '¿Cuántos conflictos entre personas son, en realidad, problemas de cómo está organizado el trabajo?',
  siguiente: { n: 6, titulo: 'Tu asistente', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'turnos', p: 'Conflicto entre turnos · línea de yogurt', j: 'Tú · Teodoro · Lidia', d: 4, e: 'Mediación hoy' },
  { id: 'rotacion', p: 'Rotación del turno noche', j: 'Producción · Gestión Humana', d: 4, e: 'Sin rotar desde 2019' },
  { id: 'renuncia', p: 'Salida de Freddy', j: 'Tú · Mariela', d: 4, e: 'Último día: viernes próximo' },
  { id: 'diagnostico', p: 'Diagnóstico del área', j: 'Tú · Mariela', d: 4, e: 'Hoy a las 5' },
];

export const FUTURO = {
  mediacion_causa: ['Mediaste buscando causas, no culpables.', 'Teodoro y Lidia firmaron el mismo acta.'],
  mediacion_culpa: ['La reunión terminó buscando culpables.', 'El turno noche sigue sintiendo que nadie lo escucha.'],
  acta_turnos: ['Hay un acta con traslape de 20 minutos, checklist de limpieza y fecha de revisión.', 'En dos semanas se verá si funciona.'],
  rotacion_consulta: ['Abriste una consulta para rotar el turno noche de forma voluntaria y gradual.', 'Teodoro no está convencido, pero se siente escuchado.'],
  rotacion_impuesta: ['Anunciaste la rotación obligatoria del turno noche desde diciembre.', 'Teodoro ya habla con los demás.'],
  rotacion_nada: ['El turno noche sigue sin rotar.', 'Ruth seguirá sin poder estudiar.'],
  turno_noche_confia: ['El turno noche sabe que alguien corrigió su pago.', 'Teodoro te saludará distinto.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  linea: { n: 'Línea de yogurt · supervisión', sub: 'Teodoro, Lidia, Ing. Rolando y tú', c: '#1F5E8C' },
  teodoro: { n: 'Teodoro Ccama', sub: 'Supervisor del turno noche', c: '#6B4226' },
};

export const WSP = [
  { chat: 'teodoro', t: '05:30', de: 'Teodoro', txt: 'Buenos días. Ya nos enteramos lo del reintegro. Por fin alguien hizo la cuenta.', si: 'nocturna_corregida' },
  { chat: 'teodoro', t: '05:30', de: 'Teodoro', txt: 'Antes de hablar de limpieza, ¿sabía que nos pagan menos del mínimo nocturno desde octubre? Lo calculó mi hija.', si: 'nocturna_pendiente' },
  { chat: 'nely', t: '08:10', de: 'Nely', txt: 'Las boletas ya están en la carpeta. ¿Las mando por correo a cada uno o las imprimo?' },
  { chat: 'yesenia', t: '11:00', de: 'Yesenia', txt: 'Edwin y el inge ya cambiaron las claves. El inge está escribiendo lo de los ganaderos, dice que le falta tinta 😅', si: 'freddy_aliado' },
  { chat: 'linea', t: '16:20', de: 'Lidia', txt: 'Mañana probamos el traslape. Mis chicas ya saben que la limpieza se firma.', si: 'acta_turnos' },
  { chat: 'teodoro', t: '18:30', de: 'Teodoro', txt: 'Lo de rotar no me convence. Pero gracias por preguntarnos primero.', si: 'rotacion_consulta' },
  { chat: 'teodoro', t: '18:30', de: 'Teodoro', txt: 'Rotar obligatorio. Ya veremos qué dicen todos.', si: 'rotacion_impuesta' },
];

export const CORREOS = [
  { t: '07:10', de: 'Ing. Rolando Apaza · Producción Juliaca', para: 'Gestión Humana', asunto: 'Sobre la reunión de hoy', html: '<p>Les pido que la reunión no se alargue: tenemos pedido grande para supermercados de Arequipa. Para mí el tema es simple: el turno noche se queja de todo.</p><p>R. Apaza</p>' },
  { t: '17:05', de: 'Mariela Quispe', para: 'Coordinación de Gestión Humana', asunto: 'Tu diagnóstico', html: '<p>Leí tu diagnóstico. Lo de los turnos me lo resumiste en una línea: «no es un problema de personas, es de cómo se entrega la línea». Eso no lo había visto nadie. Buen fin de semana.</p>', si: 'mediacion_causa' },
];

export const QUIZ = [
  { q: '¿Qué horario se considera jornada nocturna en el Perú?', ops: ['De 8 p. m. a 4 a. m.', 'De 10 p. m. a 6 a. m.', 'De 11 p. m. a 7 a. m.', 'Cualquier turno después de las 6 p. m.'], ok: 1, por: 'D.S. 007-2002-TR, art. 8.' },
  { q: 'Según el art. 8 del D.S. 007-2002-TR, los turnos con horario nocturno…', ops: ['Están prohibidos', 'Deben ser rotativos en lo posible', 'Deben ser voluntarios', 'Solo para varones'], ok: 1, por: 'La norma pide que, en lo posible, sean rotativos.' },
  { q: 'En una mediación, lo primero es…', ops: ['Decidir quién tiene razón', 'Que cada parte cuente su versión y se sienta escuchada', 'Leer el reglamento interno', 'Pedir disculpas a la gerencia'], ok: 1, por: 'Sin escucha no hay acuerdo posible.' },
  { q: 'Dos turnos se culpan por la limpieza. La causa real era un cambio de meta a mitad del día y el bus que sale a la hora exacta. Esto muestra que…', ops: ['Siempre hay un culpable', 'Muchos conflictos entre personas nacen de cómo está organizado el trabajo', 'El turno noche exagera', 'No hay nada que hacer'], ok: 1, por: 'Buscar causas en el proceso evita etiquetar personas.' },
  { q: 'Un buen acta de mediación tiene…', ops: ['Solo las firmas', 'Acuerdos concretos, responsables, fechas y cuándo se revisa', 'La versión de quien tiene razón', 'Las quejas de cada uno'], ok: 1, por: 'Sin responsable y fecha, un acuerdo es una buena intención.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '05:55', ch: 'documento', who: null, titulo: 'El cuaderno de relevo', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Con casco, mandil y botas blancas prestadas, te paras junto al pasteurizador. Huele a leche caliente y a detergente. En una mesa de acero está el cuaderno de relevo, donde cada turno anota cómo deja la línea.</p><p>Lo hojeas antes de que lleguen los supervisores. <mark class="clave">Los papeles cuentan lo que las personas no dicen.</mark></p>`,
    type: 'flag', prompt: 'Marca lo que muestra un problema en el relevo o en la seguridad.',
    doc: { t: 'Cuaderno de relevo · Línea de yogurt', sub: 'Últimas dos semanas · letra de varios supervisores' },
    lines: [
      { id: 'lim', t: 'Turno día, 9 de los últimos 10 días: «limpieza CIP pendiente, se va el bus».', bad: 'bp', why: 'La limpieza queda para el turno siguiente casi todos los días. No es un descuido aislado: es un patrón.' },
      { id: 'meta', t: 'Turno día: «12:30 Ing. Apaza pide 2,000 unidades más».', bad: 'bp', why: 'La meta cambia a mitad del turno y la limpieza es lo primero que se sacrifica.' },
      { id: 'firma', t: 'Checklist de limpieza: sin firma de quien limpió ni de quien recibió.', bad: 'bp', why: 'Sin firma, nadie puede probar qué se hizo. Cada turno cuenta su versión.' },
      { id: 'quem', t: 'Turno noche: «operario se quemó la mano con soda al limpiar apurado. Se puso crema».', bad: 'ley', why: 'Es un accidente de trabajo y debe registrarse e investigarse. Además, limpiar con apuro es un riesgo de seguridad.' },
      { id: 'temp', t: 'Turno noche: «temperatura de pasteurización OK, 3:10 a. m.».' },
      { id: 'insul', t: 'Turno noche: «el día deja todo cochino como siempre».', duda: 'Es una queja real, pero escrita así solo empeora la relación. Hay que entender qué hay detrás.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Ves el patrón de la limpieza, pero la quemadura se te pasa: quedó como «se puso crema».' : 'Fotografías las páginas. La quemadura con soda de hace cinco días nunca llegó a Gestión Humana ni al comité de seguridad.',
      cartera: { turnos: missLey ? 'Relevo revisado a medias' : 'Patrón de limpieza, metas cambiadas y un accidente sin registrar' },
      pro: { ok: 'Los registros te muestran patrones que ninguna de las partes te va a contar.', risk: 'Un accidente no registrado es una infracción y una señal de que la gente trabaja apurada y con miedo.', info: 'Pasa la quemadura al comité de seguridad hoy mismo.' },
      kusi: missLey ? ['preocupado', 'Esa quemadura no era solo un detalle…'] : ['sorpresa', 'El cuaderno lo dice todo.'],
    }),
    rules: [[LEY, 'Los accidentes de trabajo deben registrarse e investigarse (D.S. 005-2012-TR, art. 33 a).'], [BP, 'La entrega de una línea se firma: quien entrega y quien recibe.']],
    mirada: {
      ve: 'Antes de escuchar versiones, mira los registros. El cuaderno de relevo muestra que el turno día no limpia «por flojera»: no limpia porque le cambian la meta y el bus no espera. Y muestra algo peor: el apuro ya lastimó a alguien.',
      visual: { tipo: 'linea', titulo: 'Un día en la línea de yogurt', hitos: [['06:00', 'Entra el turno día'], ['12:30', 'Cambia la meta'], ['14:00', 'Sale el bus; limpieza pendiente'], ['22:00', 'Entra el noche y encuentra todo sucio']] },
    },
  },
  {
    id: 'e2', t: '06:20', ch: 'presencial', who: null, titulo: 'Los dos supervisores', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Vestuario de la planta', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Teodoro Ccama sale del turno noche con los ojos rojos. Tiene 58 años, es de Lampa y lleva nueve de noche. ${F.has('nocturna_corregida') ? 'Te da la mano con fuerza: ya sabe lo del reintegro.' : 'Te mira con desconfianza: no sabe a qué vienes.'} Lidia Pari entra al turno día: 34 años, ingeniera, de Ilave, con el celular lleno de pedidos.</p><p>Hablas con cada uno por separado. <mark class="clave">Tienes tiempo para dos preguntas.</mark></p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Escucha a los dos lados.',
    opts: [
      { id: 'teo', label: 'A Teodoro: ¿qué pasa cuando encuentran la línea sucia?', info: '«Perdemos la primera hora limpiando. No llegamos a la meta y nos quitan el bono de producción. Y encima el jefe dice que somos flojos. Por eso la carta.»' },
      { id: 'lid', label: 'A Lidia: ¿por qué no se alcanza a limpiar?', info: '«A las 12:30 el Ing. Apaza nos sube la meta. Corremos hasta la 1:55 y a las 2:10 sale el bus. Si mis chicas lo pierden, llegan a sus casas a las 4, y varias tienen guagua.»' },
      { id: 'rota', label: 'A Teodoro: ¿por qué son siempre los mismos de noche?', info: '«Porque paga más y nadie más quiere. Yo ya me acostumbré. Pero hay chicos jóvenes como Ruth que quisieran estudiar y no pueden.»' },
      { id: 'jefe', label: 'A Lidia: ¿el Ing. Apaza sabe lo de la limpieza?', info: '«Sabe. Pero le importa la meta. Dice que «la limpieza la hace el que viene». Así nos peleamos entre nosotros y él queda bien.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('teo') && picks.includes('lid') ? 4 : 2, confianza: 2 },
      out: picks.includes('teo') && picks.includes('lid') ? 'Escuchaste a los dos lados del mismo problema. Ninguno de los dos te mintió.' : 'Te quedas con una parte de la historia. La otra la escucharás en la reunión, con todos mirando.',
      kusi: ['curioso', 'Dos versiones, un mismo nudo.'],
    }),
    mirada: {
      ve: 'Mediar empieza por escuchar por separado. Cada parte cuenta lo que vive, y ninguna ve la historia completa. Tu trabajo es juntar las piezas sin tomar partido.',
      visual: { tipo: 'balanza', a: { t: 'Lo que vive el turno noche', items: ['Pierde la primera hora', 'Pierde el bono', 'Lo llaman flojo'] }, b: { t: 'Lo que vive el turno día', items: ['Meta que cambia a las 12:30', 'Bus que no espera', 'Hijas e hijos pequeños en casa'] } },
    },
  },
  {
    id: 'e3', t: '08:30', ch: 'documento', who: null, titulo: 'Las causas', banner: 'assets/esc/piensa.webp', show: ['calidad', 'personas'],
    body: () => `<p>En la oficina, con un pan de Juliaca y un café, ordenas lo que viste y escuchaste. Hay muchas causas posibles; vas a llevar a la reunión <mark class="clave">las tres que de verdad se pueden cambiar</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres causas que llevas a la reunión.', boton: 'Llevar estas', resumen: 'Llevaste',
    cols: ['Causa', 'Lo que sabes'],
    rules: [[BP, 'Busca causas en el proceso antes que en las personas.']],
    rows: [
      { id: 'meta', cells: ['La meta cambia a mitad del turno día', 'El cuaderno lo registra casi a diario'] },
      { id: 'traslape', cells: ['No hay traslape entre turnos', 'Nadie entrega la línea en persona'] },
      { id: 'firma', cells: ['La limpieza no se firma', 'Cada turno tiene su versión'] },
      { id: 'flojos', cells: ['El turno noche es flojo', 'Lo dice el Ing. Apaza'] },
      { id: 'detergente', cells: ['Falta detergente algunos días', 'Pasó dos veces en el mes'] },
      { id: 'lidia', cells: ['Lidia es muy joven para supervisar', 'Lo comentan algunos del turno noche'] },
    ],
    score: { meta: 3, traslape: 3, firma: 3, flojos: -3, detergente: 1, lidia: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: picks.includes('flojos') || picks.includes('lidia') ? -3 : 1 },
        out: q === 'buena' ? 'Tres causas, cero culpables. Las escribes en un papelógrafo para la reunión.' : picks.includes('flojos') || picks.includes('lidia') ? 'Llevas a la reunión una etiqueta sobre personas. Alguien se va a sentir atacado antes de empezar.' : 'Llevas causas reales, pero no las que más pesan.',
        pro: { ok: 'Causas que se pueden cambiar, no defectos de las personas.', risk: 'Etiquetar a un turno o a una supervisora convierte la mediación en un juicio.', info: 'El detergente es real, pero menor: lo puede resolver Logística sin reunión.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Proceso, no personas!' : 'Ojo con las etiquetas.'],
      };
    },
    mirada: {
      ve: 'Cuando dos equipos se pelean, casi siempre hay algo en el proceso que los enfrenta: una meta que cambia, un relevo que no existe, un registro que nadie firma. Si cambias eso, la relación mejora sola. Si solo pides «que se lleven bien», nada cambia.',
      visual: { tipo: 'matriz', x: 'Facilidad para cambiar', y: 'Peso en el conflicto', cuadrantes: ['Llévalo', 'Llévalo y planifica', 'Resuélvelo aparte', 'Descártalo'], items: [['Meta cambiante', .5, .95], ['Sin traslape', .6, .85], ['Limpieza sin firma', .9, .75], ['Detergente', .9, .3], ['«Flojos»', .1, .05], ['«Muy joven»', .1, .1]] },
    },
  },
  {
    id: 'e4', t: '10:30', ch: 'presencial', who: null, titulo: 'La reunión', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de capacitación de la planta', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>En la sala están Teodoro y dos operarios del turno noche (que vinieron sin dormir), Lidia y dos operarias del día, y el Ing. Rolando Apaza, que mira el reloj. El ambiente se puede cortar con cuchillo.</p><p>Todos te miran. <mark class="clave">¿Cómo empiezas?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecer que vinieran, explicar que no se busca culpables, mostrar el cuaderno de relevo y preguntar: «¿qué tendría que pasar para que la línea se entregue limpia?».',
        res: { q: 'buena', fx: { personas: 5, confianza: 4 }, flags: ['mediacion_causa'], cartera: { turnos: 'Mediación: propuestas de los dos turnos' },
          out: 'Hay un silencio largo. Luego una operaria del día dice: «Si nos avisan de la meta a las 9 y no a las 12:30, limpiamos». Teodoro asiente. El Ing. Apaza deja de mirar el reloj.',
          pro: { ok: 'Pones el problema en el centro, no a las personas.', info: 'Que las propuestas salgan de ellos hace que las cumplan.' },
          kusi: ['celebra', 'Del «ustedes» al «nosotros». ¡Bacán!'] } },
      { id: 'b', label: 'Pedir al Ing. Apaza que explique las reglas de limpieza y que cada turno se comprometa a cumplirlas.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2 }, flags: ['mediacion_culpa'],
          out: 'El Ing. Apaza repite que «la limpieza la hace el que viene» y que «hay que ponerse la camiseta». Teodoro cruza los brazos. Nadie dice nada más.',
          pro: { ok: 'Rápido.', risk: 'Le das la palabra a quien es parte del problema y conviertes la mediación en un sermón.' },
          kusi: ['triste', 'Ese silencio no es acuerdo…'] } },
      { id: 'c', label: 'Pedir a cada turno que diga qué hace mal el otro, para sacar todo afuera.',
        res: { q: 'aceptable', fx: { personas: -1, calidad: 1 },
          out: 'Durante veinte minutos vuelan reproches. Al final, algunas causas aparecen, pero las dos partes salen más heridas de lo que entraron.',
          pro: { ok: 'Sale información.', risk: 'Empezar por lo que hace mal el otro alimenta la pelea que vienes a resolver.' },
          kusi: ['pensando', 'Mucho ruido… ¿y ahora?'] } },
    ],
    rules: [[BP, 'En una mediación, el problema va al centro; las personas, a la misma mesa.']],
    mirada: {
      ve: 'Las primeras palabras de una mediación deciden si la gente viene a defenderse o a resolver. Mostrar los datos del cuaderno, sin acusar, cambia la conversación: ya no se discute quién es flojo, sino qué pasa a las 12:30.',
      visual: { tipo: 'cambio', titulo: 'Cómo cambia la conversación', pares: [['«Ustedes dejan sucio»', '«¿Qué pasa a las 12:30?»'], ['«Son unos flojos»', '«Perdemos la primera hora»'], ['Culpables', 'Acuerdos']] },
    },
  },
  {
    id: 'e5', t: '12:10', ch: 'documento', who: null, titulo: 'El acta de mediación', banner: 'assets/foto/acuerdo.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Antes de que se vayan, escribes el acta en la laptop y la proyectas en la pared. Todos la leen mientras la escribes. <mark class="clave">Si no tiene responsable y fecha, no es un acuerdo.</mark></p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del acta.', boton: 'Imprimir para firmar',
    bloques: [
      { id: 'acu', t: 'Acuerdos', n: 3, ops: [
        { id: 'a1', t: 'Producción avisa cambios de meta antes de las 9:00; después de esa hora, solo si se asegura el tiempo de limpieza.', ok: true },
        { id: 'a2', t: 'Traslape de 20 minutos entre turnos para entregar la línea en persona.', ok: true, por: 'Sin pasar de la jornada máxima: se reorganiza el horario, no se alarga.' },
        { id: 'a3', t: 'Checklist de limpieza firmado por quien entrega y por quien recibe.', ok: true },
        { id: 'a4', t: 'El turno noche deja de quejarse por escrito.', ok: false, por: 'Callar las quejas no resuelve las causas.' },
      ] },
      { id: 'resp', t: 'Responsables', n: 1, ops: [
        { id: 'r1', t: 'Ing. Apaza: metas · Lidia y Teodoro: checklist · Gestión Humana: seguimiento.', ok: true },
        { id: 'r2', t: 'Todos son responsables de todo.', ok: false, por: 'Si todos son responsables, nadie lo es.' },
      ] },
      { id: 'rev', t: 'Seguimiento', n: 2, ops: [
        { id: 'v1', t: 'Revisión del acuerdo en dos semanas, con el cuaderno de relevo.', ok: true },
        { id: 'v2', t: 'La quemadura con soda pasa hoy al comité de seguridad.', ok: true },
        { id: 'v3', t: 'Si alguien incumple, se le sanciona sin más conversación.', ok: false, por: 'Primero se revisa por qué falló el acuerdo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['acta_turnos'] : [], cartera: { turnos: q === 'buena' ? 'Acta firmada: revisión en dos semanas' : 'Acta con huecos' },
        out: q === 'buena' ? 'Firman los seis, y el Ing. Apaza al final. Teodoro dobla su copia en cuatro y la guarda en el bolsillo de la casaca.' : 'Firman, pero el acta deja abiertas las preguntas que los trajeron aquí.',
        pro: { ok: 'Acuerdos concretos, un responsable por cada uno y una fecha para revisar.', risk: 'Un acta sin seguimiento se olvida en una semana.', info: 'El traslape se arma moviendo horarios, no alargando la jornada.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Acta con dientes!' : 'Faltan responsables o fechas.'],
      };
    },
    rules: [[LEY, 'La jornada ordinaria es de ocho horas diarias o 48 semanales como máximo (Constitución, art. 25).'], [LEY, 'Los accidentes de trabajo se registran e investigan (D.S. 005-2012-TR, art. 33 a).']],
    mirada: {
      ve: 'Un acta de mediación no es un trámite: es la memoria del acuerdo. Cuando dentro de dos semanas alguien diga «eso no fue lo que dijimos», el acta será lo que evite volver a empezar.',
      visual: { tipo: 'flujo', titulo: 'Lo que dice el acta', pasos: ['Meta antes de las 9', 'Traslape de 20 minutos', 'Checklist firmado', 'Revisión en dos semanas'] },
    },
  },
  {
    id: 'e6', t: '14:40', ch: 'presencial', who: null, titulo: '¿Rotar el turno noche?', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Comedor de la planta', show: ['personas', 'cumplimiento', 'etica'],
    body: () => `<p>A la salida, Ruth Calla, operaria del turno noche de 22 años, te alcanza en el comedor. «Yo quiero estudiar Enfermería en la tarde, pero siempre estoy de noche. Nadie me pregunta.»</p><p>Teodoro, que escuchó, dice: «Si rotamos, pierdo lo nocturno. <mark class="clave">Yo me quedo de noche.</mark>» La norma pide que los turnos nocturnos sean rotativos «en lo posible».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer a Producción una rotación voluntaria y gradual: quien quiera rotar, rota; quien quiera quedarse, se queda mientras haya equilibrio.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 3 }, flags: ['rotacion_consulta'], cartera: { rotacion: 'Consulta de rotación voluntaria en diciembre' },
          out: 'Ruth sonríe. Teodoro gruñe, pero no se opone: «Mientras a mí no me muevan». El Ing. Apaza pide una semana para armar los horarios.',
          pro: { ok: 'Acercas la práctica a lo que la norma pide, cuidando a quienes quieren quedarse.', info: 'Rotar también reparte el desgaste de trabajar de noche.' },
          kusi: ['feliz', '¡Ruth tal vez estudie el próximo año!'] } },
      { id: 'b', label: 'Anunciar rotación obligatoria para todos desde diciembre: la norma lo pide.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -4 }, flags: ['rotacion_impuesta'], cartera: { rotacion: 'Rotación obligatoria anunciada' },
          out: 'Ruth se alegra. Teodoro y cuatro más se sienten castigados justo cuando les acababan de dar la razón. En el bus ya se habla de «reclamar en grupo».',
          pro: { ok: 'Buscas cumplir la norma.', risk: '«En lo posible» deja espacio para hacerlo bien. Imponerlo sin consulta, el mismo día de la mediación, rompe la confianza recién ganada.' },
          kusi: ['preocupado', 'Mismo objetivo, mal momento.'] } },
      { id: 'c', label: 'Dejarlo como está: Teodoro y los demás se acostumbraron y nadie más quiere la noche.',
        res: { q: 'riesgosa', fx: { personas: -2, cumplimiento: -2 }, flags: ['rotacion_nada'],
          out: 'Teodoro está tranquilo. Ruth vuelve a su casa en el bus del día siguiente, sin saber si alguien la escuchó.',
          pro: { ok: 'Evitas un conflicto nuevo.', risk: 'Hay personas que quieren rotar y no pueden. La norma pide intentarlo.' },
          kusi: ['triste', 'Y Ruth, ¿qué?'] } },
    ],
    rules: [[LEY, 'Los turnos con horario nocturno deben ser, en lo posible, rotativos (D.S. 007-2002-TR, art. 8).']],
    mirada: {
      ve: 'Las normas a veces dejan margen («en lo posible») y ese margen se puede usar bien o mal. Rotar a la fuerza a quien eligió la noche es tan injusto como no rotar nunca a quien quiere salir de ella.',
      visual: { tipo: 'balanza', a: { t: 'Quedarse de noche', items: ['Pago nocturno', 'Costumbre de años', 'Teodoro y cuatro más'] }, b: { t: 'Poder rotar', items: ['Estudiar, cuidar a la familia', 'Menos desgaste', 'Ruth y otros jóvenes'] } },
    },
  },
  {
    id: 'e7', t: '17:40', ch: 'whatsapp', who: null, titulo: 'El resumen para todos', banner: 'assets/foto2/acuerdo-manos.webp', show: ['confianza', 'personas'],
    body: () => `<p>Antes de irte, escribes al grupo de supervisión de la línea. Lo van a leer los dos turnos y el Ing. Apaza. <mark class="clave">Que nadie pueda leerlo como una victoria de un lado.</mark></p>`,
    type: 'compose', enviaA: 'linea', para: 'Para: Línea de yogurt · supervisión', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Apertura', ops: [
        { id: 'g1', t: 'Gracias a los dos turnos por venir hoy, incluso sin dormir.', ok: true, por: 'Reconoce el esfuerzo de los dos lados.' },
        { id: 'g2', t: 'Gracias al turno noche por por fin aclarar las cosas.', ok: false, por: 'Suena a que un turno ganó.' },
      ] },
      { id: 'acu', t: 'Acuerdos', ops: [
        { id: 'a1', t: 'Desde el lunes: meta antes de las 9, 20 minutos de traslape y checklist firmado por quien entrega y quien recibe.', ok: true, por: 'Concreto y con fecha.' },
        { id: 'a2', t: 'Desde ahora cada uno cumple con su parte.', ok: false, por: 'No dice qué cambió.' },
      ] },
      { id: 'seg', t: 'Seguimiento', ops: [
        { id: 's1', t: 'En dos semanas revisamos juntos el cuaderno de relevo. Si algo no funciona, lo cambiamos.', ok: true, por: 'Da permiso para ajustar sin culpas.' },
        { id: 's2', t: 'Quien no cumpla, tendrá que explicarlo.', ok: null, por: 'Es cierto, pero cierra en tono de amenaza.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'a1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, personas: q === 'buena' ? 3 : q === 'riesgosa' ? -2 : 0 },
        flags: q === 'buena' ? ['turno_noche_confia'] : [],
        out: q === 'buena' ? 'Lidia responde con un pulgar. Teodoro escribe «Conforme». El Ing. Apaza, después de una hora: «Ok, meta antes de las 9».' : 'Los mensajes de respuesta son pocos y secos. Cada turno lo leyó a su manera.',
        pro: { ok: 'Un cierre que reconoce a todos y recuerda lo concreto.', risk: 'Un mensaje que suena a «ganamos» reabre la pelea por WhatsApp.', info: 'Revisa el cuaderno de relevo el lunes a primera hora.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Nadie ganó, todos acordaron!' : 'Alguien lo va a leer mal.'],
      };
    },
    mirada: { ve: 'El mensaje después de una mediación es parte de la mediación. Si suena a victoria de un lado, el otro buscará revancha. Si recuerda lo acordado y cómo se revisa, la gente llega el lunes a probarlo.' },
  },
];
