import React from 'react';

const Project = ({ title, description, icon, stack}) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <i className="fa fa-folder-open fa-4x" />
    </div>
  );
};

export default Project;