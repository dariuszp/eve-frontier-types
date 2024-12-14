import{d as w,b as a,c as F,a as v,t as o,e as O,p as Q,i as V,s as m}from"./props-DnavDSlB.js";import{p as G,e as E,t as f,d as H,f as U,h as q,i as R,n as p,j as u,k as D,m as z}from"./runtime-CZzDqV25.js";import{s as X,d as Y,c as Z}from"./create-runtime-stories-BRPwWNHR.js";import{s as ee,B as te}from"./Button-Ctxv4Gp6.js";import{L as re}from"./Loading-CqAm3VIN.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";var se=F('<p class="closeError svelte-1ptcun3"> </p>'),ae=F('<div><!> <p class="message svelte-1ptcun3"><!> <!></p> <!></div>');function d(y,i){G(i,!0);let _=U(""),C=U(!1);async function S(){if(i.onClose){D(_,"");const e=i.onClose();if(e instanceof Promise){D(C,!0);try{await e}catch(s){D(_,Q((s==null?void 0:s.message)??"Unknown error"))}finally{D(C,!1)}}}}var k=ae(),A=q(k);{var T=e=>{var s=se(),t=q(s);f(()=>v(t,E(_))),a(e,s)};w(A,e=>{E(_)&&e(T)})}var b=u(A,2),P=q(b);{var j=e=>{var s=o("✅");a(e,s)},I=e=>{var s=O(),t=R(s);{var W=l=>{var x=o("❌");a(l,x)},B=l=>{var x=O(),K=R(x);{var L=$=>{var M=o("⚠️");a($,M)},N=$=>{var M=o("ℹ️");a($,M)};w(K,$=>{i.type==="warning"?$(L):$(N,!1)},!0)}a(l,x)};w(t,l=>{i.type==="error"?l(W):l(B,!1)},!0)}a(e,s)};w(P,e=>{i.type==="success"?e(j):e(I,!1)})}var c=u(P,2);X(c,()=>i.children??p);var n=u(b,2);{var r=e=>{var s=O(),t=R(s);{var W=l=>{re(l)},B=l=>{te(l,{onclick:S,children:(x,K)=>{var L=o("OK");a(x,L)},$$slots:{default:!0}})};w(t,l=>{E(C)?l(W):l(B,!1)})}a(e,s)};w(n,e=>{i.onClose&&e(r)})}f(()=>ee(k,`alert ${(i.type||"info")??""} svelte-1ptcun3`)),a(y,k),H()}d.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"success",text:'"success"'},{kind:"const",type:"string",value:"info",text:'"info"'},{kind:"const",type:"string",value:"error",text:'"error"'},{kind:"const",type:"string",value:"warning",text:'"warning"'}],text:'"success" | "info" | "error" | "warning"'},static:!1,readonly:!1},{name:"onClose",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => any"},static:!1,readonly:!1}],name:"Alert.svelte"};const{Story:g,meta:ne}=Y({title:"Feedback/Alert",component:d,tags:["autodocs"],render:y=>({Component:d,props:y,slots:{default:()=>y.children||"Default Text"}}),args:{children:"This is default alert"},argTypes:{children:{control:"text",description:"Button text"}}});var le=F("<!> <!> <!> <!> <!> <!> <!>",1);function J(y,i){G(i,!1),V();var _=le(),C=R(_);g(C,{name:"Default",args:{onClose:void 0},children:(n,r=p)=>{d(n,m(r,{children:(e,s)=>{var t=o();f(()=>v(t,r().children)),a(e,t)},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:"<Alert {...args}>{args.children}</Alert>"}}});var S=u(C,2),k=z(()=>({onClose:()=>new Promise(c=>{setTimeout(()=>{c(null)},3e3)})}));g(S,{name:"Closable",get args(){return E(k)},children:(n,r=p)=>{d(n,m(r,{children:(e,s)=>{var t=o();f(()=>v(t,r().children)),a(e,t)},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:"<Alert {...args}>{args.children}</Alert>"}}});var A=u(S,2),T=z(()=>({onClose:()=>new Promise((c,n)=>{setTimeout(()=>{n(null)},3e3)})}));g(A,{name:"Reject closing",get args(){return E(T)},children:(n,r=p)=>{d(n,m(r,{children:(e,s)=>{var t=o();f(()=>v(t,r().children)),a(e,t)},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:"<Alert {...args}>{args.children}</Alert>"}}});var b=u(A,2);g(b,{name:"Info",args:{type:"info"},children:(n,r=p)=>{d(n,m(r,{children:(e,s)=>{var t=o();f(()=>v(t,r().children)),a(e,t)},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:"<Alert {...args}>{args.children}</Alert>"}}});var P=u(b,2);g(P,{name:"Success",args:{type:"success"},children:(n,r=p)=>{d(n,m(r,{children:(e,s)=>{var t=o();f(()=>v(t,r().children)),a(e,t)},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:"<Alert {...args}>{args.children}</Alert>"}}});var j=u(P,2);g(j,{name:"Warning",args:{type:"warning"},children:(n,r=p)=>{d(n,m(r,{children:(e,s)=>{var t=o();f(()=>v(t,r().children)),a(e,t)},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:"<Alert {...args}>{args.children}</Alert>"}}});var I=u(j,2);g(I,{name:"Error",args:{type:"error"},children:(n,r=p)=>{d(n,m(r,{children:(e,s)=>{var t=o();f(()=>v(t,r().children)),a(e,t)},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:"<Alert {...args}>{args.children}</Alert>"}}}),a(y,_),H()}J.__docgen={version:3,name:"Alert.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const h=Z(J,ne),pe=["Default","Closable","RejectClosing","Info","Success","Warning","Error"],_e=h.Default,me=h.Closable,ge=h.RejectClosing,he=h.Info,ye=h.Success,Ce=h.Warning,xe=h.Error;export{me as Closable,_e as Default,xe as Error,he as Info,ge as RejectClosing,ye as Success,Ce as Warning,pe as __namedExportsOrder,ne as default};
