import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import User from './components/pageUser';
/*import PC from './components/pc';
import Search from './components/search' */
import Access from './components/access'

export default(
    <Route  path="/"component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Access}/>
        <Route path="/user/home" component={User}/>
    </Route>
)