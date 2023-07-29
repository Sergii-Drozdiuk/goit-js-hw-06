let input = document.querySelector('#name-input');
let span = document.querySelector('#name-output');
input.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
   if (evt.currentTarget.value.trim() !== "") {
      span.textContent = evt.currentTarget.value.trim();
      return span.textContent;
   }
   span.textContent = "Anonymous";
}

