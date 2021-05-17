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
        <Title>About</Title>
        <TitleBar />
      </Wrapper>
    </Section>
  );
};

export default About;
