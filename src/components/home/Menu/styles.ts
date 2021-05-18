import { styled } from 'src/stitches.config';

export const StyledMenu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '$accent0',
  width: '100vw',
  // height: '100vh',
  textAlign: 'left',
  padding: '2rem',
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateY(-100%)',

  '& a': {
    fontSize: '2rem',
    textTransform: 'uppercase',
    padding: '2rem 0',
    fontWeight: 'bold',
    letterSpacing: '0.5rem',
    color: '$accent1',
    textDecoration: 'none',
    transition: 'color 0.3s linear',

    '&:hover': {
      color: '$accent0',
    },
  },

  variants: {
    transform: {
      open: {
        transform: 'translateY(0)',
        height: '220px',
      },
      closed: {
        transform: 'translateY(-100%)',
        height: 0,
      },
    },
  },
});
