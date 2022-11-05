import{_ as r,f as d,j as m,a as V,D as b,k as c,E as B,F as y,G as j,u as N,H as k,q as v,p as S,I as $,J as T,K as O,L as P,M as C,e as x,d as n,t as M,N as w,h as z,O as q}from"./entry.5a601d45.js";import{u as H}from"./asyncData.5ea1dc79.js";import{h as L,j as F}from"./query.f130360c.js";import{w as U,s as G,u as W,a as J}from"./utils.47f6d14d.js";import"./ContentRenderer.ae3b2525.js";/* empty css                                                    */import"./ContentDoc.6d9eb7ef.js";import"./ContentList.d47ee748.js";import"./ContentQuery.5e037503.js";import"./ContentRendererMarkdown.0481729c.js";import"./ContentSlot.0ff26ef0.js";import"./DocumentDrivenEmpty.d9bc6a7b.js";import"./DocumentDrivenNotFound.77e3380c.js";import"./Markdown.4d5f6ecc.js";import"./ProseCode.4b1a3212.js";import"./_commonjsHelpers.f8a6f4fc.js";import"./_plugin-vue_export-helper.a1a6add7.js";const K=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=U(e?`/navigation/${L(e)}.json`:"/navigation");if(G())return(await r(()=>import("./client-db.d7113ef9.js"),["./client-db.d7113ef9.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./utils.47f6d14d.js","./query.f130360c.js","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(a=>a.generateNavigation))(e||{});const i=await $fetch(o,{method:"GET",responseType:"json",params:{_params:F(e||{}),previewToken:W("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const A={},Y=d({props:{name:String},async setup(t,e){const o=await A[t.name]().then(i=>i.default||i);return()=>m(o,{},e.slots)}}),Q=d({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=j("_route"),i=o===V()?b():o,u=c(()=>{var a,l;return(l=(a=N(t.name))!=null?a:i.meta.layout)!=null?l:"default"});return()=>{var s;const a=u.value&&u.value in A,l=(s=i.meta.layoutTransition)!=null?s:B;return y(k,a&&l,{default:()=>y(Y,a&&{key:u.value,name:u.value,hasTransition:void 0},e.slots).default()}).default()}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const i=v(null),u=S();return $(a=>{if(!u.isHydrating)return o("error",a),i.value=a,!1}),()=>{var a,l;return i.value?(a=e.error)==null?void 0:a.call(e,{error:i}):(l=e.default)==null?void 0:l.call(e)}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=d({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=v(!1);return T(()=>{o.value=!0}),i=>{var s;if(o.value)return(s=e.default)==null?void 0:s.call(e);const u=e.fallback||e.placeholder;if(u)return u();const a=i.fallback||i.placeholder||"",l=i.fallbackTag||i.placeholderTag||"span";return O(l,null,a)}}}),g=new WeakMap;function rt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(o,...i)=>{var u;if(o.mounted$){const a=t.render(o,...i);return a.children===null||typeof a.children=="string"?P(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):m(a)}else return m("div",(u=o.$attrs)!=null?u:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,i)=>{var a;const u=v(!1);return T(()=>{u.value=!0}),Promise.resolve(((a=t.setup)==null?void 0:a.call(t,o,i))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...s)=>{if(u.value){const _=l(...s);return _.children===null||typeof _.children=="string"?P(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):m(_)}else return m("div",i.attrs)})},g.set(t,e),e}const nt=Object.freeze(Object.defineProperty({__proto__:null,default:et,createClientOnly:rt},Symbol.toStringTag,{value:"Module"})),it=d({name:"DevOnly",setup(t,e){return()=>null}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),at=d({name:"ServerPlaceholder",render(){return O("div")}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=_t({duration:t.duration,throttle:t.throttle}),i=S();return i.hook("page:start",o.start),i.hook("page:finish",o.finish),C(()=>o.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function _t(t){const e=v(0),o=v(!1),i=c(()=>1e4/t.duration);let u=null,a=null;function l(){_(),e.value=0,o.value=!0,t.throttle?a=setTimeout(E,t.throttle):E()}function s(){e.value=100,D()}function _(){clearInterval(u),clearTimeout(a),u=null,a=null}function I(R){e.value=Math.min(100,e.value+R)}function D(){_(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{I(i.value)},100)}return{progress:e,isLoading:o,start:l,finish:s,clear:_}}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),st=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,i)=>(x(()=>t({...st(o),...i.attrs},i)),()=>{var u,a;return e?(a=(u=i.slots).default)==null?void 0:a.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},mt=d({name:"Script",inheritAttrs:!1,props:{...h,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},i=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return i&&(o.children=i),{script:[o]}})}),pt=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},i=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return i&&(o.children=i),{noscript:[o]}})}),ft=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ht=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),vt=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var i,u,a;return{title:((a=(u=(i=e.default)==null?void 0:i.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),gt=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ct=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,a,l;const o={...t},i=(l=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:l.children;return i&&(o.children=i),{style:[o]}})}),Et=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,i;return(i=(o=e.slots).default)==null?void 0:i.call(o)}}),yt=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Pt=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,Script:mt,NoScript:pt,Link:ft,Base:ht,Title:vt,Meta:gt,Style:ct,Head:Et,Html:yt,Body:Pt},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./AppTable.8bcb5142.js"),["./AppTable.8bcb5142.js","./AppTable.vue_vue_type_script_setup_true_lang.3ee2d5bc.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DetailsPage.a55fc12d.js"),["./DetailsPage.a55fc12d.js","./DetailsPage.vue_vue_type_script_setup_true_lang.484b2884.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./IconWikipedia.55479db7.js","./_plugin-vue_export-helper.a1a6add7.js","./ContentRenderer.ae3b2525.js","./ContentRendererMarkdown.0481729c.js","./_commonjsHelpers.f8a6f4fc.js","./useURL.56dc4b41.js","./asyncData.5ea1dc79.js","./query.f130360c.js","./utils.47f6d14d.js","./DetailsPage.d9d89b85.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./IconWikipedia.55479db7.js"),["./IconWikipedia.55479db7.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ListPage.495936c4.js"),["./ListPage.495936c4.js","./ListPage.vue_vue_type_script_setup_true_lang.cffd0d1e.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./IconWikipedia.55479db7.js","./_plugin-vue_export-helper.a1a6add7.js","./AppTable.vue_vue_type_script_setup_true_lang.3ee2d5bc.js","./useURL.56dc4b41.js","./asyncData.5ea1dc79.js","./query.f130360c.js","./utils.47f6d14d.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentDoc.6d9eb7ef.js"),["./ContentDoc.6d9eb7ef.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./ContentRenderer.ae3b2525.js","./ContentRendererMarkdown.0481729c.js","./_commonjsHelpers.f8a6f4fc.js","./ContentQuery.5e037503.js","./asyncData.5ea1dc79.js","./query.f130360c.js","./utils.47f6d14d.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentList.d47ee748.js"),["./ContentList.d47ee748.js","./ContentQuery.5e037503.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./asyncData.5ea1dc79.js","./query.f130360c.js","./utils.47f6d14d.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>Tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentQuery.5e037503.js"),["./ContentQuery.5e037503.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./asyncData.5ea1dc79.js","./query.f130360c.js","./utils.47f6d14d.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRenderer.ae3b2525.js"),["./ContentRenderer.ae3b2525.js","./ContentRendererMarkdown.0481729c.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRendererMarkdown.0481729c.js"),["./ContentRendererMarkdown.0481729c.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.0ff26ef0.js"),["./ContentSlot.0ff26ef0.js","./utils.47f6d14d.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.d9bc6a7b.js"),["./DocumentDrivenEmpty.d9bc6a7b.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.77e3380c.js"),["./DocumentDrivenNotFound.77e3380c.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.4d5f6ecc.js"),["./Markdown.4d5f6ecc.js","./ContentSlot.0ff26ef0.js","./utils.47f6d14d.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.ea2f326e.js"),["./ProseA.ea2f326e.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.9b47d5e3.js"),["./ProseBlockquote.9b47d5e3.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.4b1a3212.js"),["./ProseCode.4b1a3212.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.5c55ddf1.js"),["./ProseCodeInline.5c55ddf1.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.c05370e6.js"),["./ProseEm.c05370e6.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.12050d10.js"),["./ProseH1.12050d10.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.bb3dbf31.js"),["./ProseH2.bb3dbf31.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.68d21303.js"),["./ProseH3.68d21303.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.affcdfe0.js"),["./ProseH4.affcdfe0.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.9e010ae2.js"),["./ProseH5.9e010ae2.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.6bb1713e.js"),["./ProseH6.6bb1713e.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.d75e6316.js"),["./ProseHr.d75e6316.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.b40413ba.js"),["./ProseImg.b40413ba.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.d2c7b6aa.js"),["./ProseLi.d2c7b6aa.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.8b7442f0.js"),["./ProseOl.8b7442f0.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.1d325519.js"),["./ProseP.1d325519.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.d3c5300f.js"),["./ProseStrong.d3c5300f.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.5ef388fb.js"),["./ProseTable.5ef388fb.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.d1642b84.js"),["./ProseTbody.d1642b84.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.232df028.js"),["./ProseTd.232df028.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.833c8fae.js"),["./ProseTh.833c8fae.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.347bd666.js"),["./ProseThead.347bd666.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.055cb960.js"),["./ProseTr.055cb960.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.8becd656.js"),["./ProseUl.8becd656.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.3f3f3c70.js"),["./welcome.3f3f3c70.js","./entry.5a601d45.js","./entry.05b3b3ed.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.5ea1dc79.js","./query.f130360c.js","./utils.47f6d14d.js","./ContentRenderer.ae3b2525.js","./ContentRendererMarkdown.0481729c.js","./_commonjsHelpers.f8a6f4fc.js","./ContentDoc.6d9eb7ef.js","./ContentQuery.5e037503.js","./ContentList.d47ee748.js","./ContentSlot.0ff26ef0.js","./DocumentDrivenEmpty.d9bc6a7b.js","./DocumentDrivenNotFound.77e3380c.js","./Markdown.4d5f6ecc.js","./ProseCode.4b1a3212.js","./ProseCode.e63e49c6.css","./DetailsPage.d9d89b85.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.5a601d45.js").then(t=>t.a6),["./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.5a601d45.js").then(t=>t.a7),["./entry.5a601d45.js","./entry.05b3b3ed.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Script));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const St=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),o=c(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&w("dd-navigation").value){const{navigation:u}=J();return{navigation:u}}const{data:i}=await H(`content-navigation-${L(o.value)}`,()=>K(o.value));return{navigation:i}},render(t){const e=z(),{navigation:o}=t,i=l=>m(q,{to:l._path},()=>l.title),u=(l,s)=>m("ul",s?{"data-level":s}:null,l.map(_=>_.children?m("li",null,[i(_),u(_.children,s+1)]):m("li",null,i(_)))),a=l=>u(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):a(o)}}),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));export{St as default};