import{S as e,B as r,C as t,D as n,E as a,G as o,H as i,I as c,J as s,K as u,L as l,N as d,O as p,P as f,Q as v,R as g,T as h,V as m,W as y,X as b,Y as j,Z as E,_ as P,$ as _,a0 as w,a1 as C,a2 as D,a3 as O,a4 as G,a5 as k,a6 as T,a7 as I,a8 as R,a9 as A,aa as S,ab as x,ac as J,d as L,ad as N,r as B,e as M,ae as U,M as $,af as V,y as z,z as K,k as Y,l as q,m as F,p as H,ag as Q,ah as W,v as X,A as Z,t as ee,ai as re,aj as te,F as ne,s as ae,o as oe,ak as ie,al as ce,am as se,an as ue}from"./index.96b29a26.js";import{P as le,a as de}from"./project.ec6ffcb1.js";import{a as pe,r as fe}from"./dom.7aaa4b60.js";import{L as ve}from"./images.25f288b3.js";import{_ as ge}from"./publish-screen.b24d7ccb.js";function he(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a}var me=e?e.prototype:void 0,ye=me?me.toString:void 0;function be(e){if("string"==typeof e)return e;if(r(e))return he(e,be)+"";if(t(e))return ye?ye.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}function je(e){return e}function Ee(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}var Pe=Date.now;var _e,we,Ce,De=(_e=n?function(e,r){return n(e,"toString",{configurable:!0,enumerable:!1,value:(t=r,function(){return t}),writable:!0});var t}:je,we=0,Ce=0,function(){var e=Pe(),r=16-(e-Ce);if(Ce=e,r>0){if(++we>=800)return arguments[0]}else we=0;return _e.apply(void 0,arguments)}),Oe=Math.max;function Ge(e,r,t){if(!a(t))return!1;var n=typeof r;return!!("number"==n?o(t)&&i(r,t.length):"string"==n&&r in t)&&c(t[r],e)}var ke=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Te=/^\w*$/;function Ie(e,n){if(r(e))return!1;var a=typeof e;return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=e&&!t(e))||(Te.test(e)||!ke.test(e)||null!=n&&e in Object(n))}function Re(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],o=t.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return t.cache=o.set(a,i)||o,i};return t.cache=new(Re.Cache||s),t}Re.Cache=s;var Ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Se=/\\(\\)?/g,xe=function(e){var r=Re(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ae,(function(e,t,n,a){r.push(n?a.replace(Se,"$1"):t||e)})),r}));function Je(e,t){return r(e)?e:Ie(e,t)?[e]:xe(function(e){return null==e?"":be(e)}(e))}function Le(e){if("string"==typeof e||t(e))return e;var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r}function Ne(e,r){for(var t=0,n=(r=Je(r,e)).length;null!=e&&t<n;)e=e[Le(r[t++])];return t&&t==n?e:void 0}var Be=e?e.isConcatSpreadable:void 0;function Me(e){return r(e)||u(e)||!!(Be&&e&&e[Be])}function Ue(e,r,t,n,a){var o=-1,i=e.length;for(t||(t=Me),a||(a=[]);++o<i;){var c=e[o];r>0&&t(c)?r>1?Ue(c,r-1,t,n,a):l(a,c):n||(a[a.length]=c)}return a}function $e(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new s;++r<t;)this.add(e[r])}function Ve(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1}$e.prototype.add=$e.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},$e.prototype.has=function(e){return this.__data__.has(e)};function ze(e,r,t,n,a,o){var i=1&t,c=e.length,s=r.length;if(c!=s&&!(i&&s>c))return!1;var u=o.get(e),l=o.get(r);if(u&&l)return u==r&&l==e;var d=-1,p=!0,f=2&t?new $e:void 0;for(o.set(e,r),o.set(r,e);++d<c;){var v=e[d],g=r[d];if(n)var h=i?n(g,v,d,r,e,o):n(v,g,d,e,r,o);if(void 0!==h){if(h)continue;p=!1;break}if(f){if(!Ve(r,(function(e,r){if(i=r,!f.has(i)&&(v===e||a(v,e,t,n,o)))return f.push(r);var i}))){p=!1;break}}else if(v!==g&&!a(v,g,t,n,o)){p=!1;break}}return o.delete(e),o.delete(r),p}function Ke(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t}function Ye(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t}var qe=e?e.prototype:void 0,Fe=qe?qe.valueOf:void 0;var He=Object.prototype.hasOwnProperty;var Qe="[object Object]",We=Object.prototype.hasOwnProperty;function Xe(e,t,n,a,o,i){var s=r(e),u=r(t),l=s?"[object Array]":f(e),m=u?"[object Array]":f(t),y=(l="[object Arguments]"==l?Qe:l)==Qe,b=(m="[object Arguments]"==m?Qe:m)==Qe,j=l==m;if(j&&v(e)){if(!v(t))return!1;s=!0,y=!1}if(j&&!y)return i||(i=new g),s||h(e)?ze(e,t,n,a,o,i):function(e,r,t,n,a,o,i){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!o(new d(e),new d(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return c(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Ke;case"[object Set]":var u=1&n;if(s||(s=Ye),e.size!=r.size&&!u)return!1;var l=i.get(e);if(l)return l==r;n|=2,i.set(e,r);var p=ze(s(e),s(r),n,a,o,i);return i.delete(e),p;case"[object Symbol]":if(Fe)return Fe.call(e)==Fe.call(r)}return!1}(e,t,l,n,a,o,i);if(!(1&n)){var E=y&&We.call(e,"__wrapped__"),P=b&&We.call(t,"__wrapped__");if(E||P){var _=E?e.value():e,w=P?t.value():t;return i||(i=new g),o(_,w,n,a,i)}}return!!j&&(i||(i=new g),function(e,r,t,n,a,o){var i=1&t,c=p(e),s=c.length;if(s!=p(r).length&&!i)return!1;for(var u=s;u--;){var l=c[u];if(!(i?l in r:He.call(r,l)))return!1}var d=o.get(e),f=o.get(r);if(d&&f)return d==r&&f==e;var v=!0;o.set(e,r),o.set(r,e);for(var g=i;++u<s;){var h=e[l=c[u]],m=r[l];if(n)var y=i?n(m,h,l,r,e,o):n(h,m,l,e,r,o);if(!(void 0===y?h===m||a(h,m,t,n,o):y)){v=!1;break}g||(g="constructor"==l)}if(v&&!g){var b=e.constructor,j=r.constructor;b==j||!("constructor"in e)||!("constructor"in r)||"function"==typeof b&&b instanceof b&&"function"==typeof j&&j instanceof j||(v=!1)}return o.delete(e),o.delete(r),v}(e,t,n,a,o,i))}function Ze(e,r,t,n,a){return e===r||(null==e||null==r||!m(e)&&!m(r)?e!=e&&r!=r:Xe(e,r,t,n,Ze,a))}function er(e){return e==e&&!a(e)}function rr(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}}function tr(e){var r=function(e){for(var r=y(e),t=r.length;t--;){var n=r[t],a=e[n];r[t]=[n,a,er(a)]}return r}(e);return 1==r.length&&r[0][2]?rr(r[0][0],r[0][1]):function(t){return t===e||function(e,r,t,n){var a=t.length,o=a,i=!n;if(null==e)return!o;for(e=Object(e);a--;){var c=t[a];if(i&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){var s=(c=t[a])[0],u=e[s],l=c[1];if(i&&c[2]){if(void 0===u&&!(s in e))return!1}else{var d=new g;if(n)var p=n(u,l,s,e,r,d);if(!(void 0===p?Ze(l,u,3,n,d):p))return!1}}return!0}(t,e,r)}}function nr(e,r){return null!=e&&r in Object(e)}function ar(e,t){return null!=e&&function(e,t,n){for(var a=-1,o=(t=Je(t,e)).length,c=!1;++a<o;){var s=Le(t[a]);if(!(c=null!=e&&n(e,s)))break;e=e[s]}return c||++a!=o?c:!!(o=null==e?0:e.length)&&b(o)&&i(s,o)&&(r(e)||u(e))}(e,t,nr)}function or(e,r){return Ie(e)&&er(r)?rr(Le(e),r):function(t){var n=function(e,r,t){var n=null==e?void 0:Ne(e,r);return void 0===n?t:n}(t,e);return void 0===n&&n===r?ar(t,e):Ze(r,n,3)}}function ir(e){return Ie(e)?(r=Le(e),function(e){return null==e?void 0:e[r]}):function(e){return function(r){return Ne(r,e)}}(e);var r}function cr(e){return"function"==typeof e?e:null==e?je:"object"==typeof e?r(e)?or(e[0],e[1]):tr(e):ir(e)}var sr,ur=function(e,r,t){for(var n=-1,a=Object(e),o=t(e),i=o.length;i--;){var c=o[sr?i:++n];if(!1===r(a[c],c,a))break}return e};var lr=function(e,r){return function(t,n){if(null==t)return t;if(!o(t))return e(t,n);for(var a=t.length,i=r?a:-1,c=Object(t);(r?i--:++i<a)&&!1!==n(c[i],i,c););return t}}((function(e,r){return e&&ur(e,r,y)}));function dr(e,r){if(e!==r){var n=void 0!==e,a=null===e,o=e==e,i=t(e),c=void 0!==r,s=null===r,u=r==r,l=t(r);if(!s&&!l&&!i&&e>r||i&&c&&u&&!s&&!l||a&&c&&u||!n&&u||!o)return 1;if(!a&&!i&&!l&&e<r||l&&n&&o&&!a&&!i||s&&n&&o||!c&&o||!u)return-1}return 0}function pr(e,t,n){t=t.length?he(t,(function(e){return r(e)?function(r){return Ne(r,1===e.length?e[0]:e)}:e})):[je];var a=-1;return t=he(t,j(cr)),function(e,r){var t=e.length;for(e.sort(r);t--;)e[t]=e[t].value;return e}(function(e,r){var t=-1,n=o(e)?Array(e.length):[];return lr(e,(function(e,a,o){n[++t]=r(e,a,o)})),n}(e,(function(e,r,n){return{criteria:he(t,(function(r){return r(e)})),index:++a,value:e}})),(function(e,r){return function(e,r,t){for(var n=-1,a=e.criteria,o=r.criteria,i=a.length,c=t.length;++n<i;){var s=dr(a[n],o[n]);if(s)return n>=c?s:s*("desc"==t[n]?-1:1)}return e.index-r.index}(e,r,n)}))}var fr=function(e,r){return De(function(e,r,t){return r=Oe(void 0===r?e.length-1:r,0),function(){for(var n=arguments,a=-1,o=Oe(n.length-r,0),i=Array(o);++a<o;)i[a]=n[r+a];a=-1;for(var c=Array(r+1);++a<r;)c[a]=n[a];return c[r]=t(i),Ee(e,this,c)}}(e,r,je),e+"")}((function(e,r){if(null==e)return[];var t=r.length;return t>1&&Ge(e,r[0],r[1])?r=[]:t>2&&Ge(r[0],r[1],r[2])&&(r=[r[0]]),pr(e,Ue(r,1),[])})),vr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,hr=(e,r,t,n)=>{for(var a,o=n>1?void 0:n?gr(r,t):r,i=e.length-1;i>=0;i--)(a=e[i])&&(o=(n?a(r,t,o):a(o))||o);return n&&o&&vr(r,t,o),o};J.rawError=!0;let mr=class extends w{constructor(){super(...arguments),this.allGroups=[]}get group(){const e=this.allGroups.flatMap((e=>e.children));return new le(-1,"全部应用",e)}get ungroup(){const e=this.allGroups.find((e=>e.type===de.ungroup));return e||new le(0,"未分组",[])}get groups(){return this.allGroups.filter((e=>e.type===de.group))}SET_PROJECTS(e){this.allGroups=e}DELETE_PROJECT(e){const r=this.allGroups.find((r=>r.id===e.gid));r&&(r.children=r.children.filter((r=>r.id!==e.pid)))}UPDATE_PROJECT_NAME(e){const r=this.allGroups.find((r=>r.id===e.id));r&&(r.name=e.newName)}MOVE_PROJECT(e){const{pid:r,fromId:t,toId:n}=e,a=this.allGroups.find((e=>e.id===t)),o=this.allGroups.find((e=>e.id===n));if(a&&o){const e=a.children.findIndex((e=>e.id===r)),t=a.children.splice(e,1)[0];t.groupId=n,o.children.push(t)}}COPY_PROJECT(e){const r=this.allGroups.find((r=>r.id===e.gid));if(r){const t=r.children.find((r=>r.id===e.pid)),n=C(t);n.id=Math.round(1e3*Math.random()),n.name+="_copy",r.children.push(n)}}CREATE_PROJECT_GROUP(e){const r=new le(e.id,e.name,[]);r.type=de.group,this.allGroups.unshift(r)}DELETE_PROJECT_GROUP(e){const r=this.allGroups.findIndex((r=>r.id===e)),t=this.allGroups.find((e=>e.type===de.ungroup));if(r>-1&&t){const[e]=this.allGroups.splice(r,1);e.children.forEach((e=>{e.groupId=t.id,t.children.push(e)}))}}async getProjects(){try{const e=await D();if(0!==e.data.code)throw Error(e.data.message);{const r=e.data.data||[],t=new le(0,"未分组",[]);r.forEach((e=>{e.children.forEach((r=>{e.type===de.ungroup?(r.groupId=0,t.children.push(r)):r.groupId=e.id}))})),this.SET_PROJECTS([t,...r.filter((e=>e.type===de.group))])}}catch(e){throw e}}async deleteProject(e){try{const r=await O(e.pid);if(0!==r.data.code)throw Error(r.data.message);this.DELETE_PROJECT(e)}catch(r){throw r}}async updateProjectName(e){try{const r=await G(e.id,e.newName);if(0!==r.data.code)throw Error(r.data.message)}catch(r){throw r}}async moveProject(e){try{const{pid:r,fromId:t,toId:n}=e,a=await k(r,t,n);if(0!==a.data.code)throw Error(a.data.message);this.MOVE_PROJECT(e)}catch(r){throw r}}async copyProject(e){try{const r=await T(e.pid);if(0!==r.data.code)throw Error(r.data.message);this.COPY_PROJECT(e)}catch(r){throw r}}async createProjectGroup(e){try{const{data:r}=await I({name:e});if(0!==r.code)throw Error(r.message);this.CREATE_PROJECT_GROUP({id:r.data,name:e})}catch(r){throw r}}async deleteProjectGroup(e){try{const r=await R(e);if(0!==r.data.code)throw Error(r.data.message);this.DELETE_PROJECT_GROUP(e)}catch(r){throw r}}async updateProjectGroupName(e){try{const r=await A(e.id,e.newName);if(0!==r.data.code)throw Error(r.data.message)}catch(r){throw r}}};hr([S],mr.prototype,"SET_PROJECTS",1),hr([S],mr.prototype,"DELETE_PROJECT",1),hr([S],mr.prototype,"UPDATE_PROJECT_NAME",1),hr([S],mr.prototype,"MOVE_PROJECT",1),hr([S],mr.prototype,"COPY_PROJECT",1),hr([S],mr.prototype,"CREATE_PROJECT_GROUP",1),hr([S],mr.prototype,"DELETE_PROJECT_GROUP",1),hr([x],mr.prototype,"getProjects",1),hr([x],mr.prototype,"deleteProject",1),hr([x],mr.prototype,"updateProjectName",1),hr([x],mr.prototype,"moveProject",1),hr([x],mr.prototype,"copyProject",1),hr([x],mr.prototype,"createProjectGroup",1),hr([x],mr.prototype,"deleteProjectGroup",1),hr([x],mr.prototype,"updateProjectGroupName",1),mr=hr([E({dynamic:!0,store:P,name:"project"})],mr);const yr=_(mr);var br=L({name:"MyScreen",props:{screen:{type:Object,required:!0}},setup(e){const{deleteProject:r,copyProject:t,updateProjectName:n}=yr,{id:a,name:o,groupId:i,share:c,config:s}=N(e.screen),u=B(o.value),l=B(o.value),d=M((()=>s.value.screenshot?{"background-image":`url(${s.value.screenshot})`}:{"background-image":`url(${ve})`,"background-size":"50%","background-position":"center center","background-repeat":"no-repeat",filter:"grayscale(1)",opacity:.07})),p=M((()=>{const e=!!c.value;return{published:e,text:e?"已发布":"未发布"}})),f=U("dragStart"),v=U("dragEnd"),g=U("publish"),h=new Image;h.src="//files.pengxiaotian.com/datav/drag-thumbnail.png";return{name:o,thumbnail:d,publishState:p,screenName:u,oldScreenName:l,onInputBlur:async()=>{if(u.value)try{await n({id:a.value,newName:u.value}),o.value=u.value}catch(e){$.error($.format(e))}else u.value=l.value},confirmCopyProject:()=>{t({pid:a.value,gid:i.value})},confirmDeleteProject:()=>{V.confirmAsync(`<b>${u.value}</b> 删除后无法恢复，确认删除？`,(()=>r({pid:a.value,gid:i.value})))},onDragStart:e=>{f();const r=e.dataTransfer;r&&(r.effectAllowed="move",r.setDragImage(h,30,30),r.setData("text",`${a.value},${i.value}`))},onDragEnd:()=>{v()},doPublish:()=>{g(a.value)}}}});const jr=Z();z("data-v-5af555cc");const Er={class:"my-screen"},Pr={class:"screen"},_r={class:"screen-info"},wr={class:"screen-edit"},Cr={class:"screen-button"},Dr=ee(" 编辑 "),Or={class:"main-button"},Gr=H("i",{class:"v-icon-move"},null,-1),kr=H("i",{class:"v-icon-copy"},null,-1),Tr=H("i",{class:"v-icon-delete"},null,-1),Ir=H("i",{class:"v-icon-preview"},null,-1),Rr=H("i",{class:"v-icon-release"},null,-1),Ar={class:"screen-main"},Sr={class:"main-name"},xr={class:"screen-name-input"},Jr=H("i",{class:"v-icon-edit"},null,-1),Lr={class:"publish-info"};K();const Nr=jr(((e,r,t,n,a,o)=>{const i=Y("el-button"),c=Y("router-link"),s=Y("g-tooltip-popover");return q(),F("div",Er,[H("div",Pr,[H("div",_r,[H("div",{class:"screen-img",style:e.thumbnail},null,4),H("div",wr,[H("div",Cr,[H(c,{to:{name:"ScreenEditor",params:{projectId:e.screen.id}},target:"_blank",class:"edit-wrap"},{default:jr((()=>[H(i,{type:"primary",size:"small",class:"edit"},{default:jr((()=>[Dr])),_:1})])),_:1},8,["to"]),H("div",Or,[H(s,{content:"移动"},{default:jr((()=>[H("span",{class:"button-span",draggable:"true",onDragstart:r[1]||(r[1]=(...r)=>e.onDragStart&&e.onDragStart(...r)),onDragend:r[2]||(r[2]=(...r)=>e.onDragEnd&&e.onDragEnd(...r))},[Gr],32)])),_:1}),H(s,{content:"复制"},{default:jr((()=>[H("span",{class:"button-span",onClick:r[3]||(r[3]=(...r)=>e.confirmCopyProject&&e.confirmCopyProject(...r))},[kr])])),_:1}),H(s,{content:"删除"},{default:jr((()=>[H("span",{class:"button-span",onClick:r[4]||(r[4]=(...r)=>e.confirmDeleteProject&&e.confirmDeleteProject(...r))},[Tr])])),_:1})])]),H(c,{to:{name:"Preview",params:{screenId:e.screen.id}},target:"_blank",class:"preview"},{default:jr((()=>[H(s,{content:"预览"},{default:jr((()=>[Ir])),_:1})])),_:1},8,["to"]),H("div",{class:"public",onClick:r[5]||(r[5]=(...r)=>e.doPublish&&e.doPublish(...r))},[H(s,{content:"发布"},{default:jr((()=>[Rr])),_:1})])])]),H("div",Ar,[H("div",Sr,[H(s,{placement:"top-start","show-after":1e3,content:e.screen.name},{default:jr((()=>[H("div",xr,[Jr,Q(H("input",{"onUpdate:modelValue":r[6]||(r[6]=r=>e.screenName=r),class:"input",onBlur:r[7]||(r[7]=(...r)=>e.onInputBlur&&e.onInputBlur(...r))},null,544),[[W,e.screenName,void 0,{trim:!0}]])])])),_:1},8,["content"]),H("div",Lr,[H("span",{class:["dot",{published:e.publishState.published}]},null,2),H("span",null,X(e.publishState.text),1)])])])])])}));br.render=Nr,br.__scopeId="data-v-5af555cc";var Br=L({name:"ProjectList",components:{MyScreen:br,PublishScreen:ge},props:{group:Object},setup(e){const r=B(""),t=B("name"),n=B({name:"按名称排序",createAt:"按创建时间排序",updateAt:"按修改时间排序"}),a=B(!1),o=B(0),i=re(e,"group"),c=M((()=>{let e=i.value?i.value.children:[];if(r.value){const t=r.value.toLowerCase();e=e.filter((e=>e.name.toLowerCase().includes(t)))}return fr(e,t.value)}));return te("publish",(e=>{a.value=!0,o.value=e})),{cdn:"//files.pengxiaotian.com",searchText:r,sort:t,sorts:n,visiblePublish:a,publishAppId:o,onSortChange:e=>{t.value=e},screens:c}}});const Mr=Z();z("data-v-01ba3c42");const Ur=H("div",{class:"new-projects-title"},"选择下面的方式进行创建",-1),$r={class:"new-projects"},Vr=H("span",{class:"project-type ellipsis"},"PC端创建",-1),zr={class:"project-header"},Kr={class:"project-title"},Yr={class:"header-manager"},qr={class:"search"},Fr=H("i",{class:"v-icon-search"},null,-1),Hr={class:"sort-type"},Qr=H("i",{class:"el-icon-caret-bottom arrow-icon"},null,-1),Wr={class:"main-screen"};K();const Xr=Mr(((e,r,t,n,a,o)=>{const i=Y("router-link"),c=Y("g-drop-list-item"),s=Y("g-drop-list"),u=Y("g-drop-list-popover"),l=Y("my-screen"),d=Y("publish-screen");return q(),F("div",null,[Ur,H("div",$r,[H(i,{to:{name:"CreateScreen"},target:"_blank",class:"new-project"},{default:Mr((()=>[H("img",{src:`${e.cdn}/datav/new-project.png`},null,8,["src"]),Vr])),_:1})]),H("div",zr,[H("div",Kr,[H("h2",null,X(e.group?e.group.name:""),1)]),H("div",Yr,[H("div",qr,[Q(H("input",{"onUpdate:modelValue":r[1]||(r[1]=r=>e.searchText=r),class:"search-input",placeholder:"搜索"},null,512),[[W,e.searchText,void 0,{trim:!0}]])]),Fr,H(u,null,{droplist:Mr((()=>[H(s,null,{default:Mr((()=>[(q(!0),F(ne,null,ae(e.sorts,((r,t)=>(q(),F(c,{key:t,onClick:r=>e.onSortChange(t)},{default:Mr((()=>[ee(X(r),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),default:Mr((()=>[H("div",Hr,[H("span",{class:"sort-text",title:e.sorts[e.sort]},X(e.sorts[e.sort]),9,["title"]),Qr])])),_:1})])]),H("div",Wr,[(q(!0),F(ne,null,ae(e.screens,(e=>(q(),F("div",{key:e.id},[H(l,{screen:e},null,8,["screen"])])))),128))]),H(d,{modelValue:e.visiblePublish,"onUpdate:modelValue":r[2]||(r[2]=r=>e.visiblePublish=r),"project-id":e.publishAppId},null,8,["modelValue","project-id"])])}));Br.render=Xr,Br.__scopeId="data-v-01ba3c42";var Zr=L({name:"MyProject",components:{ProjectList:Br},setup(){const{getProjects:e,moveProject:r,createProjectGroup:t,deleteProjectGroup:n,updateProjectGroupName:a}=yr,o=B(-1),i=B(!0),c=B(!1),s=B(!1),u=M((()=>yr.group)),l=M((()=>yr.ungroup)),d=M((()=>yr.groups)),p=M((()=>-1===o.value?u.value:0===o.value?l.value:d.value.find((e=>e.id===o.value)))),f=e=>{o.value=e};te("dragStart",(()=>{s.value=!0})),te("dragEnd",(()=>{s.value=!1}));return oe((()=>{e().finally((()=>{i.value=!1}))})),{loading:i,group:u,ungroup:l,groups:d,selectedGroup:p,selectedGroupId:o,adding:c,toggleProject:f,onAddInputBlur:e=>{if(!c.value)return;(e.target.value||"").trim()||(c.value=!1)},addGroup:async e=>{if(!c.value)return;const r=(e.target.value||"").trim();if(r)try{await t(r),c.value=!1}catch(n){$.error($.format(n))}else c.value=!1},onEditInputBlur:(e,r)=>{if(!r.editing)return;const t=(e.target.value||"").trim();t&&r.name!==t||(r.editing=!1)},editGroup:async(e,r)=>{if(!r.editing)return;const t=(e.target.value||"").trim();if(t&&r.name!==t)try{await a({id:r.id,newName:t}),r.name=t,r.editing=!1}catch(n){$.error($.format(n))}else r.editing=!1},confirmDeleteGroup:e=>{V.confirmAsync(`<b>${e.name}</b> 删除后无法恢复，该分组中的可视化应用将全部移动到未分组，确认删除？`,(()=>n(e.id)),{success:()=>{f(l.value.id)}})},draging:s,onDragEnter:e=>{pe(e.target,"drag-enter")},onDragLeave:e=>{fe(e.target,"drag-enter")},onDrop:(e,t)=>{e.preventDefault(),fe(e.target,"drag-enter");const n=e.dataTransfer.getData("text");if(n){const[e,a]=n.split(",").map((e=>parseInt(e)));a!==t.id&&r({pid:e,fromId:a,toId:t.id})}}}}});const et=Z();z("data-v-1ae9ea83");const rt={class:"my-project"},tt={class:"project-main"},nt={class:"project-manage"},at={class:"manage-title"},ot={class:"my-project project-group"},it=H("span",{style:{"margin-left":"2px"}},"我的分组",-1),ct={class:"project-num"},st={key:0,class:"new-group"},ut={class:"project-name project-ungrouped"},lt={class:"project-num"},dt={class:"project-name"},pt={class:"project-num"},ft={class:"group-btns"},vt={class:"project-screen-list"};K();const gt=et(((e,r,t,n,a,o)=>{const i=Y("project-list"),c=Y("g-loading"),s=ie("focus");return q(),F("div",rt,[H("div",tt,[H("div",nt,[H("div",at,[H("div",ot,[it,H("i",{class:"el-icon-plus btn-add-icon",onClick:r[1]||(r[1]=r=>e.adding=!0)})]),H("div",{class:["my-project project-all",{"project-checked-color":e.selectedGroupId===e.group.id}],onClick:r[2]||(r[2]=r=>e.toggleProject(e.group.id))},[H("span",null,X(e.group.name),1),H("span",ct,X(e.group.children.length),1)],2),e.adding?(q(),F("div",st,[Q(H("input",{class:"edit-input",onBlur:r[3]||(r[3]=(...r)=>e.onAddInputBlur&&e.onAddInputBlur(...r)),onKeyup:r[4]||(r[4]=ce(((...r)=>e.addGroup&&e.addGroup(...r)),["enter"]))},null,544),[[s]])])):se("",!0)]),H("div",{class:["manage-main",{draging:e.draging}]},[H("div",{class:["main-project",{"project-checked-color":e.selectedGroupId===e.ungroup.id}],onClick:r[5]||(r[5]=r=>e.toggleProject(e.ungroup.id)),onDragover:r[6]||(r[6]=ue((()=>{}),["prevent"])),onDragenter:r[7]||(r[7]=(...r)=>e.onDragEnter&&e.onDragEnter(...r)),onDragleave:r[8]||(r[8]=(...r)=>e.onDragLeave&&e.onDragLeave(...r)),onDrop:r[9]||(r[9]=r=>e.onDrop(r,e.ungroup))},[H("span",ut,X(e.ungroup.name),1),H("span",lt,X(e.ungroup.children.length),1)],34),(q(!0),F(ne,null,ae(e.groups,(t=>(q(),F("div",{key:t.id,class:["main-project group-project",{"project-checked-color":e.selectedGroupId===t.id}],onClick:r=>e.toggleProject(t.id),onDragover:r[10]||(r[10]=ue((()=>{}),["prevent"])),onDragenter:r[11]||(r[11]=(...r)=>e.onDragEnter&&e.onDragEnter(...r)),onDragleave:r[12]||(r[12]=(...r)=>e.onDragLeave&&e.onDragLeave(...r)),onDrop:r=>e.onDrop(r,t)},[t.editing?Q((q(),F("input",{key:0,"default-value":t.name,class:"edit-input",onBlur:r=>e.onEditInputBlur(r,t),onKeyup:ce((r=>e.editGroup(r,t)),["enter"])},null,40,["default-value","onBlur","onKeyup"])),[[s]]):(q(),F(ne,{key:1},[H("span",dt,X(t.name),1),H("span",pt,X(t.children.length),1),H("span",ft,[H("i",{class:"v-icon-edit",onClick:e=>t.editing=!0},null,8,["onClick"]),H("i",{class:"v-icon-delete",onClick:r=>e.confirmDeleteGroup(t)},null,8,["onClick"])])],64))],42,["onClick","onDrop"])))),128))],2)]),H("div",vt,[H(c,{spinning:e.loading},{default:et((()=>[H(i,{group:e.selectedGroup},null,8,["group"])])),_:1},8,["spinning"])])])])}));Zr.render=gt,Zr.__scopeId="data-v-1ae9ea83";export default Zr;
