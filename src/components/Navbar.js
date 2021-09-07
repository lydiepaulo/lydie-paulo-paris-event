import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-bar">
        <li className="nav-bar__home">
          <NavLink exact to="/">Accueil</NavLink>
          </li>
        <li>
          <NavLink exact to="/search" activeClassName="nav-bar__active">Rechercher</NavLink>
          </li>
        <li>
          <NavLink exact to="/favorites" activeClassName="nav-bar__active">Favoris</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;