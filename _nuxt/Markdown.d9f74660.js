import s from"./ContentSlot.be4d15fe.js";import{e as o,f,h as u,j as m}from"./entry.bab6728b.js";import"./utils.7a15f8cc.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=f(),r=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};