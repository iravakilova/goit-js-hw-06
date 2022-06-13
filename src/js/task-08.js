const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

const user = {
  email: '',
  password: '',
};

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  } else
  user.email = email;
  user.password = password;

  console.log(user);
  event.currentTarget.reset();
}
