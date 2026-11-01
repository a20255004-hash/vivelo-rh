// Reclutador/a de selección masiva · Capítulo 5 · «Los referidos» · Semana 2, jueves.
// Hilo del mes: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales: consentimiento del titular, finalidad y derechos de acceso y cancelación
//   (ya citada en el capítulo 1).
// - Ley 26771 y su reglamento (D.S. 021-2000-PCM): la prohibición de nepotismo rige para la contratación en el sector público;
//   no es una prohibición general ni se aplica a empleadores privados.
//   https://www.ana.gob.pe/sites/default/files/archivos/gestion-compartida/decreto_supremo_021-2000-pcm_0_0.pdf
//   https://lpderecho.pe/tener-familiares-misma-entidad-publica-no-siempre-sea-considerado-nepotismo/
// - Ley 26772, modificada por la Ley 27270 (oferta de empleo sin requisitos discriminatorios): https://faolex.fao.org/docs/pdf/per201903.pdf

export const CAP = {
  n: 5, titulo: 'Los referidos', dia: 'Semana 2, jueves', foto: 'assets/foto/equipo-rojo.webp',
  lugar: 'Contacta Perú · Cercado de Lima',
  inicio: '08:20', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves. El lunes lanzaste el programa de referidos en el piso de operaciones. Hoy hay 64 nombres en la lista… y muchos apellidos se repiten.', boton: 'Abrir la lista de referidos',
  kusi: 'Los referidos son el mejor canal… si tienen reglas claras. ¡Dale!',
  lead: 'Revisaste la lista de referidos, respondiste a alguien que no sabía de dónde salió su número, pusiste reglas al bono, se lo explicaste al piso y mediste qué canal trae a la gente que se queda.',
  reflexion: '¿Qué diferencia hay entre recomendar a alguien y meterlo por la ventana?',
  siguiente: { n: 6, titulo: 'La capacitación inicial', dia: 'Semana 3, martes' },
};

export const CARTERA = [
  { id: 'lista', p: 'Lista de referidos', j: 'Jessica · Reclutamiento', d: 0, e: '64 nombres sin revisar' },
  { id: 'datos', p: 'Reclamo por datos personales', j: 'Jessica · Reclutamiento', d: 0, e: 'Llamada entrante' },
  { id: 'walter', p: 'Referidos de Wálter Ccori', j: 'Wálter · Supervisor de piso', d: 0, e: '6 personas, 4 «primos»' },
  { id: 'reglas', p: 'Reglas del programa de referidos', j: 'Jessica · Reclutamiento', d: 0, e: 'No hay reglas escritas' },
  { id: 'canales', p: 'Medición de canales', j: 'Bruno · Operaciones', d: 1, e: 'Reporte del viernes' },
];

export const FUTURO = {
  lista_limpia: ['Revisaste la lista de referidos con criterio.', 'Los referidos llegarán a la capacitación con su consentimiento y su evaluación. Capítulo 6.'],
  lista_sucia: ['La lista de referidos pasó sin revisar.', 'Alguien que no sabía que postuló reclamará en el capítulo 6.'],
  datos_honestos: ['Le explicaste a la persona de dónde salió su número y borraste sus datos cuando lo pidió.', 'Jessica cambiará el protocolo de bases de datos. Capítulo 6.'],
  datos_mentira: ['Mentiste sobre el origen de un número.', 'La persona escribió al correo de la empresa. Capítulo 6.'],
  walter_misma_valla: ['Los referidos de Wálter pasaron por la misma simulación.', 'Dos de sus primos aprobaron. Wálter lo recordará en el capítulo 7.'],
  walter_directo: ['Los referidos de Wálter entraron sin simulación.', 'En el capítulo 6, tres no volverán al segundo día.'],
  walter_prohibido: ['Prohibiste los referidos familiares.', 'Wálter dejará de recomendar a nadie. Capítulo 7.'],
  reglas_buenas: ['El bono se paga a los 30 días y todos pasan la misma evaluación.', 'Los referidos tendrán la mejor retención del mes. Capítulo 9.'],
  reglas_debiles: ['El programa de referidos quedó con reglas débiles.', 'Aparecerán más «primos» en el capítulo 7.'],
  piso_informado: ['Explicaste las reglas de referidos en el grupo del piso.', 'Los asesores pedirán permiso antes de pasar números. Capítulo 6.'],
  mide_retencion: ['Mediste los canales por retención, no por volumen.', 'El reporte de retención del capítulo 9 tendrá datos reales.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  alexandra: { n: 'Alexandra Rivas', sub: 'Postulante', who: 'alexandra' },
  asesores: { n: 'Asesores Contacta · Piso 3', sub: '212 participantes', c: '#00838F' },
  walter: { n: 'Wálter Ccori', sub: 'Supervisor de piso', c: '#6D4C41' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Postulante', c: '#C2185B' },
};

export const WSP = [
  { chat: 'grupo', t: '08:22', de: 'Jessica', txt: '64 referidos en tres días 🔥 Pero antes de llamar a nadie, revisamos la lista. Café pasado en la cocina.' },
  { chat: 'walter', t: '08:50', de: 'Wálter', txt: 'Señorita, a las 11 le llevo a mis seis. Gente seria, de confianza. Yo respondo.' },
  { chat: 'fiorella', t: '10:40', de: 'Fiorella', txt: 'Hola 😊 Le pasé su contacto a mi prima Daniela. Ella sí es buena hablando. Le dije que pida permiso antes, como usted dijo.', si: 'rechazo_cuidado' },
  { chat: 'alexandra', t: '12:30', de: 'Alexandra', txt: 'Señorita, me llegó su mensaje. ¡Gracias, gracias! El martes estoy ahí con mi constancia del CEBA 😭🙏', si: 'alexandra_excepcion' },
  { chat: 'alexandra', t: '12:30', de: 'Alexandra', txt: 'Hola. Quería avisarle que me contrataron en otro call, en Jesús María. No pedían secundaria completa. Gracias por todo.', si: 'alexandra_descartada' },
  { chat: 'bruno', t: '17:55', de: 'Bruno', txt: 'Wálter me dice que le trabaste a sus primos. ¿Qué pasó?', si: 'walter_misma_valla' },
  { chat: 'bruno', t: '17:55', de: 'Bruno', txt: 'Wálter está furioso: dice que le prohibiste recomendar a su familia. Explícame.', si: 'walter_prohibido' },
];

export const CORREOS = [
  { t: '12:10', de: 'Patricia Llosa · Banco Sur', para: 'Reclutadora masiva', asunto: 'RE: Excepción · Alexandra Rivas', html: '<p>Revisamos la evidencia. <b>Aceptamos la excepción</b> con dos condiciones: constancia de matrícula vigente y certificado de secundaria antes de marzo.</p><p>Y algo más: <b>apliquen el mismo criterio a cualquier postulante en un CEBA</b>, no solo a ella. El requisito era para asegurar comprensión de lectura; su simulación lo mide mejor.</p><p>Patricia</p>', si: 'alexandra_excepcion' },
  { t: '15:20', de: 'Jessica Torres', para: 'Reclutadora masiva', asunto: 'Lo que pasó con los referidos en 2024', html: '<p>Para que no repitamos la historia: en 2024 pagamos S/ 100 por referido <b>al firmar</b>. Llegaron 90 referidos y 41 renunciaron en la primera semana. Hubo un asesor que cobró ocho bonos.</p><p>Esta vez, que las reglas protejan el canal. Jessica</p>' },
];

export const QUIZ = [
  { q: 'Un asesor manda el CV de su vecina sin que ella sepa. ¿Qué pasa con la Ley 29733?', ops: ['Nada, es un favor', 'Se tratan datos sin el consentimiento de la titular', 'Es legal si es por WhatsApp', 'Solo importa si la contratan'], ok: 1, por: 'Para usar datos personales se necesita el consentimiento de su titular y una finalidad clara.' },
  { q: '¿La Ley 26771 prohíbe a una empresa privada contratar a familiares de sus trabajadores?', ops: ['Sí, siempre', 'No: rige para la contratación en el sector público', 'Solo en Lima', 'Solo a los hermanos'], ok: 1, por: 'La Ley 26771 regula el nepotismo en el sector público. En una empresa privada se maneja con políticas internas, como evitar que alguien supervise a su familiar.' },
  { q: '¿Cuándo conviene pagar el bono por referido?', ops: ['Al firmar el contrato', 'Cuando el referido cumple un tiempo en el puesto', 'Antes de la evaluación', 'Nunca'], ok: 1, por: 'Pagarlo al firmar premia el volumen; pagarlo después premia que la persona se quede.' },
  { q: 'Alguien llama y pregunta de dónde sacaste su número. ¿Qué haces?', ops: ['Le dices que de un portal, aunque no sea cierto', 'Le dices la verdad, te disculpas si corresponde y eliminas sus datos si lo pide', 'Cuelgas', 'Le pides que llame otro día'], ok: 1, por: 'El titular puede saber cómo se obtuvieron sus datos y pedir que se eliminen.' },
  { q: 'Para medir un canal de reclutamiento, ¿qué indicador importa más?', ops: ['Cuántas postulaciones trae', 'Cuántos contratados se quedan después del primer mes', 'Cuántos «me gusta» tiene', 'Cuánto cuesta el aviso'], ok: 1, por: 'Un canal vale por la gente que se queda, no por el volumen que trae.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:35', ch: 'documento', who: null, titulo: 'La lista de los 64', banner: 'assets/foto2/revisan.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>La lista de referidos es una pestaña nueva del Excel, «REFERIDOS (no borrar)». La armaron los supervisores con lo que les pasaron los asesores por WhatsApp. ${F.has('sabe_referidos') ? 'Recuerdas lo que te contó Jessica en el menú: en 2024 salió mal.' : ''}</p><p>Antes de llamar a nadie, <mark class="clave">revisa qué no puede pasar así</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que hay que corregir antes de llamar a los referidos.',
    doc: { t: 'Referidos · Campaña Cobranzas Banco Sur', sub: 'Contacta Perú · al jueves de la semana 2' },
    lines: [
      { id: 'ccori', t: 'Wálter Ccori, supervisor, refiere a 6 personas; 4 se apellidan Ccori.', duda: 'Que sean familiares no es ilegal en una empresa privada. Lo que importa es que pasen la misma evaluación.' },
      { id: 'hermano', t: 'Joel Ccori, hermano de Wálter, iría a su mismo equipo, bajo su supervisión.', bad: BP, why: 'Supervisar a un familiar crea un conflicto de interés: quién evalúa, quién sanciona, quién da los turnos.' },
      { id: 'bono', t: 'Bono de S/ 100 al asesor el día que su referido firma contrato.', bad: BP, why: 'Premia el volumen y no la permanencia: fue lo que falló en 2024.' },
      { id: 'vecina', t: 'Lucía Paz mandó el CV de su vecina «para darle la sorpresa»; la vecina no sabe que postuló.', bad: LEY, why: 'Se están usando datos personales sin el consentimiento de su titular (Ley 29733).' },
      { id: 'menor', t: 'Renato Quispe, 17 años: «cumple 18 en enero».', bad: BP, why: 'La convocatoria es para mayores de edad: hoy no puede entrar al proceso.' },
      { id: 'ex', t: 'Yesenia Ríos, ex asesora de Contacta; renunció en 2025 porque se mudó.' },
      { id: 'kiara', t: 'Kiara Llanos, que no pasó la simulación del martes, vuelve como referida de un asesor.', duda: 'Puede volver a postular, pero pasa por la misma simulación que todos.' },
      { id: 'directo', t: 'Nota del supervisor: «Los referidos pasan directo a la capacitación».', bad: BP, why: 'Un referido trae confianza, no la evaluación hecha.' },
      { id: 'permiso', t: 'Daniela Gamarra, prima de una postulante, escribió ella misma para dar su número.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'La lista sale tal cual. Esta tarde alguien va a recibir una llamada por un trabajo al que nunca postuló.' : `Corriges ${hitsLey + (hitsBp || 0)} puntos. De 64 referidos, 51 pueden entrar al proceso, y todos con su permiso.`,
      flags: [missLey ? 'lista_sucia' : 'lista_limpia'], rel: { jessica: missLey ? 0 : 1 },
      cartera: { lista: missLey ? 'Lista sin revisar' : '51 referidos con consentimiento y misma evaluación' },
      pro: { ok: 'Un referido es una recomendación, no un pase directo.', risk: 'Un dato sin consentimiento puede terminar en un reclamo ante la Autoridad de Protección de Datos Personales.', info: 'Pídele a cada asesor que el referido escriba él mismo al número de reclutamiento.' },
      kusi: missLey ? ['preocupado', 'Esa lista tiene sorpresas…'] : ['celebra', '¡Referidos con reglas!'],
    }),
    rules: [[LEY, 'Ley 29733: los datos personales se usan con el consentimiento de su titular.'], [BP, 'Todos los referidos pasan la misma evaluación que los demás postulantes.']],
    mirada: {
      ve: 'Los referidos suelen ser el canal que más gente buena trae, porque quien recomienda conoce el trabajo y a la persona. Pero sin reglas se convierte en un atajo: datos sin permiso, familiares que se supervisan entre sí y bonos que premian llenar una lista.',
      visual: { tipo: 'embudo', titulo: 'La lista de referidos', niveles: [['Nombres en la lista', 64], ['Con consentimiento', 56], ['Mayores de edad', 55], ['Sin conflicto de interés', 51]] },
    },
  },
  {
    id: 'f2', t: '09:45', ch: 'llamada', who: null, titulo: '«¿De dónde sacó mi número?»', banner: 'assets/esc/alarma.webp', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => F.has('base_comprada')
      ? `<p>Suena la central. Es Renzo Valdivia, de Surquillo, y está molesto: «Ayer me llamó una chica de Contacta por un trabajo de cobranzas. <mark class="clave">Yo nunca postulé ahí. ¿De dónde sacaron mi número?</mark>».</p><p>Buscas su nombre: está en la base de 5,000 CV que compraste el lunes de la primera semana.</p>`
      : `<p>Suena la central. Es Carmen Torres, la vecina de una asesora: «Ayer me llamaron de Contacta por un trabajo. <mark class="clave">Yo nunca postulé. ¿De dónde sacaron mi número?</mark>».</p><p>Buscas su nombre: está en la lista de referidos, sin ninguna nota de permiso.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle la verdad sobre el origen de su número, disculparte, preguntarle si le interesa el puesto y, si no, eliminar sus datos y confirmárselo por escrito.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 2 }, rel: { jessica: 1 }, flags: ['datos_honestos'], cartera: { datos: 'Origen explicado y datos eliminados' },
          out: 'Del otro lado hay un silencio. «Bueno… gracias por no mentirme.» Pide que lo borren. Le mandas un correo de confirmación y le cuentas a Jessica lo que pasó.',
          pro: { ok: 'Respetas el derecho de la persona a saber de dónde salieron sus datos y a pedir que se eliminen.', risk: 'Reconocer el error deja una prueba escrita: por eso hay que corregir el origen, no solo este caso.', info: 'Revisa cuántas personas más de esa lista están en la misma situación.' },
          kusi: ['celebra', 'La verdad desactiva el enojo.'] } },
      { id: 'b', label: 'Decirle que su número salió de un portal de empleos: es probable que haya postulado alguna vez y así la conversación no escala.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -4 }, flags: ['datos_mentira'], cartera: { datos: 'Se dio un origen falso' },
          out: '«¿Qué portal? Dígame cuál.» No sabes qué responder. La persona cuelga y escribe al correo de la empresa.',
          pro: { ok: 'Querías calmarla.', risk: 'Mentir sobre el origen de un dato agrava el problema: ahora hay dos faltas.' },
          kusi: ['indignado', '¿Qué portal? Ni tú sabes…'] } },
      { id: 'c', label: 'Pedirle disculpas, decirle que vas a revisar y eliminar su número sin más explicaciones: así cortas el problema rápido.',
        res: { q: 'aceptable', fx: { etica: 1, cumplimiento: 1 }, cartera: { datos: 'Dato eliminado sin explicar el origen' },
          out: 'Borras la fila. La persona no sabe de dónde salió su número ni si de verdad lo borraste. Y el origen sigue ahí, con otros nombres.',
          pro: { ok: 'Eliminas el dato rápido.', risk: 'No respondes lo que te preguntó, y el problema de origen sigue.' },
          kusi: ['pensando', 'Borrar está bien… ¿y la pregunta?'] } },
    ],
    rules: [[LEY, 'Ley 29733: el titular tiene derecho a saber cómo se obtuvieron sus datos y a pedir su cancelación.']],
    mirada: {
      ve: 'En reclutamiento masivo se manejan miles de números de teléfono. Cada uno es el dato de una persona que tiene derecho a saber de dónde salió y a pedir que lo borren. Una base comprada o un CV pasado sin permiso tarde o temprano llaman de vuelta.',
      visual: { tipo: 'cambio', titulo: 'De esquivar a responder', pares: [['«Salió de un portal»', 'El origen real'], ['Colgar rápido', 'Preguntar si le interesa'], ['Borrar en silencio', 'Borrar y confirmarlo por escrito']] },
    },
  },
  {
    id: 'f3', t: '11:05', ch: 'presencial', who: null, titulo: 'Los seis de Wálter', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Recepción del piso 4', show: ['calidad', 'personas', 'confianza'],
    body: () => `<p>Wálter Ccori tiene 46 años, llegó de Huancavelica a los 19 y lleva doce años en Contacta. Su equipo es el que menos falta. Trae a seis personas con ropa de domingo. Mientras hablan, contesta una llamada de su mamá en quechua: «Allinmi, mamay».</p><p>«Señorita, estos chicos son mi familia y mis vecinos. Yo respondo por ellos. <mark class="clave">Pásalos directo a la capacitación</mark>: los de Facebook se van; los míos se quedan.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle y explicarle que los seis pasan hoy la misma simulación que todos; su hermano, si aprueba, va a otro equipo. El bono se paga cuando cumplan 30 días.',
        res: { q: 'buena', fx: { calidad: 5, etica: 3, tiempo: -2 }, flags: ['walter_misma_valla'], cartera: { walter: 'Misma simulación; hermano a otro equipo' },
          out: 'Wálter frunce el ceño, pero se queda a mirar. Aprueban cuatro de seis, incluido su hermano Joel. «Ya. Al menos nadie podrá decir que entraron por mí.»',
          pro: { ok: 'Valoras el canal y lo proteges con la misma valla para todos.', risk: 'Wálter se siente desconfiado: tendrás que reconocer en público que sus referidos son buenos.', info: 'Si sus referidos se quedan más, que se sepa: es el mejor argumento para el programa.' },
          kusi: ['animo', 'Confianza sí, atajo no.'] } },
      { id: 'b', label: 'Pasarlos directo: su equipo es el que menos falta, los referidos se quedan más y la meta lo necesita.',
        res: { q: 'riesgosa', fx: { calidad: -4, tiempo: 3, etica: -2 }, flags: ['walter_directo'], cartera: { walter: '6 a la capacitación sin evaluar' },
          out: 'Wálter te da la mano con fuerza. Al mediodía, otros dos supervisores te escriben: «¿Los míos también pasan directo?».',
          pro: { ok: 'Confías en el criterio de un supervisor con buenos resultados.', risk: 'Cuando la excepción es para uno, al día siguiente la piden todos.' },
          kusi: ['preocupado', 'Una puerta abierta… para todos.'] } },
      { id: 'c', label: 'Decirle que desde hoy no se aceptan familiares de supervisores, para evitar cualquier sospecha de favoritismo.',
        res: { q: 'riesgosa', fx: { personas: -3, calidad: -2, confianza: -2 }, flags: ['walter_prohibido'], cartera: { walter: 'Familiares de supervisores prohibidos' },
          out: 'Wálter se pone serio y se va con los seis. No hay ninguna ley que prohíba contratar a sus familiares en una empresa privada. Acabas de cerrar tu mejor canal.',
          pro: { ok: 'Quieres evitar el favoritismo.', risk: 'Prohibir por parentesco castiga a personas que podrían ser buenas y no resuelve el conflicto real: la supervisión directa.' },
          kusi: ['triste', 'Cortaste el canal entero…'] } },
    ],
    rules: [[LEY, 'Ley 26771: la prohibición de nepotismo rige para la contratación en el sector público.'], [BP, 'En una empresa privada, el riesgo con los familiares es la supervisión directa: se evita con reglas, no con prohibiciones.']],
    mirada: {
      ve: 'Wálter tiene razón en algo: los referidos de un buen supervisor suelen quedarse. Y también se equivoca en algo: que él responda por ellos no reemplaza la evaluación. El equilibrio está en recibir la recomendación y aplicar la misma valla.',
      visual: { tipo: 'balanza', a: { t: 'Lo que trae Wálter', items: ['Gente que conoce el trabajo', 'Compromiso con quien la recomendó', 'Su equipo es el que menos falta'] }, b: { t: 'Lo que hay que cuidar', items: ['Misma evaluación para todos', 'Nadie supervisa a su familiar', 'Que otros no pidan la misma excepción'] } },
      normas: [{ ley: 'Ley 26771 y su reglamento, D.S. 021-2000-PCM', dice: 'Prohíben a los funcionarios y servidores públicos con facultad de nombramiento o contratación ejercerla a favor de sus parientes en su entidad. No es una prohibición general ni rige para empresas privadas.', practica: 'En Contacta no hay una ley que impida contratar a los primos de Wálter; sí hay una buena práctica: que nadie evalúe ni supervise a su familiar.' }],
    },
  },
  {
    id: 'f4', t: '13:10', ch: 'documento', who: null, titulo: 'Las reglas del bono', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>Almuerzas una papa rellena en el escritorio mientras escribes las reglas del programa. Jessica te dio una condición: <mark class="clave">tres reglas, cortas, que se entiendan en el piso</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres reglas del programa de referidos.', boton: 'Publicar estas reglas', resumen: 'Elegiste',
    cols: ['Regla', 'Qué cuida'],
    rows: [
      { id: 'dias30', cells: ['El bono se paga cuando el referido cumple 30 días en piso', 'Que se premie la permanencia'] },
      { id: 'valla', cells: ['Todos los referidos pasan la misma evaluación', 'Que nadie entre por atajo'] },
      { id: 'permiso', cells: ['El referido escribe él mismo al número de reclutamiento', 'El consentimiento de sus datos'] },
      { id: 'equipo', cells: ['Nadie supervisa directamente a su familiar', 'Que no haya conflicto de interés'] },
      { id: 'firma', cells: ['El bono se paga el día que el referido firma', 'Que los asesores se animen rápido'] },
      { id: 'directo', cells: ['El referido de un supervisor pasa directo a la capacitación', 'Que los supervisores se involucren'] },
    ],
    score: { dias30: 3, valla: 3, permiso: 2, equipo: 2, firma: -3, directo: -3 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: picks.includes('permiso') ? 3 : 0 },
        flags: [q === 'riesgosa' ? 'reglas_debiles' : 'reglas_buenas'], rel: { jessica: q === 'buena' ? 1 : 0 },
        cartera: { reglas: picks.map(p => ({ dias30: 'Bono a los 30 días', valla: 'Misma evaluación', permiso: 'El referido escribe', equipo: 'Sin supervisar familiares', firma: 'Bono al firmar', directo: 'Directo a capacitación' })[p]).join(' · ') },
        out: q === 'buena' ? 'Jessica lo lee dos veces: «Cortito y sin trampa. Esto lo entiende hasta Wálter… y lo va a defender».' : q === 'aceptable' ? 'Jessica asiente: «Va. Pero piensa en qué regla nos faltó en 2024».' : 'Jessica te muestra su correo de las 15:20: «Esto ya lo vivimos».',
        pro: { ok: 'Las buenas reglas premian que la persona se quede y que entre con su permiso.', risk: 'Un bono al firmar es dinero por llenar una lista.', info: 'Publica también cuántos bonos se pagaron cada mes: la transparencia evita sospechas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Reglas que cuidan el canal!' : '¿Qué premia esta regla?'],
      };
    },
    rules: [[BP, 'Paga el bono por referido cuando la persona se queda, no cuando firma.']],
    mirada: {
      ve: 'Un programa de referidos es un incentivo: la gente hará lo que la regla premie. Si premias la firma, tendrás firmas; si premias los 30 días, tendrás gente que se queda y asesores que recomiendan con cuidado.',
      visual: { tipo: 'cambio', titulo: 'De 2024 a hoy', pares: [['Bono al firmar', 'Bono a los 30 días'], ['Directo a capacitación', 'Misma evaluación'], ['CV pasado por WhatsApp', 'El referido escribe él mismo']] },
    },
  },
  {
    id: 'f5', t: '15:40', ch: 'whatsapp', who: null, titulo: 'Para el piso 3', banner: 'assets/foto2/aplausos-verde.webp', show: ['personas', 'cumplimiento', 'confianza'],
    body: () => `<p>Jessica te agrega como administradora del grupo «Asesores Contacta · Piso 3», con 212 personas. Lo que escribas lo van a leer en el break de las 4, entre galletas de soda y café de máquina. <mark class="clave">Tiene que entenderse en un solo vistazo</mark>.</p>`,
    type: 'compose', enviaA: 'asesores', para: 'Para: Asesores Contacta · Piso 3', boton: 'Publicar en el grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Apertura', ops: [
        { id: 'a1', t: '¡Hola, equipo! Gracias: en tres días nos recomendaron a 64 personas. 🙌', ok: true, por: 'Reconoce lo que ya hicieron.' },
        { id: 'a2', t: 'Se les recuerda que los referidos tienen nuevas condiciones.', ok: false, por: 'Suena a sanción y no a programa.' },
      ] },
      { id: 'como', t: 'Cómo recomendar', ops: [
        { id: 'c1', t: 'Para recomendar a alguien, pídele que escriba él mismo al 987 654 321 y diga tu nombre.', ok: true, por: 'Asegura el consentimiento y es fácil.' },
        { id: 'c2', t: 'Mándenme por aquí los números de sus conocidos.', ok: false, por: 'Así llegan datos sin permiso.' },
      ] },
      { id: 'proceso', t: 'El proceso', ops: [
        { id: 'p1', t: 'Todos pasan la misma simulación de llamada de 20 minutos. Si aprueban, van a un equipo distinto al de su familiar.', ok: true, por: 'Claro y sin excepciones.' },
        { id: 'p2', t: 'Si es su familiar, lo vemos con cariño.', ok: false, por: 'Promete un trato distinto.' },
      ] },
      { id: 'bono', t: 'El bono', ops: [
        { id: 'b1', t: 'Tu bono se paga cuando tu referido cumple 30 días en piso. ¡Recomienda a quien sabes que se va a quedar!', ok: true, por: 'Explica el porqué de la regla.' },
        { id: 'b2', t: 'Bono garantizado por cada referido.', ok: false, por: 'Falso y genera reclamos.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'c1', 'p1', 'b1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, cumplimiento: q === 'buena' ? 3 : -1 },
        flags: q === 'buena' ? ['piso_informado'] : [],
        out: q === 'buena' ? 'En diez minutos hay 40 pulgares. Un asesor pregunta: «¿Y si mi referido entra y se va a los 20 días?». Le respondes: «Ese no cuenta, por eso son 30».' : 'Llegan diez números de teléfono por privado en la siguiente hora.',
        pro: { ok: 'Un mensaje claro en el canal del piso evita los malentendidos de los pasillos.', info: 'Fija el mensaje en el grupo: los asesores nuevos lo verán al entrar.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Claro como el agua!' : 'Uy, llegaron números sin permiso…'],
      };
    },
    rules: [[LEY, 'Ley 29733: el referido da sus propios datos; nadie los entrega por él.']],
    mirada: {
      ve: 'Las reglas que no se comunican no existen. En un piso de 212 personas, el grupo de WhatsApp es el tablero de anuncios: un mensaje corto, que explique el porqué, vale más que un correo que nadie abre.',
      visual: { tipo: 'mensaje', titulo: 'Programa de referidos', txt: '¡Hola, equipo! Gracias: en tres días nos recomendaron a 64 personas. 🙌 Para recomendar a alguien, pídele que escriba él mismo al 987 654 321 y diga tu nombre. Todos pasan la misma simulación de llamada de 20 minutos. Si aprueban, van a un equipo distinto al de su familiar. Tu bono se paga cuando tu referido cumple 30 días en piso. ¡Recomienda a quien sabes que se va a quedar!' },
    },
  },
  {
    id: 'f6', t: '17:05', ch: 'sistema', who: null, titulo: 'El tablero de canales', banner: 'assets/foto2/celebra-laptop.webp', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>Mañana Bruno quiere un reporte de canales. Abres el tablero que armaste con datos de la última campaña y de estas dos semanas. ${F.has('base_comprada') ? 'La fila «base comprada» está en rojo.' : ''}</p><p>Solo tienes tiempo para revisar dos indicadores a fondo. <mark class="clave">Elige los que de verdad dicen qué canal funciona</mark>.</p>`,
    type: 'ask', max: 2, prompt: '¿Qué dos indicadores revisas?',
    opts: [
      { id: 'postula', label: 'Postulaciones por canal', info: 'Portal pagado: 900. Bolsa pública: 210. Ferias: 140. Referidos: 64. El portal gana por lejos… en volumen.' },
      { id: 'aprueba', label: 'Aprobados por cada 100 postulantes', info: 'Referidos: 38. Ferias: 25. Bolsa pública: 15. Portal pagado: 12. Los referidos aprueban tres veces más que el portal.' },
      { id: 'queda', label: 'Personas que siguen a los 30 días (campaña pasada)', info: 'Referidos con bono al firmar: 54 %. Ferias cercanas: 78 %. Portal pagado: 61 %. Ojo: los referidos de 2024 fallaron por la regla del bono, no por el canal.' },
      { id: 'costo', label: 'Costo del aviso por canal', info: 'El portal cuesta S/ 1,800 al mes. Las ferias, el pasaje del equipo. Los referidos, el bono. Sin saber cuántos se quedan, el costo no dice mucho.' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('aprueba') || picks.includes('queda') ? 4 : 1, confianza: 2 },
      flags: picks.includes('queda') ? ['mide_retencion'] : [],
      out: picks.includes('queda') ? 'Escribes en el reporte: «Medir por los que se quedan». Las ferias cercanas ganan, y los referidos, con la regla nueva, pueden ganar.' : picks.includes('postula') ? 'Tu reporte dice que el portal es el mejor canal. Tiene más gente; no necesariamente mejor gente.' : 'Te llevas un dato que el volumen escondía.',
      kusi: ['curioso', 'El canal que más trae no siempre es el que más deja.'],
    }),
    mirada: {
      ve: 'Medir canales por volumen es la trampa más común del reclutamiento masivo. El indicador que importa está al final del embudo: cuántos aprueban y cuántos siguen trabajando un mes después.',
      visual: { tipo: 'matriz', x: 'Volumen', y: 'Aprobados por cada 100', cuadrantes: ['Cuídalo', 'Ideal', 'Complementa', 'Revísalo'], items: [['Referidos', .2, .9], ['Ferias', .3, .6], ['Bolsa pública', .45, .35], ['Portal pagado', .9, .25]] },
    },
  },
  {
    id: 'f7', t: '18:35', ch: 'whatsapp', who: 'bruno', titulo: 'Bruno pregunta por Wálter', banner: 'assets/esc/decide.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>${F.has('walter_directo') ? 'Bruno te escribe contento: «Wálter me dijo que le diste una mano. Así me gusta». Debajo, otro mensaje.' : 'Bruno te escribe por lo de Wálter.'} Estás en el paradero de la avenida Grau, el bus no llega y el cielo de Lima se pone gris.</p>`,
    chat: ['Ya tengo 34 aprobados para la capacitación del martes. ¿Con los referidos llegamos a 120 o no?'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responder con el número real y lo que falta: cuántos aprobados hay, cuántos se esperan el viernes y qué aporta el canal de referidos.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { bruno: 1 },
          envia: ['bruno', 'Bruno: hoy tenemos 34 aprobados. Mañana evaluamos 70 citados y esperamos unos 15 más. Los referidos aprueban tres veces más que el portal, así que el lunes priorizamos esa lista. Para 120 todavía faltan dos evaluaciones grandes.'],
          out: 'Bruno responde: «Dos más. Ok. Que sean buenas». No está feliz, pero sabe dónde está parado.', kusi: ['celebra', 'Número claro, plan claro.'] } },
      { id: 'b', label: 'Decirle que sí, que con los referidos se llega, para que deje de presionar al equipo esta semana.',
        res: { q: 'riesgosa', fx: { confianza: 1, calidad: -2 }, rel: { bruno: 1 },
          envia: ['bruno', 'Sí, con los referidos llegamos 👍'],
          out: 'Bruno le reenvía tu mensaje a Patricia, de Banco Sur. Ahora es una promesa por escrito.', kusi: ['preocupado', 'Eso ya llegó al banco…'] } },
    ],
    mirada: { ve: 'A mitad de campaña, la tentación es decir lo que el gerente quiere oír. Pero un número optimista se reenvía al cliente y se convierte en compromiso. El número real, con un plan, es lo único que se sostiene el día 21.' },
  },
];
