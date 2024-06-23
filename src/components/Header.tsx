// src/components/Header.tsx
import React from 'react';
import '../index.css'
const Header: React.FC = () => (
  <header className="bg-blue-800 text-white p-4">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Yashashwini</h1>
      <nav>
        <ul className="flex space-x-4">
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
