import { fetchPopular } from './js/fetch';
import { markupPopularFilms } from './js/markup-popular-films';
import { markupSearchFilms } from './js/markup-search-films';
import './js/btn-up';
// import './js/s'

const searchForm = document.querySelector('.header__form');
const searchInput = document.querySelector('.header__input');

searchForm.addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();

  if (searchInput.value.trim() === '') {
    return;
  }

  markupSearchFilms(searchInput.value.trim(), 1);
}

markupPopularFilms(1);
