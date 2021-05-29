import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    console.log(this.state)
    this.setState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }

  render() {
    const { checked } = this.state;
    if (checked) {
      return <Redirect to="/Clientes" />;
    }
    return (
      <>
        <form>
          <fieldset>
            <legend>Campo de Login</legend>
            <label>
              Email:
              <input
                onChange={this.handleChange}
                type="text"
                name="email"
                value={this.state.email}
              />
            </label>
            <label>
              Senha:
              <input
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
              />
            </label>
            <button type="button">Efetuar Login</button>
          </fieldset>
        </form>
      </>
    );
  }
}

export default Login;
