import { styled } from '@stitches/react';

const Section = styled('section', {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'black',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const HeroMessage = styled('div', {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  color: 'white',
  fontSize: '2rem',
  margin: '0 0 15px 0',
});

const Highlight = styled('span', {
  color: 'teal',
});

const CallToAction = styled('button', {
  color: 'white',
  background: 'none',
  border: '1px white solid',
  borderRadius: '1px',
  '&:hover': {
    backgroundColor: 'teal',
  },
  padding: '10px 10px',
  cursor: 'pointer',
});

const Header = () => {
  return (
    <Section id='home'>
      <Wrapper>
        <HeroMessage>
          Hi, my name is <Highlight>Jackson Cohen</Highlight>.
          <br />
          I'm a software engineer.
        </HeroMessage>
        <CallToAction>
          View my work <i className='fas fa-arrow-right'></i>
        </CallToAction>
      </Wrapper>
    </Section>
  );
};

export default Header;
