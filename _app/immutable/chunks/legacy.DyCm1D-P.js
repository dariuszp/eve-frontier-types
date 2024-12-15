import{af as O,aJ as m,a6 as b,an as x,K as y,az as q,V as W,G as g,W as B,aK as F,J as c,H,q as N,w as k,x as w,z as i,o as T,aL as j,aM as z,y as G,aN as U,ad as J,aq as P,aO as K,i as Y,P as Q,aP as X}from"./utils.BlhD59TK.js";function ie(e,t){if(t){const r=document.body;e.autofocus=!0,O(()=>{document.activeElement===r&&e.focus()})}}let M=!1;function Z(){M||(M=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function I(e){var t=x,r=y;m(null),b(null);try{return e()}finally{m(t),b(r)}}function ce(e,t,r,n=r){e.addEventListener(t,()=>I(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Z()}const $=new Set,ee=new Set;function fe(e,t,r,n){function a(o){if(n.capture||te.call(t,o),!o.cancelBubble)return I(()=>r.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?O(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function le(e){for(var t=0;t<e.length;t++)$.add(e[t]);for(var r of ee)r(e)}function te(e){var A;var t=this,r=t.ownerDocument,n=e.type,a=((A=e.composedPath)==null?void 0:A.call(e))||[],o=a[0]||e.target,s=0,d=e.__root;if(d){var l=a.indexOf(d);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var S=a.indexOf(t);if(S===-1)return;l<=S&&(s=l)}if(o=a[s]||e.target,o!==t){q(e,"currentTarget",{configurable:!0,get(){return o||r}});var C=x,D=y;m(null),b(null);try{for(var _,L=[];o!==null;){var E=o.assignedSlot||o.parentNode||o.host||null;try{var p=o["__"+n];if(p!==void 0&&!o.disabled)if(W(p)){var[V,...R]=p;V.apply(o,[e,...R])}else p.call(o,e)}catch(v){_?L.push(v):_=v}if(e.cancelBubble||E===t||E===null)break;o=E}if(_){for(let v of L)queueMicrotask(()=>{throw v});throw _}}finally{e.__root=t,delete e.currentTarget,m(C),b(D)}}}let u;function de(){u=void 0}function _e(e){let t=null,r=c;var n;if(c){for(t=i,u===void 0&&(u=T(document.head));u!==null&&(u.nodeType!==8||u.data!==H);)u=N(u);u===null?k(!1):u=w(N(u))}c||(n=document.head.appendChild(g()));try{B(()=>e(n),F)}finally{r&&(k(!0),u=i,w(t))}}function re(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function f(e,t){var r=y;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function pe(e,t){var r=(t&j)!==0,n=(t&z)!==0,a,o=!e.startsWith("<!>");return()=>{if(c)return f(i,null),i;a===void 0&&(a=re(o?e:"<!>"+e),r||(a=T(a)));var s=n?document.importNode(a,!0):a.cloneNode(!0);if(r){var d=T(s),l=s.lastChild;f(d,l)}else f(s,s);return s}}function ve(e=""){if(!c){var t=g(e+"");return f(t,t),t}var r=i;return r.nodeType!==3&&(r.before(r=g()),w(r)),f(r,r),r}function he(){if(c)return f(i,null),i;var e=document.createDocumentFragment(),t=document.createComment(""),r=g();return e.append(t,r),f(t,r),e}function me(e,t){if(c){y.nodes_end=i,G();return}e!==null&&e.before(t)}function be(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ne=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ge(e){return ne.includes(e)}const ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function ye(e){return e=e.toLowerCase(),ae[e]??e}const oe=["touchstart","touchmove"];function Ee(e){return oe.includes(e)}let h=!1;function we(e,t,r){const n=r[t]??(r[t]={store:null,source:J(void 0),unsubscribe:P});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=P;else{var a=!0;n.unsubscribe=K(e,o=>{a?n.source.v=o:Q(n.source,o)}),a=!1}return Y(n.source)}function Te(){const e={};return U(()=>{for(var t in e)e[t].unsubscribe()}),e}function Se(e){var t=h;try{return h=!1,[e(),h]}finally{h=t}}const ue="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);X();export{me as a,we as b,$ as c,de as d,f as e,Se as f,Z as g,te as h,Ee as i,be as j,fe as k,le as l,ie as m,ye as n,ge as o,he as p,ve as q,ee as r,Te as s,pe as t,_e as u,ce as v};
