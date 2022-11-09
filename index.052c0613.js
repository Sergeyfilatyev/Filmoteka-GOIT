!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire634e;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire634e=a),a("5g02X");var i=a("5g02X"),o=a("4Nugj");a("5g02X");o=a("4Nugj"),i=a("5g02X"),o=a("4Nugj");async function s(e,t){const n=await(0,i.fetchByName)(e,t),r=document.querySelector(".header__form"),a=document.querySelector(".header__error");if(0===n.movies.length)return a.textContent="There is no movie for your query",void r.reset();o.refs.popularFilms.innerHTML="",n.movies.forEach((e=>{let t;t=document.documentElement.scrollWidth>=768&&e.name.length>=30?e.name.substring(0,30)+"...":e.name,e.genres.length>=3?o.refs.popularFilms.insertAdjacentHTML("beforeend",`<li class="popular-film__card"  data-id="${e.id}">\n          <img \n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          \n          <div class="info">\n            <p class="info__name">${t}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year} <span class="info__rating">${e.rating}</span></p>\n          </div>\n        </li>`):o.refs.popularFilms.insertAdjacentHTML("beforeend",`<li class="popular-film__card"  data-id="${e.id}" >\n      <img \n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n     \n      <div class="info">\n        <p class="info__name">${t}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}<span class="info__rating">${e.rating}</span></p>\n      </div>\n    </li>`)}))}const c=document.querySelector(".pagination__list");function l(e,t){let n,r="",a=t-1,i=t+1;t>1&&(r+=`<li class="btn prev" data-id="${a}"\n\n      \n    >&#60 Prev</li>`),t>2&&(r+='<li class="numb" data-id = "1" >\n        1\n      </li>',t>3&&(r+='<li class="dots">\n          ...\n        </li>')),t==e?a-=2:t==e-1&&(a-=1),1==t?i+=2:2==t&&(i+=1);for(let o=a;o<=i;o++)o>e||(0==o&&(o+=1),n=t==o?"active":"",r+=`<li\n        class="numb ${n}" data-id="${o}"\n  \n      >\n        ${o}\n      </li>`);t<e-1&&(t<e-2&&(r+='<li class="dots">\n          ...\n        </li>'),r+=`<li class="numb" data-id="${e}" >\n        ${e}\n      </li>`),t<e&&(r+=`<li class="btn next" data-id = "${t+1}" >Next &#62\n</li>`),1===e&&(o.refs.pagination.innerHTML=""),c.innerHTML=r,window.scrollTo({top:0,behavior:"smooth"})}let d;async function u(e){o.refs.popularFilms.innerHTML="";(await(0,i.fetchPopular)(e)).movies.forEach((e=>{let t;t=document.documentElement.scrollWidth>=768&&e.name.length>=30?e.name.substring(0,30)+"...":e.name,e.genres.length>=3?o.refs.popularFilms.insertAdjacentHTML("beforeend",`<li class="popular-film__card"  data-id="${e.id}" >\n          <img \n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          \n          <div class="info">\n            <p class="info__name">${t}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year}</p>\n          </div>\n        </li>`):o.refs.popularFilms.insertAdjacentHTML("beforeend",`<li class="popular-film__card"  data-id="${e.id}">\n      <img \n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      \n      <div class="info">\n        <p class="info__name">${t}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}</p>\n      </div\n    </li>`)}))}l(o.refs.totalPages,o.refs.currentPage),o.refs.pagination.addEventListener("click",(async function(e){d=o.refs.searchInput.value?await s(o.refs.searchInput.value,e.target.dataset.id):await u(e.target.dataset.id);return o.refs.currentPage=+e.target.dataset.id,l(o.refs.totalPages,o.refs.currentPage),d})),u(1);o=a("4Nugj");const f=document.querySelector(".header__error");f.textContent="",o.refs.searchForm.addEventListener("submit",(()=>{event.preventDefault(),l(o.refs.totalPages,1),async function(e){if(o.refs.currentPage=1,""===o.refs.searchInput.value.trim())return f.textContent="Please, enter the name of the movie",void o.refs.searchForm.reset();s(o.refs.searchInput.value.trim(),1)}()})),o.refs.searchForm.addEventListener("submit",(async function e(t){o.refs.searchInput.value?markupPagination=await s(o.refs.searchInput.value,t.target.dataset.id):console.log(e);return l(o.refs.totalPages,o.refs.currentPage),markupPagination})),a("4Nugj");var p,m="Expected a function",g=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,b=/^0o[0-7]+$/i,y=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,$=_||E||Function("return this")(),T=Object.prototype.toString,L=Math.max,w=Math.min,x=function(){return $.Date.now()};function O(e,t,n){var r,a,i,o,s,c,l=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError(m);function p(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function g(e){return l=e,s=setTimeout(h,t),d?p(e):o}function v(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-l>=i}function h(){var e=x();if(v(e))return b(e);s=setTimeout(h,function(e){var n=t-(e-c);return u?w(n,i-(e-l)):n}(e))}function b(e){return s=void 0,f&&r?p(e):(r=a=void 0,o)}function y(){var e=x(),n=v(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return g(c);if(u)return s=setTimeout(h,t),p(c)}return void 0===s&&(s=setTimeout(h,t)),o}return t=S(t)||0,D(n)&&(d=!!n.leading,i=(u="maxWait"in n)?L(S(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},y.flush=function(){return void 0===s?o:b(x())},y}function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==T.call(e)}(e))return NaN;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(g,"");var n=h.test(e);return n||b.test(e)?y(e.slice(2),n?2:8):v.test(e)?NaN:+e}p=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(m);return D(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),O(e,t,{leading:r,maxWait:t,trailing:a})};var j;o=a("4Nugj");window.addEventListener("scroll",e(p)((j=o.refs.upBtn,function(){pageYOffset<document.documentElement.clientHeight||!1===o.refs.modalFooter.classList.contains("visibility-hidden")?j.classList.add("visually-hidden"):j.classList.remove("visually-hidden")}),250)),o.refs.upBtn.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),a("5YNLl");i=a("5g02X"),o=a("4Nugj");var k=a("UL92Z");let B={},C=(0,k.getFromStorage)("watched"),q=(0,k.getFromStorage)("queue");function N(){o.refs.backdrop.classList.add("is-hidden"),document.removeEventListener("keydown",W),o.refs.backdrop.removeEventListener("click",H),document.body.classList.remove("stop-scrolling")}function A(){(0,k.getFromStorage)("watched")&&(C=(0,k.getFromStorage)("watched")),(0,k.getFromStorage)("queue")&&(q=(0,k.getFromStorage)("queue"))}function F(e){if(!B.id)return alert("Movie not find");A(),C.find((e=>e.id===B.id))?(!function(e){const t=JSON.parse(localStorage.getItem("watched")),n=t.find((t=>t.id===e.id));t.splice(t.indexOf(n),1),localStorage.removeItem("watched"),localStorage.setItem("watched",JSON.stringify(t))}(B),o.refs.toWatchedBtn.textContent="ADD TO WATCHED",o.refs.toWatchedBtn.classList.add("current-btn")):(C.push(B),(0,k.addToStorage)("watched",C),o.refs.toWatchedBtn.textContent="REMOVE WATCHED",o.refs.toWatchedBtn.classList.remove("current-btn"))}function M(e){if(!B.id)return alert("Movie not find");A(),q.find((e=>e.id===B.id))?(!function(e){const t=JSON.parse(localStorage.getItem("queue")),n=t.find((t=>t.id===e.id));t.splice(t.indexOf(n),1),localStorage.removeItem("queue"),localStorage.setItem("queue",JSON.stringify(t))}(B),o.refs.toQueueBtn.textContent="ADD TO QUEUE",o.refs.toQueueBtn.classList.add("current-btn")):(q.push(B),(0,k.addToStorage)("queue",q),o.refs.toQueueBtn.textContent="REMOVE QUEUE",o.refs.toQueueBtn.classList.remove("current-btn"))}function W(e){"Escape"===e.key&&N()}function H(e){"backdrop"===e.target.className&&N()}o.refs.popularFilms.addEventListener("click",(async function(e){if(e.preventDefault(),!e.target.closest(".popular-film__card"))return;const t=await(0,i.fetchById)(e.target.closest(".popular-film__card").dataset.id);o.refs.modalContainer.innerHTML="",o.refs.modalContainer.insertAdjacentHTML("beforeend",`<div id="${t.id}" class="movie-card">\n        <img src="${t.cover}" alt="${t.name}" loading="lazy" class='movie-cover'>\n    \n        <div class="movie-info">\n            <h2 class='movie-title'>${t.name}</h2>\n            <p class='text'>Vote/Votes <span class='back-info movie-votes'><span class='movie-rating'>${t.rating.toFixed(2)}</span>/ ${t.votes}</span></p>\n             <p class='text'>Popularity <span class='back-info movie-popular'>${t.popularity}</span></p>\n             <p class='text'>Original Title <span class='back-info back-info-text org-title'>${t.originalTitle}</span></p>\n            <p class='text'>Genre <span class='back-info back-info-text movie-genre'>${t.genres.join(", ")}</span></p>\n            <p class='about-title'>About</p>\n            <p class='movie-description'>${t.about}</p>\n         </div>\n         </div>\n         <div class='modal-btns-wrapper'>\n         <button type="button" class="modal-btn watched">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>\n    </div>`),function(){o.refs.backdrop.classList.remove("is-hidden"),o.refs.modal.classList.add("active");document.querySelector(".watched").addEventListener("click",F);document.querySelector(".queue").addEventListener("click",M),document.addEventListener("keydown",W),o.refs.backdrop.addEventListener("click",H),document.body.classList.add("stop-scrolling")}(),B=t,o.refs.youtubeBtn.dataset.id=B.id,o.refs.toWatchedBtn=document.querySelector(".watched"),o.refs.toQueueBtn=document.querySelector(".queue"),void(C.find((e=>e.id===B.id))?o.refs.toWatchedBtn.textContent="REMOVE WATCHED":o.refs.toWatchedBtn.textContent="ADD TO WATCHED"),void(q.find((e=>e.id===B.id))?o.refs.toQueueBtn.textContent="REMOVE QUEUE":o.refs.toQueueBtn.textContent="ADD TO QUEUE"),"ADD TO WATCHED"===o.refs.toWatchedBtn.textContent&&o.refs.toWatchedBtn.classList.add("current-btn");"ADD TO QUEUE"===o.refs.toQueueBtn.textContent&&o.refs.toQueueBtn.classList.add("current-btn")})),o.refs.modalCloseBtn.addEventListener("click",(function(){N()})),a("3m4bX"),a("cDXQO")}();
//# sourceMappingURL=index.052c0613.js.map