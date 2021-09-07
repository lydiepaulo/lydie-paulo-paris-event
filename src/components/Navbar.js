import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="nav">
        <ul class="nav-bar">
          <li class="nav-bar__home"><NavLink exact to="/" activeClassName="">Accueil</NavLink></li>
          <li><NavLink exact to="/search" activeClassName="">Rechercher</NavLink></li>
          <li><NavLink exact to="/favorites" activeClassName="">Favoris</NavLink></li>
        </ul>
    </nav>
  );
};

export default Navbar;