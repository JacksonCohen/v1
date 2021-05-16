import { styled, keyframes } from 'src/stitches.config';

const slideRight = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
});

const slideLeft = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
});

const Title = styled('h2', {
  fontSize: '$f5',
  textTransform: 'uppercase',
  paddingBottom: '10px',
  color: '$dark1',
  '&.slide-right': {
    animation: `${slideRight} .5s`,
  },
});

export const TitleBar = styled('div', {
  width: '70px',
  height: '4px',
  background: '$dark1',
  '&.slide-left': {
    animation: `${slideLeft} 1s`,
  },
  marginBottom: '100px',
});

export default Title;
