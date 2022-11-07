!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=n.parcelRequire634e;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequire634e=i),i("5g02X");var r=i("5g02X"),o=i("4Nugj");async function s(e){o.refs.popularFilms.innerHTML="";(await(0,r.fetchPopular)(e)).movies.forEach((e=>{e.genres.length>=3?o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" >\n          <img data-id="${e.id}"\n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <div class="info">\n            <p class="info__name">${e.name.length>=40?e.name.substring(0,40)+"...":e.name}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year}</p>\n          </div>\n        </a>`):o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="">\n      <img data-id="${e.id}"\n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <div class="info">\n        <p class="info__name">${e.name.length>=40?e.name.substring(0,40)+"...":e.name}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}</p>\n      </div\n    </a>`)}))}s(1);r=i("5g02X"),o=i("4Nugj");async function l(e,n){const t=await(0,r.fetchByName)(e,n),a=document.querySelector(".header__form"),i=document.querySelector(".header__error");if(0===t.movies.length)return i.textContent="There is no movie for your query",void a.reset();o.refs.popularFilms.innerHTML="",t.movies.forEach((e=>{e.genres.length>=3?o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="">\n          <img data-id="${e.id}"\n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <div class="info">\n            <p class="info__name">${e.name.length>=37?e.name.substring(0,37)+"...":e.name}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year} <span class="info__rating">${e.rating}</span></p>\n          </div>\n        </a>`):o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" >\n      <img data-id="${e.id}"\n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <div class="info">\n        <p class="info__name">${e.name.length>=37?e.name.substring(0,37)+"...":e.name}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}<span class="info__rating">${e.rating}</span></p>\n      </div>\n    </a>`)}))}o=i("4Nugj");i("5g02X");o=i("4Nugj");const c=document.querySelector("ul");function d(e,n){let t,a="",i=n-1,r=n+1;n>1&&(a+=`<li class="btn prev" data-id="${i}"\n\n      \n    >&#60 Prev</li>`),n>2&&(a+='<li class="numb" data-id = "1" >\n        1\n      </li>',n>3&&(a+='<li class="dots">\n          ...\n        </li>')),n==e?i-=2:n==e-1&&(i-=1),1==n?r+=2:2==n&&(r+=1);for(let o=i;o<=r;o++)o>e||(0==o&&(o+=1),t=n==o?"active":"",a+=`<li\n        class="numb ${t}" data-id="${o}"\n  \n      >\n        ${o}\n      </li>`);n<e-1&&(n<e-2&&(a+='<li class="dots">\n          ...\n        </li>'),a+=`<li class="numb" data-id="${e}" >\n        ${e}\n      </li>`),n<e&&(a+=`<li class="btn next" data-id = "${r}" >Next &#62\n</li>`),c.innerHTML=a}d(20,o.refs.currentPage),console.log("hello"),o.refs.pagination.addEventListener("click",(async function(e){console.log(e.target.dataset.id);const n=await s(e.target.dataset.id);return o.refs.currentPage=+e.target.dataset.id,d(20,o.refs.currentPage),n}));const u=document.querySelector(".header__error");u.textContent="",o.refs.searchForm.addEventListener("submit",(async function(e){if(e.preventDefault(),""===o.refs.searchInput.value.trim())return u.textContent="Please, enter the name of the movie",void o.refs.searchForm.reset();l(o.refs.searchInput.value.trim(),1)})),i("4Nugj");var f,p="Expected a function",m=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,h=/^0o[0-7]+$/i,b=parseInt,y="object"==typeof n&&n&&n.Object===Object&&n,$="object"==typeof self&&self&&self.Object===Object&&self,_=y||$||Function("return this")(),T=Object.prototype.toString,w=Math.max,L=Math.min,j=function(){return _.Date.now()};function x(e,n,t){var a,i,r,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError(p);function m(n){var t=a,r=i;return a=i=void 0,c=n,o=e.apply(r,t)}function v(e){return c=e,s=setTimeout(h,n),d?m(e):o}function g(e){var t=e-l;return void 0===l||t>=n||t<0||u&&e-c>=r}function h(){var e=j();if(g(e))return b(e);s=setTimeout(h,function(e){var t=n-(e-l);return u?L(t,r-(e-c)):t}(e))}function b(e){return s=void 0,f&&a?m(e):(a=i=void 0,o)}function y(){var e=j(),t=g(e);if(a=arguments,i=this,l=e,t){if(void 0===s)return v(l);if(u)return s=setTimeout(h,n),m(l)}return void 0===s&&(s=setTimeout(h,n)),o}return n=N(n)||0,E(t)&&(d=!!t.leading,r=(u="maxWait"in t)?w(N(t.maxWait)||0,n):r,f="trailing"in t?!!t.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=i=s=void 0},y.flush=function(){return void 0===s?o:b(j())},y}function E(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function N(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==T.call(e)}(e))return NaN;if(E(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=E(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var t=g.test(e);return t||h.test(e)?b(e.slice(2),t?2:8):v.test(e)?NaN:+e}f=function(e,n,t){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(p);return E(t)&&(a="leading"in t?!!t.leading:a,i="trailing"in t?!!t.trailing:i),x(e,n,{leading:a,maxWait:n,trailing:i})};var k;o=i("4Nugj");window.addEventListener("scroll",e(f)((k=o.refs.upBtn,function(){pageYOffset<document.documentElement.clientHeight||!1===o.refs.modalFooter.classList.contains("visibility-hidden")?k.classList.add("visually-hidden"):k.classList.remove("visually-hidden")}),250)),o.refs.upBtn.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),i("5YNLl");r=i("5g02X"),o=i("4Nugj");var F=i("UL92Z");let M={};function O(){o.refs.backdrop.classList.add("is-hidden"),document.removeEventListener("keydown",C)}o.refs.popularFilms.addEventListener("click",(async function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;console.log(e.target.dataset.id);const n=await(0,r.fetchById)(e.target.dataset.id);o.refs.modalContainer.innerHTML="",o.refs.modalContainer.insertAdjacentHTML("beforeend",`<div id="${n.id}" class="movie-card">\n        <img src="${n.cover}" alt="${n.name}" loading="lazy" class='movie-cover'>\n    \n        <div class="movie-info">\n            <h2 class='movie-title'>${n.name}</h2>\n            <p class='text'>Vote/Votes <span class='back-info movie-votes'><span class='movie-rating'>${n.rating}</span>/ ${n.votes}</span></p>\n             <p class='text'>Popularity <span class='back-info movie-popular'>${n.popularity}</span></p>\n             <p class='text'>Original Title <span class='back-info back-info-text org-title'>${n.originalTitle}</span></p>\n            <p class='text'>Genre <span class='back-info back-info-text movie-genre'>${n.genres.join(", ")}</span></p>\n            <p class='about-title'>About</p>\n            <p class='movie-description'>${n.about}</p>\n         </div>\n         </div>\n         <div class='modal-btns-wrapper'>\n         <button type="button" class="modal-btn current-btn watched">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>\n    </div>`),function(){o.refs.backdrop.classList.remove("is-hidden");document.querySelector(".watched").addEventListener("click",D);document.querySelector(".queue").addEventListener("click",A)}(),M=n})),o.refs.modalCloseBtn.addEventListener("click",(function(){O()}));let q=[],S=[];function H(){(0,F.getFromStorage)("watched")&&(q=(0,F.getFromStorage)("watched")),(0,F.getFromStorage)("queue")&&(S=(0,F.getFromStorage)("queue"))}function D(e){if(!M.id)return alert("Movie not find");H(),q.find((e=>e.id===M.id))||(q.push(M),(0,F.addToStorage)("watched",q))}function A(e){if(!M.id)return alert("Movie not find");H(),S.find((e=>e.id===M.id))||(S.push(M),(0,F.addToStorage)("queue",S))}function C(e){"Escape"===e.key&&O()}}();
//# sourceMappingURL=index.f761a768.js.map