import React from 'react';
import '../index.css';

const projects = [
  {
    title: 'INITWAVE WEBSITE',
    description: "Led the development of Initwave’s official website using React, ensuring a seamless user experience and modern design. Collaborated with backend developers to integrate frontend and backend components effectively.",
    link: 'https://initwave.com',
    tech: ['React.js', 'HTML', 'CSS'],
  },
  {
    title: 'Noise Model Synthesis & Evaluation using AI Denoising',
    description: "Currently working on this project as part of the Samsung Prism internship. The project involves synthesizing and evaluating noise models using AI-based denoising techniques for RAW images, enhancing image quality through advanced noise reduction methods.",
    link: 'https://github.com/Yashaswini0001/Samsung-worklet/tree/master',
    tech: ['Python', 'AI', 'Machine Learning', 'Image Processing', 'Deep Learning'],
  },
  {
    title: 'ATM INTERFACE',
    description: "Implemented during the CodeClause Java Developer Internship, this project focused on storing individual details in a database and accessing it using Java JDBC, solidifying core Java concepts.",
    link: 'https://github.com/Yashaswini0001/ATM_interface',
    tech: ['Java', 'SQL', 'JDBC', 'Swing'],
  },
  {
    title: 'AI Surveillance for Early Detection of Emergency',
    description: "Developed as part of a mini-project in college, this system detects emergency sounds using a CNN model and integrates the model with a Flask application.",
    link: 'https://github.com/Yashaswini0001/AI_surveillance',
    tech: ['CNN', 'Flask', 'Python'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 text-blue-900 bg-white -my-8" style={{ backgroundColor: '#0C0A33' }}>
      
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-white text-left">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
              <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100  text-sm font-semibold px-2.5 py-0.5 rounded">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-semibold">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
