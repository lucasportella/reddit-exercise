import React from 'react';

const Login = function() {
  return (
    <>
    <form>
      <fieldset>
        <legend>Campo de Login</legend>
        <label>
          Email:
          <input type="text"/>
        </label>
        <label>
          Senha:
          <input type="text"/>
        </label>
        <button type="button">Efetuar Login</button>
      </fieldset>
    </form>
    </>
  )
}

export default Login;