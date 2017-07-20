import React, { Component } from 'react';
import Title from '../components/Title';

class App extends Component {
  render() {
    return (
      <div className="site-main">
        <div className="site-header">
          <Title />
        </div>
        <p className="App-intro">Content to be defined.</p>
      </div>
    );
  }
}

export default App;
