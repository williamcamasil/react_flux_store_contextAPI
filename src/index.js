import React from 'react';
import ReactDOM from 'react-dom';

import Home from './screens/Home/Home';
import Form from './screens/Form/Form';

import GlobalStore from './context/GlobalStore';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


const Rotas = (
  //cria a URL
  <Router>
    <div>
      <GlobalStore>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Form" component={Form} />
          {/* <Route path="/NotFound" component={NotFound} /> */}
        </Switch>
      </GlobalStore>
    </div>
  </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));
