var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire634e;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire634e=a),a("cyIMT");var s=a("krGWQ");function i(){s.refs.watchedFilmsList.innerHTML="";JSON.parse(localStorage.getItem("watched")).forEach((e=>{let t;t=document.documentElement.scrollWidth>=768&&e.name.length>=30?e.name.substring(0,30)+"...":e.name,e.genres.length>=3?s.refs.watchedFilmsList.insertAdjacentHTML("beforeend",`<a class="watched-film__card" href="" data-id="${e.id}" >\n          <img \n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <div class="info">\n            <p class="info__name">${t}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year}</p>\n          </div>\n        </a>`):s.refs.watchedFilmsList.insertAdjacentHTML("beforeend",`<a class="watched-film__card" href="" data-id="${e.id}">\n      <img \n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <div class="info">\n        <p class="info__name">${t}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}</p>\n      </div\n    </a>`)}))}function r(){s.refs.watchedFilmsList.innerHTML="";JSON.parse(localStorage.getItem("queue")).forEach((e=>{let t;t=document.documentElement.scrollWidth>=768&&e.name.length>=30?e.name.substring(0,30)+"...":e.name,e.genres.length>=3?s.refs.watchedFilmsList.insertAdjacentHTML("beforeend",`<a class="watched-film__card" href="" data-id="${e.id}" >\n          <img \n            class="popular-film__cover"\n            src="${e.cover}"\n            alt="${e.name}"\n            loading="lazy"\n          />\n          <div class="info">\n            <p class="info__name">${t}</p>\n            <p class="info__other">${e.genres[0]}, ${e.genres[1]}, Other | ${e.year}</p>\n          </div>\n        </a>`):s.refs.watchedFilmsList.insertAdjacentHTML("beforeend",`<a class="watched-film__card" href="" data-id="${e.id}">\n      <img \n        class="popular-film__cover"\n        src="${e.cover}"\n        alt="${e.name}"\n        loading="lazy"\n      />\n      <div class="info">\n        <p class="info__name">${t}</p>\n        <p class="info__other">${e.genres.join(", ")} | ${e.year}</p>\n      </div\n    </a>`)}))}(s=a("krGWQ")).refs.headerWatchedButton.addEventListener("click",(()=>{s.refs.headerWatchedButton.classList.contains("active-header-button")||(s.refs.headerWatchedButton.classList.add("active-header-button"),s.refs.headerQueueButton.classList.remove("active-header-button"),localStorage.getItem("watched")&&"[]"!==localStorage.getItem("watched")?i():s.refs.watchedFilmsList.innerHTML='\n    <div class="empty-page">\n    <img src="/Filmoteka-GOIT/desert.8f266e6c.png" alt="no films img" width="600" />\n    <span class="empty-page_text">There are no films here yet</span>\n  </div>\n    ',document.querySelector(".spinner").style.display="flex",setTimeout((()=>{document.querySelector(".spinner").style.display="none"}),400))})),s.refs.headerQueueButton.addEventListener("click",(()=>{s.refs.headerQueueButton.classList.contains("active-header-button")||(s.refs.headerQueueButton.classList.add("active-header-button"),s.refs.headerWatchedButton.classList.remove("active-header-button"),localStorage.getItem("queue")&&"[]"!==localStorage.getItem("queue")?r():s.refs.watchedFilmsList.innerHTML='\n    <div class="empty-page">\n    <img src="/Filmoteka-GOIT/desert.8f266e6c.png" alt="no films img" width="600" />\n    <span class="empty-page_text">There are no films here yet</span>\n  </div>\n    ',document.querySelector(".spinner").style.display="flex",setTimeout((()=>{document.querySelector(".spinner").style.display="none"}),700))})),a("krGWQ"),localStorage.getItem("watched")&&"[]"!==localStorage.getItem("watched")&&i(),document.querySelector(".spinner").style.display="none";var o=a("cyIMT"),c=(s=a("krGWQ"),a("31u3U"));let l={},d=[],m=[];function u(){s.refs.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",h),document.body.classList.remove("stop-scrolling")}function f(){(0,c.getFromStorage)("watched")&&(d=(0,c.getFromStorage)("watched")),(0,c.getFromStorage)("queue")&&(m=(0,c.getFromStorage)("queue"))}function p(e){if(!l.id)return alert("Movie not find");f(),d.find((e=>e.id===l.id))||(d.push(l),(0,c.addToStorage)("watched",d))}function g(e){if(!l.id)return alert("Movie not find");f(),m.find((e=>e.id===l.id))||(m.push(l),(0,c.addToStorage)("queue",m))}function h(e){"Escape"===e.key&&u()}s.refs.watchedFilmsList.addEventListener("click",(async function(e){if(e.preventDefault(),!e.target.closest(".watched-film__card"))return;const t=await(0,o.fetchById)(e.target.closest(".watched-film__card").dataset.id);if(s.refs.modalContainer.innerHTML="",s.refs.modalContainer.insertAdjacentHTML("beforeend",`<div id="${t.id}" class="movie-card">\n        <img src="${t.cover}" alt="${t.name}" loading="lazy" class='movie-cover'>\n    \n        <div class="movie-info">\n            <h2 class='movie-title'>${t.name}</h2>\n            <p class='text'>Vote/Votes <span class='back-info movie-votes'><span class='movie-rating'>${t.rating.toFixed(2)}</span>/ ${t.votes}</span></p>\n             <p class='text'>Popularity <span class='back-info movie-popular'>${t.popularity}</span></p>\n             <p class='text'>Original Title <span class='back-info back-info-text org-title'>${t.originalTitle}</span></p>\n            <p class='text'>Genre <span class='back-info back-info-text movie-genre'>${t.genres.join(", ")}</span></p>\n            <p class='about-title'>About</p>\n            <p class='movie-description'>${t.about}</p>\n         </div>\n         </div>\n         <div class='modal-btns-wrapper'>\n         <button type="button" class="modal-btn current-btn watched">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>\n    </div>`),function(){s.refs.backdrop.classList.remove("is-hidden"),s.refs.modal.classList.add("active"),window.addEventListener("keydown",h),document.body.classList.add("stop-scrolling")}(),l=t,s.refs.youtubeBtn.dataset.id=l.id,document.querySelector(".header__watched_button").classList.contains("active-header-button")){const e=document.querySelector(".watched");e.textContent="REMOVE WATCHED",e.addEventListener("click",(()=>{!function(e){const t=JSON.parse(localStorage.getItem("watched"));t.forEach(((n,a)=>{n.id===e.id&&(t.splice(a,1),localStorage.setItem("watched",JSON.stringify(t)),localStorage.getItem("watched")&&"[]"!==localStorage.getItem("watched")?i():s.refs.watchedFilmsList.innerHTML='\n     <div class="empty-page">\n    <img src="/Filmoteka-GOIT/desert.8f266e6c.png" alt="no films img" width="600" />\n    <span class="empty-page_text">There are no films here yet</span>\n  </div>\n    ',u())}))}(t)}));document.querySelector(".queue").addEventListener("click",g)}else{const e=document.querySelector(".queue");e.textContent="REMOVE QUEUE",e.addEventListener("click",(()=>{!function(e){const t=JSON.parse(localStorage.getItem("queue"));t.forEach(((n,a)=>{n.id===e.id&&(t.splice(a,1),localStorage.setItem("queue",JSON.stringify(t)),localStorage.getItem("queue")&&"[]"!==localStorage.getItem("queue")?r():s.refs.watchedFilmsList.innerHTML='\n    <div class="empty-page">\n    <img src="/Filmoteka-GOIT/desert.8f266e6c.png" alt="no films img" width="600" />\n    <span class="empty-page_text">There are no films here yet</span>\n  </div>\n    ',u())}))}(t)}));document.querySelector(".watched").addEventListener("click",p)}})),s.refs.modalCloseBtn.addEventListener("click",(function(){u()})),document.querySelector(".backdrop").addEventListener("click",(e=>{e.target.classList.contains("backdrop")&&u()})),a("bO1YF"),a("aAveg"),a("37v9V"),a("ioBS9");
//# sourceMappingURL=library.2e381834.js.map
