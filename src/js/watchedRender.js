import { refs } from './refs';

export { renderWatchedFilms, renderQueueFilms };
function renderWatchedFilms() {
  refs.watchedFilmsList.innerHTML = '';
  const watchedFilms = JSON.parse(localStorage.getItem('watched'));

  watchedFilms.forEach(movie => {
    if (movie.genres.length >= 3) {
      refs.watchedFilmsList.insertAdjacentHTML(
        'beforeend',
        `<div class="watched-film__card" >
          <img data-id="${movie.id}"
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <div class="info">
            <p class="info__name">${
              movie.name.length >= 40
                ? movie.name.substring(0, 40) + '...'
                : movie.name
            }</p>
            <p class="info__other">${movie.genres[0]}, ${
          movie.genres[1]
        }, Other | ${movie.year}</p>
          </div>
        </div>`
      );
      return;
    }
    refs.watchedFilmsList.insertAdjacentHTML(
      'beforeend',
      `<div class="watched-film__card" >
      <img data-id="${movie.id}"
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <div class="info">
        <p class="info__name">${
          movie.name.length >= 40
            ? movie.name.substring(0, 40) + '...'
            : movie.name
        }</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div
    </div>`
    );
  });
}

function renderQueueFilms() {
  refs.watchedFilmsList.innerHTML = '';
  const queueFilms = JSON.parse(localStorage.getItem('queue'));

  queueFilms.forEach(movie => {
    if (movie.genres.length >= 3) {
      refs.watchedFilmsList.insertAdjacentHTML(
        'beforeend',
        `<div class="watched-film__card"  >
          <img data-id="${movie.id}"
            class="popular-film__cover"
            src="${movie.cover}"
            alt="${movie.name}"
            loading="lazy"
          />
          <div class="info">
            <p class="info__name">${
              movie.name.length >= 40
                ? movie.name.substring(0, 40) + '...'
                : movie.name
            }</p>
            <p class="info__other">${movie.genres[0]}, ${
          movie.genres[1]
        }, Other | ${movie.year}</p>
          </div>
        </div>`
      );
      return;
    }
    refs.watchedFilmsList.insertAdjacentHTML(
      'beforeend',
      `<div class="watched-film__card" >
      <img data-id="${movie.id}"
        class="popular-film__cover"
        src="${movie.cover}"
        alt="${movie.name}"
        loading="lazy"
      />
      <div class="info">
        <p class="info__name">${
          movie.name.length >= 40
            ? movie.name.substring(0, 40) + '...'
            : movie.name
        }</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div
    </div>`
    );
  });
}
