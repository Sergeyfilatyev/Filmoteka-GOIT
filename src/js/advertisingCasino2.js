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

addNext.addEventListener('click', addCasino);

export function addCasino() {
  addNext.classList.add('kazino_modal-add2');
}
CloseCasino.addEventListener('click', closeModalCasino);

function closeModalCasino() {
  addNext.classList.add('kazino-close');
  TimeoutAddAdvertising();
}

function openVideo(event) {
  event.preventDefault();

  if (document.documentElement.clientWidth >= 1200) {
    const instance = basicLightbox.create(
      `
  <iframe src="https://www.youtube.com/embed/isKgYZjbq-I?&autoplay=1" width="${
    +document.documentElement.clientWidth * 0.85
  }" height="${
        +document.documentElement.clientHeight * 0.75
      }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`,
      {
        onShow: instance => document.addEventListener('keydown', onEscKeyPress),
        onClose: instance =>
          document.removeEventListener('keydown', onEscKeyPress),
      }
    );
    instance.show();

    function onEscKeyPress(event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    }

    return;
  }

  if (document.documentElement.clientWidth >= 768) {
    const instance = basicLightbox.create(
      `
  <iframe src="https://www.youtube.com/embed/isKgYZjbq-I?&autoplay=1" width="${
    +document.documentElement.clientWidth * 0.75
  }" height="${
        +document.documentElement.clientHeight * 0.5
      }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`,
      {
        onShow: instance => document.addEventListener('keydown', onEscKeyPress),
        onClose: instance =>
          document.removeEventListener('keydown', onEscKeyPress),
      }
    );
    instance.show();

    function onEscKeyPress(event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    }

    return;
  }

  if (document.documentElement.clientWidth >= 320) {
    const instance = basicLightbox.create(
      `
  <iframe src="https://www.youtube.com/embed/isKgYZjbq-I?&autoplay=1" width="${
    +document.documentElement.clientWidth * 0.9
  }" height="${
        +document.documentElement.clientHeight * 0.35
      }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`,
      {
        onShow: instance => document.addEventListener('keydown', onEscKeyPress),
        onClose: instance =>
          document.removeEventListener('keydown', onEscKeyPress),
      }
    );
    instance.show();

    function onEscKeyPress(event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    }

    return;
  }
}
document
  .querySelector('.show-video-second')
  .addEventListener('click', openVideo);
