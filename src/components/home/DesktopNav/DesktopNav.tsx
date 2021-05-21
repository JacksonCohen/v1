import { scrollTo } from 'src/shared/utils';
import { NavLink } from 'src/shared/styles';
import { NavProps } from 'src/components';
import { Nav, Resume } from './styles';
import pdf from 'src/assets/resume.pdf';

const DesktopNav = ({ section }: NavProps) => {
  return (
    <Nav>
      <NavLink onClick={() => scrollTo('home')}>Home</NavLink>
      <NavLink onClick={() => scrollTo('about')} className={section === 'About' ? 'selected' : ''}>
        About
      </NavLink>
      <NavLink
        onClick={() => scrollTo('skills')}
        className={section === 'Skills' ? 'selected' : ''}
      >
        Skills
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
      <Resume as='a' target='_blank' rel='noreferrer' href={pdf}>
        Resume
      </Resume>
    </Nav>
  );
};

export default DesktopNav;
