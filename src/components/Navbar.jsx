// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-black hover:text-gray-300">HOME</Link></li>
        <li><Link to="/about" className="text-black hover:text-gray-300">ABOUT</Link></li>
        <li><Link to="/contact" className="text-black hover:text-gray-300">CONTACT</Link></li>
        {/* Other navigation links... */}
      </ul>
    </nav>
  );
};

export default Navbar;
