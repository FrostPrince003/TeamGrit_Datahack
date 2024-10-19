import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Landing/Home';
import Flatcard from './components/Quiz/Flatcard';
import { ButtonDemo } from './components/Quiz/Button';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flatcard" element={<Flatcard />} />
        <Route path="/button" element={<ButtonDemo />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
