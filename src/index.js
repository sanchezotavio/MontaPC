import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {Router, hashHistory} from 'react-router';

import '../styles/main.scss'
import routes from './routes.js';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory} routes={routes}/>
</Provider>, document.getElementById('main'))
