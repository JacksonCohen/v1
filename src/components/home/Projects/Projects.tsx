import { MutableRefObject, useEffect, useState } from 'react';
import { Project } from 'src/components';
import { Title, TitleBar } from 'src/components/shared';
import { ProjectsContainer, Section, Wrapper } from './styles';

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
