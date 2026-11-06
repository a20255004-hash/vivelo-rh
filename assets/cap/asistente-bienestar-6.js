// Asistente de Bienestar Social · Capítulo 6 · «La denuncia» · Semana 2, lunes.
// Hilo: una operaria de campo cuenta que su supervisor la hostiga. El protocolo, la confidencialidad y la represalia.
// Normas citadas:
// - Ley 27942, de Prevención y Sanción del Hostigamiento Sexual.
//   https://lpderecho.pe/ley-prevencion-sancion-hostigamiento-sexual-ley-27942/
// - D.S. 014-2019-MIMP, Reglamento de la Ley 27942 (modificado por D.S. 021-2021-MIMP): comité de intervención en
//   centros con 20 o más trabajadores; medidas de protección (cambio de lugar u horario del hostigador, restricción
//   de contacto, entre otras); reserva y confidencialidad; no revictimización; comunicación de la decisión al MTPE.
//   Las vacaciones no solicitadas a la víctima no son una medida de protección válida.
//   https://www.buk.pe/blog/ley-27942-prevencion-sancion-hostigamiento-sexual
//   https://lpderecho.pe/obligaciones-empleador-hostigamiento-sexual-laboral-sector-privado/
//   Aquí no se citan plazos en días porque las fuentes consultadas no coinciden; se explica el principio de rapidez.
// - Ley 29733: reserva de datos personales.

export const CAP = {
  n: 6, titulo: 'La denuncia', dia: 'Semana 2, lunes', foto: 'assets/3d/scenes/brujula.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes de la segunda semana. Antes de que prendas la computadora, Doña Teodora toca la puerta. Trae a una muchacha de su cuadrilla que no levanta la mirada.', boton: 'Abrir la puerta',
  kusi: 'Hoy toca escuchar sin juzgar y seguir el protocolo sin perder a la persona. ¡Con calma!',
  lead: 'Recibiste la queja de Milagros sin revictimizarla, le explicaste sus opciones, cuidaste el acta y frenaste la primera represalia.',
  reflexion: '¿Qué fue lo más difícil de escuchar hoy sin interrumpir?',
  siguiente: { n: 7, titulo: 'Las medidas', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'queja', p: 'Queja de Milagros Puicón', j: 'Bienestar · Comité de intervención', d: 0, e: 'Recién contada' },
  { id: 'proteccion', p: 'Medidas de protección', j: 'Comité de intervención', d: 0, e: 'Sin dictar' },
  { id: 'reserva', p: 'Confidencialidad del caso', j: 'Bienestar', d: 0, e: 'En riesgo' },
  { id: 'hector', p: 'Retorno de Don Héctor', j: 'Médico ocupacional', d: 0, e: 'Evaluación el miércoles' },
  { id: 'lactario', p: 'Lactario de la planta', j: 'Logística', d: 0, e: 'En adecuación' },
];

export const FUTURO = {
  queja_presentada: ['Milagros presentó su queja por escrito, acompañada por Bienestar.', 'El comité de intervención dictará medidas mañana.'],
  queja_informal: ['Le pediste a Augusto que mueva a Milagros de cuadrilla, sin queja formal.', 'Augusto querrá «arreglarlo conversando» mañana.'],
  queja_forzada: ['Presentaste la queja de Milagros sin que ella lo decidiera.', 'Milagros duda de volver a hablar contigo.'],
  acta_limpia: ['El acta de la queja no tiene careos, copias a gerencia ni vacaciones forzadas.', 'El comité trabajará sobre una base limpia.'],
  acta_careo: ['El acta propone un careo y copia a Gerencia de campo.', 'Mañana el caso llegará a Augusto antes que al comité.'],
  represalia_reportada: ['Reportaste al comité el mensaje amenazante del supervisor el mismo día.', 'Será la primera prueba de las medidas de mañana.'],
  represalia_ignorada: ['El mensaje del supervisor a Milagros quedó sin reportar hasta mañana.', 'Ella pasará la noche con miedo.'],
  milagros_acompanada: ['Milagros sabe que no está sola y qué pasa mañana.', 'Llegará a la reunión del comité.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Operario de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  milagros: { n: 'Milagros Puicón', sub: 'Operaria de campo · cuadrilla de semillero', c: '#C2185B' },
  teodora: { n: 'Teodora Ñañez', sub: 'Operaria de semillero · 41 años', c: '#8D6E63' },
  vera: { n: 'Dra. Rocío Vera', sub: 'Presidenta del comité de intervención', c: '#455A64' },
  supervisores: { n: 'Supervisores Sipán', sub: '40 participantes', c: '#386FA4' },
};

export const WSP = [
  { chat: 'grupo', t: '06:55', de: 'Nelly', txt: 'Buen lunes 💛 Hoy estoy en el comité de gerencia hasta las 11. Te dejo la oficina.' },
  { chat: 'hector', t: '08:20', de: 'Don Héctor', txt: 'Señorita, me llamaron para que el doctor de la empresa me vea el miércoles. ¿Usted va a estar?', si: 'limitacion_sabida' },
  { chat: 'supervisores', t: '11:40', de: 'Sup. Chozo', txt: '(reenviado) Registro de casos sociales.xlsx — ojo con los que tienen diagnóstico, para que sepan 👀', si: 'registro_expuesto' },
  { chat: 'supervisores', t: '11:42', de: 'Sup. Chozo', txt: '(reenviado) Resultados campaña por nombre.xlsx', si: 'resultados_entregados' },
  { chat: 'maribel', t: '13:10', de: 'Maribel', txt: 'Ya sacaron los escritorios de la oficina del 2.º piso 😍 Logística dice que el jueves está listo.', si: 'lactario_propuesta' },
  { chat: 'teodora', t: '14:25', de: 'Teodora', txt: 'Señorita en la cuadrilla ya se sabe. El ingeniero dijo delante de todos que «alguien está hablando de más».' },
  { chat: 'augusto', t: '18:30', de: 'Augusto', txt: 'Me enteré de lo de Mío. Mañana a las 7 en mi oficina. Esto se arregla conversando, no hagamos un escándalo en plena zafra.' },
];

export const CORREOS = [
  { t: '07:05', de: 'Recursos Humanos Sipán', para: 'Todo el personal', asunto: 'Recordatorio: canales de queja por hostigamiento sexual', html: '<p>Recordamos que las quejas por hostigamiento sexual pueden presentarse de forma verbal o escrita ante Recursos Humanos o ante el comité de intervención, presidido por la Dra. Rocío Vera.</p><p>Toda queja se trata con reserva. Está prohibida cualquier represalia contra quien la presente o contra los testigos.</p>' },
];

export const QUIZ = [
  { q: '¿Ante quién puede presentar Milagros su queja por hostigamiento sexual?', ops: ['Solo ante la policía', 'Ante Recursos Humanos o el comité de intervención, de forma verbal o escrita', 'Solo ante su supervisor', 'Ante el gerente de campo'], ok: 1, por: 'El reglamento de la Ley 27942 permite presentarla ante RR.HH. o el comité de intervención, verbal o por escrito.' },
  { q: '¿Cuál de estas no es una medida de protección válida?', ops: ['Restringir el contacto entre las partes', 'Cambiar de lugar u horario al denunciado', 'Darle vacaciones no solicitadas a la víctima', 'Cambiar al supervisor de la cuadrilla'], ok: 2, por: 'Alejar a la víctima con vacaciones que no pidió no elimina el riesgo y la castiga a ella.' },
  { q: 'Al escuchar una queja, ¿qué pregunta revictimiza?', ops: ['¿Qué pasó?', '¿Qué necesitas ahora para sentirte segura?', '¿Por qué no lo dijiste antes?', '¿Tienes mensajes o alguien que lo haya visto?'], ok: 2, por: 'Preguntar por qué no habló antes traslada la culpa a la víctima.' },
  { q: 'Un careo entre la víctima y el denunciado…', ops: ['Es obligatorio', 'Revictimiza y no debe proponerse', 'Lo decide el gerente', 'Acelera el caso'], ok: 1, por: 'El procedimiento se rige por la no revictimización: confrontar a la víctima con su agresor la expone otra vez.' },
  { q: 'El supervisor dice delante de la cuadrilla que «alguien habla de más». ¿Qué es?', ops: ['Un comentario sin importancia', 'Una posible represalia que debe reportarse al comité', 'Libertad de expresión', 'Un asunto de la cuadrilla'], ok: 1, por: 'Las represalias contra quien denuncia están prohibidas y deben atenderse con urgencia.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '07:10', ch: 'presencial', who: null, titulo: 'Doña Teodora toca la puerta', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Puerta de Bienestar', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Doña Teodora tiene las botas con barro de semillero y un sombrero de paja en la mano. A su lado, Milagros Puicón, 26 años, de Cutervo, con la gorra de la empresa bien bajada. ${F.has('registro_cuidado') ? '«Le dije que aquí no se cuenta nada a nadie», dice Teodora.' : '«Ella tiene miedo, señorita. Dicen que lo de Bienestar lo ven los supervisores.»'}</p><p>La oficina es abierta: Wilmer entra a cada rato por la impresora. <mark class="clave">¿Dónde y cómo la escuchas?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Llevarla a la salita del fondo, cerrar la puerta, ofrecerle agua y preguntarle si quiere que Doña Teodora se quede.',
        res: { q: null, fx: { personas: 4, confianza: 3 }, cartera: { reserva: 'Escuchada en privado' },
          out: 'Milagros asiente para que Teodora se quede. Se sienta en el borde de la silla. Tarda un minuto en hablar, y tú no llenas el silencio.', kusi: ['feliz', 'Puerta cerrada, tiempo abierto.'] } },
      { id: 'b', label: 'Atenderla en tu escritorio para no perder tiempo, bajando la voz.',
        res: { q: null, fx: { tiempo: 1, personas: -3, confianza: -2 }, cartera: { reserva: 'Conversación en oficina abierta' },
          out: 'Wilmer entra a imprimir justo cuando Milagros empieza. Ella se calla y dice: «Mejor vengo otro día». Teodora la convence de quedarse, pero ya habla a medias.', kusi: ['preocupado', 'Hay conversaciones que necesitan una puerta.'] } },
    ],
    mirada: { ve: 'Para contar algo así, una persona necesita sentir que nadie más escucha. El lugar, la puerta cerrada y el silencio sin apuro son parte del protocolo, aunque no estén escritos.' },
  },
  {
    id: 'd2', t: '07:25', ch: 'presencial', who: null, titulo: 'Lo que cuenta Milagros', banner: 'assets/esc/cerebro.webp', lugar: 'Salita de Bienestar', show: ['personas', 'etica', 'calidad'],
    body: () => `<p>Milagros habla bajito. El ingeniero Ronald Mío, supervisor de cuadrillas de campo desde hace 18 años, le escribe de noche, le hace comentarios sobre su cuerpo delante de los demás y en la camioneta le tocó la cintura. Le ofreció pasarla a riego, «que es más suave y paga mejor», si salían un día.</p><p>Cuando ella dijo que no, la mandaron al fundo más lejano. <mark class="clave">Puedes hacerle dos preguntas</mark>. Cada pregunta también comunica algo.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Milagros.',
    opts: [
      { id: 'necesita', label: '¿Qué necesitas ahora para sentirte segura?', info: '«No verlo. No subirme a su camioneta. Y que no me boten: mi contrato es de zafra y vence en enero. Mi mamá en Cutervo vive de lo que le mando.»' },
      { id: 'pruebas', label: '¿Tienes mensajes guardados o alguien vio algo?', info: 'Saca el celular: capturas de mensajes a las once de la noche. «¿Ya estás sola?», «Pórtate bien y te paso a riego». «Doña Teodora vio lo de la camioneta.»' },
      { id: 'antes', label: '¿Por qué no lo contaste antes?', info: 'Milagros se encoge. «Porque él es compadre del ingeniero Bravo… y porque pensé que era mi culpa, por reírme de sus bromas al comienzo.» Teodora te mira seria.' },
      { id: 'broma', label: '¿Estás segura de que no lo dijo en broma?', info: '«¿Ve? Por eso no quería venir.» Se le llenan los ojos. Teodora le pone la mano en el hombro y te mira como si la hubieras traicionado.' },
    ],
    res: picks => {
      const malas = picks.filter(p => p === 'antes' || p === 'broma').length;
      return {
        q: malas === 0 ? 'buena' : malas === 1 ? 'aceptable' : 'riesgosa',
        fx: { personas: malas === 0 ? 5 : -3 * malas, etica: malas === 0 ? 3 : -2, calidad: picks.includes('pruebas') ? 3 : 0 },
        flags: picks.includes('pruebas') ? ['capturas_guardadas'] : [],
        cartera: { queja: picks.includes('pruebas') ? 'Relato, capturas y una testigo' : 'Relato de Milagros' },
        out: malas === 0 ? 'Le explicas que guarde las capturas sin borrar nada. Milagros respira por primera vez desde que entró.' : 'Te das cuenta tarde: tu pregunta sonó a duda. Le dices que le crees y que no es su culpa. Ella asiente, pero ya no te mira.',
        pro: { ok: 'Preguntas por lo que necesita y por lo que puede probar, sin poner en duda su relato.', risk: '«¿Por qué no lo dijiste antes?» y «¿seguro que no fue broma?» trasladan la culpa a la víctima.', info: 'Que haya tardado en contarlo es lo más común: miedo al poder del otro, a perder el trabajo, a no ser creída.' },
        kusi: malas === 0 ? ['animo', 'Le creíste. Eso lo cambia todo.'] : ['triste', 'Una pregunta puede doler mucho…'],
      };
    },
    rules: [[LEY, 'El procedimiento por hostigamiento sexual se rige por la no revictimización (Ley 27942 y su reglamento).'], [BP, 'Pregunta por lo que la persona necesita y por las pruebas; nunca por qué no habló antes.']],
    mirada: {
      ve: 'En un caso de hostigamiento hay casi siempre una diferencia de poder: un supervisor con 18 años en la empresa y una operaria con contrato de zafra. Escuchar bien es no repetir, con preguntas, el mensaje que ella ya recibió: «la culpa es tuya».',
      visual: { tipo: 'balanza', a: { t: 'Lo que tiene él', items: ['18 años en Sipán', 'Decide las cuadrillas', 'Compadre del gerente'] }, b: { t: 'Lo que tiene ella', items: ['Contrato de zafra hasta enero', 'Una madre que depende de ella', 'Capturas y una testigo'] } },
    },
  },
  {
    id: 'd3', t: '08:40', ch: 'documento', who: null, titulo: 'La ruta en una hoja', banner: 'assets/3d/scenes/balanza.webp', lugar: 'Salita de Bienestar', show: ['cumplimiento', 'calidad', 'personas'],
    body: () => `<p>Milagros pregunta: «¿Y ahora qué pasa?». Doña Teodora también quiere saber. Tomas una hoja y dibujas la ruta para que ella se la lleve, sin nombres.</p><p><mark class="clave">Si ella entiende el camino, puede decidir si lo recorre</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena la ruta de atención de una queja por hostigamiento sexual.', boton: 'Darle la hoja a Milagros',
    items: [
      { id: 'escuchar', t: 'Escuchar y registrar la queja, verbal o escrita', por: 'Con sus palabras y sus pruebas.' },
      { id: 'informar', t: 'Explicarle sus derechos, el procedimiento y la reserva', por: 'Para que decida informada.' },
      { id: 'trasladar', t: 'Trasladar la queja al comité de intervención', por: 'Sin pasar por la línea de mando del denunciado.' },
      { id: 'proteger', t: 'Dictar medidas de protección', por: 'Rápido: antes de que avance la investigación.' },
      { id: 'investigar', t: 'Investigación del comité, con reserva', por: 'Escucha a ambas partes y a testigos, sin careos.' },
      { id: 'decidir', t: 'Decisión del empleador y comunicación al MTPE', por: 'Con el informe del comité.' },
      { id: 'seguir', t: 'Seguimiento a la víctima y vigilancia de represalias', por: 'El caso no termina con la sanción.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0, personas: 2 },
        cartera: { proteccion: 'Ruta explicada: protección antes de la investigación' },
        out: q === 'buena' ? 'Milagros dobla la hoja en cuatro y la guarda en el bolsillo del pecho. «O sea que primero me protegen y después averiguan.» Exacto.' : 'Doña Teodora mira la hoja y pregunta: «¿Y mientras investigan, ella sigue con él en la camioneta?». Corriges: la protección va antes.',
        pro: { ok: 'Las medidas de protección no esperan el final de la investigación.', info: 'Este es tu entregable: la ruta de atención. Que esté pegada en Bienestar y en el comedor, sin nombres.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Primero se protege, después se investiga!' : '¿Y mientras tanto?'],
      };
    },
    rules: [[LEY, 'D.S. 014-2019-MIMP: la queja se traslada al comité de intervención y se dictan medidas de protección con rapidez; la decisión se comunica al MTPE.'], [POL, 'En Sipán, el comité de intervención lo preside la Dra. Rocío Vera, de Asesoría Legal.']],
    mirada: {
      ve: 'El protocolo existe para que el caso no dependa de la buena voluntad de nadie. Para la persona que denuncia, entender la ruta es recuperar algo de control en un momento en que siente que no tiene ninguno.',
      visual: { tipo: 'flujo', titulo: 'Ruta de atención', pasos: ['Queja', 'Derechos y reserva', 'Comité', 'Protección', 'Investigación', 'Decisión y MTPE', 'Seguimiento'] },
      normas: [{ ley: 'Ley 27942 y D.S. 014-2019-MIMP', dice: 'La queja se presenta ante RR.HH. o el comité de intervención; se dictan medidas de protección; el comité investiga con reserva y el empleador decide y comunica al MTPE.', practica: 'Milagros no tiene que esperar el final del caso para dejar de subir a la camioneta de Mío.' }],
    },
  },
  {
    id: 'd4', t: '09:30', ch: 'presencial', who: null, titulo: '«Que solo me cambien de cuadrilla»', banner: 'assets/foto/entrevista.webp', lugar: 'Salita de Bienestar', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Milagros mira la hoja y se asusta. «¿Comité? ¿Investigación? Yo no quiero problemas, señorita. ${F.has('capturas_guardadas') ? 'Le doy las capturas, pero' : 'Solo'} quiero que me cambien de cuadrilla. Si esto se sabe, en enero no me renuevan.»</p><p>Doña Teodora niega con la cabeza: «Si no lo paras, lo va a hacer con otra». <mark class="clave">La decisión es de Milagros, pero la empresa ya lo sabe</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que el cambio de cuadrilla puede pedirse como medida de protección dentro de una queja, que hay reserva y está prohibida la represalia, y que tú la acompañas. Darle tiempo para decidir hoy.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4, tiempo: -2 }, flags: ['queja_presentada'], cartera: { queja: 'Queja escrita presentada, acompañada por Bienestar', proteccion: 'Pedido: no subir a la camioneta de Mío; cambio del supervisor, no de ella' },
          out: 'Milagros sale a tomar aire con Teodora. Vuelve a los veinte minutos: «Ya. Pero que no me cambien a mí: que lo cambien a él». La ayudas a escribir su queja con sus palabras.',
          pro: { ok: 'Le das información completa y respetas su ritmo. Y le muestras que pedir protección no la deja más expuesta.', risk: 'Ahora el caso es formal: lo que pase mañana con Augusto pondrá a prueba todo.', info: 'Si se cambia a la víctima en vez del denunciado, el mensaje para todos es que denunciar castiga.' },
          kusi: ['animo', 'Decidió ella, sabiendo todo.'] } },
      { id: 'b', label: 'Respetar lo que pide y resolverlo rápido: pedirle a Augusto que la mueva a otra cuadrilla, sin queja formal.',
        res: { q: 'riesgosa', fx: { personas: 1, cumplimiento: -5, etica: -3 }, flags: ['queja_informal'], cartera: { queja: 'Sin queja; pedido informal a Augusto', proteccion: 'Ninguna formal' },
          out: 'Augusto pregunta «¿por qué?» y tienes que contarle. A la media hora ya sabe el nombre del supervisor. Milagros es la que cambia de cuadrilla. Mío se queda con la suya, y con otras cinco operarias.',
          pro: { ok: 'Respetas su miedo.', risk: 'Sin queja no hay medidas de protección, ni investigación, ni prohibición de represalias que se pueda hacer valer. Y la que se mueve es ella.' },
          kusi: ['preocupado', 'La movieron a ella… y él sigue ahí.'] } },
      { id: 'c', label: 'Decirle que, ahora que lo sabes, estás obligada a presentar la queja tú, y llevarla al comité esta misma mañana.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -4, confianza: -2 }, flags: ['queja_forzada'], cartera: { queja: 'Llevada al comité sin decisión de Milagros' },
          out: 'El comité recibe el caso. Pero Milagros se va callada, sintiendo que otra persona volvió a decidir por ella. No contesta tu WhatsApp de la tarde.',
          pro: { ok: 'Activas el protocolo.', risk: 'Actuar sin explicarle ni darle un momento para decidir reproduce justo lo que vivió: que otro decida sobre ella.', info: 'Activar el procedimiento y acompañar a la persona no son opuestos: se pueden hacer juntos.' },
          kusi: ['pensando', 'Bien el protocolo… ¿y ella?'] } },
    ],
    rules: [[LEY, 'Ley 27942: están prohibidas las represalias contra quien presenta una queja y contra los testigos.'], [BP, 'Las medidas de protección se dirigen a alejar al denunciado, no a mover a la víctima.']],
    mirada: {
      ve: 'Este es el dilema más difícil del puesto: la víctima teme perder su trabajo y pide una salida silenciosa; la salida silenciosa suele dejar al hostigador en su sitio. Bienestar no decide por ella, pero tampoco la deja decidir sin saber.',
      visual: { tipo: 'cambio', titulo: 'Quién se mueve', pares: [['Cambiar a Milagros de cuadrilla', 'Cambiar de cuadrilla o de funciones al supervisor'], ['Arreglo de palabra con el gerente', 'Queja con reserva ante el comité'], ['«No quiero problemas»', '«No me tienen que botar por esto»']] },
    },
  },
  {
    id: 'd5', t: '11:15', ch: 'documento', who: null, titulo: 'El acta', banner: 'assets/3d/scenes/boleta.webp', lugar: 'Oficina de Bienestar', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>${F.has('queja_informal') ? 'Aunque no hubo queja formal, la Dra. Vera te pide que registres lo que te contaron.' : 'La Dra. Vera, presidenta del comité, te manda la plantilla de acta de recepción que usa Asesoría Legal.'} La llenó un practicante de RR.HH. con lo que le dictaste por teléfono. Antes de firmarla, la lees completa.</p><p><mark class="clave">Lo que diga el acta guía todo lo que viene</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debe quedar en el acta.',
    doc: { t: 'Acta de recepción de queja · Reservado', sub: 'Plantilla de Asesoría Legal, llenada por el practicante' },
    lines: [
      { id: 'hechos', t: 'Hechos relatados por la trabajadora, con sus palabras, fechas aproximadas y lugares.' },
      { id: 'pruebas', t: 'Pruebas ofrecidas: capturas de mensajes y una testigo.' },
      { id: 'careo', t: 'Se sugiere un careo entre las partes para aclarar versiones.', bad: LEY, why: 'Confrontar a la víctima con el denunciado la revictimiza. El comité escucha a cada uno por separado.' },
      { id: 'vacaciones', t: 'Medida sugerida: otorgarle vacaciones a la trabajadora mientras dure la investigación.', bad: LEY, why: 'Las vacaciones no solicitadas alejan a la víctima y no eliminan el riesgo: no es una medida de protección válida.' },
      { id: 'copia', t: 'Copia: Gerencia de campo (Ing. Augusto Bravo), para su conocimiento.', bad: BP, why: 'El caso es reservado y Augusto es compadre del denunciado. Solo deben conocerlo quienes intervienen en el procedimiento.' },
      { id: 'provoco', t: 'Observación: la trabajadora reconoce que al inicio se reía de las bromas.', bad: BP, why: 'Insinúa que ella provocó la situación. No es un hecho relevante: el hostigamiento se define por la conducta no deseada.' },
      { id: 'medida', t: 'Medida pedida: que no comparta camioneta ni cuadrilla con el supervisor; que se cambie a él, no a ella.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const limpia = !missLey && hitsBp >= 2;
      return {
        q: limpia ? 'buena' : missLey ? 'riesgosa' : 'aceptable',
        out: limpia ? 'Tachas cuatro líneas, se lo explicas al practicante sin regañarlo y firmas el acta corregida. La Dra. Vera responde: «Así se recibe una queja».' : missLey ? 'El acta sale con el careo y las vacaciones. El comité las lee como punto de partida.' : 'Sacas el careo y las vacaciones, pero la copia a Augusto se va con el acta.',
        flags: [limpia ? 'acta_limpia' : 'acta_careo'],
        cartera: { reserva: limpia ? 'Acta reservada, solo para el comité' : 'Acta con copias o sugerencias indebidas' },
        pro: { ok: 'Un acta limpia protege a la víctima y también a la empresa en una inspección.', risk: 'Una sola línea —un careo, una copia, un «se reía»— puede torcer la investigación.', info: 'La plantilla se puede corregir para siempre: pídele a Asesoría Legal quitar esas sugerencias del formato.' },
        kusi: limpia ? ['celebra', '¡Acta sin trampas!'] : ['indignado', '¿Vacaciones para ella?'],
      };
    },
    rules: [[LEY, 'D.S. 014-2019-MIMP: reserva, no revictimización y medidas de protección que no perjudiquen a la víctima.']],
    mirada: {
      ve: 'Las plantillas heredadas a veces traen malas prácticas escondidas: el careo, las vacaciones para «que descanse», la copia al gerente. Leer el acta completa antes de firmar es parte del trabajo.',
      visual: { tipo: 'embudo', titulo: 'Quién conoce el acta', niveles: [['Comité de intervención', 3], ['Bienestar, que acompaña', 1], ['Gerencia de campo', 0]] },
    },
  },
  {
    id: 'd6', t: '14:40', ch: 'llamada', who: null, titulo: '«Alguien habla de más»', banner: 'assets/foto2/grito.webp', lugar: 'Oficina de Bienestar', show: ['personas', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>El mensaje de Doña Teodora te deja fría. ${F.has('registro_expuesto') || F.has('resultados_entregados') ? 'Y en el grupo de supervisores alguien acaba de reenviar un archivo con datos de salud de la gente: la confianza en Bienestar está en el piso.' : 'Nadie en Bienestar contó nada. Pero en una cuadrilla todo se ve: quién llegó tarde, quién lloró en el bus.'}</p><p>Haces tres llamadas, con la puerta cerrada. <mark class="clave">La primera represalia suele llegar el mismo día</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Milagros Puicón', 'Contesta en voz baja, desde el fundo', '«Me escribió hace una hora: “¿Qué andas diciendo? Piensa en tu contrato”. Ya lo guardé. Tengo miedo de volver en su camioneta.»'],
      ['Doña Teodora Ñañez', 'Contesta con viento de fondo', '«Lo dijo en la formación, delante de las veinte. Y a mí me cambió de surco. Yo no me voy a callar, señorita, pero cuídela a ella.»'],
      ['Dra. Rocío Vera · comité de intervención', 'Contesta entre reuniones', '«Mándame la captura ahora. Mañana a primera hora el comité dicta medidas. Pero si hoy sale del fundo en su camioneta, eso hay que resolverlo hoy.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué haces ahora?',
    choices: [
      { id: 'a', label: 'Enviar la captura a la Dra. Vera, pedir a Logística que Milagros y Teodora vuelvan hoy en el bus de personal y no en la camioneta de Mío, y anotar el cambio de surco de Teodora como posible represalia contra una testigo.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 5, tiempo: -2 }, flags: ['represalia_reportada'], cartera: { proteccion: 'Retorno en bus hoy; represalias reportadas al comité' },
          out: 'Logística no pregunta: «Dos más en el bus de las 5, ya». La Dra. Vera responde con un pulgar y un «recibido, va al expediente». A las 5:20 Milagros te escribe desde el bus: «Ya voy en camino».',
          pro: { ok: 'Resuelves el riesgo de hoy sin esperar al comité de mañana, y registras la represalia contra la víctima y la testigo.', info: 'Cuidar a los testigos es parte de cuidar el caso: si Teodora se calla, el caso se debilita.' },
          kusi: ['celebra', 'Hoy vuelve segura. ¡Bien hecho!'] } },
      { id: 'b', label: 'Llamar al Ing. Mío para pedirle, con calma, que deje en paz a Milagros mientras el comité ve el caso.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -4, confianza: -2 }, flags: ['represalia_ignorada'], cartera: { proteccion: 'Bienestar habló con el denunciado' },
          out: 'Mío te escucha y responde, muy educado: «Señorita, esa chica es una mentirosa. Pero tranquila, no le voy a hablar». Diez minutos después Milagros recibe otro mensaje: «Así que fuiste a Bienestar».',
          pro: { ok: 'Quieres frenarlo.', risk: 'Hablar con el denunciado no te toca y le confirma quién denunció. Eso es tarea del comité, con reglas.' },
          kusi: ['indignado', '¡Ahora sabe que fue a Bienestar!'] } },
      { id: 'c', label: 'Guardar la captura y llevarla mañana al comité: la Dra. Vera ya dijo que mañana se dictan las medidas.',
        res: { q: 'aceptable', fx: { tiempo: 1, personas: -3 }, flags: ['represalia_ignorada'], cartera: { proteccion: 'Captura para mañana' },
          out: 'A las 5 Milagros sube a la camioneta de Mío porque no hay otra forma de volver. Va callada todo el camino, abrazada a su mochila. No pasa nada. Esta vez.',
          pro: { ok: 'Respetas el procedimiento.', risk: 'El procedimiento no prohíbe resolver el riesgo de hoy. Una noche puede ser demasiado.' },
          kusi: ['preocupado', 'Mañana era tarde para el viaje de hoy.'] } },
    ],
    rules: [[LEY, 'Ley 27942: están prohibidas las represalias contra quien denuncia y contra los testigos.'], [BP, 'Bienestar no habla con el denunciado: canaliza al comité y resuelve el riesgo inmediato.']],
    mirada: {
      ve: 'La represalia casi nunca dice su nombre: es un cambio de surco, una frase en la formación, un mensaje que recuerda el contrato. Reconocerla y reportarla el mismo día es lo que hace que denunciar no salga más caro que callar.',
      visual: { tipo: 'linea', titulo: 'El mismo día', hitos: [['7:10', 'Milagros cuenta lo que pasa'], ['9:50', 'Decide presentar su queja'], ['13:40', '«¿Qué andas diciendo?»'], ['14:25', '«Alguien habla de más»'], ['17:00', 'El viaje de regreso']] },
    },
  },
  {
    id: 'd7', t: '20:15', ch: 'whatsapp', who: null, titulo: 'Para Milagros', banner: 'assets/3d/scenes/oficina.webp', lugar: 'Tu cuarto en Chiclayo', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Ya en tu casa, con los pies sobre una silla y un lonche frío, lees el mensaje de Augusto: «Mañana a las 7 en mi oficina. Esto se arregla conversando». ${F.has('queja_forzada') ? 'Milagros no ha respondido nada en toda la tarde.' : 'Milagros te escribió: «¿Mañana qué va a pasar?».'}</p><p>Vive en el campamento de la empresa, en un cuarto compartido. <mark class="clave">Lo que le escribas esta noche es lo que leerá antes de dormir</mark>.</p>`,
    type: 'compose', enviaA: 'milagros', para: 'Para: Milagros Puicón', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo abres', ops: [
        { id: 'a1', t: 'Milagros, hoy hiciste algo muy valiente y no estás sola.', ok: true, por: 'Reconoce lo que hizo, sin exagerar.' },
        { id: 'a2', t: 'Milagros, no te preocupes, todo va a salir bien.', ok: false, por: 'Promete lo que no controlas.' },
      ] },
      { id: 'manana', t: 'Qué pasa mañana', ops: [
        { id: 'm1', t: 'Mañana el comité revisa tu caso para dictar medidas. Tú no tienes que ver al ingeniero.', ok: true, por: 'Concreto y la tranquiliza sobre lo que más teme.' },
        { id: 'm2', t: 'Mañana el gerente de campo quiere conversar del tema con todos.', ok: false, por: 'La asusta y anuncia algo que no debería ocurrir así.' },
      ] },
      { id: 'si', t: 'Si pasa algo', ops: [
        { id: 's1', t: 'Si te vuelve a escribir, no respondas, guárdalo y avísame.', ok: true, por: 'Una instrucción clara.' },
        { id: 's2', t: 'Si te escribe, respóndele que ya lo denunciaste para que te deje.', ok: false, por: 'Puede escalar el conflicto.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Mañana a las 7:30 te espero en Bienestar. Descansa.', ok: true, por: 'Una cita y un cuidado.' },
        { id: 'c2', t: 'Cualquier cosa, me escribes.', ok: null, por: 'Amable, pero sin un próximo paso.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'm1', 's1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 3 : -1 }, rel: { nelly: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['milagros_acompanada'] : [],
        cartera: { queja: q === 'buena' ? 'Milagros acompañada; cita a las 7:30' : 'Milagros con dudas para mañana' },
        out: q === 'buena' ? 'A los dos minutos llega: «Gracias señorita. Ahí estaré». Apagas el celular. Mañana a las 7 te espera Augusto.' : sel.manana === 'm2' ? 'Milagros responde: «¿Con todos? Yo no voy a ir». Pasas la noche pensando cómo arreglarlo.' : 'Milagros deja el mensaje en visto. Mañana sabrás si llega.',
        pro: { ok: 'Le dices qué pasará, qué no tendrá que vivir y qué hacer si algo pasa, sin promesas vacías.', info: 'Avísale a Nelly de la cita con Augusto antes de las 7: no vayas sola.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Un mensaje que acompaña de verdad.' : '¿La tranquilizó o la asustó?'],
      };
    },
    rules: [[BP, 'Después de una queja, da a la persona información concreta del siguiente paso y una forma de pedir ayuda.']],
    mirada: {
      ve: 'La noche después de denunciar suele ser la más larga. Un mensaje corto, concreto y sin promesas vacías ayuda a que la persona vuelva al día siguiente.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje para dormir más tranquila', txt: 'Milagros, hoy hiciste algo muy valiente y no estás sola. Mañana el comité revisa tu caso para dictar medidas. Tú no tienes que ver al ingeniero. Si te vuelve a escribir, no respondas, guárdalo y avísame. Mañana a las 7:30 te espero en Bienestar. Descansa.' },
    },
  },
];
