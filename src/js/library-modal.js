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
  event.preventDefault();
  if (!event.target.closest('.watched-film__card')) {
    return;
  }

  const movie = await fetchById(
    event.target.closest('.watched-film__card').dataset.id
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
         <button type="button" class="modal-btn current-btn watched">ADD TO WATCHED</button>
    <button type="button" class="modal-btn queue">ADD TO QUEUE</button>
    </div>`
  );

  openModal();
  movieForStorage = movie;
  refs.youtubeBtn.dataset.id = movieForStorage.id;

  if (
    document
      .querySelector('.header__watched_button')
      .classList.contains('active-header-button')
  ) {
    const watchedDelete = document.querySelector('.watched');
    watchedDelete.textContent = 'REMOVE WATCHED';
    watchedDelete.addEventListener('click', () => {
      deleteWatchedFilm(movie);
    });
    const addToQueue = document.querySelector('.queue');
    addToQueue.addEventListener('click', onQueuedBtnClick);
  } else {
    const queueDelete = document.querySelector('.queue');
    queueDelete.textContent = 'REMOVE QUEUE';
    queueDelete.addEventListener('click', () => {
      deleteQueueFilm(movie);
    });
    const addToWatched = document.querySelector('.watched');
    addToWatched.addEventListener('click', onWatchedBtnClick);
  }
}

function openModal() {
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.add('active');
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('stop-scrolling');
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('stop-scrolling');
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
    <span class="empty-page_text">There are no films here yet</span>
    
      <img
        src="./images/my-library/desert.png"
        width="600"
        alt="no films img"
      />
    
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
    <img src="/Filmoteka-GOIT/desert.049350d2.png" alt="no films img" />
    <span class="empty-page_text">There are no films here yet</span>
  </div>
    `;
      }

      closeModal();
    }
  });
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
