import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircularText from './CircularText';
import { Logo } from '../assets/images/picData';

/**
 * A custom hook to detect scroll direction.
 * @returns {String} 'up' or 'down'
 */
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDirection;
};


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const circularTextRef = useRef(null);
  const scrollDirection = useScrollDirection(); // Use the custom hook

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClasses = "hover:text-gray-500 px-3 py-2 cursor-pointer rounded-md";
  const mobileNavLinkClasses = "block hover:text-gray-500 cursor-pointer py-2";

  // Framer Motion variants for the navbar animation
  const navbarVariants = {
    // Navbar is visible
    visible: {
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    // Navbar is hidden (slid up)
    hidden: {
      y: '-100%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.nav
      className="bg-gray-200 p-4 w-full fixed top-0 z-30 shadow-md"
      variants={navbarVariants}
      // Animate based on scroll direction. Show if scrolling up, hide if scrolling down (and not at the top).
      animate={scrollDirection === 'down' ? 'hidden' : 'visible'}
      initial="visible"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with animation and circular text */}
        <a href="#" className="flex items-center" onClick={closeMenu}>
          <div
            className="relative flex items-center justify-center mr-3"
            onMouseEnter={() => circularTextRef.current?.hoverStart()}
            onMouseLeave={() => circularTextRef.current?.hoverEnd()}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularText
                ref={circularTextRef}
                text=" A - W - B -"
                radius={40}
                spinDuration={25}
                onHover="speedUp"
                textColor="text-deep-purple-800"
                textSize="text-[10px] font-semibold"
              />
            </div>
            <motion.img
              src={Logo}
              alt="Store logo"
              className="w-12 h-12 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>
          <motion.span
            className="font-bold text-xl text-deep-purple-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Abdullah
          </motion.span>
        </a>

        {/* Mobile menu button */}
        <motion.div className="relative md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <button className="text-deep-purple-800" onClick={toggleMenu}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </motion.div>

        {/* Mobile menu overlay and sidebar (no changes here) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} onClick={closeMenu}
            />
          )}
        </AnimatePresence>
        <motion.div
          className={`fixed inset-y-0 right-0 transform bg-white p-4 w-64 text-deep-purple-800 z-50`}
          initial={{ x: '100%' }} animate={{ x: isMenuOpen ? '0%' : '100%' }} exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <button onClick={closeMenu} className="text-black mb-4">Close</button>
          <a href="#" className={mobileNavLinkClasses} onClick={closeMenu}>Home</a>
          <a href="#projects" className={mobileNavLinkClasses} onClick={closeMenu}>Projects</a>
          <a href="#contact" className={mobileNavLinkClasses} onClick={closeMenu}>Contact</a>
          <a href="#about" className={mobileNavLinkClasses} onClick={closeMenu}>About</a>
        </motion.div>

        {/* Navigation for larger screens (no changes here) */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className={navLinkClasses} onClick={closeMenu}>Home</a>
          <a href="#projects" className={navLinkClasses} onClick={closeMenu}>Projects</a>
          <a href="#contact" className={navLinkClasses} onClick={closeMenu}>Contact</a>
          <a href="#about" className={navLinkClasses} onClick={closeMenu}>About</a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;