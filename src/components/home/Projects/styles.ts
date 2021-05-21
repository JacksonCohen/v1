import { keyframes, styled } from 'src/stitches.config';

const slideUp = keyframes({
  from: { transform: 'translateY(15%)' },
  to: { opacity: '1', transform: 'translateY(0)' },
});

export const Section = styled('section', {
  padding: '100px 200px',
  position: 'relative',
  backgroundColor: '$light0',

  variants: {
    padding: {
      sm: {
        padding: '100px 40px',
      },
      md: {
        padding: '100px 10px',
      },
      lg: {
        padding: '100px 40px',
      },
      xl: {
        padding: '100px 40px',
      },
    },
  },
});

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const ProjectsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '66%',

  '& > div:nth-child(1)': {
    opacity: '0',
    animation: `${slideUp} 1s .8s forwards`,
  },
  '& > div:nth-child(2)': {
    opacity: '0',
    animation: `${slideUp} 1s .9s forwards`,
  },
  '& > div:nth-child(3)': {
    opacity: '0',
    animation: `${slideUp} 1s 1s forwards`,
  },
  '& > div:nth-child(4)': {
    opacity: '0',
    animation: `${slideUp} 1s 1.1s forwards`,
  },
  '& > div:nth-child(5)': {
    opacity: '0',
    animation: `${slideUp} 1s 1.2s forwards`,
  },
  '& > div:nth-child(6)': {
    opacity: '0',
    animation: `${slideUp} 1s 1.3s forwards`,
  },
  '& > div:nth-child(7)': {
    opacity: '0',
    animation: `${slideUp} 1s 1.4s forwards`,
  },
  '& > div:nth-child(8)': {
    opacity: '0',
    animation: `${slideUp} 1s 1.5s forwards`,
  },
  '& > div:nth-child(9)': {
    opacity: '0',
    animation: `${slideUp} 1s 1.6s forwards`,
  },

  variants: {
    width: {
      sm: { width: '100%' },
      md: { width: '100%' },
      lg: { width: '75%' },
    },
  },
});
