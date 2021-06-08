import './App.css';
import Intro from './Intro';
import Nav from './Nav';
import { useState } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';


function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <span id="top"></span>
      <div >
        <Nav setShow={setShow} show={show} />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
