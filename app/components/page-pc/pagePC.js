import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import axios from 'axios'

import PC from '../pc/pc'

import ShowUser from '../user/showUser'

import Loading from '../loading/icon'

class pagePC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            components: [],
            name: '',
            date: '',
            description: '',
            image: '',
            createdBy: '',
            loading: true
        }

    }

    componentDidMount() {
        axios
            .get(`/pc/${this.props.params._id}`)
            .then(response => {
                const pc = response.data[0]
                this.setState({
                    component: pc.component,
                    name: pc.name,
                    date: pc.date,
                    image: pc.image,
                    createdBy: pc.createdBy,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error.response)
            });
    }

    render() {
        if (this.state.loading) {
            return (<Loading type="all"/>);
        } else {
            return (
                <div className="page">
                    <div className="grid">
                        <div className="col-2-12">
                            <div className="box">
                                <ShowUser id={this.state.createdBy}/>
                            </div>
                        </div>
                        <div className="col-10-12">
                            <div className="box">
                                <h1 className="title pc__title">
                                    {this.state.name}
                                </h1>
                                <p>
                                    {this.state.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default pagePC
