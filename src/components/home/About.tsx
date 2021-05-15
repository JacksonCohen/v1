import { styled } from '@stitches/react';
import { MutableRefObject } from 'react';
import { Title, TitleBar } from '../shared';

const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  background: '#ebe9e9',
});

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

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
