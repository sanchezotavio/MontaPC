import React, {Component} from 'react'

import {connect} from 'react-redux'

import {Link} from 'react-router'

class Access extends Component {
    render() {
        return (
            <div className="grid">
                <div className="box-login">
             
                        <a className="button button--facebook " href="/auth/facebook">Acessar com o Facebook</a>
              
                        <a className="button button--google" href="/auth/google">Acessar com o Google</a>
              
                </div>
            </div>
        );
    }
}

export default Access;