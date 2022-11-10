const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { TimeoutAddAdvertising } from './adverttisingCasino';
import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';
const addNext = document.querySelector('.adver-kazino2');
const CloseCasino = document.querySelector('.pseudo-close2');
// const addCasinoNext = document.querySelector
addNext.addEventListener('click', addCasino);

export function addCasino() {
  addNext.classList.add('kazino_modal-add2');
}
CloseCasino.addEventListener('click', closeModalCasino);

function closeModalCasino() {
  addNext.classList.add('kazino-close');
  TimeoutAddAdvertising();
}
const instance = basicLightbox.create(`
      <iframe src="https://www.youtube.com/embed/isKgYZjbq-I" width="850" height="515" frameborder="0"></iframe>
  `);
function openVideo(event) {
  event.preventDefault();
  instance.show();
}
document
  .querySelector('.show-video-second')
  .addEventListener('click', openVideo);
