import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user">
        <figure className="figure">
          <img src={this.props.imageUser} className="user__img"/>
        </figure>
        <h1 className="title">{this.props.name}</h1>
        <div className="date">Desde: {this.props.date}
        </div>
      </div>
    );
  }
}

export default User
