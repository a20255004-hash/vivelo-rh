// Generalista de RR.HH. en operación minera · Capítulo 5 · «La evaluación local» · Semana 1, viernes.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas:
// - D.S. 024-2016-EM, Reglamento de Seguridad y Salud Ocupacional en Minería, art. 118: exámenes médicos ocupacionales
//   (preocupacionales y periódicos) a cargo del titular de actividad minera. Un proyecto de ley del Congreso advierte que
//   algunas empresas lo interpretan de forma inadecuada, con efectos discriminatorios.
//   https://sinia.minam.gob.pe/normas/aprueban-reglamento-seguridad-salud-ocupacional-mineria
//   https://api.congreso.gob.pe/spley-portal-service/archivo/MzY4OTQ3/pdf
// - Ley 29733 (protección de datos personales): los datos de salud son datos sensibles.
// - Ley 26772, ya citada en el capítulo 4.

export const CAP = {
  n: 5, titulo: 'La evaluación local', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/hospital.webp',
  lugar: 'Minera Puquio · Apurímac, 4,100 m s. n. m.',
  inicio: '06:00', fin: '20:00', cierreHora: '19:45',
  apertura: 'Tu día 5 de 14. A las 6:50 llega el bus de la comunidad: treinta personas con chompas de alpaca, DNI en la mano y nervios en la cara. Algunas no durmieron.', boton: 'Recibir al bus',
  kusi: 'Hoy unos van a pasar y otros no. Lo que importa es cómo se entera cada uno.',
  lead: 'Ordenaste el día de evaluación, entendiste los resultados con el médico, cuidaste los datos de salud de cada persona, cumpliste con Wilber y armaste una ruta para quienes no pasaron todavía.',
  reflexion: '¿Cómo se le dice «todavía no» a alguien que necesita el trabajo?',
  siguiente: { n: 6, titulo: 'El rumor', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'comunidad', p: 'Evaluación de los 30 comuneros', j: 'Doña Juana · Comunidad', d: 0, e: 'Hoy' },
  { id: 'comedor', p: 'Revisión del acta del comedor', j: 'Wilber · Gladys', d: 0, e: 'Hoy a las 12' },
  { id: 'contratistas', p: 'Saldo de Movitierra', j: 'Ing. Mario Salas', d: 0, e: 'Vence hoy' },
  { id: 'vacantes', p: '24 vacantes de Operaciones', j: 'Ing. Valdivia', d: 0, e: 'Según resultados' },
];

export const FUTURO = {
  resultados_reservados: ['Cada persona supo su resultado en privado; la directiva solo vio apto u observado, con su permiso.', 'Doña Juana confiará en el proceso cuando corra el rumor.'],
  resultados_expuestos: ['Los diagnósticos de los comuneros circularon en la comunidad.', 'Don Teodoro no volverá a la mina; la asamblea lo comentará.'],
  ruta_todavia: ['Armaste una ruta para los 14 que no pasaron todavía.', 'Seis de ellos se reevaluarán en la semana 3.'],
  teodoro_alternativa: ['Le ofreciste a Don Teodoro una opción por debajo de la mina.', 'Él será tu aliado en la comunidad.'],
  comedor_cumplido: ['Revisaste con Wilber el acta del comedor y se cumplió.', 'Los operadores te creerán cuando hables del rumor.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  presidenta: { n: 'Doña Juana Huamán', sub: 'Presidenta de la comunidad', who: 'presidenta' },
  ayala: { n: 'Dr. Néstor Ayala', sub: 'Médico ocupacional de la unidad', c: '#2F6B3F' },
  delegado: { n: 'Wilber Mamani', sub: 'Delegado de los operadores de mina', c: '#7A4A2E' },
  elmer: { n: 'Elmer Taipe', sub: 'Ayudante de Movitierra', c: '#C05621' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
};

export const WSP = [
  { chat: 'ayala', t: '06:10', de: 'Dr. Ayala', txt: 'Listo para los 30. Una cosa: los resultados se los explico yo a cada uno, en el consultorio. A la directiva no le doy diagnósticos.' },
  { chat: 'elmer', t: '10:40', de: 'Elmer', txt: '¡Señorita, ya nos depositaron el saldo! Los 46. Mi señora le manda saludos 🙏', si: 'movitierra_retencion' },
  { chat: 'elmer', t: '10:40', de: 'Elmer', txt: 'Ya cobramos, señorita. La minera pagó. Los de Andes Perforaciones preguntan si a ellos también les van a pagar ustedes.', si: 'movitierra_adelanto' },
  { chat: 'elmer', t: '10:40', de: 'Elmer', txt: 'Señorita, presentamos la denuncia en SUNAFIL. El Ing. Salas dice que ya pagó, pero solo a la mitad.', si: 'movitierra_sunafil' },
  { chat: 'presidenta', t: '17:50', de: 'Doña Juana', txt: 'Señorita, me prometió treinta. Hoy bajan catorce sin trabajo. ¿Cómo les explico en la asamblea?', si: 'lista_aceptada' },
  { chat: 'grupo', t: '19:30', de: 'Percy', txt: 'Mañana y pasado se trabaja igual, pero tranquilo. El lunes llega un correo de Lima sobre «eficiencias». Ya les contaré. Descansen 🙏' },
];

export const CORREOS = [
  { t: '15:40', de: 'Dr. Néstor Ayala · Salud Ocupacional', para: 'Generalista de RR.HH. · Campo', asunto: 'Resultados evaluación comunidad (solo aptitud)', html: '<p>De 30 evaluados: 16 aptos, 6 observados (corregible: lentes, control de presión, tratamiento dental) y 8 no aptos para trabajo a 4,100 m. Los diagnósticos quedan en la historia clínica ocupacional. A cada persona se le explicó su resultado.</p><p>Dr. N. Ayala</p>' },
];

export const QUIZ = [
  { q: 'Los exámenes médicos ocupacionales en minería…', ops: ['Son opcionales', 'Son responsabilidad del titular minero, antes del ingreso y de forma periódica', 'Los paga el trabajador', 'Solo se hacen si hay accidente'], ok: 1, por: 'El art. 118 del D.S. 024-2016-EM dispone exámenes preocupacionales y periódicos a cargo del titular de actividad minera.' },
  { q: 'La directiva comunal pide la lista de diagnósticos de los comuneros. ¿Qué haces?', ops: ['La entregas: son sus comuneros', 'Compartes solo apto u observado, y solo con el permiso de cada persona', 'La publicas en el mural', 'No dices nada a nadie, ni siquiera a la persona'], ok: 1, por: 'Los datos de salud son datos sensibles (Ley 29733). El diagnóstico es de la persona.' },
  { q: 'Alguien sale «observado» por necesitar lentes. Eso significa…', ops: ['Que no podrá trabajar nunca', 'Que puede corregirse y reevaluarse', 'Que mintió en el examen', 'Que está apto'], ok: 1, por: 'Muchas observaciones son corregibles: por eso conviene una ruta de reevaluación.' },
  { q: '¿Para qué sirve el examen médico de altura?', ops: ['Para filtrar a los mayores', 'Para proteger la salud y la vida de quien trabaja en altura', 'Para bajar la cifra de empleo local', 'Para nada'], ok: 1, por: 'Es una medida de seguridad. Usarlo para discriminar es un mal uso.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '06:20', ch: 'documento', who: null, titulo: 'El orden del día', banner: 'assets/esc/escritorio.webp', lugar: 'Contenedor de RR.HH.', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Treinta personas, un médico, una enfermera, un supervisor de Valdivia y ${F.has('conteo_transparente') ? 'el dirigente observador que pidió Doña Juana' : 'Doña Juana, que avisó que subirá ella misma'}.</p><p>Antes de que llegue el bus, <mark class="clave">ordenas el día</mark> para que nadie espere horas en el frío sin saber qué sigue.</p>`,
    type: 'secuencia', prompt: 'Ordena el día de evaluación. Usa las flechas.', boton: 'Pegar el orden en la puerta',
    items: [
      { id: 'rec', t: 'Recepción con mate caliente, registro con DNI y explicación del día', por: 'Que nadie llegue a ciegas.' },
      { id: 'med', t: 'Evaluación médica ocupacional para altura, de uno en uno, en el consultorio', por: 'La seguridad va primero.' },
      { id: 'res', t: 'El médico explica a cada persona su resultado, en privado', por: 'El diagnóstico es de la persona.' },
      { id: 'pra', t: 'Prueba práctica para quienes son aptos, con el supervisor de Operaciones', por: 'El mismo filtro para todos.' },
      { id: 'ent', t: 'Conversación con RR.HH. sobre turno, campamento y vida 14 × 7', por: 'Que sepan a qué se comprometen.' },
      { id: 'cie', t: 'Cierre con la directiva: aptos, observados y la ruta para «todavía no»', por: 'Sin diagnósticos.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: q === 'buena' ? 2 : -1 },
        out: q === 'buena' ? 'A las 7:15, el primer grupo toma mate en la sala mientras el doctor Ayala llama al primero. Nadie pregunta «¿y ahora qué?».' : 'El orden tiene un hueco: a media mañana, diez personas esperan sin saber si les toca la prueba práctica.',
        pro: { ok: 'Un día bien ordenado es también un día respetuoso.', info: 'Si la prueba práctica va antes del examen médico, alguien puede marearse en la pala.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Ordenadito y con mate. ¡Qué divino!' : 'Primero el médico, luego la pala.'],
      };
    },
    rules: [[LEY, 'Los exámenes médicos ocupacionales están a cargo del titular minero (D.S. 024-2016-EM, art. 118).']],
    mirada: {
      ve: 'Para muchos de los treinta, hoy es la primera vez que entran a la unidad. Un orden claro, que empieza por la salud y termina con una explicación, les dice que el proceso es serio y que nadie los está engañando.',
      visual: { tipo: 'flujo', titulo: 'El día de evaluación', pasos: ['Recepción', 'Examen médico', 'Resultado en privado', 'Prueba práctica', 'Conversación', 'Cierre con la directiva'] },
    },
  },
  {
    id: 'f2', t: '10:30', ch: 'presencial', who: null, titulo: 'El doctor Ayala', banner: 'assets/foto/mentora.webp', lugar: 'Tópico médico de la unidad', show: ['calidad', 'personas'],
    body: () => `<p>El doctor Ayala es de Huancayo y lleva veinte años en minas. Sale del consultorio con el estetoscopio colgado y cara de cansado.</p><p>«Vamos por la mitad y ya veo la tendencia: <mark class="clave">casi la mitad no va a pasar hoy</mark>. Pregúntame lo que necesites, pero sin nombres.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para el doctor Ayala.',
    opts: [
      { id: 'por', label: '«¿Por qué no pasan?»', info: '«Presión alta sin controlar, problemas de visión sin lentes, dientes en mal estado. Y algunos mayores con el corazón cansado de toda una vida en altura. Muchos nunca se habían hecho un chequeo.»' },
      { id: 'corr', label: '«¿Cuántos se pueden corregir?»', info: '«Unos seis son observados: con lentes, tratamiento dental o control de presión podrían pasar en uno o dos meses. Los otros ocho, no para trabajar a 4,100.»' },
      { id: 'nunca', label: '«¿Los no aptos pueden trabajar en otra cosa?»', info: '«No en mina ni en planta. Abajo, en Abancay o en el almacén de la carretera, que está más bajo, quizá sí. Pero eso lo deciden ustedes.»' },
      { id: 'nombres', label: '«¿Me pasa la lista con diagnósticos para la directiva?»', info: 'Ayala se cruza de brazos. «No. El diagnóstico es de cada paciente. Te doy apto, observado o no apto. Lo demás queda en la historia clínica.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('nombres') ? -2 : 3, etica: picks.includes('nombres') ? -2 : 1 },
      out: picks.includes('nombres') ? 'Ayala vuelve al consultorio sin despedirse. Aprendiste algo, a la mala: lo médico es del médico y del paciente.' : 'Sacas la libreta: seis observados que pueden corregirse, ocho que no podrán subir. Ya sabes con qué armar la ruta de la tarde.',
      kusi: picks.includes('nombres') ? ['sorpresa', '¡Uy! Eso no era tuyo.'] : ['curioso', 'Seis «todavía no» y ocho «aquí no».'],
    }),
    rules: [[LEY, 'Los datos de salud son datos sensibles (Ley 29733).'], [BP, 'RR.HH. recibe la aptitud, no el diagnóstico.']],
    mirada: {
      ve: 'El examen no está «filtrando comuneros»: está mostrando lo que años sin acceso a salud dejaron en el cuerpo. Entender por qué no pasan te permite separar lo que se corrige de lo que no.',
      visual: { tipo: 'embudo', titulo: 'Los 30 de la lista', niveles: [['Evaluados', 30], ['Aptos o corregibles', 22], ['Aptos hoy', 16]] },
    },
  },
  {
    id: 'f3', t: '12:00', ch: 'presencial', who: null, titulo: 'Wilber y el acta', banner: 'assets/3d/scenes/planta.webp', lugar: 'Comedor central', show: ['confianza', 'cumplimiento'],
    body: (n, F) => `<p>A las 12 en punto, como dice el acta, entras al comedor con Wilber. ${F.has('comedor_acta') ? 'Lleva la copia doblada en el bolsillo de la casaca.' : 'No hubo acta clara, pero él vino igual.'} La marmita nueva brilla en la cocina. El cocinero del turno noche llegó ayer de Cusco.</p><p>Wilber prueba la sopa. «Mejor. Pero <mark class="clave">el bus de bajada sigue saliendo tarde</mark>. ¿Eso entra?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Marcar lo cumplido en el acta, delante de él, y anotar el bus de bajada como nuevo punto, con responsable y fecha de respuesta.',
        res: { q: 'buena', fx: { confianza: 5, cumplimiento: 2 }, rel: { yuri: 1 }, flags: ['comedor_cumplido'], cartera: { comedor: 'Acta cumplida · nuevo punto: bus de bajada' },
          out: 'Wilber firma la revisión. «Es la primera vez que vuelven a revisar algo.» Le sacas una foto al acta y la mandas al grupo de RR.HH.',
          pro: { ok: 'Volver a revisar lo prometido es lo que convierte un acta en confianza.', info: 'El transporte es el siguiente reclamo clásico en campamentos: anótalo.' },
          kusi: ['celebra', '¡Prometido y cumplido!'] } },
      { id: 'b', label: 'Decirle que hoy estás con la evaluación de la comunidad y que el bus lo ven la próxima semana.',
        res: { q: 'aceptable', fx: { tiempo: 2, confianza: -1 }, flags: ['comedor_cumplido'],
          out: 'Wilber asiente, sin sonreír. «Ya. La próxima semana.» Lo anota él en su libreta.',
          pro: { ok: 'Cumples con la revisión.', risk: 'Un reclamo nuevo sin fecha es el próximo bus que no sube.' },
          kusi: ['pensando', 'Lo anotó él… no tú.'] } },
    ],
    rules: [[BP, 'Revisa lo prometido en la fecha prometida, aunque estés en otra cosa.']],
    mirada: { ve: 'En un día lleno, habría sido fácil mandar un mensaje y no ir. Ir a las 12, como decía el acta, le dice a Wilber y a los cuarenta del bus que lo firmado vale. Eso lo necesitarás cuando llegue el próximo conflicto.' },
  },
  {
    id: 'f4', t: '13:40', ch: 'presencial', who: 'presidenta', titulo: '«¿Por qué no pasó?»', banner: 'assets/foto2/tension.webp', lugar: 'Sala de reuniones del campamento', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>${F.has('lista_aceptada') ? 'Doña Juana está furiosa. «Usted me prometió treinta, señorita.»' : 'Doña Juana subió a mitad de la mañana. Está seria, pero tranquila.'} Trae un cuaderno con los treinta nombres.</p><p>«Don Teodoro tiene 54 años y siete hijos. Dice que no pasó y no sabe por qué. <mark class="clave">Quiero la lista con lo que tiene cada uno</mark>, para defenderlos en la asamblea.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que el diagnóstico es de cada persona: puedes darle apto, observado o no apto, solo de quienes den su permiso. Y ofrecer que el doctor le explique a Don Teodoro otra vez, con su hijo presente si él quiere.',
        res: { q: 'buena', fx: { etica: 5, confianza: 2, personas: 3 }, rel: { presidenta: 1 }, flags: ['resultados_reservados'], cartera: { comunidad: 'Resultados reservados · aptitud con permiso' },
          out: 'Doña Juana tarda en responder. «O sea, ¿si fuera yo, nadie sabría lo mío?» «Nadie.» Asiente despacio. «Ya. Que el doctor le hable a Teodoro con su hijo.»',
          pro: { ok: 'Proteges un dato sensible sin dejar a la comunidad sin información.', risk: 'Doña Juana puede sentir que le ocultas algo.', info: 'Explica por qué no puedes, no solo que no puedes.' },
          kusi: ['animo', 'Lo de cada uno es de cada uno.'] } },
      { id: 'b', label: 'Entregarle la lista con los diagnósticos: es la presidenta, representa a los comuneros y así la asamblea entiende.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 }, rel: { presidenta: 1 }, flags: ['resultados_expuestos'], cartera: { comunidad: 'Diagnósticos entregados a la directiva' },
          out: 'Doña Juana se va satisfecha. El domingo, en la feria del pueblo, todos saben que a Don Teodoro «le falla el corazón». Él deja de ir a la feria.',
          pro: { ok: 'La directiva tiene toda la información.', risk: 'Revelar diagnósticos sin consentimiento expone a las personas y viola la protección de datos sensibles.' },
          kusi: ['triste', 'Don Teodoro no pidió que lo supiera todo el pueblo.'] } },
      { id: 'c', label: 'Decirle que los resultados son confidenciales y que no puedes darle nada, ni siquiera quién pasó.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -4 }, rel: { presidenta: -1 }, flags: ['resultados_reservados'], cartera: { comunidad: 'Sin información para la directiva' },
          out: 'Doña Juana cierra el cuaderno. «Entonces, ¿cómo sé que fue justo?» No tienes una buena respuesta.',
          pro: { ok: 'Proteges los datos.', risk: 'Sin información mínima, la comunidad no puede confiar en el proceso.' },
          kusi: ['pensando', 'Proteger no es esconder todo.'] } },
    ],
    rules: [[LEY, 'Los datos de salud son datos sensibles: no se comparten sin consentimiento (Ley 29733).'], [BP, 'Comparte lo mínimo necesario, con permiso, y explica por qué.']],
    mirada: {
      ve: 'Doña Juana quiere defender a los suyos, y para eso cree que necesita saberlo todo. Lo que necesita de verdad es confiar en que el proceso fue justo. Darle lo mínimo, con permiso, y una explicación clara protege a Don Teodoro y a la relación.',
      visual: { tipo: 'balanza', a: { t: 'Entregar los diagnósticos', items: ['La directiva sabe todo', 'Don Teodoro expuesto en la feria'] }, b: { t: 'Aptitud con permiso', items: ['La directiva ve el proceso', 'Cada diagnóstico queda con su dueño'] } },
      normas: [{ ley: 'D.S. 024-2016-EM, art. 118', dice: 'El titular de actividad minera tiene a su cargo los exámenes médicos ocupacionales, antes del ingreso y de forma periódica.', practica: 'El examen protege la vida; no es una herramienta para descartar gente ni para exponerla.' }],
    },
  },
  {
    id: 'f5', t: '15:00', ch: 'documento', who: null, titulo: 'La ruta del «todavía no»', banner: 'assets/esc/escalera.webp', lugar: 'Contenedor de RR.HH.', show: ['calidad', 'personas', 'cumplimiento'],
    body: () => `<p>Dieciséis aptos, seis observados y ocho no aptos. Percy te pide una propuesta antes de que baje el bus de las 5.</p><p>Armas, pieza por pieza, <mark class="clave">lo que pasa con cada grupo</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la ruta.', boton: 'Mandarle la ruta a Percy',
    bloques: [
      { id: 'apt', t: 'Los 16 aptos', n: 2, ops: [
        { id: 'a1', t: 'Prueba práctica e inducción de seguridad antes de su primer turno.', ok: true },
        { id: 'a2', t: 'Ingreso escalonado en dos grupos, para no saturar el campamento.', ok: true },
        { id: 'a3', t: 'Ingreso el lunes, sin inducción, porque Valdivia los necesita.', ok: false, por: 'Nadie entra a mina sin inducción.' },
      ] },
      { id: 'obs', t: 'Los 6 observados', n: 2, ops: [
        { id: 'o1', t: 'Campaña de lentes y control dental con la posta del distrito.', ok: true, por: 'Lo corregible se corrige.' },
        { id: 'o2', t: 'Reevaluación médica en la fecha que indique el doctor.', ok: true },
        { id: 'o3', t: 'Pedirles que se hagan los exámenes por su cuenta en Lima.', ok: false, por: 'Una barrera económica que la mayoría no puede pagar.' },
      ] },
      { id: 'noa', t: 'Los 8 no aptos', n: 2, ops: [
        { id: 'n1', t: 'Ofrecer las vacantes del almacén de la carretera, más abajo, si el médico lo autoriza.', ok: true, por: 'Una opción real que respeta su salud.' },
        { id: 'n2', t: 'Becas del programa de formación técnica de la minera para sus hijos o para ellos.', ok: true },
        { id: 'n3', t: 'Firmar una carta de responsabilidad para que trabajen igual en mina.', ok: false, por: 'Una carta no protege un corazón a 4,100 metros.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 4 : 0, cumplimiento: q === 'riesgosa' ? -3 : 2 },
        flags: q === 'riesgosa' ? [] : ['ruta_todavia'], cartera: { comunidad: q === 'riesgosa' ? 'Sin ruta para los que no pasaron' : '16 aptos · ruta para 14' },
        out: q === 'buena' ? 'Percy responde en cinco minutos: «Aprobado. Lo presento a la comunidad el lunes». Le pones de asunto: «Ruta todavía no».' : 'Percy te devuelve la ruta con comentarios en rojo. Hay piezas que ponen en riesgo a alguien.',
        pro: { ok: 'Cada grupo tiene un siguiente paso, y ninguno pasa por saltarse la seguridad.', risk: 'Las cartas de responsabilidad y los atajos con la inducción terminan en accidentes.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Nadie se queda sin camino!' : 'Ojo con los atajos.'],
      };
    },
    rules: [[BP, 'Para quien no califica, ofrece un camino; para quien no puede subir, una alternativa que cuide su salud.']],
    mirada: {
      ve: 'Un «no» seco cierra una puerta; un «todavía no» con fecha y apoyo la deja entreabierta. Para la comunidad, la diferencia es enorme: es lo que separa «la minera nos rechazó» de «la minera nos está ayudando a llegar».',
      visual: { tipo: 'cambio', titulo: 'Del «no» al camino', pares: [['16 aptos', 'Inducción e ingreso escalonado'], ['6 observados', 'Lentes, dentista y reevaluación'], ['8 no aptos', 'Almacén más abajo y becas']] },
    },
  },
  {
    id: 'f6', t: '16:20', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del bus', banner: 'assets/foto/llamada.webp', lugar: 'Paradero del campamento', show: ['personas', 'confianza'],
    body: () => `<p>El bus de la comunidad baja a las 5. Antes, llamas a tres personas que te pidieron hablar contigo después del médico.</p><p>Cada una espera algo distinto. <mark class="clave">Escuchas primero</mark>.</p>`,
    type: 'calls',
    calls: [['Rosa Huamán · 27 años, madre sola', 'Contesta en el paradero', '«Señorita, ¿de verdad puedo ser ayudante de mina? Pasé todo. Nunca pensé. Mi hijito se queda con mi mamá. ¿Cuándo empiezo?»'], ['Brayan Huillca · 22 años, volvió de Lima', 'Contesta con audífonos', '«Me dijo el doctor que es por los lentes nomás. ¿La minera me ayuda con eso? En Lima trabajaba en construcción, sé manejar.»'], ['Don Teodoro Quispe · 54 años, siete hijos', 'Contesta despacio', '«Ya me explicó el doctor, señorita. Mi corazón. Yo entiendo. Pero tengo siete hijos. ¿No hay nada para mí?»']],
    prompt: 'Terminaste las llamadas. ¿Qué le respondes a Don Teodoro?',
    choices: [
      { id: 'a', label: 'Contarle de la vacante del almacén de la carretera, más abajo, y decirle que el doctor debe autorizarla primero. Si no, ofrecerle la beca técnica para uno de sus hijos.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, flags: ['teodoro_alternativa'], cartera: { vacantes: 'Rosa entra · Brayan a reevaluación · Teodoro, opción almacén' },
          out: 'Don Teodoro guarda silencio. «El almacén está a 3,200, ¿no? Ahí sí respiro.» Te dice «diospagarasunki». Lo anotas para preguntarle a Yuri qué significa: «Dios te lo pague».',
          pro: { ok: 'Una opción real, honesta sobre lo que falta decidir.', info: 'No prometas el puesto: la aptitud la decide el médico.' },
          kusi: ['feliz', '¡Qué divino! Un camino para Don Teodoro.'] } },
      { id: 'b', label: 'Decirle con cariño que lo sientes mucho, pero que la mina no es para él, y que la comunidad tendrá otras oportunidades.',
        res: { q: 'aceptable', fx: { personas: 1, confianza: -1 },
          out: 'Don Teodoro dice «ya, señorita», y cuelga. Lo ves subir al bus despacio, al último.',
          pro: { ok: 'Eres honesta.', risk: 'Sin una alternativa concreta, la empatía no le sirve a una familia de nueve.' },
          kusi: ['triste', 'Había un almacén más abajo…'] } },
    ],
    rules: [[BP, 'Detrás de cada resultado hay una persona: escúchala antes de responder.']],
    mirada: {
      ve: 'Rosa, Brayan y Don Teodoro son tres caras del mismo día: la alegría de quien pasó, la esperanza de quien casi pasa y el golpe de quien no puede. Una generalista de campo atiende las tres, una por una.',
      visual: { tipo: 'linea', titulo: 'Tres caminos', hitos: [['Rosa', 'Ingreso con inducción'], ['Brayan', 'Lentes y reevaluación'], ['Don Teodoro', 'Almacén a 3,200 m o beca']] },
    },
  },
  {
    id: 'f7', t: '19:20', ch: 'presencial', who: 'percy', titulo: 'Fin de la primera semana', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del campamento', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Viernes. Cinco días arriba. El fin de semana se trabaja igual, pero con menos reuniones. ${F.has('resultados_expuestos') ? 'Percy está serio: ya le llegó lo de los diagnósticos.' : 'Percy pide dos sopas y se sienta con un suspiro largo.'}</p><p>«Primera semana. ¿Qué aprendiste?» Antes de que respondas, añade: «Y prepárate: <mark class="clave">el lunes llega un correo de Lima sobre «eficiencias»</mark>. Esa palabra aquí arriba suena a despidos».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Que aquí arriba todo está conectado: el comedor, los contratistas y la comunidad. Y preguntarle qué dice exactamente ese correo, para no enterarte por el rumor.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { percy: 1 },
          out: 'Percy sonríe con media cara. «Eso es. Del correo, todavía no sé nada. Y eso es lo peligroso.» Afuera, la luna ilumina el tajo como si fuera de día.',
          pro: { ok: 'Ves el sistema completo y anticipas el siguiente frente.', info: 'Cuando hay una noticia sensible, RR.HH. debe saberla antes que el comedor.' },
          kusi: ['curioso', 'Una semana menos. ¿Qué traerá el lunes?'] } },
      { id: 'b', label: 'Que estás agotada y que, de lo de Lima, ya se verá el lunes.',
        res: { q: 'aceptable', fx: { confianza: 1 },
          out: 'Percy se ríe: «Normal. Duerme el fin de semana». Pero el domingo en la noche, en el comedor, alguien ya dice «despidos».',
          pro: { ok: 'Reconocer el cansancio también es parte del trabajo.', risk: 'Los rumores no descansan el fin de semana.' },
          kusi: ['pensando', 'Descansa… el lunes viene movido.'] } },
    ],
    mirada: { ve: 'Cinco días bastaron para ver cómo se conecta todo: una cena fría, un pago atrasado y un examen médico pueden terminar en la misma asamblea comunal. La segunda semana empieza con una palabra peligrosa: «eficiencias».' },
  },
];
