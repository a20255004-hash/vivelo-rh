// Analista de Capacitación y Desarrollo · Capítulo 3 · «El proveedor» · Semana 1, miércoles.
// Hilo de las dos semanas: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas:
// - Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 28: la capacitación en SST, en cualquiera de sus
//   modalidades, se realiza dentro de la jornada de trabajo; puede impartirla el empleador o un tercero.
//   Informe 82-2015-MTPE (vía LP Derecho): https://lpderecho.pe/capacitaciones-seguridad-salud-trabajo-deben-realizarse-durante-jornada-laboral-informe-82-2015-mtpe/
//   Transcripción del art. 28: https://noticierocontable.com/?p=51169
// - Ley 29783, art. 35 b) (ya citado en el capítulo 1): no menos de cuatro capacitaciones de SST al año.
// La política de compras (tres cotizaciones) y el código de ética de Chimú son ficticios (internos).

export const CAP = {
  n: 3, titulo: 'El proveedor', dia: 'Semana 1, miércoles', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Financiera Chimú · Sede central de Trujillo',
  inicio: '08:00', fin: '18:30', cierreHora: '18:15',
  apertura: 'Miércoles en la sede. Hoy llega la propuesta de Ronald y tienes que decidir con qué criterio se elige a un proveedor.', boton: 'Abrir el correo',
  kusi: 'Lo bonito no siempre es lo útil. ¡Hoy toca comparar con lupa!',
  lead: 'Leíste la propuesta contra tu diagnóstico, llamaste a las referencias, armaste una matriz de evaluación y decidiste qué hacer con un regalo y un paquete de SST.',
  reflexion: '¿Qué te hizo dudar más hoy: el precio, el encanto o las referencias?',
  siguiente: { n: 4, titulo: 'El recorte', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'proveedor', p: 'Propuesta «Liderazgo 360»', j: 'Ronald · Capacita Pro', d: 0, e: 'Versión nueva por revisar' },
  { id: 'matriz', p: 'Matriz de evaluación de proveedores', j: 'Lorena · Desarrollo', d: 0, e: 'Por armar' },
  { id: 'cefin', p: 'Curso «Evaluar y cobrar» · CEFIN Norte', j: 'CEFIN Norte', d: 0, e: 'Cotización de S/ 12,000' },
  { id: 'internos', p: 'Facilitadores internos', j: 'Sandra · Asesora', d: 0, e: 'Por conversar' },
  { id: 'sst', p: 'Capacitaciones de SST', j: 'Lorena · Desarrollo', d: 0, e: 'Faltan 4 este año' },
];

export const FUTURO = {
  regalo_rechazado: ['Rechazaste el cupo gratis que te ofreció Ronald y se lo contaste a Lorena.', 'Te dará autoridad frente a Finanzas. Capítulo 4.'],
  regalo_aceptado: ['Aceptaste un cupo gratis de Ronald mientras evaluabas su propuesta.', 'Alguien en Finanzas lo sabrá. Capítulo 4.'],
  proveedor_mixto: ['Elegiste a CEFIN Norte para el contenido técnico y a facilitadores internos para el campo.', 'Te ayudará cuando recorten el presupuesto. Capítulo 4.'],
  proveedor_ronald: ['Recomendaste el programa de Ronald.', 'Será lo primero que Finanzas quiera cortar. Capítulo 4.'],
  referencias_criticas: ['Notaste que ninguna referencia probaba resultados por sí sola.', 'Lo recordarás al medir. Capítulo 8.'],
  sst_detectado: ['Viste que el «regalo» de SST de Ronald no cumplía el reglamento.', 'Capítulo 7.'],
  ronald_puerta: ['Le dijiste que no a Ronald con criterios y le dejaste una puerta para gerentes.', 'Volverá a escribirte en el capítulo 9.'],
  sst_jornada: ['Pediste que las charlas de SST se hagan dentro de la jornada, con evaluación.', 'Capítulo 7.'],
  sst_grabado: ['Aceptaste charlas de SST grabadas para ver «cuando quieran».', 'Lo descubrirás en el capítulo 7.'],
  sandra_facilitadora: ['Sandra aceptó ser facilitadora, con horas protegidas y sin perder su bono.', 'Dictará contigo el taller. Capítulo 5.'],
  sandra_dudosa: ['Sandra aceptó facilitar, pero sin saber cómo cuidarán su cartera.', 'Llegará cansada al taller. Capítulo 5.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  kevin: { n: 'Kevin Paredes', sub: 'Asesor · El Porvenir', c: '#3D6E8F' },
};

export const WSP = [
  { chat: 'ronald', t: '07:55', de: 'Ronald', txt: 'Buenos días ☀️ Ya está en tu correo la versión con indicadores, como acordamos. ¿Café a las 9:30 frente a la Plaza?', si: 'ronald_pausa' },
  { chat: 'ronald', t: '07:55', de: 'Ronald', txt: 'Buenos días ☀️ Te reenvié el contrato con las condiciones. Solo falta la firma de Lorena. ¿Café a las 9:30 frente a la Plaza?', si: 'ronald_firmado' },
  { chat: 'ronald', t: '07:55', de: 'Ronald', txt: 'Buenos días ☀️ Te mandé la propuesta actualizada. ¿Café a las 9:30 frente a la Plaza?', no: 'ronald_pausa' },
  { chat: 'kevin', t: '10:20', de: 'Kevin', txt: 'Buenos días, señorita. Ayer cerré un acuerdo con la señora Rosa: S/ 150 el sábado y el resto el 15. Le pregunté cuánto podía, como usted dijo 🙌', si: 'kevin_confia' },
  { chat: 'kevin', t: '10:20', de: 'Kevin', txt: 'Señorita, disculpe. Don Julio se quejó porque lo llamé de noche, dice que va a ir a Indecopi 😟 ¿Eso es grave?', si: 'kevin_llamo_noche' },
  { chat: 'grupo', t: '13:05', de: 'Lorena', txt: 'Recuerda que mañana Finanzas revisa presupuestos. Lo que decidas hoy, que tenga sustento 📎' },
  { chat: 'lorena', t: '13:40', de: 'Lorena', txt: 'Gracias por contarme lo del diplomado. Hiciste bien. Ronald es buen tipo, pero así no 🙏', si: 'regalo_rechazado' },
  { chat: 'victor', t: '16:00', de: 'Víctor', txt: 'Viernes 8 a. m., El Porvenir. Confirmado con Nando. No me falles.', si: 'victor_jueves' },
  { chat: 'sandra', t: '17:20', de: 'Sandra', txt: 'Ya, me animo 😅 Pero que no me hagan hablar con micrófono, por favor.', si: 'sandra_facilitadora' },
];

export const CORREOS = [
  { t: '07:50', de: 'Ronald Mejía · Capacita Pro', para: 'Analista de Capacitación y Desarrollo', asunto: '«Liderazgo 360 · Resultados» · propuesta actualizada', html: '<p>Estimada: adjunto la versión con indicadores. Mantenemos el precio con descuento si cerramos este mes. Incluimos de regalo un paquete de cuatro charlas de SST virtuales, grabadas, con certificado.</p><p>Ronald Mejía</p>' },
  { t: '08:40', de: 'CEFIN Norte · Coordinación académica', para: 'Analista de Capacitación y Desarrollo', asunto: 'Cotización · curso «Evaluar y cobrar en microfinanzas»', html: '<p>Buenos días. Según lo conversado con Lorena: curso de 12 horas en tres módulos, dictado por ex asesores de microfinanzas, con casos de su cartera y prueba de entrada y salida. Hasta 60 participantes: S/ 12,000 + IGV. Pago en dos partes.</p><p>Coordinación académica</p>' },
  { t: '15:15', de: 'Finanzas · Chimú', para: 'Jefaturas', asunto: 'Revisión de presupuestos 2027 · jueves', html: '<p>Recordamos que mañana jueves se revisan los presupuestos de todas las áreas. Se pide sustentar cada partida con objetivos y costo por persona.</p><p>Gerencia de Finanzas</p>' },
];

export const QUIZ = [
  { q: 'La capacitación de SST, según el reglamento de la Ley 29783, ¿cuándo se realiza?', ops: ['Cuando el trabajador quiera ver el video', 'Dentro de la jornada de trabajo, en cualquier modalidad', 'Solo de forma presencial los sábados', 'Fuera del horario, para no afectar la producción'], ok: 1, por: 'El artículo 28 del D.S. 005-2012-TR dispone que la capacitación, en cualquiera de sus modalidades, se realice dentro de la jornada.' },
  { q: '¿Puede un proveedor externo dictar la capacitación de SST?', ops: ['No, solo el comité', 'Sí, el empleador puede impartirla directamente o mediante terceros', 'Solo si es gratis', 'Solo el Ministerio de Trabajo'], ok: 1, por: 'El reglamento permite que la capacitación se imparta directamente o a través de terceros, siempre dentro de la jornada.' },
  { q: '¿Qué criterio pesa más al elegir un proveedor de capacitación?', ops: ['El certificado internacional', 'Que responda a las brechas del diagnóstico y mida aprendizaje y aplicación', 'El cierre de gala', 'Que el gerente lo conozca'], ok: 1, por: 'La propuesta se compara contra el diagnóstico, no contra otras propuestas bonitas.' },
  { q: 'Una referencia dice: «Nos encantó, pero no medimos resultados». Eso prueba…', ops: ['Que el curso funciona', 'Solo la satisfacción del cliente', 'Que bajó la mora', 'Que el proveedor es barato'], ok: 1, por: 'Satisfacción no es resultado. Pregunta siempre qué cambió y cómo lo midieron.' },
  { q: 'Un proveedor que estás evaluando te ofrece un cupo gratis en su diplomado. ¿Qué haces?', ops: ['Lo aceptas: es formación', 'Lo rechazas con amabilidad y lo informas a tu jefa', 'Lo aceptas en secreto', 'Le pides dos cupos'], ok: 1, por: 'Un beneficio personal mientras decides crea un conflicto de interés, aunque no cambie tu decisión.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '08:15', ch: 'documento', who: null, titulo: 'La propuesta, contra tu hoja', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Imprimes la propuesta de Ronald en la impresora del pasillo, que atasca la hoja tres veces antes de soltarla. A su lado pones ${F.has('diagnostico_solido') ? 'tu diagnóstico de una hoja: dos brechas que se aprenden y una que no.' : 'tus apuntes de El Porvenir.'}${F.has('ronald_firmado') ? ' Encima está el contrato: solo falta la firma de Lorena.' : ''}</p><p>La propuesta tiene buen diseño, fotos de gente sonriendo y la palabra «resultados» en todas las páginas. <mark class="clave">La pregunta es si resuelve lo que encontraste</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no responde a tu diagnóstico o lo que no deberías aceptar.',
    doc: { t: '«Liderazgo 360 · Resultados» · Capacita Pro', sub: 'Propuesta para Financiera Chimú · versión con indicadores' },
    lines: [
      { id: 'publico', t: 'Participantes: los 40 gerentes y administradores de agencia.', bad: BP, why: 'Tu diagnóstico ubica la brecha en los asesores nuevos, no en los gerentes.' },
      { id: 'objetivo', t: 'Objetivo: desarrollar líderes inspiradores de clase mundial.', bad: BP, why: 'No dice qué cambiará en el trabajo ni cómo se notará en la mora.' },
      { id: 'indicador', t: 'Indicador de éxito: satisfacción mayor a 90 % y Net Promoter Score.', bad: BP, why: 'Mide si gustó, otra vez. No mide aprendizaje ni aplicación.' },
      { id: 'sst', t: 'Regalo: cuatro charlas de SST grabadas, para que cada trabajador las vea cuando quiera.', bad: LEY, why: 'El reglamento de la Ley 29783 (art. 28) exige que la capacitación de SST se haga dentro de la jornada, en cualquier modalidad.' },
      { id: 'pago', t: 'Forma de pago: 100 % adelantado para reservar al coach.', bad: BP, why: 'Si pagas todo antes, no tienes cómo exigir lo que prometieron.' },
      { id: 'coach', t: 'Coaching individual de seguimiento para cada participante, dos sesiones.', duda: 'Puede ser útil para gerentes, pero no es la necesidad urgente de estas semanas.' },
      { id: 'casos', t: 'Uso de casos reales del sector financiero.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? `Marcas ${hitsBp} problemas de fondo, pero el «regalo» de SST te parece una buena noticia. No lo es.` : 'Tu hoja de la propuesta queda llena de rojo. Lo que más te preocupa no es el precio: es que no habla de los asesores nuevos ni de cómo se medirá si aprendieron.',
      flags: missLey ? [] : ['sst_detectado'],
      cartera: { proveedor: missLey ? 'Revisada; SST sin observar' : 'No responde al diagnóstico; SST mal planteado' },
      pro: { ok: 'Leer una propuesta contra tu diagnóstico, y no contra tu entusiasmo, es lo que separa comprar de elegir.', risk: 'Lo que viene «de regalo» también tiene que cumplir la ley.', info: 'Pide siempre la propuesta en términos de: para quién, qué cambiará y cómo se medirá.' },
      kusi: missLey ? ['pensando', '¿Un regalo de SST que se ve cuando quieras…?'] : ['celebra', '¡Leíste lo bonito y viste lo que faltaba!'],
    }),
    rules: [[LEY, 'Reglamento de la Ley 29783, art. 28: la capacitación de SST, en cualquier modalidad, se realiza dentro de la jornada de trabajo.'], [BP, 'Compara cada propuesta contra el diagnóstico: público, objetivo y medición.']],
    mirada: {
      ve: 'Las propuestas de capacitación se venden con palabras como «resultados», «transformación» o «clase mundial». La analista las traduce a tres preguntas: para quién, qué cambiará en su trabajo y cómo lo sabremos.',
      visual: { tipo: 'cambio', titulo: 'Lo que dice la propuesta y lo que necesitas', pares: [['40 gerentes', '60 asesores nuevos'], ['Líderes inspiradores', 'Evaluar y cobrar mejor'], ['Satisfacción y NPS', 'Prueba de salida y mora a 30 días']] },
      normas: [{ ley: 'Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 28', dice: 'La capacitación en SST, en cualquiera de sus modalidades, se realiza dentro de la jornada de trabajo. El empleador puede impartirla directamente o mediante terceros.', practica: 'Un video grabado puede servir, pero si cada uno lo ve «cuando quiera», fuera del horario, no cumple.' }],
    },
  },
  {
    id: 'r2', t: '09:30', ch: 'presencial', who: 'ronald', titulo: 'Un café frente a la Plaza', banner: 'assets/foto/cafe.webp', lugar: 'Café frente a la Plaza de Armas de Trujillo', show: ['etica', 'confianza', 'calidad'],
    body: () => `<p>Ronald ya pidió dos cafés pasados y un alfajor de manjar. Por la ventana se ve el Monumento a la Libertad y una fila de escolares con su profesora. Te muestra su tablet con fotos de su último cierre de gala.</p><p>Antes de despedirse, desliza un sobre: «Tengo un cupo libre en mi diplomado de coaching, valor S/ 3,500. <mark class="clave">Es para ti, no para la empresa</mark>. Te va a servir en tu carrera».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle y devolverle el sobre: mientras evalúas su propuesta no puedes aceptar beneficios. Contárselo a Lorena.',
        res: { q: 'buena', fx: { etica: 5, confianza: 2 }, rel: { ronald: -1, lorena: 1 }, flags: ['regalo_rechazado'],
          out: 'Ronald sonríe sin incomodarse: «Te entiendo, te entiendo». Guarda el sobre. Le escribes a Lorena apenas sales; ella responde que hiciste bien.',
          pro: { ok: 'Rechazar a tiempo y avisar protege tu decisión, aunque al final elijas a Ronald.', risk: 'Ronald puede enfriarse, y es un proveedor útil para otras cosas.', info: 'Revisa el código de ética de tu empresa: casi todos regulan los regalos de proveedores.' },
          kusi: ['celebra', 'Elegir con las manos libres. ¡Así!'] } },
      { id: 'b', label: 'Aceptarlo: es formación, te hará mejor profesional y eso también beneficia a Chimú.',
        res: { q: 'riesgosa', fx: { etica: -6, confianza: -1 }, rel: { ronald: 1 }, flags: ['regalo_aceptado'],
          out: 'Te llevas el sobre. Por la tarde, cuando le pones nota a Ronald en tu matriz, te tiembla un poco el lápiz.',
          pro: { ok: 'El diplomado podría servirte de verdad.', risk: 'Aceptar un beneficio personal de quien estás evaluando es un conflicto de interés, aunque no cambie tu decisión. Y si alguien se entera, nadie creerá que no la cambió.' },
          kusi: ['preocupado', 'Ahora cualquier nota que le pongas parecerá comprada…'] } },
      { id: 'c', label: 'Decirle que lo aceptas, pero a nombre de la empresa, para que vaya alguien del área cuando termine la evaluación.',
        res: { q: 'aceptable', fx: { etica: 1, confianza: 1 }, rel: { ronald: 0 },
          out: 'Ronald dice «claro, claro» y se lo guarda. Le cuentas a Lorena. Ella lo piensa: «Mejor esperemos a cerrar la evaluación y lo vemos por escrito».',
          pro: { ok: 'Quitas el beneficio personal de la mesa.', risk: 'Mientras dure la evaluación, cualquier beneficio, aunque sea para la empresa, pesa en la balanza.' },
          kusi: ['pensando', 'Mejor, pero el momento todavía no es el adecuado.'] } },
    ],
    rules: [[POL, 'Código de ética de Chimú: no se aceptan regalos ni beneficios de proveedores que participan en un proceso de selección.'], [BP, 'Ante un beneficio ofrecido por un proveedor, decláralo a tu jefatura.']],
    mirada: {
      ve: 'En capacitación, los proveedores son aliados y también vendedores. Un detalle amable puede ser solo cortesía o una forma de inclinar la balanza. Por eso la regla es simple: mientras evalúas, las manos libres.',
      visual: { tipo: 'balanza', a: { t: 'Lo que te ofrecen', items: ['Diplomado de S/ 3,500', 'Un contacto útil', 'Buena relación'] }, b: { t: 'Lo que arriesgas', items: ['Tu criterio a la vista de todos', 'La confianza de Finanzas', 'Tu nombre'] } },
    },
  },
  {
    id: 'r3', t: '11:00', ch: 'llamada', who: null, titulo: 'Llamar a las referencias', banner: 'assets/foto/llamada.webp', lugar: 'Sala pequeña de la sede', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Te encierras en la sala pequeña, la que tiene el aire acondicionado que gotea. Cada proveedor puso referencias; también quieres hablar con alguien de adentro.</p><p>Tu pregunta es siempre la misma: <mark class="clave">«¿Qué cambió después del curso, y cómo lo midieron?»</mark></p>`,
    type: 'calls',
    calls: [['Jefa de RR.HH. · cooperativa de Chiclayo · cliente de Capacita Pro', 'Contesta, muy amable', '«Ronald es un encanto. El cierre de gala fue lindísimo, todavía tenemos las fotos. ¿Qué cambió? Mmm… la gente quedó muy motivada. Medir, no medimos nada después de la encuesta.»'], ['Gerente de agencia · Edpyme de Cajamarca · cliente de CEFIN Norte', 'Contesta desde una agencia', '«Los instructores son ex asesores y usan casos de nuestra cartera. A los dos meses la mora de los nuevos bajó. Eso sí: ese mismo mes cambiamos la meta de colocación, así que no sé cuánto fue el curso.»'], ['Don Aurelio Gamboa · asesor con 11 años · El Porvenir', 'Contesta en la calle, con tráfico de fondo', '«¿Enseñar yo? Si me dan el tiempo y no me bajan la meta, sí. Pero no me hagan hablar con diapositivas: yo enseño en la calle, al lado del cliente.»']],
    prompt: 'Escuchaste las tres llamadas. ¿Qué concluyes?',
    choices: [
      { id: 'a', label: 'Ninguna referencia prueba resultados por sí sola. Lo más sólido es combinar el contenido técnico de CEFIN con práctica de campo dictada por asesores expertos, y medirlo nosotros.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 2 }, flags: ['referencias_criticas'], cartera: { internos: 'Don Aurelio dispuesto, si le dan tiempo' },
          out: 'Anotas en tu matriz: «Capacita Pro: satisfacción, sin datos. CEFIN: buen diseño, resultado confundido con el cambio de meta. Don Aurelio: enseña en campo». Ninguno gana solo.',
          pro: { ok: 'Lees las referencias con el mismo rigor que la propuesta: qué cambió y qué más pudo causarlo.', info: 'Lo de Cajamarca es una lección para tu propia medición: si la meta cambia al mismo tiempo, no sabrás qué funcionó.' },
          kusi: ['feliz', 'Escuchaste lo que dijeron… y lo que no.'] } },
      { id: 'b', label: 'Capacita Pro tiene la referencia más entusiasta: es la opción más segura.',
        res: { q: 'riesgosa', fx: { calidad: -4 }, cartera: { proveedor: 'Favorito por referencias de satisfacción' },
          out: 'Subrayas «lindísimo» en tu libreta. Pero esa referencia no te dijo una sola cosa que cambiara en el trabajo de nadie.',
          pro: { ok: 'Las referencias importan.', risk: 'El entusiasmo de un cliente mide la experiencia, no el resultado.' },
          kusi: ['pensando', '¿«Lindísimo» baja la mora?'] } },
      { id: 'c', label: 'CEFIN demostró resultados en Cajamarca: contratarlo para todo.',
        res: { q: 'aceptable', fx: { calidad: 2 }, cartera: { cefin: 'Favorito, con resultado dudoso' },
          out: 'CEFIN es la mejor opción técnica, pero el dato de Cajamarca tiene una trampa: la meta cambió el mismo mes. Y dejas fuera a Don Aurelio y a Sandra.',
          pro: { ok: 'Eliges al proveedor que más se acerca a tu diagnóstico.', risk: 'Un resultado que coincide con otro cambio no prueba que el curso lo causó.' },
          kusi: ['curioso', 'Bajó la mora… ¿por el curso o por la meta?'] } },
    ],
    rules: [[BP, 'Pregunta a las referencias qué cambió y cómo lo midieron, no si les gustó.']],
    mirada: {
      ve: 'Llamar a las referencias es un paso que muchos se saltan. Las preguntas buenas no son «¿les gustó?», sino «¿qué cambió?» y «¿qué más cambió al mismo tiempo?». Esa segunda pregunta te salvará cuando te toque medir tu propio taller.',
      visual: { tipo: 'embudo', titulo: 'Lo que probó cada referencia', niveles: [['Les gustó', 3], ['Aprendieron', 2], ['Lo aplicaron', 1], ['Bajó la mora por el curso', 0]] },
    },
  },
  {
    id: 'r4', t: '12:30', ch: 'documento', who: null, titulo: 'La matriz de evaluación', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio, con un sánguche de chicharrón', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Almuerzas en el escritorio un sánguche de chicharrón con camote que compraste en la esquina. En el Excel, la pestaña se llama «Hoja3 (2)»; la renombras «Matriz proveedores».${F.has('diagnostico_cursos') ? ' Tu diagnóstico de ayer quedó flojo; tendrás que apoyarte en lo que viste hoy.' : ''}</p><p>Lorena la llevará mañana a Finanzas. <mark class="clave">Cada fila tiene que sostenerse sola</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la matriz.', boton: 'Guardar la matriz',
    bloques: [
      { id: 'criterios', t: 'Criterios de evaluación', n: 3, ops: [
        { id: 'c1', t: 'Responde a las brechas del diagnóstico: evaluar con el negocio a la vista y cobrar negociando.', ok: true, por: 'El criterio que más pesa.' },
        { id: 'c2', t: 'Mide aprendizaje y aplicación, no solo satisfacción.', ok: true, por: 'Sin esto, no podrás demostrar nada en el capítulo de los resultados.' },
        { id: 'c3', t: 'Costo por participante.', ok: true, por: 'Capacita Pro: S/ 1,200 por gerente. CEFIN: S/ 200 por asesor.' },
        { id: 'c4', t: 'Prestigio de la marca y certificado internacional.', ok: false, por: 'No dice nada sobre si se aprenderá a evaluar o a cobrar.' },
      ] },
      { id: 'decision', t: 'Recomendación', n: 1, ops: [
        { id: 'd1', t: 'Combinar: CEFIN Norte para el contenido técnico (S/ 12,000) y Sandra y Don Aurelio como facilitadores de campo, con horas protegidas.', ok: true, por: 'Responde al diagnóstico, cuesta una fracción y usa a quien ya sabe hacerlo.' },
        { id: 'd2', t: 'Capacita Pro: ocho sesiones para gerentes (S/ 43,200).', ok: false, por: 'Es el programa más caro y apunta al público equivocado.' },
        { id: 'd3', t: 'Todo interno, sin pagar nada: que Sandra dicte los 12 talleres.', ok: false, por: 'Sin preparación ni horas, la facilitadora interna se quema.' },
      ] },
      { id: 'condiciones', t: 'Condiciones de compra', n: 2, ops: [
        { id: 'k1', t: 'Pago en dos partes: 50 % al inicio y 50 % contra el informe de la prueba de salida.', ok: true, por: 'Ata el pago a lo que importa.' },
        { id: 'k2', t: 'Tres cotizaciones adjuntas, como pide la política de compras.', ok: true, por: 'Compras de más de S/ 10,000 necesitan tres cotizaciones.' },
        { id: 'k3', t: 'Pago adelantado completo para asegurar la fecha.', ok: false, por: 'Pierdes cómo exigir lo prometido.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'proveedor_ronald' : 'proveedor_mixto'],
        cartera: { matriz: q === 'riesgosa' ? 'Matriz sin criterio claro' : 'Lista: 3 criterios, 3 cotizaciones', cefin: q === 'riesgosa' ? 'Descartado' : 'Recomendado, pago en dos partes' },
        out: q === 'buena' ? 'Lorena lee la matriz con un plumón en la mano y no subraya nada. «Esto lo puedo defender frente a Finanzas. Y frente al gerente general, que es amigo de Ronald.»' : q === 'aceptable' ? 'Lorena la revisa: «Bien, pero ajusta las condiciones de pago. Finanzas va a preguntar qué pasa si no cumplen».' : 'Lorena frunce el ceño: «Si mandamos esto, Finanzas nos corta lo más caro primero. Y lo más caro es esto».',
        pro: { ok: 'Una matriz con criterios ligados al diagnóstico convierte una preferencia en una decisión que se puede explicar.', risk: 'Elegir por prestigio es la forma más cara de equivocarse.', info: 'El costo por participante es la cifra que Finanzas entiende primero.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Matriz a prueba de Finanzas!' : '¿Esa fila resiste una pregunta?'],
      };
    },
    rules: [[POL, 'En Chimú, las compras de capacitación mayores a S/ 10,000 requieren tres cotizaciones.'], [BP, 'Ata parte del pago a la evidencia de aprendizaje.']],
    mirada: {
      ve: 'La matriz de evaluación de proveedores es lo que permite decir que no a un proveedor encantador sin que parezca personal. Criterios definidos antes de mirar las propuestas, pesos claros y condiciones que protegen a la empresa.',
      visual: { tipo: 'matriz', x: 'Responde al diagnóstico', y: 'Costo por participante', cuadrantes: ['Caro y no responde', 'Caro pero responde', 'Barato y no responde', 'Barato y responde'], items: [['Capacita Pro', .2, .85], ['CEFIN Norte', .8, .3], ['Facilitadores internos', .75, .1]] },
    },
  },
  {
    id: 'r5', t: '14:30', ch: 'correo', who: null, titulo: 'El paquete de SST', banner: 'assets/3d/scenes/oficina.webp', show: ['cumplimiento', 'personas', 'tiempo'],
    mail: { from: 'Ronald Mejía · Capacita Pro', to: 'Analista de Capacitación y Desarrollo', asunto: 'Paquete SST · se puede contratar aparte' },
    body: (n, F) => `<p>Estimada: si el programa de liderazgo no entra este año, les dejo el paquete de SST por separado: cuatro charlas grabadas de 45 minutos, con certificado. <mark class="clave">Cada trabajador las ve cuando quiera desde su celular</mark>. S/ 6,000 + IGV. Así cumplen con las cuatro del año.</p><p>Ronald</p>${F.has('plan_leido') ? '<p>Recuerdas lo del lunes: este año no hubo ninguna capacitación de SST.</p>' : ''}`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder que les interesa, pero solo si las charlas se programan dentro de la jornada, por agencia, con registro de asistencia y una prueba corta.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 2, calidad: 2 }, flags: ['sst_jornada'], cartera: { sst: 'Paquete en evaluación, dentro de la jornada' },
          responde: 'Ronald, gracias. Nos interesa, con una condición: las charlas deben verse dentro de la jornada, programadas por agencia, con registro de asistencia y una evaluación corta al final. ¿Pueden ajustar la propuesta así? También la pasaremos por el comité de SST.',
          out: 'Ronald responde en una hora: «Se puede. Les mandamos un cronograma por agencia y la prueba en línea». El precio no cambia.',
          pro: { ok: 'La modalidad virtual sirve si se respeta la jornada y queda evidencia.', info: 'El comité de SST debería opinar sobre los temas: no es lo mismo una agencia que la sede.' },
          kusi: ['celebra', 'Virtual sí, pero en horario y con registro. ¡Bien!'] } },
      { id: 'b', label: 'Aceptarlo tal cual: es barato, resuelve las cuatro capacitaciones y nadie pierde horas de trabajo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, personas: -2, tiempo: 2 }, flags: ['sst_grabado'], cartera: { sst: '4 videos «cuando quieran»' },
          responde: 'Ronald, perfecto. Envíanos la orden para el paquete de SST tal como está.',
          out: 'En diciembre tendrás 600 certificados descargados. Nadie sabrá quién vio los videos, a qué hora ni si entendió algo.',
          pro: { ok: 'Resuelves rápido y barato.', risk: 'Si se ven fuera de la jornada, no cumple el reglamento. Y un certificado descargado no prueba que alguien aprendió.' },
          kusi: ['preocupado', '¿Cuatro videos en el celular, a las 11 de la noche?'] } },
      { id: 'c', label: 'Rechazarlo: las de SST las hará el área con el comité de SST, sin proveedor.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, tiempo: -3 }, cartera: { sst: 'Se harán internamente, sin fecha' },
          responde: 'Ronald, gracias, pero las capacitaciones de SST las organizaremos internamente con nuestro comité.',
          out: 'Te quedas con la responsabilidad de cuatro capacitaciones en lo que queda del año, sin proveedor y con 40 agencias. Lorena levanta las cejas cuando se lo cuentas.',
          pro: { ok: 'Puede ser una buena opción si el comité tiene tiempo y conocimiento.', risk: 'Rechazar sin un plan alternativo con fechas te deja con el incumplimiento encima.' },
          kusi: ['pensando', '¿Y quién las dicta, y cuándo?'] } },
    ],
    rules: [[LEY, 'Ley 29783, art. 35 b): no menos de cuatro capacitaciones de SST al año.'], [LEY, 'D.S. 005-2012-TR, art. 28: dentro de la jornada, en cualquier modalidad, directamente o mediante terceros.']],
    mirada: {
      ve: 'La capacitación virtual no está prohibida: lo que la ley pide es que ocurra dentro de la jornada. La diferencia entre cumplir y «tener certificados» está en el horario, el registro y la evaluación.',
      visual: { tipo: 'balanza', a: { t: 'Cumplir en papel', items: ['Videos cuando quieran', 'Certificado descargado', 'Sin registro de horario'] }, b: { t: 'Cumplir de verdad', items: ['Programado en la jornada', 'Registro de asistencia', 'Prueba corta', 'Opinión del comité de SST'] } },
    },
  },
  {
    id: 'r6', t: '16:20', ch: 'presencial', who: 'sandra', titulo: 'Pedirle a Sandra', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Videollamada con la agencia de La Esperanza', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => `<p>Sandra contesta desde la agencia, con un vaso de chicha morada y su cuaderno de cobranza abierto. Mientras conectas, un asesor de la sede te interrumpe: necesita una constancia de capacitación «para ayer», para postular a una beca. Le dices que a las cinco.</p><p>Quieres que Sandra sea facilitadora del taller del viernes${F.has('victor_jueves') ? ', que ya tiene fecha' : ''}. <mark class="clave">Antes de pedirle nada, quieres entender qué le preocupa</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Sandra.',
    opts: [
      { id: 'meta', label: '¿Qué te preocupa de dejar la calle unas horas?', info: '«La meta, pues. Si me salgo tres horas, son tres visitas menos. Y si no llego, no hay bono, y el bono es casi la mitad de lo que gano.»' },
      { id: 'miedo', label: '¿Has enseñado alguna vez a un grupo?', info: '«A uno por uno sí, a los nuevos que me mandan. A veinte juntos, nunca. Me da miedo quedarme en blanco con el proyector.»' },
      { id: 'como', label: '¿Cómo enseñarías tú lo de cobrar?', info: '«Con casos. Les contaría lo de la señora del mercado y les haría practicar la llamada entre ellos. Nada de diapositivas con frases bonitas.»' },
      { id: 'gana', label: '¿Qué ganarías tú con esto?', info: '«No sé… que me reconozcan, creo. Llevo cuatro años y nadie de la sede sabía mi nombre hasta el lunes.»' },
    ],
    res: picks => {
      const cubre = picks.includes('meta');
      return {
        q: null, fx: { personas: cubre ? 4 : 2, confianza: 2 }, rel: { sandra: 1 },
        flags: [cubre ? 'sandra_facilitadora' : 'sandra_dudosa'],
        cartera: { internos: cubre ? 'Sandra acepta: horas protegidas y meta ajustada ese día' : 'Sandra acepta, con dudas sobre su meta' },
        out: cubre ? 'Le propones pedirle a Víctor que ese día su meta se ajuste por las horas del taller. Sandra se queda callada y luego dice: «Si es así, sí me animo».' : 'Sandra dice que sí, pero antes de colgar agrega: «Y lo de mi meta… ¿quién lo ve?». No tienes respuesta todavía.',
        kusi: [cubre ? 'feliz' : 'pensando', cubre ? 'Resolviste lo que de verdad le preocupaba.' : 'Su mayor preocupación quedó en el aire…'],
      };
    },
    rules: [[BP, 'Un facilitador interno necesita tiempo protegido, preparación y reconocimiento; si no, se quema.']],
    mirada: {
      ve: 'Los facilitadores internos son la forma más barata y creíble de enseñar, pero solo funcionan si no pagan de su bolsillo el tiempo que dedican. Para una asesora con bono por meta, tres horas fuera de la calle cuestan dinero.',
      visual: { tipo: 'mensaje', titulo: 'Lo que necesita una facilitadora interna', txt: 'Horas protegidas. La meta ajustada ese día. Ayuda para preparar el taller. Y que alguien diga su nombre en voz alta.' },
    },
  },
  {
    id: 'r7', t: '17:40', ch: 'whatsapp', who: null, titulo: 'Responderle a Ronald', banner: 'assets/esc/decide.webp', lugar: 'Tu escritorio, ya casi sola en el piso', show: ['confianza', 'etica', 'calidad'],
    body: (n, F) => `<p>El piso se va vaciando; alguien apaga el aire acondicionado y se oye la avenida. Firmaste la constancia del asesor y la escaneaste.${F.has('ronald_firmado') ? ' El contrato de Ronald sigue sin la firma de Lorena, y ella no lo firmará hasta ver tu matriz.' : ''}</p><p>Ronald te escribe: «¿Cómo vamos? 😊». <mark class="clave">Le debes una respuesta clara</mark>.</p>`,
    type: 'compose', enviaA: 'ronald', para: 'Para: Ronald Mejía · Capacita Pro', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'decision', t: 'La decisión', ops: [
        { id: 'd1', t: 'Ronald, gracias por tu tiempo. Este año vamos a priorizar a los asesores nuevos, y tu programa está pensado para gerentes, así que no lo vamos a contratar ahora.', ok: true, por: 'Claro, con la razón y sin rodeos.' },
        { id: 'd2', t: 'Ronald, todavía lo estamos viendo, te aviso más adelante.', ok: false, por: 'Alargas una decisión que ya tomaste.' },
      ] },
      { id: 'razon', t: 'Lo que le explicas', ops: [
        { id: 'r1', t: 'Comparamos tres propuestas con los mismos criterios: público, objetivo, medición del aprendizaje y costo por participante.', ok: true, por: 'Le muestras que no es personal.' },
        { id: 'r2', t: 'Lorena prefirió otra opción.', ok: false, por: 'Le pasas la responsabilidad a tu jefa.' },
      ] },
      { id: 'puerta', t: 'Cómo cierras', ops: [
        { id: 'p1', t: 'Si más adelante trabajamos con gerentes, me encantaría ver una propuesta con indicadores de aplicación en el trabajo.', ok: true, por: 'Dejas una puerta abierta con una condición clara.' },
        { id: 'p2', t: 'Igual sigamos en contacto para un cafecito 😊', ok: false, por: 'Ambiguo: puede sonar a que todavía hay algo en juego.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, etica: q === 'buena' ? 2 : 0 }, rel: { ronald: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['ronald_puerta'] : [],
        cartera: { proveedor: q === 'riesgosa' ? 'Sin respuesta clara' : 'Descartado este año, con puerta abierta' },
        out: q === 'buena' ? 'Ronald demora diez minutos: «Entiendo. Pocas veces me explican por qué. Lo tomo para mejorar la propuesta». Te sorprende su respuesta.' : q === 'aceptable' ? 'Ronald responde: «Ok… ¿pero entonces hay chance o no?». Tendrás que volver a escribirle.' : 'Ronald responde: «¡Perfecto! El lunes te llamo para cerrar». No entendió nada.',
        pro: { ok: 'Decir que no con la razón y los criterios cuida la relación y tu credibilidad.', risk: 'Un «te aviso» eterno es un no que el proveedor no escucha.', info: 'Guarda la matriz: si Ronald pregunta, la razón está por escrito.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Un no claro también es respeto. ¡Qué divino!' : 'Un no a medias no es un no.'],
      };
    },
    rules: [[BP, 'Comunica la decisión a los proveedores no elegidos, con los criterios y sin rodeos.']],
    mirada: {
      ve: 'Rechazar a un proveedor es parte del trabajo. Hacerlo con criterios claros protege la relación, porque el proveedor entiende qué mejorar, y te protege a ti, porque la decisión no depende de simpatías.',
      visual: { tipo: 'linea', titulo: 'Cómo se elige un proveedor', hitos: [['Diagnóstico', 'Qué necesitamos'], ['Criterios', 'Antes de ver propuestas'], ['Referencias', 'Qué cambió y cómo se midió'], ['Matriz', 'Tres cotizaciones'], ['Decisión', 'Comunicada con razones']] },
    },
  },
];
