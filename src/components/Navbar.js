import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <nav>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            activeClassName="active-link"
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </nav>

  );
};
export default Navbar;
