var Yd=Object.defineProperty;var Zd=(i,t)=>{for(var e in t)Yd(i,e,{get:t[e],enumerable:!0})};var su=0,nc=1,ru=2;var Oi=1,au=2,As=3,Gn=0,Ne=1,qe=2,Vn=0,Rs=1,ic=2,sc=3,rc=4,ou=5;var zi=100,lu=101,cu=102,hu=103,uu=104,du=200,fu=201,pu=202,mu=203,ac=204,oc=205,gu=206,_u=207,xu=208,yu=209,vu=210,Mu=211,Su=212,bu=213,Eu=214,Aa=0,Ra=1,Ca=2,ps=3,Ia=4,Pa=5,La=6,Da=7,mo=0,Tu=1,wu=2,Rn=0,lc=1,cc=2,hc=3,Lr=4,uc=5,dc=6,fc=7;var pc=300,Mi=301,Hi=302,go=303,_o=304,Dr=306,Fn=1e3,Un=1001,Na=1002,ze=1003,Au=1004;var Nr=1005;var He=1006,xo=1007;var Si=1008;var sn=1009,mc=1010,gc=1011,Cs=1012,yo=1013,Cn=1014,gn=1015,In=1016,vo=1017,Mo=1018,Is=1020,_c=35902,xc=35899,yc=1021,vc=1022,_n=1023,Bn=1026,bi=1027,So=1028,bo=1029,Ei=1030,Eo=1031;var To=1033,Ur=33776,Fr=33777,Br=33778,Or=33779,wo=35840,Ao=35841,Ro=35842,Co=35843,Io=36196,Po=37492,Lo=37496,Do=37488,No=37489,zr=37490,Uo=37491,Fo=37808,Bo=37809,Oo=37810,zo=37811,Ho=37812,Go=37813,Vo=37814,ko=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Zo=37820,Jo=37821,Ko=36492,$o=36494,Qo=36495,jo=36283,tl=36284,Hr=36285,el=36286;var ir=2300,Ua=2301,Ta=2302,Zl=2303,Jl=2400,Kl=2401,$l=2402;var Ru=3200;var Gr=0,Cu=1,ni="",Ie="srgb",sr="srgb-linear",rr="linear",he="srgb";var wa=7680;var Iu=519,Pu=512,Lu=513,Du=514,nl=515,Nu=516,Uu=517,il=518,Fu=519,Mc=35044,sl=35048;var Sc="300 es",An=2e3,ms=2001;function Jd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){let i=ar("canvas");return i.style.display="block",i}var bh={},gs=null;function or(...i){let t="THREE."+i.shift();gs?gs("log",t,...i):console.log(t,...i)}function Ou(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Ou(i);let t="THREE."+i.shift();if(gs)gs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=Ou(i);let t="THREE."+i.shift();if(gs)gs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Li(...i){let t=i.join(" ");t in bh||(bh[t]=!0,Bt(...i))}function zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Hu={[Aa]:Ra,[Ca]:La,[Ia]:Da,[ps]:Pa,[Ra]:Aa,[La]:Ca,[Da]:Ia,[Pa]:ps},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=1234567,js=Math.PI/180,_s=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function bc(i,t){return(i%t+t)%t}function $d(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qd(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function jd(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function tf(i,t=1){return t-Math.abs(bc(i,t*2)-t)}function ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rf(i,t){return i+Math.random()*(t-i)}function af(i){return i*(.5-Math.random())}function of(i){i!==void 0&&(Eh=i);let t=Eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lf(i){return i*js}function cf(i){return i*_s}function hf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function df(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ff(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ec={DEG2RAD:js,RAD2DEG:_s,generateUUID:Qn,clamp:Jt,euclideanModulo:bc,mapLinear:$d,inverseLerp:Qd,lerp:tr,damp:jd,pingpong:tf,smoothstep:ef,smootherstep:nf,randInt:sf,randFloat:rf,randFloatSpread:af,seededRandom:of,degToRad:lf,radToDeg:cf,isPowerOfTwo:hf,ceilPowerOfTwo:uf,floorPowerOfTwo:df,setQuaternionFromProperEuler:ff,normalize:fe,denormalize:wn},Ic=class Ic{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ic.prototype.isVector2=!0;var Mt=Ic,Xe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*v;g<0&&(u=-u,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pc=class Pc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sl.copy(this).projectOnVector(t),this.sub(Sl)}reflect(t){return this.sub(Sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pc.prototype.isVector3=!0;var P=Pc,Sl=new P,Th=new Xe,Lc=class Lc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],M=s[1],w=s[4],y=s[7],b=s[2],E=s[5],A=s[8];return r[0]=a*v+o*M+l*b,r[3]=a*g+o*w+l*E,r[6]=a*p+o*y+l*A,r[1]=c*v+h*M+d*b,r[4]=c*g+h*w+d*E,r[7]=c*p+h*y+d*A,r[2]=u*v+f*M+m*b,r[5]=u*g+f*w+m*E,r[8]=u*p+f*y+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bl.makeScale(t,e)),this}rotate(t){return Li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bl.makeRotation(-t)),this}translate(t,e){return Li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lc.prototype.isMatrix3=!0;var Gt=Lc,bl=new Gt,wh=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){let i={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sr]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:he,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var Qt=pf();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=ar("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mf=0,xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(El(s[a].image)):r.push(El(s[a]))}else r=El(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function El(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var gf=0,Tl=new P,$e=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Un,s=Un,r=He,a=Si,o=_n,l=sn,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Qn(),this.name="",this.source=new xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fn:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fn:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=pc;$e.DEFAULT_ANISOTROPY=1;var Dc=class Dc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(f+1)/2,b=(p+1)/2,E=(h+u)/4,A=(d+v)/4,_=(m+g)/4;return w>y&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=A/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dc.prototype.isVector4=!0;var be=Dc,Ba=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new $e(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lr=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var po=class po{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,v,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new po().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,v=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_f,t,xf)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ci.crossVectors(n,on),ci.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ci.crossVectors(n,on)),ci.normalize(),Qr.crossVectors(on,ci),s[0]=ci.x,s[4]=Qr.x,s[8]=on.x,s[1]=ci.y,s[5]=Qr.y,s[9]=on.y,s[2]=ci.z,s[6]=Qr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],w=n[7],y=n[11],b=n[15],E=s[0],A=s[4],_=s[8],T=s[12],C=s[1],I=s[5],L=s[9],G=s[13],D=s[2],k=s[6],W=s[10],z=s[14],$=s[3],N=s[7],H=s[11],X=s[15];return r[0]=a*E+o*C+l*D+c*$,r[4]=a*A+o*I+l*k+c*N,r[8]=a*_+o*L+l*W+c*H,r[12]=a*T+o*G+l*z+c*X,r[1]=h*E+d*C+u*D+f*$,r[5]=h*A+d*I+u*k+f*N,r[9]=h*_+d*L+u*W+f*H,r[13]=h*T+d*G+u*z+f*X,r[2]=m*E+v*C+g*D+p*$,r[6]=m*A+v*I+g*k+p*N,r[10]=m*_+v*L+g*W+p*H,r[14]=m*T+v*G+g*z+p*X,r[3]=M*E+w*C+y*D+b*$,r[7]=M*A+w*I+y*k+b*N,r[11]=M*_+w*L+y*W+b*H,r[15]=M*T+w*G+y*z+b*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15],M=l*f-c*u,w=o*f-c*d,y=o*u-l*d,b=a*f-c*h,E=a*u-l*h,A=a*d-o*h;return e*(v*M-g*w+p*y)-n*(m*M-g*b+p*E)+s*(m*w-v*b+p*A)-r*(m*y-v*E+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],M=e*o-n*a,w=e*l-s*a,y=e*c-r*a,b=n*l-s*o,E=n*c-r*o,A=s*c-r*l,_=h*v-d*m,T=h*g-u*m,C=h*p-f*m,I=d*g-u*v,L=d*p-f*v,G=u*p-f*g,D=M*G-w*L+y*I+b*C-E*T+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return t[0]=(o*G-l*L+c*I)*k,t[1]=(s*L-n*G-r*I)*k,t[2]=(v*A-g*E+p*b)*k,t[3]=(u*E-d*A-f*b)*k,t[4]=(l*C-a*G-c*T)*k,t[5]=(e*G-s*C+r*T)*k,t[6]=(g*y-m*A-p*w)*k,t[7]=(h*A-u*y+f*w)*k,t[8]=(a*L-o*C+c*_)*k,t[9]=(n*C-e*L-r*_)*k,t[10]=(m*E-v*y+p*M)*k,t[11]=(d*y-h*E-f*M)*k,t[12]=(o*T-a*I-l*_)*k,t[13]=(e*I-n*T+s*_)*k,t[14]=(v*w-m*b-g*M)*k,t[15]=(h*b-d*w+u*M)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,v=a*h,g=a*d,p=o*d,M=l*c,w=l*h,y=l*d,b=n.x,E=n.y,A=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+y)*b,s[2]=(m-w)*b,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+p))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(m+w)*A,s[9]=(g-M)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),l=Ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);let c=1/a,h=1/o,d=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=An,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===An)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ms)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===An)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===ms)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};po.prototype.isMatrix4=!0;var ne=po,Ki=new P,Sn=new ne,_f=new P(0,0,0),xf=new P(1,1,1),ci=new P,Qr=new P,on=new P,Rh=new ne,Ch=new Xe,nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yf=0,Ih=new P,$i=new Xe,qn=new ne,jr=new P,ks=new P,vf=new P,Mf=new Xe,Ph=new P(1,0,0),Lh=new P(0,1,0),Dh=new P(0,0,1),Nh={type:"added"},Sf={type:"removed"},Qi={type:"childadded",child:null},wl={type:"childremoved",child:null},Ee=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new nn,n=new Xe,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Gt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ks,jr,this.up):qn.lookAt(jr,ks,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(qn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),wl.child=t,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},bf={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=bc(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Al(a,r,t+1/3),this.g=Al(a,r,t),this.b=Al(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Qt.workingToColorSpace(ke.copy(this),t),Math.round(Jt(ke.r*255,0,255))*65536+Math.round(Jt(ke.g*255,0,255))*256+Math.round(Jt(ke.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ie){Qt.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(ta);let n=tr(hi.h,ta.h,e),s=tr(hi.s,ta.s,e),r=tr(hi.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Ot;Ot.NAMES=Gu;var hr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bn=new P,Yn=new P,Rl=new P,Zn=new P,ji=new P,ts=new P,Uh=new P,Cl=new P,Il=new P,Pl=new P,Ll=new be,Dl=new be,Nl=new be,$n=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Yn.subVectors(n,e),Rl.subVectors(t,e);let a=bn.dot(bn),o=bn.dot(Yn),l=bn.dot(Rl),c=Yn.dot(Yn),h=Yn.dot(Rl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ll.setScalar(0),Dl.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(t,e),Dl.fromBufferAttribute(t,n),Nl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ll,r.x),a.addScaledVector(Dl,r.y),a.addScaledVector(Nl,r.z),a}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Yn.subVectors(t,e),bn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,n),ts.subVectors(r,n),Cl.subVectors(t,n);let l=ji.dot(Cl),c=ts.dot(Cl);if(l<=0&&c<=0)return e.copy(n);Il.subVectors(t,s);let h=ji.dot(Il),d=ts.dot(Il);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);Pl.subVectors(t,r);let f=ji.dot(Pl),m=ts.dot(Pl);if(m>=0&&f<=m)return e.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ts,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Uh.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Uh,o);let p=1/(g+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(ji,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),na.subVectors(this.max,Ws),es.subVectors(t.a,Ws),ns.subVectors(t.b,Ws),is.subVectors(t.c,Ws),ui.subVectors(ns,es),di.subVectors(is,ns),Ri.subVectors(es,is);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ri.z,Ri.y,ui.z,0,-ui.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!Ul(e,es,ns,is,na)||(e=[1,0,0,0,1,0,0,0,1],!Ul(e,es,ns,is,na))?!1:(ia.crossVectors(ui,di),e=[ia.x,ia.y,ia.z],Ul(e,es,ns,is,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,ea=new cn,es=new P,ns=new P,is=new P,ui=new P,di=new P,Ri=new P,Ws=new P,na=new P,ia=new P,Ci=new P;function Ul(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ce=new P,sa=new Mt,Ef=0,ae=class extends On{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ef++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fr=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tf=new cn,Xs=new P,Fl=new P,zn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Fl)),this.expandByPoint(Xs.copy(t.center).sub(Fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wf=0,fn=new ne,Bl=new Ee,ss=new P,ln=new cn,qs=new cn,Oe=new P,se=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jd(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Bl.lookAt(t),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(ln.min,qs.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,qs.max),ln.expandByPoint(Oe)):(ln.expandByPoint(qs.min),ln.expandByPoint(qs.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),Oe.add(ss)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,d=new P,u=new Mt,f=new Mt,m=new Mt,v=new P,g=new P;function p(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[_].add(v),o[T].add(v),o[C].add(v),l[_].add(g),l[T].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,T=M.length;_<T;++_){let C=M[_],I=C.start,L=C.count;for(let G=I,D=I+L;G<D;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let w=new P,y=new P,b=new P,E=new P;function A(_){b.fromBufferAttribute(s,_),E.copy(b);let T=o[_];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(E,T);let I=y.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,I)}for(let _=0,T=M.length;_<T;++_){let C=M[_],I=C.start,L=C.count;for(let G=I,D=I+L;G<D;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new ae(u,h,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ke=new P,vs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ol=new P,Af=new P,Rf=new Gt,Tn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ol.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ol),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rf.getNormalMatrix(t),s=this.coplanarPoint(Ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cf=0,pn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Rs,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pi=class extends pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rs,Ys=new P,as=new P,os=new P,ls=new Mt,Zs=new Mt,Vu=new ne,ra=new P,Js=new P,aa=new P,Fh=new Mt,zl=new Mt,Bh=new Mt,Di=class extends Ee{constructor(t=new pi){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pr(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new vs(n,3,0,!1)),rs.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=rs,this.material=t,this.center=new Mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Vu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;oa(ra.set(-.5,-.5,0),os,a,as,s,r),oa(Js.set(.5,-.5,0),os,a,as,s,r),oa(aa.set(.5,.5,0),os,a,as,s,r),Fh.set(0,0),zl.set(1,0),Bh.set(1,1);let o=t.ray.intersectTriangle(ra,Js,aa,!1,Ys);if(o===null&&(oa(Js.set(-.5,.5,0),os,a,as,s,r),zl.set(0,1),o=t.ray.intersectTriangle(ra,aa,Js,!1,Ys),o===null))return;let l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:$n.getInterpolation(Ys,ra,Js,aa,Fh,zl,Bh,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function oa(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zs.x=r*ls.x-s*ls.y,Zs.y=s*ls.x+r*ls.y):Zs.copy(ls),i.copy(t),i.x+=Zs.x,i.y+=Zs.y,i.applyMatrix4(Vu)}var Kn=new P,Hl=new P,la=new P,ca=new P,Ms=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hl.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),ca.copy(this.origin).sub(Hl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(la),o=ca.dot(this.direction),l=-ca.dot(la),c=ca.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hl).addScaledVector(la,u),f}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=n.x-a.x,M=n.y-a.y,w=n.z-a.z,y=Math.abs(l),b=Math.abs(c),E=Math.abs(h),A,_,T,C,I,L,G,D,k,W,z,$;if(y>=b&&y>=E?(T=l,L=d,k=m,$=p,l>=0?(A=c,_=h,C=u,I=f,G=v,D=g,W=M,z=w):(A=h,_=c,C=f,I=u,G=g,D=v,W=w,z=M)):b>=E?(T=c,L=u,k=v,$=M,c>=0?(A=h,_=l,C=f,I=d,G=g,D=m,W=w,z=p):(A=l,_=h,C=d,I=f,G=m,D=g,W=p,z=w)):(T=h,L=f,k=g,$=w,h>=0?(A=l,_=c,C=d,I=u,G=m,D=v,W=p,z=M):(A=c,_=l,C=u,I=d,G=v,D=m,W=M,z=p)),T===0)return null;let N=A/T,H=_/T,X=1/T,rt=C-N*L,at=I-H*L,Dt=G-N*k,At=D-H*k,ot=W-N*$,Z=z-H*$,O=ot*At-Z*Dt,nt=rt*Z-at*ot,ct=Dt*at-At*rt;if(s){if(O<0||nt<0||ct<0)return null}else if((O<0||nt<0||ct<0)&&(O>0||nt>0||ct>0))return null;let st=O+nt+ct;if(st===0)return null;let mt=X*(O*L+nt*k+ct*$);return(st>0?mt<0:mt>0)?null:this.at(mt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ni=class extends pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Oh=new ne,Ii=new Ms,ha=new zn,zh=new P,ua=new P,da=new P,fa=new P,Gl=new P,pa=new P,Hh=new P,ma=new P,St=class extends Ee{constructor(t=new se,e=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Gl.fromBufferAttribute(d,t),a?pa.addScaledVector(Gl,h):pa.addScaledVector(Gl.sub(e),h))}e.add(pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(ha.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ha,zh)===null||Ii.origin.distanceToSquared(zh)>(t.far-t.near)**2))&&(Oh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,b=w;y<b;y+=3){let E=o.getX(y),A=o.getX(y+1),_=o.getX(y+2);s=ga(this,p,t,n,c,h,d,E,A,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let M=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);s=ga(this,a,t,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,b=w;y<b;y+=3){let E=y,A=y+1,_=y+2;s=ga(this,p,t,n,c,h,d,E,A,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let M=g,w=g+1,y=g+2;s=ga(this,a,t,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function If(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Gn,o),l===null)return null;ma.copy(o),ma.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ma);return c<e.near||c>e.far?null:{distance:c,point:ma.clone(),object:i}}function ga(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ua),i.getVertexPosition(l,da),i.getVertexPosition(c,fa);let h=If(i,t,e,n,ua,da,fa,Hh);if(h){let d=new P;$n.getBarycoord(Hh,ua,da,fa,d),s&&(h.uv=$n.getInterpolatedAttribute(s,o,l,c,d,new Mt)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,l,c,d,new Mt)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};$n.getNormal(ua,da,fa,u.normal),h.face=u,h.barycoord=d}return h}var mr=class extends $e{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ze,h=ze,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ss=class extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new ne,Gh=new ne,_a=[],Vh=new cn,Pf=new ne,Ks=new St,$s=new zn,mi=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Vh.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),$s.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),Gh.multiplyMatrices(n,cs),Ks.matrixWorld=Gh,Ks.raycast(t,_a);for(let a=0,o=_a.length;a<o;a++){let l=_a[a];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mr(new Float32Array(s*this.count),s,this.count,So,gn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pi=new zn,Lf=new Mt(.5,.5),xa=new P,bs=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],w=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-m,b-M).normalize(),s[1].setComponents(c+a,f+h,p+m,b+M).normalize(),s[2].setComponents(c+o,f+d,p+v,b+w).normalize(),s[3].setComponents(c-o,f-d,p-v,b-w).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,p-g,b-y).normalize();else if(s[4].setComponents(c-l,f-u,p-g,b-y).normalize(),e===An)s[5].setComponents(c+l,f+u,p+g,b+y).normalize();else if(e===ms)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=Lf.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ui=class extends pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},za=new P,Ha=new P,kh=new ne,Qs=new Ms,ya=new zn,Vl=new P,Wh=new P,Es=class extends Ee{constructor(t=new se,e=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)za.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=za.distanceTo(Ha);t.setAttribute("lineDistance",new Vt(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;kh.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=h.getX(v),M=h.getX(v+1),w=va(this,t,Qs,l,p,M,v);w&&e.push(w)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=va(this,t,Qs,l,v,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=va(this,t,Qs,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=va(this,t,Qs,l,m-1,f,m-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function va(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(za.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),e.distanceSqToSegment(za,Ha,Vl,Wh)>n)return;Vl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Vl);if(!(c<t.near||c>t.far))return{distance:c,point:Wh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Xh=new P,qh=new P,gr=class extends Es{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xh.fromBufferAttribute(e,s),qh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xh.distanceTo(qh);t.setAttribute("lineDistance",new Vt(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ga=class extends pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yh=new ne,Ql=new Ms,Ma=new zn,Sa=new P,_r=class extends Ee{constructor(t=new se,e=new Ga){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;Yh.copy(s).invert(),Ql.copy(t.ray).applyMatrix4(Yh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,v=f;m<v;m++){let g=c.getX(m);Sa.fromBufferAttribute(d,g),Zh(Sa,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,v=f;m<v;m++)Sa.fromBufferAttribute(d,m),Zh(Sa,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zh(i,t,e,n,s,r,a){let o=Ql.distanceSqToPoint(i);if(o<e){let l=new P;Ql.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var xr=class extends $e{constructor(t=[],e=Mi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ti=class extends $e{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends $e{constructor(t,e,n=Cn,s,r,a,o=ze,l=ze,c,h=Bn,d=1){if(h!==Bn&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Va=class extends gi{constructor(t,e=Cn,n=Mi,s,r,a=ze,o=ze,l,c=Bn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yr=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},te=class i extends se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2));function m(v,g,p,M,w,y,b,E,A,_,T){let C=y/A,I=b/_,L=y/2,G=b/2,D=E/2,k=A+1,W=_+1,z=0,$=0,N=new P;for(let H=0;H<W;H++){let X=H*I-G;for(let rt=0;rt<k;rt++){let at=rt*C-L;N[v]=at*M,N[g]=X*w,N[p]=D,c.push(N.x,N.y,N.z),N[v]=0,N[g]=0,N[p]=E>0?1:-1,h.push(N.x,N.y,N.z),d.push(rt/A),d.push(1-H/_),z+=1}}for(let H=0;H<_;H++)for(let X=0;X<A;X++){let rt=u+X+k*H,at=u+X+k*(H+1),Dt=u+(X+1)+k*(H+1),At=u+(X+1)+k*H;l.push(rt,at,At),l.push(at,Dt,At),$+=6}o.addGroup(f,$,T),f+=$,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Fi=class i extends se{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,m=n*2+r,v=s+1,g=new P,p=new P;for(let M=0;M<=m;M++){let w=0,y=0,b=0,E=0;if(M<=n){let T=M/n,C=T*Math.PI/2;y=-h-t*Math.cos(C),b=t*Math.sin(C),E=-t*Math.cos(C),w=T*d}else if(M<=n+r){let T=(M-n)/r;y=-h+T*e,b=t,E=0,w=d+T*u}else{let T=(M-n-r)/n,C=T*Math.PI/2;y=h+t*Math.sin(C),b=t*Math.cos(C),E=t*Math.sin(C),w=d+u+T*d}let A=Math.max(0,Math.min(1,w/f)),_=0;M===0?_=.5/s:M===m&&(_=-.5/s);for(let T=0;T<=s;T++){let C=T/s,I=C*Math.PI*2,L=Math.sin(I),G=Math.cos(I);p.x=-b*G,p.y=y,p.z=b*L,o.push(p.x,p.y,p.z),g.set(-b*G,E,b*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+_,A)}if(M>0){let T=(M-1)*v;for(let C=0;C<s;C++){let I=T+C,L=T+C+1,G=M*v+C,D=M*v+C+1;a.push(I,L,G),a.push(L,D,G)}}}this.setIndex(a),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},vr=class i extends se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qe=class i extends se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,v=[],g=n/2,p=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Vt(d,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function M(){let y=new P,b=new P,E=0,A=(e-t)/n;for(let _=0;_<=r;_++){let T=[],C=_/r,I=C*(e-t)+t;for(let L=0;L<=s;L++){let G=L/s,D=G*l+o,k=Math.sin(D),W=Math.cos(D);b.x=I*k,b.y=-C*n+g,b.z=I*W,d.push(b.x,b.y,b.z),y.set(k,A,W).normalize(),u.push(y.x,y.y,y.z),f.push(G,1-C),T.push(m++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let C=v[T][_],I=v[T+1][_],L=v[T+1][_+1],G=v[T][_+1];(t>0||T!==0)&&(h.push(C,I,G),E+=3),(e>0||T!==r-1)&&(h.push(I,L,G),E+=3)}c.addGroup(p,E,0),p+=E}function w(y){let b=m,E=new Mt,A=new P,_=0,T=y===!0?t:e,C=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),m++;let I=m;for(let L=0;L<=s;L++){let D=L/s*l+o,k=Math.cos(D),W=Math.sin(D);A.x=T*W,A.y=g*C,A.z=T*k,d.push(A.x,A.y,A.z),u.push(0,C,0),E.x=k*.5+.5,E.y=W*.5*C+.5,f.push(E.x,E.y),m++}for(let L=0;L<s;L++){let G=b+L,D=I+L;y===!0?h.push(D,D+1,G):h.push(D+1,D,G),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mr=class i extends Qe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ka=class i extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new P,y=new P,b=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],w),f(e[E+1],y),f(e[E+2],b),l(w,y,b,M)}function l(M,w,y,b){let E=b+1,A=[];for(let _=0;_<=E;_++){A[_]=[];let T=M.clone().lerp(y,_/E),C=w.clone().lerp(y,_/E),I=E-_;for(let L=0;L<=I;L++)L===0&&_===E?A[_][L]=T:A[_][L]=T.clone().lerp(C,L/I)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){let C=Math.floor(T/2);T%2===0?(u(A[_][C+1]),u(A[_+1][C]),u(A[_][C])):(u(A[_][C+1]),u(A[_+1][C+1]),u(A[_+1][C]))}}function c(M){let w=new P;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let y=g(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(y,1-b)}m(),d()}function d(){for(let M=0;M<a.length;M+=6){let w=a[M+0],y=a[M+2],b=a[M+4],E=Math.max(w,y,b),A=Math.min(w,y,b);E>.9&&A<.1&&(w<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,w){let y=M*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function m(){let M=new P,w=new P,y=new P,b=new P,E=new Mt,A=new Mt,_=new Mt;for(let T=0,C=0;T<r.length;T+=9,C+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),E.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),b.copy(M).add(w).add(y).divideScalar(3);let I=g(b);v(E,C+0,M,I),v(A,C+2,w,I),v(_,C+4,y,I)}}function v(M,w,y,b){b<0&&M.x===1&&(a[w]=M.x-1),y.x===0&&y.z===0&&(a[w]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Mt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new ne;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wa=class extends Sr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Tc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Jh=new P,Kh=new P,kl=new Tc,Wl=new Tc,Xl=new Tc,_i=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Kh.subVectors(s[0],s[1]).add(s[0]),c=Kh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Jh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),kl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,v,g),Wl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,v,g),Xl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Wl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Xl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(kl.calc(l),Wl.calc(l),Xl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $h(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Df(i,t){let e=1-i;return e*e*t}function Nf(i,t){return 2*(1-i)*i*t}function Uf(i,t){return i*i*t}function er(i,t,e,n){return Df(i,t)+Nf(i,e)+Uf(i,n)}function Ff(i,t){let e=1-i;return e*e*e*t}function Bf(i,t){let e=1-i;return 3*e*e*i*t}function Of(i,t){return 3*(1-i)*i*i*t}function zf(i,t){return i*i*i*t}function nr(i,t,e,n,s){return Ff(i,t)+Bf(i,e)+Of(i,n)+zf(i,s)}var Xa=class extends mn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,s.x,r.x,a.x,o.x),nr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends mn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,s.x,r.x,a.x,o.x),nr(t,s.y,r.y,a.y,o.y),nr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends mn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends mn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(er(t,s.x,r.x,a.x),er(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(er(t,s.x,r.x,a.x),er(t,s.y,r.y,a.y),er(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set($h(o,l.x,c.x,h.x,d.x),$h(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Hf=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:_i,CubicBezierCurve:Xa,CubicBezierCurve3:qa,EllipseCurve:Sr,LineCurve:Ya,LineCurve3:Za,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:br,SplineCurve:Ka});var Er=class i extends ka{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ei=class i extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let M=p*u-a;for(let w=0;w<c;w++){let y=w*d-r;m.push(y,-M,0),v.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let w=M+c*p,y=M+c*(p+1),b=M+1+c*(p+1),E=M+1+c*p;f.push(w,y,E),f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Tr=class i extends se{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,m=new Mt;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let v=0;v<s;v++){let g=v*(n+1);for(let p=0;p<n;p++){let M=p+g,w=M,y=M+n+1,b=M+n+2,E=M+1;o.push(w,y,E),o.push(y,b,E)}}this.setIndex(o),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var De=class i extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],w=p/n,y=a+w*o,b=t*Math.cos(y),E=Math.sqrt(t*t-b*b),A=0;p===0&&a===0?A=.5/e:p===n&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,C=s+T*r;d.x=-E*Math.cos(C),d.y=b,d.z=E*Math.sin(C),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(T+A,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let w=h[p][M+1],y=h[p][M],b=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&f.push(w,y,E),(p!==n-1||l<Math.PI)&&f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Hn=class i extends se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,m=new P;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let p=(s+1)*v+g-1,M=(s+1)*(v-1)+g-1,w=(s+1)*(v-1)+g,y=(s+1)*v+g;l.push(p,M,y),l.push(M,w,y)}this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Bi=class i extends se{constructor(t=new br(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new Mt,h=new P,d=[],u=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Vt(d,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function v(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),M(),p()}function g(w){h=t.getPointAt(w/e,h);let y=a.normals[w],b=a.binormals[w];for(let E=0;E<=s;E++){let A=E/s*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);l.x=T*y.x+_*b.x,l.y=T*y.y+_*b.y,l.z=T*y.z+_*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let y=1;y<=s;y++){let b=(s+1)*(w-1)+(y-1),E=(s+1)*w+(y-1),A=(s+1)*w+y,_=(s+1)*(w-1)+y;m.push(b,E,_),m.push(E,A,_)}}function M(){for(let w=0;w<=e;w++)for(let y=0;y<=s;y++)c.x=w/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Hf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Qh(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Gi(i[e]);for(let s in n)t[s]=n[s]}return t}function Qh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var ku={clone:Gi,merge:Ye},Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$a=class extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xe=class extends pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var wr=class extends pn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=mo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qa=class extends pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Ar=class extends Ui{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function hs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ql(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},to=class extends xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kl:r=t,o=2*e-n;break;case $l:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kl:a=t,l=2*n-e;break;case $l:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,g=v*m,p=-u*g+2*u*v-u*m,M=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,w=(-1-f)*g+(1.5+f)*v+.5*m,y=f*g-f*v;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+M*a[c+b]+w*a[l+b]+y*a[d+b];return r}},eo=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},no=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},io=class extends xi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),v=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let v=a[c+m],g=a[l+m],p=f*u+m*2,M=d[p],w=d[p+1],y=t*u+m*2,b=h[y],E=h[y+1],A=Xf(n,e,M,b,s);r[m]=Wu(A,v,w,E,g)}return r}};function Wu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Xf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Wu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Wf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ql(t.settings)&&(n.settings={inTangents:hs(t.settings.inTangents,Array),outTangents:hs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new io(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break;case Zl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return Zl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ql(this.settings)&&(jh(this.settings.inTangents,t),jh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Kd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let v=e[d+m];if(v!==e[u+m]||v!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ql(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Ua;var yi=class extends hn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=ir;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};so.prototype.ValueTypeName="color";var ro=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};ro.prototype.ValueTypeName="number";var ao=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Xe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Rr=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ao(this.times,this.values,this.getValueSize(),t)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends hn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=ir;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="vector";var lo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xu=new lo,co=class{constructor(t){this.manager=t!==void 0?t:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ir=class extends Cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Yl=new ne,tu=new P,eu=new P,ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Yl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ba=new P,Ea=new Xe,Nn=new P,Pr=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,Ea,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ba,Ea,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new P,nu=new Mt,iu=new Mt,We=class extends Pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,nu,iu),e.subVectors(iu,nu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ts=class extends Pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jl=class extends ho{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new jl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var us=-90,ds=1,uo=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new We(us,ds,t,e);r.layers=this.layers,this.add(r);let a=new We(us,ds,t,e);a.layers=this.layers,this.add(a);let o=new We(us,ds,t,e);o.layers=this.layers,this.add(o);let l=new We(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new We(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},fo=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ac="\\[\\]\\.:\\/",qf=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",Yf="[^"+Ac.replace("\\.","")+"]",Zf=/((?:WC+[\/:])*)/.source.replace("WC",Rc),Jf=/(WCOD+)?/.source.replace("WCOD",Yf),Kf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),$f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),Qf=new RegExp("^"+Zf+Jf+Kf+$f+"$"),jf=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qf,"")}static parseTrackName(t){let e=Qf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=tc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var Nc=class Nc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Nc.prototype.isMatrix2=!0;var ec=Nc;function Cc(i,t,e,n){let s=tp(n);switch(e){case yc:return i*t;case So:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case Ei:return i*t*2/s.components*s.byteLength;case Eo:return i*t*2/s.components*s.byteLength;case vc:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Co:return Math.max(i,16)*Math.max(t,8)/4;case wo:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Io:case Po:case Do:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case zr:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case $o:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hr:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tp(i){switch(i){case sn:case mc:return{byteLength:1,components:1};case Cs:case gc:case In:return{byteLength:2,components:1};case vo:case Mo:return{byteLength:2,components:4};case Cn:case yo:case gn:return{byteLength:4,components:1};case _c:case xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function fd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:ap,alphahash_pars_fragment:op,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:xp,iridescence_fragment:yp,bumpmap_pars_fragment:vp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Ep,color_fragment:Tp,color_pars_fragment:wp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Np,emissivemap_pars_fragment:Up,colorspace_fragment:Fp,colorspace_pars_fragment:Bp,envmap_fragment:Op,envmap_common_pars_fragment:zp,envmap_pars_fragment:Hp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:kp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Kp,lights_pars_begin:$p,lights_toon_fragment:jp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:am,lights_fragment_end:om,lightprobes_pars_fragment:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:xm,morphinstance_vertex:ym,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:wm,normal_pars_vertex:Am,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Nm,packing:Um,premultiplied_alpha_fragment:Fm,project_vertex:Bm,dithering_fragment:Om,dithering_pars_fragment:zm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:km,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:$m,tonemapping_fragment:Qm,tonemapping_pars_fragment:jm,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:a0,background_frag:o0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:h0,cube_frag:u0,depth_vert:d0,depth_frag:f0,distance_vert:p0,distance_frag:m0,equirect_vert:g0,equirect_frag:_0,linedashed_vert:x0,linedashed_frag:y0,meshbasic_vert:v0,meshbasic_frag:M0,meshlambert_vert:S0,meshlambert_frag:b0,meshmatcap_vert:E0,meshmatcap_frag:T0,meshnormal_vert:w0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:I0,meshphysical_frag:P0,meshtoon_vert:L0,meshtoon_frag:D0,points_vert:N0,points_frag:U0,shadow_vert:F0,shadow_frag:B0,sprite_vert:O0,sprite_frag:z0},_t={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Wn={basic:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ye([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ye([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ye([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ye([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ye([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ye([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ye([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ye([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Ye([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Ye([_t.lights,_t.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Wn.physical={uniforms:Ye([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var rl={r:0,b:0,g:0},H0=new ne,pd=new Gt;pd.set(-1,0,0,0,1,0,0,0,1);function G0(i,t,e,n,s,r){let a=new Ot(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let y=M.backgroundBlurriness>0;w=t.get(w,y)}return w}function m(M){let w=!1,y=f(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===Dr)?(c===void 0&&(c=new St(new te(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Gi(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pd),c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==he,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new St(new ei(2,2),new je({name:"BackgroundMaterial",uniforms:Gi(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,w){M.getRGB(rl,wc(i)),e.buffers.color.setClear(rl.r,rl.g,rl.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:v,dispose:p}}function V0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,L,G,D,k){let W=!1,z=d(I,D,G,L);r!==z&&(r=z,c(r.object)),W=f(I,D,G,k),W&&m(I,D,G,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(I,L,G,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,L,G,D){let k=D.wireframe===!0,W=n[L.id];W===void 0&&(W={},n[L.id]=W);let z=I.isInstancedMesh===!0?I.id:0,$=W[z];$===void 0&&($={},W[z]=$);let N=$[G.id];N===void 0&&(N={},$[G.id]=N);let H=N[k];return H===void 0&&(H=u(l()),N[k]=H),H}function u(I){let L=[],G=[],D=[];for(let k=0;k<e;k++)L[k]=0,G[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,L,G,D){let k=r.attributes,W=L.attributes,z=0,$=G.getAttributes();for(let N in $)if($[N].location>=0){let X=k[N],rt=W[N];if(rt===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),X===void 0||X.attribute!==rt||rt&&X.data!==rt.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function m(I,L,G,D){let k={},W=L.attributes,z=0,$=G.getAttributes();for(let N in $)if($[N].location>=0){let X=W[N];X===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(X=I.instanceColor));let rt={};rt.attribute=X,X&&X.data&&(rt.data=X.data),k[N]=rt,z++}r.attributes=k,r.attributesNum=z,r.index=D}function v(){let I=r.newAttributes;for(let L=0,G=I.length;L<G;L++)I[L]=0}function g(I){p(I,0)}function p(I,L){let G=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;G[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),k[I]!==L&&(i.vertexAttribDivisor(I,L),k[I]=L)}function M(){let I=r.newAttributes,L=r.enabledAttributes;for(let G=0,D=L.length;G<D;G++)L[G]!==I[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function w(I,L,G,D,k,W,z){z===!0?i.vertexAttribIPointer(I,L,G,k,W):i.vertexAttribPointer(I,L,G,D,k,W)}function y(I,L,G,D){v();let k=D.attributes,W=G.getAttributes(),z=L.defaultAttributeValues;for(let $ in W){let N=W[$];if(N.location>=0){let H=k[$];if(H===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){let X=H.normalized,rt=H.itemSize,at=t.get(H);if(at===void 0)continue;let Dt=at.buffer,At=at.type,ot=at.bytesPerElement,Z=At===i.INT||At===i.UNSIGNED_INT||H.gpuType===yo;if(H.isInterleavedBufferAttribute){let O=H.data,nt=O.stride,ct=H.offset;if(O.isInstancedInterleavedBuffer){for(let st=0;st<N.locationSize;st++)p(N.location+st,O.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let st=0;st<N.locationSize;st++)g(N.location+st);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let st=0;st<N.locationSize;st++)w(N.location+st,rt/N.locationSize,At,X,nt*ot,(ct+rt/N.locationSize*st)*ot,Z)}else{if(H.isInstancedBufferAttribute){for(let O=0;O<N.locationSize;O++)p(N.location+O,H.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let O=0;O<N.locationSize;O++)g(N.location+O);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let O=0;O<N.locationSize;O++)w(N.location+O,rt/N.locationSize,At,X,rt*ot,rt/N.locationSize*O*ot,Z)}}else if(z!==void 0){let X=z[$];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(N.location,X);break;case 3:i.vertexAttrib3fv(N.location,X);break;case 4:i.vertexAttrib4fv(N.location,X);break;default:i.vertexAttrib1fv(N.location,X)}}}}M()}function b(){T();for(let I in n){let L=n[I];for(let G in L){let D=L[G];for(let k in D){let W=D[k];for(let z in W)h(W[z].object),delete W[z];delete D[k]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let G in L){let D=L[G];for(let k in D){let W=D[k];for(let z in W)h(W[z].object),delete W[z];delete D[k]}}delete n[I.id]}function A(I){for(let L in n){let G=n[L];for(let D in G){let k=G[D];if(k[I.id]===void 0)continue;let W=k[I.id];for(let z in W)h(W[z].object),delete W[z];delete k[I.id]}}}function _(I){for(let L in n){let G=n[L],D=I.isInstancedMesh===!0?I.id:0,k=G[D];if(k!==void 0){for(let W in k){let z=k[W];for(let $ in z)h(z[$].object),delete z[$];delete k[W]}delete G[D],Object.keys(G).length===0&&delete n[L]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function k0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function W0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==sn&&A!==gn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:E}}function X0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Tn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,w=M*4,y=p.clippingState||null;l.value=y,y=h(m,u,w,f);for(let b=0;b!==w;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,y=f;w!==v;++w,y+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var Ls=4,q0=6,Y0=20,Z0=256,Vr=new Ts,qu=new Ot,Uc=null,Fc=0,Bc=0,Oc=!1,J0=new P,Vi=new P,ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=J0}=r;Uc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uc,Fc,Bc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:In,format:_n,colorSpace:sr,depthBuffer:!1},s=Yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=K0(r)),this._blurMaterial=Q0(r,t,e),this._ggxMaterial=$0(r,t,e)}return s}_compileMaterial(t){let e=new St(new se,t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,s,r){let l=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(qu),d.toneMapping=Rn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new te,new Ni({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(qu),p=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let b=this._cubeSize;Ps(s,y*b,w>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Mi||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Vr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-Ls?n-m+Ls:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Ps(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Vr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ps(t,g,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Vr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),u=4*(this._cubeSize-h);Ps(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Vr)}};function K0(i){let t=[],e=[],n=i,s=i-Ls+1+q0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,w=p>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];m.set(y,f*u*p);for(let b=0;b<u;b++){let E=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?Vi.set(1,A,E):p===1?Vi.set(-E,1,-A):p===2?Vi.set(-E,A,1):p===3?Vi.set(-1,A,-E):p===4?Vi.set(-E,-1,A):Vi.set(E,A,-1),Vi.toArray(v,(p*u+b)*f)}}let g=new se;g.setAttribute("position",new ae(m,f)),g.setAttribute("outputDirection",new ae(v,f)),e.push(new St(g,null)),n>Ls&&n--}return{lodMeshes:e,sizeLods:t}}function Yu(i,t,e){let n=new en(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $0(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Q0(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:Y0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Zu(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ju(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ll=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new te(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Vn});r.uniforms.tEquirect.value=e;let a=new St(s,r),o=e.minFilter;return e.minFilter===Si&&(e.minFilter=He),new uo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function j0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===go||f===_o)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new ll(m.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===go||f===_o,v=f===Mi||f===Hi;if(m||v){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ol(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new ol(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===go?u.mapping=Mi:f===_o&&(u.mapping=Hi),u}function l(u){let f=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function tg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Li("WebGLRenderer: "+n+" extension not supported."),s}}}function eg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,v=0;if(m===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let w=0,y=M.length;w<y;w+=3){let b=M[w+0],E=M[w+1],A=M[w+2];u.push(b,E,E,A,A,b)}}else{let M=m.array;v=m.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let b=w+0,E=w+1,A=w+2;u.push(b,E,E,A,A,b)}}let g=new(m.count>=65535?fr:dr)(u,1);g.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ng(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ig(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sg(i,t,e){let n=new WeakMap,s=new be;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),v===!0&&(w=3);let y=o.attributes.position.count*w,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*b*4*d),A=new lr(E,y,b,d);A.type=gn,A.needsUpdate=!0;let _=w*4;for(let C=0;C<d;C++){let I=g[C],L=p[C],G=M[C],D=y*b*4*C;for(let k=0;k<I.count;k++){let W=k*_;f===!0&&(s.fromBufferAttribute(I,k),E[D+W+0]=s.x,E[D+W+1]=s.y,E[D+W+2]=s.z,E[D+W+3]=0),m===!0&&(s.fromBufferAttribute(L,k),E[D+W+4]=s.x,E[D+W+5]=s.y,E[D+W+6]=s.z,E[D+W+7]=0),v===!0&&(s.fromBufferAttribute(G,k),E[D+W+8]=s.x,E[D+W+9]=s.y,E[D+W+10]=s.z,E[D+W+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Mt(y,b)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function rg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var ag={[lc]:"LINEAR_TONE_MAPPING",[cc]:"REINHARD_TONE_MAPPING",[hc]:"CINEON_TONE_MAPPING",[Lr]:"ACES_FILMIC_TONE_MAPPING",[dc]:"AGX_TONE_MAPPING",[fc]:"NEUTRAL_TONE_MAPPING",[uc]:"CUSTOM_TONE_MAPPING"};function og(i,t,e,n,s,r){let a=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new se;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let h=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new St(c,h),u=new Ts(-1,1,1,-1,0,1),f=null,m=null,v=!1,g,p=null,M=[],w=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let E=0;E<M.length;E++){let A=M[E];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;let b=a.width,E=a.height;M.length>0&&o===null&&(o=new en(b,E,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new en(b,E,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let _=M[A];_.setSize&&_.setSize(b,E)}},this.begin=function(y,b){if(v||y.toneMapping===Rn&&M.length===0)return!1;if(p=b,b!==null){let E=b.width,A=b.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return w===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Rn,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=g,v=!0;let E=a,A=o;for(let _=0;_<M.length;_++){let T=M[_];T.enabled!==!1&&(T.render(y,A,E,b),T.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,h.defines={},Qt.getTransfer(f)===he&&(h.defines.SRGB_TRANSFER="");let _=ag[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var md=new $e,Gc=new gi(1,1),gd=new lr,_d=new Oa,xd=new xr,Ku=[],$u=[],Qu=new Float32Array(16),ju=new Float32Array(9),td=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ul(i,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;td.set(n),i.uniformMatrix2fv(this.addr,!1,td),Fe(e,n)}}function fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;ju.set(n),i.uniformMatrix3fv(this.addr,!1,ju),Fe(e,n)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Qu.set(n),i.uniformMatrix4fv(this.addr,!1,Qu),Fe(e,n)}}function mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=e.isReversedDepthBuffer()?il:nl,r=Gc):r=md,e.setTexture2D(t||r,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_d,s)}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xd,s)}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return yg;case 36294:return vg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return wg}}function Rg(i,t){i.uniform1fv(this.addr,t)}function Cg(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Ig(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Pg(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Lg(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dg(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ng(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ug(i,t){i.uniform1iv(this.addr,t)}function Fg(i,t){i.uniform2iv(this.addr,t)}function Bg(i,t){i.uniform3iv(this.addr,t)}function Og(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function Hg(i,t){i.uniform2uiv(this.addr,t)}function Gg(i,t){i.uniform3uiv(this.addr,t)}function Vg(i,t){i.uniform4uiv(this.addr,t)}function kg(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gc:a=md;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Wg(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_d,r[a])}function Xg(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xd,r[a])}function qg(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function Yg(i){switch(i){case 5126:return Rg;case 35664:return Cg;case 35665:return Ig;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return Og;case 5125:return zg;case 36294:return Hg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}var Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}},kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}},Wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function ed(i,t){i.seq.push(t),i.map[t.id]=t}function Zg(i,t,e){let n=i.name,s=n.length;for(zc.lastIndex=0;;){let r=zc.exec(n),a=zc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ed(e,c===void 0?new Vc(o,i,t):new kc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Wc(o),ed(e,d)),e=d}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Zg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jg=37297,Kg=0;function $g(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var id=new Gt;function Qg(i){Qt._getMatrix(id,Qt.workingColorSpace,i);let t=`mat3( ${id.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$g(i.getShaderSource(t),o)}else return r}function jg(i,t){let e=Qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var t_={[lc]:"Linear",[cc]:"Reinhard",[hc]:"Cineon",[Lr]:"ACESFilmic",[dc]:"AgX",[fc]:"Neutral",[uc]:"Custom"};function e_(i,t){let e=t_[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var al=new P;function n_(){Qt.getLuminanceCoefficients(al);let i=al.x.toFixed(4),t=al.y.toFixed(4),e=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function s_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wr(i){return i!==""}function rd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(a_,l_)}var o_=new Map;function l_(i,t){let e=Zt[t];if(e===void 0){let n=o_.get(t);if(n!==void 0)e=Zt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xc(e)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(i){return i.replace(c_,h_)}function h_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var u_={[Oi]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function d_(i){return u_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var f_={[Mi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function p_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":f_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var m_={[Hi]:"ENVMAP_MODE_REFRACTION"};function g_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var __={[mo]:"ENVMAP_BLENDING_MULTIPLY",[Tu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function x_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":__[i.combine]||"ENVMAP_BLENDING_NONE"}function y_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function v_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=d_(e),c=p_(e),h=g_(e),d=x_(e),u=y_(e),f=i_(e),m=s_(r),v=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(g=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?e_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),n_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=Xc(a),a=rd(a,e),a=ad(a,e),o=Xc(o),o=rd(o,e),o=ad(o,e),a=od(a),o=od(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+g+a,y=M+p+o,b=nd(s,s.VERTEX_SHADER,w),E=nd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,b),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(E)||"",k=L.trim(),W=G.trim(),z=D.trim(),$=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,E);else{let H=sd(s,b,"vertex"),X=sd(s,E,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+H+`
`+X)}else k!==""?Bt("WebGLProgram: Program Info Log:",k):(W===""||z==="")&&(N=!1);N&&(I.diagnostics={runnable:$,programLog:k,vertexShader:{log:W,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(b),s.deleteShader(E),_=new Ds(s,v),T=r_(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,Jg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}var M_=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yc(t),e.set(t,n)),n}},Yc=class{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}};function S_(i){return i===Ei||i===zr||i===Hr}function b_(i,t,e,n,s,r){let a=new cr,o=new qc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,C,I,L,G){let D=I.fog,k=L.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=t.get(_.envMap||W,z),N=$&&$.mapping===Dr?$.image.height:null,H=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let X=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,rt=X!==void 0?X.length:0,at=0;k.morphAttributes.position!==void 0&&(at=1),k.morphAttributes.normal!==void 0&&(at=2),k.morphAttributes.color!==void 0&&(at=3);let Dt,At,ot,Z;if(H){let ge=Wn[H];Dt=ge.vertexShader,At=ge.fragmentShader}else{Dt=_.vertexShader,At=_.fragmentShader;let ge=o.getVertexShaderStage(_),le=o.getFragmentShaderStage(_);o.update(_,ge,le),ot=ge.id,Z=le.id}let O=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),ct=L.isInstancedMesh===!0,st=L.isBatchedMesh===!0,mt=!!_.map,Ut=!!_.matcap,Rt=!!$,Ft=!!_.aoMap,Xt=!!_.lightMap,kt=!!_.bumpMap&&_.wireframe===!1,ee=!!_.normalMap,ue=!!_.displacementMap,Le=!!_.emissiveMap,de=!!_.metalnessMap,ve=!!_.roughnessMap,F=_.anisotropy>0,Be=_.clearcoat>0,re=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,V=_.sheen>0,J=_.transmission>0,Q=F&&!!_.anisotropyMap,lt=Be&&!!_.clearcoatMap,ht=Be&&!!_.clearcoatNormalMap,j=Be&&!!_.clearcoatRoughnessMap,et=x&&!!_.iridescenceMap,ut=x&&!!_.iridescenceThicknessMap,Pt=V&&!!_.sheenColorMap,gt=V&&!!_.sheenRoughnessMap,dt=!!_.specularMap,Lt=!!_.specularColorMap,zt=!!_.specularIntensityMap,qt=J&&!!_.transmissionMap,B=J&&!!_.thicknessMap,ft=!!_.gradientMap,tt=!!_.alphaMap,pt=_.alphaTest>0,vt=!!_.alphaHash,it=!!_.extensions,Nt=Rn;_.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Ct={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:At,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:st,batchingColor:st&&L._colorsTexture!==null,instancing:ct,instancingColor:ct&&L.instanceColor!==null,instancingMorph:ct&&L.morphTexture!==null,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:mt,matcap:Ut,envMap:Rt,envMapMode:Rt&&$.mapping,envMapCubeUVHeight:N,aoMap:Ft,lightMap:Xt,bumpMap:kt,normalMap:ee,displacementMap:ue,emissiveMap:Le,normalMapObjectSpace:ee&&_.normalMapType===Cu,normalMapTangentSpace:ee&&_.normalMapType===Gr,packedNormalMap:ee&&_.normalMapType===Gr&&S_(_.normalMap.format),metalnessMap:de,roughnessMap:ve,anisotropy:F,anisotropyMap:Q,clearcoat:Be,clearcoatMap:lt,clearcoatNormalMap:ht,clearcoatRoughnessMap:j,dispersion:re,retroreflection:R,iridescence:x,iridescenceMap:et,iridescenceThicknessMap:ut,sheen:V,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:dt,specularColorMap:Lt,specularIntensityMap:zt,transmission:J,transmissionMap:qt,thicknessMap:B,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Rs&&_.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:vt,combine:_.combine,mapUv:mt&&m(_.map.channel),aoMapUv:Ft&&m(_.aoMap.channel),lightMapUv:Xt&&m(_.lightMap.channel),bumpMapUv:kt&&m(_.bumpMap.channel),normalMapUv:ee&&m(_.normalMap.channel),displacementMapUv:ue&&m(_.displacementMap.channel),emissiveMapUv:Le&&m(_.emissiveMap.channel),metalnessMapUv:de&&m(_.metalnessMap.channel),roughnessMapUv:ve&&m(_.roughnessMap.channel),anisotropyMapUv:Q&&m(_.anisotropyMap.channel),clearcoatMapUv:lt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:gt&&m(_.sheenRoughnessMap.channel),specularMapUv:dt&&m(_.specularMap.channel),specularColorMapUv:Lt&&m(_.specularColorMap.channel),specularIntensityMapUv:zt&&m(_.specularIntensityMap.channel),transmissionMapUv:qt&&m(_.transmissionMap.channel),thicknessMapUv:B&&m(_.thicknessMap.channel),alphaMapUv:tt&&m(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ee||F),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(mt||tt),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:nt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:at,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:mt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Le&&_.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qe,flipSided:_.side===Ne,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=f[_.type],C;if(T){let I=Wn[T];C=ku.clone(I.uniforms)}else C=_.uniforms;return C}function y(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new v_(i,T,_,s),c.push(C),h.set(T,C)),C}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function E_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,v,g,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,f,m,v,g,p,M){M.reversedDepth===!0&&(g=-g);let w=o(u,f,m,v,g,p);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):e.push(w)}function c(u,f,m,v,g,p){let M=o(u,f,m,v,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||T_),n.length>1&&n.sort(f||cd),s.length>1&&s.sort(f||cd)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function w_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new hd,i.set(n,[a])):s>=r.length?(a=new hd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ot};break;case"SpotLight":e={position:new P,direction:new P,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function R_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C_=0;function I_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P_(i){let t=new A_,e=R_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ne,a=new ne;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,M=0,w=0,y=0,b=0,E=0,A=0,_=0,T=0,C=0;c.sort(I_);for(let L=0,G=c.length;L<G;L++){let D=c[L],k=D.color,W=D.intensity,z=D.distance,$=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ei?$=D.shadow.map.texture:$=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*W,d+=k.g*W,u+=k.b*W;else if(D.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(D.sh.coefficients[N],W);C++}else if(D.isSunLight){let N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,X=e.get(D);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[m]=X,n.sunShadowMap[m]=$;let rt=H.getViewportCount();for(let at=0;at<rt;at++)n.sunShadowMatrix[v+at]=H.getMatrix(at),n.sunShadowCascade[v+at]=H._cascadeData[at];v+=rt,m++}n.sun[f]=N,f++}else if(D.isDirectionalLight){let N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,X=e.get(D);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=N,g++}else if(D.isSpotLight){let N=t.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(k).multiplyScalar(W),N.distance=z,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,n.spot[M]=N;let H=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,H.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[M]=H.matrix,D.castShadow){let X=e.get(D);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,n.spotShadow[M]=X,n.spotShadowMap[M]=$,A++}M++}else if(D.isRectAreaLight){let N=t.get(D);N.color.copy(k).multiplyScalar(W),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=N,w++}else if(D.isPointLight){let N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){let H=D.shadow,X=e.get(D);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=N,p++}else if(D.isHemisphereLight){let N=t.get(D);N.skyColor.copy(D.color).multiplyScalar(W),N.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[y]=N,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==y||I.numSunShadows!==m||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=y,I.numSunShadows=m,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=C,n.version=C_++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let y=c[M];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(y.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function ud(i){let t=new P_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function L_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ud(i),t.set(s,[o])):r>=a.length?(o=new ud(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],F_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],dd=new ne,kr=new P,Hc=new P;function B_(i,t,e){let n=new bs,s=new Mt,r=new Mt,a=new be,o=new Qa,l=new ja,c={},h=e.maxTextureSize,d={[Gn]:Ne,[Ne]:Gn,[qe]:qe},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:D_,fragmentShader:N_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new se;m.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new St(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oi;let p=this.type;this.render=function(E,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===au&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oi);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Vn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let G=p!==this.type;G&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=E.length;D<k;D++){let W=E[D],z=W.shadow;if(z===void 0){Bt("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let $=z.getFrameExtents();s.multiply($),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,z.mapSize.y=r.y));let N=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=N,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===As){if(W.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new en(s.x,s.y,{format:Ei,type:In,minFilter:He,magFilter:He,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new gi(s.x,s.y,gn),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=Bn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze}else W.isPointLight?(z.map=new ll(s.x),z.map.depthTexture=new Va(s.x,Cn)):(z.map=new en(s.x,s.y),z.map.depthTexture=new gi(s.x,s.y,Cn)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=Bn,this.type===Oi?(z.map.depthTexture.compareFunction=N?il:nl,z.map.depthTexture.minFilter=He,z.map.depthTexture.magFilter=He):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let H=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();W.isPointLight!==!0&&z.updateMatrices(W,_);for(let X=0;X<H;X++){let rt=z.getCamera(X);if(W.isPointLight){let at=z.camera,Dt=z.matrix,At=W.distance||at.far;At!==at.far&&(at.far=At,at.updateProjectionMatrix()),kr.setFromMatrixPosition(W.matrixWorld),at.position.copy(kr),Hc.copy(at.position),Hc.add(U_[X]),at.up.copy(F_[X]),at.lookAt(Hc),at.updateMatrixWorld(),Dt.makeTranslation(-kr.x,-kr.y,-kr.z),dd.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),z._frustum.setFromProjectionMatrix(dd,at.coordinateSystem,at.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,X),i.clear();else{X===0&&(i.setRenderTarget(z.map),i.clear());let at=z.getViewport(X);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),L.viewport(a)}n=z.getFrustum(X),y(A,_,rt,W,this.type)}z.isPointLightShadow!==!0&&this.type===As&&M(z,_),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,I)};function M(E,A){let _=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new en(s.x,s.y,{format:Ei,type:In}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,_,f,v,null)}function w(E,A,_,T){let C=null,I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,G=A.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let k=D[G];k===void 0&&(k=C.clone(),D[G]=k,A.addEventListener("dispose",b)),C=k}if(C.visible=A.visible,C.wireframe=A.wireframe,T===As?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=_}return C}function y(E,A,_,T,C){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===As)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let G=t.update(E),D=E.material;if(Array.isArray(D)){let k=G.groups;for(let W=0,z=k.length;W<z;W++){let $=k[W],N=D[$.materialIndex];if(N&&N.visible){let H=w(E,N,T,C);E.onBeforeShadow(i,E,A,_,G,H,$),i.renderBufferDirect(_,null,G,H,E,$),E.onAfterShadow(i,E,A,_,G,H,$)}}}else if(D.visible){let k=w(E,D,T,C);E.onBeforeShadow(i,E,A,_,G,k,null),i.renderBufferDirect(_,null,G,k,E,null),E.onAfterShadow(i,E,A,_,G,k,null)}}let L=E.children;for(let G=0,D=L.length;G<D;G++)y(L[G],A,_,T,C)}function b(E){E.target.removeEventListener("dispose",b);for(let _ in c){let T=c[_],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function O_(i,t){function e(){let B=!1,ft=new be,tt=null,pt=new be(0,0,0,0);return{setMask:function(vt){tt!==vt&&!B&&(i.colorMask(vt,vt,vt,vt),tt=vt)},setLocked:function(vt){B=vt},setClear:function(vt,it,Nt,Ct,ge){ge===!0&&(vt*=Ct,it*=Ct,Nt*=Ct),ft.set(vt,it,Nt,Ct),pt.equals(ft)===!1&&(i.clearColor(vt,it,Nt,Ct),pt.copy(ft))},reset:function(){B=!1,tt=null,pt.set(-1,0,0,0)}}}function n(){let B=!1,ft=!1,tt=null,pt=null,vt=null;return{setReversed:function(it){if(ft!==it){let Nt=t.get("EXT_clip_control");it?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ft=it;let Ct=vt;vt=null,this.setClear(Ct)}},getReversed:function(){return ft},setTest:function(it){it?O(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(it){tt!==it&&!B&&(i.depthMask(it),tt=it)},setFunc:function(it){if(ft&&(it=Hu[it]),pt!==it){switch(it){case Aa:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=it}},setLocked:function(it){B=it},setClear:function(it){vt!==it&&(vt=it,ft&&(it=1-it),i.clearDepth(it))},reset:function(){B=!1,tt=null,pt=null,vt=null,ft=!1}}}function s(){let B=!1,ft=null,tt=null,pt=null,vt=null,it=null,Nt=null,Ct=null,ge=null;return{setTest:function(le){B||(le?O(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(le){ft!==le&&!B&&(i.stencilMask(le),ft=le)},setFunc:function(le,Mn,Ln){(tt!==le||pt!==Mn||vt!==Ln)&&(i.stencilFunc(le,Mn,Ln),tt=le,pt=Mn,vt=Ln)},setOp:function(le,Mn,Ln){(it!==le||Nt!==Mn||Ct!==Ln)&&(i.stencilOp(le,Mn,Ln),it=le,Nt=Mn,Ct=Ln)},setLocked:function(le){B=le},setClear:function(le){ge!==le&&(i.clearStencil(le),ge=le)},reset:function(){B=!1,ft=null,tt=null,pt=null,vt=null,it=null,Nt=null,Ct=null,ge=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,M=null,w=null,y=null,b=null,E=null,A=null,_=new Ot(0,0,0),T=0,C=!1,I=null,L=null,G=null,D=null,k=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=$>=1):N.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=$>=2);let H=null,X={},rt=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Dt=new be().fromArray(rt),At=new be().fromArray(at);function ot(B,ft,tt,pt){let vt=new Uint8Array(4),it=i.createTexture();i.bindTexture(B,it),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<tt;Nt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ft+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return it}let Z={};Z[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),O(i.DEPTH_TEST),a.setFunc(ps),kt(!1),ee(nc),O(i.CULL_FACE),Ft(Vn);function O(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function nt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ct(B,ft){return u[B]!==ft?(i.bindFramebuffer(B,ft),u[B]=ft,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function st(B,ft){let tt=m,pt=!1;if(B){tt=f.get(ft),tt===void 0&&(tt=[],f.set(ft,tt));let vt=B.textures;if(tt.length!==vt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Nt=vt.length;it<Nt;it++)tt[it]=i.COLOR_ATTACHMENT0+it;tt.length=vt.length,pt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(tt)}function mt(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let Ut={[zi]:i.FUNC_ADD,[lu]:i.FUNC_SUBTRACT,[cu]:i.FUNC_REVERSE_SUBTRACT};Ut[hu]=i.MIN,Ut[uu]=i.MAX;let Rt={[du]:i.ZERO,[fu]:i.ONE,[pu]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[xu]:i.DST_COLOR,[gu]:i.DST_ALPHA,[mu]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[yu]:i.ONE_MINUS_DST_COLOR,[_u]:i.ONE_MINUS_DST_ALPHA,[Mu]:i.CONSTANT_COLOR,[Su]:i.ONE_MINUS_CONSTANT_COLOR,[bu]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ft(B,ft,tt,pt,vt,it,Nt,Ct,ge,le){if(B===Vn){g===!0&&(nt(i.BLEND),g=!1);return}if(g===!1&&(O(i.BLEND),g=!0),B!==ou){if(B!==p||le!==C){if((M!==zi||b!==zi)&&(i.blendEquation(i.FUNC_ADD),M=zi,b=zi),le)switch(B){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",B);break}else switch(B){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",B);break}w=null,y=null,E=null,A=null,_.set(0,0,0),T=0,p=B,C=le}return}vt=vt||ft,it=it||tt,Nt=Nt||pt,(ft!==M||vt!==b)&&(i.blendEquationSeparate(Ut[ft],Ut[vt]),M=ft,b=vt),(tt!==w||pt!==y||it!==E||Nt!==A)&&(i.blendFuncSeparate(Rt[tt],Rt[pt],Rt[it],Rt[Nt]),w=tt,y=pt,E=it,A=Nt),(Ct.equals(_)===!1||ge!==T)&&(i.blendColor(Ct.r,Ct.g,Ct.b,ge),_.copy(Ct),T=ge),p=B,C=!1}function Xt(B,ft){B.side===qe?nt(i.CULL_FACE):O(i.CULL_FACE);let tt=B.side===Ne;ft&&(tt=!tt),kt(tt),B.blending===Rs&&B.transparent===!1?Ft(Vn):Ft(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let pt=B.stencilWrite;o.setTest(pt),pt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Le(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(B){I!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),I=B)}function ee(B){B!==su?(O(i.CULL_FACE),B!==L&&(B===nc?i.cullFace(i.BACK):B===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),L=B}function ue(B){B!==G&&(z&&i.lineWidth(B),G=B)}function Le(B,ft,tt){B?(O(i.POLYGON_OFFSET_FILL),(D!==ft||k!==tt)&&(D=ft,k=tt,a.getReversed()&&(ft=-ft),i.polygonOffset(ft,tt))):nt(i.POLYGON_OFFSET_FILL)}function de(B){B?O(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function ve(B){B===void 0&&(B=i.TEXTURE0+W-1),H!==B&&(i.activeTexture(B),H=B)}function F(B,ft,tt){tt===void 0&&(H===null?tt=i.TEXTURE0+W-1:tt=H);let pt=X[tt];pt===void 0&&(pt={type:void 0,texture:void 0},X[tt]=pt),(pt.type!==B||pt.texture!==ft)&&(H!==tt&&(i.activeTexture(tt),H=tt),i.bindTexture(B,ft||Z[B]),pt.type=B,pt.texture=ft)}function Be(){let B=X[H];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function x(){try{i.texSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function V(){try{i.texSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function lt(){try{i.texStorage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function ht(){try{i.texStorage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function j(){try{i.texImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function et(){try{i.texImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function ut(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Pt(B,ft){d[B]!==ft&&(i.pixelStorei(B,ft),d[B]=ft)}function gt(B){Dt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Dt.copy(B))}function dt(B){At.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),At.copy(B))}function Lt(B,ft){let tt=c.get(ft);tt===void 0&&(tt=new WeakMap,c.set(ft,tt));let pt=tt.get(B);pt===void 0&&(pt=i.getUniformBlockIndex(ft,B.name),tt.set(B,pt))}function zt(B,ft){let pt=c.get(ft).get(B);l.get(ft)!==pt&&(i.uniformBlockBinding(ft,pt,B.__bindingPointIndex),l.set(ft,pt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},H=null,X={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,M=null,w=null,y=null,b=null,E=null,A=null,_=new Ot(0,0,0),T=0,C=!1,I=null,L=null,G=null,D=null,k=null,Dt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:O,disable:nt,bindFramebuffer:ct,drawBuffers:st,useProgram:mt,setBlending:Ft,setMaterial:Xt,setFlipSided:kt,setCullFace:ee,setLineWidth:ue,setPolygonOffset:Le,setScissorTest:de,activeTexture:ve,bindTexture:F,unbindTexture:Be,compressedTexImage2D:re,compressedTexImage3D:R,texImage2D:j,texImage3D:et,pixelStorei:Pt,getParameter:ut,updateUBOMapping:Lt,uniformBlockBinding:zt,texStorage2D:lt,texStorage3D:ht,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:J,compressedTexSubImage3D:Q,scissor:gt,viewport:dt,reset:qt}}function z_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return m?new OffscreenCanvas(R,x):ar("canvas")}function g(R,x,V){let J=1,Q=re(R);if((Q.width>V||Q.height>V)&&(J=V/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let lt=Math.floor(J*Q.width),ht=Math.floor(J*Q.height);u===void 0&&(u=v(lt,ht));let j=x?v(lt,ht):u;return j.width=lt,j.height=ht,j.getContext("2d").drawImage(R,0,0,lt,ht),Bt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+lt+"x"+ht+")."),j}else return"data"in R&&Bt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,x,V,J,Q,lt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ht;J&&(ht=t.get("EXT_texture_norm16"),ht||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8),V===i.UNSIGNED_SHORT&&ht&&(j=ht.R16_EXT),V===i.SHORT&&ht&&(j=ht.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),x===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8),V===i.UNSIGNED_SHORT&&ht&&(j=ht.RG16_EXT),V===i.SHORT&&ht&&(j=ht.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&ht&&(j=ht.RGB16_EXT),V===i.SHORT&&ht&&(j=ht.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let et=lt?rr:Qt.getTransfer(Q);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=et===he?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ht&&(j=ht.RGBA16_EXT),V===i.SHORT&&ht&&(j=ht.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(R,x){let V;return R?x===null||x===Cn||x===Is?V=i.DEPTH24_STENCIL8:x===gn?V=i.DEPTH32F_STENCIL8:x===Cs&&(V=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Cn||x===Is?V=i.DEPTH_COMPONENT24:x===gn?V=i.DEPTH_COMPONENT32F:x===Cs&&(V=i.DEPTH_COMPONENT16),V}function E(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ze&&R.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){let x=R.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(R){let x=R.target;x.removeEventListener("dispose",_),I(x)}function T(R){let x=n.get(R);if(x.__webglInit===void 0)return;let V=R.source,J=f.get(V);if(J){let Q=J[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(R),Object.keys(J).length===0&&f.delete(V)}n.remove(R)}function C(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let V=R.source,J=f.get(V);delete J[x.__cacheKey],a.memory.textures--}function I(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let Q=0;Q<x.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=R.textures;for(let J=0,Q=V.length;J<Q;J++){let lt=n.get(V[J]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(R)}let L=0;function G(){L=0}function D(){return L}function k(R){L=R}function W(){let R=L;return R>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function z(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function $(R,x){let V=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let J=R.image;if(J===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(V,R,x);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function N(R,x){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){nt(V,R,x);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function H(R,x){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){nt(V,R,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function X(R,x){let V=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){ct(V,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let rt={[Fn]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},at={[ze]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Dt={[Pu]:i.NEVER,[Fu]:i.ALWAYS,[Lu]:i.LESS,[nl]:i.LEQUAL,[Du]:i.EQUAL,[il]:i.GEQUAL,[Nu]:i.GREATER,[Uu]:i.NOTEQUAL};function At(R,x){if(x.type===gn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===He||x.magFilter===xo||x.magFilter===Nr||x.magFilter===Si||x.minFilter===He||x.minFilter===xo||x.minFilter===Nr||x.minFilter===Si)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,rt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Dt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ze||x.minFilter!==Nr&&x.minFilter!==Si||x.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ot(R,x){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));let J=x.source,Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));let lt=z(x);if(lt!==R.__cacheKey){Q[lt]===void 0&&(Q[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[lt].usedTimes++;let ht=Q[R.__cacheKey];ht!==void 0&&(Q[R.__cacheKey].usedTimes--,ht.usedTimes===0&&C(x)),R.__cacheKey=lt,R.__webglTexture=Q[lt].texture}return V}function Z(R,x,V){return Math.floor(Math.floor(R/V)/x)}function O(R,x,V,J){let lt=R.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,J,x.data);else{lt.sort((Pt,gt)=>Pt.start-gt.start);let ht=0;for(let Pt=1;Pt<lt.length;Pt++){let gt=lt[ht],dt=lt[Pt],Lt=gt.start+gt.count,zt=Z(dt.start,x.width,4),qt=Z(gt.start,x.width,4);dt.start<=Lt+1&&zt===qt&&Z(dt.start+dt.count-1,x.width,4)===zt?gt.count=Math.max(gt.count,dt.start+dt.count-gt.start):(++ht,lt[ht]=dt)}lt.length=ht+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Pt=0,gt=lt.length;Pt<gt;Pt++){let dt=lt[Pt],Lt=Math.floor(dt.start/4),zt=Math.ceil(dt.count/4),qt=Lt%x.width,B=Math.floor(Lt/x.width),ft=zt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,qt,B,ft,tt,V,J,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function nt(R,x,V){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);let Q=ot(R,x),lt=x.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+V);let ht=n.get(lt);if(lt.version!==ht.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let tt=Qt.getPrimaries(Qt.workingColorSpace),pt=x.colorSpace===ni?null:Qt.getPrimaries(x.colorSpace),vt=x.colorSpace===ni||tt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=g(x.image,!1,s.maxTextureSize);et=Be(x,et);let ut=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type),gt=y(x.internalFormat,ut,Pt,x.normalized,x.colorSpace,x.isVideoTexture);At(J,x);let dt,Lt=x.mipmaps,zt=x.isVideoTexture!==!0,qt=ht.__version===void 0||Q===!0,B=lt.dataReady,ft=E(x,et);if(x.isDepthTexture)gt=b(x.format===bi,x.type),qt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,gt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,gt,et.width,et.height,0,ut,Pt,null));else if(x.isDataTexture)if(Lt.length>0){zt&&qt&&e.texStorage2D(i.TEXTURE_2D,ft,gt,Lt[0].width,Lt[0].height);for(let tt=0,pt=Lt.length;tt<pt;tt++)dt=Lt[tt],zt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,Pt,dt.data):e.texImage2D(i.TEXTURE_2D,tt,gt,dt.width,dt.height,0,ut,Pt,dt.data);x.generateMipmaps=!1}else zt?(qt&&e.texStorage2D(i.TEXTURE_2D,ft,gt,et.width,et.height),B&&O(x,et,ut,Pt)):e.texImage2D(i.TEXTURE_2D,0,gt,et.width,et.height,0,ut,Pt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,gt,Lt[0].width,Lt[0].height,et.depth);for(let tt=0,pt=Lt.length;tt<pt;tt++)if(dt=Lt[tt],x.format!==_n)if(ut!==null)if(zt){if(B)if(x.layerUpdates.size>0){let vt=Cc(dt.width,dt.height,x.format,x.type);for(let it of x.layerUpdates){let Nt=dt.data.subarray(it*vt/dt.data.BYTES_PER_ELEMENT,(it+1)*vt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,it,dt.width,dt.height,1,ut,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,et.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,gt,dt.width,dt.height,et.depth,0,dt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,et.depth,ut,Pt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,gt,dt.width,dt.height,et.depth,0,ut,Pt,dt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{zt&&qt&&e.texStorage2D(i.TEXTURE_2D,ft,gt,Lt[0].width,Lt[0].height);for(let tt=0,pt=Lt.length;tt<pt;tt++)dt=Lt[tt],x.format!==_n?ut!==null?zt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,gt,dt.width,dt.height,0,dt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,Pt,dt.data):e.texImage2D(i.TEXTURE_2D,tt,gt,dt.width,dt.height,0,ut,Pt,dt.data)}else if(x.isDataArrayTexture)if(zt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,gt,et.width,et.height,et.depth),B)if(x.layerUpdates.size>0){let tt=Cc(et.width,et.height,x.format,x.type);for(let pt of x.layerUpdates){let vt=et.data.subarray(pt*tt/et.data.BYTES_PER_ELEMENT,(pt+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,et.width,et.height,1,ut,Pt,vt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,Pt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,et.width,et.height,et.depth,0,ut,Pt,et.data);else if(x.isData3DTexture)zt?(qt&&e.texStorage3D(i.TEXTURE_3D,ft,gt,et.width,et.height,et.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,Pt,et.data)):e.texImage3D(i.TEXTURE_3D,0,gt,et.width,et.height,et.depth,0,ut,Pt,et.data);else if(x.isFramebufferTexture){if(qt)if(zt)e.texStorage2D(i.TEXTURE_2D,ft,gt,et.width,et.height);else{let tt=et.width,pt=et.height;for(let vt=0;vt<ft;vt++)e.texImage2D(i.TEXTURE_2D,vt,gt,tt,pt,0,ut,Pt,null),tt>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),d.add(x),tt.onpaint=pt=>{let vt=pt.changedElements;for(let it of d)vt.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let vt=i.RGBA,it=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,it,Nt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(zt&&qt){let tt=re(Lt[0]);e.texStorage2D(i.TEXTURE_2D,ft,gt,tt.width,tt.height)}for(let tt=0,pt=Lt.length;tt<pt;tt++)dt=Lt[tt],zt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut,Pt,dt):e.texImage2D(i.TEXTURE_2D,tt,gt,ut,Pt,dt);x.generateMipmaps=!1}else if(zt){if(qt){let tt=re(et);e.texStorage2D(i.TEXTURE_2D,ft,gt,tt.width,tt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Pt,et)}else e.texImage2D(i.TEXTURE_2D,0,gt,ut,Pt,et);p(x)&&M(J),ht.__version=lt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ct(R,x,V){if(x.image.length!==6)return;let J=ot(R,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let lt=n.get(Q);if(Q.version!==lt.__version||J===!0){e.activeTexture(i.TEXTURE0+V);let ht=Qt.getPrimaries(Qt.workingColorSpace),j=x.colorSpace===ni?null:Qt.getPrimaries(x.colorSpace),et=x.colorSpace===ni||ht===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ut=x.isCompressedTexture||x.image[0].isCompressedTexture,Pt=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!ut&&!Pt?gt[it]=g(x.image[it],!0,s.maxCubemapSize):gt[it]=Pt?x.image[it].image:x.image[it],gt[it]=Be(x,gt[it]);let dt=gt[0],Lt=r.convert(x.format,x.colorSpace),zt=r.convert(x.type),qt=y(x.internalFormat,Lt,zt,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,ft=lt.__version===void 0||J===!0,tt=Q.dataReady,pt=E(x,dt);At(i.TEXTURE_CUBE_MAP,x);let vt;if(ut){B&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,qt,dt.width,dt.height);for(let it=0;it<6;it++){vt=gt[it].mipmaps;for(let Nt=0;Nt<vt.length;Nt++){let Ct=vt[Nt];x.format!==_n?Lt!==null?B?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,Ct.width,Ct.height,Lt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,qt,Ct.width,Ct.height,0,Ct.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,Ct.width,Ct.height,Lt,zt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,qt,Ct.width,Ct.height,0,Lt,zt,Ct.data)}}}else{if(vt=x.mipmaps,B&&ft){vt.length>0&&pt++;let it=re(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,qt,it.width,it.height)}for(let it=0;it<6;it++)if(Pt){B?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Lt,zt,gt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,gt[it].width,gt[it].height,0,Lt,zt,gt[it].data);for(let Nt=0;Nt<vt.length;Nt++){let ge=vt[Nt].image[it].image;B?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,ge.width,ge.height,Lt,zt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,qt,ge.width,ge.height,0,Lt,zt,ge.data)}}else{B?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Lt,zt,gt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,Lt,zt,gt[it]);for(let Nt=0;Nt<vt.length;Nt++){let Ct=vt[Nt];B?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,Lt,zt,Ct.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,qt,Lt,zt,Ct.image[it])}}}p(x)&&M(i.TEXTURE_CUBE_MAP),lt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function st(R,x,V,J,Q,lt){let ht=r.convert(V.format,V.colorSpace),j=r.convert(V.type),et=y(V.internalFormat,ht,j,V.normalized,V.colorSpace),ut=n.get(x),Pt=n.get(V);if(Pt.__renderTarget=x,!ut.__hasExternalTextures){let gt=Math.max(1,x.width>>lt),dt=Math.max(1,x.height>>lt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,lt,et,gt,dt,x.depth,0,ht,j,null):e.texImage2D(Q,lt,et,gt,dt,0,ht,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,Pt.__webglTexture,0,de(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,Pt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(R,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let J=x.depthTexture,Q=J&&J.isDepthTexture?J.type:null,lt=b(x.stencilBuffer,Q),ht=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(x),lt,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(x),lt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,lt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,R)}else{let J=x.textures;for(let Q=0;Q<J.length;Q++){let lt=J[Q],ht=r.convert(lt.format,lt.colorSpace),j=r.convert(lt.type),et=y(lt.internalFormat,ht,j,lt.normalized,lt.colorSpace);ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(x),et,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,x,V){let J=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),At(i.TEXTURE_CUBE_MAP,x.depthTexture);let ut=r.convert(x.depthTexture.format),Pt=r.convert(x.depthTexture.type),gt;x.depthTexture.format===Bn?gt=i.DEPTH_COMPONENT24:x.depthTexture.format===bi&&(gt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,gt,x.width,x.height,0,ut,Pt,null)}}else $(x.depthTexture,0);let lt=Q.__webglTexture,ht=de(x),j=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,et=x.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Bn)ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,et,j,lt,0);else if(x.depthTexture.format===bi)ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,et,j,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(R){let x=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=J}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let J=0;J<6;J++)Ut(x.__webglFramebuffer[J],R,J);else{let J=R.texture.mipmaps;J&&J.length>0?Ut(x.__webglFramebuffer[0],R,0):Ut(x.__webglFramebuffer,R,0)}else if(V){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=i.createRenderbuffer(),mt(x.__webglDepthbuffer[J],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,lt)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),mt(x.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(R,x,V){let J=n.get(R);x!==void 0&&st(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Rt(R)}function Xt(R){let x=R.texture,V=n.get(R),J=n.get(x);R.addEventListener("dispose",_);let Q=R.textures,lt=R.isWebGLCubeRenderTarget===!0,ht=Q.length>1;if(ht||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,a.memory.textures++),lt){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let et=0;et<x.mipmaps.length;et++)V.__webglFramebuffer[j][et]=i.createFramebuffer()}else V.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)V.__webglFramebuffer[j]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ht)for(let j=0,et=Q.length;j<et;j++){let ut=n.get(Q[j]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){let et=Q[j];V.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[j]);let ut=r.convert(et.format,et.colorSpace),Pt=r.convert(et.type),gt=y(et.internalFormat,ut,Pt,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),dt=de(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,V.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),At(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)st(V.__webglFramebuffer[j][et],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et);else st(V.__webglFramebuffer[j],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let j=0,et=Q.length;j<et;j++){let ut=Q[j],Pt=n.get(ut),gt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Pt.__webglTexture),At(gt,ut),st(V.__webglFramebuffer,R,ut,i.COLOR_ATTACHMENT0+j,gt,0),p(ut)&&M(gt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,J.__webglTexture),At(j,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)st(V.__webglFramebuffer[et],R,x,i.COLOR_ATTACHMENT0,j,et);else st(V.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,j,0);p(x)&&M(j),e.unbindTexture()}R.depthBuffer&&Rt(R)}function kt(R){let x=R.textures;for(let V=0,J=x.length;V<J;V++){let Q=x[V];if(p(Q)){let lt=w(R),ht=n.get(Q).__webglTexture;e.bindTexture(lt,ht),M(lt),e.unbindTexture()}}}let ee=[],ue=[];function Le(R){if(R.samples>0){if(ve(R)===!1){let x=R.textures,V=R.width,J=R.height,Q=i.COLOR_BUFFER_BIT,lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(R),j=x.length>1;if(j)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let et=R.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let Pt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,Q,i.NEAREST),l===!0&&(ee.length=0,ue.length=0,ee.push(i.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ee.push(lt),ue.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let Pt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function de(R){return Math.min(s.maxSamples,R.samples)}function ve(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Be(R,x){let V=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==sr&&V!==ni&&(Qt.getTransfer(V)===he?(J!==_n||Q!==sn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",V)),x}function re(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=Ft,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function H_(i,t){function e(n,s=ni){let r,a=Qt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mc)return i.BYTE;if(n===gc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===yc)return i.ALPHA;if(n===vc)return i.RGB;if(n===_n)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===Ur||n===Fr||n===Br||n===Or)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Po||n===Lo||n===Do||n===No||n===zr||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Po)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zr)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Bo||n===Oo||n===zo||n===Ho||n===Go||n===Vo||n===ko||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===$o||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===tl||n===Hr||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:G_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jc=class extends On{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,v=typeof XRWebGLBinding!="undefined",g=new Zc,p={},M=e.getContextAttributes(),w=null,y=null,b=[],E=[],A=new Mt,_=null,T=null,C=new We;C.viewport=new be;let I=new We;I.viewport=new be;let L=[C,I],G=new fo,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let O=b[Z];return O===void 0&&(O=new ys,b[Z]=O),O.getTargetRaySpace()},this.getControllerGrip=function(Z){let O=b[Z];return O===void 0&&(O=new ys,b[Z]=O),O.getGripSpace()},this.getHand=function(Z){let O=b[Z];return O===void 0&&(O=new ys,b[Z]=O),O.getHandSpace()};function W(Z){let O=E.indexOf(Z.inputSource);if(O===-1)return;let nt=b[O];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,c||a),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<b.length;Z++){let O=E[Z];O!==null&&(E[Z]=null,b[Z].disconnect(O))}D=null,k=null,g.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,y=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ct=null,st=null;M.depth&&(st=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=M.stencil?bi:Bn,ct=M.stencil?Is:Cn);let mt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(mt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new en(u.textureWidth,u.textureHeight,{format:_n,type:sn,depthTexture:new gi(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new en(f.framebufferWidth,f.framebufferHeight,{format:_n,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(Z){for(let O=0;O<Z.removed.length;O++){let nt=Z.removed[O],ct=E.indexOf(nt);ct>=0&&(E[ct]=null,b[ct].disconnect(nt))}for(let O=0;O<Z.added.length;O++){let nt=Z.added[O],ct=E.indexOf(nt);if(ct===-1){for(let mt=0;mt<b.length;mt++)if(mt>=E.length){E.push(nt),ct=mt;break}else if(E[mt]===null){E[mt]=nt,ct=mt;break}if(ct===-1)break}let st=b[ct];st&&st.connect(nt)}}let N=new P,H=new P;function X(Z,O,nt){N.setFromMatrixPosition(O.matrixWorld),H.setFromMatrixPosition(nt.matrixWorld);let ct=N.distanceTo(H),st=O.projectionMatrix.elements,mt=nt.projectionMatrix.elements,Ut=st[14]/(st[10]-1),Rt=st[14]/(st[10]+1),Ft=(st[9]+1)/st[5],Xt=(st[9]-1)/st[5],kt=(st[8]-1)/st[0],ee=(mt[8]+1)/mt[0],ue=Ut*kt,Le=Ut*ee,de=ct/(-kt+ee),ve=de*-kt;if(O.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ve),Z.translateZ(de),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),st[10]===-1)Z.projectionMatrix.copy(O.projectionMatrix),Z.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let F=Ut+de,Be=Rt+de,re=ue-ve,R=Le+(ct-ve),x=Ft*Rt/Be*F,V=Xt*Rt/Be*F;Z.projectionMatrix.makePerspective(re,R,x,V,F,Be),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function rt(Z,O){O===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(O.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let O=Z.near,nt=Z.far;g.texture!==null&&(g.depthNear>0&&(O=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),G.near=I.near=C.near=O,G.far=I.far=C.far=nt,(D!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,k=G.far),G.layers.mask=Z.layers.mask|6,C.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let ct=Z.parent,st=G.cameras;rt(G,ct);for(let mt=0;mt<st.length;mt++)rt(st[mt],ct);st.length===2?X(G,C,I):G.projectionMatrix.copy(C.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),at(Z,G,ct)};function at(Z,O,nt){nt===null?Z.matrix.copy(O.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(O.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(O.projectionMatrix),Z.projectionMatrixInverse.copy(O.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_s*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let Dt=null;function At(Z,O){if(h=O.getViewerPose(c||a),m=O,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ct=!1;nt.length!==G.cameras.length&&(G.cameras.length=0,ct=!0);for(let Rt=0;Rt<nt.length;Rt++){let Ft=nt[Rt],Xt=null;if(f!==null)Xt=f.getViewport(Ft);else{let ee=d.getViewSubImage(u,Ft);Xt=ee.viewport,Rt===0&&(t.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(y))}let kt=L[Rt];kt===void 0&&(kt=new We,kt.layers.enable(Rt),kt.viewport=new be,L[Rt]=kt),kt.matrix.fromArray(Ft.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ft.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Rt===0&&(G.matrix.copy(kt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ct===!0&&G.cameras.push(kt)}let st=s.enabledFeatures;if(st&&st.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Rt=d.getDepthInformation(nt[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(Rt,s.renderState)}if(st&&st.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Rt=0;Rt<nt.length;Rt++){let Ft=nt[Rt].camera;if(Ft){let Xt=p[Ft];Xt||(Xt=new yr,p[Ft]=Xt);let kt=d.getCameraImage(Ft);Xt.sourceTexture=kt}}}}for(let nt=0;nt<b.length;nt++){let ct=E[nt],st=b[nt];ct!==null&&st!==void 0&&st.update(ct,O,c||a)}Dt&&Dt(Z,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),m=null}let ot=new fd;ot.setAnimationLoop(At),this.setAnimationLoop=function(Z){Dt=Z},this.dispose=function(){}}},k_=new ne,yd=new Gt;yd.set(-1,0,0,0,1,0,0,0,1);function W_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ne&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ne&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),w=M.envMap,y=M.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let E=b.program;n.uniformBlockBinding(y,E)}function c(y,b){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",M));let A=b.program;n.updateUBOMapping(y,A);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let b=d();y.__bindingPointIndex=b;let E=i.createBuffer(),A=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],E=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,T=E.length;_<T;_++){let C=E[_];if(Array.isArray(C))for(let I=0,L=C.length;I<L;I++)f(C[I],_,I,A);else f(C,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,E,A){if(v(y,b,E,A)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let L=T[I],G=p(L);m(L,y.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function m(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function v(y,b,E,A){let _=y.value,T=b+"_"+E;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let C=A[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(y){let b=y.uniforms,E=0,A=16;for(let T=0,C=b.length;T<C;T++){let I=Array.isArray(b[T])?b[T]:[b[T]];for(let L=0,G=I.length;L<G;L++){let D=I[L],k=Array.isArray(D.value)?D.value:[D.value];for(let W=0,z=k.length;W<z;W++){let $=k[W],N=p($),H=E%A,X=H%N.boundary,rt=H+X;E+=X,rt!==0&&A-rt<N.storage&&(E+=A-rt),D.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=N.storage}}}let _=E%A;return _>0&&(E+=A-_),y.__size=E,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){let b=y.target;b.removeEventListener("dispose",M);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function Y_(){return kn===null&&(kn=new mr(q_,16,16,Ei,In),kn.name="DFG_LUT",kn.minFilter=He,kn.magFilter=He,kn.wrapS=Un,kn.wrapT=Un,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var cl=class{constructor(t={}){let{canvas:e=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=f,g=new Set([To,Eo,bo]),p=new Set([sn,Cn,Cs,Is,vo,Mo]),M=new Uint32Array(4),w=new Int32Array(4),y=new P,b=null,E=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,L=null,G=null,D=null,k=null;this._outputColorSpace=Ie;let W=0,z=0,$=null,N=-1,H=null,X=new be,rt=new be,at=null,Dt=new Ot(0),At=0,ot=e.width,Z=e.height,O=1,nt=null,ct=null,st=new be(0,0,ot,Z),mt=new be(0,0,ot,Z),Ut=!1,Rt=new bs,Ft=!1,Xt=!1,kt=new ne,ee=new P,ue=new be,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function ve(){return $===null?O:1}let F=n;function Be(S,U){return e.getContext(S,U)}let re,R,x,V,J,Q,lt,ht,j,et,ut,Pt,gt,dt,Lt,zt,qt,B,ft,tt,pt,vt,it;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),F===null){let U="webgl2";if(F=Be(U,S),F===null)throw Be(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(S){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Ht("WebGLRenderer: "+S.message),S}function Nt(){re=new tg(F),re.init(),pt=new H_(F,re),R=new W0(F,re,t,pt),x=new O_(F,re),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),G=F.createFramebuffer(),D=F.createFramebuffer(),k=F.createFramebuffer(),V=new ig(F),J=new E_,Q=new z_(F,re,x,J,R,pt,V),lt=new j0(C),ht=new rp(F),vt=new V0(F,ht),j=new eg(F,ht,V,vt),et=new rg(F,j,ht,vt,V),B=new sg(F,R,Q),Lt=new X0(J),ut=new b_(C,lt,re,R,vt,Lt),Pt=new W_(C,J),gt=new w_,dt=new L_(re),qt=new G0(C,lt,x,et,m,l),zt=new B_(C,et,R),it=new X_(F,V,R,x),ft=new k0(F,re,V),tt=new ng(F,re,V),V.programs=ut.programs,C.capabilities=R,C.extensions=re,C.properties=J,C.renderLists=gt,C.shadowMap=zt,C.state=x,C.info=V}v!==sn&&(T=new og(v,e.width,e.height,o,s,r));let Ct=new Jc(C,F);this.xr=Ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(ot,Z,!1))},this.getSize=function(S){return S.set(ot,Z)},this.setSize=function(S,U,K=!0){if(Ct.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=S,Z=U,e.width=Math.floor(S*O),e.height=Math.floor(U*O),K===!0&&(e.style.width=S+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(ot*O,Z*O).floor()},this.setDrawingBufferSize=function(S,U,K){ot=S,Z=U,O=K,e.width=Math.floor(S*K),e.height=Math.floor(U*K),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===sn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(X)},this.getViewport=function(S){return S.copy(st)},this.setViewport=function(S,U,K,q){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,U,K,q),x.viewport(X.copy(st).multiplyScalar(O).round())},this.getScissor=function(S){return S.copy(mt)},this.setScissor=function(S,U,K,q){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,U,K,q),x.scissor(rt.copy(mt).multiplyScalar(O).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(S){x.setScissorTest(Ut=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){ct=S},this.getClearColor=function(S){return S.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,K=!0){let q=0;if(S){let Y=!1;if($!==null){let yt=$.texture.format;Y=g.has(yt)}if(Y){let yt=$.texture.type,Et=p.has(yt),xt=qt.getClearColor(),Tt=qt.getClearAlpha(),It=xt.r,Yt=xt.g,Kt=xt.b;Et?(M[0]=It,M[1]=Yt,M[2]=Kt,M[3]=Tt,F.clearBufferuiv(F.COLOR,0,M)):(w[0]=It,w[1]=Yt,w[2]=Kt,w[3]=Tt,F.clearBufferiv(F.COLOR,0,w))}else q|=F.COLOR_BUFFER_BIT}U&&(q|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),qt.dispose(),gt.dispose(),dt.dispose(),J.dispose(),lt.dispose(),et.dispose(),vt.dispose(),it.dispose(),ut.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ph),Ct.removeEventListener("sessionend",mh),Ai.stop()};function ge(S){S.preventDefault(),or("WebGLRenderer: Context Lost."),I=!0}function le(){or("WebGLRenderer: Context Restored."),I=!1;let S=V.autoReset,U=zt.enabled,K=zt.autoUpdate,q=zt.needsUpdate,Y=zt.type;Nt(),V.autoReset=S,zt.enabled=U,zt.autoUpdate=K,zt.needsUpdate=q,zt.type=Y}function Mn(S){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ln(S){let U=S.target;U.removeEventListener("dispose",Ln),Hd(U)}function Hd(S){Gd(S),J.remove(S)}function Gd(S){let U=J.get(S).programs;U!==void 0&&(U.forEach(function(K){ut.releaseProgram(K)}),S.isShaderMaterial&&ut.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,K,q,Y,yt){U===null&&(U=Le);let Et=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,xt=Wd(S,U,K,q,Y);x.setMaterial(q,Et);let Tt=K.index,It=1;if(q.wireframe===!0){if(Tt=j.getWireframeAttribute(K),Tt===void 0)return;It=2}let Yt=K.drawRange,Kt=K.attributes.position,wt=Yt.start*It,ce=(Yt.start+Yt.count)*It;yt!==null&&(wt=Math.max(wt,yt.start*It),ce=Math.min(ce,(yt.start+yt.count)*It)),Tt!==null?(wt=Math.max(wt,0),ce=Math.min(ce,Tt.count)):Kt!=null&&(wt=Math.max(wt,0),ce=Math.min(ce,Kt.count));let Re=ce-wt;if(Re<0||Re===1/0)return;vt.setup(Y,q,xt,K,Tt);let Me,me=ft;if(Tt!==null&&(Me=ht.get(Tt),me=tt,me.setIndex(Me)),Y.isMesh)q.wireframe===!0?(x.setLineWidth(q.wireframeLinewidth*ve()),me.setMode(F.LINES)):me.setMode(F.TRIANGLES);else if(Y.isLine){let Ge=q.linewidth;Ge===void 0&&(Ge=1),x.setLineWidth(Ge*ve()),Y.isLineSegments?me.setMode(F.LINES):Y.isLineLoop?me.setMode(F.LINE_LOOP):me.setMode(F.LINE_STRIP)}else Y.isPoints?me.setMode(F.POINTS):Y.isSprite&&me.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(re.get("WEBGL_multi_draw"))me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ge=Y._multiDrawStarts,bt=Y._multiDrawCounts,Je=Y._multiDrawCount,ie=Tt?ht.get(Tt).bytesPerElement:1,dn=J.get(q).currentProgram.getUniforms();for(let Dn=0;Dn<Je;Dn++)dn.setValue(F,"_gl_DrawID",Dn),me.render(Ge[Dn]/ie,bt[Dn])}else if(Y.isInstancedMesh)me.renderInstances(wt,Re,Y.count);else if(K.isInstancedBufferGeometry){let Ge=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,bt=Math.min(K.instanceCount,Ge);me.renderInstances(wt,Re,bt)}else me.render(wt,Re)};function fh(S,U,K,q){L!==null&&S.isNodeMaterial&&L.setObject(q,S),Ft===!0&&Lt.setState(S,K,!1),S.transparent===!0&&S.side===qe&&S.forceSinglePass===!1?(S.side=Ne,S.needsUpdate=!0,$r(S,U,q),S.side=Gn,S.needsUpdate=!0,$r(S,U,q),S.side=qe):$r(S,U,q)}this.compile=function(S,U,K=null){K===null&&(K=S),L!==null&&L.renderStart(S,U,K),E=dt.get(K),E.init(U),_.push(E),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),S!==K&&S.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),Xt=this.localClippingEnabled,Ft=Lt.init(this.clippingPlanes,Xt),Ft===!0&&Lt.setGlobalState(this.clippingPlanes,U),L!==null&&zt.render(E.state.shadowsArray,K,U);let q=new Set;return S.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let yt=Y.material;if(yt)if(Array.isArray(yt))for(let Et=0;Et<yt.length;Et++){let xt=yt[Et];fh(xt,K,U,Y),q.add(xt)}else fh(yt,K,U,Y),q.add(yt)}),E=_.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(S,U,K=null){let q=this.compile(S,U,K);return new Promise(Y=>{function yt(){if(q.forEach(function(Et){let Tt=J.get(Et).currentProgram;(Tt===void 0||Tt.isReady())&&q.delete(Et)}),q.size===0){Y(S);return}setTimeout(yt,10)}re.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let vl=null;function Vd(S){vl&&vl(S)}function ph(){Ai.stop()}function mh(){Ai.start()}let Ai=new fd;Ai.setAnimationLoop(Vd),typeof self!="undefined"&&Ai.setContext(self),this.setAnimationLoop=function(S){vl=S,Ct.setAnimationLoop(S),S===null?Ai.stop():Ai.start()},Ct.addEventListener("sessionstart",ph),Ct.addEventListener("sessionend",mh),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(S,U);let K=Ct.enabled===!0&&Ct.isPresenting===!0,q=T!==null&&($===null||K)&&T.begin(C,$);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(U),U=Ct.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,U,$),E=dt.get(S,_.length),E.init(U),E.state.textureUnits=Q.getTextureUnits(),_.push(E),kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Rt.setFromProjectionMatrix(kt,An,U.reversedDepth),Xt=this.localClippingEnabled,Ft=Lt.init(this.clippingPlanes,Xt),b=gt.get(S,A.length),b.init(),A.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&Ml(Et,U,-1/0,C.sortObjects)}Ml(S,U,0,C.sortObjects),b.finish(),L!==null&&L.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(nt,ct),de=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,de&&qt.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ft===!0&&Lt.beginShadows();let Y=E.state.shadowsArray;if(zt.render(Y,S,U),Ft===!0&&Lt.endShadows(),(q&&T.hasRenderPass())===!1){let Et=b.opaque,xt=b.transmissive;if(E.setupLights(),U.isArrayCamera){let Tt=U.cameras;if(xt.length>0)for(let It=0,Yt=Tt.length;It<Yt;It++){let Kt=Tt[It];_h(Et,xt,S,Kt)}de&&qt.render(S);for(let It=0,Yt=Tt.length;It<Yt;It++){let Kt=Tt[It];gh(b,S,Kt,Kt.viewport)}}else xt.length>0&&_h(Et,xt,S,U),de&&qt.render(S),gh(b,S,U)}$!==null&&z===0&&(Q.updateMultisampleRenderTarget($),Q.updateRenderTargetMipmap($)),q&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,U),vt.resetDefaultState(),N=-1,H=null,_.pop(),_.length>0?(E=_[_.length-1],Q.setTextureUnits(E.state.textureUnits),Ft===!0&&Lt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,L!==null&&L.renderEnd()};function Ml(S,U,K,q){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Rt)){q&&ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(kt);let Et=et.update(S),xt=S.material;xt.visible&&b.push(S,Et,xt,K,ue.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Rt))){let Et=et.update(S),xt=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ue.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ue.copy(Et.boundingSphere.center)),ue.applyMatrix4(S.matrixWorld).applyMatrix4(kt)),Array.isArray(xt)){let Tt=Et.groups;for(let It=0,Yt=Tt.length;It<Yt;It++){let Kt=Tt[It],wt=xt[Kt.materialIndex];wt&&wt.visible&&b.push(S,Et,wt,K,ue.z,Kt,U)}}else xt.visible&&b.push(S,Et,xt,K,ue.z,null,U)}}let yt=S.children;for(let Et=0,xt=yt.length;Et<xt;Et++)Ml(yt[Et],U,K,q)}function gh(S,U,K,q){let{opaque:Y,transmissive:yt,transparent:Et}=S;E.setupLightsView(K),Ft===!0&&Lt.setGlobalState(C.clippingPlanes,K),q&&x.viewport(X.copy(q)),Y.length>0&&Kr(Y,U,K),yt.length>0&&Kr(yt,U,K),Et.length>0&&Kr(Et,U,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _h(S,U,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){let wt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new en(1,1,{generateMipmaps:!0,type:wt?In:sn,minFilter:Si,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let yt=E.state.transmissionRenderTarget[q.id],Et=q.viewport||X;yt.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let xt=C.getRenderTarget(),Tt=C.getActiveCubeFace(),It=C.getActiveMipmapLevel();C.setRenderTarget(yt),C.getClearColor(Dt),At=C.getClearAlpha(),At<1&&C.setClearColor(16777215,.5),C.clear(),de&&qt.render(K);let Yt=C.toneMapping;C.toneMapping=Rn;let Kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),Ft===!0&&Lt.setGlobalState(C.clippingPlanes,q),Kr(S,K,q),Q.updateMultisampleRenderTarget(yt),Q.updateRenderTargetMipmap(yt),re.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ce=0,Re=U.length;ce<Re;ce++){let Me=U[ce],{object:me,geometry:Ge,material:bt,group:Je}=Me;if(bt.side===qe&&me.layers.test(q.layers)){let ie=bt.side;bt.side=Ne,bt.needsUpdate=!0,xh(me,K,q,Ge,bt,Je),bt.side=ie,bt.needsUpdate=!0,wt=!0}}wt===!0&&(Q.updateMultisampleRenderTarget(yt),Q.updateRenderTargetMipmap(yt))}C.setRenderTarget(xt,Tt,It),C.setClearColor(Dt,At),Kt!==void 0&&(q.viewport=Kt),C.toneMapping=Yt}function Kr(S,U,K){let q=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,yt=S.length;Y<yt;Y++){let Et=S[Y],{object:xt,geometry:Tt,group:It}=Et,Yt=Et.material;Yt.allowOverride===!0&&q!==null&&(Yt=q),xt.layers.test(K.layers)&&xh(xt,U,K,Tt,Yt,It)}}function xh(S,U,K,q,Y,yt){L!==null&&Y.isNodeMaterial&&L.setObject(S,Y),S.onBeforeRender(C,U,K,q,Y,yt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(C,U,K,q,S,yt),Y.transparent===!0&&Y.side===qe&&Y.forceSinglePass===!1?(Y.side=Ne,Y.needsUpdate=!0,C.renderBufferDirect(K,U,q,Y,S,yt),Y.side=Gn,Y.needsUpdate=!0,C.renderBufferDirect(K,U,q,Y,S,yt),Y.side=qe):C.renderBufferDirect(K,U,q,Y,S,yt),S.onAfterRender(C,U,K,q,Y,yt)}function $r(S,U,K){U.isScene!==!0&&(U=Le);let q=J.get(S),Y=E.state.lights,yt=E.state.shadowsArray,Et=Y.state.version,xt=ut.getParameters(S,Y.state,yt,U,K,E.state.lightProbeGridArray),Tt=ut.getProgramCacheKey(xt),It=q.programs;q.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,q.fog=U.fog;let Yt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;q.envMap=lt.get(S.envMap||q.environment,Yt),q.envMapRotation=q.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",Ln),It=new Map,q.programs=It);let Kt=It.get(Tt);if(Kt!==void 0){if(q.currentProgram===Kt&&q.lightsStateVersion===Et)return vh(S,xt),Kt}else xt.uniforms=ut.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,K,xt),S.onBeforeCompile(xt,C),Kt=ut.acquireProgram(xt,Tt),It.set(Tt,Kt),q.uniforms=xt.uniforms;let wt=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=Lt.uniform),vh(S,xt),q.needsLights=qd(S),q.lightsStateVersion=Et,q.needsLights&&(wt.ambientLightColor.value=Y.state.ambient,wt.lightProbe.value=Y.state.probe,wt.sunLights.value=Y.state.sun,wt.sunLightShadows.value=Y.state.sunShadow,wt.directionalLights.value=Y.state.directional,wt.directionalLightShadows.value=Y.state.directionalShadow,wt.spotLights.value=Y.state.spot,wt.spotLightShadows.value=Y.state.spotShadow,wt.rectAreaLights.value=Y.state.rectArea,wt.ltc_1.value=Y.state.rectAreaLTC1,wt.ltc_2.value=Y.state.rectAreaLTC2,wt.pointLights.value=Y.state.point,wt.pointLightShadows.value=Y.state.pointShadow,wt.hemisphereLights.value=Y.state.hemi,wt.sunShadowMatrix.value=Y.state.sunShadowMatrix,wt.sunShadowCascade.value=Y.state.sunShadowCascade,wt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,wt.spotLightMatrix.value=Y.state.spotLightMatrix,wt.spotLightMap.value=Y.state.spotLightMap,wt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=Kt,q.uniformsList=null,Kt}function yh(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Ds.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function vh(S,U){let K=J.get(S);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function kd(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let K=0,q=S.length;K<q;K++){let Y=S[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(y))return Y}return null}function Wd(S,U,K,q,Y){U.isScene!==!0&&(U=Le),Q.resetTextureUnits();let yt=U.fog,Et=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?U.environment:null,xt=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Qt.workingColorSpace,Tt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,It=lt.get(q.envMap||Et,Tt),Yt=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Kt=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!K.morphAttributes.position,ce=!!K.morphAttributes.normal,Re=!!K.morphAttributes.color,Me=Rn;q.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Me=C.toneMapping);let me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ge=me!==void 0?me.length:0,bt=J.get(q),Je=E.state.lights;if(Ft===!0&&(Xt===!0||S!==H)){let _e=S===H&&q.id===N;Lt.setState(q,S,_e)}let ie=!1;q.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Je.state.version||bt.outputColorSpace!==xt||Y.isBatchedMesh&&bt.batching===!1||!Y.isBatchedMesh&&bt.batching===!0||Y.isBatchedMesh&&bt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&bt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&bt.instancing===!1||!Y.isInstancedMesh&&bt.instancing===!0||Y.isSkinnedMesh&&bt.skinning===!1||!Y.isSkinnedMesh&&bt.skinning===!0||Y.isInstancedMesh&&bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&bt.instancingMorph===!1&&Y.morphTexture!==null||bt.envMap!==It||q.fog===!0&&bt.fog!==yt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Lt.numPlanes||bt.numIntersection!==Lt.numIntersection)||bt.vertexAlphas!==Yt||bt.vertexTangents!==Kt||bt.morphTargets!==wt||bt.morphNormals!==ce||bt.morphColors!==Re||bt.toneMapping!==Me||bt.morphTargetsCount!==Ge||!!bt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,bt.__version=q.version);let dn=bt.currentProgram;ie===!0&&(dn=$r(q,U,Y),L&&q.isNodeMaterial&&L.onUpdateProgram(q,dn,bt));let Dn=!1,ai=!1,Yi=!1,pe=dn.getUniforms(),Ae=bt.uniforms;if(x.useProgram(dn.program)&&(Dn=!0,ai=!0,Yi=!0),q.id!==N&&(N=q.id,ai=!0),bt.needsLights){let _e=kd(E.state.lightProbeGridArray,Y);bt.lightProbeGrid!==_e&&(bt.lightProbeGrid=_e,ai=!0)}if(Dn||H!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(F,"projectionMatrix",S.projectionMatrix),pe.setValue(F,"viewMatrix",S.matrixWorldInverse);let li=pe.map.cameraPosition;li!==void 0&&li.setValue(F,ee.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pe.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),H!==S&&(H=S,ai=!0,Yi=!0)}if(bt.needsLights&&(Je.state.sunShadowMap.length>0&&pe.setValue(F,"sunShadowMap",Je.state.sunShadowMap,Q),Je.state.directionalShadowMap.length>0&&pe.setValue(F,"directionalShadowMap",Je.state.directionalShadowMap,Q),Je.state.spotShadowMap.length>0&&pe.setValue(F,"spotShadowMap",Je.state.spotShadowMap,Q),Je.state.pointShadowMap.length>0&&pe.setValue(F,"pointShadowMap",Je.state.pointShadowMap,Q)),Y.isSkinnedMesh){pe.setOptional(F,Y,"bindMatrix"),pe.setOptional(F,Y,"bindMatrixInverse");let _e=Y.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),pe.setValue(F,"boneTexture",_e.boneTexture,Q))}Y.isBatchedMesh&&(pe.setOptional(F,Y,"batchingTexture"),pe.setValue(F,"batchingTexture",Y._matricesTexture,Q),pe.setOptional(F,Y,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",Y._indirectTexture,Q),pe.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",Y._colorsTexture,Q));let oi=K.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&B.update(Y,K,dn),(ai||bt.receiveShadow!==Y.receiveShadow)&&(bt.receiveShadow=Y.receiveShadow,pe.setValue(F,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&U.environment!==null&&(Ae.envMapIntensity.value=U.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=Y_()),ai){if(pe.setValue(F,"toneMappingExposure",C.toneMappingExposure),bt.needsLights&&Xd(Ae,Yi),yt&&q.fog===!0&&Pt.refreshFogUniforms(Ae,yt),Pt.refreshMaterialUniforms(Ae,q,O,Z,E.state.transmissionRenderTarget[S.id]),bt.needsLights&&bt.lightProbeGrid){let _e=bt.lightProbeGrid;Ae.probesSH.value=_e.texture,Ae.probesMin.value.copy(_e.boundingBox.min),Ae.probesMax.value.copy(_e.boundingBox.max),Ae.probesResolution.value.copy(_e.resolution)}Ds.upload(F,yh(bt),Ae,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ds.upload(F,yh(bt),Ae,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pe.setValue(F,"center",Y.center),pe.setValue(F,"modelViewMatrix",Y.modelViewMatrix),pe.setValue(F,"normalMatrix",Y.normalMatrix),pe.setValue(F,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let _e=q.uniformsGroups;for(let li=0,Zi=_e.length;li<Zi;li++){let Sh=_e[li];it.update(Sh,dn),it.bind(Sh,dn)}}return dn}function Xd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(S,U,K){let q=J.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),J.get(S.texture).__webglTexture=U,J.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let K=J.get(S);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,K=0){$=S,W=U,z=K;let q=null,Y=!1,yt=!1;if(S){let xt=J.get(S);if(xt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,xt.__webglFramebuffer),X.copy(S.viewport),rt.copy(S.scissor),at=S.scissorTest,x.viewport(X),x.scissor(rt),x.setScissorTest(at),N=-1;return}else if(xt.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(xt.__hasExternalTextures)Q.rebindTextures(S,J.get(S.texture).__webglTexture,J.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Yt=S.depthTexture;if(xt.__boundDepthTexture!==Yt){if(Yt!==null&&J.has(Yt)&&(S.width!==Yt.image.width||S.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}let Tt=S.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(yt=!0);let It=J.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[U])?q=It[U][K]:q=It[U],Y=!0):S.samples>0&&Q.useMultisampledRTT(S)===!1?q=J.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?q=It[K]:q=It,X.copy(S.viewport),rt.copy(S.scissor),at=S.scissorTest}else X.copy(st).multiplyScalar(O).floor(),rt.copy(mt).multiplyScalar(O).floor(),at=Ut;if(K!==0&&(q=G),x.bindFramebuffer(F.FRAMEBUFFER,q)&&x.drawBuffers(S,q),x.viewport(X),x.scissor(rt),x.setScissorTest(at),Y){let xt=J.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,K)}else if(yt){let xt=U;for(let Tt=0;Tt<S.textures.length;Tt++){let It=J.get(S.textures[Tt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Tt,It.__webglTexture,K,xt)}}else if(S!==null&&K!==0){let xt=J.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,K)}N=-1};function Mh(S){let U=J.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=R.textureFormatReadable(S.format),U.__typeReadable=R.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,K,q,Y,yt,Et,xt=0){if(!(S&&S.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt){x.bindFramebuffer(F.FRAMEBUFFER,Tt);try{let It=S.textures[xt],Yt=It.format,Kt=It.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xt);let wt=Mh(It);if(wt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-q&&K>=0&&K<=S.height-Y&&F.readPixels(U,K,q,Y,pt.convert(Yt),pt.convert(Kt),yt)}finally{let It=$!==null?J.get($).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,U,K,q,Y,yt,Et,xt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt)if(U>=0&&U<=S.width-q&&K>=0&&K<=S.height-Y){x.bindFramebuffer(F.FRAMEBUFFER,Tt);let It=S.textures[xt],Yt=It.format,Kt=It.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xt);let wt=Mh(It);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,yt.byteLength,F.STREAM_READ),F.readPixels(U,K,q,Y,pt.convert(Yt),pt.convert(Kt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Re=$!==null?J.get($).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Re);let Me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zu(F,Me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,yt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ce),F.deleteSync(Me),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,K=0){let q=Math.pow(2,-K),Y=Math.floor(S.image.width*q),yt=Math.floor(S.image.height*q),Et=U!==null?U.x:0,xt=U!==null?U.y:0;Q.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Et,xt,Y,yt),x.unbindTexture()},this.copyTextureToTexture=function(S,U,K=null,q=null,Y=0,yt=0){let Et,xt,Tt,It,Yt,Kt,wt,ce,Re,Me=S.isCompressedTexture?S.mipmaps[yt]:S.image;if(K!==null)Et=K.max.x-K.min.x,xt=K.max.y-K.min.y,Tt=K.isBox3?K.max.z-K.min.z:1,It=K.min.x,Yt=K.min.y,Kt=K.isBox3?K.min.z:0;else{let Ae=Math.pow(2,-Y);Et=Math.floor(Me.width*Ae),xt=Math.floor(Me.height*Ae),S.isDataArrayTexture?Tt=Me.depth:S.isData3DTexture?Tt=Math.floor(Me.depth*Ae):Tt=1,It=0,Yt=0,Kt=0}q!==null?(wt=q.x,ce=q.y,Re=q.z):(wt=0,ce=0,Re=0);let me=pt.convert(U.format),Ge=pt.convert(U.type),bt;U.isData3DTexture?(Q.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),bt=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Je=x.getParameter(F.UNPACK_ROW_LENGTH),ie=x.getParameter(F.UNPACK_IMAGE_HEIGHT),dn=x.getParameter(F.UNPACK_SKIP_PIXELS),Dn=x.getParameter(F.UNPACK_SKIP_ROWS),ai=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Me.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,It),x.pixelStorei(F.UNPACK_SKIP_ROWS,Yt),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt);let Yi=S.isDataArrayTexture||S.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let Ae=J.get(S),oi=J.get(U),_e=J.get(Ae.__renderTarget),li=J.get(oi.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,_e.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Zi=0;Zi<Tt;Zi++)Yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,J.get(S).__webglTexture,Y,Kt+Zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,J.get(U).__webglTexture,yt,Re+Zi)),F.blitFramebuffer(It,Yt,Et,xt,wt,ce,Et,xt,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||S.isRenderTargetTexture||J.has(S)){let Ae=J.get(S),oi=J.get(U);x.bindFramebuffer(F.READ_FRAMEBUFFER,D),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let _e=0;_e<Tt;_e++)Yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,Y,Kt+_e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ae.__webglTexture,Y),pe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oi.__webglTexture,yt,Re+_e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,oi.__webglTexture,yt),Y!==0?F.blitFramebuffer(It,Yt,Et,xt,wt,ce,Et,xt,F.COLOR_BUFFER_BIT,F.NEAREST):pe?F.copyTexSubImage3D(bt,yt,wt,ce,Re+_e,It,Yt,Et,xt):F.copyTexSubImage2D(bt,yt,wt,ce,It,Yt,Et,xt);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(bt,yt,wt,ce,Re,Et,xt,Tt,me,Ge,Me.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,yt,wt,ce,Re,Et,xt,Tt,me,Me.data):F.texSubImage3D(bt,yt,wt,ce,Re,Et,xt,Tt,me,Ge,Me):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,yt,wt,ce,Et,xt,me,Ge,Me.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,yt,wt,ce,Me.width,Me.height,me,Me.data):F.texSubImage2D(F.TEXTURE_2D,yt,wt,ce,Et,xt,me,Ge,Me);x.pixelStorei(F.UNPACK_ROW_LENGTH,Je),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie),x.pixelStorei(F.UNPACK_SKIP_PIXELS,dn),x.pixelStorei(F.UNPACK_SKIP_ROWS,Dn),x.pixelStorei(F.UNPACK_SKIP_IMAGES,ai),yt===0&&U.generateMipmaps&&F.generateMipmap(bt),x.unbindTexture()},this.initRenderTarget=function(S){J.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){W=0,z=0,$=null,x.reset(),vt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var rn=(i,t,e=0)=>new P(i,t,e),$c=i=>Math.max(0,i),$t=(i,t,e)=>i+(t-i)*e;function Us(i,t){let e=[],n=i.length-1;for(let s=0;s<t;s++){let r=s/(t-1)*n,a=Math.min(n-1,Math.floor(r)),o=r-a,l=i[Math.max(0,a-1)],c=i[a],h=i[a+1],d=i[Math.min(n,a+2)],u=(m,v,g,p)=>.5*(2*v+(-m+g)*o+(2*m-5*v+4*g-p)*o*o+(-m+3*v-3*g+p)*o*o*o),f=m=>Math.max(1e-4,u(l[m],c[m],h[m],d[m]));e.push({x:u(l.x,c.x,h.x,d.x),y:u(l.y,c.y,h.y,d.y),z:u(l.z||0,c.z||0,h.z||0,d.z||0),rw:f("rw"),rh:f("rh"),k:r})}return e}var ii=class{constructor(t,e,n=1){this.n=t,this.r=e,this.count=n,this.painted=[];let s=t*(e+1),r=s*n,a=new se;this.N1=s,this.P=new Float32Array(r*3),this.Nn=new Float32Array(r*3),this.U=new Float32Array(r*2),a.setAttribute("position",new ae(this.P,3)),a.setAttribute("normal",new ae(this.Nn,3)),a.setAttribute("uv",new ae(this.U,2)),a.setAttribute("color",new ae(new Float32Array(r*3),3)),a.setAttribute("fl",new ae(new Float32Array(r),1)),a.attributes.position.setUsage(sl),a.attributes.normal.setUsage(sl);let o=[];for(let l=0;l<n;l++)for(let c=0;c<t-1;c++)for(let h=0;h<e;h++){let d=l*s+c*(e+1)+h,u=d+e+1;o.push(d,u,d+1,u,u+1,d+1)}a.setIndex(o),this.g=a,this.side=rn(0,0,1)}update(t,e,n=0){let s=n*this.N1,r=e&&!this.painted[n],{P:a,Nn:o,U:l,r:c}=this,h=this.side,d=rn(),u=rn(),f=rn(),m=rn(),v=0,g=this.g.attributes.color.array,p=this.g.attributes.fl.array;for(let M=0;M<this.n;M++){let w=t[Math.max(0,M-1)],y=t[Math.min(this.n-1,M+1)],b=t[M];d.set(y.x-w.x,y.y-w.y,y.z-w.z).normalize(),f.copy(h).addScaledVector(d,-h.dot(d)).normalize(),u.crossVectors(f,d).normalize(),M&&(v+=Math.hypot(b.x-t[M-1].x,b.y-t[M-1].y,b.z-t[M-1].z));let E=Math.PI*(b.rw+b.rh);for(let A=0;A<=c;A++){let _=A/c*Math.PI*2,T=Math.cos(_),C=Math.sin(_),I=s+(M*(c+1)+A);if(m.set(b.x,b.y,b.z).addScaledVector(u,T*b.rh).addScaledVector(f,C*b.rw),a[I*3]=m.x,a[I*3+1]=m.y,a[I*3+2]=m.z,m.set(0,0,0).addScaledVector(u,T/Math.max(b.rh,1e-4)).addScaledVector(f,C/Math.max(b.rw,1e-4)).normalize(),o[I*3]=m.x,o[I*3+1]=m.y,o[I*3+2]=m.z,l[I*2]=v,l[I*2+1]=A/c*E,r){let L=e(M,T,C,b);g[I*3]=L[0],g[I*3+1]=L[1],g[I*3+2]=L[2],p[I]=L[3]}}}r&&(this.painted[n]=!0,this.g.attributes.color.needsUpdate=!0,this.g.attributes.fl.needsUpdate=!0,this.g.attributes.uv.needsUpdate=!0),this.g.attributes.position.needsUpdate=!0,this.g.attributes.normal.needsUpdate=!0,this.g.boundingSphere||this.g.computeBoundingSphere()}},Kc=new Map;function dl(i,t=.85){let e=i+":"+t;if(Kc.has(e))return Kc.get(e);let n=[];for(let s=0;s<=i;s++){let r=new xe({vertexColors:!0,roughness:t,metalness:0}),a=i?s/i:0;r.onBeforeCompile=o=>{o.uniforms.uK={value:a},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute float fl; uniform float uK; varying vec2 vU; varying float vK;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed += objectNormal * fl * uK + vec3(-.35, -.5, 0.) * fl * uK * uK; vU = uv; vK = uK;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vU; varying float vK;
float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
 if (vK > 0.) { vec2 c = floor(vU * vec2(700., 700.)); float h = h2(c); if (h < vK * 1.05) discard; }
 diffuseColor.rgb *= mix(.55, 1.08, vK) * (.92 + .16 * h2(floor(vU * 90.)));`)},r.customProgramCacheKey=()=>"fur"+i+"_"+s,r.userData.shell=s,n.push(r)}return Kc.set(e,n),n}function Fs(i,t,e,n=!0){t.meshes=e.map((s,r)=>{let a=new St(t.g,s);return a.castShadow=n&&r===0,a.receiveShadow=r===0,a.frustumCulled=!1,a.userData.shell=r,a.userData.shells=e.length-1,i.add(a),a})}function Bs(i,t,e){let n=i.x-t.x,s=i.y-t.y,r=Math.cos(e),a=Math.sin(e);return{...i,x:t.x+n*r-s*a,y:t.y+n*a+s*r}}function Qc(i,t,e){let n=[{x:i.x,y:i.y}],s=i.x,r=i.y;return t.forEach((a,o)=>{s+=Math.sin(e[o])*a,r-=Math.cos(e[o])*a,n.push({x:s,y:r})}),n}var Xr=[.035,.032,.034],si=[.93,.91,.86];function Md(i={}){let t=new jt,e=dl(i.shells||7),n=dl(i.shortShells||3),s=new ii(60,26),r=new ii(26,14,4),a=new ii(18,10),o=[new ii(8,8),new ii(8,8)];o[0].side=rn(1,0,0),o[1].side=rn(1,0,0),Fs(t,s,e),Fs(t,r,e),Fs(t,a,e),o.forEach(u=>Fs(t,u,n,!1));let l=new xe({color:"#2a1608",roughness:.12,metalness:.1}),c=new xe({color:"#111",roughness:.35}),h=[0,1].map(()=>{let u=new St(new De(.013,12,8),l);return t.add(u),u}),d=new St(new De(.021,12,8),c);return d.scale.set(.9,.8,1.15),t.add(d),t.userData={body:s,legs:r,tail:a,ears:o,eyes:h,nose:d,feet:[]},jc(t,0,0,0),t}var vd=[[-.37,.5,.02,.02],[-.35,.49,.075,.08],[-.29,.475,.1,.108],[-.18,.46,.088,.092],[-.04,.452,.094,.112],[.1,.44,.108,.142],[.22,.45,.104,.138],[.31,.5,.082,.1],[.38,.585,.066,.075],[.425,.66,.06,.066],[.46,.72,.072,.07],[.52,.74,.078,.068],[.565,.722,.058,.054],[.605,.705,.044,.04],[.64,.698,.03,.028],[.652,.697,.004,.004]],Z_=rn(.33,.52),UM=rn(-.26,.46),J_=rn(0,.45),K_={x:-.34,y:.1};function jc(i,t,e=0,n=0,s=!1,r=0,a={}){let o=i.userData,l=Math.PI*2,c=Math.max(0,Math.min(1,+s||0)),h=1-c,d=a.sit||0,u=a.time||0;s=c>.5;let f=Math.sin(t*l+1.3)*.035*h*(1-e),m=Math.abs(Math.sin(t*l))*.03*(1-e)*h,v=$t($t(-.25,Math.sin(t*l+2)*.07-.05,1-e)*h+.08*c,-.35,d),g=.62*d,p=n+g,M=z=>{let $=Bs(z,J_,n);return $.y+=m-.25*d-.018,d&&($=Bs($,K_,g)),$},w=vd.map(([z,$,N,H],X)=>{let rt={x:z,y:$,z:0,rw:N,rh:H};return X<=3&&(rt.x+=f*(1-X/4)*1.2,rt.y+=f*.25),X>=8&&(rt=Bs(rt,Z_,v*Math.min(1,(X-7)/3))),M(rt)}),y=Us(w,o.body.n);o.body.update(y,(z,$,N,H)=>{let X=H.k,rt=Xr,at=.022;return X>=7.6&&X<=8.6&&(rt=si,at=.04),X>5.6&&X<7.6&&$<-.35+(X-5.6)*.25&&(rt=si,at=.035),X>6.5&&X<8&&$<.2&&Math.abs(N)<.75&&(rt=si,at=.04),X>1.5&&X<5&&$<-.8&&(at=.03),X>=11.9?(rt=si,at=.004):X>=11.3&&(rt=$<.2||Math.abs(N)<.25?si:Xr,at=.005),X>=9.8&&X<11.3&&(at=.008,$>.45&&Math.abs(N)<.14+(X-9.8)*.06&&(rt=si),$<-.5&&X>10.6&&(rt=si)),[...rt,at]});let b=z=>y[Math.round(z/(vd.length-1)*(o.body.n-1))],E=b(10.5),A=b(12),_=rn(A.x-E.x,A.y-E.y,0).normalize(),T=rn(-_.y,_.x,0);o.eyes.forEach((z,$)=>{let N=$?-1:1;z.position.set(E.x+_.x*.045+T.x*.028,E.y+_.y*.045+T.y*.028,N*.052)});let C=b(14.4);o.nose.position.set(C.x+_.x*.006,C.y+_.y*.006+.004,0),o.ears.forEach((z,$)=>{let N=$?-1:1,H=b(10.2),X=e?.6:.2+Math.sin(t*l)*.1*h,rt={x:H.x-_.x*.01+T.x*.05,y:H.y+T.y*.05},at=[[0,-.01,.034,.009],[-.01,.02,.032,.008],[-.01,.045,.022,.006],[.008+X*.02,.058,.012,.004],[.026+X*.03,.05-X*.02,.002,.002]].map(([Dt,At,ot,Z])=>({x:rt.x+_.x*Dt+T.x*At,y:rt.y+_.y*Dt+T.y*At,z:N*(.045+At*.25),rw:ot,rh:Z}));z.update(Us(at,z.n),()=>[...Xr,.008])});let I=[.42,.52,0,.1],L=[.16,.205,.075],G=[.19,.2,.13];for(let z=0;z<4;z++){let $=o.legs,N=z<2,H=(z%2?-1:1)*(N?.05:.06),X=(t+I[z])*l,rt=Math.sin(X),at=$c(Math.cos(X)),Dt;if(N){let mt=.08+.6*rt*h,Ut=-(.08+1.3*at*h),Rt=.18-.9*at*h;mt=$t(mt,1.25,e),Ut=$t(Ut,-2.3,e),Rt=$t(Rt,-.9,e),mt=$t(mt,.95,r),Ut=$t(Ut,-.12,r),Rt=$t(Rt,.3,r),Dt=[mt,mt+Ut,mt+Ut+Rt],c&&(Dt=Dt.map((Ft,Xt)=>$t(Ft,[.05,-.05,.15][Xt],c))),d&&(Dt=Dt.map((Ft,Xt)=>$t(Ft,[.12,.06,.3][Xt],d)))}else{let mt=.28+.55*rt*h,Ut=1+.6*at*h,Rt=.82+.25*at*h;mt=$t(mt,-1,e),Ut=$t(Ut,.35,e),Rt=$t(Rt,.35,e),mt=$t(mt,.1,r),Ut=$t(Ut,1.5,r),Rt=$t(Rt,1.2,r),Dt=[mt,mt-Ut,mt-Ut+Rt],c&&(Dt=Dt.map((Ft,Xt)=>$t(Ft,[.3,-.72,.1][Xt],c))),d&&(Dt=Dt.map((Ft,Xt)=>$t(Ft,[1.2,-1.75,1.45][Xt],d)))}let At=N?{x:.25,y:.47}:{x:-.26,y:.47},ot=Qc(At,N?L:G,Dt.map(mt=>mt-p)),Z=ot[3],O=Dt[2]-p,nt;if(N){let mt={x:At.x+.03,y:At.y+.12,z:H*.3,rw:.05,rh:.06};nt=[mt,{x:$t(ot[0].x,mt.x,.45),y:$t(ot[0].y,mt.y,.45),z:H*.6,rw:.058,rh:.068},{x:ot[0].x,y:ot[0].y,z:H*.85,rw:.046,rh:.058},{x:$t(ot[0].x,ot[1].x,.5),y:$t(ot[0].y,ot[1].y,.5),z:H,rw:.032,rh:.042},{x:ot[1].x,y:ot[1].y,z:H,rw:.025,rh:.03},{x:$t(ot[1].x,ot[2].x,.45),y:$t(ot[1].y,ot[2].y,.45),z:H,rw:.021,rh:.024},{x:ot[2].x,y:ot[2].y,z:H,rw:.019,rh:.021},{x:$t(ot[2].x,ot[3].x,.5),y:$t(ot[2].y,ot[3].y,.5),z:H,rw:.018,rh:.018}]}else nt=[{x:At.x+.02,y:At.y+.08,z:H*.3,rw:.06,rh:.085},{x:$t(ot[0].x,ot[1].x,.1),y:$t(ot[0].y,ot[1].y,.1),z:H*.72,rw:.062,rh:.1},{x:$t(ot[0].x,ot[1].x,.45),y:$t(ot[0].y,ot[1].y,.45),z:H*.9,rw:.046,rh:.075},{x:ot[1].x,y:ot[1].y,z:H,rw:.03,rh:.038},{x:$t(ot[1].x,ot[2].x,.4),y:$t(ot[1].y,ot[2].y,.4),z:H,rw:.026,rh:.036},{x:ot[2].x,y:ot[2].y,z:H,rw:.019,rh:.024},{x:$t(ot[2].x,ot[3].x,.5),y:$t(ot[2].y,ot[3].y,.5),z:H,rw:.017,rh:.018}];nt.push({x:Z.x,y:Z.y,z:H,rw:.019,rh:.018},{x:Z.x+Math.cos(O)*.03,y:Z.y+Math.sin(O)*.03-.005,z:H,rw:.025,rh:.019},{x:Z.x+Math.cos(O)*.052,y:Z.y+Math.sin(O)*.052-.008,z:H,rw:.006,rh:.006});let ct=nt.map(M);o.feet[z]=M({x:Z.x+Math.cos(O)*.03,y:Z.y+Math.sin(O)*.03-.024,z:H});let st=N?4.6:4.4;$.update(Us(ct,$.n),(mt,Ut,Rt,Ft)=>{let Xt=Ft.k>st;return[...Xt?si:Xr,Xt?.005:Ft.k<1.5?.022:Ft.k<3?.016:.009]},z)}let D=s?Math.sin(u*8)*.15:Math.sin(t*l)*.12,k=e?.9:$t(.25,-.2,d),W=[[-.35,.5,.035,.035],[-.43,.47,.03,.03],[-.5,.42,.024,.024],[-.55,.36,.018,.018],[-.57,.3,.013,.013],[-.565,.26,.004,.004]].map(([z,$,N,H],X)=>{let rt=Bs({x:z,y:$,z:0,rw:N,rh:H},{x:-.35,y:.5},k*(X/5));return rt.z=Math.sin(X*.6)*D*X*.02,M(rt)});o.tail.update(Us(W,o.tail.n),(z,$,N,H)=>[...H.k>4.1?si:Xr,.03+($<0?.02:0)])}var Os=Math.PI*2,eh=(i,t,e)=>Math.max(t,Math.min(e,i)),Te=(i,t,e)=>i+(t-i)*e,tn=(i,t,e)=>{let n=eh((e-i)/(t-i),0,1);return n*n*(3-2*n)},xn=i=>{let t=new Ot(i);return[t.r,t.g,t.b]},fl=new P(0,1,0),ri=new P(0,0,1),Sd=new P(1,0,0),an=(i,t)=>new Xe().setFromAxisAngle(i,t),pl=(...i)=>i.reduce((t,e)=>t.multiply(e),new Xe),Wt=(i=0,t=0,e=0)=>new P(i,t,e);function qr(i,t){t=(t%1+1)%1;let e=i.length,n=e-1;for(let h=0;h<e;h++)if(i[h][0]>t){n=h-1;break}let s=h=>{let d=(h%e+e)%e;return[i[d][0]+Math.floor(h/e),i[d][1]]},r=s(n-1),a=s(n),o=s(n+1),l=s(n+2),c=(t-a[0])/(o[0]-a[0]);return .5*(2*a[1]+(-r[1]+o[1])*c+(2*r[1]-5*a[1]+4*o[1]-l[1])*c*c+(-r[1]+3*a[1]-3*o[1]+l[1])*c*c*c)}var Wi=class{constructor(t,e,n){this.n=t,this.r=e,this.paint=n;let s=t*(e+1),r=new se;this.P=new Float32Array(s*3),this.Nn=new Float32Array(s*3),this.C=new Float32Array(s*3),this.Ce=new Float32Array(t*3),r.setAttribute("position",new ae(this.P,3)),r.setAttribute("normal",new ae(this.Nn,3)),r.setAttribute("color",new ae(this.C,3));let a=[];for(let o=0;o<t-1;o++)for(let l=0;l<e;l++){let c=o*(e+1)+l,h=c+e+1;a.push(c,h,c+1,h,h+1,c+1)}r.setIndex(a),this.g=r,this.painted=!1,this.cs=[];for(let o=0;o<=e;o++){let l=o/e*Os;this.cs.push([Math.cos(l),Math.sin(l)])}}update(t){let e=this.n,n=this.r,s=this.P,r=t.length-1,a=Wt(),o=Wt(),l=Wt(),c=Wt(),h=[];for(let p=0;p<e;p++){let M=p/(e-1)*r,w=Math.min(r-1,Math.floor(M)),y=M-w,b=t[Math.max(0,w-1)],E=t[w],A=t[w+1],_=t[Math.min(r,w+2)],T=(I,L,G,D)=>.5*(2*L+(-I+G)*y+(2*I-5*L+4*G-D)*y*y+(-I+3*L-3*G+D)*y*y*y),C=y*y*(3-2*y);h.push({x:T(b.p.x,E.p.x,A.p.x,_.p.x),y:T(b.p.y,E.p.y,A.p.y,_.p.y),z:T(b.p.z,E.p.z,A.p.z,_.p.z),a:E.a.clone().lerp(A.a,C),rw:Te(E.rw,A.rw,C),rf:Te(E.rf,A.rf,C),rb:Te(E.rb,A.rb,C),e:Te(E.e||2,A.e||2,C),k:M})}for(let p=0;p<e;p++){let M=h[Math.max(0,p-1)],w=h[Math.min(e-1,p+1)],y=h[p];a.set(w.x-M.x,w.y-M.y,w.z-M.z).normalize(),o.copy(y.a).addScaledVector(a,-y.a.dot(a)).normalize(),l.crossVectors(a,o).normalize(),this.Ce[p*3]=y.x,this.Ce[p*3+1]=y.y,this.Ce[p*3+2]=y.z;let b=2/y.e;for(let E=0;E<=n;E++){let[A,_]=this.cs[E],T=Math.sign(A)*Math.pow(Math.abs(A),b),C=Math.sign(_)*Math.pow(Math.abs(_),b);c.set(y.x,y.y,y.z).addScaledVector(l,T*(A>0?y.rf:y.rb)).addScaledVector(o,C*y.rw);let I=(p*(n+1)+E)*3;if(s[I]=c.x,s[I+1]=c.y,s[I+2]=c.z,!this.painted){let L=this.paint(y.k,A,_,p);this.C[I]=L[0],this.C[I+1]=L[1],this.C[I+2]=L[2]}}}let d=this.Nn,u=Wt(),f=Wt(),m=Wt(),v=Wt(),g=(p,M)=>(p*(n+1)+M)*3;for(let p=0;p<e;p++)for(let M=0;M<=n;M++){let w=Math.max(0,p-1),y=Math.min(e-1,p+1),b=(M+n-1)%n,E=(M+1)%n,A=g(w,M),_=g(y,M),T=g(p,b),C=g(p,E);u.set(s[_]-s[A],s[_+1]-s[A+1],s[_+2]-s[A+2]),f.set(s[C]-s[T],s[C+1]-s[T+1],s[C+2]-s[T+2]),m.crossVectors(f,u);let I=g(p,M);v.set(s[I]-this.Ce[p*3],s[I+1]-this.Ce[p*3+1],s[I+2]-this.Ce[p*3+2]),m.lengthSq()<1e-14&&m.copy(v),p===0||p===e-1?(a.set(this.Ce[y*3]-this.Ce[w*3],this.Ce[y*3+1]-this.Ce[w*3+1],this.Ce[y*3+2]-this.Ce[w*3+2]).normalize(),m.copy(a).multiplyScalar(p?1:-1)):m.dot(v)<0&&m.negate(),m.normalize(),d[I]=m.x,d[I+1]=m.y,d[I+2]=m.z}this.painted||(this.painted=!0,this.g.attributes.color.needsUpdate=!0),this.g.attributes.position.needsUpdate=!0,this.g.attributes.normal.needsUpdate=!0,this.g.computeBoundingSphere()}},oe=(i,t,e,n=e,s=n,r=2)=>({p:i,a:t,rw:e,rf:n,rb:s,e:r}),Pe={skin:xn("#d9a07f"),skinD:xn("#c48466"),shirt:xn("#2f7fd0"),shirtD:xn("#2468ad"),trim:xn("#c6f432"),legs:xn("#23262e"),legsS:xn("#3a3f4a"),shoe:xn("#f2f2ee"),shoeC:xn("#ff6a3d"),sole:xn("#3a3a3c"),hair:"#5a3620",band:"#c6f432"};function bd(i,t){let e=i.attributes.position,n=Wt();for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n),e.setXYZ(s,n.x,n.y,n.z);return i.computeVertexNormals(),i}var ml=(i,t,e,n)=>Math.exp(-(i*i)/(e*e)-t*t/(n*n));function Ed(i){let{x:t,y:e,z:n}=i;if(e<0){let c=Math.hypot(t,n)||1,h=Math.pow(1-Math.pow(-e,2.6),1/2.6);t*=h/c,n*=h/c}let s=tn(-.05,-.95,e),r=t<0,a=t*.1,o=e*(e>0?.118:.112),l=n*.079;r?a*=1+.08*(1-Math.abs(e))-.45*s:a*=1-.1*s,l*=1-.3*Math.pow(s,1.3),t>0&&(a=Math.min(a,.09+.006*e));for(let c of[-1,1])a-=.007*ml(e-.1,n-c*.36,.13,.15)*tn(.4,.8,t);a+=.004*ml(e-.27,n,.08,.5)*tn(.5,.8,t),a+=.006*ml(e+.62,n,.18,.3)*tn(.3,.7,t),o-=.012*s*s,l*=1+.06*ml(e+.15,t-.45,.25,.3),i.set(a,o,l)}function wd(i){let t=[],e=[],n=[],s=[],r=new ne,a=new Gt,o=new Xe,l=new nn,c=Wt(),h=0;for(let[u,f,m,v,g]of i){r.compose(Wt(...m),o.setFromEuler(l.set(...g||[0,0,0])),Wt(...v)),a.getNormalMatrix(r);let p=u.attributes.position,M=u.attributes.normal,w=xn(f);for(let b=0;b<p.count;b++)c.fromBufferAttribute(p,b).applyMatrix4(r),t.push(c.x,c.y,c.z),c.fromBufferAttribute(M,b).applyMatrix3(a).normalize(),e.push(c.x,c.y,c.z),n.push(w[0],w[1],w[2]);let y=u.index.array;for(let b=0;b<y.length;b++)s.push(y[b]+h);h+=p.count}let d=new se;return d.setAttribute("position",new Vt(t,3)),d.setAttribute("normal",new Vt(e,3)),d.setAttribute("color",new Vt(n,3)),d.setIndex(s),d}var gl="#d9a07f";function $_(){let i=[.02,.088,0],t=bd(new De(1,24,18),Ed),e=bd(new De(1,24,18),c=>{let h=c.x,d=c.y;Ed(c);let u=h>0?Te(.05,.5,tn(.1,.6,h)):Te(.05,-.55,tn(-.05,-.6,h));c.multiplyScalar(Te(.9,1.065+.045*tn(.3,1,d)-.02*tn(.2,.9,h),tn(u-.2,u+.06,d)))}),n=new De(1,8,6),s=new De(1,7,5),r=(c,h,d)=>[i[0]+c,i[1]+h,i[2]+d],a=[[t,gl,i,[1,1,1]],[e,Pe.hair,i,[1,1,1]]];for(let c of[-1,1])a.push([s,"#f4efe8",r(.079,.012,c*.031),[.008,.0095,.014]],[s,"#2a1a12",r(.0865,.012,c*.031),[.003,.0085,.0085]],[s,Pe.hair,r(.087,.036,c*.033),[.005,.005,.018],[c*.15,0,0]],[n,gl,r(-.004,-.004,c*.079),[.016,.032,.01],[0,0,.15]]);a.push([n,gl,r(.088,-.008,0),[.016,.03,.011],[0,0,-.3]],[s,"#b8615a",r(.083,-.052,0),[.008,.005,.019]],[new Hn(.017,.007,5,10),Pe.band,r(-.1,.045,0),[1,1,1],[0,Math.PI/2,-.9]]);let o=new St(wd(a),new xe({vertexColors:!0,roughness:.62})),l=new jt;return l.add(o),l}function Q_(){let i=new xe({vertexColors:!0,roughness:.6}),t=new De(1,7,6),e=r=>{let a=new St(wd(r.map(([o,l,c,h,d,u,f])=>[t,gl,[o,l,c],[h,d,u],[0,0,f||0]])),i);return a.castShadow=!0,a},n=()=>e([[.004,-.045,0,.036,.045,.026],[.022,-.06,0,.022,.03,.027],[.018,-.03,0,.012,.022,.012,.5]]),s=()=>e([[0,-.045,0,.036,.05,.014],[.002,-.11,0,.03,.05,.011],[.03,-.04,0,.01,.03,.01,-.6]]);return[0,1].map(()=>({fist:n(),open:s()}))}function j_(){let i=new Wi(11,10,(e,n)=>n<-.35?Pe.sole:n<-.1?Pe.shoe:e>1.4&&e<3.5&&n>.2&&n<.75?Pe.shoeC:Pe.shoe),t=Wt(0,0,-1);return i.update([oe(Wt(-.07,-.035,0),t,.012,.012,.012),oe(Wt(-.058,-.035,0),t,.036,.035,.04,2.6),oe(Wt(-.01,-.035,0),t,.043,.042,.042,2.8),oe(Wt(.06,-.047,0),t,.048,.03,.03,2.8),oe(Wt(.12,-.052,0),t,.049,.023,.025,2.8),oe(Wt(.17,-.052,0),t,.04,.018,.023,2.4),oe(Wt(.196,-.05,0),t,.02,.01,.018),oe(Wt(.203,-.049,0),t,.004,.004,.005)]),i.g}var th=.885,tx=.42,ex=.41,nx=.29,ix=.25,sx=.085,rx=.158,ax=1.39,nh=[[.775,0,.03,.03,.03,2],[.795,0,.105,.07,.085,2.2],[.835,-.004,.152,.09,.112,2.4],[.895,-.006,.168,.092,.122,2.6],[.965,0,.16,.09,.105,2.6],[1.03,.006,.138,.084,.086,2.5],[1.085,.01,.124,.078,.078,2.4],[1.15,.012,.13,.082,.082,2.4],[1.22,.014,.142,.1,.086,2.5],[1.285,.01,.152,.098,.09,2.6],[1.345,.002,.16,.082,.09,2.7],[1.39,-.008,.15,.066,.078,2.8],[1.425,-.01,.09,.056,.064,2.3],[1.455,0,.052,.05,.052,2],[1.51,.012,.047,.047,.047,2],[1.56,.02,.04,.04,.04,2]],ox=[[0,.42],[.12,.12],[.3,-.3],[.4,-.42],[.52,-.25],[.66,.22],[.8,.66],[.9,.62]],lx=[[0,.28],[.13,.62],[.3,.38],[.42,.7],[.56,1.75],[.66,2],[.8,1.05],[.92,.32]],cx=[[0,.02],[.13,.45],[.3,.45],[.4,.12],[.55,-.28],[.7,-.1],[.85,.15],[.95,.1]],Td=[[0,0],[.2,.004],[.35,.01],[.45,.045],[.5,.05],[.55,.04],[.7,.008],[.85,0]];function Ad(i={}){let t=new jt,e=new xe({vertexColors:!0,roughness:.78}),n=new xe({vertexColors:!0,roughness:.6}),s=new xe({color:Pe.hair,roughness:.78}),r=new Wi(30,18,(m,v,g)=>{let p=nh[Math.min(nh.length-1,Math.round(m))][0]+(m-Math.round(m))*.05;return p>1.448-.03*tn(.6,1,v)?Pe.skin:p>1.43-.03*tn(.6,1,v)?Pe.shirtD:p>.985?Math.abs(g)>.93?Pe.shirtD:Pe.shirt:p>.955?Pe.trim:Pe.legs}),a=[0,1].map(()=>new Wi(22,12,(m,v,g)=>m>8.2?Pe.skin:Pe.legs)),o=[0,1].map(()=>new Wi(20,10,(m,v)=>m<2.1?m>1.8?Pe.shirtD:Pe.shirt:Pe.skin)),l=new Wi(10,8,()=>xn(Pe.hair)),c=(m,v)=>{let g=new St(m,v);return g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1,t.add(g),g};c(r.g,e),a.forEach(m=>c(m.g,e)),o.forEach(m=>c(m.g,e)),c(l.g,s);let h=$_();h.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),t.add(h);let d=Q_();d.forEach(m=>{t.add(m.fist),t.add(m.open)});let u=j_(),f=[0,1].map(()=>{let m=new St(u,n);return m.castShadow=!0,t.add(m),m});return t.userData.hd={torso:r,legs:a,arms:o,pony:l,head:h,hands:d,shoes:f},_l(t,{speed:0,still:!0}),t}function ih(i,t){let e=i.userData.hd;!e||!e.last||!t||_l(i,{...e.last,look:(e.last.look||0)+t})}function _l(i,t={}){let e=i.userData.hd,n=!!t.still;e.last=t;let s=t.speed==null?1:+t.speed;s>1.2&&(s=s/4),s=n?0:eh(s,0,1);let r=Math.pow(Math.min(1,s/.45),.7),a=n?0:t.phase||0,o=eh(t.point||0,0,1),l=(t.pointSide==null?1:t.pointSide)>=0?-1:1,c=tn(0,1,o),h=[0,1].map(N=>{let H=N?1:-1,X=a+(N?.5:0),rt=Te(.02,qr(ox,X),r),at=Te(.07,qr(lx,X)*Te(.55,1,r),r),Dt=Te(.05,qr(cx,X),r);return{zs:H,p:X,th:rt,kn:at,an:Dt}}),d=.17*r*(h[1].th-h[0].th)/1.1,u=Te(.035,.2,r)+.04*r*Math.sin(a*Os*2),f=-l*.22*c,m=-.9*d+f,v=an(fl,d),g=0;h.forEach(N=>{let H=Te(.035,-.015,r);N.hip=Wt(0,0,N.zs*sx).applyQuaternion(v),N.qT=pl(v.clone(),an(Sd,-N.zs*H),an(ri,N.th)),N.knee=N.hip.clone().add(Wt(0,-tx,0).applyQuaternion(N.qT)),N.qS=N.qT.clone().multiply(an(ri,-N.kn)),N.ank=N.knee.clone().add(Wt(0,-ex,0).applyQuaternion(N.qS)),N.qF=N.qS.clone().multiply(an(ri,N.an));let X=Math.min(...[[-.065,-.075],[.05,-.078],[.17,-.072],[.2,-.06]].map(([rt,at])=>N.ank.y+Wt(rt,at,0).applyQuaternion(N.qF).y));N.lo=X});let p=r*(qr(Td,a)+qr(Td,a+.5))*1.2,M=-Math.min(h[0].lo,h[1].lo)+p,w=Wt(0,M,0),y=N=>pl(an(fl,Te(d,m,tn(.95,1.38,N))),an(ri,-u*(.35+.65*tn(.9,1.3,N)))),b=nh.map(([N,H,X,rt,at,Dt])=>{let At=y(N),ot=N>1.15&&N<1.36?1+.012*Math.sin(a*Os*2)*r:1;return oe(Wt(H,N-th,0).applyQuaternion(At).add(w),ri.clone().applyQuaternion(At),X,rt*ot,at,Dt)});e.torso.update(b);let E=y(1.4);h.forEach((N,H)=>{let X=Wt(0,0,-1),rt=X.clone().applyQuaternion(N.qT),at=X.clone().applyQuaternion(N.qS),Dt=N.hip.clone().add(w),At=N.knee.clone().add(w),ot=N.ank.clone().add(w),Z=(nt,ct,st)=>nt.clone().lerp(ct,st),O=Dt.clone().add(Wt(-.01,.07,-N.zs*.02));e.legs[H].update([oe(O,rt,.07,.06,.07),oe(Dt,rt,.09,.085,.1),oe(Z(Dt,At,.3),rt,.08,.078,.08),oe(Z(Dt,At,.72),rt,.062,.064,.058),oe(At.clone().add(Wt(.012,0,0).applyQuaternion(N.qS)),at,.05,.05,.046),oe(Z(At,ot,.22),at,.05,.042,.062),oe(Z(At,ot,.45),at,.045,.038,.052),oe(Z(At,ot,.75),at,.033,.032,.034),oe(ot,at,.029,.029,.03),oe(ot.clone().add(Wt(0,-.03,0).applyQuaternion(N.qS)),at,.028,.028,.028)]),e.shoes[H].position.copy(ot),e.shoes[H].quaternion.copy(N.qF)});let A=[h[1].th,h[0].th],_=[];[0,1].forEach(N=>{let H=N?1:-1,X=H===l?c:0,rt=A[N],at=Te(.05,.06+.95*(rt-.12),r),Dt=Te(.1,.2,r),At=Te(.25,.5,r),ot=Te(.22,1.35+.45*tn(-.3,.6,rt),r);at=Te(at,1.42,X),Dt=Te(Dt,.85,X),At=Te(At,-.1,X),ot=Te(ot,.12,X);let Z=Wt(-.005,ax-th+.015*X,H*rx).applyQuaternion(E).add(w),O=pl(E.clone(),an(ri,at),an(Sd,-H*Dt),an(fl,H*At)),nt=Z.clone().add(Wt(0,-nx,0).applyQuaternion(O)),ct=O.clone().multiply(an(ri,ot)),st=nt.clone().add(Wt(0,-ix,0).applyQuaternion(ct)),mt=Wt(0,0,-1),Ut=mt.clone().applyQuaternion(O),Rt=mt.clone().applyQuaternion(ct),Ft=(ue,Le,de)=>ue.clone().lerp(Le,de),Xt=Z.clone().add(Wt(0,.03,0).applyQuaternion(O));e.arms[N].update([oe(Z.clone().add(Wt(0,.055,0).applyQuaternion(O)),Ut,.006,.006,.006),oe(Xt,Ut,.038,.038,.038),oe(Z,Ut,.048,.046,.046),oe(Ft(Z,nt,.33),Ut,.046,.046,.046),oe(Ft(Z,nt,.5),Ut,.043,.044,.045),oe(Ft(Z,nt,.8),Ut,.035,.036,.036),oe(nt,Ut,.032,.03,.034),oe(Ft(nt,st,.25),Rt,.036,.035,.033),oe(Ft(nt,st,.7),Rt,.027,.024,.025),oe(st,Rt,.022,.017,.017),oe(st.clone().add(Wt(0,-.02,0).applyQuaternion(ct)),Rt,.019,.015,.015)]);let kt=ct.clone().multiply(an(ri,X?-.1:.15)),ee=e.hands[N];ee.fist.visible=X<.5,ee.open.visible=X>=.5;for(let ue of[ee.fist,ee.open])ue.position.copy(st),ue.quaternion.copy(kt),H<0&&ue.scale.set(1,1,-1);_.push(st)});let T=Wt(.014,1.5-th,0).applyQuaternion(E).add(w),C=(t.look||0)+-l*.5*c,I=pl(an(fl,m*.4+C-f*.4),an(ri,-u*.1+.04*r*Math.sin(a*Os*2+1)));e.head.position.copy(T),e.head.quaternion.copy(I);let L=Wt(-.098,.135,0).applyQuaternion(I).add(T),G=.045*r*Math.sin(a*Os+.6),D=.035*r*Math.sin(a*Os*2+2.2),k=Wt(0,0,1),W=Wt(-1,0,0).applyQuaternion(I);W.y=0,W.normalize();let z=Wt(-W.z,0,W.x),$=[];for(let N=0;N<=5;N++){let H=N/5,X=.035*H*(1+1.6*r)+.018*Math.sin(H*2.2),rt=.2*H*(1-.35*r)-D*H*H,at=L.clone().addScaledVector(W,X).addScaledVector(z,G*H*H);at.y-=rt,$.push(oe(at,k,[.018,.028,.031,.027,.018,.003][N],[.02,.032,.036,.03,.02,.003][N]))}return e.pony.update($),i}function Cd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new se,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Rd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let m=Rd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Rd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ae(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let v=h.getComponent(u,m);o.setComponent(u+d,m,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var zs={low:{grass:0,shells:3,shortShells:2,shadow:1024,dpr:1,soft:!1,trees:22},mid:{grass:25e3,shells:6,shortShells:3,shadow:2048,dpr:1.5,soft:!0,trees:40},high:{grass:7e4,shells:10,shortShells:4,shadow:2048,dpr:2,soft:!0,trees:60}};function Id(){let i=window.devicePixelRatio||1,t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4,n=i*i*(screen.width||400)*(screen.height||800);return t<=4||e<=2||n>32e5&&t<=6?"low":t>=8&&e>=8&&i<=2&&!/Android|iPhone|iPad/i.test(navigator.userAgent)?"high":"mid"}var sh=7,ye=()=>(sh=sh*16807%2147483647)/2147483647,yn=(i,t=.6,e=0)=>new xe({color:i,roughness:t,metalness:e}),Pn=(i,t=!0)=>i.traverse(e=>{e.isMesh&&(e.castShadow=t,e.receiveShadow=!0)});function Xn(i){i.updateMatrixWorld(!0);let t=new Map;i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh)return;let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();Object.keys(s.attributes).forEach(a=>{a!=="position"&&a!=="normal"&&a!=="uv"&&s.deleteAttribute(a)}),s.attributes.uv||s.setAttribute("uv",new ae(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n.matrixWorld),t.has(n.material)||t.set(n.material,{gs:[],cast:!1,recv:!1});let r=t.get(n.material);r.gs.push(s),r.cast=r.cast||n.castShadow,r.recv=r.recv||n.receiveShadow});let e=new jt;return t.forEach((n,s)=>{let r=new St(Cd(n.gs),s);r.castShadow=n.cast,r.receiveShadow=n.recv,e.add(r),n.gs.forEach(a=>a.dispose())}),e}function Yr(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new ti(n);return s.colorSpace=Ie,s}function hx(i){let t=Yr(i,i,(e,n)=>{e.fillStyle="#4b7a33",e.fillRect(0,0,n,n);let s=i*i/11;for(let r=0;r<s;r++){let a=95+ye()*70|0;e.fillStyle=`rgba(${45+ye()*40|0},${a+25},${28+ye()*25|0},${.2+ye()*.35})`,e.fillRect(ye()*n,ye()*n,1.3,3+ye()*5)}});return t.wrapS=t.wrapT=Fn,t.repeat.set(55,55),t.anisotropy=8,t}function ux(i,t,e,n,s){let r=new se;r.setAttribute("position",new ae(new Float32Array([-.0035,0,0,.0035,0,0,.001,1,0,-.001,1,0,0,1.25,0]),3)),r.setIndex([0,1,2,0,2,3,3,2,4]),r.computeVertexNormals();let a=new xe({color:"#ffffff",roughness:.95,side:qe});a.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying float vH;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 float hh = position.y; transformed.x += hh * hh * .006 * sin(instanceMatrix[3].x * 1.7 + instanceMatrix[3].z * 2.3); vH = hh;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0., 1., 0.);"),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying float vH;`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(.7, 1.05, clamp(vH, 0., 1.));`)};let o=new mi(r,a,s),l=new Ee,c=new Ot;for(let h=0;h<s;h++){let d=ye(),u=t-n/2+n*Math.sqrt(d);l.position.set(i+(ye()-.5)*e,0,u),l.rotation.y=ye()*Math.PI;let f=.045+ye()*.06;l.scale.set(1+ye(),f,1),l.updateMatrix(),o.setMatrixAt(h,l.matrix),c.setHSL(.25+ye()*.05,.45+ye()*.15,.2+ye()*.1),o.setColorAt(h,c)}return o.receiveShadow=!0,o.frustumCulled=!1,o}function dx(i,t,e){let n=new jt,s=new St(new Qe(.18,.3,i*.55,7),e);s.position.y=i*.27,n.add(s);for(let r=0;r<6;r++){let a=new Er(i*(.18+ye()*.12),2),o=a.attributes.position,l=ye()*10;for(let h=0;h<o.count;h++){let d=o.getX(h),u=o.getY(h),f=o.getZ(h),m=Math.hypot(d,u,f)||1,v=1+.1*Math.sin(d/m*5+l)*Math.sin(u/m*4+l*1.3)+.06*Math.sin(f/m*7+l);o.setXYZ(h,d*v,u*v,f*v)}a.computeVertexNormals();let c=new St(a,t[r%t.length]);c.position.set((ye()-.5)*i*.35,i*(.55+ye()*.35),(ye()-.5)*i*.3),n.add(c)}return n}function Pd(i,t,e){let n=zs[t]||zs.mid;sh=7;let s=new cl({canvas:i,antialias:t!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!1});s.setPixelRatio(Math.min(window.devicePixelRatio||1,n.dpr)),s.shadowMap.enabled=!0,s.shadowMap.type=Oi,s.toneMapping=Lr,s.toneMappingExposure=1.1,s.outputColorSpace=Ie;let r=new ur,a=(e.x0+e.x1)/2,o=(e.z0+e.z1)/2,l=new je({side:Ne,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ot("#3f7fd0")},mid:{value:new Ot("#a9cdef")},hor:{value:new Ot("#f3e6cf")}},vertexShader:"varying vec3 p; void main(){ p=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 top,mid,hor; varying vec3 p; void main(){ float h=max(p.y,0.); vec3 c=mix(hor,mid,smoothstep(0.,.12,h)); c=mix(c,top,smoothstep(.12,.7,h)); float sun=pow(max(dot(normalize(p),normalize(vec3(-.55,.35,-.75))),0.),64.); c+=vec3(1.,.9,.7)*sun*.6; gl_FragColor=vec4(c,1.); }"}),c=new St(new De(300,32,16),l);c.position.set(a,0,o),r.add(c),r.fog=new hr("#dfe4dc",35,170),r.add(new Ir("#d6e9ff","#4d6b30",1));let h=new ws("#ffe9c9",3);h.castShadow=!0,h.shadow.mapSize.set(n.shadow,n.shadow),h.shadow.bias=-3e-4,h.shadow.normalBias=.015,h.shadow.radius=3;let d=(e.x1-e.x0)/2+2,u=(e.z1-e.z0)/2+2;h.position.set(a-11,17,o+7),h.target.position.set(a,0,o);let f=Math.max(d,u)*1.15;Object.assign(h.shadow.camera,{left:-f,right:f,top:f*.8,bottom:-f*.8,near:1,far:70}),h.shadow.camera.updateProjectionMatrix(),r.add(h,h.target);let m=new ws("#bcd4ff",.6);m.position.set(a+10,5,o-10),r.add(m);let v=new St(new ei(400,400).rotateX(-Math.PI/2),new xe({map:hx(t==="low"?512:1024),roughness:1}));v.position.set(a,0,o),v.receiveShadow=!0,r.add(v);let g=null;n.grass&&(g=ux(a,o+1,e.x1-e.x0+10,e.z1-e.z0+9,n.grass),r.add(g));let p=e.z0-7,M=yn("#f4f4f0",.6),w=yn("#1f6b45",.8),y=[yn("#c6f432",.7),yn("#ffffff",.7),yn("#1f6b45",.7)],b=new te(.07,1,.07),E=new mi(b,M,33),A=new Ee;for(let W=0;W<33;W++)A.position.set(a-40+W*2.5,.5,p),A.updateMatrix(),E.setMatrixAt(W,A.matrix);r.add(E);let _=new St(new te(81,.6,.03),w);_.position.set(a,.55,p),r.add(_);let T=new jt;for(let W=0;W<12;W++){let z=new St(new te(3.2,.6,.035),y[W%3]);z.position.set(a-30+W*5.4,.55,p+.03),T.add(z)}r.add(Xn(T));let C=[yn("#2f5327",1),yn("#3a6130",1),yn("#284a22",1)],I=yn("#4d3a2a",1),L=[0,1,2,3].map(()=>dx(9+ye()*3,C,I)),G=new jt;for(let W=0;W<n.trees;W++){let z=L[W%4].clone(),$=280/n.trees;z.scale.setScalar(.75+ye()*.5),z.position.set(a-140+W*$+(ye()-.5)*3,0,p-26-ye()*25),z.rotation.y=ye()*6,G.add(z)}r.add(Xn(G));let D=new De(60,20,10),k=yn("#6f8f5a",1);for(let W=0;W<6;W++){let z=new St(D,k);z.scale.set(1.6,.22,1),z.position.set(a-200+W*80,-4,p-125-ye()*30),r.add(z)}return{R:s,scene:r,sun:h,grass:g,Q:n,tier:t,setTier(W){let z=zs[W];z&&(this.tier=W,this.Q=z,s.setPixelRatio(Math.min(window.devicePixelRatio||1,z.dpr)),g&&(g.visible=z.grass>0),h.shadow.mapSize.x!==z.shadow&&(h.shadow.mapSize.set(z.shadow,z.shadow),h.shadow.map&&(h.shadow.map.dispose(),h.shadow.map=null)))}}}var ah={};Zd(ah,{aframe:()=>_x,dogwalk:()=>xx,jump:()=>px,longjump:()=>Mx,numSign:()=>Sx,seesaw:()=>yx,stripedBar:()=>rh,tire:()=>vx,tunnel:()=>mx,weave:()=>gx});var fx="#f2c230",Ld={},we=(i,t=.6,e=0)=>Ld[i+t+e]||(Ld[i+t+e]=yn(i,t,e)),xl={};function rh(i,t,e,n,s=8){let r=e+n+s,a=xl[r]||(xl[r]=Yr(512,8,l=>{for(let c=0;c<s;c++)l.fillStyle=c%2?n:e,l.fillRect(c*512/s,0,512/s,8)})),o=new St(new Qe(t,t,i,16),xl[r+"m"]||(xl[r+"m"]=new xe({map:a,roughness:.35})));return o.geometry.rotateZ(Math.PI/2),o}function Dd(i){let t=Yr(128,128,(e,n)=>{e.fillStyle=i,e.fillRect(0,0,n,n);for(let s=0;s<1400;s++){let r=Math.random();e.fillStyle=r<.5?"rgba(0,0,0,.14)":"rgba(255,255,255,.12)",e.fillRect(Math.random()*n,Math.random()*n,1.5,1.5)}});return t.wrapS=t.wrapT=Fn,t}function yl(i,t,e,n,s,r){let a=new jt,o=Dd(n);o.repeat.set(i*2,t*2);let l=new St(new te(i,e,t),new xe({map:o,roughness:.9}));l.position.set(i/2,-e/2,0),a.add(l);let c=Dd(fx);return(r||[]).forEach((h,d)=>{if(!h)return;let u=c.clone();u.needsUpdate=!0,u.repeat.set(h*2,t*2);let f=new St(new te(h,e+.004,t+.004),new xe({map:u,roughness:.9}));f.position.set(d?i-h/2:h/2,-e/2,0),a.add(f)}),a}function px(i={}){let t=i.h!=null?i.h:.55,e=i.width||1.3,n=new jt,s=we("#f5f5f2",.45),r=we(i.c1||"#1f6b45",.55),a=we(i.c2||"#c6f432",.55);for(let c of[-1,1]){let h=new jt,d=(g,p)=>{let M=new St(new te(.055,p,.055),s);M.position.set(g,p/2,0),h.add(M)};d(0,1.2),d(c*.55,.85);let u=new St(new te(.66,.05,.05),s);u.position.set(c*.28,1.03,0),u.rotation.z=c*-.6,h.add(u);for(let g=0;g<4;g++){let p=new St(new te(.5,.075,.03),g%2?a:r);p.position.set(c*.275,.16+g*.18,0),h.add(p)}let f=new St(new te(.06,.05,.55),s);f.position.y=.025,h.add(f);let m=f.clone();m.position.x=c*.55,h.add(m);let v=new St(new te(.06,.03,.06),we("#333",.5));v.position.set(-c*.045,t-.035,0),h.add(v),h.position.x=c*(e/2+.03),n.add(h)}n.rotation.y=Math.PI/2,Pn(n);let o=new jt;o.add(Xn(n));let l=rh(e-.02,.02,"#ffffff","#d23a2e",10);return l.position.y=t,l.rotation.y=Math.PI/2,o.add(l),Pn(l),o.userData={h:t,bar:l,width:e},o}function mx(i={}){let t=i.r||.3,e=(i.points||[[-2,0],[2,0]]).map(p=>new P(p[0],t,p[1])),n=new _i(e,!1,"centripetal"),s=new jt,r=n.getLength(),a=Math.max(40,Math.round(r*16)),o=i.color||"#2f6fd0",l=new Bi(n,a,t,28,!1),c=l.attributes.position;for(let p=0;p<=a;p++){let M=p/a,w=n.getPointAt(M),y=1-.045*Math.pow(Math.abs(Math.sin(M*r/.25*Math.PI)),.6);for(let b=0;b<=28;b++){let E=p*29+b,A=c.getX(E)-w.x,_=c.getY(E)-w.y,T=c.getZ(E)-w.z;c.setXYZ(E,w.x+A*y,Math.max(.005,w.y+_*y),w.z+T*y)}}l.computeVertexNormals();let h=new xe({color:o,roughness:.6,side:qe});s.add(new St(l,h));let d=we(i.rib||"#1c4fa0",.5),u=Math.round(r/.25),f=new Hn(t+.004,.01,5,28),m=new jt;for(let p=0;p<=u;p++){let M=p/u,w=n.getPointAt(M),y=n.getTangentAt(M),b=new St(f,d);b.position.copy(w),b.lookAt(w.clone().add(y)),m.add(b)}s.add(Xn(m));let v=new Fi(.09,.5,4,8).rotateZ(Math.PI/2),g=we("#303a44",.9);return[.25,.75].forEach(p=>{let M=n.getPointAt(p),w=n.getTangentAt(p),y=new St(v,g);y.position.set(M.x,t*2+.05,M.z),y.rotation.y=Math.atan2(-w.z,w.x)+Math.PI/2,y.scale.set(1,.7,1),s.add(y)}),Pn(s),s.userData={curve:n,r:t,length:r},s}function gx(i={}){let t=i.n||12,e=i.spacing||.6,n=new jt,s=new St(new te((t-1)*e+.3,.025,.06),we("#c9ced3",.35,.6));s.position.set((t-1)*e/2,.0125,0),n.add(s);for(let r=0;r<t;r++){let a=rh(1.1,.024,"#ffffff",r%2?"#e0392b":"#1f8a55",8);a.rotation.z=Math.PI/2,a.position.set(r*e,.56,0),n.add(a);let o=new St(new te(.05,.025,.5),we("#c9ced3",.35,.6));o.position.set(r*e,.0125,0),r%3===0&&n.add(o)}return Pn(n),n=Xn(n),n.userData={n:t,spacing:e,poles:[...Array(t).keys()].map(r=>r*e)},n}function _x(i={}){let n=Math.asin(.6296296296296295),s=2.7*Math.cos(n),r=.95,a=.05,o=1.06,l=new jt;for(let f of[-1,1]){let m=yl(2.7,r,a,i.color||"#2d5fa8",!0,[o,0]);m.position.set(f*s,0,0),m.rotation.set(0,f<0?0:Math.PI,n),l.add(m)}let c=new St(new Qe(.03,.03,r,10).rotateX(Math.PI/2),we("#8a9097",.4,.6));c.position.y=1.7-.01,l.add(c);let h=new St(new te(s*1.6,.015,.015),we("#555",.5,.6));h.position.set(0,.45,-.42),l.add(h);let d=h.clone();d.position.z=.42,l.add(d),Pn(l),l=Xn(l);let u=f=>Math.abs(f)>=s?0:1.7*(1-Math.abs(f)/s);return l.userData={L:2.7,top:1.7,ang:n,half:s,zone:o*Math.cos(n),surf:u},l}function xx(i={}){let r=Math.asin(.33783783783783783),a=3.7*Math.cos(r),o=.9,l=new jt,c=i.color||"#b8342c",h=yl(3.7,.3,.05,c,!0,[]);h.position.set(-3.7/2,1.25,0),l.add(h);for(let u of[-1,1]){let f=yl(3.7,.3,.05,c,!0,[o,0]);f.position.set(u*(3.7/2+a),0,0),f.rotation.set(0,u<0?0:Math.PI,r),l.add(f);let m=new jt,v=we("#8a9097",.45,.5);for(let M of[-.28,.28]){let w=new St(new te(.04,1.25,.04),v);w.position.set(0,1.25/2-.03,M),w.rotation.x=M>0?-.2:.2,m.add(w)}let g=new St(new te(.05,.05,.42),v);g.position.y=1.25-.08,m.add(g);let p=new St(new te(.03,.03,.6),v);p.position.y=.3,m.add(p),m.position.x=u*(3.7/2-.12),l.add(m)}Pn(l),l=Xn(l);let d=u=>{let f=Math.abs(u);return f<=3.7/2?1.25:f>=3.7/2+a?0:1.25*(1-(f-3.7/2)/a)};return l.userData={L:3.7,H:1.25,ang:r,half:a,zone:o*Math.cos(r),total:3.7/2+a,surf:d},l}function yx(i={}){let r=new jt,a=Math.asin((.6-.05/2)/(3.7/2)),o=new jt;o.position.y=.6,r.add(o);let l=yl(3.7,.3,.05,i.color||"#2d5fa8",!0,[.9,.9]);l.position.set(-3.7/2,.05,0),o.add(l);let c=we("#8a9097",.45,.5);for(let m of[-.24,.24])for(let v of[-1,1]){let g=new St(new te(.045,.68,.045),c);g.position.set(v*.16,.3,m),g.rotation.z=v*.5,r.add(g)}let h=new St(new Qe(.03,.03,.55,10).rotateX(Math.PI/2),c);h.position.y=.6,r.add(h);let d=new St(new te(.6,.03,.6),c);d.position.y=.015,r.add(d),Pn(r);let u=a,f={L:3.7,H:.6,th:.05,maxT:a,setTilt(m){u=Math.max(-a,Math.min(a,m)),o.rotation.z=u},get tilt(){return u},point(m){return{x:m*Math.cos(u)-.05*Math.sin(u),y:.6+m*Math.sin(u)+.05*Math.cos(u)}}};return f.setTilt(a*(i.start||-1)),r.userData=f,r.setTilt=f.setTilt,r}function vx(i={}){let t=i.h||.8,e=.335,n=.065,s=new jt,r=8;for(let h=0;h<r;h++){let d=new St(new Hn(e,n,12,10,Math.PI*2/r),we(h%2?"#1d1d1f":"#f2c230",.55));d.rotation.set(0,Math.PI/2,h*Math.PI*2/r),d.position.y=t,s.add(d)}let a=we("#e8e8e8",.4,.3),o=.78,l=t+e+.5;for(let h of[-1,1]){let d=new St(new te(.06,l,.06),a);d.position.set(0,l/2,h*o),s.add(d);let u=new St(new te(.9,.05,.07),a);u.position.set(0,.025,h*o),s.add(u);let f=new St(new Qe(.008,.008,o-e-n),we("#333",.6));f.rotation.x=Math.PI/2,f.position.set(0,t,h*(o+e+n)/2),s.add(f);let m=new St(new Qe(.008,.008,l-t-e-n),we("#333",.6));m.position.set(0,(l+t+e+n)/2,h*.2),m.rotation.x=h*-.35,s.add(m)}let c=new St(new te(.06,.06,o*2+.06),a);return c.position.y=l,s.add(c),Pn(s),s=Xn(s),s.userData={h:t,inner:e-n},s}function Mx(i={}){let t=new jt,e=i.n||4,n=i.len||1.4,s=1.2,r=we("#e8e8e8",.5),a=we("#1f6b45",.55);for(let l=0;l<e;l++){let c=.15+.13*l/(e-1),h=-n/2+.08+l*(n-.16)/(e-1),d=s-l*.07,u=.16,f=new te(u,c,d),m=f.attributes.position;for(let p=0;p<m.count;p++){let M=m.getY(p)+c/2;m.setY(p,m.getX(p)<0&&M>c/2?c-.06:M)}f.computeVertexNormals();let v=new St(f,r);v.position.set(h,0,0),t.add(v);let g=new St(new te(u+.004,.035,d*.5),a);g.position.set(h,c*.45,0),t.add(g)}let o=we("#f5f5f2",.4);for(let l of[-1,1])for(let c of[-1,1]){let h=new St(new Qe(.018,.018,1.2,10),o);h.position.set(l*(n/2+.05),.6,c*(s/2+.05)),t.add(h);let d=new St(new De(.03,10,8),we("#d23a2e",.4));d.position.set(l*(n/2+.05),1.21,c*(s/2+.05)),t.add(d)}return Pn(t),t=Xn(t),t.userData={len:n,W:s},t}function Sx(i){let t=Yr(128,128,o=>{o.fillStyle="#fff",o.fillRect(0,0,128,128),o.fillStyle="#1f6b45",o.font="800 92px sans-serif",o.textAlign="center",o.fillText(String(i),64,98)}),e=we("#fff"),n=new xe({map:t}),s=new jt,r=new St(new te(.3,.3,.02),[e,e,e,e,n,n]);r.position.y=.3,r.rotation.x=-.35,s.add(r);let a=new St(new te(.02,.3,.02),we("#999"));return a.position.set(0,.14,-.06),s.add(a),Pn(s),s}var oh={};function lh(i){Object.keys(i||{}).forEach(t=>{oh[t]=i[t]})}function bx(i){return!!oh[i]}var Ex=(i,t,e)=>i+(t-i)*e,Fd=i=>{let t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)},Tx=(i,t,e)=>Fd((e-i)/(t-i)),wx=(i,t,e)=>Math.exp(-(((i-t)/e)**2));function Ax(i,t){let e=i.map(c=>({x:c[0],z:c[1]})),n=e.length,s=[],r=c=>t?e[(c+n)%n]:e[Math.max(0,Math.min(n-1,c))],a=t?n:n-1;for(let c=0;c<a;c++){let h=r(c-1),d=r(c),u=r(c+1),f=r(c+2);for(let m=0;m<24;m++){let v=m/24,g=v*v,p=g*v,M=(w,y,b,E)=>.5*(2*y+(-w+b)*v+(2*w-5*y+4*b-E)*g+(-w+3*y-3*b+E)*p);s.push({x:M(h.x,d.x,u.x,f.x),z:M(h.z,d.z,u.z,f.z)})}}s.push(t?{...s[0]}:{...e[n-1]});let o=[0];for(let c=1;c<s.length;c++)o.push(o[c-1]+Math.hypot(s[c].x-s[c-1].x,s[c].z-s[c-1].z));let l=o[o.length-1]||1;return{length:l,pts:s,at(c){c=t?(c%1+1)%1:Math.max(0,Math.min(1,c));let h=c*l,d=0,u=o.length-1;for(;u-d>1;){let g=d+u>>1;o[g]<h?d=g:u=g}let f=s[d],m=s[u],v=(h-o[d])/(o[u]-o[d]||1);return{x:f.x+(m.x-f.x)*v,z:f.z+(m.z-f.z)*v,yaw:Math.atan2(-(m.z-f.z),m.x-f.x)}}}}var Rx={Group:jt,Object3D:Ee,Mesh:St,InstancedMesh:mi,Line:Es,LineSegments:gr,Points:_r,Sprite:Di,SpriteMaterial:pi,Vector2:Mt,Vector3:P,Quaternion:Xe,Euler:nn,Matrix4:ne,Color:Ot,Box3:cn,MathUtils:Ec,BufferGeometry:se,BufferAttribute:ae,Float32BufferAttribute:Vt,BoxGeometry:te,CylinderGeometry:Qe,SphereGeometry:De,TorusGeometry:Hn,PlaneGeometry:ei,CircleGeometry:vr,RingGeometry:Tr,ConeGeometry:Mr,CapsuleGeometry:Fi,TubeGeometry:Bi,CatmullRomCurve3:_i,MeshStandardMaterial:xe,MeshBasicMaterial:Ni,MeshLambertMaterial:wr,LineBasicMaterial:Ui,LineDashedMaterial:Ar,CanvasTexture:ti,DoubleSide:qe,FrontSide:Gn,BackSide:Ne,SRGBColorSpace:Ie,RepeatWrapping:Fn},Ze=480,Cx=1.35,Ix=2.1,Nd=(i,t)=>{for(;i-t>Math.PI;)i-=2*Math.PI;for(;i-t<-Math.PI;)i+=2*Math.PI;return i};function Ud(i,t){let e=[],n=[],s=[],r=[0],a=[];i.forEach(d=>{let u=d[t];a.push(!!u),e.push(u?u.x:NaN),n.push(u?u.z:NaN)});for(let d=0;d<=Ze;d++){let u=i[d][t];if(d){let f=a[d]&&a[d-1]?Math.hypot(e[d]-e[d-1],n[d]-n[d-1]):0;r.push(r[d-1]+f*(u&&u.still?1-Math.min(1,+u.still):1))}}let o=null,l=[];for(let d=0;d<=Ze;d++){let u=Math.max(0,d-2),f=Math.min(Ze,d+2),m=e[f]-e[u],v=n[f]-n[u];l.push(a[u]&&a[f]&&Math.hypot(m,v)>.002?Math.atan2(-v,m):null)}let c=l.find(d=>d!=null);for(let d=0;d<=Ze;d++){let u=l[d]!=null?l[d]:o!=null?o:c!=null?c:0;o!=null&&(u=Nd(u,o)),s.push(u),o=u}let h=s.map((d,u)=>{let f=0,m=0;for(let v=-3;v<=3;v++){let g=u+v;g>=0&&g<=Ze&&(f+=Nd(s[g],d),m++)}return f/m});return{x:e,z:n,yaw:h,dist:r,has:a}}var Xi=(i,t)=>{let e=Math.max(0,Math.min(1,t))*Ze,n=Math.min(Ze-1,Math.floor(e)),s=e-n;return i[n]+(i[n+1]-i[n])*s};function Px(i,t,e={}){let n=oh[t];if(!n)throw new Error("Nezn\xE1m\xE1 sc\xE9na "+t);let s=zs[e.quality]?e.quality:Id(),r=e.D||7,a=new jt,o={THREE:Rx,scene:a,ob:ah,lerp:Ex,ss:Fd,sm:Tx,bump:wx,path:Ax};n.build&&n.build(o);let l=[];for(let O=0;O<=Ze;O++)l.push(n.at(O/Ze,o));let c=Ud(l,"dog"),h=Ud(l,"hand"),d=n.cam||{},u=d.mode==="high",f={dist:d.dist!=null?d.dist:u?7.5:5.2,height:d.height!=null?d.height:u?7:1.5,lookAhead:d.lookAhead!=null?d.lookAhead:u?0:.6,fov:d.fov||(u?40:34),az:d.az!=null?d.az:u?0:.22,lookY:d.lookY!=null?d.lookY:u?0:.45,smooth:d.smooth!=null?d.smooth:.05,followY:d.followY!=null?d.followY:.6},m=[],v=[],g=[];l.forEach(O=>{let nt=O.focus||O.dog||{x:0,z:0};m.push(nt.x),v.push(nt.z),g.push(nt.y!=null?nt.y:O.focus?0:O.dog&&O.dog.y||0)});let p=Math.max(1,Math.round(f.smooth*Ze)),M=O=>O.map((nt,ct)=>{let st=0,mt=0;for(let Ut=-p;Ut<=p;Ut++){let Rt=Math.max(0,Math.min(Ze,ct+Ut));st+=O[Rt],mt++}return st/mt}),w=M(m),y=M(v),b=M(g),E=new cn().setFromObject(a),A=isFinite(E.min.x)?E.min.x:0,_=isFinite(E.max.x)?E.max.x:0,T=isFinite(E.min.z)?E.min.z:0,C=isFinite(E.max.z)?E.max.z:0;[c,h].forEach(O=>O.x.forEach((nt,ct)=>{O.has[ct]&&(A=Math.min(A,nt),_=Math.max(_,nt),T=Math.min(T,O.z[ct]),C=Math.max(C,O.z[ct]))}));let I={x0:Math.max(A,-30),x1:Math.min(_,30),z0:Math.max(T,-20),z1:Math.min(C,20)},L=Pd(i,s,I),G=L.Q,D=L.scene;D.add(a);let k=Md({shells:G.shells,shortShells:G.shortShells});D.add(k),k.traverse(O=>{O.isMesh&&O.userData.shell===0&&(O.castShadow=!0)});let W=Ad({quality:s});D.add(W),W.traverse(O=>{O.isMesh&&!O.userData.shell&&(O.castShadow=!0)}),o.dog=k,o.hand=W,o.world=L;let z=new We(f.fov,2,.05,500),$=!1,N=0,H=[],X=0;function rt(){let O=i.clientWidth||i.width||300,nt=i.clientHeight||Math.round(O/2);L.R.setSize(O,nt,!1),z.aspect=O/nt,z.updateProjectionMatrix()}rt();let at=new P,Dt=new P;function At(O){if($)return;O=(O%1+1)%1;let nt=n.at(O,o)||{},ct=nt.dog;ct?(k.visible=!ct.hidden,k.position.set(ct.x,ct.y||0,ct.z),k.rotation.y=ct.yaw!=null?ct.yaw:Xi(c.yaw,O),k.rotation.z=ct.slope||0,jc(k,Xi(c.dist,O)/Cx%1,ct.air||0,ct.pitch||0,+ct.still||0,ct.land||0,{time:O*r,sit:ct.sit||0})):k.visible=!1;let st=nt.hand;if(st){W.visible=!0,W.position.set(st.x,st.y||0,st.z),W.rotation.y=st.yaw!=null?st.yaw:Xi(h.yaw,O);let ve=Math.min(Ze-1,Math.floor(O*Ze)),F=st.still?0:(h.dist[ve+1]-h.dist[ve])*Ze/r;_l(W,{phase:Xi(h.dist,O)/Ix%1,speed:Math.min(1,F/4),point:st.point||0,pointSide:st.pointSide||1,still:!!st.still})}else W.visible=!1;nt.extra&&nt.extra(o);let mt=Xi(w,O),Ut=Xi(y,O),Rt=Xi(b,O)*f.followY,Ft=Math.max(0,Math.floor(O*Ze)-6),Xt=Math.min(Ze,Ft+12),kt=w[Xt]-w[Ft],ee=y[Xt]-y[Ft],ue=Math.hypot(kt,ee);ue>.001?(kt/=ue,ee/=ue):(kt=0,ee=0);let Le=f.lookAhead*Math.min(1,ue*10);z.position.set(mt-f.dist*Math.sin(f.az),f.height+Rt,Ut+f.dist*Math.cos(f.az)),z.lookAt(at.set(mt+kt*Le,f.lookY+Rt,Ut+ee*Le)),L.R.render(D,z);let de=performance.now();if(N&&de-N<250&&X<2&&(H.push(de-N),H.length>=30)){let ve=H.reduce((Be,re)=>Be+re,0)/H.length;H=[];let F=ve>28?L.tier==="high"?"mid":L.tier==="mid"?"low":null:null;F?(L.setTier(F),ot(zs[F]),rt(),X++):X=9}N=de}function ot(O){k.traverse(nt=>{if(nt.isMesh&&nt.userData.shells){let ct=nt.userData.shells,st=ct>5?O.shells:O.shortShells,mt=Math.max(1,Math.round(ct/Math.max(1,st)));nt.visible=nt.userData.shell%mt===0||nt.userData.shell===ct}})}function Z(){if($)return;$=!0;let O=new Set;D.traverse(nt=>{nt.geometry&&!O.has(nt.geometry)&&(O.add(nt.geometry),nt.geometry.dispose()),(nt.material?Array.isArray(nt.material)?nt.material:[nt.material]:[]).forEach(st=>{O.has(st)||(O.add(st),Object.keys(st).forEach(mt=>{let Ut=st[mt];Ut&&Ut.isTexture&&!O.has(Ut)&&(O.add(Ut),Ut.dispose())}),st.dispose())})}),L.R.dispose();try{L.R.forceContextLoss()}catch{}}return{render:At,resize:rt,dispose:Z,draw:()=>{$||L.R.render(D,z)},get tier(){return L.tier},renderer:L.R,scene:D,camera:z,dog:k,hand:W}}function Hs(i){let t=i.length,e=i.map(a=>a[0]),n=i.map(a=>a[1]),s=[],r=[];for(let a=0;a<t-1;a++)s.push((n[a+1]-n[a])/(e[a+1]-e[a]));for(let a=0;a<t;a++)if(a===0)r.push(s[0]);else if(a===t-1)r.push(s[t-2]);else{let o=e[a]-e[a-1],l=e[a+1]-e[a];r.push(s[a-1]*s[a]<=0?0:3*(o+l)/((2*l+o)/s[a-1]+(l+2*o)/s[a]))}for(let a=0;a<t-1;a++)s[a]===0&&(r[a]=0,r[a+1]=0);return a=>{if(a<=e[0])return n[0];if(a>=e[t-1])return n[t-1];let o=0;for(;a>e[o+1];)o++;let l=e[o+1]-e[o],c=(a-e[o])/l,h=c*c,d=h*c;return(2*d-3*h+1)*n[o]+(d-2*h+c)*l*r[o]+(-2*d+3*h)*n[o+1]+(d-h)*l*r[o+1]}}function ch(i,t,e,n,s){let a=[0];for(let l=1;l<=400;l++){let c=(l-.5)/400;a.push(a[l-1]+1-s*Math.exp(-(((c-e)/n)**2)))}let o=a[400];return l=>{let c=Math.max(0,Math.min(1,l))*400,h=Math.min(399,Math.floor(c));return i+(t-i)*(a[h]+(a[h+1]-a[h])*(c-h))/o}}function hh(i,t,e=.27){let n=i(t-e),s=i(t+e);return{y:(n+s)/2,pitch:Math.atan2(s-n,2*e)}}function uh(i,t,e,n,s){let{sm:r,bump:a}=s,o=(t+e)/2,l=(e-t)/2,c=i>t&&i<e,h=c?n*(1-((i-o)/l)**2):0,d=-.05*a(i,t-.35,.35),u=r(t-.5,t+.1,i)*(1-r(e-.9,e-.2,i)),f=r(e-1.1,e-.4,i)*(1-r(e-.05,e+.55,i)),m=n/.5,v=(.36*a(i,t+.15,.45)-.32*a(i,e-.3,.45))*Math.min(1,m*1.2)+.05*a(i,t-.75,.3);return{y:Math.max(0,h)+d,air:u,land:f,pitch:v}}var Ti=(i,t,e,n,s=0)=>{let r=i.ob.numSign(t);r.position.set(e,0,n),r.rotation.y=s,i.scene.add(r)},Bd={jump:{cam:{dist:4.8,height:1.3,lookAhead:.5,az:.16,smooth:.06},build(i){i.scene.add(i.ob.jump({h:.55})),Ti(i,3,-.5,-1.35,.5),this.X=ch(-8.5,7.5,.5,.1,.55)},at(i,t){let e=this.X(i),n=uh(e,-1.45,1.35,.47,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch},hand:{x:t.lerp(-6.2,3.4,i)+.5*Math.sin(i*3),z:-2.6,point:t.sm(.4,.48,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}},tunnel:{cam:{mode:"high",dist:6.6,height:4.1,fov:38,lookY:.1,smooth:.12,followY:0},build(i){let e=[[-1.6,.7],[-1.6,.2]];for(let m=0;m<=12;m++){let v=Math.PI-m/12*Math.PI;e.push([1.6*Math.cos(v),-1.6*Math.sin(v)*1.05+0])}e.push([1.6,.2],[1.6,.7]);let n=i.ob.tunnel({points:e,color:"#2f6fd0"});i.scene.add(n),Ti(i,5,-2.35,.75,.3);let s=[[-3.6,4.2],[-2.6,2.6],[-1.75,1.3],[-1.6,.7]],r=[[1.6,1.3],[1.95,2.15],[2.9,2.65],[4.6,2.95],[6.8,3]],a=s.concat(e.slice(1,-1)).concat([[1.6,.7]]).concat(r);this.P=i.path(a);let o=this.P.length,l=0,c=0,h=0;for(let m=1;m<this.P.pts.length;m++){let v=this.P.pts[m-1],g=this.P.pts[m];l+=Math.hypot(g.x-v.x,g.z-v.z),!c&&Math.hypot(g.x+1.6,g.z-.7)<.03&&(c=l),Math.hypot(g.x-1.6,g.z-.7)<.03&&(h=l)}this.in0=c/o,this.in1=h/o,this.len=o,this.U=Hs([[0,0],[.14,this.in0],[.68,this.in1],[.78,this.in1+1.3/o],[1,1]]),this.H=i.path([[-2.8,2.6],[-2.2,1.9],[-.8,1.6],[.9,1.7],[2.5,1.3],[3.1,1.1],[4.1,1.7],[6.8,2.3]]);let d=0,u=1e9,f=0;this.H.pts.forEach((m,v)=>{v&&(f+=Math.hypot(m.x-this.H.pts[v-1].x,m.z-this.H.pts[v-1].z));let g=Math.hypot(m.x-3.1,m.z-1.1);g<u&&(u=g,d=f/this.H.length)}),this.HU=Hs([[0,0],[.12,.06],[.5,d-.03],[.58,d],[.72,d+.004],[.8,d+.07],[1,1]])},at(i,t){let e=this.U(i),n=this.P.at(e),s=e*this.len,r=this.in0*this.len,a=this.in1*this.len,o=Math.min(s-r,a-s),l=o>0,c={x:n.x,z:n.z,y:l?-.13*t.ss(o/.35+.3):0,hidden:o>.9},h=this.HU(i),d=this.H.at(h),u=t.sm(.5,.56,i)*(1-t.sm(.7,.76,i)),f={x:d.x,z:d.z,point:.8*(1-t.sm(.12,.2,i))+.8*t.sm(.64,.7,i)*(1-t.sm(.84,.9,i)),pointSide:(i<.3,1)};u>.5&&(f.yaw=2.88);let m=t.sm(.72,.95,i);return{dog:c,hand:f,focus:{x:t.lerp(.2,3.8,m)+n.x*.1,z:t.lerp(.3,2.2,m),y:0}}}},weave:{cam:{dist:5.2,height:2.3,lookAhead:.5,az:.12,lookY:.3,fov:36,smooth:.07},build(i){let t=i.ob.weave();t.position.x=-3.3,i.scene.add(t),Ti(i,7,-4.1,-.6,.4),this.x0=-3.3,this.sp=.6,this.X=Hs([[0,-8.2],[.2,-3.75],[.23,-3.3-.02],[.75,3.3+.02],[.79,3.8],[1,7.4]])},at(i,t){let e=this.X(i),n=.21,s=this.x0,r=s+11*this.sp,a=n*Math.cos(Math.PI*(e-s)/this.sp),o=t.sm(s-.75,s-.05,e)*(1-t.sm(r+.05,r+.75,e)),l=e<s?t.lerp(.55,n,t.sm(s-3.5,s-.3,e)):t.lerp(-n,.1,t.sm(r,r+1.2,e)),c=t.lerp(l,a,o);return{dog:{x:e,z:c},hand:{x:t.lerp(-7.2,5,i)+.3*Math.sin(i*5),z:-1.45,point:.5*(1-t.sm(.3,.4,i))+.5*t.sm(.72,.8,i),pointSide:-1}}}},aframe:{cam:{dist:6,height:2.1,lookAhead:.4,az:.2,lookY:.5,fov:36,smooth:.08,followY:.5},build(i){let t=i.ob.aframe();i.scene.add(t),this.A=t.userData,Ti(i,4,-3.2,-1,.4);let e=this.A.half,n=e+.12-.28;this.stopX=n,this.X=Hs([[0,-7.4],[.2,-e-.2],[.44,0],[.62,e-1],[.7,n],[.9,n],[.93,n+.4],[1,n+3.4]])},at(i,t){let e=this.X(i),n=hh(this.A.surf,e),s=t.sm(.69,.71,i)*(1-t.sm(.89,.91,i));return{dog:{x:e,z:0,y:n.y+.03*s,slope:n.pitch*(1-.5*s),pitch:n.pitch*.5*s,still:s},hand:{x:t.lerp(-6.5,1.2,t.sm(0,.7,i))+t.lerp(0,4.5,t.sm(.9,1,i)),z:-1.9,still:i>.72&&i<.9?1:0,point:.6*(1-t.sm(.66,.7,i))+.7*t.sm(.9,.93,i),pointSide:-1}}}},dogwalk:{cam:{dist:6.4,height:1.4,lookAhead:.5,az:.22,lookY:.55,fov:36,smooth:.08,followY:.6},build(i){let t=i.ob.dogwalk();i.scene.add(t),this.W=t.userData,Ti(i,6,-6,-.8,.4);let e=this.W.total,n=this.W.L/2,s=e+.12-.28;this.X=Hs([[0,-e-3.2],[.08,-e+.1],[.3,-n],[.52,n],[.62,e-.8],[.67,s],[.84,s],[.87,s+.4],[1,s+4]])},at(i,t){let e=this.X(i),n=hh(this.W.surf,e),s=t.sm(.66,.68,i)*(1-t.sm(.83,.85,i));return{dog:{x:e,z:0,y:n.y+.03*s,slope:n.pitch*(1-.5*s),pitch:n.pitch*.5*s,still:s},hand:{x:t.lerp(-8.4,4.3,t.sm(0,.68,i))+t.lerp(0,4,t.sm(.84,1,i)),z:-1.25,still:i>.7&&i<.84?1:0,point:.5*(1-t.sm(.62,.68,i))+.8*t.sm(.84,.87,i),pointSide:-1}}}},seesaw:{cam:{dist:5.6,height:1.3,lookAhead:.3,az:.2,lookY:.5,fov:36,smooth:.08,followY:.5},build(i){let t=i.ob.seesaw();i.scene.add(t),this.S=t.userData,Ti(i,8,-2.6,-.8,.4);let e=this.S.L;this.Sd=Hs([[0,-e/2-4.2],[.12,-e/2+.05],[.36,.2],[.52,.55],[.61,e/2-.3],[.8,e/2-.3],[.84,e/2+.35],[1,e/2+4.2]]);let n=this.S.maxT;this.Tl=s=>s<.36?n:s<.62?n-2*n*i.ss((s-.36)/.26)**1.4:-n+.06*n*Math.sin((s-.62)/.05*Math.PI)*Math.exp(-(s-.62)/.02)*(s<.68?1:0)},at(i,t){let e=this.Tl(i);this.S.setTilt(e);let n=this.Sd(i),s=this.S,r=Math.cos(e),a=s.L/2*r,o=u=>Math.abs(u)<=a?Math.max(0,s.H+u*Math.tan(e)+s.th/r):0,l=Math.abs(n)<=s.L/2?n*r:n<0?-a+(n+s.L/2):a+(n-s.L/2),c=hh(o,l),h=t.sm(.8,.83,i)*(1-t.sm(.84,.87,i)),d=t.sm(.6,.62,i)*(1-t.sm(.79,.8,i))+t.sm(.36,.4,i)*(1-t.sm(.48,.52,i))*.6;return{dog:{x:l,z:0,y:c.y+h*.12,slope:c.pitch*(1-h),still:d,air:h*.6},hand:{x:t.lerp(-5.6,2.3,t.sm(0,.62,i))+t.lerp(0,3.6,t.sm(.82,1,i)),z:-1.3,still:i>.64&&i<.82?1:0,point:.6*t.sm(.8,.84,i),pointSide:-1}}}},tire:{cam:{dist:4.8,height:1.35,lookAhead:.4,az:.55,lookY:.6,smooth:.06},build(i){let t=i.ob.tire({h:.8});i.scene.add(t),Ti(i,2,-.5,-1.25,.5),this.X=ch(-8.5,7.5,.5,.1,.5)},at(i,t){let e=this.X(i),n=uh(e,-1.35,1.35,.38,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch},hand:{x:t.lerp(-6,3.6,i),z:-2.2,point:t.sm(.35,.45,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}},longjump:{cam:{dist:4.8,height:1.6,lookAhead:.5,az:.22,smooth:.06},build(i){let t=i.ob.longjump({n:4,len:1.4});i.scene.add(t),Ti(i,9,-1,-1.2,.5),this.X=ch(-8.5,7.5,.5,.1,.5)},at(i,t){let e=this.X(i),n=uh(e,-1.45,1.55,.36,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch*.8},hand:{x:t.lerp(-6,3.6,i),z:-2.1,point:t.sm(.35,.45,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}}};var un=Math.PI;function qi(i){let t=i.length,e=i.map(a=>a[0]),n=i.map(a=>a[1]),s=[],r=[];for(let a=0;a<t-1;a++)s.push((n[a+1]-n[a])/(e[a+1]-e[a]));for(let a=0;a<t;a++)if(a===0)r.push(s[0]);else if(a===t-1)r.push(s[t-2]);else{let o=e[a]-e[a-1],l=e[a+1]-e[a];r.push(s[a-1]*s[a]<=0?0:3*(o+l)/((2*l+o)/s[a-1]+(l+2*o)/s[a]))}for(let a=0;a<t-1;a++)s[a]===0&&(r[a]=0,r[a+1]=0);return a=>{if(a<=e[0])return n[0];if(a>=e[t-1])return n[t-1];let o=0;for(;a>e[o+1];)o++;let l=e[o+1]-e[o],c=(a-e[o])/l,h=c*c,d=h*c;return(2*d-3*h+1)*n[o]+(d-2*h+c)*l*r[o]+(-2*d+3*h)*n[o+1]+(d-h)*l*r[o+1]}}function Lx(i,t,e,n,s){let{sm:r,bump:a}=s,o=(t+e)/2,l=(e-t)/2,c=i>t&&i<e,h=c?n*(1-((i-o)/l)**2):0,d=-.05*a(i,t-.35,.35),u=r(t-.5,t+.1,i)*(1-r(e-.9,e-.2,i)),f=r(e-1.1,e-.4,i)*(1-r(e-.05,e+.55,i)),m=.36*a(i,t+.15,.45)-.32*a(i,e-.3,.45)+.05*a(i,t-.75,.3);return{y:Math.max(0,h)+d,air:u,land:f,pitch:m}}function dh(i,t,e){let n=1e9,s=0,r=0,a=0;for(let o=0;o<i.pts.length;o++){o&&(r+=Math.hypot(i.pts[o].x-i.pts[o-1].x,i.pts[o].z-i.pts[o-1].z));let l=Math.hypot(i.pts[o].x-t,i.pts[o].z-e);l<n&&(n=l,s=o,a=r)}return a/i.length}function vn(i,t,e,n,s,r=-.9,a=-1.55){let o=i.ob.jump({h:.55});if(o.position.set(t,0,e),o.rotation.y=n,i.scene.add(o),s){let l=i.ob.numSign(s),c=Math.cos(n),h=Math.sin(n);l.position.set(t+r*c+a*h,0,e-r*h+a*c),l.rotation.y=n+.4,i.scene.add(l)}return{x:t,z:e}}function Gs(i,t,e,n){let s=i.path(t),r=s.length,a=qi(n.map(([l,c])=>[l,Array.isArray(c)?dh(s,c[0],c[1]):c])),o=e.map(l=>dh(s,l.x,l.z)*r);return l=>{let c=a(l),h=s.at(c),d=c*r,u={y:0,air:0,land:0,pitch:0},f=1e9;return o.forEach(m=>{Math.abs(d-m)<f&&(f=Math.abs(d-m),u=Lx(d-m,-1.45,1.35,.47,i))}),{x:h.x,z:h.z,y:u.y,air:u.air,land:u.land,pitch:u.pitch}}}function Vs(i,t,e){let n=i.path(t),s=qi(e.map(([r,a])=>[r,Array.isArray(a)?dh(n,a[0],a[1]):a]));return r=>{let a=n.at(s(r));return{x:a.x,z:a.z}}}function wi(i,t){return e=>{if(e<=i[0][0])return i[0][1];for(let n=1;n<i.length;n++)if(e<=i[n][0])return t.lerp(i[n-1][1],i[n][1],t.sm(i[n-1][0],i[n][0],e));return i[i.length-1][1]}}var Zr=(i,t,e=.5)=>({x:i.x+(t.x-i.x)*e,z:i.z+(t.z-i.z)*e,y:0}),Jr=(i={})=>({mode:"high",dist:6.8,height:5.6,fov:40,lookY:0,smooth:.1,followY:0,lookAhead:0,...i});function Od(i){return{cam:Jr({az:un-.25,dist:5.4,height:5.4,fov:42}),build(t){let e=vn(t,-3.4,1.2,0,1,-.9,1.5),n=vn(t,1,1.2,0,2,-.9,1.5),s=vn(t,0,-2.4,un,3,-.9,1.5);this.dog=Gs(t,[[-7.4,1.2],[-3.4,1.2],[1,1.2],[2.8,1.2],i?[4.8,1.1]:[4.1,.95],i?[6.1,.3]:[5,.2],i?[6.2,-1.1]:[5.2,-1],i?[5.2,-2.15]:[4.5,-2.1],[2.8,-2.4],[0,-2.4],[-2.6,-2.4],[-4.6,-2.4]],[e,n,s],[[0,0],[.42,[1,1.2]],[.82,[0,-2.4]],[1,1]]);let r=i?[[-4.6,3],[-1.5,3],[1.8,2.95],[3,2.25],[3.9,1.2],[4.3,.3],[3.9,-.4],[2.6,-.7],[-1.5,-.65],[-5,-.65]]:[[-4.6,3],[-1.5,3],[2,2.95],[2.75,2.4],[3,1.2],[2.9,.1],[2.2,-.55],[-1.5,-.65],[-5,-.65]];this.hand=Vs(t,r,i?[[0,0],[.24,[1.8,2.95]],[.37,[3.9,1.2]],[.43,[4.3,.3]],[.54,[2.6,-.7]],[1,1]]:[[0,0],[.24,[2,2.95]],[.35,[3,1.2]],[.41,[2.9,.1]],[.48,[2.2,-.55]],[1,1]]),this.yaw=i?null:qi([[0,0],[.25,.05],[.31,1.9],[.36,2.7],[.44,3],[.5,un],[1,un]]),this.look=wi(i?[[0,.35],[.28,.35],[.33,0],[.42,0],[.48,-.9],[.62,-.6],[.7,0]]:[[0,.35],[.25,.35],[.3,0]],t),this.pt=wi([[0,.15],[.08,.75],[.26,.75],[.31,0],[.46,0],[.53,.9],[.8,.9],[.88,.15]],t)},at(t,e){let n=this.dog(t),s=this.hand(t),r=this.look(t),a={x:s.x,z:s.z,point:this.pt(t),pointSide:t<.42?1:-1};return this.yaw&&(a.yaw=this.yaw(t)),{dog:n,hand:a,focus:Zr(n,s,.45),extra:o=>ih(o.hand,r)}}}}var zd={front:Od(!1),blind:Od(!0),rear:{cam:Jr({az:un,dist:7,height:6.2}),build(i){let t=vn(i,-3.6,1.2,0,1,-.9,1.5),e=vn(i,1,1.2,0,2,-.9,1.5),n=vn(i,4.6,-2.4,un/2,3,-.9,1.5);this.dog=Gs(i,[[-6.6,1.2],[-3.6,1.2],[1,1.2],[2.8,1.15],[4.1,.6],[4.6,-.6],[4.6,-2.4],[4.6,-4.4]],[t,e,n],[[0,0],[.46,[1,1.2]],[.84,[4.6,-2.4]],[1,1]]),this.hand=Vs(i,[[-7.8,3],[-3.4,2.9],[-1.4,2.5],[-.7,1.2],[-.3,-.4],[1.2,-1],[2.5,-1.7],[2.8,-2.9],[2.8,-4.2]],[[0,0],[.3,[-3.4,2.9]],[.42,[-1.4,2.5]],[.51,[-.7,1.2]],[.58,[-.3,-.4]],[.66,[1.2,-1]],[1,1]]),this.pt=wi([[0,.3],[.12,.8],[.36,1],[.46,.3],[.52,0],[.6,.2],[.68,.9],[.86,.9],[.93,.2]],i),this.look=wi([[0,.3],[.4,.3],[.5,0],[.58,-.5],[.7,0]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=this.look(i);return{dog:e,hand:{x:n.x,z:n.z,point:this.pt(i),pointSide:i<.52?1:-1},focus:Zr(e,n,.45),extra:r=>ih(r.hand,s)}}},wrap:{cam:Jr({az:0,dist:6.6,height:5.4}),build(i){let t=vn(i,0,0,0,0);this.dog=Gs(i,[[-6.4,0],[-3,0],[0,0],[1.5,.05],[2.25,.75],[2.15,1.65],[1.2,2.05],[-.4,2.05],[-2.4,1.95],[-5.2,1.8]],[t],[[0,0],[.4,[0,0]],[.6,[2.15,1.65]],[1,1]]),this.hand=Vs(i,[[-4.6,3.3],[-1.4,3.3],[-.5,3.3],[-.8,3.28],[-2.4,3.2],[-5.4,3]],[[0,0],[.36,[-1.4,3.3]],[.47,[-.5,3.3]],[.58,[-.8,3.28]],[1,1]]),this.yaw=qi([[0,0],[.38,0],[.48,1.2],[.58,2.2],[.68,2.9],[.74,un],[1,un]]),this.pt=wi([[0,.2],[.1,.7],[.36,.7],[.45,0],[.52,.6],[.56,.6],[.66,.1],[.74,.6],[.9,.6],[.96,.2]],i)},at(i,t){let e=this.dog(i),n=this.hand(i);return{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.45?1:-1},focus:Zr(e,n,.4)}}},spin:{cam:Jr({az:0,dist:6.6,height:5.6}),build(i){let t=vn(i,0,0,0,0);this.dog=Gs(i,[[-6.4,0],[-3,0],[0,0],[1.5,-.05],[2.25,-.8],[2.1,-1.75],[1,-2.2],[-.5,-2],[-1.7,-1.1],[-2.5,.05],[-3.6,.45],[-5.6,.55]],[t],[[0,0],[.42,[0,0]],[.62,[2.1,-1.75]],[1,1]]),this.hand=Vs(i,[[-4.4,1.95],[-1.3,1.95],[-.5,1.95],[-.7,1.95],[-2.4,1.9],[-5.6,1.8]],[[0,0],[.38,[-1.3,1.95]],[.5,[-.5,1.95]],[.62,[-.7,1.95]],[1,1]]),this.yaw=qi([[0,0],[.42,0],[.52,1.3],[.62,2.2],[.72,2.9],[.78,un],[1,un]]),this.pt=wi([[0,.2],[.1,.7],[.4,.7],[.47,0],[.53,.8],[.56,.8],[.68,.2],[.8,.5],[.92,.5],[.97,.2]],i)},at(i,t){let e=this.dog(i),n=this.hand(i);return{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.47?1:-1},focus:Zr(e,n,.4)}}},backside:{cam:Jr({az:0,dist:5.8,height:6,fov:42}),build(i){let t=vn(i,0,0,un,0);this.dog=Gs(i,[[-7.2,2.2],[-3.6,2.2],[-.4,2.1],[1.4,1.95],[2.7,1.3],[3,.4],[2.4,.02],[1.4,0],[0,0],[-2,0],[-4.4,0],[-6.4,0]],[t],[[0,0],[.45,[1.4,1.95]],[.64,[0,0]],[1,1]]),this.hand=Vs(i,[[-6.4,4],[-2.8,3.9],[-1.2,3.55],[-1.35,2.9],[-2.8,2.3],[-6.2,2]],[[0,0],[.38,[-2.8,3.9]],[.5,[-1.2,3.55]],[.62,[-1.35,2.9]],[1,1]]),this.yaw=qi([[0,0],[.42,.15],[.52,1.3],[.62,2.4],[.7,3],[.76,un],[1,un]]),this.pt=wi([[0,.2],[.12,.5],[.3,.9],[.46,.9],[.52,.3],[.58,.8],[.72,.8],[.8,.3],[.9,.5]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=Zr(e,n,.4);return s.z=Math.min(s.z,2.2)-.4,{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.55?1:-1},focus:s}}},start:{cam:{mode:"high",dist:7.4,height:4.2,fov:40,az:.15,lookY:.2,smooth:.14,followY:0,lookAhead:0},build(i){let t=[vn(i,-3,0,0,1,-.9,-1.5),vn(i,.9,0,0,2,-.9,-1.5),vn(i,4.8,0,0,3,-.9,-1.5)];this.dog=Gs(i,[[-5.6,0],[-3,0],[.9,0],[4.8,0],[7.6,0]],t,[[0,0],[.4,0],[.43,.012],[1,1]]),this.hand=Vs(i,[[-4.95,1.2],[-3.9,1.65],[-2.2,1.85],[-.8,1.85],[3,1.85],[7.2,1.8]],[[0,0],[.06,0],[.3,[-.8,1.85]],[.43,[-.8,1.85]],[.55,[.2,1.85]],[1,1]]),this.yaw=qi([[0,0],[.28,0],[.33,2.6],[.36,2.8],[.42,2.8],[.47,.2],[.5,0],[1,0]]);let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");n.fillStyle="rgba(255,255,255,.94)",n.beginPath(),n.roundRect?n.roundRect(8,8,240,96,40):n.rect(8,8,240,96),n.fill(),n.beginPath(),n.moveTo(110,100),n.lineTo(128,124),n.lineTo(146,100),n.fill(),n.fillStyle="#1f6b45",n.font="800 64px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("Hop!",128,58);let s=new ti(e);s.colorSpace=Ie,this.bub=new Di(new pi({map:s,depthTest:!1,transparent:!0})),this.bub.scale.set(.9,.45,1),this.bub.renderOrder=10,this.bub.visible=!1,i.scene.add(this.bub),this.pt=wi([[0,0],[.34,0],[.37,1],[.42,1],[.46,0],[.5,0],[.56,.6],[.9,.6],[.96,0]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=i<.4,r=1-t.sm(.38,.41,i),a=this.bub,o=i>.36&&i<.47,l=n.x,c=n.z;return{dog:{...e,still:s,sit:r},hand:{x:n.x,z:n.z,yaw:this.yaw(i),still:i<.06||i>.33&&i<.43,point:this.pt(i),pointSide:i<.5?-1:1},focus:{x:t.lerp(-2.2,1.6,t.sm(.2,.9,i))+.15*e.x,z:.3,y:0},extra:()=>{a.visible=o,a.position.set(l,2.15,c)}}}}};lh(Bd);lh(zd||{});export{bx as hasScene,Px as mount};
