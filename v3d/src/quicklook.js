/* AR na iPhonu: Safari neumí WebXR, ale umí AR Quick Look. Parkur se vyexportuje jako USDZ (bez psa) a iPhone ho sám položí
   na nalezenou zem: počátek modelu tam, kam míří telefon, a osu −z modelu směrem od telefonu (model je čelem k divákovi).
   Na place (výchozí) ve skutečné velikosti se startem parkuru v počátku, natočený tak, aby překážka 1 byla od startu dál od
   telefonu: stačí stát kousek za startem čelem k překážce 1 a mířit na start (zmenšování prsty vypne aplikace v odkazu,
   allowsContentScaling=0). S {gps: {x, y, h, az, ahead}} se parkur položí podle polohy kolbiště: x, y = poloha telefonu
   v souřadnicích plánu, h = kurz kamery, az = kurz osy x plánu (oba ve stupních ze stejného severu), počátek je ahead metrů před
   telefonem. Na place bez trávy (zakrývala skutečnou zem), se sloupky v rozích a na startu. {foot: true} = jen půdorys překážek.
   Na stůl ({model:true}) zmenšený 1 : 20 jako „Model na stůl“ na Androidu, se středem plochy v počátku.
   quickLookOK() → bool, quickLookScene(spec, o) → {scene, root, g, origin, k, yaw}, quickLookBlob(spec, o) → Promise<Blob> */
import * as THREE from 'three';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { buildCourse } from './course.js';
import { TIERS } from './world.js';
import { arMath } from './ar.js';

export function quickLookOK() {
  try { const a = document.createElement('a'); return !!(a.relList && a.relList.supports && a.relList.supports('ar')); } catch (e) { return false; }
}

const FW = { x: 0, z: -1 };   /* směr od telefonu v souřadnicích modelu */

export function quickLookScene(spec, o) {
  o = o || {};
  const scene = new THREE.Scene(), root = new THREE.Group(), g = new THREE.Group(); scene.add(root); root.add(g);
  const C = buildCourse(g, spec, TIERS.low, { ar: !o.model });
  g.remove(C.dog); if (C.hand) g.remove(C.hand);   /* psovod (Hoopers) má barvy ve vrcholech, ty USDZ neumí */
  /* tráva ve skutečné velikosti zakrývala skutečnou zem (video od uživatele z UK); bílé lajny a sloupky zůstávají */
  if (!o.model && C.turf.parent) C.turf.parent.remove(C.turf);
  if (o.foot) { C.foot(true); C.obstacles.forEach(q => q.parent && q.parent.remove(q)); }
  /* materiály na standardní; instancované tečky trasy (USDZ je neumí) sloučit do jedné sítě */
  const conv = m => m.isMeshStandardMaterial ? m : new THREE.MeshStandardMaterial({ color: m.color ? m.color.clone() : 0xffffff, map: m.map || null, transparent: !!m.transparent, opacity: m.opacity == null ? 1 : m.opacity, roughness: .8, side: m.side });
  const inst = [];
  g.traverse(q => {
    if (q.isInstancedMesh) { inst.push(q); return; }
    if (q.isMesh) q.material = Array.isArray(q.material) ? q.material.map(conv) : conv(q.material);
  });
  /* USDZ nezná oboustranné materiály (látka tunelu, síť plůtku): rub jako druhá síť s obrácenými trojúhelníky a normálami,
     jinak je tunel zevnitř a z konců průhledný */
  const two = [];
  g.traverse(q => { if (q.isMesh && !q.isInstancedMesh && q.material && !Array.isArray(q.material) && q.material.side === THREE.DoubleSide) two.push(q); });
  two.forEach(q => {
    const b = q.geometry.index ? q.geometry.toNonIndexed() : q.geometry.clone(), pa = b.attributes.position, na = b.attributes.normal, ua = b.attributes.uv;
    for (let i = 0; i < pa.count; i += 3) [pa, na, ua].forEach(a => { if (!a) return; for (let c = 0; c < a.itemSize; c++) { const t = a.getComponent(i + 1, c); a.setComponent(i + 1, c, a.getComponent(i + 2, c)); a.setComponent(i + 2, c, t); } });
    if (na) for (let i = 0; i < na.count; i++) na.setXYZ(i, -na.getX(i), -na.getY(i), -na.getZ(i));
    q.material = q.material.clone(); q.material.side = THREE.FrontSide;
    const r = new THREE.Mesh(b, q.material); r.name = 'rub'; r.position.copy(q.position); r.quaternion.copy(q.quaternion); r.scale.copy(q.scale); q.parent.add(r);
  });
  inst.forEach(q => {
    const gs = [], m = new THREE.Matrix4();
    for (let i = 0; i < q.count; i++) { q.getMatrixAt(i, m); gs.push(q.geometry.clone().applyMatrix4(m)); }
    if (gs.length) { const d = new THREE.Mesh(mergeGeometries(gs), conv(q.material)); d.position.copy(q.position); d.quaternion.copy(q.quaternion); d.scale.copy(q.scale); q.parent.add(d); gs.forEach(x => x.dispose()); }
    q.parent.remove(q);
  });
  /* Quick Look staví na nalezenou zem nejnižší bod modelu, ne rovinu y = 0: konec desky houpačky (−5 cm) a nožky cedulek pod zemí
     by nad skutečnou zem zvedly celý parkur i s čarami; zvedne se jen to, co pod zem leze */
  g.updateMatrixWorld(true);
  g.children.forEach(q => { const b = new THREE.Box3().setFromObject(q, true); if (b.min.y < 0) q.position.y -= b.min.y; });
  let origin, yaw = 0, k = 1;
  if (o.model) { origin = { x: spec.W / 2, z: spec.H / 2 }; k = 1 / 20; }
  else if (o.gps) {
    /* podle GPS: počátek ahead metrů před telefonem, osa x plánu na kurzu az */
    const a = (o.gps.h - o.gps.az) * Math.PI / 180, ah = o.gps.ahead == null ? 2 : o.gps.ahead;
    origin = { x: o.gps.x + ah * Math.cos(a), z: o.gps.y + ah * Math.sin(a) }; yaw = arMath.azYaw(FW, o.gps.az, o.gps.h);
  } else {
    /* od startu: překážka 1 od startu směrem od telefonu (bez ní střed plochy) */
    origin = { x: C.start.x, z: C.start.z };
    const o1 = (spec.obs || []).find(q => q.nums && q.nums.indexOf(1) >= 0), v = o1 ? { x: o1.x - origin.x, z: o1.y - origin.z } : null;
    yaw = arMath.awayYaw(FW, v && Math.hypot(v.x, v.z) >= 1 ? v : { x: spec.W / 2 - origin.x, z: spec.H / 2 - origin.z });
  }
  g.position.set(-origin.x, 0, -origin.z); root.rotation.y = yaw; root.scale.setScalar(k);
  scene.updateMatrixWorld(true);
  return { scene, root, g, origin, k, yaw };
}

export function quickLookBlob(spec, o) {
  const { scene } = quickLookScene(spec, o);
  return new USDZExporter().parseAsync(scene, { quickLookCompatible: true, maxTextureSize: 512 })
    .then(buf => new Blob([buf], { type: 'model/vnd.usdz+zip' }));
}
