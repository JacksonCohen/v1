import { keyframes, styled } from 'src/stitches.config';

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const pulse = keyframes({
  '0%': { transform: 'scale(0.95)' },
  '50%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0.95)' },
});

export const Wrapper = styled('footer', {
  background: '$dark1',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  height: '25vh',
  padding: '30px 0 10px 0;',
});

export const BackToTop = styled('img', {
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

export const IconBar = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
});

export const IconLink = styled('a', {
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

export const Icon = styled('div', {
  fontSize: '$f3',
  color: '$dark1',
});

export const FooterInfo = styled('div', {
  textTransform: 'uppercase',
  color: '$light0',
});

export const Highlight = styled('span', {
  color: '$accent0',
});
