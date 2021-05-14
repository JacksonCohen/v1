import { styled } from '@stitches/react';
import Button from './Button';

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
});

const Content = styled('div', {
  width: '500px',
  backgroundColor: 'white',
});

const Header = styled('div', {
  padding: '10px',
});

const Footer = styled('div', {
  padding: '10px',
});

const Title = styled('div', {
  margin: '0',
});

const Body = styled('div', {
  padding: '10px',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
});

const Modal = () => {
  return (
    <Wrapper>
      <Content>
        <Header className='modal-header'>
          <Title className='modal-title'></Title>
        </Header>
        <Body className='modal-body'></Body>
        <Footer className='modal-footer'>
          <Button></Button>
        </Footer>
      </Content>
    </Wrapper>
  );
};

export default Modal;
