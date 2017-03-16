import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'

import {Link} from 'react-router'

import MainUser from '../user/mainUser'

class pageUser extends Component {
    render() {
        return (
            <div className="grid">
                <div className="col-4-12">
                    <MainUser/>
                </div>
                <div className="col-8-12">
                    <Link to="/user/newpc" className="button">Cadastrar Novo PC</Link>
                </div>
            </div>
        );
    }
}

export default pageUser