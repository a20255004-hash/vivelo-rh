// Reclutador/a de selección masiva · Capítulo 9 · «Primer día en piso» · Semana 2, jueves.
// Hilo: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú. El grupo piloto hace sus primeras llamadas reales.
// Normas citadas:
// - D.S. 003-97-TR (TUO del D.Leg. 728), art. 18: la renuncia se avisa por escrito con 30 días de anticipación; el empleador puede
//   exonerar ese plazo, por propia iniciativa o a pedido del trabajador (si no responde en tres días, el pedido se entiende aceptado).
//   https://lpderecho.pe/jurisprudencia-articulo-18-tuo-decreto-legislativo-728-renuncia-retiro-voluntario/
// - D.S. 003-97-TR, art. 6 (la remuneración es lo que se recibe por los servicios), ya citado en el capítulo 6.
// - Ley 29571, art. 62 (métodos abusivos de cobranza), ya citada en el capítulo 4.

export const CAP = {
  n: 9, titulo: 'Primer día en piso', dia: 'Semana 2, jueves', foto: 'assets/foto2/callcenter.webp',
  lugar: 'Contacta Perú · piso 3 de operaciones',
  inicio: '07:40', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves. A las 8:00 el grupo piloto se conecta por primera vez con clientes reales de Banco Sur. Tú no eres supervisora, pero esta gente la elegiste tú.', boton: 'Subir al piso de operaciones',
  kusi: 'Hoy ves si tu selección funciona donde importa: en la llamada real. ¡Dale!',
  lead: 'Preparaste el acompañamiento del primer día, escuchaste a Anthony antes de que se fuera, tramitaste su salida dentro de la ley, detectaste errores en llamadas reales y respondiste con la verdad a la auditoría del banco.',
  reflexion: '¿Qué parte de la renuncia de Anthony fue responsabilidad de la selección?',
  siguiente: { n: 10, titulo: 'El balance', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'acompana', p: 'Acompañamiento del primer día', j: 'Supervisores de piso', d: 0, e: 'Sin plan' },
  { id: 'anthony', p: 'Renuncia de Anthony Ramos', j: 'Personal · Contratos', d: 0, e: 'Recién presentada' },
  { id: 'calidad', p: 'Escucha de llamadas del piloto', j: 'Calidad · Banco Sur', d: 0, e: 'Tres llamadas marcadas' },
  { id: 'auditoria', p: 'Auditoría de fichas del banco', j: 'Patricia · Banco Sur', d: 0, e: '20 fichas en revisión' },
  { id: 'piloto', p: 'Mensaje al grupo piloto', j: 'Jessica · Reclutamiento', d: 0, e: 'Al cierre' },
];

export const FUTURO = {
  acompana_bien: ['El piloto tuvo padrinos, escucha doble y meta reducida el primer día.', 'La retención de la primera semana será la mejor de la campaña. Capítulo 10.'],
  acompana_mal: ['El primer día fue «a la cancha» y con meta completa.', 'Más renuncias en la primera semana. Capítulo 10.'],
  anthony_escuchado: ['Escuchaste a Anthony y supiste por qué se iba.', 'Su respuesta cambiará la evaluación de la semana 3.'],
  anthony_legal: ['La salida de Anthony se tramitó con exoneración del preaviso y pago de lo trabajado.', 'Anthony dejará una buena reseña de Contacta. Capítulo 10.'],
  anthony_amenazado: ['Le dijiste a Anthony que perdería su pago si no cumplía el preaviso.', 'Anthony consultará en SUNAFIL. Semana 3.'],
  calidad_corregida: ['Corregiste en privado los errores de las primeras llamadas reales.', 'Los errores no se repitieron en la tarde. Capítulo 10.'],
  auditoria_honesta: ['Le dijiste la verdad al banco sobre las fichas.', 'Patricia confiará en tus reportes. Capítulo 10.'],
  auditoria_ocultada: ['Dijiste que todas las fichas coincidían.', 'El banco encontrará la diferencia. Semana 3.'],
  piloto_animado: ['Cerraste el primer día del piloto con un mensaje honesto y cercano.', 'Mañana llegarán todos. Capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  anthony: { n: 'Anthony Ramos', sub: 'Asesor del grupo piloto', who: 'anthony' },
  alexandra: { n: 'Alexandra Rivas', sub: '19 años', who: 'alexandra' },
  piloto: { n: 'Grupo piloto · Banco Sur', sub: '31 asesores', c: '#00838F' },
  jhonatan: { n: 'Jhonatan Arévalo', sub: 'Asesor en capacitación', c: '#5D4037' },
};

export const WSP = [
  { chat: 'grupo', t: '07:42', de: 'Jessica', txt: 'Hoy es el día 🙏 El piloto se conecta a las 8. Calidad del banco escucha llamadas desde las 9.' },
  { chat: 'alexandra', t: '09:20', de: 'Alexandra', txt: '¡Primer compromiso de pago! El señor me dijo «gracias por no gritarme, señorita» 😭', si: 'alexandra_excepcion' },
  { chat: 'bruno', t: '09:40', de: 'Bruno', txt: 'Los 28 de la feria están en el piso perdidos. Nadie les dio usuario. ¿Qué hago con ellos?', si: 'tanda2_piso' },
  { chat: 'bruno', t: '11:15', de: 'Bruno', txt: 'Calidad del banco marcó dos llamadas con amenazas. Una es de Kiara. ¿No era que no pasaba?', si: 'pasan_todos' },
  { chat: 'jhonatan', t: '13:50', de: 'Jhonatan', txt: 'Ya estoy en el piso 2 para el grupo de la tarde 🙌 Gracias por la segunda oportunidad.', si: 'jhonatan_vuelve' },
  { chat: 'jessica', t: '16:20', de: 'Jessica', txt: 'Un chico del piloto preguntó si es verdad que su alta «sale recién al aprobar». Dice que lo va a consultar en SUNAFIL 😬', si: 'ingreso_irregular' },
];

export const CORREOS = [
  { t: '08:10', de: 'Calidad · Banco Sur', para: 'Operaciones Contacta', cc: 'Reclutadora masiva', asunto: 'Monitoreo del primer día', html: '<p>Hoy escucharemos llamadas del grupo piloto entre las 9:00 y las 12:00. Les enviaremos las <b>llamadas marcadas</b> para retroalimentación inmediata.</p><p>Calidad Banco Sur</p>' },
];

export const QUIZ = [
  { q: 'Según el art. 18 del D.S. 003-97-TR, ¿con cuánta anticipación se avisa una renuncia?', ops: ['Ninguna', '30 días, por escrito; el empleador puede exonerar ese plazo', '15 días, de palabra', '90 días'], ok: 1, por: 'El empleador puede exonerar el plazo por iniciativa propia o a pedido del trabajador.' },
  { q: 'Alguien renuncia a las dos horas de su primer día en piso. ¿Se le pagan esas horas y los días de capacitación?', ops: ['No, porque se fue', 'Sí: lo trabajado se paga', 'Solo si firma un descargo', 'Solo los días de capacitación'], ok: 1, por: 'La remuneración corresponde a los servicios prestados (D.S. 003-97-TR, art. 6).' },
  { q: '¿Qué acompañamiento reduce las renuncias del primer día en piso?', ops: ['Meta completa desde la primera hora', 'Un padrino, escucha doble al inicio y meta reducida', 'Dejarlos solos para que aprendan', 'Que el supervisor grite para motivar'], ok: 1, por: 'El primer día real es el más frágil: el apoyo en las primeras horas pesa mucho.' },
  { q: 'En una llamada real, un asesor nuevo le deja el recado de la deuda a la mamá del cliente. ¿Qué haces?', ops: ['Lo despides', 'Le das una devolución en privado, de inmediato, y revisas si es un patrón', 'Lo dejas pasar', 'Lo expones en el grupo'], ok: 1, por: 'Cobrarle a personas ajenas a la deuda es un método abusivo (Ley 29571, art. 62): se corrige en el momento.' },
  { q: 'El banco audita las fichas y hay una que no coincide con los documentos. ¿Qué haces?', ops: ['Decir que todas coinciden', 'Decir la verdad, corregir la ficha y explicar qué pasó', 'Borrar la ficha', 'Culpar a otro'], ok: 1, por: 'En una auditoría, ocultar una diferencia la convierte en un problema de confianza.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '07:50', ch: 'presencial', who: null, titulo: 'Antes de conectarse', banner: 'assets/foto/supervisa.webp', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>El piso 3 huele a café de máquina y a desinfectante de vinchas. Los supervisores te dan diez minutos en su reunión de turno. ${F.has('sabe_walter') ? 'Recuerdas lo que te dijo Wálter: «La gente se va cuando se siente sola».' : ''} ${F.has('valla_negociada') ? 'También sale hoy el grupo de refuerzo, con dos días extra de práctica.' : ''}</p><p>Puedes proponer <mark class="clave">tres medidas para el primer día</mark>. Los supervisores aceptarán esas tres y ninguna más.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres medidas para el primer día del piloto.', boton: 'Proponer estas tres', resumen: 'Propusiste',
    cols: ['Medida', 'Qué cuida'],
    rows: [
      { id: 'padrino', cells: ['Un asesor veterano como padrino por cada tres nuevos', 'Que nadie se quede solo con un cliente difícil'] },
      { id: 'doble', cells: ['Escucha doble la primera hora: el nuevo escucha y el padrino habla', 'Aprender viendo antes de hacer'] },
      { id: 'meta', cells: ['Meta reducida el primer día: la mitad de los contactos', 'Que el primer día no sea un fracaso'] },
      { id: 'pausa', cells: ['Pausa de diez minutos a media mañana con el supervisor', 'Detectar a tiempo a quien está por irse'] },
      { id: 'completa', cells: ['Meta completa desde la primera hora', 'Que se acostumbren rápido'] },
      { id: 'cancha', cells: ['«A la cancha»: que aprendan solos con el cliente', 'Que pierdan el miedo'] },
    ],
    score: { padrino: 3, doble: 2, meta: 2, pausa: 2, completa: -3, cancha: -3 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, calidad: q === 'buena' ? 3 : 0 },
        flags: [q === 'riesgosa' ? 'acompana_mal' : 'acompana_bien'],
        cartera: { acompana: picks.map(p => ({ padrino: 'Padrinos', doble: 'Escucha doble', meta: 'Meta reducida', pausa: 'Pausa con supervisor', completa: 'Meta completa', cancha: 'A la cancha' })[p]).join(' + ') },
        out: q === 'buena' ? 'Karen, supervisora, anota las tres en la pizarra del piso: «Primer día: nadie solo». A las 8:00 cada nuevo tiene a alguien al lado.' : 'A las 8:00 los nuevos se conectan con la meta completa. A las 9:30 ya hay uno con los ojos rojos.',
        pro: { ok: 'El primer día real es el más frágil del embudo: acompañar cuesta poco y retiene mucho.', info: 'Pídele a cada supervisor que te avise al mediodía quién está «en riesgo»: puedes conversar con esa persona antes de que se vaya.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Nadie solo el primer día!' : 'Ese primer día va a pesar…'],
      };
    },
    rules: [[BP, 'El primer día en piso se acompaña: padrino, escucha doble y una meta alcanzable.']],
    mirada: {
      ve: 'La selección termina de verdad cuando la persona hace su primera llamada real. Ese día, un cliente que grita sin nadie al lado puede tirar abajo todo lo que costó el embudo. Por eso la reclutadora también propone cómo acompañar.',
      visual: { tipo: 'balanza', a: { t: '«A la cancha»', items: ['Más contactos el primer día', 'Más renuncias la primera semana'] }, b: { t: 'Acompañar', items: ['Padrino al lado', 'Escucha doble', 'Meta alcanzable', 'Pausa para detectar riesgos'] } },
    },
  },
  {
    id: 'h2', t: '10:05', ch: 'presencial', who: 'anthony', titulo: '«Esto no es para mí»', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo del piso 3', show: ['personas', 'calidad'],
    body: () => `<p>Anthony Ramos, 22 años, del piloto, sale al pasillo con la vincha en la mano. Lleva dos horas en el piso. «Ya, señorita, yo me voy. Tres clientes me gritaron, uno me dijo que le estaba robando. <mark class="clave">Esto no es para mí.</mark>»</p><p>Se le nota más avergonzado que molesto.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas antes de que baje.',
    opts: [
      { id: 'espera', label: '¿Qué pensabas que ibas a hacer aquí?', info: '«Un trabajo tranqui, de contestar llamadas. En la evaluación todo era actuado, con usted haciendo de cliente. Aquí la gente está desesperada de verdad.»' },
      { id: 'quedar', label: '¿Qué te habría hecho quedarte?', info: '«No sé… que me avisaran que iba a ser así de duro. O empezar con clientes que deben poquito. Me tocaron los de 90 días de atraso.»' },
      { id: 'entro', label: '¿Cómo llegaste al proceso?', info: '«Por el portal. Postulé a diez trabajos el mismo día. Este fue el primero que me llamó.»' },
      { id: 'otro', label: '¿Tienes otra opción?', info: '«No, la verdad. Mi mamá me va a matar. Pero prefiero eso a que me griten ocho horas.»' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: 3, calidad: picks.includes('espera') || picks.includes('quedar') ? 4 : 1 },
      rel: { anthony: 1 },
      flags: ['anthony_escuchado'],
      out: picks.includes('quedar') ? 'Anotas dos cosas: al primer día le tocaron clientes de 90 días de atraso, y la simulación era demasiado amable comparada con la realidad.' : 'Te queda clara una cosa: la simulación fue más amable que el primer cliente real.',
      kusi: ['curioso', 'Una renuncia también es información.'],
    }),
    mirada: {
      ve: 'Una entrevista de salida corta, en el momento, da información que ningún reporte tiene. Anthony no se va por flojo: se va porque el primer cliente real fue mucho más duro que la simulación, y porque nadie le dijo que podía ser así.',
    },
  },
  {
    id: 'h3', t: '10:30', ch: 'presencial', who: 'anthony', titulo: 'La salida de Anthony', banner: 'assets/esc/decide.webp', show: ['cumplimiento', 'personas', 'etica'],
    body: (n, F) => `<p>Anthony quiere irse hoy mismo. ${F.has('anthony_escuchado') ? 'Ya sabes por qué.' : ''} Bruno te escribe: «Dile que tiene que dar 30 días de preaviso o no le pagamos nada. Así lo pensará dos veces».</p><p><mark class="clave">¿Qué le dices a Anthony?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Ofrecerle una opción real: mañana, con un padrino y clientes de pocos días de atraso. Si igual decide irse, recibir su renuncia por escrito, pedir que lo exoneren del preaviso y asegurar que se le pague lo trabajado.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 4, etica: 3 }, rel: { anthony: 1, bruno: -1 }, flags: ['anthony_legal'], cartera: { anthony: 'Opción ofrecida; renuncia con exoneración y pago de lo trabajado' },
          out: 'Anthony lo piensa en silencio. «Gracias, pero no.» Firma la carta en la recepción. Personal confirma que se le pagan los días de capacitación y las dos horas de hoy. Antes de irse te dice: «Si algún día hay de atención al cliente, avíseme».',
          pro: { ok: 'Le das una salida real y, si se va, la salida es legal y digna.', risk: 'Bruno siente que le «regalaste» los 30 días: explícale que retener a alguien a la fuerza solo produce faltas.', info: 'El art. 18 permite exonerar el preaviso a pedido del trabajador; si el empleador no responde en tres días, se entiende aceptado.' },
          kusi: ['animo', 'Una salida digna también cuida la marca.'] } },
      { id: 'b', label: 'Decirle lo que pide Bruno: o cumple los 30 días de preaviso o no se le paga nada.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -5, personas: -4 }, rel: { anthony: -1, bruno: 1 }, flags: ['anthony_amenazado'], cartera: { anthony: 'Amenazado con no pagarle' },
          out: 'Anthony se pone pálido y se va sin firmar nada. En la noche, su mamá llama a la central: «¿Cómo que no le van a pagar los días que fue?».',
          pro: { ok: 'Cumples la orden de tu gerente.', risk: 'Lo trabajado se paga siempre; amenazar con no pagarlo es un riesgo legal y de reputación.' },
          kusi: ['indignado', 'Lo trabajado se paga. Punto.'] } },
      { id: 'c', label: 'Aceptar su renuncia de inmediato y mandarlo a Personal: si no quiere estar, no hay que retenerlo.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: 0, tiempo: 2 }, rel: { anthony: 0 }, flags: ['anthony_legal'], cartera: { anthony: 'Renuncia recibida sin conversar' },
          out: 'El trámite sale bien y a Anthony se le paga lo trabajado. Pero nadie le ofreció clientes más fáciles ni un padrino, y quizá con eso se quedaba.',
          pro: { ok: 'Respetas su decisión y la ley.', risk: 'No le ofreciste nada de lo que habría podido cambiar su decisión.' },
          kusi: ['pensando', '¿Y si mañana con un padrino se quedaba?'] } },
    ],
    rules: [[LEY, 'D.S. 003-97-TR, art. 18: la renuncia se avisa con 30 días de anticipación y el empleador puede exonerar ese plazo.'], [LEY, 'D.S. 003-97-TR, art. 6: lo trabajado se paga.']],
    mirada: {
      ve: 'En selección masiva, las renuncias de los primeros días son parte del embudo. La diferencia está en cómo se va la gente: con una opción real sobre la mesa y una salida legal, o con una amenaza. Quien se va bien vuelve a recomendar; quien se va mal lo cuenta en su barrio.',
      normas: [{ ley: 'D.S. 003-97-TR (TUO del D.Leg. 728), art. 18', dice: 'En caso de renuncia, el trabajador da aviso escrito con 30 días de anticipación. El empleador puede exonerar ese plazo por propia iniciativa o a pedido del trabajador; en este caso, la solicitud se entiende aceptada si no es rechazada por escrito dentro del tercer día.', practica: 'El preaviso no autoriza a dejar de pagar lo que ya se trabajó.' }],
    },
  },
  {
    id: 'h4', t: '12:20', ch: 'llamada', who: null, titulo: 'Las llamadas marcadas', banner: 'assets/foto/llamada.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>Calidad de Banco Sur te reenvía tres grabaciones del piloto. Te pones la vincha en una cabina vacía, con un táper de arroz chaufa que se enfría al lado. <mark class="clave">Estas son llamadas reales, con clientes reales</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Diana Huerta · asesora del piloto', 'Cliente molesto', '«Señora, entiendo. ¿Le parece si dejamos S/ 80 para el viernes y vemos el resto con su sueldo del 30?» La clienta acepta. Diana repite monto y fecha.'],
      ['Óscar Vela · asesor del piloto', 'Contesta la mamá del cliente', '«Señora, dígale a su hijo que debe tres cuotas y que llame urgente al banco.» La mamá responde: «¿Tres cuotas? ¡Ese chico!».'],
      ['Brenda Ríos · asesora del piloto', 'Cliente que no puede pagar', '«Si no paga hoy, lo reportamos y no va a sacar ni un celular en cuotas.» El cliente cuelga.'],
    ],
    prompt: 'Una llamada buena y dos con errores serios. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Pedir al supervisor diez minutos con Óscar y con Brenda, por separado: escuchar su llamada, explicar qué no se hace y practicar la frase correcta. Felicitar a Diana y revisar si el error se repite en otros del piloto.',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 4, personas: 2 }, flags: ['calidad_corregida'], cartera: { calidad: 'Devolución en privado y revisión del patrón' },
          out: 'Óscar se tapa la cara: «En la capacitación lo dijeron, pero con los nervios se me olvidó». En la tarde, Calidad del banco no marca ninguna llamada nueva del piloto.',
          pro: { ok: 'Corriges de inmediato y en privado, y miras si hay un patrón.', info: 'Si el error de Óscar se repite en varios, falta práctica en la capacitación: no es un problema de una persona.' },
          kusi: ['celebra', 'Corregido a tiempo, sin humillar.'] } },
      { id: 'b', label: 'Mandarle las dos grabaciones a Bruno con la recomendación de cesar a Óscar y a Brenda: el banco ya las marcó.',
        res: { q: 'riesgosa', fx: { calidad: -1, personas: -4 }, rel: { bruno: 0 }, cartera: { calidad: 'Se recomendó cesarlos' },
          out: 'Bruno duda: «¿Botarlos el primer día? Entonces ¿para qué los elegiste?». Tiene un punto. Y el error de fondo sigue sin corregirse en los otros 29.',
          pro: { ok: 'Tomas en serio lo que marcó el banco.', risk: 'Un error del primer día se corrige; cesar sin corregir no enseña nada al resto.' },
          kusi: ['preocupado', '¿Y si era un vacío de la capacitación?'] } },
      { id: 'c', label: 'Dejarlo en manos de Calidad y del supervisor: ya no son tus postulantes, son asesores de Operaciones.',
        res: { q: 'aceptable', fx: { tiempo: 2, calidad: -2 }, cartera: { calidad: 'Derivado a Operaciones' },
          out: 'Calidad hará su informe la próxima semana. Hoy en la tarde, Óscar vuelve a dejar un recado con un vecino.',
          pro: { ok: 'Respetas los roles.', risk: 'El reclutamiento aprende de estas llamadas qué no detectó en la selección.' },
          kusi: ['pensando', 'Ya no son tuyos… ¿o sí?'] } },
    ],
    rules: [[LEY, 'Ley 29571, art. 62: son métodos abusivos las gestiones con personas ajenas a la deuda.'], [BP, 'Los errores del primer día se corrigen en privado y en el momento.']],
    mirada: {
      ve: 'Las primeras llamadas reales son el examen final de la selección y de la capacitación. Escucharlas le dice a la reclutadora qué no midió bien la simulación. Y corregir en el momento evita que un error de nervios se convierta en una costumbre.',
      visual: { tipo: 'cambio', titulo: 'De lo que pasó a lo que se practica', pares: [['Recado a la mamá', 'Hablar solo con el titular'], ['«Lo reportamos»', '«¿Cuánto puede pagar el viernes?»'], ['Colgar sin acuerdo', 'Repetir monto y fecha']] },
    },
  },
  {
    id: 'h5', t: '15:10', ch: 'correo', who: null, titulo: 'La auditoría de fichas', banner: 'assets/foto2/revisan.webp', show: ['etica', 'cumplimiento', 'confianza'],
    mail: { from: 'Patricia Llosa · Gestión de Proveedores, Banco Sur', to: 'Reclutadora masiva', cc: 'Bruno Salinas; Jessica Torres', asunto: 'Muestra de 20 fichas' },
    body: (n, F) => F.has('alexandra_falseada')
      ? `<p>Buenas tardes. En la muestra de 20 fichas, una figura con «secundaria completa», pero la constancia adjunta es de matrícula en un CEBA.</p><p><mark class="clave">¿Hay otras fichas con información que no coincida con los documentos?</mark></p><p>Patricia</p>`
      : `<p>Buenas tardes. Revisamos una muestra de 20 fichas del piloto. ${F.has('alexandra_excepcion') ? 'La excepción del CEBA está bien documentada.' : 'Todo parece en orden.'}</p><p>Antes de cerrar la auditoría: <mark class="clave">¿hay alguna ficha con información que no coincida con los documentos?</mark></p><p>Patricia</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder con la verdad: revisar las fichas hoy, decir qué no coincide y por qué, y corregirlo antes del viernes.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 3 }, rel: { jessica: 1 }, flags: ['auditoria_honesta'], cartera: { auditoria: 'Revisión completa y corrección informada' },
          responde: 'Patricia, buenas tardes. Hoy reviso las 31 fichas del piloto contra sus documentos. Si encuentro alguna diferencia, le informo cuál es, por qué ocurrió y cómo la corregimos, antes del viernes al mediodía. Saludos.',
          out: 'Revisas las 31 fichas hasta las 18:00. Encuentras lo que hay que encontrar y lo dices por escrito. Patricia responde: «Gracias por la transparencia: eso es lo que nos da confianza en un proveedor».',
          pro: { ok: 'Decir la verdad en una auditoría convierte un error en un proceso corregido.', risk: 'Si hay un dato falso, reconocerlo duele: es el precio de haberlo puesto.', info: 'Para que no se repita, que la ficha se llene con el documento a la vista, nunca de memoria.' },
          kusi: ['celebra', 'La verdad pesa menos que cargar una mentira.'] } },
      { id: 'b', label: 'Responder que todas las fichas coinciden: el piloto ya está trabajando bien y abrir el tema ahora puede poner en riesgo el contrato.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -5, confianza: -2 }, flags: ['auditoria_ocultada'], cartera: { auditoria: 'Se declaró que todo coincide' },
          responde: 'Patricia, buenas tardes. Confirmo que todas las fichas coinciden con los documentos. Saludos.',
          out: 'Tu correo queda escrito, con copia a Bruno y a Jessica. Si el banco amplía la muestra, ya no será un error de ficha: será una declaración falsa.',
          pro: { ok: 'Proteges el contrato hoy.', risk: 'Negar una diferencia en una auditoría la convierte en un problema de confianza mucho más grande.' },
          kusi: ['indignado', 'Eso ya quedó por escrito…'] } },
      { id: 'c', label: 'Pedirle hasta el lunes para revisar las 31 fichas con calma, sin adelantar nada.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, tiempo: -1 }, cartera: { auditoria: 'Revisión pedida para el lunes' },
          responde: 'Patricia, buenas tardes. Le respondo el lunes, después de revisar las 31 fichas. Saludos.',
          out: 'Patricia acepta, pero anota en su informe: «Proveedor pide plazo para responder». El fin de semana lo pasarás pensando en esas fichas.',
          pro: { ok: 'No respondes a la ligera.', risk: 'Una revisión que puedes hacer hoy, postergada, parece que esconde algo.' },
          kusi: ['pensando', '¿Por qué esperar si se puede revisar hoy?'] } },
    ],
    rules: [[BP, 'En una auditoría se dice la verdad y se corrige: una diferencia escondida se vuelve un problema de confianza.']],
    mirada: {
      ve: 'En la selección masiva, cientos de fichas se llenan a la carrera. Los errores ocurren. Lo que define a una profesional es qué hace cuando alguien pregunta: revisar, decir la verdad y corregir, aunque eso le cueste.',
    },
  },
  {
    id: 'h6', t: '18:20', ch: 'whatsapp', who: null, titulo: 'Al cierre del primer día', banner: 'assets/foto2/chocan-manos.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Los del piloto salen del piso con la voz ronca. ${F.has('acompana_bien') ? 'Karen te dice que solo uno se fue: Anthony.' : 'Karen te dice que se fueron tres, además de Anthony.'} Jessica te pide que escribas tú en el grupo del piloto: «A ti te conocen desde la primera llamada».</p>`,
    chat: ['¿Qué les ponemos para cerrar el primer día? 🙏'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Un mensaje honesto: que el primer día es el más difícil, qué salió bien, y a quién pueden escribir si mañana dudan en venir.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, rel: { jessica: 1 }, flags: ['piloto_animado'],
          envia: ['piloto', 'Hoy hicieron lo más difícil: su primer día con clientes reales. Hubo gritos, y también los primeros compromisos de pago. Mañana es más fácil, de verdad. Si esta noche dudas en volver, escríbeme antes de decidir. ¡Los esperamos a las 8!'],
          out: 'Llegan veinte respuestas. Una dice: «Pensaba no volver. Ahora sí voy». La foto de perfil es de una señora con su nieto.', kusi: ['feliz', 'Un mensaje que sostiene a alguien.'] } },
      { id: 'b', label: 'Un mensaje motivador con la meta de mañana.',
        res: { q: 'aceptable', fx: { confianza: 1 },
          envia: ['piloto', '¡Bien, equipo! 💪 Mañana vamos por el 100 % de la meta.'],
          out: 'Algunos responden con fuerza. Otros no responden: los que más dudan leyeron «100 % de la meta».', kusi: ['pensando', 'Motivar no es lo mismo que sostener.'] } },
    ],
    mirada: { ve: 'La noche del primer día es cuando más gente decide no volver. Un mensaje que reconoce lo difícil y abre una puerta para conversar antes de renunciar retiene más que cualquier arenga.' },
  },
];
