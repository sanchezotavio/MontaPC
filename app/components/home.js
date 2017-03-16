import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SearchBar from './searchBar'
import ShowList from './showList';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: [],
            selectedShow: null,
            error: null
        }
        this.search = this.search.bind(this);
    }

    search(term) {
        axios.get(`http://montapc.herokuapp.com/search/${term}`).then((response) => {
            this.setState({
                shows: response.data,
                selectedShow: response.data[0],
                error: null
            });
        }).catch((error) => {
            this.setState({
                error: error.response.data.message
            });
        })
    }

    render() {
        return (
            <div className="grid">
                <SearchBar onSearch={this.search} />
                <ShowList shows={this.state.shows} onShowSelect={(selectedShow) => this.setState({ selectedShow })} />
            </div>
        );
    }
}

export default Home;