import { fetchById } from './fetch';
import { refs } from './refs';
import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';

//let filmsInWatched = [];

refs.popularFilms.addEventListener('click', onMovieImageClick);
refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);

async function onMovieImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  console.log(event.target.dataset.id);

  const movie = await fetchById(event.target.dataset.id);

  refs.modalContainer.innerHTML = '';
  refs.modalContainer.insertAdjacentHTML(
    'beforeend',
    `<div id="${movie.id}" class="movie-card">
        <img src="${movie.cover}" alt="${
      movie.name
    }" loading="lazy" class='movie-cover'>
    
        <div class="movie-info">
            <h2 class='movie-title'>${movie.name}</h2>
            <p class='text'>Vote/Votes <span class='back-info movie-votes'><span class='movie-rating'>${
              movie.rating
            }</span>/ ${movie.votes}</span></p>
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
}

function openModal() {
  refs.backdrop.classList.remove('is-hidden');
  document.addEventListener('keydown', onEscKeyPress);
  const watchedBtn = document.querySelector('.watched');
  watchedBtn.addEventListener('click');

  const queueBtn = document.querySelector('.queue');
  queueBtn.addEventListener('click');
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscKeyPress);

  // const watchedBtn = document.querySelector('.watched');
  // // watchedBtn.removeEventListener('');

  // const queueBtn = document.querySelector('.queue');
  // queueBtn.removeEventListener('');
}
function onCloseBtnClick() {
  closeModal();
}

//?   то что добавил к Леры файлу moda-movie ========================================================================
let filmsInWatched = [];
let filmsInQueue = [];

function openModal() {
  refs.backdrop.classList.remove('is-hidden');
  const watchBtn = document.querySelector('.watched');
  watchBtn.addEventListener('click', onWatchedBtnClick);

  const queueBtn = document.querySelector('.queue');
  queueBtn.addEventListener('click', onQueuedBtnClick);
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
  if (!movie.id) {
    return alert('Movie not find');
  }
  checkLibraryStorage();

  if (filmsInWatched.find(film => film.id === movie.id)) {
    return;
  }
  filmsInWatched.push(movie);

  addToStorage('watched', filmsInWatched);
}

function onQueuedBtnClick(e) {
  if (!movie.id) {
    return alert('Movie not find');
  }
  checkLibraryStorage();
  if (filmsInQueue.find(film => film.id === movie.id)) {
    return;
  }
  filmsInQueue.push(movie);

  addToStorage('queue', filmsInQueue);
}

function onEscKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
