var De=Object.defineProperty;var jt=t=>{throw TypeError(t)};var Oe=(t,r,e)=>r in t?De(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var p=(t,r,e)=>Oe(t,typeof r!="symbol"?r+"":r,e),At=(t,r,e)=>r.has(t)||jt("Cannot "+e);var b=(t,r,e)=>(At(t,r,"read from private field"),e?e.call(t):r.get(t)),m=(t,r,e)=>r.has(t)?jt("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,e),T=(t,r,e,n)=>(At(t,r,"write to private field"),n?n.call(t,e):r.set(t,e),e);import{E as Zt,e as Ee,s as ve,c as Ce}from"./index-BZ8ZNF0v.js";var Qt=typeof global=="object"&&global&&global.Object===Object&&global,Ie=typeof self=="object"&&self&&self.Object===Object&&self,j=Qt||Ie||Function("return this")(),O=j.Symbol,Vt=Object.prototype,Pe=Vt.hasOwnProperty,xe=Vt.toString,B=O?O.toStringTag:void 0;function Me(t){var r=Pe.call(t,B),e=t[B];try{t[B]=void 0;var n=!0}catch(s){}var a=xe.call(t);return n&&(r?t[B]=e:delete t[B]),a}var Fe=Object.prototype,Le=Fe.toString;function Ne(t){return Le.call(t)}var Re="[object Null]",Ue="[object Undefined]",St=O?O.toStringTag:void 0;function X(t){return t==null?t===void 0?Ue:Re:St&&St in Object(t)?Me(t):Ne(t)}function R(t){return t!=null&&typeof t=="object"}var nt=Array.isArray;function at(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}function te(t){return t}var Be="[object AsyncFunction]",Ge="[object Function]",qe="[object GeneratorFunction]",ze="[object Proxy]";function ee(t){if(!at(t))return!1;var r=X(t);return r==Ge||r==qe||r==Be||r==ze}var ct=j["__core-js_shared__"],wt=function(){var t=/[^.]+$/.exec(ct&&ct.keys&&ct.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function ke(t){return!!wt&&wt in t}var He=Function.prototype,Ke=He.toString;function I(t){if(t!=null){try{return Ke.call(t)}catch(r){}try{return t+""}catch(r){}}return""}var We=/[\\^$.*+?()[\]{}|]/g,Ye=/^\[object .+?Constructor\]$/,Je=Function.prototype,Xe=Object.prototype,Ze=Je.toString,Qe=Xe.hasOwnProperty,Ve=RegExp("^"+Ze.call(Qe).replace(We,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function tr(t){if(!at(t)||ke(t))return!1;var r=ee(t)?Ve:Ye;return r.test(I(t))}function er(t,r){return t==null?void 0:t[r]}function P(t,r){var e=er(t,r);return tr(e)?e:void 0}var ht=P(j,"WeakMap"),$t=Object.create,rr=function(){function t(){}return function(r){if(!at(r))return{};if($t)return $t(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();function nr(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}function ar(){}var sr=800,ir=16,or=Date.now;function cr(t){var r=0,e=0;return function(){var n=or(),a=ir-(n-e);if(e=n,a>0){if(++r>=sr)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}function fr(t){return function(){return t}}var Q=function(){try{var t=P(Object,"defineProperty");return t({},"",{}),t}catch(r){}}(),ur=Q?function(t,r){return Q(t,"toString",{configurable:!0,enumerable:!1,value:fr(r),writable:!0})}:te,hr=cr(ur);function dr(t,r){for(var e=-1,n=t==null?0:t.length;++e<n&&r(t[e],e,t)!==!1;);return t}function pr(t,r,e,n){for(var a=t.length,s=e+-1;++s<a;)if(r(t[s],s,t))return s;return-1}function lr(t){return t!==t}function gr(t,r,e){for(var n=e-1,a=t.length;++n<a;)if(t[n]===r)return n;return-1}function yr(t,r,e){return r===r?gr(t,r,e):pr(t,lr,e)}function br(t,r){var e=t==null?0:t.length;return!!e&&yr(t,r,0)>-1}var mr=9007199254740991,Tr=/^(?:0|[1-9]\d*)$/;function _r(t,r){var e=typeof t;return r=r==null?mr:r,!!r&&(e=="number"||e!="symbol"&&Tr.test(t))&&t>-1&&t%1==0&&t<r}function jr(t,r,e){r=="__proto__"&&Q?Q(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}function re(t,r){return t===r||t!==t&&r!==r}var Ar=Object.prototype,Sr=Ar.hasOwnProperty;function wr(t,r,e){var n=t[r];(!(Sr.call(t,r)&&re(n,e))||e===void 0&&!(r in t))&&jr(t,r,e)}var Dt=Math.max;function $r(t,r,e){return r=Dt(r===void 0?t.length-1:r,0),function(){for(var n=arguments,a=-1,s=Dt(n.length-r,0),i=Array(s);++a<s;)i[a]=n[r+a];a=-1;for(var o=Array(r+1);++a<r;)o[a]=n[a];return o[r]=e(i),nr(t,this,o)}}function Dr(t,r){return hr($r(t,r,te),t+"")}var Or=9007199254740991;function ne(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Or}function ae(t){return t!=null&&ne(t.length)&&!ee(t)}var Er=Object.prototype;function se(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||Er;return t===e}function vr(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}var Cr="[object Arguments]";function Ot(t){return R(t)&&X(t)==Cr}var ie=Object.prototype,Ir=ie.hasOwnProperty,Pr=ie.propertyIsEnumerable,oe=Ot(function(){return arguments}())?Ot:function(t){return R(t)&&Ir.call(t,"callee")&&!Pr.call(t,"callee")};function xr(){return!1}var ce=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Et=ce&&typeof module=="object"&&module&&!module.nodeType&&module,Mr=Et&&Et.exports===ce,vt=Mr?j.Buffer:void 0,Fr=vt?vt.isBuffer:void 0,fe=Fr||xr,Lr="[object Arguments]",Nr="[object Array]",Rr="[object Boolean]",Ur="[object Date]",Br="[object Error]",Gr="[object Function]",qr="[object Map]",zr="[object Number]",kr="[object Object]",Hr="[object RegExp]",Kr="[object Set]",Wr="[object String]",Yr="[object WeakMap]",Jr="[object ArrayBuffer]",Xr="[object DataView]",Zr="[object Float32Array]",Qr="[object Float64Array]",Vr="[object Int8Array]",tn="[object Int16Array]",en="[object Int32Array]",rn="[object Uint8Array]",nn="[object Uint8ClampedArray]",an="[object Uint16Array]",sn="[object Uint32Array]",l={};l[Zr]=l[Qr]=l[Vr]=l[tn]=l[en]=l[rn]=l[nn]=l[an]=l[sn]=!0;l[Lr]=l[Nr]=l[Jr]=l[Rr]=l[Xr]=l[Ur]=l[Br]=l[Gr]=l[qr]=l[zr]=l[kr]=l[Hr]=l[Kr]=l[Wr]=l[Yr]=!1;function on(t){return R(t)&&ne(t.length)&&!!l[X(t)]}function bt(t){return function(r){return t(r)}}var ue=typeof exports=="object"&&exports&&!exports.nodeType&&exports,G=ue&&typeof module=="object"&&module&&!module.nodeType&&module,cn=G&&G.exports===ue,ft=cn&&Qt.process,N=function(){try{var t=G&&G.require&&G.require("util").types;return t||ft&&ft.binding&&ft.binding("util")}catch(r){}}(),Ct=N&&N.isTypedArray,fn=Ct?bt(Ct):on,un=Object.prototype,hn=un.hasOwnProperty;function dn(t,r){var e=nt(t),n=!e&&oe(t),a=!e&&!n&&fe(t),s=!e&&!n&&!a&&fn(t),i=e||n||a||s,o=i?vr(t.length,String):[],c=o.length;for(var f in t)hn.call(t,f)&&!(i&&(f=="length"||a&&(f=="offset"||f=="parent")||s&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||_r(f,c)))&&o.push(f);return o}function he(t,r){return function(e){return t(r(e))}}var pn=he(Object.keys,Object),ln=Object.prototype,gn=ln.hasOwnProperty;function yn(t){if(!se(t))return pn(t);var r=[];for(var e in Object(t))gn.call(t,e)&&e!="constructor"&&r.push(e);return r}function bn(t){return ae(t)?dn(t):yn(t)}var q=P(Object,"create");function mn(){this.__data__=q?q(null):{},this.size=0}function Tn(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}var _n="__lodash_hash_undefined__",jn=Object.prototype,An=jn.hasOwnProperty;function Sn(t){var r=this.__data__;if(q){var e=r[t];return e===_n?void 0:e}return An.call(r,t)?r[t]:void 0}var wn=Object.prototype,$n=wn.hasOwnProperty;function Dn(t){var r=this.__data__;return q?r[t]!==void 0:$n.call(r,t)}var On="__lodash_hash_undefined__";function En(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=q&&r===void 0?On:r,this}function v(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}v.prototype.clear=mn;v.prototype.delete=Tn;v.prototype.get=Sn;v.prototype.has=Dn;v.prototype.set=En;function vn(){this.__data__=[],this.size=0}function st(t,r){for(var e=t.length;e--;)if(re(t[e][0],r))return e;return-1}var Cn=Array.prototype,In=Cn.splice;function Pn(t){var r=this.__data__,e=st(r,t);if(e<0)return!1;var n=r.length-1;return e==n?r.pop():In.call(r,e,1),--this.size,!0}function xn(t){var r=this.__data__,e=st(r,t);return e<0?void 0:r[e][1]}function Mn(t){return st(this.__data__,t)>-1}function Fn(t,r){var e=this.__data__,n=st(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this}function $(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}$.prototype.clear=vn;$.prototype.delete=Pn;$.prototype.get=xn;$.prototype.has=Mn;$.prototype.set=Fn;var z=P(j,"Map");function Ln(){this.size=0,this.__data__={hash:new v,map:new(z||$),string:new v}}function Nn(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}function it(t,r){var e=t.__data__;return Nn(r)?e[typeof r=="string"?"string":"hash"]:e.map}function Rn(t){var r=it(this,t).delete(t);return this.size-=r?1:0,r}function Un(t){return it(this,t).get(t)}function Bn(t){return it(this,t).has(t)}function Gn(t,r){var e=it(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this}function x(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}x.prototype.clear=Ln;x.prototype.delete=Rn;x.prototype.get=Un;x.prototype.has=Bn;x.prototype.set=Gn;function de(t,r){for(var e=-1,n=r.length,a=t.length;++e<n;)t[a+e]=r[e];return t}var It=O?O.isConcatSpreadable:void 0;function qn(t){return nt(t)||oe(t)||!!(It&&t&&t[It])}function zn(t,r,e,n,a){var s=-1,i=t.length;for(e||(e=qn),a||(a=[]);++s<i;){var o=t[s];e(o)&&de(a,o)}return a}var kn=he(Object.getPrototypeOf,Object);function Hn(){this.__data__=new $,this.size=0}function Kn(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function Wn(t){return this.__data__.get(t)}function Yn(t){return this.__data__.has(t)}var Jn=200;function Xn(t,r){var e=this.__data__;if(e instanceof $){var n=e.__data__;if(!z||n.length<Jn-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new x(n)}return e.set(t,r),this.size=e.size,this}function U(t){var r=this.__data__=new $(t);this.size=r.size}U.prototype.clear=Hn;U.prototype.delete=Kn;U.prototype.get=Wn;U.prototype.has=Yn;U.prototype.set=Xn;var pe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Pt=pe&&typeof module=="object"&&module&&!module.nodeType&&module,Zn=Pt&&Pt.exports===pe,xt=Zn?j.Buffer:void 0;xt&&xt.allocUnsafe;function Qn(t,r){return t.slice()}function Vn(t,r){for(var e=-1,n=t==null?0:t.length,a=0,s=[];++e<n;){var i=t[e];r(i,e,t)&&(s[a++]=i)}return s}function ta(){return[]}var ea=Object.prototype,ra=ea.propertyIsEnumerable,Mt=Object.getOwnPropertySymbols,na=Mt?function(t){return t==null?[]:(t=Object(t),Vn(Mt(t),function(r){return ra.call(t,r)}))}:ta;function aa(t,r,e){var n=r(t);return nt(t)?n:de(n,e(t))}function sa(t){return aa(t,bn,na)}var dt=P(j,"DataView"),pt=P(j,"Promise"),F=P(j,"Set"),Ft="[object Map]",ia="[object Object]",Lt="[object Promise]",Nt="[object Set]",Rt="[object WeakMap]",Ut="[object DataView]",oa=I(dt),ca=I(z),fa=I(pt),ua=I(F),ha=I(ht),w=X;(dt&&w(new dt(new ArrayBuffer(1)))!=Ut||z&&w(new z)!=Ft||pt&&w(pt.resolve())!=Lt||F&&w(new F)!=Nt||ht&&w(new ht)!=Rt)&&(w=function(t){var r=X(t),e=r==ia?t.constructor:void 0,n=e?I(e):"";if(n)switch(n){case oa:return Ut;case ca:return Ft;case fa:return Lt;case ua:return Nt;case ha:return Rt}return r});var da=Object.prototype,pa=da.hasOwnProperty;function la(t){var r=t.length,e=new t.constructor(r);return r&&typeof t[0]=="string"&&pa.call(t,"index")&&(e.index=t.index,e.input=t.input),e}var Bt=j.Uint8Array;function mt(t){var r=new t.constructor(t.byteLength);return new Bt(r).set(new Bt(t)),r}function ga(t,r){var e=mt(t.buffer);return new t.constructor(e,t.byteOffset,t.byteLength)}var ya=/\w*$/;function ba(t){var r=new t.constructor(t.source,ya.exec(t));return r.lastIndex=t.lastIndex,r}var Gt=O?O.prototype:void 0,qt=Gt?Gt.valueOf:void 0;function ma(t){return qt?Object(qt.call(t)):{}}function Ta(t,r){var e=mt(t.buffer);return new t.constructor(e,t.byteOffset,t.length)}var _a="[object Boolean]",ja="[object Date]",Aa="[object Map]",Sa="[object Number]",wa="[object RegExp]",$a="[object Set]",Da="[object String]",Oa="[object Symbol]",Ea="[object ArrayBuffer]",va="[object DataView]",Ca="[object Float32Array]",Ia="[object Float64Array]",Pa="[object Int8Array]",xa="[object Int16Array]",Ma="[object Int32Array]",Fa="[object Uint8Array]",La="[object Uint8ClampedArray]",Na="[object Uint16Array]",Ra="[object Uint32Array]";function Ua(t,r,e){var n=t.constructor;switch(r){case Ea:return mt(t);case _a:case ja:return new n(+t);case va:return ga(t);case Ca:case Ia:case Pa:case xa:case Ma:case Fa:case La:case Na:case Ra:return Ta(t);case Aa:return new n;case Sa:case Da:return new n(t);case wa:return ba(t);case $a:return new n;case Oa:return ma(t)}}function Ba(t){return typeof t.constructor=="function"&&!se(t)?rr(kn(t)):{}}var Ga="[object Map]";function qa(t){return R(t)&&w(t)==Ga}var zt=N&&N.isMap,za=zt?bt(zt):qa,ka="[object Set]";function Ha(t){return R(t)&&w(t)==ka}var kt=N&&N.isSet,Ka=kt?bt(kt):Ha,le="[object Arguments]",Wa="[object Array]",Ya="[object Boolean]",Ja="[object Date]",Xa="[object Error]",ge="[object Function]",Za="[object GeneratorFunction]",Qa="[object Map]",Va="[object Number]",ye="[object Object]",ts="[object RegExp]",es="[object Set]",rs="[object String]",ns="[object Symbol]",as="[object WeakMap]",ss="[object ArrayBuffer]",is="[object DataView]",os="[object Float32Array]",cs="[object Float64Array]",fs="[object Int8Array]",us="[object Int16Array]",hs="[object Int32Array]",ds="[object Uint8Array]",ps="[object Uint8ClampedArray]",ls="[object Uint16Array]",gs="[object Uint32Array]",d={};d[le]=d[Wa]=d[ss]=d[is]=d[Ya]=d[Ja]=d[os]=d[cs]=d[fs]=d[us]=d[hs]=d[Qa]=d[Va]=d[ye]=d[ts]=d[es]=d[rs]=d[ns]=d[ds]=d[ps]=d[ls]=d[gs]=!0;d[Xa]=d[ge]=d[as]=!1;function Z(t,r,e,n,a,s){var i;if(i!==void 0)return i;if(!at(t))return t;var o=nt(t);if(o)i=la(t);else{var c=w(t),f=c==ge||c==Za;if(fe(t))return Qn(t);if(c==ye||c==le||f&&!a)i=f?{}:Ba(t);else{if(!d[c])return a?t:{};i=Ua(t,c)}}s||(s=new U);var u=s.get(t);if(u)return u;s.set(t,i),Ka(t)?t.forEach(function(g){i.add(Z(g,r,e,g,t,s))}):za(t)&&t.forEach(function(g,A){i.set(A,Z(g,r,e,A,t,s))});var h=sa,y=o?void 0:h(t);return dr(y||t,function(g,A){y&&(A=g,g=t[A]),wr(i,A,Z(g,r,e,A,t,s))}),i}var ys=1,bs=4;function ot(t){return Z(t,ys|bs)}var ms="__lodash_hash_undefined__";function Ts(t){return this.__data__.set(t,ms),this}function _s(t){return this.__data__.has(t)}function V(t){var r=-1,e=t==null?0:t.length;for(this.__data__=new x;++r<e;)this.add(t[r])}V.prototype.add=V.prototype.push=Ts;V.prototype.has=_s;function js(t,r){return t.has(r)}function be(t){var r=-1,e=Array(t.size);return t.forEach(function(n){e[++r]=n}),e}function As(t){return R(t)&&ae(t)}var Ss=1/0,ws=F&&1/be(new F([,-0]))[1]==Ss?function(t){return new F(t)}:ar,$s=200;function Ds(t,r,e){var n=-1,a=br,s=t.length,i=!0,o=[],c=o;if(s>=$s){var f=ws(t);if(f)return be(f);i=!1,a=js,c=new V}else c=o;t:for(;++n<s;){var u=t[n],h=u;if(u=u!==0?u:0,i&&h===h){for(var y=c.length;y--;)if(c[y]===h)continue t;o.push(u)}else a(c,h,e)||(c!==o&&c.push(h),o.push(u))}return o}Dr(function(t){return Ds(zn(t,1,As))});class Os{}class me extends Os{constructor(e){super();p(this,"data",{});p(this,"event",new Ee.EventEmitter);this.data=e}update(e,n){n?yt(n,e,this.data):this.data=e;const a={updateData:e,path:n!=null?n:""};n&&this.event.emit(n,a),this.event.emit("",a)}on(e,n){this.event.on(e,n)}off(e,n){this.event.off(e,n)}getData(e){return e?C(e,this.data):this.data}destroy(){}}var et,H,K,_,E,W;class Te extends Zt{constructor(e){var s,i,o,c,f;super();p(this,"isInit",!1);p(this,"app");p(this,"mockData");m(this,et,"base");m(this,H);m(this,K);m(this,_);m(this,E,[]);m(this,W,[]);T(this,H,e.schema.id),T(this,K,e.schema),this.app=e.app,this.setFields(e.schema.fields),this.setMethods(e.schema.methods||[]);let n=e.initialData;const a=e.ObservedDataClass||me;if(this.app.platform==="editor")this.mockData=((i=(s=e.schema.mocks)==null?void 0:s.find(u=>u.useInEditor))==null?void 0:i.data)||this.getDefaultData(),n=ot(this.mockData);else if(typeof e.useMock=="boolean"&&e.useMock)this.mockData=(c=(o=e.schema.mocks)==null?void 0:o.find(u=>u.enable))==null?void 0:c.data,n=this.mockData||this.getDefaultData();else if(!e.initialData)n=this.getDefaultData();else{T(this,_,new a((f=e.initialData)!=null?f:{})),this.isInit=!0;return}T(this,_,new a(n!=null?n:{}))}get id(){return b(this,H)}get type(){return b(this,et)}get schema(){return b(this,K)}get fields(){return b(this,E)}get methods(){return b(this,W)}setFields(e){T(this,E,e)}setMethods(e){T(this,W,e)}get data(){return b(this,_).getData("")}setData(e,n){b(this,_).update(e,n);const a={updateData:e,path:n};this.emit("change",a)}setValue(e,n){return this.setData(n,e)}onDataChange(e,n){b(this,_).on(e,n)}offDataChange(e,n){b(this,_).off(e,n)}getDefaultData(){return Se(b(this,E))}async init(){this.isInit=!0}destroy(){T(this,E,[]),this.removeAllListeners(),b(this,_).destroy()}}et=new WeakMap,H=new WeakMap,K=new WeakMap,_=new WeakMap,E=new WeakMap,W=new WeakMap;const Ht=t=>Object.entries(t).reduce((r,[e,n])=>{let a=n;return typeof n=="object"&&(a=JSON.stringify(n)),typeof n<"u"?"".concat(r).concat(r?"&":"").concat(globalThis.encodeURIComponent(e),"=").concat(globalThis.encodeURIComponent("".concat(a))):r},""),Es=async t=>{var u;const{url:r,method:e="GET",headers:n={},params:a={},data:s={},...i}=t,o=Ht(a);let c=JSON.stringify(s);return(u=n["Content-Type"])!=null&&u.includes("application/x-www-form-urlencoded")&&(c=Ht(s)),(await globalThis.fetch(o?"".concat(r,"?").concat(o):r,{method:e,headers:n,body:e==="GET"?void 0:c,...i})).json()};var L,Y,J,rt;class vs extends Te{constructor(e){const{options:n}=e.schema;super(e);p(this,"isLoading",!1);p(this,"error");p(this,"httpOptions");m(this,L);m(this,Y,[]);m(this,J,[]);m(this,rt,"http");this.httpOptions=n,typeof e.request=="function"?T(this,L,e.request):typeof globalThis.fetch=="function"&&T(this,L,Es),this.methods.forEach(a=>{typeof a.content=="function"&&(a.timing==="beforeRequest"&&b(this,Y).push(a.content),a.timing==="afterRequest"&&b(this,J).push(a.content))})}get type(){return b(this,rt)}async init(){this.schema.autoFetch&&await this.request(),super.init()}async request(e={}){var f,u;this.isLoading=!0;const{url:n,params:a,data:s,headers:i,...o}=this.httpOptions;let c={url:typeof n=="function"?n({app:this.app,dataSource:this}):n,params:typeof a=="function"?a({app:this.app,dataSource:this}):a,data:typeof s=="function"?s({app:this.app,dataSource:this}):s,headers:typeof i=="function"?i({app:this.app,dataSource:this}):i,...o,...e};try{for(const h of b(this,Y))await h({options:c,params:{},dataSource:this,app:this.app});if(typeof this.schema.beforeRequest=="function"&&(c=await this.schema.beforeRequest(c,{app:this.app,dataSource:this})),this.mockData)this.setData(this.mockData);else{let h=await((f=b(this,L))==null?void 0:f.call(this,c));for(const y of b(this,J))await y({res:h,options:c,params:{},dataSource:this,app:this.app});if(typeof this.schema.afterResponse=="function"&&(h=await this.schema.afterResponse(h,{app:this.app,dataSource:this,options:c})),(u=this.schema.responseOptions)!=null&&u.dataPath){const y=C(this.schema.responseOptions.dataPath,h);this.setData(y)}else this.setData(h)}this.error=void 0}catch(h){this.error={msg:h.message},this.emit("error",h)}this.isLoading=!1}get(e){return this.request({...e,method:"GET"})}post(e){return this.request({...e,method:"POST"})}}L=new WeakMap,Y=new WeakMap,J=new WeakMap,rt=new WeakMap;const ut=new Map,Cs=(t,r,e)=>{let n;if(e){const c=[];r.forEach(f=>{$e(f,u=>{c.push(u.id)})}),n="".concat(t.id,":").concat(c.join(":"))}else n="".concat(t.id,":").concat(r.map(c=>c.id).join(":"));if(ut.has(n))return ut.get(n);const a=new Gs;a.addTarget(new Jt({id:t.id,type:"data-source",isTarget:(c,f)=>"".concat(c).includes(je)?!1:Us(t,c,f,!0)})),a.addTarget(new Jt({id:t.id,type:"cond",isTarget:(c,f)=>Bs(t,c,f,!0)})),a.collect(r,{},!0);const{deps:s}=a.getTarget(t.id,"data-source"),{deps:i}=a.getTarget(t.id,"cond"),o={deps:s,condDeps:i};return ut.set(n,o),o},Is=(t,r)=>{let e=!0;for(const{op:n,value:a,range:s,field:i}of t){const[o,...c]=i,f=r[o];if(!f||!c.length)break;try{const u=C(c.join("."),f);if(!Fs(n,u,a,s)){e=!1;break}}catch(u){console.warn(u)}}return e},lt=(t,r)=>{if(!t[M]||!Array.isArray(t[M])||!t[M].length)return!0;for(const{cond:e}of t[M])if(e&&Is(e,r))return!0;return!1},Kt=(t,r,e=[],n={})=>{const a={...n,[r]:{}};let s=ot(n[r]),i=a[r];return e.forEach((o,c)=>{if(Object.assign(i,s),c===e.length-1){i[o]=t;return}Array.isArray(s[o])&&(s[o]={},i[o]={}),s=s[o],i=i[o]}),a},Ps=(t,r)=>{const[e,...n]=t,a=e.indexOf(tt);if(a>-1){const s=e.substring(a+tt.length),i=r[s];if(!i)return t;try{return C(n.join("."),i)}catch(o){return t}}return t},Wt=(t,r)=>t.replaceAll(we,(e,n)=>{try{return C(n,r)}catch(a){return e}}),Yt=(t,r)=>typeof t=="string"?Wt(t,r):t!=null&&t.isBindDataSource&&t.dataSourceId?r[t.dataSourceId]:t!=null&&t.isBindDataSourceField&&t.dataSourceId&&typeof t.template=="string"?Wt(t.template,r[t.dataSourceId]):Array.isArray(t)&&typeof t[0]=="string"?Ps(t,r):t,_e=({compile:t,dsId:r,item:e,deps:n,condDeps:a,inEditor:s,ctxData:i})=>{var u,h;const{items:o,...c}=e,f=ot(c);return(u=a[c.id])!=null&&u.keys.length&&!s&&(f.condResult=lt(c,i)),Array.isArray(o)&&o.length?f.items=o.map(y=>_e({compile:t,dsId:r,item:y,deps:n,condDeps:a,inEditor:s,ctxData:i})):o&&(f.items=o),(h=n[f.id])!=null&&h.keys.length?Ae(t,f,{[r]:n},r):f},S=class S extends Zt{constructor({app:e,useMock:n,initialData:a}){var i,o;super();p(this,"app");p(this,"dataSourceMap",new Map);p(this,"data",{});p(this,"useMock",!1);this.app=e,this.useMock=n,a&&(this.data=a),(o=(i=e.dsl)==null?void 0:i.dataSources)==null||o.forEach(c=>{this.addDataSource(c)});const s=Array.from(this.dataSourceMap);typeof Promise.allSettled=="function"?Promise.allSettled(s.map(([,c])=>this.init(c))).then(c=>{const f={},u={};c.forEach((h,y)=>{const g=s[y][0];h.status==="fulfilled"?this.data[g]?f[g]=this.data[g]:delete f[g]:h.status==="rejected"&&(delete f[g],u[g]=h.reason)}),this.emit("init",f,u)}):Promise.all(s.map(([,c])=>this.init(c))).then(()=>{this.emit("init",this.data)}).catch(()=>{this.emit("init",this.data)})}static register(e,n){S.dataSourceClassMap.set(e,n)}static getDataSourceClass(e){return S.dataSourceClassMap.get(e)}static registerObservedData(e){S.ObservedDataClass=e}async init(e){var n;if(!e.isInit&&!(this.app.jsEngine&&((n=e.schema.disabledInitInJsEngine)!=null&&n.includes(this.app.jsEngine)))){for(const a of e.methods){if(typeof a.content!="function")return;a.timing==="beforeInit"&&await a.content({params:{},dataSource:e,app:this.app})}await e.init();for(const a of e.methods){if(typeof a.content!="function")return;a.timing==="afterInit"&&await a.content({params:{},dataSource:e,app:this.app})}}}get(e){return this.dataSourceMap.get(e)}async addDataSource(e){if(!e)return;const n=S.dataSourceClassMap.get(e.type)||Te,a=new n({app:this.app,schema:e,request:this.app.request,useMock:this.useMock,initialData:this.data[e.id],ObservedDataClass:S.ObservedDataClass});this.dataSourceMap.set(e.id,a),this.data[a.id]=a.data,a.on("change",s=>{this.setData(a,s)})}setData(e,n){this.data[e.id]=e.data,this.emit("change",e.id,n)}removeDataSource(e){var n;(n=this.get(e))==null||n.destroy(),delete this.data[e],this.dataSourceMap.delete(e)}updateSchema(e){e.forEach(n=>{if(!this.get(n.id))return;this.removeDataSource(n.id),this.addDataSource(n);const s=this.get(n.id);s&&this.init(s)})}compiledNode({items:e,...n},a,s=!1){var o;const i=ot(n);return e&&(i.items=Array.isArray(e)&&s?e.map(c=>this.compiledNode(c,a,s)):e),n.condResult===!1||n.visible===!1?i:Ae(c=>Yt(c,this.data),i,((o=this.app.dsl)==null?void 0:o.dataSourceDeps)||{},a)}compliedConds(e){return lt(e,this.data)}compliedIteratorItemConds(e,n,a=[]){const[s,...i]=a,o=this.get(s);if(!o)return!0;const c=Kt(e,o.id,i,this.data);return lt(n,c)}compliedIteratorItems(e,n,a=[]){const[s,...i]=a,o=this.get(s);if(!o)return n;const c=this.app.platform==="editor",f=Kt(e,o.id,i,this.data),{deps:u={},condDeps:h={}}=Cs(o.schema,n,c);return!Object.keys(u).length&&!Object.keys(h).length?n:n.map(y=>_e({compile:g=>Yt(g,f),dsId:o.id,item:y,deps:u,condDeps:h,inEditor:c,ctxData:f}))}destroy(){this.removeAllListeners(),this.data={},this.dataSourceMap.forEach(e=>{e.destroy()}),this.dataSourceMap.clear()}onDataChange(e,n,a){var s;return(s=this.get(e))==null?void 0:s.onDataChange(n,a)}offDataChange(e,n,a){var s;return(s=this.get(e))==null?void 0:s.offDataChange(n,a)}};p(S,"dataSourceClassMap",new Map),p(S,"ObservedDataClass",me);let gt=S;gt.register("http",vs);var xs=(t=>(t.CONTAINER="container",t.PAGE="page",t.ROOT="app",t.PAGE_FRAGMENT="page-fragment",t))(xs||{});const M="displayConds",ks=(()=>{const t=new Map;return(r,e,n=globalThis.document)=>{let a=t.get(n);if(a||(a=new Map,t.set(n,a)),a.get(r))return a.get(r);const s=new Promise((i,o)=>{const c=n.createElement("script");c.type="text/javascript",e&&(c.crossOrigin=e),c.src=r,n.body.appendChild(c),c.onload=()=>{i()},c.onerror=()=>{o(new Error("加载失败"))},setTimeout(()=>{o(new Error("timeout"))},60*1e3)}).catch(i=>{throw a.delete(r),i});return a.set(r,s),a.get(r)}})(),Hs=(()=>{const t=new Map;return(r,e=globalThis.document)=>{let n=t.get(e);if(n||(n=new Map,t.set(e,n)),n.get(r))return n.get(r);const a=new Promise((s,i)=>{const o=e.createElement("link");o.rel="stylesheet",o.href=r,e.head.appendChild(o),o.onload=()=>{s()},o.onerror=()=>{i(new Error("加载失败"))},setTimeout(()=>{i(new Error("timeout"))},60*1e3)}).catch(s=>{throw n.delete(r),s});return n.set(r,a),n.get(r)}})(),Ks=(t="")=>t.replace(/\B([A-Z])/g,"-$1").toLowerCase(),k=t=>Object.prototype.toString.call(t)==="[object Object]",Tt=t=>"".concat(t).replaceAll(/\[(\d+)\]/g,".$1").split("."),C=(t="",r={})=>(Array.isArray(t)?t:Tt(t)).reduce((n,a)=>{if(k(n)||Array.isArray(n)&&/^\d*$/.test("".concat(a)))return n[a];throw new Error("".concat(r,"中不存在").concat(t))},r),yt=(t,r,e={})=>ve(e,t,r),Ms=(t={},r)=>Array.from(Object.values(t).reduce((e,n)=>{var a;return(((a=n[r])==null?void 0:a.keys)||[]).forEach(s=>e.add(s)),e},new Set)),je="__tmagic__",Ws="__tmagic__dslNode",Ae=(t,r,e={},n)=>{let a=[];if(!n)a=Ms(e,r.id);else{const s=e[n];a=(s==null?void 0:s[r.id].keys)||[]}return a.forEach(s=>{const i=Tt(s),o=i.map((u,h)=>h<i.length-1?u:"".concat(je).concat(u));let c=C(o,r);if(typeof c>"u")try{const u=C(s,r);yt(o.join("."),u,r),c=u}catch(u){console.warn(u);return}let f;try{f=t(c)}catch(u){console.error(u),f=""}yt(s,f,r)}),r},Fs=(t,r,e,n=[])=>{var a,s;switch(typeof r=="string"&&typeof e>"u"&&(e=""),t){case"is":return r===e;case"not":return r!==e;case"=":return r===e;case"!=":return r!==e;case">":return r>e;case">=":return r>=e;case"<":return r<e;case"<=":return r<=e;case"between":return n.length>1&&r>=n[0]&&r<=n[1];case"not_between":return n.length<2||r<n[0]||r>n[1];case"include":return(a=r==null?void 0:r.includes)==null?void 0:a.call(r,e);case"not_include":return typeof r>"u"||!((s=r.includes)!=null&&s.call(r,e))}return!1},Se=t=>{const r={},e={string:void 0,object:{},array:[],boolean:void 0,number:void 0,null:null,any:void 0};return t.forEach(n=>{if(typeof n.defaultValue<"u"){if(n.type==="array"&&!Array.isArray(n.defaultValue)){r[n.name]=e.array;return}if(n.type==="object"&&!k(n.defaultValue)){if(typeof n.defaultValue=="string"){try{r[n.name]=JSON.parse(n.defaultValue)}catch(a){r[n.name]=e.object}return}r[n.name]=e.object;return}r[n.name]=Ce(n.defaultValue);return}if(n.type==="object"){r[n.name]=n.fields?Se(n.fields):e.object;return}if(n.type){r[n.name]=e[n.type];return}r[n.name]=void 0}),r},tt="ds-field::",we=/\$\{([\s\S]+?)\}/g,$e=(t,r,e=[])=>{r(t,e),Array.isArray(t.items)&&t.items.length&&(e.push(t),t.items.forEach(n=>{$e(n,r,[...e])}))};var D=(t=>(t.DEFAULT="default",t.CODE_BLOCK="code-block",t.DATA_SOURCE="data-source",t.DATA_SOURCE_METHOD="data-source-method",t.DATA_SOURCE_COND="data-source-cond",t))(D||{});class Jt{constructor(r){p(this,"isTarget");p(this,"id");p(this,"name");p(this,"type",D.DEFAULT);p(this,"deps",{});p(this,"isCollectByDefault");var e;this.isTarget=r.isTarget,this.id=r.id,this.name=r.name,this.isCollectByDefault=(e=r.isCollectByDefault)!=null?e:!0,r.type&&(this.type=r.type),r.initialDeps&&(this.deps=r.initialDeps)}updateDep({id:r,name:e,key:n,data:a}){const s=this.deps[r]||{name:e,keys:[]};s.name=e,s.data=a,this.deps[r]=s,s.keys.indexOf(n)===-1&&s.keys.push(n)}removeDep(r,e){if(typeof r>"u"){Object.keys(this.deps).forEach(a=>{delete this.deps[a]});return}const n=this.deps[r];if(n)if(e){const a=n.keys.indexOf(e);n.keys.splice(a,1),n.keys.length===0&&delete this.deps[r]}else delete this.deps[r]}hasDep(r,e){const n=this.deps[r];return!!(n!=null&&n.keys.find(a=>a===e))}destroy(){this.deps={}}}const _t=(t,r)=>{let e=r;return t.some((n,a)=>{const s=e.find(({name:i})=>i===n);return e=(s==null?void 0:s.fields)||[],s&&s.type==="array"&&/^(?!\d+$).*$/.test("".concat(t[a+1]))&&a<t.length-1})},Ls=(t,r,e=!1)=>{const n=t.match(we)||[];if(n.length<=0)return!1;const a=[],s=[];return n.forEach(i=>{const o=i.substring(2,i.length-1),c=Tt(o),f=c.shift();!f||f!==r.id||(_t(c,r.fields)?a.push(i):s.push(i))}),e?a.length>0:s.length>0},Ns=(t,r)=>(t==null?void 0:t.isBindDataSourceField)&&t.dataSourceId&&t.dataSourceId===r&&typeof t.template=="string",Rs=(t,r)=>{if(!Array.isArray(t)||typeof t[0]!="string")return!1;const[e]=t,n=e.indexOf(tt);return n===-1?!1:e.substring(n+tt.length)===r},Us=(t,r,e,n=!1)=>{if("".concat(r).startsWith(M))return!1;if(typeof e=="string")return Ls(e,t,n);if(k(e)&&(e!=null&&e.isBindDataSource)&&e.dataSourceId&&e.dataSourceId===t.id||Ns(e,t.id))return!0;if(Rs(e,t.id)){const[,...a]=e,s=_t(a,t.fields);return n?s:!s}return!1},Bs=(t,r,e,n=!1)=>{var i;if(!Array.isArray(e)||!t)return!1;const[a,...s]=e;if(a!==t.id||!"".concat(r).startsWith(M))return!1;if((i=t.fields)!=null&&i.find(o=>o.name===s[0])){const o=_t(s,t.fields);return n?o:!o}return!1},Xt=(t,r,e)=>{Object.values(t).forEach(n=>{Object.values(n).forEach(a=>{e&&a.type!==e||r(a)})})};class Gs{constructor(r){p(this,"targetsList",{});p(this,"childrenProp","items");p(this,"idProp","id");p(this,"nameProp","name");r!=null&&r.initialTargets&&(this.targetsList=r.initialTargets),r!=null&&r.childrenProp&&(this.childrenProp=r.childrenProp)}getTargetsList(){return this.targetsList}getTargets(r=D.DEFAULT){return this.targetsList[r]||{}}addTarget(r){const e=this.getTargets(r.type)||{};this.targetsList[r.type]=e,e[r.id]=r}getTarget(r,e=D.DEFAULT){return this.getTargets(e)[r]}hasTarget(r,e=D.DEFAULT){return!!this.getTarget(r,e)}hasSpecifiedTypeTarget(r=D.DEFAULT){return Object.keys(this.getTargets(r)).length>0}removeTarget(r,e=D.DEFAULT){const n=this.getTargets(e);n[r]&&(n[r].destroy(),delete n[r])}removeTargets(r=D.DEFAULT){const e=this.targetsList[r];if(e){for(const n of Object.values(e))n.destroy();delete this.targetsList[r]}}clearTargets(){Object.keys(this.targetsList).forEach(r=>{delete this.targetsList[r]})}collect(r,e={},n=!1,a){this.collectByCallback(r,a,({node:s,target:i})=>{this.removeTargetDep(i,s),this.collectItem(s,i,e,n)})}collectByCallback(r,e,n){Xt(this.targetsList,a=>{!e&&!a.isCollectByDefault||r.forEach(s=>{n({node:s,target:a})})},e)}clear(r,e){let{targetsList:n}=this;e&&(n={[e]:this.getTargets(e)});const a=[];Xt(n,s=>{r?r.forEach(i=>{s.removeDep(i[this.idProp]),Array.isArray(i[this.childrenProp])&&i[this.childrenProp].length&&!a.includes(i[this.idProp])&&(a.push(i[this.idProp]),this.clear(i[this.childrenProp]))}):s.removeDep()})}clearByType(r,e){this.clear(e,r)}collectItem(r,e,n={},a=!1){const s=(i,o="")=>{const c=(f,u)=>{const h=f===this.childrenProp,y=o?"".concat(o,".").concat(f):f;e.isTarget(y,u)?e.updateDep({id:r[this.idProp],name:"".concat(r[this.nameProp]||r[this.idProp]),data:n,key:y}):!h&&Array.isArray(u)?u.forEach((g,A)=>{k(g)&&s(g,"".concat(y,"[").concat(A,"]"))}):k(u)&&s(u,y),h&&a&&Array.isArray(u)&&u.forEach(g=>{this.collectItem(g,e,n,a)})};Object.entries(i).forEach(([f,u])=>{typeof u>"u"||u===""||c(f,u)})};s(r)}removeTargetDep(r,e,n){r.removeDep(e[this.idProp],n),typeof n>"u"&&Array.isArray(e[this.childrenProp])&&e[this.childrenProp].length&&e[this.childrenProp].forEach(a=>{this.removeTargetDep(r,a,n)})}}export{Ws as I,Hs as a,ks as b,xs as c,Ks as t};
//# sourceMappingURL=tmagic-dep-DGKTcpmx.js.map