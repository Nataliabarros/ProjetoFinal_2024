import React from 'react';

function Login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error');

  // Credenciais de exemplo
  const validUsername = 'usuario';
  const validPassword = 'senha123';

  // Validação simples
  if (username === validUsername && password === validPassword) {
      alert('Login bem-sucedido!');
      errorElement.textContent = '';
      // Redirecionar ou fazer algo após o login
      //Colocar para ir a pagina de pesquisa
  } else {
      errorElement.textContent = 'Usuário ou senha incorretos!';
  }
}

export default Login;
