const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', handlerCheckLength);

function handlerCheckLength() {

   const dataLength = Number(validationInput.dataset.length);
   const actualLength = validationInput.value.trim().length;
   
    validationInput.classList.toggle('valid', actualLength === dataLength);
    validationInput.classList.toggle('invalid', actualLength !== dataLength);
}