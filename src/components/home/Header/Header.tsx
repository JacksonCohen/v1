import { CallToAction, HeroMessage, Highlight, Section, Wrapper } from './styles';
import { scrollTo } from 'src/shared/utils';
import { Canvas } from 'src/components';

const Header = ({ homeRef }) => {
  return (
    <Section id='home' ref={homeRef}>
      <Canvas />
      <Wrapper>
        <HeroMessage fontSize={{ '@bp0': 'sm', '@bp1': 'md' }}>
          Hi, my name is <Highlight>Jackson Cohen</Highlight>.
          <br />
          I'm a software engineer.
        </HeroMessage>
        <CallToAction onClick={() => scrollTo('portfolio')}>
          View my work <i className='fas fa-arrow-right' />
        </CallToAction>
      </Wrapper>
    </Section>
  );
};

export default Header;
