import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import './styles/Navbar.css'

class Navbar extends React.Component {
  render () {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo" />
            <span className="fw-light">Platzi <strong className="fw-bold">Conf</strong></span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;