import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import Title from '../components/Title';
import Intro from '../components/Intro';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="site-main">
        <div className="site-header">
          {/* <i id="drawer-icon" className="fa fa-bars" aria-hidden="true" />  */}
          <NavBar />
          <a
            href="https://github.com/juandaco"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Title />
          </a>
        </div>
        <Intro />
        <Projects />
      </div>
    );
  }
}

export default App;
