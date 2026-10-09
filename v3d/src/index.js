/* Vstup balíčku v3d.js: 3D animace techniky pro záložku Videa.
   import('./v3d/v3d.js').then(m => m.mount(canvas, 'jump', {quality, D})) */
import { register, mount, hasScene } from './engine.js';
import { OBSTACLES } from './scenes-obstacles.js';
import { HANDLING } from './scenes-handling.js';

register(OBSTACLES);
register(HANDLING || {});
export { mount, hasScene };
export { mountCourse } from './course.js';
export { arSupported, startAR, arMath } from './ar.js';
export { quickLookOK, quickLookBlob } from './quicklook.js';
