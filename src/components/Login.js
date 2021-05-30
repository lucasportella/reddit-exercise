import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';

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
    const { email, password, checkRegister } = this.props
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
                onChange={this.handleChange}
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
  loginState: state.loginVerifierReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
  checkRegister: e => dispatch(loginAction(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
