import React from 'react';
import styled from 'styled-components';
import projects from '../assets/projects';

const Projects = () => (
  <PortfolioContainer id='projects'>
    <h1>My Projects</h1>
    <ProjectGrid>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <TechStack>
            {project.techStack.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </TechStack>
          <Links>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </Links>
        </ProjectCard>
      ))}
    </ProjectGrid>
  </PortfolioContainer>
);

const PortfolioContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const ProjectCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  text-align: left;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    color: #333;
  }
`;

const TechStack = styled.div`
  margin: 1rem 0;

  span {
    display: inline-block;
    background: #61dafb;
    color: white;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem;
    border-radius: 5px;
    font-size: 0.8rem;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: #61dafb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Projects;
