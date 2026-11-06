// Asistente de SST · Capítulo 9 · «El vaciado» · Semana 2, jueves.
// Hilo de las dos semanas: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas:
// - Ley 29783, art. 63: ante un peligro inminente se interrumpen las actividades y no se reanudan mientras el riesgo no se
//   haya reducido o controlado. https://img.lpderecho.pe/wp-content/uploads/2022/01/Casacion-Laboral-26849-2018-Moquegua-LPDerecho.pdf
// - D.S. 005-2012-TR, art. 110, modificado por el D.S. 006-2022-TR: el empleador notifica los incidentes peligrosos y los
//   accidentes mortales dentro de las 24 horas. https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ds_006-2022-tr.pdf
// - Incidente peligroso: suceso potencialmente riesgoso que pudiera causar lesiones o enfermedades a las personas en su trabajo
//   o a la población (glosario del reglamento, transcrito en un documento del Estado peruano):
//   https://cdn.www.gob.pe/uploads/document/file/4089055/09_ISI_8-01-1_Incidentes_enfermedades_ocupacionales_y_situaciones_de_emergencia.pdf.pdf
// - Norma G.050: zona acordonada bajo trabajos en altura (punto 20) y permiso de trabajo en altura diario (Anexo J.2).
//   https://buenaventura.com/wp-content/uploads/2024/10/NORMA-G.050-Seguridad-durante-la-construccion-DS-N°-010-2009.pdf

export const CAP = {
  n: 9, titulo: 'El vaciado', dia: 'Semana 2, jueves', foto: 'assets/foto/supervisa.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '05:20', fin: '18:45', cierreHora: '18:25',
  apertura: 'Jueves, 5:20 de la mañana. Todavía está oscuro. El primer mixer ya da vueltas en la puerta de la obra.', boton: 'Ponerte el casco',
  kusi: 'Hoy se pone a prueba todo lo que preparaste. ¡Respira, mide y decide!',
  lead: 'Diste la charla del vaciado, revisaste el permiso de veinte personas, defendiste el refrigerio, paraste el bombeo cuando el viento pasó el límite, manejaste la presión del cliente y respondiste a un incidente peligroso.',
  reflexion: '¿Qué se siente decir «paramos» cuando todos quieren terminar?',
  siguiente: { n: 10, titulo: 'El piso 13', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'piso12', p: 'Vaciado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Hoy · 5:30' },
  { id: 'permiso', p: 'Permiso de altura del día', j: 'Tú', d: 0, e: '20 personas' },
  { id: 'viento', p: 'Viento y bomba de concreto', j: 'Ángel · Operador', d: 0, e: 'Límite del manual' },
  { id: 'rescate', p: 'Rescate en altura', j: 'Ingrid · SSOMA', d: 0, e: 'Equipo en el piso 11' },
  { id: 'incidentes', p: 'Registro de incidentes', j: 'Ingrid · SSOMA', d: 0, e: 'Sin eventos hoy' },
];

export const FUTURO = {
  vaciado_parado: ['Paraste el bombeo cuando el viento pasó el límite y se cortó la losa donde se podía.', 'El viernes temprano se termina el paño que faltó. Capítulo 10.'],
  vaciado_forzado: ['Dejaste seguir dos mixers más con el viento sobre el límite de la bomba.', 'Capítulo 10.'],
  vaciado_abandonado: ['Paraste todo de golpe y parte del concreto quedó sin vibrar.', 'Habrá que picar y reparar. Capítulo 10.'],
  incidente_notificado: ['Registraste la caída del tablón como incidente peligroso y la empresa lo notificó dentro de las 24 horas.', 'Capítulo 10.'],
  refrigerio_respetado: ['La cuadrilla comió sentada y por turnos, aunque Renzo quería «aprovechar la calma».', 'Lo recordarán en el balance. Capítulo 10.'],
  charla_vaciado: ['Tu charla de las 5:30 terminó con Don Segundo diciendo cómo se para.', 'Capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  comite: { n: 'Comité SST · Los Algarrobos', sub: '6 miembros y tú', c: '#2F6B3F' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  jhonatan: { n: 'Jhonatan Ñique', sub: 'Ayudante de obra', who: 'jhonatan' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
};

export const WSP = [
  { chat: 'jhonatan', t: '06:40', de: 'Jhonatan', txt: 'Ingeniera, ¿cómo va el vaciado? Aquí con mi mamá rezando para que salga bonito 🙏', si: 'jhonatan_descansa' },
  { chat: 'grupo', t: '07:30', de: 'Ingrid', txt: 'Primer paño listo. Viento en calma. Vamos bien 💪' },
  { chat: 'renzo', t: '12:50', de: 'Renzo', txt: 'Faltan cuatro mixers. Si seguimos a este ritmo, terminamos a las 3.' },
  { chat: 'grupo', t: '16:30', de: 'Ingrid', txt: 'Lo de hoy no sale en ningún indicador, pero es lo mejor que he visto en esta obra.', si: 'vaciado_parado' },
];

export const CORREOS = [
  { t: '15:10', de: 'Ing. Patricia Salazar', para: 'Residencia · SSOMA', asunto: 'Vaciado piso 12 · observación', html: '<p>Dejo constancia de que el vaciado se suspendió a las 13:15 por viento sobre el límite del equipo, según el criterio acordado por el comité de SST. La supervisión considera correcta la decisión.</p><p>Patricia Salazar · Supervisión del cliente</p>', si: 'vaciado_parado' },
];

export const QUIZ = [
  { q: '¿Qué es un incidente peligroso?', ops: ['Cualquier atraso de obra', 'Un suceso potencialmente riesgoso que pudo causar lesiones a las personas', 'Solo un accidente con fallecido', 'Una queja del cliente'], ok: 1, por: 'El reglamento lo define como un suceso potencialmente riesgoso que pudiera causar lesiones o enfermedades a las personas en su trabajo o a la población.' },
  { q: '¿En qué plazo notifica el empleador un incidente peligroso?', ops: ['24 horas', 'Una semana', 'Fin de mes', 'No se notifica si nadie se lastimó'], ok: 0, por: 'El art. 110 del reglamento, modificado por el D.S. 006-2022-TR, fija 24 horas para incidentes peligrosos y accidentes mortales.' },
  { q: 'Si el viento pasa el límite del fabricante de la bomba, ¿qué se hace?', ops: ['Dos mixers más y se termina', 'Se detiene el bombeo, se retira la gente del borde y se corta donde se previó', 'Se sigue con más cuidado', 'Se le pregunta al cliente'], ok: 1, por: 'Ante un peligro inminente se interrumpe la actividad y no se reanuda mientras el riesgo no esté controlado (Ley 29783, art. 63).' },
  { q: '¿Por qué importa la zona de exclusión bajo la pluma?', ops: ['Para que se vea ordenado', 'Porque si algo cae, no hay nadie debajo', 'Por estética', 'No importa'], ok: 1, por: 'La G.050 pide evitar la circulación bajo los trabajos en altura.' },
  { q: 'Parar un trabajo de golpe, sin plan, puede…', ops: ['Ser siempre lo correcto', 'Crear otros problemas, como concreto sin consolidar', 'No tener consecuencias', 'Acelerar la obra'], ok: 1, por: 'Por eso se prevén la forma de parar y el lugar del corte antes de empezar.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '05:30', ch: 'presencial', who: null, titulo: 'La charla de las 5:30', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Patio de la obra, con reflectores', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => `<p>Veinte cascos bajo los reflectores. Hace frío para Chiclayo y algunos tienen las manos en las axilas. Detrás, la pluma de la bomba todavía plegada y el ruido de los mixers.${F.has('charla_viva') ? ' Teodoro está adelante, como siempre.' : ''}</p><p>Tienes cinco minutos. Es la charla más importante de las dos semanas. <mark class="clave">Tiene que quedar claro cómo se para</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la charla del vaciado.', boton: 'Dar la charla',
    bloques: [
      { id: 'inicio', t: 'Cómo empiezas', n: 1, ops: [
        { id: 'i1', t: 'Señalando el borde del 12: «Hoy todos bajamos de ahí a la hora de almuerzo y a la salida. ¿Cómo lo vamos a lograr?».', ok: true, por: 'Pone la meta en las personas, no en el concreto.' },
        { id: 'i2', t: 'Leyendo el plan de vaciado de cuatro páginas.', ok: false, por: 'A las 5:30 nadie retiene cuatro páginas.' },
      ] },
      { id: 'mensajes', t: 'Mensajes clave', n: 3, ops: [
        { id: 'm1', t: 'Bajo la pluma no pasa nadie: la cinta roja es una pared.', ok: true },
        { id: 'm2', t: 'Si el anemómetro pasa el límite, Ángel recoge la pluma y se corta en la junta del eje 5. No se discute.', ok: true },
        { id: 'm3', t: 'Si alguien queda colgado: radio, se le habla, y el equipo de rescate del 11 lo baja. Ya lo practicamos.', ok: true },
        { id: 'm4', t: 'Hoy hay que terminar sí o sí.', ok: false, por: 'Contradice el criterio de parada.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', n: 1, ops: [
        { id: 'c1', t: 'Pidiéndole a Don Segundo que repita, con sus palabras, cuándo se para.', ok: true, por: 'Si lo dice el maestro de obra, la cuadrilla lo cree.' },
        { id: 'c2', t: 'Pasando la lista de asistencia.', ok: null, por: 'Necesario, pero no es un cierre.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['charla_vaciado'], cartera: { piso12: q === 'riesgosa' ? 'Charla sin criterio de parada' : 'Charla: exclusión, parada y rescate' },
        out: q === 'buena' ? 'Don Segundo da un paso adelante: «Si la ingeniera dice que el aparato marca más, Ángel recoge y paramos. Nadie se hace el valiente». Veinte cascos asienten.' : 'La charla sale correcta, pero corta en lo importante. Dos obreros preguntan después: «¿Y quién decide si paramos?».',
        pro: { ok: 'Una charla de un día crítico dice tres cosas: dónde no pararse, cuándo parar y qué hacer si alguien cae.', info: 'Que el maestro de obra repita la regla la vuelve de todos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La regla ya es de la cuadrilla!' : '¿Quedó claro cómo se para?'],
      };
    },
    rules: [[BP, 'En un trabajo crítico, la charla previa repite la zona de exclusión, el criterio de parada y el plan de rescate.']],
    mirada: {
      ve: 'Hace dos semanas diste tu primera charla a sesenta personas que miraban el reloj. Hoy hablas a veinte que van a estar a treinta y tantos metros todo el día. La diferencia es que ahora la regla de parada la dice también el maestro de obra.',
      visual: { tipo: 'flujo', titulo: 'La charla del vaciado', pasos: ['Todos bajamos', 'Bajo la pluma, nadie', 'Cómo se para', 'Cómo se rescata', 'Lo dice Don Segundo'] },
    },
  },
  {
    id: 'd2', t: '06:00', ch: 'documento', who: null, titulo: 'Veinte nombres', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Piso 11, al pie de la escalera', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Revisas el permiso con una linterna de casco. Veinte nombres, veinte firmas.${F.has('dos_reasignados') ? ' Wilson y Brayan aparecen con su capacitación de altura del viernes.' : ''}${F.has('arneses_ferreteria') ? ' Ingrid retiró ayer los arneses de la ferretería; quedan los certificados.' : ''}</p><p>Los mixers esperan. <mark class="clave">Un permiso de veinte personas tiene veinte maneras de fallar</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que impide que alguien suba o lo que debe corregirse.',
    doc: { t: 'Permiso de trabajo en altura N.° 018', sub: 'Vaciado de losa · Piso 12 · jueves 6:00' },
    lines: [
      { id: 'firmas', t: 'Firmas: supervisor de turno, jefe de obra y supervisión de seguridad.' },
      { id: 'nuevo', t: 'Personal: incluye a «Kevin, ayudante», contratado ayer por la tarde. Inducción: pendiente. Capacitación en altura: no.', bad: LEY, why: 'Sin capacitación en altura no sube. Y nadie entra a la obra sin inducción.' },
      { id: 'medico', t: 'Certificación médica para trabajo sobre 15 m: vigente para 19 de 20.', bad: LEY, why: 'El formato de la G.050 pide certificación médica sobre 15 m. La persona que no la tiene trabaja abajo hoy.' },
      { id: 'arneses', t: 'Inspección de arneses en tierra: 20 de 20, a las 5:45.' },
      { id: 'exclusion', t: 'Zona de exclusión bajo la pluma: acordonada y señalizada.' },
      { id: 'viento', t: 'Lectura de viento al inicio: dentro del límite del manual. Próxima lectura: «si cambia el clima».', bad: BP, why: 'El viento sube sin avisar: la lectura debe ser periódica, con hora, y anotada.' },
      { id: 'rescate', t: 'Equipo de rescate en el piso 11, con dos rescatistas designados y radio.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Firmas el permiso. A las 7:40 ves a un chico que no conoces subiendo con un balde. Nadie sabe quién lo contrató.' : `Marcas ${hitsLey} problemas. Kevin se queda abajo con Wilmer, haciendo la inducción a las 8. Don Segundo reacomoda a uno de los encofradores en el patio por lo del examen médico. Escribes al margen: «lectura de viento cada 30 minutos».`,
      flags: missLey ? [] : ['permiso_vaciado'], rel: { segundo: missLey ? 0 : 1 },
      cartera: { permiso: missLey ? 'Permiso firmado con vacíos' : 'Permiso N.° 018: 18 arriba, viento cada 30 min' },
      pro: { ok: 'Revisar persona por persona es lento, pero es el único filtro antes del borde.', risk: 'Un ayudante contratado la víspera es el más expuesto: no conoce la obra ni el plan.', info: 'Si alguien no cumple, se le busca tarea abajo: nadie pierde el jornal.' },
      kusi: missLey ? ['preocupado', '¿Quién es ese chico del balde?'] : ['celebra', '¡Veinte nombres revisados uno por uno!'],
    }),
    rules: [[LEY, 'Norma G.050, Anexo J.2: personal con capacitación en altura y certificación médica sobre 15 m; permiso diario.']],
    mirada: {
      ve: 'El día del vaciado siempre aparece alguien de último minuto: un ayudante que trajo un primo, un reemplazo que nadie registró. El permiso es el filtro para que nadie suba sin lo que se necesita.',
      visual: { tipo: 'embudo', titulo: 'Los veinte del permiso', niveles: [['En la lista', 20], ['Con capacitación en altura', 19], ['Con certificación médica', 18], ['Suben al 12', 18]] },
    },
  },
  {
    id: 'd3', t: '10:50', ch: 'presencial', who: null, titulo: 'El refrigerio', banner: 'assets/foto/cafe.webp', lugar: 'Piso 12', show: ['personas', 'tiempo', 'confianza'],
    body: (n, F) => `<p>El sol ya pega fuerte y el concreto brilla. Llevan cinco horas. Ruth se seca el sudor con la manga; uno de los encofradores tiene los ojos rojos.${F.has('acta_enviada') ? ' Rocío cumplió: hay dos bidones de agua en cada piso.' : ' El agua de los pisos altos no llegó: suben botellas compradas en la bodega de la esquina.'}</p><p>Renzo sube: «No hay viento. <mark class="clave">Aprovechemos la calma y que coman después</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Mantener el refrigerio a las 11, por turnos de diez personas, para que la bomba no se detenga y nadie trabaje en el borde con hambre y cansado.',
        res: { q: null, fx: { personas: 4, confianza: 2, tiempo: -1 }, flags: ['refrigerio_respetado'], cartera: { piso12: 'Refrigerio por turnos, bomba sin parar' },
          out: 'Renzo mira el reloj y cede: «Por turnos, ya». La primera tanda baja al 11 y come sentada a la sombra de una columna: arroz con pollo de la señora del comedor. Ruth te dice: «La otra vez fue de pie y con el plato en la mano».', kusi: ['feliz', '¡Comer sentados también es seguridad!'] } },
      { id: 'b', label: 'Aceptar: si hay calma, conviene avanzar. Comen a la una.',
        res: { q: null, fx: { tiempo: 2, personas: -4 },
          out: 'A las 12:30 un encofrador se marea y lo bajan al tópico: deshidratación. Vuelve a trabajar a la una, pálido. Nadie lo dice en voz alta, pero todos lo vieron.', kusi: ['preocupado', 'El cansancio también es un peligro.'] } },
    ],
    rules: [[BP, 'La fatiga, el calor y el hambre aumentan los errores en el borde. Los relevos y el refrigerio son parte del plan, no un lujo.']],
    mirada: { ve: 'En obra, el refrigerio suele ser lo primero que se sacrifica cuando hay prisa. Pero una persona cansada y deshidratada en el borde de una losa es un riesgo tan real como el viento. Los turnos permiten cuidar a la gente sin detener la bomba.' },
  },
  {
    id: 'd4', t: '13:10', ch: 'presencial', who: 'segundo', titulo: 'El viento', banner: 'assets/esc/alarma.webp', lugar: 'Piso 12, junto a la pluma', show: ['etica', 'cumplimiento', 'confianza', 'tiempo'],
    body: (n, F) => `<p>A la una entra el viento del sur, como un portazo. La manguera de la pluma se balancea sobre el borde. ${F.has('anemometro') ? 'El anemómetro marca ráfagas por encima del límite de la tabla del manual, dos veces en un minuto.' : 'No hay anemómetro. Ángel dice que «está fuerte», Renzo dice que «está aguantable».'} Faltan cuatro mixers para terminar.</p><p>Renzo: «Dos mixers más y cerramos este paño. Cuarenta minutos».${F.has('terminar_igual') ? ' «Quedamos ayer en que terminamos igual.»' : ''}${F.has('acta_suavizada') ? ' «Y el acta solo recomienda.»' : ''} Patricia, del cliente, mira en silencio. Don Segundo <mark class="clave">te mira a ti</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Parar el bombeo: Ángel recoge la pluma, la gente se retira del borde, y en la zona central se termina de vibrar y reglear lo ya colocado para cortar en la junta prevista.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 6, confianza: 4, tiempo: -4 }, rel: { segundo: 1 }, flags: ['vaciado_parado'], cartera: { piso12: 'Bombeo detenido 13:15; corte en junta; falta un paño', viento: 'Límite superado: pluma recogida' },
          out: 'Don Segundo levanta el brazo y grita: «¡Recoge, Ángel!». La pluma se pliega crujiendo. En veinte minutos, el concreto colocado está vibrado y cortado limpio en el eje 5. Renzo se aleja a llamar al cliente. Patricia escribe en su tablet.',
          pro: { ok: 'Paras lo peligroso y terminas lo necesario para que la losa no se dañe.', risk: 'Hay dos mixers que no se van a usar y un paño que se vacía mañana. Alguien va a pagar eso.', info: 'Anota la hora, la lectura y quién decidió: es parte del registro del día.' },
          kusi: ['animo', 'Lo dijiste. Y la obra paró contigo.'] } },
      { id: 'b', label: 'Aceptar los dos mixers con un vigía en el borde y la cuadrilla más atenta.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -6, tiempo: 3 }, rel: { segundo: 0 }, flags: ['vaciado_forzado'], cartera: { piso12: 'Bombeo con viento sobre el límite' },
          out: 'La manguera golpea el encofrado del borde dos veces. Un encofrador se tira al piso para esquivarla. A las 13:55 terminan el paño. Renzo dice «¿ves?». Patricia no dice nada, pero anota la hora.',
          pro: { ok: 'El paño quedó completo y no hubo que pagar los mixers.', risk: 'El criterio que acordó el comité y repitió Don Segundo en la charla se rompió al primer apuro. Mañana nadie lo creerá.' },
          kusi: ['preocupado', 'Salió bien… esta vez.'] } },
      { id: 'c', label: 'Parar todo de inmediato y bajar a todos al piso 11, aunque el concreto recién colocado quede sin vibrar.',
        res: { q: 'aceptable', fx: { etica: 3, cumplimiento: 2, calidad: -4, tiempo: -4 }, rel: { segundo: -1 }, flags: ['vaciado_abandonado'], cartera: { piso12: 'Parada total; concreto sin consolidar en un sector' },
          out: 'Bajan todos. Don Segundo protesta: «¡El concreto se va a quedar con cangrejeras!». Nadie está en riesgo, pero mañana habrá que picar un sector y repararlo.',
          pro: { ok: 'Nadie queda expuesto al viento.', risk: 'El riesgo estaba en el borde y en la pluma, no en vibrar al centro. Parar sin plan creó un problema de calidad que costará más.' },
          kusi: ['pensando', 'Seguro… pero ¿proporcional?'] } },
    ],
    rules: [[LEY, 'Ley 29783, art. 63: ante un peligro inminente se interrumpen las actividades y no se reanudan mientras el riesgo no se haya reducido o controlado.'], [BP, 'Parar bien es parar lo peligroso y asegurar lo que queda, no abandonar todo.']],
    mirada: {
      ve: 'Este es el momento para el que sirvieron las dos semanas: la matriz, los arneses, el permiso, el comité, el anemómetro y la junta prevista. Cuando el criterio de parada está escrito, medido y dicho por el maestro de obra, parar deja de ser la decisión de una asistente contra un residente.',
      visual: { tipo: 'balanza', a: { t: 'Dos mixers más', items: ['Paño completo hoy', 'Sin pagar mixers', 'Renzo tranquilo'] }, b: { t: 'Parar el bombeo', items: ['Lo que acordó el comité', 'Nadie bajo una manguera suelta', 'La regla sigue valiendo mañana'] } },
      normas: [{ ley: 'Ley 29783, art. 63', dice: 'Ante un peligro inminente, los trabajadores pueden interrumpir sus actividades e incluso abandonar el lugar. No se reanudan mientras el riesgo no se haya reducido o controlado.', practica: 'La pluma recogida y la gente fuera del borde hasta que baje el viento.' }],
    },
  },
  {
    id: 'd5', t: '13:40', ch: 'llamada', who: null, titulo: 'El costo de parar', banner: 'assets/foto/llamada.webp', lugar: 'Piso 11', show: ['confianza', 'tiempo', 'personas'],
    body: (n, F) => `<p>${F.has('vaciado_parado') || F.has('vaciado_abandonado') ? 'La pluma está recogida y el borde, vacío.' : 'El paño está terminado, pero la obra está en silencio.'} El viento sigue. Tu celular vibra sin parar.</p><p>Tres llamadas que tienes que atender. <mark class="clave">Parar también se gestiona</mark>.</p>`,
    type: 'calls',
    calls: [['Planta de concreto premezclado', 'Contesta la programadora', '«Tengo dos mixers en la Panamericana camino a la obra. Si no los descargan, se pierde la carga y se factura igual. Puedo desviar uno a otra obra en Pimentel si me avisan ya.»'], ['Ing. Patricia Salazar · supervisión del cliente', 'Contesta desde el patio', '«Lo que necesito es que quede por escrito qué pasó y a qué hora. Al cliente le duele más una losa mal hecha o un accidente que un día de atraso.»'], ['Ing. Ingrid Delgado', 'Contesta desde el piso 12', '«Lo más importante ahora: que nadie suba “a recoger algo” mientras siga el viento. Y anota todo lo que pasó, con hora.»']],
    prompt: '¿Cómo manejas las consecuencias?',
    choices: [
      { id: 'a', label: 'Pedir a la planta que desvíe un mixer a Pimentel, programar el paño faltante para mañana a las 6:00 y redactar con Ingrid un reporte de una página para Patricia, con horas y lecturas.',
        res: { q: 'buena', fx: { confianza: 5, tiempo: 2, calidad: 2 }, flags: ['parada_documentada'], cartera: { piso12: 'Paño faltante: viernes 6:00; un mixer desviado' },
          out: 'Se salva un mixer. Renzo, todavía serio, firma el reporte. A las 3 llega el correo de Patricia a toda la residencia. Renzo lo lee dos veces y no comenta nada.',
          pro: { ok: 'Reduces el costo de parar y dejas evidencia de por qué se paró.', info: 'Un reporte con horas y lecturas convierte una decisión discutible en una decisión defendible.' },
          kusi: ['celebra', '¡Paraste y además ordenaste el día!'] } },
      { id: 'b', label: 'Dejar que Renzo se encargue de la planta y del cliente: lo tuyo es la seguridad.',
        res: { q: 'aceptable', fx: { confianza: -1, tiempo: -1 }, cartera: { piso12: 'Consecuencias en manos de la residencia' },
          out: 'Renzo no alcanza a avisar a tiempo y se pierden los dos mixers. En la tarde, en el grupo de la residencia, alguien escribe: «Dos mixers perdidos por SSOMA».',
          pro: { ok: 'Respetas los roles.', risk: 'Si no ayudas a gestionar el costo de parar, la próxima vez ese costo será el argumento para no parar.' },
          kusi: ['pensando', 'Parar es tuyo… su costo también te toca.'] } },
    ],
    rules: [[BP, 'Después de detener un trabajo, documenta la hora, la medición y quién decidió, y ayuda a reducir el costo de la parada.']],
    mirada: { ve: 'Cada parada tiene un costo: concreto, horas, plazo. Si Seguridad solo dice «paren» y se va, el costo queda como argumento contra la próxima parada. Ayudar a gestionarlo y dejarlo documentado es lo que hace sostenible el criterio.' },
  },
  {
    id: 'd6', t: '14:20', ch: 'presencial', who: null, titulo: 'El tablón', banner: 'assets/esc/alarma.webp', lugar: 'Patio, zona de exclusión', show: ['cumplimiento', 'personas', 'etica'],
    body: (n, F) => `<p>Una ráfaga levanta un tablón suelto del borde del 12 y lo lanza al vacío. Cae de punta en el patio y rebota contra un cono. ${F.has('zona_exclusion') ? 'Cae dentro de la zona de exclusión, donde no hay nadie. A tres metros de la cinta, un ayudante se queda paralizado con una carretilla.' : 'Cae a un metro de un ayudante que cruzaba el patio con una carretilla, porque nadie había acordonado esa zona.'}</p><p>Nadie está herido. Renzo, bajando la escalera: «No pasó nada. <mark class="clave">No hagamos un drama de esto</mark>».</p>`,
    type: 'secuencia', prompt: 'Ordena lo que haces después de la caída del tablón.', boton: 'Actuar',
    items: [
      { id: 'nadie', t: 'Confirmar que nadie está herido y alejar a la gente del patio', por: 'Primero las personas.' },
      { id: 'cerrar', t: 'Mantener cerrada la zona y prohibir que alguien suba a recoger nada', por: 'Mientras sople, puede caer otro.' },
      { id: 'asegurar', t: 'Cuando baje el viento, asegurar o bajar todo el material suelto del 12', por: 'Controlar la causa.' },
      { id: 'registrar', t: 'Registrarlo como incidente peligroso y avisar a Ingrid para la notificación en 24 horas', por: 'Pudo herir a alguien: eso lo hace un incidente peligroso.' },
      { id: 'comite', t: 'Llevarlo al comité para investigarlo como si hubiera herido a alguien', por: 'La próxima vez la suerte puede no estar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, etica: q === 'buena' ? 3 : 0, personas: 2 },
        flags: q === 'riesgosa' ? [] : ['incidente_notificado'], cartera: { incidentes: q === 'riesgosa' ? 'Caída de tablón sin registrar' : 'Incidente peligroso registrado; notificación en 24 h' },
        out: q === 'buena' ? 'Ingrid confirma: «Esto es un incidente peligroso. Lo notificamos hoy mismo». Renzo resopla, pero no la contradice. A las 4, Teodoro y Don Segundo bajan todo el material suelto del 12 con sogas.' : q === 'aceptable' ? 'Registras el incidente, pero alguien sube a buscar el martillo que se quedó arriba antes de que pare el viento. Lo bajas a gritos.' : 'En el desorden, el incidente queda como una anécdota del día.',
        pro: { ok: 'Un incidente peligroso se trata como un accidente que no llegó a pasar: se registra, se notifica y se investiga.', risk: '«No pasó nada» es justamente lo que se dice antes del accidente que sí pasa.', info: 'El empleador notifica los incidentes peligrosos en 24 horas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡No pasó nada… y igual se aprende!' : 'Pudo pasar. Eso cuenta.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 110 (modificado por el D.S. 006-2022-TR): el empleador notifica los incidentes peligrosos dentro de las 24 horas.'], [LEY, 'Norma G.050, punto 20: zona acordonada bajo los trabajos en altura.']],
    mirada: {
      ve: 'Por cada accidente hay muchos sucesos que estuvieron a punto de serlo. Un tablón que cae donde no hay nadie no es suerte: es la zona de exclusión funcionando, y también un aviso de que había material suelto arriba.',
      visual: { tipo: 'cambio', titulo: 'De «no pasó nada» a incidente peligroso', pares: [['«No hagamos un drama»', 'Registro y notificación en 24 horas'], ['Suerte', 'Zona de exclusión que funcionó'], ['Tablón suelto', 'Material asegurado antes del viento']] },
      normas: [{ ley: 'D.S. 005-2012-TR, glosario y art. 110 (modificado por el D.S. 006-2022-TR)', dice: 'Incidente peligroso es un suceso potencialmente riesgoso que pudiera causar lesiones a las personas en su trabajo o a la población. El empleador lo notifica dentro de las 24 horas.', practica: 'El tablón que cayó en el patio se registra, se notifica y se investiga, aunque nadie se haya lastimado.' }],
    },
  },
  {
    id: 'd7', t: '17:50', ch: 'whatsapp', who: null, titulo: 'Para el comité', banner: 'assets/esc/meta.webp', lugar: 'Portón de la obra', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Tienes la cara quemada por el sol y los pies hinchados dentro de las botas. Desde el portón ves el piso 12${F.has('vaciado_forzado') ? ': el paño está completo. No sabes si sentirte aliviada.' : ', casi entero gris, con una línea limpia donde se cortó.'}</p><p>El comité acordó las condiciones del vaciado. <mark class="clave">Les debes el informe del día</mark>.</p>`,
    type: 'compose', enviaA: 'comite', para: 'Para: Comité SST · Los Algarrobos', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Qué pasó', ops: [
        { id: 'h1', t: 'Hoy se aplicó el acuerdo del comité: a las 13:15 el viento pasó el límite de la bomba y se detuvo el bombeo. Mañana a las 6 se vacía el paño que faltó.', ok: true, por: 'Conecta lo que pasó con lo que el comité decidió.' },
        { id: 'h2', t: 'Hoy hubo algunos inconvenientes con el clima.', ok: false, por: 'Vago: no dice qué se hizo ni por qué.' },
      ] },
      { id: 'incidente', t: 'El incidente', ops: [
        { id: 'i1', t: 'A las 14:20 cayó un tablón en el patio. Nadie se lastimó. Se registró como incidente peligroso y lo veremos en la próxima sesión.', ok: true, por: 'Transparente y con siguiente paso.' },
        { id: 'i2', t: 'Lo demás, sin novedad.', ok: false, por: 'Esconde un incidente que el comité debe conocer.' },
      ] },
      { id: 'gracias', t: 'Cómo cierras', ops: [
        { id: 'g1', t: 'Gracias, Teodoro, Ruth y Marleny: lo que dijeron el martes se usó hoy.', ok: true, por: 'Reconoce la voz de los representantes.' },
        { id: 'g2', t: 'Buen trabajo a todos.', ok: false, por: 'Amable, pero genérico.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'i1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 4 : 0 }, rel: { marleny: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['comite_informado'], cartera: { incidentes: q === 'riesgosa' ? 'Comité sin informar' : 'Comité informado del vaciado y del incidente' },
        out: q === 'buena' ? 'Marleny responde con un audio que empieza riéndose y termina con la voz quebrada: «Por primera vez lo que decimos sirve, ingeniera». Teodoro manda una foto de la línea del corte en el eje 5.' : q === 'aceptable' ? 'Llegan algunos pulgares. Marleny pregunta: «¿Y lo del tablón? Me contaron».' : 'El mensaje pasa sin respuesta. Mañana alguien preguntará qué pasó de verdad.',
        pro: { ok: 'Contarle al comité cómo se aplicó su acuerdo lo vuelve real para todos.', risk: 'Si el comité se entera del incidente por otros, pierde confianza en lo que le informas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '«Por primera vez lo que decimos sirve.» ¡Qué divino!' : 'Cuéntale al comité lo que decidió y lo que pasó.'],
      };
    },
    rules: [[BP, 'Informa al comité el mismo día cómo se aplicaron sus acuerdos y qué incidentes hubo.']],
    mirada: {
      ve: 'El comité acordó, la obra aplicó, y ahora el comité se entera. Ese círculo es el que convierte la seguridad en algo que los trabajadores sienten propio.',
      visual: { tipo: 'linea', titulo: 'El día del vaciado', hitos: [['5:30', 'Charla'], ['6:00', 'Permiso: 18 arriba'], ['11:00', 'Refrigerio por turnos'], ['13:15', 'Viento: se para'], ['14:20', 'Tablón: incidente peligroso']] },
    },
  },
];
