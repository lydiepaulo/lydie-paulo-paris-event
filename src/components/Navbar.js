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
          <NavLink exact to="/lydie-paulo-paris-event/">
            <img src={favicon} alt="favicon" className="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/lydie-paulo-paris-event/search" activeClassName="nav-bar__active">Rechercher</NavLink>
        </li>
        <li>
          <NavLink exact to="/lydie-paulo-paris-event/favorites" activeClassName="nav-bar__active">Favoris</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;