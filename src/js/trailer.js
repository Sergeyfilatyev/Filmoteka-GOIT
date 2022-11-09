const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { fetchTrailer } from './fetch';
import { refs } from './refs';

// если у хедера есть класс вот этот, значит мы на странице библиотеки
if (refs.header.classList.contains('header__library')) {
  // это мой список фильмов
  refs.watchedFilmsList.addEventListener('click', trailerStart);
} else {
  refs.popularFilms.addEventListener('click', trailerStart);
}
// модалка у нас одна и та же
refs.modal.addEventListener('click', trailerStart);

async function trailerStart(event) {
  if (!event.target.closest('.youtube-btn')) {
    return;
  }

  const result = await fetchTrailer(
    event.target.closest('.youtube-btn').dataset.id
  );

  console.log(result);

  if (result.data.results.length !== 0) {
    const trailerId = result.data.results.find(
      result => result.type === 'Trailer'
    ).key;
    console.log(trailerId);
    // да

    const instance = basicLightbox.create(`
      <iframe src="https://www.youtube.com/embed/${trailerId}" width="760" height="515" frameborder="0"></iframe>
  `);
    instance.show();
    // как будто это не запускается
  } else {
    const instance = basicLightbox.create(`
      <p style="color:white">No trailer for this film</p>
  `);
    instance.show();
  }
}
