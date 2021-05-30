import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class Clientes extends React.Component {
  render() {
  const { isChecked } = this.props;
  if (isChecked) {
    return (
      <><h1>Clientes cadastrados</h1></>
    )
  }
  return <Redirect to="/Cadastro"/>

}
}

export default Clientes;

const mapStateToProps = (state) => ({
  isChecked: state.loginVerifierReducer.checked
})

connect(mapStateToProps)(Clientes);