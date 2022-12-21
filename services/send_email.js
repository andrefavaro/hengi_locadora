const btn = document.querySelector("#btn");
const inputs = document.querySelector("form");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  //armazenando todos os valores dos inputs em variáveis
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  console.log(email);

  // Validação do formulario
  function checkInputs() {
    if (name === "") {
      alert("O nome de usuário é obrigatório.");
      return;
    } else if (email === "") {
      alert("O endereço de email é obrigatório.");
      return;
    } else if (!checkEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    } else if (subject === "") {
      alert("O assunto do email é obrigatório.");
      return;
    } else if (message === "") {
      alert("A mensaguem do email é obrigatório.");
      return;
    } else {
      return true;
    }

    function checkEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    }
  }

  // Envio do email
  if (checkInputs()) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "@gmail.com",
      Password: "",
      To: "@gmail.com",
      From: "@gmail.com",
      Subject: subject,
      Body: `Name: ${name} <br/> 
      Email: ${email} <br/> <br/> 
      Subject: ${subject} <br/> 
      Message: ${message}`,
    }).then((message) => alert("Email enviado com sucesso"));
  }
});
