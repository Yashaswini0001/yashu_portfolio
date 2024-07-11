import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header style={{ backgroundColor: '#0C0A33' }} className="text-white font-bold p-4">
      <div className="container mx-auto flex justify-end items-center relative">
        <button className="sm:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          ref={navRef}
          className={`fixed sm:static sm:flex top-0 right-0 h-[60vh] bg-white sm:bg-transparent w-1/2 sm:w-auto transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } sm:transform-none transition-transform duration-300 ease-in-out z-50 shadow-lg`}
        >
          {isOpen && (
            <button className="absolute top-4 right-4 text-2xl text-black lg:text-white" onClick={toggleMenu}>
              <FaTimes />
            </button>
          )}
          <ul className="flex flex-col sm:flex-row justify-end space-y-5 sm:space-y-0 sm:space-x-5 p-8 sm:p-4 text-black sm:text-white">
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1oEY-1ytlnwR5iFHiA4Ky1NQIjdqYjYyT/view?usp=drivesdk" onClick={handleLinkClick}>Resume</a></li>
            <li><a href="#" onClick={handleLinkClick}>Blogs</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
