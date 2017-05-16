import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'

import {Link} from 'react-router'

import MainUser from '../user/mainUser'



class pageUser extends Component {
    render() {
        return (
            <div className="grid">
                <div className="col-3-12">
                    <div className="box">
                        <MainUser/>
                    </div>
                </div>
                <div className="col-9-12">
                    <div className="box">
                        <Link to="/user/newpc" className="button">Cadastrar Novo PC</Link>
                    </div>

                    <div className="box"></div>
                </div>
            </div>
        );
    }
}

export default pageUser