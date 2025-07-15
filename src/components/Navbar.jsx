import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // 1. Import tools from React Router
import CircularText from './CircularText';
import { Logo } from '../assets/images/picData';

/**
 * A custom hook to detect scroll direction.
 */
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 10 && currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDirection;
};

// Data for navigation links
const navLinks = [
  { to: 'home', text: 'Home' },
  { to: 'about', text: 'About' },
  { to: 'skills', text: 'Skills' },
  { to: 'projects', text: 'Projects' },
  { to: 'contact', text: 'Contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const circularTextRef = useRef(null);
  const scrollDirection = useScrollDirection();
  
  // 2. Detect the current page path
  const location = useLocation();
  const onHomePage = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClasses = "relative text-gray-200 transition-colors duration-300 hover:text-cyan-400 cursor-pointer group";

  const navbarVariants = {
    visible: { y: 0, transition: { duration: 0.35, ease: 'easeInOut' } },
    hidden: { y: '-100%', transition: { duration: 0.35, ease: 'easeInOut' } },
  };

  const topVariant = { closed: { rotate: 0, y: 0 }, opened: { rotate: 45, y: 8 } };
  const middleVariant = { closed: { opacity: 1 }, opened: { opacity: 0 } };
  const bottomVariant = { closed: { rotate: 0, y: 0 }, opened: { rotate: -45, y: -8 } };

  const renderLinks = (isMobile = false) => {
    return navLinks.map((link) => {
      const linkContent = isMobile ? link.text : (
        <>
          {link.text}
          <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </>
      );

      // 3. Conditionally render the correct link type
      if (onHomePage) {
        return (
          <ScrollLink
            key={link.to} to={link.to} spy={true} smooth={true} duration={500} offset={-80}
            className={isMobile ? "text-2xl text-gray-300 hover:text-cyan-400 cursor-pointer" : navLinkClasses}
            activeClass={isMobile ? "text-cyan-400 font-bold" : "text-cyan-400"}
            onClick={closeMenu}
          >
            {linkContent}
          </ScrollLink>
        );
      } else {
        return (
          <RouterLink
            key={link.to}
            to={`/${link.to === 'home' ? '' : '#' + link.to}`} // Navigates to homepage, then jumps to the section ID
            className={isMobile ? "text-2xl text-gray-300 hover:text-cyan-400 cursor-pointer" : navLinkClasses}
            onClick={closeMenu}
          >
            {linkContent}
          </RouterLink>
        );
      }
    });
  };

  return (
    <motion.nav
      className="bg-black/30 backdrop-blur-md p-4 w-full fixed top-0 z-50 shadow-lg"
      variants={navbarVariants}
      animate={scrollDirection === 'down' ? 'hidden' : 'visible'}
      initial="visible"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <RouterLink to="/" className="flex items-center cursor-pointer" onClick={closeMenu}>
          <div
            className="relative flex items-center justify-center mr-3"
            onMouseEnter={() => circularTextRef.current?.hoverStart()}
            onMouseLeave={() => circularTextRef.current?.hoverEnd()}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularText ref={circularTextRef} text=" A - W - B -" radius={40} spinDuration={25} onHover="speedUp" textColor="text-white" textSize="text-[10px] font-semibold" />
            </div>
            <motion.img src={Logo} alt="Store logo" className="w-12 h-12 rounded-full" whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} />
          </div>
          <span className="font-bold text-xl text-white">Abdullah</span>
        </RouterLink>

        {/* Animated Hamburger Menu Icon */}
        <div className="md:hidden">
          <button className="w-8 h-6 flex flex-col justify-between" onClick={toggleMenu}>
              <motion.span variants={topVariant} animate={isMenuOpen ? "opened" : "closed"} className="block h-0.5 w-full bg-white rounded-full"></motion.span>
              <motion.span variants={middleVariant} animate={isMenuOpen ? "opened" : "closed"} className="block h-0.5 w-full bg-white rounded-full"></motion.span>
              <motion.span variants={bottomVariant} animate={isMenuOpen ? "opened" : "closed"} className="block h-0.5 w-full bg-white rounded-full"></motion.span>
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div className="fixed inset-0 bg-black/60 z-40" onClick={closeMenu} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
              <motion.div
                className="fixed inset-y-0 right-0 bg-gray-900 p-8 w-64 z-50 flex flex-col space-y-6 border-l border-gray-700"
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <button onClick={closeMenu} className="self-end text-gray-400 hover:text-white text-3xl" aria-label="Close menu">&times;</button>
                {renderLinks(true)}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Navigation for larger screens */}
        <div className="hidden md:flex space-x-8 items-center">
          {renderLinks()}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;