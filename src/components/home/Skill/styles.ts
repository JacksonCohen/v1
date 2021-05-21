import { keyframes, styled } from 'src/stitches.config';

const slideUp = keyframes({
  from: { transform: 'translateY(15%)' },
  to: { opacity: '1', transform: 'translateY(0)' },
});

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '15px',
  transition: '.4s ease-in-out',
  opacity: '0',
  animation: `${slideUp} 1s 1s forwards`,
  flexBasis: 'calc(50% - 40px)',

  '& + :nth-child(2n)': {
    borderLeft: '1px solid $accent0',
  },

  '&:hover': {
    '& i': {
      transition: 'all .4s ease-in-out',
      transform: 'rotateY(360deg)',
    },
  },
  '&:not(:hover)': {
    '& i': {
      transition: 'all .4s ease-in-out',
    },
  },

  // TODO: Fix flex basis variants
  variants: {
    flex: {
      lg: {
        flexBasis: 'calc(50% - 40px)',
      },
      xl: {
        flexBasis: 'calc(50% - 40px)',
      },
    },
  },
});

export const Icon = styled('div', {
  color: '$light0',
  fontSize: '$f5',
  paddingBottom: '10px',
});

export const Label = styled('div', {
  color: '$light0',
  fontSize: '$f2',
  fontWeight: '700',
  textTransform: 'uppercase',
});

export const Divider = styled('div', {
  backgroundColor: '$accent0',
  margin: '12px',
  width: '55px',
  height: '1px',
});

export const Description = styled('div', {
  color: '$light0',
  fontSize: '$f1',
});

export const Highlight = styled('span', {
  fontWeight: '700',
  fontStyle: 'italic',
});

export const RowSeperator = styled('hr', {
  background: '$accent0',
  width: '100%',
  margin: '15px auto',
  height: '.5px',
});
