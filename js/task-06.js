const validationInput = document.querySelector('#validation-input');

function handlerInputLength() {

   const dataLength = validationInput.getAttribute("data-length");
   const actualLength = validationInput.value.length;
   
    validationInput.classList.toggle('valid', actualLength == dataLength);
    validationInput.classList.toggle('invalid', actualLength != dataLength);
}

validationInput.addEventListener('blur', handlerInputLength);
