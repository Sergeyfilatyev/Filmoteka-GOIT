function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequire634e;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequire634e=i),i("cyIMT");var a=i("cyIMT"),o=i("krGWQ");async function s(e){o.refs.popularFilms.innerHTML="";(await(0,a.fetchPopular)(e)).movies.forEach((e=>{e.genres.length>=3?o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" >\n          <img data-id="${e.id}"\n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <div class="info">\n            <p class="info__name">${e.name.length>=40?e.name.substring(0,40)+"...":e.name}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year}</p>\n          </div>\n        </a>`):o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="">\n      <img data-id="${e.id}"\n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <div class="info">\n        <p class="info__name">${e.name.length>=40?e.name.substring(0,40)+"...":e.name}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}</p>\n      </div\n    </a>`)}))}s(1);a=i("cyIMT"),o=i("krGWQ");async function l(e,n){const t=await(0,a.fetchByName)(e,n),r=document.querySelector(".header__form"),i=document.querySelector(".header__error");if(0===t.movies.length)return i.textContent="There is no movie for your query",void r.reset();o.refs.popularFilms.innerHTML="",t.movies.forEach((e=>{e.genres.length>=3?o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="">\n          <img data-id="${e.id}"\n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <div class="info">\n            <p class="info__name">${e.name.length>=37?e.name.substring(0,37)+"...":e.name}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year} <span class="info__rating">${e.rating}</span></p>\n          </div>\n        </a>`):o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" >\n      <img data-id="${e.id}"\n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <div class="info">\n        <p class="info__name">${e.name.length>=37?e.name.substring(0,37)+"...":e.name}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}<span class="info__rating">${e.rating}</span></p>\n      </div>\n    </a>`)}))}o=i("krGWQ");i("cyIMT");o=i("krGWQ");const c=document.querySelector("ul");function d(e,n){let t,r="",i=n-1,a=n+1;n>1&&(r+=`<li class="btn prev" data-id="${i}"\n\n      \n    >&#60 Prev</li>`),n>2&&(r+='<li class="numb" data-id = "1" >\n        1\n      </li>',n>3&&(r+='<li class="dots">\n          ...\n        </li>')),n==e?i-=2:n==e-1&&(i-=1),1==n?a+=2:2==n&&(a+=1);for(let o=i;o<=a;o++)o>e||(0==o&&(o+=1),t=n==o?"active":"",r+=`<li\n        class="numb ${t}" data-id="${o}"\n  \n      >\n        ${o}\n      </li>`);n<e-1&&(n<e-2&&(r+='<li class="dots">\n          ...\n        </li>'),r+=`<li class="numb" data-id="${e}" >\n        ${e}\n      </li>`),n<e&&(r+=`<li class="btn next" data-id = "${a}" >Next &#62\n</li>`),c.innerHTML=r}d(20,o.refs.currentPage),console.log("hello"),o.refs.pagination.addEventListener("click",(async function(e){console.log(e.target.dataset.id);const n=await s(e.target.dataset.id);return o.refs.currentPage=+e.target.dataset.id,d(20,o.refs.currentPage),n}));const f=document.querySelector(".header__error");f.textContent="",o.refs.searchForm.addEventListener("submit",(async function(e){if(e.preventDefault(),o.refs.currentPage=1,""===o.refs.searchInput.value.trim())return f.textContent="Please, enter the name of the movie",void o.refs.searchForm.reset();l(o.refs.searchInput.value.trim(),1)})),i("krGWQ");var u,p=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,h=parseInt,y="object"==typeof n&&n&&n.Object===Object&&n,$="object"==typeof self&&self&&self.Object===Object&&self,b=y||$||Function("return this")(),_=Object.prototype.toString,T=Math.max,w=Math.min,L=function(){return b.Date.now()};function M(e,n,t){var r,i,a,o,s,l,c=0,d=!1,f=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(n){var t=r,a=i;return r=i=void 0,c=n,o=e.apply(a,t)}function m(e){return c=e,s=setTimeout(g,n),d?p(e):o}function v(e){var t=e-l;return void 0===l||t>=n||t<0||f&&e-c>=a}function g(){var e=L();if(v(e))return h(e);s=setTimeout(g,function(e){var t=n-(e-l);return f?w(t,a-(e-c)):t}(e))}function h(e){return s=void 0,u&&r?p(e):(r=i=void 0,o)}function y(){var e=L(),t=v(e);if(r=arguments,i=this,l=e,t){if(void 0===s)return m(l);if(f)return s=setTimeout(g,n),p(l)}return void 0===s&&(s=setTimeout(g,n)),o}return n=E(n)||0,j(t)&&(d=!!t.leading,a=(f="maxWait"in t)?T(E(t.maxWait)||0,n):a,u="trailing"in t?!!t.trailing:u),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?o:h(L())},y}function j(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==_.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var t=v.test(e);return t||g.test(e)?h(e.slice(2),t?2:8):m.test(e)?NaN:+e}u=function(e,n,t){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return j(t)&&(r="leading"in t?!!t.leading:r,i="trailing"in t?!!t.trailing:i),M(e,n,{leading:r,maxWait:n,trailing:i})};var O;o=i("krGWQ");window.addEventListener("scroll",e(u)((O=o.refs.upBtn,function(){pageYOffset<document.documentElement.clientHeight||!1===o.refs.modalFooter.classList.contains("visibility-hidden")?O.classList.add("visually-hidden"):O.classList.remove("visually-hidden")}),250)),o.refs.upBtn.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),i("bO1YF");a=i("cyIMT");(o=i("krGWQ")).refs.popularFilms.addEventListener("click",(async function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;console.log(e.target.dataset.id);const n=await(0,a.fetchById)(e.target.dataset.id);o.refs.modal.innerHTML="",o.refs.modal.insertAdjacentHTML("beforeend",` <div id="${n.id}" class="movie-card">\n        <img src="${n.cover}" alt="${n.name}" loading="lazy" width='100' height='100'>\n        <div class="movie-info">\n            <h2>${n.name}</h2>\n            <p>Vote/Votes ${n.votes}</p>\n             <p>Popularity ${n.popularity}</p>\n             <p>Original Title ${n.originalTitle}</p>\n            <p>Genre ${n.genres.join(", ")}</p>\n            <p>ABOUT ${n.about}</p>\n         </div>\n         <button type="button" class="modal-btn watched">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>\n      </div>`),o.refs.backdrop.classList.remove("is-hidden")})),o.refs.modalCloseBtn.addEventListener("click",(function(){o.refs.backdrop.classList.add("is-hidden")}));
//# sourceMappingURL=index.8c34e2e8.js.map
