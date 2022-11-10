import { fetchById } from './fetch';
import { refs } from './refs';
import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';

import { renderWatchedFilms, renderQueueFilms } from './watchedRender';

let movieForStorage = {};
let filmsInWatched = getFromStorage('watched');
let filmsInQueue = getFromStorage('queue');

if (refs.header.classList.contains('header__library')) {
  refs.watchedFilmsList.addEventListener('click', onMovieImageClick);
  refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);
} else {
  refs.popularFilms.addEventListener('click', onMovieImageClick);
  refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);
}

async function onMovieImageClick(event) {
  event.preventDefault();

  if (event.target.closest('.btn-youtube')) {
    return;
  }

  if (!event.target.closest('.popular-film__card')) {
    return;
  }

  const movie = await fetchById(
    event.target.closest('.popular-film__card').dataset.id
  );

  refs.modalContainer.innerHTML = '';
  refs.modalContainer.insertAdjacentHTML(
    'beforeend',
    `<div id="${movie.id}" class="movie-card">
        <img src="${movie.cover}" alt="${
      movie.name
    }" loading="lazy" class='movie-cover'>
    
        <div class="movie-info">
            <h2 class='movie-title'>${movie.name}</h2>
            <p class='text'>Vote/Votes <span class='back-info movie-votes'><span class='movie-rating'>${movie.rating.toFixed(
              2
            )}</span>/ ${movie.votes}</span></p>
             <p class='text'>Popularity <span class='back-info movie-popular'>${
               movie.popularity
             }</span></p>
             <p class='text'>Original Title <span class='back-info back-info-text org-title'>${
               movie.originalTitle
             }</span></p>
            <p class='text'>Genre <span class='back-info back-info-text movie-genre'>${movie.genres.join(
              ', '
            )}</span></p>
            <p class='about-title'>About</p>
            <p class='movie-description'>${movie.about}</p>
         </div>
         </div>
         <div class='modal-btns-wrapper'>
         <button type="button" class="modal-btn watched">ADD TO WATCHED</button>
    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>
    </div>`
  );
  openModal();
  movieForStorage = movie;
  refs.youtubeBtn.dataset.id = movieForStorage.id;
  refs.toWatchedBtn = document.querySelector('.watched');
  refs.toQueueBtn = document.querySelector('.queue');

  addTextWatched();
  addTextQueue();
  if (refs.toWatchedBtn.textContent === 'ADD TO WATCHED') {
    refs.toWatchedBtn.classList.add('current-btn');
  }
  if (refs.toQueueBtn.textContent === 'ADD TO QUEUE') {
    refs.toQueueBtn.classList.add('current-btn');
  }
}

function openModal() {
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.add('active');
  const watchBtn = document.querySelector('.watched');
  watchBtn.addEventListener('click', onWatchedBtnClick);

  const queueBtn = document.querySelector('.queue');
  queueBtn.addEventListener('click', onQueuedBtnClick);

  document.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.addEventListener('click', onBackdropClick);
  document.body.classList.add('stop-scrolling');
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.removeEventListener('click', onBackdropClick);
  document.body.classList.remove('stop-scrolling');
}

function onCloseBtnClick() {
  closeModal();
}

function checkLibraryStorage() {
  if (getFromStorage('watched')) {
    filmsInWatched = getFromStorage('watched');
  }

  if (getFromStorage('queue')) {
    filmsInQueue = getFromStorage('queue');
  }
}

function onWatchedBtnClick(e) {
  if (!movieForStorage.id) {
    return alert('Movie not find');
  }
  checkLibraryStorage();

  if (filmsInWatched.find(film => film.id === movieForStorage.id)) {
    deleteWatchedFilm(movieForStorage);
    refs.toWatchedBtn.textContent = 'ADD TO WATCHED';
    refs.toWatchedBtn.classList.add('current-btn');
  } else {
    filmsInWatched.push(movieForStorage);
    addToStorage('watched', filmsInWatched);
    refs.toWatchedBtn.textContent = 'REMOVE WATCHED';
    refs.toWatchedBtn.classList.remove('current-btn');
  }

  if (
    refs.header.classList.contains('header__library') &&
    refs.headerWatchedButton.classList.contains('active-header-button')
  ) {
    renderWatchedFilms();
  }
}

function onQueuedBtnClick(e) {
  if (!movieForStorage.id) {
    return alert('Movie not find');
  }
  checkLibraryStorage();

  if (filmsInQueue.find(film => film.id === movieForStorage.id)) {
    deleteQueueFilm(movieForStorage);
    refs.toQueueBtn.textContent = 'ADD TO QUEUE';
    refs.toQueueBtn.classList.add('current-btn');
  } else {
    filmsInQueue.push(movieForStorage);
    addToStorage('queue', filmsInQueue);
    refs.toQueueBtn.textContent = 'REMOVE QUEUE';
    refs.toQueueBtn.classList.remove('current-btn');
  }

  if (
    refs.header.classList.contains('header__library') &&
    refs.headerQueueButton.classList.contains('active-header-button')
  ) {
    renderQueueFilms();
  }
}

function onEscKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(event) {
  const backdrop = event.target.className;
  if (backdrop === 'backdrop') {
    closeModal();
  }
}
function addTextWatched() {
  if (filmsInWatched.find(film => film.id === movieForStorage.id)) {
    refs.toWatchedBtn.textContent = 'REMOVE WATCHED';
  } else {
    refs.toWatchedBtn.textContent = 'ADD TO WATCHED';
  }
}
function addTextQueue() {
  if (filmsInQueue.find(film => film.id === movieForStorage.id)) {
    refs.toQueueBtn.textContent = 'REMOVE QUEUE';
  } else {
    refs.toQueueBtn.textContent = 'ADD TO QUEUE';
  }
}
function deleteWatchedFilm(data) {
  const films = JSON.parse(localStorage.getItem('watched'));
  const filmToDelete = films.find(film => film.id === data.id);
  films.splice(films.indexOf(filmToDelete), 1);
  localStorage.removeItem('watched');
  localStorage.setItem('watched', JSON.stringify(films));
}
function deleteQueueFilm(data) {
  const films = JSON.parse(localStorage.getItem('queue'));
  const filmToDelete = films.find(film => film.id === data.id);
  films.splice(films.indexOf(filmToDelete), 1);
  localStorage.removeItem('queue');
  localStorage.setItem('queue', JSON.stringify(films));
}
