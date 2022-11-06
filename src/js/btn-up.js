import throttle from 'lodash.throttle';
import { refs } from './refs';

// const upBtn = document.querySelector('[data-up-btn]');

window.addEventListener('scroll', throttle(hideElOnScroll(refs.upBtn), 250));
refs.upBtn.addEventListener('click', toPageTopOnClick);

function hideElOnScroll(el) {
  return function hideOnScroll() {
    if (
      pageYOffset < document.documentElement.clientHeight ||
      refs.modalFooter.classList.contains('visibility-hidden') === false
    ) {
      el.classList.add('visually-hidden');
    } else {
      el.classList.remove('visually-hidden');
    }
  };
}

function toPageTopOnClick(e) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
