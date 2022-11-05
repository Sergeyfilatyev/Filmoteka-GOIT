import { refs } from './refs';
// const headerWatchedButton = document.querySelector('.header__watched_button');
// const headerQueueButton = document.querySelector('.header__queue_button');

refs.headerWatchedButton.addEventListener('click', () => {
  if (refs.headerWatchedButton.classList.contains('active-header-button')) {
    return;
  }

  refs.headerWatchedButton.classList.add('active-header-button');
  refs.headerQueueButton.classList.remove('active-header-button');
});

refs.headerQueueButton.addEventListener('click', () => {
  if (refs.headerQueueButton.classList.contains('active-header-button')) {
    return;
  }

  refs.headerQueueButton.classList.add('active-header-button');
  refs.headerWatchedButton.classList.remove('active-header-button');
});
