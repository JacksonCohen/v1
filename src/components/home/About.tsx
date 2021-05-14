import { MutableRefObject } from 'react';

interface AboutProps {
  aboutRef: MutableRefObject<any>;
}

const About = ({ aboutRef }: AboutProps) => {
  return <div ref={aboutRef}></div>;
};

export default About;
