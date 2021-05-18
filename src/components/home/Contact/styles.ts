import { styled } from 'src/stitches.config';
import { Title as SharedTitle, TitleBar as SharedTitleBar } from 'src/shared/styles';

export const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  background: '#444550',
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

export const Title = styled(SharedTitle, {
  color: '$light0',

  variants: {
    fontSize: {
      sm: { fontSize: '$f4' },
      md: { fontSize: '$f4' },
    },
  },
});

export const TitleBar = styled(SharedTitleBar, {
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
