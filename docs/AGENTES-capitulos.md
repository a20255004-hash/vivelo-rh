# Guía para escribir capítulos de VÍVELO RH

VÍVELO RH es una plataforma peruana en la que una persona vive **dos semanas de trabajo (10 días hábiles)** en un puesto de RR.HH.: 10 capítulos, uno por día, de lunes a viernes de la Semana 1 y la Semana 2, una sola historia, con WhatsApp, correo, llamadas y decisiones. Repositorio: `C:\Users\ASUS\GITHUB\vivelo-rh` (sitio estático, módulos ES).

## Calendario de 10 días (obligatorio)
- Capítulo n = día n: 1 «Semana 1, lunes», 2 martes, 3 miércoles, 4 jueves, 5 viernes, 6 «Semana 2, lunes», 7 martes, 8 miércoles, 9 jueves, 10 «Semana 2, viernes».
- **El final queda abierto.** El capítulo 10 («Semana 2, viernes») NO cierra la historia: deja un balance corto de las dos semanas, la pregunta «¿te ves en este puesto?» y al menos un gancho para la Semana 3 (un problema que se abre, un personaje nuevo que se anuncia, una herramienta o documento que llega el lunes). Lleva `CAP.siguiente = { n: 11, titulo: '<título del gancho>', dia: 'Semana 3, lunes' }`; el sitio mostrará «Este capítulo se está escribiendo». El bloque `capitulos` de la ficha tiene solo 10 entradas.
- En la ficha de tu puesto (`assets/puestos/grupo-*.js` o `assets/seleccion.js`) edita SOLO el bloque `capitulos` de tu puesto: 10 entradas `{ n, semana, dia, titulo, comp, resumen }` con los días de arriba, y cambia «un mes»/«mes» por «dos semanas» en la `sinopsis` de tu puesto. Ajusta los números de capítulo de las listas de competencias de tu puesto si cambian. No toques los bloques de otros puestos (otro agente puede estar editando el mismo archivo: usa reemplazos pequeños y exactos).
- En los capítulos ya escritos de tu puesto, corrige `CAP.dia`, `CAP.siguiente` y cualquier mención de día de la semana, de «mes» o de «Fin de mes» que ya no cuadre con el nuevo calendario.

## Antes de escribir, lee
1. La ficha de tu puesto en `assets/puestos/grupo-a.js` … `grupo-d.js` (o `assets/seleccion.js` para Analista de Selección): `PUESTO.capitulos` (título, día y resumen de cada capítulo), `PUESTO.sinopsis`, `PUESTO.escenario`, `PUESTO.ciudad` y `PERSONAS`.
2. Ejemplos de formato: `assets/cap/practicante-1.js`, `assets/cap/asistente-personal-1.js` y `assets/seleccion-cap2.js`.
3. Los capítulos que ya existan de tu puesto (por ejemplo `assets/cap/<id>-1.js`). Respeta sus personajes, sus `FUTURO` y sus flags.

## Qué entregar
- Un archivo por capítulo: `assets/cap/<idPuesto>-<n>.js`. Excepción: Analista de Selección usa `assets/seleccion-cap<n>.js`.
- Mismos exports que los ejemplos: `CAP`, `CARTERA`, `FUTURO`, `CHATS`, `WSP`, `CORREOS`, `QUIZ` (4-5 preguntas, 4 opciones, `ok` 0-3 y `por`) y `ESCENAS` (6 a 8 escenas).
- `CAP.titulo` y `CAP.dia` deben ser exactamente los de `PUESTO.capitulos[n-1]`. `CAP.siguiente = { n, titulo, dia }` apunta al capítulo siguiente; en el capítulo 10 anuncia el 11 (final abierto).
- Antes de terminar, valida cada archivo con `node scripts/validar-capitulo.mjs <idPuesto> <n>` hasta que diga `OK`.

## El motor (capitulo.html) en resumen
- Escena: `{ id, t:'HH:MM' (siempre creciente), ch:'presencial'|'documento'|'whatsapp'|'correo'|'llamada'|'sistema', who: id de PERSONAS o null, titulo, banner: imagen existente, lugar?, show:[medidores], body:(nombre, F) => HTML (F es un Set con las flags acumuladas del mes; usa F.has('flag') para variar el texto), type, ..., rules?:[[tipo, texto]], mirada:{ ve, visual?, normas?:[{ley, dice, practica}] } }`.
- Medidores válidos: `confianza, calidad, tiempo, cumplimiento, personas, etica`.
- Tipos de actividad (cópialos de los ejemplos): `choice` (con `dilema:true` o `cotidiano:true`), `ask`, `pick` (rows/cols/score/n), `flag` (doc + lines con `bad:'ley'|'bp'` y `why`), `calls`, `builder` (bloques), `secuencia` (items en orden correcto) y `compose` (slots; `enviaA` debe existir en CHATS).
- Resultado (`res`): `{ q:'buena'|'aceptable'|'riesgosa'|null, fx:{medidor:±n}, rel:{idPersona:±1}, flags:[...], cartera:{id:'texto'}, out, pro:{ok,risk,info}, kusi:[ánimo, frase], envia?:[chat, texto] o lista, responde?:'texto' (en escenas de correo) }`.
- Ánimos de Kusi: `celebra, feliz, animo, pensando, preocupado, triste, sorpresa, indignado, curioso`.
- Visuales de `mirada.visual`: `flujo{titulo,pasos,aqui?}`, `balanza{a:{t,items},b:{t,items}}`, `matriz{x,y,cuadrantes[4],items[[nombre,x,y]]}`, `linea{titulo,hitos[[a,b]]}`, `cambio{titulo,pares[[antes,después]]}`, `embudo{titulo,niveles[[nombre,n]]}`, `rango{titulo,min,max,banda[a,b],marcas[[n,v]]}`, `mensaje{titulo,txt}`.
- `WSP` y `CORREOS` admiten `si:'flag'` o `no:'flag'` para aparecer según lo que hizo la persona. Las flags se acumulan durante el mes.

## Lo más importante: que se viva en carne propia
- Cada capítulo debe parecerse a un día real de alguien en ese puesto en el Perú.
- **Herramientas reales:** el Excel con pestañas mal nombradas, el sistema de planillas que se cuelga a fin de mes, el T-Registro, la PLAME, el portal de empleos, el correo con copia a la gerencia, el grupo de WhatsApp del área.
- **Tiempos reales:** la hora de cierre, el almuerzo que se corta, la reunión que se alarga, el bus de regreso.
- **Interrupciones y tareas pequeñas:** una constancia que alguien pide «para ayer», la impresora que falla, una firma que falta, un trabajador que llega sin cita a la oficina.
- **El cuerpo y las emociones:** el cansancio, el café frío, la presión de un jefe, la satisfacción de resolver algo.
- **Detalles del lugar y la región:** clima, transporte, comida, modismos, costumbres de la ciudad donde ocurre la historia.

## Historia y personajes
- **Diversidad real de personajes:** edades (jóvenes, veteranos), géneros, orígenes (costa, sierra, selva, migrantes), niveles educativos, personas con discapacidad, madres y padres que cuidan a otros, gente que habla quechua o aimara cuando corresponde. Que nadie sea solo «el bueno» o «el malo»: el jefe duro también tiene razones; la persona amable también se equivoca.
- **Historia bien hilada:** lo que pasa en el capítulo N se nota en el N+1 (mensajes que responden a lo anterior, personajes que recuerdan lo que hiciste, problemas que crecen o se resuelven). Revisa los capítulos anteriores antes de escribir el siguiente.
- Un solo hilo durante los 10 capítulos, con consecuencias de decisiones anteriores (usa las flags de `FUTURO`).
- `who` y `rel` solo pueden usar ids de `PERSONAS`. Si un personaje tiene `desde: N`, no aparece antes del capítulo N.
- Puedes sumar personajes secundarios nuevos, con personalidades realistas y complejas (dudas, contradicciones, motivos propios). Aparecen en el texto y como chats de `CHATS` sin `who`, con color `c`. No los pongas en `who` ni en `rel`.
- En cada capítulo usa al menos 4 tipos de actividad distintos y no repitas la mecánica con la que abrió el capítulo anterior.
- Que los dilemas no tengan respuesta obvia. La opción correcta no siempre debe ser la más larga.

## Ritmo de trabajo (obligatorio)
- Escribe primero y guarda cada capítulo en disco apenas esté listo; valídalo y recién entonces pasa al siguiente. La sesión puede cortarse en cualquier momento y lo que no esté guardado se pierde.
- Investiga solo lo que el capítulo necesite (1 a 3 búsquedas por capítulo, sobre las normas que vas a citar). No hagas investigaciones largas antes de empezar a escribir.

## Normas y datos: nada inventado
- Cita solo normas que verifiques en fuentes oficiales (El Peruano, gob.pe, SUNAFIL, SUNAT, MTPE, SERVIR, Congreso) o en guías que las transcriben. Usa WebSearch o WebFetch.
- Al inicio de cada archivo, en un comentario, lista las normas citadas y sus URLs.
- RMV vigente: S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR).
- No inventes montos, porcentajes, números de casación ni plazos que no hayas comprobado. Si dudas, explica el principio sin la cifra.
- Empresas y personas son ficticias. Las ciudades, el sector y la normativa son reales.

## Estilo
- Español del Perú, cercano y profesional. Expresiones de Kusi: «¡Qué bacán!», «¡Qué divino!», «¡Dale!».
- Los términos del glosario empiezan con mayúscula cuando son un concepto (T-Registro, PLAME, CTS, Ley 29783…).
- Di «credencial», nunca «fotocheck». Usa poca cursiva.
- Textos breves: el `body` en 2 o 3 párrafos cortos, con una frase clave en `<mark class="clave">…</mark>`.

## Imágenes
- `CAP.foto` y cada `banner` deben existir. Usa las de `assets/foto/`, `assets/foto2/`, `assets/esc/` y `assets/3d/scenes/`, y varíalas entre escenas y capítulos.
- No agregues imágenes nuevas.

## Límites
- Edita SOLO los archivos de capítulo de tu puesto y el bloque de tu puesto en su ficha.
- No toques `capitulo.html`, `assets/cap/*` de otros puestos, los bloques de otros puestos en `assets/puestos/*` ni nada más.
- No hagas commit ni push.
- Al terminar, informa:
  - archivos creados;
  - flags nuevas que pasan al capítulo siguiente;
  - fuentes oficiales consultadas;
  - cualquier duda.
