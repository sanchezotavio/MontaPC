import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {Router, hashHistory} from 'react-router';

import '../styles/main.scss'
import routes from './routes.js';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory} routes={routes}/>
</Provider>, document.getElementById('main'))
