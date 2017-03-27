import React, {Component} from 'react';

class IconLoading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.type == "all") {
      return (
        <div className="load">
          <div className="icon--load--center"></div>
        </div>
      )
    } else {
      return (
        <div className="icon--load"></div>
      )
    }

  }
}

export default IconLoading;