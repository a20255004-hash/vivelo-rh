// Reclutador/a de selección masiva · Capítulo 7 · «La presión» · Semana 2, martes.
// Hilo: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú. El banco amenaza con la penalidad.
// Normas citadas:
// - Ley 26772, modificada por la Ley 27270: la oferta de empleo y el acceso al empleo no pueden contener requisitos discriminatorios
//   (la edad sin justificación objetiva es uno de ellos). Texto: https://faolex.fao.org/docs/pdf/per201903.pdf
//   (Busqué la tipificación de la infracción en el D.S. 019-2006-TR y no pude verificarla: no se cita.)
// - Ley 29571, art. 62 (métodos abusivos de cobranza), ya citada en el capítulo 4: https://www.leyes.congreso.gob.pe/Documentos/Leyes/29571.pdf
// - Ley 29733, principio de finalidad (datos personales), ya citada en el capítulo 1.

export const CAP = {
  n: 7, titulo: 'La presión', dia: 'Semana 2, martes', foto: 'assets/foto2/tension.webp',
  lugar: 'Contacta Perú · Cercado de Lima',
  inicio: '07:50', fin: '19:30', cierreHora: '19:20',
  apertura: 'Martes. A las 9:00 Bruno tiene reunión con Banco Sur. A las 10:30 baja a reclutamiento con la cara de quien recibió una mala noticia.', boton: 'Preparar el reporte para Bruno',
  kusi: 'Hoy se prueba el criterio: cuando aprieta la meta, ¿qué no se negocia? ¡Dale!',
  lead: 'Armaste un reporte que se entiende en un minuto, negociaste qué se flexibiliza y qué no, frenaste un pedido de edad del cliente, escuchaste a Wálter y revisaste la «valla nueva» línea por línea.',
  reflexion: '¿Qué criterio no estarías dispuesta a bajar aunque la meta no cierre?',
  siguiente: { n: 8, titulo: 'La feria', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'reporte', p: 'Reporte para la reunión con el banco', j: 'Bruno · Operaciones', d: 0, e: 'Para las 8:50' },
  { id: 'valla', p: 'Criterios de evaluación', j: 'Bruno · Operaciones', d: 0, e: 'Bruno pide bajarlos' },
  { id: 'banco', p: 'Pedido de Patricia Llosa', j: 'Banco Sur · Proveedores', d: 0, e: 'Sin responder' },
  { id: 'nueva', p: 'Documento «valla nueva»', j: 'Operaciones', d: 0, e: 'Borrador' },
  { id: 'feria', p: 'Feria de empleo de mañana', j: 'Jessica · Reclutamiento', d: 1, e: 'San Juan de Lurigancho' },
];

export const FUTURO = {
  reporte_claro: ['Tu reporte de una página llegó a la mesa del banco.', 'Patricia lo pedirá cada semana. Capítulo 10.'],
  valla_negociada: ['Mantuviste lo no negociable y flexibilizaste lo entrenable, con refuerzo.', 'El grupo de refuerzo saldrá al piso el jueves. Capítulo 9.'],
  valla_bajada: ['Bajaste la valla en todos los criterios.', 'El primer día en piso habrá más reclamos. Capítulo 9.'],
  valla_escalada: ['Te negaste a cambiar nada y lo escalaste.', 'Bruno no te consultará en la feria. Capítulo 8.'],
  edad_frenada: ['Le explicaste a Banco Sur que no se selecciona por edad.', 'Gladys seguirá en el proceso. Capítulo 9.'],
  edad_aceptada: ['Aceptaste priorizar a menores de 30 por pedido del banco.', 'En la feria de mañana tendrás que decirle que no a gente mayor. Capítulo 8.'],
  sabe_walter: ['Wálter te contó cómo retiene a su equipo.', 'Lo invitarás a la feria. Capítulo 8.'],
  walter_feria: ['Wálter aceptó ir contigo a la feria.', 'Contará en SJL lo que es el trabajo de verdad. Capítulo 8.'],
  valla_revisada: ['Revisaste la «valla nueva» y sacaste lo ilegal.', 'La feria de mañana evaluará con los criterios correctos. Capítulo 8.'],
  valla_sucia: ['La «valla nueva» salió con criterios ilegales.', 'Alguien de la feria se quejará. Capítulo 8.'],
  pide_ayuda: ['Le contaste a Jessica cómo te sentías y pediste ayuda.', 'Jessica irá contigo a la feria. Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  alexandra: { n: 'Alexandra Rivas', sub: '19 años', who: 'alexandra' },
  walter: { n: 'Wálter Ccori', sub: 'Supervisor de piso', c: '#6D4C41' },
};

export const WSP = [
  { chat: 'grupo', t: '07:52', de: 'Jessica', txt: 'Hoy Bruno se reúne con el banco 😬 Que nadie le pregunte nada antes de las 11.' },
  { chat: 'bruno', t: '08:05', de: 'Bruno', txt: 'Mándame algo de una página para el banco. A las 8:50 máximo.' },
  { chat: 'bruno', t: '08:06', de: 'Bruno', txt: 'Y recuerda que me prometiste 80 en la evaluación de ayer. Llegaron 52.', si: 'promesa_200' },
  { chat: 'alexandra', t: '12:40', de: 'Alexandra', txt: 'Hoy hice mi primera simulación con el sistema de verdad. Rubén dijo que fui la más rápida 🥹', si: 'alexandra_excepcion' },
  { chat: 'walter', t: '13:50', de: 'Wálter', txt: 'Señorita, mis cuatro van bien. Mi hermano Joel ya está en el equipo de Karen, como usted dijo. ¿Tiene cinco minutos?', si: 'walter_misma_valla' },
  { chat: 'walter', t: '13:50', de: 'Wálter', txt: 'Ya no voy a recomendar a nadie. Pero si quiere hablar, estoy en el piso 3.', si: 'walter_prohibido' },
];

export const CORREOS = [
  { t: '17:15', de: 'Patricia Llosa · Banco Sur', para: 'Bruno Salinas', cc: 'Reclutadora masiva', asunto: 'Auditoría de fichas', html: '<p>Bruno: el jueves revisaremos una muestra de 20 fichas del grupo piloto. Necesitamos que los datos de formación coincidan con los documentos.</p><p>Patricia</p>', si: 'alexandra_falseada' },
];

export const QUIZ = [
  { q: 'El cliente pide «priorizar menores de 30». ¿Qué haces?', ops: ['Lo aplicas: el cliente manda', 'Explicas que la edad no puede ser un criterio sin justificación objetiva y propones criterios ligados al desempeño', 'Lo aplicas sin dejarlo por escrito', 'Lo aplicas solo en la feria'], ok: 1, por: 'La Ley 26772 prohíbe requisitos discriminatorios en la oferta y el acceso al empleo, y alcanza también a los intermediarios.' },
  { q: 'Bruno pide «bajar la valla». ¿Qué no se negocia?', ops: ['La velocidad con el sistema', 'Que el asesor no amenace y respete el horario legal de cobranza', 'El tiempo de la simulación', 'Que sepa Excel'], ok: 1, por: 'Lo entrenable puede flexibilizarse; lo que expone a reclamos y sanciones, no.' },
  { q: '¿Qué es un «carril de refuerzo» en selección masiva?', ops: ['Un castigo', 'Aprobar con apoyo extra a quien falla en lo entrenable', 'Un bono', 'Una segunda entrevista'], ok: 1, por: 'Permite sumar gente que puede aprender, sin bajar lo que no se negocia.' },
  { q: 'Un buen reporte para un gerente que va a reunirse con el cliente…', ops: ['Tiene diez gráficos', 'Cabe en una página: número, embudo, causa, plan y riesgo', 'Solo dice que todo va bien', 'Incluye los datos de todos los postulantes'], ok: 1, por: 'El gerente necesita entender y explicar en un minuto.' },
  { q: 'Cuando la presión te supera, ¿qué es lo más profesional?', ops: ['No decir nada', 'Decirlo y pedir apoyo concreto a tu jefa', 'Renunciar', 'Trabajar hasta medianoche'], ok: 1, por: 'Pedir ayuda a tiempo cuida tu criterio y tu salud.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '08:00', ch: 'documento', who: null, titulo: 'Una página para el banco', banner: 'assets/foto2/presentacion.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Bruno quiere «algo de una página» a las 8:50. Te sientas con un café que se enfría mientras abres el Excel. ${F.has('causas_desercion') ? 'Tienes las causas de los nueve que se fueron ayer.' : 'No sabes bien por qué se fueron los nueve de ayer.'}</p><p>Bruno lo leerá en el ascensor: <mark class="clave">tiene que entenderse en un minuto</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del reporte.', boton: 'Mandárselo a Bruno',
    bloques: [
      { id: 'numero', t: 'El número principal', n: 1, ops: [
        { id: 'n1', t: '31 en capacitación y 48 aprobados en espera. Para 120 faltan dos evaluaciones grandes.', ok: true, por: 'Dice dónde estamos y qué falta.' },
        { id: 'n2', t: '1,330 postulaciones recibidas.', ok: false, por: 'Es la boca del embudo: no dice cuántos asesores habrá.' },
      ] },
      { id: 'embudo', t: 'El embudo', n: 1, ops: [
        { id: 'e1', t: 'Postulaciones → citados → llegan → aprueban → capacitación, con la tasa de cada paso.', ok: true, por: 'Muestra dónde se pierde la gente.' },
        { id: 'e2', t: 'Un gráfico de torta por distrito.', ok: false, por: 'Bonito, pero no dice dónde se pierde la gente.' },
      ] },
      { id: 'causa', t: 'La causa', n: 1, ops: [
        { id: 'c1', t: 'La deserción del primer día bajó de 14 a 9; la causa principal era no saber que el puesto era de cobranza.', ok: true, por: 'Comparación con la campaña pasada y una causa concreta.' },
        { id: 'c2', t: 'Los postulantes ya no quieren trabajar.', ok: false, por: 'No es un dato y no ayuda a negociar.' },
      ] },
      { id: 'plan', t: 'El plan', n: 2, ops: [
        { id: 'p1', t: 'Feria de empleo mañana en San Juan de Lurigancho, con evaluación en el mismo lugar.', ok: true },
        { id: 'p2', t: 'Aviso con «cobranza» en el título y video del puesto en la evaluación.', ok: true },
        { id: 'p3', t: 'Contratar a todos los de la lista de espera sin evaluar.', ok: false, por: 'Más deserción la próxima semana.' },
      ] },
      { id: 'riesgo', t: 'El riesgo', n: 1, ops: [
        { id: 'r1', t: 'Si la asistencia de mañana es menor al 40 %, el día 21 llegaremos a unos 100. Plan B: una evaluación extra el sábado.', ok: true, por: 'Un riesgo con número y una salida.' },
        { id: 'r2', t: 'Ninguno: vamos bien.', ok: false, por: 'Si el riesgo aparece después, perderás credibilidad.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .83 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 4 : 0 },
        flags: q === 'buena' ? ['reporte_claro'] : [], rel: { bruno: q === 'buena' ? 1 : 0 },
        cartera: { reporte: q === 'buena' ? 'Una página: número, embudo, causa, plan y riesgo' : 'Enviado, con piezas flojas' },
        out: q === 'buena' ? 'A las 8:49 Bruno responde: «Esto sí lo entiendo». Lo imprime en el piso 6 y entra a la reunión.' : 'Bruno responde con un «ok». Entrará a la reunión con preguntas que no sabrá contestar.',
        pro: { ok: 'Un reporte corto con número, causa, plan y riesgo ayuda al gerente a negociar.', info: 'Guarda la plantilla: el banco la pedirá cada semana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una página que vale oro!' : '¿Qué va a decir Bruno si le preguntan?'],
      };
    },
    rules: [[BP, 'Un reporte para la gerencia cabe en una página y termina con un riesgo y un plan.']],
    mirada: {
      ve: 'Un reporte de reclutamiento no es para mostrar cuánto trabajaste, sino para que alguien decida. El número clave, el embudo, la causa, el plan y el riesgo bastan para que el gerente negocie con el cliente sin improvisar.',
      visual: { tipo: 'embudo', titulo: 'Dónde estamos a mitad de campaña', niveles: [['Postulaciones', 1330], ['Citados', 230], ['Llegaron', 96], ['Aprobados', 79], ['En capacitación', 31]] },
    },
  },
  {
    id: 'p2', t: '10:35', ch: 'presencial', who: 'bruno', titulo: '«Baja la valla»', banner: 'assets/foto/frente-a-frente.webp', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Bruno vuelve de la reunión. Se sienta sin quitarse el saco. «El banco dice que, si el día 21 no hay 120, aplican la penalidad y revisan el contrato. ${F.has('criterio') ? 'Te di tus veinte minutos de simulación.' : 'Ya sé que no querías evaluar.'} Ahora te pido algo: <mark class="clave">baja la valla</mark>. Que apruebe quien cumpla tres de los cinco criterios, no cuatro.»</p><p>${F.has('promesa_200') ? 'Te recuerda, sin decirlo, el número que le prometiste.' : 'No grita. Está cansado y tiene miedo.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Separar los criterios: lo entrenable (rapidez y uso del sistema) puede bajar, con dos días de refuerzo; lo no negociable (no amenazar, respetar el horario, verificar al titular) se queda.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 3, tiempo: -2 }, rel: { bruno: 1 }, flags: ['valla_negociada'], cartera: { valla: 'Entrenable flexible con refuerzo; lo legal no se toca' },
          out: 'Bruno hace la cuenta en una servilleta: con el refuerzo entran unos 20 más. «¿Y lo de no amenazar no se puede bajar?» «No: eso es un reclamo en Indecopi con el nombre del banco.» Asiente.',
          pro: { ok: 'Le das una salida real a la meta sin bajar lo que expone a la empresa.', risk: 'El refuerzo exige que Rubén tenga dos días más con un grupo: hay que conseguirle sala.', info: 'Anota quiénes entran por el carril de refuerzo: en dos semanas sabrás si funcionó.' },
          kusi: ['celebra', '¡Flexible en lo entrenable, firme en lo que importa!'] } },
      { id: 'b', label: 'Aceptar los tres de cinco en todos los criterios: la meta está en riesgo, el contrato también y la capacitación puede corregir lo demás.',
        res: { q: 'riesgosa', fx: { calidad: -5, cumplimiento: -3, tiempo: 3 }, rel: { bruno: 1 }, flags: ['valla_bajada'], cartera: { valla: '3 de 5 en todos los criterios' },
          out: 'Bruno se va aliviado. Con la valla nueva, alguien que amenaza al cliente y acepta llamar a las 9 de la noche puede aprobar.',
          pro: { ok: 'Respondes a una amenaza real para la campaña.', risk: 'Bajar todos los criterios por igual deja pasar lo que no se entrena y sí se sanciona.' },
          kusi: ['preocupado', 'Tres de cinco… ¿cuáles tres?'] } },
      { id: 'c', label: 'Negarte a cambiar cualquier criterio y escalarlo a la Gerencia de Gestión Humana: no te corresponde decidir algo así bajo presión.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -3, tiempo: -1 }, rel: { bruno: -1 }, flags: ['valla_escalada'], cartera: { valla: 'Escalado a Gestión Humana' },
          out: 'Gestión Humana te respalda… y te pide una propuesta para el viernes. Bruno sale sin hablar. La meta sigue igual de lejos.',
          pro: { ok: 'Proteges el criterio y usas el canal formal.', risk: 'Escalar sin proponer nada deja a Bruno solo con el problema y sin respuesta.' },
          kusi: ['pensando', 'Firme… pero ¿y una propuesta?'] } },
    ],
    rules: [[LEY, 'Ley 29571, art. 62: los métodos abusivos de cobranza exponen al banco y al proveedor.'], [BP, 'Bajo presión, separa lo que se entrena de lo que no se negocia.']],
    mirada: {
      ve: 'La presión por la meta es parte del trabajo, y Bruno tiene razones reales: una penalidad y un contrato en riesgo. El criterio no consiste en decir que no a todo, sino en saber qué se puede flexibilizar y qué no, y en dar una salida con números.',
      visual: { tipo: 'balanza', a: { t: 'Se puede flexibilizar', items: ['Rapidez con el sistema', 'Nervios en la simulación', 'Experiencia previa'] }, b: { t: 'No se negocia', items: ['No amenazar', 'Respetar el horario de cobranza', 'Verificar al titular', 'No discriminar'] } },
    },
  },
  {
    id: 'p3', t: '11:50', ch: 'correo', who: null, titulo: '«Menores de 30»', banner: 'assets/foto2/revisan.webp', show: ['etica', 'cumplimiento', 'confianza'],
    mail: { from: 'Patricia Llosa · Gestión de Proveedores, Banco Sur', to: 'Reclutadora masiva', cc: 'Bruno Salinas', asunto: 'Perfil para la segunda tanda' },
    body: (n, F) => `<p>Buenos días. Tras la reunión de hoy, para la segunda tanda les pedimos <mark class="clave">priorizar perfiles menores de 30 años</mark>: nuestra área de Cobranza Temprana dice que se adaptan más rápido al sistema.</p>${F.has('datos_excesivos') ? '<p>Como ya tenemos la edad de los aprobados, pueden filtrar fácil.</p>' : ''}<p>Quedo atenta. Patricia</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder que la edad no puede ser criterio de selección y proponer lo que sí mide la adaptación: el tiempo de manejo del sistema en la simulación, con refuerzo para quien lo necesite.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: 2 }, flags: ['edad_frenada'], cartera: { banco: 'Se rechazó el criterio de edad y se propuso uno de desempeño' },
          responde: 'Patricia, buenos días. Entendemos la preocupación por la adaptación al sistema, pero no podemos seleccionar por edad: es un requisito discriminatorio (Ley 26772). Proponemos medir en la simulación el tiempo de manejo del sistema y dar refuerzo a quien lo necesite. Hoy la persona que mejor escucha del piloto tiene 51 años. Saludos.',
          out: 'Patricia responde a la media hora: «Tienen razón. Retiro el pedido. Mándenme el criterio de sistema para validarlo con Cobranza Temprana».',
          pro: { ok: 'Dices que no con la norma y das una alternativa que responde a la preocupación real.', info: 'Deja este correo archivado: si el pedido se repite, ya hay una respuesta escrita.' },
          kusi: ['celebra', '¡Un no con propuesta!'] } },
      { id: 'b', label: 'Aplicarlo sin ponerlo por escrito: priorizar a los jóvenes en las citaciones, sin mencionarlo en ningún aviso ni correo.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6 }, flags: ['edad_aceptada'], cartera: { banco: 'Criterio de edad aplicado en silencio' },
          responde: 'Patricia, entendido. Lo tendremos en cuenta en las citaciones. Saludos.',
          out: 'Tu respuesta queda escrita igual, con copia a Bruno. Y en el Excel de mañana, la columna de edad decide quién recibe la citación.',
          pro: { ok: 'Complaces al cliente.', risk: 'Discriminar en silencio sigue siendo discriminar, y tu correo es la prueba.' },
          kusi: ['indignado', '¿Y Gladys?'] } },
      { id: 'c', label: 'Pasarle el correo a Jessica: es un tema del contrato con el cliente y prefieres que lo responda ella.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, tiempo: -1 }, cartera: { banco: 'Derivado a Jessica' },
          responde: 'Patricia, buenos días. Recibido; le responde hoy mi coordinadora, Jessica Torres. Saludos.',
          out: 'Jessica responde lo correcto a las 16:00. Pero en la mañana, Bruno ya había mandado la orden: «Prioricen jóvenes en la feria».',
          pro: { ok: 'Consultas antes de responder algo delicado.', risk: 'Mientras el pedido no tenga respuesta, alguien lo empieza a aplicar.' },
          kusi: ['pensando', 'Mientras tanto… ya lo están aplicando.'] } },
    ],
    rules: [[LEY, 'Ley 26772, modificada por la Ley 27270: el acceso al empleo no puede tener requisitos discriminatorios, como la edad sin justificación objetiva.']],
    mirada: {
      ve: 'Muchas veces el pedido discriminatorio viene del cliente, y llega con una razón que suena técnica: «se adaptan más rápido». La respuesta profesional separa la preocupación real (la adaptación al sistema) del criterio prohibido (la edad) y mide la primera directamente.',
      visual: { tipo: 'cambio', titulo: 'De la edad al desempeño', pares: [['Menores de 30', 'Tiempo de manejo del sistema'], ['«Se adaptan rápido»', 'Refuerzo para quien lo necesita'], ['Filtrar el Excel por edad', 'Medir en la simulación']] },
      normas: [{ ley: 'Ley 26772, modificada por la Ley 27270', dice: 'La oferta de empleo y el acceso a medios de formación no pueden contener requisitos que constituyan discriminación o anulen la igualdad de oportunidades o de trato. Alcanza también a las agencias e intermediarios.', practica: 'Que el pedido venga del cliente no traslada la responsabilidad: quien selecciona es Contacta.' }],
    },
  },
  {
    id: 'p4', t: '14:00', ch: 'presencial', who: null, titulo: 'Cinco minutos con Wálter', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Piso 3 · junto a la máquina de café', show: ['personas', 'calidad'],
    body: (n, F) => `<p>${F.has('walter_prohibido') ? 'Wálter te recibe serio, con los brazos cruzados.' : 'Wálter te espera con dos cafés.'} Su equipo tiene la menor rotación del piso desde hace tres años. Habla bajito para que no lo escuchen sus asesores. <mark class="clave">Tienes cinco minutos antes de que empiece su reunión de turno</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas.',
    opts: [
      { id: 'como', label: '¿Cómo hace para que su equipo no se vaya?', info: '«El primer día les pregunto cómo llegan y a qué hora salen de su casa. Y en la primera semana no los dejo solos con un cliente gritón. La gente se va cuando se siente sola.»' },
      { id: 'valla', label: '¿Qué piensa de bajar la valla?', info: '«Que el que entra sin saber cobrar me malogra el equipo. Los otros terminan haciendo su trabajo. Bruno lo sabe, pero tiene miedo.»' },
      { id: 'el', label: '¿Cómo entró usted a Contacta?', info: '«Por un aviso en el diario, hace doce años. Llegué de Huancavelica sin conocer a nadie. Me evaluaron igual que a todos y me dieron una oportunidad. Por eso traigo a los míos: para darles lo mismo.»' },
      { id: 'feria', label: '¿Iría conmigo a la feria de mañana?', info: '«¿A Lurigancho? Ahí vive la mitad de mi equipo. Si usted me deja contarles lo que es el trabajo de verdad, voy.»' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: picks.includes('como') || picks.includes('el') ? 3 : 1, calidad: picks.includes('valla') || picks.includes('feria') ? 3 : 1 },
      flags: ['sabe_walter'].concat(picks.includes('feria') ? ['walter_feria'] : []),
      out: picks.includes('feria') ? 'Wálter vendrá a la feria. Lo que más convence a un postulante es alguien que hace el trabajo y lo cuenta sin adornos.' : 'Te vas con algo que ningún indicador mide: cómo se sostiene un equipo.',
      kusi: ['curioso', 'Wálter sabe retener lo que tú sabes atraer.'],
    }),
    mirada: {
      ve: 'Los supervisores con baja rotación tienen un saber práctico que el reclutamiento necesita: cómo se siente el primer día, qué hace que alguien se quede. Escucharlos conecta la selección con lo que pasa después en el piso.',
    },
  },
  {
    id: 'p5', t: '15:40', ch: 'documento', who: null, titulo: 'La «valla nueva»', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Operaciones te manda el documento con los criterios para la feria de mañana. Lo armó el asistente de Bruno con lo que escuchó en la reunión. ${F.has('edad_aceptada') ? 'Ya incluye lo que aceptaste esta mañana.' : ''}</p><p><mark class="clave">Mañana lo usarán cuatro evaluadores con 150 personas.</mark></p>`,
    type: 'flag', prompt: 'Marca lo que no puede ir o debe corregirse antes de la feria.',
    doc: { t: 'Criterios de evaluación ajustados · Segunda tanda', sub: 'Contacta Perú · Operaciones · borrador' },
    lines: [
      { id: 'tres', t: 'Aprueba quien cumpla al menos 3 de 5 criterios.', duda: 'Depende de cuáles: si los que faltan son entrenables, puede ir con refuerzo; si es no amenazar, no.' },
      { id: 'edad', t: 'Prioridad para postulantes menores de 30 años.', bad: LEY, why: 'La edad sin justificación objetiva es un requisito discriminatorio (Ley 26772).' },
      { id: 'amenaza', t: 'Se acepta un tono «firme» con el cliente, incluso mencionar la central de riesgo, si cierra el pago.', bad: BP, why: 'Premia la presión y expone al banco a reclamos por métodos abusivos de cobranza.' },
      { id: 'turno', t: 'Ya no se pregunta el turno ni el tiempo de traslado: se asigna después.', bad: BP, why: 'Fue la causa de que Jhonatan se fuera el primer día.' },
      { id: 'diez', t: 'Simulación de 15 minutos en vez de 20.' },
      { id: 'repechaje', t: 'Quien falle por nervios puede repetir la simulación una vez, al final del día.' },
      { id: 'semana1', t: 'Llamar a los no seleccionados de la semana 1 y ofrecerles entrar sin evaluar.', bad: BP, why: 'Ya fueron evaluados y no pasaron: entrar sin evaluar es saltarse la valla, no bajarla.' },
      { id: 'dni', t: 'Pedir la foto del DNI por WhatsApp antes de la feria, «para agilizar».', bad: LEY, why: 'Los datos se piden para su finalidad y en el momento en que se necesitan (Ley 29733): una foto del DNI por WhatsApp a 150 personas no es necesaria para evaluar.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'El documento se imprime y se reparte. Mañana, cuatro evaluadores aplicarán criterios que la ley no permite.' : `Corriges ${hitsLey} puntos legales y los que deshacían lo aprendido. Mandas la versión limpia a Operaciones con copia a Jessica.`,
      flags: [missLey ? 'valla_sucia' : 'valla_revisada'], rel: { jessica: missLey ? 0 : 1 },
      cartera: { nueva: missLey ? 'Impreso con criterios ilegales' : 'Corregido: refuerzo sí, edad y amenazas no' },
      pro: { ok: 'Flexibilizar sin cruzar la línea es posible si revisas cada criterio.', risk: 'Un criterio discriminatorio aplicado por cuatro evaluadores a 150 personas es un problema multiplicado por 150.', info: 'El repechaje y la simulación más corta son buenas flexibilizaciones: no cuestan criterio.' },
      kusi: missLey ? ['indignado', 'Eso va a llegar a la feria…'] : ['celebra', '¡Valla flexible, pero valla!'],
    }),
    rules: [[LEY, 'Ley 26772: no se selecciona por edad sin justificación objetiva.'], [LEY, 'Ley 29733: se piden solo los datos necesarios para la finalidad.'], [BP, 'Flexibiliza lo que se entrena; no lo que daña al cliente o discrimina.']],
    mirada: {
      ve: 'Cuando la presión baja la valla, el riesgo no está en lo que se dice en la reunión, sino en el documento que luego aplican otros. Revisar cada criterio permite aceptar flexibilizaciones razonables, como un repechaje, y frenar las que discriminan o dañan al cliente.',
      visual: { tipo: 'matriz', x: 'Ayuda a la meta', y: 'Cuida el criterio', cuadrantes: ['Aplícalo', 'Aplícalo', 'Descártalo', 'Riesgo: suma números, cuesta caro'], items: [['Repechaje', .6, .8], ['15 minutos', .5, .7], ['3 de 5 entrenables', .75, .6], ['Menores de 30', .6, .05], ['Sin preguntar turno', .5, .2], ['Tono «firme»', .55, .1]] },
    },
  },
  {
    id: 'p6', t: '19:05', ch: 'whatsapp', who: 'jessica', titulo: '«¿Y tú cómo estás?»', banner: 'assets/esc/pendulo.webp', show: ['confianza', 'personas'],
    body: () => `<p>Son más de las siete. El piso de reclutamiento está vacío y la luz del pasillo se apaga sola cada cinco minutos. Tienes la espalda dura y no almorzaste bien. Llega un mensaje.</p>`,
    chat: ['Hoy fue un día pesado. ¿Y tú cómo estás? De verdad.'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle la verdad: que estás cansada, que te costó sostener el criterio con Bruno y pedirle algo concreto para mañana.',
        res: { q: 'buena', fx: { personas: 3, confianza: 3 }, rel: { jessica: 1 }, flags: ['pide_ayuda'],
          envia: ['jessica', 'Cansada, la verdad. Me costó lo de Bruno y lo del banco. ¿Me acompañas mañana a la feria? Con dos personas evaluando no se nos pasa nada.'],
          out: 'Jessica responde: «Voy. Y mañana almorzamos, aunque sea un pan con pollo parados. Hoy hiciste lo difícil». Apagas la computadora y sales a la Colmena.', kusi: ['feliz', 'Pedir ayuda también es criterio.'] } },
      { id: 'b', label: 'Responder que todo bien y que mañana llegas temprano para adelantar la feria.',
        res: { q: 'aceptable', fx: { confianza: 1, personas: -2 },
          envia: ['jessica', 'Todo bien 💪 Mañana llego 7 para adelantar la feria.'],
          out: 'Jessica responde «gracias, crack». Mañana irás sola a la feria, con cuatro horas de sueño.', kusi: ['preocupado', '¿Todo bien… de verdad?'] } },
    ],
    mirada: { ve: 'El reclutamiento masivo desgasta: metas diarias, presión de la gerencia y decenas de personas que esperan una respuesta. Decirlo a tiempo y pedir algo concreto no es debilidad: es lo que permite sostener el criterio al día siguiente.' },
  },
];
