import { NavLink } from 'src/components/shared';
import { scrollTo } from 'src/utils';
import { StyledMenu } from './styles';

interface MenuProps {
  open: boolean;
  section: string;
}

const Menu = ({ open, section }: MenuProps) => {
  return (
    <StyledMenu transform={open ? 'open' : 'closed'}>
      <NavLink onClick={() => scrollTo('home')}>Home</NavLink>
      <NavLink onClick={() => scrollTo('about')} className={section === 'About' ? 'selected' : ''}>
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
  );
};

export default Menu;
