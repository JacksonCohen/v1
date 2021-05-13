import { useEffect, useState } from 'react';
import Project from './Project';
import { styled } from '@stitches/react';

const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
});

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Title = styled('h2', {
  fontSize: '1.8rem',
  textTransform: 'uppercase',
});

const Projects = ({ element }) => {
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
    <Section id='projects' ref={element}>
      <Wrapper>
        <Title>Projects</Title>

        {projects.map((project) => (
          <Project data={project} />
        ))}
      </Wrapper>
    </Section>
  );
};

export default Projects;
