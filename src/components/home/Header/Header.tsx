import { scrollTo } from 'src/utils/scrollTo';
import { CallToAction, HeroMessage, Highlight, Section, Wrapper } from './styles';

const Header = ({ homeRef }) => {
  return (
    <Section id='home' ref={homeRef}>
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
