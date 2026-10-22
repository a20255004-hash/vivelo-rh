/* Compatibilidad: el guion de la bienvenida ahora vive en videos/bienvenida.js. */
import video from "./videos/bienvenida.js";
import { vtt as toVtt } from "./vtt.js";
export const DURATION = video.duration;
export const SCENES = video.scenes;
export const vtt = () => toVtt(video);
