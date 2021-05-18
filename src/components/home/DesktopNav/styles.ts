import { styled } from 'src/stitches.config';

export const Nav = styled('nav', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  background: '$dark1',
  borderBottom: '3px $accent1 solid',
  height: '50px',
  width: '100%',
  textTransform: 'uppercase',
});
