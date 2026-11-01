# Guía para escribir capítulos de VÍVELO RH

VÍVELO RH es una plataforma peruana en la que una persona vive un mes de trabajo en un puesto de RR.HH.: 9 capítulos, una sola historia, con WhatsApp, correo, llamadas y decisiones. Repositorio: `C:\Users\ASUS\GITHUB\vivelo-rh` (sitio estático, módulos ES).

## Antes de escribir, lee
1. La ficha de tu puesto en `assets/puestos/grupo-a.js` … `grupo-d.js` (o `assets/seleccion.js` para Analista de Selección): `PUESTO.capitulos` (título, día y resumen de cada capítulo), `PUESTO.sinopsis`, `PUESTO.escenario`, `PUESTO.ciudad` y `PERSONAS`.
2. Ejemplos de formato: `assets/cap/practicante-1.js`, `assets/cap/asistente-personal-1.js` y `assets/seleccion-cap2.js`.
3. Los capítulos que ya existan de tu puesto (por ejemplo `assets/cap/<id>-1.js`). Respeta sus personajes, sus `FUTURO` y sus flags.

## Qué entregar
- Un archivo por capítulo: `assets/cap/<idPuesto>-<n>.js`. Excepción: Analista de Selección usa `assets/seleccion-cap<n>.js`.
- Mismos exports que los ejemplos: `CAP`, `CARTERA`, `FUTURO`, `CHATS`, `WSP`, `CORREOS`, `QUIZ` (4-5 preguntas, 4 opciones, `ok` 0-3 y `por`) y `ESCENAS` (6 a 8 escenas).
- `CAP.titulo` y `CAP.dia` deben ser exactamente los de `PUESTO.capitulos[n-1]`. `CAP.siguiente = { n, titulo, dia }` apunta al capítulo siguiente; el capítulo 9 no lleva `siguiente`.
- El capítulo 9 es «Fin de mes»: cierre de la historia, evaluación del mes y la pregunta «¿te ves en este puesto?».
- Antes de terminar, valida cada archivo con `node scripts/validar-capitulo.mjs <idPuesto> <n>` hasta que diga `OK`.

## El motor (capitulo.html) en resumen
- Escena: `{ id, t:'HH:MM' (siempre creciente), ch:'presencial'|'documento'|'whatsapp'|'correo'|'llamada'|'sistema', who: id de PERSONAS o null, titulo, banner: imagen existente, lugar?, show:[medidores], body:(nombre, F) => HTML (F es un Set con las flags acumuladas del mes; usa F.has('flag') para variar el texto), type, ..., rules?:[[tipo, texto]], mirada:{ ve, visual?, normas?:[{ley, dice, practica}] } }`.
- Medidores válidos: `confianza, calidad, tiempo, cumplimiento, personas, etica`.
- Tipos de actividad (cópialos de los ejemplos): `choice` (con `dilema:true` o `cotidiano:true`), `ask`, `pick` (rows/cols/score/n), `flag` (doc + lines con `bad:'ley'|'bp'` y `why`), `calls`, `builder` (bloques), `secuencia` (items en orden correcto) y `compose` (slots; `enviaA` debe existir en CHATS).
- Resultado (`res`): `{ q:'buena'|'aceptable'|'riesgosa'|null, fx:{medidor:±n}, rel:{idPersona:±1}, flags:[...], cartera:{id:'texto'}, out, pro:{ok,risk,info}, kusi:[ánimo, frase], envia?:[chat, texto] o lista, responde?:'texto' (en escenas de correo) }`.
- Ánimos de Kusi: `celebra, feliz, animo, pensando, preocupado, triste, sorpresa, indignado, curioso`.
- Visuales de `mirada.visual`: `flujo{titulo,pasos,aqui?}`, `balanza{a:{t,items},b:{t,items}}`, `matriz{x,y,cuadrantes[4],items[[nombre,x,y]]}`, `linea{titulo,hitos[[a,b]]}`, `cambio{titulo,pares[[antes,después]]}`, `embudo{titulo,niveles[[nombre,n]]}`, `rango{titulo,min,max,banda[a,b],marcas[[n,v]]}`, `mensaje{titulo,txt}`.
- `WSP` y `CORREOS` admiten `si:'flag'` o `no:'flag'` para aparecer según lo que hizo la persona. Las flags se acumulan durante el mes.

## Historia y personajes
- Un solo hilo durante los 9 capítulos, con consecuencias de decisiones anteriores (usa las flags de `FUTURO`).
- `who` y `rel` solo pueden usar ids de `PERSONAS`. Si un personaje tiene `desde: N`, no aparece antes del capítulo N.
- Puedes sumar personajes secundarios nuevos, con personalidades realistas y complejas (dudas, contradicciones, motivos propios). Aparecen en el texto y como chats de `CHATS` sin `who`, con color `c`. No los pongas en `who` ni en `rel`.
- En cada capítulo usa al menos 4 tipos de actividad distintos y no repitas la mecánica con la que abrió el capítulo anterior.
- Que los dilemas no tengan respuesta obvia. La opción correcta no siempre debe ser la más larga.

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
- Edita SOLO los archivos de capítulo de tu puesto.
- No toques `assets/puestos/*`, `capitulo.html`, `assets/cap/*` de otros puestos ni nada más.
- No hagas commit ni push.
- Al terminar, informa:
  - archivos creados;
  - flags nuevas que pasan al capítulo siguiente;
  - fuentes oficiales consultadas;
  - cualquier duda.
