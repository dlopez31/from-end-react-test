// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import logo from './imagenes/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTipe ={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const { title, items } = this.props;
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h1 className="App-title">{ title }</h1>
        </header>
        <ul className="Menu">
          {items && items.map(
              (item,key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Header;
