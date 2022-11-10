import { fetchPopular } from './fetch';
import { refs } from './refs';
import { createPagination } from './pagination
import { addToStorage, getFromStorage } from './localStorage';

if (!getFromStorage('watched')) {
  addToStorage('watched', []);
}

if (!getFromStorage('queue')) {
  addToStorage('queue', []);
}



export async function markupPopularFilms(page) {
  // const popularFilms = document.querySelector('.popular-films');
  refs.popularFilms.innerHTML = '';

  const films = await fetchPopular(page);

  films.movies.forEach(movie => {
    let name;

    if (document.documentElement.scrollWidth >= 1280) {
      name =
        movie.name.length >= 33
          ? movie.name.substring(0, 33) + '...'
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
          <button class="btn-youtube" data-id="${movie.id}">
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
    refs.popularFilms.insertAdjacentHTML(
      'beforeend',
      `<li class="popular-film__card"  data-id="${movie.id}">
      <img 
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <button class="btn-youtube" data-id="${movie.id}">
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

markupPopularFilms(1);
