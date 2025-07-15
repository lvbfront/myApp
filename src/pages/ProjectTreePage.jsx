import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaGithub } from 'react-icons/fa';
import { BsFiletypeCsv, BsFiletypeXlsx, BsSendFill } from 'react-icons/bs';
import { IoGameController, IoCodeSlash } from 'react-icons/io5';

// 1. Updated project data to include icons and tech stacks
const projects = [
  {
    name: "Book Details Scraper",
    description: "A web scraper built to extract book information from Aseer Al-Kotb using the Requests and BeautifulSoup libraries.",
    link: "https://github.com/lvbfront/Python_Projects/blob/main/Extract_Data.py",
    icon: <IoCodeSlash />,
    tech: ['Python', 'BeautifulSoup', 'Requests']
  },
  {
    name: "Games",
    description: "A collection of classic games like Pong and Snake, recreated using Python and the Turtle module.",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/games",
    icon: <IoGameController />,
    tech: ['Python', 'Turtle']
  },
  {
    name: "CSV Manager",
    description: "A utility script for programmatically creating, reading, and writing data to and from CSV files.",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/CSV",
    icon: <BsFiletypeCsv />,
    tech: ['Python', 'CSV Module']
  },
  {
    name: "Excel Automation",
    description: "Automate repetitive Excel tasks, perform data analysis, and generate reports programmatically with Openpyxl.",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/excel",
    icon: <BsFiletypeXlsx />,
    tech: ['Python', 'Openpyxl']
  },
  {
    name: "Database Project",
    description: "A simple data management system created by designing and interacting with a database using SQLite.",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/db",
    icon: <FaDatabase />,
    tech: ['Python', 'SQLite']
  },
  {
    name: "Gmail Automation",
    description: "A program designed to automatically compose and send emails through a Gmail account using Python.",
    link: "https://github.com/lvbfront/Python_Projects/tree/main/emails",
    icon: <BsSendFill />,
    tech: ['Python', 'SMTP']
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 50 }
  },
};


const ProjectThreePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 2. Switched to the dark theme for consistency
    <motion.div
      className="bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white min-h-screen p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Python Projects
        </motion.h1>
        <motion.p 
          className="text-center text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A collection of scripts and applications showcasing my skills in automation, data handling, and more.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-gray-800/20 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 transition-colors duration-300"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl text-purple-400">{project.icon}</span>
                  <h2 className="text-2xl font-semibold text-gray-100">{project.name}</h2>
                </div>
                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* 4. Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-cyan-400/10 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="bg-gray-900/30 p-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectThreePage;