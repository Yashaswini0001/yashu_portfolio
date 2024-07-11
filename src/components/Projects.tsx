import React from 'react';
import '../index.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import img1 from '../Images/initwave.png';
import img2 from '../Images/atm.png';
import img3 from '../Images/noise.png';
import img4 from '../Images/emergency.png';

const projects = [
  {
    title: 'INITWAVE WEBSITE',
    description: "Led the development of Initwave’s official website using React, ensuring a seamless user experience and modern design. Collaborated with backend developers to integrate frontend and backend components effectively.",
    link: 'https://initwave.com',
    tech: ['React.js', 'HTML', 'CSS'],
    image: img1,
  },
  {
    title: 'Noise Model Synthesis & Evaluation using AI Denoising',
    description: "Currently working on this project as part of the Samsung Prism internship. The project involves synthesizing and evaluating noise models using AI-based denoising techniques for RAW images, enhancing image quality through advanced noise reduction methods.",
    link: 'https://github.com/Yashaswini0001/Samsung-worklet/tree/master',
    tech: ['Python', 'AI', 'Machine Learning', 'Image Processing', 'Deep Learning'],
    image: img3,
  },
  {
    title: 'ATM INTERFACE',
    description: "Implemented during the CodeClause Java Developer Internship, this project focused on storing individual details in a database and accessing it using Java JDBC, solidifying core Java concepts.",
    link: 'https://github.com/Yashaswini0001/ATM_interface',
    tech: ['Java', 'SQL', 'JDBC', 'Swing'],
    image: img2,
  },
  {
    title: 'AI Surveillance for Early Detection of Emergency',
    description: "Developed as part of a mini-project in college, this system detects emergency sounds using a CNN model and integrates the model with a Flask application.",
    link: 'https://github.com/Yashaswini0001/AI_surveillance',
    tech: ['CNN', 'Flask', 'Python'],
    image: img4,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-8 text-blue-900" style={{ backgroundColor: '#0C0A33' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10 text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
              <div className="flex justify-center items-center mb-4">
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="object-cover rounded-lg"
                  style={{ maxHeight: '200px', width: '100%', maxWidth: '100%' }}
                />
              </div>
              <div className="p-2 text-center sm:text-left">
                <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-sm font-semibold px-2.5 py-0.5 rounded">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-semibold">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
