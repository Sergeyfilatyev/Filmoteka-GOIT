import { refs } from './refs';
import { renderWatchedFilms, renderQueueFilms } from './watchedRender';

if (
  localStorage.getItem('watched') &&
  localStorage.getItem('watched') !== '[]'
) {
  renderWatchedFilms();
}
document.querySelector('.spinner').style.display = 'none';
