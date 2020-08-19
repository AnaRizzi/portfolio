import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Sobre from './components/pages/Sobre';
import Portfolio from './components/pages/Portfolio';
import Erro from './components/pages/Erro';
import Contato from './components/pages/Contato';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sobre" component={Sobre} exact />
      <Route path="/portfolio" component={Portfolio} exact />
      <Route path="/contato" component={Contato} exact />
      <Route component={Erro}/>
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

