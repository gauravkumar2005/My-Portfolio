<<<<<<< HEAD
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>this is my second react app</p>
      
    </>
  )
}

export default App
=======
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";


function App() {

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
>>>>>>> 0544661c9990d3a54c17d21b71917e6aa76738af
