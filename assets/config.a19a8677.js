import{d as e,ax as a,a$ as l,f as s,o,c as t,a as i,w as n}from"./index.b20965e1.js";var r=e({name:"VBorderBoxProp",props:{com:{type:Object,required:!0}},setup:e=>({config:a(e.com,"config"),presetImages:l})});const d={class:"setting-panel-gui"};r.render=function(e,a,l,r,c,g){const m=s("g-select-image"),f=s("g-field"),p=s("g-field-collapse");return o(),t("div",d,[i(p,{label:"框"},{default:n((()=>[i(f,{level:2,label:"样式"},{default:n((()=>[i(m,{modelValue:e.config.boxStyle.style,"onUpdate:modelValue":a[1]||(a[1]=a=>e.config.boxStyle.style=a),images:e.presetImages},null,8,["modelValue","images"])])),_:1})])),_:1})])};export default r;
