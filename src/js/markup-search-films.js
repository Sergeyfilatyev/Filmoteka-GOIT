import { fetchByName } from './fetch';
import { refs } from './refs';

export async function markupSearchFilms(query, page) {
  // const popularFilms = document.querySelector('.popular-films');

  refs.popularFilms.innerHTML = '';

  const films = await fetchByName(query, page);

  films.movies.forEach(movie => {
    if (movie.genres.length >= 3) {
      refs.popularFilms.insertAdjacentHTML(
        'beforeend',
        `<div class="popular-film__card" data="${movie.id}">
          <img
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <div class="info">
            <p class="info__name">${movie.name}</p>
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year} <span class="info__rating">${movie.rating}</span></p>
          </div>
        </div>`
      );
      return;
    }
    refs.popularFilms.insertAdjacentHTML(
      'beforeend',
      `<div class="popular-film__card" data="${movie.id}">
      <img
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <div class="info">
        <p class="info__name">${movie.name}</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div>
    </div>`
    );
  });
}
