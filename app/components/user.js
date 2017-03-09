import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request';

class User extends Component {
  render() {
    return (
      <div className="grid">
        <Request url='/user' method='get' accept='application/json' verbose={true}>
          {({error, result, loading}) => {
            if (loading) {
              return <div>carregando...</div>;
            } else {
              return <div>{JSON.stringify(result.body)}</div>;
            }
          }}
        </Request>
      </div>
    );
  }
}

export default User
