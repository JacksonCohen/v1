import { styled } from '@stitches/react';
import { MutableRefObject } from 'react';

const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  background: 'black',
});

interface AboutProps {
  aboutRef: MutableRefObject<any>;
}

const About = ({ aboutRef }: AboutProps) => {
  return <Section id='about' ref={aboutRef}></Section>;
};

export default About;
