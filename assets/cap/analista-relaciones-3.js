// Analista de Relaciones Laborales · Capítulo 3 · «La carta de preaviso» · Semana 1, miércoles.
// Hilo de las dos semanas: la negociación colectiva y el caso disciplinario de Marcos Huamán (autoclave 3).
// Normas citadas:
// - TUO del D. Leg. 728, Ley de Productividad y Competitividad Laboral (D.S. 003-97-TR): art. 25, inc. a (falta grave:
//   incumplimiento de obligaciones que quebranta la buena fe laboral e inobservancia del reglamento interno o de
//   seguridad), art. 25, inc. h (abandono de trabajo, para distinguirlo), art. 31 (preaviso escrito, plazo no menor de
//   seis días naturales, inmediatez, exoneración con pago) y art. 32 (despido por escrito con causa y fecha).
//   Texto transcrito en https://lpderecho.pe/jurisprudencia-articulo-31-tuo-decreto-legislativo-728-procedimiento-despido/
//   y modelo de carta en https://modelo.pe/carta-de-imputacion-de-cargos-por-abandono-de-trabajo-inasistencias-injustificadas/
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): libertad sindical (cap. 1).
// La entrega por conducto notarial cuando el trabajador se niega a firmar el cargo se presenta como buena práctica, sin citar artículo.

export const CAP = {
  n: 3, titulo: 'La carta de preaviso', dia: 'Semana 1, miércoles', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Conservas del Pacífico · Oficina de Relaciones Laborales',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Miércoles. Garúa fina sobre la bahía y una sola tarea que no admite errores: la carta que le imputa los hechos a Marcos. Si te equivocas en el plazo o en los hechos, el caso se cae.', boton: 'Abrir el borrador',
  kusi: 'Cada palabra de esta carta puede leerla un juez. ¡Despacio y con lupa!',
  lead: 'Corregiste un borrador viejo, redactaste hechos precisos con el plazo correcto, defendiste la inmediatez frente a la estrategia y entregaste la carta respetando a Marcos y al sindicato.',
  reflexion: '¿Qué pesó más hoy: la negociación de mañana o el derecho de Marcos a saber de qué se le acusa?',
  siguiente: { n: 4, titulo: 'La primera reunión', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'carta', p: 'Carta de preaviso a Marcos Huamán', j: 'Arturo · Valeria', d: 0, e: 'Borrador de 2019' },
  { id: 'plazo', p: 'Plazo de descargo', j: 'Relaciones Laborales', d: 0, e: 'Por calcular' },
  { id: 'entrega', p: 'Entrega con cargo', j: 'Relaciones Laborales', d: 0, e: 'Sin programar' },
  { id: 'trato', p: 'Primera reunión de trato directo', j: 'Lucho · Sindicato', d: 0, e: 'Mañana, jueves 10:00' },
  { id: 'expediente', p: 'Expediente del caso', j: 'Valeria · Abogada', d: 0, e: 'Piezas sueltas' },
];

export const FUTURO = {
  carta_precisa: ['La carta describe hechos concretos y la falta exacta.', 'El descargo de Marcos responderá a hechos, no a adjetivos. Capítulo 5.'],
  carta_vaga: ['La carta salió con hechos vagos o con faltas ya sancionadas.', 'Valeria advertirá que el caso puede caerse. Capítulo 5.'],
  plazo_correcto: ['El plazo de descargo es de seis días naturales: vence el martes.', 'Marcos no esperará tanto: lo traerá antes. Capítulo 5.'],
  plazo_corto: ['La carta dio un plazo menor al legal.', 'Hubo que rehacerla y el sindicato lo sabe. Capítulo 4.'],
  carta_hoy: ['Enviaste la carta hoy, sin esperar a la negociación.', 'Lucho lo mencionará, pero sabrá que el caso va por su carril. Capítulo 4.'],
  carta_postergada: ['Postergaste la carta hasta después de la primera reunión.', 'Marcos esperó un día más sin saber nada. Capítulo 5.'],
  carta_mezclada: ['La carta insinuó que el caso dependía del «clima» de la negociación.', 'Lucho la leerá en voz alta en la mesa. Capítulo 4.'],
  entrega_ordenada: ['Planificaste una entrega con cargo, testigos y fecha de vencimiento anotada.', 'Nadie podrá discutir cuándo empezó el plazo. Capítulo 5.'],
  pruebas_a_marcos: ['Las pruebas se entregaron a Marcos, y él decidió con quién compartirlas.', 'Lucho confía en el procedimiento. Capítulo 4.'],
  pruebas_a_lucho: ['Le diste a Lucho copia de todo el expediente sin autorización de Marcos.', 'El video vuelve a circular. Capítulo 4.'],
  sindicato_excluido: ['Le dijiste a Lucho que el sindicato no tiene nada que ver.', 'Llegará mañana con el caso como bandera. Capítulo 4.'],
  renuncia_sugerida: ['Le insinuaste a Marcos que renunciara.', 'Marcos se lo contó a Lucho, palabra por palabra. Capítulo 4.'],
  expediente_ordenado: ['Valeria recibió un expediente con índice y fechas.', 'Te pedirá que lleves el caso en la mesa si sale el tema. Capítulo 4.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  marcos: { n: 'Marcos Huamán', sub: 'Operario · línea 2', c: '#5B4636' },
  milagros: { n: 'Milagros Chero', sub: 'Asistente de RR.HH. · asistencia y planillas', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'valeria', t: '06:50', de: 'Valeria', txt: 'El borrador de despido de ayer lo saqué de la carpeta. Hoy hacemos preaviso, como debe ser. Sin rencor, pero que no se repita 🙏', si: 'despido_express' },
  { chat: 'gladys', t: '07:10', de: 'Gladys', txt: 'Te dejé el rol de turnos en tu escritorio. El lunes Renzo le pidió a Marcos que entrara desde la mañana y se quedara de noche. No me lo dijo a mí.', si: 'gladys_entiende' },
  { chat: 'gladys', t: '07:10', de: 'Gladys', txt: '¿Ya sale la carta o seguimos esperando?', no: 'gladys_entiende' },
  { chat: 'grupo', t: '10:40', de: 'Arturo', txt: 'Me llamó el gerente general. Paso por tu sitio en 20 minutos.' },
  { chat: 'marcos', t: '16:25', de: 'Marcos', txt: 'Buenas tardes señorita. Ahí estaré. Voy con Lucho si se puede.', si: 'marcos_escuchado' },
  { chat: 'marcos', t: '16:25', de: 'Marcos', txt: 'Ok.', no: 'marcos_escuchado' },
  { chat: 'lucho', t: '17:50', de: 'Lucho', txt: 'Recibimos copia de la carta de manos de Marcos. Lo vemos con nuestro asesor. Mañana hablamos de lo otro.', si: 'pruebas_a_marcos' },
  { chat: 'milagros', t: '18:30', de: 'Milagros', txt: 'Señorita, ya cuadré el reporte de la línea 2. No es solo Marcos. Lo vemos con calma la otra semana.', si: 'marcaciones_linea' },
];

export const CORREOS = [
  { t: '07:20', de: 'Dr. Arturo Benavides', para: 'Analista de Relaciones Laborales', asunto: 'Borrador carta Huamán', html: '<p>Te adjunto la plantilla que usamos en 2019. Ajústala y me la pasas antes de las 10. Valeria la revisa después.</p><p>A. B.</p>' },
  { t: '14:05', de: 'Notaría · Av. José Gálvez', para: 'Relaciones Laborales', asunto: 'Horario de cartas notariales', html: '<p>Estimados: recibimos cartas notariales hasta las 17:00, de lunes a viernes. El diligenciamiento se realiza al día siguiente dentro de Chimbote y Nuevo Chimbote.</p>' },
];

export const QUIZ = [
  { q: 'La carta de preaviso por una falta de conducta debe…', ops: ['Comunicar el despido', 'Describir los hechos, la falta imputada y dar un plazo no menor de seis días naturales para el descargo', 'Pedir la renuncia', 'Esperar al fin de la negociación'], ok: 1, por: 'El art. 31 del TUO del D. Leg. 728 exige imputar por escrito y otorgar un plazo no menor de seis días naturales.' },
  { q: 'Si la carta se entrega el miércoles y da seis días naturales, el plazo vence…', ops: ['El viernes', 'El lunes', 'El martes', 'El miércoles siguiente, contando solo días hábiles'], ok: 2, por: 'Los días naturales incluyen sábado y domingo: jueves, viernes, sábado, domingo, lunes y martes.' },
  { q: 'Quedarse dormido junto a una autoclave en ciclo puede encuadrarse como…', ops: ['Abandono de trabajo', 'Incumplimiento de obligaciones e inobservancia del reglamento de seguridad (art. 25, inc. a)', 'Falta de compromiso', 'Delito'], ok: 1, por: 'El abandono es otra causal (inasistencias). El hecho de la autoclave se analiza como incumplimiento de obligaciones o del reglamento de seguridad.' },
  { q: 'Incluir en la carta una tardanza de 2023 que ya fue sancionada…', ops: ['Refuerza el caso', 'Es un error: no se sanciona dos veces el mismo hecho', 'Es obligatorio', 'Solo vale si el sindicato lo acepta'], ok: 1, por: 'Un hecho ya sancionado puede mencionarse como antecedente, pero no imputarse de nuevo como falta.' },
  { q: 'Postergar la carta varios días por estrategia de negociación…', ops: ['No tiene ningún riesgo', 'Puede tensionar el principio de inmediatez y mezcla el caso disciplinario con la negociación', 'Es lo que manda la ley', 'Anula la negociación colectiva'], ok: 1, por: 'La reacción debe ser oportuna. Unos días pueden justificarse, pero usar el caso como pieza de la negociación lo debilita.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:45', ch: 'documento', who: null, titulo: 'La plantilla de 2019', banner: 'assets/foto/revisa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>La garúa moja la ventana y el aire trae olor a harina de pescado desde la bahía. ${F.has('despido_express') ? 'Valeria ya sacó de la carpeta tu borrador de despido de ayer.' : 'Abres el archivo «CARTA PREAVISO MODELO (2) final FINAL.docx».'}</p><p>El Dr. Benavides solo cambió el nombre y la fecha. <mark class="clave">Antes de pasarla a Valeria, revísala línea por línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería salir así en la carta.',
    doc: { t: 'Carta de imputación de cargos', sub: 'Conservas del Pacífico S.A.C. · Chimbote, miércoles' },
    lines: [
      { id: 'dest', t: 'Señor Marcos Huamán Tarazona, operario de la línea 2. Presente.' },
      { id: 'despido', t: 'Por medio de la presente le comunicamos su despido por falta grave.', bad: LEY, why: 'Esta carta no despide: imputa hechos y abre el plazo de descargo (art. 31). El despido, si llega, va en otra carta (art. 32).' },
      { id: 'vago', t: 'Los hechos consisten en su conducta irresponsable de los últimos días.', bad: BP, why: 'Hechos vagos: Marcos no puede defenderse de un adjetivo. Hay que decir fecha, hora, lugar y conducta.' },
      { id: 'tardanza', t: 'Asimismo, se le imputa la tardanza del 14 de marzo de 2023.', bad: BP, why: 'Esa tardanza ya fue sancionada con una amonestación. No se puede sancionar dos veces el mismo hecho.' },
      { id: 'falta', t: 'Los hechos configurarían la falta grave del artículo 25, inciso a, del TUO del D. Leg. 728.' },
      { id: 'plazo', t: 'Tiene tres días hábiles para presentar sus descargos.', bad: LEY, why: 'El plazo no puede ser menor de seis días naturales (art. 31 del TUO del D. Leg. 728).' },
      { id: 'lugar', t: 'Podrá presentar su descargo por escrito en la oficina de Relaciones Laborales, de lunes a sábado, de 8:00 a 17:00.' },
      { id: 'exon', t: 'Mientras dure este procedimiento, queda exonerado de asistir, con goce de su remuneración.', duda: 'Correcto: la exoneración es posible si se le paga y no perjudica su defensa.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: missLey ? -5 : 5, calidad: q === 'buena' ? 4 : 0 },
        flags: q === 'buena' ? ['carta_precisa'] : ['carta_vaga'],
        cartera: { carta: missLey ? 'Plantilla casi sin cambios' : `Borrador corregido (${hitsLey + hitsBp} cambios)` },
        out: missLey ? 'Le pasas la carta al doctor. Valeria la devuelve en cinco minutos, toda en rojo: «¿Tres días hábiles? ¿“Su despido”? Esto no sale».' : q === 'buena' ? 'El doctor ve tus marcas y se ríe solo: «Esa plantilla la hizo un practicante en 2019. Y la hemos usado treinta veces».' : 'Corregiste lo legal. Valeria agrega en un comentario: «Y los hechos, ¿cuáles son? “Conducta irresponsable” no se puede contestar».',
        pro: { ok: 'Una plantilla vieja repite los errores de siempre: revisarla es parte del trabajo.', risk: 'Un plazo menor al legal o una carta que «despide» antes de escuchar invalidan el procedimiento.', info: 'La falta imputada debe coincidir con los hechos descritos, palabra por palabra.' },
        kusi: missLey ? ['preocupado', 'Esa carta se caía solita…'] : ['celebra', '¡Ojo de abogada!'],
      };
    },
    rules: [[LEY, 'TUO del D. Leg. 728, art. 31: preaviso escrito con un plazo no menor de seis días naturales. Art. 32: el despido se comunica por escrito con la causa y la fecha del cese.'], [BP, 'No se sanciona dos veces el mismo hecho: lo ya sancionado es antecedente, no falta nueva.']],
    mirada: {
      ve: 'La carta de preaviso es el documento que define de qué se puede defender el trabajador. Si dice «despido», si da menos días o si describe adjetivos en vez de hechos, el caso nace herido.',
      visual: { tipo: 'cambio', titulo: 'De la plantilla a una carta válida', pares: [['«Le comunicamos su despido»', '«Le imputamos los siguientes hechos»'], ['«Conducta irresponsable»', '«Martes, 04:10, autoclave 3»'], ['Tres días hábiles', 'Seis días naturales']] },
      normas: [{ ley: 'TUO del D. Leg. 728 (D.S. 003-97-TR), arts. 25, 31 y 32', dice: 'Define las faltas graves, exige el preaviso escrito con un plazo no menor de seis días naturales para el descargo y que el despido se comunique por escrito, indicando la causa y la fecha del cese.', practica: 'Primero se imputa; después, con el descargo en la mano, se decide.' }],
    },
  },
  {
    id: 'g2', t: '09:30', ch: 'documento', who: 'valeria', titulo: 'Los hechos, palabra por palabra', banner: 'assets/foto/cv-mano.webp', lugar: 'Videollamada con Valeria', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Valeria se conecta desde su estudio en Trujillo, con el pelo todavía mojado. «Vamos bloque por bloque. ${F.has('acta_forzada') ? 'Y el acta que firmó ayer no la adjuntamos: sin asesoría y llorando, no vale.' : 'Lo que no esté aquí, Marcos no tiene por qué contestarlo.'}»</p><p>La carta se entrega hoy. <mark class="clave">El plazo se cuenta desde que Marcos la recibe</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la carta.', boton: 'Pasar la carta a Valeria',
    bloques: [
      { id: 'hechos', t: 'Los hechos', n: 1, ops: [
        { id: 'h1', t: 'El martes, aproximadamente a las 04:10, usted fue encontrado sentado junto a la autoclave 3, en ciclo de esterilización, con los ojos cerrados y sin responder al llamado del supervisor.', ok: true, por: 'Fecha, hora, lugar y conducta: se puede contestar.' },
        { id: 'h2', t: 'Usted se durmió en su turno, como todos en la planta saben, poniendo en peligro a sus compañeros.', ok: false, por: '«Como todos saben» no es un hecho, y el peligro hay que describirlo, no exagerarlo.' },
      ] },
      { id: 'falta', t: 'La falta imputada', n: 1, ops: [
        { id: 'f1', t: 'Incumplimiento de sus obligaciones y del reglamento de seguridad de la planta, que configuraría la falta grave del artículo 25, inciso a, del TUO del D. Leg. 728.', ok: true, por: 'Encaja con lo que pasó: vigilancia de un equipo en ciclo.' },
        { id: 'f2', t: 'Abandono de trabajo, artículo 25, inciso h.', ok: false, por: 'El abandono se refiere a inasistencias; Marcos estaba en la planta.' },
      ] },
      { id: 'pruebas', t: 'Las pruebas que se le ponen a disposición', n: 2, ops: [
        { id: 'p1', t: 'Informe del supervisor Renzo Távara y declaración escrita del operario Jesús Quispe.', ok: true, por: 'Debe conocer lo que hay en su contra para defenderse.' },
        { id: 'p2', t: 'Reporte del reloj de marcación de la semana.', ok: true, por: 'Es objetivo, y también puede ayudarlo: muestra cuántas horas llevaba.' },
        { id: 'p3', t: 'Captura del video publicado en Facebook por terceros.', ok: false, por: 'Una copia difundida no es la prueba resguardada; el original está en custodia de la empresa.' },
      ] },
      { id: 'plazo', t: 'El plazo', n: 1, ops: [
        { id: 'z1', t: 'Seis días naturales desde que reciba esta carta: si la recibe hoy miércoles, hasta el martes.', ok: true, por: 'Jueves, viernes, sábado, domingo, lunes y martes: seis días naturales.' },
        { id: 'z2', t: 'Seis días naturales: hasta el lunes.', ok: false, por: 'Contando desde el jueves, el sexto día es el martes.' },
        { id: 'z3', t: 'Hasta el viernes, para cerrar el caso esta misma semana.', ok: false, por: 'Menos de seis días naturales: plazo ilegal, aunque la prisa parezca razonable.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -4 : 4 }, rel: { valeria: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? ['plazo_corto'] : ['plazo_correcto'],
        cartera: { carta: q === 'riesgosa' ? 'Carta con errores de plazo o de falta' : 'Carta lista para firma', plazo: q === 'riesgosa' ? 'Mal calculado' : 'Vence el martes' },
        out: q === 'buena' ? 'Valeria lee en voz alta, despacio. «Firmable. Y fíjate: si las marcaciones lo ayudan, que lo ayuden. Así se ve que buscamos la verdad.»' : q === 'aceptable' ? 'Valeria corrige una pieza: «Casi. Pero esto lo va a leer un juez, no Gladys».' : 'Valeria se quita los lentes: «Con este plazo o con esta falta, el descargo de Marcos empieza diciendo que la carta es nula».',
        pro: { ok: 'Hechos precisos, la falta que corresponde, las pruebas a la vista y el plazo bien contado.', risk: 'Un día menos de plazo basta para que el procedimiento se caiga.', info: 'Anota el vencimiento en tu agenda y en el expediente: martes, fin del día.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Carta de manual!' : 'Cuenta otra vez los días…'],
      };
    },
    rules: [[LEY, 'El plazo de descargo no puede ser menor de seis días naturales (art. 31 del TUO del D. Leg. 728).'], [BP, 'Pon a disposición del trabajador las pruebas que se usarán: nadie se defiende de lo que no conoce.']],
    mirada: {
      ve: 'Redactar una imputación es un ejercicio de precisión: cada hecho debe poder probarse y cada palabra debe poder contestarse. Por eso las pruebas que podrían ayudar al trabajador también van.',
      visual: { tipo: 'linea', titulo: 'El reloj del descargo', hitos: [['Miércoles', 'Entrega de la carta'], ['Jueves', 'Día 1 · trato directo'], ['Sábado', 'Día 3'], ['Martes', 'Día 6 · vence el descargo']] },
    },
  },
  {
    id: 'g3', t: '11:10', ch: 'presencial', who: 'arturo', titulo: 'La llamada del gerente', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina del Dr. Benavides', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El doctor cierra la puerta y baja la persiana. «El gerente general dice que no mandemos la carta hoy. Mañana es la primera reunión y <mark class="clave">no quiere que Lucho llegue con este caso de bandera</mark>.»</p><p>Se frota los ojos. ${F.has('despido_express') ? '«Ya nos salvamos una vez esta semana, ¿no?»' : '«Tiene algo de razón, ¿no te parece?»'} Te mira esperando que lo ayudes a decidir.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Enviarla hoy, como estaba previsto: el caso disciplinario va por su carril y la negociación por el suyo. Ofrecer avisarle a Lucho por cortesía, sin detalles.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: -1 }, rel: { arturo: 0 }, flags: ['carta_hoy'], cartera: { entrega: 'Hoy, 17:00' },
          out: 'El doctor lo piensa mientras gira el lapicero. «El gerente me va a llamar terco.» Marca su número: «Va hoy. Si la escondemos, mañana parece que la usamos de ficha».',
          pro: { ok: 'Respetas la inmediatez y no usas a Marcos como pieza de la negociación.', risk: 'Lucho puede llegar más tenso mañana.', info: 'Separar los carriles también protege la negociación: nadie podrá decir que el caso fue moneda de cambio.' },
          kusi: ['animo', 'Cada cosa por su carril. ¡Firme!'] } },
      { id: 'b', label: 'Postergarla a mañana en la tarde, después de la reunión: un día más no rompe la inmediatez, Marcos sigue cobrando y la primera reunión merece llegar sin ruido.',
        res: { q: 'aceptable', fx: { cumplimiento: -1, etica: -1, confianza: 2 }, rel: { arturo: 1 }, flags: ['carta_postergada'], cartera: { entrega: 'Postergada a mañana, 17:00', plazo: 'Vencería el miércoles de la semana 2' },
          out: 'El doctor respira aliviado. Marcos pasará otra noche sin saber de qué lo acusan; en Caraz, su mamá seguirá viendo el video.',
          pro: { ok: 'Proteges el clima de la primera reunión y unos días pueden justificarse.', risk: 'Cada día de espera debilita la inmediatez y deja a Marcos en la incertidumbre. Y si se sabe por qué se postergó, el caso parece una ficha de la negociación.' },
          kusi: ['pensando', 'Defendible… pero ¿a quién protege la espera?'] } },
      { id: 'c', label: 'Enviarla hoy, pero agregar un párrafo: «la empresa evaluará el caso con la mayor consideración, en el marco del buen clima de las conversaciones con la organización sindical».',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -3 }, rel: { arturo: 1 }, flags: ['carta_hoy', 'carta_mezclada'], cartera: { entrega: 'Hoy, con párrafo sobre la negociación' },
          out: 'Al doctor le parece «elegante». Esa frase, leída por Lucho, dice otra cosa: «si se portan bien en la mesa, Marcos se salva».',
          pro: { ok: 'Intentas bajar la tensión con el sindicato.', risk: 'Atar una sanción al comportamiento del sindicato en la negociación es mezclar disciplina con presión sindical.' },
          kusi: ['indignado', 'Eso suena a chantaje con guantes…'] } },
    ],
    rules: [[LEY, 'Art. 31 del TUO del D. Leg. 728: debe observarse el principio de inmediatez.'], [BP, 'No uses un caso disciplinario como ficha de una negociación colectiva, ni para presionar ni para ceder.']],
    mirada: {
      ve: 'Cuando hay negociación colectiva, todo se lee en clave de negociación. Por eso conviene que el caso disciplinario siga su propio calendario: si se acelera, se posterga o se condiciona por la mesa, deja de parecer justo.',
      visual: { tipo: 'balanza', a: { t: 'Postergar la carta', items: ['Primera reunión sin ruido', 'Contenta la gerencia'] }, b: { t: 'Enviarla hoy', items: ['Inmediatez', 'Marcos sabe de qué se defiende', 'Nadie dirá que fue ficha de cambio'] } },
    },
  },
  {
    id: 'g4', t: '12:50', ch: 'documento', who: 'arturo', titulo: 'Cómo se entrega', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Almorzaste un ceviche de la carretilla de la esquina, con chifles, de pie junto a la impresora. ${F.has('carta_postergada') ? 'Aunque la carta sale mañana, el doctor quiere el plan de entrega listo desde hoy.' : 'La carta sale hoy.'}</p><p>El doctor te pasa unas tarjetas: «En 2019 perdimos un caso porque nadie sabía cuándo la recibió. <mark class="clave">Ordena cómo se entrega</mark>».</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la entrega. Usa las flechas.', boton: 'Mostrarle el orden al doctor',
    items: [
      { id: 'firma', t: 'Imprimir dos ejemplares firmados por el representante de la empresa', por: 'Uno queda con Marcos; el otro, con su cargo, en el expediente.' },
      { id: 'cita', t: 'Citar a Marcos con anticipación, en un horario y lugar razonables', por: 'Está exonerado: no se le puede «emboscar» en la puerta de la planta.' },
      { id: 'entrega', t: 'Entregarle la carta y pedirle que firme el cargo con fecha y hora', por: 'Firmar el cargo no es aceptar los hechos: es acusar recibo.' },
      { id: 'negativa', t: 'Si se niega a firmar, dejar constancia con testigos y enviarla por conducto notarial', por: 'Así nadie discute cuándo empezó el plazo.' },
      { id: 'archivo', t: 'Archivar el cargo en el expediente y anotar el vencimiento del descargo', por: 'El sexto día natural, al cierre. Ni antes ni después.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { arturo: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['entrega_ordenada'] : [],
        cartera: { entrega: q === 'buena' ? 'Plan: cargo, testigos y notaría de respaldo' : 'Plan con pasos cruzados' },
        out: q === 'buena' ? 'El doctor guarda las tarjetas en el bolsillo de la camisa: «Esto lo voy a plastificar».' : 'El doctor mueve una tarjeta: «La notaría es el plan B, no el primero. Y sin cargo archivado, no sabemos cuándo vence».',
        pro: { ok: 'Una entrega ordenada deja una fecha cierta para todos.', info: 'La notaría recibe cartas hasta las 5 de la tarde: tenlo como respaldo.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Paso a paso!' : 'Casi: primero el cargo.'],
      };
    },
    rules: [[BP, 'El cargo de recepción con fecha y hora fija el inicio del plazo de descargo. Si el trabajador se niega a firmar, se deja constancia y se usa la vía notarial.']],
    mirada: {
      ve: 'Muchos casos no se pierden por los hechos, sino por la forma: nadie puede probar cuándo se entregó la carta. Un cargo firmado vale más que diez explicaciones.',
      visual: { tipo: 'flujo', titulo: 'La entrega', pasos: ['Dos ejemplares', 'Citar', 'Entregar con cargo', 'Plan B: notaría', 'Archivar y agendar'], aqui: 2 },
    },
  },
  {
    id: 'g5', t: '14:30', ch: 'llamada', who: 'lucho', titulo: 'Lucho quiere el expediente', banner: 'assets/foto2/callcenter.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>El anexo y el celular suenan a la vez otra vez. ${F.has('lucho_respeto') ? 'Lucho, al menos, saluda antes de empezar.' : 'Lucho entra directo, sin saludo.'}</p><p>Antes de la tarde, tres llamadas. La última es la que <mark class="clave">te obliga a decidir qué es de quién</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Milagros Chero · asistencia y planillas', 'Contesta con la boca llena', '«Ya cuadré el reloj. Marcos: entrada lunes 07:02, salida martes 06:55. Tres turnos seguidos. Y señorita… la semana de la caballa hay bastante gente con jornadas de más de doce horas. Y en planillas no veo esas horas.»'],
      ['Renzo Távara · supervisor del turno noche', 'Contesta con voz de recién despertado', '«Sí, yo le pedí que entrara desde la mañana y se quedara de noche. Faltaban dos operarios y la caballa no espera. Pero él aceptó, ¿eh? Nadie lo obligó.»'],
      ['Lucho Paredes · sindicato', 'Contesta al primer timbre', '«Señorita, Marcos me pidió que lo acompañe a recibir la carta. Y quiero copia del video y del expediente completo para nuestro asesor. Si no, mañana lo pedimos en la mesa.»'],
    ],
    prompt: 'Lucho espera en la línea. ¿Qué le respondes?',
    choices: [
      { id: 'a', label: 'Marcos puede venir acompañado por él y asesorarse con el sindicato. La carta y las pruebas se entregan a Marcos; si él quiere compartirlas con su asesor, es su decisión.',
        res: { q: 'buena', fx: { confianza: 4, etica: 4, cumplimiento: 2 }, rel: { lucho: 1 }, flags: ['pruebas_a_marcos'],
          out: 'Lucho se queda un segundo en silencio. «Ya. Así sí. A las cinco estamos ahí.» Por primera vez, no termina la llamada con una amenaza.',
          pro: { ok: 'Respetas el derecho de Marcos a defenderse con apoyo y proteges sus datos: él decide quién ve su expediente.', info: 'Lo que dijeron Milagros y Renzo no es solo de Marcos: es de toda la línea 2. Guárdalo.' },
          kusi: ['celebra', 'Respeto para los dos: Marcos y el sindicato.'] } },
      { id: 'b', label: 'Darle a Lucho copia de todo, video incluido: la transparencia calma al sindicato antes de la reunión de mañana.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -2, confianza: 2 }, rel: { lucho: 1 }, flags: ['pruebas_a_lucho'],
          out: 'Lucho agradece. Esa misma noche, el video vuelve a aparecer, ahora en el grupo del sindicato, con un audio: «miren cómo nos explotan».',
          pro: { ok: 'Buscas bajar la tensión con transparencia.', risk: 'El expediente es de Marcos. Entregarlo a un tercero sin su autorización expone su imagen y sus datos.' },
          kusi: ['preocupado', 'Transparente… con lo que no era tuyo.'] } },
      { id: 'c', label: 'Decirle que los temas disciplinarios son entre la empresa y el trabajador, y que el sindicato no tiene nada que ver.',
        res: { q: 'riesgosa', fx: { confianza: -5, personas: -2 }, rel: { lucho: -1 }, flags: ['sindicato_excluido'],
          out: '«¿Nada que ver?», repite Lucho, despacio. «Entonces mañana vamos a ver qué tiene que ver.» Cuelga.',
          pro: { ok: 'Proteges la confidencialidad del caso.', risk: 'Un trabajador afiliado puede pedir apoyo a su sindicato para defenderse. Cerrar esa puerta convierte un caso en una causa.' },
          kusi: ['triste', 'Cerraste una puerta que estaba abierta…'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT (D.S. 010-2003-TR): el sindicato representa y defiende los intereses de sus afiliados.'], [BP, 'El expediente disciplinario contiene datos personales: se entrega al trabajador, y él decide con quién compartirlo.']],
    mirada: {
      ve: 'Un sindicato puede acompañar y asesorar a un afiliado sin convertirse en dueño de su expediente. Distinguir esas dos cosas evita tanto la exclusión como la exposición.',
      visual: { tipo: 'cambio', titulo: 'Qué es de quién', pares: [['Expediente completo a Lucho', 'Carta y pruebas a Marcos'], ['«El sindicato no tiene nada que ver»', '«Puede venir acompañado»'], ['Video reenviado', 'Video en custodia']] },
    },
  },
  {
    id: 'g6', t: '16:00', ch: 'whatsapp', who: null, titulo: 'Citar a Marcos', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Oficina de Relaciones Laborales', show: ['personas', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>${F.has('carta_postergada') ? 'Aunque la carta saldrá mañana, hay que avisarle a Marcos desde hoy cuándo y dónde recibirla.' : 'La carta está firmada, en dos ejemplares, dentro de un fólder azul.'} Marcos tiene el celular de la empresa apagado: le escribes al suyo.</p><p><mark class="clave">Un mensaje que cite sin asustar y sin presionar</mark>.</p>`,
    type: 'compose', enviaA: 'marcos', para: 'Para: Marcos Huamán · Operario', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'saludo', t: 'Saludo y motivo', ops: [
        { id: 's1', t: 'Buenas tardes, señor Huamán. Le escribe Relaciones Laborales: tenemos una comunicación por escrito para usted sobre lo ocurrido ayer martes.', ok: true, por: 'Formal y claro, sin adelantar decisiones.' },
        { id: 's2', t: 'Marcos, ya te imaginarás para qué es.', ok: false, por: 'Suena a sentencia y a confianza que no corresponde.' },
      ] },
      { id: 'cita', t: 'La cita', ops: [
        { id: 'c1', t: 'Le pedimos acercarse a la oficina de Relaciones Laborales en el día y la hora indicados, por la puerta 2.', ok: true, por: 'Lugar claro y por la puerta administrativa, no frente a la línea.' },
        { id: 'c2', t: 'Pase cuando pueda por la línea 2 y se la doy ahí.', ok: false, por: 'Entregarla frente a sus compañeros lo expone.' },
      ] },
      { id: 'derecho', t: 'Sus derechos', ops: [
        { id: 'd1', t: 'Puede venir acompañado de un representante del sindicato si lo desea. Su exoneración continúa con goce de remuneración.', ok: true, por: 'Le das certeza sobre su sueldo y su apoyo.' },
        { id: 'd2', t: 'Venga solo, por favor, es un tema reservado.', ok: false, por: 'Desalentar su asesoría debilita su defensa y enciende al sindicato.' },
        { id: 'd3', t: 'Si prefiere, puede presentar su renuncia y nos evitamos todo el proceso.', ok: false, por: 'Sugerir la renuncia en medio de un procedimiento se lee como presión.' },
      ] },
    ],
    res: sel => {
      const malo = sel.derecho !== 'd1' || sel.cita === 'c2';
      const buenas = ['s1', 'c1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : -3, etica: sel.derecho === 'd3' ? -6 : 2, cumplimiento: sel.derecho === 'd1' ? 3 : -2 },
        flags: sel.derecho === 'd3' ? ['renuncia_sugerida'] : [],
        cartera: { entrega: sel.cita === 'c1' ? 'Cita por la puerta 2, en oficina' : 'Entrega en la línea' },
        out: q === 'buena' ? 'Doble check azul. Marcos responde: «Ahí estaré». La entrega dura diez minutos: firma el cargo, Lucho lee la carta dos veces y dice solo «está clara».' : sel.derecho === 'd3' ? 'Marcos no responde. A los veinte minutos, Lucho te reenvía tu propio mensaje, con un signo de interrogación.' : 'Marcos responde «ok». Llega serio, firma sin mirar a nadie y se va.',
        pro: { ok: 'Citas con formalidad, cuidas su privacidad y le aseguras sus derechos.', risk: 'Una frase sobre la renuncia puede convertir un procedimiento limpio en una acusación de hostilidad.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Citar sin asustar!' : 'Ese mensaje dice más de lo que querías…'],
      };
    },
    rules: [[BP, 'Entrega los documentos disciplinarios en privado, nunca frente al equipo, y recuerda al trabajador su derecho a asesorarse.']],
    mirada: {
      ve: 'La forma de citar también comunica. Un mensaje formal, en privado y que recuerda los derechos baja la ansiedad de quien lo recibe y evita que el caso escale.',
      visual: { tipo: 'mensaje', titulo: 'Una citación respetuosa', txt: 'Buenas tardes, señor Huamán. Tenemos una comunicación por escrito para usted sobre lo ocurrido ayer martes. Le pedimos acercarse a la oficina de Relaciones Laborales, por la puerta 2. Puede venir acompañado de un representante del sindicato. Su exoneración continúa con goce de remuneración.' },
    },
  },
  {
    id: 'g7', t: '18:15', ch: 'correo', who: null, titulo: 'El expediente para Valeria', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'confianza'],
    mail: { from: 'Valeria Castro · Abogada laboralista', to: 'Analista de Relaciones Laborales', asunto: 'Expediente Huamán' },
    body: () => `<p>Antes de que te vayas: mándame el estado del expediente. <mark class="clave">Lo que un juez vería si lo abre el lunes</mark>.</p><p>Valeria</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Un índice con cada pieza y su fecha, el vencimiento del descargo y el dato nuevo de las horas.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 3 }, rel: { valeria: 1 }, flags: ['expediente_ordenado'], cartera: { expediente: 'Índice enviado; vence el martes' },
          responde: 'Valeria: 1) Informe de R. Távara (versión corregida). 2) Declaración de J. Quispe. 3) Reporte del reloj: M. Huamán en planta desde el lunes 07:02, tres turnos seguidos. 4) Carta de preaviso y cargo. 5) Vence el descargo: martes. Alerta: Milagros encontró jornadas de más de 12 horas en la línea 2 que no aparecen en planillas. Renzo admite que le pidió quedarse.',
          out: 'Valeria responde en cinco minutos: «Gracias. Lo último es lo más grave. Eso ya no es el caso de Marcos: es el caso de la empresa».', kusi: ['celebra', '¡Un expediente que se entiende solo!'] } },
      { id: 'b', label: 'Un mensaje corto: «Todo en orden, la carta ya se entregó».',
        res: { q: 'aceptable', fx: { calidad: -1, tiempo: 1 }, responde: 'Valeria: todo en orden, la carta ya se entregó. Buen fin de semana.',
          out: 'Valeria contesta: «¿Y el vencimiento? ¿Y las horas que mencionó Lucho?». Le respondes desde el bus, con el celular al 4 %.', kusi: ['pensando', '«Todo en orden» no le dice nada a un juez.'] } },
    ],
    mirada: { ve: 'Un expediente ordenado es la memoria del caso: qué pasó, qué se hizo y cuándo vence cada plazo. Y a veces, al ordenarlo, aparece un problema más grande que el caso mismo.' },
  },
];
