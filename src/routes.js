import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import axios from 'axios'

import App from './components/app';
import Home from './components/page-home/home';
import User from './components/page-user/pageUser';
import UserMain from './components/page-user/pageMainUser';
import NewPC from './components/page-user/pageNewPC';
import PC from './components/page-pc/pagePC';

/* import Search from './components/search' */
import Access from './components/access/access'

const requireLogin = (nextState, replace) => {
    axios
        .get(`${API_URL}/api/validate`)
        .then((response) => {
            if (response.data.success == false) {
               window.location = "/#/login"
            }
        })
        .catch((error) => {
            window.location = "/"
        })
};

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Access}/>
        <Route path="/pc/:_id" component={PC}/>
        <Route path="/user/main/:_id" component={UserMain}/>
        <Route path="/user/home" component={User} onEnter={requireLogin}/>
        <Route path="/user/newpc" component={NewPC} onEnter={requireLogin}/>
        <Route path="*" component={Home} status={404}/>
    </Route>
);