/* Fuentes y método · Mis datos (perfil de invitado, guía, respaldo y reinicios parciales). */
import { $, $$, esc, toast, fmtDate } from "../core/util.js";
import { S, save, reset, exportJSON, replace, validateBackup, adapterName } from "../core/store.js";
import { register, render, go } from "../core/router.js";
import { C, sim, tool, VERIFIED } from "../content/index.js";
import { icon } from "../brand/icons.js";
import { scene } from "../brand/scenes.js";
import { art, kusi3dImg } from "../brand/art.js";
import { guideModes } from "./guide.js";
import { syncTools, applyTheme } from "./shell.js";

register("fuentes", () => {
  const K = { norma: "Normas", guia: "Guías e informes institucionales o especializados", noticia: "Noticias de medios oficiales o especializados", caso: "Casos documentados" };
  return { section: "fuentes", docTitle: "Fuentes y método", html: `
  <section class="hero compact">${art("academia")}<div class="hero-in"><div class="copy"><span class="eyebrow">Fuentes y método</span><h1>Cómo distinguir lo real de lo simulado</h1><p class="muted">La autenticidad es el criterio central de VÍVELO RH. Aquí está qué es verificable y qué es construido.</p></div></div></section>
  <div class="grid g4">
    <section class="card stack"><span class="tag norm" style="justify-self:start">Normativa vigente</span><p class="small"><b>Normas, informes de SERVIR, guías institucionales.</b> Verificadas el ${VERIFIED}. Las normas cambian: antes de aplicar una regla en el trabajo, revisa su versión vigente en El Peruano.</p></section>
    <section class="card stack"><span class="tag doc" style="justify-self:start">Caso documentado</span><p class="small"><b>Casaciones y resoluciones</b> con enlace a su fuente. Son los únicos «casos reales» de la plataforma.</p></section>
    <section class="card stack"><span class="tag sim" style="justify-self:start">Simulación</span><p class="small"><b>Organizaciones, personas, diálogos, CV, legajos y cifras.</b> Ficticios, construidos a partir de prácticas profesionales habituales. No son testimonios ni se atribuyen a empresas reales. Las «grandes empresas» representan un tipo de organización, no a una compañía concreta.</p></section>
    <section class="card stack"><span class="tag ped" style="justify-self:start">Ejemplo pedagógico / criterio</span><p class="small"><b>«Cómo lo piensa y razona una profesional»</b> y los ejemplos de «hecho mal / hecho bien» son criterios de buena práctica, no la única respuesta posible ni una opinión legal.</p></section>
  </div>
  <div class="callout warn">${icon("scale")}<span><b>Límites.</b> Esta plataforma es formativa. No reemplaza la asesoría de un abogado laboralista ni las opiniones técnicas de SERVIR para un caso concreto. Las reglas pueden variar según el régimen laboral, el convenio colectivo y el tipo de entidad. El cronograma de gratificaciones CAS depende del D.S. 142-2026-EF, de la disponibilidad presupuestal de cada entidad y de una demanda en trámite contra su gradualidad.</span></div>
  <section class="card stack"><h2>Correcciones respecto de la versión original</h2><ul class="small" style="margin:0;padding-left:1.2rem;display:grid;gap:6px"><li><b>Boleta de pago (Taller):</b> las horas extras se calculaban sobre el básico. Ahora el valor hora usa la remuneración ordinaria (básico + asignación familiar). Horas extras: S/ 50.72 (antes 46.88); total de ingresos: S/ 1,673.72; ONP: S/ 217.58; neto: S/ 1,456.14; EsSalud del empleador: S/ 150.63.</li><li><b>CAS:</b> se actualizó el cronograma progresivo de gratificaciones y CTS (10% en 2026) y se advierte la demanda en trámite.</li><li><b>Feriados 2026:</b> se incorporaron los 16 feriados nacionales y las reglas de pago en una jornada nueva, la Academia, los Retos y el Taller.</li></ul></section>
  ${Object.keys(K).map(k => { const items = C.sources.filter(s => s.k === k); return items.length ? `<section class="stack"><h2>${K[k]}</h2><div class="grid g2">${items.map(s => `<div class="card plain" style="padding:14px 16px"><a href="${s.u}" target="_blank" rel="noopener"><b>${esc(s.t)}</b></a><p class="small muted">${esc(s.d)}</p></div>`).join("")}</div></section>` : ""; }).join("")}` };
});

register("perfil", () => {
  const st = S.state;
  const pers = adapterName() === "local";
  return { section: "perfil", docTitle: "Mis datos", html: `
  <section class="hero compact">${art("brujula")}<div class="hero-in"><div class="copy" style="color:#F4F0FF"><span class="eyebrow" style="color:#C7C0DD">Mis datos</span><h1>Tu fotocheck de invitado</h1><p style="color:#D9D3EE">Sin cuentas ni contraseñas. ${st.createdAt ? "Exploras VÍVELO RH desde el " + fmtDate(st.createdAt) + "." : ""}</p></div></div></section>
  <div class="callout ${pers ? "" : "warn"}">${icon("shield")}<span>${pers ? `Tu progreso se guarda <b>solo en este navegador y en este dispositivo</b>. No se envía a ningún servidor ni se sincroniza con otros dispositivos. Si borras los datos del navegador, se pierde: exporta un respaldo de vez en cuando.` : `Tu navegador bloquea el almacenamiento: el progreso <b>solo durará mientras esta pestaña esté abierta</b>. Exporta un respaldo antes de cerrarla.`}</span></div>
  <div class="grid g2">
    <section class="card stack"><h2>Cómo te llamamos</h2><form class="row" data-name><input type="text" id="pn" value="${esc(st.profile.name)}" maxlength="40" aria-label="Nombre" style="flex:1;min-width:180px"><button class="btn brand sm" type="submit">Guardar</button></form></section>
    <section class="card stack" data-guide-mode><h2>Kusi, tu guía</h2><div class="seg" role="group" aria-label="Modo de la guía">${guideModes.map(([v, n]) => `<button type="button" data-gm="${v}" aria-pressed="${st.profile.guide === v}">${n}</button>`).join("")}</div><p class="small muted">${esc((guideModes.find(g => g[0] === st.profile.guide) || guideModes[0])[2])}.</p><button type="button" class="btn ghost sm" data-tour style="justify-self:start">${icon("replay")}Ver otra vez el recorrido de bienvenida</button></section>
    <section class="card stack"><h2>Tema</h2><div class="seg" role="group" aria-label="Tema">${[["auto", "Automático"], ["light", "Claro"], ["dark", "Oscuro"]].map(([v, n]) => `<button type="button" data-th="${v}" aria-pressed="${(st.prefs.theme || "auto") === v}">${n}</button>`).join("")}</div></section>
    <section class="card stack"><h2>Respaldo</h2><p class="small muted">Descarga un archivo .json con todo tu progreso y cárgalo en otro navegador o dispositivo.</p><div class="row"><button type="button" class="btn sm" data-export>${icon("download")}Exportar respaldo</button><label class="btn ghost sm" style="cursor:pointer">${icon("upload")}Importar respaldo<input type="file" accept="application/json,.json" data-import hidden></label></div></section>
  </div>
  <section class="card stack"><h2>Reiniciar sin perder todo</h2><p class="small muted">Elige exactamente qué reiniciar. Nada se borra sin confirmación.</p>
    <div class="table-wrap"><table><thead><tr><th>Experiencia</th><th>Estado</th><th></th></tr></thead><tbody>
      ${C.sims.filter(s => st.runs[s.id] || st.active[s.id]).map(s => `<tr><td>${esc(s.title)}</td><td class="small">${st.active[s.id] ? "En curso" : ""}${st.runs[s.id] ? (st.runs[s.id].length + " informe(s)") : ""}</td><td><button type="button" class="btn ghost sm" data-r="sim:${s.id}">Reiniciar</button></td></tr>`).join("")}
      ${C.tools.filter(t => st.tools[t.id]).map(t => `<tr><td>Taller: ${esc(t.n)}</td><td class="small">Mejor ${st.tools[t.id].best}/100</td><td><button type="button" class="btn ghost sm" data-r="tool:${t.id}">Reiniciar</button></td></tr>`).join("")}
      <tr><td>Viaje guiado</td><td class="small">${st.journey.done.length} de ${C.journey.stations.length} estaciones</td><td><button type="button" class="btn ghost sm" data-r="journey">Reiniciar</button></td></tr>
      <tr><td>Áreas declaradas en la brújula</td><td class="small">${Object.keys(st.declared).length}</td><td><button type="button" class="btn ghost sm" data-r="declared">Borrar</button></td></tr>
    </tbody></table></div>
    <div data-confirm-box></div>
    <div class="row"><button type="button" class="btn ghost sm" data-r="all">${icon("trash")}Borrar todo mi progreso (conservar mi nombre)</button><button type="button" class="btn ghost sm" data-r="everything">Empezar de cero como otra persona</button></div></section>
  <section class="card stack"><h2>Preparado para cuentas en el futuro</h2><p class="small muted">La aplicación guarda el estado a través de un adaptador intercambiable (src/core/store.js). Para sincronizar entre dispositivos bastará con añadir un adaptador conectado a un servicio con cuentas de usuario; el formato de datos ya está versionado y el respaldo .json sirve como puente de migración. Hoy no hay autenticación, pagos ni servicios externos.</p></section>`,
  mount(root){
    $("[data-name]", root).addEventListener("submit", e => { e.preventDefault(); const v = $("#pn", root).value.trim().slice(0, 40); if (!v) return; S.state.profile.name = v; save(); syncTools(); toast("Nombre actualizado"); });
    $$("[data-gm]", root).forEach(b => b.addEventListener("click", () => { S.state.profile.guide = b.dataset.gm; save(); render(true); }));
    $("[data-tour]", root).addEventListener("click", () => { reset.tour(); go("#inicio"); });
    $$("[data-th]", root).forEach(b => b.addEventListener("click", () => { S.state.prefs.theme = b.dataset.th === "auto" ? undefined : b.dataset.th; save(); applyTheme(); syncTools(); render(true); }));
    $("[data-export]", root).addEventListener("click", () => {
      const blob = new Blob([exportJSON()], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "vivelo-rh-respaldo-" + new Date().toISOString().slice(0, 10) + ".json"; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      toast("Respaldo descargado");
    });
    $("[data-import]", root).addEventListener("change", e => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => { try { const o = JSON.parse(rd.result); if (!validateBackup(o)) throw 0; replace(o); syncTools(); toast("Respaldo importado"); render(true); } catch (err) { toast("Ese archivo no es un respaldo válido de VÍVELO RH"); } };
      rd.readAsText(f);
    });
    const box = $("[data-confirm-box]", root);
    $$("[data-r]", root).forEach(b => b.addEventListener("click", () => {
      const [k, id] = b.dataset.r.split(":");
      const what = { sim: "los informes y la bitácora de esa jornada", tool: "tu historial en esa herramienta", journey: "el avance del viaje", declared: "tus declaraciones de la brújula", all: "TODO tu progreso (se conserva tu nombre)", everything: "todo, incluido tu nombre" }[k];
      box.innerHTML = `<div class="callout warn">${icon("warn")}<span>Se borrará ${what}. ¿Continuar? <span class="row" style="margin-top:8px"><button type="button" class="btn sm" data-yes>Sí, borrar</button><button type="button" class="btn ghost sm" data-no>Cancelar</button></span></span></div>`;
      $("[data-yes]", box).addEventListener("click", () => { if (k === "sim") reset.sim(id); else if (k === "tool") reset.tool(id); else reset[k](); syncTools(); toast("Listo"); if (k === "everything") go("#inicio"); else render(true); });
      $("[data-no]", box).addEventListener("click", () => { box.innerHTML = ""; });
    }));
  } };
});
