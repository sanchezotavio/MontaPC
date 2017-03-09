import React, {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
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
                 <button className="button"> Abrir </button>
                </div> 
                <nav className="menu">
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