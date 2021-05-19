import { MutableRefObject, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Project } from 'src/components';
import { Title, TitleBar } from 'src/shared/styles';
import { ProjectsContainer, Section, Wrapper } from './styles';

interface ProjectsProps {
  projectsRef: MutableRefObject<any>;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
  const [projects, setProjects] = useState([]);
  const [inViewRef, inView] = useInView({ triggerOnce: true });

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
    <Section id='portfolio' ref={projectsRef} padding={{ '@bp0': 'sm', '@bp1': 'md' }}>
      <Wrapper>
        <Title fontSize={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-left' : ''}>
          Projects
        </Title>
        <TitleBar height={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-right' : ''} />

        <ProjectsContainer ref={inViewRef} width={{ '@bp0': 'sm', '@bp1': 'md' }}>
          {projects.map((project, index) => (
            <Project data={project} key={index} />
          ))}
        </ProjectsContainer>
      </Wrapper>
    </Section>
  );
};

export default Projects;
