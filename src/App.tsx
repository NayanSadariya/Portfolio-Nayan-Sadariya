import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-green">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 max-w-7xl">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;