import { styled } from '@stitches/react';
import { scrollTo } from 'src/utils/scrollTo';

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
  transition: 'color .33s',
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
        <NavLink onClick={() => scrollTo('home')}>Home</NavLink>
        <NavLink
          onClick={() => scrollTo('about')}
          className={section === 'About' ? 'selected' : ''}
        >
          About
        </NavLink>
        <NavLink
          onClick={() => scrollTo('portfolio')}
          className={section === 'Projects' ? 'selected' : ''}
        >
          Portfolio
        </NavLink>
        <NavLink
          onClick={() => scrollTo('contact')}
          className={section === 'Contact' ? 'selected' : ''}
        >
          Contact
        </NavLink>
      </Nav>
    </Sticky>
  );
};

export default Navbar;
