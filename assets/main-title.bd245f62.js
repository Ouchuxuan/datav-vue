var s=Object.defineProperty;var r=(a,t,i)=>t in a?s(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var e=(a,t,i)=>(r(a,typeof t!="symbol"?t+"":t,i),i);import{R as n,P as l,Q as c}from"./App.1a480446.js";import{c as o}from"./data-field.0ba3a232.js";import{g as f}from"./data.17c02c40.js";import"./vendor.60e09344.js";class m extends n{constructor(){super("MainTitle",{w:300,h:56});e(this,"config",{title:"\u6211\u662F\u6807\u9898\u6570\u636E",textStyle:{fontFamily:"Microsoft Yahei",fontSize:24,color:"#fff",fontWeight:"normal"},textAlign:"center",writingMode:"horizontal-tb",letterSpacing:0,backgroundStyle:{show:!1,bgColor:"#008bff",borderRadius:15,borderColor:"#fff",borderStyle:"solid",borderWidth:1},ellipsis:!1,urlConfig:{url:"",isBlank:!1}});e(this,"apis");e(this,"apiData");e(this,"events");e(this,"actions");this.initData()}initData(){const t=[o("title",{description:"\u6807\u9898\u503C",optional:!0}),o("url",{description:"\u8D85\u94FE\u63A5",optional:!0})];return this.apis=l({fields:Object.assign({},...t)}),this.apiData=c(this.id),this.events={},this.actions={},this}async loadData(){try{const t="text/main-title",i=await f(this.id,t);this.apiData.source.config.data=JSON.stringify(i.data)}catch(t){throw t}}}export{m as MainTitle,m as default};