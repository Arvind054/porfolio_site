import React from "react";
import NavBar from "./components/NavBar/navBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
