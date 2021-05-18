import { ReactChild, useCallback, useEffect, useState } from 'react';
import { DesktopNav } from 'src/components';
import { Sticky } from './styles';

export interface NavProps {
  section: string;
}

const Navbar = ({ section }: NavProps) => {
  const [nav, setNav] = useState<ReactChild>(<DesktopNav section={section} />);
  const mql = window.matchMedia('(max-width: 600px)');

  const setResponsiveNav = useCallback(
    (event: MediaQueryListEvent) => {
      const mobileView = event.matches;

      if (mobileView) {
        setNav(<></>);
      } else {
        setNav(<DesktopNav section={section} />);
      }
    },
    [section]
  );

  useEffect(() => {
    mql.addEventListener('change', setResponsiveNav);

    return () => {
      mql.removeEventListener('change', setResponsiveNav);
    };
  }, [mql, section, setResponsiveNav]);

  return <Sticky>{nav}</Sticky>;
};

export default Navbar;
