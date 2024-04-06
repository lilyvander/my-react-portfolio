import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import './index.css';
import './App.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider> {/* Wrap your entire application inside ChakraProvider */}
      <Router>
        <div>
          <div className="header-styled">
            <Header />
          </div>
          <div className="AboutMe-styled">
            <AboutMe />
          </div>
          <div>
            <Projects />
          </div>
          <div className="Contact-styled">
            <Contact />
          </div>
          <div className='Footer-styled'>
            <Footer />
          </div>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
