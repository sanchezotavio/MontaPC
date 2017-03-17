import React, {Component} from 'react'

import ReactDOM from 'react-dom'

class pagePC extends Component {
    render() {
        return (
            <div className="grid">
                <h2>{this.props.params._id}</h2>
            </div>
        );
    }
}

export default pagePC