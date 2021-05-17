import { styled } from 'src/stitches.config';

export const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  backgroundColor: '$light0',
});

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const ProjectsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '66%',
});
