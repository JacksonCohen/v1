import { MutableRefObject } from 'react';
import { Title, TitleBar } from 'src/shared/styles';
import { Section, Wrapper } from './styles';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  aboutRef: MutableRefObject<any>;
}

const About = ({ aboutRef }: AboutProps) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  return (
    <Section id='about' ref={aboutRef}>
      <Wrapper ref={inViewRef}>
        <Title fontSize={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-right' : ''}>
          About
        </Title>
        <TitleBar height={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-left' : ''} />
      </Wrapper>
    </Section>
  );
};

export default About;
