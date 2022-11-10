const loader = document.getElementById('page-preloader');
let opas = 1;
const interval = setInterval(() => {
  opas -= 1;
  loader.style.opacity = opas;
  loader.classList.add('hide');
  if (opas == 0) clearInterval(interval);
}, 2000);
