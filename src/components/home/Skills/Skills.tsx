import { MutableRefObject, useEffect, useState } from 'react';
import { Section, SkillsContainer, Title, TitleBar, Wrapper } from './styles';
import { useInView } from 'react-intersection-observer';
import { Skill } from 'src/components';

interface SkillsProps {
  skillsRef: MutableRefObject<any>;
}

const Skills = ({ skillsRef }: SkillsProps) => {
  const [skills, setSkills] = useState([]);
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    fetch('skills.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((skills) => {
        setSkills(skills);
      });
  }, []);

  return (
    <Section id='skills' ref={skillsRef} padding={{ '@bp0': 'sm', '@bp1': 'md', '@bp2': 'lg' }}>
      <Wrapper ref={inViewRef}>
        <Title fontSize={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-right' : ''}>
          Skills
        </Title>
        <TitleBar
          height={{ '@bp0': 'sm', '@bp1': 'md' }}
          margin={{ '@bp0': 'sm', '@bp1': 'md' }}
          className={inView ? 'slide-left' : ''}
        />

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill data={skill} key={index} />
          ))}
        </SkillsContainer>
      </Wrapper>
    </Section>
  );
};

export default Skills;
