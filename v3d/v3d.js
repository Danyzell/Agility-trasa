var op=Object.defineProperty;var ap=(i,t)=>{for(var e in t)op(i,e,{get:t[e],enumerable:!0})};var Yu=0,Cc=1,$u=2;var ji=1,La=2,ks=3,jn=0,Be=1,We=2,ti=0,Gs=1,Pc=2,Ic=3,Lc=4,Zu=5;var ts=100,Ju=101,Ku=102,Qu=103,ju=104,tf=200,ef=201,nf=202,sf=203,Dc=204,Nc=205,rf=206,of=207,af=208,lf=209,cf=210,hf=211,uf=212,ff=213,df=214,Xo=0,qo=1,Yo=2,Cs=3,$o=4,Zo=5,Jo=6,Ko=7,Da=0,pf=1,mf=2,On=0,Uc=1,Fc=2,Bc=3,Vr=4,Oc=5,zc=6,Hc=7;var kc=300,Ni=301,es=302,Na=303,Ua=304,Wr=306,Yn=1e3,qn=1001,Qo=1002,Ge=1003,gf=1004;var Xr=1005;var Xe=1006,Fa=1007;var Ui=1008;var cn=1009,Gc=1010,Vc=1011,Vs=1012,Ba=1013,zn=1014,wn=1015,Hn=1016,Oa=1017,za=1018,Ws=1020,Wc=35902,Xc=35899,qc=1021,Yc=1022,Tn=1023,$n=1026,Fi=1027,Ha=1028,ka=1029,Bi=1030,Ga=1031;var Va=1033,qr=33776,Yr=33777,$r=33778,Zr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,$a=36196,Za=37492,Ja=37496,Ka=37488,Qa=37489,Jr=37490,ja=37491,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,fl=37820,dl=37821,pl=36492,ml=36494,gl=36495,xl=36283,_l=36284,Kr=36285,vl=36286;var xr=2300,jo=2301,Vo=2302,Mc=2303,Sc=2400,bc=2401,Ec=2402;var xf=3200;var Qr=0,_f=1,kn="",Re="srgb",_r="srgb-linear",vr="linear",fe="srgb";var Wo=7680;var vf=519,yf=512,Mf=513,Sf=514,yl=515,bf=516,Ef=517,Ml=518,wf=519,$c=35044,Sl=35048;var Zc="300 es",Fn=2e3,Ps=2001;function lp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tf(){let i=yr("canvas");return i.style.display="block",i}var fu={},Is=null;function Mr(...i){let t="THREE."+i.shift();Is?Is("log",t,...i):console.log(t,...i)}function Af(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Af(i);let t="THREE."+i.shift();if(Is)Is("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=Af(i);let t="THREE."+i.shift();if(Is)Is("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xi(...i){let t=i.join(" ");t in fu||(fu[t]=!0,Ot(...i))}function Rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cf={[Xo]:qo,[Yo]:Jo,[$o]:Ko,[Cs]:Zo,[qo]:Xo,[Jo]:Yo,[Ko]:$o,[Zo]:Cs},Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=1234567,dr=Math.PI/180,Ls=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Jc(i,t){return(i%t+t)%t}function hp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function up(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function fp(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function dp(i,t=1){return t-Math.abs(Jc(i,t*2)-t)}function pp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xp(i,t){return i+Math.random()*(t-i)}function _p(i){return i*(.5-Math.random())}function vp(i){i!==void 0&&(du=i);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yp(i){return i*dr}function Mp(i){return i*Ls}function Sp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kc={DEG2RAD:dr,RAD2DEG:Ls,generateUUID:hi,clamp:Kt,euclideanModulo:Jc,mapLinear:hp,inverseLerp:up,lerp:pr,damp:fp,pingpong:dp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:xp,randFloatSpread:_p,seededRandom:vp,degToRad:yp,radToDeg:Mp,isPowerOfTwo:Sp,ceilPowerOfTwo:bp,floorPowerOfTwo:Ep,setQuaternionFromProperEuler:wp,normalize:ge,denormalize:Un},ih=class ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var Et=ih,Ve=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(u!==v||c!==f||l!==d||h!==m){let g=c*f+l*d+h*m+u*v;g<0&&(f=-f,d=-d,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){let S=Math.acos(g),M=Math.sin(S);p=Math.sin(p*S)/M,a=Math.sin(a*S)/M,c=c*p+f*a,l=l*p+d*a,h=h*p+m*a,u=u*p+v*a}else{c=c*p+f*a,l=l*p+d*a,h=h*p+m*a,u=u*p+v*a;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var D=sh,Zl=new D,pu=new Ve,rh=class rh{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],S=s[1],M=s[4],_=s[7],b=s[2],E=s[5],A=s[8];return r[0]=o*v+a*S+c*b,r[3]=o*g+a*M+c*E,r[6]=o*p+a*_+c*A,r[1]=l*v+h*S+u*b,r[4]=l*g+h*M+u*E,r[7]=l*p+h*_+u*A,r[2]=f*v+d*S+m*b,r[5]=f*g+d*M+m*E,r[8]=f*p+d*_+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rh.prototype.isMatrix3=!0;var kt=rh,Jl=new kt,mu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tp(){let i={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_r]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}var te=Tp();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=yr("canvas")),hs.width=t.width,hs.height=t.height;let s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ap=0,Ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Rp=0,Ql=new D,nn=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qn,s=qn,r=Xe,o=Ui,a=Tn,c=cn,l=i.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=hi(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=kc;nn.DEFAULT_ANISOTROPY=1;var oh=class oh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,_=(d+1)/2,b=(p+1)/2,E=(h+f)/4,A=(u+v)/4,x=(m+g)/4;return M>_&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=A/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;var Ae=oh,ea=class extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new nn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sr=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var na=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ia=class Ia{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,v,g)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,m=l*h,v=l*u;e[0]=f+v*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,m=l*h,v=l*u;e[0]=f-v*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*c,d=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cp,t,Pp)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Si.crossVectors(n,pn),Si.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Si.crossVectors(n,pn)),Si.normalize(),go.crossVectors(pn,Si),s[0]=Si.x,s[4]=go.x,s[8]=pn.x,s[1]=Si.y,s[5]=go.y,s[9]=pn.y,s[2]=Si.z,s[6]=go.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],S=n[3],M=n[7],_=n[11],b=n[15],E=s[0],A=s[4],x=s[8],w=s[12],R=s[1],P=s[5],I=s[9],G=s[13],N=s[2],L=s[6],O=s[10],B=s[14],q=s[3],U=s[7],V=s[11],F=s[15];return r[0]=o*E+a*R+c*N+l*q,r[4]=o*A+a*P+c*L+l*U,r[8]=o*x+a*I+c*O+l*V,r[12]=o*w+a*G+c*B+l*F,r[1]=h*E+u*R+f*N+d*q,r[5]=h*A+u*P+f*L+d*U,r[9]=h*x+u*I+f*O+d*V,r[13]=h*w+u*G+f*B+d*F,r[2]=m*E+v*R+g*N+p*q,r[6]=m*A+v*P+g*L+p*U,r[10]=m*x+v*I+g*O+p*V,r[14]=m*w+v*G+g*B+p*F,r[3]=S*E+M*R+_*N+b*q,r[7]=S*A+M*P+_*L+b*U,r[11]=S*x+M*I+_*O+b*V,r[15]=S*w+M*G+_*B+b*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15],S=c*d-l*f,M=a*d-l*u,_=a*f-c*u,b=o*d-l*h,E=o*f-c*h,A=o*u-a*h;return e*(v*S-g*M+p*_)-n*(m*S-g*b+p*E)+s*(m*M-v*b+p*A)-r*(m*_-v*E+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],S=e*a-n*o,M=e*c-s*o,_=e*l-r*o,b=n*c-s*a,E=n*l-r*a,A=s*l-r*c,x=h*v-u*m,w=h*g-f*m,R=h*p-d*m,P=u*g-f*v,I=u*p-d*v,G=f*p-d*g,N=S*G-M*I+_*P+b*R-E*w+A*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/N;return t[0]=(a*G-c*I+l*P)*L,t[1]=(s*I-n*G-r*P)*L,t[2]=(v*A-g*E+p*b)*L,t[3]=(f*E-u*A-d*b)*L,t[4]=(c*R-o*G-l*w)*L,t[5]=(e*G-s*R+r*w)*L,t[6]=(g*_-m*A-p*M)*L,t[7]=(h*A-f*_+d*M)*L,t[8]=(o*I-a*R+l*x)*L,t[9]=(n*R-e*I-r*x)*L,t[10]=(m*E-v*_+p*S)*L,t[11]=(u*_-h*E-d*S)*L,t[12]=(a*w-o*P-c*x)*L,t[13]=(e*P-n*w+s*x)*L,t[14]=(v*M-m*b-g*S)*L,t[15]=(h*b-u*M+f*S)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,v=o*h,g=o*u,p=a*u,S=c*l,M=c*h,_=c*u,b=n.x,E=n.y,A=n.z;return s[0]=(1-(v+p))*b,s[1]=(d+_)*b,s[2]=(m-M)*b,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+p))*E,s[6]=(g+S)*E,s[7]=0,s[8]=(m+M)*A,s[9]=(g-S)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=us.set(s[0],s[1],s[2]).length(),a=us.set(s[4],s[5],s[6]).length(),c=us.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);let l=1/o,h=1/a,u=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Fn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,v;if(c)m=r/(o-r),v=o*r/(o-r);else if(a===Fn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ps)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Fn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,v;if(c)m=1/(o-r),v=o/(o-r);else if(a===Fn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ps)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ia.prototype.isMatrix4=!0;var ie=Ia,us=new D,In=new ie,Cp=new D(0,0,0),Pp=new D(1,1,1),Si=new D,go=new D,pn=new D,xu=new ie,_u=new Ve,ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ip=0,vu=new D,fs=new Ve,si=new ie,xo=new D,ir=new D,Lp=new D,Dp=new Ve,yu=new D(1,0,0),Mu=new D(0,1,0),Su=new D(0,0,1),bu={type:"added"},Np={type:"removed"},ds={type:"childadded",child:null},jl={type:"childremoved",child:null},Se=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ln,n=new Ve,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new kt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xo.copy(t):xo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ir,xo,this.up):si.lookAt(xo,ir,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(si),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),ds.child=t,this.dispatchEvent(ds),ds.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Np),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Up={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Up)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Jc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tc(o,r,t+1/3),this.g=tc(o,r,t),this.b=tc(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=Pf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return te.workingToColorSpace(Je.copy(this),t),Math.round(Kt(Je.r*255,0,255))*65536+Math.round(Kt(Je.g*255,0,255))*256+Math.round(Kt(Je.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Re){te.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(_o);let n=pr(bi.h,_o.h,e),s=pr(bi.s,_o.s,e),r=pr(bi.l,_o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new It;It.NAMES=Pf;var Er=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fi=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new D,ri=new D,ec=new D,oi=new D,ps=new D,ms=new D,Eu=new D,nc=new D,ic=new D,sc=new D,rc=new Ae,oc=new Ae,ac=new Ae,ci=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),ri.subVectors(n,e),ec.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ri),c=Ln.dot(ec),l=ri.dot(ri),h=ri.dot(ec),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),ri.subVectors(t,e),Ln.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ln.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ps.subVectors(s,n),ms.subVectors(r,n),nc.subVectors(t,n);let c=ps.dot(nc),l=ms.dot(nc);if(c<=0&&l<=0)return e.copy(n);ic.subVectors(t,s);let h=ps.dot(ic),u=ms.dot(ic);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ps,o);sc.subVectors(t,r);let d=ps.dot(sc),m=ms.dot(sc);if(m>=0&&d<=m)return e.copy(r);let v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ms,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Eu.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Eu,a);let p=1/(g+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),yo.subVectors(this.max,sr),gs.subVectors(t.a,sr),xs.subVectors(t.b,sr),_s.subVectors(t.c,sr),Ei.subVectors(xs,gs),wi.subVectors(_s,xs),ki.subVectors(gs,_s);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-ki.z,ki.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,ki.z,0,-ki.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-ki.y,ki.x,0];return!lc(e,gs,xs,_s,yo)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,gs,xs,_s,yo))?!1:(Mo.crossVectors(Ei,wi),e=[Mo.x,Mo.y,Mo.z],lc(e,gs,xs,_s,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ai=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,vo=new gn,gs=new D,xs=new D,_s=new D,Ei=new D,wi=new D,ki=new D,sr=new D,yo=new D,Mo=new D,Gi=new D;function lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Le=new D,So=new Et,Fp=0,ae=class extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Tr=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bp=new gn,rr=new D,cc=new D,Jn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);let e=rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(cc)),this.expandByPoint(rr.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Op=0,bn=new ie,hc=new Se,vs=new D,mn=new gn,or=new gn,ke=new D,re=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lp(t)?Tr:wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(mn.min,or.min),mn.expandByPoint(ke),ke.addVectors(mn.max,or.max),mn.expandByPoint(ke)):(mn.expandByPoint(or.min),mn.expandByPoint(or.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(t,l),ke.add(vs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new D,c[x]=new D;let l=new D,h=new D,u=new D,f=new Et,d=new Et,m=new Et,v=new D,g=new D;function p(x,w,R){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,x),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[x].add(v),a[w].add(v),a[R].add(v),c[x].add(g),c[w].add(g),c[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,w=S.length;x<w;++x){let R=S[x],P=R.start,I=R.count;for(let G=P,N=P+I;G<N;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let M=new D,_=new D,b=new D,E=new D;function A(x){b.fromBufferAttribute(s,x),E.copy(b);let w=a[x];M.copy(w),M.sub(b.multiplyScalar(b.dot(w))).normalize(),_.crossVectors(E,w);let P=_.dot(c[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,P)}for(let x=0,w=S.length;x<w;++x){let R=S[x],P=R.start,I=R.count;for(let G=P,N=P+I;G<N;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new ae(f,h,u)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ar=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},en=new D,Us=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},uc=new D,zp=new D,Hp=new kt,Nn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=uc.subVectors(n,e).cross(zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hp.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},kp=0,xn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Gs,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Nc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ai=class extends xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,ar=new D,Ms=new D,Ss=new D,bs=new Et,lr=new Et,If=new ie,bo=new D,cr=new D,Eo=new D,wu=new Et,fc=new Et,Tu=new Et,qi=class extends Se{constructor(t=new Ai){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ar(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Us(n,3,0,!1)),ys.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new Et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),If.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;wo(bo.set(-.5,-.5,0),Ss,o,Ms,s,r),wo(cr.set(.5,-.5,0),Ss,o,Ms,s,r),wo(Eo.set(.5,.5,0),Ss,o,Ms,s,r),wu.set(0,0),fc.set(1,0),Tu.set(1,1);let a=t.ray.intersectTriangle(bo,cr,Eo,!1,ar);if(a===null&&(wo(cr.set(-.5,.5,0),Ss,o,Ms,s,r),fc.set(0,1),a=t.ray.intersectTriangle(bo,Eo,cr,!1,ar),a===null))return;let c=t.ray.origin.distanceTo(ar);c<t.near||c>t.far||e.push({distance:c,point:ar.clone(),uv:ci.getInterpolation(ar,bo,cr,Eo,wu,fc,Tu,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function wo(i,t,e,n,s,r){bs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*bs.x-s*bs.y,lr.y=s*bs.x+r*bs.y):lr.copy(bs),i.copy(t),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(If)}var li=new D,dc=new D,To=new D,Ao=new D,Fs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dc.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Ao.copy(this.origin).sub(dc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Ao.dot(this.direction),c=-Ao.dot(To),l=Ao.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dc).addScaledVector(To,f),d}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,v=e.y-o.y,g=e.z-o.z,p=n.x-o.x,S=n.y-o.y,M=n.z-o.z,_=Math.abs(c),b=Math.abs(l),E=Math.abs(h),A,x,w,R,P,I,G,N,L,O,B,q;if(_>=b&&_>=E?(w=c,I=u,L=m,q=p,c>=0?(A=l,x=h,R=f,P=d,G=v,N=g,O=S,B=M):(A=h,x=l,R=d,P=f,G=g,N=v,O=M,B=S)):b>=E?(w=l,I=f,L=v,q=S,l>=0?(A=h,x=c,R=d,P=u,G=g,N=m,O=M,B=p):(A=c,x=h,R=u,P=d,G=m,N=g,O=p,B=M)):(w=h,I=d,L=g,q=M,h>=0?(A=c,x=l,R=u,P=f,G=m,N=v,O=p,B=S):(A=l,x=c,R=f,P=u,G=v,N=m,O=S,B=p)),w===0)return null;let U=A/w,V=x/w,F=1/w,Q=R-U*I,tt=P-V*I,ht=G-U*L,lt=N-V*L,ot=O-U*q,Z=B-V*q,W=ot*lt-Z*ht,st=Q*Z-tt*ot,ut=ht*tt-lt*Q;if(s){if(W<0||st<0||ut<0)return null}else if((W<0||st<0||ut<0)&&(W>0||st>0||ut>0))return null;let at=W+st+ut;if(at===0)return null;let dt=F*(W*I+st*L+ut*q);return(at>0?dt<0:dt>0)?null:this.at(dt/at,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Au=new ie,Vi=new Fs,Ro=new Jn,Ru=new D,Co=new D,Po=new D,Io=new D,pc=new D,Lo=new D,Cu=new D,Do=new D,ft=class extends Se{constructor(t=new re,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(pc.fromBufferAttribute(u,t),o?Lo.addScaledVector(pc,h):Lo.addScaledVector(pc.sub(e),h))}e.add(Lo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Ro.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ro,Ru)===null||Vi.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Au.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Au),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=S,b=M;_<b;_+=3){let E=a.getX(_),A=a.getX(_+1),x=a.getX(_+2);s=No(this,p,t,n,l,h,u,E,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let S=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);s=No(this,o,t,n,l,h,u,S,M,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=S,b=M;_<b;_+=3){let E=_,A=_+1,x=_+2;s=No(this,p,t,n,l,h,u,E,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let S=g,M=g+1,_=g+2;s=No(this,o,t,n,l,h,u,S,M,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Gp(i,t,e,n,s,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===jn,a),c===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Do);return l<e.near||l>e.far?null:{distance:l,point:Do.clone(),object:i}}function No(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Co),i.getVertexPosition(c,Po),i.getVertexPosition(l,Io);let h=Gp(i,t,e,n,Co,Po,Io,Cu);if(h){let u=new D;ci.getBarycoord(Cu,Co,Po,Io,u),s&&(h.uv=ci.getInterpolatedAttribute(s,a,c,l,u,new Et)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,c,l,u,new Et)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new D,materialIndex:0};ci.getNormal(Co,Po,Io,f.normal),h.face=f,h.barycoord=u}return h}var Rr=class extends nn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ge,h=Ge,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new ie,Pu=new ie,Uo=[],Iu=new gn,Vp=new ie,hr=new ft,ur=new Jn,Kn=class extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Iu.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),ur.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Pu.multiplyMatrices(n,Es),hr.matrixWorld=Pu,hr.raycast(t,Uo);for(let o=0,a=Uo.length;o<a;o++){let c=Uo[o];c.instanceId=r,c.object=this,e.push(c)}Uo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rr(new Float32Array(s*this.count),s,this.count,Ha,wn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wi=new Jn,Wp=new Et(.5,.5),Fo=new D,Os=class{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],S=r[12],M=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-o,d-h,p-m,b-S).normalize(),s[1].setComponents(l+o,d+h,p+m,b+S).normalize(),s[2].setComponents(l+a,d+u,p+v,b+M).normalize(),s[3].setComponents(l-a,d-u,p-v,b-M).normalize(),n)s[4].setComponents(c,f,g,_).normalize(),s[5].setComponents(l-c,d-f,p-g,b-_).normalize();else if(s[4].setComponents(l-c,d-f,p-g,b-_).normalize(),e===Fn)s[5].setComponents(l+c,d+f,p+g,b+_).normalize();else if(e===Ps)s[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);let e=Wp.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fo.x=s.normal.x>0?t.max.x:t.min.x,Fo.y=s.normal.y>0?t.max.y:t.min.y,Fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yi=class extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ia=new D,sa=new D,Lu=new ie,fr=new Fs,Bo=new Jn,mc=new D,Du=new D,zs=class extends Se{constructor(t=new re,e=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ia.fromBufferAttribute(e,s-1),sa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new Vt(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;Lu.copy(s).invert(),fr.copy(t.ray).applyMatrix4(Lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=l){let p=h.getX(v),S=h.getX(v+1),M=Oo(this,t,fr,c,p,S,v);M&&e.push(M)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(d),p=Oo(this,t,fr,c,v,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=l){let p=Oo(this,t,fr,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Oo(this,t,fr,c,m-1,d,m-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ia.fromBufferAttribute(a,s),sa.fromBufferAttribute(a,r),e.distanceSqToSegment(ia,sa,mc,Du)>n)return;mc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(mc);if(!(l<t.near||l>t.far))return{distance:l,point:Du.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Nu=new D,Uu=new D,Cr=class extends zs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Nu.fromBufferAttribute(e,s),Uu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nu.distanceTo(Uu);t.setAttribute("lineDistance",new Vt(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ra=class extends xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fu=new ie,wc=new Fs,zo=new Jn,Ho=new D,Pr=class extends Se{constructor(t=new re,e=new ra){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;Fu.copy(s).invert(),wc.copy(t.ray).applyMatrix4(Fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,v=d;m<v;m++){let g=l.getX(m);Ho.fromBufferAttribute(u,g),Bu(Ho,g,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,v=d;m<v;m++)Ho.fromBufferAttribute(u,m),Bu(Ho,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bu(i,t,e,n,s,r,o){let a=wc.distanceSqToPoint(i);if(a<e){let c=new D;wc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ir=class extends nn{constructor(t=[],e=Ni,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},di=class extends nn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends nn{constructor(t,e,n=zn,s,r,o,a=Ge,c=Ge,l,h=$n,u=1){if(h!==$n&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oa=class extends Ri{constructor(t,e=zn,n=Ni,s,r,o=Ge,a=Ge,c,l=$n){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lr=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$t=class i extends re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function m(v,g,p,S,M,_,b,E,A,x,w){let R=_/A,P=b/x,I=_/2,G=b/2,N=E/2,L=A+1,O=x+1,B=0,q=0,U=new D;for(let V=0;V<O;V++){let F=V*P-G;for(let Q=0;Q<L;Q++){let tt=Q*R-I;U[v]=tt*S,U[g]=F*M,U[p]=N,l.push(U.x,U.y,U.z),U[v]=0,U[g]=0,U[p]=E>0?1:-1,h.push(U.x,U.y,U.z),u.push(Q/A),u.push(1-V/x),B+=1}}for(let V=0;V<x;V++)for(let F=0;F<A;F++){let Q=f+F+L*V,tt=f+F+L*(V+1),ht=f+(F+1)+L*(V+1),lt=f+(F+1)+L*V;c.push(Q,tt,lt),c.push(tt,ht,lt),q+=6}a.addGroup(d,q,w),d+=q,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$i=class i extends re{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=n*2+r,v=s+1,g=new D,p=new D;for(let S=0;S<=m;S++){let M=0,_=0,b=0,E=0;if(S<=n){let w=S/n,R=w*Math.PI/2;_=-h-t*Math.cos(R),b=t*Math.sin(R),E=-t*Math.cos(R),M=w*u}else if(S<=n+r){let w=(S-n)/r;_=-h+w*e,b=t,E=0,M=u+w*f}else{let w=(S-n-r)/n,R=w*Math.PI/2;_=h+t*Math.sin(R),b=t*Math.cos(R),E=t*Math.sin(R),M=u+f+w*u}let A=Math.max(0,Math.min(1,M/d)),x=0;S===0?x=.5/s:S===m&&(x=-.5/s);for(let w=0;w<=s;w++){let R=w/s,P=R*Math.PI*2,I=Math.sin(P),G=Math.cos(P);p.x=-b*G,p.y=_,p.z=b*I,a.push(p.x,p.y,p.z),g.set(-b*G,E,b*I),g.normalize(),c.push(g.x,g.y,g.z),l.push(R+x,A)}if(S>0){let w=(S-1)*v;for(let R=0;R<s;R++){let P=w+R,I=w+R+1,G=S*v+R,N=S*v+R+1;o.push(P,I,G),o.push(I,N,G)}}}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Zi=class i extends re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new D,h=new Et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sn=class i extends re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,v=[],g=n/2,p=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function S(){let _=new D,b=new D,E=0,A=(e-t)/n;for(let x=0;x<=r;x++){let w=[],R=x/r,P=R*(e-t)+t;for(let I=0;I<=s;I++){let G=I/s,N=G*c+a,L=Math.sin(N),O=Math.cos(N);b.x=P*L,b.y=-R*n+g,b.z=P*O,u.push(b.x,b.y,b.z),_.set(L,A,O).normalize(),f.push(_.x,_.y,_.z),d.push(G,1-R),w.push(m++)}v.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let R=v[w][x],P=v[w+1][x],I=v[w+1][x+1],G=v[w][x+1];(t>0||w!==0)&&(h.push(R,P,G),E+=3),(e>0||w!==r-1)&&(h.push(P,I,G),E+=3)}l.addGroup(p,E,0),p+=E}function M(_){let b=m,E=new Et,A=new D,x=0,w=_===!0?t:e,R=_===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,g*R,0),f.push(0,R,0),d.push(.5,.5),m++;let P=m;for(let I=0;I<=s;I++){let N=I/s*c+a,L=Math.cos(N),O=Math.sin(N);A.x=w*O,A.y=g*R,A.z=w*L,u.push(A.x,A.y,A.z),f.push(0,R,0),E.x=L*.5+.5,E.y=O*.5*R+.5,d.push(E.x,E.y),m++}for(let I=0;I<s;I++){let G=b+I,N=P+I;_===!0?h.push(N,N+1,G):h.push(N+1,N,G),x+=3}l.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dr=class i extends sn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},aa=class i extends re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new D,_=new D,b=new D;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],_),d(e[E+2],b),c(M,_,b,S)}function c(S,M,_,b){let E=b+1,A=[];for(let x=0;x<=E;x++){A[x]=[];let w=S.clone().lerp(_,x/E),R=M.clone().lerp(_,x/E),P=E-x;for(let I=0;I<=P;I++)I===0&&x===E?A[x][I]=w:A[x][I]=w.clone().lerp(R,I/P)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){let R=Math.floor(w/2);w%2===0?(f(A[x][R+1]),f(A[x+1][R]),f(A[x][R])):(f(A[x][R+1]),f(A[x+1][R+1]),f(A[x+1][R]))}}function l(S){let M=new D;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(S),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let S=new D;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let _=g(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;o.push(_,1-b)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){let M=o[S+0],_=o[S+2],b=o[S+4],E=Math.max(M,_,b),A=Math.min(M,_,b);E>.9&&A<.1&&(M<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,M){let _=S*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function m(){let S=new D,M=new D,_=new D,b=new D,E=new Et,A=new Et,x=new Et;for(let w=0,R=0;w<r.length;w+=9,R+=6){S.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),b.copy(S).add(M).add(_).divideScalar(3);let P=g(b);v(E,R+0,S,P),v(A,R+2,M,P),v(x,R+4,_,P)}}function v(S,M,_,b){b<0&&S.x===1&&(o[M]=S.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Et:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],o=[],a=new D,c=new ie;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},la=class extends Nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ou=new D,zu=new D,gc=new Qc,xc=new Qc,_c=new Qc,Ci=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(zu.subVectors(s[0],s[1]).add(s[0]),l=zu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ou.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ou),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),gc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,v,g),xc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,v,g),_c.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),xc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),_c.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(gc.calc(c),xc.calc(c),_c.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Xp(i,t){let e=1-i;return e*e*t}function qp(i,t){return 2*(1-i)*i*t}function Yp(i,t){return i*i*t}function mr(i,t,e,n){return Xp(i,t)+qp(i,e)+Yp(i,n)}function $p(i,t){let e=1-i;return e*e*e*t}function Zp(i,t){let e=1-i;return 3*e*e*i*t}function Jp(i,t){return 3*(1-i)*i*i*t}function Kp(i,t){return i*i*i*t}function gr(i,t,e,n,s){return $p(i,t)+Zp(i,e)+Jp(i,n)+Kp(i,s)}var ca=class extends En{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ha=class extends En{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends En{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends En{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends En{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends En{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Hu(a,c.x,l.x,h.x,u.x),Hu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},Qp=Object.freeze({__proto__:null,ArcCurve:la,CatmullRomCurve3:Ci,CubicBezierCurve:ca,CubicBezierCurve3:ha,EllipseCurve:Nr,LineCurve:ua,LineCurve3:fa,QuadraticBezierCurve:da,QuadraticBezierCurve3:Ur,SplineCurve:pa});var Fr=class i extends aa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var _n=class i extends re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let S=p*f-o;for(let M=0;M<l;M++){let _=M*u-r;m.push(_,-S,0),v.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let M=S+l*p,_=S+l*(p+1),b=S+1+l*(p+1),E=S+1+l*p;d.push(M,_,E),d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ji=class i extends re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new D,m=new Et;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let v=0;v<s;v++){let g=v*(n+1);for(let p=0;p<n;p++){let S=p+g,M=S,_=S+n+1,b=S+n+2,E=S+1;a.push(M,_,E),a.push(_,b,E)}}this.setIndex(a),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fe=class i extends re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let S=[],M=p/n,_=o+M*a,b=t*Math.cos(_),E=Math.sqrt(t*t-b*b),A=0;p===0&&o===0?A=.5/e:p===n&&c===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let w=x/e,R=s+w*r;u.x=-E*Math.cos(R),u.y=b,u.z=E*Math.sin(R),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(w+A,1-M),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let M=h[p][S+1],_=h[p][S],b=h[p+1][S],E=h[p+1][S+1];(p!==0||o>0)&&d.push(M,_,E),(p!==n-1||c<Math.PI)&&d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qn=class i extends re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],f=new D,d=new D,m=new D;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let p=0;p<=s;p++){let S=p/s*r;d.x=(t+e*Math.cos(g))*Math.cos(S),d.y=(t+e*Math.cos(g))*Math.sin(S),d.z=e*Math.sin(g),l.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let p=(s+1)*v+g-1,S=(s+1)*(v-1)+g-1,M=(s+1)*(v-1)+g,_=(s+1)*v+g;c.push(p,S,_),c.push(S,M,_)}this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ki=class i extends re{constructor(t=new Ur(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new Et,h=new D,u=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function v(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),S(),p()}function g(M){h=t.getPointAt(M/e,h);let _=o.normals[M],b=o.binormals[M];for(let E=0;E<=s;E++){let A=E/s*Math.PI*2,x=Math.sin(A),w=-Math.cos(A);c.x=w*_.x+x*b.x,c.y=w*_.y+x*b.y,c.z=w*_.z+x*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){let b=(s+1)*(M-1)+(_-1),E=(s+1)*M+(_-1),A=(s+1)*M+_,x=(s+1)*(M-1)+_;m.push(b,E,x),m.push(E,A,x)}}function S(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)l.x=M/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Qp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Br=class extends xn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new It(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ku(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ku(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function ku(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Lf={clone:ns,merge:Ke},tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ma=class extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},de=class extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Or=class extends xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Da,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ga=class extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var zr=class extends Yi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=t,a=2*e-n;break;case Ec:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bc:o=t,c=2*n-e;break;case Ec:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,S=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*v+.5*m,_=d*g-d*v;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+S*o[l+b]+M*o[c+b]+_*o[u+b];return r}},va=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},ya=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ma=class extends Pi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),v=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*v+o[c+g]*m;return r}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let v=o[l+m],g=o[c+m],p=d*f+m*2,S=u[p],M=u[p+1],_=t*f+m*2,b=h[_],E=h[_+1],A=im(n,e,S,b,s);r[m]=Df(A,v,M,E,g)}return r}};function Df(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function nm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function im(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Df(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=nm(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),vc(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xr:e=this.InterpolantFactoryMethodDiscrete;break;case jo:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break;case Mc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;vc(this.settings)&&(Gu(this.settings.inTangents,t),Gu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ht("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Ht("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&cp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ht("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[f+m]||v!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=jo;var Ii=class extends vn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=xr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="color";var ba=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="number";var Ea=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ve.slerpFlat(r,0,o,l-a,o,l,c);return r}},Hr=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends vn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=xr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="vector";var Ta=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nf=new Ta,Aa=class{constructor(t){this.manager=t!==void 0?t:Nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qi=class extends kr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yc=new ie,Vu=new D,Wu=new D,Ra=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vu),Wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(yc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ko=new D,Go=new Ve,Xn=new D,Gr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ko,Go,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Go,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ko,Go,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Go,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new D,Xu=new Et,qu=new Et,De=class extends Gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Xu,qu),e.subVectors(qu,Xu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hs=class extends Gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tc=class extends Ra{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends kr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Tc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ts=-90,As=1,Ca=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(Ts,As,t,e);s.layers=this.layers,this.add(s);let r=new De(Ts,As,t,e);r.layers=this.layers,this.add(r);let o=new De(Ts,As,t,e);o.layers=this.layers,this.add(o);let a=new De(Ts,As,t,e);a.layers=this.layers,this.add(a);let c=new De(Ts,As,t,e);c.layers=this.layers,this.add(c);let l=new De(Ts,As,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Pa=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var th="\\[\\]\\.:\\/",sm=new RegExp("["+th+"]","g"),eh="[^"+th+"]",rm="[^"+th.replace("\\.","")+"]",om=/((?:WC+[\/:])*)/.source.replace("WC",eh),am=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),hm=new RegExp("^"+om+am+lm+cm+"$"),um=["material","materials","bones","map"],Ac=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(t){let e=hm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Ac;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gy=new Float32Array(1);var ah=class ah{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ah.prototype.isMatrix2=!0;var Rc=ah;function nh(i,t,e,n){let s=fm(n);switch(e){case qc:return i*t;case Ha:return i*t/s.components*s.byteLength;case ka:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case Ga:return i*t*2/s.components*s.byteLength;case Yc:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case Va:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $r:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Za:case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Jr:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kr:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fm(i){switch(i){case cn:case Gc:return{byteLength:1,components:1};case Vs:case Vc:case Hn:return{byteLength:2,components:1};case Oa:case za:return{byteLength:2,components:4};case zn:case Ba:case wn:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Im=`#ifdef USE_IRIDESCENCE
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
#endif`,Lm=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,km=`#define PI 3.141592653589793
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
} // validated`,Gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,x0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,Og=`#define NORMAL
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
}`,zg=`#define NORMAL
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
}`,Hg=`#define PHONG
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
}`,kg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:_m,alphahash_pars_fragment:vm,alphamap_fragment:ym,alphamap_pars_fragment:Mm,alphatest_fragment:Sm,alphatest_pars_fragment:bm,aomap_fragment:Em,aomap_pars_fragment:wm,batching_pars_vertex:Tm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:Cm,bsdfs:Pm,iridescence_fragment:Im,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Fm,color_fragment:Bm,color_pars_fragment:Om,color_pars_vertex:zm,color_vertex:Hm,common:km,cube_uv_reflection_fragment:Gm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:$m,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Qm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:f0,lights_phong_fragment:d0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:x0,lights_fragment_maps:_0,lights_fragment_end:v0,lightprobes_pars_fragment:y0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:E0,map_fragment:w0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:I0,morphcolor_vertex:L0,morphnormal_vertex:D0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:B0,normal_pars_fragment:O0,normal_pars_vertex:z0,normal_vertex:H0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:$0,project_vertex:Z0,dithering_fragment:J0,dithering_pars_fragment:K0,roughnessmap_fragment:Q0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:fg,transmission_pars_fragment:dg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:_g,background_frag:vg,backgroundCube_vert:yg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:bg,depth_vert:Eg,depth_frag:wg,distance_vert:Tg,distance_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Ig,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ng,meshlambert_frag:Ug,meshmatcap_vert:Fg,meshmatcap_frag:Bg,meshnormal_vert:Og,meshnormal_frag:zg,meshphong_vert:Hg,meshphong_frag:kg,meshphysical_vert:Gg,meshphysical_frag:Vg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:$g,shadow_frag:Zg,sprite_vert:Jg,sprite_frag:Kg},yt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ni={basic:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ke([yt.points,yt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ke([yt.common,yt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ke([yt.sprite,yt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Ke([yt.common,yt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Ke([yt.lights,yt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ni.physical={uniforms:Ke([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var bl={r:0,b:0,g:0},Qg=new ie,id=new kt;id.set(-1,0,0,0,1,0,0,0,1);function jg(i,t,e,n,s,r){let o=new It(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function d(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let _=S.backgroundBlurriness>0;M=t.get(M,_)}return M}function m(S){let M=!1,_=d(S);_===null?g(o,a):_&&_.isColor&&(g(_,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,M){let _=d(M);_&&(_.isCubeTexture||_.mapping===Wr)?(l===void 0&&(l=new ft(new $t(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ns(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(id),l.material.toneMapped=te.getTransfer(_.colorSpace)!==fe,(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ft(new _n(2,2),new rn({name:"BackgroundMaterial",uniforms:ns(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,M){S.getRGB(bl,jc(i)),e.buffers.color.setClear(bl.r,bl.g,bl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:m,addToRenderList:v,dispose:p}}function tx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,I,G,N,L){let O=!1,B=u(P,N,G,I);r!==B&&(r=B,l(r.object)),O=d(P,N,G,L),O&&m(P,N,G,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(P,I,G,N),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,I,G,N){let L=N.wireframe===!0,O=n[I.id];O===void 0&&(O={},n[I.id]=O);let B=P.isInstancedMesh===!0?P.id:0,q=O[B];q===void 0&&(q={},O[B]=q);let U=q[G.id];U===void 0&&(U={},q[G.id]=U);let V=U[L];return V===void 0&&(V=f(c()),U[L]=V),V}function f(P){let I=[],G=[],N=[];for(let L=0;L<e;L++)I[L]=0,G[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:N,object:P,attributes:{},index:null}}function d(P,I,G,N){let L=r.attributes,O=I.attributes,B=0,q=G.getAttributes();for(let U in q)if(q[U].location>=0){let F=L[U],Q=O[U];if(Q===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function m(P,I,G,N){let L={},O=I.attributes,B=0,q=G.getAttributes();for(let U in q)if(q[U].location>=0){let F=O[U];F===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(F=P.instanceColor));let Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),L[U]=Q,B++}r.attributes=L,r.attributesNum=B,r.index=N}function v(){let P=r.newAttributes;for(let I=0,G=P.length;I<G;I++)P[I]=0}function g(P){p(P,0)}function p(P,I){let G=r.newAttributes,N=r.enabledAttributes,L=r.attributeDivisors;G[P]=1,N[P]===0&&(i.enableVertexAttribArray(P),N[P]=1),L[P]!==I&&(i.vertexAttribDivisor(P,I),L[P]=I)}function S(){let P=r.newAttributes,I=r.enabledAttributes;for(let G=0,N=I.length;G<N;G++)I[G]!==P[G]&&(i.disableVertexAttribArray(G),I[G]=0)}function M(P,I,G,N,L,O,B){B===!0?i.vertexAttribIPointer(P,I,G,L,O):i.vertexAttribPointer(P,I,G,N,L,O)}function _(P,I,G,N){v();let L=N.attributes,O=G.getAttributes(),B=I.defaultAttributeValues;for(let q in O){let U=O[q];if(U.location>=0){let V=L[q];if(V===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let F=V.normalized,Q=V.itemSize,tt=t.get(V);if(tt===void 0)continue;let ht=tt.buffer,lt=tt.type,ot=tt.bytesPerElement,Z=lt===i.INT||lt===i.UNSIGNED_INT||V.gpuType===Ba;if(V.isInterleavedBufferAttribute){let W=V.data,st=W.stride,ut=V.offset;if(W.isInstancedInterleavedBuffer){for(let at=0;at<U.locationSize;at++)p(U.location+at,W.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let at=0;at<U.locationSize;at++)g(U.location+at);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let at=0;at<U.locationSize;at++)M(U.location+at,Q/U.locationSize,lt,F,st*ot,(ut+Q/U.locationSize*at)*ot,Z)}else{if(V.isInstancedBufferAttribute){for(let W=0;W<U.locationSize;W++)p(U.location+W,V.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let W=0;W<U.locationSize;W++)g(U.location+W);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let W=0;W<U.locationSize;W++)M(U.location+W,Q/U.locationSize,lt,F,Q*ot,Q/U.locationSize*W*ot,Z)}}else if(B!==void 0){let F=B[q];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(U.location,F);break;case 3:i.vertexAttrib3fv(U.location,F);break;case 4:i.vertexAttrib4fv(U.location,F);break;default:i.vertexAttrib1fv(U.location,F)}}}}S()}function b(){w();for(let P in n){let I=n[P];for(let G in I){let N=I[G];for(let L in N){let O=N[L];for(let B in O)h(O[B].object),delete O[B];delete N[L]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let G in I){let N=I[G];for(let L in N){let O=N[L];for(let B in O)h(O[B].object),delete O[B];delete N[L]}}delete n[P.id]}function A(P){for(let I in n){let G=n[I];for(let N in G){let L=G[N];if(L[P.id]===void 0)continue;let O=L[P.id];for(let B in O)h(O[B].object),delete O[B];delete L[P.id]}}}function x(P){for(let I in n){let G=n[I],N=P.isInstancedMesh===!0?P.id:0,L=G[N];if(L!==void 0){for(let O in L){let B=L[O];for(let q in B)h(B[q].object),delete B[q];delete L[O]}delete G[N],Object.keys(G).length===0&&delete n[I]}}}function w(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function ex(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==cn&&A!==wn&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,maxSamples:b,samples:E}}function ix(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Nn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,M=S*4,_=p.clippingState||null;c.value=_,_=h(m,f,M,d);for(let b=0;b!==M;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=d+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,_=d;M!==v;++M,_+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var qs=4,sx=6,rx=20,ox=256,jr=new Hs,Uf=new It,lh=null,ch=0,hh=0,uh=!1,ax=new D,is=new D,wl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=ax}=r;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,hh),this._renderer.xr.enabled=uh,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Hn,format:Tn,colorSpace:_r,depthBuffer:!1},s=Ff(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(r)),this._blurMaterial=hx(r,t,e),this._ggxMaterial=cx(r,t,e)}return s}_compileMaterial(t){let e=new ft(new re,t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,s,r){let c=new De(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Uf),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new $t,new Bn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(Uf),p=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):_===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let b=this._cubeSize;Xs(s,_*b,M>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(v,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ni||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Of()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Xs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,jr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-qs?n-m+qs:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,Xs(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(a,jr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Xs(t,g,p,3*v,2*v),s.setRenderTarget(t),s.render(a,jr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-qs?s-this._lodMax+qs:0),f=4*(this._cubeSize-h);Xs(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(c,jr)}};function lx(i){let t=[],e=[],n=i,s=i-qs+1+sx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,m=new Float32Array(d*f*u),v=new Float32Array(d*f*u);for(let p=0;p<u;p++){let S=p%3*2/3-1,M=p>2?0:-1,_=[S,M,0,S+2/3,M,0,S+2/3,M+1,0,S,M,0,S+2/3,M+1,0,S,M+1,0];m.set(_,d*f*p);for(let b=0;b<f;b++){let E=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?is.set(1,A,E):p===1?is.set(-E,1,-A):p===2?is.set(-E,A,1):p===3?is.set(-1,A,-E):p===4?is.set(-E,-1,A):is.set(E,A,-1),is.toArray(v,(p*f+b)*d)}}let g=new re;g.setAttribute("position",new ae(m,d)),g.setAttribute("outputDirection",new ae(v,d)),e.push(new ft(g,null)),n>qs&&n--}return{lodMeshes:e,sizeLods:t}}function Ff(i,t,e){let n=new an(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cx(i,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ox,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function hx(i,t,e){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Bf(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Of(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tl=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $t(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:ti});r.uniforms.tEquirect.value=e;let o=new ft(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Xe),new Ca(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function ux(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Na||d===Ua)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let v=new Tl(m.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===Na||d===Ua,v=d===Ni||d===es;if(m||v){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new wl(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let S=f.image;return m&&S&&S.height>0||v&&S&&c(S)?(n===null&&(n=new wl(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Na?f.mapping=Ni:d===Ua&&(f.mapping=es),f}function c(f){let d=0,m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function fx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function dx(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,v=0;if(m===void 0)return;if(d!==null){let S=d.array;v=d.version;for(let M=0,_=S.length;M<_;M+=3){let b=S[M+0],E=S[M+1],A=S[M+2];f.push(b,E,E,A,A,b)}}else{let S=m.array;v=m.version;for(let M=0,_=S.length/3-1;M<_;M+=3){let b=M+0,E=M+1,A=M+2;f.push(b,E,E,A,A,b)}}let g=new(m.count>=65535?Tr:wr)(f,1);g.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function px(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function mx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gx(i,t,e){let n=new WeakMap,s=new Ae;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let _=a.attributes.position.count*M,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*u),A=new Sr(E,_,b,u);A.type=wn,A.needsUpdate=!0;let x=M*4;for(let R=0;R<u;R++){let P=g[R],I=p[R],G=S[R],N=_*b*4*R;for(let L=0;L<P.count;L++){let O=L*x;d===!0&&(s.fromBufferAttribute(P,L),E[N+O+0]=s.x,E[N+O+1]=s.y,E[N+O+2]=s.z,E[N+O+3]=0),m===!0&&(s.fromBufferAttribute(I,L),E[N+O+4]=s.x,E[N+O+5]=s.y,E[N+O+6]=s.z,E[N+O+7]=0),v===!0&&(s.fromBufferAttribute(G,L),E[N+O+8]=s.x,E[N+O+9]=s.y,E[N+O+10]=s.z,E[N+O+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Et(_,b)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function xx(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var _x={[Uc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function vx(i,t,e,n,s,r){let o=new an(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new re;l.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let h=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ft(l,h),f=new Hs(-1,1,1,-1,0,1),d=null,m=null,v=!1,g,p=null,S=[],M=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),c!==null&&c.setSize(_,b);for(let E=0;E<S.length;E++){let A=S[E];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){S=_,M=S.length>0&&S[0].isRenderPass===!0;let b=o.width,E=o.height;S.length>0&&a===null&&(a=new an(b,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),c=new an(b,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let x=S[A];x.setSize&&x.setSize(b,E)}},this.begin=function(_,b){if(v||_.toneMapping===On&&S.length===0)return!1;if(p=b,b!==null){let E=b.width,A=b.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return M===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=On,!0},this.hasRenderPass=function(){return M},this.end=function(_,b){_.toneMapping=g,v=!0;let E=o,A=a;for(let x=0;x<S.length;x++){let w=S[x];w.enabled!==!1&&(w.render(_,A,E,b),w.needsSwap!==!1&&(E=A,A=A===a?c:a))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,h.defines={},te.getTransfer(d)===fe&&(h.defines.SRGB_TRANSFER="");let x=_x[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(u,f),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var sd=new nn,ph=new Ri(1,1),rd=new Sr,od=new na,ad=new Ir,zf=[],Hf=[],kf=new Float32Array(16),Gf=new Float32Array(9),Vf=new Float32Array(4);function Zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rl(i,t){let e=Hf[t];e===void 0&&(e=new Int32Array(t),Hf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Vf.set(n),i.uniformMatrix2fv(this.addr,!1,Vf),ze(e,n)}}function wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Gf.set(n),i.uniformMatrix3fv(this.addr,!1,Gf),ze(e,n)}}function Tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;kf.set(n),i.uniformMatrix4fv(this.addr,!1,kf),ze(e,n)}}function Ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=e.isReversedDepthBuffer()?Ml:yl,r=ph):r=sd,e.setTexture2D(t||r,s)}function Fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||od,s)}function Bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ad,s)}function Ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rd,s)}function zx(i){switch(i){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return bx;case 35674:return Ex;case 35675:return wx;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Ix;case 36294:return Lx;case 36295:return Dx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return Ox}}function Hx(i,t){i.uniform1fv(this.addr,t)}function kx(i,t){let e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Gx(i,t){let e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function Vx(i,t){let e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function Wx(i,t){let e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xx(i,t){let e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qx(i,t){let e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yx(i,t){i.uniform1iv(this.addr,t)}function $x(i,t){i.uniform2iv(this.addr,t)}function Zx(i,t){i.uniform3iv(this.addr,t)}function Jx(i,t){i.uniform4iv(this.addr,t)}function Kx(i,t){i.uniform1uiv(this.addr,t)}function Qx(i,t){i.uniform2uiv(this.addr,t)}function jx(i,t){i.uniform3uiv(this.addr,t)}function t_(i,t){i.uniform4uiv(this.addr,t)}function e_(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ph:o=sd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function n_(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||od,r[o])}function i_(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ad,r[o])}function s_(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rd,r[o])}function r_(i){switch(i){case 5126:return Hx;case 35664:return kx;case 35665:return Gx;case 35666:return Vx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return Yx;case 35667:case 35671:return $x;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return Kx;case 36294:return Qx;case 36295:return jx;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}var mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zx(e.type)}},gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r_(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Wf(i,t){i.seq.push(t),i.map[t.id]=t}function o_(i,t,e){let n=i.name,s=n.length;for(fh.lastIndex=0;;){let r=fh.exec(n),o=fh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wf(e,l===void 0?new mh(a,i,t):new gh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new xh(a),Wf(e,u)),e=u}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);o_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Xf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var a_=37297,l_=0;function c_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var qf=new kt;function h_(i){te._getMatrix(qf,te.workingColorSpace,i);let t=`mat3( ${qf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+c_(i.getShaderSource(t),a)}else return r}function u_(i,t){let e=h_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var f_={[Uc]:"Linear",[Fc]:"Reinhard",[Bc]:"Cineon",[Vr]:"ACESFilmic",[zc]:"AgX",[Hc]:"Neutral",[Oc]:"Custom"};function d_(i,t){let e=f_[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var El=new D;function p_(){te.getLuminanceCoefficients(El);let i=El.x.toFixed(4),t=El.y.toFixed(4),e=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function g_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function eo(i){return i!==""}function $f(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var __=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(__,y_)}var v_=new Map;function y_(i,t){let e=Jt[t];if(e===void 0){let n=v_.get(t);if(n!==void 0)e=Jt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _h(e)}var M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(i){return i.replace(M_,S_)}function S_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var b_={[ji]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function E_(i){return b_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var w_={[Ni]:"ENVMAP_TYPE_CUBE",[es]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function T_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":w_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var A_={[es]:"ENVMAP_MODE_REFRACTION"};function R_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":A_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var C_={[Da]:"ENVMAP_BLENDING_MULTIPLY",[pf]:"ENVMAP_BLENDING_MIX",[mf]:"ENVMAP_BLENDING_ADD"};function P_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":C_[i.combine]||"ENVMAP_BLENDING_NONE"}function I_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=E_(e),l=T_(e),h=R_(e),u=P_(e),f=I_(e),d=m_(e),m=g_(r),v=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(eo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(eo).join(`
`),p.length>0&&(p+=`
`)):(g=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),p=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Jt.tonemapping_pars_fragment:"",e.toneMapping!==On?d_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),p_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(eo).join(`
`)),o=_h(o),o=$f(o,e),o=Zf(o,e),a=_h(a),a=$f(a,e),a=Zf(a,e),o=Jf(o),a=Jf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+g+o,_=S+p+a,b=Xf(s,s.VERTEX_SHADER,M),E=Xf(s,s.FRAGMENT_SHADER,_);s.attachShader(v,b),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(E)||"",L=I.trim(),O=G.trim(),B=N.trim(),q=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,E);else{let V=Yf(s,b,"vertex"),F=Yf(s,E,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+V+`
`+F)}else L!==""?Ot("WebGLProgram: Program Info Log:",L):(O===""||B==="")&&(U=!1);U&&(P.diagnostics={runnable:q,programLog:L,vertexShader:{log:O,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(b),s.deleteShader(E),x=new Ys(s,v),w=x_(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,a_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}var D_=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yh(t),e.set(t,n)),n}},yh=class{constructor(t){this.id=D_++,this.code=t,this.usedTimes=0}};function N_(i){return i===Bi||i===Jr||i===Kr}function U_(i,t,e,n,s,r){let o=new br,a=new vh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,w,R,P,I,G){let N=P.fog,L=I.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=t.get(x.envMap||O,B),U=q&&q.mapping===Wr?q.image.height:null,V=d[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ot("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let F=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=F!==void 0?F.length:0,tt=0;L.morphAttributes.position!==void 0&&(tt=1),L.morphAttributes.normal!==void 0&&(tt=2),L.morphAttributes.color!==void 0&&(tt=3);let ht,lt,ot,Z;if(V){let ye=ni[V];ht=ye.vertexShader,lt=ye.fragmentShader}else{ht=x.vertexShader,lt=x.fragmentShader;let ye=a.getVertexShaderStage(x),he=a.getFragmentShaderStage(x);a.update(x,ye,he),ot=ye.id,Z=he.id}let W=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,at=I.isBatchedMesh===!0,dt=!!x.map,Lt=!!x.matcap,At=!!q,Bt=!!x.aoMap,qt=!!x.lightMap,Wt=!!x.bumpMap&&x.wireframe===!1,ne=!!x.normalMap,pe=!!x.displacementMap,Ue=!!x.emissiveMap,me=!!x.metalnessMap,we=!!x.roughnessMap,H=x.anisotropy>0,He=x.clearcoat>0,oe=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,X=x.sheen>0,J=x.transmission>0,j=H&&!!x.anisotropyMap,ct=He&&!!x.clearcoatMap,pt=He&&!!x.clearcoatNormalMap,et=He&&!!x.clearcoatRoughnessMap,it=y&&!!x.iridescenceMap,mt=y&&!!x.iridescenceThicknessMap,Nt=X&&!!x.sheenColorMap,vt=X&&!!x.sheenRoughnessMap,gt=!!x.specularMap,Ut=!!x.specularColorMap,zt=!!x.specularIntensityMap,Yt=J&&!!x.transmissionMap,k=J&&!!x.thicknessMap,xt=!!x.gradientMap,nt=!!x.alphaMap,_t=x.alphaTest>0,bt=!!x.alphaHash,rt=!!x.extensions,Ft=On;x.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let Pt={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:lt,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:at,batchingColor:at&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:dt,matcap:Lt,envMap:At,envMapMode:At&&q.mapping,envMapCubeUVHeight:U,aoMap:Bt,lightMap:qt,bumpMap:Wt,normalMap:ne,displacementMap:pe,emissiveMap:Ue,normalMapObjectSpace:ne&&x.normalMapType===_f,normalMapTangentSpace:ne&&x.normalMapType===Qr,packedNormalMap:ne&&x.normalMapType===Qr&&N_(x.normalMap.format),metalnessMap:me,roughnessMap:we,anisotropy:H,anisotropyMap:j,clearcoat:He,clearcoatMap:ct,clearcoatNormalMap:pt,clearcoatRoughnessMap:et,dispersion:oe,retroreflection:C,iridescence:y,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:X,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:gt,specularColorMap:Ut,specularIntensityMap:zt,transmission:J,transmissionMap:Yt,thicknessMap:k,gradientMap:xt,opaque:x.transparent===!1&&x.blending===Gs&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:bt,combine:x.combine,mapUv:dt&&m(x.map.channel),aoMapUv:Bt&&m(x.aoMap.channel),lightMapUv:qt&&m(x.lightMap.channel),bumpMapUv:Wt&&m(x.bumpMap.channel),normalMapUv:ne&&m(x.normalMap.channel),displacementMapUv:pe&&m(x.displacementMap.channel),emissiveMapUv:Ue&&m(x.emissiveMap.channel),metalnessMapUv:me&&m(x.metalnessMap.channel),roughnessMapUv:we&&m(x.roughnessMap.channel),anisotropyMapUv:j&&m(x.anisotropyMap.channel),clearcoatMapUv:ct&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:pt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&m(x.sheenRoughnessMap.channel),specularMapUv:gt&&m(x.specularMap.channel),specularColorMapUv:Ut&&m(x.specularColorMap.channel),specularIntensityMapUv:zt&&m(x.specularIntensityMap.channel),transmissionMapUv:Yt&&m(x.transmissionMap.channel),thicknessMapUv:k&&m(x.thicknessMap.channel),alphaMapUv:nt&&m(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ne||H),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(dt||nt),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:st,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:tt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:dt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===We,flipSided:x.side===Be,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||at)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function g(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(w,x),S(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let w=d[x.type],R;if(w){let P=ni[w];R=Lf.clone(P.uniforms)}else R=x.uniforms;return R}function _(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new L_(i,w,x,s),l.push(R),h.set(w,R)),R}function b(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function A(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:A}}function F_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function B_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Qf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,v,g,p){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=o(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=g,S.group=p),t++,S}function c(f,d,m,v,g,p,S){S.reversedDepth===!0&&(g=-g);let M=a(f,d,m,v,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function l(f,d,m,v,g,p){let S=a(f,d,m,v,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||B_),n.length>1&&n.sort(d||Qf),s.length>1&&s.sort(d||Qf)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function O_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new jf,i.set(n,[o])):s>=r.length?(o=new jf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new It};break;case"SpotLight":e={position:new D,direction:new D,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function H_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k_=0;function G_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V_(i){let t=new z_,e=H_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new ie,o=new ie;function a(l){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,S=0,M=0,_=0,b=0,E=0,A=0,x=0,w=0,R=0;l.sort(G_);for(let I=0,G=l.length;I<G;I++){let N=l[I],L=N.color,O=N.intensity,B=N.distance,q=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Bi?q=N.shadow.map.texture:q=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=L.r*O,u+=L.g*O,f+=L.b*O;else if(N.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(N.sh.coefficients[U],O);R++}else if(N.isSunLight){let U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,F=e.get(N);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[m]=F,n.sunShadowMap[m]=q;let Q=V.getViewportCount();for(let tt=0;tt<Q;tt++)n.sunShadowMatrix[v+tt]=V.getMatrix(tt),n.sunShadowCascade[v+tt]=V._cascadeData[tt];v+=Q,m++}n.sun[d]=U,d++}else if(N.isDirectionalLight){let U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,F=e.get(N);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,n.directionalShadow[g]=F,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=N.shadow.matrix,b++}n.directional[g]=U,g++}else if(N.isSpotLight){let U=t.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(L).multiplyScalar(O),U.distance=B,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,n.spot[S]=U;let V=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,V.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[S]=V.matrix,N.castShadow){let F=e.get(N);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,n.spotShadow[S]=F,n.spotShadowMap[S]=q,A++}S++}else if(N.isRectAreaLight){let U=t.get(N);U.color.copy(L).multiplyScalar(O),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=U,M++}else if(N.isPointLight){let U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),U.distance=N.distance,U.decay=N.decay,N.castShadow){let V=N.shadow,F=e.get(N);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,F.shadowCameraNear=V.camera.near,F.shadowCameraFar=V.camera.far,n.pointShadow[p]=F,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=U,p++}else if(N.isHemisphereLight){let U=t.get(N);U.skyColor.copy(N.color).multiplyScalar(O),U.groundColor.copy(N.groundColor).multiplyScalar(O),n.hemi[_]=U,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==S||P.rectAreaLength!==M||P.hemiLength!==_||P.numSunShadows!==m||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==A||P.numSpotMaps!==x||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=M,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.sunLength=d,P.directionalLength=g,P.pointLength=p,P.spotLength=S,P.rectAreaLength=M,P.hemiLength=_,P.numSunShadows=m,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=A,P.numSpotMaps=x,P.numLightProbes=R,n.version=k_++)}function c(l,h){let u=0,f=0,d=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let S=0,M=l.length;S<M;S++){let _=l[S];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function td(i){let t=new V_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function W_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new td(i),t.set(s,[a])):r>=o.length?(a=new td(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`,Y_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],$_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ed=new ie,to=new D,dh=new D;function Z_(i,t,e){let n=new Os,s=new Et,r=new Et,o=new Ae,a=new ga,c=new xa,l={},h=e.maxTextureSize,u={[jn]:Be,[Be]:jn,[We]:We},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new re;m.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ft(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ji;let p=this.type;this.render=function(E,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===La&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ji);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let G=p!==this.type;G&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(L=>L.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,L=E.length;N<L;N++){let O=E[N],B=O.shadow;if(B===void 0){Ot("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let q=B.getFrameExtents();s.multiply(q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,B.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=U,B.map===null||G===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ks){if(O.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new an(s.x,s.y,{format:Bi,type:Hn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new Ri(s.x,s.y,wn),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=$n,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge}else O.isPointLight?(B.map=new Tl(s.x),B.map.depthTexture=new oa(s.x,zn)):(B.map=new an(s.x,s.y),B.map.depthTexture=new Ri(s.x,s.y,zn)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=$n,this.type===ji?(B.map.depthTexture.compareFunction=U?Ml:yl,B.map.depthTexture.minFilter=Xe,B.map.depthTexture.magFilter=Xe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let V=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();O.isPointLight!==!0&&B.updateMatrices(O,x);for(let F=0;F<V;F++){let Q=B.getCamera(F);if(O.isPointLight){let tt=B.camera,ht=B.matrix,lt=O.distance||tt.far;lt!==tt.far&&(tt.far=lt,tt.updateProjectionMatrix()),to.setFromMatrixPosition(O.matrixWorld),tt.position.copy(to),dh.copy(tt.position),dh.add(Y_[F]),tt.up.copy($_[F]),tt.lookAt(dh),tt.updateMatrixWorld(),ht.makeTranslation(-to.x,-to.y,-to.z),ed.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ed,tt.coordinateSystem,tt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,F),i.clear();else{F===0&&(i.setRenderTarget(B.map),i.clear());let tt=B.getViewport(F);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),I.viewport(o)}n=B.getFrustum(F),_(A,x,Q,O,this.type)}B.isPointLightShadow!==!0&&this.type===ks&&S(B,x),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,R,P)};function S(E,A){let x=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new an(s.x,s.y,{format:Bi,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,x,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,x,d,v,null)}function M(E,A,x,w){let R=null,P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=R.uuid,G=A.uuid,N=l[I];N===void 0&&(N={},l[I]=N);let L=N[G];L===void 0&&(L=R.clone(),N[G]=L,A.addEventListener("dispose",b)),R=L}if(R.visible=A.visible,R.wireframe=A.wireframe,w===ks?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=x}return R}function _(E,A,x,w,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===ks)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let G=t.update(E),N=E.material;if(Array.isArray(N)){let L=G.groups;for(let O=0,B=L.length;O<B;O++){let q=L[O],U=N[q.materialIndex];if(U&&U.visible){let V=M(E,U,w,R);E.onBeforeShadow(i,E,A,x,G,V,q),i.renderBufferDirect(x,null,G,V,E,q),E.onAfterShadow(i,E,A,x,G,V,q)}}}else if(N.visible){let L=M(E,N,w,R);E.onBeforeShadow(i,E,A,x,G,L,null),i.renderBufferDirect(x,null,G,L,E,null),E.onAfterShadow(i,E,A,x,G,L,null)}}let I=E.children;for(let G=0,N=I.length;G<N;G++)_(I[G],A,x,w,R)}function b(E){E.target.removeEventListener("dispose",b);for(let x in l){let w=l[x],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function J_(i,t){function e(){let k=!1,xt=new Ae,nt=null,_t=new Ae(0,0,0,0);return{setMask:function(bt){nt!==bt&&!k&&(i.colorMask(bt,bt,bt,bt),nt=bt)},setLocked:function(bt){k=bt},setClear:function(bt,rt,Ft,Pt,ye){ye===!0&&(bt*=Pt,rt*=Pt,Ft*=Pt),xt.set(bt,rt,Ft,Pt),_t.equals(xt)===!1&&(i.clearColor(bt,rt,Ft,Pt),_t.copy(xt))},reset:function(){k=!1,nt=null,_t.set(-1,0,0,0)}}}function n(){let k=!1,xt=!1,nt=null,_t=null,bt=null;return{setReversed:function(rt){if(xt!==rt){let Ft=t.get("EXT_clip_control");rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=rt;let Pt=bt;bt=null,this.setClear(Pt)}},getReversed:function(){return xt},setTest:function(rt){rt?W(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!k&&(i.depthMask(rt),nt=rt)},setFunc:function(rt){if(xt&&(rt=Cf[rt]),_t!==rt){switch(rt){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=rt}},setLocked:function(rt){k=rt},setClear:function(rt){bt!==rt&&(bt=rt,xt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){k=!1,nt=null,_t=null,bt=null,xt=!1}}}function s(){let k=!1,xt=null,nt=null,_t=null,bt=null,rt=null,Ft=null,Pt=null,ye=null;return{setTest:function(he){k||(he?W(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(he){xt!==he&&!k&&(i.stencilMask(he),xt=he)},setFunc:function(he,Pn,Vn){(nt!==he||_t!==Pn||bt!==Vn)&&(i.stencilFunc(he,Pn,Vn),nt=he,_t=Pn,bt=Vn)},setOp:function(he,Pn,Vn){(rt!==he||Ft!==Pn||Pt!==Vn)&&(i.stencilOp(he,Pn,Vn),rt=he,Ft=Pn,Pt=Vn)},setLocked:function(he){k=he},setClear:function(he){ye!==he&&(i.clearStencil(he),ye=he)},reset:function(){k=!1,xt=null,nt=null,_t=null,bt=null,rt=null,Ft=null,Pt=null,ye=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],v=null,g=!1,p=null,S=null,M=null,_=null,b=null,E=null,A=null,x=new It(0,0,0),w=0,R=!1,P=null,I=null,G=null,N=null,L=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=q>=1):U.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=q>=2);let V=null,F={},Q=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),ht=new Ae().fromArray(Q),lt=new Ae().fromArray(tt);function ot(k,xt,nt,_t){let bt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(k,rt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<nt;Ft++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(xt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return rt}let Z={};Z[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(Cs),Wt(!1),ne(Cc),W(i.CULL_FACE),Bt(ti);function W(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function st(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function ut(k,xt){return f[k]!==xt?(i.bindFramebuffer(k,xt),f[k]=xt,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xt),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function at(k,xt){let nt=m,_t=!1;if(k){nt=d.get(xt),nt===void 0&&(nt=[],d.set(xt,nt));let bt=k.textures;if(nt.length!==bt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ft=bt.length;rt<Ft;rt++)nt[rt]=i.COLOR_ATTACHMENT0+rt;nt.length=bt.length,_t=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(nt)}function dt(k){return v!==k?(i.useProgram(k),v=k,!0):!1}let Lt={[ts]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[Ku]:i.FUNC_REVERSE_SUBTRACT};Lt[Qu]=i.MIN,Lt[ju]=i.MAX;let At={[tf]:i.ZERO,[ef]:i.ONE,[nf]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[cf]:i.SRC_ALPHA_SATURATE,[af]:i.DST_COLOR,[rf]:i.DST_ALPHA,[sf]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[lf]:i.ONE_MINUS_DST_COLOR,[of]:i.ONE_MINUS_DST_ALPHA,[hf]:i.CONSTANT_COLOR,[uf]:i.ONE_MINUS_CONSTANT_COLOR,[ff]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function Bt(k,xt,nt,_t,bt,rt,Ft,Pt,ye,he){if(k===ti){g===!0&&(st(i.BLEND),g=!1);return}if(g===!1&&(W(i.BLEND),g=!0),k!==Zu){if(k!==p||he!==R){if((S!==ts||b!==ts)&&(i.blendEquation(i.FUNC_ADD),S=ts,b=ts),he)switch(k){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pc:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",k);break}else switch(k){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",k);break}M=null,_=null,E=null,A=null,x.set(0,0,0),w=0,p=k,R=he}return}bt=bt||xt,rt=rt||nt,Ft=Ft||_t,(xt!==S||bt!==b)&&(i.blendEquationSeparate(Lt[xt],Lt[bt]),S=xt,b=bt),(nt!==M||_t!==_||rt!==E||Ft!==A)&&(i.blendFuncSeparate(At[nt],At[_t],At[rt],At[Ft]),M=nt,_=_t,E=rt,A=Ft),(Pt.equals(x)===!1||ye!==w)&&(i.blendColor(Pt.r,Pt.g,Pt.b,ye),x.copy(Pt),w=ye),p=k,R=!1}function qt(k,xt){k.side===We?st(i.CULL_FACE):W(i.CULL_FACE);let nt=k.side===Be;xt&&(nt=!nt),Wt(nt),k.blending===Gs&&k.transparent===!1?Bt(ti):Bt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let _t=k.stencilWrite;a.setTest(_t),_t&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function ne(k){k!==Yu?(W(i.CULL_FACE),k!==I&&(k===Cc?i.cullFace(i.BACK):k===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),I=k}function pe(k){k!==G&&(B&&i.lineWidth(k),G=k)}function Ue(k,xt,nt){k?(W(i.POLYGON_OFFSET_FILL),(N!==xt||L!==nt)&&(N=xt,L=nt,o.getReversed()&&(xt=-xt),i.polygonOffset(xt,nt))):st(i.POLYGON_OFFSET_FILL)}function me(k){k?W(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function we(k){k===void 0&&(k=i.TEXTURE0+O-1),V!==k&&(i.activeTexture(k),V=k)}function H(k,xt,nt){nt===void 0&&(V===null?nt=i.TEXTURE0+O-1:nt=V);let _t=F[nt];_t===void 0&&(_t={type:void 0,texture:void 0},F[nt]=_t),(_t.type!==k||_t.texture!==xt)&&(V!==nt&&(i.activeTexture(nt),V=nt),i.bindTexture(k,xt||Z[k]),_t.type=k,_t.texture=xt)}function He(){let k=F[V];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function oe(){try{i.compressedTexImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function y(){try{i.texSubImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function X(){try{i.texSubImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function ct(){try{i.texStorage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function pt(){try{i.texStorage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function et(){try{i.texImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function it(){try{i.texImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function mt(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Nt(k,xt){u[k]!==xt&&(i.pixelStorei(k,xt),u[k]=xt)}function vt(k){ht.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ht.copy(k))}function gt(k){lt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),lt.copy(k))}function Ut(k,xt){let nt=l.get(xt);nt===void 0&&(nt=new WeakMap,l.set(xt,nt));let _t=nt.get(k);_t===void 0&&(_t=i.getUniformBlockIndex(xt,k.name),nt.set(k,_t))}function zt(k,xt){let _t=l.get(xt).get(k);c.get(xt)!==_t&&(i.uniformBlockBinding(xt,_t,k.__bindingPointIndex),c.set(xt,_t))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},V=null,F={},f={},d=new WeakMap,m=[],v=null,g=!1,p=null,S=null,M=null,_=null,b=null,E=null,A=null,x=new It(0,0,0),w=0,R=!1,P=null,I=null,G=null,N=null,L=null,ht.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:st,bindFramebuffer:ut,drawBuffers:at,useProgram:dt,setBlending:Bt,setMaterial:qt,setFlipSided:Wt,setCullFace:ne,setLineWidth:pe,setPolygonOffset:Ue,setScissorTest:me,activeTexture:we,bindTexture:H,unbindTexture:He,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:et,texImage3D:it,pixelStorei:Nt,getParameter:mt,updateUBOMapping:Ut,uniformBlockBinding:zt,texStorage2D:ct,texStorage3D:pt,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:J,compressedTexSubImage3D:j,scissor:vt,viewport:gt,reset:Yt}}function K_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,y){return m?new OffscreenCanvas(C,y):yr("canvas")}function g(C,y,X){let J=1,j=oe(C);if((j.width>X||j.height>X)&&(J=X/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ct=Math.floor(J*j.width),pt=Math.floor(J*j.height);f===void 0&&(f=v(ct,pt));let et=y?v(ct,pt):f;return et.width=ct,et.height=pt,et.getContext("2d").drawImage(C,0,0,ct,pt),Ot("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ct+"x"+pt+")."),et}else return"data"in C&&Ot("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,y,X,J,j,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pt;J&&(pt=t.get("EXT_texture_norm16"),pt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=y;if(y===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8),X===i.UNSIGNED_SHORT&&pt&&(et=pt.R16_EXT),X===i.SHORT&&pt&&(et=pt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),y===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8),X===i.UNSIGNED_SHORT&&pt&&(et=pt.RG16_EXT),X===i.SHORT&&pt&&(et=pt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),y===i.RGB&&(X===i.UNSIGNED_SHORT&&pt&&(et=pt.RGB16_EXT),X===i.SHORT&&pt&&(et=pt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),y===i.RGBA){let it=ct?vr:te.getTransfer(j);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=it===fe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&pt&&(et=pt.RGBA16_EXT),X===i.SHORT&&pt&&(et=pt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(C,y){let X;return C?y===null||y===zn||y===Ws?X=i.DEPTH24_STENCIL8:y===wn?X=i.DEPTH32F_STENCIL8:y===Vs&&(X=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zn||y===Ws?X=i.DEPTH_COMPONENT24:y===wn?X=i.DEPTH_COMPONENT32F:y===Vs&&(X=i.DEPTH_COMPONENT16),X}function E(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==Xe?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),P(y)}function w(C){let y=n.get(C);if(y.__webglInit===void 0)return;let X=C.source,J=d.get(X);if(J){let j=J[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(C),Object.keys(J).length===0&&d.delete(X)}n.remove(C)}function R(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let X=C.source,J=d.get(X);delete J[y.__cacheKey],o.memory.textures--}function P(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let j=0;j<y.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(y.__webglFramebuffer[J][j]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=C.textures;for(let J=0,j=X.length;J<j;J++){let ct=n.get(X[J]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(C)}let I=0;function G(){I=0}function N(){return I}function L(C){I=C}function O(){let C=I;return C>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function B(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function q(C,y){let X=n.get(C);if(C.isVideoTexture&&H(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let J=C.image;if(J===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{st(X,C,y);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function U(C,y){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){st(X,C,y);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function V(C,y){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){st(X,C,y);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function F(C,y){let X=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&X.__version!==C.version){ut(X,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}let Q={[Yn]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},tt={[Ge]:i.NEAREST,[gf]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},ht={[yf]:i.NEVER,[wf]:i.ALWAYS,[Mf]:i.LESS,[yl]:i.LEQUAL,[Sf]:i.EQUAL,[Ml]:i.GEQUAL,[bf]:i.GREATER,[Ef]:i.NOTEQUAL};function lt(C,y){if(y.type===wn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Xe||y.magFilter===Fa||y.magFilter===Xr||y.magFilter===Ui||y.minFilter===Xe||y.minFilter===Fa||y.minFilter===Xr||y.minFilter===Ui)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Q[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,tt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,tt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ht[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==Xr&&y.minFilter!==Ui||y.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ot(C,y){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let J=y.source,j=d.get(J);j===void 0&&(j={},d.set(J,j));let ct=B(y);if(ct!==C.__cacheKey){j[ct]===void 0&&(j[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),j[ct].usedTimes++;let pt=j[C.__cacheKey];pt!==void 0&&(j[C.__cacheKey].usedTimes--,pt.usedTimes===0&&R(y)),C.__cacheKey=ct,C.__webglTexture=j[ct].texture}return X}function Z(C,y,X){return Math.floor(Math.floor(C/X)/y)}function W(C,y,X,J){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,X,J,y.data);else{ct.sort((Nt,vt)=>Nt.start-vt.start);let pt=0;for(let Nt=1;Nt<ct.length;Nt++){let vt=ct[pt],gt=ct[Nt],Ut=vt.start+vt.count,zt=Z(gt.start,y.width,4),Yt=Z(vt.start,y.width,4);gt.start<=Ut+1&&zt===Yt&&Z(gt.start+gt.count-1,y.width,4)===zt?vt.count=Math.max(vt.count,gt.start+gt.count-vt.start):(++pt,ct[pt]=gt)}ct.length=pt+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Nt=0,vt=ct.length;Nt<vt;Nt++){let gt=ct[Nt],Ut=Math.floor(gt.start/4),zt=Math.ceil(gt.count/4),Yt=Ut%y.width,k=Math.floor(Ut/y.width),xt=zt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Yt,k,xt,nt,X,J,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function st(C,y,X){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let j=ot(C,y),ct=y.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+X);let pt=n.get(ct);if(ct.version!==pt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let nt=te.getPrimaries(te.workingColorSpace),_t=y.colorSpace===kn?null:te.getPrimaries(y.colorSpace),bt=y.colorSpace===kn||nt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let it=g(y.image,!1,s.maxTextureSize);it=He(y,it);let mt=r.convert(y.format,y.colorSpace),Nt=r.convert(y.type),vt=_(y.internalFormat,mt,Nt,y.normalized,y.colorSpace,y.isVideoTexture);lt(J,y);let gt,Ut=y.mipmaps,zt=y.isVideoTexture!==!0,Yt=pt.__version===void 0||j===!0,k=ct.dataReady,xt=E(y,it);if(y.isDepthTexture)vt=b(y.format===Fi,y.type),Yt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,vt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,vt,it.width,it.height,0,mt,Nt,null));else if(y.isDataTexture)if(Ut.length>0){zt&&Yt&&e.texStorage2D(i.TEXTURE_2D,xt,vt,Ut[0].width,Ut[0].height);for(let nt=0,_t=Ut.length;nt<_t;nt++)gt=Ut[nt],zt?k&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,nt,vt,gt.width,gt.height,0,mt,Nt,gt.data);y.generateMipmaps=!1}else zt?(Yt&&e.texStorage2D(i.TEXTURE_2D,xt,vt,it.width,it.height),k&&W(y,it,mt,Nt)):e.texImage2D(i.TEXTURE_2D,0,vt,it.width,it.height,0,mt,Nt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){zt&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,vt,Ut[0].width,Ut[0].height,it.depth);for(let nt=0,_t=Ut.length;nt<_t;nt++)if(gt=Ut[nt],y.format!==Tn)if(mt!==null)if(zt){if(k)if(y.layerUpdates.size>0){let bt=nh(gt.width,gt.height,y.format,y.type);for(let rt of y.layerUpdates){let Ft=gt.data.subarray(rt*bt/gt.data.BYTES_PER_ELEMENT,(rt+1)*bt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,rt,gt.width,gt.height,1,mt,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,it.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,vt,gt.width,gt.height,it.depth,0,gt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,it.depth,mt,Nt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,vt,gt.width,gt.height,it.depth,0,mt,Nt,gt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{zt&&Yt&&e.texStorage2D(i.TEXTURE_2D,xt,vt,Ut[0].width,Ut[0].height);for(let nt=0,_t=Ut.length;nt<_t;nt++)gt=Ut[nt],y.format!==Tn?mt!==null?zt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,vt,gt.width,gt.height,0,gt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?k&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,nt,vt,gt.width,gt.height,0,mt,Nt,gt.data)}else if(y.isDataArrayTexture)if(zt){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,vt,it.width,it.height,it.depth),k)if(y.layerUpdates.size>0){let nt=nh(it.width,it.height,y.format,y.type);for(let _t of y.layerUpdates){let bt=it.data.subarray(_t*nt/it.data.BYTES_PER_ELEMENT,(_t+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,it.width,it.height,1,mt,Nt,bt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Nt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,it.width,it.height,it.depth,0,mt,Nt,it.data);else if(y.isData3DTexture)zt?(Yt&&e.texStorage3D(i.TEXTURE_3D,xt,vt,it.width,it.height,it.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Nt,it.data)):e.texImage3D(i.TEXTURE_3D,0,vt,it.width,it.height,it.depth,0,mt,Nt,it.data);else if(y.isFramebufferTexture){if(Yt)if(zt)e.texStorage2D(i.TEXTURE_2D,xt,vt,it.width,it.height);else{let nt=it.width,_t=it.height;for(let bt=0;bt<xt;bt++)e.texImage2D(i.TEXTURE_2D,bt,vt,nt,_t,0,mt,Nt,null),nt>>=1,_t>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),u.add(y),nt.onpaint=_t=>{let bt=_t.changedElements;for(let rt of u)bt.includes(rt.image)&&(rt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let bt=i.RGBA,rt=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,bt,rt,Ft,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(zt&&Yt){let nt=oe(Ut[0]);e.texStorage2D(i.TEXTURE_2D,xt,vt,nt.width,nt.height)}for(let nt=0,_t=Ut.length;nt<_t;nt++)gt=Ut[nt],zt?k&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt,Nt,gt):e.texImage2D(i.TEXTURE_2D,nt,vt,mt,Nt,gt);y.generateMipmaps=!1}else if(zt){if(Yt){let nt=oe(it);e.texStorage2D(i.TEXTURE_2D,xt,vt,nt.width,nt.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Nt,it)}else e.texImage2D(i.TEXTURE_2D,0,vt,mt,Nt,it);p(y)&&S(J),pt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ut(C,y,X){if(y.image.length!==6)return;let J=ot(C,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);let ct=n.get(j);if(j.version!==ct.__version||J===!0){e.activeTexture(i.TEXTURE0+X);let pt=te.getPrimaries(te.workingColorSpace),et=y.colorSpace===kn?null:te.getPrimaries(y.colorSpace),it=y.colorSpace===kn||pt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let mt=y.isCompressedTexture||y.image[0].isCompressedTexture,Nt=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let rt=0;rt<6;rt++)!mt&&!Nt?vt[rt]=g(y.image[rt],!0,s.maxCubemapSize):vt[rt]=Nt?y.image[rt].image:y.image[rt],vt[rt]=He(y,vt[rt]);let gt=vt[0],Ut=r.convert(y.format,y.colorSpace),zt=r.convert(y.type),Yt=_(y.internalFormat,Ut,zt,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,xt=ct.__version===void 0||J===!0,nt=j.dataReady,_t=E(y,gt);lt(i.TEXTURE_CUBE_MAP,y);let bt;if(mt){k&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,gt.width,gt.height);for(let rt=0;rt<6;rt++){bt=vt[rt].mipmaps;for(let Ft=0;Ft<bt.length;Ft++){let Pt=bt[Ft];y.format!==Tn?Ut!==null?k?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,0,0,Pt.width,Pt.height,Ut,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,Yt,Pt.width,Pt.height,0,Pt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,0,0,Pt.width,Pt.height,Ut,zt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,Yt,Pt.width,Pt.height,0,Ut,zt,Pt.data)}}}else{if(bt=y.mipmaps,k&&xt){bt.length>0&&_t++;let rt=oe(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Nt){k?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,vt[rt].width,vt[rt].height,Ut,zt,vt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Yt,vt[rt].width,vt[rt].height,0,Ut,zt,vt[rt].data);for(let Ft=0;Ft<bt.length;Ft++){let ye=bt[Ft].image[rt].image;k?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,0,0,ye.width,ye.height,Ut,zt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,Yt,ye.width,ye.height,0,Ut,zt,ye.data)}}else{k?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ut,zt,vt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Yt,Ut,zt,vt[rt]);for(let Ft=0;Ft<bt.length;Ft++){let Pt=bt[Ft];k?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,0,0,Ut,zt,Pt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,Yt,Ut,zt,Pt.image[rt])}}}p(y)&&S(i.TEXTURE_CUBE_MAP),ct.__version=j.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function at(C,y,X,J,j,ct){let pt=r.convert(X.format,X.colorSpace),et=r.convert(X.type),it=_(X.internalFormat,pt,et,X.normalized,X.colorSpace),mt=n.get(y),Nt=n.get(X);if(Nt.__renderTarget=y,!mt.__hasExternalTextures){let vt=Math.max(1,y.width>>ct),gt=Math.max(1,y.height>>ct);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ct,it,vt,gt,y.depth,0,pt,et,null):e.texImage2D(j,ct,it,vt,gt,0,pt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),we(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,Nt.__webglTexture,0,me(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,j,Nt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(C,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let J=y.depthTexture,j=J&&J.isDepthTexture?J.type:null,ct=b(y.stencilBuffer,j),pt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(y),ct,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(y),ct,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ct,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,C)}else{let J=y.textures;for(let j=0;j<J.length;j++){let ct=J[j],pt=r.convert(ct.format,ct.colorSpace),et=r.convert(ct.type),it=_(ct.internalFormat,pt,et,ct.normalized,ct.colorSpace);we(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(y),it,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(y),it,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,it,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(C,y,X){let J=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(y.depthTexture);if(j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(j.__webglInit===void 0&&(j.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),lt(i.TEXTURE_CUBE_MAP,y.depthTexture);let mt=r.convert(y.depthTexture.format),Nt=r.convert(y.depthTexture.type),vt;y.depthTexture.format===$n?vt=i.DEPTH_COMPONENT24:y.depthTexture.format===Fi&&(vt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,vt,y.width,y.height,0,mt,Nt,null)}}else q(y.depthTexture,0);let ct=j.__webglTexture,pt=me(y),et=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,it=y.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===$n)we(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,et,ct,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,it,et,ct,0);else if(y.depthTexture.format===Fi)we(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,et,ct,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,it,et,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(C){let y=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=J}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let J=0;J<6;J++)Lt(y.__webglFramebuffer[J],C,J);else{let J=C.texture.mipmaps;J&&J.length>0?Lt(y.__webglFramebuffer[0],C,0):Lt(y.__webglFramebuffer,C,0)}else if(X){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),dt(y.__webglDepthbuffer[J],C,!1);else{let j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ct)}}else{let J=C.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),dt(y.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(C,y,X){let J=n.get(C);y!==void 0&&at(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&At(C)}function qt(C){let y=C.texture,X=n.get(C),J=n.get(y);C.addEventListener("dispose",x);let j=C.textures,ct=C.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++),ct){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let it=0;it<y.mipmaps.length;it++)X.__webglFramebuffer[et][it]=i.createFramebuffer()}else X.__webglFramebuffer[et]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<y.mipmaps.length;et++)X.__webglFramebuffer[et]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(pt)for(let et=0,it=j.length;et<it;et++){let mt=n.get(j[et]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&we(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<j.length;et++){let it=j[et];X.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[et]);let mt=r.convert(it.format,it.colorSpace),Nt=r.convert(it.type),vt=_(it.internalFormat,mt,Nt,it.normalized,it.colorSpace,C.isXRRenderTarget===!0),gt=me(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,vt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,X.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),lt(i.TEXTURE_CUBE_MAP,y);for(let et=0;et<6;et++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)at(X.__webglFramebuffer[et][it],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else at(X.__webglFramebuffer[et],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(y)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let et=0,it=j.length;et<it;et++){let mt=j[et],Nt=n.get(mt),vt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Nt.__webglTexture),lt(vt,mt),at(X.__webglFramebuffer,C,mt,i.COLOR_ATTACHMENT0+et,vt,0),p(mt)&&S(vt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,J.__webglTexture),lt(et,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)at(X.__webglFramebuffer[it],C,y,i.COLOR_ATTACHMENT0,et,it);else at(X.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,et,0);p(y)&&S(et),e.unbindTexture()}C.depthBuffer&&At(C)}function Wt(C){let y=C.textures;for(let X=0,J=y.length;X<J;X++){let j=y[X];if(p(j)){let ct=M(C),pt=n.get(j).__webglTexture;e.bindTexture(ct,pt),S(ct),e.unbindTexture()}}}let ne=[],pe=[];function Ue(C){if(C.samples>0){if(we(C)===!1){let y=C.textures,X=C.width,J=C.height,j=i.COLOR_BUFFER_BIT,ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(C),et=y.length>1;if(et)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let it=C.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Nt=n.get(y[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,j,i.NEAREST),c===!0&&(ne.length=0,pe.length=0,ne.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ne.push(ct),pe.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Nt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function me(C){return Math.min(s.maxSamples,C.samples)}function we(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function He(C,y){let X=C.colorSpace,J=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==_r&&X!==kn&&(te.getTransfer(X)===fe?(J!==Tn||j!==cn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",X)),y}function oe(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=F,this.rebindTextures=Bt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=at,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Q_(i,t){function e(n,s=kn){let r,o=te.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===Tn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Ha)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===$r||n===Zr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Za||n===Ja||n===Ka||n===Qa||n===Jr||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Za)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jr)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===_l||n===Kr||n===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:j_,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,v=typeof XRWebGLBinding!="undefined",g=new Mh,p={},S=e.getContextAttributes(),M=null,_=null,b=[],E=[],A=new Et,x=null,w=null,R=new De;R.viewport=new Ae;let P=new De;P.viewport=new Ae;let I=[R,P],G=new Pa,N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let W=b[Z];return W===void 0&&(W=new Ns,b[Z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Z){let W=b[Z];return W===void 0&&(W=new Ns,b[Z]=W),W.getGripSpace()},this.getHand=function(Z){let W=b[Z];return W===void 0&&(W=new Ns,b[Z]=W),W.getHandSpace()};function O(Z){let W=E.indexOf(Z.inputSource);if(W===-1)return;let st=b[W];st!==void 0&&(st.update(Z.inputSource,Z.frame,l||o),st.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let Z=0;Z<b.length;Z++){let W=E[Z];W!==null&&(E[Z]=null,b[Z].disconnect(W))}N=null,L=null,g.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(M),d=null,f=null,u=null,s=null,_=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ut=null,at=null;S.depth&&(at=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=S.stencil?Fi:$n,ut=S.stencil?Ws:zn);let dt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new an(f.textureWidth,f.textureHeight,{format:Tn,type:cn,depthTexture:new Ri(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let st={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new an(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Z){for(let W=0;W<Z.removed.length;W++){let st=Z.removed[W],ut=E.indexOf(st);ut>=0&&(E[ut]=null,b[ut].disconnect(st))}for(let W=0;W<Z.added.length;W++){let st=Z.added[W],ut=E.indexOf(st);if(ut===-1){for(let dt=0;dt<b.length;dt++)if(dt>=E.length){E.push(st),ut=dt;break}else if(E[dt]===null){E[dt]=st,ut=dt;break}if(ut===-1)break}let at=b[ut];at&&at.connect(st)}}let U=new D,V=new D;function F(Z,W,st){U.setFromMatrixPosition(W.matrixWorld),V.setFromMatrixPosition(st.matrixWorld);let ut=U.distanceTo(V),at=W.projectionMatrix.elements,dt=st.projectionMatrix.elements,Lt=at[14]/(at[10]-1),At=at[14]/(at[10]+1),Bt=(at[9]+1)/at[5],qt=(at[9]-1)/at[5],Wt=(at[8]-1)/at[0],ne=(dt[8]+1)/dt[0],pe=Lt*Wt,Ue=Lt*ne,me=ut/(-Wt+ne),we=me*-Wt;if(W.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(we),Z.translateZ(me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),at[10]===-1)Z.projectionMatrix.copy(W.projectionMatrix),Z.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let H=Lt+me,He=At+me,oe=pe-we,C=Ue+(ut-we),y=Bt*At/He*H,X=qt*At/He*H;Z.projectionMatrix.makePerspective(oe,C,y,X,H,He),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Q(Z,W){W===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(W.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let W=Z.near,st=Z.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(st=g.depthFar)),G.near=P.near=R.near=W,G.far=P.far=R.far=st,(N!==G.near||L!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,L=G.far),G.layers.mask=Z.layers.mask|6,R.layers.mask=G.layers.mask&-5,P.layers.mask=G.layers.mask&-3;let ut=Z.parent,at=G.cameras;Q(G,ut);for(let dt=0;dt<at.length;dt++)Q(at[dt],ut);at.length===2?F(G,R,P):G.projectionMatrix.copy(R.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),tt(Z,G,ut)};function tt(Z,W,st){st===null?Z.matrix.copy(W.matrixWorld):(Z.matrix.copy(st.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(W.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(W.projectionMatrix),Z.projectionMatrixInverse.copy(W.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ls*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let ht=null;function lt(Z,W){if(h=W.getViewerPose(l||o),m=W,h!==null){let st=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ut=!1;st.length!==G.cameras.length&&(G.cameras.length=0,ut=!0);for(let At=0;At<st.length;At++){let Bt=st[At],qt=null;if(d!==null)qt=d.getViewport(Bt);else{let ne=u.getViewSubImage(f,Bt);qt=ne.viewport,At===0&&(t.setRenderTargetTextures(_,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(_))}let Wt=I[At];Wt===void 0&&(Wt=new De,Wt.layers.enable(At),Wt.viewport=new Ae,I[At]=Wt),Wt.matrix.fromArray(Bt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Bt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(qt.x,qt.y,qt.width,qt.height),At===0&&(G.matrix.copy(Wt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ut===!0&&G.cameras.push(Wt)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let At=u.getDepthInformation(st[0]);At&&At.isValid&&At.texture&&g.init(At,s.renderState)}if(at&&at.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let At=0;At<st.length;At++){let Bt=st[At].camera;if(Bt){let qt=p[Bt];qt||(qt=new Lr,p[Bt]=qt);let Wt=u.getCameraImage(Bt);qt.sourceTexture=Wt}}}}for(let st=0;st<b.length;st++){let ut=E[st],at=b[st];ut!==null&&at!==void 0&&at.update(ut,W,l||o)}ht&&ht(Z,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null}let ot=new nd;ot.setAnimationLoop(lt),this.setAnimationLoop=function(Z){ht=Z},this.dispose=function(){}}},ev=new ie,ld=new kt;ld.set(-1,0,0,0,1,0,0,0,1);function nv(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,jc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,M,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),M=S.envMap,_=S.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(ev.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ld),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let E=b.program;n.uniformBlockBinding(_,E)}function l(_,b){let E=s[_.id];E===void 0&&(g(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",S));let A=b.program;n.updateUBOMapping(_,A);let x=t.render.frame;r[_.id]!==x&&(f(_),r[_.id]=x)}function h(_){let b=u();_.__bindingPointIndex=b;let E=i.createBuffer(),A=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let b=s[_.id],E=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,w=E.length;x<w;x++){let R=E[x];if(Array.isArray(R))for(let P=0,I=R.length;P<I;P++)d(R[P],x,P,A);else d(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,b,E,A){if(v(_,b,E,A)===!0){let x=_.__offset,w=_.value;if(Array.isArray(w)){let R=0;for(let P=0;P<w.length;P++){let I=w[P],G=p(I);m(I,_.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function m(_,b,E){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,E)}function v(_,b,E,A){let x=_.value,w=b+"_"+E;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{let R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(_){let b=_.uniforms,E=0,A=16;for(let w=0,R=b.length;w<R;w++){let P=Array.isArray(b[w])?b[w]:[b[w]];for(let I=0,G=P.length;I<G;I++){let N=P[I],L=Array.isArray(N.value)?N.value:[N.value];for(let O=0,B=L.length;O<B;O++){let q=L[O],U=p(q),V=E%A,F=V%U.boundary,Q=V+F;E+=F,Q!==0&&A-Q<U.storage&&(E+=A-Q),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=U.storage}}}let x=E%A;return x>0&&(E+=A-x),_.__size=E,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",_),b}function S(_){let b=_.target;b.removeEventListener("dispose",S);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function rv(){return ei===null&&(ei=new Rr(sv,16,16,Bi,Hn),ei.name="DFG_LUT",ei.minFilter=Xe,ei.magFilter=Xe,ei.wrapS=qn,ei.wrapT=qn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var $s=class{constructor(t={}){let{canvas:e=Tf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=cn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=d,g=new Set([Va,Ga,ka]),p=new Set([cn,zn,Vs,Ws,Oa,za]),S=new Uint32Array(4),M=new Int32Array(4),_=new D,b=null,E=null,A=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,I=null,G=null,N=null,L=null;this._outputColorSpace=Re;let O=0,B=0,q=null,U=-1,V=null,F=new Ae,Q=new Ae,tt=null,ht=new It(0),lt=0,ot=e.width,Z=e.height,W=1,st=null,ut=null,at=new Ae(0,0,ot,Z),dt=new Ae(0,0,ot,Z),Lt=!1,At=new Os,Bt=!1,qt=!1,Wt=new ie,ne=new D,pe=new Ae,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function we(){return q===null?W:1}let H=n;function He(T,z){return e.getContext(T,z)}let oe,C,y,X,J,j,ct,pt,et,it,mt,Nt,vt,gt,Ut,zt,Yt,k,xt,nt,_t,bt,rt;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Pn,!1),H===null){let z="webgl2";if(H=He(z,T),H===null)throw He(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(T){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),Ht("WebGLRenderer: "+T.message),T}function Ft(){oe=new fx(H),oe.init(),_t=new Q_(H,oe),C=new nx(H,oe,t,_t),y=new J_(H,oe),C.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),G=H.createFramebuffer(),N=H.createFramebuffer(),L=H.createFramebuffer(),X=new mx(H),J=new F_,j=new K_(H,oe,y,J,C,_t,X),ct=new ux(R),pt=new xm(H),bt=new tx(H,pt),et=new dx(H,pt,X,bt),it=new xx(H,et,pt,bt,X),k=new gx(H,C,j),Ut=new ix(J),mt=new U_(R,ct,oe,C,bt,Ut),Nt=new nv(R,J),vt=new O_,gt=new W_(oe),Yt=new jg(R,ct,y,it,m,c),zt=new Z_(R,it,C),rt=new iv(H,X,C,y),xt=new ex(H,oe,X),nt=new px(H,oe,X),X.programs=mt.programs,R.capabilities=C,R.extensions=oe,R.properties=J,R.renderLists=vt,R.shadowMap=zt,R.state=y,R.info=X}v!==cn&&(w=new vx(v,e.width,e.height,a,s,r));let Pt=new Sh(R,H);this.xr=Pt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(ot,Z,!1))},this.getSize=function(T){return T.set(ot,Z)},this.setSize=function(T,z,K=!0){if(Pt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=T,Z=z,e.width=Math.floor(T*W),e.height=Math.floor(z*W),K===!0&&(e.style.width=T+"px",e.style.height=z+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(ot*W,Z*W).floor()},this.setDrawingBufferSize=function(T,z,K){ot=T,Z=z,W=K,e.width=Math.floor(T*K),e.height=Math.floor(z*K),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(v===cn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(at)},this.setViewport=function(T,z,K,Y){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,z,K,Y),y.viewport(F.copy(at).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(dt)},this.setScissor=function(T,z,K,Y){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,z,K,Y),y.scissor(Q.copy(dt).multiplyScalar(W).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){y.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){st=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,K=!0){let Y=0;if(T){let $=!1;if(q!==null){let St=q.texture.format;$=g.has(St)}if($){let St=q.texture.type,Tt=p.has(St),Mt=Yt.getClearColor(),Rt=Yt.getClearAlpha(),Dt=Mt.r,Zt=Mt.g,Qt=Mt.b;Tt?(S[0]=Dt,S[1]=Zt,S[2]=Qt,S[3]=Rt,H.clearBufferuiv(H.COLOR,0,S)):(M[0]=Dt,M[1]=Zt,M[2]=Qt,M[3]=Rt,H.clearBufferiv(H.COLOR,0,M))}else Y|=H.COLOR_BUFFER_BIT}z&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),Yt.dispose(),vt.dispose(),gt.dispose(),J.dispose(),ct.dispose(),it.dispose(),bt.dispose(),rt.dispose(),mt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",iu),Pt.removeEventListener("sessionend",su),Hi.stop()};function ye(T){T.preventDefault(),Mr("WebGLRenderer: Context Lost."),P=!0}function he(){Mr("WebGLRenderer: Context Restored."),P=!1;let T=X.autoReset,z=zt.enabled,K=zt.autoUpdate,Y=zt.needsUpdate,$=zt.type;Ft(),X.autoReset=T,zt.enabled=z,zt.autoUpdate=K,zt.needsUpdate=Y,zt.type=$}function Pn(T){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vn(T){let z=T.target;z.removeEventListener("dispose",Vn),jd(z)}function jd(T){tp(T),J.remove(T)}function tp(T){let z=J.get(T).programs;z!==void 0&&(z.forEach(function(K){mt.releaseProgram(K)}),T.isShaderMaterial&&mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,K,Y,$,St){z===null&&(z=Ue);let Tt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Mt=ip(T,z,K,Y,$);y.setMaterial(Y,Tt);let Rt=K.index,Dt=1;if(Y.wireframe===!0){if(Rt=et.getWireframeAttribute(K),Rt===void 0)return;Dt=2}let Zt=K.drawRange,Qt=K.attributes.position,Ct=Zt.start*Dt,ue=(Zt.start+Zt.count)*Dt;St!==null&&(Ct=Math.max(Ct,St.start*Dt),ue=Math.min(ue,(St.start+St.count)*Dt)),Rt!==null?(Ct=Math.max(Ct,0),ue=Math.min(ue,Rt.count)):Qt!=null&&(Ct=Math.max(Ct,0),ue=Math.min(ue,Qt.count));let Ie=ue-Ct;if(Ie<0||Ie===1/0)return;bt.setup($,Y,Mt,K,Rt);let Te,ve=xt;if(Rt!==null&&(Te=pt.get(Rt),ve=nt,ve.setIndex(Te)),$.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*we()),ve.setMode(H.LINES)):ve.setMode(H.TRIANGLES);else if($.isLine){let $e=Y.linewidth;$e===void 0&&($e=1),y.setLineWidth($e*we()),$.isLineSegments?ve.setMode(H.LINES):$.isLineLoop?ve.setMode(H.LINE_LOOP):ve.setMode(H.LINE_STRIP)}else $.isPoints?ve.setMode(H.POINTS):$.isSprite&&ve.setMode(H.TRIANGLES);if($.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let $e=$._multiDrawStarts,wt=$._multiDrawCounts,tn=$._multiDrawCount,se=Rt?pt.get(Rt).bytesPerElement:1,Sn=J.get(Y).currentProgram.getUniforms();for(let Wn=0;Wn<tn;Wn++)Sn.setValue(H,"_gl_DrawID",Wn),ve.render($e[Wn]/se,wt[Wn])}else if($.isInstancedMesh)ve.renderInstances(Ct,Ie,$.count);else if(K.isInstancedBufferGeometry){let $e=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,wt=Math.min(K.instanceCount,$e);ve.renderInstances(Ct,Ie,wt)}else ve.render(Ct,Ie)};function nu(T,z,K,Y){I!==null&&T.isNodeMaterial&&I.setObject(Y,T),Bt===!0&&Ut.setState(T,K,!1),T.transparent===!0&&T.side===We&&T.forceSinglePass===!1?(T.side=Be,T.needsUpdate=!0,mo(T,z,Y),T.side=jn,T.needsUpdate=!0,mo(T,z,Y),T.side=We):mo(T,z,Y)}this.compile=function(T,z,K=null){K===null&&(K=T),I!==null&&I.renderStart(T,z,K),E=gt.get(K),E.init(z),x.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),T!==K&&T.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),qt=this.localClippingEnabled,Bt=Ut.init(this.clippingPlanes,qt),Bt===!0&&Ut.setGlobalState(this.clippingPlanes,z),I!==null&&zt.render(E.state.shadowsArray,K,z);let Y=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let St=$.material;if(St)if(Array.isArray(St))for(let Tt=0;Tt<St.length;Tt++){let Mt=St[Tt];nu(Mt,K,z,$),Y.add(Mt)}else nu(St,K,z,$),Y.add(St)}),E=x.pop(),I!==null&&I.renderEnd(),Y},this.compileAsync=function(T,z,K=null){let Y=this.compile(T,z,K);return new Promise($=>{function St(){if(Y.forEach(function(Tt){let Rt=J.get(Tt).currentProgram;(Rt===void 0||Rt.isReady())&&Y.delete(Tt)}),Y.size===0){$(T);return}setTimeout(St,10)}oe.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Yl=null;function ep(T){Yl&&Yl(T)}function iu(){Hi.stop()}function su(){Hi.start()}let Hi=new nd;Hi.setAnimationLoop(ep),typeof self!="undefined"&&Hi.setContext(self),this.setAnimationLoop=function(T){Yl=T,Pt.setAnimationLoop(T),T===null?Hi.stop():Hi.start()},Pt.addEventListener("sessionstart",iu),Pt.addEventListener("sessionend",su),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(T,z);let K=Pt.enabled===!0&&Pt.isPresenting===!0,Y=w!==null&&(q===null||K)&&w.begin(R,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(z),z=Pt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,z,q),E=gt.get(T,x.length),E.init(z),E.state.textureUnits=j.getTextureUnits(),x.push(E),Wt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),At.setFromProjectionMatrix(Wt,Fn,z.reversedDepth),qt=this.localClippingEnabled,Bt=Ut.init(this.clippingPlanes,qt),b=vt.get(T,A.length),b.init(),A.push(b),Pt.enabled===!0&&Pt.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&$l(Tt,z,-1/0,R.sortObjects)}$l(T,z,0,R.sortObjects),b.finish(),I!==null&&I.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(st,ut),me=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,me&&Yt.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Bt===!0&&Ut.beginShadows();let $=E.state.shadowsArray;if(zt.render($,T,z),Bt===!0&&Ut.endShadows(),(Y&&w.hasRenderPass())===!1){let Tt=b.opaque,Mt=b.transmissive;if(E.setupLights(),z.isArrayCamera){let Rt=z.cameras;if(Mt.length>0)for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt];ou(Tt,Mt,T,Qt)}me&&Yt.render(T);for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt];ru(b,T,Qt,Qt.viewport)}}else Mt.length>0&&ou(Tt,Mt,T,z),me&&Yt.render(T),ru(b,T,z)}q!==null&&B===0&&(j.updateMultisampleRenderTarget(q),j.updateRenderTargetMipmap(q)),Y&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,z),bt.resetDefaultState(),U=-1,V=null,x.pop(),x.length>0?(E=x[x.length-1],j.setTextureUnits(E.state.textureUnits),Bt===!0&&Ut.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,I!==null&&I.renderEnd()};function $l(T,z,K,Y){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(At)){Y&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Wt);let Tt=it.update(T),Mt=T.material;Mt.visible&&b.push(T,Tt,Mt,K,pe.z,null,z)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(At))){let Tt=it.update(T),Mt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),pe.copy(Tt.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(Wt)),Array.isArray(Mt)){let Rt=Tt.groups;for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt],Ct=Mt[Qt.materialIndex];Ct&&Ct.visible&&b.push(T,Tt,Ct,K,pe.z,Qt,z)}}else Mt.visible&&b.push(T,Tt,Mt,K,pe.z,null,z)}}let St=T.children;for(let Tt=0,Mt=St.length;Tt<Mt;Tt++)$l(St[Tt],z,K,Y)}function ru(T,z,K,Y){let{opaque:$,transmissive:St,transparent:Tt}=T;E.setupLightsView(K),Bt===!0&&Ut.setGlobalState(R.clippingPlanes,K),Y&&y.viewport(F.copy(Y)),$.length>0&&po($,z,K),St.length>0&&po(St,z,K),Tt.length>0&&po(Tt,z,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ou(T,z,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){let Ct=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new an(1,1,{generateMipmaps:!0,type:Ct?Hn:cn,minFilter:Ui,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let St=E.state.transmissionRenderTarget[Y.id],Tt=Y.viewport||F;St.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(ht),lt=R.getClearAlpha(),lt<1&&R.setClearColor(16777215,.5),R.clear(),me&&Yt.render(K);let Zt=R.toneMapping;R.toneMapping=On;let Qt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),Bt===!0&&Ut.setGlobalState(R.clippingPlanes,Y),po(T,K,Y),j.updateMultisampleRenderTarget(St),j.updateRenderTargetMipmap(St),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ue=0,Ie=z.length;ue<Ie;ue++){let Te=z[ue],{object:ve,geometry:$e,material:wt,group:tn}=Te;if(wt.side===We&&ve.layers.test(Y.layers)){let se=wt.side;wt.side=Be,wt.needsUpdate=!0,au(ve,K,Y,$e,wt,tn),wt.side=se,wt.needsUpdate=!0,Ct=!0}}Ct===!0&&(j.updateMultisampleRenderTarget(St),j.updateRenderTargetMipmap(St))}R.setRenderTarget(Mt,Rt,Dt),R.setClearColor(ht,lt),Qt!==void 0&&(Y.viewport=Qt),R.toneMapping=Zt}function po(T,z,K){let Y=z.isScene===!0?z.overrideMaterial:null;for(let $=0,St=T.length;$<St;$++){let Tt=T[$],{object:Mt,geometry:Rt,group:Dt}=Tt,Zt=Tt.material;Zt.allowOverride===!0&&Y!==null&&(Zt=Y),Mt.layers.test(K.layers)&&au(Mt,z,K,Rt,Zt,Dt)}}function au(T,z,K,Y,$,St){I!==null&&$.isNodeMaterial&&I.setObject(T,$),T.onBeforeRender(R,z,K,Y,$,St),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(R,z,K,Y,T,St),$.transparent===!0&&$.side===We&&$.forceSinglePass===!1?($.side=Be,$.needsUpdate=!0,R.renderBufferDirect(K,z,Y,$,T,St),$.side=jn,$.needsUpdate=!0,R.renderBufferDirect(K,z,Y,$,T,St),$.side=We):R.renderBufferDirect(K,z,Y,$,T,St),T.onAfterRender(R,z,K,Y,$,St)}function mo(T,z,K){z.isScene!==!0&&(z=Ue);let Y=J.get(T),$=E.state.lights,St=E.state.shadowsArray,Tt=$.state.version,Mt=mt.getParameters(T,$.state,St,z,K,E.state.lightProbeGridArray),Rt=mt.getProgramCacheKey(Mt),Dt=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let Zt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=ct.get(T.envMap||Y.environment,Zt),Y.envMapRotation=Y.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Vn),Dt=new Map,Y.programs=Dt);let Qt=Dt.get(Rt);if(Qt!==void 0){if(Y.currentProgram===Qt&&Y.lightsStateVersion===Tt)return cu(T,Mt),Qt}else Mt.uniforms=mt.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,K,Mt),T.onBeforeCompile(Mt,R),Qt=mt.acquireProgram(Mt,Rt),Dt.set(Rt,Qt),Y.uniforms=Mt.uniforms;let Ct=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=Ut.uniform),cu(T,Mt),Y.needsLights=rp(T),Y.lightsStateVersion=Tt,Y.needsLights&&(Ct.ambientLightColor.value=$.state.ambient,Ct.lightProbe.value=$.state.probe,Ct.sunLights.value=$.state.sun,Ct.sunLightShadows.value=$.state.sunShadow,Ct.directionalLights.value=$.state.directional,Ct.directionalLightShadows.value=$.state.directionalShadow,Ct.spotLights.value=$.state.spot,Ct.spotLightShadows.value=$.state.spotShadow,Ct.rectAreaLights.value=$.state.rectArea,Ct.ltc_1.value=$.state.rectAreaLTC1,Ct.ltc_2.value=$.state.rectAreaLTC2,Ct.pointLights.value=$.state.point,Ct.pointLightShadows.value=$.state.pointShadow,Ct.hemisphereLights.value=$.state.hemi,Ct.sunShadowMatrix.value=$.state.sunShadowMatrix,Ct.sunShadowCascade.value=$.state.sunShadowCascade,Ct.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ct.spotLightMatrix.value=$.state.spotLightMatrix,Ct.spotLightMap.value=$.state.spotLightMap,Ct.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=Qt,Y.uniformsList=null,Qt}function lu(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Ys.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function cu(T,z){let K=J.get(T);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function np(T,z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let K=0,Y=T.length;K<Y;K++){let $=T[K];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function ip(T,z,K,Y,$){z.isScene!==!0&&(z=Ue),j.resetTextureUnits();let St=z.fog,Tt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Mt=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:te.workingColorSpace,Rt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Dt=ct.get(Y.envMap||Tt,Rt),Zt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ct=!!K.morphAttributes.position,ue=!!K.morphAttributes.normal,Ie=!!K.morphAttributes.color,Te=On;Y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Te=R.toneMapping);let ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$e=ve!==void 0?ve.length:0,wt=J.get(Y),tn=E.state.lights;if(Bt===!0&&(qt===!0||T!==V)){let Me=T===V&&Y.id===U;Ut.setState(Y,T,Me)}let se=!1;Y.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==tn.state.version||wt.outputColorSpace!==Mt||$.isBatchedMesh&&wt.batching===!1||!$.isBatchedMesh&&wt.batching===!0||$.isBatchedMesh&&wt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&wt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&wt.instancing===!1||!$.isInstancedMesh&&wt.instancing===!0||$.isSkinnedMesh&&wt.skinning===!1||!$.isSkinnedMesh&&wt.skinning===!0||$.isInstancedMesh&&wt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&wt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&wt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&wt.instancingMorph===!1&&$.morphTexture!==null||wt.envMap!==Dt||Y.fog===!0&&wt.fog!==St||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Ut.numPlanes||wt.numIntersection!==Ut.numIntersection)||wt.vertexAlphas!==Zt||wt.vertexTangents!==Qt||wt.morphTargets!==Ct||wt.morphNormals!==ue||wt.morphColors!==Ie||wt.toneMapping!==Te||wt.morphTargetsCount!==$e||!!wt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,wt.__version=Y.version);let Sn=wt.currentProgram;se===!0&&(Sn=mo(Y,z,$),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,Sn,wt));let Wn=!1,vi=!1,ls=!1,xe=Sn.getUniforms(),Pe=wt.uniforms;if(y.useProgram(Sn.program)&&(Wn=!0,vi=!0,ls=!0),Y.id!==U&&(U=Y.id,vi=!0),wt.needsLights){let Me=np(E.state.lightProbeGridArray,$);wt.lightProbeGrid!==Me&&(wt.lightProbeGrid=Me,vi=!0)}if(Wn||V!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xe.setValue(H,"projectionMatrix",T.projectionMatrix),xe.setValue(H,"viewMatrix",T.matrixWorldInverse);let Mi=xe.map.cameraPosition;Mi!==void 0&&Mi.setValue(H,ne.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&xe.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,vi=!0,ls=!0)}if(wt.needsLights&&(tn.state.sunShadowMap.length>0&&xe.setValue(H,"sunShadowMap",tn.state.sunShadowMap,j),tn.state.directionalShadowMap.length>0&&xe.setValue(H,"directionalShadowMap",tn.state.directionalShadowMap,j),tn.state.spotShadowMap.length>0&&xe.setValue(H,"spotShadowMap",tn.state.spotShadowMap,j),tn.state.pointShadowMap.length>0&&xe.setValue(H,"pointShadowMap",tn.state.pointShadowMap,j)),$.isSkinnedMesh){xe.setOptional(H,$,"bindMatrix"),xe.setOptional(H,$,"bindMatrixInverse");let Me=$.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue(H,"boneTexture",Me.boneTexture,j))}$.isBatchedMesh&&(xe.setOptional(H,$,"batchingTexture"),xe.setValue(H,"batchingTexture",$._matricesTexture,j),xe.setOptional(H,$,"batchingIdTexture"),xe.setValue(H,"batchingIdTexture",$._indirectTexture,j),xe.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&xe.setValue(H,"batchingColorTexture",$._colorsTexture,j));let yi=K.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&k.update($,K,Sn),(vi||wt.receiveShadow!==$.receiveShadow)&&(wt.receiveShadow=$.receiveShadow,xe.setValue(H,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Pe.envMapIntensity.value=z.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=rv()),vi){if(xe.setValue(H,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&sp(Pe,ls),St&&Y.fog===!0&&Nt.refreshFogUniforms(Pe,St),Nt.refreshMaterialUniforms(Pe,Y,W,Z,E.state.transmissionRenderTarget[T.id]),wt.needsLights&&wt.lightProbeGrid){let Me=wt.lightProbeGrid;Pe.probesSH.value=Me.texture,Pe.probesMin.value.copy(Me.boundingBox.min),Pe.probesMax.value.copy(Me.boundingBox.max),Pe.probesResolution.value.copy(Me.resolution)}Ys.upload(H,lu(wt),Pe,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ys.upload(H,lu(wt),Pe,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(H,"center",$.center),xe.setValue(H,"modelViewMatrix",$.modelViewMatrix),xe.setValue(H,"normalMatrix",$.normalMatrix),xe.setValue(H,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let Me=Y.uniformsGroups;for(let Mi=0,cs=Me.length;Mi<cs;Mi++){let uu=Me[Mi];rt.update(uu,Sn),rt.bind(uu,Sn)}}return Sn}function sp(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function rp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,z,K){let Y=J.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(T.texture).__webglTexture=z,J.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let K=J.get(T);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,K=0){q=T,O=z,B=K;let Y=null,$=!1,St=!1;if(T){let Mt=J.get(T);if(Mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,Mt.__webglFramebuffer),F.copy(T.viewport),Q.copy(T.scissor),tt=T.scissorTest,y.viewport(F),y.scissor(Q),y.setScissorTest(tt),U=-1;return}else if(Mt.__webglFramebuffer===void 0)j.setupRenderTarget(T);else if(Mt.__hasExternalTextures)j.rebindTextures(T,J.get(T.texture).__webglTexture,J.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Zt=T.depthTexture;if(Mt.__boundDepthTexture!==Zt){if(Zt!==null&&J.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(T)}}let Rt=T.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);let Dt=J.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[z])?Y=Dt[z][K]:Y=Dt[z],$=!0):T.samples>0&&j.useMultisampledRTT(T)===!1?Y=J.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?Y=Dt[K]:Y=Dt,F.copy(T.viewport),Q.copy(T.scissor),tt=T.scissorTest}else F.copy(at).multiplyScalar(W).floor(),Q.copy(dt).multiplyScalar(W).floor(),tt=Lt;if(K!==0&&(Y=G),y.bindFramebuffer(H.FRAMEBUFFER,Y)&&y.drawBuffers(T,Y),y.viewport(F),y.scissor(Q),y.setScissorTest(tt),$){let Mt=J.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,K)}else if(St){let Mt=z;for(let Rt=0;Rt<T.textures.length;Rt++){let Dt=J.get(T.textures[Rt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,K,Mt)}}else if(T!==null&&K!==0){let Mt=J.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mt.__webglTexture,K)}U=-1};function hu(T){let z=J.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=C.textureFormatReadable(T.format),z.__typeReadable=C.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,K,Y,$,St,Tt,Mt=0){if(!(T&&T.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){y.bindFramebuffer(H.FRAMEBUFFER,Rt);try{let Dt=T.textures[Mt],Zt=Dt.format,Qt=Dt.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Mt);let Ct=hu(Dt);if(Ct.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Y&&K>=0&&K<=T.height-$&&H.readPixels(z,K,Y,$,_t.convert(Zt),_t.convert(Qt),St)}finally{let Dt=q!==null?J.get(q).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,z,K,Y,$,St,Tt,Mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(z>=0&&z<=T.width-Y&&K>=0&&K<=T.height-$){y.bindFramebuffer(H.FRAMEBUFFER,Rt);let Dt=T.textures[Mt],Zt=Dt.format,Qt=Dt.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Mt);let Ct=hu(Dt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.bufferData(H.PIXEL_PACK_BUFFER,St.byteLength,H.STREAM_READ),H.readPixels(z,K,Y,$,_t.convert(Zt),_t.convert(Qt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ie=q!==null?J.get(q).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Ie);let Te=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Rf(H,Te,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,St),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ue),H.deleteSync(Te),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,K=0){let Y=Math.pow(2,-K),$=Math.floor(T.image.width*Y),St=Math.floor(T.image.height*Y),Tt=z!==null?z.x:0,Mt=z!==null?z.y:0;j.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,Tt,Mt,$,St),y.unbindTexture()},this.copyTextureToTexture=function(T,z,K=null,Y=null,$=0,St=0){let Tt,Mt,Rt,Dt,Zt,Qt,Ct,ue,Ie,Te=T.isCompressedTexture?T.mipmaps[St]:T.image;if(K!==null)Tt=K.max.x-K.min.x,Mt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Zt=K.min.y,Qt=K.isBox3?K.min.z:0;else{let Pe=Math.pow(2,-$);Tt=Math.floor(Te.width*Pe),Mt=Math.floor(Te.height*Pe),T.isDataArrayTexture?Rt=Te.depth:T.isData3DTexture?Rt=Math.floor(Te.depth*Pe):Rt=1,Dt=0,Zt=0,Qt=0}Y!==null?(Ct=Y.x,ue=Y.y,Ie=Y.z):(Ct=0,ue=0,Ie=0);let ve=_t.convert(z.format),$e=_t.convert(z.type),wt;z.isData3DTexture?(j.setTexture3D(z,0),wt=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),wt=H.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),wt=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let tn=y.getParameter(H.UNPACK_ROW_LENGTH),se=y.getParameter(H.UNPACK_IMAGE_HEIGHT),Sn=y.getParameter(H.UNPACK_SKIP_PIXELS),Wn=y.getParameter(H.UNPACK_SKIP_ROWS),vi=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,Te.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Te.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Dt),y.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),y.pixelStorei(H.UNPACK_SKIP_IMAGES,Qt);let ls=T.isDataArrayTexture||T.isData3DTexture,xe=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let Pe=J.get(T),yi=J.get(z),Me=J.get(Pe.__renderTarget),Mi=J.get(yi.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,Me.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let cs=0;cs<Rt;cs++)ls&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,J.get(T).__webglTexture,$,Qt+cs),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,J.get(z).__webglTexture,St,Ie+cs)),H.blitFramebuffer(Dt,Zt,Tt,Mt,Ct,ue,Tt,Mt,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||J.has(T)){let Pe=J.get(T),yi=J.get(z);y.bindFramebuffer(H.READ_FRAMEBUFFER,N),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,L);for(let Me=0;Me<Rt;Me++)ls?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pe.__webglTexture,$,Qt+Me):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pe.__webglTexture,$),xe?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yi.__webglTexture,St,Ie+Me):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yi.__webglTexture,St),$!==0?H.blitFramebuffer(Dt,Zt,Tt,Mt,Ct,ue,Tt,Mt,H.COLOR_BUFFER_BIT,H.NEAREST):xe?H.copyTexSubImage3D(wt,St,Ct,ue,Ie+Me,Dt,Zt,Tt,Mt):H.copyTexSubImage2D(wt,St,Ct,ue,Dt,Zt,Tt,Mt);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else xe?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(wt,St,Ct,ue,Ie,Tt,Mt,Rt,ve,$e,Te.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(wt,St,Ct,ue,Ie,Tt,Mt,Rt,ve,Te.data):H.texSubImage3D(wt,St,Ct,ue,Ie,Tt,Mt,Rt,ve,$e,Te):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,St,Ct,ue,Tt,Mt,ve,$e,Te.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,St,Ct,ue,Te.width,Te.height,ve,Te.data):H.texSubImage2D(H.TEXTURE_2D,St,Ct,ue,Tt,Mt,ve,$e,Te);y.pixelStorei(H.UNPACK_ROW_LENGTH,tn),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,se),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Sn),y.pixelStorei(H.UNPACK_SKIP_ROWS,Wn),y.pixelStorei(H.UNPACK_SKIP_IMAGES,vi),St===0&&z.generateMipmaps&&H.generateMipmap(wt),y.unbindTexture()},this.initRenderTarget=function(T){J.get(T).__webglFramebuffer===void 0&&j.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?j.setTextureCube(T,0):T.isData3DTexture?j.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?j.setTexture2DArray(T,0):j.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){O=0,B=0,q=null,y.reset(),bt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var hn=(i,t,e=0)=>new D(i,t,e),Eh=i=>Math.max(0,i),jt=(i,t,e)=>i+(t-i)*e;function Js(i,t){let e=[],n=i.length-1;for(let s=0;s<t;s++){let r=s/(t-1)*n,o=Math.min(n-1,Math.floor(r)),a=r-o,c=i[Math.max(0,o-1)],l=i[o],h=i[o+1],u=i[Math.min(n,o+2)],f=(m,v,g,p)=>.5*(2*v+(-m+g)*a+(2*m-5*v+4*g-p)*a*a+(-m+3*v-3*g+p)*a*a*a),d=m=>Math.max(1e-4,f(c[m],l[m],h[m],u[m]));e.push({x:f(c.x,l.x,h.x,u.x),y:f(c.y,l.y,h.y,u.y),z:f(c.z||0,l.z||0,h.z||0,u.z||0),rw:d("rw"),rh:d("rh"),k:r})}return e}var pi=class{constructor(t,e,n=1){this.n=t,this.r=e,this.count=n,this.painted=[];let s=t*(e+1),r=s*n,o=new re;this.N1=s,this.P=new Float32Array(r*3),this.Nn=new Float32Array(r*3),this.U=new Float32Array(r*2),o.setAttribute("position",new ae(this.P,3)),o.setAttribute("normal",new ae(this.Nn,3)),o.setAttribute("uv",new ae(this.U,2)),o.setAttribute("color",new ae(new Float32Array(r*3),3)),o.setAttribute("fl",new ae(new Float32Array(r),1)),o.attributes.position.setUsage(Sl),o.attributes.normal.setUsage(Sl);let a=[];for(let c=0;c<n;c++)for(let l=0;l<t-1;l++)for(let h=0;h<e;h++){let u=c*s+l*(e+1)+h,f=u+e+1;a.push(u,f,u+1,f,f+1,u+1)}o.setIndex(a),this.g=o,this.side=hn(0,0,1)}update(t,e,n=0){let s=n*this.N1,r=e&&!this.painted[n],{P:o,Nn:a,U:c,r:l}=this,h=this.side,u=hn(),f=hn(),d=hn(),m=hn(),v=0,g=this.g.attributes.color.array,p=this.g.attributes.fl.array;for(let S=0;S<this.n;S++){let M=t[Math.max(0,S-1)],_=t[Math.min(this.n-1,S+1)],b=t[S];u.set(_.x-M.x,_.y-M.y,_.z-M.z).normalize(),d.copy(h).addScaledVector(u,-h.dot(u)).normalize(),f.crossVectors(d,u).normalize(),S&&(v+=Math.hypot(b.x-t[S-1].x,b.y-t[S-1].y,b.z-t[S-1].z));let E=Math.PI*(b.rw+b.rh);for(let A=0;A<=l;A++){let x=A/l*Math.PI*2,w=Math.cos(x),R=Math.sin(x),P=s+(S*(l+1)+A);if(m.set(b.x,b.y,b.z).addScaledVector(f,w*b.rh).addScaledVector(d,R*b.rw),o[P*3]=m.x,o[P*3+1]=m.y,o[P*3+2]=m.z,m.set(0,0,0).addScaledVector(f,w/Math.max(b.rh,1e-4)).addScaledVector(d,R/Math.max(b.rw,1e-4)).normalize(),a[P*3]=m.x,a[P*3+1]=m.y,a[P*3+2]=m.z,c[P*2]=v,c[P*2+1]=A/l*E,r){let I=e(S,w,R,b);g[P*3]=I[0],g[P*3+1]=I[1],g[P*3+2]=I[2],p[P]=I[3]}}}r&&(this.painted[n]=!0,this.g.attributes.color.needsUpdate=!0,this.g.attributes.fl.needsUpdate=!0,this.g.attributes.uv.needsUpdate=!0),this.g.attributes.position.needsUpdate=!0,this.g.attributes.normal.needsUpdate=!0,this.g.boundingSphere||this.g.computeBoundingSphere()}},bh=new Map;function Cl(i,t=.85){let e=i+":"+t;if(bh.has(e))return bh.get(e);let n=[];for(let s=0;s<=i;s++){let r=new de({vertexColors:!0,roughness:t,metalness:0}),o=i?s/i:0;r.onBeforeCompile=a=>{a.uniforms.uK={value:o},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float fl; uniform float uK; varying vec2 vU; varying float vK;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed += objectNormal * fl * uK + vec3(-.35, -.5, 0.) * fl * uK * uK; vU = uv; vK = uK;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vU; varying float vK;
float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
 if (vK > 0.) { vec2 c = floor(vU * vec2(700., 700.)); float h = h2(c); if (h < vK * 1.05) discard; }
 diffuseColor.rgb *= mix(.55, 1.08, vK) * (.92 + .16 * h2(floor(vU * 90.)));`)},r.customProgramCacheKey=()=>"fur"+i+"_"+s,r.userData.shell=s,n.push(r)}return bh.set(e,n),n}function Ks(i,t,e,n=!0){t.meshes=e.map((s,r)=>{let o=new ft(t.g,s);return o.castShadow=n&&r===0,o.receiveShadow=r===0,o.frustumCulled=!1,o.userData.shell=r,o.userData.shells=e.length-1,i.add(o),o})}function Qs(i,t,e){let n=i.x-t.x,s=i.y-t.y,r=Math.cos(e),o=Math.sin(e);return{...i,x:t.x+n*r-s*o,y:t.y+n*o+s*r}}function wh(i,t,e){let n=[{x:i.x,y:i.y}],s=i.x,r=i.y;return t.forEach((o,a)=>{s+=Math.sin(e[a])*o,r-=Math.cos(e[a])*o,n.push({x:s,y:r})}),n}var no=[.035,.032,.034],mi=[.93,.91,.86];function Pl(i={}){let t=new Gt,e=Cl(i.shells||7),n=Cl(i.shortShells||3),s=new pi(60,26),r=new pi(26,14,4),o=new pi(18,10),a=[new pi(8,8),new pi(8,8)];a[0].side=hn(1,0,0),a[1].side=hn(1,0,0),Ks(t,s,e),Ks(t,r,e),Ks(t,o,e),a.forEach(f=>Ks(t,f,n,!1));let c=new de({color:"#2a1608",roughness:.12,metalness:.1}),l=new de({color:"#111",roughness:.35}),h=[0,1].map(()=>{let f=new ft(new Fe(.013,12,8),c);return t.add(f),f}),u=new ft(new Fe(.021,12,8),l);return u.scale.set(.9,.8,1.15),t.add(u),t.userData={body:s,legs:r,tail:o,ears:a,eyes:h,nose:u,feet:[]},io(t,0,0,0),t}var cd=[[-.37,.5,.02,.02],[-.35,.49,.075,.08],[-.29,.475,.1,.108],[-.18,.46,.088,.092],[-.04,.452,.094,.112],[.1,.44,.108,.142],[.22,.45,.104,.138],[.31,.5,.082,.1],[.38,.585,.066,.075],[.425,.66,.06,.066],[.46,.72,.072,.07],[.52,.74,.078,.068],[.565,.722,.058,.054],[.605,.705,.044,.04],[.64,.698,.03,.028],[.652,.697,.004,.004]],ov=hn(.33,.52),g1=hn(-.26,.46),av=hn(0,.45),lv={x:-.34,y:.1};function io(i,t,e=0,n=0,s=!1,r=0,o={}){let a=i.userData,c=Math.PI*2,l=Math.max(0,Math.min(1,+s||0)),h=1-l,u=o.sit||0,f=o.time||0;s=l>.5;let d=Math.sin(t*c+1.3)*.035*h*(1-e),m=Math.abs(Math.sin(t*c))*.03*(1-e)*h,v=jt(jt(-.25,Math.sin(t*c+2)*.07-.05,1-e)*h+.08*l,-.35,u),g=.62*u,p=n+g,S=B=>{let q=Qs(B,av,n);return q.y+=m-.25*u-.018,u&&(q=Qs(q,lv,g)),q},M=cd.map(([B,q,U,V],F)=>{let Q={x:B,y:q,z:0,rw:U,rh:V};return F<=3&&(Q.x+=d*(1-F/4)*1.2,Q.y+=d*.25),F>=8&&(Q=Qs(Q,ov,v*Math.min(1,(F-7)/3))),S(Q)}),_=Js(M,a.body.n);a.body.update(_,(B,q,U,V)=>{let F=V.k,Q=no,tt=.022;return F>=7.6&&F<=8.6&&(Q=mi,tt=.04),F>5.6&&F<7.6&&q<-.35+(F-5.6)*.25&&(Q=mi,tt=.035),F>6.5&&F<8&&q<.2&&Math.abs(U)<.75&&(Q=mi,tt=.04),F>1.5&&F<5&&q<-.8&&(tt=.03),F>=11.9?(Q=mi,tt=.004):F>=11.3&&(Q=q<.2||Math.abs(U)<.25?mi:no,tt=.005),F>=9.8&&F<11.3&&(tt=.008,q>.45&&Math.abs(U)<.14+(F-9.8)*.06&&(Q=mi),q<-.5&&F>10.6&&(Q=mi)),[...Q,tt]});let b=B=>_[Math.round(B/(cd.length-1)*(a.body.n-1))],E=b(10.5),A=b(12),x=hn(A.x-E.x,A.y-E.y,0).normalize(),w=hn(-x.y,x.x,0);a.eyes.forEach((B,q)=>{let U=q?-1:1;B.position.set(E.x+x.x*.045+w.x*.028,E.y+x.y*.045+w.y*.028,U*.052)});let R=b(14.4);a.nose.position.set(R.x+x.x*.006,R.y+x.y*.006+.004,0),a.ears.forEach((B,q)=>{let U=q?-1:1,V=b(10.2),F=e?.6:.2+Math.sin(t*c)*.1*h,Q={x:V.x-x.x*.01+w.x*.05,y:V.y+w.y*.05},tt=[[0,-.01,.034,.009],[-.01,.02,.032,.008],[-.01,.045,.022,.006],[.008+F*.02,.058,.012,.004],[.026+F*.03,.05-F*.02,.002,.002]].map(([ht,lt,ot,Z])=>({x:Q.x+x.x*ht+w.x*lt,y:Q.y+x.y*ht+w.y*lt,z:U*(.045+lt*.25),rw:ot,rh:Z}));B.update(Js(tt,B.n),()=>[...no,.008])});let P=[.42,.52,0,.1],I=[.16,.205,.075],G=[.19,.2,.13];for(let B=0;B<4;B++){let q=a.legs,U=B<2,V=(B%2?-1:1)*(U?.05:.06),F=(t+P[B])*c,Q=Math.sin(F),tt=Eh(Math.cos(F)),ht;if(U){let dt=.08+.6*Q*h,Lt=-(.08+1.3*tt*h),At=.18-.9*tt*h;dt=jt(dt,1.25,e),Lt=jt(Lt,-2.3,e),At=jt(At,-.9,e),dt=jt(dt,.95,r),Lt=jt(Lt,-.12,r),At=jt(At,.3,r),ht=[dt,dt+Lt,dt+Lt+At],l&&(ht=ht.map((Bt,qt)=>jt(Bt,[.05,-.05,.15][qt],l))),u&&(ht=ht.map((Bt,qt)=>jt(Bt,[.12,.06,.3][qt],u)))}else{let dt=.28+.55*Q*h,Lt=1+.6*tt*h,At=.82+.25*tt*h;dt=jt(dt,-1,e),Lt=jt(Lt,.35,e),At=jt(At,.35,e),dt=jt(dt,.1,r),Lt=jt(Lt,1.5,r),At=jt(At,1.2,r),ht=[dt,dt-Lt,dt-Lt+At],l&&(ht=ht.map((Bt,qt)=>jt(Bt,[.3,-.72,.1][qt],l))),u&&(ht=ht.map((Bt,qt)=>jt(Bt,[1.2,-1.75,1.45][qt],u)))}let lt=U?{x:.25,y:.47}:{x:-.26,y:.47},ot=wh(lt,U?I:G,ht.map(dt=>dt-p)),Z=ot[3],W=ht[2]-p,st;if(U){let dt={x:lt.x+.03,y:lt.y+.12,z:V*.3,rw:.05,rh:.06};st=[dt,{x:jt(ot[0].x,dt.x,.45),y:jt(ot[0].y,dt.y,.45),z:V*.6,rw:.058,rh:.068},{x:ot[0].x,y:ot[0].y,z:V*.85,rw:.046,rh:.058},{x:jt(ot[0].x,ot[1].x,.5),y:jt(ot[0].y,ot[1].y,.5),z:V,rw:.032,rh:.042},{x:ot[1].x,y:ot[1].y,z:V,rw:.025,rh:.03},{x:jt(ot[1].x,ot[2].x,.45),y:jt(ot[1].y,ot[2].y,.45),z:V,rw:.021,rh:.024},{x:ot[2].x,y:ot[2].y,z:V,rw:.019,rh:.021},{x:jt(ot[2].x,ot[3].x,.5),y:jt(ot[2].y,ot[3].y,.5),z:V,rw:.018,rh:.018}]}else st=[{x:lt.x+.02,y:lt.y+.08,z:V*.3,rw:.06,rh:.085},{x:jt(ot[0].x,ot[1].x,.1),y:jt(ot[0].y,ot[1].y,.1),z:V*.72,rw:.062,rh:.1},{x:jt(ot[0].x,ot[1].x,.45),y:jt(ot[0].y,ot[1].y,.45),z:V*.9,rw:.046,rh:.075},{x:ot[1].x,y:ot[1].y,z:V,rw:.03,rh:.038},{x:jt(ot[1].x,ot[2].x,.4),y:jt(ot[1].y,ot[2].y,.4),z:V,rw:.026,rh:.036},{x:ot[2].x,y:ot[2].y,z:V,rw:.019,rh:.024},{x:jt(ot[2].x,ot[3].x,.5),y:jt(ot[2].y,ot[3].y,.5),z:V,rw:.017,rh:.018}];st.push({x:Z.x,y:Z.y,z:V,rw:.019,rh:.018},{x:Z.x+Math.cos(W)*.03,y:Z.y+Math.sin(W)*.03-.005,z:V,rw:.025,rh:.019},{x:Z.x+Math.cos(W)*.052,y:Z.y+Math.sin(W)*.052-.008,z:V,rw:.006,rh:.006});let ut=st.map(S);a.feet[B]=S({x:Z.x+Math.cos(W)*.03,y:Z.y+Math.sin(W)*.03-.024,z:V});let at=U?4.6:4.4;q.update(Js(ut,q.n),(dt,Lt,At,Bt)=>{let qt=Bt.k>at;return[...qt?mi:no,qt?.005:Bt.k<1.5?.022:Bt.k<3?.016:.009]},B)}let N=s?Math.sin(f*8)*.15:Math.sin(t*c)*.12,L=e?.9:jt(.25,-.2,u),O=[[-.35,.5,.035,.035],[-.43,.47,.03,.03],[-.5,.42,.024,.024],[-.55,.36,.018,.018],[-.57,.3,.013,.013],[-.565,.26,.004,.004]].map(([B,q,U,V],F)=>{let Q=Qs({x:B,y:q,z:0,rw:U,rh:V},{x:-.35,y:.5},L*(F/5));return Q.z=Math.sin(F*.6)*N*F*.02,S(Q)});a.tail.update(Js(O,a.tail.n),(B,q,U,V)=>[...V.k>4.1?mi:no,.03+(q<0?.02:0)])}var js=Math.PI*2,Ah=(i,t,e)=>Math.max(t,Math.min(e,i)),Ce=(i,t,e)=>i+(t-i)*e,on=(i,t,e)=>{let n=Ah((e-i)/(t-i),0,1);return n*n*(3-2*n)},An=i=>{let t=new It(i);return[t.r,t.g,t.b]},Il=new D(0,1,0),gi=new D(0,0,1),hd=new D(1,0,0),un=(i,t)=>new Ve().setFromAxisAngle(i,t),Ll=(...i)=>i.reduce((t,e)=>t.multiply(e),new Ve),Xt=(i=0,t=0,e=0)=>new D(i,t,e);function so(i,t){t=(t%1+1)%1;let e=i.length,n=e-1;for(let h=0;h<e;h++)if(i[h][0]>t){n=h-1;break}let s=h=>{let u=(h%e+e)%e;return[i[u][0]+Math.floor(h/e),i[u][1]]},r=s(n-1),o=s(n),a=s(n+1),c=s(n+2),l=(t-o[0])/(a[0]-o[0]);return .5*(2*o[1]+(-r[1]+a[1])*l+(2*r[1]-5*o[1]+4*a[1]-c[1])*l*l+(-r[1]+3*o[1]-3*a[1]+c[1])*l*l*l)}var ss=class{constructor(t,e,n){this.n=t,this.r=e,this.paint=n;let s=t*(e+1),r=new re;this.P=new Float32Array(s*3),this.Nn=new Float32Array(s*3),this.C=new Float32Array(s*3),this.Ce=new Float32Array(t*3),r.setAttribute("position",new ae(this.P,3)),r.setAttribute("normal",new ae(this.Nn,3)),r.setAttribute("color",new ae(this.C,3));let o=[];for(let a=0;a<t-1;a++)for(let c=0;c<e;c++){let l=a*(e+1)+c,h=l+e+1;o.push(l,h,l+1,h,h+1,l+1)}r.setIndex(o),this.g=r,this.painted=!1,this.cs=[];for(let a=0;a<=e;a++){let c=a/e*js;this.cs.push([Math.cos(c),Math.sin(c)])}}update(t){let e=this.n,n=this.r,s=this.P,r=t.length-1,o=Xt(),a=Xt(),c=Xt(),l=Xt(),h=[];for(let p=0;p<e;p++){let S=p/(e-1)*r,M=Math.min(r-1,Math.floor(S)),_=S-M,b=t[Math.max(0,M-1)],E=t[M],A=t[M+1],x=t[Math.min(r,M+2)],w=(P,I,G,N)=>.5*(2*I+(-P+G)*_+(2*P-5*I+4*G-N)*_*_+(-P+3*I-3*G+N)*_*_*_),R=_*_*(3-2*_);h.push({x:w(b.p.x,E.p.x,A.p.x,x.p.x),y:w(b.p.y,E.p.y,A.p.y,x.p.y),z:w(b.p.z,E.p.z,A.p.z,x.p.z),a:E.a.clone().lerp(A.a,R),rw:Ce(E.rw,A.rw,R),rf:Ce(E.rf,A.rf,R),rb:Ce(E.rb,A.rb,R),e:Ce(E.e||2,A.e||2,R),k:S})}for(let p=0;p<e;p++){let S=h[Math.max(0,p-1)],M=h[Math.min(e-1,p+1)],_=h[p];o.set(M.x-S.x,M.y-S.y,M.z-S.z).normalize(),a.copy(_.a).addScaledVector(o,-_.a.dot(o)).normalize(),c.crossVectors(o,a).normalize(),this.Ce[p*3]=_.x,this.Ce[p*3+1]=_.y,this.Ce[p*3+2]=_.z;let b=2/_.e;for(let E=0;E<=n;E++){let[A,x]=this.cs[E],w=Math.sign(A)*Math.pow(Math.abs(A),b),R=Math.sign(x)*Math.pow(Math.abs(x),b);l.set(_.x,_.y,_.z).addScaledVector(c,w*(A>0?_.rf:_.rb)).addScaledVector(a,R*_.rw);let P=(p*(n+1)+E)*3;if(s[P]=l.x,s[P+1]=l.y,s[P+2]=l.z,!this.painted){let I=this.paint(_.k,A,x,p);this.C[P]=I[0],this.C[P+1]=I[1],this.C[P+2]=I[2]}}}let u=this.Nn,f=Xt(),d=Xt(),m=Xt(),v=Xt(),g=(p,S)=>(p*(n+1)+S)*3;for(let p=0;p<e;p++)for(let S=0;S<=n;S++){let M=Math.max(0,p-1),_=Math.min(e-1,p+1),b=(S+n-1)%n,E=(S+1)%n,A=g(M,S),x=g(_,S),w=g(p,b),R=g(p,E);f.set(s[x]-s[A],s[x+1]-s[A+1],s[x+2]-s[A+2]),d.set(s[R]-s[w],s[R+1]-s[w+1],s[R+2]-s[w+2]),m.crossVectors(d,f);let P=g(p,S);v.set(s[P]-this.Ce[p*3],s[P+1]-this.Ce[p*3+1],s[P+2]-this.Ce[p*3+2]),m.lengthSq()<1e-14&&m.copy(v),p===0||p===e-1?(o.set(this.Ce[_*3]-this.Ce[M*3],this.Ce[_*3+1]-this.Ce[M*3+1],this.Ce[_*3+2]-this.Ce[M*3+2]).normalize(),m.copy(o).multiplyScalar(p?1:-1)):m.dot(v)<0&&m.negate(),m.normalize(),u[P]=m.x,u[P+1]=m.y,u[P+2]=m.z}this.painted||(this.painted=!0,this.g.attributes.color.needsUpdate=!0),this.g.attributes.position.needsUpdate=!0,this.g.attributes.normal.needsUpdate=!0,this.g.computeBoundingSphere()}},le=(i,t,e,n=e,s=n,r=2)=>({p:i,a:t,rw:e,rf:n,rb:s,e:r}),Ne={skin:An("#d9a07f"),skinD:An("#c48466"),shirt:An("#2f7fd0"),shirtD:An("#2468ad"),trim:An("#c6f432"),legs:An("#23262e"),legsS:An("#3a3f4a"),shoe:An("#f2f2ee"),shoeC:An("#ff6a3d"),sole:An("#3a3a3c"),hair:"#5a3620",band:"#c6f432"};function ud(i,t){let e=i.attributes.position,n=Xt();for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n),e.setXYZ(s,n.x,n.y,n.z);return i.computeVertexNormals(),i}var Dl=(i,t,e,n)=>Math.exp(-(i*i)/(e*e)-t*t/(n*n));function fd(i){let{x:t,y:e,z:n}=i;if(e<0){let l=Math.hypot(t,n)||1,h=Math.pow(1-Math.pow(-e,2.6),1/2.6);t*=h/l,n*=h/l}let s=on(-.05,-.95,e),r=t<0,o=t*.1,a=e*(e>0?.118:.112),c=n*.079;r?o*=1+.08*(1-Math.abs(e))-.45*s:o*=1-.1*s,c*=1-.3*Math.pow(s,1.3),t>0&&(o=Math.min(o,.09+.006*e));for(let l of[-1,1])o-=.007*Dl(e-.1,n-l*.36,.13,.15)*on(.4,.8,t);o+=.004*Dl(e-.27,n,.08,.5)*on(.5,.8,t),o+=.006*Dl(e+.62,n,.18,.3)*on(.3,.7,t),a-=.012*s*s,c*=1+.06*Dl(e+.15,t-.45,.25,.3),i.set(o,a,c)}function pd(i){let t=[],e=[],n=[],s=[],r=new ie,o=new kt,a=new Ve,c=new ln,l=Xt(),h=0;for(let[f,d,m,v,g]of i){r.compose(Xt(...m),a.setFromEuler(c.set(...g||[0,0,0])),Xt(...v)),o.getNormalMatrix(r);let p=f.attributes.position,S=f.attributes.normal,M=An(d);for(let b=0;b<p.count;b++)l.fromBufferAttribute(p,b).applyMatrix4(r),t.push(l.x,l.y,l.z),l.fromBufferAttribute(S,b).applyMatrix3(o).normalize(),e.push(l.x,l.y,l.z),n.push(M[0],M[1],M[2]);let _=f.index.array;for(let b=0;b<_.length;b++)s.push(_[b]+h);h+=p.count}let u=new re;return u.setAttribute("position",new Vt(t,3)),u.setAttribute("normal",new Vt(e,3)),u.setAttribute("color",new Vt(n,3)),u.setIndex(s),u}var Nl="#d9a07f";function cv(){let i=[.02,.088,0],t=ud(new Fe(1,24,18),fd),e=ud(new Fe(1,24,18),l=>{let h=l.x,u=l.y;fd(l);let f=h>0?Ce(.05,.5,on(.1,.6,h)):Ce(.05,-.55,on(-.05,-.6,h));l.multiplyScalar(Ce(.9,1.065+.045*on(.3,1,u)-.02*on(.2,.9,h),on(f-.2,f+.06,u)))}),n=new Fe(1,8,6),s=new Fe(1,7,5),r=(l,h,u)=>[i[0]+l,i[1]+h,i[2]+u],o=[[t,Nl,i,[1,1,1]],[e,Ne.hair,i,[1,1,1]]];for(let l of[-1,1])o.push([s,"#f4efe8",r(.079,.012,l*.031),[.008,.0095,.014]],[s,"#2a1a12",r(.0865,.012,l*.031),[.003,.0085,.0085]],[s,Ne.hair,r(.087,.036,l*.033),[.005,.005,.018],[l*.15,0,0]],[n,Nl,r(-.004,-.004,l*.079),[.016,.032,.01],[0,0,.15]]);o.push([n,Nl,r(.088,-.008,0),[.016,.03,.011],[0,0,-.3]],[s,"#b8615a",r(.083,-.052,0),[.008,.005,.019]],[new Qn(.017,.007,5,10),Ne.band,r(-.1,.045,0),[1,1,1],[0,Math.PI/2,-.9]]);let a=new ft(pd(o),new de({vertexColors:!0,roughness:.62})),c=new Gt;return c.add(a),c}function hv(){let i=new de({vertexColors:!0,roughness:.6}),t=new Fe(1,7,6),e=r=>{let o=new ft(pd(r.map(([a,c,l,h,u,f,d])=>[t,Nl,[a,c,l],[h,u,f],[0,0,d||0]])),i);return o.castShadow=!0,o},n=()=>e([[.004,-.045,0,.036,.045,.026],[.022,-.06,0,.022,.03,.027],[.018,-.03,0,.012,.022,.012,.5]]),s=()=>e([[0,-.045,0,.036,.05,.014],[.002,-.11,0,.03,.05,.011],[.03,-.04,0,.01,.03,.01,-.6]]);return[0,1].map(()=>({fist:n(),open:s()}))}function uv(){let i=new ss(11,10,(e,n)=>n<-.35?Ne.sole:n<-.1?Ne.shoe:e>1.4&&e<3.5&&n>.2&&n<.75?Ne.shoeC:Ne.shoe),t=Xt(0,0,-1);return i.update([le(Xt(-.07,-.035,0),t,.012,.012,.012),le(Xt(-.058,-.035,0),t,.036,.035,.04,2.6),le(Xt(-.01,-.035,0),t,.043,.042,.042,2.8),le(Xt(.06,-.047,0),t,.048,.03,.03,2.8),le(Xt(.12,-.052,0),t,.049,.023,.025,2.8),le(Xt(.17,-.052,0),t,.04,.018,.023,2.4),le(Xt(.196,-.05,0),t,.02,.01,.018),le(Xt(.203,-.049,0),t,.004,.004,.005)]),i.g}var Th=.885,fv=.42,dv=.41,pv=.29,mv=.25,gv=.085,xv=.158,_v=1.39,Rh=[[.775,0,.03,.03,.03,2],[.795,0,.105,.07,.085,2.2],[.835,-.004,.152,.09,.112,2.4],[.895,-.006,.168,.092,.122,2.6],[.965,0,.16,.09,.105,2.6],[1.03,.006,.138,.084,.086,2.5],[1.085,.01,.124,.078,.078,2.4],[1.15,.012,.13,.082,.082,2.4],[1.22,.014,.142,.1,.086,2.5],[1.285,.01,.152,.098,.09,2.6],[1.345,.002,.16,.082,.09,2.7],[1.39,-.008,.15,.066,.078,2.8],[1.425,-.01,.09,.056,.064,2.3],[1.455,0,.052,.05,.052,2],[1.51,.012,.047,.047,.047,2],[1.56,.02,.04,.04,.04,2]],vv=[[0,.42],[.12,.12],[.3,-.3],[.4,-.42],[.52,-.25],[.66,.22],[.8,.66],[.9,.62]],yv=[[0,.28],[.13,.62],[.3,.38],[.42,.7],[.56,1.75],[.66,2],[.8,1.05],[.92,.32]],Mv=[[0,.02],[.13,.45],[.3,.45],[.4,.12],[.55,-.28],[.7,-.1],[.85,.15],[.95,.1]],dd=[[0,0],[.2,.004],[.35,.01],[.45,.045],[.5,.05],[.55,.04],[.7,.008],[.85,0]];function md(i={}){let t=new Gt,e=new de({vertexColors:!0,roughness:.78}),n=new de({vertexColors:!0,roughness:.6}),s=new de({color:Ne.hair,roughness:.78}),r=new ss(30,18,(m,v,g)=>{let p=Rh[Math.min(Rh.length-1,Math.round(m))][0]+(m-Math.round(m))*.05;return p>1.448-.03*on(.6,1,v)?Ne.skin:p>1.43-.03*on(.6,1,v)?Ne.shirtD:p>.985?Math.abs(g)>.93?Ne.shirtD:Ne.shirt:p>.955?Ne.trim:Ne.legs}),o=[0,1].map(()=>new ss(22,12,(m,v,g)=>m>8.2?Ne.skin:Ne.legs)),a=[0,1].map(()=>new ss(20,10,(m,v)=>m<2.1?m>1.8?Ne.shirtD:Ne.shirt:Ne.skin)),c=new ss(10,8,()=>An(Ne.hair)),l=(m,v)=>{let g=new ft(m,v);return g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1,t.add(g),g};l(r.g,e),o.forEach(m=>l(m.g,e)),a.forEach(m=>l(m.g,e)),l(c.g,s);let h=cv();h.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),t.add(h);let u=hv();u.forEach(m=>{t.add(m.fist),t.add(m.open)});let f=uv(),d=[0,1].map(()=>{let m=new ft(f,n);return m.castShadow=!0,t.add(m),m});return t.userData.hd={torso:r,legs:o,arms:a,pony:c,head:h,hands:u,shoes:d},Ul(t,{speed:0,still:!0}),t}function Ch(i,t){let e=i.userData.hd;!e||!e.last||!t||Ul(i,{...e.last,look:(e.last.look||0)+t})}function Ul(i,t={}){let e=i.userData.hd,n=!!t.still;e.last=t;let s=t.speed==null?1:+t.speed;s>1.2&&(s=s/4),s=n?0:Ah(s,0,1);let r=Math.pow(Math.min(1,s/.45),.7),o=n?0:t.phase||0,a=Ah(t.point||0,0,1),c=(t.pointSide==null?1:t.pointSide)>=0?-1:1,l=on(0,1,a),h=[0,1].map(U=>{let V=U?1:-1,F=o+(U?.5:0),Q=Ce(.02,so(vv,F),r),tt=Ce(.07,so(yv,F)*Ce(.55,1,r),r),ht=Ce(.05,so(Mv,F),r);return{zs:V,p:F,th:Q,kn:tt,an:ht}}),u=.17*r*(h[1].th-h[0].th)/1.1,f=Ce(.035,.2,r)+.04*r*Math.sin(o*js*2),d=-c*.22*l,m=-.9*u+d,v=un(Il,u),g=0;h.forEach(U=>{let V=Ce(.035,-.015,r);U.hip=Xt(0,0,U.zs*gv).applyQuaternion(v),U.qT=Ll(v.clone(),un(hd,-U.zs*V),un(gi,U.th)),U.knee=U.hip.clone().add(Xt(0,-fv,0).applyQuaternion(U.qT)),U.qS=U.qT.clone().multiply(un(gi,-U.kn)),U.ank=U.knee.clone().add(Xt(0,-dv,0).applyQuaternion(U.qS)),U.qF=U.qS.clone().multiply(un(gi,U.an));let F=Math.min(...[[-.065,-.075],[.05,-.078],[.17,-.072],[.2,-.06]].map(([Q,tt])=>U.ank.y+Xt(Q,tt,0).applyQuaternion(U.qF).y));U.lo=F});let p=r*(so(dd,o)+so(dd,o+.5))*1.2,S=-Math.min(h[0].lo,h[1].lo)+p,M=Xt(0,S,0),_=U=>Ll(un(Il,Ce(u,m,on(.95,1.38,U))),un(gi,-f*(.35+.65*on(.9,1.3,U)))),b=Rh.map(([U,V,F,Q,tt,ht])=>{let lt=_(U),ot=U>1.15&&U<1.36?1+.012*Math.sin(o*js*2)*r:1;return le(Xt(V,U-Th,0).applyQuaternion(lt).add(M),gi.clone().applyQuaternion(lt),F,Q*ot,tt,ht)});e.torso.update(b);let E=_(1.4);h.forEach((U,V)=>{let F=Xt(0,0,-1),Q=F.clone().applyQuaternion(U.qT),tt=F.clone().applyQuaternion(U.qS),ht=U.hip.clone().add(M),lt=U.knee.clone().add(M),ot=U.ank.clone().add(M),Z=(st,ut,at)=>st.clone().lerp(ut,at),W=ht.clone().add(Xt(-.01,.07,-U.zs*.02));e.legs[V].update([le(W,Q,.07,.06,.07),le(ht,Q,.09,.085,.1),le(Z(ht,lt,.3),Q,.08,.078,.08),le(Z(ht,lt,.72),Q,.062,.064,.058),le(lt.clone().add(Xt(.012,0,0).applyQuaternion(U.qS)),tt,.05,.05,.046),le(Z(lt,ot,.22),tt,.05,.042,.062),le(Z(lt,ot,.45),tt,.045,.038,.052),le(Z(lt,ot,.75),tt,.033,.032,.034),le(ot,tt,.029,.029,.03),le(ot.clone().add(Xt(0,-.03,0).applyQuaternion(U.qS)),tt,.028,.028,.028)]),e.shoes[V].position.copy(ot),e.shoes[V].quaternion.copy(U.qF)});let A=[h[1].th,h[0].th],x=[];[0,1].forEach(U=>{let V=U?1:-1,F=V===c?l:0,Q=A[U],tt=Ce(.05,.06+.95*(Q-.12),r),ht=Ce(.1,.2,r),lt=Ce(.25,.5,r),ot=Ce(.22,1.35+.45*on(-.3,.6,Q),r);tt=Ce(tt,1.42,F),ht=Ce(ht,.85,F),lt=Ce(lt,-.1,F),ot=Ce(ot,.12,F);let Z=Xt(-.005,_v-Th+.015*F,V*xv).applyQuaternion(E).add(M),W=Ll(E.clone(),un(gi,tt),un(hd,-V*ht),un(Il,V*lt)),st=Z.clone().add(Xt(0,-pv,0).applyQuaternion(W)),ut=W.clone().multiply(un(gi,ot)),at=st.clone().add(Xt(0,-mv,0).applyQuaternion(ut)),dt=Xt(0,0,-1),Lt=dt.clone().applyQuaternion(W),At=dt.clone().applyQuaternion(ut),Bt=(pe,Ue,me)=>pe.clone().lerp(Ue,me),qt=Z.clone().add(Xt(0,.03,0).applyQuaternion(W));e.arms[U].update([le(Z.clone().add(Xt(0,.055,0).applyQuaternion(W)),Lt,.006,.006,.006),le(qt,Lt,.038,.038,.038),le(Z,Lt,.048,.046,.046),le(Bt(Z,st,.33),Lt,.046,.046,.046),le(Bt(Z,st,.5),Lt,.043,.044,.045),le(Bt(Z,st,.8),Lt,.035,.036,.036),le(st,Lt,.032,.03,.034),le(Bt(st,at,.25),At,.036,.035,.033),le(Bt(st,at,.7),At,.027,.024,.025),le(at,At,.022,.017,.017),le(at.clone().add(Xt(0,-.02,0).applyQuaternion(ut)),At,.019,.015,.015)]);let Wt=ut.clone().multiply(un(gi,F?-.1:.15)),ne=e.hands[U];ne.fist.visible=F<.5,ne.open.visible=F>=.5;for(let pe of[ne.fist,ne.open])pe.position.copy(at),pe.quaternion.copy(Wt),V<0&&pe.scale.set(1,1,-1);x.push(at)});let w=Xt(.014,1.5-Th,0).applyQuaternion(E).add(M),R=(t.look||0)+-c*.5*l,P=Ll(un(Il,m*.4+R-d*.4),un(gi,-f*.1+.04*r*Math.sin(o*js*2+1)));e.head.position.copy(w),e.head.quaternion.copy(P);let I=Xt(-.098,.135,0).applyQuaternion(P).add(w),G=.045*r*Math.sin(o*js+.6),N=.035*r*Math.sin(o*js*2+2.2),L=Xt(0,0,1),O=Xt(-1,0,0).applyQuaternion(P);O.y=0,O.normalize();let B=Xt(-O.z,0,O.x),q=[];for(let U=0;U<=5;U++){let V=U/5,F=.035*V*(1+1.6*r)+.018*Math.sin(V*2.2),Q=.2*V*(1-.35*r)-N*V*V,tt=I.clone().addScaledVector(O,F).addScaledVector(B,G*V*V);tt.y-=Q,q.push(le(tt,L,[.018,.028,.031,.027,.018,.003][U],[.02,.032,.036,.03,.02,.003][U]))}return e.pony.update(q),i}function xd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new re,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=gd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let m=gd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function gd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ae(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let v=h.getComponent(f,m);a.setComponent(f+u,m,v)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Rn={low:{grass:0,shells:3,shortShells:2,shadow:1024,dpr:1,soft:!1,trees:22},mid:{grass:25e3,shells:6,shortShells:3,shadow:2048,dpr:1.5,soft:!0,trees:40},high:{grass:7e4,shells:10,shortShells:4,shadow:2048,dpr:2,soft:!0,trees:60}};function Fl(){let i=window.devicePixelRatio||1,t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4,n=i*i*(screen.width||400)*(screen.height||800);return t<=4||e<=2||n>32e5&&t<=6?"low":t>=8&&e>=8&&i<=2&&!/Android|iPhone|iPad/i.test(navigator.userAgent)?"high":"mid"}var Ph=7,be=()=>(Ph=Ph*16807%2147483647)/2147483647,fn=(i,t=.6,e=0)=>new de({color:i,roughness:t,metalness:e}),dn=(i,t=!0)=>i.traverse(e=>{e.isMesh&&(e.castShadow=t,e.receiveShadow=!0)});function Gn(i){i.updateMatrixWorld(!0);let t=new Map;i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh)return;let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();Object.keys(s.attributes).forEach(o=>{o!=="position"&&o!=="normal"&&o!=="uv"&&s.deleteAttribute(o)}),s.attributes.uv||s.setAttribute("uv",new ae(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n.matrixWorld),t.has(n.material)||t.set(n.material,{gs:[],cast:!1,recv:!1});let r=t.get(n.material);r.gs.push(s),r.cast=r.cast||n.castShadow,r.recv=r.recv||n.receiveShadow});let e=new Gt;return t.forEach((n,s)=>{let r=new ft(xd(n.gs),s);r.castShadow=n.cast,r.receiveShadow=n.recv,e.add(r),n.gs.forEach(o=>o.dispose())}),e}function ro(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new di(n);return s.colorSpace=Re,s}function Sv(i){let t=ro(i,i,(e,n)=>{e.fillStyle="#4b7a33",e.fillRect(0,0,n,n);let s=i*i/11;for(let r=0;r<s;r++){let o=95+be()*70|0;e.fillStyle=`rgba(${45+be()*40|0},${o+25},${28+be()*25|0},${.2+be()*.35})`,e.fillRect(be()*n,be()*n,1.3,3+be()*5)}});return t.wrapS=t.wrapT=Yn,t.repeat.set(55,55),t.anisotropy=8,t}function bv(i,t,e,n,s){let r=new re;r.setAttribute("position",new ae(new Float32Array([-.0035,0,0,.0035,0,0,.001,1,0,-.001,1,0,0,1.25,0]),3)),r.setIndex([0,1,2,0,2,3,3,2,4]),r.computeVertexNormals();let o=new de({color:"#ffffff",roughness:.95,side:We});o.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying float vH;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 float hh = position.y; transformed.x += hh * hh * .006 * sin(instanceMatrix[3].x * 1.7 + instanceMatrix[3].z * 2.3); vH = hh;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0., 1., 0.);"),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying float vH;`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(.7, 1.05, clamp(vH, 0., 1.));`)};let a=new Kn(r,o,s),c=new Se,l=new It;for(let h=0;h<s;h++){let u=be(),f=t-n/2+n*Math.sqrt(u);c.position.set(i+(be()-.5)*e,0,f),c.rotation.y=be()*Math.PI;let d=.045+be()*.06;c.scale.set(1+be(),d,1),c.updateMatrix(),a.setMatrixAt(h,c.matrix),l.setHSL(.25+be()*.05,.45+be()*.15,.2+be()*.1),a.setColorAt(h,l)}return a.receiveShadow=!0,a.frustumCulled=!1,a}function Ev(i,t,e){let n=new Gt,s=new ft(new sn(.18,.3,i*.55,7),e);s.position.y=i*.27,n.add(s);for(let r=0;r<6;r++){let o=new Fr(i*(.18+be()*.12),2),a=o.attributes.position,c=be()*10;for(let h=0;h<a.count;h++){let u=a.getX(h),f=a.getY(h),d=a.getZ(h),m=Math.hypot(u,f,d)||1,v=1+.1*Math.sin(u/m*5+c)*Math.sin(f/m*4+c*1.3)+.06*Math.sin(d/m*7+c);a.setXYZ(h,u*v,f*v,d*v)}o.computeVertexNormals();let l=new ft(o,t[r%t.length]);l.position.set((be()-.5)*i*.35,i*(.55+be()*.35),(be()-.5)*i*.3),n.add(l)}return n}function Bl(i,t,e){let n=Rn[t]||Rn.mid;Ph=7;let s=new $s({canvas:i,antialias:t!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!1});s.setPixelRatio(Math.min(window.devicePixelRatio||1,n.dpr)),s.shadowMap.enabled=!0,s.shadowMap.type=ji,s.toneMapping=Vr,s.toneMappingExposure=1.1,s.outputColorSpace=Re;let r=new fi,o=(e.x0+e.x1)/2,a=(e.z0+e.z1)/2,c=new rn({side:Be,depthWrite:!1,fog:!1,uniforms:{top:{value:new It("#3f7fd0")},mid:{value:new It("#a9cdef")},hor:{value:new It("#f3e6cf")}},vertexShader:"varying vec3 p; void main(){ p=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 top,mid,hor; varying vec3 p; void main(){ float h=max(p.y,0.); vec3 c=mix(hor,mid,smoothstep(0.,.12,h)); c=mix(c,top,smoothstep(.12,.7,h)); float sun=pow(max(dot(normalize(p),normalize(vec3(-.55,.35,-.75))),0.),64.); c+=vec3(1.,.9,.7)*sun*.6; gl_FragColor=vec4(c,1.); }"}),l=new ft(new Fe(300,32,16),c);l.position.set(o,0,a),r.add(l),r.fog=new Er("#dfe4dc",35,170),r.add(new Qi("#d6e9ff","#4d6b30",1));let h=new Di("#ffe9c9",3);h.castShadow=!0,h.shadow.mapSize.set(n.shadow,n.shadow),h.shadow.bias=-3e-4,h.shadow.normalBias=.015,h.shadow.radius=3;let u=(e.x1-e.x0)/2+2,f=(e.z1-e.z0)/2+2;h.position.set(o-11,17,a+7),h.target.position.set(o,0,a);let d=Math.max(u,f)*1.15;Object.assign(h.shadow.camera,{left:-d,right:d,top:d*.8,bottom:-d*.8,near:1,far:70}),h.shadow.camera.updateProjectionMatrix(),r.add(h,h.target);let m=new Di("#bcd4ff",.6);m.position.set(o+10,5,a-10),r.add(m);let v=new ft(new _n(400,400).rotateX(-Math.PI/2),new de({map:Sv(t==="low"?512:1024),roughness:1}));v.position.set(o,0,a),v.receiveShadow=!0,r.add(v);let g=null;n.grass&&(g=bv(o,a+1,e.x1-e.x0+10,e.z1-e.z0+9,n.grass),r.add(g));let p=e.z0-7,S=fn("#f4f4f0",.6),M=fn("#1f6b45",.8),_=[fn("#c6f432",.7),fn("#ffffff",.7),fn("#1f6b45",.7)],b=new $t(.07,1,.07),E=new Kn(b,S,33),A=new Se;for(let O=0;O<33;O++)A.position.set(o-40+O*2.5,.5,p),A.updateMatrix(),E.setMatrixAt(O,A.matrix);r.add(E);let x=new ft(new $t(81,.6,.03),M);x.position.set(o,.55,p),r.add(x);let w=new Gt;for(let O=0;O<12;O++){let B=new ft(new $t(3.2,.6,.035),_[O%3]);B.position.set(o-30+O*5.4,.55,p+.03),w.add(B)}r.add(Gn(w));let R=[fn("#2f5327",1),fn("#3a6130",1),fn("#284a22",1)],P=fn("#4d3a2a",1),I=[0,1,2,3].map(()=>Ev(9+be()*3,R,P)),G=new Gt;for(let O=0;O<n.trees;O++){let B=I[O%4].clone(),q=280/n.trees;B.scale.setScalar(.75+be()*.5),B.position.set(o-140+O*q+(be()-.5)*3,0,p-26-be()*25),B.rotation.y=be()*6,G.add(B)}r.add(Gn(G));let N=new Fe(60,20,10),L=fn("#6f8f5a",1);for(let O=0;O<6;O++){let B=new ft(N,L);B.scale.set(1.6,.22,1),B.position.set(o-200+O*80,-4,p-125-be()*30),r.add(B)}return{R:s,scene:r,sun:h,grass:g,Q:n,tier:t,setTier(O){let B=Rn[O];B&&(this.tier=O,this.Q=B,s.setPixelRatio(Math.min(window.devicePixelRatio||1,B.dpr)),g&&(g.visible=B.grass>0),h.shadow.mapSize.x!==B.shadow&&(h.shadow.mapSize.set(B.shadow,B.shadow),h.shadow.map&&(h.shadow.map.dispose(),h.shadow.map=null)))}}}var Gl={};ap(Gl,{aframe:()=>Uh,dogwalk:()=>Fh,jump:()=>kl,longjump:()=>zh,numSign:()=>Hh,oxer:()=>Lh,seesaw:()=>Bh,stripedBar:()=>Hl,tire:()=>Oh,tunnel:()=>Dh,wall:()=>Ih,weave:()=>Nh});var wv="#f2c230",_d={},Ee=(i,t=.6,e=0)=>_d[i+t+e]||(_d[i+t+e]=fn(i,t,e)),Ol={};function Hl(i,t,e,n,s=8){let r=e+n+s,o=Ol[r]||(Ol[r]=ro(512,8,c=>{for(let l=0;l<s;l++)c.fillStyle=l%2?n:e,c.fillRect(l*512/s,0,512/s,8)})),a=new ft(new sn(t,t,i,16),Ol[r+"m"]||(Ol[r+"m"]=new de({map:o,roughness:.35})));return a.geometry.rotateZ(Math.PI/2),a}function vd(i){let t=ro(128,128,(e,n)=>{e.fillStyle=i,e.fillRect(0,0,n,n);for(let s=0;s<1400;s++){let r=Math.random();e.fillStyle=r<.5?"rgba(0,0,0,.14)":"rgba(255,255,255,.12)",e.fillRect(Math.random()*n,Math.random()*n,1.5,1.5)}});return t.wrapS=t.wrapT=Yn,t}function zl(i,t,e,n,s,r){let o=new Gt,a=vd(n);a.repeat.set(i*2,t*2);let c=new ft(new $t(i,e,t),new de({map:a,roughness:.9}));c.position.set(i/2,-e/2,0),o.add(c);let l=vd(wv);return(r||[]).forEach((h,u)=>{if(!h)return;let f=l.clone();f.needsUpdate=!0,f.repeat.set(h*2,t*2);let d=new ft(new $t(h,e+.004,t+.004),new de({map:f,roughness:.9}));d.position.set(u?i-h/2:h/2,-e/2,0),o.add(d)}),o}function kl(i={}){let t=i.h!=null?i.h:.55,e=i.width||1.3,n=new Gt,s=Ee("#f5f5f2",.45),r=Ee(i.c1||"#1f6b45",.55),o=Ee(i.c2||"#c6f432",.55);for(let l of[-1,1]){let h=new Gt,u=(g,p)=>{let S=new ft(new $t(.055,p,.055),s);S.position.set(g,p/2,0),h.add(S)};u(0,1.2),u(l*.55,.85);let f=new ft(new $t(.66,.05,.05),s);f.position.set(l*.28,1.03,0),f.rotation.z=l*-.6,h.add(f);for(let g=0;g<4;g++){let p=new ft(new $t(.5,.075,.03),g%2?o:r);p.position.set(l*.275,.16+g*.18,0),h.add(p)}let d=new ft(new $t(.06,.05,.55),s);d.position.y=.025,h.add(d);let m=d.clone();m.position.x=l*.55,h.add(m);let v=new ft(new $t(.06,.03,.06),Ee("#333",.5));v.position.set(-l*.045,t-.035,0),h.add(v),h.position.x=l*(e/2+.03),n.add(h)}n.rotation.y=Math.PI/2,dn(n);let a=new Gt;a.add(Gn(n));let c=Hl(e-.02,.02,"#ffffff","#d23a2e",10);return c.position.y=t,c.rotation.y=Math.PI/2,a.add(c),dn(c),a.userData={h:t,bar:c,width:e},a}function Ih(i={}){let t=i.h!=null?i.h:.55,e=i.width||1.3,n=new Gt,s=Ee(i.color||"#b0533c",.8),r=Ee("#f5f5f2",.45),o=Ee("#e8e3d6",.6),a=new ft(new $t(.22,t-.08,e),s);a.position.y=(t-.08)/2,n.add(a);for(let l=0;l<4;l++){let h=new ft(new $t(.24,.08,e/4-.01),o);h.position.set(0,t-.04,-e/2+e/8+l*e/4),n.add(h)}for(let l of[-1,1]){let h=new ft(new $t(.3,1,.3),r);h.position.set(0,.5,l*(e/2+.15)),n.add(h)}dn(n);let c=Gn(n);return c.userData={h:t,width:e},c}function Lh(i={}){let t=i.h!=null?i.h:.55,e=i.depth||.35,n=kl(Object.assign({},i,{h:Math.max(.1,t-.1)})),s=n.userData.width,r=Hl(s-.02,.02,"#ffffff","#1f6b45",10);r.position.set(e,t,0),r.rotation.y=Math.PI/2,n.add(r),dn(r);for(let o of[-1,1]){let a=new ft(new $t(.055,1,.055),Ee("#f5f5f2",.45));a.position.set(e,.5,o*(s/2+.03)),n.add(a),dn(a)}return n}function Dh(i={}){let t=i.r||.3,e=(i.points||[[-2,0],[2,0]]).map(p=>new D(p[0],t,p[1])),n=new Ci(e,!1,"centripetal"),s=new Gt,r=n.getLength(),o=Math.max(40,Math.round(r*16)),a=i.color||"#2f6fd0",c=new Ki(n,o,t,28,!1),l=c.attributes.position;for(let p=0;p<=o;p++){let S=p/o,M=n.getPointAt(S),_=1-.045*Math.pow(Math.abs(Math.sin(S*r/.25*Math.PI)),.6);for(let b=0;b<=28;b++){let E=p*29+b,A=l.getX(E)-M.x,x=l.getY(E)-M.y,w=l.getZ(E)-M.z;l.setXYZ(E,M.x+A*_,Math.max(.005,M.y+x*_),M.z+w*_)}}c.computeVertexNormals();let h=new de({color:a,roughness:.6,side:We});s.add(new ft(c,h));let u=Ee(i.rib||"#1c4fa0",.5),f=Math.round(r/.25),d=new Qn(t+.004,.01,5,28),m=new Gt;for(let p=0;p<=f;p++){let S=p/f,M=n.getPointAt(S),_=n.getTangentAt(S),b=new ft(d,u);b.position.copy(M),b.lookAt(M.clone().add(_)),m.add(b)}s.add(Gn(m));let v=new $i(.09,.5,4,8).rotateZ(Math.PI/2),g=Ee("#303a44",.9);return[.25,.75].forEach(p=>{let S=n.getPointAt(p),M=n.getTangentAt(p),_=new ft(v,g);_.position.set(S.x,t*2+.05,S.z),_.rotation.y=Math.atan2(-M.z,M.x)+Math.PI/2,_.scale.set(1,.7,1),s.add(_)}),dn(s),s.userData={curve:n,r:t,length:r},s}function Nh(i={}){let t=i.n||12,e=i.spacing||.6,n=new Gt,s=new ft(new $t((t-1)*e+.3,.025,.06),Ee("#c9ced3",.35,.6));s.position.set((t-1)*e/2,.0125,0),n.add(s);for(let r=0;r<t;r++){let o=Hl(1.1,.024,"#ffffff",r%2?"#e0392b":"#1f8a55",8);o.rotation.z=Math.PI/2,o.position.set(r*e,.56,0),n.add(o);let a=new ft(new $t(.05,.025,.5),Ee("#c9ced3",.35,.6));a.position.set(r*e,.0125,0),r%3===0&&n.add(a)}return dn(n),n=Gn(n),n.userData={n:t,spacing:e,poles:[...Array(t).keys()].map(r=>r*e)},n}function Uh(i={}){let n=Math.asin(.6296296296296295),s=2.7*Math.cos(n),r=.95,o=.05,a=1.06,c=new Gt;for(let d of[-1,1]){let m=zl(2.7,r,o,i.color||"#2d5fa8",!0,[a,0]);m.position.set(d*s,0,0),m.rotation.set(0,d<0?0:Math.PI,n),c.add(m)}let l=new ft(new sn(.03,.03,r,10).rotateX(Math.PI/2),Ee("#8a9097",.4,.6));l.position.y=1.7-.01,c.add(l);let h=new ft(new $t(s*1.6,.015,.015),Ee("#555",.5,.6));h.position.set(0,.45,-.42),c.add(h);let u=h.clone();u.position.z=.42,c.add(u),dn(c),c=Gn(c);let f=d=>Math.abs(d)>=s?0:1.7*(1-Math.abs(d)/s);return c.userData={L:2.7,top:1.7,ang:n,half:s,zone:a*Math.cos(n),surf:f},c}function Fh(i={}){let r=Math.asin(.33783783783783783),o=3.7*Math.cos(r),a=.9,c=new Gt,l=i.color||"#b8342c",h=zl(3.7,.3,.05,l,!0,[]);h.position.set(-3.7/2,1.25,0),c.add(h);for(let f of[-1,1]){let d=zl(3.7,.3,.05,l,!0,[a,0]);d.position.set(f*(3.7/2+o),0,0),d.rotation.set(0,f<0?0:Math.PI,r),c.add(d);let m=new Gt,v=Ee("#8a9097",.45,.5);for(let S of[-.28,.28]){let M=new ft(new $t(.04,1.25,.04),v);M.position.set(0,1.25/2-.03,S),M.rotation.x=S>0?-.2:.2,m.add(M)}let g=new ft(new $t(.05,.05,.42),v);g.position.y=1.25-.08,m.add(g);let p=new ft(new $t(.03,.03,.6),v);p.position.y=.3,m.add(p),m.position.x=f*(3.7/2-.12),c.add(m)}dn(c),c=Gn(c);let u=f=>{let d=Math.abs(f);return d<=3.7/2?1.25:d>=3.7/2+o?0:1.25*(1-(d-3.7/2)/o)};return c.userData={L:3.7,H:1.25,ang:r,half:o,zone:a*Math.cos(r),total:3.7/2+o,surf:u},c}function Bh(i={}){let r=new Gt,o=Math.asin((.6-.05/2)/(3.7/2)),a=new Gt;a.position.y=.6,r.add(a);let c=zl(3.7,.3,.05,i.color||"#2d5fa8",!0,[.9,.9]);c.position.set(-3.7/2,.05,0),a.add(c);let l=Ee("#8a9097",.45,.5);for(let m of[-.24,.24])for(let v of[-1,1]){let g=new ft(new $t(.045,.68,.045),l);g.position.set(v*.16,.3,m),g.rotation.z=v*.5,r.add(g)}let h=new ft(new sn(.03,.03,.55,10).rotateX(Math.PI/2),l);h.position.y=.6,r.add(h);let u=new ft(new $t(.6,.03,.6),l);u.position.y=.015,r.add(u),dn(r);let f=o,d={L:3.7,H:.6,th:.05,maxT:o,setTilt(m){f=Math.max(-o,Math.min(o,m)),a.rotation.z=f},get tilt(){return f},point(m){return{x:m*Math.cos(f)-.05*Math.sin(f),y:.6+m*Math.sin(f)+.05*Math.cos(f)}}};return d.setTilt(o*(i.start||-1)),r.userData=d,r.setTilt=d.setTilt,r}function Oh(i={}){let t=i.h||.8,e=.335,n=.065,s=new Gt,r=8;for(let h=0;h<r;h++){let u=new ft(new Qn(e,n,12,10,Math.PI*2/r),Ee(h%2?"#1d1d1f":"#f2c230",.55));u.rotation.set(0,Math.PI/2,h*Math.PI*2/r),u.position.y=t,s.add(u)}let o=Ee("#e8e8e8",.4,.3),a=.78,c=t+e+.5;for(let h of[-1,1]){let u=new ft(new $t(.06,c,.06),o);u.position.set(0,c/2,h*a),s.add(u);let f=new ft(new $t(.9,.05,.07),o);f.position.set(0,.025,h*a),s.add(f);let d=new ft(new sn(.008,.008,a-e-n),Ee("#333",.6));d.rotation.x=Math.PI/2,d.position.set(0,t,h*(a+e+n)/2),s.add(d);let m=new ft(new sn(.008,.008,c-t-e-n),Ee("#333",.6));m.position.set(0,(c+t+e+n)/2,h*.2),m.rotation.x=h*-.35,s.add(m)}let l=new ft(new $t(.06,.06,a*2+.06),o);return l.position.y=c,s.add(l),dn(s),s=Gn(s),s.userData={h:t,inner:e-n},s}function zh(i={}){let t=new Gt,e=i.n||4,n=i.len||1.4,s=1.2,r=Ee("#e8e8e8",.5),o=Ee("#1f6b45",.55);for(let c=0;c<e;c++){let l=.15+.13*c/(e-1),h=-n/2+.08+c*(n-.16)/(e-1),u=s-c*.07,f=.16,d=new $t(f,l,u),m=d.attributes.position;for(let p=0;p<m.count;p++){let S=m.getY(p)+l/2;m.setY(p,m.getX(p)<0&&S>l/2?l-.06:S)}d.computeVertexNormals();let v=new ft(d,r);v.position.set(h,0,0),t.add(v);let g=new ft(new $t(f+.004,.035,u*.5),o);g.position.set(h,l*.45,0),t.add(g)}let a=Ee("#f5f5f2",.4);for(let c of[-1,1])for(let l of[-1,1]){let h=new ft(new sn(.018,.018,1.2,10),a);h.position.set(c*(n/2+.05),.6,l*(s/2+.05)),t.add(h);let u=new ft(new Fe(.03,10,8),Ee("#d23a2e",.4));u.position.set(c*(n/2+.05),1.21,l*(s/2+.05)),t.add(u)}return dn(t),t=Gn(t),t.userData={len:n,W:s},t}function Hh(i){let t=ro(128,128,a=>{a.fillStyle="#fff",a.fillRect(0,0,128,128),a.fillStyle="#1f6b45",a.font="800 92px sans-serif",a.textAlign="center",a.fillText(String(i),64,98)}),e=Ee("#fff"),n=new de({map:t}),s=new Gt,r=new ft(new $t(.3,.3,.02),[e,e,e,e,n,n]);r.position.y=.3,r.rotation.x=-.35,s.add(r);let o=new ft(new $t(.02,.3,.02),Ee("#999"));return o.position.set(0,.14,-.06),s.add(o),dn(s),s}var kh={};function Gh(i){Object.keys(i||{}).forEach(t=>{kh[t]=i[t]})}function Tv(i){return!!kh[i]}var Av=(i,t,e)=>i+(t-i)*e,Sd=i=>{let t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)},Rv=(i,t,e)=>Sd((e-i)/(t-i)),Cv=(i,t,e)=>Math.exp(-(((i-t)/e)**2));function Pv(i,t){let e=i.map(l=>({x:l[0],z:l[1]})),n=e.length,s=[],r=l=>t?e[(l+n)%n]:e[Math.max(0,Math.min(n-1,l))],o=t?n:n-1;for(let l=0;l<o;l++){let h=r(l-1),u=r(l),f=r(l+1),d=r(l+2);for(let m=0;m<24;m++){let v=m/24,g=v*v,p=g*v,S=(M,_,b,E)=>.5*(2*_+(-M+b)*v+(2*M-5*_+4*b-E)*g+(-M+3*_-3*b+E)*p);s.push({x:S(h.x,u.x,f.x,d.x),z:S(h.z,u.z,f.z,d.z)})}}s.push(t?{...s[0]}:{...e[n-1]});let a=[0];for(let l=1;l<s.length;l++)a.push(a[l-1]+Math.hypot(s[l].x-s[l-1].x,s[l].z-s[l-1].z));let c=a[a.length-1]||1;return{length:c,pts:s,at(l){l=t?(l%1+1)%1:Math.max(0,Math.min(1,l));let h=l*c,u=0,f=a.length-1;for(;f-u>1;){let g=u+f>>1;a[g]<h?u=g:f=g}let d=s[u],m=s[f],v=(h-a[u])/(a[f]-a[u]||1);return{x:d.x+(m.x-d.x)*v,z:d.z+(m.z-d.z)*v,yaw:Math.atan2(-(m.z-d.z),m.x-d.x)}}}}var Iv={Group:Gt,Object3D:Se,Mesh:ft,InstancedMesh:Kn,Line:zs,LineSegments:Cr,Points:Pr,Sprite:qi,SpriteMaterial:Ai,Vector2:Et,Vector3:D,Quaternion:Ve,Euler:ln,Matrix4:ie,Color:It,Box3:gn,MathUtils:Kc,BufferGeometry:re,BufferAttribute:ae,Float32BufferAttribute:Vt,BoxGeometry:$t,CylinderGeometry:sn,SphereGeometry:Fe,TorusGeometry:Qn,PlaneGeometry:_n,CircleGeometry:Zi,RingGeometry:Ji,ConeGeometry:Dr,CapsuleGeometry:$i,TubeGeometry:Ki,CatmullRomCurve3:Ci,MeshStandardMaterial:de,MeshBasicMaterial:Bn,MeshLambertMaterial:Or,LineBasicMaterial:Yi,LineDashedMaterial:zr,CanvasTexture:di,DoubleSide:We,FrontSide:jn,BackSide:Be,SRGBColorSpace:Re,RepeatWrapping:Yn},Qe=480,Lv=1.35,Dv=2.1,yd=(i,t)=>{for(;i-t>Math.PI;)i-=2*Math.PI;for(;i-t<-Math.PI;)i+=2*Math.PI;return i};function Md(i,t){let e=[],n=[],s=[],r=[0],o=[];i.forEach(u=>{let f=u[t];o.push(!!f),e.push(f?f.x:NaN),n.push(f?f.z:NaN)});for(let u=0;u<=Qe;u++){let f=i[u][t];if(u){let d=o[u]&&o[u-1]?Math.hypot(e[u]-e[u-1],n[u]-n[u-1]):0;r.push(r[u-1]+d*(f&&f.still?1-Math.min(1,+f.still):1))}}let a=null,c=[];for(let u=0;u<=Qe;u++){let f=Math.max(0,u-2),d=Math.min(Qe,u+2),m=e[d]-e[f],v=n[d]-n[f];c.push(o[f]&&o[d]&&Math.hypot(m,v)>.002?Math.atan2(-v,m):null)}let l=c.find(u=>u!=null);for(let u=0;u<=Qe;u++){let f=c[u]!=null?c[u]:a!=null?a:l!=null?l:0;a!=null&&(f=yd(f,a)),s.push(f),a=f}let h=s.map((u,f)=>{let d=0,m=0;for(let v=-3;v<=3;v++){let g=f+v;g>=0&&g<=Qe&&(d+=yd(s[g],u),m++)}return d/m});return{x:e,z:n,yaw:h,dist:r,has:o}}var rs=(i,t)=>{let e=Math.max(0,Math.min(1,t))*Qe,n=Math.min(Qe-1,Math.floor(e)),s=e-n;return i[n]+(i[n+1]-i[n])*s};function Nv(i,t,e={}){let n=kh[t];if(!n)throw new Error("Nezn\xE1m\xE1 sc\xE9na "+t);let s=Rn[e.quality]?e.quality:Fl(),r=e.D||7,o=new Gt,a={THREE:Iv,scene:o,ob:Gl,lerp:Av,ss:Sd,sm:Rv,bump:Cv,path:Pv};n.build&&n.build(a);let c=[];for(let W=0;W<=Qe;W++)c.push(n.at(W/Qe,a));let l=Md(c,"dog"),h=Md(c,"hand"),u=n.cam||{},f=u.mode==="high",d={dist:u.dist!=null?u.dist:f?7.5:5.2,height:u.height!=null?u.height:f?7:1.5,lookAhead:u.lookAhead!=null?u.lookAhead:f?0:.6,fov:u.fov||(f?40:34),az:u.az!=null?u.az:f?0:.22,lookY:u.lookY!=null?u.lookY:f?0:.45,smooth:u.smooth!=null?u.smooth:.05,followY:u.followY!=null?u.followY:.6},m=[],v=[],g=[];c.forEach(W=>{let st=W.focus||W.dog||{x:0,z:0};m.push(st.x),v.push(st.z),g.push(st.y!=null?st.y:W.focus?0:W.dog&&W.dog.y||0)});let p=Math.max(1,Math.round(d.smooth*Qe)),S=W=>W.map((st,ut)=>{let at=0,dt=0;for(let Lt=-p;Lt<=p;Lt++){let At=Math.max(0,Math.min(Qe,ut+Lt));at+=W[At],dt++}return at/dt}),M=S(m),_=S(v),b=S(g),E=new gn().setFromObject(o),A=isFinite(E.min.x)?E.min.x:0,x=isFinite(E.max.x)?E.max.x:0,w=isFinite(E.min.z)?E.min.z:0,R=isFinite(E.max.z)?E.max.z:0;[l,h].forEach(W=>W.x.forEach((st,ut)=>{W.has[ut]&&(A=Math.min(A,st),x=Math.max(x,st),w=Math.min(w,W.z[ut]),R=Math.max(R,W.z[ut]))}));let P={x0:Math.max(A,-30),x1:Math.min(x,30),z0:Math.max(w,-20),z1:Math.min(R,20)},I=Bl(i,s,P),G=I.Q,N=I.scene;N.add(o);let L=Pl({shells:G.shells,shortShells:G.shortShells});N.add(L),L.traverse(W=>{W.isMesh&&W.userData.shell===0&&(W.castShadow=!0)});let O=md({quality:s});N.add(O),O.traverse(W=>{W.isMesh&&!W.userData.shell&&(W.castShadow=!0)}),a.dog=L,a.hand=O,a.world=I;let B=new De(d.fov,2,.05,500),q=!1,U=0,V=[],F=0;function Q(){let W=i.clientWidth||i.width||300,st=i.clientHeight||Math.round(W/2);I.R.setSize(W,st,!1),B.aspect=W/st,B.updateProjectionMatrix()}Q();let tt=new D,ht=new D;function lt(W){if(q)return;W=(W%1+1)%1;let st=n.at(W,a)||{},ut=st.dog;ut?(L.visible=!ut.hidden,L.position.set(ut.x,ut.y||0,ut.z),L.rotation.y=ut.yaw!=null?ut.yaw:rs(l.yaw,W),L.rotation.z=ut.slope||0,io(L,rs(l.dist,W)/Lv%1,ut.air||0,ut.pitch||0,+ut.still||0,ut.land||0,{time:W*r,sit:ut.sit||0})):L.visible=!1;let at=st.hand;if(at){O.visible=!0,O.position.set(at.x,at.y||0,at.z),O.rotation.y=at.yaw!=null?at.yaw:rs(h.yaw,W);let we=Math.min(Qe-1,Math.floor(W*Qe)),H=at.still?0:(h.dist[we+1]-h.dist[we])*Qe/r;Ul(O,{phase:rs(h.dist,W)/Dv%1,speed:Math.min(1,H/4),point:at.point||0,pointSide:at.pointSide||1,still:!!at.still})}else O.visible=!1;st.extra&&st.extra(a);let dt=rs(M,W),Lt=rs(_,W),At=rs(b,W)*d.followY,Bt=Math.max(0,Math.floor(W*Qe)-6),qt=Math.min(Qe,Bt+12),Wt=M[qt]-M[Bt],ne=_[qt]-_[Bt],pe=Math.hypot(Wt,ne);pe>.001?(Wt/=pe,ne/=pe):(Wt=0,ne=0);let Ue=d.lookAhead*Math.min(1,pe*10);B.position.set(dt-d.dist*Math.sin(d.az),d.height+At,Lt+d.dist*Math.cos(d.az)),B.lookAt(tt.set(dt+Wt*Ue,d.lookY+At,Lt+ne*Ue)),I.R.render(N,B);let me=performance.now();if(U&&me-U<250&&F<2&&(V.push(me-U),V.length>=30)){let we=V.reduce((He,oe)=>He+oe,0)/V.length;V=[];let H=we>28?I.tier==="high"?"mid":I.tier==="mid"?"low":null:null;H?(I.setTier(H),ot(Rn[H]),Q(),F++):F=9}U=me}function ot(W){L.traverse(st=>{if(st.isMesh&&st.userData.shells){let ut=st.userData.shells,at=ut>5?W.shells:W.shortShells,dt=Math.max(1,Math.round(ut/Math.max(1,at)));st.visible=st.userData.shell%dt===0||st.userData.shell===ut}})}function Z(){if(q)return;q=!0;let W=new Set;N.traverse(st=>{st.geometry&&!W.has(st.geometry)&&(W.add(st.geometry),st.geometry.dispose()),(st.material?Array.isArray(st.material)?st.material:[st.material]:[]).forEach(at=>{W.has(at)||(W.add(at),Object.keys(at).forEach(dt=>{let Lt=at[dt];Lt&&Lt.isTexture&&!W.has(Lt)&&(W.add(Lt),Lt.dispose())}),at.dispose())})}),I.R.dispose();try{I.R.forceContextLoss()}catch{}}return{render:lt,resize:Q,dispose:Z,draw:()=>{q||I.R.render(N,B)},get tier(){return I.tier},renderer:I.R,scene:N,camera:B,dog:L,hand:O}}function tr(i){let t=i.length,e=i.map(o=>o[0]),n=i.map(o=>o[1]),s=[],r=[];for(let o=0;o<t-1;o++)s.push((n[o+1]-n[o])/(e[o+1]-e[o]));for(let o=0;o<t;o++)if(o===0)r.push(s[0]);else if(o===t-1)r.push(s[t-2]);else{let a=e[o]-e[o-1],c=e[o+1]-e[o];r.push(s[o-1]*s[o]<=0?0:3*(a+c)/((2*c+a)/s[o-1]+(c+2*a)/s[o]))}for(let o=0;o<t-1;o++)s[o]===0&&(r[o]=0,r[o+1]=0);return o=>{if(o<=e[0])return n[0];if(o>=e[t-1])return n[t-1];let a=0;for(;o>e[a+1];)a++;let c=e[a+1]-e[a],l=(o-e[a])/c,h=l*l,u=h*l;return(2*u-3*h+1)*n[a]+(u-2*h+l)*c*r[a]+(-2*u+3*h)*n[a+1]+(u-h)*c*r[a+1]}}function Vh(i,t,e,n,s){let o=[0];for(let c=1;c<=400;c++){let l=(c-.5)/400;o.push(o[c-1]+1-s*Math.exp(-(((l-e)/n)**2)))}let a=o[400];return c=>{let l=Math.max(0,Math.min(1,c))*400,h=Math.min(399,Math.floor(l));return i+(t-i)*(o[h]+(o[h+1]-o[h])*(l-h))/a}}function Wh(i,t,e=.27){let n=i(t-e),s=i(t+e);return{y:(n+s)/2,pitch:Math.atan2(s-n,2*e)}}function Xh(i,t,e,n,s){let{sm:r,bump:o}=s,a=(t+e)/2,c=(e-t)/2,l=i>t&&i<e,h=l?n*(1-((i-a)/c)**2):0,u=-.05*o(i,t-.35,.35),f=r(t-.5,t+.1,i)*(1-r(e-.9,e-.2,i)),d=r(e-1.1,e-.4,i)*(1-r(e-.05,e+.55,i)),m=n/.5,v=(.36*o(i,t+.15,.45)-.32*o(i,e-.3,.45))*Math.min(1,m*1.2)+.05*o(i,t-.75,.3);return{y:Math.max(0,h)+u,air:f,land:d,pitch:v}}var Oi=(i,t,e,n,s=0)=>{let r=i.ob.numSign(t);r.position.set(e,0,n),r.rotation.y=s,i.scene.add(r)},bd={jump:{cam:{dist:4.8,height:1.3,lookAhead:.5,az:.16,smooth:.06},build(i){i.scene.add(i.ob.jump({h:.55})),Oi(i,3,-.5,-1.35,.5),this.X=Vh(-8.5,7.5,.5,.1,.55)},at(i,t){let e=this.X(i),n=Xh(e,-1.45,1.35,.47,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch},hand:{x:t.lerp(-6.2,3.4,i)+.5*Math.sin(i*3),z:-2.6,point:t.sm(.4,.48,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}},tunnel:{cam:{mode:"high",dist:6.6,height:4.1,fov:38,lookY:.1,smooth:.12,followY:0},build(i){let e=[[-1.6,.7],[-1.6,.2]];for(let m=0;m<=12;m++){let v=Math.PI-m/12*Math.PI;e.push([1.6*Math.cos(v),-1.6*Math.sin(v)*1.05+0])}e.push([1.6,.2],[1.6,.7]);let n=i.ob.tunnel({points:e,color:"#2f6fd0"});i.scene.add(n),Oi(i,5,-2.35,.75,.3);let s=[[-3.6,4.2],[-2.6,2.6],[-1.75,1.3],[-1.6,.7]],r=[[1.6,1.3],[1.95,2.15],[2.9,2.65],[4.6,2.95],[6.8,3]],o=s.concat(e.slice(1,-1)).concat([[1.6,.7]]).concat(r);this.P=i.path(o);let a=this.P.length,c=0,l=0,h=0;for(let m=1;m<this.P.pts.length;m++){let v=this.P.pts[m-1],g=this.P.pts[m];c+=Math.hypot(g.x-v.x,g.z-v.z),!l&&Math.hypot(g.x+1.6,g.z-.7)<.03&&(l=c),Math.hypot(g.x-1.6,g.z-.7)<.03&&(h=c)}this.in0=l/a,this.in1=h/a,this.len=a,this.U=tr([[0,0],[.14,this.in0],[.68,this.in1],[.78,this.in1+1.3/a],[1,1]]),this.H=i.path([[-2.8,2.6],[-2.2,1.9],[-.8,1.6],[.9,1.7],[2.5,1.3],[3.1,1.1],[4.1,1.7],[6.8,2.3]]);let u=0,f=1e9,d=0;this.H.pts.forEach((m,v)=>{v&&(d+=Math.hypot(m.x-this.H.pts[v-1].x,m.z-this.H.pts[v-1].z));let g=Math.hypot(m.x-3.1,m.z-1.1);g<f&&(f=g,u=d/this.H.length)}),this.HU=tr([[0,0],[.12,.06],[.5,u-.03],[.58,u],[.72,u+.004],[.8,u+.07],[1,1]])},at(i,t){let e=this.U(i),n=this.P.at(e),s=e*this.len,r=this.in0*this.len,o=this.in1*this.len,a=Math.min(s-r,o-s),c=a>0,l={x:n.x,z:n.z,y:c?-.13*t.ss(a/.35+.3):0,hidden:a>.9},h=this.HU(i),u=this.H.at(h),f=t.sm(.5,.56,i)*(1-t.sm(.7,.76,i)),d={x:u.x,z:u.z,point:.8*(1-t.sm(.12,.2,i))+.8*t.sm(.64,.7,i)*(1-t.sm(.84,.9,i)),pointSide:(i<.3,1)};f>.5&&(d.yaw=2.88);let m=t.sm(.72,.95,i);return{dog:l,hand:d,focus:{x:t.lerp(.2,3.8,m)+n.x*.1,z:t.lerp(.3,2.2,m),y:0}}}},weave:{cam:{dist:5.2,height:2.3,lookAhead:.5,az:.12,lookY:.3,fov:36,smooth:.07},build(i){let t=i.ob.weave();t.position.x=-3.3,i.scene.add(t),Oi(i,7,-4.1,-.6,.4),this.x0=-3.3,this.sp=.6,this.X=tr([[0,-8.2],[.2,-3.75],[.23,-3.3-.02],[.75,3.3+.02],[.79,3.8],[1,7.4]])},at(i,t){let e=this.X(i),n=.21,s=this.x0,r=s+11*this.sp,o=n*Math.cos(Math.PI*(e-s)/this.sp),a=t.sm(s-.75,s-.05,e)*(1-t.sm(r+.05,r+.75,e)),c=e<s?t.lerp(.55,n,t.sm(s-3.5,s-.3,e)):t.lerp(-n,.1,t.sm(r,r+1.2,e)),l=t.lerp(c,o,a);return{dog:{x:e,z:l},hand:{x:t.lerp(-7.2,5,i)+.3*Math.sin(i*5),z:-1.45,point:.5*(1-t.sm(.3,.4,i))+.5*t.sm(.72,.8,i),pointSide:-1}}}},aframe:{cam:{dist:6,height:2.1,lookAhead:.4,az:.2,lookY:.5,fov:36,smooth:.08,followY:.5},build(i){let t=i.ob.aframe();i.scene.add(t),this.A=t.userData,Oi(i,4,-3.2,-1,.4);let e=this.A.half,n=e+.12-.28;this.stopX=n,this.X=tr([[0,-7.4],[.2,-e-.2],[.44,0],[.62,e-1],[.7,n],[.9,n],[.93,n+.4],[1,n+3.4]])},at(i,t){let e=this.X(i),n=Wh(this.A.surf,e),s=t.sm(.69,.71,i)*(1-t.sm(.89,.91,i));return{dog:{x:e,z:0,y:n.y+.03*s,slope:n.pitch*(1-.5*s),pitch:n.pitch*.5*s,still:s},hand:{x:t.lerp(-6.5,1.2,t.sm(0,.7,i))+t.lerp(0,4.5,t.sm(.9,1,i)),z:-1.9,still:i>.72&&i<.9?1:0,point:.6*(1-t.sm(.66,.7,i))+.7*t.sm(.9,.93,i),pointSide:-1}}}},dogwalk:{cam:{dist:6.4,height:1.4,lookAhead:.5,az:.22,lookY:.55,fov:36,smooth:.08,followY:.6},build(i){let t=i.ob.dogwalk();i.scene.add(t),this.W=t.userData,Oi(i,6,-6,-.8,.4);let e=this.W.total,n=this.W.L/2,s=e+.12-.28;this.X=tr([[0,-e-3.2],[.08,-e+.1],[.3,-n],[.52,n],[.62,e-.8],[.67,s],[.84,s],[.87,s+.4],[1,s+4]])},at(i,t){let e=this.X(i),n=Wh(this.W.surf,e),s=t.sm(.66,.68,i)*(1-t.sm(.83,.85,i));return{dog:{x:e,z:0,y:n.y+.03*s,slope:n.pitch*(1-.5*s),pitch:n.pitch*.5*s,still:s},hand:{x:t.lerp(-8.4,4.3,t.sm(0,.68,i))+t.lerp(0,4,t.sm(.84,1,i)),z:-1.25,still:i>.7&&i<.84?1:0,point:.5*(1-t.sm(.62,.68,i))+.8*t.sm(.84,.87,i),pointSide:-1}}}},seesaw:{cam:{dist:5.6,height:1.3,lookAhead:.3,az:.2,lookY:.5,fov:36,smooth:.08,followY:.5},build(i){let t=i.ob.seesaw();i.scene.add(t),this.S=t.userData,Oi(i,8,-2.6,-.8,.4);let e=this.S.L;this.Sd=tr([[0,-e/2-4.2],[.12,-e/2+.05],[.36,.2],[.52,.55],[.61,e/2-.3],[.8,e/2-.3],[.84,e/2+.35],[1,e/2+4.2]]);let n=this.S.maxT;this.Tl=s=>s<.36?n:s<.62?n-2*n*i.ss((s-.36)/.26)**1.4:-n+.06*n*Math.sin((s-.62)/.05*Math.PI)*Math.exp(-(s-.62)/.02)*(s<.68?1:0)},at(i,t){let e=this.Tl(i);this.S.setTilt(e);let n=this.Sd(i),s=this.S,r=Math.cos(e),o=s.L/2*r,a=f=>Math.abs(f)<=o?Math.max(0,s.H+f*Math.tan(e)+s.th/r):0,c=Math.abs(n)<=s.L/2?n*r:n<0?-o+(n+s.L/2):o+(n-s.L/2),l=Wh(a,c),h=t.sm(.8,.83,i)*(1-t.sm(.84,.87,i)),u=t.sm(.6,.62,i)*(1-t.sm(.79,.8,i))+t.sm(.36,.4,i)*(1-t.sm(.48,.52,i))*.6;return{dog:{x:c,z:0,y:l.y+h*.12,slope:l.pitch*(1-h),still:u,air:h*.6},hand:{x:t.lerp(-5.6,2.3,t.sm(0,.62,i))+t.lerp(0,3.6,t.sm(.82,1,i)),z:-1.3,still:i>.64&&i<.82?1:0,point:.6*t.sm(.8,.84,i),pointSide:-1}}}},tire:{cam:{dist:4.8,height:1.35,lookAhead:.4,az:.55,lookY:.6,smooth:.06},build(i){let t=i.ob.tire({h:.8});i.scene.add(t),Oi(i,2,-.5,-1.25,.5),this.X=Vh(-8.5,7.5,.5,.1,.5)},at(i,t){let e=this.X(i),n=Xh(e,-1.35,1.35,.38,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch},hand:{x:t.lerp(-6,3.6,i),z:-2.2,point:t.sm(.35,.45,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}},longjump:{cam:{dist:4.8,height:1.6,lookAhead:.5,az:.22,smooth:.06},build(i){let t=i.ob.longjump({n:4,len:1.4});i.scene.add(t),Oi(i,9,-1,-1.2,.5),this.X=Vh(-8.5,7.5,.5,.1,.5)},at(i,t){let e=this.X(i),n=Xh(e,-1.45,1.55,.36,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch*.8},hand:{x:t.lerp(-6,3.6,i),z:-2.1,point:t.sm(.35,.45,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}}};var yn=Math.PI;function os(i){let t=i.length,e=i.map(o=>o[0]),n=i.map(o=>o[1]),s=[],r=[];for(let o=0;o<t-1;o++)s.push((n[o+1]-n[o])/(e[o+1]-e[o]));for(let o=0;o<t;o++)if(o===0)r.push(s[0]);else if(o===t-1)r.push(s[t-2]);else{let a=e[o]-e[o-1],c=e[o+1]-e[o];r.push(s[o-1]*s[o]<=0?0:3*(a+c)/((2*c+a)/s[o-1]+(c+2*a)/s[o]))}for(let o=0;o<t-1;o++)s[o]===0&&(r[o]=0,r[o+1]=0);return o=>{if(o<=e[0])return n[0];if(o>=e[t-1])return n[t-1];let a=0;for(;o>e[a+1];)a++;let c=e[a+1]-e[a],l=(o-e[a])/c,h=l*l,u=h*l;return(2*u-3*h+1)*n[a]+(u-2*h+l)*c*r[a]+(-2*u+3*h)*n[a+1]+(u-h)*c*r[a+1]}}function Uv(i,t,e,n,s){let{sm:r,bump:o}=s,a=(t+e)/2,c=(e-t)/2,l=i>t&&i<e,h=l?n*(1-((i-a)/c)**2):0,u=-.05*o(i,t-.35,.35),f=r(t-.5,t+.1,i)*(1-r(e-.9,e-.2,i)),d=r(e-1.1,e-.4,i)*(1-r(e-.05,e+.55,i)),m=.36*o(i,t+.15,.45)-.32*o(i,e-.3,.45)+.05*o(i,t-.75,.3);return{y:Math.max(0,h)+u,air:f,land:d,pitch:m}}function qh(i,t,e){let n=1e9,s=0,r=0,o=0;for(let a=0;a<i.pts.length;a++){a&&(r+=Math.hypot(i.pts[a].x-i.pts[a-1].x,i.pts[a].z-i.pts[a-1].z));let c=Math.hypot(i.pts[a].x-t,i.pts[a].z-e);c<n&&(n=c,s=a,o=r)}return o/i.length}function Cn(i,t,e,n,s,r=-.9,o=-1.55){let a=i.ob.jump({h:.55});if(a.position.set(t,0,e),a.rotation.y=n,i.scene.add(a),s){let c=i.ob.numSign(s),l=Math.cos(n),h=Math.sin(n);c.position.set(t+r*l+o*h,0,e-r*h+o*l),c.rotation.y=n+.4,i.scene.add(c)}return{x:t,z:e}}function er(i,t,e,n){let s=i.path(t),r=s.length,o=os(n.map(([c,l])=>[c,Array.isArray(l)?qh(s,l[0],l[1]):l])),a=e.map(c=>qh(s,c.x,c.z)*r);return c=>{let l=o(c),h=s.at(l),u=l*r,f={y:0,air:0,land:0,pitch:0},d=1e9;return a.forEach(m=>{Math.abs(u-m)<d&&(d=Math.abs(u-m),f=Uv(u-m,-1.45,1.35,.47,i))}),{x:h.x,z:h.z,y:f.y,air:f.air,land:f.land,pitch:f.pitch}}}function nr(i,t,e){let n=i.path(t),s=os(e.map(([r,o])=>[r,Array.isArray(o)?qh(n,o[0],o[1]):o]));return r=>{let o=n.at(s(r));return{x:o.x,z:o.z}}}function zi(i,t){return e=>{if(e<=i[0][0])return i[0][1];for(let n=1;n<i.length;n++)if(e<=i[n][0])return t.lerp(i[n-1][1],i[n][1],t.sm(i[n-1][0],i[n][0],e));return i[i.length-1][1]}}var oo=(i,t,e=.5)=>({x:i.x+(t.x-i.x)*e,z:i.z+(t.z-i.z)*e,y:0}),ao=(i={})=>({mode:"high",dist:6.8,height:5.6,fov:40,lookY:0,smooth:.1,followY:0,lookAhead:0,...i});function Ed(i){return{cam:ao({az:yn-.25,dist:5.4,height:5.4,fov:42}),build(t){let e=Cn(t,-3.4,1.2,0,1,-.9,1.5),n=Cn(t,1,1.2,0,2,-.9,1.5),s=Cn(t,0,-2.4,yn,3,-.9,1.5);this.dog=er(t,[[-7.4,1.2],[-3.4,1.2],[1,1.2],[2.8,1.2],i?[4.8,1.1]:[4.1,.95],i?[6.1,.3]:[5,.2],i?[6.2,-1.1]:[5.2,-1],i?[5.2,-2.15]:[4.5,-2.1],[2.8,-2.4],[0,-2.4],[-2.6,-2.4],[-4.6,-2.4]],[e,n,s],[[0,0],[.42,[1,1.2]],[.82,[0,-2.4]],[1,1]]);let r=i?[[-4.6,3],[-1.5,3],[1.8,2.95],[3,2.25],[3.9,1.2],[4.3,.3],[3.9,-.4],[2.6,-.7],[-1.5,-.65],[-5,-.65]]:[[-4.6,3],[-1.5,3],[2,2.95],[2.75,2.4],[3,1.2],[2.9,.1],[2.2,-.55],[-1.5,-.65],[-5,-.65]];this.hand=nr(t,r,i?[[0,0],[.24,[1.8,2.95]],[.37,[3.9,1.2]],[.43,[4.3,.3]],[.54,[2.6,-.7]],[1,1]]:[[0,0],[.24,[2,2.95]],[.35,[3,1.2]],[.41,[2.9,.1]],[.48,[2.2,-.55]],[1,1]]),this.yaw=i?null:os([[0,0],[.25,.05],[.31,1.9],[.36,2.7],[.44,3],[.5,yn],[1,yn]]),this.look=zi(i?[[0,.35],[.28,.35],[.33,0],[.42,0],[.48,-.9],[.62,-.6],[.7,0]]:[[0,.35],[.25,.35],[.3,0]],t),this.pt=zi([[0,.15],[.08,.75],[.26,.75],[.31,0],[.46,0],[.53,.9],[.8,.9],[.88,.15]],t)},at(t,e){let n=this.dog(t),s=this.hand(t),r=this.look(t),o={x:s.x,z:s.z,point:this.pt(t),pointSide:t<.42?1:-1};return this.yaw&&(o.yaw=this.yaw(t)),{dog:n,hand:o,focus:oo(n,s,.45),extra:a=>Ch(a.hand,r)}}}}var wd={front:Ed(!1),blind:Ed(!0),rear:{cam:ao({az:yn,dist:7,height:6.2}),build(i){let t=Cn(i,-3.6,1.2,0,1,-.9,1.5),e=Cn(i,1,1.2,0,2,-.9,1.5),n=Cn(i,4.6,-2.4,yn/2,3,-.9,1.5);this.dog=er(i,[[-6.6,1.2],[-3.6,1.2],[1,1.2],[2.8,1.15],[4.1,.6],[4.6,-.6],[4.6,-2.4],[4.6,-4.4]],[t,e,n],[[0,0],[.46,[1,1.2]],[.84,[4.6,-2.4]],[1,1]]),this.hand=nr(i,[[-7.8,3],[-3.4,2.9],[-1.4,2.5],[-.7,1.2],[-.3,-.4],[1.2,-1],[2.5,-1.7],[2.8,-2.9],[2.8,-4.2]],[[0,0],[.3,[-3.4,2.9]],[.42,[-1.4,2.5]],[.51,[-.7,1.2]],[.58,[-.3,-.4]],[.66,[1.2,-1]],[1,1]]),this.pt=zi([[0,.3],[.12,.8],[.36,1],[.46,.3],[.52,0],[.6,.2],[.68,.9],[.86,.9],[.93,.2]],i),this.look=zi([[0,.3],[.4,.3],[.5,0],[.58,-.5],[.7,0]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=this.look(i);return{dog:e,hand:{x:n.x,z:n.z,point:this.pt(i),pointSide:i<.52?1:-1},focus:oo(e,n,.45),extra:r=>Ch(r.hand,s)}}},wrap:{cam:ao({az:0,dist:6.6,height:5.4}),build(i){let t=Cn(i,0,0,0,0);this.dog=er(i,[[-6.4,0],[-3,0],[0,0],[1.5,.05],[2.25,.75],[2.15,1.65],[1.2,2.05],[-.4,2.05],[-2.4,1.95],[-5.2,1.8]],[t],[[0,0],[.4,[0,0]],[.6,[2.15,1.65]],[1,1]]),this.hand=nr(i,[[-4.6,3.3],[-1.4,3.3],[-.5,3.3],[-.8,3.28],[-2.4,3.2],[-5.4,3]],[[0,0],[.36,[-1.4,3.3]],[.47,[-.5,3.3]],[.58,[-.8,3.28]],[1,1]]),this.yaw=os([[0,0],[.38,0],[.48,1.2],[.58,2.2],[.68,2.9],[.74,yn],[1,yn]]),this.pt=zi([[0,.2],[.1,.7],[.36,.7],[.45,0],[.52,.6],[.56,.6],[.66,.1],[.74,.6],[.9,.6],[.96,.2]],i)},at(i,t){let e=this.dog(i),n=this.hand(i);return{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.45?1:-1},focus:oo(e,n,.4)}}},spin:{cam:ao({az:0,dist:6.6,height:5.6}),build(i){let t=Cn(i,0,0,0,0);this.dog=er(i,[[-6.4,0],[-3,0],[0,0],[1.5,-.05],[2.25,-.8],[2.1,-1.75],[1,-2.2],[-.5,-2],[-1.7,-1.1],[-2.5,.05],[-3.6,.45],[-5.6,.55]],[t],[[0,0],[.42,[0,0]],[.62,[2.1,-1.75]],[1,1]]),this.hand=nr(i,[[-4.4,1.95],[-1.3,1.95],[-.5,1.95],[-.7,1.95],[-2.4,1.9],[-5.6,1.8]],[[0,0],[.38,[-1.3,1.95]],[.5,[-.5,1.95]],[.62,[-.7,1.95]],[1,1]]),this.yaw=os([[0,0],[.42,0],[.52,1.3],[.62,2.2],[.72,2.9],[.78,yn],[1,yn]]),this.pt=zi([[0,.2],[.1,.7],[.4,.7],[.47,0],[.53,.8],[.56,.8],[.68,.2],[.8,.5],[.92,.5],[.97,.2]],i)},at(i,t){let e=this.dog(i),n=this.hand(i);return{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.47?1:-1},focus:oo(e,n,.4)}}},backside:{cam:ao({az:0,dist:5.8,height:6,fov:42}),build(i){let t=Cn(i,0,0,yn,0);this.dog=er(i,[[-7.2,2.2],[-3.6,2.2],[-.4,2.1],[1.4,1.95],[2.7,1.3],[3,.4],[2.4,.02],[1.4,0],[0,0],[-2,0],[-4.4,0],[-6.4,0]],[t],[[0,0],[.45,[1.4,1.95]],[.64,[0,0]],[1,1]]),this.hand=nr(i,[[-6.4,4],[-2.8,3.9],[-1.2,3.55],[-1.35,2.9],[-2.8,2.3],[-6.2,2]],[[0,0],[.38,[-2.8,3.9]],[.5,[-1.2,3.55]],[.62,[-1.35,2.9]],[1,1]]),this.yaw=os([[0,0],[.42,.15],[.52,1.3],[.62,2.4],[.7,3],[.76,yn],[1,yn]]),this.pt=zi([[0,.2],[.12,.5],[.3,.9],[.46,.9],[.52,.3],[.58,.8],[.72,.8],[.8,.3],[.9,.5]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=oo(e,n,.4);return s.z=Math.min(s.z,2.2)-.4,{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.55?1:-1},focus:s}}},start:{cam:{mode:"high",dist:7.4,height:4.2,fov:40,az:.15,lookY:.2,smooth:.14,followY:0,lookAhead:0},build(i){let t=[Cn(i,-3,0,0,1,-.9,-1.5),Cn(i,.9,0,0,2,-.9,-1.5),Cn(i,4.8,0,0,3,-.9,-1.5)];this.dog=er(i,[[-5.6,0],[-3,0],[.9,0],[4.8,0],[7.6,0]],t,[[0,0],[.4,0],[.43,.012],[1,1]]),this.hand=nr(i,[[-4.95,1.2],[-3.9,1.65],[-2.2,1.85],[-.8,1.85],[3,1.85],[7.2,1.8]],[[0,0],[.06,0],[.3,[-.8,1.85]],[.43,[-.8,1.85]],[.55,[.2,1.85]],[1,1]]),this.yaw=os([[0,0],[.28,0],[.33,2.6],[.36,2.8],[.42,2.8],[.47,.2],[.5,0],[1,0]]);let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");n.fillStyle="rgba(255,255,255,.94)",n.beginPath(),n.roundRect?n.roundRect(8,8,240,96,40):n.rect(8,8,240,96),n.fill(),n.beginPath(),n.moveTo(110,100),n.lineTo(128,124),n.lineTo(146,100),n.fill(),n.fillStyle="#1f6b45",n.font="800 64px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("Hop!",128,58);let s=new di(e);s.colorSpace=Re,this.bub=new qi(new Ai({map:s,depthTest:!1,transparent:!0})),this.bub.scale.set(.9,.45,1),this.bub.renderOrder=10,this.bub.visible=!1,i.scene.add(this.bub),this.pt=zi([[0,0],[.34,0],[.37,1],[.42,1],[.46,0],[.5,0],[.56,.6],[.9,.6],[.96,0]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=i<.4,r=1-t.sm(.38,.41,i),o=this.bub,a=i>.36&&i<.47,c=n.x,l=n.z;return{dog:{...e,still:s,sit:r},hand:{x:n.x,z:n.z,yaw:this.yaw(i),still:i<.06||i>.33&&i<.43,point:this.pt(i),pointSide:i<.5?-1:1},focus:{x:t.lerp(-2.2,1.6,t.sm(.2,.9,i))+.15*e.x,z:.3,y:0},extra:()=>{o.visible=a,o.position.set(c,2.15,l)}}}}};var Fv=1.35;function lo(i,t,e){let n=t.W,s=t.H,r=t.size||{},o=new Gt,a=new ft(new _n(n,s).rotateX(-Math.PI/2),new de({color:"#7fb35a",roughness:1,transparent:!0,opacity:.35}));a.position.set(n/2,.003,s/2),a.receiveShadow=!0,o.add(a);let c=fn("#ffffff",.8);[[n/2,0,n,.08],[n/2,s,n,.08],[0,s/2,.08,s],[n,s/2,.08,s]].forEach(([M,_,b,E])=>{let A=new ft(new $t(b,.01,E),c);A.position.set(M,.006,_),o.add(A)});let l=new $t(.05,.01,.5);for(let M=5;M<n;M+=5)for(let _ of[.25,s-.25]){let b=new ft(l,c);b.position.set(M,.006,_),o.add(b)}i.add(o);let h=[];(t.obs||[]).forEach(M=>{let _=M.rot*Math.PI/180,b=Math.cos(_),E=Math.sin(_),A=null;if(M.type==="tunnel")A=Dh({points:M.tunnel&&M.tunnel.length>1?M.tunnel:[[M.x-b*2.25,M.y-E*2.25],[M.x+b*2.25,M.y+E*2.25]]}),i.add(A);else{if(M.type==="jump")A=M.v==="wall"?Ih({h:r.jump||.6}):M.v==="oxer"?Lh({h:r.jump||.6}):kl({h:r.jump||.6});else if(M.type==="tire")A=Oh({h:r.tire||.8});else if(M.type==="longjump")A=zh({len:r.lj||1.4,n:r.ljn||4});else if(M.type==="weave"){let x=Nh({});x.position.x=-(11*.6)/2,A=new Gt,A.add(x)}else M.type==="aframe"?A=Uh({}):M.type==="dogwalk"?A=Fh({}):M.type==="seesaw"&&(A=Bh({}),h.push({g:A,o:M}));if(!A)return;A.position.set(M.x,0,M.y),A.rotation.y=-_,i.add(A)}if(M.nums&&M.nums.length){let x=M.type==="tunnel"?0:{weave:3.3,aframe:2.1,dogwalk:5.4,seesaw:1.85}[M.type]||0,w=-E,R=b,P=x+.6,I=M.type==="jump"?1.15:M.type==="tire"||M.type==="longjump"?1.05:.75,G=M.x-b*P+w*I,N=M.y-E*P+R*I;if(M.type==="tunnel"&&M.tunnel){let O=M.tunnel[0],B=M.tunnel[1],q=B[0]-O[0],U=B[1]-O[1],V=Math.hypot(q,U)||1;G=O[0]-q/V*.6-U/V*.8,N=O[1]-U/V*.6+q/V*.8}let L=Hh(M.nums.join("\xB7"));L.scale.setScalar(M.nums.length>1?1.6:1.4),L.position.set(G,0,N),L.rotation.y=-_+Math.PI/2,i.add(L)}});let u=(t.path||[]).map(M=>({x:M[0],z:M[1],h:M[2]||0,i:M[3]})),f=[0];for(let M=1;M<u.length;M++)f.push(f[M-1]+Math.hypot(u[M].x-u[M-1].x,u[M].z-u[M-1].z));let d=f[f.length-1]||0,m=t.jumps||[],v=(t.weaves||[]).map(M=>({x:M.x,y:M.y,a:M.rot*Math.PI/180,dir:M.dir||1,idx:M.idx,n:12,len:6.6}));function g(M){M=Math.max(0,Math.min(d,M));let _=1;for(;_<f.length-1&&f[_]<M;)_++;let b=u[_-1]||{x:0,z:0,h:0,i:0},E=u[_]||b,A=(M-f[_-1])/(f[_]-f[_-1]||1),x=b.x+(E.x-b.x)*A,w=b.z+(E.z-b.z)*A,R=b.h+(E.h-b.h)*A,P=0;m.forEach(L=>{let O=Math.hypot(x-L[0],w-L[1]),B=L[3]||1.4;if(O<B){let q=1-O*O/(B*B);R+=(L[2]+.12)*q,P=Math.max(P,Math.min(1,q*1.6))}});let I=Math.max(b.i,E.i),G=0,N=0;return v.forEach(L=>{if(I!==L.idx&&I!==L.idx-1)return;let O=Math.cos(L.a),B=Math.sin(L.a),q=(x-L.x)*O+(w-L.y)*B,U=-(x-L.x)*B+(w-L.y)*O;if(Math.abs(U)>.8)return;let V=L.n>1?L.len/(L.n-1):.6,F=L.dir>0?q+L.len/2:L.len/2-q,Q=F<0?Math.max(0,1+F/.45):F>L.len?Math.max(0,1-(F-L.len)/.45):1;if(Q<=0)return;let tt=O*L.dir,ht=B*L.dir,lt=-.17*Math.cos(Math.PI*F/V)*Q;G+=ht*lt,N+=-tt*lt}),{x:x+G,z:w+N,h:R,air:P,idx:I}}if(u.length>1){let M=new Gt,_=new Zi(.05,8).rotateX(-Math.PI/2),b=new Bn({color:"#f2c230",transparent:!0,opacity:.85}),E=new Kn(_,b,Math.ceil(d/.5)+1),A=new Se,x=0;for(let w=0;w<=d;w+=.5){let R=g(w);R.h>.05||(A.position.set(R.x,.012,R.z),A.updateMatrix(),E.setMatrixAt(x++,A.matrix))}E.count=x,M.add(E),i.add(M)}let p=Pl({shells:e.shells,shortShells:e.shortShells});i.add(p),p.traverse(M=>{M.isMesh&&M.userData.shell===0&&(M.castShadow=!0)});function S(M){let _=g(M),b=g(M+.8),E=g(M+.25),A=Math.atan2(-(E.z-_.z),E.x-_.x),x=Math.atan2(b.h-_.h,Math.max(.2,Math.hypot(b.x-_.x,b.z-_.z)))*(_.air?0:1);return p.position.set(_.x,_.h,_.z),p.rotation.y=A,p.rotation.z=Math.max(-.6,Math.min(.6,x)),io(p,M/Fv%1,_.air,_.air?.15*(b.h<_.h?1:-1):0,M<=0||M>=d?1:0,0,{time:M/4.5}),h.forEach(({g:w,o:R})=>{let P=R.rot*Math.PI/180,I=(_.x-R.x)*Math.cos(P)+(_.z-R.y)*Math.sin(P),N=(R.idx>=0&&(_.idx>R.idx||_.idx===R.idx&&I*R.sign<0)?-R.sign:R.sign)*-w.userData.maxT,L=w.userData.tilt;w.setTilt(L+(N-L)*.2)}),_}return{length:d,at:g,pose:S,dog:p,start:u.length?{x:u[0].x,z:u[0].z}:{x:n/2,z:s/2}}}function Bv(i,t,e={}){let n=Rn[e.quality]?e.quality:Fl(),s=t.W,r=t.H,o=Bl(i,n,{x0:0,x1:s,z0:0,z1:r}),a=o.scene,c=o.Q,l=lo(a,t,c),{length:h,at:u,dog:f}=l,d=t.path||[],m=new De(42,2,.05,500),v={az:.55,el:.72,dist:Math.max(s,r)*1.2,tx:s/2,tz:r/2},g=new Map,p=0,S=0;i.style.touchAction="none";let M=F=>{if(g.set(F.pointerId,{x:F.clientX,y:F.clientY}),g.size===2){let[Q,tt]=[...g.values()];p=Math.hypot(Q.x-tt.x,Q.y-tt.y),S=v.dist}try{i.setPointerCapture(F.pointerId)}catch{}},_=F=>{let Q=g.get(F.pointerId);if(Q){if(g.size===1&&(v.az-=(F.clientX-Q.x)*.006,v.el=Math.max(.12,Math.min(1.45,v.el+(F.clientY-Q.y)*.005))),g.set(F.pointerId,{x:F.clientX,y:F.clientY}),g.size===2){let[tt,ht]=[...g.values()],lt=Math.hypot(tt.x-ht.x,tt.y-ht.y);p&&(v.dist=Math.max(4,Math.min(Math.max(s,r)*4,S*p/lt)))}V.onCamera&&V.onCamera()}},b=F=>{g.delete(F.pointerId),p=0},E=F=>{F.preventDefault(),v.dist=Math.max(4,Math.min(Math.max(s,r)*4,v.dist*(1+Math.sign(F.deltaY)*.1))),V.onCamera&&V.onCamera()};i.addEventListener("pointerdown",M),i.addEventListener("pointermove",_),i.addEventListener("pointerup",b),i.addEventListener("pointercancel",b),i.addEventListener("wheel",E,{passive:!1});let A=[[-1,-1],[s+1,-1],[s+1,r+1],[-1,r+1]].map(F=>new D(F[0],0,F[1])),x=new D;function w(F){let Q=3,tt=Math.max(s,r)*4;for(let ht=0;ht<22;ht++){let lt=(Q+tt)/2;F(lt),m.updateMatrixWorld(),m.updateProjectionMatrix(),A.every(Z=>(x.copy(Z).project(m),Math.abs(x.x)<.96&&Math.abs(x.y)<.94&&x.z<1))?tt=lt:Q=lt}return tt}let R=()=>m.aspect<1;function P(F){m.fov=42,m.up.set(0,1,0),m.position.set(v.tx+F*Math.cos(v.el)*Math.sin(v.az),F*Math.sin(v.el),v.tz+F*Math.cos(v.el)*Math.cos(v.az)),m.lookAt(v.tx,0,v.tz)}function I(F){m.fov=40,m.position.set(s/2,F,r/2),R()===s>r?m.up.set(1,0,0):m.up.set(0,0,-1),m.lookAt(s/2,0,r/2)}let G=Math.max(s,r);function N(){v.az=R()===s>r?Math.PI/2+.12:.12,v.el=.95,v.dist=w(P),G=w(I)}function L(){let F=i.clientWidth||300,Q=i.clientHeight||200;o.R.setSize(F,Q,!1),m.aspect=F/Q,m.updateProjectionMatrix(),N()}L();let O=new D;function B(F,Q){let tt=l.pose(F),ht=u(F+.8),lt=u(F-4);if(f.visible=Q!=="dog"&&d.length>1,Q==="dog"){m.fov=75,m.up.set(0,1,0);let ot=u(F+.35);m.position.set(ot.x,ot.h+.55,ot.z),O.set(ht.x+(ht.x-tt.x)*4,ht.h+.3,ht.z+(ht.z-tt.z)*4),m.lookAt(O)}else Q==="chase"?(m.fov=55,m.up.set(0,1,0),m.position.set(lt.x,Math.max(lt.h,tt.h)+2.4,lt.z),O.set(tt.x,tt.h+.4,tt.z),m.lookAt(O)):Q==="top"?I(G):P(v.dist);return m.updateProjectionMatrix(),o.R.render(a,m),tt}let q=!1;function U(){if(q)return;q=!0,i.removeEventListener("pointerdown",M),i.removeEventListener("pointermove",_),i.removeEventListener("pointerup",b),i.removeEventListener("pointercancel",b),i.removeEventListener("wheel",E);let F=new Set;a.traverse(Q=>{Q.geometry&&!F.has(Q.geometry)&&(F.add(Q.geometry),Q.geometry.dispose()),(Q.material?Array.isArray(Q.material)?Q.material:[Q.material]:[]).forEach(tt=>{F.has(tt)||(F.add(tt),Object.keys(tt).forEach(ht=>{let lt=tt[ht];lt&&lt.isTexture&&!F.has(lt)&&(F.add(lt),lt.dispose())}),tt.dispose())})}),o.R.dispose();try{o.R.forceContextLoss()}catch{}}let V={length:h,render:B,resize:L,dispose:U,at:u,get tier(){return o.tier},get pixelRatio(){return o.R.getPixelRatio()},onCamera:null};return V}function Ov(){try{return navigator.xr&&navigator.xr.isSessionSupported?navigator.xr.isSessionSupported("immersive-ar").catch(()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}function zv(i,t,e={}){let n=s=>{try{e.onState&&e.onState(s)}catch{}};return navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:i}}).then(s=>{let r=document.createElement("canvas"),o=new $s({canvas:r,alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(1),o.xr.enabled=!0,o.shadowMap.enabled=!0,o.shadowMap.type=La,o.outputColorSpace=Re;let a=new fi,c=new De;a.add(new Qi("#ffffff","#6f7f5a",1.6));let l=new Di("#fff8ec",1.9);l.position.set(6,14,4),l.castShadow=!0,l.shadow.mapSize.set(1024,1024);let h=l.shadow.camera;h.left=-30,h.right=30,h.top=30,h.bottom=-30,h.far=80,a.add(l),a.add(l.target);let u=new Gt,f=new Gt;u.add(f),u.visible=!1,a.add(u);let d=Rn.low,m=lo(f,t,d);f.position.set(-m.start.x,0,-m.start.z);let v=new ft(new _n(t.W+20,t.H+20).rotateX(-Math.PI/2),new Br({opacity:.28}));v.position.set(t.W/2,.001,t.H/2),v.receiveShadow=!0,f.add(v),f.traverse(L=>{L.isMesh&&L!==v&&(L.castShadow=!0)});let g=new ft(new Ji(.12,.16,32).rotateX(-Math.PI/2),new Bn({color:"#c6f432"}));g.matrixAutoUpdate=!1,g.visible=!1,a.add(g);let p={placed:!1,scale:1,yaw:0,d:0,on:!1,last:0,ended:!1},S=null,M=null;s.requestReferenceSpace("viewer").then(L=>s.requestHitTestSource({space:L})).then(L=>{S=L}).catch(()=>{}),o.xr.setReferenceSpaceType("local");let _=o.xr.setSession(s).then(()=>{M=o.xr.getReferenceSpace()}),b=new D,E=new Ve,A=new D,x=new D;function w(){if(!g.visible)return n("noground"),!1;g.matrix.decompose(b,E,A),o.xr.getCamera().getWorldDirection(x),x.y=0,x.lengthSq()<1e-6&&x.set(0,0,-1),x.normalize();let O=t.W/2-m.start.x,B=t.H/2-m.start.z,q=t.az!=null&&e.heading?e.heading():null,U=q!=null&&p.scale===1;return p.yaw=U?Math.atan2(-x.z,x.x)-(t.az-q)*Math.PI/180:Math.atan2(-x.z,x.x)-(Math.hypot(O,B)>.5?Math.atan2(-B,O):0),u.position.copy(b),u.rotation.set(0,p.yaw,0),u.scale.setScalar(p.scale),u.visible=!0,p.placed=!0,n(U?"placedAz":"placed"),!0}function R(L){p.placed&&(p.yaw+=L*Math.PI/180,u.rotation.y=p.yaw)}function P(L){p.scale=L?1/20:1,u.scale.setScalar(p.scale),n(p.placed?"placed":"scan")}function I(L){return p.on=L==null?!p.on:!!L,p.on&&p.d>=m.length&&(p.d=0),p.last=0,p.on}s.addEventListener("select",()=>{p.placed||w()}),o.setAnimationLoop((L,O)=>{if(O){if(S&&M){let B=O.getHitTestResults(S);if(B.length){let q=B[0].getPose(M);q&&(g.matrix.fromArray(q.transform.matrix),g.visible=!p.placed,p.placed||n("ready"))}else g.visible=!1,p.placed||n("scan")}p.on&&(p.last&&(p.d+=Math.min(.1,(L-p.last)/1e3)*4.5),p.last=L,p.d>=m.length&&(p.d=m.length,p.on=!1,n("done"))),m.pose(p.d),o.render(a,c)}});function G(){if(p.ended)return;p.ended=!0,o.setAnimationLoop(null);try{S&&S.cancel()}catch{}let L=new Set;a.traverse(O=>{O.geometry&&!L.has(O.geometry)&&(L.add(O.geometry),O.geometry.dispose()),(O.material?Array.isArray(O.material)?O.material:[O.material]:[]).forEach(B=>{L.has(B)||(L.add(B),B.dispose())})}),o.dispose();try{e.onEnd&&e.onEnd()}catch{}}s.addEventListener("end",G),n("scan");let N={place:w,rotate:R,setScale:P,play:I,end(){s.end().catch(G)},get placed(){return p.placed},get length(){return m.length}};return _.then(()=>N)})}var Ye=Uint8Array,Mn=Uint16Array,Qh=Int32Array,jh=new Ye([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tu=new Ye([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Td=new Ye([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ld=function(i,t){for(var e=new Mn(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new Qh(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},Dd=Ld(jh,2),Hv=Dd.b,$h=Dd.r;Hv[28]=258,$h[258]=28;var Nd=Ld(tu,0),z1=Nd.b,Ad=Nd.r,Zh=new Mn(32768);for(ce=0;ce<32768;++ce)xi=(ce&43690)>>1|(ce&21845)<<1,xi=(xi&52428)>>2|(xi&13107)<<2,xi=(xi&61680)>>4|(xi&3855)<<4,Zh[ce]=((xi&65280)>>8|(xi&255)<<8)>>1;var xi,ce,uo=(function(i,t,e){for(var n=i.length,s=0,r=new Mn(t);s<n;++s)i[s]&&++r[i[s]-1];var o=new Mn(t);for(s=1;s<t;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(e){a=new Mn(1<<t);var c=15-t;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=t-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[Zh[u]>>c]=l}else for(a=new Mn(n),s=0;s<n;++s)i[s]&&(a[s]=Zh[o[i[s]-1]++]>>15-i[s]);return a}),as=new Ye(288);for(ce=0;ce<144;++ce)as[ce]=8;var ce;for(ce=144;ce<256;++ce)as[ce]=9;var ce;for(ce=256;ce<280;++ce)as[ce]=7;var ce;for(ce=280;ce<288;++ce)as[ce]=8;var ce,Vl=new Ye(32);for(ce=0;ce<32;++ce)Vl[ce]=5;var ce,kv=uo(as,9,0);var Gv=uo(Vl,5,0);var Ud=function(i){return(i+7)/8|0},Fd=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new Ye(i.subarray(t,e))};var Vv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Wl=function(i,t,e){var n=new Error(t||Vv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Wl),!e)throw n;return n};var _i=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>8},co=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>8,i[n+2]|=e>>16},Yh=function(i,t){for(var e=[],n=0;n<i.length;++n)i[n]&&e.push({s:n,f:i[n]});var s=e.length,r=e.slice();if(!s)return{t:Od,l:0};if(s==1){var o=new Ye(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(b,E){return b.f-E.f}),e.push({s:-1,f:25001});var a=e[0],c=e[1],l=0,h=1,u=2;for(e[0]={s:-1,f:a.f+c.f,l:a,r:c};h!=s-1;)a=e[e[l].f<e[u].f?l++:u++],c=e[l!=h&&e[l].f<e[u].f?l++:u++],e[h++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=r[0].s,n=1;n<s;++n)r[n].s>f&&(f=r[n].s);var d=new Mn(f+1),m=Jh(e[h-1],d,0);if(m>t){var n=0,v=0,g=m-t,p=1<<g;for(r.sort(function(E,A){return d[A.s]-d[E.s]||E.f-A.f});n<s;++n){var S=r[n].s;if(d[S]>t)v+=p-(1<<m-d[S]),d[S]=t;else break}for(v>>=g;v>0;){var M=r[n].s;d[M]<t?v-=1<<t-d[M]++-1:++n}for(;n>=0&&v;--n){var _=r[n].s;d[_]==t&&(--d[_],++v)}m=t}return{t:new Ye(d),l:m}},Jh=function(i,t,e){return i.s==-1?Math.max(Jh(i.l,t,e+1),Jh(i.r,t,e+1)):t[i.s]=e},Rd=function(i){for(var t=i.length;t&&!i[--t];);for(var e=new Mn(++t),n=0,s=i[0],r=1,o=function(c){e[n++]=c},a=1;a<=t;++a)if(i[a]==s&&a!=t)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return{c:e.subarray(0,n),n:t}},ho=function(i,t){for(var e=0,n=0;n<t.length;++n)e+=i[n]*t[n];return e},Bd=function(i,t,e){var n=e.length,s=Ud(t+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=e[r];return(s+4+n)*8},Cd=function(i,t,e,n,s,r,o,a,c,l,h){_i(t,h++,e),++s[256];for(var u=Yh(s,15),f=u.t,d=u.l,m=Yh(r,15),v=m.t,g=m.l,p=Rd(f),S=p.c,M=p.n,_=Rd(v),b=_.c,E=_.n,A=new Mn(19),x=0;x<S.length;++x)++A[S[x]&31];for(var x=0;x<b.length;++x)++A[b[x]&31];for(var w=Yh(A,7),R=w.t,P=w.l,I=19;I>4&&!R[Td[I-1]];--I);var G=l+5<<3,N=ho(s,as)+ho(r,Vl)+o,L=ho(s,f)+ho(r,v)+o+14+3*I+ho(A,R)+2*A[16]+3*A[17]+7*A[18];if(c>=0&&G<=N&&G<=L)return Bd(t,h,i.subarray(c,c+l));var O,B,q,U;if(_i(t,h,1+(L<N)),h+=2,L<N){O=uo(f,d,0),B=f,q=uo(v,g,0),U=v;var V=uo(R,P,0);_i(t,h,M-257),_i(t,h+5,E-1),_i(t,h+10,I-4),h+=14;for(var x=0;x<I;++x)_i(t,h+3*x,R[Td[x]]);h+=3*I;for(var F=[S,b],Q=0;Q<2;++Q)for(var tt=F[Q],x=0;x<tt.length;++x){var ht=tt[x]&31;_i(t,h,V[ht]),h+=R[ht],ht>15&&(_i(t,h,tt[x]>>5&127),h+=tt[x]>>12)}}else O=kv,B=as,q=Gv,U=Vl;for(var x=0;x<a;++x){var lt=n[x];if(lt>255){var ht=lt>>18&31;co(t,h,O[ht+257]),h+=B[ht+257],ht>7&&(_i(t,h,lt>>23&31),h+=jh[ht]);var ot=lt&31;co(t,h,q[ot]),h+=U[ot],ot>3&&(co(t,h,lt>>5&8191),h+=tu[ot])}else co(t,h,O[lt]),h+=B[lt]}return co(t,h,O[256]),h+B[256]},Wv=new Qh([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Od=new Ye(0),Xv=function(i,t,e,n,s,r){var o=r.z||i.length,a=new Ye(n+o+5*(1+Math.ceil(o/7e3))+s),c=a.subarray(n,a.length-s),l=r.l,h=(r.r||0)&7;if(t){h&&(c[0]=r.r>>3);for(var u=Wv[t-1],f=u>>13,d=u&8191,m=(1<<e)-1,v=r.p||new Mn(32768),g=r.h||new Mn(m+1),p=Math.ceil(e/3),S=2*p,M=function(At){return(i[At]^i[At+1]<<p^i[At+2]<<S)&m},_=new Qh(25e3),b=new Mn(288),E=new Mn(32),A=0,x=0,w=r.i||0,R=0,P=r.w||0,I=0;w+2<o;++w){var G=M(w),N=w&32767,L=g[G];if(v[N]=L,g[G]=N,P<=w){var O=o-w;if((A>7e3||R>24576)&&(O>423||!l)){h=Cd(i,c,0,_,b,E,x,R,I,w-I,h),R=A=x=0,I=w;for(var B=0;B<286;++B)b[B]=0;for(var B=0;B<30;++B)E[B]=0}var q=2,U=0,V=d,F=N-L&32767;if(O>2&&G==M(w-F))for(var Q=Math.min(f,O)-1,tt=Math.min(32767,w),ht=Math.min(258,O);F<=tt&&--V&&N!=L;){if(i[w+q]==i[w+q-F]){for(var lt=0;lt<ht&&i[w+lt]==i[w+lt-F];++lt);if(lt>q){if(q=lt,U=F,lt>Q)break;for(var ot=Math.min(F,lt-2),Z=0,B=0;B<ot;++B){var W=w-F+B&32767,st=v[W],ut=W-st&32767;ut>Z&&(Z=ut,L=W)}}}N=L,L=v[N],F+=N-L&32767}if(U){_[R++]=268435456|$h[q]<<18|Ad[U];var at=$h[q]&31,dt=Ad[U]&31;x+=jh[at]+tu[dt],++b[257+at],++E[dt],P=w+q,++A}else _[R++]=i[w],++b[i[w]]}}for(w=Math.max(w,P);w<o;++w)_[R++]=i[w],++b[i[w]];h=Cd(i,c,l,_,b,E,x,R,I,w-I,h),l||(r.r=h&7|c[h/8|0]<<3,h-=7,r.h=g,r.p=v,r.i=w,r.w=P)}else{for(var w=r.w||0;w<o+l;w+=65535){var Lt=w+65535;Lt>=o&&(c[h/8|0]=l,Lt=o),h=Bd(c,h+1,i.subarray(w,Lt))}r.i=o}return Fd(a,0,n+Ud(h)+s)},qv=(function(){for(var i=new Int32Array(256),t=0;t<256;++t){for(var e=t,n=9;--n;)e=(e&1&&-306674912)^e>>>1;i[t]=e}return i})(),Yv=function(){var i=-1;return{p:function(t){for(var e=i,n=0;n<t.length;++n)e=qv[e&255^t[n]]^e>>>8;i=e},d:function(){return~i}}};var $v=function(i,t,e,n,s){if(!s&&(s={l:1},t.dictionary)){var r=t.dictionary.subarray(-32768),o=new Ye(r.length+i.length);o.set(r),o.set(i,r.length),i=o,s.w=r.length}return Xv(i,t.level==null?6:t.level,t.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+t.mem,e,n,s)},zd=function(i,t){var e={};for(var n in i)e[n]=i[n];for(var n in t)e[n]=t[n];return e};var qe=function(i,t,e){for(;e;++t)i[t]=e,e>>>=8};function Zv(i,t){return $v(i,t||{},0,0)}var Hd=function(i,t,e,n){for(var s in i){var r=i[s],o=t+s,a=n;Array.isArray(r)&&(a=zd(n,r[1]),r=r[0]),r instanceof Ye?e[o]=[r,a]:(e[o+="/"]=[new Ye(0),a],Hd(r,o,e,n))}},Pd=typeof TextEncoder!="undefined"&&new TextEncoder,Jv=typeof TextDecoder!="undefined"&&new TextDecoder,Kv=0;try{Jv.decode(Od,{stream:!0}),Kv=1}catch{}function fo(i,t){if(t){for(var e=new Ye(i.length),n=0;n<i.length;++n)e[n]=i.charCodeAt(n);return e}if(Pd)return Pd.encode(i);for(var s=i.length,r=new Ye(i.length+(i.length>>1)),o=0,a=function(h){r[o++]=h},n=0;n<s;++n){if(o+5>r.length){var c=new Ye(o+8+(s-n<<1));c.set(r),r=c}var l=i.charCodeAt(n);l<128||t?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Fd(r,0,o)}var Kh=function(i){var t=0;if(i)for(var e in i){var n=i[e].length;n>65535&&Wl(9),t+=n+4}return t},Id=function(i,t,e,n,s,r,o,a){var c=n.length,l=e.extra,h=a&&a.length,u=Kh(l);qe(i,t,o!=null?33639248:67324752),t+=4,o!=null&&(i[t++]=20,i[t++]=e.os),i[t]=20,t+=2,i[t++]=e.flag<<1|(r<0&&8),i[t++]=s&&8,i[t++]=e.compression&255,i[t++]=e.compression>>8;var f=new Date(e.mtime==null?Date.now():e.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Wl(10),qe(i,t,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,r!=-1&&(qe(i,t,e.crc),qe(i,t+4,r<0?-r-2:r),qe(i,t+8,e.size)),qe(i,t+12,c),qe(i,t+14,u),t+=16,o!=null&&(qe(i,t,h),qe(i,t+6,e.attrs),qe(i,t+10,o),t+=14),i.set(n,t),t+=c,u)for(var m in l){var v=l[m],g=v.length;qe(i,t,+m),qe(i,t+2,g),i.set(v,t+4),t+=4+g}return h&&(i.set(a,t),t+=h),t},Qv=function(i,t,e,n,s){qe(i,t,101010256),qe(i,t+8,e),qe(i,t+10,e),qe(i,t+12,n),qe(i,t+16,s)};function kd(i,t){t||(t={});var e={},n=[];Hd(i,"",e,t);var s=0,r=0;for(var o in e){var a=e[o],c=a[0],l=a[1],h=l.level==0?0:8,u=fo(o),f=u.length,d=l.comment,m=d&&fo(d),v=m&&m.length,g=Kh(l.extra);f>65535&&Wl(11);var p=h?Zv(c,l):c,S=p.length,M=Yv();M.p(c),n.push(zd(l,{size:c.length,crc:M.d(),c:p,f:u,m,u:f!=o.length||m&&d.length!=v,o:s,compression:h})),s+=30+f+g+S,r+=76+2*(f+g)+(v||0)+S}for(var _=new Ye(r+22),b=s,E=r-s,A=0;A<n.length;++A){var u=n[A];Id(_,u.o,u,u.f,u.u,u.c.length);var x=30+u.f.length+Kh(u.extra);_.set(u.c,u.o+x),Id(_,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+x+(u.m?u.m.length:0)}return Qv(_,s,n.length,E,b),_}var je=class{constructor(t,e="",n=[],s=[]){this.name=t,this.type=e,this.metadata=n,this.properties=s,this.children=[]}addMetadata(t,e){this.metadata.push({key:t,value:e})}addProperty(t,e=[]){this.properties.push({property:t,metadata:e})}addChild(t){this.children.push(t)}toString(t=0){let e="	".repeat(t),n=this.metadata.map(h=>{let u=h.key,f=h.value;if(Array.isArray(f)){let d=[];return d.push(`${u} = {`),f.forEach(m=>{d.push(`${e}		${m}`)}),d.push(`${e}	}`),d.join(`
`)}else return`${u} = ${f}`}),s=n.length?` (
${n.map(h=>`${e}	${h}`).join(`
`)}
${e})`:"",r=this.properties.map(h=>{let u=h.property.replace(/\n/g,`
`+e+"	"),f=h.metadata.length?` (
${h.metadata.map(d=>`${e}		${d}`).join(`
`)}
${e}	)`:"";return`${e}	${u}${f}`}),o=this.children.map(h=>h.toString(t+1)),a=[];if(r.length>0&&a.push(...r),o.length>0){r.length>0&&a.push("");for(let h=0;h<o.length;h++)a.push(o[h]),h<o.length-1&&a.push("")}let c=a.join(`
`),l=this.type?this.type+" ":"";return`${e}def ${l}"${this.name}"${s}
${e}{
${c}
${e}}`}},ql=class{constructor(){this.textureUtils=null}setTextureUtils(t){this.textureUtils=t}parse(t,e,n,s){this.parseAsync(t,s).then(e).catch(n)}async parseAsync(t,e={}){e=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},e);let n=new Set,s={},r="model.usda";s[r]=null;let o=ty(t,e.animations);e.animationTracks=o;let a=new je("Root","Xform"),c=new je("Scenes","Scope");c.addMetadata("kind",'"sceneLibrary"'),a.addChild(c);let l="Scene",h=new je(l,"Xform");h.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${l}"`]),h.addMetadata("sceneName",`"${l}"`),e.includeAnchoringProperties&&(h.addProperty(`token preliminary:anchoring:type = "${e.ar.anchoring.type}"`),h.addProperty(`token preliminary:planeAnchoring:alignment = "${e.ar.planeAnchoring.alignment}"`)),c.addChild(h);let u,f={},d={};t.isScene?$d(t,h,f,n,s,e):Zd(t,h,f,n,s,e);let m=cy(f,d,e.quickLookCompatible),v=o.size>0?{fps:e.animationFrameRate,endTimeCode:ey(e.animations)*e.animationFrameRate}:null;u=Yd(v)+`
`+a.toString()+`

`+m.toString(),s[r]=fo(u),u=null;for(let p in d){let S=d[p];if(S.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");S=await this.textureUtils.decompress(S)}let M=jv(S.image,S.flipY,e.maxTextureSize),_=S.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",b=await new Promise(E=>M.toBlob(E,_));s[`textures/Texture_${p}.${qd(S)}`]=new Uint8Array(await b.arrayBuffer())}let g=0;for(let p in s){let S=s[p],M=34+p.length;g+=M;let _=g&63;if(_!==4){let b=64-_,E=new Uint8Array(b);s[p]=[S,{extra:{12345:E}}]}g=S.length}return kd(s,{level:0,mtime:new Date})}};function Xd(i,t){let e=i.name;return e=e.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(e)&&(e="_"+e),e===""&&(i.isCamera?e="Camera":e="Object"),t.has(e)&&(e=e+"_"+i.id),t.add(e),e}function qd(i){return i.userData.mimeType==="image/jpeg"?"jpg":"png"}function jv(i,t,e){if(typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas!="undefined"&&i instanceof OffscreenCanvas||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap){let n=e/Math.max(i.width,i.height),s=document.createElement("canvas");s.width=i.width*Math.min(1,n),s.height=i.height*Math.min(1,n);let r=s.getContext("2d");return t===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(i,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var ee=7;function Yd(i=null){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"${i?`
	startTimeCode = 0
	endTimeCode = ${i.endTimeCode}
	timeCodesPerSecond = ${i.fps}
	framesPerSecond = ${i.fps}`:""}
)
`}function ty(i,t){let e=new Map;for(let n=0;n<t.length;n++){let s=t[n];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=_e.parseTrackName(o.name),c=_e.findNode(i,a.nodeName);if(c==null)continue;let l=a.propertyName;if(l!=="position"&&l!=="quaternion"&&l!=="scale")continue;let h=e.get(c);h===void 0&&(h={},e.set(c,h)),h[l]=o}}return e}function ey(i){let t=0;for(let e=0;e<i.length;e++)i[e].duration>t&&(t=i[e].duration);return t}function Gd(i,t,e,n){let s=e.times,r=e.values,o=[];for(let a=0;a<s.length;a++){let c=a*3;o.push(`${(s[a]*n).toPrecision(ee)}: (${r[c].toPrecision(ee)}, ${r[c+1].toPrecision(ee)}, ${r[c+2].toPrecision(ee)})`)}return`${t} ${i}.timeSamples = {
	${o.join(`,
	`)},
}`}function ny(i,t){let e=i.times,n=i.values,s=[];for(let r=0;r<e.length;r++){let o=r*4;s.push(`${(e[r]*t).toPrecision(ee)}: (${n[o+3].toPrecision(ee)}, ${n[o].toPrecision(ee)}, ${n[o+1].toPrecision(ee)}, ${n[o+2].toPrecision(ee)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function $d(i,t,e,n,s,r){for(let o=0,a=i.children.length;o<a;o++)Zd(i.children[o],t,e,n,s,r)}function Zd(i,t,e,n,s,r){if(i.visible===!1&&r.onlyVisible===!0)return;let o;if(i.isMesh){let a=i.geometry,c=Array.isArray(i.material),l=c?i.material:[i.material];for(let u=0;u<l.length;u++){let f=l[u];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in e||(e[f.uuid]=f)}let h=l.map(u=>e[u.uuid]);if(c===!1){let u=`geometries/Geometry_${a.id}.usda`;if(!(u in s)){let f=ry(a);s[u]=fo(Yd()+`
`+f.toString())}}o=iy(i,a,h,n,r)}else i.isCamera?o=fy(i,n,r):o=Kd(i,n,r);t.addChild(o),$d(i,o,e,n,s,r)}function Jd(i,t,e){let n=e.animationTracks.get(t),s=t.pivot!==null;if(!s&&n===void 0){let l=sy(t.matrix);i.addProperty(`matrix4d xformOp:transform = ${l}`),i.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=e.animationFrameRate,o=t.position,a=t.quaternion,c=t.scale;if(n!==void 0&&n.position!==void 0?i.addProperty(Gd("xformOp:translate","float3",n.position,r)):i.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(ee)}, ${o.y.toPrecision(ee)}, ${o.z.toPrecision(ee)})`),s){let l=t.pivot;i.addProperty(`float3 xformOp:translate:pivot = (${l.x.toPrecision(ee)}, ${l.y.toPrecision(ee)}, ${l.z.toPrecision(ee)})`)}n!==void 0&&n.quaternion!==void 0?i.addProperty(ny(n.quaternion,r)):i.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(ee)}, ${a.x.toPrecision(ee)}, ${a.y.toPrecision(ee)}, ${a.z.toPrecision(ee)})`),n!==void 0&&n.scale!==void 0?i.addProperty(Gd("xformOp:scale","float3",n.scale,r)):i.addProperty(`float3 xformOp:scale = (${c.x.toPrecision(ee)}, ${c.y.toPrecision(ee)}, ${c.z.toPrecision(ee)})`),s?i.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):i.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function Kd(i,t,e){let n=Xd(i,t);i.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i);let s=new je(n,"Xform");return Jd(s,i,e),s}function iy(i,t,e,n,s){let r=Kd(i,n,s);return e.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${t.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${e[0].id}>`)):r.addChild(Qd(t,e)),r}function sy(i){let t=i.elements;return`( ${Xl(t,0)}, ${Xl(t,4)}, ${Xl(t,8)}, ${Xl(t,12)} )`}function Xl(i,t){return`(${i[t+0]}, ${i[t+1]}, ${i[t+2]}, ${i[t+3]})`}function ry(i){let t=new je("Geometry"),e=Qd(i);return t.addChild(e),t}function Qd(i,t=null){let e="Geometry",n=i.attributes,s=n.position.count,r=new je(e,"Mesh");r.addProperty(`int[] faceVertexCounts = [${oy(i)}]`),r.addProperty(`int[] faceVertexIndices = [${ay(i)}]`),r.addProperty(`normal3f[] normals = [${eu(n.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${eu(n.position,s)}]`);for(let a=0;a<4;a++){let c=a>0?a:"",l=n["uv"+c];l!==void 0&&r.addProperty(`texCoord2f[] primvars:st${c} = [${ly(l)}]`,['interpolation = "vertex"'])}let o=n.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${eu(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),t!==null){let a=i.groups,c=(i.index!==null?i.index.count:n.position.count)/3;for(let l=0;l<a.length;l++){let h=a[l],u=t[h.materialIndex];if(u===void 0)continue;let f=Math.floor(h.start/3),d=Math.min(f+Math.floor(h.count/3),c),m=[];for(let g=f;g<d;g++)m.push(g);let v=new je(`subset_${l}`,"GeomSubset");v.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),v.addProperty('uniform token elementType = "face"'),v.addProperty('uniform token familyName = "materialBind"'),v.addProperty(`int[] indices = [${m.join(", ")}]`),v.addProperty(`rel material:binding = </Materials/Material_${u.id}>`),r.addChild(v)}}return r}function oy(i){let t=i.index!==null?i.index.count:i.attributes.position.count;return Array(t/3).fill(3).join(", ")}function ay(i){let t=i.index,e=[];if(t!==null)for(let n=0;n<t.count;n++)e.push(t.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)e.push(s)}return e.join(", ")}function eu(i,t){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");let e=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),o=i.getZ(n);e.push(`(${s.toPrecision(ee)}, ${r.toPrecision(ee)}, ${o.toPrecision(ee)})`)}return e.join(", ")}function ly(i){let t=[];for(let e=0;e<i.count;e++){let n=i.getX(e),s=i.getY(e);t.push(`(${n.toPrecision(ee)}, ${1-s.toPrecision(ee)})`)}return t.join(", ")}function cy(i,t,e=!1){let n=new je("Materials");for(let s in i){let r=i[s];n.addChild(hy(r,t,e))}return n}function hy(i,t,e=!1){var o,a,c,l;let n=new je(`Material_${i.id}`,"Material");function s(h,u,f){let d=h.source.id+"_"+h.flipY;t[d]=h;let m=h.channel>0?"st"+h.channel:"st",v={1e3:"repeat",1001:"clamp",1002:"mirror"},g=h.repeat.clone(),p=h.offset.clone(),S=h.rotation,M=Math.sin(S),_=Math.cos(S);p.y=1-p.y-g.y,e?(p.x=p.x/g.x,p.y=p.y/g.y,p.x+=M/g.x,p.y+=_-1):(p.x+=M*g.x,p.y+=(1-_)*g.y);let b=new je(`PrimvarReader_${u}`,"Shader");b.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),b.addProperty("float2 inputs:fallback = (0.0, 0.0)"),b.addProperty(`string inputs:varname = "${m}"`),b.addProperty("float2 outputs:result");let E=new je(`Transform2d_${u}`,"Shader");E.addProperty('uniform token info:id = "UsdTransform2d"'),E.addProperty(`float2 inputs:in.connect = </Materials/Material_${i.id}/PrimvarReader_${u}.outputs:result>`),E.addProperty(`float inputs:rotation = ${(S*(180/Math.PI)).toFixed(ee)}`),E.addProperty(`float2 inputs:scale = ${Wd(g)}`),E.addProperty(`float2 inputs:translation = ${Wd(p)}`),E.addProperty("float2 outputs:result");let A=new je(`Texture_${h.id}_${u}`,"Shader");if(A.addProperty('uniform token info:id = "UsdUVTexture"'),A.addProperty(`asset inputs:file = @textures/Texture_${d}.${qd(h)}@`),A.addProperty(`float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${u}.outputs:result>`),f!==void 0){let x=u==="diffuse"?i.opacity:1;A.addProperty(`float4 inputs:scale = ${uy(f,x)}`)}if(u==="normal"){let x=i.normalScale.x;A.addProperty(`float4 inputs:scale = (${2*x}, ${2*x}, 2, 1)`),A.addProperty(`float4 inputs:bias = (${-x}, ${-x}, -1, 0)`)}return A.addProperty(`token inputs:sourceColorSpace = "${h.colorSpace===kn?"raw":"sRGB"}"`),A.addProperty(`token inputs:wrapS = "${v[h.wrapS]}"`),A.addProperty(`token inputs:wrapT = "${v[h.wrapT]}"`),A.addProperty("float outputs:r"),A.addProperty("float outputs:g"),A.addProperty("float outputs:b"),A.addProperty("float3 outputs:rgb"),(i.transparent||i.alphaTest>0)&&A.addProperty("float outputs:a"),[b,E,A]}i.side===We&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i);let r=new je("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),i.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${i.alphaTest}`)),s(i.map,"diffuse",i.color).forEach(u=>n.addChild(u))):r.addProperty(`color3f inputs:diffuseColor = ${Vd(i.color)}`),i.emissive){let h=(o=i.emissiveIntensity)!=null?o:1;if(i.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`);let u=new It(i.emissive.r*h,i.emissive.g*h,i.emissive.b*h);s(i.emissiveMap,"emissive",u).forEach(d=>n.addChild(d))}else i.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${Vd(i.emissive)}`)}if(i.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),s(i.normalMap,"normal").forEach(u=>n.addChild(u))),i.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`);let h=(a=i.aoMapIntensity)!=null?a:1,u=new It(h,h,h);s(i.aoMap,"occlusion",u).forEach(d=>n.addChild(d))}if(i.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`);let h=new It(i.roughness,i.roughness,i.roughness);s(i.roughnessMap,"roughness",h).forEach(f=>n.addChild(f))}else r.addProperty(`float inputs:roughness = ${(c=i.roughness)!=null?c:1}`);if(i.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`);let h=new It(i.metalness,i.metalness,i.metalness);s(i.metalnessMap,"metallic",h).forEach(f=>n.addChild(f))}else r.addProperty(`float inputs:metallic = ${(l=i.metalness)!=null?l:0}`);if(i.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(i.alphaMap,"opacity").forEach(u=>n.addChild(u))):r.addProperty(`float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial){if(i.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatMap.id}_clearcoat.outputs:r>`);let h=new It(i.clearcoat,i.clearcoat,i.clearcoat);s(i.clearcoatMap,"clearcoat",h).forEach(f=>n.addChild(f))}else r.addProperty(`float inputs:clearcoat = ${i.clearcoat}`);if(i.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let h=new It(i.clearcoatRoughness,i.clearcoatRoughness,i.clearcoatRoughness);s(i.clearcoatRoughnessMap,"clearcoatRoughness",h).forEach(f=>n.addChild(f))}else r.addProperty(`float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${i.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),n.addChild(r),n.addProperty(`token outputs:surface.connect = </Materials/Material_${i.id}/PreviewSurface.outputs:surface>`),n}function Vd(i){return`(${i.r}, ${i.g}, ${i.b})`}function uy(i,t=1){return`(${i.r}, ${i.g}, ${i.b}, ${t})`}function Wd(i){return`(${i.x}, ${i.y})`}function fy(i,t,e){let n=Xd(i,t);i.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i);let s=new je(n,"Camera");Jd(s,i,e);let r=i.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${i.near.toPrecision(ee)}, ${i.far.toPrecision(ee)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;i.isOrthographicCamera?a=((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(ee):a=i.getFilmWidth().toPrecision(ee),s.addProperty(`float horizontalAperture = ${a}`);let c;if(i.isOrthographicCamera?c=((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(ee):c=i.getFilmHeight().toPrecision(ee),s.addProperty(`float verticalAperture = ${c}`),i.isPerspectiveCamera){let l=i.getFocalLength().toPrecision(ee);s.addProperty(`float focalLength = ${l}`);let h=i.focus.toPrecision(ee);s.addProperty(`float focusDistance = ${h}`)}return s}function dy(){try{let i=document.createElement("a");return!!(i.relList&&i.relList.supports&&i.relList.supports("ar"))}catch{return!1}}function py(i){let t=new fi,e=new Gt;t.add(e);let n=lo(e,i,Rn.low);e.remove(n.dog);let s=[];return e.traverse(r=>{if(r.isInstancedMesh){s.push(r);return}if(!r.isMesh)return;let o=a=>a.isMeshStandardMaterial?a:new de({color:a.color?a.color.clone():16777215,map:a.map||null,transparent:!!a.transparent,opacity:a.opacity==null?1:a.opacity,roughness:.8,side:a.side});r.material=Array.isArray(r.material)?r.material.map(o):o(r.material)}),s.forEach(r=>r.parent&&r.parent.remove(r)),e.position.set(-i.W/2,0,-i.H/2),t.updateMatrixWorld(!0),new ql().parseAsync(t,{quickLookCompatible:!0,maxTextureSize:512}).then(r=>new Blob([r],{type:"model/vnd.usdz+zip"}))}Gh(bd);Gh(wd||{});export{Ov as arSupported,Tv as hasScene,Nv as mount,Bv as mountCourse,py as quickLookBlob,dy as quickLookOK,zv as startAR};
