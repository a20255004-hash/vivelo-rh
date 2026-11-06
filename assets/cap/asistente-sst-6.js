// Asistente de SST · Capítulo 6 · «La investigación» · Semana 2, lunes.
// Hilo de las dos semanas: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas:
// - Ley 29783, art. 58 (investigación de daños): el empleador investiga cuando se producen daños a la salud de los
//   trabajadores o hay indicios de que las medidas de prevención son insuficientes, para detectar las causas y adoptar
//   medidas correctivas. Guía que lo transcribe: https://modelo.pe/informe-de-investigacion-de-accidente-de-trabajo-causas-y-medidas-correctivas/
// - D.S. 005-2012-TR, art. 42: el comité (o supervisor) de SST participa en la investigación de los accidentes; art. 33:
//   el resultado se registra en el registro de accidentes. Guía: https://modelo.pe/procedimiento-de-investigacion-de-accidentes-de-trabajo/
// - Ley 29783: EPP y medios de protección a cargo del empleador (capítulos 1 y 3). Norma G.050: herramientas con sus protecciones.
//   https://buenaventura.com/wp-content/uploads/2024/10/NORMA-G.050-Seguridad-durante-la-construccion-DS-N°-010-2009.pdf

export const CAP = {
  n: 6, titulo: 'La investigación', dia: 'Semana 2, lunes', foto: 'assets/esc/lupa.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '06:50', fin: '18:30', cierreHora: '18:10',
  apertura: 'Lunes. La obra ya decidió que Jhonatan «se descuidó». Tú tienes un día para averiguar qué falló de verdad.', boton: 'Abrir la investigación',
  kusi: 'Investigar no es buscar culpables: es buscar lo que hay que cambiar. ¡Lupa en mano!',
  lead: 'Juntaste evidencias, escuchaste a Jhonatan, llamaste a los testigos, preguntaste cinco veces «¿por qué?», enfrentaste la confesión de Don Segundo y escribiste el informe.',
  reflexion: '¿Por qué «fue un descuido» es la respuesta más cómoda y la menos útil?',
  siguiente: { n: 7, titulo: 'El comité', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'investigacion', p: 'Investigación del accidente', j: 'Ingrid · SSOMA', d: 0, e: 'Informe para mañana' },
  { id: 'accidente', p: 'Jhonatan', j: 'Ingrid · SSOMA', d: 0, e: 'Descanso médico' },
  { id: 'herramientas', p: 'Amoladoras y guardas', j: 'Wilmer · Almacén', d: 0, e: 'Dos más sin guarda' },
  { id: 'piso12', p: 'Encofrado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Día 3 de 4 · vaciado el jueves' },
  { id: 'comite', p: 'Comité de SST', j: 'Marleny · Trabajadores', d: 0, e: 'Mañana a las 15:00' },
];

export const FUTURO = {
  causa_raiz: ['Tu investigación llegó al fondo: el plazo, la falta de amoladoras y una guarda que nadie repuso.', 'El comité la revisará mañana. Capítulo 7.'],
  segundo_verdad: ['Contaste la instrucción de Don Segundo sin convertirla en un castigo.', 'Don Segundo llega al comité sin esconderse. Capítulo 7.'],
  segundo_omitido: ['Sacaste del informe la instrucción de Don Segundo.', 'Marleny lo sabe por la cuadrilla y lo dirá en el comité. Capítulo 7.'],
  segundo_sancion: ['Recomendaste sancionar a Don Segundo.', 'Renzo lo usará para cerrar el tema sin cambiar nada. Capítulo 7.'],
  subcontrata_incluida: ['Incluiste a Encofrados del Norte en la investigación.', 'Elmer irá al comité. Capítulo 7.'],
  informe_solido: ['Tu informe tiene causas inmediatas, causas de fondo y medidas con responsable y fecha.', 'Es la base del acta del comité.'],
  comite_con_informe: ['Le pediste a Marleny que el informe sea el primer tema del comité.', 'Mañana se discute con todos. Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  jhonatan: { n: 'Jhonatan Ñique', sub: 'Ayudante de obra', who: 'jhonatan' },
  marleny: { n: 'Marleny Flores', sub: 'Representante en el comité', who: 'marleny' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
  elmer: { n: 'Elmer Chapoñán', sub: 'Capataz · Encofrados del Norte', c: '#8C3B2E' },
};

export const WSP = [
  { chat: 'grupo', t: '06:30', de: 'Ingrid', txt: 'Hoy das la alerta conmigo a las 7. Después, toda tuya la investigación. El informe va mañana al comité.' },
  { chat: 'jhonatan', t: '07:40', de: 'Jhonatan', txt: 'Ingeniera, voy a dejar mi certificado médico a las 8. ¿Puedo hablar con usted? 🙏', si: 'jhonatan_tranquilo' },
  { chat: 'renzo', t: '09:15', de: 'Renzo', txt: 'El cliente pregunta por el accidente. ¿Cuándo tenemos la conclusión? Ojalá corta.' },
  { chat: 'elmer', t: '10:50', de: 'Elmer', txt: 'Ingeniera, la amoladora grande es mía. No me vaya a meter en problemas, ah.' },
  { chat: 'marleny', t: '12:10', de: 'Marleny', txt: 'Ya confirmaron el comité para mañana a las 3 💪 Por fin.' },
];

export const CORREOS = [
  { t: '07:50', de: 'Ing. Renzo Cáceres', para: 'SSOMA Obra Chiclayo', asunto: 'Conclusión del evento del viernes', html: '<p>Equipo: para cerrar el tema con el cliente, propongo concluir que el evento se debió a un acto inseguro del trabajador y que la medida es reforzar la charla de uso de amoladora.</p><p>Renzo Cáceres · Residente de obra</p>' },
];

export const QUIZ = [
  { q: '¿Cuándo debe el empleador investigar según la Ley 29783?', ops: ['Solo si hay un fallecido', 'Cuando hay daños a la salud o indicios de que la prevención es insuficiente', 'Solo si lo pide SUNAFIL', 'Cuando el cliente lo exige'], ok: 1, por: 'El art. 58 de la Ley 29783 pide investigar para detectar las causas y adoptar medidas correctivas.' },
  { q: '¿Quién participa en la investigación de un accidente, además del empleador?', ops: ['Nadie más', 'El comité o supervisor de SST', 'Solo el cliente', 'La familia del trabajador'], ok: 1, por: 'El reglamento de la Ley 29783 (art. 42) asigna al comité de SST participar en la investigación de los accidentes.' },
  { q: '«Fue un descuido del trabajador» es…', ops: ['Una causa raíz', 'Una descripción del acto que no explica por qué ocurrió', 'La conclusión ideal', 'Lo que pide la ley'], ok: 1, por: 'Hay que seguir preguntando por qué: qué condiciones, presiones o faltas hicieron posible ese acto.' },
  { q: 'Una buena medida correctiva tiene…', ops: ['Un responsable y una fecha', 'Una amonestación', 'Una foto', 'Muchas palabras'], ok: 0, por: 'Sin responsable ni plazo, una medida se queda en el papel.' },
  { q: 'En la técnica de los cinco porqués, ¿dónde termina la pregunta?', ops: ['En el nombre de quien se equivocó', 'En una causa que la organización puede cambiar', 'Siempre en la quinta pregunta exacta', 'En el primer «porque sí»'], ok: 1, por: 'Se pregunta hasta llegar a algo que la empresa puede corregir, no a un culpable.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '07:20', ch: 'documento', who: null, titulo: 'Lo que queda del viernes', banner: 'assets/esc/lupa.webp', lugar: 'Almacén y piso 3', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Terminada la alerta, la obra vuelve al ruido. ${F.has('alerta_sin_culpa') ? 'Un encofrador te dijo al salir: «Bien que no lo hayan quemado al chibolo».' : 'Varios se fueron comentando que «el chibolo se descuidó».'} ${F.has('escena_preservada') ? 'La amoladora del viernes está en una bolsa, con tu firma en la cinta, en un estante del almacén.' : 'La amoladora del viernes ya volvió a usarse: alguien la limpió y la dejó en el almacén.'}</p><p>Tienes la mañana. <mark class="clave">Solo alcanzas a revisar a fondo dos fuentes antes de las entrevistas</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos evidencias que revisarás primero.', boton: 'Revisar estas dos', resumen: 'Revisaste',
    cols: ['Evidencia', 'Qué podría decirte'],
    rows: [
      { id: 'amoladora', cells: ['La amoladora y el disco del accidente', 'Qué herramienta era, qué disco tenía y si tenía guarda'] },
      { id: 'cuaderno', cells: ['El cuaderno de préstamo de herramientas del almacén', 'Quién sacó qué herramienta y a qué hora'] },
      { id: 'wsp', cells: ['El mensaje de Don Segundo del viernes a las 9:40', 'La presión por terminar las platinas'] },
      { id: 'certificado', cells: ['El certificado médico de Jhonatan', 'Cuántos días de descanso tiene'] },
      { id: 'charlas', cells: ['La lista de asistencia a la charla de amoladora del lunes pasado', 'Si Jhonatan firmó'] },
    ],
    score: { amoladora: 3, cuaderno: 3, wsp: 2, certificado: 0, charlas: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: -1 },
        flags: picks.includes('cuaderno') ? ['cuaderno_visto'] : [], cartera: { investigacion: picks.includes('amoladora') ? 'Amoladora de 4½” con disco de 7” y sin guarda' : 'Evidencias parciales' },
        out: picks.includes('amoladora') && picks.includes('cuaderno') ? 'La amoladora es de 4½”, pero tiene montado un disco de 7” que solo entra si se saca la guarda. En el cuaderno: «9:25 · amoladora de Elmer · la saca J. Ñique por orden de D. Segundo». Ya no es un descuido: es una cadena.' : picks.includes('charlas') ? 'Jhonatan firmó la charla del lunes. Eso prueba que asistió, no que el viernes tuviera la herramienta correcta.' : 'Encuentras datos útiles, pero todavía no sabes por qué Jhonatan tenía en la mano una amoladora distinta a la de las 7:15.',
        pro: { ok: 'Las evidencias físicas y los registros cuentan lo que los testigos olvidan o callan.', risk: 'Que haya firmado una charla no explica el accidente: es la prueba favorita de quien quiere culpar.', info: 'Anota la hora de cada evidencia: la cronología es la columna de la investigación.' },
        kusi: [q === 'buena' ? 'celebra' : 'curioso', q === 'buena' ? '¡La cadena empieza a aparecer!' : '¿Qué cambió entre las 7:15 y las 10:20?'],
      };
    },
    rules: [[BP, 'Antes de entrevistar, revisa las evidencias físicas y los registros: te dicen qué preguntar.']],
    mirada: {
      ve: 'Una investigación seria empieza por los hechos que no dependen de la memoria de nadie: la herramienta, los registros y los mensajes. Con eso, las entrevistas ya no son para buscar culpables, sino para entender.',
      visual: { tipo: 'linea', titulo: 'Lo que dicen las evidencias', hitos: [['7:15', 'Amoladora de 4½” con guarda'], ['9:25', 'Cambian a la amoladora de Elmer'], ['9:40', '«Que el muchacho apure»'], ['10:20', 'Disco de 7” sin guarda: el corte']] },
    },
  },
  {
    id: 'i2', t: '08:15', ch: 'presencial', who: 'jhonatan', titulo: 'La versión de Jhonatan', banner: 'assets/foto/cafe.webp', lugar: 'Caseta de SSOMA', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>Jhonatan llega en combi desde Monsefú con la mano vendada y su certificado médico en un sobre. Su mamá le mandó un táper de humitas para ti. ${F.has('jhonatan_tranquilo') ? '«Le dije que le iba a contar todo, ingeniera.»' : 'Se sienta en el borde de la silla, como si fuera a irse pronto.'}</p><p>Le sirves un café. <mark class="clave">Tienes tiempo para dos preguntas antes de que se canse</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Jhonatan.',
    opts: [
      { id: 'cambio', label: '¿Por qué cambiaste de amoladora?', info: '«A las nueve y veinte se me acabó el disco chico y en el almacén no había más. Don Segundo me dijo: “Usa la de Elmer, que tiene disco grande y corta más rápido”. La guarda ya no tenía, desde hace semanas.»' },
      { id: 'apuro', label: '¿Cómo era el apuro esa mañana?', info: '«Sesenta platinas para el mediodía. Don Segundo subió dos veces a preguntar cuántas iban. Yo iba en treinta y algo. No quería quedar mal, ingeniera.»' },
      { id: 'dijiste', label: '¿Le dijiste a alguien que la amoladora no tenía guarda?', info: '«No. Todos la usaban así. Pensé que era normal.» Se queda callado. «Bueno… el miércoles usted me dijo que avise. Pero era la de Elmer, no la mía.»' },
      { id: 'culpa', label: '¿Sientes que fue tu culpa?', info: '«Un poco, sí. Si hubiera ido más despacio…» Mira la venda. «Pero si iba despacio, Don Segundo me cambiaba.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('cambio') ? 4 : 2, personas: 3, confianza: 2 }, rel: { jhonatan: 1 },
      flags: picks.includes('cambio') ? ['orden_segundo'] : [], cartera: { investigacion: picks.includes('cambio') ? 'Sin discos de 4½” en almacén; Segundo indicó usar la de Elmer' : 'Presión por 60 platinas al mediodía' },
      out: picks.includes('cambio') ? 'Anotas sus palabras tal cual. Antes de irse, Jhonatan pregunta bajito: «¿A Don Segundo le va a pasar algo?». No sabes qué responderle todavía.' : 'Jhonatan se va con la mano en el pecho, como protegiéndola. Te quedas con su frase: «si iba despacio, me cambiaban».',
      kusi: ['pensando', 'Detrás de un acto siempre hay una razón…'],
    }),
    mirada: {
      ve: 'La entrevista al accidentado es delicada: está herido, asustado y suele culparse. Preguntas abiertas sobre lo que pasó, y no sobre lo que hizo mal, son las que traen la información que cambia la investigación.',
      visual: { tipo: 'mensaje', titulo: 'Sus palabras', txt: 'Se acabó el disco chico y no había más. Me dijeron que use la de Elmer, que corta más rápido. La guarda ya no tenía. Sesenta platinas para el mediodía. Si iba despacio, me cambiaban.' },
    },
  },
  {
    id: 'i3', t: '10:10', ch: 'llamada', who: null, titulo: 'Testigos', banner: 'assets/foto/llamada.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Renzo te escribió preguntando por «la conclusión, ojalá corta». Ya son tres mensajes. El café de la mañana se enfrió en el termo.</p><p>Faltan tres voces para completar la historia. <mark class="clave">Escucha lo que cada uno dice y lo que no dice</mark>.</p>`,
    type: 'calls',
    calls: [['Teodoro Ramírez · operario, testigo', 'Contesta desde el piso 11', '«La amoladora grande saltó cuando el disco agarró la platina torcida. Sin guarda, el disco se le vino a la mano. Yo he visto quitar guardas toda la vida, ingeniera. Es para que entre el disco grande.»'], ['Elmer Chapoñán · capataz de la subcontrata', 'Contesta en voz baja', '«La guarda se rompió hace un mes. No pedí otra porque se demoran. Yo no se la presté al muchacho: se la llevó por orden de Segundo.» Pausa. «Mis amoladoras nadie las revisa, ingeniera. Ni la constructora ni yo.»'], ['Wilmer Tantaleán · almacenero', 'Contesta con ruido de carretilla', '«Hay una sola amoladora de 4½ y los discos se acabaron el jueves. Pedí tres amoladoras y una caja de discos en setiembre. El pedido sigue esperando aprobación de la oficina.»']],
    prompt: '¿Cómo sigues la investigación con lo que escuchaste?',
    choices: [
      { id: 'a', label: 'Incluir a Encofrados del Norte en la investigación: pedirle a Elmer el inventario de sus herramientas y revisar el pedido de Wilmer con la oficina.',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 3, personas: 2 }, flags: ['subcontrata_incluida'], cartera: { herramientas: 'Subcontrata incluida; pedido de setiembre sin aprobar', investigacion: 'Testigos: Teodoro, Elmer, Wilmer' },
          out: 'Elmer manda por WhatsApp una foto de sus cinco amoladoras: tres sin guarda. El pedido de Wilmer está en la bandeja de Renzo desde el 18 de setiembre.',
          pro: { ok: 'Las herramientas de una subcontrata en tu obra son también un riesgo para tu obra.', info: 'El pedido sin aprobar es un dato incómodo para Renzo. Preséntalo como hecho, no como acusación.' },
          kusi: ['celebra', '¡La historia completa tiene más de un protagonista!'] } },
      { id: 'b', label: 'Dejar a la subcontrata fuera: sus herramientas son su problema. Centrarte en lo que hizo la gente de la constructora.',
        res: { q: 'riesgosa', fx: { calidad: -3, cumplimiento: -2 }, cartera: { investigacion: 'Subcontrata fuera de la investigación' },
          out: 'Tu investigación queda más corta y más cómoda. Las tres amoladoras sin guarda de Elmer siguen trabajando en el piso 10.',
          pro: { ok: 'Acotas la investigación.', risk: 'Lo que pasa en tu obra, con gente de otra empresa, también te toca. El peligro no sabe de contratos.' },
          kusi: ['preocupado', '¿Y las amoladoras de Elmer?'] } },
    ],
    rules: [[BP, 'Entrevista por separado a cada testigo y anota sus palabras, no tu interpretación.'], [BP, 'Las herramientas de las subcontratas entran en las inspecciones de la obra.']],
    mirada: {
      ve: 'Cada testigo ve una parte. Teodoro vio la mecánica del accidente; Elmer, la guarda que nadie repuso; Wilmer, el pedido que nadie aprobó. La investigación junta las partes sin escoger la más cómoda.',
      visual: { tipo: 'embudo', titulo: 'Amoladoras en la obra', niveles: [['Amoladoras en obra', 6], ['Revisadas alguna vez', 1], ['Con guarda', 2]] },
    },
  },
  {
    id: 'i4', t: '11:40', ch: 'documento', who: null, titulo: 'Cinco porqués', banner: 'assets/esc/pendulo.webp', lugar: 'Pizarra de la caseta', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Escribes en la pizarra de la caseta, con un plumón que ya casi no pinta. Arriba: «Jhonatan se cortó la mano». Debajo, una flecha y la primera pregunta: «¿por qué?».${F.has('orden_segundo') ? ' Sabes algo que nadie más ha dicho en voz alta: la orden de cambiar de amoladora.' : ''}</p><p><mark class="clave">Cada respuesta tiene que llevar a la siguiente, hasta algo que la empresa pueda cambiar</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena la cadena del accidente, del hecho a la causa de fondo.', boton: 'Pasar la cadena al informe',
    items: [
      { id: 'corte', t: 'El disco golpeó la mano de Jhonatan', por: 'El hecho.' },
      { id: 'singuarda', t: 'La amoladora tenía un disco de 7” y no tenía guarda', por: 'La condición inmediata.' },
      { id: 'cambio', t: 'Se cambió a la amoladora de Elmer porque no había discos de 4½”', por: 'Por qué tenía esa herramienta.' },
      { id: 'pedido', t: 'El pedido de amoladoras y discos llevaba un mes sin aprobarse y nadie revisaba las herramientas', por: 'Por qué no había alternativa segura.' },
      { id: 'plazo', t: 'La presión del plazo del vaciado hacía que «apurar» pesara más que parar y pedir', por: 'La causa de fondo que la empresa puede cambiar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : 1, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { ingrid: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['causa_raiz'], cartera: { investigacion: q === 'riesgosa' ? 'Cadena de causas incompleta' : 'Causa de fondo: plazo + pedido sin aprobar + sin revisión de herramientas' },
        out: q === 'buena' ? 'Ingrid entra, mira la pizarra en silencio y le toma una foto. «Esto no le va a gustar a Renzo. Pero es la verdad, y se puede corregir.»' : q === 'aceptable' ? 'Ingrid mueve una tarjeta: «El pedido sin aprobar va antes de la presión. Si no hay herramienta, el apuro decide».' : 'La cadena salta del corte al plazo sin pasar por la herramienta. Así cualquiera puede decir «es culpa del cliente».',
        pro: { ok: 'Preguntar «por qué» hasta llegar a algo que la organización controla es lo que convierte un accidente en una mejora.', risk: 'Si te detienes en el segundo porqué, la conclusión será «cambiar al trabajador».', info: 'No siempre son cinco exactos: se pregunta hasta llegar a una causa que se pueda cambiar.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡De «descuido» a causa de fondo!' : '¿Por qué… y por qué otra vez?'],
      };
    },
    rules: [[LEY, 'Ley 29783, art. 58: la investigación busca detectar las causas y adoptar medidas correctivas.'], [BP, 'Una causa de fondo es algo que la organización puede cambiar, no el nombre de una persona.']],
    mirada: {
      ve: 'El «descuido» es el primer porqué, no el último. Detrás de cada acto inseguro suele haber una condición, una falta de recursos y una presión. La investigación que llega hasta ahí evita el próximo accidente; la que se queda en el acto, solo cambia de nombre al herido.',
      visual: { tipo: 'flujo', titulo: 'Cinco porqués', pasos: ['El corte', 'Disco de 7” sin guarda', 'No había discos de 4½”', 'Pedido sin aprobar, sin revisión', 'El plazo manda'], aqui: 4 },
      normas: [{ ley: 'Ley 29783, art. 58', dice: 'El empleador investiga cuando se producen daños a la salud de los trabajadores o hay indicios de que las medidas de prevención son insuficientes, para detectar las causas y adoptar medidas correctivas.', practica: 'La medida no puede ser «reforzar la charla»: la charla ya se dio y el accidente igual ocurrió.' }],
    },
  },
  {
    id: 'i5', t: '13:30', ch: 'presencial', who: 'segundo', titulo: 'Don Segundo', banner: 'assets/foto2/tension.webp', lugar: 'Detrás de la caseta de herramientas', show: ['etica', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Don Segundo te espera detrás de la caseta de herramientas, a la sombra, con la gorra en la mano. Nunca lo habías visto sin gorra. Tiene canas que no sabías.</p><p>«Ingeniera, yo le dije al muchacho que use la de Elmer. Ya sé que lo va a poner. Tengo 61 años y mi señora está con diálisis en el hospital de Chiclayo. <mark class="clave">Si eso sale en el informe, Renzo me bota</mark>. Ponga que fue el apuro, ponga lo que quiera, pero no ponga mi nombre.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que el informe contará que hubo una instrucción de usar otra herramienta, porque es parte de la causa, pero que la conclusión apuntará al pedido sin aprobar y al plazo, no a sancionar a nadie. Y conversarlo con Ingrid hoy.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, personas: 2 }, rel: { segundo: 1 }, flags: ['segundo_verdad'], cartera: { investigacion: 'Instrucción del maestro de obra incluida, sin recomendar sanción' },
          out: 'Don Segundo se pone la gorra despacio. «O sea que va a decir la verdad, pero no me va a colgar.» No es una pregunta. Ingrid, al teléfono, te dice: «Bien. Yo hablo con Renzo: el informe es para prevenir, no para despedir».',
          pro: { ok: 'No ocultas una causa y tampoco conviertes la investigación en un juicio.', risk: 'Renzo puede usar ese dato igual. No controlas todo lo que pasa con un informe.', info: 'Las investigaciones que terminan en castigos hacen que la gente deje de contar lo que pasó.' },
          kusi: ['animo', 'La verdad completa, sin cacería.'] } },
      { id: 'b', label: 'Sacar su instrucción del informe: escribir que «se usó una herramienta inadecuada» sin decir por qué.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3, personas: 1 }, rel: { segundo: 1 }, flags: ['segundo_omitido'], cartera: { investigacion: 'Informe sin la instrucción del maestro de obra' },
          out: 'Don Segundo te aprieta la mano con fuerza. El informe queda más limpio. Pero en la obra todos saben de dónde salió la orden, y Marleny también.',
          pro: { ok: 'Proteges a una persona en un momento difícil.', risk: 'Un informe que esconde una causa enseña que la presión para apurar no se toca. Y la próxima orden será igual.' },
          kusi: ['triste', 'Lo cuidaste a él… pero no al próximo Jhonatan.'] } },
      { id: 'c', label: 'Poner su nombre como responsable de la instrucción y recomendar una amonestación: si se protege al jefe, se castiga solo al de abajo.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: 2, personas: -4 }, rel: { segundo: -1 }, flags: ['segundo_sancion'], cartera: { investigacion: 'Recomienda amonestar al maestro de obra' },
          out: 'Don Segundo se da la vuelta sin decir nada. Renzo lee tu informe en la tarde y sonríe: «Bien. Amonestamos a Segundo y cerramos». El pedido de amoladoras sigue en su bandeja.',
          pro: { ok: 'No dejas que el peso caiga solo en el ayudante.', risk: 'Cambiaste un culpable por otro. La causa de fondo, el pedido sin aprobar y el plazo, quedó intacta.' },
          kusi: ['pensando', 'Otro culpable… y la misma obra.'] } },
    ],
    rules: [[BP, 'La investigación busca causas para corregir, no culpables para sancionar. Las medidas disciplinarias, si las hay, van por otro camino.']],
    mirada: {
      ve: 'En casi todas las investigaciones aparece alguien con poder que dio una instrucción y alguien que la cumplió. Omitirlo es mentir; convertirlo en el nuevo culpable es no entender. El trabajo es mostrar por qué esa instrucción tuvo sentido para quien la dio, y qué hay que cambiar para que no se repita.',
      visual: { tipo: 'balanza', a: { t: 'Buscar culpables', items: ['Cierra rápido el tema', 'Un nombre en el informe', 'Nadie vuelve a contar nada'] }, b: { t: 'Buscar causas', items: ['El pedido sin aprobar', 'El plazo que aprieta', 'La gente sigue hablando'] } },
    },
  },
  {
    id: 'i6', t: '15:40', ch: 'documento', who: null, titulo: 'El informe', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>La laptop de la caseta se reinicia sola por una actualización justo cuando ibas por la mitad. Por suerte guardaste.${F.has('accidente_oculto') ? ' En el registro el accidente dice «primeros auxilios»; tu informe va a tener que explicar por qué no lo es.' : ''}</p><p>Renzo quiere «algo corto». Ingrid quiere «algo que sirva». <mark class="clave">Tú quieres que se pueda leer en el comité de mañana</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada parte del informe de investigación.', boton: 'Enviar el informe a Ingrid',
    bloques: [
      { id: 'inmediatas', t: 'Causas inmediatas', n: 2, ops: [
        { id: 'i1', t: 'Condición: amoladora de 4½” con disco de 7” y sin guarda.', ok: true, por: 'Verificado en la herramienta.' },
        { id: 'i2', t: 'Acto: se usó una herramienta sin su protección para cortar más rápido.', ok: true, por: 'Describe el acto sin adjetivos.' },
        { id: 'i3', t: 'Descuido y falta de concentración del trabajador.', ok: false, por: 'Es un juicio, no un hecho.' },
      ] },
      { id: 'basicas', t: 'Causas de fondo', n: 2, ops: [
        { id: 'b1', t: 'Sin discos de 4½” en almacén y un pedido de herramientas sin aprobar desde setiembre.', ok: true, por: 'Falta de recursos, comprobada.' },
        { id: 'b2', t: 'Nadie inspecciona las herramientas de la subcontrata, y la presión por el plazo normalizó quitar guardas.', ok: true, por: 'Sistema de control y cultura de trabajo.' },
        { id: 'b3', t: 'El trabajador es joven y nuevo.', ok: false, por: 'La edad no causó el corte: lo causó un disco sin guarda.' },
      ] },
      { id: 'medidas', t: 'Medidas correctivas', n: 2, ops: [
        { id: 'm1', t: 'Aprobar el pedido de amoladoras y discos esta semana · Responsable: residente de obra · Fecha: miércoles.', ok: true, por: 'Responsable y fecha.' },
        { id: 'm2', t: 'Inspección semanal de herramientas eléctricas, también de subcontratas, con registro · Responsable: SSOMA · Desde hoy.', ok: true, por: 'Medida de control que antes no existía.' },
        { id: 'm3', t: 'Reforzar la charla de uso de amoladora.', ok: false, por: 'La charla ya se dio y el accidente igual ocurrió.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : 1, cumplimiento: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 2 : -1 }, rel: { ingrid: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['informe_solido'] : ['informe_flojo'], cartera: { investigacion: q === 'buena' ? 'Informe listo: 2 causas inmediatas, 2 de fondo, 2 medidas con fecha' : 'Informe con juicios y medidas vagas' },
        out: q === 'buena' ? 'Ingrid lo lee en el celular, de pie: «Esto va tal cual al comité». Diez minutos después, Renzo responde con copia: «Apruebo el pedido de amoladoras». Sin más palabras.' : q === 'aceptable' ? 'Ingrid te lo devuelve con dos comentarios: «Saca los adjetivos. Y ponle fecha a cada medida».' : 'Ingrid te llama: «Esto dice lo mismo que el correo de Renzo, con más palabras».',
        pro: { ok: 'Un informe útil separa hechos, causas y medidas con responsable y plazo.', risk: 'Si las medidas son «reforzar la charla», el informe protege a la empresa en papel y deja la obra igual.', info: 'El resultado de la investigación se anota en el registro de accidentes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Renzo aprobó el pedido!' : 'Hechos, causas y medidas con fecha.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR: el resultado de la investigación se registra en el registro de accidentes, con las medidas correctivas.'], [BP, 'Cada medida correctiva tiene un responsable y una fecha.']],
    mirada: {
      ve: 'El informe de investigación es lo que queda cuando todos olvidan el accidente. Si dice «descuido», la próxima amoladora sin guarda seguirá en la obra. Si dice qué falló y quién lo corrige, la obra cambia.',
      visual: { tipo: 'cambio', titulo: 'Del correo de Renzo a tu informe', pares: [['Acto inseguro del trabajador', 'Disco de 7” sin guarda, pedido sin aprobar'], ['Reforzar la charla', 'Pedido aprobado y revisión semanal'], ['Sin responsable', 'Residente y SSOMA, con fecha']] },
    },
  },
  {
    id: 'i7', t: '17:45', ch: 'whatsapp', who: null, titulo: 'Para Marleny', banner: 'assets/esc/meta.webp', lugar: 'Paradero de la avenida Bolognesi', show: ['personas', 'confianza'],
    body: (n, F) => `<p>El sol se pone detrás de los cerros de Pátapo y el paradero se llena de obreros con las botas blancas de cemento. ${F.has('marleny_agenda') ? 'Marleny ya tiene su agenda con el tema de las subcontratas.' : 'Marleny te dijo que mañana habrá comité, por fin.'}</p><p>El informe tiene que llegar al comité, no solo a la gerencia. <mark class="clave">Le escribes antes de subir a la combi</mark>.</p>`,
    type: 'compose', enviaA: 'marleny', para: 'Para: Marleny Flores · Representante en el comité', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'p1', t: 'Marleny, ¿podemos poner la investigación del accidente de Jhonatan como primer tema de mañana?', ok: true, por: 'Le das al comité el lugar que le corresponde.' },
        { id: 'p2', t: 'Marleny, mañana te paso el informe para que lo firmes.', ok: false, por: 'El comité no está para firmar lo que ya se decidió.' },
      ] },
      { id: 'adelanta', t: 'Lo que le adelantas', ops: [
        { id: 'a1', t: 'Te mando el informe esta noche para que lo leas antes y traigas lo que diga la cuadrilla.', ok: true, por: 'Leer antes permite opinar de verdad.' },
        { id: 'a2', t: 'El informe ya está aprobado por Ingrid, así que es solo para informar.', ok: false, por: 'Le quita al comité su función.' },
      ] },
      { id: 'invita', t: 'A quién invitas', ops: [
        { id: 'i1', t: 'Y propongo invitar a Elmer y a Wilmer, porque son parte de las medidas.', ok: true, por: 'Quien ejecuta una medida tiene que escucharla.' },
        { id: 'i2', t: 'Mejor que sea corto, sin invitados.', ok: false, por: 'Sin los responsables, las medidas no tienen dueño.' },
      ] },
    ],
    res: sel => {
      const buenas = ['p1', 'a1', 'i1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0, cumplimiento: q === 'buena' ? 2 : 0 }, rel: { marleny: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['comite_con_informe'], cartera: { comite: q === 'riesgosa' ? 'Informe solo para firma' : 'Primer tema: investigación; invitados Elmer y Wilmer' },
        out: q === 'buena' ? 'Marleny responde con un audio largo. Se escucha a sus hijos de fondo: «Primer tema, ingeniera. Y lo leo hoy, aunque me duerma tarde. Esto es lo que yo quería que fuera el comité».' : q === 'aceptable' ? 'Marleny responde: «Ya, ingeniera. Mañana vemos».' : 'Marleny responde: «Ah, ok. Otra firma más».',
        pro: { ok: 'El comité participa en la investigación cuando recibe el informe antes y puede discutirlo.', risk: 'Si llega solo para firmar, el comité vuelve a ser «para la foto».' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mañana el comité va a trabajar de verdad!' : 'Que el comité opine, no solo firme.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42: el comité de SST participa en la investigación de los accidentes.']],
    mirada: {
      ve: 'El comité de SST es paritario: lo que decide tiene la voz de la empresa y de los trabajadores. Que el informe del accidente llegue antes y como primer tema es la diferencia entre un comité que trabaja y uno que firma.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje', txt: '¿Ponemos la investigación de Jhonatan como primer tema de mañana? Te mando el informe esta noche para que lo leas y traigas lo que diga la cuadrilla. Propongo invitar a Elmer y a Wilmer.' },
    },
  },
];

