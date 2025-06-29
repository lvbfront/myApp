import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send('service_745hnp8', 'template_b5ii9hc', formData, 'SNpVJoSK24uL7yaBH')
      .then((response) => {
        console.log('Message sent successfully!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000); // Hide message after 5 seconds
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="contact min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Main grid layout: 1 column on mobile, 2 on desktop */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Info and Socials */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
              Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form or reach out via email.
            </p>
            
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-4 mb-8 text-gray-300">
              <FaEnvelope className="text-cyan-400" />
              <span>abdu44ll3ah55@gmail.com</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-8">
              <a href="https://github.com/lvbfront" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125 text-4xl">
                <FaGithub />
              </a>
              <a href="https://x.com/pyuqU99" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125 text-4xl">
                <FaTwitter />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: "Frosted Glass" Form */}
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text" id="name" name="name" placeholder="your name"
                  value={formData.name} onChange={handleChange} required
                  className="w-full bg-transparent border-b-2 border-gray-400 text-white placeholder:text-gray-500 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email" id="email" name="email" placeholder="you@example.com"
                  value={formData.email} onChange={handleChange} required
                  className="w-full bg-transparent border-b-2 border-gray-400 text-white placeholder:text-gray-500 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="mb-8">
                <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message" name="message" rows="4" placeholder="Your message here..."
                  value={formData.message} onChange={handleChange} required
                  className="w-full bg-transparent border-b-2 border-gray-400 text-white placeholder:text-gray-500 py-2 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full font-bold py-3 px-4 rounded-lg text-white bg-gradient-to-r from-purple-600 to-cyan-500 disabled:opacity-50"
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px rgb(34, 211, 238)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            {status === 'success' && <p className="mt-4 text-green-400 text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="mt-4 text-red-400 text-center">Failed to send message. Please try again.</p>}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;