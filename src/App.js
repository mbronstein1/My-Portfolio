import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/Home'

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const renderPage = () => {
    if (currentPage === '/') {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange} />;
    };
    // if (currentPage === 'about') {
    //   return <About />;
    // };
    // if (currentPage === 'portfolio') {
    //   return <Portfolio />;
    // };
    // if (currentPage === 'contact') {
    //   return <Contact />;
    // };
    // return <Resume />;
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
