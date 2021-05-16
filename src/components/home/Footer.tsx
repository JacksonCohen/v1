import { styled, keyframes } from 'src/stitches.config';
import { scrollTo } from 'src/utils/scrollTo';

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const pulse = keyframes({
  '0%': { transform: 'scale(0.95)' },
  '50%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0.95)' },
});

const Wrapper = styled('footer', {
  background: '$dark1',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  height: '25vh',
  paddingTop: '10px',
});

const BackToTop = styled('img', {
  position: 'absolute',
  top: '-25px',
  padding: '10px',
  borderRadius: '2px',
  backgroundColor: '$accent0',
  cursor: 'pointer',
  '&:hover': {
    animation: `${pulse} 2s`,
  },
});

const IconBar = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
});

const IconLink = styled('a', {
  backgroundColor: '$light0',
  padding: '10px 15px',
  borderRadius: '2px',
  margin: '0 20px',
  '&:hover': {
    '& i': {
      animation: `${spin} 1s`,
    },
  },
});

const Icon = styled('div', {
  fontSize: '$f3',
  color: '$dark1',
});

const FooterInfo = styled('div', {
  textTransform: 'uppercase',
  color: '$light0',
});

const Highlight = styled('span', {
  color: '$accent0',
});

const Footer = () => {
  return (
    <Wrapper>
      <BackToTop
        src='https://img.icons8.com/metro/26/000000/double-up.png'
        onClick={() => scrollTo('home')}
      />
      <IconBar>
        <IconLink href='https://www.linkedin.com/in/jacksonrcohen/'>
          <Icon>
            <i className='fab fa-linkedin-in' />
          </Icon>
        </IconLink>
        <IconLink href='https://github.com/JacksonCohen'>
          <Icon>
            <i className='fab fa-github' />
          </Icon>
        </IconLink>
        <IconLink href='https://angel.co/u/jackson-cohen-1'>
          <Icon>
            <i className='fab fa-angellist' />
          </Icon>
        </IconLink>
      </IconBar>
      <FooterInfo>
        Jackson Cohen <Highlight>©{new Date().getFullYear()}</Highlight>
      </FooterInfo>
    </Wrapper>
  );
};

export default Footer;
