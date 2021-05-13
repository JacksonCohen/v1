import { styled } from '@stitches/react';

const Wrapper = styled('div', {
  width: '33%',
});

const Image = styled('img', {
  width: '100%',
});

const ProjectInfo = styled('div', {});

const Name = styled('div', {});

const Technologies = styled('div', {});

const Button = styled('div', {});

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
        <Name>{name}</Name>
        <Technologies>{technologies}</Technologies>

        <Button>Learn More</Button>
      </ProjectInfo>
    </Wrapper>
  );
};

export default Project;
