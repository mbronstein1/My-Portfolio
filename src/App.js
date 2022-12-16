import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

export default function App() {
  return (
    <div className='app pb-1'>
      <Router>
        <Header />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/portfolio'
            element={<Portfolio />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/resume'
            element={<Resume />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
