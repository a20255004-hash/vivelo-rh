// Practicante de RR.HH. · Capítulo 5 · «El error» · Semana 2, jueves.
// Hilo del mes: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias.
// Normas citadas:
// - TUO del D.Leg. 854, Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo (D.S. 007-2002-TR):
//   el sobretiempo es voluntario (art. 9) y se paga con una sobretasa mínima de 25% en las dos primeras horas y de 35% desde la tercera (art. 10).
//   https://modelo.pe/acuerdo-de-realizacion-de-trabajo-en-sobretiempo-horas-extras/
//   https://www.buk.pe/recursos/calculadora/calculadora-de-horas-extras
//   https://lpderecho.pe/acreditar-prestacion-servicios-sobretiempo/
// - D.S. 004-2006-TR, registro de control de asistencia y de salida (incluye el sobretiempo). Texto en SPIJ: https://spij.minjus.gob.pe/
// - Ley 29733, de Protección de Datos Personales (los datos de salud son sensibles). Texto en SPIJ: https://spij.minjus.gob.pe/

export const CAP = {
  n: 5, titulo: 'El error', dia: 'Semana 2, jueves', foto: 'assets/foto2/tension.webp',
  lugar: 'Hilandería Andina · Oficina de RR.HH.',
  inicio: '07:30', fin: '20:00', cierreHora: '19:10',
  apertura: 'Jueves de cierre de planilla. A las 17:00 se cierra todo, y alguien acaba de encontrar un error en tu reporte.', boton: 'Abrir el reporte',
  kusi: 'Todos nos equivocamos. Lo que importa es qué haces ahora. ¡Respira!',
  lead: 'Encontraste tus propios errores, se los contaste a tu jefa, buscaste pruebas de unas horas que el reloj no marcó y llegaste al cierre con tres sueldos corregidos.',
  reflexion: '¿Qué sentiste en el momento en que viste tu error? ¿Qué hiciste con eso?',
  siguiente: { n: 6, titulo: 'Rosa quiere irse', dia: 'Semana 3, martes' },
};

export const CARTERA = [
  { id: 'asistencia', p: 'Reporte de horas extra', j: 'Diego · Planillas', d: 0, e: 'Cierre: hoy, 17:00' },
  { id: 'induccion', p: 'Inducción del grupo 2', j: 'Carla · RR.HH.', d: 0, e: 'Martes de la semana 3' },
  { id: 'seleccion', p: 'Segunda convocatoria', j: 'Carla · Don Teófilo', d: 0, e: '15 ingresan el lunes' },
  { id: 'legajos', p: 'Archivo de legajos', j: 'Carla · RR.HH.', d: 0, e: 'Plan aprobado por Legal' },
  { id: 'auditoria', p: 'Auditoría de Hamburgo', j: 'Carla · Gerencia', d: 0, e: 'Viernes de la semana 3' },
];

export const FUTURO = {
  error_asumido: ['Le contaste tu error a Carla apenas lo viste, con el impacto y una propuesta.', 'Carla te encargará las evidencias de la auditoría. Capítulo 7.'],
  error_escondido: ['Corregiste tu error en silencio, sin decírselo a Carla.', 'Carla se enterará por otro lado. Capítulo 7.'],
  error_culpa_reloj: ['Le echaste la culpa al reloj de marcación.', 'TI revisará el reloj y no encontrará fallas. Capítulo 7.'],
  faustina_pagada: ['Le reconociste a Faustina sus horas con el cuaderno de portería y de la supervisora.', 'La auditoría del capítulo 7 preguntará por las horas extra.'],
  faustina_sin_pago: ['Faustina no cobró sus horas del sábado.', 'Volverá a reclamar. Capítulo 7.'],
  filtracion_reportada: ['Reportaste que el Excel de asistencia circulaba en un grupo de supervisores.', 'Carla cortará accesos antes de la auditoría del capítulo 7.'],
  filtracion_ignorada: ['Viste datos de salud en un grupo de WhatsApp y no hiciste nada.', 'Capítulo 7.'],
  errores_vistos: ['Encontraste los cuatro errores de tu propio reporte.', 'Revisas tu trabajo con método. Capítulo 7.'],
  errores_pendientes: ['Se te pasaron errores en tu propio reporte.', 'Alguna boleta llegará mal. Capítulo 7.'],
  linea_informada: ['Le dijiste a la línea de urdido «me equivoqué» y cómo se arregló.', 'Justina y sus chicas confían en RR.HH. Capítulo 6.'],
  control_doble: ['Propusiste una doble verificación para los reportes que afectan sueldos.', 'Será parte de tu propuesta. Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria nueva', who: 'rosa' },
  justina: { n: 'Sra. Justina Mamani', sub: 'Supervisora de urdido · turno día', c: '#9C6B30' },
};

export const WSP = [
  { chat: 'diego', t: '07:35', de: 'Diego', txt: 'Oye 😬 mi jefa encontró algo raro en tu reporte. Tres operarias con menos horas que en el reloj. ¿Lo vemos antes de que llegue Carla?' },
  { chat: 'grupo', t: '07:40', de: 'Carla', txt: 'Hoy cierre de planilla. Nada se mueve después de las 17:00. Gracias 🙏' },
  { chat: 'rosa', t: '10:20', de: 'Rosa', txt: 'Señorita, ya voy dos días en la línea. Me duelen las manos pero ya remallo mejor 😊', si: 'rosa_mensaje' },
  { chat: 'teofilo', t: '13:30', de: 'Don Teófilo', txt: 'Me dijeron que hubo un error con las horas de mi gente. ¿Ya está? Que no me vengan a reclamar a mí.' },
  { chat: 'justina', t: '16:10', de: 'Justina', txt: 'Ya les avisé a mis chicas, hijita. Faustina se puso a llorar. Gracias.', si: 'faustina_pagada' },
  { chat: 'carla', t: '18:45', de: 'Carla', txt: 'Hoy te equivocaste y lo arreglaste bien. Eso también es aprender. Descansa.', si: 'error_asumido' },
];

export const CORREOS = [
  { t: '07:45', de: 'Planillas', para: 'RR.HH.', asunto: 'Preliminar de planilla · semana 1 y 2', html: '<p>Adjuntamos el preliminar. Las observaciones se reciben hasta las 15:00. El cierre es a las 17:00.</p>' },
  { t: '11:50', de: 'Mesa de ayuda', para: 'RR.HH.', asunto: 'Reloj de la puerta 2', html: '<p>El reloj de marcación de la puerta 2 tuvo cortes de energía el sábado entre las 20:00 y las 21:30. Algunas salidas no se registraron.</p>' },
];

export const QUIZ = [
  { q: '¿Cuál es la sobretasa mínima de las horas extra en el régimen general?', ops: ['10% todas las horas', '25% en las dos primeras horas y 35% desde la tercera', '50% siempre', 'No hay sobretasa'], ok: 1, por: 'El D.S. 007-2002-TR fija una sobretasa mínima de 25% para las dos primeras horas y de 35% para las siguientes.' },
  { q: 'En el Excel dice «1.3 h» y el reloj marcó «1:30». ¿Qué pasó?', ops: ['Nada, es lo mismo', 'Se confundió minutos con decimales: 1:30 es 1.5 horas', 'El reloj está malogrado', 'La operaria trabajó menos'], ok: 1, por: 'Treinta minutos son media hora. Un error de formato cambia el sueldo de alguien.' },
  { q: 'Descubres un error tuyo que afecta sueldos. ¿Qué haces primero?', ops: ['Corregirlo en silencio', 'Contárselo a tu jefa con el impacto y una propuesta de corrección', 'Esperar a ver si alguien reclama', 'Culpar al sistema'], ok: 1, por: 'Contar el error a tiempo permite corregirlo antes del cierre y genera confianza.' },
  { q: 'El reloj no marcó la salida de una operaria. ¿Qué haces con sus horas?', ops: ['Ponerle cero', 'Buscar otras pruebas: cuaderno de la supervisora, registro de portería y su testimonio', 'Pagarle la mitad', 'Esperar a que TI arregle el reloj'], ok: 1, por: 'Si el registro falló, se buscan otras evidencias. La falla del reloj no es culpa de la trabajadora.' },
  { q: 'Ves en un grupo de WhatsApp un Excel con descansos médicos del personal. ¿Qué haces?', ops: ['Nada, no es tu grupo', 'Lo reportas a tu jefa para que se borre y se corten accesos', 'Lo reenvías a Carla por el mismo grupo', 'Comentas el caso en el grupo'], ok: 1, por: 'Los datos de salud son sensibles. Reportar a tiempo limita el daño.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:50', ch: 'documento', who: null, titulo: 'Tu reporte, otra vez', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Abres «HE_semana1.xlsx». ${F.has('he_bus') ? 'Lo armaste el martes en la combi, de pie, con el celular. ' : 'Lo armaste el miércoles con calma, pero copiando de una pestaña que se llamaba «Hoja1 (2)». '}Junto a tu teclado está el cuaderno de la supervisora Justina, que lo dejó con un post-it: «Mis chicas se quedaron el sábado».</p><p>Comparas fila por fila. <mark class="clave">El error es tuyo</mark>. Te sube el calor a la cara.</p>`,
    type: 'flag', prompt: 'Marca las filas de tu reporte que tienen errores.',
    doc: { t: 'Reporte de horas extra · Semana 1 · Urdido y tejido', sub: 'Elaborado por: practicante de RR.HH.' },
    lines: [
      { id: 'yesenia', t: 'Yesenia Condori · sábado: 3 h (reloj: 3 h · cuaderno: 3 h).' },
      { id: 'mirian', t: 'Mirian Choque · viernes: 1.3 h (reloj: 1:30).', bad: LEY, why: '1:30 es una hora y media: 1.5 h. Se confundieron minutos con decimales y se le pagaría menos.' },
      { id: 'faustina', t: 'Faustina Ccori · sábado: 0 h (reloj: sin salida · cuaderno: 3 h).', bad: LEY, why: 'Que el reloj no marcara no significa que no trabajó. Hay que buscar otras pruebas antes de poner cero.' },
      { id: 'lizbeth', t: 'Lizbeth Apaza Mamani · jueves: 2 h (reloj: 2 h, de Lizbeth Apaza Quispe).', bad: BP, why: 'Hay dos Lizbeth Apaza. Las horas se cargaron a la persona equivocada: una cobraría de más y otra de menos.' },
      { id: 'tasa', t: 'Columna «Sobretasa»: 25% para todas las horas.', bad: LEY, why: 'Desde la tercera hora extra, la sobretasa mínima es 35%. Yesenia tiene una tercera hora.' },
      { id: 'total', t: 'Total del área: 41.5 horas.', duda: 'El total cambiará cuando corrijas las filas de arriba.' },
      { id: 'firma', t: 'Visto bueno de la supervisora: pendiente.', duda: 'Es justo lo que falta: nadie de la línea revisó el reporte antes de enviarlo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges una fila, pero se te pasan otras. Si el reporte entra así al cierre, alguien cobrará menos de lo que trabajó.' : 'Encuentras los cuatro errores. Tres operarias iban a cobrar menos y una, de más. Te tiemblan un poco las manos. Respiras y anotas todo en una hoja.',
      flags: missLey ? ['errores_pendientes'] : ['errores_vistos'], cartera: { asistencia: missLey ? 'Corrección parcial' : '4 errores identificados' },
      pro: { ok: 'Mirar tu propio trabajo con la misma dureza con que mirarías el de otro es de profesional.', risk: 'Un reporte que afecta sueldos sin visto bueno de la línea es un error esperando ocurrir.', info: 'Pon siempre el formato de horas como hh:mm o conviértelo con una fórmula, nunca a mano.' },
      kusi: missLey ? ['preocupado', 'Todavía hay filas con problemas…'] : ['animo', 'Lo encontraste tú. Eso ya es la mitad de arreglarlo.'],
    }),
    rules: [[LEY, 'El sobretiempo se paga con una sobretasa mínima de 25% en las dos primeras horas y de 35% desde la tercera (D.S. 007-2002-TR).'], [BP, 'Un reporte que afecta sueldos necesita el visto bueno de quien supervisó el trabajo.']],
    mirada: {
      ve: 'Los errores de planilla casi nunca son grandes: son un formato de hora, un homónimo o una celda en cero. Pero cada uno es dinero que una persona trabajó y no cobra. Revisar el propio trabajo con método es la primera responsabilidad.',
      visual: { tipo: 'cambio', titulo: 'Lo que decía tu reporte y lo que debía decir', pares: [['Mirian: 1.3 h', 'Mirian: 1.5 h'], ['Faustina: 0 h', 'Faustina: por verificar con otras pruebas'], ['Lizbeth Apaza Mamani: 2 h', 'Lizbeth Apaza Quispe: 2 h'], ['25% en todas las horas', '25% en las dos primeras, 35% desde la tercera']] },
      normas: [{ ley: 'D.S. 007-2002-TR, TUO de la Ley de Jornada de Trabajo', dice: 'El trabajo en sobretiempo es voluntario y se paga con una sobretasa mínima de 25% por hora en las dos primeras horas y de 35% desde la tercera.', practica: 'Una columna con 25% para todo parece un detalle, pero paga menos a quien se quedó más tiempo.' }],
    },
  },
  {
    id: 'e2', t: '08:40', ch: 'presencial', who: 'carla', titulo: 'Contárselo a Carla', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de RR.HH.', show: ['confianza', 'etica', 'tiempo'],
    body: (n, F) => `<p>Carla llega con lentes oscuros por el sol y una bolsa de pan de tres puntas de la panadería de la esquina. Todavía no sabe nada.</p><p>Diego te escribió que podían «arreglarlo entre los dos antes de que se entere». Tienes la hoja con los errores en la mano. <mark class="clave">Te late fuerte el corazón</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Contárselo ya: qué pasó, a quiénes afecta y cómo propones corregirlo antes de las 15:00.',
        res: { q: 'buena', fx: { confianza: 6, etica: 5, tiempo: -1 }, rel: { carla: 1 }, flags: ['error_asumido'],
          out: 'Carla se quita los lentes y escucha sin interrumpir. «Bien. Primero lo corregimos; después vemos por qué pasó», dice. Te pasa un pan: «Y desayuna, que te veo pálida».',
          pro: { ok: 'Cuentas el error con el impacto y una propuesta: así tu jefa puede decidir rápido.', risk: 'Da miedo. Pero cada hora que pasa, el error se vuelve más difícil de corregir.', info: 'Separa el qué pasó del por qué pasó: lo primero urge, lo segundo previene.' },
          kusi: ['celebra', 'Eso fue valiente. ¡Bien hecho!'] } },
      { id: 'b', label: 'Corregirlo con Diego antes del cierre, sin decirle nada a Carla: total, el resultado es el mismo y nadie cobra menos.',
        res: { q: 'aceptable', fx: { confianza: -2, etica: -2, tiempo: 1 }, rel: { diego: 1 }, flags: ['error_escondido'],
          out: 'Diego y tú corrigen todo a media mañana. A las 13:30 Don Teófilo le pregunta a Carla «por el error de las horas». Carla te mira. No sabe de qué habla.',
          pro: { ok: 'Las operarias cobrarán bien.', risk: 'Tu jefa se entera por otro. Ahora el problema no es el error, es la confianza.' },
          kusi: ['pensando', 'Se arregló… pero Carla quedó fuera.'] } },
      { id: 'c', label: 'Explicarle que el reloj de marcación falló y que por eso salieron mal las horas.',
        res: { q: 'riesgosa', fx: { confianza: -5, etica: -5 }, rel: { carla: -1 }, flags: ['error_culpa_reloj'],
          out: 'Carla llama a TI. El reloj sí falló el sábado, pero solo en la salida de Faustina. Lo de Mirian y las Lizbeth fue tuyo. Carla lo descubre a las once.',
          pro: { ok: 'Parte de lo que dices es verdad.', risk: 'Una verdad a medias se descubre rápido. Y cuesta más que el error.' },
          kusi: ['triste', 'El reloj no tuvo la culpa de todo…'] } },
    ],
    rules: [[BP, 'Cuenta el error con tres datos: qué pasó, a quién afecta y cómo lo corriges.']],
    mirada: {
      ve: 'Asumir un error a tiempo es una de las cosas que más distinguen a una profesional confiable. Nadie espera que una practicante no se equivoque; se espera que avise, que proponga y que aprenda. Lo que se esconde, en cambio, rompe algo más difícil de arreglar que una planilla.',
      visual: { tipo: 'balanza', a: { t: 'Arreglarlo en silencio', items: ['Nadie se entera… por ahora', 'Te ahorras un mal rato'] }, b: { t: 'Contarlo a tiempo', items: ['Tu jefa decide con información', 'El error se corrige antes del cierre', 'Ganas confianza para lo que viene'] } },
    },
  },
  {
    id: 'e3', t: '10:00', ch: 'llamada', who: null, titulo: 'Las horas de Faustina', banner: 'assets/foto/llamada.webp', show: ['personas', 'cumplimiento', 'calidad'],
    body: () => `<p>Mesa de ayuda confirmó que el reloj de la puerta 2 tuvo cortes de energía el sábado. Faustina no tiene marcación de salida. Para pagarle, <mark class="clave">necesitas otras pruebas</mark>.</p>`,
    type: 'calls',
    calls: [['Sra. Justina · supervisora', 'Contesta desde la línea', 'Hijita, se quedaron hasta las nueve. Está en mi cuaderno, con mi firma. Faustina, Yesenia y la Lizbeth Quispe.'], ['Portería · vigilancia', 'Contesta el vigilante de turno', 'Déjeme ver el cuaderno… Sí: Ccori Faustina, salida 21:05 del sábado. Lo anoté porque el reloj estaba apagado.'], ['Faustina Ccori · urdido', 'Contesta en voz bajita, con ruido de máquinas', 'Sí, señorita, me quedé… Pensé que no me iban a pagar, como no marcó. Mi mamá dice que no reclame.']],
    prompt: 'Tienes el cuaderno de la supervisora, el de portería y la palabra de Faustina. ¿Qué haces con sus horas?',
    choices: [
      { id: 'a', label: 'Reconocerle las 3 horas con las tres pruebas, adjuntarlas al reporte y anotar la falla del reloj.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 5, calidad: 2 }, flags: ['faustina_pagada'], cartera: { asistencia: 'Faustina: 3 h con sustento' },
          out: 'Escaneas las dos páginas de los cuadernos y las adjuntas. Planillas acepta. Faustina no lo sabe todavía, pero el sábado no trabajó gratis.',
          pro: { ok: 'Cuando el registro falla, buscas evidencias que se complementan.', info: 'Pide a TI una constancia escrita de la falla del reloj: así queda todo en el legajo de horas.' },
          kusi: ['celebra', 'Tres pruebas y una persona que cobra lo justo. ¡Qué divino!'] } },
      { id: 'b', label: 'Pagarle 2 horas «por si acaso», hasta que TI recupere los datos del reloj.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, personas: 1 }, flags: ['faustina_sin_pago'],
          out: 'Faustina cobrará 2 de 3 horas. TI dice que los datos del reloj no se pueden recuperar. La tercera hora queda en el aire.',
          pro: { ok: 'Le pagas algo.', risk: 'Tenías pruebas de las tres horas. Pagar menos «por si acaso» traslada el riesgo a la trabajadora.' },
          kusi: ['pensando', '¿Y la tercera hora?'] } },
      { id: 'c', label: 'Dejarla en cero hasta que TI arregle el reloj: sin marcación no hay sustento.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, personas: -5 }, flags: ['faustina_sin_pago'],
          out: 'Faustina cobra sin sus horas. Su mamá le dijo que no reclamara. No reclama. Pero se lo cuenta a toda la línea de urdido.',
          pro: { ok: 'Te ciñes al reloj.', risk: 'La falla del sistema es responsabilidad de la empresa, no de la trabajadora.' },
          kusi: ['indignado', '¡Trabajó tres horas!'] } },
    ],
    rules: [[LEY, 'El empleador lleva el registro de control de asistencia, incluido el sobretiempo (D.S. 004-2006-TR).'], [BP, 'Si el registro falla, busca pruebas que se complementen: cuadernos, portería y testimonio.']],
    mirada: {
      ve: 'El registro de asistencia es obligación del empleador. Si el reloj falla, la empresa no puede trasladarle el problema a quien trabajó. Una profesional busca evidencias, las documenta y paga lo que corresponde, sobre todo cuando la persona afectada no se atreve a reclamar.',
      visual: { tipo: 'flujo', titulo: 'Cómo se sustentan unas horas sin marcación', pasos: ['Constancia de la falla del reloj', 'Cuaderno de la supervisora', 'Registro de portería', 'Testimonio de la trabajadora', 'Adjuntar al reporte'] },
    },
  },
  {
    id: 'e4', t: '11:30', ch: 'sistema', who: null, titulo: 'Antes de las 15:00', banner: 'assets/esc/reloj.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>Planillas recibe observaciones hasta las 15:00. Tienes la lista de errores, las pruebas de Faustina y el sistema de planillas abierto en la computadora de Diego, que se cuelga cada vez que alguien guarda.</p><p><mark class="clave">Hay un orden que no te puedes saltar</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para corregir el reporte antes del cierre. Usa las flechas.', boton: 'Seguir este orden',
    items: [
      { id: 'corr', t: 'Corregir las cuatro filas del reporte', por: 'Primero, tu parte.' },
      { id: 'vb', t: 'Pedir el visto bueno de la supervisora Justina', por: 'Quien vio el trabajo confirma las horas.' },
      { id: 'envia', t: 'Enviar a Planillas el reporte corregido con una nota de cambios', por: 'La nota dice qué cambió y por qué.' },
      { id: 'recal', t: 'Planillas recalcula y emite un nuevo preliminar', por: 'El sistema hace los cálculos de sobretasa.' },
      { id: 'verif', t: 'Verificar en el preliminar las boletas de las personas afectadas', por: 'Nunca des por hecho que el cambio entró.' },
      { id: 'aviso', t: 'Avisar a las operarias afectadas', por: 'Se enteran por RR.HH., no por la boleta.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: q === 'buena' ? 2 : -2 },
        cartera: { asistencia: q === 'buena' ? 'Corregido y verificado en el preliminar' : 'Corregido, sin verificar' },
        out: q === 'buena' ? 'A las 14:20 el nuevo preliminar llega. Revisas las boletas de Mirian, Faustina y las dos Lizbeth. Todo cuadra. Te sientas por primera vez desde las siete.' : 'Envías la corrección, pero el sistema se colgó al guardar. Si no verificas el preliminar, no sabrás si el cambio entró.',
        pro: { ok: 'Seguir el orden evita que la corrección cree un error nuevo.', risk: 'Enviar sin visto bueno o no verificar el preliminar deja el error a medio corregir.', info: 'Guarda la nota de cambios: es la historia de cómo se corrigió.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Corregido y comprobado!' : 'Falta comprobar que el cambio entró.'],
      };
    },
    rules: [[BP, 'Después de corregir, verifica el resultado en el sistema; no solo en tu Excel.']],
    mirada: {
      ve: 'Corregir un error tiene su propio proceso. Si te saltas pasos por apuro, la corrección puede fallar sin que nadie lo note. Verificar en el preliminar de planilla es lo que convierte una buena intención en un sueldo bien pagado.',
      visual: { tipo: 'flujo', titulo: 'La corrección, paso a paso', pasos: ['Corregir', 'Visto bueno', 'Nota de cambios', 'Recálculo', 'Verificar boletas', 'Avisar'] },
    },
  },
  {
    id: 'e5', t: '12:50', ch: 'whatsapp', who: null, titulo: 'Una captura en el grupo', banner: 'assets/esc/alarma.webp', show: ['etica', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Almuerzas en tu escritorio. Hugo, de mantenimiento, te reenvía una captura del grupo «Supervisores Planta»: un Excel con nombres, DNI, faltas y descansos médicos de todo el personal.</p><p>Debajo, un supervisor de acabados escribió: «La Condori otra vez con descanso 🙄».${F.has('asistencia_diego') ? ' <mark class="clave">Reconoces las columnas: es el Excel que le pasaste a Diego</mark>.' : ' <mark class="clave">Es una exportación completa del sistema de asistencia</mark>.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Contárselo a Carla ahora, con la captura, para que pidan borrarlo, corten accesos y hablen con el supervisor.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, tiempo: -1 }, rel: { carla: 1 }, flags: ['filtracion_reportada'],
          out: 'Carla deja su almuerzo. En media hora, la gerente de planta pide en el grupo que se borre el archivo y cita al supervisor. Carla te mira: «¿Sabes de dónde salió?».',
          pro: { ok: 'Reportas rápido y a quien puede actuar.', risk: 'Si el archivo salió de algo que tú hiciste, este es el momento de decirlo.', info: 'Pide que la exportación del sistema tenga solo las columnas necesarias para cada área.' },
          kusi: ['animo', 'Avisar a tiempo limita el daño.'] } },
      { id: 'b', label: 'Escribir en el grupo, desde el celular de Hugo, que lo borren porque tiene datos privados.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: -1, personas: -2 },
          out: 'Lo borran, pero varios ya lo descargaron. El supervisor responde: «¿Y quién es la practicante para decirnos qué hacer?». Carla se entera por Don Teófilo.',
          pro: { ok: 'Actúas rápido.', risk: 'Usar el celular de otro y discutir en un grupo ajeno no resuelve el acceso ni la falta del supervisor.' },
          kusi: ['pensando', 'Rápido, pero no por el canal correcto.'] } },
      { id: 'c', label: 'No hacer nada: no es tu grupo y hoy ya tienes bastante con el cierre.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, flags: ['filtracion_ignorada'],
          out: 'El archivo sigue en el grupo. Yesenia Condori, que tuvo un descanso por una cirugía, se entera por una compañera de que todos los supervisores lo saben.',
          pro: { ok: 'Te concentras en el cierre.', risk: 'Saber de una filtración de datos de salud y callar también es una decisión.' },
          kusi: ['triste', 'Yesenia no eligió que todos supieran…'] } },
    ],
    rules: [[LEY, 'Los datos de salud son datos sensibles y deben protegerse de accesos no autorizados (Ley 29733).'], [POL, 'Los reportes del sistema de asistencia se comparten solo con las columnas necesarias para cada área.']],
    mirada: {
      ve: 'Los datos que salen por un favor rara vez se quedan donde los dejaste. Un Excel completo termina en un grupo de supervisores, y un descanso médico se vuelve chisme. Reportar a tiempo, aunque incomode, es la única forma de cortar la cadena.',
      visual: { tipo: 'linea', titulo: 'El viaje de un Excel', hitos: [['Sistema de asistencia', 'Exportación completa'], ['Un favor', 'Pasa a otra área'], ['Un reenvío', 'Llega al grupo de supervisores'], ['Un comentario', 'Un descanso médico se vuelve chisme']] },
    },
  },
  {
    id: 'e6', t: '15:30', ch: 'whatsapp', who: null, titulo: 'Avisar a la línea', banner: 'assets/foto/taller.webp', show: ['personas', 'confianza', 'calidad'],
    body: () => `<p>El preliminar ya está corregido. Falta que las operarias afectadas se enteren por RR.HH. y no por una boleta que no entienden.</p><p>La señora Justina tiene a las cuatro en su turno. <mark class="clave">Le escribes a ella primero</mark>.</p>`,
    type: 'compose', enviaA: 'justina', para: 'Para: Sra. Justina Mamani · Supervisora de urdido', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué pasó', ops: [
        { id: 'q1', t: 'Señora Justina, en mi reporte de horas extra me equivoqué con Mirian, Faustina y las dos Lizbeth.', ok: true, por: 'Dices que el error fue tuyo, sin rodeos.' },
        { id: 'q2', t: 'Señora Justina, hubo un problema con el sistema y salieron mal unas horas.', ok: false, por: 'Diluyes tu responsabilidad en «el sistema».' },
      ] },
      { id: 'arreglo', t: 'Cómo se arregló', ops: [
        { id: 'a1', t: 'Ya está corregido y cobrarán sus horas completas en este pago. Faustina también, gracias a su cuaderno.', ok: true, por: 'Le das la información que ellas necesitan saber.' },
        { id: 'a2', t: 'Ya lo estamos viendo.', ok: false, por: 'No dice si cobrarán ni cuándo.' },
      ] },
      { id: 'pide', t: 'Qué le pides', ops: [
        { id: 'p1', t: '¿Me ayuda a contarles? Y si alguna quiere, que venga a la ventanilla y le muestro su boleta.', ok: true, por: 'Ofreces explicar en persona.' },
        { id: 'p2', t: 'Disculpe las molestias.', ok: null, por: 'Amable, pero no les ofrece nada.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'a1', 'p1'].filter(x => Object.values(sel).includes(x)).length, culpa = sel.que === 'q2';
      const q = culpa ? 'aceptable' : buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : culpa ? -2 : 0 },
        flags: q === 'buena' ? ['linea_informada'] : [],
        out: q === 'buena' ? 'Justina responde con un audio: «Así se hace, hijita. Uno se equivoca, pero da la cara». A las 16:40 Mirian pasa por la ventanilla a ver su boleta.' : culpa ? 'Justina responde: «Ya, hijita». Más tarde Diego le cuenta, sin querer, que el error fue del reporte.' : 'Justina responde con un «ya». Las operarias se enterarán por la boleta.',
        pro: { ok: 'Decir «me equivoqué» a las personas afectadas genera respeto, no debilidad.', risk: 'Culpar al sistema funciona hasta que alguien cuenta la verdad.', info: 'Ofrecer mostrar la boleta en persona baja la desconfianza el día de pago.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Diste la cara. ¡Eso es oficio!' : 'Faltó decirlo más claro.'],
      };
    },
    rules: [[BP, 'Cuando un error afecta a alguien, avísale tú, con lo que pasó, cómo se arregló y dónde preguntar.']],
    mirada: {
      ve: 'Para una operaria, una boleta que no cuadra es una preocupación para toda la semana. Avisar antes, reconociendo el error y explicando la solución, cambia la relación entre la línea y RR.HH.: de «los de la oficina» a gente que da la cara.',
      visual: { tipo: 'mensaje', titulo: 'Dar la cara en tres líneas', txt: 'Señora Justina, en mi reporte de horas extra me equivoqué con Mirian, Faustina y las dos Lizbeth. Ya está corregido y cobrarán sus horas completas en este pago. ¿Me ayuda a contarles? Si alguna quiere, que venga a la ventanilla y le muestro su boleta.' },
    },
  },
  {
    id: 'e7', t: '17:20', ch: 'correo', who: null, titulo: '¿Qué cambiamos?', banner: 'assets/esc/piensa.webp', show: ['calidad', 'confianza', 'cumplimiento'],
    mail: { from: 'Carla Zegarra · Jefa de RR.HH.', to: 'Practicante de RR.HH.', asunto: 'Para que no vuelva a pasar' },
    body: () => `<p>El cierre salió bien. Ahora, antes de que te vayas: ¿qué cambiarías para que este error no se repita, contigo o con quien venga después?</p><p><mark class="clave">Una sola idea, la más útil</mark>.</p><p>Carla</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Que todo reporte que afecte sueldos tenga visto bueno de la supervisora y una segunda revisión antes de enviarse.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 4 }, rel: { carla: 1 }, flags: ['control_doble'],
          responde: 'Carla: propongo que todo reporte que afecte sueldos tenga dos controles antes de ir a Planillas: el visto bueno de la supervisora de la línea y una segunda revisión en RR.HH., con el formato de horas en hh:mm. Hoy los cuatro errores se habrían visto antes.',
          out: 'Carla responde: «Hecho. Desde la próxima semana. Y anótalo para tu propuesta de fin de mes».',
          pro: { ok: 'Propones un control en el proceso, no un castigo a la persona.', info: 'Los mejores controles son simples: dos firmas y un formato fijo.' },
          kusi: ['celebra', '¡Tu error se volvió una mejora!'] } },
      { id: 'b', label: 'Prometer que vas a tener más cuidado de ahora en adelante.',
        res: { q: 'aceptable', fx: { confianza: 1 },
          responde: 'Carla: te prometo que voy a tener más cuidado. No va a volver a pasar.',
          out: 'Carla responde: «Te creo. Pero el cuidado se cansa. Piensa en un control que funcione aunque estés cansada».',
          pro: { ok: 'Asumes el compromiso.', risk: 'La buena voluntad no es un control: el próximo jueves de cierre también estarás cansada.' },
          kusi: ['pensando', 'La promesa es sincera, pero ¿y el proceso?'] } },
      { id: 'c', label: 'Que Planillas revise siempre los reportes antes de cerrar: para eso están.',
        res: { q: 'riesgosa', fx: { confianza: -3, calidad: -1 }, rel: { diego: -1 },
          responde: 'Carla: creo que Planillas debería revisar siempre los reportes antes del cierre, para eso están.',
          out: 'Carla responde con una sola línea: «Planillas encontró tu error esta vez. ¿Qué haces tú para que no tengan que hacerlo?».',
          pro: { ok: 'Es cierto que Planillas también controla.', risk: 'Pasarle la responsabilidad al siguiente eslabón no mejora tu parte.' },
          kusi: ['sorpresa', 'Uy… eso sonó a echarle la culpa a Diego.'] } },
    ],
    rules: [[BP, 'Después de un error, mejora el proceso, no solo tu promesa.']],
    mirada: {
      ve: 'Prometer «tener más cuidado» es humano, pero no es un control. Las organizaciones que aprenden de sus errores cambian el proceso para que el error sea difícil de repetir, aunque la persona esté cansada o apurada.',
      visual: { tipo: 'cambio', titulo: 'Del error al control', pares: [['Reporte armado en el celular', 'Formato fijo en hh:mm'], ['Sin visto bueno de la línea', 'Firma de la supervisora'], ['Una sola revisión', 'Segunda revisión en RR.HH.']] },
    },
  },
  {
    id: 'e8', t: '18:40', ch: 'presencial', who: 'diego', titulo: 'Un queso helado', banner: 'assets/foto2/caminan.webp', lugar: 'Salida del Parque Industrial', show: ['personas', 'confianza'],
    body: (n, F) => `<p>En el paradero, Diego llega corriendo. ${F.has('asistencia_diego') ? '«Oye… lo del Excel en el grupo. Mi jefa lo reenvió. Yo no sabía. Perdón.»' : '«Qué día, ¿no? Yo también me equivoqué el mes pasado y nadie me dijo nada. Por eso te avisé.»'}</p><p>«¿Vamos por un queso helado a la plaza? <mark class="clave">Yo invito</mark>.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Ir con él y hablar de cómo les fue a los dos.',
        res: { q: null, fx: { personas: 3, confianza: 1 }, rel: { diego: 1 }, out: 'En la Plaza de Armas, con el Misti rosado al fondo, Diego te cuenta que también tiene miedo de equivocarse en la planilla. Se ríen de las dos Lizbeth. El queso helado sabe a canela.', kusi: ['feliz', 'Después de un mal día, una buena compañía.'] } },
      { id: 'b', label: 'Agradecerle y volver a tu casa a descansar.',
        res: { q: null, fx: { tiempo: 1 }, out: 'Le das las gracias y subes a la combi. Ves el Misti por la ventana mientras repasas el día. Esta vez, sin el corazón acelerado.', kusi: ['animo', 'Descansar también es cuidarse.'] } },
    ],
    mirada: { ve: 'Después de un error, el cuerpo queda cansado y la cabeza no para. Compartirlo con alguien que entiende el oficio ayuda a convertir la vergüenza en aprendizaje. Los compañeros también son parte de cómo uno se forma.' },
  },
];
