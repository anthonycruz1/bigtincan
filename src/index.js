import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './App';
import { genUsers } from './data/genUsers';
import './styles.css';

store.dispatch({ type: 'users/usersLoaded', payload: genUsers() });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
