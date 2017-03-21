import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request'

import User from './user'

class mainUser extends Component {
    render() {
        return (
            <Request url='/user' method='get' accept='application/json' verbose={true}>
                {({error, result, loading}) => {
                    if (loading) {
                        return <div>carregando...</div>;
                    } else {
                        return <User
                            name={result.body.data.name}
                            imageUser={result.body.data.imageUser}
                            date={result.body.data.date}/>;
                    }
                }}
            </Request>
        );
    }
}

export default mainUser