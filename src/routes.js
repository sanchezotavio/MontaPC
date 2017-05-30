import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import axios from 'axios'

import App from './components/app';

import Home from './containers/home/index';
import User from './containers/user/index';
import PageUser from './containers/pageUser/index';
import NewPC from './containers/newPC/index';
import PC from './containers/pc/index';
import Access from './containers/access/index'

/* import Search from './components/search' */


const requireLogin = (nextState, replace) => {

    axios
        .get(`/api/user/validate`)
        .then((response) => {
            if (response.data.success == false) {
               window.location = "/#/access"
            }
        })
        .catch((error) => {
            window.location = "/"
        })

};

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/access" component={Access}/>
        <Route path="/pc/:_id" component={PC}/>
        <Route path="/user/page/:_id" component={PageUser}/>
        <Route path="/user/home" component={User} onEnter={requireLogin}/>
        <Route path="/user/newpc" component={NewPC} onEnter={requireLogin}/>
        <Route path="*" component={Home} status={404}/>
    </Route>
);