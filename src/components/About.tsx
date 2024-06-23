// src/components/About.tsx
import React from 'react';
import '../index.css';
import randomimg from '../Images/yashuimg.jpg';

const About: React.FC = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl p-2 font-extrabold my-4 text-blue-800">About Me</h1>
        <img src={randomimg} alt="about-me" className="w-40 h-40 my-4 mx-auto rounded-full border-4 shadow-lg" />
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        <div className="about1 shadow-lg p-8 rounded-md bg-white transform hover:scale-105 transition-transform duration-300">
          <h2 className="font-bold text-xl mb-2 text-blue-800">Aspiring Web Developer</h2>
          <p>
            Currently pursuing a degree in Computer Science at Ramaiah Institute of Technology, with a passion for creating dynamic and responsive web applications.
          </p>
        </div>
        <div className="about2 shadow-lg p-8 rounded-md bg-white transform hover:scale-105 transition-transform duration-300">
          <h2 className="font-bold text-xl mb-2 text-blue-800">Driven and Innovative</h2>
          <p>
            Possesses a blend of creativity, technical skill, and a keen interest in pushing the boundaries of web development.
          </p>
        </div>
        <div className="about3 shadow-lg p-8 rounded-md bg-white transform hover:scale-105 transition-transform duration-300">
          <h2 className="font-bold text-xl mb-2 text-blue-800">Tech Enthusiast and Blogger</h2>
          <p>
            Avid blogger who loves to explore and write about the latest trends and technologies in web development.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
