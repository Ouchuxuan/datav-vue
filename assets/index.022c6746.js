import{d as e,aO as a,aE as t,h as l,p as n,aR as s,aN as o,P as c,Q as i,f as d,o as _,c as f,a as p,R as r}from"./index.33f1ab50.js";var u=e({name:"ConfigPanel",components:{PageConfig:a((()=>t((()=>import("./page-config.14230baa.js")),["/assets/page-config.14230baa.js","/assets/page-config.cc100e7a.css","/assets/index.33f1ab50.js","/assets/index.fbc9cb84.css","/assets/qiniu.2410e9f6.js"]))),SettingPanel:a((()=>t((()=>import("./setting-panel.fa4dca72.js")),["/assets/setting-panel.fa4dca72.js","/assets/setting-panel.734a81a3.css","/assets/index.33f1ab50.js","/assets/index.fbc9cb84.css","/assets/config-title.c1c97df7.js","/assets/config-title.9336ab86.css"]))),DataCenterPanel:a((()=>t((()=>import("./index.66be13c6.js")),["/assets/index.66be13c6.js","/assets/index.1e687938.css","/assets/index.33f1ab50.js","/assets/index.fbc9cb84.css","/assets/config-title.c1c97df7.js","/assets/config-title.9336ab86.css","/assets/empty-panel.4f0f6e26.js","/assets/empty-panel.ca321ed2.css"]))),InteractionPanel:a((()=>t((()=>import("./index.addbed1a.js")),["/assets/index.addbed1a.js","/assets/index.54e6a962.css","/assets/index.33f1ab50.js","/assets/index.fbc9cb84.css","/assets/config-title.c1c97df7.js","/assets/config-title.9336ab86.css","/assets/empty-panel.4f0f6e26.js","/assets/empty-panel.ca321ed2.css"])))},setup(){const e=l((()=>s.config.show)),a=l((()=>o.selectedCom));return n("com",a),{visiblePanel:e,selectedCom:a}}});const b=r();c("data-v-79f587b9");const m={class:"config-manager"},g=p("i",{class:"v-icon-setting"},null,-1),P=p("i",{class:"v-icon-cloud"},null,-1),y=p("i",{class:"v-icon-interact"},null,-1);i();const v=b(((e,a,t,l,n,s)=>{const o=d("page-config"),c=d("el-tooltip"),i=d("setting-panel"),r=d("el-tab-pane"),u=d("data-center-panel"),v=d("interaction-panel"),C=d("el-tabs"),E=d("el-aside");return _(),f(E,{width:"auto",class:["config-panel-wp",{"--hide":!e.visiblePanel}]},{default:b((()=>[p("div",m,[e.selectedCom?(_(),f(C,{key:1,type:"card",stretch:!0},{default:b((()=>[p(r,null,{label:b((()=>[p(c,{effect:"blue","open-delay":500,content:"配置"},{default:b((()=>[g])),_:1})])),default:b((()=>[p(i,{key:e.selectedCom.id})])),_:1}),p(r,{lazy:""},{label:b((()=>[p(c,{effect:"blue","open-delay":500,content:"数据"},{default:b((()=>[P])),_:1})])),default:b((()=>[p(u,{key:e.selectedCom.id})])),_:1}),p(r,{lazy:""},{label:b((()=>[p(c,{effect:"blue","open-delay":500,content:"交互"},{default:b((()=>[y])),_:1})])),default:b((()=>[p(v,{key:e.selectedCom.id})])),_:1})])),_:1})):(_(),f(o,{key:0}))])])),_:1},8,["class"])}));u.render=v,u.__scopeId="data-v-79f587b9";export default u;
