let bodyColor = document.body;
let btnRed = document.querySelector('.btn_red');
let btnYellow = document.querySelector('.btn_yellow');
let btnGreen = document.querySelector('.btn_green');
let btnReset = document.querySelector('.btn_reset');

btnRed.addEventListener('click', () => {
  bodyColor.style.backgroundColor = 'red';
  console.log("Body color changed to Red");
});

btnYellow.addEventListener('click', () => {
  bodyColor.style.backgroundColor = 'yellow';
  console.log("Body color changed to Yellow");
});

btnGreen.addEventListener('click', () => {
  bodyColor.style.backgroundColor = 'green';
  console.log("Body color changed to Green");
});

btnReset.addEventListener('click', () => {
  bodyColor.style.backgroundColor = '';
  console.log("Body color dropped to default");
});
