import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video'

const Pagina404 = () => (<div>PÁGINA 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}  />

      <Route component={Pagina404} />

      
    </Switch>
        
  </BrowserRouter>,

  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */

  document.getElementById('root')
);


