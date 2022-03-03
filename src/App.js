import "./App.css";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
