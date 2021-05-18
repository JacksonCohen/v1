import { Button } from 'src/shared/styles';
import { keyframes, styled } from 'src/stitches.config';

const slideDown = keyframes({
  from: { opacity: '0', transform: 'translateY(-25%)' },
  to: { opacity: '1', transform: 'translateY(0)' },
});

const slideUp = keyframes({
  from: { opacity: '0', transform: 'translateY(25%)' },
  to: { opacity: '1', transform: 'translateY(0)' },
});

export const Wrapper = styled('div', {
  position: 'relative',
  width: '33%',

  '&:hover': {
    '& > div:nth-child(2)': {
      transition: '.2s linear',
      backgroundColor: '$light0',
      visibility: 'visible',
      opacity: '1',
      '& div': {
        animation: `${slideDown} .5s`,
      },
      '& button': {
        animation: `${slideUp} .5s`,
      },
    },
  },

  variants: {
    width: {
      sm: { width: '100%' },
      md: { width: '50%' },
    },
  },
});

export const Image = styled('img', {
  width: '100%',
  display: 'block',
});

export const ProjectInfo = styled('div', {
  position: 'absolute',
  top: '0',
  display: 'flex',
  visibility: 'hidden',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  textAlign: 'center',
});

export const InfoGroup = styled('div', {});

export const Name = styled('div', {
  fontSize: '$f2',
  fontWeight: '700',
  color: '$dark1',

  variants: {
    fontSize: {
      sm: { fontSize: '$f3' },
      md: { fontSize: '$f1' },
    },
  },
});

export const Technologies = styled('div', {
  color: '$accent1',
  fontSize: '$f0',
  padding: '0 5px',

  variants: {
    fontSize: {
      sm: { fontSize: '$f1' },
      md: { fontSize: '$f0' },
    },
  },
});

export const LearnMore = styled(Button, {
  borderColor: '$accent1',
  color: '$dark1',
  width: '50%',
  '&:hover': {
    color: '$light1',
    backgroundColor: '$accent1',
  },

  variants: {
    fontSize: {
      sm: { fontSize: '$f1' },
      md: { fontSize: '$f0' },
    },
    padding: {
      md: { padding: '2px 5px' },
    },
  },
});

export const FooterLink = styled('a', {
  color: '$light0',
  backgroundColor: '$dark1',
  borderRadius: '1px',
  padding: '10px 15px',
  cursor: 'pointer',
  fontSize: '$f0',
  textDecoration: 'none',
  transition: '.25s',
  marginRight: '10px',
  border: '1px $dark1 solid',
  '&:hover': {
    color: '$dark1',
    background: '$light0',
  },
  '& i': {
    paddingRight: '5px',
  },
});
