import { ChangeEvent, MutableRefObject, useReducer } from 'react';
import emailjs from 'emailjs-com';
import {
  Form,
  Input,
  Section,
  Submit,
  Subtitle,
  Textarea,
  Title,
  TitleBar,
  Triangle,
  Wrapper,
} from './styles';
import { useInView } from 'react-intersection-observer';

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
  const [inViewRef, inView] = useInView({ triggerOnce: true });

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
        <Title fontSize={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-right' : ''}>
          Contact
        </Title>
        <TitleBar height={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-left' : ''} />

        <Subtitle width={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-right' : ''}>
          Have a question or want to work together? I'd love to hear from you!
        </Subtitle>

        <Form
          ref={inViewRef}
          width={{ '@bp0': 'sm', '@bp1': 'md' }}
          className={inView ? 'pop-in' : ''}
        >
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
