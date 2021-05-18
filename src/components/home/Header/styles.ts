import { styled } from 'src/stitches.config';

export const Section = styled('section', {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$dark0',
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const HeroMessage = styled('div', {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  color: '$light1',
  fontSize: '$f4',
  margin: '0 0 15px 0',
  padding: '0 10px',

  variants: {
    fontSize: {
      sm: { fontSize: '$f2' },
      md: { fontSize: '$f3' },
    },
  },
});

export const Highlight = styled('span', {
  color: '$accent0',
  fontWeight: 700,
});

export const CallToAction = styled('button', {
  color: 'white',
  background: 'none',
  border: '1px $light1 solid',
  borderRadius: '1px',
  padding: '10px 10px',
  cursor: 'pointer',
  transition: '.5s ease-out',
  '&:not(:hover)': {
    '& i': {
      transition: '.5s',
      transform: 'rotate(0deg)',
    },
  },
  '&:hover': {
    background: '$accent1',
    '& i': {
      transition: '.5s',
      transform: 'rotate(90deg)',
    },
  },
});
