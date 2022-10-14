const buttonLogin = document.querySelector('#button-login');
const acceptTerm = document.querySelector('#agreement');
const comment = document.querySelector('#textarea');
const value = 500;
const button = document.querySelector('#submit-btn');

function validLogin(e) {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', validLogin);

function agreement() {
  if (acceptTerm.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
acceptTerm.addEventListener('click', agreement);

function numberOfLetters() {
  const counter = document.querySelector('#counter');
  counter.innerText = value - comment.value.length;
}
comment.addEventListener('keyup', numberOfLetters);

function getValue(array) {
  const result = [];
  for (let x = 0; x < array.length; x += 1) {
    result.push(` ${array[x].value}`);
  }
  return result;
}

function showUser(user) {
  const response = Array.from(document.querySelectorAll('.response'));
  let i = 0;
  Object.keys(user).forEach((key) => {
    response[i].innerText = user[key];
    i += 1;
  });
}
function responseForm(e) {
  e.preventDefault();

  document.querySelector('#evaluation-form').style.display = 'none';
  const user = {
    name: `Nome: ${document.querySelector('#input-name').value}
        ${document.querySelector('#input-lastname').value}`,
    email: `Email: ${document.querySelector('#input-email').value}`,
    house: `Casa: ${document.querySelector('#house').value}`,
    family: `Família: ${document.querySelector('input[name="family"]:checked').value}`,
    materias: `Matérias:${getValue(Array.from(
      document.querySelectorAll('input[class="subject"]:checked'),
    ))}`,
    rating: `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`,
    comments: `Observações: ${document.querySelector('#textarea').value}`,
  };
  document.querySelector('.form-data').style.display = 'block';
  showUser(user);
}
button.addEventListener('click', responseForm);
