# VÍVELO RH

**Laboratorio interactivo de Recursos Humanos** · *Vive el trabajo antes de elegirlo.*

VÍVELO RH es una plataforma para explorar las familias de Recursos Humanos. La persona vive jornadas simuladas con correos, WhatsApp, llamadas, documentos, giros, cálculos y revisiones. Tras cada decisión ve **cómo lo piensa y razona una profesional**. Coco, un ronsoco guía, la acompaña y se puede silenciar.

> Casos, personas y organizaciones: **ficticios** (se marcan siempre). La normativa peruana se verificó al **19 de octubre de 2026**. **No es asesoría legal.**

## Cómo ejecutarlo

No requiere instalación ni proceso de compilación: son módulos ES servidos de forma estática.

```bash
npm start            # servidor estático sin dependencias en http://localhost:8080
npm test             # pruebas unitarias (node:test): nómina, esquema de contenidos, migración
npm run test:e2e     # prueba de humo con Playwright (requiere el servidor encendido)
npm run video        # regenera assets/video/bienvenida.mp4 (Playwright + ffmpeg)
```

Requisitos:

- Node 18 o superior.
- Para la prueba de humo y el video: Playwright y Chromium. Si Chromium está en otra ruta, defina la variable `CHROME=/ruta/a/chrome`.
- Para el video, además, `ffmpeg`.

## Despliegue

Es un sitio 100 % estático. Opciones:

- **GitHub Pages**:
  1. Abra *Settings → Pages*.
  2. Elija *Deploy from a branch*, la rama y la carpeta `/ (root)`.
  3. El enrutado usa `#hash`, así que no necesita reglas de reescritura.
- **Netlify, Vercel o Cloudflare Pages**: publique la raíz del repositorio. No hay comando de compilación.
- **Cualquier servidor web** (Nginx, Apache, S3): copie la carpeta tal cual.

## Arquitectura

```
index.html            armazón: fuentes, estilos y src/main.js
styles/               tokens.css (paleta 60·30·10, tipografía, espacio, modo oscuro) · app.css (componentes y vistas)
                      · luxe.css (capa visual «Galería del Trabajo»; ver docs/DISENO.md)
docs/DISENO.md        dirección de arte, sistema de diseño, héroe y micro-interacciones
src/core/             util, bus de eventos, store versionado, router por hash, narrador, motion (micro-interacciones)
src/brand/            logo, íconos, Coco (10 estados de ánimo), retratos 2D, escenas SVG
src/engine/           payroll.js (única fuente de verdad de cálculos), nodes.js (motor de jornadas), profile.js (brújula)
src/content/          contenidos separados de la lógica: áreas, cargos, conceptos, sectores, fuentes,
                      retos, viaje, feriados, medios y sims/*.js (una jornada por archivo)
src/views/            una vista por sección (inicio, viaje, jornadas, mapa, cargos, academia,
                      taller, retos, sectores, brújula, medios, fuentes, perfil) + guía y armazón
tests/                unit/ (node:test) · e2e/smoke.mjs (todas las rutas, jornadas y talleres)
scripts/              serve.mjs · make-video.mjs + video/ (línea de tiempo y página animada)
legacy/               el artefacto original «Legajo Vivo», como referencia
```

### Cómo agregar una jornada

1. Cree `src/content/sims/<id>.js` con `kind`, `scene`, `org` (ficticia y marcada), `people` y `nodes`.
2. Cada nodo usa uno de estos tipos: `choice`, `pick`, `order`, `write`, `budget`, `calc` o `review`. Puede incluir:
   - `ask`: información que cuesta tiempo.
   - `twist`: un giro de la historia.
   - `guide`: la reacción de Coco.
   - `mind`: el razonamiento profesional, con los tipos `ok`, `risk`, `law` e `info`.
   - `if`: nodos condicionales.
3. Regístrela en `src/content/index.js`.
4. Ejecute `npm test`. Las pruebas validan el esquema y que la respuesta ideal se califique como «buena».

## Progreso y cuentas futuras

- La persona entra como invitada y solo se le pide su **nombre**.
- El progreso se guarda **solo en este navegador** (`localStorage`, clave `vivelo-rh:v2`). Se avisa de ello en pantalla.
- El progreso del formato anterior (`legajo-vivo:v1`) se migra automáticamente.
- En *Mis datos* se puede exportar e importar un respaldo JSON, y reiniciar por partes: una jornada, un taller, un reto, el viaje, el recorrido o todo.
- `store.useAdapter(adapter)` permite cambiar el almacenamiento por un backend con cuentas sin tocar las vistas. El adaptador implementa `{ name, load(), save(state) }`.
- No hay autenticación, pagos ni servicios externos.

## Audio y video: qué está listo y qué está pendiente

| Recurso | Estado |
|---|---|
| Video de bienvenida (`assets/video/bienvenida.mp4`, 0:38, subtítulos WebVTT en `bienvenida-subtitulos.txt`) | **Listo**. Animación generada, sin voz. |
| Narración de textos y cápsulas | **Voz sintética del navegador**, rotulada como tal, con transcripción. |
| Grabaciones humanas | **Pendientes**. Los guiones están en `src/content/media.js`. |

Nunca se presenta una voz sintética como humana. Para incorporar una grabación humana:

1. Ponga el archivo en `assets/audio/<id>.mp3`.
2. En `src/content/media.js`, cambie la entrada de ese audio a `status: "grabado"` y añada `file: "assets/audio/<id>.mp3"`. `src/main.js` lo registra al iniciar.

El reproductor usará ese archivo y lo marcará como «Grabación».

## Normativa usada (verificada al 19/10/2026)

- **RMV**: S/ 1 230 (D.S. 015-2026-TR). **Asignación familiar**: S/ 123.
- **Horas extras**: sobretasa de 25 % y 35 % sobre el valor hora = (básico + asignación familiar) ÷ 30 ÷ 8. Esto corrige el error de la boleta original.
- **Feriado trabajado sin descanso sustitutorio**: pago del día más una sobretasa del 100 %. 16 feriados en 2026.
- **CAS** (Ley 32563 y D.S. 142-2026-EF): incremento gradual de 10 % en 2026, 20 % en 2027, 30 % en 2028, 50 % en 2029 y 100 % desde 2030. Hay una demanda admitida contra el cronograma.
- **Bonificaciones en concursos públicos**: 15 % para personas con discapacidad (Ley 29973) y 10 % para licenciados de las FF.AA. (Ley 29248).

Las fuentes completas y la lista de correcciones están en la sección **Fuentes y método** de la app (`#fuentes`).

## Limitaciones conocidas

- El progreso no se sincroniza entre dispositivos (use el respaldo JSON).
- La narración depende de la Web Speech API del navegador. Si no está disponible, se muestra solo la transcripción.
- Los casos son pedagógicos. La interpretación profesional no reemplaza a un abogado laboralista.
