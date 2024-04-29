// src/pages/AboutPage.js
import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          I am a passionate and driven individual with a keen interest in technology and innovation.
          My journey in the tech industry began in [Your Start Year], and I have since developed a strong
          skill set in areas such as [relevant skills or fields].
        </p>
        <p className="mb-4">
          My work primarily focuses on [briefly describe your focus], and I have contributed to 
          [notable projects, experiences, or companies]. I am committed to leveraging technology 
          to solve real-world problems and make a positive impact on people's lives.
        </p>
        <h2 className="text-3xl font-semibold mb-3">My Goals</h2>
        <p>
          Looking ahead, I aim to further my expertise in [Your Future Goals in Industry] and 
          explore innovative ways to enhance [specific aspects or technologies]. I am also 
          interested in collaborating on projects that are at the intersection of [intersecting 
          industries or fields].
        </p>
        {/* You can add more sections like skills, experience, education, etc. */}
      </div>
    </div>
  );
};

export default AboutPage;
