import{A as b,s as p}from"./scheduler.98dcdc08.js";const e=[];function g(o,l=b){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=l(r,u)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_adqyu3)==null?void 0:f.base)??"/slick-portfolio-svelte";var a;const q=((a=globalThis.__sveltekit_adqyu3)==null?void 0:a.assets)??d;export{q as a,d as b,g as w};