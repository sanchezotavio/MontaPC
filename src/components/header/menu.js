import React, {Component} from 'react'

import {Link} from 'react-router'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            className: 'hidden'
        };
        this.handleClick = this
            .handleClick
            .bind(this);

        this.handleBlur = this
            .handleBlur
            .bind(this);
    }

    handleClick() {
        if (this.state.className === 'hidden') {
            this.setState({className: 'visible'});
        } else {
            this.setState({className: 'hidden'});
        }
    }

    handleBlur() {
        this.setState({className: 'hidden'});
    }

    render() {
        return (
            <div>
                <figure className="figure--user">
                    <Link to="/user/home" className="link--block" activeClassName="link--active">
                        <img
                            className="img"
                            src={this.props.image}
                            title={this.props.name}
                            alt={this.props.name}/>
                    </Link>
                </figure>
                <div className="toggle">
                    <button
                        className="button--toggle"
                        onClick={this.handleClick}
                        onBlur={this.handleBlur}></button>
                </div>
                <nav className={`menu ${this.state.className}`}>
                    <div className="infos">
                        <figure className="infos__figure">
                            <Link to="/user/home" className="link--block" activeClassName="link--active">
                                <img
                                    className="infos__img"
                                    src={this.props.image}
                                    title={this.props.name}
                                    alt={this.props.name}/>
                            </Link>
                        </figure>
                        <div className="name">
                            {this.props.name}
                        </div>
                    </div>
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
                            <Link
                                to="user/newpc"
                                className="item__link"
                                activeClassName="item__link--active">
                                Criar Novo PC
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