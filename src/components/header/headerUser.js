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
            loading: 0
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
                    this.setState({name: user.name, imageUser: user.imageUser, validate: user.success, loading: 1})
                } else {
                    this.setState({loading: 2})
                }
            })
            .catch((error) => {
                console.log(error.response)
            });
    }

    render() {

        var component
        var loading = this.state.loading
        switch (loading) {
            case 0:
                component = <Loading/>
                break;
            case 1:
                component = <Menu
                    name={this.state.name}
                    image={this.state.imageUser}
                    alt={this.state.name}/>
                break;       
            default:
                component = <div className="account">
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
                break;
        }

        return component

    }

}

export default HeaderUser;