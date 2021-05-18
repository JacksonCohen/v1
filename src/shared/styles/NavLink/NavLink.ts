import { styled } from 'src/stitches.config';

const NavLink = styled('div', {
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

export default NavLink;
