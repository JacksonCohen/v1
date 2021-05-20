import { keyframes, styled } from 'src/stitches.config';
import { Title as T, TitleBar as TB } from 'src/shared/styles';

const slideRight = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { opacity: '1', transform: 'translateX(0)' },
});

const popIn = keyframes({
  '0%': { transform: 'scale(0.75)' },
  '50%': { opacity: '0.5', transform: 'scale(1.15)' },
  '100%': { opacity: '1', transform: 'scale(1)' },
});

export const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  background: '$dark2',
  overflowX: 'hidden',
});

export const Triangle = styled('div', {
  width: 0,
  height: 0,
  marginTop: '-100px',
  marginBottom: '100px',
  borderLeft: '50vw solid transparent',
  borderRight: '50vw solid transparent',
  borderTop: '100px solid $light0',
});

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const Title = styled(T, {
  color: '$light0',

  variants: {
    fontSize: {
      sm: { fontSize: '$f4' },
      md: { fontSize: '$f4' },
    },
  },
});

export const TitleBar = styled(TB, {
  marginBottom: '25px',
  background: '$light0',

  variants: {
    height: {
      sm: { height: '3px' },
      md: { height: '3px' },
    },
  },
});

export const Subtitle = styled('div', {
  fontSize: '$f1',
  color: '$accent1',
  marginBottom: '25px',
  opacity: '0',

  '&.slide-right': {
    animation: `${slideRight} 1s .25s forwards`,
  },

  variants: {
    width: {
      sm: { width: '90%' },
      md: { width: '90%' },
    },
  },
});

export const Form = styled('form', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '33%',
  animationDelay: '2.5s',
  opacity: '0',

  '&.pop-in': {
    animation: `${popIn} 1s 1s forwards`,
  },

  variants: {
    width: {
      sm: { width: '90%' },
      md: { width: '90%' },
    },
  },
});

export const Input = styled('input', {
  backgroundColor: '$dark1',
  color: '#d8d8f6',
  border: 'none',
  padding: '8px 5px',
  marginBottom: '2px',
});

export const Textarea = styled('textarea', {
  fontFamily: 'monospace',
  backgroundColor: '$dark1',
  color: '#d8d8f6',
  border: 'none',
  padding: '10px 5px',
  marginBottom: '5px',
  resize: 'vertical',
});

export const Submit = styled('button', {
  color: '$light0',
  background: 'none',
  border: '1px $accent1 solid',
  borderRadius: '2px',
  padding: '10px 20px',
  width: '25%',
  height: '10%',
  textTransform: 'uppercase',
  marginLeft: 'auto',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$accent1',
  },
});

export const StatusContainer = styled('div', {
  overflow: 'hidden',
});

export const ContactStatus = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  color: '$dark1',
  width: '100%',
  height: '20px',
  marginBottom: '5px',
  padding: '5px 0',
  fontSize: '$f0',
  borderRadius: '2px',
  marginTop: '-100%',
  transition: 'all 3s',

  '&.expanded': {
    marginTop: '0',
  },

  variants: {
    color: {
      red: {
        backgroundColor: '$red',
      },
      green: {
        backgroundColor: '$green',
      },
    },
  },
});
