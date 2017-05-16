import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'

import User from './user'

import {Link} from 'react-router'

import axios from 'axios'

import Loading from '../loading/icon'

class showUser extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            name: '',
            image: '',
            id: '',
            loading: true
        }
        console.log(this.props.id)
    }

    componentDidMount() {
        axios
            .get(`api/user/main/${this.props.id}`)
            .then(response => {
                const user = response.data[0]
                this.setState({name: user.name, image: user.imageUser, id: user._id, loading: false})
            })
            .catch((error) => {
                console.log(error.response)
            });
    }

    render() {
        if (this.state.loading) {
            return (<Loading/>);
        } else {
            return (
                <div className="user">
                    <figure className="figure figure--user-pc">
                        <Link to={`/user/main/${this.state.id}`} className="link">
                            <img src={this.state.image} className="img"/>
                        </Link>
                    </figure>
                    <h1 className="title user__title">{this.state.name}</h1>
                </div>
            );
        }

    }

}

export default showUser
