// import { refs } from './refs';

// refs.openModalFooter.addEventListener('click', openModal);
// refs.closeModalFooter.addEventListener('click', closeModal);

// function openModal() {
//   refs.modalFooter.classList.remove('visibility-hidden');
//   document.addEventListener('keydown', onEscapePress);
//   refs.backdropFooter.addEventListener('click', onBackdropFooterClick);
//   refs.upBtn.classList.add('visibility-hidden');
//   document.body.classList.add('stop-scrolling');
// }

// function closeModal() {
//   refs.modalFooter.classList.add('visibility-hidden');
//   document.body.classList.remove('stop-scrolling');
//   document.removeEventListener('keydown', onEscapePress);
//   refs.backdropFooter.removeEventListener('click', onBackdropFooterClick);
// }

// function onEscapePress(event) {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// }

// function onBackdropFooterClick(event) {
//   const backdrop = event.target.className;
//   if (backdrop === 'backdrop_footer') {
//     closeModal();
//   }
// }

// const cards = document.querySelectorAll('.team_item');

// cards.forEach(card => {
//   card.addEventListener('mousemove', onRotateCard);
//   card.addEventListener('mouseout', onStopRotateCard);
// });

// function onRotateCard() {
//   const cardItem = this.querySelector('.card-item');

//   cardItem.style.transform = 'scale(1.1)';
// }

// function onStopRotateCard() {
//   const cardItem = this.querySelector('.card-item');
//   cardItem.style.transform = 'scale(1)';
// }
