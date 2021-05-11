import { styled } from '@stitches/react';

const Nav = styled('nav', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
});

const Item = styled('div', {
  display: 'inline',
  fontSize: 'initial',
  margin: '0 20px',
  padding: 'initial',
  cursor: 'pointer',
});

interface NavProps {
  active: string;
}

const Navbar = ({ active }: NavProps) => {
  return (
    <Nav>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Portfolio</Item>
      <Item>Contact</Item>
    </Nav>
  );
};

export default Navbar;
