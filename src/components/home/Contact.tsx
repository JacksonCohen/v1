import { styled } from '@stitches/react';

const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  background: 'black',
});

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Title = styled('h2', {
  fontSize: '1.8rem',
  textTransform: 'uppercase',
  color: 'white',
});

const Subtitle = styled('div', {
  fontSize: '1rem',
  color: 'teal',
});

const Form = styled('form', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '33%',
});

const Input = styled('input', {});

const Textarea = styled('textarea', {});

const Submit = styled('button', {
  color: 'white',
  background: 'none',
  border: '1px white solid',
  borderRadius: '1px',
  '&:hover': {
    backgroundColor: 'teal',
  },
  padding: '10px 10px',
  textTransform: 'uppercase',
  marginLeft: 'auto',
});

const Contact = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Contact</Title>

        <Subtitle>Have a question or want to work together? I'd love to hear from you!</Subtitle>

        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Your email' />
          <Textarea placeholder='Your message' />
          <Submit type='submit'>Submit</Submit>
        </Form>
      </Wrapper>
    </Section>
  );
};

export default Contact;
