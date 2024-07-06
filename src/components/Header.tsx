import React from 'react';
import '../index.css';

const Header: React.FC = () => (
  <header style={{ backgroundColor: '#0C0A33' }} className="text-white font-bold p-4">
    <div className="container mx-auto my-5">
      <nav>
        <ul className="flex justify-end space-x-5">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href='https://drive.google.com/file/d/1oEY-1ytlnwR5iFHiA4Ky1NQIjdqYjYyT/view?usp=drivesdk'>Resume</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
