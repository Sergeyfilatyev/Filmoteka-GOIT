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
