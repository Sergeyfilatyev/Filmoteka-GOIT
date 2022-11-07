import { fetchPopular } from './fetch';

import { refs } from './refs';
import { markupPopularFilms } from './markup-popular-films';
import { markupSearchFilms } from './markup-search-films';

// async function main() {
//   const getData = await markupPopularFilms(page);
// }

const ulTag = document.querySelector('ul');
let totalPages = 20;

//вызов функции с передачей параметров и добавлением внутреннего элемента, который является тегом ul
export function createPagination(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1; // пример: 5 - 1 = 4
  let afterPages = page + 1; // пример: 5 + 1 = 6
  if (page > 1) {
    liTag += `<li class="btn prev" data-id="${beforePages}"

      
    >&#60 Prev</li>`;
  }

  if (page > 2) {
    // если значение страницы меньше 2, добавляет 1 после предыдущей кнопки
    liTag += `<li class="numb" data-id = "1" >
        1
      </li>`;
    if (page > 3) {
      // если значение страницы больше 3, добавляет (...) после первого li или страницы
      liTag += `<li class="dots">
          ...
        </li>`;
    }
  }

  // количество страниц или li перед current li
  if (page == totalPages) {
    beforePages = beforePages - 2;
  } else if (page == totalPages - 1) {
    beforePages = beforePages - 1;
  }
  //количество страниц или li после current li
  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
    afterPages = afterPages + 1;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPages) {
      //если pagelength больше, чем длина totalPage, то продолжаем
      continue;
    }
    if (pageLength == 0) {
      //если pagelength равно 0, то добавляем +1 к значению pagelength
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      //если страница равна pagelength, то присваиваем активную строку в активной переменной
      activeLi = 'active';
    } else {
      //else оставляет пустой активную переменную
      activeLi = '';
    }
    liTag += `<li
        class="numb ${activeLi}" data-id="${pageLength}"
  
      >
        ${pageLength}
      </li>`;
  }

  if (page < totalPages - 1) {
    //если значение страницы меньше значения totalPage на -1, то показывает последний li или страницу
    if (page < totalPages - 2) {
      //если значение страницы меньше значения totalPage на -2, то добавляет (...) перед последней строкой или страницей
      liTag += `<li class="dots">
          ...
        </li>`;
    }
    liTag += `<li class="numb" data-id="${totalPages}" >
        ${totalPages}
      </li>`;
  }

  if (page < totalPages) {
    //показать следующую кнопку, если значение страницы меньше, чем totalPage(20)
    liTag += `<li class="btn next" data-id = "${afterPages}" >Next &#62
</li>`;
  }
  ulTag.innerHTML = liTag; // добавляет тег li внутрь тега ul
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
createPagination(refs.totalPages, refs.currentPage);
refs.pagination.addEventListener('click', onclick);
let markupPagination;
async function onclick(event) {
  if (refs.searchInput.value) {
    markupPagination = await markupSearchFilms(
      refs.searchInput.value,
      event.target.dataset.id
    );
  } else {
    markupPagination = await markupPopularFilms(event.target.dataset.id);
  }
  refs.currentPage = +event.target.dataset.id;
  createPagination(refs.totalPages, refs.currentPage);
  console.log(event.target.dataset.id);
  return markupPagination;
}
