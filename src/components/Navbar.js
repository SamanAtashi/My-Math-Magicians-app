import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="header">
      <h1>Math Magicians</h1>
      <ul className="d-flex">
        {links.map((link) => (
          <li key={link.id} className="links">
            <NavLink
              exact
              to={link.path}
              activeClassName="active-link"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

  );
};
export default Navbar;
