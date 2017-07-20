import React from 'react';

const Project = ({ title, description, icon, link, repo, stack }) => {
  return (
    <div className="project">
      <h3>
        {title}
      </h3>
      <i className={`fa ${icon} fa-4x`} />
      <p>
        {description}
      </p>
      <a href={link} target="_blank">
        <button>
          Demo
          <i className="fa fa-desktop" />
        </button>
      </a>
      <a href={repo} target="_blank">
        <button>
          Code Repo
          <i className="fa fa-code" />
        </button>
      </a>
    </div>
  );
};

export default Project;
