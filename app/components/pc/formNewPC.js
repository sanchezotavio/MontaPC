import React, {Component} from 'react'

class formNewPC extends Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input name="name" type="text" />
        </label>
         <label>
          Descrição:
          <input name="description" type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}




export default formNewPC;