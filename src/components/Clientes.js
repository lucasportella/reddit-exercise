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
  } else {
    return <Redirect to="/Cadastro"/>
  }


}
}

const mapStateToProps = (state) => ({
  isChecked: state.loginVerifierReducer.checked
})

export default connect(mapStateToProps)(Clientes);