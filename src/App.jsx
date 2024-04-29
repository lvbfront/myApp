// App.js or App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// Other imports...

const App = () => {
  return (
    
      <div className="App">
        <Navbar />
        <Routes> {/* Updated from Switch to Routes */}
          <Route path="/" element={<HomePage />} /> {/* Updated component prop to element */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Other routes... */}
        </Routes>
      </div>
    
  );
};

export default App;
