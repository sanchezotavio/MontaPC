import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'

import FormNewPC from '../../components/pc/formNewPC'


class PageNewPC extends Component {
    render() {
        return (
            <div className="grid">
                <div className="col-1-1">
                    <FormNewPC/>
                </div>
            </div>
        );
    }
}

export default PageNewPC


