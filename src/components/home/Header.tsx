import { useEffect } from 'react';
import { styled } from '@stitches/react';
import { scrollTo } from 'src/utils/scrollTo';
import Circle from './Circle';

const Section = styled('section', {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#373850',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 100,
});

const HeroMessage = styled('div', {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  color: '#ebe9e9',
  fontSize: '2rem',
  margin: '0 0 15px 0',
});

const Highlight = styled('span', {
  color: '#ffa600',
  fontWeight: 700,
});

const CallToAction = styled('button', {
  color: 'white',
  background: 'none',
  border: '1px #ebe9e9 solid',
  borderRadius: '1px',
  padding: '10px 10px',
  cursor: 'pointer',
  transition: '.5s ease-out',
  '&:not(:hover)': {
    '& i': {
      transition: '.5s',
      transform: 'rotate(0deg)',
    },
  },
  '&:hover': {
    background: '#007cc6',
    '& i': {
      transition: '.5s',
      transform: 'rotate(90deg)',
    },
  },
});

const Canvas = styled('canvas', {
  border: '1px solid black',
  position: 'absolute',
});

const Header = ({ homeRef }) => {
  const updateCanvas = () => {
    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d');
    const mouse = {
      x: undefined,
      y: undefined,
    };

    let circles = [];
    const init = () => {
      circles = [];

      for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 10 + 2;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5 * 3;
        let dy = Math.random() - 0.5 * 3;

        const circle = new Circle(c, x, y, dx, dy, radius, mouse);
        circles.push(circle);
      }
    };

    const animate = () => {
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      circles.forEach((circle) => circle.update());
      window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });

    init();
    animate();
  };

  useEffect(() => {
    updateCanvas();
  }, []);

  return (
    <Section id='home' ref={homeRef}>
      <Canvas />
      <Wrapper>
        <HeroMessage>
          Hi, my name is <Highlight>Jackson Cohen</Highlight>.
          <br />
          I'm a software engineer.
        </HeroMessage>
        <CallToAction onClick={() => scrollTo('portfolio')}>
          View my work <i className='fas fa-arrow-right' />
        </CallToAction>
      </Wrapper>
    </Section>
  );
};

export default Header;
