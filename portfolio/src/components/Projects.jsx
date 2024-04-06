import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Link } from '@chakra-ui/react';

function Projects() {
  const projects = [
    {
      title: 'Group Project 1 Recipes',
      description: 'Description of Project 1.',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/Agerian/gproject-recipe-rec'
    }
  ];

  return (
    <div className="container">
      <h2>Group Projects</h2>
      <Accordion allowToggle>
        {projects.map((project, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {project.title}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>{project.description}</p>
              <Link href={project.deployedLink} target="_blank" rel="noopener noreferrer">Click Here to View Group Project 1 Deployed</Link>
              <br />
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">Click Here to View the GitHub Repository</Link>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Projects;
