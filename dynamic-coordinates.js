window.onload=function(){var e=function(e,n){var o,t=e.getElementsByTagName("area"),r=t.length,i=[],d=2e3;for(o=0;r>o;o++)i[o]=t[o].coords.split(",");this.resize=function(){var e,o,s,a=n.offsetWidth/d;for(e=0;r>e;e++){for(s=i[e].length,o=0;s>o;o++)i[e][o]=Math.round(parseInt(i[e][o],10)*a);t[e].coords=i[e].join(",")}return d=document.body.clientWidth,!0},window.onresize=this.resize},n=new e(document.getElementById("IMG_ID"),document.getElementById("MAP_ID"));n.resize()};
