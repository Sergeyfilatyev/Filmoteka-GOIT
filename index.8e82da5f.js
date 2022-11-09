function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire634e;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire634e=o),o("cyIMT");var a=o("cyIMT"),i=o("krGWQ");o("cyIMT");i=o("krGWQ"),a=o("cyIMT"),i=o("krGWQ");async function s(e,t){const n=await(0,a.fetchByName)(e,t),r=document.querySelector(".header__form"),o=document.querySelector(".header__error");if(0===n.movies.length)return o.textContent="There is no movie for your query",void r.reset();i.refs.popularFilms.innerHTML="",n.movies.forEach((e=>{let t;t=document.documentElement.scrollWidth>=768&&e.name.length>=35?e.name.substring(0,35)+"...":e.name,e.genres.length>=3?i.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" data-id="${e.id}">\n          <img \n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <button class="btn-youtube" data-id="${e.id}">\n          <svg class="icon-youtube">\n            <use href="./images/svg/sprite.svg#icon-youtube"></use>\n          </svg>\n        </button>\n          <div class="info">\n            <p class="info__name">${t}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year} <span class="info__rating">${e.rating}</span></p>\n          </div>\n        </a>`):i.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" data-id="${e.id}" >\n      <img \n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <button class="btn-youtube" data-id="${e.id}">\n      <svg class="icon-youtube">\n        <use href="./images/svg/sprite.svg#icon-youtube"></use>\n      </svg>\n    </button>\n      <div class="info">\n        <p class="info__name">${t}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}<span class="info__rating">${e.rating}</span></p>\n      </div>\n    </a>`)}))}const c=document.querySelector("ul");let l;function u(e,t){let n,r="",o=t-1,a=t+1;t>1&&(r+=`<li class="btn prev" data-id="${o}"\n\n      \n    >&#60 Prev</li>`),t>2&&(r+='<li class="numb" data-id = "1" >\n        1\n      </li>',t>3&&(r+='<li class="dots">\n          ...\n        </li>')),t==e?o-=2:t==e-1&&(o-=1),1==t?a+=2:2==t&&(a+=1);for(let i=o;i<=a;i++)i>e||(0==i&&(i+=1),n=t==i?"active":"",r+=`<li\n        class="numb ${n}" data-id="${i}"\n  \n      >\n        ${i}\n      </li>`);t<e-1&&(t<e-2&&(r+='<li class="dots">\n          ...\n        </li>'),r+=`<li class="numb" data-id="${e}" >\n        ${e}\n      </li>`),t<e&&(r+=`<li class="btn next" data-id = "${t+1}" >Next &#62\n</li>`),1===e&&(i.refs.pagination.innerHTML=""),c.innerHTML=r,window.scrollTo({top:0,behavior:"smooth"})}async function d(e){i.refs.popularFilms.innerHTML="";(await(0,a.fetchPopular)(e)).movies.forEach((e=>{let t;t=document.documentElement.scrollWidth>=768&&e.name.length>=35?e.name.substring(0,35)+"...":e.name,e.genres.length>=3?i.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" data-id="${e.id}" >\n          <img \n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <button class="btn-youtube" data-id="${e.id}">\n          <svg class="icon-youtube">\n            <use href="./images/svg/sprite.svg#icon-youtube"></use>\n          </svg>\n        </button>\n          <div class="info">\n            <p class="info__name">${t}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year}</p>\n          </div>\n        </a>`):i.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" data-id="${e.id}">\n      <img \n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <button class="btn-youtube" data-id="${e.id}">\n      <svg class="icon-youtube">\n        <use href="./images/svg/sprite.svg#icon-youtube"></use>\n      </svg>\n    </button>\n      <div class="info">\n        <p class="info__name">${t}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}</p>\n      </div\n    </a>`)}))}u(i.refs.totalPages,i.refs.currentPage),i.refs.pagination.addEventListener("click",(async function(e){l=i.refs.searchInput.value?await s(i.refs.searchInput.value,e.target.dataset.id):await d(e.target.dataset.id);return i.refs.currentPage=+e.target.dataset.id,u(i.refs.totalPages,i.refs.currentPage),l})),d(1);i=o("krGWQ");const f=document.querySelector(".header__error");f.textContent="",i.refs.searchForm.addEventListener("submit",(()=>{event.preventDefault(),u(i.refs.totalPages,1),async function(e){if(i.refs.currentPage=1,""===i.refs.searchInput.value.trim())return f.textContent="Please, enter the name of the movie",void i.refs.searchForm.reset();s(i.refs.searchInput.value.trim(),1)}()})),i.refs.searchForm.addEventListener("submit",(async function e(t){i.refs.searchInput.value?markupPagination=await s(i.refs.searchInput.value,t.target.dataset.id):console.log(e);return u(i.refs.totalPages,i.refs.currentPage),markupPagination})),o("krGWQ");var p,m=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,b=/^0o[0-7]+$/i,h=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,w=y||E||Function("return this")(),L=Object.prototype.toString,_=Math.max,T=Math.min,$=function(){return w.Date.now()};function x(e,t,n){var r,o,a,i,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function m(e){return l=e,s=setTimeout(g,t),u?p(e):i}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function g(){var e=$();if(v(e))return b(e);s=setTimeout(g,function(e){var n=t-(e-c);return d?T(n,a-(e-l)):n}(e))}function b(e){return s=void 0,f&&r?p(e):(r=o=void 0,i)}function h(){var e=$(),n=v(e);if(r=arguments,o=this,c=e,n){if(void 0===s)return m(c);if(d)return s=setTimeout(g,t),p(c)}return void 0===s&&(s=setTimeout(g,t)),i}return t=k(t)||0,O(n)&&(u=!!n.leading,a=(d="maxWait"in n)?_(k(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=o=s=void 0},h.flush=function(){return void 0===s?i:b($())},h}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function k(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==L.call(e)}(e))return NaN;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=g.test(e);return n||b.test(e)?h(e.slice(2),n?2:8):v.test(e)?NaN:+e}p=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return O(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),x(e,t,{leading:r,maxWait:t,trailing:o})};var S;i=o("krGWQ");window.addEventListener("scroll",e(p)((S=i.refs.upBtn,function(){pageYOffset<document.documentElement.clientHeight||!1===i.refs.modalFooter.classList.contains("visibility-hidden")?S.classList.add("visually-hidden"):S.classList.remove("visually-hidden")}),250)),i.refs.upBtn.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),o("bO1YF");a=o("cyIMT"),i=o("krGWQ");var C=o("31u3U");let M={},D=(0,C.getFromStorage)("watched"),W=(0,C.getFromStorage)("queue");function A(){i.refs.backdrop.classList.add("is-hidden"),document.removeEventListener("keydown",N),i.refs.backdrop.removeEventListener("click",I),document.body.classList.remove("stop-scrolling")}function F(){(0,C.getFromStorage)("watched")&&(D=(0,C.getFromStorage)("watched")),(0,C.getFromStorage)("queue")&&(W=(0,C.getFromStorage)("queue"))}function q(e){if(!M.id)return alert("Movie not find");F(),D.find((e=>e.id===M.id))?(!function(e){const t=JSON.parse(localStorage.getItem("watched")),n=t.find((t=>t.id===e.id));t.splice(t.indexOf(n),1),localStorage.removeItem("watched"),localStorage.setItem("watched",JSON.stringify(t))}(M),i.refs.toWatchedBtn.textContent="ADD TO WATCHED",i.refs.toWatchedBtn.classList.add("current-btn")):(D.push(M),(0,C.addToStorage)("watched",D),i.refs.toWatchedBtn.textContent="REMOVE WATCHED",i.refs.toWatchedBtn.classList.remove("current-btn"))}function B(e){if(!M.id)return alert("Movie not find");F(),W.find((e=>e.id===M.id))?(!function(e){const t=JSON.parse(localStorage.getItem("queue")),n=t.find((t=>t.id===e.id));t.splice(t.indexOf(n),1),localStorage.removeItem("queue"),localStorage.setItem("queue",JSON.stringify(t))}(M),i.refs.toQueueBtn.textContent="ADD TO QUEUE",i.refs.toQueueBtn.classList.add("current-btn")):(W.push(M),(0,C.addToStorage)("queue",W),i.refs.toQueueBtn.textContent="REMOVE QUEUE",i.refs.toQueueBtn.classList.remove("current-btn"))}function N(e){"Escape"===e.key&&A()}function I(e){"backdrop"===e.target.className&&A()}i.refs.popularFilms.addEventListener("click",(async function(e){if(e.preventDefault(),!e.target.closest(".popular-film__card"))return;const t=await(0,a.fetchById)(e.target.closest(".popular-film__card").dataset.id);i.refs.modalContainer.innerHTML="",i.refs.modalContainer.insertAdjacentHTML("beforeend",`<div id="${t.id}" class="movie-card">\n        <img src="${t.cover}" alt="${t.name}" loading="lazy" class='movie-cover'>\n    \n        <div class="movie-info">\n            <h2 class='movie-title'>${t.name}</h2>\n            <p class='text'>Vote/Votes <span class='back-info movie-votes'><span class='movie-rating'>${t.rating.toFixed(2)}</span>/ ${t.votes}</span></p>\n             <p class='text'>Popularity <span class='back-info movie-popular'>${t.popularity}</span></p>\n             <p class='text'>Original Title <span class='back-info back-info-text org-title'>${t.originalTitle}</span></p>\n            <p class='text'>Genre <span class='back-info back-info-text movie-genre'>${t.genres.join(", ")}</span></p>\n            <p class='about-title'>About</p>\n            <p class='movie-description'>${t.about}</p>\n         </div>\n         </div>\n         <div class='modal-btns-wrapper'>\n         <button type="button" class="modal-btn watched">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>\n    </div>`),function(){i.refs.backdrop.classList.remove("is-hidden"),i.refs.modal.classList.add("active");document.querySelector(".watched").addEventListener("click",q);document.querySelector(".queue").addEventListener("click",B),document.addEventListener("keydown",N),i.refs.backdrop.addEventListener("click",I),document.body.classList.add("stop-scrolling")}(),M=t,i.refs.youtubeBtn.dataset.id=M.id,i.refs.toWatchedBtn=document.querySelector(".watched"),i.refs.toQueueBtn=document.querySelector(".queue"),void(D.find((e=>e.id===M.id))?i.refs.toWatchedBtn.textContent="REMOVE WATCHED":i.refs.toWatchedBtn.textContent="ADD TO WATCHED"),void(W.find((e=>e.id===M.id))?i.refs.toQueueBtn.textContent="REMOVE QUEUE":i.refs.toQueueBtn.textContent="ADD TO QUEUE"),"ADD TO WATCHED"===i.refs.toWatchedBtn.textContent&&i.refs.toWatchedBtn.classList.add("current-btn");"ADD TO QUEUE"===i.refs.toQueueBtn.textContent&&i.refs.toQueueBtn.classList.add("current-btn")})),i.refs.modalCloseBtn.addEventListener("click",(function(){A()})),o("aAveg");var Q={};Q=function e(t,n,r){function o(i,s){if(!n[i]){if(!t[i]){var c=void 0;if(!s&&c)return c(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[i]={exports:{}};t[i][0].call(u.exports,(function(e){return o(t[i][1][e]||e)}),u,u.exports,e,t,n,r)}return n[i].exports}for(var a=void 0,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),s=o(a,"VIDEO"),c=o(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var s={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(s)}))},close:i};return s}},{}]},{},[1])(1);a=o("cyIMT");async function P(e){if(e.target.closest(".youtube-btn")){await(0,a.fetchTrailer)(e.target.closest(".youtube-btn").dataset.id)}if(e.target.closest(".btn-youtube")){await(0,a.fetchTrailer)(e.target.closest(".btn-youtube").dataset.id)}if(0!==result.data.results.length){const e=result.data.results.find((e=>"Trailer"===e.type)).key;Q.create(`\n      <iframe src="https://www.youtube.com/embed/${e}" width="760" height="515" frameborder="0"></iframe>\n  `).show()}else{Q.create('\n      <p style="color:white">No trailer for this film</p>\n  ').show()}}(i=o("krGWQ")).refs.popularFilms.addEventListener("click",P),i.refs.modal.addEventListener("click",P);
//# sourceMappingURL=index.8e82da5f.js.map
