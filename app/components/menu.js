import React, {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
    render() {
        return (
            <nav className="menu">               
                <ul className="list">
                    <li className="item">
                        <Link to="/user/home" className="item__link" activeClassName="item__link--active">
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
                        <Link to="/logout" className="item__link" activeClassName="item__link--active">
                            Sair
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;