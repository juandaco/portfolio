import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from '../components/ProjectCard';

const Projects = ({ projects }) => {
  const projectCards = projects.map(project => {
    const { title, description, icon, link, repo, stack } = project;
    return (
      <ProjectCard
        title={title}
        key={title}
        description={description}
        icon={icon}
        link={link}
        repo={repo}
        stack={stack}
      />
    );
  });
  return (
    <div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projectCards}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps, null)(Projects);
