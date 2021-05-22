import { styled } from 'src/stitches.config';

export const Wrapper = styled('div', {
  position: 'fixed',
  left: '0',
  top: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '999',
  opacity: '0',
  transition: 'all .3s ease-in-out',
  pointerEvents: 'none',
  '&.enter-done': {
    opacity: '1',
    pointerEvents: 'visible',
    '& .modal-content': {
      transform: 'translateY(0)',
    },
  },
  '&.exit': {
    opacity: '0',
    '& .modal-content': {
      transform: 'translateY(-100%)',
    },
  },
});

export const Content = styled('div', {
  width: '600px',
  backgroundColor: 'white',
});

export const Image = styled('img', {
  width: '100%',
});

export const Header = styled('div', {
  padding: '20px',
  fontWeight: 700,
});

export const Footer = styled('div', {
  display: 'flex',
  padding: '20px',
});

export const Title = styled('div', {
  margin: '0',
  fontSize: '$f3',
});

export const Body = styled('p', {
  padding: '20px',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
  fontWeight: 300,
});

export const Close = styled('button', {
  background: 'teal',
  color: 'slategray',
  backgroundColor: 'transparent',
  marginLeft: 'auto',
  padding: '0',
  border: 'none',
  cursor: 'pointer',
  fontSize: '$f2',
  '& i::before': {
    content: '\u00d7',
  },
});
