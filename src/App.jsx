// App.js or App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectOnePage from './pages/ProjectOnePage';
import ProjectTwoPage from './pages/ProjectTwoPage';
import ProjectThreePage from './pages/ProjectTreePage'
// Other imports...

const App = () => {
  return (
      
      <>
          <Navbar></Navbar>
          <Routes> {/* Updated from Switch to Routes */}
          <Route path="/" element={<HomePage />} /> {/* Updated component prop to element */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project-one" element={<ProjectOnePage />} />
          <Route path="/project-two" element={<ProjectTwoPage />} />
          <Route path="/project-three" element={<ProjectThreePage />} />

          {/* Other routes... */}
          </Routes>
        </>
        
        
    
  );
};

export default App;
