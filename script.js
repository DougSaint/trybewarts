const buttonLogin = document.querySelector("#button-login");
buttonLogin.addEventListener('click', validLogin)

const acceptTerm = document.querySelector('#agreement');

acceptTerm.addEventListener('click', agreement)

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
  const button = document.querySelector("#submit-btn");
    if(acceptTerm.checked){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
    
}