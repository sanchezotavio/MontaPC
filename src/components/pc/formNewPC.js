import React, {Component} from 'react'

import axios from 'axios'

import Router from 'react-router'

class formNewPC extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      description: '',
      images: [],
      movies: [],
      components: []
    };

    this.handleChange = this
      .handleChange
      .bind(this);
   
    context.router
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    axios
      .post(`/api/user/newpc`, this.state)
      .then((response) => {
        const data = response.data.data[0];
        if (data.success === true) {
          console.log(data)
          this
            .context
            .router
            .push(`/pc/${data.pcid}`)
        } else {
          this
            .context
            .router
            .push(`/user`);
        }
      })
      .catch((error) => {
        console.log(error)
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Nome:</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}/>

        </div>
        <div>
          <label>
            Descrição:
          </label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}/>
        </div>
        <div>
          <label>
            Imagens:
          </label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

formNewPC.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default formNewPC;