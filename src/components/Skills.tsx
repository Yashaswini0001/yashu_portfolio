// src/components/Skills.tsx
import React from 'react';
import '../index.css';

const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind CSS', 'Typescript'],
  backend: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'CI/CD','Maven'],
  aiml: ['Python', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas', 'NumPy','ImageProcessing']
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#0C0A33' }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-white text-left">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition-transform duration-500 transform hover:scale-105">
              <h3 className="font-bold text-2xl mb-4 text-blue-900">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul>
                {skillsList.map((skill, index) => (
                  <li key={index} className="text-gray-700 mb-2">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
