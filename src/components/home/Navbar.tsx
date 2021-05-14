import { styled } from '@stitches/react';
import { useEffect } from 'react';

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

const NavLink = styled('a', {
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

const Navbar = () => {
  useEffect(() => {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll('section[id]');

    // Add an event listener listening for scroll
    window.addEventListener('scroll', navHighlighter);

    function navHighlighter() {
      // Get current scroll position
      let scrollY = window.pageYOffset;

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        } else {
          document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
      });
    }
  });

  return (
    <Nav>
      <NavLink href='#home'>Home</NavLink>
      <NavLink href='#about'>About</NavLink>
      <NavLink href='#portfolio'>Portfolio</NavLink>
      <NavLink href='#contact'>Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
