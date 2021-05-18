import { useCallback, useEffect, useState } from 'react';
import { DesktopNav } from 'src/components';
import { useToggle } from 'src/utils/useToggle';
import { Burger } from '../Burger';
import { Menu } from '../Menu';
import { Sticky } from './styles';

export interface NavProps {
  section: string;
}

const Navbar = ({ section }: NavProps) => {
  const [nav, setNav] = useState(<DesktopNav section={section} />);
  const [open, toggleOpen] = useToggle();

  const mql = window.matchMedia('(max-width: 600px)');

  const setResponsiveNav = useCallback(
    (event: MediaQueryListEvent) => {
      const mobileView = event.matches;

      if (mobileView) {
        setNav(
          <>
            <Burger open={open} toggleOpen={toggleOpen} />
            <Menu open={open} toggleOpen={toggleOpen} />
          </>
        );
      } else {
        setNav(<DesktopNav section={section} />);
      }
    },
    [open, section, toggleOpen]
  );

  useEffect(() => {
    mql.addEventListener('change', setResponsiveNav);

    return () => {
      mql.removeEventListener('change', setResponsiveNav);
    };
  }, [mql, open, section, setResponsiveNav]);

  return <Sticky>{nav}</Sticky>;
};

export default Navbar;
