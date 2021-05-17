import { MutableRefObject, useEffect, useState } from 'react';
import Project from './Project';
import { styled } from 'src/stitches.config';
import { Title, TitleBar } from '../shared';

const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  backgroundColor: '$light0',
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
  alignItems: 'stretch',
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
          {projects.map((project, index) => (
            <Project data={project} key={index} />
          ))}
        </ProjectsContainer>
      </Wrapper>
    </Section>
  );
};

export default Projects;
