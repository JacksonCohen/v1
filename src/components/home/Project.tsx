import { keyframes, styled } from '@stitches/react';
import { useState } from 'react';
import Button from '../shared/Button';
import Modal from '../shared/Modal';

const slideDown = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
});

const Wrapper = styled('div', {
  position: 'relative',
  width: '33%',
  '&:hover': {
    '& > div:nth-child(2)': {
      transition: '.2s linear',
      backgroundColor: 'white',
      visibility: 'visible',
      opacity: '1',
    },
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

const InfoGroup = styled('div', {
  // transform: 'translateX(-100%)',
});

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

const FooterLink = styled('a', {
  color: 'white',
  background: 'teal',
  border: '1px white solid',
  borderRadius: '1px',
  padding: '10px 15px',
  cursor: 'pointer',
  fontSize: '.8rem',
  textDecoration: 'none',
  transition: '.25s',
  marginRight: '10px',
  '&:hover': {
    color: 'teal',
    backgroundColor: 'white',
  },
  '& i': {
    paddingRight: '5px',
  },
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
  const [showModal, setShowModal] = useState(false);

  const createFooter = () => {
    const footerButtons = [];

    if (repo) {
      footerButtons.push(
        <FooterLink href={repo} target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-external-link-alt'></i>
          View Repo
        </FooterLink>
      );
    }

    if (link) {
      footerButtons.push(
        <FooterLink href={link} target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-external-link-alt'></i>
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
