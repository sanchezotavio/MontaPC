import React, {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {className: 'hidden'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.className === 'hidden') {
            this.setState({className: 'visible'});
        } else {
            this.setState({className: 'hidden'});
        }
    }

    render() {
        return (
            <div>
                <figure className="figure--user">
                    <Link to="/user/home" className="link" activeClassName="link--active">
                        <img
                            className="img"
                            src={this.props.image}
                            title={this.props.name}
                            alt={this.props.name}/>
                    </Link>
                </figure>
                <div className="toggle">
                    <button className="button" onClick={this.handleClick}>
                        Abrir
                    </button>
                </div>
                <nav className={`menu ${this.state.className}`}>
                    <ul className="list">
                        <li className="item">
                            <Link
                                to="/user/home"
                                className="item__link"
                                activeClassName="item__link--active">
                                Minha Página
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="user/pc" className="item__link" activeClassName="item__link--active">
                                Meus PC's
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/config" className="item__link" activeClassName="item__link--active">
                                Configurações
                            </Link>
                        </li>
                        <li className="item">
                            <a href="/logout" className="item__link">
                                Sair
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;