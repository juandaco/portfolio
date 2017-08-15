import React from 'react';

import NavBar from './NavBar';
import Logo from './Logo';

const Header = () =>
  <header className="site-header">
    <NavBar />
    <a
      href="https://github.com/juandaco"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Logo />
    </a>
  </header>;

export default Header;
