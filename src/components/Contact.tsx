// src/components/Contact.tsx
import React from 'react';
import '../index.css';
import { FaWhatsapp } from 'react-icons/fa';  // Correct import for the WhatsApp icon

const Contact: React.FC = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-900 text-center">Contact Me</h2>
      <form className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea id="message" className="w-full p-2 border rounded" rows={4}></textarea>
        </div>
        <button type="submit" className="bg-blue-800 text-white p-2 rounded">Send</button>
      </form>
      <div className="mt-8 text-center">
        <a 
          href="https://wa.me/+919902665436" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center bg-green-500 text-white p-3 rounded-full"
        >
          <FaWhatsapp className="mr-2" /> WhatsApp Me
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
