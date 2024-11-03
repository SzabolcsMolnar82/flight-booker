(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}})();const Ze=!1;var Ne=Array.isArray,Ge=Array.from,Je=Object.defineProperty,W=Object.getOwnPropertyDescriptor,Qe=Object.prototype,Xe=Array.prototype,et=Object.getPrototypeOf;function tt(e){for(var t=0;t<e.length;t++)e[t]()}const C=2,Se=4,G=8,ve=16,R=32,ue=64,J=128,re=256,g=512,F=1024,Q=2048,Te=4096,X=8192,rt=16384,nt=1<<18,ut=1<<19,Y=Symbol("$state");function lt(e){return e===this.v}function it(){throw new Error("effect_update_depth_exceeded")}function ot(){throw new Error("state_descriptors_fixed")}function at(){throw new Error("state_prototype_fixed")}function ft(){throw new Error("state_unsafe_local_read")}function st(){throw new Error("state_unsafe_mutation")}function N(e){return{f:0,v:e,reactions:null,equals:lt,version:0}}function ae(e){return ct(N(e))}function ct(e){return p!==null&&p.f&C&&(S===null?St([e]):S.push(e)),e}function k(e,t){return p!==null&&le()&&p.f&(C|ve)&&(S===null||!S.includes(e))&&st(),vt(e,t)}function vt(e,t){return e.equals(t)||(e.v=t,e.version=Ve(),De(e,F),le()&&d!==null&&d.f&g&&!(d.f&R)&&(m!==null&&m.includes(e)?(T(d,F),oe(d)):P===null?Tt([e]):P.push(e))),t}function De(e,t){var r=e.reactions;if(r!==null)for(var u=le(),n=r.length,l=0;l<n;l++){var o=r[l],v=o.f;v&F||!u&&o===d||(T(o,t),v&(g|J)&&(v&C?De(o,Q):oe(o)))}}const _t=2,E=Symbol();function A(e,t=null,r){if(typeof e!="object"||e===null||Y in e)return e;const u=et(e);if(u!==Qe&&u!==Xe)return e;var n=new Map,l=Ne(e),o=N(0);l&&n.set("length",N(e.length));var v;return new Proxy(e,{defineProperty(c,i,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&ot();var f=n.get(i);return f===void 0?(f=N(a.value),n.set(i,f)):k(f,A(a.value,v)),!0},deleteProperty(c,i){var a=n.get(i);if(a===void 0)i in c&&n.set(i,N(E));else{if(l&&typeof i=="string"){var f=n.get("length"),s=Number(i);Number.isInteger(s)&&s<f.v&&k(f,s)}k(a,E),pe(o)}return!0},get(c,i,a){var h;if(i===Y)return e;var f=n.get(i),s=i in c;if(f===void 0&&(!s||(h=W(c,i))!=null&&h.writable)&&(f=N(A(s?c[i]:E,v)),n.set(i,f)),f!==void 0){var _=b(f);return _===E?void 0:_}return Reflect.get(c,i,a)},getOwnPropertyDescriptor(c,i){var a=Reflect.getOwnPropertyDescriptor(c,i);if(a&&"value"in a){var f=n.get(i);f&&(a.value=b(f))}else if(a===void 0){var s=n.get(i),_=s==null?void 0:s.v;if(s!==void 0&&_!==E)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return a},has(c,i){var _;if(i===Y)return!0;var a=n.get(i),f=a!==void 0&&a.v!==E||Reflect.has(c,i);if(a!==void 0||d!==null&&(!f||(_=W(c,i))!=null&&_.writable)){a===void 0&&(a=N(f?A(c[i],v):E),n.set(i,a));var s=b(a);if(s===E)return!1}return f},set(c,i,a,f){var D;var s=n.get(i),_=i in c;if(l&&i==="length")for(var h=a;h<s.v;h+=1){var w=n.get(h+"");w!==void 0?k(w,E):h in c&&(w=N(E),n.set(h+"",w))}s===void 0?(!_||(D=W(c,i))!=null&&D.writable)&&(s=N(void 0),k(s,A(a,v)),n.set(i,s)):(_=s.v!==E,k(s,A(a,v)));var y=Reflect.getOwnPropertyDescriptor(c,i);if(y!=null&&y.set&&y.set.call(f,a),!_){if(l&&typeof i=="string"){var M=n.get("length"),L=Number(i);Number.isInteger(L)&&L>=M.v&&k(M,L+1)}pe(o)}return!0},ownKeys(c){b(o);var i=Reflect.ownKeys(c).filter(s=>{var _=n.get(s);return _===void 0||_.v!==E});for(var[a,f]of n)f.v!==E&&!(a in c)&&i.push(a);return i},setPrototypeOf(){at()}})}function pe(e,t=1){k(e,e.v+t)}function ye(e){return e!==null&&typeof e=="object"&&Y in e?e[Y]:e}function dt(e,t){return Object.is(ye(e),ye(t))}var me,Le,Pe;function ht(){if(me===void 0){me=window;var e=Element.prototype,t=Node.prototype;Le=W(t,"firstChild").get,Pe=W(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function pt(e=""){return document.createTextNode(e)}function qe(e){return Le.call(e)}function Ie(e){return Pe.call(e)}function te(e,t){return qe(e)}function $(e,t=1,r=!1){let u=e;for(;t--;)u=Ie(u);return u}function Ae(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var u=t[r];u.f&C?_e(u):ee(u)}}}function Fe(e){var t,r=d;I(e.parent);try{Ae(e),t=Ue(e)}finally{I(r)}return t}function Ce(e){var t=Fe(e),r=(B||e.f&J)&&e.deps!==null?Q:g;T(e,r),e.equals(t)||(e.v=t,e.version=Ve())}function _e(e){Ae(e),Z(e,0),T(e,X),e.v=e.children=e.deps=e.ctx=e.reactions=null}function yt(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function U(e,t,r,u=!0){var n=(e&ue)!==0,l=d,o={ctx:O,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|F,first:null,fn:t,last:null,next:null,parent:n?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var v=V;try{we(!0),he(o),o.f|=rt}catch(a){throw ee(o),a}finally{we(v)}}else t!==null&&oe(o);var c=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&ut)===0;if(!c&&!n&&u&&(l!==null&&yt(o,l),p!==null&&p.f&C)){var i=p;(i.children??(i.children=[])).push(o)}return o}function mt(e){const t=U(G,null,!1);return T(t,g),t.teardown=e,t}function wt(e){const t=U(ue,e,!0);return()=>{ee(t)}}function de(e){return U(Se,e,!1)}function bt(e){return U(G,e,!0)}function gt(e){return Et(e)}function Et(e,t=0){return U(G|ve|t,e,!0)}function xt(e,t=!0){return U(G|R,e,!0,t)}function Re(e){var t=e.teardown;if(t!==null){const r=p;q(null);try{t.call(null)}finally{q(r)}}}function Me(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)_e(t[r])}}function $e(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var u=r.next;ee(r,t),r=u}}function Ot(e){for(var t=e.first;t!==null;){var r=t.next;t.f&R||ee(t),t=r}}function ee(e,t=!0){var r=!1;if((t||e.f&nt)&&e.nodes_start!==null){for(var u=e.nodes_start,n=e.nodes_end;u!==null;){var l=u===n?null:Ie(u);u.remove(),u=l}r=!0}$e(e,t&&!r),Me(e),Z(e,0),T(e,X);var o=e.transitions;if(o!==null)for(const c of o)c.stop();Re(e);var v=e.parent;v!==null&&v.first!==null&&je(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function je(e){var t=e.parent,r=e.prev,u=e.next;r!==null&&(r.next=u),u!==null&&(u.prev=r),t!==null&&(t.first===e&&(t.first=u),t.last===e&&(t.last=r))}let fe=!1,se=[];function kt(){fe=!1;const e=se.slice();se=[],tt(e)}function Nt(e){fe||(fe=!0,queueMicrotask(kt)),se.push(e)}let ne=!1,V=!1;function we(e){V=e}let ce=[],H=0;let p=null;function q(e){p=e}let d=null;function I(e){d=e}let S=null;function St(e){S=e}let m=null,x=0,P=null;function Tt(e){P=e}let Be=0,B=!1,O=null;function Ve(){return++Be}function le(){return O!==null&&O.l===null}function ie(e){var o,v;var t=e.f;if(t&F)return!0;if(t&Q){var r=e.deps,u=(t&J)!==0;if(r!==null){var n;if(t&re){for(n=0;n<r.length;n++)((o=r[n]).reactions??(o.reactions=[])).push(e);e.f^=re}for(n=0;n<r.length;n++){var l=r[n];if(ie(l)&&Ce(l),u&&d!==null&&!B&&!((v=l==null?void 0:l.reactions)!=null&&v.includes(e))&&(l.reactions??(l.reactions=[])).push(e),l.version>e.version)return!0}}u||T(e,g)}return!1}function Dt(e,t,r){throw e}function Ue(e){var s;var t=m,r=x,u=P,n=p,l=B,o=S,v=O,c=e.f;m=null,x=0,P=null,p=c&(R|ue)?null:e,B=!V&&(c&J)!==0,S=null,O=e.ctx;try{var i=(0,e.fn)(),a=e.deps;if(m!==null){var f;if(Z(e,x),a!==null&&x>0)for(a.length=x+m.length,f=0;f<m.length;f++)a[x+f]=m[f];else e.deps=a=m;if(!B)for(f=x;f<a.length;f++)((s=a[f]).reactions??(s.reactions=[])).push(e)}else a!==null&&x<a.length&&(Z(e,x),a.length=x);return i}finally{m=t,x=r,P=u,p=n,B=l,S=o,O=v}}function Lt(e,t){let r=t.reactions;if(r!==null){var u=r.indexOf(e);if(u!==-1){var n=r.length-1;n===0?r=t.reactions=null:(r[u]=r[n],r.pop())}}r===null&&t.f&C&&(m===null||!m.includes(t))&&(T(t,Q),t.f&(J|re)||(t.f^=re),Z(t,0))}function Z(e,t){var r=e.deps;if(r!==null)for(var u=t;u<r.length;u++)Lt(e,r[u])}function he(e){var t=e.f;if(!(t&X)){T(e,g);var r=d;d=e;try{t&ve?Ot(e):$e(e),Me(e),Re(e);var u=Ue(e);e.teardown=typeof u=="function"?u:null,e.version=Be}catch(n){Dt(n)}finally{d=r}}}function Pt(){H>1e3&&(H=0,it()),H++}function qt(e){var t=e.length;if(t!==0){Pt();var r=V;V=!0;try{for(var u=0;u<t;u++){var n=e[u];n.f&g||(n.f^=g);var l=[];Ke(n,l),It(l)}}finally{V=r}}}function It(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var u=e[r];!(u.f&(X|Te))&&ie(u)&&(he(u),u.deps===null&&u.first===null&&u.nodes_start===null&&(u.teardown===null?je(u):u.fn=null))}}function At(){if(ne=!1,H>1001)return;const e=ce;ce=[],qt(e),ne||(H=0)}function oe(e){ne||(ne=!0,queueMicrotask(At));for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(ue|R)){if(!(r&g))return;t.f^=g}}ce.push(t)}function Ke(e,t){var r=e.first,u=[];e:for(;r!==null;){var n=r.f,l=(n&R)!==0,o=l&&(n&g)!==0;if(!o&&!(n&Te))if(n&G){l?r.f^=g:ie(r)&&he(r);var v=r.first;if(v!==null){r=v;continue}}else n&Se&&u.push(r);var c=r.next;if(c===null){let f=r.parent;for(;f!==null;){if(e===f)break e;var i=f.next;if(i!==null){r=i;continue e}f=f.parent}}r=c}for(var a=0;a<u.length;a++)v=u[a],t.push(v),Ke(v,t)}function b(e){var v;var t=e.f,r=(t&C)!==0;if(r&&t&X){var u=Fe(e);return _e(e),u}if(p!==null){S!==null&&S.includes(e)&&ft();var n=p.deps;m===null&&n!==null&&n[x]===e?x++:m===null?m=[e]:m.push(e),P!==null&&d!==null&&d.f&g&&!(d.f&R)&&P.includes(e)&&(T(d,F),oe(d))}else if(r&&e.deps===null){var l=e,o=l.parent;o!==null&&!((v=o.deriveds)!=null&&v.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=e,ie(l)&&Ce(l)),e.v}const Ft=~(F|Q|g);function T(e,t){e.f=e.f&Ft|t}function We(e,t=!1,r){O={p:O,c:null,e:null,m:!1,s:e,x:null,l:null},t||(O.l={s:null,u:null,r1:[],r2:N(!1)})}function Ye(e){const t=O;if(t!==null){const o=t.e;if(o!==null){var r=d,u=p;t.e=null;try{for(var n=0;n<o.length;n++){var l=o[n];I(l.effect),q(l.reaction),de(l.fn)}}finally{I(r),q(u)}}O=t.p,t.m=!0}return{}}const Ct=new Set,be=new Set;function Rt(e,t,r,u){function n(l){if(u.capture||K.call(t,l),!l.cancelBubble){var o=p,v=d;q(null),I(null);try{return r.call(this,l)}finally{q(o),I(v)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Nt(()=>{t.addEventListener(e,n,u)}):t.addEventListener(e,n,u),n}function Mt(e,t,r,u,n){var l={capture:u,passive:n},o=Rt(e,t,r,l);(t===document.body||t===window||t===document)&&mt(()=>{t.removeEventListener(e,o,l)})}function K(e){var L;var t=this,r=t.ownerDocument,u=e.type,n=((L=e.composedPath)==null?void 0:L.call(e))||[],l=n[0]||e.target,o=0,v=e.__root;if(v){var c=n.indexOf(v);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var i=n.indexOf(t);if(i===-1)return;c<=i&&(o=c)}if(l=n[o]||e.target,l!==t){Je(e,"currentTarget",{configurable:!0,get(){return l||r}});var a=p,f=d;q(null),I(null);try{for(var s,_=[];l!==null;){var h=l.assignedSlot||l.parentNode||l.host||null;try{var w=l["__"+u];if(w!==void 0&&!l.disabled)if(Ne(w)){var[y,...M]=w;y.apply(l,[e,...M])}else w.call(l,e)}catch(D){s?_.push(D):s=D}if(e.cancelBubble||h===t||h===null)break;l=h}if(s){for(let D of _)queueMicrotask(()=>{throw D});throw s}}finally{e.__root=t,delete e.currentTarget,q(a),I(f)}}}function $t(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function jt(e,t){var r=d;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Bt(e,t){var r=(t&_t)!==0,u,n=!e.startsWith("<!>");return()=>{u===void 0&&(u=$t(n?e:"<!>"+e),u=qe(u));var l=r?document.importNode(u,!0):u.cloneNode(!0);return jt(l,l),l}}function Vt(e,t){e!==null&&e.before(t)}const Ut=["touchstart","touchmove"];function Kt(e){return Ut.includes(e)}function Wt(e,t){return Yt(e,t)}const j=new Map;function Yt(e,{target:t,anchor:r,props:u={},events:n,context:l,intro:o=!0}){ht();var v=new Set,c=f=>{for(var s=0;s<f.length;s++){var _=f[s];if(!v.has(_)){v.add(_);var h=Kt(_);t.addEventListener(_,K,{passive:h});var w=j.get(_);w===void 0?(document.addEventListener(_,K,{passive:h}),j.set(_,1)):j.set(_,w+1)}}};c(Ge(Ct)),be.add(c);var i=void 0,a=wt(()=>{var f=r??t.appendChild(pt());return xt(()=>{if(l){We({});var s=O;s.c=l}n&&(u.$$events=n),i=e(f,u)||{},l&&Ye()}),()=>{var h;for(var s of v){t.removeEventListener(s,K);var _=j.get(s);--_===0?(document.removeEventListener(s,K),j.delete(s)):j.set(s,_)}be.delete(c),ge.delete(i),f!==r&&((h=f.parentNode)==null||h.removeChild(f))}});return ge.set(i,a),i}let ge=new WeakMap,Ee=!1;function Ht(){Ee||(Ee=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function He(e,t,r,u=r){e.addEventListener(t,r);const n=e.__on_r;n?e.__on_r=()=>{n(),u()}:e.__on_r=u,Ht()}function xe(e,t,r=t){var u=le();He(e,"input",()=>{var n=Oe(e)?ke(e.value):e.value;r(n),u&&n!==(n=t())&&(e.value=n??"")}),bt(()=>{var n=t();Oe(e)&&n===ke(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function Oe(e){var t=e.type;return t==="number"||t==="range"}function ke(e){return e===""?null:+e}function ze(e,t,r){if(e.multiple)return Gt(e,t);for(var u of e.options){var n=z(u);if(dt(n,t)){u.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function zt(e,t){de(()=>{var r=new MutationObserver(()=>{var u=e.__value;ze(e,u)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function Zt(e,t,r=t){var u=!0;He(e,"change",()=>{var n;if(e.multiple)n=[].map.call(e.querySelectorAll(":checked"),z);else{var l=e.querySelector(":checked");n=l&&z(l)}r(n)}),de(()=>{var n=t();if(ze(e,n,u),u&&n===void 0){var l=e.querySelector(":checked");l!==null&&(n=z(l),r(n))}e.__value=n,u=!1}),zt(e)}function Gt(e,t){for(var r of e.options)r.selected=~t.indexOf(z(r))}function z(e){return"__value"in e?e.__value:e.value}const Jt="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Jt);var Qt=Bt('<form class="grid-gap"><select><option>Csak oda.</option><option>Visszaút is!</option></select> <br> <label><span class="sr-only">Indulás:</span> <input type="date" required></label> <br> <label><span class="sr-only">Érkezés:</span> <input type="date" required></label> <br> <button type="submit">Foglalás</button></form>');function Xt(e,t){We(t,!0);function r(){const y=new Date,[M,L,D]=y.toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/");return`${D}-${M}-${L}`}function u(y){y.preventDefault(),alert(`Lefoglaltad a kiválasztott ${b(n)} járatot. ${b(l)}`)}let n=ae("one-way"),l=ae(A(r)),o=ae(A(r));var v=Qt(),c=te(v),i=te(c);i.value=(i.__value="one-way")==null?"":"one-way";var a=$(i);a.value=(a.__value="return")==null?"":"return";var f=$(c,4),s=$(te(f),2),_=$(f,4),h=$(te(_),2),w=$(_,4);gt(()=>{h.disabled=b(n)!=="return",w.disabled=!b(l)||b(n)==="return"&&b(o)<b(l)}),Mt("submit",v,u),Zt(c,()=>b(n),y=>k(n,y)),xe(s,()=>b(l),y=>k(l,y)),xe(h,()=>b(o),y=>k(o,y)),Vt(e,v),Ye()}Wt(Xt,{target:document.getElementById("app")});
