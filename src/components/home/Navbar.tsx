import { styled } from '@stitches/react';

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
});

interface NavProps {
  active: string;
}

const Navbar = ({ active }: NavProps) => {
  return (
    <Nav>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Portfolio</NavLink>
      <NavLink>Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
