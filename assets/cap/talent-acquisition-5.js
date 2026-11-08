// Talent Acquisition Partner · Capítulo 5 · «La contraoferta» · Semana 1, viernes.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas:
// - Ley 30709, Ley que prohíbe la discriminación remunerativa entre varones y mujeres, y su Reglamento,
//   D.S. 002-2018-TR: el empleador debe contar con cuadros de categorías y funciones basados en criterios objetivos
//   y no puede pagar distinto a mujeres y varones por el mismo trabajo sin una justificación objetiva.
//   https://lpderecho.pe/reglamento-ley-30709-ley-prohibe-discriminacion-remunerativa-varones-mujeres
//   https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ds_002-2018-tr.pdf
//   https://lpderecho.pe/discriminacion-salarial-basta-enunciar-criterios-salariales-explicados-justificados-correctamente-resolucion-0047-2025-sunafil-tfl-primera-sala/
// - Ley 26772 (ofertas de empleo sin requisitos discriminatorios), ya citada en el capítulo 1.

export const CAP = {
  n: 5, titulo: 'La contraoferta', dia: 'Semana 1, viernes', foto: 'assets/foto/acuerdo.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:30', fin: '19:30', cierreHora: '19:15',
  apertura: 'Viernes. El piso 9 está medio vacío: los viernes casi todos trabajan desde casa. Tú no. Rocío llega con la banda salarial nueva impresa, como si fuera un tesoro, y a las 9:10 suena tu celular: es Diego Mamani.', boton: 'Sentarte con Rocío',
  kusi: 'Hoy se negocia. Y negociar bien no es ganarle al otro: es que los dos firmen tranquilos.',
  lead: 'Entendiste la banda nueva, respondiste a la oferta en dólares de Diego, armaste una carta oferta sin trampas, defendiste que Patricia gane lo mismo por el mismo trabajo y cerraste la semana.',
  reflexion: '¿Qué pierde una empresa cuando gana una negociación por mucho?',
  siguiente: { n: 6, titulo: 'La diversidad', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: '0 de 12 ofertas' },
  { id: 'bandas', p: 'Bandas salariales', j: 'Compensaciones', d: 0, e: 'Banda nueva de backend' },
  { id: 'ofertas', p: 'Ofertas en curso', j: 'Talent', d: 0, e: 'Diego y Patricia' },
  { id: 'carta', p: 'Plantilla de carta oferta', j: 'Talent · Legal', d: 0, e: 'Versión 2023' },
  { id: 'pipeline', p: 'Pipeline en el ATS', j: 'Talent', d: 0, e: '14 en proceso' },
];

export const FUTURO = {
  banda_entendida: ['Sabes cómo se arma la banda y qué puedes ofrecer sin pedir permiso.', 'Lo usarás en cada oferta.'],
  diego_paquete: ['A Diego le mostraste el paquete completo y le preguntaste qué le importa.', 'Responderá el martes. Capítulo 7.'],
  diego_promesa: ['Le prometiste a Diego igualar los dólares «de alguna forma».', 'Rocío no sabe cómo cumplirlo.'],
  diego_presion: ['Le diste a Diego un ultimátum de 24 horas.', 'Diego no responde bien a la presión.'],
  carta_clara: ['La carta oferta dice todo lo que se acordó, por escrito.', 'Nadie tendrá sorpresas el primer día.'],
  carta_trampa: ['La carta oferta tiene promesas verbales y una penalidad que no debía estar.', 'Alguien lo va a leer con lupa.'],
  pago_equitativo: ['Patricia recibe la misma oferta que Andrés por el mismo nivel y resultado.', 'Rocío lo dejó documentado.'],
  brecha_patricia: ['Patricia recibe menos que Andrés por el mismo trabajo.', 'Los sueldos siempre se terminan sabiendo.'],
  semana_cerrada: ['Cerraste la semana con retroalimentación enviada y ajustes listos.', 'El lunes empiezas sin deudas.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  camila: { n: 'Camila Torres', sub: 'Backend · candidata', who: 'dev' },
  rocio: { n: 'Rocío Paredes', sub: 'Analista de Compensaciones', c: '#C05621' },
  diego: { n: 'Diego Mamani', sub: 'Backend senior · candidato', c: '#6B3FA0' },
  martin: { n: 'Martín Ccori', sub: 'Backend · candidato', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'talent', t: '08:35', de: 'Valeria', txt: 'Hoy trabajo desde casa, pero si algo se complica con una oferta, me llamas. Literal, me llamas 📞' },
  { chat: 'leonardo', t: '10:40', de: 'Leonardo', txt: '¿Diego firma o no firma? Es el que más quiero.' },
  { chat: 'martin', t: '12:30', de: 'Martín', txt: 'Confirmado el lunes a las 10 para probar la plataforma. Gracias.', si: 'ajuste_hecho' },
  { chat: 'camila', t: '15:15', de: 'Camila', txt: 'Mañana hago la prueba 💪 Una pregunta rápida: ¿la banda es la misma para todos los semi-senior?' },
  { chat: 'diego', t: '17:05', de: 'Diego', txt: 'Gracias por el detalle. Lo hablo con mi esposa el fin de semana y te respondo el martes, ¿ok?', si: 'diego_paquete' },
  { chat: 'diego', t: '17:05', de: 'Diego', txt: '¿24 horas? Ok… te aviso.', si: 'diego_presion' },
  { chat: 'rocio', t: '18:20', de: 'Rocío', txt: 'Dejé documentado por qué Patricia y Andrés están en el mismo punto de la banda. Eso es lo que nos va a pedir SUNAFIL si algún día pregunta 😉', si: 'pago_equitativo' },
];

export const CORREOS = [
  { t: '09:00', de: 'Rocío Paredes', para: 'Talent', asunto: 'Banda nueva · Backend', html: '<p>Les dejo la banda nueva de backend, basada en dos encuestas salariales de mercado y en el cuadro de categorías y funciones de la empresa. Semi-senior y senior tienen rangos distintos; dentro de cada rango, la posición depende de experiencia y resultado de la evaluación.</p><p>Hasta el punto medio, Talent puede ofrecer sin pedir aprobación. Por encima, firma Valeria. Fuera de banda, firma Gerencia.</p><p>Rocío</p>' },
  { t: '13:15', de: 'ATS · Código Andino', para: 'Talent Acquisition Partner', asunto: 'Evaluaciones listas · Patricia Lozano y Andrés Cárdenas', html: '<p>Ambas evaluaciones técnicas fueron calificadas por dos evaluadores. Patricia Lozano: 11/12. Andrés Cárdenas: 11/12. Ambos recomendados para backend semi-senior.</p>' },
];

export const QUIZ = [
  { q: 'Un candidato compara una oferta en planilla en soles con una en dólares como contratista. Lo correcto es…', ops: ['Decirle que la de dólares es mala', 'Comparar el paquete completo: beneficios, estabilidad, impuestos, crecimiento y lo que a él le importa', 'Igualar los dólares sin consultar', 'Ignorar la otra oferta'], ok: 1, por: 'El sueldo bruto no es todo el paquete. Ayudarlo a comparar con información completa es negociar con honestidad.' },
  { q: 'Dos personas con el mismo puesto y el mismo resultado de evaluación reciben ofertas distintas solo porque una pidió menos. Según la Ley 30709…', ops: ['Está bien: cada uno negocia', 'La diferencia salarial entre varones y mujeres debe tener una justificación objetiva', 'Solo aplica en el Estado', 'Solo importa si se enteran'], ok: 1, por: 'La Ley 30709 prohíbe la discriminación remunerativa entre varones y mujeres (art. 1) y manda fijar sin discriminación la remuneración de cada categoría (art. 3); su reglamento pide criterios objetivos.' },
  { q: '¿Qué NO debería ir en una carta oferta?', ops: ['Remuneración y modalidad', 'Fecha de ingreso', 'Una promesa verbal de aumento «si te portas bien»', 'Vigencia de la oferta'], ok: 2, por: 'Lo que no está por escrito no existe, y una promesa vaga genera conflictos.' },
  { q: 'El cuadro de categorías y funciones sirve para…', ops: ['Decorar el manual', 'Ordenar puestos y remuneraciones con criterios objetivos', 'Pagar menos a los nuevos', 'Que nadie negocie'], ok: 1, por: 'Es la base para justificar por qué alguien gana lo que gana (Ley 30709 y su Reglamento).' },
  { q: 'Darle a un candidato senior un ultimátum de 24 horas suele…', ops: ['Cerrar la negociación rápido', 'Generar desconfianza y empujarlo hacia la otra oferta', 'Ser obligatorio', 'No tener efecto'], ok: 1, por: 'La presión funciona mal con quien tiene alternativas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '08:50', ch: 'presencial', who: null, titulo: 'La banda nueva', banner: 'assets/esc/planilla.webp', lugar: 'Escritorio de Rocío · piso 9', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Rocío Paredes tiene 52 años, veinte en compensaciones y una taza que dice «No es personal, es la banda». Extiende la hoja sobre tu escritorio. ${F.has('plazo_honesto') ? '«Esto salió porque alguien le dijo la verdad al comité.»' : '«La aprobaron ayer, a la carrera.»'}</p><p>«Antes de que llame tu candidato, <mark class="clave">pregúntame lo que necesites</mark>. Después no me vas a encontrar.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Rocío.',
    opts: [
      { id: 'como', label: '¿Cómo se decide en qué punto de la banda entra alguien?', info: '«Por experiencia y por el resultado de la evaluación, con los mismos criterios para todos. No por lo que pidió ni por lo bien que negocia. Si dos personas tienen el mismo nivel y el mismo resultado, entran en el mismo punto.»' },
      { id: 'dolares', label: '¿Qué hacemos contra las ofertas en dólares?', info: '«No siempre podemos igualarlas. Pero muchas son como contratista: sin gratificaciones, sin CTS, sin EsSalud, sin vacaciones pagadas. Hay que comparar el paquete completo, no el número bruto. Y preguntar qué le importa a la persona.»' },
      { id: 'limite', label: '¿Hasta dónde puedo ofrecer yo?', info: '«Hasta el punto medio, sin pedir permiso. Más arriba, Valeria. Fuera de banda, Gerencia, y eso tarda una semana. Nunca prometas lo que no puedes firmar.»' },
      { id: 'secreto', label: '¿Le puedo decir a un candidato la banda completa?', info: '«El rango del puesto, sí: ya está en el aviso. Lo que gana cada persona, no: eso es confidencial.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('como') || picks.includes('dolares') ? 3 : 1, tiempo: -1 }, rel: { 'valeria-ta': 0 },
      flags: picks.includes('limite') || picks.includes('como') ? ['banda_entendida'] : [],
      out: 'Rocío dobla la hoja en cuatro y te la deja. «Guárdala. Y cuando dudes, vuelve aquí.» Suena tu celular: Diego.',
      kusi: ['curioso', 'Ahora sabes hasta dónde puedes llegar.'],
    }),
    mirada: {
      ve: 'Una banda salarial es un rango para cada puesto, armado con datos de mercado y con el cuadro de categorías de la empresa. Le da al Talent Acquisition Partner un margen para negociar sin improvisar, y protege la equidad interna.',
      visual: { tipo: 'rango', titulo: 'Banda de backend senior (en miles de soles al mes)', min: 10, max: 20, banda: [12, 17], marcas: [['Punto medio', 14.5], ['Oferta de Miami convertida', 15.5], ['Equipo actual promedio', 13.5]] },
    },
  },
  {
    id: 'e2', t: '09:10', ch: 'llamada', who: null, titulo: 'Diego y los dólares', banner: 'assets/foto/llamada.webp', lugar: 'Cabina de llamadas del piso 9', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Diego habla rápido, como quien ya decidió que esta llamada será corta. ${F.has('inmail_personal') ? 'Pero te tiene confianza: tu primer mensaje fue el único que leyó entero esa semana.' : 'No te conoce mucho todavía.'}</p><p>«Te soy directo: <mark class="clave">una empresa de Miami me ofrece 4,200 dólares al mes, remoto, como contratista</mark>. Si no se acercan, no tiene sentido seguir.»</p>`,
    type: 'calls',
    calls: [['Diego Mamani', 'Backend senior · oferta en dólares', 'Me encanta su proyecto, en serio. Pero tengo una hija de dos años y un departamento en Surco que pagar.'], ['Rocío Paredes', 'Compensaciones · en el chat', 'Fuera de banda no llegamos esta semana. Hasta el tope, con firma de Valeria, sí.'], ['Valeria Núñez', 'Head of Talent · por teléfono', 'Si vale la pena, firmo el tope. Pero no prometas nada que no esté en la banda.']],
    prompt: 'Ya hablaste con Rocío y con Valeria. Vuelves a llamar a Diego. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Mostrarle el paquete completo en planilla (con gratificaciones, CTS, EsSalud y vacaciones), ofrecer el tope de banda con firma de Valeria y preguntarle qué más le importa, además del sueldo.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3, tiempo: -1 }, rel: { 'valeria-ta': 1 }, flags: ['diego_paquete'], cartera: { ofertas: 'Diego: tope de banda, paquete completo explicado' },
          out: 'Diego se queda callado. «Nadie me había hecho la cuenta con la CTS y la gratificación. Y lo de EsSalud… mi hija.» Pregunta por la modalidad: dos días en San Isidro le pesan menos que no tener seguro. Pide el fin de semana para pensarlo.',
          pro: { ok: 'Comparas manzanas con manzanas y escuchas lo que de verdad le importa.', risk: 'Puede elegir la otra oferta igual, y está bien: decidirá con información completa.', info: 'No hables mal de la otra empresa: compara con datos.' },
          kusi: ['celebra', '¡Negociación con la cuenta completa!'] } },
      { id: 'b', label: 'Decirle que van a igualar los 4,200 dólares «de alguna forma», para no perderlo, y ver luego cómo se arregla con Rocío.',
        res: { q: 'riesgosa', fx: { confianza: -3, cumplimiento: -3 }, rel: { 'valeria-ta': -1 }, flags: ['diego_promesa'],
          out: 'Diego se entusiasma. Rocío, cuando le cuentas, se quita los lentes: «¿Con qué firma vas a pagar eso?». Ahora tienes una promesa que no puedes cumplir.',
          pro: { ok: 'Diego sigue en el proceso, por ahora.', risk: 'Una promesa fuera de banda que luego no se cumple rompe la confianza justo antes del ingreso, y desordena la equidad del equipo.' },
          kusi: ['preocupado', 'Eso no lo puedes firmar…'] } },
      { id: 'c', label: 'Ofrecer el tope y decirle que la oferta vence en 24 horas, para que no se quede esperando a Miami.',
        res: { q: 'aceptable', fx: { confianza: -2, tiempo: 2 }, flags: ['diego_presion'],
          out: 'Diego responde con un «ya, veo» que suena frío. Las ofertas tienen vigencia, pero 24 horas a un senior con dos propuestas suena a presión.',
          pro: { ok: 'La oferta es buena y tiene fecha.', risk: 'Con un candidato que tiene alternativas, el ultimátum empuja hacia la otra puerta.' },
          kusi: ['pensando', 'Una fecha sí; una amenaza, no.'] } },
    ],
    rules: [[POL, 'En Código Andino, Talent ofrece hasta el punto medio de la banda; hasta el tope firma la Head of Talent; fuera de banda, Gerencia.'], [BP, 'Compara paquetes completos, no números brutos.']],
    mirada: {
      ve: 'Competir con ofertas en dólares no siempre se gana con dinero. Muchas son contratos como independiente, sin beneficios de planilla ni seguro. Un buen negociador hace visible el paquete completo, pregunta qué le importa a la persona y nunca promete lo que no puede firmar.',
      visual: { tipo: 'balanza', a: { t: 'Miami, como contratista', items: ['Más dólares brutos', 'Sin gratificaciones ni CTS', 'Sin EsSalud', 'Remoto total'] }, b: { t: 'Código Andino, en planilla', items: ['Tope de banda', 'Gratificaciones, CTS y vacaciones', 'EsSalud para su familia', 'Dos días en San Isidro'] } },
    },
  },
  {
    id: 'e3', t: '11:20', ch: 'documento', who: null, titulo: 'La carta oferta', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>La plantilla de carta oferta es de 2023 y la escribió alguien con mucha imaginación. Antes de mandar la primera, la rehaces.</p><p>Valeria tiene una regla: <mark class="clave">«Lo que no está en la carta, no existe»</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la carta oferta.', boton: 'Guardar la plantilla',
    bloques: [
      { id: 'basico', t: 'Lo esencial', n: 3, ops: [
        { id: 'b1', t: 'Puesto, remuneración mensual y beneficios de planilla.', ok: true },
        { id: 'b2', t: 'Modalidad (dos días presenciales en San Isidro) y horario.', ok: true },
        { id: 'b3', t: 'Fecha de ingreso tentativa y vigencia de la oferta.', ok: true },
        { id: 'b4', t: '«Aumento a los tres meses si te va bien», sin monto ni criterio.', ok: false, por: 'Una promesa vaga es un conflicto anunciado.' },
      ] },
      { id: 'cond', t: 'Condiciones', n: 2, ops: [
        { id: 'c1', t: 'Guardias rotativas: una semana al mes, con su compensación.', ok: true, por: 'Lo que contaste en el proceso, por escrito.' },
        { id: 'c2', t: 'Equipo que la empresa entrega para trabajar (laptop) y apoyo para el trabajo remoto.', ok: true },
        { id: 'c3', t: 'Penalidad de tres sueldos si renuncia antes de dos años.', ok: false, por: 'No corresponde en una carta oferta y espanta a cualquiera.' },
      ] },
      { id: 'cierre', t: 'Cierre', n: 1, ops: [
        { id: 'k1', t: 'A quién escribir si tiene dudas, y que el contrato llegará antes del ingreso.', ok: true },
        { id: 'k2', t: '«Esta oferta es confidencial; si la compartes, se anula.»', ok: false, por: 'Suena a amenaza y no tiene sentido.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -4, calidad: q === 'buena' ? 3 : 0 },
        flags: [q === 'riesgosa' ? 'carta_trampa' : 'carta_clara'], cartera: { carta: q === 'riesgosa' ? 'Con promesas vagas y una penalidad' : 'Plantilla clara: todo por escrito' },
        out: q === 'buena' ? 'Legal revisa la plantilla en 20 minutos y solo cambia una coma. «Por fin una carta que no tengo que reescribir.»' : q === 'aceptable' ? 'Legal la aprueba con dos comentarios.' : 'Legal te devuelve la carta con la penalidad tachada en rojo y una nota: «Esto no».',
        pro: { ok: 'Una carta oferta clara evita que el primer día empiece con un «a mí me dijeron otra cosa».', risk: 'Promesas vagas y penalidades excesivas generan desconfianza y conflictos.', info: 'La carta no reemplaza al contrato: anúncialo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Todo por escrito. ¡Qué divino!' : 'Algunas líneas sobran.'],
      };
    },
    mirada: { ve: 'La carta oferta es el resumen escrito de todo lo que se negoció. Si algo se habló y no está, se pierde; si algo está y no se habló, se rompe la confianza. Por eso conviene que repita lo que se contó en el proceso: modalidad, guardias, equipo y fecha.' },
  },
  {
    id: 'e4', t: '14:00', ch: 'presencial', who: 'cto', titulo: 'Patricia y Andrés', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Leonardo · piso 9', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Patricia Lozano y Andrés Cárdenas sacaron 11 de 12 en la prueba, con dos evaluadores. Mismo nivel, mismos años de experiencia. En la primera conversación, Andrés pidió el punto medio de la banda; Patricia, bastante menos.</p><p>Leonardo no levanta la vista de su pantalla: «Fácil. <mark class="clave">A cada uno lo que pidió</mark>. Nos ahorramos plata con ella y nadie sale perdiendo».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer el mismo punto de la banda para los dos, porque tienen el mismo nivel y resultado, y explicarle a Leonardo el riesgo de pagar distinto por lo mismo.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: 1 }, rel: { cto: 0 }, flags: ['pago_equitativo'], cartera: { ofertas: 'Patricia y Andrés: mismo punto de banda' },
          out: 'Leonardo levanta la vista. «¿Y si ella aceptaba menos?» Le explicas que en seis meses lo sabrán, que la ley pide criterios objetivos y que Rocío tiene que poder justificar cada sueldo. «Ok. Que Rocío lo deje escrito.»',
          pro: { ok: 'Pagar igual por el mismo trabajo, con criterios objetivos, protege a la persona y a la empresa.', risk: 'Pagas más de lo que Patricia pidió: es una inversión en que se quede.', info: 'Cuando alguien pide menos que su valor, una buena oferta crea lealtad.' },
          kusi: ['celebra', 'Mismo trabajo, misma oferta. ¡Así!'] } },
      { id: 'b', label: 'Hacerle caso: cada uno negoció lo suyo y Patricia aceptará contenta lo que pidió.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5 }, rel: { cto: 1 }, flags: ['brecha_patricia'], cartera: { ofertas: 'Patricia, por debajo de Andrés' },
          out: 'Patricia acepta feliz. Andrés también. Dentro de unos meses, en un almuerzo, comparan sueldos. Y no hay ningún criterio objetivo que explique la diferencia.',
          pro: { ok: 'Ahorro inmediato.', risk: 'Pagar distinto a una mujer y a un varón por el mismo trabajo, sin justificación objetiva, es discriminación remunerativa (Ley 30709).' },
          kusi: ['indignado', 'Lo que pidió no es lo que vale…'] } },
      { id: 'c', label: 'Subirle un poco a Patricia, pero dejarla algo por debajo de Andrés, para que Leonardo sienta que ganó algo.',
        res: { q: 'aceptable', fx: { etica: 0, cumplimiento: -2 }, flags: ['brecha_patricia'],
          out: 'Leonardo acepta. La diferencia es más pequeña, pero sigue ahí, y nadie podrá explicar por qué existe.',
          pro: { ok: 'Achicas la brecha.', risk: 'Una brecha pequeña sin justificación sigue siendo una brecha.' },
          kusi: ['pensando', 'Más chiquita… pero ahí está.'] } },
    ],
    rules: [[LEY, 'Está prohibida la discriminación remunerativa entre varones y mujeres; las diferencias deben responder a criterios objetivos (Ley 30709 y su Reglamento, D.S. 002-2018-TR).'], [BP, 'El punto de la banda se decide por experiencia y evaluación, no por cuánto pidió cada uno.']],
    mirada: {
      ve: 'Pagar «lo que cada uno pidió» parece neutral, pero no lo es: muchas personas, y con frecuencia más mujeres, piden menos de lo que vale su trabajo. Por eso la equidad salarial se protege con criterios objetivos definidos antes de la negociación.',
      visual: { tipo: 'cambio', titulo: 'Dos ofertas, un criterio', pares: [['Andrés pidió el punto medio', 'Andrés: punto medio'], ['Patricia pidió menos', 'Patricia: punto medio'], ['«A cada uno lo que pidió»', 'Mismo nivel y resultado, misma oferta']] },
      normas: [{ ley: 'Ley 30709 y su Reglamento (D.S. 002-2018-TR)', dice: 'Prohíbe la discriminación remunerativa entre varones y mujeres. El empleador debe tener cuadros de categorías y funciones con criterios objetivos, y las diferencias salariales deben poder justificarse.', practica: 'Rocío documenta por qué Patricia y Andrés están en el mismo punto de la banda.' }],
    },
  },
  {
    id: 'e5', t: '16:10', ch: 'whatsapp', who: 'dev', titulo: 'La pregunta de Camila', banner: 'assets/foto2/celebra-tablet.webp', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Camila te escribió: «¿La banda es la misma para todos los semi-senior?». ${F.has('pago_equitativo') ? 'Después de lo de Patricia, puedes responder sin titubear.' : F.has('brecha_patricia') ? 'Te acuerdas de la conversación con Leonardo y se te aprieta el estómago.' : ''}</p><p>Mañana hace la prueba. <mark class="clave">Le respondes</mark>.</p>`,
    type: 'compose', enviaA: 'camila', para: 'Para: Camila Torres · candidata', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'banda', t: 'La banda', ops: [
        { id: 'b1', t: 'Sí: el rango del puesto es el del aviso, igual para todos los semi-senior.', ok: true, por: 'Responde exactamente lo que preguntó.' },
        { id: 'b2', t: 'Depende mucho de cada caso, mejor no te adelanto.', ok: false, por: 'Suena a que hay algo que esconder.' },
      ] },
      { id: 'punto', t: 'Cómo se ubica cada persona', ops: [
        { id: 'p1', t: 'Dónde entras dentro del rango depende de tu experiencia y del resultado de la evaluación, con los mismos criterios para todos.', ok: true, por: 'Explica el criterio.' },
        { id: 'p2', t: 'Dónde entras depende de cuánto pidas, así que pide alto 😉', ok: false, por: 'Convierte la equidad en habilidad para negociar.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'k1', t: 'Mucha suerte mañana. Cualquier duda con la plataforma, me escribes.', ok: true },
        { id: 'k2', t: 'Éxitos 🍀', ok: null, por: 'Amable, pero corto.' },
      ] },
    ],
    res: sel => {
      const buenas = ['b1', 'p1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 3 : q === 'riesgosa' ? -2 : 1, etica: sel.punto === 'p1' ? 2 : -1 }, rel: { dev: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Camila responde: «Eso es justo lo que quería saber. En mi chamba actual descubrí que un compañero que entró conmigo gana más… por “negociar mejor”».' : q === 'riesgosa' ? 'Camila responde: «Ah, ok». Mañana hará la prueba con una duda más.' : 'Camila agradece la respuesta.',
        pro: { ok: 'Explicar el criterio de la banda genera confianza sin revelar sueldos de nadie.', risk: 'Decir «pide alto» convierte la equidad en una competencia de negociadores.', info: 'El rango del puesto se puede compartir; el sueldo de cada persona, no.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Criterio claro, candidata tranquila.' : '¿Respondiste lo que preguntó?'],
      };
    },
    mirada: { ve: 'Cada vez más candidatos preguntan por la equidad salarial antes de aceptar. Poder explicar cómo se decide el sueldo, sin revelar el de nadie, es parte de la marca de la empresa y una forma de cumplir la ley en la práctica.' },
  },
  {
    id: 'e6', t: '17:30', ch: 'sistema', who: null, titulo: 'Antes del fin de semana', banner: 'assets/esc/reloj.webp', lugar: 'ATS · tablero de la vacante', show: ['tiempo', 'personas', 'cumplimiento'],
    body: () => `<p>Son las 5:30 de un viernes. El piso está casi vacío y el guardia ya apagó la mitad de las luces. En el ATS tienes una fila de pendientes y energía para tres.</p><p>Lo que no cierres hoy <mark class="clave">te espera el lunes, más grande</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes que cierras hoy.', boton: 'Cerrar estos', resumen: 'Cerraste',
    cols: ['Pendiente', 'Lo que sabes'],
    rows: [
      { id: 'feedback', cells: ['Mandar retroalimentación a los 4 que no pasaron la prueba', 'Lo prometiste a todos en la invitación'] },
      { id: 'martin', cells: ['Confirmar con TI la plataforma para el ajuste de Martín', 'Su prueba es el lunes a las 10'] },
      { id: 'patricia', cells: ['Mandar las ofertas de Patricia y Andrés con la plantilla nueva', 'Ya tienes las firmas'] },
      { id: 'post', cells: ['Publicar en LinkedIn una foto del meetup', 'Marketing lo pidió «para el fin de semana»'] },
      { id: 'excel', cells: ['Ponerle colores al Excel de pipeline', 'Se ve feo en la reunión'] },
      { id: 'leo', cells: ['Responder a Leonardo si Diego firma', 'Todavía no lo sabes'] },
    ],
    score: { feedback: 3, martin: 3, patricia: 3, post: 0, excel: -1, leo: 1 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : 0, personas: picks.includes('feedback') ? 4 : -2, cumplimiento: picks.includes('martin') ? 3 : -3 },
        flags: q === 'buena' ? ['semana_cerrada'] : [], cartera: { ofertas: picks.includes('patricia') ? 'Ofertas de Patricia y Andrés enviadas' : 'Ofertas de Patricia y Andrés listas, sin enviar', pipeline: '14 en proceso · 2 ofertas en la calle' },
        out: q === 'buena' ? 'A las 7:10 cierras la laptop. Cuatro personas recibieron retroalimentación, Martín tiene su plataforma lista y dos ofertas salieron. Bajas por Las Begonias pensando en un ceviche de viernes.' : picks.includes('excel') ? 'El Excel queda precioso. Los cuatro de la prueba siguen esperando la respuesta que les prometiste.' : 'Cierras algunas cosas. Algo prometido queda para el lunes.',
        pro: { ok: 'Lo prometido a personas y lo que tiene fecha va primero.', risk: 'La retroalimentación que no llega es la que más daña la marca en la comunidad.', info: 'A Leonardo, dile que Diego responde el martes: también es una respuesta.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Semana cerrada sin deudas!' : '¿Qué prometiste esta semana?'],
      };
    },
    mirada: {
      ve: 'La experiencia del candidato se juega en los detalles que nadie supervisa: la retroalimentación que se prometió, el ajuste que tiene que estar listo, la oferta que no puede esperar al lunes. Ahí se construye, o se pierde, la reputación de un área de Talent.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Promesa a una persona', cuadrantes: ['Hazlo hoy', 'Hazlo hoy', 'Puede esperar', 'No es urgente'], items: [['Retroalimentación', .5, .95], ['Plataforma de Martín', .35, .9], ['Ofertas', .3, .85], ['Respuesta a Leonardo', .1, .5], ['Post del meetup', .2, .2], ['Colores del Excel', .3, .05]] },
    },
  },
  {
    id: 'e7', t: '18:50', ch: 'correo', who: null, titulo: 'La primera semana', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Valeria Núñez', to: 'Talent Acquisition Partner', asunto: 'Semana 1 · ¿cómo cerramos?' },
    body: (n, F) => `<p>Cierre de semana: ¿cuántas ofertas, qué riesgos y qué necesitas de mí el lunes? ${F.has('plazo_optimista') ? 'Gerencia sigue diciendo «12 en dos semanas» en cada reunión.' : 'El comité quiere los números.'}</p><p><mark class="clave">En corto, porfa</mark>.</p><p>V.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Dos ofertas enviadas, el riesgo principal y un pedido concreto.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { 'valeria-ta': 1 }, responde: 'Valeria: semana 1 cerrada con 2 ofertas enviadas (Patricia y Andrés), Diego decide el martes y 14 personas en proceso. Riesgo: backend senior y DevOps compiten con ofertas en dólares. Pedido: que el lunes revisemos juntos los 40 finalistas de todas las vacantes; hay algo en la mezcla que no me cuadra.',
          out: 'Valeria responde a las 7:40: «Lo de los finalistas… sí, lo vi. El lunes a las 9». Te vas con la sensación de que el lunes viene algo incómodo.', kusi: ['celebra', 'Números, riesgo y pedido. ¡Bacán!'] } },
      { id: 'b', label: 'Que vamos súper bien y que la próxima semana caen todas las ofertas.',
        res: { q: 'aceptable', fx: { confianza: -1 }, responde: 'Valeria: vamos súper bien, la próxima semana caen todas 🙌',
          out: 'Valeria responde con un corazón. El lunes, cuando vea que hay 2 ofertas de 12, el corazón se va a convertir en una reunión.', kusi: ['pensando', '¿Súper bien con 2 de 12?'] } },
    ],
    mirada: { ve: 'Al final de cada semana, un buen Talent Acquisition Partner informa tres cosas: avance real en números, el riesgo principal y lo que necesita para la semana siguiente. Así su jefa puede defender el proceso ante gerencia.' },
  },
];
