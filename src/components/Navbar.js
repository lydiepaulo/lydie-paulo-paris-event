import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul id="navbar">
          <li><NavLink exact to="/" activeClassName="">Accueil</NavLink></li>
          <li><NavLink exact to="/search" activeClassName="">Recherche</NavLink></li>
          <li><NavLink exact to="/event" activeClassName="">Évènement</NavLink></li>
          <li><NavLink exact to="/favorites" activeClassName="">Favoris</NavLink></li>
        </ul>
    </nav>
  );
};

export default Navbar;