import { styled } from '@stitches/react';
import Button from '../shared/Button';

const Wrapper = styled('div', {
  position: 'relative',
  width: '33%',
  '&:hover > div': {
    transition: '.2s linear',
    backgroundColor: 'white',
    visibility: 'visible',
    opacity: '1',
  },
});

const Image = styled('img', {
  width: '100%',
});

const ProjectInfo = styled('div', {
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

const InfoGroup = styled('div', {});

const Name = styled('div', {
  fontSize: '1.2rem',
  fontWeight: '700',
});

const Technologies = styled('div', {
  color: 'teal',
  fontSize: '.8rem',
});

const LearnMore = styled(Button, {
  borderColor: 'teal',
  color: 'black',
  width: '50%',
});

interface ProjectProps {
  name: string;
  technologies: string[];
  images: string[];
  repo: string;
  link: string;
  description: string;
}

interface ProjectComponentProps {
  data: ProjectProps;
}

const Project = ({
  data: { name, technologies, images, repo, link, description },
}: ProjectComponentProps) => {
  return (
    <Wrapper>
      <Image src={images[0]} />

      <ProjectInfo>
        <InfoGroup>
          <Name>{name}</Name>
          <Technologies>{technologies.join(' / ')}</Technologies>
        </InfoGroup>

        <LearnMore>Learn More</LearnMore>
      </ProjectInfo>
    </Wrapper>
  );
};

export default Project;
