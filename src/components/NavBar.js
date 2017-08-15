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

const mailTo = () => {
  const link = 'mailto:juandacorias@gmail.com?subject=Synt4rt Portfolio';
  window.open(link, 'Mail');
};

const NavBar = () =>
  <nav className="site-menu">
    <ul>
      <li className="menu-item">
        <a href="#about" onClick={() => scrollToElement('curriculum')}>
          About
        </a>
      </li>
      <li className="menu-item">
        <a href="#projects" onClick={() => scrollToElement('projects')}>
          Projects
        </a>
      </li>
      <li className="menu-item">
        <a href="#contact" onClick={mailTo}>
          Contact
        </a>
      </li>
    </ul>
  </nav>;

export default NavBar;
