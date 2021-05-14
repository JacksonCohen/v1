import { keyframes, styled } from '@stitches/react';

const moveDown = keyframes({
  '0%': { transform: 'translateY(-5rem)' },
  '1000%': { transform: 'translateY(0rem)' },
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
  '&.sticky': {
    background: '#333',
    position: 'fixed',
    top: 0,
    left: 0,
    boxShadow: '1px 1px 1px #222',
    animation: `${moveDown} 0.5s ease-in-out`,
  },
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
  sticky: boolean;
  active: string;
}

const Navbar = ({ sticky, active }: NavProps) => {
  return (
    <Nav className={sticky ? 'sticky' : ''}>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Portfolio</NavLink>
      <NavLink>Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
