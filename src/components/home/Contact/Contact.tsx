import { ChangeEvent, FormEvent, MutableRefObject, useReducer, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  ContactStatus,
  Form,
  Input,
  Section,
  StatusContainer,
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
  const [sentStatus, setSentStatus] = useState<'SUCCESS' | 'ERROR' | ''>();
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;

    setUserInput({ [name]: value });
  };

  const resetForm = () => {
    setUserInput(initialState);
    setSentStatus('');
  };

  const toggleExpand = () => {
    const el = document.getElementById('expand');
    setTimeout(() => el.classList.toggle('expanded'), 0);
  };

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Message from ${userInput.name} (${userInput.email}): ${userInput.message}`;
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
      .then(() => {
        setSentStatus('SUCCESS');
        toggleExpand();
        resetForm();
      })
      .catch((err) => {
        setSentStatus('ERROR');
        toggleExpand();
        console.error(err);
      });
  };

  return (
    <Section id='contact' ref={contactRef}>
      <Triangle />
      <Wrapper>
        <Title fontSize={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-left' : ''}>
          Contact
        </Title>
        <TitleBar height={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-right' : ''} />

        <Subtitle width={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-right' : ''}>
          Have a question or want to work together? I'd love to hear from you!
        </Subtitle>

        <Form
          onSubmit={sendEmail}
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
          <StatusContainer>
            {sentStatus === 'SUCCESS' ? (
              <ContactStatus color='green' id='expand'>
                Message sent successfully!
              </ContactStatus>
            ) : sentStatus === 'ERROR' ? (
              <ContactStatus color='red'>Error sending message.</ContactStatus>
            ) : (
              ''
            )}
          </StatusContainer>

          <Submit type='submit' disabled={!!sentStatus}>
            Submit
          </Submit>
        </Form>
      </Wrapper>
    </Section>
  );
};

export default Contact;
