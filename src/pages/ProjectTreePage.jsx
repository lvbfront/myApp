import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "Book Details Scraper",
    description: "This Python project is a web scraping application that extracts information about a book from the website Aseer Al-Kotb. Using the requests library to fetch the webpage content and BeautifulSoup for parsing",
    link: "https://github.com/lvbfront/Python_Projects/blob/main/Extract_Data.py",
  },
  {
    name: "Games",
    description: "Using Python to make popular games",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/games",
  },
  {
    name: "CSV Reading-Writing",
    description: "Using Python to create and read CSV files",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/CSV",
  },
  {
    name: "Excel Using Python",
    description: "Automating repetitive Excel tasks, performing data analysis, or generating reports programmatically.",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/excel",
  },
  {
    name: "Database Project",
    description: "Creating a database using SQLite.",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/db",
  },
  {
    name: "Gmail Project",
    description: "Creating a program to send emails in Python.",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/emails",
  },
];

const ProjectThreePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 min-h-screen p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Python Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-blue-400 to-purple-200 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.name}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectThreePage;
