import { fetchPopular } from './fetch';
import { refs } from './refs';

import { addToStorage, getFromStorage } from './localStorage';

if (!getFromStorage('watched')) {
  addToStorage('watched', []);
}

if (!getFromStorage('queue')) {
  addToStorage('queue', []);
}

export async function markupPopularFilms(page) {
  refs.popularFilms.innerHTML = '';

  const films = await fetchPopular(page);
  console.log(films);
  films.movies.forEach(movie => {
    let name;

    if (document.documentElement.scrollWidth >= 1280) {
      name =
        movie.name.length >= 31
          ? movie.name.substring(0, 31) + '...'
          : movie.name;
    } else if (document.documentElement.scrollWidth >= 768) {
      name =
        movie.name.length >= 35
          ? movie.name.substring(0, 35) + '...'
          : movie.name;
    } else name = movie.name;

    if (movie.genres.length >= 3) {
      refs.popularFilms.insertAdjacentHTML(
        'beforeend',
        `<li class="popular-film__card"  data-id="${movie.id}" >
          <img
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <button aria-label="show movie" class="btn-youtube" data-id="${movie.id}">
            <img class="icon-youtube" src="https://i.ibb.co/LJVXwMV/youtube-1.png" alt="Button Youtube" />
          </button>
          <div class="info">
            <p class="info__name">${name}</p>
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year}</p>
          </div>
        </li>`
      );
      return;
    }
    refs.popularFilms.insertAdjacentHTML(
      'beforeend',
      `<li class="popular-film__card"  data-id="${movie.id}">
      <img
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <button aria-label="show movie" class="btn-youtube" data-id="${movie.id}">
            <img class="icon-youtube" src="https://i.ibb.co/LJVXwMV/youtube-1.png" alt="Button Youtube" />
          </button>
      <div class="info">
        <p class="info__name">${name}</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div
    </li>`
    );
  });
}

markupPopularFilms(1);
