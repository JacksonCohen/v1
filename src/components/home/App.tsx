import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import { global } from '@stitches/react';

const globalStyles = global({
  '*': { margin: 0, padding: 0, fontFamily: 'Open Sans' },
});

const App = () => {
  globalStyles();

  return (
    <div>
      <Header />
      <Navbar active={''} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
