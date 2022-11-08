import { fetchById } from './fetch';
import { refs } from './refs';
import { renderWatchedFilms, renderQueueFilms } from './watchedRender';
import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';

let movieForStorage = {};
let filmsInWatched = [];
let filmsInQueue = [];

refs.watchedFilmsList.addEventListener('click', onMovieImageClick);
refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);

async function onMovieImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

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

  if (
    document
      .querySelector('.header__watched_button')
      .classList.contains('active-header-button')
  ) {
    const watchedDelete = document.querySelector('.watched');
    watchedDelete.textContent = 'DELETE';
    watchedDelete.addEventListener('click', () => {
      deleteWatchedFilm(movie);
    });
    const addToQueue = document.querySelector('.queue');
    addToQueue.addEventListener('click', onQueuedBtnClick);
  } else {
    const queueDelete = document.querySelector('.queue');
    queueDelete.textContent = 'DELETE';
    queueDelete.addEventListener('click', () => {
      deleteQueueFilm(movie);
    });
    const addToWatched = document.querySelector('.watched');
    addToWatched.addEventListener('click', onWatchedBtnClick);
  }
}

function openModal() {
  refs.backdrop.classList.remove('is-hidden');

  window.addEventListener('keydown', onEscKeyPress);
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
}
function onCloseBtnClick() {
  closeModal();
}

document.querySelector('.backdrop').addEventListener('click', event => {
  if (event.target.classList.contains('backdrop')) {
    closeModal();
  }
});

function deleteWatchedFilm(data) {
  const films = JSON.parse(localStorage.getItem('watched'));

  films.forEach((film, index) => {
    if (film.id === data.id) {
      films.splice(index, 1);
      localStorage.setItem('watched', JSON.stringify(films));
      if (
        localStorage.getItem('watched') &&
        localStorage.getItem('watched') !== '[]'
      ) {
        renderWatchedFilms();
      } else {
        refs.watchedFilmsList.innerHTML = `
    <div class="empty-page">
    <img src="/Filmoteka-GOIT/empty.9c479684.jpg" alt="no films img" />
    <span class="empty-page_text">There are no films here yet</span>
  </div>
    `;
      }

      closeModal();
    }
  });
}

function deleteQueueFilm(data) {
  const films = JSON.parse(localStorage.getItem('queue'));

  films.forEach((film, index) => {
    if (film.id === data.id) {
      films.splice(index, 1);
      localStorage.setItem('queue', JSON.stringify(films));
      if (
        localStorage.getItem('queue') &&
        localStorage.getItem('queue') !== '[]'
      ) {
        renderQueueFilms();
      } else {
        refs.watchedFilmsList.innerHTML = `
    <div class="empty-page">
    <img src="/Filmoteka-GOIT/empty.9c479684.jpg" alt="no films img" />
    <span class="empty-page_text">There are no films here yet</span>
  </div>
    `;
      }

      closeModal();
    }
  });
}

//?   то что добавил к Леры файлу moda-movie ========================================================================

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
