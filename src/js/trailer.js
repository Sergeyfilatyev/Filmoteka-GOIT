const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { fetchTrailer } from './fetch';

const trailerButton = document.querySelector('.trailer-button');

trailerButton.addEventListener('click', trailerStart);

async function trailerStart(event) {
  const id = event.target.dataset.id;
  const trailerId = await fetchTrailer(id);

  const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${trailerId}" width="760" height="515" frameborder="0"></iframe>
`);

  instance.show();
}
