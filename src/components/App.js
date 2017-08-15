import React, { Component } from 'react';

import Header from './Header';
import Intro from './Intro';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="site-main">
        <Header />
        <Intro />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
