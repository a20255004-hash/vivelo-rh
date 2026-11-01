// Practicante de RR.HH. · Capítulo 8 · «Tu propuesta» · Semana 4, martes.
// Hilo del mes: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias.
// Normas citadas:
// - Ley 29896 y su reglamento (D.S. 023-2021-MIMP): los centros de trabajo donde laboran 20 o más mujeres en edad fértil (15 a 49 años) implementan un lactario.
//   https://cdn.www.gob.pe/uploads/document/file/1900685/2.%20REGLAMENTO%20LEY%20N%20%2029896%20_%20FINAL%2004.05.2021.pdf.pdf
//   https://faolex.fao.org/docs/pdf/per158308.pdf
//   https://prcp.com.pe/wp-content/uploads/2021/07/se-aprueba-el-reglamento-de-la-ley-no-29896-ley-que-establece-la-implementacion-de-lactarios-en-las-instituciones-del-sector-publico-y-del-sector-privado-promoviendo-la-lactancia-materna.pdf
// - D.S. 003-97-TR, art. 18: la renuncia es un derecho del trabajador, con aviso de 30 días (no se puede imponer una permanencia mínima).
//   https://lpderecho.pe/jurisprudencia-articulo-18-tuo-decreto-legislativo-728-renuncia-retiro-voluntario/
// - Ley 29733, de Protección de Datos Personales (anonimizar las razones de salida). Texto en SPIJ: https://spij.minjus.gob.pe/

export const CAP = {
  n: 8, titulo: 'Tu propuesta', dia: 'Semana 4, martes', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Hilandería Andina · Oficina de RR.HH.',
  inicio: '07:30', fin: '20:00', cierreHora: '19:15',
  apertura: 'Martes de la última semana. Carla te pide algo que nunca le pidió a una practicante: una propuesta para la Gerencia.', boton: 'Empezar la propuesta',
  kusi: 'Hoy tu voz llega a la Gerencia. Con datos, con la gente y con los pies en la tierra. ¡Dale!',
  lead: 'Llamaste a quienes se fueron, descartaste ideas que la ley no permite, armaste una propuesta medible, negociaste con Producción y la presentaste en cinco minutos.',
  reflexion: '¿Qué parte de tu propuesta nació de algo que viviste este mes?',
  siguiente: { n: 9, titulo: 'Fin de mes', dia: 'Semana 4, viernes' },
};

export const CARTERA = [
  { id: 'propuesta', p: 'Propuesta de retención', j: 'Carla · Gerencia', d: 0, e: 'Presentación a las 17:00' },
  { id: 'salidas', p: 'Llamadas de salida', j: 'Carla · RR.HH.', d: 0, e: '4 renuncias en el primer mes' },
  { id: 'plan', p: 'Plan de acción de la auditoría', j: 'Carla · Gerencia', d: 0, e: 'Se envía el viernes' },
  { id: 'rosa', p: 'El caso de Rosa', j: 'Carla · Don Teófilo', d: 0, e: 'Primera semana de día' },
  { id: 'evaluacion', p: 'Tu evaluación de prácticas', j: 'Carla · RR.HH.', d: 0, e: 'Viernes' },
];

export const FUTURO = {
  salidas_anonimas: ['Agrupaste las razones de salida sin exponer nombres.', 'Tu propuesta tiene datos confiables. Capítulo 9.'],
  salidas_expuestas: ['Le contaste a Producción quién se fue y por qué, con nombres.', 'Capítulo 9.'],
  propuesta_legal: ['Descartaste penalidades y compromisos de permanencia que la ley no permite.', 'Capítulo 9.'],
  propuesta_ilegal: ['Tu propuesta incluyó condiciones que la ley no permite.', 'Legal la devolverá. Capítulo 9.'],
  propuesta_solida: ['Tu propuesta tiene diagnóstico, acciones concretas y cómo medirlas.', 'Gerencia aprobará un piloto. Capítulo 9.'],
  propuesta_floja: ['Tu propuesta quedó sin medición clara.', 'Capítulo 9.'],
  piloto_madrinas: ['Don Teófilo aceptó un piloto de madrinas de línea con horas protegidas.', 'Capítulo 9.'],
  madrinas_sin_horas: ['Las madrinas no tendrán horas protegidas.', 'Capítulo 9.'],
  justina_madrina: ['La señora Justina aceptó ser madrina de las nuevas.', 'Capítulo 9.'],
  pitch_claro: ['Presentaste en cinco minutos con datos y un pedido concreto.', 'Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria · tejido', who: 'rosa' },
  justina: { n: 'Sra. Justina Mamani', sub: 'Supervisora de urdido · turno día', c: '#9C6B30' },
};

export const WSP = [
  { chat: 'carla', t: '07:35', de: 'Carla', txt: 'Hoy a las 17:00 presentas tu propuesta a la gerente de planta. Cinco minutos. Tú puedes 💪' },
  { chat: 'rosa', t: '07:50', de: 'Rosa', txt: 'Señorita, primera semana de día. Ayer recogí a Joaquín del jardín yo misma 🥹', si: 'rosa_se_queda' },
  { chat: 'diego', t: '12:15', de: 'Diego', txt: 'Si necesitas el costo de las horas de las madrinas, te lo saco del sistema. Sin nombres, ya aprendí 😅' },
  { chat: 'teofilo', t: '14:10', de: 'Don Teófilo', txt: 'Lo de las madrinas: dos horas a la semana. Ni una más. Y quiero ver los números en un mes.', si: 'piloto_madrinas' },
  { chat: 'justina', t: '16:00', de: 'Justina', txt: 'Ya, hijita. Seré madrina. A mí nadie me enseñó cuando entré, por eso.', si: 'justina_madrina' },
  { chat: 'grupo', t: '18:30', de: 'Carla', txt: 'La gerente dijo «piloto aprobado». No le había dicho eso a nadie este año 🦙👏', si: 'pitch_claro' },
];

export const CORREOS = [
  { t: '07:40', de: 'Carla Zegarra', para: 'Practicante de RR.HH.', asunto: 'Tu propuesta', html: '<p>De las 40 nuevas, cuatro ya renunciaron. En la campaña pasada se fueron ocho en el primer mes. Necesito una idea concreta para que no se vayan. Barata, medible y que Producción acepte.</p><p>Carla</p>' },
  { t: '10:15', de: 'Seguridad y Salud en el Trabajo', para: 'RR.HH.', asunto: 'Sala del segundo piso', html: '<p>Recordamos que la sala rotulada «Lactario» del segundo piso se está usando como depósito de cajas de etiquetas. Favor de coordinar su liberación.</p>' },
];

export const QUIZ = [
  { q: '¿Qué centros de trabajo deben implementar un lactario?', ops: ['Solo los del Estado', 'Los que tienen 20 o más mujeres en edad fértil', 'Los que tienen más de 500 trabajadores', 'Ninguno: es voluntario'], ok: 1, por: 'La Ley 29896 y su reglamento lo exigen donde laboran 20 o más mujeres en edad fértil.' },
  { q: 'Una propuesta vieja dice «descontar el uniforme a quien renuncie antes de tres meses». ¿Qué opinas?', ops: ['Es buena idea para que no se vayan', 'No corresponde: castiga un derecho y no ataca la causa', 'Hay que descontar también la credencial', 'Solo si lo firman al ingresar'], ok: 1, por: 'La renuncia es un derecho. Las penalidades no retienen: espantan.' },
  { q: 'Llamas a quienes renunciaron. ¿Cómo usas lo que te dijeron?', ops: ['Con nombres, para que Producción sepa quién se quejó', 'Agrupado y sin nombres, por causas', 'Solo lo que apoya tu idea', 'No lo usas'], ok: 1, por: 'Agrupar sin nombres protege a las personas y muestra patrones reales.' },
  { q: '¿Qué hace medible una propuesta de retención?', ops: ['Que suene bonita', 'Un indicador, una línea de base y una fecha para revisarla', 'Que sea larga', 'Que la apruebe la Gerencia'], ok: 1, por: 'Sin indicador ni fecha, nadie sabrá si funcionó.' },
  { q: 'Don Teófilo dice que las madrinas «le quitan horas de producción». ¿Qué propones?', ops: ['Que Gerencia lo obligue', 'Un piloto pequeño, con horas acotadas y resultados en un mes', 'Olvidar la idea', 'Hacerlo sin decirle'], ok: 1, por: 'Un piloto acotado y medido reduce el riesgo y convence con datos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '07:50', ch: 'llamada', who: null, titulo: 'Las que se fueron', banner: 'assets/foto/llamada.webp', show: ['personas', 'calidad', 'etica'],
    body: () => `<p>Antes de proponer nada, quieres entender por qué se fueron cuatro de las 40 nuevas. Llamas desde el anexo con la puerta cerrada y una libreta.</p><p>Empiezas siempre igual: «No te llamo para convencerte de volver. <mark class="clave">Quiero aprender qué podemos hacer mejor</mark>».</p>`,
    type: 'calls',
    calls: [['Nely Cutipa · se fue al día 9', 'Contesta desde un mercado', 'Mi primera boleta vino con descuentos que nadie me explicó. Pensé que me estaban robando. Ahora sé que era la AFP… pero ya me había ido.'], ['Graciela Mendoza · se fue al día 12', 'Contesta, con un bebé llorando', 'Salía del turno a las once de la noche y la última combi a Cerro Colorado ya no pasaba. Caminaba sola. Me dio miedo.'], ['Pilar Ramos · se fue al día 15', 'Contesta, seca', 'En la línea nadie te enseña. Te gritan «¡más rápido!» y ya. Yo venía de una pollería, no sabía remallar.'], ['Sonia Quispe · se fue al día 20', 'No contesta']],
    prompt: 'Tres te contaron por qué se fueron. ¿Qué haces con lo que escuchaste?',
    choices: [
      { id: 'a', label: 'Agruparlo por causas, sin nombres: primera boleta sin explicar, transporte de noche y aprendizaje en la línea.',
        res: { q: 'buena', fx: { calidad: 5, etica: 4, personas: 2 }, flags: ['salidas_anonimas'], cartera: { salidas: '3 causas, sin nombres' },
          out: 'Tu libreta queda con tres columnas. Ninguna dice «Graciela» o «Pilar». Cruzas con las tarjetas de la inducción y las entrevistas de la auditoría: las mismas tres causas aparecen otra vez.',
          pro: { ok: 'Agrupar sin nombres protege a quien habló y deja ver patrones.', info: 'Cruzar varias fuentes (llamadas, tarjetas, auditoría) hace que tu diagnóstico sea difícil de discutir.' },
          kusi: ['celebra', '¡Tres causas claras y nadie expuesto!'] } },
      { id: 'b', label: 'Pasarle a Don Teófilo la lista con nombres y lo que dijo cada una, para que sepa qué pasa en su línea.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -3 }, rel: { teofilo: -1 }, flags: ['salidas_expuestas'],
          out: 'Don Teófilo lee lo de Pilar y se pone rojo: «¿Quién le gritó? Esa chica no aguantaba nada». La conversación se vuelve sobre Pilar, no sobre cómo se enseña en la línea.',
          pro: { ok: 'Quieres que Producción sepa lo que pasa.', risk: 'Con nombres, el debate se vuelve personal y quien habló queda expuesta.' },
          kusi: ['preocupado', 'Ahora se discute a Pilar, no el problema…'] } },
      { id: 'c', label: 'Quedarte con lo de la boleta, que es lo que tú ya pensabas proponer.',
        res: { q: 'aceptable', fx: { calidad: 1 }, cartera: { salidas: '1 causa elegida' },
          out: 'Tu propuesta tendrá un buen punto sobre la primera boleta. Lo del transporte y el aprendizaje en la línea se queda en la libreta.',
          pro: { ok: 'Encuentras una causa real.', risk: 'Escuchar solo lo que confirma tu idea es un sesgo: dejas fuera dos causas.' },
          kusi: ['pensando', '¿Y las otras dos razones?'] } },
    ],
    rules: [[LEY, 'Las razones de salida son datos personales: se usan agrupadas y sin nombres (Ley 29733).'], [BP, 'Escucha todas las causas, no solo las que confirman tu idea.']],
    mirada: {
      ve: 'Quienes se van son las que mejor saben qué falla, y casi nunca se les pregunta. Una llamada de salida, hecha con respeto y sin intentar retener, entrega el diagnóstico que ninguna encuesta da. Lo profesional es escuchar todo y presentarlo sin exponer a nadie.',
      visual: { tipo: 'embudo', titulo: 'Las 40 nuevas, en su primer mes', niveles: [['Ingresaron', 40], ['Siguen en la planta', 36], ['Llamadas de salida', 4], ['Contaron su razón', 3]] },
    },
  },
  {
    id: 'h2', t: '09:00', ch: 'presencial', who: 'carla', titulo: 'Lo que espera Carla', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de RR.HH.', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Carla te invita un café pasado de la cafetera de la oficina.${F.has('hallazgo_asumido') ? ' «Lo del viernes me convenció. Por eso te toca a ti.»' : ''}</p><p>«Esta no es una tarea de practicante. Es una propuesta de verdad. <mark class="clave">Pregúntame lo que necesites antes de empezar</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Carla.',
    opts: [
      { id: 'fallo', label: '¿Se intentó algo parecido antes?', info: '«En 2023 hicimos un “programa de padrinos”. Murió en un mes: nadie les dio tiempo a los padrinos y Producción lo vio como pérdida de horas. Si propones algo así, resuelve eso primero.»' },
      { id: 'gerente', label: '¿Qué le importa a la gerente de planta?', info: '«Dos cosas: el pedido a tiempo y el costo. Si le dices cuánto cuesta reemplazar a una operaria que se va, te escucha.»' },
      { id: 'presupuesto', label: '¿Hay presupuesto?', info: '«Casi nada. Piensa en cosas que se puedan hacer con lo que tenemos: gente, tiempo y espacios.»' },
      { id: 'formato', label: '¿Cómo quieres que la presente?', info: '«Una hoja y cinco minutos. La gerente no lee diapositivas, lee números.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('fallo') ? 3 : 1, confianza: 1, tiempo: -1 }, rel: { carla: picks.includes('fallo') || picks.includes('gerente') ? 1 : 0 },
      out: 'Carla se va a una reunión. Te quedas con una hoja en blanco y una idea que empieza a tomar forma.',
      kusi: ['curioso', 'Saber qué falló antes ahorra repetirlo.'],
    }),
    mirada: {
      ve: 'Antes de proponer, conviene saber qué se intentó, qué falló y qué valora quien decide. Una buena propuesta no nace en el vacío: se apoya en la historia de la organización y responde a las preocupaciones de quien la va a aprobar.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Carla', txt: 'El programa de padrinos de 2023 murió porque nadie les dio tiempo. La gerente escucha números. Una hoja y cinco minutos.' },
    },
  },
  {
    id: 'h3', t: '10:00', ch: 'documento', who: null, titulo: 'La propuesta vieja', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>En la carpeta compartida encuentras «Propuesta_retencion_FINAL_v3.docx», de la practicante anterior. Nunca se presentó.</p><p>Tiene ideas útiles y otras que <mark class="clave">no podrías llevar a ninguna gerencia</mark>.</p>`,
    type: 'flag', prompt: 'Marca las ideas que la ley no permite o que deberían descartarse.',
    doc: { t: 'Propuesta para reducir la rotación de operarias nuevas', sub: 'Borrador · practicante anterior · nunca presentado' },
    lines: [
      { id: 'compromiso', t: 'Hacer firmar al ingresar un compromiso de permanencia mínima de seis meses.', bad: LEY, why: 'La renuncia es un derecho del trabajador, con un aviso de 30 días. Un compromiso así no se puede imponer.' },
      { id: 'uniforme', t: 'Descontar el uniforme y la credencial a quien renuncie antes de tres meses.', bad: LEY, why: 'Es una penalidad por ejercer un derecho. Además, no ataca ninguna causa de salida.' },
      { id: 'retener', t: 'Retener el último pago hasta que devuelvan la credencial.', bad: LEY, why: 'Los pagos al cese no se condicionan así. La credencial se pide, no se canjea por el sueldo.' },
      { id: 'madrina', t: 'Asignar a cada nueva una operaria antigua que la acompañe el primer mes.' },
      { id: 'boleta', t: 'Explicar la primera boleta de pago, línea por línea, a cada nueva.' },
      { id: 'lista', t: 'Publicar en el periódico mural la lista de quienes renunciaron, «para que se sepa».', bad: BP, why: 'Expone a personas que ya no trabajan aquí y no resuelve nada.' },
      { id: 'lactario', t: 'Liberar el lactario del segundo piso, hoy usado como depósito.', duda: 'Es una obligación legal para la planta: aquí trabajan muchas más de 20 mujeres en edad fértil.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Copias varias ideas a tu propuesta. Entre ellas, una que Legal devolverá apenas la vea.' : 'Rescatas la madrina, la primera boleta y el lactario. Las penalidades y la lista del mural las tachas con una línea roja.',
      flags: [missLey ? 'propuesta_ilegal' : 'propuesta_legal'],
      pro: { ok: 'Reutilizar lo bueno de otros ahorra tiempo; filtrar lo ilegal evita vergüenzas.', risk: 'Las penalidades parecen retener, pero solo hacen que la gente se vaya con rabia.', info: 'Revisa si el lactario figura en algún acta del comité de SST.' },
      kusi: missLey ? ['preocupado', 'Alguna idea de esas no pasa por Legal…'] : ['celebra', '¡Lo bueno se queda, lo ilegal se va!'],
    }),
    rules: [[LEY, 'La renuncia es un derecho del trabajador, con aviso de 30 días (D.S. 003-97-TR, art. 18).'], [LEY, 'Donde laboran 20 o más mujeres en edad fértil debe haber un lactario (Ley 29896).']],
    mirada: {
      ve: 'Muchas propuestas de retención confunden retener con atrapar: compromisos, penalidades, descuentos. Pero nadie se queda por miedo a perder un uniforme. Las personas se quedan cuando entienden su pago, aprenden su trabajo y pueden compatibilizarlo con su vida.',
      visual: { tipo: 'balanza', a: { t: 'Atrapar', items: ['Compromiso de seis meses', 'Descuento del uniforme', 'Retener el pago'] }, b: { t: 'Acompañar', items: ['Madrina de línea', 'Primera boleta explicada', 'Lactario disponible'] } },
      normas: [{ ley: 'Ley 29896 y D.S. 023-2021-MIMP', dice: 'Los centros de trabajo donde laboran 20 o más mujeres en edad fértil, de 15 a 49 años, implementan un lactario.', practica: 'Un lactario usado como depósito no cumple la ley ni ayuda a las madres que vuelven de su licencia.' }],
    },
  },
  {
    id: 'h4', t: '11:20', ch: 'documento', who: null, titulo: 'Tu propuesta en una hoja', banner: 'assets/esc/idea.webp', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>El comedor ya huele a almuerzo y tú sigues frente a la hoja. Carla dijo: barata, medible y que Producción acepte.</p><p>Tienes todo lo del mes: tus errores, Rosa, la auditoría, las llamadas. <mark class="clave">Ahora hay que elegir</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu propuesta.', boton: 'Guardar la propuesta',
    bloques: [
      { id: 'diag', t: 'Diagnóstico', n: 2, ops: [
        { id: 'd1', t: '4 de 40 se fueron en el primer mes. Tres causas: primera boleta sin explicar, transporte de noche y aprendizaje en la línea.', ok: true, por: 'Datos del mes, agrupados y sin nombres.' },
        { id: 'd2', t: 'Las mismas causas aparecen en las tarjetas de la inducción y en las entrevistas de la auditoría.', ok: true, por: 'Tres fuentes que coinciden.' },
        { id: 'd3', t: 'Las nuevas de ahora tienen menos compromiso que las de antes.', ok: false, por: 'Es una opinión, no un dato. Y culpa a las personas.' },
      ] },
      { id: 'acciones', t: 'Acciones', n: 3, ops: [
        { id: 'a1', t: 'Madrinas de línea: una antigua por cada tres nuevas, con dos horas protegidas por semana.', ok: true, por: 'Resuelve lo que mató al programa de 2023: el tiempo.' },
        { id: 'a2', t: 'Primera boleta explicada en persona, en 10 minutos, el día de pago.', ok: true, por: 'Ataca la causa de Nely, y cuesta casi nada.' },
        { id: 'a3', t: 'Regla de cambio de turno y coordinación con la movilidad para la salida de noche.', ok: true, por: 'Ataca el caso de Rosa y el de Graciela.' },
        { id: 'a4', t: 'Un bono de S/ 500 a quien cumpla tres meses.', ok: false, por: 'No hay presupuesto y no ataca ninguna de las tres causas.' },
      ] },
      { id: 'mide', t: 'Cómo se mide', n: 2, ops: [
        { id: 'm1', t: 'Indicador: porcentaje de nuevas que siguen al día 30. Línea de base: 36 de 40.', ok: true, por: 'Un número, una base y un plazo.' },
        { id: 'm2', t: 'Revisión con Producción y RR.HH. al terminar el grupo 3.', ok: true, por: 'Una fecha para decidir si sigue o no.' },
        { id: 'm3', t: 'Preguntar a la gerente si le gustó.', ok: false, por: 'El gusto no es un indicador.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: [q === 'buena' ? 'propuesta_solida' : 'propuesta_floja'], cartera: { propuesta: q === 'buena' ? 'Una hoja: diagnóstico, 3 acciones, 1 indicador' : 'Propuesta sin medición clara' },
        out: q === 'buena' ? 'Tu propuesta cabe en una hoja. Carla la lee de pie, en la puerta: «Esto se entiende en un minuto. Ahora falta Don Teófilo».' : 'Tu propuesta tiene buenas ideas, pero cuesta ver cómo se sabrá si funcionan.',
        pro: { ok: 'Diagnóstico con datos, acciones que atacan cada causa y un indicador con fecha.', risk: 'Una acción que no responde a ninguna causa es un gasto, no una mejora.', info: 'Calcula cuántas horas suman las madrinas: es lo primero que preguntará Producción.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tu propuesta tiene pies y cabeza!' : '¿Cómo sabremos si funcionó?'],
      };
    },
    rules: [[BP, 'Cada acción debe responder a una causa del diagnóstico.'], [BP, 'Una propuesta sin indicador ni fecha no se puede evaluar.']],
    mirada: {
      ve: 'Una buena propuesta conecta tres cosas: lo que se sabe, lo que se hará y cómo se sabrá si funcionó. Las mejores ideas de este mes no salieron de un libro: salieron de Rosa, de Faustina, de las tarjetas y de los errores. Ese es el valor de haber estado cerca de la gente.',
      visual: { tipo: 'flujo', titulo: 'Tu propuesta', pasos: ['3 causas de salida', 'Madrinas con horas', 'Primera boleta explicada', 'Turnos y movilidad', 'Indicador al día 30', 'Revisión con el grupo 3'] },
    },
  },
  {
    id: 'h5', t: '13:30', ch: 'presencial', who: 'teofilo', titulo: '«¿Y quién produce?»', banner: 'assets/foto/taller.webp', lugar: 'Línea de tejido', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => `<p>Don Teófilo lee tu hoja con el ceño fruncido, apoyado en una rectilínea.${F.has('teofilo_aliado') ? ' Desde lo de Rosa y Edith, te escucha sin cruzar los brazos.' : F.has('teofilo_bloqueo') ? ' Todavía no olvida lo del turno de Rosa.' : ''}</p><p>«Dos horas por madrina, por semana. ¿Y quién produce esas horas, señorita? <mark class="clave">El pedido sale en diez días</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un piloto pequeño: tres madrinas, solo en el grupo 3, y comparar en un mes cuántas nuevas siguen y cuánto producen.',
        res: { q: 'buena', fx: { personas: 4, confianza: 4, calidad: 2 }, rel: { teofilo: 1 }, flags: ['piloto_madrinas'], cartera: { propuesta: 'Piloto acordado con Producción' },
          out: 'Don Teófilo hace la cuenta en voz alta: «Seis horas a la semana… contra reemplazar a cuatro que se van». Se rasca la barba. «Ya. Piloto. Pero yo elijo a las madrinas con usted, no usted sola.»',
          pro: { ok: 'Reduces el riesgo para Producción y conviertes la discusión en un experimento.', risk: 'Si el piloto se mide mal, se pierde la oportunidad.', info: 'Acepta que elija con él: así el piloto también es suyo.' },
          kusi: ['celebra', '¡Don Teófilo dijo «piloto»!'] } },
      { id: 'b', label: 'Decirle que la gerente lo va a aprobar igual, así que mejor que colabore.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3 }, rel: { teofilo: -1 }, flags: ['madrinas_sin_horas'],
          out: '«Que lo apruebe. Pero horas no hay», dice. Si se aprueba, las madrinas tendrán que acompañar a las nuevas sin tiempo, como en 2023.',
          pro: { ok: 'Confías en tu propuesta.', risk: 'Imponer a quien tiene que ejecutarla repite el error del programa que murió.' },
          kusi: ['preocupado', 'Eso fue lo que mató al programa de 2023…'] } },
      { id: 'c', label: 'Quitar las horas protegidas: que las madrinas acompañen «cuando puedan».',
        res: { q: 'aceptable', fx: { personas: 1, calidad: -3 }, flags: ['madrinas_sin_horas'],
          out: 'Don Teófilo acepta enseguida. Tu propuesta pasa, pero sin lo que la hacía distinta del programa de 2023.',
          pro: { ok: 'Evitas el conflicto.', risk: 'Sin tiempo protegido, «cuando puedan» suele ser nunca.' },
          kusi: ['pensando', 'Pasó… ¿pero sigue siendo tu propuesta?'] } },
    ],
    rules: [[BP, 'Ante la resistencia de quien ejecuta, propón un piloto pequeño, acotado y medido.']],
    mirada: {
      ve: 'Las propuestas de RR.HH. fracasan cuando se imponen a quienes tienen que hacerlas funcionar. Don Teófilo no se opone a las madrinas: se opone a perder horas sin saber si sirve. Un piloto medido le da una forma de decir que sí sin arriesgar el pedido.',
      visual: { tipo: 'balanza', a: { t: 'Lo que teme Producción', items: ['Seis horas menos por semana', 'El pedido sale en diez días'] }, b: { t: 'El piloto', items: ['Solo tres madrinas', 'Solo el grupo 3', 'Resultados en un mes', 'Él elige a las madrinas'] } },
    },
  },
  {
    id: 'h6', t: '15:00', ch: 'whatsapp', who: null, titulo: 'Pedirle a Justina', banner: 'assets/foto2/mesa-mujeres.webp', show: ['personas', 'confianza'],
    body: () => `<p>La primera madrina que se te ocurre es la señora Justina: 22 años en la planta, enseñó a remallar a media línea de acabados y conoce a todas por su nombre.</p><p>Le escribes. <mark class="clave">No es una orden: es un pedido</mark>.</p>`,
    type: 'compose', enviaA: 'justina', para: 'Para: Sra. Justina Mamani · Supervisora de urdido', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'porque', t: 'Por qué ella', ops: [
        { id: 'p1', t: 'Señora Justina, usted enseñó a remallar a media planta. Por eso pensé en usted primero.', ok: true, por: 'Reconoces lo que ya hace y por qué es valiosa.' },
        { id: 'p2', t: 'Señora Justina, necesito una madrina y usted siempre está disponible.', ok: false, por: 'Suena a que la eliges porque sí, no por lo que sabe.' },
      ] },
      { id: 'que', t: 'Qué le pides', ops: [
        { id: 'q1', t: 'Sería acompañar a tres nuevas del grupo 3, dos horas por semana dentro de su turno, durante un mes.', ok: true, por: 'Le dices exactamente cuánto tiempo y cuándo.' },
        { id: 'q2', t: 'Sería ayudar a las nuevas en lo que necesiten.', ok: false, por: 'Sin límites claros, suena a trabajo extra infinito.' },
      ] },
      { id: 'libre', t: 'Cómo cierras', ops: [
        { id: 'l1', t: 'Si no puede o no quiere, no pasa nada. Me encantaría saber qué opina.', ok: true, por: 'Le dejas la libertad de decir que no.' },
        { id: 'l2', t: 'Don Teófilo ya está de acuerdo, así que cuento con usted.', ok: false, por: 'Presionarla con su jefe le quita la posibilidad de decidir.' },
      ] },
    ],
    res: sel => {
      const buenas = ['p1', 'q1', 'l1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['justina_madrina'],
        out: q === 'buena' ? 'Justina responde con un audio largo. Te cuenta que cuando entró, en 2004, nadie le enseñó nada y lloraba en el baño. «Ya, hijita. Seré madrina.»' : q === 'aceptable' ? 'Justina responde: «Ya, pero dime bien cuántas horas, que no me sobra el tiempo».' : 'Justina responde: «¿Y si no quiero?». Tienes que llamarla para explicarle mejor.',
        pro: { ok: 'Un pedido claro, con tiempo acotado y libertad de decir que no, se acepta con ganas.', risk: 'Un pedido vago o con presión del jefe se acepta a regañadientes, y se nota.', info: 'Pregúntale qué necesitaría para hacerlo bien: quizá un formato sencillo para anotar avances.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Justina dijo que sí. ¡Qué divino!' : 'El cómo se pide importa…'],
      };
    },
    rules: [[BP, 'Pide con claridad: por qué a esa persona, cuánto tiempo y con libertad de decir que no.']],
    mirada: {
      ve: 'Las veteranas como Justina sostienen la cultura de una planta sin que nadie se lo reconozca. Pedirles ser madrinas no es cargarles más trabajo: es reconocer lo que ya hacen, darle tiempo y nombre. Y respetar que puedan decir que no.',
      visual: { tipo: 'mensaje', titulo: 'Un pedido que se puede aceptar', txt: 'Señora Justina, usted enseñó a remallar a media planta; por eso pensé en usted. Sería acompañar a tres nuevas, dos horas por semana dentro de su turno, durante un mes. Si no puede o no quiere, no pasa nada.' },
    },
  },
  {
    id: 'h7', t: '17:00', ch: 'presencial', who: null, titulo: 'Cinco minutos con la gerente', banner: 'assets/3d/scenes/corporativo.webp', lugar: 'Oficina de la Gerencia de Planta', show: ['confianza', 'calidad', 'tiempo'],
    body: () => `<p>La gerente de planta, la ingeniera Patricia Núñez, te recibe con el reloj a la vista y un informe de producción abierto. Carla se sienta a tu lado, sin hablar.</p><p>«Cinco minutos, señorita.» Te sudan las manos. <mark class="clave">El orden de lo que digas importa</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena tu presentación de cinco minutos. Usa las flechas.', boton: 'Presentar en este orden',
    items: [
      { id: 'dato', t: 'El dato: 4 de 40 se fueron en el primer mes', por: 'Empiezas con el problema en un número.' },
      { id: 'causas', t: 'Las tres causas, de tres fuentes distintas', por: 'Demuestras que no es una opinión.' },
      { id: 'acciones', t: 'Las tres acciones, una por causa', por: 'Cada acción responde a algo concreto.' },
      { id: 'costo', t: 'El costo: seis horas semanales de madrinas', por: 'Lo que la gerente va a preguntar.' },
      { id: 'mide', t: 'Cómo se mide: nuevas que siguen al día 30', por: 'Así sabrá si funcionó.' },
      { id: 'pide', t: 'El pedido: aprobar el piloto con el grupo 3', por: 'Terminas con una decisión concreta.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['pitch_claro'] : [], cartera: { propuesta: q === 'buena' ? 'Piloto aprobado' : 'En evaluación' },
        out: q === 'buena' ? 'Terminas en cuatro minutos. La ingeniera Núñez mira a Carla y luego a ti: «Piloto aprobado. Quiero el resultado en mi escritorio en un mes. ¿Cuánto te queda de prácticas?».' : 'La ingeniera Núñez te interrumpe dos veces para preguntar el costo y qué le estás pidiendo. «Mándemelo por escrito», dice.',
        pro: { ok: 'Problema, causa, solución, costo, medición y pedido: el orden que facilita decidir.', risk: 'Si el pedido no queda claro, la reunión termina sin decisión.', info: 'Lleva la hoja impresa: la gerente querrá quedársela.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Aprobado! Tus manos ya pueden dejar de sudar.' : 'Faltó llegar más rápido al pedido.'],
      };
    },
    rules: [[BP, 'Presenta a quien decide en este orden: problema, causa, solución, costo, medición y pedido.']],
    mirada: {
      ve: 'Una propuesta excelente puede perderse en una mala presentación. Quien decide tiene poco tiempo y necesita saber qué problema hay, por qué, qué se propone, cuánto cuesta, cómo se medirá y qué se le pide. Decirlo en ese orden es respeto por su tiempo.',
      visual: { tipo: 'flujo', titulo: 'Tus cinco minutos', pasos: ['El dato', 'Las causas', 'Las acciones', 'El costo', 'La medición', 'El pedido'] },
    },
  },
  {
    id: 'h8', t: '18:40', ch: 'presencial', who: 'rosa', titulo: 'A la salida', banner: 'assets/foto2/caminan.webp', lugar: 'Puerta de la planta', show: ['personas'],
    body: (n, F) => `<p>Sales de la Gerencia con las piernas flojas. En la puerta, Rosa espera la combi con su casaca del turno de día.</p>${F.has('rosa_se_queda') ? '<p>«Señorita, Joaquín ya no se queda solo. Y la Edith dice que de noche gana más. Las dos contentas.»</p>' : '<p>«Señorita, sigo en la noche… pero ya me dijeron lo de la regla de turnos. Voy a pedirlo por escrito.»</p>'}<p>Te pregunta: <mark class="clave">«¿Y a usted cómo le fue?»</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Contarle que presentaste una propuesta y que parte de la idea salió de lo que ella vivió.',
        res: { q: null, fx: { personas: 3 }, rel: { rosa: 1 }, out: 'Rosa abre mucho los ojos. «¿De lo mío?» Se ríe bajito, tapándose la boca. «Entonces sí sirvió hablar.» La combi llega y se despide con la mano.', kusi: ['feliz', 'Rosa supo que su voz contó.'] } },
      { id: 'b', label: 'Decirle que bien, que fue un día largo.',
        res: { q: null, fx: { tiempo: 1 }, out: 'Rosa asiente y se sube a la combi. Te quedas en el paradero viendo cómo se enciende el letrero de la planta.', kusi: ['animo', 'A veces basta con un «bien».'] } },
    ],
    mirada: { ve: 'Las personas que comparten su historia con RR.HH. rara vez saben qué pasó después. Contarles que su experiencia sirvió para cambiar algo cierra el círculo y hace que la próxima vez otras se animen a hablar.' },
  },
];
