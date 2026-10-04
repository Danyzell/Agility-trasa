function r(v){return Math.round(v*100)/100;}
function r1(v){return Math.round(v*10)/10;}
function cl(v,a,b){return Math.min(b,Math.max(a,v));}
function dst(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
function fmt(v){var s=v.toFixed(1); return LANG==='en'?s:s.replace('.',',');}
function bz(a,b,c,d,t){var m=1-t;return {x:m*m*m*a.x+3*m*m*t*b.x+3*m*t*t*c.x+t*t*t*d.x, y:m*m*m*a.y+3*m*m*t*b.y+3*m*t*t*c.y+t*t*t*d.y};}
function plank(hl,w,zl){
  var f=' y="'+(-w)+'" height="'+(2*w)+'"';
  return '<rect x="'+(-hl)+'"'+f+' width="'+(2*hl)+'" fill="currentColor" fill-opacity=".85"/>'+
    '<rect x="'+(-hl)+'"'+f+' width="'+zl+'" fill="'+ZC+'"/>'+
    '<rect x="'+(hl-zl)+'"'+f+' width="'+zl+'" fill="'+ZC+'"/>';
}
var WV='<line x1="-3.3" x2="3.3" stroke="currentColor" stroke-width=".04" opacity=".5"/>';
for(var q=0;q<12;q++) WV+='<circle cx="'+r(-3.3+q*.6)+'" r=".1" fill="currentColor"/>';
