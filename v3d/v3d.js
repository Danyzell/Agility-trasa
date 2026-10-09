var gp=Object.defineProperty;var xp=(i,t)=>{for(var e in t)gp(i,e,{get:t[e],enumerable:!0})};var tf=0,Lc=1,ef=2;var ji=1,Na=2,Gs=3,jn=0,ze=1,Ue=2,ti=0,Vs=1,Dc=2,Nc=3,Uc=4,nf=5;var ts=100,sf=101,rf=102,of=103,af=104,lf=200,cf=201,hf=202,uf=203,Fc=204,Bc=205,ff=206,df=207,pf=208,mf=209,gf=210,xf=211,_f=212,yf=213,vf=214,Yo=0,$o=1,Zo=2,Ps=3,Jo=4,Ko=5,Qo=6,jo=7,Ua=0,Mf=1,Sf=2,kn=0,Oc=1,zc=2,Hc=3,qr=4,kc=5,Gc=6,Vc=7;var Wc=300,Ni=301,es=302,Fa=303,Ba=304,Yr=306,zn=1e3,$n=1001,ta=1002,Xe=1003,bf=1004;var $r=1005;var Ye=1006,Oa=1007;var Ui=1008;var fn=1009,Xc=1010,qc=1011,Ws=1012,za=1013,Gn=1014,An=1015,Vn=1016,Ha=1017,ka=1018,Xs=1020,Yc=35902,$c=35899,Zc=1021,Jc=1022,Rn=1023,Zn=1026,Fi=1027,Ga=1028,Va=1029,Bi=1030,Wa=1031;var Xa=1033,Zr=33776,Jr=33777,Kr=33778,Qr=33779,qa=35840,Ya=35841,$a=35842,Za=35843,Ja=36196,Ka=37492,Qa=37496,ja=37488,tl=37489,jr=37490,el=37491,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,hl=37816,ul=37817,fl=37818,dl=37819,pl=37820,ml=37821,gl=36492,xl=36494,_l=36495,yl=36283,vl=36284,to=36285,Ml=36286;var vr=2300,ea=2301,Xo=2302,Ec=2303,wc=2400,Tc=2401,Ac=2402;var Ef=3200;var eo=0,wf=1,Wn="",Ce="srgb",Mr="srgb-linear",Sr="linear",pe="srgb";var qo=7680;var Tf=519,Af=512,Rf=513,Cf=514,Sl=515,Pf=516,If=517,bl=518,Lf=519,Kc=35044,El=35048;var Qc="300 es",On=2e3,Is=2001;function _p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Df(){let i=br("canvas");return i.style.display="block",i}var yu={},Ls=null;function Er(...i){let t="THREE."+i.shift();Ls?Ls("log",t,...i):console.log(t,...i)}function Nf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Nf(i);let t="THREE."+i.shift();if(Ls)Ls("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=Nf(i);let t="THREE."+i.shift();if(Ls)Ls("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xi(...i){let t=i.join(" ");t in yu||(yu[t]=!0,Ot(...i))}function Uf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ff={[Yo]:$o,[Zo]:Qo,[Jo]:jo,[Ps]:Ko,[$o]:Yo,[Qo]:Zo,[jo]:Jo,[Ko]:Ps},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=1234567,gr=Math.PI/180,Ds=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function jc(i,t){return(i%t+t)%t}function vp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mp(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function Sp(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function bp(i,t=1){return t-Math.abs(jc(i,t*2)-t)}function Ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ap(i,t){return i+Math.random()*(t-i)}function Rp(i){return i*(.5-Math.random())}function Cp(i){i!==void 0&&(vu=i);let t=vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pp(i){return i*gr}function Ip(i){return i*Ds}function Lp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Up(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var th={DEG2RAD:gr,RAD2DEG:Ds,generateUUID:hi,clamp:Kt,euclideanModulo:jc,mapLinear:vp,inverseLerp:Mp,lerp:xr,damp:Sp,pingpong:bp,smoothstep:Ep,smootherstep:wp,randInt:Tp,randFloat:Ap,randFloatSpread:Rp,seededRandom:Cp,degToRad:Pp,radToDeg:Ip,isPowerOfTwo:Lp,ceilPowerOfTwo:Dp,floorPowerOfTwo:Np,setQuaternionFromProperEuler:Up,normalize:xe,denormalize:Bn},oh=class oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var Et=oh,qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(u!==_||c!==f||l!==d||h!==m){let x=c*f+l*d+h*m+u*_;x<0&&(f=-f,d=-d,m=-m,_=-_,x=-x);let p=1-a;if(x<.9995){let S=Math.acos(x),T=Math.sin(S);p=Math.sin(p*S)/T,a=Math.sin(a*S)/T,c=c*p+f*a,l=l*p+d*a,h=h*p+m*a,u=u*p+_*a}else{c=c*p+f*a,l=l*p+d*a,h=h*p+m*a,u=u*p+_*a;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ql.copy(this).projectOnVector(t),this.sub(Ql)}reflect(t){return this.sub(Ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var N=ah,Ql=new N,Mu=new qe,lh=class lh{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],x=s[3],p=s[6],S=s[1],T=s[4],y=s[7],b=s[2],E=s[5],R=s[8];return r[0]=o*_+a*S+c*b,r[3]=o*x+a*T+c*E,r[6]=o*p+a*y+c*R,r[1]=l*_+h*S+u*b,r[4]=l*x+h*T+u*E,r[7]=l*p+h*y+u*R,r[2]=f*_+d*S+m*b,r[5]=f*x+d*T+m*E,r[8]=f*p+d*y+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(t,e)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-t)),this}translate(t,e){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var Gt=lh,jl=new Gt,Su=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fp(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:Sr,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var te=Fp();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{us===void 0&&(us=br("canvas")),us.width=t.width,us.height=t.height;let s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tc(s[o].image)):r.push(tc(s[o]))}else r=tc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function tc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Op=0,ec=new N,an=class i extends Jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=Ye,o=Ui,a=Rn,c=fn,l=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=hi(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zn:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zn:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Wc;an.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],_=c[2],x=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+x)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,y=(d+1)/2,b=(p+1)/2,E=(h+f)/4,R=(u+_)/4,g=(m+x)/4;return T>y&&T>b?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=R/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=g/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=g/r),this.set(n,s,r,e),this}let S=Math.sqrt((x-m)*(x-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(x-m)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var Re=ch,ia=class extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new an(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sa=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Da=class Da{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,x)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zp,t,Hp)}lookAt(t,e,n){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Si.crossVectors(n,gn),Si.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Si.crossVectors(n,gn)),Si.normalize(),_o.crossVectors(gn,Si),s[0]=Si.x,s[4]=_o.x,s[8]=gn.x,s[1]=Si.y,s[5]=_o.y,s[9]=gn.y,s[2]=Si.z,s[6]=_o.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],x=n[10],p=n[14],S=n[3],T=n[7],y=n[11],b=n[15],E=s[0],R=s[4],g=s[8],M=s[12],A=s[1],P=s[5],C=s[9],H=s[13],L=s[2],D=s[6],z=s[10],B=s[14],q=s[3],U=s[7],O=s[11],F=s[15];return r[0]=o*E+a*A+c*L+l*q,r[4]=o*R+a*P+c*D+l*U,r[8]=o*g+a*C+c*z+l*O,r[12]=o*M+a*H+c*B+l*F,r[1]=h*E+u*A+f*L+d*q,r[5]=h*R+u*P+f*D+d*U,r[9]=h*g+u*C+f*z+d*O,r[13]=h*M+u*H+f*B+d*F,r[2]=m*E+_*A+x*L+p*q,r[6]=m*R+_*P+x*D+p*U,r[10]=m*g+_*C+x*z+p*O,r[14]=m*M+_*H+x*B+p*F,r[3]=S*E+T*A+y*L+b*q,r[7]=S*R+T*P+y*D+b*U,r[11]=S*g+T*C+y*z+b*O,r[15]=S*M+T*H+y*B+b*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],x=t[11],p=t[15],S=c*d-l*f,T=a*d-l*u,y=a*f-c*u,b=o*d-l*h,E=o*f-c*h,R=o*u-a*h;return e*(_*S-x*T+p*y)-n*(m*S-x*b+p*E)+s*(m*T-_*b+p*R)-r*(m*y-_*E+x*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],x=t[14],p=t[15],S=e*a-n*o,T=e*c-s*o,y=e*l-r*o,b=n*c-s*a,E=n*l-r*a,R=s*l-r*c,g=h*_-u*m,M=h*x-f*m,A=h*p-d*m,P=u*x-f*_,C=u*p-d*_,H=f*p-d*x,L=S*H-T*C+y*P+b*A-E*M+R*g;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return t[0]=(a*H-c*C+l*P)*D,t[1]=(s*C-n*H-r*P)*D,t[2]=(_*R-x*E+p*b)*D,t[3]=(f*E-u*R-d*b)*D,t[4]=(c*A-o*H-l*M)*D,t[5]=(e*H-s*A+r*M)*D,t[6]=(x*y-m*R-p*T)*D,t[7]=(h*R-f*y+d*T)*D,t[8]=(o*C-a*A+l*g)*D,t[9]=(n*A-e*C-r*g)*D,t[10]=(m*E-_*y+p*S)*D,t[11]=(u*y-h*E-d*S)*D,t[12]=(a*M-o*P-c*g)*D,t[13]=(e*P-n*M+s*g)*D,t[14]=(_*T-m*b-x*S)*D,t[15]=(h*b-u*T+f*S)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,_=o*h,x=o*u,p=a*u,S=c*l,T=c*h,y=c*u,b=n.x,E=n.y,R=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+y)*b,s[2]=(m-T)*b,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+p))*E,s[6]=(x+S)*E,s[7]=0,s[8]=(m+T)*R,s[9]=(x-S)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fs.set(s[0],s[1],s[2]).length(),a=fs.set(s[4],s[5],s[6]).length(),c=fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);let l=1/o,h=1/a,u=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=On,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===On)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Is)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=On,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===On)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Is)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Da.prototype.isMatrix4=!0;var se=Da,fs=new N,Dn=new se,zp=new N(0,0,0),Hp=new N(1,1,1),Si=new N,_o=new N,gn=new N,Eu=new se,wu=new qe,un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kp=0,Tu=new N,ds=new qe,si=new se,yo=new N,or=new N,Gp=new N,Vp=new qe,Au=new N(1,0,0),Ru=new N(0,1,0),Cu=new N(0,0,1),Pu={type:"added"},Wp={type:"removed"},ps={type:"childadded",child:null},nc={type:"childremoved",child:null},be=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new un,n=new qe,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Gt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Tu.copy(t).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(or,yo,this.up):si.lookAt(yo,or,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(si),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),ps.child=t,this.dispatchEvent(ps),ps.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wp),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};be.DEFAULT_UP=new N(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let x=e.getJointPose(_,n),p=this._getHandJoint(l,_);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ic(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=jc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ic(o,r,t+1/3),this.g=ic(o,r,t),this.b=ic(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return te.workingToColorSpace(Qe.copy(this),t),Math.round(Kt(Qe.r*255,0,255))*65536+Math.round(Kt(Qe.g*255,0,255))*256+Math.round(Kt(Qe.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ce){te.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(vo);let n=xr(bi.h,vo.h,e),s=xr(bi.s,vo.s,e),r=xr(bi.l,vo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new It;It.NAMES=Bf;var Ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fi=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new N,ri=new N,sc=new N,oi=new N,ms=new N,gs=new N,Iu=new N,rc=new N,oc=new N,ac=new N,lc=new Re,cc=new Re,hc=new Re,ci=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ri.subVectors(n,e),sc.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(ri),c=Nn.dot(sc),l=ri.dot(ri),h=ri.dot(sc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(t,e),cc.fromBufferAttribute(t,n),hc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lc,r.x),o.addScaledVector(cc,r.y),o.addScaledVector(hc,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ri.subVectors(t,e),Nn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ms.subVectors(s,n),gs.subVectors(r,n),rc.subVectors(t,n);let c=ms.dot(rc),l=gs.dot(rc);if(c<=0&&l<=0)return e.copy(n);oc.subVectors(t,s);let h=ms.dot(oc),u=gs.dot(oc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ms,o);ac.subVectors(t,r);let d=ms.dot(ac),m=gs.dot(ac);if(m>=0&&d<=m)return e.copy(r);let _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(gs,a);let x=h*m-d*u;if(x<=0&&u-h>=0&&d-m>=0)return Iu.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Iu,a);let p=1/(x+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_n=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),So.subVectors(this.max,ar),xs.subVectors(t.a,ar),_s.subVectors(t.b,ar),ys.subVectors(t.c,ar),Ei.subVectors(_s,xs),wi.subVectors(ys,_s),ki.subVectors(xs,ys);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-ki.z,ki.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,ki.z,0,-ki.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-ki.y,ki.x,0];return!uc(e,xs,_s,ys,So)||(e=[1,0,0,0,1,0,0,0,1],!uc(e,xs,_s,ys,So))?!1:(bo.crossVectors(Ei,wi),e=[bo.x,bo.y,bo.z],uc(e,xs,_s,ys,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ai=[new N,new N,new N,new N,new N,new N,new N,new N],Un=new N,Mo=new _n,xs=new N,_s=new N,ys=new N,Ei=new N,wi=new N,ki=new N,ar=new N,So=new N,bo=new N,Gi=new N;function uc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var De=new N,Eo=new Et,qp=0,ce=class extends Jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yp=new _n,lr=new N,fc=new N,Kn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(fc)),this.expandByPoint(lr.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$p=0,wn=new se,dc=new be,vs=new N,xn=new _n,cr=new _n,We=new N,ae=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_p(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(xn.min,cr.min),xn.expandByPoint(We),We.addVectors(xn.max,cr.max),xn.expandByPoint(We)):(xn.expandByPoint(cr.min),xn.expandByPoint(cr.max))}xn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)We.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(t,l),We.add(vs)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let g=0;g<n.count;g++)a[g]=new N,c[g]=new N;let l=new N,h=new N,u=new N,f=new Et,d=new Et,m=new Et,_=new N,x=new N;function p(g,M,A){l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,A),f.fromBufferAttribute(r,g),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,A),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(P),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[g].add(_),a[M].add(_),a[A].add(_),c[g].add(x),c[M].add(x),c[A].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let g=0,M=S.length;g<M;++g){let A=S[g],P=A.start,C=A.count;for(let H=P,L=P+C;H<L;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let T=new N,y=new N,b=new N,E=new N;function R(g){b.fromBufferAttribute(s,g),E.copy(b);let M=a[g];T.copy(M),T.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(E,M);let P=y.dot(c[g])<0?-1:1;o.setXYZW(g,T.x,T.y,T.z,P)}for(let g=0,M=S.length;g<M;++g){let A=S[g],P=A.start,C=A.count;for(let H=P,L=P+C;H<L;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),_=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let _=0,x=c.length;_<x;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new ce(f,h,u)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},on=new N,Fs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pc=new N,Zp=new N,Jp=new Gt,Fn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pc.subVectors(n,e).cross(Zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jp.getNormalMatrix(t),s=this.coplanarPoint(pc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Kp=0,yn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Vs,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Bc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ai=class extends yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ms,hr=new N,Ss=new N,bs=new N,Es=new Et,ur=new Et,Of=new se,wo=new N,fr=new N,To=new N,Lu=new Et,mc=new Et,Du=new Et,qi=class extends be{constructor(t=new Ai){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pr(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Fs(n,3,0,!1)),Ms.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new Et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Of.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ao(wo.set(-.5,-.5,0),bs,o,Ss,s,r),Ao(fr.set(.5,-.5,0),bs,o,Ss,s,r),Ao(To.set(.5,.5,0),bs,o,Ss,s,r),Lu.set(0,0),mc.set(1,0),Du.set(1,1);let a=t.ray.intersectTriangle(wo,fr,To,!1,hr);if(a===null&&(Ao(fr.set(-.5,.5,0),bs,o,Ss,s,r),mc.set(0,1),a=t.ray.intersectTriangle(wo,To,fr,!1,hr),a===null))return;let c=t.ray.origin.distanceTo(hr);c<t.near||c>t.far||e.push({distance:c,point:hr.clone(),uv:ci.getInterpolation(hr,wo,fr,To,Lu,mc,Du,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ao(i,t,e,n,s,r){Es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Es.x-s*Es.y,ur.y=s*Es.x+r*Es.y):ur.copy(Es),i.copy(t),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(Of)}var li=new N,gc=new N,Ro=new N,Co=new N,Bs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gc.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Co.copy(this.origin).sub(gc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=Co.dot(this.direction),c=-Co.dot(Ro),l=Co.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(Ro,f),d}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,_=e.y-o.y,x=e.z-o.z,p=n.x-o.x,S=n.y-o.y,T=n.z-o.z,y=Math.abs(c),b=Math.abs(l),E=Math.abs(h),R,g,M,A,P,C,H,L,D,z,B,q;if(y>=b&&y>=E?(M=c,C=u,D=m,q=p,c>=0?(R=l,g=h,A=f,P=d,H=_,L=x,z=S,B=T):(R=h,g=l,A=d,P=f,H=x,L=_,z=T,B=S)):b>=E?(M=l,C=f,D=_,q=S,l>=0?(R=h,g=c,A=d,P=u,H=x,L=m,z=T,B=p):(R=c,g=h,A=u,P=d,H=m,L=x,z=p,B=T)):(M=h,C=d,D=x,q=T,h>=0?(R=c,g=l,A=u,P=f,H=m,L=_,z=p,B=S):(R=l,g=c,A=f,P=u,H=_,L=m,z=S,B=p)),M===0)return null;let U=R/M,O=g/M,F=1/M,K=A-U*C,j=P-O*C,ht=H-U*D,at=L-O*D,rt=z-U*q,Y=B-O*q,W=rt*at-Y*ht,it=K*Y-j*rt,ft=ht*j-at*K;if(s){if(W<0||it<0||ft<0)return null}else if((W<0||it<0||ft<0)&&(W>0||it>0||ft>0))return null;let lt=W+it+ft;if(lt===0)return null;let dt=F*(W*C+it*D+ft*q);return(lt>0?dt<0:dt>0)?null:this.at(dt/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Nu=new se,Vi=new Bs,Po=new Kn,Uu=new N,Io=new N,Lo=new N,Do=new N,xc=new N,No=new N,Fu=new N,Uo=new N,ct=class extends be{constructor(t=new ae,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(xc.fromBufferAttribute(u,t),o?No.addScaledVector(xc,h):No.addScaledVector(xc.sub(e),h))}e.add(No)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Po.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Po,Uu)===null||Vi.origin.distanceToSquared(Uu)>(t.far-t.near)**2))&&(Nu.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let x=f[m],p=o[x.materialIndex],S=Math.max(x.start,d.start),T=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let y=S,b=T;y<b;y+=3){let E=a.getX(y),R=a.getX(y+1),g=a.getX(y+2);s=Fo(this,p,t,n,l,h,u,E,R,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){let S=a.getX(x),T=a.getX(x+1),y=a.getX(x+2);s=Fo(this,o,t,n,l,h,u,S,T,y),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let x=f[m],p=o[x.materialIndex],S=Math.max(x.start,d.start),T=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let y=S,b=T;y<b;y+=3){let E=y,R=y+1,g=y+2;s=Fo(this,p,t,n,l,h,u,E,R,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){let S=x,T=x+1,y=x+2;s=Fo(this,o,t,n,l,h,u,S,T,y),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Qp(i,t,e,n,s,r,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===jn,a),c===null)return null;Uo.copy(a),Uo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Uo);return l<e.near||l>e.far?null:{distance:l,point:Uo.clone(),object:i}}function Fo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Io),i.getVertexPosition(c,Lo),i.getVertexPosition(l,Do);let h=Qp(i,t,e,n,Io,Lo,Do,Fu);if(h){let u=new N;ci.getBarycoord(Fu,Io,Lo,Do,u),s&&(h.uv=ci.getInterpolatedAttribute(s,a,c,l,u,new Et)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,c,l,u,new Et)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};ci.getNormal(Io,Lo,Do,f.normal),h.face=f,h.barycoord=u}return h}var Ir=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Xe,h=Xe,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new se,Bu=new se,Bo=[],Ou=new _n,jp=new se,dr=new ct,pr=new Kn,Qn=class extends ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),Ou.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Ou)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),pr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Bu.multiplyMatrices(n,ws),dr.matrixWorld=Bu,dr.raycast(t,Bo);for(let o=0,a=Bo.length;o<a;o++){let c=Bo[o];c.instanceId=r,c.object=this,e.push(c)}Bo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ir(new Float32Array(s*this.count),s,this.count,Ga,An));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wi=new Kn,tm=new Et(.5,.5),Oo=new N,zs=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],x=r[10],p=r[11],S=r[12],T=r[13],y=r[14],b=r[15];if(s[0].setComponents(l-o,d-h,p-m,b-S).normalize(),s[1].setComponents(l+o,d+h,p+m,b+S).normalize(),s[2].setComponents(l+a,d+u,p+_,b+T).normalize(),s[3].setComponents(l-a,d-u,p-_,b-T).normalize(),n)s[4].setComponents(c,f,x,y).normalize(),s[5].setComponents(l-c,d-f,p-x,b-y).normalize();else if(s[4].setComponents(l-c,d-f,p-x,b-y).normalize(),e===On)s[5].setComponents(l+c,d+f,p+x,b+y).normalize();else if(e===Is)s[5].setComponents(c,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);let e=tm.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yi=class extends yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ra=new N,oa=new N,zu=new se,mr=new Bs,zo=new Kn,_c=new N,Hu=new N,Hs=class extends be{constructor(t=new ae,e=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ra.fromBufferAttribute(e,s-1),oa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ra.distanceTo(oa);t.setAttribute("lineDistance",new Vt(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;zu.copy(s).invert(),mr.copy(t.ray).applyMatrix4(zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,x=m-1;_<x;_+=l){let p=h.getX(_),S=h.getX(_+1),T=Ho(this,t,mr,c,p,S,_);T&&e.push(T)}if(this.isLineLoop){let _=h.getX(m-1),x=h.getX(d),p=Ho(this,t,mr,c,_,x,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,x=m-1;_<x;_+=l){let p=Ho(this,t,mr,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=Ho(this,t,mr,c,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ho(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ra.fromBufferAttribute(a,s),oa.fromBufferAttribute(a,r),e.distanceSqToSegment(ra,oa,_c,Hu)>n)return;_c.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_c);if(!(l<t.near||l>t.far))return{distance:l,point:Hu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ku=new N,Gu=new N,Lr=class extends Hs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ku.fromBufferAttribute(e,s),Gu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ku.distanceTo(Gu);t.setAttribute("lineDistance",new Vt(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var aa=class extends yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vu=new se,Rc=new Bs,ko=new Kn,Go=new N,Dr=class extends be{constructor(t=new ae,e=new aa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;Vu.copy(s).invert(),Rc.copy(t.ray).applyMatrix4(Vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,_=d;m<_;m++){let x=l.getX(m);Go.fromBufferAttribute(u,x),Wu(Go,x,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Go.fromBufferAttribute(u,m),Wu(Go,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wu(i,t,e,n,s,r,o){let a=Rc.distanceSqToPoint(i);if(a<e){let c=new N;Rc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Nr=class extends an{constructor(t=[],e=Ni,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},di=class extends an{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends an{constructor(t,e,n=Gn,s,r,o,a=Xe,c=Xe,l,h=Zn,u=1){if(h!==Zn&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends Ri{constructor(t,e=Gn,n=Ni,s,r,o=Xe,a=Xe,c,l=Zn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ur=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Wt=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function m(_,x,p,S,T,y,b,E,R,g,M){let A=y/R,P=b/g,C=y/2,H=b/2,L=E/2,D=R+1,z=g+1,B=0,q=0,U=new N;for(let O=0;O<z;O++){let F=O*P-H;for(let K=0;K<D;K++){let j=K*A-C;U[_]=j*S,U[x]=F*T,U[p]=L,l.push(U.x,U.y,U.z),U[_]=0,U[x]=0,U[p]=E>0?1:-1,h.push(U.x,U.y,U.z),u.push(K/R),u.push(1-O/g),B+=1}}for(let O=0;O<g;O++)for(let F=0;F<R;F++){let K=f+F+D*O,j=f+F+D*(O+1),ht=f+(F+1)+D*(O+1),at=f+(F+1)+D*O;c.push(K,j,at),c.push(j,ht,at),q+=6}a.addGroup(d,q,M),d+=q,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$i=class i extends ae{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=n*2+r,_=s+1,x=new N,p=new N;for(let S=0;S<=m;S++){let T=0,y=0,b=0,E=0;if(S<=n){let M=S/n,A=M*Math.PI/2;y=-h-t*Math.cos(A),b=t*Math.sin(A),E=-t*Math.cos(A),T=M*u}else if(S<=n+r){let M=(S-n)/r;y=-h+M*e,b=t,E=0,T=u+M*f}else{let M=(S-n-r)/n,A=M*Math.PI/2;y=h+t*Math.sin(A),b=t*Math.cos(A),E=t*Math.sin(A),T=u+f+M*u}let R=Math.max(0,Math.min(1,T/d)),g=0;S===0?g=.5/s:S===m&&(g=-.5/s);for(let M=0;M<=s;M++){let A=M/s,P=A*Math.PI*2,C=Math.sin(P),H=Math.cos(P);p.x=-b*H,p.y=y,p.z=b*C,a.push(p.x,p.y,p.z),x.set(-b*H,E,b*C),x.normalize(),c.push(x.x,x.y,x.z),l.push(A+g,R)}if(S>0){let M=(S-1)*_;for(let A=0;A<s;A++){let P=M+A,C=M+A+1,H=S*_+A,L=S*_+A+1;o.push(P,C,H),o.push(C,L,H)}}}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Zi=class i extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new N,h=new Et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ee=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],x=n/2,p=0;S(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function S(){let y=new N,b=new N,E=0,R=(e-t)/n;for(let g=0;g<=r;g++){let M=[],A=g/r,P=A*(e-t)+t;for(let C=0;C<=s;C++){let H=C/s,L=H*c+a,D=Math.sin(L),z=Math.cos(L);b.x=P*D,b.y=-A*n+x,b.z=P*z,u.push(b.x,b.y,b.z),y.set(D,R,z).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-A),M.push(m++)}_.push(M)}for(let g=0;g<s;g++)for(let M=0;M<r;M++){let A=_[M][g],P=_[M+1][g],C=_[M+1][g+1],H=_[M][g+1];(t>0||M!==0)&&(h.push(A,P,H),E+=3),(e>0||M!==r-1)&&(h.push(P,C,H),E+=3)}l.addGroup(p,E,0),p+=E}function T(y){let b=m,E=new Et,R=new N,g=0,M=y===!0?t:e,A=y===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,x*A,0),f.push(0,A,0),d.push(.5,.5),m++;let P=m;for(let C=0;C<=s;C++){let L=C/s*c+a,D=Math.cos(L),z=Math.sin(L);R.x=M*z,R.y=x*A,R.z=M*D,u.push(R.x,R.y,R.z),f.push(0,A,0),E.x=D*.5+.5,E.y=z*.5*A+.5,d.push(E.x,E.y),m++}for(let C=0;C<s;C++){let H=b+C,L=P+C;y===!0?h.push(L,L+1,H):h.push(L+1,L,H),g+=3}l.addGroup(p,g,y===!0?1:2),p+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fr=class i extends Ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ca=class i extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let T=new N,y=new N,b=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],T),d(e[E+1],y),d(e[E+2],b),c(T,y,b,S)}function c(S,T,y,b){let E=b+1,R=[];for(let g=0;g<=E;g++){R[g]=[];let M=S.clone().lerp(y,g/E),A=T.clone().lerp(y,g/E),P=E-g;for(let C=0;C<=P;C++)C===0&&g===E?R[g][C]=M:R[g][C]=M.clone().lerp(A,C/P)}for(let g=0;g<E;g++)for(let M=0;M<2*(E-g)-1;M++){let A=Math.floor(M/2);M%2===0?(f(R[g][A+1]),f(R[g+1][A]),f(R[g][A])):(f(R[g][A+1]),f(R[g+1][A+1]),f(R[g+1][A]))}}function l(S){let T=new N;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(S),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let S=new N;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let y=x(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;o.push(y,1-b)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){let T=o[S+0],y=o[S+2],b=o[S+4],E=Math.max(T,y,b),R=Math.min(T,y,b);E>.9&&R<.1&&(T<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,T){let y=S*3;T.x=t[y+0],T.y=t[y+1],T.z=t[y+2]}function m(){let S=new N,T=new N,y=new N,b=new N,E=new Et,R=new Et,g=new Et;for(let M=0,A=0;M<r.length;M+=9,A+=6){S.set(r[M+0],r[M+1],r[M+2]),T.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),E.set(o[A+0],o[A+1]),R.set(o[A+2],o[A+3]),g.set(o[A+4],o[A+5]),b.copy(S).add(T).add(y).divideScalar(3);let P=x(b);_(E,A+0,S,P),_(R,A+2,T,P),_(g,A+4,y,P)}}function _(S,T,y,b){b<0&&S.x===1&&(o[T]=S.x-1),y.x===0&&y.z===0&&(o[T]=b/2/Math.PI+.5)}function x(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Et:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new se;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Br=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ha=class extends Br{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Xu=new N,qu=new N,yc=new eh,vc=new eh,Mc=new eh,Ci=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(qu.subVectors(s[0],s[1]).add(s[0]),l=qu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),x<1e-4&&(x=_),yc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,_,x),vc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,_,x),Mc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,_,x)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),vc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Mc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(yc.calc(c),vc.calc(c),Mc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function em(i,t){let e=1-i;return e*e*t}function nm(i,t){return 2*(1-i)*i*t}function im(i,t){return i*i*t}function _r(i,t,e,n){return em(i,t)+nm(i,e)+im(i,n)}function sm(i,t){let e=1-i;return e*e*e*t}function rm(i,t){let e=1-i;return 3*e*e*i*t}function om(i,t){return 3*(1-i)*i*i*t}function am(i,t){return i*i*i*t}function yr(i,t,e,n,s){return sm(i,t)+rm(i,e)+om(i,n)+am(i,s)}var ua=class extends Tn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends Tn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y),yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},da=class extends Tn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Tn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Tn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Tn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Yu(a,c.x,l.x,h.x,u.x),Yu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},lm=Object.freeze({__proto__:null,ArcCurve:ha,CatmullRomCurve3:Ci,CubicBezierCurve:ua,CubicBezierCurve3:fa,EllipseCurve:Br,LineCurve:da,LineCurve3:pa,QuadraticBezierCurve:ma,QuadraticBezierCurve3:Or,SplineCurve:ga});var zr=class i extends ca{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var je=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],_=[],x=[];for(let p=0;p<h;p++){let S=p*f-o;for(let T=0;T<l;T++){let y=T*u-r;m.push(y,-S,0),_.push(0,0,1),x.push(T/a),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let T=S+l*p,y=S+l*(p+1),b=S+1+l*(p+1),E=S+1+l*p;d.push(T,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ji=class i extends ae{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new N,m=new Et;for(let _=0;_<=s;_++){for(let x=0;x<=n;x++){let p=r+x/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<s;_++){let x=_*(n+1);for(let p=0;p<n;p++){let S=p+x,T=S,y=S+n+1,b=S+n+2,E=S+1;a.push(T,y,E),a.push(y,b,E)}}this.setIndex(a),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Oe=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,f=new N,d=[],m=[],_=[],x=[];for(let p=0;p<=n;p++){let S=[],T=p/n,y=o+T*a,b=t*Math.cos(y),E=Math.sqrt(t*t-b*b),R=0;p===0&&o===0?R=.5/e:p===n&&c===Math.PI&&(R=-.5/e);for(let g=0;g<=e;g++){let M=g/e,A=s+M*r;u.x=-E*Math.cos(A),u.y=b,u.z=E*Math.sin(A),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),x.push(M+R,1-T),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let T=h[p][S+1],y=h[p][S],b=h[p+1][S],E=h[p+1][S+1];(p!==0||o>0)&&d.push(T,y,E),(p!==n-1||c<Math.PI)&&d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vn=class i extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],f=new N,d=new N,m=new N;for(let _=0;_<=n;_++){let x=o+_/n*a;for(let p=0;p<=s;p++){let S=p/s*r;d.x=(t+e*Math.cos(x))*Math.cos(S),d.y=(t+e*Math.cos(x))*Math.sin(S),d.z=e*Math.sin(x),l.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=s;x++){let p=(s+1)*_+x-1,S=(s+1)*(_-1)+x-1,T=(s+1)*(_-1)+x,y=(s+1)*_+x;c.push(p,S,y),c.push(S,T,y)}this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ki=class i extends ae{constructor(t=new Or(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new Et,h=new N,u=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function _(){for(let T=0;T<e;T++)x(T);x(r===!1?e:0),S(),p()}function x(T){h=t.getPointAt(T/e,h);let y=o.normals[T],b=o.binormals[T];for(let E=0;E<=s;E++){let R=E/s*Math.PI*2,g=Math.sin(R),M=-Math.cos(R);c.x=M*y.x+g*b.x,c.y=M*y.y+g*b.y,c.z=M*y.z+g*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let T=1;T<=e;T++)for(let y=1;y<=s;y++){let b=(s+1)*(T-1)+(y-1),E=(s+1)*T+(y-1),R=(s+1)*T+y,g=(s+1)*(T-1)+y;m.push(b,E,g),m.push(E,R,g)}}function S(){for(let T=0;T<=e;T++)for(let y=0;y<=s;y++)l.x=T/e,l.y=y/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new lm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Hr=class extends yn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new It(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if($u(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if($u(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function $u(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var zf={clone:ns,merge:tn},hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xa=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oe=class extends yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var kr=class extends yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_a=class extends yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ya=class extends yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Gr=class extends Yi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ts(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Sc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tc:r=t,a=2*e-n;break;case Ac:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Tc:o=t,c=2*n-e;break;case Ac:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,x=_*m,p=-f*x+2*f*_-f*m,S=(1+f)*x+(-1.5-2*f)*_+(-.5+f)*m+1,T=(-1-d)*x+(1.5+d)*_+.5*m,y=d*x-d*_;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+S*o[l+b]+T*o[c+b]+y*o[u+b];return r}},Ma=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Sa=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ba=class extends Pi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),_=1-m;for(let x=0;x!==a;++x)r[x]=o[l+x]*_+o[c+x]*m;return r}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let _=o[l+m],x=o[c+m],p=d*f+m*2,S=u[p],T=u[p+1],y=t*f+m*2,b=h[y],E=h[y+1],R=dm(n,e,S,b,s);r[m]=Hf(R,_,T,E,x)}return r}};function Hf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function fm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function dm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Hf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=fm(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Sc(t.settings)&&(n.settings={inTangents:Ts(t.settings.inTangents,Array),outTangents:Ts(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ba(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case ea:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break;case Ec:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Xo;case this.InterpolantFactoryMethodBezier:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Sc(this.settings)&&(Zu(this.settings.inTangents,t),Zu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){kt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&yp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){kt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Sc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ea;var Ii=class extends Mn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=vr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="color";var wa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="number";var Ta=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)qe.slerpFlat(r,0,o,l-a,o,l,c);return r}},Vr=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Mn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=vr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="vector";var Ra=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kf=new Ra,Ca=class{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qi=class extends Wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bc=new se,Ju=new N,Ku=new N,Pa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),Ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Is||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vo=new N,Wo=new qe,Yn=new N,Xr=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vo,Wo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vo,Wo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new N,Qu=new Et,ju=new Et,Ne=class extends Xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,ju),e.subVectors(ju,Qu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ks=class extends Xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cc=class extends Pa{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Cc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var As=-90,Rs=1,Ia=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(As,Rs,t,e);s.layers=this.layers,this.add(s);let r=new Ne(As,Rs,t,e);r.layers=this.layers,this.add(r);let o=new Ne(As,Rs,t,e);o.layers=this.layers,this.add(o);let a=new Ne(As,Rs,t,e);a.layers=this.layers,this.add(a);let c=new Ne(As,Rs,t,e);c.layers=this.layers,this.add(c);let l=new Ne(As,Rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},La=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ih="\\[\\]\\.:\\/",pm=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",mm="[^"+ih.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",sh),xm=/(WCOD+)?/.source.replace("WCOD",mm),_m=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),vm=new RegExp("^"+gm+xm+_m+ym+"$"),Mm=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(t){let e=vm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Pc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rv=new Float32Array(1);var hh=class hh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};hh.prototype.isMatrix2=!0;var Ic=hh;function rh(i,t,e,n){let s=Sm(n);switch(e){case Zc:return i*t;case Ga:return i*t/s.components*s.byteLength;case Va:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case Wa:return i*t*2/s.components*s.byteLength;case Jc:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Xa:return i*t*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Za:return Math.max(i,16)*Math.max(t,8)/4;case qa:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case Ka:case ja:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case jr:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gl:case xl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case to:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sm(i){switch(i){case fn:case Xc:return{byteLength:1,components:1};case Ws:case qc:case Vn:return{byteLength:2,components:1};case Ha:case ka:return{byteLength:2,components:4};case Gn:case za:case An:return{byteLength:4,components:1};case Yc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Am(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
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
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
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
#endif`,Um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fm=`#ifdef USE_BATCHING
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
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,km=`#ifdef USE_IRIDESCENCE
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
#endif`,Gm=`#ifdef USE_BUMPMAP
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jm=`vec3 transformedNormal = objectNormal;
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
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w0=`PhysicalMaterial material;
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
#endif`,T0=`uniform sampler2D dfgLUT;
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
}`,A0=`
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dg=`float getShadowMask() {
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
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
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
}`,Ug=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,$g=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,ex=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 color;
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
}`,ox=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Rm,alphahash_pars_fragment:Cm,alphamap_fragment:Pm,alphamap_pars_fragment:Im,alphatest_fragment:Lm,alphatest_pars_fragment:Dm,aomap_fragment:Nm,aomap_pars_fragment:Um,batching_pars_vertex:Fm,batching_vertex:Bm,begin_vertex:Om,beginnormal_vertex:zm,bsdfs:Hm,iridescence_fragment:km,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:qm,color_fragment:Ym,color_pars_fragment:$m,color_pars_vertex:Zm,color_vertex:Jm,common:Km,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:jm,displacementmap_pars_vertex:t0,displacementmap_vertex:e0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:s0,colorspace_pars_fragment:r0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:v0,envmap_vertex:h0,fog_vertex:u0,fog_pars_vertex:f0,fog_fragment:d0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:_0,lights_pars_begin:y0,lights_toon_fragment:M0,lights_toon_pars_fragment:S0,lights_phong_fragment:b0,lights_phong_pars_fragment:E0,lights_physical_fragment:w0,lights_physical_pars_fragment:T0,lights_fragment_begin:A0,lights_fragment_maps:R0,lights_fragment_end:C0,lightprobes_pars_fragment:P0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:N0,map_fragment:U0,map_pars_fragment:F0,map_particle_fragment:B0,map_particle_pars_fragment:O0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:H0,morphinstance_vertex:k0,morphcolor_vertex:G0,morphnormal_vertex:V0,morphtarget_pars_vertex:W0,morphtarget_vertex:X0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:$0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:tg,iridescence_pars_fragment:eg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:og,dithering_pars_fragment:ag,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:ug,shadowmap_vertex:fg,shadowmask_pars_fragment:dg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:xg,specularmap_fragment:_g,specularmap_pars_fragment:yg,tonemapping_fragment:vg,tonemapping_pars_fragment:Mg,transmission_fragment:Sg,transmission_pars_fragment:bg,uv_pars_fragment:Eg,uv_pars_vertex:wg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Rg,background_frag:Cg,backgroundCube_vert:Pg,backgroundCube_frag:Ig,cube_vert:Lg,cube_frag:Dg,depth_vert:Ng,depth_frag:Ug,distance_vert:Fg,distance_frag:Bg,equirect_vert:Og,equirect_frag:zg,linedashed_vert:Hg,linedashed_frag:kg,meshbasic_vert:Gg,meshbasic_frag:Vg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:$g,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:Kg,meshphysical_vert:Qg,meshphysical_frag:jg,meshtoon_vert:tx,meshtoon_frag:ex,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ox,sprite_frag:ax},vt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},ni={basic:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:tn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:tn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new It(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:tn([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:tn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:tn([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:tn([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:tn([vt.common,vt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:tn([vt.lights,vt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ni.physical={uniforms:tn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var wl={r:0,b:0,g:0},lx=new se,hd=new Gt;hd.set(-1,0,0,0,1,0,0,0,1);function cx(i,t,e,n,s,r){let o=new It(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function d(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let y=S.backgroundBlurriness>0;T=t.get(T,y)}return T}function m(S){let T=!1,y=d(S);y===null?x(o,a):y&&y.isColor&&(x(y,1),T=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,T){let y=d(T);y&&(y.isCubeTexture||y.mapping===Yr)?(l===void 0&&(l=new ct(new Wt(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ns(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(lx.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hd),l.material.toneMapped=te.getTransfer(y.colorSpace)!==pe,(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ct(new je(2,2),new ln({name:"BackgroundMaterial",uniforms:ns(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function x(S,T){S.getRGB(wl,nh(i)),e.buffers.color.setClear(wl.r,wl.g,wl.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),a=T,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,x(o,a)},render:m,addToRenderList:_,dispose:p}}function hx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,C,H,L,D){let z=!1,B=u(P,L,H,C);r!==B&&(r=B,l(r.object)),z=d(P,L,H,D),z&&m(P,L,H,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(P,C,H,L),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,C,H,L){let D=L.wireframe===!0,z=n[C.id];z===void 0&&(z={},n[C.id]=z);let B=P.isInstancedMesh===!0?P.id:0,q=z[B];q===void 0&&(q={},z[B]=q);let U=q[H.id];U===void 0&&(U={},q[H.id]=U);let O=U[D];return O===void 0&&(O=f(c()),U[D]=O),O}function f(P){let C=[],H=[],L=[];for(let D=0;D<e;D++)C[D]=0,H[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:L,object:P,attributes:{},index:null}}function d(P,C,H,L){let D=r.attributes,z=C.attributes,B=0,q=H.getAttributes();for(let U in q)if(q[U].location>=0){let F=D[U],K=z[U];if(K===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),F===void 0||F.attribute!==K||K&&F.data!==K.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function m(P,C,H,L){let D={},z=C.attributes,B=0,q=H.getAttributes();for(let U in q)if(q[U].location>=0){let F=z[U];F===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(F=P.instanceColor));let K={};K.attribute=F,F&&F.data&&(K.data=F.data),D[U]=K,B++}r.attributes=D,r.attributesNum=B,r.index=L}function _(){let P=r.newAttributes;for(let C=0,H=P.length;C<H;C++)P[C]=0}function x(P){p(P,0)}function p(P,C){let H=r.newAttributes,L=r.enabledAttributes,D=r.attributeDivisors;H[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),D[P]!==C&&(i.vertexAttribDivisor(P,C),D[P]=C)}function S(){let P=r.newAttributes,C=r.enabledAttributes;for(let H=0,L=C.length;H<L;H++)C[H]!==P[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function T(P,C,H,L,D,z,B){B===!0?i.vertexAttribIPointer(P,C,H,D,z):i.vertexAttribPointer(P,C,H,L,D,z)}function y(P,C,H,L){_();let D=L.attributes,z=H.getAttributes(),B=C.defaultAttributeValues;for(let q in z){let U=z[q];if(U.location>=0){let O=D[q];if(O===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){let F=O.normalized,K=O.itemSize,j=t.get(O);if(j===void 0)continue;let ht=j.buffer,at=j.type,rt=j.bytesPerElement,Y=at===i.INT||at===i.UNSIGNED_INT||O.gpuType===za;if(O.isInterleavedBufferAttribute){let W=O.data,it=W.stride,ft=O.offset;if(W.isInstancedInterleavedBuffer){for(let lt=0;lt<U.locationSize;lt++)p(U.location+lt,W.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let lt=0;lt<U.locationSize;lt++)x(U.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let lt=0;lt<U.locationSize;lt++)T(U.location+lt,K/U.locationSize,at,F,it*rt,(ft+K/U.locationSize*lt)*rt,Y)}else{if(O.isInstancedBufferAttribute){for(let W=0;W<U.locationSize;W++)p(U.location+W,O.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let W=0;W<U.locationSize;W++)x(U.location+W);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let W=0;W<U.locationSize;W++)T(U.location+W,K/U.locationSize,at,F,K*rt,K/U.locationSize*W*rt,Y)}}else if(B!==void 0){let F=B[q];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(U.location,F);break;case 3:i.vertexAttrib3fv(U.location,F);break;case 4:i.vertexAttrib4fv(U.location,F);break;default:i.vertexAttrib1fv(U.location,F)}}}}S()}function b(){M();for(let P in n){let C=n[P];for(let H in C){let L=C[H];for(let D in L){let z=L[D];for(let B in z)h(z[B].object),delete z[B];delete L[D]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let C=n[P.id];for(let H in C){let L=C[H];for(let D in L){let z=L[D];for(let B in z)h(z[B].object),delete z[B];delete L[D]}}delete n[P.id]}function R(P){for(let C in n){let H=n[C];for(let L in H){let D=H[L];if(D[P.id]===void 0)continue;let z=D[P.id];for(let B in z)h(z[B].object),delete z[B];delete D[P.id]}}}function g(P){for(let C in n){let H=n[C],L=P.isInstancedMesh===!0?P.id:0,D=H[L];if(D!==void 0){for(let z in D){let B=D[z];for(let q in B)h(B[q].object),delete B[q];delete D[z]}delete H[L],Object.keys(H).length===0&&delete n[C]}}}function M(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:x,disableUnusedAttributes:S}}function ux(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let g=R===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==fn&&R!==An&&!g&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:E}}function dx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Fn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,x=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!x)r?h(null):l();else{let S=r?0:n,T=S*4,y=p.clippingState||null;c.value=y,y=h(m,f,T,d);for(let b=0;b!==T;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,x=null;if(_!==0){if(x=c.value,m!==!0||x===null){let p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(x===null||x.length<p)&&(x=new Float32Array(p));for(let T=0,y=d;T!==_;++T,y+=4)o.copy(u[T]).applyMatrix4(S,a),o.normal.toArray(x,y),x[y+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}var Ys=4,px=6,mx=20,gx=256,no=new ks,Gf=new It,uh=null,fh=0,dh=0,ph=!1,xx=new N,is=new N,Al=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=xx}=r;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,fh,dh),this._renderer.xr.enabled=ph,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Vn,format:Rn,colorSpace:Mr,depthBuffer:!1},s=Vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_x(r)),this._blurMaterial=vx(r,t,e),this._ggxMaterial=yx(r,t,e)}return s}_compileMaterial(t){let e=new ct(new ae,t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,n,s,r){let c=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Gf),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Wt,new Hn({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,x=_.material,p=!1,S=t.background;S?S.isColor&&(x.color.copy(S),t.background=null,p=!0):(x.color.copy(Gf),p=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;qs(s,y*b,T>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(_,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ni||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;qs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,no)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:m}=this,_=this._sizeLods[n],x=3*_*(n>m-Ys?n-m+Ys:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,qs(r,x,p,3*_,2*_),s.setRenderTarget(r),s.render(a,no),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,qs(t,x,p,3*_,2*_),s.setRenderTarget(t),s.render(a,no)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ys?s-this._lodMax+Ys:0),f=4*(this._cubeSize-h);qs(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(c,no)}};function _x(i){let t=[],e=[],n=i,s=i-Ys+1+px;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,m=new Float32Array(d*f*u),_=new Float32Array(d*f*u);for(let p=0;p<u;p++){let S=p%3*2/3-1,T=p>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];m.set(y,d*f*p);for(let b=0;b<f;b++){let E=h[b*2]*2-1,R=h[b*2+1]*2-1;p===0?is.set(1,R,E):p===1?is.set(-E,1,-R):p===2?is.set(-E,R,1):p===3?is.set(-1,R,-E):p===4?is.set(-E,-1,R):is.set(E,R,-1),is.toArray(_,(p*f+b)*d)}}let x=new ae;x.setAttribute("position",new ce(m,d)),x.setAttribute("outputDirection",new ce(_,d)),e.push(new ct(x,null)),n>Ys&&n--}return{lodMeshes:e,sizeLods:t}}function Vf(i,t,e){let n=new hn(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yx(i,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function vx(i,t,e){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:mx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wf(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xf(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:ti});r.uniforms.tEquirect.value=e;let o=new ct(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Ye),new Ia(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Mx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Fa||d===Ba)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new Rl(m.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===Fa||d===Ba,_=d===Ni||d===es;if(m||_){let x=e.get(f),p=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Al(i)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{let S=f.image;return m&&S&&S.height>0||_&&S&&c(S)?(n===null&&(n=new Al(i)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===Fa?f.mapping=Ni:d===Ba&&(f.mapping=es),f}function c(f){let d=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Sx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function bx(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(m===void 0)return;if(d!==null){let S=d.array;_=d.version;for(let T=0,y=S.length;T<y;T+=3){let b=S[T+0],E=S[T+1],R=S[T+2];f.push(b,E,E,R,R,b)}}else{let S=m.array;_=m.version;for(let T=0,y=S.length/3-1;T<y;T+=3){let b=T+0,E=T+1,R=T+2;f.push(b,E,E,R,R,b)}}let x=new(m.count>=65535?Cr:Rr)(f,1);x.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,x)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ex(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function wx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tx(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let y=a.attributes.position.count*T,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*b*4*u),R=new wr(E,y,b,u);R.type=An,R.needsUpdate=!0;let g=T*4;for(let A=0;A<u;A++){let P=x[A],C=p[A],H=S[A],L=y*b*4*A;for(let D=0;D<P.count;D++){let z=D*g;d===!0&&(s.fromBufferAttribute(P,D),E[L+z+0]=s.x,E[L+z+1]=s.y,E[L+z+2]=s.z,E[L+z+3]=0),m===!0&&(s.fromBufferAttribute(C,D),E[L+z+4]=s.x,E[L+z+5]=s.y,E[L+z+6]=s.z,E[L+z+7]=0),_===!0&&(s.fromBufferAttribute(H,D),E[L+z+8]=s.x,E[L+z+9]=s.y,E[L+z+10]=s.z,E[L+z+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Et(y,b)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ax(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Rx={[Oc]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[Hc]:"CINEON_TONE_MAPPING",[qr]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function Cx(i,t,e,n,s,r){let o=new hn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ae;l.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let h=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ct(l,h),f=new ks(-1,1,1,-1,0,1),d=null,m=null,_=!1,x,p=null,S=[],T=!1;this.setSize=function(y,b){o.setSize(y,b),a!==null&&a.setSize(y,b),c!==null&&c.setSize(y,b);for(let E=0;E<S.length;E++){let R=S[E];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){S=y,T=S.length>0&&S[0].isRenderPass===!0;let b=o.width,E=o.height;S.length>0&&a===null&&(a=new hn(b,E,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(b,E,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let g=S[R];g.setSize&&g.setSize(b,E)}},this.begin=function(y,b){if(_||y.toneMapping===kn&&S.length===0)return!1;if(p=b,b!==null){let E=b.width,R=b.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return T===!1&&y.setRenderTarget(o),x=y.toneMapping,y.toneMapping=kn,!0},this.hasRenderPass=function(){return T},this.end=function(y,b){y.toneMapping=x,_=!0;let E=o,R=a;for(let g=0;g<S.length;g++){let M=S[g];M.enabled!==!1&&(M.render(y,R,E,b),M.needsSwap!==!1&&(E=R,R=R===a?c:a))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,h.defines={},te.getTransfer(d)===pe&&(h.defines.SRGB_TRANSFER="");let g=Rx[m];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(u,f),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var ud=new an,xh=new Ri(1,1),fd=new wr,dd=new sa,pd=new Nr,qf=[],Yf=[],$f=new Float32Array(16),Zf=new Float32Array(9),Jf=new Float32Array(4);function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qf[s];if(r===void 0&&(r=new Float32Array(s),qf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pl(i,t){let e=Yf[t];e===void 0&&(e=new Int32Array(t),Yf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(He(e,n))return;Jf.set(n),i.uniformMatrix2fv(this.addr,!1,Jf),ke(e,n)}}function Ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(He(e,n))return;Zf.set(n),i.uniformMatrix3fv(this.addr,!1,Zf),ke(e,n)}}function Fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(He(e,n))return;$f.set(n),i.uniformMatrix4fv(this.addr,!1,$f),ke(e,n)}}function Bx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function kx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=e.isReversedDepthBuffer()?bl:Sl,r=xh):r=ud,e.setTexture2D(t||r,s)}function qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dd,s)}function Yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pd,s)}function $x(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fd,s)}function Zx(i){switch(i){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return Nx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Bx;case 35667:case 35671:return Ox;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return kx;case 36294:return Gx;case 36295:return Vx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}function Jx(i,t){i.uniform1fv(this.addr,t)}function Kx(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function Qx(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function jx(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function t_(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e_(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n_(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i_(i,t){i.uniform1iv(this.addr,t)}function s_(i,t){i.uniform2iv(this.addr,t)}function r_(i,t){i.uniform3iv(this.addr,t)}function o_(i,t){i.uniform4iv(this.addr,t)}function a_(i,t){i.uniform1uiv(this.addr,t)}function l_(i,t){i.uniform2uiv(this.addr,t)}function c_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function u_(i,t,e){let n=this.cache,s=t.length,r=Pl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=xh:o=ud;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function f_(i,t,e){let n=this.cache,s=t.length,r=Pl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||dd,r[o])}function d_(i,t,e){let n=this.cache,s=t.length,r=Pl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pd,r[o])}function p_(i,t,e){let n=this.cache,s=t.length,r=Pl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fd,r[o])}function m_(i){switch(i){case 5126:return Jx;case 35664:return Kx;case 35665:return Qx;case 35666:return jx;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}var _h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}},yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Kf(i,t){i.seq.push(t),i.map[t.id]=t}function g_(i,t,e){let n=i.name,s=n.length;for(mh.lastIndex=0;;){let r=mh.exec(n),o=mh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kf(e,l===void 0?new _h(a,i,t):new yh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new vh(a),Kf(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);g_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Qf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var x_=37297,__=0;function y_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var jf=new Gt;function v_(i){te._getMatrix(jf,te.workingColorSpace,i);let t=`mat3( ${jf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Sr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+y_(i.getShaderSource(t),a)}else return r}function M_(i,t){let e=v_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var S_={[Oc]:"Linear",[zc]:"Reinhard",[Hc]:"Cineon",[qr]:"ACESFilmic",[Gc]:"AgX",[Vc]:"Neutral",[kc]:"Custom"};function b_(i,t){let e=S_[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tl=new N;function E_(){te.getLuminanceCoefficients(Tl);let i=Tl.x.toFixed(4),t=Tl.y.toFixed(4),e=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function T_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function so(i){return i!==""}function ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(R_,P_)}var C_=new Map;function P_(i,t){let e=Jt[t];if(e===void 0){let n=C_.get(t);if(n!==void 0)e=Jt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mh(e)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(I_,L_)}function L_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var D_={[ji]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function N_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U_={[Ni]:"ENVMAP_TYPE_CUBE",[es]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE_UV"};function F_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":U_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var B_={[es]:"ENVMAP_MODE_REFRACTION"};function O_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[Ua]:"ENVMAP_BLENDING_MULTIPLY",[Mf]:"ENVMAP_BLENDING_MIX",[Sf]:"ENVMAP_BLENDING_ADD"};function H_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z_[i.combine]||"ENVMAP_BLENDING_NONE"}function k_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function G_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=N_(e),l=F_(e),h=O_(e),u=H_(e),f=k_(e),d=w_(e),m=T_(r),_=s.createProgram(),x,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(so).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(so).join(`
`),p.length>0&&(p+=`
`)):(x=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==kn?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),E_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(so).join(`
`)),o=Mh(o),o=ed(o,e),o=nd(o,e),a=Mh(a),a=ed(a,e),a=nd(a,e),o=id(o),a=id(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+x+o,y=S+p+a,b=Qf(s,s.VERTEX_SHADER,T),E=Qf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,b),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(E)||"",D=C.trim(),z=H.trim(),B=L.trim(),q=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,E);else{let O=td(s,b,"vertex"),F=td(s,E,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+O+`
`+F)}else D!==""?Ot("WebGLProgram: Program Info Log:",D):(z===""||B==="")&&(U=!1);U&&(P.diagnostics={runnable:q,programLog:D,vertexShader:{log:z,prefix:x},fragmentShader:{log:B,prefix:p}})}s.deleteShader(b),s.deleteShader(E),g=new $s(s,_),M=A_(s,_)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,x_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=__++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}var V_=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bh(t),e.set(t,n)),n}},bh=class{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}};function W_(i){return i===Bi||i===jr||i===to}function X_(i,t,e,n,s,r){let o=new Tr,a=new Sh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,M,A,P,C,H){let L=P.fog,D=C.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=t.get(g.envMap||z,B),U=q&&q.mapping===Yr?q.image.height:null,O=d[g.type];g.precision!==null&&(f=n.getMaxPrecision(g.precision),f!==g.precision&&Ot("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));let F=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=F!==void 0?F.length:0,j=0;D.morphAttributes.position!==void 0&&(j=1),D.morphAttributes.normal!==void 0&&(j=2),D.morphAttributes.color!==void 0&&(j=3);let ht,at,rt,Y;if(O){let Me=ni[O];ht=Me.vertexShader,at=Me.fragmentShader}else{ht=g.vertexShader,at=g.fragmentShader;let Me=a.getVertexShaderStage(g),fe=a.getFragmentShaderStage(g);a.update(g,Me,fe),rt=Me.id,Y=fe.id}let W=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),ft=C.isInstancedMesh===!0,lt=C.isBatchedMesh===!0,dt=!!g.map,Lt=!!g.matcap,At=!!q,Bt=!!g.aoMap,Yt=!!g.lightMap,Xt=!!g.bumpMap&&g.wireframe===!1,ie=!!g.normalMap,me=!!g.displacementMap,Be=!!g.emissiveMap,ge=!!g.metalnessMap,Te=!!g.roughnessMap,G=g.anisotropy>0,Ve=g.clearcoat>0,le=g.dispersion>0,I=g.retroreflectivity>0,v=g.iridescence>0,X=g.sheen>0,J=g.transmission>0,tt=G&&!!g.anisotropyMap,ut=Ve&&!!g.clearcoatMap,pt=Ve&&!!g.clearcoatNormalMap,et=Ve&&!!g.clearcoatRoughnessMap,st=v&&!!g.iridescenceMap,mt=v&&!!g.iridescenceThicknessMap,Nt=X&&!!g.sheenColorMap,yt=X&&!!g.sheenRoughnessMap,gt=!!g.specularMap,Ut=!!g.specularColorMap,Ht=!!g.specularIntensityMap,$t=J&&!!g.transmissionMap,V=J&&!!g.thicknessMap,xt=!!g.gradientMap,nt=!!g.alphaMap,_t=g.alphaTest>0,bt=!!g.alphaHash,ot=!!g.extensions,Ft=kn;g.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let Pt={shaderID:O,shaderType:g.type,shaderName:g.name,vertexShader:ht,fragmentShader:at,defines:g.defines,customVertexShaderID:rt,customFragmentShaderID:Y,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:lt,batchingColor:lt&&C._colorsTexture!==null,instancing:ft,instancingColor:ft&&C.instanceColor!==null,instancingMorph:ft&&C.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:dt,matcap:Lt,envMap:At,envMapMode:At&&q.mapping,envMapCubeUVHeight:U,aoMap:Bt,lightMap:Yt,bumpMap:Xt,normalMap:ie,displacementMap:me,emissiveMap:Be,normalMapObjectSpace:ie&&g.normalMapType===wf,normalMapTangentSpace:ie&&g.normalMapType===eo,packedNormalMap:ie&&g.normalMapType===eo&&W_(g.normalMap.format),metalnessMap:ge,roughnessMap:Te,anisotropy:G,anisotropyMap:tt,clearcoat:Ve,clearcoatMap:ut,clearcoatNormalMap:pt,clearcoatRoughnessMap:et,dispersion:le,retroreflection:I,iridescence:v,iridescenceMap:st,iridescenceThicknessMap:mt,sheen:X,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:gt,specularColorMap:Ut,specularIntensityMap:Ht,transmission:J,transmissionMap:$t,thicknessMap:V,gradientMap:xt,opaque:g.transparent===!1&&g.blending===Vs&&g.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:bt,combine:g.combine,mapUv:dt&&m(g.map.channel),aoMapUv:Bt&&m(g.aoMap.channel),lightMapUv:Yt&&m(g.lightMap.channel),bumpMapUv:Xt&&m(g.bumpMap.channel),normalMapUv:ie&&m(g.normalMap.channel),displacementMapUv:me&&m(g.displacementMap.channel),emissiveMapUv:Be&&m(g.emissiveMap.channel),metalnessMapUv:ge&&m(g.metalnessMap.channel),roughnessMapUv:Te&&m(g.roughnessMap.channel),anisotropyMapUv:tt&&m(g.anisotropyMap.channel),clearcoatMapUv:ut&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:pt&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(g.sheenRoughnessMap.channel),specularMapUv:gt&&m(g.specularMap.channel),specularColorMapUv:Ut&&m(g.specularColorMap.channel),specularIntensityMapUv:Ht&&m(g.specularIntensityMap.channel),transmissionMapUv:$t&&m(g.transmissionMap.channel),thicknessMapUv:V&&m(g.thicknessMap.channel),alphaMapUv:nt&&m(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ie||G),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!D.attributes.uv&&(dt||nt),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&ie===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:it,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:j,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:dt&&g.map.isVideoTexture===!0&&te.getTransfer(g.map.colorSpace)===pe,decodeVideoTextureEmissive:Be&&g.emissiveMap.isVideoTexture===!0&&te.getTransfer(g.emissiveMap.colorSpace)===pe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ue,flipSided:g.side===ze,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ot&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&g.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function x(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let A in g.defines)M.push(A),M.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(p(M,g),S(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function p(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function S(g,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function T(g){let M=d[g.type],A;if(M){let P=ni[M];A=zf.clone(P.uniforms)}else A=g.uniforms;return A}function y(g,M){let A=h.get(M);return A!==void 0?++A.usedTimes:(A=new G_(i,M,g,s),l.push(A),h.set(M,A)),A}function b(g){if(--g.usedTimes===0){let M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function E(g){a.remove(g)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:T,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:R}}function q_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function od(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,_,x,p){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=o(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=x,S.group=p),t++,S}function c(f,d,m,_,x,p,S){S.reversedDepth===!0&&(x=-x);let T=a(f,d,m,_,x,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):e.push(T)}function l(f,d,m,_,x,p){let S=a(f,d,m,_,x,p);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||Y_),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function $_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new od,i.set(n,[o])):s>=r.length?(o=new od,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new It};break;case"SpotLight":e={position:new N,direction:new N,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function J_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var K_=0;function Q_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function j_(i){let t=new Z_,e=J_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new se,o=new se;function a(l){let h=0,u=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,m=0,_=0,x=0,p=0,S=0,T=0,y=0,b=0,E=0,R=0,g=0,M=0,A=0;l.sort(Q_);for(let C=0,H=l.length;C<H;C++){let L=l[C],D=L.color,z=L.intensity,B=L.distance,q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Bi?q=L.shadow.map.texture:q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=D.r*z,u+=D.g*z,f+=D.b*z;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],z);A++}else if(L.isSunLight){let U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let O=L.shadow,F=e.get(L);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[m]=F,n.sunShadowMap[m]=q;let K=O.getViewportCount();for(let j=0;j<K;j++)n.sunShadowMatrix[_+j]=O.getMatrix(j),n.sunShadowCascade[_+j]=O._cascadeData[j];_+=K,m++}n.sun[d]=U,d++}else if(L.isDirectionalLight){let U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let O=L.shadow,F=e.get(L);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,n.directionalShadow[x]=F,n.directionalShadowMap[x]=q,n.directionalShadowMatrix[x]=L.shadow.matrix,b++}n.directional[x]=U,x++}else if(L.isSpotLight){let U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(D).multiplyScalar(z),U.distance=B,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[S]=U;let O=L.shadow;if(L.map&&(n.spotLightMap[g]=L.map,g++,O.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[S]=O.matrix,L.castShadow){let F=e.get(L);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,n.spotShadow[S]=F,n.spotShadowMap[S]=q,R++}S++}else if(L.isRectAreaLight){let U=t.get(L);U.color.copy(D).multiplyScalar(z),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=U,T++}else if(L.isPointLight){let U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){let O=L.shadow,F=e.get(L);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,F.shadowCameraNear=O.camera.near,F.shadowCameraFar=O.camera.far,n.pointShadow[p]=F,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=L.shadow.matrix,E++}n.point[p]=U,p++}else if(L.isHemisphereLight){let U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(z),U.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[y]=U,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==x||P.pointLength!==p||P.spotLength!==S||P.rectAreaLength!==T||P.hemiLength!==y||P.numSunShadows!==m||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==R||P.numSpotMaps!==g||P.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=x,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+g-M,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,P.sunLength=d,P.directionalLength=x,P.pointLength=p,P.spotLength=S,P.rectAreaLength=T,P.hemiLength=y,P.numSunShadows=m,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=R,P.numSpotMaps=g,P.numLightProbes=A,n.version=K_++)}function c(l,h){let u=0,f=0,d=0,m=0,_=0,x=0,p=h.matrixWorldInverse;for(let S=0,T=l.length;S<T;S++){let y=l[S];if(y.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(y.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function ad(i){let t=new j_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ty(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ad(i),t.set(s,[a])):r>=o.length?(a=new ad(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
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
}`,iy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],sy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ld=new se,io=new N,gh=new N;function ry(i,t,e){let n=new zs,s=new Et,r=new Et,o=new Re,a=new _a,c=new ya,l={},h=e.maxTextureSize,u={[jn]:ze,[ze]:jn,[Ue]:Ue},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:ey,fragmentShader:ny}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ae;m.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ct(m,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ji;let p=this.type;this.render=function(E,R,g){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===Na&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ji);let M=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ti),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let H=p!==this.type;H&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(D=>D.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,D=E.length;L<D;L++){let z=E[L],B=z.shadow;if(B===void 0){Ot("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let q=B.getFrameExtents();s.multiply(q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,B.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=U,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Gs){if(z.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new hn(s.x,s.y,{format:Bi,type:Vn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Ri(s.x,s.y,An),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Zn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xe,B.map.depthTexture.magFilter=Xe}else z.isPointLight?(B.map=new Rl(s.x),B.map.depthTexture=new la(s.x,Gn)):(B.map=new hn(s.x,s.y),B.map.depthTexture=new Ri(s.x,s.y,Gn)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Zn,this.type===ji?(B.map.depthTexture.compareFunction=U?bl:Sl,B.map.depthTexture.minFilter=Ye,B.map.depthTexture.magFilter=Ye):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xe,B.map.depthTexture.magFilter=Xe);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let O=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();z.isPointLight!==!0&&B.updateMatrices(z,g);for(let F=0;F<O;F++){let K=B.getCamera(F);if(z.isPointLight){let j=B.camera,ht=B.matrix,at=z.distance||j.far;at!==j.far&&(j.far=at,j.updateProjectionMatrix()),io.setFromMatrixPosition(z.matrixWorld),j.position.copy(io),gh.copy(j.position),gh.add(iy[F]),j.up.copy(sy[F]),j.lookAt(gh),j.updateMatrixWorld(),ht.makeTranslation(-io.x,-io.y,-io.z),ld.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ld,j.coordinateSystem,j.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,F),i.clear();else{F===0&&(i.setRenderTarget(B.map),i.clear());let j=B.getViewport(F);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),C.viewport(o)}n=B.getFrustum(F),y(R,g,K,z,this.type)}B.isPointLightShadow!==!0&&this.type===Gs&&S(B,g),B.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(M,A,P)};function S(E,R){let g=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new hn(s.x,s.y,{format:Bi,type:Vn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,g,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,g,d,_,null)}function T(E,R,g,M){let A=null,P=g.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)A=P;else if(A=g.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let C=A.uuid,H=R.uuid,L=l[C];L===void 0&&(L={},l[C]=L);let D=L[H];D===void 0&&(D=A.clone(),L[H]=D,R.addEventListener("dispose",b)),A=D}if(A.visible=R.visible,A.wireframe=R.wireframe,M===Gs?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:u[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,g.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let C=i.properties.get(A);C.light=g}return A}function y(E,R,g,M,A){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===Gs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,E.matrixWorld);let H=t.update(E),L=E.material;if(Array.isArray(L)){let D=H.groups;for(let z=0,B=D.length;z<B;z++){let q=D[z],U=L[q.materialIndex];if(U&&U.visible){let O=T(E,U,M,A);E.onBeforeShadow(i,E,R,g,H,O,q),i.renderBufferDirect(g,null,H,O,E,q),E.onAfterShadow(i,E,R,g,H,O,q)}}}else if(L.visible){let D=T(E,L,M,A);E.onBeforeShadow(i,E,R,g,H,D,null),i.renderBufferDirect(g,null,H,D,E,null),E.onAfterShadow(i,E,R,g,H,D,null)}}let C=E.children;for(let H=0,L=C.length;H<L;H++)y(C[H],R,g,M,A)}function b(E){E.target.removeEventListener("dispose",b);for(let g in l){let M=l[g],A=E.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function oy(i,t){function e(){let V=!1,xt=new Re,nt=null,_t=new Re(0,0,0,0);return{setMask:function(bt){nt!==bt&&!V&&(i.colorMask(bt,bt,bt,bt),nt=bt)},setLocked:function(bt){V=bt},setClear:function(bt,ot,Ft,Pt,Me){Me===!0&&(bt*=Pt,ot*=Pt,Ft*=Pt),xt.set(bt,ot,Ft,Pt),_t.equals(xt)===!1&&(i.clearColor(bt,ot,Ft,Pt),_t.copy(xt))},reset:function(){V=!1,nt=null,_t.set(-1,0,0,0)}}}function n(){let V=!1,xt=!1,nt=null,_t=null,bt=null;return{setReversed:function(ot){if(xt!==ot){let Ft=t.get("EXT_clip_control");ot?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=ot;let Pt=bt;bt=null,this.setClear(Pt)}},getReversed:function(){return xt},setTest:function(ot){ot?W(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(ot){nt!==ot&&!V&&(i.depthMask(ot),nt=ot)},setFunc:function(ot){if(xt&&(ot=Ff[ot]),_t!==ot){switch(ot){case Yo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ot}},setLocked:function(ot){V=ot},setClear:function(ot){bt!==ot&&(bt=ot,xt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){V=!1,nt=null,_t=null,bt=null,xt=!1}}}function s(){let V=!1,xt=null,nt=null,_t=null,bt=null,ot=null,Ft=null,Pt=null,Me=null;return{setTest:function(fe){V||(fe?W(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(fe){xt!==fe&&!V&&(i.stencilMask(fe),xt=fe)},setFunc:function(fe,Ln,Xn){(nt!==fe||_t!==Ln||bt!==Xn)&&(i.stencilFunc(fe,Ln,Xn),nt=fe,_t=Ln,bt=Xn)},setOp:function(fe,Ln,Xn){(ot!==fe||Ft!==Ln||Pt!==Xn)&&(i.stencilOp(fe,Ln,Xn),ot=fe,Ft=Ln,Pt=Xn)},setLocked:function(fe){V=fe},setClear:function(fe){Me!==fe&&(i.clearStencil(fe),Me=fe)},reset:function(){V=!1,xt=null,nt=null,_t=null,bt=null,ot=null,Ft=null,Pt=null,Me=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],_=null,x=!1,p=null,S=null,T=null,y=null,b=null,E=null,R=null,g=new It(0,0,0),M=0,A=!1,P=null,C=null,H=null,L=null,D=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=q>=1):U.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=q>=2);let O=null,F={},K=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ht=new Re().fromArray(K),at=new Re().fromArray(j);function rt(V,xt,nt,_t){let bt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(V,ot),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<nt;Ft++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(xt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return ot}let Y={};Y[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(Ps),Xt(!1),ie(Lc),W(i.CULL_FACE),Bt(ti);function W(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function it(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function ft(V,xt){return f[V]!==xt?(i.bindFramebuffer(V,xt),f[V]=xt,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xt),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function lt(V,xt){let nt=m,_t=!1;if(V){nt=d.get(xt),nt===void 0&&(nt=[],d.set(xt,nt));let bt=V.textures;if(nt.length!==bt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ft=bt.length;ot<Ft;ot++)nt[ot]=i.COLOR_ATTACHMENT0+ot;nt.length=bt.length,_t=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(nt)}function dt(V){return _!==V?(i.useProgram(V),_=V,!0):!1}let Lt={[ts]:i.FUNC_ADD,[sf]:i.FUNC_SUBTRACT,[rf]:i.FUNC_REVERSE_SUBTRACT};Lt[of]=i.MIN,Lt[af]=i.MAX;let At={[lf]:i.ZERO,[cf]:i.ONE,[hf]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[gf]:i.SRC_ALPHA_SATURATE,[pf]:i.DST_COLOR,[ff]:i.DST_ALPHA,[uf]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[mf]:i.ONE_MINUS_DST_COLOR,[df]:i.ONE_MINUS_DST_ALPHA,[xf]:i.CONSTANT_COLOR,[_f]:i.ONE_MINUS_CONSTANT_COLOR,[yf]:i.CONSTANT_ALPHA,[vf]:i.ONE_MINUS_CONSTANT_ALPHA};function Bt(V,xt,nt,_t,bt,ot,Ft,Pt,Me,fe){if(V===ti){x===!0&&(it(i.BLEND),x=!1);return}if(x===!1&&(W(i.BLEND),x=!0),V!==nf){if(V!==p||fe!==A){if((S!==ts||b!==ts)&&(i.blendEquation(i.FUNC_ADD),S=ts,b=ts),fe)switch(V){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",V);break}else switch(V){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nc:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",V);break}T=null,y=null,E=null,R=null,g.set(0,0,0),M=0,p=V,A=fe}return}bt=bt||xt,ot=ot||nt,Ft=Ft||_t,(xt!==S||bt!==b)&&(i.blendEquationSeparate(Lt[xt],Lt[bt]),S=xt,b=bt),(nt!==T||_t!==y||ot!==E||Ft!==R)&&(i.blendFuncSeparate(At[nt],At[_t],At[ot],At[Ft]),T=nt,y=_t,E=ot,R=Ft),(Pt.equals(g)===!1||Me!==M)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Me),g.copy(Pt),M=Me),p=V,A=!1}function Yt(V,xt){V.side===Ue?it(i.CULL_FACE):W(i.CULL_FACE);let nt=V.side===ze;xt&&(nt=!nt),Xt(nt),V.blending===Vs&&V.transparent===!1?Bt(ti):Bt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let _t=V.stencilWrite;a.setTest(_t),_t&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Be(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(V){P!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),P=V)}function ie(V){V!==tf?(W(i.CULL_FACE),V!==C&&(V===Lc?i.cullFace(i.BACK):V===ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),C=V}function me(V){V!==H&&(B&&i.lineWidth(V),H=V)}function Be(V,xt,nt){V?(W(i.POLYGON_OFFSET_FILL),(L!==xt||D!==nt)&&(L=xt,D=nt,o.getReversed()&&(xt=-xt),i.polygonOffset(xt,nt))):it(i.POLYGON_OFFSET_FILL)}function ge(V){V?W(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Te(V){V===void 0&&(V=i.TEXTURE0+z-1),O!==V&&(i.activeTexture(V),O=V)}function G(V,xt,nt){nt===void 0&&(O===null?nt=i.TEXTURE0+z-1:nt=O);let _t=F[nt];_t===void 0&&(_t={type:void 0,texture:void 0},F[nt]=_t),(_t.type!==V||_t.texture!==xt)&&(O!==nt&&(i.activeTexture(nt),O=nt),i.bindTexture(V,xt||Y[V]),_t.type=V,_t.texture=xt)}function Ve(){let V=F[O];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(V){kt("WebGLState:",V)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(V){kt("WebGLState:",V)}}function v(){try{i.texSubImage2D(...arguments)}catch(V){kt("WebGLState:",V)}}function X(){try{i.texSubImage3D(...arguments)}catch(V){kt("WebGLState:",V)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(V){kt("WebGLState:",V)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){kt("WebGLState:",V)}}function ut(){try{i.texStorage2D(...arguments)}catch(V){kt("WebGLState:",V)}}function pt(){try{i.texStorage3D(...arguments)}catch(V){kt("WebGLState:",V)}}function et(){try{i.texImage2D(...arguments)}catch(V){kt("WebGLState:",V)}}function st(){try{i.texImage3D(...arguments)}catch(V){kt("WebGLState:",V)}}function mt(V){return u[V]!==void 0?u[V]:i.getParameter(V)}function Nt(V,xt){u[V]!==xt&&(i.pixelStorei(V,xt),u[V]=xt)}function yt(V){ht.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ht.copy(V))}function gt(V){at.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),at.copy(V))}function Ut(V,xt){let nt=l.get(xt);nt===void 0&&(nt=new WeakMap,l.set(xt,nt));let _t=nt.get(V);_t===void 0&&(_t=i.getUniformBlockIndex(xt,V.name),nt.set(V,_t))}function Ht(V,xt){let _t=l.get(xt).get(V);c.get(xt)!==_t&&(i.uniformBlockBinding(xt,_t,V.__bindingPointIndex),c.set(xt,_t))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},O=null,F={},f={},d=new WeakMap,m=[],_=null,x=!1,p=null,S=null,T=null,y=null,b=null,E=null,R=null,g=new It(0,0,0),M=0,A=!1,P=null,C=null,H=null,L=null,D=null,ht.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:it,bindFramebuffer:ft,drawBuffers:lt,useProgram:dt,setBlending:Bt,setMaterial:Yt,setFlipSided:Xt,setCullFace:ie,setLineWidth:me,setPolygonOffset:Be,setScissorTest:ge,activeTexture:Te,bindTexture:G,unbindTexture:Ve,compressedTexImage2D:le,compressedTexImage3D:I,texImage2D:et,texImage3D:st,pixelStorei:Nt,getParameter:mt,updateUBOMapping:Ut,uniformBlockBinding:Ht,texStorage2D:ut,texStorage3D:pt,texSubImage2D:v,texSubImage3D:X,compressedTexSubImage2D:J,compressedTexSubImage3D:tt,scissor:yt,viewport:gt,reset:$t}}function ay(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,v){return m?new OffscreenCanvas(I,v):br("canvas")}function x(I,v,X){let J=1,tt=le(I);if((tt.width>X||tt.height>X)&&(J=X/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let ut=Math.floor(J*tt.width),pt=Math.floor(J*tt.height);f===void 0&&(f=_(ut,pt));let et=v?_(ut,pt):f;return et.width=ut,et.height=pt,et.getContext("2d").drawImage(I,0,0,ut,pt),Ot("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ut+"x"+pt+")."),et}else return"data"in I&&Ot("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function p(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,v,X,J,tt,ut=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt;J&&(pt=t.get("EXT_texture_norm16"),pt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=v;if(v===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8),X===i.UNSIGNED_SHORT&&pt&&(et=pt.R16_EXT),X===i.SHORT&&pt&&(et=pt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),v===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8),X===i.UNSIGNED_SHORT&&pt&&(et=pt.RG16_EXT),X===i.SHORT&&pt&&(et=pt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),v===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),v===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),v===i.RGB&&(X===i.UNSIGNED_SHORT&&pt&&(et=pt.RGB16_EXT),X===i.SHORT&&pt&&(et=pt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),v===i.RGBA){let st=ut?Sr:te.getTransfer(tt);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=st===pe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&pt&&(et=pt.RGBA16_EXT),X===i.SHORT&&pt&&(et=pt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(I,v){let X;return I?v===null||v===Gn||v===Xs?X=i.DEPTH24_STENCIL8:v===An?X=i.DEPTH32F_STENCIL8:v===Ws&&(X=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===Xs?X=i.DEPTH_COMPONENT24:v===An?X=i.DEPTH_COMPONENT32F:v===Ws&&(X=i.DEPTH_COMPONENT16),X}function E(I,v){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xe&&I.minFilter!==Ye?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function R(I){let v=I.target;v.removeEventListener("dispose",R),M(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function g(I){let v=I.target;v.removeEventListener("dispose",g),P(v)}function M(I){let v=n.get(I);if(v.__webglInit===void 0)return;let X=I.source,J=d.get(X);if(J){let tt=J[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(I),Object.keys(J).length===0&&d.delete(X)}n.remove(I)}function A(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let X=I.source,J=d.get(X);delete J[v.__cacheKey],o.memory.textures--}function P(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let tt=0;tt<v.__webglFramebuffer[J].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[J][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let X=I.textures;for(let J=0,tt=X.length;J<tt;J++){let ut=n.get(X[J]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(I)}let C=0;function H(){C=0}function L(){return C}function D(I){C=I}function z(){let I=C;return I>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,I}function B(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function q(I,v){let X=n.get(I);if(I.isVideoTexture&&G(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){let J=I.image;if(J===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{it(X,I,v);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+v)}function U(I,v){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){it(X,I,v);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+v)}function O(I,v){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){it(X,I,v);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+v)}function F(I,v){let X=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){ft(X,I,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+v)}let K={[zn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},j={[Xe]:i.NEAREST,[bf]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},ht={[Af]:i.NEVER,[Lf]:i.ALWAYS,[Rf]:i.LESS,[Sl]:i.LEQUAL,[Cf]:i.EQUAL,[bl]:i.GEQUAL,[Pf]:i.GREATER,[If]:i.NOTEQUAL};function at(I,v){if(v.type===An&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ye||v.magFilter===Oa||v.magFilter===$r||v.magFilter===Ui||v.minFilter===Ye||v.minFilter===Oa||v.minFilter===$r||v.minFilter===Ui)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,K[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,K[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,K[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,j[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,j[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ht[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xe||v.minFilter!==$r&&v.minFilter!==Ui||v.type===An&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function rt(I,v){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",R));let J=v.source,tt=d.get(J);tt===void 0&&(tt={},d.set(J,tt));let ut=B(v);if(ut!==I.__cacheKey){tt[ut]===void 0&&(tt[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),tt[ut].usedTimes++;let pt=tt[I.__cacheKey];pt!==void 0&&(tt[I.__cacheKey].usedTimes--,pt.usedTimes===0&&A(v)),I.__cacheKey=ut,I.__webglTexture=tt[ut].texture}return X}function Y(I,v,X){return Math.floor(Math.floor(I/X)/v)}function W(I,v,X,J){let ut=I.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,X,J,v.data);else{ut.sort((Nt,yt)=>Nt.start-yt.start);let pt=0;for(let Nt=1;Nt<ut.length;Nt++){let yt=ut[pt],gt=ut[Nt],Ut=yt.start+yt.count,Ht=Y(gt.start,v.width,4),$t=Y(yt.start,v.width,4);gt.start<=Ut+1&&Ht===$t&&Y(gt.start+gt.count-1,v.width,4)===Ht?yt.count=Math.max(yt.count,gt.start+gt.count-yt.start):(++pt,ut[pt]=gt)}ut.length=pt+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Nt=0,yt=ut.length;Nt<yt;Nt++){let gt=ut[Nt],Ut=Math.floor(gt.start/4),Ht=Math.ceil(gt.count/4),$t=Ut%v.width,V=Math.floor(Ut/v.width),xt=Ht,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,$t,V,xt,nt,X,J,v.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function it(I,v,X){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let tt=rt(I,v),ut=v.source;e.bindTexture(J,I.__webglTexture,i.TEXTURE0+X);let pt=n.get(ut);if(ut.version!==pt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let nt=te.getPrimaries(te.workingColorSpace),_t=v.colorSpace===Wn?null:te.getPrimaries(v.colorSpace),bt=v.colorSpace===Wn||nt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let st=x(v.image,!1,s.maxTextureSize);st=Ve(v,st);let mt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),yt=y(v.internalFormat,mt,Nt,v.normalized,v.colorSpace,v.isVideoTexture);at(J,v);let gt,Ut=v.mipmaps,Ht=v.isVideoTexture!==!0,$t=pt.__version===void 0||tt===!0,V=ut.dataReady,xt=E(v,st);if(v.isDepthTexture)yt=b(v.format===Fi,v.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,yt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,yt,st.width,st.height,0,mt,Nt,null));else if(v.isDataTexture)if(Ut.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Ut[0].width,Ut[0].height);for(let nt=0,_t=Ut.length;nt<_t;nt++)gt=Ut[nt],Ht?V&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,nt,yt,gt.width,gt.height,0,mt,Nt,gt.data);v.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,st.width,st.height),V&&W(v,st,mt,Nt)):e.texImage2D(i.TEXTURE_2D,0,yt,st.width,st.height,0,mt,Nt,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,Ut[0].width,Ut[0].height,st.depth);for(let nt=0,_t=Ut.length;nt<_t;nt++)if(gt=Ut[nt],v.format!==Rn)if(mt!==null)if(Ht){if(V)if(v.layerUpdates.size>0){let bt=rh(gt.width,gt.height,v.format,v.type);for(let ot of v.layerUpdates){let Ft=gt.data.subarray(ot*bt/gt.data.BYTES_PER_ELEMENT,(ot+1)*bt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,ot,gt.width,gt.height,1,mt,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,st.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,yt,gt.width,gt.height,st.depth,0,gt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,st.depth,mt,Nt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,yt,gt.width,gt.height,st.depth,0,mt,Nt,gt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Ut[0].width,Ut[0].height);for(let nt=0,_t=Ut.length;nt<_t;nt++)gt=Ut[nt],v.format!==Rn?mt!==null?Ht?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,yt,gt.width,gt.height,0,gt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?V&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,nt,yt,gt.width,gt.height,0,mt,Nt,gt.data)}else if(v.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,st.width,st.height,st.depth),V)if(v.layerUpdates.size>0){let nt=rh(st.width,st.height,v.format,v.type);for(let _t of v.layerUpdates){let bt=st.data.subarray(_t*nt/st.data.BYTES_PER_ELEMENT,(_t+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,st.width,st.height,1,mt,Nt,bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,mt,Nt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,st.width,st.height,st.depth,0,mt,Nt,st.data);else if(v.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,xt,yt,st.width,st.height,st.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,mt,Nt,st.data)):e.texImage3D(i.TEXTURE_3D,0,yt,st.width,st.height,st.depth,0,mt,Nt,st.data);else if(v.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,xt,yt,st.width,st.height);else{let nt=st.width,_t=st.height;for(let bt=0;bt<xt;bt++)e.texImage2D(i.TEXTURE_2D,bt,yt,nt,_t,0,mt,Nt,null),nt>>=1,_t>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),st.parentNode!==nt){nt.appendChild(st),u.add(v),nt.onpaint=_t=>{let bt=_t.changedElements;for(let ot of u)bt.includes(ot.image)&&(ot.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let bt=i.RGBA,ot=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,bt,ot,Ft,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Ht&&$t){let nt=le(Ut[0]);e.texStorage2D(i.TEXTURE_2D,xt,yt,nt.width,nt.height)}for(let nt=0,_t=Ut.length;nt<_t;nt++)gt=Ut[nt],Ht?V&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt,Nt,gt):e.texImage2D(i.TEXTURE_2D,nt,yt,mt,Nt,gt);v.generateMipmaps=!1}else if(Ht){if($t){let nt=le(st);e.texStorage2D(i.TEXTURE_2D,xt,yt,nt.width,nt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Nt,st)}else e.texImage2D(i.TEXTURE_2D,0,yt,mt,Nt,st);p(v)&&S(J),pt.__version=ut.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function ft(I,v,X){if(v.image.length!==6)return;let J=rt(I,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);let ut=n.get(tt);if(tt.version!==ut.__version||J===!0){e.activeTexture(i.TEXTURE0+X);let pt=te.getPrimaries(te.workingColorSpace),et=v.colorSpace===Wn?null:te.getPrimaries(v.colorSpace),st=v.colorSpace===Wn||pt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let mt=v.isCompressedTexture||v.image[0].isCompressedTexture,Nt=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let ot=0;ot<6;ot++)!mt&&!Nt?yt[ot]=x(v.image[ot],!0,s.maxCubemapSize):yt[ot]=Nt?v.image[ot].image:v.image[ot],yt[ot]=Ve(v,yt[ot]);let gt=yt[0],Ut=r.convert(v.format,v.colorSpace),Ht=r.convert(v.type),$t=y(v.internalFormat,Ut,Ht,v.normalized,v.colorSpace),V=v.isVideoTexture!==!0,xt=ut.__version===void 0||J===!0,nt=tt.dataReady,_t=E(v,gt);at(i.TEXTURE_CUBE_MAP,v);let bt;if(mt){V&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,$t,gt.width,gt.height);for(let ot=0;ot<6;ot++){bt=yt[ot].mipmaps;for(let Ft=0;Ft<bt.length;Ft++){let Pt=bt[Ft];v.format!==Rn?Ut!==null?V?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,Pt.width,Pt.height,Ut,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,$t,Pt.width,Pt.height,0,Pt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,Pt.width,Pt.height,Ut,Ht,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,$t,Pt.width,Pt.height,0,Ut,Ht,Pt.data)}}}else{if(bt=v.mipmaps,V&&xt){bt.length>0&&_t++;let ot=le(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,$t,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Nt){V?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,yt[ot].width,yt[ot].height,Ut,Ht,yt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,yt[ot].width,yt[ot].height,0,Ut,Ht,yt[ot].data);for(let Ft=0;Ft<bt.length;Ft++){let Me=bt[Ft].image[ot].image;V?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,Me.width,Me.height,Ut,Ht,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,$t,Me.width,Me.height,0,Ut,Ht,Me.data)}}else{V?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ut,Ht,yt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,Ut,Ht,yt[ot]);for(let Ft=0;Ft<bt.length;Ft++){let Pt=bt[Ft];V?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,Ut,Ht,Pt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,$t,Ut,Ht,Pt.image[ot])}}}p(v)&&S(i.TEXTURE_CUBE_MAP),ut.__version=tt.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function lt(I,v,X,J,tt,ut){let pt=r.convert(X.format,X.colorSpace),et=r.convert(X.type),st=y(X.internalFormat,pt,et,X.normalized,X.colorSpace),mt=n.get(v),Nt=n.get(X);if(Nt.__renderTarget=v,!mt.__hasExternalTextures){let yt=Math.max(1,v.width>>ut),gt=Math.max(1,v.height>>ut);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ut,st,yt,gt,v.depth,0,pt,et,null):e.texImage2D(tt,ut,st,yt,gt,0,pt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,tt,Nt.__webglTexture,0,ge(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,tt,Nt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(I,v,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let J=v.depthTexture,tt=J&&J.isDepthTexture?J.type:null,ut=b(v.stencilBuffer,tt),pt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(v),ut,v.width,v.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(v),ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,I)}else{let J=v.textures;for(let tt=0;tt<J.length;tt++){let ut=J[tt],pt=r.convert(ut.format,ut.colorSpace),et=r.convert(ut.type),st=y(ut.internalFormat,pt,et,ut.normalized,ut.colorSpace);Te(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(v),st,v.width,v.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(v),st,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,st,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(I,v,X){let J=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(v.depthTexture);if(tt.__renderTarget=v,(!tt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),at(i.TEXTURE_CUBE_MAP,v.depthTexture);let mt=r.convert(v.depthTexture.format),Nt=r.convert(v.depthTexture.type),yt;v.depthTexture.format===Zn?yt=i.DEPTH_COMPONENT24:v.depthTexture.format===Fi&&(yt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,yt,v.width,v.height,0,mt,Nt,null)}}else q(v.depthTexture,0);let ut=tt.__webglTexture,pt=ge(v),et=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,st=v.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Zn)Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,ut,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,ut,0);else if(v.depthTexture.format===Fi)Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,ut,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(I){let v=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=J}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(X)for(let J=0;J<6;J++)Lt(v.__webglFramebuffer[J],I,J);else{let J=I.texture.mipmaps;J&&J.length>0?Lt(v.__webglFramebuffer[0],I,0):Lt(v.__webglFramebuffer,I,0)}else if(X){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),dt(v.__webglDepthbuffer[J],I,!1);else{let tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ut)}}else{let J=I.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),dt(v.__webglDepthbuffer,I,!1);else{let tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(I,v,X){let J=n.get(I);v!==void 0&&lt(J.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&At(I)}function Yt(I){let v=I.texture,X=n.get(I),J=n.get(v);I.addEventListener("dispose",g);let tt=I.textures,ut=I.isWebGLCubeRenderTarget===!0,pt=tt.length>1;if(pt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),ut){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let st=0;st<v.mipmaps.length;st++)X.__webglFramebuffer[et][st]=i.createFramebuffer()}else X.__webglFramebuffer[et]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<v.mipmaps.length;et++)X.__webglFramebuffer[et]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(pt)for(let et=0,st=tt.length;et<st;et++){let mt=n.get(tt[et]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Te(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){let st=tt[et];X.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[et]);let mt=r.convert(st.format,st.colorSpace),Nt=r.convert(st.type),yt=y(st.internalFormat,mt,Nt,st.normalized,st.colorSpace,I.isXRRenderTarget===!0),gt=ge(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,yt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,X.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),at(i.TEXTURE_CUBE_MAP,v);for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)lt(X.__webglFramebuffer[et][st],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else lt(X.__webglFramebuffer[et],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(v)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let et=0,st=tt.length;et<st;et++){let mt=tt[et],Nt=n.get(mt),yt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Nt.__webglTexture),at(yt,mt),lt(X.__webglFramebuffer,I,mt,i.COLOR_ATTACHMENT0+et,yt,0),p(mt)&&S(yt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,J.__webglTexture),at(et,v),v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)lt(X.__webglFramebuffer[st],I,v,i.COLOR_ATTACHMENT0,et,st);else lt(X.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,et,0);p(v)&&S(et),e.unbindTexture()}I.depthBuffer&&At(I)}function Xt(I){let v=I.textures;for(let X=0,J=v.length;X<J;X++){let tt=v[X];if(p(tt)){let ut=T(I),pt=n.get(tt).__webglTexture;e.bindTexture(ut,pt),S(ut),e.unbindTexture()}}}let ie=[],me=[];function Be(I){if(I.samples>0){if(Te(I)===!1){let v=I.textures,X=I.width,J=I.height,tt=i.COLOR_BUFFER_BIT,ut=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(I),et=v.length>1;if(et)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let st=I.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Nt=n.get(v[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,tt,i.NEAREST),c===!0&&(ie.length=0,me.length=0,ie.push(i.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ie.push(ut),me.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Nt=n.get(v[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ge(I){return Math.min(s.maxSamples,I.samples)}function Te(I){let v=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function G(I){let v=o.render.frame;h.get(I)!==v&&(h.set(I,v),I.update())}function Ve(I,v){let X=I.colorSpace,J=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Mr&&X!==Wn&&(te.getTransfer(X)===pe?(J!==Rn||tt!==fn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",X)),v}function le(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=F,this.rebindTextures=Bt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ly(i,t){function e(n,s=Wn){let r,o=te.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xc)return i.BYTE;if(n===qc)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===Rn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Ga)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===Kr||n===Qr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===$a||n===Za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Ka||n===Qa||n===ja||n===tl||n===jr||n===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Ka)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return r.COMPRESSED_R11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jr)return r.COMPRESSED_RG11_EAC;if(n===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===xl||n===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gl)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===vl||n===to||n===Ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
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

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:cy,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends Jn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding!="undefined",x=new Eh,p={},S=e.getContextAttributes(),T=null,y=null,b=[],E=[],R=new Et,g=null,M=null,A=new Ne;A.viewport=new Re;let P=new Ne;P.viewport=new Re;let C=[A,P],H=new La,L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let W=b[Y];return W===void 0&&(W=new Us,b[Y]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Y){let W=b[Y];return W===void 0&&(W=new Us,b[Y]=W),W.getGripSpace()},this.getHand=function(Y){let W=b[Y];return W===void 0&&(W=new Us,b[Y]=W),W.getHandSpace()};function z(Y){let W=E.indexOf(Y.inputSource);if(W===-1)return;let it=b[W];it!==void 0&&(it.update(Y.inputSource,Y.frame,l||o),it.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<b.length;Y++){let W=E[Y];W!==null&&(E[Y]=null,b[Y].disconnect(W))}L=null,D=null,x.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(T),d=null,f=null,u=null,s=null,y=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(R.width,R.height,!1),M!==null){let Y=M.camera;Y.fov=M.fov,Y.zoom=M.zoom,Y.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),S.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,ft=null,lt=null;S.depth&&(lt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=S.stencil?Fi:Zn,ft=S.stencil?Xs:Gn);let dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new hn(f.textureWidth,f.textureHeight,{format:Rn,type:fn,depthTexture:new Ri(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let it={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new hn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(Y){for(let W=0;W<Y.removed.length;W++){let it=Y.removed[W],ft=E.indexOf(it);ft>=0&&(E[ft]=null,b[ft].disconnect(it))}for(let W=0;W<Y.added.length;W++){let it=Y.added[W],ft=E.indexOf(it);if(ft===-1){for(let dt=0;dt<b.length;dt++)if(dt>=E.length){E.push(it),ft=dt;break}else if(E[dt]===null){E[dt]=it,ft=dt;break}if(ft===-1)break}let lt=b[ft];lt&&lt.connect(it)}}let U=new N,O=new N;function F(Y,W,it){U.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(it.matrixWorld);let ft=U.distanceTo(O),lt=W.projectionMatrix.elements,dt=it.projectionMatrix.elements,Lt=lt[14]/(lt[10]-1),At=lt[14]/(lt[10]+1),Bt=(lt[9]+1)/lt[5],Yt=(lt[9]-1)/lt[5],Xt=(lt[8]-1)/lt[0],ie=(dt[8]+1)/dt[0],me=Lt*Xt,Be=Lt*ie,ge=ft/(-Xt+ie),Te=ge*-Xt;if(W.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Te),Y.translateZ(ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),lt[10]===-1)Y.projectionMatrix.copy(W.projectionMatrix),Y.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let G=Lt+ge,Ve=At+ge,le=me-Te,I=Be+(ft-Te),v=Bt*At/Ve*G,X=Yt*At/Ve*G;Y.projectionMatrix.makePerspective(le,I,v,X,G,Ve),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,W){W===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(W.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let W=Y.near,it=Y.far;x.texture!==null&&(x.depthNear>0&&(W=x.depthNear),x.depthFar>0&&(it=x.depthFar)),H.near=P.near=A.near=W,H.far=P.far=A.far=it,(L!==H.near||D!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,D=H.far),H.layers.mask=Y.layers.mask|6,A.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let ft=Y.parent,lt=H.cameras;K(H,ft);for(let dt=0;dt<lt.length;dt++)K(lt[dt],ft);lt.length===2?F(H,A,P):H.projectionMatrix.copy(A.projectionMatrix),M===null&&Y.isPerspectiveCamera&&(M={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,H,ft)};function j(Y,W,it){it===null?Y.matrix.copy(W.matrixWorld):(Y.matrix.copy(it.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(W.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(W.projectionMatrix),Y.projectionMatrixInverse.copy(W.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ds*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let ht=null;function at(Y,W){if(h=W.getViewerPose(l||o),m=W,h!==null){let it=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ft=!1;it.length!==H.cameras.length&&(H.cameras.length=0,ft=!0);for(let At=0;At<it.length;At++){let Bt=it[At],Yt=null;if(d!==null)Yt=d.getViewport(Bt);else{let ie=u.getViewSubImage(f,Bt);Yt=ie.viewport,At===0&&(t.setRenderTargetTextures(y,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(y))}let Xt=C[At];Xt===void 0&&(Xt=new Ne,Xt.layers.enable(At),Xt.viewport=new Re,C[At]=Xt),Xt.matrix.fromArray(Bt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Bt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),At===0&&(H.matrix.copy(Xt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ft===!0&&H.cameras.push(Xt)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let At=u.getDepthInformation(it[0]);At&&At.isValid&&At.texture&&x.init(At,s.renderState)}if(lt&&lt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let At=0;At<it.length;At++){let Bt=it[At].camera;if(Bt){let Yt=p[Bt];Yt||(Yt=new Ur,p[Bt]=Yt);let Xt=u.getCameraImage(Bt);Yt.sourceTexture=Xt}}}}for(let it=0;it<b.length;it++){let ft=E[it],lt=b[it];ft!==null&&lt!==void 0&&lt.update(ft,W,l||o)}ht&&ht(Y,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null}let rt=new cd;rt.setAnimationLoop(at),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}},uy=new se,md=new Gt;md.set(-1,0,0,0,1,0,0,0,1);function fy(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,nh(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,S,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),f(x,p),p.isMeshPhysicalMaterial&&d(x,p,y)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),_(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?c(x,p,S,T):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===ze&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===ze&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let S=t.get(p),T=S.envMap,y=S.envMapRotation;T&&(x.envMap.value=T,x.envMapRotation.value.setFromMatrix4(uy.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(md),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,S,T){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*S,x.scale.value=T*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,S){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function _(x,p){let S=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){let E=b.program;n.uniformBlockBinding(y,E)}function l(y,b){let E=s[y.id];E===void 0&&(x(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",S));let R=b.program;n.updateUBOMapping(y,R);let g=t.render.frame;r[y.id]!==g&&(f(y),r[y.id]=g)}function h(y){let b=u();y.__bindingPointIndex=b;let E=i.createBuffer(),R=y.__size,g=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let b=s[y.id],E=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let g=0,M=E.length;g<M;g++){let A=E[g];if(Array.isArray(A))for(let P=0,C=A.length;P<C;P++)d(A[P],g,P,R);else d(A,g,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,E,R){if(_(y,b,E,R)===!0){let g=y.__offset,M=y.value;if(Array.isArray(M)){let A=0;for(let P=0;P<M.length;P++){let C=M[P],H=p(C);m(C,y.__data,A),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(A+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(M,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,y.__data)}}function m(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function _(y,b,E,R){let g=y.value,M=b+"_"+E;if(R[M]===void 0)return typeof g=="number"||typeof g=="boolean"?R[M]=g:ArrayBuffer.isView(g)?R[M]=g.slice():R[M]=g.clone(),!0;{let A=R[M];if(typeof g=="number"||typeof g=="boolean"){if(A!==g)return R[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(A.equals(g)===!1)return A.copy(g),!0}}return!1}function x(y){let b=y.uniforms,E=0,R=16;for(let M=0,A=b.length;M<A;M++){let P=Array.isArray(b[M])?b[M]:[b[M]];for(let C=0,H=P.length;C<H;C++){let L=P[C],D=Array.isArray(L.value)?L.value:[L.value];for(let z=0,B=D.length;z<B;z++){let q=D[z],U=p(q),O=E%R,F=O%U.boundary,K=O+F;E+=F,K!==0&&R-K<U.storage&&(E+=R-K),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=U.storage}}}let g=E%R;return g>0&&(E+=R-g),y.__size=E,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){let b=y.target;b.removeEventListener("dispose",S);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var py=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function my(){return ei===null&&(ei=new Ir(py,16,16,Bi,Vn),ei.name="DFG_LUT",ei.minFilter=Ye,ei.magFilter=Ye,ei.wrapS=$n,ei.wrapT=$n,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Zs=class{constructor(t={}){let{canvas:e=Df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=fn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=d,x=new Set([Xa,Wa,Va]),p=new Set([fn,Gn,Ws,Xs,Ha,ka]),S=new Uint32Array(4),T=new Int32Array(4),y=new N,b=null,E=null,R=[],g=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,C=null,H=null,L=null,D=null;this._outputColorSpace=Ce;let z=0,B=0,q=null,U=-1,O=null,F=new Re,K=new Re,j=null,ht=new It(0),at=0,rt=e.width,Y=e.height,W=1,it=null,ft=null,lt=new Re(0,0,rt,Y),dt=new Re(0,0,rt,Y),Lt=!1,At=new zs,Bt=!1,Yt=!1,Xt=new se,ie=new N,me=new Re,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function Te(){return q===null?W:1}let G=n;function Ve(w,k){return e.getContext(w,k)}let le,I,v,X,J,tt,ut,pt,et,st,mt,Nt,yt,gt,Ut,Ht,$t,V,xt,nt,_t,bt,ot;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ln,!1),G===null){let k="webgl2";if(G=Ve(k,w),G===null)throw Ve(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(w){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),kt("WebGLRenderer: "+w.message),w}function Ft(){le=new Sx(G),le.init(),_t=new ly(G,le),I=new fx(G,le,t,_t),v=new oy(G,le),I.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),H=G.createFramebuffer(),L=G.createFramebuffer(),D=G.createFramebuffer(),X=new wx(G),J=new q_,tt=new ay(G,le,v,J,I,_t,X),ut=new Mx(A),pt=new Am(G),bt=new hx(G,pt),et=new bx(G,pt,X,bt),st=new Ax(G,et,pt,bt,X),V=new Tx(G,I,tt),Ut=new dx(J),mt=new X_(A,ut,le,I,bt,Ut),Nt=new fy(A,J),yt=new $_,gt=new ty(le),$t=new cx(A,ut,v,st,m,c),Ht=new ry(A,st,I),ot=new dy(G,X,I,v),xt=new ux(G,le,X),nt=new Ex(G,le,X),X.programs=mt.programs,A.capabilities=I,A.extensions=le,A.properties=J,A.renderLists=yt,A.shadowMap=Ht,A.state=v,A.info=X}_!==fn&&(M=new Cx(_,e.width,e.height,a,s,r));let Pt=new wh(A,G);this.xr=Pt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(rt,Y,!1))},this.getSize=function(w){return w.set(rt,Y)},this.setSize=function(w,k,Q=!0){if(Pt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=w,Y=k,e.width=Math.floor(w*W),e.height=Math.floor(k*W),Q===!0&&(e.style.width=w+"px",e.style.height=k+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(rt*W,Y*W).floor()},this.setDrawingBufferSize=function(w,k,Q){rt=w,Y=k,W=Q,e.width=Math.floor(w*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(_===fn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,k,Q,$){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,k,Q,$),v.viewport(F.copy(lt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(dt)},this.setScissor=function(w,k,Q,$){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,k,Q,$),v.scissor(K.copy(dt).multiplyScalar(W).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(w){v.setScissorTest(Lt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,Q=!0){let $=0;if(w){let Z=!1;if(q!==null){let St=q.texture.format;Z=x.has(St)}if(Z){let St=q.texture.type,Tt=p.has(St),Mt=$t.getClearColor(),Rt=$t.getClearAlpha(),Dt=Mt.r,Zt=Mt.g,Qt=Mt.b;Tt?(S[0]=Dt,S[1]=Zt,S[2]=Qt,S[3]=Rt,G.clearBufferuiv(G.COLOR,0,S)):(T[0]=Dt,T[1]=Zt,T[2]=Qt,T[3]=Rt,G.clearBufferiv(G.COLOR,0,T))}else $|=G.COLOR_BUFFER_BIT}k&&($|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),C=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),$t.dispose(),yt.dispose(),gt.dispose(),J.dispose(),ut.dispose(),st.dispose(),bt.dispose(),ot.dispose(),mt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",hu),Pt.removeEventListener("sessionend",uu),Hi.stop()};function Me(w){w.preventDefault(),Er("WebGLRenderer: Context Lost."),P=!0}function fe(){Er("WebGLRenderer: Context Restored."),P=!1;let w=X.autoReset,k=Ht.enabled,Q=Ht.autoUpdate,$=Ht.needsUpdate,Z=Ht.type;Ft(),X.autoReset=w,Ht.enabled=k,Ht.autoUpdate=Q,Ht.needsUpdate=$,Ht.type=Z}function Ln(w){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xn(w){let k=w.target;k.removeEventListener("dispose",Xn),cp(k)}function cp(w){hp(w),J.remove(w)}function hp(w){let k=J.get(w).programs;k!==void 0&&(k.forEach(function(Q){mt.releaseProgram(Q)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Q,$,Z,St){k===null&&(k=Be);let Tt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Mt=dp(w,k,Q,$,Z);v.setMaterial($,Tt);let Rt=Q.index,Dt=1;if($.wireframe===!0){if(Rt=et.getWireframeAttribute(Q),Rt===void 0)return;Dt=2}let Zt=Q.drawRange,Qt=Q.attributes.position,Ct=Zt.start*Dt,de=(Zt.start+Zt.count)*Dt;St!==null&&(Ct=Math.max(Ct,St.start*Dt),de=Math.min(de,(St.start+St.count)*Dt)),Rt!==null?(Ct=Math.max(Ct,0),de=Math.min(de,Rt.count)):Qt!=null&&(Ct=Math.max(Ct,0),de=Math.min(de,Qt.count));let Le=de-Ct;if(Le<0||Le===1/0)return;bt.setup(Z,$,Mt,Q,Rt);let Ae,ve=xt;if(Rt!==null&&(Ae=pt.get(Rt),ve=nt,ve.setIndex(Ae)),Z.isMesh)$.wireframe===!0?(v.setLineWidth($.wireframeLinewidth*Te()),ve.setMode(G.LINES)):ve.setMode(G.TRIANGLES);else if(Z.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),v.setLineWidth(Je*Te()),Z.isLineSegments?ve.setMode(G.LINES):Z.isLineLoop?ve.setMode(G.LINE_LOOP):ve.setMode(G.LINE_STRIP)}else Z.isPoints?ve.setMode(G.POINTS):Z.isSprite&&ve.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(le.get("WEBGL_multi_draw"))ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Je=Z._multiDrawStarts,wt=Z._multiDrawCounts,rn=Z._multiDrawCount,re=Rt?pt.get(Rt).bytesPerElement:1,En=J.get($).currentProgram.getUniforms();for(let qn=0;qn<rn;qn++)En.setValue(G,"_gl_DrawID",qn),ve.render(Je[qn]/re,wt[qn])}else if(Z.isInstancedMesh)ve.renderInstances(Ct,Le,Z.count);else if(Q.isInstancedBufferGeometry){let Je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,wt=Math.min(Q.instanceCount,Je);ve.renderInstances(Ct,Le,wt)}else ve.render(Ct,Le)};function cu(w,k,Q,$){C!==null&&w.isNodeMaterial&&C.setObject($,w),Bt===!0&&Ut.setState(w,Q,!1),w.transparent===!0&&w.side===Ue&&w.forceSinglePass===!1?(w.side=ze,w.needsUpdate=!0,xo(w,k,$),w.side=jn,w.needsUpdate=!0,xo(w,k,$),w.side=Ue):xo(w,k,$)}this.compile=function(w,k,Q=null){Q===null&&(Q=w),C!==null&&C.renderStart(w,k,Q),E=gt.get(Q),E.init(k),g.push(E),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),w!==Q&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),C!==null&&C.updateLights(E.state.lightsArray),Yt=this.localClippingEnabled,Bt=Ut.init(this.clippingPlanes,Yt),Bt===!0&&Ut.setGlobalState(this.clippingPlanes,k),C!==null&&Ht.render(E.state.shadowsArray,Q,k);let $=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let St=Z.material;if(St)if(Array.isArray(St))for(let Tt=0;Tt<St.length;Tt++){let Mt=St[Tt];cu(Mt,Q,k,Z),$.add(Mt)}else cu(St,Q,k,Z),$.add(St)}),E=g.pop(),C!==null&&C.renderEnd(),$},this.compileAsync=function(w,k,Q=null){let $=this.compile(w,k,Q);return new Promise(Z=>{function St(){if($.forEach(function(Tt){let Rt=J.get(Tt).currentProgram;(Rt===void 0||Rt.isReady())&&$.delete(Tt)}),$.size===0){Z(w);return}setTimeout(St,10)}le.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Jl=null;function up(w){Jl&&Jl(w)}function hu(){Hi.stop()}function uu(){Hi.start()}let Hi=new cd;Hi.setAnimationLoop(up),typeof self!="undefined"&&Hi.setContext(self),this.setAnimationLoop=function(w){Jl=w,Pt.setAnimationLoop(w),w===null?Hi.stop():Hi.start()},Pt.addEventListener("sessionstart",hu),Pt.addEventListener("sessionend",uu),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C!==null&&C.renderStart(w,k);let Q=Pt.enabled===!0&&Pt.isPresenting===!0,$=M!==null&&(q===null||Q)&&M.begin(A,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(k),k=Pt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,k,q),E=gt.get(w,g.length),E.init(k),E.state.textureUnits=tt.getTextureUnits(),g.push(E),Xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),At.setFromProjectionMatrix(Xt,On,k.reversedDepth),Yt=this.localClippingEnabled,Bt=Ut.init(this.clippingPlanes,Yt),b=yt.get(w,R.length),b.init(),R.push(b),Pt.enabled===!0&&Pt.isPresenting===!0){let Tt=A.xr.getDepthSensingMesh();Tt!==null&&Kl(Tt,k,-1/0,A.sortObjects)}Kl(w,k,0,A.sortObjects),b.finish(),C!==null&&C.updateLights(E.state.lightsArray),A.sortObjects===!0&&b.sort(it,ft),ge=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,ge&&$t.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Bt===!0&&Ut.beginShadows();let Z=E.state.shadowsArray;if(Ht.render(Z,w,k),Bt===!0&&Ut.endShadows(),($&&M.hasRenderPass())===!1){let Tt=b.opaque,Mt=b.transmissive;if(E.setupLights(),k.isArrayCamera){let Rt=k.cameras;if(Mt.length>0)for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt];du(Tt,Mt,w,Qt)}ge&&$t.render(w);for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt];fu(b,w,Qt,Qt.viewport)}}else Mt.length>0&&du(Tt,Mt,w,k),ge&&$t.render(w),fu(b,w,k)}q!==null&&B===0&&(tt.updateMultisampleRenderTarget(q),tt.updateRenderTargetMipmap(q)),$&&M.end(A),w.isScene===!0&&w.onAfterRender(A,w,k),bt.resetDefaultState(),U=-1,O=null,g.pop(),g.length>0?(E=g[g.length-1],tt.setTextureUnits(E.state.textureUnits),Bt===!0&&Ut.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,C!==null&&C.renderEnd()};function Kl(w,k,Q,$){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(At)){$&&me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xt);let Tt=st.update(w),Mt=w.material;Mt.visible&&b.push(w,Tt,Mt,Q,me.z,null,k)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(At))){let Tt=st.update(w),Mt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),me.copy(w.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),me.copy(Tt.boundingSphere.center)),me.applyMatrix4(w.matrixWorld).applyMatrix4(Xt)),Array.isArray(Mt)){let Rt=Tt.groups;for(let Dt=0,Zt=Rt.length;Dt<Zt;Dt++){let Qt=Rt[Dt],Ct=Mt[Qt.materialIndex];Ct&&Ct.visible&&b.push(w,Tt,Ct,Q,me.z,Qt,k)}}else Mt.visible&&b.push(w,Tt,Mt,Q,me.z,null,k)}}let St=w.children;for(let Tt=0,Mt=St.length;Tt<Mt;Tt++)Kl(St[Tt],k,Q,$)}function fu(w,k,Q,$){let{opaque:Z,transmissive:St,transparent:Tt}=w;E.setupLightsView(Q),Bt===!0&&Ut.setGlobalState(A.clippingPlanes,Q),$&&v.viewport(F.copy($)),Z.length>0&&go(Z,k,Q),St.length>0&&go(St,k,Q),Tt.length>0&&go(Tt,k,Q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function du(w,k,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){let Ct=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new hn(1,1,{generateMipmaps:!0,type:Ct?Vn:fn,minFilter:Ui,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let St=E.state.transmissionRenderTarget[$.id],Tt=$.viewport||F;St.setSize(Tt.z*A.transmissionResolutionScale,Tt.w*A.transmissionResolutionScale);let Mt=A.getRenderTarget(),Rt=A.getActiveCubeFace(),Dt=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(ht),at=A.getClearAlpha(),at<1&&A.setClearColor(16777215,.5),A.clear(),ge&&$t.render(Q);let Zt=A.toneMapping;A.toneMapping=kn;let Qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),Bt===!0&&Ut.setGlobalState(A.clippingPlanes,$),go(w,Q,$),tt.updateMultisampleRenderTarget(St),tt.updateRenderTargetMipmap(St),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let de=0,Le=k.length;de<Le;de++){let Ae=k[de],{object:ve,geometry:Je,material:wt,group:rn}=Ae;if(wt.side===Ue&&ve.layers.test($.layers)){let re=wt.side;wt.side=ze,wt.needsUpdate=!0,pu(ve,Q,$,Je,wt,rn),wt.side=re,wt.needsUpdate=!0,Ct=!0}}Ct===!0&&(tt.updateMultisampleRenderTarget(St),tt.updateRenderTargetMipmap(St))}A.setRenderTarget(Mt,Rt,Dt),A.setClearColor(ht,at),Qt!==void 0&&($.viewport=Qt),A.toneMapping=Zt}function go(w,k,Q){let $=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,St=w.length;Z<St;Z++){let Tt=w[Z],{object:Mt,geometry:Rt,group:Dt}=Tt,Zt=Tt.material;Zt.allowOverride===!0&&$!==null&&(Zt=$),Mt.layers.test(Q.layers)&&pu(Mt,k,Q,Rt,Zt,Dt)}}function pu(w,k,Q,$,Z,St){C!==null&&Z.isNodeMaterial&&C.setObject(w,Z),w.onBeforeRender(A,k,Q,$,Z,St),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(A,k,Q,$,w,St),Z.transparent===!0&&Z.side===Ue&&Z.forceSinglePass===!1?(Z.side=ze,Z.needsUpdate=!0,A.renderBufferDirect(Q,k,$,Z,w,St),Z.side=jn,Z.needsUpdate=!0,A.renderBufferDirect(Q,k,$,Z,w,St),Z.side=Ue):A.renderBufferDirect(Q,k,$,Z,w,St),w.onAfterRender(A,k,Q,$,Z,St)}function xo(w,k,Q){k.isScene!==!0&&(k=Be);let $=J.get(w),Z=E.state.lights,St=E.state.shadowsArray,Tt=Z.state.version,Mt=mt.getParameters(w,Z.state,St,k,Q,E.state.lightProbeGridArray),Rt=mt.getProgramCacheKey(Mt),Dt=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;let Zt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=ut.get(w.envMap||$.environment,Zt),$.envMapRotation=$.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Xn),Dt=new Map,$.programs=Dt);let Qt=Dt.get(Rt);if(Qt!==void 0){if($.currentProgram===Qt&&$.lightsStateVersion===Tt)return gu(w,Mt),Qt}else Mt.uniforms=mt.getUniforms(w),C!==null&&w.isNodeMaterial&&C.build(w,Q,Mt),w.onBeforeCompile(Mt,A),Qt=mt.acquireProgram(Mt,Rt),Dt.set(Rt,Qt),$.uniforms=Mt.uniforms;let Ct=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=Ut.uniform),gu(w,Mt),$.needsLights=mp(w),$.lightsStateVersion=Tt,$.needsLights&&(Ct.ambientLightColor.value=Z.state.ambient,Ct.lightProbe.value=Z.state.probe,Ct.sunLights.value=Z.state.sun,Ct.sunLightShadows.value=Z.state.sunShadow,Ct.directionalLights.value=Z.state.directional,Ct.directionalLightShadows.value=Z.state.directionalShadow,Ct.spotLights.value=Z.state.spot,Ct.spotLightShadows.value=Z.state.spotShadow,Ct.rectAreaLights.value=Z.state.rectArea,Ct.ltc_1.value=Z.state.rectAreaLTC1,Ct.ltc_2.value=Z.state.rectAreaLTC2,Ct.pointLights.value=Z.state.point,Ct.pointLightShadows.value=Z.state.pointShadow,Ct.hemisphereLights.value=Z.state.hemi,Ct.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ct.sunShadowCascade.value=Z.state.sunShadowCascade,Ct.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ct.spotLightMatrix.value=Z.state.spotLightMatrix,Ct.spotLightMap.value=Z.state.spotLightMap,Ct.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.lightProbeGrid=E.state.lightProbeGridArray.length>0,$.currentProgram=Qt,$.uniformsList=null,Qt}function mu(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=$s.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function gu(w,k){let Q=J.get(w);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function fp(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let Q=0,$=w.length;Q<$;Q++){let Z=w[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function dp(w,k,Q,$,Z){k.isScene!==!0&&(k=Be),tt.resetTextureUnits();let St=k.fog,Tt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,Mt=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:te.workingColorSpace,Rt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Dt=ut.get($.envMap||Tt,Rt),Zt=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qt=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ct=!!Q.morphAttributes.position,de=!!Q.morphAttributes.normal,Le=!!Q.morphAttributes.color,Ae=kn;$.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ae=A.toneMapping);let ve=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Je=ve!==void 0?ve.length:0,wt=J.get($),rn=E.state.lights;if(Bt===!0&&(Yt===!0||w!==O)){let Se=w===O&&$.id===U;Ut.setState($,w,Se)}let re=!1;$.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==rn.state.version||wt.outputColorSpace!==Mt||Z.isBatchedMesh&&wt.batching===!1||!Z.isBatchedMesh&&wt.batching===!0||Z.isBatchedMesh&&wt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&wt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&wt.instancing===!1||!Z.isInstancedMesh&&wt.instancing===!0||Z.isSkinnedMesh&&wt.skinning===!1||!Z.isSkinnedMesh&&wt.skinning===!0||Z.isInstancedMesh&&wt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&wt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&wt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&wt.instancingMorph===!1&&Z.morphTexture!==null||wt.envMap!==Dt||$.fog===!0&&wt.fog!==St||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Ut.numPlanes||wt.numIntersection!==Ut.numIntersection)||wt.vertexAlphas!==Zt||wt.vertexTangents!==Qt||wt.morphTargets!==Ct||wt.morphNormals!==de||wt.morphColors!==Le||wt.toneMapping!==Ae||wt.morphTargetsCount!==Je||!!wt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,wt.__version=$.version);let En=wt.currentProgram;re===!0&&(En=xo($,k,Z),C&&$.isNodeMaterial&&C.onUpdateProgram($,En,wt));let qn=!1,yi=!1,cs=!1,_e=En.getUniforms(),Ie=wt.uniforms;if(v.useProgram(En.program)&&(qn=!0,yi=!0,cs=!0),$.id!==U&&(U=$.id,yi=!0),wt.needsLights){let Se=fp(E.state.lightProbeGridArray,Z);wt.lightProbeGrid!==Se&&(wt.lightProbeGrid=Se,yi=!0)}if(qn||O!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_e.setValue(G,"projectionMatrix",w.projectionMatrix),_e.setValue(G,"viewMatrix",w.matrixWorldInverse);let Mi=_e.map.cameraPosition;Mi!==void 0&&Mi.setValue(G,ie.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&_e.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&_e.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,yi=!0,cs=!0)}if(wt.needsLights&&(rn.state.sunShadowMap.length>0&&_e.setValue(G,"sunShadowMap",rn.state.sunShadowMap,tt),rn.state.directionalShadowMap.length>0&&_e.setValue(G,"directionalShadowMap",rn.state.directionalShadowMap,tt),rn.state.spotShadowMap.length>0&&_e.setValue(G,"spotShadowMap",rn.state.spotShadowMap,tt),rn.state.pointShadowMap.length>0&&_e.setValue(G,"pointShadowMap",rn.state.pointShadowMap,tt)),Z.isSkinnedMesh){_e.setOptional(G,Z,"bindMatrix"),_e.setOptional(G,Z,"bindMatrixInverse");let Se=Z.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),_e.setValue(G,"boneTexture",Se.boneTexture,tt))}Z.isBatchedMesh&&(_e.setOptional(G,Z,"batchingTexture"),_e.setValue(G,"batchingTexture",Z._matricesTexture,tt),_e.setOptional(G,Z,"batchingIdTexture"),_e.setValue(G,"batchingIdTexture",Z._indirectTexture,tt),_e.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&_e.setValue(G,"batchingColorTexture",Z._colorsTexture,tt));let vi=Q.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&V.update(Z,Q,En),(yi||wt.receiveShadow!==Z.receiveShadow)&&(wt.receiveShadow=Z.receiveShadow,_e.setValue(G,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(Ie.envMapIntensity.value=k.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=my()),yi){if(_e.setValue(G,"toneMappingExposure",A.toneMappingExposure),wt.needsLights&&pp(Ie,cs),St&&$.fog===!0&&Nt.refreshFogUniforms(Ie,St),Nt.refreshMaterialUniforms(Ie,$,W,Y,E.state.transmissionRenderTarget[w.id]),wt.needsLights&&wt.lightProbeGrid){let Se=wt.lightProbeGrid;Ie.probesSH.value=Se.texture,Ie.probesMin.value.copy(Se.boundingBox.min),Ie.probesMax.value.copy(Se.boundingBox.max),Ie.probesResolution.value.copy(Se.resolution)}$s.upload(G,mu(wt),Ie,tt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&($s.upload(G,mu(wt),Ie,tt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&_e.setValue(G,"center",Z.center),_e.setValue(G,"modelViewMatrix",Z.modelViewMatrix),_e.setValue(G,"normalMatrix",Z.normalMatrix),_e.setValue(G,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let Se=$.uniformsGroups;for(let Mi=0,hs=Se.length;Mi<hs;Mi++){let _u=Se[Mi];ot.update(_u,En),ot.bind(_u,En)}}return En}function pp(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function mp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,k,Q){let $=J.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(w.texture).__webglTexture=k,J.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let Q=J.get(w);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,Q=0){q=w,z=k,B=Q;let $=null,Z=!1,St=!1;if(w){let Mt=J.get(w);if(Mt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(G.FRAMEBUFFER,Mt.__webglFramebuffer),F.copy(w.viewport),K.copy(w.scissor),j=w.scissorTest,v.viewport(F),v.scissor(K),v.setScissorTest(j),U=-1;return}else if(Mt.__webglFramebuffer===void 0)tt.setupRenderTarget(w);else if(Mt.__hasExternalTextures)tt.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Zt=w.depthTexture;if(Mt.__boundDepthTexture!==Zt){if(Zt!==null&&J.has(Zt)&&(w.width!==Zt.image.width||w.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(w)}}let Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);let Dt=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Dt[k])?$=Dt[k][Q]:$=Dt[k],Z=!0):w.samples>0&&tt.useMultisampledRTT(w)===!1?$=J.get(w).__webglMultisampledFramebuffer:Array.isArray(Dt)?$=Dt[Q]:$=Dt,F.copy(w.viewport),K.copy(w.scissor),j=w.scissorTest}else F.copy(lt).multiplyScalar(W).floor(),K.copy(dt).multiplyScalar(W).floor(),j=Lt;if(Q!==0&&($=H),v.bindFramebuffer(G.FRAMEBUFFER,$)&&v.drawBuffers(w,$),v.viewport(F),v.scissor(K),v.setScissorTest(j),Z){let Mt=J.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Mt.__webglTexture,Q)}else if(St){let Mt=k;for(let Rt=0;Rt<w.textures.length;Rt++){let Dt=J.get(w.textures[Rt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,Q,Mt)}}else if(w!==null&&Q!==0){let Mt=J.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mt.__webglTexture,Q)}U=-1};function xu(w){let k=J.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=I.textureFormatReadable(w.format),k.__typeReadable=I.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,Q,$,Z,St,Tt,Mt=0){if(!(w&&w.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){v.bindFramebuffer(G.FRAMEBUFFER,Rt);try{let Dt=w.textures[Mt],Zt=Dt.format,Qt=Dt.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Mt);let Ct=xu(Dt);if(Ct.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-$&&Q>=0&&Q<=w.height-Z&&G.readPixels(k,Q,$,Z,_t.convert(Zt),_t.convert(Qt),St)}finally{let Dt=q!==null?J.get(q).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,k,Q,$,Z,St,Tt,Mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(k>=0&&k<=w.width-$&&Q>=0&&Q<=w.height-Z){v.bindFramebuffer(G.FRAMEBUFFER,Rt);let Dt=w.textures[Mt],Zt=Dt.format,Qt=Dt.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Mt);let Ct=xu(Dt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.bufferData(G.PIXEL_PACK_BUFFER,St.byteLength,G.STREAM_READ),G.readPixels(k,Q,$,Z,_t.convert(Zt),_t.convert(Qt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Le=q!==null?J.get(q).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,Le);let Ae=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Uf(G,Ae,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,St),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(de),G.deleteSync(Ae),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,Q=0){let $=Math.pow(2,-Q),Z=Math.floor(w.image.width*$),St=Math.floor(w.image.height*$),Tt=k!==null?k.x:0,Mt=k!==null?k.y:0;tt.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,Tt,Mt,Z,St),v.unbindTexture()},this.copyTextureToTexture=function(w,k,Q=null,$=null,Z=0,St=0){let Tt,Mt,Rt,Dt,Zt,Qt,Ct,de,Le,Ae=w.isCompressedTexture?w.mipmaps[St]:w.image;if(Q!==null)Tt=Q.max.x-Q.min.x,Mt=Q.max.y-Q.min.y,Rt=Q.isBox3?Q.max.z-Q.min.z:1,Dt=Q.min.x,Zt=Q.min.y,Qt=Q.isBox3?Q.min.z:0;else{let Ie=Math.pow(2,-Z);Tt=Math.floor(Ae.width*Ie),Mt=Math.floor(Ae.height*Ie),w.isDataArrayTexture?Rt=Ae.depth:w.isData3DTexture?Rt=Math.floor(Ae.depth*Ie):Rt=1,Dt=0,Zt=0,Qt=0}$!==null?(Ct=$.x,de=$.y,Le=$.z):(Ct=0,de=0,Le=0);let ve=_t.convert(k.format),Je=_t.convert(k.type),wt;k.isData3DTexture?(tt.setTexture3D(k,0),wt=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(tt.setTexture2DArray(k,0),wt=G.TEXTURE_2D_ARRAY):(tt.setTexture2D(k,0),wt=G.TEXTURE_2D),v.activeTexture(G.TEXTURE0),v.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),v.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),v.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);let rn=v.getParameter(G.UNPACK_ROW_LENGTH),re=v.getParameter(G.UNPACK_IMAGE_HEIGHT),En=v.getParameter(G.UNPACK_SKIP_PIXELS),qn=v.getParameter(G.UNPACK_SKIP_ROWS),yi=v.getParameter(G.UNPACK_SKIP_IMAGES);v.pixelStorei(G.UNPACK_ROW_LENGTH,Ae.width),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ae.height),v.pixelStorei(G.UNPACK_SKIP_PIXELS,Dt),v.pixelStorei(G.UNPACK_SKIP_ROWS,Zt),v.pixelStorei(G.UNPACK_SKIP_IMAGES,Qt);let cs=w.isDataArrayTexture||w.isData3DTexture,_e=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Ie=J.get(w),vi=J.get(k),Se=J.get(Ie.__renderTarget),Mi=J.get(vi.__renderTarget);v.bindFramebuffer(G.READ_FRAMEBUFFER,Se.__webglFramebuffer),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let hs=0;hs<Rt;hs++)cs&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(w).__webglTexture,Z,Qt+hs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(k).__webglTexture,St,Le+hs)),G.blitFramebuffer(Dt,Zt,Tt,Mt,Ct,de,Tt,Mt,G.DEPTH_BUFFER_BIT,G.NEAREST);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||J.has(w)){let Ie=J.get(w),vi=J.get(k);v.bindFramebuffer(G.READ_FRAMEBUFFER,L),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,D);for(let Se=0;Se<Rt;Se++)cs?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ie.__webglTexture,Z,Qt+Se):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ie.__webglTexture,Z),_e?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vi.__webglTexture,St,Le+Se):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vi.__webglTexture,St),Z!==0?G.blitFramebuffer(Dt,Zt,Tt,Mt,Ct,de,Tt,Mt,G.COLOR_BUFFER_BIT,G.NEAREST):_e?G.copyTexSubImage3D(wt,St,Ct,de,Le+Se,Dt,Zt,Tt,Mt):G.copyTexSubImage2D(wt,St,Ct,de,Dt,Zt,Tt,Mt);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else _e?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(wt,St,Ct,de,Le,Tt,Mt,Rt,ve,Je,Ae.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(wt,St,Ct,de,Le,Tt,Mt,Rt,ve,Ae.data):G.texSubImage3D(wt,St,Ct,de,Le,Tt,Mt,Rt,ve,Je,Ae):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,St,Ct,de,Tt,Mt,ve,Je,Ae.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,St,Ct,de,Ae.width,Ae.height,ve,Ae.data):G.texSubImage2D(G.TEXTURE_2D,St,Ct,de,Tt,Mt,ve,Je,Ae);v.pixelStorei(G.UNPACK_ROW_LENGTH,rn),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,re),v.pixelStorei(G.UNPACK_SKIP_PIXELS,En),v.pixelStorei(G.UNPACK_SKIP_ROWS,qn),v.pixelStorei(G.UNPACK_SKIP_IMAGES,yi),St===0&&k.generateMipmaps&&G.generateMipmap(wt),v.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&tt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?tt.setTextureCube(w,0):w.isData3DTexture?tt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?tt.setTexture2DArray(w,0):tt.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){z=0,B=0,q=null,v.reset(),bt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var dn=(i,t,e=0)=>new N(i,t,e),Ah=i=>Math.max(0,i),jt=(i,t,e)=>i+(t-i)*e;function Ks(i,t){let e=[],n=i.length-1;for(let s=0;s<t;s++){let r=s/(t-1)*n,o=Math.min(n-1,Math.floor(r)),a=r-o,c=i[Math.max(0,o-1)],l=i[o],h=i[o+1],u=i[Math.min(n,o+2)],f=(m,_,x,p)=>.5*(2*_+(-m+x)*a+(2*m-5*_+4*x-p)*a*a+(-m+3*_-3*x+p)*a*a*a),d=m=>Math.max(1e-4,f(c[m],l[m],h[m],u[m]));e.push({x:f(c.x,l.x,h.x,u.x),y:f(c.y,l.y,h.y,u.y),z:f(c.z||0,l.z||0,h.z||0,u.z||0),rw:d("rw"),rh:d("rh"),k:r})}return e}var pi=class{constructor(t,e,n=1){this.n=t,this.r=e,this.count=n,this.painted=[];let s=t*(e+1),r=s*n,o=new ae;this.N1=s,this.P=new Float32Array(r*3),this.Nn=new Float32Array(r*3),this.U=new Float32Array(r*2),o.setAttribute("position",new ce(this.P,3)),o.setAttribute("normal",new ce(this.Nn,3)),o.setAttribute("uv",new ce(this.U,2)),o.setAttribute("color",new ce(new Float32Array(r*3),3)),o.setAttribute("fl",new ce(new Float32Array(r),1)),o.attributes.position.setUsage(El),o.attributes.normal.setUsage(El);let a=[];for(let c=0;c<n;c++)for(let l=0;l<t-1;l++)for(let h=0;h<e;h++){let u=c*s+l*(e+1)+h,f=u+e+1;a.push(u,f,u+1,f,f+1,u+1)}o.setIndex(a),this.g=o,this.side=dn(0,0,1)}update(t,e,n=0){let s=n*this.N1,r=e&&!this.painted[n],{P:o,Nn:a,U:c,r:l}=this,h=this.side,u=dn(),f=dn(),d=dn(),m=dn(),_=0,x=this.g.attributes.color.array,p=this.g.attributes.fl.array;for(let S=0;S<this.n;S++){let T=t[Math.max(0,S-1)],y=t[Math.min(this.n-1,S+1)],b=t[S];u.set(y.x-T.x,y.y-T.y,y.z-T.z).normalize(),d.copy(h).addScaledVector(u,-h.dot(u)).normalize(),f.crossVectors(d,u).normalize(),S&&(_+=Math.hypot(b.x-t[S-1].x,b.y-t[S-1].y,b.z-t[S-1].z));let E=Math.PI*(b.rw+b.rh);for(let R=0;R<=l;R++){let g=R/l*Math.PI*2,M=Math.cos(g),A=Math.sin(g),P=s+(S*(l+1)+R);if(m.set(b.x,b.y,b.z).addScaledVector(f,M*b.rh).addScaledVector(d,A*b.rw),o[P*3]=m.x,o[P*3+1]=m.y,o[P*3+2]=m.z,m.set(0,0,0).addScaledVector(f,M/Math.max(b.rh,1e-4)).addScaledVector(d,A/Math.max(b.rw,1e-4)).normalize(),a[P*3]=m.x,a[P*3+1]=m.y,a[P*3+2]=m.z,c[P*2]=_,c[P*2+1]=R/l*E,r){let C=e(S,M,A,b);x[P*3]=C[0],x[P*3+1]=C[1],x[P*3+2]=C[2],p[P]=C[3]}}}r&&(this.painted[n]=!0,this.g.attributes.color.needsUpdate=!0,this.g.attributes.fl.needsUpdate=!0,this.g.attributes.uv.needsUpdate=!0),this.g.attributes.position.needsUpdate=!0,this.g.attributes.normal.needsUpdate=!0,this.g.boundingSphere||this.g.computeBoundingSphere()}},Th=new Map;function Il(i,t=.85){let e=i+":"+t;if(Th.has(e))return Th.get(e);let n=[];for(let s=0;s<=i;s++){let r=new oe({vertexColors:!0,roughness:t,metalness:0}),o=i?s/i:0;r.onBeforeCompile=a=>{a.uniforms.uK={value:o},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float fl; uniform float uK; varying vec2 vU; varying float vK;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed += objectNormal * fl * uK + vec3(-.35, -.5, 0.) * fl * uK * uK; vU = uv; vK = uK;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vU; varying float vK;
float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
 if (vK > 0.) { vec2 c = floor(vU * vec2(700., 700.)); float h = h2(c); if (h < vK * 1.05) discard; }
 diffuseColor.rgb *= mix(.55, 1.08, vK) * (.92 + .16 * h2(floor(vU * 90.)));`)},r.customProgramCacheKey=()=>"fur"+i+"_"+s,r.userData.shell=s,n.push(r)}return Th.set(e,n),n}function Qs(i,t,e,n=!0){t.meshes=e.map((s,r)=>{let o=new ct(t.g,s);return o.castShadow=n&&r===0,o.receiveShadow=r===0,o.frustumCulled=!1,o.userData.shell=r,o.userData.shells=e.length-1,i.add(o),o})}function js(i,t,e){let n=i.x-t.x,s=i.y-t.y,r=Math.cos(e),o=Math.sin(e);return{...i,x:t.x+n*r-s*o,y:t.y+n*o+s*r}}function Rh(i,t,e){let n=[{x:i.x,y:i.y}],s=i.x,r=i.y;return t.forEach((o,a)=>{s+=Math.sin(e[a])*o,r-=Math.cos(e[a])*o,n.push({x:s,y:r})}),n}var ro=[.035,.032,.034],mi=[.93,.91,.86];function Ll(i={}){let t=new zt,e=Il(i.shells||7),n=Il(i.shortShells||3),s=new pi(60,26),r=new pi(26,14,4),o=new pi(18,10),a=[new pi(8,8),new pi(8,8)];a[0].side=dn(1,0,0),a[1].side=dn(1,0,0),Qs(t,s,e),Qs(t,r,e),Qs(t,o,e),a.forEach(f=>Qs(t,f,n,!1));let c=new oe({color:"#2a1608",roughness:.12,metalness:.1}),l=new oe({color:"#111",roughness:.35}),h=[0,1].map(()=>{let f=new ct(new Oe(.013,12,8),c);return t.add(f),f}),u=new ct(new Oe(.021,12,8),l);return u.scale.set(.9,.8,1.15),t.add(u),t.userData={body:s,legs:r,tail:o,ears:a,eyes:h,nose:u,feet:[]},oo(t,0,0,0),t}var gd=[[-.37,.5,.02,.02],[-.35,.49,.075,.08],[-.29,.475,.1,.108],[-.18,.46,.088,.092],[-.04,.452,.094,.112],[.1,.44,.108,.142],[.22,.45,.104,.138],[.31,.5,.082,.1],[.38,.585,.066,.075],[.425,.66,.06,.066],[.46,.72,.072,.07],[.52,.74,.078,.068],[.565,.722,.058,.054],[.605,.705,.044,.04],[.64,.698,.03,.028],[.652,.697,.004,.004]],gy=dn(.33,.52),R1=dn(-.26,.46),xy=dn(0,.45),_y={x:-.34,y:.1};function oo(i,t,e=0,n=0,s=!1,r=0,o={}){let a=i.userData,c=Math.PI*2,l=Math.max(0,Math.min(1,+s||0)),h=1-l,u=o.sit||0,f=o.time||0;s=l>.5;let d=Math.sin(t*c+1.3)*.035*h*(1-e),m=Math.abs(Math.sin(t*c))*.03*(1-e)*h,_=jt(jt(-.25,Math.sin(t*c+2)*.07-.05,1-e)*h+.08*l,-.35,u),x=.62*u,p=n+x,S=B=>{let q=js(B,xy,n);return q.y+=m-.25*u-.018,u&&(q=js(q,_y,x)),q},T=gd.map(([B,q,U,O],F)=>{let K={x:B,y:q,z:0,rw:U,rh:O};return F<=3&&(K.x+=d*(1-F/4)*1.2,K.y+=d*.25),F>=8&&(K=js(K,gy,_*Math.min(1,(F-7)/3))),S(K)}),y=Ks(T,a.body.n);a.body.update(y,(B,q,U,O)=>{let F=O.k,K=ro,j=.022;return F>=7.6&&F<=8.6&&(K=mi,j=.04),F>5.6&&F<7.6&&q<-.35+(F-5.6)*.25&&(K=mi,j=.035),F>6.5&&F<8&&q<.2&&Math.abs(U)<.75&&(K=mi,j=.04),F>1.5&&F<5&&q<-.8&&(j=.03),F>=11.9?(K=mi,j=.004):F>=11.3&&(K=q<.2||Math.abs(U)<.25?mi:ro,j=.005),F>=9.8&&F<11.3&&(j=.008,q>.45&&Math.abs(U)<.14+(F-9.8)*.06&&(K=mi),q<-.5&&F>10.6&&(K=mi)),[...K,j]});let b=B=>y[Math.round(B/(gd.length-1)*(a.body.n-1))],E=b(10.5),R=b(12),g=dn(R.x-E.x,R.y-E.y,0).normalize(),M=dn(-g.y,g.x,0);a.eyes.forEach((B,q)=>{let U=q?-1:1;B.position.set(E.x+g.x*.045+M.x*.028,E.y+g.y*.045+M.y*.028,U*.052)});let A=b(14.4);a.nose.position.set(A.x+g.x*.006,A.y+g.y*.006+.004,0),a.ears.forEach((B,q)=>{let U=q?-1:1,O=b(10.2),F=e?.6:.2+Math.sin(t*c)*.1*h,K={x:O.x-g.x*.01+M.x*.05,y:O.y+M.y*.05},j=[[0,-.01,.034,.009],[-.01,.02,.032,.008],[-.01,.045,.022,.006],[.008+F*.02,.058,.012,.004],[.026+F*.03,.05-F*.02,.002,.002]].map(([ht,at,rt,Y])=>({x:K.x+g.x*ht+M.x*at,y:K.y+g.y*ht+M.y*at,z:U*(.045+at*.25),rw:rt,rh:Y}));B.update(Ks(j,B.n),()=>[...ro,.008])});let P=[.42,.52,0,.1],C=[.16,.205,.075],H=[.19,.2,.13];for(let B=0;B<4;B++){let q=a.legs,U=B<2,O=(B%2?-1:1)*(U?.05:.06),F=(t+P[B])*c,K=Math.sin(F),j=Ah(Math.cos(F)),ht;if(U){let dt=.08+.6*K*h,Lt=-(.08+1.3*j*h),At=.18-.9*j*h;dt=jt(dt,1.25,e),Lt=jt(Lt,-2.3,e),At=jt(At,-.9,e),dt=jt(dt,.95,r),Lt=jt(Lt,-.12,r),At=jt(At,.3,r),ht=[dt,dt+Lt,dt+Lt+At],l&&(ht=ht.map((Bt,Yt)=>jt(Bt,[.05,-.05,.15][Yt],l))),u&&(ht=ht.map((Bt,Yt)=>jt(Bt,[.12,.06,.3][Yt],u)))}else{let dt=.28+.55*K*h,Lt=1+.6*j*h,At=.82+.25*j*h;dt=jt(dt,-1,e),Lt=jt(Lt,.35,e),At=jt(At,.35,e),dt=jt(dt,.1,r),Lt=jt(Lt,1.5,r),At=jt(At,1.2,r),ht=[dt,dt-Lt,dt-Lt+At],l&&(ht=ht.map((Bt,Yt)=>jt(Bt,[.3,-.72,.1][Yt],l))),u&&(ht=ht.map((Bt,Yt)=>jt(Bt,[1.2,-1.75,1.45][Yt],u)))}let at=U?{x:.25,y:.47}:{x:-.26,y:.47},rt=Rh(at,U?C:H,ht.map(dt=>dt-p)),Y=rt[3],W=ht[2]-p,it;if(U){let dt={x:at.x+.03,y:at.y+.12,z:O*.3,rw:.05,rh:.06};it=[dt,{x:jt(rt[0].x,dt.x,.45),y:jt(rt[0].y,dt.y,.45),z:O*.6,rw:.058,rh:.068},{x:rt[0].x,y:rt[0].y,z:O*.85,rw:.046,rh:.058},{x:jt(rt[0].x,rt[1].x,.5),y:jt(rt[0].y,rt[1].y,.5),z:O,rw:.032,rh:.042},{x:rt[1].x,y:rt[1].y,z:O,rw:.025,rh:.03},{x:jt(rt[1].x,rt[2].x,.45),y:jt(rt[1].y,rt[2].y,.45),z:O,rw:.021,rh:.024},{x:rt[2].x,y:rt[2].y,z:O,rw:.019,rh:.021},{x:jt(rt[2].x,rt[3].x,.5),y:jt(rt[2].y,rt[3].y,.5),z:O,rw:.018,rh:.018}]}else it=[{x:at.x+.02,y:at.y+.08,z:O*.3,rw:.06,rh:.085},{x:jt(rt[0].x,rt[1].x,.1),y:jt(rt[0].y,rt[1].y,.1),z:O*.72,rw:.062,rh:.1},{x:jt(rt[0].x,rt[1].x,.45),y:jt(rt[0].y,rt[1].y,.45),z:O*.9,rw:.046,rh:.075},{x:rt[1].x,y:rt[1].y,z:O,rw:.03,rh:.038},{x:jt(rt[1].x,rt[2].x,.4),y:jt(rt[1].y,rt[2].y,.4),z:O,rw:.026,rh:.036},{x:rt[2].x,y:rt[2].y,z:O,rw:.019,rh:.024},{x:jt(rt[2].x,rt[3].x,.5),y:jt(rt[2].y,rt[3].y,.5),z:O,rw:.017,rh:.018}];it.push({x:Y.x,y:Y.y,z:O,rw:.019,rh:.018},{x:Y.x+Math.cos(W)*.03,y:Y.y+Math.sin(W)*.03-.005,z:O,rw:.025,rh:.019},{x:Y.x+Math.cos(W)*.052,y:Y.y+Math.sin(W)*.052-.008,z:O,rw:.006,rh:.006});let ft=it.map(S);a.feet[B]=S({x:Y.x+Math.cos(W)*.03,y:Y.y+Math.sin(W)*.03-.024,z:O});let lt=U?4.6:4.4;q.update(Ks(ft,q.n),(dt,Lt,At,Bt)=>{let Yt=Bt.k>lt;return[...Yt?mi:ro,Yt?.005:Bt.k<1.5?.022:Bt.k<3?.016:.009]},B)}let L=s?Math.sin(f*8)*.15:Math.sin(t*c)*.12,D=e?.9:jt(.25,-.2,u),z=[[-.35,.5,.035,.035],[-.43,.47,.03,.03],[-.5,.42,.024,.024],[-.55,.36,.018,.018],[-.57,.3,.013,.013],[-.565,.26,.004,.004]].map(([B,q,U,O],F)=>{let K=js({x:B,y:q,z:0,rw:U,rh:O},{x:-.35,y:.5},D*(F/5));return K.z=Math.sin(F*.6)*L*F*.02,S(K)});a.tail.update(Ks(z,a.tail.n),(B,q,U,O)=>[...O.k>4.1?mi:ro,.03+(q<0?.02:0)])}var tr=Math.PI*2,Ph=(i,t,e)=>Math.max(t,Math.min(e,i)),Pe=(i,t,e)=>i+(t-i)*e,cn=(i,t,e)=>{let n=Ph((e-i)/(t-i),0,1);return n*n*(3-2*n)},Cn=i=>{let t=new It(i);return[t.r,t.g,t.b]},Dl=new N(0,1,0),gi=new N(0,0,1),xd=new N(1,0,0),pn=(i,t)=>new qe().setFromAxisAngle(i,t),Nl=(...i)=>i.reduce((t,e)=>t.multiply(e),new qe),qt=(i=0,t=0,e=0)=>new N(i,t,e);function ao(i,t){t=(t%1+1)%1;let e=i.length,n=e-1;for(let h=0;h<e;h++)if(i[h][0]>t){n=h-1;break}let s=h=>{let u=(h%e+e)%e;return[i[u][0]+Math.floor(h/e),i[u][1]]},r=s(n-1),o=s(n),a=s(n+1),c=s(n+2),l=(t-o[0])/(a[0]-o[0]);return .5*(2*o[1]+(-r[1]+a[1])*l+(2*r[1]-5*o[1]+4*a[1]-c[1])*l*l+(-r[1]+3*o[1]-3*a[1]+c[1])*l*l*l)}var ss=class{constructor(t,e,n){this.n=t,this.r=e,this.paint=n;let s=t*(e+1),r=new ae;this.P=new Float32Array(s*3),this.Nn=new Float32Array(s*3),this.C=new Float32Array(s*3),this.Ce=new Float32Array(t*3),r.setAttribute("position",new ce(this.P,3)),r.setAttribute("normal",new ce(this.Nn,3)),r.setAttribute("color",new ce(this.C,3));let o=[];for(let a=0;a<t-1;a++)for(let c=0;c<e;c++){let l=a*(e+1)+c,h=l+e+1;o.push(l,h,l+1,h,h+1,l+1)}r.setIndex(o),this.g=r,this.painted=!1,this.cs=[];for(let a=0;a<=e;a++){let c=a/e*tr;this.cs.push([Math.cos(c),Math.sin(c)])}}update(t){let e=this.n,n=this.r,s=this.P,r=t.length-1,o=qt(),a=qt(),c=qt(),l=qt(),h=[];for(let p=0;p<e;p++){let S=p/(e-1)*r,T=Math.min(r-1,Math.floor(S)),y=S-T,b=t[Math.max(0,T-1)],E=t[T],R=t[T+1],g=t[Math.min(r,T+2)],M=(P,C,H,L)=>.5*(2*C+(-P+H)*y+(2*P-5*C+4*H-L)*y*y+(-P+3*C-3*H+L)*y*y*y),A=y*y*(3-2*y);h.push({x:M(b.p.x,E.p.x,R.p.x,g.p.x),y:M(b.p.y,E.p.y,R.p.y,g.p.y),z:M(b.p.z,E.p.z,R.p.z,g.p.z),a:E.a.clone().lerp(R.a,A),rw:Pe(E.rw,R.rw,A),rf:Pe(E.rf,R.rf,A),rb:Pe(E.rb,R.rb,A),e:Pe(E.e||2,R.e||2,A),k:S})}for(let p=0;p<e;p++){let S=h[Math.max(0,p-1)],T=h[Math.min(e-1,p+1)],y=h[p];o.set(T.x-S.x,T.y-S.y,T.z-S.z).normalize(),a.copy(y.a).addScaledVector(o,-y.a.dot(o)).normalize(),c.crossVectors(o,a).normalize(),this.Ce[p*3]=y.x,this.Ce[p*3+1]=y.y,this.Ce[p*3+2]=y.z;let b=2/y.e;for(let E=0;E<=n;E++){let[R,g]=this.cs[E],M=Math.sign(R)*Math.pow(Math.abs(R),b),A=Math.sign(g)*Math.pow(Math.abs(g),b);l.set(y.x,y.y,y.z).addScaledVector(c,M*(R>0?y.rf:y.rb)).addScaledVector(a,A*y.rw);let P=(p*(n+1)+E)*3;if(s[P]=l.x,s[P+1]=l.y,s[P+2]=l.z,!this.painted){let C=this.paint(y.k,R,g,p);this.C[P]=C[0],this.C[P+1]=C[1],this.C[P+2]=C[2]}}}let u=this.Nn,f=qt(),d=qt(),m=qt(),_=qt(),x=(p,S)=>(p*(n+1)+S)*3;for(let p=0;p<e;p++)for(let S=0;S<=n;S++){let T=Math.max(0,p-1),y=Math.min(e-1,p+1),b=(S+n-1)%n,E=(S+1)%n,R=x(T,S),g=x(y,S),M=x(p,b),A=x(p,E);f.set(s[g]-s[R],s[g+1]-s[R+1],s[g+2]-s[R+2]),d.set(s[A]-s[M],s[A+1]-s[M+1],s[A+2]-s[M+2]),m.crossVectors(d,f);let P=x(p,S);_.set(s[P]-this.Ce[p*3],s[P+1]-this.Ce[p*3+1],s[P+2]-this.Ce[p*3+2]),m.lengthSq()<1e-14&&m.copy(_),p===0||p===e-1?(o.set(this.Ce[y*3]-this.Ce[T*3],this.Ce[y*3+1]-this.Ce[T*3+1],this.Ce[y*3+2]-this.Ce[T*3+2]).normalize(),m.copy(o).multiplyScalar(p?1:-1)):m.dot(_)<0&&m.negate(),m.normalize(),u[P]=m.x,u[P+1]=m.y,u[P+2]=m.z}this.painted||(this.painted=!0,this.g.attributes.color.needsUpdate=!0),this.g.attributes.position.needsUpdate=!0,this.g.attributes.normal.needsUpdate=!0,this.g.computeBoundingSphere()}},he=(i,t,e,n=e,s=n,r=2)=>({p:i,a:t,rw:e,rf:n,rb:s,e:r}),Fe={skin:Cn("#d9a07f"),skinD:Cn("#c48466"),shirt:Cn("#2f7fd0"),shirtD:Cn("#2468ad"),trim:Cn("#c6f432"),legs:Cn("#23262e"),legsS:Cn("#3a3f4a"),shoe:Cn("#f2f2ee"),shoeC:Cn("#ff6a3d"),sole:Cn("#3a3a3c"),hair:"#5a3620",band:"#c6f432"};function _d(i,t){let e=i.attributes.position,n=qt();for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n),e.setXYZ(s,n.x,n.y,n.z);return i.computeVertexNormals(),i}var Ul=(i,t,e,n)=>Math.exp(-(i*i)/(e*e)-t*t/(n*n));function yd(i){let{x:t,y:e,z:n}=i;if(e<0){let l=Math.hypot(t,n)||1,h=Math.pow(1-Math.pow(-e,2.6),1/2.6);t*=h/l,n*=h/l}let s=cn(-.05,-.95,e),r=t<0,o=t*.1,a=e*(e>0?.118:.112),c=n*.079;r?o*=1+.08*(1-Math.abs(e))-.45*s:o*=1-.1*s,c*=1-.3*Math.pow(s,1.3),t>0&&(o=Math.min(o,.09+.006*e));for(let l of[-1,1])o-=.007*Ul(e-.1,n-l*.36,.13,.15)*cn(.4,.8,t);o+=.004*Ul(e-.27,n,.08,.5)*cn(.5,.8,t),o+=.006*Ul(e+.62,n,.18,.3)*cn(.3,.7,t),a-=.012*s*s,c*=1+.06*Ul(e+.15,t-.45,.25,.3),i.set(o,a,c)}function Md(i){let t=[],e=[],n=[],s=[],r=new se,o=new Gt,a=new qe,c=new un,l=qt(),h=0;for(let[f,d,m,_,x]of i){r.compose(qt(...m),a.setFromEuler(c.set(...x||[0,0,0])),qt(..._)),o.getNormalMatrix(r);let p=f.attributes.position,S=f.attributes.normal,T=Cn(d);for(let b=0;b<p.count;b++)l.fromBufferAttribute(p,b).applyMatrix4(r),t.push(l.x,l.y,l.z),l.fromBufferAttribute(S,b).applyMatrix3(o).normalize(),e.push(l.x,l.y,l.z),n.push(T[0],T[1],T[2]);let y=f.index.array;for(let b=0;b<y.length;b++)s.push(y[b]+h);h+=p.count}let u=new ae;return u.setAttribute("position",new Vt(t,3)),u.setAttribute("normal",new Vt(e,3)),u.setAttribute("color",new Vt(n,3)),u.setIndex(s),u}var Fl="#d9a07f";function yy(){let i=[.02,.088,0],t=_d(new Oe(1,24,18),yd),e=_d(new Oe(1,24,18),l=>{let h=l.x,u=l.y;yd(l);let f=h>0?Pe(.05,.5,cn(.1,.6,h)):Pe(.05,-.55,cn(-.05,-.6,h));l.multiplyScalar(Pe(.9,1.065+.045*cn(.3,1,u)-.02*cn(.2,.9,h),cn(f-.2,f+.06,u)))}),n=new Oe(1,8,6),s=new Oe(1,7,5),r=(l,h,u)=>[i[0]+l,i[1]+h,i[2]+u],o=[[t,Fl,i,[1,1,1]],[e,Fe.hair,i,[1,1,1]]];for(let l of[-1,1])o.push([s,"#f4efe8",r(.079,.012,l*.031),[.008,.0095,.014]],[s,"#2a1a12",r(.0865,.012,l*.031),[.003,.0085,.0085]],[s,Fe.hair,r(.087,.036,l*.033),[.005,.005,.018],[l*.15,0,0]],[n,Fl,r(-.004,-.004,l*.079),[.016,.032,.01],[0,0,.15]]);o.push([n,Fl,r(.088,-.008,0),[.016,.03,.011],[0,0,-.3]],[s,"#b8615a",r(.083,-.052,0),[.008,.005,.019]],[new vn(.017,.007,5,10),Fe.band,r(-.1,.045,0),[1,1,1],[0,Math.PI/2,-.9]]);let a=new ct(Md(o),new oe({vertexColors:!0,roughness:.62})),c=new zt;return c.add(a),c}function vy(){let i=new oe({vertexColors:!0,roughness:.6}),t=new Oe(1,7,6),e=r=>{let o=new ct(Md(r.map(([a,c,l,h,u,f,d])=>[t,Fl,[a,c,l],[h,u,f],[0,0,d||0]])),i);return o.castShadow=!0,o},n=()=>e([[.004,-.045,0,.036,.045,.026],[.022,-.06,0,.022,.03,.027],[.018,-.03,0,.012,.022,.012,.5]]),s=()=>e([[0,-.045,0,.036,.05,.014],[.002,-.11,0,.03,.05,.011],[.03,-.04,0,.01,.03,.01,-.6]]);return[0,1].map(()=>({fist:n(),open:s()}))}function My(){let i=new ss(11,10,(e,n)=>n<-.35?Fe.sole:n<-.1?Fe.shoe:e>1.4&&e<3.5&&n>.2&&n<.75?Fe.shoeC:Fe.shoe),t=qt(0,0,-1);return i.update([he(qt(-.07,-.035,0),t,.012,.012,.012),he(qt(-.058,-.035,0),t,.036,.035,.04,2.6),he(qt(-.01,-.035,0),t,.043,.042,.042,2.8),he(qt(.06,-.047,0),t,.048,.03,.03,2.8),he(qt(.12,-.052,0),t,.049,.023,.025,2.8),he(qt(.17,-.052,0),t,.04,.018,.023,2.4),he(qt(.196,-.05,0),t,.02,.01,.018),he(qt(.203,-.049,0),t,.004,.004,.005)]),i.g}var Ch=.885,Sy=.42,by=.41,Ey=.29,wy=.25,Ty=.085,Ay=.158,Ry=1.39,Ih=[[.775,0,.03,.03,.03,2],[.795,0,.105,.07,.085,2.2],[.835,-.004,.152,.09,.112,2.4],[.895,-.006,.168,.092,.122,2.6],[.965,0,.16,.09,.105,2.6],[1.03,.006,.138,.084,.086,2.5],[1.085,.01,.124,.078,.078,2.4],[1.15,.012,.13,.082,.082,2.4],[1.22,.014,.142,.1,.086,2.5],[1.285,.01,.152,.098,.09,2.6],[1.345,.002,.16,.082,.09,2.7],[1.39,-.008,.15,.066,.078,2.8],[1.425,-.01,.09,.056,.064,2.3],[1.455,0,.052,.05,.052,2],[1.51,.012,.047,.047,.047,2],[1.56,.02,.04,.04,.04,2]],Cy=[[0,.42],[.12,.12],[.3,-.3],[.4,-.42],[.52,-.25],[.66,.22],[.8,.66],[.9,.62]],Py=[[0,.28],[.13,.62],[.3,.38],[.42,.7],[.56,1.75],[.66,2],[.8,1.05],[.92,.32]],Iy=[[0,.02],[.13,.45],[.3,.45],[.4,.12],[.55,-.28],[.7,-.1],[.85,.15],[.95,.1]],vd=[[0,0],[.2,.004],[.35,.01],[.45,.045],[.5,.05],[.55,.04],[.7,.008],[.85,0]];function Bl(i={}){let t=new zt,e=new oe({vertexColors:!0,roughness:.78}),n=new oe({vertexColors:!0,roughness:.6}),s=new oe({color:Fe.hair,roughness:.78}),r=new ss(30,18,(m,_,x)=>{let p=Ih[Math.min(Ih.length-1,Math.round(m))][0]+(m-Math.round(m))*.05;return p>1.448-.03*cn(.6,1,_)?Fe.skin:p>1.43-.03*cn(.6,1,_)?Fe.shirtD:p>.985?Math.abs(x)>.93?Fe.shirtD:Fe.shirt:p>.955?Fe.trim:Fe.legs}),o=[0,1].map(()=>new ss(22,12,(m,_,x)=>m>8.2?Fe.skin:Fe.legs)),a=[0,1].map(()=>new ss(20,10,(m,_)=>m<2.1?m>1.8?Fe.shirtD:Fe.shirt:Fe.skin)),c=new ss(10,8,()=>Cn(Fe.hair)),l=(m,_)=>{let x=new ct(m,_);return x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1,t.add(x),x};l(r.g,e),o.forEach(m=>l(m.g,e)),a.forEach(m=>l(m.g,e)),l(c.g,s);let h=yy();h.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),t.add(h);let u=vy();u.forEach(m=>{t.add(m.fist),t.add(m.open)});let f=My(),d=[0,1].map(()=>{let m=new ct(f,n);return m.castShadow=!0,t.add(m),m});return t.userData.hd={torso:r,legs:o,arms:a,pony:c,head:h,hands:u,shoes:d},rs(t,{speed:0,still:!0}),t}function Lh(i,t){let e=i.userData.hd;!e||!e.last||!t||rs(i,{...e.last,look:(e.last.look||0)+t})}function rs(i,t={}){let e=i.userData.hd,n=!!t.still;e.last=t;let s=t.speed==null?1:+t.speed;s>1.2&&(s=s/4),s=n?0:Ph(s,0,1);let r=Math.pow(Math.min(1,s/.45),.7),o=n?0:t.phase||0,a=Ph(t.point||0,0,1),c=(t.pointSide==null?1:t.pointSide)>=0?-1:1,l=cn(0,1,a),h=[0,1].map(U=>{let O=U?1:-1,F=o+(U?.5:0),K=Pe(.02,ao(Cy,F),r),j=Pe(.07,ao(Py,F)*Pe(.55,1,r),r),ht=Pe(.05,ao(Iy,F),r);return{zs:O,p:F,th:K,kn:j,an:ht}}),u=.17*r*(h[1].th-h[0].th)/1.1,f=Pe(.035,.2,r)+.04*r*Math.sin(o*tr*2),d=-c*.22*l,m=-.9*u+d,_=pn(Dl,u),x=0;h.forEach(U=>{let O=Pe(.035,-.015,r);U.hip=qt(0,0,U.zs*Ty).applyQuaternion(_),U.qT=Nl(_.clone(),pn(xd,-U.zs*O),pn(gi,U.th)),U.knee=U.hip.clone().add(qt(0,-Sy,0).applyQuaternion(U.qT)),U.qS=U.qT.clone().multiply(pn(gi,-U.kn)),U.ank=U.knee.clone().add(qt(0,-by,0).applyQuaternion(U.qS)),U.qF=U.qS.clone().multiply(pn(gi,U.an));let F=Math.min(...[[-.065,-.075],[.05,-.078],[.17,-.072],[.2,-.06]].map(([K,j])=>U.ank.y+qt(K,j,0).applyQuaternion(U.qF).y));U.lo=F});let p=r*(ao(vd,o)+ao(vd,o+.5))*1.2,S=-Math.min(h[0].lo,h[1].lo)+p,T=qt(0,S,0),y=U=>Nl(pn(Dl,Pe(u,m,cn(.95,1.38,U))),pn(gi,-f*(.35+.65*cn(.9,1.3,U)))),b=Ih.map(([U,O,F,K,j,ht])=>{let at=y(U),rt=U>1.15&&U<1.36?1+.012*Math.sin(o*tr*2)*r:1;return he(qt(O,U-Ch,0).applyQuaternion(at).add(T),gi.clone().applyQuaternion(at),F,K*rt,j,ht)});e.torso.update(b);let E=y(1.4);h.forEach((U,O)=>{let F=qt(0,0,-1),K=F.clone().applyQuaternion(U.qT),j=F.clone().applyQuaternion(U.qS),ht=U.hip.clone().add(T),at=U.knee.clone().add(T),rt=U.ank.clone().add(T),Y=(it,ft,lt)=>it.clone().lerp(ft,lt),W=ht.clone().add(qt(-.01,.07,-U.zs*.02));e.legs[O].update([he(W,K,.07,.06,.07),he(ht,K,.09,.085,.1),he(Y(ht,at,.3),K,.08,.078,.08),he(Y(ht,at,.72),K,.062,.064,.058),he(at.clone().add(qt(.012,0,0).applyQuaternion(U.qS)),j,.05,.05,.046),he(Y(at,rt,.22),j,.05,.042,.062),he(Y(at,rt,.45),j,.045,.038,.052),he(Y(at,rt,.75),j,.033,.032,.034),he(rt,j,.029,.029,.03),he(rt.clone().add(qt(0,-.03,0).applyQuaternion(U.qS)),j,.028,.028,.028)]),e.shoes[O].position.copy(rt),e.shoes[O].quaternion.copy(U.qF)});let R=[h[1].th,h[0].th],g=[];[0,1].forEach(U=>{let O=U?1:-1,F=O===c?l:0,K=R[U],j=Pe(.05,.06+.95*(K-.12),r),ht=Pe(.1,.2,r),at=Pe(.25,.5,r),rt=Pe(.22,1.35+.45*cn(-.3,.6,K),r);j=Pe(j,1.42,F),ht=Pe(ht,.85,F),at=Pe(at,-.1,F),rt=Pe(rt,.12,F);let Y=qt(-.005,Ry-Ch+.015*F,O*Ay).applyQuaternion(E).add(T),W=Nl(E.clone(),pn(gi,j),pn(xd,-O*ht),pn(Dl,O*at)),it=Y.clone().add(qt(0,-Ey,0).applyQuaternion(W)),ft=W.clone().multiply(pn(gi,rt)),lt=it.clone().add(qt(0,-wy,0).applyQuaternion(ft)),dt=qt(0,0,-1),Lt=dt.clone().applyQuaternion(W),At=dt.clone().applyQuaternion(ft),Bt=(me,Be,ge)=>me.clone().lerp(Be,ge),Yt=Y.clone().add(qt(0,.03,0).applyQuaternion(W));e.arms[U].update([he(Y.clone().add(qt(0,.055,0).applyQuaternion(W)),Lt,.006,.006,.006),he(Yt,Lt,.038,.038,.038),he(Y,Lt,.048,.046,.046),he(Bt(Y,it,.33),Lt,.046,.046,.046),he(Bt(Y,it,.5),Lt,.043,.044,.045),he(Bt(Y,it,.8),Lt,.035,.036,.036),he(it,Lt,.032,.03,.034),he(Bt(it,lt,.25),At,.036,.035,.033),he(Bt(it,lt,.7),At,.027,.024,.025),he(lt,At,.022,.017,.017),he(lt.clone().add(qt(0,-.02,0).applyQuaternion(ft)),At,.019,.015,.015)]);let Xt=ft.clone().multiply(pn(gi,F?-.1:.15)),ie=e.hands[U];ie.fist.visible=F<.5,ie.open.visible=F>=.5;for(let me of[ie.fist,ie.open])me.position.copy(lt),me.quaternion.copy(Xt),O<0&&me.scale.set(1,1,-1);g.push(lt)});let M=qt(.014,1.5-Ch,0).applyQuaternion(E).add(T),A=(t.look||0)+-c*.5*l,P=Nl(pn(Dl,m*.4+A-d*.4),pn(gi,-f*.1+.04*r*Math.sin(o*tr*2+1)));e.head.position.copy(M),e.head.quaternion.copy(P);let C=qt(-.098,.135,0).applyQuaternion(P).add(M),H=.045*r*Math.sin(o*tr+.6),L=.035*r*Math.sin(o*tr*2+2.2),D=qt(0,0,1),z=qt(-1,0,0).applyQuaternion(P);z.y=0,z.normalize();let B=qt(-z.z,0,z.x),q=[];for(let U=0;U<=5;U++){let O=U/5,F=.035*O*(1+1.6*r)+.018*Math.sin(O*2.2),K=.2*O*(1-.35*r)-L*O*O,j=C.clone().addScaledVector(z,F).addScaledVector(B,H*O*O);j.y-=K,q.push(he(j,D,[.018,.028,.031,.027,.018,.003][U],[.02,.032,.036,.03,.02,.003][U]))}return e.pony.update(q),i}function bd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ae,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Sd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let m=Sd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Sd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ce(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Pn={low:{grass:0,shells:3,shortShells:2,shadow:1024,dpr:1,soft:!1,trees:22},mid:{grass:25e3,shells:6,shortShells:3,shadow:2048,dpr:1.5,soft:!0,trees:40},high:{grass:7e4,shells:10,shortShells:4,shadow:2048,dpr:2,soft:!0,trees:60}};function Ol(){let i=window.devicePixelRatio||1,t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4,n=i*i*(screen.width||400)*(screen.height||800);return t<=4||e<=2||n>32e5&&t<=6?"low":t>=8&&e>=8&&i<=2&&!/Android|iPhone|iPad/i.test(navigator.userAgent)?"high":"mid"}var Dh=7,we=()=>(Dh=Dh*16807%2147483647)/2147483647,mn=(i,t=.6,e=0)=>new oe({color:i,roughness:t,metalness:e}),Ge=(i,t=!0)=>i.traverse(e=>{e.isMesh&&(e.castShadow=t,e.receiveShadow=!0)});function en(i){i.updateMatrixWorld(!0);let t=new Map;i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh)return;let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();Object.keys(s.attributes).forEach(o=>{o!=="position"&&o!=="normal"&&o!=="uv"&&s.deleteAttribute(o)}),s.attributes.uv||s.setAttribute("uv",new ce(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n.matrixWorld),t.has(n.material)||t.set(n.material,{gs:[],cast:!1,recv:!1});let r=t.get(n.material);r.gs.push(s),r.cast=r.cast||n.castShadow,r.recv=r.recv||n.receiveShadow});let e=new zt;return t.forEach((n,s)=>{let r=new ct(bd(n.gs),s);r.castShadow=n.cast,r.receiveShadow=n.recv,e.add(r),n.gs.forEach(o=>o.dispose())}),e}function er(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new di(n);return s.colorSpace=Ce,s}function Ly(i){let t=er(i,i,(e,n)=>{e.fillStyle="#4b7a33",e.fillRect(0,0,n,n);let s=i*i/11;for(let r=0;r<s;r++){let o=95+we()*70|0;e.fillStyle=`rgba(${45+we()*40|0},${o+25},${28+we()*25|0},${.2+we()*.35})`,e.fillRect(we()*n,we()*n,1.3,3+we()*5)}});return t.wrapS=t.wrapT=zn,t.repeat.set(55,55),t.anisotropy=8,t}function Dy(i,t,e,n,s){let r=new ae;r.setAttribute("position",new ce(new Float32Array([-.0035,0,0,.0035,0,0,.001,1,0,-.001,1,0,0,1.25,0]),3)),r.setIndex([0,1,2,0,2,3,3,2,4]),r.computeVertexNormals();let o=new oe({color:"#ffffff",roughness:.95,side:Ue});o.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying float vH;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 float hh = position.y; transformed.x += hh * hh * .006 * sin(instanceMatrix[3].x * 1.7 + instanceMatrix[3].z * 2.3); vH = hh;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0., 1., 0.);"),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying float vH;`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(.7, 1.05, clamp(vH, 0., 1.));`)};let a=new Qn(r,o,s),c=new be,l=new It;for(let h=0;h<s;h++){let u=we(),f=t-n/2+n*Math.sqrt(u);c.position.set(i+(we()-.5)*e,0,f),c.rotation.y=we()*Math.PI;let d=.045+we()*.06;c.scale.set(1+we(),d,1),c.updateMatrix(),a.setMatrixAt(h,c.matrix),l.setHSL(.25+we()*.05,.45+we()*.15,.2+we()*.1),a.setColorAt(h,l)}return a.receiveShadow=!0,a.frustumCulled=!1,a}function Ny(i,t,e){let n=new zt,s=new ct(new Ee(.18,.3,i*.55,7),e);s.position.y=i*.27,n.add(s);for(let r=0;r<6;r++){let o=new zr(i*(.18+we()*.12),2),a=o.attributes.position,c=we()*10;for(let h=0;h<a.count;h++){let u=a.getX(h),f=a.getY(h),d=a.getZ(h),m=Math.hypot(u,f,d)||1,_=1+.1*Math.sin(u/m*5+c)*Math.sin(f/m*4+c*1.3)+.06*Math.sin(d/m*7+c);a.setXYZ(h,u*_,f*_,d*_)}o.computeVertexNormals();let l=new ct(o,t[r%t.length]);l.position.set((we()-.5)*i*.35,i*(.55+we()*.35),(we()-.5)*i*.3),n.add(l)}return n}function zl(i,t,e){let n=Pn[t]||Pn.mid;Dh=7;let s=new Zs({canvas:i,antialias:t!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!1});s.setPixelRatio(Math.min(window.devicePixelRatio||1,n.dpr)),s.shadowMap.enabled=!0,s.shadowMap.type=ji,s.toneMapping=qr,s.toneMappingExposure=1.1,s.outputColorSpace=Ce;let r=new fi,o=(e.x0+e.x1)/2,a=(e.z0+e.z1)/2,c=new ln({side:ze,depthWrite:!1,fog:!1,uniforms:{top:{value:new It("#3f7fd0")},mid:{value:new It("#a9cdef")},hor:{value:new It("#f3e6cf")}},vertexShader:"varying vec3 p; void main(){ p=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 top,mid,hor; varying vec3 p; void main(){ float h=max(p.y,0.); vec3 c=mix(hor,mid,smoothstep(0.,.12,h)); c=mix(c,top,smoothstep(.12,.7,h)); float sun=pow(max(dot(normalize(p),normalize(vec3(-.55,.35,-.75))),0.),64.); c+=vec3(1.,.9,.7)*sun*.6; gl_FragColor=vec4(c,1.); }"}),l=new ct(new Oe(300,32,16),c);l.position.set(o,0,a),r.add(l),r.fog=new Ar("#dfe4dc",35,170),r.add(new Qi("#d6e9ff","#4d6b30",1));let h=new Di("#ffe9c9",3);h.castShadow=!0,h.shadow.mapSize.set(n.shadow,n.shadow),h.shadow.bias=-3e-4,h.shadow.normalBias=.015,h.shadow.radius=3;let u=(e.x1-e.x0)/2+2,f=(e.z1-e.z0)/2+2;h.position.set(o-11,17,a+7),h.target.position.set(o,0,a);let d=Math.max(u,f)*1.15;Object.assign(h.shadow.camera,{left:-d,right:d,top:d*.8,bottom:-d*.8,near:1,far:70}),h.shadow.camera.updateProjectionMatrix(),r.add(h,h.target);let m=new Di("#bcd4ff",.6);m.position.set(o+10,5,a-10),r.add(m);let _=new ct(new je(400,400).rotateX(-Math.PI/2),new oe({map:Ly(t==="low"?512:1024),roughness:1}));_.position.set(o,0,a),_.receiveShadow=!0,r.add(_);let x=null;n.grass&&(x=Dy(o,a+1,e.x1-e.x0+10,e.z1-e.z0+9,n.grass),r.add(x));let p=e.z0-7,S=mn("#f4f4f0",.6),T=mn("#1f6b45",.8),y=[mn("#c6f432",.7),mn("#ffffff",.7),mn("#1f6b45",.7)],b=new Wt(.07,1,.07),E=new Qn(b,S,33),R=new be;for(let z=0;z<33;z++)R.position.set(o-40+z*2.5,.5,p),R.updateMatrix(),E.setMatrixAt(z,R.matrix);r.add(E);let g=new ct(new Wt(81,.6,.03),T);g.position.set(o,.55,p),r.add(g);let M=new zt;for(let z=0;z<12;z++){let B=new ct(new Wt(3.2,.6,.035),y[z%3]);B.position.set(o-30+z*5.4,.55,p+.03),M.add(B)}r.add(en(M));let A=[mn("#2f5327",1),mn("#3a6130",1),mn("#284a22",1)],P=mn("#4d3a2a",1),C=[0,1,2,3].map(()=>Ny(9+we()*3,A,P)),H=new zt;for(let z=0;z<n.trees;z++){let B=C[z%4].clone(),q=280/n.trees;B.scale.setScalar(.75+we()*.5),B.position.set(o-140+z*q+(we()-.5)*3,0,p-26-we()*25),B.rotation.y=we()*6,H.add(B)}r.add(en(H));let L=new Oe(60,20,10),D=mn("#6f8f5a",1);for(let z=0;z<6;z++){let B=new ct(L,D);B.scale.set(1.6,.22,1),B.position.set(o-200+z*80,-4,p-125-we()*30),r.add(B)}return{R:s,scene:r,sun:h,grass:x,Q:n,tier:t,setTier(z){let B=Pn[z];B&&(this.tier=z,this.Q=B,s.setPixelRatio(Math.min(window.devicePixelRatio||1,B.dpr)),x&&(x.visible=B.grass>0),h.shadow.mapSize.x!==B.shadow&&(h.shadow.mapSize.set(B.shadow,B.shadow),h.shadow.map&&(h.shadow.map.dispose(),h.shadow.map=null)))}}}var Xl={};xp(Xl,{aframe:()=>Oh,barrel:()=>Wh,chute:()=>qh,dogwalk:()=>zh,gate:()=>Xh,handlerArea:()=>Yh,hoop:()=>Vh,jump:()=>Vl,longjump:()=>Gh,numSign:()=>Wl,oxer:()=>Uh,seesaw:()=>Hh,stripedBar:()=>Gl,tire:()=>kh,tunnel:()=>Fh,wall:()=>Nh,weave:()=>Bh});var Uy="#f2c230",Ed={},ee=(i,t=.6,e=0)=>Ed[i+t+e]||(Ed[i+t+e]=mn(i,t,e)),Hl={};function Gl(i,t,e,n,s=8){let r=e+n+s,o=Hl[r]||(Hl[r]=er(512,8,c=>{for(let l=0;l<s;l++)c.fillStyle=l%2?n:e,c.fillRect(l*512/s,0,512/s,8)})),a=new ct(new Ee(t,t,i,16),Hl[r+"m"]||(Hl[r+"m"]=new oe({map:o,roughness:.35})));return a.geometry.rotateZ(Math.PI/2),a}function wd(i){let t=er(128,128,(e,n)=>{e.fillStyle=i,e.fillRect(0,0,n,n);for(let s=0;s<1400;s++){let r=Math.random();e.fillStyle=r<.5?"rgba(0,0,0,.14)":"rgba(255,255,255,.12)",e.fillRect(Math.random()*n,Math.random()*n,1.5,1.5)}});return t.wrapS=t.wrapT=zn,t}function kl(i,t,e,n,s,r){let o=new zt,a=wd(n);a.repeat.set(i*2,t*2);let c=new ct(new Wt(i,e,t),new oe({map:a,roughness:.9}));c.position.set(i/2,-e/2,0),o.add(c);let l=wd(Uy);return(r||[]).forEach((h,u)=>{if(!h)return;let f=l.clone();f.needsUpdate=!0,f.repeat.set(h*2,t*2);let d=new ct(new Wt(h,e+.004,t+.004),new oe({map:f,roughness:.9}));d.position.set(u?i-h/2:h/2,-e/2,0),o.add(d)}),o}function Vl(i={}){let t=i.h!=null?i.h:.55,e=i.width||1.3,n=new zt,s=ee("#f5f5f2",.45),r=ee(i.c1||"#1f6b45",.55),o=ee(i.c2||"#c6f432",.55);for(let l of[-1,1]){let h=new zt,u=(x,p)=>{let S=new ct(new Wt(.055,p,.055),s);S.position.set(x,p/2,0),h.add(S)};u(0,1.2),u(l*.55,.85);let f=new ct(new Wt(.66,.05,.05),s);f.position.set(l*.28,1.03,0),f.rotation.z=l*-.6,h.add(f);for(let x=0;x<4;x++){let p=new ct(new Wt(.5,.075,.03),x%2?o:r);p.position.set(l*.275,.16+x*.18,0),h.add(p)}let d=new ct(new Wt(.06,.05,.55),s);d.position.y=.025,h.add(d);let m=d.clone();m.position.x=l*.55,h.add(m);let _=new ct(new Wt(.06,.03,.06),ee("#333",.5));_.position.set(-l*.045,t-.035,0),h.add(_),h.position.x=l*(e/2+.03),n.add(h)}n.rotation.y=Math.PI/2,Ge(n);let a=new zt;a.add(en(n));let c=Gl(e-.02,.02,"#ffffff","#d23a2e",10);return c.position.y=t,c.rotation.y=Math.PI/2,a.add(c),Ge(c),a.userData={h:t,bar:c,width:e},a}function Nh(i={}){let t=i.h!=null?i.h:.55,e=i.width||1.3,n=new zt,s=ee(i.color||"#b0533c",.8),r=ee("#f5f5f2",.45),o=ee("#e8e3d6",.6),a=new ct(new Wt(.22,t-.08,e),s);a.position.y=(t-.08)/2,n.add(a);for(let l=0;l<4;l++){let h=new ct(new Wt(.24,.08,e/4-.01),o);h.position.set(0,t-.04,-e/2+e/8+l*e/4),n.add(h)}for(let l of[-1,1]){let h=new ct(new Wt(.3,1,.3),r);h.position.set(0,.5,l*(e/2+.15)),n.add(h)}Ge(n);let c=en(n);return c.userData={h:t,width:e},c}function Uh(i={}){let t=i.h!=null?i.h:.55,e=i.depth||.35,n=Vl(Object.assign({},i,{h:Math.max(.1,t-.1)})),s=n.userData.width,r=Gl(s-.02,.02,"#ffffff","#1f6b45",10);r.position.set(e,t,0),r.rotation.y=Math.PI/2,n.add(r),Ge(r);for(let o of[-1,1]){let a=new ct(new Wt(.055,1,.055),ee("#f5f5f2",.45));a.position.set(e,.5,o*(s/2+.03)),n.add(a),Ge(a)}return n}function Fh(i={}){let t=i.r||.3,e=(i.points||[[-2,0],[2,0]]).map(p=>new N(p[0],t,p[1])),n=new Ci(e,!1,"centripetal"),s=new zt,r=n.getLength(),o=Math.max(40,Math.round(r*16)),a=i.color||"#2f6fd0",c=new Ki(n,o,t,28,!1),l=c.attributes.position;for(let p=0;p<=o;p++){let S=p/o,T=n.getPointAt(S),y=1-.045*Math.pow(Math.abs(Math.sin(S*r/.25*Math.PI)),.6);for(let b=0;b<=28;b++){let E=p*29+b,R=l.getX(E)-T.x,g=l.getY(E)-T.y,M=l.getZ(E)-T.z;l.setXYZ(E,T.x+R*y,Math.max(.005,T.y+g*y),T.z+M*y)}}c.computeVertexNormals();let h=new oe({color:a,roughness:.6,side:Ue});s.add(new ct(c,h));let u=ee(i.rib||"#1c4fa0",.5),f=Math.round(r/.25),d=new vn(t+.004,.01,5,28),m=new zt;for(let p=0;p<=f;p++){let S=p/f,T=n.getPointAt(S),y=n.getTangentAt(S),b=new ct(d,u);b.position.copy(T),b.lookAt(T.clone().add(y)),m.add(b)}s.add(en(m));let _=new $i(.09,.5,4,8).rotateZ(Math.PI/2),x=ee("#303a44",.9);return[.25,.75].forEach(p=>{let S=n.getPointAt(p),T=n.getTangentAt(p),y=new ct(_,x);y.position.set(S.x,t*2+.05,S.z),y.rotation.y=Math.atan2(-T.z,T.x)+Math.PI/2,y.scale.set(1,.7,1),s.add(y)}),Ge(s),s.userData={curve:n,r:t,length:r},s}function Bh(i={}){let t=i.n||12,e=i.spacing||.6,n=new zt,s=new ct(new Wt((t-1)*e+.3,.025,.06),ee("#c9ced3",.35,.6));s.position.set((t-1)*e/2,.0125,0),n.add(s);for(let r=0;r<t;r++){let o=Gl(1.1,.024,"#ffffff",r%2?"#e0392b":"#1f8a55",8);o.rotation.z=Math.PI/2,o.position.set(r*e,.56,0),n.add(o);let a=new ct(new Wt(.05,.025,.5),ee("#c9ced3",.35,.6));a.position.set(r*e,.0125,0),r%3===0&&n.add(a)}return Ge(n),n=en(n),n.userData={n:t,spacing:e,poles:[...Array(t).keys()].map(r=>r*e)},n}function Oh(i={}){let n=Math.asin(.6296296296296295),s=2.7*Math.cos(n),r=.95,o=.05,a=1.06,c=new zt;for(let d of[-1,1]){let m=kl(2.7,r,o,i.color||"#2d5fa8",!0,[a,0]);m.position.set(d*s,0,0),m.rotation.set(0,d<0?0:Math.PI,n),c.add(m)}let l=new ct(new Ee(.03,.03,r,10).rotateX(Math.PI/2),ee("#8a9097",.4,.6));l.position.y=1.7-.01,c.add(l);let h=new ct(new Wt(s*1.6,.015,.015),ee("#555",.5,.6));h.position.set(0,.45,-.42),c.add(h);let u=h.clone();u.position.z=.42,c.add(u),Ge(c),c=en(c);let f=d=>Math.abs(d)>=s?0:1.7*(1-Math.abs(d)/s);return c.userData={L:2.7,top:1.7,ang:n,half:s,zone:a*Math.cos(n),surf:f},c}function zh(i={}){let r=Math.asin(.33783783783783783),o=3.7*Math.cos(r),a=.9,c=new zt,l=i.color||"#b8342c",h=kl(3.7,.3,.05,l,!0,[]);h.position.set(-3.7/2,1.25,0),c.add(h);for(let f of[-1,1]){let d=kl(3.7,.3,.05,l,!0,[a,0]);d.position.set(f*(3.7/2+o),0,0),d.rotation.set(0,f<0?0:Math.PI,r),c.add(d);let m=new zt,_=ee("#8a9097",.45,.5);for(let S of[-.28,.28]){let T=new ct(new Wt(.04,1.25,.04),_);T.position.set(0,1.25/2-.03,S),T.rotation.x=S>0?-.2:.2,m.add(T)}let x=new ct(new Wt(.05,.05,.42),_);x.position.y=1.25-.08,m.add(x);let p=new ct(new Wt(.03,.03,.6),_);p.position.y=.3,m.add(p),m.position.x=f*(3.7/2-.12),c.add(m)}Ge(c),c=en(c);let u=f=>{let d=Math.abs(f);return d<=3.7/2?1.25:d>=3.7/2+o?0:1.25*(1-(d-3.7/2)/o)};return c.userData={L:3.7,H:1.25,ang:r,half:o,zone:a*Math.cos(r),total:3.7/2+o,surf:u},c}function Hh(i={}){let r=new zt,o=Math.asin((.6-.05/2)/(3.7/2)),a=new zt;a.position.y=.6,r.add(a);let c=kl(3.7,.3,.05,i.color||"#2d5fa8",!0,[.9,.9]);c.position.set(-3.7/2,.05,0),a.add(c);let l=ee("#8a9097",.45,.5);for(let m of[-.24,.24])for(let _ of[-1,1]){let x=new ct(new Wt(.045,.68,.045),l);x.position.set(_*.16,.3,m),x.rotation.z=_*.5,r.add(x)}let h=new ct(new Ee(.03,.03,.55,10).rotateX(Math.PI/2),l);h.position.y=.6,r.add(h);let u=new ct(new Wt(.6,.03,.6),l);u.position.y=.015,r.add(u),Ge(r);let f=o,d={L:3.7,H:.6,th:.05,maxT:o,setTilt(m){f=Math.max(-o,Math.min(o,m)),a.rotation.z=f},get tilt(){return f},point(m){return{x:m*Math.cos(f)-.05*Math.sin(f),y:.6+m*Math.sin(f)+.05*Math.cos(f)}}};return d.setTilt(o*(i.start||-1)),r.userData=d,r.setTilt=d.setTilt,r}function kh(i={}){let t=i.h||.8,e=.335,n=.065,s=new zt,r=8;for(let h=0;h<r;h++){let u=new ct(new vn(e,n,12,10,Math.PI*2/r),ee(h%2?"#1d1d1f":"#f2c230",.55));u.rotation.set(0,Math.PI/2,h*Math.PI*2/r),u.position.y=t,s.add(u)}let o=ee("#e8e8e8",.4,.3),a=.78,c=t+e+.5;for(let h of[-1,1]){let u=new ct(new Wt(.06,c,.06),o);u.position.set(0,c/2,h*a),s.add(u);let f=new ct(new Wt(.9,.05,.07),o);f.position.set(0,.025,h*a),s.add(f);let d=new ct(new Ee(.008,.008,a-e-n),ee("#333",.6));d.rotation.x=Math.PI/2,d.position.set(0,t,h*(a+e+n)/2),s.add(d);let m=new ct(new Ee(.008,.008,c-t-e-n),ee("#333",.6));m.position.set(0,(c+t+e+n)/2,h*.2),m.rotation.x=h*-.35,s.add(m)}let l=new ct(new Wt(.06,.06,a*2+.06),o);return l.position.y=c,s.add(l),Ge(s),s=en(s),s.userData={h:t,inner:e-n},s}function Gh(i={}){let t=new zt,e=i.n||4,n=i.len||1.4,s=1.2,r=ee("#e8e8e8",.5),o=ee("#1f6b45",.55);for(let c=0;c<e;c++){let l=.15+.13*c/(e-1),h=-n/2+.08+c*(n-.16)/(e-1),u=s-c*.07,f=.16,d=new Wt(f,l,u),m=d.attributes.position;for(let p=0;p<m.count;p++){let S=m.getY(p)+l/2;m.setY(p,m.getX(p)<0&&S>l/2?l-.06:S)}d.computeVertexNormals();let _=new ct(d,r);_.position.set(h,0,0),t.add(_);let x=new ct(new Wt(f+.004,.035,u*.5),o);x.position.set(h,l*.45,0),t.add(x)}let a=ee("#f5f5f2",.4);for(let c of[-1,1])for(let l of[-1,1]){let h=new ct(new Ee(.018,.018,1.2,10),a);h.position.set(c*(n/2+.05),.6,l*(s/2+.05)),t.add(h);let u=new ct(new Oe(.03,10,8),ee("#d23a2e",.4));u.position.set(c*(n/2+.05),1.21,l*(s/2+.05)),t.add(u)}return Ge(t),t=en(t),t.userData={len:n,W:s},t}var Td=()=>ee("#8a9097",.45,.5);function Ad(i,t){let e=new ct(new Wt(.6,.022,.045),Td());e.position.set(0,.011,t),i.add(e)}function Vh(i={}){let t=i.width||.9,e=t/2,n=i.leg||.5,s=.016,r=new zt,o=ee(i.legColor||"#f5f5f2",.45),a=ee(i.color||"#e07b2c",.4),c=ee("#3a3f46",.5);for(let h of[-1,1]){let u=new ct(new Ee(s,s,n,10),o);u.position.set(0,n/2,h*e),r.add(u);let f=new ct(new Ee(s+.006,s+.006,.07,10),c);f.position.set(0,n,h*e),r.add(f),Ad(r,h*e)}let l=new ct(new vn(e,s,8,36,Math.PI),a);return l.rotation.y=Math.PI/2,l.position.y=n,r.add(l),Ge(r),r=en(r),r.userData={width:t,h:n+e},r}function Wh(i={}){let t=i.r||.3,e=i.h||.85,n=new zt,s=ee(i.color||"#4e7d34",.5),r=ee("#3d6629",.55),o=ee("#f2f2ee",.5),a=new ct(new Ee(t,t,e-.02,32),s);a.position.y=(e-.02)/2,n.add(a);for(let h of[.3,.58]){let u=new ct(new Ee(t+.003,t+.003,.06,32,1,!0),o);u.position.y=h,n.add(u)}for(let h of[.02,e*.44,e-.02]){let u=new ct(new vn(t,.012,6,32),r);u.rotation.x=Math.PI/2,u.position.y=h,n.add(u)}let c=new ct(new Ee(t-.01,t-.01,.02,32),r);c.position.y=e-.01,n.add(c);let l=new ct(new Ee(.035,.035,.02,12),o);return l.position.set(t*.5,e+.005,0),n.add(l),Ge(n),n=en(n),n.userData={r:t,h:e},n}var nr=null;function Fy(){return nr||(nr=er(64,64,(i,t)=>{i.clearRect(0,0,t,t),i.fillStyle="rgba(60,48,90,.22)",i.fillRect(0,0,t,t),i.strokeStyle="rgba(28,24,40,.85)",i.lineWidth=5,i.strokeRect(0,0,t,t)}),nr.wrapS=nr.wrapT=zn,nr)}function Xh(i={}){let t=i.width||1.1,e=i.h||.95,n=.016,s=.03,r=new zt,o=ee(i.color||"#7b5ea7",.45);for(let l of[-1,1]){let h=new ct(new Ee(n,n,e,10),o);h.position.set(0,e/2,l*t/2),r.add(h),Ad(r,l*t/2)}for(let l of[s,e]){let h=new ct(new Ee(n,n,t,10),o);h.rotation.x=Math.PI/2,h.position.y=l,r.add(h)}Ge(r),r=en(r);let a=Fy();a.repeat.set(t/.08,(e-s)/.08);let c=new ct(new je(t,e-s),new oe({map:a,transparent:!0,side:Ue,roughness:.8,depthWrite:!1}));return c.rotation.y=Math.PI/2,c.position.y=(e+s)/2,c.receiveShadow=!0,r.add(c),r.userData={width:t,h:e},r}function qh(i={}){let e=i.len||1,n=new zt,s=new oe({color:i.color||"#2f6fd0",roughness:.6,side:Ue}),r=new ct(new Ee(.4,.4,e,32,1,!0).rotateZ(Math.PI/2),s);r.position.y=.4,n.add(r);let o=new zt,a=ee(i.rib||"#1c4fa0",.5);for(let c=0;c<=4;c++){let l=new ct(new vn(.404,c%4?.01:.02,6,32),a);l.rotation.y=Math.PI/2,l.position.set(-e/2+c*e/4,.4,0),o.add(l)}for(let c of[-1,1]){let l=new ct(new Wt(.05,.03,1.1),Td());l.position.set(c*e/2,.015,0),o.add(l)}return n.add(en(o)),Ge(n),n.userData={r:.4,length:e},n}function Yh(i={}){let t=i.size||2,e=.025,n=i.color||"#e2b007",s=new zt,r=ee(n,.7);for(let a of[-1,1]){let c=new ct(new Ee(e,e,t+2*e,8),r);c.rotation.z=Math.PI/2,c.position.set(0,e,a*t/2),s.add(c);let l=new ct(new Ee(e,e,t+2*e,8),r);l.rotation.x=Math.PI/2,l.position.set(a*t/2,e,0),s.add(l)}Ge(s),s=en(s);let o=new ct(new je(t,t).rotateX(-Math.PI/2),new oe({color:n,transparent:!0,opacity:.2,roughness:1,depthWrite:!1}));return o.position.y=.009,o.receiveShadow=!0,s.add(o),s.userData={size:t},s}function Wl(i){let t=er(128,128,a=>{a.fillStyle="#fff",a.fillRect(0,0,128,128),a.fillStyle="#1f6b45",a.font="800 92px sans-serif",a.textAlign="center",a.fillText(String(i),64,98)}),e=ee("#fff"),n=new oe({map:t}),s=new zt,r=new ct(new Wt(.3,.3,.02),[e,e,e,e,n,n]);r.position.y=.3,r.rotation.x=-.35,s.add(r);let o=new ct(new Wt(.02,.3,.02),ee("#999"));return o.position.set(0,.14,-.06),s.add(o),Ge(s),s}var $h={};function Zh(i){Object.keys(i||{}).forEach(t=>{$h[t]=i[t]})}function By(i){return!!$h[i]}var Oy=(i,t,e)=>i+(t-i)*e,Pd=i=>{let t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)},zy=(i,t,e)=>Pd((e-i)/(t-i)),Hy=(i,t,e)=>Math.exp(-(((i-t)/e)**2));function ky(i,t){let e=i.map(l=>({x:l[0],z:l[1]})),n=e.length,s=[],r=l=>t?e[(l+n)%n]:e[Math.max(0,Math.min(n-1,l))],o=t?n:n-1;for(let l=0;l<o;l++){let h=r(l-1),u=r(l),f=r(l+1),d=r(l+2);for(let m=0;m<24;m++){let _=m/24,x=_*_,p=x*_,S=(T,y,b,E)=>.5*(2*y+(-T+b)*_+(2*T-5*y+4*b-E)*x+(-T+3*y-3*b+E)*p);s.push({x:S(h.x,u.x,f.x,d.x),z:S(h.z,u.z,f.z,d.z)})}}s.push(t?{...s[0]}:{...e[n-1]});let a=[0];for(let l=1;l<s.length;l++)a.push(a[l-1]+Math.hypot(s[l].x-s[l-1].x,s[l].z-s[l-1].z));let c=a[a.length-1]||1;return{length:c,pts:s,at(l){l=t?(l%1+1)%1:Math.max(0,Math.min(1,l));let h=l*c,u=0,f=a.length-1;for(;f-u>1;){let x=u+f>>1;a[x]<h?u=x:f=x}let d=s[u],m=s[f],_=(h-a[u])/(a[f]-a[u]||1);return{x:d.x+(m.x-d.x)*_,z:d.z+(m.z-d.z)*_,yaw:Math.atan2(-(m.z-d.z),m.x-d.x)}}}}var Gy={Group:zt,Object3D:be,Mesh:ct,InstancedMesh:Qn,Line:Hs,LineSegments:Lr,Points:Dr,Sprite:qi,SpriteMaterial:Ai,Vector2:Et,Vector3:N,Quaternion:qe,Euler:un,Matrix4:se,Color:It,Box3:_n,MathUtils:th,BufferGeometry:ae,BufferAttribute:ce,Float32BufferAttribute:Vt,BoxGeometry:Wt,CylinderGeometry:Ee,SphereGeometry:Oe,TorusGeometry:vn,PlaneGeometry:je,CircleGeometry:Zi,RingGeometry:Ji,ConeGeometry:Fr,CapsuleGeometry:$i,TubeGeometry:Ki,CatmullRomCurve3:Ci,MeshStandardMaterial:oe,MeshBasicMaterial:Hn,MeshLambertMaterial:kr,LineBasicMaterial:Yi,LineDashedMaterial:Gr,CanvasTexture:di,DoubleSide:Ue,FrontSide:jn,BackSide:ze,SRGBColorSpace:Ce,RepeatWrapping:zn},nn=480,Vy=1.35,Wy=2.1,Rd=(i,t)=>{for(;i-t>Math.PI;)i-=2*Math.PI;for(;i-t<-Math.PI;)i+=2*Math.PI;return i};function Cd(i,t){let e=[],n=[],s=[],r=[0],o=[];i.forEach(u=>{let f=u[t];o.push(!!f),e.push(f?f.x:NaN),n.push(f?f.z:NaN)});for(let u=0;u<=nn;u++){let f=i[u][t];if(u){let d=o[u]&&o[u-1]?Math.hypot(e[u]-e[u-1],n[u]-n[u-1]):0;r.push(r[u-1]+d*(f&&f.still?1-Math.min(1,+f.still):1))}}let a=null,c=[];for(let u=0;u<=nn;u++){let f=Math.max(0,u-2),d=Math.min(nn,u+2),m=e[d]-e[f],_=n[d]-n[f];c.push(o[f]&&o[d]&&Math.hypot(m,_)>.002?Math.atan2(-_,m):null)}let l=c.find(u=>u!=null);for(let u=0;u<=nn;u++){let f=c[u]!=null?c[u]:a!=null?a:l!=null?l:0;a!=null&&(f=Rd(f,a)),s.push(f),a=f}let h=s.map((u,f)=>{let d=0,m=0;for(let _=-3;_<=3;_++){let x=f+_;x>=0&&x<=nn&&(d+=Rd(s[x],u),m++)}return d/m});return{x:e,z:n,yaw:h,dist:r,has:o}}var os=(i,t)=>{let e=Math.max(0,Math.min(1,t))*nn,n=Math.min(nn-1,Math.floor(e)),s=e-n;return i[n]+(i[n+1]-i[n])*s};function Xy(i,t,e={}){let n=$h[t];if(!n)throw new Error("Nezn\xE1m\xE1 sc\xE9na "+t);let s=Pn[e.quality]?e.quality:Ol(),r=e.D||7,o=new zt,a={THREE:Gy,scene:o,ob:Xl,lerp:Oy,ss:Pd,sm:zy,bump:Hy,path:ky};n.build&&n.build(a);let c=[];for(let W=0;W<=nn;W++)c.push(n.at(W/nn,a));let l=Cd(c,"dog"),h=Cd(c,"hand"),u=n.cam||{},f=u.mode==="high",d={dist:u.dist!=null?u.dist:f?7.5:5.2,height:u.height!=null?u.height:f?7:1.5,lookAhead:u.lookAhead!=null?u.lookAhead:f?0:.6,fov:u.fov||(f?40:34),az:u.az!=null?u.az:f?0:.22,lookY:u.lookY!=null?u.lookY:f?0:.45,smooth:u.smooth!=null?u.smooth:.05,followY:u.followY!=null?u.followY:.6},m=[],_=[],x=[];c.forEach(W=>{let it=W.focus||W.dog||{x:0,z:0};m.push(it.x),_.push(it.z),x.push(it.y!=null?it.y:W.focus?0:W.dog&&W.dog.y||0)});let p=Math.max(1,Math.round(d.smooth*nn)),S=W=>W.map((it,ft)=>{let lt=0,dt=0;for(let Lt=-p;Lt<=p;Lt++){let At=Math.max(0,Math.min(nn,ft+Lt));lt+=W[At],dt++}return lt/dt}),T=S(m),y=S(_),b=S(x),E=new _n().setFromObject(o),R=isFinite(E.min.x)?E.min.x:0,g=isFinite(E.max.x)?E.max.x:0,M=isFinite(E.min.z)?E.min.z:0,A=isFinite(E.max.z)?E.max.z:0;[l,h].forEach(W=>W.x.forEach((it,ft)=>{W.has[ft]&&(R=Math.min(R,it),g=Math.max(g,it),M=Math.min(M,W.z[ft]),A=Math.max(A,W.z[ft]))}));let P={x0:Math.max(R,-30),x1:Math.min(g,30),z0:Math.max(M,-20),z1:Math.min(A,20)},C=zl(i,s,P),H=C.Q,L=C.scene;L.add(o);let D=Ll({shells:H.shells,shortShells:H.shortShells});L.add(D),D.traverse(W=>{W.isMesh&&W.userData.shell===0&&(W.castShadow=!0)});let z=Bl({quality:s});L.add(z),z.traverse(W=>{W.isMesh&&!W.userData.shell&&(W.castShadow=!0)}),a.dog=D,a.hand=z,a.world=C;let B=new Ne(d.fov,2,.05,500),q=!1,U=0,O=[],F=0;function K(){let W=i.clientWidth||i.width||300,it=i.clientHeight||Math.round(W/2);C.R.setSize(W,it,!1),B.aspect=W/it,B.updateProjectionMatrix()}K();let j=new N,ht=new N;function at(W){if(q)return;W=(W%1+1)%1;let it=n.at(W,a)||{},ft=it.dog;ft?(D.visible=!ft.hidden,D.position.set(ft.x,ft.y||0,ft.z),D.rotation.y=ft.yaw!=null?ft.yaw:os(l.yaw,W),D.rotation.z=ft.slope||0,oo(D,os(l.dist,W)/Vy%1,ft.air||0,ft.pitch||0,+ft.still||0,ft.land||0,{time:W*r,sit:ft.sit||0})):D.visible=!1;let lt=it.hand;if(lt){z.visible=!0,z.position.set(lt.x,lt.y||0,lt.z),z.rotation.y=lt.yaw!=null?lt.yaw:os(h.yaw,W);let Te=Math.min(nn-1,Math.floor(W*nn)),G=lt.still?0:(h.dist[Te+1]-h.dist[Te])*nn/r;rs(z,{phase:os(h.dist,W)/Wy%1,speed:Math.min(1,G/4),point:lt.point||0,pointSide:lt.pointSide||1,still:!!lt.still})}else z.visible=!1;it.extra&&it.extra(a);let dt=os(T,W),Lt=os(y,W),At=os(b,W)*d.followY,Bt=Math.max(0,Math.floor(W*nn)-6),Yt=Math.min(nn,Bt+12),Xt=T[Yt]-T[Bt],ie=y[Yt]-y[Bt],me=Math.hypot(Xt,ie);me>.001?(Xt/=me,ie/=me):(Xt=0,ie=0);let Be=d.lookAhead*Math.min(1,me*10);B.position.set(dt-d.dist*Math.sin(d.az),d.height+At,Lt+d.dist*Math.cos(d.az)),B.lookAt(j.set(dt+Xt*Be,d.lookY+At,Lt+ie*Be)),C.R.render(L,B);let ge=performance.now();if(U&&ge-U<250&&F<2&&(O.push(ge-U),O.length>=30)){let Te=O.reduce((Ve,le)=>Ve+le,0)/O.length;O=[];let G=Te>28?C.tier==="high"?"mid":C.tier==="mid"?"low":null:null;G?(C.setTier(G),rt(Pn[G]),K(),F++):F=9}U=ge}function rt(W){D.traverse(it=>{if(it.isMesh&&it.userData.shells){let ft=it.userData.shells,lt=ft>5?W.shells:W.shortShells,dt=Math.max(1,Math.round(ft/Math.max(1,lt)));it.visible=it.userData.shell%dt===0||it.userData.shell===ft}})}function Y(){if(q)return;q=!0;let W=new Set;L.traverse(it=>{it.geometry&&!W.has(it.geometry)&&(W.add(it.geometry),it.geometry.dispose()),(it.material?Array.isArray(it.material)?it.material:[it.material]:[]).forEach(lt=>{W.has(lt)||(W.add(lt),Object.keys(lt).forEach(dt=>{let Lt=lt[dt];Lt&&Lt.isTexture&&!W.has(Lt)&&(W.add(Lt),Lt.dispose())}),lt.dispose())})}),C.R.dispose();try{C.R.forceContextLoss()}catch{}}return{render:at,resize:K,dispose:Y,draw:()=>{q||C.R.render(L,B)},get tier(){return C.tier},renderer:C.R,scene:L,camera:B,dog:D,hand:z}}function ir(i){let t=i.length,e=i.map(o=>o[0]),n=i.map(o=>o[1]),s=[],r=[];for(let o=0;o<t-1;o++)s.push((n[o+1]-n[o])/(e[o+1]-e[o]));for(let o=0;o<t;o++)if(o===0)r.push(s[0]);else if(o===t-1)r.push(s[t-2]);else{let a=e[o]-e[o-1],c=e[o+1]-e[o];r.push(s[o-1]*s[o]<=0?0:3*(a+c)/((2*c+a)/s[o-1]+(c+2*a)/s[o]))}for(let o=0;o<t-1;o++)s[o]===0&&(r[o]=0,r[o+1]=0);return o=>{if(o<=e[0])return n[0];if(o>=e[t-1])return n[t-1];let a=0;for(;o>e[a+1];)a++;let c=e[a+1]-e[a],l=(o-e[a])/c,h=l*l,u=h*l;return(2*u-3*h+1)*n[a]+(u-2*h+l)*c*r[a]+(-2*u+3*h)*n[a+1]+(u-h)*c*r[a+1]}}function Jh(i,t,e,n,s){let o=[0];for(let c=1;c<=400;c++){let l=(c-.5)/400;o.push(o[c-1]+1-s*Math.exp(-(((l-e)/n)**2)))}let a=o[400];return c=>{let l=Math.max(0,Math.min(1,c))*400,h=Math.min(399,Math.floor(l));return i+(t-i)*(o[h]+(o[h+1]-o[h])*(l-h))/a}}function Kh(i,t,e=.27){let n=i(t-e),s=i(t+e);return{y:(n+s)/2,pitch:Math.atan2(s-n,2*e)}}function Qh(i,t,e,n,s){let{sm:r,bump:o}=s,a=(t+e)/2,c=(e-t)/2,l=i>t&&i<e,h=l?n*(1-((i-a)/c)**2):0,u=-.05*o(i,t-.35,.35),f=r(t-.5,t+.1,i)*(1-r(e-.9,e-.2,i)),d=r(e-1.1,e-.4,i)*(1-r(e-.05,e+.55,i)),m=n/.5,_=(.36*o(i,t+.15,.45)-.32*o(i,e-.3,.45))*Math.min(1,m*1.2)+.05*o(i,t-.75,.3);return{y:Math.max(0,h)+u,air:f,land:d,pitch:_}}var Oi=(i,t,e,n,s=0)=>{let r=i.ob.numSign(t);r.position.set(e,0,n),r.rotation.y=s,i.scene.add(r)},Id={jump:{cam:{dist:4.8,height:1.3,lookAhead:.5,az:.16,smooth:.06},build(i){i.scene.add(i.ob.jump({h:.55})),Oi(i,3,-.5,-1.35,.5),this.X=Jh(-8.5,7.5,.5,.1,.55)},at(i,t){let e=this.X(i),n=Qh(e,-1.45,1.35,.47,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch},hand:{x:t.lerp(-6.2,3.4,i)+.5*Math.sin(i*3),z:-2.6,point:t.sm(.4,.48,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}},tunnel:{cam:{mode:"high",dist:6.6,height:4.1,fov:38,lookY:.1,smooth:.12,followY:0},build(i){let e=[[-1.6,.7],[-1.6,.2]];for(let m=0;m<=12;m++){let _=Math.PI-m/12*Math.PI;e.push([1.6*Math.cos(_),-1.6*Math.sin(_)*1.05+0])}e.push([1.6,.2],[1.6,.7]);let n=i.ob.tunnel({points:e,color:"#2f6fd0"});i.scene.add(n),Oi(i,5,-2.35,.75,.3);let s=[[-3.6,4.2],[-2.6,2.6],[-1.75,1.3],[-1.6,.7]],r=[[1.6,1.3],[1.95,2.15],[2.9,2.65],[4.6,2.95],[6.8,3]],o=s.concat(e.slice(1,-1)).concat([[1.6,.7]]).concat(r);this.P=i.path(o);let a=this.P.length,c=0,l=0,h=0;for(let m=1;m<this.P.pts.length;m++){let _=this.P.pts[m-1],x=this.P.pts[m];c+=Math.hypot(x.x-_.x,x.z-_.z),!l&&Math.hypot(x.x+1.6,x.z-.7)<.03&&(l=c),Math.hypot(x.x-1.6,x.z-.7)<.03&&(h=c)}this.in0=l/a,this.in1=h/a,this.len=a,this.U=ir([[0,0],[.14,this.in0],[.68,this.in1],[.78,this.in1+1.3/a],[1,1]]),this.H=i.path([[-2.8,2.6],[-2.2,1.9],[-.8,1.6],[.9,1.7],[2.5,1.3],[3.1,1.1],[4.1,1.7],[6.8,2.3]]);let u=0,f=1e9,d=0;this.H.pts.forEach((m,_)=>{_&&(d+=Math.hypot(m.x-this.H.pts[_-1].x,m.z-this.H.pts[_-1].z));let x=Math.hypot(m.x-3.1,m.z-1.1);x<f&&(f=x,u=d/this.H.length)}),this.HU=ir([[0,0],[.12,.06],[.5,u-.03],[.58,u],[.72,u+.004],[.8,u+.07],[1,1]])},at(i,t){let e=this.U(i),n=this.P.at(e),s=e*this.len,r=this.in0*this.len,o=this.in1*this.len,a=Math.min(s-r,o-s),c=a>0,l={x:n.x,z:n.z,y:c?-.13*t.ss(a/.35+.3):0,hidden:a>.9},h=this.HU(i),u=this.H.at(h),f=t.sm(.5,.56,i)*(1-t.sm(.7,.76,i)),d={x:u.x,z:u.z,point:.8*(1-t.sm(.12,.2,i))+.8*t.sm(.64,.7,i)*(1-t.sm(.84,.9,i)),pointSide:(i<.3,1)};f>.5&&(d.yaw=2.88);let m=t.sm(.72,.95,i);return{dog:l,hand:d,focus:{x:t.lerp(.2,3.8,m)+n.x*.1,z:t.lerp(.3,2.2,m),y:0}}}},weave:{cam:{dist:5.2,height:2.3,lookAhead:.5,az:.12,lookY:.3,fov:36,smooth:.07},build(i){let t=i.ob.weave();t.position.x=-3.3,i.scene.add(t),Oi(i,7,-4.1,-.6,.4),this.x0=-3.3,this.sp=.6,this.X=ir([[0,-8.2],[.2,-3.75],[.23,-3.3-.02],[.75,3.3+.02],[.79,3.8],[1,7.4]])},at(i,t){let e=this.X(i),n=.21,s=this.x0,r=s+11*this.sp,o=n*Math.cos(Math.PI*(e-s)/this.sp),a=t.sm(s-.75,s-.05,e)*(1-t.sm(r+.05,r+.75,e)),c=e<s?t.lerp(.55,n,t.sm(s-3.5,s-.3,e)):t.lerp(-n,.1,t.sm(r,r+1.2,e)),l=t.lerp(c,o,a);return{dog:{x:e,z:l},hand:{x:t.lerp(-7.2,5,i)+.3*Math.sin(i*5),z:-1.45,point:.5*(1-t.sm(.3,.4,i))+.5*t.sm(.72,.8,i),pointSide:-1}}}},aframe:{cam:{dist:6,height:2.1,lookAhead:.4,az:.2,lookY:.5,fov:36,smooth:.08,followY:.5},build(i){let t=i.ob.aframe();i.scene.add(t),this.A=t.userData,Oi(i,4,-3.2,-1,.4);let e=this.A.half,n=e+.12-.28;this.stopX=n,this.X=ir([[0,-7.4],[.2,-e-.2],[.44,0],[.62,e-1],[.7,n],[.9,n],[.93,n+.4],[1,n+3.4]])},at(i,t){let e=this.X(i),n=Kh(this.A.surf,e),s=t.sm(.69,.71,i)*(1-t.sm(.89,.91,i));return{dog:{x:e,z:0,y:n.y+.03*s,slope:n.pitch*(1-.5*s),pitch:n.pitch*.5*s,still:s},hand:{x:t.lerp(-6.5,1.2,t.sm(0,.7,i))+t.lerp(0,4.5,t.sm(.9,1,i)),z:-1.9,still:i>.72&&i<.9?1:0,point:.6*(1-t.sm(.66,.7,i))+.7*t.sm(.9,.93,i),pointSide:-1}}}},dogwalk:{cam:{dist:6.4,height:1.4,lookAhead:.5,az:.22,lookY:.55,fov:36,smooth:.08,followY:.6},build(i){let t=i.ob.dogwalk();i.scene.add(t),this.W=t.userData,Oi(i,6,-6,-.8,.4);let e=this.W.total,n=this.W.L/2,s=e+.12-.28;this.X=ir([[0,-e-3.2],[.08,-e+.1],[.3,-n],[.52,n],[.62,e-.8],[.67,s],[.84,s],[.87,s+.4],[1,s+4]])},at(i,t){let e=this.X(i),n=Kh(this.W.surf,e),s=t.sm(.66,.68,i)*(1-t.sm(.83,.85,i));return{dog:{x:e,z:0,y:n.y+.03*s,slope:n.pitch*(1-.5*s),pitch:n.pitch*.5*s,still:s},hand:{x:t.lerp(-8.4,4.3,t.sm(0,.68,i))+t.lerp(0,4,t.sm(.84,1,i)),z:-1.25,still:i>.7&&i<.84?1:0,point:.5*(1-t.sm(.62,.68,i))+.8*t.sm(.84,.87,i),pointSide:-1}}}},seesaw:{cam:{dist:5.6,height:1.3,lookAhead:.3,az:.2,lookY:.5,fov:36,smooth:.08,followY:.5},build(i){let t=i.ob.seesaw();i.scene.add(t),this.S=t.userData,Oi(i,8,-2.6,-.8,.4);let e=this.S.L;this.Sd=ir([[0,-e/2-4.2],[.12,-e/2+.05],[.36,.2],[.52,.55],[.61,e/2-.3],[.8,e/2-.3],[.84,e/2+.35],[1,e/2+4.2]]);let n=this.S.maxT;this.Tl=s=>s<.36?n:s<.62?n-2*n*i.ss((s-.36)/.26)**1.4:-n+.06*n*Math.sin((s-.62)/.05*Math.PI)*Math.exp(-(s-.62)/.02)*(s<.68?1:0)},at(i,t){let e=this.Tl(i);this.S.setTilt(e);let n=this.Sd(i),s=this.S,r=Math.cos(e),o=s.L/2*r,a=f=>Math.abs(f)<=o?Math.max(0,s.H+f*Math.tan(e)+s.th/r):0,c=Math.abs(n)<=s.L/2?n*r:n<0?-o+(n+s.L/2):o+(n-s.L/2),l=Kh(a,c),h=t.sm(.8,.83,i)*(1-t.sm(.84,.87,i)),u=t.sm(.6,.62,i)*(1-t.sm(.79,.8,i))+t.sm(.36,.4,i)*(1-t.sm(.48,.52,i))*.6;return{dog:{x:c,z:0,y:l.y+h*.12,slope:l.pitch*(1-h),still:u,air:h*.6},hand:{x:t.lerp(-5.6,2.3,t.sm(0,.62,i))+t.lerp(0,3.6,t.sm(.82,1,i)),z:-1.3,still:i>.64&&i<.82?1:0,point:.6*t.sm(.8,.84,i),pointSide:-1}}}},tire:{cam:{dist:4.8,height:1.35,lookAhead:.4,az:.55,lookY:.6,smooth:.06},build(i){let t=i.ob.tire({h:.8});i.scene.add(t),Oi(i,2,-.5,-1.25,.5),this.X=Jh(-8.5,7.5,.5,.1,.5)},at(i,t){let e=this.X(i),n=Qh(e,-1.35,1.35,.38,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch},hand:{x:t.lerp(-6,3.6,i),z:-2.2,point:t.sm(.35,.45,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}},longjump:{cam:{dist:4.8,height:1.6,lookAhead:.5,az:.22,smooth:.06},build(i){let t=i.ob.longjump({n:4,len:1.4});i.scene.add(t),Oi(i,9,-1,-1.2,.5),this.X=Jh(-8.5,7.5,.5,.1,.5)},at(i,t){let e=this.X(i),n=Qh(e,-1.45,1.55,.36,t);return{dog:{x:e,z:0,y:n.y,air:n.air,land:n.land,pitch:n.pitch*.8},hand:{x:t.lerp(-6,3.6,i),z:-2.1,point:t.sm(.35,.45,i)*(1-t.sm(.85,.95,i)),pointSide:-1}}}}};var Sn=Math.PI;function as(i){let t=i.length,e=i.map(o=>o[0]),n=i.map(o=>o[1]),s=[],r=[];for(let o=0;o<t-1;o++)s.push((n[o+1]-n[o])/(e[o+1]-e[o]));for(let o=0;o<t;o++)if(o===0)r.push(s[0]);else if(o===t-1)r.push(s[t-2]);else{let a=e[o]-e[o-1],c=e[o+1]-e[o];r.push(s[o-1]*s[o]<=0?0:3*(a+c)/((2*c+a)/s[o-1]+(c+2*a)/s[o]))}for(let o=0;o<t-1;o++)s[o]===0&&(r[o]=0,r[o+1]=0);return o=>{if(o<=e[0])return n[0];if(o>=e[t-1])return n[t-1];let a=0;for(;o>e[a+1];)a++;let c=e[a+1]-e[a],l=(o-e[a])/c,h=l*l,u=h*l;return(2*u-3*h+1)*n[a]+(u-2*h+l)*c*r[a]+(-2*u+3*h)*n[a+1]+(u-h)*c*r[a+1]}}function qy(i,t,e,n,s){let{sm:r,bump:o}=s,a=(t+e)/2,c=(e-t)/2,l=i>t&&i<e,h=l?n*(1-((i-a)/c)**2):0,u=-.05*o(i,t-.35,.35),f=r(t-.5,t+.1,i)*(1-r(e-.9,e-.2,i)),d=r(e-1.1,e-.4,i)*(1-r(e-.05,e+.55,i)),m=.36*o(i,t+.15,.45)-.32*o(i,e-.3,.45)+.05*o(i,t-.75,.3);return{y:Math.max(0,h)+u,air:f,land:d,pitch:m}}function jh(i,t,e){let n=1e9,s=0,r=0,o=0;for(let a=0;a<i.pts.length;a++){a&&(r+=Math.hypot(i.pts[a].x-i.pts[a-1].x,i.pts[a].z-i.pts[a-1].z));let c=Math.hypot(i.pts[a].x-t,i.pts[a].z-e);c<n&&(n=c,s=a,o=r)}return o/i.length}function In(i,t,e,n,s,r=-.9,o=-1.55){let a=i.ob.jump({h:.55});if(a.position.set(t,0,e),a.rotation.y=n,i.scene.add(a),s){let c=i.ob.numSign(s),l=Math.cos(n),h=Math.sin(n);c.position.set(t+r*l+o*h,0,e-r*h+o*l),c.rotation.y=n+.4,i.scene.add(c)}return{x:t,z:e}}function sr(i,t,e,n){let s=i.path(t),r=s.length,o=as(n.map(([c,l])=>[c,Array.isArray(l)?jh(s,l[0],l[1]):l])),a=e.map(c=>jh(s,c.x,c.z)*r);return c=>{let l=o(c),h=s.at(l),u=l*r,f={y:0,air:0,land:0,pitch:0},d=1e9;return a.forEach(m=>{Math.abs(u-m)<d&&(d=Math.abs(u-m),f=qy(u-m,-1.45,1.35,.47,i))}),{x:h.x,z:h.z,y:f.y,air:f.air,land:f.land,pitch:f.pitch}}}function rr(i,t,e){let n=i.path(t),s=as(e.map(([r,o])=>[r,Array.isArray(o)?jh(n,o[0],o[1]):o]));return r=>{let o=n.at(s(r));return{x:o.x,z:o.z}}}function zi(i,t){return e=>{if(e<=i[0][0])return i[0][1];for(let n=1;n<i.length;n++)if(e<=i[n][0])return t.lerp(i[n-1][1],i[n][1],t.sm(i[n-1][0],i[n][0],e));return i[i.length-1][1]}}var lo=(i,t,e=.5)=>({x:i.x+(t.x-i.x)*e,z:i.z+(t.z-i.z)*e,y:0}),co=(i={})=>({mode:"high",dist:6.8,height:5.6,fov:40,lookY:0,smooth:.1,followY:0,lookAhead:0,...i});function Ld(i){return{cam:co({az:Sn-.25,dist:5.4,height:5.4,fov:42}),build(t){let e=In(t,-3.4,1.2,0,1,-.9,1.5),n=In(t,1,1.2,0,2,-.9,1.5),s=In(t,0,-2.4,Sn,3,-.9,1.5);this.dog=sr(t,[[-7.4,1.2],[-3.4,1.2],[1,1.2],[2.8,1.2],i?[4.8,1.1]:[4.1,.95],i?[6.1,.3]:[5,.2],i?[6.2,-1.1]:[5.2,-1],i?[5.2,-2.15]:[4.5,-2.1],[2.8,-2.4],[0,-2.4],[-2.6,-2.4],[-4.6,-2.4]],[e,n,s],[[0,0],[.42,[1,1.2]],[.82,[0,-2.4]],[1,1]]);let r=i?[[-4.6,3],[-1.5,3],[1.8,2.95],[3,2.25],[3.9,1.2],[4.3,.3],[3.9,-.4],[2.6,-.7],[-1.5,-.65],[-5,-.65]]:[[-4.6,3],[-1.5,3],[2,2.95],[2.75,2.4],[3,1.2],[2.9,.1],[2.2,-.55],[-1.5,-.65],[-5,-.65]];this.hand=rr(t,r,i?[[0,0],[.24,[1.8,2.95]],[.37,[3.9,1.2]],[.43,[4.3,.3]],[.54,[2.6,-.7]],[1,1]]:[[0,0],[.24,[2,2.95]],[.35,[3,1.2]],[.41,[2.9,.1]],[.48,[2.2,-.55]],[1,1]]),this.yaw=i?null:as([[0,0],[.25,.05],[.31,1.9],[.36,2.7],[.44,3],[.5,Sn],[1,Sn]]),this.look=zi(i?[[0,.35],[.28,.35],[.33,0],[.42,0],[.48,-.9],[.62,-.6],[.7,0]]:[[0,.35],[.25,.35],[.3,0]],t),this.pt=zi([[0,.15],[.08,.75],[.26,.75],[.31,0],[.46,0],[.53,.9],[.8,.9],[.88,.15]],t)},at(t,e){let n=this.dog(t),s=this.hand(t),r=this.look(t),o={x:s.x,z:s.z,point:this.pt(t),pointSide:t<.42?1:-1};return this.yaw&&(o.yaw=this.yaw(t)),{dog:n,hand:o,focus:lo(n,s,.45),extra:a=>Lh(a.hand,r)}}}}var Dd={front:Ld(!1),blind:Ld(!0),rear:{cam:co({az:Sn,dist:7,height:6.2}),build(i){let t=In(i,-3.6,1.2,0,1,-.9,1.5),e=In(i,1,1.2,0,2,-.9,1.5),n=In(i,4.6,-2.4,Sn/2,3,-.9,1.5);this.dog=sr(i,[[-6.6,1.2],[-3.6,1.2],[1,1.2],[2.8,1.15],[4.1,.6],[4.6,-.6],[4.6,-2.4],[4.6,-4.4]],[t,e,n],[[0,0],[.46,[1,1.2]],[.84,[4.6,-2.4]],[1,1]]),this.hand=rr(i,[[-7.8,3],[-3.4,2.9],[-1.4,2.5],[-.7,1.2],[-.3,-.4],[1.2,-1],[2.5,-1.7],[2.8,-2.9],[2.8,-4.2]],[[0,0],[.3,[-3.4,2.9]],[.42,[-1.4,2.5]],[.51,[-.7,1.2]],[.58,[-.3,-.4]],[.66,[1.2,-1]],[1,1]]),this.pt=zi([[0,.3],[.12,.8],[.36,1],[.46,.3],[.52,0],[.6,.2],[.68,.9],[.86,.9],[.93,.2]],i),this.look=zi([[0,.3],[.4,.3],[.5,0],[.58,-.5],[.7,0]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=this.look(i);return{dog:e,hand:{x:n.x,z:n.z,point:this.pt(i),pointSide:i<.52?1:-1},focus:lo(e,n,.45),extra:r=>Lh(r.hand,s)}}},wrap:{cam:co({az:0,dist:6.6,height:5.4}),build(i){let t=In(i,0,0,0,0);this.dog=sr(i,[[-6.4,0],[-3,0],[0,0],[1.5,.05],[2.25,.75],[2.15,1.65],[1.2,2.05],[-.4,2.05],[-2.4,1.95],[-5.2,1.8]],[t],[[0,0],[.4,[0,0]],[.6,[2.15,1.65]],[1,1]]),this.hand=rr(i,[[-4.6,3.3],[-1.4,3.3],[-.5,3.3],[-.8,3.28],[-2.4,3.2],[-5.4,3]],[[0,0],[.36,[-1.4,3.3]],[.47,[-.5,3.3]],[.58,[-.8,3.28]],[1,1]]),this.yaw=as([[0,0],[.38,0],[.48,1.2],[.58,2.2],[.68,2.9],[.74,Sn],[1,Sn]]),this.pt=zi([[0,.2],[.1,.7],[.36,.7],[.45,0],[.52,.6],[.56,.6],[.66,.1],[.74,.6],[.9,.6],[.96,.2]],i)},at(i,t){let e=this.dog(i),n=this.hand(i);return{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.45?1:-1},focus:lo(e,n,.4)}}},spin:{cam:co({az:0,dist:6.6,height:5.6}),build(i){let t=In(i,0,0,0,0);this.dog=sr(i,[[-6.4,0],[-3,0],[0,0],[1.5,-.05],[2.25,-.8],[2.1,-1.75],[1,-2.2],[-.5,-2],[-1.7,-1.1],[-2.5,.05],[-3.6,.45],[-5.6,.55]],[t],[[0,0],[.42,[0,0]],[.62,[2.1,-1.75]],[1,1]]),this.hand=rr(i,[[-4.4,1.95],[-1.3,1.95],[-.5,1.95],[-.7,1.95],[-2.4,1.9],[-5.6,1.8]],[[0,0],[.38,[-1.3,1.95]],[.5,[-.5,1.95]],[.62,[-.7,1.95]],[1,1]]),this.yaw=as([[0,0],[.42,0],[.52,1.3],[.62,2.2],[.72,2.9],[.78,Sn],[1,Sn]]),this.pt=zi([[0,.2],[.1,.7],[.4,.7],[.47,0],[.53,.8],[.56,.8],[.68,.2],[.8,.5],[.92,.5],[.97,.2]],i)},at(i,t){let e=this.dog(i),n=this.hand(i);return{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.47?1:-1},focus:lo(e,n,.4)}}},backside:{cam:co({az:0,dist:5.8,height:6,fov:42}),build(i){let t=In(i,0,0,Sn,0);this.dog=sr(i,[[-7.2,2.2],[-3.6,2.2],[-.4,2.1],[1.4,1.95],[2.7,1.3],[3,.4],[2.4,.02],[1.4,0],[0,0],[-2,0],[-4.4,0],[-6.4,0]],[t],[[0,0],[.45,[1.4,1.95]],[.64,[0,0]],[1,1]]),this.hand=rr(i,[[-6.4,4],[-2.8,3.9],[-1.2,3.55],[-1.35,2.9],[-2.8,2.3],[-6.2,2]],[[0,0],[.38,[-2.8,3.9]],[.5,[-1.2,3.55]],[.62,[-1.35,2.9]],[1,1]]),this.yaw=as([[0,0],[.42,.15],[.52,1.3],[.62,2.4],[.7,3],[.76,Sn],[1,Sn]]),this.pt=zi([[0,.2],[.12,.5],[.3,.9],[.46,.9],[.52,.3],[.58,.8],[.72,.8],[.8,.3],[.9,.5]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=lo(e,n,.4);return s.z=Math.min(s.z,2.2)-.4,{dog:e,hand:{x:n.x,z:n.z,yaw:this.yaw(i),point:this.pt(i),pointSide:i<.55?1:-1},focus:s}}},start:{cam:{mode:"high",dist:7.4,height:4.2,fov:40,az:.15,lookY:.2,smooth:.14,followY:0,lookAhead:0},build(i){let t=[In(i,-3,0,0,1,-.9,-1.5),In(i,.9,0,0,2,-.9,-1.5),In(i,4.8,0,0,3,-.9,-1.5)];this.dog=sr(i,[[-5.6,0],[-3,0],[.9,0],[4.8,0],[7.6,0]],t,[[0,0],[.4,0],[.43,.012],[1,1]]),this.hand=rr(i,[[-4.95,1.2],[-3.9,1.65],[-2.2,1.85],[-.8,1.85],[3,1.85],[7.2,1.8]],[[0,0],[.06,0],[.3,[-.8,1.85]],[.43,[-.8,1.85]],[.55,[.2,1.85]],[1,1]]),this.yaw=as([[0,0],[.28,0],[.33,2.6],[.36,2.8],[.42,2.8],[.47,.2],[.5,0],[1,0]]);let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");n.fillStyle="rgba(255,255,255,.94)",n.beginPath(),n.roundRect?n.roundRect(8,8,240,96,40):n.rect(8,8,240,96),n.fill(),n.beginPath(),n.moveTo(110,100),n.lineTo(128,124),n.lineTo(146,100),n.fill(),n.fillStyle="#1f6b45",n.font="800 64px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("Hop!",128,58);let s=new di(e);s.colorSpace=Ce,this.bub=new qi(new Ai({map:s,depthTest:!1,transparent:!0})),this.bub.scale.set(.9,.45,1),this.bub.renderOrder=10,this.bub.visible=!1,i.scene.add(this.bub),this.pt=zi([[0,0],[.34,0],[.37,1],[.42,1],[.46,0],[.5,0],[.56,.6],[.9,.6],[.96,0]],i)},at(i,t){let e=this.dog(i),n=this.hand(i),s=i<.4,r=1-t.sm(.38,.41,i),o=this.bub,a=i>.36&&i<.47,c=n.x,l=n.z;return{dog:{...e,still:s,sit:r},hand:{x:n.x,z:n.z,yaw:this.yaw(i),still:i<.06||i>.33&&i<.43,point:this.pt(i),pointSide:i<.5?-1:1},focus:{x:t.lerp(-2.2,1.6,t.sm(.2,.9,i))+.15*e.x,z:.3,y:0},extra:()=>{o.visible=a,o.position.set(c,2.15,l)}}}}};var Yy=1.35,Ud=4.5,Nd={hoop:1,barrel:1,gate:1,chute:1,ha:1};function ho(i,t,e){let n=t.W,s=t.H,r=t.size||{},o=new zt,a=new ct(new je(n,s).rotateX(-Math.PI/2),new oe({color:"#7fb35a",roughness:1,transparent:!0,opacity:.35}));a.position.set(n/2,.003,s/2),a.receiveShadow=!0,o.add(a);let c=mn("#ffffff",.8);[[n/2,0,n,.08],[n/2,s,n,.08],[0,s/2,.08,s],[n,s/2,.08,s]].forEach(([g,M,A,P])=>{let C=new ct(new Wt(A,.01,P),c);C.position.set(g,.006,M),o.add(C)});let l=new Wt(.05,.01,.5);for(let g=5;g<n;g+=5)for(let M of[.25,s-.25]){let A=new ct(l,c);A.position.set(g,.006,M),o.add(A)}i.add(o);let h=[];(t.obs||[]).forEach(g=>{let M=g.rot*Math.PI/180,A=Math.cos(M),P=Math.sin(M),C=null;if(g.type==="tunnel")C=Fh({points:g.tunnel&&g.tunnel.length>1?g.tunnel:[[g.x-A*2.25,g.y-P*2.25],[g.x+A*2.25,g.y+P*2.25]]}),i.add(C);else{if(g.type==="jump")C=g.v==="wall"?Nh({h:r.jump||.6}):g.v==="oxer"?Uh({h:r.jump||.6}):Vl({h:r.jump||.6});else if(g.type==="tire")C=kh({h:r.tire||.8});else if(g.type==="longjump")C=Gh({len:r.lj||1.4,n:r.ljn||4});else if(g.type==="weave"){let H=Bh({});H.position.x=-(11*.6)/2,C=new zt,C.add(H)}else g.type==="aframe"?C=Oh({}):g.type==="dogwalk"?C=zh({}):g.type==="seesaw"?(C=Hh({}),h.push({g:C,o:g})):g.type==="hoop"?C=Vh({}):g.type==="barrel"?C=Wh({}):g.type==="gate"?C=Xh({}):g.type==="chute"?C=qh({}):g.type==="ha"&&(C=Yh({}));if(!C)return;C.position.set(g.x,0,g.y),C.rotation.y=-M,i.add(C)}if(C.name=g.type,g.nums&&g.nums.length&&!Nd[g.type]){let H=g.type==="tunnel"?0:{weave:3.3,aframe:2.1,dogwalk:5.4,seesaw:1.85}[g.type]||0,L=-P,D=A,z=H+.6,B=g.type==="jump"?1.15:g.type==="tire"||g.type==="longjump"?1.05:.75,q=g.x-A*z+L*B,U=g.y-P*z+D*B;if(g.type==="tunnel"&&g.tunnel){let F=g.tunnel[0],K=g.tunnel[1],j=K[0]-F[0],ht=K[1]-F[1],at=Math.hypot(j,ht)||1;q=F[0]-j/at*.6-ht/at*.8,U=F[1]-ht/at*.6+j/at*.8}let O=Wl(g.nums.join("\xB7"));O.scale.setScalar(g.nums.length>1?1.6:1.4),O.position.set(q,0,U),O.rotation.y=-M+Math.PI/2,i.add(O)}});let u=(t.path||[]).map(g=>({x:g[0],z:g[1],h:g[2]||0,i:g[3]})),f=[0];for(let g=1;g<u.length;g++)f.push(f[g-1]+Math.hypot(u[g].x-u[g-1].x,u[g].z-u[g-1].z));let d=f[f.length-1]||0,m=t.jumps||[],_=(t.weaves||[]).map(g=>({x:g.x,y:g.y,a:g.rot*Math.PI/180,dir:g.dir||1,idx:g.idx,n:12,len:6.6}));function x(g){g=Math.max(0,Math.min(d,g));let M=1;for(;M<f.length-1&&f[M]<g;)M++;let A=u[M-1]||{x:0,z:0,h:0,i:0},P=u[M]||A,C=(g-f[M-1])/(f[M]-f[M-1]||1),H=A.x+(P.x-A.x)*C,L=A.z+(P.z-A.z)*C,D=A.h+(P.h-A.h)*C,z=0;m.forEach(O=>{let F=Math.hypot(H-O[0],L-O[1]),K=O[3]||1.4;if(F<K){let j=1-F*F/(K*K);D+=(O[2]+.12)*j,z=Math.max(z,Math.min(1,j*1.6))}});let B=Math.max(A.i,P.i),q=0,U=0;return _.forEach(O=>{if(B!==O.idx&&B!==O.idx-1)return;let F=Math.cos(O.a),K=Math.sin(O.a),j=(H-O.x)*F+(L-O.y)*K,ht=-(H-O.x)*K+(L-O.y)*F;if(Math.abs(ht)>.8)return;let at=O.n>1?O.len/(O.n-1):.6,rt=O.dir>0?j+O.len/2:O.len/2-j,Y=rt<0?Math.max(0,1+rt/.45):rt>O.len?Math.max(0,1-(rt-O.len)/.45):1;if(Y<=0)return;let W=F*O.dir,it=K*O.dir,ft=-.17*Math.cos(Math.PI*rt/at)*Y;q+=it*ft,U+=-W*ft}),{x:H+q,z:L+U,h:D,air:z,idx:B}}if(u.length>1){let g=new zt,M=new Zi(.05,8).rotateX(-Math.PI/2),A=new Hn({color:"#f2c230",transparent:!0,opacity:.85}),P=new Qn(M,A,Math.ceil(d/.5)+1),C=new be,H=0;for(let L=0;L<=d;L+=.5){let D=x(L);D.h>.05||(C.position.set(D.x,.012,D.z),C.updateMatrix(),P.setMatrixAt(H++,C.matrix))}P.count=H,g.add(P),i.add(g)}let p=(t.obs||[]).find(g=>g.type==="ha")||null;(t.obs||[]).forEach(g=>{if(!Nd[g.type]||!g.nums||!g.nums.length)return;let M=Wl(g.nums.join("\xB7")),A=g.nums.length>1,P=g.rot*Math.PI/180;if(M.rotation.y=p?Math.atan2(p.x-g.x,p.y-g.y):-P+Math.PI/2,g.type==="barrel"||g.type==="gate"){let C=A?1.2:1;M.scale.setScalar(C),M.position.set(g.x,(g.type==="barrel"?.85:.95)-.15*C,g.y)}else{let C=u.findIndex(B=>B.i===g.nums[0]-1),H=Math.cos(P),L=Math.sin(P);if(C>=0&&u.length>1){let B=u[Math.max(0,C-1)],q=u[Math.min(u.length-1,C+1)],U=Math.hypot(q.x-B.x,q.z-B.z);U>1e-6&&(H=(q.x-B.x)/U,L=(q.z-B.z)/U)}let D=p&&(p.x-g.x)*-L+(p.y-g.y)*H<0?-1:1,z=(g.type==="chute"?.5:0)+.6;M.scale.setScalar(A?1.6:1.4),M.position.set(g.x-H*z-L*D*.8,0,g.y-L*z+H*D*.8)}i.add(M)});let S=Ll({shells:e.shells,shortShells:e.shortShells});i.add(S),S.traverse(g=>{g.isMesh&&g.userData.shell===0&&(g.castShadow=!0)});let T=null,y=null;p&&(T=Bl({}),i.add(T),T.traverse(g=>{g.isMesh&&(g.castShadow=!0)}),y=$y(p,x,u.length>1?d:0));let b=(t.obs||[]).filter(g=>g.type==="chute").map(g=>({x:g.x,y:g.y,c:Math.cos(g.rot*Math.PI/180),s:Math.sin(g.rot*Math.PI/180)})),E=g=>b.reduce((M,A)=>{let P=(g.x-A.x)*A.c+(g.z-A.y)*A.s,C=-(g.x-A.x)*A.s+(g.z-A.y)*A.c;return Math.abs(C)<.4?Math.max(M,Math.min(1,Math.max(0,(1.2-Math.abs(P))/.3))):M},0);function R(g){let M=x(g),A=x(g+.8),P=x(g+.25),C=Math.atan2(-(P.z-M.z),P.x-M.x),H=Math.atan2(A.h-M.h,Math.max(.2,Math.hypot(A.x-M.x,A.z-M.z)))*(M.air?0:1);if(S.position.set(M.x,M.h-(b.length?.1*E(M):0),M.z),S.rotation.y=C,S.rotation.z=Math.max(-.6,Math.min(.6,H)),oo(S,g/Yy%1,M.air,M.air?.15*(A.h<M.h?1:-1):0,g<=0||g>=d?1:0,0,{time:g/4.5}),h.forEach(({g:L,o:D})=>{let z=D.rot*Math.PI/180,B=(M.x-D.x)*Math.cos(z)+(M.z-D.y)*Math.sin(z),U=(D.idx>=0&&(M.idx>D.idx||M.idx===D.idx&&B*D.sign<0)?-D.sign:D.sign)*-L.userData.maxT,O=L.userData.tilt;L.setTilt(O+(U-O)*.2)}),T)if(!y.n)T.position.set(p.x,0,p.y),T.rotation.y=Math.atan2(-(s/2-p.y),n/2-p.x),rs(T,{still:!0});else{let L=Math.max(0,Math.min(y.n-1.0001,g/y.step)),D=Math.floor(L),z=L-D,B=W=>W[D]+(W[D+1]-W[D])*z,q=B(y.x),U=B(y.z),O=(y.dist[D+1]-y.dist[D])/y.step*Ud,F=Math.atan2(-(M.z-U),M.x-q);T.position.set(q,0,U),T.rotation.y=F;let K=x(g+1.5),j=K.x-M.x,ht=K.z-M.z,at=Math.hypot(j,ht),rt=at>.001?(j*Math.sin(F)+ht*Math.cos(F))/at:0,Y=g>0&&g<d?Math.min(1,Math.max(0,(Math.abs(rt)-.2)/.35))*.9:0;rs(T,{phase:B(y.ph)%1,speed:Math.min(1,O/4),point:Y,pointSide:rt>0?-1:1,still:O<.05})}return M}return{length:d,at:x,pose:R,dog:S,hand:T,start:u.length?{x:u[0].x,z:u[0].z}:{x:n/2,z:s/2}}}function $y(i,t,e){if(!(e>0))return{n:0};let n=.25,s=Math.ceil(e/n)+1,r=[],o=[];for(let f=0;f<s;f++){let d=t(f*n),m=d.x-i.x,_=d.z-i.y,x=Math.hypot(m,_)||1;r.push(i.x+m/x*.4),o.push(i.y+_/x*.4)}let a=12,c=[],l=[],h=[0],u=[0];for(let f=0;f<s;f++){let d=0,m=0,_=0;for(let x=Math.max(0,f-a);x<=Math.min(s-1,f+a);x++)d+=r[x],m+=o[x],_++;if(c.push(d/_),l.push(m/_),f){let x=Math.hypot(c[f]-c[f-1],l[f]-l[f-1]),p=x/n*Ud;h.push(h[f-1]+x),u.push(u[f-1]+x/(.6+1.5*Math.min(1,p/1.8)))}}return{n:s,step:n,x:c,z:l,dist:h,ph:u}}function Zy(i,t,e={}){let n=Pn[e.quality]?e.quality:Ol(),s=t.W,r=t.H,o=zl(i,n,{x0:0,x1:s,z0:0,z1:r}),a=o.scene,c=o.Q,l=ho(a,t,c),{length:h,at:u,dog:f}=l,d=t.path||[],m=new Ne(42,2,.05,500),_={az:.55,el:.72,dist:Math.max(s,r)*1.2,tx:s/2,tz:r/2},x=new Map,p=0,S=0;i.style.touchAction="none";let T=F=>{if(x.set(F.pointerId,{x:F.clientX,y:F.clientY}),x.size===2){let[K,j]=[...x.values()];p=Math.hypot(K.x-j.x,K.y-j.y),S=_.dist}try{i.setPointerCapture(F.pointerId)}catch{}},y=F=>{let K=x.get(F.pointerId);if(K){if(x.size===1&&(_.az-=(F.clientX-K.x)*.006,_.el=Math.max(.12,Math.min(1.45,_.el+(F.clientY-K.y)*.005))),x.set(F.pointerId,{x:F.clientX,y:F.clientY}),x.size===2){let[j,ht]=[...x.values()],at=Math.hypot(j.x-ht.x,j.y-ht.y);p&&(_.dist=Math.max(4,Math.min(Math.max(s,r)*4,S*p/at)))}O.onCamera&&O.onCamera()}},b=F=>{x.delete(F.pointerId),p=0},E=F=>{F.preventDefault(),_.dist=Math.max(4,Math.min(Math.max(s,r)*4,_.dist*(1+Math.sign(F.deltaY)*.1))),O.onCamera&&O.onCamera()};i.addEventListener("pointerdown",T),i.addEventListener("pointermove",y),i.addEventListener("pointerup",b),i.addEventListener("pointercancel",b),i.addEventListener("wheel",E,{passive:!1});let R=[[-1,-1],[s+1,-1],[s+1,r+1],[-1,r+1]].map(F=>new N(F[0],0,F[1])),g=new N;function M(F){let K=3,j=Math.max(s,r)*4;for(let ht=0;ht<22;ht++){let at=(K+j)/2;F(at),m.updateMatrixWorld(),m.updateProjectionMatrix(),R.every(Y=>(g.copy(Y).project(m),Math.abs(g.x)<.96&&Math.abs(g.y)<.94&&g.z<1))?j=at:K=at}return j}let A=()=>m.aspect<1;function P(F){m.fov=42,m.up.set(0,1,0),m.position.set(_.tx+F*Math.cos(_.el)*Math.sin(_.az),F*Math.sin(_.el),_.tz+F*Math.cos(_.el)*Math.cos(_.az)),m.lookAt(_.tx,0,_.tz)}function C(F){m.fov=40,m.position.set(s/2,F,r/2),A()===s>r?m.up.set(1,0,0):m.up.set(0,0,-1),m.lookAt(s/2,0,r/2)}let H=Math.max(s,r);function L(){_.az=A()===s>r?Math.PI/2+.12:.12,_.el=.95,_.dist=M(P),H=M(C)}function D(){let F=i.clientWidth||300,K=i.clientHeight||200;o.R.setSize(F,K,!1),m.aspect=F/K,m.updateProjectionMatrix(),L()}D();let z=new N;function B(F,K){let j=l.pose(F),ht=u(F+.8),at=u(F-4);if(f.visible=K!=="dog"&&d.length>1,K==="dog"){m.fov=75,m.up.set(0,1,0);let rt=u(F+.35);m.position.set(rt.x,rt.h+.55,rt.z),z.set(ht.x+(ht.x-j.x)*4,ht.h+.3,ht.z+(ht.z-j.z)*4),m.lookAt(z)}else K==="chase"?(m.fov=55,m.up.set(0,1,0),m.position.set(at.x,Math.max(at.h,j.h)+2.4,at.z),z.set(j.x,j.h+.4,j.z),m.lookAt(z)):K==="top"?C(H):P(_.dist);return m.updateProjectionMatrix(),o.R.render(a,m),j}let q=!1;function U(){if(q)return;q=!0,i.removeEventListener("pointerdown",T),i.removeEventListener("pointermove",y),i.removeEventListener("pointerup",b),i.removeEventListener("pointercancel",b),i.removeEventListener("wheel",E);let F=new Set;a.traverse(K=>{K.geometry&&!F.has(K.geometry)&&(F.add(K.geometry),K.geometry.dispose()),(K.material?Array.isArray(K.material)?K.material:[K.material]:[]).forEach(j=>{F.has(j)||(F.add(j),Object.keys(j).forEach(ht=>{let at=j[ht];at&&at.isTexture&&!F.has(at)&&(F.add(at),at.dispose())}),j.dispose())})}),o.R.dispose();try{o.R.forceContextLoss()}catch{}}let O={length:h,render:B,resize:D,dispose:U,at:u,pose:l.pose,scene:a,hand:l.hand,get tier(){return o.tier},get pixelRatio(){return o.R.getPixelRatio()},onCamera:null};return O}function Jy(){try{return navigator.xr&&navigator.xr.isSessionSupported?navigator.xr.isSessionSupported("immersive-ar").catch(()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}function Ky(i,t,e={}){let n=s=>{try{e.onState&&e.onState(s)}catch{}};return navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:i}}).then(s=>{let r=document.createElement("canvas"),o=new Zs({canvas:r,alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(1),o.xr.enabled=!0,o.shadowMap.enabled=!0,o.shadowMap.type=Na,o.outputColorSpace=Ce;let a=new fi,c=new Ne;a.add(new Qi("#ffffff","#6f7f5a",1.6));let l=new Di("#fff8ec",1.9);l.position.set(6,14,4),l.castShadow=!0,l.shadow.mapSize.set(1024,1024);let h=l.shadow.camera;h.left=-30,h.right=30,h.top=30,h.bottom=-30,h.far=80,a.add(l),a.add(l.target);let u=new zt,f=new zt;u.add(f),u.visible=!1,a.add(u);let d=Pn.low,m=ho(f,t,d);f.position.set(-m.start.x,0,-m.start.z);let _=new ct(new je(t.W+20,t.H+20).rotateX(-Math.PI/2),new Hr({opacity:.28}));_.position.set(t.W/2,.001,t.H/2),_.receiveShadow=!0,f.add(_),f.traverse(D=>{D.isMesh&&D!==_&&(D.castShadow=!0)});let x=new ct(new Ji(.12,.16,32).rotateX(-Math.PI/2),new Hn({color:"#c6f432"}));x.matrixAutoUpdate=!1,x.visible=!1,a.add(x);let p={placed:!1,scale:1,yaw:0,d:0,on:!1,last:0,ended:!1},S=null,T=null;s.requestReferenceSpace("viewer").then(D=>s.requestHitTestSource({space:D})).then(D=>{S=D}).catch(()=>{}),o.xr.setReferenceSpaceType("local");let y=o.xr.setSession(s).then(()=>{T=o.xr.getReferenceSpace()}),b=new N,E=new qe,R=new N,g=new N;function M(){if(!x.visible)return n("noground"),!1;x.matrix.decompose(b,E,R),o.xr.getCamera().getWorldDirection(g),g.y=0,g.lengthSq()<1e-6&&g.set(0,0,-1),g.normalize();let z=t.W/2-m.start.x,B=t.H/2-m.start.z,q=t.az!=null&&e.heading?e.heading():null,U=q!=null&&p.scale===1;return p.yaw=U?Math.atan2(-g.z,g.x)-(t.az-q)*Math.PI/180:Math.atan2(-g.z,g.x)-(Math.hypot(z,B)>.5?Math.atan2(-B,z):0),u.position.copy(b),u.rotation.set(0,p.yaw,0),u.scale.setScalar(p.scale),u.visible=!0,p.placed=!0,n(U?"placedAz":"placed"),!0}function A(D){p.placed&&(p.yaw+=D*Math.PI/180,u.rotation.y=p.yaw)}function P(D){p.scale=D?1/20:1,u.scale.setScalar(p.scale),n(p.placed?"placed":"scan")}function C(D){return p.on=D==null?!p.on:!!D,p.on&&p.d>=m.length&&(p.d=0),p.last=0,p.on}s.addEventListener("select",()=>{p.placed||M()}),o.setAnimationLoop((D,z)=>{if(z){if(S&&T){let B=z.getHitTestResults(S);if(B.length){let q=B[0].getPose(T);q&&(x.matrix.fromArray(q.transform.matrix),x.visible=!p.placed,p.placed||n("ready"))}else x.visible=!1,p.placed||n("scan")}p.on&&(p.last&&(p.d+=Math.min(.1,(D-p.last)/1e3)*4.5),p.last=D,p.d>=m.length&&(p.d=m.length,p.on=!1,n("done"))),m.pose(p.d),o.render(a,c)}});function H(){if(p.ended)return;p.ended=!0,o.setAnimationLoop(null);try{S&&S.cancel()}catch{}let D=new Set;a.traverse(z=>{z.geometry&&!D.has(z.geometry)&&(D.add(z.geometry),z.geometry.dispose()),(z.material?Array.isArray(z.material)?z.material:[z.material]:[]).forEach(B=>{D.has(B)||(D.add(B),B.dispose())})}),o.dispose();try{e.onEnd&&e.onEnd()}catch{}}s.addEventListener("end",H),n("scan");let L={place:M,rotate:A,setScale:P,play:C,end(){s.end().catch(H)},get placed(){return p.placed},get length(){return m.length}};return y.then(()=>L)})}var Ze=Uint8Array,bn=Uint16Array,ru=Int32Array,ou=new Ze([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),au=new Ze([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fd=new Ze([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Gd=function(i,t){for(var e=new bn(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new ru(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},Vd=Gd(ou,2),Qy=Vd.b,eu=Vd.r;Qy[28]=258,eu[258]=28;var Wd=Gd(au,0),Q1=Wd.b,Bd=Wd.r,nu=new bn(32768);for(ue=0;ue<32768;++ue)xi=(ue&43690)>>1|(ue&21845)<<1,xi=(xi&52428)>>2|(xi&13107)<<2,xi=(xi&61680)>>4|(xi&3855)<<4,nu[ue]=((xi&65280)>>8|(xi&255)<<8)>>1;var xi,ue,po=(function(i,t,e){for(var n=i.length,s=0,r=new bn(t);s<n;++s)i[s]&&++r[i[s]-1];var o=new bn(t);for(s=1;s<t;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(e){a=new bn(1<<t);var c=15-t;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=t-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[nu[u]>>c]=l}else for(a=new bn(n),s=0;s<n;++s)i[s]&&(a[s]=nu[o[i[s]-1]++]>>15-i[s]);return a}),ls=new Ze(288);for(ue=0;ue<144;++ue)ls[ue]=8;var ue;for(ue=144;ue<256;++ue)ls[ue]=9;var ue;for(ue=256;ue<280;++ue)ls[ue]=7;var ue;for(ue=280;ue<288;++ue)ls[ue]=8;var ue,ql=new Ze(32);for(ue=0;ue<32;++ue)ql[ue]=5;var ue,jy=po(ls,9,0);var tv=po(ql,5,0);var Xd=function(i){return(i+7)/8|0},qd=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new Ze(i.subarray(t,e))};var ev=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Yl=function(i,t,e){var n=new Error(t||ev[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Yl),!e)throw n;return n};var _i=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>8},uo=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>8,i[n+2]|=e>>16},tu=function(i,t){for(var e=[],n=0;n<i.length;++n)i[n]&&e.push({s:n,f:i[n]});var s=e.length,r=e.slice();if(!s)return{t:$d,l:0};if(s==1){var o=new Ze(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(b,E){return b.f-E.f}),e.push({s:-1,f:25001});var a=e[0],c=e[1],l=0,h=1,u=2;for(e[0]={s:-1,f:a.f+c.f,l:a,r:c};h!=s-1;)a=e[e[l].f<e[u].f?l++:u++],c=e[l!=h&&e[l].f<e[u].f?l++:u++],e[h++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=r[0].s,n=1;n<s;++n)r[n].s>f&&(f=r[n].s);var d=new bn(f+1),m=iu(e[h-1],d,0);if(m>t){var n=0,_=0,x=m-t,p=1<<x;for(r.sort(function(E,R){return d[R.s]-d[E.s]||E.f-R.f});n<s;++n){var S=r[n].s;if(d[S]>t)_+=p-(1<<m-d[S]),d[S]=t;else break}for(_>>=x;_>0;){var T=r[n].s;d[T]<t?_-=1<<t-d[T]++-1:++n}for(;n>=0&&_;--n){var y=r[n].s;d[y]==t&&(--d[y],++_)}m=t}return{t:new Ze(d),l:m}},iu=function(i,t,e){return i.s==-1?Math.max(iu(i.l,t,e+1),iu(i.r,t,e+1)):t[i.s]=e},Od=function(i){for(var t=i.length;t&&!i[--t];);for(var e=new bn(++t),n=0,s=i[0],r=1,o=function(c){e[n++]=c},a=1;a<=t;++a)if(i[a]==s&&a!=t)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return{c:e.subarray(0,n),n:t}},fo=function(i,t){for(var e=0,n=0;n<t.length;++n)e+=i[n]*t[n];return e},Yd=function(i,t,e){var n=e.length,s=Xd(t+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=e[r];return(s+4+n)*8},zd=function(i,t,e,n,s,r,o,a,c,l,h){_i(t,h++,e),++s[256];for(var u=tu(s,15),f=u.t,d=u.l,m=tu(r,15),_=m.t,x=m.l,p=Od(f),S=p.c,T=p.n,y=Od(_),b=y.c,E=y.n,R=new bn(19),g=0;g<S.length;++g)++R[S[g]&31];for(var g=0;g<b.length;++g)++R[b[g]&31];for(var M=tu(R,7),A=M.t,P=M.l,C=19;C>4&&!A[Fd[C-1]];--C);var H=l+5<<3,L=fo(s,ls)+fo(r,ql)+o,D=fo(s,f)+fo(r,_)+o+14+3*C+fo(R,A)+2*R[16]+3*R[17]+7*R[18];if(c>=0&&H<=L&&H<=D)return Yd(t,h,i.subarray(c,c+l));var z,B,q,U;if(_i(t,h,1+(D<L)),h+=2,D<L){z=po(f,d,0),B=f,q=po(_,x,0),U=_;var O=po(A,P,0);_i(t,h,T-257),_i(t,h+5,E-1),_i(t,h+10,C-4),h+=14;for(var g=0;g<C;++g)_i(t,h+3*g,A[Fd[g]]);h+=3*C;for(var F=[S,b],K=0;K<2;++K)for(var j=F[K],g=0;g<j.length;++g){var ht=j[g]&31;_i(t,h,O[ht]),h+=A[ht],ht>15&&(_i(t,h,j[g]>>5&127),h+=j[g]>>12)}}else z=jy,B=ls,q=tv,U=ql;for(var g=0;g<a;++g){var at=n[g];if(at>255){var ht=at>>18&31;uo(t,h,z[ht+257]),h+=B[ht+257],ht>7&&(_i(t,h,at>>23&31),h+=ou[ht]);var rt=at&31;uo(t,h,q[rt]),h+=U[rt],rt>3&&(uo(t,h,at>>5&8191),h+=au[rt])}else uo(t,h,z[at]),h+=B[at]}return uo(t,h,z[256]),h+B[256]},nv=new ru([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),$d=new Ze(0),iv=function(i,t,e,n,s,r){var o=r.z||i.length,a=new Ze(n+o+5*(1+Math.ceil(o/7e3))+s),c=a.subarray(n,a.length-s),l=r.l,h=(r.r||0)&7;if(t){h&&(c[0]=r.r>>3);for(var u=nv[t-1],f=u>>13,d=u&8191,m=(1<<e)-1,_=r.p||new bn(32768),x=r.h||new bn(m+1),p=Math.ceil(e/3),S=2*p,T=function(At){return(i[At]^i[At+1]<<p^i[At+2]<<S)&m},y=new ru(25e3),b=new bn(288),E=new bn(32),R=0,g=0,M=r.i||0,A=0,P=r.w||0,C=0;M+2<o;++M){var H=T(M),L=M&32767,D=x[H];if(_[L]=D,x[H]=L,P<=M){var z=o-M;if((R>7e3||A>24576)&&(z>423||!l)){h=zd(i,c,0,y,b,E,g,A,C,M-C,h),A=R=g=0,C=M;for(var B=0;B<286;++B)b[B]=0;for(var B=0;B<30;++B)E[B]=0}var q=2,U=0,O=d,F=L-D&32767;if(z>2&&H==T(M-F))for(var K=Math.min(f,z)-1,j=Math.min(32767,M),ht=Math.min(258,z);F<=j&&--O&&L!=D;){if(i[M+q]==i[M+q-F]){for(var at=0;at<ht&&i[M+at]==i[M+at-F];++at);if(at>q){if(q=at,U=F,at>K)break;for(var rt=Math.min(F,at-2),Y=0,B=0;B<rt;++B){var W=M-F+B&32767,it=_[W],ft=W-it&32767;ft>Y&&(Y=ft,D=W)}}}L=D,D=_[L],F+=L-D&32767}if(U){y[A++]=268435456|eu[q]<<18|Bd[U];var lt=eu[q]&31,dt=Bd[U]&31;g+=ou[lt]+au[dt],++b[257+lt],++E[dt],P=M+q,++R}else y[A++]=i[M],++b[i[M]]}}for(M=Math.max(M,P);M<o;++M)y[A++]=i[M],++b[i[M]];h=zd(i,c,l,y,b,E,g,A,C,M-C,h),l||(r.r=h&7|c[h/8|0]<<3,h-=7,r.h=x,r.p=_,r.i=M,r.w=P)}else{for(var M=r.w||0;M<o+l;M+=65535){var Lt=M+65535;Lt>=o&&(c[h/8|0]=l,Lt=o),h=Yd(c,h+1,i.subarray(M,Lt))}r.i=o}return qd(a,0,n+Xd(h)+s)},sv=(function(){for(var i=new Int32Array(256),t=0;t<256;++t){for(var e=t,n=9;--n;)e=(e&1&&-306674912)^e>>>1;i[t]=e}return i})(),rv=function(){var i=-1;return{p:function(t){for(var e=i,n=0;n<t.length;++n)e=sv[e&255^t[n]]^e>>>8;i=e},d:function(){return~i}}};var ov=function(i,t,e,n,s){if(!s&&(s={l:1},t.dictionary)){var r=t.dictionary.subarray(-32768),o=new Ze(r.length+i.length);o.set(r),o.set(i,r.length),i=o,s.w=r.length}return iv(i,t.level==null?6:t.level,t.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+t.mem,e,n,s)},Zd=function(i,t){var e={};for(var n in i)e[n]=i[n];for(var n in t)e[n]=t[n];return e};var $e=function(i,t,e){for(;e;++t)i[t]=e,e>>>=8};function av(i,t){return ov(i,t||{},0,0)}var Jd=function(i,t,e,n){for(var s in i){var r=i[s],o=t+s,a=n;Array.isArray(r)&&(a=Zd(n,r[1]),r=r[0]),r instanceof Ze?e[o]=[r,a]:(e[o+="/"]=[new Ze(0),a],Jd(r,o,e,n))}},Hd=typeof TextEncoder!="undefined"&&new TextEncoder,lv=typeof TextDecoder!="undefined"&&new TextDecoder,cv=0;try{lv.decode($d,{stream:!0}),cv=1}catch{}function mo(i,t){if(t){for(var e=new Ze(i.length),n=0;n<i.length;++n)e[n]=i.charCodeAt(n);return e}if(Hd)return Hd.encode(i);for(var s=i.length,r=new Ze(i.length+(i.length>>1)),o=0,a=function(h){r[o++]=h},n=0;n<s;++n){if(o+5>r.length){var c=new Ze(o+8+(s-n<<1));c.set(r),r=c}var l=i.charCodeAt(n);l<128||t?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return qd(r,0,o)}var su=function(i){var t=0;if(i)for(var e in i){var n=i[e].length;n>65535&&Yl(9),t+=n+4}return t},kd=function(i,t,e,n,s,r,o,a){var c=n.length,l=e.extra,h=a&&a.length,u=su(l);$e(i,t,o!=null?33639248:67324752),t+=4,o!=null&&(i[t++]=20,i[t++]=e.os),i[t]=20,t+=2,i[t++]=e.flag<<1|(r<0&&8),i[t++]=s&&8,i[t++]=e.compression&255,i[t++]=e.compression>>8;var f=new Date(e.mtime==null?Date.now():e.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Yl(10),$e(i,t,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,r!=-1&&($e(i,t,e.crc),$e(i,t+4,r<0?-r-2:r),$e(i,t+8,e.size)),$e(i,t+12,c),$e(i,t+14,u),t+=16,o!=null&&($e(i,t,h),$e(i,t+6,e.attrs),$e(i,t+10,o),t+=14),i.set(n,t),t+=c,u)for(var m in l){var _=l[m],x=_.length;$e(i,t,+m),$e(i,t+2,x),i.set(_,t+4),t+=4+x}return h&&(i.set(a,t),t+=h),t},hv=function(i,t,e,n,s){$e(i,t,101010256),$e(i,t+8,e),$e(i,t+10,e),$e(i,t+12,n),$e(i,t+16,s)};function Kd(i,t){t||(t={});var e={},n=[];Jd(i,"",e,t);var s=0,r=0;for(var o in e){var a=e[o],c=a[0],l=a[1],h=l.level==0?0:8,u=mo(o),f=u.length,d=l.comment,m=d&&mo(d),_=m&&m.length,x=su(l.extra);f>65535&&Yl(11);var p=h?av(c,l):c,S=p.length,T=rv();T.p(c),n.push(Zd(l,{size:c.length,crc:T.d(),c:p,f:u,m,u:f!=o.length||m&&d.length!=_,o:s,compression:h})),s+=30+f+x+S,r+=76+2*(f+x)+(_||0)+S}for(var y=new Ze(r+22),b=s,E=r-s,R=0;R<n.length;++R){var u=n[R];kd(y,u.o,u,u.f,u.u,u.c.length);var g=30+u.f.length+su(u.extra);y.set(u.c,u.o+g),kd(y,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+g+(u.m?u.m.length:0)}return hv(y,s,n.length,E,b),y}var sn=class{constructor(t,e="",n=[],s=[]){this.name=t,this.type=e,this.metadata=n,this.properties=s,this.children=[]}addMetadata(t,e){this.metadata.push({key:t,value:e})}addProperty(t,e=[]){this.properties.push({property:t,metadata:e})}addChild(t){this.children.push(t)}toString(t=0){let e="	".repeat(t),n=this.metadata.map(h=>{let u=h.key,f=h.value;if(Array.isArray(f)){let d=[];return d.push(`${u} = {`),f.forEach(m=>{d.push(`${e}		${m}`)}),d.push(`${e}	}`),d.join(`
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
${e}}`}},Zl=class{constructor(){this.textureUtils=null}setTextureUtils(t){this.textureUtils=t}parse(t,e,n,s){this.parseAsync(t,s).then(e).catch(n)}async parseAsync(t,e={}){e=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},e);let n=new Set,s={},r="model.usda";s[r]=null;let o=fv(t,e.animations);e.animationTracks=o;let a=new sn("Root","Xform"),c=new sn("Scenes","Scope");c.addMetadata("kind",'"sceneLibrary"'),a.addChild(c);let l="Scene",h=new sn(l,"Xform");h.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${l}"`]),h.addMetadata("sceneName",`"${l}"`),e.includeAnchoringProperties&&(h.addProperty(`token preliminary:anchoring:type = "${e.ar.anchoring.type}"`),h.addProperty(`token preliminary:planeAnchoring:alignment = "${e.ar.planeAnchoring.alignment}"`)),c.addChild(h);let u,f={},d={};t.isScene?sp(t,h,f,n,s,e):rp(t,h,f,n,s,e);let m=Mv(f,d,e.quickLookCompatible),_=o.size>0?{fps:e.animationFrameRate,endTimeCode:dv(e.animations)*e.animationFrameRate}:null;u=ip(_)+`
`+a.toString()+`

`+m.toString(),s[r]=mo(u),u=null;for(let p in d){let S=d[p];if(S.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");S=await this.textureUtils.decompress(S)}let T=uv(S.image,S.flipY,e.maxTextureSize),y=S.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",b=await new Promise(E=>T.toBlob(E,y));s[`textures/Texture_${p}.${np(S)}`]=new Uint8Array(await b.arrayBuffer())}let x=0;for(let p in s){let S=s[p],T=34+p.length;x+=T;let y=x&63;if(y!==4){let b=64-y,E=new Uint8Array(b);s[p]=[S,{extra:{12345:E}}]}x=S.length}return Kd(s,{level:0,mtime:new Date})}};function ep(i,t){let e=i.name;return e=e.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(e)&&(e="_"+e),e===""&&(i.isCamera?e="Camera":e="Object"),t.has(e)&&(e=e+"_"+i.id),t.add(e),e}function np(i){return i.userData.mimeType==="image/jpeg"?"jpg":"png"}function uv(i,t,e){if(typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas!="undefined"&&i instanceof OffscreenCanvas||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap){let n=e/Math.max(i.width,i.height),s=document.createElement("canvas");s.width=i.width*Math.min(1,n),s.height=i.height*Math.min(1,n);let r=s.getContext("2d");return t===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(i,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var ne=7;function ip(i=null){return`#usda 1.0
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
`}function fv(i,t){let e=new Map;for(let n=0;n<t.length;n++){let s=t[n];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=ye.parseTrackName(o.name),c=ye.findNode(i,a.nodeName);if(c==null)continue;let l=a.propertyName;if(l!=="position"&&l!=="quaternion"&&l!=="scale")continue;let h=e.get(c);h===void 0&&(h={},e.set(c,h)),h[l]=o}}return e}function dv(i){let t=0;for(let e=0;e<i.length;e++)i[e].duration>t&&(t=i[e].duration);return t}function Qd(i,t,e,n){let s=e.times,r=e.values,o=[];for(let a=0;a<s.length;a++){let c=a*3;o.push(`${(s[a]*n).toPrecision(ne)}: (${r[c].toPrecision(ne)}, ${r[c+1].toPrecision(ne)}, ${r[c+2].toPrecision(ne)})`)}return`${t} ${i}.timeSamples = {
	${o.join(`,
	`)},
}`}function pv(i,t){let e=i.times,n=i.values,s=[];for(let r=0;r<e.length;r++){let o=r*4;s.push(`${(e[r]*t).toPrecision(ne)}: (${n[o+3].toPrecision(ne)}, ${n[o].toPrecision(ne)}, ${n[o+1].toPrecision(ne)}, ${n[o+2].toPrecision(ne)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function sp(i,t,e,n,s,r){for(let o=0,a=i.children.length;o<a;o++)rp(i.children[o],t,e,n,s,r)}function rp(i,t,e,n,s,r){if(i.visible===!1&&r.onlyVisible===!0)return;let o;if(i.isMesh){let a=i.geometry,c=Array.isArray(i.material),l=c?i.material:[i.material];for(let u=0;u<l.length;u++){let f=l[u];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in e||(e[f.uuid]=f)}let h=l.map(u=>e[u.uuid]);if(c===!1){let u=`geometries/Geometry_${a.id}.usda`;if(!(u in s)){let f=xv(a);s[u]=mo(ip()+`
`+f.toString())}}o=mv(i,a,h,n,r)}else i.isCamera?o=Ev(i,n,r):o=ap(i,n,r);t.addChild(o),sp(i,o,e,n,s,r)}function op(i,t,e){let n=e.animationTracks.get(t),s=t.pivot!==null;if(!s&&n===void 0){let l=gv(t.matrix);i.addProperty(`matrix4d xformOp:transform = ${l}`),i.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=e.animationFrameRate,o=t.position,a=t.quaternion,c=t.scale;if(n!==void 0&&n.position!==void 0?i.addProperty(Qd("xformOp:translate","float3",n.position,r)):i.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(ne)}, ${o.y.toPrecision(ne)}, ${o.z.toPrecision(ne)})`),s){let l=t.pivot;i.addProperty(`float3 xformOp:translate:pivot = (${l.x.toPrecision(ne)}, ${l.y.toPrecision(ne)}, ${l.z.toPrecision(ne)})`)}n!==void 0&&n.quaternion!==void 0?i.addProperty(pv(n.quaternion,r)):i.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(ne)}, ${a.x.toPrecision(ne)}, ${a.y.toPrecision(ne)}, ${a.z.toPrecision(ne)})`),n!==void 0&&n.scale!==void 0?i.addProperty(Qd("xformOp:scale","float3",n.scale,r)):i.addProperty(`float3 xformOp:scale = (${c.x.toPrecision(ne)}, ${c.y.toPrecision(ne)}, ${c.z.toPrecision(ne)})`),s?i.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):i.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function ap(i,t,e){let n=ep(i,t);i.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i);let s=new sn(n,"Xform");return op(s,i,e),s}function mv(i,t,e,n,s){let r=ap(i,n,s);return e.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${t.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${e[0].id}>`)):r.addChild(lp(t,e)),r}function gv(i){let t=i.elements;return`( ${$l(t,0)}, ${$l(t,4)}, ${$l(t,8)}, ${$l(t,12)} )`}function $l(i,t){return`(${i[t+0]}, ${i[t+1]}, ${i[t+2]}, ${i[t+3]})`}function xv(i){let t=new sn("Geometry"),e=lp(i);return t.addChild(e),t}function lp(i,t=null){let e="Geometry",n=i.attributes,s=n.position.count,r=new sn(e,"Mesh");r.addProperty(`int[] faceVertexCounts = [${_v(i)}]`),r.addProperty(`int[] faceVertexIndices = [${yv(i)}]`),r.addProperty(`normal3f[] normals = [${lu(n.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${lu(n.position,s)}]`);for(let a=0;a<4;a++){let c=a>0?a:"",l=n["uv"+c];l!==void 0&&r.addProperty(`texCoord2f[] primvars:st${c} = [${vv(l)}]`,['interpolation = "vertex"'])}let o=n.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${lu(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),t!==null){let a=i.groups,c=(i.index!==null?i.index.count:n.position.count)/3;for(let l=0;l<a.length;l++){let h=a[l],u=t[h.materialIndex];if(u===void 0)continue;let f=Math.floor(h.start/3),d=Math.min(f+Math.floor(h.count/3),c),m=[];for(let x=f;x<d;x++)m.push(x);let _=new sn(`subset_${l}`,"GeomSubset");_.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),_.addProperty('uniform token elementType = "face"'),_.addProperty('uniform token familyName = "materialBind"'),_.addProperty(`int[] indices = [${m.join(", ")}]`),_.addProperty(`rel material:binding = </Materials/Material_${u.id}>`),r.addChild(_)}}return r}function _v(i){let t=i.index!==null?i.index.count:i.attributes.position.count;return Array(t/3).fill(3).join(", ")}function yv(i){let t=i.index,e=[];if(t!==null)for(let n=0;n<t.count;n++)e.push(t.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)e.push(s)}return e.join(", ")}function lu(i,t){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");let e=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),o=i.getZ(n);e.push(`(${s.toPrecision(ne)}, ${r.toPrecision(ne)}, ${o.toPrecision(ne)})`)}return e.join(", ")}function vv(i){let t=[];for(let e=0;e<i.count;e++){let n=i.getX(e),s=i.getY(e);t.push(`(${n.toPrecision(ne)}, ${1-s.toPrecision(ne)})`)}return t.join(", ")}function Mv(i,t,e=!1){let n=new sn("Materials");for(let s in i){let r=i[s];n.addChild(Sv(r,t,e))}return n}function Sv(i,t,e=!1){var o,a,c,l;let n=new sn(`Material_${i.id}`,"Material");function s(h,u,f){let d=h.source.id+"_"+h.flipY;t[d]=h;let m=h.channel>0?"st"+h.channel:"st",_={1e3:"repeat",1001:"clamp",1002:"mirror"},x=h.repeat.clone(),p=h.offset.clone(),S=h.rotation,T=Math.sin(S),y=Math.cos(S);p.y=1-p.y-x.y,e?(p.x=p.x/x.x,p.y=p.y/x.y,p.x+=T/x.x,p.y+=y-1):(p.x+=T*x.x,p.y+=(1-y)*x.y);let b=new sn(`PrimvarReader_${u}`,"Shader");b.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),b.addProperty("float2 inputs:fallback = (0.0, 0.0)"),b.addProperty(`string inputs:varname = "${m}"`),b.addProperty("float2 outputs:result");let E=new sn(`Transform2d_${u}`,"Shader");E.addProperty('uniform token info:id = "UsdTransform2d"'),E.addProperty(`float2 inputs:in.connect = </Materials/Material_${i.id}/PrimvarReader_${u}.outputs:result>`),E.addProperty(`float inputs:rotation = ${(S*(180/Math.PI)).toFixed(ne)}`),E.addProperty(`float2 inputs:scale = ${tp(x)}`),E.addProperty(`float2 inputs:translation = ${tp(p)}`),E.addProperty("float2 outputs:result");let R=new sn(`Texture_${h.id}_${u}`,"Shader");if(R.addProperty('uniform token info:id = "UsdUVTexture"'),R.addProperty(`asset inputs:file = @textures/Texture_${d}.${np(h)}@`),R.addProperty(`float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${u}.outputs:result>`),f!==void 0){let g=u==="diffuse"?i.opacity:1;R.addProperty(`float4 inputs:scale = ${bv(f,g)}`)}if(u==="normal"){let g=i.normalScale.x;R.addProperty(`float4 inputs:scale = (${2*g}, ${2*g}, 2, 1)`),R.addProperty(`float4 inputs:bias = (${-g}, ${-g}, -1, 0)`)}return R.addProperty(`token inputs:sourceColorSpace = "${h.colorSpace===Wn?"raw":"sRGB"}"`),R.addProperty(`token inputs:wrapS = "${_[h.wrapS]}"`),R.addProperty(`token inputs:wrapT = "${_[h.wrapT]}"`),R.addProperty("float outputs:r"),R.addProperty("float outputs:g"),R.addProperty("float outputs:b"),R.addProperty("float3 outputs:rgb"),(i.transparent||i.alphaTest>0)&&R.addProperty("float outputs:a"),[b,E,R]}i.side===Ue&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i);let r=new sn("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),i.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${i.alphaTest}`)),s(i.map,"diffuse",i.color).forEach(u=>n.addChild(u))):r.addProperty(`color3f inputs:diffuseColor = ${jd(i.color)}`),i.emissive){let h=(o=i.emissiveIntensity)!=null?o:1;if(i.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`);let u=new It(i.emissive.r*h,i.emissive.g*h,i.emissive.b*h);s(i.emissiveMap,"emissive",u).forEach(d=>n.addChild(d))}else i.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${jd(i.emissive)}`)}if(i.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),s(i.normalMap,"normal").forEach(u=>n.addChild(u))),i.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`);let h=(a=i.aoMapIntensity)!=null?a:1,u=new It(h,h,h);s(i.aoMap,"occlusion",u).forEach(d=>n.addChild(d))}if(i.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`);let h=new It(i.roughness,i.roughness,i.roughness);s(i.roughnessMap,"roughness",h).forEach(f=>n.addChild(f))}else r.addProperty(`float inputs:roughness = ${(c=i.roughness)!=null?c:1}`);if(i.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`);let h=new It(i.metalness,i.metalness,i.metalness);s(i.metalnessMap,"metallic",h).forEach(f=>n.addChild(f))}else r.addProperty(`float inputs:metallic = ${(l=i.metalness)!=null?l:0}`);if(i.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(i.alphaMap,"opacity").forEach(u=>n.addChild(u))):r.addProperty(`float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial){if(i.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatMap.id}_clearcoat.outputs:r>`);let h=new It(i.clearcoat,i.clearcoat,i.clearcoat);s(i.clearcoatMap,"clearcoat",h).forEach(f=>n.addChild(f))}else r.addProperty(`float inputs:clearcoat = ${i.clearcoat}`);if(i.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let h=new It(i.clearcoatRoughness,i.clearcoatRoughness,i.clearcoatRoughness);s(i.clearcoatRoughnessMap,"clearcoatRoughness",h).forEach(f=>n.addChild(f))}else r.addProperty(`float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${i.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),n.addChild(r),n.addProperty(`token outputs:surface.connect = </Materials/Material_${i.id}/PreviewSurface.outputs:surface>`),n}function jd(i){return`(${i.r}, ${i.g}, ${i.b})`}function bv(i,t=1){return`(${i.r}, ${i.g}, ${i.b}, ${t})`}function tp(i){return`(${i.x}, ${i.y})`}function Ev(i,t,e){let n=ep(i,t);i.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i);let s=new sn(n,"Camera");op(s,i,e);let r=i.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${i.near.toPrecision(ne)}, ${i.far.toPrecision(ne)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;i.isOrthographicCamera?a=((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(ne):a=i.getFilmWidth().toPrecision(ne),s.addProperty(`float horizontalAperture = ${a}`);let c;if(i.isOrthographicCamera?c=((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(ne):c=i.getFilmHeight().toPrecision(ne),s.addProperty(`float verticalAperture = ${c}`),i.isPerspectiveCamera){let l=i.getFocalLength().toPrecision(ne);s.addProperty(`float focalLength = ${l}`);let h=i.focus.toPrecision(ne);s.addProperty(`float focusDistance = ${h}`)}return s}function wv(){try{let i=document.createElement("a");return!!(i.relList&&i.relList.supports&&i.relList.supports("ar"))}catch{return!1}}function Tv(i){let t=new fi,e=new zt;t.add(e);let n=ho(e,i,Pn.low);e.remove(n.dog),n.hand&&e.remove(n.hand);let s=[];return e.traverse(r=>{if(r.isInstancedMesh){s.push(r);return}if(!r.isMesh)return;let o=a=>a.isMeshStandardMaterial?a:new oe({color:a.color?a.color.clone():16777215,map:a.map||null,transparent:!!a.transparent,opacity:a.opacity==null?1:a.opacity,roughness:.8,side:a.side});r.material=Array.isArray(r.material)?r.material.map(o):o(r.material)}),s.forEach(r=>r.parent&&r.parent.remove(r)),e.position.set(-i.W/2,0,-i.H/2),t.updateMatrixWorld(!0),new Zl().parseAsync(t,{quickLookCompatible:!0,maxTextureSize:512}).then(r=>new Blob([r],{type:"model/vnd.usdz+zip"}))}Zh(Id);Zh(Dd||{});export{Jy as arSupported,By as hasScene,Xy as mount,Zy as mountCourse,Tv as quickLookBlob,wv as quickLookOK,Ky as startAR};
