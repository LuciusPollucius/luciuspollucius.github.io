(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();let r=!0,m=(t=500)=>{document.documentElement.classList.contains("lock")?f(t):a(t)},f=(t=500)=>{let c=document.querySelector("body");if(r){c.style.overflowY="visible";let l=document.querySelectorAll("[data-lp]");setTimeout(()=>{for(let n=0;n<l.length;n++){const e=l[n];e.style.paddingRight="0px"}c.style.paddingRight="0px",document.documentElement.classList.remove("lock")},t),r=!1,setTimeout(function(){r=!0},t)}},a=(t=500)=>{let c=document.querySelector("body");if(r){c.style.overflowY="hidden";let l=document.querySelectorAll("[data-lp]");for(let n=0;n<l.length;n++){const e=l[n];e.style.paddingRight=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px"}c.style.paddingRight=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px",document.documentElement.classList.add("lock"),r=!1,setTimeout(function(){r=!0},t)}};const s=document.getElementById("page"),i=document.querySelector(".footer"),u=document.querySelector(".header__logo"),y=document.querySelectorAll(".menu__link");y.forEach(t=>{t.addEventListener("click",p)});function p(){document.querySelector(".menu").classList.remove("menu-open"),document.documentElement.classList.remove("menu-open"),s==null||s.classList.remove("blured"),i==null||i.classList.remove("blured"),u==null||u.classList.remove("blured")}function g(){document.querySelector(".icon-menu")&&document.addEventListener("click",function(t){r&&t.target.closest(".icon-menu")&&(s==null||s.classList.toggle("blured"),i==null||i.classList.toggle("blured"),u==null||u.classList.toggle("blured"),m(),document.documentElement.classList.toggle("menu-open"))})}g();window.onload=function(){setTimeout(function(){const t=document.querySelector("body");t&&(t.style.display="")},200)};
