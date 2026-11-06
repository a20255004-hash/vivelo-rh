// Generalista de RR.HH. en operación minera · Capítulo 8 · «Varados» · Semana 2, miércoles.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas (ya verificadas en capítulos anteriores):
// - D.S. 007-2002-TR, art. 9: sobretiempo voluntario; excepcionalmente obligatorio por caso fortuito o fuerza mayor.
//   https://lpderecho.pe/horas-extras-derecho-laboral
// - D.S. 007-2002-TR, jornadas atípicas: el promedio del ciclo no puede superar la jornada máxima.
// - Ley 29245 (tercerización), ya citada: los trabajadores de contratistas también están en la unidad.
// No se citan montos ni plazos.

export const CAP = {
  n: 8, titulo: 'Varados', dia: 'Semana 2, miércoles', foto: 'assets/3d/scenes/planta.webp',
  lugar: 'Minera Puquio · Apurímac, 4,100 m s. n. m.',
  inicio: '05:45', fin: '21:00', cierreHora: '20:45',
  apertura: 'Tu día 10 de 14. Segundo día de bloqueo. Amanece nublado y el comedor huele a café recalentado. En la pizarra de la sala de crisis alguien escribió con plumón rojo: «Víveres: 4 días».', boton: 'Ir a la sala de crisis',
  kusi: 'El segundo día es el más difícil: la gente se cansa y la paciencia se acaba. Hoy toca cuidar.',
  lead: 'Escuchaste a quienes sostienen el campamento, usaste la ventana humanitaria con criterio, repartiste la comida sin distinguir propios de contratistas, armaste un plan de bienestar y ordenaste la agenda de la mesa de mañana.',
  reflexion: '¿Qué necesita una persona varada, además de comida?',
  siguiente: { n: 9, titulo: 'La mesa de diálogo', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'bloqueo', p: 'Bloqueo de la carretera', j: 'Percy · Doña Juana', d: 1, e: 'Segundo día' },
  { id: 'campamento', p: 'Personas en el campamento', j: 'RR.HH. · Seguridad', d: 1, e: '903 arriba' },
  { id: 'ventana', p: 'Ventana humanitaria', j: 'RR.HH. · Tópico', d: 0, e: 'Una van a las 10' },
  { id: 'mesa', p: 'Mesa de diálogo', j: 'Lima · Comunidad', d: 0, e: 'Mañana a las 9' },
];

export const FUTURO = {
  ventana_bien: ['Bajaron por la ventana quienes lo necesitaban de verdad.', 'Doña Juana sabrá que no abusaste del paso humanitario.'],
  ventana_abusada: ['Usaste la ventana humanitaria para alguien sin urgencia.', 'La comunidad lo sacará en la mesa.'],
  comida_equitativa: ['Repartiste la comida igual entre propios y contratistas.', 'Elmer y los de Movitierra lo recordarán.'],
  comida_desigual: ['Se priorizó la comida de los trabajadores propios.', 'Los de contratistas sentirán que son de segunda.'],
  bienestar_varado: ['Armaste un plan de bienestar para los varados.', 'Lima lo pedirá como protocolo para otras unidades.'],
  agenda_mesa: ['Ordenaste la agenda de la mesa de diálogo.', 'Mañana la mesa empezará por lo que más le importa a la comunidad.'],
  pelea_mediada: ['Separaste una pelea entre un propio y un contratista sin sanciones en caliente.', 'Los dos te buscarán después del bloqueo.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  presidenta: { n: 'Doña Juana Huamán', sub: 'Presidenta de la comunidad', who: 'presidenta' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de Movitierra', who: 'contratista' },
  familias: { n: 'Familias Minera Puquio', sub: 'Grupo informativo · 612 participantes', c: '#2F6B3F' },
  garro: { n: 'Dra. Inés Garro', sub: 'Gerente de Relaciones Comunitarias · Lima', c: '#4A5A8A' },
  delegado: { n: 'Wilber Mamani', sub: 'Delegado de los operadores de mina', c: '#7A4A2E' },
};

export const WSP = [
  { chat: 'familias', t: '06:10', de: 'Señora Marleny', txt: 'Gracias por el mensaje de ayer. Juan me llamó. Esperamos el de las 12 🙏', si: 'familias_informadas' },
  { chat: 'familias', t: '06:10', de: 'Señora Marleny', txt: '¿Por qué nadie dice nada? Ayer dijeron que bajaban hoy.', no: 'familias_informadas' },
  { chat: 'delegado', t: '07:20', de: 'Wilber', txt: 'La guardia B está reventada. Al menos sabemos que las horas se pagan. Gracias por eso.', si: 'sobretiempo_legal' },
  { chat: 'delegado', t: '07:20', de: 'Wilber', txt: 'La guardia B está reventada y encima dicen que no nos pagan las horas. Así no se puede.', no: 'sobretiempo_legal' },
  { chat: 'contratista', t: '09:00', de: 'Ing. Salas', txt: 'Ingeniera, cuente conmigo: mis operadores relevan a la guardia B en el frente 2 desde hoy. Que descansen los suyos.', si: 'salas_aliado' },
  { chat: 'garro', t: '14:05', de: 'Dra. Garro', txt: 'Subo mañana en helicóptero a las 7:30 con el gerente de Operaciones. Tengo autorización para firmar sobre empleo local. Prepárame la agenda.' },
  { chat: 'presidenta', t: '19:30', de: 'Doña Juana', txt: 'Mañana a las 9 en el local comunal. Vamos doce. Que venga usted también, señorita.' },
];

export const CORREOS = [
  { t: '06:00', de: 'Seguridad · Puquio', para: 'Comité de crisis', asunto: 'Estado de la unidad · día 2 de bloqueo', html: '<p>Personas: 903. Víveres: 4 días con raciones actuales. Combustible: 3 días. Tópico: 2 atenciones por soroche severo y 1 crisis hipertensiva en la noche. Insulina: 1 frasco.</p>' },
];

export const QUIZ = [
  { q: 'Una ventana humanitaria en un bloqueo sirve para…', ops: ['Bajar a quien quiera irse', 'Urgencias médicas y casos que la comunidad aceptó', 'Bajar a los jefes', 'Subir combustible sin avisar'], ok: 1, por: 'Usarla solo para lo acordado mantiene la confianza y la ventana abierta.' },
  { q: 'Logística propone priorizar la comida de los trabajadores propios. ¿Qué haces?', ops: ['Aceptas: son de la planilla', 'Repartes igual para todos los que están arriba', 'Que cada contratista se las arregle', 'Que coman los que trabajan'], ok: 1, por: 'En la unidad todos son personas varadas. Distinguir crea un conflicto dentro del conflicto.' },
  { q: 'Dos trabajadores se pelean en el comedor el segundo día de bloqueo. Lo primero es…', ops: ['Sancionar a los dos en el acto', 'Separarlos, calmarlos y escucharlos por separado', 'Ignorarlo', 'Mandar a uno a la carretera'], ok: 1, por: 'En plena tensión, sancionar en caliente suele escalar. Primero se calma y se escucha.' },
  { q: 'Además de comida, una persona varada necesita…', ops: ['Nada más', 'Información, contacto con su familia, descanso y alguien que la escuche', 'Más horas de trabajo', 'Un bono'], ok: 1, por: 'El encierro y la incertidumbre pesan tanto como el hambre.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '06:15', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del café', banner: 'assets/esc/reloj.webp', lugar: 'Sala de crisis', show: ['personas', 'tiempo'],
    body: () => `<p>Antes de la reunión del comité, llamas a quienes sostienen el campamento. Tienes la libreta abierta y el lapicero sin tapa.</p><p>Hoy <mark class="clave">la crisis se mide en personas, no en toneladas</mark>.</p>`,
    type: 'calls',
    calls: [['Tópico · enfermera Rosmery', 'Contesta con voz cansada', '«Don Isidro, el diabético, tiene insulina para hoy y mañana. La señora de lavandería tuvo la presión en 180 anoche. Y hay un muchacho de Movitierra que no para de llorar. No es físico, ingeniera.»'], ['Gladys · comedor', 'Contesta entre ollas', '«Con las raciones de ayer llego a cuatro días. Logística me dice que priorice a los propios. Yo no sé hacer eso, ingeniera. ¿Les sirvo menos a unos?»'], ['Wilber · delegado', 'Contesta desde el frente', '«Ramiro, de mi guardia, cumple años su hija hoy. Seis años. Está que se quiebra. Y no es el único. Necesitamos algo más que sopa.»']],
    prompt: 'Terminaste las llamadas. ¿Qué llevas primero al comité?',
    choices: [
      { id: 'a', label: 'La lista de casos de salud física y emocional, la pregunta de Gladys sobre la comida y el pedido de Wilber: hoy la crisis es de personas.',
        res: { q: 'buena', fx: { personas: 4, calidad: 3 }, rel: { percy: 1 },
          out: 'En el comité, Valdivia quiere hablar de combustible. Percy lo para: «Primero escuchemos a RR.HH.». Lees tu lista. Nadie interrumpe.',
          pro: { ok: 'Pones en la mesa lo que los demás no ven desde sus planillas.', info: 'En el día 2, lo emocional empieza a pesar tanto como lo físico.' },
          kusi: ['animo', 'Hoy la crisis tiene nombres.'] } },
      { id: 'b', label: 'Solo lo de la comida: es lo más urgente para la operación.',
        res: { q: 'aceptable', fx: { tiempo: 1, personas: -1 },
          out: 'El comité discute raciones una hora. Nadie pregunta por el muchacho de Movitierra ni por Ramiro.',
          pro: { ok: 'La comida importa.', risk: 'Lo emocional que nadie atiende hoy explota mañana.' },
          kusi: ['pensando', '¿Y el que llora?'] } },
    ],
    mirada: {
      ve: 'Rosmery, Gladys y Wilber ven la crisis desde abajo. Una generalista de campo junta esas tres miradas y las lleva al comité, donde suelen hablarse de toneladas y combustible.',
      visual: { tipo: 'flujo', titulo: 'Lo que pesa en el día 2', pasos: ['Medicinas', 'Comida', 'Cansancio', 'Tristeza', 'Familias lejos'] },
    },
  },
  {
    id: 'i2', t: '08:30', ch: 'documento', who: null, titulo: 'Doce asientos', banner: 'assets/3d/scenes/hospital.webp', lugar: 'Tópico médico', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>A las 10 baja la van de la ventana humanitaria, con el doctor Ayala. La comunidad aceptó ambulancias y urgencias médicas. Hay pocos asientos y muchas razones para irse.</p><p>Con Ayala, decides <mark class="clave">quiénes bajan</mark>. Elige tres casos.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres casos que bajan hoy.', boton: 'Confirmar la lista', resumen: 'Bajaron',
    cols: ['Caso', 'Lo que sabes'],
    rows: [
      { id: 'presion', cells: ['Señora de lavandería con crisis hipertensiva', 'Ayala recomienda evaluarla en Abancay'] },
      { id: 'soroche', cells: ['Operador con soroche severo que no mejora', 'Necesita bajar de altura'] },
      { id: 'parto', cells: ['Esposa de un operador entra en trabajo de parto en Abancay', 'Él no es el paciente'] },
      { id: 'ingeniero', cells: ['Ingeniero de Planeamiento con reunión en Lima', 'Valdivia lo pidió'] },
      { id: 'duelo', cells: ['Trabajador de contratista cuyo padre murió anoche', 'El entierro es el viernes'] },
      { id: 'cansado', cells: ['Supervisor de la guardia B, agotado', 'Ya cumplió 15 días'] },
    ],
    score: { presion: 3, soroche: 3, parto: 1, duelo: 1, cansado: 0, ingeniero: -4 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      const abuso = picks.includes('ingeniero');
      return {
        q, fx: { etica: abuso ? -5 : 3, personas: picks.includes('presion') && picks.includes('soroche') ? 5 : 1, confianza: abuso ? -4 : 2 }, rel: { presidenta: abuso ? -1 : 1 },
        flags: [abuso ? 'ventana_abusada' : 'ventana_bien'], cartera: { ventana: abuso ? 'Ventana usada para una reunión' : 'Ventana usada para urgencias' },
        out: abuso ? 'En el km 42, Brayan reconoce al ingeniero. «¿Esto es una urgencia?» La van pasa, pero en la fogata ya se comenta que la minera «hace trampa».' : q === 'buena' ? 'La van pasa por el km 42 a las 10:40. Brayan levanta la mano para que los muchachos aparten los troncos. Ayala te escribe desde Abancay: «Las dos, estables».' : 'La van baja con casos que no eran médicos y deja arriba a alguien que sí lo era.',
        pro: { ok: 'Respetar el acuerdo de la ventana mantiene la ventana abierta.', risk: 'Usar el paso humanitario para otra cosa rompe la confianza de la comunidad.', info: 'Para los casos de duelo o parto, pregúntale a Doña Juana: quizá acepte un segundo viaje.' },
        kusi: [abuso ? 'indignado' : q === 'buena' ? 'celebra' : 'pensando', abuso ? '¡Una reunión no es una urgencia!' : q === 'buena' ? 'Bajaron las que tenían que bajar.' : 'Primero lo médico.'],
      };
    },
    rules: [[POL, 'La ventana humanitaria acordada con la comunidad es para ambulancias y urgencias médicas.']],
    mirada: {
      ve: 'Cada asiento tiene una historia que duele: un parto, un entierro, un cansancio de quince días. Pero la ventana existe porque la comunidad confía en que solo bajará lo urgente. Cuidar ese acuerdo es cuidar el siguiente viaje.',
      visual: { tipo: 'matriz', x: 'Urgencia médica', y: 'Acordado con la comunidad', cuadrantes: ['Baja hoy', 'Consultar a la comunidad', 'No baja', 'Pedir segundo viaje'], items: [['Crisis hipertensiva', .9, .9], ['Soroche severo', .85, .85], ['Parto de la esposa', .3, .5], ['Duelo', .25, .45], ['Supervisor agotado', .2, .3], ['Reunión en Lima', .05, .05]] },
    },
  },
  {
    id: 'i3', t: '10:30', ch: 'presencial', who: null, titulo: '«Que coman los nuestros»', banner: 'assets/foto2/tension.webp', lugar: 'Almacén del comedor', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>El jefe de Logística, Hernán, te espera en el almacén con la lista de raciones. Tiene ojeras y la voz ronca.</p><p>«Tengo comida para cuatro días. Si priorizamos a los 400 propios, llego a siete. <mark class="clave">Los de contratistas, que los alimente su empresa</mark>. Es lo que dice el contrato.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Repartir igual para las 903 personas, bajar un poco las raciones y pedir a las contratistas que aporten lo que tengan en sus almacenes. Los costos se ordenan después.',
        res: { q: 'buena', fx: { etica: 5, personas: 5, confianza: 3 }, rel: { contratista: 1 }, flags: ['comida_equitativa'], cartera: { campamento: 'Raciones iguales para 903 personas' },
          out: 'Hernán resopla, pero ajusta la lista. El Ing. Salas manda al comedor cuatro sacos de arroz que tenía en su contenedor. Elmer, en la cola de la cena, te saluda con la cabeza.',
          pro: { ok: 'En una emergencia, todas las personas arriba son tu gente.', risk: 'Logística tendrá que cuadrar costos con las contratistas después.', info: 'Las cuentas con las contratistas se arreglan después; el hambre no espera.' },
          kusi: ['celebra', 'Nadie es de segunda en el comedor.'] } },
      { id: 'b', label: 'Aceptar la propuesta: el contrato dice que cada contratista alimenta a su gente y así la comida dura más.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -5, confianza: -3 }, rel: { contratista: -1 }, flags: ['comida_desigual'], cartera: { campamento: 'Raciones distintas para propios y contratistas' },
          out: 'A la hora del almuerzo, los de contratistas reciben media ración. Hay gritos en la cola. Alguien escribe en el baño: «Somos de segunda».',
          pro: { ok: 'La comida dura más días.', risk: 'Dividir a las personas varadas crea un conflicto dentro del conflicto.' },
          kusi: ['triste', 'Media ración y rabia entera.'] } },
    ],
    rules: [[BP, 'En una emergencia, las personas en la unidad se cuidan por igual; los costos se ordenan después.']],
    mirada: {
      ve: 'Hernán no es cruel: hace cuentas para que la comida alcance. Pero en un comedor compartido, servir distinto a quien comparte la misma mesa destruye en un día lo que costó años construir. La equidad, aquí, también es seguridad.',
      visual: { tipo: 'balanza', a: { t: 'Priorizar a los propios', items: ['Comida para 7 días', 'Gritos en la cola', '«Somos de segunda»'] }, b: { t: 'Raciones iguales', items: ['Comida para 4 días o algo más', 'Las contratistas aportan', 'Una sola unidad'] } },
    },
  },
  {
    id: 'i4', t: '12:30', ch: 'documento', who: null, titulo: 'Más que sopa', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Contenedor de RR.HH.', show: ['personas', 'calidad'],
    body: () => `<p>A las 12 mandaste el mensaje diario a las familias. Ahora te toca lo que pidió Wilber: algo más que sopa.</p><p>Armas, con Percy, <mark class="clave">un plan de bienestar para los varados</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del plan.', boton: 'Publicar el plan',
    bloques: [
      { id: 'cont', t: 'Contacto con la familia', n: 2, ops: [
        { id: 'c1', t: 'Turnos de videollamada en la sala de capacitación, con la red satelital.', ok: true },
        { id: 'c2', t: 'Mensaje diario a las familias a las 12, sin falta.', ok: true },
        { id: 'c3', t: 'Prohibir el uso del celular en el comedor para ahorrar datos.', ok: false, por: 'Cortar el contacto aumenta la angustia.' },
      ] },
      { id: 'desc', t: 'Descanso', n: 2, ops: [
        { id: 'd1', t: 'Rotación para que la guardia B tenga su descanso entre turnos.', ok: true },
        { id: 'd2', t: 'Campeonato de fulbito y de ajedrez en la tarde.', ok: true, por: 'Ocupar la cabeza también descansa.' },
        { id: 'd3', t: 'Doble turno «para que pase rápido».', ok: false, por: 'El cansancio en mina es riesgo de accidente.' },
      ] },
      { id: 'emo', t: 'Apoyo emocional', n: 2, ops: [
        { id: 'e1', t: 'Atención psicológica remota con la psicóloga de la empresa en Lima.', ok: true },
        { id: 'e2', t: 'Llamar tú misma a los casos que identificó el tópico.', ok: true },
        { id: 'e3', t: 'Decirles a todos que «los hombres no lloran».', ok: false, por: 'Callar el dolor no lo hace desaparecer.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0 }, rel: { percy: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['bienestar_varado'], cartera: { campamento: q === 'riesgosa' ? 'Sin plan de bienestar' : 'Plan de bienestar en marcha' },
        out: q === 'buena' ? 'A las 4 de la tarde, Ramiro habla por videollamada con su hija, que sopla velas en Juliaca. Sale de la sala con los ojos húmedos y te da un abrazo de oso.' : 'Hay algunas actividades, pero el muchacho de Movitierra sigue llorando solo en su habitación.',
        pro: { ok: 'Contacto, descanso y apoyo emocional sostienen a la gente cuando no se sabe cuándo termina.', risk: 'Más trabajo y menos contacto agravan el encierro.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Las velas de Juliaca llegaron hasta aquí!' : 'Falta cuidar lo de adentro.'],
      };
    },
    rules: [[LEY, 'Aun en emergencia, el sobretiempo se limita a lo indispensable (D.S. 007-2002-TR, art. 9).'], [BP, 'En una crisis larga, cuida el contacto con la familia, el descanso y la salud emocional.']],
    mirada: {
      ve: 'El encierro pesa distinto en cada persona: a unos les falta la familia, a otros el sueño, a otros alguien que les pregunte cómo están. Un plan de bienestar no resuelve el bloqueo, pero hace que la gente llegue entera al día en que se abra.',
      visual: { tipo: 'cambio', titulo: 'Del encierro al cuidado', pares: [['Celular prohibido', 'Videollamadas por turnos'], ['Doble turno', 'Rotación y fulbito'], ['«Los hombres no lloran»', 'Psicóloga remota y llamadas']] },
    },
  },
  {
    id: 'i5', t: '15:00', ch: 'llamada', who: null, titulo: 'La agenda de mañana', banner: 'assets/foto/reunion-jefa.webp', show: ['calidad', 'confianza'],
    body: () => `<p>La doctora Inés Garro, gerente de Relaciones Comunitarias, te llama desde Lima. Es directa, fuma mientras habla y lleva 25 años en conflictos mineros.</p><p>«Tú conoces a la gente. <mark class="clave">Ordéname la agenda</mark>: qué va primero, qué va después. Si empezamos mal, no hay segunda reunión.»</p>`,
    type: 'secuencia', prompt: 'Ordena la agenda de la mesa de diálogo. Usa las flechas.', boton: 'Mandar la agenda',
    items: [
      { id: 'sal', t: 'Saludo en quechua y castellano, y reconocimiento de la comunidad y sus preocupaciones', por: 'Se empieza escuchando.' },
      { id: 'hum', t: 'Agradecer la ventana humanitaria y acordar que se mantenga', por: 'Lo que ya funcionó, primero.' },
      { id: 'emp', t: 'Empleo local en la próxima licitación de contratistas', por: 'Lo que más les preocupa.' },
      { id: 'con', t: 'Reglas para contar el 30 %, con las dos cifras sobre la mesa', por: 'El nudo de fondo.' },
      { id: 'for', t: 'Ruta de formación para los jóvenes y los que no pasaron el examen', por: 'El futuro de Brayan y otros.' },
      { id: 'act', t: 'Acta con compromisos, responsables, fechas, y la apertura de la carretera', por: 'Lo que se firma al final.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['agenda_mesa'], cartera: { mesa: q === 'riesgosa' ? 'Agenda sin orden' : 'Agenda lista para mañana' },
        out: q === 'buena' ? 'Garro la lee en silencio. «Perfecto. La apertura al final, nunca al inicio. Si la pides primero, parece que solo te importa la carretera.»' : 'Garro mueve puntos: «Si empiezas pidiendo que abran, te levantan de la mesa».',
        pro: { ok: 'Una buena agenda empieza por reconocer y termina en compromisos.', info: 'Pedir la apertura de la carretera al inicio suele romper la mesa.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Agenda de experta!' : 'Primero escuchar, al final abrir.'],
      };
    },
    rules: [[BP, 'En una mesa de diálogo, la apertura de la carretera se pide al final, junto con los compromisos.']],
    mirada: {
      ve: 'La agenda también es un mensaje: dice qué te importa primero. Si la minera empieza por la carretera, la comunidad entiende que solo le importan sus camiones. Si empieza por escuchar, la carretera llega sola.',
      visual: { tipo: 'flujo', titulo: 'La agenda de la mesa', pasos: ['Reconocer', 'Lo humanitario', 'Empleo en la licitación', 'Conteo del 30 %', 'Formación', 'Acta y apertura'] },
    },
  },
  {
    id: 'i6', t: '18:40', ch: 'presencial', who: 'yuri', titulo: 'La pelea del comedor', banner: 'assets/foto2/grito.webp', lugar: 'Comedor del campamento', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>En la cola de la cena, un operador propio empuja a Elmer, de Movitierra. ${F.has('comida_desigual') ? '«¡Tú comes de lo nuestro!», le grita.' : '«¡Por culpa de tu gente estamos aquí encerrados!», le grita, porque Elmer es de Andahuaylas y «comunero como los del bloqueo».'} Yuri se mete en medio.</p><p>Todo el comedor mira. Valdivia, desde su mesa, dice: «<mark class="clave">Sanción a los dos, ahora mismo</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Separarlos, sacarlos del comedor por puertas distintas y escuchar a cada uno por separado. Las medidas, si corresponden, mañana y con sus descargos.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, etica: 3 }, rel: { yuri: 1 }, flags: ['pelea_mediada'], cartera: { campamento: 'Pelea separada · conversación con los dos' },
          out: 'El operador, afuera, se pone a llorar: lleva 16 días arriba y su mamá está enferma. Elmer solo dice: «Yo también quiero bajar, señorita». Los dos vuelven a cenar en mesas distintas.',
          pro: { ok: 'Calmas primero, escuchas después y decides con la cabeza fría.', risk: 'Valdivia sentirá que lo desautorizaste en público.', info: 'En el día 2 de un encierro, la mayoría de peleas son cansancio y miedo.' },
          kusi: ['animo', 'Primero calmar, después entender.'] } },
      { id: 'b', label: 'Hacer caso a Valdivia: sanción a los dos, delante de todos, para que nadie más se pelee.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3 }, rel: { yuri: -1 },
          out: 'Los dos se van con la cabeza baja. En la noche, en el grupo de Movitierra, alguien escribe: «A los comuneros nos sancionan igual aunque nos empujen».',
          pro: { ok: 'Marcas un límite claro.', risk: 'Sancionar en caliente, en público y sin escuchar, convierte una pelea en una injusticia.' },
          kusi: ['triste', 'Elmer no empezó…'] } },
    ],
    rules: [[POL, 'Las medidas disciplinarias se aplican con descargos, no en el acto.'], [BP, 'En una emergencia, separa, calma y escucha antes de decidir.']],
    mirada: {
      ve: 'Un bloqueo afuera puede partir la unidad por dentro: propios contra contratistas, costeños contra comuneros. La pelea del comedor no es solo entre dos personas: es la primera grieta. Cerrarla con cuidado evita la segunda.',
      visual: { tipo: 'linea', titulo: 'Diez minutos en el comedor', hitos: [['18:40', 'Empujón en la cola'], ['18:42', 'Yuri se mete en medio'], ['18:45', 'Los separas'], ['19:00', 'Cada uno cuenta lo suyo']] },
    },
  },
  {
    id: 'i7', t: '20:30', ch: 'presencial', who: 'percy', titulo: 'La víspera', banner: 'assets/foto/cafe.webp', lugar: 'Contenedor de RR.HH.', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Percy repasa contigo la agenda de mañana. ${F.has('promesa_sin_respaldo') ? '«Garro sabe del papel que firmaste ayer. Mañana lo va a tener que corregir delante de todos. Prepárate.»' : '«Garro confía en ti. Eso no pasa seguido.»'}</p><p>«Doña Juana pidió que vayas tú. <mark class="clave">¿Qué vas a llevar a la mesa?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Los datos que juntaste estas dos semanas: el reporte de las dos cifras, el plan de contratación local, la ruta del «todavía no» y la lista de lo que pidió Brayan.',
        res: { q: 'buena', fx: { calidad: 4, confianza: 3 }, rel: { percy: 1 },
          out: 'Percy imprime todo en la impresora que atasca cada tres hojas. A las 11, tienes una carpeta azul con separadores. Te duermes con ella al lado.',
          pro: { ok: 'En una mesa, lo que construiste antes vale más que cualquier discurso.', info: 'Lleva copias para la comunidad: que no tengan que pedirlas.' },
          kusi: ['feliz', 'Tu carpeta azul es tu memoria.'] } },
      { id: 'b', label: 'Escuchar. Lo demás lo trae Lima.',
        res: { q: 'aceptable', fx: { confianza: 1 },
          out: 'Percy asiente, pero imprime igual el reporte. «Por si acaso.»',
          pro: { ok: 'Escuchar es clave en la mesa.', risk: 'Lima no conoce lo que tú viste en estos diez días.' },
          kusi: ['pensando', 'Tú sabes cosas que Lima no.'] } },
    ],
    mirada: { ve: 'Mañana se sienta a la mesa todo lo que pasó en estos días: el comedor, Movitierra, la lista, el examen médico, el rumor. La generalista de campo es la memoria de la unidad, y una mesa de diálogo se gana con memoria.' },
  },
];
