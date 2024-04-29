// src/pages/ContactPage.js
import React from 'react';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="mb-6">If you have any questions, feel free to reach out. Fill in the form below or follow me on social media.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name:</label>
                <input type="text" id="name" className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email:</label>
                <input type="email" id="email" className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message:</label>
                <textarea id="message" rows="4" className="w-full px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Direct Contact</h3>
            <p>Email: your-email@example.com</p>
            <p>Phone: (123) 456-7890</p>
            {/* Add your social media links */}
            <p className="mt-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
            </p>
            <p>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">GitHub</a>
            </p>
            {/* More links can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
