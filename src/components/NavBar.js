import React from 'react';
import $ from 'jquery';

const scrollToElement = className => {
  const elem = $('.' + className);
  $('html, body').animate(
    {
      scrollTop: elem.offset().top - parseFloat(elem.css('margin-top')),
    },
    400,
  );
};

const NavBar = () =>
  <nav className="site-menu">
    <ul>
      <li className="menu-item">
        <a
          href="#projects-container"
          onClick={() => scrollToElement('projects-container')}
        >
          Projects
        </a>
      </li>
      <li className="menu-item">
        <a>About</a>
      </li>
      <li className="menu-item">
        <a>Contact</a>
      </li>
    </ul>
  </nav>;

export default NavBar;
