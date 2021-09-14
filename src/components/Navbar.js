import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GlobalFunctions from '../services/GlobalFunctions';
import favicon from '../assets/favicon.png'

const Navbar = () => {
  useEffect(() => {
    GlobalFunctions.headerScroll()
  }, [])

  return (
    <nav className="nav" id="nav">
      <ul className="nav-bar">
        <li className="nav-bar__home">
          <NavLink exact to="/">
            <img src={favicon} alt="favicon" className="nav-logo" />
          </NavLink>
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