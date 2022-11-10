const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { openNewModal } from './advertisingPremium';
import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';
const KEY = 'premium';
const delayAddModal = 5000;
const premiumText = document.querySelector('.add-text-premium');
const closeModal = document.querySelector('.adver-kazino');
const closeAdvertising = document.querySelector('.close_modal_advertising');
const belowAdvertising = document.querySelector('.advertising-below');
const closeBelowAdvertising = document.querySelector(
  '.advertising-below__close-icon'
);
function changeStatus() {
  if (!localStorage.getItem(KEY)) {
    setTimeout(() => {
      closeModal.classList.add('kazino_modal-add');
    }, delayAddModal);

    return;
  } else {
    premiumText.classList.add('add-text-premium-active');
    belowAdvertising.classList.add('hide-below');
    return;
  }
}

changeStatus();
export function TimeoutAddAdvertising() {
  setTimeout(() => {
    closeModal.classList.add('kazino_modal-add');
  }, delayAddModal);
}
closeModal.addEventListener('click', closeModalAdvertising);

function closeModalAdvertising() {
  closeModal.classList.remove('kazino_modal-add');
  setTimeout(() => {
    openNewModal();
  }, 3000);
}
setTimeout(() => {
  removeAdvertising();
}, 12000);

function removeAdvertising() {
  closeAdvertising.classList.add('close_advertising');
}
closeBelowAdvertising.addEventListener('click', closeBelowIcon);

function closeBelowIcon() {
  belowAdvertising.classList.add('advertising-below_hidden');
}
const instance = basicLightbox.create(`
      <iframe src="https://www.youtube.com/embed/K7e3jpYf28I" width="850" height="515" frameborder="0"></iframe>
  `);
function openVideo(event) {
  event.preventDefault();
  instance.show();
}
document.querySelector('.show-video').addEventListener('click', openVideo);
