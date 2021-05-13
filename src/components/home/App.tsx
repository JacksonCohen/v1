import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import { global } from '@stitches/react';
import { useSticky } from 'src/utils/useSticky';

const globalStyles = global({
  '*': { margin: 0, padding: 0, fontFamily: 'Open Sans' },
});

const App = () => {
  const { isSticky, element } = useSticky();
  globalStyles();

  return (
    <div>
      <Header />
      <Navbar sticky={isSticky} active={''} />
      <About />
      <Projects element={element} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
