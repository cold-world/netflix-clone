import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import BiSearch from '../icons/SearchIcon';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://rb.gy/ulxxee"
          alt="logo netflix"
        />
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/tvshows">
              TV Shows
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/personal">
              My List
            </NavLink>
          </li>
          <li className="nav__item">
            <BiSearch className="nav__link nav__link-search" />
          </li>
        </ul>
      </nav>
      <div className="user">user</div>
    </header>
  );
}

export default Header;
