import React from 'react';

const Project = ({ title, description, icon, link, repo, stack }) => {
  return (
    <div className="project">
      <i className={`fa ${icon} fa-3x project-icon`} />
      <div className="project-content">
        <h3>
          {title}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <div className="project-btn-container">
        <a className="project-btn" href={repo} target="_blank">
          <button>
            Code
            <i className="fa fa-code" />
          </button>
        </a>
        <a className="project-btn" href={link} target="_blank">
          <button>
            Project
            <i className="fa fa-desktop" />
          </button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
