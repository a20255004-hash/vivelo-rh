// Asistente de SST · Capítulo 4 · «El permiso de altura» · Semana 2, martes.
// Hilo del mes: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas:
// - Norma G.050, Seguridad durante la construcción (D.S. 010-2009-VIVIENDA): punto 20.1 (detención de caídas sobre 1.80 m,
//   anclajes de al menos 2,265 kg-f, línea de vida horizontal instalada por persona competente) y Anexo J.2 «Permiso de trabajo
//   en altura» (aplica desde 1.80 m; firmas del supervisor de turno, jefe de obra y supervisor de seguridad; personal con
//   capacitación en trabajos en altura; certificación médica si se trabaja a más de 15 m; inspección visual del equipo en tierra
//   firme; área inferior aislada y señalizada; el permiso es diario y debe estar en el lugar de trabajo).
//   Texto de la norma: https://buenaventura.com/wp-content/uploads/2024/10/NORMA-G.050-Seguridad-durante-la-construccion-DS-N°-010-2009.pdf
// - Ley 29783, art. 63: interrupción de actividades en caso de peligro inminente (los trabajadores pueden interrumpir sus
//   actividades y, si es necesario, abandonar el lugar; no se reanudan mientras el riesgo no se haya reducido o controlado).
//   Transcrito en una sentencia de la Corte Suprema: https://img.lpderecho.pe/wp-content/uploads/2022/01/Casacion-Laboral-26849-2018-Moquegua-LPDerecho.pdf

export const CAP = {
  n: 4, titulo: 'El permiso de altura', dia: 'Semana 2, martes', foto: 'assets/foto/supervisa.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '06:25', fin: '18:30', cierreHora: '18:10',
  apertura: 'Martes. Hoy empieza el encofrado del piso 12: catorce personas a más de treinta metros del suelo.', boton: 'Subir al piso 12',
  kusi: 'Un permiso de altura es una conversación antes del riesgo. ¡Sin firma no se sube!',
  lead: 'Revisaste los anclajes, encontraste a una cuadrilla trabajando sin permiso, revisaste el permiso línea por línea, resolviste lo de dos encofradores sin capacitación y paraste el trabajo cuando sopló el viento.',
  reflexion: '¿Qué hace que un permiso sea una protección y no solo una firma?',
  siguiente: { n: 5, titulo: 'El accidente', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'piso12', p: 'Encofrado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Empieza hoy · 4 días' },
  { id: 'permiso', p: 'Permisos de trabajo en altura', j: 'Ingrid · SSOMA', d: 0, e: 'Uno por día y por cuadrilla' },
  { id: 'epp', p: 'Arneses y líneas de vida', j: 'Wilmer · Almacén', d: 0, e: 'Líneas de vida llegaron ayer' },
  { id: 'capacitacion', p: 'Capacitación en altura', j: 'Ingrid · SSOMA', d: 0, e: 'Subcontrata sin curso este año' },
  { id: 'comite', p: 'Comité de SST', j: 'Marleny · Trabajadores', d: 0, e: 'Sin reunión desde junio' },
];

export const FUTURO = {
  permiso_firme: ['Bajaste a la cuadrilla hasta tener el permiso completo y firmado.', 'Ya nadie sube al 12 sin permiso. Lo verás en el vaciado, capítulo 8.'],
  permiso_regularizado: ['Dejaste trabajar a la cuadrilla y firmaste el permiso después, «para regularizar».', 'Ese papel aparecerá en la investigación del capítulo 6.'],
  dos_reasignados: ['Los dos encofradores sin capacitación trabajaron en tierra, con su jornal completo.', 'El jueves reciben su capacitación de altura.'],
  dos_a_casa: ['Los dos encofradores sin capacitación se fueron a su casa sin jornal.', 'La cuadrilla ya sabe lo que cuesta decir que no sabe. Capítulo 6.'],
  viento_parado: ['Detuviste el trabajo en el borde cuando el viento levantó los paneles.', 'La cuadrilla aprendió que puede parar. Capítulo 8.'],
  amoladora_aviso: ['Ingrid te contó que Jhonatan ahora corta platinas con amoladora para los anclajes.', 'Capítulo 5.'],
  marleny_agenda: ['Marleny anotó en la agenda del comité la presión sobre los encofradores.', 'La llevará a la reunión del capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  marleny: { n: 'Marleny Flores', sub: 'Representante en el comité', who: 'marleny' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
  elmer: { n: 'Elmer Chapoñán', sub: 'Capataz · Encofrados del Norte', c: '#8C3B2E' },
};

export const WSP = [
  { chat: 'segundo', t: '06:05', de: 'Don Segundo', txt: 'Ya estoy arriba, ingeniera. ¿Trajo su checklist?', si: 'segundo_anclajes' },
  { chat: 'grupo', t: '06:15', de: 'Ingrid', txt: 'Hoy estoy en la obra de Lambayeque hasta las 11. Tú firmas los permisos de altura del 12. Sin permiso completo, nadie sube.' },
  { chat: 'grupo', t: '06:20', de: 'Ingrid', txt: 'Vi los arneses de la ferretería. No tienen certificación: no suben. Hablamos.', si: 'arneses_ferreteria' },
  { chat: 'elmer', t: '07:20', de: 'Elmer', txt: 'Ingeniera, mi gente ya está arriba avanzando. El permiso se lo llevo a la caseta en un rato.' },
  { chat: 'renzo', t: '08:25', de: 'Renzo', txt: '¿Por qué está parado el 12? El cliente viene a las 11 a ver el avance.' },
];

export const CORREOS = [
  { t: '06:00', de: 'Ing. Ingrid Delgado', para: 'Asistente SSOMA', asunto: 'Permiso de altura · piso 12', html: '<p>Te dejo el formato de permiso de trabajo en altura en la caseta. Es diario y por cuadrilla, y debe quedarse en el lugar de trabajo.</p><p>Revisa que estén las firmas, que cada persona tenga su capacitación en altura y su examen médico vigente, y que los equipos se hayan inspeccionado en tierra antes de subir.</p><p>Ingrid</p>' },
];

export const QUIZ = [
  { q: 'Según el formato de la Norma G.050, ¿desde qué altura se necesita un permiso de trabajo en altura?', ops: ['Desde 0.50 m', 'Desde 1.80 m', 'Desde el piso 5', 'Solo sobre 30 m'], ok: 1, por: 'El permiso de trabajo en altura de la G.050 aplica a todo trabajo desde 1.80 m con riesgo de caída.' },
  { q: '¿Cada cuánto se emite el permiso de trabajo en altura?', ops: ['Una vez por obra', 'Una vez al mes', 'Cada día, y se queda en el lugar de trabajo', 'Solo si hay viento'], ok: 2, por: 'El formato de la G.050 indica que el permiso es diario y debe estar en el lugar de trabajo.' },
  { q: 'Un permiso firmado después de que la cuadrilla ya subió…', ops: ['Es igual de válido', 'Pierde su sentido: el permiso se revisa antes del riesgo', 'Es mejor porque ya se vio el trabajo', 'Lo exige la ley así'], ok: 1, por: 'El permiso sirve para verificar condiciones antes de empezar, no para documentar lo que ya pasó.' },
  { q: 'Cuando hay un peligro grave e inminente, los trabajadores…', ops: ['Deben seguir hasta terminar la tarea', 'Pueden interrumpir sus actividades y, si es necesario, abandonar el lugar', 'Necesitan permiso escrito del residente para parar', 'Pierden su jornal si paran'], ok: 1, por: 'La Ley 29783 (art. 63) permite interrumpir las actividades, y no se reanudan mientras el riesgo no se haya reducido o controlado.' },
  { q: '¿Cuál es un punto de anclaje adecuado para una línea de vida?', ops: ['El fierro de la losa sin vaciar', 'Un punto que resista al menos 2,265 kg-f, instalado por una persona competente', 'La baranda de madera', 'Un tubo de agua'], ok: 1, por: 'La G.050 pide anclajes que resistan como mínimo 2,265 kg-f, instalados por una persona competente.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '06:30', ch: 'presencial', who: 'segundo', titulo: '¿Dónde se engancha?', banner: 'assets/esc/escalera.webp', lugar: 'Piso 12, en obra gruesa', show: ['calidad', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Amanece con neblina sobre Chiclayo. Desde el 12 se ven los techos de calamina, el humo de las primeras picanterías y, a lo lejos, la carretera a Pimentel.${F.has('segundo_anclajes') ? ' Don Segundo ya está arriba, con un termo de café: «A ver ese checklist, ingeniera».' : ' Don Segundo sube a las 6:30 sin saludar: no contestó tu mensaje del viernes.'}</p><p>Antes de que suba la cuadrilla, hay que decidir <mark class="clave">dónde se van a enganchar catorce personas</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos puntos de anclaje que aprobarías.', boton: 'Aprobar estos anclajes', resumen: 'Aprobaste',
    cols: ['Punto de anclaje', 'Qué sabes de él'],
    rows: [
      { id: 'linea', cells: ['Línea de vida horizontal entre las columnas C-4 y C-8', 'Cable certificado llegado ayer, tensado e instalado por el proveedor'] },
      { id: 'platina', cells: ['Platinas ancladas a las columnas del 11', 'Diseñadas por la oficina técnica para resistir la carga exigida'] },
      { id: 'fierro', cells: ['Fierro de la losa del 12, todavía sin vaciar', '«Toda la vida nos hemos amarrado ahí»'] },
      { id: 'baranda', cells: ['Baranda de madera del borde', 'Recién puesta, firme al empuje de la mano'] },
      { id: 'tubo', cells: ['Tubería de agua que sube por el ducto', 'Es de fierro galvanizado, se ve resistente'] },
    ],
    score: { linea: 3, platina: 3, fierro: -1, baranda: -1, tubo: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, cumplimiento: q === 'buena' ? 4 : -2 }, rel: { segundo: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['anclajes_ok'] : ['anclaje_dudoso'], cartera: { piso12: q === 'buena' ? 'Anclajes: línea de vida y platinas' : 'Anclajes sin verificar' },
        out: q === 'buena' ? 'Don Segundo tira de la línea de vida con las dos manos y asiente. «El fierro no, ¿no?» «El fierro no.» Pinta con spray amarillo las platinas aprobadas para que la cuadrilla las vea.' : 'Don Segundo se encoge de hombros: «Usted manda». Uno de los puntos que aprobaste no está diseñado para detener una caída.',
        pro: { ok: 'Un punto de anclaje se diseña e instala para resistir una caída; no basta con que «se vea fuerte».', risk: 'El fierro sin vaciar, la baranda o una tubería pueden ceder o doblarse con el tirón de una caída.', info: 'Marcar los anclajes aprobados ayuda a que nadie improvise.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Anclajes de verdad!' : 'Que se vea fuerte no basta.'],
      };
    },
    rules: [[LEY, 'Norma G.050, 20.1: los puntos de anclaje y las líneas de vida deben resistir como mínimo 2,265 kg-f y ser instalados por una persona competente.']],
    mirada: {
      ve: 'El arnés solo funciona si está enganchado a algo que aguante el tirón de una caída. Elegir el anclaje es una decisión técnica: se diseña, se instala y se verifica antes de que alguien dependa de él.',
      visual: { tipo: 'matriz', x: 'Parece fuerte', y: 'Está diseñado para una caída', cuadrantes: ['Diseñado, discreto', 'Diseñado y visible', 'Ni lo uno ni lo otro', 'Parece, pero no es'], items: [['Línea de vida', .8, .95], ['Platinas', .6, .9], ['Fierro sin vaciar', .7, .2], ['Baranda de madera', .6, .15], ['Tubería', .8, .05]] },
    },
  },
  {
    id: 'p2', t: '07:50', ch: 'presencial', who: null, titulo: 'Ya están arriba', banner: 'assets/foto2/tension.webp', lugar: 'Borde del piso 12', show: ['etica', 'cumplimiento', 'tiempo', 'personas'],
    body: (n, F) => `<p>Bajas a la caseta a buscar el formato de permiso y, cuando vuelves, los ocho encofradores de Encofrados del Norte ya están en el borde, colocando paneles. El permiso no está firmado: Elmer te escribió que «lo lleva en un rato».${F.has('arneses_aguantan') ? ' En la cintura de uno ves un arnés con un pedazo de cinta roja todavía pegado: es el A-03.' : ''}</p><p>Elmer, desde arriba: «Ingeniera, ya estamos avanzando, <mark class="clave">el papel lo firmamos ahorita, no nos pare</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedirles que bajen al piso 11 de forma ordenada, completar el permiso con Elmer en media hora y que vuelvan a subir solo los que cumplan.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 6, tiempo: -4, personas: 1 }, flags: ['permiso_firme'], cartera: { permiso: 'Cuadrilla bajada; permiso revisado antes de subir' },
          out: 'Bajan refunfuñando. Elmer te mira serio y saca el formato del bolsillo: lo tenía lleno a medias. A los diez minutos Renzo te escribe: «¿Por qué está parado el 12?». Empiezan a sumar los minutos.',
          pro: { ok: 'El permiso se revisa antes del riesgo. Bajarlos treinta minutos es el costo de que el papel sirva.', risk: 'Renzo y Elmer sienten que retrasas la obra el día que viene el cliente.', info: 'Aprovecha la media hora: revisa el permiso con la cuadrilla, no solo con el capataz.' },
          kusi: ['animo', 'Treinta minutos para que el permiso sea real.'] } },
      { id: 'b', label: 'Dejar que sigan, porque ya están enganchados a la línea de vida, y firmar el permiso cuando Elmer lo traiga.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -6, tiempo: 3 }, flags: ['permiso_regularizado'], cartera: { permiso: 'Firmado después de empezar' },
          out: 'Elmer levanta el pulgar. A las 9 te trae el formato lleno y lo firmas sin mucho detalle. La cuadrilla nunca supo qué decía.',
          pro: { ok: 'La obra avanza y evitas el conflicto.', risk: 'Un permiso firmado después solo documenta lo que ya pasó. Si alguien no tenía capacitación o un arnés estaba mal, ya era tarde.' },
          kusi: ['preocupado', '¿Para qué sirve un permiso firmado después?'] } },
      { id: 'c', label: 'Dejar que sigan, pero subir tú a revisar arnés por arnés mientras trabajan, y firmar al terminar.',
        res: { q: 'aceptable', fx: { etica: 1, cumplimiento: 1, tiempo: 1 }, flags: ['permiso_regularizado'], cartera: { permiso: 'Revisado en el borde, firmado después' },
          out: 'Recorres el borde enganchada a la línea de vida, revisando arneses a treinta metros. Encuentras dos personas que nunca llevaron curso de altura. Ya están arriba.',
          pro: { ok: 'Al menos verificas el equipo.', risk: 'Revisar en el borde es más peligroso y llega tarde: lo que encuentras ya está expuesto.' },
          kusi: ['pensando', 'Revisar en tierra es más seguro que revisar en el aire.'] } },
    ],
    rules: [[LEY, 'Norma G.050, Anexo J.2: el permiso de trabajo en altura es diario, se revisa antes de iniciar y debe estar en el lugar de trabajo.'], [BP, 'Detener una tarea no es castigar: es volver a empezarla bien.']],
    mirada: {
      ve: 'El permiso de trabajo en altura existe para que alguien se haga las preguntas antes de subir: ¿quiénes van?, ¿están capacitados?, ¿el equipo está bien?, ¿dónde se enganchan? Si se firma después, solo queda la firma.',
      visual: { tipo: 'cambio', titulo: 'Del papel al permiso', pares: [['«Lo firmamos ahorita»', 'Se revisa antes de subir'], ['Lo firma el capataz solo', 'Se conversa con la cuadrilla'], ['Queda en la caseta', 'Se queda en el lugar de trabajo']] },
    },
  },
  {
    id: 'p3', t: '08:30', ch: 'documento', who: null, titulo: 'El permiso de Elmer', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Piso 11', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Elmer te alcanza el formato, doblado en cuatro y con una mancha de café. ${F.has('permiso_firme') ? 'La cuadrilla espera sentada en el piso 11, mirando el reloj.' : 'La cuadrilla sigue trabajando arriba mientras lo lees.'}</p><p>Antes de poner tu firma, <mark class="clave">lees cada línea como si tu nombre dependiera de ella</mark>. Depende.</p>`,
    type: 'flag', prompt: 'Marca lo que impide firmar el permiso o lo que debe corregirse.',
    doc: { t: 'Permiso de trabajo en altura N.° 012', sub: 'Encofrados del Norte · Piso 12 · Edificio Los Algarrobos' },
    lines: [
      { id: 'firmas', t: 'Firmas: capataz de turno (Elmer Chapoñán). Jefe de obra: en blanco. Supervisión de seguridad: en blanco.', bad: LEY, why: 'El formato de la G.050 pide las firmas del supervisor de turno, el jefe de obra y el supervisor de seguridad.' },
      { id: 'curso', t: 'Personal: 8 encofradores. Capacitación en altura: «sí» para todos.', bad: LEY, why: 'Elmer te dijo la semana pasada que su gente no llevó curso de altura este año. Dos no lo tienen: el «sí» no es verdad.' },
      { id: 'medico', t: 'Trabajo a 33 m de altura. Certificación médica: «no aplica».', bad: LEY, why: 'El formato de la G.050 pide certificación médica cuando se trabaja a más de 15 m.' },
      { id: 'epp', t: 'Inspección visual de arneses en tierra firme: realizada, 7:15 a. m.' },
      { id: 'abajo', t: 'Área inferior aislada y señalizada: «no».', bad: LEY, why: 'Debajo del borde pasa la gente que va al comedor. El área se acordona y se señaliza contra caída de objetos.' },
      { id: 'anclaje', t: 'Puntos de anclaje: línea de vida C-4 a C-8 y platinas pintadas de amarillo.' },
      { id: 'observador', t: 'Observador que advierta caída de materiales: no designado.', bad: BP, why: 'El formato pide considerar un observador que avise a quienes están abajo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Firmas con dos observaciones al margen. Elmer respira aliviado. Una de las líneas que dejaste pasar te va a perseguir.' : `Marcas ${hitsLey} problemas. Elmer se rasca la nuca: «Lo del curso… sí pues, Wilson y Brayan no tienen». Corriges el permiso con él: seis suben, se acordona el pasadizo del comedor y Teodoro queda de observador abajo.`,
      flags: missLey ? ['permiso_incompleto'] : ['permiso_revisado'], rel: {},
      cartera: { permiso: missLey ? 'Firmado con vacíos' : 'Permiso N.° 012 corregido: 6 personas', capacitacion: missLey ? 'Sin verificar' : 'Wilson y Brayan sin curso de altura' },
      pro: { ok: 'Un permiso que dice «sí» a todo sin verificar es el más peligroso.', risk: 'Tu firma dice que revisaste. Si algo pasa, se leerá línea por línea.', info: 'Comprueba lo que te dicen: el «sí» de la capacitación lo desmintió el propio Elmer hace una semana.' },
      kusi: missLey ? ['preocupado', '¿Y los que no tienen curso?'] : ['celebra', '¡Leíste lo que el papel no quería decir!'],
    }),
    rules: [[LEY, 'Norma G.050, Anexo J.2: el permiso exige personal capacitado en altura, certificación médica sobre 15 m, área inferior aislada y las firmas de supervisión.']],
    mirada: {
      ve: 'El permiso de trabajo es una lista de preguntas incómodas. Su valor está en que alguien las responda con la verdad antes de subir. Por eso quien lo firma debe comprobar, no solo leer.',
      visual: { tipo: 'flujo', titulo: 'Un permiso que protege', pasos: ['Quiénes suben', 'Capacitación y examen médico', 'Equipo inspeccionado en tierra', 'Anclajes aprobados', 'Área inferior acordonada', 'Firmas'] },
      normas: [{ ley: 'Norma G.050, Anexo J.2 · Permiso de trabajo en altura', dice: 'Aplica desde 1.80 m. Pide firmas de supervisión, personal con capacitación en altura, certificación médica si se trabaja a más de 15 m e inspección del equipo en tierra. El permiso es diario.', practica: 'En el piso 12, a 33 m, sin curso ni examen médico no se sube.' }],
    },
  },
  {
    id: 'p4', t: '10:40', ch: 'llamada', who: null, titulo: 'Wilson y Brayan', banner: 'assets/foto/llamada.webp', lugar: 'Caseta de SSOMA', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Wilson, de Chota, y Brayan, de Mórrope, esperan sentados en un balde volteado. Tienen 19 y 23 años. Elmer quiere mandarlos a su casa: «Si no suben, no me sirven hoy».${F.has('permiso_regularizado') && !F.has('permiso_revisado') ? ' Hasta hace una hora estaban en el borde.' : ''}</p><p>Haces tres llamadas antes de decidir. <mark class="clave">Lo que decidas, ellos lo van a sentir en el bolsillo</mark>.</p>`,
    type: 'calls',
    calls: [['Ing. Ingrid Delgado', 'Contesta desde la carretera', '«El jueves a las 7 doy la capacitación de altura para toda la subcontrata. Que vengan. Y que hoy trabajen en algo de tierra, que no los castiguen por algo que es culpa de la empresa.»'], ['Elmer Chapoñán · capataz', 'Contesta en el piso 11', '«Ingeniera, yo les pago por día. Si no encofran, ¿qué hacen? Además, ellos sabían que no tenían curso.» Pausa. «Bueno… yo tampoco les pregunté.»'], ['Don Segundo Vílchez', 'Contesta con ruido de mezcladora', '«Me faltan dos para habilitar fierro en el patio. Mándemelos, que trabajan bajo mi cuenta hoy.»']],
    prompt: '¿Qué pasa con Wilson y Brayan hoy?',
    choices: [
      { id: 'a', label: 'Que trabajen hoy habilitando fierro con Don Segundo, en tierra, con su jornal completo, y que el jueves lleven la capacitación de altura antes de volver al borde.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, cumplimiento: 3 }, rel: { segundo: 1 }, flags: ['dos_reasignados'], cartera: { capacitacion: 'Wilson y Brayan: curso el jueves 7:00' },
          out: 'Brayan suelta una risa nerviosa: «Pensé que nos botaban». Elmer acepta a regañadientes cuando Don Segundo le dice que él se encarga. Al mediodía, los dos están cubiertos de óxido y contentos.',
          pro: { ok: 'Nadie trabaja en altura sin capacitación y nadie paga por una falta que no es suya.', info: 'Registra en el permiso por qué no subieron: el registro también protege a quien dice «no sé».' },
          kusi: ['celebra', '¡Seguros y con su jornal!'] } },
      { id: 'b', label: 'Aceptar que Elmer los mande a su casa: es su gente y su contrato.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -3 }, flags: ['dos_a_casa'], cartera: { capacitacion: 'Wilson y Brayan enviados a casa sin jornal' },
          out: 'Wilson y Brayan se van caminando hacia el paradero. Los demás encofradores lo ven. La próxima vez que alguien no tenga curso, no lo va a decir.',
          pro: { ok: 'Respetas la relación entre la subcontrata y su gente.', risk: 'La lección para la cuadrilla es que admitir que no sabes cuesta un día de sueldo.' },
          kusi: ['triste', 'Aprendieron que decir la verdad cuesta caro.'] } },
      { id: 'c', label: 'Dejar que suban con un compañero experimentado al lado, para que aprendan mirando.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -2, tiempo: 2 }, cartera: { capacitacion: 'Sin curso, en altura «acompañados»' },
          out: 'Suben con Teodoro al lado. Teodoro no despega los ojos de ellos y deja de hacer su propio trabajo. Al final de la mañana, nadie avanzó mucho y todos estuvieron en riesgo.',
          pro: { ok: 'Buscas no perjudicar su jornal.', risk: 'Aprender mirando a 33 metros no es una capacitación. Y el permiso no lo permite.' },
          kusi: ['preocupado', '¿Aprender en el borde? No es el lugar.'] } },
    ],
    rules: [[LEY, 'Norma G.050, Anexo J.2: solo sube personal con capacitación en trabajos en altura.'], [BP, 'Que la persona no pague por la falta de capacitación que debía darle la empresa.']],
    mirada: {
      ve: 'En construcción mucha gente trabaja por jornal y para subcontratas. Una decisión de seguridad puede dejar a alguien sin el pago del día. Buscar una tarea segura mientras se capacita protege a la persona y también a la cultura de reportar.',
      visual: { tipo: 'balanza', a: { t: 'A su casa', items: ['La subcontrata no paga el día', 'Elmer conforme', 'La cuadrilla aprende a callar'] }, b: { t: 'Tarea en tierra', items: ['Jornal completo', 'Curso el jueves', 'Decir «no sé» no se castiga'] } },
    },
  },
  {
    id: 'p5', t: '14:10', ch: 'presencial', who: null, titulo: 'Sopla el viento', banner: 'assets/esc/alarma.webp', lugar: 'Borde del piso 12', show: ['cumplimiento', 'personas', 'tiempo'],
    body: (n, F) => `<p>A las dos, como dijo Don Segundo, el viento del norte entra de golpe. Un panel de triplay se levanta del borde y se queda colgando de un clavo. Abajo, la gente sale del comedor.${F.has('permiso_revisado') ? ' Teodoro, de observador, grita «¡atención arriba!» y aparta a dos ayudantes del pasadizo acordonado.' : ' No hay nadie mirando hacia arriba.'}</p><p>Tienes que parar el trabajo en el borde. <mark class="clave">El orden en que lo haces decide si el panel cae sobre alguien</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para detener el trabajo por el viento.', boton: 'Dar las indicaciones',
    items: [
      { id: 'aviso', t: 'Avisar con el silbato y la radio: alto en el borde', por: 'Primero, todos se detienen al mismo tiempo.' },
      { id: 'abajo', t: 'Despejar el área de abajo y cerrar el paso al comedor', por: 'El panel suelto puede caer en cualquier momento.' },
      { id: 'asegurar', t: 'Amarrar o bajar el panel suelto sin desengancharse de la línea de vida', por: 'Se controla el peligro sin crear otro.' },
      { id: 'retirar', t: 'Retirar a la cuadrilla del borde a la zona protegida', por: 'Nadie se queda cerca del borde mientras dure el viento.' },
      { id: 'registrar', t: 'Anotar la interrupción en el permiso y avisar a Don Segundo y a Renzo', por: 'Lo que no se registra, mañana se discute.' },
      { id: 'reanudar', t: 'Reanudar solo cuando baje el viento y se revisen paneles y anclajes', por: 'No se vuelve mientras el riesgo no esté controlado.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 3 : 0, tiempo: -2 },
        flags: q === 'riesgosa' ? [] : ['viento_parado'], cartera: { piso12: q === 'riesgosa' ? 'Paralización desordenada por viento' : 'Parado 14:10 a 15:40 por viento; reanudado tras revisión' },
        out: q === 'buena' ? 'En ocho minutos el borde está vacío y el panel amarrado. A las 15:40 el viento baja y la cuadrilla vuelve. Uno de los encofradores te dice al pasar: «En la otra obra nos hacían seguir nomás».' : q === 'aceptable' ? 'Logras detener todo, pero hubo un momento en que tres personas seguían en el borde mientras otros bajaban el panel.' : 'En la confusión, dos encofradores se desenganchan para alcanzar el panel. Nadie cae, por suerte.',
        pro: { ok: 'Se detiene, se protege abajo, se controla el peligro, se registra y solo se vuelve cuando es seguro.', risk: 'Sin un orden claro, una paralización puede crear más riesgo que el viento.', info: 'Pide que el horario de mayor viento quede en la matriz y en el permiso de mañana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Paraste a tiempo y en orden!' : 'Primero el aviso, luego abajo.'],
      };
    },
    rules: [[LEY, 'Ley 29783, art. 63: ante un peligro inminente se interrumpen las actividades y no se reanudan mientras el riesgo no se haya reducido o controlado.'], [LEY, 'Norma G.050, 20: debajo de los trabajos en altura se evita la circulación de personas y se acordona la zona.']],
    mirada: {
      ve: 'Saber parar es tan importante como saber trabajar. En una obra alta, el clima es un peligro más: el viento de la tarde en Chiclayo puede convertir un panel de triplay en un proyectil.',
      visual: { tipo: 'linea', titulo: 'Una paralización ordenada', hitos: [['14:10', 'Alto en el borde'], ['14:12', 'Despejar abajo'], ['14:18', 'Panel amarrado, cuadrilla retirada'], ['15:40', 'Revisión y reanudación']] },
      normas: [{ ley: 'Ley 29783, art. 63', dice: 'Ante un peligro inminente, los trabajadores pueden interrumpir sus actividades e incluso abandonar el lugar. No se reanudan mientras el riesgo no se haya reducido o controlado.', practica: 'Parar por el viento no es perder el tiempo: es lo que la ley espera.' }],
    },
  },
  {
    id: 'p6', t: '15:55', ch: 'presencial', who: 'marleny', titulo: 'Lo que cuentan los encofradores', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Zona de habilitación de fierro', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Marleny amarra fierro junto a Wilson y Brayan${F.has('dos_reasignados') ? ', que llevan toda la tarde con ella' : ''}. Se seca la frente con la manga y te llama con la mano.</p><p>«Ingeniera, los de encofrado me cuentan que Elmer les dice que <mark class="clave">si se quejan, hay otros esperando en la puerta</mark>. Por eso nadie dijo nada del curso. ¿Eso lo puedo llevar al comité?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que sí, ayudarle a escribirlo sin nombres en la agenda del comité y proponer invitar a Elmer a la reunión.',
        res: { q: null, fx: { personas: 4, confianza: 3 }, rel: { marleny: 1 }, flags: ['marleny_agenda'], cartera: { comite: 'Agenda: presión a la subcontrata para no reportar' },
          out: 'Marleny saca su libreta y agrega una línea al tema 4: «Subcontratas: que puedan reportar sin miedo». «Y que venga Elmer», dice, «que lo escuche de todos, no de uno».', kusi: ['feliz', '¡El comité empieza a tener temas de verdad!'] } },
      { id: 'b', label: 'Decirle que mejor lo hablas tú con Elmer hoy mismo, sin pasar por el comité.',
        res: { q: null, fx: { personas: 1, confianza: -1 },
          out: 'Hablas con Elmer al final de la tarde. Él lo niega todo y te pregunta quién te lo dijo. Marleny se entera y te mira con cara de «así no».', kusi: ['pensando', 'Era un tema para que lo dijeran todos, no una.'] } },
    ],
    rules: [[LEY, 'El comité de SST tiene representantes de los trabajadores elegidos por ellos mismos (Ley 29783).'], [BP, 'Los temas que nadie se atreve a decir solo llegan al comité si alguien los lleva sin exponer a quien habló.']],
    mirada: { ve: 'El miedo a perder el trabajo es la barrera más fuerte contra la prevención. Cuando un problema se repite, el comité es el espacio para tratarlo sin que una sola persona cargue con el costo de haberlo dicho.' },
  },
  {
    id: 'p7', t: '17:30', ch: 'presencial', who: 'ingrid', titulo: 'Ingrid vuelve', banner: 'assets/foto/mentora.webp', lugar: 'Caseta de SSOMA', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Ingrid llega con la camioneta llena de polvo de la carretera. Se sienta, se saca el casco y lee el permiso del día.${F.has('permiso_firme') ? ' «Renzo me llamó tres veces por la media hora. Le dije que yo habría hecho lo mismo.»' : F.has('permiso_regularizado') ? ' «Este permiso lo firmaste a las 9:05. La cuadrilla subió a las 7:40. ¿Qué pasó?»' : ''}</p><p>«Tengo diez minutos antes de ir a la reunión con el cliente. <mark class="clave">Pregúntame lo que necesites para esta semana</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Ingrid.',
    opts: [
      { id: 'vaciado', label: '¿Cuándo es el vaciado del 12?', info: '«Martes de la semana 4. El cliente ya contrató la bomba de concreto y no quiere moverla. Ese día vamos a tener veinte personas arriba y mucha presión.»' },
      { id: 'amoladora', label: '¿Qué otras tareas de riesgo hay esta semana?', info: '«Corte de platinas para más anclajes. Lo está haciendo Jhonatan con la amoladora en el piso 3. Ya tiene lentes y careta, pero corta rápido porque Segundo lo apura. Échale un ojo el jueves.»' },
      { id: 'comite', label: '¿Cuándo podemos convocar al comité?', info: '«El viernes de la semana 3. Necesito que el gerente confirme. Marleny ya me pidió fecha dos veces.»' },
      { id: 'renzo', label: '¿Renzo está molesto conmigo?', info: '«Renzo está molesto con todo. Tiene penalidades si no llegamos al 13 a fin de mes. No es personal, pero no le des motivos para que lo sea.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, calidad: picks.includes('amoladora') ? 3 : 1 }, rel: { ingrid: 1 },
      flags: picks.includes('amoladora') ? ['amoladora_aviso'] : [],
      cartera: picks.includes('vaciado') ? { piso12: 'Vaciado: martes de la semana 4, con bomba' } : picks.includes('comite') ? { comite: 'Fecha tentativa: viernes de la semana 3' } : {},
      out: picks.includes('amoladora') ? 'Anotas en tu libreta: «Jueves: piso 3, Jhonatan, amoladora». Lo subrayas dos veces.' : 'Ingrid se pone el casco de nuevo y sale. La obra se apaga: solo queda el ruido de la mezcladora que lavan con manguera.',
      kusi: ['curioso', 'Cada respuesta dibuja la semana que viene…'],
    }),
    mirada: {
      ve: 'Una buena jefa de SST sabe dónde estará el riesgo la próxima semana. Preguntar por lo que viene es tan importante como resolver lo de hoy: así se prepara la prevención antes de que el peligro llegue.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Jueves', 'Capacitación de altura y corte de platinas'], ['Semana 3', 'Comité de SST'], ['Semana 4, martes', 'Vaciado del piso 12']] },
    },
  },
];
