import React from 'react';
import '../index.css';

// Import skill images
import htmlLogo from '../Images/html.jpeg';
import cssLogo from '../Images/CSS.jpg';
import jsLogo from '../Images/javascript.jpeg';
import reactLogo from '../Images/react.jpeg';
import expressLogo from '../Images/express.jpeg';
import tailwindLogo from '../Images/tailwind.jpeg';
import javaLogo from '../Images/java.jpeg';
import springbootLogo from '../Images/spring.jpeg';
import typescript from '../Images/typescript.png';
import aiml from '../Images/aiml.jpg';

const skills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React.js', logo: reactLogo },
  { name: 'Express', logo: expressLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Spring Boot', logo: springbootLogo },
  { name: 'Typescript', logo: typescript },
];

const skills1 = [
  { name: 'Tailwind', logo: tailwindLogo },
  { name: 'AIML', logo: aiml },
];

const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-fixed bg-opacity-25 bg-[url('../Images/pattern.png')]"></div>
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-4xl font-extrabold mb-10 text-blue-900">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center shadow-xl p-8 rounded-lg bg-white transform hover:-translate-y-2 hover:rotate-2 hover:shadow-2xl transition-all duration-500 ease-in-out skill-card-${index}`}
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-20 h-20 mb-4 rounded-full" />
            <span className="font-bold text-xl text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-8 mt-8">
        {skills1.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center shadow-xl p-8 rounded-lg bg-white transform hover:-translate-y-2 hover:rotate-2 hover:shadow-2xl transition-all duration-500 ease-in-out skill-card-${index + skills.length} w-full md:w-1/5`}
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-20 h-20 mb-4 rounded-full" />
            <span className="font-bold text-xl text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
      
    </div>
    <style>{`
      .skill-card-0 {
        animation: fadeInUp 1s ease-in-out forwards 0.1s;
      }
      .skill-card-1 {
        animation: fadeInUp 1s ease-in-out forwards 0.2s;
      }
      .skill-card-2 {
        animation: fadeInUp 1s ease-in-out forwards 0.3s;
      }
      .skill-card-3 {
        animation: fadeInUp 1s ease-in-out forwards 0.4s;
      }
      .skill-card-4 {
        animation: fadeInUp 1s ease-in-out forwards 0.5s;
      }
      .skill-card-5 {
        animation: fadeInUp 1s ease-in-out forwards 0.6s;
      }
      .skill-card-6 {
        animation: fadeInUp 1s ease-in-out forwards 0.7s;
      }
      .skill-card-7 {
        animation: fadeInUp 1s ease-in-out forwards 0.8s;
      }
      .skill-card-8 {
        animation: fadeInUp 1s ease-in-out forwards 0.9s;
      }
      .skill-card-9 {
        animation: fadeInUp 1s ease-in-out forwards 1s;
      }
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </section>
);

export default Skills;
