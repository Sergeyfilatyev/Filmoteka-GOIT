const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { fetchTrailer } from './fetch';
import { refs } from './refs';

refs.popularFilms.addEventListener('click', trailerStart);
refs.modal.addEventListener('click', trailerStart);

async function trailerStart(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const trailerId = await fetchTrailer(event.target.dataset.id);

  const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${trailerId}" width="760" height="515" frameborder="0"></iframe>
`);

  instance.show();
}
