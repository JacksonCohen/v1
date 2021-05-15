import { keyframes, styled } from '@stitches/react';

const slideRight = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
});

const slideLeft = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
});

const Title = styled('h2', {
  fontSize: '2.5rem',
  textTransform: 'uppercase',
  paddingBottom: '10px',
  color: '#232c33',
  '&.slide-right': {
    animation: `${slideRight} .5s`,
  },
});

export const TitleBar = styled('div', {
  width: '70px',
  height: '4px',
  background: '#232c33',
  '&.slide-left': {
    animation: `${slideLeft} 1s`,
  },
  marginBottom: '100px',
});

export default Title;
