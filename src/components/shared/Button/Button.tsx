import { styled } from '@stitches/react';

const Button = styled('button', {
  color: '#2c2c34',
  background: 'none',
  border: '1px white solid',
  borderRadius: '1px',
  '&:hover': {
    backgroundColor: '#d8d8f6',
  },
  padding: '10px 10px',
  cursor: 'pointer',
});

export default Button;
