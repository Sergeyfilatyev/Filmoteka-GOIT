import { refs } from './refs';
import { renderWatchedFilms, renderQueueFilms } from './watchedRender';
// const headerWatchedButton = document.querySelector('.header__watched_button');
// const headerQueueButton = document.querySelector('.header__queue_button');

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
    <img src="/Filmoteka-GOIT/desert.049350d2.png" alt="no films img" />
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
    <img src="/Filmoteka-GOIT/desert.049350d2.png" alt="no films img" />
    <span class="empty-page_text">There are no films here yet</span>
  </div>
    `;
  }
  document.querySelector('.spinner').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.spinner').style.display = 'none';
  }, 700);
});
