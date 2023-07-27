let nameInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
   if (evt.currentTarget.value.length > 0) {
      nameOutput.textContent = evt.currentTarget.value;
      return nameOutput.textContent;
   }
   nameOutput.textContent = "Anonymous";
}

