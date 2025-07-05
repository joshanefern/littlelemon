import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;