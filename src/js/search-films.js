import { refs } from './refs';
import { markupSearchFilms } from './markup-search-films';

// const searchForm = document.querySelector('.header__form');
// const searchInput = document.querySelector('.header__input');
const textError = document.querySelector('.header__error');

textError.textContent = '';

refs.searchForm.addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();

  if (refs.searchInput.value.trim() === '') {
    textError.textContent = 'Please, enter the name of the movie';
    refs.searchForm.reset();
    return;
  }

  markupSearchFilms(refs.searchInput.value.trim(), 1);
}
