
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillsSection from '../components/SkillsSection.jsx'
import mewing from '../assets/images/Mewing.jpg';
import {number, Malaria, AIThingy, python, ring} from '../assets/images/picData.js';
import ContactPage from './ContactPage.jsx'
import ProjectsSection from './ProjectsSection.jsx'
import reactLogo from '../assets/images/reactt.png';
import RotatingText from '../components/RotatingText.jsx';
import GlitchText from '../components/GlitchText.jsx';
import InfiniteMenu from '../components/InfiniteMenu.jsx'; // Assuming you have an InfiniteMenu component
import { MalariaAc, MalariaRe } from '../assets/images/picData';
import CircularGallery from '../components/CircularGallery.jsx'

const items = [
  {
    image: MalariaRe,
    link: '/project-one',
    title: 'malaria ',
    description: 'This is pretty cool, right?'
  },
  {
    image: number,
    link: '/project-two',
    title: 'numbers',
    description: 'This is pretty cool, right?'
  },
  {
    image: python,
    link: '/project-three',
    title: 'python',
    description: 'This is pretty cool, right?'
  },
  {
    image: ring,
    link: 'https://trydata-59757.web.app/',
    title: 'Catalog Website',
    description: 'A website that displays products (not complete)'
  }
];


const HomePage = () => {
  return (
    <motion.div 
    className="homepage bg-gradient-to-br from-purple-500 via-pink-400 to-blue-500 min-h-screen"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
>
  <motion.header
    className="text-white text-center rounded-xl flex items-center justify-center"
    style={{
      backgroundImage: `url(${AIThingy})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '80vh',
    }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="bg-black bg-opacity-50 rounded-xl px-8 py-12 w-3/4 sm:w-1/2">
      <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
        Welcome
      </h1>
      
  
      
      <p className="text-xl mt-4 font-medium">
        Abdullah <RotatingText 
        texts={['AI Eng', 'Web Dev','Is Cool!']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-gray-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
      </p>
    </div>
  </motion.header>



      {/* About Section */}
      <motion.section
  className="about py-16 mt-6 p-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-300 to-pink-200 shadow-lg px-8 md:px-16 flex flex-col items-center text-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  
    
  <GlitchText
    speed={5}
    enableShadows={true}
    enableOnHover={false}
    className='custom-class'
  >
    WHO AM I?
  </GlitchText>
  <p className="text-gray-800 text-lg leading-relaxed max-w-3xl">
  I am an AI student passionate about creating AI models and building websites. I specialize in using Python, TensorFlow, React, farmer Motion and Tailwind CSS to craft solutions and dynamic applications.
  </p>

  
  


</motion.section>



      <section>

        skills
                

        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </section>


      {/* Projects Section */}

      <section id="projects" className="projects py-12 px-6 md:px-12 ">
        projects
        
         <div 
        className="w-full rounded-xl bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100" 
        style={{ height: '600px', position: 'relative' }}
      >
        <InfiniteMenu items={items} />
      </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="contact py-12 px-6 md:px-12">
      <ContactPage/>
      </section>
    </motion.div>
  );
};

export default HomePage;
