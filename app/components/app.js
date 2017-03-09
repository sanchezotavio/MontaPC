import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import axios from 'axios'

import Header from './header'

class App extends Component {

  render() {
    return (
      <div>
        <Header/>        
        {this.props.children}
        
      </div>
    )
  }

}

export default App
