import './App.css';
import About from './About';
import Nav from './Nav';
import Contact from './Contact';
import { useState } from 'react';
import Portfolio from './Portfolio';


function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Nav setShow={setShow} show={show} />
      <About />
      <Portfolio />
      {/* {show && <Contact />} */}
      <Contact />
    </div>
  );
}

export default App;
