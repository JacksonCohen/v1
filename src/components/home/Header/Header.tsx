import { CallToAction, Canvas, HeroMessage, Highlight, Section, Wrapper } from './styles';
import { useWindowDimensions } from 'src/shared/hooks';
import { scrollTo } from 'src/shared/utils';
import { Circle } from 'src/components';
import { useCallback, useEffect } from 'react';

const Header = ({ homeRef }) => {
  const { width } = useWindowDimensions();
  const updateCanvas = useCallback(() => {
    const canvas = document.querySelector('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d', { alpha: false });
    const mouse = {
      x: undefined,
      y: undefined,
    };

    let circles = [];
    const init = () => {
      circles = [];
      let numDots = width <= 600 ? 20 : width <= 1024 ? 30 : 40;
      for (let i = 0; i < numDots; i++) {
        const radius = Math.random() * 10 + 2;
        let x = Math.random() * (document.body.clientWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5 * 5;
        let dy = Math.random() - 0.5 * 5;

        const circle = new Circle(c, { x, y }, { dx, dy }, radius, mouse);
        circles.push(circle);
      }
    };

    const animate = () => {
      c.clearRect(0, 0, document.body.clientWidth, window.innerHeight);

      circles.forEach((circle) => circle.update());
      window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener('resize', () => {
      canvas.width = document.body.clientWidth;
      canvas.height = window.innerHeight;

      init();
    });

    // setInterval(init, 2000);
    init();
    animate();
  }, [width]);

  useEffect(() => {
    updateCanvas();
  }, [updateCanvas]);

  return (
    <Section id='home' ref={homeRef}>
      <Canvas />
      <Wrapper>
        <HeroMessage fontSize={{ '@bp0': 'sm', '@bp1': 'md' }}>
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
