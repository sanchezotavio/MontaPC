import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request';

import mainUser from '../components/mainUser'

import formNewPC from '../components/formNewPC'

class pageUser extends Component {
    render() {
        return (
            <div className="grid">
                <div className="col-1-2">
                    <mainUser />
                </div>   
                 <div className="col-1-2">
                    <formNewPC />
                </div>             
            </div>
        );
    }
}

export default pageUser