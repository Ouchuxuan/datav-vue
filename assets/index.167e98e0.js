import{b as c,c as o}from"./App.2074c692.js";import{a3 as m,a4 as s,a9 as t,ac as v,aZ as i,ab as _,af as f,ag as g,aa as h,a5 as r}from"./vendor.60e09344.js";const k=m({name:"GColorPicker",props:{modelValue:{type:String,required:!0},size:{type:String,default:"small"},label:{type:String,default:""},inline:{type:[Boolean,String],default:!1}},emits:[o],setup(e,n){return{handleInput:l=>{n.emit(o,l)}}}}),y={class:"g-color-picker__inner"},z={key:0,class:"g-input__caption"};function V(e,n,p,l,C,S){const u=s("n-input"),d=s("n-color-picker");return r(),t("div",{class:h(["datav-gui g-color-picker",[{"--inline":!!e.inline,"--single":e.inline==="inline-single"}]])},[v("div",y,[i(u,{value:e.modelValue,size:e.size,"onUpdate:value":e.handleInput},null,8,["value","size","onUpdate:value"]),i(d,{value:e.modelValue,size:e.size,"show-alpha":"",style:_({width:"var(--n-height)",flex:"0 0 var(--n-height)"}),"onUpdate:value":e.handleInput},null,8,["value","size","style","onUpdate:value"])]),e.label?(r(),t("span",z,f(e.label),1)):g("",!0)],2)}var a=c(k,[["render",V]]);a.install=e=>{e.component(a.name,a)};export{a as default};