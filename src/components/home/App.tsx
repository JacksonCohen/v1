import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Projects from './Projects';
import About from './About';
import { global } from '@stitches/react';

const globalStyles = global({
  '*': { margin: 0, padding: 0 },
});

const App = () => {
  globalStyles();

  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
