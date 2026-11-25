// Jefe/a de Relaciones Laborales · Capítulo 2 · «La estrategia» · Semana 1, martes.
// Hilo: ayer el sindicato mayoritario comunicó una huelga indefinida desde el martes de la semana 2. Hoy se revisa el acta,
// se ponen números al conflicto y se define cuánto margen real tiene la empresa.
// Normas citadas:
// - Constitución, art. 28 (huelga regulada para que se ejerza en armonía con el interés social; fomento de la solución
//   pacífica de los conflictos) (docs/normas/txt).
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): la huelga exige requisitos previos (decisión
//   según los estatutos y por la mayoría, comunicación previa al empleador y a la Autoridad de Trabajo con el acta);
//   se explica el principio sin cifras de plazos.
//   https://elperuano.pe/noticia/286407-servicios-minimos-efectos-de-incumplir-la-normativa
// - D.S. 019-2006-TR, art. 25.12 (discriminación por actividad sindical) y 25.10 (actos que afecten la libertad sindical).
// Las cifras de la empresa (producción, costos, ofertas) son ficticias.

export const CAP = {
  n: 2, titulo: 'La estrategia', dia: 'Semana 1, martes', foto: 'assets/3d/scenes/balanza.webp',
  lugar: 'Fundición del Sur · Oficina de Relaciones Laborales',
  inicio: '07:30', fin: '19:30', cierreHora: '19:15',
  apertura: 'Martes. Dormiste cinco horas y el café de la máquina sabe a lata. Sobre tu escritorio, el acta de la asamblea del sindicato, con 512 firmas, y una nota de Silvia: «Hablemos antes de las ocho».', boton: 'Abrir el acta',
  kusi: 'Hoy toca ponerle números a la «mano dura». ¡Con datos se negocia mejor!',
  lead: 'Entendiste qué revisa la ley en una huelga, pusiste precio a cada escenario, armaste una estrategia con límites reales y ordenaste la semana para no correr detrás del conflicto.',
  reflexion: '¿Qué te costó más hoy: decirle que no a la gerencia o decirte la verdad sobre los números?',
  siguiente: { n: 3, titulo: 'El segundo sindicato', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'acta', p: 'Revisión del acta de votación', j: 'Dra. Silvia Medina', d: 0, e: '512 firmas' },
  { id: 'costos', p: 'Costo de cada escenario', j: 'Óscar Valdivia · Finanzas', d: 0, e: 'Para las 12:00' },
  { id: 'estrategia', p: 'Estrategia de negociación', j: 'Relaciones Laborales', d: 0, e: 'Para el gerente a las 17:00' },
  { id: 'mandato', p: 'Mandato del directorio', j: 'Ing. Paredes · Lima', d: 0, e: 'Oferta actual: S/ 3 diarios' },
  { id: 'supervisores', p: 'Indicaciones a la supervisión', j: 'Relaciones Laborales', d: 0, e: 'Pendiente' },
];

export const FUTURO = {
  requisitos_claros: ['Entendiste qué requisitos revisa la ley antes de una huelga.', 'Lo usarás frente a la Autoridad de Trabajo. Capítulo 8.'],
  costos_reales: ['El informe compara el costo de un día de parada con el costo anual del acuerdo.', 'El gerente lo llevará a Lima. Capítulo 9.'],
  costos_sesgados: ['El informe solo mostró el costo del pliego, sin el costo de la huelga.', 'Lima pedirá los números completos. Capítulo 9.'],
  estrategia_clara: ['Tu estrategia tiene objetivo, límites y concesiones no monetarias.', 'Será tu guía en la mesa. Capítulo 4.'],
  mandato_real: ['Conseguiste mandato hasta S/ 6 diarios y una agenda de seguridad en convertidores.', 'Lo pondrás sobre la mesa el jueves. Capítulo 4.'],
  acta_cuestionada: ['La empresa pidió a la Autoridad de Trabajo revisar la huelga y congeló la oferta.', 'Cutipa lo sabrá antes del jueves. Capítulo 4.'],
  bono_leales: ['Se aprobó un bono para quienes no se adhieran a la huelga.', 'Es un acto discriminatorio que el sindicato denunciará. Capítulos 6 y 8.'],
  supervisores_instruidos: ['La supervisión recibió reglas claras: nadie pregunta quién va a parar.', 'Te ahorra un problema el primer día de huelga. Capítulo 7.'],
  jhon_protegido: ['Mantuviste a Jhon en el equipo con reglas claras, aunque su papá es afiliado.', 'Jhon será clave con los audios. Capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  wilber: { n: 'Ing. Wilber Chambi', sub: 'Superintendente de Fundición', c: '#8A3B12' },
  oscar: { n: 'Óscar Valdivia', sub: 'Controller · Finanzas', c: '#2F6B3F' },
  supervisores: { n: 'Supervisores Fundición', sub: '14 miembros', c: '#6B5B2E' },
};

export const WSP = [
  { chat: 'sindicato', t: '07:10', de: 'Teodoro Cutipa', txt: 'La junta acepta reunirse el jueves a las 10. La huelga sigue en pie.', si: 'cutipa_puerta' },
  { chat: 'grupo', t: '07:15', de: 'Jhon', txt: 'Jefa, el video de la garita ya tiene 3 mil vistas en el Facebook «Ilo al Día». Lo comentan como amenaza.', si: 'aviso_discutido' },
  { chat: 'oscar', t: '08:20', de: 'Óscar', txt: 'Te mando el costo por día de parada al mediodía. Ojo que el horno no se cuenta como una línea de producción cualquiera.' },
  { chat: 'wilber', t: '12:45', de: 'Wilber', txt: 'Gracias por pedir mi opinión antes que la del gerente. El viernes te traigo la lista de puestos del horno.', si: 'wilber_aliado' },
  { chat: 'supervisores', t: '16:40', de: 'Supervisor Hugo Arce', txt: 'Entendido, jefa. ¿Y si un operario me cuenta solo que va a parar?', si: 'supervisores_instruidos' },
  { chat: 'gerencia', t: '19:05', de: 'Ing. Paredes', txt: 'Lima aprobó. No me hagas quedar mal el jueves.', si: 'mandato_real' },
];

export const CORREOS = [
  { t: '07:45', de: 'Dra. Silvia Medina · Asesoría Legal', para: 'Jefatura de Relaciones Laborales', asunto: 'Acta de votación: primera lectura', html: '<p>El acta tiene 512 firmas sobre unos 690 afiliados, número de DNI y la decisión de huelga indefinida. A primera vista parece seria.</p><p>Hay dos firmas repetidas y una persona que ya no trabaja aquí. No creo que cambien el resultado, pero son detalles que la gerencia va a querer usar.</p><p>Silvia</p>' },
  { t: '12:05', de: 'Óscar Valdivia · Finanzas', para: 'Jefatura de Relaciones Laborales', asunto: 'Números para el gerente', html: '<p>Te paso lo pedido (cifras internas, no para circular):</p><ul><li>Un día de fundición detenida: alrededor de S/ 4.2 millones de margen que se deja de ganar, sin contar el costo de reiniciar el horno si se enfría.</li><li>Cada S/ 1 diario de aumento para los 690 afiliados: unos S/ 248 mil al año, antes de beneficios y aportes, que lo encarecen.</li><li>Pliego: S/ 12 diarios. Oferta actual: S/ 3.</li></ul><p>Óscar</p>' },
];

export const QUIZ = [
  { q: 'Que el sindicato comunique una huelga significa que…', ops: ['Ya es ilegal', 'Empieza a revisarse si cumple los requisitos de ley', 'La empresa puede despedir a los dirigentes', 'La negociación terminó'], ok: 1, por: 'La ley exige requisitos previos (votación conforme a estatutos, comunicación previa con el acta). Comunicarla no la vuelve ilegal.' },
  { q: 'Dos firmas repetidas en un acta de 512 firmas…', ops: ['Anulan automáticamente la huelga', 'Son un detalle que conviene evaluar con calma antes de usarlo', 'Obligan a despedir a quien firmó', 'No importan nunca'], ok: 1, por: 'Lo que importa es si la decisión representa la voluntad mayoritaria según la ley y los estatutos. Usar un detalle menor como arma puede salir caro.' },
  { q: 'Un bono solo para quienes no hagan huelga es…', ops: ['Un incentivo válido', 'Un posible acto de discriminación sindical', 'Obligatorio en conflicto', 'Una medida de seguridad'], ok: 1, por: 'Premiar a quienes no ejercen un derecho colectivo es tratar distinto por la actividad sindical (D.S. 019-2006-TR, arts. 25.10 y 25.12).' },
  { q: 'Para comparar escenarios ante la gerencia conviene mostrar…', ops: ['Solo cuánto cuesta el pliego', 'El costo del acuerdo y el costo de la huelga', 'Solo el costo de la huelga', 'Ningún número'], ok: 1, por: 'La decisión es entre dos costos: el del acuerdo y el del conflicto.' },
  { q: 'Una concesión no monetaria útil en esta negociación sería…', ops: ['Despedir al dirigente', 'Retomar el monitoreo de gases en convertidores', 'Prometer un bono sin aprobación', 'Cambiar de turno a los dirigentes'], ok: 1, por: 'La seguridad en convertidores fue un pendiente de la empresa: retomarlo tiene valor para la base y no es una dádiva.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '07:50', ch: 'presencial', who: 'abogado', titulo: 'El acta, con Silvia', banner: 'assets/foto/revisa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>La Dra. Silvia Medina, 46 años, llegó de Moquegua a las seis y media, con el termo de mate de coca y el TUO subrayado en tres colores. Despliega el acta sobre tu mesa.</p><p>«Antes de que el gerente te pida “declararla ilegal”, entiende qué se revisa. <mark class="clave">Pregúntame dos cosas</mark>; luego me voy a una audiencia.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Silvia.',
    opts: [
      { id: 'req', label: '¿Qué tiene que cumplir el sindicato para que la huelga sea válida?', info: '«En resumen: que la decisión se tome como dicen sus estatutos y represente a la mayoría, y que se comunique antes al empleador y a la Autoridad de Trabajo, con el acta. Hay más detalles, pero ese es el corazón.»' },
      { id: 'quien', label: '¿Quién decide si la huelga procede: nosotros o la Autoridad?', info: '«La Autoridad de Trabajo. La empresa puede pedir que la revise y aportar pruebas, pero no puede declararla ilegal por su cuenta ni sancionar a nadie por ir a la huelga.»' },
      { id: 'firmas', label: '¿Las dos firmas repetidas nos sirven?', info: '«Son dos de 512. Si las usas para pelear la huelga, la base va a sentir que la empresa busca tecnicismos en lugar de negociar. Guárdalas, pero no construyas la estrategia sobre eso.»' },
      { id: 'efectos', label: '¿Qué pasa con los sueldos y los contratos durante la huelga?', info: '«Si la huelga es válida, se suspenden los contratos de quienes la hacen: no trabajan y no cobran esos días, pero siguen siendo trabajadores. Nadie puede ser reemplazado ni despedido por eso.»' },
    ],
    res: picks => ({
      q: null, fx: { cumplimiento: 4, calidad: 2 },
      flags: picks.includes('req') || picks.includes('quien') ? ['requisitos_claros'] : [],
      cartera: { acta: picks.includes('firmas') ? 'Parece válida; dos firmas repetidas que no cambian el resultado' : 'Primera lectura: parece seria' },
      out: 'Silvia cierra el termo y se pone el blazer. «Mi consejo: prepárate como si la huelga fuera a ocurrir. Y negocia como si pudieras evitarla.»',
      kusi: ['curioso', picks.includes('firmas') ? 'Un tecnicismo no reemplaza una estrategia…' : '¡Ahora sabes qué se revisa!'],
    }),
    rules: [[LEY, 'TUO de la LRCT (D.S. 010-2003-TR): la huelga exige requisitos previos, entre ellos la decisión mayoritaria según los estatutos y la comunicación previa al empleador y a la Autoridad de Trabajo.'], [BP, 'La empresa puede pedir la revisión, pero la decide la Autoridad de Trabajo.']],
    mirada: {
      ve: 'Cuando se anuncia una huelga, la gerencia suele preguntar primero «¿cómo la tumbamos?». La pregunta útil es otra: ¿cumple la ley? Si cumple, hay que prepararse; si no, lo dirá la Autoridad.',
      visual: { tipo: 'flujo', titulo: 'Antes de una huelga', pasos: ['Asamblea y votación', 'Acta', 'Comunicación al empleador y a la Autoridad', 'Revisión de requisitos', 'Huelga o negociación'], aqui: 3 },
    },
  },
  {
    id: 'b2', t: '12:20', ch: 'documento', who: null, titulo: 'Los números de Óscar', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>Óscar Valdivia, el controller, te manda su Excel con una pestaña que se llama «NO REENVIAR». Un día de horno parado: unos S/ 4.2 millones de margen perdido. Cada sol diario de aumento para los 690 afiliados: unos S/ 248 mil al año, antes de beneficios y aportes.</p><p>El pliego pide S/ 12 diarios; la empresa ofrece S/ 3. Tienes que escribir <mark class="clave">la frase que abrirá tu informe al gerente</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«La distancia entre las partes (S/ 9 diarios) cuesta unos S/ 2.2 millones al año antes de beneficios; un solo día de huelga cuesta unos S/ 4.2 millones.»',
        res: { q: 'buena', fx: { calidad: 5, confianza: 3 }, flags: ['costos_reales'], cartera: { costos: 'Comparados: distancia anual vs. un día de huelga' },
          out: 'Haces la cuenta dos veces: 9 × 248 mil ≈ 2.2 millones. Óscar responde con un pulgar: «Así de simple, y así de incómodo».',
          pro: { ok: 'Pones los dos costos en la misma frase: el del acuerdo y el del conflicto.', risk: 'Al gerente le puede sonar a que estás empujando a ceder.', info: 'Aclara que el costo anual sube con beneficios y aportes: no lo escondas.' },
          kusi: ['celebra', '¡Dos números que obligan a pensar!'] } },
      { id: 'b', label: '«Aceptar el pliego costaría casi S/ 3 millones al año: es inviable.»',
        res: { q: 'riesgosa', fx: { calidad: -3, confianza: -1 }, flags: ['costos_sesgados'], cartera: { costos: 'Solo el costo del pliego' },
          out: 'Es verdad a medias: 12 × 248 mil. Pero nadie está pidiendo aceptar todo, y no dices cuánto cuesta que la planta pare.',
          pro: { ok: 'El número es correcto.', risk: 'Un informe que solo muestra un costo empuja una decisión sin que nadie lo note.' },
          kusi: ['pensando', '¿Y cuánto cuesta no acordar?'] } },
      { id: 'c', label: '«Con S/ 4.2 millones por día, conviene darles lo que piden.»',
        res: { q: 'aceptable', fx: { calidad: 0, confianza: -3 }, flags: ['costos_reales'], cartera: { costos: 'Comparados, con conclusión apresurada' },
          out: 'Óscar te llama: «Los números están bien, la conclusión no es tuya». Tiene razón: decides tú el análisis, no la oferta.',
          pro: { ok: 'Ves el tamaño del riesgo.', risk: 'Ceder todo por miedo también tiene costo: el próximo pliego.' },
          kusi: ['pensando', 'Mostrar no es decidir…'] } },
    ],
    rules: [[BP, 'Un buen informe compara el costo del acuerdo con el costo del conflicto, y dice qué no incluye.']],
    mirada: {
      ve: 'La «mano dura» y la «mano blanda» son estados de ánimo. Lo que convierte una discusión en una decisión es poner, uno al lado del otro, lo que cuesta acordar y lo que cuesta no hacerlo.',
      visual: { tipo: 'balanza', a: { t: 'Cerrar la distancia', items: ['S/ 9 diarios', '≈ S/ 2.2 millones al año', 'Más beneficios y aportes'] }, b: { t: 'Un día de huelga', items: ['≈ S/ 4.2 millones', 'Riesgo de enfriar el horno', 'Clima laboral dañado'] } },
    },
  },
  {
    id: 'b3', t: '14:10', ch: 'documento', who: null, titulo: 'La estrategia en una hoja', banner: 'assets/esc/mesa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Almuerzas un cebiche de pejerrey en el comedor, de pie, porque nadie se sienta contigo: la mitad del comedor es del sindicato. ${F.has('aviso_discutido') ? 'Alguien murmura «la de la garita».' : ''}</p><p>De vuelta, abres una hoja en blanco. El gerente la quiere a las cinco. <mark class="clave">Una estrategia que quepa en una hoja</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu estrategia de negociación.', boton: 'Guardar la estrategia',
    bloques: [
      { id: 'obj', t: 'Objetivo', n: 1, ops: [
        { id: 'o1', t: 'Un convenio que la empresa pueda pagar y la base pueda aceptar, antes de que empiece la huelga.', ok: true, por: 'Objetivo concreto, con plazo y con dos lados.' },
        { id: 'o2', t: 'Que el sindicato entienda quién manda.', ok: false, por: 'Ganar la pelea no es cerrar el convenio.' },
      ] },
      { id: 'lim', t: 'Límites', n: 2, ops: [
        { id: 'l1', t: 'Margen económico máximo aprobado por el directorio, que no se revela de entrada.', ok: true, por: 'Sabes hasta dónde puedes llegar sin quemar todo en la primera reunión.' },
        { id: 'l2', t: 'Nada ilegal: ni reemplazos, ni listas, ni bonos para los que no paren.', ok: true, por: 'El límite legal también protege a la empresa.' },
        { id: 'l3', t: 'Ningún límite: lo que haga falta para que no haya huelga.', ok: false, por: 'Sin límite no hay estrategia, hay pánico.' },
      ] },
      { id: 'con', t: 'Concesiones posibles', n: 2, ops: [
        { id: 'c1', t: 'Retomar el monitoreo de gases en convertidores con participación del sindicato.', ok: true, por: 'Era un pendiente de la empresa y le importa a la base.' },
        { id: 'c2', t: 'Aumento escalonado: una parte este año y otra el próximo.', ok: true, por: 'Reparte el costo y da algo visible.' },
        { id: 'c3', t: 'Prometer «revisar» todo sin fechas.', ok: false, por: 'Una promesa sin fecha es lo que creó la desconfianza.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -2 : 2 },
        flags: q !== 'riesgosa' ? ['estrategia_clara'] : [],
        cartera: { estrategia: q === 'buena' ? 'Objetivo, límites legales y económicos, y concesiones' : 'Estrategia con huecos' },
        out: q === 'buena' ? 'La hoja tiene tres bloques y ningún adjetivo. Jhon la lee y dice: «Esto se puede defender en Lima y en el comedor».' : 'La hoja tiene más deseos que límites. A las cinco te van a preguntar «¿y hasta cuánto?».',
        pro: { ok: 'Una estrategia dice qué quieres, hasta dónde llegas y qué puedes dar que no sea plata.', risk: 'Sin límites claros, cada reunión se convierte en improvisación.', info: 'Lo que la empresa no cumplió antes es tu mejor concesión: cuesta poco y vale mucho.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Una hoja que ordena dos semanas!' : 'Faltan límites…'],
      };
    },
    rules: [[LEY, 'Constitución, art. 28: el Estado fomenta la negociación colectiva y la solución pacífica de los conflictos.'], [BP, 'Define el margen máximo antes de sentarte y no lo reveles de entrada.']],
    mirada: {
      ve: 'Una estrategia de negociación tiene tres piezas: el objetivo (qué es un buen acuerdo), los límites (lo que no harás) y las concesiones (lo que puedes dar). Lo que no está en la hoja se decide en la mesa, bajo presión.',
      visual: { tipo: 'flujo', titulo: 'Estrategia en una hoja', pasos: ['Objetivo', 'Límite económico', 'Límite legal', 'Concesiones', 'Plan de la semana'] },
    },
  },
  {
    id: 'b4', t: '17:00', ch: 'presencial', who: 'gerencia', titulo: 'El margen real', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Gerencia General', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>El gerente lee tu hoja con los lentes en la punta de la nariz. ${F.has('costos_reales') ? 'Se detiene en la frase de los S/ 4.2 millones y la subraya.' : 'Pregunta tres veces por el costo de la huelga.'}</p><p>«Tengo tres opciones para Lima», dice. «Y quiero saber <mark class="clave">cuál defiendes tú</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedir al directorio mandato hasta S/ 6 diarios en dos años, más el monitoreo de gases en convertidores, para llevarlo el jueves de forma escalonada.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 4, etica: 2 }, rel: { gerencia: 1 }, flags: ['mandato_real'], cartera: { mandato: 'Pedido: hasta S/ 6 en dos años + seguridad' },
          out: 'El gerente llama a Lima con el altavoz. La presidenta del directorio pregunta una sola cosa: «¿Y si con seis no firman?». Contestas que entonces el conflicto será por S/ 3 de diferencia, y no por nueve.',
          pro: { ok: 'Un margen real te da algo que ofrecer sin regalarlo todo.', risk: 'Si el margen se filtra, la mesa empieza en seis.', info: 'Guarda el margen: el jueves no se ofrece todo.' },
          kusi: ['celebra', '¡Margen real y con plan!'] } },
      { id: 'b', label: 'Mantener la oferta en S/ 3 y pedir a la Autoridad de Trabajo que revise la huelga, usando las firmas repetidas.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -2, calidad: -1 }, rel: { gerencia: 1, sindicato: -1 }, flags: ['acta_cuestionada'], cartera: { mandato: 'Oferta congelada en S/ 3; revisión pedida' },
          out: 'Es un camino legal. Pero el jueves llegarás a la mesa sin nada nuevo, y Cutipa ya sabrá que la empresa fue a la Autoridad a «tumbar la huelga».',
          pro: { ok: 'Pedir la revisión es un derecho de la empresa.', risk: 'Sin oferta nueva y con un pedido de revisión, la base leerá que la empresa no quiere negociar.' },
          kusi: ['pensando', 'Legal… pero llegas con las manos vacías.'] } },
      { id: 'c', label: 'Ofrecer un bono de S/ 1,500 a quienes no se adhieran a la huelga: divide a la base y protege la producción.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6 }, rel: { gerencia: 1, sindicato: -1 }, flags: ['bono_leales'], cartera: { mandato: 'Bono para los que no paren' },
          out: 'El gerente sonríe: «Eso es estrategia». Silvia, por teléfono, deja de hablar tres segundos. «Eso es discriminación sindical, y va a salir en el acta de la inspección.»',
          pro: { ok: 'Podría reducir la adhesión a la huelga.', risk: 'Premiar a quienes no ejercen un derecho colectivo es tratar distinto por actividad sindical (D.S. 019-2006-TR, arts. 25.10 y 25.12).' },
          kusi: ['indignado', '¡Eso es comprar la división!'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, arts. 25.10 y 25.12: actos que afecten la libertad sindical y discriminación por actividad sindical.'], [POL, 'En Fundición del Sur, cualquier aumento requiere aprobación del directorio.']],
    mirada: {
      ve: 'El margen real no es lo que la empresa quisiera pagar ni lo que el sindicato pide: es lo máximo que la empresa puede sostener sin que el acuerdo le cueste más que el conflicto.',
      visual: { tipo: 'rango', titulo: 'Aumento diario (S/)', min: 0, max: 12, banda: [4, 6], marcas: [['Oferta actual', 3], ['Margen pedido', 6], ['Pliego', 12]] },
    },
  },
  {
    id: 'b5', t: '17:50', ch: 'documento', who: null, titulo: 'La semana', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de Relaciones Laborales', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: () => `<p>Faltan siete días para el martes de la huelga. Jhon pega post-its en el vidrio de la ventana, con el mar de fondo. Los mezcló a propósito: «Así se ve mi cabeza ahora».</p><p><mark class="clave">Ordena la semana</mark> para no correr detrás del conflicto.</p>`,
    type: 'secuencia', prompt: 'Ordena el plan de la semana. Usa las flechas.', boton: 'Pegar el plan',
    items: [
      { id: 'mandato', t: 'Asegurar el mandato del directorio', por: 'Sin mandato, el jueves no hay nada que ofrecer.' },
      { id: 'otro', t: 'Escuchar al sindicato de mantenimiento', por: 'Antes de la mesa, para que no se entere por rumores.' },
      { id: 'mesa', t: 'Reunión de trato directo con el sindicato mayoritario', por: 'Jueves 10:00.' },
      { id: 'minimos', t: 'Acordar los servicios mínimos con Operaciones y el sindicato', por: 'Antes de la huelga, no durante.' },
      { id: 'comunica', t: 'Comunicar a todo el personal qué pasa y qué no', por: 'La víspera de la huelga es cuando más rumores circulan.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : 1 },
        out: q === 'buena' ? 'Jhon toma foto del vidrio y la pone de fondo de pantalla. «Por si me olvido.»' : 'Jhon mueve un post-it: «Los servicios mínimos se acuerdan antes de la huelga, jefa. Durante, ya es tarde».',
        pro: { ok: 'Un conflicto anunciado da tiempo: úsalo en orden.', info: 'Lo que no se acuerde antes del martes, se discutirá en la puerta con el horno encendido.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Semana ordenada!' : 'Casi: primero lo que no puede esperar.'],
      };
    },
    mirada: {
      ve: 'En un conflicto con fecha, el calendario es parte de la estrategia. Cada paso prepara el siguiente: sin mandato no hay mesa, sin mesa no hay acuerdo, y sin servicios mínimos la huelga se vuelve un riesgo para todos.',
      visual: { tipo: 'linea', titulo: 'Siete días antes de la huelga', hitos: [['Martes', 'Mandato'], ['Miércoles', 'Segundo sindicato'], ['Jueves', 'Mesa'], ['Viernes', 'Servicios mínimos'], ['Lunes', 'Comunicación'], ['Martes', 'Huelga anunciada']] },
    },
  },
  {
    id: 'b6', t: '18:20', ch: 'whatsapp', who: null, titulo: 'Reglas para la supervisión', banner: 'assets/foto/supervisa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'personas', 'confianza'],
    body: (n, F) => `<p>${F.has('lista_armada') ? 'Ayer tres supervisores preguntaron uno por uno quién iba a parar. Hay que corregirlo hoy.' : 'Ayer frenaste la lista. Ahora hay que decírselo a la supervisión, antes de que alguien improvise.'}</p><p>Catorce supervisores en el grupo. <mark class="clave">Reglas claras, en pocas líneas</mark>.</p>`,
    type: 'compose', enviaA: 'supervisores', para: 'Para: Supervisores Fundición (14 miembros)', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'contexto', t: 'Contexto', ops: [
        { id: 'x1', t: 'Equipo: el sindicato comunicó una huelga para el martes. La empresa está negociando y se prepara para ambos escenarios.', ok: true, por: 'Informa sin dramatizar.' },
        { id: 'x2', t: 'Equipo: se viene la guerra.', ok: false, por: 'Un supervisor en modo guerra trata a su gente como enemigo.' },
      ] },
      { id: 'regla', t: 'La regla', ops: [
        { id: 'r1', t: 'Nadie pregunta a su personal si va a hacer huelga ni arma listas. La adhesión es una decisión de cada trabajador.', ok: true, por: 'Corta de raíz el riesgo de hostilidad sindical.' },
        { id: 'r2', t: 'Anoten discretamente a los que hablan de parar.', ok: false, por: 'Es exactamente la lista que no debe existir.' },
      ] },
      { id: 'que', t: 'Qué sí hacer', ops: [
        { id: 'q1', t: 'Si les preguntan algo de la negociación o de la huelga, deriven a Relaciones Laborales.', ok: true, por: 'Una sola voz evita versiones contradictorias.' },
        { id: 'q2', t: 'Si les preguntan, digan que la empresa no va a ceder.', ok: false, por: 'El supervisor no negocia ni anuncia posiciones.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'El viernes coordinamos los puestos que no pueden parar. Gracias por la calma.', ok: true, por: 'Les dices qué viene y les das un rol.' },
        { id: 'c2', t: 'Cualquier duda, al privado.', ok: null, por: 'Correcto, pero sin decir qué sigue.' },
      ] },
    ],
    res: sel => {
      const malo = sel.regla === 'r2' || sel.que === 'q2';
      const buenas = ['x1', 'r1', 'q1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { cumplimiento: malo ? -6 : 5, personas: malo ? -3 : 3, confianza: q === 'buena' ? 2 : 0 },
        flags: malo ? ['lista_armada'] : ['supervisores_instruidos'],
        cartera: { supervisores: malo ? 'Mensaje con instrucciones riesgosas' : 'Reglas claras enviadas' },
        out: q === 'buena' ? 'Diez «ok» en cinco minutos. Hugo Arce, el más antiguo, pregunta qué hacer si un operario le cuenta solo. Le respondes: «Escúchalo y no lo anotes».' : malo ? 'La captura del mensaje llega al sindicato antes de las siete. Cutipa la guarda para el jueves.' : 'Llegan algunos «ok». Nadie sabe bien qué viene el viernes.',
        pro: { ok: 'Una regla clara para la supervisión previene la mayoría de los actos antisindicales «sin querer».', risk: 'Todo lo que escribes en un grupo de supervisores puede terminar en una inspección.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Prevención en cuatro líneas!' : 'Eso puede salir muy caro…'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.10: actos que afecten la libertad sindical son infracción muy grave.'], [BP, 'En conflicto, una sola voz: los supervisores derivan, no negocian.']],
    mirada: {
      ve: 'La mayoría de los actos antisindicales no los decide la gerencia: los improvisa un supervisor nervioso. Dar reglas claras antes del conflicto es la forma más barata de prevenirlos.',
      visual: { tipo: 'mensaje', titulo: 'Reglas para la supervisión', txt: 'Equipo: el sindicato comunicó una huelga para el martes. La empresa está negociando y se prepara para ambos escenarios. Nadie pregunta a su personal si va a hacer huelga ni arma listas. Si les preguntan, deriven a Relaciones Laborales. El viernes coordinamos los puestos que no pueden parar.' },
    },
  },
  {
    id: 'b7', t: '18:50', ch: 'presencial', who: null, titulo: 'El papá de Jhon', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Oficina de Relaciones Laborales', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Jhon apaga su monitor y no se va. «Jefa, tengo que contarle algo. Mi papá es operador de convertidores. Está afiliado y votó por la huelga.» Mira el piso. «El gerente me vio en el comedor con él y le preguntó a Silvia si soy de confianza.»</p><p>Jhon es el que mejor conoce las actas. <mark class="clave">¿Qué haces con él?</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Agradecerle que lo cuente, mantenerlo en el equipo y acordar una regla: no participa en las reuniones donde se fija el margen ni maneja la estrategia económica.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, confianza: 2 }, flags: ['jhon_protegido'],
          out: 'Jhon respira. «Gracias. Y no se preocupe: yo en mi casa no hablo de trabajo. Mi papá tampoco me cuenta lo del sindicato.» Le crees.',
          pro: { ok: 'Gestionas el posible conflicto de interés sin castigar a nadie por la afiliación de su familia.', info: 'Díselo al gerente tú misma, antes de que lo resuelva él.' },
          kusi: ['feliz', 'Transparencia que se premia, no que se castiga.'] } },
      { id: 'b', label: 'Sacarlo del equipo durante el conflicto, por si acaso: es mejor prevenir.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -3, calidad: -3 },
          out: 'Jhon asiente sin decir nada. Mañana pedirá descanso médico. Pierdes al que mejor conoce las actas, y el mensaje para todos es que contar la verdad sale caro.',
          pro: { ok: 'Evitas cualquier sospecha del gerente.', risk: 'Tratar a alguien distinto por la afiliación de su padre se parece demasiado a lo que no quieres que haga la supervisión.' },
          kusi: ['triste', 'Le cobraste por ser honesto…'] } },
      { id: 'c', label: 'Decirle que no pasa nada y seguir igual: es su papá, no él.',
        res: { q: 'aceptable', fx: { personas: 3, etica: 0, confianza: -1 }, flags: ['jhon_protegido'],
          out: 'Jhon sonríe. Pero el jueves, cuando el gerente lo vea en la sala de la estrategia, la pregunta volverá, y no tendrás una respuesta preparada.',
          pro: { ok: 'Confías en tu equipo.', risk: 'Sin una regla clara, la sospecha queda flotando y la pagas tú.' },
          kusi: ['pensando', 'Confiar sí. Pero con reglas.'] } },
    ],
    rules: [[BP, 'Un posible conflicto de interés se gestiona con reglas claras, no con exclusión.']],
    mirada: {
      ve: 'En una ciudad como Ilo, casi todos tienen un pariente en la fundición. La pregunta no es si hay vínculos, sino cómo se manejan sin que la afiliación de alguien se convierta en un castigo.',
      visual: { tipo: 'cambio', titulo: 'Gestionar sin castigar', pares: [['Sacarlo del equipo', 'Mantenerlo con una regla clara'], ['Sospecha en silencio', 'Transparencia con el gerente']] },
    },
  },
];
