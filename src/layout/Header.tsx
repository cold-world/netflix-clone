import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import BiSearch from '../components/icons/SearchIcon';
import useScroll from '../hooks/useScroll';

function Header() {
  const location = useLocation();
  const scrollDirection = useScroll();

  return (
    <header
      className={`header ${
        scrollDirection === 'down' ? 'header-hide' : 'header-show'
      }`}
    >
      <Link to="/">
        <img
          className="header__logo"
          src="https://rb.gy/ulxxee"
          alt="netflix logo"
        />
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className={`nav__link ${
                location.pathname === '/' ? 'nav__link--active' : ''
              }`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={`nav__link ${
                location.pathname === '/tvshows' ? 'nav__link--active' : ''
              }`}
              to="/tvshows"
            >
              TV Shows
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={`nav__link ${
                location.pathname === '/movies' ? 'nav__link--active' : ''
              }`}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={`nav__link ${
                location.pathname === '/personal' ? 'nav__link--active' : ''
              }`}
              to="/personal"
            >
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
