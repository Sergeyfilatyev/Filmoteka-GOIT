// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';
import { fetchTrailer } from './fetch';
import { refs } from './refs';

refs.popularFilms.addEventListener('click', trailerStart);
refs.modal.addEventListener('click', trailerStart);

async function trailerStart(event) {
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
      <iframe src="https://www.youtube.com/embed/${trailerId}" width="760" height="515" frameborder="0"></iframe>
  `);
    instance.show();
  } else {
    const instance = basicLightbox.create(`
      <p style="color:white">No trailer for this film</p>
  `);
    instance.show();
  }
}
