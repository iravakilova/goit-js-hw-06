const input = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length]');
const inputLength = dataLength.dataset.length;
input.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length == inputLength) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }else{
        input.classList.remove('valid')
        input.classList.add('invalid')
    }  
}
