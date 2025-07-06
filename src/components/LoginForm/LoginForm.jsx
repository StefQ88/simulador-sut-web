// src/components/LoginForm/LoginForm.jsx

import React from 'react';

function LoginForm() {
  return (
    <form>
      <h2>Iniciar Sesión</h2>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
