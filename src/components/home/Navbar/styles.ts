import { styled } from 'src/stitches.config';

export const Sticky = styled('div', {
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
});

export const Nav = styled('nav', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  background: '$dark1',
  borderBottom: '3px $accent1 solid',
  height: '50px',
  width: '100%',
  textTransform: 'uppercase',
});

export const NavLink = styled('div', {
  display: 'inline',
  fontSize: 'initial',
  margin: '0 20px',
  padding: 'initial',
  cursor: 'pointer',
  color: '$light1',
  transition: 'color .33s',
  '&:hover': {
    color: '$accent0',
  },
  '&.selected': {
    color: '$accent0',
  },
});
