import{A as b,s as _}from"./scheduler.98dcdc08.js";const e=[];function d(o,a=b){let i;const n=new Set;function r(t){if(_(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function p(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=a(r,f)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:p}}var l;const h=((l=globalThis.__sveltekit_1412pp4)==null?void 0:l.base)??"/slick-portfolio-svelte";var u;const k=((u=globalThis.__sveltekit_1412pp4)==null?void 0:u.assets)??h;export{k as a,h as b,d as w};
