// Practicante de RR.HH. · Capítulo 7 · «La auditoría» · Semana 3, viernes.
// Hilo del mes: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias.
// La auditoría social es privada (la encarga el comprador); no es una inspección de SUNAFIL.
// Normas citadas:
// - Ley 29783, de Seguridad y Salud en el Trabajo, art. 29: los empleadores con veinte o más trabajadores constituyen un Comité de SST.
//   https://www.sunat.gob.pe/legislacion/superAdjunta/rsnaaf/2017/rsnaaf-033-2017.pdf
//   https://www.sni.org.pe/wp-content/uploads/2019/12/Recordatorio-sobre-Seguridad-y-Salud-en-el-Trabajo.pdf
// - D.S. 005-2012-TR: registros obligatorios del sistema de gestión de SST (formatos de la R.M. 050-2013-TR).
//   https://modelo.pe/registro-de-induccion-capacitacion-y-entrega-de-epp/
// - D.S. 007-2002-TR: el sobretiempo es voluntario (art. 9) y se paga con sobretasa (art. 10).
//   https://modelo.pe/acuerdo-de-realizacion-de-trabajo-en-sobretiempo-horas-extras/
// - Ley 29733, de Protección de Datos Personales (datos de salud como datos sensibles). Texto en SPIJ: https://spij.minjus.gob.pe/

export const CAP = {
  n: 7, titulo: 'La auditoría', dia: 'Semana 3, viernes', foto: 'assets/3d/scenes/balanza.webp',
  lugar: 'Hilandería Andina · Sala de reuniones',
  inicio: '07:15', fin: '20:00', cierreHora: '19:20',
  apertura: 'Viernes. A las 8:30 llegan dos auditoras enviadas por la tienda de Hamburgo. Lo que encuentren decide si el pedido sigue.', boton: 'Abrir la carpeta de evidencias',
  kusi: 'Hoy se ve todo lo que hiciste este mes. Lo bueno y lo que falta. ¡Con la verdad!',
  lead: 'Elegiste qué evidencias preparar, limpiaste una carpeta que tenía trampas, protegiste las entrevistas, mostraste legajos sin exponer a nadie y respondiste a un hallazgo sin esconderlo.',
  reflexion: '¿Qué decisión de semanas anteriores apareció hoy en la auditoría?',
  siguiente: { n: 8, titulo: 'Tu propuesta', dia: 'Semana 4, martes' },
};

export const CARTERA = [
  { id: 'auditoria', p: 'Auditoría social de Hamburgo', j: 'Carla · Gerencia', d: 0, e: 'Hoy, 8:30 a 17:00' },
  { id: 'evidencias', p: 'Carpeta de evidencias', j: 'Carla · RR.HH.', d: 0, e: 'Por revisar' },
  { id: 'entrevistas', p: 'Entrevistas a trabajadoras', j: 'Auditoras', d: 0, e: '10:00, sala 2' },
  { id: 'legajos', p: 'Muestreo de legajos', j: 'Carla · RR.HH.', d: 0, e: '5 legajos al azar' },
  { id: 'rosa', p: 'El caso de Rosa', j: 'Carla · Don Teófilo', d: 0, e: 'Cambio de turno desde el lunes' },
];

export const FUTURO = {
  evidencias_clave: ['Preparaste primero las evidencias que la auditoría iba a pedir.', 'Carla te pedirá que tu propuesta se apoye en datos. Capítulo 8.'],
  carpeta_limpia: ['Sacaste de la carpeta lo que exponía datos o maquillaba registros.', 'Gerencia confía en tu criterio. Capítulo 8.'],
  carpeta_maquillada: ['La carpeta llegó con registros rehechos y certificados médicos.', 'Las auditoras lo anotaron. Capítulo 8.'],
  entrevistas_libres: ['Las entrevistas fueron al azar, en privado y sin supervisores.', 'Lo que dijeron las trabajadoras será la base de tu propuesta. Capítulo 8.'],
  entrevistas_preparadas: ['Las entrevistas se hicieron con trabajadoras elegidas o aleccionadas.', 'Las auditoras desconfiaron. Capítulo 8.'],
  legajos_protegidos: ['Mostraste los legajos sin entregar copias ni datos de salud.', 'Capítulo 8.'],
  hallazgo_asumido: ['Ante un hallazgo, mostraste qué se corrigió y qué falta, con fechas.', 'La tienda acepta un plan de mejora. Capítulo 9.'],
  hallazgo_negado: ['Ante un hallazgo, dijiste que era un caso aislado.', 'La tienda pidió una segunda auditoría. Capítulo 9.'],
  evidencia_real: ['Sustentaste las horas extra con documentos reales, aunque incompletos.', 'Capítulo 9.'],
  evidencia_fabricada: ['Firmaste un acuerdo de horas extra con fecha atrasada.', 'Capítulo 9.'],
  marleni_honesta: ['Le dijiste la verdad a Marleni.', 'Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria · tejido', who: 'rosa' },
  justina: { n: 'Sra. Justina Mamani', sub: 'Supervisora de urdido · turno día', c: '#9C6B30' },
};

export const WSP = [
  { chat: 'grupo', t: '07:20', de: 'Carla', txt: 'Hoy es el día. Pase lo que pase, decimos la verdad. Si no sabemos algo, decimos «lo verificamos» 🙏' },
  { chat: 'diego', t: '07:40', de: 'Diego', txt: 'Ya dejé en la carpeta las boletas de las horas extra con la sobretasa corregida. Suerte 🍀' },
  { chat: 'teofilo', t: '09:30', de: 'Don Teófilo', txt: 'Señorita, ¿las auditoras van a hablar con mi gente sin mí? ¿Y si dicen cualquier cosa?' },
  { chat: 'rosa', t: '11:50', de: 'Rosa', txt: 'Señorita, me escogieron para la entrevista. Les dije la verdad, lo de mi hijo y lo del cambio de turno. ¿Hice mal? 😟', si: 'rosa_escuchada' },
  { chat: 'justina', t: '13:40', de: 'Justina', txt: 'Hijita, la Faustina le contó a la señora alemana que sus horas sí se pagaron. Estaba orgullosa.', si: 'faustina_pagada' },
  { chat: 'carla', t: '18:30', de: 'Carla', txt: 'Hoy demostraste que el trabajo de todo el mes sirve. Gracias. El martes te pido algo importante.' },
];

export const CORREOS = [
  { t: '07:25', de: 'Gerencia de Planta', para: 'RR.HH.; Producción', asunto: 'Auditoría social · agenda', html: '<p>8:30 reunión de apertura · 9:00 revisión documental · 10:00 entrevistas a trabajadoras · 13:00 recorrido · 16:30 reunión de cierre.</p><p>Las auditoras pidieron que las entrevistas sean privadas y sin presencia de supervisores.</p>' },
  { t: '17:30', de: 'Equipo auditor', para: 'Gerencia de Planta', asunto: 'Resumen preliminar', html: '<p>Agradecemos la transparencia del equipo. Los hallazgos y el plan de acción se enviarán en diez días hábiles.</p>', si: 'hallazgo_asumido' },
  { t: '17:30', de: 'Equipo auditor', para: 'Gerencia de Planta', asunto: 'Resumen preliminar', html: '<p>Se identificaron hallazgos que requieren verificación adicional. Se recomendará una segunda visita.</p>', si: 'hallazgo_negado' },
];

export const QUIZ = [
  { q: '¿Desde cuántos trabajadores la Ley 29783 exige un Comité de Seguridad y Salud en el Trabajo?', ops: ['Desde 5', 'Desde 20', 'Desde 100', 'Nunca es obligatorio'], ok: 1, por: 'El artículo 29 de la Ley 29783 obliga a constituir el comité a los empleadores con veinte o más trabajadores.' },
  { q: 'La auditora pide ver un legajo. ¿Qué haces con el sobre de documentos médicos?', ops: ['Se lo entregas también', 'Lo retiras y lo muestras solo si hay una razón y una autorización', 'Lo rompes', 'Le das una copia'], ok: 1, por: 'Los datos de salud son sensibles: no se muestran por rutina ni se entregan copias.' },
  { q: 'Producción quiere elegir a las trabajadoras que serán entrevistadas. ¿Qué corresponde?', ops: ['Aceptar: conocen a su gente', 'Que se elijan al azar y se entreviste en privado, sin supervisores', 'Preparar lo que deben decir', 'Que el jefe esté presente'], ok: 1, por: 'Una entrevista elegida o vigilada no prueba nada y hace desconfiar al auditor.' },
  { q: 'Falta un acuerdo de horas extra firmado. Alguien propone firmarlo hoy con fecha de hace un mes. ¿Qué haces?', ops: ['Lo firmas: así se completa la carpeta', 'No lo haces y presentas las evidencias reales que sí existen', 'Lo firma otra persona', 'Lo escaneas para que no se note'], ok: 1, por: 'Un documento con fecha falsa es más grave que un documento faltante.' },
  { q: 'La auditora encuentra un problema. ¿Cuál es la mejor respuesta?', ops: ['Negarlo', 'Reconocerlo y mostrar qué se corrigió o qué se corregirá, con fechas', 'Culpar a otra área', 'Pedirle que no lo anote'], ok: 1, por: 'Un hallazgo reconocido con un plan de acción genera más confianza que una negación.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:30', ch: 'presencial', who: 'carla', titulo: 'Una hora antes', banner: 'assets/3d/scenes/planta.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Carla llegó a las seis. Tiene la blusa planchada y la mirada de quien no durmió. «La auditoría la contrata la tienda. No es SUNAFIL, pero si sale mal, no hay pedido. Y sin pedido, las 40 nuevas sobran.»</p>${F.has('error_asumido') ? '<p>«Por eso te pedí que me ayudes tú. Sé que me dices las cosas como son.»</p>' : ''}<p>Hay seis cajas posibles. <mark class="clave">Solo hay tiempo para preparar bien tres</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres evidencias que prepararás primero.', boton: 'Preparar estas tres', resumen: 'Preparaste',
    cols: ['Evidencia', 'Qué demuestra'],
    rows: [
      { id: 'jornada', cells: ['Asistencia, horas extra y boletas de octubre', 'Que nadie trabaja horas sin pagar ni de más'] },
      { id: 'contratos', cells: ['Contratos y altas en T-Registro de las 40 nuevas', 'Que todas tienen contrato y seguro desde el día uno'] },
      { id: 'sst', cells: ['Comité de SST, registros de capacitación y de equipo de protección', 'Que la planta cuida la seguridad'] },
      { id: 'fotos', cells: ['Fotos del comedor recién pintado', 'Que la planta se ve bonita'] },
      { id: 'premios', cells: ['Diplomas y premios de calidad de la empresa', 'Que la empresa es reconocida'] },
      { id: 'medicos', cells: ['Certificados médicos completos de las 40 nuevas', 'Que pasaron el examen'] },
    ],
    score: { jornada: 3, contratos: 3, sst: 3, fotos: 0, premios: 0, medicos: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, cumplimiento: picks.includes('medicos') ? -4 : 2, tiempo: q === 'buena' ? 2 : -2 },
        flags: q === 'buena' ? ['evidencias_clave'] : [], cartera: { evidencias: q === 'buena' ? 'Jornada, contratos y SST listos' : 'Carpeta incompleta' },
        out: q === 'buena' ? 'A las 8:25 tienes tres cajas con separadores de colores. Carla las mira y respira por primera vez en el día.' : picks.includes('medicos') ? 'Preparas los certificados médicos completos. Carla los ve y se pone pálida: «Eso no se muestra así».' : 'Las fotos y los diplomas quedan lindos. Las boletas de horas extra siguen en tres carpetas distintas.',
        pro: { ok: 'Una auditoría social pregunta por personas: jornada, pago, contratos y seguridad.', risk: 'Lo decorativo no reemplaza un registro. Y lo médico no se muestra completo.', info: 'Para el examen médico basta un registro de aptitud, sin diagnósticos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Lo que importa, primero!' : '¿Qué iban a preguntar las auditoras?'],
      };
    },
    rules: [[LEY, 'Los empleadores con veinte o más trabajadores constituyen un Comité de SST (Ley 29783, art. 29).'], [BP, 'En una auditoría social, prioriza las evidencias sobre jornada, pago, contratos y seguridad.']],
    mirada: {
      ve: 'Una auditoría social no mira si la planta es bonita: mira si las personas trabajan con contrato, seguro, horas pagadas y seguridad. Preparar bien tres temas centrales vale más que mostrar diez cosas decorativas. Y lo médico se cuida incluso ante el cliente.',
      visual: { tipo: 'embudo', titulo: 'Lo que suele revisar una auditoría social', niveles: [['Temas posibles', 10], ['Temas sobre personas', 6], ['Los que más pesan', 3]] },
      normas: [{ ley: 'Ley 29783, artículo 29', dice: 'Los empleadores con veinte o más trabajadores a su cargo constituyen un Comité de Seguridad y Salud en el Trabajo.', practica: 'Con 320 trabajadores, la planta debe tener comité, actas y representantes elegidos por los trabajadores.' }],
    },
  },
  {
    id: 'g2', t: '08:10', ch: 'documento', who: null, titulo: 'La carpeta de Gerencia', banner: 'assets/foto/revisa.webp', show: ['etica', 'cumplimiento', 'calidad'],
    body: () => `<p>La asistente de Gerencia te entrega una carpeta que armó anoche «para ayudar». Tiene un post-it: «Revísala rápido, las auditoras llegan en 20 minutos».</p><p>Pasas las hojas con el corazón acelerado. <mark class="clave">Hay cosas que no deberían estar</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que debe salir de la carpeta o corregirse antes de mostrarla.',
    doc: { t: 'Carpeta de evidencias · Auditoría social', sub: 'Preparada por: Asistencia de Gerencia' },
    lines: [
      { id: 'acta', t: 'Acta de instalación del Comité de SST y actas de sus últimas reuniones.' },
      { id: 'contratos', t: 'Contratos firmados y constancias de alta en T-Registro de las 40 nuevas.' },
      { id: 'rehecho', t: 'Registro de asistencia de octubre, «pasado en limpio» anoche.', bad: LEY, why: 'Un registro rehecho no es el original. Si no coincide con el reloj, parece maquillado. Se muestra el registro real.' },
      { id: 'medicos', t: 'Certificados médicos con diagnósticos de las 40 nuevas.', bad: LEY, why: 'Son datos sensibles. Para demostrar el examen basta un registro de aptitud, sin diagnósticos.' },
      { id: 'dj', t: 'Declaración jurada de la Gerencia: «En esta planta no hay horas extra obligatorias».', bad: BP, why: 'Una declaración no prueba nada. Lo que prueba es la asistencia, las boletas y que el sobretiempo sea voluntario.' },
      { id: 'boletas', t: 'Boletas de octubre con la sobretasa de horas extra corregida.' },
      { id: 'aviso', t: 'Avisos de empleo de las dos convocatorias.', duda: 'Se muestran tal como se publicaron. Si alguno tenía requisitos discriminatorios, hay que contar qué se corrigió.' },
      { id: 'fotos', t: 'Fotos del comedor recién pintado.', duda: 'No hacen daño, pero no son evidencia de nada importante.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'La carpeta llega a la mesa tal como estaba. A las 9:20, la auditora compara el registro «en limpio» con el reloj y levanta la vista.' : 'Sacas el registro rehecho y pones el original, retiras los certificados médicos y cambias la declaración jurada por las boletas. La asistente se molesta: «Yo solo quería ayudar». Carla le explica por qué.',
      flags: [missLey ? 'carpeta_maquillada' : 'carpeta_limpia'], cartera: { evidencias: missLey ? 'Carpeta con registros rehechos' : 'Carpeta con originales' },
      rel: { carla: missLey ? 0 : 1 },
      pro: { ok: 'Una carpeta con originales imperfectos resiste más que una carpeta perfecta y rehecha.', risk: 'Maquillar un registro convierte un problema pequeño en una sospecha grande.', info: 'Si un registro tiene un error, muéstralo con la nota de corrección: es evidencia de control.' },
      kusi: missLey ? ['preocupado', 'Ese registro «en limpio» se va a notar…'] : ['celebra', 'Originales y verdad. ¡Bacán!'],
    }),
    rules: [[LEY, 'Los datos de salud son sensibles y no se exhiben por rutina (Ley 29733).'], [BP, 'Muestra originales. Una evidencia rehecha vale menos que una imperfecta.']],
    mirada: {
      ve: 'Ante una auditoría, la tentación es maquillar: pasar en limpio, declarar, adornar. Pero los auditores buscan justamente la coherencia entre papeles. Una carpeta honesta, con errores corregidos y documentados, demuestra algo más valioso que la perfección: que la empresa se controla a sí misma.',
      visual: { tipo: 'cambio', titulo: 'La carpeta, corregida', pares: [['Asistencia «en limpio»', 'Registro original del reloj, con notas'], ['Certificados con diagnósticos', 'Registro de aptitud sin diagnósticos'], ['Declaración jurada', 'Boletas con horas extra pagadas']] },
    },
  },
  {
    id: 'g3', t: '09:50', ch: 'presencial', who: 'teofilo', titulo: 'Las entrevistas', banner: 'assets/foto/entrevista.webp', lugar: 'Pasillo de la sala 2', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>La auditora Katrin Weber y su colega peruana, la licenciada Mónica Salas, quieren entrevistar a diez trabajadoras a solas. Don Teófilo te para en el pasillo con una lista escrita a mano.</p><p>«Señorita, yo le digo quiénes. Las que saben hablar. ${F.has('teofilo_aliado') ? 'Usted ya me conoce: no quiero hacer quedar mal a nadie.' : 'No vaya a ser que hablen tonterías.'}» <mark class="clave">La lista no tiene a ninguna nueva</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que la elección será al azar desde la planilla, en privado y sin supervisores, y que eso también lo protege a él.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, personas: 2 }, rel: { teofilo: 0 }, flags: ['entrevistas_libres'], cartera: { entrevistas: '10 al azar, sala 2, sin supervisores' },
          out: 'Don Teófilo guarda su lista, incómodo. La licenciada Salas sortea diez nombres de la planilla delante de ti. Salen Rosa, Faustina, Yesenia, Javier y seis más.',
          pro: { ok: 'Proteges la credibilidad de la auditoría y la libertad de las trabajadoras.', risk: 'Don Teófilo teme lo que puedan decir. Explícale que una queja escuchada hoy es un problema que se puede resolver.', info: 'Ofrécele recibir él también los resultados generales, sin nombres.' },
          kusi: ['animo', 'Al azar y sin miedo. ¡Así sí vale!'] } },
      { id: 'b', label: 'Aceptar su lista: conoce a su gente y no quieres otro conflicto con él hoy.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4 }, rel: { teofilo: 1 }, flags: ['entrevistas_preparadas'],
          out: 'La licenciada Salas mira la lista: diez antiguas, todas de confianza de Producción. «¿Quién eligió a estas personas?», pregunta. Nadie responde.',
          pro: { ok: 'Evitas el choque con Don Teófilo.', risk: 'Una muestra elegida por el jefe hace que los auditores desconfíen de todo lo demás.' },
          kusi: ['preocupado', 'Las auditoras se dieron cuenta…'] } },
      { id: 'c', label: 'Hacer el sorteo, pero pasar antes por la línea a recordarles a las elegidas «lo bueno de la empresa».',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -2 }, flags: ['entrevistas_preparadas'],
          out: 'Tres de las entrevistadas repiten la misma frase: «Aquí todo es muy bonito». La licenciada Salas anota algo y subraya dos veces.',
          pro: { ok: 'El sorteo fue real.', risk: 'Aleccionar a quien será entrevistada anula el valor del sorteo.' },
          kusi: ['sorpresa', '¿Todas dijeron lo mismo?'] } },
    ],
    rules: [[BP, 'En una auditoría social, las entrevistas a trabajadores se eligen al azar y se hacen en privado, sin supervisores.']],
    mirada: {
      ve: 'Las entrevistas son el corazón de una auditoría social: es la voz de quienes trabajan. Si la empresa elige o prepara a quién se escucha, los auditores dejan de creer en el resto. Proteger esa voz, incluso cuando incomoda, es proteger a la empresa.',
      visual: { tipo: 'balanza', a: { t: 'La lista de Don Teófilo', items: ['Diez antiguas de confianza', 'Respuestas previsibles'] }, b: { t: 'Sorteo y privacidad', items: ['Nuevas y antiguas', 'Respuestas creíbles', 'Problemas que se pueden corregir'] } },
    },
  },
  {
    id: 'g4', t: '11:00', ch: 'sistema', who: null, titulo: 'Cinco legajos al azar', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Archivo de RR.HH.', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>La auditora Weber elige cinco nombres de la planilla para revisar sus legajos. Uno es Yesenia Condori, caja 14.${F.has('plan_legajos') ? ' Tu plan sigue pegado en la puerta del archivo.' : ''}</p><p>Sabes que mostrar un legajo también tiene <mark class="clave">un orden</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para mostrar un legajo a la auditora sin exponer datos. Usa las flechas.', boton: 'Mostrar los legajos así',
    items: [
      { id: 'anota', t: 'Anotar en el cuaderno de préstamo qué legajo sale y para qué', por: 'Queda registro de quién vio qué.' },
      { id: 'saca', t: 'Sacar el legajo del archivo', por: 'Solo los cinco pedidos.' },
      { id: 'sobre', t: 'Retirar el sobre de documentos médicos', por: 'Lo médico no forma parte de la revisión de rutina.' },
      { id: 'muestra', t: 'Mostrarlo en la oficina, sin dejar sacar copias ni fotos', por: 'Se revisa, no se lleva.' },
      { id: 'registra', t: 'Anotar qué documentos revisó la auditora', por: 'Sabrás qué preguntar después.' },
      { id: 'devuelve', t: 'Devolver el legajo completo y cerrar el préstamo', por: 'Con el sobre médico otra vez adentro.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['legajos_protegidos'] : [], cartera: { legajos: '5 legajos revisados' },
        out: q === 'buena' ? 'La auditora Weber revisa los cinco legajos en tu oficina. Al ver el sobre médico separado y el cuaderno de préstamo, anota algo y te dice en un español con acento: «Muy bien, esto no lo veo seguido».' : 'Muestras los legajos, pero en desorden: un sobre médico queda sobre la mesa mientras la auditora revisa otro legajo.',
        pro: { ok: 'Puedes ser transparente con un auditor y, a la vez, proteger los datos de cada persona.', risk: 'La transparencia no autoriza a exponer datos sensibles.', info: 'Si la auditora necesita ver algo médico, que lo pida por escrito y con una razón.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Transparente y cuidadosa a la vez!' : 'Ese sobre médico quedó a la vista…'],
      };
    },
    rules: [[LEY, 'Los datos de salud se protegen también frente a terceros, como un auditor (Ley 29733).'], [BP, 'Registra qué se mostró, a quién y para qué.']],
    mirada: {
      ve: 'Una auditoría no suspende la protección de datos. Mostrar un legajo con orden, sin copias y sin lo médico, demuestra que el archivo funciona. Lo que empezaste en la semana 1 con trescientos legajos desordenados hoy se convierte en evidencia.',
      visual: { tipo: 'flujo', titulo: 'Mostrar un legajo sin exponerlo', pasos: ['Cuaderno de préstamo', 'Sacar solo lo pedido', 'Retirar lo médico', 'Revisar sin copias', 'Anotar lo revisado', 'Devolver completo'] },
    },
  },
  {
    id: 'g5', t: '13:30', ch: 'presencial', who: null, titulo: 'El hallazgo', banner: 'assets/foto/plano-equipo.webp', lugar: 'Sala de reuniones', show: ['confianza', 'etica', 'cumplimiento'],
    body: (n, F) => {
      const h = F.has('prueba_ignorada') ? 'En el legajo de Yesenia, la auditora encontró una prueba de embarazo archivada como «requisito de ingreso».'
        : F.has('registro_inflado') ? 'Dos trabajadoras del grupo 1 dijeron en la entrevista que nunca recibieron primeros auxilios, pero el registro que firmaste dice que sí.'
        : F.has('aviso_sesgado') || F.has('filtro_edad') ? 'El aviso de empleo pedía «sexo femenino, de 18 a 30 años, sin hijos», y en la lista de citadas no hay nadie mayor de 30.'
        : F.has('faustina_sin_pago') ? 'Faustina le contó a la auditora que trabajó tres horas un sábado y no se las pagaron completas.'
        : F.has('filtracion_ignorada') ? 'Una trabajadora contó que sus descansos médicos circularon en un grupo de WhatsApp de supervisores.'
        : 'Las entrevistas muestran que varias nuevas no sabían que el turno de noche era una semana sí y una no. Y que la prueba de embarazo se pidió hasta hace unos meses.';
      return `<p>Después del almuerzo, la licenciada Salas pide hablar con RR.HH. Carla te hace una seña para que la acompañes.</p><p>«Tenemos un hallazgo.» ${h}</p><p>Carla te mira. <mark class="clave">Conoces el tema mejor que nadie en la sala</mark>.</p>`;
    },
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocerlo y mostrar qué ya se corrigió, qué falta y con qué fechas lo cerrarán.',
        res: { q: 'buena', fx: { confianza: 6, etica: 5, cumplimiento: 3 }, rel: { carla: 1 }, flags: ['hallazgo_asumido'],
          out: 'Explicas lo que pasó, muestras lo que ya cambió y propones una fecha para lo que falta. La licenciada Salas anota: «Hallazgo con acción correctiva en curso». Carla te aprieta el brazo bajo la mesa.',
          pro: { ok: 'Un hallazgo reconocido con un plan creíble se cierra; uno negado se vuelve una segunda auditoría.', risk: 'Las fechas que prometes ahora tienen que cumplirse.', info: 'Separa lo que ya se corrigió de lo que falta: así se ve que el control existe.' },
          kusi: ['celebra', 'La verdad con un plan. ¡Qué bacán!'] } },
      { id: 'b', label: 'Decir que fue un caso aislado de antes, que ya no pasa y que no hace falta anotarlo.',
        res: { q: 'riesgosa', fx: { confianza: -6, etica: -5 }, rel: { carla: -1 }, flags: ['hallazgo_negado'],
          out: 'La licenciada Salas cruza el dato con otros dos legajos y con una entrevista. No era aislado. Anota: «Respuesta de la empresa no coincide con la evidencia».',
          pro: { ok: 'Intentas proteger a la empresa.', risk: 'Negar ante un auditor algo que puede verificar destruye la credibilidad de todo lo demás.' },
          kusi: ['triste', 'Ahora dudan de toda la carpeta…'] } },
      { id: 'c', label: 'Explicar que eso lo hizo otra área antes de que tú llegaras.',
        res: { q: 'aceptable', fx: { confianza: -2, etica: -1 },
          out: 'Es cierto en parte. La licenciada Salas asiente: «Entiendo. Pero la empresa es una sola. ¿Qué van a hacer?». Carla responde por ti.',
          pro: { ok: 'Das contexto.', risk: 'Ante un auditor, «fue otra área» suena a no hacerse cargo.', info: 'El contexto ayuda solo si viene seguido de un plan.' },
          kusi: ['pensando', 'Contexto sí, pero ¿y el plan?'] } },
    ],
    rules: [[BP, 'Ante un hallazgo: reconoce, muestra lo corregido y propón fechas para lo que falta.']],
    mirada: {
      ve: 'Todas las empresas tienen hallazgos. Lo que distingue a una organización confiable es cómo responde: reconoce, corrige y demuestra que aprendió. Las decisiones que tomaste durante el mes aparecen hoy como problema o como evidencia de mejora.',
      visual: { tipo: 'flujo', titulo: 'Cómo se cierra un hallazgo', pasos: ['Reconocer', 'Explicar la causa', 'Mostrar lo corregido', 'Fechas para lo que falta', 'Verificar en la siguiente visita'] },
    },
  },
  {
    id: 'g6', t: '15:00', ch: 'llamada', who: null, titulo: 'El acuerdo que falta', banner: 'assets/3d/scenes/boleta.webp', show: ['etica', 'cumplimiento', 'tiempo'],
    body: () => `<p>La auditora Weber pide algo más antes del cierre: <mark class="clave">pruebas de que las horas extra fueron voluntarias</mark>. No hay un acuerdo firmado por cada trabajadora. Tienes hasta las 16:30.</p><p>La asistente de Gerencia propone imprimir un formato y hacerlo firmar hoy «con fecha del primero».</p>`,
    type: 'calls',
    calls: [['Diego · Planillas', 'Contesta enseguida', 'Tengo las boletas con las horas extra pagadas y la nota de corrección del jueves. Te las mando a la carpeta.'], ['Sra. Justina · supervisora', 'Contesta desde la línea', 'En mi cuaderno anoto quién se queda y quién no. Las que no quieren, no se quedan, hijita. Ahí está con mi firma.'], ['Mesa de ayuda · TI', 'Contesta con eco de servidor', 'Te mando la constancia de la falla del reloj del sábado. Con fecha y hora.']],
    prompt: 'Tienes boletas, el cuaderno de la supervisora y la constancia del reloj. Falta el acuerdo firmado. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Presentar las evidencias reales y reconocer que falta un acuerdo escrito, con la fecha en que se implementará.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 3, confianza: 3 }, flags: ['evidencia_real'],
          out: 'La auditora Weber revisa el cuaderno de Justina página por página. «No es perfecto, pero es real», dice. Anota una mejora, no una falta grave.',
          pro: { ok: 'Varias evidencias reales que coinciden valen más que un formato perfecto.', risk: 'El acuerdo escrito tiene que existir de verdad desde la próxima semana.', info: 'Propón que el formato de horas extra se firme antes de cada sobretiempo.' },
          kusi: ['celebra', 'Real y coherente. ¡Así se gana confianza!'] } },
      { id: 'b', label: 'Hacer firmar hoy el formato con fecha del primero, como propone la asistente: total, todas aceptaron quedarse.',
        res: { q: 'riesgosa', fx: { etica: -8, cumplimiento: -5 }, flags: ['evidencia_fabricada'],
          out: 'A las 16:15 tienes doce firmas con la misma tinta azul y la misma fecha atrasada. La licenciada Salas pregunta a Faustina cuándo firmó. Faustina dice la verdad: «Hoy, señorita».',
          pro: { ok: 'La carpeta parece completa.', risk: 'Un documento con fecha falsa convierte una mejora pendiente en una falta grave, y te involucra a ti.' },
          kusi: ['indignado', '¡Faustina dijo la verdad!'] } },
      { id: 'c', label: 'Decirle a la auditora que esa evidencia no está disponible.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: -2 },
          out: 'La auditora anota: «Sin evidencia de voluntariedad». Las boletas y el cuaderno de Justina se quedan en la carpeta, sin que nadie los muestre.',
          pro: { ok: 'No falseas nada.', risk: 'Tenías evidencias reales que sí servían y no las mostraste.' },
          kusi: ['pensando', 'Algo sí había para mostrar…'] } },
    ],
    rules: [[LEY, 'El trabajo en sobretiempo es voluntario (D.S. 007-2002-TR, art. 9).'], [BP, 'Nunca firmes ni hagas firmar un documento con fecha atrasada.']],
    mirada: {
      ve: 'Cuando falta un documento, la tentación de fabricarlo es enorme y parece inofensiva. Pero un papel con fecha falsa es una mentira escrita, con tu nombre cerca. Las evidencias reales e imperfectas, cuando coinciden entre sí, cuentan una historia más creíble.',
      visual: { tipo: 'balanza', a: { t: 'Firmar con fecha atrasada', items: ['Carpeta completa', 'Doce firmas el mismo día', 'Una mentira por escrito'] }, b: { t: 'Evidencias reales', items: ['Boletas pagadas', 'Cuaderno de la supervisora', 'Constancia del reloj', 'Un formato para la próxima vez'] } },
    },
  },
  {
    id: 'g7', t: '17:40', ch: 'presencial', who: null, titulo: 'Marleni en la puerta', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Ventanilla de RR.HH.', show: ['personas', 'etica'],
    body: (n, F) => `<p>Terminó la reunión de cierre. Te duelen los hombros. En la ventanilla te espera Marleni, la vecina de la señora Justina, con el uniforme de acabados.</p>${F.has('vecina_copia') ? '<p>Tiene los ojos rojos. «Señorita, ¿usted le dio mis boletas a Justina? Ahora todo el barrio sabe lo del embargo de mi expareja.» <mark class="clave">Te mira esperando una respuesta</mark>.</p>' : '<p>«Señorita, me entrevistaron hoy. Les conté que cuando pedí mis papeles me los tuvieron listos y que nadie más los vio.» <mark class="clave">Sonríe, un poco tímida</mark>.</p>'}`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Escucharla y responderle con toda honestidad.',
        res: { q: null, fx: { personas: 3, etica: 2 }, flags: ['marleni_honesta'], out: 'Le hablas con la verdad, sin excusas. Marleni se queda un rato en silencio y luego asiente. Afuera, el sol se pone detrás del Chachani y la planta cambia de turno.', kusi: ['animo', 'La honestidad pesa, pero alivia.'] } },
      { id: 'b', label: 'Decirle que hoy fue un día muy largo y que lo conversen el lunes.',
        res: { q: null, fx: { personas: -2 }, out: 'Marleni dice «ya» y se va. Te quedas mirando la ventanilla vacía, con la sensación de que el lunes será más difícil.', kusi: ['pensando', 'Algunas conversaciones no esperan.'] } },
    ],
    mirada: { ve: 'Las decisiones pequeñas de la semana 1 vuelven en la semana 3. Un legajo entregado o protegido no es solo un trámite: es la confianza de una persona en RR.HH. Al final del día, más que la auditoría, importa lo que la gente cuenta de ti.' },
  },
];
