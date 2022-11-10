import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';

import { addCasino } from './advertisingCasino2';
const premium = document.querySelector('.premium');
const premiumBtn = document.querySelector('.premium-btn');
const skipAds = document.querySelector('.premium-text');
const premiumText = document.querySelector('.add-text-premium');
const belowAdvertising = document.querySelector('.advertising-below');
const closebelowAdvertising = document.querySelector(
  '.advertising-below__close-icon'
);
// closePreviousModal.addEventListener('click', openNewModal);
// addToStorage('premium', []);
export function openNewModal() {
  premium.classList.add('premium_active');
}

premiumBtn.addEventListener('click', addStatusPremium);

function addStatusPremium() {
  belowAdvertising.classList.add('hide-below');
  premium.classList.remove('premium_active');
  premiumText.classList.add('add-text-premium-active');
  addToStorage('premium', 'ok');

  addToStorage('premium', 'ok111');
}
skipAds.addEventListener('click', continueAdvertising);

function continueAdvertising() {
  premium.classList.remove('premium_active');
  addCasino();
}
closebelowAdvertising.addEventListener('click', closeBelowAdvert);

function closeBelowAdvert() {
  belowAdvertising.classList.add('hide-below');
}
