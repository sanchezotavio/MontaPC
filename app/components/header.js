import React, {Component} from 'react';

import {Link} from 'react-router';

import Menu from '../components/menu'

import Request from 'react-http-request';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="grid">
                    <div className="col-1-2 clear--space">
                        <h1 className="logo">
                            <Link to="/" className="logo__link">
                                Monta<span className="logo__span">PC</span>
                            </Link>
                        </h1>
                    </div>
                    <div className="col-1-2 align-right clear--space">
                        <Request
                            url='/user/validate'
                            method='get'
                            accept='application/json'
                            verbose={true}>
                            {({error, result, loading}) => {
                                if (loading) {
                                    return <div>carregando...</div>;
                                } else {
                                    if (loading) {
                                        return <div>carregando...</div>;
                                    } else {
                                        if (validateUser(JSON.stringify(result.body.success))) {
                                            return <Menu/>
                                        } else {
                                            return <div>
                                                <Link to="/login" className="button" activeClassName="button--active">
                                                    Acessar Conta
                                                </Link>
                                            </div>
                                        }
                                    }
                                }
                            }}
                        </Request>
                    </div>
                </div>
            </header>
        );
    }
}

const validateUser = (success) => {
    if (success == "true") {
        return true;
    } else {
        return false;
    }
}

export default Header;