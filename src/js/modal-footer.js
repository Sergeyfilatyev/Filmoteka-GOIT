import { refs } from './refs';

refs.openModalFooter.addEventListener('click', openModal);
refs.closeModalFooter.addEventListener('click', closeModal);

function openModal() {
  refs.modalFooter.classList.remove('visibility-hidden');
  document.addEventListener('keydown', onEscapePress);
  refs.upBtn.classList.add('visually-hidden');
}

function closeModal() {
  refs.modalFooter.classList.add('visibility-hidden');
  document.removeEventListener('keydown', onEscapePress);
  // refs.upBtn.classList.remove('visually-hidden');
}

function onEscapePress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
