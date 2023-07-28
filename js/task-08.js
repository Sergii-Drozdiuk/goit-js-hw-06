const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handlerSubmit)

function handlerSubmit(evt) {
    evt.preventDefault();
     const emailValue = loginForm.elements.email.value;
     const passwordValue = loginForm.elements.password.value;

    if (!emailValue || !passwordValue) {
      alert('All fields must be filled out.');
    } else {
      const formData = {
        email: emailValue,
        password: passwordValue,
      };
      console.log(formData);
      loginForm.reset()
   }
}

