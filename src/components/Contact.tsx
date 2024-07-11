import React, { useState } from 'react';
import '../index.css';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 

const Contact: React.FC = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "3ec50c69-ec14-4c16-a7d4-499206b8ff83"); // Secure this key in real applications

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
   
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div id='c1' className="w-full md:w-1/2 px-4 -mx-9 sm:-mt-24">
          <h2 className="text-4xl font-bold text-center text-blue-900">Get in touch</h2>
          <p className="text-center text-xl py-6">I'm always open to new opportunities and collaborations. Feel free to reach out with any questions, project inquiries, or simply to connect. I look forward to hearing from you!</p>
          <p className='text-xl mt-6 text-center'>
            <FaEnvelope className="inline mr-2" /> Email: yashashwinis303@gmail.com
          </p>
          <p className='text-xl text-center'>
            <FaLinkedin className="inline mr-2 " /> LinkedIn: <a href='https://www.linkedin.com/in/yashashwini-s-724719230'>LinkedIn URL</a>
          </p>
          <p className='text-xl text-center'>
            <FaGithub className="inline mr-2 " /> GitHub: <a href='https://github.com/Yashaswini0001'>GitHub URL</a>
          </p>
        </div>
        <div id='c2' className="w-full md:w-1/2 px-4">
          <h2 className="text-4xl font-bold mb-8 text-blue-900 text-center mt-20">Contact</h2>
          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="w-full p-2 border rounded" rows={4} required></textarea>
            </div>
            <button type="submit" className="bg-blue-900 text-white p-2 rounded-md w-20">Send</button>
            <span>{result}</span>
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
      </div>
    </section>
    
  );
};

export default Contact;
