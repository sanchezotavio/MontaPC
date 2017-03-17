import React from 'react';
import {Route, IndexRoute} from 'react-router';
import createBrowserHistory from '../node_modules/history/lib/createBrowserHistory'

import App from './components/app';
import Home from './components/page-home/home';
import User from './components/page-user/pageUser';
import NewPC from './components/page-user/pageNewPC';
import PC from './components/page-pc/pagePC';
/* import Search from './components/search' */
import Access from './components/access/access'

export const history =  createBrowserHistory()

export default(
    <Route history={history} component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Access}/>
        <Route path="/user/home" component={User}/>
        <Route path="/user/newpc" component={NewPC}/>
        <Route path="/pc/:_id" component={PC}/>
        <Route path="*" component={Home} />
    </Route>
)