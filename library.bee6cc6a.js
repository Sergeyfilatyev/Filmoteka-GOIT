var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire634e;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequire634e=n),n("cyIMT");var r=n("krGWQ"),s=n("4F9gs");r.refs.headerWatchedButton.addEventListener("click",(()=>{r.refs.headerWatchedButton.classList.contains("active-header-button")||(r.refs.headerWatchedButton.classList.add("active-header-button"),r.refs.headerQueueButton.classList.remove("active-header-button"),localStorage.getItem("watched")&&"[]"!==localStorage.getItem("watched")?(0,s.renderWatchedFilms)():r.refs.watchedFilmsList.innerHTML='\n    <div class="empty-page">\n    <img src="/Filmoteka-GOIT/desert.8f266e6c.png" alt="no films img" width="600" />\n    <span class="empty-page_text">There are no films here yet</span>\n  </div>\n    ',document.querySelector(".spinner").style.display="flex",setTimeout((()=>{document.querySelector(".spinner").style.display="none"}),400))})),r.refs.headerQueueButton.addEventListener("click",(()=>{r.refs.headerQueueButton.classList.contains("active-header-button")||(r.refs.headerQueueButton.classList.add("active-header-button"),r.refs.headerWatchedButton.classList.remove("active-header-button"),localStorage.getItem("queue")&&"[]"!==localStorage.getItem("queue")?(0,s.renderQueueFilms)():r.refs.watchedFilmsList.innerHTML='\n    <div class="empty-page">\n    <img src="/Filmoteka-GOIT/desert.8f266e6c.png" alt="no films img" width="600" />\n    <span class="empty-page_text">There are no films here yet</span>\n  </div>\n    ',document.querySelector(".spinner").style.display="flex",setTimeout((()=>{document.querySelector(".spinner").style.display="none"}),700))})),n("krGWQ");s=n("4F9gs");localStorage.getItem("watched")&&"[]"!==localStorage.getItem("watched")&&(0,s.renderWatchedFilms)(),document.querySelector(".spinner").style.display="none",n("4F9gs"),n("bO1YF"),n("cWlmT"),n("aAveg"),n("37v9V"),n("ioBS9");
//# sourceMappingURL=library.bee6cc6a.js.map
