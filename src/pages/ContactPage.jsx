import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';   {/** i used emailjs service*/}
import { FaGithub, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_745hnp8', 'template_b5ii9hc', formData, 'SNpVJoSK24uL7yaBH')
      .then((response) => {
        console.log('Message sent successfully!', response.status, response.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
      });
  };

  return (
    <motion.section
      id="contact"
      className="contact py-12 px-6 md:px-12 bg-gradient-to-r from-blue-400 to-purple-200 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Me</h2>
      <p className="text-gray-700 text-lg mb-4 text-center">
        Feel free to reach out for any project collaborations or job opportunities.
      </p>
      <p className="text-gray-700 text-lg mb-4 text-center">Email: abdu44ll3ah55@gmail.com</p>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://github.com/lvbfront"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/pyuqU99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 text-2xl"
        >
          <FaTwitter />
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none placeholder-gray-600 text-gray-700 border rounded w-full py-2 px-3 bg-gradient-to-br from-blue-500 via-purple-300 to-pink-200  leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none placeholder-gray-600 border bg-gradient-to-br from-blue-500 via-purple-300 to-pink-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none placeholder-gray-600 border bg-gradient-to-br from-blue-500 via-purple-300 to-pink-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.button>
      </form>

      {submitted && (
        <div className="mt-4 text-green-600 text-center">
          Your message has been sent!
        </div>
      )}
    </motion.section>
  );
};

export default ContactPage;
