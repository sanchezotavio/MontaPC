import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import Home from './components/page-home/home';
import User from './components/page-user/pageUser';
import UserMain from './components/page-user/pageMainUser';
import NewPC from './components/page-user/pageNewPC';
import PC from './components/page-pc/pagePC';

/* import Search from './components/search' */
import Access from './components/access/access'

export default(

    <Route component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Access}/>
        <Route path="/user/home" component={User}/>
        <Route path="/user/newpc" component={NewPC}/>
        <Route path="/pc/:_id" component={PC}/>
        <Route path="/user/main/:_id" component={UserMain}/>
        <Route path="*" component={Home}/>
    </Route>

)