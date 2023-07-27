let input = document.querySelector('#name-input');
let span = document.querySelector('#name-output');
input.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
   if (evt.currentTarget.value.length > 0) {
      span.textContent = evt.currentTarget.value;
      return span.textContent;
   }
   span.textContent = "Anonymous";
}

