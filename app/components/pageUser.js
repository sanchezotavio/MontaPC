import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import Request from 'react-http-request';

import User from '../components/user'

class pageUser extends Component {
    render() {
        return (
            <div className="grid">
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
            </div>
        );
    }
}

export default pageUser