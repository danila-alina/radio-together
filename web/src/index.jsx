import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import * as userActions from './resources/user/user.actions';

import store from './resources/store';
import 'appleConfiguration';

const token = window.localStorage.getItem('token');
if (token) {
  userActions.setAuth()(store.dispatch);
}

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root')); // eslint-disable-line
