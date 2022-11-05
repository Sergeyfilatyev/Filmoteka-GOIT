import { refs } from './refs';

refs.openModalFooter.addEventListener('click', openModal);
refs.closeModalFooter.addEventListener('click', closeModal);

function openModal() {
  refs.modalFooter.classList.remove('visibility-hidden');
  document.addEventListener('keydown', onEscapePress);
}

function closeModal() {
  refs.modalFooter.classList.add('visibility-hidden');
  document.removeEventListener('keydown', onEscapePress);
}

function onEscapePress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
