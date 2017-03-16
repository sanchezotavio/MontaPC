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
      <div className="item">
    
        <img className="img" src={this.props.show.image} alt="PC" onError={() => this.handleError()} />
        <div className="description">
          <h4 className="title">{this.props.show.name}</h4>
        </div>
      </div>
    );
  }
}

export default ShowItem;