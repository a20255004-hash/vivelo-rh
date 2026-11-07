// Practicante profesional en una ORH del Estado · Capítulo 7 · «El informe» · Semana 2, martes.
// Hilo: escribes tu primer informe técnico sobre las correcciones de la tabla del CAS 012-2026; la constancia del profesor Víctor entra a firma.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 29973, art. 48, y D.S. 002-2014-MIMP, num. 51.1: bonificación del 15 % sobre el puntaje final aprobatorio (capítulo 5).
//   https://cdn.www.gob.pe/uploads/document/file/8090935/6784703-informe-tecnico-n-121-2025-servir-gpgsc.pdf
// - Ley 27815, art. 8: prohibiciones éticas del servidor público (capítulo 6).
//   https://www.congreso.gob.pe/Docs/Directivas/files/generales/ley27815-ley-codigoetica-funcionpublica.pdf
// - Ley 29733: los datos personales se tratan con reserva; en un informe solo van los necesarios (capítulo 2).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 7, titulo: 'El informe', dia: 'Semana 2, martes', foto: 'assets/esc/escritorio.webp',
  lugar: 'Oficina de Recursos Humanos · Wanchaq, Cusco',
  inicio: '08:00', fin: '17:00', cierreHora: '16:50',
  apertura: 'Martes. Amanece con sol fuerte y el cielo de un azul que solo hay en Cusco. La Lic. Valer quiere tu informe técnico a las cinco. Nunca escribiste uno.', boton: 'Abrir un documento en blanco',
  kusi: 'Un informe técnico se escribe para alguien que no estuvo ahí. ¡Que se entienda solito!',
  lead: 'Armaste la estructura de tu primer informe, limpiaste tu borrador de adjetivos y datos de más, decidiste cómo nombrar lo que pasó en el Excel, avisaste al profesor que su constancia estaba en firma y escuchaste a Rubén.',
  reflexion: '¿Para quién se escribe un informe en el Estado: para el jefe de hoy o para quien lo lea en diez años?',
  siguiente: { n: 8, titulo: 'Transparencia', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'informe', p: 'Informe técnico sobre la tabla de puntajes', j: 'Lic. Valer', d: 0, e: 'Hoy, 17:00' },
  { id: 'victor', p: 'Constancia del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'Proyecto listo, en visto bueno' },
  { id: 'concurso', p: 'Entrevistas del CAS 012-2026', j: 'Comité de selección', d: 0, e: 'Jueves' },
  { id: 'ruben', p: 'Rubén', j: 'Tu compañero', d: 0, e: 'Anda raro desde ayer' },
];

export const FUTURO = {
  informe_claro: ['Tu informe técnico quedó con antecedentes, análisis, conclusiones y recomendaciones claras.', 'Alguien de afuera lo pedirá la próxima semana.'],
  informe_prudente: ['En el informe escribiste «usuario externo a la ORH» y anexaste la captura completa del historial.', 'Los hechos quedaron intactos y la evidencia, completa.'],
  informe_nombre: ['En el informe pusiste el nombre de usuario «asesor.gerencia» en el texto.', 'La Gerencia lo leerá con lupa.'],
  informe_borrado: ['Quitaste del informe la edición del Excel y su captura.', 'Si alguien la busca, el informe no la tendrá.'],
  victor_avisado: ['Le avisaste al profesor Víctor que su constancia estaba en firma y cuándo recogerla.', 'Vendrá el jueves con su esposa.'],
  ruben_escuchado: ['Escuchaste a Rubén cuando dudaba de seguir.', 'Rubén se quedará, y te lo agradecerá el viernes.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  jefa: { n: 'Lic. Norma Valer', sub: 'Jefa de la ORH', c: '#5B3A8C' },
  yesenia: { n: 'Yesenia Quispe', sub: 'Nieta del Prof. Víctor', c: '#7A4A2E' },
};

export const WSP = [
  { chat: 'jefa', t: '08:02', de: 'Lic. Valer', txt: 'Buenos días. El informe técnico de la tabla, hoy a las 5. Corto, con hechos y con anexos.' },
  { chat: 'grupo', t: '08:20', de: 'Gladys', txt: 'Ayer se publicó a las 5 en punto y hoy nadie ha reclamado por la hora. Eso es trabajo bien hecho 👏', si: 'publicacion_a_tiempo' },
  { chat: 'ruben', t: '09:10', de: 'Rubén', txt: 'Oye, ¿almorzamos? Necesito contarte algo.' },
  { chat: 'gladys', t: '12:40', de: 'Gladys', txt: 'La constancia del profesor está en visto bueno. Mañana o el jueves sale firmada.', si: 'cotejo_hecho' },
  { chat: 'yesenia', t: '15:00', de: 'Yesenia', txt: '¡Gracias, señorita! Mi abuelito se puso a llorar cuando le conté 🥹 El jueves vamos.', si: 'victor_avisado' },
];

export const CORREOS = [
  { t: '08:10', de: 'Gladys Huamán', para: 'Practicante de la ORH', asunto: 'Modelo de informe técnico', html: '<p>Te adjunto un informe técnico de 2024 para que veas el formato: antecedentes, análisis, conclusiones y recomendaciones. Una página o dos, no más.</p><p>Recuerda: un informe técnico no opina de las personas. Describe hechos, los compara con la norma o las bases y recomienda.</p><p>Gladys</p>' },
  { t: '16:30', de: 'Mesa de partes central', para: 'ORH', asunto: 'Documento ingresado: solicitud de acceso a la información', html: '<p>Se deriva a la ORH la solicitud de acceso a la información pública presentada por la Sra. Elvira Condori Huamán respecto del concurso CAS 012-2026.</p>' },
];

export const QUIZ = [
  { q: '¿Qué partes tiene un informe técnico en el Estado?', ops: ['Introducción y opinión', 'Antecedentes, análisis, conclusiones y recomendaciones', 'Solo conclusiones', 'Un resumen y una firma'], ok: 1, por: 'Es la estructura habitual: qué pasó, qué se analizó, qué se concluye y qué se recomienda.' },
  { q: '¿Qué NO debe ir en el cuerpo de un informe sobre una tabla de puntajes?', ops: ['Los puntajes corregidos', 'El DNI y el domicilio de cada postulante', 'La regla de las bases aplicada', 'La fecha de cada corrección'], ok: 1, por: 'En un informe van solo los datos personales necesarios para su propósito (Ley 29733).' },
  { q: 'Te piden que el informe diga «alguien de la Gerencia quiso favorecer a un postulante». ¿Qué escribes?', ops: ['Eso, tal cual', 'Lo que muestra la evidencia: qué celda se cambió, cuándo y desde qué usuario', 'Nada', 'Que fue Rubén'], ok: 1, por: 'Un informe técnico describe hechos verificables, no intenciones.' },
  { q: '¿Dónde se aplica la bonificación por discapacidad, según la conclusión de tu informe?', ops: ['En la evaluación curricular', 'Sobre el puntaje final aprobatorio', 'En la entrevista', 'No se aplica en CAS'], ok: 1, por: 'Ley 29973, art. 48, y su reglamento: sobre el puntaje final aprobatorio.' },
  { q: 'Una recomendación útil en un informe es…', ops: ['«Tener más cuidado»', '«Restringir la edición de las tablas de puntaje al comité y a la ORH y publicar solo versiones firmadas»', '«Sancionar a todos»', '«Que no vuelva a pasar»'], ok: 1, por: 'Una buena recomendación es concreta: quién hace qué.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:30', ch: 'documento', who: 'gladys-orh', titulo: 'El esqueleto del informe', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, con el modelo de 2024', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Abres el modelo que te mandó Gladys: «INFORME TÉCNICO N.° 0XX-2026-GR-ORH». Debajo, cuatro títulos en negrita. Gladys pasa con su café: «Primero el esqueleto. Si el esqueleto está bien, lo demás cae solo».</p><p><mark class="clave">Elige qué va en cada parte</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada parte del informe.', boton: 'Mostrarle el esqueleto a Gladys',
    bloques: [
      { id: 'ant', t: 'Antecedentes', n: 2, ops: [
        { id: 'a1', t: 'Concurso CAS 012-2026, dos plazas; tabla de evaluación curricular elaborada en un Excel compartido.', ok: true },
        { id: 'a2', t: 'Revisión del viernes antes de la validación del comité.', ok: true },
        { id: 'a3', t: 'Mi experiencia personal en mi primera semana de prácticas.', ok: false, por: 'El informe no es un diario.' },
      ] },
      { id: 'ana', t: 'Análisis', n: 2, ops: [
        { id: 'n1', t: 'Cada error, con la fila, el valor encontrado, el valor correcto y la regla de las bases o de la ley.', ok: true, por: 'Hecho comparado con la norma.' },
        { id: 'n2', t: 'Efecto en el orden de mérito, con la tabla antes y después en anexo.', ok: true },
        { id: 'n3', t: 'Una opinión sobre quién tiene la culpa.', ok: false, por: 'El informe técnico no juzga personas.' },
      ] },
      { id: 'con', t: 'Conclusiones y recomendaciones', n: 2, ops: [
        { id: 'c1', t: 'La tabla validada y publicada corresponde a los puntajes correctos.', ok: true },
        { id: 'c2', t: 'Recomendar que solo el comité y la ORH editen las tablas y que se publique solo la versión firmada.', ok: true, por: 'Concreto: quién y qué.' },
        { id: 'c3', t: 'Recomendar «más cuidado en el futuro».', ok: false, por: 'Demasiado vago para servir.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['informe_claro'], cartera: { informe: q === 'riesgosa' ? 'Esqueleto por rehacer' : 'Esqueleto listo' },
        out: q === 'buena' ? 'Gladys lee en voz baja y asiente: «Antecedentes, análisis, conclusiones. Esto ya es un informe».' : 'Gladys tacha una línea: «Esto no va. Un informe técnico no cuenta tu semana ni busca culpables».',
        pro: { ok: 'Un informe ordenado se entiende sin que nadie te lo explique.', info: 'Las tablas largas van en anexo; en el cuerpo, solo lo que cambia la decisión.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Esqueleto de funcionaria!' : 'Hechos, no diario.'],
      };
    },
    rules: [[BP, 'Un informe técnico describe hechos, los compara con la norma o las bases y recomienda acciones concretas.']],
    mirada: {
      ve: 'Un informe técnico es la forma en que el Estado recuerda por qué decidió algo. Quien lo lea dentro de cinco años, quizás un auditor, no conocerá a nadie de esta historia. Solo tendrá tus palabras.',
      visual: { tipo: 'flujo', titulo: 'Un informe técnico', pasos: ['Antecedentes', 'Análisis', 'Conclusiones', 'Recomendaciones', 'Anexos'] },
    },
  },
  {
    id: 'i2', t: '10:10', ch: 'documento', who: null, titulo: 'Tu borrador', banner: 'assets/esc/lupa.webp', lugar: 'Informe técnico, versión 1', show: ['calidad', 'etica'],
    body: () => `<p>Escribes de corrido durante una hora. Lo relees y algunas frases te suenan raras, como si las hubiera escrito otra persona más enojada que tú.</p><p><mark class="clave">Marca las frases que no pueden quedar</mark>.</p>`,
    type: 'flag', prompt: 'Marca las frases del borrador con problemas.',
    doc: { t: 'Informe técnico · versión 1 · Análisis', sub: 'CAS 012-2026 · tabla de evaluación curricular' },
    lines: [
      { id: 'ok1', t: '2.1 En la fila 9, la fórmula de experiencia sumaba la columna K, vacía; el puntaje correcto es 35 (bases, numeral 6.2).' },
      { id: 'adj', t: '2.2 Lamentablemente, el equipo cometió errores graves e inaceptables en la plantilla.', bad: BP, why: 'Adjetivos y juicios. Basta con describir el error y la corrección.' },
      { id: 'dni', t: '2.3 Postulante Edwin Huamaní, DNI 4XXXXXXX, domiciliado en Quillabamba, celular 9XXXXXXXX…', bad: LEY, why: 'DNI, domicilio y celular no son necesarios para el informe. En un documento así, solo los datos personales imprescindibles (Ley 29733).' },
      { id: 'int', t: '2.4 Es evidente que se buscó favorecer al postulante Kevin Mendoza.', bad: BP, why: 'Afirma una intención que la evidencia no prueba. La evidencia muestra quién cambió la celda y cuándo, no por qué.' },
      { id: 'ok2', t: '2.5 La bonificación del 15 % se había aplicado en la evaluación curricular; corresponde aplicarla sobre el puntaje final aprobatorio (Ley 29973, art. 48).' },
      { id: 'yo', t: '2.6 Gracias a mi revisión se salvó el concurso.', bad: BP, why: 'El informe no es para destacarte. Lo que hiciste se ve en los hechos.' },
    ],
    res: ({ missLey, hitsLey, hitsBp, falsos }) => {
      const bien = !missLey && (hitsBp || 0) >= 2 && !falsos;
      return {
        out: bien ? 'Borras cuatro frases y el informe queda más corto y más fuerte. Lo relees: ahora suena como un documento del Estado, no como un desahogo.' : 'Corriges algunas frases, pero otras siguen ahí. Gladys las encontrará con su lapicero rojo.',
        flags: bien ? ['informe_claro'] : [], cartera: { informe: bien ? 'Versión 2: limpia' : 'Versión 1 con frases por corregir' },
        pro: { ok: 'Menos adjetivos, menos datos de más, ninguna intención sin prueba.', risk: 'Un DNI o un domicilio innecesarios en un informe que circulará exponen a una persona.' },
        kusi: bien ? ['feliz', 'Corto y fuerte. ¡Así!'] : ['pensando', 'Todavía hay frases que sobran.'],
      };
    },
    rules: [[LEY, 'Ley 29733: solo se tratan los datos personales necesarios para la finalidad del documento.'], [BP, 'Un informe técnico no usa adjetivos, no atribuye intenciones y no se felicita a sí mismo.']],
    mirada: {
      ve: 'Escribir con rabia es humano: pasaste un lunes tenso. Pero el informe no es el lugar para eso. Cada adjetivo que borras hace que lo que queda sea más difícil de discutir.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al informe', pares: [['«Errores graves e inaceptables»', 'La fila, el valor y la corrección'], ['DNI, domicilio y celular', 'Solo el nombre'], ['«Es evidente que se buscó favorecer»', 'Qué celda, cuándo, desde qué usuario'], ['«Gracias a mi revisión»', 'Nada']] },
    },
  },
  {
    id: 'i3', t: '11:40', ch: 'presencial', who: null, titulo: '¿Cómo lo nombramos?', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de la Lic. Valer', show: ['etica', 'confianza', 'calidad'],
    body: (n, F) => `<p>La Lic. Valer lee tu borrador con los lentes en la mano. ${F.has('edicion_silencio') ? 'Gladys encontró el historial en la copia original del viernes: la edición de la celda de Kevin no estaba en tu nota, pero ahora debe ir en el informe.' : 'Se detiene en el párrafo de la celda editada.'}</p><p>«Esto va a llegar a la Gerencia, y quizás a control. Si ponemos "asesor.gerencia" en el texto, es como señalar a alguien. <mark class="clave">¿Cómo lo nombramos?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mantener en el texto el nombre de usuario «asesor.gerencia», la fecha y la hora: es lo que dice el historial, sin agregar nada.',
        res: { q: 'aceptable', fx: { etica: 3, calidad: 2, confianza: -2 }, flags: ['informe_nombre'],
          out: 'La Lic. Valer suspira: «Es cierto. Pero un nombre de usuario no prueba quién estaba en el teclado». Lo firma así, y te advierte que la Gerencia lo leerá con lupa.',
          pro: { ok: 'Dices exactamente lo que muestra la evidencia.', risk: 'El texto puede leerse como una acusación a una persona, cuando lo que se sabe es el usuario, no quién lo usó.' },
          kusi: ['pensando', 'Cierto… ¿pero prudente?'] } },
      { id: 'b', label: 'Escribir «un usuario externo a la ORH, con acceso al archivo», con fecha y hora, y anexar la captura completa del historial, donde se ve el nombre de usuario.',
        res: { q: 'buena', fx: { etica: 4, calidad: 4, confianza: 2 }, flags: ['informe_prudente'],
          out: 'La Lic. Valer asiente despacio: «Así. El texto describe el hecho y el anexo tiene toda la evidencia. Quien deba investigar, investigará».',
          pro: { ok: 'Los hechos quedan intactos y la evidencia completa, sin que el texto señale a nadie más allá de lo probado.', info: 'Prudencia no es ocultar: el anexo tiene todo.' },
          kusi: ['animo', 'Prudente y completo. ¡Bien!'] } },
      { id: 'c', label: 'Quitar el párrafo y la captura: la celda ya se corrigió, y meter a la Gerencia en un informe solo trae problemas.',
        res: { q: 'riesgosa', fx: { etica: -5, calidad: -3 }, flags: ['informe_borrado'],
          out: 'La Lic. Valer duda, pero acepta. El informe queda más corto. La captura se queda en tu carpeta personal, donde nadie la buscará.',
          pro: { ok: 'Evitas un conflicto con la Gerencia.', risk: 'Un informe que omite un hecho relevante y su evidencia ya no es un informe técnico: es una versión.' },
          kusi: ['indignado', '¡Ese hecho era parte de la historia!'] } },
    ],
    rules: [[LEY, 'Ley 27815, art. 8: es prohibido al servidor público hacer mal uso de información privilegiada.'], [BP, 'Un informe técnico no omite hechos relevantes ni afirma más de lo que la evidencia prueba.']],
    mirada: {
      ve: 'La jefa no te pide mentir: te pide pensar cómo se lee un texto. Entre señalar a alguien y borrar lo que pasó hay un camino: describir el hecho con precisión y poner toda la evidencia en el anexo.',
      visual: { tipo: 'matriz', x: 'Riesgo de señalar sin prueba', y: 'Evidencia completa', cuadrantes: ['Completo y prudente', 'Completo, pero señala', 'Incompleto y prudente', 'Incompleto'], items: [['«Usuario externo» + anexo', .2, .9], ['Nombre de usuario en el texto', .7, .85], ['Quitar todo', .1, .1]] },
    },
  },
  {
    id: 'i4', t: '14:10', ch: 'llamada', who: 'docente', titulo: 'Avisarle al profesor', banner: 'assets/foto2/callcenter.webp', lugar: 'Teléfono fijo de la ORH', show: ['personas', 'confianza', 'tiempo'],
    body: (n, F) => `<p>${F.has('cotejo_hecho') ? 'La constancia del profesor está en visto bueno: 31 años, de 1987 a 2018, sin huecos.' : 'El proyecto de constancia está listo, aunque el cotejo tuvo observaciones que Gladys terminó de resolver.'} Él no usa WhatsApp. Tienes el número fijo de su casa en Anta.</p><p><mark class="clave">Llamas</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Casa del Prof. Quispe · Anta', 'Contesta una señora mayor', '«¿Imaynalla? … Ah, de la ORH. Víctor está en su chacra, hija. Yo soy Felícitas, su esposa. ¿Pasó algo malo?»'],
      ['Yesenia Quispe · nieta', 'Contesta desde la universidad', '«¡Señorita! ¿Ya salió? ¿Le aviso yo a mi abuelito?»'],
    ],
    prompt: 'Hiciste dos llamadas. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Tranquilizar a doña Felícitas y decirle que no pasó nada malo, que la constancia está en firma y que el profesor puede recogerla el jueves desde las 10; y que si él prefiere, puede autorizar por escrito a Yesenia.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, rel: { docente: 1 }, flags: ['victor_avisado'], cartera: { victor: 'Avisado: recojo el jueves desde las 10' },
          out: 'Doña Felícitas se queda en silencio y luego dice «sulpayki, hija», gracias. A los diez minutos, Yesenia te escribe que su abuelo llegó de la chacra y se puso a llorar.',
          pro: { ok: 'Das una noticia buena, con fecha, hora y sin datos de más.', info: 'Avisar que algo está «en firma» y no prometer que sale «hoy» evita una nueva decepción.' },
          kusi: ['celebra', '¡Qué divino!'] } },
      { id: 'b', label: 'Decirle a Yesenia que le cuente a su abuelo que todo salió bien y que ya tiene sus 31 años completos.',
        res: { q: 'aceptable', fx: { personas: 3, etica: -2 },
          out: 'Yesenia le cuenta a su abuelo. Él se alegra, aunque se pregunta por qué no le avisaron a él directamente.',
          pro: { ok: 'La noticia llega rápido.', risk: 'Los datos de su legajo los recibe primero otra persona, sin autorización.' },
          kusi: ['pensando', '¿Y él no debía saberlo primero?'] } },
      { id: 'c', label: 'Esperar a que la constancia esté firmada para avisar: no quieres darle una noticia a medias.',
        res: { q: 'aceptable', fx: { personas: -1, tiempo: 1 },
          out: 'La constancia sale firmada el jueves. El profesor se entera cuando llama él, preocupado, el miércoles en la noche.',
          pro: { ok: 'No prometes nada antes de tiempo.', risk: 'Después de tres meses de espera, una noticia parcial pero cierta vale mucho.' },
          kusi: ['pensando', 'Una buena noticia también se adelanta.'] } },
    ],
    rules: [[BP, 'Al ciudadano se le avisa el avance real de su trámite, con fecha y hora, sin prometer lo que no depende de ti.']],
    mirada: {
      ve: 'Para doña Felícitas, una llamada del gobierno regional suele ser mala noticia. Esta vez no. A veces atender bien es solo eso: llamar antes de que el otro tenga que preguntar.',
      visual: { tipo: 'linea', titulo: 'La constancia del profesor', hitos: [['Agosto', 'Pedido'], ['Lunes, semana 1', 'Cargo con sello'], ['Martes, semana 1', 'El hueco'], ['Lunes, semana 2', 'Cotejo'], ['Jueves', 'Recojo']] },
    },
  },
  {
    id: 'i5', t: '15:10', ch: 'presencial', who: 'colega', titulo: 'Rubén quiere irse', banner: 'assets/foto2/caminan.webp', lugar: 'Escalera de emergencia, donde nadie pasa', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Rubén te espera en la escalera de emergencia. No almorzó. «Estoy pensando en dejar las prácticas. ${F.has('conflicto_ruben') ? 'Lo de mi primo me hizo sentir que no sirvo para esto.' : F.has('ruben_sigue') ? 'Gladys me preguntó por qué revisé el expediente de mi primo, y no supe qué decir.' : 'No sé si sirvo para esto.'}»</p><p>Tienes unos minutos. <mark class="clave">Elige qué preguntarle</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces.',
    opts: [
      { id: 'que', label: '«¿Qué es lo que más te pesa?»', info: '«Que siempre soy "el practicante". Llevo ocho meses, sé más de legajos que nadie, y me piden fotocopias. Y ahora encima metí la pata.»' },
      { id: 'gusta', label: '«¿Qué es lo que te gusta de aquí?»', info: 'Rubén lo piensa. «Lo de doña Sabina. Cuando le traduje y se fue tranquila. Eso me gustó. Mi abuela tampoco entendía los papeles.»' },
      { id: 'plan', label: '«¿Qué harías si te vas?»', info: '«Mi tío tiene una agencia de turismo. Pagan más, en dólares a veces. Pero no es lo que estudié.»' },
      { id: 'exag', label: '«¿No estás exagerando? Lo de tu primo no es para tanto.»', info: 'Rubén se encoge de hombros. «Será.» Se levanta y vuelve a su escritorio sin terminar de contarte.' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('exag') ? -4 : 4, confianza: picks.includes('exag') ? -2 : 3 }, rel: { colega: picks.includes('exag') ? -1 : 1 },
      flags: picks.includes('exag') ? [] : ['ruben_escuchado'],
      out: picks.includes('exag') ? 'Rubén no vuelve a tocar el tema. Desde tu escritorio lo ves mirar ofertas de trabajo en su celular.' : 'Rubén se queda un rato callado. «Equivocarse y decirlo también es parte, ¿no?» Le dices que sí. Bajan juntos, y él le pide a Gladys hablar sobre sus tareas.',
      kusi: picks.includes('exag') ? ['triste', 'Le cerraste la puerta.'] : ['feliz', 'Lo escuchaste. Eso ya es mucho.'],
    }),
    rules: [[BP, 'A un compañero que duda, primero se le escucha. Las prácticas también son para equivocarse y aprender.']],
    mirada: {
      ve: 'Rubén lleva ocho meses en la ORH, habla quechua, conoce cada caja del archivo y se siente invisible. Muchos practicantes del Estado viven eso. Que alguien le pregunte qué le gusta de su trabajo puede ser la primera vez.',
      visual: { tipo: 'balanza', a: { t: 'Irse', items: ['Más plata con el tío', 'No volver a equivocarse aquí'] }, b: { t: 'Quedarse', items: ['Lo que estudió', 'Doña Sabina', 'Aprender de su error'] } },
    },
  },
  {
    id: 'i6', t: '16:40', ch: 'correo', who: null, titulo: 'Enviar el informe', banner: 'assets/esc/meta.webp', show: ['calidad', 'confianza', 'cumplimiento'],
    mail: { from: 'Lic. Norma Valer · Jefa de la ORH', to: 'Practicante de la ORH', asunto: 'RE: Informe técnico' },
    body: () => `<p>Mándame el informe final con un resumen de tres líneas en el correo: <mark class="clave">lo voy a leer en el celular</mark> camino a la Gerencia.</p><p>Norma Valer</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Resumen en tres líneas: qué se corrigió, qué efecto tuvo y qué se recomienda; el informe y los anexos adjuntos.',
        res: { q: 'buena', fx: { calidad: 4, confianza: 3 }, responde: 'Lic. Valer: 1) Se corrigieron cuatro errores de la tabla curricular del CAS 012-2026, incluida una celda editada fuera de la ORH (captura en anexo 3). 2) El orden de mérito cambió antes de publicarse; se publicó la versión firmada. 3) Recomiendo restringir la edición al comité y a la ORH y publicar solo versiones firmadas. Adjunto informe y anexos.',
          out: 'La Lic. Valer responde desde el taxi: «Perfecto. Lo firmo mañana a primera hora». A las 16:30 había entrado una solicitud de acceso a la información de una tal Elvira Condori. Mañana empieza otra cosa.', kusi: ['celebra', '¡Tu primer informe técnico!'] } },
      { id: 'b', label: 'Copiar todo el informe en el cuerpo del correo, para que no tenga que abrir adjuntos.',
        res: { q: 'aceptable', fx: { calidad: 1, confianza: -1 }, responde: 'Lic. Valer: le copio el informe completo…',
          out: 'La Lic. Valer responde: «Esto en el celular no se lee. Mañana lo veo en la PC».', kusi: ['pensando', 'Tres líneas era tres líneas.'] } },
    ],
    mirada: { ve: 'Quien decide en el Estado tiene poco tiempo y muchos papeles. Un resumen de tres líneas no reemplaza al informe, pero hace que se lea. Saber resumir también es una competencia técnica.' },
  },
];
