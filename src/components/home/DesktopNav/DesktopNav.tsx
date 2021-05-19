import { scrollTo } from 'src/shared/utils';
import { NavLink } from 'src/shared/styles';
import { NavProps } from '../Navbar';
import { Nav, Resume } from './styles';

const DesktopNav = ({ section }: NavProps) => {
  return (
    <Nav>
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
      <Resume
        as='a'
        target='_blank'
        rel='noreferrer'
        href='https://drive.google.com/file/d/1NdrstYmJfG8J0OLAMYXM4osbvUri9mx_/view?usp=sharing'
      >
        Resume
      </Resume>
    </Nav>
  );
};

export default DesktopNav;
