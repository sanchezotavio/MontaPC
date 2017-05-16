import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'

import {Link} from 'react-router'

import MainUser from '../user/mainUser'

import ShowList from '../pc/showList'

import axios from 'axios'
class pageUser extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: this.props.params._id,
            loading: true,
            shows: []
        }

    }

    componentDidMount() {
        axios
            .get(`/api/user/pcs`)
            .then(response => {
                this.setState({shows: response.data, loading: false})
            })
            .catch((error) => {
                console.log(error)
            })
    }

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

                    <div className="box">
                        <h1 className="title pc__title">
                            Meus PC's
                        </h1>
                        <div>
                            <ShowList shows={this.state.shows} load={this.state.loading}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default pageUser