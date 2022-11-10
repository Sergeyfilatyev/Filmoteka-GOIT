!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequire634e;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire634e=o),o("5g02X");var i=o("5g02X"),r=o("4Nugj");o("5g02X");r=o("4Nugj"),i=o("5g02X"),r=o("4Nugj");async function s(e,t){const n=await(0,i.fetchByName)(e,t),a=document.querySelector(".header__form"),o=document.querySelector(".header__error");if(0===n.movies.length)return o.textContent="There is no movie for your query",void a.reset();o.textContent="",r.refs.popularFilms.innerHTML="",n.movies.forEach((e=>{let t;t=document.documentElement.scrollWidth>=1280?e.name.length>=33?e.name.substring(0,33)+"...":e.name:document.documentElement.scrollWidth>=768&&e.name.length>=35?e.name.substring(0,35)+"...":e.name,e.genres.length>=3?r.refs.popularFilms.insertAdjacentHTML("beforeend",`<li class="popular-film__card"  data-id="${e.id}">\n          <img \n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <button class="btn-youtube" data-id="${e.id}">\n            <img class="icon-youtube" src="https://i.ibb.co/17hSwCj/youtube.png" alt="Button Youtube" />\n          </button>\n          <div class="info">\n            <p class="info__name">${t}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year} <span class="info__rating">${e.rating}</span></p>\n          </div>\n        </li>`):r.refs.popularFilms.insertAdjacentHTML("beforeend",`<li class="popular-film__card"  data-id="${e.id}" >\n      <img \n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <button class="btn-youtube" data-id="${e.id}">\n        <img class="icon-youtube" src="https://i.ibb.co/17hSwCj/youtube.png" alt="Button Youtube" />\n      </button>\n      <div class="info">\n        <p class="info__name">${t}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}<span class="info__rating">${e.rating}</span></p>\n      </div>\n    </li>`)}))}const c=document.querySelector(".pagination__list");function l(e,t){let n,a="",o=t-1,i=t+1;t>1&&(a+=`<li class="btn prev" data-id="${o}"\n\n      \n    >&#60 Prev</li>`),t>2&&(a+='<li class="numb" data-id = "1" >\n        1\n      </li>',t>3&&(a+='<li class="dots">\n          ...\n        </li>')),t==e?o-=2:t==e-1&&(o-=1),1==t?i+=2:2==t&&(i+=1);for(let r=o;r<=i;r++)r>e||(0==r&&(r+=1),n=t==r?"active":"",a+=`<li\n        class="numb ${n}" data-id="${r}"\n  \n      >\n        ${r}\n      </li>`);t<e-1&&(t<e-2&&(a+='<li class="dots">\n          ...\n        </li>'),a+=`<li class="numb" data-id="${e}" >\n        ${e}\n      </li>`),t<e&&(a+=`<li class="btn next" data-id = "${t+1}" >Next &#62\n</li>`),1===e&&(r.refs.pagination.innerHTML=""),c.innerHTML=a,window.scrollTo({top:0,behavior:"smooth"})}let u;async function d(e){r.refs.popularFilms.innerHTML="";(await(0,i.fetchPopular)(e)).movies.forEach((e=>{let t;t=document.documentElement.scrollWidth>=1280?e.name.length>=33?e.name.substring(0,33)+"...":e.name:document.documentElement.scrollWidth>=768&&e.name.length>=35?e.name.substring(0,35)+"...":e.name,e.genres.length>=3?r.refs.popularFilms.insertAdjacentHTML("beforeend",`<li class="popular-film__card"  data-id="${e.id}" >\n          <img \n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <button class="btn-youtube" data-id="${e.id}">\n            <img class="icon-youtube" src="https://i.ibb.co/17hSwCj/youtube.png" alt="Button Youtube" />\n          </button>\n          <div class="info">\n            <p class="info__name">${t}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year}</p>\n          </div>\n        </li>`):r.refs.popularFilms.insertAdjacentHTML("beforeend",`<li class="popular-film__card"  data-id="${e.id}">\n      <img \n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <button class="btn-youtube" data-id="${e.id}">\n            <img class="icon-youtube" src="https://i.ibb.co/17hSwCj/youtube.png" alt="Button Youtube" />\n          </button>\n      <div class="info">\n        <p class="info__name">${t}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}</p>\n      </div\n    </li>`)}))}l(r.refs.totalPages,r.refs.currentPage),r.refs.pagination.addEventListener("click",(async function(e){u=r.refs.searchInput.value?await s(r.refs.searchInput.value,e.target.dataset.id):await d(e.target.dataset.id);return r.refs.currentPage=+e.target.dataset.id,l(r.refs.totalPages,r.refs.currentPage),u})),o("UL92Z"),d(1);r=o("4Nugj");const f=document.querySelector(".header__error");let p;f.textContent="",r.refs.searchForm.addEventListener("submit",(()=>{event.preventDefault(),l(r.refs.totalPages,1),async function(e){if(r.refs.currentPage=1,""===r.refs.searchInput.value.trim())return f.textContent="Please, enter the name of the movie",void r.refs.searchForm.reset();s(r.refs.searchInput.value.trim(),1)}()})),r.refs.searchForm.addEventListener("submit",(async function e(t){r.refs.searchInput.value?p=await s(r.refs.searchInput.value,t.target.dataset.id):console.log(e);return l(r.refs.totalPages,r.refs.currentPage),p}));var m,g="Expected a function",v=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,y=/^0o[0-7]+$/i,$=parseInt,E="object"==typeof t&&t&&t.Object===Object&&t,_="object"==typeof self&&self&&self.Object===Object&&self,w=E||_||Function("return this")(),L=Object.prototype.toString,T=Math.max,x=Math.min,O=function(){return w.Date.now()};function S(e,t,n){var a,o,i,r,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(g);function p(t){var n=a,i=o;return a=o=void 0,l=t,r=e.apply(i,n)}function m(e){return l=e,s=setTimeout(b,t),u?p(e):r}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function b(){var e=O();if(v(e))return h(e);s=setTimeout(b,function(e){var n=t-(e-c);return d?x(n,i-(e-l)):n}(e))}function h(e){return s=void 0,f&&a?p(e):(a=o=void 0,r)}function y(){var e=O(),n=v(e);if(a=arguments,o=this,c=e,n){if(void 0===s)return m(c);if(d)return s=setTimeout(b,t),p(c)}return void 0===s&&(s=setTimeout(b,t)),r}return t=B(t)||0,j(n)&&(u=!!n.leading,i=(d="maxWait"in n)?T(B(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,a=c=o=s=void 0},y.flush=function(){return void 0===s?r:h(O())},y}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function B(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==L.call(e)}(e))return NaN;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(v,"");var n=h.test(e);return n||y.test(e)?$(e.slice(2),n?2:8):b.test(e)?NaN:+e}m=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError(g);return j(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:a,maxWait:t,trailing:o})};var C;r=o("4Nugj");window.addEventListener("scroll",e(m)((C=r.refs.upBtn,function(){pageYOffset<document.documentElement.clientHeight||!1===r.refs.modalFooter.classList.contains("visibility-hidden")?C.classList.add("visually-hidden"):C.classList.remove("visually-hidden")}),250)),r.refs.upBtn.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),o("5YNLl");i=o("5g02X"),r=o("4Nugj");var D=o("UL92Z");let k={},A=(0,D.getFromStorage)("watched"),W=(0,D.getFromStorage)("queue");function q(){r.refs.backdrop.classList.add("is-hidden"),document.removeEventListener("keydown",H),r.refs.backdrop.removeEventListener("click",U),document.body.classList.remove("stop-scrolling")}function F(){(0,D.getFromStorage)("watched")&&(A=(0,D.getFromStorage)("watched")),(0,D.getFromStorage)("queue")&&(W=(0,D.getFromStorage)("queue"))}function M(e){if(!k.id)return alert("Movie not find");F(),A.find((e=>e.id===k.id))?(!function(e){const t=JSON.parse(localStorage.getItem("watched")),n=t.find((t=>t.id===e.id));t.splice(t.indexOf(n),1),localStorage.removeItem("watched"),localStorage.setItem("watched",JSON.stringify(t))}(k),r.refs.toWatchedBtn.textContent="ADD TO WATCHED",r.refs.toWatchedBtn.classList.add("current-btn")):(A.push(k),(0,D.addToStorage)("watched",A),r.refs.toWatchedBtn.textContent="REMOVE WATCHED",r.refs.toWatchedBtn.classList.remove("current-btn"))}function N(e){if(!k.id)return alert("Movie not find");F(),W.find((e=>e.id===k.id))?(!function(e){const t=JSON.parse(localStorage.getItem("queue")),n=t.find((t=>t.id===e.id));t.splice(t.indexOf(n),1),localStorage.removeItem("queue"),localStorage.setItem("queue",JSON.stringify(t))}(k),r.refs.toQueueBtn.textContent="ADD TO QUEUE",r.refs.toQueueBtn.classList.add("current-btn")):(W.push(k),(0,D.addToStorage)("queue",W),r.refs.toQueueBtn.textContent="REMOVE QUEUE",r.refs.toQueueBtn.classList.remove("current-btn"))}function H(e){"Escape"===e.key&&q()}function U(e){"backdrop"===e.target.className&&q()}r.refs.popularFilms.addEventListener("click",(async function(e){if(e.preventDefault(),!e.target.closest(".popular-film__card"))return;if(e.target.closest(".btn-youtube"))return;const t=await(0,i.fetchById)(e.target.closest(".popular-film__card").dataset.id);r.refs.modalContainer.innerHTML="",r.refs.modalContainer.insertAdjacentHTML("beforeend",`<div id="${t.id}" class="movie-card">\n        <img src="${t.cover}" alt="${t.name}" loading="lazy" class='movie-cover'>\n    \n        <div class="movie-info">\n            <h2 class='movie-title'>${t.name}</h2>\n            <p class='text'>Vote/Votes <span class='back-info movie-votes'><span class='movie-rating'>${t.rating.toFixed(2)}</span>/ ${t.votes}</span></p>\n             <p class='text'>Popularity <span class='back-info movie-popular'>${t.popularity}</span></p>\n             <p class='text'>Original Title <span class='back-info back-info-text org-title'>${t.originalTitle}</span></p>\n            <p class='text'>Genre <span class='back-info back-info-text movie-genre'>${t.genres.join(", ")}</span></p>\n            <p class='about-title'>About</p>\n            <p class='movie-description'>${t.about}</p>\n         </div>\n         </div>\n         <div class='modal-btns-wrapper'>\n         <button type="button" class="modal-btn watched">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>\n    </div>`),function(){r.refs.backdrop.classList.remove("is-hidden"),r.refs.modal.classList.add("active");document.querySelector(".watched").addEventListener("click",M);document.querySelector(".queue").addEventListener("click",N),document.addEventListener("keydown",H),r.refs.backdrop.addEventListener("click",U),document.body.classList.add("stop-scrolling")}(),k=t,r.refs.youtubeBtn.dataset.id=k.id,r.refs.toWatchedBtn=document.querySelector(".watched"),r.refs.toQueueBtn=document.querySelector(".queue"),void(A.find((e=>e.id===k.id))?r.refs.toWatchedBtn.textContent="REMOVE WATCHED":r.refs.toWatchedBtn.textContent="ADD TO WATCHED"),void(W.find((e=>e.id===k.id))?r.refs.toQueueBtn.textContent="REMOVE QUEUE":r.refs.toQueueBtn.textContent="ADD TO QUEUE"),"ADD TO WATCHED"===r.refs.toWatchedBtn.textContent&&r.refs.toWatchedBtn.classList.add("current-btn");"ADD TO QUEUE"===r.refs.toQueueBtn.textContent&&r.refs.toQueueBtn.classList.add("current-btn")})),r.refs.modalCloseBtn.addEventListener("click",(function(){q()})),o("4smAb"),o("3m4bX"),o("1xm6a"),o("iw7AK"),o("fv7Uc"),o("cDXQO")}();
//# sourceMappingURL=index.8c38698b.js.map
