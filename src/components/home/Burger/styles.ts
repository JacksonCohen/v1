import { styled } from 'src/stitches.config';

export const StyledBurger = styled('button', {
  position: 'absolute',
  top: '5%',
  right: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '2rem',
  height: '2rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0',
  zIndex: '10',

  '&:focus': {
    outline: 'none',
  },

  '& div': {
    width: '2rem',
    height: '0.25rem',
    background: '$accent1',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: '1px',

    '&.active': {
      '&:first-child': {
        transform: 'rotate(45deg)',
      },
      '&:nth-child(2)': {
        opacity: '0',
        transform: 'translateX(20px)',
      },
      '&:nth-child(3)': {
        transform: 'rotate(-45deg)',
      },
    },
  },
});
