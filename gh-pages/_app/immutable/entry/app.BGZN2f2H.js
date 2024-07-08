function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.C3_FyDIc.js","../chunks/entry.C5c4Zg_d.js","../chunks/scheduler.BzJw3VLE.js","../chunks/index.YnOh5ZlC.js","../chunks/store.WKiOlt_g.js","../chunks/modal-service.C8ytHcN8.js","../chunks/Toggle.B-JIGY0n.js","../assets/Toggle.D6Ao5Tay.css","../assets/modal-service.CCzfrRVJ.css","../chunks/AttributeInput.COkl9jP-.js","../assets/AttributeInput.D0BtYtGV.css","../assets/0.Bd4yjnR4.css","../nodes/1.Cwdo00PC.js","../nodes/2.CUE7uvnW.js","../assets/2.B_fK85Iu.css","../nodes/3.D-fOzjHP.js","../chunks/index.BD_uo1v_.js","../assets/3.CHtXHnhr.css","../nodes/4.By7msl-G.js","../assets/4.BtZVIDLn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as N,a as B,q as d,g as U,i as k,f as h,r as j,p as W,e as z,c as F,b as G,o as D,u as p,t as H,d as J,j as K,v as I,w as E,x as Q}from"../chunks/scheduler.BzJw3VLE.js";import{S as X,i as Y,t as g,c as A,a as w,g as S,b as y,d as O,m as R,e as P}from"../chunks/index.YnOh5ZlC.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},T={},L=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(o=>{if(o=M(o,i),o in T)return;T[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=u.length-1;b>=0;b--){const v=u[b];if(v.href===o&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Z,f||(_.as="script",_.crossOrigin=""),_.href=o,r&&_.setAttribute("nonce",r),document.head.appendChild(_),f)return new Promise((b,v)=>{_.addEventListener("load",b),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(u=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=u,window.dispatchEvent(t),!t.defaultPrevented)throw u})};function $(a){return/^(skill|class)$/.test(a)}const oe={istype:$};function x(a){let e,n,i;var s=a[1][0];function u(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,u(a)),a[12](e)),{c(){e&&y(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){S();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=E(s,u(t)),t[12](e),y(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[12](null),e&&P(e,t)}}}function ee(a){let e,n,i;var s=a[1][0];function u(t,r){return{props:{data:t[3],$$slots:{default:[te]},$$scope:{ctx:t}}}}return s&&(e=E(s,u(a)),a[11](e)),{c(){e&&y(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){S();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=E(s,u(t)),t[11](e),y(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[11](null),e&&P(e,t)}}}function te(a){let e,n,i;var s=a[1][1];function u(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,u(a)),a[10](e)),{c(){e&&y(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){S();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=E(s,u(t)),t[10](e),y(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[10](null),e&&P(e,t)}}}function V(a){let e,n=a[6]&&q(a);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=F(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=G(e);n&&n.l(s),s.forEach(h),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,s){k(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=q(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&h(e),n&&n.d()}}}function q(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&h(e)}}}function ne(a){let e,n,i,s,u;const t=[ee,x],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let f=a[5]&&V(a);return{c(){n.c(),i=B(),f&&f.c(),s=d()},l(l){n.l(l),i=U(l),f&&f.l(l),s=d()},m(l,m){r[e].m(l,m),k(l,i,m),f&&f.m(l,m),k(l,s,m),u=!0},p(l,[m]){let _=e;e=o(l),e===_?r[e].p(l,m):(S(),g(r[_],1,1,()=>{r[_]=null}),A(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=V(l),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(l){u||(w(n),u=!0)},o(l){g(n),u=!1},d(l){l&&(h(i),h(s)),r[e].d(l),f&&f.d(l)}}}function ie(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:u}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:f=null}=e;j(i.page.notify);let l=!1,m=!1,_=null;W(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,_=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function v(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,u=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,u,r,o,f,l,m,_,i,s,b,v,C]}class ae extends X{constructor(e){super(),Y(this,e,ie,ne,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const le=[()=>L(()=>import("../nodes/0.C3_FyDIc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),()=>L(()=>import("../nodes/1.Cwdo00PC.js"),__vite__mapDeps([12,2,3,1]),import.meta.url),()=>L(()=>import("../nodes/2.CUE7uvnW.js"),__vite__mapDeps([13,2,3,4,1,14]),import.meta.url),()=>L(()=>import("../nodes/3.D-fOzjHP.js"),__vite__mapDeps([15,4,1,2,16,3,6,7,5,8,17]),import.meta.url),()=>L(()=>import("../nodes/4.By7msl-G.js"),__vite__mapDeps([18,4,1,2,16,3,6,7,9,10,19]),import.meta.url)],fe=[],ce={"/":[2],"/(app)/[type=istype]/[id]":[3],"/(app)/[type=istype]/[id]/edit":[4]},ue={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{ce as dictionary,ue as hooks,oe as matchers,le as nodes,ae as root,fe as server_loads};
