import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import axios from 'axios'

import PC from '../../components/pc/pc'

import ShowUser from '../../components/user/showUser'

import Loading from '../../components/loading/icon'

import ShowList from '../../components/pc/showList'

class index extends Component {
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
            .get(`api/search/${this.props.params._id}/user/pc`)
            .then(response => {
                this.setState({shows: response.data.pc, loading: false})
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
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
                                <ShowUser id={this.state.id}/>
                            </div>
                        </div>
                        <div className="col-10-12">
                            <div className="box">
                                <h1 className="title pc__title">
                                    PC's criados
                                </h1>
                                <div>
                                    <ShowList shows={this.state.shows}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default index
