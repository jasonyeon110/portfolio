import './App.css';
import Intro from './Intro';
import Nav from './Nav';
import Contact from './Contact';
import { useState } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Skills from './Skills';


function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Nav setShow={setShow} show={show} />
      <Intro />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      {show && <Contact />}

    </div>
  );
}

export default App;
