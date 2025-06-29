import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircularText from './CircularText'; // Import the separated component

// =======================================================
// IMPORTANT: LOGO IMPORT
// The build environment can't access your local files, so I'm using a placeholder.
// To use your own logo, REMOVE the line below and UNCOMMENT the import line.
// Make sure the path '../assets/images/picData' is correct for your project structure.

 import { Logo } from '../assets/images/picData';
// =======================================================

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const circularTextRef = useRef(null); // Create a ref for the CircularText component

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Common styles for nav links. 
  // You can replace these with <Link> or <ScrollLink> if you have react-router-dom or react-scroll installed.
  const navLinkClasses = "hover:text-gray-500 px-3 py-2 cursor-pointer rounded-md";
  const mobileNavLinkClasses = "block hover:text-gray-500 cursor-pointer py-2";

  return (
    <motion.nav
      className="bg-gray-200 p-4 w-full top-0 z-30 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with animation and circular text */}
        <a href="#" className="flex items-center" onClick={closeMenu}>
          
          <div 
            className="relative flex items-center justify-center mr-3"
            // Trigger the hover effect on the CircularText component via its ref
            onMouseEnter={() => circularTextRef.current?.hoverStart()}
            onMouseLeave={() => circularTextRef.current?.hoverEnd()}
          >
            {/* The circular text component positioned absolutely around the logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularText
                ref={circularTextRef} // Assign the ref
                text=" A - W - B -"
                radius={40}
                spinDuration={25}
                onHover="speedUp"
                textColor="text-deep-purple-800"
                textSize="text-[10px] font-semibold"
              />
            </div>

            {/* The logo image is in the center */}
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

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>

        {/* Sidebar menu for mobile */}
        <motion.div
          className={`fixed inset-y-0 right-0 transform bg-white p-4 w-64 text-deep-purple-800 z-50`}
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? '0%' : '100%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <button onClick={closeMenu} className="text-black mb-4">Close</button>
          <a href="#" className={mobileNavLinkClasses} onClick={closeMenu}>Home</a>
          <a href="#projects" className={mobileNavLinkClasses} onClick={closeMenu}>Projects</a>
          <a href="#contact" className={mobileNavLinkClasses} onClick={closeMenu}>Contact</a>
          <a href="#about" className={mobileNavLinkClasses} onClick={closeMenu}>About</a>
        </motion.div>

        {/* Navigation for larger screens */}
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
