import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home/Home';
import Store from './context/store';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Home />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);