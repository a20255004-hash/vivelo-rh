// Analista de Planillas · Capítulo 8 · «El cierre» · Semana 2, miércoles.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas:
// - Ley 28518, de modalidades formativas laborales: la subvención económica del practicante no tiene carácter remunerativo.
//   (Se usa como principio para revisar un descuento de pensiones aplicado a un practicante; no se citan tasas.)
//   https://lpderecho.pe/ley-modalidades-formativas-laborales-ley-28518/
//   https://lacamara.pe/alcances-de-la-ley-de-modalidades-formativas-laborales/
// - D.S. 007-2002-TR, art. 8 (piso nocturno) y Ley 25129 (asignación familiar), ya citados en el capítulo 2.
//   https://cdn.www.gob.pe/uploads/document/file/5674322/5035689-informe-tecnico-0947-2021-servir-gpgsc.pdf
// - D.S. 018-2007-TR (T-Registro y PLAME), ya citado en el capítulo 1.

export const CAP = {
  n: 8, titulo: 'El cierre', dia: 'Semana 2, miércoles', foto: 'assets/3d/scenes/oficina.webp',
  lugar: 'Andes Logística · Oficina de Compensaciones, Callao',
  inicio: '06:30', fin: '20:00', cierreHora: '19:45',
  apertura: 'Miércoles, seis y media de la mañana. El almacén huele a cartón húmedo y a café de olla. Hoy se cierra la planilla de noviembre: la primera que Nómina360 calculará de verdad. Lo que salga hoy es lo que 1,100 personas cobrarán el viernes.', boton: 'Empezar el cierre',
  kusi: 'Hoy no se inventa nada: se controla. Lista en mano, ¡dale!',
  lead: 'Seguiste tu lista de control, resolviste un sistema colgado, revisaste las variaciones contra el mes anterior, frenaste (o no) un cambio de último minuto y pediste la aprobación con evidencia.',
  reflexion: '¿Qué control de hoy te habría hecho dormir tranquila si nadie lo hubiera pedido?',
  siguiente: { n: 9, titulo: 'Salida en vivo', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'cierre', p: 'Cierre de planilla de noviembre', j: 'Tú · Mili', d: 0, e: 'Hoy, hasta las 6 p. m.' },
  { id: 'variaciones', p: 'Reporte de variaciones', j: 'Tú', d: 0, e: 'Por revisar' },
  { id: 'bono', p: 'Reintegro del bono', j: 'Rosa · Tesorería', d: 0, e: 'Calendario acordado' },
  { id: 'sunafil', p: 'Comparecencia ante SUNAFIL', j: 'Inspector Cuba', d: 0, e: 'Lunes 9:00' },
  { id: 'banco', p: 'Archivo de pago al banco', j: 'Tú · Tesorería', d: 0, e: 'Mañana' },
];

export const FUTURO = {
  cierre_ordenado: ['Cerraste siguiendo tu lista de control, paso por paso.', 'Mañana el archivo del banco saldrá de una planilla confiable.'],
  segmentado: ['Calculaste por planillas separadas cuando el sistema se colgó.', 'Diego aprendió que Nómina360 no aguanta 1,100 de golpe.'],
  variaciones_revisadas: ['Encontraste las variaciones que no tenían explicación antes de aprobar.', 'Un empleado no cobrará S/ 9,000 de más.'],
  variaciones_flojas: ['Aprobaste con variaciones sin revisar.', 'El viernes alguien cobrará lo que no debía.'],
  cambio_formal: ['El bono navideño de Operaciones entró solo con aprobación escrita.', 'Marco Paredes aprendió el camino.'],
  cambio_informal: ['Metiste el bono navideño con un WhatsApp como sustento.', 'Contabilidad preguntará quién lo aprobó.'],
  cambio_rechazado: ['Rechazaste el bono navideño por estar fuera de plazo.', 'Operaciones lo pagará en diciembre, de mal humor.'],
  planilla_bloqueada: ['La planilla quedó aprobada y bloqueada a las 7:20 p. m.', 'Nadie la puede tocar antes del archivo del banco.'],
  planilla_abierta: ['Dejaste la planilla abierta para «un ajuste más» de Diego.', 'Mañana no sabrás si es la misma que aprobó Patricia.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  mili: { n: 'Mili Sotelo', sub: 'Asistente de Planillas', c: '#C05621' },
  marco: { n: 'Ing. Marco Paredes', sub: 'Gerente de Operaciones', c: '#2C7A7B' },
  yesenia: { n: 'Yesenia Vargas', sub: 'Supervisora del turno noche', c: '#6B46C1' },
};

export const WSP = [
  { chat: 'mili', t: '06:35', de: 'Mili', txt: 'Ya estoy en la puerta 2 ☕ Thiago amaneció sin fiebre. Gracias por lo de ayer, de verdad 🧡', si: 'mili_cuidada' },
  { chat: 'mili', t: '06:50', de: 'Mili', txt: 'Llegando… dormí 3 horas 😵', si: 'mili_quedada' },
  { chat: 'yesenia', t: '07:10', de: 'Yesenia', txt: 'Le mandé los 12 formatos que faltaban, todos firmados. Mi gente pregunta si este mes sí sale bien 🙏' },
  { chat: 'diego', t: '09:42', de: 'Diego', txt: 'Se colgó en 61 %… ya casi, reinicio el servicio 😅' },
  { chat: 'marco', t: '13:05', de: 'Marco', txt: 'Hola. Incluyan en la planilla de este mes un bono de S/ 300 para los 50 de la campaña navideña. Ya hablé con el gerente general. Gracias.' },
  { chat: 'equipo', t: '19:25', de: 'Patricia', txt: 'Aprobada y bloqueada ✅ Primera planilla de Nómina360. Gracias, equipo. Mañana, el banco.', si: 'planilla_bloqueada' },
];

export const CORREOS = [
  { t: '15:10', de: 'Álvaro Benavides', para: 'Patricia Gómez; Analista de Planillas', asunto: 'RE: Bono campaña navideña', html: '<p>Aprobado el bono de S/ 300 para los 50 operarios de la campaña, con cargo al presupuesto de Operaciones. Adjunto la lista firmada por Marco.</p>', si: 'cambio_formal' },
];

export const QUIZ = [
  { q: '¿Para qué sirve un reporte de variaciones contra el mes anterior?', ops: ['Para adornar el cierre', 'Para encontrar los cambios grandes que no tienen explicación antes de aprobar', 'Para la PLAME', 'Para el banco'], ok: 1, por: 'Lo que cambió mucho de un mes a otro debe tener una causa conocida.' },
  { q: 'La subvención de un practicante…', ops: ['Es un sueldo como cualquiera', 'No tiene carácter remunerativo (Ley 28518), así que un descuento de pensiones debe revisarse', 'Lleva siempre AFP', 'Lleva CTS'], ok: 1, por: 'La Ley 28518 dispone que la subvención no tiene carácter remunerativo.' },
  { q: 'Un gerente pide por WhatsApp un bono para 50 personas el día del cierre. ¿Qué haces?', ops: ['Lo metes, es gerente', 'Pides aprobación escrita de quien corresponde antes de la hora de corte; si no llega, va al mes siguiente', 'Lo rechazas sin explicar', 'Lo pagas en efectivo'], ok: 1, por: 'Todo cambio a la planilla necesita sustento escrito y aprobación, también los de última hora.' },
  { q: 'Si el sistema se cuelga calculando toda la planilla, una buena alternativa es…', ops: ['Esperar sin hacer nada', 'Calcular por partes (planilla por planilla) y conciliar los totales', 'Calcular a mano', 'Postergar el pago'], ok: 1, por: 'Segmentar el cálculo reduce la carga y permite avanzar con control.' },
  { q: '¿Por qué se bloquea la planilla una vez aprobada?', ops: ['Por costumbre', 'Para que lo que se paga sea exactamente lo que se aprobó', 'Para que Diego descanse', 'Porque SUNAT lo pide'], ok: 1, por: 'Si se puede cambiar después de aprobada, la aprobación pierde sentido.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '06:45', ch: 'documento', who: null, titulo: 'La lista de control', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, con el sol saliendo', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('metodo_conciliacion') ? 'Junto a tu método de conciliación de la semana pasada' : 'En una hoja nueva'}, pegas la lista de control del cierre. Mili lee en voz alta, tú ordenas. <mark class="clave">El orden evita que corrijas dos veces lo mismo.</mark></p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del cierre. Usa las flechas.', boton: 'Empezar en este orden',
    items: [
      { id: 'nov', t: 'Cargar novedades: altas, ceses, licencias y descansos médicos', por: 'Primero quién está y quién no.' },
      { id: 'he', t: 'Importar horas extras y turnos de noche', por: 'Después, lo variable.' },
      { id: 'calc', t: 'Calcular la planilla en Nómina360', por: 'Con todo cargado.' },
      { id: 'var', t: 'Revisar variaciones contra octubre', por: 'Lo que cambió mucho.' },
      { id: 'crit', t: 'Revisar casos críticos: piso nocturno, asignación familiar, cesados', por: 'Los que ya fallaron antes.' },
      { id: 'tot', t: 'Conciliar totales con el presupuesto y con Contabilidad', por: 'El número grande.' },
      { id: 'apr', t: 'Pedir aprobación y bloquear la planilla', por: 'Lo aprobado es lo que se paga.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: q === 'buena' ? 2 : -1 },
        flags: q === 'riesgosa' ? [] : ['cierre_ordenado'], cartera: { cierre: q === 'riesgosa' ? 'Cierre sin orden claro' : 'Lista de control de 7 pasos en marcha' },
        out: q === 'buena' ? 'A las 8:30 ya están cargadas 14 novedades y las horas extras de los 12 formatos de Yesenia. Le das «Calcular».' : 'Calculas antes de cargar todas las horas extras. Tendrás que volver a calcular.',
        pro: { ok: 'Cargar, calcular, revisar, conciliar y aprobar: en ese orden.', risk: 'Calcular antes de tener todas las novedades te obliga a recalcular y a revisar dos veces.', info: 'Marca cada paso con la hora en que lo terminaste.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Lista en marcha!' : 'Primero cargar, luego calcular.'],
      };
    },
    mirada: {
      ve: 'Un cierre de planilla es una cadena: si un eslabón entra tarde, todo lo que vino después se rehace. La lista de control no es burocracia: es lo que permite cerrar en un día sin perder el control.',
      visual: { tipo: 'flujo', titulo: 'El cierre', pasos: ['Novedades', 'Horas extras', 'Calcular', 'Variaciones', 'Casos críticos', 'Conciliar', 'Aprobar'], aqui: 2 },
    },
  },
  {
    id: 'e2', t: '09:45', ch: 'sistema', who: 'consultor', titulo: 'Colgado en 61 %', banner: 'assets/esc/alarma.webp', show: ['tiempo', 'calidad', 'confianza'],
    body: () => `<p>La barra de Nómina360 se detiene en 61 %. Diez minutos. Veinte. Diego reinicia el servicio y vuelve a empezar: se cuelga en 58 %. «Ya casi», dice, con la camisa pegada a la espalda.</p><p>Faltan ocho horas para la hora de corte. <mark class="clave">¿Qué propones?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Calcular por partes: primero practicantes, luego empleados, luego operarios por turno, y conciliar los totales al final.',
        res: { q: 'buena', fx: { tiempo: 3, calidad: 3, confianza: 2 }, rel: { consultor: 1 }, flags: ['segmentado'], cartera: { cierre: 'Calculado en 4 partes, totales conciliados' },
          out: 'Practicantes: 2 minutos. Empleados: 9. Operarios del día: 14. Turno noche: 11. A las 11:10 tienes las cuatro partes y los totales suman lo mismo que la proyección. Diego anota: «el proceso masivo necesita más memoria».',
          pro: { ok: 'Divides el problema y sigues avanzando con control.', info: 'Cuando calculas por partes, concilia que la suma sea igual al total esperado.' },
          kusi: ['celebra', '¡Divide y vencerás!'] } },
      { id: 'b', label: 'Esperar a que Diego lo resuelva: no conviene improvisar con el sistema nuevo.',
        res: { q: 'aceptable', fx: { tiempo: -3 },
          out: 'Diego lo resuelve a las 12:40, con soporte del proveedor desde Bogotá. Perdiste casi tres horas de revisión.',
          pro: { ok: 'No arriesgas el sistema.', risk: 'Cada hora de espera es una hora menos para revisar.' },
          kusi: ['preocupado', 'El reloj no espera.'] } },
      { id: 'c', label: 'Volver al sistema viejo para este mes y pagar con él.',
        res: { q: 'riesgosa', fx: { tiempo: -2, calidad: -3, confianza: -3 }, rel: { 'patricia-g': -1 },
          out: 'Patricia te recuerda que el sistema viejo no tiene el piso nocturno ni el bono corregidos, y que su licencia vence en días. Pierdes una hora en volver a Nómina360.',
          pro: { ok: 'Buscas una red de seguridad.', risk: 'El sistema viejo calcula con los errores que pasaste dos semanas corrigiendo.' },
          kusi: ['sorpresa', '¿Volver a los errores?'] } },
    ],
    mirada: { ve: 'Todo sistema nuevo falla alguna vez el primer día. Lo que distingue un cierre controlado de uno caótico es tener un plan B que no sacrifique lo ya corregido: dividir, avanzar y conciliar.' },
  },
  {
    id: 'e3', t: '11:30', ch: 'documento', who: null, titulo: 'Las variaciones', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Sacas el reporte de variaciones: cada trabajador cuyo neto cambió más de 10 % respecto de octubre. ${F.has('doble_noche') ? 'El turno noche ya no aparece con doble pago.' : 'Hay muchas filas del turno noche.'} <mark class="clave">Cada fila necesita una explicación.</mark></p>`,
    type: 'flag', prompt: 'Marca las variaciones que no deberían pasar así a la aprobación.',
    doc: { t: 'Nómina360 · Variaciones noviembre vs. octubre (> 10 %)', sub: 'Andes Logística · 47 filas · extracto' },
    lines: [
      { id: 'emp', t: 'Empleado de Contabilidad: neto de S/ 3,200 a S/ 12,250. Motivo: «vacaciones».', bad: BP, why: 'Unas vacaciones no multiplican por casi cuatro el neto: el sistema le está pagando las vacaciones dos veces o con otra base. Hay que revisarlo.' },
      { id: 'noc', t: '38 operarios del turno noche: básico de S/ 1,500 a S/ 1,660.50, sin X22.' },
      { id: 'walter', t: 'Wálter Ccahuana: asignación familiar S/ 123, nueva desde octubre.' },
      { id: 'prac', t: 'Practicante de Sistemas: subvención con descuento de AFP de S/ 134.', bad: LEY, why: 'La subvención de un practicante no tiene carácter remunerativo (Ley 28518): revisa por qué el sistema le aplica un aporte de pensiones.' },
      { id: 'cero', t: 'Operaria del turno día: neto S/ 0. Motivo: descanso médico de todo el mes.', duda: 'Puede estar bien si el subsidio lo paga EsSalud, pero confirma que se haya registrado el descanso y quién paga cada tramo.' },
      { id: 'x17', t: 'Bono de permanencia 2018: 30 operarios, sin variación.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      q: missLey || !hitsBp ? 'riesgosa' : 'buena',
      out: missLey || !hitsBp ? 'Algo de la lista pasó sin explicación. El viernes alguien cobrará lo que no debía.' : 'El empleado de Contabilidad tenía las vacaciones cargadas dos veces: una como novedad y otra como concepto migrado. El practicante estaba configurado como «empleado». Diego corrige los dos y recalculas en diez minutos.',
      flags: [missLey || !hitsBp ? 'variaciones_flojas' : 'variaciones_revisadas'], cartera: { variaciones: missLey || !hitsBp ? 'Variaciones sin cerrar' : '47 variaciones explicadas; 2 errores corregidos' },
      pro: { ok: 'Explicas cada variación grande antes de aprobar.', risk: 'Un pago de S/ 9,000 de más es difícil de recuperar después del viernes.', info: 'Un neto en cero no siempre está mal: revisa la causa.' },
      kusi: missLey ? ['preocupado', '¿Y el practicante?'] : ['celebra', '¡Nueve mil soles salvados!'],
    }),
    rules: [[LEY, 'La subvención económica del practicante no tiene carácter remunerativo (Ley 28518).']],
    mirada: {
      ve: 'El reporte de variaciones es el último filtro antes del pago. Un sistema nuevo suele equivocarse en los casos poco frecuentes: vacaciones, practicantes, descansos médicos. Ahí es donde hay que mirar.',
      visual: { tipo: 'embudo', titulo: 'Variaciones de noviembre', niveles: [['Boletas', 1100], ['Variación > 10 %', 47], ['Sin explicación', 3], ['Errores reales', 2]] },
    },
  },
  {
    id: 'e4', t: '13:15', ch: 'whatsapp', who: null, titulo: 'El bono de última hora', banner: 'assets/foto2/tension.webp', show: ['cumplimiento', 'confianza', 'etica'],
    body: () => `<p>El ingeniero Marco Paredes, gerente de Operaciones, te escribe: un bono de S/ 300 para 50 operarios de la campaña navideña, «ya conversado con el gerente general». Lo pide por WhatsApp, sin lista firmada ni presupuesto. Marco es exigente y querido por su gente: <mark class="clave">viene de abajo, fue montacarguista.</mark></p><p>La hora de corte es a las seis.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responderle que entra si antes de las cuatro llegan la lista firmada y la aprobación escrita de Finanzas; si no, va en diciembre.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 2 }, rel: { 'patricia-g': 1 }, flags: ['cambio_formal'], cartera: { cierre: 'Bono navideño: entra con aprobación escrita' },
          envia: [['marco', 'Ingeniero, con gusto lo incluimos. Para que entre en noviembre necesito antes de las 4 p. m. la lista de los 50 con DNI firmada por usted y la aprobación de Finanzas por correo. Si llega después, sale en la planilla de diciembre.']],
          out: 'Marco responde con un audio algo seco: «Ya, te mando todo». A las 3:10 llega el correo de Álvaro con la lista adjunta. El bono entra con sustento.',
          pro: { ok: 'No dices que no: dices cómo.', risk: 'Marco puede sentir que lo tratas como a cualquiera.', info: 'Un cambio con sustento escrito es un cambio que podrás defender.' },
          kusi: ['animo', 'Sí, pero con papeles.'] } },
      { id: 'b', label: 'Incluirlo: es un gerente, dijo que lo habló con el gerente general y son operarios que se lo merecen.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, confianza: -1 }, rel: { 'patricia-g': -1 }, flags: ['cambio_informal'], cartera: { cierre: 'Bono navideño cargado con un WhatsApp' },
          out: 'Cargas el bono. A las cinco, Contabilidad pregunta con qué presupuesto se paga y quién lo aprobó. Solo tienes un WhatsApp.',
          pro: { ok: 'Marco y su gente contentos.', risk: 'Un pago de S/ 15,000 sin aprobación escrita es un hallazgo de auditoría seguro.' },
          kusi: ['preocupado', '¿Un WhatsApp como sustento?'] } },
      { id: 'c', label: 'Decirle que está fuera de plazo y que lo vean en diciembre.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -2 }, flags: ['cambio_rechazado'], cartera: { cierre: 'Bono navideño: diciembre' },
          envia: [['marco', 'Ingeniero, el cierre es hoy y ya no recibimos cambios. Lo vemos en diciembre.']],
          out: 'Marco se queja con Patricia. El bono se pagará en diciembre, después de la campaña, cuando ya no motive a nadie.',
          pro: { ok: 'Proteges el cierre.', risk: 'Un «no» sin camino, cuando había tiempo para hacerlo bien, te cuesta relaciones.' },
          kusi: ['pensando', '¿No había un camino?'] } },
    ],
    rules: [[BP, 'Todo cambio en la planilla necesita sustento escrito y aprobación, aunque llegue el día del cierre.']],
    mirada: {
      ve: 'Los cambios de último minuto llegan siempre el día del cierre, y casi siempre de alguien con poder. La respuesta profesional no es «sí» ni «no»: es «sí, con estas condiciones, hasta esta hora».',
      visual: { tipo: 'balanza', a: { t: 'Meterlo con un WhatsApp', items: ['Gerente contento', 'Cero trámite'] }, b: { t: 'Con aprobación escrita', items: ['Presupuesto claro', 'Sustento para auditoría', 'El bono llega igual'] } },
    },
  },
  {
    id: 'e5', t: '16:30', ch: 'whatsapp', who: 'patricia-g', titulo: 'Pedir la aprobación', banner: 'assets/foto2/celebra-laptop.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Ya está todo calculado y revisado${F.has('variaciones_flojas') ? ', o eso crees' : ''}. Patricia está en el comité de gerencia y aprueba desde el celular. <mark class="clave">Tu mensaje tiene que decirle por qué puede firmar.</mark></p>`,
    type: 'compose', enviaA: 'patricia', para: 'Para: Patricia Gómez · Jefa de Compensaciones', boton: 'Pedir la aprobación',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'tot', t: 'El total', ops: [
        { id: 't1', t: 'Planilla de noviembre lista: neto S/ 2,861,420, 0.5 % sobre octubre, explicado por el piso nocturno, la asignación familiar y el bono navideño.', ok: true, por: 'Total y por qué cambió.' },
        { id: 't2', t: 'Planilla lista, todo cuadra 👌', ok: false, por: 'No le das nada para decidir.' },
      ] },
      { id: 'ctrl', t: 'Los controles', ops: [
        { id: 'c1', t: 'Revisé 47 variaciones: corregimos 2 errores (vacaciones duplicadas y un practicante con AFP). Totales conciliados con Contabilidad.', ok: true, por: 'Evidencia de control.' },
        { id: 'c2', t: 'Diego dice que el sistema calculó bien.', ok: false, por: 'Delegas tu firma en el consultor.' },
      ] },
      { id: 'pend', t: 'Lo pendiente', ops: [
        { id: 'p1', t: 'Pendiente: una operaria con descanso médico todo el mes, en revisión con EsSalud; no afecta el pago de nadie más.', ok: true, por: 'Transparente sobre lo que falta.' },
        { id: 'p2', t: 'No hay pendientes.', ok: null, por: 'Si hay uno, dilo.' },
      ] },
    ],
    res: sel => {
      const buenas = ['t1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 2 : -1 }, rel: { 'patricia-g': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Patricia responde desde el comité: «Bajo a las siete a aprobar en el sistema. Con esto, firmo tranquila».' : 'Patricia responde: «¿Cuánto es el total? ¿Qué revisaste?». Tienes que escribir todo otra vez.',
        pro: { ok: 'Total, controles y pendientes: lo que una jefa necesita para firmar.', risk: '«Todo cuadra» no es evidencia.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Firma tranquila. ¡Eso!' : 'Dale evidencia.'],
      };
    },
    mirada: { ve: 'Pedir una aprobación no es pedir un favor: es entregar la evidencia para que otra persona firme con responsabilidad. Un buen pedido muestra el total, los controles hechos y lo que queda pendiente.' },
  },
  {
    id: 'e6', t: '19:05', ch: 'presencial', who: 'consultor', titulo: '«Un ajuste más»', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Oficina de Compensaciones, casi a oscuras', show: ['cumplimiento', 'calidad', 'confianza'],
    body: () => `<p>Patricia acaba de aprobar en el sistema. Solo falta el botón «Bloquear». Diego, con la mochila ya puesta, se detiene: «Espera, déjala abierta esta noche. <mark class="clave">Quiero ajustar un redondeo en tres boletas</mark>, es cosa de nada».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Bloquearla igual: lo aprobado es lo que se paga. Si hay un redondeo que corregir, se ve como ajuste en diciembre.',
        res: { q: 'buena', fx: { cumplimiento: 4, calidad: 2 }, rel: { consultor: 0 }, flags: ['planilla_bloqueada'], cartera: { cierre: 'Aprobada y bloqueada a las 7:20 p. m.' },
          out: 'Bloqueas a las 7:20. Diego se encoge de hombros: «Tienes razón, es un centavo». Sales con Mili al paradero; la combi viene llena, pero te toca ventana.',
          pro: { ok: 'La planilla que se paga es exactamente la que se aprobó.', info: 'Un ajuste de centavos no justifica romper el control.' },
          kusi: ['celebra', '¡Bloqueada! Primera planilla del sistema nuevo.'] } },
      { id: 'b', label: 'Dejarla abierta: son tres boletas y Diego sabe lo que hace.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, confianza: -2 }, flags: ['planilla_abierta'], cartera: { cierre: 'Aprobada, pero abierta' },
          out: 'Diego trabaja hasta las once. Mañana, el total ya no será exactamente el que aprobó Patricia. Por tres soles.',
          pro: { ok: 'Le das gusto al consultor.', risk: 'Una planilla aprobada que se sigue modificando ya no está aprobada.' },
          kusi: ['preocupado', '¿Y la firma de Patricia?'] } },
    ],
    mirada: { ve: 'Bloquear la planilla después de aprobarla es un control sencillo y poderoso: asegura que nadie, ni con buena intención, cambie lo que se va a pagar. Los ajustes chicos se hacen el mes siguiente, con su propio registro.' },
  },
];
