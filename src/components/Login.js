import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }

  render() {
    const { checkRegister, loginChecked } = this.props;
    const { email, password } = this.state
    if (loginChecked) {
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
                value={ this.state.email }
              />
            </label>
            <label>
              Senha:
              <input
                onChange={ this.handleChange }
                type="password"
                name="password"
                value={ this.state.password }
              />
            </label>
            <button onClick={ () => checkRegister({email, password})} type="button">Efetuar Login</button>
          </fieldset>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loginChecked: state.loginVerifierReducer.checked,
})

const mapDispatchToProps = (dispatch) => ({
  checkRegister: state => dispatch(loginAction(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
