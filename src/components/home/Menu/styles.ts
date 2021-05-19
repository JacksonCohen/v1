import { NavLink } from 'src/shared';
import { styled } from 'src/stitches.config';

export const Nav = styled('nav', {
  background: '$dark1',
  borderBottom: '3px $accent1 solid',
  height: '50px',
});

export const StyledMenu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '$dark1',
  width: '100vw',
  textAlign: 'left',
  padding: '0 10px',
  position: 'absolute',
  top: '52px',
  left: '0',
  textTransform: 'uppercase',
  transition: 'height 0.3s ease-in-out',
  overflow: 'hidden',

  '& div': {
    color: '$light1',
    fontSize: '$f2',
    textTransform: 'uppercase',
    padding: '5px 0',
    transition: 'color 0.3s linear',

    '&:hover': {
      color: '$accent0',
    },
  },

  variants: {
    transform: {
      open: {
        height: '220px',
      },
      closed: {
        height: '0',
      },
    },
  },
});

export const Resume = styled(NavLink, {
  textDecoration: 'none',
  fontSize: '$f2',
  padding: '5px 0',
});
