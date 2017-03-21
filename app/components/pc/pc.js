import React from 'react'

import {Link} from 'react-router'

class PC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    }
  }

  handleError() {
    this.setState({error: true})
  }

  render() {
    if (this.state.error) {
      return null;
    }
    return (
      <div className="item">
        <img
          className="img"
          src={this.props.show.image}
          alt="PC"
          onError={() => this.handleError()}/>
        <div className="PC">         
          <h2 className="title">{this.props.name}</h2>
      
          <div className="description">
            {this.props.description}
          </div>
        </div>

      </div>
    );
  }
}

export default PC;