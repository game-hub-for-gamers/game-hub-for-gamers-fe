import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/Reducers/rootReducer';
// import {dashR} from './redux/Reducers/dashboadGameR'

const store = createStore(rootReducer,applyMiddleware(logger,thunk));
ReactDOM.render(
  // <React>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  // </React>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
