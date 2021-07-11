import{d as e,e as a,P as l,g as t,aD as i,ah as s,L as n,M as o,aE as r,C as d,D as c,f as p,o as u,c as m,a as v,F as f,A as g,t as w,G as b,B as C}from"./index.c84dd937.js";import{L as k}from"./images.25f288b3.js";import{P as h}from"./project.ec6ffcb1.js";const y=window.requestAnimationFrame||(e=>setTimeout(e,16));function V(e,a={}){const{getContainer:l=(()=>window),callback:t,duration:i=450}=a,s=l(),n=function(e,a){if("undefined"==typeof window)return 0;const l=a?"scrollTop":"scrollLeft",t=e===window;let i=t?e[a?"pageYOffset":"pageXOffset"]:e[l];return t&&"number"!=typeof i&&(i=window.document.documentElement[l]),i}(s,!1),o=Date.now(),r=()=>{const a=Date.now()-o,l=function(e,a,l,t){const i=l-a;return(e/=t/2)<1?i/2*e*e*e+a:i/2*((e-=2)*e*e+2)+a}(a>i?i:a,n,e,i);s===window?window.scrollTo(l,window.pageYOffset):s.scrollLeft=l,a<i?y(r):"function"==typeof t&&t()};y(r)}var _=e({name:"CreateScreen",setup(){const e=a(!0),d=a(k),c=a([]),p=a(!1),u=a(!1),m=a(""),v=a({}),f=a(0),g=a([new h(0,"未分组")]),w=a(!1),b=l(),C=a(null);t((async()=>{const a=await i();0===a.data.code&&(e.value=!1,c.value=a.data.data),s().then((({data:e})=>{0===e.code&&g.value.push(...e.data.map((({id:e,name:a})=>({id:e,name:a}))))}))}));const y=(e,a)=>{v.value=e,V(149*a-350,{getContainer:()=>C.value})};return{loading:e,bgCoverImg:d,templates:c,visibleCreateDialog:p,visiblePreviewDialog:u,projectName:m,template:v,groupId:f,groups:g,saveLoading:w,scrollRef:C,confirmCreate:e=>{v.value=e,p.value=!0},previewTemplate:(e,a)=>{v.value=e,u.value=!0,n((()=>{y(e,a)}))},togglePreviewTemplate:y,prevPreviewTemplate:()=>{const e=c.value.findIndex((e=>e.id===v.value.id));if(e>0){const a=e-1,l=c.value[a];y(l,a)}},nextPreviewTemplate:()=>{const e=c.value.findIndex((e=>e.id===v.value.id));if(e<c.value.length-1){const a=e+1,l=c.value[a];y(l,a)}},doCreate:async()=>{var e,a;try{if(!m.value)return void o.error("请输入大屏名称");w.value=!0;const l=await r({name:m.value,groupId:f.value,templateId:null!=(a=null==(e=v.value)?void 0:e.id)?a:0});if(0!==l.data.code)throw Error(l.data.message);p.value=!1,u.value=!1,b.push({name:"ScreenEditor",params:{projectId:l.data.data}})}catch(l){o.error(o.format(l))}finally{w.value=!1}}}}});const P=b();d("data-v-adfd8ff0");const T={class:"create-screen"},x={class:"top-bar"},I=v("div",{class:"right-bar"},null,-1),D=v("div",{class:"left-bar"},null,-1),j=v("span",{class:"return-text"},[v("i",{class:"v-icon-back return-icon"}),C(" 取消创建 ")],-1),L={class:"creator-wp"},U={class:"template-list"},z={class:"template-item --blank"},N={class:"template-image"},q=C(" 创建项目 "),E=v("div",{class:"template-info"}," 空白画板 ",-1),O={class:"template-image"},A={class:"template-mask"},F=C(" 创建项目 "),R=C(" 预览 "),S={class:"template-info"},Y={class:"template-name"},B={class:"template-size"},G={class:"create-dialog"},M=v("p",{class:"name-title"},[v("span",{class:"required"},"*"),C("数据大屏名称 ")],-1),X=v("p",{class:"name-title"},"大屏分组",-1),H=C("取消"),J=C(" 创建 "),K={class:"preview-dialog"},Q={class:"preview-list"},W=v("p",{class:"template-list-title"},"模板列表",-1),Z={class:"blur-wp"},$={ref:"scrollRef",class:"scroll-wp"},ee={class:"preview-screen-name"},ae={class:"preview-gif"},le={class:"gif-wp"},te={class:"preview-create"},ie={class:"create-dialog"},se=v("p",{class:"name-title"},[v("span",{class:"required"},"*"),C("数据大屏名称 ")],-1),ne=v("p",{class:"name-title"},"大屏分组",-1),oe=C(" 创建大屏 "),re=v("i",{class:"v-icon-arrow-right next-icon"},null,-1);c();const de=P(((e,a,l,t,i,s)=>{const n=p("router-link"),o=p("el-button"),r=p("g-loading"),d=p("g-input"),c=p("el-option"),b=p("el-select"),C=p("el-dialog");return u(),m(f,null,[v(r,{type:"square",spinning:e.loading},{default:P((()=>[v("div",T,[v("div",x,[I,D,v(n,{to:"/",class:"return-btn"},{default:P((()=>[j])),_:1})]),v("div",L,[v("div",U,[v("div",z,[v("div",N,[v(o,{type:"primary",icon:"v-icon-plus",onClick:a[1]||(a[1]=a=>e.confirmCreate(null))},{default:P((()=>[q])),_:1})]),E]),(u(!0),m(f,null,g(e.templates,((a,l)=>(u(),m("div",{key:a.id,class:"template-item"},[v("div",O,[v("img",{src:a.thumbnail,alt:"",class:"preview-image"},null,8,["src"]),v("div",A,[v(o,{type:"primary",class:"create-btn",onClick:l=>e.confirmCreate(a)},{default:P((()=>[F])),_:2},1032,["onClick"]),v(o,{class:"preview-btn",onClick:t=>e.previewTemplate(a,l)},{default:P((()=>[R])),_:2},1032,["onClick"])])]),v("div",S,[v("div",Y,w(a.name),1),v("div",B,[(u(!0),m(f,null,g(a.size,((e,a)=>(u(),m("p",{key:a},w(e),1)))),128))])])])))),128)),(u(),m(f,null,g(3,(e=>v("div",{key:e,class:"template-item-placehoder"}))),64))])])])])),_:1},8,["spinning"]),v(C,{modelValue:e.visibleCreateDialog,"onUpdate:modelValue":a[5]||(a[5]=a=>e.visibleCreateDialog=a),title:"创建数据大屏",width:"400px"},{footer:P((()=>[v(o,{onClick:a[4]||(a[4]=a=>e.visibleCreateDialog=!1)},{default:P((()=>[H])),_:1}),v(o,{type:"primary",loading:e.saveLoading,onClick:e.doCreate},{default:P((()=>[J])),_:1},8,["loading","onClick"])])),default:P((()=>[v("div",G,[M,v(d,{modelValue:e.projectName,"onUpdate:modelValue":a[2]||(a[2]=a=>e.projectName=a),placeholder:"请输入大屏名称",spellcheck:"false",class:"name-input"},null,8,["modelValue"]),X,v(b,{modelValue:e.groupId,"onUpdate:modelValue":a[3]||(a[3]=a=>e.groupId=a),size:"mini",placeholder:"请选择"},{default:P((()=>[(u(!0),m(f,null,g(e.groups,(e=>(u(),m(c,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1},8,["modelValue"]),v(C,{modelValue:e.visiblePreviewDialog,"onUpdate:modelValue":a[10]||(a[10]=a=>e.visiblePreviewDialog=a),title:"预览",width:"897px"},{default:P((()=>[v("div",K,[v("div",Q,[W,v("div",Z,[v("div",$,[(u(!0),m(f,null,g(e.templates,((a,l)=>(u(),m("div",{key:a.id,class:["preview-wp",{selected:a.id===e.template.id}],onClick:t=>e.togglePreviewTemplate(a,l)},[v("img",{src:a.thumbnail,class:"preview-small-img"},null,8,["src"]),v("div",ee,w(a.name),1)],10,["onClick"])))),128))],512)])]),v("div",ae,[v("div",le,[v("img",{class:"snapshot-gif",src:e.template.snapshot},null,8,["src"]),v("i",{class:"v-icon-arrow-left prev-icon",onClick:a[6]||(a[6]=(...a)=>e.prevPreviewTemplate&&e.prevPreviewTemplate(...a))}),v("i",{class:"v-icon-arrow-right next-icon",onClick:a[7]||(a[7]=(...a)=>e.nextPreviewTemplate&&e.nextPreviewTemplate(...a))})]),v("div",te,[v("div",ie,[se,v(d,{modelValue:e.projectName,"onUpdate:modelValue":a[8]||(a[8]=a=>e.projectName=a),placeholder:"请输入大屏名称",spellcheck:"false",class:"name-input"},null,8,["modelValue"]),ne,v(b,{modelValue:e.groupId,"onUpdate:modelValue":a[9]||(a[9]=a=>e.groupId=a),size:"mini",placeholder:"请选择"},{default:P((()=>[(u(!0),m(f,null,g(e.groups,(e=>(u(),m(c,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),v(o,{type:"primary",size:"mini",loading:e.saveLoading,class:"preview-create-btn",onClick:e.doCreate},{default:P((()=>[oe,re])),_:1},8,["loading","onClick"])])])])])),_:1},8,["modelValue"])],64)}));_.render=de,_.__scopeId="data-v-adfd8ff0";export default _;