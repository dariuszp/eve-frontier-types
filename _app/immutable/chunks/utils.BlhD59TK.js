const Hn=!1;var Yn=Array.isArray,jn=Array.from,Bn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptors,Un=Object.prototype,Vn=Array.prototype,nn=Object.getPrototypeOf;const rn=()=>{};function Gn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,mt=4,B=8,ut=16,g=32,Q=64,nt=128,R=256,K=512,h=1024,x=2048,N=4096,C=8192,q=16384,en=32768,Tt=65536,Kn=1<<17,sn=1<<19,gt=1<<20,ht=Symbol("$state"),$n=Symbol("legacy props"),Zn=Symbol("");function At(t){return t===this.v}function ln(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function zn(t,n){return t!==n}function xt(t){return!ln(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function tr(){W=!0}function ot(t){return{f:0,v:t,reactions:null,equals:At,version:0}}function nr(t){return kt(ot(t))}function vn(t,n=!1){var e;const r=ot(t);return n||(r.equals=xt),W&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function rr(t,n=!1){return kt(vn(t,n))}function kt(t){return i!==null&&i.f&y&&(T===null?Dn([t]):T.push(t)),t}function pn(t,n){return i!==null&&ct()&&i.f&(y|ut)&&(T===null||!T.includes(t))&&cn(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v=n,t.version=Kt(),It(t,x),ct()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(t)?(m(u,x),tt(u)):A===null?On([t]):A.push(t))),n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&x||!e&&a===u||(m(a,n),f&(h|R)&&(f&y?It(a,N):tt(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const er=1,sr=2,lr=4,ar=8,ur=16,or=1,ir=2,fr=4,_r=8,cr=16,vr=1,pr=2,dn="[",En="[!",yn="]",St={},hr=Symbol();let I=!1;function dr(t){I=t}let w;function M(t){if(t===null)throw Rt(),St;return w=t}function Er(){return M(S(w))}function yr(t){if(I){if(S(w)!==null)throw Rt(),St;w=t}}function wr(t=1){if(I){for(var n=t,r=w;n--;)r=S(r);w=r}}function mr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===yn){if(t===0)return n;t-=1}else(r===dn||r===En)&&(t+=1)}var e=S(n);n.remove(),n=e}}var dt,Dt,Ot;function Tr(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;Dt=pt(n,"firstChild").get,Ot=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function S(t){return Ot.call(t)}function gr(t,n){if(!I)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function Ar(t,n){if(!I){var r=et(t);return r instanceof Comment&&r.data===""?S(r):r}return w}function xr(t,n=1,r=!1){let e=I?w:t;for(var s;n--;)s=e,e=S(e);if(!I)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function kr(t){t.textContent=""}function wn(t){var n=y|x;u===null?n|=R:u.f|=gt;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:At,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Ir(t){const n=wn(t);return n.equals=xt,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):F(e)}}}function mn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=u;J(mn(t));try{bt(t),n=$t(t)}finally{J(r)}return n}function Nt(t){var n=Ct(t),r=(D||t.f&R)&&t.deps!==null?N:h;m(t,r),t.equals(n)||(t.v=n,t.version=Kt())}function it(t){bt(t),j(t,0),m(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function qt(t){u===null&&i===null&&on(),i!==null&&i.f&R&&un(),_t&&an()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&Q)!==0,l=u,a={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=O;try{Et(!0),U(a),a.f|=en}catch(_){throw F(a),_}finally{Et(f)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&gt)===0;if(!p&&!s&&e&&(l!==null&&Tn(a,l),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(a)}return a}function Rr(t){const n=P(B,null,!1);return m(n,h),n.teardown=t,n}function Sr(t){qt();var n=u!==null&&(u.f&g)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Pt(t);return e}}function Dr(t){return qt(),ft(t)}function Or(t){const n=P(Q,t,!0);return()=>{F(n)}}function Pt(t){return P(mt,t,!1)}function br(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,pn(r.l.r2,!0),Wt(n))})}function Cr(){var t=o;ft(()=>{if(Fn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&m(r,N),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return P(B,t,!0)}function Nr(t){return gn(t)}function gn(t,n=0){return P(B|ut|n,t,!0)}function qr(t,n=!0){return P(B|g,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=i;yt(!0),z(null);try{n.call(null)}finally{yt(r),z(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&g||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:S(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),Lt(t),j(t,0),m(t,q);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Ft(t);var f=t.parent;f!==null&&f.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Pr(t,n){var r=[];Yt(t,r,!0),xn(r,()=>{F(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Yt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Tt)!==0||(e.f&g)!==0;Yt(e,n,l?r:!1),e=s}}}function Fr(t){jt(t,!0)}function jt(t,n){if(t.f&C){L(t)&&U(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Tt)!==0||(r.f&g)!==0;jt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const kn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,Z=!1,st=[],lt=[];function Bt(){$=!1;const t=st.slice();st=[],wt(t)}function Ut(){Z=!1;const t=lt.slice();lt=[],wt(t)}function Lr(t){$||($=!0,queueMicrotask(Bt)),st.push(t)}function Mr(t){Z||(Z=!0,kn(Ut)),lt.push(t)}function In(){$&&Bt(),Z&&Ut()}function Rn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Vt=0,Sn=1;let V=!1,G=Vt,H=!1,Y=null,O=!1,_t=!1;function Et(t){O=t}function yt(t){_t=t}let k=[],b=0;let i=null;function z(t){i=t}let u=null;function J(t){u=t}let T=null;function Dn(t){T=t}let v=null,E=0,A=null;function On(t){A=t}let Gt=0,D=!1,o=null;function Kt(){return++Gt}function ct(){return!W||o!==null&&o.l===null}function L(t){var a,f;var n=t.f;if(n&x)return!0;if(n&N){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&K){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=K}for(s=0;s<r.length;s++){var l=r[s];if(L(l)&&Nt(l),e&&u!==null&&!D&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||m(t,h)}return!1}function bn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function Cn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&nt)===0)}function X(t,n,r,e){if(V){if(r===null&&(V=!1),Cn(n))throw t;return}r!==null&&(V=!0);{bn(t,n);return}}function $t(t){var vt;var n=v,r=E,e=A,s=i,l=D,a=T,f=o,p=t.f;v=null,E=0,A=null,i=p&(g|Q)?null:t,D=!O&&(p&R)!==0,T=null,o=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!D)for(c=E;c<_.length;c++)((vt=_[c]).reactions??(vt.reactions=[])).push(t)}else _!==null&&E<_.length&&(j(t,E),_.length=E);return d}finally{v=n,E=r,A=e,i=s,D=l,T=a,o=f}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(m(n,N),n.f&(R|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function U(t){var n=t.f;if(!(n&q)){m(t,h);var r=u,e=o;u=t;try{n&ut?An(t):Mt(t),Lt(t),Ft(t);var s=$t(t);t.teardown=typeof s=="function"?s:null,t.version=Gt}catch(l){X(l,t,r,e||t.ctx)}finally{u=r}}}function Zt(){if(b>1e3){b=0;try{fn()}catch(t){if(Y!==null)X(t,Y,null);else throw t}}b++}function zt(t){var n=t.length;if(n!==0){Zt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Jt(s,l),qn(l)}}finally{O=r}}}function qn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|C)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Pn(){if(H=!1,b>1001)return;const t=k;k=[],zt(t),H||(b=0,Y=null)}function tt(t){G===Vt&&(H||(H=!0,queueMicrotask(Pn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Q|g)){if(!(r&h))return;n.f^=h}}k.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&g)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&C))if(s&B){if(l)r.f^=h;else try{L(r)&&U(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&mt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Jt(p,n)}function Qt(t){var n=G,r=k;try{Zt();const s=[];G=Sn,k=s,H=!1,zt(r);var e=t==null?void 0:t();return In(),(k.length>0||s.length>0)&&Qt(),b=0,Y=null,e}finally{G=n,k=r}}async function Hr(){await Promise.resolve(),Qt()}function Fn(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&q){var e=Ct(t);return it(t),e}if(i!==null){T!==null&&T.includes(t)&&_n();var s=i.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(t)&&(m(u,x),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&Nt(l)),t.v}function Wt(t){const n=i;try{return i=null,t()}finally{i=n}}const Ln=~(x|N|h);function m(t,n){t.f=t.f&Ln|n}function Yr(t){return Xt().get(t)}function jr(t,n){return Xt().set(t,n),n}function Xt(t){return o===null&&Rn(),o.c??(o.c=new Map(Mn(o)||void 0))}function Mn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Br(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(o.l={s:null,u:null,r1:[],r2:ot(!1)})}function Ur(t){const n=o;if(n!==null){const a=n.e;if(a!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),Pt(l.fn)}}finally{J(r),z(e)}}o=n.p,n.m=!0}return{}}function Vr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=nn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Gr(t,n,r){if(t==null)return n(void 0),rn;const e=Wt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{Pr as $,yn as A,Rt as B,Jn as C,kr as D,jn as E,Or as F,rt as G,dn as H,qr as I,I as J,u as K,Un as L,Vn as M,ot as N,Wn as O,pn as P,pt as Q,Xn as R,ht as S,nn as T,hr as U,Yn as V,gn as W,Tt as X,En as Y,mr as Z,Fr as _,Ur as a,Qn as a0,Kn as a1,fr as a2,xt as a3,g as a4,Q as a5,J as a6,or as a7,ir as a8,_r as a9,Hr as aA,nr as aB,ct as aC,zn as aD,ln as aE,Hn as aF,br as aG,Cr as aH,rr as aI,z as aJ,sn as aK,vr as aL,pr as aM,Rr as aN,Gr as aO,tr as aP,wr as aQ,$n as aa,Ir as ab,cr as ac,vn as ad,C as ae,Lr as af,er as ag,hn as ah,sr as ai,Yt as aj,xn as ak,F as al,lr as am,i as an,ar as ao,ur as ap,rn as aq,Mr as ar,Zn as as,tn as at,jr as au,Yr as av,Pt as aw,ft as ax,Qt as ay,Bn as az,Sr as b,gr as c,o as d,Wt as e,Ar as f,Gn as g,wt as h,Fn as i,Vr as j,wn as k,Rn as l,W as m,Tr as n,et as o,Br as p,S as q,yr as r,xr as s,Nr as t,Dr as u,St as v,dr as w,M as x,Er as y,w as z};
