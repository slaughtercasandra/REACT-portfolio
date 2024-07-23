// Project.jsx

import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <div className="links">
        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Project;
