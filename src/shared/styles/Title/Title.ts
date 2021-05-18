import { styled, keyframes } from 'src/stitches.config';

const slideRight = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { opacity: '1', transform: 'translateX(0)' },
});

const slideLeft = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { opacity: '1', transform: 'translateX(0)' },
});

const Title = styled('h2', {
  fontSize: '$f5',
  textTransform: 'uppercase',
  paddingBottom: '10px',
  color: '$dark1',
  opacity: '0',

  '&.slide-left': {
    animation: `${slideLeft} .75s forwards`,
  },
  '&.slide-right': {
    animation: `${slideRight} .75s forwards`,
  },

  variants: {
    fontSize: {
      sm: { fontSize: '$f4' },
      md: { fontSize: '$f4' },
    },
  },
});

export const TitleBar = styled('div', {
  width: '70px',
  height: '4px',
  background: '$dark1',
  marginBottom: '100px',
  opacity: '0',

  '&.slide-left': {
    animation: `${slideLeft} 1.5s .25s forwards`,
  },
  '&.slide-right': {
    animation: `${slideRight} 1.5s .25s forwards`,
  },

  variants: {
    height: {
      sm: { height: '3px' },
      md: { height: '3px' },
    },
  },
});

export default Title;
