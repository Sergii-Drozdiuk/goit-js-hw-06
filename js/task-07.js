const sizeControlInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControlInput.addEventListener('input', function () {
   text.style.fontSize = `${sizeControlInput.value}px`;
});