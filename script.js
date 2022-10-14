const buttonLogin = document.querySelector("#button-login");
buttonLogin.addEventListener('click', validLogin)
const acceptTerm = document.querySelector('#agreement');
const comment = document.querySelector('#textarea');
let value = 500;
const button = document.querySelector("#submit-btn");
comment.addEventListener('keyup', numberOfLetters);

acceptTerm.addEventListener('click', agreement)

button.addEventListener('click', responseForm)

function validLogin(e){
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if(email === "tryber@teste.com" && password === "123456"){
        alert('Olá, Tryber!')
    }
    else {
      alert('Email ou senha inválidos.')
    }

}

function agreement() {
    if(acceptTerm.checked){
        button.disabled = false;
    }else {
        button.disabled = true;
    }
}

function numberOfLetters() {
    const counter = document.querySelector('#counter');
    counter.innerText = value - textarea.value.length;
}

function responseForm(e) {
  e.preventDefault();
  let i = 0;
  document.querySelector('#evaluation-form').style.display = 'none';
  let user = {
    name: 'Nome: ' + document.querySelector('#input-name').value + ' ' + document.querySelector('#input-lastname').value,
    email: 'Email: ' + document.querySelector('#input-email').value,
    house: 'Casa: ' + document.querySelector('#house').value,
    family: 'Família: ' + document.querySelector('input[name="family"]:checked').value,
    materias:'Matérias:'  + getValue(Array.from(document.querySelectorAll('input[class="subject"]:checked'))),
    rating: 'Avaliação: ' + document.querySelector('input[name="rate"]:checked').value,
    comments: 'Observações: ' + document.querySelector('#textarea').value
  };

  document.querySelector('.form-data').style.display ="block"
  const response = Array.from(document.querySelectorAll(".response"));

  for (const data in user) {
      response[i].innerText = user[data]
      i++;
  }
  
}

function getValue(array) {
    let result = []
   for (const el of array) {
    result.push(' ' + el.value );
  }
   return result
}