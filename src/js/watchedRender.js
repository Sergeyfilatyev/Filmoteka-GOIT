import { refs } from './refs';

export { renderWatchedFilms, renderQueueFilms };
function renderWatchedFilms() {
  refs.watchedFilmsList.innerHTML = '';
  const watchedFilms = JSON.parse(localStorage.getItem('watched'));

  watchedFilms.forEach(movie => {
    let name;

    if (document.documentElement.scrollWidth >= 768) {
      name =
        movie.name.length >= 35
          ? movie.name.substring(0, 35) + '...'
          : movie.name;
    } else name = movie.name;

    if (movie.genres.length >= 3) {
      refs.watchedFilmsList.insertAdjacentHTML(
        'beforeend',
        `<a class="watched-film__card" href="" data-id="${movie.id}" >
          <img 
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <div class="info">
            <p class="info__name">${name}</p>
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year}</p>
          </div>
        </a>`
      );
      return;
    }
    refs.watchedFilmsList.insertAdjacentHTML(
      'beforeend',
      `<a class="watched-film__card" href="" data-id="${movie.id}">
      <img 
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <div class="info">
        <p class="info__name">${name}</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div
    </a>`
    );
  });
}

function renderQueueFilms() {
  refs.watchedFilmsList.innerHTML = '';
  const queueFilms = JSON.parse(localStorage.getItem('queue'));

  queueFilms.forEach(movie => {
    let name;

    if (document.documentElement.scrollWidth >= 768) {
      name =
        movie.name.length >= 35
          ? movie.name.substring(0, 35) + '...'
          : movie.name;
    } else name = movie.name;

    if (movie.genres.length >= 3) {
      refs.watchedFilmsList.insertAdjacentHTML(
        'beforeend',
        `<a class="watched-film__card" href="" data-id="${movie.id}" >
          <img 
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <div class="info">
            <p class="info__name">${name}</p>
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year}</p>
          </div>
        </a>`
      );
      return;
    }
    refs.watchedFilmsList.insertAdjacentHTML(
      'beforeend',
      `<a class="watched-film__card" href="" data-id="${movie.id}">
      <img 
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <div class="info">
        <p class="info__name">${name}</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div
    </a>`
    );
  });
}
