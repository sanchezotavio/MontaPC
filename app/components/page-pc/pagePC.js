import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import axios from 'axios'

import PC from '../pc/pc'

import ShowUser from '../user/showUser.js'

class pagePC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            components: [],
            name: '',
            date: '',
            description: '',
            image: '',
            createdBy: ''
        }

    }

    componentDidMount() {
        axios
            .get(`/pc/${this.props.params._id}`)
            .then(response => {
                const pc = response.data[0]
                this.setState({components: pc.component, name: pc.name, date: pc.date, image: pc.image, createdBy: pc.createdBy})
            })
            .catch((error) => {
                console.log(error.response)
            });
    }

    render() {
        return (
            <div className="grid">
                <div className="col-3-12">
                    <h1>Criado por:</h1>
                 
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

export default pagePC
