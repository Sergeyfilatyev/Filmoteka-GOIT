!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequire634e;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequire634e=i),i("5g02X");var a=i("5g02X"),o=i("4Nugj");!async function(e){o.refs.popularFilms.innerHTML="",(await(0,a.fetchPopular)(e)).movies.forEach((e=>{e.genres.length>=3?o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" >\n          <img data-id="${e.id}"\n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <div class="info">\n            <p class="info__name">${e.name.length>=40?e.name.substring(0,40)+"...":e.name}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year}</p>\n          </div>\n        </a>`):o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="">\n      <img data-id="${e.id}"\n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <div class="info">\n        <p class="info__name">${e.name.length>=40?e.name.substring(0,40)+"...":e.name}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}</p>\n      </div\n    </a>`)}))}(1);a=i("5g02X"),o=i("4Nugj");async function s(e,n){const t=await(0,a.fetchByName)(e,n),r=document.querySelector(".header__form"),i=document.querySelector(".header__error");if(0===t.movies.length)return i.textContent="There is no movie for your query",void r.reset();o.refs.popularFilms.innerHTML="",t.movies.forEach((e=>{e.genres.length>=3?o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="">\n          <img data-id="${e.id}"\n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <div class="info">\n            <p class="info__name">${e.name.length>=37?e.name.substring(0,37)+"...":e.name}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year} <span class="info__rating">${e.rating}</span></p>\n          </div>\n        </a>`):o.refs.popularFilms.insertAdjacentHTML("beforeend",`<a class="popular-film__card" href="" >\n      <img data-id="${e.id}"\n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <div class="info">\n        <p class="info__name">${e.name.length>=37?e.name.substring(0,37)+"...":e.name}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}<span class="info__rating">${e.rating}</span></p>\n      </div>\n    </a>`)}))}o=i("4Nugj");const l=document.querySelector(".header__error");l.textContent="",o.refs.searchForm.addEventListener("submit",(async function(e){if(e.preventDefault(),""===o.refs.searchInput.value.trim())return l.textContent="Please, enter the name of the movie",void o.refs.searchForm.reset();s(o.refs.searchInput.value.trim(),1)})),i("4Nugj");var c,f="Expected a function",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof n&&n&&n.Object===Object&&n,h="object"==typeof self&&self&&self.Object===Object&&self,y=g||h||Function("return this")(),_=Object.prototype.toString,b=Math.max,$=Math.min,T=function(){return y.Date.now()};function j(e,n,t){var r,i,a,o,s,l,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(f);function m(n){var t=r,a=i;return r=i=void 0,c=n,o=e.apply(a,t)}function v(e){return c=e,s=setTimeout(h,n),u?m(e):o}function g(e){var t=e-l;return void 0===l||t>=n||t<0||d&&e-c>=a}function h(){var e=T();if(g(e))return y(e);s=setTimeout(h,function(e){var t=n-(e-l);return d?$(t,a-(e-c)):t}(e))}function y(e){return s=void 0,p&&r?m(e):(r=i=void 0,o)}function _(){var e=T(),t=g(e);if(r=arguments,i=this,l=e,t){if(void 0===s)return v(l);if(d)return s=setTimeout(h,n),m(l)}return void 0===s&&(s=setTimeout(h,n)),o}return n=L(n)||0,w(t)&&(u=!!t.leading,a=(d="maxWait"in t)?b(L(t.maxWait)||0,n):a,p="trailing"in t?!!t.trailing:p),_.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},_.flush=function(){return void 0===s?o:y(T())},_}function w(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function L(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==_.call(e)}(e))return NaN;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var t=p.test(e);return t||m.test(e)?v(e.slice(2),t?2:8):d.test(e)?NaN:+e}c=function(e,n,t){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(f);return w(t)&&(r="leading"in t?!!t.leading:r,i="trailing"in t?!!t.trailing:i),j(e,n,{leading:r,maxWait:n,trailing:i})};var O;o=i("4Nugj");window.addEventListener("scroll",e(c)((O=o.refs.upBtn,function(){pageYOffset<document.documentElement.clientHeight||!1===o.refs.modalFooter.classList.contains("visibility-hidden")?O.classList.add("visually-hidden"):O.classList.remove("visually-hidden")}),250)),o.refs.upBtn.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),i("5YNLl");a=i("5g02X");(o=i("4Nugj")).refs.popularFilms.addEventListener("click",(async function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;console.log(e.target.dataset.id);const n=await(0,a.fetchById)(e.target.dataset.id);o.refs.modal.innerHTML="",o.refs.modal.insertAdjacentHTML("beforeend",` <div id="${n.id}" class="movie-card">\n        <img src="${n.cover}" alt="${n.name}" loading="lazy" width='100' height='100'>\n        <div class="movie-info">\n            <h2>${n.name}</h2>\n            <p>Vote/Votes ${n.votes}</p>\n             <p>Popularity ${n.popularity}</p>\n             <p>Original Title ${n.originalTitle}</p>\n            <p>Genre ${n.genres.join(", ")}</p>\n            <p>ABOUT ${n.about}</p>\n         </div>\n         <button type="button" class="modal-btn watched">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>\n      </div>`),o.refs.backdrop.classList.remove("is-hidden")})),o.refs.modalCloseBtn.addEventListener("click",(function(){o.refs.backdrop.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.077708a7.js.map