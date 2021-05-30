import './App.css';
import Intro from './Intro';
import Nav from './Nav';
import Contact from './Contact';
import { useState } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';


function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div >
        <Nav setShow={setShow} show={show} />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        {show && <Contact />}

      </div>
      <Footer />
    </div>
  );
}

export default App;
