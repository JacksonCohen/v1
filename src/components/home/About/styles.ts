import { styled } from 'src/stitches.config';

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
