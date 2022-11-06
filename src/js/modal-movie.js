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

let movie = {};
async function onMovieImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  console.log(event.target.dataset.id);
  // fetchById(event.target.dataset.id).then(console.log);
  movie = await fetchById(event.target.dataset.id);
  refs.modal.innerHTML = '';
  refs.modal.insertAdjacentHTML(
    'beforeend',
    ` <div id="${movie.id}" class="movie-card">
        <img src="${movie.cover}" alt="${
      movie.name
    }" loading="lazy" width='100' height='100'>
        <div class="movie-info">
            <h2>${movie.name}</h2>
            <p>Vote/Votes ${movie.votes}</p>
             <p>Popularity ${movie.popularity}</p>
             <p>Original Title ${movie.originalTitle}</p>
            <p>Genre ${movie.genres.join(', ')}</p>
            <p>ABOUT ${movie.about}</p>
         </div>
         <button type="button" class="modal-btn watched">ADD TO WATCHED</button>
    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>
      </div>`
  );
  openModal();
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
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
};


function onWatchedBtnClick(e) {
  if (!movie.id) {
    return alert('Movie not find');
  }
  checkLibraryStorage()
 
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
  checkLibraryStorage()
  if (filmsInQueue.find(film => film.id === movie.id)) {
    return;
  }
  filmsInQueue.push(movie);

  addToStorage('queue', filmsInQueue);
}