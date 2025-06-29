import React, { useEffect, useState } from 'react';
import { easeIn, motion } from 'framer-motion';
import mewing from '../assets/images/Mewing.jpg';
import reactLogo from '../assets/images/reactt.png';
import {python, tail, sql, tf} from '../assets/images/picData'

const skills = [
  {
    id: 1,
    image: python,
    title: 'Python',
    description:
      'Experienced in Python for Computer Vision, data science, automation, and building machine learning models.',
  },
  {
    id: 2,
    image: reactLogo,
    title: 'React',
    description:
      'Proficient in building dynamic, interactive UIs using React and state management with hooks and Redux.',
  },
  {
    id: 3,
    image: tail,
    title: 'Tailwind CSS',
    description:
      'A utility-first CSS framework that provides a set of pre-designed utility classes to build custom designs without writing any custom CSS.',
  },
  {
    id: 4,
    image: sql,
    title: 'SQL',
    description:
      'Skilled in writing efficient SQL queries for data manipulation, reporting, and analytics.',
  },
  {
    id: 5,
    image: tf,
    title: 'TensorFlow',
    description:
      'Experienced in building and deploying machine learning models with TensorFlow for predictive analytics.',
  },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.skills-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillVariants = {
    hidden: { opacity: 0, x: 100 }, // Slide in from right
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="skills-section skills py-12 px-6 md:px-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills</h2>
      <motion.div
        className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="skill-card bg-gradient-to-r from-blue-400 to-purple-200 shadow-md p-6 rounded-lg text-center"
            variants={skillVariants}
            whileHover={{ scale: 1.1 }} // Hover animation
            transition={{ duration: 0.3 }}
          >
            <img
              src={skill.image}
              alt={`${skill.title} Logo`}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
            <p className="text-gray-700">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;