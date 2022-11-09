export const refs = {
  upBtn: document.querySelector('[data-up-btn]'),
  popularFilms: document.querySelector('.popular-films'),
  headerWatchedButton: document.querySelector('.header__watched_button'),
  headerQueueButton: document.querySelector('.header__queue_button'),
  searchForm: document.querySelector('.header__form'),
  searchInput: document.querySelector('.header__input'),

  openModalFooter: document.querySelector('[data-modal-footer-open]'),
  closeModalFooter: document.querySelector('[data-modal-footer-close]'),
  modalFooter: document.querySelector('[data-modal-footer]'),

  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal-btn-close'),
  youtubeBtn: document.querySelector('.youtube-btn'),

  modalContainer: document.querySelector('.modal-container'),

  toWatchedBtn: document.querySelector('.watched'),
  toQueueBtn: document.querySelector('.queue'),
  pagination: document.querySelector('.pagination'),
  currentPage: 1,

  login: document.querySelector('.btn-login'),
  loginModal: document.querySelector('.modalAuthor-wrapper'),
  totalPages: 1000,
  type: '',

  watchedFilmsList: document.querySelector('.watchedFilms'),

  body: document.querySelector('body'),
  darkThemeBtn: document.querySelector('[data-theme-dark]'),
  lightThemeBtn: document.querySelector('[data-theme-light]'),
};
