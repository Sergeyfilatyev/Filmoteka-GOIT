import { fetchPopular } from './js/fetch';
import { markupPopularFilms } from './js/markup-popular-films';
import { markupSearchFilms } from './js/markup-search-films';
import { refs } from './js/refs';
import './js/btn-up';

// const searchForm = document.querySelector('.header__form');
// const searchInput = document.querySelector('.header__input');

refs.searchForm.addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();

  if (refs.searchInput.value.trim() === '') {
    return;
  }

  markupSearchFilms(refs.searchInput.value.trim(), 1);
}

markupPopularFilms(1);
