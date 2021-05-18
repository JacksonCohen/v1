import { MouseEventHandler } from 'react';
import { StyledBurger } from './styles';

interface BurgerProps {
  open: boolean;
  toggleOpen: MouseEventHandler<HTMLButtonElement>;
}

const Burger = ({ open, toggleOpen }: BurgerProps) => {
  return (
    <StyledBurger onClick={toggleOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
