function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColor.addEventListener("click", onChange)
function onChange() {
  color.textContent = body.style.backgroundColor;
  body.style.backgroundColor = getRandomHexColor();
  console.log(getRandomHexColor);
}
