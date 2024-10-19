import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Landing/Home';
import Flatcard from './components/Quiz/Flashcard';
import { ButtonDemo } from './components/Quiz/Button';
import Quiz from './components/Quiz/Quiz';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcard" element={<Flatcard />} />
        <Route path="/button" element={<ButtonDemo />} />
        <Route path="/quiz-generator" element={<Quiz />} />
        <Route path="/quiz-performance" element={<Quiz />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
