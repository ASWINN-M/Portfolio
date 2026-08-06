import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import CurrentlyBuilding from "./sections/CurrentlyBuilding";
import Projects from "./sections/projects";
import Contributions from "./sections/Contributions";
import Experience from "./components/components/Experience";
import Contact from "./components/components/Contact";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <CurrentlyBuilding />
      <Projects />
      <Contributions />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
