import { styled } from 'src/stitches.config';
import { Title as T, TitleBar as TB } from 'src/shared/styles';

export const Section = styled('section', {
  padding: '100px 200px',
  position: 'relative',
  background: '#444550',

  variants: {
    padding: {
      sm: {
        padding: '100px 10px',
      },
      md: {
        padding: '100px 50px',
      },
      lg: {
        padding: '100px 75px',
      },
    },
  },
});

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const Title = styled(T, {
  color: '$light0',
});

export const TitleBar = styled(TB, {
  background: '$light0',
});

export const SkillsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
});
