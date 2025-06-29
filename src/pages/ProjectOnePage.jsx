import {React, useEffect }from 'react';
import { MalariaAc, MalariaRe } from '../assets/images/picData';

const ProjectOnePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div className="project-one-page py-12 px-6 md:px-12 bg-gradient-to-r from-purple-100 to-blue-100">
      {/* Project Title */}
      <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Malaria Classification Project
      </h2>

      {/* Project Description */}
      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
        This project utilizes a Convolutional Neural Network (CNN) to classify cell images as either 
        infected with malaria or healthy. It leverages the Malaria dataset from TensorFlow Datasets (TFDS) 
        to develop an efficient and scalable solution for early malaria diagnosis.
      </p>

      {/* Key Features */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
          <li>Data preprocessing to ensure optimal input for the model.</li>
          <li>Implementation of a CNN architecture for precise image classification.</li>
          <li>Achieved effective results in distinguishing infected from healthy cells.</li>
        </ul>
      </section>

      {/* Technology Stack */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technology Stack</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
          <li>TensorFlow</li>
          <li>Python</li>
          <li>TensorFlow Datasets (TFDS)</li>
        </ul>
      </section>

      {/* Results */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Results</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The CNN model demonstrated strong performance in accurately classifying cell images. This 
          showcases its potential as a diagnostic aid for healthcare professionals and researchers.
        </p>
      </section>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <img
          src={MalariaAc}
          alt="Accuracy visualization"
          className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
        <img
          src={MalariaRe}
          alt="Model results visualization"
          className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectOnePage;
