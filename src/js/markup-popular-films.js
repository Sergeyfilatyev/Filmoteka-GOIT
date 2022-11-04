import { fetchPopular } from './fetch';

export async function markupPopularFilms(page) {
  const popularFilms = document.querySelector('.popular-films');
  popularFilms.innerHTML = '';

  const films = await fetchPopular(page);

  films.movies.forEach(movie => {
    if (movie.genres.length >= 3) {
      popularFilms.insertAdjacentHTML(
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
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year}</p>
          </div>
        </div>`
      );
      return;
    }
    popularFilms.insertAdjacentHTML(
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
