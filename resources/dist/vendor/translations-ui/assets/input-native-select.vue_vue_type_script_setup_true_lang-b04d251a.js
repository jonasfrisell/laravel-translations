import{d as c,J as p,j as m,p as f,N as v,o as s,h as r,f as b,t as d,F as g,q as h,E as z,u as V}from"./app-8d2ddf0a.js";import{u as M}from"./use-input-size-a5ed2a71.js";const S={value:"",selected:""},_=["value"],x=c({__name:"input-native-select",props:p({items:{},size:{},error:{},placeholder:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const n=l,t=m(l,"modelValue"),{sizeClass:u}=M(n.size??"lg");return(o,a)=>f((s(),r("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),class:z(["w-full rounded-md border border-gray-300 px-3 text-left shadow-sm focus:border-blue-500 focus:ring-blue-500",[V(u),{"border-red-300 text-red-900 placeholder:text-red-300 focus:border-red-500 focus:ring-red-500":o.error}]])},[b("option",S,d(o.placeholder??"Select an option"),1),(s(!0),r(g,null,h(o.items,(e,i)=>(s(),r("option",{key:i,value:e.value},d(e.label),9,_))),128))],2)),[[v,t.value]])}});export{x as _};