import { fetchByName } from './fetch';
import { refs } from './refs';

export async function markupSearchFilms(query, page) {
  // const popularFilms = document.querySelector('.popular-films');

  const films = await fetchByName(query, page);
  const searchForm = document.querySelector('.header__form');
  const textError = document.querySelector('.header__error');

  if (films.movies.length === 0) {
    textError.textContent = 'There is no movie for your query';
    searchForm.reset();
    return;
  }
  refs.popularFilms.innerHTML = '';

  films.movies.forEach(movie => {
    if (movie.genres.length >= 3) {
      refs.popularFilms.insertAdjacentHTML(
        'beforeend',
        `<a class="popular-film__card" href="">
          <img data-id="${movie.id}"
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <div class="info">
            <p class="info__name">${
              movie.name.length >= 50
                ? movie.name.substring(0, 50) + '...'
                : movie.name
            }</p>
            <p class="info__other">${movie.genres[0]}, ${
          movie.genres[1]
        }, Other | ${movie.year} <span class="info__rating">${
          movie.rating
        }</span></p>
          </div>
        </a>`
      );
      return;
    }
    refs.popularFilms.insertAdjacentHTML(
      'beforeend',
      `<a class="popular-film__card" href="" >
      <img data-id="${movie.id}"
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <div class="info">
        <p class="info__name">${
          movie.name.length >= 50
            ? movie.name.substring(0, 50) + '...'
            : movie.name
        }</p>
        <p class="info__other">${movie.genres.join(', ')} | ${
        movie.year
      }<span class="info__rating">${movie.rating}</span></p>
      </div>
    </a>`
    );
  });
}
