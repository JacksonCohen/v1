import { useCallback } from 'react';
import { useToggle, useWindowDimensions } from 'src/shared/hooks';
import { Burger, DesktopNav, Menu } from 'src/components';
import { Sticky } from './styles';

export interface NavProps {
  section: string;
}

const Navbar = ({ section }: NavProps) => {
  const [open, toggleOpen] = useToggle();
  const { width } = useWindowDimensions();

  const setResponsiveNav = useCallback(() => {
    if (width > 600) {
      return <DesktopNav section={section} />;
    } else {
      return (
        <>
          <Burger open={open} toggleOpen={toggleOpen} />
          <Menu open={open} section={section} />
        </>
      );
    }
  }, [open, section, toggleOpen, width]);

  return <Sticky>{setResponsiveNav()}</Sticky>;
};

export default Navbar;
