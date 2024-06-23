// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Header />
    <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
    