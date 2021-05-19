import { MutableRefObject } from 'react';
import { Title, TitleBar } from 'src/shared/styles';
import { Content, List, ListItem, Paragraph, Picture, Section, Text, Wrapper } from './styles';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  aboutRef: MutableRefObject<any>;
}

const About = ({ aboutRef }: AboutProps) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  return (
    <Section id='about' ref={aboutRef} padding={{ '@bp0': 'sm', '@bp1': 'md' }}>
      <Wrapper ref={inViewRef}>
        <Title fontSize={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-right' : ''}>
          About
        </Title>
        <TitleBar height={{ '@bp0': 'sm', '@bp1': 'md' }} className={inView ? 'slide-left' : ''} />

        <Content>
          <Text>
            <Paragraph>
              Hi again! My name is Jackson and I'm a New York based software engineer specialized in
              building (and occasionally designing) things for the web. My interest in web
              development came on hard and fast and I haven't looked back since. I believe that
              technology should improve peoples' lives and I am constantly studying to improve my
              knowledge, overcome new challenges, and become a better and better developer.
            </Paragraph>

            <Paragraph>
              Here are a few of the technologies I've been working with recently:
            </Paragraph>
            <List className='fa-ul'>
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

          <Picture src='https://via.placeholder.com/300x300' />
        </Content>
      </Wrapper>
    </Section>
  );
};

export default About;
