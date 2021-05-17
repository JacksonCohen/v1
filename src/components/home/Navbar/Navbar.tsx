import { scrollTo } from 'src/utils/scrollTo';
import { Nav, NavLink, Sticky } from './styles';

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
