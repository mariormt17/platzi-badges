import React from 'react';
import logo from '../images/logo.svg'
import './styles/Navbar.css'

class Navbar extends React.Component {
  render () {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo" />
            <span className="fw-light">Platzi <strong className="fw-bold">Conf</strong></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;