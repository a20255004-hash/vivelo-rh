// Reclutador/a de selección masiva · Capítulo 1 · «120 en 21 días» · Semana 1, lunes.
// Hilo del mes: 120 asesores para una campaña nueva de un centro de contacto.
// Normas citadas: Ley 26772 y su reglamento (D.S. 002-98-TR), sobre ofertas de empleo sin requisitos discriminatorios;
// D.S. 015-2026-TR (RMV de S/ 1,230); Ley 29733 (datos personales).

export const CAP = {
  n: 1, titulo: '120 en 21 días', dia: 'Semana 1, lunes', foto: 'assets/foto2/callcenter.webp',
  lugar: 'Contacta Perú · Cercado de Lima',
  inicio: '08:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Cercado de Lima, piso 4 de Contacta Perú. Hoy empiezas como reclutadora de selección masiva y hay una campaña nueva.', boton: 'Entrar al piso de reclutamiento',
  kusi: 'En selección masiva los números mandan… pero detrás de cada número hay alguien. ¡Dale!',
  lead: 'Hiciste la cuenta del embudo, limpiaste un aviso discriminatorio, sostuviste el criterio frente a Bruno y elegiste canales que traen a la gente correcta.',
  reflexion: '¿Qué número de hoy te sorprendió más?',
  siguiente: { n: 2, titulo: 'El aviso', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'meta', p: 'Campaña «Cobranzas Banco Sur»', j: 'Bruno · Operaciones', d: 0, e: '120 asesores en 21 días' },
  { id: 'aviso', p: 'Aviso de convocatoria', j: 'Jessica · Reclutamiento', d: 0, e: 'Plantilla de 2024' },
  { id: 'canales', p: 'Canales de atracción', j: 'Jessica · Reclutamiento', d: 0, e: 'Solo portal pagado' },
  { id: 'evaluacion', p: 'Evaluación grupal del miércoles', j: 'Jessica · Reclutamiento', d: 0, e: '80 citados' },
];

export const FUTURO = {
  embudo_bien: ['Calculaste que necesitas unas 1,700 postulaciones.', 'Bruno se asustará con el número en el capítulo 3.'],
  embudo_mal: ['Subestimaste el embudo.', 'En el capítulo 3 los números no cerrarán.'],
  aviso_limpio: ['El aviso salió sin edad, sin «buena presencia» y con un sueldo legal.', 'Llegarán postulantes que antes no se animaban. Capítulo 2.'],
  aviso_sucio: ['El aviso salió con requisitos discriminatorios.', 'Alguien lo publicará en redes en el capítulo 2.'],
  criterio: ['Mantuviste la evaluación aunque Bruno quería «contratar a todos».', 'Él volverá a presionar en el capítulo 7.'],
  sin_filtro: ['Aceptaste contratar sin evaluar.', 'La deserción en capacitación será altísima. Capítulo 6.'],
  base_comprada: ['Usaste una base de CV comprada a un tercero.', 'Un postulante preguntará de dónde sacaste su número. Capítulo 5.'],
  alexandra_citada: ['Alexandra recibió una citación clara.', 'La conocerás en el capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  alexandra: { n: 'Alexandra Rivas', sub: 'Postulante', who: 'alexandra' },
};

export const WSP = [
  { chat: 'grupo', t: '08:32', de: 'Jessica', txt: '¡Llegó la nueva! 🎉 Hoy arrancamos «Cobranzas Banco Sur»: 120 en 21 días. Café en la cocina.' },
  { chat: 'bruno', t: '11:10', de: 'Bruno', txt: 'Hola. Bajo a reclutamiento a las 11:30. Tema campaña.' },
  { chat: 'alexandra', t: '16:45', de: 'Alexandra', txt: '¡Hola! Sí, ahí estaré el miércoles a las 9 con mi DNI. Gracias 😊', si: 'alexandra_citada' },
  { chat: 'bruno', t: '17:20', de: 'Bruno', txt: 'Ok, evaluación rápida. Pero si el día 21 no tengo 120, hablamos.', si: 'criterio' },
  { chat: 'jessica', t: '18:00', de: 'Jessica', txt: 'El aviso nuevo quedó bacán. Lo publicamos hoy a las 7 de la noche 🙌', si: 'aviso_limpio' },
];

export const CORREOS = [
  { t: '08:40', de: 'Jessica Torres', para: 'Reclutadora masiva', asunto: 'La campaña en números', html: '<p>¡Bienvenida! Banco Sur nos encargó su campaña de cobranzas. Necesitamos <b>120 asesores capacitados el día 21</b>. Si no llegamos, hay penalidad.</p><p>Tasas de la última campaña parecida: el 60 % de los postulantes contesta, el 40 % de los citados llega, el 50 % aprueba la evaluación, el 80 % empieza la capacitación y el 75 % la termina.</p><p>Jessica</p>' },
];

export const QUIZ = [
  { q: '¿Qué norma prohíbe los requisitos discriminatorios en los avisos de empleo?', ops: ['Ley 26772 y su reglamento', 'Ley 29783', 'Ley 31110', 'Ley 28518'], ok: 0, por: 'La Ley 26772 prohíbe que las ofertas de empleo contengan requisitos que constituyan discriminación.' },
  { q: 'Si de cada 100 postulantes solo terminan 7 la capacitación, ¿cuántos necesitas para 120?', ops: ['Unos 170', 'Unos 900', 'Unos 1,700', '120'], ok: 2, por: '120 ÷ 0.072 ≈ 1,667: el embudo pierde gente en cada etapa.' },
  { q: '¿«Buena presencia» es un requisito válido en un aviso?', ops: ['Sí, siempre', 'No: es ambiguo y puede encubrir discriminación', 'Solo para atención al público', 'Solo para mujeres'], ok: 1, por: 'Es un criterio subjetivo que puede discriminar por apariencia.' },
  { q: 'En octubre de 2026, un aviso ofrece S/ 1,025 por jornada completa. Eso…', ops: ['Es legal', 'Está por debajo de la RMV de S/ 1,230', 'Depende del distrito', 'Es legal si hay bonos'], ok: 1, por: 'La RMV es S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR).' },
  { q: 'Te ofrecen comprar una base de 5,000 CV. ¿Qué haces?', ops: ['La compras', 'La rechazas: esos datos no se entregaron para tu proceso', 'La usas solo una vez', 'La compartes con otras empresas'], ok: 1, por: 'Los datos personales se usan solo para la finalidad para la que se entregaron (Ley 29733).' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '08:45', ch: 'presencial', who: 'jessica', titulo: 'El número en la pizarra', banner: 'assets/foto2/presentacion.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>Jessica escribe «120» en la pizarra, tan grande que ocupa la mitad. Debajo dibuja un embudo con las tasas de la última campaña: 60 % contesta, 40 % de los citados llega, 50 % aprueba, 80 % empieza la capacitación y 75 % la termina.</p><p>«Antes de publicar nada, dime: <mark class="clave">¿cuántas postulaciones necesitamos para llegar a 120?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Unas 1,700 postulaciones.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 4 }, rel: { jessica: 1 }, flags: ['embudo_bien'], cartera: { meta: 'Embudo: ~1,700 postulaciones para 120' },
          out: 'Jessica sonríe y escribe «1,667» bajo el embudo: «Ya sabes por qué este trabajo da miedo. Ahora, ¿cómo subimos las tasas para necesitar menos?».',
          pro: { ok: 'Multiplicas las tasas: 0.6 × 0.4 × 0.5 × 0.8 × 0.75 = 0.072. Y 120 ÷ 0.072 ≈ 1,667.', info: 'Mejorar una sola tasa (por ejemplo, que llegue más gente citada) baja mucho el total necesario.' },
          kusi: ['celebra', '¡Matemática de reclutadora!'] } },
      { id: 'b', label: 'Unas 400 postulaciones.',
        res: { q: 'riesgosa', fx: { calidad: -3, confianza: -1 }, flags: ['embudo_mal'],
          out: 'Jessica hace la cuenta frente a ti: con 400 postulaciones llegarías a unas 29 personas capacitadas.',
          pro: { ok: 'Intentaste estimar.', risk: 'Cada etapa del embudo se multiplica: subestimarlo es la causa más común de no llegar a la meta.' },
          kusi: ['sorpresa', '¡El embudo se come a la gente!'] } },
      { id: 'c', label: 'Unas 200: sumas un margen de seguridad sobre 120.',
        res: { q: 'riesgosa', fx: { calidad: -4 }, flags: ['embudo_mal'],
          out: 'Jessica borra el 200: «Con 200 terminamos con 14 asesores. Y Bruno nos mata».',
          pro: { ok: 'Pensaste en un margen.', risk: 'En selección masiva el margen no es un 60 % más: es diez o quince veces más.' },
          kusi: ['preocupado', 'El embudo es más ancho de lo que parece…'] } },
    ],
    rules: [[BP, 'Planifica desde el final del embudo hacia atrás, con tasas reales de campañas anteriores.']],
    mirada: {
      ve: 'La selección masiva es, antes que nada, aritmética. Quien entiende su embudo sabe que puede necesitar menos postulaciones si mejora una sola etapa: por ejemplo, que llegue más gente a la evaluación.',
      visual: { tipo: 'embudo', titulo: 'Para llegar a 120', niveles: [['Postulaciones', 1667], ['Contestan', 1000], ['Llegan a la evaluación', 400], ['Aprueban', 200], ['Empiezan capacitación', 160], ['Terminan', 120]] },
    },
  },
  {
    id: 'm2', t: '10:00', ch: 'documento', who: null, titulo: 'El aviso de 2024', banner: 'assets/foto2/entrevista-cv.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Jessica te pasa el aviso de la última campaña de cobranzas: «Actualízalo. <mark class="clave">Ojo, que es de 2024</mark>».</p>`,
    type: 'flag', prompt: 'Marca lo que no puede ir o debe corregirse antes de publicar.',
    doc: { t: 'Asesores de cobranza telefónica', sub: 'Contacta Perú · aviso 2024' },
    lines: [
      { id: 'edad', t: 'Edad: de 18 a 28 años.', bad: LEY, why: 'Limitar por edad sin justificación objetiva es un requisito discriminatorio (Ley 26772).' },
      { id: 'pres', t: 'Buena presencia.', bad: LEY, why: 'Es un criterio ambiguo que puede encubrir discriminación por apariencia.' },
      { id: 'sueldo', t: 'Sueldo: S/ 1,025 más bonos por metas, jornada completa.', bad: LEY, why: 'La RMV es S/ 1,230 desde el 1 de octubre de 2026. El básico no puede ser menor con jornada completa.' },
      { id: 'varon', t: 'Preferentemente varones, por tratarse de cobranzas.', bad: LEY, why: 'Preferir un sexo sin una razón objetiva vinculada al puesto es discriminatorio.' },
      { id: 'turno', t: 'Turnos de 6 horas, de lunes a sábado.' },
      { id: 'sec', t: 'Secundaria completa.', duda: 'Puede justificarse, pero conviene preguntarse si de verdad es necesaria para el puesto. Lo verás en el capítulo 4.' },
      { id: 'cap', t: 'Capacitación inicial pagada desde el primer día.' },
      { id: 'lugar', t: 'Lugar: Cercado de Lima, a dos cuadras de la estación del Metropolitano.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'El aviso se publica con requisitos que no debería tener. Alguien hará captura de pantalla.' : `Corriges ${hitsLey} requisitos. Jessica lo lee: «Ahora sí parece un aviso de 2026».`,
      flags: [missLey ? 'aviso_sucio' : 'aviso_limpio'], rel: { jessica: missLey ? 0 : 1 },
      cartera: { aviso: missLey ? 'Publicado con errores' : 'Corregido y listo para publicar' },
      pro: { ok: 'Un aviso limpio atrae a más gente y protege a la empresa.', risk: 'Un requisito discriminatorio en un aviso es una prueba escrita.', info: 'Revisa cada requisito con una pregunta: ¿es necesario para hacer este trabajo?' },
      kusi: missLey ? ['indignado', 'Ese aviso dejaba fuera a mucha gente…'] : ['celebra', '¡Aviso de profesional!'],
    }),
    rules: [[LEY, 'Ley 26772 y D.S. 002-98-TR: las ofertas de empleo no pueden contener requisitos discriminatorios.'], [LEY, 'RMV de S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR).']],
    mirada: {
      ve: 'Un aviso es el primer filtro y el más masivo. Cada requisito innecesario deja fuera a cientos de personas: si además es discriminatorio, deja una prueba escrita de que la empresa discrimina.',
      visual: { tipo: 'cambio', titulo: 'Del aviso 2024 al aviso 2026', pares: [['18 a 28 años', 'Sin límite de edad'], ['Buena presencia', 'Buena comunicación oral'], ['S/ 1,025 + bonos', 'Desde S/ 1,230 + bonos'], ['Preferentemente varones', 'Para todas las personas']] },
      normas: [{ ley: 'Ley 26772 y su reglamento, D.S. 002-98-TR', dice: 'Las ofertas de empleo y el acceso a la formación no pueden contener requisitos que constituyan discriminación o anulen la igualdad de oportunidades.', practica: 'Edad, sexo y «buena presencia» sin justificación objetiva son los casos más frecuentes.' }],
    },
  },
  {
    id: 'm3', t: '11:30', ch: 'presencial', who: 'bruno', titulo: '«Contrata a todos»', banner: 'assets/foto/frente-a-frente.webp', show: ['calidad', 'confianza', 'personas'],
    body: () => `<p>Bruno baja con el contrato del cliente en la mano. «Si el día 21 no tengo 120 conectados, el banco nos multa. Así que hagamos fácil: <mark class="clave">contrata a todos los que vengan, sin evaluación</mark>. Que el piso los filtre.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle una evaluación corta y práctica (20 minutos de simulación de llamada) y mostrarle cuánto cuesta la gente que renuncia en la primera semana.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 2, tiempo: -2 }, rel: { bruno: 0 }, flags: ['criterio'], cartera: { evaluacion: 'Simulación de llamada de 20 min' },
          out: 'Bruno hace la cuenta: cada asesor que se va en la capacitación cuesta cinco días de sueldo y un cupo perdido. «Veinte minutos. Ni uno más.»',
          pro: { ok: 'Haces la evaluación más corta posible sin renunciar a ella, y le hablas con su número: el costo.', risk: 'Te comprometiste a una evaluación rápida: tendrás que diseñarla bien.', info: 'Pregunta cuántos asesores se fueron en la primera semana de la última campaña.' },
          kusi: ['animo', 'Rápido, pero con criterio.'] } },
      { id: 'b', label: 'Aceptar: la meta manda, el cliente presiona y en la capacitación igual se van a ver las habilidades de cada uno.',
        res: { q: 'riesgosa', fx: { calidad: -6, personas: -3, tiempo: 3 }, rel: { bruno: 1 }, flags: ['sin_filtro'],
          out: 'Bruno te da una palmada en el hombro. La capacitación empezará con 200 personas sin evaluar. La mitad no sabrá a qué vino.',
          pro: { ok: 'Bruno queda tranquilo hoy.', risk: 'Sin filtro, la deserción en capacitación se dispara y la meta se aleja.' },
          kusi: ['preocupado', 'Contratar mal también cuesta… y mucho.'] } },
    ],
    rules: [[BP, 'En selección masiva, una evaluación corta y práctica cuesta menos que la deserción temprana.']],
    mirada: {
      ve: 'La presión por la meta tienta a saltarse el filtro. Pero cada persona que entra sin saber a qué viene es alguien que se irá en la primera semana, y un cupo que habrá que volver a llenar.',
      visual: { tipo: 'balanza', a: { t: 'Contratar a todos', items: ['Números altos el primer día', 'Bruno contento'] }, b: { t: 'Evaluación de 20 minutos', items: ['Menos deserción', 'Gente que sabe a qué viene', 'Meta más segura el día 21'] } },
    },
  },
  {
    id: 'm4', t: '14:15', ch: 'documento', who: null, titulo: '¿Dónde está la gente?', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Necesitas unas 1,700 postulaciones y la última campaña solo usó un portal pagado. Tienes presupuesto y tiempo para <mark class="clave">dos canales nuevos</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos canales que vas a activar esta semana.', boton: 'Activar estos canales', resumen: 'Activaste',
    cols: ['Canal', 'Qué esperas'],
    rows: [
      { id: 'referidos', cells: ['Programa de referidos entre los asesores actuales', 'Gente que ya sabe cómo es el trabajo'] },
      { id: 'bolsa', cells: ['Bolsa de trabajo pública del Ministerio de Trabajo', 'Alcance gratuito y amplio'] },
      { id: 'ferias', cells: ['Ferias de empleo en distritos cercanos a la sede', 'Postulantes que llegan en menos de una hora'] },
      { id: 'base', cells: ['Comprar una base de 5,000 CV a un tercero', 'Números rápidos'] },
      { id: 'lejos', cells: ['Anuncios en todo Lima, sin filtrar por distancia', 'Más volumen'] },
    ],
    score: { referidos: 3, bolsa: 2, ferias: 3, base: -4, lejos: -1 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, cumplimiento: picks.includes('base') ? -6 : 2 },
        flags: picks.includes('base') ? ['base_comprada'] : [], cartera: { canales: picks.map(p => ({ referidos: 'Referidos', bolsa: 'Bolsa pública', ferias: 'Ferias', base: 'Base comprada', lejos: 'Anuncios en todo Lima' })[p]).join(' + ') },
        out: picks.includes('base') ? 'La base llega en una hora. Nadie de esos 5,000 sabe que su CV fue vendido.' : picks.includes('ferias') ? 'Ubicas dos ferias distritales esta semana, a 30 minutos de la sede. La distancia es la primera causa de deserción en centros de contacto.' : 'Los canales están activos. Ahora hay que ver qué traen.',
        pro: { ok: 'Los referidos y la cercanía suelen traer gente que se queda.', risk: 'Una base de CV comprada usa datos que no se entregaron para tu proceso.', info: 'Mide luego qué canal trae más contratados que se quedan, no más postulaciones.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Volumen y calidad a la vez.' : 'Más no siempre es mejor.'],
      };
    },
    rules: [[LEY, 'Los datos personales solo se usan para la finalidad para la que se entregaron (Ley 29733).'], [BP, 'Mide los canales por los contratados que se quedan, no por las postulaciones.']],
    mirada: {
      ve: 'No todos los postulantes valen lo mismo para un embudo: quien vive cerca y conoce el trabajo por un amigo tiene más probabilidades de llegar y de quedarse. Por eso una reclutadora mira la calidad del canal, no solo su volumen.',
      visual: { tipo: 'matriz', x: 'Volumen', y: 'Calidad (se quedan)', cuadrantes: ['Actívalo', 'Actívalo y cuídalo', 'Complementa', 'Evítalo'], items: [['Referidos', .35, .85], ['Ferias cercanas', .5, .75], ['Bolsa pública', .7, .5], ['Anuncios en todo Lima', .85, .2], ['Base comprada', .9, .05]] },
    },
  },
  {
    id: 'm5', t: '16:30', ch: 'whatsapp', who: null, titulo: 'La citación', banner: 'assets/foto/cv-mano.webp', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>El 60 % de los citados no llega. Para mejorar esa tasa, decides probar una citación nueva con Alexandra Rivas, una postulante de 19 años.</p>`,
    type: 'compose', enviaA: 'alexandra', para: 'Para: Alexandra Rivas · Postulante', boton: 'Enviar la citación',
    prompt: 'Arma la citación eligiendo una frase de cada parte.',
    slots: [
      { id: 'quien', t: 'Quién eres', ops: [
        { id: 'q1', t: 'Hola, Alexandra. Te escribe la reclutadora de Contacta Perú por tu postulación a asesora de cobranza.', ok: true, por: 'Nombre, empresa y puesto: así no parece estafa.' },
        { id: 'q2', t: 'Hola, ¿sigues buscando trabajo? 🤑', ok: false, por: 'Suena a mensaje de estafa.' },
      ] },
      { id: 'cuando', t: 'Cuándo y dónde', ops: [
        { id: 'c1', t: 'Te esperamos el miércoles a las 9:00 en Av. Nicolás de Piérola 860, piso 4, a dos cuadras de la estación Colmena.', ok: true, por: 'Fecha, hora, dirección y una referencia de transporte.' },
        { id: 'c2', t: 'Acércate esta semana a nuestras oficinas en el Centro.', ok: false, por: 'Sin día ni dirección: así la mitad no llega.' },
      ] },
      { id: 'que', t: 'Qué esperar', ops: [
        { id: 'e1', t: 'La evaluación dura una hora e incluye una simulación de llamada. Trae tu DNI.', ok: true, por: 'Saber qué pasará reduce la ansiedad y las inasistencias.' },
        { id: 'e2', t: 'Ven con buena presencia.', ok: false, por: 'Ambiguo y fuera de lugar.' },
      ] },
      { id: 'conf', t: 'Confirmación', ops: [
        { id: 'f1', t: '¿Me confirmas por aquí si puedes asistir?', ok: true, por: 'Pedir confirmación compromete y te deja liberar cupos.' },
        { id: 'f2', t: 'Si no vienes, quedas fuera del proceso.', ok: false, por: 'Amenazar no sube la asistencia.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'c1', 'e1', 'f1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 4 : -1 }, rel: { alexandra: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['alexandra_citada'] : [], cartera: { evaluacion: q === 'buena' ? 'Plantilla de citación nueva' : 'Citación de siempre' },
        out: q === 'buena' ? 'Alexandra responde en diez minutos. Guardas el mensaje como plantilla para los 80 citados del miércoles.' : 'Alexandra deja el mensaje en visto. Mañana sabrás si viene.',
        pro: { ok: 'Una citación clara, con referencia y confirmación, puede subir la tasa de asistencia.', info: 'Manda un recordatorio la noche anterior: es lo que más reduce las inasistencias.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Así sí llega la gente.' : '¿Le quedó claro adónde ir?'],
      };
    },
    rules: [[BP, 'Una citación tiene quién, cuándo, dónde, qué esperar y cómo confirmar.']],
    mirada: {
      ve: 'Muchas inasistencias no son desinterés: son direcciones confusas, miedo a una estafa o no saber qué pasará. Mejorar la citación es la forma más barata de mejorar todo el embudo.',
      visual: { tipo: 'mensaje', titulo: 'Una citación que se entiende', txt: 'Hola, Alexandra. Te escribe la reclutadora de Contacta Perú por tu postulación a asesora de cobranza. Te esperamos el miércoles a las 9:00 en Av. Nicolás de Piérola 860, piso 4, a dos cuadras de la estación Colmena. La evaluación dura una hora e incluye una simulación de llamada. Trae tu DNI. ¿Me confirmas por aquí si puedes asistir?' },
    },
  },
  {
    id: 'm6', t: '18:30', ch: 'whatsapp', who: null, titulo: 'El cierre del día', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Jessica escribe en el grupo antes de irse.</p>`,
    chat: ['¿Cómo cerramos el día? Dame tu número más importante 📊'],
    type: 'choice',
    choices: [
      { id: 'a', label: 'El tamaño del embudo y qué tasa vas a atacar primero.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { jessica: 1 }, envia: ['jessica', 'Necesitamos ~1,700 postulaciones. Voy a atacar la asistencia a la evaluación: citación nueva y recordatorio la noche anterior. Si pasamos de 40 % a 55 %, necesitamos ~1,200.'],
          out: 'Jessica responde con tres llamas: «Eso es pensar como reclutadora».', kusi: ['celebra', '¡Número y plan!'] } },
      { id: 'b', label: 'Que el aviso ya está listo.',
        res: { q: 'aceptable', fx: { confianza: 1 }, envia: ['jessica', 'El aviso ya está listo para mañana 👍'],
          out: 'Jessica responde «bacán». Correcto, pero ella esperaba saber cómo llegarán a 120.', kusi: ['pensando', '¿Y el número?'] } },
    ],
    mirada: { ve: 'En selección masiva, quien sabe qué tasa del embudo mover tiene un plan. Quien solo cuenta tareas hechas tiene una lista.' },
  },
];
