import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'; 


class User extends Component {
render() {
    return (
      <Request
        url='/user'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>carregando...</div>;
            } else {
              return <div>{ JSON.stringify(result.body) }</div>;
            }
          }
        }
      </Request>
    );
  }
}

export default User
