import React from 'react';
import { Link } from 'react-router-dom';


function Projects() {
  const projects = [
    {
      title: 'Group Project 1 Recipies',
      description: 'Description of Project 1.',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/Agerian/gproject-recipe-rec'
    }
  ];

  return (
    <div className="container">
      <h2>Group Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Click Here to View Group Project 1 Deplyed</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Click Here to View the GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
