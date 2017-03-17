import React from 'react'

import {Link} from 'react-router'

class ShowItem extends React.Component {
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
          <Link to={`/pc/${this.props.show._id}`} className="link">
            <h2 className="title">{this.props.show.name}</h2>
          </Link>
          <div className="description">
            {this.props.show.description}
          </div>
        </div>

      </div>
    );
  }
}

export default ShowItem;