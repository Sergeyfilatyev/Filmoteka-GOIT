const headerWatchedButton = document.querySelector('.header__watched_button');
const headerQueueButton = document.querySelector('.header__queue_button');

headerWatchedButton.addEventListener('click', () => {
  if (headerWatchedButton.classList.contains('active-header-button')) {
    return;
  }

  headerWatchedButton.classList.add('active-header-button');
  headerQueueButton.classList.remove('active-header-button');
});

headerQueueButton.addEventListener('click', () => {
  if (headerQueueButton.classList.contains('active-header-button')) {
    return;
  }

  headerQueueButton.classList.add('active-header-button');
  headerWatchedButton.classList.remove('active-header-button');
});
