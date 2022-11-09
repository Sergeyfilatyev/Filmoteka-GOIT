import { refs } from './refs';
import { addToStorage, getFromStorage } from './localStorage';

const { body, darkThemeBtn, lightThemeBtn } = refs;

const theme = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark',
};

const { LIGHT, DARK } = theme;

let newTheme = getFromStorage('n-theme');

if (!newTheme) {
  newTheme = LIGHT;
  addToStorage('n-theme', LIGHT);
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
