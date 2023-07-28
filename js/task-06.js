const validationInput = document.querySelector('#validation-input');

function handlerInputLength() {

   const dataLength = Number(validationInput.getAttribute("data-length"));
   const actualLength = validationInput.value.trim().length;
   
    validationInput.classList.toggle('valid', actualLength === dataLength);
    validationInput.classList.toggle('invalid', actualLength !== dataLength);
}

validationInput.addEventListener('blur', handlerInputLength);
