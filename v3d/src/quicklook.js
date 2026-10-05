/* AR na iPhonu: Safari neumí WebXR, ale umí AR Quick Look. Parkur se vyexportuje jako USDZ (bez psa a tečkované trasy)
   a iPhone ho sám položí na nalezenou zem ve skutečné velikosti (prsty jde zmenšit, otočit a posunout).
   quickLookOK() → bool, quickLookBlob(spec) → Promise<Blob> */
import * as THREE from 'three';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import { buildCourse } from './course.js';
import { TIERS } from './world.js';

export function quickLookOK() {
  try { const a = document.createElement('a'); return !!(a.relList && a.relList.supports && a.relList.supports('ar')); } catch (e) { return false; }
}

export function quickLookBlob(spec) {
  const scene = new THREE.Scene(), g = new THREE.Group(); scene.add(g);
  const C = buildCourse(g, spec, TIERS.low);
  g.remove(C.dog);
  /* instancované sítě (tečky trasy) USDZ neumí, ostatní materiály převést na standardní */
  const drop = [];
  g.traverse(o => {
    if (o.isInstancedMesh) { drop.push(o); return; }
    if (!o.isMesh) return;
    const conv = m => {
      if (m.isMeshStandardMaterial) return m;
      const n = new THREE.MeshStandardMaterial({ color: m.color ? m.color.clone() : 0xffffff, map: m.map || null, transparent: !!m.transparent, opacity: m.opacity == null ? 1 : m.opacity, roughness: .8, side: m.side });
      return n;
    };
    o.material = Array.isArray(o.material) ? o.material.map(conv) : conv(o.material);
  });
  drop.forEach(o => o.parent && o.parent.remove(o));
  /* střed plochy do počátku: iPhone položí parkur doprostřed před telefon */
  g.position.set(-spec.W / 2, 0, -spec.H / 2);
  scene.updateMatrixWorld(true);
  return new USDZExporter().parseAsync(scene, { quickLookCompatible: true, maxTextureSize: 512 })
    .then(buf => new Blob([buf], { type: 'model/vnd.usdz+zip' }));
}
