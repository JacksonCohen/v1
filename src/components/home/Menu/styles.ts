import { styled } from 'src/stitches.config';

export const StyledMenu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '$accent0',
  height: '100vh',
  textAlign: 'left',
  padding: '2rem',
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateX(-100%)',

  // @media (max-width: 600px) {
  //   width: '100%',
  // }

  '& a': {
    fontSize: '2rem',
    textTransform: 'uppercase',
    padding: '2rem 0',
    fontWeight: 'bold',
    letterSpacing: '0.5rem',
    color: '$accent1',
    textDecoration: 'none',
    transition: 'color 0.3s linear',

    // @media (max-width: '600px') {
    //   fontSize: '1.5rem',
    //   textAlign: 'center',
    // }

    '&:hover': {
      color: '$accent0',
    },
  },

  variants: {
    transform: {
      open: {
        transform: 'translateX(0)',
      },
      closed: {
        transform: 'translateX(-100%)',
      },
    },
  },
});
