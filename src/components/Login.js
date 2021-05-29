import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }
  render() {
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
}

export default Login;