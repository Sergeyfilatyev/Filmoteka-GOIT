import { fetchByName } from './fetch';
import { refs } from './refs';

export async function markupSearchFilms(query, page) {
  const films = await fetchByName(query, page);
  const searchForm = document.querySelector('.header__form');
  const textError = document.querySelector('.header__error');

  if (films.movies.length === 0) {
    textError.textContent = 'There is no movie for your query';
    searchForm.reset();
    return;
  } else textError.textContent = '';

  refs.popularFilms.innerHTML = '';

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
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year} <span class="info__rating">${movie.rating}</span></p>
          </div>
        </li>`
      );
      return;
    }
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
        <p class="info__other">${movie.genres.join(', ')} | ${
        movie.year
      }<span class="info__rating">${movie.rating}</span></p>
      </div>
    </li>`
    );
  });
}
