import { refs } from './refs';

refs.login.addEventListener('click', openModal);

function openModal() {
  refs.loginModal.classList.remove('visibility-hidden');
  document.addEventListener('keydown', onEscapePress);
  document.addEventListener('click', onClickPress);

  refs.upBtn.classList.add('visually-hidden');
}

function closeModal() {
  refs.loginModal.classList.add('visibility-hidden');
  document.removeEventListener('keydown', onEscapePress);
}

function onEscapePress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
function onClickPress(event) {
  console.log(event.target);
}

console.log(refs.login);
