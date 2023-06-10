import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">FUTURA</a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Documentación</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Comunidad</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Blog</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Explorador</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Ecosistema</a>
          </li>
        </ul>
        <button className="navbar-button">Conect Your Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;
