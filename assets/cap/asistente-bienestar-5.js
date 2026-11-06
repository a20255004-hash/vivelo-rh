// Asistente de Bienestar Social · Capítulo 5 · «La campaña de salud» · Semana 2, jueves.
// Hilo del mes: una campaña de salud a la que casi nadie del turno noche puede ir. Augusto responde sobre el lactario.
// Normas citadas:
// - R.M. 376-2008-TR, Medidas nacionales frente al VIH y SIDA en el lugar de trabajo: el empleador no puede exigir
//   la prueba de VIH ni su resultado, ni al contratar ni durante la relación laboral (art. 8, según comentario).
//   https://sni.org.pe/medidas-nacionales-frente-al-vih-y-sida-en-el-lugar-de-trabajo/
//   https://ius360.com/la-proteccion-de-la-informacion-relativa-al-estado-del-vih-en-el-lugar-de-trabajo-celss-jose-reynaldo-ponce/
// - Ley 29733, de Protección de Datos Personales: los datos de salud son datos sensibles; su tratamiento requiere
//   consentimiento y protección reforzada.
// - D.S. 023-2021-MIMP, Reglamento de la Ley 29896 (lactarios): referencias del capítulo 4.
//   https://busquedas.elperuano.pe/dispositivo/NL/1976374-4

export const CAP = {
  n: 5, titulo: 'La campaña de salud', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/hospital.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '06:15', fin: '19:30', cierreHora: '19:15',
  apertura: 'Viernes. La campaña de salud que Nelly coordinó con la red de salud empieza a las 8 en el auditorio. El turno noche sale a las 7. Algo no cuadra.', boton: 'Revisar el plan de la campaña',
  kusi: 'Una campaña sirve si llega a quien más la necesita. ¡A mover horarios!',
  lead: 'Moviste la campaña hacia el turno noche, defendiste la confidencialidad de los resultados frente al gerente y cuidaste a un trabajador que no estaba en condiciones de entrar a su turno.',
  reflexion: '¿A quién no habrías visto hoy si la campaña se quedaba de 8 a 1?',
  siguiente: { n: 6, titulo: 'La denuncia', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'campana', p: 'Campaña de salud', j: 'Nelly · Red de salud', d: 0, e: 'De 8 a 1 en el auditorio' },
  { id: 'noche', p: 'Turno noche y campo', j: 'Bienestar · Logística', d: 0, e: 'Sin acceso' },
  { id: 'resultados', p: 'Resultados de la campaña', j: 'Bienestar', d: 0, e: 'Por definir quién los ve' },
  { id: 'lactario', p: 'Lactario de la planta', j: 'Augusto', d: 0, e: 'Esperando respuesta' },
  { id: 'informe', p: 'Informe de la campaña', j: 'Bienestar', d: 0, e: 'Por redactar' },
];

export const FUTURO = {
  noche_atendida: ['Abriste módulos de la campaña a la salida y a la entrada del turno noche.', 'El turno noche empieza a confiar en Bienestar.'],
  noche_excluida: ['El turno noche se quedó sin campaña.', 'Les costará acercarse a Bienestar cuando lo necesiten.'],
  resultados_agregados: ['Le diste a Augusto un reporte por áreas, sin nombres, y nada sobre VIH.', 'Augusto aprendió que Bienestar no entrega datos de salud.'],
  consentimiento_presionado: ['Pediste consentimientos para compartir resultados con los jefes, en plena campaña.', 'Alguien se sintió obligado a firmar.'],
  resultados_entregados: ['Le entregaste a Augusto la lista de resultados con nombres.', 'Esa lista circulará en el capítulo 6.'],
  campana_confidencial: ['Corregiste a tiempo cómo se registraban los datos de VIH y las fotos de la campaña.', 'Las personas que se hicieron la prueba quedaron protegidas.'],
  informe_campana: ['Tu informe de la campaña muestra quién llegó, quién no y qué sigue.', 'Nelly lo presentará a Gerencia.'],
  operario_protegido: ['Evitaste que un operario con la presión muy alta entrara a las centrífugas.', 'Su supervisor te recordará.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Operario de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Operaria de envasado · turno noche', c: '#9B4F96' },
  pisfil: { n: 'Ing. Pisfil', sub: 'Secretario del comité de SST', c: '#6A994E' },
  supervisores: { n: 'Supervisores Sipán', sub: '40 participantes', c: '#386FA4' },
};

export const WSP = [
  { chat: 'grupo', t: '06:10', de: 'Nelly', txt: 'Hoy es el día 💪 La red de salud llega a las 7:30 con dos técnicas, una enfermera y el consejero de VIH. Yo llego a las 9, tengo cita con el dentista de mi hijo.' },
  { chat: 'yesenia', t: '06:20', de: 'Yesenia', txt: 'Señorita, ¿es cierto que la campaña es a las 8? A esa hora ya estamos en el bus 😔' },
  { chat: 'pisfil', t: '09:00', de: 'Ing. Pisfil', txt: 'El comité vio la oficina del segundo piso del laboratorio. Aprobada la ubicación para el lactario. Mando el acta el lunes.', si: 'csst_lactario' },
  { chat: 'augusto', t: '09:10', de: 'Augusto', txt: 'Aprobado lo de los escritorios y el frigobar. Pero la llave no la quiero en el tópico, que ahí se pierden cosas.', si: 'lactario_propuesta' },
  { chat: 'augusto', t: '09:10', de: 'Augusto', txt: 'Lo del lactario ya está resuelto con el depósito, ¿no? Hoy no me distraigan con eso.', no: 'lactario_propuesta' },
  { chat: 'maribel', t: '12:40', de: 'Maribel', txt: 'Gonzalo me cubrió con el practicante a las 11 😊 Primera vez que no me extraigo corriendo.', si: 'gonzalo_acuerdo' },
  { chat: 'hector', t: '15:10', de: 'Don Héctor', txt: 'Señorita me dijeron que había campaña. Yo no pude ir, tengo terapia en Chiclayo. ¿Cuándo me ve el doctor de la empresa?', si: 'limitacion_sabida' },
  { chat: 'yesenia', t: '19:05', de: 'Yesenia', txt: 'Me tomaron la presión y me pusieron la vacuna antes de entrar 🙏 Gracias señorita.', si: 'noche_atendida' },
];

export const CORREOS = [
  { t: '06:30', de: 'Red de Salud · Coordinación de campañas', para: 'Bienestar Social', asunto: 'Campaña de salud Agroindustrial Sipán', html: '<p>Confirmamos la campaña de hoy de 8:00 a 13:00 en el auditorio: presión arterial, glucosa, índice de masa corporal, vacunación contra la influenza y consejería con prueba rápida voluntaria de VIH.</p><p>Las pruebas de VIH son voluntarias, con consejería previa y entrega confidencial de resultados. Agradeceremos un espacio cerrado para ese módulo.</p>' },
];

export const QUIZ = [
  { q: '¿Puede el empleador pedir los resultados de las pruebas de VIH de una campaña?', ops: ['Sí, si la campaña la pagó la empresa', 'No: la R.M. 376-2008-TR prohíbe exigir la prueba o su resultado', 'Solo para los supervisores', 'Sí, en la zafra'], ok: 1, por: 'La R.M. 376-2008-TR prohíbe al empleador exigir la prueba de VIH o su resultado, al contratar o durante la relación laboral.' },
  { q: 'Un gerente quiere saber cómo está la salud de su gente. ¿Qué le puedes dar?', ops: ['La lista de resultados con nombres', 'Un reporte agregado por áreas, sin nombres', 'Las fichas de cada trabajador', 'Nada de nada'], ok: 1, por: 'Los datos de salud son sensibles (Ley 29733). Un reporte agregado ayuda a decidir sin exponer a nadie.' },
  { q: 'La campaña es de 8 a 1 y el turno noche sale a las 7. ¿Qué haces?', ops: ['Nada: que vengan en su día libre', 'Llevar módulos a la salida y a la entrada del turno noche', 'Hacerla obligatoria', 'Cancelarla'], ok: 1, por: 'Una actividad de bienestar se diseña para los horarios reales de la gente, no para el de la oficina.' },
  { q: 'Un consentimiento firmado en la cola, delante del supervisor…', ops: ['Siempre es válido', 'Puede no ser libre: en el trabajo la presión del jefe pesa', 'Es mejor que ninguno', 'No hace falta'], ok: 1, por: 'El consentimiento para tratar datos de salud debe ser libre e informado; en la relación laboral, la presión de un jefe puede viciarlo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '06:30', ch: 'documento', who: null, titulo: 'El plan de la campaña', banner: 'assets/esc/alarma.webp', lugar: 'Oficina de Bienestar', show: ['personas', 'tiempo', 'calidad'],
    body: (n, F) => `<p>Llegas con el primer bus, con el pan con chicharrón todavía en la bolsa. Revisas el plan que Nelly armó con la red de salud: auditorio, de 8 a 1. Afuera, el turno noche está terminando: <mark class="clave">unas 300 personas que saldrán a las 7 y se subirán al bus</mark>. Y las cuadrillas de corte ya están en los fundos desde las 5.</p><p>${F.has('lactario_noche') ? 'Es el mismo problema que viste con el lactario: todo está pensado para el día.' : 'Nadie lo pensó cuando se planificó.'} Puedes hacer dos cambios.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos cambios que harás hoy.', boton: 'Hacer estos cambios', resumen: 'Cambiaste',
    cols: ['Cambio', 'A quién llega'],
    rows: [
      { id: 'salida', cells: ['Abrir un módulo de 6:45 a 7:50 en el comedor, a la salida del turno noche', 'Turno noche que sale'] },
      { id: 'entrada', cells: ['Abrir un módulo de 17:30 a 19:00 en el paradero, antes de que entre el turno noche', 'Turno noche que entra'] },
      { id: 'fundo', cells: ['Pedir que una técnica vaya en la camioneta al fundo más grande a la hora del refrigerio', 'Cuadrillas de corte'] },
      { id: 'sorteo', cells: ['Anunciar el sorteo de una licuadora entre los asistentes', 'A los que igual iban a venir'] },
      { id: 'stands', cells: ['Agregar dos stands más en el auditorio de 8 a 1', 'Al turno día, otra vez'] },
    ],
    score: { salida: 3, entrada: 3, fundo: 2, sorteo: 0, stands: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -2 },
        flags: picks.includes('salida') || picks.includes('entrada') ? ['noche_planeada'] : [],
        cartera: { noche: q === 'riesgosa' ? 'Sin cambios para el turno noche' : 'Módulos para el turno noche por coordinar' },
        out: picks.includes('sorteo') ? 'La licuadora entusiasma al turno día. El turno noche ni se entera: ya está en el bus.' : q === 'buena' ? 'Le escribes a la coordinadora de la red de salud y a Logística. Faltan quince minutos para que salga el turno noche.' : 'Algo cambia, pero el grueso del turno noche sigue fuera.',
        pro: { ok: 'Mueves la campaña hacia la gente, no a la gente hacia la campaña.', risk: 'Un premio o más stands llegan a los mismos de siempre.', info: 'Pregunta en Planillas cuántos trabajan de noche y en campo: así sabrás a quién le faltó la campaña.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La campaña va hacia el turno noche!' : '¿Y los que salen a las 7?'],
      };
    },
    rules: [[BP, 'Diseña las actividades de bienestar según los horarios reales: turnos, campo y distancias.']],
    mirada: {
      ve: 'Las campañas de salud se suelen planificar en horario de oficina y llegan siempre a los mismos. En una planta que trabaja de día y de noche, quien no se adapta a los turnos deja fuera justo a quienes más se cansan.',
      visual: { tipo: 'linea', titulo: 'El día de la campaña', hitos: [['5:00', 'Cuadrillas en los fundos'], ['7:00', 'Sale el turno noche'], ['8:00 a 13:00', 'Campaña en el auditorio'], ['19:00', 'Entra el turno noche']] },
    },
  },
  {
    id: 'c2', t: '06:40', ch: 'llamada', who: null, titulo: 'Quince minutos', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Pasillo de Bienestar, con el celular al 30 %', show: ['personas', 'tiempo', 'confianza'],
    body: (n, F) => `<p>${F.has('noche_planeada') ? 'Para que tu cambio funcione necesitas tres cosas en quince minutos.' : 'Aunque no cambiaste el plan, Yesenia te escribió. Haces tres llamadas por si acaso.'}</p><p>El bus del turno noche sale a las 7:20. <mark class="clave">Después de doce horas de turno, nadie se queda a esperar</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Coordinadora de la red de salud', 'Contesta desde la combi, ya en camino', '«Puedo adelantar a una técnica y a la enfermera de las vacunas. El consejero de VIH no: esa prueba necesita un ambiente cerrado y tiempo. Si me dan un espacio en el comedor, a las 6:45 estamos.»'],
      ['Logística · transporte de personal', 'Contesta el jefe de movilidad', '«El bus puede salir a las 7:50 en vez de 7:20, pero eso me lo tiene que firmar el ingeniero Bravo. Si no, el chofer se va a su hora.»'],
      ['Yesenia Huamán · envasado', 'Contesta con ruido de máquinas', '«Si nos dan un cafecito y el bus espera, se quedan. Si no, nadie, señorita. Yo tengo que llegar a dar de lactar.»'],
    ],
    prompt: 'Con lo que escuchaste, ¿qué haces?',
    choices: [
      { id: 'a', label: 'Abrir el módulo en el comedor con presión, glucosa y vacunas, pedir café y tamalitos al concesionario, y escribirle a Augusto para que autorice que el bus espere media hora.',
        res: { q: 'buena', fx: { personas: 6, confianza: 2, tiempo: -3 }, flags: ['noche_atendida'], cartera: { noche: 'Módulo de salida: presión, glucosa y vacunas; bus a las 7:50', campana: 'Tres momentos: salida, auditorio y entrada' },
          out: 'Augusto responde a las 6:52: «Media hora. Ni un minuto más». A las 7:05 hay cola en el comedor. Ciento veinte personas del turno noche se toman la presión con un tamalito verde en la mano.',
          pro: { ok: 'Resuelves con lo que hay: dos técnicas, un comedor, un bus que espera media hora.', risk: 'El VIH queda solo para el auditorio y la tarde: dilo claramente para que nadie sienta que se lo negaron.', info: 'La consejería de VIH necesita privacidad: no la improvises en un comedor.' },
          kusi: ['celebra', '¡Tamalitos y presión a las 7 de la mañana!'] } },
      { id: 'b', label: 'Avisar en el grupo del turno noche que pueden volver a las 10 de la mañana al auditorio.',
        res: { q: 'riesgosa', fx: { personas: -3, tiempo: 1 }, flags: ['noche_excluida'], cartera: { noche: 'Invitados a volver a las 10' },
          out: 'Vuelven cuatro personas. Las demás viven en Pátapo, Pucalá o Tumán y ya están durmiendo. Yesenia te manda un audio: «Señorita, si me regreso no duermo, y entro a las 7 de la noche».',
          pro: { ok: 'No complicas la logística.', risk: 'Pedirle a alguien que vuelva después de doce horas de turno es dejarlo fuera.' },
          kusi: ['triste', 'Después de doce horas, nadie vuelve…'] } },
      { id: 'c', label: 'Anotarlo para la próxima campaña: hoy ya no hay tiempo de cambiar la logística.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -2 }, flags: ['noche_excluida'], cartera: { noche: 'Pendiente para la próxima campaña' },
          out: 'Escribes en tu libreta: «Próxima campaña: turno noche». El bus sale a las 7:20. La próxima campaña será dentro de seis meses.',
          pro: { ok: 'Aprendes para la próxima.', risk: 'Seis meses es mucho tiempo para alguien con la presión alta que no lo sabe.' },
          kusi: ['pensando', '¿Y si no había próxima?'] } },
    ],
    rules: [[BP, 'Si la gente no puede venir, lleva la actividad a donde está, con lo mínimo necesario.']],
    mirada: {
      ve: 'Una buena profesional de bienestar sabe improvisar con orden: qué servicios pueden moverse, cuáles no, quién tiene que firmar y qué hace que la gente se quede.',
      visual: { tipo: 'balanza', a: { t: 'Lo que se puede mover', items: ['Presión y glucosa', 'Vacuna contra la influenza', 'Un café y un tamalito'] }, b: { t: 'Lo que no se improvisa', items: ['Consejería y prueba de VIH', 'Privacidad', 'Entrega confidencial de resultados'] } },
    },
  },
  {
    id: 'c3', t: '09:30', ch: 'presencial', who: 'augusto', titulo: 'La lista que pide Augusto', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Puerta del auditorio', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Augusto llega en su camioneta, con el casco blanco bajo el brazo. Se toma la presión, bromea con la enfermera y luego te lleva a un lado. ${F.has('lactario_propuesta') ? '«Lo del lactario ya lo firmé, ¿ya?»' : '«Lo del lactario lo vemos otro día.»'} Y pregunta, de paso: «¿Y Llontop, el de molienda, cuándo vuelve? Me falta gente en el trapiche».</p><p>Luego va al punto: «Pásame la lista con los resultados de presión y glucosa de mi gente, <mark class="clave">y quiénes se hicieron la prueba de VIH</mark>. En zafra necesito saber con quién cuento».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no puedes entregar resultados con nombres ni nada sobre VIH, y ofrecerle un reporte por áreas, sin nombres: cuántos tuvieron la presión alta, para planificar con el médico ocupacional.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: -1 }, rel: { augusto: 0 }, flags: ['resultados_agregados'], cartera: { resultados: 'Reporte agregado por áreas, sin nombres' },
          out: 'Augusto te mira largo. «¿Y si uno se me desmaya en las centrífugas?» Le dices que para eso está el médico ocupacional, que sí puede decidir quién está apto. Gruñe: «Mándame el reporte, entonces». Sobre Don Héctor le dices que volverá cuando el médico lo evalúe.',
          pro: { ok: 'Le das lo que necesita para decidir —cuántos y dónde— sin exponer a nadie.', risk: 'Augusto se queda con la sensación de que Bienestar le esconde cosas. Explícale el porqué más de una vez.', info: 'La R.M. 376-2008-TR prohíbe al empleador exigir la prueba de VIH o su resultado.' },
          kusi: ['animo', 'Le diste lo útil, no lo privado.'] } },
      { id: 'b', label: 'Ofrecerle pedir a cada trabajador, en la cola, que firme un consentimiento para compartir su presión y glucosa con su jefe. Lo de VIH, no.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, etica: -2, personas: -2 }, flags: ['consentimiento_presionado'], cartera: { resultados: 'Consentimientos firmados en la cola' },
          out: 'Pones un formato en la mesa de registro. Casi todos firman: el supervisor está mirando. Un operario te pregunta bajito: «¿Y si no firmo, me van a sacar de la zafra?».',
          pro: { ok: 'Proteges el dato de VIH y pides consentimiento.', risk: 'Un consentimiento firmado frente al jefe, por miedo a perder el trabajo, no es libre.' },
          kusi: ['pensando', '¿Firmó porque quiso?'] } },
      { id: 'c', label: 'Entregarle la lista completa: es gerente, la campaña la pagó la empresa y es para cuidar a su gente en la zafra.',
        res: { q: 'riesgosa', fx: { confianza: 3, etica: -6, cumplimiento: -6 }, rel: { augusto: 1 }, flags: ['resultados_entregados'], cartera: { resultados: 'Lista con nombres y VIH entregada al gerente' },
          out: 'Augusto se va contento con el archivo. A la semana, un supervisor bromea en el comedor sobre «los que se hicieron la prueba». Dos personas que esperaban su resultado no vuelven a recogerlo.',
          pro: { ok: 'Complaces al gerente.', risk: 'Entregaste datos sensibles y, peor, información sobre VIH que la norma prohíbe exigir. La campaña dejó de ser segura.' },
          kusi: ['indignado', '¡Eso no era para nadie!'] } },
    ],
    rules: [[LEY, 'R.M. 376-2008-TR: el empleador no puede exigir la prueba de VIH ni su resultado.'], [LEY, 'Ley 29733: los datos de salud son sensibles; requieren consentimiento libre y protección reforzada.'], [POL, 'En Sipán, la aptitud para un puesto la decide el médico ocupacional, no el jefe con una lista.']],
    mirada: {
      ve: 'El gerente tiene una preocupación legítima: que nadie se desmaye en una máquina. Pero la respuesta no es una lista con nombres, sino un reporte agregado y el criterio del médico ocupacional. Si la gente siente que sus resultados llegan al jefe, deja de hacerse las pruebas.',
      visual: { tipo: 'embudo', titulo: 'Quién ve qué', niveles: [['Gerente: cuántos y en qué áreas', 3], ['Médico ocupacional: quién está apto', 2], ['Cada trabajador: su propio resultado', 1]] },
      normas: [{ ley: 'R.M. 376-2008-TR, Medidas nacionales frente al VIH y SIDA en el lugar de trabajo', dice: 'El empleador no puede exigir la prueba de VIH ni su resultado, al contratar ni durante la relación laboral.', practica: 'Saber «quiénes se hicieron la prueba» ya es exponerlos.' }],
    },
  },
  {
    id: 'c4', t: '11:00', ch: 'documento', who: null, titulo: 'La mesa de registro', banner: 'assets/esc/dedos.webp', lugar: 'Auditorio · mesa de registro', show: ['etica', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>Das una vuelta por la campaña. Hay cola en vacunas y risas en la balanza. En la mesa de registro, el practicante de Comunicaciones toma fotos para el Facebook de la empresa.${F.has('registro_expuesto') ? ' Y la técnica pregunta si puede pasar los datos «al Excel de casos sociales, ese que está compartido».' : ''}</p><p>Miras la hoja de registro y el ambiente. <mark class="clave">Lo que se anota y lo que se fotografía también es dato de salud</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que hay que corregir ahora mismo.',
    doc: { t: 'Campaña de salud · mesa de registro', sub: 'Hoja de asistencia y lo que ves alrededor' },
    lines: [
      { id: 'asistencia', t: 'Hoja de asistencia con nombre, área y servicio: presión, glucosa, vacuna.' },
      { id: 'vihcol', t: 'Columna «Prueba VIH: sí / no» en la misma hoja que firma todo el mundo.', bad: LEY, why: 'Cualquiera que firme después ve quién se hizo la prueba. Ese registro debe llevarlo solo el consejero, aparte.' },
      { id: 'foto', t: 'Foto para Facebook de un operario sentado en el módulo de VIH, con la puerta abierta.', bad: LEY, why: 'Exponer a alguien en el módulo de VIH revela un dato sensible. Las fotos, solo de espacios generales y con autorización.' },
      { id: 'sobre', t: 'Resultados de VIH entregados en persona por el consejero, en ambiente cerrado.' },
      { id: 'panel', t: 'Resultados de glucosa pegados en un papelógrafo «para que cada uno vea el suyo».', bad: LEY, why: 'Todos pueden ver los resultados de todos. Cada persona debe recibir el suyo en privado.' },
      { id: 'supervisor', t: 'Un supervisor anota quién de su área no vino «para tenerlo en cuenta».', bad: BP, why: 'La campaña es voluntaria. Anotar ausencias la vuelve una vigilancia.' },
      { id: 'vacuna', t: 'Tarjeta de vacunación entregada a cada persona.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'La campaña sigue igual. Esa tarde, la foto del módulo de VIH aparece en el Facebook de la empresa con 80 «me gusta».' : 'Separas la hoja de VIH, despegas el papelógrafo, le pides al practicante que borre la foto y al supervisor que guarde su libreta. Nadie se enoja: nadie lo había pensado.',
      flags: missLey ? [] : ['campana_confidencial'], rel: { nelly: missLey ? 0 : 1 },
      cartera: { resultados: missLey ? 'Resultados y fotos expuestos' : 'Registro de VIH aparte; resultados en privado' },
      pro: { ok: 'Corriges en el momento y sin escándalo.', risk: 'Una sola foto puede hacer que nadie vuelva a hacerse la prueba en la próxima campaña.', info: 'Antes de la próxima campaña, define con Comunicaciones qué se puede fotografiar.' },
      kusi: missLey ? ['indignado', '¿La foto en Facebook?'] : ['celebra', '¡Campaña segura!'],
    }),
    rules: [[LEY, 'Los datos de salud son sensibles (Ley 29733); la información sobre VIH requiere confidencialidad (R.M. 376-2008-TR).'], [BP, 'Una campaña voluntaria no registra ausencias.']],
    mirada: {
      ve: 'La confidencialidad no se pierde solo con una lista: también con una columna mal puesta, una foto o un papelógrafo. Bienestar revisa los detalles, porque ahí se rompe la confianza.',
      visual: { tipo: 'cambio', titulo: 'Lo que corregiste', pares: [['Columna de VIH en la hoja general', 'Registro aparte del consejero'], ['Foto del módulo de VIH', 'Fotos solo de espacios generales'], ['Papelógrafo con resultados', 'Cada uno recibe el suyo'], ['Supervisor anota ausencias', 'Campaña voluntaria']] },
    },
  },
  {
    id: 'c5', t: '14:00', ch: 'whatsapp', who: null, titulo: 'El turno de la tarde', banner: 'assets/foto2/celebra-tablet.webp', lugar: 'Auditorio, mientras desarman los stands', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Almuerzas un sánguche de pavo de pie mientras la red de salud guarda las cosas. La coordinadora acepta quedarse con el consejero de VIH para el módulo de la tarde en el paradero.${F.has('noche_excluida') ? ' Es tu segunda oportunidad con el turno noche.' : ''}</p><p>Ahora tienes que avisar a los supervisores. <mark class="clave">Si el mensaje suena a obligación, la gente desconfía; si suena a nada, nadie viene</mark>.</p>`,
    type: 'compose', enviaA: 'supervisores', para: 'Para: grupo Supervisores Sipán', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué hay', ops: [
        { id: 'q1', t: 'Hoy de 5:30 a 7 p. m., en el paradero, campaña de salud para el turno noche: presión, glucosa, vacuna contra la influenza y consejería de VIH.', ok: true, por: 'Qué, cuándo y dónde, en una línea.' },
        { id: 'q2', t: 'Hoy hay campaña de salud.', ok: false, por: 'No dice hora ni lugar.' },
      ] },
      { id: 'como', t: 'Cómo es', ops: [
        { id: 'c1', t: 'Es voluntaria y gratuita. Los resultados se entregan a cada persona en privado.', ok: true, por: 'Responde al miedo de que el jefe se entere.' },
        { id: 'c2', t: 'Es importante que todos asistan; se tomará lista.', ok: false, por: 'Convierte la campaña en control.' },
      ] },
      { id: 'pide', t: 'Qué les pides', ops: [
        { id: 'p1', t: 'Por favor, avísenle a su gente del turno noche antes de que salgan de su casa.', ok: true, por: 'Una tarea concreta para el supervisor.' },
        { id: 'p2', t: 'Envíenme la lista de quiénes van a ir.', ok: false, por: 'Otra vez vigilancia.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'k1', t: 'Gracias. Cualquier duda, me escriben a mí.', ok: true, por: 'Corto y disponible.' },
        { id: 'k2', t: '¡Los esperamos, cuídense mucho! 💪💉🩺❤️', ok: null, por: 'Amable, pero no agrega nada.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'c1', 'p1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : -1 },
        flags: q === 'buena' ? ['noche_atendida'] : [],
        cartera: { noche: q === 'buena' ? 'Módulo de entrada anunciado como voluntario y confidencial' : 'Módulo de entrada anunciado a medias' },
        out: q === 'buena' ? 'Tres supervisores reenvían el mensaje tal cual a los grupos de su gente. Uno responde: «Primera vez que se acuerdan de la noche».' : sel.como === 'c2' ? 'Un supervisor responde: «¿Y el que no va qué, lo descuentan?». Varios ya no irán.' : 'El mensaje se pierde entre los audios del grupo.',
        pro: { ok: 'Voluntaria, confidencial y con una tarea clara: así el supervisor ayuda en vez de vigilar.', info: 'Pide que lo reenvíen tal cual: cada reescritura cambia el tono.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mensaje que da confianza!' : '¿Suena a invitación o a control?'],
      };
    },
    rules: [[BP, 'Comunica las campañas como voluntarias y confidenciales: es lo que hace que la gente se acerque.']],
    mirada: {
      ve: 'Los supervisores son el canal más rápido hacia el turno noche, pero también el que más puede asustar. El mismo mensaje puede sonar a invitación o a control según dos palabras.',
      visual: { tipo: 'mensaje', titulo: 'Una invitación que da confianza', txt: 'Hoy de 5:30 a 7 p. m., en el paradero, campaña de salud para el turno noche: presión, glucosa, vacuna contra la influenza y consejería de VIH. Es voluntaria y gratuita. Los resultados se entregan a cada persona en privado. Por favor, avísenle a su gente del turno noche antes de que salgan de su casa. Gracias.' },
    },
  },
  {
    id: 'c6', t: '16:00', ch: 'documento', who: null, titulo: 'El informe de la campaña', banner: 'assets/foto2/presentacion.webp', lugar: 'Oficina de Bienestar', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Nelly volvió del dentista con su hijo y te pide el informe antes del módulo de la tarde: lo presentará a Gerencia el lunes. ${F.has('resultados_agregados') ? 'Augusto ya preguntó dos veces por «su reporte».' : ''}</p><p><mark class="clave">El informe dice a quién llegó la campaña y a quién no</mark>, sin un solo nombre.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del informe.', boton: 'Enviar el informe a Nelly',
    bloques: [
      { id: 'llego', t: 'A quién llegó', n: 2, ops: [
        { id: 'l1', t: 'Turno día: 214 personas en el auditorio. Turno noche: atendidos en el comedor a la salida y en el paradero a la entrada.', ok: true, por: 'Muestra el alcance por turno.' },
        { id: 'l2', t: 'Cuadrillas de corte: no se las alcanzó. Se propone ir a los fundos a la hora del refrigerio.', ok: true, por: 'Dice con honestidad a quién faltó.' },
        { id: 'l3', t: 'Asistencia récord: ¡un éxito total!', ok: false, por: 'Celebrar sin decir a quién faltó oculta el problema.' },
      ] },
      { id: 'hallazgos', t: 'Qué se encontró', n: 1, ops: [
        { id: 'h1', t: 'Presión alta más frecuente en molienda y turno noche: datos agregados, sin nombres, para el médico ocupacional.', ok: true, por: 'Útil para decidir, sin exponer a nadie.' },
        { id: 'h2', t: 'Lista de trabajadores con presión alta y glucosa elevada.', ok: false, por: 'Datos sensibles con nombre en un informe que irá a Gerencia.' },
      ] },
      { id: 'sigue', t: 'Qué sigue', n: 2, ops: [
        { id: 's1', t: 'Derivar a EsSalud a quienes salieron con valores altos, con seguimiento de Bienestar.', ok: true, por: 'Una campaña sin seguimiento solo da sustos.' },
        { id: 's2', t: 'Programar las próximas campañas en tres momentos: salida, día y entrada del turno noche.', ok: true, por: 'Convierte lo de hoy en regla.' },
        { id: 's3', t: 'Hacer la campaña obligatoria para que vengan todos.', ok: false, por: 'Obligar aleja a la gente de las pruebas voluntarias.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0, cumplimiento: q === 'riesgosa' ? -3 : 1 }, rel: { nelly: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['informe_campana'] : [],
        cartera: { informe: q === 'riesgosa' ? 'Con datos de más y sin seguimiento' : 'Alcance por turno, hallazgos agregados y seguimiento', campana: 'Informe listo para Gerencia' },
        out: q === 'buena' ? 'Nelly lo lee y dice: «Por primera vez un informe de campaña dice a quién no llegamos. Eso es lo que Gerencia tiene que ver».' : q === 'aceptable' ? 'Nelly lo envía, pero pide: «Agrega qué pasa con los que salieron con la presión alta».' : 'Nelly lo borra: «Esto no puede salir de esta oficina con nombres».',
        pro: { ok: 'Un buen informe de campaña dice a quién llegó, a quién no y qué se hará con lo encontrado.', risk: 'Contar asistentes sin seguimiento convierte la campaña en una foto bonita.', info: 'El seguimiento de los casos con valores altos es lo que hace que la campaña sirva.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un informe honesto!' : '¿Y los que no llegaron?'],
      };
    },
    rules: [[LEY, 'Los resultados de salud se reportan agregados y sin nombres (Ley 29733).'], [BP, 'Una campaña de salud sin derivación ni seguimiento no termina de cuidar.']],
    mirada: {
      ve: 'El valor de una campaña no está en la cantidad de stands ni en las fotos, sino en a quién llegó y en lo que pasa después con quienes salieron mal. El informe es lo que convierte un día de actividades en una política.',
      visual: { tipo: 'flujo', titulo: 'De la campaña a la política', pasos: ['Tres momentos por turno', 'Resultados en privado', 'Datos agregados', 'Derivación a EsSalud', 'Seguimiento'] },
    },
  },
  {
    id: 'c7', t: '18:40', ch: 'presencial', who: null, titulo: 'La presión de Segundo', banner: 'assets/esc/pendulo.webp', lugar: 'Paradero de la planta · módulo de la tarde', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Ya oscureció y el paradero huele a caña y a diésel. La enfermera te llama aparte: Segundo Tantaleán, 52 años, operador de centrífugas, salió con la presión muy alta. Le duele la cabeza y dice que «siempre es así». Ella le recomienda no trabajar hoy y atenderse en emergencias.</p><p>Su supervisor se acerca: «Necesito a Segundo, no tengo reemplazo. <mark class="clave">¿Qué le pasa?</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Hablar con Segundo y llamar al médico ocupacional de guardia. Al supervisor decirle solo que, por indicación médica, Segundo no está en condiciones de entrar hoy. Acompañar a Segundo a que lo vean.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, cumplimiento: 3, tiempo: -3 }, flags: ['operario_protegido'], cartera: { campana: 'Un caso derivado a emergencias desde el módulo de la tarde' },
          out: 'El médico de guardia confirma la indicación. El supervisor resopla, pero mueve a otro operador. Segundo se va en la camioneta a EsSalud. Llegas a tu casa a las nueve, con los pies hinchados.',
          pro: { ok: 'Proteges la vida de Segundo y su intimidad: el supervisor sabe lo que necesita, no el diagnóstico.', risk: 'El supervisor tiene un hueco en su turno. Ayúdalo a buscar el reemplazo.', info: 'Las centrífugas son un puesto de riesgo: un mareo ahí puede ser un accidente.' },
          kusi: ['celebra', 'Hoy la campaña quizás salvó una vida.'] } },
      { id: 'b', label: 'Respetar la decisión de Segundo: es adulto, dice que se siente bien y quiere trabajar.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -4 }, cartera: { campana: 'Valor muy alto, sin derivación' },
          out: 'Segundo entra a su turno. A las tres de la mañana se marea frente a la centrífuga y un compañero lo sienta en el piso. Esta vez no pasó nada grave.',
          pro: { ok: 'Respetas su autonomía.', risk: 'Hay situaciones en las que la indicación médica y la seguridad pesan más que el «siempre es así».' },
          kusi: ['preocupado', 'Esta vez no pasó nada…'] } },
      { id: 'c', label: 'Explicarle al supervisor el valor de la presión y lo que dijo la enfermera, para que él decida.',
        res: { q: 'aceptable', fx: { personas: 2, etica: -3 }, cartera: { campana: 'Caso derivado; diagnóstico contado al supervisor' },
          out: 'El supervisor lo manda a su casa. Pero mañana medio turno sabrá «lo de la presión de Segundo». Él te esquiva en el comedor.',
          pro: { ok: 'Segundo no entra al turno.', risk: 'El supervisor no necesitaba el valor ni el detalle: bastaba la indicación médica.' },
          kusi: ['pensando', 'Bien la decisión, de más el detalle.'] } },
    ],
    rules: [[LEY, 'Los datos de salud son sensibles: al supervisor le basta saber que hay una indicación médica (Ley 29733).'], [POL, 'En Sipán, quien decide si alguien está apto para su puesto es el médico ocupacional.']],
    mirada: {
      ve: 'Las campañas a veces encuentran algo urgente. Ahí bienestar actúa rápido, con el médico, y cuida dos cosas a la vez: la vida de la persona y lo que se cuenta de ella.',
      visual: { tipo: 'flujo', titulo: 'Un valor alarmante en la campaña', pasos: ['La enfermera alerta', 'Hablas con Segundo', 'Médico ocupacional', 'No entra al turno', 'Emergencias', 'Seguimiento'] },
    },
  },
];
