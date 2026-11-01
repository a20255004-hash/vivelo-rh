// Asistente de Bienestar Social · Capítulo 3 · «La visita» · Semana 1, viernes.
// Hilo del mes: visita domiciliaria a la familia de Don Héctor en Tumán. Lo que ves cambia el caso.
// Normas citadas:
// - D.S. 009-97-SA, Reglamento de la Ley 26790, art. 15 (último párrafo): el subsidio por incapacidad temporal se
//   otorga mientras dure la incapacidad y en tanto el trabajador no realice trabajo remunerado.
//   https://lpderecho.pe/trabajador-cobrar-pension-invalidez-temporal-afp-subsidio-incapacidad-temporal-essalud-casacion-9478-2023-junin/
//   https://cdn.www.gob.pe/uploads/document/file/5682558/5046614-informe-tecnico-it_0692-2020-servir-gpgsc.pdf
// - Ley 26790: subsidio por incapacidad temporal desde el día 21.
//   https://www.gob.pe/423-subsidio-para-el-trabajador-por-incapacidad-temporal-solicitar-y-cobrar-el-subsidio-por-incapacidad-temporal
// - Ley 29733, de Protección de Datos Personales: los datos de salud son datos sensibles.

export const CAP = {
  n: 3, titulo: 'La visita', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/cooperativa.webp',
  lugar: 'Tumán · Lambayeque',
  inicio: '07:45', fin: '18:00', cierreHora: '17:45',
  apertura: 'Viernes. La camioneta de la empresa sale a las 8 hacia Tumán, entre cañaverales y humo de quema. Hoy el caso de Don Héctor deja de ser una carpeta.', boton: 'Subir a la camioneta',
  kusi: 'En una casa se escucha con los ojos también. ¡Con respeto y sin apuro!',
  lead: 'Entraste a la casa de los Llontop, viste lo que no estaba en los papeles, cuidaste lo que te confiaron y escribiste un informe social que describe sin juzgar.',
  reflexion: '¿Qué viste hoy en la casa de Don Héctor que no vas a olvidar?',
  siguiente: { n: 4, titulo: 'El lactario', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'hector', p: 'Subsidio de Don Héctor', j: 'Planillas · EsSalud', d: 0, e: 'En curso' },
  { id: 'certificado', p: 'Canje del certificado particular', j: 'Héctor · EsSalud', d: 0, e: 'Hoy' },
  { id: 'familia', p: 'Situación de la familia Llontop', j: 'Bienestar', d: 0, e: 'Visita de hoy' },
  { id: 'deuda', p: 'Préstamo «gota a gota»', j: 'Familia Llontop', d: 0, e: 'Cobro diario' },
  { id: 'retorno', p: 'Pronóstico de retorno', j: 'Médico tratante · Bienestar', d: 0, e: 'Incierto' },
  { id: 'informe', p: 'Informe social', j: 'Bienestar', d: 0, e: 'Por redactar' },
];

export const FUTURO = {
  hector_orientado: ['Le explicaste a Don Héctor que no puede trabajar por paga mientras cobra el subsidio y dejó los motocares.', 'Su rodilla avanzará mejor en las terapias.'],
  hector_reportado: ['Reportaste a Planillas que Don Héctor arreglaba motocares por paga.', 'El subsidio quedó en revisión y la familia se cerró contigo.'],
  hector_callado: ['Viste que Don Héctor arreglaba motocares y no dijiste nada.', 'Alguien más podría verlo antes del retorno.'],
  limitacion_sabida: ['Sabes que el traumatólogo duda de que Don Héctor pueda volver a molienda.', 'Será el centro del capítulo 8.'],
  deuda_alternativa: ['La familia tiene una salida formal para dejar el préstamo «gota a gota».', 'Rosa te lo contará más adelante.'],
  brayan_matricula: ['Brayan sabe que puede pedir reserva de matrícula y volver a la universidad.', 'Te escribirá cuando decida.'],
  informe_respetuoso: ['Tu informe social describe hechos y necesidades, sin juicios.', 'Nelly lo usará cuando se discuta el retorno de Don Héctor.'],
  informe_juicios: ['Tu informe social tiene juicios y datos que no correspondían.', 'Alguien lo leerá en el capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Operario de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  wilmer: { n: 'Wilmer Sandoval', sub: 'Analista de Planillas', c: '#5B6C8F' },
  rosa: { n: 'Rosa Ñiquén', sub: 'Esposa de Don Héctor', c: '#B5651D' },
  brayan: { n: 'Brayan Llontop', sub: 'Hijo de Don Héctor · 20 años', c: '#2E86AB' },
};

export const WSP = [
  { chat: 'grupo', t: '07:40', de: 'Nelly', txt: 'Buena visita 💛 Recuerda: vas a escuchar, no a inspeccionar. Y avísame cuando salgas de Tumán.' },
  { chat: 'wilmer', t: '08:05', de: 'Wilmer', txt: 'Ayer salió el depósito del subsidio del Sr. Llontop en la quincena. Cuando tenga el CITT nuevo me lo pasan.', si: 'subsidio_pagado' },
  { chat: 'wilmer', t: '08:05', de: 'Wilmer', txt: 'Subsidio Llontop cargado.', si: 'planillas_dolida' },
  { chat: 'hector', t: '09:50', de: 'Don Héctor', txt: 'Ya salí de EsSalud señorita. Me dieron mi cargo. Ya estoy yendo para la casa.', si: 'citt_en_marcha' },
  { chat: 'maribel', t: '13:30', de: 'Maribel', txt: 'Hoy guardé la leche en el cooler de mi almuerzo, con hielo de la cafetería. Algo es algo 😅', si: 'maribel_hora' },
  { chat: 'brayan', t: '17:10', de: 'Brayan', txt: 'Señorita soy Brayan. Gracias por lo de la universidad. Lo voy a pensar con mi papá.', si: 'brayan_matricula' },
  { chat: 'rosa', t: '17:30', de: 'Rosa', txt: 'Señorita mañana vamos a la cooperativa con Héctor. Ya no le vamos a abrir al de la moto 🙏', si: 'deuda_alternativa' },
];

export const CORREOS = [
  { t: '07:45', de: 'Nelly Ramírez', para: 'Asistente de Bienestar Social', asunto: 'Para la visita', html: '<p>Tres cosas para hoy:</p><p>1) Preséntate y pide permiso para entrar. Es su casa. 2) No anotes delante de ellos sin explicar para qué. 3) En el informe va lo que viste y lo que te dijeron, no lo que crees.</p><p>Nelly</p>' },
];

export const QUIZ = [
  { q: 'Mientras cobra el subsidio por incapacidad temporal, el trabajador…', ops: ['Puede hacer trabajos por paga si son pequeños', 'No debe realizar trabajo remunerado', 'Debe trabajar medio tiempo', 'Puede trabajar si el supervisor lo autoriza'], ok: 1, por: 'El reglamento de la Ley 26790 (art. 15) otorga el subsidio mientras dure la incapacidad y en tanto no realice trabajo remunerado.' },
  { q: 'En una visita domiciliaria, lo primero es…', ops: ['Revisar la casa', 'Presentarse, explicar para qué vienes y pedir permiso para entrar', 'Tomar fotos para el informe', 'Hablar solo con el trabajador'], ok: 1, por: 'La visita ocurre en el espacio de la familia: el permiso y la claridad sobre el propósito son la base de la confianza.' },
  { q: '¿Qué frase sí va en un informe social?', ops: ['«Familia desordenada y conflictiva»', '«El trabajador parece deprimido»', '«La familia refiere un préstamo informal con cobro diario»', '«Seguramente gastan mal»'], ok: 2, por: 'El informe describe hechos observados y lo que la familia refiere, sin juicios ni diagnósticos que no te corresponden.' },
  { q: 'Ves algo que podría hacer perder un beneficio al trabajador. ¿Qué es lo más profesional?', ops: ['Reportarlo de inmediato sin hablar con él', 'Hacer como que no lo viste', 'Explicarle la regla y sus riesgos, buscar alternativas y registrar la orientación', 'Contárselo a su supervisor'], ok: 2, por: 'Orientar primero protege a la persona y cumple la norma. Ocultarlo o castigarlo sin explicar suele empeorar el caso.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'v1', t: '07:55', ch: 'presencial', who: 'hector', titulo: 'La camioneta', banner: 'assets/foto2/caminan.webp', lugar: 'Camioneta de la empresa · carretera a Tumán', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Don Lucho Chafloque, el chofer, maneja con la radio en una cumbia de Agua Marina y la ventana abierta. ${F.has('citt_en_marcha') ? 'Atrás va Don Héctor, recién bañado, con su DNI y el papel del traumatólogo en una mica. Lo dejarán en EsSalud y lo recogerán al salir.' : 'Don Héctor no viene: te dijo que iría a EsSalud «cuando pueda». Vas sola hacia su casa.'}</p><p>Los cañaverales pasan a los dos lados. Faltan cuarenta minutos. <mark class="clave">¿Cómo aprovechas el camino?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Conversar de otra cosa: de sus 22 años en molienda, de cómo era la planta antes, de Tumán.',
        res: { q: null, fx: { personas: 3, confianza: 2 }, rel: { hector: 1 },
          out: 'Don Lucho y Don Héctor se ponen a recordar la zafra del 98, cuando el Niño inundó los campos. Don Héctor se ríe por primera vez desde que lo conoces.', kusi: ['feliz', 'Antes del caso, la persona.'] } },
      { id: 'b', label: 'Repasar los papeles y la lista de preguntas que llevas para la visita.',
        res: { q: null, fx: { calidad: 2, personas: -1 }, cartera: { informe: 'Guía de visita repasada' },
          out: 'Repasas tu guía: vivienda, ingresos, salud, redes de apoyo. Don Lucho sube el volumen de la radio. Llegas preparada, aunque el camino se hizo largo y en silencio.', kusi: ['pensando', 'Preparada… ¿y cercana?'] } },
    ],
    mirada: { ve: 'Una visita domiciliaria empieza antes de tocar la puerta. Lo que conversas en el camino define cómo te recibirán: como alguien de la empresa que viene a revisar, o como alguien que viene a entender.' },
  },
  {
    id: 'v2', t: '10:30', ch: 'presencial', who: null, titulo: 'La casa de los Llontop', banner: 'assets/foto2/collage.webp', lugar: 'Casa de la familia Llontop · Tumán', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Una casa de adobe y ladrillo a medio terminar, con la puerta abierta y una mesita afuera donde Rosa vende chifles y King Kong de maní. ${F.has('hector_informado') ? 'Rosa te recibe con un vaso de chicha: «La estábamos esperando».' : 'Rosa te mira de arriba abajo antes de hacerte pasar.'} Pides permiso, explicas para qué vienes y entras.</p><p>Dentro hay muchas cosas que mirar, y <mark class="clave">solo alcanzas a anotar dos</mark> antes de que Don Héctor llegue de EsSalud.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos observaciones que más cambian el caso.', boton: 'Anotar estas dos', resumen: 'Anotaste',
    cols: ['Lo que ves', 'Qué podría significar'],
    rows: [
      { id: 'pastillas', cells: ['La caja de pastillas para el dolor está vacía en la repisa, junto a la receta de EsSalud', 'Dejó el tratamiento: ¿por plata o por distancia?'] },
      { id: 'taller', cells: ['En el patio, un motor de motocar desarmado sobre periódicos y herramientas con grasa fresca', 'Alguien está trabajando aquí'] },
      { id: 'cobrador', cells: ['A las 8 pasó «el de la moto azul»: Rosa dice que vuelve mañana y que grita si no le pagan', 'Presión diaria sobre la familia'] },
      { id: 'brayan', cells: ['Brayan duerme en un colchón en la sala a las diez de la mañana, con el casco de la mototaxi al lado', 'Trabaja de noche; dejó la universidad'] },
      { id: 'tele', cells: ['Un televisor grande, nuevo, todavía con el plástico en la pantalla', '¿Gastan mal?'] },
    ],
    score: { pastillas: 3, taller: 3, cobrador: 2, brayan: 2, tele: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, personas: 2 },
        flags: picks.includes('taller') ? ['taller_visto'] : [],
        cartera: { familia: q === 'riesgosa' ? 'Observaciones sueltas' : 'Tratamiento abandonado y trabajo en el patio' },
        out: picks.includes('tele') ? 'Rosa ve hacia dónde miras. «Ese televisor es de mi hermana, señorita. Nos lo dejó para que se lo guardemos porque en su casa entran a robar.» Te arden las orejas.' : picks.includes('taller') ? 'Cuando Don Héctor llega, ve que miras el motor. Se queda callado en la puerta.' : 'Anotas en silencio. Rosa te sirve un poco más de chicha.',
        pro: { ok: 'Miras lo que afecta la salud y el ingreso de la familia, no lo que confirma un prejuicio.', risk: 'Un objeto caro no dice nada sin contexto. Los prejuicios se cuelan rápido en una visita.', info: 'Pregunta por lo que ves antes de interpretarlo.' },
        kusi: [q === 'buena' ? 'curioso' : picks.includes('tele') ? 'sorpresa' : 'pensando', q === 'buena' ? 'Lo que importa no siempre está a la vista.' : '¿Viste o supusiste?'],
      };
    },
    rules: [[BP, 'En una visita, observa lo que afecta salud, ingresos, vivienda y redes de apoyo. Pregunta antes de interpretar.']],
    mirada: {
      ve: 'La visita domiciliaria existe porque los papeles no lo cuentan todo. Pero también es el momento en que más fácil se cuelan los prejuicios: lo que una profesional anota puede ayudar o condenar a una familia.',
      visual: { tipo: 'matriz', x: 'Necesita contexto para entenderse', y: 'Peso en el caso', cuadrantes: ['Pregunta antes', 'Anota y pregunta', 'No te distraigas', 'Anota'], items: [['Pastillas vacías', .3, .9], ['Motor en el patio', .6, .85], ['Cobro diario', .4, .7], ['Brayan durmiendo', .5, .6], ['Televisor nuevo', .9, .1]] },
    },
  },
  {
    id: 'v3', t: '11:15', ch: 'presencial', who: 'hector', titulo: 'El motor del patio', banner: 'assets/foto2/tension.webp', lugar: 'Patio de la casa', show: ['etica', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>${F.has('taller_visto') ? 'Don Héctor te ve mirando el motor.' : 'Al salir al patio por un vaso de agua, ves un motor de motocar desarmado.'} Rosa habla primero: «Le arregla el motocar al vecino y a dos más. Le pagan cincuenta, sesenta soles. ${F.has('gota_a_gota') ? 'Es para el de la moto, señorita, usted ya sabe.' : 'Es para pagar un préstamo, señorita.'}»</p><p>Don Héctor trabaja en cuclillas, con la rodilla operada. <mark class="clave">Y mientras cobra el subsidio, no debería hacer trabajos por paga</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle con calma la regla del subsidio y lo que le hace a su rodilla trabajar en cuclillas. Ofrecerle buscar hoy mismo otra salida para el préstamo, y anotar en el informe que se le orientó.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4, personas: 3 }, rel: { hector: 1 }, flags: ['hector_orientado'], cartera: { hector: 'Orientado: deja los trabajos por paga', deuda: 'Buscar alternativa hoy' },
          out: 'Don Héctor se limpia las manos con un trapo y se queda mirando el motor. «Nadie me dijo, señorita.» Le dice al vecino que lo recoja mañana. Rosa te pregunta, bajito: «¿Y entonces cómo pagamos?».',
          pro: { ok: 'Proteges su subsidio y su recuperación, y no lo dejas solo con el problema que lo empujó a trabajar.', risk: 'Ahora tienes que encontrar esa otra salida, y hoy.', info: 'El art. 15 del reglamento de la Ley 26790 condiciona el subsidio a no realizar trabajo remunerado.' },
          kusi: ['animo', 'La regla y una salida, juntas.'] } },
      { id: 'b', label: 'Informar a Planillas al volver: si cobra subsidio y trabaja por paga, la empresa podría tener problemas con el reembolso.',
        res: { q: 'riesgosa', fx: { cumplimiento: 2, personas: -5, confianza: -3, etica: -2 }, rel: { hector: -1 }, flags: ['hector_reportado'], cartera: { hector: 'Subsidio en revisión por Planillas' },
          out: 'Planillas pone el subsidio «en revisión». Esa noche Rosa le escribe a Nelly: «La señorita vino a nuestra casa a espiarnos». La familia deja de contestarte.',
          pro: { ok: 'Cuidas el reembolso de la empresa.', risk: 'Usaste lo que viste en su casa en su contra, sin explicarle la regla ni darle una salida.', info: 'Una visita domiciliaria no es una inspección. Si la gente siente que la vigilas, deja de abrirte la puerta.' },
          kusi: ['triste', 'Entraste invitada… y saliste como inspectora.'] } },
      { id: 'c', label: 'No decir nada: es poca plata, la familia la necesita y no viniste a fiscalizar.',
        res: { q: 'aceptable', fx: { personas: 2, cumplimiento: -4, etica: -2 }, flags: ['hector_callado'], cartera: { hector: 'Sigue trabajando en el patio' },
          out: 'Don Héctor sigue con el motor. Tú cambias de tema. Esa tarde, en cuclillas, siente un tirón en la rodilla. Y el vecino del motocar trabaja en la planta.',
          pro: { ok: 'Respetas la necesidad de la familia.', risk: 'Callar no lo protege: arriesga su rodilla y su subsidio si alguien más lo ve.' },
          kusi: ['preocupado', 'Callar también es decidir…'] } },
    ],
    rules: [[LEY, 'D.S. 009-97-SA, art. 15: el subsidio se otorga mientras dure la incapacidad y en tanto el trabajador no realice trabajo remunerado.'], [BP, 'Ante algo que pone en riesgo un beneficio, primero orienta y busca alternativas.']],
    mirada: {
      ve: 'En una visita puedes ver cosas que la persona no quería mostrar. Ni castigarlas ni esconderlas: explicarlas y buscar con la familia la salida que la empujó a hacerlas.',
      visual: { tipo: 'balanza', a: { t: 'Por qué arregla motores', items: ['El cobro diario del préstamo', 'Un mes sin subsidio', 'Orgullo: «yo no pido»'] }, b: { t: 'Lo que arriesga', items: ['Su subsidio', 'Su rodilla operada', 'Su retorno a la planta'] } },
      normas: [{ ley: 'D.S. 009-97-SA, Reglamento de la Ley 26790, art. 15', dice: 'El subsidio por incapacidad temporal se otorga mientras dure la incapacidad y en tanto el trabajador no realice trabajo remunerado.', practica: 'Cincuenta soles por un motor pueden costarle a Don Héctor el subsidio completo.' }],
    },
  },
  {
    id: 'v4', t: '12:20', ch: 'presencial', who: 'hector', titulo: 'La mesa de la cocina', banner: 'assets/esc/piensa.webp', lugar: 'Cocina de la casa', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Rosa sirve arroz con frejoles y un huevo frito para todos; no aceptar sería un desaire. Brayan se despierta y se sienta con el casco todavía en la mano. ${F.has('hector_reportado') ? 'Don Héctor casi no habla.' : 'Don Héctor se acomoda con la pierna estirada sobre un banquito.'}</p><p>La camioneta te recoge a la una. <mark class="clave">Dos preguntas más</mark>, y tienen que ser las que importan.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para la mesa.',
    opts: [
      { id: 'medico', label: 'Don Héctor, ¿qué le dijo exactamente el traumatólogo sobre volver a molienda?', info: '«Que con la terapia voy a caminar bien. Pero que cargar sacos y subir las escaleras del trapiche, eso ya no sé. Que lo vea el médico de la empresa.» Rosa lo mira: él nunca lo había dicho en voz alta.' },
      { id: 'prestamo', label: 'Señora Rosa, ¿cuánto falta del préstamo y cómo es el cobro?', info: '«Nos prestaron mil soles. Viene todos los días a las 8 en una moto azul. Ya le hemos dado casi lo mismo y dice que todavía debemos. Si un día no hay, grita en la puerta.»' },
      { id: 'brayan', label: 'Brayan, ¿qué estudiabas y qué pasó con la universidad?', info: '«Ingeniería Agrícola en la Pedro Ruiz, tercer ciclo. Me retiré para manejar de noche. No hice nada con la matrícula, solo dejé de ir.» Se encoge de hombros, pero aprieta el casco.' },
      { id: 'pastillas', label: 'Don Héctor, ¿por qué dejó las pastillas?', info: '«En la farmacia del hospital no había, y en la botica cuestan. Y para la terapia tengo que ir a Chiclayo tres veces por semana. Con qué pasaje, señorita.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: 3, personas: picks.includes('brayan') ? 3 : 2, tiempo: -1 },
      flags: ['limitacion_sabida', ...(picks.includes('brayan') ? ['brayan_hablo'] : [])],
      cartera: {
        retorno: picks.includes('medico') ? 'El traumatólogo duda de la molienda' : 'Héctor menciona dudas sobre volver',
        deuda: picks.includes('prestamo') ? 'Mil soles, cobro diario; ya pagaron casi lo mismo' : 'Cobro diario, monto por saber',
      },
      out: picks.includes('medico') ? 'Escribes en tu libreta, subrayado dos veces: «Retorno: puesto adecuado. Ver con médico ocupacional». Esto no termina con el subsidio.' : 'Al final, mientras lavas tu plato, Don Héctor te dice sin mirarte: «El doctor dice que a molienda ya no sé si vuelvo». Lo anotas en la camioneta.',
      kusi: ['pensando', 'El caso creció: ya no es solo un subsidio.'],
    }),
    rules: [[BP, 'Escucha a cada miembro de la familia: cada uno vive el caso de una forma distinta.']],
    mirada: {
      ve: 'Un caso social casi nunca es de una sola persona. El descanso de Don Héctor ya tocó la universidad de su hijo, la salud de su rodilla y la tranquilidad de su casa. Ver el caso completo es lo que permite ayudar de verdad.',
      visual: { tipo: 'flujo', titulo: 'Cómo creció el caso', pasos: ['Operación de rodilla', 'Subsidio sin pagar', 'Préstamo «gota a gota»', 'Hijo fuera de la universidad', 'Retorno incierto'] },
    },
  },
  {
    id: 'v5', t: '13:40', ch: 'documento', who: null, titulo: 'El borrador del informe', banner: 'assets/esc/escritorio.webp', lugar: 'Camioneta de regreso', show: ['etica', 'calidad', 'cumplimiento'],
    body: () => `<p>En la camioneta dictas el informe social al celular, entre baches. Don Lucho apaga la radio para que se grabe bien. Al releer el texto transcrito, algunas frases te suenan raras.</p><p>Este informe lo leerá Nelly, quizás un médico y quizás un comité. <mark class="clave">Cada palabra puede pesar sobre la familia</mark>.</p>`,
    type: 'flag', prompt: 'Marca las frases que no deberían quedar en el informe social.',
    doc: { t: 'Informe social · Llontop Ñiquén', sub: 'Borrador dictado · visita domiciliaria en Tumán' },
    lines: [
      { id: 'vivienda', t: 'Vivienda de adobe y ladrillo, de propiedad familiar, con servicios de agua y luz.' },
      { id: 'desorden', t: 'Familia desordenada, con gastos poco prioritarios (televisor nuevo).', bad: BP, why: 'Es un juicio, y además basado en un dato que resultó falso. El informe describe, no califica.' },
      { id: 'refiere', t: 'La familia refiere un préstamo informal con cobro diario en la puerta de la casa.' },
      { id: 'depre', t: 'El trabajador presenta un cuadro depresivo.', bad: BP, why: 'No eres quien diagnostica. Puedes describir lo que observaste y sugerir una evaluación profesional.' },
      { id: 'diag', t: 'Diagnóstico: lesión de menisco con secuelas, según historia clínica del Almanzor.', bad: LEY, why: 'El diagnóstico es un dato sensible y no lo necesitas para el informe social. Basta con «descanso médico por operación».' },
      { id: 'motor', t: 'El trabajador realiza trabajos remunerados ocultos, en incumplimiento de las normas.', bad: BP, why: 'Lo convierte en acusación. Lo profesional es registrar el hecho y la orientación brindada.' },
      { id: 'hijo', t: 'El hijo mayor suspendió sus estudios universitarios para trabajar de noche.' },
      { id: 'necesidad', t: 'Necesidades: tratamiento y terapia, alternativa al préstamo informal, evaluación de retorno.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const limpio = !missLey && hitsBp >= 2;
      return {
        q: limpio ? 'buena' : missLey ? 'riesgosa' : 'aceptable',
        out: limpio ? 'Reescribes: «Se observó un motor en reparación en el patio; se orientó al trabajador sobre la condición del subsidio». El informe describe sin condenar.' : missLey ? 'Guardas el informe con el diagnóstico completo. Va a pasar por varias manos antes del retorno de Don Héctor.' : 'Quitas el diagnóstico, pero quedan frases que juzgan a la familia.',
        flags: [limpio ? 'informe_respetuoso' : 'informe_juicios'], rel: { nelly: limpio ? 1 : 0 },
        cartera: { informe: limpio ? 'Hechos, necesidades y orientación' : 'Con juicios por corregir' },
        pro: { ok: 'Un informe social describe hechos observados, lo que la familia refiere y las necesidades.', risk: 'Los juicios y los diagnósticos que no te corresponden siguen a la persona por años.', info: 'Usa «se observa» y «refiere»: separan lo que viste de lo que te contaron.' },
        kusi: limpio ? ['celebra', 'Describiste sin condenar. ¡Qué divino!'] : ['preocupado', 'Las palabras también pesan…'],
      };
    },
    rules: [[LEY, 'Los datos de salud son datos sensibles: en el informe social va lo necesario (Ley 29733).'], [BP, 'En un informe social, separa lo observado de lo referido y evita calificar a la familia.']],
    mirada: {
      ve: 'El informe social es la voz de la familia en lugares donde la familia no está: un comité, un médico, una gerencia. Escrito con juicios, la condena; escrito con hechos, la defiende.',
      visual: { tipo: 'cambio', titulo: 'Del juicio al hecho', pares: [['«Familia desordenada»', '«Vivienda propia, con agua y luz»'], ['«Cuadro depresivo»', '«Se sugiere evaluación psicológica»'], ['«Trabajos ocultos»', '«Se observó un motor; se orientó al trabajador»']] },
    },
  },
  {
    id: 'v6', t: '15:30', ch: 'llamada', who: null, titulo: 'Buscar salidas', banner: 'assets/foto2/callcenter.webp', lugar: 'Oficina de Bienestar', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Vuelves a la oficina con las zapatillas llenas de tierra. ${F.has('hector_orientado') ? 'Le prometiste a Rosa una salida para el préstamo, y es viernes: si no la encuentras hoy, el lunes a las 8 vuelve la moto azul.' : 'Aunque las cosas no quedaron bien en la casa, el cobro diario sigue ahí.'}</p><p>Haces tres llamadas. <mark class="clave">Bienestar no presta plata: conecta a la gente con las salidas que existen</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Cooperativa de ahorro y crédito de los trabajadores de Sipán', 'Contesta la asesora, la señora Capuñay', '«Si es socio, podemos darle un préstamo con descuento por planilla y a una tasa normal. Don Héctor es socio desde hace años, pero nunca pidió nada. Tiene que venir con su esposa y su boleta.»'],
      ['Nelly · desde Chiclayo', 'Contesta en el carro', '«El fondo de emergencia es para emergencias médicas o fallecimientos. Para las pastillas y los pasajes a la terapia sí podría ir. Para pagar al prestamista no: no podemos financiar a un usurero.»'],
      ['Oficina de asuntos académicos · universidad de Brayan', 'Contesta una secretaria', '«Si dejó de venir sin hacer trámite, que se acerque a ver su situación. Hay figuras como la reserva de matrícula; él tiene que consultar con su facultad.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué le propones a la familia?',
    choices: [
      { id: 'a', label: 'Proponer las tres cosas por separado: la cooperativa para cerrar el préstamo, el fondo para las pastillas y los pasajes a la terapia, y que Brayan consulte su situación en la facultad.',
        res: { q: 'buena', fx: { personas: 5, calidad: 4, tiempo: -2 }, rel: { nelly: 1 }, flags: ['deuda_alternativa', 'brayan_matricula'], cartera: { deuda: 'Cooperativa: refinanciar con tasa normal', familia: 'Fondo para pastillas y terapia; Brayan consultará' },
          out: 'Llamas a Rosa y le explicas cada salida, una por una. Ella repite cada cosa en voz alta para que Héctor escuche. Al final dice: «Ya. Una por una, señorita».',
          pro: { ok: 'Cada problema va a la salida que le corresponde. Nada de mezclar el fondo de emergencia con una deuda usurera.', info: 'Acompaña el primer trámite en la cooperativa: es donde la gente suele abandonar.' },
          kusi: ['celebra', '¡Tres salidas, una para cada nudo!'] } },
      { id: 'b', label: 'Pedirle a Nelly una excepción: usar el fondo de emergencia para pagar de una vez al prestamista y cortar el cobro.',
        res: { q: 'riesgosa', fx: { personas: 2, etica: -3, confianza: -2 }, rel: { nelly: -1 }, cartera: { deuda: 'Excepción pedida y negada' },
          out: 'Nelly se niega con firmeza: «Si pagamos a un prestamista, mañana tenemos diez». Pierdes la tarde insistiendo, y la familia sigue sin saber de la cooperativa.',
          pro: { ok: 'Quieres cortar el problema de raíz.', risk: 'El dinero de la empresa no puede terminar en manos de un prestamista informal.' },
          kusi: ['pensando', 'La salida rápida no siempre es la correcta.'] } },
      { id: 'c', label: 'Mandarle a Rosa el número de la cooperativa por WhatsApp y dejar que ellos decidan.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: 2 }, flags: ['deuda_alternativa'], cartera: { deuda: 'Número de la cooperativa enviado' },
          out: 'Rosa responde con un pulgar. No sabe que tiene que ir con su boleta ni que Héctor ya es socio. Y nadie le dijo que el fondo puede cubrir las pastillas.',
          pro: { ok: 'Respetas que la familia decida.', risk: 'Un número suelto, sin explicación, suele quedarse en el celular.' },
          kusi: ['pensando', '¿Un número basta?'] } },
    ],
    rules: [[POL, 'En Sipán, el fondo de emergencia cubre gastos médicos urgentes y fallecimientos, no deudas con terceros.'], [BP, 'Conecta cada necesidad con la salida que existe para ella, y acompaña el primer paso.']],
    mirada: {
      ve: 'Bienestar no resuelve todo con dinero propio: su fuerza está en conocer las redes —la cooperativa, el fondo, la universidad, EsSalud— y en conectar a la familia con la salida correcta para cada problema.',
      visual: { tipo: 'embudo', titulo: 'Cada nudo, su salida', niveles: [['Préstamo «gota a gota» → cooperativa', 3], ['Pastillas y pasajes → fondo de emergencia', 2], ['Universidad de Brayan → su facultad', 1]] },
    },
  },
  {
    id: 'v7', t: '17:20', ch: 'correo', who: null, titulo: 'Para Nelly', banner: 'assets/esc/logro.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Nelly Ramírez', to: 'Asistente de Bienestar Social', asunto: '¿Cómo te fue en Tumán?' },
    body: () => `<p>Ya estoy de vuelta. Cuéntame lo esencial del caso Llontop. <mark class="clave">¿Qué cambia después de la visita?</mark></p><p>Nelly</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Que el caso ya no es solo un subsidio: es el retorno de Don Héctor a un puesto que quizás no puede hacer.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 3 }, rel: { nelly: 1 }, cartera: { retorno: 'Anticipar con médico ocupacional y jefatura' },
          responde: 'Nelly: el subsidio está encaminado. Lo que cambia es el retorno: el traumatólogo duda de que pueda volver a molienda. Propongo pedir desde ya una evaluación del médico ocupacional y empezar a pensar en un puesto adecuado. Además: deuda informal (cooperativa en curso), pastillas y terapia (fondo), hijo fuera de la universidad.',
          out: 'Nelly responde: «Eso es mirar el caso completo. El retorno lo vamos a trabajar con tiempo, no el día antes».', kusi: ['feliz', 'Viste lo que viene, no solo lo de hoy.'] } },
      { id: 'b', label: 'Que la familia está mal y necesita apoyo económico urgente.',
        res: { q: 'aceptable', fx: { confianza: 1 }, responde: 'Nelly: la familia está mal, necesita apoyo económico urgente. Te cuento el lunes.',
          out: 'Nelly responde: «¿Mal cómo? ¿Qué necesitan exactamente?». Te toca escribir otro correo.', kusi: ['pensando', '«Mal» no es un plan.'] } },
    ],
    mirada: { ve: 'Después de una visita, lo valioso no es contar todo lo que viste, sino decir qué cambió en el caso y qué hay que empezar a preparar.' },
  },
];

