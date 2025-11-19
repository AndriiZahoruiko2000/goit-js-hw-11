import{a as m,S as d,i as c}from"./assets/vendor-MjawMu3A.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function p(e){const s="https://pixabay.com/api/",o={key:"53285847-f778133efdcf1a85bc0bbba3e",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(s,{params:o})).data}const l=document.querySelector(".loader"),u=document.querySelector(".gallery");function y(){l.classList.remove("hidden")}function f(){l.classList.add("hidden")}function g(e){return` <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}"><img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" /></a>
      <ul class="image-params">
      <p><b>Likes:</b>${e.likes}</p>
      <p><b>Views:</b>${e.views}</p>
      <p><b>Comments:</b>${e.comments}</p>
      <p><b>Downloads:</b>${e.downloads}</p>
    </ul>
    </li>`}function h(e){return e.map(g).join("")}function b(e){const a=h(e);u.innerHTML=a}function L(){u.innerHTML=""}const i=document.querySelector(".js-search-photo");let w=new d(".gallery a",{captionsData:"alt",captionDelay:1e3});//!================================================
i.addEventListener("submit",e=>{e.preventDefault(),L(),y();const s=new FormData(i).get("query");p(s).then(o=>{if(o.totalHits===0)return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});b(o.hits),w.refresh()}).catch(o=>{c.error({message:"Something went wrong"})}).finally(f),i.reset()});//!================================================
f();
//# sourceMappingURL=index.js.map
