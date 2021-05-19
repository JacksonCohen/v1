import { keyframes, styled } from 'src/stitches.config';

const pulse = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.02)' },
  '100%': { transform: 'scale(1)' },
});

export const Section = styled('section', {
  padding: '100px 200px',
  position: 'relative',
  background: '$light1',

  variants: {
    padding: {
      sm: {
        padding: '100px 40px',
      },
      md: {
        padding: '100px 100px',
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

export const Content = styled('div', {
  display: 'flex',
  width: '80%',

  '& > *': {
    margin: '0 20px',
  },
});

export const Text = styled('div', {});

export const Paragraph = styled('p', {
  marginBottom: '1rem',
});

export const Picture = styled('img', {});

export const List = styled('ul', {
  columnCount: 2,
  columnGap: '0',
  width: '50%',
});

export const ListItem = styled('li', {
  marginLeft: '15px',

  '& span': {
    color: '$accent0',
  },

  '&:hover': {
    animation: `${pulse} 1s`,
    backfaceVisibility: 'hidden',
  },
});
