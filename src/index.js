import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/index.js';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Sobre from './components/Sobre';
import Portfolio from './components/Portfolio';
import Erro from './components/Erro';
import Contato from './components/Contato';


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

