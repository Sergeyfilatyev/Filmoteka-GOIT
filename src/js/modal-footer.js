import { refs } from './refs';

refs.openModalFooter.addEventListener('click', openModal);
refs.closeModalFooter.addEventListener('click', closeModal);

function openModal() {
  refs.modalFooter.classList.remove('visibility-hidden');
  document.addEventListener('keydown', onEscapePress);
  refs.backdropFooter.addEventListener('click', onBackdropFooterClick);
  refs.upBtn.classList.add('visibility-hidden');
  document.body.classList.add('stop-scrolling');
}

function closeModal() {
  refs.modalFooter.classList.add('visibility-hidden');
  document.body.classList.remove('stop-scrolling');
  document.removeEventListener('keydown', onEscapePress);
  refs.backdropFooter.removeEventListener('click', onBackdropClick);
}

function onEscapePress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function onBackdropFooterClick(event) {
  const backdrop = event.target.className;
  if (backdrop === 'backdrop_footer') {
    closeModal();
  }
}
