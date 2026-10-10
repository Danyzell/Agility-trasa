/* AR na iPhonu: Safari neumí WebXR, ale umí AR Quick Look. Parkur se vyexportuje jako USDZ (bez psa a tečkované trasy)
   a iPhone ho sám položí na nalezenou zem. Na place (výchozí) ve skutečné velikosti se startem parkuru v počátku: iPhone položí
   počátek tam, kam míří telefon, takže stačí stát na startu (zmenšování prsty vypne aplikace v odkazu, allowsContentScaling=0).
   Na stůl ({model:true}) zmenšený 1 : 20 jako „Model na stůl“ na Androidu, se středem plochy v počátku.
   quickLookOK() → bool, quickLookScene(spec, o) → {scene, root, g, origin, k}, quickLookBlob(spec, o) → Promise<Blob> */
import * as THREE from 'three';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import { buildCourse } from './course.js';
import { TIERS } from './world.js';

export function quickLookOK() {
  try { const a = document.createElement('a'); return !!(a.relList && a.relList.supports && a.relList.supports('ar')); } catch (e) { return false; }
}

export function quickLookScene(spec, o) {
  o = o || {};
  const scene = new THREE.Scene(), root = new THREE.Group(), g = new THREE.Group(); scene.add(root); root.add(g);
  const C = buildCourse(g, spec, TIERS.low);
  g.remove(C.dog); if (C.hand) g.remove(C.hand);   /* psovod (Hoopers) má barvy ve vrcholech, ty USDZ neumí */
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
  /* počátek: na place start parkuru (iPhone ho položí tam, kam míří telefon), na stůl střed plochy */
  const origin = o.model || !C.start ? { x: spec.W / 2, z: spec.H / 2 } : { x: C.start.x, z: C.start.z }, k = o.model ? 1 / 20 : 1;
  g.position.set(-origin.x, 0, -origin.z); root.scale.setScalar(k);
  scene.updateMatrixWorld(true);
  return { scene, root, g, origin, k };
}

export function quickLookBlob(spec, o) {
  const { scene } = quickLookScene(spec, o);
  return new USDZExporter().parseAsync(scene, { quickLookCompatible: true, maxTextureSize: 512 })
    .then(buf => new Blob([buf], { type: 'model/vnd.usdz+zip' }));
}
