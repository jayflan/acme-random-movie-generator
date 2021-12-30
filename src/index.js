import { render } from 'react-dom';
import React from 'react';
import App from '../client/App';
import { Provider } from 'react-redux';
import store from '../client/store';


render(
  <Provider store = { store }>
    <App />
  </Provider>, 
  document.querySelector('#root')
);
  