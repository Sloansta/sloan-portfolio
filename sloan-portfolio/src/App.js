import './App.css';
import React, { useState } from 'react';
import Nav from './components/Navigation'
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import "bootstrap";

function App() {

  const [pages] = useState(['About', 'Projects', 'Contact']);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
