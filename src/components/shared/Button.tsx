import { styled } from '@stitches/react';

const Button = styled('button', {
  color: 'white',
  background: 'none',
  border: '1px white solid',
  borderRadius: '1px',
  '&:hover': {
    backgroundColor: 'teal',
  },
  padding: '10px 10px',
  cursor: 'pointer',
});

export default Button;
