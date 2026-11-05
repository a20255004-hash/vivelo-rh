// Analista de Relaciones Laborales · Capítulo 4 · «La primera reunión» · Semana 1, jueves.
// Hilo de las dos semanas: primera reunión de trato directo con el sindicato; el caso de Marcos Huamán sigue su carril.
// Normas citadas:
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): art. 49 (la designación de los representantes
//   de los trabajadores consta en el pliego), art. 54 (deber de negociar de buena fe y de abstenerse de acciones que
//   resulten lesivas a la contraria), art. 55 (información económica y financiera a pedido de los trabajadores) y el
//   inicio del trato directo dentro de los diez días calendario de recibido el pliego (cap. 1).
//   Texto: https://lpderecho.pe/texto-unico-ordenado-ley-relaciones-colectivas-trabajo-decreto-supremo-010-2003-tr-actualizado/
//   Buena fe: https://lpderecho.pe/deber-negociacion-colectiva-buena-fe/
//   Versión oficial: https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=46
// - TUO del D. Leg. 728 (D.S. 003-97-TR), art. 31: el caso disciplinario sigue su propio procedimiento (caps. 2 y 3).

export const CAP = {
  n: 4, titulo: 'La primera reunión', dia: 'Semana 1, jueves', foto: 'assets/3d/scenes/reunion.webp',
  lugar: 'Conservas del Pacífico · Sala de reuniones de la planta',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves, tres días después del pliego y dentro del plazo. A las 10:00 empieza el trato directo. A las 9:45, en la puerta de la sala, no hay tres dirigentes: hay veinte trabajadores con polos blancos.', boton: 'Preparar la reunión',
  kusi: 'Hoy no se negocia el bono: se negocia cómo vamos a negociar. ¡Respira hondo!',
  lead: 'Llegaste preparada, ordenaste la sala sin echar a nadie, escuchaste las prioridades del sindicato, reconociste lo que la empresa debía y dejaste por escrito las reglas de la negociación.',
  reflexion: '¿Qué frase de Lucho te quedó dando vueltas en el bus de regreso?',
  siguiente: { n: 5, titulo: 'El descargo', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'memoria', p: 'Ayuda memoria de negociación', j: 'Arturo · Comisión de la empresa', d: 0, e: 'Por preparar' },
  { id: 'sala', p: 'Instalación del trato directo', j: 'Ambas comisiones', d: 0, e: 'Hoy 10:00' },
  { id: 'metodo', p: 'Metodología y acta de instalación', j: 'Valeria · Lucho', d: 0, e: 'Sin acordar' },
  { id: 'info', p: 'Información económica para el sindicato', j: 'Finanzas · Patricia Salcedo', d: 0, e: 'No pedida aún' },
  { id: 'caso', p: 'Caso Marcos Huamán', j: 'Relaciones Laborales', d: 0, e: 'Descargo vence el martes' },
];

export const FUTURO = {
  memoria_lista: ['Llegaste a la mesa con el convenio anterior revisado y una propuesta de método.', 'La comisión te encarga el seguimiento de las actas. Capítulo 9.'],
  sala_ordenada: ['La comisión negoció en la mesa y la base escuchó el acta al final.', 'La base confía un poco más en la mesa. Capítulo 9.'],
  sala_asamblea: ['La primera reunión se volvió una asamblea de veinte personas.', 'Las siguientes sesiones arrancan igual. Capítulo 7.'],
  vigilancia_llamada: ['Llamaste a vigilancia para despejar la puerta de la sala.', 'El sindicato lo incluirá en su denuncia ante SUNAFIL. Capítulo 7.'],
  prioridades_claras: ['Sabes que para la base pesan el bono, la movilidad de madrugada y las horas de la caballa.', 'Las horas de la caballa vuelven en el capítulo 6.'],
  incumplimiento_reconocido: ['Reconociste en la mesa lo que la empresa no cumplió.', 'Lucho lo recordará cuando haya que ceder. Capítulo 9.'],
  oferta_sin_mandato: ['Ofreciste algo en la mesa sin mandato de la comisión.', 'La gerencia te lo reclamará y el sindicato lo dará por ganado. Capítulo 9.'],
  metodo_acordado: ['El acta de instalación fija reglas, fechas y el caso de Marcos fuera de la mesa.', 'Valeria la citará al redactar el acta final. Capítulo 9.'],
  info_comprometida: ['La empresa se comprometió a entregar la información económica en una fecha.', 'Finanzas tendrá que cumplir. Capítulo 6.'],
  aviso_neutral: ['El aviso al personal repitió lo que dice el acta.', 'Nadie pudo decir que la empresa contó otra versión. Capítulo 9.'],
  aviso_ataque: ['El aviso al personal contradijo el acta o descalificó al sindicato.', 'Lucho pedirá que los avisos se redacten en conjunto. Capítulo 9.'],
  bono_cierre_sugerido: ['Recomendaste ofrecer un bono de cierre antes de revisar las horas.', 'El gerente lo tendrá en la cabeza cuando aparezcan las horas sin pagar. Capítulo 6.'],
  gerencia_informada: ['La gerencia recibió un resumen sin promesas y con el riesgo de las horas extra.', 'El gerente pedirá revisar las horas antes de que alguien más lo haga. Capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  comunicados: { n: 'Conservas del Pacífico · Avisos', sub: 'Grupo informativo del personal · 412 miembros', c: '#1F5F8B' },
  patricia: { n: 'Patricia Salcedo', sub: 'Jefa de Finanzas', c: '#6B4E9B' },
};

export const WSP = [
  { chat: 'grupo', t: '07:15', de: 'Valeria', txt: 'Llego a las 9:30 desde Trujillo. El bus viene lento por Virú. Que nadie ofrezca nada hasta que yo llegue, por favor.' },
  { chat: 'grupo', t: '07:20', de: 'Arturo', txt: 'Ojo: ayer el video de Marcos salió en «Chimbote al día» con 30 mil vistas. Lucho lo va a sacar.', si: 'video_circula' },
  { chat: 'gladys', t: '08:30', de: 'Gladys', txt: 'Hoy me falta media línea 2 porque se van a tu reunión. Que sea corta.' },
  { chat: 'lucho', t: '09:10', de: 'Lucho', txt: 'Llegamos 9:45. Vienen compañeros a acompañar, no se asuste.', si: 'lucho_respeto' },
  { chat: 'lucho', t: '09:10', de: 'Lucho', txt: 'Ahí estaremos. Todos.', no: 'lucho_respeto' },
  { chat: 'patricia', t: '14:20', de: 'Patricia', txt: '¿Me comprometieron a entregar estados financieros antes del martes? Avísenme antes, por favor 😅 Igual lo saco.', si: 'info_comprometida' },
  { chat: 'lucho', t: '17:05', de: 'Lucho', txt: 'La base quedó tranquila con el acta. El martes 10:00 seguimos. Y Marcos está escribiendo su descargo, por el otro lado.', si: 'metodo_acordado' },
  { chat: 'arturo', t: '18:40', de: 'Arturo', txt: 'El gerente leyó tu resumen. Me preguntó por las horas de la caballa. Eso lo vemos la próxima semana.', si: 'gerencia_informada' },
];

export const CORREOS = [
  { t: '07:00', de: 'Dr. Arturo Benavides', para: 'Comisión negociadora de la empresa', asunto: 'Trato directo · hoy 10:00', html: '<p>Comisión de la empresa: Dr. Benavides, Patricia Salcedo (Finanzas), Valeria Castro (asesora) y nuestra analista de Relaciones Laborales, que llevará el acta.</p><p>Objetivo de hoy: instalar el trato directo y acordar la metodología. No se discuten montos.</p>' },
  { t: '12:50', de: 'Valeria Castro · Abogada laboralista', para: 'Comisión negociadora de la empresa', asunto: 'Recordatorio: buena fe', html: '<p>El TUO de la Ley de Relaciones Colectivas de Trabajo (art. 54) obliga a las partes a negociar de buena fe y a abstenerse de toda acción que pueda resultar lesiva a la contraria. Eso incluye comunicados, presiones y cualquier decisión sobre los afiliados mientras dure la negociación.</p><p>Y si piden información económica (art. 55), hay que darla.</p><p>Valeria</p>' },
];

export const QUIZ = [
  { q: 'Durante la negociación colectiva, las partes deben…', ops: ['Negociar de buena fe y abstenerse de acciones lesivas a la contraria', 'Hablar solo por abogados', 'Firmar en la primera reunión', 'Suspender toda comunicación'], ok: 0, por: 'El art. 54 del TUO de la LRCT establece el deber de negociar de buena fe.' },
  { q: '¿Quiénes representan a los trabajadores en la mesa?', ops: ['Cualquier trabajador que llegue', 'Los representantes designados en el pliego de reclamos', 'Solo el secretario general', 'Los que elija la empresa'], ok: 1, por: 'La designación de los representantes de los trabajadores consta en el pliego (art. 49 del TUO de la LRCT).' },
  { q: 'En la primera reunión de trato directo, lo más útil es…', ops: ['Responder los 18 pedidos', 'Acordar la metodología: frecuencia, actas, orden de los puntos e información', 'Ofrecer un bono para calmar', 'Leer el comunicado de la gerencia'], ok: 1, por: 'Acordar reglas antes de discutir montos ordena la negociación y baja la tensión.' },
  { q: 'Si el sindicato pide que el caso disciplinario de un afiliado se negocie en la mesa…', ops: ['Se acepta y se canjea por otro punto', 'Se explica que sigue su propio procedimiento, con sus derechos de defensa', 'Se suspende la negociación', 'Se despide al trabajador antes'], ok: 1, por: 'Mezclar el caso con la negociación lo convierte en moneda de cambio; el procedimiento disciplinario tiene sus propias garantías.' },
  { q: 'El analista ofrece en la mesa un monto que la comisión no aprobó. Eso…', ops: ['Acelera el acuerdo sin riesgo', 'Crea una expectativa que el sindicato dará por ganada', 'Es obligatorio si hay tensión', 'No cuenta si no está en el acta'], ok: 1, por: 'En una negociación, lo dicho en la mesa se vuelve compromiso, aunque no estuviera aprobado.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '07:40', ch: 'documento', who: 'arturo', titulo: 'La ayuda memoria', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'tiempo', 'etica'],
    body: (n, F) => `<p>Pan con pejerrey y café pasado del comedor. El doctor llegó a las siete, con corbata nueva. ${F.has('turno_cambiado') ? 'Lucho viene directo del turno noche: no ha dormido.' : 'Afuera, los gallinazos ya están sobre el techo de la planta.'}</p><p>«Una hoja para la comisión. <mark class="clave">Dos cosas, no más</mark>: lo que llevemos de más, alguien lo va a leer en voz alta.»</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos piezas de tu ayuda memoria.', boton: 'Imprimir la ayuda memoria', resumen: 'Llevas',
    cols: ['Pieza', 'Para qué sirve'],
    rows: [
      { id: 'convenio', cells: ['Qué se cumplió y qué no del convenio anterior (uniformes y movilidad de madrugada)', 'Saber qué nos van a reclamar primero'] },
      { id: 'metodo', cells: ['Una propuesta de metodología: frecuencia, actas, orden de los puntos', 'Lo único que se decide hoy'] },
      { id: 'costeo', cells: ['El costeo preliminar de los pedidos económicos', 'Tener los números a mano'] },
      { id: 'lista', cells: ['La lista de los «trabajadores más conflictivos» que pidió el gerente', 'Saber a quién vigilar'] },
      { id: 'guion', cells: ['Un guion para responder «no» a cada pedido', 'No dejarse llevar'] },
    ],
    score: { convenio: 3, metodo: 3, costeo: 1, lista: -5, guion: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.includes('lista') ? -6 : 2 }, rel: { arturo: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['memoria_lista'] : [],
        cartera: { memoria: q === 'buena' ? 'Convenio anterior + propuesta de método' : 'Hoja con vacíos' },
        out: picks.includes('lista') ? 'El doctor ve la lista y la parte en dos: «Si esto se cae de un fólder, nos denuncian por discriminación antes del almuerzo».' : picks.includes('costeo') ? 'El doctor tacha el costeo: «Los números hoy no. Si los ven, empezamos a discutir montos antes de tener reglas».' : 'El doctor lee la hoja de pie. «Memoria y método. Así entramos.»',
        pro: { ok: 'La primera reunión se gana sabiendo qué falló antes y con una propuesta de reglas.', risk: 'Una lista de «conflictivos» es exactamente lo que la libertad sindical prohíbe.', info: 'Los números se usan cuando se discuta cada punto, no el día de la instalación.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Memoria y método!' : 'Ojo con lo que llevas a la mesa…'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT (D.S. 010-2003-TR): protege la libertad sindical; fichar a «conflictivos» puede ser un acto antisindical.'], [BP, 'Lleva a la mesa solo lo que estás dispuesto a que la otra parte lea.']],
    mirada: {
      ve: 'Una ayuda memoria no es un arsenal: es una hoja que ayuda a escuchar y a proponer. Lo que se lleva a la mesa revela la intención con la que se negocia.',
      visual: { tipo: 'matriz', x: 'Riesgo si lo leen', y: 'Utilidad hoy', cuadrantes: ['Útil y sin riesgo', 'Útil pero riesgoso', 'Poco útil', 'No lo lleves'], items: [['Convenio anterior', .2, .9], ['Metodología', .1, .85], ['Costeo', .6, .4], ['Guion del «no»', .7, .2], ['Lista de conflictivos', .95, .05]] },
    },
  },
  {
    id: 'h2', t: '09:50', ch: 'presencial', who: 'lucho', titulo: 'Veinte en la puerta', banner: 'assets/foto2/grito.webp', lugar: 'Puerta de la sala de reuniones', show: ['confianza', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Veinte trabajadores llenan el pasillo. ${F.has('comunicado_ataque') ? 'Uno levanta el papelógrafo del comedor: «¿Imposibles? Paguen las horas».' : F.has('pliego_rechazado') ? 'Alguien dice fuerte: «Esta vez que no nos cierren la puerta».' : 'Doña Teodora Lázaro, 58 años y treinta en envasado, reparte caramelos de limón.'}</p><p>Lucho se planta en la entrada: «<mark class="clave">Entramos todos o no entra nadie</mark>. La base quiere ver con sus ojos». Valeria te mira desde adentro. El doctor está en el baño.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle que en la mesa se sienten los representantes designados en el pliego, que la base espere en el comedor con café, y que al terminar la comisión del sindicato y tú les lean juntos el acta.',
        res: { q: 'buena', fx: { confianza: 4, personas: 3, cumplimiento: 3 }, rel: { lucho: 1 }, flags: ['sala_ordenada'], cartera: { sala: 'Instalada 10:12 con las dos comisiones' },
          out: 'Lucho consulta con la mirada a doña Teodora. Ella dice: «Que nos lean el acta ellos y ustedes, juntos». Lucho asiente. La base baja al comedor, despacio, cantando.',
          pro: { ok: 'Respetas la representación del pliego y no escondes nada a la base.', risk: 'Te comprometes a leer el acta en el comedor: tiene que valer la pena.', info: 'Que la lectura sea conjunta evita dos versiones de la misma reunión.' },
          kusi: ['celebra', '¡Mesa ordenada y puertas abiertas!'] } },
      { id: 'b', label: 'Dejar entrar a los veinte: empezar con una pelea en la puerta es peor que una sala llena, y la base tiene derecho a ver cómo se negocia.',
        res: { q: 'aceptable', fx: { confianza: 2, cumplimiento: -2, tiempo: -3 }, rel: { lucho: 1 }, flags: ['sala_asamblea'], cartera: { sala: 'Instalada con 24 personas en la sala' },
          out: 'La sala para doce recibe a veinticuatro. Cada intervención de Lucho termina en aplausos. A las 12:30 todavía no se ha hablado de metodología.',
          pro: { ok: 'Evitas el choque y muestras apertura.', risk: 'Con la base en la sala, cada dirigente habla para la tribuna y nadie puede ceder sin parecer que se vende.' },
          kusi: ['pensando', 'Abierto… pero así nadie negocia.'] } },
      { id: 'c', label: 'Pedirle a vigilancia que despeje el pasillo: la reunión es entre comisiones y no se puede empezar bajo presión.',
        res: { q: 'riesgosa', fx: { confianza: -6, personas: -4, etica: -2 }, rel: { lucho: -1 }, flags: ['vigilancia_llamada'], cartera: { sala: 'Instalada a las 11:05, con tensión' },
          out: 'Dos vigilantes llegan con sus radios. Alguien graba. Lucho levanta la voz: «¡Así nos reciben!». La reunión empieza una hora tarde y en silencio.',
          pro: { ok: 'Proteges el formato de la reunión.', risk: 'Usar a vigilancia contra trabajadores que esperan pacíficamente puede leerse como intimidación, y contradice el deber de buena fe.' },
          kusi: ['indignado', '¿Vigilancia para una conversación?'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT, art. 49: la designación de los representantes de los trabajadores consta en el pliego.'], [LEY, 'TUO de la LRCT, art. 54: las partes deben negociar de buena fe y abstenerse de acciones lesivas a la contraria.']],
    mirada: {
      ve: 'La base quiere ver para creer, sobre todo si antes le fallaron. El reto no es sacarla del pasillo, sino darle una forma de saber lo que pasa sin convertir la mesa en una asamblea.',
      visual: { tipo: 'balanza', a: { t: 'Asamblea en la sala', items: ['Nadie se siente excluido', 'Discursos para la tribuna', 'Nadie puede ceder'] }, b: { t: 'Comisiones en la mesa', items: ['Se puede conversar', 'Acta leída a la base', 'Representación del pliego'] } },
    },
  },
  {
    id: 'h3', t: '10:30', ch: 'presencial', who: 'lucho', titulo: 'Lo que pesa', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de reuniones de la planta', show: ['calidad', 'confianza', 'personas'],
    body: (n, F) => `<p>Se firma la lista de asistencia. Del lado del sindicato, Lucho, doña Teodora y Jhon Rivas, mecánico de 26 años, que toma notas en un cuaderno de la universidad. ${F.has('sala_asamblea') ? 'Detrás de ellos, veinte personas de pie.' : 'Por la ventana se oye el comedor.'}</p><p>El doctor te cede la palabra. <mark class="clave">Tienes dos preguntas</mark> para entender qué pesa de verdad en este pliego.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para la comisión del sindicato.',
    opts: [
      { id: 'prioridad', label: '¿Cuáles son los tres puntos que más le importan a la base?', info: 'Lucho mira a doña Teodora. Ella responde: «El bono, la movilidad de madrugada, porque las chicas salen a las cuatro y la Panamericana es oscura, y las horas de la caballa. Que se paguen como se trabajaron».' },
      { id: 'convenio', label: '¿Qué del convenio anterior sienten que no se cumplió?', info: 'Jhon lee su cuaderno: «Uniformes: llegaron seis meses tarde y solo tallas grandes. Movilidad: duró dos meses y la cortaron sin avisar». Nadie de la empresa lo niega.' },
      { id: 'info', label: '¿Qué información necesitan para evaluar una propuesta?', info: 'Lucho: «Los estados financieros del último año. Nuestro asesor de la federación los quiere ver. Siempre nos dicen que no hay plata, pero nunca nos muestran nada».' },
      { id: 'por', label: '¿Por qué vinieron tantos compañeros hoy?', info: 'Lucho sonríe, cansado: «Porque la última vez la comisión firmó y la base dijo que nos vendimos. Esta vez quieren ver».' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('prioridad') ? 4 : 2, confianza: 2, personas: 1 },
      flags: [...(picks.includes('prioridad') ? ['prioridades_claras'] : []), ...(picks.includes('info') ? ['info_pedida'] : [])],
      cartera: { info: picks.includes('info') ? 'Piden estados financieros del último año' : 'No pedida aún' },
      out: picks.includes('prioridad') ? 'Anotas los tres puntos en el borde de tu ayuda memoria. «Las horas de la caballa» lo subrayas dos veces: te recuerda el reloj de Milagros.' : 'Anotas lo que dicen. Valeria te pasa un papelito: «Pregunta lo que pesa, no solo lo que falló».',
      kusi: ['curioso', '¡Ahora sabes qué pesa de verdad!'],
    }),
    rules: [[LEY, 'TUO de la LRCT, art. 55: a pedido de los trabajadores, el empleador debe proporcionar información sobre su situación económica y financiera.']],
    mirada: {
      ve: 'Un pliego de 18 puntos casi nunca pesa igual en todos. Preguntar qué importa de verdad y por qué desconfían permite negociar sobre intereses, no sobre posiciones.',
      visual: { tipo: 'embudo', titulo: 'Del pliego a lo que pesa', niveles: [['Pedidos del pliego', 18], ['Pedidos económicos', 7], ['Lo que pesa para la base', 3]] },
    },
  },
  {
    id: 'h4', t: '11:15', ch: 'presencial', who: 'lucho', titulo: 'Lucho habla para la tribuna', banner: 'assets/foto2/tension.webp', lugar: 'Sala de reuniones de la planta', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Lucho se pone de pie. ${F.has('bono_prometido') ? '«¡La señorita misma lo dijo el lunes en la puerta: hay bono! ¿O ya se olvidaron?».' : '«Firmaron uniformes y movilidad, y no cumplieron. ¿Por qué les vamos a creer ahora?».'} ${F.has('video_circula') || F.has('pruebas_a_lucho') ? 'Saca el celular: «Y a un compañero lo exhiben en TikTok como si fuera delincuente».' : F.has('marcos_sin_pago') || F.has('renuncia_sugerida') || F.has('carta_mezclada') ? 'Golpea la mesa: «Y a Marcos lo están tratando como si ya estuviera despedido».' : ''}</p><p>Todos te miran a ti, no al doctor. <mark class="clave">Lo que digas ahora va al acta</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer lo que es cierto, sin defenderlo ni ofrecer nada nuevo, y proponer que sea el primer punto de la agenda, con datos de ambas partes.',
        res: { q: 'buena', fx: { confianza: 5, etica: 4, personas: 2 }, rel: { lucho: 1, arturo: 0 }, flags: ['incumplimiento_reconocido'],
          out: 'Hay un silencio largo. Doña Teodora asiente. Lucho se sienta despacio: «Bueno. Que conste en el acta». El doctor te mira de reojo; Valeria, apenas, sonríe.',
          pro: { ok: 'Reconocer un incumplimiento real no es ceder: es lo que permite que te crean después.', risk: 'La gerencia puede sentir que «aceptaste culpas» en público.', info: 'Si hubo una frase tuya sin mandato, corregirla tú misma vale más que esperar a que otro la desmienta.' },
          kusi: ['animo', 'Decir «es cierto» también es negociar.'] } },
      { id: 'b', label: 'Responder que la empresa ha hecho un gran esfuerzo en un año difícil para la pesca, y que mirar atrás no ayuda a avanzar.',
        res: { q: 'aceptable', fx: { confianza: -3, etica: -1 }, rel: { lucho: -1 },
          out: 'Jhon escribe algo en su cuaderno y lo subraya. Lucho se ríe sin ganas: «Siempre es un año difícil». La mañana se va en discutir quién tiene la culpa.',
          pro: { ok: 'Defiendes la posición de la empresa y el contexto del sector es real.', risk: 'Negar lo que la otra parte sabe que es cierto es la forma más rápida de perder credibilidad en la mesa.' },
          kusi: ['pensando', 'El contexto es real, pero no responde lo que preguntó.'] } },
      { id: 'c', label: 'Calmar la sala: anunciar que la empresa entregará los uniformes pendientes en quince días y retomará la movilidad desde el lunes.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, etica: -3, confianza: 3 }, rel: { lucho: 1, arturo: -1 }, flags: ['oferta_sin_mandato'],
          out: 'Aplausos en el pasillo. El doctor se pone pálido: ni los uniformes ni la movilidad tienen presupuesto aprobado. Patricia, de Finanzas, deja de escribir.',
          pro: { ok: 'Bajas la tensión de inmediato.', risk: 'Ofrecer sin mandato, delante de todos, crea un compromiso que la comisión no aprobó y que el sindicato dará por ganado.' },
          kusi: ['preocupado', 'Eso no lo podías ofrecer… otra vez.'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT, art. 54: deber de negociar de buena fe.'], [POL, 'Solo la comisión negociadora, con mandato de la gerencia, puede hacer ofrecimientos.']],
    mirada: {
      ve: 'Cuando un dirigente habla para la tribuna, está midiendo si la empresa es capaz de decir la verdad. Reconocer lo cierto sin ofrecer lo que no tienes es el equilibrio más difícil de la mesa.',
      visual: { tipo: 'cambio', titulo: 'Tres maneras de responder', pares: [['Negar: «fue un año difícil»', 'Reconocer: «es cierto, no se cumplió»'], ['Ofrecer sin mandato', 'Proponer: «es el primer punto de la agenda»']] },
    },
  },
  {
    id: 'h5', t: '12:20', ch: 'documento', who: 'valeria', titulo: 'El acta de instalación', banner: 'assets/foto2/revisan.webp', lugar: 'Sala de reuniones de la planta', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Valeria proyecta un documento en blanco en la pared. Tú escribes; las dos comisiones leen cada palabra. ${F.has('sala_asamblea') ? 'Desde atrás, la base comenta cada frase en voz alta.' : 'Por la ventana entra el olor del almuerzo: chilcano de pescado.'}</p><p>Lucho pide que el caso de Marcos «se vea en esta mesa». <mark class="clave">El acta tiene que fijar las reglas del juego</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del acta.', boton: 'Proyectar el acta para firma',
    bloques: [
      { id: 'frecuencia', t: 'Frecuencia y forma', n: 2, ops: [
        { id: 'f1', t: 'Las comisiones se reunirán martes y jueves a las 10:00, en esta sala, hasta agotar el trato directo.', ok: true, por: 'Fechas fijas: nadie tiene que pedir reunión.' },
        { id: 'f2', t: 'Al final de cada sesión se firmará un acta con los acuerdos y los desacuerdos.', ok: true, por: 'Lo que no está en el acta, no se acordó.' },
        { id: 'f3', t: 'Las reuniones se convocarán cuando la gerencia tenga disponibilidad.', ok: false, por: 'Deja la negociación sin calendario.' },
      ] },
      { id: 'orden', t: 'Orden de los puntos', n: 1, ops: [
        { id: 'o1', t: 'Primero, los compromisos no cumplidos del convenio anterior; luego, los pedidos no económicos; al final, los económicos.', ok: true, por: 'Empezar por lo que genera desconfianza ordena el resto.' },
        { id: 'o2', t: 'Primero el bono, para sacarnos eso de encima.', ok: false, por: 'Empezar por lo más difícil sin confianza bloquea todo.' },
      ] },
      { id: 'info', t: 'Información', n: 1, ops: [
        { id: 'i1', t: 'La empresa entregará los estados financieros del último ejercicio a la comisión sindical antes de la sesión del martes.', ok: true, por: 'Cumple el art. 55 y le pone fecha.' },
        { id: 'i2', t: 'La información económica se mostrará solo si se llega a la etapa económica.', ok: false, por: 'Condicionar la información debilita la buena fe.' },
      ] },
      { id: 'marcos', t: 'El caso de Marcos', n: 1, ops: [
        { id: 'm1', t: 'Los procedimientos disciplinarios siguen su propio trámite, con respeto del derecho de defensa del trabajador y de su asesoría sindical; no forman parte de esta negociación.', ok: true, por: 'Separas los carriles y das garantías.' },
        { id: 'm2', t: 'El caso del trabajador Huamán se resolverá según el avance de la negociación.', ok: false, por: 'Convierte a Marcos en moneda de cambio.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 4, confianza: q === 'buena' ? 3 : 0 }, rel: { valeria: q === 'buena' ? 1 : 0, lucho: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['metodo_acordado', 'info_comprometida'],
        cartera: { metodo: q === 'riesgosa' ? 'Acta sin reglas claras' : 'Acta firmada: martes y jueves 10:00', info: q === 'riesgosa' ? 'Sin fecha' : 'Estados financieros antes del martes' },
        out: q === 'buena' ? 'Lucho lee el bloque de Marcos dos veces. «Respeto del derecho de defensa… y de su asesoría sindical. Ya.» Firman las dos comisiones a las 13:05.' : q === 'aceptable' ? 'Se firma, pero Jhon anota al margen: «¿antes del martes, seguro?». Valeria corrige una pieza antes de imprimir.' : 'Valeria detiene la impresión: «Así no se firma». Pierden media hora rehaciendo el acta delante del sindicato.',
        pro: { ok: 'Un acta de instalación con calendario, orden, información y carriles separados es la base de todo lo que viene.', risk: 'Si un caso disciplinario queda atado a la negociación, cualquier sanción parecerá represalia y cualquier perdón, una concesión.', info: 'Avísale hoy a Finanzas del plazo: antes del martes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Reglas claras para todos!' : 'Revisa qué reglas quedaron sueltas.'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT, art. 55: la información económica se proporciona a pedido de los trabajadores.'], [BP, 'Antes de discutir montos, acuerda por escrito la frecuencia, las actas, el orden de los puntos y la entrega de información.']],
    mirada: {
      ve: 'El acta de instalación es el contrato sobre cómo se va a negociar. Cuando hay tensión, volver a ella («esto lo acordamos el jueves») evita que cada reunión empiece de cero.',
      visual: { tipo: 'linea', titulo: 'El calendario que firmaron', hitos: [['Jueves', 'Instalación'], ['Martes', 'Convenio anterior e información económica'], ['Jueves', 'Pedidos económicos']] },
    },
  },
  {
    id: 'h6', t: '15:40', ch: 'whatsapp', who: null, titulo: 'El aviso al personal', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Oficina de Relaciones Laborales', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>${F.has('sala_ordenada') ? 'A las 13:20 leíste el acta en el comedor junto a doña Teodora. Hubo preguntas, pero nadie gritó.' : 'La reunión terminó tarde y con la garganta seca.'} Ahora el gerente quiere un aviso en el grupo de WhatsApp del personal. ${F.has('comunicado_neutral') ? 'Valeria te recuerda el comunicado del lunes: «ese tono».' : 'Dice que quiere «dejar clara la posición de la empresa».'}</p><p><mark class="clave">412 personas lo van a leer antes de la cena</mark>.</p>`,
    type: 'compose', enviaA: 'comunicados', para: 'Para: Conservas del Pacífico · Avisos (412 miembros)', boton: 'Publicar el aviso',
    prompt: 'Arma el aviso eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Qué pasó', ops: [
        { id: 'h1', t: 'Hoy se instaló el trato directo entre la comisión de la empresa y la del sindicato.', ok: true, por: 'Un hecho, sin adjetivos.' },
        { id: 'h2', t: 'Hoy, pese a la presión de un grupo de trabajadores, la empresa instaló el trato directo.', ok: false, por: 'Descalifica a la base que esperó en paz.' },
      ] },
      { id: 'acuerdo', t: 'Qué se acordó', ops: [
        { id: 'a1', t: 'Se acordó reunirse martes y jueves a las 10:00, firmar un acta en cada sesión y empezar por los compromisos del convenio anterior.', ok: true, por: 'Repite lo que dice el acta firmada.' },
        { id: 'a2', t: 'La empresa ya adelantó que el bono no será posible este año.', ok: false, por: 'Nadie dijo eso en la mesa: contradices el acta y rompes la buena fe.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Las dudas se pueden consultar con Relaciones Laborales o con la junta directiva del sindicato.', ok: true, por: 'Reconoces a las dos partes como fuente legítima.' },
        { id: 'c2', t: 'Recomendamos no dejarse llevar por rumores ni por dirigentes.', ok: false, por: 'Ataca a los representantes con los que estás negociando.' },
      ] },
    ],
    res: sel => {
      const malo = sel.acuerdo === 'a2' || sel.cierre === 'c2' || sel.hecho === 'h2';
      const q = malo ? 'riesgosa' : 'buena';
      return {
        q, fx: { etica: q === 'buena' ? 4 : -5, confianza: q === 'buena' ? 3 : -4, personas: q === 'buena' ? 2 : -3 },
        rel: { lucho: q === 'buena' ? 1 : -1 }, flags: q === 'buena' ? ['aviso_neutral'] : ['aviso_ataque'],
        out: q === 'buena' ? 'En diez minutos, el aviso tiene 300 vistos. Lucho lo reenvía al grupo del sindicato con un comentario: «Es lo que dice el acta».' : 'A los cinco minutos, Lucho te escribe: «¿Eso se acordó? Porque yo tengo un acta firmada que dice otra cosa».',
        pro: { ok: 'El aviso repite el acta: no hay dos versiones de la misma reunión.', risk: 'Un aviso que descalifica o inventa acuerdos es una acción lesiva a la contraparte en plena negociación.' },
        kusi: [q === 'buena' ? 'feliz' : 'triste', q === 'buena' ? '¡Una sola versión, la del acta!' : 'Ese aviso deshizo la mañana…'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT, art. 54: abstenerse de acciones que puedan resultar lesivas a la contraria.'], [BP, 'Durante la negociación, lo que se comunica al personal debe coincidir con el acta firmada.']],
    mirada: {
      ve: 'En una planta con WhatsApp, cada aviso de la empresa se compara al minuto con lo que cuentan los dirigentes. Si coinciden con el acta, la mesa gana autoridad; si no, la pierde.',
      visual: { tipo: 'mensaje', titulo: 'Un aviso que suma', txt: 'Hoy se instaló el trato directo entre la comisión de la empresa y la del sindicato. Se acordó reunirse martes y jueves a las 10:00, firmar un acta en cada sesión y empezar por los compromisos del convenio anterior. Las dudas se pueden consultar con Relaciones Laborales o con la junta directiva del sindicato.' },
    },
  },
  {
    id: 'h7', t: '18:00', ch: 'correo', who: null, titulo: 'El gerente pregunta', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad', 'etica'],
    mail: { from: 'Dr. Arturo Benavides', to: 'Analista de Relaciones Laborales', asunto: 'RV: ¿Cuánto ofrecemos?' },
    body: () => `<p>El gerente me reenvía esto: «¿Cuándo ofrecemos algo? Quiero cerrar la próxima semana». Prepárame la respuesta. <mark class="clave">Que sepa dónde estamos de verdad</mark>.</p><p>A. B.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Dónde estamos, qué viene y un riesgo que todavía nadie ve.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 4, etica: 2 }, rel: { arturo: 1 }, flags: ['gerencia_informada'],
          responde: 'Gerente: 1) Trato directo instalado hoy, dentro del plazo; acta firmada con reuniones martes y jueves. 2) Primero se verán los compromisos no cumplidos del convenio anterior; los montos, después. 3) Nos comprometimos a entregar los estados financieros antes del martes. 4) Riesgo: la base reclama las horas trabajadas en la semana de la caballa. El reloj muestra jornadas largas que no veo en planillas. Recomiendo revisarlas antes de ofrecer cualquier monto.',
          out: 'El doctor lo reenvía con una línea: «Coincido». A las 18:40 te escribe: «El gerente preguntó por las horas».', kusi: ['celebra', '¡Ves venir el problema antes que nadie!'] } },
      { id: 'b', label: 'Recomendar ofrecer pronto un bono de cierre para acelerar la firma.',
        res: { q: 'riesgosa', fx: { calidad: -2, etica: -2 }, flags: ['bono_cierre_sugerido'],
          responde: 'Gerente: sugiero ofrecer un bono de cierre el martes para acelerar la firma la próxima semana.',
          out: 'El gerente responde con un pulgar. Si ese bono se ofrece antes de revisar las horas, la empresa estará pagando por cerrar un problema que todavía no conoce.', kusi: ['preocupado', '¿Y si lo que pesa no es el bono?'] } },
    ],
    mirada: { ve: 'La gerencia quiere fechas y montos. Tu trabajo es decirle dónde está la negociación de verdad, incluido el riesgo que todavía no aparece en la mesa: a veces, lo que más pesa no está en el pliego.' },
  },
];
