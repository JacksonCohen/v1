import { ChangeEvent, MutableRefObject, useReducer } from 'react';
import { Title as SharedTitle, TitleBar as SharedTitleBar } from '../shared';
import { styled } from 'src/stitches.config';
import emailjs from 'emailjs-com';

const Section = styled('section', {
  padding: '100px 0',
  position: 'relative',
  background: '#444550',
});

const Triangle = styled('div', {
  width: 0,
  height: 0,
  marginTop: '-100px',
  marginBottom: '100px',
  borderLeft: '50vw solid transparent',
  borderRight: '50vw solid transparent',
  borderTop: '100px solid $light0',
});

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Title = styled(SharedTitle, {
  color: '$light0',
});

const TitleBar = styled(SharedTitleBar, {
  marginBottom: '25px',
  background: '$light0',
});

const Subtitle = styled('div', {
  fontSize: '$f1',
  color: '$accent1',
  marginBottom: '25px',
});

const Form = styled('form', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '33%',
  // '& .g-recaptcha': {
  //   transform: 'scale(2)',
  //   transformOrigin: '0 0',
  // },
  // '& .rc-anchor-light': {
  //   background: '#000 !important',
  //   color: '#000 !important',
  // },
});

const Input = styled('input', {
  backgroundColor: '$dark1',
  color: '#d8d8f6',
  border: 'none',
  padding: '8px 5px',
  marginBottom: '2px',
});

const Textarea = styled('textarea', {
  fontFamily: 'monospace',
  backgroundColor: '$dark1',
  color: '#d8d8f6',
  border: 'none',
  padding: '10px 5px',
  marginBottom: '5px',
  resize: 'vertical',
});

const Submit = styled('button', {
  color: '$light0',
  background: 'none',
  border: '1px $accent1 solid',
  borderRadius: '2px',
  padding: '10px 20px',
  width: '25%',
  height: '10%',
  textTransform: 'uppercase',
  marginLeft: 'auto',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$accent1',
  },
});

interface ContactProps {
  contactRef: MutableRefObject<any>;
}

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

const Contact = ({ contactRef }: ContactProps) => {
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
    <Section id='contact' ref={contactRef}>
      <Triangle />
      <Wrapper>
        <Title>Contact</Title>
        <TitleBar />

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
            rows={5}
            value={userInput.message}
            onChange={handleChange}
            required
          />
          {/* <div
            className='g-recaptcha'
            data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          ></div> */}

          <Submit type='submit' onClick={sendEmail}>
            Submit
          </Submit>
        </Form>
      </Wrapper>
    </Section>
  );
};

export default Contact;
