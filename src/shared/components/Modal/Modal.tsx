import { cloneElement, MouseEvent, ReactChild, ReactElement, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import { styled } from 'src/stitches.config';

const Wrapper = styled('div', {
  position: 'fixed',
  left: '0',
  top: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '999',
  opacity: '0',
  transition: 'all .3s ease-in-out',
  pointerEvents: 'none',
  '&.enter-done': {
    opacity: '1',
    pointerEvents: 'visible',
    '& .modal-content': {
      transform: 'translateY(0)',
    },
  },
  '&.exit': {
    opacity: '0',
    '& .modal-content': {
      transform: 'translateY(-100%)',
    },
  },
});

const Content = styled('div', {
  width: '600px',
  backgroundColor: 'white',
});

const Image = styled('img', {
  width: '100%',
});

const Header = styled('div', {
  padding: '20px',
  fontWeight: 700,
});

const Footer = styled('div', {
  display: 'flex',
  padding: '20px',
});

const Title = styled('div', {
  margin: '0',
  fontSize: '$f3',
});

const Body = styled('p', {
  padding: '20px',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
  fontWeight: 300,
});

const Close = styled('button', {
  background: 'teal',
  color: 'slategray',
  backgroundColor: 'transparent',
  marginLeft: 'auto',
  padding: '0',
  border: 'none',
  cursor: 'pointer',
  fontSize: '$f2',
  '& i::before': {
    content: '\u00d7',
  },
});

interface ModalProps {
  title?: string;
  image: string;
  show: boolean;
  handleClose: () => void;
  children?: ReactChild;
  footerButtons?: ReactChild[];
}

const Modal = ({ title, image, show, handleClose, children, footerButtons }: ModalProps) => {
  const closeOnEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  });

  return createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <Wrapper onClick={handleClose}>
        <Content onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}>
          <Image src={image}></Image>
          <Header>
            <Title>{title}</Title>
          </Header>
          <Body>{children}</Body>
          <Footer>
            {footerButtons?.map((button, index) =>
              cloneElement(button as ReactElement, { key: index })
            )}
            <Close onClick={handleClose}>
              <i className='fa fa-times-thin fa-2x' aria-hidden='true' />
            </Close>
          </Footer>
        </Content>
      </Wrapper>
    </CSSTransition>,
    document.getElementById('root')
  );
};

export default Modal;
