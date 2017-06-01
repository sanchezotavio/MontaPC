import React, {Component} from 'react'

import {Link} from 'react-router'

import Menu from './menu'

import Loading from '../loading/icon'

import axios from 'axios'

class HeaderUser extends Component {

    constructor(props, context) {
        super(props);
        this.state = {
            name: '',
            imageUser: '',
            validate: false,
            loading: true
        }
        console.log(this.props.id)
    }

    componentDidMount() {
        axios
            .get(`/api/user/validate`)
            .then(response => {
                const user = response.data
                console.log(user)
                if (user.success) {
                    this.setState({name: user.name, imageUser: user.imageUser, validate: user.success, loading: false})
                }
            })
            .catch((error) => {
                console.log(error.response)
            });
    }

    render() {
        if (this.state.validate) {
            return <Menu
                name={this.state.name}
                image={this.state.imageUser}
                alt={this.state.name}/>

        } else {
            return <div className="account">
                <Link to="/access" className="account__link" activeClassName="button--active">
                    Acessar
                </Link>
                <span className="account__span">
                    ou
                </span>
                <Link to="/access" className="account__button" activeClassName="button--active">
                    Cadastrar
                </Link>
            </div>
        }
    }

}

export default HeaderUser;