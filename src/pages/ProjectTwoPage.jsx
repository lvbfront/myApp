import {React, useEffect }from 'react';
import {numberM, numberRe} from '../assets/images/picData'

const ProjectTwoPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div className="project-two-page py-12 px-6 md:px-12 bg-gradient-to-r from-purple-100 to-blue-100
">
      {/* Project Title */}
      <h2 className="text-4xl font-bold text-purple-600 mb-8 text-center">
        MNIST Number Recognition Project
      </h2>

      {/* Project Description */}
      <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
        This project leverages the MNIST dataset, a well-known benchmark in the field of machine learning, to develop 
        a model capable of recognizing handwritten digits ranging from 0 to 9. The goal is to demonstrate the power of 
        neural networks in pattern recognition and classification tasks.
      </p>

      {/* Key Features */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
          <li>Preprocessing the MNIST dataset to optimize training inputs.</li>
          <li>visualize the MNIST dataset</li>
          <li>Designing and training a neural network architecture for digit classification.</li>
          <li>Achieving high accuracy on test data, showcasing robust model performance.</li>
        </ul>
      </section>

      {/* Technology Stack */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technology Stack</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
          <li>TensorFlow</li>
          <li>Python</li>
          <li>MNIST Dataset</li>
          <li>sklearn</li>
          <li>matplotlib</li>
          <li>seaborn</li>
        </ul>
      </section>

      {/* Results */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Results</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The model successfully achieved high accuracy in recognizing handwritten digits, demonstrating its effectiveness 
          in solving real-world digit recognition challenges.
        </p>
      </section>

      {/* Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <img
          src={numberRe}
          alt="Model Accuracy Graph"
          className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
        <img
          src={numberM}
          alt="Confusion Matrix Visualization"
          className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectTwoPage;
