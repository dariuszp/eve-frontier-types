import{aO as ht,aq as de,aE as pt,aA as gt}from"./utils.BlhD59TK.js";new URL("sveltekit-internal://");function mt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function yt(e){return e.split("%25").map(decodeURI).join("%25")}function _t(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function he({href:e}){return e.split("#")[0]}const wt=["href","pathname","search","toString","toJSON"];function vt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of wt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const bt="/__data.json",kt=".html__data.json";function At(e){return e.endsWith(".html")?e.replace(/\.html$/,kt):e.replace(/\/$/,"")+bt}function Et(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function St(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Me=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(ve(e)),Me(e,n));const G=new Map;function Rt(e,n){const t=ve(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=St(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function It(e,n,t){if(G.size>0){const r=ve(e,t),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,t)}function ve(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Et(...a)}"]`}return r}const Tt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ut(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Pt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pe(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Tt.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return pe(c)}).join("")}).join("")}/?$`),params:n}}function Lt(e){return!/^\([^)]+\)$/.test(e)}function Pt(e){return e.slice(1).split("/").filter(Lt)}function xt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ct({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Ut(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return xt(f,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function He(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ce(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const O=[];function be(e,n=de){let t=null;const r=new Set;function a(s){if(pt(e,s)&&(e=s,t)){const c=!O.length;for(const l of r)l[1](),O.push(l,e);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){a(s(e))}function i(s,c=de){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||de),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}function dn(e){let n;return ht(e,t=>n=t)(),n}var qe;const U=((qe=globalThis.__sveltekit_1fy6ahk)==null?void 0:qe.base)??"";var Ge;const Nt=((Ge=globalThis.__sveltekit_1fy6ahk)==null?void 0:Ge.assets)??U,Ot="1734221327496",Ke="sveltekit:snapshot",We="sveltekit:scroll",Ye="sveltekit:states",jt="sveltekit:pageurl",D="sveltekit:history",H="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function ze(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ke(){return{x:pageXOffset,y:pageYOffset}}function j(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ne={...J,"":J.hover};function Je(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Xe(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Je(e)}}function ye(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||ae(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===Y&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function X(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),t===null&&(t=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Je(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ne[r??"off"],preload_data:Ne[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Oe(e){const n=be(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function $t(){const{set:e,subscribe:n}=be(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ot;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function ae(e,n){return e.origin!==Y||!e.pathname.startsWith(n)}function je(e){const n=Ft(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Dt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ft(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Dt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Vt=-1,Bt=-2,qt=-3,Gt=-4,Mt=-5,Ht=-6;function Kt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Vt)return;if(o===qt)return NaN;if(o===Gt)return 1/0;if(o===Mt)return-1/0;if(o===Ht)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=je(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=je(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Bt&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const Ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ze];const Wt=new Set([...Ze]);[...Wt];function Yt(e){return e.filter(n=>n!=null)}class oe{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(n,t){this.status=n,this.location=t}}class Ae extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const zt="x-sveltekit-invalidated",Jt="x-sveltekit-trailing-slash";function Z(e){return e instanceof oe||e instanceof Ae?e.status:500}function Xt(e){return e instanceof Ae?e.text:"Internal Error"}const Zt=new Set(["icon","shortcut icon","apple-touch-icon"]),C=He(We)??{},K=He(Ke)??{},P={url:Oe({}),page:Oe({}),navigating:be(null),updated:$t()};function Ee(e){C[e]=ke()}function Qt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}async function et(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function $e(){}let se,_e,Q,L,we,N;const ee=[],te=[];let R=null;const tt=[],en=[];let $=[],_={branch:[],error:null,url:null},Se=!1,ne=!1,De=!0,W=!1,q=!1,nt=!1,Re=!1,ie,S,T,I,B;const M=new Set;let ge;async function hn(e,n,t){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),N=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),se=Ct(e),L=document.documentElement,we=n,_e=e.nodes[0],Q=e.nodes[1],_e(),Q(),S=(i=history.state)==null?void 0:i[D],T=(s=history.state)==null?void 0:s[H],S||(S=T=Date.now(),history.replaceState({...history.state,[D]:S,[H]:T},""));const r=C[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await ln(we,t):sn(location.href,{replaceState:!0}),cn()}async function tn(){if(await(ge||(ge=Promise.resolve())),!ge)return;ge=null;const e=le(_.url,!0);R=null;const n=B={},t=e&&await Le(e);if(!(!t||n!==B)){if(t.type==="redirect")return Ie(new URL(t.location,_.url).href,{},1,n);t.props.page&&(I=t.props.page),_=t.state,rt(),ie.$set(t.props)}}function rt(){ee.length=0,Re=!1}function at(e){te.some(n=>n==null?void 0:n.snapshot)&&(K[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function ot(e){var n;(n=K[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=te[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Fe(){Ee(S),Ce(We,C),at(T),Ce(Ke,K)}async function Ie(e,n,t,r){return z({type:"goto",url:ze(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Re=!0)}})}async function nn(e){if(e.id!==(R==null?void 0:R.id)){const n={};M.add(n),R={id:e.id,token:n,promise:Le({...e,preload:n}).then(t=>(M.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function me(e){const n=se.find(t=>t.exec(it(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function st(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,ie=new N.root({target:n,props:{...e.props,stores:P,components:te},hydrate:t,sync:!1}),ot(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(i=>i(a)),ne=!0}function re({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(U&&(e.pathname===U||e.pathname===U+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=mt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Yt(t).map(u=>u.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:I.data}),c}async function Te({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:b}=new URL(p,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:vt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,p){let b;f instanceof Request?(b=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):b=f;const A=new URL(b,t);return s&&u(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),ne?It(b,A.href,p):Rt(b,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Ve(e,n,t,r,a,o){if(Re)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(ee.some(s=>s(new URL(i))))return!0;return!1}function Ue(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function rn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function Be({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function Le({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return M.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=rn(_.url,t);let g=!1;const f=l.map((m,v)=>{var x;const k=_.branch[v],E=!!(m!=null&&m[0])&&((k==null?void 0:k.loader)!==m[1]||Ve(g,y,h,u,(x=k.server)==null?void 0:x.uses,r));return E&&(g=!0),E});if(f.some(Boolean)){try{d=await ft(t,f)}catch(m){const v=await F(m,{url:t,params:r,route:{id:e}});return M.has(o)?Be({error:v,url:t,params:r,route:a}):ce({status:Z(m),error:v,url:t,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let b=!1;const A=l.map(async(m,v)=>{var fe;if(!m)return;const k=_.branch[v],E=p==null?void 0:p[v];if((!E||E.type==="skip")&&m[1]===(k==null?void 0:k.loader)&&!Ve(b,y,h,u,(fe=k.universal)==null?void 0:fe.uses,r))return k;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Te({loader:m[1],url:t,params:r,route:a,parent:async()=>{var xe;const Pe={};for(let ue=0;ue<v;ue+=1)Object.assign(Pe,(xe=await A[ue])==null?void 0:xe.data);return Pe},server_data_node:Ue(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?k==null?void 0:k.server:void 0)})});for(const m of A)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await A[m])}catch(v){if(v instanceof Qe)return{type:"redirect",location:v.location};if(M.has(o))return Be({error:await F(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let k=Z(v),E;if(p!=null&&p.includes(v))k=v.status??k,E=v.error;else if(v instanceof oe)E=v.body;else{if(await P.updated.check())return await et(),await V(t);E=await F(v,{params:r,url:t,route:{id:a.id}})}const x=await an(m,w,i);return x?re({url:t,params:r,branch:w.slice(0,x.idx).concat(x.node),status:k,error:E,route:a}):await lt(t,{id:a.id},E,k)}else w.push(void 0);return re({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function an(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:r}){const a={};let o=null;if(N.server_loads[0]===0)try{const l=await ft(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==Y||t.pathname!==location.pathname||Se)&&await V(t)}const s=await Te({loader:_e,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ue(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return re({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function le(e,n){if(!e||ae(e,U))return;let t;try{t=N.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=it(t);for(const a of se){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:_t(o),url:e}}}function it(e){return yt(e.slice(U.length)||"/")}function ct({url:e,type:n,intent:t,delta:r}){let a=!1;const o=dt(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return W||tt.forEach(s=>s(i)),a?null:o}async function z({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=$e,block:d=$e}){const h=le(n,!1),y=ct({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=S,g=T;l(),W=!0,ne&&P.navigating.set(y.navigation),B=c;let f=h&&await Le(h);if(!f){if(ae(n,U))return await V(n);f=await lt(n,{id:null},await F(new Ae(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,B!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ce({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Ie(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await P.updated.check()&&(await et(),await V(n));if(rt(),Ee(u),at(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,m={[D]:S+=w,[H]:T+=w,[Ye]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||Qt(S,T)}if(R=null,f.props.page.state=i,ne){_=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(en.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){$=$.filter(v=>!w.includes(v))};w.push(m),$.push(...w)}ie.$set(f.props),nt=!0}else st(f,we,!1);const{activeElement:p}=document;await gt();const b=t?t.scroll:a?ke():null;if(De){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==p&&document.activeElement!==document.body;!r&&!A&&fn(),De=!0,f.props.page&&(I=f.props.page),W=!1,e==="popstate"&&ot(T),y.fulfil(void 0),$.forEach(w=>w(y.navigation)),P.navigating.set(null)}async function lt(e,n,t,r){return e.origin===Y&&e.pathname===location.pathname&&!Se?await ce({status:r,error:t,url:e,route:n}):await V(e)}function on(){let e;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(me(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Xe(o,L);if(!s)return;const{url:c,external:l,download:d}=ye(s,U);if(l||d)return;const h=X(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=le(c,!1);u&&nn(u)}else i<=h.preload_code&&me(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=ye(o,U);if(s||c)continue;const l=X(o);l.reload||(l.preload_code===J.viewport&&t.observe(o),l.preload_code===J.eager&&me(i.pathname))}}$.push(a),a()}function F(e,n){if(e instanceof oe)return e.body;const t=Z(e),r=Xt(e);return N.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function sn(e,n={}){return e=ze(e),e.origin!==Y?Promise.reject(new Error("goto: invalid URL")):Ie(e,n,0)}function pn(e){if(typeof e=="function")ee.push(e);else{const{href:n}=new URL(e,location.href);ee.push(t=>t.href===n)}return tn()}function cn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Fe(),!W){const a=dt(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};tt.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Fe()}),(n=navigator.connection)!=null&&n.saveData||on(),L.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Xe(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=ye(r,U);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===he(location);if(o||c.reload&&(!y||!h)){ct({url:a,type:"link"})?W=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(q=!0,Ee(S),e(a),!c.replace_state)return;q=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ae(s,U))return;const c=t.target,l=X(c);if(l.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),z({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(B={},a===S)return;const o=C[a],i=t.state[Ye]??{},s=new URL(t.state[jt]??location.href),c=t.state[H],l=he(location)===he(_.url);if(c===T&&(nt||l)){e(s),C[S]=ke(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},ie.$set({page:I})),S=a;return}const h=a-S;await z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,T=c},block:()=>{history.go(-h)},nav_token:B})}else if(!q){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[D]:++S,[H]:T},"",location.href))});for(const t of document.querySelectorAll("link"))Zt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(null)});function e(t){_.url=t,P.page.set({...I,url:t}),P.page.notify()}}async function ln(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){Se=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=le(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=ut(p.uses)),Te({loader:N.nodes[g],url:c,params:a,route:o,parent:async()=>{const b={};for(let A=0;A<f;A+=1)Object.assign(b,(await h[A]).data);return b},server_data_node:Ue(p)})}),y=await Promise.all(h),u=se.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=re({url:c,params:a,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof Qe){await V(new URL(h.location,location.href));return}l=await ce({status:Z(h),error:await F(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),st(l,e,d)}async function ft(e,n){var a;const t=new URL(e);t.pathname=At(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Jt,"1"),t.searchParams.append(zt,n.map(o=>o?"1":"0").join(""));const r=await Me(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new oe(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return Kt(y,{...N.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=ut(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:b,error:A}=f,w=i.get(p);i.delete(p),A?w.reject(l(A)):w.fulfil(l(b))}}}})}function ut(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function fn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function dt(e,n,t,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{hn as a,U as b,dn as g,pn as i,P as s};
