import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/main.scss'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {Router, hashHistory} from 'react-router';

import reducers from './reducers/index.js'
import routes from './routes.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory} routes={routes}/>
</Provider>, document.getElementById('main'))
