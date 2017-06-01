import React, {Component} from 'react'

import {Link} from 'react-router'

import Menu from './menu'

import Loading from '../loading/icon'

import HeaderUser from './headerUser'

class Header extends Component {

    render() {
        return (
            <header className="header header--top">
                <div className="grid--header">
                    <div className="col-1-2 mobile-col-1-3 clear--space">
                        <h1 className="logo">
                            <Link to="/" className="logo__link">
                               <span className="logo__main"></span>
                            </Link>
                        </h1>
                    </div>
                    <div className="col-1-2 mobile-col-2-3 align-right clear--space">
                        <HeaderUser />
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;