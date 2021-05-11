import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar active={''} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
