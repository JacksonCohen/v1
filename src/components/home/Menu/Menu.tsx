import { MouseEventHandler } from 'react';
import { StyledMenu } from './styles';

interface MenuProps {
  open: boolean;
  toggleOpen: MouseEventHandler<HTMLButtonElement>;
}

const Menu = ({ open, toggleOpen }: MenuProps) => {
  console.log('open: ', open);
  return (
    <StyledMenu transform={open ? 'open' : 'closed'}>
      <a href='/'>
        <span role='img' aria-label='about us'>
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href='/'>
        <span role='img' aria-label='price'>
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href='/'>
        <span role='img' aria-label='contact'>
          &#x1f4e9;
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};

export default Menu;
