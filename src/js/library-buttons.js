import { refs } from './refs';
import { renderWatchedFilms, renderQueueFilms } from './watchedRender';

refs.headerWatchedButton.addEventListener('click', () => {
  if (refs.headerWatchedButton.classList.contains('active-header-button')) {
    return;
  }

  refs.headerWatchedButton.classList.add('active-header-button');
  refs.headerQueueButton.classList.remove('active-header-button');
  if (
    localStorage.getItem('watched') &&
    localStorage.getItem('watched') !== '[]'
  ) {
    renderWatchedFilms();
  } else {
    refs.watchedFilmsList.innerHTML = `
    <div class="empty-page">
    <img src="/Filmoteka-GOIT/desert.8f266e6c.png" alt="no films img" width="600" />
    <span class="empty-page_text">There are no films here yet</span>
  </div>
    `;
  }
  document.querySelector('.spinner').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.spinner').style.display = 'none';
  }, 400);
});

refs.headerQueueButton.addEventListener('click', () => {
  if (refs.headerQueueButton.classList.contains('active-header-button')) {
    return;
  }

  refs.headerQueueButton.classList.add('active-header-button');
  refs.headerWatchedButton.classList.remove('active-header-button');
  if (localStorage.getItem('queue') && localStorage.getItem('queue') !== '[]') {
    renderQueueFilms();
  } else {
    refs.watchedFilmsList.innerHTML = `
    <div class="empty-page">
    <img src="/Filmoteka-GOIT/desert.8f266e6c.png" alt="no films img" width="600" />
    <span class="empty-page_text">There are no films here yet</span>
  </div>
    `;
  }
  document.querySelector('.spinner').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.spinner').style.display = 'none';
  }, 700);
});
