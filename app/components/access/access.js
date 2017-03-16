import React, {Component} from 'react'

import {connect} from 'react-redux'

import {Link} from 'react-router'

class Access extends Component {
    render() {
        return (
            <div className="grid">
                <a  href="/auth/facebook">Acessar com o Facebook</a>
                <br/>
                <a href="/auth/google">Acessar com o Google</a>
            </div>
        );
    }
}

export default Access;