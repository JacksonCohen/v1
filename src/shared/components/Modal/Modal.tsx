import { cloneElement, MouseEvent, ReactChild, ReactElement, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import { Body, Close, Content, Footer, Header, Image, Title, Wrapper } from './styles';

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
