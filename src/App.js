import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume'

export default function App() {
  return (
    <div className="app pb-1">
      <Router>
        <Header />

        <Routes>
          <Route
            path='/react-portfolio-challenge-20/'
            element={<Home />}
          />
          <Route
            path='/react-portfolio-challenge-20/about'
            element={<About />}
          />
          <Route
            path='/react-portfolio-challenge-20/portfolio'
            element={<Portfolio />}
          />
          <Route
            path='/react-portfolio-challenge-20/contact'
            element={<Contact />}
          />
          <Route 
            path='react-portfolio-challenge-20/resume'
            element={<Resume />}
          />
          <Route 
            path='react-portfolio-challenge-20/*'
            element={<Home />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
