// Asistente de Planillas · Capítulo 7 · «La consulta» · Semana 2, martes.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas:
// - Ley 25129: asignación familiar para trabajadores de la actividad privada que tengan a su cargo uno o más hijos menores
//   de 18 años (o mayores que cursen estudios superiores, según la norma); equivale al 10 % de la remuneración mínima y es
//   un monto único, sin importar el número de hijos. Con RMV de S/ 1,230 (D.S. 015-2026-TR): S/ 123.
//   https://lpderecho.pe/ley-regula-asignacion-familiar-ley-25129/
//   https://www.buk.pe/blog/ley-asignacion-familiar
// - D.S. 007-2002-TR, art. 10 (recargo del sobretiempo), ya citado en el capítulo 2.
// - Ley 29733 (datos personales): no se muestra la boleta de un trabajador a otro. Principio general.
// Empresas, personas y montos son ficticios.

export const CAP = {
  n: 7, titulo: 'La consulta', dia: 'Semana 2, martes', foto: 'assets/foto/frente-a-frente.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. Wilder pidió su día libre para venir a la oficina en persona. Llegará a las 10, desde Barranco, en dos buses. Tú tienes dos horas para entender por qué cobra menos que su compañero.', boton: 'Abrir las dos boletas',
  kusi: 'Hoy toca explicar. Una boleta bien explicada vale más que diez correos.',
  lead: 'Comparaste dos boletas, escuchaste a Wilder, protegiste los datos de su compañero, le explicaste por escrito cada diferencia y dejaste en marcha lo que le faltaba.',
  reflexion: '¿Qué parte de una boleta crees que casi nadie entiende? ¿Cómo la explicarías en una frase?',
  siguiente: { n: 8, titulo: 'La PLAME', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'wilder', p: 'Consulta de Wilder Pinto', j: 'Tú', d: 0, e: 'Hoy, 10:00' },
  { id: 'cuentas', p: 'Doce cuentas sueldo faltantes', j: 'Administradores', d: 0, e: 'El banco recibe mañana' },
  { id: 'plame', p: 'PLAME de noviembre', j: 'Hugo · Contabilidad', d: 0, e: 'Mañana' },
  { id: 'grati', p: 'Gratificación de diciembre', j: 'Hugo · Planillas', d: 0, e: 'Pago el jueves' },
];

export const FUTURO = {
  boletas_comparadas: ['Encontraste qué diferencias eran errores y cuáles no.', 'Pudiste explicarle a Wilder con datos.'],
  datos_edson: ['No le mostraste a Wilder la boleta de su compañero.', 'Edson nunca sabrá que alguien lo pidió.'],
  boleta_ajena: ['Le mostraste a Wilder la boleta de Edson.', 'Edson se enterará. Capítulo 9.'],
  asignacion_pedida: ['Wilder presentará la partida de nacimiento de su hija para cobrar asignación familiar.', 'Se cargará desde diciembre.'],
  wilder_explicado: ['Wilder recibió por escrito la explicación de su boleta.', 'Volverá a confiar en Planillas.'],
  wilder_confuso: ['La explicación a Wilder quedó a medias.', 'Volverá a preguntar.'],
  barranco_revisado: ['Revisaste si otros en Barranco no cobran asignación familiar teniendo hijos.', 'Hay cuatro casos más.'],
  sunafil_respeto: ['Le dijiste a Wilder que tiene derecho a ir a SUNAFIL si lo desea.', 'Wilder no lo hará por ahora.'],
  sunafil_presion: ['Le pediste a Wilder que no vaya a SUNAFIL.', 'Wilder sintió que lo querían callar.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
  lucho: { n: 'Lucho Carrasco', sub: 'Administrador · local Barranco', c: '#6B46C1' },
};

export const WSP = [
  { chat: 'grupo', t: '07:50', de: 'Hugo', txt: 'Hoy estoy con Contabilidad toda la mañana por la PLAME. Wilder es tuyo. Paciencia y números 💪' },
  { chat: 'wilder', t: '08:40', de: 'Wilder', txt: 'Ya estoy en el bus. Llego 10 y algo. Voy con mi esposa, si no hay problema.' },
  { chat: 'wilder', t: '08:41', de: 'Wilder', txt: 'Y dicen que la grati se atrasa. Ojalá no sea verdad.', si: 'rumor_suelto' },
  { chat: 'admins', t: '09:10', de: 'Gaby (San Miguel)', txt: 'Planillas, ya mandé las dos cuentas que faltaban de mi local ✅', si: 'corrida2_revisada' },
  { chat: 'lucho', t: '12:15', de: 'Lucho', txt: 'Oye, ¿Wilder fue a la oficina? ¿Se quejó de mí? Dime la verdad.' },
  { chat: 'wilder', t: '18:20', de: 'Wilder', txt: 'Mi esposa dice que es la primera vez que alguien nos explica la boleta. Gracias. El lunes llevo la partida.', si: 'wilder_explicado' },
];

export const CORREOS = [
  { t: '08:05', de: 'Hugo Salazar', para: 'Asistente de Planillas', asunto: 'Wilder', html: '<p>Te dejo en la carpeta las boletas de noviembre de Wilder y de Edson Quispe, el otro cocinero de Barranco con su mismo sueldo. Wilder te va a preguntar por Edson. Recuerda: a él le explicas lo suyo, no lo de Edson.</p><p>Hugo</p>' },
  { t: '14:30', de: 'Lucho Carrasco', para: 'Planillas', asunto: 'Asignación familiar Barranco', html: '<p>Me dicen que hay gente en Barranco sin asignación familiar. Yo siempre les digo que traigan la partida, pero no la traen. ¿Qué hago?</p><p>Lucho</p>' },
];

export const QUIZ = [
  { q: '¿Cuánto es la asignación familiar con una RMV de S/ 1,230?', ops: ['S/ 61.50', 'S/ 123.00', 'S/ 246.00, si tiene dos hijos', 'S/ 1,230.00'], ok: 1, por: 'Es el 10 % de la remuneración mínima y es un monto único, sin importar el número de hijos (Ley 25129).' },
  { q: 'Un trabajador pide ver la boleta de su compañero para compararla. ¿Qué haces?', ops: ['Se la muestras', 'Le explicas su propia boleta y los criterios generales, sin mostrar datos ajenos', 'Le dices que no puedes decir nada', 'Le mandas una foto'], ok: 1, por: 'La boleta tiene datos personales del otro trabajador; puedes explicar los criterios sin exponerlo.' },
  { q: 'Dos cocineros con el mismo sueldo tienen netos distintos. Una razón legítima puede ser…', ops: ['Que uno le cae mejor al jefe', 'Que están en sistemas de pensiones distintos (ONP o AFP)', 'Que uno es de Barranco', 'Ninguna'], ok: 1, por: 'ONP y AFP descuentan distinto; también influyen la asignación familiar y las horas extra.' },
  { q: 'Wilder dice que quizá vaya a SUNAFIL. Lo correcto es…', ops: ['Pedirle que no vaya', 'Decirle que es su derecho y contarle qué estás corrigiendo', 'Amenazarlo', 'No responder'], ok: 1, por: 'Acudir a la autoridad es un derecho del trabajador; tu trabajo es corregir lo que corresponde.' },
  { q: 'La mejor forma de explicar una boleta es…', ops: ['Leerla en voz alta', 'Concepto por concepto, con el porqué de cada diferencia y qué se va a corregir', 'Mandar la ley completa', 'Decir que el sistema lo calcula'], ok: 1, por: 'Explicar el porqué de cada línea, y qué se corrige, convierte una sospecha en confianza.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '08:30', ch: 'documento', who: null, titulo: 'Dos boletas, un mismo sueldo', banner: 'assets/3d/scenes/boleta.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Pones lado a lado las boletas de noviembre de Wilder y de Edson, los dos cocineros de Barranco con S/ 1,800 de básico. El neto de Edson es mayor. ${F.has('he_marcaciones') ? 'Ya sabes lo de las 14 horas. ¿Hay algo más?' : 'Algo explica la diferencia.'}</p><p><mark class="clave">Marca solo lo que es un error</mark>, no lo que es distinto.</p>`,
    type: 'flag', prompt: 'Marca las líneas de la boleta de Wilder que son un error (no las diferencias legítimas).',
    doc: { t: 'Boleta de noviembre · Wilder Pinto', sub: 'Comparada con la de Edson Quispe · local Barranco' },
    lines: [
      { id: 'basico', t: 'Básico: S/ 1,800 (igual que Edson).' },
      { id: 'asig', t: 'Asignación familiar: S/ 0. Edson: S/ 123. Wilder tiene una hija de 9 años.', bad: LEY, why: 'Si tiene a su cargo una hija menor de 18 años, le corresponde la asignación familiar (Ley 25129). Falta que la acredite.' },
      { id: 'pension', t: 'Wilder aporta a una AFP; Edson, a la ONP. Los descuentos son distintos.', duda: 'Es una diferencia legítima: cada sistema descuenta distinto. Hay que explicarla, no corregirla.' },
      { id: 'he', t: 'Horas extra: 0. Reloj de Barranco: 14 horas del 21 al 30 de noviembre.', bad: LEY, why: 'Las horas trabajadas en sobretiempo se pagan con su recargo (D.S. 007-2002-TR, art. 10).' },
      { id: 'tard', t: 'Tardanzas: 0.' },
      { id: 'menu', t: 'Descuento «menú del personal»: S/ 60. Edson: S/ 0.', bad: BP, why: 'Si es un descuento por alimentación, debe estar autorizado por escrito y aplicarse igual a quienes lo usan. Edson come lo mismo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -3 : 5, cumplimiento: missLey ? -3 : 3 },
      flags: missLey ? [] : ['boletas_comparadas'], cartera: { wilder: missLey ? 'Diferencias sin entender' : `${hitsLey} errores y 1 diferencia legítima` },
      out: missLey ? 'Tienes las boletas, pero no tienes claro qué es error y qué no. Wilder llega en una hora.' : 'Ya lo tienes: asignación familiar sin cargar, 14 horas sin pagar y un descuento de menú sin sustento. Lo de AFP y ONP no es error: hay que explicarlo.',
      pro: { ok: 'Separar error de diferencia legítima evita prometer de más.', risk: 'Si todo lo distinto te parece error, le darás a Wilder una lista equivocada.', info: 'Busca la autorización del descuento de menú en su legajo.' },
      kusi: missLey ? ['pensando', 'Distinto no siempre es error.'] : ['celebra', '¡Tres errores, una explicación!'],
    }),
    rules: [[LEY, 'Asignación familiar: 10 % de la RMV, monto único, para quien tenga a su cargo hijos menores de 18 años (Ley 25129).']],
    mirada: {
      ve: 'Comparar dos boletas es comparar dos vidas: una tiene hijos, la otra no; una eligió AFP, la otra ONP. El trabajo de Planillas es separar las diferencias que tienen razón de las que son un error.',
      visual: { tipo: 'balanza', a: { t: 'Diferencias legítimas', items: ['AFP o ONP'] }, b: { t: 'Errores', items: ['Asignación familiar sin cargar', '14 horas extra sin pagar', 'Descuento de menú sin sustento'] } },
      normas: [{ ley: 'Ley 25129', dice: 'Los trabajadores que tengan a su cargo hijos menores de 18 años reciben una asignación familiar del 10 % de la remuneración mínima.', practica: 'Es un monto único: con RMV de S/ 1,230 son S/ 123, tenga uno o tres hijos.' }],
    },
  },
  {
    id: 'g2', t: '10:15', ch: 'presencial', who: 'wilder', titulo: 'Wilder y Marisol', banner: 'assets/foto/entrevista-cv.webp', lugar: 'Sala de reuniones', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Wilder llega con su esposa, Marisol, y una carpeta de plástico con todas sus boletas desde hace cinco años. Tiene las manos con cicatrices de cocina y habla bajito, aunque está molesto. ${F.has('wilder_evasivo') ? 'No te mira a los ojos: la última vez le dijiste que «todo estaba en orden».' : 'Te da la mano: «Gracias por recibirme».'}</p><p>«Señorita, Edson y yo hacemos lo mismo. <mark class="clave">¿Por qué él cobra más?</mark>»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas antes de explicar.',
    opts: [
      { id: 'hija', label: '¿Presentó alguna vez la partida de nacimiento de su hija?', info: '«¿Partida? Nadie me la pidió. Cuando entré, mi hija tenía cuatro años. Edson sí dijo que llevó un papel.»' },
      { id: 'afp', label: '¿Sabe en qué sistema de pensiones está?', info: '«En una AFP, creo. Me afiliaron cuando entré a mi primer trabajo, a los 18. Edson dice que él está en la ONP.»' },
      { id: 'menu', label: '¿Firmó algo para el descuento del menú?', info: '«No. Lucho dijo que el menú se descuenta. Pero a Edson no le descuentan, y comemos lo mismo.»' },
      { id: 'quiere', label: '¿Qué necesita usted de esta reunión?', info: 'Marisol responde: «Entender. Y que si nos deben algo, nos lo paguen. No queremos problemas, señorita, solo que sea justo».' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: picks.includes('quiere') ? 3 : 1 }, rel: { wilder: 1 },
      cartera: { wilder: picks.includes('hija') ? 'Falta acreditar a su hija' : 'Reunión en curso' },
      out: picks.includes('hija') ? 'Anotas: «Partida de nacimiento de la hija. Nadie se la pidió en cinco años». Marisol aprieta la mano de Wilder.' : 'Wilder abre su carpeta y busca la boleta de noviembre. Tiene círculos de lapicero en cada línea.',
      kusi: ['curioso', 'Preguntar qué necesita también es explicar.'],
    }),
    mirada: {
      ve: 'Wilder no viene a pelear: viene a entender, y trae su carpeta porque nadie le explicó antes. Preguntar qué necesita la persona, además de qué pasó, cambia el tono de toda la conversación.',
    },
  },
  {
    id: 'g3', t: '10:40', ch: 'presencial', who: 'wilder', titulo: '«Enséñeme la de Edson»', banner: 'assets/foto2/tension.webp', lugar: 'Sala de reuniones', show: ['etica', 'confianza', 'personas'],
    body: () => `<p>Wilder ve que tienes otra boleta en la pantalla. «Esa es la de Edson, ¿no? <mark class="clave">Enséñemela</mark>. Él me deja, somos patas. Si no, ¿cómo sé que no me están mintiendo?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Cerrar esa pantalla y explicarle que no puedes mostrar la boleta de otra persona, pero que sí le vas a explicar cada diferencia de la suya con los criterios que se aplican a todos.',
        res: { q: 'buena', fx: { etica: 5, confianza: 1 }, flags: ['datos_edson'],
          out: 'Wilder frunce el ceño. Marisol le toca el brazo: «Tiene razón, a ti tampoco te gustaría». Vuelven a tu boleta.',
          pro: { ok: 'Proteges los datos de Edson sin dejar a Wilder sin respuesta.', risk: 'Wilder puede sentir que escondes algo, por eso tu explicación tiene que ser muy clara.', info: 'Si Edson quiere mostrarle su boleta, es decisión de Edson, no tuya.' },
          kusi: ['animo', 'Los datos de Edson son de Edson.'] } },
      { id: 'b', label: 'Mostrársela un momento: Wilder dice que Edson le deja y así se convence más rápido.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -3, confianza: 2 }, rel: { wilder: 1 }, flags: ['boleta_ajena'],
          out: 'Wilder mira la boleta de Edson y toma nota del sueldo, la AFP, todo. Esa tarde se lo comenta a Edson, que no sabía nada.',
          pro: { ok: 'Wilder se convence.', risk: 'Mostrar datos de otro trabajador sin su consentimiento vulnera su privacidad (Ley 29733), aunque «sean patas».' },
          kusi: ['preocupado', '¿Edson te dio permiso a ti?'] } },
      { id: 'c', label: 'Decirle que no puedes hablar de nada de Edson ni comparar: solo puedes hablar de su boleta.',
        res: { q: 'aceptable', fx: { etica: 3, confianza: -2, personas: -2 }, flags: ['datos_edson'],
          out: 'Wilder se cruza de brazos: «Entonces no sirve de nada que venga». Te cuesta diez minutos recuperar la conversación.',
          pro: { ok: 'Proteges los datos.', risk: 'Negarte a explicar los criterios generales deja la sospecha intacta.' },
          kusi: ['pensando', 'Proteger no es callar todo.'] } },
    ],
    rules: [[LEY, 'La boleta contiene datos personales: no se muestra a otro trabajador sin consentimiento de su titular (Ley 29733).'], [BP, 'Explica los criterios que se aplican a todos, sin exponer los datos de nadie.']],
    mirada: {
      ve: 'La comparación es la forma más humana de sospechar: «si él cobra más, algo me están quitando». Proteger los datos de Edson y, al mismo tiempo, explicarle a Wilder los criterios que se aplican a ambos es lo que permite que los dos sigan confiando.',
      visual: { tipo: 'cambio', titulo: 'Explicar sin exponer', pares: [['«Enséñeme la de Edson»', 'Así se calcula para todos'], ['Comparar boletas', 'Explicar conceptos'], ['Datos de otro', 'Criterios generales']] },
    },
  },
  {
    id: 'g4', t: '11:30', ch: 'whatsapp', who: null, titulo: 'La explicación por escrito', banner: 'assets/esc/escritorio.webp', lugar: 'Sala de reuniones', show: ['calidad', 'personas', 'confianza'],
    body: () => `<p>Wilder y Marisol entendieron casi todo, pero Marisol te pide: «¿Nos lo puede mandar escrito? Para leerlo en la casa con calma». <mark class="clave">Escríbele a Wilder</mark> lo que conversaron.</p>`,
    type: 'compose', enviaA: 'wilder', para: 'Para: Wilder Pinto', boton: 'Enviar el WhatsApp',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'legit', t: 'La diferencia legítima', ops: [
        { id: 'l1', t: 'Wilder, tú aportas a una AFP y Edson a la ONP: cada sistema descuenta distinto. Eso no es un error.', ok: true, por: 'Explicas lo que no se corrige.' },
        { id: 'l2', t: 'Wilder, los descuentos son cosas del sistema, no te preocupes.', ok: false, por: 'No explica nada.' },
      ] },
      { id: 'errores', t: 'Lo que se corrige', ops: [
        { id: 'e1', t: 'Hay tres cosas que vamos a corregir: la asignación familiar (S/ 123 al mes, desde que nos traigas la partida de tu hija), las 14 horas extra de fin de noviembre y el descuento de menú, que no tiene tu autorización.', ok: true, por: 'Qué se corrige, cuánto y qué falta.' },
        { id: 'e2', t: 'Te vamos a pagar todo lo que te debemos de estos cinco años.', ok: false, por: 'Prometes algo que no está calculado ni aprobado.' },
      ] },
      { id: 'cuando', t: 'Cuándo', ops: [
        { id: 'c1', t: 'Las horas extra y el menú van como reintegro en la planilla del jueves. La asignación empieza cuando presentes la partida. Cualquier duda, me escribes.', ok: true, por: 'Fechas concretas y canal abierto.' },
        { id: 'c2', t: 'Se verá más adelante.', ok: false, por: 'Más adelante es nunca para quien espera.' },
      ] },
    ],
    res: sel => {
      const buenas = ['l1', 'e1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : -1 }, rel: { wilder: q === 'buena' ? 1 : 0 },
        flags: [q === 'buena' ? 'wilder_explicado' : 'wilder_confuso', ...(sel.errores === 'e1' ? ['asignacion_pedida'] : [])], cartera: { wilder: q === 'buena' ? 'Explicado por escrito · reintegro el jueves' : 'Explicación incompleta' },
        out: q === 'buena' ? 'Marisol lee el mensaje en voz alta, despacio. Wilder asiente en cada línea. Antes de irse, te deja una bolsa con dos turrones de Doña Pepa: «De parte de la cocina».' : sel.errores === 'e2' ? 'Wilder se va contento con una promesa de cinco años que nadie ha calculado. Hugo, al leerla, se agarra la cabeza.' : 'Wilder se va con algunas dudas. Volverá a escribir.',
        pro: { ok: 'Un mensaje con lo legítimo, lo que se corrige y cuándo cierra la consulta.', risk: 'Prometer pagos no calculados ni aprobados crea un nuevo reclamo.', info: 'Lo que pasó en años anteriores, revísalo con Hugo antes de decir nada.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Boleta explicada, familia tranquila!' : 'Faltó claridad en algo.'],
      };
    },
    mirada: {
      ve: 'Cuando la explicación se pone por escrito, deja de depender de la memoria de un día tenso. Para Wilder y Marisol, ese mensaje es la prueba de que alguien en la oficina los escuchó.',
      visual: { tipo: 'mensaje', titulo: 'Lo legítimo, lo que se corrige y cuándo', txt: 'AFP y ONP descuentan distinto: no es error. Se corrigen la asignación familiar, las horas extra y el menú. Reintegro el jueves; la asignación, desde que presentes la partida.' },
    },
  },
  {
    id: 'g5', t: '14:40', ch: 'documento', who: null, titulo: 'La tarde corta', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio, con un turrón al lado', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>Wilder se fue. Tienes la tarde y mañana es la PLAME. Lucho escribió preocupado y hay doce cuentas sueldo que el banco necesita mañana. <mark class="clave">Elige tres frentes</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes que atiendes esta tarde.', boton: 'Ir por estos', resumen: 'Atendiste',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'cuentas', cells: ['Conseguir las cuentas sueldo que faltan', 'Sin ellas, el banco rechaza el abono del jueves'] },
      { id: 'reint', cells: ['Cargar el reintegro de Wilder (horas extra y menú) en la planilla del jueves', 'Se lo prometiste por escrito'] },
      { id: 'barranco', cells: ['Revisar quién más en Barranco tiene hijos y no cobra asignación familiar', 'Lucho dice que «no traen la partida»'] },
      { id: 'cinco', cells: ['Calcular las horas extra de Wilder de los últimos cinco años', 'Wilder no lo pidió hoy'] },
      { id: 'lucho', cells: ['Contarle a Lucho todo lo que dijo Wilder', 'Lucho te lo pidió por WhatsApp'] },
    ],
    score: { cuentas: 3, reint: 3, barranco: 2, cinco: 0, lucho: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: picks.includes('cuentas') && picks.includes('reint') ? 4 : -2, tiempo: q === 'buena' ? 2 : 0, etica: picks.includes('lucho') ? -4 : 1 },
        flags: picks.includes('barranco') ? ['barranco_revisado'] : [], cartera: { cuentas: picks.includes('cuentas') ? '10 de 12 cuentas resueltas' : 'Doce cuentas pendientes', wilder: picks.includes('reint') ? 'Reintegro cargado para el jueves' : 'Reintegro sin cargar' },
        out: picks.includes('lucho') ? 'Le cuentas a Lucho lo que conversó Wilder. A la hora, Lucho le escribe a Wilder: «¿Así que fuiste a quejarte?».' : q === 'buena' ? `A las 6:30 tienes diez cuentas, el reintegro cargado${picks.includes('barranco') ? ' y cuatro trabajadores de Barranco con hijos y sin asignación: les mandas el formato' : ''}.` : 'Avanzas, pero algo que vence mañana quedó sin hacer.',
        pro: { ok: 'Lo que vence mañana y lo que prometiste van primero.', risk: 'Contarle a un administrador lo que un trabajador te consultó rompe la confianza de toda la planilla.', info: 'Lo de años anteriores lo decide Hugo con el área legal: anótalo como pendiente.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Promesas cumplidas, cuentas en camino.' : 'Revisa qué vencía mañana.'],
      };
    },
    rules: [[BP, 'Lo que un trabajador consulta a Planillas es reservado: no se le cuenta a su jefe.']],
    mirada: {
      ve: 'Un caso bien atendido abre otros: si Wilder no tenía su asignación, quizá otros tampoco. Buscarlos es corregir de verdad. Contarle a su jefe lo que Wilder dijo, en cambio, es cerrar la puerta a la próxima consulta.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Urgencia', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Agenda', 'No lo hagas'], items: [['Cuentas sueldo', .5, .95], ['Reintegro de Wilder', .3, .9], ['Asignación en Barranco', .5, .6], ['Cinco años de horas', .9, .3], ['Contarle a Lucho', .1, .05]] },
    },
  },
  {
    id: 'g6', t: '17:50', ch: 'whatsapp', who: 'wilder', titulo: '«¿Y si voy a SUNAFIL?»', banner: 'assets/esc/camino.webp', lugar: 'Tu escritorio', show: ['etica', 'confianza'],
    body: () => `<p>Wilder te escribe desde el bus de regreso: «Señorita, gracias por todo. Pero mi cuñado dice que igual vaya a SUNAFIL por lo de los cinco años. <mark class="clave">¿Usted qué dice?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que es su derecho, que tú no puedes ni quieres impedirlo, y recordarle qué se corrige el jueves y que lo de años anteriores lo está revisando Hugo.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3 }, rel: { wilder: 1 }, flags: ['sunafil_respeto'],
          envia: [['wilder', 'Wilder, ir a SUNAFIL es tu derecho y nadie puede impedírtelo. Por nuestra parte, el jueves va tu reintegro de horas extra y menú, y la asignación empieza con la partida. Lo de años anteriores lo está revisando mi jefe y te contaré qué se decide.']],
          out: 'Wilder responde: «Ya. Primero veo qué llega el jueves». Hugo, al leer la copia, asiente: «Así se responde».',
          pro: { ok: 'Respetas su derecho y le das información para decidir.', info: 'Avisa a Hugo: lo de años anteriores necesita una decisión.' },
          kusi: ['animo', 'Su derecho, su decisión. Tu trabajo: corregir.'] } },
      { id: 'b', label: 'Pedirle que no vaya: que ya lo estás solucionando y que eso solo complicaría las cosas.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -3 }, rel: { wilder: -1 }, flags: ['sunafil_presion'],
          envia: [['wilder', 'Wilder, mejor no vayas a SUNAFIL, eso solo complica todo. Ya lo estamos viendo 🙏']],
          out: 'Wilder no responde. Su cuñado, que leyó el mensaje, le dice: «¿Ves? Te quieren callar».',
          pro: { ok: 'Buscas evitar un conflicto.', risk: 'Pedirle a un trabajador que no acuda a la autoridad se lee como presión, aunque tu intención sea buena.' },
          kusi: ['triste', 'Eso sonó a «no hables».'] } },
    ],
    rules: [[BP, 'Acudir a la autoridad de trabajo es un derecho del trabajador; nunca se desalienta.']],
    mirada: {
      ve: 'La mejor manera de que un trabajador no necesite ir a SUNAFIL no es pedírselo: es corregir lo que corresponde y contárselo con claridad. Lo de años anteriores es una decisión que no te toca tomar sola, y lo dices.',
    },
  },
];
