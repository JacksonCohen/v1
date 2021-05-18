import { MouseEventHandler } from 'react';
import { StyledBurger } from './styles';

interface BurgerProps {
  open: boolean;
  toggleOpen: MouseEventHandler<HTMLButtonElement>;
}

const Burger = ({ open, toggleOpen }: BurgerProps) => {
  return (
    <StyledBurger onClick={toggleOpen}>
      <div className={open ? 'active' : ''} />
      <div className={open ? 'active' : ''} />
      <div className={open ? 'active' : ''} />
    </StyledBurger>
  );
};

export default Burger;
