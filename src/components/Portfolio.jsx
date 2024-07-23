// Portfolio.jsx

import React from 'react';
import Project from './Project';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'path/to/project1.png',
      deployedUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'path/to/project2.png',
      deployedUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/yourusername/project2'
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
