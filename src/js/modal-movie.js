import { fetchById } from './fetch';
import { refs } from './refs';
import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';

let movieForStorage = {};
let filmsInWatched = [];
let filmsInQueue = [];

refs.popularFilms.addEventListener('click', onMovieImageClick);
refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);

async function onMovieImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.youtubeBtn.dataset.id = event.target.dataset.id;
  // console.log(event.target.dataset.id);
  // console.log(refs.youtubeBtn.dataset.id);

  const movie = await fetchById(event.target.dataset.id);
  console.log(movie);
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
         <button type="button" class="modal-btn current-btn watched">ADD TO WATCHED</button>
    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>
    </div>`
  );
  openModal();
  movieForStorage = movie;
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
    return;
  }
  filmsInWatched.push(movieForStorage);

  addToStorage('watched', filmsInWatched);
}

function onQueuedBtnClick(e) {
  if (!movieForStorage.id) {
    return alert('Movie not find');
  }
  checkLibraryStorage();
  if (filmsInQueue.find(film => film.id === movieForStorage.id)) {
    return;
  }
  filmsInQueue.push(movieForStorage);

  addToStorage('queue', filmsInQueue);
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
