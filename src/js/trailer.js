const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { fetchTrailer } from './fetch';
import { refs } from './refs';

if (refs.header.classList.contains('header__library')) {
  refs.watchedFilmsList.addEventListener('click', modalTrailerStart);
  refs.watchedFilmsList.addEventListener('click', mainTrailerStart);
} else {
  refs.popularFilms.addEventListener('click', modalTrailerStart);
  refs.popularFilms.addEventListener('click', mainTrailerStart);
}
refs.modal.addEventListener('click', modalTrailerStart);
async function mainTrailerStart(event) {
  if (!event.target.closest('.btn-youtube')) {
    return;
  }

  const result = await fetchTrailer(
    event.target.closest('.btn-youtube').dataset.id
  );

  if (result.data.results.length !== 0) {
    const trailerId = result.data.results.find(
      result => result.type === 'Trailer'
    ).key;

    const instance = basicLightbox.create(`
      <iframe src="https://www.youtube.com/embed/${trailerId}" width="850" height="515" frameborder="0"></iframe>
  `);
    instance.show();
  } else {
    const instance = basicLightbox.create(`
      <p style="color:white">No trailer for this film</p>
  `);
    instance.show();
  }
}

async function modalTrailerStart(event) {
  if (!event.target.closest('.youtube-btn')) {
    return;
  }

  const result = await fetchTrailer(
    event.target.closest('.youtube-btn').dataset.id
  );

  if (result.data.results.length !== 0) {
    const trailerId = result.data.results.find(
      result => result.type === 'Trailer'
    ).key;

    const instance = basicLightbox.create(`
      <iframe src="https://www.youtube.com/embed/${trailerId}" width="850" height="515" frameborder="0"></iframe>
  `);
    instance.show();
  } else {
    const instance = basicLightbox.create(`
      <p style="color:white">No trailer for this film</p>
  `);
    instance.show();
  }
}
