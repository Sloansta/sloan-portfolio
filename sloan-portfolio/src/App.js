import './App.css';
import React, { useState } from 'react';
import Nav from './components/Navigation'
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {

  const [pages] = useState(['About', 'Projects', 'Contact']);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App main-container">
      <Nav 
        page={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}>
        </Nav>
        <main>
          {currentPage === "About" && <About />}
          {currentPage === "Projects" && <Project />}
          {currentPage === "Contact" && <Contact />}
        </main>

      <Footer />
    </div>
  );
}

export default App;
