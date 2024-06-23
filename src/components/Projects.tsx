// src/components/Projects.tsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'INITWAVE WEBSITE',
    description: "Led the development of Initwave’s official website using React, ensuring a seamless user experience and modern design. Collaborated with backend developers to integrate frontend and backend components effectively.",
    link: 'https://initwave.com',
    tech: ['React.js', 'HTML', 'CSS'],
  },
  {
    title: 'FEE RECEIPT',
    description: "Developed as part of the CodeClause Java Developer Internship, this project involved integrating databases, JDBC, designing UI in Java using Swing, and printing fee receipts, providing a deeper understanding of advanced Java concepts.",
    link: 'https://github.com/Yashaswini0001/FEE_receipt',
    tech: ['Java', 'SQL', 'JDBC', 'Swing', 'Apache'],
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
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} className="next-btn text-3xl" onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} className="back-btn text-3xl" onClick={() => sliderRef.current?.slickPrev()} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-900 text-center">Projects</h2>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <div className="border p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="font-bold text-2xl mb-2 text-blue-800">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">View Project</a>
                </div>
              </div>
            ))}
          </Slider>
          <FontAwesomeIcon icon={faChevronLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl -m-6" onClick={() => sliderRef.current?.slickPrev()} />
          <FontAwesomeIcon icon={faChevronRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl -m-6" onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
