import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import { global } from '@stitches/react';
import { useEffect, useRef, useState } from 'react';
import { getDimensions } from 'src/utils/getDimensions';

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

  useEffect(() => {
    const sectionRefs = [
      { section: 'About', ref: aboutRef },
      { section: 'Projects', ref: projectsRef },
      { section: 'Contact', ref: contactRef },
    ];

    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(homeRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const element = ref.current;
        if (element) {
          const { offsetBottom, offsetTop } = getDimensions(element);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

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
