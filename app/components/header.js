import React, {Component} from 'react';

import {Link} from 'react-router';

import Menu from '../components/menu'

import Request from 'react-http-request';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="grid--header">
                    <div className="col-1-2 mobile-col-1-3 clear--space">
                        <h1 className="logo">
                            <Link to="/" className="logo__link">
                                Monta<span className="logo__span">PC</span>
                            </Link>
                        </h1>
                    </div>
                    <div className="col-1-2 mobile-col-2-3 align-right clear--space">
                        <Request
                            url='/user/validate'
                            method='get'
                            accept='application/json'
                            verbose={true}>
                            {({error, result, loading}) => {
                                if (loading) {
                                    return <div>carregando...</div>;
                                } else {
                                    if (validateUser(JSON.stringify(result.body.success))) {
                                        return <Menu
                                            name={result.body.name}
                                            image={result.body.imageUser}
                                            alt={result.body.name}/>
                                    } else {
                                        return <div className="account">
                                            <Link to="/login" className="account__link" activeClassName="button--active">
                                                Acessar
                                            </Link>
                                            <span className="account__span"> ou </span>
                                            <Link to="/login" className="account__button" activeClassName="button--active">
                                                Cadastrar
                                            </Link>
                                        </div>
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