/* Subtítulos WebVTT a partir del guion de un video (scenes[].sub o scenes[].subs = [[t0, t1, texto]]). */
const ts = s => { const m = Math.floor(s / 60), r = (s % 60).toFixed(3).padStart(6, "0"); return `00:${String(m).padStart(2, "0")}:${r}`; };
export const cues = video => video.scenes.flatMap(s => s.subs ? s.subs : [[s.t0, s.t1, s.sub]]).filter(c => c[2]);
export const vtt = video => "WEBVTT\n\n" + cues(video).map(([a, b, t], i) => `${i + 1}\n${ts(a + .2)} --> ${ts(b - .1)}\n${t}\n`).join("\n");
