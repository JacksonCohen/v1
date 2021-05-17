import { useState } from 'react';
import { Modal } from 'src/components/shared';
import {
  FooterLink,
  Image,
  InfoGroup,
  LearnMore,
  Name,
  ProjectInfo,
  Technologies,
  Wrapper,
} from './styles';

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
  const [showModal, setShowModal] = useState(false);

  const createFooter = () => {
    const footerButtons = [];

    if (repo) {
      footerButtons.push(
        <FooterLink href={repo} target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-external-link-alt' />
          View Repo
        </FooterLink>
      );
    }

    if (link) {
      footerButtons.push(
        <FooterLink href={link} target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-external-link-alt' />
          View App
        </FooterLink>
      );
    }

    return footerButtons;
  };

  return (
    <Wrapper>
      <Image src={images[0]} />

      <ProjectInfo>
        <InfoGroup>
          <Name>{name}</Name>
          <Technologies>{technologies.join(' / ')}</Technologies>
        </InfoGroup>

        <LearnMore onClick={() => setShowModal(true)}>Learn More</LearnMore>
      </ProjectInfo>

      <Modal
        title={name}
        image={images[0]}
        show={showModal}
        handleClose={() => setShowModal(false)}
        footerButtons={createFooter()}
      >
        {description}
      </Modal>
    </Wrapper>
  );
};

export default Project;
