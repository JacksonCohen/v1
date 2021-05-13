import { styled } from '@stitches/react';

const Wrapper = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const BackToTop = styled('i', {});

const IconBar = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
});

const IconLink = styled('a', {});

const Icon = styled('div', {});

const FooterInfo = styled('div', {
  textTransform: 'uppercase',
});

const Highlight = styled('span', {
  color: 'teal',
});

const Footer = () => {
  return (
    <Wrapper>
      <BackToTop />
      <IconBar>
        <IconLink href='https://www.linkedin.com/in/jacksonrcohen/'>
          <Icon>
            <i className='fab fa-linkedin'></i>
          </Icon>
        </IconLink>
        <IconLink href='https://github.com/JacksonCohen'>
          <Icon>
            <i className='fab fa-github'></i>
          </Icon>
        </IconLink>
        <IconLink href='https://angel.co/u/jackson-cohen-1'>
          <Icon>
            <i className='fab fa-angellist'></i>
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
