const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
function newValue(number) {
    value.textContent = number;
}
decrButton.addEventListener("click", () => {
    counterValue--;
    newValue(counterValue);
});
incrButton.addEventListener("click", () => {
    counterValue++;
    newValue(counterValue);
});