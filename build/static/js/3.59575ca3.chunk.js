(this["webpackJsonppolycuban-frontend"]=this["webpackJsonppolycuban-frontend"]||[]).push([[3],{782:function(e,r,n){"use strict";var t=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,i=Math.ceil,o=Math.floor,s="[BigNumber Error] ",u=s+"Number primitive has more than 15 significant digits: ",f=1e14,l=14,c=9007199254740991,a=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],h=1e7,p=1e9;function g(e){var r=0|e;return e>0||e===r?r:r-1}function w(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=l-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function m(e,r){var n,t,i=e.c,o=r.c,s=e.s,u=r.s,f=e.e,l=r.e;if(!s||!u)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-u:s;if(s!=u)return s;if(n=s<0,t=f==l,!i||!o)return t?0:!i^n?1:-1;if(!t)return f>l^n?1:-1;for(u=(f=i.length)<(l=o.length)?f:l,s=0;s<u;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return f==l?0:f>l^n?1:-1}function d(e,r,n,t){if(e<r||e>n||e!==o(e))throw Error(s+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function v(e){var r=e.c.length-1;return g(e.e/l)==r&&e.c[r]%2!=0}function N(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function b(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}var O=function e(r){var n,O,y,E=C.prototype={constructor:C,toString:null,valueOf:null},A=new C(1),S=20,R=4,_=-7,D=21,P=-1e7,B=1e7,L=!1,U=1,x=0,I={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},T="0123456789abcdefghijklmnopqrstuvwxyz";function C(e,r){var n,i,s,f,a,h,p,g,w=this;if(!(w instanceof C))return new C(e,r);if(null==r){if(e&&!0===e._isBigNumber)return w.s=e.s,void(!e.c||e.e>B?w.c=w.e=null:e.e<P?w.c=[w.e=0]:(w.e=e.e,w.c=e.c.slice()));if((h="number"==typeof e)&&0*e==0){if(w.s=1/e<0?(e=-e,-1):1,e===~~e){for(f=0,a=e;a>=10;a/=10,f++);return void(f>B?w.c=w.e=null:(w.e=f,w.c=[e]))}g=String(e)}else{if(!t.test(g=String(e)))return y(w,g,h);w.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1}(f=g.indexOf("."))>-1&&(g=g.replace(".","")),(a=g.search(/e/i))>0?(f<0&&(f=a),f+=+g.slice(a+1),g=g.substring(0,a)):f<0&&(f=g.length)}else{if(d(r,2,T.length,"Base"),10==r)return F(w=new C(e),S+w.e+1,R);if(g=String(e),h="number"==typeof e){if(0*e!=0)return y(w,g,h,r);if(w.s=1/e<0?(g=g.slice(1),-1):1,C.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else w.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(n=T.slice(0,r),f=a=0,p=g.length;a<p;a++)if(n.indexOf(i=g.charAt(a))<0){if("."==i){if(a>f){f=p;continue}}else if(!s&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){s=!0,a=-1,f=0;continue}return y(w,String(e),h,r)}h=!1,(f=(g=O(g,r,10,w.s)).indexOf("."))>-1?g=g.replace(".",""):f=g.length}for(a=0;48===g.charCodeAt(a);a++);for(p=g.length;48===g.charCodeAt(--p););if(g=g.slice(a,++p)){if(p-=a,h&&C.DEBUG&&p>15&&(e>c||e!==o(e)))throw Error(u+w.s*e);if((f=f-a-1)>B)w.c=w.e=null;else if(f<P)w.c=[w.e=0];else{if(w.e=f,w.c=[],a=(f+1)%l,f<0&&(a+=l),a<p){for(a&&w.c.push(+g.slice(0,a)),p-=l;a<p;)w.c.push(+g.slice(a,a+=l));a=l-(g=g.slice(a)).length}else a-=p;for(;a--;g+="0");w.c.push(+g)}}else w.c=[w.e=0]}function M(e,r,n,t){var i,o,s,u,f;if(null==n?n=R:d(n,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)f=w(e.c),f=1==t||2==t&&(s<=_||s>=D)?N(f,s):b(f,s,"0");else if(o=(e=F(new C(e),r,n)).e,u=(f=w(e.c)).length,1==t||2==t&&(r<=o||o<=_)){for(;u<r;f+="0",u++);f=N(f,o)}else if(r-=s,f=b(f,o,"0"),o+1>u){if(--r>0)for(f+=".";r--;f+="0");}else if((r+=o-u)>0)for(o+1==u&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function k(e,r){for(var n,t=1,i=new C(e[0]);t<e.length;t++){if(!(n=new C(e[t])).s){i=n;break}r.call(i,n)&&(i=n)}return i}function G(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*l-1)>B?e.c=e.e=null:n<P?e.c=[e.e=0]:(e.e=n,e.c=r),e}function F(e,r,n,t){var s,u,c,h,p,g,w,m=e.c,d=a;if(m){e:{for(s=1,h=m[0];h>=10;h/=10,s++);if((u=r-s)<0)u+=l,c=r,w=(p=m[g=0])/d[s-c-1]%10|0;else if((g=i((u+1)/l))>=m.length){if(!t)break e;for(;m.length<=g;m.push(0));p=w=0,s=1,c=(u%=l)-l+1}else{for(p=h=m[g],s=1;h>=10;h/=10,s++);w=(c=(u%=l)-l+s)<0?0:p/d[s-c-1]%10|0}if(t=t||r<0||null!=m[g+1]||(c<0?p:p%d[s-c-1]),t=n<4?(w||t)&&(0==n||n==(e.s<0?3:2)):w>5||5==w&&(4==n||t||6==n&&(u>0?c>0?p/d[s-c]:0:m[g-1])%10&1||n==(e.s<0?8:7)),r<1||!m[0])return m.length=0,t?(r-=e.e+1,m[0]=d[(l-r%l)%l],e.e=-r||0):m[0]=e.e=0,e;if(0==u?(m.length=g,h=1,g--):(m.length=g+1,h=d[l-u],m[g]=c>0?o(p/d[s-c]%d[c])*h:0),t)for(;;){if(0==g){for(u=1,c=m[0];c>=10;c/=10,u++);for(c=m[0]+=h,h=1;c>=10;c/=10,h++);u!=h&&(e.e++,m[0]==f&&(m[0]=1));break}if(m[g]+=h,m[g]!=f)break;m[g--]=0,h=1}for(u=m.length;0===m[--u];m.pop());}e.e>B?e.c=e.e=null:e.e<P&&(e.c=[e.e=0])}return e}function j(e){var r,n=e.e;return null===n?e.toString():(r=w(e.c),r=n<=_||n>=D?N(r,n):b(r,n,"0"),e.s<0?"-"+r:r)}return C.clone=e,C.ROUND_UP=0,C.ROUND_DOWN=1,C.ROUND_CEIL=2,C.ROUND_FLOOR=3,C.ROUND_HALF_UP=4,C.ROUND_HALF_DOWN=5,C.ROUND_HALF_EVEN=6,C.ROUND_HALF_CEIL=7,C.ROUND_HALF_FLOOR=8,C.EUCLID=9,C.config=C.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(s+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(d(n=e[r],0,p,r),S=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(d(n=e[r],0,8,r),R=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(d(n[0],-p,0,r),d(n[1],0,p,r),_=n[0],D=n[1]):(d(n,-p,p,r),_=-(D=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)d(n[0],-p,-1,r),d(n[1],1,p,r),P=n[0],B=n[1];else{if(d(n,-p,p,r),!n)throw Error(s+r+" cannot be zero: "+n);P=-(B=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(s+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw L=!n,Error(s+"crypto unavailable");L=n}else L=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(d(n=e[r],0,9,r),U=n),e.hasOwnProperty(r="POW_PRECISION")&&(d(n=e[r],0,p,r),x=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(s+r+" not an object: "+n);I=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.$|[+-.\s]|(.).*\1/.test(n))throw Error(s+r+" invalid: "+n);T=n}}return{DECIMAL_PLACES:S,ROUNDING_MODE:R,EXPONENTIAL_AT:[_,D],RANGE:[P,B],CRYPTO:L,MODULO_MODE:U,POW_PRECISION:x,FORMAT:I,ALPHABET:T}},C.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!C.DEBUG)return!0;var r,n,t=e.c,i=e.e,u=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===u||-1===u)&&i>=-p&&i<=p&&i===o(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if((r=(i+1)%l)<1&&(r+=l),String(t[0]).length==r){for(r=0;r<t.length;r++)if((n=t[r])<0||n>=f||n!==o(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===u||1===u||-1===u))return!0;throw Error(s+"Invalid BigNumber: "+e)},C.maximum=C.max=function(){return k(arguments,E.lt)},C.minimum=C.min=function(){return k(arguments,E.gt)},C.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return o(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,u,f,c,h=0,g=[],w=new C(A);if(null==e?e=S:d(e,0,p),f=i(e/l),L)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(f*=2));h<f;)(c=131072*n[h]+(n[h+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[h]=t[0],n[h+1]=t[1]):(g.push(c%1e14),h+=2);h=f/2}else{if(!crypto.randomBytes)throw L=!1,Error(s+"crypto unavailable");for(n=crypto.randomBytes(f*=7);h<f;)(c=281474976710656*(31&n[h])+1099511627776*n[h+1]+4294967296*n[h+2]+16777216*n[h+3]+(n[h+4]<<16)+(n[h+5]<<8)+n[h+6])>=9e15?crypto.randomBytes(7).copy(n,h):(g.push(c%1e14),h+=7);h=f/7}if(!L)for(;h<f;)(c=r())<9e15&&(g[h++]=c%1e14);for(f=g[--h],e%=l,f&&e&&(c=a[l-e],g[h]=o(f/c)*c);0===g[h];g.pop(),h--);if(h<0)g=[u=0];else{for(u=-1;0===g[0];g.splice(0,1),u-=l);for(h=1,c=g[0];c>=10;c/=10,h++);h<l&&(u-=l-h)}return w.e=u,w.c=g,w}}(),C.sum=function(){for(var e=1,r=arguments,n=new C(r[0]);e<r.length;)n=n.plus(r[e++]);return n},O=function(){var e="0123456789";function r(e,r,n,t){for(var i,o,s=[0],u=0,f=e.length;u<f;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(u++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}return function(t,i,o,s,u){var f,l,c,a,h,p,g,m,d=t.indexOf("."),v=S,N=R;for(d>=0&&(a=x,x=0,t=t.replace(".",""),p=(m=new C(i)).pow(t.length-d),x=a,m.c=r(b(w(p.c),p.e,"0"),10,o,e),m.e=m.c.length),c=a=(g=r(t,i,o,u?(f=T,e):(f=e,T))).length;0==g[--a];g.pop());if(!g[0])return f.charAt(0);if(d<0?--c:(p.c=g,p.e=c,p.s=s,g=(p=n(p,m,v,N,o)).c,h=p.r,c=p.e),d=g[l=c+v+1],a=o/2,h=h||l<0||null!=g[l+1],h=N<4?(null!=d||h)&&(0==N||N==(p.s<0?3:2)):d>a||d==a&&(4==N||h||6==N&&1&g[l-1]||N==(p.s<0?8:7)),l<1||!g[0])t=h?b(f.charAt(1),-v,f.charAt(0)):f.charAt(0);else{if(g.length=l,h)for(--o;++g[--l]>o;)g[l]=0,l||(++c,g=[1].concat(g));for(a=g.length;!g[--a];);for(d=0,t="";d<=a;t+=f.charAt(g[d++]));t=b(t,c,f.charAt(0))}return t}}(),n=function(){function e(e,r,n){var t,i,o,s,u=0,f=e.length,l=r%h,c=r/h|0;for(e=e.slice();f--;)u=((i=l*(o=e[f]%h)+(t=c*o+(s=e[f]/h|0)*l)%h*h+u)/n|0)+(t/h|0)+c*s,e[f]=i%n;return u&&(e=[u].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,i,s,u,c){var a,h,p,w,m,d,v,N,b,O,y,E,A,S,R,_,D,P=t.s==i.s?1:-1,B=t.c,L=i.c;if(!B||!B[0]||!L||!L[0])return new C(t.s&&i.s&&(B?!L||B[0]!=L[0]:L)?B&&0==B[0]||!L?0*P:P/0:NaN);for(b=(N=new C(P)).c=[],P=s+(h=t.e-i.e)+1,c||(c=f,h=g(t.e/l)-g(i.e/l),P=P/l|0),p=0;L[p]==(B[p]||0);p++);if(L[p]>(B[p]||0)&&h--,P<0)b.push(1),w=!0;else{for(S=B.length,_=L.length,p=0,P+=2,(m=o(c/(L[0]+1)))>1&&(L=e(L,m,c),B=e(B,m,c),_=L.length,S=B.length),A=_,y=(O=B.slice(0,_)).length;y<_;O[y++]=0);D=L.slice(),D=[0].concat(D),R=L[0],L[1]>=c/2&&R++;do{if(m=0,(a=r(L,O,_,y))<0){if(E=O[0],_!=y&&(E=E*c+(O[1]||0)),(m=o(E/R))>1)for(m>=c&&(m=c-1),v=(d=e(L,m,c)).length,y=O.length;1==r(d,O,v,y);)m--,n(d,_<v?D:L,v,c),v=d.length,a=1;else 0==m&&(a=m=1),v=(d=L.slice()).length;if(v<y&&(d=[0].concat(d)),n(O,d,y,c),y=O.length,-1==a)for(;r(L,O,_,y)<1;)m++,n(O,_<y?D:L,y,c),y=O.length}else 0===a&&(m++,O=[0]);b[p++]=m,O[0]?O[y++]=B[A]||0:(O=[B[A]],y=1)}while((A++<S||null!=O[0])&&P--);w=null!=O[0],b[0]||b.splice(0,1)}if(c==f){for(p=1,P=b[0];P>=10;P/=10,p++);F(N,s+(N.e=p+h*l-1)+1,u,w)}else N.e=h,N.r=+w;return N}}(),y=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,u,f,l){var c,a=f?u:u.replace(i,"");if(t.test(a))o.s=isNaN(a)?null:a<0?-1:1;else{if(!f&&(a=a.replace(e,(function(e,r,n){return c="x"==(n=n.toLowerCase())?16:"b"==n?2:8,l&&l!=c?e:r})),l&&(c=l,a=a.replace(r,"$1").replace(n,"0.$1")),u!=a))return new C(a,c);if(C.DEBUG)throw Error(s+"Not a"+(l?" base "+l:"")+" number: "+u);o.s=null}o.c=o.e=null}}(),E.absoluteValue=E.abs=function(){var e=new C(this);return e.s<0&&(e.s=1),e},E.comparedTo=function(e,r){return m(this,new C(e,r))},E.decimalPlaces=E.dp=function(e,r){var n,t,i,o=this;if(null!=e)return d(e,0,p),null==r?r=R:d(r,0,8),F(new C(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-g(this.e/l))*l,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},E.dividedBy=E.div=function(e,r){return n(this,new C(e,r),S,R)},E.dividedToIntegerBy=E.idiv=function(e,r){return n(this,new C(e,r),0,1)},E.exponentiatedBy=E.pow=function(e,r){var n,t,u,f,c,a,h,p,g=this;if((e=new C(e)).c&&!e.isInteger())throw Error(s+"Exponent not an integer: "+j(e));if(null!=r&&(r=new C(r)),c=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return p=new C(Math.pow(+j(g),c?2-v(e):+j(e))),r?p.mod(r):p;if(a=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new C(NaN);(t=!a&&g.isInteger()&&r.isInteger())&&(g=g.mod(r))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||c&&g.c[1]>=24e7:g.c[0]<8e13||c&&g.c[0]<=9999975e7)))return f=g.s<0&&v(e)?-0:0,g.e>-1&&(f=1/f),new C(a?1/f:f);x&&(f=i(x/l+2))}for(c?(n=new C(.5),a&&(e.s=1),h=v(e)):h=(u=Math.abs(+j(e)))%2,p=new C(A);;){if(h){if(!(p=p.times(g)).c)break;f?p.c.length>f&&(p.c.length=f):t&&(p=p.mod(r))}if(u){if(0===(u=o(u/2)))break;h=u%2}else if(F(e=e.times(n),e.e+1,1),e.e>14)h=v(e);else{if(0===(u=+j(e)))break;h=u%2}g=g.times(g),f?g.c&&g.c.length>f&&(g.c.length=f):t&&(g=g.mod(r))}return t?p:(a&&(p=A.div(p)),r?p.mod(r):f?F(p,x,R,undefined):p)},E.integerValue=function(e){var r=new C(this);return null==e?e=R:d(e,0,8),F(r,r.e+1,e)},E.isEqualTo=E.eq=function(e,r){return 0===m(this,new C(e,r))},E.isFinite=function(){return!!this.c},E.isGreaterThan=E.gt=function(e,r){return m(this,new C(e,r))>0},E.isGreaterThanOrEqualTo=E.gte=function(e,r){return 1===(r=m(this,new C(e,r)))||0===r},E.isInteger=function(){return!!this.c&&g(this.e/l)>this.c.length-2},E.isLessThan=E.lt=function(e,r){return m(this,new C(e,r))<0},E.isLessThanOrEqualTo=E.lte=function(e,r){return-1===(r=m(this,new C(e,r)))||0===r},E.isNaN=function(){return!this.s},E.isNegative=function(){return this.s<0},E.isPositive=function(){return this.s>0},E.isZero=function(){return!!this.c&&0==this.c[0]},E.minus=function(e,r){var n,t,i,o,s=this,u=s.s;if(r=(e=new C(e,r)).s,!u||!r)return new C(NaN);if(u!=r)return e.s=-r,s.plus(e);var c=s.e/l,a=e.e/l,h=s.c,p=e.c;if(!c||!a){if(!h||!p)return h?(e.s=-r,e):new C(p?s:NaN);if(!h[0]||!p[0])return p[0]?(e.s=-r,e):new C(h[0]?s:3==R?-0:0)}if(c=g(c),a=g(a),h=h.slice(),u=c-a){for((o=u<0)?(u=-u,i=h):(a=c,i=p),i.reverse(),r=u;r--;i.push(0));i.reverse()}else for(t=(o=(u=h.length)<(r=p.length))?u:r,u=r=0;r<t;r++)if(h[r]!=p[r]){o=h[r]<p[r];break}if(o&&(i=h,h=p,p=i,e.s=-e.s),(r=(t=p.length)-(n=h.length))>0)for(;r--;h[n++]=0);for(r=f-1;t>u;){if(h[--t]<p[t]){for(n=t;n&&!h[--n];h[n]=r);--h[n],h[t]+=f}h[t]-=p[t]}for(;0==h[0];h.splice(0,1),--a);return h[0]?G(e,h,a):(e.s=3==R?-1:1,e.c=[e.e=0],e)},E.modulo=E.mod=function(e,r){var t,i,o=this;return e=new C(e,r),!o.c||!e.s||e.c&&!e.c[0]?new C(NaN):!e.c||o.c&&!o.c[0]?new C(o):(9==U?(i=e.s,e.s=1,t=n(o,e,0,3),e.s=i,t.s*=i):t=n(o,e,0,U),(e=o.minus(t.times(e))).c[0]||1!=U||(e.s=o.s),e)},E.multipliedBy=E.times=function(e,r){var n,t,i,o,s,u,c,a,p,w,m,d,v,N,b,O=this,y=O.c,E=(e=new C(e,r)).c;if(!y||!E||!y[0]||!E[0])return!O.s||!e.s||y&&!y[0]&&!E||E&&!E[0]&&!y?e.c=e.e=e.s=null:(e.s*=O.s,y&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=g(O.e/l)+g(e.e/l),e.s*=O.s,(c=y.length)<(w=E.length)&&(v=y,y=E,E=v,i=c,c=w,w=i),i=c+w,v=[];i--;v.push(0));for(N=f,b=h,i=w;--i>=0;){for(n=0,m=E[i]%b,d=E[i]/b|0,o=i+(s=c);o>i;)n=((a=m*(a=y[--s]%b)+(u=d*a+(p=y[s]/b|0)*m)%b*b+v[o]+n)/N|0)+(u/b|0)+d*p,v[o--]=a%N;v[o]=n}return n?++t:v.splice(0,1),G(e,v,t)},E.negated=function(){var e=new C(this);return e.s=-e.s||null,e},E.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new C(e,r)).s,!i||!r)return new C(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/l,s=e.e/l,u=t.c,c=e.c;if(!o||!s){if(!u||!c)return new C(i/0);if(!u[0]||!c[0])return c[0]?e:new C(u[0]?t:0*i)}if(o=g(o),s=g(s),u=u.slice(),i=o-s){for(i>0?(s=o,n=c):(i=-i,n=u),n.reverse();i--;n.push(0));n.reverse()}for((i=u.length)-(r=c.length)<0&&(n=c,c=u,u=n,r=i),i=0;r;)i=(u[--r]=u[r]+c[r]+i)/f|0,u[r]=f===u[r]?0:u[r]%f;return i&&(u=[i].concat(u),++s),G(e,u,s)},E.precision=E.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return d(e,1,p),null==r?r=R:d(r,0,8),F(new C(o),e,r);if(!(n=o.c))return null;if(t=(i=n.length-1)*l+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},E.shiftedBy=function(e){return d(e,-9007199254740991,c),this.times("1e"+e)},E.squareRoot=E.sqrt=function(){var e,r,t,i,o,s=this,u=s.c,f=s.s,l=s.e,c=S+4,a=new C("0.5");if(1!==f||!u||!u[0])return new C(!f||f<0&&(!u||u[0])?NaN:u?s:1/0);if(0==(f=Math.sqrt(+j(s)))||f==1/0?(((r=w(u)).length+l)%2==0&&(r+="0"),f=Math.sqrt(+r),l=g((l+1)/2)-(l<0||l%2),t=new C(r=f==1/0?"5e"+l:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+l)):t=new C(f+""),t.c[0])for((f=(l=t.e)+c)<3&&(f=0);;)if(o=t,t=a.times(o.plus(n(s,o,c,1))),w(o.c).slice(0,f)===(r=w(t.c)).slice(0,f)){if(t.e<l&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(F(t,t.e+S+2,1),e=!t.times(t).eq(s));break}if(!i&&(F(o,o.e+S+2,0),o.times(o).eq(s))){t=o;break}c+=4,f+=4,i=1}return F(t,t.e+S+1,R,e)},E.toExponential=function(e,r){return null!=e&&(d(e,0,p),e++),M(this,e,r,1)},E.toFixed=function(e,r){return null!=e&&(d(e,0,p),e=e+this.e+1),M(this,e,r)},E.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=I;else if("object"!=typeof n)throw Error(s+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var o,u=t.split("."),f=+n.groupSize,l=+n.secondaryGroupSize,c=n.groupSeparator||"",a=u[0],h=u[1],p=i.s<0,g=p?a.slice(1):a,w=g.length;if(l&&(o=f,f=l,l=o,w-=o),f>0&&w>0){for(o=w%f||f,a=g.substr(0,o);o<w;o+=f)a+=c+g.substr(o,f);l>0&&(a+=c+g.slice(o)),p&&(a="-"+a)}t=h?a+(n.decimalSeparator||"")+((l=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+t+(n.suffix||"")},E.toFraction=function(e){var r,t,i,o,u,f,c,h,p,g,m,d,v=this,N=v.c;if(null!=e&&(!(c=new C(e)).isInteger()&&(c.c||1!==c.s)||c.lt(A)))throw Error(s+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+j(c));if(!N)return new C(v);for(r=new C(A),p=t=new C(A),i=h=new C(A),d=w(N),u=r.e=d.length-v.e-1,r.c[0]=a[(f=u%l)<0?l+f:f],e=!e||c.comparedTo(r)>0?u>0?r:p:c,f=B,B=1/0,c=new C(d),h.c[0]=0;g=n(c,r,0,1),1!=(o=t.plus(g.times(i))).comparedTo(e);)t=i,i=o,p=h.plus(g.times(o=p)),h=o,r=c.minus(g.times(o=r)),c=o;return o=n(e.minus(t),i,0,1),h=h.plus(o.times(p)),t=t.plus(o.times(i)),h.s=p.s=v.s,m=n(p,i,u*=2,R).minus(v).abs().comparedTo(n(h,t,u,R).minus(v).abs())<1?[p,i]:[h,t],B=f,m},E.toNumber=function(){return+j(this)},E.toPrecision=function(e,r){return null!=e&&d(e,1,p),M(this,e,r,2)},E.toString=function(e){var r,n=this,t=n.s,i=n.e;return null===i?t?(r="Infinity",t<0&&(r="-"+r)):r="NaN":(null==e?r=i<=_||i>=D?N(w(n.c),i):b(w(n.c),i,"0"):10===e?r=b(w((n=F(new C(n),S+i+1,R)).c),n.e,"0"):(d(e,2,T.length,"Base"),r=O(b(w(n.c),i,"0"),10,e,t,!0)),t<0&&n.c[0]&&(r="-"+r)),r},E.valueOf=E.toJSON=function(){return j(this)},E._isBigNumber=!0,E[Symbol.toStringTag]="BigNumber",E[Symbol.for("nodejs.util.inspect.custom")]=E.valueOf,null!=r&&C.set(r),C}();r.a=O}}]);
//# sourceMappingURL=3.59575ca3.chunk.js.map