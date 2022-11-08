const body = document.querySelector('body');
const darkThemeBtn = document.querySelector('[data-theme-dark]');
const lightThemeBtn = document.querySelector('[data-theme-light]');

function setToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  const savedData = localStorage.getItem(key);
  const parsedData = JSON.parse(savedData);
  return parsedData;
}

const theme = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark',
};

const { LIGHT, DARK } = theme;

let newTheme = getFromLocalStorage('n-theme');

if (!newTheme) {
  newTheme = LIGHT;
  setToLocalStorage('n-theme', LIGHT);
} else {
  body.classList.add(newTheme);
}

darkThemeBtn.addEventListener('click', changeTheme);
lightThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);

  setToLocalStorage('n-theme', body.classList.contains(DARK) ? DARK : LIGHT);
}
