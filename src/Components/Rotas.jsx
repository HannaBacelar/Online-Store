import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CardDetails from './CardDetails';
import Carrinho from '../pages/Carrinho';
import Home from '../pages/Home';

class Rotas extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/Carrinho" component={ Carrinho } />
        <Route path="/cardDetails/:id" component={ CardDetails } />
      </Switch>
    );
  }
}
export default Rotas;
