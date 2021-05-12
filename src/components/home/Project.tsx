import { styled } from '@stitches/react';

const Wrapper = styled('div', {
  width: '30%',
});

const Image = styled('img', {});

interface ProjectProps {
  name: string;
  technologies: string[];
  images: string[];
  link: string;
  description: string;
}

interface ProjectComponentProps {
  data: ProjectProps;
}

const Project = ({ data }: ProjectComponentProps) => {
  return (
    <Wrapper>
      <Image src={data.images[0]} />
    </Wrapper>
  );
};

export default Project;
