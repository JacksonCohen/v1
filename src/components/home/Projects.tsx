import { MutableRefObject, useEffect, useState } from 'react';
import Project from './Project';
import { styled } from '@stitches/react';
import { Title, TitleBar } from '../shared';

const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  backgroundColor: '#e1e2ef',
});

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const ProjectsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '66%',
});

interface ProjectsProps {
  projectsRef: MutableRefObject<any>;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((projects) => {
        setProjects(projects);
      });
  }, []);

  return (
    <Section id='portfolio' ref={projectsRef}>
      <Wrapper>
        <Title>Projects</Title>
        <TitleBar />

        <ProjectsContainer>
          {projects.map((project) => (
            <Project data={project} />
          ))}
        </ProjectsContainer>
      </Wrapper>
    </Section>
  );
};

export default Projects;
