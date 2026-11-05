// Asistente de RR.HH. · Capítulo 10 · «Diez días» · Semana 2, viernes. Final abierto: continúa en la Semana 3.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas:
// - Ley 28806, Ley General de Inspección del Trabajo, y su Reglamento (D.S. 019-2006-TR): entre las modalidades de
//   actuación inspectiva está el requerimiento de comparecencia para presentar documentos.
//   https://lpderecho.pe/inspector-puede-exigir-comparecencia-presencial-solo-para-que-empleador-entregue-documentacion-resolucion-423-2021-sunafil-tfl/
//   https://lpderecho.pe/estrategias-legales-para-afrontar-una-inspeccion-laboral-ante-sunafil-con-exito/
// - D.S. 003-97-TR, arts. 72 y 73 (contratos sujetos a modalidad por escrito y su registro), ya citados en el capítulo 3.
// - Ley 29783, art. 71 y Reglamento, art. 102 (confidencialidad de los resultados médicos), ya citados en el capítulo 2.
// - Ley 29783, art. 35 a) (entrega del RISST), ya citado en el capítulo 5.
// - Ley 29733 (datos personales), ya citada.

export const CAP = {
  n: 10, titulo: 'Diez días', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Supermercados Norte · Oficina central de Piura',
  inicio: '08:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Viernes. Hace diez días hábiles entraste a esta oficina y había un cronograma pegado en la pared. Hoy el cronograma tiene todas las casillas tachadas, algunas dos veces, y la tienda 13 lleva tres días vendiendo pan de madrugada.', boton: 'Entrar a la oficina',
  kusi: 'Hoy toca mirar atrás… y prepararte para lo que viene. Porque en RR.HH. siempre viene algo.',
  lead: 'Cerraste los pendientes de la apertura, revisaste un legajo con lupa, ayudaste a Wilmer a hablarle a su equipo, dejaste el cronograma para la tienda 14 y te sentaste con Betty a ver tus dos semanas. Y a las seis llegó una carta.',
  reflexion: '¿Te ves en este puesto?',
  siguiente: { n: 11, titulo: 'La carta de SUNAFIL', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Tienda abierta' },
  { id: 'legajos', p: 'Legajos de la tienda 13', j: 'RR.HH.', d: 0, e: 'Por revisar' },
  { id: 'contratos', p: 'Registro de contratos', j: 'Betty · Legal', d: 0, e: 'Presentación pendiente' },
  { id: 'casos', p: 'Atención de casos', j: 'Betty · RR.HH.', d: 0, e: 'Seguimiento a 30 días' },
  { id: 't14', p: 'Tienda 14 · Sullana', j: 'Gerencia', d: 0, e: 'Recién anunciada' },
];

export const FUTURO = {
  pendientes_legales: ['Cerraste primero los pendientes que la ley pide.', 'El lunes tendrás los papeles en orden.'],
  pendientes_cosmeticos: ['Te fuiste el viernes con pendientes legales abiertos.', 'El lunes te van a hacer falta.'],
  legajo_limpio: ['El legajo modelo quedó limpio: lo que debe estar, y nada más.', 'Lo vas a necesitar el lunes.'],
  wilmer_mensaje: ['Wilmer le habló a su equipo con un mensaje sincero.', 'Las cajeras lo están mirando con cautela.'],
  cronograma_t14: ['Dejaste el cronograma para la tienda 14.', 'Sullana abre en seis semanas.'],
  sunafil_preparada: ['Ante la carta de SUNAFIL, avisaste a Betty y empezaste la lista de documentos.', 'Capítulo 11, Semana 3.'],
  sunafil_panico: ['La carta de SUNAFIL te tomó por sorpresa.', 'Capítulo 11, Semana 3.'],
  te_ves_si: ['Te ves en este puesto.', 'La Semana 3 te espera.'],
  te_ves_otro: ['Te ves en RR.HH., pero en otro lugar del proceso.', 'Betty ya lo anotó.'],
  te_ves_duda: ['Todavía no sabes si te ves en este puesto.', 'Está bien: dos semanas es poco.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera', who: 'karina' },
  equipo: { n: 'Tienda 13 · Equipo', sub: '45 participantes', c: '#C05621' },
};

export const WSP = [
  { chat: 'grupo', t: '07:50', de: 'César', txt: 'La planilla de la tienda 13 cuadró a la primera. Eso nunca pasa. NUNCA. ☕☕', si: 'cesar_horas' },
  { chat: 'grupo', t: '07:50', de: 'César', txt: 'Estoy rehaciendo las horas de la apertura. Hoy salgo tarde 😩', no: 'cesar_horas' },
  { chat: 'grupo', t: '08:05', de: 'Betty', txt: 'Gerencia confirmó la tienda 14, en Sullana. Abre en seis semanas 😅 Hoy a las 5 nos sentamos.' },
  { chat: 'equipo', t: '09:30', de: 'Teodoro', txt: 'Buenos días. Hoy hay pan de camote para todos los de RR.HH. 🍞', si: 'teodoro_ajuste' },
  { chat: 'karina', t: '16:30', de: 'Karina', txt: 'Señorita, el señor Wilmer nos habló a las cajeras. Fue raro, pero bien. Gracias por todo 💚', si: 'wilmer_mensaje' },
  { chat: 'wilmer', t: '16:45', de: 'Wilmer', txt: 'Oye, lo de la reunión… gracias. No se lo digas a nadie 😅', si: 'wilmer_mensaje' },
];

export const CORREOS = [
  { t: '08:20', de: 'Gerencia General', para: 'Todo el personal', asunto: 'Tienda 13: primeros días', html: '<p>La tienda 13 superó en 18 % la venta proyectada de su primera semana. Gracias a todo el equipo de Castilla y a las áreas de soporte que lo hicieron posible.</p>' },
  { t: '18:05', de: 'SUNAFIL · Intendencia Regional de Piura', para: 'Supermercados Norte S.A.C.', asunto: 'Requerimiento de comparecencia', html: '<p>En el marco de una orden de inspección, se requiere a Supermercados Norte S.A.C. comparecer el lunes a las 9:00 con la siguiente documentación de los trabajadores de la tienda 13: contratos de trabajo, constancias de alta en el T-Registro, registro de control de asistencia, registro de capacitación en seguridad y salud en el trabajo y cargos de entrega del Reglamento Interno de Seguridad y Salud en el Trabajo.</p>' },
];

export const QUIZ = [
  { q: 'Un legajo de trabajador debe tener…', ops: ['Contrato, alta, certificado de aptitud, cargo del RISST y lo que corresponde al vínculo', 'Además, sus resultados de laboratorio', 'Además, una copia de la queja que presentó', 'Solo el contrato'], ok: 0, por: 'Los resultados médicos son confidenciales y un caso de queja se guarda aparte, con acceso restringido.' },
  { q: 'Los contratos sujetos a modalidad, después de firmados, se…', ops: ['Guardan en un cajón', 'Presentan a la Autoridad Administrativa de Trabajo para su registro', 'Mandan por WhatsApp al jefe de tienda', 'Destruyen al terminar el contrato'], ok: 1, por: 'El art. 73 del D.S. 003-97-TR pide presentarlos para su conocimiento y registro.' },
  { q: 'SUNAFIL envía un requerimiento de comparecencia. Lo primero es…', ops: ['Ignorarlo hasta el lunes', 'Avisar a la jefatura y empezar a reunir la documentación pedida', 'Llamar al jefe de tienda para que no diga nada', 'Inventar los registros que faltan'], ok: 1, por: 'Es una actuación de inspección: no comparecer o no presentar lo pedido puede ser una infracción.' },
  { q: 'Para la próxima apertura, ¿qué paso conviene adelantar, según lo vivido?', ops: ['Comprar los uniformes con las tallas de otra tienda', 'Pedir las tallas reales y empezar los exámenes médicos desde el primer día', 'Hacer la inducción después de abrir', 'Dejar el turno noche para el final'], ok: 1, por: 'Las tallas y los cupos de la clínica fueron los cuellos de botella de la tienda 13.' },
  { q: 'Lo que más define el trabajo de una asistente de RR.HH. en una apertura es…', ops: ['Que nadie la note', 'Que los detalles pequeños estén bien hechos antes de que alguien los necesite', 'Que haga todo sola', 'Que diga que sí a todo'], ok: 1, por: 'Nadie ve el trabajo… hasta que algo falla. Por eso los detalles importan.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:30', ch: 'documento', who: null, titulo: 'El checklist lleno de tachones', banner: 'assets/esc/meta.webp', lugar: 'Tu escritorio en la oficina central', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: (n, F) => `<p>Despegas el cronograma de la pared con cuidado, como quien guarda un diploma. Tu checklist del primer día tiene tachones, flechas y un café derramado en la esquina. ${F.has('checklist_bueno') ? 'Casi todo lo que pusiste el lunes de la semana pasada sirvió.' : 'Le tuviste que agregar varias cosas en el camino.'}</p><p>Quedan pendientes. Hoy te alcanza para <mark class="clave">tres</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes que cierras hoy.', boton: 'Cerrar estos', resumen: 'Cerraste',
    cols: ['Pendiente', 'Lo que sabes'],
    rows: [
      { id: 'reg', cells: ['Preparar la presentación de los contratos de la tienda 13 a la Autoridad de Trabajo', 'Firmados, pero todavía no presentados para su registro'] },
      { id: 'risst', cells: ['Juntar los cargos del RISST que faltan', 'Faltan los de Rosa y los rezagados del lunes'] },
      { id: 'seg', cells: ['Agendar el seguimiento a 30 días del caso de Karina', 'Lo acordado con Betty'] },
      { id: 'caja', cells: ['Rendir la caja chica de las sillas de la señora Maritza', 'Tienes la boleta en la mochila'] },
      { id: 'fotos', cells: ['Elegir las fotos de la apertura para el Facebook', 'Marketing insiste'] },
      { id: 'excel', cells: ['Cambiarle los colores al Excel de ingresos para que se vea más bonito', 'Las pestañas siguen mal nombradas'] },
    ],
    score: { reg: 3, risst: 3, seg: 2, caja: 1, fotos: -1, excel: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      const legales = picks.includes('reg') && picks.includes('risst');
      return {
        q, fx: { cumplimiento: legales ? 6 : -3, calidad: q === 'buena' ? 3 : 0, tiempo: -1 },
        flags: [legales ? 'pendientes_legales' : 'pendientes_cosmeticos'], cartera: { contratos: picks.includes('reg') ? 'Presentación de contratos preparada' : 'Presentación pendiente' },
        out: q === 'buena' ? 'A las 11, los contratos están listos para presentarse, los cargos del RISST completos y la revisión de Karina agendada. Rotulas una caja: «Tienda 13 · lo que la ley pide».' : 'Cierras pendientes, aunque algunos de los que la ley pide se quedan para la próxima semana.',
        pro: { ok: 'Lo que pide la ley se cierra antes que lo que se ve bonito.', risk: 'Un contrato sin presentar o un cargo sin firmar no se nota… hasta que alguien lo pide.', info: 'Deja la caja chica rendida hoy: Finanzas cierra el viernes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Caja rotulada, conciencia tranquila!' : 'Algo con fecha quedó abierto.'],
      };
    },
    rules: [[LEY, 'Los contratos sujetos a modalidad se presentan a la Autoridad Administrativa de Trabajo para su registro (D.S. 003-97-TR, art. 73).'], [LEY, 'El RISST se entrega a cada trabajador bajo cargo (Ley 29783, art. 35 a).']],
    mirada: {
      ve: 'Una apertura no termina cuando se abren las puertas: termina cuando el último papel está donde debe estar. Los pendientes legales son invisibles hasta el día en que alguien los pide.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Lo que pide la ley', cuadrantes: ['Hazlo hoy', 'Empieza hoy', 'Si sobra tiempo', 'Para nunca'], items: [['Registro de contratos', .6, .9], ['Cargos del RISST', .35, .85], ['Seguimiento de Karina', .2, .6], ['Caja chica', .15, .4], ['Fotos', .3, .1], ['Colores del Excel', .5, .05]] },
    },
  },
  {
    id: 'd2', t: '11:20', ch: 'documento', who: null, titulo: 'Un legajo con lupa', banner: 'assets/esc/lupa.webp', lugar: 'Archivo de RR.HH.', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Betty te pide revisar un legajo al azar de la tienda 13 «como si viniera alguien de afuera». Sale el de Karina. ${F.has('examenes_expuestos') ? 'Te acuerdas del consolidado de la clínica que llegó con diagnósticos.' : ''}</p><p>Lo abres sobre la mesa y <mark class="clave">revisas hoja por hoja</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería estar en el legajo o lo que debería corregirse.',
    doc: { t: 'Legajo de Karina Zapata · cajera', sub: 'Tienda 13 · archivo de RR.HH.' },
    lines: [
      { id: 'contrato', t: 'Contrato por inicio de nueva actividad, firmado, con su anexo de recomendaciones de seguridad.' },
      { id: 'alta', t: 'Constancia de alta en el T-Registro con su fecha de ingreso.' },
      { id: 'apto', t: 'Certificado de aptitud: «Apto».' },
      { id: 'lab', t: 'Hoja de resultados de laboratorio de la clínica, con su hemoglobina y su glucosa.', bad: LEY, why: 'Los resultados médicos son confidenciales. Al legajo va la aptitud; los resultados se quedan con la persona y su médico.' },
      { id: 'queja', t: 'Copia del registro de su queja contra el jefe de tienda.', bad: BP, why: 'Un caso se guarda aparte, con acceso restringido. En el legajo general, cualquiera que lo abra lo leería.' },
      { id: 'risst', t: 'Cargo de entrega del Reglamento Interno de SST, firmado.' },
      { id: 'unif', t: 'Acta de entrega de uniforme y credencial, firmada.' },
      { id: 'foto', t: 'Foto de cuerpo entero «de la ficha antigua».', bad: BP, why: 'No sirve para ningún trámite. Es un dato que no tiene finalidad.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 1 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, etica: missLey ? -2 : 3 },
      flags: missLey ? [] : ['legajo_limpio'], cartera: { legajos: missLey ? 'Legajo modelo con datos que no debía tener' : 'Legajo modelo revisado y limpio' },
      out: missLey ? 'El legajo vuelve a la caja tal como estaba. Si alguien de afuera lo abre, verá la hemoglobina de Karina.' : 'Sacas la hoja de laboratorio y la foto, mueves la copia de la queja a la carpeta restringida y dejas una nota: «Así deben quedar los 45». Betty la lee y te pide revisarlos todos la próxima semana.',
      pro: { ok: 'Un legajo completo y limpio protege a la persona y a la empresa.', risk: 'Información médica o de un caso en el legajo general es información a la vista de cualquiera.', info: 'Haz una lista de verificación del legajo con lo que encontraste hoy.' },
      kusi: missLey ? ['preocupado', 'Ese legajo cuenta demasiado.'] : ['celebra', '¡Legajo modelo!'],
    }),
    rules: [[LEY, 'Los resultados de los exámenes médicos son confidenciales (Ley 29783, art. 71; Reglamento, art. 102).'], [LEY, 'Solo se guardan los datos necesarios para la finalidad (Ley 29733).']],
    mirada: {
      ve: 'El legajo es la memoria de la relación laboral. Debe estar completo, porque eso protege a la persona, y debe estar limpio, porque lo que no corresponde guardar se puede filtrar. Revisar uno «como si viniera alguien de afuera» es un hábito que vale oro.',
      visual: { tipo: 'cambio', titulo: 'El legajo de Karina, antes y después', pares: [['Resultados de laboratorio', 'Solo el certificado de aptitud'], ['Copia de la queja', 'Carpeta restringida de casos'], ['Foto de cuerpo entero', 'Fuera del legajo']] },
    },
  },
  {
    id: 'd3', t: '13:10', ch: 'llamada', who: 'wilmer', titulo: 'Lo que Wilmer quiere decir', banner: 'assets/foto/frente-a-frente.webp', show: ['confianza', 'personas', 'etica'],
    body: (n, F) => `<p>Wilmer te llama desde la tienda. Se escucha la máquina de la panadería. ${F.has('caso_proporcional') ? 'Firmó su compromiso ayer.' : 'Betty conversó con él ayer.'}</p><p>«Betty dice que tengo que hablarles a las cajeras. Yo no sé hacer discursos, oye. <mark class="clave">¿Qué les digo?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Ayudarlo a preparar tres frases sinceras: que se le fue la mano con la presión, que desde ahora apurar no será gritar, y que su puerta está abierta. Sin nombrar a nadie.',
        res: { q: 'buena', fx: { confianza: 4, personas: 4 }, rel: { wilmer: 1 }, flags: ['wilmer_mensaje'],
          out: 'Wilmer las anota en el reverso de una guía de remisión. A las 4 de la tarde les habla a las cajeras en dos minutos, mirando al piso. Nadie aplaude, pero nadie se ríe.',
          pro: { ok: 'Lo ayudas a reparar sin exponer a Karina.', info: 'Que no lo use para pedir explicaciones a nadie.' },
          kusi: ['animo', 'Dos minutos que pueden cambiar una tienda.'] } },
      { id: 'b', label: 'Escribirle tú el mensaje completo para que lo lea tal cual.',
        res: { q: 'aceptable', fx: { confianza: 1 }, rel: { wilmer: 0 },
          out: 'Wilmer lee tu texto en voz alta, como si leyera una factura. Las cajeras se miran entre ellas: se nota que no es suyo.',
          pro: { ok: 'Le das algo concreto.', risk: 'Un mensaje ajeno, leído, no suena a compromiso.' },
          kusi: ['pensando', 'Las palabras tienen que ser suyas.'] } },
      { id: 'c', label: 'Decirle que mejor no diga nada: ya firmó su compromiso y hablar podría empeorar las cosas.',
        res: { q: 'aceptable', fx: { personas: -2 }, rel: { wilmer: 0 },
          out: 'Wilmer respira aliviado. Las cajeras siguen sin saber si algo cambió.',
          pro: { ok: 'Evitas un mal momento.', risk: 'Sin una señal frente al equipo, el cambio se queda en un papel.' },
          kusi: ['pensando', '¿Y cómo sabrán que cambió?'] } },
    ],
    rules: [[BP, 'Reparar un daño frente al equipo se hace con palabras propias y sin señalar a quien se quejó.']],
    mirada: {
      ve: 'El jefe duro también puede cambiar, pero casi nunca sabe cómo. Una asistente de RR.HH. que lo ayuda a encontrar sus propias palabras, sin exponer a nadie, convierte un caso cerrado en un equipo que puede volver a confiar.',
      visual: { tipo: 'mensaje', titulo: 'Las tres frases de Wilmer', txt: 'Con la presión de la apertura se me fue la mano. Desde ahora, apurar no va a ser gritar. Si algo no les parece, mi puerta está abierta, y la de RR.HH. también.' },
    },
  },
  {
    id: 'd4', t: '15:00', ch: 'documento', who: null, titulo: 'El cronograma de la tienda 14', banner: 'assets/3d/scenes/retail.webp', lugar: 'Tu escritorio en la oficina central', show: ['calidad', 'tiempo'],
    body: () => `<p>Gerencia confirmó la tienda 14, en Sullana: abre en seis semanas. Betty te pide el cronograma «con lo que aprendiste en la 13».</p><p>Esta vez lo armas tú, desde cero, en una hoja. <mark class="clave">Ordena las etapas</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las etapas del cronograma de apertura de la tienda 14. Usa las flechas.', boton: 'Mandárselo a Betty',
    items: [
      { id: 'req', t: 'Confirmar puestos, número de ingresos y selección con terna de reserva', por: 'La terna te salvó dos veces en la 13.' },
      { id: 'exa', t: 'Agendar los exámenes con dos clínicas desde la primera semana', por: 'Diez cupos al día fueron el primer cuello de botella.' },
      { id: 'con', t: 'Revisar la plantilla de contrato y firmar contra ficha', por: 'Plantilla vigente, sin cláusulas viejas.' },
      { id: 'uni', t: 'Pedir las tallas reales y luego comprar uniformes y EPP', por: 'Nunca más veinte XL.' },
      { id: 'ind', t: 'Inducción con SST presencial, sillas y agua', por: 'Y una tarjeta de a quién acudir.' },
      { id: 'sim', t: 'Ensayo general: simulacro, turnos legales y plan de reemplazos', por: 'Lo que se equivoca en el ensayo no se equivoca en la apertura.' },
      { id: 'seg', t: 'Apertura y seguimiento: horas extra, dudas y casos', por: 'El trabajo sigue después de abrir.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 }, rel: { betty: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['cronograma_t14'], cartera: { t14: q === 'riesgosa' ? 'Cronograma de la 14 por rehacer' : 'Cronograma de la 14 enviado' },
        out: q === 'buena' ? 'Betty lo lee de pie y lo imprime en A3. «Esto ya no es mi cronograma: es el tuyo.» Lo pega en la misma pared donde estaba el de la 13.' : 'Betty corrige un par de etapas: «Casi. Las tallas, antes de comprar».',
        pro: { ok: 'Conviertes dos semanas de errores y aciertos en un plan que otros pueden seguir.', info: 'Anota al costado de cada etapa qué falló en la 13. Es lo más valioso del cronograma.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡De asistente a quien arma el plan!' : 'Casi: el orden es la lección.'],
      };
    },
    rules: [[BP, 'Un cronograma de apertura se arma con lo que falló en la apertura anterior.']],
    mirada: {
      ve: 'Lo que en la tienda 13 aprendiste corriendo, para la tienda 14 es un plan. Ese paso, de ejecutar tareas a diseñar el proceso, es el que hace crecer a una asistente de RR.HH.',
      visual: { tipo: 'linea', titulo: 'Tienda 14 · Sullana', hitos: [['Semana 1', 'Puestos, selección y terna'], ['Semana 1', 'Exámenes con dos clínicas'], ['Semana 2', 'Contratos contra ficha'], ['Semana 2', 'Tallas, uniformes y EPP'], ['Semana 3', 'Inducción'], ['Semana 5', 'Ensayo general'], ['Semana 6', 'Apertura y seguimiento']] },
    },
  },
  {
    id: 'd5', t: '17:00', ch: 'presencial', who: 'betty', titulo: 'Tus diez días', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Betty', show: ['confianza', 'calidad', 'personas'],
    body: (n, F) => {
      const bien = [], mejor = [];
      (F.has('examenes_confidenciales') ? bien : mejor).push(F.has('examenes_confidenciales') ? 'cuidaste los resultados médicos' : 'los resultados médicos viajaron más de la cuenta');
      (F.has('firma_en_blanco') ? mejor : bien).push(F.has('firma_en_blanco') ? 'lo del contrato de Milagros' : 'ningún contrato se firmó con errores');
      (F.has('sst_saltada') ? mejor : bien).push(F.has('sst_saltada') ? 'los reponedores que salieron sin capacitación' : 'nadie entró a trabajar sin su capacitación de seguridad');
      (F.has('karina_dudada') ? mejor : bien).push(F.has('karina_dudada') ? 'la primera pregunta que le hiciste a Karina' : 'escuchaste a Karina cuando más lo necesitaba');
      (F.has('horas_perdidas') ? mejor : bien).push(F.has('horas_perdidas') ? 'las horas extra de la apertura' : 'rescataste las horas extra de la apertura');
      return `<p>Betty cierra la puerta, sirve dos cafés y pone tu checklist lleno de tachones sobre la mesa. «Diez días. Cuarenta y cinco personas. Una tienda abierta.»</p><p>«Lo que hiciste bien: ${bien.length ? bien.join(', ') : 'llegaste hasta aquí'}. ${mejor.length ? 'Lo que tienes que mejorar: ' + mejor.join(', ') + '.' : 'Y no tengo mucho que corregirte, la verdad.'}» Después te mira: <mark class="clave">«Pregúntame lo que quieras»</mark>.</p>`;
    },
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Betty.',
    opts: [
      { id: 'como', label: '«¿Cómo me vieron los demás?»', info: '«César dice que eres la primera que le manda datos y no parches. Wilmer no lo va a decir, pero te respeta. Y Karina me dijo que fuiste la primera persona a la que se atrevió a contarle algo.»' },
      { id: 'mejor', label: '«¿Qué debería aprender ahora?»', info: '«Planillas, con César. Vas a entender por qué cada dato que pides importa. Y relaciones laborales: lo de Karina no será el último caso.»' },
      { id: 'dificil', label: '«¿Qué fue lo más difícil para usted de estas dos semanas?»', info: 'Betty se ríe bajito. «No dormir pensando en la tienda 12. Esta vez dormí. Eso fue tuyo.»' },
      { id: 'sigue', label: '«¿Qué viene ahora?»', info: '«La tienda 14. Y el seguimiento de la 13: ahora empieza lo que nadie ve, que es que la gente se quede.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 4, personas: 1 }, rel: { betty: 1 },
      out: 'Betty termina su café. «Una última pregunta, y esta te la hago yo.» Antes de que la diga, le vibra el celular. Y a ti también.',
      kusi: ['curioso', 'Dos semanas caben en una taza de café.'],
    }),
    mirada: {
      ve: 'La evaluación de un periodo corto no es una nota: es una conversación sobre lo que hiciste, lo que dejaste pasar y lo que viene. Preguntar «¿qué debería aprender ahora?» dice mucho de una profesional.',
      visual: { tipo: 'flujo', titulo: 'Tus diez días', pasos: ['Cronograma', 'Exámenes', 'Contratos', 'Uniformes', 'Inducción', 'La queja', 'Ensayo', 'Apertura', 'La cola de dudas', 'Balance'], aqui: 9 },
    },
  },
  {
    id: 'd6', t: '18:10', ch: 'correo', who: null, titulo: 'La carta de las seis', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'confianza', 'tiempo'],
    mail: { from: 'SUNAFIL · Intendencia Regional de Piura', to: 'Supermercados Norte S.A.C.', asunto: 'Requerimiento de comparecencia' },
    body: (n, F) => `<p>En el marco de una orden de inspección, se requiere comparecer el <mark class="clave">lunes a las 9:00</mark> con los contratos, las constancias de alta, el registro de asistencia, el registro de capacitación en seguridad y los cargos del RISST de los trabajadores de la tienda 13.</p><p>${F.has('pendientes_legales') ? 'Miras la caja que rotulaste en la mañana: «Tienda 13 · lo que la ley pide».' : 'Piensas en los pendientes que dejaste para la próxima semana.'} Betty lee el mismo correo en su celular y levanta la vista.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Decirle a Betty que ya tienes la mitad reunida, armar ahora mismo la lista de lo pedido y marcar qué está completo y qué falta.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 4 }, rel: { betty: 1 }, flags: ['sunafil_preparada'], responde: 'Betty: armo la lista ahora. Contratos, altas y cargos del RISST, en la caja de la tienda 13. Asistencia: el reporte corregido de la apertura. Capacitación: el registro de la inducción. El lunes a las 7 lo revisamos juntas.',
          out: 'Betty respira hondo. «Bien. El lunes a las 7, aquí.» Sales a la avenida Grau. El calor por fin afloja. El lunes empieza otra historia.',
          kusi: ['animo', 'Lista hecha. El lunes, a enfrentar lo que venga.'] } },
      { id: 'b', label: 'Llamar a Wilmer para preguntarle quién de la tienda pudo haberse quejado.',
        res: { q: 'riesgosa', fx: { confianza: -3, etica: -3 }, rel: { betty: -1 }, flags: ['sunafil_panico'], responde: 'Betty: voy a llamar a Wilmer para ver quién se quejó.',
          out: 'Betty te detiene: «No. Buscar a quien se quejó es lo peor que podemos hacer. Lo que hay que buscar son los papeles». Te vas a casa con el estómago revuelto.',
          kusi: ['preocupado', 'No es quién: es qué falta.'] } },
      { id: 'c', label: 'Dejarlo para el lunes temprano: hoy ya es tarde y es viernes.',
        res: { q: 'aceptable', fx: { tiempo: 1, cumplimiento: -2 }, flags: ['sunafil_panico'], responde: 'Betty: lo vemos el lunes temprano.',
          out: 'Betty asiente, pero a las 10 de la noche te escribe: «No puedo dormir. ¿Tú sabes si están todos los cargos del RISST?». No sabes.',
          kusi: ['pensando', 'El lunes a las 9 es muy pronto.'] } },
    ],
    rules: [[LEY, 'SUNAFIL actúa según la Ley 28806, Ley General de Inspección del Trabajo. No comparecer o no presentar lo pedido puede ser una infracción.']],
    mirada: {
      ve: 'Una inspección no es el final del trabajo: es el momento en que el trabajo invisible se vuelve visible. Todo lo que hiciste bien en estas dos semanas, y todo lo que dejaste pasar, estará sobre una mesa el lunes a las 9.',
      visual: { tipo: 'flujo', titulo: 'Lo que pide SUNAFIL', pasos: ['Contratos', 'Altas en el T-Registro', 'Registro de asistencia', 'Registro de capacitación SST', 'Cargos del RISST'] },
      normas: [{ ley: 'Ley 28806, Ley General de Inspección del Trabajo, y su Reglamento (D.S. 019-2006-TR)', dice: 'Entre las formas de actuación de la inspección está el requerimiento de comparecencia, para que el empleador presente la documentación que se le pide.', practica: 'Los registros que hiciste bien estos diez días son los que el lunes estarán sobre la mesa.' }],
    },
  },
  {
    id: 'd7', t: '18:40', ch: 'presencial', who: 'betty', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/caminan.webp', lugar: 'Puerta de la oficina central', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Betty apaga la luz de su oficina y, en la puerta, se acuerda de la pregunta que te iba a hacer. ${F.has('teodoro_ajuste') ? 'Tiene en la mano una bolsa de pan de camote de don Teodoro.' : 'Tiene en la mano una bolsa de pan de la tienda 13.'}</p><p>«Diez días haciendo lo que nadie ve. Contratos, exámenes, uniformes, una queja, una apertura y ahora una inspección. <mark class="clave">¿Te ves en este puesto?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'si', label: 'Sí. Me gusta ser la persona que hace que todo pase, aunque nadie lo vea.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves_si'],
          out: 'Betty sonríe. «Entonces nos vemos el lunes a las 7. Trae tu checklist: vamos a necesitar tus tachones.»',
          kusi: ['celebra', '¡Qué bacán! La Semana 3 te espera.'] } },
      { id: 'otro', label: 'Me gusta RR.HH., pero creo que me veo más en Planillas o en relaciones laborales.',
        res: { q: null, fx: { confianza: 1 }, flags: ['te_ves_otro'],
          out: 'Betty asiente: «Es lo que le pasa a casi todos los que empiezan aquí: este puesto te enseña dónde quieres estar. Habla con César. Pero el lunes te necesito aquí».',
          kusi: ['curioso', 'Este puesto es una gran escuela. ¡Dale!'] } },
      { id: 'duda', label: 'Todavía no lo sé. Fueron diez días muy intensos.',
        res: { q: null, fx: { personas: 1 }, flags: ['te_ves_duda'],
          out: 'Betty se ríe. «Es la respuesta más honesta que me han dado. Nadie sabe en diez días. Ven el lunes y lo seguimos viendo.»',
          kusi: ['pensando', 'Dudar también es una respuesta.'] } },
    ],
    mirada: {
      ve: 'El puesto de asistente de RR.HH. es una de las puertas de entrada más comunes al área: ves todos los procesos de cerca, desde un contrato hasta una queja. Algunos se quedan porque les gusta que todo funcione; otros descubren aquí qué parte de RR.HH. quieren hacer. Las dos respuestas están bien. Y esta historia todavía no termina: el lunes hay una carta que responder.',
      visual: { tipo: 'balanza', a: { t: 'Lo que cuesta', items: ['Nadie ve tu trabajo', 'Todos te preguntan todo', 'Los imprevistos no avisan'] }, b: { t: 'Lo que da', items: ['Ves todos los procesos', 'Cuidas a personas reales', 'Una tienda abierta gracias a ti'] } },
    },
  },
];
