import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Clientes from './components/Clientes';
import Cadastro from './components/Cadastro';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Route exact path="/" component={ Home }></Route>
    <Route path="/Login" component={ Login }></Route>
    <Route path="/Clientes" component={ Clientes }></Route>
    <Route path="/Cadastro" component={ Cadastro }></Route>
    </>
  );
}

export default App;
