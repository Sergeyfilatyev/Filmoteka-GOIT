import { refs } from './refs';
import { markupSearchFilms } from './markup-search-films';
import { createPagination } from './pagination';

// const searchForm = document.querySelector('.header__form');
// const searchInput = document.querySelector('.header__input');
const textError = document.querySelector('.header__error');

textError.textContent = '';

refs.searchForm.addEventListener('submit', () => {
  event.preventDefault();
  createPagination(refs.totalPages, 1);
  console.log(refs.currentPage);
  submitForm();
});

async function submitForm(event) {
  // refs.currentPage = 1;

  if (refs.searchInput.value.trim() === '') {
    textError.textContent = 'Please, enter the name of the movie';
    refs.searchForm.reset();
    return;
  }

  markupSearchFilms(refs.searchInput.value.trim(), 1);
}
