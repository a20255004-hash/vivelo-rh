// Analista de Relaciones Laborales · Capítulo 7 · «La inspección» · Semana 2, martes.
// Hilo de las dos semanas: llega SUNAFIL por la denuncia del sindicato, el mismo día de la sesión de la mesa
// y del vencimiento del plazo de descargo de Marcos.
// Normas citadas:
// - Ley 28806, Ley General de Inspección del Trabajo, art. 5: facultades de los inspectores (ingresar a los centros de
//   trabajo, exigir la presencia del empleador, sus representantes y los trabajadores, requerir documentos y requerir
//   que se adopten medidas en un plazo determinado); principio de confidencialidad de la denuncia.
//   https://lpderecho.pe/facultades-inspector-laboral-sunafil/
//   https://lpderecho.pe/ley-28806-ley-general-de-inspeccion-del-trabajo-actualizada/
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=47
// - Reglamento de la Ley General de Inspección del Trabajo (D.S. 019-2006-TR), art. 6: inspectores acreditados ejercen
//   esas facultades. https://vlex.com.pe/vid/32946409
// - D.S. 007-2002-TR (sobretiempo) y D.S. 004-2006-TR (registro de control de asistencia), cap. 6.
// - TUO del D. Leg. 728 (D.S. 003-97-TR), art. 32: la decisión de despido se comunica por escrito (cap. 3).
// - TUO de la LRCT (D.S. 010-2003-TR), art. 54: buena fe en la negociación (cap. 4).
// La obstrucción de la labor inspectiva se menciona como infracción, sin citar su calificación.

export const CAP = {
  n: 7, titulo: 'La inspección', dia: 'Semana 2, martes', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Conservas del Pacífico · Puerta 1, planta y sala de reuniones',
  inicio: '07:45', fin: '19:30', cierreHora: '19:20',
  apertura: 'Martes. A las 8:05, en la puerta 1, una mujer con chaleco y credencial de SUNAFIL le muestra una orden de inspección al vigilante. A las 10:00 hay mesa con el sindicato. Y hoy vence el plazo de Marcos.', boton: 'Ir a la puerta 1',
  kusi: 'Una inspección no es una guerra: es la autoridad viendo lo que hay. ¡Orden y verdad!',
  lead: 'Recibiste a la inspectora como corresponde, entregaste la información sin esconderla, dejaste que los trabajadores hablaran libres, llevaste la deuda a la mesa con honestidad y corregiste una carta que negaba lo evidente.',
  reflexion: '¿Qué te dio más miedo hoy: lo que podía encontrar la inspectora o lo que podías tener que decir tú?',
  siguiente: { n: 8, titulo: 'La regularización', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'inspeccion', p: 'Inspección de SUNAFIL · orden por denuncia', j: 'Inspectora Rocío Alarcón', d: 0, e: 'Hoy, 08:05' },
  { id: 'documentos', p: 'Documentos requeridos', j: 'Milagros · Valeria', d: 0, e: 'Por entregar' },
  { id: 'entrevistas', p: 'Entrevistas a trabajadores', j: 'Inspectora', d: 0, e: 'En la mañana' },
  { id: 'mesa', p: 'Sesión de trato directo', j: 'Arturo · Lucho', d: 0, e: '10:00' },
  { id: 'marcos', p: 'Comunicación final a Marcos', j: 'Relaciones Laborales', d: 0, e: 'Su plazo vence hoy' },
  { id: 'carta', p: 'Carta de la empresa a SUNAFIL', j: 'Gerencia · Valeria', d: 0, e: 'Borrador de Lima' },
];

export const FUTURO = {
  protocolo_ok: ['Recibiste a la inspectora verificando su credencial y sin hacerla esperar.', 'La inspectora lo anotó en el acta. Capítulo 10.'],
  docs_entregados: ['Entregaste el reloj original y el cuadro de horas corregido.', 'La inspectora dará un plazo razonable para pagar. Capítulo 8.'],
  docs_minimos: ['Entregaste solo lo que se pidió, sin el cuadro de horas.', 'La inspectora hizo su propio cálculo. Capítulo 8.'],
  sistema_caido: ['Dijiste que el sistema del reloj estaba caído.', 'Milagros no lo sostuvo y la inspectora lo anotó. Capítulos 8 y 10.'],
  entrevistas_libres: ['Los trabajadores hablaron con la inspectora en privado y sin supervisores.', 'Nadie podrá decir que la empresa los presionó. Capítulo 10.'],
  entrevistas_vigiladas: ['Hubo supervisores o listas armadas en las entrevistas.', 'La inspectora lo dejó por escrito. Capítulo 10.'],
  deuda_en_acta: ['El acta de la sesión reconoce las horas adeudadas y fija el jueves para el plan de pago.', 'Lucho llegará al jueves con otra cara. Capítulo 9.'],
  deuda_fuera_mesa: ['Dijiste que las horas eran tema de la inspección, no de la mesa.', 'El sindicato lo volverá a poner el jueves. Capítulo 9.'],
  deuda_condicionada: ['Condicionaste el pago de las horas a la firma del convenio.', 'Valeria tendrá que deshacerlo. Capítulo 8.'],
  carta_sunafil_corregida: ['La carta a SUNAFIL reconoce los hechos y muestra lo que se está corrigiendo.', 'La comparecencia del viernes empieza mejor. Capítulo 10.'],
  carta_sunafil_negacion: ['La carta a SUNAFIL negó el sobretiempo.', 'El reloj la contradice. Capítulo 10.'],
  marcos_comunicado: ['Le comunicaste a Marcos la decisión por escrito y en privado.', 'Su caso queda cerrado con dignidad. Capítulo 10.'],
  requerimiento_firmado: ['Firmaste la recepción del requerimiento de la inspectora, con tus observaciones.', 'Mañana empieza el plan de pago con plazo. Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  milagros: { n: 'Milagros Chero', sub: 'Asistente de RR.HH. · asistencia y planillas', c: '#2F6B3F' },
  marcos: { n: 'Marcos Huamán', sub: 'Operario · línea 2', c: '#5B4636' },
};

export const WSP = [
  { chat: 'grupo', t: '07:50', de: 'Arturo', txt: 'Llegué. Si es SUNAFIL, tú la recibes y me avisas. Yo no puedo faltar a la mesa a las 10.' },
  { chat: 'grupo', t: '08:12', de: 'Valeria', txt: 'Salgo de Trujillo ya. Llego a las 11. Nadie firma nada sin leerlo, pero tampoco hacemos esperar a la inspectora.' },
  { chat: 'gladys', t: '09:30', de: 'Gladys', txt: 'La inspectora está en la línea 2 preguntando por los turnos de la caballa. Renzo está blanco.' },
  { chat: 'milagros', t: '10:05', de: 'Milagros', txt: 'Le entregué el reporte del reloj tal cual, con cargo. No pienso decir que el sistema se cayó, señorita. Perdón.', si: 'sistema_caido' },
  { chat: 'milagros', t: '10:05', de: 'Milagros', txt: 'Le entregué el reporte del reloj tal cual, con cargo. Me preguntó si alguien me pidió cambiarlo. Le dije la verdad.', si: 'registros_ajustados' },
  { chat: 'lucho', t: '13:20', de: 'Lucho', txt: 'Lo de hoy en el acta lo vamos a cuidar. El jueves queremos ver ese plan.', si: 'deuda_en_acta' },
  { chat: 'lucho', t: '13:20', de: 'Lucho', txt: 'Le dije a la inspectora lo que usted me ofreció ayer por teléfono. Palabra por palabra.', si: 'denuncia_canje' },
  { chat: 'marcos', t: '17:10', de: 'Marcos', txt: 'Gracias por entregármela usted misma. Mañana vuelvo a mi turno.', si: 'marcos_comunicado' },
  { chat: 'arturo', t: '19:05', de: 'Arturo', txt: 'Mañana a las 8, con Patricia y Valeria: el plan de pago. Hoy no te quedes hasta tarde.' },
];

export const CORREOS = [
  { t: '08:30', de: 'Inspectora Rocío Alarcón · SUNAFIL Áncash', para: 'Conservas del Pacífico S.A.C.', asunto: 'Requerimiento de información', html: '<p>En el marco de la orden de inspección en curso, se requiere exhibir: registro de control de asistencia de la línea 2 del periodo de la campaña, planillas y boletas de pago del mismo periodo, contratos de trabajo, contrato con la empresa de servicios y el rol de turnos.</p>' },
  { t: '12:10', de: 'Estudio Rivera & Asociados · Lima', para: 'Gerencia General; Relaciones Laborales', asunto: 'Borrador de carta a SUNAFIL', html: '<p>Adjuntamos el borrador de la carta de la empresa a la Autoridad Inspectiva, a pedido de la Gerencia. Sugerimos firmarla hoy.</p>' },
];

export const QUIZ = [
  { q: 'Llega una inspectora de SUNAFIL sin aviso. Lo correcto es…', ops: ['Pedirle que vuelva otro día', 'Verificar su credencial y la orden, avisar a los responsables y atenderla sin hacerla esperar', 'Dejarla en la puerta hasta que llegue el gerente', 'Pedirle que avise por correo'], ok: 1, por: 'La Ley 28806 faculta a los inspectores a ingresar a los centros de trabajo; dificultar su labor es una infracción.' },
  { q: 'Durante la inspección, los trabajadores entrevistados…', ops: ['Deben estar acompañados por su supervisor', 'Deben poder hablar con la inspectora en privado, sin presiones', 'Los elige la empresa', 'No pueden ser de la contratista'], ok: 1, por: 'La inspectora puede interrogar a los trabajadores; cualquier presencia o lista que los condicione debilita a la empresa.' },
  { q: 'Si la inspectora pide el registro de asistencia y la empresa sabe que hay horas sin pagar…', ops: ['Dice que el sistema está caído', 'Lo entrega tal cual y explica qué está corrigiendo', 'Lo entrega modificado', 'Pide una prórroga de un mes'], ok: 1, por: 'Ocultar o alterar información agrava la situación. Mostrar lo que se está corrigiendo cambia la conversación.' },
  { q: 'Las facultades del inspector incluyen…', ops: ['Solo revisar documentos en Lima', 'Exigir la presencia del empleador y de los trabajadores, requerir documentos y ordenar medidas en un plazo', 'Negociar el convenio colectivo', 'Despedir a los responsables'], ok: 1, por: 'El art. 5 de la Ley 28806 describe esas facultades, entre ellas requerir al sujeto inspeccionado que adopte medidas en un plazo determinado.' },
  { q: 'En una carta a SUNAFIL, decir que «la denuncia es una medida de presión del sindicato»…', ops: ['Fortalece la defensa', 'No responde a los hechos y se lee como hostilidad hacia quien ejerció un derecho', 'Es obligatorio', 'Anula la inspección'], ok: 1, por: 'La inspección mira los hechos; atacar al denunciante no los cambia y puede leerse en contra de la empresa.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '08:05', ch: 'presencial', who: null, titulo: 'Chaleco en la puerta 1', banner: 'assets/foto2/caminan.webp', lugar: 'Puerta 1 de la planta', show: ['cumplimiento', 'confianza', 'tiempo'],
    body: (n, F) => `<p>La inspectora Rocío Alarcón, unos cuarenta años, de Huaraz, espera con una carpeta bajo el brazo y el chaleco de SUNAFIL. El vigilante te mira como pidiendo permiso para respirar. ${F.has('vigilancia_llamada') ? 'Es el mismo vigilante que el jueves fue a despejar el pasillo del sindicato.' : 'Detrás, el olor a harina de pescado de todas las mañanas.'}</p><p>El doctor está preparando la mesa y Valeria viene en la carretera. <mark class="clave">Los primeros quince minutos dicen mucho de una empresa</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena lo que haces en los primeros minutos. Usa las flechas.', boton: 'Hacer pasar a la inspectora',
    items: [
      { id: 'cred', t: 'Saludarla y verificar su credencial y la orden de inspección', por: 'Es la forma de saber quién es y qué viene a ver.' },
      { id: 'aviso', t: 'Avisar al Dr. Benavides y a Valeria, sin hacerla esperar en la puerta', por: 'Los responsables deben saberlo, pero la inspección no se detiene por eso.' },
      { id: 'acomp', t: 'Acompañarla adonde pida ir: la línea, la oficina o el reloj', por: 'Ella decide qué ver primero.' },
      { id: 'docs', t: 'Entregar lo que pide, con una lista y cargo de lo entregado', por: 'Así queda claro qué se mostró y cuándo.' },
      { id: 'acta', t: 'Leer el acta de la visita antes de firmarla y dejar tus observaciones si las tienes', por: 'Firmar es dar constancia de lo actuado, no aceptar todo lo que dice.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['protocolo_ok'] : [],
        cartera: { inspeccion: q === 'buena' ? 'En curso desde 08:09, sin esperas' : 'En curso, con un comienzo desordenado' },
        out: q === 'buena' ? 'La inspectora anota la hora de ingreso: 08:09. «Gracias por no hacerme esperar», dice, seca. «Empecemos por la línea 2.»' : 'La inspectora espera doce minutos en la garita mientras alguien busca al gerente. Lo anota con letra pequeña.',
        pro: { ok: 'Recibir bien a la inspección es la primera señal de que la empresa no tiene nada que esconder.', risk: 'Hacerla esperar o impedirle el paso puede considerarse obstrucción.', info: 'Lleva tu propia libreta: anota qué ve, qué pide y a quién entrevista.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Puertas abiertas!' : 'Esos minutos de espera pesan.'],
      };
    },
    rules: [[LEY, 'Ley 28806, art. 5: los inspectores pueden ingresar a los centros de trabajo, exigir la presencia del empleador y de los trabajadores, y requerir documentos.']],
    mirada: {
      ve: 'Una inspección empieza en la puerta. La empresa que verifica, avisa y acompaña sin demora deja claro que coopera; la que hace esperar, empieza perdiendo.',
      visual: { tipo: 'flujo', titulo: 'Los primeros minutos', pasos: ['Credencial y orden', 'Avisar', 'Acompañar', 'Entregar con cargo', 'Leer y firmar el acta'], aqui: 0 },
      normas: [{ ley: 'Ley 28806, Ley General de Inspección del Trabajo, art. 5', dice: 'Los inspectores pueden ingresar a los centros de trabajo, exigir la presencia del empleador, sus representantes y los trabajadores, requerir documentos y ordenar que se adopten medidas en un plazo determinado.', practica: 'La inspectora decide qué ver y a quién preguntar; tu trabajo es facilitarlo.' }],
    },
  },
  {
    id: 'm2', t: '08:50', ch: 'presencial', who: null, titulo: '«Que se demore el reloj»', banner: 'assets/foto2/tension.webp', lugar: 'Pasillo de la oficina de gerencia', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>La inspectora pidió el registro de asistencia de la campaña. El ingeniero Olaechea te intercepta en el pasillo, en voz baja: «Dile que el reporte lo saca Sistemas y demora tres días. Así llegamos con el pago hecho».</p><p>${F.has('carpeta_completa') ? 'Tienes la carpeta lista desde ayer, con el cuadro corregido.' : F.has('carpeta_minima') ? 'En tu carpeta están las planillas; el cuadro de horas quedó aparte.' : 'No preparaste nada especial.'} <mark class="clave">La inspectora espera en la sala de al lado</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Entregar hoy el reporte original del reloj y, con él, el cuadro de horas corregido, explicando que la empresa ya identificó la deuda y está preparando el pago.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: 2 }, flags: ['docs_entregados'], cartera: { documentos: 'Reloj original + cuadro corregido, con cargo' },
          out: 'La inspectora hojea el cuadro en silencio y levanta la vista: «¿Ustedes mismos lo calcularon?». Le dices que sí. «Eso lo voy a tener en cuenta.» El gerente no te habla en toda la mañana.',
          pro: { ok: 'Entregas lo pedido, sin demoras inventadas, y muestras que la empresa ya está corrigiendo.', risk: 'El gerente siente que no lo protegiste.', info: 'Que la propia empresa haya detectado la deuda suele cambiar el tono de la inspección.' },
          kusi: ['celebra', '¡La verdad, con cargo y todo!'] } },
      { id: 'b', label: 'Entregar hoy exactamente lo que pidió, con cargo, y no ofrecer el cuadro interno: se coopera sin adelantar cálculos que todavía no aprobó la gerencia.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, etica: 0 }, flags: ['docs_minimos'], cartera: { documentos: 'Lo requerido, con cargo; sin cuadro' },
          out: 'La inspectora recibe los documentos. Con el reloj y las boletas en la mano, empieza a hacer su propio cálculo en una libreta cuadriculada.',
          pro: { ok: 'Cumples el requerimiento sin demoras.', risk: 'Si la autoridad hace el cálculo sola, la empresa pierde la oportunidad de mostrar que ya lo había detectado.' },
          kusi: ['pensando', 'Cumpliste… lo justo.'] } },
      { id: 'c', label: 'Hacerle caso al gerente: decir que el reporte del reloj lo genera Sistemas y que estará listo en tres días.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6 }, flags: ['sistema_caido'], cartera: { documentos: 'Reloj «en demora»' },
          out: 'La inspectora asiente y pide hablar con quien maneja el reloj. Milagros entra, te mira y dice: «El reporte sale en dos minutos, inspectora». Lo imprime delante de todos.',
          pro: { ok: 'Ganas tiempo para pagar.', risk: 'Dar información falsa a la autoridad o dificultar su labor es una infracción, y además pone a tus compañeras en una situación imposible.' },
          kusi: ['indignado', '¡Milagros no iba a mentir por nadie!'] } },
    ],
    rules: [[LEY, 'Ley 28806: el inspector puede requerir la exhibición de documentos; negarse o dificultar la inspección es una infracción.'], [LEY, 'D.S. 004-2006-TR: el registro de control de asistencia debe estar a disposición.']],
    mirada: {
      ve: 'Ante una inspección, la pregunta no es cuánto mostrar, sino cómo mostrarlo. Esconder casi nunca funciona; mostrar junto con lo que ya se está corrigiendo, casi siempre ayuda.',
      visual: { tipo: 'balanza', a: { t: 'Demorar o esconder', items: ['Ganas tres días', 'Pierdes credibilidad', 'Riesgo de obstrucción'] }, b: { t: 'Mostrar y explicar', items: ['La deuda ya identificada', 'El plan en marcha', 'Una conversación distinta'] } },
    },
  },
  {
    id: 'm3', t: '09:40', ch: 'documento', who: 'gladys', titulo: 'Las entrevistas', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Línea 2 y sala de capacitación', show: ['etica', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>La inspectora quiere entrevistar a trabajadores de la línea 2, ${F.has('yenny_escuchada') ? 'incluidos los de la contratista, como Yenny.' : 'propios y de la contratista.'} Gladys se ofrece: «Yo te armo una lista de los más tranquilos y me quedo para ayudar con los nombres».</p><p>Tienes cinco minutos para organizarlo. <mark class="clave">Elige las dos condiciones que pones</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos condiciones para las entrevistas.', boton: 'Organizar las entrevistas', resumen: 'Pusiste como condición',
    cols: ['Condición', 'Qué provoca'],
    rows: [
      { id: 'sala', cells: ['Una sala cerrada, sin supervisores ni jefes cerca', 'Que la gente hable sin miedo'] },
      { id: 'elige', cells: ['Que la inspectora elija a quién entrevistar', 'Que no parezca una selección de la empresa'] },
      { id: 'cafe', cells: ['Agua y café en la sala', 'Comodidad'] },
      { id: 'lista', cells: ['La lista de «los más tranquilos» de Gladys', 'Respuestas previsibles'] },
      { id: 'gladys', cells: ['Gladys presente «para ayudar con los nombres»', 'Control de lo que se dice'] },
      { id: 'contratista', cells: ['Que el supervisor de la contratista acompañe a su personal', 'Que la contratista sepa quién habló'] },
    ],
    score: { sala: 3, elige: 3, cafe: 1, lista: -4, gladys: -4, contratista: -3 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { etica: q === 'buena' ? 5 : q === 'riesgosa' ? -5 : 1, personas: q === 'buena' ? 3 : -1 }, rel: { gladys: picks.includes('gladys') || picks.includes('lista') ? 1 : 0 },
        flags: q === 'riesgosa' ? ['entrevistas_vigiladas'] : ['entrevistas_libres'],
        cartera: { entrevistas: q === 'riesgosa' ? 'Con jefes presentes o lista armada' : 'En privado, a elección de la inspectora' },
        out: q === 'riesgosa' ? 'La inspectora mira la lista y a Gladys en la puerta. «Prefiero elegir yo, y a solas», dice, y lo anota.' : 'La inspectora elige a seis personas al azar del rol. Una de ellas sale con los ojos rojos, pero tranquila. Nadie te pregunta qué dijo, y tú tampoco.',
        pro: { ok: 'Entrevistas libres protegen a los trabajadores y a la empresa: lo que digan valdrá más que cualquier lista.', risk: 'Una lista armada o un jefe en la puerta pueden leerse como presión sobre los testigos.', info: 'Lo que digan los trabajadores no se investiga después: no preguntes quién dijo qué.' },
        kusi: [q === 'riesgosa' ? 'preocupado' : 'feliz', q === 'riesgosa' ? 'La inspectora lo vio todo…' : '¡Voces libres!'],
      };
    },
    rules: [[LEY, 'Ley 28806, art. 5: el inspector puede interrogar a los trabajadores; el principio de confidencialidad protege a quienes denuncian o declaran.'], [BP, 'Nunca preguntes después qué dijo cada trabajador en la entrevista.']],
    mirada: {
      ve: 'Las entrevistas son el corazón de muchas inspecciones. La empresa que deja hablar libre a su gente se arriesga a escuchar verdades, pero gana algo más valioso: que nadie pueda decir que las tapó.',
      visual: { tipo: 'matriz', x: 'Cuánto controla la empresa', y: 'Cuánto vale lo que se dice', cuadrantes: ['Vale y es libre', 'Vale poco', 'Libre pero incómodo', 'No sirve'], items: [['Sala cerrada', .1, .9], ['Elige la inspectora', .05, .85], ['Café', .3, .5], ['Lista de Gladys', .9, .15], ['Gladys presente', .95, .1], ['Supervisor de la contratista', .85, .2]] },
    },
  },
  {
    id: 'm4', t: '11:40', ch: 'llamada', who: 'lucho', titulo: 'Entre la mesa y la inspección', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de reuniones y pasillo', show: ['confianza', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Corres entre la sala de capacitación y la sala de la mesa. Patricia ya entregó los estados financieros al sindicato. ${F.has('pago_separado') ? 'El doctor anunció que la empresa trae un plan para pagar las horas.' : F.has('pago_silencioso') ? 'Nadie de la empresa ha mencionado las horas.' : 'La gerencia todavía no decide cómo pagar las horas.'}</p><p>En el pasillo, tres llamadas. Cuando entres a la sala, <mark class="clave">Lucho te va a pedir algo para el acta de hoy</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Milagros Chero · asistencia y planillas', 'Contesta en voz baja', '«La inspectora pidió también las boletas de los nueve de la contratista. Nosotros no las tenemos. Ya llamó a la service.»'],
      ['Valeria Castro · abogada', 'Contesta desde el estacionamiento', '«Ya llegué. Si en la mesa piden que se reconozcan las horas, que se reconozca lo que es cierto, con fecha para el plan. Ni más ni menos.»'],
      ['Lucho Paredes · desde la sala', 'Te llama aunque está a diez metros', '«Señorita, entre. Queremos que el acta de hoy diga que la empresa debe las horas de la caballa. Si no, no firmamos nada.»'],
    ],
    prompt: 'Entras a la sala. ¿Qué propones para el acta?',
    choices: [
      { id: 'a', label: 'Que el acta diga que la empresa identificó sobretiempo no pagado en la línea 2 durante la campaña y que el jueves presentará en la mesa el plan de pago, con fechas.',
        res: { q: 'buena', fx: { confianza: 6, etica: 3, cumplimiento: 3 }, rel: { lucho: 1, arturo: 1 }, flags: ['deuda_en_acta'], cartera: { mesa: 'Acta: deuda reconocida; plan de pago el jueves' },
          out: 'Lucho lee la frase dos veces, en voz alta, para doña Teodora. «Identificó… presentará… con fechas.» Firma. Doña Teodora te aprieta la mano al salir: «Por fin alguien dice las cosas».',
          pro: { ok: 'Reconoces un hecho cierto y te comprometes a algo que puedes cumplir.', risk: 'El jueves el plan tiene que estar listo, aprobado y con fechas.', info: 'Reconocer la deuda en la mesa no reemplaza pagarla: la confirma.' },
          kusi: ['celebra', '¡Una verdad firmada por las dos partes!'] } },
      { id: 'b', label: 'Explicar que las horas son materia de la inspección en curso y que la mesa no es el lugar para tratarlas.',
        res: { q: 'aceptable', fx: { confianza: -3, cumplimiento: 1 }, rel: { lucho: -1 }, flags: ['deuda_fuera_mesa'], cartera: { mesa: 'Acta sin mención a las horas' },
          out: '«O sea que para la inspectora sí hay deuda y para nosotros no», dice Lucho. El acta se firma con una línea: «El sindicato deja constancia de su reclamo por las horas de la campaña».',
          pro: { ok: 'Es cierto que hay una inspección en curso.', risk: 'Negarte a reconocer en la mesa lo que ya reconociste ante la autoridad parece doble discurso.' },
          kusi: ['pensando', 'Técnicamente cierto… y muy frío.'] } },
      { id: 'c', label: 'Aceptar que se reconozca la deuda, pero dejar escrito que el pago se hará cuando se firme el convenio.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, rel: { lucho: -1 }, flags: ['deuda_condicionada'], cartera: { mesa: 'Acta: pago de horas atado a la firma' },
          out: 'Lucho golpea la mesa: «¡Eso es chantaje!». Valeria, que acaba de entrar, pide un cuarto intermedio y te mira como nunca te había mirado.',
          pro: { ok: 'Buscas usar el pago para cerrar la negociación.', risk: 'Una deuda laboral no puede condicionarse a la firma de un convenio: es usar un derecho como ficha de cambio.' },
          kusi: ['indignado', '¡Las horas no son moneda de cambio!'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT, art. 54: negociar de buena fe y abstenerse de acciones lesivas a la contraria.'], [BP, 'Lo que reconoces ante la autoridad, no lo niegues en la mesa.']],
    mirada: {
      ve: 'Cuando hay inspección y negociación a la vez, la coherencia es lo que más protege. Decir lo mismo en la mesa que ante la autoridad, con fechas que se puedan cumplir, desarma la desconfianza.',
      visual: { tipo: 'cambio', titulo: 'Qué dice el acta', pares: [['«No es tema de la mesa»', '«La empresa identificó la deuda»'], ['«Se pagará al firmar»', '«El jueves, el plan con fechas»']] },
    },
  },
  {
    id: 'm5', t: '14:15', ch: 'documento', who: 'valeria', titulo: 'La carta de Lima', banner: 'assets/esc/piensa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['etica', 'cumplimiento', 'calidad'],
    body: () => `<p>Almuerzo rápido: un arroz chaufa del comedor, con Valeria al lado leyendo en su laptop. El gerente pidió a un estudio de Lima una carta para entregar a la inspectora hoy mismo.</p><p>Valeria te la pasa: «Tú conoces los hechos mejor que nadie. <mark class="clave">Dime qué no puede salir así</mark>».</p>`,
    type: 'flag', prompt: 'Marca lo que la carta no debería decir.',
    doc: { t: 'Carta a la Autoridad Inspectiva', sub: 'Borrador · Estudio Rivera & Asociados · para firma del gerente general' },
    lines: [
      { id: 'saludo', t: 'Nos dirigimos a usted en relación con la orden de inspección en curso en nuestras instalaciones de Chimbote.' },
      { id: 'niega', t: 'La empresa niega categóricamente la existencia de trabajo en sobretiempo no remunerado.', bad: LEY, why: 'El reloj muestra jornadas largas que no figuran pagadas. Negarlo ante la autoridad contradice la prueba y la propia información entregada.' },
      { id: 'hojas', t: 'Los trabajadores firmaron declaraciones de sobretiempo voluntario, lo que acredita la voluntariedad.', bad: BP, why: 'Hojas firmadas en blanco no acreditan la voluntariedad de cada jornada; mencionarlas expone una mala práctica.' },
      { id: 'service', t: 'El personal de la empresa de servicios no es responsabilidad de nuestra empresa.', bad: BP, why: 'Les paga su empleador, pero trabajaron en tu planta y bajo tus turnos: la empresa debe verificar que se les pague.' },
      { id: 'presion', t: 'La denuncia es una medida de presión del sindicato en el marco de la negociación colectiva.', bad: LEY, why: 'Atacar a quien denunció no responde a los hechos y puede leerse como hostilidad contra el ejercicio de un derecho (D.S. 010-2003-TR).' },
      { id: 'reloj', t: 'Adjuntamos el reporte del registro de control de asistencia de la línea 2.' },
      { id: 'calculo', t: 'La empresa ha iniciado el cálculo del sobretiempo para su pago con la sobretasa correspondiente.' },
      { id: 'contacto', t: 'Designamos como contacto al área de Relaciones Laborales.', duda: 'Correcto: un contacto claro facilita el seguimiento.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { etica: missLey ? -4 : 5, cumplimiento: missLey ? -4 : 4, calidad: q === 'buena' ? 3 : 0 }, rel: { valeria: q === 'buena' ? 1 : 0 },
        flags: missLey ? ['carta_sunafil_negacion'] : ['carta_sunafil_corregida'],
        cartera: { carta: missLey ? 'Firmada tal como vino de Lima' : 'Reescrita: hechos, reloj y plan de pago' },
        out: missLey ? 'El gerente firma la carta de Lima. La inspectora la recibe, la lee y la pone encima del reporte del reloj, que dice exactamente lo contrario.' : 'Valeria reescribe la carta con tus marcas. El gerente lee la versión nueva: «¿Reconocemos?». Valeria responde: «Reconocemos lo que la inspectora ya tiene en la mano». Firma.',
        pro: { ok: 'Una carta a la autoridad debe ser coherente con los documentos entregados: hechos, lo que se está corrigiendo y un contacto.', risk: 'Negar lo que el reloj prueba o atacar al sindicato convierte una deuda en un problema de credibilidad.', info: 'Lo que firma la empresa hoy se leerá en la comparecencia.' },
        kusi: missLey ? ['triste', 'Esa carta se contradice sola…'] : ['celebra', '¡Coherencia, palabra por palabra!'],
      };
    },
    rules: [[LEY, 'D.S. 004-2006-TR y D.S. 007-2002-TR: el registro de asistencia y el sobretiempo trabajado son la base de lo que se debe.'], [BP, 'Ante la autoridad, la empresa no niega lo que sus propios documentos prueban.']],
    mirada: {
      ve: 'Las cartas «duras» redactadas lejos de la planta suelen negar lo que la planta ya sabe. Tu valor está en conocer los hechos: eso permite escribir algo que la empresa pueda sostener mañana.',
      visual: { tipo: 'cambio', titulo: 'De la negación a los hechos', pares: [['«Negamos categóricamente»', '«Adjuntamos el reloj»'], ['«Firmaron declaraciones»', '«Iniciamos el cálculo para pagar»'], ['«Medida de presión del sindicato»', '(no va)']] },
    },
  },
  {
    id: 'm6', t: '16:40', ch: 'presencial', who: null, titulo: 'Vence el plazo de Marcos', banner: 'assets/foto/entrevista.webp', lugar: 'Oficina de Relaciones Laborales', show: ['personas', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Entre tanto ruido, casi lo olvidas: hoy vence el plazo de descargo. Marcos no agregó nada. ${F.has('despido_marcos') ? 'La carta de despido, firmada por el doctor, está en un fólder rojo.' : F.has('amonestacion_marcos') ? 'La carta de amonestación, con los atenuantes reconocidos, está en un fólder azul.' : F.has('caso_archivado') ? 'La comunicación de archivo, con la constancia de las causas, está en un fólder azul.' : 'La comunicación de la decisión está lista en un fólder.'}</p><p>Marcos espera en la puerta 2, con el casco en la mano. <mark class="clave">¿Cómo se la entregas?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'En tu oficina, en privado: le explicas lo que dice, respondes sus preguntas y le pides que firme el cargo de recepción.',
        res: { q: null, fx: { personas: 4, cumplimiento: 3 }, flags: ['marcos_comunicado'], cartera: { marcos: 'Comunicado por escrito, en privado, con cargo' },
          out: 'Marcos lee despacio. Hace una sola pregunta y tú la respondes sin rodeos. Firma el cargo. Al salir, se cruza con la inspectora en el pasillo y se saludan con la cabeza.',
          kusi: ['animo', 'Cerrar bien también es parte del procedimiento.'] } },
      { id: 'b', label: 'Dejársela a Gladys para que se la entregue en la línea: tú no tienes tiempo con la inspección encima.',
        res: { q: null, fx: { personas: -3, cumplimiento: -1 }, cartera: { marcos: 'Entregado por planta, frente a la línea' },
          out: 'Gladys se la entrega junto a la faja transportadora, delante de todos. Nadie sabe qué dice, pero todos lo miran leerla.',
          kusi: ['triste', 'Un papel así merecía otro lugar.'] } },
    ],
    rules: [[LEY, 'TUO del D. Leg. 728, art. 32: la decisión de despido se comunica por escrito, con la causa y la fecha del cese.'], [BP, 'Toda decisión disciplinaria se entrega en privado, por escrito y con cargo.']],
    mirada: { ve: 'El procedimiento termina cuando el trabajador recibe la decisión por escrito. Hacerlo en privado y explicándola cierra el caso con dignidad, sea cual sea el resultado.' },
  },
  {
    id: 'm7', t: '18:20', ch: 'presencial', who: null, titulo: 'El requerimiento', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de capacitación', show: ['cumplimiento', 'confianza', 'calidad'],
    body: (n, F) => `<p>La inspectora cierra su carpeta. Te entrega dos documentos: el acta de lo actuado hoy y un requerimiento para que la empresa acredite el pago del sobretiempo adeudado dentro del plazo que fija, y una citación a comparecer el viernes en la intendencia. ${F.has('docs_entregados') ? '«Su cálculo me ahorra trabajo. Lo voy a revisar igual.»' : '«Haré mi propio cálculo con lo que me entregaron.»'}</p><p>El gerente ya se fue. <mark class="clave">Te toca firmar la recepción</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Leer los dos documentos completos, anotar una observación precisa (que el personal de la contratista depende de su empleador para el pago, aunque la empresa lo verificará) y firmar la recepción.',
        res: { q: 'buena', fx: { cumplimiento: 5, calidad: 3, confianza: 2 }, rel: { valeria: 1 }, flags: ['requerimiento_firmado'], cartera: { inspeccion: 'Requerimiento recibido; comparecencia el viernes' },
          out: 'La inspectora lee tu observación y asiente: «Queda constancia». Valeria, desde la puerta, te hace un pulgar. Afuera ya es de noche y la garúa vuelve.',
          pro: { ok: 'Firmar la recepción no es aceptar todo: es dar constancia. Las observaciones precisas quedan para la comparecencia.', info: 'Anota el plazo del requerimiento en la cartera: mañana empieza el plan.' },
          kusi: ['feliz', '¡Recibido, leído y con constancia!'] } },
      { id: 'b', label: 'No firmar hasta que el gerente lo revise mañana: es un documento importante y tú no eres la representante legal.',
        res: { q: 'aceptable', fx: { cumplimiento: -2, confianza: -1 },
          out: 'La inspectora deja constancia de que la empresa no firmó la recepción. El requerimiento surte efecto igual. Mañana el gerente lo leerá con un día menos de plazo en la cabeza.',
          pro: { ok: 'Respetas que no eres la representante legal.', risk: 'Negarse a firmar la recepción no detiene el plazo: solo deja constancia de que la empresa no colaboró.' },
          kusi: ['pensando', 'Firmar la recepción no era aceptar…'] } },
    ],
    rules: [[LEY, 'Ley 28806, art. 5: el inspector puede requerir al sujeto inspeccionado que adopte medidas en un plazo determinado.']],
    mirada: {
      ve: 'El final de una visita inspectiva es el principio del trabajo de verdad: un plazo, una comparecencia y una empresa que tiene que demostrar con hechos lo que dijo durante el día.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Martes', 'Visita y requerimiento'], ['Miércoles', 'Plan de pago'], ['Jueves', 'Mesa: plan y acta'], ['Viernes', 'Comparecencia']] },
    },
  },
];
