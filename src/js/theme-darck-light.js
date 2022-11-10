import { refs } from './refs';
import { addToStorage } from './localStorage';

const { body, darkThemeBtn, lightThemeBtn } = refs;

function getnevFromStorage(key) {
  const savedData = localStorage.getItem(key);
  const parsedData = JSON.parse(savedData);
  return parsedData;
}

const theme = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark',
};

const { LIGHT, DARK } = theme;

let newTheme = getnevFromStorage('n-theme');

if (!newTheme) {
  newTheme = LIGHT;
  addToStorage('n-theme', LIGHT);
  body.classList.add('theme-light');
} else {
  body.classList.add(newTheme);
}

darkThemeBtn.addEventListener('click', changeTheme);
lightThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);

  addToStorage('n-theme', body.classList.contains(DARK) ? DARK : LIGHT);
}
