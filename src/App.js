import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';

export default function App() {
  return (
    <div className="app">
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
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};
