import React from 'react';
import {Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './components/app';
import Home from './components/page-home/home';
import User from './components/page-user/pageUser';
import NewPC from './components/page-user/pageNewPC';
/*import PC from './components/pc';
import Search from './components/search' */
import Access from './components/access/access'

export const history =  createBrowserHistory()

export default(
    <Route history={history} path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Access}/>
        <Route path="/user/home" component={User}/>
        <Route path="/user/newpc" component={NewPC}/>
        <Route path="*" component={Home} />
    </Route>
)