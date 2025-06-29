import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { number, Malaria, python, ring } from '../assets/images/picData.js';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects py-12 px-6">
      <h2 className="text-3xl font-semibold text-black mb-6">Projects</h2>
      <div className="project-list grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Project One */}
        <motion.div
          className="project bg-gradient-to-r from-blue-400 to-purple-200 shadow-md p-4 rounded-lg flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/project-one" className="block">
            <img
              src={Malaria}
              alt="Project One"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Malaria Classification Project</h3>
            <p className="text-gray-700 text-sm line-clamp-3">
              This project utilizes TensorFlow and the Malaria dataset from TensorFlow Datasets (TFDS) to classify cell images as either infected with malaria or healthy. The model was trained on labeled image data using advanced techniques like data augmentation and optimization to improve accuracy.
            </p>
          </Link>
        </motion.div>

        {/* Project Two */}
        <motion.div
          className="project bg-gradient-to-r from-blue-400 to-purple-200 shadow-md p-4 rounded-lg flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/project-two" className="block">
            <img
              src={number}
              alt="Project Two"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Number Recognition</h3>
            <p className="text-gray-700 text-sm line-clamp-3">
              This project focuses on recognizing handwritten digits using the MNIST dataset. By employing advanced machine learning techniques, the model accurately identifies numbers ranging from 0 to 9.
            </p>
          </Link>
        </motion.div>

        {/* Project Three */}
        <motion.div
          className="project bg-gradient-to-r from-blue-400 to-purple-200 shadow-md p-4 rounded-lg flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/project-three" className="block">
            <img
              src={python}
              alt="Project Three"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Python Projects</h3>
            <p className="text-gray-700 text-sm line-clamp-3">Simple Python projects.</p>
          </Link>
        </motion.div>

        {/* Project Four */}
        <motion.div
          className="project bg-gradient-to-r from-blue-400 to-purple-200 shadow-md p-4 rounded-lg flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="https://trydata-59757.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={ring}
              alt="Project Three"
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-lg font-bold mb-2">Catalog Website</h3>
            <p className="text-gray-700 text-sm line-clamp-3">
              A website that displays products (not complete)
            </p>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
