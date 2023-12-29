let bodyColor = document.body;
let btnRed = document.querySelector('.btn_red');
let btnYellow = document.querySelector('.btn_yellow');
let btnGreen = document.querySelector('.btn_green');
let btnReset = document.querySelector('.btn_reset');

btnRed.addEventListener('click', () => {
  bodyColor.style.backgroundColor = 'red';
});

btnYellow.addEventListener('click', () => {
  bodyColor.style.backgroundColor = 'yellow';
});

btnGreen.addEventListener('click', () => {
  bodyColor.style.backgroundColor = 'green';
});

btnReset.addEventListener('click', () => {
  bodyColor.style.backgroundColor = '';
});
