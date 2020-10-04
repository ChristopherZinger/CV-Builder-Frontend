import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './store/reducers/authReducer';
import profileReducers from './store/reducers/profileReducers';
import experienceReducers from './store/reducers/experienceReducers';
import educationReducers from './store/reducers/educationReducers';

// axios global settings 
axios.defaults.headers.common['authorization'] = 'AUTH TOKEN';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

// this will make redux devTools work
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// reducers
const rootReducer = combineReducers({
  authReducer, profileReducers,
  experienceReducers, educationReducers
})

// create store
const store = createStore(
  rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
