import{v as g,n as m,j as p,r as h,R as v,a as w}from"./vendor.0e7980d5.js";const y=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};y();var b="/vite-react-pwa-practice/assets/logo.ecc203fb.svg";function x(s={}){const{immediate:a=!1,onNeedRefresh:l,onOfflineReady:r,onRegistered:e,onRegisterError:t}=s;let o,c;const u=async(n=!0)=>{n&&(o==null||o.addEventListener("controlling",f=>{f.isUpdate&&window.location.reload()})),c&&c.waiting&&await m(c.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){o=new g("/vite-react-pwa-practice/sw.js",{scope:"/vite-react-pwa-practice/"}),o.addEventListener("activated",n=>{n.isUpdate||r==null||r()});{const n=()=>{l==null||l()};o.addEventListener("waiting",n),o.addEventListener("externalwaiting",n)}o.register({immediate:a}).then(n=>{c=n,e==null||e(n)}).catch(n=>{t==null||t(n)})}return u}const i=p.exports.jsx,d=p.exports.jsxs;function L(){let s;window.addEventListener("beforeinstallprompt",r=>{console.log("before prompt"),s=r}),x();const[a,l]=h.exports.useState(0);return i("div",{className:"App",children:d("header",{className:"App-header",children:[i("img",{src:b,className:"App-logo",alt:"logo"}),i("p",{children:"Hello Vite + React!"}),d("p",{children:[i("button",{type:"button",onClick:()=>s&&(async()=>{s.prompt();const{outcome:r}=await s.userChoice;console.log("[outcome]: ",r),s=null})(),children:"Install"}),i("button",{type:"button",onClick:()=>l(r=>r+1)}),i("p",{children:a})]}),d("p",{children:["Edit ",i("code",{children:"App.tsx"})," and save to test HMR updates."]}),d("p",{children:[i("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",i("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs"})]})]})})}v.render(i(w.StrictMode,{children:i(L,{})}),document.getElementById("root"));