import { useRef, useState } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import { global } from 'src/stitches.config';
import { useSticky } from 'src/utils/useSticky';

const globalStyles = global({
  '*': { margin: 0, padding: 0, fontFamily: 'Open Sans' },
});

const App = () => {
  const [visibleSection, setVisibleSection] = useState<string>();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  globalStyles();

  const sectionRefs = [
    { section: 'Home', ref: homeRef },
    { section: 'About', ref: aboutRef },
    { section: 'Projects', ref: projectsRef },
    { section: 'Contact', ref: contactRef },
  ];

  useSticky(sectionRefs, { visibleSection, setVisibleSection });

  return (
    <div>
      <Header homeRef={homeRef} />
      <Navbar section={visibleSection} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
};

export default App;
