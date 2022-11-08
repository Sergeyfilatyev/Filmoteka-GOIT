import { fetchPopular } from './fetch';
import { refs } from './refs';

export async function markupPopularFilms(page) {
  // const popularFilms = document.querySelector('.popular-films');
  refs.popularFilms.innerHTML = '';

  const films = await fetchPopular(page);

  films.movies.forEach(movie => {
    let name;

    if (document.documentElement.scrollWidth >= 768) {
      name =
        movie.name.length >= 35
          ? movie.name.substring(0, 35) + '...'
          : movie.name;
    } else name = movie.name;

    if (movie.genres.length >= 3) {
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
            <p class="info__name">${name}</p>
            <p class="info__other">${movie.genres[0]}, ${movie.genres[1]}, Other | ${movie.year}</p>
          </div>
        </a>`
      );
      return;
    }
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
        <p class="info__name">${name}</p>
        <p class="info__other">${movie.genres.join(', ')} | ${movie.year}</p>
      </div
    </a>`
    );
  });
}

markupPopularFilms(1);
