import { markupSearchFilms } from './markup-search-films';

const searchForm = document.querySelector('.header__form');
const searchInput = document.querySelector('.header__input');
const textError = document.querySelector('.header__error');

textError.textContent = '';

searchForm.addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();

  if (searchInput.value.trim() === '') {
    textError.textContent = 'Please, enter the name of the movie';
    searchForm.reset();
    return;
  }

  markupSearchFilms(searchInput.value.trim(), 1);
}
