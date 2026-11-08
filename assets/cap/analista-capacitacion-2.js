// Analista de Capacitación y Desarrollo · Capítulo 2 · «¿Qué les falta?» · Semana 1, martes.
// Hilo de las dos semanas: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas:
// - Ley 29571, Código de Protección y Defensa del Consumidor, arts. 61 y 62 (métodos abusivos de cobranza:
//   gestiones con personas ajenas a la deuda; llamadas o visitas entre las 20:00 y las 07:00).
//   Texto: https://www.leyes.congreso.gob.pe/Documentos/Leyes/29571.pdf
//   Aplicación por Indecopi: https://img.lpderecho.pe/wp-content/uploads/2023/09/Resolucion-0410-2021-SPC-Indecopi-LPDerecho.pdf
// - Ley 29783 (ya citada en el capítulo 1): capacitación de SST dentro de la jornada.

export const CAP = {
  n: 2, titulo: '¿Qué les falta?', dia: 'Semana 1, martes', foto: 'assets/foto/supervisa.webp',
  lugar: 'Financiera Chimú · Agencia El Porvenir',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'El Porvenir, Trujillo. La agencia abre a las 8:30, pero el comité de mora empieza a las 8:00.', boton: 'Subir a la combi',
  kusi: 'Hoy no hay escritorio: hoy se aprende en la calle. ¡Dale!',
  lead: 'Escuchaste el comité de mora, oíste cobrar a un asesor nuevo, saliste a campo con Sandra y te enteraste de algo que ningún curso arregla.',
  reflexion: '¿Qué parte de la mora se resuelve aprendiendo, y qué parte no?',
  siguiente: { n: 3, titulo: 'El proveedor', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'diagnostico', p: 'Diagnóstico de necesidades', j: 'Lorena · Desarrollo', d: 0, e: 'Una hipótesis: la inducción' },
  { id: 'campo', p: 'Visita a la agencia El Porvenir', j: 'Nando · Agencia', d: 0, e: 'Hoy' },
  { id: 'cobranza', p: 'Cómo cobran los asesores nuevos', j: 'Nando · Agencia', d: 0, e: 'Sin observar' },
  { id: 'metas', p: 'Metas de colocación de los nuevos', j: 'Víctor · Negocios', d: 0, e: '30 créditos el primer mes' },
  { id: 'piloto', p: 'Taller piloto de 90 minutos', j: 'Víctor · Negocios', d: 0, e: 'Sin fecha' },
];

export const FUTURO = {
  cobranza_vista: ['Escuchaste cobrar a un asesor nuevo: amenazas, sin acuerdos de pago.', 'Será el corazón de tu taller. Capítulo 5.'],
  kevin_confia: ['Hablaste a solas con Kevin sobre los límites de la cobranza.', 'Kevin llegará a tu taller con preguntas. Capítulo 5.'],
  kevin_llamo_noche: ['No le dijiste nada a Kevin y esa noche llamó a un cliente a las 8:30 p. m.', 'El reclamo llegará en el capítulo 4.'],
  evaluacion_vista: ['Viste en campo que los nuevos evalúan sin verificar ventas ni temporadas.', 'Lo usarás para juzgar al proveedor. Capítulo 3.'],
  presion_reportada: ['Le contaste a Lorena, sin nombres, que en la agencia piden «redondear» ventas.', 'Riesgos revisará las metas. Lo verás en el capítulo 8.'],
  presion_confrontada: ['Le reclamaste a Nando y él adivinó quién habló.', 'Víctor te lo cobrará en el capítulo 6.'],
  presion_callada: ['Dejaste fuera del diagnóstico la presión por inflar ventas.', 'Los números del capítulo 8 no dirán lo que esperas.'],
  diagnostico_solido: ['Tu diagnóstico separa lo que se aprende de lo que no.', 'Con él compararás la propuesta de Ronald. Capítulo 3.'],
  diagnostico_cursos: ['Tu diagnóstico terminó siendo una lista de cursos.', 'Ronald encontrará dónde encajar su programa. Capítulo 3.'],
  victor_jueves: ['Víctor confirmó el taller piloto para este viernes.', 'Capítulo 5.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  nando: { n: 'Nando Cruz', sub: 'Administrador · Agencia El Porvenir', c: '#8A5A2B' },
};

export const WSP = [
  { chat: 'nando', t: '07:20', de: 'Nando', txt: 'Buenos días. El comité de mora es a las 8 en punto, antes de abrir. Si llega tarde, ya no hay sillas 😅' },
  { chat: 'sandra', t: '07:35', de: 'Sandra', txt: 'Lo del curso de anoche… 10 horas, a las 9 p. m. Kevin se quedó dormido con la laptop y Milagros lo puso en silencio mientras bañaba a su hija. Nadie aprendió nada, solo dieron clic 😔', si: 'victor_noche' },
  { chat: 'sandra', t: '07:40', de: 'Sandra', txt: 'Hoy me presto a El Porvenir para acompañar a una nueva en campo. Así ves cómo es de verdad 🛵', si: 'sandra_escuchada' },
  { chat: 'ronald', t: '09:05', de: 'Ronald', txt: 'Buen día 👋 ¿Pudiste revisar el contrato? Necesitamos la firma para reservar al coach.', si: 'ronald_firmado' },
  { chat: 'ronald', t: '09:05', de: 'Ronald', txt: 'Buen día 👋 Avanzando con la versión con indicadores. Mañana la tienes 📊', si: 'ronald_pausa' },
  { chat: 'grupo', t: '12:50', de: 'Lorena', txt: '¿Cómo va la calle? Come algo, que en El Porvenir el menú se acaba temprano 🍲' },
  { chat: 'lorena', t: '14:40', de: 'Lorena', txt: 'Gracias por contarme. Sin nombres, lo llevo a Riesgos esta semana. Bien hecho 🙏', si: 'presion_reportada' },
  { chat: 'nando', t: '15:10', de: 'Nando', txt: 'Ya sé quién le fue con el cuento. Aquí todos trabajamos por la meta, no venga a dividir a mi equipo.', si: 'presion_confrontada' },
  { chat: 'sandra', t: '18:50', de: 'Sandra', txt: 'Milagros me dijo que hoy fue la primera vez que alguien de la sede salió a campo con ella 💛' },
];

export const CORREOS = [
  { t: '07:15', de: 'Lorena Villanueva', para: 'Analista de Capacitación y Desarrollo', asunto: 'Tu visita a El Porvenir', html: '<p>Hoy te toca El Porvenir: es la agencia con más asesores nuevos y la peor mora de los últimos tres meses. Nando, el administrador, es buena gente, pero vive con la meta en la nuca.</p><p>No vayas a «evaluar» a nadie. Ve a <b>entender qué les falta</b>. Para mañana necesito un diagnóstico de una hoja.</p><p>Lorena</p>' },
  { t: '11:05', de: 'Víctor Alvarado', para: 'Analista de Capacitación y Desarrollo', asunto: 'Metas de colocación · semana 1', html: '<p>Equipo: recordarles que la meta de los asesores nuevos sigue en 30 créditos el primer mes. La agencia que no llegue, no cobra bono de equipo.</p><p>Víctor Alvarado · Gerente regional</p>' },
];

export const QUIZ = [
  { q: 'Según el Código de Protección y Defensa del Consumidor, ¿qué es un método abusivo de cobranza?', ops: ['Llamar al deudor a las 10 a. m.', 'Hacer gestiones de cobranza con personas ajenas a la deuda, como una vecina', 'Enviar un estado de cuenta', 'Ofrecer reprogramar la deuda'], ok: 1, por: 'El artículo 62 de la Ley 29571 prohíbe, entre otros, las gestiones de cobranza con personas ajenas a la deuda.' },
  { q: '¿En qué horario están prohibidas las llamadas y visitas de cobranza?', ops: ['Entre las 12:00 y las 14:00', 'Entre las 20:00 y las 07:00', 'Solo los domingos', 'No hay horario prohibido'], ok: 1, por: 'El artículo 62 de la Ley 29571 prohíbe las llamadas y visitas de cobranza entre las 20:00 y las 07:00, y también los sábados, domingos y feriados.' },
  { q: 'Un asesor nuevo amenaza a un cliente, pero no consigue un compromiso de pago. ¿Qué le falta?', ops: ['Más carácter', 'Saber negociar un acuerdo de pago dentro de la ley', 'Un curso de Excel', 'Una amonestación'], ok: 1, por: 'La amenaza no produce pagos; un acuerdo concreto (monto y fecha) sí. Es una habilidad que se aprende.' },
  { q: 'Descubres que la meta empuja a los asesores a inflar las ventas en la evaluación. ¿Eso se resuelve con un curso?', ops: ['Sí, con un taller de ética', 'No del todo: es un problema de incentivos que debe ver quien diseña las metas', 'Sí, con más horas de inducción', 'No es problema de nadie'], ok: 1, por: 'Si el sistema premia lo contrario de lo que enseñas, el curso pierde. Hay que separar lo que se aprende de lo que no.' },
  { q: '¿Qué es lo más valioso de observar el trabajo en campo?', ops: ['Controlar a los asesores', 'Ver la brecha real entre lo que se enseña y lo que se hace', 'Tomar fotos para el informe', 'Conocer la ciudad'], ok: 1, por: 'La observación muestra lo que ninguna encuesta dice: cómo se hace el trabajo de verdad.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'q1', t: '07:30', ch: 'whatsapp', who: null, titulo: 'La combi a El Porvenir', banner: 'assets/foto2/caminan.webp', lugar: 'Av. España, paradero a El Porvenir', show: ['tiempo', 'personas'],
    body: (n, F) => `<p>Subes a la combi en la avenida España. El cobrador grita «¡Porvenir, Porvenir, Alto Trujillo!» y te toca ir parada, con la mochila adelante. Afuera, el sol de Trujillo todavía no calienta.${F.has('datos_mora') ? ' En tu celular llevas el cruce de ayer: la mora nueva se concentra en los asesores de menos de seis meses, y El Porvenir tiene once.' : ' Lorena te mandó aquí porque es la agencia con peor mora; tú todavía no sabes por qué.'}</p><p>${F.has('victor_noche') ? 'Sandra te acaba de contar cómo les fue con el curso de anoche. ' : ''}Nando te escribe: el comité de mora empieza a las 8. <mark class="clave">¿Cómo quieres llegar a esa sala?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Llegar a escuchar: presentarte en una frase y sentarte atrás con tu libreta.',
        res: { q: null, fx: { personas: 3, confianza: 2 }, cartera: { campo: 'En la agencia desde las 7:55' },
          out: 'Te presentas como «la de Capacitación que viene a aprender cómo trabajan». Dos asesores se miran aliviados: pensaban que venías de Auditoría.', kusi: ['feliz', 'Entrar escuchando abre puertas.'] } },
      { id: 'b', label: 'Llevar impresa una encuesta de necesidades para que la llenen al inicio del comité.',
        res: { q: null, fx: { calidad: -1, tiempo: -2 }, cartera: { campo: 'Encuesta repartida, poco llenada' },
          out: 'Nando la reparte. La mayoría marca «comunicación asertiva» y «liderazgo», las opciones de siempre. Nadie escribe nada en «otros».', kusi: ['pensando', 'Una encuesta te dice lo que la gente cree que debe responder.'] } },
    ],
    mirada: { ve: 'Una analista de capacitación que llega a una agencia suele ser vista como alguien que viene a evaluar. Presentarse como aprendiz baja las defensas, y la gente cuenta lo que de verdad pasa.' },
  },
  {
    id: 'q2', t: '08:10', ch: 'presencial', who: null, titulo: 'El comité de mora', banner: 'assets/foto/equipo-rojo.webp', lugar: 'Agencia El Porvenir · sala de reuniones', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>Doce asesores de pie alrededor de una mesa. En la pared, un papelógrafo con la mora de cada uno en rojo. Nando, 38 años, camisa remangada, va nombre por nombre: «Kevin, ¿cuánto recuperaste?». Kevin baja la mirada.</p><p>Al terminar, Nando te da cinco minutos antes de abrir la agencia. <mark class="clave">Solo alcanzas a hacerle dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Nando.',
    opts: [
      { id: 'cartera', label: '¿Qué cartera recibe un asesor nuevo?', info: '«La que deja el que se fue. A Kevin le tocó la de un asesor que renunció con 40 clientes atrasados. Llegó y ya tenía mora que no era suya.»' },
      { id: 'acomp', label: '¿Quién acompaña a los nuevos en su primer mes?', info: '«Nadie, para ser sincero. Yo tengo la agencia, la meta y la caja. Les doy la inducción de dos horas, su tablet, y a la calle.»' },
      { id: 'meta', label: '¿Qué meta tiene un asesor nuevo?', info: '«Treinta créditos el primer mes. Si no llega, no hay bono, y el sueldo base es poquito. Por eso salen a colocar como sea.»' },
      { id: 'mejor', label: '¿Quién es el que mejor cobra aquí?', info: '«Don Aurelio, 11 años. Cobra conversando, se toma un cafecito con el cliente. Pero eso no se puede enseñar, es su estilo.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('acomp') || picks.includes('meta') ? 3 : 1, confianza: 1, tiempo: -1 },
      cartera: { metas: picks.includes('meta') ? 'Sin meta, no hay bono: colocan «como sea»' : '30 créditos el primer mes' },
      out: picks.includes('mejor') ? 'Anotas en tu libreta: «Don Aurelio cobra conversando. Nando cree que no se enseña. ¿Seguro?».' : 'Nando abre la puerta de la agencia. Ya hay cola: comerciantes del mercado y una señora con un fólder lleno de boletas.',
      kusi: ['curioso', 'Cada respuesta abre otra pregunta…'],
    }),
    mirada: {
      ve: 'El comité de mora muestra el problema, pero no su causa. Las preguntas que más revelan son las que miran cómo llega un nuevo: qué cartera recibe, quién lo acompaña y qué le exigen.',
      visual: { tipo: 'mensaje', titulo: 'Lo que anotaste', txt: 'Cartera heredada con mora. Inducción de dos horas y a la calle. Treinta créditos el primer mes. «Cobrar conversando no se enseña.»' },
    },
  },
  {
    id: 'q3', t: '09:40', ch: 'llamada', who: null, titulo: 'Kevin cobra', banner: 'assets/foto2/callcenter.webp', lugar: 'Escritorio de Kevin', show: ['cumplimiento', 'personas', 'calidad'],
    body: () => `<p>Kevin Paredes tiene 23 años, es de Otuzco y estudia Contabilidad de noche. Es su tercer mes. Te deja sentarte a su lado mientras hace sus llamadas de cobranza con el celular de la agencia.</p><p>Habla rápido y fuerte, como alguien que se aprendió un guion de memoria. <mark class="clave">Tú solo escuchas</mark>.</p>`,
    type: 'calls',
    calls: [['Sra. Rosa Huamán · taller de calzado · 12 días de atraso', 'Contesta, con máquinas de coser de fondo', 'Kevin: «Señora, si hoy no paga la reporto a la central de riesgo y no le van a prestar en ningún lado». Ella: «Joven, se me cayó el pedido para Lima. El sábado le pago algo». Kevin cuelga sin acordar monto ni día.'], ['Vecina de don Julio · número de referencia', 'Contesta la vecina', 'Kevin: «Dígale a don Julio que debe tres cuotas y que me llame urgente». La vecina responde: «Ya, yo le aviso… ¿tres cuotas, dice?».'], ['Don Julio Esquivel · bodega · 25 días de atraso', 'No contesta', 'Kevin anota en su cuaderno: «Volver a llamar 8:30 p. m., a esa hora sí está».']],
    prompt: 'Escuchaste tres llamadas. ¿Qué haces con lo que viste?',
    choices: [
      { id: 'a', label: 'Esperar a que termine y hablarle a solas: lo de la vecina y la llamada de la noche no se puede hacer. Anotar el patrón para ver si se repite en otros nuevos.',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 3, calidad: 2 }, flags: ['cobranza_vista', 'kevin_confia'], cartera: { cobranza: 'Amenazan sin acordar; cobranza a terceros y de noche' },
          out: 'Kevin se pone rojo. «Nadie me dijo. En la inducción solo vimos el sistema.» Tacha el «8:30 p. m.» del cuaderno. Luego te pregunta, bajito: «¿Y cómo se cobra, entonces?».',
          pro: { ok: 'Corriges en privado algo que podía terminar en un reclamo y no lo humillas.', info: 'Revisa si otros nuevos llaman a referencias: si se repite, es un vacío de la inducción, no de Kevin.' },
          kusi: ['celebra', 'Kevin no era el problema: nadie le enseñó.'] } },
      { id: 'b', label: 'Anotarlo solo para el diagnóstico, sin decirle nada: viniste a observar, no a supervisar.',
        res: { q: 'aceptable', fx: { calidad: 2, cumplimiento: -3 }, flags: ['cobranza_vista', 'kevin_llamo_noche'], cartera: { cobranza: 'Patrón observado, sin corregir' },
          out: 'Tu libreta queda llena de buenos datos. Esta noche, a las 8:30, Kevin llamará a don Julio.',
          pro: { ok: 'Respetas tu rol de observadora.', risk: 'Observar no significa quedarse callada frente a algo que la ley prohíbe y que puede terminar en un reclamo ante Indecopi.' },
          kusi: ['preocupado', 'Lo viste… y lo dejaste pasar.'] } },
      { id: 'c', label: 'Concluir que a Kevin le falta carácter para cobrar y sugerirle a Nando que le pase la cartera difícil a otro.',
        res: { q: 'riesgosa', fx: { personas: -4, calidad: -2 }, flags: ['kevin_llamo_noche'], cartera: { cobranza: 'Se culpó al asesor' },
          out: 'Nando asiente: «Sí, Kevin es blandito». Le quitan diez clientes. Kevin te mira de lejos el resto de la mañana. Y el problema real sigue ahí.',
          pro: { ok: 'Buscas una salida rápida para la agencia.', risk: 'Culpar a la persona por lo que nadie le enseñó es el error más común en capacitación.' },
          kusi: ['triste', '¿Carácter? Le faltaba que alguien le enseñara.'] } },
    ],
    rules: [[LEY, 'Ley 29571, art. 62: son métodos abusivos de cobranza las gestiones con personas ajenas a la deuda y las llamadas o visitas entre las 20:00 y las 07:00.'], [BP, 'Corrige en privado y busca el patrón: si varios nuevos fallan igual, falta algo en cómo se les enseña.']],
    mirada: {
      ve: 'Las amenazas suenan firmes, pero no producen pagos: producen clientes que dejan de contestar. Cobrar bien es negociar un compromiso concreto, con monto y fecha, sin salirse de lo que la ley permite. Eso se aprende, y en Chimú nadie lo enseña.',
      visual: { tipo: 'cambio', titulo: 'De amenazar a acordar', pares: [['«La reporto a la central de riesgo»', '«¿Cuánto puede pagar el sábado?»'], ['Dejarle el recado a la vecina', 'Hablar solo con el deudor o su garante'], ['Llamar a las 8:30 p. m.', 'Llamar en horario permitido']] },
      normas: [{ ley: 'Ley 29571, Código de Protección y Defensa del Consumidor, arts. 61 y 62', dice: 'El proveedor debe cobrar sin afectar la reputación ni la privacidad del consumidor. Prohíbe, entre otros, comunicar o llamar a terceros ajenos a la deuda para informarles de la morosidad, y las llamadas o visitas entre las 20:00 y las 07:00 o los sábados, domingos y feriados.', practica: 'Un recado a la vecina o una llamada nocturna exponen a la financiera a un reclamo, aunque el asesor «solo quería cobrar».' }],
    },
  },
  {
    id: 'q4', t: '11:20', ch: 'presencial', who: 'sandra', titulo: 'Taller de calzado', banner: 'assets/foto/taller.webp', lugar: 'Un taller de calzado de El Porvenir', show: ['calidad', 'personas', 'confianza'],
    body: (n, F) => `<p>${F.has('sandra_escuchada') ? 'Sandra cumplió: vino desde La Esperanza en su moto.' : 'Sandra está prestada hoy en El Porvenir y Nando te asigna con ella.'} Acompañan a Milagros Chávez, cajamarquina, 29 años, cuatro meses en Chimú, a renovar el crédito de la señora Rosa: un taller de calzado en el segundo piso de su casa, con olor a pegamento y cajas de zapatos escolares apiladas hasta el techo.</p><p>Sandra no dice nada; te mira como diciendo «fíjate». <mark class="clave">Hay muchas cosas que ver y poco tiempo</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos observaciones que mejor explican por qué los créditos de los nuevos caen en mora.', boton: 'Anotar estas dos', resumen: 'Anotaste',
    cols: ['Lo que viste', 'Qué podría explicar'],
    rows: [
      { id: 'eval', cells: ['Milagros anota las ventas que la señora le dice, sin pedir el cuaderno de ventas ni las boletas de compra de cuero', 'Créditos más grandes de lo que el negocio puede pagar'] },
      { id: 'temporada', cells: ['El taller vende fuerte en la campaña escolar y en diciembre, pero la cuota es igual todo el año', 'Atrasos predecibles en los meses flojos'] },
      { id: 'meta', cells: ['Milagros le ofrece «subir el monto» porque le falta llegar a la meta', 'Presión por colocar'] },
      { id: 'app', cells: ['La tablet no tiene señal en el segundo piso y Milagros sale a la calle a sincronizar', 'Pérdida de tiempo'] },
      { id: 'moto', cells: ['Milagros no tiene moto: se mueve en mototaxi y paga de su bolsillo', 'Cansancio y gastos'] },
    ],
    score: { eval: 3, temporada: 3, meta: 1, app: 0, moto: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, personas: 1 }, rel: { sandra: q === 'buena' ? 1 : 0 },
        flags: picks.includes('eval') || picks.includes('temporada') ? ['evaluacion_vista'] : [],
        cartera: { diagnostico: q === 'buena' ? 'Brecha: evaluar con el negocio a la vista y por temporadas' : 'Observaciones sueltas del campo' },
        out: q === 'buena' ? 'Ya en la calle, Sandra se quita el casco: «Eso. A mí me enseñó un asesor viejo a pedir el cuaderno y a preguntar en qué meses vende menos. A ellos nadie».' : 'Sandra asiente, pero agrega: «Lo de la tablet y la moto es real, pero eso no se arregla con un curso. Fíjate en cómo evalúa».',
        pro: { ok: 'Separas las causas que se resuelven aprendiendo de las que no.', risk: 'La meta y la movilidad también pesan, pero son temas de gestión, no de capacitación.', info: 'Pregúntale a Sandra si se animaría a enseñar cómo evalúa un negocio por temporadas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ahí está lo que les falta!' : '¿Qué de eso se aprende?'],
      };
    },
    rules: [[BP, 'Observa el trabajo real antes de diseñar: la brecha está entre cómo se debería hacer y cómo se hace.']],
    mirada: {
      ve: 'En microfinanzas, el crédito se decide en la casa del cliente. Un asesor experto pide el cuaderno, mira el inventario y pregunta por los meses flojos. Un nuevo, sin acompañamiento, anota lo que le dicen. Esa diferencia es una necesidad de capacitación concreta.',
      visual: { tipo: 'matriz', x: '¿Se resuelve aprendiendo?', y: 'Peso en la mora', cuadrantes: ['Peso alto, no se aprende', 'Peso alto, se aprende', 'Peso bajo, no se aprende', 'Peso bajo, se aprende'], items: [['Evaluar sin verificar', .85, .85], ['Cuota sin temporadas', .75, .7], ['Presión por la meta', .2, .75], ['Tablet sin señal', .15, .2], ['Sin moto', .1, .3]] },
    },
  },
  {
    id: 'q5', t: '13:15', ch: 'presencial', who: null, titulo: 'Lo que dijo Milagros', banner: 'assets/foto/cafe.webp', lugar: 'Puesto de menú en el mercado de El Porvenir', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Menú de diez soles: sopa de trigo y seco de cabrito. Sandra se fue a otra visita. Milagros come rápido, mirando el celular: su hija sale del jardín a las dos.</p><p>De pronto baja la voz: «Señorita, ¿le digo algo? Nando nos pide que <mark class="clave">“redondeemos” las ventas en la evaluación para que el crédito pase el puntaje</mark>. Si no llego a la meta, no hay bono, y con el básico no me alcanza. Pero no diga que fui yo».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle, prometerle que no usarás su nombre y contárselo hoy a Lorena para que lo lleve a Riesgos: ningún taller arregla una meta que empuja a inflar ventas.',
        res: { q: 'buena', fx: { etica: 4, personas: 2, confianza: 1 }, rel: { lorena: 1 }, flags: ['presion_reportada'], cartera: { metas: 'Reportado a Lorena, sin nombres' },
          out: 'Milagros respira. Le escribes a Lorena desde el mercado, sin nombres ni agencia en el mensaje. Ella responde que lo hablará con Riesgos con datos de varias agencias, para que nadie quede señalado.',
          pro: { ok: 'Proteges a quien habló y llevas el problema a quien puede cambiar el incentivo.', risk: 'Riesgos puede tardar, y mientras tanto la meta sigue igual.', info: 'En tu diagnóstico, pon este hallazgo en «lo que no se resuelve con capacitación».' },
          kusi: ['animo', 'Cuidaste a Milagros y no te callaste.'] } },
      { id: 'b', label: 'Ir a hablar con Nando apenas vuelvas a la agencia: tiene que dejar de pedir eso hoy mismo.',
        res: { q: 'riesgosa', fx: { etica: 2, personas: -4, confianza: -3 }, flags: ['presion_confrontada'], cartera: { metas: 'Conflicto con el administrador' },
          out: 'Nando te escucha con la mandíbula apretada: «¿Quién le dijo eso?». No respondes, pero en la agencia solo una asesora almorzó contigo. Milagros no te vuelve a mirar en toda la tarde.',
          pro: { ok: 'Quieres frenar algo que está mal.', risk: 'Confrontar sin proteger la fuente expone a quien confió en ti. Y Nando solo repite la presión que recibe de arriba.' },
          kusi: ['preocupado', 'Tenías razón… y Milagros pagó el costo.'] } },
      { id: 'c', label: 'Dejarlo fuera: tu área es capacitación. En el taller incluirás un módulo de ética en la evaluación para que nadie infle ventas.',
        res: { q: 'aceptable', fx: { etica: -2, calidad: 1 }, flags: ['presion_callada'], cartera: { metas: 'No reportado; módulo de ética previsto' },
          out: 'Milagros asiente y cambia de tema. Tu taller tendrá un buen módulo de ética. Pero el lunes la meta seguirá siendo treinta créditos.',
          pro: { ok: 'Respetas los límites de tu rol y la confidencialidad.', risk: 'Enseñar ética mientras el incentivo premia lo contrario pone al asesor a elegir entre el curso y su sueldo.' },
          kusi: ['pensando', '¿Un curso contra un bono? Gana el bono.'] } },
    ],
    rules: [[BP, 'No todo problema de desempeño es de capacitación: si el incentivo empuja en contra, hay que decírselo a quien diseña el incentivo.'], [BP, 'Lo que te cuentan en confianza se reporta sin nombres.']],
    mirada: {
      ve: 'Esta es la pregunta más incómoda del diagnóstico: ¿la gente no sabe hacerlo bien, o el sistema le paga por hacerlo mal? Una buena analista de capacitación lo distingue y no vende un curso para un problema de incentivos.',
      visual: { tipo: 'balanza', a: { t: 'Lo que enseñaría el taller', items: ['Verificar las ventas', 'Cuota según temporadas', 'Ética en la evaluación'] }, b: { t: 'Lo que premia la meta', items: ['30 créditos el primer mes', 'Bono solo si llegas', 'Montos más altos'] } },
    },
  },
  {
    id: 'q6', t: '15:30', ch: 'documento', who: null, titulo: 'El diagnóstico en una hoja', banner: 'assets/esc/escritorio.webp', lugar: 'Escritorio prestado en la agencia', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>Te prestan el escritorio del asesor que está de vacaciones, junto al dispensador de agua. La impresora de la agencia está sin tóner: lo escribirás en la laptop y lo mandarás por correo.${F.has('presion_reportada') ? ' Lorena ya sabe lo de las metas.' : ''}</p><p>Lorena pidió una hoja. <mark class="clave">Lo difícil es decidir qué entra y qué no</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu diagnóstico.', boton: 'Enviar el diagnóstico a Lorena',
    bloques: [
      { id: 'hallazgos', t: 'Qué encontraste', n: 2, ops: [
        { id: 'h1', t: 'La mora nueva se concentra en asesores de menos de seis meses que reciben carteras heredadas y salen a campo tras dos horas de inducción.', ok: true, por: 'Dato y contexto en una frase.' },
        { id: 'h2', t: 'Los nuevos evalúan con lo que el cliente dice y cobran amenazando, sin acordar monto ni fecha.', ok: true, por: 'Lo que viste en campo y en las llamadas.' },
        { id: 'h3', t: 'Los asesores nuevos no tienen compromiso con la empresa.', ok: false, por: 'Es una opinión que culpa a las personas, no un hallazgo.' },
      ] },
      { id: 'aprende', t: 'Qué se resuelve aprendiendo', n: 2, ops: [
        { id: 'a1', t: 'Evaluar la capacidad de pago con el negocio a la vista: cuaderno de ventas, inventario y temporadas.', ok: true, por: 'Una habilidad concreta que Sandra y Don Aurelio ya dominan.' },
        { id: 'a2', t: 'Cobrar negociando un compromiso de pago, dentro de los límites de la ley.', ok: true, por: 'Responde a lo que viste con Kevin.' },
        { id: 'a3', t: 'Excel avanzado y comunicación asertiva para todos.', ok: false, por: 'Es lo que marcó la encuesta, no lo que viste.' },
      ] },
      { id: 'nocurso', t: 'Qué no se resuelve con un curso', n: 1, ops: [
        { id: 'n1', t: 'La meta de 30 créditos en el primer mes y la cartera heredada con mora: deben revisarlas Negocios y Riesgos.', ok: true, por: 'Separar esto protege la credibilidad del taller.' },
        { id: 'n2', t: 'Nada: con un buen programa de capacitación se resuelve todo.', ok: false, por: 'Prometer eso es firmar tu propio fracaso en el capítulo de los resultados.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'diagnostico_cursos' : 'diagnostico_solido'],
        cartera: { diagnostico: q === 'riesgosa' ? 'Una lista de cursos' : 'Una hoja: 2 brechas que se aprenden, 1 que no' },
        out: q === 'buena' ? 'Lorena responde en diez minutos: «Esto es un diagnóstico. Y la última columna es la que nos va a salvar en el comité».' : q === 'aceptable' ? 'Lorena responde: «Bien encaminado. Pero sé más clara en qué NO vamos a resolver con capacitación».' : 'Lorena responde: «Esto parece un catálogo. ¿Qué viste hoy que no supieras ayer?».',
        pro: { ok: 'Un buen diagnóstico dice qué se aprende y qué no: así nadie le pide a un taller lo que no puede dar.', risk: 'Si prometes que la capacitación lo resuelve todo, cualquier resultado será un fracaso.', info: 'Guarda esta hoja: con ella vas a juzgar la propuesta del proveedor mañana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que vale oro!' : '¿Qué viste hoy de verdad?'],
      };
    },
    rules: [[BP, 'Un diagnóstico de necesidades separa las brechas de conocimiento o habilidad de los problemas de incentivos, herramientas o gestión.']],
    mirada: {
      ve: 'El diagnóstico es el documento más importante del ciclo de capacitación. Todo lo que venga después, el proveedor, el presupuesto, el taller y la medición, se va a comparar con esta hoja.',
      visual: { tipo: 'flujo', titulo: 'Tu diagnóstico', pasos: ['Mora en nuevos', 'Evaluar sin verificar', 'Cobrar amenazando', 'Se aprende: 2 brechas', 'No se aprende: meta y cartera'] },
    },
  },
  {
    id: 'q7', t: '17:40', ch: 'whatsapp', who: null, titulo: 'Fijar la fecha con Víctor', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Combi de regreso al centro', show: ['confianza', 'personas', 'tiempo'],
    body: (n, F) => `<p>De regreso, la combi va llena de escolares y huele a salchipapa. Tienes el diagnóstico listo y te falta lo más difícil: la fecha del taller.${F.has('victor_aliado') ? ' Víctor dijo ayer: «este viernes, no un lunes».' : F.has('victor_noche') ? ' Víctor cree que el curso de noche ya resolvió todo.' : ' Víctor todavía no te ha dado ni una hora.'}</p><p><mark class="clave">Un mensaje corto, con un dato que a él le importe</mark>.</p>`,
    type: 'compose', enviaA: 'victor', para: 'Para: Víctor Alvarado · Gerente regional', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'Víctor, hoy estuve en El Porvenir: los nuevos aprueban créditos sin verificar ventas y cobran sin cerrar acuerdos de pago. Ahí está buena parte de la mora.', ok: true, por: 'Le hablas de su indicador, con lo que viste.' },
        { id: 'd2', t: 'Víctor, hoy confirmé que tus asesores necesitan mucha capacitación.', ok: false, por: 'Suena a crítica y no dice nada concreto.' },
      ] },
      { id: 'pedido', t: 'Lo que pides', ops: [
        { id: 'p1', t: 'Te propongo el taller de 90 minutos este viernes, de 8:00 a 9:30, antes de que salgan a campo, solo con los 11 nuevos de El Porvenir.', ok: true, por: 'Día, hora, duración y grupo: fácil de decir que sí.' },
        { id: 'p2', t: 'Necesito que liberes a los asesores un día completo para capacitarlos.', ok: false, por: 'Le pides lo que más le duele, sin acotar.' },
      ] },
      { id: 'mide', t: 'Cómo lo medirás', ops: [
        { id: 'm1', t: 'En un mes comparamos su mora con la de los nuevos de otras agencias. Si no baja, no te vuelvo a pedir horas.', ok: true, por: 'Usas su propia condición de ayer.' },
        { id: 'm2', t: 'Al final les hacemos una encuesta para ver si les gustó.', ok: false, por: 'A Víctor no le importa si les gustó.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'p1', 'm1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, personas: q === 'buena' ? 2 : 0 }, rel: { victor: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['victor_jueves'], cartera: { piloto: q === 'riesgosa' ? 'Sin fecha' : 'Este viernes, 8:00 a 9:30' },
        out: q === 'buena' ? 'Víctor responde con un audio de 12 segundos: «Ya. Viernes a las 8. Once asesores. Y en un mes me muestras la mora». Clic. Tienes fecha.' : q === 'aceptable' ? 'Víctor responde: «Viernes, pero máximo una hora y media. Y quiero ver números». Tienes fecha, con condiciones.' : 'Víctor deja el mensaje en visto. Mañana tendrás que llamarlo.',
        pro: { ok: 'Con un jefe comercial, un dato de su indicador y un pedido acotado valen más que diez argumentos.', risk: 'Un pedido grande y sin medición es fácil de rechazar.', info: 'Confírmalo por correo, con copia a Nando, para que la agencia lo programe.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Fecha confirmada! Qué bacán.' : 'Pide poco, concreto y medible.'],
      };
    },
    rules: [[BP, 'Pide horas de capacitación en el idioma del jefe: su indicador, un tiempo acotado y una forma de medir.']],
    mirada: {
      ve: 'Conseguir que un gerente libere a su gente es parte del trabajo de capacitación, no un trámite. Un pedido pequeño, con fecha y con una promesa medible, convierte el taller en una apuesta compartida.',
      visual: { tipo: 'mensaje', titulo: 'Un pedido fácil de aceptar', txt: 'Los nuevos aprueban sin verificar ventas y cobran sin cerrar acuerdos. Taller de 90 minutos, este viernes de 8:00 a 9:30, 11 asesores. En un mes comparamos su mora.' },
    },
  },
];
