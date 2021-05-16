import { styled, keyframes } from 'src/stitches.config';
import { useState } from 'react';
import { Button, Modal } from '../shared/';

const slideDown = keyframes({
  from: { transform: 'translateY(-25%)' },
  to: { transform: 'translateY(0)' },
});

const slideUp = keyframes({
  from: { transform: 'translateY(25%)' },
  to: { transform: 'translateY(0)' },
});

const Wrapper = styled('div', {
  position: 'relative',
  width: '33%',
  '&:hover': {
    '& > div:nth-child(2)': {
      transition: '.2s linear',
      backgroundColor: '#e1e2ef',
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
});

const Image = styled('img', {
  width: '100%',
  display: 'block',
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
  color: '#232c33',
});

const Technologies = styled('div', {
  color: '#007cc6',
  fontSize: '.8rem',
});

const LearnMore = styled(Button, {
  borderColor: '#007cc6',
  color: '#232c33',
  width: '50%',
  '&:hover': {
    color: '#ebe9e9',
    backgroundColor: '#007cc6',
  },
});

const FooterLink = styled('a', {
  color: '#e1e2ef',
  backgroundColor: '#232c33',
  borderRadius: '1px',
  padding: '10px 15px',
  cursor: 'pointer',
  fontSize: '.8rem',
  textDecoration: 'none',
  transition: '.25s',
  marginRight: '10px',
  border: '1px #232c33 solid',
  '&:hover': {
    color: '#232c33',
    background: '#e1e2ef',
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
