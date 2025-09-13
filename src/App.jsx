import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Project from "./component/Project";
import About from "./component/About";
import AboutMe from "./component/AboutMe";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <About />
      <AboutMe />
      <Footer />
    </div>
  );
};
export default App;
