const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
decrButton.addEventListener("click", () => {
    counterValue = value.textContent--;
});
incrButton.addEventListener("click", () => {
    counterValue = value.textContent++;
});

