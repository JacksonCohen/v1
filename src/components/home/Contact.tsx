import { styled } from '@stitches/react';
import { ChangeEvent, useReducer } from 'react';
import emailjs from 'emailjs-com';

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

const Textarea = styled('textarea', {
  fontFamily: 'monospace',
});

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

interface State {
  name: string;
  email: string;
  message: string;
}

const initialState = {
  name: '',
  email: '',
  message: '',
};

const stateReducer = (state: State, newState: any) => ({ ...state, ...newState });

const Contact = () => {
  const [userInput, setUserInput] = useReducer(stateReducer, initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;

    setUserInput({ [name]: value });
  };

  const resetForm = () => {
    setUserInput(initialState);
  };

  const sendEmail = () => {
    const message = (
      <>
        <h1>Message from {userInput.name}</h1>

        <div>{userInput.message}</div>
        <div>You can reply at the following email: {userInput.email}</div>
      </>
    );
    const templateParams = {
      messageHtml: message,
    };

    emailjs
      .send(
        'jacksoncohen.dev',
        'contactForm',
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((res: any) => {
        resetForm();
        console.log(res, 'Success');
      })
      .catch((err) => console.error(err));
  };

  return (
    <Section id='contact'>
      <Wrapper>
        <Title>Contact</Title>

        <Subtitle>Have a question or want to work together? I'd love to hear from you!</Subtitle>

        <Form>
          <Input
            placeholder='Name'
            name='name'
            value={userInput.name}
            onChange={handleChange}
            required
          />
          <Input
            placeholder='Your email'
            name='email'
            value={userInput.email}
            onChange={handleChange}
            required
          />
          <Textarea
            placeholder='Your message'
            name='message'
            value={userInput.message}
            onChange={handleChange}
            required
          />
          <div
            className='g-recaptcha'
            data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          ></div>

          <Submit type='submit' onClick={sendEmail}>
            Submit
          </Submit>
        </Form>
      </Wrapper>
    </Section>
  );
};

export default Contact;
