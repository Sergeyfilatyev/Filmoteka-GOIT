import { fetchPopular } from './js/fetch';
// export async function fetchById(id);

const refs = {
  modal: document.querySelector('.backdrop'),
  modalCloseBtn: document.querySelector('.modal-btn-close'),
  toWatchedBtn: document.querySelector('.watched'),
  toQueueBtn: document.querySelector('.queue'),
};
refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);

function onMovieImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  openModal();
}

function openModal() {
  refs.modal.classList.remove('is-hidden');
}
function closeModal() {
  refs.modal.classList.add('is-hidden');
}
function onCloseBtnClick() {
  closeModal();
}

function renderMovieCard(movie) {
  const markup = movie
    .map(
      ({
        id,
        cover,
        name,
        votes,
        popularity,
        originalTitle,
        genres,
        about,
      }) => {
        return ` <div id="${id}" class="movie-card">
        <img src="${cover}" alt="${name}" loading="lazy">
        <div class="movie-info">
            <h2>${name}</h2>
            <p>Vote/Votes ${votes}</p>
            <p>Popularity ${popularity}</p>
            <p>Original Title ${originalTitle}</p>
            <p>Genre ${genres.map(genre => genre.name)}</p>
            <p>ABOUT ${about}</p>
        </div>
      </div>`;
      }
    )
    .join('');
}
