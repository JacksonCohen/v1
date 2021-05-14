import { styled } from '@stitches/react';

const Sticky = styled('div', {
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
});

const Nav = styled('nav', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  background: 'lightslategray',
  borderBottom: '3px black solid',
  height: '50px',
  width: '100%',
  textTransform: 'uppercase',
});

const NavLink = styled('div', {
  display: 'inline',
  fontSize: 'initial',
  margin: '0 20px',
  padding: 'initial',
  cursor: 'pointer',
  color: 'white',
  '&:hover': {
    color: 'teal',
  },
  '&.selected': {
    color: 'teal',
  },
});

interface NavProps {
  section: string;
}

const Navbar = ({ section }: NavProps) => {
  return (
    <Sticky>
      <Nav>
        <NavLink>Home</NavLink>
        <NavLink className={section === 'About' ? 'selected' : ''}>About</NavLink>
        <NavLink className={section === 'Projects' ? 'selected' : ''}>Portfolio</NavLink>
        <NavLink className={section === 'Contact' ? 'selected' : ''}>Contact</NavLink>
      </Nav>
    </Sticky>
  );
};

export default Navbar;
