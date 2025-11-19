import{a as p,S as f,i as l}from"./assets/vendor-MjawMu3A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(a){if(a.ep)return;a.ep=!0;const t=o(a);fetch(a.href,t)}})();async function d(e){const o="https://pixabay.com/api/",s={key:"53285847-f778133efdcf1a85bc0bbba3e",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(o,{params:s})).data}const c=document.querySelector(".loader"),u=document.querySelector(".gallery");function g(){c.classList.remove("hidden")}function m(){c.classList.add("hidden")}function y(e){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>

      <ul class="image-params">
        <li class="image-params-item">
          <span class="label">Likes</span>
          <span class="value">${e.likes}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Views</span>
          <span class="value">${e.views}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Comments</span>
          <span class="value">${e.comments}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Downloads</span>
          <span class="value">${e.downloads}</span>
        </li>
      </ul>
    </li>
  `}function h(e){return e.map(y).join("")}function b(e){const r=h(e);u.innerHTML=r}function L(){u.innerHTML=""}const i=document.querySelector(".js-search-photo");let w=new f(".gallery a",{captionsData:"alt",captionDelay:1e3});//!================================================
i.addEventListener("submit",e=>{e.preventDefault(),L(),g();const o=new FormData(i).get("query");d(o).then(s=>{if(s.totalHits===0)return l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});b(s.hits),w.refresh()}).catch(s=>{l.error({position:"topRight",message:"Something went wrong"})}).finally(m),i.reset()});//!================================================
m();
//# sourceMappingURL=index.js.map
