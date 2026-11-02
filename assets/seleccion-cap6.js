// Capítulo 6 · «La terna» · Semana 2, lunes.
// Recibe las decisiones de los capítulos 1 a 5. Aquí se decide quién recibe la oferta: elegido_marco, elegido_lucia o elegido_patricia.
//
// Normas citadas y fuentes consultadas:
// - Ley 29733, de Protección de Datos Personales: consentimiento (art. 5) y finalidad (art. 6). Las referencias son datos de
//   terceros sobre el candidato y se piden con su autorización y solo para este proceso.
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// - Ley 29973, Ley General de la Persona con Discapacidad: no discriminación y ajustes razonables (arts. 49 y 50).
//   https://www.elperuano.pe/noticia/259228-personas-con-discapacidad-obligaciones-de-empleadores-para-fomentar-la-inclusion-laboral
// - Ley 26772 y D.S. 002-98-TR: criterios no discriminatorios. https://faolex.fao.org/docs/pdf/per201903.pdf
// - D.S. 003-97-TR (TUO de la Ley de Productividad y Competitividad Laboral), art. 18: preaviso de 30 días, exonerable por el empleador.
//   (verificado en el capítulo 1)

export const CAP = {
  n: 6, titulo: 'La terna', dia: 'Semana 2, lunes', foto: 'assets/foto2/reunion-circulos.webp',
  lugar: 'Oficina de RR.HH. · Distribuidora Pacífico Sur',
  inicio: '07:30', fin: '19:40', cierreHora: '19:25',
  apertura: 'Tres finalistas, una referencia por verificar y un jefe que ya tiene favorito.', boton: 'Empezar el día',
  kusi: 'Hoy se decide con datos y con personas. Las dos cosas a la vez. ¡Dale!',
  lead: 'Verificaste una referencia que no cuadraba, limpiaste un informe de opiniones y recomendaste a una persona con un sustento que se puede defender.',
  reflexion: 'Si tuvieras que explicarle tu recomendación a quien no quedó, ¿qué le dirías?',
  siguiente: { n: 7, titulo: 'La oferta', dia: 'Semana 2, martes' },
};

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 29, e: 'Hoy: referencias y terna' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 16, e: '3 aprobados, falta 1' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 22, e: 'Fernando eligió a los tres' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 47, e: 'Entrevistas el jueves' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 12, e: 'Oferta aceptada' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 10, e: 'Convenio firmado' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 67, e: 'Entrevistas la próxima semana' },
];
export const CARTERA = (F, prev) => BASE.map(c => {
  const antes = prev?.cartera?.find(x => x.id === c.id);
  return antes && !['supervisor', 'vendedores', 'chofer'].includes(c.id) && antes.e !== c.e ? { ...c, e: antes.e } : c;
});

export const FUTURO = {
  marco_aclarado: ['La referencia de Marco quedó aclarada con una segunda fuente.', 'Capítulo 7.'],
  marco_dudoso: ['Seguiste con Marco sin aclarar el faltante de Ilo.', 'Puede volver a aparecer. Capítulo 8.'],
  marco_descartado: ['Descartaste a Marco por un comentario de una sola referencia.', 'Walter no lo entiende. Capítulo 7.'],
  informe_limpio: ['Tu informe de terna solo tiene evidencia y riesgos del puesto.', 'Rocío lo usará como modelo. Capítulo 9.'],
  informe_sesgo: ['El informe de terna salió con comentarios que no debieron estar.', 'Capítulo 9.'],
  julio_plan: ['Don Julio no quedó, pero salió con un plan para terminar la secundaria y un reconocimiento por el encargo.', 'Capítulo 9.'],
  julio_reserva: ['A don Julio le dijiste que quedó «en reserva».', 'Esperará una llamada que no llegará. Capítulo 9.'],
  hugo_puerta: ['Hugo recibió una devolución concreta y quedó en la base, con su permiso.', 'Capítulo 9.'],
  elegido_marco: ['Recomendaste a Marco: experiencia y el inventario encima.', 'Pide más que la banda. Capítulo 7.'],
  elegido_lucia: ['Recomendaste a Lucía: liderazgo y encaje, con un plan para el WMS.', 'Su empleador intentará retenerla. Capítulo 7.'],
  elegido_patricia: ['Recomendaste a Patricia: el mejor puntaje, con un preaviso por resolver.', 'Capítulo 7.'],
  terna_sin_recomendacion: ['Presentaste la terna sin recomendación y Walter eligió solo.', 'Capítulo 7.'],
  finalistas_informadas: ['Avisaste a las otras finalistas que la decisión se cerrará mañana.', 'Capítulo 7.'],
  finalistas_silencio: ['No escribiste a las otras finalistas, aunque se lo habías prometido a una.', 'Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
  marco: { n: 'Marco Ticona', sub: 'Finalista', who: 'marco' },
  lucia: { n: 'Lucía Flores', sub: 'Finalista', who: 'lucia' },
  patricia: { n: 'Patricia Huanca', sub: 'Finalista', who: 'patricia' },
  hugo: { n: 'Hugo Cárdenas', sub: 'Postulante a supervisor', c: '#5B8E7D' },
  fernando: { n: 'Fernando Salas', sub: 'Gerente Comercial', who: 'fernando' },
};

export const CORREOS = [
  { t: '07:40', de: 'Fernando Salas', para: 'Analista de Selección', cc: 'Rocío Mamani', asunto: 'Vendedores elegidos', html: '<p>Colega: me quedo con Rosa Ccama, Nilda Mamani y Diego Arce. Kevin va a esperar el próximo proceso, cuando tenga su moto. Lo conversé con mi hermana. Gracias por ser clara con él.</p>', si: 'kevin_igual' },
  { t: '07:40', de: 'Fernando Salas', para: 'Analista de Selección', cc: 'Rocío Mamani', asunto: 'Vendedores elegidos', html: '<p>Colega: me quedo con Kevin, Nilda y Diego. Rosa me gustaba, pero ya tenía tres. 💪</p>', si: 'kevin_final' },
  { t: '07:40', de: 'Fernando Salas', para: 'Analista de Selección', asunto: 'Vendedores elegidos', html: '<p>Colega: me quedo con Rosa, Nilda y Diego. Lo de Kevin lo hablamos otro día.</p>', no: ['kevin_igual', 'kevin_final'] },
  { t: '09:10', de: 'Rosa Ccama', para: 'seleccion@pacificosur.pe', asunto: 'Consulta sobre el proceso de vendedores', html: '<p>Señorita, me dijeron que no quedé. Tengo moto y tres años con bodegas. ¿Puedo saber qué me faltó? Escuché que entró el sobrino de un gerente.</p>', si: 'kevin_final' },
  { t: '10:55', de: 'Ing. Óscar Benites', para: 'Analista de Selección', asunto: 'RE: Referencia de Marco Ticona', html: '<p>Confirmo lo que le dije por teléfono, con un dato que olvidé: el faltante de 2019 lo reportó el propio Marco. La investigación concluyó que fue un contratista de transporte. Si quiere, hable con Luz Gálvez, que era gerente de operaciones.</p>', si: 'marco_aclarado' },
];

export const WSP = [
  { chat: 'grupo', t: '07:45', de: 'Kelly', txt: 'Chicas, hoy hay corte de agua en el parque industrial hasta las 12 💧 traigan su botella' },
  { chat: 'walter', t: '08:05', de: 'Walter', txt: 'Ya le dije que me quedo con Marco. No pierda tiempo con referencias.', si: 'walter_marco' },
  { chat: 'walter', t: '08:05', de: 'Walter', txt: 'Le mando mi hoja de puntajes. Marco 4.2, Patricia 4.3, Lucía 4.1. Me sorprendió la de la tienda.', si: 'puntaje_independiente' },
  { chat: 'marco', t: '09:20', de: 'Marco', txt: 'Buenos días. Mi jefe se enteró de que postulé. Alguien de su empresa le comentó a un amigo de él. ¿Cómo pasó eso?', si: 'cv_whatsapp' },
  { chat: 'rocio', t: '13:10', de: 'Rocío', txt: 'Revisé lo de Hugo. Que nadie lo deje fuera por suposiciones sobre su discapacidad, ¿ya?', si: 'hugo_fuera' },
  { chat: 'lucia', t: '18:55', de: 'Lucía', txt: 'Gracias por avisarme 🙏 Espero su llamada mañana.', si: 'finalistas_informadas', no: 'elegido_lucia' },
  { chat: 'patricia', t: '19:02', de: 'Patricia', txt: 'Gracias por cumplir con escribirme hoy. Quedo atenta.', si: 'finalistas_informadas', no: 'elegido_patricia' },
  { chat: 'patricia', t: '19:30', de: 'Patricia', txt: 'Buenas noches. Usted me dijo que hoy me escribía. ¿Hay alguna novedad?', si: 'finalistas_silencio', no: 'elegido_patricia' },
];

export const QUIZ = [
  { q: '¿Qué necesitas antes de llamar a las referencias de un candidato?', ops: ['Nada: son públicas', 'Su autorización, y saber a quién puedes llamar', 'Permiso de SUNAFIL', 'Que el jefe lo pida por escrito'], ok: 1, por: 'Las referencias son información sobre la persona: se piden con su autorización y para este proceso.' },
  { q: 'Una referencia dice algo negativo y vago. ¿Qué haces?', ops: ['Descartas al candidato', 'Lo ignoras', 'Le pides al candidato que lo explique y buscas una segunda fuente', 'Se lo cuentas al resto de finalistas'], ok: 2, por: 'Un comentario aislado se contrasta. Descartar sin preguntar es injusto; ignorarlo, imprudente.' },
  { q: '¿Qué no debe ir en un informe de terna?', ops: ['Los puntajes de cada competencia', 'Los riesgos del puesto, como el preaviso o la banda', 'La situación familiar de una candidata', 'Los ejemplos que dio cada candidato'], ok: 2, por: 'El informe recoge evidencia y riesgos del puesto, nunca datos personales que no se evalúan.' },
  { q: '¿Cuándo conviene avisar «no» a los finalistas que no fueron elegidos?', ops: ['Antes de enviar la oferta', 'Cuando el elegido haya aceptado, avisándoles antes cuándo tendrán respuesta', 'Nunca', 'Un mes después'], ok: 1, por: 'Si el elegido no acepta, necesitas a los demás. Pero se les debe decir con honestidad cuándo sabrán la respuesta.' },
  { q: 'Un trabajador interno no quedó en la terna. ¿Qué es lo más profesional?', ops: ['Mandarle un correo genérico', 'Decirle que quedó en reserva', 'Darle la noticia en persona, con lo que hizo bien y un camino para crecer', 'No decirle nada'], ok: 2, por: 'Un interno que no queda sigue en la empresa. Cómo se entera define si se queda motivado.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:30', ch: 'llamada', who: null, titulo: 'Las referencias de Marco', banner: 'assets/foto/llamada.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Marco firmó el viernes la autorización para contactar sus referencias y te dio tres números. Pidió que no llames a su jefe actual: <mark class="clave">todavía no le ha dicho que se quiere ir</mark>.</p>${F.has('terna_apurada') || F.has('walter_marco') ? '<p>Walter te escribió temprano: «No pierda tiempo con referencias». Llamas igual.</p>' : ''}`,
    type: 'calls',
    calls: [['Ing. Óscar Benites · exjefe en un almacén de Ilo (2017-2019)', 'Contesta: «Buen supervisor. Se fue después de un faltante de inventario que nunca se aclaró del todo»', 'Marco… buen supervisor, ordenado. Se fue después de un faltante de inventario que nunca se aclaró del todo. Bueno, eso es lo que yo recuerdo.'], ['Sra. Elena Rivas · RR.HH. de ese almacén', 'Contesta: «Solo confirmo fechas y cargo. Supervisor de 2017 a 2019»', 'Por política solo confirmo fechas y cargo: supervisor de almacén, de 2017 a 2019.'], ['Jhon Mamani · excompañero en Moquegua', 'No contesta']],
    prompt: '«Un faltante que nunca se aclaró.» ¿Qué haces con ese comentario?',
    choices: [
      { id: 'a', label: 'Preguntarle a Benites qué quiso decir con «no se aclaró» y pedirle a Marco que te cuente su versión, con alguien más que pueda confirmarla.',
        res: { q: 'buena', fx: { calidad: 6, etica: 3, tiempo: -3 }, flags: ['ref_contrastar'],
          out: 'Benites duda: «Ahora que lo dice… creo que fue él quien lo reportó. Le escribo para confirmarle». Quedas en llamar a Marco a las 9:40.',
          pro: { ok: 'Un comentario vago se convierte en una pregunta concreta, y le das al candidato la oportunidad de responder.', risk: 'Te toma la mañana, justo cuando Walter quiere la terna.', info: 'Anota quién dijo qué y cuándo. Si decides con esto, tiene que poder sostenerse.' },
          kusi: ['animo', 'Una frase suelta no es una prueba. Pregunta.'] } },
      { id: 'b', label: 'Sacar a Marco de la terna: con un inventario encima, no se puede correr el riesgo de alguien con un faltante en su historia.',
        res: { q: 'riesgosa', fx: { calidad: -4, etica: -4, tiempo: 3 }, rel: { walter: -1 }, flags: ['marco_descartado'],
          out: 'Lo sacas de la lista. Marco nunca sabrá por qué. Y quizás el faltante ni siquiera fue suyo.',
          pro: { ok: 'Eres prudente con el inventario.', risk: 'Descartas a alguien por un rumor que no contrastaste, y sin dejarle explicar.' },
          kusi: ['triste', 'Una frase y adiós… sin escucharlo.'] } },
      { id: 'c', label: 'Seguir adelante: es un comentario de una sola persona, y las otras referencias no dicen nada malo.',
        res: { q: 'aceptable', fx: { calidad: -2, tiempo: 2 }, flags: ['marco_dudoso'],
          out: 'Sigues con Marco. Pero la duda queda en tu cuaderno, sin respuesta, y vas a recomendar a alguien sin saber qué pasó.',
          pro: { ok: 'No exageras un comentario aislado.', risk: 'Ignorarlo es tan arriesgado como descartarlo. Lo que corresponde es aclararlo.' },
          kusi: ['pensando', 'Dejar la duda en el cuaderno no la resuelve.'] } },
    ],
    rules: [[LEY, 'Las referencias se piden con autorización del candidato y se usan solo para este proceso (Ley 29733).'], [BP, 'No llames al empleador actual sin permiso: puedes costarle su trabajo.'], [BP, 'Un comentario negativo aislado se contrasta con el candidato y con otra fuente.']],
    mirada: {
      ve: 'Las referencias no son un trámite para confirmar lo que ya decidiste. Son la última oportunidad de ver algo que la entrevista no mostró. Pero una frase vaga no es un hecho. Una profesional pregunta «¿qué pasó exactamente?» y escucha a las dos partes antes de decidir.',
      visual: { tipo: 'flujo', titulo: 'Verificar una referencia', pasos: ['Autorización del candidato', 'Llamar a exjefes', 'Anotar hechos, no impresiones', 'Contrastar lo negativo', 'Decidir'], aqui: 3 },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales, arts. 5 y 6', dice: 'El tratamiento de datos personales requiere consentimiento del titular y debe limitarse a la finalidad para la que se recogen.', practica: 'Marco autorizó llamar a tres personas para este proceso. Llamar a su jefe actual, o comentar lo que dicen sus referencias con terceros, va más allá de esa autorización.' }],
    },
  },
  {
    id: 'f2', t: '09:40', ch: 'llamada', who: 'marco', titulo: 'La versión de Marco', banner: 'assets/foto2/pasillo.webp', no: 'marco_descartado', show: ['calidad', 'personas', 'confianza'],
    body: (n, F) => `<p>${F.has('cv_whatsapp') ? 'Marco contesta tenso: «Antes que nada, mi jefe se enteró de que postulé. Alguien de su empresa le comentó a un amigo». Los CV que viajaron al celular de Walter ya hicieron daño. ' : 'Marco contesta desde el almacén minero; se oye viento y una alarma de retroceso. '}</p><p>Le dices, sin rodeos, lo que contó una referencia. <mark class="clave">Hay un silencio de tres segundos</mark>. Después respira.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'que', label: '¿Qué pasó con el faltante de 2019?', info: '«Faltaban cuarenta bobinas de cable. Lo reporté yo, el mismo día del conteo. La investigación encontró que un contratista de transporte las sacaba en los camiones de retorno. Me fui porque después de eso me pusieron a hacer turnos dobles «para vigilar». No aguanté.»' },
      { id: 'quien', label: '¿Quién puede confirmarlo?', info: '«Luz Gálvez, que era gerente de operaciones. Ella firmó el informe. Le paso su número; ya le escribí para avisarle que podría llamarla.»' },
      { id: 'jefe', label: 'El jueves dijo que su jefe actual «no sabe nada». ¿Cómo maneja un desacuerdo con un jefe?', info: '«Eso estuvo de más, lo reconozco. Con mi jefe actual discuto con datos: le llevo el reporte del WMS y que decida él. A veces no me hace caso. Ahí me aguanto.»' },
      { id: 'por', label: '¿Por qué no me lo contó en la entrevista?', info: '«Porque nadie me preguntó, y porque da miedo contar que hubo un faltante en tu turno. Aunque lo hayas reportado tú.»' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('quien') ? 5 : 2, confianza: 2, personas: 1 },
      rel: { marco: 1 },
      flags: picks.includes('quien') ? ['marco_aclarado'] : ['marco_dudoso'],
      out: picks.includes('quien') ? 'A las 10:30 hablas con Luz Gálvez. Confirma todo: Marco reportó el faltante y la investigación lo descartó. A las 10:55, Benites te escribe lo mismo.' : 'La versión de Marco es coherente, pero no tienes a nadie que la confirme.',
      kusi: ['curioso', 'El faltante tenía otra historia.'],
    }),
    mirada: {
      ve: 'Lo que parecía una mancha resultó ser una prueba de integridad: Marco reportó un faltante que le podía costar el puesto. Una profesional no confía en su intuición ni en la del exjefe: busca a quien firmó el informe.',
      visual: { tipo: 'cambio', titulo: 'Lo que cambió con una segunda fuente', pares: [['Se fue después de un faltante', 'Reportó el faltante el mismo día'], ['Nunca se aclaró', 'La investigación encontró a un contratista'], ['Un riesgo', 'Evidencia de integridad']] },
    },
  },
  {
    id: 'f3', t: '11:15', ch: 'documento', who: null, titulo: 'El informe de terna', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Armas el informe de terna con los puntajes ${F.has('puntaje_independiente') ? 'tuyos y de Walter' : 'tuyos'}. Le mandaste el borrador a Walter para que lo revisara y te lo devuelve con <mark class="clave">comentarios en rojo</mark>.</p><p>El informe irá a Rocío y quedará en el archivo del proceso.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede quedar en el informe. Si alguna línea te hace dudar, márcala también.',
    doc: { t: 'Informe de terna · Supervisor/a de almacén', sub: 'Borrador · comentarios de W. Quispe en rojo' },
    lines: [
      { id: 'metodo', t: 'Los tres finalistas fueron entrevistados con la misma guía y puntuados por competencias.' },
      { id: 'marco', t: 'Marco Ticona · 4.3 · Seis años en almacén minero; concilia WMS; pide S/ 4,400 (sobre la banda).' },
      { id: 'patricia', t: 'Patricia Huanca · 4.4 · Ocho años; indicadores de exactitud; preaviso de 30 días.' },
      { id: 'hijos', t: '(W.Q.) Ojo: madre de dos hijos, la mudanza puede fallar.', bad: LEY, why: 'La situación familiar no se evalúa. En un informe oficial, además, deja constancia escrita de un criterio discriminatorio.' },
      { id: 'lucia', t: 'Lucía Flores · 4.1 · Cinco años liderando equipos en retail; sin experiencia en WMS.' },
      { id: 'calle', t: '(W.Q.) A Lucía le falta calle, es de tienda.', bad: BP, why: '«Falta calle» es una impresión. Si hay una brecha, nómbrala: «no ha liderado un inventario general».' },
      { id: 'hugo', t: '(W.Q.) Hugo sabe, pero no podría usar la radio.', bad: LEY, why: 'Es una suposición sobre su discapacidad que nadie evaluó. El puesto podría requerir un ajuste, no un descarte.' },
      { id: 'wms', t: 'Lucía necesitaría capacitación en WMS; el proveedor estima cuatro semanas.', duda: 'Es un dato útil, pero cuatro semanas coinciden con el inventario. ¿Hay un plan para cubrir esa brecha?' },
      { id: 'refs', t: 'Referencias de Marco verificadas con dos fuentes.' },
    ],
    res: v => ({
      flags: [v.missLey ? 'informe_sesgo' : 'informe_limpio'],
      out: v.missLey ? 'El informe sale con comentarios sobre la familia de Patricia o la discapacidad de Hugo. Rocío lo lee a las 12:00 y te llama: «Esto no puede quedar en el archivo».' : 'Borras los comentarios en rojo que no son evidencia y le explicas a Walter por qué, en dos líneas. Él responde: «Ya. Quítelos».',
      pro: { ok: 'El informe de terna es un documento oficial: debe poder leerlo un inspector, un juez o el propio candidato sin que haya nada que ocultar.', risk: 'Un comentario «solo interno» en un archivo oficial es una prueba de discriminación.', info: 'Si un riesgo es real, como el preaviso o la banda, nómbralo con datos y con un plan.' },
      kusi: v.missLey ? ['indignado', '¡Eso en un informe oficial, no!'] : ['celebra', '¡Informe limpio! Se puede leer en voz alta.'],
    }),
    rules: [[LEY, 'La situación familiar y la discapacidad no pueden ser criterio de descarte (Ley 26772; Ley 29973).'], [BP, 'Escribe el informe como si el candidato fuera a leerlo.']],
    mirada: {
      ve: 'Walter escribió en rojo lo que muchos jefes piensan y pocos escriben. Una profesional no lo trata como enemigo: le muestra que cada comentario personal convierte un buen proceso en uno indefendible. Y transforma las preocupaciones reales en riesgos con plan.',
      visual: { tipo: 'cambio', titulo: 'De la opinión en rojo al riesgo con plan', pares: [['Madre de dos hijos, la mudanza puede fallar', 'Preaviso de 30 días: ¿se puede exonerar?'], ['A Lucía le falta calle', 'No ha liderado un inventario general: apoyo de don Julio'], ['No podría usar la radio', 'Evaluar ajustes: radio con pantalla o mensajes']] },
      normas: [{ ley: 'Ley 29973, Ley General de la Persona con Discapacidad', dice: 'Reconoce el derecho a trabajar en igualdad de condiciones y a ajustes razonables, también en el proceso de selección.', practica: 'Suponer que Hugo «no podría» sin evaluarlo, y dejarlo por escrito, es exactamente lo que la ley busca evitar.' }],
    },
  },
  {
    id: 'f4a', t: '12:40', ch: 'presencial', who: 'julio', titulo: 'Don Julio espera', banner: 'assets/foto/cafe.webp', si: 'julio_evaluado', lugar: 'Zona de despacho · almacén', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Don Julio sacó 3.4. No está en la terna. ${F.has('encargo_julio') ? 'En estos días de encargo, el turno no se cayó ni una vez, y Walter lo dijo en voz alta en la reunión de turno de esta mañana.' : 'Sus compañeros dicen que la entrevista «le salió de corazón».'}</p><p>Lo encuentras ordenando guías de remisión. Te ve llegar y deja el lapicero. <mark class="clave">Ya lo sabe por tu cara.</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle en persona que no quedó, qué hizo bien y proponerle un plan: terminar la secundaria en un CEBA y un reconocimiento por el encargo.',
        res: { q: 'buena', fx: { personas: 6, etica: 3, confianza: 2 }, rel: { julio: 1 }, flags: ['julio_plan'],
          out: 'Don Julio escucha con los ojos húmedos. «A mi edad, ¿la secundaria?» Le cuentas que hay CEBA con horario de noche en Tacna. Se ríe: «Mi nieta me va a ayudar con las tareas». Rocío aprueba el reconocimiento esa tarde.',
          pro: { ok: 'Un no con un camino convierte la decepción en un plan.', risk: 'Si la empresa no cumple lo que ofreces, la herida será peor. Confirma con Rocío antes de prometer.', info: 'Pídele que acompañe al nuevo supervisor en el inventario: nadie conoce mejor el almacén.' },
          kusi: ['celebra', '¡Qué divino! A los 58 y con plan de estudio.'] } },
      { id: 'b', label: 'Decirle que quedó «en reserva» para el próximo proceso, para que no se desanime.',
        res: { q: 'riesgosa', fx: { personas: 2, etica: -5 }, flags: ['julio_reserva'],
          out: 'Don Julio sonríe: «Entonces espero». No hay próximo proceso a la vista. Esperará una llamada que no está en ningún plan.',
          pro: { ok: 'Le evitas el golpe hoy.', risk: 'Una esperanza falsa duele más que un no honesto, y el equipo lo sabrá.' },
          kusi: ['triste', 'Esa reserva no existe.'] } },
      { id: 'c', label: 'Mandarle la respuesta por correo, con el mismo texto que a los demás postulantes.',
        res: { q: 'aceptable', fx: { personas: -3, tiempo: 1 },
          out: 'Don Julio no revisa el correo hasta la noche. Al día siguiente, el almacén entero comenta que «a Julio lo botaron por correo».',
          pro: { ok: 'Lo tratas igual que a los demás.', risk: 'Un interno con veinte años merece una conversación, no una plantilla.' },
          kusi: ['pensando', 'Igual para todos… pero don Julio no es «todos».'] } },
    ],
    rules: [[POL, 'En esta empresa, a los internos que no quedan se les responde en persona.'], [BP, 'Acompaña un «no» con lo que la persona hizo bien y con un camino concreto.']],
    mirada: {
      ve: 'Don Julio seguirá en el almacén mañana, y el equipo mirará cómo lo trataron. Una profesional sabe que un proceso interno no termina con la terna: termina cuando el que no quedó vuelve a su puesto con ganas o sin ellas.',
      visual: { tipo: 'balanza', a: { t: 'Lo que no alcanzó', items: ['Nunca supervisó formalmente', 'Le cuesta el Excel'] }, b: { t: 'Lo que tiene', items: ['Veinte años en el almacén', 'Varios días de encargo sin caídas', 'El respeto del equipo'] } },
    },
  },
  {
    id: 'f4b', t: '12:40', ch: 'whatsapp', who: null, titulo: 'Hugo pide una devolución', banner: 'assets/foto2/tablet-equipo.webp', no: 'julio_evaluado', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('ajuste_hugo') ? 'Hugo sacó 3.8 en su entrevista con subtítulos. Quedó cuarto, muy cerca de la terna.' : 'Hugo nunca llegó a entrevistarse: no le ofreciste el ajuste que pidió.'}</p><p>Te escribe: «¿Me podría decir <mark class="clave">en qué puedo mejorar</mark>? Quiero saber si fue por mi experiencia o por otra cosa».</p>`,
    chat: ['¿Me podría decir en qué puedo mejorar? Quiero saber si fue por mi experiencia o por otra cosa.'],
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Darle una devolución concreta sobre su entrevista y preguntarle si quiere quedar en la base para otras vacantes.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, cumplimiento: 2 }, flags: ['hugo_puerta'], envia: ['hugo', 'Hugo, gracias por preguntar. Quedaste cuarto, muy cerca: tus ejemplos de inventario fueron muy buenos; te faltó mostrar experiencia liderando equipos grandes. ¿Te parece si te mantengo en nuestra base para la vacante de jefe de turno que se abre en dos meses?'],
          out: 'Hugo responde: «Sí, por favor. Gracias por decírmelo así». Rocío anota su nombre para la próxima vacante de jefe de turno.',
          pro: { ok: 'Una devolución con hechos le responde la pregunta que no se atreve a hacer: no fue por su discapacidad.', risk: 'Si no hubo ajuste, la devolución honesta incluye reconocerlo.' },
          kusi: ['feliz', 'Le respondiste la pregunta que importaba.'] } },
      { id: 'b', label: 'Responderle que no se dan devoluciones individuales, por política.',
        res: { q: 'aceptable', fx: { personas: -3, tiempo: 1 }, envia: ['hugo', 'Hola, Hugo. Por política no damos devoluciones individuales. Gracias por participar.'],
          out: 'Hugo deja el mensaje en visto. Se queda con la duda de si fue por su discapacidad.',
          pro: { ok: 'Es una política que existe en muchas empresas.', risk: 'En este caso, el silencio deja abierta la sospecha de discriminación.' },
          kusi: ['pensando', 'La política protege a la empresa… ¿o la expone?'] } },
    ],
    rules: [[LEY, 'Los postulantes con discapacidad no pueden ser descartados por suposiciones sobre ella (Ley 29973).'], [BP, 'Una devolución con hechos protege a la persona y a la empresa.']],
    mirada: {
      ve: '«¿Fue por mi experiencia o por otra cosa?» es la pregunta que muchas personas con discapacidad se hacen después de cada no. Una profesional responde con hechos, porque la duda también es una forma de exclusión.',
      visual: { tipo: 'mensaje', titulo: 'Una devolución con hechos', txt: 'Hugo, quedaste cuarto, muy cerca: tus ejemplos de inventario fueron muy buenos; te faltó mostrar experiencia liderando equipos grandes. ¿Te mantengo en la base para la próxima vacante de jefe de turno?' },
    },
  },
  {
    id: 'f5', t: '15:00', ch: 'presencial', who: 'walter', titulo: 'Experiencia o encaje', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Operaciones', show: ['calidad', 'confianza', 'etica'],
    body: (n, F) => `<p>Walter tiene el informe impreso sobre su escritorio, entre un casco y un termo de café. ${F.has('pregunta_expuesta') ? 'Desde el viernes te habla poco.' : F.has('puntaje_independiente') ? 'Su hoja de puntajes está al lado de la tuya.' : ''}</p><p>Marco: experiencia y SAP, pero pide S/ 4,400. Patricia: el mejor puntaje, pero preaviso de 30 días y el inventario empieza el viernes. Lucía: el mejor liderazgo, pero sin WMS. ${F.has('marco_descartado') ? 'Marco ya no está: lo sacaste en la mañana, y en su lugar entró Hugo como tercer finalista.' : ''} Walter te mira: <mark class="clave">«¿A quién recomienda usted?»</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'marco', label: 'Recomendar a Marco: sabe de SAP, sus referencias quedaron claras y puede llegar antes del inventario si negociamos el sueldo y la fecha.', no: 'marco_descartado',
        res: { q: 'buena', fx: { calidad: 4, confianza: 4, tiempo: 2 }, rel: { walter: 1, marco: 1 }, flags: ['elegido_marco'],
          out: 'Walter asiente despacio: «Eso. Pero el sueldo lo ve usted con Rocío». El riesgo ahora es la banda: el tope es S/ 3,900 y Marco pide S/ 4,400.',
          pro: { ok: 'Experiencia probada y una referencia que se volvió evidencia de integridad.', risk: 'Pide S/ 500 sobre el tope de la banda. Si lo pagas, el resto de supervisores lo sabrá.', info: 'Prepara el sustento de la oferta antes de mañana.' },
          kusi: ['animo', 'Experiencia con referencias claras. Ahora toca negociar.'] } },
      { id: 'lucia', label: 'Recomendar a Lucía: el mejor liderazgo, quiere crecer aquí y su sueldo cabe en la banda. El WMS se aprende; para el inventario, don Julio la acompaña.',
        res: { q: 'buena', fx: { calidad: 3, personas: 4, confianza: -1 }, rel: { walter: 0, lucia: 1 }, flags: ['elegido_lucia'],
          out: 'Walter se rasca la cabeza. «¿Y si el inventario se le cae?» Le muestras el plan: capacitación en WMS desde el primer día y don Julio a su lado. «Ya. Pero si se cae, es su responsabilidad también.»',
          pro: { ok: 'Apuestas por el encaje y el potencial, con un plan para la brecha.', risk: 'El inventario llega antes de que domine el WMS. Si el plan falla, se notará.', info: 'Su empleador actual puede intentar retenerla. Prepárate para una contraoferta.' },
          kusi: ['celebra', 'Apostaste por el potencial, con plan. ¡Valiente!'] } },
      { id: 'patricia', label: 'Recomendar a Patricia: tiene el mejor puntaje y los mejores indicadores. Hay que pedirle a su empresa que la exonere de parte del preaviso.',
        res: { q: 'aceptable', fx: { calidad: 4, tiempo: -4 }, rel: { patricia: 1 }, flags: ['elegido_patricia'],
          out: 'Walter frunce el ceño: «¿Y si no la sueltan hasta después del inventario?». Es un riesgo real: depende de su empleador, no de ustedes. Acepta, con la condición de que don Julio siga encargado hasta que llegue.',
          pro: { ok: 'Eliges a quien tuvo más evidencia en todas las competencias.', risk: 'Su incorporación depende de que su empresa la exonere del preaviso.', info: 'Pregunta a Patricia qué necesita para mudarse: es parte de la negociación.' },
          kusi: ['pensando', 'La mejor en papel… con un reloj en contra.'] } },
      { id: 'nada', label: 'Presentar la terna sin recomendar a nadie: el que pidió la vacante es Walter y le toca decidir a él.',
        res: { q: 'aceptable', fx: { confianza: 1, calidad: -3 }, rel: { walter: 0 }, flags: ['terna_sin_recomendacion', 'elegido_marco'],
          out: 'Walter elige a Marco en diez segundos, como lo dijo el viernes. Tu análisis de una semana no pesó en la decisión.',
          pro: { ok: 'Respetas que la decisión final es del jefe.', risk: 'RR.HH. que no recomienda es solo un buzón de CV.', info: 'El jefe decide, pero RR.HH. debe dar su recomendación con sustento.' },
          kusi: ['pensando', 'El jefe decide, sí. Pero tú tenías algo que decir.'] } },
      { id: 'lucia2', label: 'Recomendar a Lucía: Marco salió de la terna y es quien mejor liderazgo mostró. Para el inventario, don Julio la acompaña.', si: 'marco_descartado',
        res: { q: 'aceptable', fx: { calidad: 2, personas: 3 }, rel: { lucia: 1, walter: -1 }, flags: ['elegido_lucia'],
          out: 'Walter no está convencido: «Usted sacó al que sabía de SAP». Acepta a Lucía, pero te deja claro que el inventario es tu responsabilidad también.',
          pro: { ok: 'Apuestas por el liderazgo con un plan.', risk: 'Walter sigue molesto por el descarte de Marco.' },
          kusi: ['animo', 'Con plan y con Walter mirándote de cerca.'] } },
    ],
    rules: [[POL, 'En esta empresa RR.HH. recomienda y el jefe de área decide, con copia a Rocío.'], [BP, 'Una recomendación incluye el sustento, los riesgos y el plan para cubrirlos.']],
    mirada: {
      ve: 'No hay candidato perfecto. Marco cuesta más; Patricia llega tarde; Lucía tiene que aprender. Una profesional no busca al que no tiene riesgos: elige al que tiene los riesgos que la empresa sí puede manejar, y lo dice con todas sus letras.',
      visual: { tipo: 'matriz', x: 'Riesgo para el inventario', y: 'Encaje a largo plazo', cuadrantes: ['Apuesta de futuro', 'Elección segura', 'Revisar', 'Para el corto plazo'], items: [['Marco', .3, .55], ['Patricia', .75, .75], ['Lucía', .6, .88]] },
    },
  },
  {
    id: 'f6', t: '16:30', ch: 'documento', who: null, titulo: 'El correo de la terna', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Toca dejarlo por escrito. El correo irá a Walter con copia a Rocío y quedará en el archivo del proceso.</p><p>${F.has('informe_limpio') ? 'Adjuntas el informe limpio.' : 'El informe todavía arrastra comentarios que Rocío te pidió borrar.'} Quien lo lea dentro de un año tiene que entender <mark class="clave">por qué se eligió a quien se eligió</mark>.</p>`,
    type: 'compose', para: 'Para: Walter Quispe · CC: Rocío Mamani', boton: 'Enviar el correo',
    prompt: 'Arma el correo eligiendo una frase de cada parte.',
    slots: [
      { id: 'metodo', t: 'Cómo se evaluó', ops: [
        { id: 'm1', t: 'Los tres finalistas fueron entrevistados con la misma guía y puntuados por competencias; las referencias se verificaron con autorización.', ok: true, por: 'Cualquiera entiende que el proceso fue igual para todos.' },
        { id: 'm2', t: 'Les adjunto a los que más nos gustaron.', ok: false, por: '«Nos gustaron» no es un método.' },
      ] },
      { id: 'reco', t: 'La recomendación', ops: [
        { id: 'r1', t: 'Recomendamos a la persona conversada hoy, por la evidencia que muestra el informe adjunto.', ok: true, por: 'La recomendación remite al sustento escrito.' },
        { id: 'r2', t: 'El ingeniero ya eligió, así que solo formalizo.', ok: null, por: 'Es cierto si fue así, pero deja fuera el sustento de RR.HH.' },
      ] },
      { id: 'riesgos', t: 'Los riesgos', ops: [
        { id: 'k1', t: 'Riesgos: sueldo frente a la banda, preaviso y capacitación en WMS, con un plan para cada uno.', ok: true, por: 'Nombra lo que puede salir mal antes de que salga mal.' },
        { id: 'k2', t: 'No vemos riesgos.', ok: false, por: 'Siempre hay riesgos. Decir que no los hay es no haberlos buscado.' },
        { id: 'k3', t: 'El único riesgo es la situación familiar de una de las finalistas.', ok: false, por: 'La situación familiar no es un riesgo del puesto: es un dato que no se evalúa.' },
      ] },
      { id: 'pasos', t: 'Próximos pasos', ops: [
        { id: 'p1', t: 'Mañana presento la oferta; si se acepta, el ingreso sería el miércoles, con Planillas avisada el mismo día.', ok: true, por: 'Fechas concretas y Kelly en el radar.' },
        { id: 'p2', t: 'Vamos viendo.', ok: false, por: 'Sin fechas, todo se corre.' },
      ] },
    ],
    res: sel => {
      const buenas = ['m1', 'r1', 'k1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.riesgos === 'k3' ? 'riesgosa' : buenas >= 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, cumplimiento: sel.riesgos === 'k3' ? -6 : 2, confianza: 2 },
        flags: ['terna_enviada', ...(sel.pasos === 'p1' ? ['kelly_avisada'] : [])],
        cartera: { supervisor: 'Terna enviada · oferta mañana' },
        out: q === 'buena' ? 'Rocío responde a los diez minutos: «Así se sustenta una terna. Lo voy a usar como modelo». Walter responde con un pulgar, que en él es mucho.' : q === 'aceptable' ? 'El correo sale. Rocío te pide agregar los riesgos antes de mañana.' : 'Rocío te llama: «Ese correo no puede quedar así en el archivo». Lo reescriben juntas a las 17:30.',
        pro: { ok: 'Un buen correo de terna protege a todos: al jefe que decide, a RR.HH. que recomienda y a los candidatos.', risk: 'Lo que no está escrito, en un año nadie lo recuerda.', info: 'Avisa hoy a Kelly la fecha tentativa de ingreso, aunque la oferta no esté aceptada.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Terna con sustento. ¡Bacán!' : 'Mira qué parte no podrías defender.'],
      };
    },
    rules: [[POL, 'La terna se envía al jefe por correo, con copia a Rocío.'], [BP, 'Deja por escrito el método, la recomendación, los riesgos y las fechas.']],
    mirada: {
      ve: 'El correo de la terna es la memoria del proceso. Si el elegido renuncia en tres meses, alguien lo leerá para entender qué se sabía. Una profesional escribe para ese lector futuro: método, recomendación, riesgos y fechas.',
      visual: { tipo: 'flujo', titulo: 'Lo que lleva el correo de la terna', pasos: ['Método', 'Recomendación', 'Riesgos con plan', 'Próximos pasos'] },
    },
  },
  {
    id: 'f7', t: '18:40', ch: 'whatsapp', who: null, titulo: 'Las otras finalistas', banner: 'assets/esc/pendulo.webp', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => {
      const otras = F.has('elegido_lucia') ? 'Patricia y Marco' : F.has('elegido_patricia') ? 'Lucía y Marco' : 'Lucía y Patricia';
      return `<p>Ya casi te vas. ${F.has('patricia_tranquila') ? 'El viernes le prometiste a Patricia escribirle hoy.' : 'Las otras finalistas esperan noticias.'} ${otras} todavía no saben nada.</p><p>Si la oferta de mañana no se acepta, <mark class="clave">necesitarás a alguno de ellos</mark>. Pero tampoco puedes tenerlos esperando sin decirles nada.</p>`;
    },
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escribirles hoy: siguen en el proceso, la decisión se cierra mañana y ese día tendrán una respuesta, sea cual sea.', no: ['elegido_lucia', 'elegido_patricia'],
        res: { q: 'buena', fx: { personas: 5, etica: 3, confianza: 2 }, flags: ['finalistas_informadas'], envia: [['lucia', 'Hola, Lucía. Te cuento que sigues en la etapa final del proceso. La decisión se cierra el viernes y ese día te escribo con una respuesta, sea cual sea. Gracias por tu paciencia.'], ['patricia', 'Hola, Patricia. Como te prometí, te escribo: sigues en la etapa final del proceso. La decisión se cierra el viernes y ese día te escribo con una respuesta, sea cual sea. Gracias por tu paciencia.']],
          out: 'Lucía responde con un «gracias 🙏». Patricia: «Gracias por cumplir con escribirme hoy». Honesto y sin cerrar puertas.',
          pro: { ok: 'Cumples lo prometido, no mientes y conservas a tus opciones de respaldo.', risk: 'Si mañana la respuesta es no, ya les diste una fecha: cúmplela.' },
          kusi: ['feliz', 'Sin mentir y sin cerrar puertas. ¡Eso!'] } },
      { id: 'a2', label: 'Escribirles hoy: siguen en el proceso, la decisión se cierra mañana y ese día tendrán una respuesta, sea cual sea.', si: 'elegido_lucia',
        res: { q: 'buena', fx: { personas: 5, etica: 3, confianza: 2 }, flags: ['finalistas_informadas'], envia: [['patricia', 'Hola, Patricia. Como te prometí, te escribo: sigues en la etapa final del proceso. La decisión se cierra el viernes y ese día te escribo con una respuesta, sea cual sea. Gracias por tu paciencia.'], ['marco', 'Hola, Marco. Te cuento que sigues en la etapa final del proceso. La decisión se cierra el viernes y ese día te escribo con una respuesta, sea cual sea. Gracias por tu paciencia.']],
          out: 'Patricia: «Gracias por cumplir con escribirme hoy». Marco responde con un pulgar. Honesto y sin cerrar puertas.',
          pro: { ok: 'Cumples lo prometido, no mientes y conservas a tus opciones de respaldo.', risk: 'Si mañana la respuesta es no, ya les diste una fecha: cúmplela.' },
          kusi: ['feliz', 'Sin mentir y sin cerrar puertas. ¡Eso!'] } },
      { id: 'a3', label: 'Escribirles hoy: siguen en el proceso, la decisión se cierra mañana y ese día tendrán una respuesta, sea cual sea.', si: 'elegido_patricia',
        res: { q: 'buena', fx: { personas: 5, etica: 3, confianza: 2 }, flags: ['finalistas_informadas'], envia: [['lucia', 'Hola, Lucía. Te cuento que sigues en la etapa final del proceso. La decisión se cierra el viernes y ese día te escribo con una respuesta, sea cual sea. Gracias por tu paciencia.'], ['marco', 'Hola, Marco. Te cuento que sigues en la etapa final del proceso. La decisión se cierra el viernes y ese día te escribo con una respuesta, sea cual sea. Gracias por tu paciencia.']],
          out: 'Lucía responde con un «gracias 🙏». Marco: «Ok, quedo atento». Honesto y sin cerrar puertas.',
          pro: { ok: 'Cumples lo prometido, no mientes y conservas a tus opciones de respaldo.', risk: 'Si mañana la respuesta es no, ya les diste una fecha: cúmplela.' },
          kusi: ['feliz', 'Sin mentir y sin cerrar puertas. ¡Eso!'] } },
      { id: 'b', label: 'Decirles hoy que no fueron elegidas: es lo más honesto.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: -1 }, flags: ['finalistas_rechazadas'],
          out: 'Les escribes que no quedaron. Si mañana el elegido dice que no, tendrás que volver a buscarlas, y quizás ya no quieran.',
          pro: { ok: 'Eres transparente.', risk: 'Cierras tu respaldo antes de tener la oferta aceptada.', info: 'Lo usual es avisar el no cuando el elegido acepta, diciendo antes cuándo habrá respuesta.' },
          kusi: ['pensando', 'Honesto… pero te quedaste sin plan B.'] } },
      { id: 'c', label: 'No escribirles hasta mañana: no hay nada nuevo que contar.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2 }, flags: ['finalistas_silencio'],
          out: 'A las 19:30 Patricia escribe: «Usted me dijo que hoy me escribía». La promesa del viernes quedó en el aire.',
          pro: { ok: 'Evitas un mensaje incómodo.', risk: 'El silencio con una finalista que ya vivió un mal momento en tu proceso pesa el doble.' },
          kusi: ['triste', 'Patricia esperaba tu mensaje.'] } },
    ],
    rules: [[BP, 'Mantén informados a los finalistas con fechas reales; avisa el «no» cuando la oferta esté aceptada.'], [POL, 'A todo postulante entrevistado se le responde.']],
    mirada: {
      ve: 'Entre la terna y la oferta hay unos días en que los finalistas no saben nada. Una profesional no les miente ni los deja en silencio: les dice la verdad posible, que es una fecha. Esa fecha, cumplida, vale más que cualquier frase amable.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Hoy', 'Terna enviada'], ['Mañana', 'Oferta y respuesta a todas'], ['Miércoles', 'Ingreso'], ['Viernes', 'Inventario']] },
    },
  },
];
