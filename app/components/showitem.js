import React from 'react';

class ShowItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      error : false
    }
  }

  handleError() {
    this.setState({
      error: true
    })
  }

  render(){
    if(this.state.error){
      return null;
    }
    return (
      <div className="item" onClick={() => this.props.onShowSelect(this.props.pc)}>
        <img className="img" src={this.props.pc.image} alt="PC" onError={() => this.handleError()} />
        <div className="description">
          <h4 className="title">{this.props.pc.name}</h4>
        </div>
      </div>
    );
  }
}

export default ShowItem;