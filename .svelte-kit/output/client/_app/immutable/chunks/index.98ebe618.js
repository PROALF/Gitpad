function k(){}const $t=t=>t;function xt(t,e){for(const n in e)t[n]=e[n];return t}function wt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function ct(t){return t()}function et(){return Object.create(null)}function N(t){t.forEach(ct)}function G(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function te(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function vt(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t){let e;return lt(t,n=>e=n)(),e}function ne(t,e,n){t.$$.on_destroy.push(lt(e,n))}function ie(t,e,n,i){if(t){const s=ot(t,e,n,i);return t[0](s)}}function ot(t,e,n,i){return t[1]&&i?xt(n.ctx.slice(),t[1](i(e))):n.ctx}function se(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function re(t,e,n,i,s,o){if(s){const r=ot(e,n,i,o);t.p(r,s)}}function ce(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function le(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function oe(t,e,n){return t.set(n),e}function ae(t){return t&&G(t.destroy)?t.destroy:k}const at=typeof window<"u";let Et=at?()=>window.performance.now():()=>Date.now(),V=at?t=>requestAnimationFrame(t):k;const S=new Set;function ut(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&V(ut)}function kt(t){let e;return S.size===0&&V(ut),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let W=!1;function Nt(){W=!0}function Tt(){W=!1}function At(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:At(1,s,_=>e[n[_]].claim_order,a))-1;i[c]=n[d]+1;const f=d+1;n[f]=c,s=Math.max(f,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const d=a<o.length?o[a]:null;t.insertBefore(r[c],d)}}function St(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=X("style");return Dt(ft(t),e),e.sheet}function Dt(t,e){return St(t.head||t,e),e.sheet}function Lt(t,e){if(W){for(Mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){W&&!n?Lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function fe(){return Y(" ")}function de(){return Y("")}function _e(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function he(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t,e){for(const n in e)Pt(t,n,e[n])}function pe(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Ot(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,s=!1){_t(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function mt(t,e,n,i){return ht(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ye(t,e,n){return mt(t,e,n,X)}function ge(t,e,n){return mt(t,e,n,dt)}function Rt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function be(t){return Rt(t," ")}function nt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function $e(t,e){const n=nt(t,"HTML_TAG_START",0),i=nt(t,"HTML_TAG_END",n);if(n===i)return new it(void 0,e);_t(t);const s=t.splice(n,i-n+1);L(s[0]),L(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new it(o,e)}function xe(t,e){e=""+e,t.data!==e&&(t.data=e)}function we(t,e){t.value=e??""}function ve(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ee(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ke(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class qt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=dt(n.nodeName):this.e=X(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}class it extends qt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}function Ne(t,e){return new t(e)}const B=new Map;let z=0;function Bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:Ct(e),rules:{}};return B.set(t,n),n}function st(t,e,n,i,s,o,r,l=0){const c=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*o(y);a+=y*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Bt(d)}_${l}`,_=ft(t),{stylesheet:u,rules:h}=B.get(_)||zt(_,t);h[f]||(h[f]=!0,u.insertRule(`@keyframes ${f} ${d}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,z+=1,f}function Ft(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Gt())}function Gt(){V(()=>{z||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),B.clear())})}let j;function x(t){j=t}function H(){if(!j)throw new Error("Function called outside component initialization");return j}function Te(t){H().$$.on_mount.push(t)}function Ae(t){H().$$.after_update.push(t)}function Me(t){H().$$.on_destroy.push(t)}function Se(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=pt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Ce(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const M=[],rt=[];let C=[];const Q=[],yt=Promise.resolve();let U=!1;function gt(){U||(U=!0,yt.then(Z))}function De(){return gt(),yt}function F(t){C.push(t)}function Le(t){Q.push(t)}const J=new Set;let A=0;function Z(){if(A!==0)return;const t=j;do{try{for(;A<M.length;){const e=M[A];A++,x(e),Wt(e.$$)}}catch(e){throw M.length=0,A=0,e}for(x(null),M.length=0,A=0;rt.length;)rt.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];J.has(n)||(J.add(n),n())}C.length=0}while(M.length);for(;Q.length;)Q.pop()();U=!1,J.clear(),x(t)}function Wt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function It(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let D;function Jt(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function K(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const q=new Set;let w;function Kt(){w={r:0,c:[],p:w}}function Qt(){w.r||N(w.c),w=w.p}function tt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function bt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),w.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ut={duration:0};function je(t,e,n,i){const s={direction:"both"};let o=e(t,n,s),r=i?0:1,l=null,c=null,a=null;function d(){a&&Ft(t,a)}function f(u,h){const p=u.b-r;return h*=Math.abs(p),{a:r,b:u.b,d:p,duration:h,start:u.start,end:u.start+h,group:u.group}}function _(u){const{delay:h=0,duration:p=300,easing:y=$t,tick:g=k,css:v}=o||Ut,T={start:Et()+h,b:u};u||(T.group=w,w.r+=1),l||c?c=T:(v&&(d(),a=st(t,r,u,p,h,y,v)),u&&g(0,1),l=f(T,p),F(()=>K(t,u,"start")),kt(E=>{if(c&&E>c.start&&(l=f(c,p),c=null,K(t,l.b,"start"),v&&(d(),a=st(t,r,l.b,l.duration,0,y,o.css))),l){if(E>=l.end)g(r=l.b,1-r),K(t,l.b,"end"),c||(l.b?d():--l.group.r||N(l.group.c)),l=null;else if(E>=l.start){const P=E-l.start;r=l.a+l.d*y(P/l.duration),g(r,1-r)}}return!!(l||c)}))}return{run(u){G(o)?Jt().then(()=>{o=o(s),_(u)}):_(u)},end(){d(),l=c=null}}}function He(t,e){const n=e.token={};function i(s,o,r,l){if(e.token!==n)return;e.resolved=l;let c=e.ctx;r!==void 0&&(c=c.slice(),c[r]=l);const a=s&&(e.current=s)(c);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,_)=>{_!==o&&f&&(Kt(),bt(f,1,1,()=>{e.blocks[_]===f&&(e.blocks[_]=null)}),Qt())}):e.block.d(1),a.c(),tt(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[o]=a),d&&Z()}if(wt(t)){const s=H();if(t.then(o=>{x(s),i(e.then,1,e.value,o),x(null)},o=>{if(x(s),i(e.catch,2,e.error,o),x(null),!e.hasCatch)throw o}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Pe(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Oe(t,e){bt(t,1,1,()=>{e.delete(t.key)})}function Re(t,e,n,i,s,o,r,l,c,a,d,f){let _=t.length,u=o.length,h=_;const p={};for(;h--;)p[t[h].key]=h;const y=[],g=new Map,v=new Map,T=[];for(h=u;h--;){const m=f(s,o,h),b=n(m);let $=r.get(b);$?i&&T.push(()=>$.p(m,e)):($=a(b,m),$.c()),g.set(b,y[h]=$),b in p&&v.set(b,Math.abs(h-p[b]))}const E=new Set,P=new Set;function I(m){tt(m,1),m.m(l,d),r.set(m.key,m),d=m.first,u--}for(;_&&u;){const m=y[u-1],b=t[_-1],$=m.key,O=b.key;m===b?(d=m.first,_--,u--):g.has(O)?!r.has($)||E.has($)?I(m):P.has(O)?_--:v.get($)>v.get(O)?(P.add($),I(m)):(E.add(O),_--):(c(b,r),_--)}for(;_--;){const m=t[_];g.has(m.key)||c(m,r)}for(;u;)I(y[u-1]);return N(T),y}function qe(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Be(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ze(t){t&&t.c()}function Fe(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||F(()=>{const r=t.$$.on_mount.map(ct).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),o.forEach(F)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(It(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(M.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ge(t,e,n,i,s,o,r,l=[-1]){const c=j;x(t);const a=t.$$={fragment:null,ctx:[],props:o,update:k,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:et(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,_,...u)=>{const h=u.length?u[0]:_;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&Yt(t,f)),_}):[],a.update(),d=!0,N(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Nt();const f=Ot(e.target);a.fragment&&a.fragment.l(f),f.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&tt(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),Tt(),Z()}x(c)}class We{$destroy(){Xt(this,1),this.$destroy=k}$on(e,n){if(!G(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Re as $,Ae as A,Te as B,ve as C,Kt as D,De as E,rt as F,Ne as G,xt as H,dt as I,ge as J,me as K,qe as L,le as M,$t as N,ie as O,re as P,ce as Q,se as R,We as S,Me as T,Se as U,_e as V,F as W,je as X,N as Y,ue as Z,he as _,fe as a,Oe as a0,Ce as a1,ae as a2,He as a3,Pe as a4,Be as a5,Le as a6,ee as a7,pe as a8,we as a9,Ee as aa,te as ab,it as ac,$e as ad,G as ae,Ot as b,ye as c,Rt as d,X as e,L as f,be as g,Pt as h,Ge as i,Ht as j,Lt as k,xe as l,ne as m,k as n,ze as o,ke as p,Fe as q,Vt as r,Zt as s,Y as t,tt as u,bt as v,Xt as w,oe as x,de as y,Qt as z};
