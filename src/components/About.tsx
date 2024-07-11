import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const About: React.FC = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const text = "Hi, I am Yashashwini".split("");

  return (
    <section id="about" className="mt-0 bg-gray-100" style={{ backgroundColor: '#0C0A33' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:items-start  sm:text-left sm:-mt-72">
        <div className="mb-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold my-5 text-white"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {text.map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I'm a passionate web developer with a deep love for building beautiful and functional websites. My journey is fueled by a desire to learn and grow, constantly pushing boundaries and embracing new technologies.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
