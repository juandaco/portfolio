import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Project from '../components/Project';

class App extends Component {
  render() {
    const projectCards = this.props.projects.map(project => {
      const { title, description, stack } = project;
      return <Project 
        title={title}
        description={description}
        stack={stack}
       />;
    });
    return (
      <div className="site-main">
        <div className="site-header">
          <Title />
          {/* <i id="drawer-icon" className="fa fa-bars" aria-hidden="true" /> */}
        </div>
        <div className="projects-container">
          {projectCards}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps, null)(App);
