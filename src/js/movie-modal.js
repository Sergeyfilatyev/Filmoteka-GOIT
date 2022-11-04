function onMovieImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  openModal();
}

function openModal() {}
function closeModal() {}
function onCloseBtnClick() {}

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
