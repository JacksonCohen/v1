import { MutableRefObject } from 'react';
import {
  Content,
  Eye,
  Eyes,
  Highlight,
  List,
  ListItem,
  Paragraph,
  Portrait,
  PortraitContainer,
  Section,
  Text,
  Wrapper,
} from './styles';
import { useInView } from 'react-intersection-observer';
import { Title, TitleBar, useToggle } from 'src/shared';
import portrait from 'src/assets/images/portrait.png';
import eye from 'src/assets/images/eye.gif';

interface AboutProps {
  aboutRef: MutableRefObject<any>;
}

const About = ({ aboutRef }: AboutProps) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const [googlyEyes, toggleEyes] = useToggle();

  return (
    <Section id='about' ref={aboutRef} padding={{ '@bp0': 'sm', '@bp1': 'md', '@bp2': 'lg' }}>
      <Wrapper ref={inViewRef}>
        <Title fontSize={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-left' : ''}>
          About
        </Title>
        <TitleBar
          height={{ '@bp0': 'sm', '@bp1': 'md' }}
          margin={{ '@bp0': 'sm', '@bp1': 'md' }}
          className={inView ? 'slide-right' : ''}
        />

        <Content flex={{ '@bp0': 'sm', '@bp1': 'md', '@bp2': 'lg', '@bp3': 'xl' }}>
          <Text>
            <Paragraph>
              Hi again! My name is Jackson and I'm a New York based software engineer specialized in
              building (and occasionally designing) things for the web. My interest in web
              development began when I was young and I haven't looked back since. I believe that
              technology should improve peoples' lives and I am constantly studying to improve my
              knowledge, overcome new challenges, and become a better and better developer.
            </Paragraph>

            <Paragraph>
              I strive to create seamless user experiences with <Highlight>clean</Highlight>,{' '}
              <Highlight>efficient</Highlight>, and <Highlight>scalable</Highlight> code. I love
              learning and I love what I do so I consider work an ongoing education in which I am
              able to constantly improve on my skills and stay relevant as our tech evolves.
            </Paragraph>

            <Paragraph>
              Here are a few of the technologies I've been working with recently:
            </Paragraph>
            <List
              className='fa-ul'
              width={{ '@bp0': 'sm', '@bp1': 'md', '@bp2': 'lg', '@bp3': 'xl' }}
            >
              <ListItem>
                <span className='fa-li'>
                  <i className='fas fa-angle-right'></i>
                </span>
                JavaScript (ES6+)
              </ListItem>
              <ListItem>
                <span className='fa-li'>
                  <i className='fas fa-angle-right'></i>
                </span>
                TypeScript
              </ListItem>
              <ListItem>
                <span className='fa-li'>
                  <i className='fas fa-angle-right'></i>
                </span>
                React
              </ListItem>
              <ListItem>
                <span className='fa-li'>
                  <i className='fas fa-angle-right'></i>
                </span>
                Node.js
              </ListItem>
              <ListItem>
                <span className='fa-li'>
                  <i className='fas fa-angle-right'></i>
                </span>
                MySQL
              </ListItem>
              <ListItem>
                <span className='fa-li'>
                  <i className='fas fa-angle-right'></i>
                </span>
                GraphQL
              </ListItem>
            </List>
          </Text>

          <PortraitContainer
            onClick={toggleEyes}
            margin={{ '@bp0': 'sm', '@bp1': 'md', '@bp2': 'lg', '@bp3': 'xl' }}
          >
            <Portrait src={portrait} />
            <Eyes className={googlyEyes ? 'eyes' : ''}>
              <Eye src={eye} />
              <Eye src={eye} />
            </Eyes>
          </PortraitContainer>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default About;
