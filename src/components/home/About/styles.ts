import { keyframes, styled } from 'src/stitches.config';

const pulse = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.02)' },
  '100%': { transform: 'scale(1)' },
});

const slideUp = keyframes({
  from: { transform: 'translateY(15%)' },
  to: { opacity: '1', transform: 'translateY(0)' },
});

export const Section = styled('section', {
  padding: '100px 200px',
  position: 'relative',
  background: '$light0',

  variants: {
    padding: {
      sm: {
        padding: '100px 5px',
      },
      md: {
        padding: '100px 10px',
      },
      lg: {
        padding: '100px 50px',
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
  marginBottom: '75px',
  opacity: '0',
  animation: `${slideUp} 1s .9s forwards`,

  '& > *': {
    margin: '0 20px',
  },

  variants: {
    flex: {
      sm: {
        margin: '0',
        flexDirection: 'column',
      },
      md: {
        margin: '0 10px',
        flexDirection: 'column',
      },
      lg: {
        margin: '0 10px',
        flexDirection: 'column',
      },
      xl: {
        margin: '0 10px',
        flexDirection: 'column',
      },
    },
  },
});

export const Text = styled('div', {});

export const Paragraph = styled('p', {
  marginBottom: '1rem',
  color: '$dark1',
});

export const Highlight = styled('span', {
  color: '$accent1',
});

export const PortraitContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',

  variants: {
    margin: {
      sm: {
        margin: '20px 0',
      },
      md: {
        margin: '25px 0',
      },
      lg: {
        margin: '30px 0',
      },
      xl: {
        margin: '30px 0',
      },
    },
  },
});

export const Portrait = styled('img', {
  borderRadius: '5px',
  position: 'relative',
  width: '50%',
  height: '300px',
  minWidth: '300px',
  objectFit: 'cover',

  '&:active': {
    transform: 'scale(1.01)',
    transition: '.5',
  },
});

export const Eyes = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  top: '38%',
  height: '25px',
  opacity: '0',
  transition: '.25s',

  '&.eyes': {
    transition: '.25s',
    opacity: '1',
  },
});

export const Eye = styled('img', {
  margin: '0 8px',
});

export const List = styled('ul', {
  columnCount: 2,
  columnGap: '0',
  width: '50%',

  variants: {
    width: {
      sm: {
        width: '100%',
      },
      md: {
        width: '100%',
      },
      lg: {
        width: '75%',
      },
      xl: {
        width: '75%',
      },
    },
  },
});

export const ListItem = styled('li', {
  marginLeft: '15px',
  color: '$dark1',

  '& span': {
    color: '$accent1',
  },

  '&:hover': {
    animation: `${pulse} 1s`,
    backfaceVisibility: 'hidden',
  },
});
