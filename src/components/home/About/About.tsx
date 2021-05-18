import { MutableRefObject } from 'react';
import { Title, TitleBar } from 'src/components/shared';
import { Section, Wrapper } from './styles';

interface AboutProps {
  aboutRef: MutableRefObject<any>;
}

const About = ({ aboutRef }: AboutProps) => {
  return (
    <Section id='about' ref={aboutRef}>
      <Wrapper>
        <Title fontSize={{ '@bp0': 'sm', '@bp1': 'md' }}>About</Title>
        <TitleBar height={{ '@bp0': 'sm', '@bp1': 'md' }} />
      </Wrapper>
    </Section>
  );
};

export default About;
