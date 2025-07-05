import React from 'react'
import homeIcon from '../assets/Logo.svg';

function Header() {
  return (
    <header>
      <div className="logo-wrapper">
        <img src={homeIcon} alt="Little Lemon" className="logo" />
      </div>
    </header>
  );
}

export default Header;
