import { scrollTo } from 'src/shared/utils';
import { NavLink } from 'src/shared/styles';
import { Nav, StyledMenu } from './styles';

interface MenuProps {
  open: boolean;
  section: string;
}

const Menu = ({ open, section }: MenuProps) => {
  return (
    <Nav>
      <StyledMenu transform={open ? 'open' : 'closed'}>
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
      </StyledMenu>
    </Nav>
  );
};

export default Menu;
