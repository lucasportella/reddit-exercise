import React from 'react';
import { Link } from 'react-router-dom';

const Home = function() {
  return (
    <>
    <h1>Faça seu login</h1>
    <Link to="/Login">Ir para Login</Link>
    </>
  )
}

export default Home;