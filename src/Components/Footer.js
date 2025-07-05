import React from 'react'
import footerLogo from "../assets/Logo.svg"

function Footer() {
  return (
    <footer className="site-footer">
      <img src={footerLogo} alt="Little Lemon" width="100" />
      <p>© 2025 Little Lemon Restaurant</p>
    </footer>
  );
}

export default Footer;
