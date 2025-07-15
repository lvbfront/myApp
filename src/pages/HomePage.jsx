import React from 'react';
import { motion } from 'framer-motion';

// Import your components
import ContactPage from './ContactPage.jsx';
import RotatingText from '../components/RotatingText.jsx';
import InfiniteMenu from '../components/InfiniteMenu.jsx';
import CircularGallery from '../components/CircularGallery.jsx';
import ASCIIText from '../components/ASCIIText.jsx';

// Import your images and icons
import { number, MalariaRe, AIThingy, python, ring } from '../assets/images/picData.js';
import { FaArrowDown } from 'react-icons/fa';

// Project items for the InfiniteMenu
const items = [
  {
    image: MalariaRe,
    link: '/project-one',
    title: 'Malaria Classifier',
    description: 'A deep learning model to detect malaria from cell images.',
  },
  {
    image: number,
    link: '/project-two',
    title: 'Digit Recognizer',
    description: 'An AI to recognize handwritten digits using computer vision.',
  },
  {
    image: python,
    link: '/project-three',
    title: 'Automation Scripts',
    description: 'Various scripts for automating repetitive daily tasks.',
  },
  {
    image: ring,
    link: 'https://trydata-59757.web.app/',
    title: 'Catalog Website',
    description: 'A proof-of-concept e-commerce catalog display.',
  },
];

// Reusable animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <motion.div
      className="homepage bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* --- HERO SECTION --- */}
      <header id="home" className="relative flex items-center justify-center h-screen text-center overflow-hidden">
        {/* Background Image with a dark overlay for text readability */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${AIThingy})` }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/75" />

        <motion.div
          className="relative z-10 p-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            Abdullah
          </h1>
          <div className="text-xl md:text-2xl mt-4 font-light text-gray-300 flex items-center justify-center gap-3">
            <span>I am an</span>
            <RotatingText
              texts={['AI Engineer', 'Web Developer', 'Innovator']}
              mainClassName="px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-lg"
              staggerFrom={'last'}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
          
          <motion.a
            href="#projects"
            className="mt-12 inline-block px-8 py-4 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
        
        {/* Scroll Down Indicator */}
        <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
            <FaArrowDown className="text-2xl text-gray-400" />
        </motion.div>
      </header>

      {/* Main content container for consistent padding and max-width */}
      <main className="container mx-auto max-w-7xl px-6">
        
        {/* --- ABOUT SECTION --- */}
        <motion.section
          id="about"
          className="py-24 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="relative w-full h-48 md:h-64 mb-8"
          >
            <ASCIIText
              text="WHO AM I?"
              asciiFontSize={12}
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg font-bitcount text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            I am a passionate AI student dedicated to crafting intelligent models and building beautiful, dynamic websites. My expertise lies at the intersection of Python, TensorFlow, and modern web technologies like React and Framer Motion, allowing me to create seamless and impactful digital solutions.
          </motion.p>
        </motion.section>

        {/* --- SKILLS SECTION --- */}
        <motion.section
          id="skills"
          className="py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            My Tech Stack
          </motion.h2>
          <motion.div variants={itemVariants} className="h-[600px] w-full relative">
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
            />
          </motion.div>
        </motion.section>

        {/* --- PROJECTS SECTION --- */}
        <motion.section
          id="projects"
          className="py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="w-full relative" style={{ height: '600px' }}>
            <InfiniteMenu items={items} />
          </motion.div>
        </motion.section>
      </main>

      {/* --- CONTACT SECTION --- */}
      <ContactPage />

    </motion.div>
  );
};

export default HomePage;