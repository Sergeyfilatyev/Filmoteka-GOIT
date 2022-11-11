import { refs } from './refs';

import './modal-movie';

export function renderWatchedFilms() {
  refs.watchedFilmsList.innerHTML = '';
  const watchedFilms = JSON.parse(localStorage.getItem('watched'));

  watchedFilms.forEach(movie => {
    let name;

    if (document.documentElement.scrollWidth >= 768) {
      name =
        movie.name.length >= 30
          ? movie.name.substring(0, 30) + '...'
          : movie.name;
    } else name = movie.name;

    if (movie.genres.length >= 3) {
      refs.watchedFilmsList.insertAdjacentHTML(
        'beforeend',
        `<li class="popular-film__card"  data-id="${movie.id}" >
          <img 
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <button aria-label="show movie" class="btn-youtube" data-id="${movie.id}">
            <img class="icon-youtube" src="https://i.ibb.co/17hSwCj/youtube.png" alt="Button Youtube" />
          </button>
          <div class="info">
            <p class="info__name">${name}</p>
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year}</p>
          </div>
        </li>`
      );
      return;
    }
    refs.watchedFilmsList.insertAdjacentHTML(
      'beforeend',
      `<li class="popular-film__card"  data-id="${movie.id}">
      <img 
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <button aria-label="show movie" class="btn-youtube" data-id="${movie.id}">
            <img class="icon-youtube" src="https://i.ibb.co/17hSwCj/youtube.png" alt="Button Youtube" />
          </button>
      <div class="info">
        <p class="info__name">${name}</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div
    </li>`
    );
  });
}

export function renderQueueFilms() {
  refs.watchedFilmsList.innerHTML = '';
  const queueFilms = JSON.parse(localStorage.getItem('queue'));

  queueFilms.forEach(movie => {
    let name;

    if (document.documentElement.scrollWidth >= 768) {
      name =
        movie.name.length >= 30
          ? movie.name.substring(0, 30) + '...'
          : movie.name;
    } else name = movie.name;

    if (movie.genres.length >= 3) {
      refs.watchedFilmsList.insertAdjacentHTML(
        'beforeend',
        `<li class="popular-film__card"  data-id="${movie.id}" >
          <img 
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <button aria-label="show movie" class="btn-youtube" data-id="${movie.id}">
            <img class="icon-youtube" src="https://i.ibb.co/17hSwCj/youtube.png" alt="Button Youtube" />
          </button>
          <div class="info">
            <p class="info__name">${name}</p>
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year}</p>
          </div>
        </li>`
      );
      return;
    }
    refs.watchedFilmsList.insertAdjacentHTML(
      'beforeend',
      `<li class="popular-film__card"  data-id="${movie.id}">
      <img 
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <button aria-label="show movie" class="btn-youtube" data-id="${movie.id}">
            <img class="icon-youtube" src="https://i.ibb.co/17hSwCj/youtube.png" alt="Button Youtube" />
          </button>
      <div class="info">
        <p class="info__name">${name}</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div
    </li>`
    );
  });
}
