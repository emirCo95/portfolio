import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import React from 'react';

const Home = () => {
  return (
    <div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Resume />
    </div>
  );
};

export default Home;
