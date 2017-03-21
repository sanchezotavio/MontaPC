import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'

import User from './user'

import {Link} from 'react-router'

class showUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: ''
        }
    }

    componentDidMount() {
        axios
            .get(`/pc/${this.props.id}`)
            .then(response => {
                const user = response.data[0]
                this.setState({name: user.name, image: user.imageUser, id: user._id})
            })
            .catch((error) => {
                console.log(error.response)
            });
    }

    render() {
        return (
            <div className="user">
                <div className="col-1-2">
                    <figure className="figure">
                        <Link to={`/user/${this.state.id}`} className="link">
                            <img src={this.state.image} className="user__img"/>
                        </Link>
                    </figure>
                    <h1 className="title">{this.state.name}</h1>
                </div>
            </div>
        );
    }

}
