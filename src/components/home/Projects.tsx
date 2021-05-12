import { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
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
    <div>
      <h2>Projects</h2>

      {projects.map((project) => (
        <Project />
      ))}
    </div>
  );
};

export default Projects;
