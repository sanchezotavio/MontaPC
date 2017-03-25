import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import axios from 'axios'

import PC from '../pc/pc'

import ShowUser from '../user/showUser'

import IconLoading from '../loading/icon'

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
            return (
                <IconLoading />
            );
        } else {
            return (
                <div className="grid">
                    <div className="col-3-12">
                        <h1>Criado por:</h1>
                        <ShowUser id={this.state.createdBy}/>
                    </div>
                    <div className="col-9-12">
                        <h1>
                            {this.state.name}
                        </h1>
                        <p>
                            {this.state.description}
                        </p>
                    </div>

                </div>
            );
        }

    }
}

export default pagePC
