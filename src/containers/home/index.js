import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router'

import SearchBar from '../../components/search/searchBar'

import ShowList from '../../components/pc/showList'

import axios from 'axios'


class index extends Component {
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
        axios.get(`/api/search/${term}`).then((response) => {   
            this.setState({
                shows: response.data.pc,
                selectedShow: response.data.pc[0],
                error: null
            });
        }).catch((error) => {
            this.setState({
                error: error.response
            });
        })
    }
    

    render() {
        return (
            <div className="grid">
                <SearchBar onSearch={this.search} />
                <ShowList shows={this.state.shows} />
            </div>
        );
    }
}

export default index;